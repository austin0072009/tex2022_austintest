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
    /// club返利表90%
    /// 只有超级联盟才有
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tclubtaxlog", StorageType = StorageType.ReadWriteDB)]
    public class tclubtaxlog : ShareEntity
    {
        public tclubtaxlog()
        {
            CreateTime = DateTime.Now;
        }

        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int Id { get; set; }

        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int gameid { get; set; }


        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int clubid { get; set; }

        /// <summary>
        /// 联盟id
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int allid { get; set; }

        /// <summary>
        /// 返利金额
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long gold { get; set; }

        /// <summary>
        /// 更新后club币金额
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public long totalgold { get; set; }


        /// <summary>
        /// 桌号
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public string tnum { get; set; }



        [ProtoMember(8)]
        [EntityField]
        public DateTime CreateTime { get; set; }
         
    }
}
