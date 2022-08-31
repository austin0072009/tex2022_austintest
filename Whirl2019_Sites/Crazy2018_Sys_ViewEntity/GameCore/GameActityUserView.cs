using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class GameActityUserView:BaseView
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public string GameName { get; set; }

        public string Userid { get; set; }
        public string UserName { get; set; }
    }
}
