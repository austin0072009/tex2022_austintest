using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class ttablehandnumlogView
    {
        public long Id { get; set; }
        public Nullable<int> pos1Count { get; set; }
        public Nullable<int> pos2Count { get; set; }
        public Nullable<int> pos5Count { get; set; }
        public Nullable<int> pos10Count { get; set; }
        public Nullable<int> pos20Count { get; set; }
        public Nullable<int> pos50Count { get; set; }
        public Nullable<int> GameId { get; set; }
        public string GameName { get; set; }
        public string CreateTime { get; set; }
        public Nullable<int> UserId { get; set; }
        public string UserName { get; set; }
    }
}
