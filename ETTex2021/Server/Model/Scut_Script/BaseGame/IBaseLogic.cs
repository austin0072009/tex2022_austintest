using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 基础逻辑
    /// </summary>
    public interface IBaseLogic
    {
        /// <summary>
        /// 处理消息
        /// </summary>
        /// <param name="clientcommand"></param>
        /// <returns></returns>
        ETTask<string> DealDataEx(int UserID, string _data);
         

        /// <summary>
        /// 获取游戏列表
        /// </summary>
        /// <returns></returns>
        ETTask<List<RoomInfoSD>> GetGameLevelList(int gameid);
         
        ///// <summary>
        ///// 进入FJ
        ///// </summary>
        ///// <param name="_user"></param>
        ///// <param name="_data"></param>
        ///// <returns></returns>
        //ETTask<string> SlotEnterTable(int UserID, cs_slotentertable _data);
        /// <summary>
        /// 退出FJ
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        ETTask<int> ExitRoom(int levelid, int userID);

        /// <summary>
        /// 进入指定FJ，FJ号id
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        ETTask<string> EnterRoomTable(int UserID, cs_enterroomtable _data);

        /// <summary>
        /// 退出room
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        void ExitRoomByDisConnect(int userid, UserStatus _us);

        /// <summary>
        /// 申请退出table
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        ETTask< bool> ApplyExitTable(int UserID, int tableid  );

        /// <summary>
        /// 处理退出table
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        void DealExitTable(int UserID, cs_dealexittable _data);


        /// <summary>
        /// 取消排队  FK模式没有
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        ETTask<string> CancelOrder(int UserID);

        void DismissTableGM(string data);

        /// <summary>
        /// 指定机器人到指定FJ的指定pos 
        /// </summary>
        /// <param name="tnum"></param>
        /// <param name="pos"></param>
        /// <returns></returns>
        ETTask<int> EnterRobotFromGM(int tnum, int pos, int userid);
        ETTask<string> EnterRobot(int UserID, int levelid, int tableid);
        /// <summary>
        /// 指定机器人到从FJ退出到大大厅
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        ETTask<int> ExitRobotFromGM(int userid);

        ETTask<string> CreateTableGM(string data);

        /// <summary>
        /// 添加旁观机器人
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        ETTask<string> AddWatchRobot(string data);


        ETTask<int> EnterVMasterFromGM(int levelid, int tableid, int userid);
    }
}