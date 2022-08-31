using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TjackpotStockLogView
    {
        public long Id { get; set; }
        public int GameId { get; set; }
        public int Levelid { get; set; }
        public int UserId { get; set; }
        public long WinGold { get; set; }
        public int JackpotScore { get; set; }
        public long Income { get; set; }
        public long Outcomes { get; set; }
        public DateTime CreateTime { get; set; }
        public int RaxScore { get; set; }
        public string  Name { get; set; }
        public int  stock { get; set; }
    }

    public class TJackpotUserLogView {
        public long Id { get; set; }
        public int GameId { get; set; }
        public int Levelid { get; set; }
        public int UserId { get; set; }
        public long WinGold { get; set; }
        public int JackpotScore { get; set; }
        public long Income { get; set; }
        public long Outcomes { get; set; }
        public DateTime CreateTime { get; set; }
        public int RaxScore { get; set; }
        public string Name { get; set; }
        public string GameName { get; set; }
        public string UserName { get; set; }
    }
}
