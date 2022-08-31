using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class ProfitLogView:BaseView
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int UserId { get; set; }
        /// <summary>
        /// 领取金额
        /// </summary>
        public decimal Amount { get; set; }
        /// <summary>
        /// 领取状态 0.成功 -1.失败 -2;游戏服务器扣除金币失败
        /// </summary>
        public int State { get; set; }
    }
}
