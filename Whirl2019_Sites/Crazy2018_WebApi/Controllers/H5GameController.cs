using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_Interface.h5Game;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.H5Game;
using Crazy2018_WebApi.App_Start;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;



namespace Crazy2018_WebApi.Controllers
{
   
    public class H5GameController : ApiController
    {

        private readonly ISnsUserInfo _snsService;
        private readonly IActiveCodeService _activeService;
        private readonly IVerifyCodeService _verifyCodeService;
        private readonly IUserContactService _userContactService;
        private readonly IGameUserService _gameUserService;
        private readonly ITakeNowRecordService _TakeNowRecordService;
        private readonly IRechargeRecordService _RechargeRecord;
        private readonly IEmailService _emailService;
        private readonly IGameService _guser;
        private readonly IRechargeChannelService _rechargechannel;
        private readonly INoticeService _noticeService;
        private readonly IVisualTableService _ivisualtable;
        private readonly IWhirlUserAgentService AgentService2019;
        private readonly string imaurl = ConfigurationManager.AppSettings["imgurl"];
        private readonly ITContactService _contactserver;
        private readonly ISysConfigService _ConfigService;
        private readonly IGameLogoService _gamelogo;
        private readonly IGameUserInfoService _gameinfoservice;
        private readonly IManageService _manageService;
        private readonly IManageLogService _manageLogService;
        private readonly ItslotconfigService _itslotconfig;
        private readonly ItjackpotstocklogService _itjackpotstocklogService;
        string _url = "http://127.0.0.1:8081/ContorlService?data=";
        private readonly ItgameinfoService _itgameinfo;
        private readonly Ith5menuService _ith5Menu;
        private readonly ItjackpotstockService _Itjackpotstock;
        private readonly Ituserh5Service _ituserh5Service;
        private readonly ItjackpotlogService _itjackpotlog;
        //List<MenuView> menuViews = new List<MenuView>();

        public H5GameController(ISnsUserInfo snsService,
            IActiveCodeService activeService,
            IVerifyCodeService verifyCodeService,
            IUserContactService userContactService,
            IGameUserService gameUserService,
            ITakeNowRecordService TakeNowRecordService,
            IRechargeRecordService RechargeRecord,
            IEmailService emailService,
            IRechargeChannelService rechargechannel,
            INoticeService noticeService,
            IVisualTableService ivisualtable,
            IWhirlUserAgentService _AgentService2019,
            ITContactService contactserver,
            ISysConfigService ConfigService,
            IGameLogoService gamelogo,
            IGameService guser,
            IGameUserInfoService gameinfoservice,
            IManageService manageService,
            IManageLogService manageLogService,
            ItslotconfigService itslotconfig,
            ItjackpotstocklogService itjackpotstocklogService,
            ItgameinfoService itgameinfo,
            Ith5menuService ith5Menu,
            ItjackpotstockService Itjackpotstock,
            Ituserh5Service ituserh5Service,
            ItjackpotlogService itjackpotlog
            )
        {
            _snsService = snsService;
            _activeService = activeService;
            _verifyCodeService = verifyCodeService;
            _userContactService = userContactService;
            _gameUserService = gameUserService;
            _TakeNowRecordService = TakeNowRecordService;
            _RechargeRecord = RechargeRecord;
            _emailService = emailService;
            _rechargechannel = rechargechannel;
            _noticeService = noticeService;
            _ivisualtable = ivisualtable;
            AgentService2019 = _AgentService2019;
            _manageService = manageService;
            _contactserver = contactserver;
            _ConfigService = ConfigService;
            _gamelogo = gamelogo;
            _guser = guser;
            _gameinfoservice = gameinfoservice;
            _manageLogService = manageLogService;
            _itslotconfig = itslotconfig;
            _itjackpotstocklogService = itjackpotstocklogService;
            _itgameinfo = itgameinfo;
            _ith5Menu = ith5Menu;
            _Itjackpotstock = Itjackpotstock;
            _ituserh5Service = ituserh5Service;
            _itjackpotlog = itjackpotlog;
        }

        /// <summary>
        /// 获取菜单树
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [WebApiExceptionFilter]
        public IHttpActionResult RoolTree(int roleid)
        {

            return Json(new { Code = 1, Message = "请求成功!", Data = 2 });
        }
        /// <summary>
        /// 登录
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult Login(string name, string pwd)
        {
            try
            {
                var returnMsg = string.Empty;
                if (string.IsNullOrEmpty(pwd) || string.IsNullOrEmpty(name))
                {
                    return Json(new { success = false, Message = "请输入用户名或密码!", Data = -1 });
                }
                var result = _manageService.Login(name, pwd);
                if (result == null)
                {
                    _manageLogService.AddEntity(
                        new dt_manager_log
                        {
                            user_name = name,
                            action_type = DTEnums.ActionEnum.Login.ToString(),
                            remark = "用户名或密码有误，请重试！",
                            user_ip = DTRequest.GetIP(),
                            user_id = null
                        });
                    return Json(new { success = false, Message = "用户名或密码有误，请重试!", Data = -1 });
                }
                else
                {
                    //string url = Request.Url.Host;
                    string urlipv4 = GetIP4Address();

                    if (result.is_lock == 1)
                    {
                        return Json("该账号无权限登陆！");
                    }
                    if (result.IP == "0.0.0.0" || result.IP == urlipv4)
                    {
                        CacheHelper.Insert(DTKeys.SESSION_ADMIN_INFO, result);

                        _manageLogService.AddEntity(new dt_manager_log
                        {
                            user_name = name,
                            action_type = DTEnums.ActionEnum.Login.ToString(),
                            remark = "用户登录",
                            user_ip = DTRequest.GetIP(),
                            user_id = result.id,
                            add_time = DateTime.Now
                        });
                        //写入Cookies
                        Utils.WriteCookie("DTRememberName", name, 14400);
                        Utils.WriteCookie("AdminName", "Loach", name);
                        Utils.WriteCookie("AdminPwd", "Loach", pwd);
                        return Json(new { success = true, Message = "登录成功!", Data = 0 });
                    }
                    else { return Json(new { success = false, Message = "该地址无权限登陆!", Data = -1 }); }
                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, Message = "系统错误！请联系管理员!", Data = -1 });
            }
        }

        [HttpPost]
        [WebApiExceptionFilter]
        public DataTable GetSlotDate(int pageindex, int pagesize)
        {
            try
            {
                var returnMsg = string.Empty;

                DPage page = new DPage();
                page.PageIndex = pageindex;
                page.PageSize = pagesize;
                var result = _itslotconfig.GetSlotData(page);
                if (result == null)
                {
                    return null;
                }
                else
                {
                    return result.table;
                }
            }
            catch (Exception ex)
            {

                return null;
            }

        }

        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult AddSlot(string slotinfo, string roomid, string gameid)
        {
            try
            {
                var returnMsg = string.Empty;
                //前端如何保证传递过来的是json格式的数据
                //前端传递的配置数据转换为json 
                var result = "";
                if (result == null)
                {
                    return Json(new { success = true, Message = "获取成功", Data = result });
                }
                else
                {
                    return Json(new { success = false, Message = "获取失败", Data = result });
                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, Message = "获取失败", Data = -1 });
            }

        }

        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetSlotConfig(int id)
        {
            try
            {
                var returnMsg = string.Empty;
                //前端如何保证传递过来的是json格式的数据
                //前端传递的配置数据转换为json 
                var result = _itslotconfig.GetSlotById(id);

                if (result == null)
                {
                    return Json(new { success = true, Message = "获取成功", Data = result });
                }
                else
                {
                    return Json(new { success = false, Message = "获取失败", Data = result });
                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, Message = "获取失败", Data = -1 });
            }

        }

        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetSlotConfigInfo(int id)
        {
            try
            {
                var returnMsg = string.Empty;
                //前端如何保证传递过来的是json格式的数据
                //前端传递的配置数据转换为json 
                var result = _itslotconfig.GetSlotConfigById(id);

                if (result == null)
                {
                    return Json(new { success = true, Message = "获取成功", Data = result });
                }
                else
                {
                    return Json(new { success = false, Message = "获取失败", Data = result });
                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, Message = "获取失败", Data = -1 });
            }

        }

        /// <summary>
        /// 修改配置信息
        /// </summary>
        /// <param name="id">配置id</param>
        /// <param name="config">相信配置json字符串</param>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult UpdateSlot(int id, string config)
        {
            try
            {
                var returnMsg = string.Empty;
                var slot = _itslotconfig.GetSlotById(id);
                slot.Config = config;
                var result = _itslotconfig.UpdateEntity(slot);

                if (result == null)
                {
                    return Json(new { success = true, Message = "修改成功", Data = result });
                }
                else
                {
                    return Json(new { success = false, Message = "修改失败", Data = result });
                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, Message = "获取失败", Data = -1 });
            }

        }

        #region 库存信息统计



        /// <summary>
        /// 获取当月总输赢表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetToalData()
        {
            try
            {
                var data = _itjackpotstocklogService.GetTotalInfoData();
                var Table = DataTableHepler.ToDataTable<TotalRecordView>(data);
                return Json(new { success = true, Message = "请求成功", Data = Table });
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败", Data = "" });
            }
        }

        /// <summary>
        /// 获取当天库存日志信息
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetStockLog(int Levelid)
        {
            try
            {
                List<StockTime> stime = GetStockTime(Levelid);
                List<StockVal> sval = GetStockVal(Levelid);
                List<string> str = new List<string>();
                List<double> str2 = new List<double>();
                double maxval=0;
                double minval=0;
                foreach (var item in stime)
                {
                    str.Add(item.CreateTime.ToString("HH:mm:ss"));
                }
                foreach (var item in sval)
                {
                  
                    str2.Add((double)item.stock);
                    if (maxval==0)
                    {
                        maxval = (double)item.stock;
                        minval = (double)item.stock;
                    }
                    if ((double)item.stock<minval)//获取最小值
                    {
                        minval = (double)item.stock;
                    }
                    if ((double)item.stock > maxval)//获取最大值
                    {
                        maxval = (double)item.stock;
                    }
                }

                return Json(new { success = true, Message = "请求成功", stime = str, sval= str2,minval=minval,maxval=maxval });
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败", stime = "", sval = "" });
            }
        }

        /// <summary>
        /// 获取库存时间集合
        /// </summary>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        public List<StockTime> GetStockTime(int Levelid) {
            try
            {
                var data = _itjackpotstocklogService.GetDayTime(Levelid);
               
                return data;
            }
            catch (Exception e)
            {

                return null;
            }
        }
        /// <summary>
        /// 获取库存值集合
        /// </summary>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        public List<StockVal> GetStockVal(int Levelid)
        {
            try
            {
                var data = _itjackpotstocklogService.GetDayStock(Levelid);
             
                return data;
            }
            catch (Exception e)
            {

                return null;
            }

        }

        /// <summary>
        /// 获取历史吞吐
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetHistoryStockInAndOut(int pageindex,int pagesize,int Levelid)
        {
            try
            {
                int countnum = 0;
                var stock = _itjackpotstocklogService.GetHistoryStockInAndOut(pageindex,pagesize,Levelid);
                return Json(new { success = true, Message = "请求成功", data = stock, allcount = countnum });
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败", data = "", allcount = "" });
            }
        }
        /// <summary>
        /// 获取历史库存
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetHistoryStock(int pageindex, int pagesize, int Levelid)
        {
            try
            {
                int countnum = 0;
                var stock = _itjackpotstocklogService.GetHistoryStock(pageindex, pagesize, Levelid);
                return Json(new { success = true, Message = "请求成功", data = stock, allcount = countnum });
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败", data = "", allcount = "" });
            }
        }
        #endregion
        
        #region 修改配置
        /// <summary>
        /// 修改配置
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="levelid"></param>
        /// <param name="userCount"></param>
        /// <param name="DelayTime"></param>
        /// <param name="EnterDelayTime"></param>
        /// <param name="MaxTimes"></param>
        /// <param name="Line"></param>
        /// <param name="BetScore"></param>
        /// <param name="UserID"></param>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult UpdateGameConfig(int gameid, int levelid, int userCount, int DelayTime, int EnterDelayTime, int MaxTimes, int Line, int BetScore, int UserID) {

            try
            {
                cs_enterroom_cl _setcard = new cs_enterroom_cl() { fn = "cs_enterroom_cl" };
                _setcard.gameid = gameid;
                _setcard.levelid = levelid;
                _setcard.userCount = userCount;
                _setcard.DelayTime = DelayTime;
                _setcard.EnterDelayTime = EnterDelayTime;
                _setcard.MaxTimes = MaxTimes;
                _setcard.Line = Line;
                _setcard.BetScore = BetScore;
                _setcard.UserID = UserID;

            // http://127.0.0.1:8081/ContorlService?data={"gameid":251,"levelid":2511,"fn":"cs_enterroom_cl","userCount":10,"DelayTime":100,"EnterDelayTime":100,"MaxTimes":1000,"Line":9,"BetScore":100,"UserID":10274}
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Utils.HttpGet(_url + _data);

                Log.Error("HttpGet", _content);
             sc_enterroom_cl _scsetcard = JsonHelper.JSONToObject<sc_enterroom_cl>(_content);
                if (_scsetcard.fn != "")
                {
                    return Json(new { success = true, Message = "请求成功", gameid = _scsetcard.gameid, levelid = _scsetcard.levelid,fn= _scsetcard.fn });
                }
                return Json(new { success = true, Message = "请求失败", gameid = _scsetcard.gameid, levelid = _scsetcard.levelid, fn = _scsetcard.fn });
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败", gameid = 0, levelid = 0, fn = "" });
            }
        }

        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult UpdateGameStock(int gameid,int StockValue)
        {

            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var stock = db.tjackpotstock.Where(x => x.gameid == gameid).FirstOrDefault();
                    if (stock != null)
                    {
                        stock.stock = StockValue;
                        var st = _Itjackpotstock.Update(gameid, stock);
                        if (st!=null)
                        {
                            return Json(new { success = true, Message = "请求成功" });
                        }
                    }

                }

                return Json(new { success = true, Message = "请求失败"});
            }
            catch (Exception e)
            {

                return Json(new { success = true, Message = "请求失败" });
            }
        }



        #endregion

        #region 根据分类id获取游戏列表
        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult GetGameData()
        {
            try
            {
                var data = _itgameinfo.GetGameInfoData();
                return Json(new { Code = 1, Message = "请求成功!", Data = data });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult GetGameData(int cid)
        {
            try
            {
                var data = _itgameinfo.GetGameInfoDataBycid(cid);
                return Json(new { Code = 1, Message = "请求成功!", Data = data.Data });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult GetGameDataSearch(string keyword)
        {
            try
            {
                var data = _itgameinfo.GetGameInfoDataSearch(keyword);
                return Json(new { Code = 1, Message = "请求成功!", Data = data.Data });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        #endregion
      
        #region 官网菜单


        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult GetGameMenuData()
        {
            try
            {
                List<MenuView> menus = _ith5Menu.GetAllMenu().Data.ToList();//
                var tab= DataTableHepler.ToDataTable(menus);
                BindTree(menus, null, 0);
                return Json(new { Code = 1, Message = "请求成功!", Data = treeNodes });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult GetGameMenupotionData()
        {
            try
            {
                List<MenuView> menus = _ith5Menu.GetAllMenu().Data.ToList(); //menuViews();
                var men = menus.Where(x => x.Id == 1).FirstOrDefault();
                menus.Remove(men);
                var tab = DataTableHepler.ToDataTable(menus);
                BindTree2(menus, null, 0);
                return Json(new { Code = 1, Message = "请求成功!", Data = treeNodes2 });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        /// <summary>
        /// 添加菜单
        /// </summary>
        /// <param name="menuView"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult AddMenu(th5menu  menuView)
        {
            bool issu = false;
            try
            {
              var menu=  _ith5Menu.AddEntity(menuView);
                if (menu!=null)
                {
                    issu = true;
                }
                return Json(new { Code = 0, Message = "添加成功!", Data = issu });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "添加失败!" + e.Message, Data = issu });
            }
        }
        /// <summary>
        /// 修改菜单
        /// </summary>
        /// <param name="menuView"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult UpdateMenu(int id, th5menu menuView)
        {
            bool issu = false;
            try
            {

                var menu = _ith5Menu.GetEntityByID(id);
                menu.Parentid = menuView.Parentid;
                menu.Name = menuView.Name;
                menu.Icon = menuView.Icon;
                menu.Isdisplay = menuView.Isdisplay;
                menu.Sort = menuView.Sort;
                menu.Title = menuView.Title;
                menu.Url = menuView.Url;
                menu.CareatTime = menuView.CareatTime;
              var upmenu=  _ith5Menu.UpdateEntity(menu);

                if (upmenu != null)
                {
                    issu = true;
                }
                return Json(new { Code = 0, Message = "修改成功!", Data = issu });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "修改失败!" + e.Message, Data = issu });
            }
        }
        /// <summary>
        /// 删除菜单
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult DelMenu(int id)
        {
            try
            {
                bool issu = false;
                try
                {

                    var menu = _ith5Menu.GetEntityByID(id);
                    var delmenu = _ith5Menu.DelEntity(menu);
                    if (delmenu != 0)
                    {
                        issu = true;
                    }
                    return Json(new { Code = 0, Message = "删除成功!", Data = issu });
                }
                catch (Exception e)
                {
                    return Json(new { Code = 0, Message = "删除失败!" + e.Message, Data = issu });
                }
            }
            catch (Exception e)
            {

                throw;
            }
        }


        /// <summary>
        /// 静态菜单
        /// </summary>
        /// <returns></returns>
        public List<MenuView> menuViews() {
            List<MenuView> menuViews = new List<MenuView>();

            #region
            menuViews.Add(new MenuView { Id = 1, Parentid = 0, Name = "全部游戏", Title = "全部游戏", Icon = "", Isdisplay = 1, Sort = 1, url= "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now }) ;
            menuViews.Add(new MenuView { Id = 2, Parentid = 0, Name = "分类", Title = "分类", Icon = "", Isdisplay = 1, Sort = 2, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 3, Parentid = 0, Name = "筛选", Title = "筛选", Icon = "", Isdisplay = 1, Sort = 3, url = "", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 4, Parentid = 2, Name = "街机", Title = "街机", Icon = "", Isdisplay = 1, Sort = 1, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 5, Parentid = 2, Name = "slots", Title = "slots", Icon = "", Isdisplay = 1, Sort = 2, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 6, Parentid = 3, Name = "主题", Title = "主题", Icon = "", Isdisplay = 1, Sort = 3, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 7, Parentid = 3, Name = "中奖线", Title = "中奖线", Icon = "", Isdisplay = 1, Sort = 4, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 8, Parentid = 3, Name = "语言", Title = "语言", Icon = "", Isdisplay = 1, Sort = 5, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 9, Parentid = 3, Name = "精选", Title = "精选", Icon = "", Isdisplay = 1, Sort = 6, url = "", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 10, Parentid = 3, Name = "游戏波动率", Title = "游戏波动率", Icon = "", Isdisplay = 1, url = "", Sort = 7, CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 11, Parentid = 3, Name = "最高获奖倍数", Title = "最高获奖倍数", Icon = "", Isdisplay = 1, Sort = 7, url = "", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 12, Parentid = 6, Name = "全部主题", Title = "全部主题", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 13, Parentid = 6, Name = "3D游戏", Title = "3D游戏", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 14, Parentid = 6, Name = "中国主题", Title = "中国主题", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 15, Parentid = 6, Name = "亚洲主题", Title = "亚洲主题", Icon = "", Isdisplay = 1, Sort = 4, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 16, Parentid = 6, Name = "欧美主题", Title = "欧美主题", Icon = "", Isdisplay = 1, Sort = 5, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 17, Parentid = 7, Name = "全部线数", Title = "全部线数", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 18, Parentid = 7, Name = "9条线", Title = "9条线", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 19, Parentid = 7, Name = "25条线", Title = "25条线", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 20, Parentid = 7, Name = "50条线", Title = "50条线", Icon = "", Isdisplay = 1, Sort = 4, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 21, Parentid = 7, Name = "243条线", Title = "243条线", Icon = "", Isdisplay = 1, Sort = 5, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 22, Parentid = 8, Name = "全部语言", Title = "全部语言", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 23, Parentid = 8, Name = "中文", Title = "中文", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 24, Parentid = 8, Name = "英文", Title = "英文", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 25, Parentid = 9, Name = "全部精选", Title = "全部精选", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 26, Parentid = 9, Name = "累计奖池", Title = "累计奖池", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 27, Parentid = 9, Name = "免费旋转", Title = "免费旋转", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 28, Parentid = 9, Name = "高玩家返还率", Title = "高玩家返还率", Icon = "", Isdisplay = 1, Sort = 4, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 29, Parentid = 10, Name = "全部", Title = "全部", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 30, Parentid = 10, Name = "低", Title = "低", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 31, Parentid = 10, Name = "中", Title = "中", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 32, Parentid = 10, Name = "高", Title = "高", Icon = "", Isdisplay = 1, Sort = 4, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });

            menuViews.Add(new MenuView { Id = 33, Parentid = 11, Name = "全部", Title = "全部", Icon = "", Isdisplay = 1, Sort = 1, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 34, Parentid = 11, Name = "—x1000", Title = "—x1000", Icon = "", Isdisplay = 1, Sort = 2, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 35, Parentid = 11, Name = "x1k-x10k", Title = "x1k-x10k", Icon = "", Isdisplay = 1, Sort = 3, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            menuViews.Add(new MenuView { Id = 36, Parentid = 11, Name = "x10k-x20k", Title = "x10k-x20k", Icon = "", Isdisplay = 1, Sort = 4, url = "http://106.13.207.246:85/api/h5game/GetGameData?cid=", CreateTime = DateTime.Now });
            #endregion
            string json = "";
            return menuViews.OrderBy(x=>x.Sort).ToList();
        }
        public List<MenuView> treeNodes = new List<MenuView>();
        public List<OptionView> treeNodes2 = new List<OptionView>();
        //建立树的递归方法
        /// </summary>
        /// <param name="dtSource">数据源</param>
        /// <param name="parentNode">父节点</param>
        /// <param name="parentID">节点的归属ID</param>
        public void BindTree(List<MenuView> dtSource, MenuView parentNode, int parentID)
        {
            List<MenuView> rows = dtSource.Where(x => x.Parentid == parentID).ToList();
            foreach (MenuView row in rows)
            {
                MenuView tree = new MenuView();
                tree.Id = row.Id;
                tree.Parentid = row.Parentid;
                tree.Name = row.Name;
                tree.Title = row.Title;
                tree.Icon = row.Icon;
                tree.Isdisplay = row.Isdisplay;
                tree.Sort = row.Sort;
                tree.url = row.url;
                tree.CreateTime = row.CreateTime;

                //递归性质，函数内调用自身函数
                BindTree(dtSource, tree, tree.Id);
                //递归结束的终点条件
                if (parentNode == null)
                {
                    treeNodes.Add(tree);
                }
                else
                {
                  
                    parentNode.children.Add(tree);
                }
            }
        }

        //建立树的递归方法
        /// </summary>
        /// <param name="dtSource">数据源</param>
        /// <param name="parentNode">父节点</param>
        /// <param name="parentID">节点的归属ID</param>
        public void BindTree2(List<MenuView> dtSource, OptionView parentNode, int parentID)
        {
            List<MenuView> rows = dtSource.Where(x => x.Parentid == parentID).ToList();
            foreach (MenuView row in rows)
            {
                OptionView tree = new OptionView();
                tree.Id = row.Id;
                tree.Parentid = row.Parentid;
                tree.label = row.Name;


                //递归性质，函数内调用自身函数
                BindTree2(dtSource, tree, tree.Id);
                //递归结束的终点条件
                if (parentNode == null)
                {
                    treeNodes2.Add(tree);
                }
                else
                {

                    parentNode.children.Add(tree);
                }
            }
        }
        #endregion
       

        #region 游戏列表 控制
        /// <summary>
        /// 添加游戏 
        /// </summary>
        /// <param name="tgameinfo"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult AddGame(int id, string name, string gamerule, int sort, string desc, string icon, bool isopen, string url) {

            try
            {
                tgameinfo tgame = new tgameinfo();
                tgame.id = id;
                tgame.name = name;
                tgame.gameRule = gamerule;
                tgame.Sort = sort;
                tgame.desc = desc;
                tgame.icon = icon;
                tgame.isopen = isopen;
                tgame.gameurl = url;
                bool isok = _itgameinfo.AddGame(tgame);
                return Json(new { Code = 1, Message = "请求成功!", Data = isok });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!"+e.Message, Data = false });
            }
        }
        /// <summary>
        /// 修改游戏 
        /// </summary>
        /// <param name="tgameinfo"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult UpdateGame(int id,string name,string gamerule,int sort,string desc,string icon,bool isopen,string url)

        {

            try
            {
                tgameinfo tgame = new tgameinfo();
                tgame.id = id;
                tgame.name = name;
                tgame.gameRule = gamerule;
                tgame.Sort = sort;
                tgame.desc = desc;
                tgame.icon = icon;
                tgame.isopen = isopen;
                tgame.gameurl = url;
                bool isok = _itgameinfo.UpdateGame(id, tgame);
                return Json(new { Code = 1, Message = "请求成功!", Data = isok });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = false });
            }
        }
        /// <summary>
        /// 删除游戏 
        /// </summary>
        /// <param name="tgameinfo"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult DeleteGame(int id)
        {

            try
            {
                bool isok = _itgameinfo.DelGame(id);
                return Json(new { Code = 1, Message = "请求成功!", Data = isok });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = false });
            }
        }

        #endregion


        #region 文件上传
 
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult UploadConfig()
        {
            string strWebPath = "false";
            //首先先确定请求里夹带的文件数量
            var files = HttpContext.Current.Request.Files;
            string id = HttpContext.Current.Request.Form["id"];
            string levelid = HttpContext.Current.Request.Form["levelid"];
            //如果存在文件
            if (files.AllKeys.Any())
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpContextBase HttpContext = (HttpContextBase)Request.Properties["MS_HttpContext"];
                    //获取到文件流
                    var text = HttpContext.Request.Files[0].InputStream;
                    //获取你的根目录
                    string path = "C:/download/slot2021scut1/Config/GameConfig/" + id + "/";//配置文件地址
                    //string datetime = GetTimeStamp();
                    //这里要先要建立File文件夹，不然会报错，也可以自己写一个检测文件夹

                    string strPath = path + levelid + "_config.json";
                    if (Directory.Exists(path) == false)
                    {
                        Directory.CreateDirectory(path);
                    }
                    //需要用到下一步的帮助类将其保存为文件
                    StreamHelp.StreamToFile(text, strPath);
                }
                return Json(new { Code = 0, Message = "上传成功!", Data = true });
            }
            return Json(new { Code = 0, Message = "上传失败!" + "e.Message", Data = false });
        }
        private string GetTimeStamp()
        {
            TimeSpan ts = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);
            return Convert.ToInt64(ts.TotalMilliseconds).ToString();
        }
        #endregion

        #region 用户菜单
        //public IHttpActionResult GetUserData()
        //{
        //    try
        //    {
        //       var userdata= _ituser.
        //    }
        //    catch (Exception e)
        //    {

        //        throw;
        //    }
        //}
        #endregion

        #region 用户集合
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetUserList(int userid,int pageindex,int pageseize) {
            try
            {
                var users = _ituserh5Service.GetUserInfo(userid,pageindex,pageseize);
                return Json(new { Code = 1, Message = "请求成功!", Data = users, TotalCount=users.TotalCount });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = false, TotalCount = 0 });
            }
        }
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetUserInfo(int userid) {
            try
            {
                var user = _ituserh5Service.GetUserInfo(userid);
                return Json(new { Code = 1, Message = "请求成功!", Data = user });
            }
            catch (Exception e)
            {

                throw;
            }
        }



        #endregion

        #region 用户日志
        /// <summary>
        /// 总的jackpot日志
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="gameid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetjackpotLog(string keyword,int gameid,int pageindex,int pagesize)
        {
            try
            {
                var jacklog = _itjackpotlog.GetJackPotLog(keyword,gameid,pageindex,pagesize);
                return Json(new { Code = 1, Message = "请求成功!", Data = jacklog.Data, TotalCount=jacklog.TotalCount});
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!", Data = e.Message, TotalCount =0});

            }
        }
        /// <summary>
        /// 获取用户的投注日志
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="gameid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetUserjackpotlog(int userid, string deforetime,string afttime, int pageindex, int pagesize)
        {
            try
            {
                var jacklog = _itjackpotlog.GetUserJackPotLog(userid, deforetime, afttime, pageindex, pagesize).Data;
                return Json(new { Code = 1, Message = "请求成功!", Data = jacklog });
            }
            catch (Exception e)
            {
                return Json(new { Code = 0, Message = "请求失败!", Data = e.Message });
            }
        }
        #endregion
        /// <summary>
        /// 获取ipv4地址
        /// </summary>
        /// <returns></returns>
        public static string GetIP4Address()
        {
            string IP4Address = String.Empty;
            foreach (IPAddress IPA in Dns.GetHostAddresses(System.Web.HttpContext.Current.Request.UserHostAddress))
            {
                if (IPA.AddressFamily.ToString() == "Internetwork")
                {
                    IP4Address = IPA.ToString();
                    break;
                }
            }
            if (IP4Address != String.Empty)
            {
                return IP4Address;
            }
            foreach (IPAddress IPA in Dns.GetHostAddresses(Dns.GetHostName()))
            {
                if (IPA.AddressFamily.ToString() == "InterNetwork")
                {
                    IP4Address = IPA.ToString();
                    break;
                }
            }
            return IP4Address;
        }
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

    }
}