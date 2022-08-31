using ProtoBuf;
using System;
using System.Collections.Generic; 
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract] 
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "ttablehistoryLog", StorageType = StorageType.WriteOnlyDB)]
    public class ttablehistoryLog : ShareEntity
    {
        [ProtoMember(1)]
        [EntityField(true,DbType = ColumnDbType.Varchar)]
        public string Id { get; set; }

        [ProtoMember(2)]
        [EntityField]
        public int gameid { get; set; }
        /// <summary>
        /// 桌子号  tnum
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int RoomNum { get; set; }
        /// <summary>
        /// 用户列表包括所有参与过了不含观众
        /// </summary>
        [ProtoMember(4)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<PInfoSD> plist { get; set; }


        [ProtoMember(5)]
        [EntityField]
        public DateTime CreatTime { get; set; } 
        /// <summary>
        /// 所有游戏需要保存得单局数据
        /// </summary>
        [ProtoMember(6)]
        [EntityField(false, ColumnDbType.LongText)]
        public string GameDetails { get; set; }

        /// <summary>
        /// 所有的大结算数据
        /// </summary>
        [ProtoMember(7)]
        [EntityField(false,ColumnDbType.LongText)]
        public string BigEndList { get; set; }

        /// <summary>
        /// 底皮
        /// </summary>
        [ProtoMember(8)]
        [EntityField()]
        public int bg { get; set; }

        /// <summary>
        /// 当前参与了的用户id列表 逗号分隔id
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string uids { get; set; }

        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int clubid { get; set; }

        /// <summary>
        /// 联盟id
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int allid { get; set; } 

        [ProtoMember(12)]
        [EntityField]
        public string tableName { get; set; }


        /// <summary>
        /// 创建房time
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public DateTime Starttime { get; set; }

        public ttablehistoryLog() : base(AccessLevel.WriteOnly)
        {
            Id = Guid.NewGuid().ToString();
        }
    }

    [Serializable, ProtoContract]
    public class PInfoSD : EntityChangeEvent
    {

        public PInfoSD()
          : base(false)
        {
        }

        [ProtoMember(1)] 
        public int uid;
        /// <summary>
        /// 头像
        /// </summary>
        [ProtoMember(2)]
        public string wicon;
        /// <summary>
        /// 名称
        /// </summary>
        [ProtoMember(3)]
        public string wName;

    } 


    /// <summary>
    /// 单局的详情 
    /// </summary>
    [Serializable, ProtoContract]
    public class TInfoSD : EntityChangeEvent
    {
        public TInfoSD()
          : base(false)
        {
        }

        /// <summary>
        /// jackpot +-
        /// </summary>
        [ProtoMember(1)]
        public int j;

        /// <summary>
        /// 1表示休 2表示揍
        /// </summary>
        [ProtoMember(2)]
        public int mt;

        /// <summary>
        /// 8个人的详情
        /// </summary>
        [ProtoMember(3)]
        public CacheList<TUserInfoSD> u;
    }

    [Serializable, ProtoContract]
    public class TUserInfoSD : EntityChangeEvent
    {
        public TUserInfoSD()
           : base(false)
        { 
        }

        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        [ProtoMember(1)]
        public int id;
        /// <summary>
        /// cardslist 有严格顺序
        /// </summary>
        [ProtoMember(2)]
        public List<int> c;
        /// <summary>
        /// 前两张牌(初始底牌)
        /// </summary>
        [ProtoMember(3)]
        public List<int> p;
        /// <summary>
        ///  
        /// 第几轮弃的牌   小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        /// </summary>
        [ProtoMember(4)]
        public int s;
        /// <summary>
        /// 自己的下注
        /// </summary>
        [ProtoMember(5)]
        public int g;
        /// <summary>
        /// giveup 1 表示弃牌
        /// </summary>
        [ProtoMember(6)]
        public int gu;
        /// <summary>
        /// 总赢的金币 减去税收
        /// </summary>
        [ProtoMember(7)]
        public int wg;
        /// <summary>
        /// 赢的芒果分
        /// </summary>
        [ProtoMember(8)]
        public int wm;

        /// <summary>
        /// 是否强制show牌（0:表示没有；1：强制秀牌）
        /// </summary>
        [ProtoMember(9)]
        public int st;

        /// <summary>
        /// show自己的牌(例如：11表示秀第一，二张牌)
        /// </summary>
        [ProtoMember(10)]
        public string sp;
        /// <summary>
        /// 前两张牌(初始底牌)
        /// </summary>
        [ProtoMember(11)]
        public int c3;
    }

    #region texas
    /// <summary>
    /// 单局的详情 
    /// </summary>
    public class TexTInfoSD 
    {
     
        /// <summary>
        /// jackpot +-
        /// </summary>
        [ProtoMember(1)]
        public int j;

        /// <summary>
        /// 公牌
        /// </summary>
        [ProtoMember(2)]
        public List<int> c;
         

        /// <summary>
        /// 单局参与游戏所有玩家信息 手牌 胜负   9个人的 
        /// </summary>
        public List<TexUserInfoSD> tInfo;
        /// <summary>
        /// 当局详情记录 所有的用户行为
        /// </summary>
        public List<TexActionSD> tlist;


        /// <summary>
        ///一局 保险池增加额
        /// </summary>
        public int ipool;
        /// <summary>
        /// 没有弃牌玩家个数
        /// </summary>
        public int ng;
        [ProtoMember(5)]
        /// <summary>
        /// 庄的位置
        /// </summary>
        public int bankerpos;
    }

    [Serializable, ProtoContract]
    public class TexUserInfoSD : EntityChangeEvent
    {
        public TexUserInfoSD()
           : base(false)
        {
        }

        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        [ProtoMember(1)]
        public int id; 
        /// <summary>
        ///  初始底牌 
        /// </summary>
        [ProtoMember(2)]
        public List<int> p;
        /// <summary>
        ///  
        /// 第几轮弃的牌   小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        /// </summary>
        [ProtoMember(3)]
        public int s;
        /// <summary>
        /// 自己的下注
        /// </summary>
        [ProtoMember(4)]
        public int g;
        /// <summary>
        /// giveup 1 表示弃牌
        /// </summary>
        [ProtoMember(5)]
        public int gu;
        /// <summary>
        /// 总赢的金币 减去税收
        /// </summary>
        [ProtoMember(6)]
        public int wg;
        /// <summary>
        /// 赢的芒果分
        /// </summary>
        [ProtoMember(7)]
        public int wm;

        /// <summary>
        /// 是否强制show牌（0:表示没有；1：强制秀牌）
        /// </summary>
        [ProtoMember(8)]
        public int st;

        /// <summary>
        /// show自己的牌(例如：11表示秀第一，二张牌)
        /// </summary>
        [ProtoMember(9)]
        public string sp;

        [ProtoMember(10)]
        public int ins;

        [ProtoMember(11)]
        public int bg;

        [ProtoMember(12)]
        public int pos;

        [ProtoMember(13)]
        /// <summary>
        /// 这一轮是否强制秀牌
        /// </summary>
        public bool fshow;

        [ProtoMember(14)]
        public List<int> ownc;
    }


    [Serializable, ProtoContract]
    public class TexActionSD
    {
        /// <summary>
        /// 顺序
        /// </summary> 
        [ProtoMember(1)]
        public int i;
        /// <summary>
        /// UserID list 从ulist获取
        /// </summary> 
        [ProtoMember(2)]
        public int id;

        /// <summary>
        /// 用户图标 标识
        /// </summary> 
        [ProtoMember(3)]
        public int pos;

        /// <summary>
        /// action type sb小盲 bb大盲 s：stradlle c call跟 f fold弃 A allin  X让牌  3B是大的2/3  B是1/2 
        /// R 
        /// </summary>
        [ProtoMember(4)]
        public int at;
        /// <summary>
        /// 下注值 
        /// </summary>
        [ProtoMember(5)]
        public int g;
        /// <summary>
        /// 当前轮次(perflop、flop、turn、showdown)
        /// 也就是TexasTurnEnum 对应标识
        /// </summary>
        [ProtoMember(6)]
        public int turn;


        [ProtoMember(7)]
        /// <summary>
        /// 第一轮表示带入余额
        /// </summary>
        public long jg;
    }
    #endregion

    #region mj
    /// <summary>
    /// 单局的详情 
    /// </summary>
    [Serializable, ProtoContract]
    public class MJTInfoSD : EntityChangeEvent
    {
        public MJTInfoSD()
          : base(false)
        {
        }

        /// <summary>
        /// 剩余公牌数 
        /// </summary>
        [ProtoMember(1)]
        public  int c;

        /// <summary>
        /// 单局参与游戏所有玩家信息 手牌 胜负
        /// </summary>
        [ProtoMember(2)]
        public List<MJUserInfoSD> tInfo;

        /// <summary>
        /// 这桌的录相id
        /// </summary>
        [ProtoMember(3)]
        public string recordid;
    }

    [Serializable, ProtoContract]
    public class MJUserInfoSD : EntityChangeEvent
    {
        public MJUserInfoSD()
           : base(false)
        {
        }

        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        [ProtoMember(1)]
        public int id;
        /// <summary>
        ///  初始底牌 
        /// </summary>
        [ProtoMember(2)]
        public List<int> p;
        
        
        /// <summary>
        /// 总赢的金币 减去税收
        /// </summary>
        [ProtoMember(3)]
        public int wg;
         

        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(4)]
        public string sp;

        [ProtoMember(5)]
        public int hu;
    }
    #endregion
}
