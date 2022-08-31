using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WCrazy2018_WebSite_GW
{
    public class RegisterModel
    {
        /// <summary>
        /// 手机号
        /// </summary>
        public string Phone
        {
            get;
            set;
        }

        /// <summary>
        /// 验证码
        /// </summary>
        public string Verification
        {
            get;
            set;
        }

        /// <summary>
        /// 密码
        /// </summary>
        public string Password
        {
            get;
            set;
        }
        /// <summary>
        /// 推荐码
        /// </summary>
        public string recommend { get; set; }

    }
}