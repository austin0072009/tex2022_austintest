using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.GameCore;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck = true)]
    public class GameCoreController : BaseController
    {
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();


        private readonly IEmailService _emailService;
        private readonly IShopManageService _shopService;
        private readonly ITakeNowRecordService _takeService;
        private readonly IStatisticsGoldService _statisticsGoldService;
        private readonly IGameService _gameService;
        private readonly IRoomService _roomService;
        private readonly IFeedBackService _feedBackService;
        private readonly ITakeNowRecordService _TakeNowRecordService;
        private readonly IActiveCodeService _activeService;
        private readonly IInitialagencyInfoService _initAgencyService;
        private readonly IBankCardService _bankCardService;
        private readonly IRoomListService _RoomListService;
        private readonly ITurnTablePrizeService _turnTablePrizeService;
        private readonly ITuserPrizeLogService _tuserPrizeLogService;
        private readonly ITaxlogService taxlog;
        private readonly IGoldChangeLogService goldto;
        private readonly ITableUserlogService tablelog;
        private readonly IEntityCardService entitycard;
        private readonly ISiteConfigSerivice _siteService;
        private readonly IRechargeChannelService _rechargechannel;
        private readonly ISysConfigService sysconfig;
        private readonly IWhirlUserAgentService _WhirlUserAgent;
        private readonly ITtablehandnumlog _ttablehandnumlog;
        private readonly IGameUserService _gameuserservice;
        //private readonly ITGameUserRank _tgameuserrank;
        private readonly IVisualTableService _visualtableservice;
        private readonly IManageService manageLogservice;
        private readonly IRechargeRecordService _RechargeRecordService;
        private readonly IGoldChangeh5gameService _goldh5game;
        private readonly IRechargeChannelsService _rechChannels;
        private readonly ITUsergamehand _usergamehand;
        private readonly RedisHelper redis;
        private readonly ITContactService _contactserver;
        private readonly IH5winloseLogService _H5winLogService;




        public GameCoreController(
            IEmailService emailService,
            IManageService manageService,
            IShopManageService shopService,
            ITakeNowRecordService takeService,
            IStatisticsGoldService statisticsGoldService,
            IGameService gameService,
            IRoomService roomService,
            IFeedBackService feedBackService,
            ITakeNowRecordService TakeNowRecordService,
            IActiveCodeService activeService,
            IInitialagencyInfoService initAgencyService,
            IBankCardService bankCardService,
            ITurnTablePrizeService turnTablePrizeService,
            ITuserPrizeLogService tuserPrizeLogService,
            IRoomListService RoomListService,
            ITaxlogService _taxlog,
            IGoldChangeLogService _goldto,
            ITableUserlogService _tablelog,
            IEntityCardService _entitycard,
            ISiteConfigSerivice siteService,
            IRechargeChannelService rechargechannel,
            ISysConfigService _sysconfig,
            IWhirlUserAgentService WhirlUserAgent,
            ITtablehandnumlog ttablehandnumlog,
            IGameUserService gameuserservice,
            //ITGameUserRank tgameuserrank,
            IVisualTableService visualtable,
            IManageService _manageLogservice,
            IRechargeRecordService RechargeRecordService,
            IGoldChangeh5gameService goldh5game,
            IRechargeChannelsService rechChannels,
            ITUsergamehand usergamehand,
            ITContactService contactserver,
            IH5winloseLogService H5winLogService




            ) : base(manageService)
        {
            _emailService = emailService;
            _shopService = shopService;
            _takeService = takeService;
            _statisticsGoldService = statisticsGoldService;
            _gameService = gameService;
            _roomService = roomService;
            _feedBackService = feedBackService;
            _TakeNowRecordService = TakeNowRecordService;
            _activeService = activeService;
            _initAgencyService = initAgencyService;
            _bankCardService = bankCardService;
            _turnTablePrizeService = turnTablePrizeService;
            _tuserPrizeLogService = tuserPrizeLogService;
            _RoomListService = RoomListService;
            taxlog = _taxlog; goldto = _goldto;
            tablelog = _tablelog;
            entitycard = _entitycard;
            _siteService = siteService;
            _rechargechannel = rechargechannel;
            sysconfig = _sysconfig;
            _WhirlUserAgent = WhirlUserAgent;
            _ttablehandnumlog = ttablehandnumlog;
            _gameuserservice = gameuserservice;
            //_tgameuserrank = tgameuserrank;
            _visualtableservice = visualtable;
            _manageLogservice = manageLogservice;
            _RechargeRecordService = RechargeRecordService;
            _goldh5game = goldh5game;
            _rechChannels = rechChannels;
            _usergamehand = usergamehand;
            redis = new RedisHelper(2);
            _contactserver = contactserver;
            _H5winLogService = H5winLogService; 

        }
        /// <summary>
        /// 总代应得的保险分成
        /// </summary>
        /// <returns></returns>
        public ActionResult BigAgentJackpot(DPagePara page)
        {

            var data = _feedBackService.GetBigAgentInsuranceData(page);

            string pageUrl = Utils.CombUrlTxt("BigAgentJackpot", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        public JsonResult BranchBigagent()
        {
            DataResult reslut = new DataResult();
            var userID = Request.Form["userid"];
            if (string.IsNullOrEmpty(userID) || userID == "0")
            {
                reslut.Code = (int)Status.fail;
                reslut.Message = "用户ID异常！";
                return Json(reslut);
            }
            var userId = _feedBackService.UpdateJackpotlog(int.Parse(userID));
            return Json(userId);
        }

        /// <summary>
        /// 系统配置
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public ActionResult SysConfig(DPagePara page)
        {
            var test = ConfigurationData.taxrate;
            var data = sysconfig.GeSysConfig(page);

            string pageUrl = Utils.CombUrlTxt("SysConfig", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }

        public JsonResult SysConfigDel(string ids)
        {

            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "SysConfig", "parent.loadMenuTree"));
            var result = sysconfig.UserConfigDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "SysConfig", "parent.loadMenuTree"));
        }

        public JsonResult SubmitSysConfig()
        {
            var key = Request.Form["Key"].ToString();
            var value = Request.Form["Val"].ToString();
            int id = int.Parse(Request.Form["Id"]);
            tsysconfig entity = new tsysconfig()
            {
                Id = id,
                Key = key,
                Val = value,
                Dec = Request.Form["Dec"].ToString()
            };


            var reslut = sysconfig.SubmitSysConfigEntity(entity);
            if (reslut)
            {
                if (id>0)
                {
                    cs_syskeyvalue sendconfig = new cs_syskeyvalue() { fn = "cs_syskeyvalue" };
                    sendconfig.key = key;
                    sendconfig.value = value;
                    sendconfig.Des = entity.Dec;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sendconfig));
                    string _content = Utils.HttpGet(_url + _data);
                    //Crazy2018_Sys_Entity.sc_base_gm _scsetcard = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_base_gm>(_content);
                }
                if (key.Equals("CustomerUrl"))  redis.SetStringKey("CustomerUrl", value);//客服地址缓存
                
                return Json(new { success = true, msg = "操作成功!" });
            }
            else
            {
                return Json(new { success = false, msg = "操作失败!" });
            }
        }


        public ActionResult InsurancePool(DPagePara page)
        {
            var data = goldto.GetUserInsurancePoolLog(page);
            if (data.isExport == 1)
                return File(data.filebyte, "application/vnd.ms-excel", "ExportData.xls");

            string pageUrl = Utils.CombUrlTxt("InsurancePool", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }



        #region 实体卡管理
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult CardGenerate()
        {
            return View();
        }
        public JsonResult GetCardType()
        {
            return Json(entitycard.GetCardType());
        }
        public ActionResult CardIndex()
        {

            return View();
        }
        /// <summary>
        /// 会员卡管理
        /// </summary>
        /// <returns></returns>
        public ActionResult CardManage()
        {

            return View();
        }
        /// <summary>
        /// 实体卡详情
        /// </summary>
        /// <returns></returns>
        public ActionResult CardDetailsManage()
        {
            return View();
        }
        /// <summary>
        /// 实体卡类型
        /// </summary>
        /// <returns></returns>
        public ActionResult CardtypeManage()
        {

            return View();
        }
        public JsonResult GetCardtypelist(DPagePara page)
        {
            var data = entitycard.GetCardTypeList(page);

            string pageUrl = Utils.CombUrlTxt("CardtypeManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return Json(data);
        }
        public JsonResult SubmitCardTypEntity(int Id, string Name, decimal GoldPrice, int CardNum, decimal CardPrice)
        {
            TEntityCardType entity = new TEntityCardType();
            entity.Name = Name;
            entity.GoldPrice = GoldPrice;
            entity.CardPrice = CardPrice;
            entity.CardNum = CardNum;
            entity.ID = Id;
            var result = entitycard.SubmitCardTypEntity(entity);
            if (result) return Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet);
            else return Json(new { msg = "添加成功！", success = false }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult CardTypeDel(string ids)
        {

            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "GetCardtypelist", "parent.loadMenuTree"));
            var result = entitycard.CardTypeDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "GetCardtypelist", "parent.loadMenuTree"));
        }
        #endregion
        public ActionResult ActivityManage(DPage page)
        {
            var data = _emailService.GetGameActivityList(page);

            string pageUrl = Utils.CombUrlTxt("ActivityManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        [HttpPost]
        public JsonResult ActivityEnable(int id, int type)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.GameActivitys.Find(id);
                if (C != null)
                {
                    C.IsEnble = type == 1 ? true : false;
                    db.SaveChanges();
                    return Json(new { success = true, msg = "操作成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = "活动不存在!" });
                }
            }
        }
        [HttpPost]
        public ActionResult SubmitActivityManage(GameActivity entity, HttpPostedFileBase _PicUrl, HttpPostedFileBase _TPicUrl)
        {
            if (entity.StartTime > entity.EndTime)
            {
                return AlertRedirect("开始时间必须小于结束时间!", "ActivityManage");
            }
            else
            {
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var resultfile = file.fileSaveAs(_PicUrl, false, false);
                var fileresult = JsonConvert.DeserializeObject<FileResult>(resultfile);
                entity.PicUrl = fileresult.path;
                //标题图片
                var Tresultfile = file.fileSaveAs(_TPicUrl, false, false);
                var Tfileresult = JsonConvert.DeserializeObject<FileResult>(Tresultfile);
                entity.TitleUrl = Tfileresult.path;

                _emailService.SubmitGameActivity(entity);
                return AlertRedirect("提交成功!", "ActivityManage");
            }
        }

        public ActionResult ActivityUsers()
        {

            return View();
        }
        /// <summary>
        /// 获取游戏用户
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetActityUser(int gameid)
        {

            var result = _emailService.GetActityUserInfo(gameid);
            return Json(result);
        }

        /// <summary>
        /// 保存活动可见用户
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="users"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveActityUser(string gameid, string users, string Type, string gType, string WebUrl)
        {

            using (DBContextHelper db = new DBContextHelper())
            {
                if ((Convert.ToInt32(gameid) != 0))
                {
                    var actity = db.GameActivitys.Where(x => x.ID.ToString() == gameid).FirstOrDefault();
                    actity.UserIds = users;
                    actity.Type = Convert.ToInt32(Type);
                    actity.gType = Convert.ToInt32(gType);
                    actity.WebUrl = WebUrl;
                    db.GameActivitys.Add(actity);
                    db.SaveChanges();


                }
                return Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet);

            }
        }

        public ActionResult EmailTransferStatistic(DPagePara page)
        {

            var data = _emailService.GetEmailGiveGoldStatistic(page);

            return View(data);
        }
        public ActionResult RechargeChannels()
        {
            var cdata = _emailService.GetRechargeChannel();
            return View(cdata);
        }
        public ActionResult RechargeServiceList()
        {

            return View();
        }

        [HttpPost]
        public JsonResult GetRechServiceListDataById(int id)
        {
            var result = _rechChannels.GetRechargeByid(id);
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetRechServiceListDatainfoById(int id,int serid)
        {
            var result = _rechChannels.GetRechargeByid(id);
            for (int i = 0; i < result.Count; i++)
            {
                if (i==serid)
                {
                    return Json(result[i]);
                }
            }//GetRechServiceListrevise
            return Json(result);
        }
        [HttpPost]
        public void GetRechServiceListAdd(RechargeServiceListView data, HttpPostedFileBase _reurl,string reid)
        {
          
           
            try
            {
             //   Uri url = new Uri(Request.Url.ToString());
               // string reid = HttpUtility.ParseQueryString(url.Query).Get("id");
                var rechlist = _rechChannels.GetRechargeByid(Convert.ToInt32(reid));

                string servliststr = "";
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var Tresultfile = file.fileKFHeadSaveAs(_reurl, false, false);
                var Tfileresult = JsonConvert.DeserializeObject<FileResult>(Tresultfile);

                data.url = Tfileresult.path;

                rechlist.Add(data);
                servliststr = JsonHelper.ObjectToJSON(rechlist);
                var rech = _rechChannels.GetEntityByID(Convert.ToInt32(reid));
                rech.serviceList = servliststr;
                _rechChannels.UpdateEntity(rech);
                redis.DeleteStringKey("RechargeChannels");
            }
            catch (Exception)
            {
                //return   Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet); 
                Response.Write("<script>alert('操作失败');window.location.href = '/GameCore/RechargeServiceList?id="+ reid + "';</script>;");
            }

            //return   Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet); 
            Response.Write("<script>alert('操作成功');window.location.href = '/GameCore/RechargeServiceList?id="+ reid + "';</script>;");
        }

        [HttpPost]
        public void GetRechServiceListrevise(RechargeServiceListView data, HttpPostedFileBase _reurl, string rreid,string reviseid)
        {

           
            try
            {
                //   Uri url = new Uri(Request.Url.ToString());
                // string reid = HttpUtility.ParseQueryString(url.Query).Get("id");
                var rechlist = _rechChannels.GetRechargeByid(Convert.ToInt32(rreid));

                string servliststr = "";
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var Tresultfile = file.fileKFHeadSaveAs(_reurl, false, false);
                var Tfileresult = JsonConvert.DeserializeObject<FileResult>(Tresultfile);

               // data.url = Tfileresult.path;

                for (int i = 0; i < rechlist.Count; i++)
                {
                    if (i.ToString()==reviseid)
                    {
                        rechlist[i].qq = data.qq;
                        rechlist[i].phone = data.phone;
                        rechlist[i].weixin = data.weixin;
                        if (rechlist[i].url == data.url)
                        {
                            rechlist[i].url = data.url;
                        }
                        else { 
                        rechlist[i].url = Tfileresult.path;

                        }

                        rechlist[i].ylurl = data.ylurl;
                        rechlist[i].isOffice = data.isOffice;
                        rechlist[i].isBank = data.isBank;
                        rechlist[i].isWeixin = data.isWeixin;
                        rechlist[i].isZhifubao = data.isZhifubao;
                        rechlist[i].isopen = data.isopen;
                        rechlist[i].isGF = data.isGF;
                        rechlist[i].desc = data.desc;
                    }
                }
                servliststr = JsonHelper.ObjectToJSON(rechlist);
                var rech = _rechChannels.GetEntityByID(Convert.ToInt32(rreid));
                rech.serviceList = servliststr;
                _rechChannels.UpdateEntity(rech);
                redis.DeleteStringKey("RechargeChannels");
            }
            catch (Exception)
            {
                //return   Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet); 
                Response.Write("<script>alert('操作失败');window.location.href = '/GameCore/RechargeServiceList?id=" + rreid + "';</script>;");
            }

            //return   Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet); 
            Response.Write("<script>alert('操作成功');window.location.href = '/GameCore/RechargeServiceList?id=" + rreid + "';</script>;");
        }

        public ActionResult GetRechServiceListDel(string Ids, int reid)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            result.Code = 1;
            string servliststr = "";
            try
            {
                var rechlist = _rechChannels.GetRechargeByid(reid);
                string[] idss = Ids.Split(',');
                int num = 0;
                foreach (string item in idss)
                {


                    int tid = 0;

                    rechlist.RemoveAt(Convert.ToInt32(item) - num);
                    num++;

                }
                servliststr = JsonHelper.ObjectToJSON(rechlist);
                var rech = _rechChannels.GetEntityByID(reid);
                rech.serviceList = servliststr;
                _rechChannels.UpdateEntity(rech);
                redis.DeleteStringKey("RechargeChannels");
            }
            catch (Exception)
            {
                result.Message = "操作失败";
                result.Code = 2;
                throw;
            }

            return Json(CommonHelper.JscriptMsg(result.Message, "RechargeServiceList", "parent.loadMenuTree"));
        }




        public ActionResult GetChargeLogExportData(DPagePara page)
        {

            var result = entitycard.GetCardData(page);
            if (result.isExport == 1 && result.TotalCount != 0)
                return File(result.filebyte, "application/vnd.ms-excel", "ExCardData.xls");
            else return Content("无数据导出！");
        }


        ///// <summary>
        ///// 获取机器人状态
        ///// </summary>
        ///// <param name="ids"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public JsonResult GetCardUser(int cardid, string cardnumber, string cardpwd)
        //{
        //    DataResult result = new DataResult();
        //    result.Message = "操作成功";

        //    cs_card_user _setuser = new cs_card_user() { fn = "cs_card_user" };
        //    _setuser.CardId = cardid;
        //    _setuser.CardNumber = cardnumber;
        //    _setuser.CardPwd = cardpwd;
        //    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setuser));
        //    string _content = Utils.HttpGet(_url + _data);
        //    sc_gmcash _scsetuser = JsonHelper.JSONToObject<sc_gmcash>(_content);
        //    if (_scsetuser._ret != 0)
        //    {
        //        Log.Error("_scsetcard", _scsetuser._info);
        //        result.Code = (int)Status.fail;
        //        result.Message = "发送失败";
        //    }
        //    else
        //    {
        //        result.Code = (int)Status.Success;
        //        result.Message = JsonHelper.ObjectToJSON(_scsetuser.userId);
        //    }
        //    return Json(result);
        //}

        /// <summary>
        /// 获取点卡列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetEntityCardData(DPagePara page)
        {
            var result = entitycard.GetCardList(page);
            string pageUrl = Utils.CombUrlTxt("CardDetailsManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        /// <summary>
        /// 获取点卡列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCardGroup(DPagePara page)
        {
            var result = entitycard.GetCardGroup(page);
            string pageUrl = Utils.CombUrlTxt("CardManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        /// <summary>
        /// 修改点卡
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateCardData(int cardid, int cardtype, string cardname, decimal cardprice, decimal goldrice, int IsUse, DateTime ExpirationTime)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    var objcard = entitycard.GetEntityByWhere(st => st.ID == cardid);
                    if (objcard != null)
                    {
                        cs_entitycard _setcard = new cs_entitycard() { fn = "cs_entitycard" };
                        objcard.ID = cardid;
                        objcard.AddName = cardname;
                        objcard.CardPrice = cardprice;
                        objcard.GoldPrice = goldrice;
                        objcard.IsUse = IsUse;
                        objcard.CardType = cardtype;
                        objcard.ExpirationTime = ExpirationTime;


                        DbSet<TEntityCard> dbSet = db.Set<TEntityCard>();
                        DbEntityEntry<TEntityCard> entry = db.Entry<TEntityCard>(objcard);
                        if (entry.State == EntityState.Detached)
                        {
                            dbSet.Attach(objcard);
                            entry.State = EntityState.Modified;
                        }
                        db.SaveChanges();
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                        string _content = Utils.HttpGet(_url + _data);
                        Crazy2018_Sys_Entity.sc_base_gm _scsetcard = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_base_gm>(_content);
                        if (_scsetcard._ret != 0)
                        {
                            Log.Error("修改点卡信息", _scsetcard._info);
                            result.Code = (int)Status.fail;
                            result.Message = "修改失败";
                        }
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "该点卡不存在";
                    }

                }


            }
            catch (Exception ex)
            {
                Log.Error("修改点卡信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "修改失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult RechargeCard(int UserId, int CardNum, string CardPwd)
        {
            var type = 1;
            //查找用户  查找编码 对比密码  
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                Expression<Func<TEntityCard, bool>> fun = w => w != null;
                using (DBContextHelper db = new DBContextHelper())
                {
                    fun = fun.And(w => w.ExpirationTime > DateTime.Now).And(w => w.IsUse == 0).And(w => w.CardNum == CardNum).And(x => x.PassWord == CardPwd);
                    var objcard = entitycard.GetEntityByWhere(fun);
                    var user = _gameuserservice.GetEntityByID(UserId);
                    if (objcard != null)
                    {
                        if (user != null)
                        {

                            cs_charge_gm _setcard = new cs_charge_gm() { fn = "cs_charge_gm" };
                            _setcard.gameid = 4;
                            _setcard.userid = UserId;
                            _setcard.type = 1;
                            _setcard.money = (float)objcard.GoldPrice;
                            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                            string _content = Utils.HttpGet(_url + _data);

                            Log.Error("HttpGet", _content);
                            Crazy2018_Sys_Entity.sc_charge_gm _scsetcard = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_charge_gm>(_content);
                            if (_scsetcard._ret != 0)
                            {
                                Log.Error("充值金币", _scsetcard._info);
                                result.Code = (int)Status.fail;
                                result.Message = _scsetcard._info;
                            }
                            else
                            {
                                objcard.IsUse = 1;
                                DbSet<TEntityCard> dbSet = db.Set<TEntityCard>();
                                DbEntityEntry<TEntityCard> entry = db.Entry<TEntityCard>(objcard);
                                if (entry.State == EntityState.Detached)
                                {
                                    dbSet.Attach(objcard);
                                    entry.State = EntityState.Modified;
                                }
                                db.SaveChanges();

                                //int rtype = 8;
                                //var actionhtype = ActionEnum.Recharge;
                                //if (type == 1)
                                //{
                                //    rtype = (int)Rechargechannel.KEFU;
                                //    actionhtype = ActionEnum.Recharge;
                                //}
                                //if (type == 2)
                                //{
                                //    rtype = (int)Rechargechannel.KEFU2;
                                //    actionhtype = ActionEnum.backRecharge;
                                //}
                                //var rre = new RechargeRecordEntity
                                //{
                                //    Number = objcard.GoldPrice,
                                //    UserId = UserId,
                                //    OrderNumber = StringHelper.GenerateId(),
                                //    RechargeType = rtype,
                                //    Remark = "人工充值金币",
                                //    GoldCount = objcard.GoldPrice,
                                //    IsHandel = true
                                //};
                                //_RechargeRecordService.AddEntity(rre);
                                //manageLogservice.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                                //        OptAction.RechargeGold.ToDescription() + "卡：" + CardNum + "金额:" + objcard.CardPrice + ",用户:" + UserId);
                            }
                        }
                        else
                        {
                            result.Code = (int)Status.fail;
                            result.Message = "用户不存在！";
                        }
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "实体卡不存在！";
                    }
                }
            }
            catch (Exception ex)
            {

                Log.Error("实体卡充值", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
            }

            return Json(result);
        }



        /// <summary>
        /// 删除点卡
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteEntityCard(string ids)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                if (string.IsNullOrEmpty(ids))
                    return Json(CommonHelper.JscriptMsg("请选中您要操作的点卡！", "CardDetailsManage", "parent.loadMenuTree"));
                var result = entitycard.CardDel(ids);
                return Json(CommonHelper.JscriptMsg(result.Message, "CardDetailsManage", "parent.loadMenuTree"));
            }

        }

        public ActionResult AddCard(string CardName, int CardType, DateTime ExpirationTime)//decimal CardPrice, decimal GoldPrice, int Addnum,
        {
            List<TEntityCard> listcard = new List<TEntityCard>();
            DataResult result = new DataResult();
            if (manager.role_id.Equals(1))
            {

                TEntityCardType cardtype = entitycard.GetCardType().Where(x => x.ID == CardType).Single();
                if (cardtype != null)
                {

                    for (int i = 0; i < cardtype.CardNum; i++)//根据实体卡类型中的Cardnum 生成相对应的实体卡 每张卡的随机编码都相同
                    {
                        int number = Int32.Parse(GetCardNumber(9));
                        string pwd = GetCardNumber(10);
                        TEntityCard tcard = new TEntityCard();
                        tcard.AddName = CardName;
                        tcard.CardType = CardType;
                        tcard.CardNum = number;
                        tcard.CardPrice = cardtype.CardPrice;
                        tcard.GoldPrice = cardtype.GoldPrice;
                        tcard.CreateTime = DateTime.Now;
                        tcard.IsUse = 0;//0 未使用 1 已使用
                        tcard.ExpirationTime = ExpirationTime; //new DateTime().AddMonths(3 - ((DateTime.Now.Month - 1) % 3));//有效期三个月
                        tcard.PassWord = pwd;
                        result = entitycard.AddCard(tcard);
                        listcard.Add(tcard);
                        //var result = entitycard.GetCardData(page);
                        //if (result.isExport == 1 && result.TotalCount != 0)
                        //    return File(result.filebyte, "application/vnd.ms-excel", "ExCardData.xls");
                        //else return Content("无数据导出！");
                    }

                    if (result.Code == (int)Status.Success)
                    {

                        return Json(new { success = true, msg = "点卡增加成功！", name = CardName, type = CardType });


                    }
                    else
                    {
                        return Json(new { success = false, msg = result.Message });
                    }
                }
                else
                {
                    return Json(new { success = false, msg = "实体卡类型不存在！" });
                }
            }
            else
            {
                return Json(new { success = false, msg = "您没有权限!" });
            }
        }
        public static string GetCardNumber(int length)
        {
            int[] randMembers = new int[length];
            int[] validateNums = new int[length];
            string validateNumberStr = "";
            //生成起始序列值
            int seekSeek = unchecked((int)DateTime.Now.Ticks);
            Random seekRand = new Random(seekSeek);
            int beginSeek = (int)seekRand.Next(0, Int32.MaxValue - length * 10000);
            int[] seeks = new int[length];
            for (int i = 0; i < length; i++)
            {
                beginSeek += 10000;
                seeks[i] = beginSeek;
            }
            //生成随机数字
            for (int i = 0; i < length; i++)
            {
                Random rand = new Random(seeks[i]);
                int pownum = 1 * (int)Math.Pow(2, length);
                randMembers[i] = rand.Next(pownum, Int32.MaxValue);
            }
            //抽取随机数字
            for (int i = 0; i < length; i++)
            {
                string numStr = randMembers[i].ToString();
                int numLength = numStr.Length;
                Random rand = new Random();
                int numPosition = rand.Next(0, numLength - 1);
                validateNums[i] = Int32.Parse(numStr.Substring(numPosition, 1));
            }
            //生成验证码
            for (int i = 0; i < length; i++)
            {
                validateNumberStr += validateNums[i].ToString();
            }
            return validateNumberStr;
        }
        public static string GenerateMix(int CodeLength)
        {
            int number;
            StringBuilder result = new StringBuilder();

            System.Random random = new Random();

            for (int i = 0; i < CodeLength; i++)
            {
                number = random.Next();

                if (number % 2 == 0)
                    result.Append(((char)('0' + (char)(number % 10))).ToString());
                else
                    result.Append(((char)('A' + (char)(number % 26))).ToString());

            }
            return result.ToString();
        }




        #region 视讯管理

        public ActionResult VisualTables()
        {
            var data = _visualtableservice.GetVisualTableList();
            return View(data);
        }

        /// <summary>
        /// 获取视讯列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetVideoData(DPage page)
        {
            var result = _visualtableservice.GetVisualTableList(page);
            result.RoleId = manager.role_id.Value;
            string pageUrl = Utils.CombUrlTxt("VisualTables", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取单条视讯信息
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetVisualById(int Id)
        {
            var result = _visualtableservice.GetVisualById(Id);
            return Json(result);
        }

        /// <summary>
        /// 改变视讯状态
        /// </summary>
        /// <param name="id"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult CloseState(int id, int type)
        {
            cs_rechargechannels_gm send = new cs_rechargechannels_gm() { fn = "cs_setrechargechannel" };
            string str = "启用成功!";
            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.VisualTables.Find(id);
                if (C != null)
                {
                    C.state = type == 0 ? false : true;
                    if (!C.state)
                    {
                        str = "已关闭";
                    }
                    db.SaveChanges();
                    return Json(new { success = true, msg = str });
                }
                else
                {
                    return Json(new { success = false, msg = "该视讯不存在!" });
                }
            }
        }

        /// <summary>
        /// 删除一条 视讯数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteVisual(int id)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.VisualTables.Find(id);
                if (C != null)
                {

                    db.VisualTables.Remove(C);
                    db.SaveChanges();
                    return Json(new { success = true, msg = "删除成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = "该视讯不存在!" });
                }
            }
        }

        /// <summary>
        /// 新增视讯
        /// </summary>
        /// <param name="Mannumber">桌号</param>
        /// <param name="Videourl1">地址1</param>
        /// <param name="Videourl2">地址2</param>
        /// <param name="Videourl3">地址3</param>
        /// <param name="State">是否启用 1=启用 0=关闭</param>
        /// <returns></returns>
        [HttpPost]
        public DataResult AddVideo(int Mannumber, string Videourl1, string Videourl2, string Videourl3, int State, string gameid)
        {

            DataResult adddata = new DataResult();
            VisualTable visual = new VisualTable()
            {
                gameid = gameid,
                manNum = Mannumber,
                vurl1 = Videourl1,
                vurl2 = Videourl2,
                vurl3 = Videourl3,
                state = State == 0 ? false : true,
                CreatTime = DateTime.Now,
            };
            var addvideo = _visualtableservice.AddEntity(visual);

            if (addvideo == null)
            {
                adddata.Code = (int)Status.fail;
                adddata.Message = "保存失败";
            }

            return adddata;

        }
        /// <summary>
        /// 修改视讯信息
        /// </summary>
        /// <param name="Id">要修改的视讯id</param>
        /// <param name="manNum">桌号</param>
        /// <param name="vurl1">地址1</param>
        /// <param name="vurl2">地址2</param>
        /// <param name="vurl3">地址3</param>
        /// <param name="state">是否启用 1=启用 0=关闭</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdataVisualInfo(int Id, int manNum, string vurl1, string vurl2, string vurl3, int state, string gamdid)
        {
            DataResult adddata = new DataResult();
            adddata.Message = "修改成功";
            adddata.Code = (int)Status.Success;
            VisualTable visual = _visualtableservice.GetVisualById(Id);
            visual.gameid = gamdid;
            visual.manNum = manNum;
            visual.vurl1 = vurl1;
            visual.vurl2 = vurl2;
            visual.vurl3 = vurl3;
            visual.state = state == 0 ? false : true;


            var addvideo = _visualtableservice.UpdateEntity(visual);

            if (addvideo == null)
            {
                adddata.Code = (int)Status.fail;
                adddata.Message = "修改失败";
            }

            string str = ConfigurationManager.AppSettings["domainName"];
            HttpService.GetHttp(str + "/api/Game/UpdateCache?tablenum=", manNum.ToString());
            return Json(adddata);
        }

        /// <summary>
        /// 删除多条视讯数据
        /// </summary>
        /// <param name="ids">id集合</param>
        /// <returns></returns>
        public JsonResult ReVisualTDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的数据！", "SetRangingList", "parent.loadMenuTree"));
            var result = _visualtableservice.DelVisualTables(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "SetRangingList", "parent.loadMenuTree"));
        }
        #endregion


        /// <summary>
        /// 通道启用 或关闭
        /// </summary>
        /// <param name="id"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ChannelsEnable(int id, int type)
        {
            cs_rechargechannels_gm send = new cs_rechargechannels_gm() { fn = "cs_setrechargechannel" };
            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.RechargeChannels.Find(id);
                if (C != null)
                {
                    C.isenable = type == 1 ? true : false;
                    db.SaveChanges();
                    redis.DeleteStringKey("RechargeChannels");
                    return Json(new { success = true, msg = "启用成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = "通道不存在!" });
                }
            }
        }

        [HttpPost]
        public JsonResult RechargeEdit(int id, string moneylist)
        {

            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.RechargeChannels.Find(id);
                if (C != null)
                {
                    C.minmoney = moneylist;
                    db.SaveChanges();
                    redis.DeleteStringKey("RechargeChannels");
                    return Json(new { success = true, msg = "修改成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = "修改失败!" });
                }
            }
        }

        [HttpPost]
        public JsonResult RechargeDiscountEdit(int id, int disval)
        {

            using (DBContextHelper db = new DBContextHelper())
            {
                var C = db.RechargeChannels.Find(id);
                if (C != null)
                {
                    C.Discount = disval;
                    db.SaveChanges();
                    redis.DeleteStringKey("RechargeChannels");
                    return Json(new { success = true, msg = "修改成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = "修改失败!" });
                }
            }
        }


        [HttpPost]
        public JsonResult ActivityDel(string ids)
        {

            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "ActivityManage", "parent.loadMenuTree"));
            var result = _emailService.GameActivityDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "ActivityManage", "parent.loadMenuTree"));
        }


        [HttpPost]
        public JsonResult RechargeCDel(string ids)
        {
            nav_name = "news_notice";
            action_type = DTEnums.ActionEnum.Delete.ToString();
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "VisualTables", "parent.loadMenuTree"));
            var result = _visualtableservice.DelVisualTables(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "VisualTables", "parent.loadMenuTree"));
        }


        /// <summary>
        /// 用户金币分布
        /// </summary>
        /// <returns></returns>
        public ActionResult UserGoldDistribution()
        {
            // var test = _TakeNowRecordService.GetEntityByID(12);
            return View();
        }
        public JsonResult GetUserGoldDisMapJson()
        {
            return Json(_gameService.GetUserGoldDisMap());
        }
        /// <summary>
        /// 用户汇总
        /// </summary>
        /// <returns></returns>
        public ActionResult UserSummary()
        {
            return View();
        }
        public JsonResult GetSysUserSummary()
        {
            var cdata = tablelog.GetUserSummary();
            //CacheHelper.Insert("GetSysUserSummary", cdata);
            return Json(cdata);
        }

        public JsonResult UserReceivejackpotLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "UserReceivePrize", "parent.loadMenuTree"));
            var result = goldto.UserReceivejackpotLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "UserReceivePrize", "parent.loadMenuTree"));
        }

        public ActionResult GangCardStatistics2(DPagePara page)
        {

            var data = tablelog.GetUserTableLogSameIpLnglat(page);

            string pageUrl = Utils.CombUrlTxt("GangCardStatistics2", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);

        }


        public ActionResult GangCardStatistics(DPagePara page)
        {
            var data = tablelog.GetUserTableLogSameIp(page);

            string pageUrl = Utils.CombUrlTxt("GangCardStatistics", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.One.PageSize, data.One.PageIndex, data.One.TotalCount, pageUrl, 8, true);
            data.One.InnerHtml = InnerHtml;
            return View(data);
        }


        public ActionResult UserReceivePrize(DPagePara page)
        {
            var data = goldto.GetUserReceivejackpotLog(page);
            if (data.isExport == 1)
                return File(data.filebyte, "application/vnd.ms-excel", "ExportData.xls");

            string pageUrl = Utils.CombUrlTxt("UserReceivePrize", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        /// <summary>
        /// 奖池统计
        /// </summary>
        /// <returns></returns>
        public ActionResult JackpotStatistics()
        {


            return View();
        }
        /// <summary>
        /// 流失用户
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public ActionResult LossUserStatistics(DPagePara page)
        {

            var result = taxlog.LossUserStatistics(page);
            string pageUrl = Utils.CombUrlTxt("LossUserStatistics", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return View(result);
        }


        public ActionResult UserAgentRanking(DPagePara page)
        {
            var result = taxlog.GetUserAgentGoldRanking(page);
            string pageUrl = Utils.CombUrlTxt("UserAgentRanking", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return View(result);
        }

        /// <summary>
        /// 限制用户登录
        /// </summary>
        /// <returns></returns>
        public ActionResult LimitUserLogin(DPage page)
        {
            var result = _feedBackService.GetlimitdeviceData(page);
            string pageUrl = Utils.CombUrlTxt("LimitUserLogin", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return View(result);
        }
        public JsonResult SubmitLimitLogin(string DeviceID, int Id, string remark)
        {
            var result = new { msg = "", success = false };
            _feedBackService.SubmitFormlimitLogin(DeviceID, Id, remark);
            return Json(new { msg = "操作成功！", success = true }, JsonRequestBehavior.AllowGet);

        }

        public JsonResult LimitUserLoginDel(string ids)
        {

            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "LimitUserLogin", "parent.loadMenuTree"));
            var result = _feedBackService.DellimitdeviceLog(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "LimitUserLogin", "parent.loadMenuTree"));
        }


        public ActionResult JackpotAddlog()
        {

            return View();
        }
        /// <summary>
        /// h5游戏 Gold
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public ActionResult GoldChangeH5gamelog(DPagePara page)
        {
            var data = _goldh5game.GetUserGoldChangeH5game(page);

            string pageUrl = Utils.CombUrlTxt("GoldChangeH5gamelog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        public JsonResult GoldChangeH5gameDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "GoldChangeH5gamelog", "parent.loadMenuTree"));
            var result = _goldh5game.GoldChangeH5gameDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "GoldChangeH5gamelog", "parent.loadMenuTree"));
        }

        public ActionResult GoldChangelog(DPagePara page)
        {
            var data = goldto.GetUserGoldChangelog(page);

            string pageUrl = Utils.CombUrlTxt("GoldChangelog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        //玩家输赢流水
        public ActionResult UserlosingWinning(DPagePara page)
        {
            var data = goldto.UserlosingWinning(page);
            if (page.isExport == 1)
                return File(data.filebyte, "application/vnd.ms-excel", "ExportData.xls");

            string pageUrl = Utils.CombUrlTxt("UserlosingWinning", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            decimal score = goldto.GameUserLoseWinSum(page) / 100;
            ViewBag.sumgolg = score;
            return View(data);
        }

        public JsonResult GoldChangelogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "GoldChangelog", "parent.loadMenuTree"));
            var result = goldto.GoldChangelogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "GoldChangelog", "parent.loadMenuTree"));
        }
        //红利领取记录

        public ActionResult UserAgentlog(DPagePara page)
        {

            var data = taxlog.GetUserAgentlog(page);

            string pageUrl = Utils.CombUrlTxt("UserAgentlog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;


            var sumgold = taxlog.SumHongLi(page);
            ViewBag.sumgolg = sumgold.ToString("#0.00");

            return View(data);
        }
        public ActionResult AgentTotalIncome()
        {

            return View();
        }


        public JsonResult UserAgentLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "UserAgentlog", "parent.loadMenuTree"));
            var result = taxlog.UserAgentLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "UserAgentlog", "parent.loadMenuTree"));
        }

        public ActionResult Ttaxlog(DPagePara page)
        {
            var data = taxlog.GetTaxLog(page);
            if (page.isExport == 1)
                return File(data.filebyte, "application/vnd.ms-excel", "ExportData.xls");

            string pageUrl = Utils.CombUrlTxt("Ttaxlog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        public JsonResult TtaxlogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "Ttaxlog", "parent.loadMenuTree"));
            var result = taxlog.DeletetaxlogByids(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "Ttaxlog", "parent.loadMenuTree"));
        }
        public ActionResult CustomerRecharge()
        {

            return View();
        }


        public JsonResult LowerAgentList()
        {



            return Json("");
        }


        /// <summary>
        /// 获取在线信息
        /// </summary>
        /// <param name="sTime"></param>
        /// <param name="eTime"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetOnlineInfoData(string sTime, string eTime)
        {
            var result = _gameService.GetOnlineInfo(sTime, eTime);
            return Json(result);
        }


        // GET: GameCore
        public ActionResult NowOnlineStatics(string type)
        {

            var onlinechache = CacheHelper.Get("NowOnlineStatics" + type);
            if (onlinechache == null)
            {
                var list = _gameService.NowOnlineStatics(DateTime.Now, true, type);
                CacheHelper.Insert("NowOnlineStatics" + type, list, 10);
                return Json(list);
            }
            else
                return Json(onlinechache);

        }
        /// <summary>
        /// 奖池月统计
        /// </summary>
        /// <returns></returns>
        public JsonResult GetMonthDaytjackpotStatics()
        {

            var list = _gameService.GetMonthDaytjackpotStatics();
            return Json(list);
        }

        public ActionResult GetMonthDayStatics(string datetime, string type)
        {
            var date = datetime == "" ? DateTime.Now.ToString() : datetime;

            var monthchace = CacheHelper.Get("GetMonthDayStatics" + type);
            if (monthchace == null)
            {
                var list = _gameService.GetMonthStatiscstoDayDatainfo(DateTime.Parse(date), type);
                CacheHelper.Insert("NowOnlineStatics" + type, list, 60);
                return Json(list);
            }
            else return Json(monthchace);
        }
        public ActionResult RoomList()
        {
            return View();
        }

        public ActionResult GetTableInfoData(DPagePara page)
        {
            var result = _RoomListService.GetListRoomTable(page);
            result.RoleId = manager.role_id.Value;
            string pageUrl = Utils.CombUrlTxt("RoomList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        public ActionResult Deletetable(string id, int gameid)
        {
            DataResult result = new DataResult();
            result.Message = "解散成功";
            cs_currdto_gm cg = new cs_currdto_gm();
            try
            {
                if (!string.IsNullOrEmpty(id))
                {
                    cg.fn = "cs_dismisstable_gm";
                    cg.tableid = id;
                    cg.gameid = gameid;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(cg));
                    string _content = HttpService.GetHttp(_url, _data);
                    sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
                    if (_scsetcard._ret == 1)
                    {
                        Log.Error("后台解散桌子", _scsetcard._info);
                        result.Code = (int)Status.fail;
                        result.Message = "解散桌子失败";
                    }
                    else
                    {
                        string[] idss = id.Split(',');
                        foreach (var item in idss)
                        {
                            int tid = 0;
                            int.TryParse(item, out tid);
                            _RoomListService.DelEntity(tid);
                        }
                        _manageService.AddActionlog(ActionEnum.Delete, OptAction.Establishtable, ActionEnum.Delete.ToDescription() +
                        OptAction.Establishtable.ToDescription() + "桌子号:" + idss);
                    }
                }
                else
                {
                    return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "RoomList", "parent.loadMenuTree"));
                }

            }
            catch (Exception ex)
            {
                result.Message = "系统错误";
                result.Code = (int)Status.fail;
            }
            return Json(CommonHelper.JscriptMsg(result.Message, "RoomList", "parent.loadMenuTree"));
        }
        public ActionResult GetGamelist()
        {

            var data = _RoomListService.GetGamelist().
              Select(st => new KeyValuePair<int, string>
              (st.id, st.name));
            return Json(data);
        }

       
        public ActionResult GetGameRobot() {
            var data = _gameuserservice.GetGameRobotUser();  
            return Json(data);

        }

        public ActionResult GetRoomBygameId(int gameid)
        {
            var data = _roomService.GetEntityLisrByWhere(st => st.gameid == gameid).
                  Select(o => new KeyValuePair<int, string>(o.Id, o.Name));
            return Json(data);
        }
        /// <summary>
        /// 添加不同游戏类型房间
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="tableinfo"></param>
        /// <returns></returns>

        public ActionResult SubmitTableEntity(string gameid, string tableinfo)
        {
            string jsoninfo = "";
            if (gameid == "401")//mj
            {
                cs_createtable_mj mj = JsonHelper.JSONToObject<cs_createtable_mj>(tableinfo);
                mj.maxCount = 200;
                mj.baserate = mj.baserate * 100;
                jsoninfo = JsonHelper.ObjectToJSON(mj);
            }
            else if (gameid == "51")
            {
                cs_createtable_tex tex = JsonHelper.JSONToObject<cs_createtable_tex>(tableinfo);
                tex.maxCount = 200;
                tex.baserate = tex.baserate * 100;
                jsoninfo = JsonHelper.ObjectToJSON(tex);
            }
            else
            {
                cs_createtable_whi whi = JsonHelper.JSONToObject<cs_createtable_whi>(tableinfo);
                whi.maxCount = 200;
                whi.baserate = whi.baserate * 100;
                jsoninfo = JsonHelper.ObjectToJSON(whi);
            }
            ttablelist entity = new ttablelist();
            DataResult result = new DataResult();
            result.Message = "创建成功";

            cs_createtablelist_gm csrff = new cs_createtablelist_gm();
            csrff.gameid = Convert.ToInt32(gameid);
            csrff.fn = "cs_createtablelist_gm";
            csrff.param = jsoninfo;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(csrff));
            string _content = HttpService.GetHttp(_url, _data);
            sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
            if (_scsetcard._ret == 1)
            {
                Log.Error("创建桌子", _scsetcard._info);
                result.Code = (int)Status.fail;
                result.Message = "创建失败";
            }
            else
            {
                _manageService.AddActionlog(ActionEnum.Add, OptAction.Establishtable, ActionEnum.Add.ToDescription() +
                    OptAction.Establishtable.ToDescription() + "桌子号:" + entity.tableNum);
            }
            return Json(result);
        }


        #region 视图
        [HttpPost]
        public ActionResult GetRoomInfoById(int id)
        {
            return Json(_RoomListService.GetRoomTableById(id));
        }
        public ActionResult RoomListEdit()
        {
            return View();
        }
        public JsonResult MSUnbinding(string userid)
        {
            DataResult result = new DataResult();
            try
            {
                cs_unbinding ub = new cs_unbinding();
                ub.fn = "cs_msunbinding_gm";
                ub.userid = int.Parse(userid);
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(ub));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
                if (_scsetcard._ret == 1)
                {
                    Log.Error("解绑代理", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "解绑失败";
                }
                result.Message = "解绑失败成功！";
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "解绑失败";
            }

            return Json(result);
        }
        /// <summary>
        /// 设置特殊邀请码
        /// </summary>
        /// <returns></returns>
        public JsonResult SetInvitaCode(int uid,int code)
        {
            if(uid==0 && code==0) return Json(new { sucess = false, msg = "数据异常" });
            if(code>100000) return Json(new { sucess = false, msg = "邀请码是五位数以下的数字" });
            var dcode = _activeService.GetEntityByWhere(t=>t.Activecode == code);
            if (dcode != null)
            {
                if (dcode.UseUserId != 0)
                {
                    return Json(new { sucess = false, msg = "这个邀请码已经被人使用" });
                }
            }
            cs_setInvitacode sdata = new cs_setInvitacode();
            sdata.fn = "cs_setInvitacode";
            sdata.uid = uid;
            sdata.code = code;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sdata));
            string _content = HttpService.GetHttp(_url, _data);
            sc_setInvitacode _scsetcard = JsonHelper.JSONToObject<sc_setInvitacode>(_content);
            if (_scsetcard._ret == 0)
            {
                if (dcode != null)
                {
                    dcode.UseUserId = uid;
                    _activeService.UpdateAsync(dcode);
                }
                else
                {
                    _activeService.AddEntity(new tactivecode() 
                    { 
                       Activecode = code,
                       UseUserId = uid,
                       CreateDate = DateTime.Now,
                       GenerateUserId = 0
                    });

                }
                return Json(new { sucess = true, msg = "设置成功" });
            }
            return Json(new { sucess = false, msg = "设置失败" });
        }


        public ActionResult LowerAgent(DPagePara page)
        {

            try
            {
                DataResults<tuseragent2019View2> data = new DataResults<tuseragent2019View2>();
                if (string.IsNullOrEmpty(page.userid))
                    data = _WhirlUserAgent.GetUserAgentList(page, 0);
                else
                {
                    int user = int.Parse(page.userid);
                    data = _WhirlUserAgent.GetThisUserAgentList(page, user);
                }
                string pageUrl = Utils.CombUrlTxt("LowerAgent", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
                string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
                data.InnerHtml = InnerHtml;
                return View(data);
            }
            catch (Exception)
            {

                throw;
            }
        }
        #endregion
        #region 排行榜设置

        public ActionResult SetRangingList()
        {

            return View();
        }
        public ActionResult SetBonusRangingList()
        {

            return View();
        }
        public ActionResult SetGodRangingList()
        {

            return View();
        }
        public ActionResult SetACERangingList()
        {

            return View();
        }


        public ActionResult AddACERanging(int UserId, int GameId, int PosCount1, int PosCount2, int PosCount5, int PosCount10, int PosCount20, int PosCount50)
        {

            if (manager.role_id.Equals(1))
            {
                var getuser = _gameuserservice.GetEntityByWhere(st => st.UserID == UserId);
                if (getuser == null)
                {
                    return Json(new { success = true, msg = "该用户不存在" });
                }
                var result = _usergamehand.Addtablehandnum(UserId, GameId, PosCount1, PosCount2, PosCount5, PosCount10, PosCount20, PosCount50);
                if (result.Code == (int)Status.Success)
                {
                    return Json(new { success = true, msg = "添加成功。" });
                }
                else
                {
                    return Json(new { success = false, msg = result.Message });
                }
            }
            else
            {
                return Json(new { success = false, msg = "您没有权限!" });
            }
        }
        /// <summary>
        /// 添加红利排名
        /// </summary>
        /// <param name="UserId_bonus"></param>
        /// <param name="GameId_bonus"></param>
        /// <param name="Rank_bonus"></param>
        /// <param name="Prize_bonus"></param>
        /// <param name="TotalHand_bonus"></param>
        /// <returns></returns>
        //public ActionResult AddBonueRanging(int UserId_bonus, int GameId_bonus, int Rank_bonus, int TotalHand_bonus)
        //{
        //    try
        //    {
        //        using (texas_2021Entities db = new texas_2021Entities())
        //        {
        //            if (manager.role_id.Equals(1))
        //            {
        //                var user = _gameuserservice.GetEntityByWhere(st => st.UserID == UserId_bonus);
        //                if (user == null)
        //                {
        //                    return Json(new { success = true, msg = "该用户不存在" });
        //                }

        //                var appset = sysconfig.GetValueByKeyDsc(Rank_bonus.ToString(), "红利奖励");


        //                DataResult result = _tgameuserrank.AddBonusRanging(UserId_bonus, user.wechatName, GameId_bonus, Rank_bonus, int.Parse(appset.Val), TotalHand_bonus);

        //                if (result.Code == (int)Status.Success)
        //                {
        //                    string againrank_str = "call againrank_gold();call againrank_bonus()";
        //                    db.Database.ExecuteSqlCommand(againrank_str);
        //                    return Json(new { success = true, msg = "添加成功。" });
        //                }
        //                else
        //                {
        //                    return Json(new { success = false, msg = result.Message });
        //                }
        //            }
        //            else
        //            {
        //                return Json(new { success = false, msg = "您没有权限!" });
        //            }
        //        }

        //    }
        //    catch (Exception ex)
        //    {

        //        throw;
        //    }

        //}

        //public ActionResult AddGodRanging(int UserId_god, int GameId_god, int Rank_god, int TotalHand_god)
        //{

        //    if (manager.role_id.Equals(1))
        //    {

        //        using (texas_2021Entities db = new texas_2021Entities())
        //        {
        //            var user = _gameuserservice.GetEntityByWhere(st => st.UserID == UserId_god);
        //            if (user == null)
        //            {
        //                return Json(new { success = true, msg = "该用户不存在" });
        //            }

        //            var appset = sysconfig.GetValueByKeyDsc(Rank_god.ToString(), "盈利奖励");
        //            var result = _tgameuserrank.Addtgameuserrank(UserId_god, user.wechatName, GameId_god, Rank_god, -1, int.Parse(appset.Val), TotalHand_god);
        //            if (result.Code == (int)Status.Success)
        //            {
        //                string againrank_str = "call againrank_gold();call againrank_bonus()";
        //                db.Database.ExecuteSqlCommand(againrank_str);
        //                return Json(new { success = true, msg = "添加成功。" });
        //            }
        //            else
        //            {
        //                return Json(new { success = false, msg = result.Message });
        //            }
        //        }

        //    }
        //    else
        //    {
        //        return Json(new { success = false, msg = "您没有权限!" });
        //    }
        //}
        ///// <summary>
        ///// 获取大神排行榜
        ///// </summary>
        ///// <param name="page"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public JsonResult GetGodRankData(DPagePara page)
        //{
        //    page.ChangeType = -1;
        //    var result = _tgameuserrank.GetTGameUserRankList(page);
        //    result.RoleId = manager.role_id.Value;
        //    string pageUrl = Utils.CombUrlTxt("SetGodRangingList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
        //    string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
        //    result.InnerHtml = InnerHtml;
        //    return Json(result);
        //}
        ///// <summary>
        ///// 获取大神排行榜
        ///// </summary>
        ///// <param name="page"></param>
        ///// <returns></returns>
        //[HttpPost]
        //public JsonResult GetBonusRankData(DPagePara page)
        //{
        //    var result = _tgameuserrank.GetTGameUserRankList(page, 0);
        //    result.RoleId = manager.role_id.Value;

        //    string pageUrl = Utils.CombUrlTxt("SetBonusRangingList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
        //    string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
        //    result.InnerHtml = InnerHtml;
        //    return Json(result);
        //}

        /// <summary>
        /// 获取高手排行榜
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetACERankkData(DPagePara page)
        {

            var result = _ttablehandnumlog.GetTablehandNumLogList(page);
            result.RoleId = manager.role_id.Value;

            string pageUrl = Utils.CombUrlTxt("SetACERangingList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetGameHandNum(DPagePara page)
        {

            var result = _usergamehand.GetTablehandNumLogList(page);
            result.RoleId = manager.role_id.Value;

            string pageUrl = Utils.CombUrlTxt("SetACERangingList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        [HttpPost]
        public JsonResult DeleteACERanging(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的数据！", "SetRangingList", "parent.loadMenuTree"));
            var result = _ttablehandnumlog.DeleteRangings(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "SetRangingList", "parent.loadMenuTree"));
        }

        //[HttpPost]
        //public JsonResult DeleteGodorbonusrank(string ids)
        //{
        //    if (string.IsNullOrEmpty(ids))
        //        return Json(CommonHelper.JscriptMsg("请选中您要操作的数据！", "SetRangingList", "parent.loadMenuTree"));
        //    var result = _tgameuserrank.Deleteuserrank(ids);
        //    return Json(CommonHelper.JscriptMsg(result.Message, "SetRangingList", "parent.loadMenuTree"));
        //}
        public ActionResult RoomHandRanking()
        {
            var para = Request.Form.Get("roomlevel");
            ViewBag.roomlevel = int.Parse(string.IsNullOrEmpty(para) ? "1" : para);
            return View();
        }
        #endregion


        #region 主播端
        /// <summary>
        /// 得到视讯房
        /// </summary>
        /// <returns></returns>
        [LoginFilter(IsCheck = false)]
        public JsonResult GetVideosTable()
        {

            cs_getvideosroom_gm video = new cs_getvideosroom_gm() { fn = "cs_getvideosroom_gm" };
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(video));
            string _content = HttpService.GetHttp(_url, _data);
            sc_getvideosroom_gm _scsetcard = JsonHelper.JSONToObject<sc_getvideosroom_gm>(_content);

            return Json(new { success = true, msg = "sucees", data = _scsetcard.tinfo }, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [LoginFilter(IsCheck = false)]
        public JsonResult AnchorJoinRoom(int? uid, int? tableid, int? roomid, int? gameid)
        {
            if (uid == null || gameid == null || tableid == null || roomid == null) return Json(new { success = false, msg = "参数异常!" }, JsonRequestBehavior.AllowGet);

            cs_anchorjoinroom_gm video = new cs_anchorjoinroom_gm() { fn = "cs_anchorjoinroom_gm" };
            video.uid = uid.Value;
            video.tableid = tableid.Value;
            video.roomid = roomid.Value;
            video.gameid = gameid.Value;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(video));
            string _content = HttpService.GetHttp(_url, _data);

            sc_anchorjoinroom_gm _scsetcard = JsonConvert.DeserializeObject<sc_anchorjoinroom_gm>(_content);
            if (_scsetcard._ret == 0)
                return Json(new
                {
                    success = true,
                    msg = "加入成功!",
                    cards = _scsetcard.cards,
                    commoncards = _scsetcard.commoncards,
                    playercount = _scsetcard.playercount,
                    waitopen = _scsetcard.waitopen,
                    isplaying = _scsetcard.isplaying
                }, JsonRequestBehavior.AllowGet);
            else
                return Json(new { success = false, msg = _scsetcard._info }, JsonRequestBehavior.AllowGet);
        }



        #endregion
        public string MidStrEx_New(string sourse, string startstr, string endstr)
        {
            Regex rg = new Regex("(?<=(" + startstr + "))[.\\s\\S]*?(?=(" + endstr + "))", RegexOptions.Multiline | RegexOptions.Singleline);
            return rg.Match(sourse).Value;
        }
        [HttpPost]
        public JsonResult AddRobotjoinRoom(int tableid, int gameid,string rolist)
        {
            int roomid = 0;
            List<string> ids = new List<string>() ;
            string msg = "";
            bool success = false;
            ids = rolist.Split(',').ToList();
            //List<tuser> robots = _gameuserservice.GetEntityLisrByWhere(x => x.isRobot == 1&&x.RobotGameid==51);//获取机器人
            //foreach (var item in robots)
            //{
            //    ids += item.UserID + ",";
            //}
           // List<RobotState> ro = GetRobotState(ids).Where(x => x.Status == 0 || x.Status == 1).ToList();//得到状态为空闲和在大厅的机器人


            ttablelist tableinfo = _RoomListService.GetEntityByID(tableid);//获取桌子信息
            if (tableinfo != null)
            {
                string datainfo = MidStrEx_New(tableinfo.data, "pc\":", ",\"mt");
                int datainfopc = Convert.ToInt32(datainfo);//桌子人数
                if (ids.Count != 0)
                {
                    int addsuccesnum = 0;

                    foreach (var item in ids)//根据人数添加机器人到房间中
                    {

                        if (addsuccesnum < datainfopc)
                        {
                            if (datainfopc == 2)
                            {
                                int[] a = { 1, 3 };
                                roomid = a[addsuccesnum];
                            }
                            if (datainfopc == 3)
                            {
                                int[] a = { 1, 2, 4 };
                                roomid = a[addsuccesnum];
                            }
                            if (datainfopc == 4)
                            {
                                int[] a = { 1, 2, 3, 4 };
                                roomid = a[addsuccesnum];
                            }
                            DataResult result = new DataResult();
                            cs_robotjoinroom bgm = new cs_robotjoinroom();
                            bgm.userId =int.Parse(item);
                            bgm.gameId = gameid;
                            int tnum = tableid;
                            result.Message = "添加成功";
                            var gameentity = _gameuserservice.GetEntityByWhere(st => st.UserID.ToString() == item);
                            if (gameentity == null)
                            {
                                msg = "该用户不存在！";
                                success = false;

                            }
                            else
                            {
                                var tableentity = _RoomListService.GetEntityByWhere(st => st.tableNum == tnum);
                                if (tableentity == null || tableentity.levelid.Value < 0)
                                {
                                    success = false;
                                    msg = "房间异常!";

                                }
                                bgm.roomnumber = tableentity.tableNum;
                                bgm.levelid = tableentity.levelid.Value;
                                bgm.pos = roomid;
                                bgm.fn = "cs_robotjoinroom";
                                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                                string _content = HttpService.GetHttp(_url, _data);
                                Crazy2018_Sys_Entity.sc_base_gm _scsetcard = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_base_gm>(_content);
                                if (_scsetcard._ret == 0)
                                {
                                    result.Code = (int)Status.fail;
                                    addsuccesnum++;
                                    result.Message = _scsetcard._info;

                                }
                            }
                        }
                    }

                    success = true;
                    msg = "操作成功";
                }
                else
                {
                    msg = "无可用的机器人";
                    return Json(new { success = success, msg = msg }, JsonRequestBehavior.AllowGet);
                }


            }
            return Json(new { success = success, msg = msg }, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public JsonResult GetTablePNum(int tableid)
        {
            DataResult result = new DataResult();
            ttablelist tableinfo = _RoomListService.GetEntityByID(tableid);//获取桌子信息
            if (tableinfo != null)
            {
                string datainfo = MidStrEx_New(tableinfo.data, "pc\":", ",\"mt");
                return Json(new { success = true, tnum = datainfo }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { success = false, tnum = 4 }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public List<RobotState> GetRobotState(string ids)
        {

            cs_robotids _setrobot = new cs_robotids() { fn = "cs_robotids" };
            _setrobot.ids = ids.Split(',');
            _setrobot.idslength = ids.Split(',').Length;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setrobot));
            string _content = Utils.HttpGet(_url + _data);
            sc_rebotstate_gm _scsetcard = JsonHelper.JSONToObject<sc_rebotstate_gm>(_content);
            if (_scsetcard._ret != 0)
            {
                Log.Error("_scsetcard", _scsetcard._info);
            }

            return _scsetcard.robotstate;
        }

        public ActionResult Contact()
        {

            return View();
        }
        public ActionResult ContactEdit()
        {

            return View();
        }

        // public GetContactData
        [HttpPost]
        public JsonResult GetContactData(DPage page)
        {
            //  ChkAdminLevel("game_list", DTEnums.ActionEnum.Edit.ToString()); //检查权限

            var result = _contactserver.GetTContactList(page);
            string pageUrl = Utils.CombUrlTxt("Contact", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);


        }
        [HttpPost]
        public JsonResult AddContactData(TContact model)
        {
            //  ChkAdminLevel("game_list", DTEnums.ActionEnum.Edit.ToString()); //检查权限
            DataResult result = new DataResult();
            result.Message = "保存成功";
            try
            {
                _contactserver.AddContact(model);
                redis.DeleteStringKey("GetContactsInfo");
            }
            catch (Exception ex)
            {
                Log.Error("保存游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "保存失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult DeleteContact(int id)
        {
            DataResult result = new DataResult();
            result.Message = "删除成功";
            try
            {
                var entity = _contactserver.GetEntityByID(id);
                _contactserver.DelEntity(entity);
                redis.DeleteStringKey("GetContactsInfo");
            }
            catch (Exception)
            {

                result.Message = "删除失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult UpdataContact(TContact model)
        {
            DataResult result = new DataResult();
            result.Message = "修改成功";
            try
            {
                var entity = _contactserver.UpdateEntity(model);
              var test =  redis.DeleteStringKey("GetContactsInfo");
            }
            catch (Exception)
            {

                result.Message = "修改失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetContactById(int id)
        {
            DataResult<TContact> result = new DataResult<TContact>();
            TContact gameInfo = new TContact();
            var entity = _contactserver.GetEntityByWhere(w => w.ID == id);
            if (entity != null)
            {
                gameInfo.QQ = entity.QQ;
                gameInfo.Wechat = entity.Wechat;
                gameInfo.Skype = entity.Skype;
                gameInfo.Phone = entity.Phone;
                gameInfo.Other1 = entity.Other1;
                gameInfo.Other2 = entity.Other2;
                gameInfo.Other3 = entity.Other3;
                result.Data = gameInfo;
                result.Message = "获取成功";
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "没有找到该条数据内容";
            }
            return Json(result);
        }

        public ActionResult H5winloseLog(DPagePara page)
        {
            return View();
        }
        public JsonResult H5winloseLoglist(DPagePara page)
        {
   
            var data = _H5winLogService.Geth5loseinfo(page);

            string pageUrl = Utils.CombUrlTxt("GoldChangelog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return Json(data);
        }

        public ActionResult RoomaAddRobot()
        {

            return View();
        }
    }


}