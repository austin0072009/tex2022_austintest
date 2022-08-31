using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏 大厅
    /// </summary>
    public class CommonRobotManager
    {
        public CommonRobotManager()
        {
           
        }
        private static CommonRobotManager _instBase = null;
        public int addrobot = 0;
        public int redurerobot = 0;

        /// <summary>
        /// 临时用，后面要修改结构
        /// </summary>
        public static CommonRobotManager instance
        {
            get
            {
                if (_instBase == null) _instBase = new CommonRobotManager();
                return _instBase;
            }
        }  
       
        /// <summary>
        /// 初始化机器人队列，MySQLDAL.Model.tb_User 数据 
        /// </summary> 
        public void InitiRobot()
        {
            _QueRobotUser = new ConcurrentQueue<tUser>();
            _stackRobotUser = new ConcurrentStack<tUser>();
            List<tUser> ulist = ExeOnlyRedisDBHelper.GetRobotUser();
            foreach (tUser tu in ulist)
            {   //会出现在不同游戏中有，有相同的机器人的情况，，，， 
                //if (tu.GameID != gameid) continue;                
                _QueRobotUser.Enqueue(tu);
            }
        }
        /// <summary>
        /// 全局集合
        /// 获取机器人列表
        /// 开始时初始化一次  如有需要 ， 以后再动态初始化
        /// </summary>
        private ConcurrentQueue<tUser> _QueRobotUser;
        private ConcurrentStack<tUser> _stackRobotUser;
    
        /// <summary>
        /// 已经存在的机器人
        /// </summary>
        private int _RobotExistNum = 0;
        public ConcurrentQueue<tUser> QueRobotUser
        {
            get { return _QueRobotUser; }
            set { _QueRobotUser = value; }
        }
        public int QueRobotUserCount
        {
            get
            {
                return _stackRobotUser.Count + _QueRobotUser.Count;
            }
        }

        /// <summary>
        /// 分组标识，为ture时用过的上局使用过的机器人再次使用，不再做打乱效果
        /// </summary>
        private  bool _arraytag = false; 
        public void RobotExistNumAddOne()
        {
            Interlocked.Increment(ref _RobotExistNum);
        }

        public void RobotExistNumReduceOne()
        {
            Interlocked.Decrement(ref _RobotExistNum);
        }

        public bool AddARobot(tUser item)
        {
            if (_QueRobotUser.Contains(item)) return false;
            item.Reset();
            _QueRobotUser.Enqueue(item);
            return true;
        }
        /// <summary>
        /// 处理一下机器人 1.顺序不打乱。2.机器人分组
        /// </summary>
        /// <returns></returns>
        public tUser GetARobot(int gid = 0)
        {
            if (_QueRobotUser.Count < 20)
            {
                TraceLogEx.Log($"触发回收 机器人数量：{_QueRobotUser.Count}");
                InitiRobot();
            }

            tUser tbRobotuser = null;
            int allcount = 0;
            if (gid != 0) allcount = _QueRobotUser.Where(t => t.RobotGameid == gid).Count();
            else allcount = _QueRobotUser.Where(t => t.RobotGameid == 0).Count();

            do
            {
                allcount--;
                if (allcount <= 0) return null;
                if (tbRobotuser != null)
                {
                    _QueRobotUser.Enqueue(tbRobotuser);//还回去
                }
                if (!_QueRobotUser.TryDequeue(out tbRobotuser))
                {
                    TraceLogEx.Log("获取一个机器人失败...12242026 gid:" + gid);
                    return null;
                }
            }
            while (gid != 0 && tbRobotuser.RobotGameid != gid&&tbRobotuser.GetGoldAndWinGold > 0);
            UserStatus _us =  UserStatusManager.instanceBase.TryGetUserStatus(tbRobotuser.UserID); 
            if (_us != null && _us.Status != UserStatusEnum.InLobby) return   GetARobot(gid);    //多游戏共用机器人必须要处理的
            
            return tbRobotuser; 
        }

        /// <summary>
        /// 机器人统一回收接口
        /// </summary>
        public void RobotCallback(tUser _user)
        {
            if (_arraytag)
            {
                _stackRobotUser.Push(_user);
                //_QueRobotUser.Enqueue(_user);   //回收机器人  放栈头
            }
            else
            { 
                //_QueRobotUser.Reverse();//queue reverse 方法没有效果
                _QueRobotUser.Enqueue(_user);//放栈尾
            }
            UserStatus _us = UserStatusManager.instanceBase.TryGetUserStatus(_user.UserID);
            //if (_us.Status != UserStatusEnum.InLobby)
            {
                _us.SetStatus(UserStatusEnum.InLobby);
                UserStatusCache.Ins.UpdateCache(_us);
                UserStatusManager.instanceBase.AddorUpdateUserStatus(_us);
            } 
            RobotExistNumReduceOne();
        } 
     
        public void ReverseData()
        { 
            // _arraytag = !_arraytag;//好像没什么用 直接反转一次
            //进行一次数据移植
            while (_stackRobotUser.Count > 0)
            {
                tUser _tempuser;
                _stackRobotUser.TryPop(out _tempuser);
                if (_tempuser != null) _QueRobotUser.Enqueue(_tempuser);
            }
            if (_QueRobotUser != null) _QueRobotUser.Reverse();
        }

        public async  void UpdateRobotForce()
        {
            var robotList = ExeOnlyRedisDBHelper.GetRobotUser();
            foreach (var item in robotList)
            {
                var _us =await BaseHelper.GetUserStatusbyUserID(item.UserID);
                if (_us != null) _us.SetStatus(UserStatusEnum.InLobby);
                else _us = new UserStatus(UserStatusEnum.InLobby, 0, 0, item.UserID);
                await BaseHelper.AddorUpdateUserStatus(_us);
                bool _suc = AddARobot(item);
                TraceLogEx.Log("检查一次机器人人数当前机器人人数_suc:" + _suc);
            }
        }
        public int GetRobotCount()
        {
            return _QueRobotUser.Count;
        }

    }

}
