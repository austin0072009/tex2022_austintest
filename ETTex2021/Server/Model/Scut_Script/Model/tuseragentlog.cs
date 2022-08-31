using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 123级代理 和 ceo盟主代理 领取记录
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadWrite, strFixed.strConnectstring, "tuseragentlog",  StorageType = StorageType.ReadWriteDB, CacheType = CacheType.None)]
    public class tuseragentlog : ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int ID { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// 领取金额
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public ulong Gold { get; set; }
        /// <summary>
        /// 领取状态 1.成功 -1.失败 -2;游戏服务器扣除金币失败
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int State { get; set; }
        [ProtoMember(4)]
        [EntityField]
        public DateTime CreatTime { get; set; }

        /// <summary>
        /// 1：表示123级领取得红利   2：表示新代理创始人方面领取得分红
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int Type { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int clubid { get; set; }
    }
}
