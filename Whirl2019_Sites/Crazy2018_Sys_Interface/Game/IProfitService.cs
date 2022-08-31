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
    /// 收益记录
    /// </summary>
    public interface IProfitService : IBaseService<ProfitLog, long, DBContextHelper>, IDependency
    {
        /// <summary>
        /// 代理领取收益
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="amount"></param>
        /// <returns></returns>
        DataResult<ProfitLog> ReceiveProfit(int userId, decimal amount);
        /// <summary>
        /// 获取代理领取记录
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<ProfitLogView> GetProfitLogs(DPage page);
    }
}
