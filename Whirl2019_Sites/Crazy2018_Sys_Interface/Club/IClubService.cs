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
  public interface  IClubService : IBaseService<tclub, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 获取club集合
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<ClubView> GetListGlubData(DPagePara page);

        /// <summary>
        /// 修改club idx
        /// </summary>
        /// <param name="newidx"></param>
        /// <param name="idx"></param>
        /// <returns></returns>
        DataResult Update(string newidx, int idx);
        DataResults<ClubChildView> GetListuserData(DPagePara page,int idx);

        /// <summary>
        /// 根据用户id 获取俱乐部
        /// </summary>
        /// <param name="page"></param>
        /// <param name="ui"></param>
        /// <returns></returns>
        DataResults<ClubView> GetClubListByUid(DPagePara page, int ui);
    }
}
