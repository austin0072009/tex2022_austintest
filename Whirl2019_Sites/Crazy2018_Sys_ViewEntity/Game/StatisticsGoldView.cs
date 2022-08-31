using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class StatisticsGoldView:BaseView
    {
        public int ID { get; set; }
        public string GameName  { get; set; }
        public long TotalGold { get; set; }
        public string TimeInterval { get; set; }
        public int GameId { get; set; }
    }
}
