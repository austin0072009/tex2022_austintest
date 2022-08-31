using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// club玩家club币日志
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubusergoldlog", StorageType = StorageType.WriteOnlyDB)]
    public class tclubusergoldlog : ShareEntity
    {
        public tclubusergoldlog()
        {
            CreateTime = DateTime.Now;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }


        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int ClubId { get; set; }

        [ProtoMember(3)]
        [EntityField]
        public int UserId { get; set; }


        /// <summary>
        /// 之前的club币
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public double BeforeGold { get; set; }


        /// <summary>
        /// 金额变动
        /// </summary>
        [ProtoMember(5)]
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

        [ProtoMember(8)]
        [EntityField]
        public string Remark { get; set; }

        /// <summary>
        /// 1发放   2回收  3玩家退出默认回收  4管理员修改
        /// 5税收   6房间退利    7房间带入   8联盟发币  9联盟回收
        /// 10玩家退出    11保险
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int ChangeType { get; set; }

        /// <summary>
        /// 房间号  可空
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int RoomNum { get; set; }
    }
}
