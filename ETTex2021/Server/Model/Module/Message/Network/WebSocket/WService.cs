using ETModel.Framework.Common.Serialization;
using Microsoft.IO;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.WebSockets;
using System.Security.Authentication.ExtendedProtection;
using System.Security.Policy;
using System.Security.Principal;

namespace ETModel
{
    public class WService : AService
    {
        private readonly HttpListener httpListener;

        private readonly Dictionary<long, WChannel> channels = new Dictionary<long, WChannel>();

        public RecyclableMemoryStreamManager MemoryStreamManager = new RecyclableMemoryStreamManager();

        public WService(IEnumerable<string> prefixs, Action<AChannel> acceptCallback)
        {
            this.AcceptCallback += acceptCallback;

            this.httpListener = new HttpListener();

            StartAccept(prefixs).Coroutine();
        }

        public WService()
        {
        }

        public override AChannel GetChannel(long id)
        {
            WChannel channel;
            this.channels.TryGetValue(id, out channel);
            return channel;
        }

        public override AChannel ConnectChannel(IPEndPoint ipEndPoint)
        {
            ClientWebSocket webSocket = new ClientWebSocket();
            WChannel channel = new WChannel(webSocket, this);
            this.channels[channel.Id] = channel;
            channel.ConnectAsync(ipEndPoint.ToString()).Coroutine();
            return channel;
        }

        public override AChannel ConnectChannel(string address)
        {
            ClientWebSocket webSocket = new ClientWebSocket();
            WChannel channel = new WChannel(webSocket, this);
            this.channels[channel.Id] = channel;
            channel.ConnectAsync(address).Coroutine();
            return channel;
        }

        public override void Remove(long id)
        {
            WChannel channel;
            if (!this.channels.TryGetValue(id, out channel))
            {
                return;
            }

            this.channels.Remove(id);
            channel.Dispose();
        }

        public override void Update()
        {

        }

        public async ETVoid StartAccept(IEnumerable<string> prefixs)
        {
            try
            {
                foreach (string prefix in prefixs)
                {
                    //string addr=prefix.StartsWith("http") ? prefix : "http://"+ prefix;
                    //addr = addr.EndsWith("/") ? addr : addr + "/";
                    //addr.Substring(add)
                    // 由于本框架规定websocket协议的服务器地址必须用http://或https://开头，并以/结尾。这里对服务器监听接口做了一些改动
                    string address = "http://*" + prefix.Substring(prefix.LastIndexOf(':')) + "/";
                    Console.WriteLine("websocket连接地址:" + address);
                    this.httpListener.Prefixes.Add(address);
                }

                httpListener.Start();
                HttpListenerWebSocketContext webSocketContext = null;
                while (true)
                {
                    try
                    {
                        HttpListenerContext httpListenerContext = await this.httpListener.GetContextAsync();
                        
                        webSocketContext = await httpListenerContext.AcceptWebSocketAsync(null);

                        WChannel channel = new WChannel(webSocketContext, httpListenerContext.Request, this);
                        this.channels[channel.Id] = channel;

                        this.OnAccept(channel);
                    }
                    catch (Exception e)
                    {
                        //Console.WriteLine("Websocket连接[" + JsonUtils.Serialize(webSocketContext) + "]发生异常", e);
                        Log.Error(e);
                    }
                }
            }
            catch (HttpListenerException e)
            {
                if (e.ErrorCode == 5)
                {
                    throw new Exception($"CMD管理员中输入: netsh http add urlacl url=http://*:8080/ user=Everyone", e);
                }
                Log.Error(e);
            }
            catch (Exception e)
            {
                Log.Error(e);
            }
        }
    }
}