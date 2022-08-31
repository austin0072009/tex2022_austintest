using ETModel.Script.Model;
using System;
using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    /*
    * 基础的通信结构定义类 须放置这个文件中
    */


    public class sc_exit_rebindsession_n : sc_base
    {

    }


    /// <summary>
    /// 登录
    /// </summary>
    public class cs_login : cs_base
    {
        public string accountId;
        public float lat;
        public float lng;
        /// <summary>
        /// 用户mac地址
        /// </summary>
        public string deviceID;

        /// <summary>
        /// 机器类型（1： 安卓；2：IOS）
        /// </summary>
        public int deviceType;

        /// <summary>
        /// 玩家ip
        /// </summary>
        public string IP = "";
    }

    /// <summary>
    /// 登录返回
    /// </summary>
    public class sc_login : sc_base
    {
        public int gameid;
        public int roomid;
        public string headFrame;
        public List<string> headIcos;
        public PlayerInfoSD user;
        public string UserPassword;
        /// <summary>
        /// 玩家当前的经验
        /// </summary>
        public long currUserExp;
        /// <summary>
        /// 玩家升级需要的经验
        /// </summary>
        public long TotalUserExp;
        public int cidx;

        /// <summary>
        /// 给客服端token
        /// </summary>
        public string token = "";
    }

    /// <summary>
    /// 修改头像和昵称
    /// </summary>
    public class cs_ChangeIconAndName : cs_base
    {
        /// <summary>
        /// 新昵称
        /// </summary>
        public string mName;

        /// <summary>
        /// 新的头像地址
        /// </summary>
        public string IconAddress;
    }
    /// <summary>
    /// 修改头像和昵称返回
    /// </summary>
    public class sc_ChangeIconAndName : sc_base
    {
    }

    /// <summary>
    /// 玩家的所有拥有数据
    /// </summary>
    public class PlayerInfoSD
    {
        /// <summary>
        /// Session的ID 非自增长的
        /// </summary>
        public int userid;
        /// <summary>
        /// 玩家名字
        /// </summary>
        public string _n;
        /// <summary>
        ///  sign in count玩家连续登陆天数     
        /// </summary>
        public int _sc;
        /// <summary>
        /// 总额度   totalcash
        /// </summary>
        public long gold;
        /// <summary>
        /// 钻石
        /// </summary>
        public int _diam;
        /// <summary>
        /// 玩家vip等级 0 不是VIP  1 2 3代表玩家VIP等级
        /// </summary>
        public int _vlv;
        /// <summary>
        /// 同 tuser的vlevel	
        /// </summary>
        public int lv;
        /// <summary>
        /// 玩家等级	
        /// </summary>
        public int UserLev;
        /// <summary>
        /// 玩家的游戏状态，默认为0   InLobby = 1, InRoom = 2, InTableDaiPai = 3, InTableDis = 4
        /// </summary>
        public int state; 
        public WechatInfoSD wechat; 
        public CountInfoSD cinfo;


        /// <summary>
        /// 登录玩家对玩家的备注结构
        /// </summary>
        public UserRemark uremark;

        /// <summary>
        /// 玩家当前所在牌桌
        /// </summary>
        public int tableid;
        /// <summary>
        /// 免费修改名称次数
        /// </summary>
        public int freecount;
        /// <summary>
        /// 举报的次数
        /// </summary>
        public int recount;

        /// <summary>
        /// deposited
        ///  gold
        /// </summary>
        public long deposited;

        /// <summary>
        /// win gold
        /// </summary>
        public long winnings;

        /// <summary>
        /// 商城币
        /// </summary>
        public long mallGod;

        /// <summary>
        /// 手机
        /// </summary>
        public string phone;

    }

    public class CountInfoSD
    {
        /// <summary>
        /// 获胜数 胜率可以直接计算
        /// </summary>
        public int winc;
        /// <summary>
        /// 失败数
        /// </summary>
        public int failc;
        /// <summary>
        /// 平局数
        /// </summary>
        public int dc;
        /// <summary>
        /// 翻牌数
        /// </summary>
        public int fr;
        /// <summary>
        /// 加注手数
        /// </summary>
        public int FillingCount;

        /// <summary>
        /// 牌局总数
        /// </summary>
        public int tablenum;

        /// <summary>
        /// 大盲手数
        /// </summary>
        public int Bigblind;

        /// <summary>
        /// 3公牌前加注  3+
        /// </summary>
        public int bet3;

        /// <summary>
        /// 3公牌后加注  3+
        /// </summary>
        public int cbet3;

        /// <summary>
        /// 主动入池数量
        /// </summary>
        public int drivingnum;

        /// <summary>
        /// 加注入池数量
        /// </summary>
        public int addpoolnum;



        /// <summary>
        /// 场均带入
        /// </summary>
        public double Aveinto;

        /// <summary>
        /// 总战绩
        /// </summary>
        public double AveGains;

    }
    public class WechatInfoSD
    {
        /// <summary>
        /// 微信昵称
        /// </summary>
        public string wName;
        /// <summary>
        /// 微信头像ICON
        /// </summary>
        public string wicon;
        /// <summary>
        /// 性别
        /// </summary>
        public int _S;
        /// <summary>
        /// 个性签名
        /// </summary>
        public string Desc;
    }
    /// <summary>
    /// 更新JB、钻石
    /// </summary>
    public class sc_freshgold_n : sc_base
    {
        public int gold;
        /// <summary>
        /// 1.钻石 2.JB 3.clubidx
        /// </summary>
        public int freshType;
    }
    public class cs_freshplayerInfoSD : cs_base
    {
    }
    public class sc_freshplayerInfoSD : sc_base
    {
        /// <summary>
        /// 代理ID
        /// </summary>
        public int AgentId;
        /// <summary>
        /// 代理名称
        /// </summary>
        public string AgentName;
        /// <summary>
        /// 用户信息
        /// </summary>
        public PlayerInfoSD user;

        /// <summary>
        /// 所有游戏奖池
        /// </summary>
        public int alljackpot;
    } 


    public class cs_getnotice : cs_base
    {
        /// <summary>
        /// 获取公告的最新条数
        /// </summary>
        public int Count;

        public int _t;//展示类型 类型 1公告。2系统消息。3新闻 4弹窗公告
    }

    public class noticemsg
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string title;
        /// <summary>
        /// 内容
        /// </summary>
        public string content;
        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime starttime;

        /// <summary>
        /// 结束时间
        /// </summary>
        public DateTime endtime;

        /// <summary>
        /// 间隔时间（秒）
        /// </summary>
        public int interval;
        /// <summary>
        /// 跑马灯类型
        /// </summary>
        public int marqueeType;
        /// <summary>
        /// 图片地址
        /// </summary>
        public string PicUrl;
        /// <summary>
        /// 宽
        /// </summary>
        public int Width;
        /// <summary>
        /// 高
        /// </summary>
        public int Height;
    }

    public class sc_getnotice : sc_base
    {
        public List<noticemsg> noticelist;
        public int _t;
        public int gameid;

    }
    /// <summary>
    /// 获取公告列表
    /// </summary>
    public class cs_getnoticelist : cs_base
    {
        /// <summary>
        /// 获取公告的最新条数
        /// </summary>
        public int Count;

        /// <summary>
        /// //展示类型 类型 1公告。2停服公告。3新闻 4弹窗公告
        /// </summary>
        public int _t;
    }

    public class sc_getnoticelist : sc_base
    {
        public List<notice> noticelist;

        public int _t;
        public int gameid;
    }

    public class notice
    {
        public string titel;

        public string contet;

        /// <summary>
        /// 公告时间
        /// </summary>
        public string time;
    }

    public class sc_getnotice_n : sc_base
    {
        public List<string> noticelist;

        /// <summary>
        /// 1游戏内跑马灯（比如中了大奖）
        /// </summary>
        public int _t;
        /// <summary>
        /// 游戏
        /// </summary>
        public int gameid;
    }

    public class sc_notice_n : sc_base
    {
        public noticemsg notice;

        public int _t;
        /// <summary>
        /// 游戏
        /// </summary>
        public int gameid;
    }

    /// <summary>
    /// 聊天功能             只有在游戏中，的具体一桌才能发消息
    /// </summary>
    public class cs_chat : cs_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
        /// <summary>
        /// 要发送的聊天内容
        /// </summary>
        public string content;
        /// <summary>
        /// 1语音，2表情，3文本, 4常用语,  5礼物  6发弹幕消耗
        /// </summary>
        public int type;
        /// <summary>
        /// 目标位置 如果有使用的话
        /// 弹幕的时候  1:文本   2:语音
        /// </summary>
        public int tpos;

        /// <summary>
        /// 发表情需要的金币 type=5
        /// </summary>
        public int ngold;

    }
    public class sc_chat : sc_base
    {
    }
    public class sc_chat_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 要发送的聊天内容
        /// </summary>
        public string content;
        /// <summary>
        /// 1语音，2表情，3文本, 4常用语,  5礼物
        /// </summary>
        public int type;
        public int gameid;
        /// <summary>
        /// 目标位置 如果有使用的话
        /// </summary>
        public int tpos;
        /// <summary>
        /// 玩家留座 需要处理成离开位置显示保留300秒的倒计时 
        /// </summary>
        public int keep;
        /// <summary>
        /// 剩下的JB
        /// </summary>
        public int gold;
    }
    public class sc_chat100 : sc_base
    {
        /// <summary>
        /// 剩下的JB
        /// </summary>
        public long gold;
    }
    public class sc_chat100_n : sc_base
    {
        /// <summary>
        /// 聊天信息
        /// </summary>
        public List<ChatInfo> chatinfos;
    }
    public class ChatInfo
    {
        public int pos;
        /// <summary>
        /// 要发送的聊天内容
        /// </summary>
        public string content;
        /// <summary>
        /// 1语音，2表情，3文本, 4常用语,  5礼物
        /// </summary>
        public int type;
        public int gameid;
        /// <summary>
        /// 目标位置 如果有使用的话
        /// </summary>
        public int tpos;
        /// <summary>
        /// 玩家留座 需要处理成离开位置显示保留300秒的倒计时 
        /// </summary>
        public int keep;
        /// <summary>
        /// 头像
        /// </summary>
        public string head;
    }

    /// <summary>
    /// 通用结构 ，pos 对应一个值 （rate, que, ready ）
    /// </summary>
    public class CommonPosValSD
    {
        public int pos;
        public long val;
    }
    /// <summary>
    /// 通用结构 ，pos 对应一个值 shoupai
    /// </summary>
    public class CommonPosValListSD
    {
        public int pos;
        public List<int> vallist;
    }
 

    #region    大厅相关功能，排行榜，战绩， 反馈

    /// <summary>
    /// 我的战绩
    /// </summary>     
    public class cs_getcombatgainlist : cs_base
    {
        public int gameid;
        /// <summary>
        /// 1表示仅仅我的战绩
        /// </summary>
        public int _onlymine;
    } 
   
    public class sc_getcombatgainlist : sc_base
    {
        public int gameid;
        /// <summary>
        /// 按时间倒序排序
        /// </summary>
        public List<CombatGainInfoSD> _ranklist;
    }

    /// <summary>
    ///   我的战绩结构 
    /// </summary>      
    public class CombatGainInfoSD
    {
        /// <summary>
        /// FJ号
        /// </summary>
        public int tablenum;
        /// <summary>
        /// 底皮
        /// </summary>
        public int bgamble;
        /// <summary>
        /// 开始时间
        /// </summary>
        public string _stime;

        public int _winorlost;
    }


    /// <summary>
    /// 我的战绩
    /// </summary>     
    public class cs_getgamelog : cs_base
    {
        public int gameid;

        /// <summary>
        /// 查询类型（1：今天；2：昨天；3:前一天）
        /// </summary>
        public int _queryType;
    }
    [Serializable]
    public class sc_getgamelog : sc_base
    {
        /// <summary>
        /// 返回结果
        /// </summary>
        public List<usergamelog> gamelog;
    }

    public class usergamelog
    {
        public string RoomId;

        public string DiPi;


        /// <summary>
        /// 本局手数
        /// </summary>
        public string allCount;

        /// <summary>
        /// 改变的JB
        /// </summary> 
        public long Gold;

        public DateTime CreateTime;

        /// <summary>
        /// 备注（ChangeTypeFJ结算时记录tableId）
        /// </summary> 
        public string Remark; 

    }


    /// <summary>
    /// 奖池
    /// </summary>
    public class sc_jackpot_n : sc_base
    {
        public List<JackPot> jacks;
    }
    public class JackPot
    {
        public int gameid;
        public int levelid;
        public long jackpot;
    }

    /// <summary>
    /// 反馈
    /// </summary>
    [Serializable]
    public class cs_feedback : cs_base
    {
        public int gameid;
        public int _type;
        public string _tel;
        public string _content;
    }
    /// <summary>
    /// 反馈
    /// </summary>   
    public class sc_feedback : sc_base
    {

    }
    #endregion

    #region
  
    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class cs_profitlog : cs_base
    {

    } 
    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class sc_profitlog : sc_base
    {
        public sc_profitlog()
        {
            data = new List<profitlogSD>();
        }
        public List<profitlogSD> data;
    }


    /// <summary>
    /// 奖池记录
    /// </summary>
    [Serializable]
    public class cs_tjackpotLog : cs_base
    {
        /// <summary>
        /// 游戏ID
        /// </summary> 
        public int GameId;

        /// <summary>
        /// 场次ID
        /// </summary>    
        public int RoomId;
    }
    /// <summary>
    /// 奖池记录
    /// </summary>
    [Serializable]
    public class sc_tjackpotLog : sc_base
    {
        public sc_tjackpotLog()
        {
            data = new List<JackpotLogSD>();
            bigJackpot = new JackpotLogSD();
        }
        //最近的一行天皇记录
        public JackpotLogSD bigJackpot;

        //最近10行奖池记录
        public List<JackpotLogSD> data;  
    }

    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class JackpotLogSD
    {
        public string wName;

        /// <summary>
        /// 领取金额
        /// </summary> 
        public long gold;

        /// <summary>
        /// 大奖类型（1：天皇；2：朵皇；3：朵朵）
        /// </summary> 
        public int jackpotType;

        public string createTime;
    } 

    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class profitlogSD
    {
        /// <summary>
        /// 金额
        /// </summary>
        public decimal amount { get; set; }
        /// <summary>
        /// 领取状态 0.成功 -1.失败 -2;游戏服务器扣除JB失败
        /// </summary>
        public int state { get; set; }
        /// <summary>
        /// 领取时间
        /// </summary>
        public string createtime { get; set; }
    }
    [Serializable]
    public class cs_tactivity : cs_base { }
    [Serializable]
    public class sc_tactivity : sc_base {
        public sc_tactivity()
        {
            data = new List<tactivitySD>();
        }
        public List<tactivitySD> data;
    }
    /// <summary>
    /// 活动
    /// </summary>
    [Serializable]
    public class tactivitySD
    {
        public string title { get; set; }
        public string content { get; set; }
        public string imgurl { get; set; }
    }

    /// <summary>
    /// 获取抽奖记录
    /// </summary>
    [Serializable]
    public class cs_getuserprizelog : cs_base
    {
        public int count;
    }
    [Serializable]
    /// <summary>
    /// 获取抽奖记录
    /// </summary>
    public class sc_getuserprizelog : sc_base
    {
        public List<userprizelogSD> data;

    }
    /// <summary>
    /// 抽奖记录
    /// </summary>
    public class userprizelogSD {
        /// <summary>
        /// 奖品名称
        /// </summary>
        public string prizename;
        /// <summary>
        /// 场次名称
        /// </summary>
        public string turntablename;
        /// <summary>
        /// 抽奖时间
        /// </summary>
        public string time;
        /// <summary>
        /// 奖品类型
        /// </summary>
        public int prizetype;
        /// <summary>
        /// 奖品价值
        /// </summary>
        public float price;
        public string imgurl;
    }
    /// <summary>
    /// 我的兑换
    /// </summary>
    [Serializable]
    public class sc_myExchange : sc_base
    {
        public sc_myExchange()
        {
            data = new List<myExchangeGoodsSD>();
        }
        public List<myExchangeGoodsSD> data;
    }
    /// <summary>
    /// 我的兑换SD
    /// </summary>
    [Serializable]
    public class myExchangeGoodsSD
    {
        public string name;
        public string createTime;
        public bool isHandle;
        public string oddNumbers;
        public string expressNumbers;
        public string url;//实物url
        public int exCount;
    }
    /// <summary>
    /// 添加用户联系方式
    /// </summary>
    [Serializable]
    public class cs_addUserContact : cs_base
    {
        public string Name;
        public string Mobile;
        public string PostCode;
        public string Address;

    }
    public class sc_addUserContact : sc_base
    {


    }
    #endregion




    /// <summary>
    /// 访问限制
    /// </summary>
    public class sc_visitLimit_n : sc_base
    {
        /// <summary>
        /// 限制原因
        /// </summary>
        public string msg;
    }
    #region  backgold
    /// <summary>
    /// backgold数据
    /// </summary>
    public class cs_cashmoney : cs_base
    {
        /// <summary>
        /// 密码
        /// </summary>
        public string pwd;

        /// <summary>
        /// 账号
        /// </summary>
        public string account;

        public string accounttype;

        public string Remark;

        public string UserName;

        /// <summary>
        /// backgold金额
        /// </summary>
        public int CmMoney;


    }
    public class sc_cashmoney : sc_base
    {


    }
    public class sc_bandcardinfo : sc_base
    {


    }
    /// <summary>
    /// 绑银行卡数据
    /// </summary>
    public class cs_bandcardinfo : cs_base
    {

        /// <summary>
        /// 卡号
        /// </summary>
        public string BankCardID;
        /// <summary>
        /// 用户id
        /// </summary>
        public int UserId;
        /// <summary>
        /// backgold类型
        /// </summary>
        public string AccountType;
        /// <summary>
        /// 用户姓名
        /// </summary>
        public string UserName;
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark;

    }
    #endregion

    #region 充值通道


    public class VipServiceInfo
    {
        public string desc;//vip 客服说明
        public string url;//头像url
        public string qq;//qq号
        public string phone;//手机号
        public string weixin;//微信账号可以是非数字
        public bool isOffice;//是否官方认证
        public bool isBank;//是否支持银联充值
        public bool isZhifubao;//是否支持支付宝充值
        public bool isWeixin;//是否支持微信充值
                             //数字为负数，0，字符传为空的 表示不支持该方式
    }

    #endregion
    /// <summary>
    /// 活动
    /// </summary>
    public class GameActivities
    {
        public DateTime startTime;

        public DateTime endTime;
        /// <summary>
        /// 1 手数  2红利  3盈利
        /// </summary>
        public int Type;
    }

    #region 弹幕

    /// <summary>
    /// 弹幕协议
    /// </summary>
    public class cs_chatlog : cs_base
    {

        public int tableid;

        public int gameid;

        public int levelid;
    }

    public class Barrage
    {


        public string username;
        /// <summary>
        /// 发表时间
        /// </summary>
        public string ptime;

        public string content;
        /// <summary>
        /// 1文本   2语音
        /// </summary>
        public int type;
    }



    /// <summary>
    /// 弹幕返回协议
    /// </summary>
    public class sc_chatlog : sc_base
    {

        public int tableId;

        public int gameid;

        public int levelid;
        /// <summary>
        /// 弹幕数据
        /// </summary>
        public List<Barrage> data;
    }

    #endregion


    /// <summary>
    /// 消息通知
    /// </summary>
    public class sc_newnotice : sc_base
    {
        /// <summary>
        /// 是否有消息 1是 0否
        /// </summary>
        public int isNew;
    }
    /// <summary>
    /// 修改昵称  头像
    /// </summary>
    public class cs_personalinfo : cs_base
    {
        public int UserId;

        /// <summary>
        /// 头像 带后缀
        /// </summary>
        public string HeadIcon;

        /// <summary>
        /// 昵称
        /// </summary>
        public string nikename;
        /// <summary>
        /// 头像框
        /// </summary>
        public string HeadFrame;
        /// <summary>
        /// 1男   0女
        /// </summary>
        public int sex;
        /// <summary>
        /// 个性签名
        /// </summary>
        public string desc;
    }
    public class sc_personalinfo : sc_base
    {
        /// <summary>
        /// 玩家积分
        /// </summary>
        public long lUserScore;


        public string wechatHeadIcon;

    }

    public class cs_resetprotectPwd : cs_base
    {
        /// <summary>
        /// 验证码
        /// </summary>
        public string code;
        /// <summary>
        /// 新保护密码
        /// </summary>
        public string newpwd;

        /// <summary>
        /// 手机号
        /// </summary>
        public string phone;
    }

    public class sc_resetprotectPwd : sc_base
    {

        //-1 验证码错误    -2请填入注册手机号
    }
    /// <summary>
    /// 输入房号进入的玩家需再次申请  
    /// </summary>
    public class cs_entertablenum : cs_base
    { 
        public string tnumber;
    }
    public class sc_entertablenum : sc_base
    {
        public int _g;
        public string data;
    }
    #region 推送协议
    /// <summary>
    /// 公共消息推送  没有具体讯息
    /// </summary>
    public class sc_commonnotice_n : sc_base
    {
        /// <summary>
        /// 1：加入club成功通知
        /// 2:设置管理员成功通知
        /// 3:申请club币成功通知
        /// </summary>
        public int type;

        public int UserId;

        public int clubid;
    }

    /// <summary>
    /// 推送未读消息数量
    /// </summary>
    public class sc_commonnews_n : sc_base
    {

        /// <summary>
        /// 1：club币申请
        /// 2:牌局申请
        /// 3:玩家申请club 和 club申请的申请
        /// </summary>
        public int type;
        /// <summary>
        /// 未读消息数量
        /// </summary>
        public int unCount;

        /// <summary>
        /// type 3区分申请的club
        /// </summary>
        public int clubid;
    }


    #endregion
    #region 机器人
    public class robot_entertable_slot : cs_base
    {
        public int gameid;
        public int levelid;
        public int tableid;
    }
    #endregion

    public class CommonValSD
    {
        public int clubid;

        public int allid;
        public double val;
    }
    /// <summary>
    /// 获取奖池
    /// </summary>
    public class cs_getjackpotlist : cs_base
    {
       public List<int> gameids;
    }

    public class sc_getjackpotlist : sc_base
    {
        public List<JackPot> jacks;
    }
}
