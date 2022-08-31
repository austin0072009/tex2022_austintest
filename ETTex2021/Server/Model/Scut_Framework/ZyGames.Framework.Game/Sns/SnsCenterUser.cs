
using System;
using System.Data;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Configuration;
using Common.NLog;
using ETModel.Framework.Common.Security;
using ETModel.Framework.Data;
using ETModel.Framework.Game.Config;
using ETModel.Script.CsScript.Action;
using System.Threading.Tasks;
using System.Collections.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data.Sql;

namespace ETModel.Framework.Game.Sns
{
    /// <summary>
    /// Reg type.
    /// </summary>
    public enum RegType
    {
        /// <summary>
        /// 正常形式
        /// </summary>
        Normal = 0,
        /// <summary>
        /// 游客通过设备ID登录
        /// </summary>
        Guest,
        /// <summary>
        /// The other.
        /// </summary>
        Other
    }
    /// <summary>
    /// Pwd type.
    /// </summary>
    public enum PwdType
    {
        /// <summary>
        /// The DE.
        /// </summary>
        DES = 0,
        /// <summary>
        /// The M d5.
        /// </summary>
        MD5
    }

    /// <summary>
    /// SnsCenterUser 的摘要说明
    /// </summary>
    public class SnsCenterUser
    {
        /// <summary>
        /// Md5 key
        /// </summary>
        private const string PasswordMd5Key = "1736e1c9-6f40-48b6-8210-da39cf333784";
        /// <summary>
        /// Passwords the encrypt md5.
        /// </summary>
        /// <returns>The encrypt md5.</returns>
        /// <param name="str">String.</param>
        public static string PasswordEncryptMd5(string str)
        {
            return CryptoHelper.RegUser_MD5_Pwd(str);
        }

        /// <summary>
        /// 官网渠道ID
        /// </summary>
        private const string SysetmRetailID = "0000";
        private int _userid;
        /// <summary>
        /// 获得用户ID
        /// </summary>
        /// 
        public int UserId { get { return _userid; } }
        private string _PassportId = String.Empty;
        private string _PassportPwd = String.Empty;
        private string _imei = String.Empty;
        private BaseLog _Logger = new BaseLog();

        /// <summary>
        /// Gets the passport identifier.
        /// </summary>
        /// <value>The passport identifier.</value>
        public string PassportId
        {
            get { return _PassportId; }
        }
        /// <summary>
        /// Gets the password.
        /// </summary>
        /// <value>The password.</value>
        public string Password
        {
            get { return _PassportPwd; }
        }
        /// <summary>
        /// Gets or sets the retail I.
        /// </summary>
        /// <value>The retail I.</value>
        public string RetailID
        {
            get;
            set;
        }
        /// <summary>
        /// Gets or sets the weixin code.
        /// </summary>
        /// <value>The weixin code.</value>
        public string WeixinCode
        {
            get;
            set;
        }
        /// <summary>
        /// Gets or sets the retail user.
        /// </summary>
        /// <value>The retail user.</value>
        public string RetailUser
        {
            get;
            set;
        }
        /// <summary>
        /// Gets or sets the type of the reg.
        /// </summary>
        /// <value>The type of the reg.</value>
        public RegType RegType
        {
            get;
            set;
        }
        /// <summary>
        /// Initializes a new instance of the <see cref="ETModel.Framework.Game.Sns.SnsCenterUser"/> class.
        /// </summary>
        public SnsCenterUser()
        {
            RegType = RegType.Other;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="sPassportId"></param>
        /// <param name="passportPwd"></param>
        /// <param name="imei"></param>
        public SnsCenterUser(string sPassportId, string passportPwd, string imei)
        {
            if(!string.IsNullOrEmpty(sPassportId)) _PassportId = sPassportId.ToUpper();
            _PassportPwd = passportPwd;
            _imei = imei;
            RegType = RegType.Guest;
            RetailID = SysetmRetailID;
        }

        /// <summary>
        /// 验证
        /// </summary>
        /// <param name="snsUser"></param>
        /// <returns></returns>
        public bool ValidatePassport(SnsUser snsUser)
        {
            if (snsUser.PassportId == null) return false;
            string password = _PassportPwd;

            if (snsUser.RegType == RegType.Normal)
            {
                //if (snsUser.PwdType == PwdType.MD5)
                //{
                //    password = PasswordEncryptMd5(_PassportPwd);
                //} 
                return snsUser.PassportId.ToUpper() == _PassportId && (snsUser.Password == password || snsUser.Password == _PassportPwd);
            }

            if (snsUser.RegType == RegType.Guest)
            {
                //if (snsUser.PwdType == PwdType.MD5)
                //{
                //    //判断是否已经MD5加密
                //    password = PasswordEncryptMd5(_PassportPwd);
                //}
                return snsUser.PassportId.ToUpper() == _PassportId && (snsUser.Password == password || snsUser.Password == _PassportPwd);
            }
            if (snsUser.RegType == RegType.Other)
            {
                //账号注册类型
                //if (snsUser.PwdType == PwdType.MD5)
                //{
                //    password = PasswordEncryptMd5(_PassportPwd);
                //}
                return snsUser.PassportId.ToUpper() == _PassportId && (snsUser.Password == password || snsUser.Password == _PassportPwd);
            }
            return snsUser.RetailID == RetailID &&
                   snsUser.RetailUser == RetailUser;
        }

        /// <summary>
        /// 是否有绑定DeviceID
        /// </summary>
        /// <returns></returns>
        public async Task<SnsUser> GetUserByDeviceId(string imei)
        {
            SnsUser snsUser = new SnsUser();
            if (string.IsNullOrEmpty(imei))
            {
                return snsUser;
            }
            CommandFilter f = new CommandFilter();
            string strCondition = string.Format("RegType = 1 AND {0}", f.FormatExpression("DeviceID"));
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("DeviceID", imei);
            return await SetUserInfo(strCondition, dicParamerter);
        }


        /// <summary>
        /// 获取随机userId
        /// </summary>
        /// <returns></returns>
        private async  Task<int> GetNewUserId()
        {
            while(1==1)
            {
                int userId = 10000 + new Random().Next(1, 70000);
                SnsUser snsUser = await GetUserInfoByUserId(userId);
                if(snsUser==null|| snsUser.UserId>=0)
                {
                    return userId;
                }
            }
        }


        /// <summary>
        /// Inserts the sns user.
        /// </summary>
        /// <returns>The sns user.</returns>
        /// <param name="paramNames">Parameter names.</param>
        /// <param name="paramValues">Parameter values.</param>
        /// <param name="isCustom"></param>
        public async Task<int> InsertSnsUser(string[] paramNames, string[] paramValues, bool isCustom)
        {
            SnsPassport oSnsPassportLog = new SnsPassport();
            if (!isCustom && !oSnsPassportLog.VerifyRegPassportId(_PassportId))
            {
                return 0;
            }
            //md5加密
            string password = PasswordEncryptMd5(_PassportPwd);
            _userid= await GetNewUserId();
            var command = SQLConnectManager.Provider.CreateCommandStruct("SnsUserInfo", CommandMode.Insert);
            // command.ReturnIdentity = true; 
            command.AddParameter("UserId", _userid);
            command.AddParameter("passportid", _PassportId);
            command.AddParameter("passportid", _PassportId);
            command.AddParameter("passportpwd", password);
            command.AddParameter("DeviceID", _imei);
            command.AddParameter("RegType", (int)RegType);
            command.AddParameter("RegTime", DateTime.Now);
            command.AddParameter("RetailID", RetailID);
            command.AddParameter("RetailUser", RetailUser);
            command.AddParameter("PwdType", (int)PwdType.MD5);
            

            if (paramNames != null && paramValues != null)
            {
                for (int i = 0; i < paramNames.Length; i++)
                {
                    command.AddParameter(paramNames[i], paramValues.Length > i ? paramValues[i] : "");
                }
            }
            command.Parser();

            try
            {
                if (!isCustom && !oSnsPassportLog.SetPassportReg(_PassportId))
                {
                    throw new Exception("Set passport  State.Reg fail.");
                }
                SQLConnectManager.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
                //using (var aReader = ConnectManager.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                //{
                //    if (aReader.Read())
                //    {
                //        _userid = Convert.ToInt32(aReader[0]);
                //    }
                //}
                return _userid;
            }
            catch (Exception ex)
            {
                _Logger.SaveLog(ex);
                return 0;
            }
        }
        /// <summary>
        /// 向社区中心添加用户
        /// </summary>
        /// <returns></returns>
        public async Task<int> InsertSnsUser(bool isCustom)
        {
            return await InsertSnsUser(new string[0], new string[0], isCustom);
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="isReset">只重置密码</param>
        /// <returns></returns>
        public int ChangePass(string userId, bool isReset = false)
        {
            try
            {
                //md5加密
                string password = PasswordEncryptMd5(_PassportPwd);

                var command = SQLConnectManager.Provider.CreateCommandStruct("SnsUserInfo", CommandMode.Modify);
                command.AddParameter("passportpwd", password);
                if (!isReset)
                {
                    command.AddParameter("RegType", (int)RegType.Normal);
                    command.AddParameter("PwdType", (int)PwdType.MD5);
                }

                command.Filter = SQLConnectManager.Provider.CreateCommandFilter();

                var section = ConfigManager.Configger.GetFirstOrAddConfig<MiddlewareSection>();
                if (userId.ToUpper().StartsWith(section.PreAccount))
                {
                    command.Filter.Condition = command.Filter.FormatExpression("PassportID");
                    command.Filter.AddParam("PassportID", userId);
                }
                else
                {
                    command.Filter.Condition = command.Filter.FormatExpression("UserID");
                    command.Filter.AddParam("UserID", userId);
                }
                command.Parser();

                return SQLConnectManager.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
            }
            catch (Exception ex)
            {
                _Logger.SaveLog(ex);
                return 0;
            }
        }


        internal int ChangeUserInfo(string pid, SnsUser snsuser)
        {
            try
            {
                var command = SQLConnectManager.Provider.CreateCommandStruct("SnsUserInfo", CommandMode.Modify);
                if (!string.IsNullOrEmpty(snsuser.Mobile))
                {
                    command.AddParameter("Mobile", snsuser.Mobile);
                }
                if (!string.IsNullOrEmpty(snsuser.Mail))
                {
                    command.AddParameter("Mail", snsuser.Mail);
                }
                if (!string.IsNullOrEmpty(snsuser.RealName))
                {
                    command.AddParameter("RealName", snsuser.RealName);
                }
                if (!string.IsNullOrEmpty(snsuser.IDCards))
                {
                    command.AddParameter("IDCards", snsuser.IDCards);
                }
                if (!string.IsNullOrEmpty(snsuser.ActiveCode))
                {
                    command.AddParameter("ActiveCode", snsuser.ActiveCode);
                }
                if (snsuser.SendActiveDate > DateTime.MinValue)
                {
                    command.AddParameter("SendActiveDate", snsuser.SendActiveDate);
                }
                if (snsuser.ActiveDate > DateTime.MinValue)
                {
                    command.AddParameter("ActiveDate", snsuser.ActiveDate);
                }
                if (!string.IsNullOrEmpty(snsuser.RetailUser))
                {
                    command.AddParameter("RetailUser", snsuser.RetailUser);
                }
                if (!string.IsNullOrEmpty(snsuser.RetailID))
                {
                    command.AddParameter("RetailID", snsuser.RetailID);
                }
                if (!string.IsNullOrEmpty(snsuser.WeixinCode))
                {
                    command.AddParameter("WeixinCode", snsuser.WeixinCode);
                }
                command.Filter = SQLConnectManager.Provider.CreateCommandFilter();
                command.Filter.Condition = command.Filter.FormatExpression("PassportID");
                command.Filter.AddParam("PassportID", pid);
                command.Parser();

                return SQLConnectManager.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
            }
            catch (Exception ex)
            {
                _Logger.SaveLog(ex);
                return 0;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="device"></param>
        /// <returns></returns>
        public static async Task<bool> CheckDevice(string device)
        {
            if (string.IsNullOrEmpty(device))
                return true;
            return await BaseHelper.CheckDevice(device);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="passportId"></param>
        /// <returns></returns>
        public async Task<SnsUser> GetUserInfo(string passportId)
        {
            CommandFilter f = new CommandFilter();
            string strCondition = f.FormatExpression("PassportId");
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("PassportId", passportId);
            return await SetUserInfo(strCondition, dicParamerter);
        }
        /// <summary>
        /// 通过电话号码获取用户信息
        /// </summary>
        /// <param name="mobile"></param>
        /// <returns></returns>
        public async Task<SnsUser> GetUserInfoByMobile(string mobile)
        {
            CommandFilter f = new CommandFilter();
            string strCondition = f.FormatExpression("PassportID");
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("PassportID", mobile);
            return await SetUserInfo(strCondition, dicParamerter);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public async Task<SnsUser> GetUserInfoByUserId(int UserId)
        {
            CommandFilter f = new CommandFilter();
            string strCondition = f.FormatExpression("UserId");
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("UserId", UserId);
            return await SetUserInfo(strCondition, dicParamerter);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="retailID"></param>
        /// <param name="retailUser"></param>
        /// <returns></returns>
        public async Task<SnsUser> GetUserInfo(string retailID, string retailUser)
        {
            CommandFilter f = new CommandFilter();
            string strCondition = string.Format("{0} AND {1}", f.FormatExpression("RetailID"), f.FormatExpression("RetailUser"));
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("RetailID", retailID);
            dicParamerter.Add("RetailUser", retailUser);
            return await SetUserInfo(strCondition, dicParamerter);
        }

        /// <summary>
        /// 通过微信号
        /// </summary>
        /// <param name="openId"></param>
        /// <returns></returns>
        public async Task<SnsUser> GetUserByWeixin(string openId)
        {
            CommandFilter f = new CommandFilter();
            string strCondition = f.FormatExpression("WeixinCode");
            Dictionary<string, object> dicParamerter = new Dictionary<string, object>();
            dicParamerter.Add("WeixinCode", openId);
            return await SetUserInfo(strCondition, dicParamerter);
        }

        private async Task<SnsUser> SetUserInfo(string strCondition, Dictionary<string, object> dicParamerter)
        {
            strCondition = strCondition.Replace("[", "");
            strCondition = strCondition.Replace("]", "");
            return await BaseHelper.SetUserInfo(strCondition, JsonUtils.Serialize(dicParamerter));
        }

        private DateTime ToDate(string str)
        {
            DateTime result;
            DateTime.TryParse(str, out result);
            return result;
        }

        /// <summary>
        /// Adds the login log.
        /// </summary>
        /// <param name="deviceID">Device I.</param>
        /// <param name="passportID">Passport I.</param>
        public static void AddLoginLog(string deviceID, string passportID)
        {
            if (string.IsNullOrEmpty(deviceID) || string.IsNullOrEmpty(passportID))
            {
                return;
            }
            var command = SQLConnectManager.Provider.CreateCommandStruct("PassportLoginLog", CommandMode.Insert);
            command.AddParameter("DeviceID", deviceID);
            command.AddParameter("PassportID", passportID);
            command.AddParameter("LoginTime", MathUtils.Now);
            command.Parser();

            SQLConnectManager.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
        }

        /// <summary>
        /// 记录用户登录
        /// </summary> 
        public static void AddUserLoginLog(int userId, string IP, string machineCode, int machineType,float lat, float lng)
        {
            if (userId <= 0)
            {
                return;
            }
            var command = SQLConnectManager.Provider.CreateCommandStruct("userloginlog", CommandMode.Insert);
            command.AddParameter("UserId", userId);
            command.AddParameter("IP", IP);
            command.AddParameter("MachineCode", machineCode);
            command.AddParameter("MachineType", machineType);
            command.AddParameter("Lat", lat);
            command.AddParameter("Lng", lng);
            command.AddParameter("CreateTime", MathUtils.Now);
            command.Parser();

            SQLConnectManager.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
        }
    }
}