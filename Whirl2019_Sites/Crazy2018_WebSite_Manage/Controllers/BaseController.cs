using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Manage.Controllers
{
    public class BaseController : Controller
    {

        protected  IManageService _manageService;
        public readonly RedisHelper redis;

        public BaseController(
            IManageService manageService
            )
        {
            _manageService = manageService;
            redis = new RedisHelper(2);
        }

        public dt_manager manager { get; set; }
        public string nav_name { get; set; }
        public string action_type { get; set; }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Session[DTKeys.SESSION_ADMIN_INFO] != null)
            {
                manager = Session[DTKeys.SESSION_ADMIN_INFO] as dt_manager;
            }
        }
        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            if (filterContext.HttpContext.Session[DTKeys.SESSION_ADMIN_INFO] != null)
            {
                manager = Session[DTKeys.SESSION_ADMIN_INFO] as dt_manager;
            }
            if (!string.IsNullOrEmpty(nav_name) || !string.IsNullOrEmpty(action_type))
            {
                var result = ChkAdminLevel(nav_name, action_type);
                if (!result)
                {
                    nav_name = string.Empty;
                    action_type = string.Empty;
                    string msgbox = "parent.jsdialog(\"错误提示\", \"您没有管理该页面的权限，请勿非法进入！\", \"back\")";
                    filterContext.HttpContext.Response.Write("<script type=\"text/javascript\">" + msgbox + "</script>");
                }
                else
                {
                   
                }
            }
        }
        public ActionResult AlertRedirect(string msg, string view, object model = null)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("alert('" + msg + "')");
            sb.Append("</script>");
            ViewBag.msg = sb.ToString();
            if (model != null)
                return RedirectToAction(view, model);
            return RedirectToAction(view);
        }
        public ActionResult PageJsAlert(string msg, string view,object model=null)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script type=\"text/javascript\">");
            sb.Append("alert('" + msg + "')");
            sb.Append("</script>");
            ViewBag.msg = sb.ToString();
            if (model!=null)
                return View(view, model);
            
            return View(view);
        }
        /// <summary>
        /// 检查管理员权限
        /// </summary>
        /// <param name="nav_name">菜单名称</param>
        /// <param name="action_type">操作类型</param>
        protected bool ChkAdminLevel(string nav_name, string action_type)
        {
            return _manageService.Exists(manager.role_id, nav_name, action_type);
            string msgbox = "parent.jsdialog(\"错误提示\", \"您没有管理该页面的权限，请勿非法进入！\", \"back\")";
            //HttpContext.Response.Write("<script type=\"text/javascript\">" + msgbox + "</script>");
            //HttpContext. Response.End();
        }
        protected override void OnException(ExceptionContext filterContext)
        {
            UrlHelper url = new UrlHelper(filterContext.RequestContext);
            //filterContext.Result = new RedirectResult(url.Action("Login", "Home"));
        }
    }
}