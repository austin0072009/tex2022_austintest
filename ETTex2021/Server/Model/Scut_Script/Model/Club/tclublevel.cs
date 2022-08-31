using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// club   联盟等级配置表
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tclublevel")]
    public class tclublevel : ShareEntity
    {
        public tclublevel() : base(true)
        {
            CreateTime = DateTime.Now;
        }
        [ProtoMember(1)]
        [EntityField("Id", IsKey = true, IsIdentity = true)]
        public int Id { get; set; }

        /// <summary>
        /// 1club配置    2联盟配置
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int type { get; set; }

        /// <summary>
        /// 等级
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int level { get; set; }


        /// <summary>
        /// 等级对应的砖石消耗
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long diamond { get; set; }

        /// <summary>
        /// 最大成员数量
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int maxMember { get; set; }

        /// <summary>
        /// 最大管理员数量
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int maxadmin { get; set; }

        /// <summary>
        /// 过期时间 天
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int expireTime { get; set; }
        
        [ProtoMember(8)]
        [EntityField]
        public DateTime CreateTime { get; set; }

    }
}
