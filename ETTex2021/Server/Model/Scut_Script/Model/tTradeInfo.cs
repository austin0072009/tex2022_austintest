using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    public class tTradeInfo : ShareEntity
    {
        public tTradeInfo()
            : base(AccessLevel.ReadWrite)
        {}

        /// <summary>
        /// 交易号(yyyyMMdd+10000001)
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public string TradeNo { get; set; }

        /// <summary>
        /// 出售者ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int FromUserId { get; set; }

        /// <summary>
        /// 购买者ID
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int ToUserId { get; set; }

        /// <summary>
        /// 出售金币数量
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long Coin { get; set; }

        /// <summary>
        /// 税
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long TaxCoin { get; set; }

        /// <summary>
        /// 状态，0待打米，1待出售，2交易完成，3已过期
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int State { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// 交易类型，0金币，1钻石，2金币钻石，3无
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int TradeType { get; set; }
        /// <summary>
        /// 钻石数量
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public long Diamond { get; set; }
        /// <summary>
        /// 钻石税
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public long TaxDiamond { get; set; }
    }
}
