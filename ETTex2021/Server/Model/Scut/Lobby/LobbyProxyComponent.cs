using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Net;

namespace ETModel
{
    [ObjectSystem]
    public class LobbyProxyComponentSystem : AwakeSystem<LobbyProxyComponent>
    {
        public override void Awake(LobbyProxyComponent self)
        {
            self.Awake();
        }
    }
    [ObjectSystem]
    public class LobbyProxyComponentParaSystem : AwakeSystem<LobbyProxyComponent, string>
    {
        public override void Awake(LobbyProxyComponent self, string a)
        {
            self.Awake(a);
        }
    }

    [ObjectSystem]
    public class LobbyProxyComponentUpdateSystem : UpdateSystem<LobbyProxyComponent>
    {
        public override void Update(LobbyProxyComponent self)
        {
            self.Update();
        }
    }
    /// <summary>
    ///  
    /// </summary>
    public class LobbyProxyComponent : Component
    {
        /// <summary>
        /// lobby 本身的地址就是map
        /// </summary>
		public IPEndPoint mapAddress;
        /// <summary>
        /// scutgame的地址 401. 
        /// </summary>
        public Dictionary<string, List<IPEndPoint>> games;
        public Dictionary<string, IPEndPoint> id2game;


        public AppType AppType;

        public Dictionary<int, CurrentIPPoint> players;
        public Dictionary<int, Dictionary<int, IPEndPoint>> tables;// gameid  table ip
        public Dictionary<int, HashSet<int>> onlineusers;
        public Dictionary<int, string> robotdatas;
        public Dictionary<int, HashSet<int>> gamelogins;
        public Dictionary<int, List<int>> gameapps;// gameid 启动好多服
        public Dictionary<int, Dictionary<int, int>> currentws; //当前游戏连胜值
        public Dictionary<int, Dictionary<int, int>> maxws; //数据库中最大连胜值
        public class CurrentIPPoint
        {
            public int gameID;
            public int roomID;
            public int tableID;
            public bool online;
            public IPEndPoint point;
        }
        public async void Awake()
        {
            LobbyProxyComponentEx.Awake(this);
            Console.WriteLine("ScutLobby Starting...");
     
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(10);
            //StartLobby(StartConfigComponent.Instance.StartConfig.para);
            //if (AppType == AppType.Map) UserTimeout.Instance.Init();
            Console.WriteLine("exited.");
        }
        public async void Awake(string para)
        {
            LobbyProxyComponentEx.Awake(this);
            Console.WriteLine("ScutLobby Starting para:" + para);
      
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(10);
            //StartLobby(para);
            //if (AppType == AppType.Map) UserTimeout.Instance.Init();
            Console.WriteLine("exited.");
        }
        long _ms = 0;
        public void Update()
        {
            LobbySendDataServer.instance.AutoSendDataTry();
            _ms++;
            if (_ms % 2000 == 0)
            {
            }
            if (_ms > 100000)
            {
                _ms = 0;
                Game.Scene.GetComponent<UserTimeout>()?.Send();
                Console.WriteLine(DateTime.Now + "ScutLobbyComponent.Update.......1000.");
            }
        }

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

        }
        public void StartLobby(string para)
        {
            ConfigLoader.StartLoadForGame();
            LobbySendDataServer.instance.StartServer(0);

            LobbySendDataServer.GCTimer();//定时清理内存
            if (AppType.ScutGame == this.AppType || AppType.AllServer == this.AppType) FactoryCommon.LoadGame(para);//
            Console.WriteLine("ScutLobby Start Sucessed! para:" + JsonUtils.Serialize(FactoryCommon.games.Keys).Replace(',', '.'));
        }
    }
}