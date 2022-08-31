using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Game
{
   public class GoldChangeh5gameView
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }

        public int GoldType { get; set; }

        public Nullable<decimal> Gold { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }

        public int GameId { get; set; }
        public string GameName { get; set; }

        public string IsComplete { get; set; }
    }
}
