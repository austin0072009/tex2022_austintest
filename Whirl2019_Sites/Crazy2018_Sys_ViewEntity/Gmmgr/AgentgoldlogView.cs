using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class AgentgoldlogView
    {

        public long Idx { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<long> ActionCoin { get; set; }
        public Nullable<int> SourceUserId { get; set; }

        public string SourceUserName { get; set; }

        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> C_lv { get; set; }

    }
}
