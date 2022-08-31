using ETModel.Framework.Common;
using ETModel.Framework.Common.Configuration;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using GameSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 逻辑消息进来 的接口处理
    /// </summary>
    public class CommonLogic
    {

        public CommonLogic()
        {
        }

        /// <summary>
        /// 处理消息
        /// </summary>
        /// <param name="clientcommand"></param>
        /// <returns></returns>
        public async Task<string> DealDataEx(string _data, string _ipport, int SessionUserID)
        {
            string senddata = "";
            _ipport = _ipport.Split(':')[0];

            cs_base _basedata = JsonUtils.Deserialize<cs_base>(_data);
            if (_basedata.fn.Contains("cs_create1005"))
            {
                cs_create1005 _creator = JsonUtils.Deserialize<cs_create1005>(_data);
                senddata = await AccountHelper.Creater1005(_creator, _ipport, SessionUserID);
                return senddata;
            }
            Language.SetLang(_basedata.cc);
            tUser _tempuser = await BaseHelper.GetBase<tUser>(SessionUserID);
            if (_tempuser == null)
            {
                if (_basedata.fn == "cs_login")
                {
                    sc_login _logindata = new sc_login() { result = -1005, user = new PlayerInfoSD() };
                    return JsonUtils.Serialize(_logindata);
                }
                else
                {
                    TraceLogEx.Error("CommonLogic 201611051736 User数据找不到SessionUserID：" + SessionUserID);
                    return senddata;
                }
            }

            switch (_basedata.fn)
            {
                case "cs_login"://登录
                    cs_login _login = JsonUtils.Deserialize<cs_login>(_data);
                    _login.IP = _ipport;
                    senddata = await Login(_tempuser, _login);
                    break;
                case "cs_freshplayerInfoSD": //获取玩家信息 
                    senddata = await GoldTradeHelper.GetCurrentPlayerInfoSD(_tempuser);
                    break;
                case "cs_getgamelist": //获取游戏列表
                    cs_getgamelist _gamelist = JsonUtils.Deserialize<cs_getgamelist>(_data);
                    senddata = await GetGameList(_tempuser);
                    break;

                #region game Process 
                case "cs_getgamelevel": //获取游戏列表   也是房间列表 
                    cs_getgamelevel _levellist = JsonUtils.Deserialize<cs_getgamelevel>(_data);
                    if (_levellist.gameid == 0) _levellist.gameid = _levellist._g;
                    senddata = await GetLevelList(_tempuser, _levellist.gameid);
                    break;
                //case "cs_slotentertable": //进入指定房间
                //    cs_slotentertable _slotentertable = JsonUtils.Deserialize<cs_slotentertable>(_data);
                //    senddata = await slotentertable(_tempuser, _slotentertable);
                //    break;
                case "cs_enterroom": //进入指定房间
                    cs_enterroom _entertoom = JsonUtils.Deserialize<cs_enterroom>(_data);
                    senddata = await EnterRoom(_tempuser, _entertoom);
                    break;
                #endregion

                case "cs_getnotice":// 请求当前公告
                    cs_getnotice _notice = JsonUtils.Deserialize<cs_getnotice>(_data);
                    senddata = await GetNotice(_tempuser, _notice._t, "");
                    break;
                case "cs_getnoticelist":
                    cs_getnoticelist _noticelist = JsonUtils.Deserialize<cs_getnoticelist>(_data);
                    senddata = await GetNoticelist(_tempuser, _noticelist._t, _noticelist.Count);
                    break;
                case "cs_ping"://GetPing  //给请求方发送服务器时间
                    senddata = GetPing();
                    break;
                case "cs_getranklist": //获取排行榜列表  
                    cs_getranklist _getrank = JsonUtils.Deserialize<cs_getranklist>(_data);
                    senddata = await RankHelper.GetRankList(_tempuser, _getrank);
                    break;
                case "cs_getranklist2": //获取排行榜列表  
                    cs_getranklist2 getGameUserRank = JsonUtils.Deserialize<cs_getranklist2>(_data);
                    senddata = await RankHelper.cs_getranklist2(_tempuser);
                    break;
                case "cs_getcombatgainlist":
                    cs_getcombatgainlist _getcombatgain = JsonUtils.Deserialize<cs_getcombatgainlist>(_data);
                    senddata = await GetCombatGainList(_tempuser, _getcombatgain);
                    break;
                case "cs_ChangeIconAndName":  //// 
                    cs_ChangeIconAndName _changeIconAndName = JsonUtils.Deserialize<cs_ChangeIconAndName>(_data);
                    senddata = await ChangeIconAndName(_tempuser, _changeIconAndName);
                    break;
                case "cs_tactivity":
                    cs_tactivity tactivity = JsonUtils.Deserialize<cs_tactivity>(_data);
                    senddata = await GetActivity();
                    break;

                #region 商城相关
                case "cs_commodity"://获取商品信息
                    cs_commodity comData = JsonUtils.Deserialize<cs_commodity>(_data);
                    senddata = await ShopHelper.GetCommodity(comData, _tempuser.UserID);
                    break;
                case "cs_exchangeMessage"://兑换商品
                    cs_exchangeMessage exData = JsonUtils.Deserialize<cs_exchangeMessage>(_data);

                    senddata = await ShopHelper.exchangeCommodity(exData, _tempuser);
                    break;
                case "cs_myExchange":
                    cs_myExchange myexData = JsonUtils.Deserialize<cs_myExchange>(_data);
                    senddata = ShopHelper.GetShopItemsList(_tempuser, (CommodityType)myexData.comtype);
                    break;
                case "cs_addUserContact":
                    cs_addUserContact userContact = JsonUtils.Deserialize<cs_addUserContact>(_data);
                    senddata = await ShopHelper.addUserContact(userContact, _tempuser);
                    break;
                #endregion

                #region 邮件相关
                case "cs_getemaillist":
                    cs_getemaillist mail = JsonUtils.Deserialize<cs_getemaillist>(_data);
                    var mailList = await MailHelper.GetEmailList(_tempuser.UserID);
                    mailList.fn = "sc_getemaillist";
                    mailList.result = 1;
                    senddata = JsonUtils.Serialize(mailList);
                    break;

                case "cs_sendemail"://用户发送邮件 送金币
                    cs_sendemail sendmail = JsonUtils.Deserialize<cs_sendemail>(_data);
                    sc_sendemail sendmaildata = new sc_sendemail { result = 0 };
                    string tradeNo = string.Empty;
                    tUser _touser = await BaseHelper.GetBase<tUser>(sendmail._toUsesID);

                    if (_tempuser.GetGoldAndWinGold >= sendmail._gold)
                    {
                        if (_touser != null)
                        {
                            // if (BaseLobby.instanceBase._openSendGold)
                            tradeNo = await tb_TradeInfoEx.Add(sendmail._gold, 0, _tempuser.UserID, sendmail._toUsesID, 5);
                        }
                        else
                        {
                            sendmaildata.result = -100;////目标用户不存在不足
                        }
                    }
                    else
                    {
                        sendmaildata.result = -99;////余额不足
                    }

                    if (!string.IsNullOrEmpty(tradeNo))
                    {
                        var sendEmailFlag = await MailHelper.SendEmail(tradeNo, _tempuser.UserID, _tempuser.wechatName, sendmail._toUsesID, 1, 0, sendmail._title, sendmail._content);
                        if (sendEmailFlag)
                        {
                            _tempuser.GoldReduce(sendmail._gold);
                            _tempuser.diamond -= sendmail._diamond;
                            sendmaildata.result = 1;
                        }
                    }
                    senddata = JsonUtils.Serialize(sendmaildata);
                    break;
                case "cs_receiveemail":
                    cs_receiveemail receiveemail = JsonUtils.Deserialize<cs_receiveemail>(_data);
                    sc_receiveemail receiveemaildata = new sc_receiveemail { result = 0 };
                    receiveemaildata.result = await MailHelper.ReceiveEmail(_tempuser, receiveemail.tradeno, receiveemaildata);
                    senddata = JsonUtils.Serialize(receiveemaildata);
                    break;
                case "cs_setemailstate":
                    cs_setemailstate setMail = JsonUtils.Deserialize<cs_setemailstate>(_data);
                    sc_setemailstate sendSetMail = new sc_setemailstate { };
                    sendSetMail.result = await MailHelper.SetMailState(setMail.tradeNo, _tempuser.UserID);
                    senddata = JsonUtils.Serialize(sendSetMail);
                    break;
                case "cs_removeEmail":
                    cs_removeEmail removeEmail = JsonUtils.Deserialize<cs_removeEmail>(_data);
                    senddata = await MailHelper.RemoveEmail(removeEmail.tradeNo, removeEmail.ToUserId);
                    break;
                #endregion

                #region 金币赠送相关
                case "cs_sendgoldtrade"://索要赠送请求
                    cs_sendgoldtrade data = JsonUtils.Deserialize<cs_sendgoldtrade>(_data);
                    senddata = await GoldTradeHelper.GoldTrade(_tempuser, data);
                    break;
                case "cs_dealgoldtrade"://确认赠送金币
                    cs_dealgoldtrade data1 = JsonUtils.Deserialize<cs_dealgoldtrade>(_data);
                    senddata = await GoldTradeHelper.EnsureGoldTrading(_tempuser, data1);
                    break;
                case "cs_getgoldlog"://得到自己赠送  获赠的记录
                    cs_getgoldlog getrecord = JsonUtils.Deserialize<cs_getgoldlog>(_data);
                    senddata = GoldTradeHelper.GetGiveRecord(_tempuser, getrecord);
                    break;
                case "cs_searchgoldornickname"://查询金币或者昵称
                    cs_searchgoldornickname search = JsonUtils.Deserialize<cs_searchgoldornickname>(_data);
                    senddata = await GoldTradeHelper.SearchGoldOrNickName(_tempuser, search);
                    break;

                #endregion

                #region 银行相关 
                case "cs_enterbank_bk":  ////进入银行
                    cs_enterbank_bk _entertable = JsonUtils.Deserialize<cs_enterbank_bk>(_data);
                    senddata = await Bank.EnterBank(_tempuser, _entertable);
                    break;
                case "cs_getbank_bk":  ////获取银行信息
                    senddata = await Bank.GetBankInfo(_tempuser);
                    break;
                case "cs_opBank_bk":  ////操作日志
                    cs_opBank_bk _opBank = JsonUtils.Deserialize<cs_opBank_bk>(_data);
                    senddata = await Bank.OpBank(_tempuser, _opBank);
                    break;
                case "cs_opBankPwd_bk":  ////操作日志
                    cs_opBankPwd_bk _opBankPwd = JsonUtils.Deserialize<cs_opBankPwd_bk>(_data);
                    senddata = await Bank.OpBank(_tempuser, _opBankPwd);
                    break;
                case "cs_changePassword_bk":  ////修改交易密码
                    cs_changePassword_bk _changePassword = JsonUtils.Deserialize<cs_changePassword_bk>(_data);
                    senddata = await Bank.ChangePassword(_tempuser, _changePassword);
                    break;
                case "cs_changePassword_appbk":  ////修改交易密码
                    cs_changePassword_appbk _changeAppPassword = JsonUtils.Deserialize<cs_changePassword_appbk>(_data);
                    senddata = await Bank.ChangeAppPassword(_tempuser, _changeAppPassword);
                    break;
                case "cs_mobilephonenum":  //获取绑定的银行卡支付宝
                    cs_mobilephonenum _mobilephonenum = JsonUtils.Deserialize<cs_mobilephonenum>(_data);
                    senddata = await Bank.GetMobilePhoneNum(_tempuser.UserID, _mobilephonenum);
                    break;
                case "cs_bindalipaybank"://绑定支付宝
                    cs_bindalipaybank bind = JsonUtils.Deserialize<cs_bindalipaybank>(_data);
                    senddata = await Bank.BindAction(bind);
                    break;
                #endregion

                #region club相关
                case "cs_enter_club":
                    cs_enter_club _enterc = JsonUtils.Deserialize<cs_enter_club>(_data);
                    senddata = await ClubHelper.EnterClub(_tempuser, _enterc);
                    break;
                case "cs_create_club":
                    cs_create_club _createclub = JsonUtils.Deserialize<cs_create_club>(_data);
                    senddata = await ClubHelper.CreateClub(_tempuser, _createclub);
                    break;
                case "cs_getinfoex_club":
                    cs_getinfoex_club _getinfoex = JsonUtils.Deserialize<cs_getinfoex_club>(_data);
                    senddata = await ClubHelper.GetClubInfoEx(_tempuser, _getinfoex);
                    break;
                case "cs_getlist_club":
                    cs_getlist_club _getlistclub = JsonUtils.Deserialize<cs_getlist_club>(_data);
                    senddata = await ClubHelper.GetClubList(_tempuser, _getlistclub);
                    break;
                case "cs_flooredit_club":
                    cs_flooredit_club _flooredit = JsonUtils.Deserialize<cs_flooredit_club>(_data);
                    senddata = await ClubHelper.FloorEdit(_tempuser, _flooredit);
                    break;
                case "cs_setting_club":
                    cs_setting_club _setting = JsonUtils.Deserialize<cs_setting_club>(_data);
                    senddata = await ClubHelper.Setting(_tempuser, _setting);
                    break;
                case "cs_search_club":
                    cs_search_club _searchclub = JsonUtils.Deserialize<cs_search_club>(_data);
                    senddata = await ClubHelper.GetSearchList(_tempuser, _searchclub);
                    break;
                case "cs_apply_club":
                    cs_apply_club _applyclub = JsonUtils.Deserialize<cs_apply_club>(_data);
                    senddata = await ClubHelper.Apply(_tempuser, _applyclub);
                    break;
                case "cs_applylist_club":
                    cs_applylist_club _applylistclub = JsonUtils.Deserialize<cs_applylist_club>(_data);
                    senddata = await ClubHelper.GetApplyList(_tempuser, _applylistclub);
                    break;
                case "cs_agree_club":
                    cs_agree_club _agreeclub = JsonUtils.Deserialize<cs_agree_club>(_data);
                    senddata = await ClubHelper.AgreeClub(_tempuser, _agreeclub);
                    break;
                case "cs_dismiss_club":
                    cs_dismiss_club _dismissclub = JsonUtils.Deserialize<cs_dismiss_club>(_data);
                    senddata = await ClubHelper.DisMiss(_tempuser, _dismissclub);
                    break;
                case "cs_deleteuser_club":
                    cs_deleteuser_club deleteuser = JsonUtils.Deserialize<cs_deleteuser_club>(_data);
                    senddata = await ClubHelper.TickUser(_tempuser, deleteuser); ;
                    break;
                case "cs_applygold_club":
                    cs_applygold_club _applygoldclub = JsonUtils.Deserialize<cs_applygold_club>(_data);
                    senddata = await ClubHelper.ApplyGold(_tempuser, _applygoldclub);
                    break;
                case "cs_getapplygold_club":
                    cs_getapplygold_club _getapplygoldclub = JsonUtils.Deserialize<cs_getapplygold_club>(_data);
                    senddata = await ClubHelper.GetApplyGoldList(_tempuser, _getapplygoldclub);
                    break;
                case "cs_agreegold_club": //审核玩家 发放回收club币
                    cs_agreegold_club _agreegoldclub = JsonUtils.Deserialize<cs_agreegold_club>(_data);
                    senddata = await ClubHelper.AgreeGold(_tempuser, _agreegoldclub);
                    break;
                case "cs_addgold_club": // +-club币
                    cs_addgold_club _addgoldclub = JsonUtils.Deserialize<cs_addgold_club>(_data);
                    senddata = await ClubHelper.AddGold(_tempuser, _addgoldclub);
                    break;
                case "cs_protectpwd_club":
                    cs_protectpwd_club clubpwd = JsonUtils.Deserialize<cs_protectpwd_club>(_data);
                    senddata = await ClubHelper.ClubSetPwd(_tempuser, clubpwd);
                    break;
                case "cs_protectpwdcheck_club":
                    cs_protectpwdcheck_club pwdcheck = JsonUtils.Deserialize<cs_protectpwdcheck_club>(_data);
                    senddata = await ClubHelper.PwdChenk(_tempuser, pwdcheck);
                    break;
                case "cs_upgradeclub_club"://升级club
                    cs_upgradeclub_club upgradeclub = JsonUtils.Deserialize<cs_upgradeclub_club>(_data);
                    senddata = await ClubHelper.UpClublevel(_tempuser, upgradeclub);
                    break;
                case "cs_addmanager_club":
                    cs_addmanager_club addnameger = JsonUtils.Deserialize<cs_addmanager_club>(_data);
                    senddata = await ClubHelper.ClubAddmanager(_tempuser, addnameger);
                    break;
                case "cs_setclub_club":
                    cs_setclub_club setserch = JsonUtils.Deserialize<cs_setclub_club>(_data);
                    senddata = await ClubHelper.ClubSetSerch(_tempuser, setserch);
                    break;
                case "cs_clubgoldchild_club":
                    cs_clubgoldchild_club clubgoldchild = JsonUtils.Deserialize<cs_clubgoldchild_club>(_data);
                    senddata = await ClubHelper.GetclubChildGold(_tempuser, clubgoldchild);
                    break;
                case "cs_giveclubgold_club"://发放回收玩家club币
                    cs_giveclubgold_club giveclubgold = JsonUtils.Deserialize<cs_giveclubgold_club>(_data);
                    senddata = await ClubHelper.GiveClubGoldToUser(_tempuser, giveclubgold);
                    break;
                case "cs_clublvconfig_alli"://club配置协议
                    cs_clublvconfig_alli alliconfig = JsonUtils.Deserialize<cs_clublvconfig_alli>(_data);
                    senddata = await AllianceHelper.GetclubAlliConfig(_tempuser, alliconfig);
                    break;
                case "cs_modifyclubgolg_club":
                    cs_modifyclubgolg_club modifyclubgolg = JsonUtils.Deserialize<cs_modifyclubgolg_club>(_data);
                    senddata = await AllianceHelper.ModifyClubgold(_tempuser, modifyclubgolg);
                    break;
                case "cs_clubgolddetail_club"://club币明细
                    cs_clubgolddetail_club clubgolddetail = JsonUtils.Deserialize<cs_clubgolddetail_club>(_data);
                    senddata = await ClubHelper.GetClubGoldLog(_tempuser, clubgolddetail);
                    break;
                case "cs_refreshbalance_club"://刷新余额
                    cs_refreshbalance_club refreshbalance = JsonUtils.Deserialize<cs_refreshbalance_club>(_data);
                    senddata = await ClubHelper.GetUserBalance(_tempuser, refreshbalance);
                    break;
                case "cs_gettablelist_club":
                    cs_gettablelist_club _getctlist = JsonUtils.Deserialize<cs_gettablelist_club>(_data);
                    senddata = await ClubHelper.GetTableList(_tempuser, _getctlist);
                    break;
                case "cs_setrelation_club":
                    cs_setrelation_club _relation = JsonUtils.Deserialize<cs_setrelation_club>(_data);
                    senddata = await ClubHelper.ModifyClubRelation(_tempuser, _relation);
                    break;
                case "cs_setrights_club":
                    cs_setrights_club _rights = JsonUtils.Deserialize<cs_setrights_club>(_data);
                    senddata = await ClubHelper.ModifyClubRights(_tempuser, _rights);
                    break;
                case "cs_searchforadd_club":
                    cs_searchforadd_club _searchf = JsonUtils.Deserialize<cs_searchforadd_club>(_data);
                    senddata = await ClubHelper.SearchForAdd(_tempuser, _searchf);
                    break;
                case "cs_foradd_club":
                    cs_foradd_club _foradd = JsonUtils.Deserialize<cs_foradd_club>(_data);
                    senddata = await ClubHelper.ForAdd(_tempuser, _foradd);
                    break;

                case "cs_bangame_club":
                    cs_bangame_club _bangame = JsonUtils.Deserialize<cs_bangame_club>(_data);
                    senddata = await ClubHelper.BanGame(_tempuser, _bangame);
                    break;
                case "cs_getsplitarray_club":
                    cs_getsplitarray_club _getsplitarray = JsonUtils.Deserialize<cs_getsplitarray_club>(_data);
                    senddata = await ClubHelper.GetSlpitArray(_tempuser, _getsplitarray);
                    break;
                case "cs_modifysplitarray_club":
                    cs_modifysplitarray_club _modifysplitarray = JsonUtils.Deserialize<cs_modifysplitarray_club>(_data);
                    senddata = await ClubHelper.ModifySlpitArray(_tempuser, _modifysplitarray);
                    break;
                #endregion

                #region 基金
                case "cs_clubfund_club"://基金购买
                    cs_clubfund_club clubfund = JsonUtils.Deserialize<cs_clubfund_club>(_data);
                    senddata = await ClubHelper.BuyClubfund(_tempuser, clubfund);
                    break;
                case "cs_clubfundgrant_club":
                    cs_clubfundgrant_club clubfundgrant = JsonUtils.Deserialize<cs_clubfundgrant_club>(_data);
                    senddata = await ClubHelper.GiveClubfundToUser(_tempuser, clubfundgrant);
                    break;
                case "cs_fundlog_club":
                    cs_fundlog_club fundlog = JsonUtils.Deserialize<cs_fundlog_club>(_data);
                    senddata = await ClubHelper.Getfindlog(_tempuser, fundlog);
                    break;
                case "cs_fundchange_club":
                    cs_fundchange_club fundchange = JsonUtils.Deserialize<cs_fundchange_club>(_data);
                    senddata = await ClubHelper.FundChange(_tempuser, fundchange);
                    break;
                #endregion
                #region VIP相关 
                case "cs_getvipinfo"://获取vip的权限信息
                    cs_getvipinfo vipinfo = JsonUtils.Deserialize<cs_getvipinfo>(_data);
                    senddata = VIPHelper.GetVipAuth(_tempuser);
                    break;
                
                case "cs_getuserprizelog"://获取抽奖记录
                    cs_getuserprizelog prizelog = JsonUtils.Deserialize<cs_getuserprizelog>(_data);
                    ////senddata = turntableEx.GetUserPrizelog(_tempuser, prizelog.count);
                    break;
                case "cs_getuservipfreeinfo":
                    cs_getuservipfreeinfo freeinfo = JsonUtils.Deserialize<cs_getuservipfreeinfo>(_data);
                    senddata = VIPHelper.GetUserVipFreeInfo(_tempuser, freeinfo.levelid);
                    break;
                case "cs_getvipconfig"://获取VIP特权信息
                    sc_getvipconfig vipconfig = new sc_getvipconfig() { result = 1 };
                    vipconfig.config = await VIPHelper.GetVipConfig();
                    senddata = JsonUtils.Serialize(vipconfig);
                    break;
                case "cs_getuservipinfo"://获取玩家VIP信息
                    senddata = await VIPHelper.GetUserVipInfo(SessionUserID);
                    break;
                case "cs_receiveupaward"://领取晋级奖励
                    senddata = await VIPHelper.ReceiveUpAward(_tempuser);
                    break;
                case "cs_receivemonthaward"://领取每月奖励
                    senddata = await VIPHelper.ReceiveMonthAward(_tempuser);
                    break;
                #endregion

                #region 用户金币流向
                case "cs_userGoldChangeLog":
                    //senddata = await GoldTradeHelper.GetUserGoldChangeLog(_tempuser.UserID);
                    break;
                case "cs_userdiamondChangeLog"://砖石日志
                    //senddata = await GoldTradeHelper.GetUserDiamondslog(_tempuser.UserID, _basedata.cc);
                    break;
                case "cs_getUserRechargeLog"://赠送/受赠记录 
                    //senddata = await GoldTradeHelper.GetUserRechargeLog(_tempuser.UserID);
                    break;
                case "cs_getgamelog"://战绩记录 
                    cs_getgamelog _getUserGameRecord = JsonUtils.Deserialize<cs_getgamelog>(_data);
                    //senddata = await GoldTradeHelper.GetUserGameRecord(_tempuser.UserID, _getUserGameRecord.gameid);
                    break;
                #endregion

                #region 红包   
                case "cs_getWelfareTask"://获取福利任务信息
                    cs_getWelfareTask _welfareTask = JsonUtils.Deserialize<cs_getWelfareTask>(_data);
                    senddata = await RedEnvelopesHelper.GetWelfareTask(_tempuser.UserID);
                    break;
                case "cs_getWelfareCount"://获取红包次数
                    cs_getWelfareCount RedenCount = JsonUtils.Deserialize<cs_getWelfareCount>(_data);
                    senddata = await RedEnvelopesHelper.GetWelfareCount(_tempuser.UserID);
                    break;
                case "cs_getRedEnvCount"://领取红包个数
                    cs_getRedEnvCount receivered = JsonUtils.Deserialize<cs_getRedEnvCount>(_data);
                    senddata = RedEnvelopesHelper.GetRedEnvelopes(_tempuser.UserID, receivered.taskId);
                    break;
                case "cs_getWelfareInfo"://获取福利详情(红包打开记录)
                    cs_getWelfareInfo _welfareInfo = JsonUtils.Deserialize<cs_getWelfareInfo>(_data);
                    //senddata = await RedEnvelopesHelper.GetWelfareInfo(_tempuser.UserID, _welfareInfo.welfareType);
                    break;
                case "cs_getWelfare"://打开红包
                    cs_getWelfare _welfare = JsonUtils.Deserialize<cs_getWelfare>(_data);
                    //senddata = await RedEnvelopesHelper.GetWelfare(_tempuser.UserID, _welfare.welfareType);
                    break;
                #endregion

                #region 背包
                case "cs_getbackpacklist"://获取背包列表
                    senddata = await BackPackHelper.GetBackPackList(_tempuser.UserID);
                    break;
                case "cs_useprop"://使用道具
                    cs_useprop useprop = JsonUtils.Deserialize<cs_useprop>(_data);
                    senddata = await BackPackHelper.UseProp(_tempuser, useprop.PropID, useprop.PropCount);
                    break;
                #endregion

                #region agent相关协议
                case "cs_getagentinfo"://获取用户代理业绩
                    cs_getagentinfo getagent = JsonUtils.Deserialize<cs_getagentinfo>(_data);
                    senddata = await AgentHelper.GetAgent(_tempuser, getagent.idx);
                    break;
                case "cs_extendredinfo": //推广玩家数据       
                    cs_extendredinfo _extendredinfo = JsonUtils.Deserialize<cs_extendredinfo>(_data);
                    senddata = await AgentHelper.GetExtendUser(_tempuser, _extendredinfo);
                    break;
                case "cs_getcommision":
                    cs_getcommision getcommision = JsonUtils.Deserialize<cs_getcommision>(_data);
                    senddata = await AgentHelper.GetCommision(_tempuser, getcommision);
                    break;
                case "cs_receiveextendgold"://领取推广金
                    cs_receiveextendgold _receiveextend = JsonUtils.Deserialize<cs_receiveextendgold>(_data);
                    senddata = await AgentHelper.ReceiveExtendgold(_tempuser, _receiveextend);
                    break;
                case "cs_getagentlog":
                    cs_getagentlog _agentlog = JsonUtils.Deserialize<cs_getagentlog>(_data);
                    senddata = AgentHelper.GetAgentLog(_tempuser);
                    break;
                case "cs_setagent_gm"://上级给下级设置代理
                    cs_setagent_gm setagent = JsonUtils.Deserialize<cs_setagent_gm>(_data);
                    senddata = await AgentHelper.SetUserLevelByUserId(_tempuser.UserID, setagent);
                    break;
                #endregion

                #region gold back
                //case "cs_gameuserbandcard"://绑卡
                //    cs_bandcardinfo  csdata = JsonUtils.Deserialize<cs_bandcardinfo>(_data);
                //    senddata = Bank.BandUserCard(_tempuser.UserID, _tempuser.UserName, csdata.BankCardID, csdata.AccountType, csdata.Remark);
                //    break;
                case "cs_cashmoney"://goldback申请
                    cs_cashmoney ccdata = JsonUtils.Deserialize<cs_cashmoney>(_data);
                    senddata = Bank.UserCashMoney(_tempuser.UserID, ccdata.CmMoney, ccdata.pwd, ccdata.account, ccdata.UserName, ccdata.accounttype, ccdata.Remark);
                    break;
                #endregion

                case "cs_switchhandrack":
                    cs_switchhandrack csh = JsonUtils.Deserialize<cs_switchhandrack>(_data);
                    senddata = SwitchHandRack(csh);
                    break;
                case "cs_personalinfo":
                    cs_personalinfo cpl = JsonUtils.Deserialize<cs_personalinfo>(_data);
                    senddata = await PersonallnfoEdit(cpl);
                    break;
                case "cs_resetprotectPwd":
                    cs_resetprotectPwd resetprotectPwd = JsonUtils.Deserialize<cs_resetprotectPwd>(_data);
                    senddata = await ResetprotectPwd(_tempuser, resetprotectPwd);
                    break;
                
                case "cs_getjackpotlist":
                    senddata = await GetJackPotList(_data);
                    break;
                #region 任务相关
                case "cs_tasklist":
                    senddata = JsonUtils.Serialize(await BaseHelper.GetTaskList(SessionUserID));
                    break;
                case "cs_award":
                    var cs = JsonUtils.Deserialize<cs_award>(_data);
                    senddata = JsonUtils.Serialize(await BaseHelper.Award(SessionUserID, cs.taskid));
                    break;
                case "cs_share"://分享次数
                    BaseHelper.ChangeUserGameDate(_tempuser.UserID, 0, "ShareCount");
                    senddata = JsonUtils.Serialize(new sc_share() {result=1 });
                    break;
                #endregion
                #region 比赛
                case "cs_signup":
                    var cs_signup = JsonUtils.Deserialize<cs_signup>(_data);
                    cs_signup.userid = SessionUserID;
                    senddata = await CompeteService.Call(cs_signup);
                    break;
                case "cs_quit":
                    var cs_quit = JsonUtils.Deserialize<cs_quit>(_data);
                    cs_quit.userid = SessionUserID;
                    senddata = await CompeteService.Call(cs_quit);
                    break;
                case "cs_compete_list":
                    var cs_compete_list = JsonUtils.Deserialize<cs_compete_list>(_data);
                    cs_compete_list.userid = SessionUserID;
                    senddata = await CompeteService.Call(cs_compete_list);
                    break;
                case "cs_compete_rank_info":
                    var rankinginfo = JsonUtils.Deserialize<cs_compete_rank_info>(_data);
                    rankinginfo.userid = SessionUserID;
                    senddata = await CompeteService.Call(rankinginfo);
                    break;
                case "cs_compete_table_info":
                    var ctinfo = JsonUtils.Deserialize<cs_compete_table_info>(_data);
                    ctinfo.userid = SessionUserID;
                    senddata = await CompeteService.Call(ctinfo);
                    break;
                case "cs_watch":
                    var watchereq = JsonUtils.Deserialize<cs_watch>(_data);
                    watchereq.userid = SessionUserID;
                    senddata = await CompeteService.Call(watchereq);
                    break;
                case "cs_compete_record":
                    cs_compete_record crecord = JsonUtils.Deserialize<cs_compete_record>(_data);
                    crecord.userid = SessionUserID;
                    senddata = await CompeteService.Call(crecord);
                    break;
                case "cs_compete_record_detail":
                    cs_compete_record_detail cdetail = JsonUtils.Deserialize<cs_compete_record_detail>(_data);
                    cdetail.userid = SessionUserID;
                    senddata = await CompeteService.Call(cdetail);
                    break;
                #endregion
                default:
                    if (_basedata._g == 0) _basedata._g = _data.GetIntFromJsonString("gameid"); 
                    if (_basedata.fn.StartsWith("cs_entertablenum_")  )
                    {
                        int tnum = _data.GetIntFromJsonString("tnumber"); 
                        senddata = await Game.Scene.GetComponent<LobbyProxyComponent>().GetLobby2Game_DealDataExAsyncT(_basedata._g, tnum, _basedata.fn, _tempuser.UserID, _data);
                        break;
                    }
                    senddata = await FactoryBaseHelper.DealDataEx(_basedata._g, _data, _tempuser.UserID);
                    break;
            }
            ////CommonSendDataServer.instance.SendDataAsync(_tempuser.UserID, senddata);
            return senddata;
        }

        private async Task<string> GetJackPotList(string data)
        {
            cs_getjackpotlist jacklist = JsonUtils.Deserialize<cs_getjackpotlist>(data);
            sc_getjackpotlist scJackpot = new sc_getjackpotlist() { result = 1, jacks = new List<JackPot>() };
            List<string> strGameids = new List<string>(Game.Scene.GetComponent<LobbyProxyComponent>().games.Keys);

            List<int> gameids = new List<int>();
            List<int> jackGameIds = new List<int>() { 91, 92, 254, 301, 503 };
            List<int> jackLevelIds = new List<int>() { 911, 921, 25403, 25404, 25405, 3011, 5031 };
            foreach (var v in strGameids)
            {
                string[] ids = v.Split('.');
                foreach (var id in ids)
                {
                    if (!string.IsNullOrEmpty(id))
                    {
                        int gameid = Convert.ToInt32(id);
                        if (jackGameIds.Contains(gameid))
                        {
                            gameids.Add(gameid);
                        }

                    }
                }
            }
            if(jacklist.gameids!=null && jacklist.gameids.Count > 0)
            {
                gameids.Clear();
                gameids.AddRange(jacklist.gameids);
            }
            if (gameids.Count > 0)
            {
                List<tjackpot> gamejackpot = await BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0);
                var jackpots = (from g in gamejackpot
                                join gameid in gameids
                                on g.gameid equals gameid
                                join levelid in jackLevelIds
                                on g.levelid equals levelid
                                select new JackPot
                                {
                                    gameid = g.gameid,
                                    levelid = g.levelid,
                                    jackpot = g.jackpot
                                }).ToList();
                scJackpot.jacks.AddRange(jackpots);
            }
            return JsonUtils.Serialize(scJackpot);
        }


        /// <summary>
        /// 给请求方发送服务器时间
        /// </summary>
        /// <returns></returns>
        public string GetPing()
        {
            sc_ping _senddata = new sc_ping() { result = 1 };
            _senddata.fps = 45;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 过期处理
        /// </summary>
        /// <param name="myu"></param>
        /// <returns></returns>
        private async Task<int> Overduehandle(tuserInfoEx myu)
        {
            if (myu == null) return 0;
            var reinfo = myu.ReportInfo;
            int rgold = 0;
            if (reinfo != null)
            {
                if (reinfo.rtime.ToGetDayEndDateTime() < DateTime.Now.ToGetDayEndDateTime())
                {
                    reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };
                    myu.ReportInfo = reinfo;
                    await BaseHelper.AddOrUpdateBase(myu);
                }
            }
            else
            {
                reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };
                myu.ReportInfo = reinfo;
                await BaseHelper.AddOrUpdateBase(myu);
            }

            return reinfo.num;
        }


        private async Task<int> ChenkClubinfo(tUser _tempuser)
        {
            var cid = (_tempuser.clublist == null || _tempuser.clublist.Count == 0) ? 0 : _tempuser.clublist[0];
            if (cid != 0)
            {
                var agentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _tempuser.UserID && x.cidx == cid);
                if (agentRe==null)
                {
                    _tempuser.clublist = null;
                    tb_UserEx.UpdateData(_tempuser);
                    return 0;
                }
                else return agentRe.cidx;
            }
            return 0;
        }

        /// <summary>
        /// 返回用户信息，只有当前玩家需要处理   同时返回是否为断线重连，后续处理 _login.accountId
        /// </summary>
        /// <returns></returns>
        public async Task<string> Login(tUser _tempuser, cs_login _login)
        {
            sc_login _senddata = new sc_login() { result = 1, user = new PlayerInfoSD() };

            if (!string.IsNullOrEmpty(_tempuser.lockTime) && Convert.ToDateTime(_tempuser.lockTime) > DateTime.Now)
            {
                _senddata.result = -99;
                return JsonUtils.Serialize(_senddata);
            }

            _senddata.user.userid = _tempuser.UserID;
            _senddata.user._n = _tempuser.wechatName;
            _senddata.user.gold = _tempuser.GetGoldAndWinGold;

            _senddata.user.lv = _tempuser.vlevel;
            _senddata.user.UserLev = _tempuser.lv;
            _senddata.currUserExp = _tempuser.UserExp;
            _senddata.TotalUserExp = tb_UserEx.getUserExp(_tempuser);

            _senddata.user.wechat = new WechatInfoSD() { wicon = ToolsEx.IsHandlePhoto(_tempuser.isRobot, _tempuser.wechatHeadIcon), _S = _tempuser.Sex != 0 ? 1 : 0, wName = _tempuser.wechatName, Desc = _tempuser.Desc };
            _senddata.UserPassword = _tempuser.UserPassword;
            _tempuser.LastLotinTime2 = _tempuser.LastLotinTime1;
            _tempuser.LastLotinTime1 = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss:ffff");
            _tempuser.IP = _login.IP;
            _senddata.cidx = await ChenkClubinfo(_tempuser);
            tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(_tempuser.UserID);
            _senddata.user._vlv = userex.vipLv;
            _senddata.user.freecount = userex.freeCount;
            _senddata.user.recount = await Overduehandle(userex);
            _senddata.user.deposited = _tempuser.Gold;
            _senddata.user.mallGod = 0;
            _senddata.user.phone = userex.MobilePhoneNum;
            _senddata.user.winnings = userex.WinGold;


            userex.EnterGameTime = DateTime.Now;
            _senddata.headFrame = ToolsEx.IsHandlePhoto(0, userex.HeadFrame);
            _senddata.headIcos = new List<string>();
            if (userex.HeadIcos != null)
            {
                foreach (var v in userex.HeadIcos)
                {
                    _senddata.headIcos.Add(ToolsEx.IsHandlePhoto(0, v));
                }
            }
            UserStatus _us = await BaseHelper.TryGetUserStatus(_tempuser.UserID);//获取是否需要断线重连   
            if (_us != null && (_us.Status == UserStatusEnum.InTableDaPai || _us.Status == UserStatusEnum.InTableDaPaiDis || _us.Status == UserStatusEnum.InTableWaiting))
            {
                if (_us.Status == UserStatusEnum.InTableDaPai) //顶号先当断线处理
                {
                    TraceLogEx.Error(_tempuser.UserID + "mayby another loc login with the same account." + _us.Gameid);
                    //CommonLogic.ExitRoomByDisConnect(_us.UserID);
                }
                if (await GlobalDataService.GetGameIP_R(_us.Gameid, _us.TableID) != null && CheckTexasTableid(_us.Gameid, _us.TableID))
                {
                    _senddata.user.state = _us.TableID;
                    _senddata.user.tableid = _us.TableID;
                    _senddata.roomid = _us.Levelid;
                    _senddata.gameid = _us.Gameid;
                    _senddata.user._diam = _tempuser.diamond.ToInt32();

                }
                else { TraceLogEx.Error("game[" + _us.Gameid + "]table[" + _us.TableID + "]  Status[" + _us.Status + "] Not Exist.Set User[" + _tempuser.UserID + "] UserStatus to empty"); _us = null; }
            }
            if (_us == null)
            {
                _us = new UserStatus(UserStatusEnum.InLobby, 0, 0, _tempuser.UserID);
                await BaseHelper.AddorUpdateUserStatus(_us);
            }
            _tempuser.lat = _login.lat;
            _tempuser.lng = _login.lng;

            await BaseHelper.AddOrUpdateBase(userex);
            await BaseHelper.AddOrUpdateBase(_tempuser);  //更新登录时间与IP 
            //新增登录日志
            BaseHelper.AddUserLoginLog(_tempuser.UserID, _login.IP, _login.deviceID, _login.deviceType, _login.lat, _login.lng);
            tb_UserEx.WriteUserOnLineTime(_tempuser.UserID, 0, 0, true, false);
            _senddata.token = TokenManager.instanceBase.GetToken(_tempuser.UserID);

            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        /// 返回用户信息，只有当前玩家需要处理   同时返回是否为断线重连，后续处理
        /// </summary>
        /// <returns></returns>
        public async Task<string> ChangeIconAndName(tUser _tempuser, cs_ChangeIconAndName _changeIconAndName)
        {
            sc_ChangeIconAndName _senddata = new sc_ChangeIconAndName() { result = 1 };
            tUser tbuser = await tb_UserEx.GetFromCachebyUserID(_tempuser.UserID);

            tbuser.wechatName = _changeIconAndName.mName;
            tbuser.wechatHeadIcon = _changeIconAndName.IconAddress;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 修复某些情况下的重连问题
        /// </summary>
        /// <param name="gid"></param>
        /// <param name="tableid"></param>
        /// <returns></returns>
        public bool CheckTexasTableid(int gid,int tableid)
        {
            if (gid != 0 && gid != TexasLobby.instance._gameid) return true;
            var table = TexasLobby.instance.GetTableByTableNum(tableid);
            if (table == null) return false;
            return true;
        }


        /// <summary>
        /// 通知所有在线玩家，如公告信息
        /// </summary>
        /// <returns></returns>
        public string DealGM(sc_getnotice_n _user)
        {
            //处理公告        
            //sc_getnotice_n _getnotice = new sc_getnotice_n() { result = 1 noticelist = new List<string>() };
            //_getnotice.noticelist.Add("玩家1524879,获得了以排行榜一等级奖！");
            //_getnotice._t = 1;
            //_getnotice.gameid = 0;
            BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((_user)));
            sc_base _senddata = new sc_base() { result = 1 };
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 通知所有在线玩家，如公告信息
        /// </summary>
        /// <returns></returns>
        public string DealGM(sc_notice_n _user)
        {
            BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((_user)));
            sc_base _senddata = new sc_base() { result = 1 };
            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        /// 返回我的战绩列表，
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetCombatGainList(tUser _user, cs_getcombatgainlist _data)
        {
            sc_getcombatgainlist _senddata = new sc_getcombatgainlist() { result = 1, _ranklist = new List<CombatGainInfoSD>() };

            _senddata._ranklist = await ttableUserLogEx.GetCombatGainList(_user.UserID);

            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 返回游戏列表，只有当前玩家需要处理
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetGameList(tUser _user)
        {
            sc_getgamelist _senddata = new sc_getgamelist() { result = 1, gamelist = new List<GameInfoSD>() };

            List<tgameinfo> gamelist = (await BaseHelper.GetShareAll<tgameinfo>()).OrderBy(w => w.Sort).ToList();
            if (gamelist != null)
            {
                foreach (var item in gamelist)
                {
                    if (!item.isopen) continue;
                    _senddata.gamelist.Add(new GameInfoSD() { id = item.id, name = item.name, desc = item.desc, open = item.isopen ? 1 : 0, type = item.type, hot = item.isHot, icon = item.icon, url = item.gameurl, IsDefend = item.IsRun, platType = item.platType });
                }
            }

            return JsonUtils.Serialize(_senddata);
        }

        #region game process
    
        /// <summary>
        /// 返回游戏列表，只有当前玩家需要处理
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetLevelList(tUser _user, int gameid)
        {
            sc_getgamelevel _senddata = new sc_getgamelevel() { result = 1, levellist = new List<RoomInfoSD>() };
            _senddata.levellist = await FactoryBaseHelper.GetGameLevelList(gameid);
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 进入房间 返回现在等待用户数  
        /// </summary>                          
        /// <returns></returns>
        public async Task<string> EnterRoom(tUser _user, cs_enterroom _data)
        {
            if (_data.levelid == 0)
            {
                TraceLogEx.Error("cs_enterroom _data.levelid == 0...");
                return "";
            }
            VIPHelper.DropExp(_user.UserID);
            return await FactoryBaseHelper.EnterRoom(_data.gameid, _user, _data);
        }
         
 

        /// <summary>
        /// 进入房间 返回现在等待用户数 
        /// </summary>                          
        /// <returns></returns>
        public static async void ExitRoomByDisConnect(int userid)
        {
            UserStatus _us = await BaseHelper.TryGetUserStatus(userid);
            tUser _user = await BaseHelper.GetBase<tUser>(userid);
            if (_user == null) return;
            if (_us == null)
            {
                tb_UserEx.WriteUserOnLineTime(_user.UserID, 0, 0, false, false);
                return;
            }
            tb_UserEx.WriteUserOnLineTime(_user.UserID, _us.Gameid, _us.Levelid, false, false);
            if (_us.Status == UserStatusEnum.InTableDaPai || _us.Status == UserStatusEnum.InTableWaiting)
            {
                _us.SetStatus(UserStatusEnum.InTableDaPaiDis);
            }
            else if (_us.Status == UserStatusEnum.InRoom)
            {
                _us.SetStatus(UserStatusEnum.InLobby);
            }

            if (_us.Gameid > 0 && FactoryCommon.GetLobby(_us.Gameid) != null)
            {
                var domainhost = ConfigUtils.GetSetting("RegDomain", "localhost") + "H5Game/LoginOut?Account=" + userid + "&GId=" + _us.Gameid;
                try
                {
                    await HttpUtils.GetAsync(domainhost, "", null, string.Empty, null);
                }
                catch (Exception e)
                {
                    TraceLogEx.Error(e.Message);
                }
                return;
            }
            if (_us.Levelid == 0 && _us.Status != UserStatusEnum.InLobby)
            {
                _us.SetStatus(UserStatusEnum.InLobby);
                TraceLogEx.Log("201909201544 _us.RoomID is 0. maybe error!!!");
                return;
            }

            if (_us.Gameid > 0)
            { 
                await BaseHelper.AddorUpdateUserStatus(_us);
            }
        }

        /// <summary>
        /// 进入房间 返回现在等待用户数 
        /// </summary>                          
        /// <returns></returns>
        public async static Task<string> ApplyExitTable(tUser _user, int gameid, int tableid )
        { 
            string reslut = await Game.Scene.GetComponent<LobbyProxyComponent>().GetLobby2Game_ExitTableAsync(gameid, _user.UserID, tableid );
            if (reslut == "0" || reslut == "1")
            { 
                TraceLogEx.Error(reslut +" exit fail 202105252159.");
            } 
            return reslut;
        }


        #endregion
         
        /// <summary>
        /// 给请求方发送服务器公告
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetNotice(tUser user, int type, string content)
        {
            sc_getnotice _senddata = new sc_getnotice() { result = 1, cc = 0, noticelist = new List<noticemsg>() };

            List<tnotice> _notice = await tNoticeEx.GetAllNotice(type);
            if (_notice != null && _notice.Count > 0)
            {
                foreach (var v in _notice)
                {
                    noticemsg msg = new noticemsg();
                    //弹窗公告
                    if (type == 4)
                    {
                        var url = ConfigUtils.GetSetting("RegDomain", "localhost");
                        string picurl = string.IsNullOrEmpty(v.TcPicUrl) ? "" : url + v.TcPicUrl;
                        msg.PicUrl = picurl;
                        msg.Width = v.Width;
                        msg.Height = v.Height;
                    }
                    msg.content = v.content;
                    msg.starttime = v.starttime;
                    msg.endtime = v.endtime;
                    msg.title = v.title;
                    msg.interval = v.interval;
                    msg.marqueeType = v.marqueeType;
                    _senddata.noticelist.Add(msg);
                }
                _senddata._t = type;
                _senddata.gameid = 0;
            }

            return JsonUtils.Serialize(_senddata);
        } 

        public async Task<string> GetNoticelist(tUser user, int type, int count)
        {
            count = 10;
            sc_getnoticelist _senddata = new sc_getnoticelist() { result = 1, noticelist = new List<notice>() };
            List<tnotice> _notice = (await BaseHelper.GetShareAll<tnotice>(w => w.isStart == 1 && w.type == type.ToString())).OrderByDescending(t => t.noticetime).Take(count).ToList(); ;
            if (_notice != null && _notice.Count > 0)
            {
                foreach (var item in _notice)
                {
                    _senddata.noticelist.Add(new notice()
                    {
                        contet = item.content,
                        time = item.noticetime.ToString("MM:dd HH:mm:ss"),
                        titel = item.title
                    });

                }
            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        public static void updategold(tUser _user, int freshType)
        {
            if (_user == null) return;
            sc_freshgold_n _ready = new sc_freshgold_n() { result = 1 };
            _ready.freshType = freshType;
            if (freshType == 1) _ready.gold = (int)_user.diamond;
            if (freshType == 2) _ready.gold = (int)_user.GetGoldAndWinGold;
            if (freshType == 3) _ready.gold = _user.clublist == null ? 0 : _user.clublist[0];


            List<UserIDMSG> imList = new List<UserIDMSG>();
            UserIDMSG _msg = new UserIDMSG(_user.UserID, _ready, false, false);
            imList.Add(_msg);
            //玩家抽奖中非金币后，需要刷新玩家金币
            if (freshType == 1)
            {
                sc_freshgold_n _readyRep = new sc_freshgold_n() { result = 1 };
                _readyRep.freshType = 2;
                _readyRep.gold = (int)_user.GetGoldAndWinGold;
                UserIDMSG _msgRep = new UserIDMSG(_user.UserID, _readyRep, false, false);
                imList.Add(_msgRep);
            }
            LobbySendDataServer.instance.AutoSendData(imList);
        }

        #region Ip黑名单和访问限制
        /// <summary>
        /// 获取奖池
        /// </summary>
        public static bool VisitLimit(string ipport, sc_visitLimit_n limitback)
        {
            //bool result = true;
            return true;
            ////try
            ////{
            ////    ipport = ipport.Split(':')[0];
            ////    DateTime curdate = DateTime.Now.Date;
            ////    TimeSpan mis = DateTime.Now - DateTime.Now.Date;
            ////    int unit = (int)mis.TotalMinutes;
            ////    int date = int.Parse(DateTime.Now.ToString("yyyyMMdd"));
            ////    var cache = new ShareCacheStruct<tVisitLimit>();
            ////    tVisitLimit limit = cache.Find(p => p.ipport == ipport);
            ////    if (limit == null)
            ////    {
            ////        ////初始化个人奖池
            ////        limit = new tVisitLimit();
            ////        limit.ipport = ipport;
            ////        limit.dateRecord = new Dictionary<int, int>();
            ////        limit.unitRcord = new Dictionary<int, int>();
            ////        limit.dateMaxLimit = 1000;
            ////        limit.unitMaxLimit = 20;
            ////        cache.AddOrUpdate(limit);
            ////    }
            ////    if (limit.unitRcord == null)
            ////    {
            ////        limit.unitRcord = new Dictionary<int, int>();
            ////    }
            ////    if (limit.dateRecord == null)
            ////    {
            ////        limit.dateRecord = new Dictionary<int, int>();
            ////    }

            ////    if (!limit.unitRcord.ContainsKey(unit))
            ////    {
            ////        limit.unitRcord.Add(unit, 0);
            ////    }

            ////    if (!limit.dateRecord.ContainsKey(date))
            ////    {
            ////        limit.dateRecord.Add(date, 0);
            ////    }

            ////    limit.unitRcord[unit]++;
            ////    limit.dateRecord[date]++;
            ////    cache.AddOrUpdate(limit);

            ////    if (limit.unitRcord[unit] >= limit.unitMaxLimit)
            ////    {
            ////        limitback.result = -1;
            ////        //limitback.msg = "访问过于频繁，请稍后重试";
            ////        result = false;
            ////    }
            ////    else if (limit.dateRecord[date] >= limit.dateMaxLimit)
            ////    {
            ////        limitback.result = -2;
            ////        //limitback.msg = "访问超过次数限制";
            ////        result = false;
            ////    }
            ////}
            ////catch (Exception ex)
            ////{
            ////    TraceLogEx.Error(ex, "20170912..........Jackpot get error!");
            ////}

            ////return result;
        }
        #endregion

        /// <summary>
        /// 获取活动信息
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetActivity()
        {
            sc_tactivity tactivity = new sc_tactivity() { result = 0 };
            var tactivitydata = await tactivityEx.GetTactivitys();
            if (tactivitydata.Any())
            {
                tactivity.data = tactivitydata.OrderByDescending(w => w.CreateDate).
                    Select(w => new tactivitySD
                    {
                        content = w.Content,
                        imgurl = w.ImgUrl,
                        title = w.Title
                    }).ToList();
                tactivity.result = 1;
            }
            return JsonUtils.Serialize(tactivity);
        }


        public string SwitchHandRack(cs_switchhandrack json)
        {
            if (json.is_open.Equals(1)) RankHelper.OpenActive = true;
            if (json.is_open.Equals(0)) RankHelper.OpenActive = false; ;
            sc_base rdata = new sc_base();
            rdata.fn = "sc_switchhandrack";

            return JsonUtils.Serialize(rdata);
        }


        public async Task<string> PersonallnfoEdit(cs_personalinfo cpl)
        {
            sc_personalinfo spl = new sc_personalinfo() { result = 0 };

            tUser user = await tb_UserEx.GetFromCachebyUserID(cpl.UserId);
            tuserInfoEx tuserex = await tb_userinfoEx.GetFromCachebyUserID(cpl.UserId);
            if (user != null && tuserex != null)
            {
                bool changehead = false;
               
                if (!string.IsNullOrEmpty(cpl.nikename))
                {
                    var exis = await BaseHelper.GetBase<tUser>(t => t.wechatName == cpl.nikename);
                    if (exis != null)
                    {
                        spl.result = -5;
                        return JsonUtils.Serialize(spl);
                    }
                    else if (tuserex.freeCount > 0)
                    {
                        user.wechatName = cpl.nikename;
                        tuserex.freeCount--;
                        spl.result = 1;
                        BaseHelper.ChangeUserGameDate(user.UserID, 0, "ChangeNameCount");
                    }
                    else
                    {
                        if (user.GetGoldAndWinGold < 10000)
                        {
                            spl.result = -1;
                            return JsonUtils.Serialize(spl);
                        }
                        else
                        {
                            user.GoldReduce( 10000);
                            user.wechatName = cpl.nikename;
                            BaseHelper.AddOrUpdateBase(user);
                            spl.result = 1;
                            BaseHelper.ChangeUserGameDate(user.UserID, 0, "ChangeNameCount");
                            tgoldchangelog model = new tgoldchangelog();
                            model.UserId = user.UserID;
                            model.gamble = 0;
                            model.Gold = 10000;
                            model.BeforeGold = user.GetGoldAndWinGold + 10000;
                            model.GameId = TexasLobby.instance._gameid;
                            model.AfterGold = user.GetGoldAndWinGold;
                            model.IsRobot = false;
                            model.ChangeType = 17;//表示
                            model.tnum = 0;
                            model.Remark = "";
                            model.CreateTime = DateTime.Now;
                            BaseHelper.AddAsync<tgoldchangelog>(model);
                        }
                    }
                }

                if (!string.IsNullOrEmpty(cpl.HeadIcon))
                {
                    if (!cpl.HeadIcon.Equals(user.wechatHeadIcon))
                    {
                        BaseHelper.ChangeUserGameDate(user.UserID, 0, "ChangeAvatarCount");
                        changehead = true; user.wechatHeadIcon = cpl.HeadIcon;
                        spl.wechatHeadIcon = ToolsEx.IsHandlePhoto(user.isRobot, user.wechatHeadIcon);
                    }
                    else
                    {
                        spl.result = 1;
                        spl.message = "修改成功";
                    }
                }
                bool changsex = user.Sex != cpl.sex;
                user.Sex = cpl.sex;
                bool changeDesc = false;

                if (!string.IsNullOrEmpty(cpl.desc))
                {
                    user.Desc = cpl.desc;
                    changeDesc = true;
                }

                bool changeheadframe = false;
                if (!string.IsNullOrEmpty(cpl.HeadFrame))
                {
                    if (!cpl.HeadFrame.Equals(tuserex.HeadFrame))
                    {
                        if (tuserex.HeadIcos != null && tuserex.HeadIcos.Select(t=>t.Contains(cpl.HeadFrame)).Count()>0)
                        {
                            BaseHelper.ChangeUserGameDate(user.UserID, 0, "ChangeAvatarFrameCount");
                            changeheadframe = true;
                            tuserex.HeadFrame = cpl.HeadFrame;
                            spl.result = 1;
                        }
                        else
                        {
                            spl.result = -2;
                            spl.message = "没找到相应头像框";
                        }

                    }
                    else
                    {
                        spl.result = 1;
                        spl.message = "修改成功";
                    }
                }
                if (spl.result == 1 || changsex || changehead || changeDesc)
                {
                    await BaseHelper.AddOrUpdateBase(user);
                    if (spl.result == 1) await BaseHelper.AddOrUpdateBase(tuserex);
                    await GoldTradeHelper.GetCurrentPlayerInfoSD(user);
                    spl.result = 1;
                    spl.lUserScore = user.GetGoldAndWinGold;
                }
            }
            else spl.result = 0;

            return JsonUtils.Serialize(spl);
        }

        public async Task<string> ResetprotectPwd(tUser _user, cs_resetprotectPwd _data)
        {
            sc_resetprotectPwd senddata = new sc_resetprotectPwd() { result = 1 };
            tuserInfoEx info = await tb_userinfoEx.GetFromCachebyUserID(_user.UserID);
            if (info != null)
            {
                if (RankHelper.Getverifycode(_data.code))
                {
                    byte[] b64 = Encoding.Default.GetBytes(_data.newpwd);
                    info.clubpwd = Convert.ToBase64String(b64);
                    RankHelper.Useverifycode(_data.code);
                    senddata.result = 1;
                }
                else senddata.result = -1;
            }
            return JsonUtils.Serialize(senddata);
        }
    }
}
