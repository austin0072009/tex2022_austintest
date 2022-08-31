using ETModel.Framework.Game.Contract.Action;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{

    public class cs_gettablelist_tex : cs_base
    {
        public int clubidx;
    }
    public class sc_gettablelist_tex : sc_base
    {
        /// <summary>
        /// 游戏局数列表 
        /// </summary>
        public List<int> tc;

        /// <summary>
        /// 每局消耗金币
        /// </summary>
        public int g;


        /// <summary>
        /// 允许最大创建房间数
        /// </summary>
        public int maxcount;
        /// <summary>
        /// 已创建房间数
        /// </summary>
        public int curcount;

        /// <summary>
        /// 桌子列表
        /// </summary>
        public List<TableRoomInfoTex> tinfo;

        /// <summary>
        /// clubid
        /// </summary>
        public int idx;
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
        /// 1开启
        /// </summary>
        public int ins;
        /// <summary>
        ///  1-5视讯房间
        /// </summary>
        public int openv;

        /// <summary>
        /// club名称
        /// </summary>
        public List<cinfo> clubName;

        /// <summary>
        /// 房间名称
        /// </summary>
        public string tname;
        /// <summary>
        /// 是否限制入池率
        /// </summary>
        public int Inflow;

        /// <summary>
        /// 房间人数
        /// </summary>
        public int manNum;

        /// <summary>
        /// 是否超级联盟房间
        /// </summary>
        public bool IsSupper;

        public bool ios;

        /// <summary>
        /// 房主同意开局 
        /// 默认都为true
        /// </summary>
        public bool openplay;

        /// <summary>
        /// AOF模式
        /// 最小保留记分倍数
        /// 最小带入的1至10倍
        /// </summary>
        public int AOF_Times;

        /// <summary>
        /// 是否结算离桌
        /// </summary>
        public bool IsSettle;

        /// <summary>
        /// 已存在gold
        /// </summary>
        public int cgold;
    }

    public class cinfo
    {
        /// <summary>
        /// club名称
        /// </summary>
        public string cn;

        /// <summary>
        /// 图标
        /// </summary>
        public string url;
    } 

    /// <summary>
    /// 输入房号进入指定桌子，尝试房卡模式通用
    /// </summary>
    public class cs_entertablenum_tex : cs_base
    {
        public string tnumber;
    }
    /// <summary>
    ///  
    /// </summary>
    public class sc_entertablenum_tex : sc_base
    {
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;

        /// <summary>
        /// 桌子ID
        /// </summary>
        public int tableid;

        /// <summary>
        /// 场次ID
        /// </summary>
        public int levelid;

        /// <summary>
        /// 底分
        /// </summary>
        public int brate;

        /// <summary>
        /// 房间号
        /// </summary>
        public string tnum;

        /// <summary>
        /// 密码房 且是房主才会有值显示出来
        /// </summary>
        public string pas;

        public int ins;
        /// <summary>
        /// 此桌面的玩有数据 所有带POS值 是从1开始， 
        /// </summary>
        public List<OtherUserInfoSD> palyerlist;

        /// <summary>
        /// 剩余时间 秒
        /// </summary>
        public int lefts;
        /// <summary>
        /// 游戏内左上角的奖池
        /// </summary>
        public int jackpot;
        /// <summary>
        /// 上一轮的奖池
        /// </summary>
        public int lpot;
        /// <summary>
        /// 下注的奖池
        /// </summary>
        public int gpot;
        /// <summary>
        /// 桌子状态
        /// </summary>
        public TableRecoverTexasSD _recover;
        /// <summary>
        /// 开局需要的最低金币
        /// </summary>
        public int limitgold;
        /// <summary>
        /// 已锁定的金币
        /// </summary>
        public int lockgold;

        /// <summary>
        /// 带入倍数0.5~4
        /// </summary>
        public double intorate_min;
        public double intorate_max;
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
        /// <summary>
        /// 已申请的延时次数
        /// </summary>
        public int delays;

        /// <summary>
        /// 开户视频 vides12345 0表示不开启
        /// </summary>
        public int openv;

        /// <summary>
        /// 延时看牌
        /// </summary>
        public int delay;
        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;

        /// <summary>
        /// 已存在club gold
        /// </summary>
        public int cgold;
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;

        /// <summary>
        /// 房主id
        /// </summary>
        public int ownnerid;

        /// <summary>
        /// 限制入池率
        /// </summary>
        public int Inflow;

        /// <summary>
        /// 房间名称
        /// </summary>
        public string tname;

        /// <summary>
        /// 人数 几人房显示
        /// </summary>
        public int manNum;

        /// <summary>
        /// 是否超级联盟房间
        /// </summary>
        public bool IsSupper;

        /// <summary>
        /// 是否控制带入  默认false
        /// </summary>
        public bool cinto;

        /// <summary>
        /// 同超级联盟的club
        /// </summary>
        public List<SuperClub> clubslist;

        /// <summary>
        /// 超级联盟  玩家带入club的id    初始为0
        /// </summary>
        public int intoCid;

        public bool ios;

        /// <summary>
        /// 强制看牌次数
        /// </summary>
        public int fshownum;

        /// <summary>
        /// 点击看公牌次数
        /// </summary>
        public int clicknum;

        /// <summary>
        /// 房主同意开局 
        /// 默认都为true
        /// </summary>
        public bool openplay;


        /// <summary>
        /// 是否结算离桌
        /// </summary>
        public bool IsSettle;

        /// <summary>
        /// 当前一共多少局
        /// </summary>
        public int _curTableOverCount;

        /// <summary>
        /// 最小开局玩家数量
        /// </summary>
        public int minPC;


        /// <summary>
        /// AOF模式
        /// 最小保留记分倍数
        /// 最小带入的1至10倍
        /// </summary>
        public int AOF_Times;
        /// <summary> 当前等级(比赛场专用) </summary>
        public int level;
        /// <summary> 最小等级(比赛场专用) </summary>
        public int min_level;
        /// <summary> 最大等级(比赛场专用) </summary>
        public int max_level;
        /// <summary> 比赛编号 </summary>
        public int competeid;
        /// <summary> 比赛名称 </summary>
        public string compete_name;
        /// <summary> 大盲 </summary>
        public int bigblind;
    }
    public class TableRecoverTexasSD
    {
        /// <summary> 
        /// 桌子初始化   Initi = 1, 
        /// 有人进了，等所有人准备，系统可以进行分配  WaitforReady = 2, 
        /// 打牌中   Playing = 3, 
        /// 前置playing状态   PrePlaying =4,
        /// </summary>
        public int _status;
        /// <summary>
        /// 是否弃牌
        /// </summary>
        public List<CommonPosValSD> _pos2giveup;
        /// <summary>
        /// 玩家现在身上的金币
        /// </summary>
        public List<CommonPosValSD> _pos2gold;
        /// <summary>
        /// 是否休
        /// </summary>
        public List<CommonPosValSD> _pos2look;
        /// <summary>
        /// 是否敲
        /// </summary>
        public List<CommonPosValSD> _pos2allin;
        /// <summary>
        /// 对应的下注值  可能为0
        /// </summary>
        public List<CommonPosValSD> _pos2gamble;
        /// <summary>
        /// 所有人的公开显示，  3~5张
        /// </summary>
        public List<int> _opencard;
        /// <summary>
        /// 自已的手牌 可能为空
        /// </summary>
        public List<int> shoupai;
        /// <summary>
        /// 只有位置的人申请才能看到
        /// </summary>
        public List<CommonPosValSD> _pos2apply;

        /// <summary>
        /// 表示轮到谁操作了:pos
        /// </summary>
        public int ctoken;

        /// <summary>
        /// 庄家位置
        /// </summary>
        public int bankpos;


        /// <summary>
        /// 当前轮到token的人 操作剩余时间秒
        /// </summary>
        public int lt;

        /// <summary>
        /// 大小盲注+strad
        /// </summary>
        public List<CommonPosValSD> _pos2bigsmall;
        /// <summary>
        /// 保险数据
        /// </summary>
        public List<sc_instoken_tex_n> insdata;
    }

    /// <summary>
    /// 创建房间
    /// </summary>
    public class cs_createtable_tex : cs_base
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
        /// 最小带入  没乘100
        /// </summary>
        public double intorate_min;
        /// <summary>
        /// 最大带入
        /// </summary>
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
        ///  1.正常模式，10.短牌  20.AOF
        /// </summary>
        public int gametype;

        /// <summary>
        /// 1开启 0关闭
        /// </summary>
        public int ins;

        public int roomid;
        /// <summary>
        /// 好友房的密码 固定设置成4位数
        /// </summary>
        public string password;

        /// <summary>
        /// 开户视频 vides12345 0表示不开启
        /// </summary>
        public int openv;

        /// <summary>
        /// 延时看牌
        /// </summary>
        public int delay;
        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;
        /// <summary>
        /// 从哪个俱乐创建的 可以为0表示 纯金币房间 只有输入房间号进去
        /// </summary>
        public int clubidx;

        /// <summary>
        /// 房间名称
        /// </summary>
        public string tname;

        /// <summary>
        /// 限制入池率
        /// </summary>
        public int Inflow;

        /// <summary>
        /// 人数  几人房显示
        /// </summary>
        public int manNum;

        /// <summary>
        /// 是否控制带入  默认false
        /// </summary>
        public bool cinto;

        /// <summary>
        /// 联盟id
        /// </summary>
        public int allianceid;

        /// <summary>
        /// 是否限制ios
        /// </summary>
        public bool ios;

        /// <summary>
        /// 房主同意开局 
        /// 默认都为true
        /// </summary>
        public bool openplay;

        /// <summary>
        /// AOF模式
        /// 最小保留记分倍数
        /// 最小带入的1至10倍
        /// </summary>
        public int AOF_Times;
        /// <summary> 当前等级(比赛场专用) </summary>
        public int level;
        /// <summary> 最小等级(比赛场专用) </summary>
        public int min_level;
        /// <summary> 最大等级(比赛场专用) </summary>
        public int max_level;
        /// <summary> 比赛名称(比赛场专用) </summary>
        public string name;
    }

    /// <summary>
    /// 创建房间
    /// </summary>
    public class sc_createtable_tex : sc_base
    {
        /// <summary>
        /// 玩家人数
        /// </summary>
        public int playerCount;

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
        /// <summary>
        /// 剩余金币
        /// </summary>
        public int gold;

        /// <summary>
        /// 自己创建房间的列表数
        /// </summary>
        public int tcount;
    }

    /// <summary>
    /// 申请坐下 不带入 显示等待 占位用 
    /// </summary>
    public class cs_sitdownwait_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int pos;
        /// <summary>
        /// 默认0 ，回桌用1
        /// </summary>
        public int iskeep;
        public double lat;
        public double lng;
    }
    public class sc_sitdownwait_tex : sc_base
    {

    }

    /// <summary>
    /// 通知所有人有人坐下了 处理等待状态
    /// </summary>
    public class sc_sitdownwait_tex_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 目标位置有人进入
        /// </summary>
        public int tpos;
        /// <summary>
        /// 房间中的其他人
        /// </summary>
        public OtherUserInfoSD user;
        /// <summary>
        /// 在坐位上的倒计时
        /// </summary>
        public List<CommonPosValSD> id2keep;
        /// <summary>
        /// apply time 180秒的倒计时，如果些用户还处理申请状态
        /// </summary>
        public int atime;
    }


    /// <summary>
    /// 申请坐下 不带入 退也等待 不占位 
    /// </summary>
    public class cs_sitdownwaitup_tex : cs_base
    {
        public int levelid;
        public int tableid;
    }

    public class sc_sitdownwaitup_tex : sc_base
    {

    }

    /// <summary>
    /// 通知所有人有人不占座了
    /// </summary>
    public class sc_sitdownwaitup_tex_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 目标位置有人进入
        /// </summary>
        public int tpos;
        /// <summary>
        /// 房间中的其他人
        /// </summary>
        public OtherUserInfoSD user;
        /// <summary>
        /// 在坐位上的倒计时
        /// </summary>
        public List<CommonPosValSD> id2keep;
    }

    /// <summary>
    /// 申请坐下
    /// </summary>
    public class cs_sitdown_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int gold;
        public int pos;
        /// <summary>
        /// 好友需要 的密码
        /// </summary>
        public string pas;
        /// <summary>
        /// 默认0 ，回桌用1
        /// </summary>
        public int iskeep;
        public double lat;
        public double lng;
        public int clubidx;
    }
    public class sc_sitdown_tex : sc_base
    {
        /// <summary>
        /// 用户身上的金币需要同步一下
        /// </summary>
        public int ugold;
    }

    /// <summary>
    /// 通知所有人有人坐下了
    /// </summary>
    public class sc_sitdown_tex_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 目标位置有人进入
        /// </summary>
        public int tpos;
        /// <summary>
        /// 房间中的其他人
        /// </summary>
        public OtherUserInfoSD user;
        /// <summary>
        /// 在坐位上的倒计时
        /// </summary>
        public List<CommonPosValSD> id2keep;
    }

    /// <summary>
    /// 申请留座 保留6分钟
    /// </summary>
    public class cs_situpkeep_tex : cs_base
    {
        public int levelid;
        public int tableid;
        /// <summary>
        /// true 表示留座  false表示站起围观
        /// </summary>
        public bool keep;
    }
    public class sc_situpkeep_tex : sc_base
    {
        /// <summary>
        /// true 表示留座  false表示站起围观
        /// </summary>
        public bool keep;
        /// <summary>
        /// 已锁定的金币
        /// </summary>
        public int lockgold;
    }
    public class sc_situpkeep_tex_n : sc_base
    {
        public int userid;

        /// <summary>
        /// 是否留座    的时间 0表示不需要留座 正常值1~300秒
        /// </summary>
        public int isK;
    }
    /// <summary>
    /// 有人进入一桌，推送给这一桌内的所人的
    /// </summary>
    public class sc_entertable_tex_n : sc_base
    {
        public List<OtherUserInfoSD> palyerlist;

    }
    /// <summary>
    /// 申请准备  
    /// </summary>
    public class cs_ready_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int pos;
    }
    public class sc_ready_tex : sc_base
    {

    }
    /// <summary>
    /// 通知所有人谁准备了
    /// </summary>
    public class sc_ready_tex_n : sc_base
    {
        public int pos;
    }
    /// <summary>
    /// 进入房间后开始推送每人的牌  _n表示是服务器推送的
    /// </summary>
    public class sc_tablestart_tex_n : sc_base
    {
        public int tableid;
        public int pos;
        /// <summary>
        /// 表示哪个的庄
        /// </summary>
        public int _bankerPos;
        public List<CommonPosValSD> _pos2UserID;
        public List<CommonPosValSD> _pos2Gold;
        /// <summary>
        /// 初始下注
        /// </summary>
        public List<CommonPosValSD> _pos2Gamble;
        /// <summary>
        /// 大小盲注+strad
        /// </summary>
        public List<CommonPosValSD> _pos2bigsmall;
        /// <summary>
        /// 初始补strad
        /// </summary>
        public List<CommonPosValSD> _pos2strad;
        public List<int> _showCard;//需要明的牌， 
        /// <summary>
        /// 表示此次的局号 时间格式编码
        /// </summary>
        public string MatchCode;
        /// <summary>
        /// 剩余时间 秒
        /// </summary>
        public int lefts;

    }

    /// <summary>
    /// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
    /// </summary>
    public class sc_token_tex_n : sc_base
    {
        /// <summary>
        /// 当前处理的令牌数
        /// </summary>
        public int _t;
        /// <summary>
        /// 奖池的金币
        /// </summary>
        public int _jackpot;
        /// <summary>
        /// 主池边池默认第一个为主池
        /// </summary>
        public List<int> potlist;
        public int pos;
        /// <summary>
        /// 当前轮已有的最大下注值
        /// </summary>
        public int _emaxg;
        /// <summary>
        /// 允许早小下注值  为0时表示可以选择看牌
        /// </summary>
        public int _min;
        /// <summary>
        /// 允许最大加注值 
        /// </summary>
        public int _max;
        /// <summary>
        /// 第几轮
        /// </summary>
        public int _tc;
        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> _Cards;
    }



    /// <summary>
    /// 下注
    /// </summary>
    public class cs_gamble_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int money;
        /// <summary>
        /// 加了倍没？
        /// </summary>
        public bool addrate;
    }
    public class sc_gamble_tex : sc_base
    {

    }
    /// <summary>
    /// 通知所有人下注成功
    /// </summary>
    public class sc_gamble_tex_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 当前的下注
        /// </summary>
        public int _gamble;
        public bool _allin;
        /// <summary>
        /// 加倍了没？
        /// true就是大 false就是跟   没值就是让牌
        /// </summary>
        public bool addrate;

        /// <summary>
        /// 一个轮结束的标识
        /// </summary>
        public bool _turnOver;
        /// <summary>
        /// pos 的金币值
        /// </summary>
        public int tgold;

        /// <summary>
        /// 最后的奖池
        /// </summary>
        public int _jackpot;
    }

    /// <summary>
    /// 弃牌
    /// </summary>
    public class cs_giveup_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int pos;
    }
    public class sc_giveup_tex : sc_base
    {
        public List<int> _shoupai;
    }
    /// <summary>
    /// 通知所有人，弃牌状态  
    /// </summary>
    public class sc_giveup_tex_n : sc_base
    {

        /// <summary>
        /// 一个轮结束的标识
        /// </summary>
        public bool _turnOver;
        public int pos;
    }
    #region delay
    /// <summary>
    /// 分牌时申请延时
    /// </summary>
    public class cs_delay_tex : cs_base
    {
        public int levelid;
        public int tableid;
    }
    public class sc_delay_tex : sc_base
    {

    }
    /// <summary>
    /// 通知所有人，有人申请了延时
    /// </summary>
    public class sc_delay_tex_n : sc_base
    {
        public int UserID;
        public int time;
        /// <summary>
        /// 次数
        /// </summary>
        public int delays;
    }
    #endregion

    #region insurance 在allin后 未完全打开公开牌的时候才会出现保险界面
    /// <summary>
    /// 移一次token  用户可能有两个操作，选保额，或不保  
    /// </summary>
    public class sc_instoken_tex_n : sc_base
    {
        /// <summary>
        /// 当前处理的令牌数
        /// </summary>
        public int _t;
        /// <summary>
        /// 奖池的金币
        /// </summary>
        public int _jackpot;
        public int pos;
        /// <summary>
        /// 第几轮
        /// </summary>
        public int _tc;
        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> _Cards;
        /// <summary>
        /// 显示参与的人的手牌
        /// </summary>
        public List<CommonPosValListSD> _pos2Shoupai;

        /// <summary>
        /// 每个人的胜率
        /// </summary>
        public List<CommonPosValSD> _pos2win;
        /// <summary>
        /// 补牌
        /// </summary>
        public List<int> outs31;
        /// <summary>
        /// 补牌
        /// </summary>
        public List<int> outs32;
        /// <summary>
        /// 赔率
        /// </summary>
        public double rate;
        /// <summary>
        /// 已购保额
        /// </summary>
        public int order;
        /// <summary>
        /// 奖池列表 可能一个 可能两个 最多3个人保险 第三个奖池没意义
        /// </summary>
        public List<int> potlist;
        public int mpot31;
        public int mpot32;
        public List<int> _ilist31;
        /// <summary>
        /// 可选保额列表
        /// </summary>
        public List<int> _ilist32;
        /// <summary>
        /// 多个人同时买保险显示 
        /// </summary>
        public List<CommonPosValSD> ipos;

    }
    /// <summary>
    /// 保险
    /// </summary>
    public class cs_insurance_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int pos;
        /// <summary>
        /// 手选的补牌 null表示全选
        /// </summary>
        public List<int> outs;
        /// <summary>
        /// 保额 0表示不保 主池
        /// </summary>
        public int ins;
        /// <summary>
        /// 【分池】，
        /// </summary>
        public int ins32;
    }
    public class sc_insurance_tex : sc_base
    {
        /// <summary>
        /// 保额 0表示不保
        /// </summary>
        public int ins;
    }
    /// <summary>
    /// 通知所有人，购买保险  
    /// </summary>
    public class sc_insurance_tex_n : sc_base
    {
        public int pos;
        /// <summary>
        /// 保额
        /// </summary>
        public int ins;
    }
    #endregion

    /// <summary>
    /// 结算 通知所有人
    /// </summary>
    public class sc_end_tex_n : sc_base
    {
        /// <summary>
        /// 用户身上的金币需要同步一下
        /// </summary>
        public int ugold;
        /// <summary>
        /// 最后的奖池
        /// </summary>
        public int _jackpot;
        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> _Cards;
        /// <summary>
        /// 
        /// </summary>
        public List<CommonPosValSD> _pos2Gold;
        /// <summary>
        /// 这局所有的输赢 都是正数需要根据WinPOS处理
        /// </summary>
        public List<CommonPosValSD> _pos2GoldWin;
        /// <summary>
        ///赢了的人分奖池过程
        /// </summary>
        public List<TexasCompareSD> _pos2Score;
        /// <summary>
        /// 所有人的手牌，弃牌的人不显示 
        /// </summary>
        public List<CommonPosValListSD> _pos2ShouPai;
        /// <summary>
        /// 所有人的最大牌，弃牌的人不显示 
        /// </summary>
        public List<CommonPosValListSD> _pos2MaxPai;
        /// <summary>
        /// 玩家变成观众的列表，
        /// </summary>
        public List<CommonPosValSD> _watchlist;
        /// <summary>
        /// 玩家留座 需要处理成离开位置显示保留300秒的倒计时，如果是自己还有一个回桌的按钮
        /// </summary>
        public List<CommonPosValSD> _keeplist;

        /// <summary>
        /// 开局需要的最低金币
        /// </summary>
        public int limitgold;

        /// <summary>
        /// 全部玩家秀的牌
        /// </summary>
        public List<UserCards> Showcard;
    }

    public class UserCards
    {
        /// <summary>
        /// 玩家id
        /// </summary>
        public int uid;

        /// <summary>
        /// 牌
        /// </summary>
        public List<Cards> cards;
    }

    public class Cards
    {
        /// <summary>
        /// 牌idx
        /// </summary>
        public int cpos;

        /// <summary>
        /// 牌
        /// </summary>
        public int card;
    }

    /// <summary>
    /// 比牌过程的值，从大到小金币，因为最大牌型可能没有分完的
    /// </summary>
    public class TexasCompareSD
    {
        /// <summary>
        /// 是UserID
        /// </summary>
        public int pos;
        /// <summary>
        /// 当局的下注值，用于分割奖池
        /// </summary>
        public int _gold;
        /// <summary>
        /// 当前的奖池
        /// </summary>
        public int _jackpot;
        public int Score;
        /// <summary>
        /// 1表示要显示bigwin 是自己的POS才显示 同时会游戏人发公告 恭喜XXX击中朵朵获得XXX奖池 奖池会通知更新
        /// </summary>
        public int bigwin;
        /// <summary>
        /// 理赔额度
        /// </summary>
        public int claim;
    }
    /// <summary>
    /// 请求离开桌子，后面可以处理重新开始
    /// </summary>
    public class cs_applyexittable_tex : cs_base
    {
        public int levelid;
        public int tableid;
        /// <summary>
        /// 申请位置
        /// </summary>
        public int pos;
    }
    public class sc_applyexittable_tex : sc_base
    {
    }

    public class cs_bigend_tex : cs_base
    {
        public int levelid;
        public int tableid;
    }

    public class sc_bigend_tex : sc_base
    {
        public BigEndInfoSD_tex bigend;

        /// <summary>
        /// 标识是否管理员或者创建者
        /// </summary>
        public bool isnamger;
    }

    public class sc_bigend_tex_n : sc_base
    {
        public BigEndInfoSD_tex bigend;

        /// <summary>
        /// 标识是否管理员或者创建者
        /// </summary>
        public bool isnamger;
    }
    public class BigEndInfoSD_tex
    {
        /// <summary>
        /// 1-3
        /// </summary>
        public string br;
        /// <summary>
        /// 开始时间
        /// </summary>
        public string btime;
        public string etime;
        /// <summary>
        /// 持续时间 分钟显示转换成0.5h 1h
        /// </summary>
        public int dur;
        /// <summary>
        /// 奖池 可能为负 有人击中朵朵可能为负
        /// </summary>
        public int tax;
        /// <summary>
        /// 本局总手数
        /// </summary>
        public int pc;
        /// <summary>
        /// 本局总带入
        /// </summary>
        public int allintogold;
        /// <summary>
        /// 所有参与人员 已按赢的多少进行了排序  MVP【赢最多的】 大鱼【输最多的】 土豪【带入最多的】 在此查找
        /// </summary>
        public List<TableGainSD> gainlist;

        /// <summary>
        /// 保险贡献
        /// </summary>
        public int InsurTotal;

        /// <summary>
        /// club输赢  超级联盟才有
        /// </summary>
        public List<TableClubLoseWin> clubWl;

        /// <summary>
        /// club保险输赢
        /// </summary>
        public List<clubinfo> clunbins;

        /// <summary>
        /// 是否超级联盟房间
        /// </summary>
        public bool IsSupper;
    }
    /// <summary>
    /// club输赢结构
    /// </summary>
    public class TableClubLoseWin
    {
        /// <summary>
        /// club名称
        /// </summary>
        public string clubname;
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;

        /// <summary>
        /// club输赢（club币）
        /// </summary>
        public long gold;
    }


    /// <summary>
    /// 保险日志临时保存
    /// </summary>
    public class cluballinfo
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
        /// <summary>
        /// club名称
        /// </summary>
        public string clubname;

        public int userid;

        public string name;

        public string headurl;

        public long gold;
    }

    /// <summary>
    /// 保险日志
    /// </summary>
    public class clubinfo
    {
        public string clubname;

        public List<Insurinfo> userinfos;
    }
    public class Insurinfo
    {
        /// <summary>
        /// 头像
        /// </summary>
        public string headurl;

        /// <summary>
        /// 姓名
        /// </summary>
        public string name;
        /// <summary>
        /// 保险输赢
        /// </summary>
        public double gold;
    }


    #region vmaster
    /// <summary>
    /// 通知主播需要开牌了  
    /// </summary>
    public class sc_tokenvmaster_tex_n : sc_base
    {
        /// <summary>
        /// 公牌数 3表示开张，4表示 开第四张，5表示 开第五张
        /// </summary>
        public int cCount;
    }

    /// <summary>
    /// 主播收到通知后开牌了  仅主播用
    /// </summary>
    public class cs_tokenvmaster_tex : sc_base
    {
        public int levelid;
        public int tableid;
        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> _Cards;
    }
    /// <summary>
    ///  主播收到通知后开牌了  仅主播用  
    /// </summary>
    public class sc_tokenvmaster_tex : sc_base
    {

    }
    #endregion

    #region 游戏内战绩
    public class cs_enterrobot_tex : cs_base
    {
        public int levelid;
        public int tableid;
    }
    public class sc_enterrobot_tex : sc_base
    {

    }

    /// <summary>
    /// 游戏内战绩
    /// </summary>
    public class cs_thistory_tex : cs_base
    {
        public int levelid;
        public int tableid;

    }
    public class sc_thistory_tex : sc_base
    {
        /// <summary>
        /// 用户列表包括所有参与过了不含观众
        /// </summary>
        public List<PInfoSD> ulist;

        /// <summary>
        /// 每局的历史
        /// </summary>
        public List<TexTInfoSD> tulist;

        /// <summary>
        /// 房间号
        /// </summary>
        public int tableId;

        /// <summary>
        /// 底注
        /// </summary>
        public int bg;

        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;

        /// <summary>
        /// 已经收藏的局数
        /// </summary>
        public int savaNum;

        /// <summary>
        /// 最大收藏数量
        /// </summary>
        public int maxSnum;
    }

    /// <summary>
    /// 牌局历史单局数据
    /// </summary>
    public class TexTInfoSD
    {
        public TexTInfoSD() { handcount = 0; }
        /// <summary>
        /// 
        /// </summary>
        public int handcount;

        public List<int> maxpoker;

        public int winuser;

        public long winGold;

        /// <summary>
        /// 是否收藏保存
        /// </summary>
        public bool IsSava;
        /// <summary>
        /// 单局唯一id  收藏使用
        /// </summary>
        public string infoId;
        /// <summary>
        /// jackpot +- 可能增加减速如果发了大奖也会为-
        /// </summary>
        public int j;
        /// <summary>
        /// 公牌 
        /// </summary>
        public List<int> c;
        /// <summary>
        /// 单局参与游戏所有玩家信息 手牌 胜负 
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

        /// <summary>
        /// 庄的位置
        /// </summary>
        public int bankerpos;

    }

    public class TexActionSD
    {
        /// <summary>
        /// 顺序
        /// </summary>
        public int i;
        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        public int id;

        /// <summary>
        /// 用户图标 标识
        /// </summary>
        public int pos;

        /// <summary>
        /// action type sb小盲 bb大盲 s：stradlle c call跟 f fold弃 A allin  X让牌  3B是大的2/3  B是1/2 
        /// R 
        /// </summary>
        public int at;
        /// <summary>
        /// 下注值 
        /// </summary>
        public int g;
        /// <summary>
        /// 第一轮表示带入余额
        /// </summary>
        public long jg;

        /// <summary>
        /// 当前轮次(perflop、flop、turn、showdown)
        /// 也就是TexasTurnEnum 对应标识
        /// </summary>
        public int turn;
    }

    public class TexUserInfoSD
    {
        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        public int id;
        /// <summary>
        /// 是否强制show牌（0:表示没有；1：强制秀牌）
        /// </summary>
        public int st;

        /// <summary>
        /// 前两张牌(初始底牌)
        /// </summary>
        public List<int> p;
        /// <summary>
        ///  
        /// 第几轮弃的牌   小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        /// </summary>
        public int s;
        /// <summary>
        /// 自己的下注
        /// </summary>
        public int g;
        /// <summary>
        /// giveup 1 表示弃牌
        /// </summary>
        public int gu;
        /// <summary>
        /// 总赢的金币 减去税收
        /// </summary>
        public int wg;
        /// <summary>
        /// 保额
        /// </summary> 
        public int ins;
        /// <summary>
        /// 用户图标 标识
        /// </summary>
        public int pos;

        /// <summary>
        /// 这一轮是否强制秀牌
        /// </summary>
        public bool fshow;

        /// <summary>
        /// 自己对应的公牌数据
        /// </summary>
        public List<int> ownc;
    }


    /// <summary>
    /// 游戏战绩详情
    /// </summary>
    public class cs_roomhistory_tex : cs_base
    {
        public int levelid;
        public int tableid;
    }

    public class sc_roomhistory_tex : sc_base
    {
        /// <summary>
        /// 用户列表包括所有参与过了不含观众
        /// </summary>
        public List<PInfoSD> ulist;
        public List<TexTInfoSD> tulist;
        /// <summary>
        /// 大结算实体数据
        /// </summary>
        public BigEndInfoSD_tex BigEndInfo;

        /// <summary>
        /// 底皮
        /// </summary>
        public int bg;

        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;
    }

    /// <summary>
    /// 请求奖池详情  包括 奖池记录
    /// </summary>
    public class cs_getalljackpot_tex : cs_base
    {

    }

    public class sc_getalljackpot_tex : sc_base
    {
        /// <summary>
        /// 6个底皮对应的奖池 
        /// </summary>
        public List<CommonPosValSD> _base2pot;
    }

    /// <summary>
    /// 通知更新总奖池
    /// </summary>
    public class sc_alljackpot_tex_n : sc_base
    {
        public ulong alljackpot;
    }

   


    /// <summary>
    /// 游戏内战绩
    /// </summary>
    public class cs_getgain_tex : cs_base
    {
        public int levelid;
        public int tableid;

    }

    public class sc_getgain_tex : sc_base
    {
        public int jackpot;
        public List<TableGainSD> glist;
        /// <summary>
        /// 这桌保险池
        /// </summary>
        public int Inspool;
        /// <summary>
        /// 剩余时间 秒
        /// </summary>
        public int lefttime;
        /// <summary>
        /// 旁观信息
        /// </summary>
        public List<PlayerInfoSD> wlist;

    }

    /// <summary>
    /// 游戏内加金币  游戏结束前只能补充一次且在下局才会生效
    /// </summary>
    public class cs_addgoldingame_tex : cs_base
    {
        public int levelid;
        public int tableid;
        /// <summary>
        /// 补充的
        /// </summary>
        public int gold;

        public int clubidx;
    }
    public class sc_addgoldingame_tex : sc_base
    {
        /// <summary>
        /// 补充的 用于再次点开时显示
        /// </summary>
        public int gold;
    }

    #endregion

    public class cs_userremark_tex : cs_base
    {
        /// <summary>
        ///桌子id
        /// </summary>
        public int tableid;

        /// <summary>
        /// 桌子等级
        /// </summary>
        public int levelid;
        /// <summary>
        /// 要备注的玩家id
        /// </summary>
        public int uid;
        /// <summary>
        /// 要备注的玩家姓名
        /// </summary>
        public string rname;

        /// <summary>
        /// 玩法备注
        /// </summary>
        public string pRemark;
    }

    public class sc_userremark_tex : sc_base
    {

    }

    /// <summary>
    /// 踢人  从桌子上,正在游戏中不能踢
    /// </summary>
    public class cs_tickuser_tex : cs_base
    {
        public int levelid;
        public int tableid;
        /// <summary>
        ///要踢的人的userid
        /// </summary>
        public int uid;
        /// <summary>
        /// 1表示强制站起，2表示强制退出桌子，这一桌的时间内都不能再次进入
        /// </summary>
        public int type;
    }

    public class sc_tickuser_tex : sc_base
    {

    }
    public class sc_tickuser_tex_n : sc_base
    {
        /// <summary>
        /// 房主id
        /// </summary>
        public int ownid;
        /// <summary>
        /// 被强制站起得玩家id
        /// </summary>
        public int kickuid;

        /// <summary>
        /// 已经锁定的金币
        /// </summary>
        public int lockgold;
    }
    /// <summary>
    /// 收藏单局牌协议
    /// </summary>
    public class cs_texascollect_tex : cs_base
    {
        /// <summary>
        /// 0 表示收藏   1表示删除   删除的时候只需要infoId参数了
        /// </summary>
        public int type;
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        /// <summary>
        /// 
        /// </summary>
        public int levelid;

        /// <summary>
        /// 可能会给每一局的id
        /// </summary>
        public string infoId;
    }
    public class sc_texascollect_tex : sc_base
    {
        /// <summary>
        /// 已经收藏的局数
        /// </summary>
        public int savaNum;

        /// <summary>
        /// 可能会给每一局的id
        /// </summary>
        public string infoId;

        /// <summary>
        /// 是否保存收藏
        /// </summary>
        public bool IsSava;
    }
    /// <summary>
    /// 得到我的牌局收藏
    /// </summary>
    public class cs_geymytexascollect_tex : cs_base
    {

    }

    public class sc_geymytexascollect_tex : sc_base
    {
        public List<TexasCollectList> data;
    }

    public class TexasCollectList
    {
        /// <summary>
        /// 收藏的id
        /// </summary>
        public string cid;

        /// <summary>
        /// 单局的id
        /// </summary>
        public string infoId;

        public int baserate;

        /// <summary>
        /// 当前局数
        /// </summary>
        public int gNum;

        /// <summary>
        /// 总局数
        /// </summary>
        public int totalnum;

        /// <summary>
        /// 赢家id
        /// </summary>
        public int WinUserId;

        /// <summary>
        /// 赢家姓名
        /// </summary>
        public string winName;

        /// <summary>
        /// 赢取金额
        /// </summary>
        public long winGold;


        /// <summary>
        /// 查看次数
        /// </summary>
        public int seeNum;

        /// <summary>
        /// 没有弃牌人个数
        /// </summary>
        public int NoGiveupNum;

        /// <summary>
        /// 最大组合牌  TexasPokerType枚举
        /// </summary>
        public int maxPoker;

        /// <summary>
        /// 自己参与游戏  自己的手牌
        /// </summary>
        public List<int> OwnSpair;

        /// <summary>
        /// 自己的输赢
        /// </summary>
        public long OwnWin;

        /// <summary>
        /// 前注值
        /// </summary>
        public int preG;

        /// <summary>
        /// 公牌
        /// </summary>
        public List<int> compoker;
    }

    public class cs_getscollectbyid_tex : cs_base
    {
        /// <summary>
        /// 收藏的id
        /// </summary>
        public string cid;
    }

    public class sc_getscollectbyid_tex : sc_base
    {
        /// <summary>
        /// 收藏时间
        /// </summary>
        public string cTime;
        /// <summary>
        /// 查看次数
        /// </summary>
        public int snum;

        /// <summary>
        /// 6位数桌号
        /// </summary>
        public int tnum;

        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;

        /// <summary>
        /// 单局
        /// </summary>
        public TexTInfoSD tinfo;

        /// <summary>
        /// 所有玩家
        /// </summary>
        public List<PInfoSD> ulist;

        /// <summary>
        /// 底注
        /// </summary>
        public int baserate;

        /// <summary>
        /// 一局最大的筹码
        /// </summary>
        public long maxPot;
    }

    /// <summary>
    /// 解散桌子协议
    /// </summary>
    public class cs_dismisstable_tex : cs_base
    {
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        /// <summary>
        /// 
        /// </summary>
        public int levelid;
    }

    public class sc_dismisstable_tex : sc_base
    {

    }
    /// <summary>
    /// 查看公牌余牌
    /// </summary>
    public class cs_seerestcard_tex : cs_base
    {
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        /// <summary>
        /// 
        /// </summary>
        public int levelid;
    }

    public class sc_seerestcard_tex : sc_base
    {
        public List<int> card;
    }

    /// <summary>
    /// 强制秀牌
    /// </summary>
    public class cs_forceshowcard_tex : cs_base
    {
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        /// <summary>
        /// 
        /// </summary>
        public int levelid;
    }

    public class sc_forceshowcard_tex : sc_base
    {
        public List<CommonPosValListSD> othercard;

        /// <summary>
        /// 强制看牌次数
        /// </summary>
        public int fshownum;
    }

    public class SuperClub
    {
        /// <summary>
        /// club名称
        /// </summary>
        public string cname;

        /// <summary>
        /// clubid
        /// </summary>
        public int cid;

        /// <summary>
        /// 自己在这个club的余额
        /// </summary>
        public long clubgold;

        public string url;
    }


    #region 秀牌协议

    /// <summary>
    /// 申请秀自己的手牌
    /// </summary>
    public class cs_showmycard_tex : cs_base
    {
        public int levelid;
        public int tableid;
        public int card;
        /// <summary>
        /// 0取消    1展示
        /// </summary>
        public int type;
    }
    public class sc_showmycard_tex : sc_base
    {
        /// <summary>
        /// 0取消    1展示
        /// </summary>
        public int type;
        /// <summary>
        /// 牌的位置
        /// </summary>
        public int cpos;
    }
    public class sc_showmycard_tex_n : sc_base
    {
        /// <summary>
        /// 根据用户ID找到名字显示
        /// </summary>
        public int UserID;
        public List<int> card;
    }

    #endregion

    /// <summary>
    /// 刷新玩家余额
    /// </summary>
    public class sc_refreshbalance_tex_n : sc_base
    {
        /// <summary>
        /// 玩家ID
        /// </summary>
        public int userid;
        /// <summary>
        /// 余额
        /// </summary>
        public long gold;


        /// <summary>
        /// 带入的 身上的余额
        /// 其他需要的情况下传的0
        /// </summary>
        public long lockgold;
    }

    #region 房主开局协议

    /// <summary>
    /// 
    /// </summary>
    public class cs_openplay_tex : cs_base
    {

        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        public int levelid;
    }

    public class sc_openplay_tex : sc_base
    {

    }
    public class sc_openplay_tex_n : sc_base
    {
        /// <summary>
        /// 开局状态
        /// true  开启   false  暂停
        /// </summary>
        public bool openplay;
    }
    #endregion

    #region 结算离桌


    /// <summary>
    /// 结算离桌 协议
    /// </summary>
    public class cs_advancesettle_tex : cs_base
    {
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        public int levelid;
    }

    /// <summary>
    /// 授权代理
    /// </summary>
    public class cs_autheragent_tex : cs_base
    {
        /// <summary>
        /// 被授权人id
        /// </summary>
        public int userId;

        /// <summary>
        /// 系统给的最大分配比例
        /// </summary>
        public int showrate;

        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
    }

    public class sc_autheragent_tex : sc_base
    {

    }



    public class sc_advancesettle_tex : sc_base
    {
        //-1 未参与游戏 不能结算 -2allin状态不能结算   -3保险状态不能结算
        /// <summary>
        /// 是否结算离桌
        /// </summary>
        public bool IsSettle;
    }

    #endregion 

    public class cs_goldback_tex : cs_base
    {
        /// <summary>
        /// 桌子id
        /// </summary>
        public int tableid;

        public int levelid;

        /// <summary>
        /// 回撤i金币
        /// </summary>
        public long gold;

    }

    public class cs_gamereport_gm : cs_base_gm
    {
        /// <summary>
        /// 举报需要的金币
        /// </summary>
        public long gold;

        public int uid;
    }
    public class sc_gamereport_gm : sc_base_gm
    {
        //-1余额不足
        /// <summary>
        /// 扣费成功后的举报次数
        /// </summary>
        public int renum;
    }


    public class sc_goldback_tex : sc_base
    {
        // -1 房间不存在   -2可回撤的金额不足  -3仅限AOF模式使用

    }

    public class sc_goldback_tex_n : sc_base
    {
        //-1表示余额不足


        /// <summary>
        /// 
        /// </summary>
        public int UserId;

        /// <summary>
        /// 回撤后的余额
        /// </summary>
        public long gold;


        /// <summary>
        /// 回撤后身上的余额
        /// </summary>
        public long ugold;

    }


}
