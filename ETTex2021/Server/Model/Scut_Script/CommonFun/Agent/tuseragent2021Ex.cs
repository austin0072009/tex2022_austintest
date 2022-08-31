using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{

    public class tuseragent2021Ex
    {
        public static async void AddUserAgent2021(int userid, int fuserid, int cid, string activecode)
        {
            int tuserid = 0;
            //如果是总代理第一次登录，他的TopUserID就是他自己的UserID
            var fUserAgent = await GetAgentFromCachebyUserID(fuserid, cid);//父级邀请人 
            if (fUserAgent != null)
            {
                tuserid = fUserAgent.TopUserID;//CEO需要设置自己的topuserid等于自己 会出现自己打的流水给自己加 
            }
            AddOrUpdate(userid, cid, fuserid, tuserid, activecode);
        }

        /// <summary>
        /// 绑定代理关系
        /// </summary>
        /// <param name="auserid"></param>
        /// <param name="fuserid"></param>
        public static async void AddOrUpdate(int userid, int cid, int fuserid, int tuserid, string active)
        {
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            await session.Call(new RedisDB_AgentRequest { Message = JsonUtils.Serialize(new cs_agent_add(userid, cid, active, GMService.secret)) });
            //await BaseHelper.Add(userid, fuserid, cid, 8000, active);
        }

        public static async Task<tuseragent2021> GetAgentFromCachebyUserID(int UserID, int cid)
        {
            tuseragent2021 _tempuser = await AgentRelationHelper.GetAgent(UserID, cid);

            return _tempuser;
        }
        /// <summary>
        /// 每日清除今日贡献
        /// </summary>
        public static async void ClearTodayIncome()
        {
            //try
            //{
            //    var Idlist =await BaseHelper.GetAgentAllKey(); 
            //    Idlist.ForEach(async st =>
            //    {
            //        tuseragent2021 tag =await BaseHelper.GetBase<tuseragent2021>(st);
            //        if (tag.ChildAgents!=null)
            //        {
            //            var data = tag.ChildAgents.Select(s => new AgentList()
            //            {
            //                CreatTime = s.CreatTime,
            //                UserID = s.UserID,
            //                income = s.income,
            //                tIncome = 0,
            //                lv = s.lv,
            //                rate = s.rate,
            //                water = s.water
            //            }).ToList();
            //            tag.ChildAgents = new CacheList<AgentList>();
            //            tag.ChildAgents.AddRange(data);
            //            tag.todayCardCount = 0;//清理手数
            //            AddOrUpdate(tag);
            //        }
            //    });
            //    TraceLogEx.Log("清理了" + Idlist.Count + "个玩家的当日手数 与当日贡献！");
            //}
            //catch (Exception ex)
            //{
            //    TraceLogEx.Error(ex, "202003251738 ");
            //}
        }


        /// <summary>
        /// 直接将userid设置为fuserid的下级
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="fuserid"></param>
        public static async Task<string> SetUserAgent2021(int userid, int cid, int fuserid)
        {
            var agent = await GetAgentFromCachebyUserID(userid, cid);//父级邀请人 
            if (agent == null)
            {
                return "找不到玩家：" + userid.ToString();
            }
            ////if (agent.ChildAgents == null || agent.ChildAgents.Count > 0)
            ////{
            ////    return "玩家已经有下级玩家级！";
            ////}
            ////var fUser = await BaseHelper.GetBase<tUser>(fuserid);
            ////if (fUser.vlevel <= 0) return "父级玩家不是代理";

            ////int tuserid = 0;
            ////int seconduserid = 0;
            //////如果是总代理第一次登录，他的TopUserID就是他自己的UserID
            ////var fUserAgent = await GetFromCachebyUserID(fuserid);//父级邀请人 

            ////if (fUserAgent != null)
            ////{
            ////    tuserid = fUserAgent.TopUserID;//初始代理需要设置自己的topuserid等于自己 会出现自己打的流水给自己加 
            ////}
            ////if (fUserAgent.ChildAgents == null || fUserAgent.ChildAgents.Count == 0) fUserAgent.ChildAgents = new CacheList<AgentList2021>();


            ////agent.FUserID = fuserid;
            ////if (tuserid != 0) agent.TopUserID = tuserid;
            ////if (fuserid != 0) agent.FUserID = fuserid; 
            ////RemoveFAgent3(userid);//移除上级的关系
            ////fUserAgent.ChildAgents.Add(new AgentList2021()
            ////{
            ////    UserID = userid,
            ////    CreatTime = DateTime.Now,
            ////    income = 0,
            ////    lv = 1,
            ////    rate = 0,
            ////    tIncome = 0,
            ////    water = 0
            ////});
            return "1";
        }
        /// <summary>
        /// 在一个玩家身上移除子级
        /// </summary>
        /// <param name="user"></param>
        /// <param name="childUser"></param>
        public static async void RemoveUserChlid(int user, int parentid, int cid, int childUser)
        {
            await AgentRelationHelper.Delete(user, parentid, cid);
        }

        public static void AddOrUpdate(tuseragent2021 _tempur)
        {
            BaseHelper.AddOrUpdateBase<tuseragent2021>(_tempur);
        }

        /// <summary>
        /// 移除一个下级
        /// </summary>
        /// <param name="agent"></param>
        /// <param name="childuserid"></param>
        public static async void RemoveChildAgent(tuseragent2021 agent, int childuserid)
        {
            ////if (agent == null || agent.ChildAgents == null) return;

            ////agent.ChildAgents.RemoveAll(t => t.UserID == childuserid);
            await BaseHelper.AddOrUpdateBase(agent);
        }


        public static async void WriteWaterSelf(int userid, int cid, long gold)
        {
            if (gold == 0) return;
            tuseragent2021 _agent = await GetAgentFromCachebyUserID(userid, cid);
            if (_agent == null)
            {
                TraceLogEx.Error(string.Format(" userid can not find {0} in tuseragent2021", userid));
                return;
            }
            if (gold > 0)
            {
                try
                {
                    checked
                    {
                        _agent.watergoldadd += (ulong)gold; //可能会 算术运算导致溢出 OverflowException
                    }
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, string.Format(" ulong.MaxValue error! watergoldadd:{0}+gold{1} 201811032215 userid:{2}", _agent.watergoldreduce, gold, userid));
                    _agent.watergoldadd = 0;
                }
            }
            else
            {
                try
                {
                    checked
                    {
                        _agent.watergoldreduce += (ulong)(gold * -1);//可能会 算术运算导致溢出 OverflowException
                    }
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, string.Format(" ulong.MaxValue error! watergoldreduce:{0}+gold{1} 201811032216 userid:{2}", _agent.watergoldreduce, gold, userid));
                    _agent.watergoldreduce = 0;
                }
            }
            BaseHelper.AddOrUpdateBase(_agent);
        }

        /// <summary>
        /// 写入游戏总手数
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="win1_lost_0"></param>
        /// <param name="dealcard"></param>
        /// <param name="baseRate"></param>
        /// <param name="_goldInto">最新带入输值</param>
        /// <param name="tablenum"></param>
        /// <param name="isFilling">是否加注</param>
        /// <param name="bet3"></param>
        /// <param name="cbet3"></param>
        /// <param name="drivingnum"></param>
        /// <param name="isbig"></param>
        public static async void WriteGameCount(int userid,int gameid,int levelid, long win1_lost_0, bool dealcard, int baseRate, int clubid, int tablenum,
            int bet3, int cbet3, int drivingnum, bool isbig, long _goldInto, long Historygain,int addpoolnum)
        {
            var agenthand = await tUserGamehandEx.GetUserHandRecord(userid, clubid);

            if (agenthand != null)
            {
                if (dealcard) agenthand.dealCardCount += 1;
                if (tablenum.Equals(0)) agenthand.totalCount += 1;//只加一次
                tUserGamehandEx.WriteHandNum(userid, clubid, gameid, levelid, win1_lost_0);
                if (bet3 > 0 || cbet3 > 0) agenthand.FillingCount += 1;
                if (isbig) agenthand.Bigblind++;
                if (bet3 > 0) agenthand.bet3++;
                if (cbet3 > 0) agenthand.cbet3++;
                if (drivingnum > 0) agenthand.drivingnum++;//主动入池率
                if (addpoolnum > 0) agenthand.addpoolnum++;//加注入池率
                GameHandCount handCount = await tUserGamehandEx.GetGameHandCount(userid, clubid, gameid, levelid);
                var tcount = handCount.count - 1;
                agenthand.Aveinto = (agenthand.Aveinto * tcount + _goldInto) / (tcount + 1);
                agenthand.AveGains += win1_lost_0;


                //if (baseRate >= 10 && baseRate <= 50) agenthand.pos1Count += 1 * 1.5m;
                //if (baseRate >= 100 && baseRate <= 500) agenthand.pos2Count += 1 * 2m;
                //if (baseRate >= 1000 && baseRate <= 5000) agenthand.pos5Count += 1 * 2.5m;
                //if (baseRate >= 10000 && baseRate <= 50000) agenthand.pos10Count += 1 * 3m;


                agenthand.lastdealtime = DateTime.Now;
                await BaseHelper.AddOrUpdate(agenthand);
            }
            
        }

        /// <summary>
        /// 获取机器人ID
        /// </summary>
        /// <returns></returns>
        public static List<int> GetUserIdList()
        {
            List<int> list = new List<int>();
            var command = ConfigManger.Provider.CreateCommandStruct("tuseragent2021", CommandMode.Inquiry);
            command.Columns = "UserID";
            command.Filter = ConfigManger.Provider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0}",
                command.Filter.FormatExpression("UserID", "<")
                );
            command.Filter.AddParam("UserID", 2000000);
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    list.Add(reader["UserID"].ToInt());
                }
                reader.Dispose();
            }
            return list.OrderBy(w => w).ToList();
        }
        public static async Task<List<tuseragent2021>> GetAllUnRobotUser()
        {
            List<tuseragent2021> _userList = new List<tuseragent2021>();
            var robotIdList = GetUserIdList();
            if (robotIdList.Any())
            {
                foreach (var t in robotIdList)
                {
                    var user = await BaseHelper.GetBase<tuseragent2021>(t);
                    if (user != null) _userList.Add(user);
                }
            }
            if (_userList == null || _userList.Count == 0)
            {
                TraceLogEx.Error(" tuseragent2021 中没有人，201811061905");
            }
            return _userList;
        }

        public static async void DealPerDay()
        {
            List<tuseragent2021> _userList = await GetAllUnRobotUser();
            foreach (var agent in _userList)
            {
                ////if (agent.ChildAgents == null) continue;
                ////foreach (var cagent in agent.ChildAgents)
                ////{
                ////    tuseragent2021 _useragent = _userList.Find(t => t.UserID == cagent.UserID);
                ////    if (_useragent != null)
                ////    {
                ////        cagent.water += _useragent.watergoldadd + _useragent.watergoldreduce;
                ////    }
                ////    else TraceLogEx.Error("logic error... tuseragent2021 can not find cagent.UserID：" + cagent.UserID);
                ////}
                ////agent.lastdealtime = DateTime.Now;
            }

            //统一清理临时数据
            foreach (var agent in _userList)
            {
                if (agent.FUserID == 0) continue;
                ////if (agent.ChildAgents == null) continue;
                ////agent.watergoldadd = 0;
                ////agent.watergoldreduce = 0;
                ////agent.GoldCommission += (ulong)await GetAllCommision(agent);
                ////BaseHelper.AddOrUpdateBase<tuseragent2021>(agent);
            }
        }

        public static int GetRateByLevel(ulong gold)
        {
            gold /= 100;
            if (gold < 6 * 10000) return 50;
            else if (gold < 11 * 10000) return 60;
            else if (gold < 31 * 10000) return 70;
            else if (gold < 61 * 10000) return 80;
            else if (gold < 101 * 10000) return 100;
            else if (gold < 201 * 10000) return 120;
            else if (gold < 401 * 10000) return 140;
            else if (gold < 601 * 10000) return 160;
            else if (gold < 801 * 10000) return 180;
            else if (gold < 1001 * 10000) return 200;
            else return 220;
        }
        /// <summary>
        /// 差额业绩 直属一级是单独算的
        /// </summary>
        /// <param name="gold"></param>
        /// <returns></returns>
        public static int GetRateByGold_lv(ulong gold, ulong totalgold, int lv)
        {
            int _baserate = GetRateByLevel(totalgold);
            if (lv == 1)
            {
                return _baserate;
            }
            int _lvrate = GetRateByLevel(gold);
            int _realrate = _baserate - _lvrate;
            if (_realrate < 0)
            {
                TraceLogEx.Error("fetal error! 201811091454");
                return 100;
            }
            return _realrate;
        }

        /// <summary>
        /// 自己的流水不给自己加业绩
        /// </summary>
        /// <param name="_agent"></param>
        /// <returns></returns>
        public static async Task<int> GetAllCommision(tuseragent2021 _agent)
        {
            int getgold = 0;
            ////if (_agent.ChildAgents != null)
            ////{
            ////    ulong _totalwater = 0;
            ////    foreach (var agentl in _agent.ChildAgents)
            ////    {
            ////        if (agentl.lv == 1)
            ////        {
            ////            _totalwater += await GetChildWater(agentl.UserID);
            ////        }
            ////    }
            ////    foreach (var agentl in _agent.ChildAgents)
            ////    {
            ////        if (agentl.lv == 1)
            ////        {   //直属 下一级
            ////            tuseragent2021 _agent_1 = await GetFromCachebyUserID(agentl.UserID);
            ////            if (_agent_1 == null) continue;
            ////            float _temprate = GetRateByGold_lv(0, _agent_1.watergoldadd + _agent_1.watergoldreduce, 1) / 10000.0f;
            ////            getgold += Convert.ToInt32((_agent_1.watergoldadd + _agent_1.watergoldreduce) * _temprate);

            ////            //代理 下N级不包括下一级 
            ////            ulong allwater = await GetChildWater(agentl.UserID);
            ////            float _temprate2 = GetRateByGold_lv(allwater, _totalwater, 9) / 10000.0f;
            ////            getgold += Convert.ToInt32(allwater * _temprate2);
            ////        }
            ////    }
            ////}
            return getgold;
        }

        public static void ClearChildWater(tuseragent2021 _agent)
        {
            ////if (_agent.ChildAgents != null)
            ////{
            ////    foreach (var _ca in _agent.ChildAgents)
            ////    {
            ////        _ca.water = 0;
            ////    }
            ////}
            BaseHelper.AddOrUpdateBase(_agent);
        }


        /// <summary>
        /// 更新反馈信息到数据库  后面处理成不用Redis
        /// </summary>
        public static async Task<double> DealAgentGold4Lv(int fromuserid, int cid, int gameid, int goldtoshare, string _tnum, bool _ismj = false)
        {
            double alldealgold = 0;
            if (goldtoshare == 0) return alldealgold;
            if (goldtoshare < 0) goldtoshare *= -1;

            tuseragent2021 agentinfo = await GetAgentFromCachebyUserID(fromuserid, cid);
            if (agentinfo == null || agentinfo.FUserID == 0) return alldealgold;
            int watergold = goldtoshare;//输赢流水都要分 传的时候已经处理了


            #region p1 
            if (agentinfo.FUserID == agentinfo.UserID) return alldealgold;

            tuseragent2021 _p1 = await GetAgentFromCachebyUserID(agentinfo.FUserID, cid);//父1级代理 
            if (_p1 == null) return alldealgold;
            double p1Tax = p1Tax = watergold * t_anythingList.GetDouble("tax_p1") / 100;
            AddAgent2021Gold(_p1, p1Tax, fromuserid, gameid, 1, _tnum, false);
            alldealgold += p1Tax;
            #endregion

            #region p2
            int agentid = _p1.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2021 _p2 = await GetAgentFromCachebyUserID(agentid, cid);//父2级代理 
            if (_p2 == null) return alldealgold;
            double p2Tax = watergold * t_anythingList.GetDouble("tax_p2") / 100;
            AddAgent2021Gold(_p2, p2Tax, fromuserid, gameid, 2, _tnum, false);
            alldealgold += p2Tax;
            #endregion

            #region p3
            agentid = _p2.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2021 _p3 = await GetAgentFromCachebyUserID(agentid, cid);//父3级代理 
            if (_p3 == null) return alldealgold;
            double p3Tax = watergold * t_anythingList.GetDouble("tax_p3") / 100;
            AddAgent2021Gold(_p3, p3Tax, fromuserid, gameid, 3, _tnum, false);
            alldealgold += p3Tax;
            #endregion
            tagentgoldlog _recordAllFater = new tagentgoldlog()
            {
                ActionCoin = watergold - alldealgold,
                UserId = int.MaxValue,
                ActionType = ResActionType.jackpotReturnGold,
                CreateDate = DateTime.Now,
                SourceGameID = gameid,
                SourceUserId = fromuserid,
                _lv = int.MaxValue,
                tnum = _tnum,
            };
            BaseHelper.AddAsync<tagentgoldlog>(_recordAllFater);
            return alldealgold;
        }


        private static void AddAgent2021Gold(tuseragent2021 _a, double aGold, int fromuserid, int gameid, int lv, string _tnum, bool addpot = false)
        {
            if (_a == null) return;
            _a.GoldCommission += aGold;
            ////if (_a.ChildAgents != null)
            ////{
            ////    foreach (var dr in _a.ChildAgents)
            ////    {
            ////        if (dr.UserID == fromuserid)
            ////        {
            ////            dr.income += aGold;
            ////            dr.tIncome += aGold;
            ////            break;
            ////        }
            ////    }
            ////}
            if (aGold > 0)
            {
                tagentgoldlog _recordP1 = new tagentgoldlog()
                {
                    ActionCoin = aGold,
                    UserId = _a.UserID,
                    ActionType = addpot ? ResActionType.jackpotReturnGold : ResActionType.redReturnGold,
                    CreateDate = DateTime.Now,
                    SourceGameID = gameid,
                    SourceUserId = fromuserid,
                    _lv = lv,
                    tnum = _tnum,
                };
                BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
            }
        }


        private static int GetAgentRate(tuseragent2021 _topagent, int seconduserid)
        {
            ////if (_topagent != null && _topagent.ChildAgents != null)
            ////{   //设置所有下级的副盟主
            ////    foreach (var child in _topagent.ChildAgents)
            ////    {
            ////        if (child.UserID == seconduserid)
            ////        {
            ////            if (child.rate < 0) child.rate = 0;
            ////            if (child.rate > 100) child.rate = 100;
            ////            return child.rate;
            ////        }
            ////    }
            ////}
            return 0;
        }
        /// <summary>
        /// 设置指定帐号为创始人帐号 断开始上面的所有关系 不能有下线
        /// </summary>
        /// <param name="userid"></param>
        public static async Task<string> SetPartenerUser(int userid, int cid, int role)
        {
            var agent2019 = await tuseragent2021Ex.GetAgentFromCachebyUserID(userid, cid);
            var user = await BaseHelper.GetBase<tUser>(userid);
            if (agent2019 == null || user == null)
            {
                return "此帐号异常不能设置为创始人帐号";
            }
            ////if (agent2019.ChildAgents == null || agent2019.ChildAgents.Count == 0)
            ////{
            ////    //1.创始人:断开上级所有关系 即从上级清空所有用户 
            ////    if (role == 10) tuseragent2021Ex.RemoveFAgent3(userid);
            ////    //user.vlevel = 3;
            ////    //tb_UserEx.UpdateData(user);

            ////    agent2019.FUserID = 0;
            ////    agent2019.Lv = role;
            ////    tuseragent2021Ex.AddOrUpdate(agent2019); 
            ////}
            ////else
            ////{
            ////    return "此帐号 有下级玩家 不能设置为创始人帐号。";
            ////}
            return "1";
        }

        /// <summary>
        /// 流水统计 0：不参与返利计算  1:参与返利计算
        /// </summary>
        /// <param name="lScore"></param>
        /// <param name="IsRebate"></param>
        public static async void WriteGoldChangeStatistics(tUser user,int _gameid, long lScore, int IsRebate = 0)
        {
            if (lScore == 0) return;
            int clubid = 0;
            if (user.clublist != null && user.clublist.Count > 0) clubid = user.clublist[0];
            tuseragent2021 agent = await BaseHelper.GetBase<tuseragent2021>(t => t.UserID == user.UserID);
            if (agent == null) return;
            if (agent._gWater == null || agent._gWater.Count <= 0)
            {
                agent._gWater = new Framework.Cache.Generic.CacheList<GameWater>();
                agent._gWater.Add(new GameWater()
                {
                    gameid = _gameid,
                    totalWater = lScore,
                    currWater = lScore,
                    IsRebate = IsRebate,
                    pCount = 1,
                    UpdateTime = DateTime.Now,
                });
            }
            else
            {
                GameWater water = agent._gWater.Find(g => g.gameid == _gameid && g.IsRebate == IsRebate);
                if (water == null)
                {
                    agent._gWater.Add(new GameWater()
                    {
                        gameid = _gameid,
                        totalWater = lScore,
                        currWater = lScore,
                        IsRebate = IsRebate,
                        pCount = 1,
                        UpdateTime = DateTime.Now,
                    });
                }
                else
                {
                    water.currWater += lScore;
                    water.totalWater += lScore;
                    water.pCount += 1;
                }
            }
            await BaseHelper.AddOrUpdateBase(agent);
        }
    }


}
