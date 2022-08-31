using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class RankUserSD
    {
        public string UserName { get; set; }
        public int UserId { get; set; }
        public int Winhand { get; set; }
        public int Losthand { get; set; }
        public int Drawhand { get; set; }
        //手数
        public int TotalHand { get; set; }
        //名次
        public int Rank { get; set; }
        //奖励
        public int Prize { get; set; }
        /// <summary>
        ///  1 2 5 10 20 50
        /// </summary>
        public int t { get; set; }
        public string IsRobot { get; set; }
    }
}
