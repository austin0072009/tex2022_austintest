using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class tgameuserrankView
    {
        public long Id { get; set; }
        public Nullable<int> UserId { get; set; }
        public string UserName { get; set; }
        public Nullable<int> TotalHand { get; set; }
        public Nullable<int> Rank { get; set; }
        public Nullable<int> RankType { get; set; }
        public Nullable<int> Prize { get; set; }
        public string CreateTime { get; set; }
        public string No { get; set; }
        public Nullable<int> GameId { get; set; }
        public string IsRobot { get; set; }
    }
}
