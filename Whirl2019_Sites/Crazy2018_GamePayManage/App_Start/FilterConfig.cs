using System.Web;
using System.Web.Mvc;

namespace Crazy2018_GamePayManage
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
