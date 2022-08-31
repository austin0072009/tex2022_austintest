using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.UserAgent
{
   public class GameUser
    {
        public GameUser()
        {
            UserName = "";
            TotalHand = 0;
            TodayDevote = 0;
            TotalDevote = 0;
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        /// <summary>
        /// 总手数
        /// </summary>
        public int TotalHand { get; set; }
        /// <summary>
        /// 今日贡献
        /// </summary>
        public long TodayDevote { get; set; }
        /// <summary>
        /// 总贡献
        /// </summary>

        public long TotalDevote { get; set; }
    }
}
