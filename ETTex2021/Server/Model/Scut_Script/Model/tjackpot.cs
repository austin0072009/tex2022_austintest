using ProtoBuf;
using System;
using ETModel.Framework.Model;
using GameSystem;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 奖池
    /// </summary>
    [Serializable, ProtoContract, NumberField]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tjackpot")]
    public class tjackpot : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tjackpot()
            : base(true)
        {
            deleteState = 0;  

        }

        /// <summary>
        /// 
        /// </summary>        
        [ProtoMember(1)]
        [EntityField(true)]
        public int Id { get; set; }
        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 当前奖池
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        [NumberField]
        public long jackpot { get; set; }

        /// <summary>
        /// 历史总押金
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long historygambleall { get; set; }

        /// <summary>
        /// 历史总收益
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public long income { get; set; }

        /// <summary>
        /// 抽水
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int pump { get; set; }

        /// <summary>
        /// 放水(0 :不限制 ;1、 ) 
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int waterproof { get; set; }
         
        /// <summary>
        /// 是否删除
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int deleteState { get; set; }

        /// <summary>
        /// 修改人
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string modifyUser { get; set; }
        /// <summary>
        /// 修改时间
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public DateTime modifyTime { get; set; }
        /// <summary>
        /// 
        /// </summary>        
        [ProtoMember(11)]
        [EntityField]
        public string Description { get; set; }
        /// <summary>
        /// 税
        /// </summary>        
        [ProtoMember(12)]
        [EntityField]
        public long rax { get; set; } 
        /// <summary>
        /// 彩金
        /// </summary>        
        [ProtoMember(13)]
        [EntityField]
        public int handsel { get; set; }
        /// <summary>
        /// 场次ID
        /// </summary>        
        [ProtoMember(14)]
        [EntityField]
        public int levelid { get; set; }

        protected override int GetIdentityId()
        {
            return Id;
        }
    }
}
