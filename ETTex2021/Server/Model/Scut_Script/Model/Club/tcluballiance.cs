using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Event;
using GameSystem;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    [NumberField]
    public class tcluballiance : ShareEntity
    {
        public tcluballiance()
            : base(AccessLevel.ReadWrite)
        {
            search = false;
            lv = 1;
            IsSupper = false;
            limitcount = 10;
        }

        /// <summary>
        /// club的名片ID 固定为8位
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int idx { get; set; }

        /// <summary>
        /// 创建者
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }

        /// <summary>
        /// 状态， 封停
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int State { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// 成员
        /// </summary>
        [ProtoMember(5)] 
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<ClubChild> childs { get; set; }


        /// <summary>
        /// 标题
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public string Title { get; set; }
        /// <summary>
        /// 标题
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public string Content { get; set; }
        /// <summary>
        ///  下级数量
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int limitcount { get; set; }
        /// <summary>
        ///  允许搜索  是否开启申请
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public bool search { get; set; }
        /// <summary>
        /// 是否打开管理员创建牌局
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public bool manager { get; set; }
        /// <summary>
        /// 金币
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public long gold { get; set; }
        /// <summary>
        /// 钻石
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public long diam { get; set; }
        /// <summary>
        /// 申请加入的待处理clubidx列表
        /// </summary>
        [ProtoMember(13)] 
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> applyclubidx { get; set; }
         
        /// <summary>
        /// 等级
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int lv { get; set; }

        /// <summary>
        /// 不再允许加入 即不再看到申请列表 与别人也申请不了 次级功能
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public bool closeapply { get; set; }

        /// <summary>
        /// 创建联盟时候 得时候clubid
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public int clubid { get; set; }

        /// <summary>
        /// 是否超级联盟
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public bool IsSupper { get; set; }

        
        /// <summary>
        /// 联盟保险池  只是单独记录会实时同步值到gold
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public long inspot { get; set; }  

        /// <summary>
        /// 保险占比例
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public long insRate { get; set; }


        /// <summary>
        /// 返利值比例
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public long cgoldRate { get; set; }

        /// <summary>
        /// 提现卡信息
        /// </summary>
        [ProtoMember(22)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<cardinfo> bankinfo { get; set; }
    }


    [Serializable, ProtoContract]
    public class cardinfo : EntityChangeEvent
    {
        /// <summary>
        /// 持卡人姓名
        /// </summary>
        [ProtoMember(1)]
        public string name { get; set; }
        /// <summary>
        /// 银行卡号
        /// </summary>
        [ProtoMember(2)]
        public string bankNo { get; set; }

        /// <summary>
        /// 银行名称
        /// </summary>
        [ProtoMember(3)]
        public string BankName { get; set; }

        /// <summary>
        /// 省市地区
        /// </summary>
        [ProtoMember(4)]
        public string BankCity { get; set; }

        /// <summary>
        /// 支行地址
        /// </summary>
        [ProtoMember(5)]
        public string branchAddre { get; set; }

    }

    [Serializable, ProtoContract]
    public class ClubChild : EntityChangeEvent
    {
        [ProtoMember(1)]
        public int userid { get; set; }
        [ProtoMember(2)]
        public int rate { get; set; } 

        /// <summary>
        /// 是否是管理员 0 普通成员 1管理员，2创建者
        /// </summary>
        [ProtoMember(4)]
        public int _ismanager { get; set; }


        /// <summary>
        /// 联盟币余额
        /// </summary>
        [ProtoMember(5)]
        public int cgold { get; set; }

        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(6)]
        public int clubId { get; set; }

    }
}
