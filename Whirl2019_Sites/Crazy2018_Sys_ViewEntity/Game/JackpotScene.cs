using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class JackpotScene
    {
        public JackpotScene()
        {
            GameName = "";
            primaryGold = 0;
            middleGold = 0;
            highGold = 0;
        }

        public string GameName { get; set; }
        public int primaryGold { get; set; }

        public int middleGold { get; set; }

        public int highGold { get; set; }

        public int Totalgold { get; set; }

    }
}
