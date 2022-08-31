using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Game
{
   public class GoldChangelogView
    {
        public long Id { get; set; }
        public Nullable<int> UserId { get; set; }

        public string UserName { get; set; }
        public Nullable<long> BeforeGold { get; set; }
        public Nullable<decimal> Gold { get; set; }
        public decimal AfterGold { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }

        public string GameName { get; set; }
        public Nullable<bool> IsRobot { get; set; }
        public string Remark { get; set; }

        public string tableId { get; set; }

        public string dipi { get; set; }

        public string HandNum { get; set; }

        public Nullable<int> gamble { get; set; }

        public int ChangeType { get; set; }

        public string ChangeTypeName { get; set; }

    }
}
