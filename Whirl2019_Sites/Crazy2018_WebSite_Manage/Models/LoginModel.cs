using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Manage
{
    public class LoginModel
    {
        public string userName { get; set; }
        public string passWord { get; set; }
        public string loginMsg { get; set; }
    }
    public class FileResult
    {
        public int status { get; set; }

        public string msg { get; set; }
        public string name { get; set; }
        public string path { get; set; }
        public string thumb { get; set; }

        public string size { get; set; }
        public string ext { get; set; }
    }

    public class H5Game
    {

        public int Code { get; set; }

        public string Message { get; set; }

        public dynamic Data { get; set; }
    }

    public class JDBmModel
    {
        public string status { get; set; }

        public dynamic data { get; set; }
        public string err_text { get; set; }


        public string path { get; set; }

        public string serialNo { get; set; }

        public decimal amount { get; set; }
    }
    /// <summary>
    /// 代付参数
    /// </summary>
    public class TakeNowModel
    {

        public int id { get; set; }
        public string OrderNum { get; set; }

        public decimal Amount { get; set; }

        public string accountName { get; set; }

        public string accountNo { get; set; }

        public string province { get; set; }

        public string city { get; set; }
    }
}