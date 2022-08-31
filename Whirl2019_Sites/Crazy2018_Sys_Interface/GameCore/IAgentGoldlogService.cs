using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface IAgentGoldlogService : IBaseService<tagentgoldlog, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 代理业绩
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<AgentgoldlogView> GetAgentContrib(DPagePara page);

    }
}
