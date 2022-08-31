using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 
    /// </summary>                        
    [Serializable, ProtoContract]
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, CacheType = CacheType.None)]

    public class tUserPropLog : ShareEntity
    {
        public tUserPropLog() : base(true)
        {
            CreateDate = DateTime.Now;
        }
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }
        /// <summary>
        /// 玩家ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// 道具
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int PropID { get; set; }

        /// <summary>
        /// 数量
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int PropCount { get; set; }

        /// <summary>
        /// 0:成功  1:失败
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int Status { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public string remark { get; set; }
    }

}
