using ETModel.Framework.Model;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏FJ
    /// </summary> 
    public class BaseRoom : MemoryEntity
	{
		public BaseRoom()
		{
		}
        public BaseRoom(tgamelevelinfo levelinfo)
        {
            _levelinfo = levelinfo;
            _levelid = levelinfo.Id;
            _gameid = levelinfo.gameid;
            gameType = levelinfo.gametype;
            _max = levelinfo._max;
            _min = levelinfo._min; 
        }

        public tgamelevelinfo _levelinfo;
        public int _turnwaittime; 

		public int _gameid;
        /// <summary>
        /// 当前FJ号
        /// </summary>
        public int _levelid;  
     
		public bool GameIsHot()
		{ 
			return true;
		}

		public int gameType; 
        public int _min;
        public int _max;
        /// <summary>
        /// 当前FJ的人数量
        /// </summary>
        public int _curNumberInRoom = 0;
		 
		/// <summary>
		/// 基础倍率 即 1  2 3倍
		/// </summary>
		public int BaseRate
		{
			get
			{
				return _levelinfo.Baserate;
			} 
		}

        protected virtual void Initi(tgamelevelinfo _roominfo)
        {
            _levelinfo = _roominfo;
            _levelid = _roominfo.Id;
            _gameid = _roominfo.gameid;
            gameType = _roominfo.gametype;
            _max = _roominfo._max;
            _min = _roominfo._min;
            unusedTableQue = new ConcurrentQueue<int>();
            for (int i = 1; i <= _roominfo.openTableCount; i++)
            {
                unusedTableQue.Enqueue(i);
            }
        }

        public virtual int GetOnlineCountTrue()
        {
            return 0;
        }
        public virtual BaseUser GetUser(int userid)
        {
            return null;
        }
        public virtual BaseTable GetTable(int userid)
        {
            return null;
        }

      

        public virtual async ETTask<bool> EnterRoomBase(int _UserID)
        {
            UserStatus _curStatus =await BaseHelper.TryGetUserStatus(_UserID);
            if (_curStatus == null)
            {
                _curStatus = new UserStatus(UserStatusEnum.InRoom, _gameid, _levelid, _UserID);
            }
            else
            {
                if (_curStatus.Status == UserStatusEnum.InTableDaPai || _curStatus.Status == UserStatusEnum.InTableDaPaiDis )
                {
                    ////TraceLogEx.Error("201208161411base  这个人在打牌中... _UserID:" + _UserID + "  _curStatus.Status:" + _curStatus.Status + " gameid:" + _curStatus.Gameid);
                    return false;
                }
                else if (_curStatus.Status == UserStatusEnum.InTableWaiting)
                {//waiting不处理

                }
                else
                {
                    _curStatus.SetStatus(UserStatusEnum.InRoom);
                    _curStatus.Gameid = _gameid;
                    _curStatus.Levelid = _levelid;
                }
            }
            await UserStatusCache.Ins.AddOrUpdate(_curStatus);  
            Interlocked.Increment(ref _curNumberInRoom);// _curNumberInRoom++;

            return true;
        }
        /// <summary>
        /// 重置一次 不能直接使用，明确知道才能使用 仅仅是为了不打日志
        /// </summary>
        /// <param name="_UserID"></param>
        /// <returns></returns>
        public async ETTask<bool> ReSetUserStatusBase(int _UserID,int tableid = 0)
        {
            UserStatus _curStatus =await BaseHelper.TryGetUserStatus(_UserID);
            if (_curStatus == null)
            {
                _curStatus = new UserStatus(UserStatusEnum.InRoom, _gameid, _levelid, _UserID);
                await UserStatusCache.Ins.AddOrUpdate(_curStatus);
            }
            else
            {
                if (_curStatus.Gameid != _gameid)
                {
                    TraceLogEx.Error($"202001061411base  in _gameid:{_gameid} != old.gameid:{ _curStatus.Gameid} _UserID:{ _UserID }");
                }
                if (_curStatus.Status == UserStatusEnum.InTableDaPai || _curStatus.Status == UserStatusEnum.InTableDaPaiDis)
                {
                    //TraceLogEx.Error("201208161411base  这个人在打牌中... _UserID:" + _UserID + "  _curStatus.Status:" + _curStatus.Status + " gameid:" + _curStatus.Gameid);
                    //return false;

                }
                else if (_curStatus.Status == UserStatusEnum.InTableWaiting)
                {//waiting不处理

                }
                else
                {
                    _curStatus.SetStatus(UserStatusEnum.InRoom);
                    _curStatus.Gameid = _gameid;
                    _curStatus.Levelid = _levelid;
                    if (tableid != 0) _curStatus.TableID = tableid;
                    await UserStatusCache.Ins.AddOrUpdate(_curStatus);
                }
            } 
            return true;
        }

        /// <summary>
        /// 用户退出FJ时调用  手动退出，掉线（清理Session里要调用）
        /// ==========需要实现接口，，，，让继承的类也执行一个退出方法
        /// </summary>
        /// <param name="userID"></param>
        public virtual async ETTask<bool> ExitRoomBase(int userID)
        {
            Interlocked.Decrement(ref _curNumberInRoom);// _curNumberInRoom--;
            UserStatus oldUS =await BaseHelper.TryGetUserStatus(userID);
            if (oldUS == null) return true;

            if (oldUS.Status == UserStatusEnum.InRoom||oldUS.Status==UserStatusEnum.InTableDaPai||oldUS.Status==UserStatusEnum.InTableWaiting)
            {
                Game.Scene.GetComponent<TableComponent>().LeaveTable(userID, 0);
                oldUS.SetStatus(  UserStatusEnum.InLobby);
                oldUS.Levelid = 0;
                await UserStatusCache.Ins.AddOrUpdate(oldUS);
                return true;
            }
            return false;//表示不用清数据，需要等待断线重连
        }
      
        /// <summary>
        /// 用户退出FJ时调用
        /// </summary>
        /// <param name="userID"></param>
        public virtual async ETTask<bool> ExitTable(int userID)
        {
            return false;
        }
         

        /// <summary>
        /// 还没有使用的桌子号 在初始化的时候 初始化500 在分配的时候使用Dequeue， 
        /// 在一桌完的时候回收     Enequeue
        /// </summary>
        protected ConcurrentQueue<int> unusedTableQue;
        public async ETTask<int> GetSixTableId()
        {
            try
            {
                var tableid = await GlobalDataService.GetTableID_R(_gameid);
                if (tableid < 0) return -1;

                GlobalDataService.AddTable_R(_gameid, tableid);
                return tableid;
            }
            catch (Exception ex) 
            {
                TraceLogEx.Error(ex.Message);
                return -1; 
            }
        }
        /// <summary>
        /// 对这一桌进行释放 
        /// </summary>
        public virtual void ReleaseTable(int TableID)
        {
            //unusedTableQue.Enqueue(TableID);

            var component = Game.Scene.GetComponent<TableComponent>();
            if (component != null) component.RemoveTable(_gameid, _levelid, TableID);
        }
        /// <summary>
        /// FJ是否可以进入机器人
        /// </summary>
        /// <returns></returns>
        public async ETTask<bool> CheckOpenRobot()
        {
            return await FactoryBaseHelper.CheckOpenRobot(_gameid); 
            
        }


        //获取每个FJ的虚拟在线人数
        public int GetOnlineCount(List<int> baseRateList)
        {
            for (int i = 0; i < baseRateList.Count; i++)
            {
                if (baseRateList[i] == BaseRate)
                {
                    if (GameIsHot())
                    {
                        return i * 20 + _curNumberInRoom + RandomHelper.RandomNumber(100, 125);
                    }
                    else
                    {
                        return i * 20 + _curNumberInRoom * 2 + RandomHelper.RandomNumber(25, 45);
                    }
                }
            }
            return RandomHelper.RandomNumber(25, 45);
        }
    }
}
