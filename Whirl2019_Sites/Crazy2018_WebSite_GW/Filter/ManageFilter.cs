using Crazy2018_Sys_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_GW
{
    public class ManageFilter : ActionFilterAttribute
    {
        public int userid { get; set; }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var userInfo = filterContext.Controller.ControllerContext.HttpContext.Session["userInfo"];
            if (HttpContext.Current.Session["userInfo"] == null)
            {
                filterContext.Result = new RedirectResult("/Manage/login");
            }

        }
    }
}