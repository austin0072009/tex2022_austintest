using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class limitdeviceView
    {

        public int ID { get; set; }
        public string DeviceID { get; set; }
        public Nullable<System.DateTime> AppTime { get; set; }
        public Nullable<int> Userid { get; set; }

        public string UserName { get; set; }
        public string Remark { get; set; }



    }
}
