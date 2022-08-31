using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using Model.Scut_Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class AgentHelper : BaseHelper
    {
        #region  clubagent
        public static async Task<bool> DealAgentGoldClub(int fromuserid, int gameid, int goldtoshare, string _tnum, int clubidx)
        {
            if (goldtoshare < 0) return false;
            tclub _club = await ClubHelper.GetFromCachebyID(clubidx);
            if (_club != null)
            {
                _club.gold += goldtoshare;
                _club.totalRax += goldtoshare;
                ClubHelper.UpdateData(_club);
                tclubtaxlog clubtax = new tclubtaxlog();
                tcluballiance alliance = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _club.alliancid);
                if (alliance != null)
                {
                    alliance.inspot -= goldtoshare; //
                    alliance.gold -= goldtoshare;
                    await BaseHelper.AddOrUpdate<tcluballiance>(alliance);
                }
                clubtax.allid = _club.alliancid;
                clubtax.clubid = clubidx;
                clubtax.gameid = TexasLobby.instance._gameid;
                clubtax.gold = goldtoshare;
                clubtax.tnum = _tnum;
                clubtax.totalgold = _club.gold;
                BaseHelper.AddAsync(clubtax);
                tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - goldtoshare, 5, clubidx, goldtoshare, "", fromuserid);
            }
            return true;
        }

        #endregion
         
        /// <summary>
        /// 获取代理信息
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetAgent(tUser _user, int idx)
        {
            sc_getagentinfo agentinfo = new sc_getagentinfo() { result = 0 };
            var agentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _user.UserID && x.cidx == idx);
            var club = await ClubHelper.GetFromCachebyID(idx);
            if (agentRe != null && club!=null)
            {
                agentinfo.clubname = club.Title;
                if (club.alliancid != 0)
                {
                    var cluballian = await GetShare<tcluballiance>(club.alliancid);
                    if (cluballian!=null)   agentinfo.allidname = cluballian.Title;
                }

                agentinfo.FUserID = agentRe.ParentID;
                agentinfo.clubuserid = club.UserId;
                agentinfo.income = agentRe.income;
                agentinfo.GoldC = club.inspot;// agentRe.GoldCommission.ToInt64()      //上周及以前未领取的
                agentinfo.GoldHistoryC = agentRe.GoldHistoryCommission.ToInt64();
                agentinfo.lastdealtime = agentRe.lastdealtime;
                agentinfo.QRPath = "/ForDLC/qrcode.png";
                agentinfo.Code = agentRe.Code;
                agentinfo.rate = agentRe.showrate;
                agentinfo.isagent = agentRe.IsAgent;
                agentinfo.lv = agentRe.lv;
                agentinfo.reward = club.reward;
                List<tuseragent2021relation> alist = new List<tuseragent2021relation>();
                AgentRelationHelper.GetChildAll_local(_user.UserID, idx, alist);

                List<ChildrenAgentListSD> clist = new List<ChildrenAgentListSD>();

                int tactive = 0;
                foreach (var agentl in alist)
                {
                    tUser _tempuser = await BaseHelper.GetBase<tUser>(agentl.UserID);
                    if (_tempuser == null) continue;
                    if (Convert.ToDateTime(_tempuser.LastLotinTime1.Substring(0, _tempuser.LastLotinTime1.Length - 5)) > DateTime.Now.ToGetBeginDateTime()) tactive++;

                    //下属
                    ChildrenAgentListSD _tempca = new ChildrenAgentListSD();

                    _tempca.gold = _tempuser.GetGoldAndWinGold;
                    _tempca.lv = agentl.lv;
                    _tempca.UserID = agentl.UserID;
                    _tempca.name = _tempuser.wechatName.Trim();
                    _tempca.icon = ToolsEx.IsHandlePhoto(_tempuser.isRobot, _tempuser.wechatHeadIcon);
                    _tempca.income = (ulong)agentl.income;

                    _tempca.isagent = agentl.IsAgent;
                    _tempca.tincome = (int)agentl.tIncome;
                    _tempca.regtime = agentl.CreatTime.ToString("MM-dd HH:mm");
                    _tempca.rate = agentl.showrate;

                    _tempca.pcount = await tUserGamehandEx.GetUserTotalHandNum(agentl.UserID, idx);

                    clist.Add(_tempca);
                }
               


                agentinfo.UserId = _user.UserID;
                agentinfo.agentcount = alist.Count;
                agentinfo.agent1count = alist.Where(t=> t.lv == agentRe.lv + 1).Count();
                agentinfo.currAgentCount = alist.Where(t => t.CreatTime  >= DateTime.Now).Count();
                agentinfo.calist = clist;
                agentinfo.tCommision = clist.Sum(t => t.tincome);
                agentinfo.tactive = tactive;
                agentinfo.taddnum = alist.Where(t=>t.CreatTime > DateTime.Now.ToGetBeginDateTime()).Count();
                agentinfo.result = 1;
            }
            return JsonUtils.Serialize(agentinfo);
        }

        /// <summary>
        /// 设置代理
        /// </summary>
        /// <param name="fUserId"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static async Task<string> SetUserLevelByUserId(int fUserId, cs_setagent_gm data)
        {
            sc_setagent_gm resultmange = new sc_setagent_gm { result = 0 };

            int result = AgentRelationHelper.Add_agentlocal(data.userId, fUserId, data.clubid, data.showrate).key;
            resultmange.result = result;
            return JsonUtils.Serialize(resultmange);
        }


        /// <summary>
        /// 推广单任务值
        /// </summary>
        public static int ExtenGold = 50000;
        /// <summary>
        /// 获取推广玩家
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<string> GetExtendUser(tUser user, cs_extendredinfo data)
        {
            
            sc_extendredinfo agentinfo = new sc_extendredinfo() { fn = "sc_extendredinfo" };
            var agentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == user.UserID && x.cidx == data.idx);
            var club = await ClubHelper.GetFromCachebyID(data.idx);
            textenconfig desconfig = await tb_textenconfigEx.GetConfigFromCache();
            agentinfo.calist = new List<ExtendUser>();
            if (agentRe != null && club != null)
            {
                if (agentRe.lv <= 1)
                {
                    agentinfo.result = 1;
                    agentinfo.calist = new List<ExtendUser>();
                }else if (desconfig!=null && desconfig.etime <= DateTime.Now)
                {
                    agentinfo.result = -4;
                    agentinfo.calist = new List<ExtendUser>();
                }
                else
                {
                    List<ExtendUser> clist = new List<ExtendUser>();
                    List<tuseragent2021relation> alist = AgentRelationHelper.GetChildlocal(user.UserID, data.idx);

                    foreach (var item in alist)
                    {
                        tUser _tempuser = await BaseHelper.GetBase<tUser>(item.UserID);
                        if (_tempuser == null) continue;

                        clist.Add(new ExtendUser()
                        {
                            income = item.income,
                            lv = item.lv,
                            name = _tempuser.wechatName,
                            UserID = item.UserID,
                            IsReceive = item.IsReceiveExten
                        });
                    }
                    //被推荐人的情况 //&& agentRe.IsReceiveOwnExten == 0
                    if (agentRe.ParentID != 0)
                    {
                        clist.Add(new ExtendUser()
                        {
                            income = agentRe.income,
                            lv = agentRe.lv,
                            name = user.wechatName,
                            UserID = agentRe.UserID,
                            IsReceive = agentRe.IsReceiveOwnExten
                        });
                    }

                    agentinfo.result = 1;
                    agentinfo.calist = clist.OrderByDescending(t => t.income).ToList();
                }

                agentinfo.receivegold = Convert.ToInt64(agentRe.ExtenGold);
            }
            else agentinfo.result = -1;

            var tv = desconfig.tvalues * 100;
            agentinfo.des = desconfig.des;
            agentinfo.agentTarget = tv;
            agentinfo.gold = tv;
            agentinfo.NoReceiveGold = agentinfo.calist.Count() * tv;
           return JsonUtils.Serialize(agentinfo);
        }  


        /// <summary>
        /// 领取推广金
        /// </summary>
        /// <param name="user"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static async Task<string> ReceiveExtendgold(tUser user, cs_receiveextendgold data)
        {
            sc_receiveextendgold _receive = new sc_receiveextendgold() { fn = "sc_receiveextendgold", result = 0 };
            var agentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == data.userid && x.cidx == data.idx);
            var ownagentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == user.UserID && x.cidx == data.idx);
            textenconfig desconfig = await tb_textenconfigEx.GetConfigFromCache();
            int ExtenGold = desconfig.tvalues * 100;
            if (agentRe != null && user != null && ownagentRe!=null)
            {
               
                if(desconfig != null && desconfig.etime <= DateTime.Now)
                {
                    _receive.result = -4;
                    _receive.message = "活动结束";
                }else if (user.UserID != data.userid &&  agentRe.income < desconfig.tvalues * 100)
                {
                    _receive.result = -3;
                    _receive.message = "反利任务未达标";
                }
                else
                {
                    double clubgold = 0;
                    double allgold = 0;

                    var club = await ClubHelper.GetFromCachebyID(data.idx);
                    if (club!=null && club.alliancid!=0)
                    {
                        clubgold = ExtenGold * (club.cgoldRate / 100d);
                        if (clubgold > 0)
                        {
                            club.inspot -= long.Parse(clubgold.ToString());
                            await BaseHelper.AddOrUpdate<tclub>(club);
                        }

                        tcluballiance alliance = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == club.alliancid);
                        if (alliance!=null)
                        {
                            var rate = (alliance.cgoldRate - club.cgoldRate) / 100d;
                            allgold = ExtenGold * rate;
                            if (allgold > 0)
                            {
                                alliance.inspot -= long.Parse(allgold.ToString());
                                await BaseHelper.AddOrUpdate<tcluballiance>(alliance);
                            }


                            textengoldlog elog = new textengoldlog();
                            elog.ChangeType = 1;
                            elog.UserId = data.userid;
                            elog.Gold = ExtenGold;
                            elog.ClubGold = clubgold.ToInt32();
                            elog.AllidGold = allgold.ToInt32();
                            elog.PlatGold = ExtenGold - Convert.ToInt32(clubgold + allgold);
                            elog.clubid = data.idx;
                            elog.allidid = alliance.idx;
                            BaseHelper.AddAsync(elog);
                        }
                    }
                    ownagentRe.ExtenGold += ExtenGold;
                    if (user.UserID.Equals(data.userid))
                    {
                        ownagentRe.IsReceiveOwnExten = 1;
                        
                    }
                    else
                    {
                        agentRe.IsReceiveExten = 1;
                        await BaseHelper.AddOrUpdateBase(agentRe);
                    }
                    user.Gold += ExtenGold;
                    tb_UserEx.UpdateData(user);
                    CommonLogic.updategold(user, 2);
                    await BaseHelper.AddOrUpdateBase(ownagentRe);

                    _receive.result = 1;
                }
            }
            else _receive.result = -1;
            return JsonUtils.Serialize(_receive);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetCommision(tUser _user, cs_getcommision getcommision)
        {
            sc_getcommision agentinfo = new sc_getcommision() { result = 0 };
            
            var _agent = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _user.UserID && x.cidx == getcommision.clubid);
            if (_agent != null)
            {
                //暂时不用这条件   必须是有5个打满100手的下级 才能提取红利
                //if (_agent.GoldHistoryCommission <= 0)
                //{
                //    int agentCount = 0;
                //    foreach (AgentList dr in _agent.ChildAgents)
                //    {
                //        var totalnum = tUserGamehandEx.GetUserTotalHandNum(dr.UserID, 0);
                //        if (totalnum >= 100)
                //            agentCount++;
                //    }
                //    if (agentCount < 5)
                //    {
                //        agentinfo.result = -1;
                //        return JsonUtils.Serialize(agentinfo);
                //    }
                //}
                long getgold = (long)_agent.GoldCommission;
                if (getgold > 0)
                {
                    _user.Gold += getgold;
                    _agent.GoldHistoryCommission += (ulong)getgold;

                    tgoldchangelog model = new tgoldchangelog();
                    model.UserId = _user.UserID;
                    model.Gold = getgold;
                    model.BeforeGold = _user.GetGoldAndWinGold - getgold;
                    model.GameId = 9999;//佣金来源
                    model.AfterGold = _user.GetGoldAndWinGold;
                    model.IsRobot = false;
                    model.ChangeType = 2;
                    BaseHelper.AddAsync<tgoldchangelog>(model);
                    _agent.GoldCommission = 0;
                    agentinfo.gold = (ulong)_agent.GoldHistoryCommission;
                    BaseHelper.AddOrUpdateBase(_agent);

                    tuseragentlog _recordP1 = new tuseragentlog()
                    {
                        CreatTime = DateTime.Now,
                        Gold = (ulong)getgold,
                        State = 1,
                        Type = 1,
                        UserId = _agent.UserID,
                        clubid = getcommision.clubid
                    };
                    BaseHelper.AddAsync<tuseragentlog>(_recordP1);
                    agentinfo.result = 1;
                }
                else agentinfo.result = -1;
            }
            return JsonUtils.Serialize(agentinfo);
        }
        
        /// <summary>
        /// 获取佣金记录信息
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        public static string GetAgentLog(tUser _user)
        {
            sc_getagentlog _alog = new sc_getagentlog() { result = 0 };
            ////try
            ////{
            ////    var profitlogdata = tuseragent2021Ex.GetAgentlogs(_user.UserID,);
            ////    if (profitlogdata.Any())
            ////    {
            ////        _alog.data = profitlogdata.OrderByDescending(w => w.CreatTime).Select(w => new agentlogSD
            ////        {
            ////            gold = w.Gold,
            ////            createtime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss"),
            ////            state = w.State
            ////        }).ToList();
            ////    }
            ////    else _alog.data = new List<agentlogSD>();
            ////    _alog.result = 1;
            ////}
            ////catch (Exception ex)
            ////{
            ////    _alog.result = 0;
            ////    TraceLogEx.Log("20180118exception" + ex.Message);
            ////}
            return JsonUtils.Serialize(_alog);
        }

    }
}
