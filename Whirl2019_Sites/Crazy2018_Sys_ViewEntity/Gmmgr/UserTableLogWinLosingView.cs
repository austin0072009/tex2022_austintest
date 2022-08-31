using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class UserTableLogWinLosingView
    {

        public long Idx { get; set; }
        public Nullable<long> TableLogIdx { get; set; }
        public Nullable<int> UserID { get; set; }

        public string UserName { get; set; }

        public int isRobot { get; set; }
        public Nullable<int> C_pos { get; set; }
        public Nullable<decimal> gold { get; set; }
        public string C_cardList { get; set; }
        public Nullable<bool> C_isover { get; set; }
        public Nullable<int> C_isWatch { get; set; }
        public Nullable<bool> C_win { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public Nullable<long> Bet { get; set; }


    }
}
