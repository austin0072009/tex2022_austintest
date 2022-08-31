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

namespace Crazy2018_Sys_Service
{
    public class StatisticsGoldService : BaseService<tgoldstatistics, int, texas_2021Entities>, IStatisticsGoldService
    {
        public DataResults<StatisticsGoldView> GetStatisticsGoldData(DPage page, int gameId = -4, string sTime = "", string eTime = "")
        {
            DataResults<StatisticsGoldView> result = new DataResults<StatisticsGoldView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tgoldstatistics, bool>> fun = w => w != null;
            Expression<Func<tgameinfo, bool>> fun1 = w => w != null;
            try
            {
                if (gameId > -4)
                    fun1 = w => w != null && w.id == gameId;
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int tempGameId = 0;
                    int.TryParse(page.Keywords, out tempGameId);
                    if (tempGameId >= 0)
                        fun1 = w => w != null && w.id == tempGameId;
                }
                if (!string.IsNullOrEmpty(sTime) && !string.IsNullOrEmpty(eTime))
                {
                    DateTime Tstime = DateTime.Now;
                    DateTime Tetime = DateTime.Now;
                    DateTime.TryParse(sTime, out Tstime);
                    DateTime.TryParse(eTime, out Tetime);
                    Tetime = Tetime.AddHours(23);
                    fun = w => w != null && w.CreateTime.Value >= Tstime && w.CreateTime.Value <= Tetime;
                }
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {

                    var gameInfo = dbhelper.tgameinfo.Where(fun1);
                    var statisGoldInfo = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    var join = from s in statisGoldInfo
                               join g in gameInfo on s.GameId equals g.id
                               orderby s.CreateTime descending
                               select new StatisticsGoldView
                               {
                                   CreatTime = s.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                                   GameId = s.GameId.Value,
                                   GameName = g.name,
                                   Remark = s.Remark,
                                   TimeInterval = s.TimeInterval,
                                   TotalGold = s.TotalGold.Value,
                                   ID=s.ID
                               };
                    result.Data = join.ToList();
                    result.Message = "获取成功";
                    result.TotalCount = join.Count();
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }
    }
}
