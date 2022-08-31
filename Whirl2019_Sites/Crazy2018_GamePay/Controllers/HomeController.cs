using Crazy2018_Sys_Common;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_GamePay.Controllers
{
    public class HomeController : BaseController
    {

        private readonly IRechargeChannelsService _messageRecharge;
        private readonly ItuserService _tuser;

        public HomeController(IRechargeChannelsService messageRecharge,ItuserService tuser)
        {
            _messageRecharge = messageRecharge;
            _tuser = tuser;
        }
        public ActionResult Index()
        {
            return View();
        }
        public HomeController() { }
     
    

        [HttpPost]
        public JsonResult GetRechargeData(DPagePara page)
        {
            var result = _messageRecharge.GetRechargeData(page);
            string pageUrl = Utils.CombUrlTxt("Index", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        [HttpPost]
        public JsonResult IsUserExist(string userinfo) {
            DataResults<EnumView> result = new DataResults<EnumView>();
         
            var isnumber= Regex.IsMatch(userinfo, @"^[-+]?\d+(\.\d+)?$");
            if (isnumber)
            {
                var user = _tuser.GetEntityByID(Convert.ToInt32(userinfo));
                if (user == null)
                {
                    result.Code = 0;
                    result.Message = "用户不存在！";
                    return Json(result);
                }
                else
                {
                    result.Code = 1;
                    result.userid =user.UserID.ToString();
                    result.Message = "用户:" + user.UserID + " - " + user.wechatName;
                    return Json(result);
                }
            }
            else {
                var user = _tuser.GetEntityByWhere(x => x.wechatName == userinfo);
                if (user == null)
                {
                    result.Code = 0;
                    result.Message = "用户不存在！";
                    return Json(result);
                }
                else
                {
                    result.Code = 1;
                    result.userid = user.UserID.ToString();
                    result.Message = "用户:" + user.UserID + " - " + user.wechatName;
                    return Json(result);
                }
            }
        

        }
    }
}