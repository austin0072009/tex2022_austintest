using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tcompetitionconfig", IsExpired = false)]
    public class tcompetitionconfig : BaseEntity
    {
        /// <summary> 编号 </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int Id { get; set; }
        /// <summary> 配置编号 </summary>
        [ProtoMember(2)]
        [EntityField]
        public int blindsconfigId { get; set; }
        /// <summary> 等级 </summary>
        [ProtoMember(3)]
        [EntityField]
        public int level { get; set; }
        /// <summary> 基础分 </summary>
        [ProtoMember(4)]
        [EntityField]
        public int Minblind { get; set; }
        /// <summary> 大盲 </summary>
        [ProtoMember(5)]
        [EntityField]
        public int Maxblind { get; set; }
        /// <summary> 前注 </summary>
        [ProtoMember(6)]
        [EntityField]
        public int pregamble { get; set; }

        protected override int GetIdentityId()
        {
            return Id;
        }
    }
}
