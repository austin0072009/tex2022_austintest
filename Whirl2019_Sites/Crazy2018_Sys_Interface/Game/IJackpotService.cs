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
   public interface IJackpotService : IBaseService<tjackpot, int, texas_2021Entities>, IDependency
    {
        DataResults<JackpotView> GetJackPotData(DPage page);
        /// <summary>
        /// 得到游戏不同场次的奖池
        /// </summary>
        /// <returns></returns>
        List<JackpotScene> GetGameLevelTatolgold();


        void TimingRun();
    }
}
