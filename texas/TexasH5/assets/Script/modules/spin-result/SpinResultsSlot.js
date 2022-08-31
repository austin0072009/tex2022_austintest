"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpinResultsColumn_1 = __importDefault(require("./SpinResultsColumn"));
const SpinResultsSymbol_1 = __importDefault(require("./SpinResultsSymbol"));
const SpinResultsEvent_1 = __importDefault(require("./SpinResultsEvent"));
const class_transformer_1 = require("class-transformer");
const SpinResultsGameMode_1 = require("./SpinResultsGameMode");
const SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));
const SpinResultsConst_1 = __importDefault(require("./SpinResultsConst"));
const SpinResultsCell_1 = __importDefault(require("./SpinResultsCell"));
const class_transformer_2 = require("class-transformer");
let SpinResultsSlot = class SpinResultsSlot {
    constructor(columns, matchedLines, ofAKind) {
        this._columns = [];
        this._matchedLines = [];
        this._ofAKind = 0;
        this._events = [];
        this._extraChesses = [];
        this._replaceCodes = [];
        this._symbolEvents = [];
        this.columns = columns;
        this.ofAKind = ofAKind;
        this._gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
        this._nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
    }
    /**
     * 获取列结果集
     */
    get columns() {
        return this._columns;
    }
    /**
     * 设置列结果集
     */
    set columns(value) {
        if (!value) {
            this._columns = [];
            return;
        }
        this._columns = value;
        this._replaceCodes = this.getReplaceCodes();
    }
    /**
     * 获取连线数据
     */
    get matchedLines() {
        return this._matchedLines;
    }
    /**
     * 设置连线数据
     */
    set matchedLines(value) {
        this._matchedLines = value;
        if (!this._matchedLines) {
            this._matchedLines = [];
        }
    }
    /**
     * 获取5、6、7连
     */
    get ofAKind() {
        return this._ofAKind;
    }
    /**
     * 设置5、6、7连
     */
    set ofAKind(value) {
        this._ofAKind = value;
    }
    get extraChesses() {
        return this._extraChesses;
    }
    set extraChesses(value) {
        this._extraChesses = value;
        if (!this._extraChesses) {
            this._extraChesses = [];
        }
    }
    get events() {
        return this._events;
    }
    set events(value) {
        this._events = value;
        if (!this._events) {
            this._events = [];
        }
    }
    get gameMode() {
        return this._gameMode;
    }
    set gameMode(value) {
        this._gameMode = value;
    }
    get nextGameMode() {
        return this._nextGameMode;
    }
    set nextGameMode(value) {
        this._nextGameMode = value;
    }
    get wheels() {
        return this._wheels;
    }
    set wheels(value) {
        this._wheels = value;
        if (!this._wheels) {
            this._wheels = [];
        }
    }
    get replaceCodes() {
        return this._replaceCodes;
    }
    /**
     * Gets whether has matched lines
     * 是否有连线
     */
    get hasMatchedLines() {
        return this.matchedLines && this.matchedLines.length > 0;
    }
    get hasReplaceCodes() {
        return (this.replaceCodes && this.replaceCodes.length > 0 && this.replaceCodes[0] && this.replaceCodes[0].length > 0);
    }
    getReplaceCodes() {
        let times = 1;
        const replaceCodes = [];
        while (true) {
            let codes = [];
            let maxCount = 0;
            for (let col = 0; col < this.columns.length; col++) {
                const reel = this.columns[col];
                for (let row = 0; row < reel.cells.length; row++) {
                    let replaceCode = SpinResultsConst_1.default.NO_MOCK_CODE;
                    let replaceCodes = reel.replaceCodes[row];
                    if (!replaceCodes || replaceCodes.length == 0) {
                        replaceCode = SpinResultsConst_1.default.NO_MOCK_CODE;
                    }
                    else {
                        replaceCode = replaceCodes[times - 1];
                        if (replaceCode == null) {
                            replaceCode = SpinResultsConst_1.default.NO_MOCK_CODE;
                        }
                    }
                    const cell = reel.cells[row];
                    if (cell.mockCodes) {
                        if (maxCount < cell.mockCodes.length) {
                            maxCount = cell.mockCodes.length;
                        }
                    }
                    codes.push(replaceCode);
                }
            }
            if (maxCount < times) {
                break;
            }
            times++;
            replaceCodes.push(codes);
        }
        return replaceCodes;
    }
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
    updateCell(column, row, code, assets = 0, mockCodes = [], fixed = false, extraCode = -1, extraAssets = -1, extraPosition = -1, wheel = null, events = []) {
        this._columns[column].cells[row] = new SpinResultsCell_1.default(code, fixed, mockCodes, assets, extraCode, extraAssets, extraPosition, wheel, events);
    }
    /**
     * 更新格子资产
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {number} assets 资产值
     * @memberof SpinResultsSlot
     */
    updateCellAssets(column, row, assets) {
        this._columns[column].cells[row].assets = assets;
    }
    /**
     * 更新格子固定标记
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {boolean} fixed 是否固定
     * @memberof SpinResultsSlot
     */
    updateCellFixed(column, row, fixed) {
        this._columns[column].cells[row].fixed = fixed;
    }
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
    updateCellExtraCode(column, row, extraCode, extraAssets = -1, extraPosition = -1) {
        this._columns[column].cells[row].extraCode = extraCode;
        this._columns[column].cells[row].extraAssets = extraAssets;
        this._columns[column].cells[row].extraPosition = extraPosition;
    }
    /**
     * 更新格子转盘数据
     * - 比如海洋关的大章鱼棋子，让用户选择，结果已经预定，相当于转盘
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {SpinResultsWheel} wheel 转盘数据
     * @memberof SpinResultsSlot
     */
    updateCellWheel(column, row, values, finalValue) {
        this._columns[column].cells[row].wheel = new SpinResultsWheel_1.default(values, finalValue);
    }
    /**
     * 更新格子事件
     *
     * @param {number} column 列号
     * @param {number} row 行号
     * @param {SpinResultsEvent[]} events 事件
     * @memberof SpinResultsSlot
     */
    updateCellEvents(column, row, events) {
        this._columns[column].cells[row].events = events;
    }
    /**
     * 更新发生变化的棋子的mockCodes值，同时更新code值
     *
     * @param {number[]} hand 更新的手牌数据，变化的棋子位置才有值，没变化的棋子值为-1
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResults
     */
    updateChangeCodeMockCodes(hand, columnSize, rowSize) {
        for (let i = 0; i < hand.length; ++i) {
            const code = hand[i];
            const column = Math.floor(i / rowSize);
            const row = i % rowSize;
            let curCode = code === -1 ? this._columns[column].cells[row].code : code;
            let preCode = code === -1 ? code : this._columns[column].cells[row].code;
            this._columns[column].cells[row].mockCodes.push(preCode);
            this._columns[column].cells[row].code = curCode;
        }
    }
    /**
     * 更新mockCodes值，同时更新code值
     *
     * @param {number[]} currentHand 当前手牌数据
     * @param {number[]} previousHand 之前的手牌数据
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResults
     */
    updateMockCodes(currentHand, previousHand, columnSize, rowSize) {
        // 判断参数合法性
        if (!Array.isArray(currentHand) || !Array.isArray(previousHand) || currentHand.length !== previousHand.length) {
            return;
        }
        // 比较手牌中每个值，如果相同，填-1；如果不同，填previousHand中对应的值
        for (let i = 0; i < currentHand.length; ++i) {
            const currentCode = currentHand[i];
            const previousCode = previousHand[i];
            const mockCode = currentCode !== previousCode ? previousCode : -1;
            const column = Math.floor(i / rowSize);
            const row = i % rowSize;
            this._columns[column].cells[row].mockCodes.push(mockCode);
            this._columns[column].cells[row].code = currentCode;
        }
    }
    /**
     * 更新列的isHoldWin
     *
     * @param {number} column 列号
     * @param {boolean} isHoldWin 是否hold win
     * @memberof SpinResults
     */
    updateColumnHoldWin(column, isHoldWin) {
        this._columns[column].isHoldWin = isHoldWin;
    }
    /**
     * 更新格子code
     *
     * @param {number[]} hand 手牌数据
     * @param {number} rowSize 棋盘行数
     * @memberof SpinResultsSlot
     */
    updateCells(hand, rowSize) {
        for (let i = 0; i < hand.length; ++i) {
            const code = hand[i];
            const column = Math.floor(i / rowSize);
            const row = i % rowSize;
            this._columns[column].cells[row].code = code;
        }
    }
    /**
     * 初始化SpinResultSlot
     *
     * @param {number[]} hand 手牌
     * @param {number} columnSize 列数
     * @param {number} rowSize 行数
     * @memberof SpinResultsSlot
     */
    init(hand, columnSize, rowSize) {
        let reels = [];
        for (let col = 0; col < columnSize; ++col) {
            let cells = [];
            for (let row = 0; row < rowSize; ++row) {
                const position = col * rowSize + row;
                const code = hand[position];
                const cell = new SpinResultsCell_1.default(code, false, [], 0, -1, -1, -1, null, []);
                cells.push(cell);
            }
            const reel = new SpinResultsColumn_1.default(cells, false);
            reels.push(reel);
        }
        this.columns = reels;
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsColumn_1.default),
    __metadata("design:type", Array)
], SpinResultsSlot.prototype, "_columns", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsEvent_1.default),
    __metadata("design:type", Array)
], SpinResultsSlot.prototype, "_events", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsSymbol_1.default),
    __metadata("design:type", Array)
], SpinResultsSlot.prototype, "_extraChesses", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsWheel_1.default),
    __metadata("design:type", Array)
], SpinResultsSlot.prototype, "_wheels", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsColumn_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsSlot.prototype, "columns", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsSlot.prototype, "matchedLines", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResultsSlot.prototype, "ofAKind", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsSymbol_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsSlot.prototype, "extraChesses", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsEvent_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsSlot.prototype, "events", null);
__decorate([
    class_transformer_2.Expose(),
    class_transformer_1.Type(() => SpinResultsWheel_1.default),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResultsSlot.prototype, "wheels", null);
SpinResultsSlot = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [Array, Array, Number])
], SpinResultsSlot);
exports.default = SpinResultsSlot;
