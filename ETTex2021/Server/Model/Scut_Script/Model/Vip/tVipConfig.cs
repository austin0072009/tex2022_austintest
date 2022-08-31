
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ProtoBuf;
using System;

//namespace ETModel.Script.CsScript.Action
namespace ETModel.Script.Model
{
    /// <summary>
    /// 道具配置
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tVipConfig")]
    public class tVipConfig : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tVipConfig()
            : base(true)
        {

        }

        [ProtoMember(1)]
        [EntityField(true, IsIdentity = false)]
        public int Id { get; set; }

        /// <summary>
        ///  升级经验
        /// </summary>
        [ProtoMember(2)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> UpExps { get; set; }

        /// <summary>
        ///  掉经验
        /// </summary>
        [ProtoMember(3)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheDictionary<int,int> DropExps { get; set; }

        /// <summary>
        ///  升级规则
        /// </summary>
        [ProtoMember(4)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<RuleInfo> UpRule { get; set; }

        /// <summary>
        ///  折扣
        /// </summary>
        [ProtoMember(5)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<float> Discount { get; set; }

        /// <summary>
        ///  升级奖励
        /// </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> UpReward { get; set; }

        /// <summary>
        ///  每月奖励
        /// </summary>
        [ProtoMember(7)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> MonthReward { get; set; }

        /// <summary>
        ///  每日免费提现次数
        /// </summary>
        [ProtoMember(8)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> FreeWithdrawTimes { get; set; }

        /// <summary>
        ///  每笔提现额度
        /// </summary>
        [ProtoMember(9)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> WithdrawLimit { get; set; }

        /// <summary>
        /// 每月发放奖励时间
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int MonthDay { get; set; }
        /// <summary>
        /// 有效押注分数
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int ValidBetScore { get; set; }
    }

    /// <summary>
    /// 规则信息
    /// </summary>
    [Serializable, ProtoContract]
    public class RuleInfo
    {
        /// <summary>
        /// 大盲
        /// </summary>
        [ProtoMember(1)]
        public int BigRate { get; set; }
        /// <summary>
        /// 小盲
        /// </summary>
        [ProtoMember(2)]
        public int SmallRate { get; set; }
        /// <summary>
        /// 游戏次数
        /// </summary>
        [ProtoMember(3)]
        public int GameTimes { get; set; }
        /// <summary>
        /// 经验
        /// </summary>
        [ProtoMember(4)]
        public int Exp { get; set; }

        /// <summary>
        /// 游戏类型:0 德州扑克  1:小游戏
        /// </summary>
        [ProtoMember(5)]
        public int GameType { get; set; }

        /// <summary>
        /// 流水
        /// </summary>
        [ProtoMember(6)]
        public int Water { get; set; }
    }
}