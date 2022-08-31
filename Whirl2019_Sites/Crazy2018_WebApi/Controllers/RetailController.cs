using Crazy2018_Sys_Common;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_Interface.h5Game;
using Crazy2018_Sys_Interface.Retail;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_WebApi.App_Start;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Crazy2018_Sys_DBHelper;
using System.Security.Cryptography;
using System.Text;

namespace Crazy2018_WebApi.Controllers
{
    public class RetailController : ApiController
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
        private readonly IretailinfoService _iretailinfo;
        private readonly IretailchangeinfoService _iretailchangeinfo;
        private readonly IretailconfigService _iretailconfig;

        public RetailController(ISnsUserInfo snsService,
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
            ItjackpotlogService itjackpotlog,
            IretailinfoService iretailinfo,
            IretailchangeinfoService iretailchangeinfo,
            IretailconfigService iretailconfig
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
            _iretailinfo = iretailinfo;
            _iretailchangeinfo = iretailchangeinfo;
            _iretailconfig = iretailconfig;
        }

        /// <summary>
        /// 获取菜单树
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetRetaileById(int id)
        {
            try
            {
                var result = _iretailinfo.GetRetailinfo(id);
                if (result != null)
                {
                    return Json(new { Code = 1, Message = "请求成功!", Data = result });
                }
                return Json(new { Code = 1, Message = "请求失败!", Data = result });
            }
            catch (Exception e)
            {

                return Json(new { Code = 1, Message = "请求失败!" + e.Message, Data = "" });
            }
        }

        /// <summary>
        /// 新增商户账号
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult AddRetail(int id, string appsrcret, string appid, string name, long gold, sbyte status)
        {
            try
            {
                var result = _iretailinfo.Addretail(id, appsrcret, appid, name, gold, status);
                if (result)
                {
                    _iretailconfig.AddConfig(id,"999999");//注册成功 立即添加一条商户配置
                    return Json(new { Code = 1, Message = "请求成功!", Data = result });
                }
                return Json(new { Code = 1, Message = "请求失败!", Data = result });
            }
            catch (Exception e)
            {

                return Json(new { Code = 1, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        /// <summary>
        /// 获取商户集合
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [HttpPost]
        [WebApiExceptionFilter]
        public IHttpActionResult GetRetailList()
        {
            try
            {
                var result = _iretailinfo.GetretailinfoData();
                if (result != null)
                {
                    return Json(new { Code = 1, Message = "请求成功!", Data = result });
                }
                return Json(new { Code = 1, Message = "请求失败!", Data = result });
            }
            catch (Exception e)
            {

                return Json(new { Code = 1, Message = "请求失败!" + e.Message, Data = "" });
            }

        }

        /// <summary>
        /// 商户的游客登陆 从后台进入
        /// </summary>
        /// <param name="retailid"></param>
        /// <param name="token"></param>
        /// <param name="ctime"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult VisitorLogin(int retailid, string token, string ctime)
        {
            retailinfo retailinfo = _iretailinfo.GetRetailinfo(retailid);
            if (retailinfo != null)
            {
                string str = retailinfo.id + retailinfo.appsecret + ctime;
                str = MD5Encrypt32(str);
                if (str == token.ToLower())
                {
                    //获取商户配置
                    var reconfig = _iretailconfig.GetRetailConfigById(retailid);

                    if (retailinfo.gold<Convert.ToInt32(reconfig.playeramount))
                    {
                        return Json(new { Code = 0, Message = "商户金额不足", Data = "" });
                    }
                    string account = MachineCode.GetMachineCodeString();
                    string pwd = "123456";
                    string name = account.Substring(0, 7);
                    bool isok = false;
                    string msg = "";
                    //try
                    //{
                    var snsuser = _snsService.GetEntityByWhere(x => x.PassportID == account);
                    if (snsuser != null)
                    {

                        DataResult<SnsUserInfo> result = _snsService.Login(account, pwd);
                        if (result.Code == (int)Status.Success)
                        {
                            CookieHelper.SetCookie("username", account, "");
                            CookieHelper.SetCookie("pwd", StringHelper.RegUser_MD5_Pwd(pwd), "");
                            isok = true;
                            msg = "成功";
                        }
                    }
                    else
                    {

                        var result = _snsService.EasyRegUser(account, pwd, account,retailid);
                        if (result.Code == (int)Status.Success)
                        {
                            var sinfo = _snsService.GetEntityByWhere(x => x.PassportID == account);

                            tuser tuser = new tuser();
                            tuser.UserID = sinfo.UserId;
                            tuser.wechatName = name;
                            tuser.Gold = reconfig!=null? Convert.ToInt32(reconfig.playeramount):0;//这个是商户给予 商户减去金额 用户退出返回金额
                            tuser.LastLotinTime1 = DateTime.Now.ToString();
                            tuser.RegTime = DateTime.Now;
                            tuser.IP = GetIP4Address();
                            tuser.Desc = "desc";
                            tuser.isRobot = 0;
                            tuser.wechatHeadIcon = "17.png";
                            tuser.Sex = 0;
                            //using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                            //{
                            //    snsuserinfo snsuserinfo = new snsuserinfo();
                            //    snsuserinfo.UserId = sinfo.UserId;
                            //    snsuserinfo.PassportID = account;
                            //    snsuserinfo.PassportPwd = StringHelper.RegUser_MD5_Pwd(pwd);
                            //    snsuserinfo.DeviceID = "111111";
                            //    snsuserinfo.RegType = 1;
                            //    snsuserinfo.RegTime = DateTime.Now;
                            //    snsuserinfo.RetailID = retailid.ToString();
                            //    snsuserinfo.RetailUser = sinfo.UserId.ToString();
                            //    snsuserinfo.PwdType = 1;
                            //    db.snsuserinfo.Add(snsuserinfo);
                            //}
                          
                           //snsuserinfo.SID=
                           
                        
                            _gameUserService.AddUser(tuser);
                            var rechange = _iretailchangeinfo.AddRetailChangeLog(retailid, 1, reconfig.playeramount, "基于用户金额");//写到日志中
                            var upretail = _iretailinfo.UpdateRetail(retailid, retailinfo.appsecret, retailinfo.appid, retailinfo.name, (long)(retailinfo.gold-Convert.ToInt32(reconfig.playeramount)), (sbyte)retailinfo.status);//修改商户金额
                            var lo = _snsService.Login(account, pwd);
                            if (lo.Code == (int)Status.Success)
                            {
                                CookieHelper.SetCookie("username", account, "");
                                CookieHelper.SetCookie("pwd", StringHelper.RegUser_MD5_Pwd(pwd), "");
                                isok = true;
                                msg = "请求成功";
                            }
                        }
                    }

                    return Json(new { Code = 1, Message = msg, Account = account, Pwd = StringHelper.RegUser_MD5_Pwd(pwd), ipurl = "106.13.222.130", Data = "" });
                }
                else
                {
                    return Json(new { Code = 0, Message = "验证失败", Data = "" });
                }
            }

          return  Json(new { Code = 0, Message = "商户不存在", Data = "" });
        }

        /// <summary>
        /// 获取某个商户中用户的信息数据
        /// </summary>
        /// <param name="reid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult GetRetailUserData(int reid,int pageindex,int pagesize) {
            try
            {
                var result = _iretailinfo.GetReatilUserData(reid,pageindex,pagesize);
                if (result!=null)
                {
                    return Json(new { Code = 1, Message = "请求成功!", Data = result });
                }
                return Json(new { Code = 1, Message = "请求失败!", Data = result });
            }
            catch (Exception e)
            {

                return Json(new { Code = 1, Message = "请求失败!" + e.Message, Data = "" });
            }

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
        public static string MD5Encrypt32(string myString)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            //byte[] fromData = System.Text.Encoding.Unicode.GetBytes(myString);
            byte[] fromData = System.Text.Encoding.UTF8.GetBytes(myString);//
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");
            }

            return byte2String;
        }

    }
}
