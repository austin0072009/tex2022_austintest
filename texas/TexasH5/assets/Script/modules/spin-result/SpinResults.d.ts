import { SpinResultsWinType } from "./SpinResultsWinType";
import { SpinResultsGameMode } from "./SpinResultsGameMode";
import SpinResultsSlot from "./SpinResultsSlot";
import SpinResultsFreeTrigger from "./SpinResultsFreeTrigger";
import SpinResultsCollectible from "./SpinResultsCollectible";
import SpinResultsLevel from "./SpinResultsLevel";
import SpinResultsTour from "./SpinResultsTour";
import SpinResultsGameWheel from "./SpinResultsGameWheel";
import SpinResultsBigWinAdAwards from "./SpinResultsBigWinAdAwards";
import SpinResultsCard from "./SpinResultsCard";
import { SpinResultsGameStatus } from "./SpinResultsGameStatus";
export default class SpinResults {
    private _slots;
    private _jackpots;
    private _jackpot;
    private _jackpotLevel;
    private _winType;
    private _winCoins;
    private _userCoins;
    private _previousGameMode;
    private _gameMode;
    private _nextGameMode;
    private _finishedCount;
    private _totalCount;
    private _timestamp;
    private _totalBetNum;
    private _highScore;
    /** 游戏积分 */
    private _points;
    /** 用户总游戏积分 */
    private _userPoints;
    /** BinWin金币数 */
    private _bigWinCoins;
    /** BigWin看广告奖励 */
    private _bigWinAdAwards;
    /** 获取得的卡牌，没有为空数组 */
    private _cards;
    private _freeTrigger;
    private _collectibles;
    private _level;
    private _tour;
    private _gameWheel;
    constructor(slots?: SpinResultsSlot[], jackpots?: number[], jackpot?: number, jackpotLevel?: number, winType?: SpinResultsWinType, winCoins?: number, userCoins?: number, gameMode?: SpinResultsGameMode, finishedCount?: number, totalCount?: number, freeTrigger?: SpinResultsFreeTrigger, collectibles?: SpinResultsCollectible[], timestamp?: number, totalBetNum?: number, level?: SpinResultsLevel, tour?: SpinResultsTour, gameWheel?: SpinResultsGameWheel);
    get slots(): SpinResultsSlot[];
    set slots(value: SpinResultsSlot[]);
    /**
     * 获取奖池数据
     */
    get jackpots(): number[];
    /**
     * 设置奖池数据
     */
    set jackpots(value: number[]);
    /**
     * 获取jp奖励
     */
    get jackpot(): number;
    /**
     * 设置jp奖励
     */
    set jackpot(value: number);
    /**
     * 获取jp中奖档次
     */
    get jackpotLevel(): number;
    /**
     * 设置jp中奖档次
     */
    set jackpotLevel(value: number);
    /**
     * 获取赢的类型
     */
    get winType(): SpinResultsWinType;
    /**
     * 设置赢的类型
     */
    set winType(value: SpinResultsWinType);
    /**
     * 获取赢取金币数
     */
    get winCoins(): number;
    /**
     * 设置赢取金币数
     */
    set winCoins(value: number);
    /**
     * 获取用户金币数
     */
    get userCoins(): number;
    /**
     * 设置用户金币数
     */
    set userCoins(value: number);
    /**
     * 获取游戏类型
     */
    get previousGameMode(): SpinResultsGameMode;
    /**
     * 设置游戏类型
     */
    set previousGameMode(value: SpinResultsGameMode);
    /**
     * 获取游戏类型
     */
    get gameMode(): SpinResultsGameMode;
    /**
     * 设置游戏类型
     */
    set gameMode(value: SpinResultsGameMode);
    /**
     * 获取下回合游戏类型
     */
    get nextGameMode(): SpinResultsGameMode;
    /**
     * 设置下回合游戏类型
     */
    set nextGameMode(value: SpinResultsGameMode);
    /**
     * 获取已完成次数
     */
    get finishedCount(): number;
    /**
     * 设置已完成次数
     */
    set finishedCount(value: number);
    /**
     * 获取总次数
     */
    get totalCount(): number;
    /**
     * 设置总次数
     */
    set totalCount(value: number);
    /**
     * 获取时间戳(ms)
     */
    get timestamp(): number;
    set timestamp(value: number);
    /**
     * 获取下注数
     */
    get totalBetNum(): number;
    /**
     * 设置下注数
     */
    set totalBetNum(value: number);
    /**
     * 获取历史最高分
     */
    get highScore(): number;
    /**
     * 设置历史最高分
     */
    set highScore(value: number);
    /**
     * 游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get points(): number;
    set points(value: number);
    /**
     * 用户总游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get userPoints(): number;
    set userPoints(value: number);
    /**
     * BigWin金币数
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get bigWinCoins(): number;
    set bigWinCoins(value: number);
    /**
     * 获取免费游戏触发器
     */
    get freeTrigger(): SpinResultsFreeTrigger;
    /**
     * 设置免费游戏触发器
     */
    set freeTrigger(value: SpinResultsFreeTrigger);
    private setNextGameMode;
    /**
     * 获取收集值列表
     */
    get collectibles(): SpinResultsCollectible[];
    /**
     * 设置收集值列表
     */
    set collectibles(value: SpinResultsCollectible[]);
    /**
     * 获取等级
     */
    get level(): SpinResultsLevel;
    /**
     * 设置等级
     */
    set level(value: SpinResultsLevel);
    /**
     * 获取巡回赛数据
     */
    get tour(): SpinResultsTour;
    /**
     * 设置巡回赛
     */
    set tour(value: SpinResultsTour);
    /**
     * 获取游戏内转盘
     */
    get gameWheel(): SpinResultsGameWheel;
    /**
     * 设置游戏内转盘
     */
    set gameWheel(value: SpinResultsGameWheel);
    /**
     * 获得的卡牌
     *
     * @readonly
     * @type {SpinResultsCard[]}
     * @memberof SpinResults
     */
    get cards(): SpinResultsCard[];
    set cards(value: SpinResultsCard[]);
    /**
     * 添加卡牌
     *
     * @param {string} cardId 卡牌ID
     * @param {string} cardImageUrl 卡牌图片地址
     * @memberof SpinResults
     */
    addCard(cardId: string, cardImageUrl: string, isNew?: boolean, count?: number): void;
    /**
     * BinWin看广告奖励
     *
     * @readonly
     * @type {SpinResultsBigWinAdAwards}
     * @memberof SpinResults
     */
    get bigWinAdAwards(): SpinResultsBigWinAdAwards;
    set bigWinAdAwards(value: SpinResultsBigWinAdAwards);
    /**
     * 添加BinWin看广告奖励
     *
     * @param {string} awardId 奖励ID
     * @param {number} points 奖励的游戏积分
     * @param {number} coins 奖励的金币
     * @param {number} countdown 弹窗倒计时
     * @memberof SpinResults
     */
    addBinWinAdAwards(awardId: string, points: number, coins: number, countdown: number): void;
    /**
     * 添加解锁关卡
     *
     * @param {string} gameId 关卡ID
     * @param {string} gameCode 关卡代号
     * @param {boolean} isFree 是否免费
     * @param {boolean} hasJackpot 是否有奖池
     * @param {string} jackpot 奖池金额
     * @param {string} jackpot2 奖池金额
     * @param {SpinResultsGameStatus} status 关卡状态
     * @param {boolean} isTopGame
     * @param {boolean} isVertical
     * @param {number} orderNum
     * @param {string} version
     * @returns {void}
     * @memberof SpinResults
     */
    addUnlockedGame(gameId: string, gameCode: string, isFree: boolean, hasJackpot: boolean, jackpot: string, jackpot2: string, status: SpinResultsGameStatus, isTopGame: boolean, isVertical: boolean, orderNum: number, version: string): void;
}
