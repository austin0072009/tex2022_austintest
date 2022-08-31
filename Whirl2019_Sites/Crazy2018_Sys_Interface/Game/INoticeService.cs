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
    public interface INoticeService : IBaseService<tnotice, int, texas_2021Entities>, IDependency
    {
        DataResults<NoticeView> GetNoticeData(DPage page);

        List<tnotice> GetListTop(int top,int type);

        DataResult NoticeDelById(string ids);
        DataResult NoticeAdd(NoticeView model);
        /// <summary>
        /// 获得赠送数据
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<UserRechargelogView> GetUserRechargeData(DPagePara page);
        /// <summary>
        /// 赠送管理
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        DataResult RechargeDel(string ids);



    }
}
