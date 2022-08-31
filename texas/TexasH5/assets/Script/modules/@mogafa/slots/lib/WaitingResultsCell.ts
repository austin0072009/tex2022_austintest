import FifoQueue from "./FifoQueue";
import { WaitingResultsSpinStatus } from "./WaitingResultsSpinStatus";
import { SymbolBoardConst } from "./SymbolBoard/SymbolBoardConst";
import NumberUtils from "../../utils/lib/NumberUtils";

export default class WaitingResultsCell {
    private _maxCode: number;
    private _stopCode: number;
    private _finalCode: number;
    private _randomCodes: FifoQueue<number>;
    private _spinStatus: WaitingResultsSpinStatus;
    private _theNextCode: number;
    private _excludeCodes: number[] = [];
    private _fixed: boolean;
    private _isHoldWin: boolean;
    private _holdWinShowing: boolean;
    private _timer: number;
    constructor(maxCode: number) {
        this._maxCode = maxCode;
        this._randomCodes = new FifoQueue<number>();
        this._randomCodes.enqueue(NumberUtils.random(0, maxCode));
        this._theNextCode = this.randomCode;
        this._isHoldWin = false;
        this._holdWinShowing = false;
        this._spinStatus = WaitingResultsSpinStatus.Normal;
    }
    get maxCode(): number {
        return this._maxCode;
    }
    get spinStatus(): WaitingResultsSpinStatus {
        return this._spinStatus;
    }
    set spinStatus(value: WaitingResultsSpinStatus) {
        this._spinStatus = value;
    }
    get theNextCode(): number {
        return this._theNextCode;
    }
    public nextCode(): void {
        this._theNextCode = this.randomCode;
    }
    get randomCode(): number {
        let code = this._randomCodes.dequeue();
        if (this._spinStatus != WaitingResultsSpinStatus.Stopping) {
            this._randomCodes.enqueue(NumberUtils.random(0, this._maxCode, this._excludeCodes));
        }
        return code;
    }
    public get excludeCodes(): number[] {
        return this._excludeCodes;
    }
    public set excludeCodes(value: number[]) {
        this._excludeCodes = value;
        if (!this._excludeCodes) {
            this._excludeCodes = [];
        }
        if (this._excludeCodes.find((c) => c == this._theNextCode) != null) {
            this._theNextCode = this.randomCode;
        }
    }
    get fixed(): boolean {
        return this._fixed;
    }
    set fixed(value: boolean) {
        this._fixed = value;
    }
    get isHoldWin(): boolean {
        return this._isHoldWin;
    }
    set isHoldWin(value: boolean) {
        this._isHoldWin = value;
    }
    get holdWinShowing(): boolean {
        return this._holdWinShowing;
    }
    set holdWinShowing(value: boolean) {
        this._holdWinShowing = value;
    }
    get timer(): any {
        return this._timer;
    }
    set timer(value: any) {
        this._timer = value;
    }
    public pushStopCode(code: number): void {
        this._randomCodes.clear();
        this._randomCodes.enqueue(code + SymbolBoardConst.FINAL_CODE_OFFSET);
        this._randomCodes.enqueue(NumberUtils.random(0, this._maxCode, this._excludeCodes));
        this._spinStatus = WaitingResultsSpinStatus.Stopping;
    }
    public reset(): void {
        this._randomCodes.clear();
        this._randomCodes.enqueue(NumberUtils.random(0, this.maxCode));
        this._randomCodes.enqueue(NumberUtils.random(0, this._maxCode, this._excludeCodes));
        this.nextCode();
        this._theNextCode = this.randomCode;
        this.isHoldWin = false;
        this.holdWinShowing = false;
        this.spinStatus = WaitingResultsSpinStatus.Normal;
    }
}
