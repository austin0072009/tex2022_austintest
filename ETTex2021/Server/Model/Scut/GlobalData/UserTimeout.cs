using System;

namespace ETModel
{
    [ObjectSystem]
    public class UserTimeoutSystem : AwakeSystem<UserTimeout>
    {
        public override void Awake(UserTimeout self)
        {
            self.Awake();
        }
    }
    public static class UserTimeoutHelper
    {
        public static void Awake(this UserTimeout self)
        {
            AppType type = StartConfigComponent.Instance.StartConfig.AppType;
            if (type == AppType.Map || type == AppType.AllServer) self.Init();
        }
    }
    public class UserTimeout : Entity
    {
        //private static UserTimeout instance;
        //public static UserTimeout Instance { get { if (instance == null) instance = new UserTimeout(); return instance; } }
        public static int playerid = -88888888;
        //private UserTimeout()
        //{
        //    Init();
        //}
        //Player player;
        //public ActorLocationSender actorLocationSender;
        long unitid;
        bool isinit;
        public async void Init()
        {
            var mapAddress = StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint;
            var mapSession = Game.Scene.GetComponent<NetInnerComponent>().Get(mapAddress);
            M2G_CreateUnit createUnit = (M2G_CreateUnit)await mapSession.Call(new G2M_CreateUnit() { PlayerId = playerid, GateSessionId = InstanceId,ClientAddress = mapSession.RemoteClientAddress.ToString() });
            //player = ComponentFactory.Create<Player, string, int>("ConnectManager", playerid);
            //player.UnitId = createUnit.UnitId;
            unitid = createUnit.UnitId;
            //Game.Scene.GetComponent<PlayerComponent>().Add(player);
            //actorLocationSender = Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(unitid);
            isinit = true;
        }

        public void Send()
        {
            if (isinit) 
            {
                Console.WriteLine("刷新商家用户超时任务");
                Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(unitid)?.Send(new G2M_SessionDisconnect() { Type = 2 }).Coroutine();
            }
        }

    }
}
