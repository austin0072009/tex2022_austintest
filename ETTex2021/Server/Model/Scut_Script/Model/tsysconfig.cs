using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 系统配置表
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tsysconfig")]
    public class tsysconfig  : ShareEntity
    {
        public tsysconfig():base(true)
        {
        }
        [ProtoMember(1)]
        [EntityField("Id", IsKey = true, IsIdentity = true)]
        public int Id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string Key { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public string Val { get; set; }


        [ProtoMember(4)]
        [EntityField]
        public string Dec { get; set; }

        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateTime { get; set; }

    }
}
