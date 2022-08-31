using System;
using ETModel.Framework.Model;
using ProtoBuf;
using System.Collections.Generic;

namespace ETModel.Script.Model
{

    [Serializable, ProtoContract]
    ////[EntityTable(CacheType.None, strFixed.strConnectstring, "ttableUserLog", StorageType = StorageType.ReadWriteDB)]
    [EntityTable(ConnectKey = strFixed.strConnectstring, StorageType = StorageType.WriteOnlyDB, AccessLevel = AccessLevel.WriteOnly, CacheType = CacheType.None)]
    public class ttableUserLog : ShareEntity
    {

        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }
        /// <summary>
        /// 写入暂时没用找到最大ID的方法，   用的GUID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public long TableLogIdx { get; set; }


        [ProtoMember(3)]
        [EntityField]
        public int UserID { get; set; }

        [ProtoMember(4)]
        [EntityField]
        public int _pos { get; set; }

        /// <summary>
        /// 金币变化
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public decimal gold { get; set; }

        /// <summary>
        /// 牌的信息
        /// </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.LongText)] //[EntityField]
        public List<int> _cardList { get; set; }

        [ProtoMember(7)]
        [EntityField]
        public int gameid { get; set; }
        /// <summary>
        /// 游戏id
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public bool _isover { get; set; }
        /// <summary>
        /// 是否爆分，当观众了
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int _isWatch { get; set; }

        /// <summary>
        /// 1 表示 这局赢了
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public bool _win { get; set; }

        [ProtoMember(11)]
        [EntityField]
        public DateTime CreateDate { get; set; }

        [ProtoMember(12)]
        [EntityField]
        public long trendIdx { get; set; }

        /// <summary>
        /// 走势图记录
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string mystake { get; set; }
        /// <summary>
        /// 码量
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public ulong Bet{ get; set; }

        /// <summary>
        /// 场次id
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int levelid { get; set; }

        /// <summary>
        /// 底注
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public int basegamle { get; set; }



        public ttableUserLog():base(AccessLevel.WriteOnly)
        {
            //id = Guid.NewGuid().ToString("N");
            CreateDate = DateTime.Now;
        }
    }

}
