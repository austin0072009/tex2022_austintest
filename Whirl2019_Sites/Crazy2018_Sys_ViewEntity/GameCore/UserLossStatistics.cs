using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class UserLossStatistics
    {
        /// <summary>
        /// 流失玩家数量
        /// </summary>
        public int losscount { get; set; }

        public List<LossUser> data { get; set; }

    }

    public class LossUser
    {
        public int Userid { get; set; }

        public string UserName { get; set; }
        /// <summary>
        /// 多少天未登录
        /// </summary>
        public int DayCount { get; set; }
    }


}
