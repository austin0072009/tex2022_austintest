using Autofac;
using Autofac.Integration.Mvc;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Compilation;
using System.Web.Mvc;

namespace Crazy2018_WebSite_GW.App_Start
{
    public class IocConfig
    {
        public static void RegisterDependencies()
        {
            DBInitializer.Initialize();
            var builder = RegisterService();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(builder.Build()));
            #region autofac 第一种注册所有类
            //ContainerBuilder builder = new ContainerBuilder();
            //var fullName = System.AppDomain.CurrentDomain.GetAssemblies().Where(type=>baseType.IsAssignableFrom(type));
            //builder.RegisterControllers(fullName);
            //builder.RegisterAssemblyTypes(fullName)
            //    .AsImplementedInterfaces();

            //var container = builder.Build();
            //DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            // builder.RegisterType<DbLog>().As<ILog>();
            #endregion
        }
        /// <summary>
        /// 注入实现
        /// </summary>
        /// <returns></returns>
        private static ContainerBuilder RegisterService()
        {
            var builder = new ContainerBuilder();

            var baseType = typeof(IDependency);

            //扫描IService和Service相关的程序集

            var assemblys = BuildManager.GetReferencedAssemblies().Cast<Assembly>().ToList();
            builder.RegisterControllers(assemblys.ToArray());
            //自动注入
            builder.RegisterAssemblyTypes(assemblys.ToArray())
                   .Where(t => baseType.IsAssignableFrom(t) && t != baseType)
                   .AsImplementedInterfaces().InstancePerLifetimeScope();
            return builder;
        }
    }
}