using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    //[EntityTable(CacheType.Dictionary, DbConfig.ConnData)]  
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)] 
    public class tTaxLog : ShareEntity
    {
        ////public tb_TaxRecord()  : base(AccessLevel.WriteOnly)
        ////{ 
        ////}
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }
        /// <summary>
        /// 玩家ID int.max表示系统，其他表示，1，2，3级与总代理的UserID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 变化前金币
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public long BeforCoin { get; set; }

        /// <summary>
        /// 变化的金币数量
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public double ActionCoin { get; set; }

        /// <summary>
        /// 变化后的金币
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long AfterCoin { get; set; }

        /// <summary>
        /// 操作类型，加或减
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public ResActionType ActionType { get; set; }

        /// <summary>
        /// 来源的游戏ID
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int SourceGameID { get; set; }

        /// <summary>
        /// 来源的UserID 即，交税的人，
        /// </summary>
        [ProtoMember(8)]
        [EntityField(ColumnLength = 200)]
        public int SourceUserId { get; set; }
       

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public DateTime CreateDate { get; set; }
        /// <summary>
        /// 关联tableuserlog 
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public long TableUserLogId { get; set; }
        /// <summary>
        /// 关联tableuserlog 
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public bool IsHandel { get; set; }
        /// <summary>
        /// 来源是几级
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int _lv { get; set; }

        /// <summary>
        /// 来源的房间ID
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int SourceRoomID { get; set; }


        [ProtoMember(14)]
        [EntityField]
        public int clubidx { get; set; }


        [ProtoMember(15)]
        [EntityField]
        public int allid { get; set; }

        /// <summary>
        /// 平台实际收入的抽利
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public double PlatCoin { get; set; }

        /// <summary>
        /// SLOT目前需要记录 用户有效流水
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public long UserWater { get; set; }
    }
}
