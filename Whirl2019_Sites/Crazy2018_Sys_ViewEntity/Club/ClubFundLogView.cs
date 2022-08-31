using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Club
{
   public class ClubFundLogView
    {
        public long Id { get; set; }
        public int ClubId { get; set; }
        public string ClubName { get; set; }
        public int fnum { get; set; }
        public int Price { get; set; }
        public int ChangeType { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string CreateTime { get; set; }
        public long BalanNum { get; set; }
        public long fundtotal { get; set; }
    }
}
