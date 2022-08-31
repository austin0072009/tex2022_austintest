using ETModel.Framework.Model;
using ProtoBuf;
using System;
using System.Collections.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 
    /// </summary>                        
    [Serializable, ProtoContract]
    //[EntityTable(CacheType.Entity, strFixed.strConnectstring, "ttableRecorkMJLog", AccessLevel = AccessLevel.WriteOnly, StorageType = StorageType.WriteOnlyDB)]   
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "ttableRecorkMJLog", StorageType = StorageType.WriteOnlyDB)]
    public class ttableLogMJ : ShareEntity
    {
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, DbType = ColumnDbType.Varchar)]
        public string Idx { get; set; }
        /// <summary>
        /// 6位
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string MatchCode { get; set; }         

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public DateTime CreateTime { get; set; }
         
        /// <summary>
        /// 小局录像数据
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public string actions { get; set; }

        [ProtoMember(5)]
        [EntityField]
        public string HistoryId { get; set; }

        /// <summary>
        /// 战绩数据
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public string RecordUser { get; set; }
        /// <summary>
        /// 参与了小局的玩家id   查战绩需要
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public string uids { get; set; }

        [ProtoMember(8)]
        [EntityField]
        public int gameid { get; set; }

        [ProtoMember(9)]
        [EntityField]
        public string TableInfo { get; set; }

        /// <summary>
        /// 读取actions
        /// </summary>
        public List<string> _actions { get; set; }


        public ttableLogMJ():base(AccessLevel.WriteOnly)
        {
            Idx = Guid.NewGuid().ToString();
        }
    }        

}
