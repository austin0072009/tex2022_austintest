using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 兑换物品
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.ReadWriteRedis, CacheType = CacheType.None)]
    public class tCommodity : ShareEntity
    {
        public tCommodity()
        {
            ClubCount = 0;
            TableCount = 0;
        }

        [ProtoMember(1)]
        [EntityField(IsKey = true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string name { get; set; }
        /// <summary>
        /// 商品礼物介绍
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public string introduce { get; set; }
        /// <summary>
        /// 兑换金币值  和 月卡有效期天数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public double exchangeValue { get; set; }
        /// <summary>
        /// 商品类型  2金币   1砖石   3购买会员卡
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public CommodityType commodityType { get; set; }
        [ProtoMember(6)]
        [EntityField]
        /// <summary>
        /// 图片地址
        /// </summary>
        public string url { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 是否启用
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public bool isEnable { get; set; }
        /// <summary>
        /// 商品价值（砖石）
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public float commodityvValue { get; set; }

        /// <summary>
        /// 优惠描述   如  送4千
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public string Discount { get; set; }
        [ProtoMember(11)]
        [EntityField]
        /// <summary>
        /// 可以创建数量
        /// </summary>
        public int ClubCount { get; set; }
        [ProtoMember(12)]
        [EntityField]
        /// <summary>
        /// 可以创建牌局数量
        /// </summary>
        public int TableCount { get; set; }
    }
}
