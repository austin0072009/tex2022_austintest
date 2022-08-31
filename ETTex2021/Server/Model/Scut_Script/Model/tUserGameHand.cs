using ETModel.Framework.Model;
using ProtoBuf;
using System;
using ETModel.Framework.Event;
using ETModel.Framework.Cache.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 记录每个游戏游戏的手数数据
    /// </summary>

    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, DbConfig.ConnData)]
    public class tUserGameHand : ShareEntity
    {

        public tUserGameHand()
        : base(AccessLevel.ReadWrite)
        {
            _gamehc = new CacheList<GameHandCount>();
            lastdealtime = DateTime.Now;
            FillingCount = 0;
            Aveinto = 0;
            Id = Guid.NewGuid().ToString();
        }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(1)]
        [EntityField(IsKey = true)]
        public string Id { get; set; }

        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }
         

        /// <summary>
        ///  clubid
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int clubid { get; set; }  

        /// <summary>
        /// 所有游戏的累计手数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int totalCount { get; set; }  

        /// <summary>
        /// 最近一次的结算时间 
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public DateTime lastdealtime { get; set; }  
      
         
        /// <summary>
        /// 用户对应所有游戏 的当日手数
        /// </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<GameHandCount> _gamehc { get; set; }


        /// <summary>
        /// 大盲手数
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int Bigblind { get; set; }
        /// <summary>
        /// 3公牌前加注
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int bet3 { get; set; }

        /// <summary>
        /// 3公牌后加注
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int cbet3 { get; set; }


        /// <summary>
        /// 主动入池数量
        /// 只限于翻牌前 staddle位
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int drivingnum { get; set; }

        /// <summary>
        /// 加注入池率
        /// 限于翻牌前
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int addpoolnum { get; set; }

        /// <summary>
        /// 场均带入
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public double Aveinto { get; set; }

        /// <summary>
        /// 总战绩
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public double AveGains { get; set; }


        /// <summary>
        /// 加注手数 手数
        /// 激进度总值  /  4
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int FillingCount { get; set; }

        /// <summary>
        /// 游戏翻牌数 手数
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int dealCardCount { get; set; }
    }

    /// <summary>
    /// 个人奖池 指定范围 控制输赢，动态胜率 不带体验
    /// </summary>
    [Serializable, ProtoContract]
    public class GameHandCount : EntityChangeEvent
    {
      
        [ProtoMember(1)]
        [EntityField]
        public int gameid { get; set; }
        
        [ProtoMember(2)]
        [EntityField]
        public int levelid { get; set; }
         
        [ProtoMember(3)]
        public int count { get; set; }

        /// <summary>
        /// 游戏赢局数 手数
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int WinCount { get; set; }
        /// <summary>
        /// 游戏输局数 手数
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int LostCount { get; set; }
        /// <summary>
        /// 游戏平局数 手数
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int DrawCount { get; set; }

    }
}
