using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tcompeterelation", IsExpired = false)]              //, StorageType = StorageType.ReadWriteDB
    public class tcompeterelation : BaseEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        [ProtoMember(2)]
        [EntityField]
        public int competeid { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public int playerid { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public bool IsEnable { get; set; }
        protected override int GetIdentityId()
        {
            return id;
        }
    }
    public enum CompeteUserInfoType
    {
        joincount = 1,
        wincount = 2,
        totalroundcount = 3,
    }
}
