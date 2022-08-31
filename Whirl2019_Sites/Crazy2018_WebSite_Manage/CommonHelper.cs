using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Manage
{
    public static class CommonHelper
    {
        public static string JscriptMsg(string msgtitle, string url, string callback = "")
        {
            string msbox = "parent.jsprint(\"" + msgtitle + "\", \"" + url + "\")";
            return msbox;

        }
        public static string AlertMsg(string msg)
        {
            string msbox = "parent.alert(\"" + msg + "\")";
            return msbox;

        }
        public static string jsDialog(string msg)
        {
            string msgbox = "parent.jsdialog(\"错误提示\", \""+ msg + "\", \"back\")";
            return msgbox;
        }
    }
}