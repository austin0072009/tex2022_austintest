using ProtoBuf;
using System;
using ETModel.Framework.Model;
using ETModel.Script.Model;

namespace Model.Scut_Script.Model
{
    /// <summary>
    /// 推广金日志
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "textengoldlog", StorageType = StorageType.WriteOnlyDB)]
    public class textengoldlog : ShareEntity
    {

        public textengoldlog()
        {
            CreateTime = DateTime.Now;
            ChangeType = 1;
        }


        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }
        /// <summary>
        /// 用户Id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 领取总金额
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public double Gold { get; set; }

        /// <summary>
        /// 1领取(到余额)
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int ChangeType { get; set; }



        [ProtoMember(5)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 平台金额
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int PlatGold { get; set; }


        /// <summary>
        /// 社区金额
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int ClubGold { get; set; }


        /// <summary>
        /// 联盟金额
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int AllidGold { get; set; }


        [ProtoMember(8)]
        [EntityField]
        public int allidid { get; set; }


        [ProtoMember(9)]
        [EntityField]
        public int clubid { get; set; }

    }
}
