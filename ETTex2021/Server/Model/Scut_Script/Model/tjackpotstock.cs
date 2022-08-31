using ETModel.Framework.Model;
using GameSystem;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 奖池
    /// </summary>
    [Serializable, ProtoContract, NumberField]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tjackpotstock")]
    public class tjackpotstock : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tjackpotstock()
            : base(true)
        {

        }

        /// <summary>
        /// 自增
        /// </summary>        
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
        /// 当前库存
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        [NumberField]
        public long stock { get; set; }

        /// <summary>
        /// 吐分
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long outcomes { get; set; }

        /// <summary>
        /// 吃分
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long income { get; set; }

        /// <summary>
        /// 这儿是玩家输的时候  暗税
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        [NumberField]
        public int pump { get; set; }

        /// <summary>
        /// 放水
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int waterproof { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int isEnable { get; set; }

        /// <summary>
        /// 是否删除
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int deleteState { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public DateTime modifyTime { get; set; }

        /// <summary>
        ///   累计 暗税
        /// </summary>        
        [ProtoMember(11)]
        [EntityField]
        [NumberField]
        public long Tax { get; set; }

        /// <summary>
        /// 场次ID
        /// </summary>        
        [ProtoMember(12)]
        [EntityField]
        public int levelid { get; set; }
        /// <summary>
        /// 平衡值
        /// </summary>        
        [ProtoMember(13)]
        [EntityField]
        [NumberField]
        public long balanceScore { get; set; }
        /// <summary>
        /// 初始不能修改
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public long initstock { get; set; }

        /// <summary>
        ///   累计 明税 0.03 ~0.10
        /// </summary>        
        [ProtoMember(15)]
        [EntityField]
        [NumberField]
        public long OpenTax { get; set; }

        protected override int GetIdentityId()
        {
            return Id;
        }
    }
}
