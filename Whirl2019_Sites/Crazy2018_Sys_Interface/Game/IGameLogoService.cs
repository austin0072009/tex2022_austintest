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
   public interface  IGameLogoService : IBaseService<GameLogo, long, DBContextHelper>, IDependency
    {
        /// <summary>
        /// 根据类型获取数据
        /// </summary>
        /// <param name="page"></param>
        /// <param name="platType"></param>
        /// <returns></returns>
        DataResults<GameLogoView> GetGameLogoData(DPage page, string platType);
        DataResult GameLogoDelete(string ids);
    }
}
