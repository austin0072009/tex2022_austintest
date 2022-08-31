using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class RedenvelopesLogView
    {

        public long Id { get; set; }
        public Nullable<int> UserId { get; set; }

        public string UserName { get; set; }

        public string BeforeCount { get; set; }
        public Nullable<decimal> Money { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<int> TaskType { get; set; }
    }
}
