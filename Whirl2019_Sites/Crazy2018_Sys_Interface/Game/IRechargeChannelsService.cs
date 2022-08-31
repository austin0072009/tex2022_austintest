using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface  IRechargeChannelsService : IBaseService<RechargeChannel, long, DBContextHelper>, IDependency
    {
        DataResults<RechargeChannel> GetRechargeData(DPagePara page);
        List<RechargeServiceListView> GetRechargeByid(int id);
    }
}
