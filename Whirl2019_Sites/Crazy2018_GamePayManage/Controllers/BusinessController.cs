using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_WebSite_Manage.Hubs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;


namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck = true)]
    public class BusinessController : BaseController
    {
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();

        private readonly INoticeService _noticeService;
        private readonly IEmailService _emailService;
        private readonly IRechargeRecordService _rechargeService;
        private readonly IShopManageService _shopService;
        private readonly ITakeNowRecordService _takeService;
        private readonly IJackpotService _jackpotService;
        private readonly IStatisticsGoldService _statisticsGoldService;
        private readonly IGameService _gameService;
        private readonly IGameUserService _gameUserService;
        private readonly IUserRechargeLogService _rechargeLogService;
        private readonly IRoomService _roomService;
        private readonly IFeedBackService _feedBackService;
        private readonly ICommoditService _commoditService;
        private readonly ITakeNowRecordService _TakeNowRecordService;
        private readonly ISnsUserInfo _snsUserInfo;
        private readonly IActiveCodeService _activeService;
        private readonly IInitialagencyInfoService _initAgencyService;
        private readonly IProfitService _profitService;
        private readonly IUserContactService _userContactService;
        private readonly IBankCardService _bankCardService;
        private readonly IManageService manageLogservice;
        private readonly IRechargeRecordService _RechargeRecordService;
        private readonly IRedEnvelopesConfigService _redenvelopes;

        private readonly ISiteConfigSerivice _siteService;
        private readonly ITurnTablePrizeService _turnTablePrizeService;
        private readonly ITuserPrizeLogService _tuserPrizeLogService;
        private readonly IRoomListService _tableservice;
        private readonly IWhirlUserAgentService _writeuser;
        private readonly IEntityCardService _entitycardservice;

        public BusinessController(
            INoticeService noticeService,
            IEmailService emailService,
            IManageService manageService,
            IRechargeRecordService rechargeService,
            IShopManageService shopService,
            ITakeNowRecordService takeService,
            IJackpotService jackpotService,
            IStatisticsGoldService statisticsGoldService,
            IGameService gameService,
            IGameUserService gameUserService,
            IUserRechargeLogService rechargeLogService,
            IRoomService roomService,
            IFeedBackService feedBackService,
            ICommoditService commoditService,
            ITakeNowRecordService TakeNowRecordService,
            ISnsUserInfo snsUserInfo,
            IActiveCodeService activeService,
            IInitialagencyInfoService initAgencyService,
            IProfitService profitService,
            IUserContactService userContactService,
            IBankCardService bankCardService,
            ITurnTablePrizeService turnTablePrizeService,
            ITuserPrizeLogService tuserPrizeLogService,
            IRoomListService tableservice,
            IManageService _manageLogservice,
            IRechargeRecordService RechargeRecordService,
            IRedEnvelopesConfigService redenvelopes,
            ISiteConfigSerivice siteService,
            IWhirlUserAgentService writeuser,
            IEntityCardService entitycard
            ) : base(manageService)
        {
            _noticeService = noticeService;
            _emailService = emailService;
            _rechargeService = rechargeService;
            _shopService = shopService;
            _takeService = takeService;
            _jackpotService = jackpotService;
            _statisticsGoldService = statisticsGoldService;
            _gameService = gameService;
            _gameUserService = gameUserService;
            _rechargeLogService = rechargeLogService;
            _roomService = roomService;
            _feedBackService = feedBackService;
            _commoditService = commoditService;
            _TakeNowRecordService = TakeNowRecordService;
            _snsUserInfo = snsUserInfo;
            _activeService = activeService;
            _initAgencyService = initAgencyService;
            _profitService = profitService;
            _userContactService = userContactService;
            _bankCardService = bankCardService;
            _turnTablePrizeService = turnTablePrizeService;
            _tuserPrizeLogService = tuserPrizeLogService;
            manageLogservice = _manageService;
            _tableservice = tableservice;
            _RechargeRecordService = RechargeRecordService;
            _redenvelopes = redenvelopes;
            _siteService = siteService;
            _writeuser = writeuser;
            _entitycardservice = entitycard;
        }

        public ActionResult RobotEdit(int uid)
        {
            if (uid != 0)
            {
                RobotModel view = new RobotModel();
                var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == uid);
                var agent = _writeuser.GetEntityByID(uid);
                view.User = gameentity;
                view.agentuser = agent;
                return View(view);
            }
            return View(new RobotModel());
        }
        public ActionResult SaveRobotMsg(tuser user, tuseragent2019 agentuser)
        {
            DataResult result = new DataResult();
            result.Message = "发送成功!";
            try
            {
                cs_setrobot_gm _setcard = new cs_setrobot_gm() { fn = "cs_setrobot_gm" };
                _setcard.userid = user.UserID;
                _setcard.isrobot = 1;
                _setcard.robotlevel = 1;
                _setcard.winpercent = user.winpercent.Value;
                _setcard.wechatHeadIcon = user.wechatHeadIcon;
                _setcard.wechatName = user.wechatName;

                _setcard.gameWinCount = agentuser.gameWinCount.Value;
                _setcard.gameLostCount = agentuser.gameLostCount.Value;
                _setcard.gameDrawCount = agentuser.gameDrawCount.Value;
                _setcard.dealCardCount = agentuser.dealCardCount.Value;
                //_setcard.pos1Count = agentuser.pos1Count.Value;
                //_setcard.pos2Count = agentuser.pos2Count.Value;
                //_setcard.pos5Count = agentuser.pos5Count.Value;
                //_setcard.pos10Count = agentuser.pos10Count.Value;
                //_setcard.pos20Count = agentuser.pos20Count.Value;
                //_setcard.pos50Count = agentuser.pos50Count.Value;

                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret != 0)
                {
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                return AlertRedirect("保存成功!", "Gmmgr");

            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "保存失败";
            }
            return AlertRedirect(result.Message, "Gmmgr");

        }



        public ActionResult AddUser(string PassportID, string PassportPwd, string ActiveCode)
        {
            if (manager.role_id.Equals(1))
            {
                string pwd = string.Empty;
                //默认密码
                if (string.IsNullOrEmpty(PassportPwd)) pwd = "123456";
                else pwd = PassportPwd;

                var result = _snsUserInfo.RegUser(PassportID, "", ActiveCode, pwd);
                if (result.Code == (int)Status.Success)
                {
                    return Json(new { success = true, msg = "注册成功!请在app登录。" });
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

        public ActionResult RevokeTradenum(string tradenum, string CState)
        {
            DataResult result = new DataResult();
            result.Message = "撤销成功！";
            if (CState == "2")
            {
                result.Code = (int)Status.fail;
                result.Message = "邮件已经撤销！";
            }
            else
            {
                var datares = _emailService.RevokeTradeNum(tradenum);
                if (datares.Code == -1)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "撤销失败！";
                }
            }
            return Json(result);
        }
        /// <summary>
        /// 系统邮件
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public ActionResult SubmitForm(EmailView entity)
        {
            DataResult result = new DataResult();
            result.Message = "发送成功!";
            cs_basemsg_gm bgm = new cs_basemsg_gm();
            cs_currentitydto_gm<EmailView> ce = new cs_currentitydto_gm<EmailView>();
            try
            {
                var _tempUserStr = string.IsNullOrEmpty(entity.sUserIds) ? null : entity.sUserIds.Trim().Split(',').Select(o => int.Parse(o)).ToArray();
                entity.FromUserId = manager.id;
                entity.FromUserName = manager.user_name;
                entity.CreateDate = DateTime.Now.ToString();
                entity.MailType = 2;
                entity.EmailType = 1;
                entity.State = 0;
                entity.IsLook = false;
                entity.userids = _tempUserStr;
                ce.fn = "cs_sendemail_gm";
                ce.entity = entity;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(ce));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);

                if (_scsetcard._ret == 1)
                {
                    Log.Error("系统发送邮件", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "发送失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Send, OptAction.emailsend,
                        ActionEnum.Send.ToDescription() + OptAction.emailsend.ToDescription() + "数据条数:1");
                }
            }
            catch (Exception ex)
            {

                result.Code = (int)Status.fail;
                result.Message = "发送失败";
            }

            return Json(result);
        }
        public ActionResult EditVlevel()
        {

            return View();
        }
        public ActionResult SetMaxWinLose()
        {
            return View();
        }


        public JsonResult SetMaxWinLose2(int uid, int maxlose, int maxwin)
        {
            DataResult result = new DataResult();
            cs_maxlosewin bgm = new cs_maxlosewin();
            bgm.userid = uid;
            bgm.maxlose = maxlose;
            bgm.maxwin = maxwin;
            result.Message = "修改成功";
            var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == uid);
            if (gameentity == null)
            {
                result.Message = "该用户不存在！";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            else
            {
                bgm.fn = "cs_maxlosewin";
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                string _content = HttpService.GetHttp(_url, _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret == 1)
                {
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.setMaxLosewin, ActionEnum.Set.ToDescription() +
                    OptAction.setMaxLosewin.ToDescription() + "输赢范围:" + maxlose + "-" + maxwin + "ID:" + uid);
                }
                return Json(result);
            }
        }

        /// <summary>
        /// 添加机器人至房间
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="roomnumber"></param>
        /// <returns></returns>
        public JsonResult RobotJoinRoom(int uid, string roomnumber,int gameid,int seatnumber) {

            DataResult result = new DataResult();
            cs_robotjoinroom bgm = new cs_robotjoinroom();
            bgm.userId = uid;
            bgm.gameId = gameid;
            int tnum = 0;
            int.TryParse(roomnumber, out tnum);
            result.Message = "添加成功";
            var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == uid);
            if (gameentity == null)
            {
                result.Message = "该用户不存在！";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            else
            {
                var tableentity = _tableservice.GetEntityByWhere(st => st.tableNum == tnum);
                if (tableentity == null || tableentity.levelid.Value < 0)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "房间异常!";
                    return Json(result);
                }
                bgm.roomnumber = tableentity.tableNum;
                bgm.levelid = tableentity.levelid.Value;
                bgm.pos = seatnumber;
                bgm.fn = "cs_robotjoinroom";
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                string _content = HttpService.GetHttp(_url, _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret == 1)
                {
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.setMaxLosewin, ActionEnum.Set.ToDescription() +
                    OptAction.setMaxLosewin.ToDescription() + "机器人：" + uid + "-" + "房间号：" + roomnumber);
                }
                return Json(result);
            }
        }



        public JsonResult SetVlevel(int uid, int level)
        {
            DataResult result = new DataResult();
            cs_setlevel_gm bgm = new cs_setlevel_gm();
            result.Message = "修改成功";

            if (level == 8 || level == 9)
            {
                result.Message = "合伙人和第二级由创始人设置！";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == uid);
            if (gameentity == null)
            {
                
                result.Message = "该用户不存在！";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            else
            {
                if (gameentity.vlevel==8||gameentity.vlevel==9 || gameentity.vlevel == 10)
                {
                    result.Message = "创始人 合伙人 第二级 不可添加该功能！";
                    result.Code = (int)Status.fail;
                    return Json(result);
                } 
                bgm.userid = uid;
                bgm.levelid = level;
                bgm.fn = "cs_setlevel_whi";
            }
            try
            {
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                string _content = HttpService.GetHttp(_url, _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret == 1)
                {
                    Log.Error("设置会员等级", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.setMember, ActionEnum.Set.ToDescription() +
                        OptAction.setMember.ToDescription() + "等级:" + Enum.GetName(typeof(memberLevel), level));
                }
                return Json(result);
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "设置会员等级失败!";
                return Json(result);
            }

        }
        public ActionResult AddTablewatchRobot(int tableid)
        {
            DataResult result = new DataResult();
            result.Message = "添加成功";
            cs_addwatchrobot_whi bgm = new cs_addwatchrobot_whi();
            var gameentity = _tableservice.GetEntityByWhere(st => st.tableNum == tableid);
            if (gameentity == null)
            {
                result.Message = "该桌子不存在！";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            else
            {
                bgm.tablenum = tableid;
                bgm.levelid = gameentity.levelid.Value;
                bgm.fn = "cs_addwatchrobot_whi";
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                string _content = HttpService.GetHttp(_url, _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret == 1)
                {
                    Log.Error("添加观战机器人", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Add, OptAction.WatchRobot, ActionEnum.Add.ToDescription() +
                        OptAction.WatchRobot.ToDescription() + "桌子:" + tableid);
                }
               
            }
            return Json(result);
        }


        public ActionResult SetRefreshallRobot()
        {
            DataResult result = new DataResult();
            cs_base_gm bgm = new cs_base_gm();
            bgm.fn = "cs_refreshallrobot";
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);

            if (_scsetcard._ret == 1)
            {
                result.Code = (int)Status.fail;
                result.Message = "刷新失败";
            }
            
            return Json(result);
        }

        public ActionResult SeeOnlinePeople()
        {
            DataResult result = new DataResult();
            cs_base_gm bgm = new cs_base_gm();
            bgm.fn = "cs_seeonlinepeople";
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);

            if (_scsetcard._ret == 1)
            {
                result.Code = (int)Status.fail;
                result.Message = "刷新失败";
            }
            else
            {
                result.Message = _scsetcard._info;
            }
            
            return Json(result);

        }
        [HttpPost]
        public JsonResult GetJackpot(int gameid)
        {
            var data = _roomService.GetEntityLisrByWhere(t=>t.isEnable==1 && t.gameid== gameid).
                Select(t=>new KeyValuePair<int,int>(t.Id,t.Baserate.Value/100)).ToList();

            return Json(data);
        }

        [HttpPost]
        public ActionResult SendBigPrizeMsg()
        {

            DataResult result = new DataResult();
            var userid = Request.Form["userid"];
            var BigPrizeType = Request.Form["BigPrizeType"];
            var roomlevel = Request.Form["roomlevel"];
            var gameid = Request.Form["gameid"];
            if (userid==null)
            {
                result.Code = (int)Status.fail;
                result.Message = "用户id不能为空";
            }
            if (BigPrizeType == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "大奖类型不能为空";
            }
            var user = _gameUserService.GetEntityByID(int.Parse(userid));
            if (user!=null)
            {
                var jackpot = _jackpotService.GetEntityByID(523);
                int percentage = 2;
                long? jackpotGold = 0;
                var jackpotType = int.Parse(BigPrizeType);
                switch (jackpotType)
                {
                    case 1:
                        percentage = 20;
                        break;
                    case 2:
                        percentage = 10;
                        break;
                    case 3:
                        percentage = 2;
                        break;
                }

                jackpotGold = jackpot.jackpot * percentage / 100;
                jackpotGold = jackpotGold * 100 / 100;//不分小数部分
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    tjackpotlog jentity = new tjackpotlog()
                    {
                        GameId = Convert.ToInt32(gameid),
                        CreateTime = DateTime.Now,
                        Gold = jackpotGold,
                        JackpotType = jackpotType,
                        RoomId = int.Parse(roomlevel),
                        UserId = int.Parse(userid)
                    };
                    dbhelper.tjackpotlog.Add(jentity);
                    dbhelper.SaveChanges();
                };

            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "用户不存在！";
            }
            return Json(result);
        }

        /// <summary>
        /// 清除所有贡献值
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult ClearAllChild()
        {
            DataResult result = new DataResult();
            try
            {
                using (texas_2021Entities dbhrlper = new texas_2021Entities())
                {
                    IQueryable<tuseragent2019> tuser2019 = dbhrlper.tuseragent2019;
                    foreach (var entity19 in tuser2019)
                    {

                        entity19.ChildAgents = GetChildAgents(entity19.ChildAgents, 1);// entity19.ChildAgents = "";
                        var entry = dbhrlper.Entry<tuseragent2019>(entity19);
                        entry.State = System.Data.Entity.EntityState.Modified;
                        entry.Property(a => a.ChildAgents).IsModified = true;
                    }
                    dbhrlper.SaveChangesAsync();
                    ClearChild2020();
                    // texas_2021Entities dbhrlper = new texas_2021Entities();
                    //tuseragent2019 tuser2019 = dbhrlper.tuseragent2019.FirstOrDefault();
                    //tuser2019.ChildAgents = GetChildAgents(tuser2019.ChildAgents, 1);
                    //dbhrlper.Entry<tuseragent2019>(tuser2019).State = System.Data.Entity.EntityState.Modified;
                    //dbhrlper.Entry<tuseragent2019>(tuser2019).Property(a => a.ChildAgents).IsModified = true;
                    //int m = dbhrlper.SaveChanges();
                    result.Code = (int)Status.fail;
                    result.Message = "清除成功";
                }

            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "清除失败";
                throw;
            }
            return Json(result);
        }
        /// <summary>
        /// 清除2020的childAgents数据
        /// </summary>
        public void ClearChild2020() {
            try
            {
                using (texas_2021Entities dbhrlper = new texas_2021Entities())
                {
                    IQueryable<tuseragent2020> tuser2020 = dbhrlper.tuseragent2020;
                    foreach (var entity20 in tuser2020)
                    {
                        entity20.ChildAgents = GetChildAgents(entity20.ChildAgents, 2);
                        var entry = dbhrlper.Entry<tuseragent2020>(entity20);
                        entry.State = System.Data.Entity.EntityState.Modified;
                        entry.Property(a => a.ChildAgents).IsModified = true;
                    }
                    dbhrlper.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        #region 清除贡献值 json与datatable 转换
        /// <summary>
        /// 清除贡献值
        /// </summary>
        /// <param name="strJson">用户child值</param>
        /// <param name="type">1为2019表2为2020表</param>
        /// <returns></returns>
        public string GetChildAgents(string strJson,int type) {

            string agentstr = "";
            DataTable dt = null;
            try
            {
                dt = ToDataTable(strJson);
                if (type == 2)
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        dt.Rows[i]["income"] = 0.0;
                        dt.Rows[i]["tIncome"] = 0.0;
                    }
                }
                else
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        dt.Rows[i]["income"] = 0.0;
                        dt.Rows[i]["water"] = 0;//行集合.行【号】列【名】
                        dt.Rows[i]["tIncome"] = 0.0;
                    }
                }

                agentstr = DataTable2Json(dt);
            }
            catch (Exception ex)
            {
                return null;
            }
            return agentstr;
        }
        public DataTable ToDataTable(string json)
        {
            DataTable dataTable = new DataTable();  //实例化
            DataTable result;
            JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
            javaScriptSerializer.MaxJsonLength = Int32.MaxValue; //取得最大数值
            ArrayList arrayList = javaScriptSerializer.Deserialize<ArrayList>(json);
            if (arrayList.Count > 0)
            {
                foreach (Dictionary<string, object> dictionary in arrayList)
                {
                    //if (dictionary.Keys.Count<string>() == 0)
                    if (dictionary.Keys.Count == 0)
                    {
                        result = dataTable;
                        return result;
                    }
                    if (dataTable.Columns.Count == 0)
                    {
                        foreach (string current in dictionary.Keys)
                        {
                            dataTable.Columns.Add(current, dictionary[current].GetType());
                        }
                    }
                    DataRow dataRow = dataTable.NewRow();
                    foreach (string current in dictionary.Keys)
                    {
                        dataRow[current] = dictionary[current];
                    }

                    dataTable.Rows.Add(dataRow);
                }
            }
            result = dataTable;
            return result;
        }

        /// <summary>  
        /// dataTable转换成Json格式  
        /// </summary>  
        /// <param name="dt"></param>  
        /// <returns></returns>  
        public static string DataTable2Json(DataTable dt)
        {
            StringBuilder jsonBuilder = new StringBuilder();
            jsonBuilder.Append("[");
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                jsonBuilder.Append("{");
                for (int j = 0; j < dt.Columns.Count; j++)
                {
                    jsonBuilder.Append("\"");
                    jsonBuilder.Append(dt.Columns[j].ColumnName);
                    jsonBuilder.Append("\":\"");
                    jsonBuilder.Append(dt.Rows[i][j].ToString());
                    jsonBuilder.Append("\",");
                }
                jsonBuilder.Remove(jsonBuilder.Length - 1, 1);
                jsonBuilder.Append("},");
            }
            if (dt.Rows.Count!=0)
            {
                jsonBuilder.Remove(jsonBuilder.Length - 1, 1);
            }
          
            jsonBuilder.Append("]");
       
            return jsonBuilder.ToString();
        }
        #endregion

        public async Task<int> UpdateListAsync()
        {

            texas_2021Entities dbhrlper = new texas_2021Entities();
            IQueryable<tuseragent2019> tuser2019 = dbhrlper.tuseragent2019;
            foreach (var entity in tuser2019)
            {
                var entry = dbhrlper.Entry(entity);
                entry.State = EntityState.Modified;
                entry.Property(entity.ChildAgents).IsModified = true;
            }
            return await dbhrlper.SaveChangesAsync();
        }

        /// <summary>
        ///  设置总代理
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="activeCode"></param>
        /// <returns></returns>
        public ActionResult SetGeneralAgent(int userId, string activeCode)
        {
            DataResult result = new DataResult();
            cs_setgeneralagent_gm bgm = new cs_setgeneralagent_gm();
            result.Message = "添加成功";
            

            bgm.vlevel = 8;
            bgm.userid = userId;
            bgm.activeCode = "";
            bgm.fn = "cs_setgeneralagent_gm";

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret == 1)
            {
                result.Code = (int)Status.Success;
                result.Message = _scsetcard._info;
            }
            else
            {
                Log.Error("设置总代理", _scsetcard._info);
                result.Code = (int)Status.fail;
                result.Message = _scsetcard._info;
            }

            return Json(result);
        }

        public ContentResult GetActiveCode()
        {
           var codedata = _activeService.GetEntityByWhere(st => st.UseUserId==0);
            return Content(codedata.Activecode.ToString());
        }

        /// <summary>
        ///  设置总代理
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="activeCode"></param>
        /// <returns></returns>
        public ActionResult SetFAgent(int userId, int fUserId)
        {
            DataResult result = new DataResult();
            cs_setfagent_gm bgm = new cs_setfagent_gm();
            result.Message = "添加成功";

            bgm.userid = userId;
            bgm.fUserId = fUserId;
            bgm.fn = "cs_setfagent_gm";

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret == 1)
            {
                result.Code = (int)Status.Success;
                result.Message = _scsetcard._info;
            }
            else
            {
                Log.Error("设置总代理", _scsetcard._info);
                result.Code = (int)Status.fail;
                result.Message = _scsetcard._info;
            }

            return Json(result);
        }
        public ActionResult SetMjRoomCards(int tablenum, string allCards, string mjppoker,int MjbankerPos)
        {
            cs_setcard_whi_gm bgm = new cs_setcard_whi_gm() { tablenum = tablenum, gameid = 401 };
            bgm._cards = new List<List<int>>();
            DataResult result = new DataResult() { Message = "" };
            string[] currAllCards = allCards.Split(new char[] { ';', '；' });
            string[] pubcard = mjppoker.Split(',');
            if (currAllCards.Length != 4)
            {
                result.Message = "牌型设置错误";
                result.Code = (int)Status.fail;
                return Json(result);
            }

            if (pubcard.Count() != 1)//庄家多拿一张牌
            {
                result.Message = "公牌应为1张";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            if (MjbankerPos<0|| MjbankerPos>4)
            {
                result.Message = "四人麻将庄家位置在1~4之间;三人麻将庄家位置在1、2、4之间；二人麻将庄家位置在1、3之间";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            //筒子 条子  万子
            List<int> arrbobbin =new List<int>() { 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19 };
            List<int> arrstrip = new List<int>() { 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 29 };
            List<int> arrWan = new List<int>() { 31, 31, 31, 31, 32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 38, 39, 39, 39, 39 };

             arrbobbin.AddRange(arrstrip);
             arrbobbin.AddRange(arrWan);
            List<int> allCardsNo = arrbobbin;
            List <List<int>> cardsList = new List<List<int>>();
            bgm.mjBanker = int.Parse(pubcard[0]);
            bgm.pos = MjbankerPos;
            bgm.texvctrl = false;
            allCardsNo.Remove(bgm.mjBanker);
            foreach (string cards in currAllCards)
            {
                List<int> currcardsList = new List<int>();
                string[] currCards = cards.Split(new char[] { ',', '，' });
                    
                    foreach (string card in currCards)
                    {
                        try
                        {
                            int intCard = Convert.ToInt32(card.Trim());
                            if (allCardsNo.Contains(intCard))
                            {
                                currcardsList.Add(intCard);
                                result.Message += intCard.ToString() + ",";
                                allCardsNo.Remove(intCard);
                            }
                            else
                            {
                                result.Message = "牌型设置错误:"+ intCard;
                                result.Code = (int)Status.fail;
                                return Json(result);
                            }
                        }
                        catch (Exception ex)
                        {
                            result.Message = "牌型设置错误error";
                            result.Code = (int)Status.fail;
                            return Json(result);
                        }
                    }
                bgm._cards.Add(currcardsList);

                result.Message += ";";
            }
            allCardsNo.Remove(bgm.mjBanker);
            allCardsNo.Add(bgm.mjBanker);
            allCardsNo.Reverse();
            bgm.pubcard = allCardsNo;//表示公牌
            result.Message = result.Message.Replace(",;", ";");

            cs_currentitydto_gm<cs_setcard_whi_gm> ce = new cs_currentitydto_gm<cs_setcard_whi_gm>();
            try
            {
                ce.fn = "cs_setcard_whi_gm";
                ce.entity = bgm;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(ce));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);

                if (_scsetcard._ret == 1)
                {
                    Log.Error("_scsetcard", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "发送失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.CardType, ActionEnum.Set.ToDescription() +
                        OptAction.CardType.ToDescription() + ",牌型数据:" + JsonHelper.ObjectToJSON(bgm));
                }
            }
            catch (Exception ex)
            {

                result.Code = (int)Status.fail;
            }

            return Json(result);
        }


        public ActionResult SetDzRoomCards(int tablenum, string allCards,string dzppoker,string isAnchor)
        {
            cs_setcard_whi_gm bgm = new cs_setcard_whi_gm() { tablenum = tablenum, gameid = 51 };
            bgm._cards = new List<List<int>>();
            DataResult result = new DataResult() { Message = "" };
            string[] currAllCards = allCards.Split(new char[] { ';', '；' });
            string[] pubcard = dzppoker.Split(',');
            if (currAllCards.Length != 9)
            {
                result.Message = "牌型设置错误";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            
            if (pubcard.Count()!=5)
            {
                result.Message = "公牌应为5张";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            bgm.pubcard = pubcard.Select(t=>int.Parse(t)).ToList();
            bgm.texvctrl = isAnchor == "1" ? true : false;

            int[] arrSpade = { 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114 };
            int[] arrHeart = { 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214 };
            int[] arrClub = { 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314 };
            int[] arrDiamond = { 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414 };
            
            List<int> allCardsNo = arrSpade.Union(arrHeart).Union(arrClub).Union(arrDiamond).ToList();
            List<List<int>> cardsList = new List<List<int>>();
            bool hasNoCard = true;
            foreach (string cards in currAllCards)
            {
                List<int> currcardsList = new List<int>();
                string[] currCards = cards.Split(new char[] { ',', '，' });
                if (currCards.Length != 2)
                {
                    if (hasNoCard)
                    {
                        result.Message = "牌型设置错误";
                        result.Code = (int)Status.fail;
                        return Json(result);
                    }
                    else
                    {
                        //主动配置牌型 
                        for (int i = 0; i < 2; i++)
                        {
                            int pos = new Random().Next(0, allCardsNo.Count);
                            currcardsList.Add(allCardsNo[pos]);
                            result.Message += allCardsNo[pos].ToString() + ",";
                            allCardsNo.RemoveAt(pos);
                        }
                    }
                }
                else
                {
                    hasNoCard = false;
                    foreach (string card in currCards)
                    {
                        try
                        {
                            int intCard = Convert.ToInt32(card.Trim());
                            if (allCardsNo.Contains(intCard))
                            {
                                currcardsList.Add(intCard);
                                result.Message += intCard.ToString() + ",";
                                allCardsNo.Remove(intCard);
                            }
                            else
                            {
                                result.Message = "牌型设置错误";
                                result.Code = (int)Status.fail;
                                return Json(result);
                            }
                        }
                        catch (Exception ex)
                        {
                            result.Message = "牌型设置错误";
                            result.Code = (int)Status.fail;
                            return Json(result);
                        }
                    }
                }
                bgm._cards.Add(currcardsList);
                result.Message += ";";
            }
            result.Message = result.Message.Replace(",;", ";");

            cs_currentitydto_gm<cs_setcard_whi_gm> ce = new cs_currentitydto_gm<cs_setcard_whi_gm>();
            try
            {
                ce.fn = "cs_setcard_whi_gm";
                ce.entity = bgm;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(ce));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);

                if (_scsetcard._ret == 1)
                {
                    Log.Error("_scsetcard", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "发送失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.CardType, ActionEnum.Set.ToDescription() +
                        OptAction.CardType.ToDescription() + ",牌型数据:" + JsonHelper.ObjectToJSON(bgm));
                }
            }
            catch (Exception ex)
            {

                result.Code = (int)Status.fail;
            }

            return Json(result);
        }
        public ActionResult SetRoomCards(int tablenum, string allCards)
        {
            cs_setcard_whi_gm bgm = new cs_setcard_whi_gm() { tablenum = tablenum, gameid = 52 };
            bgm._cards = new List<List<int>>();
            bgm.texvctrl = false;
            DataResult result = new DataResult() { Message = "" };
            string[] currAllCards = allCards.Split(new char[] { ';', '；' });
            if (currAllCards.Length != 8)
            {
                result.Message = "牌型设置错误";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            //正确的牌型  黑桃：104, 105, 106, 107, 108, 109, 110, 111  红桃：202, 203, 204, 206, 207, 208, 210, 212 < br />
            // 梅花：304, 305, 306, 307, 308, 309, 310, 311  方块：402, 404, 406, 407, 408, 410, 412 大王：16 
            List<int> allCardsNo = new List<int> { 104, 105, 106, 107, 108, 109, 110, 111, 202, 203, 204, 206, 207, 208, 210, 212, 304, 305, 306, 307, 308, 309, 310, 311, 402, 404, 406, 407, 408, 410, 412, 16 };
            List<List<int>> cardsList = new List<List<int>>();
            bool hasNoCard = true;
            foreach (string cards in currAllCards)
            {
                List<int> currcardsList = new List<int>();
                string[] currCards = cards.Split(new char[] { ',', '，' });
                if (currCards.Length != 4)
                {
                    if (hasNoCard)
                    {
                        result.Message = "牌型设置错误";
                        result.Code = (int)Status.fail;
                        return Json(result);
                    }
                    else
                    {
                        //主动配置牌型 
                        for (int i = 0; i < 4; i++)
                        {
                            int pos = new Random().Next(0, allCardsNo.Count);
                            currcardsList.Add(allCardsNo[pos]);
                            result.Message += allCardsNo[pos].ToString() + ",";
                            allCardsNo.RemoveAt(pos);
                        }
                    }
                }
                else
                {
                    hasNoCard = false;
                    foreach (string card in currCards)
                    {
                        try
                        {
                            int intCard = Convert.ToInt32(card.Trim());
                            if (allCardsNo.Contains(intCard))
                            {
                                currcardsList.Add(intCard);
                                result.Message += intCard.ToString() + ",";
                                allCardsNo.Remove(intCard);
                            }
                            else
                            {
                                result.Message = "牌型设置错误";
                                result.Code = (int)Status.fail;
                                return Json(result);
                            }
                        }
                        catch (Exception ex)
                        {
                            result.Message = "牌型设置错误";
                            result.Code = (int)Status.fail;
                            return Json(result);
                        }
                    }
                }
                bgm._cards.Add(currcardsList);
                result.Message += ";";
            }
            result.Message = result.Message.Replace(",;", ";");

            cs_currentitydto_gm<cs_setcard_whi_gm> ce = new cs_currentitydto_gm<cs_setcard_whi_gm>();
            try
            {
                ce.fn = "cs_setcard_whi_gm";
                ce.entity = bgm;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(ce));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);

                if (_scsetcard._ret == 1)
                {
                    Log.Error("_scsetcard", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "发送失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.CardType, ActionEnum.Set.ToDescription() +
                        OptAction.CardType.ToDescription() + ",牌型数据:" + JsonHelper.ObjectToJSON(bgm));
                }
            }
            catch (Exception ex)
            {

                result.Code = (int)Status.fail;
            }

            return Json(result);
        }

        public JsonResult GetRedeveCondition(int reTypeid)
        {
            var data = _redenvelopes.GetRedTaskByType(reTypeid);

            return Json(data.Select(t => new KeyValuePair<long, string>(t.Id, t.TaskName)));
        }

        public JsonResult SetSetUserRedEnve(int uid, int tid, int gid, int typecon)
        {
            DataResult result = new DataResult() { Message = "" };
            try
            {
                if (uid < -1 || tid <= 0 || gid <= 0)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "参数错误";
                }
                else
                {

                    var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == uid);
                    if (gameentity != null || uid.Equals(-1))
                    {
                        cs_redenvelopcount sengdata = new cs_redenvelopcount();
                        sengdata.fn = "cs_redenvelopcount";
                        sengdata.UserId = uid;
                        sengdata.TypeId = tid;
                        sengdata.Count = gid;
                        sengdata.typeCon = typecon;
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sengdata));
                        string _content = HttpService.GetHttp(_url, _data);
                        sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                        if (_scsetcard._ret == 1)
                        {
                            result.Code = (int)Status.Success;
                            result.Message = _scsetcard._info;
                        }
                        else
                        {
                            Log.Error("设置用户红包个数失败", _scsetcard._info);
                            result.Code = (int)Status.fail;
                            result.Message = _scsetcard._info;
                        }

                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "用户不存在";
                    }
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "系统错误";
            }
            return Json(result);
        }



        // GET: Business
        public ActionResult SiteEdit()
        {
            return View();
        }
        public ActionResult SiteList()
        {
            return View();
        }
        #region 游戏管理
        public ActionResult Statistics()
        {
            return View();
        }

        public ActionResult StatisticsOnline()
        {
            return View();
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
        public ActionResult StatisticsGold()
        {
            return View();
        }
        public ActionResult StatisticsJackpot()
        {
            var data = _jackpotService.GetGameLevelTatolgold();


            return View(data);
        }

        public ActionResult JackpotEdit()
        {
            return View();
        }

        /// <summary>
        /// 修改奖池信息
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveJackpot(JackpotView model)
        {
            DataResult result = new DataResult();
            result.Message = "保存成功";
            try
            {
                cs_tjackpot gameinfo = new cs_tjackpot();

                gameinfo.Id = model.ID;
                gameinfo.gameid = model.GameId;
                gameinfo.jackpot = model.Jackpot;
                gameinfo.isEnable = 1;
                gameinfo.isEnableDesc = "启用";
                gameinfo.deleteState = 0;
                gameinfo.modifyUser = string.Empty;
                gameinfo.modifyTime = DateTime.Now;
                gameinfo.Description = string.Empty;
                gameinfo.pump = model.Pump;
                gameinfo.waterproof = model.Waterproof;
                gameinfo.historygambleall = model.HistoryGambleall;
                gameinfo.income = model.Income;
                gameinfo.rax = model.Rax;
                gameinfo.handsel = model.handsel;
                gameinfo.roomid = model.roomid;

                gameinfo.fn = "cs_tjackpot";
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(gameinfo));
                string _content = HttpService.GetHttp(_url, _data);
                sc_tjackpot _scsetcard = JsonHelper.JSONToObject<sc_tjackpot>(_content);
                if (_scsetcard._ret != 1)
                {
                    Log.Error("保存奖池信息", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "保存失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Edit, OptAction.fangwater, ActionEnum.Edit.ToDescription() +
                        OptAction.fangwater.ToDescription() + ":" + Enum.GetName(typeof(DevelopmentJacapot), model.Waterproof) + "场次:" + model.roomid);

                }

            }
            catch (Exception ex)
            {
                Log.Error("保存奖池信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "保存失败";
            }
            return Json(result);
        }

        public ActionResult GameList()
        {
            return View();
        }
        /// <summary>
        /// 获取游戏信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameInfoData(DPage page)
        {
            var result = _gameService.GetGameInfoData(page);
            string pageUrl = Utils.CombUrlTxt("GameList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 修改游戏信息
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveGameInfo(GameInfoView model)
        {
            ChkAdminLevel("game_list", DTEnums.ActionEnum.Edit.ToString()); //检查权限
            DataResult result = new DataResult();
            result.Message = "保存成功";
            try
            {
                cs_gameInfo gameinfo = new cs_gameInfo();
                var entity = new tgameinfo();
                if (model.ID > 0)
                {
                    entity = _gameService.GetEntityByWhere(w => w.id == model.ID);
                    if (entity != null)
                    {
                        gameinfo.isEnable = entity.isopen.Value ? 1 : 0;
                        gameinfo.isEnableDesc = entity.isHot.ToString();
                        gameinfo.name = entity.name;
                        gameinfo.gameRule = entity.gameRule;
                        gameinfo.gameIntroduce = entity.desc;
                        gameinfo.id = entity.id;
                        gameinfo.Sort = entity.Sort.Value;
                    }
                }

                if (model.operation == DTEnums.ActionEnum.Delete.ToString())
                {
                    gameinfo.oldid = model.ID;
                    gameinfo.deleteState = 1;
                }
                else if (model.operation == DTEnums.ActionEnum.Disable.ToString())
                {
                    gameinfo.oldid = model.ID;
                    gameinfo.isEnable = 0;
                }
                else if (model.operation == DTEnums.ActionEnum.Enable.ToString())
                {
                    gameinfo.oldid = model.ID;
                    gameinfo.isEnable = 1;
                }
                else if (model.operation == DTEnums.ActionEnum.Edit.ToString() || model.operation == DTEnums.ActionEnum.Add.ToString())
                {
                    gameinfo.oldid = model.OldId;
                    gameinfo.isEnable = model.IsEnable ? 1 : 0;
                    gameinfo.isEnableDesc = model.IsEnable ? "启用" : "禁用";
                    gameinfo.name = model.Name;
                    gameinfo.gameRule = model.GameRule;
                    gameinfo.gameIntroduce = model.GameIntroduce;
                    gameinfo.Sort = model.Sort.Value;
                }
                gameinfo.id = model.ID;
                gameinfo.modifyUser = manager.user_name;
                gameinfo.modifyTime = DateTime.Now;
                gameinfo.fn = "cs_gameinfo";
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(gameinfo));
                string _content = HttpService.GetHttp(_url, _data);
                sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
                if (_scsetcard._ret != 1)
                {
                    Log.Error("保存游戏信息", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "保存失败";
                }
            }
            catch (Exception ex)
            {
                Log.Error("保存游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "保存失败";
            }
            return Json(result);
        }
        //public JsonResult AddGameInfo(GameInfoView model)
        //{
        //    DataResult result = new DataResult();
        //    result.Code = "0";
        //    result.Message = "修改成功";
        //    cs_gameInfo gameinfo = new cs_gameInfo();
        //    gameinfo.id = model.ID;
        //    gameinfo.name = model.Name;
        //    gameinfo.modifyUser = manager.user_name;
        //    gameinfo.isEnable = model.IsEnable ? 1 : 0;
        //    gameinfo.isEnableDesc = model.IsEnable ? "启用" : "禁用";
        //    gameinfo.deleteState = model.DeleteState ? 1 : 0;
        //    gameinfo.modifyTime = DateTime.Now;
        //    gameinfo.fn = "cs_gameinfo";
        //    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
        //    string _content = HttpService.GetHttp(_url, _data);
        //    sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
        //    return Json(result);
        //}
        /// <summary>
        /// 编辑游戏信息
        /// </summary>
        /// <returns></returns>
        public ActionResult GameEdit()
        {
            return View();
        }

        /// <summary>
        /// 根据ID获取游戏信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameInfoById(int id)
        {
            DataResult<GameInfoView> result = new DataResult<GameInfoView>();
            GameInfoView gameInfo = new GameInfoView();
            var entity = _gameService.GetEntityByWhere(w => w.id == id);
            if (entity != null)
            {
                gameInfo.Name = entity.name;
                gameInfo.IsEnable = entity.isopen.Value;
                gameInfo.GameRule = entity.gameRule;
                gameInfo.ID = entity.id;
                gameInfo.IsEnableDesc = entity.isHot.ToString();
                gameInfo.ModifyUser = entity.modifyUser;
                gameInfo.GameIntroduce = entity.desc;
              //  gameInfo.DeleteState = entity.deleteState.Value;
                gameInfo.Sort = entity.Sort;
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
        /// <summary>
        /// 获取房间信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public JsonResult GetRoomInfoById(int id)
        {
            return Json(_gameService.GetRoomInfoById(id));
        }
        public ActionResult RoomEdit()
        {
            return View();
        }
        public ActionResult RoomList()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetRoomInfoData(DPage page)
        {
            var result = _roomService.GetRoomInfoData(page);
            string pageUrl = Utils.CombUrlTxt("RoomList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取金币收支数据
        /// </summary>
        /// <param name="page"></param>
        /// <param name="gameId"></param>
        /// <param name="sTime"></param>
        /// <param name="eTime"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetStatisticsGoldData(DPage page, int gameId = -4, string sTime = "", string eTime = "")
        {
            var result = _statisticsGoldService.GetStatisticsGoldData(page, gameId, sTime, eTime);
            string pageUrl = Utils.CombUrlTxt("StatisticsGold", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        [HttpPost]
        public JsonResult GetJackpotData(DPage page)
        {
            var result = _jackpotService.GetJackPotData(page);
            string pageUrl = Utils.CombUrlTxt("StatisticsJackpot", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        ///获取金币收支选项
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameInfo()
        {
            var gameInfo = _gameService.GetEntityLisrByWhere(w => w != null);
            Type t = typeof(CommodiyType);
            var tempList = new List<EnumView>();
            var temp3 = new EnumView { Key = "0", Value = "所有游戏的收益" };
            var temp2 = new EnumView { Value = "系统赠送出的金币", Key = "1" };
            var temp1 = new EnumView { Key = "-2", Value = "钻石兑换" };
            foreach (var item in gameInfo)
            {
                var temp = new EnumView { Key = item.id.ToString(), Value = item.name };
                tempList.Add(temp);
            }
            tempList.OrderBy(w => w.Key);
            DataResults<EnumView> result = new DataResults<EnumView>();
            result.Data = tempList;
            result.Message = "获取成功";
            return Json(result);
        }
        #endregion

        #region 公告管理(邮件管理、公告管理)
        public ActionResult EmailmgrEdit()
        {
            return View();
        }
        //[HttpPost]
        //public ActionResult EmailmgrEdit(EmailModel model)
        //{
        //	cs_sendemail_gm _maildata = new cs_sendemail_gm() { fn = "cs_sendemail_gm" };
        //	var _tempUserStr = string.IsNullOrEmpty(model.UserIds) ? null : model.UserIds.Trim().Split(',');
        //	List<int> temp = new List<int>();
        //	if (_tempUserStr != null)
        //	{
        //		foreach (var item in _tempUserStr)
        //		{
        //			temp.Add(Convert.ToInt32(item));
        //		}
        //	}
        //	else
        //	{
        //		//DOTO  暂时不处理给所有用户发送邮件会造成游戏服务器出错
        //		//Expression<Func<snsuserinfo, bool>> fun = w => w != null;
        //		//if (temp.Any())
        //		//{
        //		//    fun = fun.And(w => temp.Contains(w.UserId));
        //		//}
        //		//var entitys = _snsUserInfo.GetEntityLisrByWhere(fun);
        //		//foreach (var item in entitys)
        //		//{
        //		//    temp.Add(item.UserId);
        //		//}

        //	}
        //	if (!temp.Any())
        //	{
        //		return Content("<script>" + CommonHelper.jsDialog("用户不存在") + "</script>");
        //	}
        //	_maildata.userids = temp.ToArray();
        //	_maildata._title = model.Title;
        //	_maildata.gold = model.gold;
        //	_maildata.diamond = model.diamond;
        //	_maildata._content = model.Content;
        //	string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_maildata));           // + HttpUtility.UrlDecode(_data);
        //	string _content = HttpService.GetHttp(_url, _data);
        //	sc_sendemail_gm _scMailData = JsonHelper.JSONToObject<sc_sendemail_gm>(_content);
        //	if (_scMailData._ret == 1) return RedirectToAction("EmailmgrList");
        //	return View();
        //}
        public ActionResult EmailmgrList(DPage page)
        {
            var result = _emailService.GetEmailData(page);
            string pageUrl = Utils.CombUrlTxt("EmailmgrList", "Keywords={0}&PageSize={2}&PageIndex={1}", result.Keywords, "__id__", result.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8);
            result.InnerHtml = InnerHtml;
            return View(result);
        }
        public ActionResult NoticeEdit()
        {
            return View();
        }
        public ActionResult NoticeList()
        {
            return View();
        }
        [HttpPost]
        public JsonResult GetNoticeData(DPage page)
        {
            var result = _noticeService.GetNoticeData(page);
            string pageUrl = Utils.CombUrlTxt("NoticeList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 根据Id获取数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetNoticeById(int id)
        {
            DataResult<tnotice> result = new DataResult<tnotice>() { Message = "获取成功" };
            var entity = _noticeService.GetEntityByID(id);
            result.Data = entity;
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "没有找到该条数据";
            }
            return Json(result);
        }
        /// <summary>
        /// 删除公告
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult NoticeDel(string ids)
        {
            nav_name = "news_notice";
            action_type = DTEnums.ActionEnum.Delete.ToString();
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "NoticeList", "parent.loadMenuTree"));
            var result = _noticeService.NoticeDelById(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "NoticeList", "parent.loadMenuTree"));
        }
        /// <summary>
        /// 添加||编辑
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateInput(false)]
        public JsonResult NoticeSave(NoticeView model, HttpPostedFileBase _TPicUrl)
        {

            nav_name = "news_notice";
            action_type = DTEnums.ActionEnum.Add.ToString();
            model.C_author = manager.user_name;
            
            string filepath = string.Empty;
            if (_TPicUrl!=null&&_TPicUrl.FileName != "")
            {
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var resultfile = file.fileSaveAs(_TPicUrl, false, false);
                var fileresult = JsonConvert.DeserializeObject<FileResult>(resultfile);
                filepath = fileresult.path;
            }
            model.TcPicUrl = filepath;


            var result = _noticeService.NoticeAdd(model);
            if (result.Code == (int)Status.Success && model.C_type.Equals("1"))
            {
                //通知访问跑马灯
                cs_noticemsg sss = new cs_noticemsg() {fn= "cs_noticemsg" };

                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sss));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret != 0)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "设置失败";
                }
                return Json(CommonHelper.JscriptMsg(result.Message, "/Business/NoticeList", "parent.loadMenuTree"));
            }
            return Json(CommonHelper.JscriptMsg(result.Message, "#", "parent.loadMenuTree"));
        }
        #endregion
        public ActionResult FeedbackList()
        {
            return View();
        }

        /// <summary>
        /// 删除公告
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult FeedBackDel(string ids)
        {
            //nav_name = "feedback_list";
            //action_type = DTEnums.ActionEnum.Delete.ToString();
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "FeedbackList", "parent.loadMenuTree"));
            var result = _feedBackService.FeedBackDelById(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "FeedbackList", "parent.loadMenuTree"));
        }
        /// <summary>
        /// 获取反馈信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetFeedbackData(DPage page)
        {
            var result = _feedBackService.GetFeedBackData(page);
            string pageUrl = Utils.CombUrlTxt("FeedbackList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        public ActionResult Gmmgr()
        {
            return View();
        }
        public ActionResult LoginLog(DPage page)
        {

            var data = _feedBackService.GetUserLoginData(page);
            string pageUrl = Utils.CombUrlTxt("LoginLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        public JsonResult LoginLogDel(string ids)
        {

            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "LoginLog", "parent.loadMenuTree"));
            var result = _feedBackService.DelUserLoginLog(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "LoginLog", "parent.loadMenuTree"));
        }
        public ActionResult ActivecodeList()
        {
            return View();
        }
        public ActionResult LoginCountList()
        {
            return View();
        }

        public ActionResult OrderManage()
        {
            return View();
        }
        public ActionResult UserBankList()
        {
            return View();
        }
        public ActionResult UserBankEdit()
        {
            return View();
        }
        /// <summary>
        /// 获取商品信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCommodiyData(DPage page)
        {
            var result = _commoditService.GetCommodiyData(page);
            string pageUrl = Utils.CombUrlTxt("OrderManage", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        public ActionResult OrderEdit()
        {
            return View();
        }
        /// <summary>
        /// 保存商品信息
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveCommodit(CommodiyView model)
        {
            //var host = DTRequest.GetHost() + ":" + HttpContext.Request.Url.Port;
            //var scheme = Request.Url.Scheme;
            //return Json(_commoditService.SaveCommodiy(model, host, scheme));
            return Json(_commoditService.SaveCommodiy(model));
        }
        /// <summary>
        /// 删除商品信息
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DelCommodiy(string ids)
        {
            return Json(_commoditService.DelCommodiy(ids));
        }
        /// <summary>
        /// 获取商品信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCommodiyById(int id)
        {
            return Json(_commoditService.GetCommodiyById(id));
        }
        public ActionResult RankingList()
        {
            return View();
        }
        /// <summary>
        /// 获取游戏排行信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameRankData(DPagePara page)
        {
            var result = _gameService.GetGameRankData(page);
            string pageUrl = Utils.CombUrlTxt("RankingList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        #region 充值管理
        public ActionResult ChargeLogList()
        {
            return View();
        }
        /// <summary>
        /// 充值记录查询
        /// </summary>
        /// <param name="page"></param>
        /// <param name="selectKeywords"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetChargeLogData(DPagePara page, string selectKeywords)
        {

            var result = _rechargeService.GetChargeLogDataInfo(page, selectKeywords);
            string pageUrl = Utils.CombUrlTxt("ChargeLogList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);

        }
        //充值总计
        public ActionResult ChargeZj(DPagePara page, string types)
        {
            var result = _rechargeService.ChargeZJ(page, types);
            return Content((Convert.ToInt32(result) / 100).ToString());
        }
        public ActionResult GetChargeLogExportData(DPagePara page, string selectKeywords)
        {
            var result = _rechargeService.GetChargeLogData(page, selectKeywords);
            if (result.isExport == 1)
                return File(result.filebyte, "application/vnd.ms-excel", "ExportData.xls");
            else return Content("无数据导出！");
        }

        public ActionResult ChargeLogStatistics(DPagePara page)
        {

            var result = _rechargeService.GetChargeLogStatistics(page);
            string pageUrl = Utils.CombUrlTxt("ChargeLogStatistics", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return View(result);
        }
        /// <summary>
        /// 充值排行
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public ActionResult ChargeLogRanking(DPagePara page)
        {
            var result = _rechargeService.ChargeLogRanking(page);
            string pageUrl = Utils.CombUrlTxt("ChargeLogRanking", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return View(result);
        }

        /// <summary>
        /// 获取游戏商城兑换记录
        /// </summary>
        /// <param name="page"></param>
        /// <param name="comType"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GameExchangerecord(DPage page, int comType = -1)
        {
            var result = _shopService.GetShopLog(page, comType);
            string pageUrl = Utils.CombUrlTxt("ChargeLogList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取商品选项下拉框数据
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCommodiy()
        {
            Type t = typeof(CommodiyType);
            var tempList = new List<EnumView>();
            foreach (var item in StringHelper.EnumToDic(t))
            {
                var temp = new EnumView { Key = item.Key, Value = item.Value };
                tempList.Add(temp);

            }
            DataResults<EnumView> result = new DataResults<EnumView>();
            result.Data = tempList;
            result.Message = "获取成功";
            return Json(result);
        }
        public ActionResult ShoppingLogList()
        {
            return View();
        }
        public ActionResult Takenowlist()
        {
            ViewBag.RoleId = manager.role_id;
            return View();
        }

        /// <summary>
        /// 获取提现列表
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetTakeNowToExamineData(DPagePara page)
        {
            var result = _takeService.GetTakeNowData(page, manager.role_id.Value);
            if (page.isExport == 1)
            {
                return File(result.filebyte, "application/vnd.ms-excel", "提现数据.xls");
            }
            string pageUrl = Utils.CombUrlTxt("TakenowToExamine", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取提现列表
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult GetTakeNowData(DPagePara page)
        {
            var result = _takeService.GetTakeNowData(page, manager.role_id.Value);
            if (page.isExport == 1)
            {
                return File(result.filebyte, "application/vnd.ms-excel", "提现数据.xls");
            }
            string pageUrl = Utils.CombUrlTxt("Takenowlist", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        //提现总计
        public ActionResult TiXianZj(DPagePara page)
        {
            var result = _takeService.TiXianZJ(page);
            return Content((Convert.ToInt32(result) / 100).ToString());
        }
        public ActionResult GetTakeNowData2(DPagePara page)
        {
            var result = _takeService.GetTakeNowData(page, manager.role_id.Value);
            return File(result.filebyte, "application/vnd.ms-excel", "提现数据.xls");
        }
        #endregion
        public ActionResult DayRegUser()
        {
            return View();
        }
        public ActionResult AgentuserEdit()
        {
            return View();
        }
        public ActionResult AgentuserList()
        {
            return View();
        }
        public ActionResult UserEdit()
        {
            return View();
            //if (manager.role_id.Equals(1))
            //{
            //    return View();
            //}
            //else
            //{
            //    return View(CommonHelper.JscriptMsg("没有权限！", "/Business/UserList", "parent.loadMenuTree"));
            //}
        }
        public ActionResult UserList()
        {
            return View();
        }
        public ActionResult FirstProxy()
        {
            return View();
        }
        public ActionResult BrokerageList()
        {
            return View();
        }
        public ActionResult ConvertList()
        {
            return View();
        }
        public ActionResult ConvertRes()
        {
            return View();
        }
        /// <summary>
        /// 重置银行密码和登陆密码
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="passwordType"></param>
        /// <returns></returns>
        public ActionResult RestBankPassWord(int userid, string passwordType)
        {
            var newpassword = StringHelper.GetRandomSys(123456, 999999);
            VerifyCodeHelper codehelper = new VerifyCodeHelper();
            string result = string.Empty;
            if (manager.role_id.Equals(1))
            {
                if (passwordType == "bank")
                {
                    var entity = _snsUserInfo.GetEntityByWhere(w => w.UserId == userid);

                    if (entity.Mobile != null)
                    {
                        cs_restpasswrod sc_data = new cs_restpasswrod() { fn = "cs_restbankpasswrod", userid = userid, password = newpassword.ToString() };
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sc_data));
                        string _content = Utils.HttpGet(_url + _data);
                        sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                        result = _scsetcard._info;
                        if (!string.IsNullOrEmpty(entity.Mobile) && PageValidate.IsPhone(entity.Mobile))
                        {

                            if (_scsetcard._ret != 0)
                            {
                                Log.Error("重置银行密码", _scsetcard._info);
                                result = _scsetcard._info;

                            }
                            else
                            {
                                int verifycode = 0;
                                manageLogservice.AddActionlog(ActionEnum.Restore, OptAction.resetcardpwd, ActionEnum.Restore.ToDescription() +
                                    OptAction.resetcardpwd.ToDescription() + "用户ID:" + sc_data.userid);
                                codehelper.CreateCode(entity.Mobile, 3, out verifycode, newpassword);
                            }
                        }
                        else
                        {
                            result = "当前用户不存在或者手机号码错误";
                        }
                    }
                    else
                    {
                        result = "当前用户手机号码有误";
                    }
                }
                else
                {
                    var entity = _snsUserInfo.GetEntityByWhere(w => w.UserId == userid);
                    if (entity != null)
                    {
                        if (!string.IsNullOrEmpty(entity.Mobile) && PageValidate.IsPhone(entity.Mobile))
                        {
                            entity.PassportPwd = StringHelper.RegUser_MD5_Pwd(newpassword.ToString());
                            Log.Info(newpassword.ToString(), entity.PassportPwd);
                        }
                        else
                        {
                            entity.PassportPwd = StringHelper.RegUser_MD5_Pwd("123456");
                            result = "当前用户不存在或者手机号码错误";
                        }
                        var upResult = _snsUserInfo.UpdateEntity(entity);
                        {
                            
                            if (upResult != null)
                            {
                                int verifycode = 0;
                                manageLogservice.AddActionlog(ActionEnum.Restore, OptAction.resetcardpwd, ActionEnum.Restore.ToDescription() +
                                    OptAction.resetcardpwd.ToDescription() + "用户ID:" + entity.UserId);
                                codehelper.CreateCode(entity.Mobile, 3, out verifycode, newpassword);
                                result = "重置成功";
                            }
                        }
                    }
                    else
                    {
                        result = "当前用户手机号码有误";
                    }

                }
            }
            else
            {
                result = "权限不够!";
            }
            return Content("<script>" + CommonHelper.JscriptMsg(result, "UserList") + "</script>");
        }
        /// <summary>
        /// 获取游戏用户列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameUserData(DPagePara page)
        {
            var result = _gameUserService.GetGameUserData(page, manager.role_id.Value);
            result.RoleId = manager.role_id.Value;

            string pageUrl = Utils.CombUrlTxt("UserList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        [HttpPost]
        public JsonResult GetGameUserDataForCustomer(DPage page)
        {
            var result = _gameUserService.GetGameUserDataForCustomer(page, manager.role_id.Value);
            string pageUrl = Utils.CombUrlTxt("UserList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 根据ID获取用户信息
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameUserById(int userId)
        {
            var result = _gameUserService.GetGameUserByID(userId);
            result.Data.RoleType = manager.role_type.Value;
            return Json(result);
        }
        #region 游戏用户信息编辑设置 修改
        public ActionResult DialogAgent()
        {
            return View();
        }
        public ActionResult DialogAgent1()
        {
            return View();
        }

        public ActionResult DialogCharge()
        {
            return View();
        }
        public ActionResult DialogLocktime()
        {
            return View();
        }
        public ActionResult DialogRewrite()
        {
            return View();
        }
        public ActionResult DialogRobot()
        {
            return View();
        }

        public ActionResult DialogWechat()
        {
            return View();
        }
  
 

        //[LoginFilter(IsCheck = false)]
        //[HttpGet]
        //public ContentResult UserCashMoney(string json)
        //{
        //    Crazy2018_Sys_Service.SignalEntitiy2.cs_cashmoney ccdata = JsonHelper.JSONToObject<Crazy2018_Sys_Service.SignalEntitiy2.cs_cashmoney>(json);
        //    string checkResult = _RechargeRecordService.CheckUserCashMoney(ccdata.UserId, ccdata.CmMoney, ccdata.pwd, ccdata.account, ccdata.UserName, ccdata.accounttype, ccdata.Remark);
        //    Crazy2018_Sys_Service.SignalEntitiy2.sc_cashmoney check = JsonHelper.JSONToObject<Crazy2018_Sys_Service.SignalEntitiy2.sc_cashmoney>(checkResult);
        //    if (check.result != 1)
        //        return Content(checkResult);

        //    cs_charge_gm _setcard = new cs_charge_gm() { fn = "cs_charge_gm" };
        //    _setcard.gameid = 4;
        //    _setcard.userid = ccdata.UserId;// 1380162;      
        //    _setcard.type = 2;
        //    _setcard.money = ccdata.CmMoney;
        //    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
        //    string _content = Utils.HttpGet(_url + _data);

        //    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
        //    if (_scsetcard._ret != 0)
        //    {
        //        return Content(JsonHelper.ObjectToJSON(new Crazy2018_Sys_Service.SignalEntitiy2.sc_cashmoney() { result = -7, fn = "sc_cashmoney" }));
        //    }
        //    else
        //    {
        //        var res = _RechargeRecordService.UserCashMoney(ccdata.UserId, ccdata.CmMoney, ccdata.pwd, ccdata.account, ccdata.UserName, ccdata.accounttype, ccdata.Remark);
        //        NoticeChat.Instance.SendSystemMsgEx<string>("10", new List<string>() { "10" });
        //        return Content(res);
        //    }
        //}


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
        public JsonResult DialogCharge(int type, float money, int uid, string remarks)
        {
           
            DataResult result = new DataResult();
           
            result.Message = "操作成功";
            try
            {
                //admin和充值
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4))
                {
                    if (type < 0 || uid < 0 || money <= 0)
                    {
                        Log.Error("充值金币", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_charge_gm _setcard = new cs_charge_gm() { fn = "cs_charge_gm" };
                    _setcard.gameid = 4;
                    _setcard.userid = uid;// 1380162;      
                    _setcard.type = type;
                    _setcard.money = money * 100;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(_url + _data);

                    Log.Error("HttpGet", _content);
                    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        Log.Error("充值金币", _scsetcard._info);
                        result.Code = (int)Status.fail;
                        result.Message = "充值失败";
                    }
                    else
                    {
                        //tuserrechargelog chargeLog = new tuserrechargelog();
                        //chargeLog.cointype = type;
                        //chargeLog.createtime = DateTime.Now;
                        //chargeLog.fromtype = 1;
                        //chargeLog.fromadminid = manager.id;
                        //chargeLog.fromuserid = 0;
                        //chargeLog.money = (decimal)money;
                        //chargeLog.remarks = remark;
                        //chargeLog.oldmoney = _scsetcard.UserMoney;
                        //chargeLog.userid = uid;
                        //var entity = _rechargeLogService.AddEntity(chargeLog);
                        //if (entity == null)
                        //{
                        //    Log.Error("充值金币", "充值金币成功添加金币日志失败");
                        //    result.Code = (int)Status.fail;
                        //    result.Message = "充值金币成功添加金币日志失败";
                        //}

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
                            Remark = "人工充值金币",
                            GoldCount = (decimal)money * 100,
                            IsHandel = true
                        };
                        _RechargeRecordService.AddEntity(rre);
                        manageLogservice.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "金额:" + money + ",用户:" + uid);
                    }
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "您权限不够!";
                }
            }
            catch (Exception ex)
            {
                Log.Error("充值金币", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "充值失败";
            }
            return Json(result);
        }
        /// <summary>
        /// 设置锁定时间
        /// </summary>
        /// <param name="action"></param>
        /// <param name="uid"></param>
        /// <param name="locktime"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DialogLocktime(int uid, string locktime)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                if (string.IsNullOrEmpty(locktime))
                {
                    Log.Error("设置锁定时间", "参数不能为空");
                    result.Code = (int)Status.fail;
                    result.Message = "参数不能为空";
                    return Json(result);
                }
                cs_setlocktime_gm _setcard = new cs_setlocktime_gm() { fn = "cs_setlocktime_gm" };
                _setcard.gameid = 4;
                _setcard.userid = uid;// 1380162;
                _setcard.locktime = locktime;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret != 0)
                {
                    Log.Error("设置锁定时间", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "设置失败";
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.lockuser, ActionEnum.Set.ToDescription() +
                        OptAction.lockuser.ToDescription() + "用户:" + uid);
                }
            }
            catch (Exception ex)
            {
                Log.Error("设置锁定时间", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "设置失败";
            }
            return Json(result);
        }
        /// <summary>
        /// 设置机器人胜率
        /// </summary>
        /// <param name="action"></param>
        /// <param name="uid"></param>
        /// <param name="level"></param>
        /// <param name="winpercent"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DialogRobot(int uid, int level, int winpercent)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                cs_setrobot_gm _setcard = new cs_setrobot_gm() { fn = "cs_setrobot_gm" };
                _setcard.type = 1;
                _setcard.userid = uid;//1380162;
                _setcard.isrobot = 1;
                _setcard.winpercent = winpercent;
                _setcard.robotlevel = level;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret != 0)
                {
                    Log.Error("设置机器人胜率", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = _scsetcard._info;
                }
                else
                {
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.RobotWinning, ActionEnum.Set.ToDescription() +
                        OptAction.RobotWinning.ToDescription() + ",胜率:" + winpercent + ",机器人:" + uid);
                }
            }
            catch (Exception ex)
            {
                Log.Error("设置机器人胜率", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "设置失败";
            }
            return Json(result);
        }
        public ActionResult SetRobotWinpercent(int RobotId,int Winpercent)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";

            try
            {
                var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == RobotId);
                if (gameentity != null)
                {
                    if (gameentity.isRobot == 1)
                    {
                        cs_setrobot_gm _setcard = new cs_setrobot_gm() { fn = "cs_setrobot_gm" };
                        _setcard.userid = RobotId;
                        _setcard.isrobot = 1;
                        _setcard.robotlevel = 1;
                        _setcard.winpercent = Winpercent;
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                        string _content = Utils.HttpGet(_url + _data);
                        sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                        if (_scsetcard._ret != 0)
                        {
                            result.Code = (int)Status.fail;
                            result.Message = _scsetcard._info;
                        }
                        else
                        {
                            manageLogservice.AddActionlog(ActionEnum.Set, OptAction.RobotWinning, ActionEnum.Set.ToDescription() +
                                OptAction.RobotWinning.ToDescription() + ",Id:" + RobotId+"胜率:"+ Winpercent);
                        }
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "此用户不是机器人";
                    }

                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "用户不存在";
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "erro";
            }
            return Json(result);

        }



        public ActionResult SetRobotnikeName(int RobotId,string RobotnikeName)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                var gameentity = _gameUserService.GetEntityByWhere(st => st.UserID == RobotId);
                if (gameentity!=null)
                {
                    if (gameentity.isRobot==1)
                    {
                        cs_setrobot_gm _setcard = new cs_setrobot_gm() { fn = "cs_setrobot_gm" };
                        _setcard.userid = RobotId;
                        _setcard.isrobot = 1;
                        _setcard.nikename = RobotnikeName;
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                        string _content = Utils.HttpGet(_url + _data);
                        sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                        if (_scsetcard._ret != 0)
                        {
                            result.Code = (int)Status.fail;
                            result.Message = _scsetcard._info;
                        }
                        else
                        {
                            manageLogservice.AddActionlog(ActionEnum.Set, OptAction.RobotNikename, ActionEnum.Set.ToDescription() +
                                OptAction.RobotNikename.ToDescription() + ",昵称:" + RobotnikeName);
                        }
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "此用户不是机器人";
                    }
                    
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "用户不存在";
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "erro";
            }
            return Json(result);
        }

        /// <summary>
        /// 修改账户信息
        /// </summary>
        /// <param name="action"></param>
        /// <param name="uid"></param>
        /// <param name="wechatname"></param>
        /// <param name="headurl"></param>
        /// <param name="txtAgentId"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DialogWechat(int uid, string wechatname, string headurl, string txtAgentId)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            try
            {
                cs_setuserdes_gm _setcard = new cs_setuserdes_gm() { fn = "cs_setuserdes_gm" };
                _setcard.gameid = 4;
                _setcard.userid = uid;// 1380162;
                _setcard.webname = wechatname;
                _setcard.headinfo = headurl;
                _setcard.AgentId = string.IsNullOrEmpty(txtAgentId) ? "0" : txtAgentId;
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Utils.HttpGet(_url + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret != 0)
                {
                    Log.Error("修改账户信息", _scsetcard._info);
                    result.Code = (int)Status.fail;
                    result.Message = "设置失败";
                }
            }
            catch (Exception ex)
            {
                Log.Error("修改账户信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "修改失败";
            }
            return Json(result);
        }
        #endregion
        /// <summary>
        /// 设置提现记录状态
        /// </summary>
        /// <param name="id">提现记录id</param>
        /// <param name="state"> 0 申请提现 1 已扣除金币 2 已提现</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SetTakeNowState(SetTakeNowModel data)
        {
            return Json(_TakeNowRecordService.SetTakeNowState(data.id, data.state));
        }
        /// <summary>
        /// 生成初始推荐码
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SetActiveCode()
        {
            return Json(_activeService.Initi26Code());
        }
        /// <summary>
        /// 生成初始代理
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult CreateInitAgencyCode()
        {
            var scheme = Request.Url.Scheme;
            var agenCode = StringHelper.GetCheckCode(12);
            var url = scheme + "://" + _domain + "/Game/PublicizeRegistered?agentId=" + agenCode;
            var qrCodePath = scheme + "://" + Request.Url.Host + ":" + Request.Url.Port + StringHelper.CreateQRCode(url);
            var result = _initAgencyService.Create(agenCode, qrCodePath);
            return Json(result);
        }
        /// <summary>
        /// 获取初始代理信息列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetInitAgencyData(DPage page)
        {
            var result = _initAgencyService.GetData(page);
            string pageUrl = Utils.CombUrlTxt("FirstProxy", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取佣金领取记录
        /// 
        ///   领取状态 0.成功 -1.失败 -2;游戏服务器扣除金币失败
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetProfitLogData(DPage page)
        {
            var result = _profitService.GetProfitLogs(page);
            string pageUrl = Utils.CombUrlTxt("BrokerageList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 获取用户联系方式数据
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetUserContactData(DPage page)
        {
            var result = _userContactService.GetData(page);
            string pageUrl = Utils.CombUrlTxt("ConvertList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }
        /// <summary>
        /// 设置订单状态
        /// </summary>
        /// <param name="orderNo"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SetShopLogState(string orderNo)
        {
            var result = _shopService.SetShopState(orderNo);
            return Json(result);
        }
        /// <summary>
        /// 保存银行卡
        /// </summary>
        /// <param name="name">开户人名字</param>
        /// <param name="cardNo">银行卡号</param>
        /// <param name="bankAddress">开户地址</param>
        /// <param name="Location">开户区域</param>
        /// <param name="id">数据id</param>
        /// <param name="userId">用户id</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult SaveBankCard(string name, string cardNo, string bankAddress, string Location, int id = -1, string userId = "-1")
        {
            var ret = _bankCardService.Save(name, cardNo, bankAddress, Location, id, userId);
            return Json(ret);
        }
        /// <summary>
        /// 获取银行卡信息
        /// </summary>
        /// <param name="page">page.Keywords 搜索条件用户id 开户区域 开户人姓名</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCardData(DPage page)
        {
            var ret = _bankCardService.GetCardData(page);
            string pageUrl = Utils.CombUrlTxt("ConvertList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(ret.PageSize, ret.PageIndex, ret.TotalCount, pageUrl, 8, true);
            ret.InnerHtml = InnerHtml;
            return Json(ret);
        }
        /// <summary>
        /// 删除银行卡
        /// </summary>
        /// <param name="id">数据id</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult deleteCard(int id)
        {
            var ret = _bankCardService.deleteCard(id);
            return Json(ret);
        }
        /// <summary>
        /// 根据ID获取银行卡信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetCardById(int id)
        {
            return Json(_bankCardService.GetBankCardById(id));
        }

        public ActionResult DialAwardList()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetDialAwardData(DPage page)
        {
            var result = _turnTablePrizeService.GetTurnTablePrizeData(page);
            string pageUrl = Utils.CombUrlTxt("DialAwardList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        public ActionResult DialAwardEdit()
        {
            return View();
        }


        public ActionResult SaveDialAward(TurnTablePrizeView model)
        {
            DataResult result = new DataResult();
            result.Message = "保存成功";
            try
            {
                turntableprize ttp = new turntableprize();

                ttp.id = model.Id;
                ttp.name = model.Name;
                ttp.price = model.Price;
                ttp.prizeurl = model.Prizeurl;
                ttp.probability = model.Probability;
                ttp.prizetype = model.Prizetype;
                ttp.levelid = model.Levelid;

                _turnTablePrizeService.UpdateEntity(ttp);

                result.Code = (int)Status.Success;
                result.Message = "保存成功";

            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "保存失败";
            }
            return Json(result);
        }

        public ActionResult DialAwardLog()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetDialAwardLogData(DPage page)
        {
            var result = _tuserPrizeLogService.GetTuserPrizeLogData(page);
            string pageUrl = Utils.CombUrlTxt("DialAwardLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        #region 查看手牌   
        public ActionResult SeeHandCard(int tableid)
        {
            DataResult result = new DataResult();
            cs_seehandcard bgm = new cs_seehandcard() { fn = "cs_seehandcard" };
            bgm.tableId = tableid;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_seehandcard _scsetcard = JsonHelper.JSONToObject<sc_seehandcard>(_content);
            if (_scsetcard._ret != 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "查看失败";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(_scsetcard.pokerlist);
            }

            return View("/Gmmgr/UserPokerList", _scsetcard.pokerlist);
        }


        [HttpPost]
        public ActionResult TestMaxPoker()
        {
            DataResult result = new DataResult();
            cs_maxrebotpoker bgm = new cs_maxrebotpoker() {fn= "cs_maxrebotpoker" };

            var bptype = Enum.GetValues(typeof(Whirl2PokerType));
            Random rd = new Random();
            List<int> num = new List<int>();
            for (int i = 0; i < 4; i++)
            {
                int rand = rd.Next(0, bptype.Length);
                
                num.Add((int)bptype.GetValue(rand));
            }
            bgm.rand = num;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
            string _content = HttpService.GetHttp(_url, _data);
            sc_maxrebotpoker _scsetcard = JsonHelper.JSONToObject<sc_maxrebotpoker>(_content);
            if (_scsetcard._ret != 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "查看失败";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(_scsetcard.pokerlist);
            }
            pokerlistview data = new pokerlistview
            {
                pokerlist = _scsetcard.pokerlist.Select(t =>  "/img/whirl_card/" + t + ".png").ToList(),
                randpokerlist = _scsetcard.randpokerlist.Select(t => "/img/whirl_card/" + t + ".png").ToList()
            };
            return View("/Gmmgr/TestMaxPoker", data);
            //cs_maxrebotpoker
        }


        #endregion


        public ActionResult RobotManage()
        {
            return View();

        }

 

        /// <summary>
        /// 查询所有机器人
        /// </summary>
        /// <param name="page"></param>
        /// <param name="isRobot"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetRobotUserData(DPage page)
        {
            var result = _gameUserService.GetGameUserData(page, manager.role_id.Value, 1);
            result.RoleId = manager.role_id.Value;

            string pageUrl = Utils.CombUrlTxt("UserList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);

        }

        public ActionResult TakenowToExamine()
        {

            return View();
        }

        /// <summary>
        /// 获取机器人状态
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetRobotState(string ids)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";

            cs_robotids _setrobot = new cs_robotids() { fn = "cs_robotids" };
            _setrobot.ids = ids.Split(',');
            _setrobot.idslength = ids.Split(',').Length;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setrobot));
            string _content = Utils.HttpGet(_url + _data);
            sc_rebotstate_gm _scsetcard = JsonHelper.JSONToObject<sc_rebotstate_gm>(_content);
            if (_scsetcard._ret != 0)
            {
                Log.Error("_scsetcard", _scsetcard._info);
                result.Code = (int)Status.fail;
                result.Message = "发送失败";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = JsonHelper.ObjectToJSON(_scsetcard.robotstate);
            }
            return Json(result);
        }

        public JsonResult RobotKickOutRoom(int uid)
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";

            cs_RobottKickOut rko = new cs_RobottKickOut();
            rko.fn = "cs_RobottKickOut";
            rko.uId = uid;

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(rko));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret != 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "操作失败!";
            }
            else
            {
                result.Code = (int)Status.Success;
                result.Message = _scsetcard._info;
            }
            return Json(result);


        }


    }
}
