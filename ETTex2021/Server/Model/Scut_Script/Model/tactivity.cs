using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tactivity")]
    public class tactivity : ShareEntity
    {
        public tactivity()
        {
            CreateDate = DateTime.Now;
        }
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int ID { get; set; }
        [ProtoMember(2)]
        [EntityField]
        public string ImgUrl { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public string Title { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public string Content { get; set; }
        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateDate { get; set; }
    }
}
