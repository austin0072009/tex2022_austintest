import SpinResultsColumn from "./SpinResultsColumn";
import SpinResultsSymbol from "./SpinResultsSymbol";
import SpinResultsEvent from "./SpinResultsEvent";
import { SpinResultsGameMode } from "./SpinResultsGameMode";
import SpinResultsWheel from "./SpinResultsWheel";
import SpinResultsWheelItem from "./SpinResultsWheeItem";
export default class SpinResultsSlot {
    private _columns;
    private _matchedLines;
    private _ofAKind;
    private _events;
    private _extraChesses;
    private _gameMode;
    private _nextGameMode;
    private _wheels;
    private _replaceCodes;
    private _symbolEvents;
    constructor(columns?: SpinResultsColumn[], matchedLines?: number[][], ofAKind?: number);
    /**
     * 获取列结果集
     */
    get columns(): SpinResultsColumn[];
    /**
     * 设置列结果集
     */
    set columns(value: SpinResultsColumn[]);
    /**
     * 获取连线数据
     */
    get matchedLines(): number[][];
    /**
     * 设置连线数据
     */
    set matchedLines(value: number[][]);
    /**
     * 获取5、6、7连
     */
    get ofAKind(): number;
    /**
     * 设置5、6、7连
     */
    set ofAKind(value: number);
    get extraChesses(): SpinResultsSymbol[];
    set extraChesses(value: SpinResultsSymbol[]);
    get events(): SpinResultsEvent[];
    set events(value: SpinResultsEvent[]);
    get gameMode(): SpinResultsGameMode;
    set gameMode(value: SpinResultsGameMode);
    get nextGameMode(): SpinResultsGameMode;
    set nextGameMode(value: SpinResultsGameMode);
    get wheels(): SpinResultsWheel[];
    set wheels(value: SpinResultsWheel[]);
    get replaceCodes(): number[][];
    /**
     * Gets whether has matched lines
     * 是否有连线
     */
    get hasMatchedLines(): boolean;
    get hasReplaceCodes(): boolean;
    private getReplaceCodes;
    /**
     * 更新cell数据
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {number} code 棋子编码
     * @param {number} [assets=0] 资产值
     * @param {boolean} [fixed=false] 是否固定
     * @param {number} [extraCode=-1] 额外棋子编码
     * @param {number} [extraAssets=-1] 额外棋子资产
     * @param {number} [extraPosition=-1] 额外棋子位置
     * @param {SpinResultsWheel} [wheel=null] 转盘数据，比如大章鱼选择框
     * @param {SpinResultsEvent[]} [events=[]] 事件
     * @memberof SpinResults
     */
    updateCell(column: number, row: number, code: number, assets?: number, mockCodes?: number[], fixed?: boolean, extraCode?: number, extraAssets?: number, extraPosition?: number, wheel?: SpinResultsWheel, events?: SpinResultsEvent[]): void;
    /**
     * 更新格子资产
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {number} assets 资产值
     * @memberof SpinResultsSlot
     */
    updateCellAssets(column: number, row: number, assets: number): void;
    /**
     * 更新格子固定标记
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {boolean} fixed 是否固定
     * @memberof SpinResultsSlot
     */
    updateCellFixed(column: number, row: number, fixed: boolean): void;
    /**
     * 更新格子额外棋子相关数据
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {number} extraCode 额外棋子编码
     * @param {number} [extraAssets=-1] 额外棋子资产
     * @param {number} [extraPosition=-1] 额外棋子位置
     * @memberof SpinResultsSlot
     */
    updateCellExtraCode(column: number, row: number, extraCode: number, extraAssets?: number, extraPosition?: number): void;
    /**
     * 更新格子转盘数据
     * - 比如海洋关的大章鱼棋子，让用户选择，结果已经预定，相当于转盘
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {SpinResultsWheel} wheel 转盘数据
     * @memberof SpinResultsSlot
     */
    updateCellWheel(column: number, row: number, values: SpinResultsWheelItem[], finalValue: SpinResultsWheelItem): void;
    /**
     * 更新格子事件
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {SpinResultsEvent[]} events 事件
     * @memberof SpinResultsSlot
     */
    updateCellEvents(column: number, row: number, events: SpinResultsEvent[]): void;
    /**
     * 更新发生变化的棋子的mockCodes值，同时更新code值
     *
     * @param {number[]} hand 更新的手牌数据，变化的棋子位置才有值，没变化的棋子值为-1
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResults
     */
    updateChangeCodeMockCodes(hand: number[], columnSize: number, rowSize: number): void;
    /**
     * 更新mockCodes值，同时更新code值
     *
     * @param {number[]} currentHand 当前手牌数据
     * @param {number[]} previousHand 之前的手牌数据
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResults
     */
    updateMockCodes(currentHand: number[], previousHand: number[], columnSize: number, rowSize: number): void;
    /**
     * 更新列的isHoldWin
     *
     * @param {number} column 列号
     * @param {boolean} isHoldWin 是否hold win
     * @memberof SpinResults
     */
    updateColumnHoldWin(column: number, isHoldWin: boolean): void;
    /**
     * 更新格子code
     *
     * @param {number[]} hand 手牌数据
     * @param {number} rowSize 棋盘行数
     * @memberof SpinResultsSlot
     */
    updateCells(hand: number[], rowSize: number): void;
    /**
     * 初始化SpinResultSlot
     *
     * @param {number[]} hand 手牌
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResultsSlot
     */
    init(hand: number[], columnSize: number, rowSize: number): void;
}
