import SpinResultCell from "./SpinResultsCell";
export default class SpinResultsColumn {
    private _cells;
    private _codes;
    private _stopCodes;
    private _replaceCodes;
    private _isHoldWin;
    constructor(cells?: SpinResultCell[], isHoldWin?: boolean);
    get cells(): SpinResultCell[];
    set cells(value: SpinResultCell[]);
    private getReplaceCodes;
    get codes(): number[];
    get isHoldWin(): boolean;
    set isHoldWin(value: boolean);
    get replaceCodes(): number[][];
    get stopCodes(): number[];
}
