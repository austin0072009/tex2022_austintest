using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    //红包任务配置
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public class tRedEnvelopesTask : ShareEntity
    {
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }

        /// <summary>
        /// 任务描述
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string TaskName { get; set; }

        /// <summary>
        /// 任务种类(1:幸运红包，2：转运红包   3锦鲤)
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int TaskType{ get; set; }

        /// <summary>
        /// 完成手数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int TaskCount { get; set; }

        //奖励红包个数
        [ProtoMember(5)]
        [EntityField]
        public int RedEnvCount { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateDate { get; set; }
    }
}