import { SymbolSpinType } from "./SymbolSpinType";
import { IResilienceMove } from "./IResilienceMove";

export default class TurningWaitingResultsConfig {
    /**
     * 正常转动时的棋子转动方式
     */
    private _spinType: SymbolSpinType = SymbolSpinType.Column;
    /**
     * respin时棋子的转动方式
     */
    private _respinType: SymbolSpinType = SymbolSpinType.Cell;
    /**
     * 启动回弹开始
     */
    private _startUpResilience: IResilienceMove = null;
    /**
     * 启动回弹
     */
    private _startDownResilience: IResilienceMove = null;
    /**
     * 结束回弹开始
     */
    private _endDownResilience: IResilienceMove = null;
    /**
     * 结束回弹结束
     */
    private _endUpResilience: IResilienceMove = null;
    /**
     * 定时间隔时长，单位毫秒
     */
    private _interval: number = 0;
    /**
     * 转动速度
     */
    private _step: number = 20;
    /**
     * holdwin转动速度
     */
    private _holdWinStep: number = 40;
    /**
     * 停止转动的速度
     */
    private _stopStep: number = 30;
    /**
     * 人工停止转动的速度，如果为0则表示立即停止
     */
    private _manualStopStep: number = 120;
    /**
     * 如果没有主动按stop，自动停止的时长
     */
    private _autoStopTimeout: number = 3000;
    /**
     * holdWin时没有主动按stop，自动停止的时长
     */
    private _holdWinStopTimeout: number = 1000;
    /**
     * Skip hold win of turning waiting results config
     * 手动停止的时候是否跳过后面的holdwin
     */
    private _skipHoldWin: boolean = true;
    /**
     * 每列棋子数（注意包含用于转动的隐藏棋子）
     */
    private _cellAmountInColumns: number[] = [];
    /**
     * 每列之间的启动间隔时长，如果为空则表示同时启动
     */
    private _startIntervalEachColumn: number[] = [];
    /**
     * 每列之间的停止间隔时长，如果为空则表示同时停止
     */
    private _stopIntervalEachColumn: number[] = [];
    /**
     * 手工停止时每列之间的停止间隔时长，如果为空则表示同时停止
     */
    private _manualStopIntervalEachColumn: number[] = [];
    /**
     * Stop interval each cell of turning waiting results config
     * respin时，每个格子停止的间隔时长，这个时长是相对于第一个格子的
     */
    private _stopIntervalEachCell: number[] = [];
    /**
     * Stop interval in respin cell of turning waiting results config
     * 在respin中每个格子停止需要的时长
     */
    private _stopIntervalInRespinCell: number;
    constructor() {}

    public get startUpResilience(): IResilienceMove {
        return this._startUpResilience;
    }
    public set startUpResilience(value: IResilienceMove) {
        this._startUpResilience = value;
    }
    public get startDownResilience(): IResilienceMove {
        return this._startDownResilience;
    }
    public set startDownResilience(value: IResilienceMove) {
        this._startDownResilience = value;
    }
    public get endDownResilience(): IResilienceMove {
        return this._endDownResilience;
    }
    public set endDownResilience(value: IResilienceMove) {
        this._endDownResilience = value;
    }
    public get endUpResilience(): IResilienceMove {
        return this._endUpResilience;
    }
    public set endUpResilience(value: IResilienceMove) {
        this._endUpResilience = value;
    }
    public get interval(): number {
        return this._interval;
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public get cellAmountInColumns(): number[] {
        return this._cellAmountInColumns;
    }
    public set cellAmountInColumns(value: number[]) {
        this._cellAmountInColumns = value;
    }
    public get spinType(): SymbolSpinType {
        return this._spinType;
    }
    public set spinType(value: SymbolSpinType) {
        this._spinType = value;
    }
    public get respinType(): SymbolSpinType {
        return this._respinType;
    }
    public set respinType(value: SymbolSpinType) {
        this._respinType = value;
    }
    public get startIntervalEachColumn(): number[] {
        return this._startIntervalEachColumn;
    }
    public set startIntervalEachColumn(value: number[]) {
        this._startIntervalEachColumn = value;
    }
    public get stopIntervalEachColumn(): number[] {
        return this._stopIntervalEachColumn;
    }
    public set stopIntervalEachColumn(value: number[]) {
        this._stopIntervalEachColumn = value;
        if (!this._stopIntervalEachColumn) {
            this._stopIntervalEachColumn = [];
        }
    }
    public get manualStopIntervalEachColumn(): number[] {
        return this._manualStopIntervalEachColumn;
    }
    public set manualStopIntervalEachColumn(value: number[]) {
        this._manualStopIntervalEachColumn = value;
        if (!this._manualStopIntervalEachColumn) {
            this._manualStopIntervalEachColumn = [];
        }
    }
    public get stopIntervalEachCell(): number[] {
        return this._stopIntervalEachCell;
    }
    public set stopIntervalEachCell(value: number[]) {
        this._stopIntervalEachCell = value;
    }
    public get stopIntervalInRespinCell(): number {
        return this._stopIntervalInRespinCell;
    }
    public set stopIntervalInRespinCell(value: number) {
        this._stopIntervalInRespinCell = value;
    }
    public get step(): number {
        return this._step;
    }
    public set step(value: number) {
        this._step = value;
    }
    public get holdWinStep(): number {
        return this._holdWinStep;
    }
    public set holdWinStep(value: number) {
        this._holdWinStep = value;
    }
    public get stopStep(): number {
        return this._stopStep;
    }
    public set stopStep(value: number) {
        this._stopStep = value;
    }
    public get manualStopStep(): number {
        return this._manualStopStep;
    }
    public set manualStopStep(value: number) {
        this._manualStopStep = value;
    }
    public get autoStopTimeout(): number {
        return this._autoStopTimeout;
    }
    public set autoStopTimeout(value: number) {
        this._autoStopTimeout = value;
    }
    public get holdWinStopTimeout(): number {
        return this._holdWinStopTimeout;
    }
    public set holdWinStopTimeout(value: number) {
        this._holdWinStopTimeout = value;
    }
    public get skipHoldWin(): boolean {
        return this._skipHoldWin;
    }
    public set skipHoldWin(value: boolean) {
        this._skipHoldWin = value;
    }
}
