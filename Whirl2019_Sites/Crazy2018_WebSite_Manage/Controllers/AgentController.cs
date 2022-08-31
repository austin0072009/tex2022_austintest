using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck = true)]
    public class AgentController  : BaseController
    {
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();


        private readonly IUseragent2020Service AgentService;
        private readonly IH5winloseLogService H5winloseLogService;
        public AgentController(IUseragent2020Service _AgentService, IManageService manageService,
            IH5winloseLogService _H5winloseLogService) : base(manageService)
        {
            AgentService = _AgentService;
            H5winloseLogService = _H5winloseLogService;

        }
        public ActionResult Founder(DPagePara page)
        {
            return View();
        }


        public JsonResult GetFounderCeo(DPagePara page)
        {
            var data = AgentService.GetAgentCEO(page);
            data.RoleId = manager.role_id.Value;
            string pageUrl = Utils.CombUrlTxt("Founder", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return Json(data);
        }


        public JsonResult setShares()
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            var GoldCH_P_R = Request.Form["GoldCH_P_R"];
            var GoldCH_G_R = Request.Form["GoldCH_G_R"];
            var uid = Request.Form["uid"];
            int gpr = Int32.Parse(GoldCH_P_R);
            int ggr = Int32.Parse(GoldCH_G_R);
           
            if ((gpr + ggr) >100)
            {
                result.Message = "比例和不能大于100";
                result.Code = (int)Status.fail;
                return Json(result);
            }

            cs_jackpotrate model = new cs_jackpotrate();
            model.fn = "cs_jackpotrate";
            model.Ggr = ggr;
            model.Gpr = gpr;
            model.userId = int.Parse(uid);

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret.Equals(0))
            {
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                _manageService.AddActionlog(ActionEnum.Set, OptAction.Shares, ActionEnum.Set.ToDescription() +
                    OptAction.Shares.ToDescription());
            }
            else
            {
                result.Message = _scsetcard._info;
                result.Code = (int)Status.fail;
            }
            return Json(result);

        }
        public JsonResult setJackpotRate()
        {
            DataResult result = new DataResult();
            result.Message = "操作成功";
            var rate = Request.Form["JackpotRate"];
            var ceorate = Request.Form["CEOJackpotRate"];
            var origrate = Request.Form["OrignatorJackpotRate"];
            var uid = Request.Form["uid"];
            var type = Request.Form["type"];

            if (type.Equals("0"))
            {
                result.Message = "类型异常!";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            List<int> jackList = new List<int>();
            jackList.Add(Int32.Parse(rate));
            jackList.Add(Int32.Parse(ceorate));
            jackList.Add(Int32.Parse(origrate));
            if (jackList.Sum(t=>t)>100)
            {
                result.Message = "比例和不能大于100";
                result.Code = (int)Status.fail;
                return Json(result);
            }

            cs_jackpotrate model = new cs_jackpotrate();
            model.fn = "cs_jackpotrate";
            if (type.Equals("1")) model.jackpotrate = jackList;
            if (type.Equals("2")) model.bunosrate = jackList;
            if (type.Equals("3")) model.PotRates = jackList;//potrates
            model.userId = int.Parse(uid);

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret.Equals(0))
            {
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                _manageService.AddActionlog(ActionEnum.Set, OptAction.Jackpot, ActionEnum.Set.ToDescription() +
                    OptAction.Jackpot.ToDescription());
            }
            else
            {
                result.Message = _scsetcard._info;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        /// <summary>
        /// 发放奖池
        /// </summary>
        /// <returns></returns>
        public JsonResult sendJackpot() {

            DataResult result = new DataResult();
            result.Message = "操作成功";
            var rate = Request.Form["JackpotRate"];
            var ceorate = Request.Form["CEOJackpotRate"];
            var origrate = Request.Form["OrignatorJackpotRate"];
            var goldc = Int32.Parse(Request.Form["GoldC"]);
            var uid = Request.Form["uid"];
            var type = Request.Form["type"];

            cs_jackpotrate model = new cs_jackpotrate();
         
            List<int> jackList = new List<int>();
            jackList.Add(Int32.Parse(rate));
            jackList.Add(Int32.Parse(ceorate));
            jackList.Add(Int32.Parse(origrate));
            if (jackList.Sum(t => t) > 100)
            {
                result.Message = "比例和不能大于100";
                result.Code = (int)Status.fail;
                return Json(result);
            }
            if (type.Equals("1")) model.jackpotrate = jackList;
            if (type.Equals("2")) model.bunosrate = jackList;
            model.userId = int.Parse(uid);
            model.fn = "cs_jackpotrate";
            model.GoldC = goldc;

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret.Equals(0))
            {
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                _manageService.AddActionlog(ActionEnum.Set, OptAction.Jackpot, ActionEnum.Set.ToDescription() +
                    OptAction.Jackpot.ToDescription());
            }
            else
            {
                result.Message = _scsetcard._info;
                result.Code = (int)Status.fail;
            }
            return Json(result);
        }

        /// <summary>
        /// 发放股东红利
        /// </summary>
        /// <returns></returns>
        public JsonResult GrentGBonus() {
            DataResult result = new DataResult();
            result.Message = "操作成功";
       
            var uid = Request.Form["uid"];
            var GoldC = Request.Form["GoldC"];
            int _GoldC = Int32.Parse(GoldC);


            cs_sendDividend model = new cs_sendDividend();
            model.fn = "cs_sendDividend";
            model.gold = _GoldC;
            model.uId = int.Parse(uid);

            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(model));
            string _content = Utils.HttpGet(_url + _data);
            sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
            if (_scsetcard._ret.Equals(0))
            {
                result.Message = _scsetcard._info;
                result.Code = _scsetcard._ret;
                _manageService.AddActionlog(ActionEnum.Set, OptAction.Shares, ActionEnum.Set.ToDescription() +
                    OptAction.Shares.ToDescription());
            }
            else
            {
                result.Message = _scsetcard._info;
                result.Code = (int)Status.fail;
            }
            return Json(result);

        }
        // GET: Agent
        public ActionResult Index()
        {
            return View();
        }
    }
}