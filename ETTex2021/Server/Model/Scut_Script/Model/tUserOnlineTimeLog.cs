using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 
    /// </summary>                        
    [Serializable, ProtoContract]
    //[EntityTable(CacheType.Entity, strFixed.strConnectstring, "ttableLog", AccessLevel = AccessLevel.WriteOnly, StorageType = StorageType.WriteOnlyDB)]   
    //[EntityTable(AccessLevel.ReadWrite, strFixed.strConnectstring, "tuseronlinetimeLog")]
    //[EntityTable( AccessLevel = AccessLevel.ReadWrite)]
    //[EntityTable(AccessLevel.ReadWrite, strFixed.strConnectstring, "tuseronlinetimeLog", StorageType = StorageType.ReadWriteDB, CacheType = CacheType.None)]
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, CacheType = CacheType.None)]

    //[EntityTable(ConnectKey = strFixed.strConnectstring,TableName = "tuseronlinetimeLog", StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public class tUserOnlineTimeLog : ShareEntity
    {
        public tUserOnlineTimeLog() : base(true)
        {
        }
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }
        /// <summary>
        /// 玩家ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 登录时间
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public long HallLogInTime { get; set; }

        /// <summary>
        /// 退出时间
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long HallLogOutTime { get; set; }
        /// <summary>
        /// 登录时间
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long GameLogInTime { get; set; }

        /// <summary>
        /// 退出时间
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public long GameLogOutTime { get; set; }
        /// <summary>
        /// 游戏id
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 场次ID
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int levelid { get; set; }
    }

}
