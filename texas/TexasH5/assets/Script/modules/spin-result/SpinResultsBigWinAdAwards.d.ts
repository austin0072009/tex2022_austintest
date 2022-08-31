export default class SpinResultsBigWinAdAwards {
    private _awardId;
    private _points;
    private _coins;
    private _countdown;
    constructor(_awardId: string, _points: number, _coins: number, _countdown: number);
    /**
     * 奖励ID
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsBigWinAdAwards
     */
    get awardId(): string;
    set awardId(value: string);
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
     * 奖励的金币
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */
    get coins(): number;
    set coins(value: number);
    /**
     * 弹窗倒计时, 单位秒
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */
    get countdown(): number;
    set countdown(value: number);
}
