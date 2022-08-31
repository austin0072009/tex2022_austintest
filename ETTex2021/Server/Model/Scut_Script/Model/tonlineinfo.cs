using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 在线人数信息
    /// </summary>
    [Serializable]
    [EntityTable(CacheType.Entity, strFixed.strConnectstring, "tonlineinfo", StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public class tonlineinfo : ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity =true)]
        public long id { get; set; }
        /// <summary>
        /// 游戏类型
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int GameId { get; set; }
        /// <summary>
        /// 游戏类型
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int GameType { get; set; }
        /// <summary>
        /// 在线人数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int OnlineCount { get; set; }
        /// <summary>
        /// 房间ID
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int RoomId { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 游戏方式（门卡,金币）
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int GameModel { get; set; }

        /// <summary>
        /// 机器人数量
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int rCount { get; set; }

    }
}
