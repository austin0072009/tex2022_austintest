using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Pay
{
   public static class PayConfig
    {
        private static string p1_usercode = "";
        private static string compKey = "";
        private static string requestUrl = "";
        static PayConfig()
        {
            //====================请在下面的代码中配置您的基本信息=======================
            //商户编号ID，由公司分配
            p1_usercode = ConfigurationManager.AppSettings["p1_usercode"];
            //商户密钥，由数字和字母组成
            compKey = ConfigurationManager.AppSettings["compKey"];
            //支付地址
            requestUrl = ConfigurationManager.AppSettings["requestUrl"];
        }
        /// <summary>
        /// 商户编号ID，由公司分配
        /// </summary>
        public static string P1_usercode
        {
            get { return p1_usercode; }
            set { p1_usercode = value; }
        }

        /// <summary>
        /// 商户密钥，由数字和字母组成
        /// </summary>
        public static string CompKey
        {
            get { return compKey; }
            set { compKey = value; }
        }

        /// <summary>
        /// 商户支付地址
        /// </summary>
        public static string RequestUrl
        {
            get { return requestUrl; }
            set { requestUrl = value; }
        }
    }
}
