using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class EmailGiveGoldView
    {
        /// <summary>
        /// 总金额   系统/个人送
        /// </summary>
        public decimal TotalGold { get; set; }


        public decimal TotalTax { get; set; }

        ///
        ///邮件类型，1交易，2系统,3 个人
        ///
        public int type { get; set; }


        public string UserId { get; set; }

    }
}
