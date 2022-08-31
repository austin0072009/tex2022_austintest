using ProtoBuf;
using System;
using System.Collections.Generic;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 房间列表
    /// </summary>
    [Serializable, ProtoContract]
    //[EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "ttablelist")]
    [EntityTable(CacheType.Queue, DbConfig.ConnData)]
    public class ttablelist : ShareEntity
    {
        /// <summary>
        /// </summary>
        public ttablelist()
            : base(true)
        {
            allId = 0;
            JoinUser = new CacheList<int>();
            Userbalan = new CacheList<balance>();
            openplay = true; 
        }
        /// <summary>
        ///  
        /// </summary>        
        [ProtoMember(1)]
        [EntityField(true)]
        public long idx { get; set; }
         
        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 场次ID
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int levelid { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public string createTime { get; set; }

        /// <summary>
        /// 总局数
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int maxCount { get; set; }

        /// <summary>
        /// 已玩局数
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int curCount { get; set; }
         

        /// <summary>
        /// 房主ID
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int ownerId { get; set; }

        /// <summary>
        /// 桌子状态 0已创等待中 1已开局游戏中
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int tableStatus { get; set; }

        /// <summary>
        /// 桌子id
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int tableid { get; set; }

        /// <summary>
        /// 执行时间分钟数 30 60 90 120 
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int Duration { get; set; }
        /// <summary>
        /// 最小带入 50 100  200 500 
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int firstinto { get; set; }

        /// <summary>
        /// 底皮 1.2.5.10.20.40
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int baserate { get; set; }
         
       
        /// <summary>
        /// 好友房的密码
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string password { get; set; } 

        /// <summary>
        /// 最小开局玩家数量
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int minPlayerCount { get; set; }
        /// <summary>
        ///  创建数据 不同游戏的特殊参数
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public string para { get; set; }
        /// <summary>
        ///  创建数据
        /// </summary>
        [ProtoMember(16)]
        [EntityField(false, ColumnDbType.LongText)]
        public string data { get; set; }

        /// <summary>
        ///   
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public int floorid { get; set; }

        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public int ClubIdx { get; set; }

        /// <summary>
        /// 桌子名称
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public string tname { get; set; }

        /// <summary>
        /// 房间人数   既座位数
        /// </summary>
        [ProtoMember(20)]
        [EntityField]
        public int manNum { get; set; }

        /// <summary>
        /// 是否控制带入
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public bool cinto { get; set; }
        /// <summary>
        /// 联盟id   超级联盟才有
        /// </summary>
        [ProtoMember(22)]
        [EntityField]
        public int allId { get; set; }


        [ProtoMember(23)]
        [EntityField]
        public bool openplay { get; set; }

        #region 缓存
        /// <summary>
        /// 参与过大厅房间的人
        /// </summary>
        [ProtoMember(23)]
        public CacheList<int> JoinUser { get; set; }


        [ProtoMember(24)]
        public CacheList<balance> Userbalan { get; set; }
        #endregion
         
    }



    public class balance
    {
        public int Key { get; set; }
        public long Value { get; set; }
        public int clubid { get; set; }
    }



}
