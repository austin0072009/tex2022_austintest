using ProtoBuf;
using System;
using ETModel.Framework.Model;
using ETModel.Framework.Cache.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    ///bet log 含金币变化 后续优化成直接写DB
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tbetlog", StorageType = StorageType.WriteOnlyDB)]
    public class tbetlog : ShareEntity
    {
        public tbetlog()
        {
            CreateTime= DateTime.Now;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }
        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int gameid { get; set; }
        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// 之前的金币
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long BeforeGold { get; set; }
        /// <summary>
        /// 改变的金币
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long Gold { get; set; }
        /// <summary>
        /// 之后的金币
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public long AfterGold { get; set; }

        /// <summary>
        /// 底注
        /// </summary>
        [ProtoMember(7)]
        [EntityField(true, ColumnDbType.LongText)]
        public int basegamble { get; set; }

        /// <summary>
        /// 押注金额
        /// </summary>
        [ProtoMember(8)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheDictionary<int, long> bets { get; set; }
        /// <summary>
        /// 开奖结果
        /// </summary>
        [ProtoMember(9)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> res { get; set; } 

        /// <summary>
        /// 是否机器人
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public bool robot { get; set; }
        /// <summary>
        /// 备注（ 总手数）
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public string Remark { get; set; }
       
        [ProtoMember(12)]
        [EntityField]
        public int tnum { get; set; }

        [ProtoMember(13)]
        [EntityField]
        public DateTime CreateTime { get; set; }
    }
}
