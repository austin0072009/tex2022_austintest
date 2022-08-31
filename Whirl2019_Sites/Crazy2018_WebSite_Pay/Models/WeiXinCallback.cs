using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Pay
{
    public class WeiXinCallback
    {
        public string amount { get; set; }
        public string uid { get; set; }
        public string orderno { get; set; }
    }
}