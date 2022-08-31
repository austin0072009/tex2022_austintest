using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 用户代理统计信息
    /// </summary>
    public class UserAgentStatistics : BaseEntity<long>
    {
        public int AgentId { get; set; }
        /// <summary>
        /// 总投注额
        /// </summary>
        public decimal Bet { get; set; }
        /// <summary>
        /// 昨日投注额
        /// </summary>
        public decimal YTDBet { get; set; }
        /// <summary>
        /// 今日投注额
        /// </summary>
        public decimal TodayBet { get; set; }
        /// <summary>
        /// 总收益
        /// </summary>
        public decimal Tax { get; set; }
        /// <summary>
        /// 昨日收益
        /// </summary>
        public decimal YTDTax { get; set; }
        /// <summary>
        /// 今日收益
        /// </summary>
        public decimal TodayTax { get; set; }
        /// <summary>
        /// 是否是给总代的收益记录
        /// </summary>
        public bool IsGeneralAgent { get; set; }
    }
}
