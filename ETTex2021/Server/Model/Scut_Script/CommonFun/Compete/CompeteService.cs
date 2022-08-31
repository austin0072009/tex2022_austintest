using ETModel.Framework.Common.Serialization;
using System;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteService
    {

        public static void Send<Request>(Request info)
        {
            //return;
            var session = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? Game.Scene.GetComponent<NetInnerComponent>().Get(StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint) : Game.Scene.GetComponent<NetInnerComponent>().Get(Game.Scene.GetComponent<LobbyProxyComponent>().mapAddress);
            var msg = JsonUtils.Serialize(info);
            session.SendRpc(new CompeteRequest() { Message = msg });
        }

        public static async Task<Response> Call<Response>(cs_compete info) where Response : sc_compete
        {
            //return default;
            try
            {
                info.isreturn = true;
                var session = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? Game.Scene.GetComponent<NetInnerComponent>().Get(StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint) : Game.Scene.GetComponent<NetInnerComponent>().Get(Game.Scene.GetComponent<LobbyProxyComponent>().mapAddress);
                var rsp = (CompeteResponse)await session.Call(new CompeteRequest() { Message = JsonUtils.Serialize(info) });
                return JsonUtils.Deserialize<Response>(rsp.Message);
            }
            catch (Exception ex) { CommonFun.PrintError("比赛消息异常", ex); }
            return default;
        }
        public static async Task<string> Call(cs_compete info)
        {
            try
            {
                info.isreturn = true;
                var session = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? Game.Scene.GetComponent<NetInnerComponent>().Get(StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint) : Game.Scene.GetComponent<NetInnerComponent>().Get(Game.Scene.GetComponent<LobbyProxyComponent>().mapAddress);
                var rsp = (CompeteResponse)await session.Call(new CompeteRequest() { Message = JsonUtils.Serialize(info) });
                return rsp.Message;
            }
            catch (Exception ex) { CommonFun.PrintError("比赛消息异常", ex); }
            return null;
        }
    }
}
