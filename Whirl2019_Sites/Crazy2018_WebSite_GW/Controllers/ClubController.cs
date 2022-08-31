using Crazy2018_Sys_Common;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_WebSite_GW.Controllers
{

 
    public class ClubController : BaseController
    {   
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();

       private readonly IRechargeChannelsService _recharge;
       
        private readonly IRechargeRecordService _rechargeService;
        private readonly IManageService _manageLogservice;
        public ClubController(
     
       IRechargeChannelsService recharge,
     
         IRechargeRecordService rechargeService,
         IManageService manageLogservice

         ) 
        {
            _recharge = recharge;
              _rechargeService = rechargeService;
            _manageLogservice = manageLogservice;
        }

        /// <summary>
        /// 我的俱乐部
        /// </summary>
        /// <returns></returns>
        public ActionResult ClubHome()
        {
            string uid = Request.QueryString["uid"];
            string cid = Request.QueryString["cid"];
            if (String.IsNullOrWhiteSpace(uid) || String.IsNullOrWhiteSpace(cid))
            {
                return View();
            }
            else {
                DataResult result = new DataResult();
                result.Message = "操作成功";

                cs_clubinfo _setrobot = new cs_clubinfo() { fn = "cs_clubinfo" };
                _setrobot.uid = Convert.ToInt32(uid);
                _setrobot.cid =Convert.ToInt32(cid);
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setrobot));
                string _content = Utils.HttpGet(_url + _data);
                sc_clubinfo _scsetcard = JsonHelper.JSONToObject<sc_clubinfo>(_content);
                if (_scsetcard._ret != 0)
                {
                    Log.Error("_scsetcard", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "发送失败";
                }
                else
                {
                    result.Code = (int)Status.Success;
                    result.Message = JsonHelper.ObjectToJSON(_scsetcard);
                }

            }

            return View();
        }

        
   
        /// <summary>
        /// 获取用户id和俱乐部id
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Getid()
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            string _content = Utils.HttpGet(_url);
            cs_clubinfo clubinfo = JsonHelper.JSONToObject<cs_clubinfo>(_content);
            if (clubinfo!= null)
            {
                result.Code = (int)Status.fail;
                result.Message = "发送失败";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(clubinfo);
            }
            return Json(result);
        }

        /// <summary>
        /// 获取俱乐部信息
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetClubinfo()
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            string _content = Utils.HttpGet(_url);
            sc_clubinfo clubinfo = JsonHelper.JSONToObject<sc_clubinfo>(_content);
            if (clubinfo != null)
            {
                result.Code = (int)Status.fail;
                result.Message = "发送失败";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(clubinfo);
            }
            return Json(result);
        }
    public ActionResult RechargeScore()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetPayData(DPagePara pagepara)
        {
            DataResults<RechargeChannel> result = _recharge.GetRechargeData(pagepara);

            string pageUrl = Utils.CombUrlTxt("RechargScore", "Keywords={0}&PageSize={2}&PageIndex={1}", pagepara.Keywords, "__id__", pagepara.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);

        }

        [HttpPost]
        public JsonResult GetPayMoneList(int id) {
            
            RechargeChannel result = _recharge.GetEntityByID(id);
            List<string> Paymones = result.minmoney.Split(',').ToList();
            return Json(Paymones);

        }
        
        /// <summary>
        /// 获取七天的支付记录
        /// </summary>
        /// <param name="uid"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetPayLog(int uid)
        {

            List<RechargeRecordEntity> logs = _rechargeService.GetUserNearlySevenDays(uid);
            return Json(logs);
        }
        /// <summary>
        /// 充值金币
        /// </summary>
        /// <param name="type"></param>
        /// <param name="action"></param>
        /// <param name="money"></param>
        /// <param name="uid"></param>
        /// <param name="remark"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DialogCharge(int type, float money, int uid)
        {

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                //admin和充值
               
                    if (type < 0 || uid < 0 || money <= 0)
                    {
                        Log.Error("充值钻石", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_charge_gm _setcard = new cs_charge_gm() { fn = "cs_charge_gm" };
                    _setcard.gameid = 4;
                    _setcard.userid = uid;// 1380162;      
                    _setcard.type = type;
                    _setcard.money = type > 2 ? money * 10 : money * 100;//砖石和金币
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(_url + _data);

                    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "充值失败";
                    }
                    else
                    {
                      
                        int rtype = 8;
                        var actionhtype = ActionEnum.Recharge;

                        if (type == 1)
                        {
                            rtype = (int)Rechargechannel.KEFU;
                            actionhtype = ActionEnum.Recharge;
                        }
                        if (type == 2)
                        {
                            rtype = (int)Rechargechannel.KEFU2;
                            actionhtype = ActionEnum.backRecharge;
                        }
                        var rre = new RechargeRecordEntity
                        {
                            Number = (decimal)money,
                            UserId = uid,
                            OrderNumber = StringHelper.GenerateId(),
                            RechargeType = rtype,
                            Remark = "VIP商城充值钻石",
                            GoldCount = (decimal)money * 10,
                            IsHandel = true,
                            orderState = 2,
                            businessOrderState = 2
                        };
                      _rechargeService.AddEntity(rre);
                        _manageLogservice.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "金额:" + money + ",用户:" + uid);
                    }
              
            }
            catch (Exception ex)
            {

                result.Code = (int)Status.fail;
                result.Message = "充值失败";
            }
            return Json(result);
        }

    }
}