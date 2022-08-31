using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using System.Linq.Expressions;
using Crazy2018_Sys_ViewEntity;

namespace Crazy2018_Sys_Service
{
    public class UserSnsService : BaseService<snsuserinfo, int, snscenterwhirlEntities>, IUserService
    {
        public bool ChangePassWord(string phoneNum, string passWord)
        {
            throw new NotImplementedException();
        }

        public bool Exist(string phone)
        {
            throw new NotImplementedException();
        }

        public DataResult<SnsUserInfo> Login(string phoneNum, string passWord, LoginType type)
        {
            Expression<Func<snsuserinfo, bool>> fun = w => w != null;
            DataResult<SnsUserInfo> result = new DataResult<SnsUserInfo>();
            if (string.IsNullOrEmpty(phoneNum) || string.IsNullOrEmpty(passWord))
            {
                result.Code = (int)Status.fail;
                result.Message = "用户名或者密码不能为空";
                return result;
            }
            var isMobile = PageValidate.IsMobile(phoneNum);
            if (isMobile)//手机号码登陆
            {
                fun = fun.And(w => w.PassportID.Equals(phoneNum) || w.Mobile.Equals(phoneNum));
            }
            else//用户ID登陆
            {
                int userId = 0;
                int.TryParse(phoneNum, out userId);
                if (userId > 0)
                {
                    fun = fun.And(w => w.UserId == userId);
                }
            }
            var entity = GetEntityByWhere(fun);
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "账号不存在";
                return result;
            }
            passWord = StringHelper.RegUser_MD5_Pwd(passWord);
            if (!entity.PassportPwd.Equals(passWord))
            {
                result.Code = (int)Status.fail;
                result.Message = "账号密码错误";
                return result;
            }
            result.Data = new SnsUserInfo { Mobile = entity.Mobile, UserId = entity.UserId };
            result.Message = "登陆成功";
            return result;
        }

        public DataResult<SnsUserInfo> Register(string phoneNum, string passWord, string activeCode = "")
        {
            throw new NotImplementedException();
        }

        public DataResult RegisterByGame(string userId)
        {
            throw new NotImplementedException();
        }
    }
}
