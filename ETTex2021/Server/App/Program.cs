using ETModel;
using ETModel.Framework.Common.Security;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action; 
using NLog;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
//https://www.cnblogs.com/zhangliang111/p/11676615.html
namespace App
{
    internal static class Program
    {
        public static List<Action> actions = new List<Action>();

      
        private static async System.Threading.Tasks.Task Main(string[] args)
        { 
          //  Console.WriteLine($"SnsCenter：{CryptoHelper.DES_Decrypt("6234E49107F6CB0377052D2DB03C3AB0CDE09B2435B287AB641338A5C45AD6A5BE1B854D0D6ED3FBFFA6110430677F554842DBCB65CC4E47EDDC1945D3CED")}");
          //  Console.WriteLine($"ConnData：{CryptoHelper.DES_Decrypt("6234E49107F6CB0377052D2DB03C3D25A2EE7B84AA22921CA508E4806BEB33AC1F7DB1C8A47DEDB63FAA7C03EEB9936537A93300A860A563CDA81F370D0DD")}");
          //  Console.WriteLine($"SystemData：{CryptoHelper.DES_Decrypt("6234E49107F6CB0377052D2DB03C3D25A2EE7B84AA229C254EAB0FA0778225A6DC93DE260D240BEDF9E993F9EC1BD442F5BB2E4325043")}");
            //Console.WriteLine($"SystemData：{CryptoHelper.DES_Decrypt("5D17043A6F4F02107B0C0280813ABE46FB98276FCA666B215D9007C81D4885B9ADF63DDE8F6AE0FC553CF74E3B1C0BA21B0ADE6D7ECBBF982A8D4CFFA714D805D6642D8366E780B6C359EC3E0FEA068DAFAD1882A59D021F57877341FFFB70AB759102F83DBA30EEABB00D9103B048B1CAB10CE120EC7EBE")}");
            Console.WriteLine($"Redis：{CryptoHelper.DES_Encrypt("127.0.0.1:6379")}");
            Console.WriteLine($"SnsCenter：{CryptoHelper.DES_Encrypt("Data Source=127.0.0.1;Database=snscenterwhirl;Uid=root;Pwd=qq258369.;")}");
            Console.WriteLine($"ConnData：{CryptoHelper.DES_Encrypt("Data Source=127.0.0.1;Database=h5game_2021;Uid=root;Pwd=qq258369.;")}");
            Console.WriteLine($"SystemData：{CryptoHelper.DES_Encrypt("Data Source=127.0.0.1;Database=h5game_gm;Uid=root;Pwd=qq258369.;")}");
            ProgramTest.JsonStringTest(); 
            // 异步方法全部会回掉到主线程
            SynchronizationContext.SetSynchronizationContext(OneThreadSynchronizationContext.Instance);
            Unit _tobj = null;
            JsonUtils.Serialize(_tobj);
            try
            {
                Game.EventSystem.Add(DLLType.Model, typeof(Game).Assembly);

                Options options = Game.Scene.AddComponent<OptionComponent, string[]>(args).Options;
                StartConfig startConfig = Game.Scene.AddComponent<StartConfigComponent, string, int>(options.Config, options.AppId).StartConfig;

                if (!options.AppType.Is(startConfig.AppType))
                {
                    Log.Error("命令行参数apptype与配置不一致");
                    return;
                }

                IdGenerater.AppId = options.AppId;

                LogManager.Configuration.Variables["appType"] = $"{startConfig.AppType}";
                LogManager.Configuration.Variables["appId"] = $"{startConfig.AppId}";
                LogManager.Configuration.Variables["appTypeFormat"] = $"{startConfig.AppType,-8}";
                LogManager.Configuration.Variables["appIdFormat"] = $"{startConfig.AppId:0000}";

                Log.Info($"server start........................ {startConfig.AppId} {startConfig.AppType}");
                if (startConfig.AppType == AppType.ScutGame)
                {
                    Console.Title = $"{startConfig.AppType}[{startConfig.AppId}] GameID:{startConfig.para}";
                }
                else
                {
                    Console.Title = $"{startConfig.AppType}[{startConfig.AppId}]";
                }

                Game.Scene.AddComponent<TimerComponent>();
                Game.Scene.AddComponent<OpcodeTypeComponent>();
                Game.Scene.AddComponent<MessageDispatcherComponent>();

                // 根据不同的AppType添加不同的组件
                OuterConfig outerConfig = startConfig.GetComponent<OuterConfig>();
                InnerConfig innerConfig = startConfig.GetComponent<InnerConfig>();
                ClientConfig clientConfig = startConfig.GetComponent<ClientConfig>();
                Game.Scene.AddComponent<RedisSuccessComponent>();
                switch (startConfig.AppType)
                {
                    case AppType.Manager:
                        Game.Scene.AddComponent<AppManagerComponent>();
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        //Game.Scene.AddComponent<WebSocketOuterComponent, string>("http://" + outerConfig.Address+"/");
                        Game.Scene.AddComponent<NetOuterComponent, string>(outerConfig.Address);
                        break;
                    case AppType.Realm://登录服务器。
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();//对Actor消息进行管理（添加、移除、分发等）
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent, string>(outerConfig.Address);

                        Game.Scene.AddComponent<LocationProxyComponent>();
                        Game.Scene.AddComponent<RealmGateAddressComponent>();
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的
                        Game.Scene.AddComponent<RedisDBProxyComponent>();
                        break;
                    case AppType.Gate:

                        Game.Scene.AddComponent<PlayerComponent>();
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent, string>(outerConfig.Address);
                        Game.Scene.AddComponent<LocationProxyComponent>();
                        Game.Scene.AddComponent<ActorMessageSenderComponent>();
                        Game.Scene.AddComponent<ActorLocationSenderComponent>();
                        Game.Scene.AddComponent<GateSessionKeyComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的
                        Game.Scene.AddComponent<RedisDBProxyComponent>();
                        break;
                    case AppType.Location:
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<LocationComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();
                        break;

                    case AppType.AllServer:

                        Game.Scene.AddComponent<ActorMessageSenderComponent>();// 发送普通actor消息 
                        Game.Scene.AddComponent<ActorLocationSenderComponent>();// 发送location actor消息
                        Game.Scene.AddComponent<LocationComponent>();  // location server需要的组件 
                        Game.Scene.AddComponent<LocationProxyComponent>();// 访问location server的组件

                        Game.Scene.AddComponent<RedisDBComponent>();  //DB服
                        Game.Scene.AddComponent<RedisDBProxyComponent>();

                        Game.Scene.AddComponent<HttpGMComponent>();//http://127.0.0.1:8080/Service?data=11 测试未跑通


                        // 这两个组件是处理actor消息使用的
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();


                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);    // 内网消息组件  
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent, string>(outerConfig.Address);    // 外网消息组件 要增加一個配置地址 TCP與WS同時存在

                        // manager server组件，用来管理其它进程使用
                        Game.Scene.AddComponent<AppManagerComponent>();
                        Game.Scene.AddComponent<RealmGateAddressComponent>();
                        Game.Scene.AddComponent<GateSessionKeyComponent>();

                        //与客户端有连接都要加
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的

                        // 配置管理
                        Game.Scene.AddComponent<ConfigComponent>();

                        Game.Scene.AddComponent<PlayerComponent>();
                        Game.Scene.AddComponent<UnitComponent>();

                        Game.Scene.AddComponent<ConsoleComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();

                        Game.Scene.AddComponent<ControlLogComponent>();
                        Game.Scene.AddComponent<TableComponent>();
                        Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(InitMapLobby);
                        Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(InitScutGame);
                        //InitMapLobby();
                        //InitScutGame();
                        break;
                    case AppType.Benchmark:
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent>();
                        Game.Scene.AddComponent<BenchmarkComponent, string>(clientConfig.Address);
                        break;
                    case AppType.BenchmarkWebsocketServer:
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent, string>(outerConfig.Address);
                        break;
                    case AppType.BenchmarkWebsocketClient:
                        Game.Scene.AddComponent<WebSocketOuterComponent, string>(outerConfig.ws);
                        Game.Scene.AddComponent<NetOuterComponent>();
                        Game.Scene.AddComponent<WebSocketBenchmarkComponent, string>(clientConfig.Address);
                        break;
                    case AppType.RedisDB:
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();//对Actor消息进行管理（添加、移除、分发等）
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<LocationProxyComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();
                        Game.Scene.AddComponent<ActorMessageSenderComponent>();
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的
                        //DB服
                        Game.Scene.AddComponent<RedisDBComponent>();
                        Game.Scene.AddComponent<RedisDBProxyComponent>();
                        break;

                    case AppType.Map://AppType.ScutLobby
                                     //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(14500);
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();//对Actor消息进行管理（添加、移除、分发等）
                        Game.Scene.AddComponent<ActorLocationSenderComponent>();
                        Game.Scene.AddComponent<LocationProxyComponent>();
                        Game.Scene.AddComponent<ActorMessageSenderComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();

                        Game.Scene.AddComponent<UnitComponent>();
                        Game.Scene.AddComponent<RedisDBProxyComponent>();
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的 

                        //Game.Scene.AddComponent<LobbyProxyComponent>();
                        Game.Scene.AddComponent<ControlLogComponent>();
                        Game.Scene.AddComponent<HttpGMComponent>();//http://127.0.0.1:8080/Service?data=11 测试未跑通
                        Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(InitMapLobby);
                        //InitMapLobby();
                        break;

                    case AppType.ScutGame:
                        //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(14500);
                        Game.Scene.AddComponent<NetInnerComponent, string>(innerConfig.Address);
                        Game.Scene.AddComponent<MailboxDispatcherComponent>();
                        Game.Scene.AddComponent<ActorMessageDispatcherComponent>();//对Actor消息进行管理（添加、移除、分发等）
                        Game.Scene.AddComponent<ActorLocationSenderComponent>();
                        Game.Scene.AddComponent<LocationProxyComponent>();
                        Game.Scene.AddComponent<ActorMessageSenderComponent>();
                        Game.Scene.AddComponent<CoroutineLockComponent>();
                        Game.Scene.AddComponent<TableComponent>();
                        Game.Scene.AddComponent<UnitComponent>();
                        Game.Scene.AddComponent<RedisDBProxyComponent>();
                        Game.Scene.AddComponent<HeartbeatMgrComponent>();//心跳管理组件 验证服 也是要加的

                        //Game.Scene.AddComponent<LobbyProxyComponent>();
                        Game.Scene.AddComponent<ControlLogComponent>();
                        Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(InitMapLobby);
                        Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(InitScutGame);
                        //InitMapLobby();
                        //InitScutGame();
                        break;
                    default:
                        throw new Exception($"命令行参数没有设置正确的AppType: {startConfig.AppType}");
                }
                ResetLocalIP();
                //Game.Scene.GetComponent<RedisSuccessComponent>()?.actions.Add(ProgramTest.CompeteTest);
                //以消息控制启动流程
                if (startConfig.AppType == AppType.AllServer || startConfig.AppType == AppType.RedisDB) { IPManager.Ins.SendMessage(new A2A_AppInfoRequest { Message = JsonUtils.Serialize(new RedisSuccess()) }); }
                else if (startConfig.AppType == AppType.Map || startConfig.AppType == AppType.ScutGame) { IPManager.Ins.SendMessage(new A2A_AppInfoRequest { Message = JsonUtils.Serialize(new RedisIsSuccess { appid = StartConfigComponent.Instance.StartConfig.AppId }) }, StartConfigComponent.Instance.RedisDBConfig.AppId); }
                //Texas texas = new Texas();
                //Queue<int> LeftCard;
                //for(int i = 0; i < 1000000; i++)
                //{
                //    Console.WriteLine($"第{i}次");
                //    List<List<int>> tmp = texas.DistributePokerAI(3,51, out LeftCard, 9);
                //}
                //TaskHelper.GetTaskList(39554);
                while (true)
                {
                    try
                    {
                        Thread.Sleep(1);
                        OneThreadSynchronizationContext.Instance.Update();
                        Game.EventSystem.Update();
                    }
                    catch (Exception e)
                    {
                        Log.Error(e);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("节点异常即将关闭", e);
                Log.Error(e);
            }
        }
        private static async void InitMapLobby()
        {
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(5000);
            Game.Scene.AddComponent<LobbyProxyComponent>();
            Game.Scene.AddComponent<UserTimeout>();
            ConfigLoader.StartLoadForGame();
            GlobalSysConfig.LoadConfig();
        }
        private static async void InitScutGame()
        {
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(5000);
            //Game.Scene.AddComponent<LobbyProxyComponent, string>(para);
            //Game.Scene.AddComponent<UserTimeout>();
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(5000);
            Game.Scene.AddComponent<ScutGameComponent, string>(StartConfigComponent.Instance.StartConfig.para);
        }

        private static void ResetLocalIP()
        {
            var service = IPAddress.Parse("0.0.0.0");
            var local = IPAddress.Parse("127.0.0.1");
            if (StartConfigComponent.Instance.GateConfigs != null) ResetLocalIP(StartConfigComponent.Instance.GateConfigs, service, local);
            if (StartConfigComponent.Instance.MapConfigs != null) ResetLocalIP(StartConfigComponent.Instance.MapConfigs, service, local);
            if (StartConfigComponent.Instance.ScutGameConfigs != null) ResetLocalIP(StartConfigComponent.Instance.ScutGameConfigs, service, local);
            if (StartConfigComponent.Instance.LocationConfig != null) ResetLocalIP(StartConfigComponent.Instance.LocationConfig, service, local);
            if (StartConfigComponent.Instance.DBConfig != null) ResetLocalIP(StartConfigComponent.Instance.DBConfig, service, local);
            if (StartConfigComponent.Instance.RealmConfig != null) ResetLocalIP(StartConfigComponent.Instance.RealmConfig, service, local);
            if (StartConfigComponent.Instance.RedisDBConfig != null) ResetLocalIP(StartConfigComponent.Instance.RedisDBConfig, service, local);
            if (StartConfigComponent.Instance.StartConfig != null) ResetLocalIP(StartConfigComponent.Instance.StartConfig, service, local);
        }

        private static void ResetLocalIP(List<StartConfig> configs, IPAddress service, IPAddress local)
        {
            foreach (var config in configs)
            {
                ResetLocalIP(config, service, local);
            }
        }

        private static void ResetLocalIP(StartConfig config, IPAddress service, IPAddress local)
        {
            if (config.GetComponent<InnerConfig>().IPEndPoint.Address.Equals(service))
            {
                config.GetComponent<InnerConfig>().IPEndPoint.Address = local;
            }
        }
        //private static void OfflineTimeout()
        //{
        //    Game.Scene.Init();
        //}
    }
}
