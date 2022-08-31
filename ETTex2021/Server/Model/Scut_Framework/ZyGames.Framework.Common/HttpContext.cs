using Microsoft.AspNetCore.Http;

//https://blog.csdn.net/shujudeliu/article/details/86293167
namespace Common.NLog
{

    /// <summary>
    /// http上下文
    /// </summary>
    public static class HttpContextExtensions
    {
        private static IHttpContextAccessor _contextAccessor;

        /// <summary>
        /// 当前上下文
        /// </summary>
        public static Microsoft.AspNetCore.Http.HttpContext Current(this HttpContext content)
        {
            return _contextAccessor.HttpContext;
        }


        public static void Configure(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }
    }
}
