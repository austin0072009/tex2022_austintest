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
using System.Transactions;
using Crazy2018_Sys_Entity;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using MySql.Data.MySqlClient;

namespace Crazy2018_Sys_Service
{
    public class SnsUserInfoService : BaseService<snsuserinfo, int, snscenterwhirlEntities>, ISnsUserInfo
    {
        public bool Exist(string mobile)
        {
            Expression<Func<snsuserinfo, bool>> fun = w => w != null;
            if (string.IsNullOrEmpty(mobile))
            {

                return false;
            }
            var isMobile = PageValidate.IsMobile(mobile) || PageValidate.IsEmail(mobile);
            if (isMobile)//手机号码登陆
            {
                fun = fun.And(w => w.PassportID.Equals(mobile) || w.Mobile.Equals(mobile));
            }
            else//用户ID登陆
            {
                int userId = 0;
                int.TryParse(mobile, out userId);
                if (userId > 0)
                {
                    fun = fun.And(w => w.UserId == userId);
                }
            }
            var entity = GetEntityByWhere(fun);
            if (entity == null)
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// 获取随机userId
        /// </summary>
        /// <returns></returns>
        private int GetNewUserId()
        {
            while (1 == 1)
            {
                int userId = 10000 + new Random().Next(1, 70000);
                Expression<Func<snsuserinfo, bool>> fun = w => w != null;
                fun = fun.And(w => w.UserId.Equals(userId));
                var entity = GetEntityByWhere(fun);
                if (entity == null)
                {
                    return userId;
                }
            }
        }

       


        public DataResult RegUser(string mobile, string smscode, string activecode, string password)
        {
            DataResult result = new DataResult();
            bool isMobile = PageValidate.IsMobile(mobile) || PageValidate.IsEmail(mobile);

            try
            {
                if (isMobile)
                {
                    var entity = GetEntityByWhere(w => w.Mobile.Equals(mobile) || w.PassportID.Equals(mobile));
                    if (entity != null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "用户已注册";
                    }
                    else
                    {
                        lock (DTKeys.reglock)
                        {
                            int newUserId = GetNewUserId();

                            using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                            {
                                var tempEntity = new snsuserinfo()
                                {
                                    UserId = newUserId,
                                    Mobile = mobile,
                                    PassportID = mobile,
                                    PassportPwd = StringHelper.RegUser_MD5_Pwd(password),
                                    ActiveCode = activecode,
                                    PwdType = 1,
                                    RetailID = "0000",
                                    RegTime = DateTime.Now,
                                    RegType = 0,
                                    DeviceID = "111111"
                                };
                                var res = db.snsuserinfo.Add(tempEntity);
                                int num = db.SaveChanges();

                                if (num <= 0)
                                {
                                    result.Code = (int)Status.fail;
                                    result.Message = "注册失败";
                                    return result;
                                }
                                result.Spare = tempEntity.UserId.ToString();
                            }
                        }
                    }
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "参数错误";
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }

        public DataResult Update(string activeCode, string userid)
        {
            DataResult result = new DataResult();
            var entity = GetEntityByWhere(w => w.ActiveCode == activeCode);
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "当前推广码不存在";
                return result;
            }
            throw new NotImplementedException();
        }
        public DataResult<SnsUserInfo> Login(string phoneNum, string passWord)
        {
            Expression<Func<snsuserinfo, bool>> fun = w => w != null;
            DataResult<SnsUserInfo> result = new DataResult<SnsUserInfo>();
            int userId = 0;
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
            else if (int.TryParse(phoneNum, out userId))//用户ID登陆
            {
                if (userId > 0)
                {
                    fun = fun.And(w => w.UserId == userId);
                }
            }
            else//账号登陆
            {
                fun = fun.And(w => w.PassportID == phoneNum);
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

        public DataResult ChangePassWord(string phoneNum, string passWord)
        {
            DataResult result = new DataResult();
            Expression<Func<snsuserinfo, bool>> fun = w => w != null;
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
            entity.PassportPwd = StringHelper.RegUser_MD5_Pwd(passWord);
            if (UpdateEntity(entity) == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "修改失败";
                return result;
            }
            result.Message = "修改成功";
            return result;
        }

        public bool CheckUserName(string userName)
        {
            return GetEntityByWhere(w => w.PassportID.Equals(userName)) != null;
        }

        public DataResult RegisterGameUser(string userName, string passWord, string agentId)
        {
            throw new NotImplementedException();
        }

        public bool UpdateSnsUserH5(int userId, int ish5)
        {
            string sql = "update snsuserinfo set Ish5=@Ish5 where UserId=@UserId";
            using (snscenterwhirlEntities db = new snscenterwhirlEntities())
            {
                db.Database.ExecuteSqlCommandAsync(sql,new MySqlParameter("Ish5", ish5), new MySqlParameter("UserId", userId));
            }
            return true;
        }

        public snsuserinfo GetSnsuserInfo(int userId)
        {
            string sql = "SELECT * FROM snsuserinfo where UserId=@UserId";
            using (snscenterwhirlEntities db = new snscenterwhirlEntities())
            {
               var data = db.Database.SqlQuery<snsuserinfo>(sql,new MySqlParameter("UserId", userId));
                return data.Count()==0?null: data.First();
            }
        }

        public DataResult EasyRegUser(string account, string password, string device)
        {
            DataResult result = new DataResult();
            lock (DTKeys.reglock)
            {
                int newUserId = GetNewUserId();

                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    var tempEntity = new snsuserinfo()
                    {
                        UserId = newUserId,
                        Mobile = "",
                        PassportID = account,
                        PassportPwd = StringHelper.RegUser_MD5_Pwd(password),
                        ActiveCode = "",
                        PwdType = 1,
                        RetailID = "0000",
                        RegTime = DateTime.Now,
                        RegType = 2,
                        RetailUser = device.ToLower(),
                        DeviceID = device
                    };
                    var res = db.snsuserinfo.Add(tempEntity);
                    int num = db.SaveChanges();

                    if (num <= 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "注册失败";
                        return result;
                    }
                    result.Spare = tempEntity.UserId.ToString();
                }
            }
            result.Message = "注册成功!";
            return result;
        }


        public DataResult EasyRegUser(string account, string password, string device,int retailid)
        {
            DataResult result = new DataResult();
            lock (DTKeys.reglock)
            {
                int newUserId = GetNewUserId();

                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    var tempEntity = new snsuserinfo()
                    {
                        UserId = newUserId,
                        Mobile = "",
                        PassportID = account,
                        PassportPwd = StringHelper.RegUser_MD5_Pwd(password),
                        ActiveCode = "",
                        PwdType = 1,
                        RetailID = retailid.ToString(),
                        RegTime = DateTime.Now,
                        RegType = 2,
                        RetailUser = device.ToLower(),
                        DeviceID = device
                    };
                    var res = db.snsuserinfo.Add(tempEntity);
                    int num = db.SaveChanges();

                    if (num <= 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "注册失败";
                        return result;
                    }
                    result.Spare = tempEntity.UserId.ToString();
                }
            }
            result.Message = "注册成功!";
            return result;
        }

        //public DataResult RegisterGameUser(string userName, string passWord, string agentId)
        //{
        //    int userId = 0;
        //    DataResult result = new DataResult();
        //    if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(passWord))
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = "用户名或者密码不能为空";
        //        return result;
        //    }
        //    if (CheckUserName(userName))
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = "用户名已存在";
        //        return result;
        //    }
        //    if (Utils.IsHanZi(userName))
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = "用户名不能包含汉字";
        //        return result;
        //    }
        //    if (!Utils.IsSafeSqlString(userName))
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = "用户名不能包含特殊字符";
        //        return result;
        //    }
        //    InitialagencyInfo InitiInfo = null;//初始代理信息
        //    if (!string.IsNullOrEmpty(agentId))
        //    {
        //        using (DBContextHelper dbHelper = new DBContextHelper())
        //        {
        //            string agentCode = StringHelper.Encrypto(agentId);
        //            InitiInfo = dbHelper.InitialagencyInfos.Where(w => w.InitialaCode == agentCode && !w.IsDel).FirstOrDefault();
        //        }
        //        if (InitiInfo == null)
        //        {
        //            int tAgentId = -1;
        //            var tR = int.TryParse(agentId, out tAgentId);
        //            var tempEntity = GetEntityByWhere(w => w.UserId == tAgentId);
        //            if (tempEntity == null)
        //            {
        //                result.Code = (int)Status.fail;
        //                result.Message = "推荐用户不存在";
        //                return result;
        //            }
        //            userId = tAgentId;
        //        }
        //    }
        //    else
        //    {

        //        result.Code = (int)Status.fail;
        //        result.Message = "推荐ID为空";
        //        return result;
        //    }
        //    try
        //    {
        //        int newUserId = GetNewUserId();
        //        var tempEntity = AddEntity(new snsuserinfo()
        //        {
        //            UserId = newUserId,
        //            PassportID = userName,
        //            PassportPwd = StringHelper.RegUser_MD5_Pwd(passWord),
        //            PwdType = 1,
        //            RetailID = "0000",
        //            RegTime = DateTime.Now,
        //            RegType = 0,
        //            DeviceID = "111111"
        //        });
        //        if (tempEntity == null)
        //        {
        //            result.Code = (int)Status.fail;
        //            result.Message = "注册失败";
        //            return result;
        //        }
        //        using (texas_2021Entities dbHelper = new texas_2021Entities())
        //        {
        //            var GeneralAgent = dbHelper.tuseragent.Where(w => w.UserID == userId).FirstOrDefault(); ;
        //            tuseragent useragent = new tuseragent();
        //            //useragent.AgentLevel = InitiInfo == null ? 0 : 1;
        //            //useragent.FatherId = InitiInfo == null ? Convert.ToInt32(agentId) : 0;
        //            //useragent.UserID = tempEntity.UserId;
        //            //useragent.HistoryGoldA = 0;
        //            //useragent.GoldA = 0;
        //            //if (GeneralAgent != null)
        //            //{
        //            //    useragent.GeneralAgent = GeneralAgent.AgentLevel == 1 ? GeneralAgent.UserID.ToString() : GeneralAgent.GeneralAgent.ToString();
        //            //}
        //            dbHelper.tuseragent.Add(useragent);
        //            dbHelper.SaveChanges();
        //        }
        //        if (InitiInfo != null)
        //        {
        //            using (DBContextHelper dbHelper = new DBContextHelper())
        //            {
        //                InitiInfo.IsDel = true;
        //                InitiInfo.UserUserId = tempEntity.UserId.ToString();
        //                var dbSet = dbHelper.Set<InitialagencyInfo>();
        //                DbEntityEntry<InitialagencyInfo> entry = dbHelper.Entry(InitiInfo);
        //                if (entry.State == EntityState.Detached)
        //                {
        //                    dbSet.Attach(InitiInfo);
        //                    entry.State = EntityState.Modified;
        //                }
        //                if (dbHelper.SaveChanges() >= 0)
        //                { }
        //                else
        //                {
        //                    Log.Error("保存初始代理信息", "保存失败");
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = ex.Message;
        //    }
        //    return result;
        //}
    }
}
