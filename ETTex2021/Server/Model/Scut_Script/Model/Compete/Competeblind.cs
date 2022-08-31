using ETModel.Framework.Model;
using ETModel.Script.Model;
using ProtoBuf;
using System;

namespace Model.Scut_Script.Model
{
    /// <summary>
    /// 比赛盲注表
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    //[NumberField]
   public class Competeblind : ShareEntity
    {
        public Competeblind()
          : base(AccessLevel.ReadWrite)
        {
            CreateTime = DateTime.Now;
        }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public int ID { get; set; }

        /// <summary>
        /// 比赛级别  1-6
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int matchlavel { get; set; }

        /// <summary>
        /// 小盲
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int smallblind { get; set; }

        /// <summary>
        /// 大盲
        /// </summary>

        [ProtoMember(4)]
        [EntityField]
        public int bigblind { get; set; }

        /// <summary>
        /// 前注
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int PreGamble { get; set; }


        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateTime { get; set; }


    }
}
