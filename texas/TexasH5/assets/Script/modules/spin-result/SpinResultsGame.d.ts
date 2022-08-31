import { SpinResultsGameStatus } from "./SpinResultsGameStatus";
export default class SpinResultsGame {
    private _id;
    private _code;
    private _isFree;
    private _hasJackpot;
    private _jackpot;
    private _jackpot2;
    private _status;
    private _isTopGame;
    private _isVertical;
    private _orderNumber;
    private _version;
    constructor(_id: string, _code: string, _isFree: boolean, _hasJackpot: boolean, _jackpot: string, _jackpot2: string, _status: SpinResultsGameStatus, _isTopGame: boolean, _isVertical: boolean, _orderNumber: number, _version: string);
    /**
     * 关卡ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get id(): string;
    set id(value: string);
    /**
     * 关卡代号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get code(): string;
    set code(value: string);
    /**
     * 奖池金额1
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get jackpot(): string;
    set jackpot(value: string);
    /**
     * 奖池金额2
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get jackpot2(): string;
    set jackpot2(value: string);
    /**
     * 是否有奖池
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get hasJackpot(): boolean;
    set hasJackpot(value: boolean);
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isFree(): boolean;
    set isFree(value: boolean);
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get status(): SpinResultsGameStatus;
    set status(value: SpinResultsGameStatus);
    /**
     * 是否置顶游戏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isTopGame(): boolean;
    set isTopGame(value: boolean);
    /**
     * 是否竖屏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */
    get isVertical(): boolean;
    set isVertical(value: boolean);
    /**
     * 关卡顺序，解锁等级
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */
    get orderNumber(): number;
    set orderNumber(value: number);
    /**
     * 版本号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */
    get version(): string;
    set version(value: string);
}
