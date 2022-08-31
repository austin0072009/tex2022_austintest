using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Sys_Common
{
    /// <summary>
    /// 短信类型
    /// </summary>
    public enum SMSType
    {
        /// <summary>
        /// 1-绑定手机
        ///</summary>
        bindphone = 1,

        /// <summary>
        /// 2-账号其他手机登录
        /// </summary>
        changelogin = 2,
        /// <summary>
        /// 3-交易密码
        /// </summary>
        transpassword = 3
    }
    public class VerifyCodeHelper
    {
       
        /// <summary>
        /// 注册【通兑币】支付码：【3692】。用于交易卖出验证，请不要把支付码泄露给其他人。如非本人操作，可不用理会！30分钟内有效
        /// </summary>
        public const string bindPhone_SMS = "您的验证码为{0}，请于30分钟内正确输入，如非本人操作，请忽略此短信。【叁叁玖】";

        /// <summary>
        /// 账号其他手机登录
        /// </summary>
        public const string changeLogin_SMS = "验证码：{0}，打死都不要告诉别人哦！【叁叁玖】";
        /// <summary>
        /// 交易密码
        /// </summary>
        public const string transpassword_SMS = "您的验证码为{0}，请于10分钟内正确输入，如非本人操作，请忽略此短信。【叁叁玖】";
        public const string restpassword_SMS = "验证码：{0}，打死都不要告诉别人哦！【叁叁玖】";
        private readonly HttpClient _client = new HttpClient();
        /// <summary>
        /// 短信帐号信息
        /// </summary>
        public static string account = ConfigurationManager.AppSettings["SMSAccount"].ToString();
        public static string password = ConfigurationManager.AppSettings["SMSPassword"].ToString();
        public static string PostUrl = ConfigurationManager.AppSettings["SMSPostUrl"].ToString();
        public static string appkey = ConfigurationManager.AppSettings["SMSappkey"].ToString();
        /// <summary>
        /// 生成验证码
        /// </summary>
        /// <param name="phoneNum">手机号</param>
        /// <param name="type">验证类型</param>
        /// <returns>生成结果</returns>
        public bool CreateCode(string phoneNum, int type,out int verifycode, int newpassword = 0)
        {
            Random rad = new Random();
            int mobile_code = rad.Next(100000, 999999);
            mobile_code = newpassword == 0? mobile_code: newpassword;
            verifycode = mobile_code;
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
                    case 3:
                        contentTemplate = restpassword_SMS;
                        break;
                    default:
                        return false;
                }

                try
                {
                    string content = string.Format(contentTemplate, mobile_code);
                    _client.DefaultRequestHeaders.Clear();
                    _client.BaseAddress = new Uri(PostUrl);
                    var result = GetResult(account, password, phoneNum, content, appkey);
                    var Rdata = JsonHelper.JSONToObject<SmsResult>(result);

                    if (Rdata == null) return false;
                    if (Rdata.returnstatus.Equals("Success")) return true;
                    else return false;
                }
                catch (Exception ex)
                {
                    return false;
                }
                
            }
            catch (Exception ex)
            {
                Log.Error("VerifyCodeHelper", ex.Message);
            }
            return true;
        }

        private string GetResult(string accountName, string password, string mobiles, string content, string userid)
        {
            var req = new HttpRequestMessage();
            req.Headers.Clear();
            req.Headers.Add("ContentType", "application/x-www-form-urlencoded;charset=utf-8");
            req.Method = HttpMethod.Post;
            req.Content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                {"action", "send"},
                {"userid",userid},
                {"account", accountName},
                {"password", password},
                {"mobile", mobiles},
                {"content", content},
                {"sendtime", ""},
                {"extno", ""}
            });
            var response = _client.SendAsync(req).Result;
            try
            {
                response.EnsureSuccessStatusCode();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error:{0}", ex.Message);
                return "";
            }
            return response.Content.ReadAsStringAsync().Result;
        }
    }
    public class SmsResult
    {
        public string returnstatus { get; set; }

        public string message { get; set; }

        public string taskID { get; set; }


    }
    public class MwResult
    {
        public int result { get; set; }

        public long msgid { get; set; }

        public string custid { get; set; }
    }
   
}
