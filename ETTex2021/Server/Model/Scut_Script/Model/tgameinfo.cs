using System;
using System.Collections.Generic;
using ETModel.Framework.Model;
using ProtoBuf;
using ETModel.Framework.Game.Context;

namespace ETModel.Script.Model
{
    ////[Serializable, ProtoContract]
    ////[EntityTable(AccessLevel.ReadOnly, "ConnData", "tgameinfo", StorageType = StorageType.ReadOnlyDB)]
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tgameinfo", IsExpired = false)]
    public class tgameinfo : ShareEntity  // BaseEntity
    {
        public tgameinfo()
            : base(true)
        {
            IsRun = 1;
        }
        [ProtoMember(1)]
        [EntityField("id", IsKey = true, IsIdentity = true)]
        public int id { get; set; }
        [ProtoMember(2)]
        [EntityField]
        public string name { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public string desc { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public string icon { get; set; }

        /// <summary>
        /// 是否显示  打开
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public bool isopen { get; set; } 
        [ProtoMember(6)]
        [EntityField]
        public string modifyUser { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public DateTime modifyTime { get; set; } 
        [ProtoMember(8)]
        [EntityField]
        public int Sort { get; set; }

        /// <summary>
        /// 游戏类型1是热门 2是真人 三是捕鱼 四是电子 5是电子竞技 
        /// 
        ///针对JD平台{老虎机0、14  鱼机7   街机9   彩票 12   棋排18}
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int type { get; set; }

        /// <summary>
        /// 是否热门游戏 1热门
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int isHot { get; set; }

        /// <summary>
        /// 游戏url
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public string gameurl { get; set; }

        /// <summary>
        /// 游戏端口
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int port { get; set; }

        /// <summary>
        /// 平台类型  0自己游戏  1tp平台   2jdb平台
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int platType { get; set; }

        /// <summary>
        /// jdb平台的游戏类型   值不会变
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int jdbType { get; set; }


        /// <summary>
        /// 是否允许  不运行前端显示  **期待
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int IsRun { get; set; }
        /// <summary>
        /// 游戏版本
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public string GameVersion { get; set; }

    }
}
