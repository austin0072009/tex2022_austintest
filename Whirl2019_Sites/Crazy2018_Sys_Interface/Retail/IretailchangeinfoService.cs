using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Retail
{
    public interface IretailchangeinfoService:IBaseService<RetailChangeInfoView,int, snscenterwhirlEntities>,IDependency
    {
        /// <summary>
        /// 添加商户流水
        /// </summary>
        /// <param name="retailid"></param>
        /// <param name="type"></param>
        /// <param name="score"></param>
        /// <param name="desc"></param>
        /// <returns></returns>
        bool AddRetailChangeLog(int retailid, int type, string score, string desc);
        /// <summary>
        /// 查询商户流水
        /// </summary>
        /// <param name="retailid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        DataResults<RetailChangeInfoView> GetReatailLog(int retailid, int pageindex, int pagesize, string keyword = null);
    }
}
