using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 砖石消耗日志
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tDiamondChangeLog", StorageType = StorageType.WriteOnlyDB)]
    public class tDiamondChangeLog : ShareEntity
    {
        public tDiamondChangeLog()
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
        /// 之前的砖石
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public double BeforeGold { get; set; }

        /// <summary>
        /// 改变的砖石
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public double Gold { get; set; }

        /// <summary>
        /// 之后的砖石
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public double AfterGold { get; set; }

        /// <summary>
        /// 1上下分砖石   2:购买商城金币礼包  3:购买月卡 年卡  4::升级联盟   5:升级club  6：购买联盟币   7购买基金   8强制秀牌
        /// 9查看公牌余牌   10：开房扣除   11申请延时  12修改club名称   13修改昵称  14创建联盟
        /// 20发弹幕    21发表情 22任务奖励
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int ChangeType { get; set; }


        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        [ProtoMember(8)]
        [EntityField]
        public string Remark { get; set; }
    }
}
