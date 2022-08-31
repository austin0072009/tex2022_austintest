using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tuseragent2021", IsExpired = false, StorageType = StorageType.ReadWriteDB)]
    //[EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tuseragent2021")]
    public class tuseragent2021 : BaseEntity
    {

        public tuseragent2021()
        {
            Lv = 0;
            _gWater = new CacheList<GameWater>();
        }
        /// <summary>
        /// 代理ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long ID { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserID { get; set; }
        /// <summary>
        /// clubidx
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int cidx { get; set; }
        /// <summary>
        /// 暂时无用   在关系表区分每个club的代理lv
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int Lv { get; set; }
        /// <summary>
        /// 父级代理ID
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int FUserID { get; set; }
        /// <summary>
        /// 最顶级代理ID
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int TopUserID { get; set; } 

        /// <summary>
        /// 代理获得已领取的历史金币
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public double GoldHistoryCommission { get; set; }
        /// <summary>
        /// 代理获得的未领取的金币
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public double GoldCommission { get; set; } 
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
        /// 最近一次的结算时间 
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public DateTime lastdealtime { get; set; }

        /// <summary>
        /// 赢的流水
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public ulong watergoldadd { get; set; }

        /// <summary>
        /// 输的流水
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public ulong watergoldreduce { get; set; }

        /// <summary>
        /// 下级所有人给自己的业绩
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public ulong childwater { get; set; }
        


        /// <summary>
        /// 上一级给自己设置的分成比例 0~100  如果为0不显示
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int rate { get; set; }

        /// <summary>
        /// 当日手数
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public int todayCardCount { get; set; }

        /// <summary>
        /// 用户对应所有游戏个流水，手数等统计
        /// </summary>
        [ProtoMember(17)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<GameWater> _gWater { get; set; }

        protected override int GetIdentityId() { return UserID; }
    }


    /// <summary>
    /// 个人奖池 指定范围 控制输赢，动态胜率 不带体验
    /// </summary>
    [Serializable, ProtoContract]
    public class GameWater : EntityChangeEvent
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 当前未计算流水
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public long currWater { get; set; }

        /// <summary>
        /// 总流水
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public long totalWater { get; set; }

        /// <summary>
        /// 更新时间
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public DateTime UpdateTime { get; set; }

        /// <summary>
        /// 0：不参与返利计算  1:参与返利计算
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int IsRebate { get; set; }

        /// <summary>
        /// 玩的次数
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int pCount { get; set; }
    }
}
