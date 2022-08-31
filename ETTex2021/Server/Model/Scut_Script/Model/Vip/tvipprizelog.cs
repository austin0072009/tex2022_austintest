using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tvipprizelog")]
    public class tvipprizelog : ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true)]
        public string id { get; set; }
        /// <summary>
        /// 用户id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int userId { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public DateTime createtime { get; set; }
        /// <summary>
        /// 奖品id
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int prizeid { get; set; }
        /// <summary>
        /// 场次id
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int turntableid { get; set; }
        /// <summary>
        /// 是否为免费次数
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public bool isgive { get; set; }
    }
}
