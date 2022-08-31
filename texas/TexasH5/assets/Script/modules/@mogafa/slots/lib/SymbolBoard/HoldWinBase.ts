import ReelBase from "./ReelBase";
import SymbolBoardBase from "./SymbolBoardBase";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "./SymbolBoardStatus";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";


export default abstract class HoldWinBase extends FguiComponentBase implements MogafaSlots {
    /**
     * 关卡编码
     */
    private _stageCode: string;
    /**
     * 所属棋盘
     */
    private _symbolBoard: SymbolBoardBase;
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
        if (this._column) {
            this._column.stageCode = value;
        }
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
        if (this._column) {
            this._column.symbolBoard = value;
        }
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
        if (this.column) {
            this.column.boardStatus = value;
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
        if (this.column) {
            this.column.status = value;
        }
    }
    protected abstract get holdWinComponentName(): string;
    protected abstract get holdWinControllerName(): string;
    private _index: number;
    public isHoldWin: boolean = false;
    protected _column: ReelBase;
    private _mask: fgui.GObject;
    public get column(): ReelBase {
        return this._column;
    }
    public set index(value: number) {
        this._index = value;
        if (this._column) {
            this._column.index = value;
        }
    }
    public get index(): number {
        return this._index;
    }
    protected createChildComponents() {
        super.createChildComponents();
        this._mask = this.getChild("mask");
        this._column = this.addColumn();
        //this._column.fguiComponent.setMask(null, false);
        this._column.fguiX = 0;
        this._column.fguiY = 0;
        this._column.index = this.index;
        this._column.stageCode = this.stageCode;
        this._column.holdWin = this;
        this._column.symbolBoard = this.symbolBoard;
    }
    protected abstract addColumn(): ReelBase;
    public beforeStartWaitingResults(): void {
        if (this._column) {
            this._column.beforeStartWaitingResults();
        }
    }
    public beforeStopWaitingResults(): void {
        if (this._column) {
            this._column.beforeStopWaitingResults();
        }
    }
    public onColumnStopped(listener: Function, target?: any): void {
        if (this._column) {
            this._column.onColumnStopped(listener, target);
        }
    }
    public holdWin() {
        if (this._column) {
            this.setControllerProperty(this.holdWinControllerName, 1);
            let holdWin = this.fguiComponent.getChild(this.holdWinComponentName);
            if (holdWin) {
                this.holdWinShow();
                this.isHoldWin = true;
                this.fguiComponent.addChild(holdWin);
            }
        }
    }

    protected holdWinShow(): void { }

    public unholdWin(index?: number) {
        if (this.isHoldWin && index === this._index) {
            this.setControllerProperty(this.holdWinControllerName, 0);
            this.isHoldWin = false;
            this.holdWinEnd();
        }
    }

    protected holdWinEnd(): void { }

    public receivePrizeShowCompleted(position: number): void {
        let parent = (this.parent as any) as SymbolBoardBase;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    }
    public receiveMockCodeReplaced(columnIndex: number, cellIndex: number) {
        const parent = (this.parent as any) as SymbolBoardBase;
        if (parent) {
            parent.receiveMockCodesReplaced(columnIndex, cellIndex);
        }
    }
    receiveReelStopped(columnIndex: number): void {
        const parent = (this.parent as any) as SymbolBoardBase;
        if (parent) {
            parent.receiveReelStopped(columnIndex);
        }
    }
    public reset(): void {
        this.isHoldWin = false;
    }
    public showMask() {
        this.fguiComponent.setMask(this._mask, false);
    }
    public hideMask() {
        this.fguiComponent.setMask(null, false);
    }
}
