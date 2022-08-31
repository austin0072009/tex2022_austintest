using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class HttpPara
    {
        public string Referer { get; set; }
        public string Accept { get; set; }
        public string ContentType { get; set; }
        public string UserAgent { get; set; }
    }
    class HttpHelper
    {
        //响应状态码
        public int statuCode;

        public CookieContainer cookies = new CookieContainer();

        public string cookiesStr;



        public string GetHtml(string url, HttpPara httparas, Encoding encoding)
        {
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create(new Uri(url));
            req.Method = "GET";
            req.Referer = httparas.Referer;
            req.Accept = httparas.Accept;
            req.ContentType = httparas.ContentType;
            req.UserAgent = httparas.UserAgent;
            if (cookiesStr == null)
                req.CookieContainer = cookies;
            else
                req.Headers.Add("Cookie", cookiesStr);
            HttpWebResponse res;
            try
            {
                res = (HttpWebResponse)req.GetResponse();
            }
            catch (WebException ex)
            {
                res = (HttpWebResponse)ex.Response;
            }
            cookies.Add(res.Cookies);
            statuCode = (int)res.StatusCode;
            Stream stream = res.GetResponseStream();
            StreamReader reader = new StreamReader(stream, encoding);
            string result = reader.ReadToEnd();
            reader.Close();
            reader.Dispose();
            stream.Close();
            stream.Dispose();
            res.Close();
            req.Abort();
            return result;
        }


        public string PostHtml(string url, string postData, HttpPara httparas, Encoding encoding)
        {
            System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            byte[] bt = encoding.GetBytes(postData);
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create(new Uri(url));
            req.Method = "POST";
            req.Referer = httparas.Referer;
            req.Accept = httparas.Accept;
            req.ContentType = httparas.ContentType;
            req.UserAgent = httparas.UserAgent;
            Stream streamReq = req.GetRequestStream();
            streamReq.Write(bt, 0, bt.Length);
            streamReq.Close();
            HttpWebResponse res;
            try
            {
                res = (HttpWebResponse)req.GetResponse();
            }
            catch (WebException ex)
            {
                res = (HttpWebResponse)ex.Response;
            }
            if (res == null)
                return "";
            Stream streamRes = res.GetResponseStream();
            StreamReader reader = new StreamReader(streamRes, encoding);
            string result = reader.ReadToEnd();
            reader.Close();
            reader.Dispose();
            streamReq.Dispose();
            res.Close();
            req.Abort();
            return result;
        }
    }
}
