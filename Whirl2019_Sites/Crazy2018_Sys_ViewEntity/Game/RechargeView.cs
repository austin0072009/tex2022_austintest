using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class RechargeView
    {
        public decimal Number { get; set; }
        /// <summary>
        /// 订单号
        /// </summary>
        public string OrderNumber { get; set; }
        /// <summary>
        /// 充值人员
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// 充值类型
        /// </summary>
        public int RechargeType { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
        public string CreatTime { get; set; }
        public long ID { get; set; }
        public decimal GoldCount { get; set; }
    }
}
