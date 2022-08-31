using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
   //[EntityTable(AccessLevel.ReadWrite, DbConfig.ConnData, "temail")] 
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    public class temail : ShareEntity
    {
        public temail()
            : base(AccessLevel.ReadWrite)
        {
            Attach = new CacheList<Attach>();
        }

        /// <summary>
        /// 交易号
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public string TradeNo { get; set; }

        /// <summary>
        /// 发送者
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int FromUserId { get; set; }

        /// <summary>
        /// 接收者
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int ToUserId { get; set; }

        /// <summary>
        /// 邮件类型，1交易，2系统,3 个人 4 活动
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public MailTypeEnum MailType { get; set; }

        /// <summary>
        /// 交易内容值
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public string Content { get; set; }

        /// <summary>
        /// 状态，0没有附件，1有附件，2附件已领取
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int State { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// 附件
        /// </summary>
        [ProtoMember(8)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<Attach> Attach { get; set; }

        /// <summary>
        /// 交易内容状态，0失败，1成功 2撤销
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int CState { get; set; }
        /// <summary>
        /// 是否已经查看 或者 表示领取
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public bool IsLook { get; set; }
        /// <summary>
        /// 邮件类型
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int EmailType { get; set; }
        /// <summary>
        /// 邮件标题
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public string Title { get; set; }

        /// <summary>
        /// 发送者名称
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string FromUserName { get; set; }
    }

    [Serializable, ProtoContract]
    public class Attach : EntityChangeEvent
    {
        [ProtoMember(1)]
        public int ItemID { get; set; }
        [ProtoMember(2)]
        public int Num { get; set; }
    }
}
