using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    /// <summary>
    /// 同IP的用户在 同桌的数据
    /// </summary>
   public class GangCardStatisticsIP
    {
        public int Userid { get; set; }
        public string UserName { get; set; }

        public string LoginIP { get; set; }

        public long TableId { get; set; }
        /// <summary>
        /// 手数
        /// </summary>
        public int ThisHand { get; set; }
        public DateTime Tabletime { get; set; }

        public float Lng { get; set; }
        public float lat { get; set; }
    }
    /// <summary>
    /// 同桌的
    /// </summary>
    public class GangCardStatisticsTable
    {

    }
}
