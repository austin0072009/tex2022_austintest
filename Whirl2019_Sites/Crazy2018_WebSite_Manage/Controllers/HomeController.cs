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
    [LoginFilter(IsCheck = true)]
    public class HomeController : BaseController
    {
        private readonly ISiteConfigSerivice _siteService;
        private readonly IManageLogService _manageLogService;
        private readonly INavigationService _navigationService;
        private readonly IManagerRoleService _managerRoleService;
        private readonly IRoomListService _tableservice;
        private readonly ITaxlogService _taxlogservice;
        private readonly IRechargeRecordService _rechargeService;

        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public HomeController(IManageService manageService,
            ISiteConfigSerivice siteService,
            IManageLogService manageLogService,
            INavigationService navigationService,
            IManagerRoleService managerRoleService,
            IRoomListService tableservice,
            ITaxlogService taxlogservice,
            IRechargeRecordService rechargeService
            ) : base(manageService)
        {
            _siteService = siteService;
            _manageLogService = manageLogService;
            _navigationService = navigationService;
            _managerRoleService = managerRoleService;
            _tableservice = tableservice;
            _taxlogservice = taxlogservice;
            _rechargeService = rechargeService;
        }
       
        
        public ActionResult SysConfig()
        {

            return View();
        }
        public ActionResult Error()
        {
            return View();
        }
        public ActionResult TempletFileEdit()
        {
            return View();
        }
        public ActionResult TempletFileList()
        {
            return View();
        }
        public ActionResult UrlRewriteEdit()
        {
            return View();
        }

        public ActionResult UrlRewriteList()
        {
            return View();
        }
        #region 管理员相关
        public ActionResult ManagerList(DPage page)
        {
            nav_name = "manager_list";
            action_type = DTEnums.ActionEnum.View.ToString();
            if (page == null || page.PageIndex == 0)
                page.PageIndex = 1;
            Expression<Func<dt_manager, bool>> fun = w => w.role_type >= manager.role_type;
            if (!string.IsNullOrEmpty(page.Keywords))
                fun = w => w.role_type >= manager.role_type && w.user_name.Contains(page.Keywords) || w.real_name.Contains(page.Keywords);
            var managerInfo = _manageService.GetEntityLisrByWhere(fun)
                    .OrderBy(w => w.add_time)
                    .OrderByDescending(w => w.id)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize);
            var roleInfo = _managerRoleService.GetEntityLisrByWhere(w => w.id != 0);
            var data = (from m in managerInfo
                        join r in roleInfo on m.role_id
                        equals r.id
                        select new ManagerView
                        {
                            CreatTime =m.add_time==null?"": m.add_time.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                            email = m.email,
                            id = m.id,
                            is_lock = m.is_lock.Value,
                            password = m.password,
                            real_name = m.real_name,
                            role_name = r.role_name,
                            role_id = m.role_id.Value,
                            role_type = m.role_type.Value,
                            telephone = m.telephone,
                            user_name = m.user_name,
                            IP=m.IP
                        }).ToList();
            DataResults<ManagerView> result = new DataResults<ManagerView>();
            result.TotalCount = _manageService.GetCount(fun);
            result.Data = data;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.Keywords = page.Keywords;
            string pageUrl = Utils.CombUrlTxt("ManagerList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8);
            ViewBag.InnerHtml = InnerHtml;
            return View(result);
        }
        string defaultpassword = "0|0|0|0"; //默认显示密码
        public ActionResult ManagerEdit(string op, int id = 0)
        {
            ViewBag.Role = _managerRoleService.GetEntityLisrByWhere(w => w.id > 0);
            dt_manager data = new dt_manager();
            if (op == DTEnums.ActionEnum.Edit.ToString() && id > 0)
            {
                data = _manageService.GetEntityByID(id);
                data.password = defaultpassword;
            }
            return View(data);
        }
        [HttpPost]
        public ActionResult ManagerSave(dt_manager model)
        {
            dt_manager_log log = new dt_manager_log() { user_id = manager.id, user_name = manager.user_name, user_ip = DTRequest.GetIP() };
            if (model.id > 0)
            {
                var result = _manageService.GetEntityByID(model.id);
                if (!model.password.Equals(defaultpassword))
                    result.password = StringHelper.Encrypto(model.password, result.salt);
                result.real_name = model.real_name;
                result.telephone = model.telephone;
                result.email = model.email;
                result.is_lock = model.is_lock;
                result.role_id = model.role_id;
                if (!string.IsNullOrEmpty(model.IP))
                {
                    result.IP = model.IP;
                }
                else {
                    result.IP = "0.0.0.0";
                }
              
                _manageService.UpdateEntity(result);
                result.add_time = DateTime.Now;
                log.remark = "编辑管理员" + model.user_name;
                log.action_type = DTEnums.ActionEnum.Edit.ToString();
            }
            else
            {
                _manageService.Register(model);
                log.remark = "添加管理员" + model.user_name;
                log.action_type = DTEnums.ActionEnum.Add.ToString();
            }
            return RedirectToAction("ManagerList");
        }
        public ActionResult ManagerPwd()
        {
            return View();
        }
        public ActionResult ManagerLog(DPage page)
        {
            if (page == null && page.PageIndex == 0)
                page.PageIndex = 1;
            Expression<Func<dt_manager_log, bool>> fun = w => w.user_id > 0;
            if (!string.IsNullOrEmpty(page.Keywords))
                fun = w => w != null && w.user_name.Contains(page.Keywords) || w.action_type.Contains(page.Keywords);
            DataResults<dt_manager_log> result = new DataResults<dt_manager_log>();
            result.Data = _manageLogService
                .GetEntityLisrByWhere(fun).OrderByDescending(t=>t.add_time)
                .Skip((page.PageIndex - 1) * page.PageSize)
                .Take(page.PageSize).ToList();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.TotalCount = _manageLogService.GetCount(fun);
            string pageUrl = Utils.CombUrlTxt("ManagerLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8);
            ViewBag.InnerHtml = InnerHtml;
            return View(result);
        }
        #endregion
        #region 角色管理相关
        public ActionResult RoleList(DPage page)
        {
            nav_name = "manager_role";
            action_type = DTEnums.ActionEnum.View.ToString();
            if (page == null && page.PageIndex == 0)
                page.PageIndex = 1;
            Expression<Func<dt_manager_role, bool>> fun = w => w.role_type >= manager.role_type;
            if (!string.IsNullOrEmpty(page.Keywords))
                fun = w => w.role_type >= manager.role_type && w.role_name.Contains(page.Keywords);
            DataResults<dt_manager_role> result = new DataResults<dt_manager_role>();
            result.Data = _managerRoleService.GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.TotalCount = _managerRoleService.GetCount(fun);
            result.Keywords = page.Keywords;
            string pageUrl = Utils.CombUrlTxt("RoleList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8);
            ViewBag.InnerHtml = InnerHtml;
            return View(result);
        }
        public ActionResult RoleEdit(string op, int id=0)
        {
            var data = new dt_manager_role();
            var navData = _navigationService.GetEntityLisrByWhere(w => w.id > 0);
            ViewBag.navData = navData == null ? new List<dt_navigation>() : navData;
            ViewBag.id = id;
            ViewBag.ActionType = GetActionType();
            ViewBag.roleValue = new List<dt_manager_role_value>();
            if (!string.IsNullOrEmpty(op) && DTEnums.ActionEnum.Edit.ToString() == op)
            {
                var roleValue = _managerRoleService.GetRoleValues(id);
                ViewBag.roleValue = roleValue == null ? new List<dt_manager_role_value>() : roleValue;
                data = _managerRoleService.GetEntityByID(id);
            }
           
            return View(data);
        }
        public ActionResult RoleDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "RoleList", "parent.loadMenuTree"));
            var result = _managerRoleService.DelRole(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "RoleList", "parent.loadMenuTree"));

        }

        [HttpPost]
        public JsonResult SaveRole(RoleModel data)
        {
            return Json(_managerRoleService.SaveRole(data));
        }
        #endregion
        #region 首页 登陆 
        public ActionResult Index()
        {
            var roleInfo = _manageService.GetRoleInfo(manager.role_id);
            ViewData["roleInfo"] = roleInfo;
            return View(manager);
        }


        public ActionResult ManagerDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "ManagerList", "parent.loadMenuTree"));
            var result = _manageService.ManageDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "ManagerList", "parent.loadMenuTree"));
        }

        public ActionResult Center()
        {
            SiteConfig siteConfig = _siteService.loadConfig();
            var data = _taxlogservice.GetThisdateTaimeTaxlog(DateTime.Now.ToGetDayStartDateTime());
            
            siteConfig.totaltable = data.totaltable;
            siteConfig.Openingtable = data.Openingtable;
            siteConfig.Todaytax = data.Todaytax;
            siteConfig.TodayliuWater = data.TodayliuWater==null?0: data.TodayliuWater;
            siteConfig.TotalJackpot = data.TotalJackpot;
            return View(siteConfig);
        }
        [LoginFilter(IsCheck = false)]
        [AllowAnonymous]
        public ActionResult Login()
        {
            Session[DTKeys.SESSION_ADMIN_INFO] = null;
            Utils.WriteCookie("AdminName", "Loach", -14400);
            Utils.WriteCookie("AdminPwd", "Loach", -14400);
            return View();
        }
        [LoginFilter(IsCheck = false)]
        [HttpPost]
        public JsonResult Login(LoginModel model)
        {
            try
            {
                var returnMsg = string.Empty;
                if (string.IsNullOrEmpty(model.passWord) || string.IsNullOrEmpty(model.userName))
                {
                    return Json("请输入用户名或密码");
                }
                if (Session["AdminLoginSun"] == null)
                {
                    Session["AdminLoginSun"] = 1;
                }
                else
                {
                    Session["AdminLoginSun"] = Convert.ToInt32(Session["AdminLoginSun"]) + 1;
                }
               

                //判断登录错误次数
                if (Session["AdminLoginSun"] != null && Convert.ToInt32(Session["AdminLoginSun"]) > 5)
                {
                    return Json("错误超过5次，关闭浏览器重新登录！");
                }
                var result = _manageService.Login(model.userName, model.passWord);
               
                if (result == null)
                {
                    _manageLogService.AddEntity(
                        new dt_manager_log
                        {
                            user_name = model.userName,
                            action_type = DTEnums.ActionEnum.Login.ToString(),
                            remark = "用户名或密码有误，请重试！",
                            user_ip = DTRequest.GetIP(),
                            user_id = null
                        });
                    return Json("用户名或密码有误，请重试！");
                }
                else
                {
                    
                    string url = Request.Url.Host;
                    string urlipv4 = GetIP4Address();
                 
                    if (result.is_lock==1)
                    {
                        return Json("该账号无权限登陆！");
                    }
                    if (result.IP == "0.0.0.0" || result.IP == urlipv4)
                    {
                        
                        Session["AdminLoginSun"] = null;
                        Session[DTKeys.SESSION_ADMIN_INFO] = result;
                        CacheHelper.Insert(DTKeys.SESSION_ADMIN_INFO, result);
                        Session.Timeout = 45;
                        _manageLogService.AddEntity(new dt_manager_log
                        {
                            user_name = model.userName,
                            action_type = DTEnums.ActionEnum.Login.ToString(),
                            remark = "用户登录",
                            user_ip = DTRequest.GetIP(),
                            user_id = result.id,
                            add_time = DateTime.Now
                        });
                        //写入Cookies
                        Utils.WriteCookie("DTRememberName", model.userName, 14400);
                        Utils.WriteCookie("AdminName", "Loach", model.userName);
                        Utils.WriteCookie("AdminPwd", "Loach", model.passWord);
                        return Json(true);
                    }
                    else { return Json("该地址无权限登陆！"); }
                }
            }
            catch (Exception ex)
            {

                return Json("系统错误！请联系管理员！"+ex);
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
        #endregion
        private Dictionary<string, string> GetActionType()
        {
            return Utils.ActionType();
        }
        private int GetPageSize(int _default_size)
        {
            int _pagesize;
            if (int.TryParse(Utils.GetCookie("manager_page_size", "LoachPage"), out _pagesize))
            {
                if (_pagesize > 0)
                {
                    return _pagesize;
                }
            }
            return _default_size;
        }

        #region 充值回调
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
        /// 新秀支付回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult XXNotifyUrl()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var robin = Request.Form["robin"];
                var callback_url = Request.Form["callback_url"];
                var error_url = Request.Form["error_url"];
                var amount = Request.Form["amount"];
                var account_id = Request.Form["account_id"];
                var out_trade_no = Request.Form["out_trade_no"];
                var content_type = Request.Form["content_type"];
                var type = Request.Form["type"];
                var thoroughfare = Request.Form["thoroughfare"];
                var success_url = Request.Form["success_url"];

                var sign = Request.Form["sign"];
                versiy.Add("robin", robin);
                versiy.Add("callback_url", callback_url);
                versiy.Add("error_url", error_url);
                versiy.Add("amount", amount);
                versiy.Add("account_id", account_id);
                versiy.Add("out_trade_no", out_trade_no);
                versiy.Add("content_type", content_type);
                versiy.Add("type", type);
                versiy.Add("thoroughfare", thoroughfare);
                versiy.Add("success_url", success_url);

                var Ddata = AsciiDictionary(versiy);
                string urlstr = Utils.GetUrlString(Ddata);
                string stringSignTemp = urlstr;

                Log.Debug("XXNotifyUrl", stringSignTemp);
                Log.Debug("sign", sign);
                var dpara = getSign(amount+".00", out_trade_no, ConfigurationData.xxskey);

                if (dpara.Equals(sign))
                {
                    lock (DTKeys.hjlock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(out_trade_no));
                        if (entity != null && entity.IsHandel == false)
                        {
                            entity.OrderNumber = out_trade_no;
                            var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                            if (chargeRet) entity.orderState = 2;
                            else entity.orderState = 5;

                            entity.IsHandel = true;
                            entity.businessOrderState = 2;
                            _rechargeService.UpdateEntity(entity);
                        }

                        Log.Debug("XXNotifyUrl", "success");
                        return Content("success");
                    }
                }
                else
                {
                    Log.Debug("XXNotifyUrl", "验签失败！");
                    return Content("验签失败！");
                }

            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }
        #region 新秀sign获取
        private static string getSign(string amount, string orderNo, string s_key)
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


        /// <summary>
        /// 豪杰支付回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult HJNotifyUrl()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var amount = Request.Form["amount"];
                var appId = Request.Form["appId"];
                var body = Request.Form["body"];
                var currency = Request.Form["currency"];
                var mchId = Request.Form["mchId"];
                var mchOrderNo = Request.Form["mchOrderNo"];
                var notifyUrl = Request.Form["notifyUrl"];
                var productId = Request.Form["productId"];
                var subject = Request.Form["subject"];

                var sign = Request.Form["sign"];
                versiy.Add("amount", amount);//
                versiy.Add("appId", appId);//
                versiy.Add("body", body);
                versiy.Add("currency", currency);
                versiy.Add("mchId", mchId);//
                versiy.Add("mchOrderNo", mchOrderNo);//
                versiy.Add("notifyUrl", notifyUrl);
                versiy.Add("productId", productId);//
                versiy.Add("subject", subject);

                //
               // versiy.Add("status");

                var Ddata = AsciiDictionary(versiy);
                string urlstr = Utils.GetUrlString(Ddata);
                string stringSignTemp = urlstr + "&key=AFOVTHGVEBS8DGGIPLOMYM4TJI6IT1DXVMNJCECBSODZXCOY61CPCWJPESPVJDILDIMVE2HTOGES5EVVYI87RRLJFYSQORE0HIXONIYM6MOHFQWN0E3AO4WH26AYEJ6R";
                Log.Debug("HJNotifyUrl", stringSignTemp);
                Log.Debug("sign", sign);
                var dpara = StringHelper.MD5(stringSignTemp).ToUpper();
                if (dpara.Equals(sign))
                {
                    lock (DTKeys.hjlock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(mchOrderNo));
                        if (entity != null && entity.IsHandel == false)
                        {
                            entity.OrderNumber = mchOrderNo;
                            var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                            if (chargeRet)  entity.orderState = 2;
                            else entity.orderState = 5;

                            entity.IsHandel = true;
                            entity.businessOrderState = 2;
                            _rechargeService.UpdateEntity(entity);
                        }

                        Log.Debug("HJNotifyUrl", "success");
                        return Content("success");
                    }
                }
                else
                {
                    Log.Debug("HJNotifyUrl", "验签失败！");
                    return Content("验签失败！");
                }

            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }

        /// <summary>
        /// 豪杰支付回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult HJNotifyUrl2()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var payOrderId = Request.Form["payOrderId"];//支付订单号
                var amount = Request.Form["amount"];//支付金额
                var appId = Request.Form["appId"];//应用ID
                var mchId = Request.Form["mchId"];//商户iD
                var mchOrderNo = Request.Form["mchOrderNo"];//商户订单号
                var productId = Request.Form["productId"];//支付产品ID
                var status = Request.Form["status"];//状态 0-订单生成,1-支付中,2- 支付成功,3-业务处理完成(成功),5-支付失败
                var paySuccTime = Request.Form["paySuccTime"];//支付成功时间
                var backType = Request.Form["backType"];//通知类型 1-前台通知 2-后台通知
                var sign = Request.Form["sign"];//签名

               
                    lock (DTKeys.hjlock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(mchOrderNo));
                        if (entity != null && entity.IsHandel == false)
                        {
                            entity.OrderNumber = mchOrderNo;
                            var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                            if (chargeRet) entity.orderState =Convert.ToInt32(status);
                            else entity.orderState = 5;

                            entity.IsHandel = true;
                            entity.businessOrderState = 2;
                            _rechargeService.UpdateEntity(entity);
                        }

                        Log.Debug("HJNotifyUrl", "success");
                        return Content("success");
                    }
                

            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }

        /// <summary>
        /// G支付回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult GPayNotifyUrl()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var merchantid = Request.Form["merchantid"];//商户编号
                var orderid = Request.Form["orderid"];//商户订单号
                var systemid = Request.Form["systemid"];//系统订单号
                var amount = Request.Form["amount"];//支付金额
                var order_amount = Request.Form["order_amount"];//订单金额
                var exchange_rate = Request.Form["exchange_rate"];//汇率
                var exchange_amount = Request.Form["exchange_amount"];//兑换金额
                var status = Request.Form["status"];//订单状态0 : 搁置1 : 处理中2 : 支付完成3 : 失败
                var time = Request.Form["time"];//返回时间
                var remark = Request.Form["remark"];//備註

                var sign = Request.Form["sign"];//签名


                lock (DTKeys.glock)
                {
                    var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(orderid));
                    if (entity != null && entity.IsHandel == false)
                    {
                        entity.OrderNumber = orderid;
                        var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                        if (chargeRet) entity.orderState = Convert.ToInt32(status);
                        else entity.orderState = 5;

                        entity.IsHandel = true;
                        entity.businessOrderState = 2;
                        _rechargeService.UpdateEntity(entity);
                    }

                    Log.Debug("GpayNotifyUrl", "success");
                    return Content("SUCCESS");
                }


            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }

        /// <summary>
        /// VUE支付回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult VUENotifyUrl()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var merchantid = Request.Form["user_id"];//商户编号
                var orderid = Request.Form["user_order_id"];//商户订单号
                var systemid = Request.Form["order_id"];//系统订单号
                var amount = Request.Form["amount"];//支付金额
                var status = Request.Form["status"];//订单状态0 : 搁置1 : 处理中2 : 支付完成3 : 失败
                var time = Request.Form["paid_at"];//返回时间
                var sign = Request.Form["sign"];//签名


                lock (DTKeys.vuelock)
                {
                    var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(orderid));
                    if (entity != null && entity.IsHandel == false)
                    {
                        entity.OrderNumber = orderid;
                        var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                        if (chargeRet) entity.orderState = Convert.ToInt32(status);
                        else entity.orderState = 5;

                        entity.IsHandel = true;
                        entity.businessOrderState = 2;
                        _rechargeService.UpdateEntity(entity);
                    }

                    Log.Debug("VUENotifyUrl", "success");
                    return Content("OK");
                }


            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }

        /// <summary>
        /// xm充值回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult XMNotifyCallBack2()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var mch_id = Request.Form["mch_id"];
                var out_trade_no = Request.Form["out_trade_no"];
                var pay_time = Request.Form["pay_time"];
                var order_no = Request.Form["order_no"];
                var timestamp = Request.Form["timestamp"];
                var total_fee = Request.Form["total_fee"];
                var mch_secret = ConfigurationData.xmkey2;

                var sign = Request.Form["sign"];
                versiy.Add("mch_id", mch_id);
                versiy.Add("out_trade_no", out_trade_no);
                versiy.Add("pay_time", pay_time);
                versiy.Add("order_no", order_no);
                versiy.Add("timestamp", timestamp);
                versiy.Add("total_fee", total_fee);
                versiy.Add("mch_secret", mch_secret);

                var Ddata = AsciiDictionary(versiy);
                var urlstr = Utils.GetUrlString(Ddata);

                Log.Debug("XMNotifyCallBack", urlstr);
                Log.Debug("sign", sign);
                var dpara = StringHelper.MD5(urlstr).ToUpper();
                if (dpara.Equals(sign))
                {
                    lock (DTKeys.xmnotifylock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(out_trade_no));
                        if (entity != null)
                        {
                            
                            entity.OrderNumber = order_no;
                            var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                            if (chargeRet) entity.IsHandel = true;
                            _rechargeService.UpdateEntity(entity);
                        }
                        Log.Debug("XMNotifyCallBack", "success");
                        return Content("success");
                    }
                }
                else
                {
                    Log.Debug("XMNotifyCallBack", "验签失败！");
                    return Content("验签失败！");
                }

            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }

        /// <summary>
        /// 聚力充值回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult JLJHNotifyUrl()
        {
            Dictionary<string, string> versiy = new Dictionary<string, string>();

            var amount = Request.Form["amount"];
            var signType = Request.Form["signType"];
            var outTradeNo = Request.Form["outTradeNo"];
            var tradeNo = Request.Form["tradeNo"];
            var uid = Request.Form["uid"];
            var orderState = Request.Form["orderState"];
            var random = Request.Form["random"];
            var secret = ConfigurationData.jljhkey;


            versiy.Add("businessId", ConfigurationData.jljhmacId);
            versiy.Add("amount", amount);
            versiy.Add("signType", signType);
            versiy.Add("outTradeNo", outTradeNo);
            versiy.Add("tradeNo", tradeNo);
            versiy.Add("uid", uid);
            versiy.Add("orderState", orderState);
            versiy.Add("random", random);
            versiy.Add("secret", secret);

            var Ddata = AsciiDictionary(versiy);
            var urlstr = Utils.GetUrlString(Ddata);

            var sign = Request.Form["sign"];

            var dpara = StringHelper.MD5(urlstr);
            if (dpara.Equals(sign))
            {
                var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(outTradeNo));
                if (orderState == "success")
                {
                    lock (DTKeys.jljhnotifylock)
                    {
                        
                        if (entity != null && entity.IsHandel ==false)
                        {
                            if (entity.GoldCount / 100 == decimal.Parse(amount))
                            {

                                entity.CentreOrderNum = tradeNo;
                                var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                                if (chargeRet)   entity.orderState = 2;
                                else entity.orderState = 5;

                                entity.IsHandel = true;
                                entity.businessOrderState = 2;
                                _rechargeService.UpdateEntity(entity);
                            }
                            else
                            {
                                Log.Debug("JLJHNotifyUrl", "充值金额异常");
                            }
                        }
                        Log.Debug("JLJHNotifyUrl", "success");
                        return Content("success");
                    }
                }
                else
                {
                    entity.CentreOrderNum = tradeNo;
                    entity.IsHandel = true;
                    entity.businessOrderState = 5;
                    entity.orderState = 5;
                    _rechargeService.UpdateEntity(entity);
                    return Content("fail");
                }
            }
            else
            {
                Log.Debug("JLJHNotifyUrl", "验签失败！");
                return Content("验签失败！");
            }
        }

        /// <summary>
        /// 捷仕达充值回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult JsdNotifyUrl()
        {
            Dictionary<string, string> versiy = new Dictionary<string, string>();
            //var merchant_no = Request.Form["merchant_no"];
            var businessId = ConfigurationData.jsdmchid;
            var amount = Request.Form["amount"];
            var signType = Request.Form["signType"];
            var outTradeNo = Request.Form["outTradeNo"];
            var tradeNo = Request.Form["tradeNo"];
            var uid = Request.Form["uid"];
            var orderState = Request.Form["orderState"];
            var random = Request.Form["random"];
            var secret = ConfigurationData.jsdkey;


            versiy.Add("businessId", ConfigurationData.jsdmchid);
            versiy.Add("amount", amount);
            versiy.Add("signType", signType);
            versiy.Add("outTradeNo", outTradeNo);
            versiy.Add("tradeNo", tradeNo);
            versiy.Add("uid", uid);
            versiy.Add("orderState", orderState);
            versiy.Add("random", random);
            versiy.Add("secret", secret);

            var Ddata = AsciiDictionary(versiy);
            var urlstr = Utils.GetUrlString(Ddata);

            var sign = Request.Form["sign"];

            var dpara = StringHelper.MD5(urlstr);
            if (dpara.Equals(sign))
            {
                lock (DTKeys.jsdnotifylock)
                {
                    var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(outTradeNo));
                    if (orderState == "success")
                    {

                        if (entity != null && entity.IsHandel == false)
                        {
                            if (entity.GoldCount / 100 == decimal.Parse(amount))
                            {
                                entity.CentreOrderNum = tradeNo;
                                var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                                if (chargeRet)
                                {
                                    entity.IsHandel = true;
                                    entity.orderState = 2;
                                }else entity.orderState = 4;

                                entity.businessOrderState = 2;
                                _rechargeService.UpdateEntity(entity);
                                return Content("success");
                            }
                            else
                            {
                                Log.Debug("JsdNotifyUrl", "充值金额异常");
                                return Content("交易失败！充值金额异常");
                            }
                        }
                        else
                        {
                            entity.CentreOrderNum = tradeNo;
                            entity.IsHandel = true;
                            entity.businessOrderState = 4;
                            entity.orderState = 4;
                            Log.Debug("JsdNotifyUrl", "订单号数据不存在:"+ outTradeNo);
                            _rechargeService.UpdateEntity(entity);
                            return Content("交易失败！");
                        }

                    }
                    else
                    {
                        entity.CentreOrderNum = tradeNo;
                        entity.IsHandel = true;
                        entity.businessOrderState = 5;
                        entity.orderState = 5;
                       
                        _rechargeService.UpdateEntity(entity);
                        return Content("fail");
                    }
                   
                }
            }
            else
            {
                Log.Debug("JsdNotifyUrl", "验签失败！");
                return Content("验签失败！");
            }
        }

        


        /// <summary>
        /// 金樽回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult JZNotifyCallBack()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var businessId = Request.Form["businessId"];
                var amount = Request.Form["amount"];
                var outTradeNo = Request.Form["outTradeNo"];
                var tradeNo = Request.Form["tradeNo"];
                var orderState = Request.Form["orderState"];
                var random = Request.Form["random"];
                var mch_secret = ConfigurationData.jzkey;

                var sign = Request.Form["sign"];
                versiy.Add("businessId", businessId);
                versiy.Add("amount", amount);
                versiy.Add("tradeNo", tradeNo);
                versiy.Add("outTradeNo", outTradeNo);
                versiy.Add("orderState", orderState);
                versiy.Add("random", random);
                versiy.Add("secret", mch_secret);

                var Ddata = AsciiDictionary(versiy);
                var urlstr = Utils.GetUrlString(Ddata);

                
                var dpara = StringHelper.MD5(urlstr);
                if (dpara.Equals(sign))
                {
                    lock (DTKeys.xmnotifylock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(outTradeNo));
                        //0 等待支付，1 超时失败，2 支付成功
                        if (orderState.Equals("2"))
                        {
                            if (entity != null && entity.IsHandel == false)
                            {

                                entity.CentreOrderNum = tradeNo;
                                var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                                if (chargeRet)
                                {
                                    entity.IsHandel = true;
                                    entity.orderState = 2;
                                }else entity.orderState = 5;

                                entity.businessOrderState = 2;
                                _rechargeService.UpdateEntity(entity);
                            }
                            Log.Debug("JZNotifyCallBack", "success");
                            return Content("SUCCESS");
                        }
                        else
                        {
                            entity.CentreOrderNum = tradeNo;
                            entity.IsHandel = true;
                            if (orderState.Equals("2"))
                            {
                                
                                entity.businessOrderState = 3;
                                entity.orderState = 3;
                                _rechargeService.UpdateEntity(entity);
                                return Content("FAIL");
                            }
                            entity.businessOrderState = 0;
                            entity.orderState = 0;

                            return Content("FAIL");
                        }
                       
                    }
                }
                else
                {
                    Log.Debug("JZNotifyCallBack", "验签失败！");
                    return Content("验签失败！");
                }
            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("FAIL");
            }
        }


        /// <summary>
        /// xm充值回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult XMNotifyCallBack()
        {
            try
            {
                Dictionary<string, string> versiy = new Dictionary<string, string>();
                var mch_id = Request.Form["mch_id"];
                var out_trade_no = Request.Form["out_trade_no"];
                var pay_time = Request.Form["pay_time"];
                var order_no = Request.Form["order_no"];
                var timestamp = Request.Form["timestamp"];
                var total_fee = Request.Form["total_fee"];
                var mch_secret = ConfigurationData.xmkey;

                var sign = Request.Form["sign"];
                versiy.Add("mch_id", mch_id);
                versiy.Add("out_trade_no", out_trade_no);
                versiy.Add("pay_time", pay_time);
                versiy.Add("order_no", order_no);
                versiy.Add("timestamp", timestamp);
                versiy.Add("total_fee", total_fee);
                versiy.Add("mch_secret", mch_secret);

                var Ddata = AsciiDictionary(versiy);
                var urlstr = Utils.GetUrlString(Ddata);

                Log.Debug("XMNotifyCallBack", urlstr);
                Log.Debug("sign", sign);
                var dpara = StringHelper.MD5(urlstr).ToUpper();
                if (dpara.Equals(sign))
                {
                    lock (DTKeys.xmnotifylock)
                    {
                        var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(out_trade_no));
                        if (entity != null && entity.IsHandel == false)
                        {
                           
                            entity.CentreOrderNum = order_no;
                            var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                            if (chargeRet) entity.IsHandel = true;
                            _rechargeService.UpdateEntity(entity);
                        }
                        Log.Debug("XMNotifyCallBack", "success");
                        return Content("success");
                    }
                }
                else
                {
                    Log.Debug("XMNotifyCallBack", "验签失败！");
                    return Content("验签失败！");
                }

            }
            catch (Exception ex)
            {

                Log.Debug("回调", ex.Message);
                return Content("error！");
            }
        }
        /// <summary>
        /// 蚂蚁回调
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [LoginFilter(IsCheck = false)]
        public ActionResult NotifyCallBack()
        {
            try
            {
                var content = Request.Form["content"];
                Log.Debug("rsa回调", content);
                if (!string.IsNullOrEmpty(content))
                {
                    var diclist = StringHelper.GetDictionaryByStr(content);
                    if (diclist != null)
                    {
                        var sign = diclist["sign"];
                        diclist.Remove("sign");
                        var Ddata = AsciiDictionary(diclist);
                        var urlstr = Utils.GetUrlString(Ddata);
                        if (StringHelper.RSAverify(urlstr, sign, ConfigurationData.publickey))
                        {
                            lock (DTKeys.mynotifylock)
                            {
                                var entity = _rechargeService.GetEntityByWhere(w => w.OrderNumber.Equals(diclist["orderNo"]));
                                if (entity != null)
                                {
                                    entity.IsHandel = true;
                                    var chargeRet = Charge(entity.UserId, float.Parse(entity.GoldCount.ToString()), 1);
                                    if (chargeRet)
                                        _rechargeService.UpdateEntity(entity);
                                }
                                Log.Debug("rsa", "success");
                                return Content("success");
                            }
                            
                        }
                        else
                        {
                            return Content("error");
                        }
                    }
                }
                else
                {
                    return Content("content  not null");
                }
            }
            catch (Exception ex)
            {
                Log.Debug("回调", ex.Message);
            }
            return Content("回调fail");
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
        #endregion

        #region 导航相关
        [HttpPost]
        public void Get_navigation_list()
        {
            var contenxt = HttpContext;
            dt_manager_role roleModel = _manageService.GetRoleInfo(manager.role_id);
            DataTable dt = _navigationService.GetList(0, DTEnums.NavigationEnum.System.ToString());
            get_navigation_childs(contenxt, dt, 0, roleModel.role_type, roleModel.dt_manager_role_value);
        }
        private void get_navigation_childs(HttpContextBase context, DataTable oldData, int parent_id, int? role_type, ICollection<dt_manager_role_value> ls)
        {
            DataRow[] dr = oldData.Select("parent_id=" + parent_id);
            bool isWrite = false; //是否输出开始标签
            for (int i = 0; i < dr.Length; i++)
            {
                //检查是否显示在界面上====================
                bool isActionPass = true;
                if (int.Parse(dr[i]["is_lock"].ToString()) == 1)
                {
                    isActionPass = false;
                }
                //检查管理员权限==========================
                if (isActionPass && role_type > 1)
                {
                    string[] actionTypeArr = dr[i]["action_type"].ToString().Split(',');
                    foreach (string action_type_str in actionTypeArr)
                    {
                        //如果存在显示权限资源，则检查是否拥有该权限
                        if (action_type_str == "Show")
                        {
                            dt_manager_role_value modelt = ls.ToList().Find(p => p.nav_name == dr[i]["name"].ToString() && p.action_type == "Show");
                            if (modelt == null)
                            {
                                isActionPass = false;
                            }
                        }
                    }
                }
                //如果没有该权限则不显示
                if (!isActionPass)
                {
                    if (isWrite && i == (dr.Length - 1) && parent_id > 0)
                    {
                        context.Response.Write("</ul>\n");
                    }
                    continue;
                }
                //如果是顶级导航
                if (parent_id == 0)
                {
                    context.Response.Write("<div class=\"list-group\">\n");
                    context.Response.Write("<h1 title=\"" + dr[i]["sub_title"].ToString() + "\">");
                    if (!string.IsNullOrEmpty(dr[i]["icon_url"].ToString().Trim()))
                    {
                        context.Response.Write("<img src=\"" + dr[i]["icon_url"].ToString() + "\" />");
                    }
                    context.Response.Write("</h1>\n");
                    context.Response.Write("<div class=\"list-wrap\">\n");
                    context.Response.Write("<h2>" + dr[i]["title"].ToString() + "<i></i></h2>\n");
                    //调用自身迭代
                    this.get_navigation_childs(context, oldData, int.Parse(dr[i]["id"].ToString()), role_type, ls);
                    context.Response.Write("</div>\n");
                    context.Response.Write("</div>\n");
                }
                else //下级导航
                {
                    if (!isWrite)
                    {
                        isWrite = true;
                        context.Response.Write("<ul>\n");
                    }
                    context.Response.Write("<li>\n");
                    context.Response.Write("<a navid=\"" + dr[i]["name"].ToString() + "\"");
                    if (!string.IsNullOrEmpty(dr[i]["link_url"].ToString()))
                    {
                        if (int.Parse(dr[i]["channel_id"].ToString()) > 0)
                        {
                            context.Response.Write(" href=\"" + dr[i]["link_url"].ToString() + "?channel_id=" + dr[i]["channel_id"].ToString() + "\" target=\"mainframe\"");
                        }
                        else
                        {
                            context.Response.Write(" href=\"" + dr[i]["link_url"].ToString() + "\" target=\"mainframe\"");
                        }
                    }
                    if (!string.IsNullOrEmpty(dr[i]["icon_url"].ToString()))
                    {
                        context.Response.Write(" icon=\"" + dr[i]["icon_url"].ToString() + "\"");
                    }
                    context.Response.Write(" target=\"mainframe\">\n");
                    context.Response.Write("<span>" + dr[i]["title"].ToString() + "</span>\n");
                    context.Response.Write("</a>\n");
                    //调用自身迭代
                    this.get_navigation_childs(context, oldData, int.Parse(dr[i]["id"].ToString()), role_type, ls);
                    context.Response.Write("</li>\n");

                    if (i == (dr.Length - 1))
                    {
                        context.Response.Write("</ul>\n");
                    }
                }
            }
        }
        private List<SelectListItem> TreeBind(string nav_type, string selectTedValue)
        {
            List<SelectListItem> itemList = new List<SelectListItem>();
            itemList.Add(new SelectListItem { Text = "无父级导航", Value = "0" });
            DataTable dt = _navigationService.GetList(0, nav_type);
            foreach (DataRow dr in dt.Rows)
            {
                string Id = dr["id"].ToString();
                int ClassLayer = int.Parse(dr["class_layer"].ToString());
                string Title = dr["title"].ToString().Trim();

                if (ClassLayer == 1)
                {
                    itemList.Add(new SelectListItem { Text = Title, Value = Id, Selected = selectTedValue == Id });
                }
                else
                {
                    Title = "├ " + Title;
                    Title = Utils.StringOfChar(ClassLayer - 1, "　") + Title;
                    itemList.Add(new SelectListItem { Text = Title, Value = Id, Selected = selectTedValue == Id });
                }
            }
            return itemList;
        }
        public ActionResult NavList()
        {
            DataTable dt = _navigationService.GetList(0, DTEnums.NavigationEnum.System.ToString());
            nav_name = "sys_navigation";
            action_type = DTEnums.ActionEnum.View.ToString();
            return View(dt);
        }
        [HttpPost]
        public JsonResult GetNavData()
        {
            DataTable dt = _navigationService.GetList(0, DTEnums.NavigationEnum.System.ToString());
            List<NavView> navData = new List<NavView>();
            foreach (DataRow item in dt.Rows)
            {
                NavView temp = new NavView();
                int class_layer = Convert.ToInt32(item["class_layer"]);
                temp.id = int.Parse(item["id"].ToString());
                temp.is_sys = Convert.ToInt32(item["is_sys"]);
                temp.name = item["name"].ToString();
                temp.title = item["title"].ToString();
                temp.is_lock = Convert.ToInt32(item["is_lock"]);
                temp.sort_id = Convert.ToInt32(item["sort_id"]);
                temp.nav_type = item["nav_type"].ToString();
                temp.parent_id = Convert.ToInt32(item["parent_id"]);
                temp.channel_id = Convert.ToInt32(item["channel_id"]);
                temp.class_layer = class_layer;
                temp.icon_url = item["icon_url"].ToString();
                temp.sub_title = item["sub_title"].ToString();
                temp.link_url = item["link_url"].ToString();
                temp.Remark = item["remark"].ToString();
                temp.action_type = item["action_type"].ToString();
                temp.width = class_layer == 1 ? 0 : (class_layer - 2) * 24;
                navData.Add(temp);
            }
            DataResults<NavView> result = new DataResults<NavView>();
            result.Data = navData;
            result.Message = "获取成功";
            result.TotalCount = navData.Count;
            return Json(result);
        }

        private string action = DTEnums.ActionEnum.Add.ToString(); //操作类型
        private int id = 0;
        public ActionResult NavEdit(string op, string id, int ddlParentId = 0)
        {
            int.TryParse(id, out this.id);
            string param = Request.QueryString["param"];
            string old_name = Request.QueryString["old_name"];
            if (!string.IsNullOrEmpty(op) && op == DTEnums.ActionEnum.Edit.ToString())
            {
                this.action = DTEnums.ActionEnum.Edit.ToString();//修改类型
                if (this.id == 0)
                {
                    return Content(CommonHelper.JscriptMsg("传输参数不正确！", "back"));
                }
                if (!_navigationService.Exists(this.id))
                {
                    return Content(CommonHelper.JscriptMsg("导航不存在或已被删除！", "back"));
                }
            }
            nav_name = "sys_navigation";
            action_type = DTEnums.ActionEnum.View.ToString();//检查权限
            List<SelectListItem> itemList = new List<SelectListItem>();

            ViewBag.ActionType = GetActionType();
            if (action == DTEnums.ActionEnum.Edit.ToString()) //修改
            {
                var navigationModel = _navigationService.GetEntityByID(this.id);
                ViewBag.EditModel = navigationModel == null ? new dt_navigation() : navigationModel;
                itemList = TreeBind(DTEnums.NavigationEnum.System.ToString(), _navigationService.GetEntityByID(this.id).parent_id.ToString());
            }
            else
            {
                if (this.id > 0)
                {
                    itemList = TreeBind(DTEnums.NavigationEnum.System.ToString(), this.id.ToString());
                }
                else
                {
                    itemList = TreeBind(DTEnums.NavigationEnum.System.ToString(), "0");
                }
                //return Content(navigationSerivice.Navigation_validate(param, old_name));
            }
            if (ViewBag.EditModel == null)
                ViewBag.EditModel = new dt_navigation();
            ViewBag.SelectList = itemList == null ? new List<SelectListItem>() : itemList;
            return View();
        }
        [HttpPost]
        public ActionResult NavSave(dt_navigation model)
        {
            nav_name = "sys_navigation";
            action_type = DTEnums.ActionEnum.Add.ToString();
            var arr = Request.Params["action_type"];
            model.action_type = arr;
            model.nav_type = DTEnums.NavigationEnum.System.ToString();
           //model.is_lock = 0;
            model.is_sys = 0;
            model.channel_id = 0;
            var log = new dt_manager_log { user_name = manager.user_name, user_id = manager.id };
            if (model.id > 0)
            {
                var result = _navigationService.UpdateEntity(model);
                log.action_type = DTEnums.ActionEnum.Add.ToString();
                log.remark = "添加导航菜单" + model.title;
                
            }
            else
            {
                var result = _navigationService.AddEntity(model);
                log.action_type = DTEnums.ActionEnum.Edit.ToString();
                log.remark = "编辑导航菜单" + model.title;
            }
            _manageLogService.AddEntity(log);
            return RedirectToAction("NavList");

        }
        [HttpPost]
        public JsonResult NavDel(string ids)
        {
            nav_name = "sys_navigation";
            action_type = DTEnums.ActionEnum.Delete.ToString();
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "NavList", "parent.loadMenuTree"));
            var childIds = ids.Split(',');
            List<int> temps = new List<int>();
            foreach (var cid in childIds)
            {

                int tempId = 0;
                int.TryParse(cid, out tempId);
                if (tempId == 0) continue;
                temps.Add(tempId);
                DelNav(tempId, temps);
            }
            foreach (var item in temps)
            {
                _navigationService.DelEntity(item);
            }

            return Json(CommonHelper.JscriptMsg("删除数据成功", "NavList", "parent.loadMenuTree"));

        }
        private List<int> DelNav(int id, List<int> childs)
        {
            var childstemp = _navigationService.GetEntityLisrByWhere(w => w.parent_id == id).Select(w => w.id);
            if (childstemp.Any())
            {
                childs.AddRange(childstemp);
                foreach (var item in childstemp)
                {
                    DelNav(item, childs);
                }
                return childs;
            }
            else
            {
                return childs;
            }
        }
        [HttpPost]
        public void NavigationValidate(string param, string old_name)
        {
            if (string.IsNullOrEmpty(param))
            {
                HttpContext.Response.Write("{ \"info\":\"该导航别名不可为空！\", \"status\":\"n\" }");
                return;
            }
            if (param.Trim().ToLower() == old_name.Trim().ToLower())
            {
                HttpContext.Response.Write("{ \"info\":\"该导航别名可使用\", \"status\":\"y\" }");
                return;
            }
            //检查保留的名称开头
            if (param.ToLower().StartsWith("channel_"))
            {
                HttpContext.Response.Write("{ \"info\":\"该导航别名系统保留，请更换！\", \"status\":\"n\" }");
                return;
            }

            if (_navigationService.Exists(param))
            {
                HttpContext.Response.Write("{ \"info\":\"该导航别名已被占用，请更换！\", \"status\":\"n\" }");
                return;
            }
            HttpContext.Response.Write("{ \"info\":\"该导航别名可使用\", \"status\":\"y\" }");
        }
        #endregion
        #region 文件上传相关
        public void UpLoadFile(string DelFilePath)
        {
            var siteConfig = _siteService.loadConfig();
            string _delfile = DelFilePath;
            var _upfile = HttpContext.Request.Files["Filedata"];
            bool _iswater = false; //默认不打水印
            bool _isthumbnail = false; //默认不生成缩略图

            if (DTRequest.GetQueryString("IsWater") == "1")
                _iswater = true;
            if (DTRequest.GetQueryString("IsThumbnail") == "1")
                _isthumbnail = true;
            if (_upfile == null)
            {
                HttpContext.Response.Write("{\"status\": 0, \"msg\": \"请选择要上传文件！\"}");
                return;
            }
            UpLoad upFiles = new UpLoad(siteConfig);
            string msg = upFiles.fileSaveAs(_upfile, _isthumbnail, _iswater);
            //删除已存在的旧文件，旧文件不为空且应是上传文件，防止跨目录删除
            if (!string.IsNullOrEmpty(_delfile) && _delfile.IndexOf("../") == -1
                && _delfile.ToLower().StartsWith(siteConfig.webpath.ToLower() + siteConfig.filepath.ToLower()))
            {
                Utils.DeleteUpFile(_delfile);
            }
            //返回成功信息
            HttpContext.Response.Write(msg);
            HttpContext.Response.End();
        }
        #endregion
    }
}