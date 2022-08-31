import FifoQueue from "./FifoQueue";
import WaitingResultsCell from "./WaitingResultsCell";
import WaitingResultsStep from "./WaitingResultsStep";
import { WaitingResultsSpinStatus } from "./WaitingResultsSpinStatus";
import { SymbolBoardConst } from "./SymbolBoard/SymbolBoardConst";

import NumberUtils from "../../utils/lib/NumberUtils";
import SpinResultsColumn from "../../../spin-result/SpinResultsColumn";


export default class WaitingResultsColumn {
    private readonly _maxCode: number;
    private _isHoldWin: boolean;
    private readonly _cells: WaitingResultsCell[];
    private _stopCodes: number[] = [];
    private _randomCodes: FifoQueue<number>;
    private _spinStatus: WaitingResultsSpinStatus;
    //private _canBeStart: boolean;
    private readonly _steps: WaitingResultsStep[] = [];
    private _theNextCode: number;
    private _currentStep: number;
    private _results: SpinResultsColumn;
    private _excludeCodes: number[] = [];
    private _stopped: boolean = false;
    private _timer: number;
    constructor(maxCode: number, steps: WaitingResultsStep[]) {
        this._maxCode = maxCode;
        this._cells = [];
        this._stopCodes = [];
        this._randomCodes = new FifoQueue<number>();
        this._randomCodes.enqueue(NumberUtils.random(0, maxCode));
        //this._canBeStart = false;
        this._theNextCode = this.randomCode;
        this._spinStatus = WaitingResultsSpinStatus.Normal;
        if (steps) {
            this._steps = steps;
            const step = steps.find((s) => s.status == WaitingResultsSpinStatus.Normal);
            this._currentStep = step.step;
        }
    }
    public set spinStatus(value: number) {
        if (value || value === 0) {
            let step = this._steps.find((s) => s.status == value);
            if (!step) {
                step = this._steps.find((s) => s.status == WaitingResultsSpinStatus.Normal);
            }
            this._currentStep = step.step;
            this._spinStatus = value;
        }
    }
    public get spinStatus(): number {
        return this._spinStatus;
    }

    public get currentStep(): number {
        return this._currentStep;
    }
    public get theNextCode(): number {
        return this._theNextCode;
    }
    public get isHoldWin(): boolean {
        return this._isHoldWin;
    }
    public set isHoldWin(isHoldWin: boolean) {
        this._isHoldWin = isHoldWin;
    }
    public get timer(): any {
        return this._timer;
    }
    public set timer(value: any) {
        this._timer = value;
    }
    public get cells(): WaitingResultsCell[] {
        return this._cells;
    }
    // public get canBeStart(): boolean {
    //     return this._canBeStart;
    // }
    // public set canBeStart(value: boolean) {
    //     this._canBeStart = value;
    // }
    public set stopCodes(value: number[]) {
        this._stopCodes = value;
        if (!this._stopCodes) {
            this._stopCodes = [];
        }
    }
    public get stopCodes(): number[] {
        return this._stopCodes;
    }
    public set results(value: SpinResultsColumn) {
        this._results = value;
        if (value) {
            this._stopCodes = value.codes;
            this._isHoldWin = value.isHoldWin;
        }
    }
    public get randomCode(): number {
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
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].excludeCodes = this.excludeCodes;
        }
    }
    public getStep(status: number): number {
        const step = this._steps.find((s) => s.status == status);
        if (!step) {
            return null;
        }
        return step.step;
    }
    public addOrUpdateStep(status: number, step: number) {
        const oldStep = this._steps.find((s) => s.status == status);
        if (oldStep) {
            oldStep.step = step;
            return;
        }
        this._steps.push(new WaitingResultsStep(status, step));
    }
    public addCell(cell: WaitingResultsCell): void {
        this.cells.push(cell);
    }
    public nextCode(): void {
        this._theNextCode = this.randomCode;
    }
    public pushStopCodes(): void {
        if (this._stopCodes && this._stopCodes.length > 0) {
            //console.log("pushStopCodes");
            this._randomCodes.clear();
            this.spinStatus = WaitingResultsSpinStatus.Stopping;
            for (let i = 0; i < this._stopCodes.length; i++) {
                this._randomCodes.enqueue(this._stopCodes[i] + SymbolBoardConst.FINAL_CODE_OFFSET);
            }
            this._stopCodes = [];
        }
    }
    public pushStopCodesForCell(cellIndex: number): void {
        if (this._stopCodes && this._stopCodes.length > 0) {
            const stopCodesLength = this._stopCodes.length;
            this.cells[cellIndex].pushStopCode(this._stopCodes[stopCodesLength - cellIndex - 1]);
        }
    }
    public reset(): void {
        this._isHoldWin = false;
        this._stopCodes = [];
        this._randomCodes.clear();
        this._randomCodes.enqueue(NumberUtils.random(0, this._maxCode, this._excludeCodes));
        this._theNextCode = this.randomCode;
        //this._canBeStart = false;
        this.spinStatus = WaitingResultsSpinStatus.Normal;
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].reset();
        }
    }
}
