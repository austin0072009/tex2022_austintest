using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface ItjackpotstocklogService:IBaseService<tjackpotstocklog,int, h5game_2021Entities>,IDependency
    {
        /// <summary>
        /// 房间当月输赢 当日信息
        /// </summary>
        /// <returns></returns>
        List<TotalRecordView> GetTotalInfoData();
        /// <summary>
        /// 获取当天所有的库存信息
        /// </summary>
        /// <returns></returns>
        List<StockLog> GetDayStockDateTime(int Levelid);

        /// <summary>
        /// 获取库存当天时间
        /// </summary>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        List<StockTime> GetDayTime(int Levelid);
        /// <summary>
        /// 获取库存当天值
        /// </summary>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        List<StockVal> GetDayStock(int Levelid);

        /// <summary>
        /// 获取历史吞吐 目前七天
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
       DataResults<TjackpotStockLogView> GetHistoryStockInAndOut(int pageindex, int pagesize, int Levelid);
        /// <summary>
        /// 获取历史库存 目前七天
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="Levelid"></param>
        /// <returns></returns>
        DataResults<TjackpotStockLogView> GetHistoryStock(int pageindex, int pagesize, int Levelid);
    }
}
