using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Framework.Net;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
/// Scut 缓存获取不支持，?类型
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class tuseragent2019Ex
    {
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
            //        tuseragent2019 tag =await BaseHelper.GetBase<tuseragent2019>(st);
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
        public static async Task<string> SetUserAgent2019(int userid, int fuserid)
        {
            //var agent = await GetFromCachebyUserID(userid);//父级邀请人 
            //if (agent == null)
            //{
            //    return "找不到玩家：" + userid.ToString();
            //}
            //if (agent.ChildAgents == null || agent.ChildAgents.Count > 0)
            //{
            //    return "玩家已经有下级玩家级！";
            //}
            //var fUser = await BaseHelper.GetBase<tUser>(fuserid);
            //if (fUser.vlevel <= 0) return "父级玩家不是代理";

            //int tuserid = 0;
            //int seconduserid = 0;
            ////如果是总代理第一次登录，他的TopUserID就是他自己的UserID
            //var fUserAgent = await GetFromCachebyUserID(fuserid);//父级邀请人 

            //if (fUserAgent != null)
            //{
            //    tuserid = fUserAgent.TopUserID;//初始代理需要设置自己的topuserid等于自己 会出现自己打的流水给自己加
            //    seconduserid = fUserAgent.SecondUserID;
            //}
            //if (fUserAgent.ChildAgents == null || fUserAgent.ChildAgents.Count == 0) fUserAgent.ChildAgents = new CacheList<AgentList>();


            //agent.FUserID = fuserid;
            //if (tuserid != 0) agent.TopUserID = tuserid;
            //if (fuserid != 0) agent.FUserID = fuserid;
            //if (seconduserid != 0) agent.SecondUserID = seconduserid;
            //RemoveFAgent3(userid);//移除上级的关系
            //fUserAgent.ChildAgents.Add(new AgentList()
            //{
            //    UserID = userid,
            //    CreatTime = DateTime.Now,
            //    income = 0,
            //    lv = 1,
            //    rate = 0,
            //    tIncome = 0,
            //    water = 0
            //});
            return "1";
        }
        /// <summary>
        /// 在一个玩家身上移除子级
        /// </summary>
        /// <param name="user"></param>
        /// <param name="childUser"></param>
        public static async void RemoveUserChlid(int user, int childUser)
        {
            var agent = await GetFromCachebyUserID(user);
            if (agent == null || agent.ChildAgents == null || agent.ChildAgents.Count == 0) return;
            agent.ChildAgents.RemoveAll(t => t.UserID == childUser);

        }
        /// <summary>
        /// 移除用户在上级的关系
        /// </summary>
        /// <param name="userId"></param>

        public static async void RemoveFAgent3(int userId)
        {
            var agent = await GetFromCachebyUserID(userId);
            if (agent == null || agent.FUserID == 0) return;
            int uid = agent.FUserID;
            for (int i = 0; i < 3; i++)
            {
                var FAgent = await GetFromCachebyUserID(uid);//找到父级移除他ChildAgents  
                if (FAgent != null && FAgent.ChildAgents != null)
                {
                    if (FAgent.FUserID == 0) break;

                    uid = FAgent.FUserID;
                    FAgent.ChildAgents.RemoveAll(t => t.UserID == agent.UserID);
                  await  BaseHelper.AddOrUpdateBase<tuseragent2019>(FAgent);
                }
            }
        }

        public static async void AddUserAgent2019(int userid, int fuserid, string activecode)
        {
            int tuserid = 0;
            //如果是总代理第一次登录，他的TopUserID就是他自己的UserID
            var fUserAgent = await GetFromCachebyUserID(fuserid);//父级邀请人 
            if (fUserAgent != null)
            {
                tuserid = fUserAgent.TopUserID;//CEO需要设置自己的topuserid等于自己 会出现自己打的流水给自己加 
            }
            AddOrUpdate(userid, fuserid, tuserid, 0, activecode);
        }


        /// <summary>
        /// 绑定代理关系
        /// </summary>
        /// <param name="auserid"></param>
        /// <param name="fuserid"></param>
        public static async void AddOrUpdate(int userid, int fuserid, int tuserid, int seconduserid, string active)
        {
            tuseragent2019 _tempur0 = new tuseragent2019()
            {
                UserID = userid,
                ChildAgents = new CacheList<AgentList>(),
                GoldCommission = 0,
                GoldHistoryCommission = 0,
                HtmlUrl = "",
                Lv = 1,
                lastdealtime = DateTime.Now,
                QRPath = "",
                childwater = 0,
                watergoldadd = 0,
                watergoldreduce = 0,
                //dealCardCount = 0
            };

            if (tuserid != 0) _tempur0.TopUserID = tuserid;
            if (fuserid != 0) _tempur0.FUserID = fuserid;
            if (seconduserid != 0) _tempur0.SecondUserID = seconduserid;
            if (active != "") _tempur0.Code = active;

          await  BaseHelper.AddOrUpdateBase<tuseragent2019>(_tempur0);
            int loopfuserid = fuserid;
            int lv = 0;
            if (await IsLastAgent(loopfuserid))
            {
                await AddOnlyChildAgent(loopfuserid, userid);
            }
            else
            {
                //更新其他所有上级的关系
                while (loopfuserid != 0)
                {
                    lv++;
                    loopfuserid = await AddChildAgent(loopfuserid, userid, lv);
                    if (lv == 3) break;//更新到3级为止
                }
            }
        }

        public static void AddOrUpdate(tuseragent2019 _tempur)
        {
            BaseHelper.AddOrUpdateBase<tuseragent2019>(_tempur);
        }

        /// <summary>
        /// 判断 1V 是不是完整的最后一级代理
        /// </summary>
        /// <param name="fuserid"></param>
        /// <returns></returns>
        public static async Task<bool> IsLastAgent(int fuserid)
        {
            tuseragent2019 _tempuser = await BaseHelper.GetBase<tuseragent2019>(fuserid);
            if (_tempuser != null && _tempuser.Lv == 1)
            {
                tuseragent2019 twoagent = await BaseHelper.GetBase<tuseragent2019>(_tempuser.FUserID);
                if (twoagent != null && twoagent.Lv == 2)
                {
                    tuseragent2019 thereagent = await BaseHelper.GetBase<tuseragent2019>(twoagent.FUserID);
                    if (thereagent != null && thereagent.FUserID == 0) return true;
                    return false;

                }
                else return false;
            }
            else return false;
        }
        /// <summary>
        /// 只更新最后一级代理ChildAgent  级数不更新
        /// </summary>
        /// <param name="loopfuserid"></param>
        /// <param name="userid">最后一级代理开发的用户</param>
        /// <returns></returns>
        private static async Task<bool> AddOnlyChildAgent(int loopfuserid, int userid)
        {
            tuseragent2019 _tempf = await GetFromCachebyUserID(loopfuserid);
            if (_tempf != null)
            {
                if (_tempf.ChildAgents == null) _tempf.ChildAgents = new CacheList<AgentList>();
                _tempf.ChildAgents.Add(new AgentList() { lv = 1, UserID = userid, water = 0, income = 0 });
                AddOrUpdate(_tempf);
            }
            return true;
        }

        private static async Task<int> AddChildAgent(int f, int userid, int _lv)
        {
            tuseragent2019 _tempf = await GetFromCachebyUserID(f);
            if (_tempf == null) return 0;
            if (_tempf.ChildAgents == null) _tempf.ChildAgents = new CacheList<AgentList>();
            if (_lv < 1) _lv = 1;

            if (_tempf.ChildAgents.Find(_t => _t.UserID == userid) != null)
            {
                TraceLogEx.Error("202003311532 AddChildAgent add repeat logicerror !!!");
                return 0;
            }
            _tempf.ChildAgents.Add(new AgentList() { lv = _lv, UserID = userid, water = 0, income = 0 });
            AddOrUpdate(_tempf);
            return _tempf.FUserID;
        }

        /// <summary>
        /// 移除一个下级
        /// </summary>
        /// <param name="agent"></param>
        /// <param name="childuserid"></param>
        public static async void RemoveChildAgent(tuseragent2019 agent, int childuserid)
        {
            if (agent == null || agent.ChildAgents == null) return;

            agent.ChildAgents.RemoveAll(t => t.UserID == childuserid);
            await BaseHelper.AddOrUpdateBase<tuseragent2019>(agent);
        }

        public static async Task<tuseragent2019> GetFromCachebyUserID(int UserID)
        {
            if (UserID == 0) return null;
            tuseragent2019 _tempuser = await BaseHelper.GetBase<tuseragent2019>(UserID);
            return _tempuser;
        }


        public static List<int> GetAgentAllKey()
        {
            List<int> list = new List<int>();

            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tuseragent2019", CommandMode.Inquiry);
            command.Columns = "UserID";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(int.Parse(dr["UserID"].ToString()));
                }
            }
            return list;
        }


        public static async Task<ulong> GetChildWater(int userid)
        {
            ulong childwater = 0;
            ////tuseragent2021 _agent = await tuseragent2021Ex.GetFromCachebyUserID(userid);
            ////if (_agent != null && _agent.ChildAgents != null)
            ////{
            ////    foreach (var cagentL2 in _agent.ChildAgents)
            ////    {
            ////        var _agentL2_l = await tuseragent2021Ex.GetFromCachebyUserID(cagentL2.UserID);
            ////        if (_agentL2_l == null) continue;
            ////        childwater += _agentL2_l.watergoldadd + _agentL2_l.watergoldreduce;
            ////    }
            ////}
            return childwater;
        }

        public static async Task<List<AgentList>> GetChildAgents(int userid)
        {
            tuseragent2019 _agent = await GetFromCachebyUserID(userid);
            List<AgentList> alist = new List<AgentList>();
            if (_agent != null && _agent.ChildAgents != null)
            {
                alist.AddRange(_agent.ChildAgents);
            }
            return alist;
        }

        public static async void WriteWaterSelf(int userid, long gold)
        {
            if (gold == 0) return;
            tuseragent2019 _agent = await GetFromCachebyUserID(userid);
            if (_agent == null)
            {
                TraceLogEx.Error(string.Format(" userid can not find {0} in tuseragent2019", userid));
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
        /// 获取机器人ID
        /// </summary>
        /// <returns></returns>
        public static List<int> GetUserIdList()
        {
            List<int> list = new List<int>();
            var command = ConfigManger.Provider.CreateCommandStruct("tuseragent2019", CommandMode.Inquiry);
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
                foreach(var t in robotIdList)                
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
                ////    else TraceLogEx.Error("logic error... tuseragent2019 can not find cagent.UserID：" + cagent.UserID);
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
                ////agent.GoldCommission += (ulong)await tuseragent2021Ex.GetAllCommision(agent);
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
        public static async Task<int> GetAllCommision(tuseragent2019 _agent)
        {
            int getgold = 0;
            if (_agent.ChildAgents != null)
            {
                ulong _totalwater = 0;
                foreach (var agentl in _agent.ChildAgents)
                {
                    if (agentl.lv == 1)
                    {
                        _totalwater += await GetChildWater(agentl.UserID);
                    }
                }
                foreach (var agentl in _agent.ChildAgents)
                {
                    if (agentl.lv == 1)
                    {   //直属 下一级
                        tuseragent2019 _agent_1 = await GetFromCachebyUserID(agentl.UserID);
                        if (_agent_1 == null) continue;
                        float _temprate = GetRateByGold_lv(0, _agent_1.watergoldadd + _agent_1.watergoldreduce, 1) / 10000.0f;
                        getgold += Convert.ToInt32((_agent_1.watergoldadd + _agent_1.watergoldreduce) * _temprate);

                        //代理 下N级不包括下一级 
                        ulong allwater = await GetChildWater(agentl.UserID);
                        float _temprate2 = GetRateByGold_lv(allwater, _totalwater, 9) / 10000.0f;
                        getgold += Convert.ToInt32(allwater * _temprate2);
                    }
                }
            }
            return getgold;
        }

        public static void ClearChildWater(tuseragent2019 _agent)
        {
            if (_agent.ChildAgents != null)
            {
                foreach (var _ca in _agent.ChildAgents)
                {
                    _ca.water = 0;
                }
            }
            BaseHelper.AddOrUpdateBase(_agent);
        }


        /// <summary>
        /// 更新反馈信息到数据库  后面处理成不用Redis
        /// </summary>
        public static async Task<double> DealAgentGold4Lv(int fromuserid, int gameid, int goldtoshare, string _tnum, bool _ismj = false)
        {
            double alldealgold = 0;
            if (goldtoshare == 0) return alldealgold;
            if (goldtoshare < 0) goldtoshare *= -1;

            tuseragent2019 agentinfo = await GetFromCachebyUserID(fromuserid);
            if (agentinfo == null || agentinfo.FUserID == 0) return alldealgold;
            int watergold = goldtoshare;//输赢流水都要分 传的时候已经处理了

            #region 盟主【合伙人】 有可能也是父1级代理
            if (agentinfo.TopUserID != 0 && agentinfo.TopUserID != agentinfo.UserID)
            {//盟主自己玩的不能给自己增加收益
                tuseragent2019 _top = await GetFromCachebyUserID(agentinfo.TopUserID);//总代
                if (_top != null)
                {
                   // alldealgold += await tuseragent2020Ex.DealTop3Gold(agentinfo.TopUserID, watergold, gameid, fromuserid, _tnum, _ismj);//盟主
                }
            }
            #endregion

            #region p1 
            if (agentinfo.FUserID == agentinfo.UserID) return alldealgold;

            tuseragent2019 _p1 = await GetFromCachebyUserID(agentinfo.FUserID);//父1级代理 
            if (_p1 == null) return alldealgold;
            double p1Tax = p1Tax = watergold * t_anythingList.GetDouble("tax_p1") / 100;
            AddAgent2019Gold(_p1, p1Tax, fromuserid, gameid, 1, _tnum, false);
            alldealgold += p1Tax;
            #endregion

            #region p2
            int agentid = _p1.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2019 _p2 = await GetFromCachebyUserID(agentid);//父2级代理 
            if (_p2 == null) return alldealgold;
            double p2Tax = watergold * t_anythingList.GetDouble("tax_p2") / 100;
            AddAgent2019Gold(_p2, p2Tax, fromuserid, gameid, 2, _tnum, false);
            alldealgold += p2Tax;
            #endregion

            #region p3
            agentid = _p2.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2019 _p3 = await GetFromCachebyUserID(agentid);//父3级代理 
            if (_p3 == null) return alldealgold;
            double p3Tax = watergold * t_anythingList.GetDouble("tax_p3") / 100;
            AddAgent2019Gold(_p3, p3Tax, fromuserid, gameid, 3, _tnum, false);
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

        /// <summary>
        /// only for texas whirl 20%进行系统奖池 
        /// goldwin 是80%了
        /// </summary>
        public static async Task<double> DealAgentPotGold4Lv(int fromuserid, int gameid, int goldwin, string _tnum)
        {
            double alldealgold = 0;
            if (goldwin <= 0) return alldealgold;
            //1.10%给上三级普通代理 
            //2.30%给 第二级 3级
            //3.60%进系统 
            double watergold = goldwin * t_anythingList.GetDouble("jackpotlv3") / 100;
            tuseragent2019 agentinfo = await GetFromCachebyUserID(fromuserid);
            if (agentinfo == null || agentinfo.FUserID == 0) return alldealgold;

            #region CEO  有可能盟主也是父1级代理
            if (agentinfo.TopUserID != 0 && agentinfo.TopUserID != agentinfo.UserID)
            {//CEO自己玩的不能给自己增加收益
                tuseragent2019 _top = await GetFromCachebyUserID(agentinfo.TopUserID);//总代
                if (_top != null)
                {
                   // alldealgold += await tuseragent2020Ex.DealTop3PotGold(agentinfo.TopUserID, goldwin, gameid, fromuserid, _tnum);
                }
            }
            #endregion
            //配置的10%给上三级 80 对是 6.4 0.96 0.48  10%剩下的进系统 
            #region p1
            if (agentinfo.FUserID == agentinfo.UserID) return alldealgold;

            tuseragent2019 _p1 = await GetFromCachebyUserID(agentinfo.FUserID);//父1级代理 
            if (_p1 == null) return alldealgold;
            double p1Tax = watergold * t_anythingList.GetDouble("tax_p1") / 100;
            AddAgent2019Gold(_p1, p1Tax, fromuserid, gameid, 1, _tnum, true);
            alldealgold += p1Tax;
            #endregion

            #region p2
            int agentid = _p1.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2019 _p2 = await GetFromCachebyUserID(agentid);//父2级代理 
            if (_p2 == null) return alldealgold;
            double p2Tax = watergold * t_anythingList.GetDouble("tax_p2") / 100;
            AddAgent2019Gold(_p2, p2Tax, fromuserid, gameid, 2, _tnum, true);
            alldealgold += p2Tax;
            #endregion

            #region p3
            agentid = _p2.FUserID;
            if (agentid == 0) return alldealgold;
            tuseragent2019 _p3 = await GetFromCachebyUserID(agentid);//父3级代理 
            if (_p3 == null) return alldealgold;
            double p3Tax = watergold * t_anythingList.GetDouble("tax_p3") / 100;
            AddAgent2019Gold(_p3, p3Tax, fromuserid, gameid, 3, _tnum, true);
            alldealgold += p3Tax;
            #endregion 
            return alldealgold;
        }

        private static void AddAgent2019Gold(tuseragent2019 _a, double aGold, int fromuserid, int gameid, int lv, string _tnum, bool addpot = false)
        {
            if (_a == null) return;
            _a.GoldCommission += aGold;
            if (addpot) _a.GoldC_pot += aGold;
            if (_a.ChildAgents != null)
            {
                foreach (AgentList dr in _a.ChildAgents)
                {
                    if (dr.UserID == fromuserid)
                    {
                        dr.income += aGold;
                        dr.tIncome += aGold;
                        break;
                    }
                }
            }
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

        #region 我的代理业绩 


        public static int GetTodayAddUser(int user)
        {
            return tb_UserEx.GetTodayAddUserByFuserid(user);
        }

        public static async Task<string> SetRateOnlyforTopUser(int userid, int seconduserid, int rate)
        {
            sc_setsecondtop setagentinfo = new sc_setsecondtop() { result = 0 };
            var topuser = GetFromCachebyUserID(userid);

            tuseragent2019 _topagent = await GetFromCachebyUserID(userid);//总代
            if (_topagent == null)
            {
                TraceLogEx.Error(" fetal error 201912121916 ");
                return JsonUtils.Serialize(setagentinfo);
            }

            if (_topagent.ChildAgents == null)
            {
                setagentinfo.result = -1;
                return JsonUtils.Serialize(setagentinfo);
            }

            foreach (var child in _topagent.ChildAgents)
            {
                if (child.UserID == seconduserid)
                {
                    setagentinfo.result = 1;
                    setagentinfo.rate = rate;
                    child.rate = rate;
                }
            }
            AddOrUpdate(_topagent);//CEO设置自己下1级的比例

            tuseragent2019 _secondagent = await GetFromCachebyUserID(seconduserid);//总代
            if (_secondagent != null && _secondagent.ChildAgents != null)
            {   //设置所有下级的副盟主
                foreach (var child in _topagent.ChildAgents)
                {
                    tuseragent2019 _childagent = await GetFromCachebyUserID(child.UserID);
                    if (_childagent != null)
                    {
                        _childagent.SecondUserID = seconduserid;
                    }
                    AddOrUpdate(_childagent);
                }
                _secondagent.rate = rate;
                _secondagent.SecondUserID = seconduserid;//赋值后 后新进的玩家才能绑定副盟主
                AddOrUpdate(_secondagent);
            }

            return JsonUtils.Serialize(setagentinfo);
        }
        #endregion 

        private static int GetAgentRate(tuseragent2019 _topagent, int seconduserid)
        {
            if (_topagent != null && _topagent.ChildAgents != null)
            {   //设置所有下级的副盟主
                foreach (var child in _topagent.ChildAgents)
                {
                    if (child.UserID == seconduserid)
                    {
                        if (child.rate < 0) child.rate = 0;
                        if (child.rate > 100) child.rate = 100;
                        return child.rate;
                    }
                }
            }
            return 0;
        }
    }

    
}
