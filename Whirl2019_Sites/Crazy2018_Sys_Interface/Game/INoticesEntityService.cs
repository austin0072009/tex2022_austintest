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
    public interface INoticesEntityService: IBaseService<NoticesEntity, long, DBContextHelper>, IDependency
    {
        bool Add(NoticesEntity NoticesEntity);
        DataResults<NoticesEntityView> GetNoticesEntityInfo( int typeid);
    }
}
