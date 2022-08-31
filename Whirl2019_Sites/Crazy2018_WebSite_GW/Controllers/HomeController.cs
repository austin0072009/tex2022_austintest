using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using System.Configuration;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_WebSite_GW.Controllers
{
    public class HomeController : BaseController
    {
        private IBankCardService _bankCardService;
        private readonly IVerifyCodeService _verifyCodeService;
        private readonly IUserAgentService _userAgentService;
        private readonly IRechargeRecordService _RechargeRecordService;
        private readonly ITakeNowRecordService _takeNowService;
        private readonly IActiveCodeService _activeService;
        private readonly ISnsUserInfo _snsService;
        private readonly ICommoditService _commoditService;
        private readonly IWhirlUserAgentService _WhirlUserAgent;
        private readonly IUserAgentNewService useragentnew;
        private readonly IGameService gameservice;
        private readonly ItuserService tuserservice;
        private readonly ITaxlogService taxlog;
        private readonly INoticeService _noticeService;
        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public HomeController(
            IBankCardService bankCardService
            , IUserService userService
            , IVerifyCodeService verifyCodeService
            , IUserAgentService userAgentService
            , IRechargeRecordService RechargeRecordService
            , ITakeNowRecordService takeNowService,
            IActiveCodeService activeService,
             ISnsUserInfo snsService,
             ICommoditService commoditService,
             IWhirlUserAgentService WhirlUserAgent,
             IUserAgentNewService _useragentnew,
             IGameService _gameservice,
             ItuserService _tuserservice,
              ITaxlogService _taxlog,
              INoticeService noticeService
            )
        {
            _bankCardService = bankCardService;
            _verifyCodeService = verifyCodeService;
            _userAgentService = userAgentService;
            _RechargeRecordService = RechargeRecordService;
            _takeNowService = takeNowService;
            _activeService = activeService;
            _snsService = snsService;
            _commoditService = commoditService;
            _WhirlUserAgent = WhirlUserAgent;
            useragentnew = _useragentnew;
            gameservice = _gameservice;
            tuserservice = _tuserservice;
            taxlog = _taxlog;
            _noticeService = noticeService;
        }


        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult WxDownpagedetails()
        {
            return View();
        }
        public ActionResult downpage()
        {
            return View();
        }
        public ActionResult downpagedetails()
        {
            return View();
        }
        // Game registration
        public ActionResult gameregist()
        {
            return View();
        }
        public ActionResult RechargeRecord()
        {
            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                return View(_RechargeRecordService.GetUserNearlySevenDays(snsuser.UserId));
            }
            else
                return Redirect("/Manage/login");
        }
        public ActionResult News()
        {
            var notice = _noticeService.GetListTop(10, (int)NoticeType.新闻);

            return View(notice);
        }
        public ActionResult Recharge()
        {

            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                var tuser = tuserservice.GetEntityByID(snsuser.UserId);
                if (tuser != null)
                {
                    
                    snsuser.TotalMoney = (int)tuser.TotalGold / 100;

                    snsuser.UserMoney = (int)tuser.Gold / 100;
                }
                return View(snsuser);
            }
            else
                return Redirect("/Manage/login");
        }
        public ActionResult gonggao()
        {
            var notice = _noticeService.GetListTop(10, (int)NoticeType.公告);

            return View(notice);
        }
        public ActionResult NewsDetails(int id)
        {
            var entity = _noticeService.GetEntityByID(id);
            if (entity != null)
            {
                return View(entity);
            }
            else return new EmptyResult();
        }
        public ActionResult help()
        {
            return View();
        }
        public ActionResult m_91login()
        {
            return View();
        }
        public ActionResult register()
        {
            return View();
        }
        public ActionResult findPwd()
        {
            return View();
        }
        public ActionResult ResetPayPwd()
        {

            return View();
        }

        public ActionResult RegisterPage()
        {

            return View();
        }
    }
}