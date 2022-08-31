using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class tjackpotaddlogView
    {
        public long Id { get; set; }
        public Nullable<int> GameId { get; set; }

        public string GameName { get; set; }
        public Nullable<int> TableID { get; set; }
        public Nullable<long> Gold { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }
    }
}
