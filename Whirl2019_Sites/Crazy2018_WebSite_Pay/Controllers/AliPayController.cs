using Crazy2018_Pay;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Pay.Controllers
{
    public class AliPayController : Controller
    {
        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private readonly IRechargeRecordService _rechargeService;
        private readonly IGameUserService _gameUserService;

        public AliPayController(IRechargeRecordService rechargeService, IGameUserService gameUserService)
        {
            _rechargeService = rechargeService; _gameUserService = gameUserService;
        }


        // GET: AliPay
        public ActionResult ApplyPay(string uid = "0", int amount = 0,string orderno="")
        {
            var orderInfo = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(orderno));
            if (orderInfo == null)
                return Content("没有找到该订单");
                string BaseUrl = GetBaseUrl();
                RequestBean requestBean = new RequestBean();
                requestBean.p1_usercode = PayConfig.P1_usercode; //商户号;
                requestBean.p2_order = orderno;
                requestBean.p3_money = amount.ToString();
                //requestBean.p4_returnurl = BaseUrl + "/AliPay/ReturnCallBack";
                //requestBean.p5_notifyurl = BaseUrl + "/AliPay/NotifyCallBack";
                requestBean.p4_returnurl = "http://www.rootquankeji.top/AliPay/CallBack";
                requestBean.p5_notifyurl = "http://www.rootquankeji.top/AliPay/NotifyCallBack";
                requestBean.p6_ordertime = DateTime.Now.ToString("yyyyMMddHHmmss");
                requestBean.p7_sign = "";
                requestBean.p8_signtype = "1";//MD5
                requestBean.p9_paymethod = 4;
                requestBean.p10_paychannelnum = "";
                requestBean.p14_customname = uid;
                requestBean.p17_customip = GetIP();
                requestBean.p18_product = "游戏充值";
                requestBean.p11_cardtype = "";
                requestBean.p13_orderfailertime = "";
                requestBean.p21_pdesc = "";
                requestBean.p22_version = "";
                requestBean.p23_charset = "";
                requestBean.p24_remark = "";
                //p9_paymethod.Equals("5"))//如果为卡类支付需要设置卡号和卡密
                //卡号
                requestBean.p19_productcat = "";
                //卡密
                requestBean.p20_productnum = "";
                if (ISIOS())
                {
                    requestBean.p25_terminal = "2";
                    requestBean.p26_iswappay = "3";
                }
                else
                {
                    requestBean.p25_terminal = "3";
                    requestBean.p26_iswappay = "3";  //2、内嵌 3、弹出
                }
                requestBean.p25_terminal = "2";
                requestBean.p26_iswappay = "3";
                requestBean.p7_sign = Notify.GetRequestSign(requestBean, PayConfig.CompKey);
                return View(requestBean);

        }
        private string GetBaseUrl()
        {
            return Request.Url.AbsoluteUri.Substring(0, Request.Url.AbsoluteUri.IndexOf(Request.RawUrl));
        }
        private string GetIP()
        {
            string result = String.Empty;

            result = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(result))
            {
                result = Request.ServerVariables["REMOTE_ADDR"];
            }
            if (string.IsNullOrEmpty(result))
            {
                result = Request.UserHostAddress;
            }
            if (string.IsNullOrEmpty(result) || result == "::1")
            {
                return "127.0.0.1";
            }
            return result.Replace(".", "_");
        }
        /// <summary> 
        /// 根据 Agent 判断是否是ISO
        /// </summary> 
        /// <returns></returns> 
        private bool ISIOS()
        {
            bool flag = false;
            string agent = Request.UserAgent;
            string[] keywords = { "iPhone", "iPod", "iPad", "Macintosh" };
            foreach (string item in keywords)
            {
                if (agent.Contains(item))
                {
                    flag = true;
                    break;
                }
            }
            return flag;
        }
        /// <summary>
        /// 异步通知地址
        /// </summary>
        /// <returns></returns>
        public ActionResult NotifyCallBack()
        {
            try
            {
                ResponseBean responseBean = new ResponseBean(Request);
                var sign = Notify.GetResponseSign(responseBean, PayConfig.CompKey);
                if (responseBean.p4_status == "1" && sign.Equals(responseBean.p10_sign))
                {
                    var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(responseBean.p2_order));
                    if (entity != null)
                        entity.IsHandel = true;
                    var chargeRet = WebToServer.Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                    if (chargeRet)
                        _rechargeService.UpdateEntity(entity);
                };
            }
            catch (Exception ex)
            {
                Log.Debug("充值出错", ex.Message);
            }
            return Content("success");
        }
        /// <summary>
        /// 同步通知地址
        /// </summary>
        /// <returns></returns>
        public ActionResult CallBack()
        {
            ResponseBean responseBean = new ResponseBean(Request);
            var sign = Notify.GetResponseSign(responseBean, PayConfig.CompKey);
            if (responseBean.p4_status == "1" && sign.Equals(responseBean.p10_sign))
            {

            }
            return Content("success");
        }
    }
}