using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{
    /*
    * 基础的通信结构定义类 须放置这个文件中
    */
         

    public class cs_getgamelist : cs_base
    {
        public string accountId;
    }
    public class sc_getgamelist : sc_base
    {

        public List<GameInfoSD> gamelist;
    }
    public class GameInfoSD
    {
        public int id;
        public string name;
        public string desc; 
        //1表示打开，               
        public int open;
        /// <summary>
        /// 游戏类型1热门 2棋牌 3捕鱼 4slot 5电子竟技
        /// </summary>
        public int type;
        /// <summary>
        /// 游戏icon 空表示自己的游戏 有值从地址上下载使用 
        /// </summary>
        public string icon;
        /// <summary>
        /// 游戏跳转地址 空表示自己的游戏 有值是web跳转
        /// </summary>
        public string url;
        /// <summary>
        /// 是否热门游戏 1热门
        /// </summary>
        public int hot;

        /// <summary>
        ///是否维护中
        /// </summary>
        public int IsDefend;

        /// <summary>
        ///  0自己游戏  1tp平台   2jdb平台
        /// </summary>
        public int platType;
    }
    public class cs_getgamelevel : cs_base
    {
        public int gameid;
    }

    public class sc_getgamelevel : sc_base
    {

        public List<RoomInfoSD> levellist;
    }

    public class RoomInfoSD
    {
        public int id;
        /// <summary>
        /// ChessGameModel的id
        /// </summary>
        public int gameid;
        /// <summary>
        /// 此游戏的在线人线
        /// </summary>
        public int onlineCount;
        /// <summary>
        /// 游戏类型，1，2
        /// </summary>
        public int gametype;
        /// <summary>
        /// 初，中，高级场
        /// </summary>
        public string name;
        /// <summary>
        /// 底分
        /// </summary>
        public int baserate;

        /// <summary>
        /// 最低
        /// </summary>
        public int _min;
        /// <summary>
        /// 最高限制 
        /// </summary>
        public int _max;

        /// <summary>
        /// 场次等级
        /// </summary>
        public int leveltype;


        /// <summary>
        /// 人数
        /// </summary>
        public int pcount;

    } 
 

    /// <summary>
    /// 输入房号进入FJ
    /// </summary>
    public class cs_enterroomtable : cs_base
    {
        public int gameid;
        public int levelid;
        public int tablenum;
    }

    /// <summary>
    /// 只获得桌子号，需要再申请协议处理，，，协议顺序不对的一个补丁
    /// </summary>
    public class sc_enterroomtable : sc_base
    {
    } 

    /// <summary>
    /// 进入FJ，四个游戏走同样的接口
    /// </summary>
    public class cs_enterroom : cs_base
    { 
        public int gameid;
        public int levelid;
        /// <summary>
        /// 游戏模式，1FK模式，2JB模式
        /// </summary>
        public int gamemodel;
        /// <summary>
        /// 游戏类型，
        /// </summary>
        public int gametype;

        /// <summary>
        ///  
        /// </summary>
        public int numpertable;

        
        public int rankertype;

        /// <summary>
        /// 消耗一张FK，还是两张
        /// </summary>
        public int roomcard;

        /// <summary>
        /// 当前限制的局数，升庄是庄数。
        /// </summary>
        public int tableCount;
        /// <summary>
        /// 最低的底注
        /// </summary>
        public int baserate;
        /// <summary>
        /// 限定值在level中_min ~_max之间的
        /// </summary>
        public int _limit;
    }
    public class sc_enterroom : sc_base
    {
        public int gameid;
        public int levelid;
        /// <summary>
        /// 排队个数
        /// </summary>
        public int waitcount;
        public int gamemodel;
        public int numpertable;
        /// <summary>
        /// 限定值在level中_min ~_max之间的
        /// </summary>
        public int _limit;
        /// <summary>
        /// 当前最新
        /// </summary>
        public int gold;
        public int tableid;
        public int totalLineCount;
        /// <summary>
        /// 押注积分列表
        /// </summary>
        public List<int> betScores;
    }

    /// <summary>
    /// 取消排队
    /// </summary>
    public class cs_cancelorder : cs_base
    {
        
    }
    public class sc_cancelorder : sc_base
    {

    }
     

    public class OtherUserInfoSD
    {
        /// <summary>
        /// 其实用户
        /// </summary>
        public PlayerInfoSD py;
        public int pos;
        /// <summary>
        /// 是否掉线了       1    已掉线
        /// </summary>
        public int isDis;
        /// <summary>
        /// 是否已准备      1     已准备
        /// </summary>
        public int isR;
        /// <summary>
        /// 是否观众      1    
        /// </summary>
        public int isW; 
        /// <summary>
        /// 是否留座    的时间 0表示不需要留座 正常值1~300秒
        /// </summary>
        public int isK;
    }
    /// <summary>
    /// 刷新桌子上单个玩家
    /// </summary>
    public class sc_refreshtableuser_n : sc_base
    {
        public OtherUserInfoSD user;


        public UserRemark Ur;
    }
    /// <summary>
    /// 退出FJ，四个游戏走同样的接口
    /// </summary>
    public class cs_exitroom : cs_base
    {
        public int gameid;
        public int levelid;
    }

    public class sc_exitroom : sc_base
    {

    }

    public class sc_exitroom_n : sc_base
    {

    }
        

    /// <summary>
    /// 通知进入桌 可以进行准备操作了，8秒不操作自动准备
    /// </summary>
    public class sc_entertable_n : sc_base
    {
        public int gameid;
        public int tableid;
        public int levelid;
        public int pos;
        /// <summary>
        /// 目标位置有人进入
        /// </summary>
        public int tpos;
        /// <summary>
        ///  游戏类型
        /// </summary>
        public int gtype;
        /// <summary>
        /// 表示此次的局号 时间格式编码
        /// </summary>
        public string mcode;
        /// <summary>
        /// FK限制的最大数，局数或庄数
        /// </summary>
        public int maxCount;
        /// <summary>
        /// FJ中的其他人
        /// </summary>
        public List<OtherUserInfoSD> plist;
    }

    /// <summary>
    /// 请求离开桌子，申请解散游戏
    /// </summary>
    public class cs_applyexittable : cs_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
        /// <summary>
        /// 申请位置
        /// </summary>
        public int pos;
    }
    public class sc_applyexittable : sc_base
    {
    }
    /// <summary>
    /// 通知所有人申请离开桌子
    /// </summary>
    public class sc_applyexittable_n : sc_base
    {
        public int gameid;
        /// <summary>
        /// 申请位置
        /// </summary>
        public int pos;
    }
    /// <summary>
    /// 处理请求离开桌子，  处理别人的申请解散，可同意与不同意
    /// </summary>
    public class cs_dealexittable : cs_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
        /// <summary>
        /// 1，表示同意解散。 0，表示不同意
        /// </summary>
        public int agree;
    }
    public class sc_dealexittable : sc_base
    {
        public int gameid;
        public int pos;
        /// <summary>
        /// 1，表示同意解散。 0，表示不同意
        /// </summary>
        public int agree;
    }
    /// <summary>
    /// 通知其他人，处理人的结果 
    /// </summary>
    public class sc_dealexittable_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 1，表示同意解散。 0，表示不同意
        /// </summary>
        public int agree;
    }

   
    /// <summary>
    /// 通知有人离开桌子了，可能是自己人离开，可能是被服务器规则T出
    /// </summary>
    public class sc_one_exittable_n : sc_base
    {
        public int gameid;
        public int userid;
        /// <summary>
        /// 客户处理 如果是自己就退出到大厅
        /// </summary>
        public int pos;
        public string name;

        /// <summary>
        /// 是否留座    的时间 0表示不需要留座 正常值1~300秒
        /// </summary>
        public int isK;
    }
    /// <summary>
    /// 警告 同IP，或同位置，GPS计算
    /// </summary> 
    public class sc_warning_n : sc_base
    {
        /// <summary>
        /// 1同IP，2同位置 
        /// </summary>
        public int type;
        public int gameid;

        /// <summary>
        /// 要发送的内容
        /// </summary>
        public string content;
    }
    /// <summary>
    /// 游戏中掉线通知，
    /// </summary>
    public class sc_disconnect_n : sc_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
        public int pos;
        /// <summary>
        /// 1表示 又重新连接上了
        /// </summary>
        public int reconnect;
    }

    /// <summary>
    /// 桌子被强制解散
    /// </summary>
    public class sc_dismisstable_n : sc_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
    }
         

    /// <summary>
    /// 通用解散指定FJ，未开始的才能解散,或者强制解散
    /// </summary>
    public class cs_dismisstable : cs_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
    }

    public class sc_dismisstable : sc_base
    {

    }  

}
