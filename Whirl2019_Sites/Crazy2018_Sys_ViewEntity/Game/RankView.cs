using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class RankView:BaseView
    {
        public int UserID { get; set; }

        public string UserName { get; set; }

        public string isRebot { get; set; }

        public int isRobot { get; set; }

        public long watergoldadd { get; set; }
        public long watergoldreduce { get; set; }
        /// <summary>
        /// 输赢差
        /// </summary>

        public long winreduce { get; set; }

        public int ScoreWin { get; set; }
        public int ScoreLost { get; set; }
    }
}
