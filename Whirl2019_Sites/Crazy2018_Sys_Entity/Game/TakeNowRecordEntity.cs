using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
  public  class TakeNowRecordEntity:BaseEntity<int>
    {
        /// <summary>
        /// 提现账号
        /// </summary>
        public string account { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// 提现金额
        /// </summary>
        public decimal Amount { get; set; }
        /// <summary>
        /// 实际提现金额
        /// </summary>
        public decimal ActualAmount { get; set; }
        /// <summary>
        /// 手续费
        /// </summary>
        public decimal ServiceCharge { get; set; }
        /// <summary>
        /// 提现状态    申请中 = 0,已扣除金币 = 1,  已提现 = 2, 审核通过 = 3,  审核不通过 = 4,   提现失败 = 5,提现中 = 6
        /// </summary>
        public int State { get; set; }


        public int DfState { get; set; }
        /// <summary>
        /// 审核时间
        /// </summary>
        public DateTime ExamineDate { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
        /// <summary>
        /// 是否抽税
        /// </summary>
        public bool isTax { get; set; }


        public string AccountType { get; set; }

        public string RealName { get; set; }

        /// <summary>
        /// 提现绑定的手机号
        /// </summary>
        public string Phone { get; set; }

        public string OrderNum { get; set; }
    }
}