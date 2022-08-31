using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class UseragnetlogView
    {
        public int ID { get; set; }
        public Nullable<int> UserId { get; set; }

        public string UserName { get; set; }
        public decimal Gold { get; set; }
        public Nullable<int> State { get; set; }
        public Nullable<System.DateTime> CreatTime { get; set; }


    }
}
