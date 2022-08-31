using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Pay
{
    public class WeiXinPayParam
    {
        public string wxJsParam { get; set; }
        public int UserId { get; set; }
        public int total_fee { get; set; }
        public string oddNum { get; set; }
    }
}