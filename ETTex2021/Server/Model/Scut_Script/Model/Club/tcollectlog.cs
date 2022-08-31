using ProtoBuf;
using System;
using System.Collections.Generic;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 牌局 （单局收藏日志）
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, strFixed.strConnectstring, "tcollectlog", IsExpired = false, StorageType = StorageType.ReadWriteDB)]
    public class tcollectlog : ShareEntity
    {
        public tcollectlog()
        {
            CreateTime = DateTime.Now;
            Id = Guid.NewGuid().ToString();
            OwnSpair = new List<int>();
            OwnWin = 0;
            seeNum = 1;
        }
        /// <summary>
        /// 主键guid
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public string Id { get; set; }

        /// <summary>
        /// 单场详情
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string sceneInfo { get; set; }

        /// <summary>
        /// 单场用户数据
        /// </summary>
        [ProtoMember(3)]
        [EntityField(true, ColumnDbType.LongText)]
        public string sceneUserInfo { get; set; }

        /// <summary>
        /// 收藏玩家id
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 6位桌子号
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int tnum { get; set; }

        /// <summary>
        /// 单局的唯一id
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string infoId { get; set; }


        [ProtoMember(10)]
        [EntityField]
        public int baserate { get; set; }

        /// <summary>
        /// 当前局数
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int gNum { get; set; }

        /// <summary>
        /// 总局数
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int totalnum { get; set; }

        /// <summary>
        /// 赢家id
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int WinUserId { get; set; }

        [ProtoMember(14)]
        [EntityField]
        public long WinGold { get; set; }

        /// <summary>
        /// 查看次数
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int seeNum { get; set; }

        /// <summary>
        /// 没有弃牌个数
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public int NoGiveupNum { get; set; }

        /// <summary>
        /// 最大组合牌
        /// </summary>
        [ProtoMember(17)]
        [EntityField(true, ColumnDbType.LongText)]
        public List<int> maxPoker { get; set; }

        /// <summary>
        /// 参与游戏会有自己的手牌
        /// </summary>
        [ProtoMember(18)]
        [EntityField(true, ColumnDbType.LongText)]
        public List<int> OwnSpair { get; set; }

        /// <summary>
        /// 参与游戏这局的输赢
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public long OwnWin { get; set; }

        /// <summary>
        /// 前注值
        /// </summary>
        [ProtoMember(20)]
        [EntityField]
        public int preG { get; set; }

        /// <summary>
        /// 保存所有玩家  
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public string PlayerList { get; set; }

        [ProtoMember(22)]
        [EntityField]
        public int showCard { get; set; }

        /// <summary>
        /// 共牌
        /// </summary>
        [ProtoMember(23)]
        [EntityField(true, ColumnDbType.LongText)]
        public List<int> compoker { get; set; }


        /// <summary>
        /// 一局最大的筹码
        /// </summary>
        [ProtoMember(24)]
        [EntityField]
        public long maxPot { get; set; }
    }
}
