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
    public interface ItjackpotlogService:IBaseService<tjackpotlog,int, h5game_2021Entities>,IDependency
    {
        /// <summary>
        /// 总保险
        /// </summary>
        /// <param name="keyword"></param>
        /// <param name="gameid"></param>
        /// <param name="pagesize"></param>
        /// <param name="pageindex"></param>
        /// <returns></returns>
        DataResults<TjackpotLogView> GetJackPotLog(string keyword, int gameid,  int pageindex,int pagesize);
        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="beforetime"></param>
        /// <param name="aftertime"></param>
        /// <param name="pagesize"></param>
        /// <param name="pageindex"></param>
        /// <returns></returns>
        DataResults<TjackpotLogView> GetUserJackPotLog(int userid, string beforetime, string aftertime, int pagesize, int pageindex);
    }
}
