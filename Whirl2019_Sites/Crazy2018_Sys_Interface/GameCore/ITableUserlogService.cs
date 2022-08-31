using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public interface ITableUserlogService : IBaseService<ttableuserlog, int, texas_2021Entities>, IDependency
    {

        /// <summary>
        /// 获取同ip登录用户    桌上玩的数据
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>

        DataResultsList<GangCardStatisticsIP> GetUserTableLogSameIp(DPagePara page);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<GangCardStatisticsIP> GetUserTableLogSameIpLnglat(DPagePara page);

        /// <summary>
        /// 桌子上输赢情况
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<UserTableLogWinLosingView> GetUserTableLogWinLosing(DPagePara page);


        DataResult DeleteTableLogByids(string ids);

        /// <summary>
        /// 获取用户汇总数据
        /// </summary>
        /// <returns></returns>
        UserSummaryEntity GetUserSummary();

    }
}
