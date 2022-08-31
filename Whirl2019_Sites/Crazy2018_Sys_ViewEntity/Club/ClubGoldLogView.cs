using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Club
{
   public class ClubGoldLogView
    {
        public int Id { get; set; }
        public int ChangeType { get; set; }
        public double BeforeGold { get; set; }
        public long Gold { get; set; }
        public long AfterGold { get; set; }
        public string CreateTime { get; set; }
        public int ClubId { get; set; }
        public string ClubName { get; set; }
        public string Remark { get; set; }
    }
}
