using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteManager
    {
        Timer timer;
        private static CompeteManager ins;
        public static CompeteManager Ins { get { if (ins == null) ins = new CompeteManager(); return ins; } }
        public CompeteLoader loader = new CompeteLoader();
        public Dictionary<int, CompeteBase> map = new Dictionary<int, CompeteBase>();
        public CompeteManager()
        {
            timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(LoadCompete, state); }, this, 300000, 300000);
            LoadCompete(this);
        }
        public async void LoadCompete(object obj)
        {
            var self = (CompeteManager)obj;
            loader.ReLoad();
            //if (self.loader.pmap == null || self.loader.pmap.Count == 0) self.loader.ReLoad();
            foreach (var item in self.loader.tmap.Values)
            {
                if (!item.IsEnable) continue;
                bool isin = true;
                if (item.Type == CompeteType.Loop)
                {
                    isin = false;
                    foreach (var compete in map.Values) if (compete.model.ID == item.ID && !compete.compete_start) { isin = true; break; }
                }
                else if ((item.ShelfTime != null ? item.ShelfTime.CompareNow() <= 0 : (item.SignupTime != null ? item.SignupTime.CompareNow() <= 0 : true)) && item.CompeteStart != null && item.CompeteStart.CompareNow() > 0)
                {
                    isin = false;
                    foreach (var temp in map.Values) if (temp.model.ID == item.ID) { isin = true; break; }
                }
                if (!isin)
                {
                    var compete = CompeteFactory.GetNewCompete(item);
                    if (compete != null) map.Add(compete.id, compete);
                }
            }
        }
        public async ETTask<string> SiginCompete(string json)
        {
            var cs = JsonUtils.Deserialize<cs_signup>(json);
            if (map.TryGetValue(cs.competeid, out CompeteBase compete))
            {
                if (compete.signup_start) return JsonUtils.Serialize(await compete.Signup(cs.userid));
                else return JsonUtils.Serialize(new sc_signup { result = -2, message = "比赛[" + compete.id + "]报名" + (compete.model.Type == CompeteType.Loop ? "失败" : (compete.model.SignupTime.CompareNow() < 0 ? "没开始" : "已结束")) });
            }
            return JsonUtils.Serialize(new sc_signup { result = -1, message = "比赛不存在" });
        }
        public async ETTask<string> QuitCompete(string json)
        {
            var cs = JsonUtils.Deserialize<cs_quit>(json);
            foreach (var item in map.Values)
            {
                if (item.players.ContainsKey(cs.userid))
                {
                    var sc = await item.Quit(cs.userid);
                    item.players.Remove(cs.userid);
                    item.joinrecords.Remove(cs.userid);
                    return JsonUtils.Serialize(sc);
                }
            }
            return JsonUtils.Serialize(new sc_quit { result = -1, message = "你没有报名任何比赛，退赛失败" });
        }
        /// <summary> 获取比赛列表 </summary
        public string GetCompeteList(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_list>(json);
            var senddata = new sc_compete_list { competes = new List<CompeteInfo>() };
            if (cs != null)
            {
                foreach (var compete in map.Values) senddata.competes.Add(compete.ToInfo(cs.userid));
            }
            if (senddata.competes.Count > 0) senddata.result = 1;
            return JsonUtils.Serialize(senddata);
        }
        /// <summary> 单据结算 </summary
        public void RoundOver(string json)
        {
            var cs = JsonUtils.Deserialize<cs_round_over>(json);
            if (map.TryGetValue(cs.competeid, out CompeteBase compete))
            {
                compete.RoundOver(cs);
            }
        }
        /// <summary> 牌桌结束 </summary
        public void TableOver(string json)
        {
            Console.WriteLine("房间结束:" + json);
            var cs = JsonUtils.Deserialize<cs_compete_table_over>(json);
            if (map.TryGetValue(cs.competeid, out CompeteBase compete))
            {
                compete.TableOver(cs);
            }
        }
        /// <summary> 比赛结束 </summary
        public void CompeteOver(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_over>(json);
            map.Remove(cs.competeid);
        }
        /// <summary> 特殊消息处理(目前没有特殊消息) </summary>
        public void SpecialOperate(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete>(json);
            if (map.TryGetValue(cs.competeid, out CompeteBase compete))
            {
                compete.SpecialOperate(cs, json);
            }
        }
        /// <summary> 获取比赛排名 </summary>
        public string CompeteRanking(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_rank_info>(json);
            if (cs != null)
            {
                if (map.TryGetValue(cs.competeid, out CompeteBase compete)) return JsonUtils.Serialize(new sc_compete_rank_info { result = 1, competeid = cs.competeid, infos = compete.GetRanks() });
                return JsonUtils.Serialize(new sc_compete_rank_info { result = -1, message = "比赛不存在" });
            }
            return JsonUtils.Serialize(new sc_compete_rank_info { result = -2, message = "消息错误" });
        }
        /// <summary> 获取牌桌信息(目前只有德州晋级场支持该消息) </summary>
        public async ETTask<string> CompeteTableInfo(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_table_info>(json);
            if (cs != null)
            {
                if (map.TryGetValue(cs.competeid, out CompeteBase compete) && compete.GetType() == typeof(TexasPromotionRace) && compete.joinrecords.ContainsKey(cs.userid))
                {
                    var info = ((TexasPromotionRace)compete).GetTableInfo();
                    info.userid = cs.userid;
                    foreach (var tableinfo in compete.tables.Values)
                    {
                        info.tableid = tableinfo.tableid;
                        var tempinfo = await tableinfo.Call<sc_compete_table_info>(compete.model.GameID, JsonUtils.Serialize(info), cs.userid);
                        if (tempinfo.result == 1) return JsonUtils.Serialize(tempinfo);
                    }
                    return JsonUtils.Serialize(new sc_compete_table_info { result = -4, message = "你未在比赛房间中,无法获取牌桌信息" });
                }
                return JsonUtils.Serialize(new sc_compete_table_info { result = -3, message = "比赛不存在或不支持该消息" });
            }
            return JsonUtils.Serialize(new sc_compete_table_info { result = -2, message = "消息错误" });
        }
        /// <summary> 进入观战 </summary>
        public async ETTask<string> Watch(string json)
        {
            var cs = JsonUtils.Deserialize<cs_watch>(json);
            if (cs == null) return JsonUtils.Serialize(new sc_watch { result = -1, message = "消息错误" });
            if (map.TryGetValue(cs.competeid, out CompeteBase compete) && compete.joinrecords.ContainsKey(cs.userid) && !compete.players.ContainsKey(cs.userid))
            {
                var tableinfo = compete.tables[RandomHelper.RandomNumber(0, compete.tables.Count)];
                cs.tableid = tableinfo.tableid;
                if ((await tableinfo.Call<sc_watch>(compete.model.GameID, JsonUtils.Serialize(cs))).result == 1) return JsonUtils.Serialize(new sc_watch { result = 1, message = "观战成功" });
                else return JsonUtils.Serialize(new sc_watch { result = -1, message = "观战失败" });
            }
            return JsonUtils.Serialize(new sc_watch { result = -2, message = "比赛不存在" });
        }
        /// <summary> 获取参赛列表 </summary>
        public async ETTask<string> GetCompeteRecord(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_record>(json);
            if (cs == null) return JsonUtils.Serialize(new sc_compete_record { result = -1, message = "消息错误" });
            var list = await BaseHelper.GetBaseAll<tcompeterelation>(x => x.playerid == cs.userid && x.IsEnable);
            List<int> ids = new List<int>();
            foreach (var item in list) ids.Add(item.competeid);
            var competes = await BaseHelper.GetBaseAll<tcompete>(x => x.id.IsIn(ids.ToArray()) && x.EndTime > TimeHelper.NullTime);
            int tablewincount = 0;
            int totalroundcount = 0;
            int finalcount = 0;
            List<CompeteRemark> remarks = new List<CompeteRemark>();
            foreach (var item in competes)
            {
                if (item.IsFinalsPlayer(cs.userid)) finalcount++;
                totalroundcount += item.GetPlayRoundCount(cs.userid);
                if (item.GetWinGold(cs.userid) > 0) tablewincount++;
                remarks.Add(item.GetRemark(cs.userid));
            }
            return JsonUtils.Serialize(new sc_compete_record { result = 1, FinalRoundCount = finalcount, infos = remarks, WinCount = tablewincount, TotalRoundCount = totalroundcount });
        }
        /// <summary> 获取参赛详情 </summary>
        public async ETTask<string> GetCompeteDetail(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_record_detail>(json);
            if (cs == null) return JsonUtils.Serialize(new sc_compete_record_detail { result = -1, message = "消息错误" });
            if (map.TryGetValue(cs.competeid, out CompeteBase cb)) return JsonUtils.Serialize(new sc_compete_record_detail { result = -2, message = "比赛还未结束" });
            var compete = await BaseHelper.GetBase<tcompete>(x => x.id == cs.competeid && x.EndTime > TimeHelper.NullTime);
            if (compete != null) return JsonUtils.Serialize(compete.GetDetail(cs.userid));

            else return JsonUtils.Serialize(new sc_compete_record_detail { result = -6, message = "比赛不存在" });
        }
    }
}
