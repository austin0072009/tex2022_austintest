using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Pay
{
    public class ApplePayValidating
    {
        /// <summary>
        /// 验证apple提供的票据是否合法
        /// </summary>
        /// <param name="apple_receipt">apple提供的票据</param>
        /// <param name="AP">订单编号</param>
        /// <param name="amount">金额</param>
        /// <param name="userId">用户Id</param>
        /// <param name="isSandbox">是否是沙盒测试</param>
        /// <returns></returns>
        public static bool Validating(string apple_receipt, bool isSandbox)
        {
            // 验证参数  
            if (apple_receipt.Length < 20)
            {
                return false;
            }
            string strJosn = string.Format("{{\"receipt-data\":\"{0}\"}}", apple_receipt);
            // 请求验证  
            string strResult = CreatePostHttpResponse(strJosn, isSandbox);
            JObject obj = JObject.Parse(strResult);//using Newtonsoft.Json.Linq;  
            // 判断是否购买成功  
            if (obj["status"].ToString() == "0")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        /// <summary>
        /// 创建一个post http请求
        /// </summary>
        /// <param name="datas"></param>
        /// <param name="isSandbox"></param>
        /// <returns></returns>
        public static string CreatePostHttpResponse(string datas, bool isSandbox = false)
        {
            //正式购买地址 沙盒购买地址  
            string url_buy = "https://buy.itunes.apple.com/verifyReceipt";
            string url_sandbox = "https://sandbox.itunes.apple.com/verifyReceipt";
            string url = isSandbox ? url_sandbox : url_buy;

            HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
            request.ProtocolVersion = HttpVersion.Version10;
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            byte[] data = Encoding.GetEncoding("UTF-8").GetBytes(datas.ToString());
            using (Stream stream = request.GetRequestStream())
            {
                stream.Write(data, 0, data.Length);
            }

            HttpWebResponse response = request.GetResponse() as HttpWebResponse;
            Stream responseStream = response.GetResponseStream();   //获取响应的字符串流  
            StreamReader sr = new StreamReader(responseStream); //创建一个stream读取流  
            var str = sr.ReadToEnd();
            sr.Close();
            responseStream.Close();
            return str.ToString();
        }
    }
}
