using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    /// <summary>
    /// 充值记录契约服务
    /// </summary>
    public interface IRechargeRecordService : IBaseService<RechargeRecordEntity, long, DBContextHelper>, IDependency
    {
        DataResults<ChargelogView> GetChargeLogData(DPagePara page, string selectKeywords);
        DataResults<ChargelogView> GetChargeLogDataInfo(DPagePara page, string selectKeywords);
        decimal ChargeZJ(DPagePara page, string types);
        /// <summary>
        /// 得到充值日统计
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<ChargelogDayStatistics> GetChargeLogStatistics(DPagePara page);

        /// <summary>
        /// 充值排行
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<ChargelogRanking> ChargeLogRanking(DPagePara page);


        void GetNearfiveOrder();

        List<RechargeRecordEntity> GetUserNearlySevenDays(int userid);
        List<RechargeRecordEntity> GetUserNearlyDays(int userid,string datestring);


        DataResult<RechargeRecordEntity> Add(decimal number, string orderNumber, string userId, string remark, decimal goldCount,int rechargeType=1);


        string UserCashMoney(int userid, int money, string pwd, int type, string remark,gameuser g);


        string CheckUserCashMoney(int userid, int money, string pwd, string remark,gameuser gUser,int type);
    }
}
