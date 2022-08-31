using ETModel.Framework.Model;
using ProtoBuf;
using System;
using System.Collections.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 个人奖池
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    public class tVisitLimit : ShareEntity
    {
        public tVisitLimit()
            : base(AccessLevel.ReadWrite)
        { }

        /// <summary>
        /// ip端口
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public string ipport { get; set; }

        /// <summary>
        /// 单位日期节点
        /// </summary>
        [ProtoMember(2)]
        [EntityField(true, ColumnDbType.LongText)]
        public Dictionary<int, int> dateRecord { get; set; }

        /// <summary>
        /// 单位区间访问量
        /// </summary>
        [ProtoMember(3)]
        [EntityField(true, ColumnDbType.LongText)]
        public Dictionary<int, int> unitRcord { get; set; }

        /// <summary>
        /// 单位日期最大访问量
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int dateMaxLimit { get; set; }

        /// <summary>
        /// 单位区间最大访问量
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int unitMaxLimit { get; set; }
    }
}
