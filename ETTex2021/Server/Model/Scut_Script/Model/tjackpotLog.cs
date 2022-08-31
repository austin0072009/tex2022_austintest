using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    ///奖池记录表 
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tjackpotLog", StorageType = StorageType.ReadWriteDB)]
    public class tjackpotLog : ShareEntity
    {
        public tjackpotLog()
        {
            CreateTime = DateTime.Now;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }

        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int GameId { get; set; }

        /// <summary>
        /// 场次ID
        /// </summary>        
        [ProtoMember(3)]
        [EntityField]
        public int RoomId { get; set; }

        [ProtoMember(4)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 玩家实际获赔付金额
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long Gold { get; set; }

        /// <summary>
        /// 大奖类型（1：天皇；2：朵皇；3：朵朵 10: 保险）
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int JackpotType { get; set; }

        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 奖池类型 1收入    2支出  3奖池衰减
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int ChangeType { get; set; }
        /// <summary>
        /// 记录哪一桌产生的保险
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int tnum { get; set; }
        /// <summary>
        /// 这个桌子的创建者
        /// </summary>

        [ProtoMember(10)]
        [EntityField]
        public int Owner { get; set; }
        /// <summary>
        /// 标识是否结算给了总代  保险
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public bool IsSettlement { get; set; }

        [ProtoMember(12)]
        [EntityField]
        public int clubid { get; set; }

        [ProtoMember(13)]
        [EntityField]
        public int allid { get; set; }

        /// <summary>
        /// 购买的金额
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public long BetIns { get; set; }

        /// <summary>
        /// 平台实际收入支出的金额
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public long PlatGold { get; set; }

        /// <summary>
        /// np需要记录手牌
        /// </summary>
        [ProtoMember(16)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> ShouPair { get; set; }

    }
}

