using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Security;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Context;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Framework.Game.Runtime;
using ETModel.Framework.Game.Sns;
using ETModel.Framework.Game.Sns.Service;
using ETModel.Script.Model;
using System;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class AccountHelper : BaseHelper
    {

        /// <summary>
        ///  
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetExiste(cs_getexiste_openid data)
        {
            sc_getexiste_openid _senddata = new sc_getexiste_openid() { result = 0 };
            string _pid = "";
            bool _isExiste = false;
            ETModel.Framework.Game.Sns.SnsUser _snsuser = await ETModel.Framework.Game.Sns.SnsManager.LoginByWeixin(data.openid);
            if (string.IsNullOrEmpty(_snsuser.WeixinCode))
            {//注册绑定                                    

                ////var q = SnsManager.Register(_openid, "123456", "", true);
                ////var s = SnsManager.RegisterWeixin(_openid, "123456", "", _openid);
                ////SnsUser _tempu = SnsManager.LoginByWeixin(_openid);
                ////_pid = _tempu.PassportId;
                ////_userid = _tempu.UserId;
            }
            else
            {
                _isExiste = true;
                _pid = _snsuser.PassportId;
                ////_userid = _snsuser.UserId;
            }
            _senddata._existe = _isExiste;
            _senddata._pid = _pid;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        ///  
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetDevice(cs_device data)
        {
            sc_device _senddata = new sc_device() { result = 0 };
            string passport;
            string password;
            if (data._openid != "")
            {
                var q = SnsManager.Register(data._unionid, data._openid, "", true);//密码123456
                var s = SnsManager.RegisterWeixin(data._unionid, data._openid, "", data._openid);
                SnsUser _tempu = await SnsManager.LoginByWeixin(data._openid);
                passport = _tempu.PassportId;
                password = data._openid;
                _tempu.RetailUser = data._openid;
                _tempu.RetailID = data.RetailID;
                _tempu.WeixinCode = data._openid;
                SnsManager.ChangeUserInfo(passport, _tempu);
            }
            else
            {
                string[] userList = await SnsManager.GetRegPassport(data.DeviceID);
                passport = userList[0];
                password = userList[1];
            }

            _senddata.result = 1;
            _senddata.passportid = passport;
            _senddata.password = password;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> LoginAC(cs_loginac data, string RemoteAddress, string SessionId)
        {
            sc_loginac _senddata = new sc_loginac() { result = 0 };
            var snsUser = await BaseHelper.LoginGetSnsUser(data.PassportId);
            if (snsUser == null)
            {
                _senddata.result = -1;//用户名密码错误
                return JsonUtils.Serialize(_senddata);
            }
            // string Password = DecodePassword(data.Password);  
            try
            { 
                int userId = snsUser.UserId; 
                _senddata.PassportId = data.PassportId;
                _senddata.UserType = data.UserType;
                _senddata.aCode = snsUser.ActiveCode; 
                _senddata.result = 1;
                _senddata.SessionId = SessionId;
                _senddata.UserId = userId;
                _senddata.UserType = data.UserType;
                _senddata.LoginTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
                //_senddata.GuideID = 0;
                _senddata.PassportId = data.PassportId;
                _senddata.refresh_token = "";
                _senddata.scope = "";
                _senddata.GuideID = 1005;
                return JsonUtils.Serialize(_senddata); 

                //var _tempuser = await GetBase<tUser>(userId);
                //if (_tempuser == null)
                //{
                //    _senddata.result = -10;// ErrorCode = SimplifiedLanguage.Instance.LockTimeoutCode;                                
                //    TraceLogEx.Error("201702161640 tb_User is null..." + userId);
                //    return JsonUtils.Serialize(_senddata);
                //}
                //else
                //{
                //    //_tempuser.lockTime = "2017-05-27 11:47:35";
                //    if (!string.IsNullOrEmpty(_tempuser.lockTime))
                //    {
                //        if (Convert.ToDateTime(_tempuser.lockTime) > DateTime.Now)
                //        {
                //            _senddata.result = -99;// ErrorCode = SimplifiedLanguage.Instance.LockTimeoutCode;   
                //            return JsonUtils.Serialize(_senddata);
                //        }
                //    }
                //} 

                //    _senddata.result = 1;
                //    _senddata.SessionId = SessionId;
                //    _senddata.UserId = userId;
                //    _senddata.UserType = data.UserType;
                //    _senddata.LoginTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
                //    _senddata.GuideID = 0;
                //    _senddata.PassportId = data.PassportId;
                //    _senddata.refresh_token = "";
                //    _senddata.scope = "";
                //    return JsonUtils.Serialize(_senddata);
            }
            catch (HandlerException error)
            {
                TraceLogEx.Error(error.Message);
                return JsonUtils.Serialize(_senddata);
            }
            //TraceLogEx.Error("login unknowe error!!!");
            //return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="password"></param>
        /// <returns></returns>
        public static string DecodePassword(string password)
        {
            try
            {
                if (string.IsNullOrEmpty(password)) return password;
                return new DESAlgorithmNew().DecodePwd(password, GameEnvironment.Setting.ClientDesDeKey);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, string.Format("Decode password:[{0}] ", password));
            }
            return password;
        }
        /// <summary>
        /// 创建游戏用户
        /// </summary>
        /// <param name="UserID">用户编号</param>
        /// <param name="IPAddress">用户ip地址</param>
        /// <param name="UserName">用户名称</param>
        /// <param name="RetailID">商户编号（主键）</param>
        /// <param name="Gold">金币</param>
        /// <param name="Sex">性别</param>
        /// <param name="HeadID">头像</param>
        /// <returns></returns>
        public static tUser GetNewUser(int UserID, long _Gold, long Diamond, string IPAddress, string UserName, int RetailID, int Sex, string HeadID)
        {
            return new tUser()
            {
                Desc = "desc",
                diamond = Diamond,
                IP = IPAddress == null ? string.Empty : IPAddress.Split(':')[0],
                isRobot = 0,
                LastLotinTime1 = "",
                LastLotinTime2 = "",
                wechatName = string.IsNullOrEmpty(UserName) ? "auto_" + UserID : UserName,
                RegTime = DateTime.Now,
                UserID = UserID,
                RetailID = RetailID,
                MaxGold = 20 * 10000 * 10000,
                Gold = _Gold, // 100000 * 100,// 10000 * 100, 
                UserPassword = "", //DESEncrypt.Encrypt("888888", "bkpassword"),
                //UserPassword = "",
                vlevel = 0,//全部默认开启代理
                Sex = Sex,
                wechatHeadIcon = HeadID,
                showid = UserID,
            };
        }
        public static async Task<string> Creater1005(cs_create1005 data, string RemoteAddress, int UserId, tUser user = null)
        {
            sc_create1005 _senddata = new sc_create1005() { result = 0 };
            string UsedCode = data.ActiveCode;
            var snsuser = await SnsManager.GetUserInfoByUserId(Convert.ToInt32(UserId));
            if (snsuser != null && !string.IsNullOrEmpty(snsuser.ActiveCode)) UsedCode = snsuser.ActiveCode;//sdk接入完成可以删除此句

            int genCodeUserId = 0;
            if (!string.IsNullOrWhiteSpace(UsedCode))
            {
                genCodeUserId = await GetAcodeUseUserId(UsedCode);//GetUseUserId
            }
            if (UserId > 0 && !string.IsNullOrWhiteSpace(data.NickName) && data.NickName.Length < 15)
            {
                {
                    tUser _tempuser = user;
                    if (_tempuser == null)
                    {//自动注册同个角色到游戏库中
                     
                        string name = data.NickName;
                        if (name != null && name.Length > 50) name = name.Substring(0, 59);
                        _tempuser = GetNewUser(UserId, 0, 1000, data.IP, string.IsNullOrWhiteSpace(name) ? "Player_" + UserId : name, data.RetailID.ToInt32(), data._Sex, data.HeadID);
                        tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(UserId);
                        await AddOrUpdateBase(_tempuser);

                        tuseragent2021Ex.AddUserAgent2021(UserId, genCodeUserId, 0, UsedCode);
                        tUserJackpot _tuserpot = new tUserJackpot() { UserId = UserId, watergoldadd = 0, watergoldreduce = 0, updatetime = DateTime.Now, _potRange = new CacheList<UJackpotRange>() };
                        tUserJackpotEx.AddOrUpdate(_tuserpot);
                        
                        #region 给新用户发送一封邮件
                        int[] userIds = new int[1];
                        userIds[0] = UserId;
                        await MailHelper.SendGMEmail("Welcome to new world!", "Dear players, welcome and have a nice game!", userIds);
                        #endregion
                    }
                    else
                    {
                        tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(UserId);
                        var agent = await tuseragent2021Ex.GetAgentFromCachebyUserID(_tempuser.UserID, 0);
                        if (agent == null)
                        {
                            //string mycode = await GenerateCode(UserId); //生成自己的激活码
                            tuseragent2021Ex.AddUserAgent2021(UserId, genCodeUserId, 0, UsedCode);
                            tUserJackpot _tuserpot = tUserJackpotEx.GetNewUserJackpot(UserId);
                            _tuserpot.watergoldadd = 0;
                            _tuserpot.watergoldreduce = 0;
                            tUserJackpotEx.AddOrUpdate(_tuserpot);
                        }
                        tUserJackpotEx.ChangeNewPlayerControlStatus(infoEx, 0, false);
                    }

                    _senddata.result = 1;
                    return JsonUtils.Serialize(_senddata);
                }

            }
            return JsonUtils.Serialize(_senddata);
        }


    }
}
