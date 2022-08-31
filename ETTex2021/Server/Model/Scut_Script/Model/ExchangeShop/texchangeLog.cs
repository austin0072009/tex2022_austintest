using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 商品兑换记录
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public  class texchangeLog: ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true)]
        public string Id { get; set; }
        /// <summary>
        /// 商品ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int CommodityId { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int UserId { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 是否已经处理（是否发货，是否backgold）
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public bool isHandle { get; set; }
        /// <summary>
        /// 单号
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public string oddNumbers { get; set; }
        /// <summary>
        /// 快递单号
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public string expressNumbers { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public string name { get; set; }
        [ProtoMember(9)]
        [EntityField]
        public CommodityType commodityType { get; set; }
        [ProtoMember(10)]
        [EntityField]
        public string  QRCodeUrl { get; set; }
        /// <summary>
        /// 兑换次数
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int exchangeCount { get; set; }
    }
}
