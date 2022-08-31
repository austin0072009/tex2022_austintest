using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// h5配置
    /// </summary>
   public class TSlotConfig : BaseEntity<long>
    {
        /// <summary>
        /// 房间id
        /// </summary>
        public int RoomID { get; set; }
        /// <summary>
        /// 详细配置
        /// </summary>
        public string Config { get; set; }
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }
        /// <summary>
        /// 游戏id
        /// </summary>
        public int GameID { get; set; }
    }
}
