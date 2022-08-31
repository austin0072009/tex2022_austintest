using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Game
{
   public class GameInfoModel
    {
        public int ID { get; set; }
        public string  Name { get; set; }
        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string GameIntroduce { get; set; }
        /// <summary>
        /// 游戏规则
        /// </summary>
        public string GameRule { get; set; }
    }
}
