using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    /// <summary>
    /// 用户汇总数据
    /// </summary>
   public class UserSummaryEntity
    {
        /// <summary>
        /// 用户充值人数
        /// </summary>
        public int UserRechargeNum { get; set; }
        /// <summary>
        /// 二次充值人数
        /// </summary>
        public int UserRechargeTwoNum { get; set; }

        /// <summary>
        /// 注册人数
        /// </summary>
        public int RegisterUserNum { get; set; }

        /// <summary>
        /// 充值用户转化率
        /// </summary>
        public string RechargeUserZHRate { get; set; }

        /// <summary>
        /// 充值用户流失
        /// </summary>
        public int UserRechargeLossNum { get; set; }

        /// <summary>
        /// 充值用户流失率
        /// </summary>
        public string UserRechargeLossRate { get; set; }

        /// <summary>
        /// 当月注册人数
        /// </summary>
        public int RegisterUserThisMonth { get; set; }

        /// <summary>
        ///注册用户增长率2
        /// </summary>
        public string RegisterUserRate { get; set; }

        /// <summary>
        /// 日注册人数最高
        /// </summary>
        public int DayRegisterUserMax { get; set; }
        /// <summary>
        /// 活跃用户
        /// </summary>

        public int ActiveUser { get; set; }
        /// <summary>
        /// 用户平均在线时长
        /// </summary>
        public decimal UserOnlineAverageTime { get; set; }

        /// <summary>
        /// 活跃用户转化率
        /// </summary>
        public string ActiviteUserZHtRate { get; set; }

        /// <summary>
        /// 流失用户数
        /// </summary>
        public int LossUserNum { get; set; }
        /// <summary>
        /// 流失用户率
        /// </summary>
        public string LossUserRate { get; set; }
        /// <summary>
        /// 最高充值金额
        /// </summary>
        public decimal MaxRechargeAmount { get; set; }

        /// <summary>
        /// 今日最高充值金额
        /// </summary>
        public decimal TodayMaxRechargeAmount { get; set; }
        /// <summary>
        /// 注册用户APRU值
        /// </summary>
        public decimal RegisterUserAPRUValue { get; set; }
        /// <summary>
        /// 用户APRUValue
        /// </summary>
        public decimal RechargeUserAPRUValue { get; set; }


    }
}
