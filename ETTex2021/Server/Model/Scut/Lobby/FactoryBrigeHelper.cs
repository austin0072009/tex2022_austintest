using ETModel.Framework.Common.Serialization;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class FactoryBrigeHelper
    {
        public static Unit GetUnitInMap(int userid)
        {
            var _targetunit = ETModel.Game.Scene.GetComponent<UnitComponent>().GetByUserID(userid);
            return _targetunit;
        }
        /// <summary>
        /// FJ是否可以进入机器人
        /// </summary>
        /// <returns></returns>
        public static string CheckOpenRobot(int _g, string para)
        {
            var _baseLobby = FactoryCommon.GetLobby(_g) as BaseLobby;
            return _baseLobby._openRobot ? "1" : "0";
        }

        public async static Task<string> DealDataEx(int _g, int UserID, string _data)
        {
            if (_g <= 0) { TraceLogEx.Log(_g+ " ......................................DealDataEx " + _data); return ""; }
            string senddata = ""; 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                senddata = await lobby._logic.DealDataEx(UserID, _data);
            }
            return senddata;
        } 
         
        public async static Task<List<RoomInfoSD>> GetGameLevelList(int _g, string para)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.GetGameLevelList(_g);
            }
            return new List<RoomInfoSD>();
        }  

     
        public static async Task<string> EnterRoomTable(int _g, int UserID, cs_enterroomtable _data)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.EnterRoomTable(UserID, _data);
            }
            return "";
        }

        public static async Task<int> ExitRoom(int _g, int userID, int levelid)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.ExitRoom(userID, levelid);
            }
            return 0;
        }

        /// <summary>
        /// 退出room
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        public static void ExitRoomByDisConnect(int _g, int userid, UserStatus _us)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                lobby._logic.ExitRoomByDisConnect(userid, _us);
            }
        }
        /// <summary>
        /// 申请退出table
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        public static async ETTask< bool> ApplyExitTable(int _g, int UserID, int tableid)
        {
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.ApplyExitTable(UserID, tableid);
            }
            return true;
        }
        /// <summary>
        /// 处理退出table
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        public static void DealExitTable(int _g, int UserID, cs_dealexittable _data)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                lobby._logic.DealExitTable(UserID, _data);
            }
        }

        //gm------------------------------------

        public static void DismissTableGM(int _g, string data)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                lobby._logic.DismissTableGM(data);
            }
        }

        public async static Task<string> CreateTableGM(int _g, string _data)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.CreateTableGM(_data);
            }
            return "";
        }
        public static async Task<string> AddWatchRobot(int _g, string _data)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.AddWatchRobot(_data);
            }
            return "";
        }

        /// <summary>
        /// 指定机器人到指定FJ的指定pos 
        /// </summary>
        /// <param name="tnum"></param>
        /// <param name="pos"></param>
        /// <returns></returns>
        public async static Task<int> EnterRobotFromGM(int _g, int tnum, int pos, int userid)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.EnterRobotFromGM(tnum, pos, userid);
            }
            return -1;
        }

        public static async Task<string> EnterRobot(int _g, int UserID, int levelid, int tableid)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.EnterRobot(UserID, levelid, tableid);
            }
            return "";
        }

        public async static Task<int> ExitRobotFromGM(int _g, int userid)
        { 
            var lobby = FactoryCommon.GetLobby(_g);
            if (lobby != null)
            {
                return await lobby._logic.ExitRobotFromGM(userid);
            }
            return -1;
        }
    }




}
