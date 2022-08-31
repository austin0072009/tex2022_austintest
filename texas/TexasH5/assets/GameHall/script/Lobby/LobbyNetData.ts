import { CommonPosValListSD, CommonPosValSD, cs_base, OtherUserInfoSD, PlayerInfoSD, sc_base } from "../../../Script/BaseFrame/cs_base";

export class cs_gettablelist_tex extends cs_base {
    public clubidx: number;
}
export class sc_gettablelist_tex extends sc_base {
    /**游戏局数列表  */
    public tc: number[];
    /** 每局消耗金币*/
    public g: number;
    /**允许最大创建房间数 */
    public maxcount: number;
    /**已创建房间数 */
    public curcount: number;
    /**桌子列表 */
    public tinfo: TableRoomInfoTex[]; //TableRoomInfoTex
    /** 俱乐部id*/
    public idx: number;
}
/**房卡房间信息 */
export class TableRoomInfoTex {
    /**游戏ID */
    public gid: number;
    /** 场次ID*/
    public lvid: number;
    /**桌子ID */
    public tid: number;
    /**创建时间 */
    public ctime: string;
    /**总局数 */
    public maxC: number;
    /**已玩局数 */
    public cC: number;
    /**房主ID */
    public oid: number;
    /** 桌子状态0已创建 1已开局 2已完结 3已解散*/
    public state: number;
    /** 底注*/
    public brate: number;
    /**开局后剩余时间 秒 */
    public ltime: number;
    /** 玩家数量*/
    public pcount: number;
    /**1表示 自己参加过这局游戏 */
    public hist: number;
    /**游戏时长30 60 90 */
    public dur: number;
    /**最低带入GOLD */
    public lg: number;
    /** 是否密码房*/
    public ispas: number;
    /**最小开局玩家数量 */
    public minPC: number;
    /**带入倍数0.5~4 */
    public intorate_min: number;
    public intorate_max: number;
    /**前注 底注的 2的N次方   1 2 4 8 16 20 40 */
    public preG: number;
    public gps: number;
    public ip: number;
    /**1.正常模式，2.保险模式， 3.延时看牌 */
    public t: number;

    /**俱乐部名称 */
    public clubName: [];  //List<cinfo>
    /**房间名称 */
    public tname: string;
    /**是否限制入池率 */
    public Inflow: number;
    /**房间人数 */
    public manNum: number;
    /**是否超级联盟房间 */
    public IsSupper: boolean;
    public ios: boolean;
    /**房主同意开局  默认都为true */
    public openplay: boolean;
    /// <summary>
    /// AOF模式
    /// 最小保留记分倍数
    /// 最小带入的1至10倍
    /// </summary>
    public AOF_Times: number;
    /// <summary>
    /// 是否结算离桌
    /// </summary>
    public IsSettle: boolean;
    /// <summary>
    /// 已存在gold
    /// </summary>
    public cgold: number;
}

/**获取用户金币 */
export class cs_searchgoldornickname extends cs_base {
    public userid: number;
}
export class sc_searchgoldornickname extends sc_base {
    public gold: number;
    public nickname: string;
}
/**游戏跑马灯 */
export class sc_getnotice_n extends sc_base {
    public noticelist: string[];
    public _t: number;
    public gameid: number;
}
/**大厅跑马灯 */
export class sc_notice_n extends sc_base {
    public notice: notice;
    public _t: number;
    public gameid: number;
}

export interface notice {
    Height: number
    PicUrl: string
    Width: number
    content: string
    endtime: string
    interval: number
    marqueeType: number
    starttime: string
    title: string
}

export class cs_personalinfo extends cs_base {
    public UserId: number;
    /** 头像 带后缀*/
    public HeadIcon: string;
    /**昵称 */
    public nikename: string;
    /**1男   0女 */
    public sex: number;
    /**簽名 */
    public Desc: string;
    /**头像框 */
    public HeadFrame: string;
}

export class sc_personalinfo extends sc_base {

}

//获取玩家信息
export class cs_freshplayerInfoSD extends cs_base {

}

export class sc_freshplayerInfoSD extends sc_base {
    /// <summary>
    /// 代理ID
    /// </summary>
    public AgentId: number;
    /// <summary>
    /// 代理名称
    /// </summary>
    public AgentName: string;
    /// <summary>
    /// 用户信息
    /// </summary>
    public user: PlayerInfoSD;

    /// <summary>
    /// 所有游戏奖池
    /// </summary>
    public alljackpot: number;
}

/**設置支付密碼 */
export class cs_changePassword_appbk extends cs_base {
    /**旧密码 */
    public oldPassWord: string;
    /** 新密码*/
    public newPassWord: string;
}
export class sc_changePassword_appbk extends sc_base {

}
/**进入银行 */
export class cs_enterbank_bk extends cs_base {
    public pwd: string;
}
/**进入银行返回 */
export class sc_enterbank_bk extends sc_base {
    /**用户金币 */
    public gold: number;
    /** 银行金币*/
    public bankGold: number;
    /** 银行操作记录*/
    public log: banklog[];
}
/**银行操作记录 */
export class banklog {
    /** 操作时间*/
    public OpDate: string;
    /** 操作类型 1转入银行 2backgold*/
    public OpType: number;
    /**操作金额 */
    public OpCount: number;
}

/**转账 */
export class cs_sendgoldtrade extends cs_base {
    /**目标用户 */
    public objuserid: number;
    /**金额 */
    public Gold: number;
    /** true为索要，false为增送*/
    public IsGet: boolean;
}

export class sc_sendgoldtrade extends sc_base {
    /**目标用户 */
    public objuserid: number;
    /**目标用户昵称 */
    public objusername: string;
    /**微信头像ICON */
    public objuserwicon: string;
}

/**转账确认 */
export class cs_dealgoldtrade extends cs_base {
    /**目标用户 */
    public objuserid: number;
    /**交易金币 */
    public Gold: number;
    /**银行密码 */
    public bankPassWord: string;
}

/**
 * /// 确认接收赠送金币返回 
result 1:可以扣款，
2 余额不足不能扣款,
-1 用户账号不存在，
-2给自己赠送金，
-3账号异常（作弊号不能backgold）,
-4用户拒绝接收金币,-5用户不在线
 */
export class sc_dealgoldtrade extends sc_base {
    public Msg: string;
}

/**获取背包道具列表 */
export class cs_getbackpacklist extends cs_base {

}
export class sc_getbackpacklist extends sc_base {
    public props: PropInfo[];
}
export class PropInfo {
    public PropID: number;
    public PropName: string;
    /**0:金币  1:头像  */
    public PropType: number;
    public Desc: string;
    public PropCount: number;
    public ImgUrl: string;
    /**0:兑换  1:使用  */
    public UseType: number
}
/**使用兑换道具 */
export class cs_useprop extends cs_base {
    public PropID: number;
    public PropCount: number;
}
export class sc_useprop extends sc_base {
    public PropID: number;
    public PropCount: number;
    /**兑换的金币 */
    public PropGold: number;
    /**用户金币 */
    public UserGold: number;
}

/**任务 列表*/
export class cs_tasklist extends cs_base {
    public userId: number;
}
export class sc_tasklist extends sc_base {
    public tasklist: tasklist[];
}
export class tasklist {
    /**当前任务完成进度  */
    public current: number;
    /**是否领奖 */
    public isaward: boolean;
    /**任务是否完成 */
    public iscomplate: boolean;
    /**任务名称  */
    public name: string;
    /**任务描述 */
    public remark: string;
    /**任务编号 */
    public taskid: number;
    /**完成任务需要的进度  */
    public total: number;
    /**奖励 */
    public prizes: { num: number, name: string, pic: string }[];
    /**类别(1.新手任务，2.超值任务) */
    public type: number;

    public pic: string;

}

/**领取任务奖励 */
export class cs_award extends cs_base {
    public userid: number;
    public taskid: number;
}
export class sc_award extends sc_base {
    /**奖励 */
    public prizes: { num: number, name: string, pic: string }[];
}
/**获取绑定的银行卡和支付宝 */
export class cs_mobilephonenum extends cs_base {

}
export class sc_mobilephonenum extends sc_base {
    public UserCard: string;//充值账户
    public uName: string;//真正姓名
    public bId: string;//银行账号//bank
    public bPhone: string;//银行手机号
    /**银行名字 */
    public bank: string;
    public aId: string;//支付宝账号//alipay
    public aPhone: string;//支付宝手机号
    /**是否设置过交易密码  1是      0否 */
    public pwd: number;
    public bName: string; //持卡人姓名
}
/**绑定银行卡支付宝 */
export class cs_bindalipaybank extends cs_base {
    /**1绑定支付宝   2绑定银行卡 */
    public t: number;
    /** 玩家id*/
    public uid: number;
    /**支付宝姓名  或  银行卡持有人 */
    public name: string;
    /**支付宝账号 银行卡卡号 */
    public account: string;
    /** 银行名字*/
    public bank: string;
    /**国家 */
    public country: string;
    /**开户支行 */
    public branch: string;
    /**交易密码 */
    public pwd: string;
    /**开户行所在省份 */
    public province: String;
}
export class sc_bindalipaybank extends sc_base {

}

/// <summary>
/// 初始化密码
/// </summary>
export class cs_changePassword_bk extends cs_base {
    /// <summary>
    /// 新密码
    /// </summary>
    public newPassWord: string;
}

/// <summary>
/// 初始化密码     -1已经有初始密码
/// </summary>
export class sc_changePassword_bk extends sc_base {
}

/**获取VIP配置信息*/
export class cs_getvipconfig extends cs_base {

}
export class sc_getvipconfig extends sc_base {
    public config: vipConfig;
}
export class vipConfig {
    /**折扣 */
    public Discount: number[];
    /**免費提款次數 */
    public FreeWithdrawTimes: number[];
    /**升级所需積分 */
    public UpExps: number[];
    /**單筆提現金額 */
    public WithdrawLimit: number[];
    /**晉級禮金 */
    public UpReward: number[];
    /**每月禮金 */
    public MonthReward: number[];
}

/**获取玩家VIP信息 */
export class cs_getuservipinfo extends cs_base {

}
export class sc_getuservipinfo extends sc_base {
    /**当前积分 */
    public currScore: number;
    /**当前经验 */
    public currExp: number;
    /**晋级礼金状态 0:未领取  1:已领取  2:不可领取 */
    public UpAwardStatus: number;
    /**每月奖励状态 0:未领取  1:已领取  2:不可领取 */
    public MonthAwardStatus: number;
}
/**领取晋级奖励 */
export class cs_receiveupaward extends cs_base {

}
export class sc_receiveupaward extends sc_base {
    /**自身金币 */
    public MyScore: number;
    /**奖励礼金 */
    public AwardScore: number;
}
/**领取每月奖励 */
export class cs_receivemonthaward extends cs_base {

}
export class sc_receivemonthaward extends sc_base {
    /**自身金币 */
    public MyScore: number;
    /**奖励礼金 */
    public AwardScore: number;
}


/**获取赛事列表 */
export class cs_compete_list extends cs_base {

}
export class sc_compete_list extends sc_base {
    public competes: CompeteInfo[];
}
/**比赛信息 */
export class CompeteInfo {
    /**比赛类型 */
    public type: number;
    /**比赛编号 */
    public competeid: number;
    /**开赛时间 */
    public StartTime: string;
    /**報名开始时间 */
    public SignupTime: string;
    /**能否报名 */
    public cansignup: boolean;
    /**是否参加了比赛 */
    public IsSignup: boolean;
    /**比赛是否开始 */
    public CompeteStart: boolean;
    /**报名费 */
    public free: { name: string, num: number, pic: string }[];
    /**奖励 */
    public prizes: CompetePrize[];
    /**奖池  */
    public prizepool: number;
    /** 最大牌桌人数*/
    public tablemaxcount: number;
    /**升级时间(涨盲时间): 秒 */
    public leveluptime: number;
    /**复活次数 */
    public rebirth: number;
    /**盲注等级信息  */
    public levelinfos: TexasLeveInfo[];  //List<TexasLeveInfo> 
    /**报名人数 */
    public signupcount: number;
    /**最低参赛人数 */
    public mincount: number;
    /**最大参赛人数 */
    public maxcount: number;
    /**赛事名字 */
    public name: string;
    /**报名延迟时间 秒 */
    public signupdelay: number;
    /**初始金币 */
    public initscore: number;

}
/**奖励 */
export class CompetePrize {
    /** 起始排名*/
    public starank: number;
    /**结束排名 */
    public endrank: number;
    /**奖品 */
    public prizes: CompetePrizeInfo[];
}
export class CompetePrizeInfo {
    /**奖品数量,是否是值类型(true.值类型，flase.比例类型) */
    public isvalue: boolean;
    /**奖品类型(道具编号) */
    public type: number;
    /**奖品数量 */
    public num: number;
    /**名字 */
    public name: string;
}

/**盲注等级信息 */
export class TexasLeveInfo {
    /**等级 */
    public level: number;
    /** 底注(小盲) */
    public basegamble: number;
    /**前注 */
    public pregamble: number;
    /**大盲 */
    public Maxblind: number;
}

export class RankInfo {
    public playerid: number;
    public name: string;
    public pic: string;
    public score: number;
    public rank: number;
}
/** 排名信息*/
export class sc_compete_rank_info extends sc_base {
    public competeid: number;
    public infos: RankInfo[];
}

/**获取赛事玩家排名 */
export class cs_compete_rank_info extends cs_base {
    public userid: number;
    public competeid: number;
}



/**退赛  */
export class cs_quit extends cs_base {
    public userid: number;
    public competeid: number;
}
export class sc_quit extends sc_base {
    public message: string;
}
/**报名比赛 */
export class cs_signup extends cs_base {
    public userid: number;
    public competeid: number;
}
export class sc_signup extends sc_base {
    public message: string;
}
/**公告 */
export class cs_getnotice extends cs_base {
    public _t: number;
}
export class sc_getnotice extends sc_base {
    public noticelist: notice[];
    /**图片地址 */
    public PicUrl: string;
}


/// <summary>
/// 确认接收赠送金币推送返回 //result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
/// </summary>
export class sc_dealgoldtrade_n extends sc_base {
    public objuserid: number;      //对方用户
    public objusername: string;  //对方用户昵称
    /// <summary>
    /// 交易金币
    /// </summary>
    public Gold: number;
}



/// <summary>
/// 获取代理基本信息，我的邀请码 下载地址 我的总佣金 历史佣金
/// </summary>
export class cs_getagentinfo extends cs_base {
    public idx: number;
}
export class sc_getagentinfo extends sc_base {
    /// <summary>
    /// 父级代理ID
    /// </summary> 
    public FUserID: number;
    public UserId: number;

    /// <summary>
    /// 代理获得已领取的历史JB
    /// </summary> 
    public GoldHistoryC: number;
    /// <summary>
    /// 代理获得的未领取的JB 含奖池来源
    /// </summary> 
    public GoldC: number;
    /// <summary>
    /// 二维码路径
    /// </summary> 
    public QRPath: string;

    /// <summary>
    ///   自己的邀请码
    /// </summary>
    public Code: string;

    /// <summary>
    /// 最近一次的结算时间 
    /// </summary> 
    public lastdealtime: string;

    /// <summary>
    /// 下级给我的所有流水   本周业绩
    /// </summary>
    public childwater: number;

    /// <summary>
    /// 下级给我的所有流水   本周佣金
    /// </summary>
    public weekCommision: number;

    /// <summary>
    /// 代理总人数
    /// </summary>
    public agentcount: number;
    /// <summary>
    /// 当日代理人数
    /// </summary>
    public currAgentCount: number;
    /// <summary>
    /// 一级代理人数
    /// </summary>
    public agent1count: number;
    /// <summary>
    /// 上级给我分配的0~100 0不显示
    /// </summary>
    public rate: number;
    /// <summary>
    /// 大于1就是代理
    /// </summary>
    public isagent: number;
    public calist: ChildrenAgentListSD[];

    /// <summary>
    /// 今日佣金   123级的返利
    /// </summary>
    public tCommision: number;
    /// <summary>
    /// 今日活跃
    /// </summary>
    public tactive: number;

    /// <summary>
    /// 今日新增
    /// </summary>
    public taddnum: number;

    /// <summary>
    /// 累计佣金
    /// </summary>
    public income: number;
    public lv: number;
    public clubuserid: number;

    /// <summary>
    /// 社区奖励说明
    /// </summary>
    public reward: string;

    /// <summary>
    /// 社区名
    /// </summary>
    public clubname: string;

    /// <summary>
    /// 联盟名
    /// </summary>
    public allidname: string;
}



export class ChildrenAgentListSD {
    /// <summary>
    /// 我的玩家 二级 三级
    /// </summary>
    public lv: number;
    public UserID: number;
    public name: string;
    public icon: string;
    /// <summary>
    /// 总手数
    /// </summary>
    public pcount: number;
    /// <summary>
    /// 今日贡献
    /// </summary>
    public tincome: number;
    /// <summary>
    /// 累计贡献
    /// </summary>
    public income: number;
    /// <summary>
    /// 注册时间
    /// </summary>
    public regtime: string;
    /// <summary>
    /// 是否是代理了
    /// </summary>
    public isagent: number;
    public gold: number;
    /// <summary>
    /// 给下一级的比例 0~100
    /// </summary>
    public rate: number;
}

/// <summary>
/// 申请加入指定俱乐部
/// </summary>
export class cs_apply_club extends cs_base {
    public idx: number;
    public message: string;
    /// <summary>
    /// 1社区流程   0表示俱乐部流程
    /// </summary>
    public type: number;
}

export class sc_apply_club extends sc_base {

}

/// <summary>
/// 代理授权
/// </summary>
export class cs_setagent_gm extends cs_base {
    public userId: number;

    /// <summary>
    /// 系统给的最大分配比例
    /// </summary>
    public showrate: number;

    /// <summary>
    /// 俱乐部id
    /// </summary>
    public clubid: number;
}
/// <summary>
/// 代理授权
/// </summary>
export class sc_setagent_gm extends sc_base {
}

/// <summary>
/// 领取佣金
/// </summary>
export class cs_getcommision extends cs_base {
    public gold: number;
    public clubid: number;
}
export class sc_getcommision extends sc_base {
    public gold: number;
}

export class cs_extendredinfo extends cs_base {
    /// <summary>
    /// 社区id
    /// </summary>
    public idx: number;
}
/// <summary>
/// -1社区存在
/// </summary>
export class sc_extendredinfo extends sc_base {
    /// <summary>
    /// 反利累计目标值
    /// </summary>
    public agentTarget: number;
    /// <summary>
    /// 金额
    /// </summary>
    public gold: number;
    /// <summary>
    /// 总领取金额
    /// </summary>
    public receivegold: number;
    /// <summary>
    /// 未领取金额
    /// </summary>
    public NoReceiveGold: number;
    /// <summary>
    /// 活动描述
    /// </summary>
    public des: string;
    /// <summary>
    /// 下级和自己的数据
    /// </summary>
    public calist: ExtendUser[];
}
/// <summary>
/// 推广玩家
/// </summary>
export class ExtendUser {
    /// <summary>
    /// 等级
    /// </summary>
    public lv: number;
    public UserID: number;
    public name: string;
    /// <summary>
    /// 累计反利
    /// </summary>
    public income: number;
    public IsReceive: number;
}

/// <summary>
/// 领取推广金
/// </summary>
export class cs_receiveextendgold extends cs_base {
    /// <summary>
    /// 社区id
    /// </summary>
    public idx: number;
    /// <summary>
    /// 玩家id  可能是自己的id
    /// </summary>
    public userid: number;
}
/// <summary>
/// -1社区不存在   -2推广金余额不足
/// </summary>
export class sc_receiveextendgold extends sc_base {

}



// 创建德州房间
/// <summary>
/// 创建房间
/// </summary>
export class cs_createtable_tex extends cs_base {
    /// <summary>
    /// 游戏ID
    /// </summary>
    public gameid: number;
    /// <summary>
    /// 玩家人数
    /// </summary>
    public numpertable: number;

    /// <summary>
    /// 总局数 暂定200 相当于不用
    /// </summary> 
    public maxCount: number;
    /// <summary>
    /// 执行时间分钟数 30 60 90 120 
    /// </summary>  
    public Duration: number;
    /// <summary>
    /// 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500 
    /// </summary> 
    public into: number;
    /// <summary>
    /// 带入倍数0.5~4
    /// </summary>
    public intorate_min: number;
    public intorate_max: number;

    /// <summary>
    /// 底注 1.2.5.10.20.40 小盲等于底注 大盲是小盲两倍 straddle是大盲的两倍速
    /// </summary> 
    public baserate: number;
    /// <summary>
    /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
    /// </summary> 
    public pregamble: number;

    public gps: number;
    public ip: number;
    /// <summary>
    ///  1.正常模式，2.保险模式， 3.延时看牌
    /// </summary>
    public gametype: number;

    public roomid: number;
    /// <summary>
    /// 好友房的密码 固定设置成4位数
    /// </summary>
    public password: string;

    /// <summary>
    /// 开户视频 vides12345 0表示不开启
    /// </summary>
    public openv: number;

    /// <summary>
    /// 延时看牌
    /// </summary>
    public delay: number;
    /// <summary>
    /// 强制秀牌
    /// </summary>
    public showCard: number;
    /// <summary>
    /// 从哪个俱乐创建的 可以为0表示 纯金币房间 只有输入房间号进去
    /// </summary>
    public clubidx: number;

    /// <summary>
    /// 房间名称
    /// </summary>
    public tname: string;

    /// <summary>
    /// 限制入池率
    /// </summary>
    public Inflow: number;

    /// <summary>
    /// 人数  几人房显示
    /// </summary>
    public manNum: number;

    /// <summary>
    /// 是否控制带入  默认false
    /// </summary>
    public cinto: boolean;

    /// <summary>
    /// 联盟id
    /// </summary>
    public allianceid: number;

    /// <summary>
    /// 是否限制ios
    /// </summary>
    public ios: boolean;

    /// <summary>
    /// 房主同意开局 
    /// 默认都为true
    /// </summary>
    public openplay: boolean;
    /// <summary>
    /// 1开启
    /// </summary>
    public ins: number;
    /// <summary>
    /// AOF模式
    /// 最小保留记分倍数
    /// 最小带入的1至10倍
    /// </summary>
    public AOF_Times: number;
}

/// <summary>
/// 创建房间
/// </summary>
export class sc_createtable_tex extends sc_base {
    /// <summary>
    /// 玩家人数
    /// </summary>
    public playerCount: number;

    /// <summary>
    /// levelid
    /// </summary>
    public levelid: number;

    /// <summary>
    /// 桌子号
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 房间号
    /// </summary>
    public tnumber: string;
    /// <summary>
    /// 剩余金币
    /// </summary>
    public gold: number;

    /// <summary>
    /// 自己创建房间的列表数
    /// </summary>
    public tcount: number;
}

/// <summary>
/// 社区基金转入转出
/// </summary>
export class cs_fundchange_club extends cs_base {
    /// <summary>
    /// 1转入   2转出
    /// </summary>
    public type: number;

    /// <summary>
    /// 社区id
    /// </summary>
    public clubid: number;

    /// <summary>
    /// 转入转出的金额
    /// </summary>
    public gold: number;

}

export class sc_fundchange_club extends sc_base {
    //-1基金不足  -2余额不足   -3社区不存在
}

/// <summary>
/// 获取邮件列表
/// </summary>
export class cs_getemaillist extends cs_base {
    /// <summary>
    /// 0个人邮件,1系统邮件 ,2 活动
    /// </summary>
    public emailType: number;
}

export class sc_getemaillist extends sc_base {
    public emaillist: EmailinfoSD[];
}
export class EmailinfoSD {
    public tradeno: string;
    public title: string;
    public content: string;
    public _time: string;
    public _type: MailTypeEnum;
    /// <summary>
    /// 交易内容状态，0失败，1成功
    /// </summary>
    public _cstate: number;
    /// <summary>
    /// 是否已查看
    /// </summary>
    public islook: boolean;

    /// <summary>
    /// 发件人ID
    /// </summary>
    public fromUserid: number;

    /// <summary>
    /// 发件人名称
    /// </summary>
    public fromUserName: string;

    /// <summary>
    /// 收件人  可能是0
    /// </summary>
    public ToUserId: number;
}

export class sc_pushevent_n extends sc_base {
    public Type: number;
}

export enum MailTypeEnum {
    /// <summary>
    /// 交易
    /// </summary>
    Trading = 1,
    /// <summary>
    /// 系统
    /// </summary>
    System = 2,
    /// <summary>
    /// 个人
    /// </summary>
    personal = 3,
    /// <summary>
    /// 活动
    /// </summary>
    Activity = 4
}

/// <summary>
/// 设置个人邮件状态为已读
/// </summary>
export class cs_setemailstate extends cs_base {
    public tradeNo: string;
}

export class sc_setemailstate extends sc_base {

}

/// <summary>
/// 删除邮件
/// </summary>
export class cs_removeEmail extends cs_base {
    public tradeNo: string;
    /// <summary>
    /// 收件人  可能是0
    /// </summary>
    public ToUserId: number;
}
/// <summary>
/// -1 邮件不存在  -2系统邮件不可删除。默认保留7天
/// </summary>
export class sc_removeEmail extends sc_base {

}


/**德州 */
export class cs_entertablenum_tex extends cs_base {
    public tnumber: string;
}

/// <summary>
///  
/// </summary>
export class sc_entertablenum_tex extends sc_base {
    /// <summary>
    /// 游戏ID
    /// </summary>
    public gameid: number;
    /// <summary>
    /// 房间名称
    /// </summary>
    public tname: string;
    /// <summary>
    /// 桌子ID
    /// </summary>
    public tableid: number;

    /// <summary>
    /// 场次ID
    /// </summary>
    public levelid: number;

    /// <summary>
    /// 底分
    /// </summary>
    public brate: number;

    /// <summary>
    /// 房间号
    /// </summary>
    public tnum: string;

    /// <summary>
    /// 密码房 且是房主才会有值显示出来
    /// </summary>
    public pas: string;

    /// <summary>
    /// 此桌面的玩有数据 所有带POS值 是从1开始， 
    /// </summary>
    public palyerlist: OtherUserInfoSD[];

    /// <summary>
    /// 剩余时间 秒
    /// </summary>
    public lefts: number;
    /// <summary>
    /// 游戏内左上角的奖池
    /// </summary>
    public jackpot: number;
    /// <summary>
    /// 上一轮的奖池
    /// </summary>
    public lpot: number;
    /// <summary>
    /// 下注的奖池
    /// </summary>
    public gpot: number;
    /// <summary>
    /// 桌子状态
    /// </summary>
    public _recover: TableRecoverTexasSD;
    /// <summary>
    /// 开局需要的最低金币
    /// </summary>
    public limitgold: number;
    /// <summary>
    /// 已锁定的金币
    /// </summary>
    public lockgold: number;
    /// <summary>
    /// 带入倍数0.5~4
    /// </summary>
    public intorate_min: number;
    public intorate_max: number;
    /// <summary>
    /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
    /// </summary> 
    public pregamble: number;

    public gps: number;
    public ip: number;
    /// <summary>
    /// 是否限制ios
    /// </summary>
    public ios: boolean;
    /// <summary>
    /// 房主同意开局 
    /// 默认都为true
    /// </summary>
    public openplay: boolean;
    /// <summary>
    /// 房主是否点了开局
    /// 
    /// </summary>
    public oplay: boolean;
    /// <summary>
    /// 限制入池率
    /// </summary>
    public Inflow: number;
    /// <summary>
    ///  1.正常模式，2.保险模式， 3.延时看牌
    /// </summary>
    public gametype: number;
    /// <summary>
    /// 已申请的延时次数
    /// </summary>
    public delays: number;
    /// <summary>
    /// 开户视频 vides12345 0表示不开启
    /// </summary>
    public openv: number;
    /// <summary>
    /// 延时看牌
    /// </summary>
    public delay: number;
    /// <summary>
    /// 强制秀牌
    /// </summary>
    public showCard: number;
    /// <summary>
    /// 是否控制带入
    /// </summary>
    public cinto: boolean;
    /// <summary>
    /// 已存在club gold
    /// </summary>
    public cgold: number;
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;
    /// <summary>
    /// 俱乐部id
    /// </summary>
    public clubid: number;
    /// <summary>
    /// 房主id
    /// </summary>
    public ownnerid: number;
    /// <summary>
    /// 人数  几人房显示
    /// </summary>
    public manNum: number;
    /// <summary>
    /// 最小开局玩家数量
    /// </summary>
    public minPC: number;
    /// <summary>
    /// 同超级联盟的俱乐部
    /// </summary>
    public clubslist: SuperClub[];
    /// <summary>
    /// 超级联盟  玩家带入俱乐部的id    初始为0
    /// </summary>
    public intoCid: number;
    /// <summary>
    /// 强制看牌次数
    /// </summary>
    public fshownum: number;
    /// <summary>
    /// 是否结算离桌
    /// </summary>
    public IsSettle: boolean;
    /// <summary>
    /// 当前一共多少局
    /// </summary>
    public _curTableOverCount: number;
    /// <summary>
    /// 1开启
    /// </summary>
    public ins: number;

    ///赛事相关
    /// <summary>
    /// AOF模式
    /// 最小保留记分倍数
    /// 最小带入的1至10倍
    /// </summary>
    public AOF_Times: number;
    /// <summary> 当前等级(比赛场专用) </summary>
    public level: number;
    /// <summary> 最小等级(比赛场专用) </summary>
    public min_level: number;
    /// <summary> 最大等级(比赛场专用) </summary>
    public max_level: number;
    /// <summary> 比赛编号 </summary>
    public competeid: number;
    /// <summary> 比赛名称 </summary>
    public name: string;
    /// <summary> 大盲 </summary>
    public bigblind: number;
}

export class SuperClub {
    /// <summary>
    /// 俱乐部名称
    /// </summary>
    public cname: string;

    /// <summary>
    /// 俱乐部id
    /// </summary>
    public cid: number;

    /// <summary>
    /// 自己在这个俱乐部的余额
    /// </summary>
    public clubgold: number;
}

export class TableRecoverTexasSD {
    /// <summary> 
    /// 桌子初始化   Initi = 1, 
    /// 有人进了，等所有人准备，系统可以进行分配  WaitforReady = 2, 
    /// 打牌中   Playing = 3, 
    /// 前置playing状态   PrePlaying =4,
    /// end= 5
    /// </summary>
    public _status: number;
    /// <summary>
    /// 是否弃牌
    /// </summary>
    public _pos2giveup: CommonPosValSD[];
    /// <summary>
    /// 玩家现在身上的金币
    /// </summary>
    public _pos2gold: CommonPosValSD[];
    /// <summary>
    /// 是否休
    /// </summary>
    public _pos2look: CommonPosValSD[];
    /// <summary>
    /// 是否敲
    /// </summary>
    public _pos2allin: CommonPosValSD[];
    /// <summary>
    /// 对应的下注值  可能为0
    /// </summary>
    public _pos2gamble: CommonPosValSD[];
    /// <summary>
    /// 所有人的公开显示，  3~5张
    /// </summary>
    public _opencard: number[];
    /// <summary>
    /// 自已的手牌 可能为空
    /// </summary>
    public shoupai: number[];
    /// <summary>
    /// 只有位置的人申请才能看到
    /// </summary>
    public _pos2apply: CommonPosValSD[];
    /// <summary>
    /// 表示轮到谁操作了:pos
    /// </summary>
    public ctoken: number;
    /// <summary>
    /// 当前轮到token的人 操作剩余时间秒
    /// </summary>
    public lt: number;
    /// <summary>
    /// 庄家位置
    /// </summary>
    public bankpos: number;
    /// <summary>
    /// 保险数据
    /// </summary>
    public insdata: sc_instoken_tex_n[];
}

/// <summary>
/// 移一次token  用户可能有两个操作，选保额，或不保  
/// </summary>
export class sc_instoken_tex_n extends sc_base {
    /// <summary>
    /// 当前处理的令牌数
    /// </summary>
    public _t: number;
    /// <summary>
    /// 奖池的金币
    /// </summary>
    public _jackpot: number;
    public pos: number;
    /// <summary>
    /// 多个人同时买保险显示 
    /// </summary>
    public ipos: CommonPosValSD[];
    /// <summary>
    /// 第几轮
    /// </summary>
    public _tc: number;
    /// <summary>
    /// 公牌
    /// </summary>
    public _Cards: number[];
    ///// <summary>
    ///// 可选保额列表
    ///// </summary>
    //public List<int> _ilist;
    /// <summary>
    /// 显示参与的人的手牌
    /// </summary>
    public _pos2Shoupai: CommonPosValListSD[];
    /// <summary>
    /// 每个人的胜率
    /// </summary>
    public _pos2win: CommonPosValSD[];
    ///// <summary>
    ///// 补牌
    ///// </summary>
    //public List<int> outs;
    /// <summary>
    /// 可选保额列表
    /// </summary>
    public _ilist32: number[];
    /// <summary>
    /// 补牌
    /// </summary>
    public outs32: number[];
    /// <summary>
    /// 赔率
    /// </summary>
    public rate: number;
    /// <summary>
    /// 已购保额
    /// </summary>
    public order: number;
    // <summary>
    /// 奖池列表 可能一个 可能两个 最多3个人保险 第三个奖池没意义
    /// </summary>
    public potlist: number[];
    ///// <summary>
    ///// mine in jackpot 
    ///// </summary>
    //public int mpot;
    /// <summary>
    /// mine in jackpot 
    /// </summary>
    public mpot32: number;
    public mpot31: number;
    /// <summary>
    /// 补牌
    /// </summary>
    public outs31: number[];
    public _ilist31: number[];
}

/**忍者 */
export class cs_slotentertable extends cs_base {
    public gameid: number;
    public levelid: number;
}


export class sc_slotentertable extends sc_base {
    public gameid: number;
    public levelid: number;
    public gamemodel: number;
    public gametype: number;
    public numpertable: number;
    public rankertype: number;
    public roomcard: number;
    public tableCount: number;
    public baserate: number;
    public _limit: number;
    public gold: number;
    public betScores: number[];
    public table: SlotTableData;
}
export class SlotTableData {
    public waitcount: number;
    public tableid: number;
    public totalLineCount: number;
    public result: number;
    public state: number;
    public Endtime: number;
    public _type2gameble: number;
    public money: number;
    public lJackPotScores: number[];
    public buyLineCount: number;
    public Context: string;
    public openmarry: number;
}

/**牛仔进入房间 */
export class cs_entertable_TexBoy extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
    public _limit: number;
}