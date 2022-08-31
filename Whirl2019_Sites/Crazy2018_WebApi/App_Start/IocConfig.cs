using Autofac;
using System;
using System.Linq;
using System.Reflection;
using Autofac.Integration.WebApi;
using Crazy2018_Sys_Interface;
using System.Web.Http;
using System.Web.Compilation;
using Crazy2018_Sys_DBHelper;

namespace Crazy2018_WebApi
{
    public class IocConfig
    {
        public static void RegisterDependencies()
        {
            DBInitializer.Initialize();
            var builder = RegisterService();
            //builder.RegisterApiControllers(Assembly.GetExecutingAssembly());//注册api容器的实现
            //Type baseType = typeof(IDependency);
            ////// 获取所有相关类库的程序集
            //Assembly[] assemblies = System.AppDomain.CurrentDomain.GetAssemblies();

            //builder.RegisterAssemblyTypes(assemblies)
            //.Where(type => baseType.IsAssignableFrom(type) && !type.IsAbstract)
            //    .AsImplementedInterfaces().InstancePerLifetimeScope();
            #region autofac 第一种注册所有类
            ////ContainerBuilder builder = new ContainerBuilder();
            ////var fullName = System.AppDomain.CurrentDomain.GetAssemblies().Where(type=>baseType.IsAssignableFrom(type));
            ////builder.RegisterControllers(fullName);
            ////builder.RegisterAssemblyTypes(fullName)
            ////    .AsImplementedInterfaces();

            //var container = builder.Build();
            // container.BeginLifetimeScope();
            HttpConfiguration config = GlobalConfiguration.Configuration;
            config.DependencyResolver = new AutofacWebApiDependencyResolver(builder.Build());//注册api容器需要使用HttpConfiguration对象
            //DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            // builder.RegisterType<DbLog>().As<ILog>();
            #endregion
            #region AutoFac使用最多的还是单个注册。这种注册共有三种方式，其中最简单的就是用As方法，例如，ArrayList继承了IEnumerable接口，若将其注册到Autofac中，写法如下所示：
            //ContainerBuilder builder = new ContainerBuilder();
            //builder.RegisterType<ArrayList>().As<IEnumerable>();
            //// then
            //IContainer container = builder.Build();
            //ArrayList result = (ArrayList)container.Resolve<IEnumerable>(); 
            #endregion
            #region  准确获取想要的类型 多个类映射到同一种接口,根据字符串注册并解析相应的类
            //builder.RegisterType<ArrayList>().Named<IEnumerable>("array");
            //builder.RegisterType<SortedList>().Named<IEnumerable>("sort");
            //// then
            //IContainer container = builder.Build();
            //ArrayList result = (ArrayList)container.ResolveNamed<IEnumerable>("array");
            //SortedList result1 = (SortedList)container.ResolveNamed<IEnumerable>("sort"); 
            #endregion
            #region 第三种方式就产生了--Keyed方式，该方法可以接受任何类型作为参数
            //builder.RegisterType<ArrayList>().Keyed<IEnumerable>(ListType.Array);
            //builder.RegisterType<SortedList>().Keyed<IEnumerable>(ListType.Sort);
            //// then
            //IContainer container = builder.Build();
            //ArrayList result = (ArrayList)container.ResolveKeyed<IEnumerable>(ListType.Array);
            //SortedList result1 = (SortedList)container.ResolveKeyed<IEnumerable>(ListType.Sort); 
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
            builder.RegisterApiControllers(assemblys.ToArray());
            //自动注入
            builder.RegisterAssemblyTypes(assemblys.ToArray())
                   .Where(t => baseType.IsAssignableFrom(t) && t != baseType)
                   .AsImplementedInterfaces().InstancePerLifetimeScope();
            return builder;
        }
    }
}