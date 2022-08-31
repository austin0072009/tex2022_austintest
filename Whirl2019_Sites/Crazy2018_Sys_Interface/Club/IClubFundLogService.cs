using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Club
{
   public interface IClubFundLogService : IBaseService<tclubfundlog, int, texas_2021Entities>, IDependency
    {

        DataResults<ClubFundLogView> GetClubFundLogData(DPagePara page);
        DataResult ClubClubFundLogDel(string ids);
    }
}
