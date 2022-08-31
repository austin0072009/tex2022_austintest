using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    public class cs_base_gm
    {
        public string fn = "";

        /// <summary>
        /// 可能为0，游戏的协议使用对应游戏ID
        /// </summary>
        public int _g;
        /// <summary>
        /// 客服端要的值 不做任何处理直接返回去
        /// </summary>
        public int cc = 0;
    }
    public class cs_base_cl {
        public string fn = "";
    }
    public class sc_rebotstate_gm : sc_base_gm
    {
        public List<RobotState> robotstate;
    }
    public class RobotState
    {
        public int UserID;
        /// <summary>
        /// 在大厅1，在房间2，在桌子上打牌3, 在打牌但是断线了4
        /// </summary>
        public int Status;

        public int Gameid;

        public int RoomID;

        public int TableID;
    }
    /// <summary>
    /// 设置会员等级
    /// </summary>
    public class cs_setlevel_gm : cs_base_gm
    {
        public int userid;
        public int levelid;
    }
    /// <summary>
    /// 设置会员等级
    /// </summary>
    public class cs_setcashlevel_gm : cs_base_gm
    {
        public int userid;
        /// <summary>
        /// 2可提现
        /// </summary>
        public int lv;
    }



    public class cs_rechargechannels_gm : cs_base_gm
    {
        public bool isenble;

        public int Id;
    }

    public class cs_currdto_gm : cs_base_gm
    {
        public int gameid;
        public int userid;

        public string TradeNo;

        public int levelid;
        public string tableid;
    }
    public class cs_currentitydto_gm<T>: cs_base_gm
    {

        public T entity { get; set; }
    }
    public class cs_sendemail_gm : cs_base_gm
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int[] userids { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public long gold { get; set; }
        /// <summary>
        /// 钻石数量
        /// </summary>
        public long diamond { get; set; }
        /// <summary>
        /// 标题
        /// </summary>
        public string _title { get; set; }
        /// <summary>
        /// 内容
        /// </summary>
        public string _content { get; set; }

    }
    /// <summary>
    /// 客户端发送信息基类
    /// </summary>
    public class cs_baseinfo_gm
    {
        /// <summary>
        /// 方法名称
        /// </summary>
        public string fn = "";
    }

    /// <summary>
    /// 客户端发送用户数据信息基类
    /// </summary>
    public class cs_basemsg_gm : cs_baseinfo_gm
    {
        public int gameid;
        public int userid;

        public string TradeNo { get; set; }

        public int levelid;
        public int tableid;
    }
    public class cs_addwatchrobot_whi : cs_base_gm
    {
        public int levelid;
        public int tablenum;
        public int gameid;
    }
    public class cs_addrobottheroom_whi : sc_base_gm
    {
        /// <summary>
        /// 机器人id
        /// </summary>
        public int robotid;
        /// <summary>
        /// 等级
        /// </summary>
        public int levelid;
        /// <summary>
        /// 房间号
        /// </summary>
        public int tablenum;
        /// <summary>
        /// 座位号
        /// </summary>
        public int seatnum;

    }

    #region GM设置牌型 用于测试
    /// <summary>
    /// 指定房间指定位置 设置牌型
    /// </summary>
    public class cs_setcard_whi_gm : cs_baseinfo_gm
    {
        public int gameid;
        public int tablenum;
        public int pos;

        /// <summary>
        /// 德州公牌
        /// </summary>
        public List<int> pubcard;
        /// <summary>
        /// 麻将庄的多一张牌
        /// </summary>
        public int mjBanker;
        /// <summary>
        /// 8个人 每个人4个 
        /// </summary>
        public List<List<int>> _cards;


        /// <summary>
        /// true 表示德州video传过来的
        /// </summary>
        public bool texvctrl;
    }
    #endregion

    /// <summary>
    /// 设置代理
    /// </summary>
    public class cs_setagent_ll_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 代理级别 0、表示不是代理 1、代理等级1 2、代理等级2
        /// </summary> 
        public int agentid;
    }

    /// <summary>
    /// 设置总代理
    /// </summary>
    public class cs_setgeneralagent_gm : cs_basemsg_gm
    { 
        /// <summary>
        /// 代理推荐码
        /// </summary>
        public string activeCode;
        /// <summary>
        /// 设置总代（合伙人）等级设置为默认8
        /// </summary>
        public int vlevel;
    }

    /// <summary>
    /// 设置父级
    /// </summary>
    public class cs_setfagent_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 父级ID
        /// </summary>
        public int fUserId;
    }


    /// <summary>
    /// 充值接口（客户端）
    /// </summary>
    public class cs_charge_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 1、上分 2、下分
        /// 3 、砖石上分   4砖石下分
        /// </summary>
        public int type;
        /// <summary>
        /// 数量
        /// </summary>
        public float money;

    }

    public class cs_clubcharge_gm : cs_basemsg_gm
    {

        /// <summary>
        /// 充值类型；1 金币 2 钻石 
        /// </summary>
        public int chargetype;
        /// <summary>
        /// 1 联盟 2 俱乐部
        /// </summary>
        public int type;
        /// <summary>
        /// 充值数量
        /// </summary>
        public float money;

        public int idx;
    }

    public class cs_chlidcharge_gm : cs_baseinfo_gm
    {

        /// <summary>
        /// 充值类型；1 金币 2 钻石 
        /// </summary>
        public int chargetype;
        /// <summary>
        /// 1 联盟 2 俱乐部
        /// </summary>
        public int type;
        /// <summary>
        /// 充值数量
        /// </summary>
        public float money;

        public int idx;
        public int userid;
    }

    public class cs_addchlid_club : cs_basemsg_gm {
        /// <summary>
        /// 要加入的俱乐部
        /// </summary>
        public int idx;

    }
    public class cs_removechlid_club : cs_basemsg_gm
    {
        /// <summary>
        /// 要加入的俱乐部
        /// </summary>
        public int idx;

    }
    public class cs_updatechlid_club : cs_base_gm
    {//修改俱乐部用户级别
        public int idx;
        public int rate;
        public int playcount;
        public int userid;

    }

    /// <summary>
    /// 添加到联盟
    /// </summary>
    public class cs_agree_union : cs_base_gm {

        /// <summary>
        /// 同意联盟申请的时候  给申请人所在的俱乐部
        /// </summary>
        public int ownclubid;

        /// <summary>
        /// 俱乐部id
        /// </summary>
        public int idx;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int aId;
        /// <summary>
        /// 1 表示同意 -1表示不同意
        /// </summary>
        public int agree;
    }

    public class cs_addmanager_club : cs_base_gm
    {
        /// <summary>
        /// 0表示删除   1添加
        /// </summary>
        public int atype;
        /// <summary>
        /// 俱乐部ID
        /// </summary>
        public int idx;

        /// <summary>
        /// 添加、删除的玩家id
        /// </summary>
        public int uid;
    }
    /// <summary>
    /// 修改idx
    /// </summary>
    public class cs_cluborunion_gm : cs_basemsg_gm
    {
        /// <summary>
        /// club =1 union=2
        /// </summary>
        public int type;

        public int idx;

        public int newidx;

    }
    /// <summary>
    /// 锁定账号到制定时间
    /// </summary>
    public class cs_setlocktime_gm : cs_basemsg_gm
    {
        public string locktime;
    }
    /// <summary>
    /// 机器人设置
    /// </summary>
    public class cs_setrobot_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 1设置胜率
        /// </summary>
        public int type;
        public int isrobot;
        /// <summary>
        /// 胜率
        /// </summary>
        public int winpercent;
        public int robotlevel;
        /// <summary>
        /// 昵称
        /// </summary>
        public string nikename;

        public string wechatName;

        public string RobotnikeName;
        /// <summary>
        /// 赢的手数
        /// </summary>
        public int gameWinCount;
        /// <summary>
        /// 输的手数
        /// </summary>
        public int gameLostCount;

       /// <summary>
       /// 输的手数
       /// </summary>
        public int gameDrawCount;

        /// <summary>
        /// 翻牌数
        /// </summary>
        public int dealCardCount;
        /// <summary>
        /// 头像机器人
        /// </summary>

        public string wechatHeadIcon;
        /// <summary>
        /// 1皮手数
        /// </summary>
        public int pos1Count;

        public double pos2Count;

        public double pos5Count;

        public int pos10Count;
        public int pos20Count;
        public int pos50Count;

    }
    /// <summary>
    /// 设置用户静态描述字段
    /// </summary>
    public class cs_setuserdes_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 微信用户名称
        /// </summary>
        public string webname;
        /// <summary>
        /// 头像地址
        /// </summary>
        public string headinfo;
        public string AgentId { get; set; }
    }
    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class cs_gameInfo : cs_base_gm
    {

        /// <summary>
        /// 游戏ID
        /// </summary>
        public int id;

        /// <summary>
        /// 游戏名称
        /// </summary>
        public string name = "";

        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string gameIntroduce = "";

        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string gameRule = "";

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc = "";

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser = "";

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        /// <summary>
        /// 老ID
        /// </summary>
        public int oldid;
        public int Sort;
        public int type;
        public int isopen;
        public int jdbType;
        public int platType;
        public int IsRun;
        /// <summary>
        /// 是否热门
        /// </summary>
        public int isHot;
    }

    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class cs_tjackpot : cs_base_gm
    {
        /// <summary>
        /// 
        /// </summary>        
        public int Id;
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;

        /// <summary>
        /// 当前奖池
        /// </summary>
        public int jackpot;

        /// <summary>
        /// 历史总押金
        /// </summary>
        public int historygambleall;

        /// <summary>
        /// 历史总收益
        /// </summary>
        public int income;

        /// <summary>
        /// 抽水
        /// </summary>
        public int pump;

        /// <summary>
        /// 放水
        /// </summary>
        public int waterproof;

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc;

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser;
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        /// <summary>
        /// 
        /// </summary>        
        public string Description;
        /// <summary>
        /// 税
        /// </summary>        
        public long rax;
        /// <summary>
        /// 彩金
        /// </summary>        
        public int handsel;
        /// <summary>
        /// 场次ID
        /// </summary>        
        public int roomid;
    }

    public class cs_roomInfo : cs_baseinfo_gm
    {

        /// <summary>
        /// 场次ID
        /// </summary>
        public int id;

        /// <summary>
        /// 房间名称
        /// </summary>
        public string name = "";

        /// <summary>
        /// 底分
        /// </summary>
        public int baserate;

        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;

        /// <summary>
        /// 最低分
        /// </summary>
        public int _min;

        /// <summary>
        /// 最高分
        /// </summary>
        public int _max;

        /// <summary>
        /// 在线人数
        /// </summary>
        public int onlineCount;

        /// <summary>
        /// 桌子数量
        /// </summary>
        public int openTableCount;

        /// <summary>
        /// 游戏类型
        /// </summary>
        public int gametype;

        /// <summary>
        /// 游戏类型说明
        /// </summary>
        public string gametypeDesc = "";

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc = "";

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser = "";

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        public int oldid;

    }
    public class cs_restpasswrod : cs_base_gm
    {
        public int userid { get; set; }
        public string password { get; set; }
    }
    public class cs_unbinding : cs_base_gm
    {
        /// <summary>
        /// 要和上级解绑级id
        /// </summary>
        public int userid { get; set; }
    }

    public class cs_switchhandrack : cs_base_gm
    {

        public int is_open { get; set; }

    }

    public class cs_switchgame : cs_base_gm
    {

        /// <summary>
        /// 机器人2 游戏1
        /// </summary>
        public int switch_type { get; set; }
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int is_lock { get; set; }
    }
    public class cs_roomlistinfo : sc_base_gm
    {
        public ttablelist param;
       
    }
    public class cs_giveGold : cs_base_gm
    {
        public int setGiveGold { get; set; }
        public bool givegold { get; set; }
    }
    public class sc_giveGold : sc_base_gm
    {
        public bool giveGold { get; set; }
    }

    public class sc_gmcash: sc_base_gm
    {
        public int userId;



        public decimal chmoney;
    }
    #region 红包接口

    public class cs_redenvelopcount : cs_base_gm
    {
        /// <summary>
        /// 用户ID    传-1表示全部用户
        /// </summary>
        public int UserId;
        /// <summary>
        /// 红包类型
        /// </summary>
        public int TypeId;
        /// <summary>
        /// 个数
        /// </summary>
        public int Count;
        /// <summary>
        /// 红包任务获得的条件Id点
        /// </summary>

        public int typeCon;

    }
    public class sc_redenvelopcount : sc_base_gm
    {




    }
    #endregion




    #region 查看手牌

    public class cs_seehandcard: cs_base_gm
    {
        public int tableId;

        public int gameid;
    }

    public class sc_maxrebotpoker : sc_base_gm
    {
        /// <summary>
        /// 排序排序
        /// </summary>
        public List<int> pokerlist;
        /// <summary>
        /// 随机牌型
        /// </summary>
        public List<int> randpokerlist;
    }
    public class cs_maxrebotpoker : cs_base_gm
    {
        public List<int> rand;
    }
    public class sc_seehandcard : sc_base_gm
    {
        public List<UserPokerList> pokerlist;
    }
    public class UserPokerList
    {
        /// <summary>
        /// 牌的集合
        /// </summary>
        public List<int> ListCard;

        public int UserId;

        public string UserName;
        /// <summary>
        /// 位置
        /// </summary>
        //public int Seat;
    }
    public class UserPokerListView
    {
        
        public string handone;

        public string handtwo;

        public int UserId;

        public string UserName;
        /// <summary>
        /// 位置
        /// </summary>
        //public int Seat;
    }

    #endregion

    public class cs_noticemsg : cs_base_gm
    {
        
    }
    public class pokerlistview
    {
        /// <summary>
        /// 排序排序
        /// </summary>
        public List<string> pokerlist { get; set; }
        /// <summary>
        /// 随机牌型
        /// </summary>
        public List<string> randpokerlist { get; set; }
    }
    public class cs_bigprizemsg : cs_base_gm
    {
        public string content;
    }

    /// <summary>
    /// 设置用户最大输赢
    /// </summary>
    public class cs_maxlosewin : cs_base_gm
    {
        public int userid;

        public int maxlose;

        public int maxwin;
    }

    /// <summary>
    /// 设置点卡信息
    /// </summary>
    public class cs_entitycard : cs_base_gm
    {

        public int Id;

        public int CartTypeId;

        public string Name;

        public Nullable<decimal> CardPrice;

        public Nullable<decimal> TatolPrice;

        public Nullable<decimal> GoldPrice;
    }

    /// <summary>
    /// 机器人ID集合
    /// </summary>
    public class cs_robotids : cs_base_gm
    {
        /// <summary>
        /// 机器人集合
        /// </summary>
        public string[] ids;
        /// <summary>
        /// 数量
        /// </summary>
        public int idslength;
    }

    #region 俱乐部管理
    public class cs_clubinfo : cs_base_gm
    {
        public int uid;

        public int cid;
    }

    public class sc_clubinfo : sc_base_gm
    {
        /// <summary>
        /// 俱乐部id
        /// </summary>
        public long cid;
        /// <summary>
        /// 俱乐部名称
        /// </summary>
        public string cname;
        /// <summary>
        /// 俱乐部等级
        /// </summary>
        public int clevel;

        /// <summary>
        /// log
        /// </summary>
        public string clog;
        /// <summary>
        /// 位置
        /// </summary>
        public string Loc;
    }


    #endregion

    #region 踢机器人出房间

    public class cs_RobottKickOut : cs_base_gm
    {
        public int uId;
    }

    #endregion

   

    /// <summary>
    /// 获取实体卡使用用户
    /// </summary>
    public class cs_card_user : cs_base_gm
    {
        /// <summary>
        /// 实体卡号
        /// </summary>
        public string CardNumber { get; set; }
        /// <summary>
        /// 实体卡密码
        /// </summary>
        public string CardPwd { get; set; }
        /// <summary>
        /// 实体卡Id
        /// </summary>
        public int CardId { get; set; }

    }

    /// <summary>
    /// GM 创建房间
    /// </summary>
    public class cs_createtablelist_gm : cs_base_gm
    {
        /// <summary>
        /// 游戏id
        /// </summary>
        public int gameid;
        /// <summary>
        /// 对应 gameid 参数  JSON数据 
        /// cs_createtable_mj 
        /// cs_createtable_tex
        /// cs_createtable_whi
        /// </summary>
        public string param;
    }
    public class sc_createtablelist_gm : sc_base_gm
    {
        /// <summary>
        /// 游戏id
        /// </summary>
        public int gameid;

        /// <summary>
        /// levelid
        /// </summary>
        public int levelid;

        /// <summary>
        /// 桌子号
        /// </summary>
        public int tableid;
        /// <summary>
        /// 房间号
        /// </summary>
        public string tnumber;

    }

    public class cs_createtable_mj : cs_base_gm
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;
        /// <summary>
        /// 玩家人数
        /// </summary>
        public int pc;

        /// <summary>
        ///   游戏类型，2. 二房  3.三房
        /// </summary>
        public int mt;

        /// <summary>
        /// 总局数 暂定200 相当于不用
        /// </summary> 
        public int maxCount;
        /// <summary>
        /// 封顶好番
        /// </summary>
        public int maxrate;
        /// <summary>
        /// 执行时间分钟数 30 60 90 120 
        /// </summary>  
        public int dura;
        /// <summary>
        /// 底注 1.2.5.10.20.50 
        /// </summary> 
        public int baserate;

        public int gps;
        public int ip;

        public int roomid;
        /// <summary>
        /// 好友房的密码 固定设置成4位数
        /// </summary>
        public string password;
        /// <summary>
        /// 自摸加底 1； 加番 2
        /// </summary>
        public int moadd;
        /// <summary>
        /// 点杠花一家 1； 点杠花所有人 2；
        /// </summary>
        public int ganghu;
        /// <summary>
        /// 开启7张
        /// </summary>
        public bool m_seven;
        /// <summary>
        /// 开启天地胡
        /// </summary>
        public bool m_tiandi;
        /// <summary>
        /// 开启将对
        /// </summary>
        public bool m_jiangdui;
        /// <summary>
        /// 开启换3
        /// </summary>
        public bool m_huang3;
        /// <summary>
        /// 开启门清中张
        /// </summary>
        public bool m_menzhong;
    }
    public class cs_createtable_tex : cs_base_gm
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;
        /// <summary>
        /// 玩家人数
        /// </summary>
        public int numpertable;

        /// <summary>
        /// 总局数 暂定200 相当于不用
        /// </summary> 
        public int maxCount;
        /// <summary>
        /// 执行时间分钟数 30 60 90 120 
        /// </summary>  
        public int Duration;
        /// <summary>
        /// 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500 
        /// </summary> 
        public int into;
        /// <summary>
        /// 带入倍数0.5~4
        /// </summary>
        public double intorate_min;
        public double intorate_max;

        /// <summary>
        /// 底注 1.2.5.10.20.40 小盲等于底注 大盲是小盲两倍 straddle是大盲的两倍速
        /// </summary> 
        public int baserate;
        /// <summary>
        /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
        /// </summary> 
        public int pregamble;

        public int gps;
        public int ip;
        /// <summary>
        ///  1.正常模式，2.保险模式， 3.延时看牌
        /// </summary>
        public int gametype;

        public int roomid;
        /// <summary>
        /// 好友房的密码 固定设置成4位数
        /// </summary>
        public string password;

        /// <summary>
        /// 开户视频 vides12345 0表示不开启
        /// </summary>
        public int openv;

    }

    public class cs_createtable_whi : cs_base_gm
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;
        /// <summary>
        /// 玩家人数
        /// </summary>
        public int numpertable;

        /// <summary>
        /// 总局数 暂定200 相当于不用
        /// </summary> 
        public int maxCount;
        /// <summary>
        /// 执行时间分钟数 30 60 90 120 
        /// </summary>  
        public int Duration;
        /// <summary>
        /// 最小带入 50 100  200 500 
        /// </summary> 
        public int firstinto;

        /// <summary>
        /// 底皮 1.2.5.10.20.40
        /// </summary> 
        public int baserate;
        /// <summary>
        /// 对应底皮 3.5.10.20.40.80
        /// </summary> 
        public int basemango;

        /// <summary>
        /// 揍芒
        /// </summary> 
        public string IsZm;
        /// <summary>
        /// 休芒
        /// </summary> 
        public string IsXiu;
        /// <summary>
        /// 手手芒
        /// </summary> 
        public string IsSSM;
        /// <summary>
        ///  1.正常模式，2.地九王模式。
        /// </summary>
        public int gametype;

        public int roomid;
        /// <summary>
        /// 好友房的密码 固定设置成4位数
        /// </summary>
        public string password;
        /// <summary>
        /// 开户视频 vides12345 0表示不开启
        /// </summary>
        public int openv;

    }

    public class sc_gameroom_gm : sc_base_gm
    {
        public int gameid;

        public List<RoomInfo> tablelist;
    }

    public class RoomInfo
    {
        /// <summary>
        /// 房间数量
        /// </summary>
        public int tnum;

        /// <summary>
        /// 地皮
        /// </summary>
        public int pi;

        /// <summary>
        /// 玩家数量
        /// </summary>
        public int playNum;
        /// <summary>
        /// 旁观玩家数量
        /// </summary>
        public int watchNum;
    }

    public class sc_batchcreatetable : sc_base_gm
    {


        public List<cs_createtable_tex> tabledata;
    }

    public class cs_getcontrol_gm : cs_base_gm
    {
        public List<int> uIdlist;


    }
    public class sc_getcontrol_gm : sc_base_gm
    {

        public List<ControlState> ctrlState;
    }

    public class cs_setcontrol_gm : cs_base_gm
    {
        /// <summary>
        /// 5 10 15 20 30 50 固定6个值 默认最小
        /// </summary>
        public int addrate;
        /// <summary>
        /// 500 1000 2000 5000 10000 50000 固定6个值 默认最小
        /// </summary>
        public int tgold;

        public int gameid;
        /// <summary>
        /// 强制结束 时间 默认2个小时后
        /// </summary>
        public DateTime end;

        /// <summary>
        /// 用户id
        /// </summary>
        public int uId;
    }

    public class ControlState
    {
        public int UserID;


        /// <summary>
        /// 用户对应的多个任务
        /// </summary>
        public List<cTask> ct;

        /// <summary>
        /// 在大厅1，在房间2，在桌子上打牌3, 在打牌但是断线了4
        /// </summary>
        public int Status;
    }
    public class cTask
    {

        public int Gameid;

        public string gName;

        public int RoomID;

        public int TableID;
        /// <summary>
        /// 任务结束 时间  时间到了强制结束 
        /// </summary>
        public DateTime endtime;
        /// <summary>
        /// 任务目标
        /// </summary>
        public long task;
        /// <summary>
        /// 任务目标进度
        /// </summary>
        public long taskProgress;
        /// <summary>
        /// 任务增加的机率
        /// </summary>
        public int addrate;
        /// <summary>
        /// 任务游戏id  可能需要指定游戏
        /// </summary>
        public int taskgameid;
    }

    /// <summary>
    /// 得到视讯房间
    /// </summary>
    public class cs_getvideosroom_gm : cs_base_gm
    {

    }
    /// <summary>
    /// 房卡房间信息
    /// </summary>
    public class TableRoomInfoTex
    {
        /// <summary>
        /// 房间号
        /// </summary>       
        public int tNum;
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gid;

        /// <summary>
        /// 场次ID
        /// </summary>
        public int lvid;

        /// <summary>
        /// 桌子ID
        /// </summary>
        public int tid;

        /// <summary>
        /// 创建时间
        /// </summary>
        public string ctime;

        /// <summary>
        /// 总局数
        /// </summary>
        public int maxC;

        /// <summary>
        /// 已玩局数
        /// </summary>
        public int cC;

        /// <summary>
        /// 房主ID
        /// </summary>
        public int oid;

        /// <summary>
        /// 桌子状态0已创建 1已开局 2已完结 3已解散
        /// </summary>
        public int state;
        /// <summary>
        /// 底皮
        /// </summary>
        public int brate;
        /// <summary>
        /// 开局后剩余时间 秒
        /// </summary>
        public int ltime;
        /// <summary>
        /// 玩家数量 
        /// </summary>
        public int pcount;
        /// <summary>
        ///  1表示 自己参加过这局游戏
        /// </summary>
        public int hist;
        /// <summary>
        /// 游戏时长30 60 90
        /// </summary>
        public int dur;

        /// <summary>
        /// 最低带入GOLD
        /// </summary>
        public int lg;
        /// <summary>
        /// 是否密码房
        /// </summary>
        public int ispas;

        /// <summary>
        /// 最小开局玩家数量
        /// </summary>
        public int minPC;
        /// <summary>
        /// 带入倍数0.5~4
        /// </summary>
        public double intorate_min;
        public double intorate_max;
        /// <summary>
        /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
        /// </summary> 
        public int preG;

        public int gps;
        public int ip;
        /// <summary>
        ///  1.正常模式，2.保险模式， 3.延时看牌
        /// </summary>
        public int t;
        /// <summary>
        ///  1-5视讯房间
        /// </summary>
        public int openv;
    }
    public class sc_getvideosroom_gm : sc_base_gm
    {
        /// <summary>
        /// 桌子列表
        /// </summary>
        public List<TableRoomInfoTex> tinfo;
    }
    public class cs_anchorjoinroom_gm : cs_base_gm
    {

        public int gameid;

        public int uid;
        /// <summary>
        /// 
        /// </summary>
        public int tableid;
        /// <summary>
        /// 
        /// </summary>
        public int roomid;


    }
    public class sc_anchorjoinroom_gm : sc_base_gm
    {
        /// <summary>
        /// 手牌 为空表示不需要恢复状态 新的一局
        /// </summary>
        public List<KeyValue> cards;

        /// <summary>
        /// 公牌 为空表示不需要恢复状态 新的一局
        /// </summary>
        public List<int> commoncards;
        /// <summary>
        /// 当前桌的总用户数
        /// </summary>
        public int playercount;
        /// <summary>
        /// 正在等主播开牌 0表示不是等待中 
        /// </summary>
        public int waitopen;

        /// <summary>
        /// 是否在进行中
        /// </summary>
        public int isplaying;
    }

    public class KeyValue
    {
        public int Key;

        public List<int> Value;
    }

    /// <summary>
    /// 修改表配置协议
    /// </summary>
    public class cs_syskeyvalue : cs_base_gm
    {
        public string key;

        public string value;

        public string Des;
    }

    public class sc_syskeyvalue : sc_base_gm
    {

    }
    /// <summary>
    /// 发放红利协议
    /// </summary>
    public class cs_h5bonusgive : cs_base_gm
    {
        public List<UserBonus> data;
    }

    public class UserBonus
    {
        public decimal Gold { get; set; }

        public int UserId { get; set; }
    }
    public class sc_h5bonusgive : sc_base_gm
    {

    }

    public class sc_setInvitacode : sc_base_gm
    {

    }
    /// <summary>
    /// 设置特殊邀请码
    /// </summary>
    public class cs_setInvitacode : cs_base_gm
    {
        public int uid;

        public int code;
    }
    public class sc_commodity_gm : sc_base_gm
    {

    }
    public class cs_commodity_gm : cs_base_gm
    {
        /// <summary>
        /// 商品id
        /// </summary>
        public int id;
        /// <summary>
        /// 商品名称
        /// </summary>
        public string Name;
        /// <summary>
        /// 商品介绍
        /// </summary>
        public string Introduce;
        /// <summary>
        /// 兑换金币
        /// </summary>
        public double ExchangeValue;
        /// <summary>
        /// 商品价值
        /// </summary>
        public float CommodityvValue;
        /// <summary>
        /// 商品类型名称
        /// </summary>
        public string CommodityName;
        /// <summary>
        /// 商品图片地址
        /// </summary>
        public string ImgUrl;
        /// <summary>
        /// 是否启用
        /// </summary>
        public string IsEnableDesc;
        public int CommodityType;
        public bool IsEnable;
    }

    public class cs_enterroom_cl : cs_base_cl
    {
        public int gameid;
        public int levelid;
        /// <summary>
        /// 玩家数量
        /// </summary>
        public int userCount;
        /// <summary>
        /// 操作延迟 毫秒
        /// </summary>
        public int DelayTime;
        /// <summary>
        /// 进入游戏延迟
        /// </summary>
        public int EnterDelayTime;
        /// <summary>
        /// 游戏次数
        /// </summary>
        public int MaxTimes;
        /// <summary>
        /// 压线条数
        /// </summary>
        public int Line;
        /// <summary>
        /// 单线押注
        /// </summary>
        public int BetScore;
        public int UserID;
    }

    public class sc_enterroom_cl : cs_base_cl
    {
        public int gameid;
        public int levelid;
    }

    public class cs_updateserverlist_gm : cs_base_gm
    {

    }

}
