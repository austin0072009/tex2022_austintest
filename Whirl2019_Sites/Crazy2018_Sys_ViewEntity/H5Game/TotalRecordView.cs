using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TotalRecordView
    {
        /// <summary>
        /// 游戏id
        /// </summary>
        public int gameid { get; set; }
        /// <summary>
        /// 房间id
        /// </summary>
        public int levelid { get; set; }
        /// <summary>
        /// 当月总数赢
        /// </summary>
        public long Mwingold { get; set; }
        /// <summary>
        /// 今日输赢
        /// </summary>
        public long Dwingold { get; set; }
        /// <summary>
        /// 今日税收
        /// </summary>
        public long tax { get; set; }
        /// <summary>
        /// 彩池
        /// </summary>
        public long bonudpool { get; set; }
        /// <summary>
        /// 库存平衡值
        /// </summary>
        public long balance { get; set; }
        /// <summary>
        /// 当前库存值
        /// </summary>
        public long invgold { get; set; }
        /// <summary>
        /// 吃分
        /// </summary>
        public long income { get; set; }
        /// <summary>
        /// 吐分
        /// </summary>
        public long outcome { get; set; }
        /// <summary>
        /// 吞吐率
        /// </summary>
        public string rate { get; set; }
        public string  Name { get; set; }
        public int userid { get; set; }
    }

    public class StockLog {
        public DateTime CreateTime { get; set; }
        public int stock { get; set; }
    }
    public class StockTime {
        public DateTime CreateTime { get; set; }
    }
    public class StockVal
    {
        public long stock { get; set; }
    }
}
