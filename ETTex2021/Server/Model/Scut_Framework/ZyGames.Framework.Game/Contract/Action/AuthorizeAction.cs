

using System;
using ETModel.Framework.Common;
using ETModel.Framework.Game.Context;
using ETModel.Framework.Game.Lang;
using ETModel.Framework.Game.Runtime;
using ETModel.Framework.Game.Service;
using ETModel.Framework.RPC.Sockets;

namespace ETModel.Framework.Game.Contract.Action
{
    /// <summary>
    /// 授权访问的Action
    /// </summary>
    public abstract class AuthorizeAction : BaseStruct
    {
        /// <summary>
        /// Initializes a new instance of the  class.
        /// </summary>
        /// <param name="actionId">Action I.</param>
        /// <param name="actionGetter">Http get.</param>
        protected AuthorizeAction(int actionId, ActionGetter actionGetter)
            : base(actionId, actionGetter)
        {
        }
      
    
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        protected override bool ValidateElement()
        {
            return true;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override bool CheckAction()
        {
            bool result = false;

            if (!GameEnvironment.IsRunning)
            {
                ErrorCode = Language.Instance.ErrorCode;
                ErrorInfo = Language.Instance.ServerLoading;
                return false;
            }
          
            IUser user;
            LoginStatus status = CheckUser(out user);

            
                status = LoginStatus.Success;
         
            switch (status)
            {
                case LoginStatus.NoLogin:
                case LoginStatus.Timeout:
                    ErrorCode = Language.Instance.TimeoutCode;
                    ErrorInfo = Language.Instance.AcountNoLogin;
                    break;
                case LoginStatus.Logined:
                    ErrorCode = Language.Instance.DuplicateCode;
                    ErrorInfo = Language.Instance.AcountLogined;
                    break;
                case LoginStatus.Exit:
                    ErrorCode = Language.Instance.KickedOutCode;
                    ErrorInfo = Language.Instance.AcountIsLocked;
                    break;
                case LoginStatus.Success:
                    result = true;
                    break;
                default:
                    break;
            }
            if (CheckUserIsLocked(user))
            {
                ErrorCode = Language.Instance.KickedOutCode;
                ErrorInfo = Language.Instance.AcountIsLocked;
                result = false;
            }
            if (result && IsRefresh)
            {
                DoRefresh(actionId, user);
            }
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        protected virtual bool CheckUserIsLocked(IUser user)
        {
            return false;
        }

        /// <summary>
        /// Gets a value indicating whether this instance is refresh.
        /// </summary>
        /// <value><c>true</c> if this instance is refresh; otherwise, <c>false</c>.</value>
        protected virtual bool IsRefresh
        {
            get { return true; }
        }
        /// <summary>
        /// 不检查的ActionID
        /// </summary>
        protected virtual bool IgnoreActionId
        {
            get { return false; }
        }

        /// <summary>
        /// Checks the user.
        /// </summary>
        /// <returns>The user.</returns>
        /// <param name="user">Game user.</param>
        protected LoginStatus CheckUser(out IUser user)
        {
            user = null;  
            return LoginStatus.NoLogin;
        }
        /// <summary>
        /// Dos the refresh.
        /// </summary>
        /// <param name="actionId">Action identifier.</param>
        /// <param name="gameUser">Game user.</param>
        protected void DoRefresh(int actionId, IUser gameUser)
        { 
            if (gameUser != null)
            {
                gameUser.RefleshOnlineDate();
            }
        }
    }

  
}