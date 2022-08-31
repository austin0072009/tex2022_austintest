using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_GW
{
    public  class ConfigurationData
    {
        
        public static string payurl = ConfigurationManager.AppSettings["PayUrl"].ToString();
        public static string notifyUrl = ConfigurationManager.AppSettings["notifyUrl"].ToString();
        public static string loginName = ConfigurationManager.AppSettings["loginName"].ToString();

        public static string xmkey = ConfigurationManager.AppSettings["xmkey"].ToString();
        public static string mch_id = ConfigurationManager.AppSettings["mch_id"].ToString();
        public static string xmpayurl = ConfigurationManager.AppSettings["xmpayurl"].ToString();
        public static string xmnotifyUrl = ConfigurationManager.AppSettings["xmnotifyUrl"].ToString();

        public static string xmkey2 = ConfigurationManager.AppSettings["xmkey2"].ToString();
        public static string mch_id2 = ConfigurationManager.AppSettings["mch_id2"].ToString();
        public static string xmpayurl2 = ConfigurationManager.AppSettings["xmpayurl2"].ToString();
        public static string xmnotifyUrl2 = ConfigurationManager.AppSettings["xmnotifyUrl2"].ToString();


        public static string jsdpayurl = ConfigurationManager.AppSettings["jsdpayurl"].ToString();
        public static string jsdmchid = ConfigurationManager.AppSettings["merchant_no"].ToString();
        public static string jsdnotifyUrl = ConfigurationManager.AppSettings["jsdnotifyUrl"].ToString();
        public static string jsdkey = ConfigurationManager.AppSettings["jsdkey"].ToString();

        public static string jzpayurl = ConfigurationManager.AppSettings["jzpayurl"].ToString();
        public static string jzkey = ConfigurationManager.AppSettings["jzkey"].ToString();
        public static string jzmacId = ConfigurationManager.AppSettings["jzmacId"].ToString();
        public static string jznotifyUrl = ConfigurationManager.AppSettings["jznotifyUrl"].ToString();


        public static string jljpayurl = ConfigurationManager.AppSettings["jljpayurl"].ToString();
        public static string jljhkey = ConfigurationManager.AppSettings["jljhkey"].ToString();
        public static string jljhmacId = ConfigurationManager.AppSettings["jljhmacId"].ToString();
        public static string jljhnotifyUrl = ConfigurationManager.AppSettings["jljhnotifyUrl"].ToString();

        public static string hjPayurl = ConfigurationManager.AppSettings["hjPayurl"].ToString();//支付接口地址
        public static string hjAppId = ConfigurationManager.AppSettings["hjAppId"].ToString();//产品id
        public static string hjnotifyUrl = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//回调地址
        public static string hjmerchandid = ConfigurationManager.AppSettings["hjmerchandid"].ToString();//商户id

        public static string xxPayurl = ConfigurationManager.AppSettings["xxPayurl"].ToString();//支付接口地址
        public static string xxnotifyUrl = ConfigurationManager.AppSettings["xxnotifyUrl"].ToString();//回调地址
        public static string xxmerchandid = ConfigurationManager.AppSettings["xxmerchandid"].ToString();//商户id
        public static string xxskey = ConfigurationManager.AppSettings["xxskey"].ToString();//商户id

        public static string shtjurl = ConfigurationManager.AppSettings["shtjurl"].ToString();//支付接口地址
        public static string shnotifyUrl = ConfigurationManager.AppSettings["shnotifyUrl"].ToString();//服务返回地址
        public static string shurl = ConfigurationManager.AppSettings["shurl"].ToString();//页面跳转返回地址
        public static string shshid = ConfigurationManager.AppSettings["shshid"].ToString();//商户id
        public static string shMd5key = ConfigurationManager.AppSettings["shMd5key"].ToString();//商户key


        public static string gtjurl = ConfigurationManager.AppSettings["gtjurl"].ToString();//支付接口地址
        public static string gnotifyUrl = ConfigurationManager.AppSettings["gnotifyUrl"].ToString();//服务返回地址
        public static string gurl = ConfigurationManager.AppSettings["gurl"].ToString();//页面跳转返回地址
        public static string guserid = ConfigurationManager.AppSettings["guserid"].ToString();//商户id

        public static string vuetjurl = ConfigurationManager.AppSettings["vuetjurl"].ToString();//支付接口地址
        public static string vuenotifyUrl = ConfigurationManager.AppSettings["vuenotifyUrl"].ToString();//服务返回地址
        public static string vueurl = ConfigurationManager.AppSettings["vueurl"].ToString();//页面跳转返回地址
        public static string vueuserid = ConfigurationManager.AppSettings["vueuserid"].ToString();//商户id
        public static string vueMd5key = ConfigurationManager.AppSettings["vueMd5key"].ToString();//商户key


        //public static string hjdfbankCode = ConfigurationManager.AppSettings["hjdfbankCode"].ToString();//银行卡代码
        //public static string hjdfbankName = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//开户名称
        //public static string hjdfaccountType = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//账户类型
        //public static string hjdfaccountName = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//账户名
        //public static string hjdfaccountNo = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//账户号
        //public static string hjdfprovince = ConfigurationManager.AppSettings["hjnotifyUrl"].ToString();//开户所在省份
        //public static string hjdfcity = ConfigurationManager.AppSettings["hjdfcity"].ToString();//开户所在地址
        //public static string hjdfpayUrl = ConfigurationManager.AppSettings["hjdfpayUrl"].ToString();//代付支付接口地址




        public static string publickey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLP2+h6C+q1+35eYupyvXBx/gsZvAV/gLcUZbKQaKlZtGFeEs5CK0HbtCIm+LiuTwYWkjNRiCH22cXLI+pzGOm8xoOL+sivUjpmXV682GX5OqYxa1hlvkGfYMY/mGBouJe2YB/Typy9cWSsIB3o5mwL5oVMTWEaWN1HrWofzeThQIDAQAB";
        public static string privatekey = "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMs/b6HoL6rX7fl5i6nK9cHH+Cxm8BX+AtxRlspBoqVm0YV4SzkIrQdu0Iib4uK5PBhaSM1GIIfbZxcsj6nMY6bzGg4v6yK9SOmZdXrzYZfk6pjFrWGW+QZ9gxj+YYGi4l7ZgH9PKnL1xZKwgHejmbAvmhUxNYRpY3Uetah/N5OFAgMBAAECgYA2zweCiMN59brF4MIJ6qJ1PECvcJ7jv1j0IshgCG0c32o27OaUHcPTUk3H2QnJDBypkIc7W+Lf4Amf1TN0nZptaqsnJdOwkcDxpmTZV4lxKcCaRd+5qOU7btlojtLvtY3DXLTmeLI8MJ3jAdWft/Ls2ZUWRxOS2ZS/qcINqDojzQJBAPPIQlYM/wdqeCjdoM9p8jc9c7rDQKS3IKbvtqQzOHSbgGRwUkXD61GvWSggRIamWwgxggIYkvMDI9Pyl5sRi4cCQQDVbx4KlZsBaszwY/C7akKCPPSCfcjsmF7n36EZe2I/cxvIEzccImRt3fCld76vk52/TZODy/Tg83EjVj7vpyOTAkEAzm2qNoGkxtvSShB55oi5MSuZPvGtYI0tWg6sYth4ms0+aE5wbGEdd7r6zS6duENP3F1H0IyMirkC8qt+0zGFKwJAaBZVp0HIo0tLgNysdSngH5XMhKsFRuUUO66i6UNz6Y+gd9VvJehb4/y9tGSOeR/baYVSsI7R8LaocVxJOyTewwJBAJeJCHVQCAKniAHLXWWXz9wrqDT9b+gJ++JXvVuCBl1WHeNvHJj0gEvyHrXLQPYiqh/x9qGUgSxRNo8UeMbF5Ms=";
    }
}