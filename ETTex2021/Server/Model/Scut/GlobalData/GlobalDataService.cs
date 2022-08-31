using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace ETModel
{
    public class GlobalDataService
    {
        #region 本地获取全局参数
        public static void RemoveTable(int gameid, int tableid)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().RemoveTable(gameid, tableid);
        }

        public static void AddTable(int gameid, int tableid, IPEndPoint ip)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().AddTable(gameid, tableid, ip);
        }

        public static IPEndPoint GetGameIP(int gameid, int tableid, int userid = 0)
        {
            return Game.Scene.GetComponent<LobbyProxyComponent>().GetGameIPFromTableID(gameid, tableid, userid);
        }


        public static GameTableIDRsp GetTableID(int gameid)
        {
            return Game.Scene.GetComponent<LobbyProxyComponent>().GetTableID(gameid);
        }
        /// 排除牌桌编号
        public static void ExcludeTableID(List<int> ids)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().ExcludeTableID(ids);
        }
        /// 回收牌桌编号
        public static void RecycleTableID(int tableid)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().RecycleTableID(tableid);
        }
        public static void RobotDataAdd(int userid, string data)
        {
            /*var datas=*/
            Game.Scene.GetComponent<LobbyProxyComponent>().robotdatas[userid] = data;
            //datas[userid] = data;

            //if (datas.ContainsKey(userid))
            //{
            //    datas[userid] = data;
            //}
            //else { datas.Add(userid, data); }
        }

        public static string RobotData(int userid)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().robotdatas.TryGetValue(userid, out string data);
            return data;
        }
        public static void GameServerLogin(GameServerMessage msg)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().GameServerLogin(msg);
        }
        public static int GetLoginCount()
        {
            return Game.Scene.GetComponent<UnitComponent>().UserCount;
        }
        public static void PlayerInGame(InGameInfo info)
        {
            Game.Scene.GetComponent<LobbyProxyComponent>().UpdateUserInGame(info);
        }
        public static int[] GetOnlinePlayers(int gameid)
        {
            if (gameid == 0) return Game.Scene.GetComponent<UnitComponent>().GetUserIds();
            return Game.Scene.GetComponent<LobbyProxyComponent>().GetOnlinePlayers(gameid);
        }
        #endregion

        #region 远程获取全局参数
        public static void Global<Request>(Request info)
        {//StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(Game.Scene.GetComponent<LobbyProxyComponent>().mapAddress);
            var msg = JsonUtils.Serialize(info);
            session.SendRpc(new GlobalInfoRequest() { Message = msg });
        }

        public static async Task<Response> Global<Response>(GlobalInfo info) where Response : GlobalInfo
        {
            try
            {
                info.isreturn = true;
                var session = Game.Scene.GetComponent<NetInnerComponent>().Get(StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint);
                var rsp = (GlobalInfoReply)await session.Call(new GlobalInfoRequest() { Message = JsonUtils.Serialize(info) });
                return JsonUtils.Deserialize<Response>(rsp.Message);
            }
            catch (Exception ex)
            {
                CommonFun.PrintError("", ex);
            }
            return default;
        }


        public static void RemoveTable_R(int gameid, int tableid)
        {
            Global(new GameTableRMReq() { gameid = gameid, tableid = tableid });
        }

        public static void AddTable_R(int gameid, int tableid)
        {
            var ip = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint;
            Global(new GameTableAddReq() { gameid = gameid, tableid = tableid, ip = ip.ToString() });
        }

        public static async Task<IPEndPoint> GetGameIP_R(int gameid, int tableid)
        {
            var rsp = await Global<GameIPRsp>(new GameIPReq() { gameid = gameid, tableid = tableid });
            if (rsp == null || rsp.ip == null) return null;
            return NetworkHelper.ToIPEndPoint(rsp.ip);
        }

        public static async Task<int> GetTableID_R(int gameid)
        {
            var rsp = await Global<GameTableIDRsp>(new GameTableIDReq() { gameid = gameid });
            return rsp.tableid;
        }
        public static async Task<string> RobotData_R(int userid)
        {
            var rsp = await Global<RobotDataRsp>(new RobotDataReq() { userid = userid });
            return rsp.data;
        }

        public static void ExcludeTableID_R(List<int> tableids)
        {
            Global(new ExcludeTableIDReq() { tableids = tableids });
        }

        public static void RecycleTableID_R(int tableid)
        {
            Global(new RecycleTableIDReq() { tableid = tableid });
        }

        public static void RobotDataAdd_R(int userid, string data)
        {
            Global(new RobotDataAddReq() { userid = userid, data = data });
        }

        public static void GameServerLogin_R(int gameid)
        {
            Global(new GameServerMessage { gameid = gameid, isreturn = false, appid = StartConfigComponent.Instance.StartConfig.AppId, ip = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint.ToString() });
        }
        public static async Task<int> GetLoginCount_R()
        {
            var rsp = await Global<LoginCountRsp>(new LoginCountReq());
            if (rsp != null) return rsp.count;
            return -1;
        }
        public static void PlayerInGame_R(InGameInfo info)
        {
            info.ip = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint.ToString();
            Global(info);
        }
        public static async Task<int[]> GetOnlinePlayers_R(int gameid)
        {
            var rsp = await Global<OnlinePlayerRsp>(new OnlinePlayerReq { gameid = gameid });
            if (rsp != null) return rsp.players;
            return null;
        }
        #endregion
    }
}
