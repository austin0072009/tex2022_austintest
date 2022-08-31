using ProtoBuf;
using System;
using ETModel.Framework.Model;
using ETModel.Script.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 推广红包配置
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "textenconfig")]
   public class textenconfig : ShareEntity
    {
        public textenconfig() : base(true)
        {
        }
        [ProtoMember(1)]
        [EntityField("Id", IsKey = true, IsIdentity = true)]
        public int Id { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public DateTime stime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public DateTime etime { get; set; }

        /// <summary>
        /// 任务目标值
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int tvalues { get; set; }

        /// <summary>
        /// 活动描述
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public string des { get; set; }


        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateTime { get; set; }

    }
}
