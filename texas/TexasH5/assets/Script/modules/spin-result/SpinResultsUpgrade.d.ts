import SpinResultsGame from "./SpinResultsGame";
import { SpinResultsGameStatus } from "./SpinResultsGameStatus";
export default class SpinResultsUpgrade {
    private _level;
    private _award;
    private _vipRatio;
    private _awardCollectId;
    private _maxBet;
    /** 游戏积分 */
    private _points;
    /** 大升级弹窗倒计时 */
    private _countdown;
    /** 解锁的关卡 */
    private _unlockedGames;
    constructor(level: number, award: number, vipRatio: number, awardCollectId: string);
    get level(): number;
    set level(value: number);
    get award(): number;
    set award(value: number);
    get vipRatio(): number;
    set vipRatio(value: number);
    get awardCollectId(): string;
    set awardCollectId(value: string);
    get maxBet(): number;
    set maxBet(value: number);
    /**
     * 获得的游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get points(): number;
    set points(value: number);
    /**
     * 大升级弹窗倒计时
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get countdown(): number;
    set countdown(value: number);
    /**
     * 解锁的关卡
     *
     * @readonly
     * @type {SpinResultsGame[]}
     * @memberof SpinResultsUpgrade
     */
    get unlockedGames(): SpinResultsGame[];
    set unlockedGames(value: SpinResultsGame[]);
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
     * @memberof SpinResultsUpgrade
     */
    addUnlockedGame(gameId: string, gameCode: string, isFree: boolean, hasJackpot: boolean, jackpot: string, jackpot2: string, status: SpinResultsGameStatus, isTopGame: boolean, isVertical: boolean, orderNum: number, version: string): void;
}
