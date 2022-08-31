using ETModel.Script.CsScript.Action;
using Model.Scut_Script.Common;
using System;
using System.Collections.Generic;
using System.Net;

namespace ETModel
{
    public abstract class SyncRequestHandler<Request> : IMHandler where Request : IRequest
    {
        public Type GetMessageType()
        {
            return typeof(Request);
        }

        public async ETVoid Handle(Session session, object message)
        {
            Request request = (Request)message;
            if (request == null)
            {
                Log.Error($"消息类型转换错误: {message.GetType().Name} to {typeof(Request).Name}");
                return;
            }
            try
            {
                await Run(request);
                //GameEntityCache.Instance.Update(Type.GetType(request.TName), request.key, request.Content);
                //SendGameServer(request.key, request.TName, request.Content);
            }
            catch (Exception e)
            {
                Log.Error(e);
            }
        }
        public abstract ETTask Run(Request request);
    }
    [MessageHandler(AppType.Map)]
    public class R2M_CacheSyncRequestHandler : SyncRequestHandler<R2M_CacheSyncRequest>
    {
        public async override ETTask Run(R2M_CacheSyncRequest request)
        {
            GameEntityCache.Instance.Update(Type.GetType(request.TName), request.key, request.Content);
            IPManager.Ins.SendToGame(new M2S_CacheSyncRequest { key = request.key, TName = request.TName, Content = request.Content });
        }
    }
}
