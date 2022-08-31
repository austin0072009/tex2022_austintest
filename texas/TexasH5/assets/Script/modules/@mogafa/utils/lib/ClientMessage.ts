import { PlayerInfoSD, sc_base } from "../../../../BaseFrame/cs_base";

//客户端消息基类
class cs_base {
    // 函数名
    public fn: string = "";
    // 可能为0，游戏的协议使用对应游戏ID
    public _g: number;
    // 客服端要的值 不做任何处理直接返回去
    public cc: number;
    constructor() {
        this.fn = this.constructor.name
    }
}

/// 创建角色的网络数据结构
/// </summary>
export class cs_create1005 extends cs_base {
    public RetailID: string;// 
    public Pid: string;// 
    public MobileType: number;//  
    public ClientAppVersion: string;//  
    public GameID: number;// 
    public ServerID: string;//   
    public _Sex: number;
    public NickName: string;
    public ActiveCode: string;
    public HeadID: string;
}

/// 登录
export class cs_login extends cs_base {
    public accountId: string;
    public lat: number;
    public float: number;
    // 用户mac地址
    public deviceID: string;
    // 机器类型（1： 安卓；2：IOS）
    public deviceType: number;
}
/// <summary>
/// 登录返回
/// </summary> 
export class sc_login extends sc_base {
    public gameid: number;
    public user: PlayerInfoSD;
    public cidx: number;
}
//获取玩家信息
export class cs_freshplayerInfoSD extends cs_base {
}

//获取游戏列表
export class cs_getgamelist extends cs_base {
    public accountId: string;
}
//获取游戏列表   也是房间列表 
export class cs_getgamelevel extends cs_base {
    public gameid: number;
}
// 进入房间，四个游戏走同样的接口
export class cs_enterroom extends cs_base {
    public gameid: number;
    public levelid: number;
    // 游戏模式，1房卡模式，2金币模式
    public gamemodel: number;
    // 游戏类型，
    public gametype: number;
    public numpertable: number;
    // 轮流抢庄        TurnSelect=1,
    // 随机抢庄        RandomSelect = 2,
    // 固定轮庄        Turn = 3,
    // 轮庄，可放弃    TurnGiveUp = 4, 
    public rankertype: number;
    // 消耗一张房卡，还是两张
    public roomcard: number;
    // 当前限制的局数，升庄是庄数。
    public tableCount: number;
    // 最低的底注
    public baserate: number;
    // 限定值在level中_min ~_max之间的
    public _limit: number;
}
// 取消排队
export class cs_cancelorder extends cs_base {
}
// 输入房号进入房间
export class cs_enterroomtable extends cs_base {
    public gameid: number;
    public levelid: number;
    public tablenum: number;
}
// 退出房间，四个游戏走同样的接口
export class cs_exitroom extends cs_base {
    public gameid: number;
    public levelid: number;
}
// 请求离开桌子，申请解散游戏
export class cs_applyexittable extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
    // 申请位置
    public pos: number;
}
// 处理请求离开桌子，  处理别人的申请解散，可同意与不同意
export class cs_dealexittable extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
    // 1，表示同意解散。 0，表示不同意
    public agree: number;
}
// 断线后居上进入房间 
export class cs_reenterroom extends cs_base {

}

// 下注  1次
export class cs_gambleone_slotz extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotf extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotba extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotnl extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}
// 下注  1次
export class cs_gambleone_slotnj extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotma extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotlol extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

// 下注  1次
export class cs_gambleone_slotbull extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

export class cs_gambleone_slotshz extends cs_base {
    public levelid: number;
    public tableid: number;
    // 下注分数
    public gamble: number;
    // 购买线条数量
    public lineCount: number;
}

export class cs_riskbibei_slotshz extends cs_base {
    public levelid: number;
    public tableid: number;
    public bet123: number;
}

export class cs_riskmarry_slotshz extends cs_base {
    public levelid: number;
    public tableid: number;
}

// 请求在线列表
export class cs_getonline_slotz extends cs_base {
    public levelid: number;
    public tableid: number;
    public Count: number;
}

// 请求个人下注记录
export class cs_gethistorygamble_slotz extends cs_base {
    public levelid: number;
    public tableid: number;
    public Count: number;
}

// marry
export class cs_riskmarry_slotz extends cs_base {
    public levelid: number;
    public tableid: number;
}
export class cs_riskmarry_slotf extends cs_base {
    public levelid: number;
    public tableid: number;
}
// 输入房号进入的玩家需再次申请 补丁
export class cs_entertable_slotz extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
}
export class cs_entertable_slotf extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
}
export class cs_entertable_slotba extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
}

export class cs_entertable_slotbull extends cs_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
}
export class cs_special_card_slotz extends cs_base {
    public levelid: number;
    public tableid: number;
    public special_card: number;
}

export class cs_entertable_slot extends cs_base {
    gameid: number;
    levelid: number;
    tableid: number;
}

export class cs_BonusGame_slotlol extends cs_base {
    levelid: number;
    tableid: number;
    selectIndex: number;
}

export class cs_freeselect_slothyrz extends cs_base {
    levelid: number;
    tableid: number;
}




