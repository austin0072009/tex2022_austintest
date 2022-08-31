


//#region gettablist

import { cs_base, sc_base, OtherUserInfoSD, CommonPosValSD, CommonPosValListSD, PlayerInfoSD, WechatInfoSD, RoomInfoSD, UserRemark } from "../../../../Script/BaseFrame/cs_base";

/// <summary>
/// 获取自己创建的德州房间列表
/// </summary> 
export class cs_gettablelist_tex extends cs_base {
    public clubidx: number;
}

export class sc_gettablelist_tex extends sc_base {

    /// <summary>
    /// 游戏局数列表 
    /// </summary>
    public tc: number;

    /// <summary>
    /// 每局消耗金币
    /// </summary>
    public g: number;

    /// <summary>
    /// 桌子列表
    /// </summary>
    public tinfo: TableRoomInfoTex[];
    /// <summary>
    /// 允许最大创建房间数
    /// </summary>
    public maxcount: number;
    /// <summary>
    /// 已创建房间数
    /// </summary>
    public curcount: number;
    /// <summary>
    /// 俱乐部id
    /// </summary>
    public idx: number;
}

/// <summary>
/// 房卡德州房间信息
/// </summary>
export class TableRoomInfoTex {
    /// <summary>
    /// 游戏ID
    /// </summary>
    public gid: number;
    /// <summary>
    /// 人数  几人房显示
    /// </summary>
    public manNum: number;
    /// <summary>
    /// 场次ID
    /// </summary>
    public lvid: number;

    /// <summary>
    /// 桌子ID
    /// </summary>
    public tid: number;

    /// <summary>
    /// 创建时间
    /// </summary>
    public ctime: string;

    /// <summary>
    /// 总局数
    /// </summary>
    public maxC: number;

    /// <summary>
    /// 已玩局数
    /// </summary>
    public cC: number;

    /// <summary>
    /// 房主ID
    /// </summary>
    public oid: number;

    /// <summary>
    /// 桌子状态0已创建 1已开局 2已完结 3已解散
    /// </summary>
    public state: number;
    /// <summary>
    /// 底皮
    /// </summary>
    public brate: number;
    /// <summary>
    /// 开局后剩余时间 秒
    /// </summary>
    public ltime: number;
    /// <summary>
    /// 玩家数量 
    /// </summary>
    public pcount: number;
    /// <summary>
    ///  1表示 自己参加过这局游戏
    /// </summary>
    public hist: number;
    /// <summary>
    /// 游戏时长30 60 90
    /// </summary>
    public dur: number;

    /// <summary>
    /// 最低带入GOLD
    /// </summary>
    public lg: number;
    /// <summary>
    /// 是否密码房
    /// </summary>
    public ispas: number;

    /// <summary>
    /// 最小开局玩家数量
    /// </summary>
    public minPC: number;
    /// <summary>
    /// 带入倍数0.5~4
    /// </summary>
    public intorate_min: number;
    public intorate_max: number;
    /// <summary>
    /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
    /// </summary> 
    public preG: number;

    public gps: number;
    public ip: number;
    /// <summary>
    ///  1.正常模式，2.保险模式， 3.延时看牌
    /// </summary>
    public t: number;
    /// <summary>
    /// 俱乐部名称
    /// </summary>
    public clubName: cinfo[];
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;
    /// <summary>
    /// 房间名称
    /// </summary>
    public tname: string;
    /// <summary>
    /// AOF模式
    /// 最小保留记分倍数
    /// 最小带入的1至10倍
    /// </summary>
    public AOF_Times: number;
}
export class cinfo {
    /// <summary>
    /// 俱乐部名称
    /// </summary>
    public cn: string;

    /// <summary>
    /// 图标
    /// </summary>
    public url: string;
}
//#endregion

/// <summary>
/// 输入房号进入指定桌子，尝试房卡模式通用
/// </summary>
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
    /// <summary>
    /// 点击看公牌次数
    /// </summary>
    public clicknum: number;

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
    /// 大小盲注
    /// </summary>
    public _pos2bigsmall: CommonPosValSD[];
    /// <summary>
    /// 庄家位置
    /// </summary>
    public bankpos: number;
    /// <summary>
    /// 保险数据
    /// </summary>
    public insdata: sc_instoken_tex_n[];
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
/// <summary>
/// 创建房间
/// </summary>
export class cs_createtable_tex extends cs_base {
    /// <summary>
    /// 游戏ID
    /// </summary>
    public gameid: number;
    /// <summary>
    /// 玩家人数 自动开始人数
    /// </summary>
    public numpertable: number;
    /// <summary>
    /// 人数  几人房显示
    /// </summary>
    public manNum: number;
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
    /// 是否控制带入
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
    /// 限制入池率
    /// </summary>
    public Inflow: number;
    /// <summary>
    /// 房主同意开局 
    /// 默认都为true
    /// </summary>
    public openplay: boolean;
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

/// <summary>
/// 申请坐下
/// </summary>
export class cs_sitdown_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public gold: number;
    public pos: number;
    /// <summary>
    /// 好友需要 的密码
    /// </summary>
    public pas: string;
    /// <summary>
    /// 默认0 ，回桌用1
    /// </summary>
    public iskeep: number;
    public lat: number;
    public lng: number;
    public clubidx: number;
}
export class sc_sitdown_tex extends sc_base {
    /// <summary>
    /// 用户身上的金币需要同步一下
    /// </summary>
    public ugold: number;
}

/// <summary>
/// 通知所有人有人坐下了
/// </summary>
export class sc_sitdown_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 目标位置有人进入
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 房间中的其他人
    /// </summary>
    public user: OtherUserInfoSD;
    /// <summary>
    /// 在坐位上的倒计时
    /// </summary>
    public id2keep: CommonPosValSD[];
}
/// <summary>
/// 申请坐下 不带入 显示等待 占位用 
/// </summary>
export class cs_sitdownwait_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public pos: number;
    /// <summary>
    /// 默认0 ，回桌用1
    /// </summary>
    public iskeep: number;
    public lat: number;
    public lng: number;
}
/// <summary>
/// 带入请求的时候玩家被同意后 刷新玩家余额
/// </summary>
export class sc_refreshbalance_tex_n extends sc_base {
    /// <summary>
    /// 玩家ID
    /// </summary>
    public userid: number;
    /// <summary>
    /// 余额
    /// </summary>
    public gold: number;
    /// <summary>
    /// 带入的 身上的余额
    /// 其他需要的情况下传的0
    /// </summary>
    public lockgold: number;
}
export class sc_sitdownwait_tex extends sc_base {

}

/// <summary>
/// 通知所有人有人坐下了 处理等待状态
/// </summary>
export class sc_sitdownwait_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 目标位置有人进入
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 房间中的其他人
    /// </summary>
    public user: OtherUserInfoSD;
    /// <summary>
    /// 在坐位上的倒计时
    /// </summary>
    public id2keep: CommonPosValSD[];
    /// <summary>
    /// apply time 180秒的倒计时，如果些用户还处理申请状态
    /// </summary>
    public atime: number;
}
/// <summary>
/// 申请坐下 不带入 退也等待 不占位 
/// </summary>
export class cs_sitdownwaitup_tex extends cs_base {
    public levelid: number;
    public tableid: number;
}
export class sc_sitdownwaitup_tex extends sc_base {

}
/// <summary>
/// 通知所有人有人不占座了
/// </summary>
export class sc_sitdownwaitup_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 目标位置有人进入
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 房间中的其他人
    /// </summary>
    public user: OtherUserInfoSD;
    /// <summary>
    /// 在坐位上的倒计时
    /// </summary>
    public id2keep: CommonPosValSD[];
}
/// <summary>
/// 申请留座 保留6分钟
/// </summary>
export class cs_situpkeep_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    /// true 表示留座  false表示站起围观
    /// </summary>
    public keep: boolean;
}
export class sc_situpkeep_tex extends sc_base {
    /// <summary>
    /// true 表示留座  false表示站起围观
    /// </summary>
    public keep: boolean;
    /// <summary>
    /// 已锁定的金币
    /// </summary>
    public lockgold: number;
}
export class sc_situpkeep_tex_n extends sc_base {
    public userid: number;

    /// <summary>
    /// 是否留座    的时间 0表示不需要留座 正常值1~300秒  -1表示站起围观
    /// </summary>
    public isK: number;
}
/// <summary>
/// 结算离桌 协议
/// </summary>
export class cs_advancesettle_tex extends cs_base {
    public tableid: number;
    public levelid: number;
}

export class sc_advancesettle_tex extends sc_base {
    /// <summary>
    /// 是否结算离桌
    /// </summary>
    public IsSettle: boolean;
    //-1 未参与游戏 不能结算 -2allin状态不能结算   -3保险状态不能结算
}
/// <summary>
/// 有人进入一桌，推送给这一桌内的所人的
/// </summary>
export class sc_entertable_tex_n extends sc_base {
    public palyerlist: OtherUserInfoSD[];

}
/// <summary>
/// 申请准备  
/// </summary>
export class cs_ready_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public pos: number;
}
export class sc_ready_tex extends sc_base {

}
/// <summary>
/// 通知所有人谁准备了
/// </summary>
export class sc_ready_tex_n extends sc_base {
    public pos: number;
}
/// <summary>
/// 进入房间后开始推送每人的牌  _n表示是服务器推送的
/// </summary>
export class sc_tablestart_tex_n extends sc_base {
    public tableid: number;
    public pos: number;
    /// <summary>
    /// 表示哪个的庄
    /// </summary>
    public _bankerPos: number;
    public _pos2UserID: CommonPosValSD[];
    public _pos2Gold: CommonPosValSD[];
    /// <summary>
    /// 初始下注
    /// </summary>
    public _pos2Gamble: CommonPosValSD[];
    /// <summary>
    /// 大小盲注
    /// </summary>
    public _pos2bigsmall: CommonPosValSD[];
    public _showCard: number[]; //需要明的牌， 
    /// <summary>
    /// 表示此次的局号 时间格式编码
    /// </summary>
    public MatchCode: string;
    /// <summary>
    /// 剩余时间 秒
    /// </summary>
    public lefts: number;
    /// <summary>
    /// 初始补strad
    /// </summary>
    public _pos2strad: CommonPosValSD[];
}

/// <summary>
/// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
/// </summary>
export class sc_token_tex_n extends sc_base {
    /// <summary>
    /// 当前处理的令牌数
    /// </summary>
    public _t: number;
    /// <summary>
    /// 奖池的金币
    /// </summary>
    public _jackpot: number;
    /// <summary>
    /// 主池边池默认第一个为主池
    /// </summary>
    public potlist: number[];
    public pos: number;
    /// <summary>
    /// 当前轮已有的最大下注值
    /// </summary>
    public _emaxg: number;
    /// <summary>
    /// 允许早小下注值  为0时表示可以选择看牌
    /// </summary>
    public _min: number;
    /// <summary>
    /// 允许最大加注值 
    /// </summary>
    public _max: number;
    /// <summary>
    /// 第几轮
    /// </summary>
    public _tc: number;
    /// <summary>
    /// 公牌
    /// </summary>
    public _Cards: number[];
}

/// <summary>
/// 下注
/// </summary>
export class cs_gamble_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public money: number;
    /// <summary>
    /// 加了倍没？
    /// </summary>
    public addrate: boolean;
}
export class sc_gamble_tex extends sc_base {

}
/// <summary>
/// 通知所有人下注成功
/// </summary>
export class sc_gamble_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 当前的下注
    /// </summary>
    public _gamble: number;
    public _allin: boolean;
    public addrate: boolean;

    /// <summary>
    /// 一个轮结束的标识
    /// </summary>
    public _turnOver: boolean;
    /// <summary>
    /// pos 的金币值
    /// </summary>
    public tgold: number;
    /// <summary>
    /// 最后的奖池
    /// </summary>
    public _jackpot: number;
}

/// <summary>
/// 弃牌
/// </summary>
export class cs_giveup_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public pos: number;
}
export class sc_giveup_tex extends sc_base {
    public _shoupai: number[];
}
/// <summary>
/// 通知所有人，弃牌状态  
/// </summary>
export class sc_giveup_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 一个轮结束的标识
    /// </summary>
    public _turnOver: boolean;
}

/// <summary>
/// 结算 通知所有人
/// </summary>
export class sc_end_tex_n extends sc_base {
    /// <summary>
    /// 用户身上的金币需要同步一下
    /// </summary>
    public ugold: number;
    /// <summary>
    /// 最后的奖池
    /// </summary>
    public _jackpot: number;
    /// <summary>
    /// 公牌
    /// </summary>
    public _Cards: number[];
    /// <summary>
    /// 
    /// </summary>
    public _pos2Gold: CommonPosValSD[];
    /// <summary>
    /// 这局所有的输赢 都是正数需要根据WinPOS处理
    /// </summary>
    public _pos2GoldWin: CommonPosValSD[];
    /// <summary>
    ///赢了的人分奖池过程
    /// </summary>
    public _pos2Score: TexasCompareSD[];
    /// <summary>
    /// 所有人的手牌，弃牌的人不显示 
    /// </summary>
    public _pos2ShouPai: CommonPosValListSD[];
    /// <summary>
    /// 所有人的最大牌，弃牌的人不显示 
    /// </summary>
    public _pos2MaxPai: CommonPosValListSD[];
    /// <summary>
    /// 玩家变成观众的列表，
    /// </summary>
    public _watchlist: CommonPosValSD[];
    /// <summary>
    /// 玩家留座 需要处理成离开位置显示保留300秒的倒计时，如果是自己还有一个回桌的按钮
    /// </summary>
    public _keeplist: CommonPosValSD[];

    /// <summary>
    /// 开局需要的最低金币
    /// </summary>
    public limitgold: number;
    /// <summary>
    /// 全部玩家秀的牌
    /// </summary>
    public Showcard: UserCards[];
}
/// <summary>
/// 秀牌的玩家
/// </summary> 
export class UserCards {
    /// <summary>
    /// 玩家id
    /// </summary>
    public uid: number;

    /// <summary>
    /// 牌
    /// </summary>
    public cards: Cards[];
}
/// <summary>
/// 玩家秀牌的数据
/// </summary> 
export class Cards {
    /// <summary>
    /// 牌idx
    /// </summary>
    public cpos: number;

    /// <summary>
    /// 牌
    /// </summary>
    public card: number;
}
/// <summary>
/// 比牌过程的值，从大到小分钱，因为最大牌型可能没有分完的
/// </summary>
export class TexasCompareSD {
    public pos: number;
    /// <summary>
    /// 当局的下注值，用于分割奖池
    /// </summary>
    public _gold: number;
    /// <summary>
    /// 当前的奖池
    /// </summary>
    public _jackpot: number;
    public Score: number;
    /// <summary>
    /// 1表示要显示bigwin 是自己的POS才显示 同时会游戏人发公告 恭喜XXX击中朵朵获得XXX奖池 奖池会通知更新
    /// </summary>
    public bigwin: number;
    /// <summary>
    /// 理赔额度
    /// </summary>
    public claim: number;
}
/// <summary>
/// 请求离开桌子，后面可以处理重新开始
/// </summary>
export class cs_applyexittable_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    /// 申请位置
    /// </summary>
    public pos: number;
}

/// <summary>
/// 解散桌子协议
/// </summary>
export class cs_dismisstable_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 
    /// </summary>
    public levelid: number;
}

export class sc_dismisstable_tex extends sc_base {

}
export class sc_applyexittable_tex extends sc_base { }

export class cs_bigend_tex extends cs_base {
    public levelid: number;
    public tableid: number;
}

export class sc_bigend_tex extends sc_base {
    public bigend: BigEndInfoSD_tex;
    /// <summary>
    /// 标识是否管理员或者创建者
    /// </summary>
    public isnamger: boolean;
}

export class sc_bigend_tex_n extends sc_base {
    public bigend: BigEndInfoSD_tex;
    /// <summary>
    /// 标识是否管理员或者创建者
    /// </summary>
    public isnamger: boolean;
}
export class BigEndInfoSD_tex {
    /// <summary>
    /// 1-3
    /// </summary>
    public br: string;
    /// <summary>
    /// 开始时间
    /// </summary>
    public btime: string;
    public etime: string;
    /// <summary>
    /// 持续时间 分钟显示转换成0.5h 1h
    /// </summary>
    public dur: number;
    /// <summary>
    /// 奖池 可能为负 有人击中朵朵可能为负
    /// </summary>
    public tax: number;
    /// <summary>
    /// 本局总手数
    /// </summary>
    public pc: number;
    /// <summary>
    /// 本局总带入
    /// </summary>
    public allintogold: number;
    /// <summary>
    /// 所有参与人员 已按赢的多少进行了排序  MVP【赢最多的】 大鱼【输最多的】 土豪【带入最多的】 在此查找
    /// </summary>
    public gainlist: TableGainSD[];
    /// <summary>
    /// 保险贡献
    /// </summary>
    public InsurTotal: number;
    /// <summary>
    /// 俱乐部输赢  超级联盟才有
    /// </summary>
    public clubWl: TableClubLoseWin[];

    /// <summary>
    /// 俱乐部保险输赢
    /// </summary>
    public clunbins: clubinfo[];
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;
}
/// <summary>
/// 俱乐部输赢结构
/// </summary>
export class TableClubLoseWin {
    /// <summary>
    /// 俱乐部名称
    /// </summary>
    public clubname: string;
    /// <summary>
    /// 俱乐部id
    /// </summary>
    public clubid: number;

    /// <summary>
    /// 俱乐部输赢（俱乐部币）
    /// </summary>
    public gold: number;
}

/// <summary>
/// 保险日志
/// </summary>
export class clubinfo {
    public clubname: string;

    public userinfos: Insurinfo[];
}

export class Insurinfo {
    /// <summary>
    /// 头像
    /// </summary>
    public headurl: string;

    /// <summary>
    /// 姓名
    /// </summary>
    public name: string;
    /// <summary>
    /// 保险输赢
    /// </summary>
    public gold: number;
}


//#region 游戏内战绩
export class cs_enterrobot_tex extends cs_base {
    public levelid: number;
    public tableid: number;
}
export class sc_enterrobot_tex extends sc_base {

}

/// <summary>
/// 游戏内战绩
/// </summary>
export class cs_thistory_tex extends cs_base {
    public levelid: number;
    public tableid: number;

}
export class sc_thistory_tex extends sc_base {
    /// <summary>
    /// 用户列表包括所有参与过了不含观众
    /// </summary>
    public ulist: PInfoSD[];
    /// <summary>
    /// 每局的历史详情
    /// </summary>
    public tulist: TexTInfoSD[];

    /// <summary>
    /// 房间号
    /// </summary>
    public tableId: number;
    /// <summary>
    /// 底注
    /// </summary>
    public bg: number;
    /// <summary>
    /// 强制秀牌
    /// </summary>
    public showCard: number;
    /// <summary>
    /// 已经收藏的局数
    /// </summary>
    public savaNum: number;
    /// <summary>
    /// 最大收藏数量
    /// </summary>
    public maxSnum: number;
}
export class TexTInfoSD {
    //手数
    public handcount: number;
    public maxpoker: number[];
    public winuser: number;
    public winGold: number;
    /// <summary>
    /// jackpot +- 可能增加减速如果发了大奖也会为-
    /// </summary>
    public j: number;
    /// <summary>
    /// 公牌 
    /// </summary>
    public c: number[];
    /// <summary>
    /// 单局参与游戏所有玩家信息 手牌 胜负 
    /// </summary>
    public tInfo: TexUserInfoSD[];
    /// <summary>
    /// 当局详情记录
    /// </summary>
    public tlist: TexActionSD[];
    /// <summary>
    /// 保险池
    /// </summary>
    public ipool: number;
    /// <summary>
    /// 没有弃牌玩家个数
    /// </summary>
    public ng: number;
    /// <summary>
    /// 单局唯一id  收藏使用
    /// </summary>
    public infoId: string;
    /// <summary>
    /// 是否收藏保存
    /// </summary>
    public IsSava: boolean;
    /// <summary>
    /// 庄位
    /// </summary>
    public bankerpos: number;
}
export class TexUserInfoSD {
    /// <summary>
    /// UserID list 从ulist获取
    /// </summary>
    public id: number;
    /// <summary>
    /// 是否强制show牌（0:表示没有；1：强制秀牌）
    /// </summary>
    public st: number;

    /// <summary>
    /// 前两张牌(初始底牌)
    /// </summary>
    public p: number[];
    /// <summary>
    ///  
    /// 第几轮弃的牌   小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
    /// </summary>
    public s: number;
    /// <summary>
    /// 自己的下注
    /// </summary>
    public g: number;
    /// <summary>
    /// giveup 1 表示弃牌
    /// </summary>
    public gu: number;
    /// <summary>
    /// 总赢的金币 减去税收
    /// </summary>
    public wg: number;
    /// <summary>
    /// 保额
    /// </summary> 
    public ins: number;
    /// <summary>
    /// 用户图标 标识
    /// </summary>
    public pos: number;
    /// <summary>
    /// 这一轮是否强制秀牌
    /// </summary>
    public fshow: boolean;
    /// <summary>
    /// 自己对应的公牌数据
    /// </summary>
    public ownc: number[];

    /// <summary>
    /// 单局目前总手数
    /// </summary>
    public hcount: number;

    /// <summary>
    /// 单局目前总带入
    /// </summary>
    public totalinto: number;
}
export class TexActionSD {
    /// <summary>
    /// 顺序
    /// </summary>
    public i: number;
    /// <summary>
    /// UserID list 从ulist获取
    /// </summary>
    public id: number;

    /// <summary>
    /// 用户图标 标识
    /// </summary>
    public pos: number;

    /// <summary>
    /// action type sb小盲 bb大盲 s：stradlle c call跟 f fold弃 A allin  X让牌  3B是大的2/3  B是1/2 
    /// R 
    /// </summary>
    public at: number;
    /// <summary>
    /// 下注值 
    /// </summary>
    public g: number;
    /// <summary>
    /// 当前轮次(perflop、flop、turn、showdown)
    /// 也就是TexasTurnEnum 对应标识
    /// </summary>
    public turn: number;
    /// <summary>
    /// 第一轮表示带入余额
    /// </summary>
    public jg: number;
}
/// <summary>
/// 收藏单局牌协议
/// </summary>
export class cs_texascollect_tex extends cs_base {
    /// <summary>
    /// 0 表示收藏   1表示删除   删除的时候只需要infoId参数了
    /// </summary>
    public type: number;
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 
    /// </summary>
    public levelid: number;
    /// <summary>
    /// 可能会给每一局的id
    /// </summary>
    public infoId: string;
}
export class sc_texascollect_tex extends sc_base {
    /// <summary>
    /// 已经收藏的局数
    /// </summary>
    public savaNum: number;

    /// <summary>
    /// 可能会给每一局的id
    /// </summary>
    public infoId: string;

    /// <summary>
    /// 是否保存收藏
    /// </summary>
    public IsSava: boolean;
}
/// <summary>
/// 游戏战绩详情
/// </summary>
export class cs_roomhistory_tex extends cs_base {
    public levelid: number;
    public tableid: number;

}
export class sc_roomhistory_tex extends sc_base {
    /// <summary>
    /// 用户列表包括所有参与过了不含观众
    /// </summary>
    public ulist: PInfoSD[];
    /// <summary>
    /// 每局的历史详情
    /// </summary>
    public tulist: TexTInfoSD[];
    /// <summary>
    /// 底注
    /// </summary>
    public bg: number;
    /// <summary>
    /// 强制秀牌
    /// </summary>
    public showCard: number;
}

/// <summary>
/// 简短用户信息
/// </summary>
export class PInfoSD {
    /// <summary>
    /// userid
    /// </summary>
    public uid: number;
    /// <summary>
    /// 头像
    /// </summary>
    public wicon: string;
    /// <summary>
    /// 名称
    /// </summary>
    public wName: string;
}

/// <summary>
/// 请求奖池详情  包括 奖池记录
/// </summary>
export class cs_getalljackpot_tex extends cs_base {

}

export class sc_getalljackpot_tex extends sc_base {
    /// <summary>
    /// 6个底皮对应的奖池 
    /// </summary>
    public _base2pot: CommonPosValSD[];
    /// <summary>
    /// 最大赢家
    /// </summary>
    // public _max: PotUserLog;
    /// <summary>
    /// 最近日志
    /// </summary>
    // public plog: PotUserLog[];
}

export class PotUserLog {
    /// <summary>
    /// 用户名
    /// </summary>
    public _n: string;
    /// <summary>
    /// 奖池类型
    /// </summary>
    public _jt: number;
    /// <summary>
    /// 金币
    /// </summary>
    public _gold: number;
    /// <summary>
    /// 时间
    /// </summary>
    public _time: string;
}
/// <summary>
/// 通知更新总奖池
/// </summary>
export class sc_alljackpot_tex_n extends sc_base {
    public alljackpot: number;
    /// <summary>
    /// 全部游戏奖池
    /// </summary>
    public gamealljack: number;
}
/// <summary>
/// 游戏内战绩
/// </summary>
export class cs_getgain_tex extends cs_base {
    public levelid: number;
    public tableid: number;

}
export class sc_getgain_tex extends sc_base {
    public jackpot: number;
    public glist: TableGainSD[];

    /// <summary>
    /// 剩余时间 秒
    /// </summary>
    public lefttime: number;
    /// <summary>
    /// 旁观信息
    /// </summary>
    public wlist: PlayerInfoSD[];
    /// <summary>
    /// 这桌保险池
    /// </summary>
    public Inspool: number;
    /// <summary>
    /// AOF 带出累计
    /// 为0和其他模式都不显示
    /// </summary>
    public goldout: number;
}

export class TableGainSD {

    /// <summary>
    /// 用户信息
    /// </summary> 
    public wechat: WechatInfoSD;
    /// <summary>
    ///  
    /// </summary> 
    public UserID: number;

    /// <summary>
    /// 初始带入
    /// </summary> 
    public finto: number;

    /// <summary>
    /// 战绩 收益 正负
    /// </summary> 
    public gain: number;
    /// <summary>
    /// 手数
    /// </summary>
    public pcount: number;
    /// <summary>
    /// 1表示离线状态
    /// </summary>
    public offline: number;

    /// <summary>
    /// 大于0表示输家返利，小于0表示逃跑惩罚，等于0不显示
    /// </summary>
    public otherMoney: number;
}
/// <summary>
/// 游戏内加金币  游戏结束前只能补充一次且在下局才会生效
/// </summary>
export class cs_addgoldingame_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    /// 补充的
    /// </summary>
    public gold: number;
    public clubidx: number;
}
export class sc_addgoldingame_tex extends sc_base {
    /// <summary>
    /// 补充的 用于再次点开时显示
    /// </summary>
    public gold: number;
}
/// <summary>
/// 申请秀自己的手牌
/// </summary>
export class cs_showmycard_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public card: number;
    /// <summary>
    /// 0取消    1展示
    /// </summary>
    public type: number;
}
export class sc_showmycard_tex extends sc_base {
    /// <summary>
    /// 0取消    1展示
    /// </summary>
    public type: number;
    /// <summary>
    /// 牌的位置
    /// </summary>
    public cpos: number;
}
export class sc_showmycard_tex_n extends sc_base {
    /// <summary>
    /// 根据用户ID找到名字显示
    /// </summary>
    public UserID: number;
    public cardPos: number;
    public card: number;
}
/// <summary>
/// 保险模式
/// </summary>
export class cs_insurance_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    public pos: number;
    /// <summary>
    /// 保额 0表示不保主池
    /// </summary>
    public ins: number;
    /// <summary>
    /// 手选的补牌 null表示全选
    /// </summary>
    public outs: number[];
    /// <summary>
    ///  保额 0表示不保分池
    /// </summary>
    public ins32: number;
}
export class sc_insurance_tex extends sc_base {

}
/// <summary>
/// 通知所有人，购买保险  
/// </summary>
export class sc_insurance_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 保额
    /// </summary>
    public ins: number;
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
//#endregion
//#region delay
/// <summary>
/// 分牌时申请延时
/// </summary>
export class cs_delay_tex extends cs_base {
    public levelid: number;
    public tableid: number;
}
export class sc_delay_tex extends sc_base {

}
/// <summary>
/// 通知所有人，有人申请了延时
/// </summary>
export class sc_delay_tex_n extends sc_base {
    public UserID: number;
    public time: number;
    /// <summary>
    /// 次数
    /// </summary>
    public delays: number;
}
/// <summary>
/// 踢人  从桌子上,正在游戏中不能踢
/// </summary>
export class cs_tickuser_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    ///要踢的人的userid
    /// </summary>
    public uid: number;
    /// <summary>
    /// 1表示强制站起，2表示强制退出桌子，这一桌的时间内都不能再次进入
    /// </summary>
    public type: number;
}
export class sc_tickuser_tex extends sc_base {

}
export class sc_tickuser_tex_n extends sc_base {
    /// <summary>
    /// 房主id
    /// </summary>
    public ownid: number;
    /// <summary>
    /// 被强制站起得玩家id
    /// </summary>
    public kickuid: number;
    /// <summary>
    /// 已经锁定的金币
    /// </summary>
    public lockgold: number;
}
export class cs_userremark_tex extends cs_base {
    /// <summary>
    /// 要备注的玩家id
    /// </summary>
    public uid: number;
    /// <summary>
    /// 要备注的玩家姓名
    /// </summary>
    public rname: string;
    /// <summary>
    /// 玩法备注
    /// </summary>
    public pRemark: string;
    /// <summary>
    ///桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 桌子等级
    /// </summary>
    public levelid: number;
}

export class sc_userremark_tex extends sc_base {

}
/// <summary>
/// 刷新桌子上单个玩家
/// </summary>
export class sc_refreshtableuser_n extends sc_base {
    public user: OtherUserInfoSD;
    public Ur: UserRemark;
}
/// <summary>
/// 查看公牌余牌
/// </summary>
export class cs_seerestcard_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 
    /// </summary>
    public levelid: number;
}
export class sc_seerestcard_tex extends sc_base {
    public card: number[];
}
/// <summary>
/// 强制秀牌
/// </summary>
export class cs_forceshowcard_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 
    /// </summary>
    public levelid: number;
}
export class sc_forceshowcard_tex extends sc_base {
    public othercard: CommonPosValListSD[];
    /// <summary>
    /// 强制看牌次数
    /// </summary>
    public fshownum: number;
}
//#endregion
//#region 房主开局协议
/// <summary>
/// 
/// </summary>
export class cs_openplay_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;

    public levelid: number;
}
export class sc_openplay_tex extends sc_base {

}
export class sc_openplay_tex_n extends sc_base {
    /// <summary>
    /// 开局状态
    /// true  开启   false  暂停
    /// </summary>
    public openplay: boolean;
}
//#endregion
//#region 玩家控制协议
/// <summary>
/// 申请带入金币  俱乐部币
/// </summary>
export class cs_applysitdown_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 
    /// </summary>
    public levelid: number;
    /// <summary>
    /// 带入金额  
    /// </summary>
    public gold: number;
    public clubidx: number;
    /// <summary>
    /// 0普通申请   1补充计分申请
    /// </summary>
    public atype: number;
}
export class sc_applysitdown_tex extends sc_base {
    //-1房间不存在   -2余额不足   -3有未处理请求
}
export class sc_applysitdown_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 目标位置有人进入
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 房间中的其他人
    /// </summary>
    public user: OtherUserInfoSD;
    /// <summary>
    /// 在坐位上的倒计时
    /// </summary>
    public id2keep: CommonPosValSD[];
    /// <summary>
    /// apply time 180秒的倒计时，如果些用户还处理申请状态
    /// </summary>
    public atime: number;
}
/// <summary>
/// 获得房主的申请列表
/// </summary>
export class cs_applyintogodlist_tex extends cs_base {

}
export class sc_applyintogodlist_tex extends sc_base {
    public data: applyintogodlist[];
}
export class applyintogodlist {
    /// <summary>
    /// 申请人id
    /// </summary>
    public UserId: number;
    /// <summary>
    /// 申请人
    /// </summary>
    public uname: string;
    /// <summary>
    /// 带入金额
    /// </summary>
    public gold: number;
    /// <summary>
    /// 入池率
    /// </summary>
    public intopool: number;
    /// <summary>
    /// 俱乐部名称
    /// </summary>
    public clubname: string;
    /// <summary>
    /// 牌桌名
    /// </summary>
    public tname: string;
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    public levelid: number;
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;
}
/// <summary>
/// 同意拒绝的协议
/// </summary>
export class cs_agreeintogold_tex extends cs_base {
    /// <summary>
    /// 1同意   -1拒绝
    /// </summary>
    public type: number;
    /// <summary>
    /// 申请人id
    /// </summary>
    public Userid: number;
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;
    public levelid: number;
}
export class sc_agreeintogold_tex extends sc_base {
    //-1房间不存在  
}
export class sc_agreeintogold_tex_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 目标位置有人 离开
    /// </summary>
    public tuserid: number;
}
/// <summary>
/// 刷新玩家余额
/// </summary>
export class cs_refreshbalance_club extends cs_base {
    /// <summary>
    /// 俱乐部id
    /// </summary>
    public clubid: number;
}
export class sc_refreshbalance_club extends sc_base {
    /// <summary>
    /// 俱乐部余额
    /// </summary>
    public gold: number;

    //-1俱乐部不存在
}
//#endregion
//#region vmaster
/// <summary>
/// 通知主播需要开牌了  
/// </summary>
export class sc_tokenvmaster_tex_n extends sc_base {
    /// <summary>
    /// 公牌数 3表示开张，4表示 开第四张，5表示 开第五张
    /// </summary>
    public cCount: number;
}

/// <summary>
/// 主播收到通知后开牌了  仅主播用
/// </summary>
export class cs_tokenvmaster_tex extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    /// 公牌
    /// </summary>
    public _Cards: number[];
}
/// <summary>
///  主播收到通知后开牌了  仅主播用  
/// </summary>
export class sc_tokenvmaster_tex extends sc_base {

}
//#endregion

/// <summary>
/// 通知所有人申请离开桌子
/// </summary>
export class sc_applyexittable_tex_n extends sc_base {
    public gameid: number;
    public userid: number;
    /// <summary>
    /// 客户处理 如果是自己就退出到大厅
    /// </summary>
    public pos: number;
    public name: string;

    /// <summary>
    /// 是否留座    的时间 0表示不需要留座 正常值1~300秒
    /// </summary>
    public isK: number;
}

export class sc_one_exittable_n extends sc_base {
    public gameid: number;
    public userid: number;
    public pos: number;
    public name: string;
    public isK: number;
}

export class cs_getgamelevel extends cs_base {
    public gameid: number;
}

export class sc_getgamelevel extends sc_base {

    public levellist: RoomInfoSD[];
}
export class sc_tjackpotLog extends sc_base {
    //最近的一行天皇记录
    public bigJackpot: JackpotLogSD;

    //最近10行奖池记录
    public data: JackpotLogSD[];
}

export class JackpotLogSD extends sc_base {
    public wName: string;

    /// <summary>
    /// 领取金额
    /// </summary> 
    public gold: number;

    /// <summary>
    /// 大奖类型（1：天皇；2：朵皇；3：朵朵）
    /// </summary> 
    public jackpotType: number;

    public createTime: string;
}

export class cs_chatlog extends cs_base {

    public tableid: number;
    public gameid: number;
    public levelid: number;
}

export class sc_chatlog extends sc_base {
    public tableId: number;

    public levelid: number;
    /// <summary>
    /// 弹幕数据
    /// </summary>
    public data: Barrage[];
}


export class Barrage {
    public username: string;
    /// <summary>
    /// 发表时间
    /// </summary>
    public ptime: string;

    public content: string;
    /// <summary>
    /// 1文本   2语音
    /// </summary>
    public type: number;
}

//举报
export class cs_gamereport_tex extends cs_base {
    /// <summary>
    /// 举报需要的金币
    /// </summary>
    public gold: number;
}
export class sc_gamereport_tex extends sc_base {
    //-1余额不足
    /// <summary>
    /// 扣费成功后的举报次数
    /// </summary>
    public renum: number;
}
export class ReportPra {
    /// <summary>
    /// 必传
    /// </summary>
    public GameId: number;

    /// <summary>
    ///必传 六位桌子号
    /// </summary>
    public tnum: number;

    /// <summary>
    /// 牌局回顾举报的时候  需要传递牌局的第几局
    /// </summary>
    public g_info: number;

    /// <summary>
    ///必传 举报人
    /// </summary>
    public UserId: number;

    /// <summary>
    /// 被举报人id
    /// </summary>
    public S_UserId: number;

    /// <summary>
    /// 举报理由
    /// </summary>
    public reason: string;

    /// <summary>
    /// 举报类型：1、
    /// </summary>
    public noticetype: string;

}

export class cs_goldback_tex extends cs_base {
    /// <summary>
    /// 桌子id
    /// </summary>
    public tableid: number;

    public levelid: number;

    /// <summary>
    /// 回撤i金币
    /// </summary>
    public gold: number;

}

export class sc_goldback_tex extends sc_base {
    // -1 房间不存在   -2可回撤的金额不足  -3仅限AOF模式使用 -5表示不能重复申请
}
export class sc_goldback_tex_n extends sc_base {
    //-1表示余额不足

    /// <summary>
    /// 
    /// </summary>
    public UserId: number;

    /// <summary>
    /// 回撤后的余额
    /// </summary>
    public gold: number;
    /// <summary>
    /// 回撤后身上的余额
    /// </summary>
    public ugold: number;
}

export class sc_getnotice_n extends sc_base {
    public noticelist: string[];

    /// <summary>
    /// 1游戏内跑马灯（比如中了大奖）
    /// </summary>
    public _t: number;
    /// <summary>
    /// 游戏
    /// </summary>
    public gameid: number;
}

//比赛更新
export class sc_compete_table_info extends sc_base {
    ///// <summary> 当前等级 </summary> 
    public level: number;
    ///// <summary> 最小等级 </summary> 
    public min_level: number;
    ///// <summary> 最大等级 </summary> 
    public max_level: number;
    /// <summary> 当前底注 </summary> 
    public baserate: number;
    /// <summary> 当前最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary> 
    public into: number;
    /// <summary> 下一档底注 1.2.5.10.20.40 小盲等于底注 大盲是小盲两倍 straddle是大盲的两倍速 </summary> 
    public next_baserate: number;
    /// <summary> 下一档前注 底注的 2的N次方   1 2 4 8 16 20 40 </summary> 
    public next_pregamble: number;
    /// <summary> 下一档最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary> 
    public next_into: number;
    /// <summary> 下一次升级时间(秒) </summary>
    public next_uplevel_time: number;
}

/// <summary> 获奖信息 </summary>
export class sc_compete_award_info extends sc_base {
    /// <summary> 消息类型:0.淘汰,1.颁奖 </summary>
    public type: number;
    /// <summary> 比赛编号 </summary>
    public competeid: number;
    /// <summary> 比赛名称 </summary>
    public name: string;
    /// <summary> 得奖用户 </summary>
    public userid: number;
    /// <summary> 排名 </summary>
    public rank: number;
    /// <summary> 奖品 </summary>
    public infos: CompetePrizeInfoMessage[];
}

export class CompetePrizeInfoMessage {
    public name: string;
    public num: number;
    public pic: string;
    public isvalue: boolean;
}

export class cs_compete_table_info extends cs_base {
    public userid: number;
    public tableid: number;
    public competeid: number;
}