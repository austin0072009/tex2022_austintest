using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TaxlogView
    {
        public long Idx { get; set; }
        public Nullable<int> UserId { get; set; }
        public string UserName { get; set; }
        public Nullable<long> BeforCoin { get; set; }
        public Nullable<decimal> ActionCoin { get; set; }
        public Nullable<long> AfterCoin { get; set; }
        public Nullable<int> ActionType { get; set; }

        public string ActionTypeName { get; set; }
        public Nullable<int> SourceGameID { get; set; }

        public string GameName { get; set; }
        public Nullable<int> SourceUserId { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<long> TableUserLogId { get; set; }
        public Nullable<bool> IsHandel { get; set; }
        public Nullable<int> C_lv { get; set; }

        public string roomName { get; set; }

        public int dipi { get; set; }
    }
}
