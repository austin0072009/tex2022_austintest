using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class temtuseragentInter
    {
        public int UserID { get; set; }
        public string UserName { get; set; }

        public Nullable<long> GoldHistoryCommission { get; set; }
        public Nullable<long> GoldCommission { get; set; }

        public Nullable<long> watergoldadd { get; set; }
        public Nullable<long> watergoldreduce { get; set; }

        public int isRobot { get; set; }
        public string TexasCount { get; set; }
         public List<float> TexasCountarr { get; set; }

        public string WhirlCount { get; set; }
        public List<float> WhirlCountarr { get; set; }

        public Nullable<int> GameId { get; set; }

    }
}
