using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace ETModel
{
    [MessageHandler(AppType.Map)]
    public class GlobalInfoRequestHandler : InnerRequestHandler<GlobalInfoRequest, GlobalInfoReply,GlobalInfo> //IMHandler
    {
        protected Dictionary<string, Func<string, string>> commands = new Dictionary<string, Func<string, string>>();
        UpperLimitNumberGenerator generator = UpperLimitNumberGenerator.Generator(6);
        public static Timer timer;
        public GlobalInfoRequestHandler()
        {
            if (commands.Count == 0)
            {
                commands.Add(typeof(GameTableAddReq).Name, AddTable);
                commands.Add(typeof(GameTableRMReq).Name, RMTable);
                commands.Add(typeof(GameIPReq).Name, GetGameIP);
                commands.Add(typeof(GameTableIDReq).Name, GetTableID);
                commands.Add(typeof(ExcludeTableIDReq).Name, ExcludeTableID);
                commands.Add(typeof(RecycleTableIDReq).Name, RecycleTableID);
                commands.Add(typeof(RobotDataAddReq).Name, RobotDataAdd);
                commands.Add(typeof(RobotDataReq).Name, RobotData);
                commands.Add(typeof(GameServerMessage).Name, GameServerLogin);
                commands.Add(typeof(LoginCountReq).Name, LoginCount);
                commands.Add(typeof(InGameInfo).Name, UpdateUserInGame);
                commands.Add(typeof(OnlinePlayerReq).Name, OnlinePlayer);
            }
            t_anythingList.LoadDataSync();
            bool bPush = t_anythingList.GetInt("push_jackpot") == 1;
           // if(bPush&& timer==null) timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(AutoSendJackPot, state); }, this, 1000, 1000);
        }
        /// <summary>
        /// 主动推送奖池
        /// </summary>
        /// <param name="state"></param>
        private async void AutoSendJackPot(object state)
        {
            if (!IsSend()) return;
            List<string> strGameids = new List<string>(Game.Scene.GetComponent<LobbyProxyComponent>().games.Keys);
            
            List<int> gameids = new List<int>();
            List<int> jackGameIds = new List<int>() {91,92,254,301,503 };
            List<int> jackLevelIds = new List<int>() { 911, 921, 25403,25404,25405, 3011, 5031 };
            foreach (var v in strGameids)
            {
                string[] ids = v.Split('.');
                foreach(var id in ids)
                {
                    if (!string.IsNullOrEmpty(id))
                    {
                        int gameid = Convert.ToInt32(id);
                        if (jackGameIds.Contains(gameid))
                        {
                            gameids.Add(gameid);
                        }
                        
                    }
                }
            }
            if (gameids.Count > 0)
            {
                
                List<tjackpot> gamejackpot = await BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0);
                var jackpots = (from g in gamejackpot
                 join gameid in gameids
                 on g.gameid equals gameid
                 join levelid in jackLevelIds
                 on g.levelid equals levelid
                 select new JackPot
                 {
                     gameid = g.gameid,
                     levelid = g.levelid,
                     jackpot = g.jackpot
                 }).ToList();
                sc_jackpot_n scJackpot = new sc_jackpot_n() { result = 1, jacks = jackpots };
                ActionFactory.SendActorBroadcast(JsonUtils.Serialize(scJackpot));
            }
            
        }
        private bool IsSend()
        {
            Unit[] units = Game.Scene.GetComponent<UnitComponent>().GetAll();
            bool bReValue = false;
            foreach (Unit unit in units)
            {
                UnitGateComponent unitGateComponent = unit.GetComponent<UnitGateComponent>();
                if (unitGateComponent.IsDisconnect || unit.UserID <= 0)
                {
                    continue;
                }
                bReValue = true;
                break;
            }
            return bReValue;
        }
        //public async ETVoid Handle(Session session, object message)
        //{
        //    try
        //    {

        //        GlobalInfoRequest request = message as GlobalInfoRequest;
        //        if (request == null)
        //        {
        //            Log.Error($"消息类型转换错误: {message.GetType().Name} to {typeof(GlobalInfoRequest).Name}");
        //            return;
        //        }

        //        int rpcId = request.RpcId;
        //        long instanceId = session.InstanceId;
        //        var info = JsonUtils.Deserialize<GlobalInfo>(request.Message);
        //        if (info.isreturn)
        //        {
        //            GlobalInfoReply response = Activator.CreateInstance<GlobalInfoReply>();

        //            void Reply()
        //            {
        //                // 等回调回来,session可以已经断开了,所以需要判断session InstanceId是否一样
        //                if (session.InstanceId != instanceId)
        //                {
        //                    return;
        //                }

        //                response.RpcId = rpcId;
        //                session.Reply(response);
        //            }

        //            try
        //            {
        //                await this.Run(info, request.Message, response, Reply);
        //            }
        //            catch (Exception e)
        //            {
        //                Log.Error(e);
        //                response.Error = ErrorCode.ERR_RpcFail;
        //                response.Message = e.ToString();
        //                Reply();
        //            }
        //        }
        //        else
        //        {
        //            try { await this.Run(info, request.Message, null, null); }
        //            catch (Exception e)
        //            {
        //                Console.WriteLine(e);
        //                Log.Error(e);
        //            }
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        Log.Error($"解释消息失败: {message.GetType().FullName}\n{e}");
        //    }
        //}
        protected override async ETTask Run(GlobalInfo info, string msg, GlobalInfoReply response, Action reply)
        {
            //init();
            Console.WriteLine("全局消息请求:" + msg);
            //var info = JsonUtils.Deserialize<GlobalInfo>(request.Message);
            if (info != null && commands.TryGetValue(info.name, out Func<string, string> fun))
            {
                var rsp = fun(msg);
                if (info.isreturn)
                {
                    response.Message = rsp;
                    Console.WriteLine("返回全局消息:" + JsonUtils.Serialize(response));
                    reply();
                }
            }
            await ETTask.CompletedTask;
        }

        public string GetTableID(string msg)
        {
            var req = JsonUtils.Deserialize<GameTableIDReq>(msg);
            var rsp = GlobalDataService.GetTableID(req.gameid);
            return JsonUtils.Serialize(rsp);
        }
        public string RMTable(string msg)
        {
            var request = JsonUtils.Deserialize<GameTableRMReq>(msg);
            GlobalDataService.RemoveTable(request.gameid, request.tableid);
            return null;
        }

        public string AddTable(string msg)
        {
            var request = JsonUtils.Deserialize<GameTableAddReq>(msg);
            GlobalDataService.AddTable(request.gameid, request.tableid, NetworkHelper.ToIPEndPoint(request.ip));
            return null;
        }

        public string GetGameIP(string msg)
        {
            var request = JsonUtils.Deserialize<GameIPReq>(msg);
            var ip = GlobalDataService.GetGameIP(request.gameid, request.tableid);
            return JsonUtils.Serialize(new GameIPRsp() { ip = ip == null ? null : ip.ToString() });
        }

        public string ExcludeTableID(string msg)
        {
            var req = JsonUtils.Deserialize<ExcludeTableIDReq>(msg);
            GlobalDataService.ExcludeTableID(req.tableids);
            return null;
        }

        public string RecycleTableID(string msg)
        {
            var req = JsonUtils.Deserialize<RecycleTableIDReq>(msg);
            GlobalDataService.RecycleTableID(req.tableid);
            return null;
        }

        //public Type GetMessageType()
        //{
        //    return typeof(GlobalInfoRequest);
        //}
        private string RobotDataAdd(string msg)
        {
            var req = JsonUtils.Deserialize<RobotDataAddReq>(msg);
            GlobalDataService.RobotDataAdd(req.userid, req.data);
            return null;
        }
        public string RobotData(string msg)
        {
            var req = JsonUtils.Deserialize<RobotDataReq>(msg);
            var data = GlobalDataService.RobotData(req.userid);
            return JsonUtils.Serialize(new RobotDataRsp() { userid = req.userid, data = data });
        }
        public string GameServerLogin(string msg)
        {
            var req = JsonUtils.Deserialize<GameServerMessage>(msg);
            GlobalDataService.GameServerLogin(req);
            return null;
        }
        public string LoginCount(string msg)
        {
            return JsonUtils.Serialize(new LoginCountRsp { count = GlobalDataService.GetLoginCount() });
        }
        private string UpdateUserInGame(string arg)
        {
            GlobalDataService.PlayerInGame(JsonUtils.Deserialize<InGameInfo>(arg));
            return null;
        }
        public string OnlinePlayer(string msg)
        {
            var req = JsonUtils.Deserialize<OnlinePlayerReq>(msg);
            return JsonUtils.Serialize(new OnlinePlayerRsp { players = GlobalDataService.GetOnlinePlayers(req.gameid) });
        }
    }
}
