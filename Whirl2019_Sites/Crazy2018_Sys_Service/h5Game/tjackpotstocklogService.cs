using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    public class tjackpotstocklogService : BaseService<tjackpotstocklog, int, h5game_2021Entities>, ItjackpotstocklogService
    {

        //        /// <summary>
        //        /// 获取每月总输赢
        //        /// </summary>
        //        /// <param name="userId"></param>
        //        /// <returns></returns>
        //        public List<tjackpotstocklog> GetMonthsTotalInfoData()
        //        {
        //            string sql = @"select a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes from tjackpotstocklog a 
        //                            where month(a.CreateTime)=month(now()) GROUP BY a.Levelid;";
        //            using (h5game_2021Entities db = new h5game_2021Entities())
        //            {
        //                var data = db.Database.SqlQuery<tjackpotstocklog>(sql).ToList();
        //                return data;
        //            }
        //        }
        //        /// <summary>
        //        /// 获取当日收税/吃分/吐分/吞吐率
        //        /// </summary>
        //        /// <param name="userId"></param>
        //        /// <returns></returns>
        //        public List<tjackpotstocklog> GetDayTotalInfoData()
        //        {
        //            string sql = @"select a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes,sum(a.Outcomes)/sum(a.Income) as comerate 
        //from tjackpotstocklog
        //a where DAY(a.CreateTime)=DAY(now());";
        //            using (h5game_2021Entities db = new h5game_2021Entities())
        //            {
        //                var data = db.Database.SqlQuery<tjackpotstocklog>(sql).ToList();
        //                return data;
        //            }
        //        }
        /// <summary>
        /// 获取结果当月 ，当日收税/吃分/吐分/吞吐率
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<TotalRecordView> GetTotalInfoData()
        {
            List<TotalRecordView> total = new List<TotalRecordView>();
            string sql = @"select a.userid, a.gameid ,a.levelid, IFNULL(a.wingold,0) as Mwingold,IFNULL(b.wingold,0) as Dwingold, IFNULL(a.tax,0) as tax, IFNULL(c.jackpot,0) as bonudpool,IFNULL(a.balanceScore,0) as balance,IFNULL(a.stock,0) as invgold, IFNULL(b.income,0) as income , IFNULL(b.outcomes ,0)as outcome, IFNULL( b.comerate*100,0) as rate,d.`Name` from (select a.UserId, a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes,b.balanceScore ,b.stock,sum(a.RaxScore) as tax  from tjackpotstocklog a LEFT JOIN tjackpotstock b on a.GameId=b.gameid where month(a.CreateTime)=month(now()) GROUP BY a.Levelid)  as a left join (select a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes,sum(a.Outcomes)/sum(a.Income) as comerate from tjackpotstocklog a where DAY(a.CreateTime)=DAY(now()) GROUP BY a.Levelid) as b on a.levelid=b.levelid LEFT JOIN tjackpot c on a.levelid=c.id LEFT JOIN tgamelevelinfo d on a.levelid=d.Id;";
            string sql2 = @"select 
IFNULL(a.userid,0) as userid, e.id as gameid,IFNULL(a.levelid,0) as levelid,d.Id, IFNULL(a.wingold,0) as Mwingold,IFNULL(b.wingold,0) as Dwingold, IFNULL(a.tax,0) as tax, IFNULL(c.jackpot,0) as bonudpool,IFNULL(a.balanceScore,0) as balance,IFNULL(a.stock,0) as invgold, IFNULL(b.income,0) as income , IFNULL(b.outcomes ,0)as outcome, IFNULL( b.comerate*100,0) as rate,d.`Name`

from tgamelevelinfo d LEFT JOIN tgameinfo e on d.gameid=e.id 
 LEFT JOIN (select a.UserId, a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes,b.balanceScore ,b.stock,sum(a.RaxScore) as tax  from tjackpotstocklog a LEFT JOIN tjackpotstock b on a.GameId=b.gameid where month(a.CreateTime)=month(now()) GROUP BY a.Levelid)  as a on d.Id=a.levelid
LEFT JOIN  (select a.gameid,a.levelid,sum(a.WinGold) as wingold,sum(a.Income) as income,sum(a.Outcomes) as outcomes,sum(a.Outcomes)/sum(a.Income) as comerate from tjackpotstocklog a where DAY(a.CreateTime)=DAY(now()) GROUP BY a.Levelid) as b on a.levelid=b.levelid LEFT JOIN tjackpot c on a.levelid=c.id WHERE e.type!=2 ORDER BY a.WinGold desc";
           
            
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                total = db.Database.SqlQuery<TotalRecordView>(sql2).ToList();

                return total;
            }
        }
        /// <summary>
        /// 获取某个游戏当日库存
        /// </summary>
        /// <returns></returns>
        public List<StockLog> GetDayStockDateTime(int Levelid)
        {
            List<StockLog> stocks = new List<StockLog>();
            string sql = @"select a.CreateTime,(b.stock+a.WinGold+RaxScore) as stock from tjackpotstocklog a 
LEFT JOIN tjackpotstock b on a.GameId=b.gameid where DAY(a.CreateTime)=DAY(now()) and a.Levelid={0} ORDER BY a.CreateTime";
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                stocks = db.Database.SqlQuery<StockLog>(sql, Levelid).ToList();
            }
            return stocks;
        }
        /// <summary>
        /// 获取某个游戏当日库存的日期
        /// </summary>
        /// <returns></returns>
        public List<StockTime> GetDayTime(int Levelid)
        {
            List<StockTime> stocks = new List<StockTime>();
            string sql = @"select a.CreateTime from tjackpotstocklog a 
LEFT JOIN tjackpotstock b on a.GameId=b.gameid where DAY(a.CreateTime)=DAY(now()) and a.Levelid={0} ORDER BY a.CreateTime";
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                stocks = db.Database.SqlQuery<StockTime>(sql, Levelid).ToList();
            }
            return stocks;
        }
        /// <summary>
        /// 获取某个游戏当日库存的值
        /// </summary>
        /// <returns></returns>
        public List<StockVal> GetDayStock(int Levelid)
        {
            List<StockVal> stocks = new List<StockVal>();
            string sql = @"select (b.stock+a.WinGold+RaxScore) as stock from tjackpotstocklog a 
LEFT JOIN tjackpotstock b on a.GameId=b.gameid where DAY(a.CreateTime)=DAY(now()) and a.Levelid={0} ORDER BY a.CreateTime";
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                stocks = db.Database.SqlQuery<StockVal>(sql, Levelid).ToList();
            }
            return stocks;
        }

        /// <summary>
        /// 获取历史吞吐 目前七天
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        public DataResults<TjackpotStockLogView> GetHistoryStockInAndOut(int pageindex,int pagesize,int Levelid) {
            DataResults<TjackpotStockLogView> stocks = new DataResults<TjackpotStockLogView>();
         
            string countsql = @"select a.*,b.`Name` from tjackpotstocklog a LEFT JOIN tgamelevelinfo b on a.Levelid=b.Id where a.Levelid={0} and DAY(a.CreateTime)>DAY(NOW())-7;";
            string sql = @"select a.*,b.`Name` from tjackpotstocklog a LEFT JOIN tgamelevelinfo b on a.Levelid=b.Id where a.Levelid={0} and DAY(a.CreateTime)>DAY(NOW())-7 LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                
                stocks.Data = db.Database.SqlQuery<TjackpotStockLogView>(sql, Levelid).ToList();
                stocks.TotalCount = db.Database.SqlQuery<TjackpotStockLogView>(countsql, Levelid).Count();
            }
            return stocks;
        }
        /// <summary>
        /// 获取历史库存 目前七天
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        public DataResults<TjackpotStockLogView> GetHistoryStock(int pageindex, int pagesize, int Levelid)
        {
            DataResults<TjackpotStockLogView> stocks = new DataResults<TjackpotStockLogView>();
            string countsql = @"select a.CreateTime, (c.stock+a.WinGold+a.RaxScore) as stock from  tjackpotstocklog a LEFT JOIN tgamelevelinfo b  on a.Levelid=b.Id LEFT JOIN tjackpotstock c on a.GameId=c.gameid where MONTH(a.CreateTime)>MONTH(NOW())-3 and a.Levelid={0}";
            string sql = @"select a.CreateTime, (c.stock+a.WinGold+a.RaxScore) as stock from  tjackpotstocklog a LEFT JOIN tgamelevelinfo b  on a.Levelid=b.Id LEFT JOIN tjackpotstock c on a.GameId=c.gameid where MONTH(a.CreateTime)>MONTH(NOW())-3 and a.Levelid={0} LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;

            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                stocks.TotalCount = db.Database.SqlQuery<TjackpotStockLogView>(countsql, Levelid).Count();
                stocks.Data = db.Database.SqlQuery<TjackpotStockLogView>(sql, Levelid).ToList();
            }
            return stocks;
        }
        /// <summary>
        /// 获取用户流水
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        public DataResults<TJackpotUserLogView> GetUserHistoryStock(int userid, string beforetime, string aftertime, int pageindex, int pagesize)
        {
            DataResults<TJackpotUserLogView> stocks = new DataResults<TJackpotUserLogView>();
            string befstr = "";
            string aftstr = "";
            if (!string.IsNullOrWhiteSpace(beforetime))
            {
                befstr = "and a.CreateTime<" + beforetime;
            }
            if (!string.IsNullOrWhiteSpace(aftertime))
            {
                aftstr = "and a.CreateTime>" + aftertime;
            }
            string countsql = @"select a.*,b.`Name`,c.`name` as GameName,d.wechatName as UserName from  tjackpotstocklog a 
LEFT JOIN tgamelevelinfo b  on a.Levelid=b.Id 
LEFT JOIN tgameinfo c on a.GameId=c.id 
LEFT JOIN tuser d on a.userid
=d.UserID where a.UserId={0} " + befstr + aftstr; 
            string sql = countsql + befstr + aftstr+" LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;

            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                stocks.TotalCount = db.Database.SqlQuery<TJackpotUserLogView>(countsql, userid).Count();
                stocks.Data = db.Database.SqlQuery<TJackpotUserLogView>(sql, userid).ToList();
            }
            return stocks;
        }
    }
}
