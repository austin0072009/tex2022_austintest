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
   public interface IInitialagencyInfoService : IBaseService<InitialagencyInfo, int, DBContextHelper>, IDependency
    {
        /// <summary>
        /// 创建一个一级代理
        /// </summary>
        /// <param name="code"></param>
        /// <param name="qrCode"></param>
        /// <returns></returns>
        DataResult<InitialagencyView> Create(string code, string qrCode);
        /// <summary>
        /// 获取代理信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<InitialagencyView> GetData(DPage page);
    }
}
