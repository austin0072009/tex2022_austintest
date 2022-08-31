using ETModel.Framework.Game.Contract;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using Model.Scut_Script.Common;

namespace ETModel
{
    [ActorMessageHandler(AppType.Map)]
    public class G2M_SessionDisconnectHandler : AMActorLocationHandler<Unit, G2M_SessionDisconnect>
    {
        ConnectManager manager = ConnectManager.Instance;
        protected override async ETTask Run(Unit unit, G2M_SessionDisconnect message)
        {
            //await Task.Run(()=> 
            //{
            //	ActionFactory.OnDisconnected((int)unit.UserID, unit.Remoteaddress);
            //});
            await ThreadEx.Sleep(0);
            if (message.Type == 1) { manager.Online((int)unit.UserID); }
            else if (message.Type == 2 && unit.UserID == UserTimeout.playerid) manager.OutTime();
            else
            {
                ActionFactory.OnDisconnected((int)unit.UserID, unit.Remoteaddress);
                //GameEntityCache.Instance.Rmove<tUser>(unit.UserID);
                //Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(0, "RemoveUserCache", (int)unit.UserID, null);
                manager.Offline((int)unit.UserID);
                unit.GetComponent<UnitGateComponent>().IsDisconnect = true;
            }
            await ETTask.CompletedTask;
        }
        void PublishOffline(int userid)
        {
            if (StartConfigComponent.Instance.ScutGameConfigs != null && StartConfigComponent.Instance.ScutGameConfigs.Count > 0)
            {
                foreach (var item in StartConfigComponent.Instance.ScutGameConfigs)
                {
                    var session = Game.Scene.GetComponent<NetInnerComponent>().Get(item.GetComponent<InnerConfig>().IPEndPoint);
                    session.Call(new Lobby_CommonFun2Request { _g = 0, funname = "RemoveUserCache", UserID = userid });
                }
            }
        }
    }
}