  
using System;
using ProtoBuf;
using ETModel.Framework.Game.Context;
using ETModel.Framework.Model;

//namespace ETModel.Script.CsScript.Action
namespace ETModel.Script.Model
{
    /// <summary>
    /// 奖池
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tSlotConfig")]
    public class tSlotConfig : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tSlotConfig()
            : base(true)
        {

        }

        [ProtoMember(1)]
        [EntityField(true)]
        public int Id { get; set; }

        [ProtoMember(2)]
        [EntityField]
        public int GameID { get; set; }

        [ProtoMember(3)]
        [EntityField]
        public int Levelid { get; set; }

        [ProtoMember(4)]
        [EntityField]
        public DateTime UpdateTime {get;set;}
        [ProtoMember(4)]
        [EntityField]
        public string Config { get; set; }
    }
}