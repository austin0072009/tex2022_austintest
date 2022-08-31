using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "competeproperty", IsExpired = false)]
    /// <summary> 比赛属性 </summary>
    public class CompeteProperty : BaseEntity
    {
        public CompeteProperty()
        {
            IsEnable = true;
        }
        /// <summary> 属性编号 </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int ID { get; set; }
        /// <summary> 比赛模板编号 </summary>
        [ProtoMember(2)]
        [EntityField]
        public int CompeteTemplateID { get; set; }
        /// <summary> 字段名称 </summary>
        [ProtoMember(3)]
        [EntityField]
        public string FieldName { get; set; }
        /// <summary> 属性名称 </summary>
        [ProtoMember(4)]
        [EntityField]
        public string Name { get; set; }
        /// <summary> 属性值 </summary>
        [ProtoMember(5)]
        [EntityField]
        public string Value { get; set; }
        /// <summary> 是否启用 </summary>
        [ProtoMember(6)]
        [EntityField]
        public bool IsEnable { get; set; }

        protected override int GetIdentityId()
        {
            return ID;
        }
    }
}
