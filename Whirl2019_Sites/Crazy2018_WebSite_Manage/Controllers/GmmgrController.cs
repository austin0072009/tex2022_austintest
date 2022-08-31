using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck =true)]
    public class GmmgrController : BaseController
    {
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private readonly INoticeService _noticeService;
        private readonly ITableUserlogService tablelog;
        private readonly IRedEnvelopesConfigService _redenvelopes;
        private readonly IAgentGoldlogService _AgentGoldlog;
        private readonly IManageService manageLogservice;
        private readonly ItuserService tuserservice;
        private readonly IGameUserService GameUserServer;
        private readonly RedisHelper redis;
        public GmmgrController(IManageService manageService,
                               INoticeService noticeService, ITableUserlogService _tablelog,
                               IRedEnvelopesConfigService redenvelopes,
                               IAgentGoldlogService AgentGoldlog,
                               ItuserService _tuserservice,
                               IGameUserService _GameUserServer,
        IManageService _manageLogservice) : base(manageService)
        {
            _noticeService = noticeService;
            tablelog = _tablelog;
            _redenvelopes = redenvelopes;
            _AgentGoldlog = AgentGoldlog;
            manageLogservice = _manageLogservice;
            tuserservice = _tuserservice;
            GameUserServer = _GameUserServer;
            redis = new RedisHelper(2);
        }
        /// <summary>
        /// 代理用户的id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public ActionResult AgencyContrib(DPagePara page)
        {
            var data = _AgentGoldlog.GetAgentContrib(page);

            string pageUrl = Utils.CombUrlTxt("AgencyContrib", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }

      

        public ActionResult TestMaxPoker()
        {
            return View();
        }
        public ActionResult UserPokerList(int tableid,int gameid)
        {
            DataResult result = new DataResult();
            cs_seehandcard bgm = new cs_seehandcard() { fn = "cs_seehandcard" };
            bgm.tableId = tableid;
            bgm.gameid = gameid;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_seehandcard _scsetcard = JsonHelper.JSONToObject<sc_seehandcard>(_content);
            if (_scsetcard._ret != 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "查看失败";
               // return PageJsAlert(_scsetcard._info, "UserPokerList");
                return View(new List<UserPokerListView>());
            }
            else
            {
                manageLogservice.AddActionlog(ActionEnum.View, OptAction.HandPoker, ActionEnum.View.ToDescription() +
                     OptAction.HandPoker.ToDescription() + "桌号:" + tableid);
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(_scsetcard.pokerlist);
            }
            var data = _scsetcard.pokerlist.Where(t=>t.ListCard.Count>0).
                Select(t=>new UserPokerListView
            {
                UserId = t.UserId,
                UserName = t.UserName,
                handone = "/img/whirl_card/" + t.ListCard[0]+".png",
                handtwo = "/img/whirl_card/" + t.ListCard[1] + ".png"
            }).ToList();

            return View(data);

        }

        public ActionResult RedEnvelopeTaskSet(DPagePara page)
        {

            var data = _redenvelopes.GetRedEnveTaskData(page);

            string pageUrl = Utils.CombUrlTxt("RedEnvelopeTaskSet", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public ActionResult RedEnvelopeSet(DPagePara page)
        {
            var data = _redenvelopes.GetGameRankData(page);

            string pageUrl = Utils.CombUrlTxt("RedEnvelopeSet", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        /// <summary>
        /// 删除红包任务
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult DeleteRedMoneyTaskByids(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "RedEnvelopeTaskSet", "parent.loadMenuTree"));
            var result = _redenvelopes.DeleteRedMoneyTaskByids(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "RedEnvelopeTaskSet", "parent.loadMenuTree"));
        }
        /// <summary>
        /// 删除红包设置
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult DeleteRedMoneyByids(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "RedEnvelopeSet", "parent.loadMenuTree"));
            var result = _redenvelopes.DeleteRedMoneyByids(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "RedEnvelopeSet", "parent.loadMenuTree"));
        }

        public JsonResult SubmitRedMoney(decimal Money,decimal Rate,string TaskType)
        {
            var rtdata = new { success = false, msg = "!" };
            if (Money <= 0)
            {
                rtdata = new { success = false, msg = "金额异常!" };
            }else if(Rate > 100)
            {
                rtdata = new { success = false, msg = "胜率异常!" };
            }
            else
            {
                var reslut = _redenvelopes.SubmitRedMoney(Money, Rate, TaskType);
                if (reslut.Code.Equals((int)Status.Success))
                    rtdata = new { success = true, msg = "提交成功!" };
                else
                    rtdata = new { success = false, msg = reslut.Message };
            }
            return Json(rtdata, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult SubmitRedMoneyTask()
        {
            tredenvelopestask entity = new tredenvelopestask()
            {
                Id = int.Parse(Request.Form["Id"]),
                RedEnvCount = int.Parse(Request.Form["RedEnvCount"]),
                TaskCount = int.Parse(Request.Form["TaskCount"]),
                TaskName = Request.Form["TaskName"].ToString(),
                TaskType = int.Parse(Request.Form["TaskType"])
            };
            var reslut = _redenvelopes.SubmitRedMoneyTask(entity);
            if (reslut)
            {
                return Json(new { success=true,msg="操作成功!"});
            }
            else
            {
                return Json(new { success = false, msg = "操作失败!" });
            }
        }


        public JsonResult ModifyRedMoneyAndRate(int id,decimal money,string type,string ttype)
        {
            var javascript = "";
            if (id <= 0)
              return  Json(CommonHelper.JscriptMsg("数据Id异常!", "RedEnvelopeSet", "parent.loadMenuTree"), JsonRequestBehavior.AllowGet);
            if (type.Equals("r") && money>100)
               return Json(CommonHelper.JscriptMsg("概率超出范围！", "RedEnvelopeSet", "parent.loadMenuTree"), JsonRequestBehavior.AllowGet);
            if (type.Equals("m") && money <= 0)
            return Json(CommonHelper.JscriptMsg("金额异常！", "RedEnvelopeSet", "parent.loadMenuTree"), JsonRequestBehavior.AllowGet);

            var a = _redenvelopes.ModifyRedMoneyAndRate(id, money, type, ttype);
            if (a.Code.Equals((int)Status.Success)) javascript = "修改成功！";
            else  javascript = a.Message;


            return Json(CommonHelper.JscriptMsg(javascript, "RedEnvelopeSet", "parent.loadMenuTree"),JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 红包领取记录
        /// </summary>
        /// <returns></returns>
        public ActionResult RedEnvelopesEeceivelog(DPagePara page)
        {
            var data = _redenvelopes.GetUserRedenvelopeslog(page);

            string pageUrl = Utils.CombUrlTxt("RedEnvelopesEeceivelog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        /// <summary>
        /// 新增红包领取记录
        /// </summary>
        /// <param name="GetUserId"></param>
        /// <param name="RedEnveType"></param>
        /// <param name="GoldNum"></param>
        /// <returns></returns>
        public ActionResult AddRedEnvelopesEeceivelog(int GetUserId, int RedEnveType, int GoldNum)
        {
            if (manager.role_id.Equals(1))
            {
                if (tuserservice.GetEntityByID(GetUserId) == null)
                {
                    return Json(new { success = false, msg = "该用户不存在！" });
                }

                var result = _redenvelopes.AddRedenvelopeslog(GetUserId, RedEnveType, GoldNum);
                if (result.Code == (int)Status.Success)
                {
                    return Json(new { success = true, msg = "新增成功" });
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
        /// 牌局输赢记录
        /// </summary>
        /// <returns></returns>
        public ActionResult RoomWinlosing(DPagePara page)
        {

            var data = tablelog.GetUserTableLogWinLosing(page);

            string pageUrl = Utils.CombUrlTxt("RoomWinlosing", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }

        /// <summary>
        /// 玩家赠送管理
        /// </summary>
        /// <returns></returns>
        public ActionResult UserGiveManage(DPagePara page)
        {
            var data = _noticeService.GetUserRechargeData(page);

            string pageUrl = Utils.CombUrlTxt("UserGiveManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }

        public JsonResult UserGiveDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "UserGiveManage", "parent.loadMenuTree"));
            var result = _noticeService.RechargeDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "UserGiveManage", "parent.loadMenuTree"));
        }




        /// <summary>
        /// 开关游戏机器人
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SwitchGameRobot()
        {
            DataResult result = new DataResult();
            return Json(result);
        }
     
        [HttpPost]
        public JsonResult swichHandRack(cs_switchhandrack model)
        {
            DataResult result = new DataResult();
            model.fn = "cs_switchhandrack";
            try
            {
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                if (_scsetcard._ret.Equals(0))
                {
                    _manageService.AddActionlog(ActionEnum.Enable, OptAction.Robot, ActionEnum.Enable.ToDescription() +
                        OptAction.Robot.ToDescription());
                }
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        /// <summary>
        ///游戏开关机器人
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SwitchGame(cs_switchgame model)
        {
            DataResult result = new DataResult();
            try
            {
                model.fn = "cs_switchgame";
                //cs_switchgame sc_data = new cs_switchgame() { fn = "cs_switchgame" };
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                if (_scsetcard._ret.Equals(0))
                {
                    _manageService.AddActionlog(ActionEnum.Enable, OptAction.Robot, ActionEnum.Enable.ToDescription() + 
                        OptAction.Robot.ToDescription() + ",游戏ID:52");
                }
            }
            catch (Exception ex)
            {

                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        /// <summary>
        ///游戏开关机器人
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GameRegistIsopen(string is_lock)
        {
            DataResult result = new DataResult();
            try
            {
                redis.SetStringKey("IsRegUser", is_lock); //GetStringValue("IsRegUser");
                if (is_lock == "1")
                {
                    result.Message = "注册已开启";
                    result.Code = (int)Status.fail;
                }
                else {
                    result.Message = "注册已关闭";
                    result.Code = (int)Status.Success;
                }
            }
            catch (Exception ex)
            {

                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetRedisRegister()
        {
            DataResult result = new DataResult();
            try
            {
                var cache = redis.GetStringValue("IsRegUser");
                
                    result.Message = "获取成功";
                    result.Code = Convert.ToInt32(cache);
             
            }
            catch (Exception ex)
            {

                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        



        /// <summary>
        /// 游戏邮件赠送金币开关
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GiveGold(cs_giveGold model)
        {
            DataResult<sc_giveGold> result = new DataResult<sc_giveGold>();
            try
            {
                model.fn = "cs_givegold";
                //cs_switchgame sc_data = new cs_switchgame() { fn = "cs_switchgame" };
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
                string _content = Utils.HttpGet(_url + _data);
                sc_giveGold _scsetcard = JsonHelper.JSONToObject<sc_giveGold>(_content);
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                result.Data = _scsetcard;
            }
            catch (Exception ex)
            {

                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        public ActionResult UserControl(DPagePara page)
        {
            DataResults<ControlState> data = new DataResults<ControlState>();

            var udata = GameUserServer.GetGameUser(page);

            cs_getcontrol_gm sdata = new cs_getcontrol_gm() { fn = "cs_getcontrol_gm" };
            sdata.uIdlist = udata.Data.Select(t => t.UserID).ToList();
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sdata));
            string _content = Utils.HttpGet(_url + _data);
            sc_getcontrol_gm _scsetcard = JsonHelper.JSONToObject<sc_getcontrol_gm>(_content);
            if (_scsetcard._ret == 0)
            {
                string pageUrl = Utils.CombUrlTxt("UserControl", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
                string InnerHtml = Utils.OutPageList(udata.PageSize, udata.PageIndex, udata.TotalCount, pageUrl, 8, true);
                udata.InnerHtml = InnerHtml;

                data.InnerHtml = InnerHtml;
                data.Data = _scsetcard.ctrlState;
                return View(data);
            }
            return View(new DataResults<ControlState>());
        }

        public JsonResult SubmitUserTask()
        {
            cs_setcontrol_gm task = new cs_setcontrol_gm()
            {
                uId = Convert.ToInt32(Request.Form["uId"]),
                gameid = Convert.ToInt32(Request.Form["gameid"]),
                end  = DateTime.Now.AddMinutes(Convert.ToInt32(Request.Form["end"])),
                tgold = Convert.ToInt32(Request.Form["tgold"]),
                addrate = Convert.ToInt32(Request.Form["addrate"]),
            };
            task.fn = "cs_setcontrol_gm";
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(task));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret == 0)
            {
                return Json(new { success = true, msg = "操作成功！" });
            }
            else
            {
                return Json(new { success = false, msg = _scsetcard._info });
            }


        }

    }
}