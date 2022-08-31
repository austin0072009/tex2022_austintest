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
    public class FormController : BaseController
    {

        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();

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

        public FormController(
            IManageService manageService,
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
        // GET: Form
        public ActionResult Index()
        {


            return View();
        }
        public ActionResult SetWithdraLv()
        {
            return View();
        }

        public JsonResult SetWithdraLvGm(int lv,int uid)
        {
            DataResult result = new DataResult();
            cs_setcashlevel_gm bgm = new cs_setcashlevel_gm();
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
                bgm.userid = uid;
                bgm.lv = lv;
                bgm.fn = "cs_setcashlevel_gm";
            }
            try
            {
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
                    manageLogservice.AddActionlog(ActionEnum.Set, OptAction.setMember, ActionEnum.Set.ToDescription() +
                        OptAction.setMember.ToDescription() + "等级:" + Enum.GetName(typeof(memberLevel), lv));
                }
                return Json(result);
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "设置兑换等级失败!";
                return Json(result);
            }
        }


    }
}