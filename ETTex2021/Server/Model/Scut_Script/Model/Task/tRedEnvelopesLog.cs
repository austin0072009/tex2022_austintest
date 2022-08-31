using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    //玩家(打开)红包记录
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, CacheType = CacheType.None)]
    public class tRedEnvelopesLog : ShareEntity
    {
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }

        /// <summary>
        /// 玩家ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 任务种类(1:幸运红包，2：转运红包)
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int TaskType { get; set; }

        /// <summary>
        /// 红包金额
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int Money { get; set; }
         
        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateDate { get; set; }
    }
}
