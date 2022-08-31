using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel
{
    public abstract class InnerRequestHandler<Request, Response, Info> : IMHandler where Info : IBaseInfo where Request : IRequest where Response : IResponse
    {
        public Type GetMessageType()
        {
            return typeof(Request);
        }
        protected abstract ETTask Run(Info info, string msg, Response response, Action reply);
        public PropertyInfo messageinfo = typeof(Request).GetProperty("Message");
        public string GetMessage(Request request)
        {
            if (messageinfo != null) return (string)messageinfo.GetValue(request);
            return null;
        }
        public async ETVoid Handle(Session session, object message)
        {
            try
            {
                Request request = (Request)message;
                if (request == null)
                {
                    Log.Error($"消息类型转换错误: {message.GetType().Name} to {typeof(GlobalInfoRequest).Name}");
                }

                int rpcId = request.RpcId;
                long instanceId = session.InstanceId;
                string msg = GetMessage(request);
                var info = JsonUtils.Deserialize<Info>(msg);
                if (info.isreturn)
                {
                    Response response = Activator.CreateInstance<Response>();

                    void Reply()
                    {
                        // 等回调回来,session可以已经断开了,所以需要判断session InstanceId是否一样
                        if (session.InstanceId != instanceId)
                        {
                            return;
                        }

                        response.RpcId = rpcId;
                        session.Reply(response);
                    }

                    try
                    {
                        await this.Run(info, msg, response, Reply);
                    }
                    catch (Exception e)
                    {
                        Log.Error(e);
                        response.Error = ErrorCode.ERR_RpcFail;
                        response.Message = e.ToString();
                        Reply();
                    }
                }
                else
                {
                    try { await this.Run(info, msg, default, null); }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                        Log.Error(e);
                    }
                }
            }
            catch (Exception e)
            {
                Log.Error($"解释消息失败: {message.GetType().FullName}\n{e}");
            }
        }
    }
}
