using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 充值记录表
    /// </summary>
    public class RechargeRecordEntity : BaseEntity<long>
    {
        public RechargeRecordEntity()
        {
            IsHandel = false;
            CentreOrderNum = "";
        }
        /// <summary>
        /// 充值数量
        /// </summary>
        public decimal Number { get; set; }
        /// <summary>
        /// 订单号
        /// </summary>
        public string OrderNumber { get; set; }
        /// <summary>
        /// 平台订单号
        /// </summary>
        public string CentreOrderNum { get; set; }

        /// <summary>
        /// 充值人员
        /// </summary>
        public int UserId { get; set; }
        /// <summary>
        /// 充值类型
        /// </summary>
        public int RechargeType { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
        /// <summary>
        /// 对应的金币数量
        /// </summary>
        public decimal GoldCount { get; set; }
        /// <summary>
        /// 是否处理
        /// </summary>
        public bool IsHandel { get; set; }

        /// <summary>
        /// 平台订单状态
        /// 0 待支付，1 已取消，2 成功，3 超时，4 信息错误
        /// 5失败
        /// </summary>
        public int businessOrderState { get; set; }

        /// <summary>
        ///  商户订单状态
        ///  0 待支付，1 已取消，2 成功，3 超时，4 信息错误
        ///  5失败
        /// </summary>
        public int orderState { get; set; }


        public DateTime payTime { get; set; }
        /// <summary>
        /// 技术服务费
        /// </summary>
        public int serviceCharge { get; set; }

        public string UserName { get; set; }
    }
}
