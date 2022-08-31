
using Common.NLog;
using ETModel.Framework.Common.Configuration;
using ETModel.Framework.Game.Config;
using ETModel.Framework.Game.Lang;
using ETModel.Framework.Game.Runtime;
using ETModel.Framework.Game.Service;
using ETModel.Framework.RPC.Http;
using ETModel.Framework.RPC.IO;
using ETModel.Framework.RPC.Sockets;
using System;
using System.IO;
using System.Net;
using System.Threading;

namespace ETModel.Framework.Game.Contract
{
    /// <summary>
    /// 游戏服Socket通讯宿主基类
    /// </summary>
    public abstract class GameSocketHost : GameBaseHost
    {
        //private SmartThreadPool threadPool;
        private SocketListener socketListener;
        private HttpListener httpListener;
        private HttpCDNAddress _httpCdnAddress;

        /// <summary>
        /// Protocol Section
        /// </summary>
        public ProtocolSection GetSection()
        {
            return ConfigManager.Configger.GetFirstOrAddConfig<ProtocolSection>();
        }

        /// <summary>
        /// The enable http.
        /// </summary>
        protected bool EnableHttp;



        /// <summary>
        /// Action repeater
        /// </summary>
        public IActionDispatcher ActionDispatcher
        {
            get { return _setting == null ? null : _setting.ActionDispatcher; }
            set
            {
                if (_setting != null)
                {
                    _setting.ActionDispatcher = value;
                }
            }
        }

        private EnvironmentSetting _setting;

        /// <summary>
        /// 
        /// </summary>
        protected GameSocketHost()
            : this(new RequestHandler(new MessageHandler()))
        {
        }

        /// <summary>
        /// 
        /// </summary>
        protected GameSocketHost(RequestHandler requestHandler)
        {
            _setting = GameEnvironment.Setting;
            int port = _setting != null ? _setting.GamePort : 0;
            IPEndPoint localEndPoint = new IPEndPoint(IPAddress.Any, port);

            var section = GetSection();
            int maxConnections = section.SocketMaxConnection;
            int backlog = section.SocketBacklog;
            int maxAcceptOps = section.SocketMaxAcceptOps;
            int bufferSize = section.SocketBufferSize;
            int expireInterval = section.SocketExpireInterval;
            int expireTime = section.SocketExpireTime;

            //threadPool = new SmartThreadPool(180 * 1000, 100, 5);
            //threadPool.Start();

            var socketSettings = new SocketSettings(maxConnections, backlog, maxAcceptOps, bufferSize, localEndPoint, expireInterval, expireTime);
            socketListener = new SocketListener(socketSettings, requestHandler);
            socketListener.DataReceived += new ConnectionEventHandler(socketLintener_DataReceived);
            socketListener.Connected += new ConnectionEventHandler(socketLintener_OnConnectCompleted);
            socketListener.Disconnected += new ConnectionEventHandler(socketLintener_Disconnected);

            _httpCdnAddress = new HttpCDNAddress();
            httpListener = new HttpListener();
            var httpHost = section.HttpHost;
            var httpPort = section.HttpPort;
            var httpName = section.HttpName;

            if (!string.IsNullOrEmpty(httpHost))
            {
                EnableHttp = true;
                var hosts = httpHost.Split(',');
                foreach (var point in hosts)
                {
                    var addressList = point.Split(':');
                    string host = addressList[0];
                    int hport = httpPort;
                    if (addressList.Length > 1)
                    {
                        int.TryParse(addressList[1], out hport);
                    }

                    string address = host.StartsWith("http", StringComparison.InvariantCultureIgnoreCase)
                                         ? host
                                         : "http://" + host;
                    httpListener.Prefixes.Add(string.Format("{0}:{1}/{2}/", address, hport, httpName));
                }
            }
        }

        private void socketLintener_OnConnectCompleted(object sender, ConnectionEventArgs e)
        {
            
        }

        private void socketLintener_Disconnected(object sender, ConnectionEventArgs e)
        {
            
        }

        private void socketLintener_DataReceived(object sender, ConnectionEventArgs e)
        {
            
        }
           
         


        #region http server
        private void OnHttpRequest(IAsyncResult result)
        {
            try
            {
                HttpListener listener = (HttpListener)result.AsyncState;
                HttpListenerContext context = listener.EndGetContext(result);
                listener.BeginGetContext(OnHttpRequest, listener);
                string userHostAddress = _httpCdnAddress.GetUserHostAddress(context.Request.RemoteEndPoint,
                    key => context.Request.Headers[key]);
                RequestPackage package;
                if (!ActionDispatcher.TryDecodePackage(context, out package))
                {
                    return;
                }

                GameSession session;
                if (package.ProxySid != Guid.Empty)
                {
                    session = GameSession.Get(package.ProxySid) ?? GameSession.CreateNew(package.ProxySid, context.Request);
                    session.ProxySid = package.ProxySid;
                }
                else
                {
                    session = (string.IsNullOrEmpty(package.SessionId)
                            ? GameSession.GetSessionByCookie(context.Request)
                            : GameSession.Get(package.SessionId))
                        ?? GameSession.CreateNew(Guid.NewGuid(), context.Request);
                }
                session.RemoteAddress = userHostAddress;
                package.Bind(session);

                ActionGetter httpGet = ActionDispatcher.GetActionGetter(package, session);
                if (package.IsUrlParam)
                {
                    httpGet["UserHostAddress"] = session.RemoteAddress;
                    httpGet["ssid"] = session.KeyCode.ToString("N");
                    httpGet["http"] = "1";
                }
                //set cookie
                var cookie = context.Request.Cookies["sid"];
                if (cookie == null)
                {
                    cookie = new Cookie("sid", session.SessionId);
                    cookie.Expires = DateTime.Now.AddMinutes(5);
                    context.Response.SetCookie(cookie);
                }


                var httpresponse = new SocketGameResponse();
                httpresponse.WriteErrorCallback += new ScutActionDispatcher().ResponseError;

                var clientConnection = new HttpClientConnection
                {
                    Context = context,
                    Session = session,
                    ActionGetter = httpGet,
                    GameResponse = httpresponse
                };
                var section = GetSection();
                clientConnection.TimeoutTimer = new Timer(OnHttpRequestTimeout, clientConnection, section.HttpRequestTimeout, Timeout.Infinite);
                byte[] respData = new byte[0];
                if (!string.IsNullOrEmpty(package.RouteName))
                {
                    if (CheckRemote(package.RouteName, httpGet))
                    {
                        MessageStructure response = new MessageStructure();
                        OnCallRemote(package.RouteName, httpGet, response);
                        respData = response.PopBuffer();
                    }
                }
                else
                {
                    DoAction(httpGet, httpresponse);
                    respData = httpresponse.ReadByte();
                }
                OnHttpResponse(clientConnection, respData, 0, respData.Length);

            }
            catch (Exception ex)
            {
                TraceLog.WriteError("OnHttpRequest error:{0}", ex);
            }
        }

        private void OnHttpRequestTimeout(object state)
        {
            try
            {
                HttpClientConnection clientConnection = (HttpClientConnection)state;
                if (clientConnection == null) return;
                var actionGetter = clientConnection.ActionGetter;
                clientConnection.GameResponse.WriteError(actionGetter, Language.Instance.ErrorCode, "Request Timeout.");
                byte[] respData = clientConnection.GameResponse.ReadByte();
                OnHttpResponse(clientConnection, respData, 0, respData.Length);
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("OnHttpRequestTimeout:{0}", ex);
            }
        }

        private void OnHttpResponse(HttpClientConnection connection, byte[] data, int offset, int count)
        {
            try
            {
                connection.TimeoutTimer.Dispose();
                HttpListenerResponse response = connection.Context.Response;
                //response.ContentType = "text/html";
                response.ContentType = "application/octet-stream";
                if (data[offset] == 0x1f && data[offset + 1] == 0x8b && data[offset + 2] == 0x08 && data[offset + 3] == 0x00)
                {
                    response.AddHeader("Content-Encoding", "gzip");
                }
                response.AddHeader("Access-Control-Allow-Origin", "*");
                response.ContentLength64 = count;
                Stream output = response.OutputStream;
                output.Write(data, offset, count);
                output.Close();
                connection.Close();
            }
            catch
            {

            }
        }
        #endregion

        /// <summary>
        /// 
        /// </summary>
        public override void Start(string[] args)
        {
            socketListener.StartListen();
            if (EnableHttp)
            {
                httpListener.Start();
                foreach (var prefix in httpListener.Prefixes)
                {
                    TraceLog.WriteLine("{0} Http service:{1} is started.", DateTime.Now.ToString("HH:mm:ss"), prefix.TrimEnd('/'));
                }
                httpListener.BeginGetContext(OnHttpRequest, httpListener);
            }
            EntitySyncManger.SendHandle += (userId, data) =>
            {
                GameSession session = GameSession.Get(userId);
                if (session != null)
                {
                    var task = session.SendAsync(OpCode.Binary, data, 0, data.Length, result => { });
                    task.Wait();
                    return task.Result;
                }
                return false;
            };
            TraceLog.WriteLine("{0} Socket service {1}:{2} is started.", DateTime.Now.ToString("HH:mm:ss"), _setting.GameIpAddress, _setting.GamePort);
            base.Start(args);
        }

        /// <summary>
        /// 
        /// </summary>
        public override void Stop()
        {
            base.Stop();
            if (EnableHttp)
            {
                httpListener.Stop();
            }
            socketListener.Dispose();
            try
            {
                OnServiceStop();
                //threadPool.Dispose();
                EntitySyncManger.Dispose();
                //threadPool = null;
            }
            catch
            {
            }
        }


        private class HttpClientConnection
        {
            public GameSession Session;
            public HttpListenerContext Context;
            public Timer TimeoutTimer;
            public ActionGetter ActionGetter;
            public SocketGameResponse GameResponse;
            public void Close()
            {
            }
        }
    }
}