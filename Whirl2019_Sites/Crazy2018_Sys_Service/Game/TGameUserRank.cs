using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity.GameCore;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{
   //public class TGameUserRank: BaseService<tgameuserrank, int, texas_2021Entities>, ITGameUserRank
   // {
   //     /// <summary>
   //     /// 添加大神排行
   //     /// </summary>
   //     /// <param name="userId"></param>
   //     /// <param name="username"></param>
   //     /// <param name="gameid"></param>
   //     /// <param name="rank"></param>
   //     /// <param name="ranktype"></param>
   //     /// <param name="prize"></param>
   //     /// <param name="TotalHand"></param>
   //     /// <returns></returns>
   //     public  DataResult Addtgameuserrank(int userId, string username, int gameid, int rank, int ranktype, int prize, int TotalHand)
   //     {
   //         DataResult result = new DataResult();
   //         var isrank = IsAppRanking(userId, rank, -1, TotalHand);
   //         if (isrank.Code == (int)Status.Success)
   //         {
   //             using (texas_2021Entities db = new texas_2021Entities())
   //             {
   //                 tgameuserrank ttnum = new tgameuserrank();
   //                 ttnum.UserId = userId;
   //                 ttnum.GameId = gameid;
   //                 ttnum.UserName = username;
   //                 ttnum.Rank = rank;
   //                 ttnum.RankType = ranktype;
   //                 ttnum.Prize = prize;
   //                 ttnum.TotalHand = TotalHand * 100;
   //                 ttnum.CreateTime = DateTime.Now;
   //                 db.tgameuserrank.Add(ttnum);
   //                 // 调用构造函数 
   //                 string sql = "call update_goldrank(@id)";
   //                 db.Database.ExecuteSqlCommand(sql, new MySqlParameter("@id", rank));
   //                 db.SaveChanges();
   //                 ResetRanking(ranktype);
   //             }
   //             result.Message = "添加成功";
   //             return result;
   //         }
   //         else return isrank;


   //     }

   //     /// <summary>
   //     /// 得到大神排行数据
   //     /// </summary>
   //     /// <param name="page"></param>
   //     /// <returns></returns>
   //     public  DataResults<tgameuserrankView> GetTGameUserRankList(DPagePara page) {

   //         DataResults<tgameuserrankView> result = new DataResults<tgameuserrankView>();
   //         if (page == null) page = new DPagePara();
   //         result.Keywords= page.Keywords;
   //         result.PageIndex = page.PageIndex;
   //         result.PageSize = page.PageSize;
   //         Expression<Func<tgameuserrank, bool>> fun = w => w != null;
   //         try
   //         {
   //             using (texas_2021Entities db = new texas_2021Entities())
   //             {
   //                 IQueryable<tgameuserrank> data = db.tgameuserrank;
   //                 if (!string.IsNullOrEmpty(page.Keywords))
   //                 {
   //                     //AddNamedata = data.Where(st => st.AddName == page.Keywords);

   //                     fun = fun.And(w => w.UserId.ToString().Contains(page.Keywords) || w.GameId.ToString().Contains(page.Keywords) || w.Id.ToString() == page.Keywords);
   //                 }
   //                 fun = fun.And(w => w.RankType == page.ChangeType);
   //                 var _data = from a in data.Where(fun)
   //                             join b in db.tuser on a.UserId equals b.UserID
   //                             //  join c in db.tgameinfo on a.GameId equals c.id
   //                             orderby a.TotalHand descending
   //                             select new tgameuserrankView
   //                             {
   //                                 Id = a.Id,
   //                                 UserId = a.UserId,
   //                                 UserName = a.UserName,
   //                                 GameId = a.GameId,
   //                                 Rank = a.Rank,
   //                                 RankType = a.RankType,
   //                                 No = a.No,
   //                                 Prize = a.Prize,
   //                                 IsRobot = b.isRobot == 0 ? "用户" : "机器人",
   //                                 TotalHand = a.TotalHand/100,
   //                                 CreateTime = a.CreateTime == null ? "" : a.CreateTime.ToString()
   //                             };


   //                 result.TotalCount = _data.Count();
   //                 result.Data = _data.OrderBy(t=>t.Rank).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
   //                 result.Message = "获取成功";
   //                 return result;
   //             }
   //         }
   //         catch (Exception ex)
   //         {

   //             result.Message = "fail";
   //             return result;
   //         }
   //     }

   //     /// <summary>
   //     /// 增加红利排行
   //     /// </summary>
   //     /// <param name="userId"></param>
   //     /// <param name="username"></param>
   //     /// <param name="gameid"></param>
   //     /// <param name="rank"></param>
   //     /// <param name="ranktype"></param>
   //     /// <param name="prize"></param>
   //     /// <param name="TotalHand"></param>
   //     /// <returns></returns>
   //     public DataResult AddBonusRanging(int userId, string username, int gameid, int rank, int prize, int TotalHand)
   //     {
   //         DataResult result = new DataResult();
   //         var isrank = IsAppRanking(userId, rank, 0, TotalHand);
   //         if(isrank.Code== (int)Status.Success)
   //         {
   //             using (texas_2021Entities db = new texas_2021Entities())
   //             {
   //                 tgameuserrank ttnum = new tgameuserrank();
   //                 ttnum.UserId = userId;
   //                 ttnum.GameId = gameid;
   //                 ttnum.UserName = username;
   //                 ttnum.Rank = rank;
   //                 ttnum.RankType = 0;
   //                 ttnum.Prize = prize;
   //                 ttnum.TotalHand = TotalHand * 100;
   //                 ttnum.CreateTime = DateTime.Now;
   //                 db.tgameuserrank.Add(ttnum);
   //                 // 调用构造函数 
   //                 string sql = "call update_rankids(@id)";
   //                 db.Database.ExecuteSqlCommand(sql, new MySqlParameter("@id", rank));

   //                 db.SaveChangesAsync();
   //             }
   //             ResetRanking(0);
   //             result.Message = "添加成功";
   //             return result;
   //         }
   //         else
   //         {
   //             return isrank;
   //         }
   //     }

   //     /// <summary>
   //     /// 得到红利排行数据
   //     /// </summary>
   //     /// <param name="page"></param>
   //     /// <returns></returns>
   //     public DataResults<tgameuserrankView> GetTGameUserRankList(DPagePara page,int IsRankType)
   //     {

   //         DataResults<tgameuserrankView> result = new DataResults<tgameuserrankView>();
   //         if (page == null) page = new DPagePara();
   //         result.Keywords = page.Keywords;
   //         result.PageIndex = page.PageIndex;
   //         result.PageSize = page.PageSize;
   //         Expression<Func<tgameuserrank, bool>> fun = w => w != null && w.RankType == IsRankType && w.TotalHand != 0;
   //         try
   //         {
   //             using (texas_2021Entities db = new texas_2021Entities())
   //             {
   //                 IQueryable<tgameuserrank> data = db.tgameuserrank;
   //                 if (!string.IsNullOrEmpty(page.Keywords))
   //                 {
   //                     //AddNamedata = data.Where(st => st.AddName == page.Keywords);

   //                     fun = fun.And(w => w.UserId.ToString().Contains(page.Keywords) || w.GameId.ToString().Contains(page.Keywords) || w.Id.ToString() == page.Keywords);
   //                 }
   //                 var _data = from a in data.Where(fun)
   //                             join b in db.tuser on a.UserId equals b.UserID
   //                             //  join c in db.tgameinfo on a.GameId equals c.id
   //                             orderby a.CreateTime descending
   //                             select new tgameuserrankView
   //                             {
   //                                 Id = a.Id,
   //                                 UserId = a.UserId,
   //                                 UserName = a.UserName,
   //                                 GameId = a.GameId,
   //                                 Rank = a.Rank,
   //                                 RankType = a.RankType,
   //                                 No = a.No,
   //                                 Prize = a.Prize,
   //                                 TotalHand = a.TotalHand / 100,
   //                                 IsRobot = b.isRobot == 0 ? "用户" : "机器人",
   //                                 CreateTime = a.CreateTime == null ? "" : a.CreateTime.ToString()
   //                             };


   //                 result.TotalCount = _data.Count();
   //                 result.Data = _data.OrderBy(t => t.Rank).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
   //                 result.Message = "获取成功";
   //                 return result;
   //             }
   //         }
   //         catch (Exception ex)
   //         {
   //             result.Message = "fail";
   //             return result;
   //         }
   //     }

   //     /// <summary>
   //     /// 删除
   //     /// </summary>
   //     /// <param name="ids"></param>
   //     /// <returns></returns>
   //     public DataResult Deleteuserrank(string ids) {

   //         DataResult result = new DataResult();
   //         if (string.IsNullOrEmpty(ids))
   //         {
   //             result.Code = (int)Status.fail;
   //             result.Message = "id不能为空";
   //             return result;
   //         }
   //         var noticeIds = ids.Split(',');
   //         int ranktype = -2;
   //         using (texas_2021Entities db = new texas_2021Entities())
   //         {
   //             foreach (var item in noticeIds)
   //             {
   //                 if (string.IsNullOrEmpty(item)) continue;
   //                 int id = 0;
   //                 int.TryParse(item, out id);
   //                 var emyitty = db.tgameuserrank.Find(id);
   //                 ranktype = emyitty.RankType.Value;
   //                 db.tgameuserrank.Remove(emyitty);
   //             }
   //             db.SaveChanges();
   //             ResetRanking(ranktype);
   //         }
   //         result.Message = "删除成功";
   //         return result;
   //     }

   //     public DataResult IsAppRanking(int UserId, int rank, int type,int money)
   //     {
   //         DataResult rdata = new DataResult();

   //         var ownrank = GetEntityByWhere(t => t.UserId == UserId &&  t.RankType == type);
   //         if (ownrank!=null)
   //             DelEntity(ownrank);

   //         if (rank!=1)
   //         {
   //             var lastrank = GetEntityByWhere(t => t.RankType == type && t.Rank == rank-1);//找上一名
   //             if (lastrank!=null)
   //             {
   //                 if (money*100  > lastrank.TotalHand)
   //                     {
   //                     rdata.Code = (int)Status.fail;
   //                     rdata.Message = "必须比上一名的金额小!";
   //                     return rdata;
   //                 }
   //             }
   //         }
   //         if (rank == 1)
   //         {
   //             var lastrank = GetEntityByWhere(t => t.RankType == type && t.Rank == 2);//找下一名
   //             if (lastrank!=null)
   //             {
   //                 if (money * 100 < lastrank.TotalHand)
   //                 {
   //                     rdata.Code = (int)Status.fail;
   //                     rdata.Message = "必须比下一名的金额大!";
   //                     return rdata;
   //                 }
   //             }
   //         }
   //         rdata.Code = (int)Status.Success;
   //         rdata.Message = "success";
   //         return rdata;
   //     }

   //     public bool ResetRanking(int RankType)
   //     {
   //         var rankdata = GetEntityLisrByWhere(t=>t.RankType== RankType).OrderByDescending(t => t.TotalHand).ToList();
   //         int rank = 0;
   //         rankdata.ForEach(t=> 
   //         {
   //             rank++;
   //             if (t.Rank != rank)
   //             {
   //                 t.Rank = rank;
   //                 UpdateAsync(t);
   //             }
   //         });
   //         return true;
   //     }
   // }
}
