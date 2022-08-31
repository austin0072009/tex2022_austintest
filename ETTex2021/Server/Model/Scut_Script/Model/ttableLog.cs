using ProtoBuf;
using System;
using ETModel.Framework.Model;
using ETModel.Framework.Cache.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 
    /// </summary>                        
    [Serializable, ProtoContract]
    //[EntityTable(CacheType.Entity, strFixed.strConnectstring, "ttableLog", AccessLevel = AccessLevel.WriteOnly, StorageType = StorageType.WriteOnlyDB)]   
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public class ttableLog : ShareEntity
    {
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }
        /// <summary>
        /// 6位
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string MatchCode { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public DateTime StartTime { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 游戏id
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 场次id
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int levelid { get; set; }

        /// <summary>
        /// 单独用户
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int userid { get; set; }

        /// <summary>
        /// 用户list
        /// </summary>
        [ProtoMember(8)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> userids { get; set; }

        [ProtoMember(9)]
        [EntityField]
        public long bet { get; set; }

        [ProtoMember(10)]
        [EntityField]
        public long bets { get; set; }

        public ttableLog():base(AccessLevel.WriteOnly)
        {

        }
    }        

}
