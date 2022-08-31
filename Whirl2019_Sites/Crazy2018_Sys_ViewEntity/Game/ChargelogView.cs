using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{

    public class ChargelogRanking
    {
        public int Userid { get; set; }


        public string UserName { get; set; }

        public decimal GoldTotal { get; set; }

        public int OrderNum { get; set; }

        public DateTime RechargeDate { get; set; }
    }

    public class ChargelogDayStatistics
    {
      //  public int UserId { get; set; }

        public object test { get; set; }
        /// <summary>
        /// 充值金额
        /// </summary>
        public int Gold { get; set; }
        /// <summary>
        /// 订单数
        /// </summary>
        public int OrderNum { get; set; }

        /// <summary>
        /// 人数
        /// </summary>
        public int UserNum { get; set; }
        /// <summary>
        /// 充值日志
        /// </summary>
        public DateTime CreatTime { get; set; }

        
    }


    public class ChargelogView : BaseView
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int UserID { get; set; }


        public string UserName { get; set; }
        /// <summary>
        /// 充值数量
        /// </summary>
        public decimal Money { get; set; }
        /// <summary>
        /// 账户原有金额
        /// </summary>
        public string RechargeType { get; set; }

        public int _RechargeType { get; set; }

        /// <summary>
        /// 来源会员ID
        /// </summary>
        public int FromUserid { get; set; }
        /// <summary>
        /// 充值来源
        /// </summary>
        public int FromType { get; set; }
        /// <summary>
        /// 来源账号ID
        /// </summary>
        public int FromAdminId { get; set; }
        /// <summary>
        /// 充值类型
        /// </summary>
        public string CoinType { get; set; }
        public DateTime OrderTime { get; set; }

        public DateTime _CreatTime { get; set; }
        public int IsRobot { get; set; }

        public string OrderNum { get; set; }
        public string CentreOrderNum { get; set; }

        /// <summary>
        /// 平台订单状态
        /// 0 待支付，1 已取消，2 成功，3 超时，4 信息错误
        /// </summary>
        public int businessOrderState { get; set; }

        public string _businessOrderState { get; set; }
        /// <summary>
        ///  商户订单状态
        ///  0 待支付，1 已取消，2 成功，3 超时，4 信息错误
        /// </summary>
        public int orderState { get; set; }
        public string _orderState { get; set; }
    }
}
