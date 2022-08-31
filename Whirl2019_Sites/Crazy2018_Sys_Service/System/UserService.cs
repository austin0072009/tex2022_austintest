using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    public class UserService : BaseService<UserEntity, int, DBContextHelper>
    {
        public bool ChangePassWord(string phoneNum, string passWord)
        {
            if (!Exist(phoneNum) || string.IsNullOrEmpty(phoneNum) || string.IsNullOrEmpty(passWord)) return false;
            var entity = GetEntityByWhere(w => w.PhoneNum == phoneNum);
            if (entity == null) return false;
            string _passWord = StringHelper.RegUser_MD5_Pwd(passWord);
            entity.PassWord = _passWord;
            var upSns = UpdateSnsUserInfoPassWord(Convert.ToInt32(entity.UserId), passWord);
            if (upSns)
            {
                return UpdateEntity(entity) != null;
            }
            return false;
        }

        public bool Exist(string phone)
        {
            var entity = GetEntityByWhere(w => w.PhoneNum == phone || w.UserId == phone);
            return entity != null;
        }

        public DataResult Login(string phoneNum, string passWord, LoginType type)
        {
            DataResult result = new DataResult();
            if (!Exist(phoneNum) || string.IsNullOrEmpty(phoneNum) || string.IsNullOrEmpty(passWord)) return null;
            var entity = GetEntityByWhere(w => w.PhoneNum == phoneNum || w.UserId == phoneNum);
            if (entity == null) return null;
            if (type == LoginType.Game || CheckUserBySns(phoneNum))//如果是游戏过来的就直接比较密码
            {
                if (entity.PassWord != passWord)
                {
                    result.Code = (int)Status.fail;
                }
               // return entity.PassWord == passWord ? entity : null;
            }
            string _passWord = StringHelper.RegUser_MD5_Pwd(passWord);
            // return entity.PassWord == _passWord ? entity : null;
            return result;
        }

        public DataResult Register(string phoneNum, string passWord, string activeCode = "")
        {
            DataResult result = new DataResult();
            if (Exist(phoneNum)) return null;
            UserEntity entity = new UserEntity();
            entity.PassWord = StringHelper.RegUser_MD5_Pwd(passWord);
            entity.PhoneNum = phoneNum;
            using (DBContextHelper dbhlp = new DBContextHelper("Carzy2018Context"))
            {
                var userId = CheckSnsUserByMobile(phoneNum);
                if (userId>=0)
                {
                    UpdateSnsUserInfoPassWord(userId, passWord);
                }
                else
                {
                    dbhlp.Database.ExecuteSqlCommand("INSERT INTO snsuserinfo (PassportID,PassportPwd,ActiveCode) VALUES ({0},{1},{2})", phoneNum, passWord,activeCode);
                    var UserID = dbhlp.Database.SqlQuery<int>("SELECT UserId from  snsuserinfo  WHERE PassportPwd={0} AND PassportID={1} ", passWord, phoneNum).FirstOrDefault();
                    entity.UserId = UserID.ToString();
                }
            };
            // return AddEntity(entity);
            return result;
        }
        public DataResult RegisterByGame(string userId)
        {
            DataResult result = new DataResult();
            if (Exist(userId)) return null;
            UserEntity entity = new UserEntity { UserId = userId };
            using (DBContextHelper dbhlp = new DBContextHelper("Carzy2018Context"))
            {
                var PassportPwd = dbhlp.Database.SqlQuery<string>("SELECT PassportPwd from  snsuserinfo  WHERE UserId={0} ", userId).FirstOrDefault();
                if (string.IsNullOrEmpty(PassportPwd))
                {
                    entity.PassWord = PassportPwd;
                   // return AddEntity(entity);
                }

            };
            return result;
        }
        public bool CheckUserBySns(string userID)
        {
            using (DBContextHelper dbhlp = new DBContextHelper("Carzy2018Context"))
            {
                var userId = dbhlp.Database.SqlQuery<int>("SELECT UserId from  snsuserinfo  WHERE UserId={0} ", userID).FirstOrDefault();
                return userId > 0;
            };
        }
        private int CheckSnsUserByMobile(string mobile)
        {
            using (DBContextHelper dbhlp = new DBContextHelper("Carzy2018Context"))
            {
                var userId = dbhlp.Database.SqlQuery<int>("SELECT UserId from  snsuserinfo  WHERE PassportID={0} ", mobile).FirstOrDefault();
                return userId;
            };
        }
        /// <summary>
        /// 通过游戏id修改sns密码
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        private bool UpdateSnsUserInfoPassWord(int userid, string password)
        {
            using (DBContextHelper dbhlp = new DBContextHelper("Carzy2018Context"))
            {
                var result = dbhlp.Database.ExecuteSqlCommand("UPDATE  snsuserinfo set PassportPwd={0} WHERE UserId={1}", StringHelper.RegUser_MD5_Pwd(password), userid);
                return result > 0;
            }
        }

    }
}
