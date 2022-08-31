import CellBase from "./CellBase";
//import { fgui } from "fairygui";
import { SymbolBoardEvent } from "./SymbolBoardEvent";
import HoldWinBase from "./HoldWinBase";
import SymbolBoardBase from "./SymbolBoardBase";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "./SymbolBoardStatus";

import { IResilienceMove } from "../IResilienceMove";
import SlotGameStageBase from "../GameStage/SlotGameStageBase";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";
import NumberUtils from "../../../utils/lib/NumberUtils";
import SpinResultsColumn from "../../../../spin-result/SpinResultsColumn";


export default abstract class ReelBase extends FguiComponentBase implements MogafaSlots {
    /**
     * 关卡编码
     */
    private _stageCode: string;
    /**
     * 所属holdWin
     */
    private _holdWin: HoldWinBase;
    /**
     * 所属棋盘
     */
    private _symbolBoard: SymbolBoardBase;
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
     * 能否结束回弹
     */
    private _canEndResilience: boolean = true;
    /**
     * 获取关卡编码
     */
    get stageCode(): string {
        return this._stageCode;
    }
    /**
     * 设置关卡编码
     */
    set stageCode(value: string) {
        this._stageCode = value;

        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].stageCode = value;
        }
        for (let i = 0; i < this._mustBeFixedCells.length; i++) {
            this._mustBeFixedCells[i].stageCode = value;
        }
    }
    /**
     * 设置holdWin
     */
    get holdWin(): HoldWinBase {
        return this._holdWin;
    }
    /**
     * 获取holdWin
     */
    set holdWin(value: HoldWinBase) {
        this._holdWin = value;
    }
    /**
     * 获取棋盘
     */
    get symbolBoard(): SymbolBoardBase {
        return this._symbolBoard;
    }
    /**
     * Sets symbol board
     * 设置棋盘
     */
    set symbolBoard(value: SymbolBoardBase) {
        this._symbolBoard = value;
    }
    /**
     * Board status of symbol base
     * 棋盘状态
     */
    private _boardStatus: SymbolBoardStatus;
    get boardStatus(): SymbolBoardStatus {
        return this._boardStatus;
    }
    set boardStatus(value: SymbolBoardStatus) {
        this._boardStatus = value;
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].boardStatus = value;
        }
        this.status = value;
    }

    /**
     * Status  of symbol base
     * 棋子状态
     */
    private _status: SymbolBoardStatus;
    get status(): SymbolBoardStatus {
        return this._status;
    }
    set status(value: SymbolBoardStatus) {
        this._status = value;
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].status = value;
        }
    }
    /**
     * 能否结束回弹
     */
    set canEndResilience(value: boolean) {
        this._canEndResilience = value
    }
    get canEndResilience(): boolean {
        return this._canEndResilience
    }
    protected abstract get maxCode(): number;
    protected abstract get maskComponentName(): string;
    /**
     * 最下面一个格子的Y坐标（包含用于转动的多余的格子）
     */
    protected abstract get theFinalBottomCellY(): number;
    protected _cells: CellBase[] = [];
    protected _finalCodes: number[] = [];
    private _finalFixeds: boolean[] = [];
    private _finalFixedsReseted: boolean = false;
    private _nextFixeds: boolean[] = [];
    private _fixedUuids: string[] = [];
    private _fixedPositions: number[] = [];
    private _mustBeFixedCells: CellBase[] = [];
    protected _mockCodes: number[][] = [];
    private _mask: fgui.GObject;
    private _moveEnd: boolean;
    private _index: number;
    private isFirstMove: boolean;

    public get cells(): CellBase[] {
        return this._cells;
    }
    protected get mustBeFixedCells(): CellBase[] {
        return this._mustBeFixedCells;
    }
    public set index(value: number) {
        this._index = value;
    }
    public get index(): number {
        return this._index;
    }
    // public get moveEnd(): boolean {
    //     return this._moveEnd;
    // }
    public get finalCodes(): number[] {
        return this._finalCodes;
    }
    public set finalCodes(value: number[]) {
        this._finalCodes = value;
        if (!this._finalCodes) {
            this._finalCodes = [];
        }
    }
    public get mockCodes(): number[][] {
        return this._mockCodes;
    }
    public set mockCodes(value: number[][]) {
        this._mockCodes = value;
        if (!this._mockCodes) {
            this._mockCodes = [];
        }
    }
    /**
     * 用于转动的顶部多余的格子数
     */
    public get topExtraCells(): number {
        return 1;
    }
    /**
     * 用于转动的底部多余的格子数
     */
    public get bottomExtraCells(): number {
        return 0;
    }
    private reelResults: SpinResultsColumn;
    public set spinResults(value: SpinResultsColumn) {
        this.reelResults = value;
        this._nextFixeds = [];
        for (let i = 0; i < value.cells.length; i++) {
            const cell = this.cells[i + this.topExtraCells];
            cell.spinResult = value.cells[i];
            this._nextFixeds.push(value.cells[i].fixed);
            if (this.mustBeFixedCells && this.mustBeFixedCells.length > 0) {
                this.mustBeFixedCells[i].spinResult = value.cells[i];
            }
        }
    }
    protected createChildComponents() {
        super.createChildComponents();
        this._mask = this.fguiComponent.mask;
        this.fguiComponent.setMask(null, false);
    }
    public addFguiComponent<T extends FguiComponentBase>(type: { new(): T }, changeSize: boolean = true): T {
        let child = super.addFguiComponent(type, changeSize);
        if (child instanceof CellBase) {
            const cell = (child as unknown) as CellBase;
            cell.stageCode = this.stageCode;
            cell.reel = this;
            this._cells.push(cell);
            cell.index = this._cells.length - 1;
            cell.mogafaId = cell.index.toString();
        }
        return child;
    }
    public beforeStartWaitingResults(): void {
        this._moveEnd = false;
        //this.fguiComponent.setMask(this._mask, false);
    }
    public beforeStopWaitingResults(): void { }
    protected afterStopWaitingResults(): void {
        //this.fguiComponent.setMask(null, false);
        const parent = this.parent;
        if (parent && parent instanceof HoldWinBase) {
            <HoldWinBase>(<any>parent.unholdWin(this.index));
        }
    }
    public replaceMockCodes(cellIndex?: number, code?: number): void {
        if (cellIndex != null && code != null) {
            const cell = this.getCell(cellIndex);
            cell.replaceMockCodeInternal(code);
            return;
        }
        let finalIndex = 0;
        for (let i = 0; i < this.finalCodes.length; i++) {
            let cell = this.getFinalCell(i);
            if (cell) {
                cell.index = finalIndex;
                let finalCode = this._finalCodes[i];
                cell.finalCode = finalCode;
                cell.mockCodes = this.mockCodes[i];
                if (cell.mockCodes && cell.mockCodes.length > 0) {
                    cell.replaceMockCodeInternal();
                }
            }
        }
    }
    setReelStartResilience(up: IResilienceMove, down: IResilienceMove) {
        this._startUpResilience = up;
        this._startDownResilience = down;
    }
    setReelEndResilience(down: IResilienceMove, up: IResilienceMove) {
        this._endDownResilience = down;
        this._endUpResilience = up;
    }
    reelStartResilience() {
        this.startResilienced = false;
        this.sortCell();
        //todo 第一次启动回弹移动到末尾的第一个棋子未显示的原因是当前的code为undefined
        //todo 因此临时的给当前棋子随机赋一个值
        this.cells[0].code = NumberUtils.random(0, 11);
        this.cells[0].fguiY = this.cells[this.cells.length - 1].fguiY + this.cells[0].fguiHeight;
        let action = cc.sequence(
            cc.moveTo(
                this._startUpResilience.duration,
                this._startUpResilience.xPosition,
                this._startUpResilience.yPosition
            ),
            cc.moveTo(
                this._startDownResilience.duration,
                this._startDownResilience.xPosition,
                this._startDownResilience.yPosition
            ),
            cc.callFunc(() => {
                this.startResilienced = true;
                this.stopResilienced = false;
                this.fguiComponent.setMask(this._mask, false);
            })
        );
        this.holdWin.showMask();
        this.fguiComponent.node.runAction(action);
    }
    reelStopResilience() {
        this.sortCell();
        this.cells[0].fguiComponent.visible = true;
        if (!this.canEndResilience) {
            this.canEndResilience = true;
            return;
        }
        let action = cc.sequence(
            cc.moveTo(
                this._endDownResilience.duration,
                this._endDownResilience.xPosition,
                this._endDownResilience.yPosition
            ),
            cc.moveTo(this._endUpResilience.duration, this._endUpResilience.xPosition, this._endUpResilience.yPosition),
            cc.callFunc(() => {
                if (this._startUpResilience && this._startDownResilience) {
                    this.startResilienced = false;
                    this.stopResilienced = true;
                    // this.cells[0].fguiComponent.visible = false;
                    this.holdWin.hideMask();
                } else {
                    this.holdWin.showMask();
                }
            })
        );
        this.fguiComponent.node.runAction(action);
    }
    private startResilienced: boolean = true;
    private stopResilienced: boolean = false;
    private firstMove(): void {
        this._fixedUuids = [];
        this._fixedPositions = [];
        if (this._startUpResilience && this._startDownResilience) {
            this.reelStartResilience();
        }
        //* 设置一个布尔变量，每次spin时只让一个固定棋子触发效果
        //todo 目前暂时只有埃及这个关卡有这个需求，若要优化需要将转轴基类抽离的更纯粹
        //todo 只涉及最基本的spin，其余的特殊功能全部通过继承实现
        let respinFlag: boolean = true;
        for (let i = 0; i < this._cells.length; i++) {
            const cell = this._cells[i];
            cell.startMove();
            if (!cell.fguiComponent.visible) {
                cell.fguiComponent.visible = true;
            }
            if (this.mustBeFixedCells && this.mustBeFixedCells.length > 0 && i >= this.topExtraCells) {
                const fixedCell = this.mustBeFixedCells[i - this.topExtraCells];
                if (this._finalFixeds[i - this.topExtraCells]) {
                    fixedCell.code = cell.code;
                    if (respinFlag) {
                        fixedCell.fixedCellShow();
                    }
                    respinFlag = false;
                    fixedCell.fguiComponent.visible = true;
                } else {
                    fixedCell.fixedCellHide();
                    fixedCell.fguiComponent.visible = false;
                }
            }
        }
    }
    public moveY(step: number, code?: number): boolean {
        if (this._moveEnd) {
            return false;
        }
        if (this.isFirstMove) {
            this.firstMove();
            this.isFirstMove = false;
        }
        if (!this.startResilienced) {
            return false;
        }
        this.holdWin.showMask();
        this.sortCell();
        const theTopCell = this._cells[0];
        const theBottomCell = this._cells[this._cells.length - 1];
        if (theBottomCell.isFinal) {
            if (theBottomCell.fguiY + step >= this.theFinalBottomCellY) {
                step = this.theFinalBottomCellY - theBottomCell.fguiY;
                this._moveEnd = true;
            }
        }
        for (let i = 0; i < this._cells.length; i++) {
            const cell = this._cells[i];
            cell.fguiY += step;
        }
        if (this._moveEnd) {
            theTopCell.fguiComponent.visible = false;
            this.status = SymbolBoardStatus.Stopped;
            if (this._endDownResilience && this._endUpResilience) {
                this.reelStopResilience();
            }

            if (this._endDownResilience && this._endUpResilience && this.stopResilienced) {
                return false;
            }
            this.notifyReelStopped(this._index);
            this.status = SymbolBoardStatus.Stopped;
            this.isFirstMove = true;
            this.fguiComponent.setMask(null, false);
            // this.holdWin.hideMask();
            this._finalFixeds = this._finalFixeds || [];
            for (let i = 0; i < this._nextFixeds.length; i++) {
                if (this._finalFixeds[i] === true) {
                    continue;
                }
                this._finalFixeds[i] = this._nextFixeds[i];
            }
            // if (SlotGameStageBase.spinResults.nextGameMode < 1) {
            //     //todo 暂时用延时处理，完善做法应该是在holdwin基类中的receiveReelStopped的方法来触发
            //     this.scheduleOnce(() => {
            //         for (let i = 0; i < this._cells.length; i++) {
            //             if (this.mustBeFixedCells && this.mustBeFixedCells.length > 0 && i >= this.topExtraCells) {
            //                 const fixedCell = this.mustBeFixedCells[i - this.topExtraCells];
            //                 fixedCell.fixedCellHide();
            //             }
            //         }
            //     }, 0.5);
            // }
            this._finalFixedsReseted = false;
            this.afterStopWaitingResults();
            return false;
        }
        let useCode: boolean = false;
        if (step > 0) {
            if (theBottomCell.fguiY >= this.fguiHeight) {
                theBottomCell.fguiY = theTopCell.fguiY - theTopCell.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theBottomCell.code = code;
                }
            }
        }
        if (step < 0) {
            if (theTopCell.fguiY <= 0) {
                theTopCell.fguiY = theBottomCell.fguiY + theBottomCell.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theTopCell.code = code;
                }
            }
        }
        if (useCode) {
            this.sortCell();
        }
        return useCode;
    }
    private sortCell(): void {
        this._cells = this._cells.sort((c1, c2) => {
            return c1.fguiY - c2.fguiY;
        });
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].index = i;
        }
    }
    protected getCell(cellIndex: number): CellBase {
        if (cellIndex < 0 || cellIndex >= this._cells.length) {
            cc.error(`索引${cellIndex}超出范围`);
            return null;
        }
        let cell = this._cells[cellIndex];
        const position = cellIndex - this.topExtraCells;
        if (position >= 0 && this._finalFixeds[position]) {
            const code = cell.code;
            if (!this.notFixedCodes.find((c) => c == code)) {
                cell.fguiComponent.visible = false;
                cell = this.mustBeFixedCells[position];
                cell.code = code;
                cell.fguiComponent.visible = true;
            }
        }
        if (position >= 0 && this.reelResults) {
            cell.finalAssets = this.reelResults.cells[position].assets;
        }
        return cell;
    }
    protected get notFixedCodes(): number[] {
        return [];
    }
    protected getFinalCell(cellIndex: number): CellBase {
        return this.getCell(cellIndex);
    }
    cellMoveY(cellIndex: number, step: number, code?: number): boolean {
        const cell = this.getCell(cellIndex);
        if (!cell) {
            return false;
        }
        return cell.moveY(step, code);
    }
    getExtraCellCount(): { top: number; bottom: number } {
        return { top: 1, bottom: 0 };
    }
    public setFinalResultsImmediately(codes: number[], assets: number[]): void {
        if (!codes || codes.length == 0) {
            cc.warn(`最终结果为空`);
            return;
        }
        const finalResultsLength = codes.length;
        for (let i = 0; i < this._cells.length; i++) {
            if (i >= finalResultsLength) {
                break;
            }
            this._cells[i].code = codes[i];
            this._cells[i].finalAssets = assets[i];
            this._cells[i].initAssetShow();
        }
    }
    public setFinalResultImmediately(cellIndex: number, code: number): void {
        const cell = this.getCell(cellIndex);
        if (!cell) {
            return;
        }
        cell.code = code;
    }
    public onColumnStopped(listener: Function, target?: any): void {
        this.node.on(SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    }
    public onBeforeColumnStopped(index: number): void { }

    public reset(): void {
        this.unscheduleAllCallbacks();
        for (let i = 0; i < this._cells.length; i++) {
            this._cells[i].reset();
        }
        if (!this._finalFixedsReseted) {
            this._finalFixeds = [];
            for (let i = 0; i < this._nextFixeds.length; i++) {
                this._finalFixeds.push(this._nextFixeds[i]);
            }
            this._finalFixedsReseted = true;
        }
        //this._finalCodes = [];
        this._nextFixeds = [];
        this._mockCodes = [];
        this._moveEnd = false;
        this.isFirstMove = true;
    }
    public prizeShow(position: number, cellIndex: number): void {
        const cell = this.getCell(cellIndex);
        cell.prizeShow(position);
    }
    public receivePrizeShowCompleted(position: number): void {
        let parentHoldWin = (this.parent as any) as HoldWinBase;
        if (parentHoldWin) {
            parentHoldWin.receivePrizeShowCompleted(position);
            return;
        }
        let parent = (this.parent as any) as SymbolBoardBase;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    }
    public receiveMockCodeReplaced(columnIndex: number, cellIndex: number): void {
        const parentHoldWin = (this.parent as unknown) as HoldWinBase;
        if (parentHoldWin) {
            parentHoldWin.receiveMockCodeReplaced(columnIndex, cellIndex);
            return;
        }
        const parent = (this.parent as unknown) as SymbolBoardBase;
        if (parent) {
            parent.receiveMockCodesReplaced(columnIndex, cellIndex);
        }
    }

    private notifyReelStopped(columnIndex: number): void {
        const parentHoldWin = (this.parent as unknown) as HoldWinBase;
        for (let i = 0; i < this.cells.length; i++) {
            let cell = this.getCell(i);
            cell.stopShow();
        }
        if (parentHoldWin) {
            parentHoldWin.receiveReelStopped(columnIndex);
            return;
        }
        const parent = (this.parent as unknown) as SymbolBoardBase;
        if (parent) {
            parent.receiveReelStopped(columnIndex);
        }
    }
    receiveCellStopped(cellIndex: number): void {
        let allStopped: boolean = true;
        this.symbolBoard.receiveCellStopped(this.index, cellIndex);
        for (let i = 0; i < this._cells.length; i++) {
            const cell = this.getCell(i);
            if (!cell.moveEnd) {
                allStopped = false;
                break;
            }
        }
        if (!allStopped) {
            return;
        }
        //this._moveEnd = true;
        this.status = SymbolBoardStatus.Stopped;
        const parent = (this.parent as unknown) as SymbolBoardBase;
        if (parent) {
            parent.receiveReelStopped(this.index);
        }
    }
    public cellHoldWin(cellIndex: number): void {
        const cell = this.getCell(cellIndex);
        cell.holdWin();
    }
    public unCellHoldWin(cellIndex: number): void {
        const cell = this.getCell(cellIndex);
        cell.unholdWin();
    }
    //#region 控制器操作
    public setCellControllerProperty(cellIndex: number, controllerName: string, code: number): void {
        const cell = this.getCell(cellIndex);
        cell.setControllerProperty(controllerName, code);
    }
    public setSymbolControllerProperty(cellIndex: number, controllerName: string, code: number): void {
        const cell = this.getCell(cellIndex);
        cell.setSymbolControllerProperty(controllerName, code);
    }
    //#endregion
    public playSpineByConfig(cellIndex: number, configName: string, callback?: Function): void {
        const cell = this.getCell(cellIndex);
        cell.playSpineByConfig(configName, callback);
    }
    protected checkAllChildCreated(): void {
        super.checkAllChildCreated();
        while (this.cells.find((c) => c.mustBeFixed)) {
            let index = this.cells.findIndex((c) => c.mustBeFixed);
            if (index !== -1) {
                this.cells.splice(index, 1);
            }
        }
    }
    notifyPrizeCellSettleCompletedOnceCallback() { }
    prizeChipCellSettle(position: number, symbolCode: number, assets: number, callback: Function): void {
        let cell = this.getCell(position % this.cells.length);
        cell.prizeChipCellSettle(position, symbolCode, assets, callback);
    }
    notifyShowDoubleAssets(): void {
        for (let index = 0; index < this.cells.length; index++) {
            const cell = this.cells[index];
            cell.notifyShowDoubleAssets();
        }
    }
    doubleChessShow(): void {
        for (let index = 0; index < this.cells.length; index++) {
            const cell = this.cells[index];
            cell.doubleChessShow();
        }
    }

    public setAssetsAfterChessboardStopped(): void {
        this.cells.map((cell) => {
            cell.setAssetAfterChessboardStopped();
        });
    }
}
