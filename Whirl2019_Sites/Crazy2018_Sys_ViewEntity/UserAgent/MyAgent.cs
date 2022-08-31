using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.UserAgent
{
   public class MyAgent
    {

        public List<GameUser> Onelevel { get; set; }

        public List<GameUser> Twolevel { get; set; }

        public List<GameUser> Therelevel { get; set; }
        /// <summary>
        /// 总人数
        /// </summary>
        public int TotalMan { get; set; }

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
