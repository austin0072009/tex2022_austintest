using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using NewLife.Cryptography;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Crazy2018_WebSite_Manage.Controllers
{
    
    public class HomeController : BaseController
    {
        private readonly ISiteConfigSerivice _siteService;
        private readonly IManageLogService _manageLogService;
        private readonly INavigationService _navigationService;
        private readonly IManagerRoleService _managerRoleService;
        private readonly IRoomListService _tableservice;
        private readonly ITaxlogService _taxlogservice;
        private readonly IRechargeRecordService _rechargeService;
        private readonly IGameService _gameService;
        private readonly IGameUserService _gameuserService;
        private readonly ISnsUserInfo _snsUserInfo;
        private readonly ItuserService _tuserService;
        private readonly IGameUserInfoService _gameinfoservice;
        private readonly IWhirlUserAgentService _whirluser;

        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public HomeController(IManageService manageService,
            ISiteConfigSerivice siteService,
            IManageLogService manageLogService,
            INavigationService navigationService,
            IManagerRoleService managerRoleService,
            IRoomListService tableservice,
            ITaxlogService taxlogservice,
            IRechargeRecordService rechargeService,
            IGameService gameService,
            ISnsUserInfo snsUserInfo,
            ItuserService tuserService,
            IGameUserService gameuserService,
            IGameUserInfoService gameinfoservice,
            IWhirlUserAgentService whirluser


            ) : base(manageService)
        {
            _siteService = siteService;
            _manageLogService = manageLogService;
            _navigationService = navigationService;
            _managerRoleService = managerRoleService;
            _tableservice = tableservice;
            _taxlogservice = taxlogservice;
            _rechargeService = rechargeService;
            _gameService = gameService;
            _snsUserInfo = snsUserInfo;
            _tuserService = tuserService;
            _gameuserService = gameuserService;
            _gameinfoservice = gameinfoservice;
            _whirluser = whirluser;
        }



        public ActionResult Index()
        {

            return View();
        }

        public ActionResult GameInfo()
        {

            return View();
        }

        public ActionResult TryGame()
        {
            return View();
        }

        /// <summary>
        /// 获取所有的游戏
        /// </summary>
        /// <param name="type">游戏类型</param>
        /// <param name="gametypesea">是否启用 </param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetAllgameinfo(string type, string gametypesea)
        {
            try
            {
                var result = _gameService.GetAllgameinfo(type, gametypesea);
                return Json(result);
            }
            catch (Exception)
            {

                throw;
            }

        }

        /// <summary>
        /// 获取游戏信息
        /// </summary>
        /// <param name="gameid"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameInfo(string gameid)
        {
            try
            {
                var result = _gameService.GetEntityByID(Convert.ToInt32(gameid));
                return Json(result);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpPost]
        public ActionResult GetLoginHtml() {
            try
            {
                var user = CookieHelper.GetCookie("username");
                var pwd = CookieHelper.GetCookie("pwd");
                return Json(new { success = true, msg = "登录成功!", username = user, pwd = pwd });
            }
            catch (Exception)
            {

                return Json(new { success = false, msg ="请登录",username="" });
            }
        }


        public ActionResult AddUser(string PassportID, string PassportPwd, string name)
        {
           
                string pwd = string.Empty;
                //默认密码
                if (string.IsNullOrEmpty(PassportPwd)) pwd = "123456";
                else pwd = PassportPwd;

                var result = _snsUserInfo.RegUser(PassportID, "", "", pwd);
                if (result.Code == (int)Status.Success)
                {
                var sinfo = _snsUserInfo.GetEntityByWhere(x=>x.PassportID==PassportID);
                gameuser gameuser = new gameuser();
                gameuser.UserId = sinfo.UserId;
                gameuser.NickName = name;
                gameuser.PassportId = sinfo.PassportID;
                gameuser.RetailId = "0018";
                gameuser.ClRedCount = 0;
                gameuser.RedCount = 0;
                gameuser.JlRedCount = 0;
                gameuser.MobilePhoneNum = PassportID;
                tuser tuser = new tuser();
                tuser.UserID = sinfo.UserId;
                tuser.wechatName = name;
                tuser.Gold = 1000000;
                tuser.LastLotinTime1 = DateTime.Now.ToString();
                tuser.RegTime = DateTime.Now;
                tuser.IP = GetIP4Address();
                tuser.Desc = "desc";
                tuser.isRobot = 0;
                tuser.wechatHeadIcon = "17.png";
                tuser.Sex = 0;
                tuseragent2019 tuseragent = new tuseragent2019();
                tuseragent.UserID = sinfo.UserId;
                tuseragent.Lv = 1;
                tuseragent.FUserID = 0;
                tuseragent.GoldHistoryCommission = 0;
                tuseragent.GoldCommission = 0;
                tuseragent.lastdealtime = DateTime.Now;
                tuseragent.ChildAgents = "[]";
            
                _whirluser.AddEntity(tuseragent);
                _gameuserService.AddEntity(tuser);
                _gameinfoservice.AddEntity(gameuser);

                return Json(new { success = true, msg = "注册成功!" });
                }
                else
                {
                    return Json(new { success = false, msg = result.Message });
                }
        }

        public ActionResult Login(string PassportID, string PassportPwd)
        {
            DataResult<SnsUserInfo> result = _snsUserInfo.Login(PassportID, PassportPwd);
            if (result.Code == (int)Status.Success)
            {
                CookieHelper.SetCookie("username", PassportID, "");
                CookieHelper.SetCookie("pwd", StringHelper.RegUser_MD5_Pwd(PassportPwd), "");
                var user = CookieHelper.GetCookie("username");
                var pwd = CookieHelper.GetCookie("pwd");
                return Json(new { success = true, msg = "登录成功!",username=PassportID,pwd=pwd }) ;
             
            }
            else
            {
                return Json(new { success = false, msg = result.Message });
            }


        }

        public ActionResult GetUser()
        {
            var user = CookieHelper.GetCookie("username");
            var pwd = CookieHelper.GetCookie("pwd");
            if (user != null)
            {
                return Json(new { success = true, msg = "登录成功!", username = user, pwd = pwd });
            }
            else
            {
                return Json(new { success = true, msg = "请先登录/注册", username = user, pwd = pwd });
            }
        }

        public ActionResult clearcookie() {
            CookieHelper.ExpireCookie("username");
            CookieHelper.ExpireCookie("pwd");

            return Json(new { success = true, msg = ""});
        }
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

        [HttpPost]
        public ActionResult YKLogin() {
         string account=   MachineCode.GetMachineCodeString();
            string pwd = "123456";
            string name = account.Substring(0,7);
            try
            {
               var snsuser= _snsUserInfo.GetEntityByWhere(x=>x.PassportID==account);
                if (snsuser!=null)
                {
                    Login(account, pwd);
                }
                else
                {

                    var result = _snsUserInfo.EasyRegUser(account, pwd, account);
                    if (result.Code == (int)Status.Success)
                    {
                        var sinfo = _snsUserInfo.GetEntityByWhere(x => x.PassportID == account);
                        gameuser gameuser = new gameuser();
                        gameuser.UserId = sinfo.UserId;
                        gameuser.NickName = name;
                        gameuser.PassportId = sinfo.PassportID;
                        gameuser.RetailId = "0018";
                        gameuser.ClRedCount = 0;
                        gameuser.RedCount = 0;
                        gameuser.JlRedCount = 0;
                        gameuser.MobilePhoneNum = "";
                        tuser tuser = new tuser();
                        tuser.UserID = sinfo.UserId;
                        tuser.wechatName = name;
                        tuser.Gold = 999999;
                        tuser.LastLotinTime1 = DateTime.Now.ToString();
                        tuser.RegTime = DateTime.Now;
                        tuser.IP = GetIP4Address();
                        tuser.Desc = "desc";
                        tuser.isRobot = 0;
                        tuser.wechatHeadIcon = "17.png";
                        tuser.Sex = 0;
                        tuseragent2019 tuseragent = new tuseragent2019();
                        tuseragent.UserID = sinfo.UserId;
                        tuseragent.Lv = 1;
                        tuseragent.FUserID = 0;
                        tuseragent.GoldHistoryCommission = 0;
                        tuseragent.GoldCommission = 0;
                        tuseragent.lastdealtime = DateTime.Now;
                        tuseragent.ChildAgents = "[]";

                        _whirluser.AddEntity(tuseragent);
                        _gameuserService.AddEntity(tuser);
                        _gameinfoservice.AddEntity(gameuser);
                        Login(account, pwd);
                    }
                }

            }
            catch (Exception)
            {

                throw;
            }
            return Json(new { success = true, msg = "登录成功!", username = name, pwd = pwd });
        }
    }
}