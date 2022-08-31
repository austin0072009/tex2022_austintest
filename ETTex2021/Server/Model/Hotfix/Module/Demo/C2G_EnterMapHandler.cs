using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Net;

namespace ETModel
{

    [MessageHandler(AppType.Gate)]
    public class C2G_EnterMapHandler : AMRpcHandler<C2G_EnterMap, G2C_EnterMap>
    {
        static int _index = 0;
        protected override async ETTask Run(Session session, C2G_EnterMap request, G2C_EnterMap response, Action reply)
        {
            var sessionp = session.GetComponent<SessionPlayerComponent>();
            if (sessionp == null)
            {
                Log.Error("202104121821 fetal error: C2G_EnterMap fail. sessionp is null. sessionId:" + session.InstanceId);
                reply();
                return;
            }
            Player player = sessionp.Player;
            // 在map服务器上创建战斗Unit
            List<StartConfig> maps = StartConfigComponent.Instance.MapConfigs;
            IPEndPoint mapAddress;
            if (maps.Count > 1)
            {
                //int index = RandomHelper.RandomNumber(0, 2);
                if (_index == 0) _index = 1;
                else _index = 0;
                mapAddress = maps[_index].GetComponent<InnerConfig>().IPEndPoint;
            }
            else mapAddress = maps[0].GetComponent<InnerConfig>().IPEndPoint;
            Session mapSession = Game.Scene.GetComponent<NetInnerComponent>().Get(mapAddress);
            M2G_CreateUnit createUnit = (M2G_CreateUnit)await mapSession.Call(new G2M_CreateUnit() { PlayerId = player.UserID, GateSessionId = session.InstanceId, ClientAddress = session.RemoteClientAddress.ToString() }) ;
            player.UnitId = createUnit.UnitId;
            response.UnitId = createUnit.UnitId;
            response.Units.Add(createUnit.Units);
            reply();
            Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(createUnit.UnitId)?.Send(new G2M_SessionDisconnect() { Type = 1 }).Coroutine();
            BaseHelper.UserSignin(player.UserID);
        }
    }
}