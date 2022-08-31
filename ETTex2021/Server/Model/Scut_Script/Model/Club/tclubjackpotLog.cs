using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 记录club划扣情况    
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubjackpotLog", StorageType = StorageType.ReadWriteDB)]
    public class tclubjackpotLog : ShareEntity
    {
        public tclubjackpotLog()
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
        /// 游戏ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int GameId { get; set; }


        /// <summary>
        /// clubid 
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int clubid { get; set; }

        /// <summary>
        /// 保险贡献者
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 收入与赔付 的金额
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long Gold { get; set; }

        /// <summary>
        /// 1收入    2赔付
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int JackpotType { get; set; }

        /// <summary>
        /// 记录哪一桌产生的保险
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int tnum { get; set; }


        [ProtoMember(8)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        [ProtoMember(9)]
        [EntityField]
        public long allid { get; set; }

        /// <summary>
        /// 购买的金额
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public long BetIns { get; set; }
    }
}
