using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.GameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Game
{
    public interface  ITtablehandnumlog: IBaseService<ttablehandnumlog, int, texas_2021Entities>, IDependency
    {
        DataResult Addtablehandnum(int userId,string name, int gameid, int count1, int count2, int count5, int count10, int count20, int count50);
        DataResults<RankUserSD> GetTablehandNumLogList(DPagePara page);
        DataResult DeleteRangings(string ids);
    }
}
