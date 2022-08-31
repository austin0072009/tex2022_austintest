using Crazy2018_GamePayManage.App_Start;
using Crazy2018_Sys_Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Crazy2018_GamePayManage
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            IocConfig.RegisterDependencies();
        }
        protected void Application_Error(Object sender, EventArgs e)
        {
            Exception lastError = Server.GetLastError();
            Log.Debug("Application_Error", lastError.ToString());

            //Response.Redirect("/Home/Error");
        }
    }
}
