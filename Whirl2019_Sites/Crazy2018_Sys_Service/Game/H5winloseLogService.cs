using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity.Game;

namespace Crazy2018_Sys_Service.Game
{
    public class H5winloseLogService : BaseService<th5winloselog, int, texas_2021Entities>, IH5winloseLogService
    {
        public DataResults<LoseWinview> GetlastWeekBonus(DPagePara page, DateTime wStart, DateTime wEnd)
        {
            DataResults<LoseWinview> result = new DataResults<LoseWinview>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    string uwhere = "";
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords,out int uid);
                        uwhere += $" and  a.UserId={uid}";
                    }

                    string orderby = $"  ORDER BY Gold desc  limit {(page.PageIndex - 1) * page.PageSize + "," + page.PageSize}";
                    string sql = $@"SELECT SUM(Gold)/100 Gold,UserId,cc.wechatName,cc.CreateTime from(SELECT a.UserId,a.Gold,b.wechatName,a.CreateTime  
                                    from th5winloselog a join tuser b on a.UserId=b.UserID where a.IsRebate=0  {uwhere}  and a.CreateTime>='{wStart}' and a.CreateTime<'{wEnd}') cc GROUP BY cc.UserId";

                    result.TotalCount = dbhelper.Database.SqlQuery<LoseWinview>(sql).ToList().Count;
                    result.Data = dbhelper.Database.SqlQuery<LoseWinview>(sql + orderby).ToList();
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<LoseWinview>();
                result.Message = "获取失败!";
            }
            return result;
        }
        /// <summary>
        /// 获取用户红利
        /// </summary>
        /// <param name="wStart"></param>
        /// <param name="wEnd"></param>
        /// <param name="uid"></param>
        /// <returns></returns>
        public List<LoseWinview> GetUserWeekBonus(DateTime wStart, DateTime wEnd, int uid = 0)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                string uwhere = "";
                if (uid > 0) uwhere += $" and  a.UserId={uid}";
                
                string sql = $@"SELECT SUM(Gold)/100 Gold,UserId,cc.wechatName,cc.CreateTime from(SELECT a.UserId,a.Gold,b.wechatName,a.CreateTime  
                                    from th5winloselog a join tuser b on a.UserId=b.UserID 
                                where a.IsRebate=0 {uwhere} and a.CreateTime>='{wStart}'
                                and a.CreateTime<'{wEnd}') cc GROUP BY cc.UserId";

                return dbhelper.Database.SqlQuery<LoseWinview>(sql).ToList();
            }
        }

        public bool UpdateIsRebate(int uid, int Rebate)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                string sql = $"update th5winloselog set IsRebate={Rebate} where UserId={uid}";
                return dbhelper.Database.ExecuteSqlCommand(sql) > 0 ? true : false;
            }
        }

        public bool UpdateIsRebateBytime(DateTime stime, DateTime etime)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                string sql = $"update th5winloselog set IsRebate=1 where CreateTime>='{stime}' and CreateTime<'{etime}'";
                return dbhelper.Database.ExecuteSqlCommand(sql) > 0 ? true : false;
            }
        }


        public DataResults<th5winloselogView> Geth5loseinfo(DPagePara page)
        {
            DataResults<th5winloselogView> result = new DataResults<th5winloselogView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            Expression<Func<th5winloselog, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                fun = fun.And(x => x.UserId.ToString() == page.Keywords);
            }

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var userinfo = dbhelper.tuser.ToList();
                    var gameinfo = dbhelper.tgameinfo.ToList();

                    IQueryable<th5winloselog> data = dbhelper.th5winloselog.Where(fun);
                        var _data = (from a in data.ToList()
                                     join b in userinfo on a.UserId equals b.UserID
                                     join c in gameinfo on a.GameId equals c.id
                                     orderby a.Id descending
                                     select new th5winloselogView
                                     {
                                         Id = (int)a.Id,
                                         Gold = (decimal)a.Gold/100,
                                         afterGold = (decimal)a.afterGold/100,
                                         beforeGold = (decimal)a.beforeGold/100,
                                         IsRebate = (int)a.IsRebate,
                                         GameId = (int)a.GameId,
                                         GameName = c.name,
                                         UserId = (int)a.UserId,
                                         UserName = b.wechatName,
                                         CreateTime = a.CreateTime.ToString()


                                     }).ToList();


                        result.TotalCount = _data.Count();
                        result.Data = _data.ToList();
                        result.Message = "获取成功";
                        return result;
                    
                }
            }
            catch (Exception ex)
            {
                Log.Error("获取房间配置", ex.Message);
                result.Message = "fail";
                return result;
            }
        }
    }
}
