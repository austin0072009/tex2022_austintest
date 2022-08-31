using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Game
{
   public interface IRoomConfigService:IBaseService<RoomConfiguration,long, DBContextHelper>,IDependency
    {

        List<RoomConfiguration> GetAllRoomConfig();
        bool Add(RoomConfiguration room);
        DataResults<RoomConfigurationView> GetRoomConfigData(DPage page);
        DataResult<RoomConfiguration>  GetRoomDataById(int id);
        bool DeleteRoomSetInfo(int setid);
    }
}
