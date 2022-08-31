using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 基金日志
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubfundlog", StorageType = StorageType.WriteOnlyDB)]
   public class tclubfundlog : ShareEntity
    {
        public tclubfundlog()
        {
            CreateTime = DateTime.Now;
            fundtotal = 3;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }


        /// <summary>
        /// club或者联盟id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int ClubId { get; set; }

        /// <summary>
        /// 变动数量
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public long fnum { get; set; }


        /// <summary>
        /// 基金变动金额
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int Price { get; set; }


        /// <summary>
        /// 1转入   2转出   
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int ChangeType { get; set; }

        [ProtoMember(6)]
        [EntityField]
        public int UserId { get; set; }


        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 1是联盟   2是社区
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int Role { get; set; }

        /// <summary>
        /// 这个字段用来区分
        /// 在app端还是后台的基金操作
        /// 1:在app端的操作     2服务器产生   3后台
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public long fundtotal { get; set; }
    }
}
