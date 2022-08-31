using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TakeNowView:BaseView
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
        /// 提现状态  0 申请提现 1 已扣除金币 2 已提现 3已审核  4审核不通过
        /// </summary>
        public int State { get; set; }

        public string StateName { get; set; }


        public string DfStateName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string AccountType { get; set; }


        /// <summary>
        /// 实际提现金额
        /// </summary>
        public decimal ActualAmount { get; set; }
        /// <summary>
        /// 手续费
        /// </summary>
        public decimal ServiceCharge { get; set; }

        /// <summary>
        /// 审核时间
        /// </summary>
        public string ExamineDate { get; set; }


        public string useroperation { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 开户名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 开户地址
        /// </summary>
        public string BankAddress { get; set; }
        /// <summary>
        /// 开户区域
        /// </summary>
        public string location { get; set; }
        /// <summary>
        /// 手机
        /// </summary>
        public string Mobile { get; set; }
        /// <summary>
        /// 是否抽税
        /// </summary>
        public string isTax { get; set; }

    }

    public class GameServerTakeNow
    {
        /// <summary>
        /// 类型 充值  提现
        /// </summary>
        public string type { get; set; }
        /// <summary>
        /// 金额
        /// </summary>
        public decimal money { get; set; }
        /// <summary>
        /// 时间
        /// </summary>
        public DateTime date { get; set; }
        /// <summary>
        /// 状态  成功  失败
        /// </summary>
        public string states { get; set; }
    }
}
