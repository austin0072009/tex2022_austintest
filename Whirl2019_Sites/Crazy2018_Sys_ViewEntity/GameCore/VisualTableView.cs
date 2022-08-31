using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class VisualTableView
    {
        public int ID { get; set; }
        public int manNum { get; set; }

        public string gameid { get; set; }

        public string gameName { get; set; }
        /// <summary>
        /// 视讯地址1
        /// </summary>
        public string vurl1 { get; set; }
        /// <summary>
        /// 视讯地址2
        /// </summary>
        public string vurl2 { get; set; }

        /// <summary>
        /// 视讯地址2
        /// </summary>
        public string vurl3 { get; set; }
        /// <summary>
        /// 是否开启 1开启  0关闭
        /// </summary>
        public bool state { get; set; }

        /// <summary>
        /// 桌子状态1：启用  0:未启用
        /// </summary>
        public int tablestate { get; set; }

        /// <summary>
        /// 各个位置的牌
        /// </summary>
        public string pakerlist { get; set; }

        public bool IsDel { get; set; }
        public DateTime CreatTime { get; set; }

    }
}
