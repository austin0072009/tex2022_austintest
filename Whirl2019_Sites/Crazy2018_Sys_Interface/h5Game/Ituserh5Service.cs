using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.h5Game
{
   public interface Ituserh5Service:IBaseService<tuser,int,h5game_2021Entities>,IDependency
    {
        DataResults<tuser> GetUserData(int pageindex, int pagesize);
        DataResults<tuser> GetUserInfo(int userid, int pageindex, int pagesize);
        tuser GetUserInfo(int userid);
    }
}
