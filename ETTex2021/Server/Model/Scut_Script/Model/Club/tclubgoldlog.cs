using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// club的club币日志
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubgoldlog", StorageType = StorageType.WriteOnlyDB)]
    public class tclubgoldlog : ShareEntity
    {
        public tclubgoldlog()
        {
            CreateTime = DateTime.Now;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int Id { get; set; }

        /// <summary>
        /// 1发放   2回收  3玩家退出默认回收  4管理员修改
        /// 5税收   6房间退利    7房间带入   8联盟发币  9联盟回收
        /// 10玩家退出    11保险
        /// 类型需要与tclubusergoldlog保持同步
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int ChangeType { get; set; }

        /// <summary>
        /// 之前的club币
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public double BeforeGold { get; set; }


        /// <summary>
        /// 发放回收的金额
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long Gold { get; set; }


        /// <summary>
        /// 之后的club币
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public long AfterGold { get; set; }


        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int ClubId { get; set; }


        [ProtoMember(9)]
        [EntityField]
        public string Remark { get; set; }

        [ProtoMember(10)]
        [EntityField]
        public int UserId { get; set; }
    }
}
