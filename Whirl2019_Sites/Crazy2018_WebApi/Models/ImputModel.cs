using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebApi
{
    public class ImputModel
    {

        public string filebate { get; set; }


        public int tablenum { get; set; }

        public int Account { get; set; }

        public int gid { get; set; } = 0;
    }

    public class ImputPage
    {
        public int pageindex { get; set; }

        public int pagesize { get; set; }

        public int userid { get; set; }

        public string datestring { get; set; }

    }


    public class InputReg
    {
        public string mobile { get; set; }

        public string smscode { get; set; }

        public string activecode { get; set; }

        public string password { get; set; }

        public int smstype { get; set; }

        public int UserId { get; set; }

        public string verifyCode { get; set; }
        
        public string phone { get; set; }
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