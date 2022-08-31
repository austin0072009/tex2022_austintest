using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;

namespace Crazy2018_WxApi
{
    /// <summary>
    /// 企业号微信支付接口
    /// </summary>
    public static class TenPay
    {
        /// <summary>
        /// 用于企业向微信用户个人发红包
        /// 目前支持向指定微信用户的openid个人发红包
        /// </summary>
        /// <param name="certPassword">apiclient_cert.p12证书密码即商户号</param>
        /// <param name="data">微信支付需要post的xml数据</param>
        /// <param name="certPath">apiclient_cert.p12的证书物理位置(例如：App_Data\cer\商户平台API证书</param>
        /// <param name="timeOut"></param>
        /// <returns></returns>
        public static string Sendredpack(string data, string certPassword, string certPath, int timeOut, int judge)
        {
            var urlFormat = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";
            if (judge == 1) urlFormat = "https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers";

            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(CheckValidationResult);
            X509Certificate2 cer = new X509Certificate2(certPath, certPassword, X509KeyStorageFlags.PersistKeySet | X509KeyStorageFlags.MachineKeySet);

            var formDataBytes = data == null ? new byte[0] : Encoding.UTF8.GetBytes(data);
            MemoryStream ms = new MemoryStream();
            ms.Write(formDataBytes, 0, formDataBytes.Length);
            ms.Seek(0, SeekOrigin.Begin);//设置指针读取位置

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlFormat);
            request.ClientCertificates.Add(cer);
            request.Method = "POST";
            request.Timeout = timeOut;

            request.UserAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36";

            #region 输入二进制流
            if (ms != null)
            {
                ms.Position = 0;
                //直接写入流
                Stream requestStream = request.GetRequestStream();
                byte[] buffer = new byte[1024];
                int bytesRead = 0;
                while ((bytesRead = ms.Read(buffer, 0, buffer.Length)) != 0)
                {
                    requestStream.Write(buffer, 0, bytesRead);
                }
                ms.Close();//关闭文件访问
            }
            #endregion

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            using (Stream responseStream = response.GetResponseStream())
            {
                using (StreamReader myStreamReader = new StreamReader(responseStream, Encoding.GetEncoding("utf-8")))
                {
                    string retString = myStreamReader.ReadToEnd();
                    return retString;
                }
            }
        }
        private static bool CheckValidationResult(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors errors)
        {
            if (errors == SslPolicyErrors.None) return true;
            return false;
        }

    }
}