using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_WebApi.App_Start;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_WebApi.Controllers
{
    public class GameController : ApiController
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
        private readonly ItgameinfoService _gameinfo;
        private readonly ISiteConfigSerivice _siteService;
        private readonly IFeedBackService _ifeedback;


        private readonly RedisHelper redis;

        public GameController(ISnsUserInfo snsService,
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
            ItgameinfoService gameinfo,
            ISiteConfigSerivice siteService,
            IFeedBackService ifeedback
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
            redis = new RedisHelper(2);
            _contactserver = contactserver;
            _ConfigService = ConfigService;
            _gamelogo = gamelogo;
            _guser = guser;
            _gameinfoservice = gameinfoservice;
            _gameinfo = gameinfo;
            _siteService = siteService;
            _ifeedback = ifeedback;
        }
        /// <summary>
        /// 账号登录   绑手机号
        /// </summary>
        /// <param name="mobile"></param>
        /// <param name="smscode"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [WebApiExceptionFilter]
        public DataResult AccountRegUser(string mobile, string smscode, int UserId)
        {
            DataResult result = new DataResult();

            var phoneC = _snsService.GetEntityLisrByWhere(t => t.Mobile == mobile);
            if (phoneC != null && phoneC.Count > 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "已经有账号绑定这个手机号，不能重复绑定！";
                return result;
            }
            var vuser = _snsService.GetEntityByID(UserId);
            if (vuser != null)
            {
                var success = _verifyCodeService.CheckCode(mobile, 0, smscode);
                if (success.Code == (int)Status.Success)
                {
                    vuser.Mobile = mobile;
                    _snsService.UpdateEntity(vuser);
                    result.Code = (int)Status.Success;
                    result.Message = "修改成功!";
                }
                else
                {
                    result = success;
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "账号不存在！";
            }
            return result;
        }


        /// <summary>
        /// 注册修改  游客账号
        /// </summary>
        /// <param name="UserId"></param>
        /// <param name="phone"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        [WebApiExceptionFilter]
        public DataResult RegVisitorUser(int UserId, string mobile, string password, string smscode)
        {
            DataResult result = new DataResult();

            var phoneC = _snsService.GetEntityLisrByWhere(t => t.Mobile == mobile);
            if (phoneC != null && phoneC.Count > 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "已经有账号绑定这个手机号，不能重复绑定！";
                return result;
            }


            var vuser = _snsService.GetEntityByID(UserId);
            if (vuser != null)
            {

                if (!_snsService.Exist(mobile))
                {
                    var success = _verifyCodeService.CheckCode(mobile, 0, smscode);
                    if (success.Code == (int)Status.Success)
                    {
                        vuser.Mobile = mobile;
                        vuser.RegType = 1;//游客
                        vuser.PassportPwd = StringHelper.RegUser_MD5_Pwd(password);
                        _snsService.UpdateEntity(vuser);
                        result.Code = (int)Status.Success;
                        result.Message = "修改成功!";
                    }
                    else
                    {
                        result = success;
                    }

                } else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "手机号已注册";
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "游客账号不存在！";
            }
            return result;
        }



        /// <summary>
        /// account  账号    password密码  
        /// </summary>
        /// <param name="account"></param>
        /// <param name="password"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        [HttpGet]
        [WebApiExceptionFilter]
        public DataResult EasyRegUser(string account, string password, string device)
        {

            DataResult result = new DataResult();
            //  redis.SetStringKey("IsRegUser", "no"); //GetStringValue("IsRegUser");
            var cache = redis.GetStringValue("IsRegUser");

            if (cache == "0")
            {
                result.Code = (int)Status.fail;
                result.Message = "当前注册通道已关闭！";
                return result;
            }
            var deviceC = _snsService.GetEntityLisrByWhere(t => t.DeviceID == device);
            if (deviceC != null && deviceC.Count >= 5)
            {
                result.Code = (int)Status.fail;
                result.Message = "同一个设备号最多注册5个账号！";
                return result;
            }
            var entity = _snsService.GetEntityByWhere(w => w.PassportID.Equals(account));
            if (entity != null)
            {
                result.Code = (int)Status.fail;
                result.Message = "用户已注册";
            }
            else
            {
                var snsResult = _snsService.EasyRegUser(account, password, device);
                if (snsResult.Code != (int)Status.Success)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "注册失败!";
                }
                result = snsResult;
            }

            return result;
        }


        /// <summary>
        /// 注册用户
        /// </summary>
        /// <param name="mobile"></param>
        /// <param name="smscode"></param>
        /// <param name="activecode"></param>
        /// <param name="password"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        [WebApiExceptionFilter]
        public DataResult RegUser([FromBody]InputReg  reg)
        {
            DataResult result = new DataResult();
            bool isMobile = PageValidate.IsMobile(reg.mobile) || PageValidate.IsEmail(reg.mobile); 
            if (isMobile)
            {

                result.Code = (int)Status.fail;
                result.Message = "邀请码不存在";
                return result;
                if (!_snsService.Exist(reg.mobile))
                {
                    result.Code = (int)Status.fail;
                    result.Message = "邀请码不存在";
                    
                    if (reg.activecode == "000000" || _activeService.Exist(reg.activecode))
                    {

                        result.Code = (int)Status.fail;
                        result.Message = "邀请码不存在";
                        //var success = _verifyCodeService.CheckCode(reg.mobile, 0, reg.smscode);
                        //if (success.Code == (int)Status.Success)
                        //{
                        //    var snsResult = _snsService.RegUser(reg.mobile, reg.smscode, reg.activecode, reg.password);
                        //    if (snsResult.Code == (int)Status.Success)
                        //    {
                        //        _activeService.Update(reg.activecode, Convert.ToInt32(snsResult.Spare));
                        //    }
                        //    result = snsResult;
                        //}
                        //else
                        //{
                        //    result = success;
                        //}
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "邀请码不存在";
                    }
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "用户已注册";
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "手机或者邮箱格式不正确";
            }

            return result;
        }


        /// <summary>
        /// 发送短信验证码
        /// </summary>
        /// <param name="mobile"></param>
        /// <param name="smstype">0注册1找回密码2交易密码3重置密码</param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public DataResult SendSMS([FromBody] InputReg reg)
        {
            DataResult result = new DataResult();
            bool isMobile = PageValidate.IsMobile(reg.mobile);
            try
            {
                if (isMobile)
                {
                    if (reg.smstype.Equals(2))
                    {
                        var guser = _gameinfoservice.GetEntityByWhere(t=>t.UserId== reg.UserId);
                        if (guser!=null && guser.PassportId!= reg.mobile)
                        {
                            result.Code = (int)Status.fail;
                            result.Message = "请使用注册手机验证!";
                            return result;
                        }
                    }
                    int verifyCode = 0;
                    VerifyCodeHelper codehelper = new VerifyCodeHelper();
                    var verifySucces = codehelper.CreateCode(reg.mobile, reg.smstype, out verifyCode);
                    if (verifySucces)
                    {
                        var verSaveResult = _verifyCodeService.Add(reg.mobile, reg.smstype, verifyCode.ToString());
                        result = verSaveResult;
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "短信发送失败";
                    }
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "手机号码有误";
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "系统错误";
            }
            return result;
        }
        /// <summary>
        /// 绑定手机号码
        /// </summary>
        /// <param name="mobile"></param>
        /// <param name="smscode"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        public DataResult BindPhone(int userId, string mobile, string smscode)
        {
            DataResult result = new DataResult();
            if (userId <= 0 || string.IsNullOrEmpty(mobile) || string.IsNullOrEmpty(smscode))
            {
                result.Code = (int)Status.fail;
                result.Message = "校验信息出错";
            }
            bool isMobile = PageValidate.IsMobile(mobile);//验证手机号码
            if (isMobile)
            {
                var checkentity = _snsService.GetEntityByWhere(w => w.Mobile == mobile);
                if (checkentity != null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "该号码已经绑定";
                }
                else
                {
                    var entity = _snsService.GetEntityByWhere(w => w.UserId == userId);
                    if (entity != null)
                    {
                        var success = _verifyCodeService.CheckCode(mobile, 0, smscode);//验证验证码
                        if (success.Code == (int)Status.Success)
                        {
                            entity.Mobile = mobile;
                            var r1 = _snsService.UpdateEntity(entity);
                            result.Code = r1 == null ? (int)Status.fail : (int)Status.Success;
                        }
                        else
                        {
                            result = success;
                        }
                    }
                    else
                    {
                        result.Message = "用户不存在";
                        result.Code = (int)Status.fail;
                    }
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "手机号码有误";
            }
            return result;
        }
        [WebApiExceptionFilter]
        [HttpPost]
        public DataResult ChangePassWord([FromBody] InputReg reg)
        {

            DataResult result = new DataResult();
            var guser = _snsService.GetEntityByWhere(t => t.Mobile == reg.phone);
            if (guser != null)
            {
                var verifyResult = _verifyCodeService.CheckCode(reg.phone, 0, reg.verifyCode);

                if (verifyResult.Code == (int)Status.Success)
                {
                    var changeResult = _snsService.ChangePassWord(reg.phone, reg.password);
                    if (changeResult.Code == (int)Status.Success)
                    {
                        result.Code = (int)Status.Success;
                        result.Message = "修改成功!";
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "修改失败!";
                    }
                }
                else
                {
                    result.Code = (int)Status.fail;
                    result.Message = "验证码错误!";
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "用户未注册!";
            }

            return result;
        }

        /// <summary>
        /// 用户是否存在手机号码
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        public DataResult GetUserMobile(int userId)
        {
            DataResult result = new DataResult();
            var entity = _snsService.GetEntityByWhere(w => w.UserId == userId);
            if (entity != null)
            {
                if (!string.IsNullOrEmpty(entity.Mobile))
                {
                    result.Spare = entity.Mobile;
                }
            }
            else
            {
                result.Message = "用户不存在";
                result.Code = (int)Status.fail;
            }
            return result;
        }
        /// <summary>
        /// 保存用户联系信息
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="name"></param>
        /// <param name="mobile"></param>
        /// <param name="postCode"></param>
        /// <param name="address"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        public DataResult SaveUserContact(int userId, string name, string mobile, string postCode, string address)
        {
            var result = _userContactService.SaveUserContact(userId, name, mobile, postCode, address);
            return result;
        }
        /// <summary>
        /// 获取用户提现记录
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="userid"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public DataResulta<GameServerTakeNow> GetUserTakenow([FromBody] ImputPage G)
        {
            DataResulta<GameServerTakeNow> rdata = new DataResulta<GameServerTakeNow>();
            try
            {
                if (_gameUserService.GetEntityByID(G.userid) != null)
                {
                    var takenow = _TakeNowRecordService.GetGameServerTakeNowLog(G.userid);
                    var uinondata = takenow.OrderByDescending(t => t.date);
                    rdata.TotalCount = uinondata.Count();
                    rdata.Data = uinondata.Skip((G.pageindex - 1) * G.pagesize).Take(G.pageindex).OrderByDescending(t => t.date).ToList();
                }
                else
                {
                    rdata.Message = "用户不存在!";
                    rdata.Code = (int)Status.fail;
                }
            }
            catch (Exception ex)
            {
                rdata.Data = new List<GameServerTakeNow>();
                rdata.Message = "获取失败!";
                rdata.Code = (int)Status.fail;
            }
            return rdata;
        }


        /// <summary>
        /// 获取充值记录
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="userid"></param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpGet]
        public DataResulta<GameServerTakeNow> GetUserRecharge([FromBody]ImputPage G)
        {
            DataResulta<GameServerTakeNow> rdata = new DataResulta<GameServerTakeNow>();
            try
            {
                if (_gameUserService.GetEntityByID(G.userid) != null)
                {
                    var recorddata = _RechargeRecord.GetUserNearlyDays(G.userid, G.datestring).Where(t => t.IsDel == false && t.orderState == 2).Select(t => new GameServerTakeNow
                    {
                        type = "充值",
                        money = t.Number,
                        date = t.CreatTime,
                        states = Enum.GetName(typeof(payresult), t.orderState),
                    });
                    var uinondata = recorddata.OrderByDescending(t => t.date);
                    rdata.TotalCount = uinondata.Count();
                    rdata.Data = uinondata.Skip((G.pageindex - 1) * G.pagesize).Take(G.pagesize).OrderByDescending(t => t.date).ToList();
                }
                else
                {
                    rdata.Message = "用户不存在!";
                    rdata.Code = (int)Status.fail;
                }

            }
            catch (Exception ex)
            {
                rdata.Data = new List<GameServerTakeNow>();
                rdata.Message = "获取失败!";
                rdata.Code = (int)Status.fail;
            }
            return rdata;
        }


        [WebApiExceptionFilter]
        [HttpPost]
        public List<RechargeChannelDto> GetRechargeChannels()
        {
            try
            {
                var cache = redis.GetStringValue("RechargeChannels");
                if (cache != null)
                {
                    return JsonConvert.DeserializeObject<List<RechargeChannelDto>>(cache);
                }
                else
                {
                    var cdata = _rechargechannel.GetEntityLisrByWhere(t => t.isenable == true).Select(t => new RechargeChannelDto
                    {
                        ChannelCode = t.ChannelCode,
                        ChannelName = t.ChannelName,
                        dec = t.dec,
                        ID = t.ID,
                        minmoney = t.minmoney,
                        payname = t.payname,
                        paytype = t.paytype,
                        Discount = t.Discount,
                        payurl = t.payurl,
                        serviceList = t.serviceList == null ? null : JsonConvert.DeserializeObject<List<VipServiceInfo>>(t.serviceList).Where(p => p.isopen == true).ToList()
                    }).OrderByDescending(t => t.ID).ToList();
                    redis.SetStringKey("RechargeChannels", JsonConvert.SerializeObject(cdata));
                    return cdata;
                }
            }
            catch (Exception ex)
            {
                return new List<RechargeChannelDto>();
            }
        }


        [WebApiExceptionFilter]
        [HttpPost]
        public DataResulta<GameActivityView> GetActivityList([FromBody]ImputModel input)
        {
            DataResulta<GameActivityView> rdata = new DataResulta<GameActivityView>();
            try
            {
                var imgurl = ConfigurationManager.AppSettings["imgurl"].ToString();
                using (DBContextHelper db = new DBContextHelper())
                {
                    var activityData = db.GameActivitys.Where(t => t.IsEnble == true && t.BackField == input.gid.ToString() && t.EndTime > DateTime.Now).ToList();
                    var data = activityData.Where(t => t.UserIds == null).Select(t => new GameActivityView
                    {
                        Title = t.Title,
                        EndTime = t.EndTime,
                        StartTime = t.StartTime,
                        titleInfo = new ActivityPicInfoView
                        {
                            Width = t.TWidth,
                            Height = t.THeight,
                            type = t.Type,
                            gType = t.gType,
                            WebUrl = t.WebUrl,
                            PicUrl = imgurl + t.TitleUrl
                        },
                        contentInfo = new ActivityPicInfoView
                        {
                            Width = t.Width,
                            Height = t.Height,
                            type = t.Type,
                            gType = t.gType,
                            WebUrl = t.WebUrl,
                            PicUrl = imgurl + t.PicUrl
                        }
                    }).ToList();
                   
                    rdata.Data = data;
                }
            }
            catch (Exception ex)
            {
                Log.Debug("GetActivityList", ex.ToString());
                rdata.Data = new List<GameActivityView>();
                rdata.Message = "获取失败!";
                rdata.Code = (int)Status.fail;
            }
            return rdata;
        }

        [WebApiExceptionFilter]
        [HttpPost]
        public ApiResult<NoticeInfo> GetStopGameServiceNotice()
        {
            ApiResult<NoticeInfo> rdata = new ApiResult<NoticeInfo>();
            try
            {
                var notice = _noticeService.GetEntityLisrByWhere(t => t.C_type == "2" && t.isStart.Value == 1).OrderByDescending(t => t.noticetime).FirstOrDefault();
                if (notice != null)
                    rdata.Data = new NoticeInfo() { content = notice.content, title = notice.title };
                else rdata.Data = null;

            }
            catch (Exception)
            {
                rdata.Data = null;
                rdata.Message = "获取失败!";
                rdata.Code = (int)Status.fail;
            }
            return rdata;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="tablenum">6位桌子号</param>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public ApiResult<VisualTablesInfo> GetVisualTables([FromBody]ImputModel input)
        {

            var data = CacheHelper.Get<ApiResult<VisualTablesInfo>>("GetVisualTables" + input.tablenum);
            if (data != null)
                return data;
            else
            {
                ApiResult<VisualTablesInfo> rdata = new ApiResult<VisualTablesInfo>();
                var model = _ivisualtable.GetVisualTableUrl(input.tablenum);

                if (model != null)
                    rdata.Data = new VisualTablesInfo() { state = model.state, tableNum = model.manNum, vurl1 = model.vurl1, vurl2 = model.vurl2, vurl3 = model.vurl3 };
                else rdata.Data = null;
                CacheHelper.InsertDay("GetVisualTables" + input.tablenum, rdata, 24);
                return rdata;
            }
        }
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult UploadHead([FromBody] ImputModel g)
        {
            try
            {
                byte[] byteArray = Convert.FromBase64String(g.filebate);

                var path = Utils.GetMapPath("/fordlc/wechat/");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                var filename = Utils.GetRamCode() + ".png";
                var host = path + filename;
                byteFileHelper.Bytes2File(byteArray, host);

                return Json(new { Code = 1, Message = "上传成功!", Data = filename });
            }
            catch (Exception ex)
            {
                return Json(new { Code = 0, Message = "上传失败!", Data = "" });
            }
        }

        /// <summary>
        /// 获取合作方式接口
        /// </summary>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetContactsInfo()
        {
            var cache = redis.GetStringValue("GetContactsInfo");
            if (cache != null)
            {
                return Json(new { Code = 1, Message = "请求成功!", Data = JsonConvert.DeserializeObject<object>(cache) });
            }
            else
            {
                var info = _contactserver.GetEntityLisrByWhere(t => t.ID > 0);
                if (info != null)
                {
                    redis.SetStringKey("GetContactsInfo", JsonConvert.SerializeObject(info.Select(t=>new { name = t.QQ, durl = t.Wechat, account = t.Phone })));
                    return Json(new { Code = 1, Message = "请求成功!", Data = info.Select(t => new { name = t.QQ, durl = t.Wechat, account = t.Phone }) });
                }
                return Json(new { Code = 0, Message = "请求失败!" });
            }
        }

        /// <summary>
        /// 获取logo接口  
        /// </summary>
        /// <returns></returns>
        [WebApiExceptionFilter]
        [HttpPost]
        public IHttpActionResult GetLogolist()
        {
            var cache = redis.GetStringValue("getlogolist");
            var curl = redis.GetStringValue("CustomerUrl");
            if (string.IsNullOrEmpty(curl))
            {
                curl = _ConfigService.GetValueByKey("CustomerUrl").Val;//客服地址
                redis.SetStringKey("CustomerUrl", curl);
            }

            if (cache != null)
            {
                return Json(new { Code = 1, Message = "请求成功!", Data = JsonConvert.DeserializeObject<object>(cache), curl = curl });
            }
            else
            {

                var sysurl = ConfigurationManager.AppSettings["imgurl"].ToString();
                //var logo = new { type = 1, url = sysurl+ "/appimages/339logo.png" };
                //var logo_white = new { type = 2, url = sysurl+ "/appimages/339logo_white.png" };
                //var logo_white2 = new { type = 3, url = sysurl+ "/appimages/339logo_white2.png" };

                var data = _gamelogo.GetEntityLisrByWhere(t => t.ID > 0).Select(s => new
                {
                    type = s.logotype,
                    url = sysurl + s.Url
                }).ToList();
                redis.SetStringKey("getlogolist", JsonConvert.SerializeObject(data));
                return Json(new { Code = 1, Message = "请求成功!", Data = data, curl = curl });
            }
        }
        /// <summary>
        /// 获取活动公告图 
        /// </summary>
        /// <returns></returns>

        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult GetActivityNewslist()
        {
            List<object> data = new List<object>();
            var anl = redis.GetStringValue("GetActivityNewslist");
            if (string.IsNullOrEmpty(anl))
            {
                var website = ConfigurationManager.AppSettings["website"].ToString();
                var sysurl = ConfigurationManager.AppSettings["imgurl"].ToString();
                //结构ActivityPicInfoView
                var red = new { PicUrl = sysurl + "/fordlc/ActivityNews/hb.png", WebUrl = website + "", gType = 1, type = 2 };//红包
                var huopai = new { PicUrl = sysurl + "/fordlc/ActivityNews/fanhuocard.png", WebUrl = website + "/game/NoticeContent", gType = 2, type = 1 };//伙牌
                var jinbiaisai = new { PicUrl = sysurl + "/fordlc/ActivityNews/jbs.png", WebUrl = website + "/game/NoticeMTTContent", gType = 2, type = 1 };//锦标赛
                var agent = new { PicUrl = sysurl + "/fordlc/ActivityNews/daili.png", WebUrl = website + "/game/NoticeWin", gType = 2, type = 1 };//代理
                var huoheren = new { PicUrl = sysurl + "/fordlc/ActivityNews/zhaomu.png", WebUrl = website + "/game/NoticeRecruit", gType = 2, type = 1 };//合伙人

                data.Add(red); data.Add(huopai); data.Add(jinbiaisai); data.Add(agent); data.Add(huoheren);

                redis.SetStringKey("GetActivityNewslist", JsonConvert.SerializeObject(data));
                return Json(new { Code = 1, Message = "请求成功!", Data = data });
            }
            else
            {
                return Json(new { Code = 1, Message = "请求成功!", Data = JsonConvert.DeserializeObject<object>(anl) });
            }

        }

        /// <summary>
        /// 获取推广list
        /// </summary>
        /// <returns></returns>
        public IHttpActionResult GetExtensionList()
        {
            List<object> data = new List<object>();
            var anl = redis.GetStringValue("GetExtensionList");
            if (string.IsNullOrEmpty(anl))
            {
                var website = ConfigurationManager.AppSettings["website"].ToString();
                var sysurl = ConfigurationManager.AppSettings["imgurl"].ToString();
                string title_R = "如何快速积攒人气，获得更多好伙伴";
                string title_x = "一些你不知道的小技巧实用性太高啦";
                string title_h = "怎样获得更精准小伙伴";
                var uorenqi = new { fUrl = sysurl + "/fordlc/ActivityNews/Extension1.png", WebUrl = website + "/Game/Extension1", sort = 1, title = title_R };//集人气
                var xiaojiqiao = new { fUrl = sysurl + "/fordlc/ActivityNews/Extension1.png", WebUrl = website + "/Game/Extension2", sort = 2, title = title_x };//小技巧
                var partner = new { fUrl = sysurl + "/fordlc/ActivityNews/Extension1.png", WebUrl = website + "/Game/Extension3", sort = 3, title = title_h };//伙伴
                data.Add(uorenqi); data.Add(xiaojiqiao); data.Add(partner);
                redis.SetStringKey("GetExtensionList", JsonConvert.SerializeObject(data));
                return Json(new { Code = 1, Message = "请求成功!", Data = data });

            }
            else
            {
                return Json(new { Code = 1, Message = "请求成功!", Data = JsonConvert.DeserializeObject<object>(anl) });
            }
        }

        [HttpPost]
        public IHttpActionResult SubmitFeedback(tfeedback entity, HttpPostedFileBase _inputfile)
        {
            if (string.IsNullOrEmpty(entity.content)) entity.content = "";
            if (Utils.IsSafeSqlString(entity.content))
            {
                UpLoad file = new UpLoad(_siteService.loadConfig());
                var resultfile = file.fileSaveAs(_inputfile, false, false);
                var fileresult = JsonConvert.DeserializeObject<FileResult>(resultfile);
                entity.fileurl = fileresult.path;
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    entity.CreateDate = DateTime.Now;
                    _ifeedback.AddEntity(entity);
                    return Json(new { success = true, msg = "提交成功!"});
                }
            }
            else
            {
                return Json(new { success = false, msg = "表单含有危险字符!" });
            }
        }

        public IHttpActionResult uploadFile(HttpPostedFileBase postedFile)
        {
            UpLoad file = new UpLoad(_siteService.loadConfig());
            var resultfile = file.fileSaveAs(postedFile, false, false);
            var fileresult = JsonConvert.DeserializeObject<FileResult>(resultfile);
            if (fileresult.status == 1)
            {
                return Ok(fileresult.path);
            }
            return Ok("");
        }


        #region  H5game
        [WebApiExceptionFilter]
        [HttpGet]
        [HttpPost]
        public IHttpActionResult GetGameList()
        {
            try
            {
                var data = _gameinfo.GetGameInfoData();

                return Json(new { Code = 1, Message = "请求成功!", Data = data.Data });
            }
            catch (Exception e)
            {

                return Json(new { Code = 0, Message = "请求失败!" + e.Message, Data = "" });
            }
        }
        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult GetGameInfo(string id)
        {
            try
            {
                var data = _guser.GetGameInfoDataById(id);

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
        public IHttpActionResult VisitorLogin2()
        {
            string account = MachineCode.GetMachineCodeString();
            return Json(new { Code = 0, Message = "请求失败!" , ipurl = GetIP4Address(), Account = account, Pwd = StringHelper.RegUser_MD5_Pwd("123456") });
        }
        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult VisitorLogin()
        {
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

                    var result = _snsService.EasyRegUser(account, pwd, account);
                    if (result.Code == (int)Status.Success)
                    {
                        var sinfo = _snsService.GetEntityByWhere(x => x.PassportID == account);
                        tuser tuser = new tuser();
                        tuser.UserID = sinfo.UserId;
                        tuser.wechatName = name;
                        tuser.Gold = 99999999;
                        tuser.LastLotinTime1 = DateTime.Now.ToString();
                        tuser.RegTime = DateTime.Now;
                        tuser.IP = GetIP4Address();
                        tuser.Desc = "desc";
                        tuser.isRobot = 0;
                        tuser.wechatHeadIcon = "17.png";
                        tuser.Sex = 0;
                        _gameUserService.AddUser(tuser);
                       var lo= _snsService.Login(account, pwd);
                        if (lo.Code == (int)Status.Success)
                        {
                            CookieHelper.SetCookie("username", account, "");
                            CookieHelper.SetCookie("pwd", StringHelper.RegUser_MD5_Pwd(pwd), "");
                            isok = true;
                            msg = "请求成功";
                        }
                    }
                }

            //}
            //catch (Exception e)
            //{
            //    return Json(new { Code = 0, Message = "请求失败!" + e.Message, Account=account,Pwd= StringHelper.RegUser_MD5_Pwd(pwd), Data = "" });
            //}
            return Json(new { Code = 1, Message = msg, Account = account, Pwd = StringHelper.RegUser_MD5_Pwd(pwd), ipurl= "106.13.207.246", Data = "" });
        }


        [WebApiExceptionFilter]
        [HttpGet]
        public IHttpActionResult RegisterPhone(string AccoutNum,string password)
        {
            string account = AccoutNum;// MachineCode.GetMachineCodeString();
            string pwd = password;// "123456";
            string name = AccoutNum;// account.Substring(0, 7);
            bool isok = false;
            string msg = "";
            int Code = -1;
            //try
            //{
            var snsuser = _snsService.GetEntityByWhere(x => x.PassportID == account);
            if (snsuser != null)
            {
                isok = true;
                msg = "该手机号已注册";
                Code = 1;
            }
            else
            {

                var result = _snsService.EasyRegUser(account, pwd, account);
                if (result.Code == (int)Status.Success)
                {
                    var sinfo = _snsService.GetEntityByWhere(x => x.PassportID == account);
                    tuser tuser = new tuser();
                    tuser.UserID = sinfo.UserId;
                    tuser.wechatName = name;
                    tuser.Gold = 99999999;
                    tuser.LastLotinTime1 = DateTime.Now.ToString();
                    tuser.RegTime = DateTime.Now;
                    tuser.IP = GetIP4Address();
                    tuser.Desc = "desc";
                    tuser.isRobot = 0;
                    tuser.wechatHeadIcon = "17.png";
                    tuser.Sex = 0;
                    _gameUserService.AddUser(tuser);

                    isok = true;
                    msg = "请求成功";
                    Code = 2;

                }
            }

          
            return Json(new { Code = Code, Message = msg, Account = account, Pwd = StringHelper.RegUser_MD5_Pwd(pwd), ipurl = "106.13.222.130", Data = "" });
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


    }

  
}