using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Manage
{
    public class LoginFilterAttribute: ActionFilterAttribute
    {
        public bool IsCheck { get; set; }
        /// <summary>  
        /// 在  Action方法之前 调用  
        /// </summary>  
        /// <param name="filterContext"></param>  
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            if (IsCheck)
            {
                if (filterContext.HttpContext.Session[DTKeys.SESSION_ADMIN_INFO] == null)
                {
                    filterContext.HttpContext.Response.Redirect("/Home/Login/");
                }
            }

        }


    }
}