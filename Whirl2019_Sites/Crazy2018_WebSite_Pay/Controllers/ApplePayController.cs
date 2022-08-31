using Crazy2018_Pay;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Pay.Controllers
{
    public class ApplePayController : Controller
    {
        private readonly IRechargeRecordService _rechargeService;
        private readonly ICommoditService _commoditService;
        public ApplePayController(IRechargeRecordService rechargeService, ICommoditService commoditService)
        {
            _rechargeService = rechargeService;
            _commoditService = commoditService;
        }
        /// <summary>
        /// 苹果内购二次验证
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Validating(RechargeModel model)
        {
            DataResult result = new DataResult();
            try
            {
                JObject obj = JObject.Parse(model.jsonStr);
                var transactionID = obj["TransactionID"].ToString();
                var payload = obj["Payload"].ToString();
                var saveRecharge = SaveRecharge(model.comId, transactionID, model.uid.ToString(), model.rechargeType);
                if (saveRecharge)
                {
                    var ret = ApplePayValidating.Validating(payload, true);
                    if (ret)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(transactionID));
                        if (entity != null)
                            entity.IsHandel = true;
                        var chargeRet = WebToServer.Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                        if (chargeRet)
                            _rechargeService.UpdateEntity(entity);
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message ="票据验收不通过";
                    }
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;

            }
            return Json(result);
        }
        private bool SaveRecharge(int comid, string orderId, string userId, int rechargeType = 1)
        {
            try
            {
                var jsonstr = Request["jsonStr"].ToString();
                var comdata = _commoditService.GetCommodiyById(comid);
                if (comdata == null || comdata.Data == null)
                    return false;
                var entity = new RechargeRecordEntity
                {
                    Number = (decimal)comdata.Data.CommodityvValue,
                    UserId = int.Parse(userId),
                    RechargeType = rechargeType,
                    Remark = "充值金币",
                    GoldCount = (decimal)comdata.Data.ExchangeValue
                };
                entity.OrderNumber = orderId;
                var result = _rechargeService.AddEntity(entity);
                return result != null;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
    public class RechargeModel
    {
        public string jsonStr { get; set; }
        public int uid { get; set; }
        public int comId { get; set; }
        public int rechargeType { get; set; }

    }
}