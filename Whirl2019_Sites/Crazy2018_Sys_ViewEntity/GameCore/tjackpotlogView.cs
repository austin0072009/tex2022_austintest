using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class tjackpotlogView
    {
        public long Id { get; set; }
        public string GameName { get; set; }

        public string RoomName { get; set; }
        public Nullable<int> UserId { get; set; }

        public int isRoot { get; set; }
        public string UserName { get; set; }

        public int ChangeType { get; set; }
        public String ChangName { get; set; }

        public Nullable<long> Gold { get; set; }
        public Nullable<int> JackpotType { get; set; }
        public string TypeName { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }

    }
}
