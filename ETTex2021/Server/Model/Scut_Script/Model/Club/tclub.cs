using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using GameSystem;
using ProtoBuf;
using System;
using System.Collections.Generic;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    [NumberField]
    public class tclub : ShareEntity
    {
        public tclub()
            : base(AccessLevel.ReadWrite)
        {
            search = true;
            lv = 1;
            fundnum = 0;
            manager = true;
            FreeModify = 0;
            losemax = 0;
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
        public CacheList<UserClub> childs { get; set; }


        /// <summary>
        /// club标题
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public string Title { get; set; }
        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int limitcount { get; set; }
        /// <summary>
        ///  允许搜索
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public bool search { get; set; }
        /// <summary>
        /// 是否打开管理员创建牌局
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public bool manager { get; set; }
        /// <summary>
        /// club金币 额度
        /// 
        /// 保险基金
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        [NumberField]
        public long gold { get; set; }
        /// <summary>
        /// club钻石
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        [NumberField]
        public long diam { get; set; }
        /// <summary>
        /// 申请加入的待处理UserID列表
        /// </summary>
        [ProtoMember(12)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> applyUserID { get; set; }

        /// <summary>
        /// 位置
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string Loc { get; set; }
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
        /// 介绍
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public string Content { get; set; }
        /// <summary>
        /// 申请金币变动待处理
        /// </summary>
        [ProtoMember(17)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<UserApplyStatus> applyGoldList { get; set; }

        /// <summary>
        /// 联盟id 只有加了入了联盟的 所有用户必须使用clubgold 进行游戏
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public int alliancid { get; set; }

        /// <summary>
        ///保险基金下限：创建社区的时候会初始化一个固定值，产生赔保险的时候会扣掉这个金额，给到平台。
        ///
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public long fundnum { get; set; }

        /// <summary>
        /// club头像
        /// </summary>
        [ProtoMember(20)]
        [EntityField]
        public string clubIcon { get; set; }

        /// <summary>
        /// 免费修改次数
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public int FreeModify { get; set; }



        /// <summary>
        /// 联奖池  只是单独记录会实时同步值到gold
        /// </summary>
        [ProtoMember(22)]
        [EntityField]
        public long jackpot { get; set; }
     

        /// <summary>
        /// 可输最大额度
        /// club玩家输和炸保险加起来最大值
        /// 为0就不需要限制
        /// </summary>
        [ProtoMember(23)]
        [EntityField]
        public long losemax { get; set; }


        /// <summary>
        /// 一开始还没分保险的金额
        /// </summary>
        [ProtoMember(24)]
        [EntityField]
        public long totalinspot { get; set; }


        /// <summary>
        /// 累计贡献的税收
        /// </summary>
        [ProtoMember(25)]
        [EntityField]
        public long totalRax { get; set; }


        /// <summary>
        ///  层管理
        /// </summary>
        [ProtoMember(26)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<string> floor { get; set; }

        /// <summary>
        /// 审核1 成员管理10 成员权限100 
        /// </summary>
        [ProtoMember(27)]
        [EntityField]
        public int member { get; set; }
        /// <summary>
        /// 房间管理 包厢1 房间10
        /// </summary>
        [ProtoMember(28)]
        [EntityField]
        public int floors { get; set; }
        /// <summary>
        /// 战绩1  club10  club日志100 值班人1000 
        /// </summary>
        [ProtoMember(29)]
        [EntityField]
        public int data { get; set; }

        [ProtoMember(30)]
        [EntityField]
        public string notice { get; set; }
        /// <summary>
        /// 成员
        /// </summary>
        [ProtoMember(31)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<SplitArrayClub> splits { get; set; }
         

        /// <summary>
        /// 保险基金 
        /// </summary>
        [ProtoMember(32)]
        [EntityField]
        public long inspot { get; set; }

        /// <summary>
        /// 保险基金占比例
        /// </summary>
        [ProtoMember(33)]
        [EntityField]
        public long insRate { get; set; }

        /// <summary>
        /// 返利值比例
        /// </summary>
        [ProtoMember(34)]
        [EntityField]
        public long cgoldRate { get; set; }

        /// <summary>
        /// 奖励说明
        /// </summary>
        [ProtoMember(35)]
        [EntityField(false, ColumnDbType.LongText)]
        public string reward { get; set; }


        protected override int GetIdentityId()
        {
            return idx;
        }
    }

    [Serializable, ProtoContract]
    public class UserApplyStatus : EntityChangeEvent
    {
        [ProtoMember(1)]
        public int userid { get; set; }
        /// <summary>
        /// 0 未处理 1 同意  -1 拒绝
        /// </summary>
        [ProtoMember(2)]
        public int Status { get; set; }
        /// <summary>
        /// 金币处理 
        /// </summary>
        [ProtoMember(2)]
        public long Gold { get; set; }
        /// <summary>
        /// 金币类型 1：申请上币 2：申请退币
        /// </summary>
        [ProtoMember(2)]
        public int GoldType { get; set; }

    }

    [Serializable, ProtoContract]
    public class UserClub : EntityChangeEvent
    {
        [ProtoMember(1)]
        public int userid { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(2)]
        public int rate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(3)]
        public int playcount { get; set; }

        /// <summary>
        /// 是否是管理员 0 普通成员 1管理员，2创建者
        /// </summary>
        [ProtoMember(4)]
        public int _ismanager { get; set; }

        /// <summary>
        /// club gold
        /// </summary>
        [ProtoMember(5)]
        public long cgold { get; set; }

        /// <summary>
        /// 0正常   1冻结
        /// </summary>
        [ProtoMember(6)]
        public int status { get; set; }

        /// <summary>
        ///
        /// </summary>
        [ProtoMember(7)]
        public string relation { get; set; }
        /// <summary>
        ///权限
        /// </summary>
        [ProtoMember(8)]
        public string rights { get; set; }
    }


    [Serializable, ProtoContract]
    public class SplitArrayClub : EntityChangeEvent
    {
        [ProtoMember(1)]
        public int arrid { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(2)]
        public string name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(3)]
        public List<int> arrlist { get; set; }
         
    }

}
