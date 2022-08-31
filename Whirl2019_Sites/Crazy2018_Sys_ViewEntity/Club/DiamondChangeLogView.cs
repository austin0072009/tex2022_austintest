using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Club
{
   public class DiamondChangeLogView
    {
        public long Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Title { get; set; }
        public string idx { get; set; }
        public string uionidx { get; set; }
        public string uionTitle { get; set; }
        public double BeforeGold { get; set; }
        public double Gold { get; set; }
        public double AfterGold { get; set; }
        public int ChangeType { get; set; }
        public string CreateTime { get; set; }
        public string Remark { get; set; }
    }
}
