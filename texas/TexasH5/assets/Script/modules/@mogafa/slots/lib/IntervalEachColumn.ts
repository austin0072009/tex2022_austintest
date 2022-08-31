export default class IntervalEachColumn {
    private _timer: number = null;
    private _interval: number;
    constructor(interval: number) {
        this._interval = interval;
    }
    public get interval(): number {
        return this._interval;
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public set timer(value: any) {
        this._timer = value;
    }
    public get timer(): any {
        return this._timer;
    }
}