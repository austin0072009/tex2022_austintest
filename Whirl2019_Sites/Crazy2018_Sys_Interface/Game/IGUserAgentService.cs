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
    public interface IGUserAgentService : IBaseService<tuser, int, texas_2021Entities>, IDependency
    {

        void StatisticsHands();

        ///// <summary>
        ///// 获取代理列表信息
        ///// </summary>
        ///// <param name="userId"></param>
        ///// <param name="page"></param>
        ///// <returns></returns>
        //DataResults<GameUserAgentView> GetAgentData(int userId, DPage page);
        ///// <summary>
        ///// 获取代理信息
        ///// </summary>
        ///// <param name="userId"></param>
        ///// <returns></returns>
        //DataResult<UserAgentDataView> GetUserAgentInfo(int userId);
        ///// <summary>
        ///// 定时执行更新任务
        ///// </summary>
        //List<long> UpdateUserAgent();
        ///// <summary>
        ///// 后台获取用户代理信息
        ///// </summary>
        ///// <param name="sTime"></param>
        ///// <param name="eTime"></param>
        ///// <param name="userid"></param>
        ///// <param name="page"></param>
        ///// <returns></returns>
        //DataResult<GameUserAgentManage> AgentManage(string sTime,string eTime,int userid, DPage page);
    }
}
