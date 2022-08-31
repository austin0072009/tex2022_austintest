using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Crazy2018_WebSite_GW
{
    public class BaseController : Controller
    {
        public static SnsUserInfo user;
        public BaseController()
        {
           
        }
        public ActionResult PageJsAlert(string msg, string view)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("alert('" + msg + "')");
            sb.Append("</script>");
            ViewBag.msg = sb.ToString();
            return View(view);
        }

        public ActionResult PageJsAlertByContent(string msg)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("alert('" + msg + "')");
            sb.Append("</script>");
            return Content(sb.ToString());
        }


        public ActionResult AlertRedirect(string msg, string view)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("alert('" + msg + "')");
            sb.Append("</script>");
            ViewBag.msg = sb.ToString();
            return Redirect(view);
        }
        public ActionResult PageAlert(string msg,string view)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("layer.msg('" + msg + "')");
            sb.Append("</script>");
            ViewBag.msg = sb.ToString();
            return View(view);
        }
    }
}