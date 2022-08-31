using Crazy2018_Pay;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Interface;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Pay.Controllers
{
	public class WeiXinController : Controller
	{
		private readonly IRechargeRecordService _rechargeService;
		public WeiXinController(IRechargeRecordService rechargeService)
		{
			_rechargeService = rechargeService;
		}
		WxHelper wxhelper = new WxHelper();
		public ActionResult Index(string code, string wxcallback)
		{
			//JObject info = wxhelper.GetAccess_token(code);
			//string access_token = info["access_token"].ToString();
			//string openid = info["openid"].ToString();
			//var wxCallBack = JsonHelper.JSONToObject<WeiXinCallback>(wxcallback);
			//var orderInfo = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(wxCallBack.orderno));
			//if (orderInfo == null)
			//	return Content("没有找到该订单");
			//wxhelper.openid = openid;
			//wxhelper.callBackUrl = WxPayConfig.NOTIFY_URL;
			//wxhelper.total_fee = Convert.ToInt32(wxCallBack.amount) * 100;
			//wxhelper.GetUnifiedOrderResult(wxCallBack.orderno);
			//var appwxJsApiParam = wxhelper.GetJsApiParameters();
			//WeiXinPayParam param = new WeiXinPayParam
			//{
			//	wxJsParam = appwxJsApiParam,
			//	UserId = int.Parse(wxCallBack.uid),
			//	oddNum = wxCallBack.orderno,
			//	total_fee = wxhelper.total_fee
			//};
			return Content("index");
		}
		public ActionResult MpCallBack(string uid, string amount, string orderno)
		{
			WeiXinCallback wxCallback = new WeiXinCallback { amount = amount, orderno = orderno, uid = uid };
			var path = Request.Url.Host + "?wxcallback=" + JsonHelper.ObjectToJSON(wxCallback);
			wxhelper.GetCode(path);
			return Content("ok");
		}
		/// <summary>
		/// 微信回调地址
		/// </summary>
		/// <returns></returns>
		public ActionResult NotifyCallBack()
		{
			try
			{
				ResultNotify resultNotify = new ResultNotify(HttpContext, _rechargeService);
				var result = resultNotify.ProcessNotify();
			}
			catch (Exception ex)
			{

				Log.Debug("充值出错", ex.Message);
			}
			return Content("success");
		}
		public ActionResult ReturnView(string err_msg)
		{
			if (err_msg.Equals("get_brand_wcpay_request:ok"))
			{
				return Content("success");
			}
			return Content("fail");
		}
		public ActionResult QRCodeView(string uid = "0", int amount = 0, string orderno = "")
		{
			string link = string.Format("http://t0t880.top/WeiXin/MpCallBack/?uid={0}&amount={1}&orderno={2}", uid, amount, orderno);
			var QRCodeUrl = StringHelper.CreateQRCode(link);
			ViewBag.QRCodeUrl = QRCodeUrl;
			ViewBag.amount = amount;
			ViewBag.orderno = orderno;
			return View();
		}

		public ActionResult H5Pay(string uid = "0", int amount = 0, string orderno = "")
		{
			//string link = string.Format("http://t0t880.top/WeiXin/MpCallBack/?uid={0}&amount={1}&orderno={2}", uid, amount, orderno);
			//var QRCodeUrl = StringHelper.CreateQRCode(link);
			//ViewBag.QRCodeUrl = QRCodeUrl;
			ViewBag.amount = amount;
			ViewBag.orderno = orderno;
	        
			var callBackUrl = "http://" + Request.Url.Host + "/WeiXin/NotifyCallBack";
			ViewBag.callBackUrl = callBackUrl;

			WxHelper wx = new WxHelper();
			wx.callBackUrl = callBackUrl;
			wx.total_fee = amount * 100;

			var result = wx.GetOrderResult(orderno, GetIP());

			if (result.GetValue("result_code").ToString() == "SUCCESS" && result.GetValue("return_code").ToString() == "SUCCESS")
			{
				ViewBag.mweb_url = result.GetValue("mweb_url").ToString();
				return View();
			}
			else
			{
				return Content("错误！");
			}
		}

		/// <summary>
		/// 获取IP
		/// </summary>
		/// <returns></returns>
		private string GetIP()
		{
			string ip = string.Empty;
			if (!string.IsNullOrEmpty(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_VIA"]))
				ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"]);
			if (string.IsNullOrEmpty(ip))
				ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]);
			return ip;
		}
	}
}