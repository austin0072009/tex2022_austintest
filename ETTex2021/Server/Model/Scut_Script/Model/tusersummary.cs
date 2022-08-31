using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 汇总战绩
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tusersummary", StorageType = StorageType.WriteOnlyDB)]
   public class tusersummary : ShareEntity
    {
        public tusersummary()
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
        /// 用户Id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }


        /// <summary>
        /// 用户名
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public string UserName { get; set; }


        /// <summary>
        /// 桌号
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int tnum { get; set; }


        /// <summary>
        /// cid
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int clubid { get; set; }

        /// <summary>
        /// 联盟id
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int allid { get; set; }

        /// <summary>
        /// 战绩
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public long Gains { get; set; }

        /// <summary>
        /// 保险
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public long Insurance { get; set; }

        /// <summary>
        /// 分保险
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public long BranchIns { get; set; }

        /// <summary>
        /// 总税收
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public long totalTax { get; set; }


        [ProtoMember(11)]
        [EntityField]
        public long servicefee { get; set; }


        [ProtoMember(12)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 分税
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public long TaxShare { get; set; }

        [ProtoMember(14)]
        [EntityField]
        public int GameId { get; set; }

        /// <summary>
        /// 房主
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int Owners { get; set; }

        /// <summary>
        /// 房间等级
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public int level { get; set; }

        /// <summary>
        /// 人数
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public int pnum { get; set; }

        /// <summary>
        /// 前注数据
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public int preG { get; set; }

        [ProtoMember(19)]
        [EntityField]
        public int gametype { get; set; }

    }
}
