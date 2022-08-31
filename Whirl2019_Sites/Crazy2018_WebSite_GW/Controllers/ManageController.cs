using ConsoleApplication1;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_Service.GameCore;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_WebSite_GW.Models;
using NewLife.Cryptography;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WCrazy2018_WebSite_GW;
using static Crazy2018_Sys_Common.TableUtil; 


namespace Crazy2018_WebSite_GW.Controllers
{
    public class ManageController : BaseController
    {
        private readonly IBankCardService _bankCardService;
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
        private readonly IRechargeRecordService _rechargeService;
        private readonly IRechargeChannelsService _rechargeChannelService;
        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();



        public ManageController(
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
              INoticeService noticeService,
              IRechargeRecordService rechargeService,
              IRechargeChannelsService rechargeChannelsService
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
            _rechargeService = rechargeService;
            _rechargeChannelService = rechargeChannelsService;
        }
        int agentId = 0;
        public ActionResult Index(string uid)
        {
            var notice = _noticeService.GetListTop(7, (int)NoticeType.新闻);
            if (!string.IsNullOrEmpty(uid))
            {
                Session["agentId"] = agentId;
                int.TryParse(StringHelper.Decrypto(uid), out agentId);
            }
            return View(notice);
        }
        public ActionResult AgentManageNew()
        {
            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                var useragengt = taxlog.GetMyAgentByUserId(snsuser.UserId);
                return View(useragengt);

            }
            else
                return Redirect("/Manage/login");

           
        }


        public ActionResult RegisteredLink()
        {
            return View();
        }

        public ActionResult bulletin(int id)
        {
          var entity =  _noticeService.GetEntityByID(id);
            if (entity!=null)
            {
                return View(entity);
            }
            else return View();
            
        }
        public ActionResult contact()
        {
            return View();
        }
        public ActionResult findPwd()
        {
            return View();
        }
        public ActionResult help()
        {
            return View();
        }
        public ActionResult login()
        {
            return View();
        }
        public ActionResult Activity()
        {
            return View();
        }
        public ActionResult ActivityList()
        {
            return View();
        }
        public ActionResult PayPwd()
        {
            return View();
        }
        public ActionResult OutLogin()
        {
            user = null;
            Session["phone"] = null;
            Session["userInfo"] = null;
            return RedirectToAction("login");
        }
        public ActionResult news()
        {
            var notice = _noticeService.GetListTop(10, (int)NoticeType.新闻);
            
            return View(notice);
        }
        public ActionResult output()
        {
            return View();
        }
        public ActionResult present()
        {
            return View();
        }
        public ActionResult userIfo()
        {
            return View();
        }
        public ActionResult registered()
        {
            return View();
        }
        //[ManageFilter]
        public ActionResult Recharge(int uid = 000000, int amount = 0, int comId = -1, int rechargeType = 1, string payType = "")
        {
			ViewBag.uid = uid;
			ViewBag.amount = amount;
			ViewBag.comId = comId;
			ViewBag.rechargeType = rechargeType;
			ViewBag.paytype = payType;

			return View();
        }
        //[ManageFilter]
        public ActionResult Recharge1()
        {
            return View();
        }
        [ManageFilter]
        public ActionResult BankList()
        {
            return View();
        }
        public ActionResult BindBank()
        {
            return View();
        }
        //[ManageFilter]
        public ActionResult RechargePage()
        {
            return View();
        }
        public ActionResult withdraw()
        {
            return View();
        }
        public ActionResult Promotion()
        {
            return View();
        }
        public ActionResult JoinEd()
        {

            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                //var useragengt = useragentnew.GetEntityByID(snsuser.UserId);
                
                return View(snsuser);
            }
            else
                return Redirect("/Manage/login");
        }
        public ActionResult RechargeRecord()
        {
            return View();
        }
        public ActionResult WithdrawRecord()
        {
            return View();
        }
        [ManageFilter]
        public ActionResult AgentManage()
        {
            return View();
        }


        [HttpPost]
        public JsonResult ChangePassWord(string phone, string password, string verifyCode)
        {
            var verifyResult = _verifyCodeService.CheckCode(phone, 1, verifyCode);
            if (verifyResult.Code == (int)Status.fail) return Json(verifyResult.Message);
            var changeResult = _snsService.ChangePassWord(phone, password);
            return Json(changeResult.Message);
        }


        [HttpPost]
        public JsonResult SendCode(string phoneNum)
        {
            if (_snsService.Exist(phoneNum)) return Json("当前手机号码已经注册");

            return SendVerifyCode(phoneNum, 0);
        }
        [HttpPost]
        public JsonResult SendChanheCode(string phoneNum)
        {
            if (string.IsNullOrEmpty(phoneNum)) return Json("手机号不能为空");
            if (!PageValidate.IsMobile(phoneNum)) return Json("手机号码不正确");
            if (!_snsService.Exist(phoneNum)) return Json("手机号码未注册");
            return SendVerifyCode(phoneNum, 1);
        }
        private JsonResult SendVerifyCode(string phoneNum, int type)
        {
            int verifyCode = 0;
            VerifyCodeHelper codehelper = new VerifyCodeHelper();
            var result = codehelper.CreateCode(phoneNum, type, out verifyCode);
            if (result)
            {
                return Json(_verifyCodeService.Add(phoneNum, type, verifyCode.ToString()).Message);
            }
            return Json("发送失败");
        }


        [HttpPost]
        public JsonResult RegisterCommit(RegisterModel data)
        {
            if (!_snsService.Exist(data.Phone))
            {
                if (_activeService.Exist(data.recommend))
                {
                    var checkResult = _verifyCodeService.CheckCode(data.Phone, 0, data.Verification);
                    if (checkResult.Code == (int)Status.fail)
                    {
                        return Json(checkResult.Message);
                    }
                    var result = _snsService.RegUser(data.Phone, data.Verification, data.recommend, data.Password);
                    if (result.Code == (int)Status.Success)
                    {
                       
                       
                        var url = Request.Url.Host + ":" + Request.Url.Port;
                        string qrPath = url + CreateQRCode(url, result.Spare);
                        int fid = 0;
                        if (Session["agentId"] != null)
                            int.TryParse(Session["agentId"].ToString(), out fid);

                        //userentity = tuserservice.AddEntity(new tuser
                        //{
                        //   UserID = Convert.ToInt32(result.Spare),
                        //   UserName = data.Phone,
                        //   UserPassword = StringHelper.RegUser_MD5_Pwd(data.Password),
                        //   UserMoney = 0,
                        //   UserMaxMoney = 2000000000,
                        //   RegTime = DateTime.Now,
                        //   NickName = "",
                        //   IP = GetIP(),
                        //   isRobot = 0,
                        //   isagent = 0,
                        //   Desc  = "官网注册用户啦",
                        //   Status = 0,
                        //   diamond = 0,
                        //   Sex = 1,
                        //   TotalMoney = 0,
                        //   totaldiamond = 0,
                        //   winpercent = 0,
                        //   vlevel = 0,
                        //   givecount = 0,
                        //});
                        Session["agentId"] = null;
                        return Json("注册成功");
                    }
                    else
                    {
                        return Json(result.Message);
                    }
                }
                else
                {
                    return Json("推荐码不存在");
                }
            }
            else
            {
                return Json("手机已注册");
            }
        }

        [HttpPost]
        public JsonResult UserLogin(string phoneNum, string password, LoginType type)
        {
            var result = _snsService.Login(phoneNum, password);
            if (result.Code == (int)Status.Success)
            {
                user = result.Data;
                user.ActiveCode = GetActiveCode(user.UserId);
                Session["userInfo"] = result.Data;
                Session["phone"] = result.Data.Mobile;
                return Json(result.Message);
            }
            else
                return Json(result.Message);
        }
        /// <summary>
        /// 添加银行卡
        /// </summary>
        /// <param name="name">持卡人名字</param>
        /// <param name="cardNo">银行卡卡号</param>
        /// <param name="bankAddress">开户行</param>
        /// <param name="Location">所在地区域</param>
        /// <returns></returns>
        [HttpPost]
        [ManageFilter]
        public JsonResult AddBankCardNo(string name, string cardNo, string bankAddress, string Location)
        {
            if (string.IsNullOrEmpty(name)) return Json("开户名不能为空!");
            if (string.IsNullOrEmpty(cardNo)) return Json("卡号不能为空!");
            if (string.IsNullOrEmpty(bankAddress)) return Json("开户行不能为空!");
            if (string.IsNullOrEmpty(Location)) return Json("所在地所在区域不能为空!");
            if (cardNo.Trim().Length < 15 || cardNo.Trim().Length > 19) return Json("银行卡号码有误");
            string binCode = cardNo.Substring(0, 6);
            var bankType = _bankCardService.GetBankTypeByBinCode(binCode);
            if (bankType == null) return Json("银行卡号码有误");
            string phone = Session["phone"].ToString();
            var check = _bankCardService.Exist(phone, cardNo);
            if (check) return Json("该卡已被添加");

            var entity = _bankCardService.AddEntity(
                new BankCardEntity
                {
                    BankCardID = cardNo,
                    CardName = bankType.BankName,
                    CardType = 0,
                    UserID = phone,
                    UserName = name,
                    BankAddress = bankAddress,
                    Location = Location
                });
            return entity == null ? Json("添加失败") : Json("添加成功");
        }
        /// <summary>
        /// 获取银行卡信息
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [ManageFilter]
        public JsonResult GetBankCards()
        {
            string phone = Session["phone"].ToString();
            var lts = _bankCardService.GetCardList(phone);
            return Json(lts);
        }
        [ManageFilter]
        [HttpPost]
        public JsonResult GetUserInfo()
        {
            var userInfo = Session["userInfo"] as SnsUserInfo;
            UserView userView = new UserView { Email = "123456@QQ.COM", PhoneNum = userInfo.Mobile, UserId = userInfo.UserId.ToString(), QqNum = "123456" };
            return Json(userView);
        }
        /// <summary>
        /// 获取代理信息
        /// </summary>
        /// <returns></returns>
        [ManageFilter]
        [HttpPost]
        public JsonResult GetAgentData()
        {
            var u = Session["userInfo"] as SnsUserInfo;
            return Json(useragentnew.GetEntityByID(u.UserId));
        }
        private string CreateQRCode(string domainname, string uid)
        {
            string link = domainname + "?uid=" + StringHelper.Encrypto(uid);
            return StringHelper.CreateQRCode(link);
        }
        /// <summary>
        /// 发起提现
        /// </summary>
        /// <param name="amount"></param>
        /// <param name="bankCard"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult TakeNow(decimal amount, string bankCard)
        {
            int gold = -(int)amount * 100;//金币RMB比例 1比100
            cs_charge_gm takenow = new cs_charge_gm { fn = "cs_charge_gm", money = gold, gameid = 4, userid = user.UserId, type = 1 };
            var takeEntity = new TakeNowRecordEntity { account = bankCard, Amount = amount, UserId = user.UserId.ToString(), State = 0 };
            if (_takeNowService.GetTodayTakeCount(user.UserId.ToString()) >= 3)
            {
                //var tax = Convert.ToDouble(amount) * 0.02;
                // takeEntity.Amount = amount -Convert.ToDecimal(tax) ;
                takeEntity.isTax = true;
            };
            var entity = _takeNowService.AddEntity(takeEntity);
            try
            {
                string data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(takenow));
                string _content = HttpService.HttpGet(serviceUrl + data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                if (_scsetcard._ret == 0)
                {
                    entity.State = 1;
                    return _takeNowService.UpdateEntity(entity) != null ? Json("提现申请提交成功") : Json("提现申请提交失败");
                }
                else
                {
                    entity.IsDel = true;
                    return _takeNowService.UpdateEntity(entity) != null ? Json("扣除金币失败") : Json("扣除金币失败");
                }
            }
            catch (Exception)
            {
                entity.IsDel = true;
                return _takeNowService.UpdateEntity(entity) != null ? Json("扣除金币失败") : Json("扣除金币失败");
            }
        }
        /// <summary>
        /// 获取提现列表
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetTakeNowData(int pageIndex, int pageSize, string userID = "")
        {
            string tempId = user.UserId.ToString();
            string paramUid = string.IsNullOrEmpty(userID) ? tempId : userID;

            DataResult<TakeNowView> result = new DataResult<TakeNowView>();
            var data = _takeNowService
                .GetEntityLisrByWhere(w => w.UserId == paramUid && w.IsDel == false)
                .OrderByDescending(w => w.CreatTime)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .Select(w => new TakeNowView
                {
                    Amount = w.Amount
                ,
                    Remark = w.Remark
                ,
                    CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                ,
                    UserId = w.UserId
                ,
                    account = w.account
                ,
                    ID = w.ID,
                    State = w.State
                });
            result.Data = data.ToList();
            result.PageIndex = pageIndex;
            result.TotalCont = _takeNowService.GetEntityLisrByWhere(w => w.UserId == paramUid && w.IsDel == false).Count;
            return Json(result);
        }
        ///// <summary>
        ///// 设置提现记录状态
        ///// </summary>
        ///// <param name="id">提现记录id</param>
        ///// <param name="state"> 0 申请提现 1 已扣除金币 2 已提现</param>
        ///// <returns></returns>
        //[HttpPost]
        //public JsonResult SetTakeNowState(SetTakeNowModel data)
        //{
        //    var res = _takeNowService.SetTakeNowState(data.id, data.state);
        //    if (res.Code == 0 && data.state==3)
        //    {
        //        NoticeChat.Instance.SendSystemMsgEx<string>("10", new List<string>() { "10" });
        //    }
        //    return Json(res);
        //}
        /// <summary>
        /// 获取提现列表
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult M_GetTakeNowData(int pageIndex, int pageSize, string keywords = "")
        {
            Expression<Func<TakeNowRecordEntity, bool>> fun = w => w.IsDel == false;
            if (!string.IsNullOrEmpty(keywords))
                fun = w => w.IsDel == false && w.UserId.Contains(keywords) || w.account.Contains(keywords);
            DataResult<TakeNowView> result = new DataResult<TakeNowView>();
            var data = _takeNowService
                .GetEntityLisrByWhere(fun)
                .OrderByDescending(w => w.CreatTime)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .Select(w => new TakeNowView
                {
                    Amount = w.Amount
                ,
                    Remark = w.Remark
                ,
                    CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                ,
                    UserId = w.UserId
                ,
                    account = w.account
                ,
                    ID = w.ID,
                    State = w.State
                });
            result.Data = data.ToList();
            result.PageIndex = pageIndex;
            result.TotalCont = _takeNowService.GetEntityLisrByWhere(fun).Count;
            return Json(result);
        }


        /// <summary>
        /// 充值金币
        /// </summary>
        /// <param name="number"></param>
        /// <param name="rechargeType"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AddRechargeRecordbyGw(int number, int rechargeType, int uid)
        {
            //string ret = "-1";
            //if (uid.Equals(0) && Session["userInfo"] == null)
            //{
            //    return PageJsAlert("请登录后充值!", "Recharge1");
            //}
            //else
            //{
            //    string rchanal = "";
            //    if (number.Equals(0))
            //    {
            //        return PageJsAlert("请选择充值金额!", "Recharge1");
            //    }

            //    if (string.IsNullOrEmpty(Enum.GetName(typeof(Rechargechannel), rechargeType)))
            //    {
            //        return PageJsAlert("支付渠道异常!", "Recharge1");
            //    }
            //    else
            //    {
            //        rchanal = Enum.GetName(typeof(Rechargechannel), rechargeType);
            //    }

            //    if (!uid.Equals(0) && Session["userInfo"] != null)
            //    {
            //        uid = (Session["userInfo"] as SnsUserInfo).UserId;
            //    }

            //    lock (DTKeys.paylock)
            //    {
            //        var entity = new RechargeRecordEntity
            //        {
            //            Number = number,
            //            UserId = uid,
            //            RechargeType = rechargeType,
            //            Remark = "充值金币",
            //            GoldCount = number * 100
            //        };
            //        entity.OrderNumber = StringHelper.GenerateId();
            //        //蚂蚁
            //        if (rechargeType <= 3)
            //        {
            //            Dictionary<string, string> listkey = new Dictionary<string, string>();

            //            listkey.Add("loginName", ConfigurationData.loginName);
            //            listkey.Add("orderNo", entity.OrderNumber);
            //            listkey.Add("orderMoney", HttpUtility.UrlEncode((entity.Number * 100).ToString()));//写死测试
            //            listkey.Add("paychannel", rchanal);
            //            listkey.Add("orderType", "A");
            //            listkey.Add("externalId", entity.UserId.ToString());
            //            listkey.Add("notifyUrl", ConfigurationData.notifyUrl);

            //            var diclist = AsciiDictionary(listkey);
            //            var urlstr = Utils.GetUrlString(diclist);
            //            var rsastring = StringHelper.RSAEncrypt(urlstr, ConfigurationData.privatekey);

            //            listkey.Add("sign", HttpUtility.UrlEncode(rsastring));
            //            var diclist2 = AsciiDictionary(listkey);
            //            var str = Utils.GetUrlString(diclist2);
            //            var data = Utils.HttpPost(ConfigurationData.payurl, str);
            //            var result = _RechargeRecordService.AddEntity(entity);


            //            return Content(data, "text/html", Encoding.UTF8);
            //        }
            //        else if (rechargeType <= 9)//xm支付
            //        {
            //            Dictionary<string, string> data = new Dictionary<string, string>();

            //            data.Add("mch_id", ConfigurationData.mch_id);
            //            data.Add("mch_secret", ConfigurationData.xmkey);
            //            data.Add("timestamp", Utils.GetTimeStamp());
            //            data.Add("out_trade_no", entity.OrderNumber);
            //            data.Add("pay_type", rchanal);
            //            data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
            //            data.Add("notify_url", ConfigurationData.xmnotifyUrl);


            //            var Ddata = AsciiDictionary(data);
            //            var urlstr = Utils.GetUrlString(Ddata);


            //            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
            //            var diclist2 = AsciiDictionary(data);
            //            var str = Utils.GetUrlString(diclist2);
            //            var rdata = Utils.HttpPost(ConfigurationData.xmpayurl, str);
            //            var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);
            //            if (resultEntity.code.Equals("100"))
            //            {
            //                var result = _RechargeRecordService.AddEntity(entity);
            //                return Redirect(resultEntity.data.url);
            //            }
            //            else
            //            {
            //                return PageJsAlert("下单失败：" + resultEntity.msg, "Recharge1");
            //            }
            //        }
            //        else if (rechargeType >= 12 && rechargeType <= 16)//捷仕达
            //        {
            //            Dictionary<string, string> data = new Dictionary<string, string>();
            //            data.Add("merchant_no", ConfigurationData.jsdmchid);
            //            data.Add("order_no", entity.OrderNumber);
            //            data.Add("order_money", HttpUtility.UrlEncode((entity.Number).ToString()));
            //            data.Add("attach", entity.OrderNumber);
            //            data.Add("pay_type", rchanal);
            //            data.Add("order_time", DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss"));
            //            data.Add("notify_url", ConfigurationData.jsdnotifyUrl);

            //            var Ddata = AsciiDictionary(data);
            //            var urlstr = Utils.GetUrlString(Ddata);
            //            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());

            //            var diclist2 = AsciiDictionary(data);
            //            var str = Utils.GetUrlString(diclist2);

            //            var rdata = Utils.HttpPost(ConfigurationData.jsdpayurl + "/pay/createPayOrder", str);
            //            var result = _RechargeRecordService.AddEntity(entity);
            //            if (result.ID > 0)
            //            {
                            
            //                return Content(rdata, "text/html", Encoding.UTF8);
            //            }
            //            else
            //                return Content("下单失败");
            //        }
            //        else
            //        {
            //            Dictionary<string, string> data = new Dictionary<string, string>();

            //            data.Add("mch_id", ConfigurationData.mch_id2);
            //            data.Add("mch_secret", ConfigurationData.xmkey2);
            //            data.Add("timestamp", Utils.GetTimeStamp());
            //            data.Add("out_trade_no", entity.OrderNumber);
            //            data.Add("pay_type", rchanal == "PHFCZ2" ? "PQYHB|PHFCZ" : rchanal);
            //            data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
            //            data.Add("notify_url", ConfigurationData.xmnotifyUrl2);


            //            var Ddata = AsciiDictionary(data);
            //            var urlstr = Utils.GetUrlString(Ddata);

            //            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
            //            var diclist2 = AsciiDictionary(data);
            //            var str = Utils.GetUrlString(diclist2);
            //            var rdata = Utils.HttpPost(ConfigurationData.xmpayurl2, str);
            //            var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);
            //            if (resultEntity.code.Equals("100"))
            //            {
            //                var result = _RechargeRecordService.AddEntity(entity);
            //                return Redirect(resultEntity.data.url);
            //            }
            //            else
            //            {
            //                return PageJsAlert("下单失败：" + resultEntity.msg, "Recharge1");
            //            }
            //        }
            //    }
            //}
            return PageJsAlert("下单失败", "Recharge1");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ordernum"></param>
        /// <param name="rtype"></param>
        public void QueryPayOrder(string ordernum, int rtype)
        {
            try
            {
                //jsd查询
                if (rtype >= 20 && rtype <= 25)
                {
                    Dictionary<string, string> data = new Dictionary<string, string>();
                    data.Add("businessId", ConfigurationData.jsdmchid);
                    data.Add("signType", "MD5");
                    data.Add("outTradeNo", ordernum);
                    TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                    data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());

                    var Ddata = AsciiDictionary(data);
                    var urlstr = Utils.GetUrlString(Ddata);
                    data.Add("sign", StringHelper.MD5(urlstr));

                    var diclist2 = AsciiDictionary(data);
                    var str = Utils.GetUrlString(diclist2);

                    var rdata = Utils.HttpPost(ConfigurationData.jsdpayurl + "/pay/queryPayOrder", str);
                    var resultEntity = JsonHelper.JSONToObject<DDpayQuery>(rdata);
                    Log.Error("QueryPayOrder", rdata);
                    if (resultEntity.successed)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(ordernum));
                        if (entity.businessOrderState == 0)
                        {
                            entity.businessOrderState = resultEntity.returnValue.businessOrderState;
                            entity.orderState = resultEntity.returnValue.orderState;
                            if(resultEntity.returnValue.payTime!=null)
                            entity.payTime = resultEntity.returnValue.payTime.Value;
                           // entity.serviceCharge = resultEntity.returnValue.serviceCharge;
                            _rechargeService.UpdateEntity(entity);
                        }
                    }
                }
                
            }
            catch (Exception ex)
            {


            }
        }


        /// <summary>
        /// 充值金币
        /// </summary>
        /// <param name="number"></param>
        /// <param name="rechargeType"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AddRechargeRecord(int number,int rechargeType, int uid)
        {
            try
            {
                int disc = 0;
                int dismoney = 0;
                string ret = "-1";
                if (uid.Equals(0) && Session["userInfo"] == null)
                {
                    return PageJsAlertByContent("请登录后充值!");
                }
                else
                {
                    string rchanal = "";
                    if (number.Equals(0))
                    {
                        return PageJsAlertByContent("请选择充值金额!");
                    }

                    if (string.IsNullOrEmpty(Enum.GetName(typeof(Rechargechannel), rechargeType)))
                    {
                        return PageJsAlertByContent("支付渠道异常!");
                    }
                    else
                    {
                        rchanal = Enum.GetName(typeof(Rechargechannel), rechargeType);
                        disc=  GetDiscount("",rechargeType.ToString());
                        dismoney =number+ number * disc/100;
                    }

                    lock (DTKeys.paylock)
                    {

                        var entity = new RechargeRecordEntity
                        {
                            Number = number,
                            UserId = uid,
                            RechargeType = rechargeType,
                            Remark = "充值金币",
                            GoldCount =   dismoney * 100 
                        };
                       
                        entity.OrderNumber = StringHelper.GenerateId();
                        //蚂蚁
                        if (rechargeType <= 3)
                        {
                            Dictionary<string, string> listkey = new Dictionary<string, string>();

                            listkey.Add("loginName", ConfigurationData.loginName);
                            listkey.Add("orderNo", entity.OrderNumber);
                            listkey.Add("orderMoney", HttpUtility.UrlEncode((entity.Number * 100).ToString()));//写死测试
                            listkey.Add("paychannel", rchanal);
                            listkey.Add("orderType", "A");
                            listkey.Add("externalId", entity.UserId.ToString());
                            listkey.Add("notifyUrl", ConfigurationData.notifyUrl);

                            var diclist = AsciiDictionary(listkey);
                            var urlstr = Utils.GetUrlString(diclist);
                            var rsastring = StringHelper.RSAEncrypt(urlstr, ConfigurationData.privatekey);

                            listkey.Add("sign", HttpUtility.UrlEncode(rsastring));
                            var diclist2 = AsciiDictionary(listkey);
                            var str = Utils.GetUrlString(diclist2);
                            var data = Utils.HttpPost(ConfigurationData.payurl, str);
                            var result = _RechargeRecordService.AddEntity(entity);


                            return Content(data, "text/html", Encoding.UTF8);
                        }
                        else if (rechargeType == 10 || rechargeType == 11)//老潘支付
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();

                            data.Add("mch_id", ConfigurationData.mch_id);
                            data.Add("mch_secret", ConfigurationData.xmkey);
                            data.Add("timestamp", Utils.GetTimeStamp());
                            data.Add("out_trade_no", entity.OrderNumber);
                            data.Add("pay_type", rchanal);
                            data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
                            data.Add("notify_url", ConfigurationData.xmnotifyUrl);


                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);


                            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);
                            var rdata = Utils.HttpPost(ConfigurationData.xmpayurl + "/api/pay/gateway", str);
                            var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);

                            if (resultEntity.code.Equals("100"))
                            {
                                entity.CentreOrderNum = resultEntity.order_no;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.data.url);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
                        }
                        else if (rechargeType >= 20 && rechargeType <= 25)//滴滴
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("businessId", ConfigurationData.jsdmchid);
                            data.Add("signType", "MD5");
                            data.Add("uid", uid.ToString());
                            data.Add("amount", HttpUtility.UrlEncode((entity.Number).ToString()));
                            TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());

                            data.Add("outTradeNo", entity.OrderNumber);
                            data.Add("payMethod", (rechargeType - 20).ToString());
                            data.Add("dataType", "1");
                            data.Add("notifyUrl", ConfigurationData.jsdnotifyUrl);
                            data.Add("returnUrl", "https://www.baidu.com/");
                            data.Add("secret", ConfigurationData.jsdkey);

                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);
                            data.Add("sign", StringHelper.MD5(urlstr));

                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);

                            var rdata = Utils.HttpPost(ConfigurationData.jsdpayurl + "/pay/createPayOrder", str);
                            var result = _RechargeRecordService.AddEntity(entity);
                            if (result.ID > 0)
                            {

                                return Content(rdata, "text/html", Encoding.UTF8);
                            }
                            else
                                return PageJsAlertByContent("下单失败");

                        }
                        else if (rechargeType >= 100 && rechargeType < 200)//金樽
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("businessId", ConfigurationData.jzmacId);
                            data.Add("amount", HttpUtility.UrlEncode((entity.Number).ToString()));
                            TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());
                            data.Add("outTradeNo", entity.OrderNumber);
                            data.Add("payMethodId", (rechargeType - 100).ToString());
                            data.Add("notifyUrl", ConfigurationData.jznotifyUrl);
                            data.Add("returnUrl", "https://www.baidu.com/");
                            data.Add("secret", ConfigurationData.jzkey);

                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);
                            data.Add("sign", StringHelper.MD5(urlstr));

                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);

                            var rdata = Utils.HttpPost(ConfigurationData.jzpayurl + "/pay/createOrder", str);
                            if (!rdata.Contains("errorDesc"))
                            {
                                _RechargeRecordService.AddEntity(entity);
                                return Content(rdata, "text/html", Encoding.UTF8);
                            }
                            else
                                return PageJsAlertByContent("下单失败");
                        }
                        else if (rechargeType >= 200 && rechargeType < 300)  //聚力 暂时不用
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("businessId", ConfigurationData.jljhmacId);
                            data.Add("signType", "MD5");
                            data.Add("uid", uid.ToString());
                            data.Add("amount", HttpUtility.UrlEncode((entity.Number).ToString()));
                            TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                            data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());

                            data.Add("outTradeNo", entity.OrderNumber);
                            data.Add("payMethod", (rechargeType - 200).ToString());
                            data.Add("dataType", "1");
                            data.Add("notifyUrl", ConfigurationData.jljhnotifyUrl);
                            data.Add("returnUrl", "https://www.baidu.com/");
                            data.Add("secret", ConfigurationData.jljhkey);

                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);
                            data.Add("sign", StringHelper.MD5(urlstr));

                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);

                            var rdata = Utils.HttpPost(ConfigurationData.jljpayurl, str);
                            var result = _RechargeRecordService.AddEntity(entity);
                            if (result.ID > 0) return Content(rdata, "text/html", Encoding.UTF8);
                            else
                                return PageJsAlertByContent("下单失败");
                        }
                        else if (rechargeType >= 8000 && rechargeType < 9000)//豪杰
                        {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("amount", HttpUtility.UrlEncode((entity.Number * 100).ToString()));//支付金额 豪杰金额单位为 “分”
                            data.Add("appId", ConfigurationData.hjAppId);                             //"657a4579dfea41a9980c84d9fa81b04b");//应用id  
                            data.Add("body", entity.Remark);                                          //商品描述  
                            data.Add("currency", "cny");                                              //币种 cny= 人民币
                            data.Add("mchId", ConfigurationData.hjmerchandid);                        //商户id
                            data.Add("mchOrderNo", entity.OrderNumber);                               //商户订单号
                            data.Add("notifyUrl", ConfigurationData.hjnotifyUrl);                      //支付结果后回调url
                            data.Add("productId", rechargeType.ToString());                           //支付产品id 8000
                            data.Add("subject", "339游戏");                                      //商品主题

                            var Ddata = AsciiDictionary(data);
                            string stringA = Utils.GetUrlString(Ddata);
                            string stringSignTemp = stringA + "&key=AFOVTHGVEBS8DGGIPLOMYM4TJI6IT1DXVMNJCECBSODZXCOY61CPCWJPESPVJDILDIMVE2HTOGES5EVVYI87RRLJFYSQORE0HIXONIYM6MOHFQWN0E3AO4WH26AYEJ6R";
                            string sign = StringHelper.MD5(stringSignTemp);///MD5加密
                            string signValue = sign.ToUpper();///全部转换为大写
                            data.Add("sign", signValue);//签名
                            var rdata = AsciiDictionary(data);
                            var str1 = JsonHelper.ObjectToJSON(rdata);
                            var str = "params=" + str1;
                           // var rdatapost = Utils.HttpPost(ConfigurationData.hjPayurl, str);//"http://47.254.44.144:3020/api/pay/create_order",str)
                            var rdatapost = http.PostHtml(ConfigurationData.hjPayurl, str, httpParam, Encoding.GetEncoding("UTF-8"));
                            //var result = _RechargeRecordService.AddEntity(entity);
                            var resultEntity = JsonHelper.JSONToObject<HJPay>(rdatapost);

                            if (resultEntity.retCode.Equals("SUCCESS"))
                            {
                                entity.CentreOrderNum = resultEntity.payOrderId;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.payparams.payUrl);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.retMsg);
                            }

                        }
                        else if (rechargeType == 31) {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                            string money = entity.Number.ToString() + ".00";
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("account_id", ConfigurationData.xxmerchandid);//商户ID
                            data.Add("content_type", "json");                   //返回页面类型
                            data.Add("thoroughfare", "alipay_auto");           // wechat_auto（商户版微信）、alipay_auto（商户版支付宝）、service_auto（服务版微信 / 支付宝）
                            data.Add("type", "2");                               //支付类型，该参数在服务版下有效（service_auto），其他可为空参数，微信：1，支付宝：2
                            data.Add("out_trade_no", entity.OrderNumber);       //订单信息，在发起订单时附加的信息，如用户名，充值订单号等字段参数
                            data.Add("robin", "2");                              //轮训，2：开启轮训，1：进入单通道模式
                                                                                 //    data.Add("keyId", ConfigurationData.xxskey);        //如果该请求为轮训模式，则本参数无效，本参数为单通道模式
                            data.Add("amount", money);                //支付金额
                            data.Add("callback_url", ConfigurationData.xxnotifyUrl);          //	异步通知地址，在支付完成时
                            data.Add("success_url", "http://106.12.101.44:85/");            //支付成功后网页自动跳转地址 仅在网页类型为text下有效，json会将该参数返回
                            data.Add("error_url", "http://106.12.101.44:85/");              //支付失败时，或支付超时后网页自动跳转地址，仅在网页类型为text下有效，json会将该参数返回

                            string signStr = getSign(money, entity.OrderNumber, ConfigurationData.xxskey);//签名算法
                            data.Add("sign", signStr);
                            var datainfo = Utils.GetUrlString(data);
                            var str = "robin=2" +                                                     //轮训
                                      "&callback_url=" + ConfigurationData.xxnotifyUrl +
                                      "&error_url=http://106.12.101.44:85/" +
                                      "&amount=" + entity.Number.ToString() + ".00" +                         //金额100
                                      "&account_id=" + ConfigurationData.xxmerchandid +                    //商户id 64
                                      "&out_trade_no=" + entity.OrderNumber +                             //订单
                                      "&content_type=json" +                                              //网页类型
                                      "&sign=" + signStr +                                              //签名
                                                                                                        //  "&keyId="+ ConfigurationData.xxskey +                            //S_KEY： FA59CB4905F14D
                                      "&type=2" +                                                     //支付类型：2 支付宝
                                      "&thoroughfare=alipay_auto" +                                  //支付通道 ：服务版微信/支付宝
                                      "&success_url=http://106.12.101.44:85/";

                            var str1 = http.PostHtml(ConfigurationData.xxPayurl, str, httpParam, Encoding.GetEncoding("UTF-8"));
                            // var rdatapost = Utils.HttpPost(ConfigurationData.xxPayurl, datainfo);
                            // var result = _RechargeRecordService.AddEntity(entity);
                            var resultEntity = JsonHelper.JSONToObject<XXPay>(str1);

                            if (resultEntity.msg == "success")
                            {
                                entity.CentreOrderNum = entity.OrderNumber;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.data.qrcode_url2);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
//新秀支付
                        } 
                        else if (rechargeType==81) {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                            string money = entity.Number.ToString() + ".00";
                            Dictionary<string, string> data = new Dictionary<string, string>();
                            data.Add("shid", ConfigurationData.shshid);//商户ID
                            data.Add("orderid", entity.OrderNumber);                   //订单号
                            data.Add("amount", money);           // 交易金额
                            data.Add("notifyurl", ConfigurationData.shnotifyUrl);                               //服务端返回地址
                         //   data.Add("url", "");       //页面跳转返回地址 不填默认跳转系统支付成功页面
                            data.Add("pay", "zfb");                              //支付宝扫码 :微信（wx）    支付宝（zfb）聚合码（jhm） 银联（bank）
                                                                             
                           // data.Add("Md5key", ConfigurationData.shMd5key);                //商户后台API管理获取
                          //  data.Add("tjurl", ConfigurationData.shtjurl);          //提交地址
                         //   data.Add("success_url", "http://106.12.101.44:85/");            //支付成功后网页自动跳转地址 仅在网页类型为text下有效，json会将该参数返回
                         //   data.Add("error_url", "http://106.12.101.44:85/");              //支付失败时，或支付超时后网页自动跳转地址，仅在网页类型为text下有效，json会将该参数返回

                            string signStr = getSign(money, entity.OrderNumber, ConfigurationData.shMd5key);//签名算法
                            data.Add("sign", signStr);
                            var datainfo = Utils.GetUrlString(data);
                            var str = "shid=" + ConfigurationData.shshid+
                                      "&pay=" + "zfb" +          //
                                      "&orderid=" + entity.OrderNumber +
                                           "&notifyurl=" + ConfigurationData.shnotifyUrl +
                                      "&amount=" + money +                        
                                          
                                      //"&url=" +                                            
                                      "&Md5key=" + ConfigurationData.shMd5key +                                
                                      "&tjurl=" + ConfigurationData.shtjurl +                             
                                      "&sign=http://106.12.101.44:85/";

                            var str1 = http.PostHtml(ConfigurationData.xxPayurl, str, httpParam, Encoding.GetEncoding("UTF-8"));
                            // var rdatapost = Utils.HttpPost(ConfigurationData.xxPayurl, datainfo);
                            // var result = _RechargeRecordService.AddEntity(entity);
                            var resultEntity = JsonHelper.JSONToObject<XXPay>(str1);

                            if (resultEntity.msg == "success")
                            {
                                entity.CentreOrderNum = entity.OrderNumber;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.data.qrcode_url2);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
                        }

                        else
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();

                            data.Add("mch_id", ConfigurationData.mch_id2);
                            data.Add("mch_secret", ConfigurationData.xmkey2);
                            data.Add("timestamp", Utils.GetTimeStamp());
                            data.Add("out_trade_no", entity.OrderNumber);
                            data.Add("pay_type", rchanal == "PHFCZ2" ? "PQYHB|PHFCZ" : rchanal);
                            data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
                            data.Add("notify_url", ConfigurationData.xmnotifyUrl2);


                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);

                            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);
                            var rdata = Utils.HttpPost(ConfigurationData.xmpayurl2, str);
                            var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);
                            if (resultEntity.code.Equals("100"))
                            {
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.data.url);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("AddRechargeRecord", ex.Message);
                return PageJsAlertByContent("下单失败：系统错误"+ ex.Message);
            }
        }
      
        
        /// <summary>
        /// 充值金币
        /// </summary>
        /// <param name="number"></param>
        /// <param name="rechargeType"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult SHRechargeRecord(int number, int rechargeType,string paytype, int uid)
        {
            try
            {
                int disc = 0;
                int dismoney = 0;
                string ret = "-1";
                if (uid.Equals(0) && Session["userInfo"] == null)
                {
                    return PageJsAlertByContent("请登录后充值!");
                }
                else
                {
                    string rchanal = "";
                    if (number.Equals(0))
                    {
                        return PageJsAlertByContent("请选择充值金额!");
                    }

                    if (string.IsNullOrEmpty(Enum.GetName(typeof(Rechargechannel), rechargeType)))
                    {
                        return PageJsAlertByContent("支付渠道异常!");
                    }
                    else
                    {
                        rchanal = Enum.GetName(typeof(Rechargechannel), rechargeType);
                        disc = GetDiscount(paytype,rechargeType.ToString());
                        dismoney = number*disc;
                    }


                    lock (DTKeys.paylock)
                    {
                        var entity = new RechargeRecordEntity
                        {
                            Number = number,
                            UserId = uid,
                            RechargeType = rechargeType,
                            Remark = rechargeType+":充值金币",
                            GoldCount = number * 100+ dismoney
                        };
                        entity.OrderNumber = StringHelper.GenerateId();
                        //蚂蚁
                    
                         if (rechargeType == 51)
                        {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                          
                            // string money = entity.Number.ToString() + ".00";
                            //同步通知地址
                            string resulturl = "http://" + Request.Url.Host + "/Manage/return_url";
                            //异步通知地址
                            string notifyurl = "http://" + Request.Url.Host + "/Manage/notify_url";
                            //充值金额
                            string money = entity.Number.ToString() + ".00"; ;
                            //充值账号
                            string name = uid.ToString();
                            //所属商户
                            string merchant = ConfigurationData.shshid;// Request.Form["merchant"];
                                                                       //充值订单
                            string orderid = entity.OrderNumber;
                            //支付平台网关


                        
                            return  CreatePay(uid.ToString(), money, ConfigurationData.shshid, entity.OrderNumber, entity);
                          
                        }
                        else if (rechargeType >= 600 && rechargeType < 700)
                        {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                            string money = entity.Number.ToString() + ".00";
                            //var str = "amount=" + money +       //支付金额
                            //          "&currency=" + "CNY" +          //交易币种
                            //          "&gateway=" + paytype +       //支付信道编码 alipay alipayH5 wechat wechatH5
                            //          "&merchantid=" + ConfigurationData.gnotifyUrl +     //商户编号
                            //          "&notifyurl=" + ConfigurationData.guserid +     //通知地址
                            //          "&orderid=" + entity.OrderNumber +        //商户订单号
                            //          "&returnurl=" + ConfigurationData.gnotifyUrl +      //返回地址
                            //          "&service=" + "Payment" +        //请求类型
                            //          "&sign=" + entity.OrderNumber;    //签名

                            //var str2 = str + "&user_order_id=" + entity.OrderNumber;
                            //var signstr = StringHelper.MD5(str2).ToUpper();
                            //str += "&sign=" + signstr;

                            string requestStr = CreateQueryParam(paytype, ConfigurationData.guserid, ConfigurationData.gnotifyUrl, entity.OrderNumber, ConfigurationData.gurl, money);
                            //    var str1 = http.PostHtml(ConfigurationData.gtjurl, requestStr, httpParam, Encoding.GetEncoding("UTF-8"));
                            string respResult = HttpUtil.SendDataByPost(ConfigurationData.gtjurl, requestStr);
                            string[] resps;
                            string respurl = "";
                            if (respResult.Contains("window"))
                            {
                                resps = respResult.Split('"');
                                respurl = resps[1].ToString();
                                entity.CentreOrderNum = entity.OrderNumber;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(respurl);
                            }
                            return PageJsAlertByContent("下单失败：" + respResult);

                        }
                        else if (rechargeType >= 360 && rechargeType < 400)
                        {
                            HttpHelper http = new HttpHelper();
                            HttpPara httpParam = new HttpPara();
                            httpParam.Accept = "*/*";
                            httpParam.ContentType = "application/x-www-form-urlencoded; Charset=UTF-8";
                            httpParam.UserAgent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)";
                            string money = entity.Number.ToString()+ ".00";
                            //var str = "amount=" + money +
                            //          "&callback_url=" + ConfigurationData.vueurl +          //
                            //          "&channel_code=" + paytype +
                            //          "&notifyurl=" + ConfigurationData.vuenotifyUrl +
                            //          "&user_id=" + ConfigurationData.vueuserid +
                            //          "&user_order_id=" + entity.OrderNumber;
                            Dictionary<string, string> listkey = new Dictionary<string, string>();

                            listkey.Add("amount", money);
                            listkey.Add("callback_url", ConfigurationData.vueurl);
                            listkey.Add("channel_code", paytype);
                            listkey.Add("notify_url", ConfigurationData.vuenotifyUrl);
                            listkey.Add("user_id", ConfigurationData.vueuserid);
                            listkey.Add("user_order_id", entity.OrderNumber);
                            var diclist = AsciiDictionary(listkey);
                            var c = Utils.GetUrlString(diclist);

                            var str2 = c + "&secret=" + ConfigurationData.vueMd5key;
                            var signstr = StringHelper.MD5(str2).ToUpper();
                            listkey.Add("sign", signstr); 
                          var  str =c+ "&sign=" + signstr;

                            var str1 = http.PostHtml(ConfigurationData.vuetjurl, str, httpParam, Encoding.GetEncoding("UTF-8"));

                            var resultEntity = JsonHelper.JSONToObject<VUEPay>(str1);

                            if (resultEntity.errno == 0)
                            {
                                entity.CentreOrderNum = entity.OrderNumber;
                                entity.businessOrderState = 0;
                                entity.orderState = 0;
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.cashier_url);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
                        }
                        else
                        {
                            Dictionary<string, string> data = new Dictionary<string, string>();

                            data.Add("mch_id", ConfigurationData.mch_id2);
                            data.Add("mch_secret", ConfigurationData.xmkey2);
                            data.Add("timestamp", Utils.GetTimeStamp());
                            data.Add("out_trade_no", entity.OrderNumber);
                            data.Add("pay_type", rchanal == "PHFCZ2" ? "PQYHB|PHFCZ" : rchanal);
                            data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
                            data.Add("notify_url", ConfigurationData.xmnotifyUrl2);


                            var Ddata = AsciiDictionary(data);
                            var urlstr = Utils.GetUrlString(Ddata);

                            data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
                            var diclist2 = AsciiDictionary(data);
                            var str = Utils.GetUrlString(diclist2);
                            var rdata = Utils.HttpPost(ConfigurationData.xmpayurl2, str);
                            var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);
                            if (resultEntity.code.Equals("100"))
                            {
                                var result = _RechargeRecordService.AddEntity(entity);
                                return Redirect(resultEntity.data.url);
                            }
                            else
                            {
                                return PageJsAlertByContent("下单失败：" + resultEntity.msg);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("AddRechargeRecord", ex.Message);
                return PageJsAlertByContent("下单失败：系统错误");
            }
        }

        #region GPay 支付
        /// <summary>
        /// G请求支付
        /// </summary>
        /// <param name="gatway">支付编码</param>
        /// <param name="menchantid">商户编号</param>
        /// <param name="notiurl">通知地址</param>
        /// <param name="orderid">商户订单号</param>
        /// <param name="returnurl">返回地址</param>
        /// <param name="amount">金额</param>
        /// <returns></returns>
        public string CreateQueryParam(string gatway,string menchantid,string notiurl,string orderid,string returnurl,string amount)
        {
            string rtn = string.Empty;

            SortedDictionary<string, string> dic = new SortedDictionary<string, string>();
            dic.Add("amount", amount);
            dic.Add("currency", "CNY");
            dic.Add("gateway", gatway);
            dic.Add("merchantid", menchantid);
            dic.Add("notifyurl", notiurl);
            dic.Add("orderid", orderid);
            dic.Add("returnurl", returnurl);
            dic.Add("service", "Payment");


            string signStr = HttpUtil.CreateLinkString4Sign(dic);
            string certPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Cert\private_key.pem");
          
            //if (!File.Exists(certPath))
            //{
            //    Response.Write("Cert not found.");
            //    Response.End();
            //}


            string signData = HttpUtil.RSASignCharSet(signStr, certPath, "UTF-8", "RSA2");

            dic.Add("sign", HttpUtility.UrlEncode(signData));

            rtn = HttpUtil.CreateLinkString(dic, true);

            return rtn;
        }
        #endregion

        #region 商户支付

        static string secretkey = ConfigurationData.shMd5key;//正式KEY 5d1077210p6a397
        /// <summary>
        /// 创建支付
        /// </summary>
        /// <returns></returns>
        public ActionResult CreatePay(string userid,string money_str,string shid,string dingdanid, RechargeRecordEntity entity)
        {
            //同步通知地址
            string resulturl = "http://" + Request.Url.Host + "/Manage/return_url";
            //异步通知地址
            string notifyurl = "http://" + Request.Url.Host + "/Manage/notify_url";
            //充值金额
            string money = money_str;
            //充值账号
            string name = userid;
            //所属商户
            string merchant = shid;// Request.Form["merchant"];
            //充值订单
            string orderid = dingdanid;
            //支付平台网关
            // string url = "http://localhost:54480/Pay/Add";//测试网关
            string url = ConfigurationData.shtjurl;//正式网关

            SortedDictionary<string, string> args = new SortedDictionary<string, string>();
            args.Add("orderid", orderid);
            args.Add("resulturl", resulturl);
            args.Add("notifyurl", notifyurl);
            args.Add("money", money);
            args.Add("name", name);
            args.Add("merchant", merchant);

            var Result = BuildHtmlRequest(url, args);
            entity.CentreOrderNum = dingdanid;
            entity.businessOrderState = 0;
            entity.orderState = 0;
            var result = _RechargeRecordService.AddEntity(entity);
            return Content(Result);

        }
        /// <summary>
        /// 同步通知
        /// </summary>
        /// <returns></returns>
        public ActionResult return_url()
        {
            string orderguid = Request.Form["orderguid"];
            string orderid = Request.Form["orderid"];
            string money = Request.Form["money"];
            string name = Request.Form["name"];
            string memo = Request.Form["memo"];
            //1为成功，2为失败
            string state = Request.Form["state"];
            string merchant = Request.Form["merchant"];
            string sign = Request.Form["sign"];

            SortedDictionary<string, string> args = new SortedDictionary<string, string>();
            args.Add("orderguid", orderguid);
            args.Add("orderid", orderid);
            args.Add("money", money.ToString());
            args.Add("name", name);
            args.Add("memo", memo);
            args.Add("merchant", merchant);
            args.Add("state", state.ToString());

            var IsPay = veryfy(args, sign);//验证提交过来的参数是否被串改过         
            if (IsPay)
            {
                if (state == "1")
                {
                    //充值成功
                    //特别注意：如果您已经处理过您的业务了，再接到通知的时候就不要处理了

                }
                else
                {
                    //充值失败

                }
            }
            else
            {
                memo = memo + "-错误的订单";
            }
            SHPay order = new SHPay()
            {
             orderid = orderid,
             money = money,
             name = name,
             State = state,
             memo = memo
            };
            return View(order);

        }
        /// <summary>
        /// 异步通知  
        /// 如果不输出success 或fail ，支付平台将每隔三分钟再发起一次，共9次
        /// </summary>
        [AllowAnonymous]
        public void notify_url()
        {
            string orderguid = Request.Form["orderguid"];
            string orderid = Request.Form["orderid"];
            string money = Request.Form["money"];
            string name = Request.Form["name"];
            string memo = Request.Form["memo"];
            //1为成功，2为失败
            string state = Request.Form["state"];
            string merchant = Request.Form["merchant"];
            string sign = Request.Form["sign"];

            SortedDictionary<string, string> args = new SortedDictionary<string, string>();
            args.Add("orderguid", orderguid);
            args.Add("orderid", orderid);
            args.Add("money", money.ToString());
            args.Add("name", name);
            args.Add("memo", memo);
            args.Add("merchant", merchant);
            args.Add("state", state.ToString());
            var IsPay = veryfy(args, sign);//验证提交过来的参数是否被串改
            if (IsPay)
            {
                if (state == "1")
                {
                    //充值成功
                    //特别注意：如果您已经处理过您的业务了，再接到通知的时候就不要处理了
                    Response.Write("success");
                }
                else
                {
                    //充值失败
                    Response.Write("fail");//fail or success
                }

            }
            else
            {
                Response.Write("错误的订单");
            }
        }
        /// <summary>
        /// 接收通知时，验证参数是否正确
        /// </summary>
        /// <param name="dic"></param>
        /// <param name="RequestSign"></param>
        /// <returns></returns>
        private bool veryfy(SortedDictionary<string, string> dic, string RequestSign)
        {
            var signStr = CreatSign(dic);
            if (!signStr.Equals(RequestSign))
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// 建立请求，以表单HTML形式构造
        /// </summary>
        /// <param name="url"></param>
        /// <param name="paras"></param>
        /// <returns></returns>
        private string BuildHtmlRequest(string url, SortedDictionary<string, string> paras)
        {
            //添加签名
            string sign = CreatSign(paras);
            paras.Add("sign", sign);
            //待请求参数数组
            StringBuilder sbHtml = new StringBuilder();
            sbHtml.Append("<form id='zbsubmit' name='zbsubmit' action='" + url + "' method='Post'>");
            foreach (KeyValuePair<string, string> temp in paras)
            {
                sbHtml.Append("<input type='hidden' name='" + temp.Key + "' value='" + temp.Value + "'/>");
            }
            //submit按钮控件请不要含有name属性
            sbHtml.Append("<input type='submit' value='提交' style='display:none;'></form>");
            sbHtml.Append("<script>document.forms['zbsubmit'].submit();</script>");

            return sbHtml.ToString();
        }

        /// <summary>
        /// 对字符串进行MD5加密
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public string ToMD5(string text)
        {
            var md5 = new MD5CryptoServiceProvider();
            var data = md5.ComputeHash(Encoding.UTF8.GetBytes(text));
            var sBuilder = new StringBuilder();
            foreach (var s in data)
            {
                sBuilder.Append(s.ToString("x2"));
            }
            return sBuilder.ToString();
        }
        ///<summary>
        /// 除去数组中的空值和签名参数并以字母a到z的顺序排序
        /// </summary>
        /// <param name="dicArrayPre">过滤前的参数组</param>
        /// <returns>过滤后的参数组</returns>
        public Dictionary<string, string> FilterPara(SortedDictionary<string, string> dicArrayPre)
        {
            Dictionary<string, string> dicArray = new Dictionary<string, string>();
            foreach (KeyValuePair<string, string> temp in dicArrayPre)
            {
                if (temp.Key.ToLower() != "sign" && temp.Key.ToLower() != "sign_type" && temp.Value != "" && temp.Value != null)
                {
                    dicArray.Add(temp.Key, temp.Value);
                }
            }
            return dicArray;
        }
        /// <summary>
        /// 签名
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public string CreatSign(SortedDictionary<string, string> data)
        {
            var arg = FilterPara(data);
            string args = "";
            foreach (var item in arg)
            {
                args += item.Value;
            }
            return (ToMD5(args.ToLower() + secretkey)).ToLower();

        }
        #endregion

        #region 新秀sign获取
        private static string getSign(string amount, string orderNo,string s_key)
        {
            RC4Crypto rc4 = new RC4Crypto();
            string data = amount + orderNo;
            string md5Str = GetMd5Str(data);
            byte[] byts = rc4.EncryptEx(Encoding.UTF8.GetBytes(md5Str), s_key);
            string rc4Str = GetMd5Str(byts);
            return rc4Str;
        }
        public static string GetMd5Str(string ConvertString)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string t2 = BitConverter.ToString(md5.ComputeHash(UTF8Encoding.Default.GetBytes(ConvertString)));
            t2 = t2.Replace("-", "").ToLower();
            return t2;
        }

        public static string GetMd5Str(byte[] byts)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string t2 = BitConverter.ToString(md5.ComputeHash(byts));
            t2 = t2.Replace("-", "").ToLower();
            return t2;
        }


        #endregion

        #region 商户支付sign
        private static string getshSign(string jsonstr,string s_key)
        {
            RC4Crypto rc4 = new RC4Crypto();
            string data = jsonstr + s_key;
            string md5Str = GetMd5Str(data);
           // byte[] byts = rc4.EncryptEx(Encoding.UTF8.GetBytes(md5Str), s_key);
           // string md5low = md5Str.ToLower();
            return md5Str;
        }

        #endregion

        #region 豪杰代付 需要 代付信息界面需要前端传递代付的银行卡等信息
        /// <summary>
        /// 豪杰充值代付
        /// </summary>
        /// <param name="number">金额</param>
        /// <param name="rechargeType">支付产品id</param>
        /// <param name="uid">用户id</param>
        /// <returns></returns>
        //[HttpGet]
        //public ActionResult AddDFRechargeRecord(int number, int rechargeType, int uid)
        //{
        //    try
        //    {
        //        string ret = "-1";
        //        if (uid.Equals(0) && Session["userInfo"] == null)
        //        {
        //            return PageJsAlertByContent("请登录后充值!");
        //        }
        //        else
        //        {
        //            string rchanal = "";
        //            if (number.Equals(0))
        //            {
        //                return PageJsAlertByContent("请选择充值金额!");
        //            }
        //            if (string.IsNullOrEmpty(Enum.GetName(typeof(Rechargechannel), rechargeType)))
        //            {
        //                return PageJsAlertByContent("支付渠道异常!");
        //            }
        //            else
        //            {
        //                rchanal = Enum.GetName(typeof(Rechargechannel), rechargeType);
        //            }
        //            lock (DTKeys.paylock)
        //            {
        //                var entity = new RechargeRecordEntity
        //                {
        //                    Number = number,
        //                    UserId = uid,
        //                    RechargeType = rechargeType,
        //                    Remark = "充值金币",
        //                    GoldCount = number * 100
        //                };
        //                entity.OrderNumber = StringHelper.GenerateId();
        //                if (rechargeType >= 8000 && rechargeType < 9000)//豪杰
        //                {
        //                    Dictionary<string, string> data = new Dictionary<string, string>();
        //                    data.Add("mchId", "371");//商户id
        //                    data.Add("appId", ConfigurationData.hjAppId); //"657a4579dfea41a9980c84d9fa81b04b");//应用id   
        //                    data.Add("mchTransOrderNo", entity.OrderNumber);//商户订单号
        //                    data.Add("currency", "cny");//币种 cny= 人民币
        //                    data.Add("amount", HttpUtility.UrlEncode((entity.Number * 100).ToString()));//支付金额 接口接收单位是 分 1元=100分
        //                    data.Add("notifyUrl", ConfigurationData.hjnotifyUrl);//"www.baidu.com");//支付结果后回调url
        //                    data.Add("bankCode", ConfigurationData.hjdfbankCode);//"HPT00001");//银行卡代码如：HP00001
        //                    data.Add("bankName", ConfigurationData.hjdfbankName);//"中国工商银行");//开户行名称 
        //                    data.Add("accountType", ConfigurationData.hjdfaccountType);//"1");//账户类型1-银行卡转账,2-微信转账,3-支付宝转账,4-其他转账
        //                    data.Add("accountName", ConfigurationData.hjdfbankName);//"测试");//账户名
        //                    data.Add("accountNo", ConfigurationData.hjdfaccountNo); //"6215584402019166800");//账户号
        //                    data.Add("province", ConfigurationData.hjdfprovince);//"四川");//开户所在省份
        //                    data.Add("city", ConfigurationData.hjdfcity);//"成都");//开户所在地址

        //                    data.Add("param2", ConfigurationData.hjdfbankName);//"中国工商银行");

        //                    var Ddata = AsciiDictionary(data);
        //                    string stringA = Utils.GetUrlString(Ddata);
        //                    string stringSignTemp = stringA + "&key=AFOVTHGVEBS8DGGIPLOMYM4TJI6IT1DXVMNJCECBSODZXCOY61CPCWJPESPVJDILDIMVE2HTOGES5EVVYI87RRLJFYSQORE0HIXONIYM6MOHFQWN0E3AO4WH26AYEJ6R";
        //                    string sign = StringHelper.MD5(stringSignTemp);///MD5加密
        //                    string signValue = sign.ToUpper();///全部转换为大写
        //                    data.Add("sign", signValue);//签名
        //                    var rdata = AsciiDictionary(data);
        //                    var str1 = JsonHelper.ObjectToJSON(rdata);//转JSON
        //                    //var str = Utils.GetUrlString(rdata);
        //                    var str = "params=" + str1;
        //                    var rdatapost = Utils.HttpPost(ConfigurationData.hjdfpayUrl, str);//"http://47.254.44.144:3020/api/trans/create_order"
        //                    var result = _RechargeRecordService.AddEntity(entity);
        //                    if (result.ID > 0) return Content(rdatapost, "text/html", Encoding.UTF8);
        //                    else
        //                        return PageJsAlertByContent("下单失败");
        //                }
        //                else
        //                {
        //                    Dictionary<string, string> data = new Dictionary<string, string>();

        //                    data.Add("mch_id", ConfigurationData.mch_id2);
        //                    data.Add("mch_secret", ConfigurationData.xmkey2);
        //                    data.Add("timestamp", Utils.GetTimeStamp());
        //                    data.Add("out_trade_no", entity.OrderNumber);
        //                    data.Add("pay_type", rchanal == "PHFCZ2" ? "PQYHB|PHFCZ" : rchanal);
        //                    data.Add("total_fee", HttpUtility.UrlEncode((entity.Number).ToString()));
        //                    data.Add("notify_url", ConfigurationData.xmnotifyUrl2);


        //                    var Ddata = AsciiDictionary(data);
        //                    var urlstr = Utils.GetUrlString(Ddata);

        //                    data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
        //                    var diclist2 = AsciiDictionary(data);
        //                    var str = Utils.GetUrlString(diclist2);
        //                    var rdata = Utils.HttpPost(ConfigurationData.xmpayurl2, str);
        //                    var resultEntity = JsonHelper.JSONToObject<XMPay>(rdata);
        //                    if (resultEntity.code.Equals("100"))
        //                    {
        //                        var result = _RechargeRecordService.AddEntity(entity);
        //                        return Redirect(resultEntity.data.url);
        //                    }
        //                    else
        //                    {
        //                        return PageJsAlertByContent("下单失败：" + resultEntity.msg);
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.Error("AddRechargeRecord", ex.Message);
        //        return PageJsAlertByContent("下单失败：系统错误");
        //    }
        //}

        #endregion

        public static Dictionary<string, string> AsciiDictionary(Dictionary<string, string> sArray)
        {
            Dictionary<string, string> asciiDic = new Dictionary<string, string>();
            string[] arrKeys = sArray.Keys.ToArray();
            Array.Sort(arrKeys, string.CompareOrdinal);
            foreach (var key in arrKeys)
            {
                string value = sArray[key];
                asciiDic.Add(key, value);
            }
            return asciiDic;
        }

        /// <summary>
        /// 根据通道名称和通道编号 获取通道优惠金额
        /// </summary>
        /// <param name="paytype"></param>
        /// <param name="rechargeType"></param>
        /// <returns></returns>
        public int GetDiscount(string paytype, string rechargeType)
        {

            try
            {
                var rech = new RechargeChannel();
                if (paytype != "" && paytype != null)
                {
                    rech = _rechargeChannelService.GetEntityByWhere(x => x.payurl.Contains(paytype));
                }
                else {
                    rech = _rechargeChannelService.GetEntityByWhere(x => x.payurl.Contains(rechargeType));
                }

                if (rech!=null)
                {
                    return rech.Discount;
                }
                return 0;

            }
            catch (Exception)
            {

                throw;
            }

        }


        /// <summary>
        /// 充值通用类
        /// </summary>
        public bool Charge(int usrId, float number, int type)
        {
            try
            {
                cs_charge_gm _setcard = new cs_charge_gm
                {
                    fn = "cs_charge_gm",
                    userid = Convert.ToInt32(usrId),
                    type = type,
                    money = number,
                    gameid = 4
                };
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = HttpService.HttpGet(serviceUrl + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                return _scsetcard._ret == 0;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        /// <summary>
        /// 获取充值记录
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetRechargeRecordData(int pageIndex, int pageSize)
        {
            int tempId = user.UserId;
            DataResult<RechargeView> result = new DataResult<RechargeView>();
            var data = _RechargeRecordService
                .GetEntityLisrByWhere(w => w.UserId == tempId && w.IsDel == false)
                .OrderByDescending(w => w.CreatTime)
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .Select(w => new RechargeView
                {
                    CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss"),
                    ID = w.ID,
                    Number = w.Number,
                    OrderNumber = w.OrderNumber,
                    RechargeType = w.RechargeType,
                    UserId = w.UserId.ToString(),
                    Remark = w.Remark,
                    GoldCount = w.GoldCount
                });
            result.Data = data.ToList();
            result.PageIndex = pageIndex;
            result.TotalCont = _RechargeRecordService.GetEntityLisrByWhere(w => w.UserId == tempId).Count;
            return Json(result);
        }
        /// <summary>
        /// 游戏登陆
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GameLogin(string userid, string password)
        {

            byte[] outputb =
            Convert.FromBase64String(password);
            string orgStr = Encoding.Default.GetString(outputb);

            string pwd = orgStr;
            var result = _snsService.Login(userid, pwd);
            if (result.Code == (int)Status.Success)
            {

                user = result.Data;

                user.ActiveCode = GetActiveCode(user.UserId);
                Session["userInfo"] = result.Data;
                Session["phone"] = result.Data.Mobile;
                return RedirectToAction("userIfo");
            }
            return RedirectToAction("login");

        }
        private string GetIP()
        {
            string ip = string.Empty;
            if (!string.IsNullOrEmpty(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_VIA"]))
                ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"]);
            if (string.IsNullOrEmpty(ip))
                ip = Convert.ToString(System.Web.HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]);
            return ip;
        }
        public ActionResult TtaxlogManage(DPagePara page)
        {
            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                page.Keywords = snsuser.UserId.ToString();
                var data = taxlog.GetTaxLog(page);
                string InnerHtml = Utils.OutPageListForBt(data.PageSize, data.PageIndex, data.TotalCount);
                data.InnerHtml = InnerHtml;
                return View(data);
            }
            else
                return Redirect("/Manage/login");
        }
        public ActionResult TuseragentlogManage(DPagePara page)
        {
            if (Session["userInfo"] != null)
            {
                var snsuser = Session["userInfo"] as SnsUserInfo;
                page.Keywords = snsuser.UserId.ToString();
                var data = taxlog.GetUserAgentlog(page);
                string InnerHtml = Utils.OutPageListForBt(data.PageSize, data.PageIndex, data.TotalCount);
                data.InnerHtml = InnerHtml;
                return View(data);
            }
            else
                return Redirect("/Manage/login");
        }
        /// <summary>
        /// 根据userID获取推荐码
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        private string GetActiveCode(int userId)
        {
            var activeEntity = _activeService.GetEntityByWhere(w => w.GenerateUserId == userId);
            return activeEntity == null ? "0" : activeEntity.Activecode.ToString();
        }
    }
}