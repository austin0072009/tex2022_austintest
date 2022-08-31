using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class tuseragentlogView
    {
        public int ID { get; set; }
        public Nullable<int> UserId { get; set; }

        public string UserName { get; set; }
        public Nullable<long> Gold { get; set; }
        public Nullable<int> State { get; set; }

        public string StateName { get; set; }

        public Nullable<DateTime> CreatTime { get; set; }



    }
}
