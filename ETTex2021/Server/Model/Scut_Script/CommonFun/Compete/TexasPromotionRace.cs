using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary> 德州晋级赛 </summary>
    public class TexasPromotionRace : CompeteBase
    {
        //public Dictionary<int, TexasPlayerInfo> playerinfos = new Dictionary<int, TexasPlayerInfo>();
        public Dictionary<int, tcompetitionconfig> levelinfos = new Dictionary<int, tcompetitionconfig>();
        public TexasPromotionRace(int id, CompeteModel model) : base(id, model)
        {
            LevelConofigInit();
        }
        public async void LevelConofigInit()
        {
            if (LevelConfigID > 0)
            {
                var config = await BaseHelper.GetBase<Blindsconfig>(LevelConfigID);
                if (config == null) return;
                SetLevelLimit(config.level, ref LevelStart, ref LevelEnd);
                if (LevelStart > 0 && LevelEnd > 0)
                {
                    var list = await BaseHelper.GetBaseAll<tcompetitionconfig>(x => x.blindsconfigId == config.Id && x.level >= LevelStart && x.level <= LevelEnd);
                    list.Sort((x1, x2) => { if (x1.level < x2.level) return -1; else return 1; });
                    foreach (var item in list) levelinfos[item.level] = item;
                    if (list.Count > 0)
                    {
                        currentlevel = list[0].level;
                        LevelStart = list[0].level;
                        LevelEnd = list[list.Count - 1].level;
                    }
                }
            }
        }
        /// <summary> 执行时间分钟数 30 60 90 120  </summary>
        public int TableDuration { get; set; }
        /// <summary> 1.正常模式，2.保险模式， 3.延时看牌 </summary>
        public int TableGameType { get; set; }
        /// <summary> 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary>
        public int TableInto { get; set; }
        /// <summary> 前注 底注的 2的N次方   1 2 4 8 16 20 40 </summary>
        public int TablePregamble { get; set; }
        /// <summary> 玩家重生次数 </summary>
        public int PlayerRebirthCount { get; set; }
        /// <summary> 升级时间(秒) </summary>
        public int LevelUpSecond { get; set; }
        /// <summary> 停止复活等级 </summary>
        public int LevelStopRebirth { get; set; }
        /// <summary> 等级配置编号 </summary>
        public int LevelConfigID { get; set; }
        /// <summary> 初始奖池 </summary>
        public int BasePrizePool { get; set; }
        public int CurrentPrizePool { get { return BasePrizePool; } }
        /// <summary> 起始等级 </summary>
        public int LevelStart;
        /// <summary> 结束等级 </summary>
        public int LevelEnd;
        /// <summary> 最后一次升级时间 </summary>
        public long LastLevelUp;
        public int outcount;
        public int currentlevel;
        string[] separators = new string[] { "-", "_", " ", " _ ", " - " };

        public void SetLevelLimit(string str, ref int stalevel, ref int endlevel)
        {
            if (str == null) { return; }
            string[] array = null;
            for (int i = 0; i < separators.Length && ((array = str.Split(separators[i])) == null && array.Length != 2); i++) ;
            if (array != null && array.Length == 2)
            {
                stalevel = array[0].ToInt32();
                endlevel = array[1].ToInt32();
            }
        }
        public override void TimedTask(object state)
        {
            LevelUp();
            base.TimedTask(state);
        }
        public override string GetCreateTableInfo()
        {
            tcompetitionconfig info;
            int basescore = TableBaseScore;
            int pregamble = TablePregamble;
            int maxblind = TableInto;
            if (levelinfos.ContainsKey(currentlevel) && (info = levelinfos[currentlevel]) != null)
            {
                basescore = info.Minblind;
                pregamble = info.pregamble;
                maxblind = info.Maxblind;
            }
            return JsonUtils.Serialize(new cs_createtable_tex { _g = model.GameID, gameid = model.GameID, maxCount = TableRoundCount, baserate = basescore, pregamble = pregamble, Duration = TableDuration, gametype = 30, into = maxblind, numpertable = TableMinCount, manNum = TableMaxCount, min_level = LevelStart, max_level = LevelEnd, level = currentlevel, name = model.Name });
        }

        //public override void TableOver(cs_compete_table_over cs)
        //{
        //    tables.Remove(cs.tableid);
        //    if (players.Count == 1)
        //    {
        //        foreach (var player in players) AwardPrizes(player.Key, 1);
        //        CompeteEnd();
        //        return;
        //    }
        //    if (tables.Count == 0) CompeteStart();
        //}
        public override async void CompeteStart()
        {
            Console.WriteLine("比赛开始");
            if (LastLevelUp == 0)
            {
                LastLevelUp = DateTime.Now.Ticks;
                currentlevel = 1;
            }
            base.CompeteStart();
        }

        public override void RoundOver(cs_round_over cs)
        {
            base.RoundOver(cs);
            if (players.Count <= LastRank) SignupOver();
            if (tables.TryGetValue(cs.tableid, out CompeteTableInfo info)) info.Send(model.GameID, GetTableInfoString());
        }
        public override void AwardPrizes(BasePlayerInfo pinfo, int ranking)
        {
            Award(pinfo, ranking, CurrentPrizePool);
        }
        public override BasePlayerInfo NewPlayerInfo(tUser user, int playerid)
        {
            joinrecords.TryGetValue(playerid, out TexasPlayerInfo info);
            return new TexasPlayerInfo { playerid = playerid, RebirthCount = info != null ? info.RebirthCount : PlayerRebirthCount, Score = TableInitScore, name = user.wechatName, pic = user.wechatHeadIcon };
        }
        public void LevelUp()
        {
            if (currentlevel < LevelEnd && LastLevelUp > 0 && LastLevelUp + LevelUpSecond * 10000000 <= DateTime.Now.Ticks)
            {
                currentlevel++;
                LastLevelUp = DateTime.Now.Ticks;
                foreach (var item in tables.Values) item.Send(model.GameID, GetTableInfoString(item.tableid));
                if (currentlevel == LevelStopRebirth) SignupOver();
            }
        }

        public override async ETTask<sc_signup> Signup(int userid)
        {
            if (!signup_start || (compete_start && !joinrecords.ContainsKey(userid)) || signup_over) return new sc_signup { result = -1, message = "报名已结束" };
            if (players.ContainsKey(userid)) return new sc_signup { result = -2, message = "你已报名" };
            if (model.MaxCount > 0 && players.Count >= model.MaxCount) return new sc_signup { result = -3, message = "报名人数已满" };
            var user = await BaseHelper.GetBase<tUser>(userid);
            var userinfo = await BaseHelper.GetBase<tuserInfoEx>(userid);
            if (user == null) return new sc_signup { result = -4, message = "用户不存在" };
            if (userinfo == null && model.Free.Exists(x => x.type != 1)) return new sc_signup { result = -5, message = "报名费不足" };
            foreach (var free in model.Free)
            {
                if (free.type == 1) { if (user.Gold < free.num) return new sc_signup { result = -7, message = "金币不足" }; }
                else if (!BackPackHelper.IsEnough(userinfo, free)) return new sc_signup { result = -8, message = "物品[" + free.type + "]不足" };
            }
            if (joinrecords.TryGetValue(userid, out TexasPlayerInfo info))
            {
                if (info.RebirthCount <= 0) return new sc_signup { result = -6, message = "复活次数用尽,报名失败" };
                else info.RebirthCount--;
            }
            foreach (var free in model.Free) PayFree(user, free);
            BasePlayerInfo playerinfo = info != null ? ResetPlayerInfo(info) : NewPlayerInfo(user, userid);
            players.Add(userid, playerinfo);
            joinrecords[userid] = playerinfo;
            outplayers.RemoveByUserID(userid);
            Console.WriteLine("玩家[" + userid + "]报名比赛[" + id + "]");
            await BaseHelper.InsertBase(new tcompeterelation { playerid = userid, competeid = id, IsEnable = true });
            return new sc_signup { result = 1, message = "报名比赛[" + id + "]成功" };
        }
        public override CompeteInfo ToInfo(int userid)
        {
            return new TexasPromotionInfo
            {
                competeid = id,
                name = model.Name,
                leveluptime = LevelUpSecond,
                prizepool = CurrentPrizePool,
                rebirth = PlayerRebirthCount,
                tablemaxcount = TableMaxCount,
                gameid = model.GameID,
                type = model.Type,
                CompeteStart = compete_start,
                signupcount = players.Count,
                maxcount = model.MaxCount,
                mincount = model.MinCount,
                IsSignup = players.ContainsKey(userid),
                cansignup = signup_start,
                signupdelay = TotalDelayTime,
                initscore = TableInitScore,
                free = CommonFun.GetPrizes(model.Free, props),
                prizes = CommonFun.GetPrizes(model.prizes, props),
                SignupTime = model.SignupTime != null ? model.SignupTime.GetCurrentTime().ToFormat() : null,
                StartTime = model.CompeteStart != null ? model.CompeteStart.GetCurrentTime().ToFormat() : null,
                levelinfos = GetLevelInfos()
            };
        }
        public async override void SendAward(int userid, int rank, List<PrizeInfo> infos)
        {
            int count = 0;
            if (joinrecords.TryGetValue(userid, out TexasPlayerInfo player)) count = player.RebirthCount;
            await ActionFactory.SendMessage(JsonUtils.Serialize(new sc_compete_award_info { competeid = id, rebirth_count = count, type = rank <= LastRank ? 1 : 0, rank = rank, infos = CommonFun.GetPrizes(infos, props), name = model.Name, userid = userid }), userid); ;
        }
        public List<TexasLeveInfo> GetLevelInfos()
        {
            List<TexasLeveInfo> infos = new List<TexasLeveInfo>();
            foreach (var item in levelinfos.Values)
            {
                infos.Add(new TexasLeveInfo { basegamble = item.Minblind, pregamble = item.Maxblind, Maxblind = item.Maxblind, level = item.level });
            }
            return infos;
        }
        public override cs_compete_ready GetReadyMsg(int tableid)
        {
            tcompetitionconfig info;
            int basescore = TableBaseScore;
            int pregamble = TablePregamble;
            int maxblind = TableInto;
            if (levelinfos.ContainsKey(currentlevel) && (info = levelinfos[currentlevel]) != null)
            {
                basescore = info.Minblind;
                pregamble = info.pregamble;
                maxblind = info.Maxblind;
            }
            return new cs_compete_texas_ready { _g = model.GameID, competeid = id, tableid = tableid, pregamble = pregamble, baserate = basescore, into = maxblind };
        }
        public string GetTableInfoString(int tableid = 0)
        {
            return JsonUtils.Serialize(GetTableInfo(tableid));
        }
        public sc_compete_table_info GetTableInfo(int tableid = 0)
        {
            int nextlevel = currentlevel + 1;
            if (levelinfos.ContainsKey(nextlevel))
            {
                return new sc_compete_table_info { result = 1, min_level = LevelStart, max_level = LevelEnd, tableid = tableid, next_baserate = levelinfos[nextlevel].Minblind, next_into = levelinfos[nextlevel].Maxblind, next_pregamble = levelinfos[nextlevel].pregamble, next_uplevel_time = (int)(LastLevelUp / 10000000 + LevelUpSecond - DateTime.Now.Ticks / 10000000) };
            }
            return new sc_compete_table_info { result = 1, min_level = LevelStart, max_level = LevelEnd, tableid = tableid, next_baserate = levelinfos[currentlevel].Minblind, next_into = levelinfos[currentlevel].Maxblind, next_pregamble = levelinfos[currentlevel].pregamble, next_uplevel_time = 0 };
        }
    }
}

