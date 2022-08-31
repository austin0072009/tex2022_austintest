using ETModel.Script.Model;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using System;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏 大厅
    /// </summary>
    public class TexasLobby : BaseLobby
    {
        public TexasLobby()
        { 
        }
        private static TexasLobby _inst = null;
        public bool isRecoverTable = true;
        public static TexasLobby instance
        {
            get
            {
                if (_inst == null) _inst = new TexasLobby();
                return _inst;
            }
        }
         
        /// <summary>
        /// 初始化大厅
        /// </summary>
        public override async Task<bool> Initi(int gameid)
        {
            TurnWaitTime = 25;
            _logic = new TexasLogic(_inst);
            await base.Initi(gameid);
            foreach (var _roomInfo in roomList)
            {
                var roomData = new TexasRoom(_roomInfo);
                roomCache.Add(roomData);
                if (isRecoverTable) { RecoverTable(roomData); }
            }

            Texas.InitRate();
            return true;
        }
        private async void RecoverTable(TexasRoom room)
        {
            //从缓存中恢复房间列表
            var _list = await ttablelistEx.GetAllByGameidandLevelid(_gameid, room._levelid);
            if (_list != null)
            {
                List<int> tids = new List<int>();
                for (int i = 0; i < _list.Count; i++)
                {
                    tids.Add(_list[i].tableid);
                }
                GlobalDataService.ExcludeTableID_R(tids);
                foreach (var _tab in _list)
                {
                    cs_createtable_tex _data = JsonUtils.Deserialize<cs_createtable_tex>(_tab.data);
                    if (_data == null) continue;
                    TexasTable tab = new TexasTable(_gameid, room, _tab.tableid, _data, _tab.ownerId, _tab.minPlayerCount, _tab.createTime);

                    if (_tab.Userbalan != null && _tab.Userbalan.Count > 0)
                    {
                        //恢复金币
                        foreach (var uid in _tab.Userbalan)
                        {
                            var user = await tb_UserEx.GetFromCachebyUserID(uid.Key);
                            if (user != null)
                            {
                                await room.EnterRoomBase(user.UserID);
                                var _rs = await tab.EnterTableWatch(user);
                                var watchuser = tab.GetUserByIDTry(uid.Key);
                                if (watchuser != null)
                                {
                                    watchuser.clubidx = uid.clubid;
                                    watchuser._CurrentGold = uid.Value;
                                }
                            }
                        }
                    }
                    GlobalDataService.AddTable_R(_gameid, _tab.tableid);
                    AddTable(_tab.tableid, tab); 
                }
            }
        }

        /// <summary>
        /// 根据FJID与用户ID 找到FJ对象
        /// </summary>
        /// <param name="levelid"></param>        
        /// <returns></returns>
        public TexasRoom GetRoomByRoomID(int levelid)
        {
            var br = roomCache.Find((r) => { return r._levelid == levelid; });
            if (br == null)
            {
                TraceLogEx.Error("201705231448tex 没找到RoomID：" + levelid);
                return null;
            }
            return br as TexasRoom;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="RoomID"></param>
        /// <param name="TableID"></param>
        /// <returns></returns>
        public TexasTable GetTableByRoomIDandTableID(int RoomID, int TableID)
        { 
            return GetTableByTableNum(TableID); 
        }
        public TexasTable GetTableByRoomIDandTableIDTry(int RoomID, int TableID)
        {
            return GetTableByTableNum(TableID);
        }

        public int GetOpenvTableCount()
        { 
            return 0;
        }


        /// <summary>
        ///  
        /// </summary>
        /// <param name="UserID"></param>
        /// <returns></returns>
        public TexasUser GetUserByRoomIDandTableIDandUserID(int RoomID, int TableID, int UserID)
        {
            TexasTable _bftable = GetTableByRoomIDandTableID(RoomID, TableID);
            if (_bftable == null)
            {
                TraceLogEx.Error("21020726151103tex RoomID:" + RoomID + ",  TableID:" + TableID + ",  UserID:" + UserID);
                return null;
            }
            return _bftable.GetUserByIDTry(UserID);
        }

        /// <summary>
        /// 根据生成的房号找到FJ
        /// </summary> 
        /// <returns></returns>
        public TexasTable GetTableByTableNum(int tid)
        {
            var _t =   GetTable(tid);
            if (_t == null) return null;
            if (_t is TexasTable) return _t as TexasTable;
            else return null;
        }

        public List<int> GetRoomIDList()
        {
            List<int> lvlist = new List<int>();
            foreach (var temp in roomCache)
            {
                lvlist.Add(temp._levelid);
            }
            return lvlist;
        }

        int msCount = 0;
        int recount = 0;
        /// <summary>
        /// 循环当前房间 的每一桌     //每桌的裁判[等待时间完了 自动 带打功能] 即时执行的
        /// </summary>
        /// <param name="SecondOne">间隔几秒执行一次</param>
        public void DealEveryTable(int SecondOne)
        {
            foreach (var _tempRoom in roomCache)
            {
                foreach (var tab in _tablenum2basetable.Values)
                {
                    TexasTable _tab = tab as TexasTable;
                    if (_tab == null || _tab._judge == null || _tab._DicPos2User == null) continue;
                    if (++recount % 1000 == 0) { recount = 0; _tab.RemoveExpireApply(); }
                    if (_tab._judge != null && _tab._judge != null && _tab._judge._endtime <= DateTime.Now && _tab._judge._endtime != DateTime.MinValue
                        || (_tab.createTime.AddHours(6) <= DateTime.Now && _tab._judge._endtime == DateTime.MinValue))
                    {
                        if (_tab._tablestatus == TableStatusEnum.Initi || _tab._tablestatus == TableStatusEnum.WaitforReady)
                        {
                            _tab.DismissTableTime();//tableid 会置0  
                            ttablelistEx.Delete(tab._tableid);
                            GlobalDataService.RecycleTableID_R(tab._tableid);
                            base.ReleaseTable(_tempRoom._levelid, tab._tableid);
                            DealDateOver(_tab._tableid);
                        }
                    }
                }
                msCount++;
                if (msCount >= 3)
                {
                    msCount = 0;
                    OnlineDataLog();//15S 一次记录
                }
            }
        }

        public void ResetTableByTableID(int levleid, int TableID)
        {
            DealDateOver(TableID);
            ttablelistEx.Delete(TableID);
            GlobalDataService.RecycleTableID_R(TableID);
            base.ReleaseTable(levleid, TableID);
        }
    }
}
