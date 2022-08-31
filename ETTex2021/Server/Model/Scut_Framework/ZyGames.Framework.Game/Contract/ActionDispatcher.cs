
using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Text;
using System.Web;
using ETModel.Framework.Common;
using ETModel.Framework.Game.Service;
using ETModel.Framework.RPC.IO;
using ETModel.Framework.RPC.Sockets;
using HttpContext = ETModel.Framework.Common.HttpContext;

namespace ETModel.Framework.Game.Contract
{
    /// <summary>
    /// Action分发器接口
    /// </summary>
    public interface IActionDispatcher
    {
        /// <summary>
        /// decode package for socket
        /// </summary>
        /// <param name="e"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        bool TryDecodePackage(ConnectionEventArgs e, out RequestPackage package);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <param name="package"></param>
        /// <param name="statusCode"></param>
        /// <returns></returns>
        bool TryDecodePackage(HttpListenerRequest request, out RequestPackage package, out int statusCode);

        /// <summary>
        /// decode package for http
        /// </summary>
        /// <param name="context"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        bool TryDecodePackage(HttpListenerContext context, out RequestPackage package);

        /// <summary>
        /// decode package for http
        /// </summary>
        /// <param name="context"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        bool TryDecodePackage(HttpContext context, out RequestPackage package);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="package"></param>
        /// <param name="session"></param>
        /// <returns></returns>
        ActionGetter GetActionGetter(RequestPackage package, GameSession session);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="response"></param>
        /// <param name="actionGetter"></param>
        /// <param name="errorCode"></param>
        /// <param name="errorInfo"></param>
        void ResponseError(BaseGameResponse response, ActionGetter actionGetter, int errorCode, string errorInfo);
    }

    /// <summary>
    /// Action分发器
    /// </summary>
    public class ScutActionDispatcher : IActionDispatcher
    {

        /// <summary>
        /// Decode request package
        /// </summary>
        /// <param name="e"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        public virtual bool TryDecodePackage(ConnectionEventArgs e, out RequestPackage package)
        {
            var packageReader = new PackageReader(e.Data, Encoding.UTF8);
            if (TryBuildPackage(packageReader, out package))
            {
               
                return true;
            }
            return false;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <param name="package"></param>
        /// <param name="statusCode"></param>
        /// <returns></returns>
        public bool TryDecodePackage(HttpListenerRequest request, out RequestPackage package, out int statusCode)
        {
            statusCode = (int)HttpStatusCode.OK;
            string data = "";
        
                data = request.QueryString["d"];
      
            var packageReader = new PackageReader(data, request.InputStream, request.ContentEncoding);
            return TryBuildPackage(packageReader, out package);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        public virtual bool TryDecodePackage(HttpListenerContext context, out RequestPackage package)
        {
            HttpListenerRequest request = context.Request;
            HttpListenerResponse response = context.Response;
            int statuscode;

            if (TryDecodePackage(request, out package, out statuscode))
            {
                return true;
            }
            response.StatusCode = statuscode;
            response.Close();
            return false;

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        public virtual bool TryDecodePackage(HttpContext context, out RequestPackage package)
        {
            package = null;
            return false;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="package"></param>
        /// <param name="session"></param>
        /// <returns></returns>
        public virtual ActionGetter GetActionGetter(RequestPackage package, GameSession session)
        {
            return new HttpGet(package, session);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="response"></param>
        /// <param name="actionGetter"></param>
        /// <param name="errorCode"></param>
        /// <param name="errorInfo"></param>
        public virtual void ResponseError(BaseGameResponse response, ActionGetter actionGetter, int errorCode, string errorInfo)
        {
            string st = actionGetter.GetSt();
            ProtocolVersion prtcl = actionGetter.GetPtcl();
            MessageHead head = new MessageHead(actionGetter.GetMsgId(), actionGetter.GetActionId(), st, errorCode, errorInfo);
            MessageStructure sb = new MessageStructure();
            if (prtcl >= ProtocolVersion.ExtendHead)
            {
                sb.PushIntoStack(0); //不输出扩展头属性
            }
            sb.WriteBuffer(head);
            response.BinaryWrite(sb.PopBuffer());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="packageReader"></param>
        /// <param name="package"></param>
        /// <returns></returns>
        protected virtual bool TryBuildPackage(PackageReader packageReader, out RequestPackage package)
        {
            package = null;
            Guid proxySid;
            packageReader.TryGetParam("ssid", out proxySid);
            int actionid;
            if (!packageReader.TryGetParam("actionid", out actionid))
            {
                return false;
            }
            int msgid;
            if (!packageReader.TryGetParam("msgid", out msgid))
            {
                return false;
            }
            int userId;
            packageReader.TryGetParam("uid", out userId);
            string sessionId;
            string proxyId;
            int ptcl;
            packageReader.TryGetParam("sid", out sessionId);
            packageReader.TryGetParam("proxyId", out proxyId);
            packageReader.TryGetParam("ptcl", out ptcl);

            package = new RequestPackage(msgid, sessionId, actionid, userId, ptcl.ToEnum<ProtocolVersion>())
            {
                ProxySid = proxySid,
                ProxyId = proxyId,
                IsProxyRequest = packageReader.ContainsKey("isproxy"),
                RouteName = packageReader.RouteName,
                IsUrlParam = true,
                Params = packageReader.Params,
                Message = packageReader.InputStream,
                OriginalParam = packageReader.RawParam
            };
            return true;
        }

    }
}
