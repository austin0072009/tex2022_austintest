using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Club
{

   public interface  IDiamondChangeLogService : IBaseService<tdiamondchangelog, int, texas_2021Entities>, IDependency
    {

        /// <summary>
        /// 获取钻石记录
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<DiamondChangeLogView> GetDiamondLogData(DPagePara page);

        DataResult DiamondChangeLogDel(string ids);
    }
}
