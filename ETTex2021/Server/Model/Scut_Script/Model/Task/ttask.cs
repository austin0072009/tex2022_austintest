using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Script.CsScript.Action;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "ttask", IsExpired = false)]
    public class ttask : BaseEntity
    {
        public ttask()
        {
            condition = new CacheList<TaskCondition>();
            award = new CacheList<PrizeInfo>();
            CreateDate = DateTime.Now;
            EndTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
            IsEnable = true;
        }
        /// <summary> 主键 </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int id { get; set; }
        /// <summary> 任务名称 </summary>
        [ProtoMember(2)]
        [EntityField]
        public string name { get; set; }
        /// <summary> 任务类型 </summary>
        [ProtoMember(3)]
        [EntityField]
        public TaskType type { get; set; }
        /// <summary> 任务显示类型 </summary>
        [ProtoMember(4)]
        [EntityField]
        public TaskShowType showtype { get; set; }
        /// <summary> 任务等级(用于系列任务,比如签到) </summary>
        [ProtoMember(5)]
        [EntityField]
        public int level { get; set; }
        /// <summary> 任务条件 </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<TaskCondition> condition { get; set; }
        /// <summary> 任务奖励 </summary>
        [ProtoMember(7)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<PrizeInfo> award { get; set; }
        /// <summary> 任务描述 </summary>
        [ProtoMember(8)]
        [EntityField]
        public string remark { get; set; }
        /// <summary> 内部编号(用于区分不同的周期任务) </summary>
        [ProtoMember(9)]
        [EntityField]
        public string InternalID { get; set; }
        /// <summary> 任务图片 </summary>
        [ProtoMember(10)]
        [EntityField]
        public string pic { get; set; }
        /// <summary> 任务结束时间 </summary>
        [ProtoMember(11)]
        [EntityField]
        public DateTime EndTime { get; set; }
        /// <summary> 创建时间 </summary>
        [ProtoMember(12)]
        [EntityField]
        public DateTime CreateDate { get; set; }
        [ProtoMember(13)]
        [EntityField]
        public bool IsEnable { get; set; }
        /// <summary> 发放奖励类型 ：0:个人领取，1:邮件发放 2:自动领取 </summary>
        [ProtoMember(14)]
        [EntityField]
        public int issueAwardType { get; set; }
        protected override int GetIdentityId() { return id; }
    }
    /// <summary> 任务条件 </summary>
    [Serializable, ProtoContract]
    public class TaskCondition
    {
        [ProtoMember(1)]
        public string ColumnName;
        [ProtoMember(2)]
        public int Number;
        [ProtoMember(3)]
        public int GameId;
    }
    /// <summary> 任务奖励 </summary>
    [Serializable, ProtoContract]
    public class PrizeInfo
    {
        [ProtoMember(1)]
        public int type;
        /// <summary>
        /// 默认最大额
        /// </summary>
        [ProtoMember(2)]
        public int num;
        /// <summary>
        /// 最小额
        /// </summary>
        [ProtoMember(3)]
        public int minnum;
    }
}
