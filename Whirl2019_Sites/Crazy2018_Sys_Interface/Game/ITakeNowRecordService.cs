using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    /// <summary>
    /// 提现记录契约服务
    /// </summary>
    public interface ITakeNowRecordService : IBaseService<TakeNowRecordEntity, long, DBContextHelper>, IDependency
    {
        DataResults<TakeNowView> GetTakeNowData(DPagePara page, int role_id);
        int TiXianZJ(DPagePara page);
        /// <summary>
        /// 设置提现状态
        /// </summary>
        /// <param name="id"></param>
        /// <param name="state"></param>
        /// <returns></returns>
        DataResult SetTakeNowState(int id, int state);
        /// <summary>
        /// 获取今天的提现次数
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        int GetTodayTakeCount(string userId);

        List<GameServerTakeNow> GetGameServerTakeNowLog(int userid);
        List<GameServerTakeNow> GetGameServerTakeNowLog(int userid,string datestring);

    }
}
