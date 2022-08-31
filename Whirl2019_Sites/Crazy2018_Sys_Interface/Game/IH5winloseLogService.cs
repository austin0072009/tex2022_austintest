using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;

namespace Crazy2018_Sys_Interface.Game
{
  public interface IH5winloseLogService : IBaseService<th5winloselog, int, texas_2021Entities>, IDependency
    {

        /// <summary>
        /// 获取上周本周的h5红利
        /// </summary>
        /// <param name="page"></param>
        /// <param name="wStart"></param>
        /// <param name="wEnd"></param>
        /// <returns></returns>
        DataResults<LoseWinview> GetlastWeekBonus(DPagePara page, DateTime wStart, DateTime wEnd);


        List<LoseWinview> GetUserWeekBonus(DateTime wStart, DateTime wEnd,int uid = 0);

        /// <summary>
        /// 更新数据结算
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="Rebate"></param>
        /// <returns></returns>
        bool UpdateIsRebate(int uid, int Rebate);


        bool UpdateIsRebateBytime(DateTime stime,DateTime etime);

        DataResults<th5winloselogView> Geth5loseinfo(DPagePara page);
    }
}
