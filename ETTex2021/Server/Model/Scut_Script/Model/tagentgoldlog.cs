using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 创始人代理系统的   分红日志
    /// </summary>
    [Serializable, ProtoContract] 
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tagentgoldlog", StorageType = StorageType.ReadWriteDB)]
    
    public class tagentgoldlog : ShareEntity
    {
        public tagentgoldlog() : base(AccessLevel.ReadOnly)
        {
        }
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
        public double BeforCoin { get; set; }

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
        public double AfterCoin { get; set; }

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
        /// 来源是哪个房间号
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string tnum { get; set; }

        /// <summary>
        /// 社区或者联盟id
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int clubId { get; set; }

        [ProtoMember(15)]
        [EntityField]
        public int allid { get; set; }

        protected override int GetIdentityId()
        {
          return  (int)Idx;
        }
    }
}
