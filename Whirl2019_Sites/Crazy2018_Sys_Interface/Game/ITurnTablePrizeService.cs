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
   public interface ITurnTablePrizeService : IBaseService<turntableprize, int, texas_2021Entities>, IDependency
    {
        DataResults<TurnTablePrizeView> GetTurnTablePrizeData(DPage page);
    }
}
