using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class SnsUserInfo
    {
        public SnsUserInfo()
        {
            UserMoney = 0;
            TotalMoney = 0;
        }
        public int UserId { get; set; }
        public string Mobile { get; set; }
        /// <summary>
        /// 推荐码
        /// </summary>
        public string ActiveCode { get; set; }

        public int UserMoney { get; set; }
        /// <summary>
        /// 充值金额
        /// </summary>
        public int TotalMoney { get; set; }
    }
}
