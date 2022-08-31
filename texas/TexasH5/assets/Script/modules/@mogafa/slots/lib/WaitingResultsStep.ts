export default class WaitingResultsStep {
    private _status: number;
    private _step: number;
    constructor(status: number, step: number) {
        this._status = status;
        this._step = step;
    }
    public get status(): number {
        return this._status;
    }
    public get step(): number {
        return this._step;
    }
    public set step(value:number){
        this._step = value;
    }
}