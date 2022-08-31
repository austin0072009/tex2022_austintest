using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    //红包配置
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, CacheType = CacheType.None)]
    public class tRedEnvelopesConfig :ShareEntity
    {
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }
          
        /// <summary>
        /// 红包金额
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public decimal Money { get; set; }

        /// <summary>
        /// 红包概率
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public decimal Rate { get; set; }

        /// <summary>
        /// 任务种类(1:幸运红包，2：转运红包)
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int TaskType { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateDate { get; set; }
    }
}
