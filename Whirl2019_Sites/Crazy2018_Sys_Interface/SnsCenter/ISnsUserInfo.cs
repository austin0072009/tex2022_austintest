using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface ISnsUserInfo: IBaseService<snsuserinfo, int, snscenterwhirlEntities>, IDependency
    {
        /// <summary>
        /// 通过推荐码注册游戏用户
        /// </summary>
        /// <param name="mobile"></param>
        /// <param name="smscode"></param>
        /// <param name="activecode"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        DataResult RegUser(string mobile, string smscode, string activecode, string password);


        DataResult EasyRegUser(string account, string password, string device);
        DataResult EasyRegUser(string account, string password, string device, int retailid);
        bool Exist(string mobile);
        DataResult<SnsUserInfo> Login(string phoneNum, string passWord);
        DataResult ChangePassWord(string phoneNum, string passWord);
        /// <summary>
        /// 用户名是否存在
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        bool CheckUserName(string userName);
        /// <summary>
        /// 通过用户名注册游戏用户
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="passWord"></param>
        /// <param name="agentId"></param>
        /// <returns></returns>
        DataResult RegisterGameUser(string userName,string passWord,string agentId);


        bool UpdateSnsUserH5(int userId,int ish5);

        snsuserinfo GetSnsuserInfo(int userId);
    }
}
