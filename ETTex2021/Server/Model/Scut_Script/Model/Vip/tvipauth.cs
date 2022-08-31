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
    /// 会员权限信息
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tvipauth")]
    public class tvipauth: ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary>
        /// 会员ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int vipid { get; set; }
        /// <summary>
        /// 会员拥有的权限信息
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int authid { get; set; }
    }
}
