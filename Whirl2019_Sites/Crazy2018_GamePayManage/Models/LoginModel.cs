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
}