using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData, IsExpired = false)]
    public class tActiveCode : ShareEntity
    {
        public tActiveCode()
            : base(AccessLevel.ReadWrite)
        { }

        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int Id { get; set; }
        /// <summary>
        /// 激活码
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int Activecode { get; set; }

        /// <summary>
        /// 联盟编号
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int cidx { get; set; }

        /// <summary>
        /// 使用者
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int UseUserId { get; set; }
        /// <summary>
        /// 生成者
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int GenerateUserId { get; set; }
        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateDate { get; set; }
    }
}
