using ETModel.Framework.Model;
using ETModel.Script.CsScript.Action;
using ProtoBuf;
using System;
using System.Collections.Generic;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tcompete", IsExpired = false)]
    public class tcompete : BaseEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true, IdentityNo = 1)]
        public int id { get; set; }
        [ProtoMember(2)]
        [EntityField(true, ColumnDbType.LongText)]
        public CompeteConfigInfo config { get; set; }
        [ProtoMember(3)]
        [EntityField(true, ColumnDbType.LongText)]
        public List<RankInfo> ranking { get; set; }
        [ProtoMember(4)]
        [EntityField(true, ColumnDbType.LongText)]
        public List<CompeteTableClearInfo> clearinfo { get; set; }
        [ProtoMember(5)]
        [EntityField(true, ColumnDbType.LongText)]
        public Dictionary<int, List<PrizeInfo>> prizes { get; set; }
        [ProtoMember(6)]
        [EntityField]
        public DateTime create { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public DateTime StartTime { get; set; }
        [ProtoMember(8)]
        [EntityField]
        public DateTime EndTime { get; set; }

        protected override int GetIdentityId()
        {
            return id;
        }
        public int GetWinCount(int playerid)
        {
            int count = 0;
            foreach (var info in clearinfo)
            {
                if (info.scores.TryGetValue(playerid, out int score) && score > 0) count++;
            }
            return count;
        }
        public int GetPlayRoundCount(int playerid)
        {
            int count = 0;
            foreach (var tinfo in clearinfo) foreach (var round in tinfo.rounds) if (round.scores.TryGetValue(playerid, out int score)) count++;
            return count;
        }
        public bool IsFinalsPlayer(int playerid)
        {
            var tinfo = clearinfo[clearinfo.Count - 1];
            if (tinfo != null && tinfo.rounds[tinfo.rounds.Count - 1].scores.TryGetValue(playerid, out int score)) return true;
            return false;
        }
        public int GetPlayerCount()
        {
            return ranking.Count;
        }
        public int GetRankingNum(int playerid)
        {
            foreach (var item in ranking) if (item.playerid == playerid) return item.rank;
            return ranking.Count + 2;
        }
        public int GetWinGold(int playerid)
        {
            int wingold = 0;
            if (prizes.TryGetValue(playerid, out List<PrizeInfo> cpi)) foreach (var item in cpi) if (item.type == 1) wingold = item.num;
            return wingold;
        }
        public int GetFreeGold()
        {
            int freegold = 1;
            foreach (var item in config.model.Free) if (item.type == 1) freegold = item.num;
            return freegold;
        }
        public CompeteRemark GetRemark(int playerid)
        {
            return new CompeteRemark { competeid = id, competename = config.model.Name, starttime = StartTime.ToFormat(), rank = GetRankingNum(playerid), wingold = GetWinGold(playerid) };
        }
        public sc_compete_record_detail GetDetail(int playerid)
        {
            return new sc_compete_record_detail { result = 1, competeid = id, starttime = StartTime.ToFormat(), prizes = CommonFun.GetPrizes(prizes[playerid], PropsManager.Ins.props), competename = config.model.Name, ranking = GetRankPrizes(), TableWinCount = GetWinCount(playerid), TotalRoundCount = GetPlayRoundCount(playerid), RateOfReturn = GetWinGold(playerid) * 10000 / GetFreeGold() };
        }
        public List<RankPrizeInfo> GetRankPrizes()
        {
            List<RankPrizeInfo> infos = new List<RankPrizeInfo>();
            foreach (var rank in ranking)
            {
                var info = rank.ToRankPrizeInfo();
                if (prizes.TryGetValue(rank.playerid, out List<PrizeInfo> pinfos)) info.prizes = CommonFun.GetPrizes(pinfos, PropsManager.Ins.props);
                SetProportion(info);
                infos.Add(info);
            }
            return infos;
        }
        public void SetProportion(RankPrizeInfo info)
        {
            if (config.model.GameID == CommonFun.GetAttribute<GameBootAttribute>(typeof(TexasSendDataServer)).GameID && config.model.Type == CompeteType.Promotion)
            {
                foreach (var item in config.model.prizes)
                {
                    int proportion = 0;
                    if (item.endrank <= 0 && item.starank == info.rank)
                    {
                        foreach (var pinfo in item.prizes) if (pinfo.type == 1 && !pinfo.IsValue) proportion = pinfo.num;
                    }
                    else if (item.starank <= info.rank && item.endrank >= info.rank)
                    {
                        foreach (var pinfo in item.prizes) if (pinfo.type == 1 && !pinfo.IsValue) proportion = pinfo.num;
                    }
                    if (proportion > 0) info.proportion = proportion;
                }
            }
        }
    }
    [Serializable, ProtoContract]
    public class CompeteConfigInfo
    {
        [ProtoMember(1)]
        public CompeteModel model { get; set; }
        [ProtoMember(2)]
        public List<CompeteProperty> properties { get; set; }
    }
    [Serializable, ProtoContract]
    public class CompeteTableClearInfo
    {
        [ProtoMember(1)]
        public int count { get; set; }
        [ProtoMember(2)]
        public Dictionary<int, int> scores { get; set; }
        [ProtoMember(3)]
        public Dictionary<int, int> totalscores { get; set; }
        [ProtoMember(4)]
        public int tableid;
        [ProtoMember(5)]
        public List<CompeteRoundClearInfo> rounds { get; set; }
    }
    [Serializable, ProtoContract]
    public class CompeteRoundClearInfo
    {
        [ProtoMember(1)]
        public int round { get; set; }
        [ProtoMember(2)]
        public Dictionary<int, int> scores { get; set; }
        [ProtoMember(3)]
        public Dictionary<int, int> totalscores { get; set; }
    }
}
