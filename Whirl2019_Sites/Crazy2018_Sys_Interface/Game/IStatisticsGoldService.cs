using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
namespace Crazy2018_Sys_Interface
{
    public interface IStatisticsGoldService : IBaseService<tgoldstatistics, int, texas_2021Entities>, IDependency
    {
        DataResults<StatisticsGoldView> GetStatisticsGoldData(DPage page, int gameId = -1,string sTime = "", string eTime = "");
    }
}
