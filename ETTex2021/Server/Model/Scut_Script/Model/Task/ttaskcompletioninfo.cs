using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "ttaskcompletioninfo", IsExpired = false)]
    public class tTaskCompletionInfo : BaseEntity
    {
        /// <summary> 编号 </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary> 用户编号 </summary>
        [ProtoMember(2)]
        [EntityField]
        public int userid { get; set; }
        /// <summary> 任务编号 </summary>
        [ProtoMember(3)]
        [EntityField]
        public int taskid { get; set; }
        /// <summary> 是否领取奖励 </summary>
        [ProtoMember(4)]
        [EntityField]
        public bool IsReceive { get; set; }
        /// <summary> 任务完成时间 </summary>
        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateDate { get; set; }
        /// <summary> 是否启用 </summary>
        [ProtoMember(6)]
        [EntityField]
        public bool IsEnable { get; set; }

        [ProtoMember(7)]
        [EntityField]
        public int AGold { get; set; }

        protected override int GetIdentityId() { return id; }
    }
}
