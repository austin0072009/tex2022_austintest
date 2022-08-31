using ETModel.Framework.Model;
using ETModel.Script.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.CsScript.Action
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tusertaskkv", IsExpired = false)]
    public class tusertaskkv : BaseEntity
    {
        /// <summary> 数据编号 </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary> 用户编号 </summary>
        [ProtoMember(2)]
        [EntityField]
        public int userid { get; set; }
        [ProtoMember(3)]
        [EntityField]
        public int gameid { get; set; }
        /// <summary> 数据类型 </summary>
        [ProtoMember(4)]
        [EntityField]
        public TaskDataType type { get; set; }
        /// <summary> 数据值 </summary>
        [ProtoMember(5)]
        [EntityField]
        public int num { get; set; }

        protected override int GetIdentityId()
        {
            return id;
        }
    }
}
