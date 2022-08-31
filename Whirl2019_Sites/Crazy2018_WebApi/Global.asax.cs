using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Crazy2018_WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //RouteConfig.RegisterRoutes(RouteTable.Routes);
            GlobalConfiguration.Configure(WebApiConfig.Register);
            IocConfig.RegisterDependencies();


        }
        protected void Application_Error(Object sender, EventArgs e)
        {
       
        }
    }
}
