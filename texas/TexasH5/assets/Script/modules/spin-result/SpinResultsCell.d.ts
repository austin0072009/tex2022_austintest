import SpinResultsSymbol from "./SpinResultsSymbol";
import SpinResultsWheel from "./SpinResultsWheel";
import SpinResultsEvent from "./SpinResultsEvent";
export default class SpinResultCell extends SpinResultsSymbol {
    private _fixed;
    private _mockCodes;
    private _extraCode;
    private _extraAssets;
    private _extraPosition;
    private _wheel;
    private _events;
    private _isHoldWin;
    constructor(code?: number, fixed?: boolean, mockCodes?: number[], assets?: number, extraCode?: number, extraAssets?: number, extraPosition?: number, wheel?: SpinResultsWheel, events?: SpinResultsEvent[], isHoldWin?: boolean);
    /**
     * 获取棋子是否固定
     */
    get fixed(): boolean;
    /**
     * 设置棋子是否固定
     */
    set fixed(value: boolean);
    /**
     * 获取假冒棋子
     */
    get mockCodes(): number[];
    /**
     * 设置假冒棋子
     */
    set mockCodes(value: number[]);
    /**
     * 获取假冒棋子个数
     */
    get mockCodeCount(): number;
    /**
     * 获取额外棋子
     */
    get extraCode(): number;
    /**
     * 设置额外棋子
     */
    set extraCode(value: number);
    /**
     * 获取额外资产
     */
    get extraAssets(): number;
    /**
     * 设置额外资产
     */
    set extraAssets(value: number);
    /**
     * 获取额外棋子位置
     */
    get extraPosition(): number;
    /**
     * 设置额外棋子位置
     */
    set extraPosition(value: number);
    /**
     * 获取转盘
     */
    get wheel(): SpinResultsWheel;
    /**
     * 设置转盘
     */
    set wheel(value: SpinResultsWheel);
    /**
     * 获取事件
     */
    get events(): SpinResultsEvent[];
    /**
     * 设置事件
     */
    set events(value: SpinResultsEvent[]);
    get isHoldWin(): boolean;
    set isHoldWin(value: boolean);
}
