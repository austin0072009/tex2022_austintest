using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Crazy2018_Sys_Interface.Game
{
   public interface IRoomListService : IBaseService<ttablelist, int, texas_2021Entities>, IDependency
    {
       bool SubmitRoomtable(ttablelist entitiy);


        DataResults<RoomListView> GetListRoomTable(DPagePara page);

        List<tgameinfo> GetGamelist();
        ttablelist GetRoomTableById(int id);

    }
}
