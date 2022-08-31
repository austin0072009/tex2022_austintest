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
    ///弹幕记录表
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tchatlog", StorageType = StorageType.WriteOnlyDB)]
    public class tchatlog : ShareEntity
    {
        public tchatlog()
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
        /// 用户
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// 弹幕类容
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public string BarrageContent { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public DateTime CreateTime { get; set; }
        /// <summary>
        ///  1:文本   2:语音
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public string BarrageType { get; set; }
        /// <summary>
        /// 弹幕消耗 1￥= 100
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int BarrageMoney { get; set; }

        [ProtoMember(7)]
        [EntityField]
        public int tableId { get; set; }


        [ProtoMember(8)]
        [EntityField]
        public int RoomId { get; set; }


        [ProtoMember(9)]
        [EntityField]
        public int GameId { get; set; }


    }


    public class tbarrageinfo
    {

        public int UserId { get; set; }

        public string BarrageContent { get; set; }
        public DateTime CreateTime { get; set; }
        public string BarrageType { get; set; }
        public int BarrageMoney { get; set; }

        public int tableId { get; set; }

        public int RoomId { get; set; }
    }
}
