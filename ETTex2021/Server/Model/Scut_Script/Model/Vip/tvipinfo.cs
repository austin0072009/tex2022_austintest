using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 会员信息
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tvipinfo")]
    public class tvipinfo: ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary>
        /// 会员等级
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int viplevel { get; set; }
        /// <summary>
        /// 会员名称
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public string name { get; set; }
        [ProtoMember(4)]
        [EntityField]
        /// <summary>
        /// 对应的商品id
        /// </summary>
        public int commodid { get; set; }
    }
}
