using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Pay
{
    public static class Notify
    {
        public static string GetResponseSign(ResponseBean bean, string compKey)
        {
            if (bean.p7_paychannelnum == null)
            {
                string p7_paychannelnum = "";
                string rawString = bean.p1_usercode + "&" + bean.p2_order + "&" + bean.p3_money + "&" + bean.p4_status + "&" + bean.p5_jtpayorder + "&" + bean.p6_paymethod + "&" + p7_paychannelnum + "&" + bean.p8_charset + "&" + bean.p9_signtype + "&" + compKey;
                return md5(rawString);
            }
            else
            {
                string rawString = bean.p1_usercode + "&" + bean.p2_order + "&" + bean.p3_money + "&" + bean.p4_status + "&" + bean.p5_jtpayorder + "&" + bean.p6_paymethod + "&" + bean.p7_paychannelnum + "&" + bean.p8_charset + "&" + bean.p9_signtype + "&" + compKey;
                return md5(rawString);
            }
        }
        public static string GetRequestSign(RequestBean bean, string compKey)
        {
            string rawString = bean.p1_usercode + "&" + bean.p2_order + "&" + bean.p3_money + "&" + bean.p4_returnurl +
                               "&" + bean.p5_notifyurl + "&" + bean.p6_ordertime + compKey;


            return md5(rawString);
        }
        ///using System.Security.Cryptography;
        ///using System.Text;
        /// <summary>
        /// MD5函数
        /// </summary>
        /// <param name="str">原始字符串</param>
        /// <returns>MD5结果</returns>
        public static string md5(string str)
        {
            string t = "";
            System.Security.Cryptography.MD5 md5 = MD5Cng.Create();//实例化一个md5对像
            // 加密后是一个字节类型的数组，这里要注意编码UTF8/Unicode等的选择　
            byte[] s = md5.ComputeHash(Encoding.UTF8.GetBytes(str));
            // 通过使用循环，将字节类型的数组转换为字符串，此字符串是常规字符格式化所得
            for (int i = 0; i < s.Length; i++)
            {
                // 将得到的字符串使用十六进制类型格式。格式后的字符是小写的字母，如果使用大写（X）则格式后的字符是大写字符 
                t = t + s[i].ToString("X").PadLeft(2, '0');
            }
            return t;
        }
    }
}
