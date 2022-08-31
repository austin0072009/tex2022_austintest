using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Net;
using System.Threading.Tasks;

/// <summary>
/// 
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class ttableUserLogEx
    {

        /// <summary>
        ///    一桌完统计数据
        /// </summary>
        /// <param name="guid">桌号</param>
        /// <param name="gameover">是否结束了</param>
        /// <param name="numpertable">一桌有多少人</param>
        public static async void SetRateDataByTableNum(long TableRecordID, bool gameover, int numpertable)
        {
            if (!gameover) return;
            List<ttableUserLog> dataList = new List<ttableUserLog>();
            DbDataFilter filter = new DbDataFilter();
            filter.Condition = String.Format("TableLogIdx={0}", TableRecordID);
            var sender = DataSyncManager.TryReceiveSql<ttableUserLog>(new ttableUserLog().GetSchema(), filter, out dataList);
            if (!sender) return; 
            if (dataList == null || !dataList.Any()) return; 
            //写入排行信息
            dataList = dataList.FindAll(w => w._isover);
            foreach (ttableUserLog moneylog in dataList)
            {  
                var userRank = new trank();
                userRank =await BaseHelper.GetBase<trank>(moneylog.UserID);
                if (userRank == null)
                {
                    trank rank = new trank() { UserID = moneylog.UserID };
                    if (moneylog._win)
                        rank.ScoreWin++;
                    else
                        rank.ScoreLost++;
                    BaseHelper.AddOrUpdateBase(rank);
                }
                else
                {
                    userRank =await BaseHelper.GetBase<trank>(moneylog.UserID);
                    userRank.ModifyLocked(() =>
                    {
                        if (moneylog._win)
                            userRank.ScoreWin++;
                        else
                            userRank.ScoreLost++;
                        if (userRank.records == null)
                            userRank.records = new CacheList<Record>();
                        BaseHelper.AddOrUpdateBase(userRank);
                    });
                }
            }
        }

        /// <summary>
        /// 获取我的战绩列表
        /// </summary>
        /// <returns></returns>
        public static async Task<List<CombatGainInfoSD>> GetCombatGainList(int _userid)
        {
            List<CombatGainInfoSD> _CombatGainList = new List<CombatGainInfoSD>();

            //取指定userid最近一天的一次FJ结算OVER的记录 
            trank rank =await BaseHelper.GetBase<trank>(_userid);
            if (rank == null || !rank.records.Any())
                return _CombatGainList;
            List<Record> records = rank.records.OrderByDescending(w => w.CreateDate).Take(10).ToList();
            foreach (var record in records)
            {
                CombatGainInfoSD _tempGain = new CombatGainInfoSD();
                _tempGain.tablenum = 111111;
                _tempGain.bgamble = 1;
                _tempGain._stime = record.CreateDate.ToString("yyyy-MM-dd HH:mm:ss");
                _tempGain._winorlost = 220; 
                _CombatGainList.Add(_tempGain);
            }

            return _CombatGainList;
        }
         
    }



}

