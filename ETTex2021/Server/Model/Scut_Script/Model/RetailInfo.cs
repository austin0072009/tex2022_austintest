using ETModel.Framework.Model;
using GameSystem;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring_Sns, "retailinfo", IsExpired = false)]              //, StorageType = StorageType.ReadWriteDB
    public class RetailInfo : BaseEntity
    {
        [ProtoMember(1)]
        [EntityField(true)]
        public int Id { get; set; }
        [ProtoMember(2)]
        [EntityField]
        public string RetailID { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public string AppSecret { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public string AppID { get; set; }
        [ProtoMember(5)]
        [EntityField]
        public string Name { get; set; }
        [ProtoMember(6)]
        [EntityField] 
        public long Gold { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public byte Status { get; set; }
        [ProtoMember(8)]
        [EntityField]
        public string Password { get; set; }
        /// <summary>
        /// 比例
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int Ratio { get; set; }
        [ProtoMember(10)]
        [EntityField]
        public int vertion { get; set; }

        protected override int GetIdentityId()
        {
            return Id;
        }
    }
}
