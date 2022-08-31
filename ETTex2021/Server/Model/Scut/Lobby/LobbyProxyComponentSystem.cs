using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Net;
using static ETModel.LobbyProxyComponent;

namespace ETModel
{ 
    /// <summary>
    /// 用来与数据库操作代理
    /// </summary>
    public static class LobbyProxyComponentEx
    {
        public static void Awake(this LobbyProxyComponent self)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.MapConfigs[0];
            self.mapAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            self.onlineusers = new Dictionary<int, HashSet<int>>();
            Dictionary<string, List<IPEndPoint>> games = new Dictionary<string, List<IPEndPoint>>();
            Dictionary<string, IPEndPoint> _id2ip = new Dictionary<string, IPEndPoint>();
            Dictionary<int, List<int>> gameapps = new Dictionary<int, List<int>>();
            var Configlist = StartConfigComponent.Instance.ScutGameConfigs;
            foreach (StartConfig sc in Configlist)
            {
                if (!games.TryGetValue(sc.para, out List<IPEndPoint> ps))
                {
                    ps = new List<IPEndPoint>();
                    games.Add(sc.para, ps);
                }
                if (TryIntGameId(sc.para, out int gameid))
                {
                    if (!gameapps.TryGetValue(gameid, out List<int> apps)) { apps = new List<int>(); gameapps.Add(gameid, apps); }
                    apps.Add(sc.AppId);
                }
                ps.Add(sc.GetComponent<InnerConfig>().IPEndPoint);
                if (!_id2ip.ContainsKey(sc.para)) _id2ip.Add(sc.para, sc.GetComponent<InnerConfig>().IPEndPoint);
            }
            self.gamelogins = new Dictionary<int, HashSet<int>>();
            self.gameapps = gameapps;
            self.games = games;
            self.id2game = _id2ip;
            self.players = new Dictionary<int, CurrentIPPoint>();
            self.AppType = StartConfigComponent.Instance.StartConfig.AppType;
            self.tables = new Dictionary<int, Dictionary<int, IPEndPoint>>();
            self.robotdatas = new Dictionary<int, string>();
        }

        public static bool TryIntGameId(string id, out int gameid)
        {
            gameid = -1;
            try { gameid = int.Parse(id.Substring(0, id.Length - 1)); return true; }
            catch (Exception) { return false; }
        }
        public static void GameServerLogin(this LobbyProxyComponent self, GameServerMessage msg)
        {
            if (IPEndPoint.TryParse(msg.ip, out IPEndPoint ip) && self.games.TryGetValue(msg.gameid + ".", out List<IPEndPoint> ips) && self.gameapps.TryGetValue(msg.gameid, out List<int> apps) && GetGameIndex(apps, msg.appid, out int index))
            {
                Console.WriteLine("游戏[" + msg.gameid + "]地址[" + msg.ip + "]正在登录");
                if (!self.gamelogins.TryGetValue(msg.gameid, out HashSet<int> indexs)) { indexs = new HashSet<int>(); self.gamelogins[msg.gameid] = indexs; }
                if (!indexs.Contains(index)) indexs.Add(index);
                if (apps.Count == indexs.Count)
                {
                    Console.WriteLine("游戏[" + msg.gameid + "]在所有服务器上启动完成,给相对应的游戏服务器发送消息");
                    for (int i = 0; i < ips.Count; i++) Game.Scene.GetComponent<NetInnerComponent>().Get(ips[i]).SendRpc(new ComponentComplateMessage { apptype = (int)AppType.ScutGame, gameid = msg.gameid });
                }
            }
        }

        public static bool GetGameIndex(List<int> apps, int appid, out int index)
        {
            //return (index = apps.IndexOf(appid)) >= 0;
            for (index = 0; index < apps.Count && !apps[index].Equals(appid); index++) ;
            return index < apps.Count;
        }

        public static IPEndPoint GetGameIPFromTableID(this LobbyProxyComponent self, int gameid, int tableid, int userid = 0)
        {
            if (self == null) return null;
            if (self.tables.TryGetValue(gameid, out Dictionary<int, IPEndPoint> ttable) && ttable.TryGetValue(tableid, out IPEndPoint address))
            {
                if (userid > 0)
                {
                    if (self.players.TryGetValue(userid, out CurrentIPPoint point)) { point.gameID = gameid; point.point = address; }
                    else self.players.Add(userid, new CurrentIPPoint() { gameID = gameid, point = address });
                }
                return address;
            }
            Console.WriteLine((userid > 0 ? "玩家[" + userid + "]所在的" : "") + "游戏[" + gameid + "]牌桌[" + tableid + "]不存在");
            return null;
        }

        public static UpperLimitNumberGenerator generator = UpperLimitNumberGenerator.Generator(6);
        public static GameTableIDRsp GetTableID(this LobbyProxyComponent self, int gameid)
        {
            return new GameTableIDRsp { tableid = (int)generator.generator() };
        }

        public static void RecycleTableID(this LobbyProxyComponent self, int tableid)
        {
            generator.recycle(tableid);
        }

        public static void ExcludeTableID(this LobbyProxyComponent self, List<int> ids)
        {
            for (int i = 0; i < ids.Count; i++) generator.exclude(ids[i]);
        }

        public static void RemoveTable(this LobbyProxyComponent self, int gameid, int tableid)
        {
            if (self.tables.TryGetValue(gameid, out Dictionary<int, IPEndPoint> addressmap))
            {
                addressmap.Remove(tableid);
            }
        }
        public static void AddTable(this LobbyProxyComponent self, int gameid, int tableid, IPEndPoint ip)
        {
            if (!self.tables.TryGetValue(gameid, out Dictionary<int, IPEndPoint> addressmap))
            {
                addressmap = new Dictionary<int, IPEndPoint>();
                self.tables.Add(gameid, addressmap);
            }
            if (!addressmap.ContainsKey(tableid))
            {
                addressmap.Add(tableid, ip);
            }
        }
        public static void UpdateUserInGame(this LobbyProxyComponent self, InGameInfo msg)
        {
            if (!self.onlineusers.TryGetValue(msg.gameid, out HashSet<int> users) && msg.IsInGame) { users = new HashSet<int>(); self.onlineusers.Add(msg.gameid, users); }
            if (users != null && users.Count > 0 && (!msg.IsInGame || !msg.online)) users.Remove(msg.userid); else users.Add(msg.userid);
            if (!msg.IsInGame) { self.players.Remove(msg.userid); return; }
            if (!self.players.TryGetValue(msg.userid, out CurrentIPPoint info))
            {
                info = new CurrentIPPoint();
                self.players.Add(msg.userid, info);
            }
            info.gameID = msg.gameid; info.online = msg.online; info.point = NetworkHelper.ToIPEndPoint(msg.ip); info.roomID = msg.roomid; info.tableID = msg.tableid;
        }
        public static void UpdateUserInGame(this LobbyProxyComponent self, int userid, bool online)
        {
            if (self.players.TryGetValue(userid, out CurrentIPPoint info))
            {
                info.online = online;
                if (self.onlineusers.TryGetValue(info.gameID, out HashSet<int> users)) if (!online) users.Remove(userid); else users.Add(userid);
            }
        }
        public static int[] GetOnlinePlayers(this LobbyProxyComponent self, int gameid)
        {
            List<int> onlines = new List<int>();
            if (gameid == 0) foreach (var players in self.onlineusers.Values) onlines.AddRange(players);
            else if (self.onlineusers.TryGetValue(gameid, out HashSet<int> players)) foreach (int userid in players) onlines.Add(userid);
            return onlines.ToArray();
        } 

        private static IPEndPoint GetGameIP(this LobbyProxyComponent self, int _g, int userid = 0)
        {
            IPEndPoint address = null;
            bool ishas = self.players.TryGetValue(userid, out CurrentIPPoint point);
            if (ishas) { if (point.gameID != _g && _g != 0) self.players.Remove(userid); else address = point.point; }

            if (address == null)
            {
                if (self.AppType == AppType.AllServer)
                {
                    address = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint;
                }
                else
                {
                    var gamelist = self.games[_g + "."];
                    int index;
                    //if (gamelist.Count > 1 && (index = GetTestUserIndex(userid)) < testusers.Length) address = gamelist[index % gamelist.Count];
                    //else 
                    address = gamelist[RandomHelper.RandomNumber(0, gamelist.Count)];
                }
                if (userid > 0) { self.players.Add(userid, new CurrentIPPoint() { gameID = _g, point = address }); }
            }
            return address;
        }
         

        public static async ETTask<string> GetDBCommonFunAsync(this LobbyProxyComponent self, int _g, string _fname, string _para, int userid = 0)
        {
            try
            {
                var gameAddress = self.GetGameIP(_g, userid);
                Console.WriteLine("游戏[" + _g + "]服务器地址:" + gameAddress.ToString());
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                Lobby_CommonFunReply redisDB_RPCResponse = (Lobby_CommonFunReply)await session.Call(new Lobby_CommonFunRequest { _g = _g, funname = _fname, para = _para });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020090815335");
                return "";
            }
        }
    
        public static async ETTask<string> GetDBCommonFun2Async(this LobbyProxyComponent self, int _g, string _fname, int userid, string _para)
        {
            if (self == null)
            {
                TraceLogEx.Error("   fetal self == null 202009081533");
                return "";
            }
            try
            {
                var gameAddress = self.GetGameIP(_g, userid);
                Console.WriteLine("玩家[" + userid + "]所在的游戏[" + _g + "]服务器地址:" + gameAddress.ToString());
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _g, funname = _fname, para = _para, UserID = userid });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $"_g :{_g} _fname:{_fname} userid:{userid}  _para:{_para}");
                return "" + ex.Message;
            }
        } 

        public static async ETTask<Unit> GetUnitFromMapAsync(this LobbyProxyComponent self, int _userid)
        {
            try
            {
                Console.WriteLine("Map地址:" + self.mapAddress);
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.mapAddress);
                M2SG_GetUnitResponse redisDB_RPCResponse = (M2SG_GetUnitResponse)await session.Call(new SG2M_GetUnitResponse { userid = _userid });

                return redisDB_RPCResponse._unit;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return null;
            }
        }

        public static async ETTask<M2G_CreateUnit> CreateUnit(this LobbyProxyComponent self, int userid)
        {
            if (self.AppType == AppType.AllServer)
            {
                var ip = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint;
                Session mapSession = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
                IPEndPoint point = mapSession.RemoteAddress;
                IPEndPoint point1 = mapSession.RemoteClientAddress;
                M2G_CreateUnit createUnit = (M2G_CreateUnit)await mapSession.Call(new G2M_CreateUnit() { PlayerId = userid, GateSessionId = mapSession.InstanceId,ClientAddress = mapSession.RemoteClientAddress.ToString() });
                return createUnit;
            }
            else
            {
                var ip = StartConfigComponent.Instance.GateConfigs[0].GetComponent<InnerConfig>().IPEndPoint;
                Session gateSession = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
                Session mapSession = Game.Scene.GetComponent<NetInnerComponent>().Get(self.mapAddress);
                M2G_CreateUnit createUnit = (M2G_CreateUnit)await mapSession.Call(new G2M_CreateUnit() { PlayerId = userid, GateSessionId = gateSession.InstanceId,ClientAddress = gateSession.RemoteClientAddress.ToString() });
                return createUnit;
            }
        } 

        public static async ETTask<string> GetLobby2Game_ExitTableAsync(this LobbyProxyComponent self, int _g,   int userid, int tableid)
        {
            if (self == null)
            {
                TraceLogEx.Error("   fetal self == null 202209081533");
                return "";
            }
            try
            {
                var gameAddress = self.GetGameIP(_g, userid);
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                Lobby2game_ApplyExitTableReply redisDB_RPCResponse = (Lobby2game_ApplyExitTableReply)await session.Call(new Lobby2game_ApplyExitTableRequest { _g = _g,  tableid = tableid, UserID = userid });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $"_g :{_g}  userid:{userid}  tableid:{tableid}");
                return "" + ex.Message;
            }
        }

        #region dealdataex
        public static async ETTask<Response> GetDBCommonFunAsync<Response>(this LobbyProxyComponent self, cs_base _para) where Response : sc_base
        {
            try
            {
                var gameAddress = self.GetGameIP(_para._g, 0);
                Console.WriteLine("游戏[" + _para._g + "]服务器地址:" + gameAddress.ToString());
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                //Lobby2game_DealDataExReply redisDB_RPCResponse = (Lobby2game_DealDataExReply)await session.Call(new Lobby2game_DealDataExRequest { _g = _para._g, para = JsonUtils.Serialize(_para), UserID = 0 });
                Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _para._g, funname = "DealDataEx", para = JsonUtils.Serialize(_para), UserID = 0 });

                if (redisDB_RPCResponse == null || redisDB_RPCResponse.Message == null) return null;
                return JsonUtils.Deserialize<Response>(redisDB_RPCResponse.Message);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $" GetLobby2Game_DealDataExAsync _g 202205271107  ");
                return  null;
            }
        }     
        public static async ETTask<string> GetLobby2Game_DealDataExAsync(this LobbyProxyComponent self, int _g, int userid, string _para)
        {
            if (self == null)
            {
                TraceLogEx.Error("   fetal self == null 2021209081533");
                return "";
            }
            try
            {
                var gameAddress = self.GetGameIP(_g, userid);
                Console.WriteLine("玩家[" + userid + "]所在的游戏[" + _g + "]服务器地址:" + gameAddress.ToString());
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                //Lobby2game_DealDataExReply redisDB_RPCResponse = (Lobby2game_DealDataExReply)await session.Call(new Lobby2game_DealDataExRequest { _g = _g, para = _para, UserID = userid });
                Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _g, funname = "DealDataEx", para = _para, UserID = userid });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $" GetLobby2Game_DealDataExAsync _g :{_g}  userid:{userid}  _para:{_para}");
                return "" + ex.Message;
            }
        }

        public static async ETTask<string> GetLobby2Game_DealDataExAsyncT(this LobbyProxyComponent self, int _g, int tnum,  string real_fn, int userid, string _para)
        {
            try
            {
                var gameAddress = self.GetGameIPFromTableID(_g, tnum, userid);
                if (gameAddress != null)
                { 
                    Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                   // Lobby2game_DealDataExReply redisDB_RPCResponse = (Lobby2game_DealDataExReply)await session.Call(new Lobby2game_DealDataExRequest { _g = _g, para = _para, UserID = userid });
                    Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _g, funname = "DealDataEx", para = _para, UserID = userid });

                    return redisDB_RPCResponse.Message;
                }
                return JsonUtils.Serialize(new sc_base() { fn = real_fn.Replace("cs_", "sc_"), result = -10001, message = "游戏[" + _g + "]牌桌[" + tnum + "]不存在" });
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2021303011513");
                return JsonUtils.Serialize(new sc_base() { fn = real_fn.Replace("cs_", "sc_"), result = -10001 });
            }
        }

        public static async ETTask<string> GetLobby2Game_DealDataExAsyncGM(this LobbyProxyComponent self, int _g, int tnum, string real_fn,  string _para)
        {
            try
            {
                var gameAddress = self.GetGameIPFromTableID(_g, tnum, 0);
                if (gameAddress != null)
                {
                    //TraceLogEx.Error("玩家[" + userid + "]所在的游戏[" + _g + "]牌桌号[" + tnum + "]地址:" + gameAddress.ToString());
                    Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
                   // Lobby2game_DealDataExReply redisDB_RPCResponse = (Lobby2game_DealDataExReply)await session.Call(new Lobby2game_DealDataExRequest { _g = _g, para = _para, UserID = 0 });
                    Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _g, funname = "DealDataEx", para = _para, UserID = 0 });

                    return redisDB_RPCResponse.Message;
                }
                return JsonUtils.Serialize(new sc_base() { fn = real_fn.Replace("cs_", "sc_"), result = -10001, message = "游戏[" + _g + "]牌桌[" + tnum + "]不存在" });
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202103011513");
                return JsonUtils.Serialize(new sc_base() { fn = real_fn.Replace("cs_", "sc_"), result = -10001 });
            }
        }

        public static async ETTask<string> GetLobby2Game_DealDataExAsyncGM2(this LobbyProxyComponent self, int _g,   string _para)
        {
            if (self == null)
            {
                TraceLogEx.Error("   fetal self == null 202009081533");
                return "";
            }
            try
            {
                var gameAddress = self.GetGameIP(_g, 0);
                Console.WriteLine("GM2 玩家[" + 0 + "]所在的游戏[" + _g + "]服务器地址:" + gameAddress.ToString());
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(gameAddress);
               // Lobby2game_DealDataExReply redisDB_RPCResponse = (Lobby2game_DealDataExReply)await session.Call(new Lobby2game_DealDataExRequest { _g = _g,  para = _para, UserID = 0 });
                Lobby_CommonFun2Reply redisDB_RPCResponse = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = _g, funname = "DealDataEx", para = _para, UserID = 0 });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $"_g :{_g}   userid:{0}  _para:{_para}");
                return "" + ex.Message;
            }
        }
        #endregion

    }
}