
using ETModel.Framework.Model;
using ProtoBuf;
using System;

//namespace ETModel.Script.CsScript.Action
namespace ETModel.Script.Model
{
    /// <summary>
    /// 道具配置
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tPropConfig")]
    public class tPropConfig : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tPropConfig()
            : base(true)
        {

        }

        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int Id { get; set; }

        [ProtoMember(2)]
        [EntityField]
        public int PropID { get; set; }

        /// <summary>
        /// 0:兑换  1:使用  2:自动使用
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int UseType { get; set; }

        /// <summary>
        /// 0:金币  1:头像  2:参赛门票  3：钻石  4:玩家经验  5:VIP经验  6:其它
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int PropType { get; set; }

        [ProtoMember(5)]
        [EntityField]
        public string PropName { get; set; }

        [ProtoMember(6)]
        [EntityField]
        public string Desc { get; set; }

        /// <summary>
        /// 可叠加数量
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int PropCount { get; set; }
        /// <summary>
        /// 可兑换金额
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int Gold { get; set; }
        /// <summary>
        /// 道具图片
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string ImgUrl { get; set; }
    }
}