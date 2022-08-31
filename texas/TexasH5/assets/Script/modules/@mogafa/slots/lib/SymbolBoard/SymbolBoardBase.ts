import ReelBase from "./ReelBase";
import MaskBase from "../MaskBase";
import HoldWinBase from "./HoldWinBase";
import IWaitingResultsStrategy from "../IWaitingResultsStrategy";
import SymbolBoard from "./SymbolBoard";
import { SymbolBoardEvent } from "./SymbolBoardEvent";
import ReplaceSymbol from "./ReplaceSymbol";
import IPrizeShowStrategy from "../IPrizeShowStrategy";
import IPrizeShowSymbolBoard from "../IPrizeShowSymbolBoard";

import SlotGameStageBase from "../GameStage/SlotGameStageBase";
import { PrizeShowStatus } from "../PrizeShowStatus";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "./SymbolBoardStatus";
import { SlotGameStageStatus } from "../GameStage/SlotGameStageStatus";
import NumberOfKindBase from "../Common/NumberOfKindBase";
import { IResilienceMove } from "../IResilienceMove";
import FguiFullScreenBase from "../../../fairygui-component/lib/FguiFullScreenBase";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";
import NumberUtils from "../../../utils/lib/NumberUtils";
import SpinResultsSlot from "../../../../spin-result/SpinResultsSlot";
import { SpinResultsGameMode } from "../../../../spin-result/SpinResultsGameMode";
import SpinResultsEvent from "../../../../spin-result/SpinResultsEvent";
import SpinResultsSymbol from "../../../../spin-result/SpinResultsSymbol";
import SpinResultsWheel from "../../../../spin-result/SpinResultsWheel";
import SpinResultConst from "../../../../spin-result/SpinResultsConst";
import { SpinResultsEventCode } from "../../../../spin-result/SpinResultsEventCode";
import ViewBase from "../../../../../BaseFrame/ViewBase";

//#region prizeshow相关类
class PrizeShowSymbol {
    private _position: number;
    private _finishedTimes: number;
    private _expectedTimes: number;
    constructor(position: number, expectedTimes: number) {
        this._position = position;
        this._expectedTimes = expectedTimes;
        this._finishedTimes = 0;
    }
    public get position(): number {
        return this._position;
    }
    public get expectedTimes(): number {
        return this._expectedTimes;
    }
    public get finishedTimes(): number {
        return this._finishedTimes;
    }
    public finishedOnce(): boolean {
        this._finishedTimes++;
        return this._finishedTimes >= this._expectedTimes;
    }
}
class PrizeShowLine {
    private _symbols: PrizeShowSymbol[] = [];
    private _positions: number[] = [];
    private _finishedTimes: number;
    private _expectedTimes: number;
    constructor(symbol: PrizeShowSymbol[], expectedTimes: number) {
        this._symbols = symbol;
        this._expectedTimes = expectedTimes;
        this._finishedTimes = 0;
        if (!this._symbols) {
            this._symbols = [];
        }
        this._positions = [];
        for (let i = 0; i < this._symbols.length; i++) {
            const symbol = this._symbols[i];
            this._positions.push(symbol.position);
        }
    }
    public get symbol(): PrizeShowSymbol[] {
        return this._symbols;
    }
    public get positions(): number[] {
        return this._positions;
    }
    public get expectedTimes(): number {
        return this._expectedTimes;
    }
    public get finishedTimes(): number {
        return this._finishedTimes;
    }
    public finishedOnce(): boolean {
        this._finishedTimes++;
        return this._finishedTimes >= this._expectedTimes;
    }
}
class PrizeShowCellReward {
    private _position: number;
    private _symbolCode: number;
    private _assets: number;
    private _finished: boolean = false;
    constructor(position: number, symbolCode: number, assets: number) {
        this._position = position;
        this._symbolCode = symbolCode;
    }
    public get position(): number {
        return this._position;
    }
    public get symbolCode(): number {
        return this._symbolCode;
    }
    public get assets(): number {
        return this._assets;
    }
    public finish(): void {
        this._finished = true;
    }
}
class PrizeShow {
    private _lines: PrizeShowLine[] = [];
    private _chipAssets: PrizeShowCellReward[] = [];
    private _jackpotAssets: PrizeShowCellReward[] = [];

    constructor(lines: PrizeShowLine[], chipAssets: PrizeShowCellReward[], jackpotAssets: PrizeShowCellReward[]) {
        this._lines = lines;
        if (!this._lines) {
            this._lines = [];
        }
        this._chipAssets = chipAssets;
        if (!this._chipAssets) {
            this._chipAssets = [];
        }
        this._jackpotAssets = jackpotAssets;
        if (!this._jackpotAssets) {
            this._jackpotAssets = [];
        }
    }

    public get lines(): PrizeShowLine[] {
        return this._lines;
    }

    public get chipAssets(): PrizeShowCellReward[] {
        return this._chipAssets;
    }
    public get jackpotAssets(): PrizeShowCellReward[] {
        return this._jackpotAssets;
    }
    public getAllSymbols(): PrizeShowSymbol[] {
        const symbols: PrizeShowSymbol[] = [];
        if (!this._lines || this._lines.length == 0) {
            return symbols;
        }
        for (let i = 0; i < this._lines.length; i++) {
            const line = this._lines[i];
            for (let j = 0; j < line.symbol.length; j++) {
                const showSymbol = line.symbol[j];
                const symbol = symbols.find((c) => c.position == showSymbol.position);
                if (!symbol) {
                    symbols.push(showSymbol);
                }
            }
        }
        return symbols;
    }
}
//#endregion
export default abstract class SymbolBoardBase extends FguiFullScreenBase
    implements SymbolBoard, IPrizeShowSymbolBoard, MogafaSlots {
    public static className: string = "SymbolBoardBase";
    public lineIndex = 0
    /**
     * 关卡编码
     */
    private $stageCode: string;
    /**
     * ofKind连线弹框
     */
    protected ofKind: NumberOfKindBase;
    /**
     * ofKind连线数字
     */
    private _ofKindNumber: number;
    /**
     * 获取关卡编码
     */
    get stageCode(): string {
        return this.$stageCode;
    }
    /**
     * 设置关卡编码
     */
    set stageCode(value: string) {
        console.log("set stageCode")
        this.$stageCode = value;
        for (let i = 0; i < this._reels.length; i++) {
            this._reels[i].stageCode = value;
        }
        for (let i = 0; i < this._holdWins.length; i++) {
            this._holdWins[i].stageCode = value;
        }
    }

    private $defaultSlot: SpinResultsSlot;
    get defaultSlot(): SpinResultsSlot {
        return this.$defaultSlot;
    }
    set defaultSlot(val: SpinResultsSlot) {
        this.$defaultSlot = val;
        let codes: number[][] = this.$defaultSlot.columns.map((item, index) => {
            return item.cells
                .map((item1) => {
                    return item1.code;
                })
                .reverse();
        });
        let assets: number[][] = this.$defaultSlot.columns.map((item, index) => {
            return item.cells
                .map((item1) => {
                    return item1.assets;
                })
                .reverse();
        });
        for (let i = 0; i < codes.length; i++) {
            this.setFinalResultsImmediately(i, codes[i], assets[i]);
        }
    }

    /**
     * Status  of symbol base
     * 棋子状态
     */
    public $status: SymbolBoardStatus;
    get status(): SymbolBoardStatus {
        return this.$status;
    }
    set status(value: SymbolBoardStatus) {
       // console.log("SymbolBoardStatus===status==", value)
        this.$status = value;
        for (let i = 0; i < this._reels.length; i++) {
            this._reels[i].boardStatus = value;
        }
        for (let i = 0; i < this._holdWins.length; i++) {
            this._holdWins[i].boardStatus = value;
        }
        if (value == SymbolBoardStatus.Stopped || value == SymbolBoardStatus.Replacing) {
            if (this.needProcessEvents) {
                this.$status = SymbolBoardStatus.Replacing;
                this.replaceMockCodesInternal();
            } else if (this.hasMatchedLines) {
                this.$status = SymbolBoardStatus.PrizeShowing;
                this.startPrizeShow();
            } else if (
                (this.hasChipCellRewards || this.hasJackpotCellRewards) &&
                SlotGameStageBase.spinResults.gameMode == SpinResultsGameMode.Respin &&
                SlotGameStageBase.spinResults.nextGameMode != SpinResultsGameMode.Respin
            ) {
                this.$status = SymbolBoardStatus.Settling;
                this.startPrizeSettle();
            } else {
                this.$status = SymbolBoardStatus.Ready;
            }
        }
        if (value == SymbolBoardStatus.PrizeShowing) {
            if (this.hasMatchedLines) {
                this.$status = SymbolBoardStatus.PrizeShowing;
                this.startPrizeShow();
            } else if (
                (this.hasChipCellRewards || this.hasJackpotCellRewards) &&
                SlotGameStageBase.spinResults.gameMode == SpinResultsGameMode.Respin &&
                SlotGameStageBase.spinResults.nextGameMode != SpinResultsGameMode.Respin
            ) {
                this.$status = SymbolBoardStatus.Settling;
                this.startPrizeSettle();
            } else {
                this.$status = SymbolBoardStatus.Ready;
            }
        }
        if (value == SymbolBoardStatus.Settling) {
            if (this.hasChipCellRewards || this.hasJackpotCellRewards) {
                if (SlotGameStageBase.spinResults.gameMode == SpinResultsGameMode.Normal) {
                    this.$status = SymbolBoardStatus.Ready;
                } else {
                    this.startPrizeSettle();
                }
            } else {
                this.$status = SymbolBoardStatus.Ready;
            }
        }
        if (this.$status == SymbolBoardStatus.Ready) {
            //this.reset();
        }
        this.StatusChanged()
        // this.gameStage.receiveSymbolBoardStatusChanged(this._index, this.$status);
    }
    protected StatusChanged() { }
    canBeNextStatus(gameStageStatus: SlotGameStageStatus): boolean {
        let yes: boolean = true;
        switch (gameStageStatus) {
            case SlotGameStageStatus.Ready:
            case SlotGameStageStatus.RequestingServer:
            case SlotGameStageStatus.WaitingServerResults:
                yes = false;
                break;
            case SlotGameStageStatus.ServerResultsReceived: //下一状态为replacing
                yes = this.status > SymbolBoardStatus.Spinning || this.status == SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus.BoardsSpinning:
                yes = this.status > SymbolBoardStatus.Stopped || this.status == SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus.BoardsReplacing: //下一状态为prizeshowing
                yes = this.status > SymbolBoardStatus.Replacing || this.status == SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus.BoardsPrizeShowing: //下一状态为setting
                yes = this.status > SymbolBoardStatus.PrizeShowing || this.status == SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus.BoardsSettling:
                yes = this.status == SymbolBoardStatus.Ready;
                break;
        }
        return yes;
    }
    /**
     * 获取最大棋子编码
     */
    public abstract get maxCode(): number;
    /**
     * 是否自定义棋子替换流程
     */
    public get hasCustomReplaceCode(): boolean {
        return false;
    }
    /**
     * 转动时需要排除的棋子，其中key为gameMode
     * @example
     * 比如有些游戏在freespin中不允许再次触发freespin,
     * 那么在freespin转动中就需要排除scatter棋子
     * ```ts
     * protecte get excludeSymbols():{[key:number]:number[]}{
     *     return {SpinResultsGameType.FreeSpin:[Symbols.Scatter]};
     * }
     * ```ts
     */
    protected abstract get excludeChesses(): {
        [key: number]: number[];
    };
    /**
     * Gets chip symbol codes
     * 筹码棋子编号，如果没有返回空数组
     */
    protected abstract get chipSymbolCodes(): number[];
    /**
     * Gets jackpot symbol codes
     * jackpot棋子编号，如果没有返回空数组
     */
    protected abstract get jackpotSymbolCodes(): number[];
    finalCodes: number[][];

    /**
     * 轴列表
     */
    private _reels: ReelBase[] = [];
    protected _holdWins: HoldWinBase[] = [];
    protected _masks: MaskBase;
    protected _slotResults: SpinResultsSlot;
    private $waitingResultsStrategy: IWaitingResultsStrategy;
    private $fastWaitingResultsStrategy: IWaitingResultsStrategy;
    /**
     * 是否快速模式
     */
    private $isFast: boolean;
    private $symbolReplaced: ReplaceSymbol[] = [];
    private $customSymbolReplaced: ReplaceSymbol[] = [];
    private customReplacedCallback: Function;
    private replaceCodesOneByOne: boolean = false;
    private oneByOneCodes: { position: number; code: number }[] = [];
    private oneByOnePoisition: number = 0;
    /**
     *
     */
    public _index: number;
    //private _canBeSpinRequestWhenPrizeShow: boolean;
    private $chipCellRewards: { position: number; symbolCode: number; rewards: number }[] = [];
    private $jackpotCellRewards: { position: number; symbolCode: number; rewards: number }[] = [];
    private $replaceCodes: number[][] = [];

    /**
     * Next game mode of symbol board base
     * 下一局游戏模式
     */
    private nextGameMode: SpinResultsGameMode;
    /**
     * 最终格子位置映射
     */
    protected _finalCellPosition: {
        [key: number]: { x: number; y: number };
    } = {};
    protected _prizeShow: PrizeShow;
    protected _prizeShowChesses: PrizeShowSymbol[] = [];
    protected _prizeShowStrategy: IPrizeShowStrategy;
    protected _prizeShowStatus: PrizeShowStatus = PrizeShowStatus.Ready;
    private _matchedLines: number[][];
    private _gameStage: ViewBase;
    //#region  属性

    get gameStage(): ViewBase {
        return this._gameStage;
    }
    set gameStage(value: ViewBase) {
        this._gameStage = value;
    }
    public addFguiComponent<T extends FguiComponentBase>(type: { new(): T }, changeSize: boolean = true): T {
        let child = super.addFguiComponent(type, changeSize);

        if (child instanceof ReelBase) {
            const column = <ReelBase>(<any>child);
            column.index = this._reels.length;
            column.stageCode = this.stageCode;
            column.symbolBoard = this;
            this._reels.push(column);
        }
        if (child instanceof HoldWinBase) {
            const holdWin = <HoldWinBase>(<any>child);
            holdWin.index = this._holdWins.length;
            holdWin.stageCode = this.stageCode;
            holdWin.symbolBoard = this;
            this._holdWins.push(holdWin);
        }
        return child;
    }

    //#region  spin结果操作
    /**
     * 获取spin结果
     */
    public get slotResults(): SpinResultsSlot {
        return this._slotResults;
    }
    /**
     * 设置spin结果
     */
    public set slotResults(value: SpinResultsSlot) {
        console.log("set slotResults")
        this._slotResults = value;
        if (value) {
            this._ofKindNumber = value.ofAKind;
            for (let i = 0; i < value.columns.length; i++) {
                let resultColumn = value.columns[i];
                let column = this.getColumn(i);
                column.finalCodes = Object.assign([], resultColumn.codes);
                column.mockCodes = Object.assign([], resultColumn.replaceCodes);
                for (let j = 0; j < resultColumn.replaceCodes.length; j++) {
                    const mockCode = resultColumn.replaceCodes[j];
                    if (mockCode.length !== 0) {
                        this.$symbolReplaced.push(new ReplaceSymbol(i, j, mockCode.length));
                    }
                }
                const reel = this.getColumn(i);
                reel.spinResults = resultColumn;
            }
            this.$chipCellRewards = this.getChipCellRewards();
            this.$jackpotCellRewards = this.getJackpotCellRewards();
            this.$replaceCodes = value.replaceCodes; //this.getReplaceCodes();
            this.nextGameMode = value.nextGameMode;
            if (value.extraChesses && value.extraChesses.length > 0) {
                this.processExtraChesses(value.extraChesses);
            }
            if (value.events && value.events.length > 0) {
                this.processEvents(value.events);
            }
            const symbolEvents = this.getSymbolEvents();
            if (symbolEvents && symbolEvents.length > 0) {
                this.processSymbolEvents(this.getSymbolEvents());
            }
            this.fguiComponent.node.emit(SymbolBoardEvent.RESULTS_RECEIVED, value);
        }
    }
    public get matchedLines(): number[][] {
        if (this.slotResults) {
            this._matchedLines = this.slotResults.matchedLines;
        }
        if (!this._matchedLines) {
            this._matchedLines = [];
        }

        return this._matchedLines;
    }
    public get hasMatchedLines(): boolean {
        return this.matchedLines && this.matchedLines.length > 0;
    }
    public get replaceCodes(): number[][] {
        return this.$replaceCodes;
    }
    public get hasReplaceCodes(): boolean {
        return this.replaceCodes && this.replaceCodes.length > 0;
    }
    public get hasChipCellRewards(): boolean {
        return this.$chipCellRewards && this.$chipCellRewards.length > 0;
    }
    public get hasJackpotCellRewards(): boolean {
        return this.$jackpotCellRewards && this.$jackpotCellRewards.length > 0;
    }
    /**
     * 处理额外棋子，当收到服务器返回结果就会调用，
     * 收到后就开始处理额外棋子（比如海盗开始飞藏宝图）
     * 有些游戏这些棋子是表示无效的棋子（比如熊猫掉落到棋盘外面的棋子）
     * 掉落在棋盘内的额外棋子是在棋盘的棋子里面定义的
     * @param extraChesses 额外棋子，棋子的定义见各关卡数据结构说明
     */
    protected processExtraChesses(extraChesses: SpinResultsSymbol[]): void { }
    /**
     * 处理事件，当收到服务器返回结果时调用
     * （比如野牛冲刺事件）
     * @param events 事件列表，事件的定义见各关卡数据结构说明
     */
    protected processEvents(events: SpinResultsEvent[]): void { }
    /**
     * 处理棋子事件
     *
     * @param events 棋子事件列表，事件的定义见各关卡数据结构说明
     */
    protected processSymbolEvents(events: SymbolEvent[]): void { }

    protected get needProcessEvents(): boolean {
        return (
            this.hasReplaceCodes ||
            this.getSymbolEvents().length > 0 ||
            (this.getWeels() && this.getWeels().length > 0) ||
            (this.slotResults.extraChesses && this.slotResults.extraChesses.length > 0) ||
            (this.slotResults.events && this.slotResults.events.length > 0)
        );
    }
    /**
     * 获取事件
     */
    protected getEvents(): SpinResultsEvent[] {
        return this.slotResults.events;
    }
    /**
     * 获取额外棋子
     */
    protected getExtraChesses(): SpinResultsSymbol[] {
        return this.slotResults.extraChesses;
    }
    /**
     * 获取转盘，比如熊猫的转盘
     */
    protected getWeels(): SpinResultsWheel[] {
        return this.slotResults.wheels;
    }
    /**
     * 获取替换棋子列表
     *
     */
    protected getReplaceCodes(): number[][] {
        return this.slotResults.replaceCodes;
    }
    /**
     * 获取棋子事件
     */
    protected getSymbolEvents(): SymbolEvent[] {
        const events: SymbolEvent[] = [];
        let position: number = 0;
        for (let col = 0; col < this.slotResults.columns.length; col++) {
            const reel = this.slotResults.columns[col];
            for (let row = 0; row < reel.cells.length; row++) {
                const cell = reel.cells[row];
                if (cell.events && cell.events.length > 0) {
                    events.push(new SymbolEvent(cell.code, cell.assets, position, cell.events, cell.wheel));
                }
                position++;
            }
        }
        return events;
    }
    /**
     * 获取筹码棋子奖励
     */
    protected getChipCellRewards(): { position: number; symbolCode: number; rewards: number }[] {
        const rewards: { position: number; symbolCode: number; rewards: number }[] = [];
        let position: number = 0;
        for (let col = 0; col < this.slotResults.columns.length; col++) {
            const reel = this.slotResults.columns[col];
            for (let row = 0; row < reel.cells.length; row++) {
                const cell = reel.cells[row];
                if (this.isChipCode(cell.code)) {
                    rewards.push({ position: position, symbolCode: cell.code, rewards: cell.assets });
                }
                position++;
            }
        }
        return rewards;
    }
    /**
     * 获取jp棋子奖励
     */
    protected getJackpotCellRewards(): { position: number; symbolCode: number; rewards: number }[] {
        const rewards: { position: number; symbolCode: number; rewards: number }[] = [];
        let position: number = 0;
        for (let col = 0; col < this.slotResults.columns.length; col++) {
            const reel = this.slotResults.columns[col];
            for (let row = 0; row < reel.cells.length; row++) {
                const cell = reel.cells[row];
                if (this.isJackpotCode(cell.code)) {
                    rewards.push({ position: position, symbolCode: cell.code, rewards: cell.assets });
                }
                position++;
            }
        }
        return rewards;
    }
    private isChipCode(code: number): boolean {
        return this.chipSymbolCodes.indexOf(code) !== -1;
    }
    private isJackpotCode(code: number): boolean {
        return this.jackpotSymbolCodes.indexOf(code) !== -1;
    }
    //#endregion

    //#region 转动相关
    reelStartResilienceConfig(columnIndex: number, up: IResilienceMove, down: IResilienceMove): void {
        let column = this.getColumn(columnIndex);
        if (column) {
            column.setReelStartResilience(up, down);
        }
    }
    reelEndResilienceConfig(columnIndex: number, down: IResilienceMove, up: IResilienceMove): void {
        let column = this.getColumn(columnIndex);
        if (column) {
            column.setReelEndResilience(down, up);
        }
    }
    columnMoveY(columnIndex: number, step: number, code?: number): boolean {
        let column = this.getColumn(columnIndex);
        if (!column) {
            return false;
        }
        let parent = (this.parent as unknown) as SlotGameStageBase;
        return column.moveY(step, code);
    }
    cellMoveY(columnIndex: number, cellIndex: number, step: number, code?: number): boolean {
        const column = this.getColumn(columnIndex);
        if (!column) {
            return false;
        }
        return column.cellMoveY(cellIndex, step, code);
    }
    receiveCellStopped(reelIndex: number, cellIndex: number): void {
        this.fguiComponent.node.emit(SymbolBoardEvent.CELL_STOPPED, reelIndex, cellIndex);
    }
    receiveReelStopped(reelIndex: number): void {
        let allStopped: boolean = true;
        let reelCount = this._reels.length;
        if (reelCount === 0) {
            reelCount = this._holdWins.length;
        }
        for (let i = 0; i < reelCount; i++) {
            const reel = this.getColumn(i);
            //if (!reel.moveEnd) {
            if (reel.status != SymbolBoardStatus.Stopped) {
                allStopped = false;
                break;
            }
        }
        this.fguiComponent.node.emit(SymbolBoardEvent.COLUMN_STOPPED, reelIndex);
        if (allStopped) {
            this.afterChessboardStopped();
            this.status = SymbolBoardStatus.Stopped;
        }
    }
    //#endregion 转动相关

    //#region 棋子替换
    protected get symbolReplaced(): ReplaceSymbol[] {
        if (this.hasCustomReplaceCode) {
            return this.$customSymbolReplaced;
        }
        return this.$symbolReplaced;
    }
    protected set symbolReplaced(value: ReplaceSymbol[]) {
        if (this.hasCustomReplaceCode) {
            this.$customSymbolReplaced = value;
        } else {
            this.$symbolReplaced = value;
        }
    }
    private replaceMockCodesInternal(): void {
        if (this.hasCustomReplaceCode) {
            if (this.needProcessEvents) {
                this.replaceMockCodes(this.replaceCodes);
            } else {
                this.notifyMockCodesReplaced();
            }
        } else {
            this.replaceCodesOneByOne = false;
            let columns: number = this._reels.length;
            if (columns === 0) {
                columns = this._holdWins.length;
            }
            for (let i = 0; i < columns; i++) {
                const column = this.getColumn(i);
                column.replaceMockCodes();
            }
        }
    }

    /**
     * 替换棋子方法，关卡可以重写
     */
    protected replaceMockCodes(replaceCodes: number[][]): void { }
    /**
     * 替换指定的棋子
     * @remark
     * 所有棋子替换完成后，需要调用notifyMockCodesReplaced
     *
     * @param codes 需要替换的棋子列表，不需要替换的位置填-1
     * @param replacedCallback 替换完成后回调
     */
    protected replaceCustomMockeCodes(codes: number[], replacedCallback?: Function): void {
        if (!codes || codes.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
            return;
        }
        this.replaceCodesOneByOne = false;
        this.customReplacedCallback = replacedCallback;
        this.symbolReplaced = [];
        for (let i = 0; i < codes.length; i++) {
            const code = codes[i];
            if (code !== SpinResultConst.NO_MOCK_CODE) {
                const cell = this.getCellByFinalPosition(i);
                this.symbolReplaced.push(new ReplaceSymbol(cell.x, cell.y, 1));
            }
        }
        if (this.symbolReplaced.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
        }
        for (let i = 0; i < codes.length; i++) {
            const code = codes[i];
            if (code !== SpinResultConst.NO_MOCK_CODE) {
                const cell = this.getCellByFinalPosition(i);
                const reel = this.getColumn(cell.x);
                reel.replaceMockCodes(cell.y, code);
            }
        }
    }
    /**
     * 一个接一个替换棋子
     *
     * @param codes 替换棋子列表，不需要替换的位置填SpinResultConst.NO_MOCK_CODE
     * @param isRandom 是否随机替换
     * @param replacedCallback 替换完成后的回调
     */
    protected customReplaceCodesOneByOne(
        codes: number[],
        isRandom: boolean = true,
        replacedCallback: Function = null
    ): void {
        if (!codes || codes.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
            return;
        }
        this.customReplacedCallback = replacedCallback;
        this.replaceCodesOneByOne = true;
        this.symbolReplaced = [];
        for (let i = 0; i < codes.length; i++) {
            const code = codes[i];
            if (code !== SpinResultConst.NO_MOCK_CODE) {
                const cell = this.getCellByFinalPosition(i);
                this.symbolReplaced.push(new ReplaceSymbol(cell.x, cell.y, 1));
            }
        }
        if (this.symbolReplaced.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
        }
        this.oneByOnePoisition = 0;
        this.oneByOneCodes = [];
        if (isRandom) {
            for (let i = 0; i < codes.length; i++) {
                this.oneByOneCodes.push({ position: i, code: codes[i] });
            }
        } else {
            const randomNumbers: number[] = [];
            while (randomNumbers.length < codes.length) {
                const number = NumberUtils.random(0, codes.length - 1);
                if (randomNumbers.indexOf(number) === -1) {
                    randomNumbers.push(number);
                }
            }
            for (let i = 0; i < randomNumbers.length; i++) {
                const position = randomNumbers[i];
                this.oneByOneCodes.push({ position: position, code: codes[position] });
            }
        }
        this.replaceNextCode();
    }
    private replaceNextCode(): void {
        if (this.oneByOnePoisition >= this.oneByOneCodes.length) {
            this.checkAllCodesReplaced();
            return;
        }
        const nextCode = this.oneByOneCodes[this.oneByOnePoisition];
        this.oneByOnePoisition++;
        if (nextCode.code !== SpinResultConst.NO_MOCK_CODE) {
            const cell = this.getCellByFinalPosition(nextCode.position);
            const reel = this.getColumn(cell.x);
            reel.replaceMockCodes(cell.y, nextCode.code);
        } else {
            this.replaceNextCode();
        }
    }
    private checkAllCodesReplaced(): void {
        let mockChess = this.symbolReplaced.find((c) => c.replaced === false);
        if (!mockChess) {
            if (this.hasCustomReplaceCode) {
                if (this.customReplacedCallback) {
                    this.customReplacedCallback();
                }
            } else {
                this.notifyMockCodesReplaced();
            }
        }
    }

    receiveMockCodesReplaced(reelIndex: number, cellIndex: number): void {
        let replaceSymbol = this.symbolReplaced.find((c) => c.reel == reelIndex && c.cell == cellIndex);
        if (replaceSymbol) {
            replaceSymbol.replaceOnce();
        }
        if (this.replaceCodesOneByOne) {
            this.replaceNextCode();
        } else {
            this.checkAllCodesReplaced();
        }
    }
    protected notifyMockCodesReplaced() {
        this.symbolReplaced = [];
        this.status = SymbolBoardStatus.PrizeShowing;
        this.node.emit(SymbolBoardEvent.MOCK_CODE_REPLACED, this._index);
    }

    //#endregion

    public get waitingResultsStrategy(): IWaitingResultsStrategy {
        return this.$waitingResultsStrategy;
    }
    public set waitingResultsStrategy(waitingResultsStrategy: IWaitingResultsStrategy) {
        this.$waitingResultsStrategy = waitingResultsStrategy;
    }
    public get fastWaitingResultsStrategy(): IWaitingResultsStrategy {
        return this.$fastWaitingResultsStrategy;
    }
    public set fastWaitingResultsStrategy(waitingResultsStrategy: IWaitingResultsStrategy) {
        this.$fastWaitingResultsStrategy = waitingResultsStrategy;
    }
    public get isFast(): boolean {
        return this.$isFast;
    }
    public set isFast(isFast: boolean) {
        if (this.status != SymbolBoardStatus.Ready && this._prizeShowStatus != PrizeShowStatus.Ready) {
            cc.error(`只有在停止状态才能修改fast`);
            return;
        }
        this.$isFast = isFast;
    }

    public get index(): number {
        return this._index;
    }
    public set index(value: number) {
        this._index = value;
    }
    public get prizeShowStatus(): PrizeShowStatus {
        return this._prizeShowStatus;
    }
    public set prizeShowStatus(value: PrizeShowStatus) {
        this._prizeShowStatus = value;
    }
    //#endregion
    public reset() {
        this.unscheduleAllCallbacks();
        let columnCount = this._reels.length;
        if (columnCount === 0) {
            columnCount = this._holdWins.length;
            for (let i = 0; i < columnCount; i++) {
                const holdWin = this.getHoldWin(i);
                holdWin.reset();
            }
        }
        for (let i = 0; i < columnCount; i++) {
            const column = this.getColumn(i);
            column.reset();
        }
        //this._waitingResultsStatus = WaitingResultsStatus.Ready;
        this.$status = SymbolBoardStatus.Ready;
        this.prizeShowStatus = PrizeShowStatus.Ready;
        this.prizeLineShowFirst = true;
        this.slotResults = null;
        if (this.$waitingResultsStrategy) {
            this.$waitingResultsStrategy.reset();
        }
        if (this.$fastWaitingResultsStrategy) {
            this.$fastWaitingResultsStrategy.reset();
        }
        if (this._prizeShowStrategy) {
            this._prizeShowStrategy.reset();
        }
    }

    private processOfAKind(): void { }

    private onCellStopped(event: cc.Event.EventCustom): void { }
    /**
     * 棋盘转动结束后调用,可
     */
    protected afterChessboardStopped(): void {
        let parent = (this.parent as unknown) as SlotGameStageBase;
        let reelCount = this._reels.length;
        if (reelCount === 0) {
            reelCount = this._holdWins.length;
        }
        for (let i = 0; i < reelCount; i++) {
            const reel = this.getColumn(i);
            reel.notifyShowDoubleAssets();
        }
        this.executeNumberOfKind();
    }

    protected setAssetsAfterChessboardStopped(): void {
        this._reels.map((reel) => {
            reel.setAssetsAfterChessboardStopped();
        });
    }

    /**
     * 执行ofKind动画
     */
    protected executeNumberOfKind() {
        // this.ofKind.executeNumberOfKind(this._ofKindNumber);
    }

    /**
     * 开始等待结果
     */
    public startWaitingResults(): void {
        // if (
        //     this._waitingResultsStatus != WaitingResultsStatus.Ready &&
        //     this._waitingResultsStatus != WaitingResultsStatus.Stopped
        // ) {
        if (this.status != SymbolBoardStatus.Ready && this.status != SymbolBoardStatus.Spinning) {
            cc.error("只有在停止状态才能开始");
            return;
        }

        if (!this.waitingResultsStrategy) {
            cc.error("未设置转动策略");
            return;
        }
        this.reset();
        this.status = SymbolBoardStatus.Spinning;
        this.symbolBoardStart();
        this.beforeStartWaitingResults();
        const excludeCodes = this.excludeChesses[this.nextGameMode];
        if (this.isFast) {
            if (!this.fastWaitingResultsStrategy) {
                cc.warn("未设置快速转动策略，使用普通转动策略");
                this.fastWaitingResultsStrategy = this.waitingResultsStrategy;
            }
            this.fastWaitingResultsStrategy.startWaiting(excludeCodes);
        } else {
            this.waitingResultsStrategy.startWaiting(excludeCodes);
        }
    }
    /**
     * 棋盘开始自定义事件
     */
    public symbolBoardStart(): void {
        //* 播放棋盘开始音效
        // SoundMgr.getInstance().playEffect("symbol_board_start", false);
    }
    public beforeStartWaitingResults(): void {
        for (let column of this._reels) {
            column.beforeStartWaitingResults();
        }
        for (let holdWin of this._holdWins) {
            holdWin.beforeStartWaitingResults();
        }
        this.status = SymbolBoardStatus.Spinning;
    }
    beforeStopWaitingResults(): void {
        // this.status = SymbolBoardStatus.;
        // for (let column of this._reels) {
        //     column.beforeStopWaitingResults();
        // }
        // for (let holdWin of this._holdWins) {
        //     holdWin.beforeStopWaitingResults();
        // }
    }
    canStop(): boolean {
        return true;
    }
    public stopWaitingResults(): void {
        if (this.status != SymbolBoardStatus.Spinning) {
            cc.error("只有在等待状态才能停止");
            return;
        }
        if (this.canStop()) {
            if (this.isFast) {
                this.fastWaitingResultsStrategy.stopWaiting(true);
            } else {
                this.waitingResultsStrategy.stopWaiting(true);
            }
        }
    }
    private getHoldWin(columnIndex: number): HoldWinBase {
        if (!this._holdWins || this._holdWins.length == 0) {
            return null;
        }
        if (columnIndex < 0 || columnIndex >= this._holdWins.length) {
            cc.error(`索引${columnIndex}超出范围了`);
            return null;
        }
        return this._holdWins[columnIndex];
    }
    protected getColumn(columnIndex: number): ReelBase {
        const holdWin = this.getHoldWin(columnIndex);
        let column: ReelBase = null;
        if (holdWin) {
            column = holdWin.column;
        }
        if (!column) {
            if (columnIndex < 0 || columnIndex >= this._reels.length) {
                cc.error(`索引${columnIndex}超出范围了`);
                return null;
            }
            column = this._reels[columnIndex];
        }
        return column;
    }

    getColumnExtraCellCount(columnIndex: number): { top: number; bottom: number } {
        const column = this.getColumn(columnIndex);
        return column.getExtraCellCount();
    }
    columnHoldWin(columnIndex: number): void {
        const holdWin = this.getHoldWin(columnIndex);
        if (!holdWin) {
            return;
        }
        //* 在执行当前轴的holdwin时，需要先把之前的holdwin效果清除掉
        let holdWins = this._holdWins.filter((h) => h.index < columnIndex);
        holdWins.map((item, index) => {
            if (item.isHoldWin) {
                item.unholdWin(index);
            }
        });
        holdWin.holdWin();
    }
    cellHoldWin(reelIndex: number, cellIndex: number): void {
        const reel = this.getColumn(reelIndex);
        reel.cellHoldWin(cellIndex);
    }
    unCellHoldWin(reelIndex: number, cellIndex: number): void {
        const reel = this.getColumn(reelIndex);
        reel.unCellHoldWin(cellIndex);
    }
    setFinalResultsImmediately(columnIndex: number, codes: number[], assets: number[]): void {
        const column = this.getColumn(columnIndex);
        if (!column) {
            return;
        }
        column.setFinalResultsImmediately(codes, assets);
    }
    setFinalResultImmediately(columnIndex: number, cellIndex: number, code: number): void {
        const column = this.getColumn(columnIndex);
        if (!column) {
            return;
        }
        column.setFinalResultImmediately(cellIndex, code);
    }
    onResultsReceived(listener: Function, target?: any): void {
        this.fguiComponent.node.on(SymbolBoardEvent.RESULTS_RECEIVED, listener, target);
    }
    offResultsReceived(listener: Function, target?: any): void {
        this.fguiComponent.node.off(SymbolBoardEvent.RESULTS_RECEIVED, listener, target);
    }
    clearResultsReceived(): void {
        this.fguiComponent.node.off(SymbolBoardEvent.RESULTS_RECEIVED);
    }
    onCellResultSet(listener: Function, target?: any): void {
        this.fguiComponent.node.on(SymbolBoardEvent.CELL_STOPPED, listener, target);
    }
    offCellResultSet(listener: Function, target?: any): void {
        this.fguiComponent.node.off(SymbolBoardEvent.CELL_STOPPED, listener, target);
    }
    clearCellResultSet(): void {
        this.fguiComponent.node.off(SymbolBoardEvent.CELL_STOPPED);
    }
    onColumnResultsSet(listener: Function, target?: any): void {
        this.fguiComponent.node.on(SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    }
    offColumnResultsSet(listener: Function, target?: any): void {
        this.fguiComponent.node.off(SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    }
    clearColumnResultsSet(): void {
        this.fguiComponent.node.off(SymbolBoardEvent.COLUMN_STOPPED);
    }
    onResultsSet(listener: Function, target?: any): void {
        this.fguiComponent.node.on(SymbolBoardEvent.CHESSBOARD_STOPPED, listener, target);
    }
    offResultsSet(listener: Function, target?: any): void {
        this.fguiComponent.node.off(SymbolBoardEvent.CHESSBOARD_STOPPED, listener, target);
    }
    clearResultsSet(): void {
        this.fguiComponent.node.off(SymbolBoardEvent.CHESSBOARD_STOPPED);
    }

    //#region 中奖效果展示
    public get chipCellRewards(): { position: number; symbolCode: number; rewards: number }[] {
        return this.$chipCellRewards;
    }
    public set chipCellRewards(value: { position: number; symbolCode: number; rewards: number }[]) {
        this.$chipCellRewards = value;
    }
    public get jackpotCellRewards(): { position: number; symbolCode: number; rewards: number }[] {
        return this.$jackpotCellRewards;
    }
    protected beforePrizeShow(): void {
        this.prizeShowStatus = PrizeShowStatus.Showing;
    }
    /**
     * 5、6、7连展示
     *
     * @param number 相同棋子数
     */
    ofAKindShow(number: number): void { }
    /**
     * 中奖连线展示
     *
     * @param lines 需要展示中奖效果的线列表
     * @param times 需要展示的次数，0表示一直展示
     */
    prizeLineShow(lines: number[][], times: number): void {
        const prizeShow = this.convert2PrizeLineShow(lines, times);
        this._prizeShowChesses = prizeShow.getAllSymbols();
        for (let i = 0; i < this._prizeShowChesses.length; i++) {
            const position = this._prizeShowChesses[i].position;
            let cellPoint = this.getCellByFinalPosition(position);
            const column = this.getColumn(cellPoint.x);
            if (!column) {
                cc.error(`列${cellPoint.x}未找到`);
                return;
            }
            column.prizeShow(position, cellPoint.y);
        }
    }
    private convert2PrizeLineShow(lines: number[][], times: number): PrizeShow {
        const prizeLines: PrizeShowLine[] = [];
        const chipAssets: PrizeShowCellReward[] = [];
        const jackpotRewards: PrizeShowCellReward[] = [];
        if (lines == undefined) {
            console.log(lines);
        } else {
            for (let i = 0; i < lines.length; i++) {

                let chesses: PrizeShowSymbol[] = [];
                if (lines[i]) {
                    for (let j = 0; j < lines[i].length; j++) {
                        chesses.push(new PrizeShowSymbol(lines[i][j], times));
                    }
                } else {
                    console.log(lines[i]);
                }

                prizeLines.push(new PrizeShowLine(chesses, times));
            }
        }
        let prizeShow = new PrizeShow(prizeLines, chipAssets, jackpotRewards);
        return prizeShow;
    }
    private _prizeLineShowFirst: boolean = true;
    protected get prizeLineShowFirst(): boolean {
        return this._prizeLineShowFirst;
    }
    protected set prizeLineShowFirst(value: boolean) {
        if (!value && this.status != SymbolBoardStatus.PrizeShowing) {
            this._prizeLineShowFirst = false;
        }
        this._prizeLineShowFirst = value;
    }
    receivePrizeShowCompleted(position: number): void {
        let chess = this._prizeShowChesses.find((c) => c.position == position);
        if (chess) {
            chess.finishedOnce();
        }
        let allCompletedOnce = this.checkAllChessesPrizeShowCompleted();
        if (allCompletedOnce) {
            if (this.prizeLineShowFirst && this.status >= SymbolBoardStatus.Stopped) {
                this.status = SymbolBoardStatus.Settling;
                this.prizeLineShowFirst = false;
            }
            this.notifyPrizeLineShowCompletedOnce();
        } else if (chess.finishedTimes < chess.expectedTimes) {
            //展示次数不够继续展示
            let cellPoint = this.getCellByFinalPosition(position);
            this.getColumn(cellPoint.x).prizeShow(position, cellPoint.y);
        }
    }
    receiveAllCellRewardsSettled(): void {
        this.status = SymbolBoardStatus.Ready;
        if (this.parent) {
            let parent = (this.parent as unknown) as SlotGameStageBase;
            if (parent) {
                parent.receivePrizeShowCompleted(this._index);
            }
        }
    }
    private checkAllChessesPrizeShowCompleted(): boolean {
        let chess = this._prizeShowChesses.find((c) => c.finishedTimes < c.expectedTimes);
        return !chess;
    }
    //! 修改成protected属性，是为了子类重载此方法，
    //! 获取播放连线的生命周期，然后在此生命周期中播放音效
    protected startPrizeShow(): void {
        this.beforePrizeShow();
        this._prizeShowStrategy.startShow();
        //* 棋盘触发底部栏设置win框金币事件
        this.node.emit("BOTTOM_BAR_SET_WIN_COINS");
    }
    protected startPrizeSettle(): void {
        this.beforePrizeShow();
        this._prizeShowStrategy.startSettle();
    }
    /**
     *
     * @param position
     * @param symbolCode
     * @param assets
     */
    prizeChipCellSettle(position: number, symbolCode: number, assets: number): void {
        //todo 筹码结算
        console.log("筹码结算过程");
        let cell = this.getCellByFinalPosition(position);
        let reel = this.getColumn(cell.x);
        reel.prizeChipCellSettle(position, symbolCode, assets, this.prizeChipCellSettleCallback.bind(this));
    }
    /**
     * 筹码棋子结算完毕后的回调
     */
    prizeChipCellSettleCallback() {
        this.notifyPrizeCellSettleCompletedOnce();
    }
    prizeJackpotCellSettle(position: number, symbolCode: number, assets: number): void {
        //
        console.log("jackpot弹窗展示");
        setTimeout(() => {
            this.notifyPrizeCellSettleCompletedOnce();
        }, 1000);
    }
    private notifyPrizeLineShowCompletedOnce(): void {
        this.node.emit(SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE);
    }
    onPrizeLineShowCompletedOnce(listener: Function, target?: any): void {
        this.node.on(SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE, listener, target);
    }
    offPrizeLineShowCompletedOnce(listener: Function, target?: any): void {
        this.node.off(SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE, listener, target);
    }
    clearPrizeLineShowCompletedOnce(): void {
        this.node.off(SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE);
    }

    protected notifyPrizeCellSettleCompletedOnce(): void {
        this.node.emit(SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE);
    }
    onCellRewardSettledOnce(listener: Function, target?: any): void {
        this.node.on(SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE, listener, target);
    }
    offCellRewardSettledOnce(listener: Function, target?: any): void {
        this.node.off(SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE, listener, target);
    }
    clearCellRewardSettledOnce(): void {
        this.node.off(SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE);
    }
    //#endregion 中奖效果展示
    /**
     * 根据最终位置获取格子的坐标
     * @param position 位置
     */
    protected getCellByFinalPosition(position: number): { x: number; y: number } {
        if (this._finalCellPosition[position]) {
            return this._finalCellPosition[position];
        }
        let columns = this._reels.length;
        if (columns === 0) {
            columns = this._holdWins.length;
        }
        let allPosition: number = -1;
        let cell: { x: number; y: number } = { x: 0, y: 0 };
        for (let x = 0; x < columns; x++) {
            const column = this.getColumn(x);
            const finalCellCount = column.cells.length - column.topExtraCells - column.bottomExtraCells;
            allPosition = allPosition + finalCellCount;
            if (allPosition >= position) {
                cell.x = x;
                cell.y = finalCellCount - (allPosition - position) - 1 + column.topExtraCells;
                this._finalCellPosition[position] = cell;
                break;
            }
        }
        return cell;
    }

    //#region 结果处理

    //#endregion

    //#region  流程控制
    onBeforeStartWaitingResults(): boolean {
        return true;
    }
    onBeforeStopWaitingResults(): boolean {
        return true;
    }
    //#endregion
    //#region 控制器操作
    public setReelControllerProperty(reelIndex: number, controllerName: string, code: number): void {
        let reel = this.getColumn(reelIndex);
        if (!reel) {
            cc.error("未找到列");
            return;
        }
        reel.setControllerProperty(controllerName, code);
    }
    /**
     * 设置格子的控制器值
     *
     * @param position 位置
     * @param controllerName 控制器名称
     * @param code 代码
     */
    public setCellControllerProperty(position: number, controllerName: string, code: number): void;
    /**
     * 设置格子的控制器值
     *
     * @param reelIndex 列索引
     * @param cellIndex 单元格索引
     * @param controllerName 控制器名称
     * @param code 代码
     */
    public setCellControllerProperty(reelIndex: number, cellIndex: number, controllerName: string, code: number): void;
    public setCellControllerProperty(
        reelIndex: number,
        cellIndex: number | string,
        controllerName: string | number,
        code?: number
    ): void {
        if (typeof cellIndex === "number") {
            let reel = this.getColumn(reelIndex);
            if (!reel) {
                cc.error("未找到列");
                return;
            }
            reel.setCellControllerProperty(cellIndex as number, controllerName as string, code);
            return;
        }
        const cell = this.getCellByFinalPosition(reelIndex);
        this.setCellControllerProperty(cell.x, cell.y, cellIndex, controllerName as number);
    }
    /**
     * 设置格子的控制器值
     *
     * @param position 位置
     * @param controllerName 控制器名称
     * @param code 代码
     */
    public setSymbolControllerProperty(position: number, controllerName: string, code: number): void;
    /**
     * 设置棋子的控制器值
     *
     * @param reelIndex 列索引
     * @param cellIndex 单元格索引
     * @param controllerName 控制器名称
     * @param code 代码
     */
    public setSymbolControllerProperty(
        reelIndex: number,
        cellIndex: number,
        controllerName: string,
        code: number
    ): void;
    public setSymbolControllerProperty(
        reelIndex: number,
        cellIndex: number | string,
        controllerName: string | number,
        code?: number
    ): void {
        if (typeof cellIndex === "number") {
            let reel = this.getColumn(reelIndex);
            if (!reel) {
                cc.error("未找到列");
                return;
            }
            reel.setSymbolControllerProperty(cellIndex as number, controllerName as string, code);
            return;
        }
        const cell = this.getCellByFinalPosition(reelIndex);
        this.setSymbolControllerProperty(cell.x, cell.y, cellIndex, controllerName as number);
    }
    //#endregion
    public playSpineByConfig(reelIndex: number, cellIndex: number, configName: string, callback?: Function): void {
        const reel = this.getColumn(reelIndex);
        reel.playSpineByConfig(cellIndex, configName, callback);
    }
    public playSpineByConfigAndPosition(position: number, configName: string, callback?: Function): void {
        const cell = this.getCellByFinalPosition(position);
        this.playSpineByConfig(cell.x, cell.y, configName, callback);
    }
    private positionsShowCallback: Function = null;
    private positionsShowCompletedOnce: boolean = false;
    /**
     * 播放指定位置上的指定配置的spine动效，同时播放，任一播放结束就调用回调
     * @param positions 播放棋子位置列表：[5,9,10]
     * @param configName 配置名称
     * @param callback 回调
     */
    public playSpineByConfigAndPositions(positions: number[], configName: string, callback?: Function): void {
        this.positionsShowCallback = callback;
        this.positionsShowCompletedOnce = false;
        for (let i = 0; i < positions.length; i++) {
            const cell = this.getCellByFinalPosition(positions[i]);
            this.playSpineByConfig(cell.x, cell.y, configName, this.positionShowCompletedOnce.bind(this));
        }
    }
    private positionShowCompletedOnce(): void {
        if (!this.positionsShowCompletedOnce) {
            this.positionsShowCompletedOnce = true;
            if (this.positionsShowCallback) {
                this.positionsShowCallback();
            }
        }
    }
    /**
     * Gets free mode show config name
     * 播放进入免费游戏前需要播放的spine动画配置名称
     */
    protected get freeModeShowConfigName(): string {
        return "";
    }
    /**
     * Gets play enter free mode show delay
     * 进入免费游戏前需要播放的棋子spine动画延迟时间,单位：毫秒
     */
    protected get playEnterFreeModeShowDelay(): number {
        return 500;
    }
    /**
     * Plays enter free mode show
     * 播放进入免费模式前的棋子动效
     * @param [callback] 回调
     * @returns true if enter free mode show
     */
    public playEnterFreeModeShow(callback?: Function, code?: number): boolean {
        const events = this.getSymbolEvents();
        let scatterEvents = events.filter((e) =>
            e.events.find(
                (ee) =>
                    ee.code == SpinResultsEventCode.Free ||
                    ee.code == SpinResultsEventCode.OneMore ||
                    ee.code == SpinResultsEventCode.Respin ||
                    ee.code == SpinResultsEventCode.Bonus
            )
        );

        if (code) {
            scatterEvents = events.filter((e) =>
                e.events.find(
                    (ee) => ee.code == code
                )
            );
        }
        if (!this.freeModeShowConfigName || !scatterEvents || scatterEvents.length == 0) {
            console.log("playEnterFreeModeShow return false")
            return false;
        }
        const positions: number[] = [];
        for (let i = 0; i < scatterEvents.length; i++) {
            positions.push(scatterEvents[i].position);
        }
        setTimeout(() => {
            this.playSpineByConfigAndPositions(positions, this.freeModeShowConfigName, callback);
        }, this.playEnterFreeModeShowDelay);
        console.log("playEnterFreeModeShow return true")
        return true;
    }
    doubleChessShow(): void {
        let columns = this._reels.length;
        if (columns === 0) {
            columns = this._holdWins.length;
        }
        for (let i = 0; i < columns; i++) {
            this.getColumn(i).doubleChessShow();
        }
    }
}

export class SymbolEvent {
    private _code: number;
    private _assets: number;
    private _postion: number;
    private _events: SpinResultsEvent[] = [];
    private _wheel: SpinResultsWheel;
    constructor(code: number, assets: number, position: number, events: SpinResultsEvent[], wheel: SpinResultsWheel) {
        this._code = code;
        this._assets = assets;
        this._postion = position;
        this._events = events;
        if (!this._events) {
            this._events = [];
        }
        this._wheel = wheel;
    }
    public get code(): number {
        return this._code;
    }
    public get assets(): number {
        return this._assets;
    }
    public get position(): number {
        return this._postion;
    }
    public get events(): SpinResultsEvent[] {
        return this._events;
    }
    public get wheel(): SpinResultsWheel {
        return this._wheel;
    }
}
