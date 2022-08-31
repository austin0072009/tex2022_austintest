using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Game
{
   public class RoomConfigurationView
    {
        public int ID { get; set; }

        /// <summary>
        /// 游戏id
        /// </summary>
        public int Gameid { get; set; }
        /// <summary>
        /// 房间id
        /// </summary>
        public int Roomid { get; set; }
        /// <summary>
        /// 底皮
        /// </summary>
        public int Baseskin { get; set; }
        /// <summary>
        /// 对应底皮
        /// </summary>
        public int CorresBaseskin { get; set; }
        /// <summary>
        /// 持续时间
        /// </summary>
        public int LastTime { get; set; }
        /// <summary>
        /// 最小房间数
        /// </summary>
        public int roomnumbermin { get; set; }
        /// <summary>
        /// 最大房间数
        /// </summary>
        public int roomnumbermax { get; set; }
        /// <summary>
        /// 最小房间人数
        /// </summary>
        public int roompeoplenummin { get; set; }
        /// <summary>
        /// 最大房间人数
        /// </summary>
        public int roompeoplenumax { get; set; }
        /// <summary>
        /// 最小围观人数
        /// </summary>
        public int Lookonnummin { get; set; }
        /// <summary>
        /// 最大围观人数
        /// </summary>
        public int Lookonnummax { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public string CreateTime { get; set; }

        /// <summary>
        /// 游戏名称
        /// </summary>
        public string  gamename { get; set; }
        /// <summary>
        /// 房间名称
        /// </summary>
        public string  roomname { get; set; }

        public bool isdelroomset { get; set; }
    }
}
