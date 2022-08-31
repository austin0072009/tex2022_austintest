using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class RedEnvelopesConfigView
    {

        public long Id { get; set; }
        public Nullable<decimal> Money { get; set; }
        public Nullable<decimal> Rate { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }

        public int TaskType { get; set; }
        public string TypeName { get; set; }
    }
}
