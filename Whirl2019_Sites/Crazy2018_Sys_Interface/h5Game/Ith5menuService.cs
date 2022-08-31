using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.H5Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface Ith5menuService:IBaseService<th5menu,int,h5game_2021Entities>, IDependency
    {
        DataResults<MenuView> GetAllMenu();
    }
}
