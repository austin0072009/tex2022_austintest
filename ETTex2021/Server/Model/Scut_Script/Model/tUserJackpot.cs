using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 个人奖池
    /// </summary>
    [Serializable, ProtoContract]  
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tUserJackpot", IsExpired = false, StorageType = StorageType.ReadWriteDB)]
    public class tUserJackpot : BaseEntity
    {
        public tUserJackpot()
            : base(AccessLevel.ReadWrite)
        {
            _potRange = new CacheList<UJackpotRange>();


        }

       
        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int UserId { get; set; }
          
        /// <summary>
        /// 更新时间
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public DateTime updatetime { get; set; }
        /// <summary>
        /// 赢的流水
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public ulong watergoldadd { get; set; }

        /// <summary>
        /// 输的流水
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public ulong watergoldreduce { get; set; }

        /// <summary>
        /// 总充值的金币
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public ulong AllGoldAdd { get; set; }
          
        /// <summary>
        /// 用户对应所有游戏个人奖池列表
        /// </summary>
        [ProtoMember(7)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<UJackpotRange> _potRange { get; set; }

        /// <summary>
        /// 当日充值次数
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int chargeCount { get; set; }

        /// <summary>
        /// 当日点控输次数
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int DgLoseTimes { get; set; }
        /// <summary>
        /// 点控 总 输赢金额 目标 i
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public long DgTotalScore { get; set; }
        /// <summary>
        /// 剩余目标  j
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public long DgCurrScore { get; set; }
        /// <summary>
        /// 点控状态 0：未被点控，1:点控赢  2：点控输
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int DgStatus { get; set; }
        /// <summary>
        /// 点控起效的类型 0:新手点控，1:自动点控，2:GM点控
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int EffecTiveType { get; set; }
        /// <summary>
        /// 作弊率
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int DgLimit { get; set; }
        /// <summary>
        /// 奖池 会清0
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public long _pot { get; set; }

        protected override int GetIdentityId()
        {
            return UserId;
        }
    }   

    /// <summary>
    /// 个人奖池 指定范围 控制输赢，动态胜率 不带体验
    /// </summary>
    [Serializable, ProtoContract]
    public class UJackpotRange : EntityChangeEvent
    {
        /// <summary>
        /// 点控类型 0:新手点控，1:自动点控，2:GM点控
        /// </summary>
        [ProtoMember(1)]
        [EntityField]
        public int _type { get; set; }
        /// <summary>
        /// 点控方向：是否是赢
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public bool bWin { get; set; }
        /// <summary>
        /// 控分目标 优化级最高
        /// </summary>
        [ProtoMember(3)]
        public long goldt { get; set; }
        /// <summary>
        /// 开始时间  
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public DateTime stime { get; set; }

        /// <summary>
        /// 结束时间  时间到了强制结束 
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public DateTime end { get; set; }
        /// <summary>
        /// 点控阈值系数百分比 默认100%
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int ControlLimitRatio { get; set; }
        /// <summary>
        /// 点控收尾系数百分比 默认50%
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int ControlEndRatio { get; set; }
        /// <summary>
        /// 点控力度
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int DgLimit { get; set; }
    }
    /// <summary>
    /// 自动点控力度配置
    /// </summary>
    [Serializable, ProtoContract]
    public class DKUserStock : EntityChangeEvent
    {
        /// <summary>
        /// 最低奖池分数
        /// </summary>
        [ProtoMember(1)]
        [EntityField]
        public long potScore { get; set; }
        /// <summary>
        /// 作弊率基数
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int baseNum { get; set; }
        /// <summary>
        /// 自动点控额度比例下限
        /// </summary>
        [ProtoMember(3)]
        public float minValue { get; set; }
        /// <summary>
        /// 自动点控额度比例上限  
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public float maxValue { get; set; }
    }
    public class DKStatus
    {
        /// <summary>
        /// 点控状态：0：未点控，1：点控赢，2：点控输
        /// </summary>
        public int status { get; set; }
        /// <summary>
        /// 点控阈值系数计算得分
        /// </summary>
        public long MaxLimit { get; set; }
        /// <summary>
        /// 点控收尾系数计算得分 (点赢起效)
        /// </summary>
        public long MinLimit { get; set; }
        /// <summary>
        /// 点控进度
        /// </summary>
        public long currScore { get; set; }
        /// <summary>
        /// 点控目标
        /// </summary>
        public long TotalScore { get; set; }
        /// <summary>
        /// 点控力度
        /// </summary>
        public int DgLimit { get; set; }
    }
    public class DKNewPlayer
    {
        /// <summary>
        /// 新手点控开关 0：关 1：开
        /// </summary>
        public int IsOpenNewControl { get; set; }
        /// <summary>
        /// 新手玩家玩的局数，大于则不为新手
        /// </summary>
        public int NewPlayerPlayCount { get; set; }
        /// <summary>
        /// 新手流水 ，超过了则不为新手
        /// </summary>
        public ulong NewPlayerWater { get; set; }
        /// <summary>
        /// 新手点控额度 
        /// </summary>
        public int[] DKTotalScore { get; set; }
        /// <summary>
        /// 普通玩家作弊率
        /// </summary>
        public int NormalDKLimit { get; set; }
        /// <summary>
        /// 充值玩家作弊率
        /// </summary>
        public int ReChangeDKLimit { get; set; }
        /// <summary>
        /// 新手充值玩家新增新手点控额度的几率，百分比下限，百分比上限，单次上限：(20%，0.2，0.4 ，50000)
        /// </summary>
        public float[] ReChangeBuffDKScore { get; set; }
    }
}
