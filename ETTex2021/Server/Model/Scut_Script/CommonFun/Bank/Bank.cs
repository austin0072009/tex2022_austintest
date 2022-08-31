using ETModel.Script.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Framework.Game.Sns;
using System.Threading.Tasks;
using ETModel.Framework.Common.Security;

namespace ETModel.Script.CsScript.Action
{
    public class Bank
    {
        #region 银行相关

        public static async Task<string> EnterBank(tUser _user, cs_enterbank_bk _data)
        {
            try
            {
                sc_enterbank_bk _senddata = new sc_enterbank_bk() { result = 0 };
                Bank bankop = new Bank();
                bool result =await bankop.checkPassword(_data.pwd, _user.UserID, _senddata);
                if (result)
                {
                    _senddata.result = 1;
                }

                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508att ");
                return "";
            }
        }

        public static async Task<string> GetBankInfo(tUser _user)
        {
            try
            {
                sc_enterbank_bk _senddata = new sc_enterbank_bk() { result = 0 };
                Bank bankop = new Bank();
                bool result = await bankop.checkPassword("", _user.UserID, _senddata,true);
                if (result)
                {
                    _senddata.result = 1;
                }

                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508att ");
                return "";
            }
        }

        public static async Task<string> BindAction(cs_bindalipaybank data)
        {
            sc_bindalipaybank scmsg = new sc_bindalipaybank { result=0 };
            //if (RankHelper.Getverifycode(data.vCode))
            //{
            //    var tUser =await BaseHelper.GetBase<tUser>(data.uid);
            //    if (DESEncrypt.Encrypt(data.pwd, "bkpassword")!= tUser.UserPassword)
            //    {
            //        scmsg.result = -20;//交易密码不正确
            //    }
            //    else
            //    {
                    if (string.IsNullOrEmpty(data.account) || string.IsNullOrEmpty(data.name))
                    {
                        scmsg.result = -3;//请完善数据
                    }
                    else
                    {
                        if (!await BindBankGameuser(data)) scmsg.result = -1;//绑定失败
                        else scmsg.result = 1;

                    }
            //    }
            //    RankHelper.Useverifycode(data.vCode);
            //}
            //else
            //{
            //    scmsg.result = -2;//验证码过期

            //}
            return JsonUtils.Serialize(scmsg);
        }


        /// <summary>
        /// 绑定支付宝  银行卡
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static async Task<bool> BindBankGameuser(cs_bindalipaybank   data)
        {
            tuserInfoEx tuserInfoEx = await tb_userinfoEx.GetFromCachebyUserID(data.uid);
            if (data.t.Equals(1))
            {
                tuserInfoEx.alipayName = data.name;
                tuserInfoEx.alipayNum = data.account;
                //tuserInfoEx.aPhone = data.phone;
            }
            else
            {
                tuserInfoEx.BankUn = data.name;
                tuserInfoEx.BankNum = data.account;
                tuserInfoEx.BankName = data.bank;
                //tuserInfoEx.bPhone = data.phone;
                tuserInfoEx.BankProvince = data.province;
                tuserInfoEx.BankCity = data.country;
                tuserInfoEx.BankBranch = data.branch;
                BaseHelper.ChangeUserGameDate(data.uid, 0, "BindBank");
            }
            await BaseHelper.AddOrUpdateBase<tuserInfoEx>(tuserInfoEx);
            return true;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="money"></param>
        /// <param name="pwd"></param>
        /// <param name="account"></param>
        /// <param name="username"></param>
        /// <param name="accounttype"> //1 银行卡 2 支付宝 3 微信</param>
        /// <returns></returns>
        public static string UserCashMoney(int userid, int money, string pwd, string account, string username, string accounttype, string remark)
        {
            sc_cashmoney _senddata = new sc_cashmoney() { result = 0 };
            return JsonUtils.Serialize(_senddata);
        }       

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> OpBank(tUser _user, cs_opBank_bk _data)
        {
            Bank bankop = new Bank();
            string _redata = await bankop.opBank(_user.UserID, _data.OpType, _data.OpCount);

            return _redata;
        }

        public static async Task<string> OpBank(tUser _user, cs_opBankPwd_bk _data)
        {
            sc_enterbank_bk enterbank = new sc_enterbank_bk() { };
            Bank bankop = new Bank();
            bool result = await bankop.checkPassword(_data.pwd, _user.UserID, enterbank);
            if (result)
            {
                sc_opBank_bk optemp = new sc_opBank_bk() { };
                string _redata = await bankop.opBank(_user.UserID, _data.OpType, _data.OpCount);
                return _redata;

            }
            return JsonUtils.Serialize(new sc_opBank_bk() {result=-6,msg="密码错误" });
        }

        /// <summary>
        ///  修改银行密码
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> ChangePassword(tUser _user, cs_changePassword_bk _data)
        {
            try
            {
                sc_changePassword_bk _senddata = new sc_changePassword_bk() { result = 0 };
                Bank bankop = new Bank();
                if (string.IsNullOrEmpty(_user.UserPassword))
                {
                    bool result = await bankop.changePassWord(_user.UserID, _data.newPassWord);
                    if (result)
                    {
                        _senddata.result = 1;
                    }
                }
                else _senddata.result = -1;//已经有初始密码

                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508att ");
                return "";
            }
        }
        /// <summary>
        ///  忘记密码 修改银行密码
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> ChangeAppPassword(cs_changePassword_GM _data)
        {
            tUser _user = await tb_UserEx.GetFromCachebyUserID(_data.userid);

            sc_changePassword_GM _senddata = new sc_changePassword_GM() { _ret = 1,_info="fail" };
            if (_user!=null && !string.IsNullOrEmpty(_data.newPassWord))
            {
                _user.UserPassword = DESEncrypt.Encrypt(_data.newPassWord, "bkpassword");
                tb_UserEx.UpdateData(_user);
                _senddata._ret = 0;
                _senddata._info = "修改成功";
            }
            else
            {
                _senddata._ret = -1;
                _senddata._info = "数据异常";
            }
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        ///  修改银行密码
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> ChangeAppPassword(tUser _user, cs_changePassword_appbk _data)
        {
            SnsUser user = await SnsManager.GetUserInfoByUserId(_user.UserID);
            sc_changePassword_appbk _senddata = new sc_changePassword_appbk() { result = 1, message = "修改密码成功" };
            if (string.IsNullOrEmpty(_user.UserPassword) || (_user.UserPassword == DESEncrypt.Encrypt("888888", "bkpassword") && string.IsNullOrEmpty(_data.oldPassWord)))
            {
                _user.UserPassword = DESEncrypt.Encrypt(_data.newPassWord, "bkpassword");
            }
            else if (_user.UserPassword == DESEncrypt.Encrypt(_data.oldPassWord, "bkpassword") || CryptoHelper.RegUser_MD5_Pwd(_data.oldPassWord) == user.Password)
            {
                _user.UserPassword = DESEncrypt.Encrypt(_data.newPassWord, "bkpassword");
            }
            else
            {
                _senddata.result = 0;
                _senddata.message = "原始密码错误";
            }
            string _redata = JsonUtils.Serialize(_senddata);
            if (_senddata.result == 1)
            {
                await BaseHelper.AddOrUpdateBase<tUser>(_user);
            }
            return _redata;
        }


        public async Task<bool> changePassWord(int userId, string newPassword)
        {
            bool result = false;
            tUser tbuser = await BaseHelper.GetBase<tUser>(userId);
            if (tbuser != null)
            {
                tbuser.UserPassword = DESEncrypt.Encrypt(newPassword, "bkpassword");
                tb_UserEx.UpdateData(tbuser);
                result = true;
            }
            return result;
        }
        #endregion

        #region 获取手机验证码  
        /// <summary>
        /// 获取手机验证码
        /// </summary> 
        public static async Task<string> GetMobilePhoneNum(int userid, cs_mobilephonenum _data)
        {
            sc_mobilephonenum _senddata = new sc_mobilephonenum() { result = 1, cc = _data.cc };

            tuserInfoEx tuserInfoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (tuserInfoEx != null)
            {
                _senddata.aPhone = tuserInfoEx.aPhone == null ? "" : tuserInfoEx.aPhone;
                _senddata.aId = tuserInfoEx.alipayNum == null ? "" : tuserInfoEx.alipayNum;

                _senddata.bId = tuserInfoEx.BankNum == null ? "" : tuserInfoEx.BankNum;
                _senddata.bPhone = tuserInfoEx.bPhone == null ? "" : tuserInfoEx.bPhone;
                _senddata.bank = tuserInfoEx.BankName == null ? "" : tuserInfoEx.BankName;
                _senddata.bName = tuserInfoEx.BankUn == null ? "" : tuserInfoEx.BankUn;

                _senddata.UserCard = tuserInfoEx.MobilePhoneNum == null ? "" : tuserInfoEx.MobilePhoneNum;
                tUser tbuser = await BaseHelper.GetBase<tUser>(userid);
                _senddata.uName = tbuser.wechatName;
                _senddata.pwd = string.IsNullOrEmpty(tbuser.UserPassword) ? 0 : 1;
            }
            else _senddata.result = 0;

            return JsonUtils.Serialize(_senddata);
        }
        #endregion


        /// <summary>
        /// 检测银行密码
        /// </summary>
        /// <param name="password">银行密码</param>
        /// <param name="userid">用户ID</param>
        /// <returns>检测结果</returns>
        public async Task<bool> checkPassword(string password, int userid, sc_enterbank_bk _senddata,bool bNoPassWord = false)
        {
            bool result = false;
            try
            {
                tUser tbuser = await BaseHelper.GetBase<tUser>(userid);
                if (tbuser != null)
                {
                    if (bNoPassWord||(!string.IsNullOrEmpty(tbuser.UserPassword) && DESEncrypt.Encrypt(password, "bkpassword") == tbuser.UserPassword || (string.IsNullOrEmpty(password) && string.IsNullOrEmpty(tbuser.UserPassword))))
                    {
                        _senddata.gold = (int)tbuser.GetGoldAndWinGold;
                        _senddata.bankGold = tbuser.BankGold;

                        List<tbanklog> loglist =await BaseHelper.GetShareAll<tbanklog>(p => p.UserId == userid);
                        List<banklog> backlist = new List<banklog>();
                        if (loglist != null && loglist.Count > 0)
                        {
                            foreach (var item in loglist)
                            {
                                banklog mylog = new banklog();
                                mylog.OpCount = item.OpCount;
                                mylog.OpDate = item.OpDate;
                                mylog.OpType = item.OpType;
                                mylog.ToUserID = item.ToUserID;
                                backlist.Add(mylog);
                            }
                        }

                        var q = from e in backlist orderby e.OpDate descending select e;
                        backlist = q.ToList();
                        _senddata.log = backlist;
                        result = true;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201710161702bk ");
            }

            return result;
        }

        /// <summary>
        /// 检测银行密码
        /// </summary>
        public async Task<bool> checkPassword(string password, int userid)
        {
            bool result = false;
            try
            {
                tUser tbuser = await BaseHelper.GetBase<tUser>(userid);
                if (tbuser != null)
                {
                    if ((!string.IsNullOrEmpty(tbuser.UserPassword) && DESEncrypt.Encrypt(password, "bkpassword") == tbuser.UserPassword)||(string.IsNullOrEmpty(password)&&string.IsNullOrEmpty(tbuser.UserPassword)))
                    {
                        result = true;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201710161702bk ");
            }

            return result;
        }

        /// <summary>
        /// 银行操作
        /// </summary>
        /// <param name="userid">用户ID</param>
        /// <param name="type">类型1转入到银行2backgold</param>
        /// <param name="opCount">操作JB数</param>
        /// <param name="optemp">结果缓存</param>
        /// <returns>处理是否报错</returns>
        public async Task<string> opBank(int userid, int type, int opCount,int toUserID=0 )
        {
            int result = 1;
            sc_opBank_bk optemp = new sc_opBank_bk() { };
            tUser tbuser = await BaseHelper.GetBase<tUser>(userid);
            if (tbuser == null)
            {
                optemp.result = -1;
                return JsonUtils.Serialize(optemp);
            }
            if (type == 1)
            {
                if (tbuser.GetGoldAndWinGold >= opCount)
                {
                    tbuser.GoldReduce(opCount);
                    tbuser.BankGold += opCount;
                    BaseHelper.ChangeUserGameDate(tbuser.UserID, 0, "BankDepositCount");
                    BaseHelper.ChangeUserGameDate(tbuser.UserID, 0, "BankDepositScore",opCount);
                }
                else
                {
                    optemp.msg = "当前金币余额不足";
                    result = -2;
                }
            }
            else if (type == 2)
            {
                if (tbuser.BankGold >= opCount)
                {
                    tbuser.BankGold -= opCount;
                    tbuser.Gold += opCount;
                }
                else
                {
                    optemp.msg = "当前银行余额不足";
                    result = -3;
                }
            }else if (type == 3)
            {
                if (tbuser.BankGold < opCount)
                {
                    optemp.msg = "当前银行余额不足";
                    result = -3;
                }
                else
                {
                    tUser _targetUser = await tb_UserEx.GetFromCachebyUserID(toUserID);// userCache.FindKey(data.objuserid.ToString());
                    if (_targetUser == null)
                    {
                        TraceLogEx.Error(" 转账fetal error ...data.objuserid:" + toUserID);
                        optemp.result = -1;
                        optemp.msg = "转账用户不存在";
                        return JsonUtils.Serialize(optemp);
                    }
                    if (await GoldTradeHelper.EnsureBankMoneyLogic(tbuser, _targetUser, opCount))
                    {
                        optemp.result = 1;
                        optemp.msg = "转账成功";
                    }
                }
            }

            optemp.gold = (int)tbuser.GetGoldAndWinGold;
            optemp.bankGold = tbuser.BankGold;
            if (result==1)
            {
                tbanklog log = new tbanklog();
                log.UserId = userid;
                log.OpDate = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                log.OpType = type;
                log.OpCount = opCount;
                log.ToUserID = toUserID;
                BaseHelper.Add<tbanklog>(log);
            }

            await ThreadEx.Sleep(100);
            List<tbanklog> loglist = await BaseHelper.GetShareAll<tbanklog>(p => p.UserId == userid);
            List<banklog> backlist = new List<banklog>();
            if (loglist != null && loglist.Count > 0)
            {
                foreach (var item in loglist)
                {
                    banklog mylog = new banklog();
                    mylog.OpCount = item.OpCount;
                    mylog.OpDate = item.OpDate;
                    mylog.OpType = item.OpType;
                    mylog.ToUserID = item.ToUserID;
                    backlist.Add(mylog);
                }
            }

            var q = from e in backlist orderby e.OpDate descending select e;
            backlist = q.ToList();
            optemp.log = backlist;
            result = 1;
            optemp.result = result;
            return JsonUtils.Serialize(optemp);
        }
         
        /// <summary>
        /// GM重置银行密码
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="newPassword"></param>
        /// <returns></returns>
        public async Task<bool> GMRestPassWord(int userid, string newPassword)
        {
            bool result = false;

            tUser tbuser = await BaseHelper.GetBase<tUser>(userid);
            if (tbuser != null)
            {
                if (!string.IsNullOrEmpty(newPassword))
                {
                    tbuser.UserPassword = DESEncrypt.Encrypt(newPassword, "bkpassword");
                    result = true;
                } 
                await BaseHelper.AddOrUpdateBase(tbuser); 
            } 
            return result;
        }
         

    }
}
