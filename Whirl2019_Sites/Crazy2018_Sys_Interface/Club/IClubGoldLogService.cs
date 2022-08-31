using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Club
{
  public interface  IClubGoldLogService: IBaseService<tclubgoldlog, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 获取俱乐部金币日志
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<ClubGoldLogView> GetClubGoldData(DPagePara page);
        /// <summary>
        /// 删除日志
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        DataResult ClubGoldLogDel(string ids);
    }
}
