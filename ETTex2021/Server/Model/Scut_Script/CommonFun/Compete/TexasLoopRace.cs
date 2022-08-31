using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;

namespace ETModel.Script.CsScript.Action
{

    /// <summary> 德州循环赛 </summary>
    public class TexasLoopRace : CompeteBase
    {
        /// <summary> 执行时间分钟数 30 60 90 120  </summary>
        public int TableDuration { get; set; }
        /// <summary> 1.正常模式，2.保险模式， 3.延时看牌 </summary>
        public int TableGameType { get; set; }
        /// <summary> 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary>
        public int TableInto { get; set; }
        /// <summary> 前注 底注的 2的N次方   1 2 4 8 16 20 40 </summary>
        public int TablePregamble { get; set; }

        public TexasLoopRace(int id, CompeteModel model) : base(id, model)
        {
            //signup_start = true;
            //signup_over = false;
        }
        public override string GetCreateTableInfo()
        {
            //int basescore = TableBaseScore;
            //int pregamble = TablePregamble;
            //int maxblind = TableInto;
            return JsonUtils.Serialize(new cs_createtable_tex { _g = model.GameID, gameid = model.GameID, maxCount = TableRoundCount, baserate = TableBaseScore, pregamble = TablePregamble, Duration = TableDuration, gametype = 30, into = TableInto, numpertable = TableMinCount, manNum = TableMaxCount, name = model.Name });
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
        long lasttime;
        int loopcount;
        public async override void TimedTask(object state)
        {
            lasttime++;
            if (lasttime % 20 == 0) { Console.WriteLine("德州循环赛进行中," + GetCompeteInfo()); }
            //if (lasttime > 0) Console.WriteLine("比赛刷新时间间隔[" + (DateTime.Now.Ticks - lasttime) / (double)10000000 + "]秒," + (compete_end ? "比赛结束" : (compete_start ? "比赛已开始" : "报名最后时间:" + model.CompeteStart.GetCurrentTime().AddSeconds(TotalDelayTime).ToFormat() + ", 当前时间:" + DateTime.Now.ToFormat())));
            //lasttime = DateTime.Now.Ticks;

            //if (!signup_over && !signup_start && model.SignupTime != null && model.SignupTime.CompareNow() <= 0)
            //{
            //    signup_start = true;
            //}
            //if (signup_start && !signup_over && model.SignupEnd != null && model.SignupEnd.CompareNow() <= 0)
            //{
            //    SignupOver();
            //}
            //if (!compete_start && !compete_end && model.CompeteStart != null && model.CompeteStart.CompareNow() <= 0 && CheckSignupOver())
            //{
            //    if (CheckStart()) { CompeteStart(); CompeteService.Send(new cs_reload { }); }
            //    else
            //    {
            //        Console.WriteLine("比赛[" + id + "]开赛时间已到,因报名人数不足,比赛取消");
            //        foreach (var item in players.Values)
            //        {
            //            var data = await Quit(item.playerid);
            //            data.message = "比赛[" + id + "]开赛时间已到,因报名人数不足,比赛取消，返还报名费";
            //            await ActionFactory.SendMessage(JsonUtils.Serialize(data), item.playerid);
            //        }
            //        CompeteEnd();
            //    }
            //}
            //if (compete_start && !compete_end && model.CompeteEnd != null && model.CompeteEnd.CompareNow() <= 0)
            //{
            //    CompeteEnd();
            //}
        }
        public override void RoundOver(cs_round_over cs)
        {
            base.RoundOver(cs);
        }
        public override CompeteInfo ToInfo(int userid)
        {
            return new CompeteInfo
            {
                competeid = id,
                name = model.Name,
                gameid = model.GameID,
                type = model.Type,
                CompeteStart = compete_start,
                signupcount = players.Count,
                maxcount = model.MaxCount,
                mincount = model.MinCount,
                IsSignup = players.ContainsKey(userid),
                cansignup = signup_start,
                free = CommonFun.GetPrizes(model.Free, props),
                prizes = CommonFun.GetPrizes(model.prizes, props),
                SignupTime = model.SignupTime != null ? model.SignupTime.GetCurrentTime().ToFormat() : null,
                StartTime = model.CompeteStart != null ? model.CompeteStart.GetCurrentTime().ToFormat() : null,
            };
        }
        public override async ETTask<sc_signup> Signup(int userid)
        {
            var result = await base.Signup(userid);
            if (result.result == 1 && players.Count >= model.MinCount)
            {
                SignupOver();
                CompeteStart();
                CompeteService.Send(new cs_reload { });
            }
            return result;
        }
        public override void CompeteStart()
        {
            base.CompeteStart();
            loopcount++;
        }
        public string GetCompeteInfo()
        {
            return "当前比赛[" + model.ID + "." + id + "]," + (compete_start ? "进行到第[" + loopcount + "]轮,当前轮还有[" + tables.Count + "]个房间正在游戏,[" + GetAwardPlayerCount() + "]位玩家已颁奖," : "比赛尚未开始") + "当前剩余玩家[" + players.Count + "]人";
        }
        public int GetAwardPlayerCount()
        {
            int count = 0;
            foreach (var item in joinrecords.Values) if (item.IsAward) count++;
            return count;
        }
    }
}
