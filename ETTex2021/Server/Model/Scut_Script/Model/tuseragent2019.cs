using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tuseragent2019", IsExpired = false, StorageType = StorageType.ReadWriteDB)]
    public class tuseragent2019 : BaseEntity
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int UserID { get; set; }
        /// <summary>
        /// 代理等级 10 表示创始人  9表示第二级 仅用于自绑定特殊关系
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int Lv { get; set; }
        /// <summary>
        /// 父级代理ID
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int FUserID { get; set; }
        /// <summary>
        /// 最顶级代理ID
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int TopUserID { get; set; }
        /// <summary>
        /// 最顶级代理ID 的下次 如果是自己不绑定
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int SecondUserID { get; set; }

        /// <summary>
        /// 代理获得已领取的历史金币
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public double GoldHistoryCommission { get; set; }
        /// <summary>
        /// 代理获得的未领取的金币
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public double GoldCommission { get; set; }
        /// <summary>
        /// 代理获得的未领取的金币包括的奖池部分
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public double GoldC_pot { get; set; }
        /// <summary>
        /// 二维码路径
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string QRPath { get; set; }

        /// <summary>
        ///   自己的邀请码
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public string Code { get; set; }

        /// <summary>
        /// 推广二维码网页图片
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public string HtmlUrl { get; set; }

        /// <summary>
        /// 最近一次的结算时间 
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public DateTime lastdealtime { get; set; }

        /// <summary>
        /// 赢的流水
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public ulong watergoldadd { get; set; }

        /// <summary>
        /// 输的流水
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public ulong watergoldreduce { get; set; }

        /// <summary>
        /// 下级所有人给自己的业绩
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public ulong childwater { get; set; }
        /// <summary>
        /// 所有的下级代理 
        /// </summary>
        [ProtoMember(16)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<AgentList> ChildAgents { get; set; }
  
         
        /// <summary>
        /// 仅主盟给下一级设置的分成比例 0~100  如果为0不显示
        /// </summary>
        [ProtoMember(23)]
        public int rate { get; set; }

        /// <summary>
        /// 当日手数
        /// </summary>
        [ProtoMember(24)]
        [EntityField]
        public int todayCardCount { get; set; }
         
         
        protected override int GetIdentityId()
        {
            return UserID;
        }

    }


    [Serializable, ProtoContract]
    public class AgentList : EntityChangeEvent
    {
        public AgentList()
            : base(false)
        {
            CreatTime = DateTime.Now;
        }

        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(1)]
        public int UserID { get; set; }

        /// <summary>
        ///  流水
        /// </summary>
        [ProtoMember(2)]
        public ulong water { get; set; }

        /// <summary>
        /// 累计贡献
        /// </summary>
        [ProtoMember(3)]
        public double income;
        /// <summary>
        /// 今日贡献
        /// </summary>
        [ProtoMember(4)]
        public double tIncome { get; set; }
        /// <summary>
        /// 几级 1级表示直接下级
        /// </summary>
        [ProtoMember(5)]
        public int lv { get; set; }

        /// <summary>
        /// 录入时间
        /// </summary>
        [ProtoMember(6)]
        public DateTime CreatTime { get; set; }

        /// <summary>
        /// 仅主盟给下一级设置的分成比例 0~100
        /// </summary>
        [ProtoMember(7)]
        public int rate { get; set; }

    }
}
