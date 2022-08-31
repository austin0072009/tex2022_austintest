using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.GameCore
{
   public interface IGoldChangeLogService : IBaseService<tgoldchangelog, int, texas_2021Entities>, IDependency
    {

        DataResults<GoldChangelogView> GetUserGoldChangelog(DPagePara page);

        /// <summary>
        /// 玩家输赢详情
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<GoldChangelogView> UserlosingWinning(DPagePara page);
        //玩家输赢汇总
        decimal GameUserLoseWinSum(DPagePara page);
        DataResult UserReceivejackpotLogDel(string ids);
        /// <summary>
        /// 用户得大奖日志
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<tjackpotlogView> GetUserReceivejackpotLog(DPagePara page);

        DataResults<tjackpotlogView> GetUserInsurancePoolLog(DPagePara page);

        DataResults<tjackpotaddlogView> GetJackpotAddlog(DPagePara page);
        DataResult GoldChangelogDel(string ids);
    }
}
