using System;
using System.Collections.Generic;
using System.Text;

namespace ETModel.Framework.Common
{
    public class HttpContext
    {
        public static IServiceProvider ServiceProvider;

        public Microsoft.AspNetCore.Http.HttpContext Current
        {
            get
            {
                object factory = ServiceProvider.GetService(typeof(Microsoft.AspNetCore.Http.IHttpContextAccessor));
                Microsoft.AspNetCore.Http.HttpContext context = ((Microsoft.AspNetCore.Http.HttpContextAccessor)factory).HttpContext;
                return context;
            }
        }

    }
}
