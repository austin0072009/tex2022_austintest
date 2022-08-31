using System.Collections.Concurrent;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏 大厅
    /// </summary>
    public class UserStatusManager 
    {
        public UserStatusManager()
        { 
            _dicUserStatus = new ConcurrentDictionary<int, UserStatus>();
        }
        private static UserStatusManager _instBase = null;
         
        /// <summary>
        /// 临时用，后面要修改结构
        /// </summary>
        public static UserStatusManager instanceBase
        {
            get
            {
                if (_instBase == null) _instBase = new UserStatusManager();
                return _instBase;
            }
        }
          
        /// <summary>
        /// 进入大厅的游戏用户
        /// </summary>
        protected ConcurrentDictionary<int, UserStatus> _dicUserStatus = new ConcurrentDictionary<int, UserStatus>();
          
        /// <summary>
        ///  返回NUll表示才登录进来没有值 
        /// </summary>
        /// <param name="UserID"></param>
        /// <returns></returns>
        public UserStatus GetUserStatusbyUserID(int UserID)
        {
            if (_dicUserStatus == null) return null;
            UserStatus us = null;
            _dicUserStatus.TryGetValue(UserID, out us);
            //if (us == null) TraceLogEx.Error("201803261728 baselobby.GetUserStatusbyUserID找不到的UserID： " + UserID);
            return us;
        }
        /// <summary>
        /// 接口需要明确的地方调用
        /// </summary>
        /// <param name="UserID"></param>
        /// <returns></returns>
        public UserStatus TryGetUserStatus(int UserID)
        {
            if (_dicUserStatus == null) return null;
            UserStatus us = null;
            _dicUserStatus.TryGetValue(UserID, out us);            
            return us;
        }
        public List<UserStatus> GetAllUserStatus()
        {
            if (_dicUserStatus == null) return null;
            return new List<UserStatus>(_dicUserStatus.Values);
        }
        /// <summary>
        /// 用户登录后，进入FJ 调用这个方法 状态为2
        /// 系统自己分配后，开始一桌打牌， 状态为3
        /// 掉线后，设置状态为4
        /// </summary>
        /// <param name="us"></param>
        public bool UpdateUserStatusByUserID(int UserID, UserStatusEnum _status)
        {
            if (_dicUserStatus == null) return false;
            UserStatus us = null;
            _dicUserStatus.TryGetValue(UserID, out us);
            if (us == null) return false;
            us.SetStatus(_status);
            return true;
        }
        /// <summary>
        /// 用户登录后，进入FJ 调用这个方法 状态为2
        /// 系统自己分配后，开始一桌打牌， 状态为3
        /// 掉线后，设置状态为4
        /// </summary>
        /// <param name="us"></param>
        public void AddorUpdateUserStatus(UserStatus us)
        {
            //TraceLogEx.Error(" AddorUpdateUserStatus   ... _UserID:" + us.UserID + "  us.Status:" + us.Status);
            _dicUserStatus.AddOrUpdate(us.UserID, us, (key, oldValue) => us);
        }   

        public void DeleteUserStatus(int UserID)
        {
            UserStatus us;
            _dicUserStatus.TryRemove(UserID, out us);
        }
         

    }

}
