using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class JackpotView:BaseView
    {
        public int ID { get; set; }
        public int GameId { get; set; }
        public string GanmeName { get; set; }
        /// <summary>
        /// 游戏场次名称
        /// </summary>
        public string GameLevelName { get; set; }

        public int Baserate { get; set; }
        public int Jackpot { get; set; }
        public int HistoryGambleall { get; set; }
        public int Income { get; set; }
        public long Rax { get; set; }
        public int Pump { get; set; }
        public int Waterproof { get; set; }
        public int handsel { get; set; }

        public int? isEnable { get; set; }
        public int roomid { get; set; }
    }
}
