using Crazy2018_Pay;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Pay
{
    public class ResultNotify : NotifyWX
    {
        private readonly IRechargeRecordService _rechargeService;
        public ResultNotify(HttpContextBase httpcontent,IRechargeRecordService rechargeService
            ) : base(httpcontent)
        {
            _rechargeService = rechargeService;
        }
        public override string ProcessNotify()
        {
            WxPayData notifyData = GetNotifyData();
            //检查支付结果中transaction_id是否存在
            if (!notifyData.IsSet("transaction_id"))
            {
                //若transaction_id不存在，则立即返回结果给微信支付后台
                WxPayData res = new WxPayData();
                res.SetValue("return_code", "FAIL");
                res.SetValue("return_msg", "支付结果中微信订单号不存在");
                Log.Error(this.GetType().ToString(), "The Pay result is error : " + res.ToXml());
                httpContext.Response.Write(res.ToXml());
                httpContext.Response.End();
            }

            string transaction_id = notifyData.GetValue("transaction_id").ToString();

            //查询订单，判断订单真实性
            if (!QueryOrder(transaction_id))
            { //若订单查询失败，则立即返回结果给微信支付后台
                WxPayData res = new WxPayData();
                res.SetValue("return_code", "FAIL");
                res.SetValue("return_msg", "订单查询失败");
                Log.Error(this.GetType().ToString(), "Order query failure : " + res.ToXml());
                httpContext.Response.Write(res.ToXml());
                httpContext.Response.End();
                
            }
            //查询订单成功
            else
            {
                WxPayData res = new WxPayData();
                res.SetValue("return_code", "SUCCESS");
                res.SetValue("return_msg", "OK");
                Log.Info(this.GetType().ToString(), "order query success : " + res.ToXml());
                string out_trade_no = notifyData.GetValue("out_trade_no").ToString();
                httpContext.Response.Write(res.ToXml());
                httpContext.Response.End();
                Log.Debug("out_trade_no", out_trade_no);
                try
                {
                    var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(out_trade_no));
                    if (entity != null)
                        entity.IsHandel = true;
                    var chargeRet = WebToServer.Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                    if (chargeRet)
                        _rechargeService.UpdateEntity(entity);
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }
            return null;
        }
        //查询订单
        private bool QueryOrder(string transaction_id)
        {
            WxPayData req = new WxPayData();
            req.SetValue("transaction_id", transaction_id);
            WxPayData res = WxPayApi.OrderQuery(req);
            if (res.GetValue("return_code").ToString() == "SUCCESS" &&
                res.GetValue("result_code").ToString() == "SUCCESS")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}