using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    /// <summary>
    /// 奖池日志
    /// </summary>
   public class tjackpotlogService:BaseService<tjackpotlog,int, h5game_2021Entities>, ItjackpotlogService
    {

        /// <summary>
        /// 获取游戏日志
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="gameid"></param>
        /// <param name="pagesize"></param>
        /// <param name="pageindex"></param>
        /// <returns></returns>
        public DataResults<TjackpotLogView> GetJackPotLog(string keyword, int gameid, int pageindex, int pagesize)
        {

            DataResults<TjackpotLogView> stocks = new DataResults<TjackpotLogView>();
            string countsql = @"select a.*,IFNULL(b.`name`,"") as GameName,IFNULL(c.wechatName,"") as UserName ,IFNULL(d.`Name`,"") as RoomName from tjackpotlog a LEFT JOIN tgameinfo b on a.GameId = b.id LEFT JOIN tuser c on a.UserId=c.UserID LEFT JOIN tgamelevelinfo d on a.RoomId=d.Id where a.gameid not in (51,52) AND a.GameId={0} and c.wechatName like '%{1}%'";
            string sql = @"select a.*,IFNULL(b.`name`,'') as GameName,IFNULL(c.wechatName,'') as UserName ,IFNULL(d.`Name`,'') as RoomName 
from tjackpotlog a 
LEFT JOIN tgameinfo b on a.GameId = b.id 
LEFT JOIN tuser c on a.UserId=c.UserID
LEFT JOIN tgamelevelinfo d on a.RoomId=d.Id 
where a.gameid not in (51,52) AND a.GameId={0} and c.wechatName like  '%{1}%' ORDER BY a.CreateTime desc  
LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;
            using (h5game_2021Entities db = new h5game_2021Entities())
            {

                stocks.Data = db.Database.SqlQuery<TjackpotLogView>(sql, gameid, keyword).ToList();
                stocks.TotalCount = db.Database.SqlQuery<TjackpotLogView>(countsql, gameid, keyword).Count();
            }
            return stocks;
        }

        /// <summary>
        /// 获取用户游戏日志
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="gameid"></param>
        /// <param name="pagesize"></param>
        /// <param name="pageindex"></param>
        /// <returns></returns>
        public DataResults<TjackpotLogView> GetUserJackPotLog(int userid,string beforetime,string aftertime, int pagesize, int pageindex)
        {

            DataResults<TjackpotLogView> stocks = new DataResults<TjackpotLogView>();
            string befstr = "";
            string aftstr = "";
            if (!string.IsNullOrWhiteSpace(beforetime))
            {
                befstr = "and a.CreateTime<"+beforetime;
            }
            if (!string.IsNullOrWhiteSpace(aftertime))
            {
                aftstr = "and a.CreateTime>"+aftertime;
            }
            string countsql = @"select a.*,IFNULL(b.`name`,'') as GameName,IFNULL(c.wechatName,'') as UserName ,IFNULL(d.`Name`,'') as RoomName 
from tjackpotlog a
LEFT JOIN tgameinfo b on a.GameId = b.id
LEFT JOIN tuser c on a.UserId=c.UserID 
LEFT JOIN tgamelevelinfo d on a.RoomId=d.Id 
where a.gameid not in (51,52) AND a.UserId={0} "+befstr+aftstr;

            string sql = @"select a.*,IFNULL(b.`name`,'') as GameName,IFNULL(c.wechatName,'') as UserName ,IFNULL(d.`Name`,'') as RoomName 
from tjackpotlog a LEFT JOIN tgameinfo b on a.GameId = b.id 
LEFT JOIN tuser c on a.UserId=c.UserID 
LEFT JOIN tgamelevelinfo d on a.RoomId=d.Id 
where a.gameid not in (51,52) AND a.UserId={0} "+befstr+aftstr+ " ORDER BY a.CreateTime desc  LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;
            using (h5game_2021Entities db = new h5game_2021Entities())
            {

                stocks.Data = db.Database.SqlQuery<TjackpotLogView>(sql, userid, aftertime, beforetime).ToList();
                stocks.TotalCount = db.Database.SqlQuery<TjackpotLogView>(countsql, userid, aftertime, beforetime).Count();
            }
            return stocks;
        }
    }
}
