using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity.Game
{
   public class GameLogo : BaseEntity<long>
    {

        public string Url { get; set; }
        public int logotype { get; set; }
        public string remarks { get; set; }

    }
}
