using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 用户联系方式
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, strFixed.strConnectstring, "tUserContact")]
    public class tUserContact: ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true)]
        public string Id { get; set; }
        /// <summary>
        /// 收货人名称
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string Name { get; set; }
        /// <summary>
        /// 收货人电话
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public string Mobile { get; set; }
        /// <summary>
        /// 邮编
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public string  PostCode { get; set; }
        /// <summary>
        /// 地址
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public string Address { get; set; }
        /// <summary>
        /// 中奖用户ID
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int UserId { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        [ProtoMember(8)]
        [EntityField]
        public DateTime UpdateTime { get; set; }
    }
}
