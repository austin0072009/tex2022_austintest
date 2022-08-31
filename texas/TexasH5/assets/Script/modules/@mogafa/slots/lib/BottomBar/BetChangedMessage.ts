export default class BetChangedMessage extends cc.Event.EventCustom {
    private _bet: number = 0;
    private _isMin: boolean = true;
    private _isMax: boolean = true;
    constructor(bet: number, isMin: boolean, isMax: boolean) {
        super("betChanged", true);
        this._bet = bet;
        this._isMax = isMax;
        this._isMin = isMin
    }
    public get bet(): number {
        return this._bet;
    }
    public get isMin(): boolean {
        return this._isMin;
    }
    public get isMax(): boolean {
        return this._isMax;
    }
}