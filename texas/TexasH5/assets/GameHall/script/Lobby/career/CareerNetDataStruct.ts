import { cs_base, sc_base } from "../../../../Script/BaseFrame/cs_base";

/// <summary>
/// 得到我的牌局收藏
/// </summary>
export class cs_geymytexascollect_tex extends cs_base {

}

export class sc_geymytexascollect_tex extends sc_base {
    public data: TexasCollectList[];
}

export class TexasCollectList {
    /// <summary>
    /// 收藏的id
    /// </summary>
    public cid: string;

    /// <summary>
    /// 单局的id
    /// </summary>
    public infoId: string;

    public baserate: number;

    /// <summary>
    /// 当前局数
    /// </summary>
    public gNum: number;

    /// <summary>
    /// 总局数
    /// </summary>
    public totalnum: number;

    /// <summary>
    /// 赢家id
    /// </summary>
    public WinUserId: number;

    /// <summary>
    /// 赢家姓名
    /// </summary>
    public winName: string;

    /// <summary>
    /// 赢取金额
    /// </summary>
    public winGold: number;


    /// <summary>
    /// 查看次数
    /// </summary>
    public seeNum: number;

    /// <summary>
    /// 没有弃牌人个数
    /// </summary>
    public NoGiveupNum: number;

    /// <summary>
    /// 最大组合牌  TexasPokerType枚举
    /// </summary>
    public maxPoker: number;

    /// <summary>
    /// 自己参与游戏  自己的手牌
    /// </summary>
    public OwnSpair: number[];

    /// <summary>
    /// 自己的输赢
    /// </summary>
    public OwnWin: number;

    /// <summary>
    /// 前注值
    /// </summary>
    public preG: number;

    /// <summary>
    /// 公牌
    /// </summary>
    public compoker: number[];
}

//牌局详情
export class cs_getscollectbyid_tex extends cs_base {
    /// <summary>
    /// 收藏的id
    /// </summary>
    public cid: string;
}

export class sc_getscollectbyid_tex extends sc_base {
    /// <summary>
    /// 收藏时间
    /// </summary>
    public cTime: string;
    /// <summary>
    /// 查看次数
    /// </summary>
    public snum: number;

    /// <summary>
    /// 6位数桌号
    /// </summary>
    public tnum: number;

    /// <summary>
    /// 强制秀牌
    /// </summary>
    public showCard: number;

    /// <summary>
    /// 单局
    /// </summary>
    public tinfo: TexTInfoSD;

    /// <summary>
    /// 所有玩家
    /// </summary>
    public ulist: PInfoSD[];

    /// <summary>
    /// 底注
    /// </summary>
    public baserate: number;

    /// <summary>
    /// 一局最大的筹码
    /// </summary>
    public maxPot: number;
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

export enum TexasTurnEnum {
    Init = -1,
    /// <summary>
    /// 盲注阶段 手牌数为0--小盲当庄：自动压房间低分的一分 大盲注为小盲注的下家，自动压房间的最低分，从小盲注开始发牌，Token交给大盲注
    /// </summary>
    Turn1_0 = 1,
    /// <summary>
    /// 手牌数为2+3 公开牌为数为3  
    /// </summary>
    Turn2_3 = 2,
    /// <summary>
    /// 手牌数为2+4 公开牌为数为4  
    /// </summary>
    Turn3_4 = 3,
    /// <summary>
    /// 手牌数为2+5 公开牌为数为5 
    /// </summary>
    Turn4_5 = 4,
    /// <summary>
    /// 比牌状态了
    /// </summary>
    TrunCompare = 5,
}
export enum TexasTurnActionEnum {
    Init = -1,
    /// <summary>
    /// 小盲
    /// </summary>
    sb = 1,
    /// <summary>
    /// 大盲
    /// </summary>
    bb = 2,
    /// <summary>
    /// stradlle
    /// </summary>
    stradlle = 3,
    /// <summary>
    /// 跟
    /// </summary>
    call = 4,
    /// <summary>
    /// 弃牌
    /// </summary>
    fold = 5,
    /// <summary>
    /// allin
    /// </summary>
    allin = 6,
    /// <summary>
    /// 让牌
    /// </summary>
    Check = 7,
    /// <summary>
    /// 加注 2/3
    /// </summary>
    B2_3 = 8,
    /// <summary>
    /// 加注 1/2 
    /// </summary>
    B1_2 = 9,
    /// <summary>
    /// 加注 1
    /// </summary>
    B1 = 10,
    /// <summary>
    /// 全部加注操作
    /// </summary>
    B = 11,
    /// <summary>
    /// 比牌
    /// </summary>
    showdonw = 15,
    /// <summary>
    /// 保险类型 可能需要详细的保险流程
    /// </summary>
    Ins = 20,
}

///赛事
export class cs_compete_record extends cs_base
{
    public userid:number;//不用传
}
/// <summary> 比赛简介 </summary>
export class CompeteRemark
{
    public competeid:number;
    public competename:string;
    /// <summary> 比赛图片 </summary>
    public pic:string;
    /// <summary> 获得金币 </summary>
    public wingold:number;
    /// <summary> 开赛时间 </summary>
    public starttime:string;
    /// <summary> 排名 </summary>
    public rank:number;
}
/// <summary> 玩家比赛统计 </summary>
export class sc_compete_record extends sc_base
{
    /// <summary> 钱圈数 </summary>
    public WinCount:number;
    /// <summary> 总手数 </summary>
    public TotalRoundCount:number;
    /// <summary> 决赛次数 </summary>
    public FinalRoundCount:number;
    /// <summary> 比赛简介(可获取参与比赛数量) </summary>
    public infos:CompeteRemark[];
}
export class cs_compete_record_detail extends cs_base
{
    public competeid:number;
    public userid:number;//不用传
}
export  class RankPrizeInfo
{
    /// <summary> 玩家编号 </summary>
    public playerid:number;
    /// <summary> 用户名 </summary>
    public name:string;
    /// <summary> 头像 </summary>
    public pic:string;
    /// <summary> 当前分数 </summary>
    public score:number;
    /// <summary> 排名 </summary>
    public rank:number;
    /// <summary> 是否被淘汰 </summary>
    public isouted:boolean;
    /// <summary> 比例(万分比) </summary>
    public proportion:number;
    /// <summary> 奖品 </summary>
    public prizes:PrizeInfoMessage[];
}
/// <summary> 玩家比赛详情 </summary
export class sc_compete_record_detail extends sc_base
{
    //public CompeteDetail detailinfo;
    public competeid:number;
    /// <summary> 比赛名称 </summary>
    public competename:string;
    /// <summary> 玩家在比赛中获得的奖品 </summary>
    public prizes:PrizeInfoMessage[];
    /// <summary> 排名(可从中获取玩家人数) </summary>
    public ranking:RankPrizeInfo[];
    /// <summary> 盈利桌数 </summary>
    public TableWinCount:number;
    /// <summary> 总手数 </summary>
    public TotalRoundCount:number;
    /// <summary> 回报率 </summary>
    public RateOfReturn:number;
    /// <summary> 开赛时间 </summary>
    public starttime:string;
}
export class PrizeInfoMessage
    {
        public name:string;
        public num:number;
        public pic:string;
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
