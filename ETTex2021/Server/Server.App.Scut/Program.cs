using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using ZyGames.Framework.Game.Runtime;
namespace Server.App.Scut
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var services = new ServiceCollection();
            //services.AddHttpContextAccessor();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMemoryCache();
            new ConsoleRuntimeHost().Start();


            Console.WriteLine("exited.");
        }
    }
}
