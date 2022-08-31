using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Interface
{
   public interface IGameService : IBaseService<tgameinfo, int, texas_2021Entities>, IDependency
    {
        DataResults<RankView> GetGameRankData(DPagePara page);
        DataResults<GameInfoView> GetGameData(DPage page, string ptype,string isopen);
        DataResults<GameInfoView> GetGameInfoDataByTypeId(string typeid);
        DataResults<GameInfoView> GetAllgameinfo(string typeid, string gametypesea);
        DataResults<GameInfoView> GetGameInfoData(DPage page);
        DataResults<GameInfoView> GetGameInfoData();
        DataResults<GameInfoView> GetGameInfoDataById(string id);
        DataResult<GameInfoView> SaveGameInfoData(GameInfoView model);
        DataResults<OnlineInfoView> GetOnlineInfo(string sTime,string eTime);
        DataResult<RoomInfoView> GetRoomInfoById(int id);


        string NowOnlineStatics(DateTime date,bool isoneday,string type);


        OnlineOrRegsuterMonth GetMonthStatiscstoDayDatainfo(DateTime month,string type);



        OnlineOrRegsuterMonth GetMonthDaytjackpotStatics();


        List<UserGoldDisMap> GetUserGoldDisMap();




    }
}
