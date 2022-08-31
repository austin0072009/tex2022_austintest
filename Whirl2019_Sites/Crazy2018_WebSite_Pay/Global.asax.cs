using Crazy2018_Pay;
using Crazy2018_WebSite_Pay.App_Start;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Crazy2018_WebSite_Pay
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            IocConfig.RegisterDependencies();
            WxPayConfig.APPID = ConfigurationManager.AppSettings["APPID"].ToString();
            WxPayConfig.APPSECRET = ConfigurationManager.AppSettings["APPSECRET"].ToString();
            WxPayConfig.KEY = ConfigurationManager.AppSettings["KEY"].ToString();
            WxPayConfig.MCHID = ConfigurationManager.AppSettings["MCHID"].ToString();
        }
    }
}
