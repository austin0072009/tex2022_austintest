using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{

    [Serializable, ProtoContract]
    //[EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tuseragent2021relation")]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tuseragent2021relation", IsExpired = false, StorageType = StorageType.ReadWriteDB)]
    public class tuseragent2021relation : BaseEntity
    {

        public tuseragent2021relation()
        {
            IsAgent = 0;
            IsReceiveExten = 0;
            IsReceiveOwnExten = 0;
            IsDel = 0;
        }

        /// <summary>
        /// 关系编号(主键)
        /// </summary
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int ID { get; set; }
        /// <summary>
        /// 父节节点编号
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int ParentID { get; set; }
        /// <summary>
        /// 用户编号
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int UserID { get; set; }
        /// <summary>
        /// clubidx
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int cidx { get; set; }

        /// <summary>
        ///  流水
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public ulong water { get; set; }

        /// <summary>
        /// 累计贡献反利
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public double income { get; set; }
        /// <summary>
        /// 今日贡献
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public double tIncome { get; set; }
        /// <summary>
        /// 几级 1级表示直接下级
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int lv { get; set; }
        /// <summary>
        /// 录入时间
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public DateTime CreatTime { get; set; }

        /// <summary>
        /// 上级的rate * 本级的showrate
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int rate { get; set; }
        /// <summary>
        /// set by fuserid
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int showrate { get; set; }


        /// <summary>
        /// 是否代理
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int IsAgent { get; set; }


        /// <summary>
        ///   自己的邀请码
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string Code { get; set; }

        [ProtoMember(14)]
        [EntityField]
        public DateTime lastdealtime { get; set; }


        /// <summary>
        /// 代理获得已领取的历史金币
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public double GoldHistoryCommission { get; set; }
        /// <summary>
        /// 代理获得的未领取的金币
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public double GoldCommission { get; set; }

        /// <summary>
        /// 领取的推广金
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public double ExtenGold { get; set; }


        /// <summary>
        /// 上级是否领取推广金
        /// 1领取
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public int IsReceiveExten { get; set; }

        /// <summary>
        /// 是否领取自己的推广金
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public int IsReceiveOwnExten { get; set; }


        [ProtoMember(20)]
        [EntityField]
        public int IsDel { get; set; }

        protected override int GetIdentityId() { return ID; }
    }

}
