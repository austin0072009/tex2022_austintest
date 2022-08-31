using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteBase
    {
        public int id;
        /// <summary> 比赛信息 </summary>
        public tcompete comptedata;
        public int outcount;
        public long LastSendRankTime;
        public Dictionary<int, tPropConfig> props = PropsManager.Ins.props;
        /// <summary> 出局玩家 </summary>
        public List<FailPlayerInfo> outplayers = new List<FailPlayerInfo>();
        /// <summary> 游戏玩家 </summary>
        public Dictionary<int, BasePlayerInfo> players = new Dictionary<int, BasePlayerInfo>();
        /// <summary> 参与过比赛的玩家 </summary>
        public Dictionary<int, BasePlayerInfo> joinrecords = new Dictionary<int, BasePlayerInfo>();
        public Dictionary<string, string> map = new Dictionary<string, string>();
        public Dictionary<int, int> playerscores = new Dictionary<int, int>();
        public Dictionary<int, CompeteTableInfo> tables = new Dictionary<int, CompeteTableInfo>();
        public CompeteModel model;
        public bool signup_start;
        public bool signup_over = false;
        public bool compete_start;
        public bool compete_end;
        public int TotalDelayTime;
        /// <summary> 报名延迟结束时间 </summary>
        public int SignupDelayTime;
        /// <summary> 最大颁奖名次 </summary>
        public int LastRank;
        public Timer timer;
        /// <summary> 房间最小人数 </summary>
        public int TableMinCount { get; set; }
        /// <summary> 房间最大人数 </summary>
        public int TableMaxCount { get; set; }
        /// <summary> 报名结束延迟秒数 </summary>
        public int SignupDelayOverSecond { get; set; }
        /// <summary> 报名结束延迟分钟数 </summary>
        public int SignupDelayOverMinute { get; set; }
        /// <summary> 报名结束延迟次数 </summary>
        public int SignupDelayOverCount { get; set; }
        /// <summary> 牌桌局数 </summary>
        public int TableRoundCount { get; set; }
        /// <summary> 房间初始底注 </summary>
        public int TableBaseScore { get; set; }
        /// <summary> 房间入房分数 </summary>
        public int TableInitScore { get; set; }
        /// <summary> 最大显示排名 </summary>
        public int MaxShowRank { get; set; }
        /// <summary> 每个牌桌晋级人数(0.表示不限制晋级人数) </summary>
        public int TablePromotionCount { get; set; }
        public CompeteBase(int id, CompeteModel model)
        {
            this.model = model;
            PropertyInit();
            timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(TimedTask, state); }, this, 1000, 1000);
        }
        public async void PropertyInit()
        {
            try
            {
                var list = await BaseHelper.GetBaseAll<CompeteProperty>(x => x.CompeteTemplateID == model.ID);
                if (list == null) return;
                foreach (var item in list)
                {
                    map.Add(item.FieldName, item.Value);
                }
                var ps = GetType().GetProperties();
                foreach (var pinfo in ps)
                {
                    if (map.TryGetValue(pinfo.Name, out string value))
                    {
                        pinfo.SetStringValue(this, value);
                    }
                }
                signup_start = model.SignupTime == null ? true : model.SignupTime.CompareNow() <= 0;
                LastRank = GetLastRank();
                SignupDelayTime = SignupDelayOverSecond + SignupDelayOverMinute * 60;
                TotalDelayTime = SignupDelayTime * (SignupDelayOverCount > 0 ? SignupDelayOverCount : 1);
                comptedata = new tcompete { clearinfo = new List<CompeteTableClearInfo>(), prizes = new Dictionary<int, List<PrizeInfo>>(), config = new CompeteConfigInfo { model = model, properties = list } };
                comptedata.id = await BaseHelper.InsertBaseBackID(comptedata);
                id = comptedata.id;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "初始化比赛发生异常");
            }
        }
        /// <summary> 创建比赛玩家信息 </summary>
        public virtual BasePlayerInfo NewPlayerInfo(tUser user, int playerid)
        {
            //PlayerInfo info = Activator.CreateInstance<PlayerInfo>();
            //info.playerid = playerid; info.Score = TableInitScore; info.pic = user.wechatHeadIcon; info.name = user.wechatName;
            //return info;
            return new BasePlayerInfo { playerid = playerid, Score = TableInitScore, pic = user.wechatHeadIcon, name = user.wechatName, IsRobot = user.isRobot == 1 };
        }
        public virtual BasePlayerInfo ResetPlayerInfo(BasePlayerInfo info)
        {
            if (info != null) info.Score = TableInitScore;
            return info;
        }
        public virtual async ETTask<sc_signup> Signup(int userid)
        {
            if (players.ContainsKey(userid)) return new sc_signup { result = -7, message = "你已报名" };
            if (model.MaxCount > 0 && players.Count >= model.MaxCount) return new sc_signup { result = -6, message = "报名人数已满" };
            var user = await BaseHelper.GetBase<tUser>(userid);
            var userinfo = await BaseHelper.GetBase<tuserInfoEx>(userid);
            if (user == null) return new sc_signup { result = -1, message = "用户不存在" };
            if (userinfo == null && model.Free.Exists(x => x.type != 1)) new sc_signup { result = -2, message = "报名费不足" };
            foreach (var free in model.Free)
            {
                if (free.type == 1) { if (user.GetGoldAndWinGold < free.num) return new sc_signup { result = -3, message = "金币不足" }; }
                else if (!BackPackHelper.IsEnough(userinfo, free)) return new sc_signup { result = -4, message = "物品[" + free.type + "]不足" };
            }
            foreach (var free in model.Free) PayFree(user, free);
            var playerinfo = NewPlayerInfo(user, userid);
            players.Add(userid, playerinfo);
            joinrecords[userid] = playerinfo;
            outplayers.RemoveByUserID(userid);
            await BaseHelper.InsertBase(new tcompeterelation { playerid = userid, competeid = id, IsEnable = true });
            return new sc_signup { result = 1, message = "报名比赛[" + id + "]成功" };
        }
        public async void DelRelation(int userid)
        {
            var info = await BaseHelper.GetBase<tcompeterelation>(x => x.playerid == userid && x.competeid == id);
            if (info != null) { info.IsEnable = false; await BaseHelper.AddOrUpdateBase(info); }
        }
        /// <summary> 发送排名 </summary>
        public async void SendRank(List<RankInfo> infos, int userid = 0)
        {
            //var infos = GetRanks();
            //infos.Sort((o1, o2) => { if (o1.score > o2.score) return -1; else return 1; });
            //int rank = 1;
            //int maxshow = 50;
            //for (int i = 0; i < infos.Count; i++) { if (rank > maxshow) infos.RemoveAt(maxshow); else infos[i].rank = rank++; }
            var data = JsonUtils.Serialize(new sc_compete_rank_info { competeid = id, infos = infos });
            //Console.WriteLine("发送排名:" + data);
            //Log.Info("发送排名:" + data);
            if (userid > 0) await ActionFactory.SendMessage(data, userid);
            else SendAllUser(data);
        }
        public async void SendAllUser(string data)
        {
            foreach (var player in players.Values) player.SendMessage(data);
            foreach (var tinfo in tables.Values) tinfo.Send(model.GameID, JsonUtils.Serialize(new cs_send_table_user { msg = data, tableid = tinfo.tableid, type = 2 }));
        }
        public List<RankInfo> GetRanks()
        {
            List<RankInfo> infos = new List<RankInfo>();
            int crank = 1;
            List<BasePlayerInfo> ps = new List<BasePlayerInfo>(players.Values);
            ps.Sort((o1, o2) => { if (o1.Score > o2.Score) return -1; else return 1; });
            foreach (var info in ps) infos.Add(new RankInfo { playerid = info.playerid, name = info.name, pic = info.pic, score = info.Score, rank = crank++, isouted = false });
            outplayers.Sort((o1, o2) => { if (o1.num > o2.num) return -1; else return 1; });
            foreach (var info in outplayers) infos.Add(new RankInfo { playerid = info.playerid, name = info.name, pic = info.pic, score = info.Score, rank = crank++, isouted = true });
            //foreach (var info in joinrecords.Values)
            //{
            //    int score;
            //    if (!playerscores.TryGetValue(info.playerid, out score)) score = info.Score;
            //    infos.Add(new RankInfo { playerid = info.playerid, name = info.name, pic = info.pic, score = score });
            //}
            return infos;
            //foreach (players) { 
            //}
        }
        public async Task<sc_quit> Quit(int userid)
        {
            var user = await BaseHelper.GetBase<tUser>(userid);
            if (compete_start) return new sc_quit { result = -101, message = "比赛已开始无法退赛" };
            if (compete_end) return new sc_quit { result = -101, message = "比赛已结束无法退赛" };
            //var userinfo = await BaseHelper.GetBase<tuserInfoEx>(userid);
            //if (userinfo == null) { userinfo = new tuserInfoEx { UserID = userid }; await BaseHelper.AddOrUpdateBase(userinfo); }
            if (user == null) return new sc_quit { result = -1, message = "用户不存在" };
            foreach (var free in model.Free) ReturnFree(user, free);
            DelRelation(userid);
            return new sc_quit { result = 1, message = "退出比赛[" + id + "]成功" };
        }
        public virtual void SignupOver()
        {
            signup_start = false;
            signup_over = true;
            //CompeteService.Send(new cs_signup_over { competeid = id });
        }
        public virtual string GetCreateTableInfo()
        {
            return null;
        }
        public virtual CompeteInfo ToInfo(int userid)
        {
            return new CompeteInfo { competeid = id, name = model.Name, gameid = model.GameID, type = model.Type, CompeteStart = compete_start, signupcount = players.Count, maxcount = model.MaxCount, mincount = model.MinCount, cansignup = signup_start, free = CommonFun.GetPrizes(model.Free, props), prizes = CommonFun.GetPrizes(model.prizes, props), SignupTime = model.SignupTime != null ? model.SignupTime.GetCurrentTime().ToFormat() : null, StartTime = model.CompeteStart != null ? model.CompeteStart.GetCurrentTime().ToFormat() : null };
        }
        public async void ChangeGoldLog(int userid, long aftergold, long beforegold, int gold, int type, string remark)
        {
            await BaseHelper.AddOrUpdate(new tgoldchangelog
            {
                ChangeType = type,
                Gold = gold,
                AfterGold = aftergold,
                BeforeGold = beforegold,
                UserId = userid,
                CreateTime = DateTime.Now,
                Remark = remark
            });
        }
        long lasttime;
        public async virtual void TimedTask(object state)
        {
            if (lasttime > 0) Console.WriteLine("比赛刷新时间间隔[" + (DateTime.Now.Ticks - lasttime) / (double)10000000 + "]秒," + (compete_end ? "比赛结束" : (compete_start ? "比赛已开始" : "报名最后时间:" + model.CompeteStart.GetCurrentTime().AddSeconds(TotalDelayTime).ToFormat() + ", 当前时间:" + DateTime.Now.ToFormat())));
            lasttime = DateTime.Now.Ticks;
            if (!signup_over && !signup_start && model.SignupTime != null && model.SignupTime.CompareNow() <= 0)
            {
                signup_start = true;
            }
            if (signup_start && !signup_over && model.SignupEnd != null && model.SignupEnd.CompareNow() <= 0)
            {
                SignupOver();
            }
            if (!compete_start && !compete_end && model.CompeteStart != null && model.CompeteStart.CompareNow() <= 0 && CheckSignupOver())
            {
                if (CheckStart()) CompeteStart();
                else
                {
                    Console.WriteLine("比赛[" + id + "]开赛时间已到,因报名人数不足,比赛取消");
                    foreach (var item in players.Values)
                    {
                        var data = await Quit(item.playerid);
                        data.message = "比赛[" + id + "]开赛时间已到,因报名人数不足,比赛取消，返还报名费";
                        await ActionFactory.SendMessage(JsonUtils.Serialize(data), item.playerid);
                    }
                    CompeteEnd();
                }
            }
            if (compete_start && !compete_end && model.CompeteEnd != null && model.CompeteEnd.CompareNow() <= 0)
            {
                CompeteEnd();
            }
        }
        public virtual void AwardPrizes(BasePlayerInfo pinfo, int ranking)
        {
            Award(pinfo, ranking);
        }
        public async void Award(BasePlayerInfo pinfo, int rank, int BasePrizePool = 0)
        {
            //List<CompetePrizeInfo> infos = new List<CompetePrizeInfo>();
            if (players.Count <= LastRank)
            {
                foreach (var item in model.prizes)
                {
                    if (item.endrank == 0 && item.starank == rank)
                    {
                        //infos.AddRange(item.prizes);
                        Award(pinfo, rank, item.prizes, BasePrizePool);
                    }
                    else if (item.starank <= rank && item.endrank >= rank)
                    {
                        //infos.AddRange(item.prizes);
                        Award(pinfo, rank, item.prizes, BasePrizePool);
                    }
                }
            }
            SendAward(pinfo.playerid, rank, pinfo.prizes);
        }

        public async virtual void SendAward(int userid, int rank, List<PrizeInfo> infos)
        {
            Console.WriteLine("玩家[" + userid + "]" + (rank <= LastRank ? "获得[" + rank + "]名奖励:" + JsonUtils.Serialize(infos) : "被淘汰"));
            Log.Info("玩家[" + userid + "]" + (rank <= LastRank ? "获得[" + rank + "]名奖励:" + JsonUtils.Serialize(infos) : "被淘汰"));
            await ActionFactory.SendMessage(JsonUtils.Serialize(new sc_compete_award_info 
            { 
                competeid = id,
                type = rank <= LastRank ? 1 : 0,
                rank = rank, 
                infos = CommonFun.GetPrizes(infos, props),                 
                name = model.Name, 
                userid = userid 
            }), userid);
        }
        public async void Award(BasePlayerInfo pinfo, int rank, List<CompetePrizeInfo> prizes, int BasePrizePool = 0)
        {
            var user = await BaseHelper.GetBase<tUser>(pinfo.playerid);
            bool changegold = false;
            foreach (var prize in prizes)
            {
                if (prize.type == 1)
                { 
                    changegold = true;
                    int gold = 0;
                    if (prize.IsValue || BasePrizePool == 0) gold += prize.num;
                    else gold += prize.num * BasePrizePool / 10000; 
                    long befor = user.GetGoldAndWinGold; 
                    user.Gold += gold;
                    long after = user.GetGoldAndWinGold; 
                    ChangeGoldLog(pinfo.playerid, after, befor, gold, 1005, "参加模板[" + model.ID + "]的比赛[" + id + "]获得排名[" + rank + "]奖励"); 
                    AddAwardRecord(pinfo, prize.type, gold);
                }
                else 
                { 
                    bool status = await BackPackHelper.AddProp(pinfo.playerid, prize.type, prize.num); 
                    AddAwardRecord(pinfo, prize.type, prize.num);
                    BackPackHelper.WritePropLog(pinfo.playerid, prize.type, prize.num, status ? 0 : 1, "参加模板[" + model.ID + "]的比赛[" + id + "]获得排名[" + rank + "]奖励");
                }
            }
            if (changegold) await BaseHelper.AddOrUpdateBase(user);
        }
        public void AddAwardRecord(BasePlayerInfo pinfo, int type, int num)
        {
            if (!comptedata.prizes.TryGetValue(pinfo.playerid, out List<PrizeInfo> infos)) 
            { 
                infos = new List<PrizeInfo>();
                comptedata.prizes.Add(pinfo.playerid, infos);
                pinfo.SetPrizes(infos); 
                GetOutPlayerInfo(pinfo.playerid)?.SetPrizes(infos);
            }
            infos.Add(new PrizeInfo { type = type, num = num });
        }
        public BasePlayerInfo GetOutPlayerInfo(int userid)
        {
            foreach (var item in outplayers) if (item.playerid == userid) return item;
            return null;
        }
        public virtual bool CheckStart()
        {
            if (model.MinCount > 0 && players.Count < model.MinCount) return false;
            if (model.MaxCount > 0 && players.Count > model.MaxCount) return false;
            return true;
        }
        public int tableroundcount;

        /// <summary> 比赛开始 </summary>
        public virtual async void CompeteStart()
        {
            if (TimeHelper.IsNull(comptedata.StartTime)) { comptedata.StartTime = DateTime.Now; }
            tableroundcount++;
            compete_start = true;
            int[] counts = GetTablePlayerCounts();
            List<int> ps = new List<int>(players.Keys);
            for (int i = 0; i < counts.Length; i++)
            {
                List<CompetePlayerInfo> infos = new List<CompetePlayerInfo>();
                for (int j = 0; j < counts[i]; j++)
                {
                    int index = RandomHelper.RandomNumber(0, ps.Count);
                    int playerid = ps[index];
                    infos.Add(new CompetePlayerInfo { playerid = playerid, score = playerscores.ContainsKey(playerid) ? playerscores[playerid] : TableInitScore });
                    if (joinrecords.ContainsKey(playerid)) joinrecords[playerid].status = 1;
                    ps.RemoveAt(index);
                }
                var createinfo = new cs_compete_table_create { _g = model.GameID, competeid = id, players = infos, tableinfo = GetCreateTableInfo() };
                sc_compete_table_create tableinfo;
                Console.WriteLine("为玩家[" + JsonUtils.Serialize(infos) + "]分配[" + infos.Count + "]人房间");
                while ((tableinfo = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFunAsync<sc_compete_table_create>(createinfo)).result != 1) ;
                if (!tables.ContainsKey(tableinfo.tableid)) { tables.Add(tableinfo.tableid, new CompeteTableInfo { IP = tableinfo.ip, tableid = tableinfo.tableid }); comptedata.clearinfo.Add(new CompeteTableClearInfo { rounds = new List<CompeteRoundClearInfo>(), tableid = tableinfo.tableid, count = tableroundcount, scores = new Dictionary<int, int>(), totalscores = new Dictionary<int, int>() }); }
            }
        }
        /// <summary> 以平均原则确定房间人数 </summary>
        public int[] GetTablePlayerCounts()
        {
            if (TableMaxCount == 0) return new int[0];
            int tablecount; // 房间数量
            if (players.Count % TableMaxCount == 0) tablecount = players.Count / TableMaxCount; //人数是房间最大人数的整数倍，以房间最大人数分配房间
            else tablecount = players.Count / TableMaxCount + 1; //人数不是房间最大人数的整数倍，按房间数平均分配房间中的人
            int[] counts = new int[tablecount]; //每个房间应有人数
            InitTablePlayerCount(counts, players.Count / counts.Length, players.Count % counts.Length);
            return counts;
        }
        /// <summary>
        ///  初始化房间人数
        /// </summary>
        /// <param name="counts">牌桌人数列表</param>
        /// <param name="num">每桌平均人数</param>
        /// <param name="remain">未分配人数</param>
        public void InitTablePlayerCount(int[] counts, int num, int remain)
        {
            if (remain > 0) for (int i = 0; i < counts.Length; i++) if (remain-- > 0) counts[i] = num + 1; else counts[i] = num;
            else for (int i = 0; i < counts.Length; i++) counts[i] = num;
        }
        /// <summary> 比赛结束逻辑 </summary>
        public virtual void CompeteEnd()
        {
            compete_end = true; timer.Dispose(); CompeteService.Send(new cs_compete_over { competeid = id });
            comptedata.EndTime = DateTime.Now;
            BaseHelper.AddOrUpdateBase(comptedata);
        }
        /// <summary> 单局结束逻辑 </summary>
        public virtual void RoundOver(cs_round_over cs)
        {
            int playercount = 0;
            List<BasePlayerInfo> leavers = new List<BasePlayerInfo>();
            Dictionary<int, int> scores = new Dictionary<int, int>();
            Dictionary<int, int> totalscores = new Dictionary<int, int>();
            foreach (var playerinfo in cs.playerinfos)
            {
                scores.Add(playerinfo.playerid, playerinfo.change_score);
                totalscores.Add(playerinfo.playerid, playerinfo.score);
                if (!players.TryGetValue(playerinfo.playerid, out BasePlayerInfo pinfo)) continue;
                if (playerinfo.score <= 0) //被淘汰玩家逻辑
                {
                    players.Remove(playerinfo.playerid);
                    playerscores.Remove(playerinfo.playerid);
                    pinfo.status = 2;
                    outplayers.Add(pinfo.ToFailInfo(outcount++));
                    leavers.Add(pinfo);
                }
                else
                {
                    pinfo.Score = playerinfo.score;
                    playerscores[playerinfo.playerid] = playerinfo.score;
                    playercount++;
                    pinfo.status = 0;
                }
                joinrecords[playerinfo.playerid].Score = playerinfo.score;
            }
            if (tables.TryGetValue(cs.tableid, out CompeteTableInfo info))
            {
                info.round++;
                foreach (var cinfo in comptedata.clearinfo)
                {
                    if (cinfo.tableid == cs.tableid && cinfo.count == tableroundcount) cinfo.rounds.Add(new CompeteRoundClearInfo { round = info.round, scores = scores, totalscores = totalscores });
                }
                if (playercount < TableMinCount) info.Send(model.GameID, JsonUtils.Serialize(new cs_compete_table_close { _g = model.GameID, competeid = id, tableid = cs.tableid }));
            }
            RankingAndPlayerOut(leavers);
            BaseHelper.AddOrUpdateBase(comptedata);
            // 颁奖
            //if (players.Count < LastRank)
            //{
            //foreach (var id in leaves)
            //{
            //    foreach (var rank in ranks)
            //    {
            //        if (id == rank.playerid)
            //        {
            //            //    if (rank.rank <= LastRank)
            //            //    {
            //            AwardPrizes(id, rank.rank);
            //            //}
            //        }
            //    }
            //}
            //}
            //if (info != null && info.round < TableRoundCount && playercount >= TableMinCount) info.Send(model.GameID, JsonUtils.Serialize(GetReadyMsg(cs.tableid)));
        }
        /// <summary> 排名并且发送玩家离开消息(离开消息:淘汰或颁奖信息) </summary>
        public void RankingAndPlayerOut(List<BasePlayerInfo> leaves)
        {
            var ranks = GetRanks();
            if (leaves.Count > 0)
            {
                Console.WriteLine("比赛排名:" + JsonUtils.Serialize(ranks));
                Log.Info("比赛排名:" + JsonUtils.Serialize(ranks));
            }
            SendRank(ranks);
            comptedata.ranking = ranks;
            // 颁奖或淘汰
            foreach (var pinfo in leaves)
            {
                foreach (var rank in ranks)
                {
                    if (pinfo.playerid == rank.playerid)
                    {
                        AwardPrizes(pinfo, rank.rank);
                    }
                }
            }
        }
        public virtual void TableOver(cs_compete_table_over cs)
        {
            TableClearInfoFill(cs.tableid);
            if (TablePromotionCount > 0)
            {
                List<BasePlayerInfo> ps = new List<BasePlayerInfo>();
                for (int i = 0; i < cs.players.Count; i++) if (players.TryGetValue(cs.players[i], out BasePlayerInfo info)) ps.Add(info);
                ps.Sort((o1, o2) => { if (o1.Score > o2.Score) return -1; else return 1; });
                List<BasePlayerInfo> leavers = new List<BasePlayerInfo>();
                for (int i = ps.Count - 1; i >= TablePromotionCount; i--)
                {
                    var pinfo = ps[i];
                    players.Remove(pinfo.playerid);
                    playerscores.Remove(pinfo.playerid);
                    joinrecords[pinfo.playerid].status = 2;
                    outplayers.Add(joinrecords[pinfo.playerid].ToFailInfo(outcount++));
                    leavers.Add(pinfo);
                }
                RankingAndPlayerOut(leavers);
            }
            tables.Remove(cs.tableid);
            if (players.Count < TableMinCount || (players.Count <= TableMaxCount && IsAllPlayerIn(cs.players)))
            {
                RankingAndPlayerOut(new List<BasePlayerInfo>(players.Values));
                CompeteEnd();
                return;
            }
            else if (tables.Count == 0) CompeteStart();
            BaseHelper.AddOrUpdateBase(comptedata);
        }
        /// <summary> 填充牌桌结算信息到牌桌数据中 </summary>
        public void TableClearInfoFill(int tableid)
        {
            foreach (var cinfo in comptedata.clearinfo)
            {
                if (cinfo.tableid == tableid && cinfo.count == tableroundcount)
                {
                    Dictionary<int, int> scores = new Dictionary<int, int>();
                    Dictionary<int, int> totalscores = new Dictionary<int, int>();
                    foreach (var rinfo in cinfo.rounds)
                    {
                        foreach (var entity in rinfo.scores)
                        {
                            if (!scores.TryGetValue(entity.Key, out int score)) score = 0;
                            scores[entity.Key] = score + entity.Value;
                        }
                        foreach (var entity in rinfo.totalscores) totalscores[entity.Key] = entity.Value;
                    }
                    cinfo.scores = scores;
                    cinfo.totalscores = totalscores;
                }
            }
        }
        public bool IsAllPlayerIn(List<int> ids)
        {
            foreach (int id in players.Keys) if (!ids.Contains(id)) return false;
            return true;
        }

        public virtual cs_compete_ready GetReadyMsg(int tableid)
        {
            return new cs_compete_ready { _g = model.GameID, competeid = id, tableid = tableid };
        }
        /// <summary> 特殊消息处理(目前没有) </summary>
        public virtual void SpecialOperate(cs_compete cs, string json) { }
        public bool CheckSignupOver()
        {
            if (model.MinCount > players.Count && model.CompeteStart != null && TotalDelayTime > 0) return model.CompeteStart.GetCurrentTime().AddSeconds(TotalDelayTime) <= DateTime.Now;
            return true;
        }
        public bool CheckTimeOut()
        {
            if (model.CompeteStart != null)
            {
                if (TotalDelayTime > 0) return model.CompeteStart.GetCurrentTime().AddSeconds(TotalDelayTime) < DateTime.Now;
                else return model.CompeteStart.CompareNow() >= 0;
            }
            return true;
        }
        ///// <summary> 获取报名结束延迟时间 </summary>
        //public int GetSignupDelayOverTime()
        //{
        //    return GetSignupDelayOverMinute() * 60 + GetSignupDelayOverSecond();
        //}
        ///// <summary> 获取报名结束延迟时间(分) </summary>
        //public int GetSignupDelayOverMinute()
        //{
        //    if (map.TryGetValue("SignupDelayOverMinute", out string minute))
        //    {
        //        if (map.TryGetValue("SignupDelayOverCount", out string count))
        //        {
        //            return minute.ToInt32() * count.ToInt32();
        //        }
        //        return minute.ToInt32();
        //    }
        //    return 0;
        //}
        ///// <summary> 获取报名结束延迟时间(秒) </summary>
        //public int GetSignupDelayOverSecond()
        //{
        //    if (map.TryGetValue("SignupDelayOverSecond", out string second))
        //    {
        //        if (map.TryGetValue("SignupDelayOverCount", out string count))
        //        {
        //            return second.ToInt32() * count.ToInt32();
        //        }
        //        return second.ToInt32();
        //    }
        //    return 0;
        //}
        //public int GetTableMaxCount()
        //{
        //    if (map.TryGetValue("TableMaxCount", out string count))
        //    {
        //        return count.ToInt32();
        //    }
        //    return 0;
        //}
        //public int GetTableMinCount()
        //{
        //    if (map.TryGetValue("TableMinCount", out string count))
        //    {
        //        return count.ToInt32();
        //    }
        //    return 0;
        //}

        public int GetLastRank()
        {
            int LastRank = 0;
            foreach (var rank in model.prizes)
            {
                if (rank.starank > LastRank) LastRank = rank.starank;
                if (rank.endrank > LastRank) LastRank = rank.endrank;
            }
            return LastRank;
        }

        public async void PayFree(tUser user, PrizeInfo free)
        {
            if (free.type == 1) 
            { 
                long befor = user.GetGoldAndWinGold; 
                user.GoldReduce(free.num);
                long after = user.GetGoldAndWinGold; 
                ChangeGoldLog(user.UserID, after, befor, -free.num, 1003, "参加模板为[" + model.ID + "]的比赛[" + id + "]扣除报名费");
            }
            else
            {
                bool status = await BackPackHelper.RemovProp(user.UserID, free.type, free.num);
                BackPackHelper.WritePropLog(user.UserID, free.type, free.num, status ? 0 : 1, "参加模板为[" + model.ID + "]的比赛[" + id + "]扣除报名费");
            }
        }
        public async void ReturnFree(tUser user, PrizeInfo free)
        {

            if (free.type == 1) 
            {
                long befor = user.GetGoldAndWinGold; 
                user.Gold += free.num; 
                long after = user.GetGoldAndWinGold;
                ChangeGoldLog(user.UserID, after, befor, free.num, 1004, "退出模板[" + model.ID + "]的比赛[" + id + "]返还金币");
            }
            else 
            { 
                bool status = await BackPackHelper.AddProp(user.UserID, free.type, free.num);
                BackPackHelper.WritePropLog(user.UserID, free.type, free.num, status ? 0 : 1, "退出模板[" + model.ID + "]的比赛[" + id + "]返还道具"); 
            }

        }
    }
}
