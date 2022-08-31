using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class userloginlogView
    {

        public long Id { get; set; }
        public Nullable<int> UserId { get; set; }
        public string UserName { get; set; }
        public string IP { get; set; }
        public string MachineCode { get; set; }
        public Nullable<long> MachineType { get; set; }

        public string MachineTypeName { get; set; }

        public Nullable<System.DateTime> CreateTime { get; set; }

    }
}
