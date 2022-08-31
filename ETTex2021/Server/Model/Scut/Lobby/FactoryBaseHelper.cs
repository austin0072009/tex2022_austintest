using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class FactoryBaseHelper
    {
        public static async Task<Unit> GetUnitInMap(int userid)
        {
            LobbyProxyComponent component = Game.Scene.GetComponent<LobbyProxyComponent>();
            if (component == null)
            {
                TraceLogEx.Error("Error:null ------------202106221529");
                return null;
            }
            return await component.GetUnitFromMapAsync(userid);
        } 

        public static async Task<bool> CheckOpenRobot(int _g)
        {
            return true;
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "CheckOpenRobot", _g + "");
            return jsonT == "1";
        }

        public static void SwitchGame(int _g, bool open)
        {
            var _baseLobby = FactoryCommon.GetLobby(_g) as BaseLobby;
            _baseLobby.SwitchGame(open);
        }  
        public static async Task<string> DealDataEx(int _g, string _data, int UserID)
        {
            string jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetLobby2Game_DealDataExAsync(_g, UserID, _data);

            return jsonT;
        }
        public static async Task<string> DealDataExGM(int _g, int tnum, string fn,  string _data )
        {
            string jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetLobby2Game_DealDataExAsyncGM(_g, tnum, fn, _data);

            return jsonT;
        }
        public static async Task<string> DealDataExGM2(int _g, string _data)
        {
            string jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetLobby2Game_DealDataExAsyncGM2(_g,   _data);

            return jsonT;
        }
        public static async Task<List<RoomInfoSD>> GetGameLevelList(int _g)
        { 
            string jsonT   = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "GetGameLevelList", _g + "");
            if (jsonT == "") return new List<RoomInfoSD>();
            return JsonUtils.Deserialize<List<RoomInfoSD>>(jsonT);
        }
     

        public static async Task<string> EnterRoom(int _g, tUser _user, cs_enterroom _data)
        {
            string _para = JsonUtils.Serialize(_data);
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(_g, "EnterRoom", _user.UserID, _para);
            sc_base scBase = JsonUtils.Deserialize<sc_base>(jsonT);
            if (scBase != null && scBase.result == 1)
            {
                tb_UserEx.WriteUserOnLineTime(_user.UserID, _data.gameid, _data.levelid, false, true);
            }
            return jsonT;
        }

        //public static async Task<string> EnterRoom(int _g, tUser _user, cs_slotentertable _data)
        //{
        //    string _para = JsonUtils.Serialize(_data);
        //    string jsonT = "";
        //    jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(_g, "SlotEnterRoom", _user.UserID, _para);
        //    sc_base scBase = JsonUtils.Deserialize<sc_base>(jsonT);
        //    if (scBase != null && scBase.result == 1)
        //    {
        //        tb_UserEx.WriteUserOnLineTime(_user.UserID, _data.gameid, _data.levelid, false, true);
        //    }
        //    return jsonT;
        //}
          
        public static async void ExitRoomByDisConnect(int _g, int userid, UserStatus _us)
        {
            string _para = JsonUtils.Serialize(_us);
            ////string jsonT = ""; 
            await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(_g, "ExitRoomByDisConnect", userid, _para);
        }  
        public static async void DealExitTable(int _g, tUser _user, cs_dealexittable _data)
        {
            string _para = JsonUtils.Serialize(_data);
            //string jsonT = ""; 
            await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(_g, "DealExitTable", _user.UserID, _para);
        }
        //gm------------------------------------

        public static async void DismissTableGM(int _g, string data)
        {
            await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "DismissTableGM", data);
        }

        public static async Task<string> CreateTableGM(int _g, string _data)
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "CreateTableGM", _data);
            return jsonT;
        }
        public static async Task<string> AddWatchRobot(int _g, string _data)
        {
            string jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "AddWatchRobot", _data);
            return jsonT;
        }

        /// <summary>
        /// 指定机器人到指定FJ的指定pos 
        /// </summary>
        /// <param name="tnum"></param>
        /// <param name="pos"></param>
        /// <returns></returns>
        public static async Task<int> EnterRobotFromGM(int _g, int tnum, int pos, int userid)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.EnterRobotFromGM(tnum, pos, userid);
            }
            return -1;
        }

        public static async Task<string> EnterRobot(int _g, tUser _user, cs_enterrobot_tex _data)
        {
            string _para = JsonUtils.Serialize(_data);
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(_g, "EnterRobot", _user.UserID, _para);
            return jsonT;
        }

        public static async Task<int> ExitRobotFromGM(int _g, int userid)
        {
            string jsonT = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync(_g, "ExitRobotFromGM", userid + "", userid);
            if (jsonT == "") return -1;
            return Convert.ToInt32(jsonT);
        }
    }
}