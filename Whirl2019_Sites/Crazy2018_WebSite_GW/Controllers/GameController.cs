using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_GW.Controllers
{
    public class GameController : BaseController
    {
        private readonly ISnsUserInfo _snsService;
        private readonly IGUserAgentService _guserAgentService;
        private readonly IProfitService _profitService;
        private readonly IUserRechargeLogService _rechargeLogService;
        private readonly IFeedBackService ifeedback;
        private readonly ISiteConfigSerivice _siteService;
        private readonly IGameUserService _gameUserService;
        private readonly INoticesEntityService _NoticesEntityService;

        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public GameController(ISnsUserInfo snsService,
            IGUserAgentService guserAgentService,
            IProfitService profitService,
            IUserRechargeLogService rechargeLogService,
           IFeedBackService _ifeedback, ISiteConfigSerivice sitecomfig,
           IGameUserService gameUserService,
           INoticesEntityService NoticesEntityService

            )
        {
            _snsService = snsService;
            _guserAgentService = guserAgentService;
            _profitService = profitService;
            _rechargeLogService = rechargeLogService;
            ifeedback = _ifeedback;
            _siteService = sitecomfig;
            _gameUserService = gameUserService;
            _NoticesEntityService = NoticesEntityService;
        }

        /// <summary>
        /// 检查用户名是否存在
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult CheckUserName(string userName)
        {
            return Json(_snsService.CheckUserName(userName));
        }
        /// <summary>
        /// 异步通知地址
        /// </summary>
        /// <returns></returns>
        public ActionResult NotifyCallBack()
        {
            try
            {
                var content = Request.Form["content"];
                Log.Debug("回调", content);
                if (content!=null)
                {

                }
            }
            catch (Exception ex)
            {
                Log.Debug("回调出错", ex.Message);
            }
            return Content("success");
        }

        /// <summary>
        /// app验证账号
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JsonResult CheckUserByNamePwd(string json)
        {
            DataResult result = new DataResult();
            try
            {
                //byte[] bytes = Convert.FromBase64String(json);

                //string code = Encoding.UTF8.GetString(bytes);
                //var entity = StringHelper.DecryptDES(code, "asdfghjk");
                ////var e = new KeyValue() { Key = "13730643043", Value = "12345678" };
                //var e = JsonHelper.JSONToObject<KeyValue>(entity);
                //var ck = _gameUserService.ChenkUser(e.Key, e.Value);
                
                result.Code = (int)Status.Success;
                result.Message = "";

                //if (ck.Equals(3))
                //{
                //    result.Code = (int)Status.Success;
                //    result.Message = "验证成功!";
                //}else if (ck.Equals(1))
                //{
                //    result.Code = (int)Status.fail;
                //    result.Message = "账号不存在!";
                //}
                //else if (ck.Equals(2))
                //{
                //    result.Code = (int)Status.fail;
                //    result.Message = "密码错误!";
                //}
                //else
                //{
                //    result.Code = (int)Status.fail;
                //    result.Message = "验证失败!";
                //}
            }
            catch (Exception)
            {
                result.Code = (int)Status.fail;
                result.Message = "验证失败!";
            }
            return Json(result,JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 注册游戏用户
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult RegisterGameUser(RegistModel model)
        {
            var agentId = Session["agentId"] as string;
            var result = _snsService.RegisterGameUser(model.userName, model.passWord, agentId);
            return Json(result);
        }
        /// <summary>
        /// 注册页面
        /// </summary>
        /// <param name="agentId"></param>
        /// <returns></returns>
        public ActionResult PublicizeRegistered(string agentId)
        {
            if (!string.IsNullOrEmpty(agentId))
                Session["agentId"] = agentId;
            return View();
        }
        /// <summary>
        /// 下载游戏页面
        /// </summary>
        /// <returns></returns>

        public ActionResult DownloadPage()
        {
            return View();
        }
        public ActionResult MyProxy(int userId = 0)
        {
            if (userId > 0)
                Session["userId"] = userId;
            return View();
        }
        /// <summary>
        /// 我的二维码界面
        /// </summary>
        /// <returns></returns>
        public ActionResult MyCode(int userId = 0)
        {
            if (userId > 0)
                Session["userId"] = userId;
            return View();
        }
        public ActionResult MyBrokerage(int userId = 0)
        {
            if (userId > 0)
                Session["userId"] = userId;
            return View();
        }
        ///// <summary>
        ///// 获取用户代理列表信息
        ///// </summary>
        ///// <param name="page"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public JsonResult GetUserAgentData(DPage page)
        //{
        //    var userId = Convert.ToInt32(Session["userId"]);
        //    var result = _guserAgentService.GetAgentData(userId, page);
        //    return Json(result);
        //}
        /// <summary>
        /// 获取用户代理信息
        /// </summary>
        /// <returns></returns>
        //[HttpPost]
        //public JsonResult GetUserAgentInfo()
        //{
        //    var userId = Convert.ToInt32(Session["userId"]);
        //    var result = _guserAgentService.GetUserAgentInfo(userId);
        //    if (result.Data != null && string.IsNullOrEmpty(result.Data.QRPath))
        //    {
        //        var entity = _guserAgentService.GetEntityByWhere(w => w.UserID == userId);
        //        var scheme = Request.Url.Scheme;
        //        var path = scheme + "://" + Request.Url.Host + ":" + Request.Url.Port;
        //        var url = path + "/Game/PublicizeRegistered?agentId=" + userId;
        //        var qrCodePath = path + StringHelper.CreateQRCode(url);
        //        entity.QRPath = qrCodePath;
        //        _guserAgentService.UpdateEntity(entity);
        //        result.Data.QRPath = qrCodePath;
        //    }
        //    return Json(result);
        //}
        /// <summary>
        /// 通过游戏ID获取用户的推荐二维码
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        //[HttpGet]
        //public JsonResult GetUserUrl(int userId)
        //{
        //    var scheme = Request.Url.Scheme;
        //    DataResult r1 = new DataResult();
        //    try
        //    {
        //        var result = _guserAgentService.GetUserAgentInfo(userId);
        //        if (result.Data != null && string.IsNullOrEmpty(result.Data.QRPath))
        //        {
        //            var entity = _guserAgentService.GetEntityByWhere(w => w.UserID == userId);
        //            var path = scheme + "://" + Request.Url.Host + ":" + Request.Url.Port;
        //            var url = path + "/Game/PublicizeRegistered?agentId=" + userId;
        //            var qrCodePath = path + StringHelper.CreateQRCode(url);
        //            entity.QRPath = qrCodePath;
        //            Log.Debug("path", path);
        //            Log.Debug("url", url);
        //            _guserAgentService.UpdateEntity(entity);
        //            result.Data.QRPath = qrCodePath;
        //            r1.Spare = qrCodePath;
        //        }
        //        r1.Spare = result.Data.QRPath;
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.Debug("qrcode", ex.Message);
        //        r1.Code = (int)Status.fail;
        //    }
        //    return Json(r1, JsonRequestBehavior.AllowGet);
        //}
        //public ActionResult UserExtension(int userId)
        //{
        //    var scheme = Request.Url.Scheme;
        //    DataResult r1 = new DataResult();
        //    try
        //    {
        //        var result = _guserAgentService.GetUserAgentInfo(userId);
        //        if (result.Data != null && string.IsNullOrEmpty(result.Data.HtmlPath))
        //        {
        //            var entity = _guserAgentService.GetEntityByWhere(w => w.UserID == userId);
        //            var path = scheme + "://" + Request.Url.Host + ":" + Request.Url.Port;
        //            var url = path + "/Game/PublicizeRegistered?agentId=" + userId;
        //            var qrCodePath = path + StringHelper.CreateQRCode(url, true);
        //            entity.HtmlUrl = qrCodePath;
        //            _guserAgentService.UpdateEntity(entity);
        //            result.Data.QRPath = qrCodePath;
        //            r1.Spare = qrCodePath;
        //        }
        //        else {
        //            r1.Spare = result.Data.HtmlPath;
        //        }
                
        //    }
        //    catch (Exception ex)
        //    {
        //        r1.Code = (int)Status.fail;
        //        Log.Error("生成推广图片",ex.Message);
        //    }
        //    ViewBag.htmlpath = r1.Spare;
        //    return View();
        //}
        //public JsonResult GetUserExtensionUrl(int userId)
        //{
        //    var scheme = Request.Url.Scheme;
        //    DataResult r1 = new DataResult();
        //    try
        //    {
        //        var result = _guserAgentService.GetUserAgentInfo(userId);
        //        if (result.Data != null && string.IsNullOrEmpty(result.Data.HtmlPath))
        //        {
        //            var entity = _guserAgentService.GetEntityByWhere(w => w.UserID == userId);
        //            var path = scheme + "://" + Request.Url.Host + ":" + Request.Url.Port;
        //            var url = path + "/Game/PublicizeRegistered?agentId=" + userId;
        //            var qrCodePath = path + StringHelper.CreateQRCode(url, true);
        //            entity.HtmlUrl = qrCodePath;
        //            _guserAgentService.UpdateEntity(entity);
        //            result.Data.QRPath = qrCodePath;
        //            r1.Spare = qrCodePath;
        //        }
        //        else

        //            r1.Spare = result.Data.HtmlPath;
        //    }
        //    catch (Exception ex)
        //    {
        //        r1.Code = (int)Status.fail;
        //    }
        //    return Json(r1, JsonRequestBehavior.AllowGet);
        //}
        /// <summary>
        /// 领取奖励
        /// </summary>
        /// <param name="amount"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ReceiveProfit(decimal amount, int userId = 0)
        {
            userId = userId == 0 ? Convert.ToInt32(Session["userId"]) : userId;
            var result = _profitService.ReceiveProfit(userId, amount);
            if (result.Code == (int)Status.Success)
            {
                try
                {
                    cs_charge_gm takenow = new cs_charge_gm
                    {
                        fn = "cs_charge_gm",
                        money = (float)amount,
                        gameid = 4,
                        userid = userId,
                        type = 1
                    };
                    string data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(takenow));
                    string _content = HttpService.HttpGet(serviceUrl + data);
                    sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "游戏服务器扣除金币失败";
                        result.Data.State = -2;
                    }
                    else
                    {

                        tuserrechargelog chargeLog = new tuserrechargelog();
                        chargeLog.cointype = 0;
                        chargeLog.createtime = DateTime.Now;
                        chargeLog.fromtype = 1;
                        chargeLog.fromadminid = 0;
                        chargeLog.fromuserid = 0;
                        chargeLog.money = amount;
                        chargeLog.remarks = "代理收益领取";
                        chargeLog.oldmoney = 0;
                        chargeLog.userid = userId;
                        var entity = _rechargeLogService.AddEntity(chargeLog);
                    }
                }
                catch (Exception ex)
                {
                    result.Code = (int)Status.fail;
                    result.Message = ex.Message;
                    result.Data.State = -2;
                }
                _profitService.UpdateEntity(result.Data);
            }
            return Json(result);

        }
        /// <summary>
        /// 官网获取用户代理信息数据
        /// </summary>
        /// <param name="page"></param>
        /// <param name="sTime"></param>
        /// <param name="eTime"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        //[HttpPost]
        //public JsonResult GetUserAgentManageData(DPage page, string sTime = "", string eTime = "", int userId = 0)
        //{
        //    userId = userId == 0 ? user.UserId : userId;
        //    var result = _guserAgentService.AgentManage(sTime, eTime, userId, page);
            
        //    return Json(result);
        //}

        public ActionResult Feedback()
        {
            return View();
        }
        public ActionResult uploadFile(HttpPostedFileBase postedFile)
        {
           
            HttpFileCollectionBase files = Request.Files;
            HttpPostedFileBase _file = Request.Files["inputfile"];
            UpLoad file = new UpLoad(_siteService.loadConfig());
            var resultfile = file.fileSaveAs(postedFile, false, false);
            var fileresult = JsonConvert.DeserializeObject<Models.FileResult>(resultfile);
            if (fileresult.status==1)
            {
                return Content(fileresult.path);
            }
            return Content("");
        }
       [HttpPost]
        public ActionResult SubmitFeedback(tfeedback entity, HttpPostedFileBase _inputfile)
        {
            if (string.IsNullOrEmpty(entity.content)) entity.content = "";
            if (Utils.IsSafeSqlString(entity.content))
            {
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var resultfile = file.fileSaveAs(_inputfile, false, false);
                var fileresult = JsonConvert.DeserializeObject<Models.FileResult>(resultfile);
                entity.fileurl = fileresult.path;
                
                        entity.CreateDate = DateTime.Now;
                        ifeedback.AddEntity(entity);
                        return PageJsAlert("提交成功！", "Feedback");
                    
            }
            else
            {
                return PageJsAlert("表单含有危险字符！", "Feedback");
            }
        }
        #region API





        #endregion


        /// <summary>
        /// 公告福利
        /// </summary>
        /// <returns></returns>
        public ActionResult NoticeList()
        {
            return View();
        }

        public ActionResult NoticeContent()
        {
            return View();
        }
        public ActionResult NoticeMTTContent()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetNoticeInfo(int typeid) {
         
            var result = _NoticesEntityService.GetNoticesEntityInfo(typeid);
            

            return Json(result);
        }

        //NoticeContent
        public ActionResult NoticeWin()
        {
            return View();
        }
        public ActionResult NoticeRecruit()
        {
            return View();
        }

        public ActionResult Extension1()
        {
            return View();
        }
        public ActionResult Extension2()
        {
            return View();
        }
        public ActionResult Extension3()
        {
            return View();
        }
    }
}