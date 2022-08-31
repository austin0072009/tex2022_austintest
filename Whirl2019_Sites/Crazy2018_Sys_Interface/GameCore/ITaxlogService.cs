using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public interface  ITaxlogService : IBaseService<ttaxlog, int, texas_2021Entities>, IDependency
    {
        MyAgent GetMyAgentByUserId(int userid);


        SysCruxDataStatistics GetThisdateTaimeTaxlog(DateTime date);

        DataResults<TaxlogView> GetTaxLog(DPagePara page);
        //红利领取记录
        DataResults<UseragnetlogView> GetUserAgentlog(DPagePara page);
        //红利领取记录汇总
        decimal SumHongLi(DPagePara page);
        DataResult DeletetaxlogByids(string ids);

        DataResult UserAgentLogDel(string ids);

        /// <summary>
        /// 获得代理领取红利排行榜
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<tuseragentlogView> GetUserAgentGoldRanking(DPagePara page);

        /// <summary>
        /// 流失用户统计
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResult<UserLossStatistics> LossUserStatistics(DPagePara page);

    }
}
