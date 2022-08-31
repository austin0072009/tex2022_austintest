using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;
using EntityFramework.Extensions;
using System.Linq.Expressions;
using MySql.Data.MySqlClient;
using System.Data;

namespace Crazy2018_Sys_Service
{
    public class GUserAgentService : BaseService<tuser, int, texas_2021Entities>, IGUserAgentService
    {
        
        public void StatisticsHands()
        {
            using (texas_2021Entities db = new texas_2021Entities())
            {
                var agent2019 = (from a in db.tuser
                                 join b in
                                 db.tuseragent2019 on a.UserID equals b.UserID where a.isRobot == 0
                                 select new temtuseragentInter
                                 {
                                     UserID = b.UserID,
                                     UserName = a.wechatName,
                                     GameId = 0,
                                     isRobot = a.isRobot.Value,
                                     watergoldadd = b.watergoldadd,
                                     watergoldreduce = b.watergoldreduce,
                                     GoldCommission = (long)b.GoldCommission + (long)b.GoldC_pot,
                                     GoldHistoryCommission = (long)b.GoldHistoryCommission,
                                     TexasCount = b.TexasCount,
                                     WhirlCount = b.WhirlCount
                                 }).ToList().Select(b => new temtuseragentInter
                                 {
                                     UserID = b.UserID,
                                     UserName = b.UserName,
                                     GameId = 0,
                                     isRobot = b.isRobot,
                                     watergoldadd = b.watergoldadd,
                                     watergoldreduce = b.watergoldreduce,
                                     GoldCommission = b.GoldCommission,
                                     GoldHistoryCommission = b.GoldHistoryCommission,
                                     TexasCount = b.TexasCount,
                                     TexasCountarr = (b.TexasCount == "" || b.TexasCount == "\"\"") ? new List<float> { 0, 0, 0, 0, 0, 0 } : JsonHelper.JSONToObject<List<float>>(b.TexasCount),
                                     WhirlCountarr = (b.WhirlCount == ""|| b.WhirlCount == "\"\"") ? new List<float> { 0, 0, 0, 0, 0,0 } : JsonHelper.JSONToObject<List<float>>(b.WhirlCount)
                                 }).ToList();

                Random ran = new Random();
                var data = (from t in agent2019
                           //join b in oldData on t.UserID equals b.UserId
                           //into c
                           //from aa in c.DefaultIfEmpty()
                           select new temtuseragent
                           {
                               UserID = t.UserID,
                               UserName = t.UserName,
                               Commission =(t.isRobot == 1 && t.UserID <= 10984) ? ran.Next(450,650)*100:t.GoldHistoryCommission + t.GoldCommission,
                               UserProfit = t.watergoldadd - t.watergoldreduce,
                               GameId = 0,
                               pos1Count = (int)(t.TexasCountarr[0] + t.WhirlCountarr[0]),
                               pos2Count = (int)(t.TexasCountarr[1] + t.WhirlCountarr[1]),
                               pos5Count = (int)(t.TexasCountarr[2] + t.WhirlCountarr[2]),
                               pos10Count = (int)(t.TexasCountarr[3] + t.WhirlCountarr[3]),
                               pos20Count = (int)(t.TexasCountarr[4] + t.WhirlCountarr[4]),
                               pos50Count = (int)(t.TexasCountarr[5] + t.WhirlCountarr[5])
                           }).ToList();

                //删除 tgameuserrank temtuseragent非机器人用户 
                string sqlagent = @"delete from tgameuserrank  where userid not in(select userid from (select distinct a.userid from tuser a join tgameuserrank b on a.userid = b.userid where a.isrobot = 1) as a );
                                    delete from temtuseragent  where UserID not in(select userid from (SELECT distinct y.UserID FROM tuser t JOIN temtuseragent y ON t.UserID = y.UserID WHERE t.isRobot = 1) as a )";

                db.Database.ExecuteSqlCommand(sqlagent);
               // db.Database.ExecuteSqlCommand("TRUNCATE TABLE tgameuserrank;delete from temtuseragent;");//truncate table 直接删除数据无法筛选 速度快；delete 删除数据可筛选 就是慢

                db.temtuseragent.AddRange(data);
                db.SaveChanges();
                string sql = @"SET @row_number = 0;
                INSERT INTO tgameuserrank(
                UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                SELECT UserID,UserName,Commission,(@row_number:=@row_number+1) AS Rank,0,(select Val from tsysconfig where `Key`=@row_number and `Dec`='红利奖励'),NOW(),GameId
                FROM temtuseragent where GameId=0
                ORDER BY Commission DESC limit 0,20;

                SET @row_number = 0;
                INSERT INTO tgameuserrank(
                UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                SELECT UserID,UserName,UserProfit,(@row_number:=@row_number+1) AS Rank,-1,(select Val from tsysconfig where `Key`=@row_number and `Dec`='盈利奖励'),NOW(),GameId
                FROM temtuseragent where GameId=0
                ORDER BY UserProfit DESC  limit 0,40;";

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos1Count,(@row_number:=@row_number+1) AS Rank,1,(select Val from tsysconfig where `Key`=@row_number and `Dec`='1皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos1Count DESC  limit 0,40;

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos2Count,(@row_number:=@row_number+1) AS Rank,2,(select Val from tsysconfig where `Key`=@row_number and `Dec`='2皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos2Count DESC  limit 0,40;

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos5Count,(@row_number:=@row_number+1) AS Rank,5,(select Val from tsysconfig where `Key`=@row_number and `Dec`='5皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos5Count DESC  limit 0,40;

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos10Count,(@row_number:=@row_number+1) AS Rank,10,(select Val from tsysconfig where `Key`=@row_number and `Dec`='10皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos10Count DESC  limit 0,40;

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos20Count,(@row_number:=@row_number+1) AS Rank,20,(select Val from tsysconfig where `Key`=@row_number and `Dec`='20皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos20Count DESC  limit 0,40;

                //SET @row_number = 0;
                //INSERT INTO tgameuserrank(
                //UserId,UserName,TotalHand,Rank,RankType,Prize,CreateTime,GameId)
                //SELECT UserID,UserName,pos50Count,(@row_number:=@row_number+1) AS Rank,50,(select Val from tsysconfig where `Key`=@row_number and `Dec`='50皮奖励'),NOW(),GameId
                //FROM temtuseragent
                //ORDER BY pos50Count DESC  limit 0,40;";

                db.Database.ExecuteSqlCommand(sql);
                ///当数据增加后 重新排序红利和大神排榜  againrank_gold 和againrank_bonus 是 mysql中的构造函数
                string againrank_str = "call againrank_gold();call againrank_bonus()";
                db.Database.ExecuteSqlCommand(againrank_str);
            }
        }
    }
}
