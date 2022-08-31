using System;
using System.Collections.Generic; 
using ETModel.Framework.Model;
using ProtoBuf;
using ETModel.Framework.Game.Context;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tnotice")]
    //[EntityTable(AccessLevel.ReadOnly, CacheType.Entity, true, strFixed.strConnectstring, "tb_notice", 30, "id")]
    public  class tnotice : ShareEntity  // BaseEntity
    {
        protected override int GetIdentityId()
        {
            return id;
        }

        [ProtoMember(1)]
        [EntityField(true,IsIdentity =true)]
        public int id { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string title { get; set; }

        /// <summary>
        /// 内容
        /// </summary>
        [ProtoMember(3)]
        [EntityField] 
        public string content { get; set; }

        /// <summary>
        /// 发布时间
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public DateTime noticetime { get; set; }

        /// <summary>
        /// 作者
        /// </summary>     
        [ProtoMember(5)]
        [EntityField]
        public string author { get; set; }
        /// <summary>
        /// 类型 1跑马灯公告。2系统消息。3新闻   4弹窗公告
        /// </summary>     
        [ProtoMember(6)]
        [EntityField]
        public string type { get; set; }
        /// <summary>
        /// 是否启用
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int isStart { get; set; }

        [ProtoMember(8)]
        [EntityField]
        public string TcPicUrl { get; set; }


        [ProtoMember(9)]
        [EntityField]
        public int Width { get; set; }

        [ProtoMember(10)]
        [EntityField]
        public int Height { get; set; }

        /// <summary>
        /// 触发类型
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int triggerType { get; set; }
        /// <summary>
        /// 跑马灯类型
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int marqueeType { get; set; }
        /// <summary>
        /// 触发条件
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int triggerWhere { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public DateTime starttime { get; set; }

        /// <summary>
        /// 结束时间
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public DateTime endtime { get; set; }

        /// <summary>
        /// 间隔时间（秒）
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public int interval { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public string remark { get; set; }
    }


}
