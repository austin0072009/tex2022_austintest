using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    /// <summary>
    /// 用户服务接口
    /// </summary>
   public interface IUserService:IBaseService<snsuserinfo, int, snscenterwhirlEntities>, IDependency
    {
        bool Exist(string phone);
        DataResult<SnsUserInfo> Register(string phoneNum,string passWord,string activeCode="");
        DataResult<SnsUserInfo> Login(string phoneNum, string passWord,LoginType type);
        bool ChangePassWord(string phoneNum,string passWord);
        DataResult RegisterByGame(string userId);
    }
}
