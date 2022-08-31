using ETModel.Framework.Model;
using ETModel.Script.CsScript.Action;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "blindsconfig", IsExpired = false)]
    public class Blindsconfig : BaseEntity
    {
        [ProtoMember(1)]
        [EntityField(true)]
        public int Id { get; set; }
        [ProtoMember(2)]
        [EntityField]
        public string level { get; set; }

        protected override int GetIdentityId()
        {
            return Id;
        }
    }
}
