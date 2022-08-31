using Autofac;
using Autofac.Integration.Mvc;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_WebSite_GW.App_Start;
using FluentScheduler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Timers;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Crazy2018_WebSite_GW
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {

            DBInitializer.Initialize();
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            IocConfig.RegisterDependencies();
            JobManager.Initialize(new PlannedTask());
        }
        protected void Application_End()
        {
            Log.Info("记录网站关闭信息", "网站关闭");
        }
        public void Test()
        {
            Log.Info("定时器运行", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
        }
    }
}
