using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel.Script.CsScript.Action
{

    public class cs_getonlinecount : cs_base_gm
    {

    }
    public class sc_getonlinecount : sc_base_gm
    {

        public int userCount;
    }
    public class cs_unbinding : cs_base_gm
    {
        /// <summary>
        /// 要和上级解绑级id
        /// </summary>
        public int userid;
    }
    public class cs_setlevel_gm
    {
        public int userid;
        public int levelid;
    }

    public class cs_setcashlevel_gm : cs_base_gm
    {
        public int userid;
        /// <summary>
        /// 2可backgold
        /// </summary>
        public int lv;
    }


    public class cs_base_gm
    {
        public string fn;
        public cs_base_gm() { fn = GetType().Name; }
    }
    /// <summary>
    /// 共用传输对象
    /// </summary>
    public class cs_currdto_gm : cs_base_gm
    {
        public int gameid;
        public int userid;

        public string TradeNo;
        public int Coin;

        public int levelid;
        public string tableid;
    }
    public class cs_maxrebotpoker : cs_base_gm
    {
        public List<int> rand;
    }


    public class sc_base_gm
    {
        public string fn;
        /// <summary>
        /// 0表示 成功 1以上表示 失败
        /// </summary>
        public int _ret;
        /// <summary>
        /// 如果有错误的描述信息
        /// </summary>
        public string _info;
        public sc_base_gm() { fn = GetType().Name; }
    }
    /// <summary>
    /// 共用dto
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class cs_currentitydto_gm<T> : cs_base_gm
    {

        public T entity { get; set; }
    }
    /// <summary>
    /// 输入房号进入的玩家需再次申请 补丁
    /// </summary>
    public class sc_setcard_ll_gm : sc_base_gm
    {
        public bool _good;
    }


    public class sc_settagent_gm : sc_base_gm
    {
        public bool _ok;
    }
    public class cs_settagent_gm : cs_base_gm
    {
        public int gameid;
        public int userid;
        public int agentid;
    }

    public class sc_gmcash : sc_base_gm
    {
        public int userId;

        public decimal chmoney;

    }

    public class sc_setfagent_gm : sc_base_gm
    {
        public bool _ok;
    }
    public class cs_setrobot_gm : cs_base_gm
    {

        public int gameid;
        /// <summary>
        /// 1表示仅仅设置胜率
        /// </summary>
        public int type;
        public int userid;
        public int isrobot;
        public int winpercent;
        public int robotlevel;
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

        public int pos2Count;

        public int pos5Count;

        public int pos10Count;
        public int pos20Count;
        public int pos50Count;


    }
    /// <summary>
    /// 设置用户表数据
    /// </summary>
    public class cs_settb_user_gm : cs_base_gm
    {
        public string _userjson;
    }
    /// <summary>
    /// 设置用户静态描述字段
    /// </summary>
    public class cs_setuserdes_gm : cs_base_gm
    {
        public int gameid;
        public int userid;
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
    /// 发送公告内容
    /// </summary>
    public class cs_setnotice_gm : cs_base_gm
    {
        public string _content;
    }

    /// <summary>
    /// 充值接口
    /// </summary>
    public class cs_charge_gm : cs_base_gm
    {
        /// <summary>
        /// 1、上分 2、下分
        /// </summary>
        public int type;

        public int gameid;
        /// <summary>
        /// 唯一值
        /// </summary>
        public int userid;
        /// <summary>
        /// 数量
        /// </summary>
        public float money;
    }

    public class sc_charge_gm : sc_base_gm
    {
        /// <summary>
        /// 原JB数或钻石数
        /// </summary>
        public decimal UserMoney;
    }

    public class cs_alliancecharge_gm : cs_base_gm
    {
        /// <summary>
        /// 联盟id
        /// </summary>
        public int allid;

        /// <summary>
        /// 充值数量
        /// </summary>
        public long gold;

        /// <summary>
        /// 1上分  2下分
        /// </summary>
        public int type;
    }

    public class sc_alliancecharge_gm : sc_base_gm
    {

    }


    /// <summary>
    /// 设置用户表数据
    /// </summary>
    public class cs_setlocktime_gm : cs_base_gm
    {
        public int userid;
        public string locktime;
    }

    /// <summary>
    /// 锁定通知
    /// </summary>
    public class sc_locktimenotice_n : sc_base
    {
        /// <summary>
        /// 1  锁定
        /// </summary>
        public int status;
    }

    /// <summary>
    /// 请求离开桌子，申请解散游 pu戏
    /// </summary>
    public class cs_applyexittable_gm : cs_base_gm
    {
        public int gameid;
        public int userid;
    }
    /// <summary>
    /// 请求离开桌子，申请解散游戏
    /// </summary>
    public class cs_createtable_gm : cs_base_gm
    {
        public int gameid;
        public int userid;
    }

    /// <summary>
    /// 获取在线人数
    /// </summary>
    public class cs_getonlinecount_gm : cs_base_gm
    {
        public int gameid;
    }
    public class sc_getonlinecount_gm : sc_base_gm
    {
        public int onlinecount;
    }
      
    /// <summary>
    /// 执行维护操作服务端返回
    /// </summary>
    public class sc_maintain_operation : sc_base_gm
    {
        public int tableCount { get; set; }
    }
    /// <summary>
    /// 执行维护操作客户端发送
    /// </summary>
    public class cs_maintain_operation : cs_base_gm
    {
        public string userName { get; set; }
    }
    public class cs_closetable : cs_base_gm
    {
        public int userNo { get; set; }
    }
    public class sc_closetable : sc_base_gm
    {

    }
    /// <summary>
    /// 修改机器人几率服务器返回
    /// </summary>
    public class sc_updatePro : sc_base_gm
    {

    }
    /// <summary>
    /// 修改机器人获胜几率后台发送
    /// </summary>
    public class cs_updatePro : cs_base_gm
    {
        public int probability { get; set; }
    }
    /// <summary>
    /// 更新机器人信息发送
    /// </summary>
    public class cs_updateRobot : cs_base_gm
    {
        /// <summary>
        /// 机器人ID
        /// </summary>
        public int RobotId { get; set; }
        /// <summary>
        /// 文件路径
        /// </summary>
        public string FilePath { get; set; }
        /// <summary>
        /// 更新数量
        /// </summary>
        public int UpdateNum { get; set; }
    }
    /// <summary>
    /// 更新机器人信息返回
    /// </summary>
    public class sc_updateRobot : sc_base_gm
    {

    }


    /// <summary>
    /// 更新机器人信息发送
    /// </summary>
    public class cs_getrobotcount : cs_base_gm
    {
        public bool isrecover;


    }
    /// <summary>
    /// 更新机器人信息返回
    /// </summary>
    public class sc_getrobotcount : sc_base_gm
    {
        public int robotcount;
    }



    /// 游戏场次信息
    /// </summary>
    public class sc_gameInfo : sc_base_gm
    {

    }
    /// 游戏场次信息
    /// </summary>
    public class sc_tjackpot : sc_base_gm
    {

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
        /// <summary>
        /// 排序
        /// </summary>
        public int Sort;

        public int type;
        public int isopen;

        public int isHot;

        public int platType;

        public int jdbType;

        public int IsRun;

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
    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class cs_gamelevelInfo : cs_base_gm
    {
        /// <summary>
        /// 场次ID
        /// </summary>
        public int id;

        /// <summary>
        /// FJ名称
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
    /// <summary>
    /// 系统发送邮件
    /// </summary>
    public class cs_sendemail_gm
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int[] userids;
        public string TradeNo { get; set; }
        public int FromUserId { get; set; }

        public string FromUserName { get; set; }

        public int ToUserId { get; set; }

        public string ToUserName { get; set; }
        /// <summary>
        /// ，1交易，2系统,3 个人 4 活动
        /// </summary>
        public int MailType { get; set; }
        public string Content { get; set; }
        /// <summary>
        /// 是否已经查看 或者 表示领取
        /// </summary>
        public bool IsLook { get; set; }
        /// <summary>
        /// 邮件类型0 个人邮件 1 系统邮件 2 活动
        /// </summary>
        public int EmailType { get; set; }
        public string Title { get; set; }
        public string CreateDate { get; set; }
        public long Coin { get; set; }
        public long Diamond { get; set; }
        public List<Attach> attaches { get; set; }

    }
    public class sc_sendemail_gm : sc_base_gm
    {

    }

    /// <summary>
    /// 删除邮件
    /// </summary>
    public class cs_removeemail_gm
    {
        public string TradeNo { get; set; }
        public int ToUserId { get; set; }

    }
    public class sc_removeemail_gm : sc_base_gm
    {

    }
    public class cs_restpasswrod : cs_base_gm
    {
        public int userid { get; set; }
        public string password { get; set; }
    }

    /// <summary>
    /// 游戏开关 游戏机器人开关
    /// </summary>
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
        /// 是否关闭
        /// </summary>
        public int is_lock { get; set; }
    }
    public class cs_giveGold : cs_base_gm
    {
        public int setGiveGold;
        public bool givegold;
    }
    public class sc_giveGold : sc_base_gm
    {
        public bool giveGold;
    }

    /// <summary>
    /// GM 创建FJ
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
        /// FJ号
        /// </summary>
        public string tnumber;

    }



    #region GM设置牌型 用于测试
    /// <summary>
    /// 指定FJ指定位置 设置牌型
    /// </summary>
    public class cs_setcard_gm : cs_base_gm
    {
        public int gameid;
        public int tablenum;
        public int pos;
        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> pubcard;

        /// <summary>
        /// 麻将庄的牌
        /// </summary>
        public int mjBanker;
        /// <summary>
        /// true 表示德州video传过来的
        /// </summary>
        public bool texvctrl;

        /// <summary>
        /// 8个人 每个人4个
        /// </summary>
        public Dictionary<int, List<int>> _cards;
    }
    #endregion

    #region GM设置总代理
    /// <summary>
    /// 设置总代理
    /// </summary>
    public class cs_setgeneralagent_gm : cs_base
    {
        public int userid;

        /// <summary>
        ///  设置总代（ CEO）等级设置为默认3
        /// </summary>
        public int vlevel;
        /// <summary>
        /// 代理推荐码
        /// </summary>
        public string activeCode;
    }

    /// <summary>
    /// 设置总代理
    /// </summary>
    public class cs_setfagent_gm : cs_base
    {
        public int userid;

        /// <summary>
        /// 父级ID
        /// </summary>
        public int fUserId;
    }
    #endregion

    #region 我的代理业绩数据
    public class cs_myagentdata_gm : sc_base_gm
    {
        public List<GameUserGm> Onelevel;

        public List<GameUserGm> Twolevel;

        public List<GameUserGm> Therelevel;
        /// <summary>
        /// 总人数
        /// </summary>
        public int TotalMan { get; set; }

        /// <summary>
        /// 今日贡献
        /// </summary>
        public long TodayDevote { get; set; }
        /// <summary>
        /// 总贡献
        /// </summary>

        public long TotalDevote { get; set; }
    }
    public class cs_myagentindexdata_gm : sc_base_gm
    {

    }

    public class GameUserDetail
    {
        public string UserName;
        public int UserId;
        public int TotalHand;
        public DateTime RegTime;
    }
    /// <summary>
    /// 手数排行榜
    /// </summary>
    public class cs_gamehandcharts_gm : sc_base_gm
    {

        /// <summary>
        /// 日排行
        /// </summary>
        public List<GameUserDetail> Daily;
        /// <summary>
        /// 周排行
        /// </summary>
        public List<GameUserDetail> weekly;
        /// <summary>
        /// 月排行
        /// </summary>
        public List<GameUserDetail> monthly;
    }


    public class IndexGameUserGm
    {
        /// <summary>
        /// 上级用户id
        /// </summary>
        public int topuserId;
        /// <summary>
        /// 我的id
        /// </summary>
        public int MyId;
        /// <summary>
        /// 直接下级玩家数量
        /// </summary>
        public int LowerUserNum;
        /// <summary>
        /// 今日新增玩家
        /// </summary>
        public int TodayAddUser;
    }

    public class GameUserGm
    {
        public GameUserGm()
        {
            UserName = "";
            TotalHand = 0;
            TodayDevote = 0;
            TotalDevote = 0;
        }
        public int UserId { get; set; }

        public string UserName;
        /// <summary>
        /// 总手数
        /// </summary>
        public int TotalHand;
        /// <summary>
        /// 今日贡献
        /// </summary>
        public long TodayDevote;
        /// <summary>
        /// 总贡献
        /// </summary>

        public long TotalDevote;
    }
    #endregion


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
    public class cs_seehandcard : cs_base_gm
    {
        public int tableId;

        public int gameid;
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
    public class cs_noticemsg : cs_base_gm
    {

    }


    public class cs_noticemsgdel_gm : cs_base_gm
    {
        /// <summary>
        /// 删除公告
        /// </summary>
        public int id;
    }

    public class cs_noticemsgAdd_gm : cs_base_gm
    {
        public string data;
    }


    public class cs_addwatchrobot_whi : sc_base_gm
    {
        public int levelid;
        public int tablenum;

        public int gameid;

    }
    public class sc_addwatchrobot_whi : sc_base_gm
    {

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

    public class cs_addwatchrobot_tex : sc_base_gm
    {
        public int levelid;
        public int tablenum;

    }
    public class sc_addwatchrobot_tex : sc_base_gm
    {

    }

    /// <summary>
    /// 设置用户最大输赢值
    /// </summary>
    public class cs_maxlosewin : cs_base_gm
    {
        public int userid;

        public int maxlose;

        public int maxwin;
    }

    /// <summary>
    /// 开关游戏30分钟手术排行榜
    /// </summary>
    public class cs_switchhandrack : cs_base_gm
    {

        public int is_open;

    }
    /// <summary>
    /// gm  奖池分配比例
    /// </summary>
    public class cs_jackpotrate : cs_base_gm
    {
        public int userId;

        public List<int> bunosrate;

        public List<int> jackpotrate;
        public int Ggr;
        public int Gpr;

        public List<int> PotRates;


    }
    #region 机器人进出FJ
    public class cs_RobottKickOut : cs_base_gm
    {
        public int uId;
    }

    /// <summary>
    /// 指定FJ加指定机器人
    /// </summary>
    public class cs_robotjoinroom : cs_base_gm
    {
        public int gameId;

        public int userId;
        /// <summary>
        /// FJ号
        /// </summary>
        public int roomnumber;
        //指定位置
        public int pos;


        public int levelid;
        public int tableid;
    }

    /// <summary>
    ///一键添加机器人
    /// </summary>
    public class cs_OnekeyAddRobot_gm : cs_base_gm
    {
        /// <summary>
        /// 
        /// </summary>
        public int gameId;

        /// <summary>
        /// 桌号
        /// </summary>
        public int tnum;
    }

    public class sc_OnekeyAddRobot_gm : sc_base_gm
    {

    }

    /// <summary>
    /// 设置百人游戏房间机器人
    /// </summary>
    public class cs_set100roomrobot : cs_base_gm
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameId;
        /// <summary>
        /// 房间ID
        /// </summary>
        public int levelid;
        /// <summary>
        /// 机器人数量
        /// </summary>
        public int robotCount;
    }
    public class sc_set100roomrobot : sc_base_gm
    {
    }

    /// <summary>
    /// 更新机器人金币
    /// </summary>
    public class cs_refrerobotgold : cs_base_gm
    {
        public long robotgold;

        /// <summary>
        /// 没有区分游戏 传0
        /// </summary>
        public int gameid;
    }
    public class sc_refrerobotgold : sc_base_gm
    {
    }


    #endregion



    #region 后台获取机器人状态协议

    public class sc_rebotstate_gm : sc_base_gm
    {


        public List<RobotState> robotstate;
    }
    public class RobotState
    {
        public int UserID;
        /// <summary>
        /// 在大厅1，在FJ2，在桌子上打牌3, 在打牌但是断线了4
        /// </summary>
        public int Status;

        public int Gameid;

        public int RoomID;

        public int TableID;
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
    #endregion

    #region 后台获玩家控制 状态协议


    /// <summary>
    ///  
    /// </summary>
    public class cs_setcontrol_gm : cs_base_gm
    {
        
        /// <summary>
        /// 用户id
        /// </summary>
        public int uId;
        /// <summary>
        /// 奖池控制
        /// </summary>
        public UJackpotRange uJackpot;
    }

    public class sc_setcontrol_gm : sc_base_gm
    {


    }
    /// <summary>
    ///  
    /// </summary>
    public class cs_getcontrol_gm : cs_base_gm
    {
        public List<int> uIdlist;
    }

    public class sc_getcontrol_gm : sc_base_gm
    {

        public List<ControlState> ctrlState;
    }
    public class ControlState
    {
        /// <summary>
        /// 用户id
        /// </summary>
        public int uId;
        /// <summary>
        /// 个人点控控制配置
        /// </summary>
        public List<UJackpotRange> uJackpot;
        /// <summary>
        /// 在大厅1，在FJ2，在桌子上打牌3, 在打牌但是断线了4
        /// </summary>
        public int Status;
        /// <summary>
        /// 点控进度
        /// </summary>
        public int DKCurrScore;
        /// <summary>
        /// 点控目标
        /// </summary>
        public int DKTotalScore;
        /// <summary>
        /// 点控类型  0:新手点控  1:自动点控，2:GM点控
        /// </summary>
        public int DKType;

    }
    #endregion

    public class cs_sendDividend : sc_base_gm
    {
        public int uId;
        /// <summary>
        /// 发放金额
        /// </summary>

        public long gold;
    }

    /// <summary>
    /// 
    /// </summary>
    public class sc_gameroom_gm : sc_base_gm
    {
        public int gameid;

        public List<RoomInfo> tablelist;
    }


    public class RoomInfo
    {
        /// <summary>
        /// FJ号
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

    /// <summary>
    /// 得到视讯FJ
    /// </summary>
    public class cs_getvideosroom_gm : cs_base_gm
    {

    }

    public class sc_getvideosroom_gm : sc_base_gm
    {
        /// <summary>
        /// 桌子列表
        /// </summary>
        public List<TableRoomInfoTex> tinfo;
    }
    /// <summary>
    /// 主播加入观众协议
    /// </summary>
    public class cs_anchorjoinroom_gm : cs_base_gm
    {
        public int uid;

        /// <summary>
        /// 
        /// </summary>
        public int tableid;
        /// <summary>
        /// 
        /// </summary>
        public int roomid;
        public int gameid;
    }
    /// <summary>
    /// 主播加入观众获取状态 需要支持断线重连
    /// </summary>
    public class sc_anchorjoinroom_gm : sc_base_gm
    {
        /// <summary>
        /// 手牌 为空表示不需要恢复状态 新的一局
        /// </summary>
        public List<KeyValuePair<int, List<int>>> cards;

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

    /// <summary>
    /// 用作h5   带入接口
    /// </summary>
    public class cs_jdbIncrdecr_gm : cs_base_gm
    {
        /// <summary>
        /// 玩家id
        /// </summary>
        public int uid;

        /// <summary>
        /// 0带入h5    1退出上分到本平台
        /// </summary>
        public int type;

        /// <summary>
        /// 上下分金额
        /// </summary>
        public decimal money;


        public int gameid;
    }
    public class sc_jdbIncrdecr_gm : sc_base_gm
    {
        /// <summary>
        /// 余额
        /// </summary>
        public decimal balance;
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
    /// 修改配置
    /// </summary>
    public class cs_extenconfig_gm : cs_base_gm
    {
        /// <summary>
        /// textenconfig数据json
        /// </summary>
        public string json;

    }

    public class sc_extenconfig_gm : sc_base_gm
    {

    }


    /// <summary>
    /// 发放h5红利协议
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
    /// 设置特殊邀请码协议
    /// </summary>
    public class cs_setInvitacode : cs_base_gm
    {
        public int uid;

        public int code;
    }
    public class cs_chlidstatus_gm : cs_base_gm
    {
        /// <summary>
        /// 冻结状态 0正常 1冻结
        /// </summary>
        public int status { get; set; }
        /// <summary>
        /// 用户id
        /// </summary>
        public int userid { get; set; }
        /// <summary>
        /// clubid
        /// </summary>
        public int idx { get; set; }
    }
    public class sc_status_gm : sc_base_gm
    {
        public int status;
    }
    /// <summary>
    /// 同意用户加入本 
    /// </summary>
    public class cs_agree_union : cs_base
    {
        /// <summary>
        /// 同意联盟申请的时候  给申请人所在的club
        /// </summary>
        public int ownclubid;

        /// <summary>
        /// clubid
        /// </summary>
        public int idx;
        public int userid;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int aId;
        /// <summary>
        /// 1 表示同意 -1表示不同意
        /// </summary>
        public int agree;

    }

    /// <summary>
    /// 修改 club or union idx
    /// </summary>
    public class cs_cluborunion_gm : cs_base_gm
    {

        /// <summary>
        /// club =1 union=2
        /// </summary>
        public int type;

        public int idx;

        public int newidx;
    }
    public class sc_cluborunion_gm : sc_base_gm
    {
        /// <summary>
        /// 原idx
        /// </summary>
        public int NewIdx;
    }
    public class cs_updatechlid_club : cs_base_gm
    {//修改club用户级别
        public int idx;
        public int rate;
        public int playcount;
        public int _ismanager;
        public int userid;

    }
    public class cs_removechlid_club : cs_base_gm
    {
        /// <summary>
        /// 操作的club
        /// </summary>
        public int idx;
        /// <summary>
        /// 移除人的id
        /// </summary>
        public int userid;
    }
    public class cs_addchlid_club : cs_base_gm
    {
        /// <summary>
        /// 邀请码
        /// </summary>
        public string code;
        /// <summary>
        /// 加入人的id
        /// </summary>
        public int userid;


    }
    public class cs_clubcharge_gm : cs_base_gm
    {

        /// <summary>
        /// 类型 1上分 2 下分 club币
        /// 钻石 1钻石上分 2钻石下分
        /// </summary>
        public int type;
        /// <summary>
        /// club or union idx
        /// </summary>
        public int idx;

        /// <summary>
        /// 金额
        /// </summary>
        public float money;
    }

    public class cs_unioncharge_gm : cs_base_gm
    {

        /// <summary>
        /// 类型 1上分 2 下分
        /// 钻石 1钻石上分 2钻石下分
        /// </summary>
        public int type;
        /// <summary>
        /// club or union idx
        /// </summary>
        public int idx;

        /// <summary>
        /// 金额
        /// </summary>
        public float money;
        /// <summary>
        /// 充值类型；1 金币 2 钻石
        /// </summary>
        public int chargetype;
    }
    /// <summary>
    /// 联盟给社区上下分
    /// </summary>
    public class cs_unionchlidcharge_gm : cs_base_gm
    {

        /// <summary>
        /// 类型 1上分 2 下分
        /// </summary>
        public int type;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int allid;

        /// <summary>
        /// 社区id
        /// </summary>
        public int clubid;
        /// <summary>
        /// 金额
        /// </summary>
        public long money;
    }

    public class sc_unionchlidcharge_gm : sc_base_gm
    {

    }


    public class cs_chlidcharge_gm : cs_base_gm
    {

        /// <summary>
        /// 类型 1上分 2 下分
        /// 钻石 1钻石上分 2钻石下分
        /// </summary>
        public int type;
        /// <summary>
        /// club or union idx
        /// </summary>
        public int idx;

        public int userid;
        /// <summary>
        /// 金额
        /// </summary>
        public float money;
        /// <summary>
        /// 充值类型；1 金币 2 钻石
        /// </summary>
        public int chargetype;
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
    #region 更新serverlist
    /// <summary>
    /// 通知客服端更新serverlist
    /// </summary>
    public class sc_updateserverlist_gm_n : sc_base
    {

    }
    public class cs_updateserverlist_gm : cs_base_gm
    {

    }


    #endregion


    public class cs_onlineuser_gm : cs_base_gm
    {
        /// <summary>
        /// 0club   1联盟
        /// </summary>
        public int type;
        /// <summary>
        /// 联盟id或clubid
        /// </summary>
        public int id;
    }

    public class sc_onlineuser_gm : sc_base_gm
    {

        public List<onlineuser> users { get; set; }
    }

    public class onlineuser
    {
        /// <summary>
        /// 用户id
        /// </summary>
        public int userid { get; set; }
        /// <summary>
        /// 用户名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 当前桌号
        /// </summary>
        public int tabnum { get; set; }
        /// <summary>
        /// 位置
        /// </summary>
        public int pos { get; set; }
        /// <summary>
        ///当前带入金额
        /// </summary>
        public decimal brogold { get; set; }
        /// <summary>
        /// 状态
        /// </summary>
        public int userstatus { get; set; }

        public int status { get; set; }

        public int clubidx { get; set; }
    }

    public class cs_loadgameconfig_gm : cs_base_gm
    {
        public int gameid;
        public int levelid;
        public bool bAll;
    }
    public class cs_updatecontroldata_gm : cs_base_gm
    {
        public Dictionary<int, long> JockStockScore;
        public Dictionary<int, int> JockStockTax;
        public Dictionary<int, long> JockScore;
        public Dictionary<int, long> JockStockbalanceScore;
        public bool IsFile;
    }
    public class cs_getonlineuserstatus_gm : cs_base_gm
    {
        public int gameid;
        public int levelid;
        public int retailid;
    }
    public class sc_getonlineuserstatus_gm : sc_base_gm
    {
        public List<UserStatus> userstatus;
    }
    public class cs_robotenterroom_gm : cs_base_gm
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
        public long taskid;
        public bool bGameOver;
    }
    /// <summary>
    /// 点控玩家
    /// </summary>
    public class cs_dguser_gm : cs_base_gm
    {
        /// <summary>
        /// 玩家ID
        /// </summary>
        public int userid;
        /// <summary>
        /// 点控力度
        /// </summary>
        public int limit;
        /// <summary>
        /// 目标分数
        /// </summary>
        public long lscore;
    }
    /// <summary>
    /// 得到桌子上的玩家
    /// </summary>
    public class cs_tableinfo_gm : cs_base_gm
    {
        /// <summary>
        /// 桌号
        /// </summary>
        public int tid;

        public int roomid;
    }

    public class sc_tableinfo_gm : sc_base_gm
    {
        public List<tableuser> data;
    }

    public class tableuser
    {
        public int uid;

        public string uname;

        /// <summary>
        /// 位置
        /// </summary>
        public int pos;

        /// <summary>
        /// 0玩家   1围观人
        /// </summary>
        public int type;

        /// <summary>
        /// 战绩
        /// </summary>
        public long usergold;
        /// <summary>
        /// 保险
        /// </summary>
        public long numgold;

        /// <summary>
        /// 当前带入
        /// </summary>
        public long allgold;

    }
    /// <summary> 代理请求基类 </summary>
    public class cs_agent_base : cs_base_gm
    {
        public long time;
        public string key;
        public cs_agent_base() { time = DateTime.Now.Ticks / 10000000; }
        public bool Check(string secret) { return GetKey(secret).Equals(key); }
        public string GetKey(string secret)
        {
            List<string> list = new List<string>();
            var type = GetType();
            var fs = type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
            for (int i = 0; i < fs.Length; i++) { object obj = fs[i].GetValue(this); if (obj != null) { string value = JsonUtils.Serialize(obj); if (value != null) list.Add(value); } }
            var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
            for (int i = 0; i < ps.Length; i++) { object obj = ps[i].GetValue(this); if (obj != null) { string value = JsonUtils.Serialize(obj); if (value != null) list.Add(value); } }
            list.Add(fn);
            list.Add(time.ToString());
            list.Add(secret);
            return CommonFun.GetKey(list.ToArray());
        }

    }
    /// <summary> 代理结果基类 </summary>
    public class sc_agent_base : sc_base_gm
    {
        public long time;
        public string key;
        public sc_agent_base() { time = DateTime.Now.Ticks / 10000000; }
        public bool Check(string secret) { return GetKey(secret).Equals(key); }
        public string GetKey(string secret)
        {
            List<string> list = new List<string>();
            var type = GetType();
            var fs = type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
            for (int i = 0; i < fs.Length; i++) { object obj = fs[i].GetValue(this); if (obj != null) { string value = JsonUtils.Serialize(obj); if (value != null) list.Add(value); } }
            var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
            for (int i = 0; i < ps.Length; i++) { object obj = ps[i].GetValue(this); if (obj != null) { string value = JsonUtils.Serialize(obj); if (value != null) list.Add(value); } }
            list.Add(fn);
            list.Add(_ret.ToString());
            list.Add(_info);
            list.Add(time.ToString());
            list.Add(secret);
            return CommonFun.GetKey(list.ToArray());
        }
    }

    public class cs_agent_user_gold_change : cs_agent_base
    {
        public int userid;
        public long gold;
        public cs_agent_user_gold_change(int userid, long gold, string secret)
        {
            this.userid = userid;
            this.gold = gold;
            this.key = GetKey(secret);
        }
    }
    public class sc_agent_user_gold_change : sc_agent_base
    {
        public int userid;
        public long gold;
        public sc_agent_user_gold_change(int userid, long gold, string secret, int ret = 0, string info = null)
        {
            this.userid = userid;
            this.gold = gold;
            _info = info;
            _ret = ret;
            this.key = GetKey(secret);
        }
    }

    public class cs_enterrobot_gm : cs_base
    {
        public int levelid;
        public int tableid;
    }
    public class sc_enterrobot_gm : sc_base
    {

    }

    /// <summary> 商户用户登录请求 </summary>
    public class cs_retail_user_login : cs_agent_base
    {
        public int RetailID;
        public int UserID;
        public string RetailUser;
        public string UserName;
        public string PassportId;
        public long Gold;
        public cs_retail_user_login(int RetailID, int UserID, string RetailUser, string UserName, string PassportId, long Gold, string secret)
        {
            this.RetailID = RetailID;
            this.UserID = UserID;
            this.RetailUser = RetailUser;
            this.UserName = UserName;
            this.PassportId = PassportId;
            this.Gold = Gold;
            this.key = GetKey(secret);
        }
    }
    /// <summary> 商户用户登录结果 </summary>
    public class sc_retail_user_login : sc_agent_base
    {
        public int RetailID;
        public int UserID;
        public string RetailUser;
        public string UserName;
        public string PassportId;
        public long Gold;
        public sc_retail_user_login(int RetailID, int UserID, string RetailUser, string UserName, string PassportId, long Gold, string secret, int ret = 0, string info = null)
        {
            this.RetailID = RetailID;
            this.UserID = UserID;
            this.RetailUser = RetailUser;
            this.UserName = UserName;
            this.PassportId = PassportId;
            this.Gold = Gold;
            _info = info;
            _ret = ret;
            this.key = GetKey(secret);
        }
    }

    /// <summary> 商户用户转额 </summary>
    public class cs_retail_user_transglod : cs_agent_base
    {
        public int RetailID;
        public int UserID;
        public string PassportId;
        /// <summary>
        /// 订单号
        /// </summary>
        public string TransID;
        public long Gold;
        public cs_retail_user_transglod(int RetailID, int UserID, string PassportId, long Gold, string secret)
        {
            this.RetailID = RetailID;
            this.UserID = UserID;
            this.PassportId = PassportId;
            this.Gold = Gold;
            this.key = GetKey(secret);
        }
    }
    /// <summary> 商户用户转额结果 </summary>
    public class sc_retail_user_transglod : sc_agent_base
    {
        public long Gold;
        public sc_retail_user_transglod(  string secret, long Gold=0, int ret = 0, string info = null)
        {
            this.Gold = Gold;
            _info = info;
            _ret = ret;
            this.key = GetKey(secret);
        }
    }
    /// <summary>
    /// 修改商户信息
    /// </summary>
    public class cs_setRetailInfo_gm : cs_base_gm
    {
        public RetailInfo info;
    }
    /// <summary>
    /// 修改商户信息
    /// </summary>
    public class sc_setRetailInfo_gm : sc_base_gm
    {

    }

    /// <summary>
    /// 商户玩家退出游戏
    /// </summary>
    public class cs_retail_exitgame : cs_agent_base
    {
        public int RetailID;
        public int UserID;
        public string PassportId;
    }
    /// <summary>
    /// 商户玩家退出游戏
    /// </summary>
    public class sc_retail_exitgame : sc_agent_base
    {
        public long Gold;
        public sc_retail_exitgame(string secret, long Gold = 0, int ret = 0, string info = null)
        {
            this.Gold = Gold;
            _info = info;
            _ret = ret;
            this.key = GetKey(secret);
        }
    }

    /// <summary>
    /// 添加总代协议
    /// </summary>
    public class cs_bigagent_add : cs_agent_base
    {
        public int userid;
        public int cidx;
        public int showrate;
        public cs_bigagent_add(int userid, int cidx, int showrate, string secret)
        {
            this.userid = userid;
            this.cidx = cidx;
            this.showrate = showrate;
            this.key = GetKey(secret);
        }
    }
    /// <summary> 添加总代协议 </summary>
    public class sc_bigagent_add : sc_agent_base
    {
        public sc_bigagent_add(int _ret, string _info, string secret)
        {
            this._ret = _ret;
            this._info = _info;
            key = GetKey(secret);
        }
    }

    /// <summary> 添加代理请求 </summary>
    public class cs_agent_add : cs_agent_base
    {
        public int userid;
        public int cidx;
        public string code;
        public cs_agent_add(int userid, int cidx, string code, string secret)
        {
            this.userid = userid;
            this.cidx = cidx;
            this.code = code;
            this.key = GetKey(secret);
        }
    }
    /// <summary> 添加代理结果 </summary>
    public class sc_agent_add : sc_agent_base
    {
        public sc_agent_add(int _ret, string _info, string secret)
        {
            this._ret = _ret;
            this._info = _info;
            key = GetKey(secret);
        }
    }
    /// <summary> 变更税率请求 </summary>
    public class cs_agent_update_showrate : cs_agent_base
    {
        public int userid;
        public int parentid;
        public int cidx;
        public int showrate;
        public cs_agent_update_showrate(int userid, int parentid, int cidx, int showrate, string secret)
        {
            this.userid = userid;
            this.parentid = parentid;
            this.cidx = cidx;
            this.showrate = showrate;
            key = GetKey(secret);
        }
    }
    /// <summary> 变更税率结果 </summary>
    public class sc_agent_update_showrate : sc_agent_base
    {
        public sc_agent_update_showrate(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    /// <summary> 删除代理请求 </summary>
    public class cs_agent_delete : cs_agent_base
    {
        public int userid;
        public int parentid;
        public int cidx;
        public cs_agent_delete(int userid, int parentid, int cidx, string secret)
        {
            this.userid = userid;
            this.parentid = parentid;
            this.cidx = cidx;
            key = GetKey(secret);
        }
    }
    /// <summary> 删除代理结果 </summary>
    public class sc_agent_delete : sc_agent_base
    {
        public sc_agent_delete(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }

    /// <summary>
    /// 给社区一级代理设置rate
    /// </summary>
    public class sc_setagentrate_gm : sc_agent_base
    {
        public sc_setagentrate_gm(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    /// <summary>
    /// 给社区一级代理设置rate
    /// </summary>
    public class cs_setagentrate_gm : cs_agent_base
    {
        public int userid;
        public int rate;

        public cs_setagentrate_gm(int userid, int rate, string secret)
        {
            this.userid = userid;
            this.rate = rate;
            key = GetKey(secret);
        }
    }






    public class TempTask
    {
        public TempTask() { EndTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc); }
        /// <summary> 主键 </summary>
        public int id { get; set; }
        /// <summary> 任务名称 </summary>
        public string name { get; set; }
        /// <summary> 任务类型 </summary>
        public TaskType type { get; set; }
        /// <summary> 任务显示类型 </summary>
        public TaskShowType showtype { get; set; }
        /// <summary> 任务登记(用于系列任务,比如签到) </summary>
        public int level { get; set; }
        /// <summary> 任务条件 </summary>
        public List<TaskCondition> condition { get; set; }
        /// <summary> 任务奖励 </summary>
        public List<PrizeInfo> award { get; set; }
        /// <summary> 任务描述 </summary>
        public string remark { get; set; }
        /// <summary> 内部编号 </summary>
        public string InternalID { get; set; }
        /// <summary> 任务图片 </summary>
        public string pic { get; set; }
        /// <summary> 发放奖励类型 ：0:个人领取，1:邮件发放 2:自动领取 </summary>
        public int issueAwardType { get; set; }
        /// <summary> 任务结束时间 </summary>
        public DateTime EndTime { get; set; }
        /// <summary> 创建时间 </summary>
        public DateTime CreateDate { get; set; }
        public ttask ToTask()
        {
            var taskinfo = new ttask { id = id, type = type, level = level, remark = remark, name = name, InternalID = InternalID, pic = pic, showtype = showtype, EndTime = EndTime,issueAwardType=issueAwardType };
            if (condition != null) taskinfo.condition.AddRange(condition);
            if (award != null) taskinfo.award.AddRange(award);
            return taskinfo;
        }
    }
    /// <summary> 添加任务 </summary>
    public class cs_task_add : cs_agent_base
    {
        public TempTask task;
        public cs_task_add(TempTask task, string secret)
        {
            this.task = task;
            key = GetKey(secret);
        }
    }
    public class sc_task_add : sc_agent_base
    {
        public sc_task_add(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    public class cs_task_remove : cs_agent_base
    {
        public int id;
        public cs_task_remove(int id, string secret)
        {
            this.id = id;
            key = GetKey(secret);
        }
    }
    public class sc_task_remove : sc_agent_base
    {
        public sc_task_remove(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    public class cs_change100gamerobot_gm : cs_base_gm
    {
        public int gameid;
        public string data;
    }

    /// <summary>
    /// 更新配置
    /// </summary>
    public class cs_updatecontorlconfig_gm : cs_base_gm
    {
        public int gameid;

        public int levelid;
        public string param;
    }
    /// <summary>
    /// 设置百人限红
    /// </summary>
    public class cs_set100gamelimit_gm:cs_base_gm
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;
        /// <summary>
        /// 房间ID
        /// </summary>
        public int levelid;
        /// <summary>
        /// 个人限红
        /// </summary>
        public long[] PersonAreaMaxLimit;
        /// <summary>
        /// 总限红
        /// </summary>
        public long[] AllAreaMaxLimit;
    }

    /// <summary>
    /// 设置百人限红
    /// </summary>
    public class sc_set100gamelimit_gm : sc_base_gm
    {
    }

    /// <summary>
    /// 获取百人限红
    /// </summary>
    public class cs_get100gamelimit_gm : cs_base_gm
    {
    }

    /// <summary>
    /// 获得百人限红
    /// </summary>
    public class sc_get100gamelimit_gm : sc_base_gm
    {
        public List<GameLimitScore> gamelimits;
    }
    public class GameLimitScore
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;
        /// <summary>
        /// 房间ID
        /// </summary>
        public int levelid;
        /// <summary>
        /// 个人限红
        /// </summary>
        public long[] PersonAreaMaxLimit;
        /// <summary>
        /// 总限红
        /// </summary>
        public long[] AllAreaMaxLimit;
    }
    /// <summary>
    /// 德州牛仔做牌
    /// </summary>
    public class cs_settexascowcard_gm:cs_base_gm
    {
        public int gameid;
        public int levelid;
        public List<int> cardList;
    }
    public class sc_settexascowcard_gm : sc_base_gm
    {
    }

    /// <summary>
    /// gm开关桌子游戏状态
    /// </summary>
    public class cs_openplay_gm : cs_base_gm
    {

        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        public int levelid;

        /// <summary>
        /// 1开始游戏  0暂停游戏
        /// </summary>
        public int state;
    }

    public class sc_openplay_gm : sc_base_gm
    {

    }


    /// <summary> 比赛模板信息 </summary>
    public class CompeteModelInfo
    {
        /// <summary> 模板编号 </summary>
        public int ID { get; set; }
        /// <summary> 比赛类型 </summary>
        public CompeteType Type { get; set; }
        /// <summary> 比赛名称 </summary>
        public string Name { get; set; }
        /// <summary> 游戏编号 </summary>
        public int GameID { get; set; }
        /// <summary> 时间类型(0.日赛,1.月赛,2.年赛,3.指定时间比赛,4.周赛)  </summary>
        public int timetype { get; set; }
        /// <summary> 上架时间(只有到了这个时间，比赛才能在客户端可见，可以理解为比赛载入内存的起始时间) </summary>
        public DateTime ShelfTime { get; set; }
        /// <summary> 报名起始时间 </summary>
        public DateTime SignupTime { get; set; }
        /// <summary> 报名结束时间 </summary>
        public DateTime SignupEnd { get; set; }
        /// <summary> 比赛开始时间 </summary>
        public DateTime CompeteStart { get; set; }
        /// <summary> 比赛结束时间 </summary>
        public DateTime CompeteEnd { get; set; }
        /// <summary> 报名费 </summary>
        public List<PrizeInfo> Free { get; set; }
        /// <summary> 奖品 </summary>
        public List<CompetePrize> prizes { get; set; }
        /// <summary> 最小开赛人数 </summary>
        public int MinCount { get; set; }
        /// <summary> 最大开赛人数 </summary>
        public int MaxCount { get; set; }
        /// <summary> 比赛备注 </summary>
        public string Remark { get; set; }
        /// <summary> 比赛模板是否启用 </summary>
        public bool IsEnable { get; set; }
        public CompeteModel ToModel()
        {
            var data = new CompeteModel
            {
                ID = ID,
                Type = Type,
                GameID = GameID,
                ShelfTime = ShelfTime.IsNotNull() ? new CompeteTime(ShelfTime, timetype) : null,
                SignupTime = SignupTime.IsNotNull() ? new CompeteTime(SignupTime, timetype) : null,
                SignupEnd = SignupEnd.IsNotNull() ? new CompeteTime(SignupEnd, timetype) : null,
                CompeteStart = CompeteStart.IsNotNull() ? new CompeteTime(CompeteStart, timetype) : null,
                CompeteEnd = CompeteEnd.IsNotNull() ? new CompeteTime(CompeteEnd, timetype) : null,
                MinCount = MinCount,
                MaxCount = MaxCount,
                IsEnable = IsEnable,
                Name = Name,
                Remark = Remark
            };
            if (Free != null) data.Free.AddRange(Free);
            if (prizes != null) data.prizes.AddRange(prizes);
            return data;
        }
    }
    /// <summary> 比赛牌桌属性项信息 </summary>
    public class CompetePropertyInfo
    {
        /// <summary> 属性编号 </summary>
        public int ID { get; set; }
        /// <summary> 比赛模板编号 </summary>
        public int CompeteTemplateID { get; set; }
        /// <summary> 字段名称 </summary>
        public string FieldName { get; set; }
        /// <summary> 属性名称 </summary>
        public string Name { get; set; }
        /// <summary> 属性值 </summary>
        public string Value { get; set; }
        /// <summary> 是否启用 </summary>
        public bool IsEnable { get; set; }
        public CompeteProperty ToProperty()
        {
            return new CompeteProperty { ID = ID, CompeteTemplateID = CompeteTemplateID, FieldName = FieldName, Name = Name, Value = Value, IsEnable = IsEnable };
        }
    }
    /// <summary> 添加或修改比赛模板信息 </summary>
    public class cs_compete_add : cs_agent_base
    {
        public CompeteModelInfo info;
        public cs_compete_add(CompeteModelInfo info, string secret)
        {
            this.info = info;
            key = GetKey(secret);
        }
    }
    /// <summary> 添加或修改比赛模板结果 </summary>
    public class sc_compete_add : sc_agent_base
    {
        public sc_compete_add(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    /// <summary> 添加或修改比赛牌桌属性信息 </summary>
    public class cs_compete_property_add : cs_agent_base
    {
        public CompetePropertyInfo info;
        public cs_compete_property_add(CompetePropertyInfo info, string secret)
        {
            this.info = info;
            key = GetKey(secret);
        }
    }
    /// <summary> 添加或修改比赛牌桌属性结果 </summary
    public class sc_compete_property_add : sc_agent_base
    {
        public sc_compete_property_add(int ret, string info, string secret)
        {
            this._ret = ret;
            this._info = info;
            key = GetKey(secret);
        }
    }
    /// <summary>
    /// 非游戏状态下踢出玩家
    /// </summary>
    public class cs_tickuser_gm : cs_base_gm
    {
        public int userid;
        /// <summary>
        /// 踢出玩家时，玩家受到的提示消息
        /// </summary>
        public string msg;
    }
    public class sc_tickuser_gm : sc_base_gm
    {
    }

    /// <summary>
    /// 初始化密码
    /// </summary>
    public class sc_changePassword_GM : sc_base_gm
    {
    }

    /// <summary>
    /// 修改密码
    /// </summary>
    public class cs_changePassword_GM : cs_base_gm
    {

        public int userid;
        /// <summary>
        /// 新密码
        /// </summary>
        public string newPassWord;
    }
    /// <summary>
    /// 设置系统配置
    /// </summary>
    public class cs_setsysconfig_gm : cs_base_gm
    {
        public tsysconfig config;
    }

    public class sc_setsysconfig_gm : sc_base_gm
    {
    }

    public class cs_cocostoken_gm : cs_base_gm
    {
        public string token;

        public int userid;
    }
    /// <summary>
    /// 获取玩家信息
    /// </summary>
    public class cs_getuserinfo_gm : cs_base_gm
    {
        public int userid;
    }

    public class sc_getuserinfo_gm : sc_base_gm
    {
        public long lGold;
    }
}
