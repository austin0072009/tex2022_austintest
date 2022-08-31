
import SymbolBase from "./SymbolBase";
import IWaitingResultsStrategy from "../IWaitingResultsStrategy";
import { SymbolBoardConst } from "./SymbolBoardConst";
import ReelBase from "./ReelBase";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "./SymbolBoardStatus";

import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";
import SpinResultCell from "../../../../spin-result/SpinResultsCell";

export default abstract class CellBase extends FguiComponentBase implements MogafaSlots {
    private _mogafaId: string;
    /**
     * 关卡编码
     */
    private _stageCode: string;
    /**
     * 所属格子
     */
    private _reel: ReelBase;
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
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].stageCode = value;
        }
    }
    /**
     * 获取列
     */
    get reel(): ReelBase {
        return this._reel;
    }
    /**
     * 设置列
     */
    set reel(value: ReelBase) {
        this._reel = value;
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
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].boardStatus = value;
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
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].status = value;
        }
    }
    protected abstract get nothingCode(): number;
    protected abstract get maxCode(): number;

    public abstract get resultChess(): SymbolBase;
    protected get assetsComponentName(): string {
        return "";
    }
    private _mask: fgui.GObject;
    private _index: number;
    private _isFinal: boolean;
    protected _chesses: SymbolBase[] = [];
    private _finalCode: number;
    private _finalAssets: number;
    private _mockCodes: number[];
    private _mockCodeReplaced: boolean = true;
    private _stopped: boolean = true;
    private _moveEnd: boolean = false;
    private isFirstMove: boolean = true;
    private _isHoldWin: boolean = false;
    private holdWinShowing: boolean = false;
    private fixed: boolean = false;
    private nextFixed: boolean = false;
    protected assets: number;
    protected assetsComponent: fgui.GTextField;
    private specialEffectShowing: boolean = false;
    private _mustBeFixed: boolean;
    public set code(code: number) {
        if (code == null) {
            return;
        }
        if (code >= SymbolBoardConst.FINAL_CODE_OFFSET) {
            this._isFinal = true;
            code = code - SymbolBoardConst.FINAL_CODE_OFFSET;
            //console.log("final code====",code)
        } else {
            this._isFinal = false;
        }
        this.resultChess.code = code;
        this.finalCode = code;
    }
    public get code(): number {
        return this.resultChess.code;
    }
    public get index(): number {
        return this._index;
    }
    public set index(value: number) {
        this._index = value;
    }
    public get isFinal(): boolean {
        return this._isFinal;
    }
    public get finalCode(): number {
        return this._finalCode;
    }
    public set finalCode(value: number) {
        this._finalCode = value;
    }
    public get finalAssets(): number {
        return this._finalAssets;
    }
    public set finalAssets(value: number) {
        this._finalAssets = value;
        this.resultChess.assets = value;
    }
    public get mockCodes(): number[] {
        return this._mockCodes;
    }
    public set mockCodes(value: number[]) {
        this._mockCodes = value;
        if (!this._mockCodes) {
            this._mockCodes = [];
        }
    }
    public get isHoldWin(): boolean {
        return this._isHoldWin;
    }
    public set isHoldWin(value: boolean) {
        this._isHoldWin = value;
    }
    public get mogafaId(): string {
        return this._mogafaId;
    }
    public set mogafaId(value: string) {
        this._mogafaId = value;
    }
    public set spinResult(value: SpinResultCell) {
        this.finalCode = value.code;
        this.assets = value.assets;
        this.nextFixed = value.fixed;
        this.isHoldWin = value.isHoldWin;
    }
    public get mustBeFixed(): boolean {
        return this._mustBeFixed;
    }
    public set mustBeFixed(value: boolean) {
        this._mustBeFixed = value;
    }
    protected get theFinalBottomSymbolY(): number {
        return 0;
    }
    get moveEnd(): boolean {
        return this._moveEnd;
    }
    public stopShow(): void {
        this.resultChess.stopShow();
    }
    public startMove(): void {
        this.resultChess.startMove();
    }
    /**
     * 替换假冒棋子
     *
     * @param code 替换的棋子，可以不传
     */
    public replaceMockCodeInternal(code?: number): void {
        if (code != null) {
            this.replaceMockCode(code);
            return;
        }
        if (!this.mockCodes || this.mockCodes.length === 0 || !this.isFinal) {
            cc.warn(`没有可替换的棋子或者现在不能换棋子`);
            return;
        }
        const replaceCode = this.mockCodes.pop();
        this.replaceMockCode(replaceCode);
    }
    protected replaceMockCode(replaceCode: number): void {
        this.replaceMockCodeSimple(replaceCode);
    }
    private replaceMockCodeSimple(replaceCode: number) {
        cc.log(`这是默认的棋子替换方法`);
        this.resultChess.code = replaceCode;
        this.notifyMockCodeReplaced();
    }
    protected notifyMockCodeReplaced(): void {
        this._mockCodeReplaced = true;
        const parent = (this.parent as unknown) as ReelBase;
        if (parent) {
            parent.receiveMockCodeReplaced(parent.index, this.index);
        }
    }
    public get mockCodeReplaced(): boolean {
        return this._mockCodeReplaced;
    }
    private _waitingResultsStrategy: IWaitingResultsStrategy;

    public get waitingResultsStrategy(): IWaitingResultsStrategy {
        return this._waitingResultsStrategy;
    }
    public set waitingResultsStrategy(waitingResultsStrategy: IWaitingResultsStrategy) {
        this._waitingResultsStrategy = waitingResultsStrategy;
    }
    protected createChildComponents() {
        super.createChildComponents();
        this._mask = this.fguiComponent.mask;
        this.fguiComponent.setMask(null, false);
        if (this.assetsComponentName) {
            this.assetsComponent = this.getChild(this.assetsComponentName).asTextField;
        }
    }
    public addFguiComponent<T extends FguiComponentBase>(type: { new(): T }, changeSize: boolean = true): T {
        let child = super.addFguiComponent(type, changeSize);
        if (child instanceof SymbolBase) {
            const symbol = (child as unknown) as SymbolBase;
            symbol.stageCode = this.stageCode;
            symbol.cell = this;
            symbol.assets = this.assets;
            this._chesses.push(symbol);
            symbol.index = this._chesses.length - 1;
        }
        return child;
    }
    private firstMove() {
        for (let i = 0; i < this._chesses.length; i++) {
            if (!this._chesses[i].fguiComponent.visible) {
                this._chesses[i].fguiComponent.visible = true;
            }
        }
        this.fguiComponent.setMask(this._mask, false);
    }
    public moveY(step: number, code?: number): boolean {
        if (this._moveEnd) {
            return false;
        }
        if (code >= SymbolBoardConst.FINAL_CODE_OFFSET) {
            this.code = code;
        }
        this._chesses = this._chesses.sort((c1, c2) => {
            return c1.fguiY - c2.fguiY;
        });

        const theTopChess = this._chesses[0];
        const theBottomChess = this._chesses[this._chesses.length - 1];
        if (this.fixed) {
            if (code >= SymbolBoardConst.FINAL_CODE_OFFSET) {
                theBottomChess.code = code;
            }
        } else {
            if (this.isFirstMove) {
                this.firstMove();
                this.isFirstMove = false;
            }
            if (!this.specialEffectShowing) {
                this.specialEffectShowing = this.specialEffectShowInSpin();
            }
        }

        if (this.isFinal) {
            if (theBottomChess.fguiY + step >= this.theFinalBottomSymbolY) {
                step = this.theFinalBottomSymbolY - theBottomChess.fguiY;
                this._moveEnd = true;
                //if (theTopChess.isFinal) {
                theBottomChess.code = this.finalCode;
                //}
            }
        }
        if (this.fixed) {
            step = 0;
        }
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].fguiY += step;
        }
        if (this._moveEnd) {
            theTopChess.fguiComponent.visible = false;
            this.specialEffectOffInSpin();
            this.specialEffectShowing = false;
            this.status = SymbolBoardStatus.Stopped;
            this.fguiComponent.setMask(null, false);
            if (this.assetsComponent && this.finalAssets !== -1) {
                this.assetsComponent.text = this.assetsDisplay();
                this.assetsComponent.visible = true;
            }
            theBottomChess.assets = this.finalAssets;
            this.isFirstMove = true;
            this.fixed = this.nextFixed;
            this.nextFixed = false;
            this.holdWinOff();
            this.notifyCellStopped();
            return false;
        }
        if (this.fixed) {
            return true;
        }
        let useCode: boolean = false;
        if (step > 0) {
            if (theBottomChess.fguiY >= this.fguiHeight) {
                theBottomChess.fguiY = theTopChess.fguiY - theTopChess.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theBottomChess.code = code;
                }
            }
        }
        if (step < 0) {
            if (theTopChess.fguiY <= 0) {
                theTopChess.fguiY = theBottomChess.fguiY + theBottomChess.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theTopChess.code = code;
                }
            }
        }
        if (useCode) {
            this._chesses = this._chesses.sort((c1, c2) => {
                return c1.fguiY - c2.fguiY;
            });
        }
        return useCode;
    }
    protected assetsDisplay(): string {
        if (this.assets === -1) {
            return "";
        }
        return this.assets.toString();
    }
    public prizeShow(position: number): void {
        this.resultChess.startPrizeShow(position);
    }
    public receivePrizeShowCompleted(position: number): void {
        const parent = (this.parent as any) as ReelBase;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    }
    notifyCellStopped(): void {
        this.stopShow();
        const parent = (this.parent as any) as ReelBase;
        if (parent) {
            parent.receiveCellStopped(this._index);
        } //
    }
    public reset(): void {
        this.unscheduleAllCallbacks();
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].reset();
        }
        this.specialEffectShowing = false;
        this._isFinal = false;
        this._mockCodes = [];
        this._mockCodeReplaced = true;
        this._moveEnd = false;
        this.isFirstMove = true;
        this.holdWinShowing = false;

        if (this.assetsComponent) {
            this.assetsComponent.text = this.assetsDisplay();
        }
    }
    //#region 设置控制值
    public setSymbolControllerProperty(controllerName: string, code: number): void {
        this.resultChess.setControllerProperty(controllerName, code);
    }
    //#endregion
    public playSpineByConfig(configName: string, callback?: Function): void {
        this.resultChess.playSpineByConfig(configName, callback);
    }
    /**
     * 转动过程中格子特殊效果展示，游戏关卡重载实现
     * 比如水果777，在这里实现respin中普通转动的特效（需要判断只在respin中才展示这个特效）
     * @returns 如果为true表示效果生效
     */
    protected specialEffectShowInSpin(): boolean {
        return false;
    }
    /**
     * 转动过程中的格子特殊效果停止，游戏关卡重载实现
     */
    protected specialEffectOffInSpin(): void { }

    public holdWin(): void {
        if (!this.holdWinShowing) {
            this.holdWinShowing = true;
            this.holdWinShow();
        }
    }
    public unholdWin(): void {
        this.holdWinOff();
        this.holdWinShowing = false;
    }
    /**
     * 单格格子holdWin展示，游戏关卡重载实现
     * 比如水果777，在这里实现holdWin特效，在普通转和respin中需要区分（holdWin特效不一样）
     */
    protected holdWinShow(): void { }
    /**
     * 单格格子holdWin展示关闭，游戏关卡重载实现
     */
    protected holdWinOff(): void { }
    prizeChipCellSettle(position: number, symbolCode: number, assets: number, callback: Function): void {
        if (callback) {
            callback();
        }
    }
    notifyShowDoubleAssets(): void { }
    doubleChessShow(): void {
        for (let i = 0; i < this._chesses.length; i++) {
            this._chesses[i].doubleChessShow();
        }
    }
    initAssetShow(): void {
        if (this.assetsComponent && this.finalAssets !== -1) {
            this.assetsComponent.visible = true;
            this.assetsComponent.text = this.finalAssets.toString();
        }
    }
    public fixedCellShow(): void {
        this.resultChess.fixedCellShow();
    }
    public fixedCellHide(): void {
        this.resultChess.fixedCellHide();
    }

    public setAssetAfterChessboardStopped(): void { }
}
