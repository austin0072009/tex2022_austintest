using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.GameCore
{
    public interface IGoldChangeh5gameService : IBaseService<tgoldchangh5game, int, texas_2021Entities>, IDependency
    {
       DataResults<GoldChangeh5gameView> GetUserGoldChangeH5game(DPagePara page);

        DataResult GoldChangeH5gameDel(string ids);
    }
}
