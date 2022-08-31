using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 会员信息
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tuservipfreecount")]
    public class tuservipfreecount : ShareEntity
    {
        /// <summary>
        /// id
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public string id { get; set; }
        /// <summary>
        /// 用户id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int userid { get; set; }
        /// <summary>
        /// vipid
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int vipid { get; set; }
        /// <summary>
        /// 免费次数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int freecount { get; set; }
        [ProtoMember(5)]
        [EntityField]
        public DateTime createtime { get; set; }
    }
}
