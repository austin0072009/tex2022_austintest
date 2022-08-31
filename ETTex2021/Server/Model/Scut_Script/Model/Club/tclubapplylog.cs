using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubapplylog", StorageType = StorageType.WriteOnlyDB)]
    public class tclubapplylog: ShareEntity
    {

        public tclubapplylog()
        {
            applyTime = DateTime.Now;
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
        /// 申请类型 1表示进clubclub   2club币申请 
        /// 3:申请进联盟
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int applyType { get; set; }
        /// <summary>
        /// 0 未处理 1 同意  -1 拒绝
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int Status { get; set; }

        /// <summary>
        /// 申请时间
        /// </summary>
        [EntityField]
        [ProtoMember(5)]
        public DateTime applyTime { get; set; }

        /// <summary>
        /// 申请的目标club
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public long clubId { get; set; }


        /// <summary>
        /// 申请人所在的club
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int ownClubId { get; set; }

        /// <summary>
        /// 申请信息
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public string message { get; set; }


        [ProtoMember(9)]
        [EntityField]
        public int ClubCode { get; set; }
    }
}
