using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace LoginSystem
{
    public class Login
    {
        /// <summary>
        /// 注册【通兑币】支付码：【3692】。用于交易卖出验证，请不要把支付码泄露给其他人。如非本人操作，可不用理会！30分钟内有效
        /// </summary>
        public const string bindPhone_SMS = "您的验证码是：【{0}】,30分钟内有效。请不要把验证码泄露给其他人。如非本人操作，可不用理会！";

        /// <summary>
        /// 账号其他手机登录
        /// </summary>
        public const string changeLogin_SMS = "您的验证码是：{0}。请不要把验证码泄露给其他人。";
        /// <summary>
        /// 交易密码
        /// </summary>
        public const string transpassword_SMS = "您的交易密码验证码是：【{0}】,30分钟内有效。请不要把验证码泄露给其他人。如非本人操作，可不用理会！ ";

        /// <summary>
        /// 短信帐号信息
        /// </summary>
        public static string account = ConfigurationManager.AppSettings["SMSAccount"].ToString();
        public static string password = ConfigurationManager.AppSettings["SMSPassword"].ToString();
        public static string PostUrl = ConfigurationManager.AppSettings["SMSPostUrl"].ToString();

        /// <summary>
        /// 生成验证码
        /// </summary>
        /// <param name="phoneNum">手机号</param>
        /// <param name="type">验证类型</param>
        /// <returns>生成结果</returns>
        public MResult<bool> CreateCode(string phoneNum, int type)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };

            try
            {
                string contentTemplate = "";
                switch (type)
                {
                    case 0://注册
                        contentTemplate = bindPhone_SMS;
                        break;
                    case 1://找回密码
                        contentTemplate = changeLogin_SMS;
                        break;
                    case 2://交易密码
                        contentTemplate = transpassword_SMS;
                        break;
                }
                if (contentTemplate == "")
                {
                    result.Data = false;
                    result.Msg = "未找到指定的短信模板";
                    return result;
                }
                //打包发送内容

                Random rad = new Random();
                int mobile_code = rad.Next(100000, 999999);

                string content = string.Format(contentTemplate, mobile_code);

                string postStrTpl = "account={0}&password={1}&mobile={2}&content={3}";

                UTF8Encoding encoding = new UTF8Encoding();
                byte[] postData = encoding.GetBytes(string.Format(postStrTpl, account, password, phoneNum, content));

                HttpWebRequest myRequest = (HttpWebRequest)WebRequest.Create(PostUrl);
                myRequest.Method = "POST";
                myRequest.ContentType = "application/x-www-form-urlencoded";
                myRequest.ContentLength = postData.Length;

                Stream newStream = myRequest.GetRequestStream();

                // Send the data.
                newStream.Write(postData, 0, postData.Length);
                newStream.Flush();
                newStream.Close();

                HttpWebResponse myResponse = (HttpWebResponse)myRequest.GetResponse();
                if (myResponse.StatusCode == HttpStatusCode.OK)
                {
                    StreamReader reader = new StreamReader(myResponse.GetResponseStream(), Encoding.UTF8);
                    string res = reader.ReadToEnd();
                    int len1 = res.IndexOf("</code>");
                    int len2 = res.IndexOf("<code>");
                    string code = res.Substring((len2 + 6), (len1 - len2 - 6));
                    int len3 = res.IndexOf("</msg>");
                    int len4 = res.IndexOf("<msg>");
                    string msg = res.Substring((len4 + 5), (len3 - len4 - 5));
                    if (msg.IndexOf("同一手机号验证码短信发送超出") >= 0)
                    {
                        result.Data = false;
                        result.Msg = "今天短信验证已超出最大条数，请明天使用！";
                        return result;
                    }

                    ////记录验证码

                    MUserMsg usermsg = new MUserMsg { AddTime = DateTime.Now, IsDelete = 0, MatchTimes = 0, ModifyTime = DateTime.Now, OperType = 0, PhoneNum = phoneNum, UserID = string.Empty, VerifyCode = mobile_code.ToString() };
                    BUserMsg bll = new BUserMsg();
                    bll.Add(usermsg);
                }
                else
                {
                    result.Data = false;
                    result.Msg = "访问短信服务器失败";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = false;
                result.Msg = "短信发送异常" + ex.Message;
            }

            return result;
        }

        /// <summary>
        /// 校验验证码
        /// </summary>
        /// <param name="phoneNum">手机号</param>
        /// <param name="type">验证类型</param>
        /// <param name="code">验证码</param>
        /// <returns>验证结果</returns>
        public MResult<bool> CheckCode(string phoneNum, int type, string code)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };
            try
            {
                BUserMsg bll = new BUserMsg();
                var model = bll.GetModel(phoneNum, type);
                if (model != null)
                {
                    if (model.IsDelete == 1 && model.VerifyCode == code)
                    {
                        result.Data = false;
                        result.Msg = "短信验证码已被使用，请重新发送";
                        return result;
                    }
                    if (model.AddTime.AddSeconds(1800) < DateTime.Now)
                    {
                        result.Data = false;
                        result.Msg = "短信验证码已超时，请重新发送";
                        return result;
                    }
                    if (model.MatchTimes > 4)
                    {
                        result.Data = false;
                        result.Msg = "短信验证码已超过最大错误次数，请重新发送";
                        return result;
                    }
                    if (code.ToUpper() != model.VerifyCode.ToUpper())
                    {
                        model.MatchTimes = model.MatchTimes + 1;
                        bll.Update(model);
                        result.Data = false;
                        result.Msg = "短信验证码错误";
                        return result;
                    }
                    model.IsDelete = 1;
                    if (bll.Update(model))
                    {
                        result.Data = true;
                    }
                }
                else
                {
                    result.Data = false;
                    result.Msg = "请先发送短信验证码";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = false;
                result.Msg = "程序异常，请联系管理" + ex.Message;
                return result;
            }

            return result;
        }

        /// <summary>
        /// 校验用户名
        /// </summary>
        /// <param name="userId">用户ID</param>
        /// <returns>校验结果</returns>
        public MResult<bool> CheckUserName(string userId)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };
            try
            {
                bool isExist = BCache.GetUserId(userId);
                if (!isExist)
                {
                    result.Data = true;
                    result.Msg = "用户名可以使用";
                }
                else
                {
                    result.Data = false;
                    result.Msg = "用户名已存在";
                }
            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Msg = ex.Message;
            }

            return result;
        }

        /// <summary>
        /// 校验手机号
        /// </summary>
        /// <param name="phoneNum">手机号</param>
        /// <returns>校验结果</returns>
        public MResult<bool> CheckPhoneNum(string phoneNum)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };
            try
            {
                bool isExist = BCache.GetPhoneNum(phoneNum);
                if (!isExist)
                {
                    result.Data = true;
                    result.Msg = "手机号可以使用";
                }
                else
                {
                    result.Data = false;
                    result.Msg = "手机号已经注册，如果忘记密码请选择找回密码";
                }

            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Msg = ex.Message;
            }

            return result;
        }

        /// <summary>
        /// 注册用户
        /// </summary>
        /// <param name="user">用户信息</param>
        /// <returns></returns>
        public MResult<bool> Register(MLogin user)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };
            try
            {
                BLogin bll = new BLogin();
                user.PassWord = DESLogin.Encrypt(user.PassWord, "login");
                result.Data = bll.Add(user);
            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Msg = ex.Message;
            }

            return result;
        }

        /// <summary>
        /// 尝试登录
        /// </summary>
        /// <param name="loginAccount">登录帐号（用户名或者手机号）</param>
        /// <param name="passWord">登录密码</param>
        /// <returns>登录结果</returns>
        public MResult<MLogin> TryLogin(string loginAccount, string passWord)
        {
            MResult<MLogin> result = new MResult<MLogin> { Result = true, Msg = string.Empty };
            try
            {
                passWord = DESLogin.Encrypt(passWord, "login");
                string wherestr = string.Format("(phoneNum='{0}' OR userId='{0}')  AND isDelete = 0", loginAccount);
                BLogin bll = new BLogin();
                List<MLogin> list = bll.GetModelList(wherestr);
                if (list != null && list.Count > 0)
                {
                    var tempLogin = list[0];
                    if (tempLogin.PassWord.Equals(passWord))
                    {
                        result.Data = tempLogin;
                        result.Msg = "登陆成功";
                    }
                    else
                    {
                        result.Result = false;
                        result.Msg = "密码错误";
                    }
                }
                else
                {
                    result.Result = false;
                    result.Msg = "该用户不存在,请先注册";
                }
                
            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Msg = ex.Message;
            }

            return result;
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="phoneNum">手机号</param>
        /// <param name="passWord">登录密码</param>
        /// <returns>修改结果</returns>
        public MResult<bool> ChangePassWord(string phoneNum, string passWord)
        {
            MResult<bool> result = new MResult<bool> { Result = true, Msg = string.Empty };
            try
            {
                string wherestr = string.Format("phoneNum='{0}' AND isDelete = 0", phoneNum);
                BLogin bll = new BLogin();
                List<MLogin> list = bll.GetModelList(wherestr);
                if (list != null && list.Count > 0)
                {
                    MLogin login = list[0];
                    login.PassWord = DESLogin.Encrypt(passWord, "login");
                    result.Data = bll.Update(login);
                }
                else
                {
                    result.Data = false;
                }
            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Msg = ex.Message;
            }

            return result;
        }
    }
}
