using ETModel;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace Model.Scut_Script.Common
{
    [MessageHandler(AppType.ScutGame)]
    public class GameStartComplateHandler : IMHandler
    {
        public Type GetMessageType()
        {
            return typeof(ComponentComplateMessage);
        }
        public async ETTask Run(ComponentComplateMessage info)
        {
            Console.WriteLine("收到游戏[" + info.gameid + "]在所有服务器上启动完成消息");
            if (info.apptype == (int)StartConfigComponent.Instance.StartConfig.AppType && FactoryCommon.games.ContainsKey(info.gameid))
            {
                ProgramTest.NumberFieldTest(info.gameid);
            }
            await ETTask.CompletedTask;
        }
        public async ETVoid Handle(Session session, object message)
        {
            try
            {

                ComponentComplateMessage request = message as ComponentComplateMessage;
                if (request == null)
                {
                    Log.Error($"消息类型转换错误: {message.GetType().Name} to {typeof(ComponentComplateMessage).Name}");
                }

                int rpcId = request.RpcId;
                long instanceId = session.InstanceId;

                try { await this.Run(request); }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    Log.Error(e);
                }
            }
            catch (Exception e)
            {
                Log.Error($"解释消息失败: {message.GetType().FullName}\n{e}");
            }
        }
    }
}
