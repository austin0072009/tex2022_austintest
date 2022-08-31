using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Club;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck = true)]

    public class ClubController : BaseController
    {

        private readonly ISiteConfigSerivice _siteService;
        private readonly IManageLogService _manageLogService;
        private readonly INavigationService _navigationService;
        private readonly IManagerRoleService _managerRoleService;
        private readonly ITaxlogService _taxlogservice;
        private readonly IRechargeRecordService _rechargeService;
        private readonly IClubService _clubservice;
        private readonly ICluballianceService _cluballianceservice;
        private readonly IManageService _manageLogservice;
        private readonly IDiamondChangeLogService _diamLogservice;
        private readonly IClubGoldLogService _clubgoldservice;
        private readonly IClubUserGoldLogService _clubusergoldservice;
        private readonly IClubFundLogService _clubfundlogservice;

        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();

        public ClubController(IManageService manageService,
            ISiteConfigSerivice siteService,
            IManageLogService manageLogService,
            INavigationService navigationService,
            IManagerRoleService managerRoleService,
            ITaxlogService taxlogservice,
            IRechargeRecordService rechargeService,
            IClubService clubservice,
            ICluballianceService cluballianceservice,
            IManageService manageLogservice,
            IClubGoldLogService clubgoldservice,
            IClubUserGoldLogService clubusergoldservice,
            IClubFundLogService clubfundlogservice,
            IDiamondChangeLogService diamLogservice
            ) : base(manageService)
        {
            _siteService = siteService;
            _manageLogService = manageLogService;
            _navigationService = navigationService;
            _managerRoleService = managerRoleService;
            _taxlogservice = taxlogservice;
            _rechargeService = rechargeService;
            _clubservice = clubservice;
            _cluballianceservice = cluballianceservice;
            _manageLogservice = manageLogservice;
            _diamLogservice = diamLogservice;
            _clubgoldservice = clubgoldservice;
            _clubusergoldservice= clubusergoldservice;
            _clubfundlogservice = clubfundlogservice;
    }
        // GET: Club
        public ActionResult ClubList()
        {
            return View();
        }
        public ActionResult ClubChlid()
        {
            return View();
        }
        public ActionResult ClubUnions()
        {
            return View();
        }
        public ActionResult ClubUnionsChlid()
        {
            return View();
        }
        /// <summary>
        /// 联盟成员俱乐部
        /// </summary>
        /// <returns></returns>
        public ActionResult UnionUserClub() {
            return View();
        }
        public ActionResult DiamondChangeLog(DPagePara page)
        {
            var data = _diamLogservice.GetDiamondLogData(page);

            string pageUrl = Utils.CombUrlTxt("DiamondChangeLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
            
        }
        public ActionResult ClubfundLog(DPagePara page)
        {
            var data = _clubfundlogservice.GetClubFundLogData(page);

            string pageUrl = Utils.CombUrlTxt("ClubfundLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
        }
        /// <summary>
        /// 删除基金日志
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult ClubfundLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "ClubfundLog", "parent.loadMenuTree"));
            var result = _clubfundlogservice.ClubClubFundLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "ClubfundLog", "parent.loadMenuTree")); ;
        }
        public ActionResult ClubGoldLog(DPagePara page)
        {
            var data = _clubgoldservice.GetClubGoldData(page);

            string pageUrl = Utils.CombUrlTxt("ClubGoldLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
         
        }
        /// <summary>
        /// 删除俱乐部log
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult ClubGoldLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "ClubGoldLog", "parent.loadMenuTree"));
            var result = _clubgoldservice.ClubGoldLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "ClubGoldLog", "parent.loadMenuTree"));
        }

        public ActionResult ClubUserGoldLog(DPagePara page)
        {
            var data = _clubusergoldservice.GetClubUserGoldData(page);

            string pageUrl = Utils.CombUrlTxt("ClubUserGoldLog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return View(data);
            
        }
        /// <summary>
        /// 删除俱乐部会员log
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult ClubUserGoldLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "ClubUserGoldLog", "parent.loadMenuTree"));
            var result = _clubusergoldservice.ClubUserGoldLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "ClubUserGoldLog", "parent.loadMenuTree"));
        }

        /// <summary>
        /// 删除钻石log
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        public JsonResult DiamondChangeLogDel(string ids)
        {
            if (string.IsNullOrEmpty(ids))
                return Json(CommonHelper.JscriptMsg("请选中您要操作的记录！", "DiamondChangeLog", "parent.loadMenuTree"));
            var result = _diamLogservice.DiamondChangeLogDel(ids);
            return Json(CommonHelper.JscriptMsg(result.Message, "DiamondChangeLog", "parent.loadMenuTree"));
        }

        [HttpPost]
        public JsonResult GetclubData(DPagePara page)
        {
            var result = _clubservice.GetListGlubData(page);
            string pageUrl = Utils.CombUrlTxt("ClubList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetUnionData(DPagePara page)
        {
            var result = _cluballianceservice.GetunionData(page);
            string pageUrl = Utils.CombUrlTxt("ClubUnion", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        /// <summary>
        /// 根据用户id获取俱乐部集合
        /// </summary>
        /// <param name="page"></param>
        /// <param name="uid"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetClubByUid(DPagePara page,int uid)
        {
            var result = _clubservice.GetClubListByUid(page,uid);
            string pageUrl = Utils.CombUrlTxt("UnionUserClub", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
        }

        /// <summary>
        /// 修改俱乐部idx 有会员、有相同的idx 不能修改
        /// </summary>
        /// <param name="clubidx">新的idx</param>
        /// <param name="thisid">当前idx</param>
        /// <param name="type">类型 1 俱乐部 2 联盟</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateIdx(int newidx, int thisid,int type)
        {

            

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                //admin和充值
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    if (newidx < 0 || thisid < 0 ||type<0)
                    {
                        Log.Error("编码", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_cluborunion_gm _setcard = new cs_cluborunion_gm() { fn = "cs_cluborunion_gm" };
                    _setcard.gameid = 4;
                    _setcard.idx = thisid;// 1380162;      
                    _setcard.type = type;//1俱乐部  2联盟 
                    _setcard.newidx = newidx;
                
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);

                    sc_cluborunion_gm _scsetcard = JsonHelper.JSONToObject<sc_cluborunion_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "修改失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Edit;
                        string typestr = type == 1 ? "俱乐部" : "联盟";
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "原idx:" + thisid + ",类型：" + typestr + ",现在idx:" + newidx);
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

                result.Code = (int)Status.fail;
                result.Message = "修改失败";
            }
            return Json(result);
        }




        [HttpPost]
        public JsonResult UpdateClubGold(int money, int type,int chargtype, int idx)
        {

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                //admin和充值
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    if (type < 0 || idx < 0 || money <= 0)
                    {
                        Log.Error("充值金币", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_clubcharge_gm _setcard = new cs_clubcharge_gm() { fn = "cs_clubcharge_gm" };
                    _setcard.gameid = 4;
                    _setcard.idx = idx;//  
                    _setcard.type = type;//1联盟 2俱乐部
                    _setcard.money = money;
                    _setcard.chargetype = chargtype;//
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);

                    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "充值失败";
                    }
                    else
                    {

                        string typestr = "";
                        int rtype = 8;
                        var actionhtype = ActionEnum.Recharge;

                        if (type == 1)
                        {
                            typestr = "上金币";
                            rtype = (int)Rechargechannel.KEFU;
                            actionhtype = ActionEnum.Recharge;
                        }
                        if (type == 2)
                        {
                            typestr = "下金币";
                            rtype = (int)Rechargechannel.KEFU2;
                            actionhtype = ActionEnum.backRecharge;
                        }


                        var rre = new RechargeRecordEntity
                        {
                            Number = (decimal)money,
                            UserId = idx,
                            OrderNumber = StringHelper.GenerateId(),
                            RechargeType = rtype,
                            Remark = "俱乐部会员" + typestr,
                            GoldCount = (decimal)money,
                            IsHandel = true,
                            orderState = 2,
                            businessOrderState = 2
                        };
                        _rechargeService.AddEntity(rre);
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "金额:" + money + ",俱乐部:" + idx) ;
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

                result.Code = (int)Status.fail;
                result.Message = "充值失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult UpdateChlidClubGold(int money, int type, int chargtype, int idx, int userid)
        {

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                //admin和充值
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    if (type < 0 || idx < 0 || money <= 0)
                    {
                        Log.Error("充值金币", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_chlidcharge_gm _setcard = new cs_chlidcharge_gm() { fn = "cs_chlidcharge_gm" };
                   
                    _setcard.idx = idx;//  
                    _setcard.type = type;//1联盟 2俱乐部
                    _setcard.money = money;
                    _setcard.userid = userid;
                    _setcard.chargetype = chargtype;//
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);

                    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "充值失败";
                    }
                    else
                    {

                        string typestr = "";
                        int rtype = 8;
                        var actionhtype = ActionEnum.Recharge;

                        if (type == 1)
                        {
                            typestr = "上金币";
                            rtype = (int)Rechargechannel.KEFU;
                            actionhtype = ActionEnum.Recharge;
                        }
                        if (type == 2)
                        {
                            typestr = "下金币";
                            rtype = (int)Rechargechannel.KEFU2;
                            actionhtype = ActionEnum.backRecharge;
                        }


                        var rre = new RechargeRecordEntity
                        {
                            Number = (decimal)money,
                            UserId = idx,
                            OrderNumber = StringHelper.GenerateId(),
                            RechargeType = rtype,
                            Remark = "俱乐部会员" + typestr,
                            GoldCount = (decimal)money,
                            IsHandel = true,
                            orderState = 2,
                            businessOrderState = 2
                        };
                        _rechargeService.AddEntity(rre);
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "金额:" + money + ",俱乐部:" + idx + "充值会员：" + userid);
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

                result.Code = (int)Status.fail;
                result.Message = "充值失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult UpdateUnionGold(int money, int type, int chargtype, int idx)
        {

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                //admin和充值
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    if (type < 0 || idx < 0 || money <= 0)
                    {
                        Log.Error("充值金币", "传入参数格式错误");
                        result.Code = (int)Status.fail;
                        result.Message = "传入参数格式错误";
                        return Json(result);
                    }
                    cs_clubcharge_gm _setcard = new cs_clubcharge_gm() { fn = "cs_clubre_gm" };
                    _setcard.gameid = 4;
                    _setcard.idx = idx;    
                    _setcard.type = type;
                    _setcard.money = money; //chargtype == 1 ? money * 100 : money * 10;//金币和钻石
                    _setcard.chargetype = chargtype;//1俱乐部  2联盟
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);

                    sc_charge_gm _scsetcard = JsonHelper.JSONToObject<sc_charge_gm>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "充值失败";
                    }
                    else
                    {
                        string typestr = "";
                        int rtype = 8;
                        var actionhtype = ActionEnum.Recharge;

                        if (type == 1)
                        {
                            typestr = "上金币";
                            rtype = (int)Rechargechannel.KEFU;
                            actionhtype = ActionEnum.Recharge;
                        }
                        if (type == 2)
                        {
                            typestr = "下金币";
                            rtype = (int)Rechargechannel.KEFU2;
                            actionhtype = ActionEnum.backRecharge;
                        }
                        if (type == 3)
                        {
                            typestr = "上钻石";

                        }
                        if (type == 4)
                        {
                            typestr = "下钻石";

                        }
                        var rre = new RechargeRecordEntity
                        {
                            Number = (decimal)money,
                            UserId = idx,
                            OrderNumber = StringHelper.GenerateId(),
                            RechargeType = rtype,
                            Remark = "联盟"+typestr,
                            GoldCount = money,//(decimal)chargtype == 1 ? money * 100 : money * 10,
                            IsHandel = true,
                            orderState = 2,
                            businessOrderState = 2
                        };
                        _rechargeService.AddEntity(rre);
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "金额:" + money + ",联盟:" + idx);
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

                result.Code = (int)Status.fail;
                result.Message = "充值失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetChlidData(DPagePara page,int idx)
        {
            var result = _clubservice.GetListuserData(page,idx);
            string pageUrl = Utils.CombUrlTxt("ClubList", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);
           
        }
        [HttpPost]
        public JsonResult AddChlid(int userid, int idx)
        {
            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    cs_addchlid_club _setcard = new cs_addchlid_club() { fn = "cs_addchlid_club" };
                    _setcard.userid = userid;
                    _setcard.idx = idx;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);

                    sc_apply_club _scsetcard = JsonHelper.JSONToObject<sc_apply_club>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "添加失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Recharge;
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "加入俱乐部idx:" + idx + ",加入用户:" + userid);
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

                result.Code = (int)Status.fail;
                result.Message = "添加失败";
            }
            return Json(result);
        }

        [HttpPost]
        public JsonResult DelChlid(int userid,int idx)
        {
            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    cs_removechlid_club _setcard = new cs_removechlid_club() { fn = "cs_removechlid_club" };
                    _setcard.userid = userid;
                    _setcard.idx = idx;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);
                    sc_apply_club _scsetcard = JsonHelper.JSONToObject<sc_apply_club>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "删除失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Recharge;
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "俱乐部idx:" + idx + ",移除用户:" + userid);
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

                result.Code = (int)Status.fail;
                result.Message = "删除失败";
            }
            return Json(result);
        }

        /// <summary>
        /// 修改chlid用户信息
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="rate"></param>
        /// <param name="playcount"></param>
        /// <param name="idx"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateChlid(int userid,int rate,int playcount, int idx)
        {
            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    cs_updatechlid_club _setcard = new cs_updatechlid_club() { fn = "cs_updatechlid_club" };
                    _setcard.userid = userid;
                    _setcard.idx = idx;
                    _setcard.rate = rate;
                    _setcard.playcount = playcount;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);
                    sc_apply_club _scsetcard = JsonHelper.JSONToObject<sc_apply_club>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "修改失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Recharge;
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "俱乐部idx:" + idx + ",修改用户:" + userid);
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

                result.Code = (int)Status.fail;
                result.Message = "修改失败";
            }
            return Json(result);
        }
        /// <summary>
        /// 添加会员到联盟
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="ownclubid"></param>
        /// <param name="aId"></param>
        /// <param name="agree"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult AddUnionUser(int userid,int ownclubid,int aId,int agree) {

            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    List<tclub> clubs = _clubservice.GetEntityLisrByWhere(x=>x.UserId==userid);
                    if (clubs.Count==0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "该用户没有加入俱乐部";
                        return Json(result);
                    }
                    cs_agree_union _setcard = new cs_agree_union() { fn = "cs_agree_union" };
                    _setcard.agree = agree;
                    _setcard.idx = Convert.ToInt32(clubs.SingleOrDefault().idx);
                    _setcard.aId = aId;
                    _setcard.ownclubid = ownclubid;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);
                    sc_agree_alli _scsetcard = JsonHelper.JSONToObject<sc_agree_alli>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "添加失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Recharge;
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "联盟idx:" + aId + ",新加会员id:" + userid);
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

                result.Code = (int)Status.fail;
                result.Message = "修改失败";
            }
            return Json(result);
        }

        /// <summary>
        /// 添加或删除 管理员
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="atype">0=删除 1=添加</param>
        /// <param name="idx"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult AddClubManage(int uid, int atype, int idx)
        {
            DataResult result = new DataResult();

            result.Message = "操作成功";
            try
            {
                if (manager.role_id.Equals(1) || manager.role_id.Equals(4) || manager.role_id.Equals(12))
                {
                    cs_addmanager_club _setcard = new cs_addmanager_club() { fn = "cs_addmanager_club" };
                    _setcard.uid = uid;
                    _setcard.idx = idx;
                    _setcard.atype = atype;
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                    string _content = Utils.HttpGet(serviceUrl + _data);
                    sc_apply_club _scsetcard = JsonHelper.JSONToObject<sc_apply_club>(_content);
                    if (_scsetcard._ret != 0)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "添加失败";
                    }
                    else
                    {
                        var actionhtype = ActionEnum.Recharge;
                        _manageService.AddActionlog(actionhtype, OptAction.RechargeGold, actionhtype.ToDescription() +
                            OptAction.RechargeGold.ToDescription() + "俱乐部idx:" + idx + ",添加管理员用户:" + uid);
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

                result.Code = (int)Status.fail;
                result.Message = "删除失败";
            }
            return Json(result);
        }


        /// <summary>
        /// 获取联盟成员
        /// </summary>
        /// <param name="page"></param>
        /// <param name="idx"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetUnionChlidData(DPagePara page, int idx)
        {
            var result = _cluballianceservice.GetListuserData(page, idx);
            string pageUrl = Utils.CombUrlTxt("ClubUnionsChlid", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(result.PageSize, result.PageIndex, result.TotalCount, pageUrl, 8, true);
            result.InnerHtml = InnerHtml;
            return Json(result);

        }
        [HttpPost]
        public JsonResult AddUnionChlid(ClubChild child, int idx)
        {
            string str = "";
            string message = "添加失败";
            using (texas_2021Entities db = new texas_2021Entities())
            {
                tcluballiance result = _cluballianceservice.GetEntityByID(idx);
                List<ClubChild> clubchlids = new List<ClubChild>();
                if (result != null)
                {
                    tuser user = db.tuser.Where(x => x.UserID == child.userid).FirstOrDefault();
                    if (user != null)
                    {
                        foreach (var item in clubchlids)
                        {
                            if (item.userid == user.UserID)
                            {
                                message = "该俱乐部已加入联盟。";
                                return Json(new { success = true, msg = message });
                            }
                        }
                    }
                    else
                    {
                        message = "该用户不存在。";
                        return Json(new { success = true, msg = message });
                    }

                    clubchlids = JsonHelper.JSONToObject<List<ClubChild>>(result.childs);
                    clubchlids.Add(child);

                }
                str = JsonHelper.ObjectToJSON(clubchlids);
                result.childs = str;
                _cluballianceservice.UpdateEntity(result);
                message = "添加成功";
            }
            return Json(new { success = true, msg = message });
        }

        [HttpPost]
        public JsonResult DelUnionChlid(int userid, int idx)
        {
            string str = "";
            string message = "删除失败";
            tcluballiance result = _cluballianceservice.GetEntityByID(idx);
            List<ClubChild> clubchlids = new List<ClubChild>();
            if (result != null)
            {
                clubchlids = JsonHelper.JSONToObject<List<ClubChild>>(result.childs);
                foreach (ClubChild item in clubchlids)
                {
                    if (item.userid == userid)
                    {
                        clubchlids.Remove(item);
                    }
                }
                str = JsonHelper.ObjectToJSON(clubchlids);
                result.childs = str;
                _cluballianceservice.UpdateEntity(result);
                message = "删除成功";
            }

            return Json(new { success = true, msg = message });
        }

        [HttpPost]
        public JsonResult UpdateUnionChlid(ClubChild chlid, int idx)
        {
            string str = "";
            string message = "修改失败";
            tcluballiance result = _cluballianceservice.GetEntityByID(idx);
            List<ClubChild> clubchlids = new List<ClubChild>();
            if (result != null)
            {
                clubchlids = JsonHelper.JSONToObject<List<ClubChild>>(result.childs);
                foreach (ClubChild item in clubchlids)
                {
                    if (item.userid == chlid.userid)
                    {
                        item._ismanager = chlid._ismanager;
                        item.rate = chlid.rate;
                        item.playcount = chlid.playcount;
                        item.cgold = chlid.cgold;
                    }
                }
                str = JsonHelper.ObjectToJSON(clubchlids);
                result.childs = str;
                _cluballianceservice.UpdateEntity(result);
                message = "修改成功";
            }

            return Json(new { success = true, msg = message });
        }
    }
}