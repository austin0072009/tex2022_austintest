using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class UserRechargelogView
    {

        public long id { get; set; }
        public Nullable<int> userid { get; set; }

        public string UserName { get; set; }

        public Nullable<decimal> money { get; set; }
        /// <summary>
        /// 3、赠送，4、受赠
        /// </summary>
        public Nullable<int> cointype { get; set; }

        public Nullable<int> fromtype { get; set; }
        public Nullable<int> fromuserid { get; set; }

        public string fromUserName { get; set; }

        public Nullable<int> fromadminid { get; set; }
        public string remarks { get; set; }
        public Nullable<System.DateTime> createtime { get; set; }

        /// <summary>
        /// 赠送前玩家账户金额
        /// </summary>
        public Nullable<decimal> oldGold { get; set; }
        /// <summary>
        /// 赠送后玩家账户金额
        /// </summary>
        public Nullable<decimal> currGold { get; set; }
    }
}
