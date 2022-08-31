using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, strFixed.strConnectstring, "tbanklog", StorageType = StorageType.ReadWriteDB)]
    public class tbanklog : ShareEntity  // BaseEntity
    {
        public tbanklog()
            : base(true)
        {

        }
        [ProtoMember(1)]
        [EntityField("id", IsKey = true, IsIdentity = true)]
        public int id { get; set; }

        /// <summary>
        /// 操作时间
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string OpDate { get; set; }

        /// <summary>
        /// 操作类型 1转入银行 2backgold 3 转账给  4接受转账
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int OpType { get; set; }

        /// <summary>
        /// 操作金额
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int OpCount { get; set; }

        /// <summary>
        /// 用户Id
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// cidx
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int cidx { get; set; }
        /// <summary>
        /// 转账对象
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int ToUserID { get; set; }
    }
}
