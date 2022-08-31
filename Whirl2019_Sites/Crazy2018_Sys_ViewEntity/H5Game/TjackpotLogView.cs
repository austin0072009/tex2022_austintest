using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public  class TjackpotLogView
    {
        public long Id { get; set; }
        public int GameId { get; set; }
        public string GameName { get; set; }
        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public long Gold { get; set; }
        public int JackpotType { get; set; }
        public System.DateTime CreateTime { get; set; }
        public int ChangeType { get; set; }
        public string ChangeName { get; set; }
        public int tnum { get; set; }
        public int Owner { get; set; }
        public bool IsSettlement { get; set; }
    }
}
