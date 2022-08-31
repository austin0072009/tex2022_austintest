using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Sys_Common
{

  public  class VerifyCode
    {

        /// <summary>
        /// 注册【通兑币】支付码：【3692】。用于交易卖出验证，请不要把支付码泄露给其他人。如非本人操作，可不用理会！30分钟内有效
        /// </summary>
        public string bindPhone_SMS = "您的验证码为{0}，请于30分钟内正确输入，如非本人操作，请忽略此短信。";

        /// <summary>
        /// 账号其他手机登录
        /// </summary>
        public string changeLogin_SMS = "验证码：{0}，打死都不要告诉别人哦！";
        /// <summary>
        /// 交易密码
        /// </summary>
        public string transpassword_SMS = "您的验证码为{0}，请于30分钟内正确输入，如非本人操作，请忽略此短信。";
        public string restpassword_SMS = "验证码：{0}，打死都不要告诉别人哦！";

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
        public bool CreateCode(string phoneNum, int type, out int verifycode, int newpassword = 0)
        {
            Random rad = new Random();
            int mobile_code = rad.Next(100000, 999999);
            mobile_code = newpassword == 0 ? mobile_code : newpassword;
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

                //打包发送内容

                string content = string.Format(contentTemplate, mobile_code);

                //string postStrTpl = "account={0}&password={1}&mobile={2}&content={3}";

                string postJsonTpl = "\"apikey\":\"{0}\",\"mobile\":\"{1}\",\"content\":\"{2}\"";
                string jsonBody = string.Format(postJsonTpl, appkey, phoneNum, HttpUtility.UrlEncode(content, Encoding.GetEncoding("GBK")));


                UTF8Encoding encoding = new UTF8Encoding();
                string postData = "{" + jsonBody + "}";   //encoding.GetBytes(string.Format(jsonBody, account, password, phoneNum, content));

                try
                {
                    string result = String.Empty;
                    HttpWebRequest request = (HttpWebRequest)WebRequest.Create(PostUrl);
                    request.Method = "POST";
                    request.ContentType = "application/json";
                    byte[] bytes = Encoding.GetEncoding("utf-8").GetBytes(postData);
                    //设置 Content-lengthHTTP 标头。
                    request.ContentLength = bytes.Length;

                    Stream os = request.GetRequestStream();

                    os.Write(bytes, 0, bytes.Length);
                    os.Close();

                    System.Net.WebResponse response = request.GetResponse();
                    if (response == null)
                        return false;

                    using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                    {
                        //从流的当前位置到末尾读取流。
                        var reslut = sr.ReadToEnd().Trim();

                        var rr = JsonHelper.JSONToObject<MwResult>(reslut);
                        if (rr.result.Equals(0))
                        {
                            return true;
                        }
                        else return false;
                    }
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



    }
}
