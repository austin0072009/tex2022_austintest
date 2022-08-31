using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{

    public interface ItgameinfoService : IBaseService<tgameinfo, int, h5game_2021Entities>, IDependency
    {


        DataResults<GameInfoView> GetGameInfoData();
        DataResults<GameInfoView> GetGameInfoDataById(string id);
        DataResults<GameInfoView> GetGameInfoDataBycid(int cid);
        DataResults<GameInfoView> GetGameInfoDataSearch(string keystr);
        bool AddGame(tgameinfo tgameinfo);
        bool UpdateGame(int id, tgameinfo tgameinfo);
        bool DelGame(int id);
    }
}
