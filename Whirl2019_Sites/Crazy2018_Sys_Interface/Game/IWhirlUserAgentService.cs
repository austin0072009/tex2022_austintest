using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.GameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Game
{
  public  interface IWhirlUserAgentService : IBaseService<tuseragent2019, int, texas_2021Entities>, IDependency
    {
        DataResults<tuseragent2019View2> GetUserAgentList(DPage page, int userid);


        DataResults<tuseragent2019View2> GetThisUserAgentList(DPage page,int userid);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid">玩家id</param>
        /// <param name="puid">广告代理图片</param>
        /// <returns></returns>
        bool IsChildAgent(int userid,int puid);


    }
}
