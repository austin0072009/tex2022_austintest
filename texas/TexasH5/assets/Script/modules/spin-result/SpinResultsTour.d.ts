import SpinResultsRankInfo from "./SpinResultsRankInfo";
export default class SpinResultsTour {
    private _status;
    private _countdown;
    private _totalMinutes;
    private _award;
    private _mine;
    private _myPrev;
    private _ranks;
    constructor(status: number, countdown: number, totalMinutes: number, award: number[], mine: SpinResultsRankInfo, myPrev: SpinResultsRankInfo, ranks: SpinResultsRankInfo[]);
    get status(): number;
    set status(value: number);
    get countdown(): number;
    set countdown(value: number);
    get totalMinutes(): number;
    set totalMinutes(value: number);
    get award(): number[];
    set award(value: number[]);
    get mine(): SpinResultsRankInfo;
    set mine(value: SpinResultsRankInfo);
    get myPrev(): SpinResultsRankInfo;
    set myPrev(value: SpinResultsRankInfo);
    get ranks(): SpinResultsRankInfo[];
    set ranks(value: SpinResultsRankInfo[]);
}
