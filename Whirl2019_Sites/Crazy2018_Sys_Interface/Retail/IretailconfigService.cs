using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Retail
{
    public interface IretailconfigService:IBaseService<retailconfig,int, snscenterwhirlEntities>,IDependency
    {
        /// <summary>
        /// 查询一个商户的配置
        /// </summary>
        /// <param name="retailid"></param>
        /// <returns></returns>
        retailconfig GetRetailConfigById(int retailid);
        /// <summary>
        /// 新增一个商户配置
        /// </summary>
        /// <param name="retailid"></param>
        /// <param name="playeramount"></param>
        /// <returns></returns>
        bool AddConfig(int retailid, string playeramount);
    }
}
