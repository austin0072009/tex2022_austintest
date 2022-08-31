"use strict";
cc._RF.push(module, '8b473LVKdhL1o5MSeVElWD+', 'SymbolBoardBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBoardBase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolEvent = void 0;
var ReelBase_1 = require("./ReelBase");
var HoldWinBase_1 = require("./HoldWinBase");
var SymbolBoardEvent_1 = require("./SymbolBoardEvent");
var ReplaceSymbol_1 = require("./ReplaceSymbol");
var SlotGameStageBase_1 = require("../GameStage/SlotGameStageBase");
var PrizeShowStatus_1 = require("../PrizeShowStatus");
var SymbolBoardStatus_1 = require("./SymbolBoardStatus");
var SlotGameStageStatus_1 = require("../GameStage/SlotGameStageStatus");
var FguiFullScreenBase_1 = require("../../../fairygui-component/lib/FguiFullScreenBase");
var NumberUtils_1 = require("../../../utils/lib/NumberUtils");
var SpinResultsGameMode_1 = require("../../../../spin-result/SpinResultsGameMode");
var SpinResultsConst_1 = require("../../../../spin-result/SpinResultsConst");
var SpinResultsEventCode_1 = require("../../../../spin-result/SpinResultsEventCode");
//#region prizeshow相关类
var PrizeShowSymbol = /** @class */ (function () {
    function PrizeShowSymbol(position, expectedTimes) {
        this._position = position;
        this._expectedTimes = expectedTimes;
        this._finishedTimes = 0;
    }
    Object.defineProperty(PrizeShowSymbol.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowSymbol.prototype, "expectedTimes", {
        get: function () {
            return this._expectedTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowSymbol.prototype, "finishedTimes", {
        get: function () {
            return this._finishedTimes;
        },
        enumerable: false,
        configurable: true
    });
    PrizeShowSymbol.prototype.finishedOnce = function () {
        this._finishedTimes++;
        return this._finishedTimes >= this._expectedTimes;
    };
    return PrizeShowSymbol;
}());
var PrizeShowLine = /** @class */ (function () {
    function PrizeShowLine(symbol, expectedTimes) {
        this._symbols = [];
        this._positions = [];
        this._symbols = symbol;
        this._expectedTimes = expectedTimes;
        this._finishedTimes = 0;
        if (!this._symbols) {
            this._symbols = [];
        }
        this._positions = [];
        for (var i = 0; i < this._symbols.length; i++) {
            var symbol_1 = this._symbols[i];
            this._positions.push(symbol_1.position);
        }
    }
    Object.defineProperty(PrizeShowLine.prototype, "symbol", {
        get: function () {
            return this._symbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowLine.prototype, "positions", {
        get: function () {
            return this._positions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowLine.prototype, "expectedTimes", {
        get: function () {
            return this._expectedTimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowLine.prototype, "finishedTimes", {
        get: function () {
            return this._finishedTimes;
        },
        enumerable: false,
        configurable: true
    });
    PrizeShowLine.prototype.finishedOnce = function () {
        this._finishedTimes++;
        return this._finishedTimes >= this._expectedTimes;
    };
    return PrizeShowLine;
}());
var PrizeShowCellReward = /** @class */ (function () {
    function PrizeShowCellReward(position, symbolCode, assets) {
        this._finished = false;
        this._position = position;
        this._symbolCode = symbolCode;
    }
    Object.defineProperty(PrizeShowCellReward.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowCellReward.prototype, "symbolCode", {
        get: function () {
            return this._symbolCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShowCellReward.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    PrizeShowCellReward.prototype.finish = function () {
        this._finished = true;
    };
    return PrizeShowCellReward;
}());
var PrizeShow = /** @class */ (function () {
    function PrizeShow(lines, chipAssets, jackpotAssets) {
        this._lines = [];
        this._chipAssets = [];
        this._jackpotAssets = [];
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
    Object.defineProperty(PrizeShow.prototype, "lines", {
        get: function () {
            return this._lines;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShow.prototype, "chipAssets", {
        get: function () {
            return this._chipAssets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrizeShow.prototype, "jackpotAssets", {
        get: function () {
            return this._jackpotAssets;
        },
        enumerable: false,
        configurable: true
    });
    PrizeShow.prototype.getAllSymbols = function () {
        var symbols = [];
        if (!this._lines || this._lines.length == 0) {
            return symbols;
        }
        for (var i = 0; i < this._lines.length; i++) {
            var line = this._lines[i];
            var _loop_1 = function (j) {
                var showSymbol = line.symbol[j];
                var symbol = symbols.find(function (c) { return c.position == showSymbol.position; });
                if (!symbol) {
                    symbols.push(showSymbol);
                }
            };
            for (var j = 0; j < line.symbol.length; j++) {
                _loop_1(j);
            }
        }
        return symbols;
    };
    return PrizeShow;
}());
//#endregion
var SymbolBoardBase = /** @class */ (function (_super) {
    __extends(SymbolBoardBase, _super);
    function SymbolBoardBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lineIndex = 0;
        /**
         * 轴列表
         */
        _this._reels = [];
        _this._holdWins = [];
        _this.$symbolReplaced = [];
        _this.$customSymbolReplaced = [];
        _this.replaceCodesOneByOne = false;
        _this.oneByOneCodes = [];
        _this.oneByOnePoisition = 0;
        //private _canBeSpinRequestWhenPrizeShow: boolean;
        _this.$chipCellRewards = [];
        _this.$jackpotCellRewards = [];
        _this.$replaceCodes = [];
        /**
         * 最终格子位置映射
         */
        _this._finalCellPosition = {};
        _this._prizeShowChesses = [];
        _this._prizeShowStatus = PrizeShowStatus_1.PrizeShowStatus.Ready;
        _this._prizeLineShowFirst = true;
        _this.positionsShowCallback = null;
        _this.positionsShowCompletedOnce = false;
        return _this;
    }
    Object.defineProperty(SymbolBoardBase.prototype, "stageCode", {
        /**
         * 获取关卡编码
         */
        get: function () {
            return this.$stageCode;
        },
        /**
         * 设置关卡编码
         */
        set: function (value) {
            console.log("set stageCode");
            this.$stageCode = value;
            for (var i = 0; i < this._reels.length; i++) {
                this._reels[i].stageCode = value;
            }
            for (var i = 0; i < this._holdWins.length; i++) {
                this._holdWins[i].stageCode = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "defaultSlot", {
        get: function () {
            return this.$defaultSlot;
        },
        set: function (val) {
            this.$defaultSlot = val;
            var codes = this.$defaultSlot.columns.map(function (item, index) {
                return item.cells
                    .map(function (item1) {
                    return item1.code;
                })
                    .reverse();
            });
            var assets = this.$defaultSlot.columns.map(function (item, index) {
                return item.cells
                    .map(function (item1) {
                    return item1.assets;
                })
                    .reverse();
            });
            for (var i = 0; i < codes.length; i++) {
                this.setFinalResultsImmediately(i, codes[i], assets[i]);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "status", {
        get: function () {
            return this.$status;
        },
        set: function (value) {
            // console.log("SymbolBoardStatus===status==", value)
            this.$status = value;
            for (var i = 0; i < this._reels.length; i++) {
                this._reels[i].boardStatus = value;
            }
            for (var i = 0; i < this._holdWins.length; i++) {
                this._holdWins[i].boardStatus = value;
            }
            if (value == SymbolBoardStatus_1.SymbolBoardStatus.Stopped || value == SymbolBoardStatus_1.SymbolBoardStatus.Replacing) {
                if (this.needProcessEvents) {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Replacing;
                    this.replaceMockCodesInternal();
                }
                else if (this.hasMatchedLines) {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing;
                    this.startPrizeShow();
                }
                else if ((this.hasChipCellRewards || this.hasJackpotCellRewards) &&
                    SlotGameStageBase_1.default.spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.Respin &&
                    SlotGameStageBase_1.default.spinResults.nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin) {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Settling;
                    this.startPrizeSettle();
                }
                else {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                }
            }
            if (value == SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing) {
                if (this.hasMatchedLines) {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing;
                    this.startPrizeShow();
                }
                else if ((this.hasChipCellRewards || this.hasJackpotCellRewards) &&
                    SlotGameStageBase_1.default.spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.Respin &&
                    SlotGameStageBase_1.default.spinResults.nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin) {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Settling;
                    this.startPrizeSettle();
                }
                else {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                }
            }
            if (value == SymbolBoardStatus_1.SymbolBoardStatus.Settling) {
                if (this.hasChipCellRewards || this.hasJackpotCellRewards) {
                    if (SlotGameStageBase_1.default.spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                        this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                    }
                    else {
                        this.startPrizeSettle();
                    }
                }
                else {
                    this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                }
            }
            if (this.$status == SymbolBoardStatus_1.SymbolBoardStatus.Ready) {
                //this.reset();
            }
            this.StatusChanged();
            // this.gameStage.receiveSymbolBoardStatusChanged(this._index, this.$status);
        },
        enumerable: false,
        configurable: true
    });
    SymbolBoardBase.prototype.StatusChanged = function () { };
    SymbolBoardBase.prototype.canBeNextStatus = function (gameStageStatus) {
        var yes = true;
        switch (gameStageStatus) {
            case SlotGameStageStatus_1.SlotGameStageStatus.Ready:
            case SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer:
            case SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults:
                yes = false;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived: //下一状态为replacing
                yes = this.status > SymbolBoardStatus_1.SymbolBoardStatus.Spinning || this.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsSpinning:
                yes = this.status > SymbolBoardStatus_1.SymbolBoardStatus.Stopped || this.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing: //下一状态为prizeshowing
                yes = this.status > SymbolBoardStatus_1.SymbolBoardStatus.Replacing || this.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing: //下一状态为setting
                yes = this.status > SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing || this.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling:
                yes = this.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                break;
        }
        return yes;
    };
    Object.defineProperty(SymbolBoardBase.prototype, "hasCustomReplaceCode", {
        /**
         * 是否自定义棋子替换流程
         */
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "gameStage", {
        //#region  属性
        get: function () {
            return this._gameStage;
        },
        set: function (value) {
            this._gameStage = value;
        },
        enumerable: false,
        configurable: true
    });
    SymbolBoardBase.prototype.addFguiComponent = function (type, changeSize) {
        if (changeSize === void 0) { changeSize = true; }
        var child = _super.prototype.addFguiComponent.call(this, type, changeSize);
        if (child instanceof ReelBase_1.default) {
            var column = child;
            column.index = this._reels.length;
            column.stageCode = this.stageCode;
            column.symbolBoard = this;
            this._reels.push(column);
        }
        if (child instanceof HoldWinBase_1.default) {
            var holdWin = child;
            holdWin.index = this._holdWins.length;
            holdWin.stageCode = this.stageCode;
            holdWin.symbolBoard = this;
            this._holdWins.push(holdWin);
        }
        return child;
    };
    Object.defineProperty(SymbolBoardBase.prototype, "slotResults", {
        //#region  spin结果操作
        /**
         * 获取spin结果
         */
        get: function () {
            return this._slotResults;
        },
        /**
         * 设置spin结果
         */
        set: function (value) {
            console.log("set slotResults");
            this._slotResults = value;
            if (value) {
                this._ofKindNumber = value.ofAKind;
                for (var i = 0; i < value.columns.length; i++) {
                    var resultColumn = value.columns[i];
                    var column = this.getColumn(i);
                    column.finalCodes = Object.assign([], resultColumn.codes);
                    column.mockCodes = Object.assign([], resultColumn.replaceCodes);
                    for (var j = 0; j < resultColumn.replaceCodes.length; j++) {
                        var mockCode = resultColumn.replaceCodes[j];
                        if (mockCode.length !== 0) {
                            this.$symbolReplaced.push(new ReplaceSymbol_1.default(i, j, mockCode.length));
                        }
                    }
                    var reel = this.getColumn(i);
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
                var symbolEvents = this.getSymbolEvents();
                if (symbolEvents && symbolEvents.length > 0) {
                    this.processSymbolEvents(this.getSymbolEvents());
                }
                this.fguiComponent.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.RESULTS_RECEIVED, value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "matchedLines", {
        get: function () {
            if (this.slotResults) {
                this._matchedLines = this.slotResults.matchedLines;
            }
            if (!this._matchedLines) {
                this._matchedLines = [];
            }
            return this._matchedLines;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "hasMatchedLines", {
        get: function () {
            return this.matchedLines && this.matchedLines.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "replaceCodes", {
        get: function () {
            return this.$replaceCodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "hasReplaceCodes", {
        get: function () {
            return this.replaceCodes && this.replaceCodes.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "hasChipCellRewards", {
        get: function () {
            return this.$chipCellRewards && this.$chipCellRewards.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "hasJackpotCellRewards", {
        get: function () {
            return this.$jackpotCellRewards && this.$jackpotCellRewards.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 处理额外棋子，当收到服务器返回结果就会调用，
     * 收到后就开始处理额外棋子（比如海盗开始飞藏宝图）
     * 有些游戏这些棋子是表示无效的棋子（比如熊猫掉落到棋盘外面的棋子）
     * 掉落在棋盘内的额外棋子是在棋盘的棋子里面定义的
     * @param extraChesses 额外棋子，棋子的定义见各关卡数据结构说明
     */
    SymbolBoardBase.prototype.processExtraChesses = function (extraChesses) { };
    /**
     * 处理事件，当收到服务器返回结果时调用
     * （比如野牛冲刺事件）
     * @param events 事件列表，事件的定义见各关卡数据结构说明
     */
    SymbolBoardBase.prototype.processEvents = function (events) { };
    /**
     * 处理棋子事件
     *
     * @param events 棋子事件列表，事件的定义见各关卡数据结构说明
     */
    SymbolBoardBase.prototype.processSymbolEvents = function (events) { };
    Object.defineProperty(SymbolBoardBase.prototype, "needProcessEvents", {
        get: function () {
            return (this.hasReplaceCodes ||
                this.getSymbolEvents().length > 0 ||
                (this.getWeels() && this.getWeels().length > 0) ||
                (this.slotResults.extraChesses && this.slotResults.extraChesses.length > 0) ||
                (this.slotResults.events && this.slotResults.events.length > 0));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取事件
     */
    SymbolBoardBase.prototype.getEvents = function () {
        return this.slotResults.events;
    };
    /**
     * 获取额外棋子
     */
    SymbolBoardBase.prototype.getExtraChesses = function () {
        return this.slotResults.extraChesses;
    };
    /**
     * 获取转盘，比如熊猫的转盘
     */
    SymbolBoardBase.prototype.getWeels = function () {
        return this.slotResults.wheels;
    };
    /**
     * 获取替换棋子列表
     *
     */
    SymbolBoardBase.prototype.getReplaceCodes = function () {
        return this.slotResults.replaceCodes;
    };
    /**
     * 获取棋子事件
     */
    SymbolBoardBase.prototype.getSymbolEvents = function () {
        var events = [];
        var position = 0;
        for (var col = 0; col < this.slotResults.columns.length; col++) {
            var reel = this.slotResults.columns[col];
            for (var row = 0; row < reel.cells.length; row++) {
                var cell = reel.cells[row];
                if (cell.events && cell.events.length > 0) {
                    events.push(new SymbolEvent(cell.code, cell.assets, position, cell.events, cell.wheel));
                }
                position++;
            }
        }
        return events;
    };
    /**
     * 获取筹码棋子奖励
     */
    SymbolBoardBase.prototype.getChipCellRewards = function () {
        var rewards = [];
        var position = 0;
        for (var col = 0; col < this.slotResults.columns.length; col++) {
            var reel = this.slotResults.columns[col];
            for (var row = 0; row < reel.cells.length; row++) {
                var cell = reel.cells[row];
                if (this.isChipCode(cell.code)) {
                    rewards.push({ position: position, symbolCode: cell.code, rewards: cell.assets });
                }
                position++;
            }
        }
        return rewards;
    };
    /**
     * 获取jp棋子奖励
     */
    SymbolBoardBase.prototype.getJackpotCellRewards = function () {
        var rewards = [];
        var position = 0;
        for (var col = 0; col < this.slotResults.columns.length; col++) {
            var reel = this.slotResults.columns[col];
            for (var row = 0; row < reel.cells.length; row++) {
                var cell = reel.cells[row];
                if (this.isJackpotCode(cell.code)) {
                    rewards.push({ position: position, symbolCode: cell.code, rewards: cell.assets });
                }
                position++;
            }
        }
        return rewards;
    };
    SymbolBoardBase.prototype.isChipCode = function (code) {
        return this.chipSymbolCodes.indexOf(code) !== -1;
    };
    SymbolBoardBase.prototype.isJackpotCode = function (code) {
        return this.jackpotSymbolCodes.indexOf(code) !== -1;
    };
    //#endregion
    //#region 转动相关
    SymbolBoardBase.prototype.reelStartResilienceConfig = function (columnIndex, up, down) {
        var column = this.getColumn(columnIndex);
        if (column) {
            column.setReelStartResilience(up, down);
        }
    };
    SymbolBoardBase.prototype.reelEndResilienceConfig = function (columnIndex, down, up) {
        var column = this.getColumn(columnIndex);
        if (column) {
            column.setReelEndResilience(down, up);
        }
    };
    SymbolBoardBase.prototype.columnMoveY = function (columnIndex, step, code) {
        var column = this.getColumn(columnIndex);
        if (!column) {
            return false;
        }
        var parent = this.parent;
        return column.moveY(step, code);
    };
    SymbolBoardBase.prototype.cellMoveY = function (columnIndex, cellIndex, step, code) {
        var column = this.getColumn(columnIndex);
        if (!column) {
            return false;
        }
        return column.cellMoveY(cellIndex, step, code);
    };
    SymbolBoardBase.prototype.receiveCellStopped = function (reelIndex, cellIndex) {
        this.fguiComponent.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.CELL_STOPPED, reelIndex, cellIndex);
    };
    SymbolBoardBase.prototype.receiveReelStopped = function (reelIndex) {
        var allStopped = true;
        var reelCount = this._reels.length;
        if (reelCount === 0) {
            reelCount = this._holdWins.length;
        }
        for (var i = 0; i < reelCount; i++) {
            var reel = this.getColumn(i);
            //if (!reel.moveEnd) {
            if (reel.status != SymbolBoardStatus_1.SymbolBoardStatus.Stopped) {
                allStopped = false;
                break;
            }
        }
        this.fguiComponent.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.COLUMN_STOPPED, reelIndex);
        if (allStopped) {
            this.afterChessboardStopped();
            this.status = SymbolBoardStatus_1.SymbolBoardStatus.Stopped;
        }
    };
    Object.defineProperty(SymbolBoardBase.prototype, "symbolReplaced", {
        //#endregion 转动相关
        //#region 棋子替换
        get: function () {
            if (this.hasCustomReplaceCode) {
                return this.$customSymbolReplaced;
            }
            return this.$symbolReplaced;
        },
        set: function (value) {
            if (this.hasCustomReplaceCode) {
                this.$customSymbolReplaced = value;
            }
            else {
                this.$symbolReplaced = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    SymbolBoardBase.prototype.replaceMockCodesInternal = function () {
        if (this.hasCustomReplaceCode) {
            if (this.needProcessEvents) {
                this.replaceMockCodes(this.replaceCodes);
            }
            else {
                this.notifyMockCodesReplaced();
            }
        }
        else {
            this.replaceCodesOneByOne = false;
            var columns = this._reels.length;
            if (columns === 0) {
                columns = this._holdWins.length;
            }
            for (var i = 0; i < columns; i++) {
                var column = this.getColumn(i);
                column.replaceMockCodes();
            }
        }
    };
    /**
     * 替换棋子方法，关卡可以重写
     */
    SymbolBoardBase.prototype.replaceMockCodes = function (replaceCodes) { };
    /**
     * 替换指定的棋子
     * @remark
     * 所有棋子替换完成后，需要调用notifyMockCodesReplaced
     *
     * @param codes 需要替换的棋子列表，不需要替换的位置填-1
     * @param replacedCallback 替换完成后回调
     */
    SymbolBoardBase.prototype.replaceCustomMockeCodes = function (codes, replacedCallback) {
        if (!codes || codes.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
            return;
        }
        this.replaceCodesOneByOne = false;
        this.customReplacedCallback = replacedCallback;
        this.symbolReplaced = [];
        for (var i = 0; i < codes.length; i++) {
            var code = codes[i];
            if (code !== SpinResultsConst_1.default.NO_MOCK_CODE) {
                var cell = this.getCellByFinalPosition(i);
                this.symbolReplaced.push(new ReplaceSymbol_1.default(cell.x, cell.y, 1));
            }
        }
        if (this.symbolReplaced.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
        }
        for (var i = 0; i < codes.length; i++) {
            var code = codes[i];
            if (code !== SpinResultsConst_1.default.NO_MOCK_CODE) {
                var cell = this.getCellByFinalPosition(i);
                var reel = this.getColumn(cell.x);
                reel.replaceMockCodes(cell.y, code);
            }
        }
    };
    /**
     * 一个接一个替换棋子
     *
     * @param codes 替换棋子列表，不需要替换的位置填SpinResultConst.NO_MOCK_CODE
     * @param isRandom 是否随机替换
     * @param replacedCallback 替换完成后的回调
     */
    SymbolBoardBase.prototype.customReplaceCodesOneByOne = function (codes, isRandom, replacedCallback) {
        if (isRandom === void 0) { isRandom = true; }
        if (replacedCallback === void 0) { replacedCallback = null; }
        if (!codes || codes.length == 0) {
            if (replacedCallback) {
                replacedCallback();
            }
            return;
        }
        this.customReplacedCallback = replacedCallback;
        this.replaceCodesOneByOne = true;
        this.symbolReplaced = [];
        for (var i = 0; i < codes.length; i++) {
            var code = codes[i];
            if (code !== SpinResultsConst_1.default.NO_MOCK_CODE) {
                var cell = this.getCellByFinalPosition(i);
                this.symbolReplaced.push(new ReplaceSymbol_1.default(cell.x, cell.y, 1));
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
            for (var i = 0; i < codes.length; i++) {
                this.oneByOneCodes.push({ position: i, code: codes[i] });
            }
        }
        else {
            var randomNumbers = [];
            while (randomNumbers.length < codes.length) {
                var number = NumberUtils_1.default.random(0, codes.length - 1);
                if (randomNumbers.indexOf(number) === -1) {
                    randomNumbers.push(number);
                }
            }
            for (var i = 0; i < randomNumbers.length; i++) {
                var position = randomNumbers[i];
                this.oneByOneCodes.push({ position: position, code: codes[position] });
            }
        }
        this.replaceNextCode();
    };
    SymbolBoardBase.prototype.replaceNextCode = function () {
        if (this.oneByOnePoisition >= this.oneByOneCodes.length) {
            this.checkAllCodesReplaced();
            return;
        }
        var nextCode = this.oneByOneCodes[this.oneByOnePoisition];
        this.oneByOnePoisition++;
        if (nextCode.code !== SpinResultsConst_1.default.NO_MOCK_CODE) {
            var cell = this.getCellByFinalPosition(nextCode.position);
            var reel = this.getColumn(cell.x);
            reel.replaceMockCodes(cell.y, nextCode.code);
        }
        else {
            this.replaceNextCode();
        }
    };
    SymbolBoardBase.prototype.checkAllCodesReplaced = function () {
        var mockChess = this.symbolReplaced.find(function (c) { return c.replaced === false; });
        if (!mockChess) {
            if (this.hasCustomReplaceCode) {
                if (this.customReplacedCallback) {
                    this.customReplacedCallback();
                }
            }
            else {
                this.notifyMockCodesReplaced();
            }
        }
    };
    SymbolBoardBase.prototype.receiveMockCodesReplaced = function (reelIndex, cellIndex) {
        var replaceSymbol = this.symbolReplaced.find(function (c) { return c.reel == reelIndex && c.cell == cellIndex; });
        if (replaceSymbol) {
            replaceSymbol.replaceOnce();
        }
        if (this.replaceCodesOneByOne) {
            this.replaceNextCode();
        }
        else {
            this.checkAllCodesReplaced();
        }
    };
    SymbolBoardBase.prototype.notifyMockCodesReplaced = function () {
        this.symbolReplaced = [];
        this.status = SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing;
        this.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.MOCK_CODE_REPLACED, this._index);
    };
    Object.defineProperty(SymbolBoardBase.prototype, "waitingResultsStrategy", {
        //#endregion
        get: function () {
            return this.$waitingResultsStrategy;
        },
        set: function (waitingResultsStrategy) {
            this.$waitingResultsStrategy = waitingResultsStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "fastWaitingResultsStrategy", {
        get: function () {
            return this.$fastWaitingResultsStrategy;
        },
        set: function (waitingResultsStrategy) {
            this.$fastWaitingResultsStrategy = waitingResultsStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "isFast", {
        get: function () {
            return this.$isFast;
        },
        set: function (isFast) {
            if (this.status != SymbolBoardStatus_1.SymbolBoardStatus.Ready && this._prizeShowStatus != PrizeShowStatus_1.PrizeShowStatus.Ready) {
                cc.error("\u53EA\u6709\u5728\u505C\u6B62\u72B6\u6001\u624D\u80FD\u4FEE\u6539fast");
                return;
            }
            this.$isFast = isFast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "prizeShowStatus", {
        get: function () {
            return this._prizeShowStatus;
        },
        set: function (value) {
            this._prizeShowStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    SymbolBoardBase.prototype.reset = function () {
        this.unscheduleAllCallbacks();
        var columnCount = this._reels.length;
        if (columnCount === 0) {
            columnCount = this._holdWins.length;
            for (var i = 0; i < columnCount; i++) {
                var holdWin = this.getHoldWin(i);
                holdWin.reset();
            }
        }
        for (var i = 0; i < columnCount; i++) {
            var column = this.getColumn(i);
            column.reset();
        }
        //this._waitingResultsStatus = WaitingResultsStatus.Ready;
        this.$status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
        this.prizeShowStatus = PrizeShowStatus_1.PrizeShowStatus.Ready;
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
    };
    SymbolBoardBase.prototype.processOfAKind = function () { };
    SymbolBoardBase.prototype.onCellStopped = function (event) { };
    /**
     * 棋盘转动结束后调用,可
     */
    SymbolBoardBase.prototype.afterChessboardStopped = function () {
        var parent = this.parent;
        var reelCount = this._reels.length;
        if (reelCount === 0) {
            reelCount = this._holdWins.length;
        }
        for (var i = 0; i < reelCount; i++) {
            var reel = this.getColumn(i);
            reel.notifyShowDoubleAssets();
        }
        this.executeNumberOfKind();
    };
    SymbolBoardBase.prototype.setAssetsAfterChessboardStopped = function () {
        this._reels.map(function (reel) {
            reel.setAssetsAfterChessboardStopped();
        });
    };
    /**
     * 执行ofKind动画
     */
    SymbolBoardBase.prototype.executeNumberOfKind = function () {
        // this.ofKind.executeNumberOfKind(this._ofKindNumber);
    };
    /**
     * 开始等待结果
     */
    SymbolBoardBase.prototype.startWaitingResults = function () {
        // if (
        //     this._waitingResultsStatus != WaitingResultsStatus.Ready &&
        //     this._waitingResultsStatus != WaitingResultsStatus.Stopped
        // ) {
        if (this.status != SymbolBoardStatus_1.SymbolBoardStatus.Ready && this.status != SymbolBoardStatus_1.SymbolBoardStatus.Spinning) {
            cc.error("只有在停止状态才能开始");
            return;
        }
        if (!this.waitingResultsStrategy) {
            cc.error("未设置转动策略");
            return;
        }
        this.reset();
        this.status = SymbolBoardStatus_1.SymbolBoardStatus.Spinning;
        this.symbolBoardStart();
        this.beforeStartWaitingResults();
        var excludeCodes = this.excludeChesses[this.nextGameMode];
        if (this.isFast) {
            if (!this.fastWaitingResultsStrategy) {
                cc.warn("未设置快速转动策略，使用普通转动策略");
                this.fastWaitingResultsStrategy = this.waitingResultsStrategy;
            }
            this.fastWaitingResultsStrategy.startWaiting(excludeCodes);
        }
        else {
            this.waitingResultsStrategy.startWaiting(excludeCodes);
        }
    };
    /**
     * 棋盘开始自定义事件
     */
    SymbolBoardBase.prototype.symbolBoardStart = function () {
        //* 播放棋盘开始音效
        // SoundMgr.getInstance().playEffect("symbol_board_start", false);
    };
    SymbolBoardBase.prototype.beforeStartWaitingResults = function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(this._reels), _d = _c.next(); !_d.done; _d = _c.next()) {
                var column = _d.value;
                column.beforeStartWaitingResults();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(this._holdWins), _f = _e.next(); !_f.done; _f = _e.next()) {
                var holdWin = _f.value;
                holdWin.beforeStartWaitingResults();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.status = SymbolBoardStatus_1.SymbolBoardStatus.Spinning;
    };
    SymbolBoardBase.prototype.beforeStopWaitingResults = function () {
        // this.status = SymbolBoardStatus.;
        // for (let column of this._reels) {
        //     column.beforeStopWaitingResults();
        // }
        // for (let holdWin of this._holdWins) {
        //     holdWin.beforeStopWaitingResults();
        // }
    };
    SymbolBoardBase.prototype.canStop = function () {
        return true;
    };
    SymbolBoardBase.prototype.stopWaitingResults = function () {
        if (this.status != SymbolBoardStatus_1.SymbolBoardStatus.Spinning) {
            cc.error("只有在等待状态才能停止");
            return;
        }
        if (this.canStop()) {
            if (this.isFast) {
                this.fastWaitingResultsStrategy.stopWaiting(true);
            }
            else {
                this.waitingResultsStrategy.stopWaiting(true);
            }
        }
    };
    SymbolBoardBase.prototype.getHoldWin = function (columnIndex) {
        if (!this._holdWins || this._holdWins.length == 0) {
            return null;
        }
        if (columnIndex < 0 || columnIndex >= this._holdWins.length) {
            cc.error("\u7D22\u5F15" + columnIndex + "\u8D85\u51FA\u8303\u56F4\u4E86");
            return null;
        }
        return this._holdWins[columnIndex];
    };
    SymbolBoardBase.prototype.getColumn = function (columnIndex) {
        var holdWin = this.getHoldWin(columnIndex);
        var column = null;
        if (holdWin) {
            column = holdWin.column;
        }
        if (!column) {
            if (columnIndex < 0 || columnIndex >= this._reels.length) {
                cc.error("\u7D22\u5F15" + columnIndex + "\u8D85\u51FA\u8303\u56F4\u4E86");
                return null;
            }
            column = this._reels[columnIndex];
        }
        return column;
    };
    SymbolBoardBase.prototype.getColumnExtraCellCount = function (columnIndex) {
        var column = this.getColumn(columnIndex);
        return column.getExtraCellCount();
    };
    SymbolBoardBase.prototype.columnHoldWin = function (columnIndex) {
        var holdWin = this.getHoldWin(columnIndex);
        if (!holdWin) {
            return;
        }
        //* 在执行当前轴的holdwin时，需要先把之前的holdwin效果清除掉
        var holdWins = this._holdWins.filter(function (h) { return h.index < columnIndex; });
        holdWins.map(function (item, index) {
            if (item.isHoldWin) {
                item.unholdWin(index);
            }
        });
        holdWin.holdWin();
    };
    SymbolBoardBase.prototype.cellHoldWin = function (reelIndex, cellIndex) {
        var reel = this.getColumn(reelIndex);
        reel.cellHoldWin(cellIndex);
    };
    SymbolBoardBase.prototype.unCellHoldWin = function (reelIndex, cellIndex) {
        var reel = this.getColumn(reelIndex);
        reel.unCellHoldWin(cellIndex);
    };
    SymbolBoardBase.prototype.setFinalResultsImmediately = function (columnIndex, codes, assets) {
        var column = this.getColumn(columnIndex);
        if (!column) {
            return;
        }
        column.setFinalResultsImmediately(codes, assets);
    };
    SymbolBoardBase.prototype.setFinalResultImmediately = function (columnIndex, cellIndex, code) {
        var column = this.getColumn(columnIndex);
        if (!column) {
            return;
        }
        column.setFinalResultImmediately(cellIndex, code);
    };
    SymbolBoardBase.prototype.onResultsReceived = function (listener, target) {
        this.fguiComponent.node.on(SymbolBoardEvent_1.SymbolBoardEvent.RESULTS_RECEIVED, listener, target);
    };
    SymbolBoardBase.prototype.offResultsReceived = function (listener, target) {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.RESULTS_RECEIVED, listener, target);
    };
    SymbolBoardBase.prototype.clearResultsReceived = function () {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.RESULTS_RECEIVED);
    };
    SymbolBoardBase.prototype.onCellResultSet = function (listener, target) {
        this.fguiComponent.node.on(SymbolBoardEvent_1.SymbolBoardEvent.CELL_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.offCellResultSet = function (listener, target) {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.CELL_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.clearCellResultSet = function () {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.CELL_STOPPED);
    };
    SymbolBoardBase.prototype.onColumnResultsSet = function (listener, target) {
        this.fguiComponent.node.on(SymbolBoardEvent_1.SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.offColumnResultsSet = function (listener, target) {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.clearColumnResultsSet = function () {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.COLUMN_STOPPED);
    };
    SymbolBoardBase.prototype.onResultsSet = function (listener, target) {
        this.fguiComponent.node.on(SymbolBoardEvent_1.SymbolBoardEvent.CHESSBOARD_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.offResultsSet = function (listener, target) {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.CHESSBOARD_STOPPED, listener, target);
    };
    SymbolBoardBase.prototype.clearResultsSet = function () {
        this.fguiComponent.node.off(SymbolBoardEvent_1.SymbolBoardEvent.CHESSBOARD_STOPPED);
    };
    Object.defineProperty(SymbolBoardBase.prototype, "chipCellRewards", {
        //#region 中奖效果展示
        get: function () {
            return this.$chipCellRewards;
        },
        set: function (value) {
            this.$chipCellRewards = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "jackpotCellRewards", {
        get: function () {
            return this.$jackpotCellRewards;
        },
        enumerable: false,
        configurable: true
    });
    SymbolBoardBase.prototype.beforePrizeShow = function () {
        this.prizeShowStatus = PrizeShowStatus_1.PrizeShowStatus.Showing;
    };
    /**
     * 5、6、7连展示
     *
     * @param number 相同棋子数
     */
    SymbolBoardBase.prototype.ofAKindShow = function (number) { };
    /**
     * 中奖连线展示
     *
     * @param lines 需要展示中奖效果的线列表
     * @param times 需要展示的次数，0表示一直展示
     */
    SymbolBoardBase.prototype.prizeLineShow = function (lines, times) {
        var prizeShow = this.convert2PrizeLineShow(lines, times);
        this._prizeShowChesses = prizeShow.getAllSymbols();
        for (var i = 0; i < this._prizeShowChesses.length; i++) {
            var position = this._prizeShowChesses[i].position;
            var cellPoint = this.getCellByFinalPosition(position);
            var column = this.getColumn(cellPoint.x);
            if (!column) {
                cc.error("\u5217" + cellPoint.x + "\u672A\u627E\u5230");
                return;
            }
            column.prizeShow(position, cellPoint.y);
        }
    };
    SymbolBoardBase.prototype.convert2PrizeLineShow = function (lines, times) {
        var prizeLines = [];
        var chipAssets = [];
        var jackpotRewards = [];
        if (lines == undefined) {
            console.log(lines);
        }
        else {
            for (var i = 0; i < lines.length; i++) {
                var chesses = [];
                if (lines[i]) {
                    for (var j = 0; j < lines[i].length; j++) {
                        chesses.push(new PrizeShowSymbol(lines[i][j], times));
                    }
                }
                else {
                    console.log(lines[i]);
                }
                prizeLines.push(new PrizeShowLine(chesses, times));
            }
        }
        var prizeShow = new PrizeShow(prizeLines, chipAssets, jackpotRewards);
        return prizeShow;
    };
    Object.defineProperty(SymbolBoardBase.prototype, "prizeLineShowFirst", {
        get: function () {
            return this._prizeLineShowFirst;
        },
        set: function (value) {
            if (!value && this.status != SymbolBoardStatus_1.SymbolBoardStatus.PrizeShowing) {
                this._prizeLineShowFirst = false;
            }
            this._prizeLineShowFirst = value;
        },
        enumerable: false,
        configurable: true
    });
    SymbolBoardBase.prototype.receivePrizeShowCompleted = function (position) {
        var chess = this._prizeShowChesses.find(function (c) { return c.position == position; });
        if (chess) {
            chess.finishedOnce();
        }
        var allCompletedOnce = this.checkAllChessesPrizeShowCompleted();
        if (allCompletedOnce) {
            if (this.prizeLineShowFirst && this.status >= SymbolBoardStatus_1.SymbolBoardStatus.Stopped) {
                this.status = SymbolBoardStatus_1.SymbolBoardStatus.Settling;
                this.prizeLineShowFirst = false;
            }
            this.notifyPrizeLineShowCompletedOnce();
        }
        else if (chess.finishedTimes < chess.expectedTimes) {
            //展示次数不够继续展示
            var cellPoint = this.getCellByFinalPosition(position);
            this.getColumn(cellPoint.x).prizeShow(position, cellPoint.y);
        }
    };
    SymbolBoardBase.prototype.receiveAllCellRewardsSettled = function () {
        this.status = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
        if (this.parent) {
            var parent = this.parent;
            if (parent) {
                parent.receivePrizeShowCompleted(this._index);
            }
        }
    };
    SymbolBoardBase.prototype.checkAllChessesPrizeShowCompleted = function () {
        var chess = this._prizeShowChesses.find(function (c) { return c.finishedTimes < c.expectedTimes; });
        return !chess;
    };
    //! 修改成protected属性，是为了子类重载此方法，
    //! 获取播放连线的生命周期，然后在此生命周期中播放音效
    SymbolBoardBase.prototype.startPrizeShow = function () {
        this.beforePrizeShow();
        this._prizeShowStrategy.startShow();
        //* 棋盘触发底部栏设置win框金币事件
        this.node.emit("BOTTOM_BAR_SET_WIN_COINS");
    };
    SymbolBoardBase.prototype.startPrizeSettle = function () {
        this.beforePrizeShow();
        this._prizeShowStrategy.startSettle();
    };
    /**
     *
     * @param position
     * @param symbolCode
     * @param assets
     */
    SymbolBoardBase.prototype.prizeChipCellSettle = function (position, symbolCode, assets) {
        //todo 筹码结算
        console.log("筹码结算过程");
        var cell = this.getCellByFinalPosition(position);
        var reel = this.getColumn(cell.x);
        reel.prizeChipCellSettle(position, symbolCode, assets, this.prizeChipCellSettleCallback.bind(this));
    };
    /**
     * 筹码棋子结算完毕后的回调
     */
    SymbolBoardBase.prototype.prizeChipCellSettleCallback = function () {
        this.notifyPrizeCellSettleCompletedOnce();
    };
    SymbolBoardBase.prototype.prizeJackpotCellSettle = function (position, symbolCode, assets) {
        var _this = this;
        //
        console.log("jackpot弹窗展示");
        setTimeout(function () {
            _this.notifyPrizeCellSettleCompletedOnce();
        }, 1000);
    };
    SymbolBoardBase.prototype.notifyPrizeLineShowCompletedOnce = function () {
        this.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE);
    };
    SymbolBoardBase.prototype.onPrizeLineShowCompletedOnce = function (listener, target) {
        this.node.on(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE, listener, target);
    };
    SymbolBoardBase.prototype.offPrizeLineShowCompletedOnce = function (listener, target) {
        this.node.off(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE, listener, target);
    };
    SymbolBoardBase.prototype.clearPrizeLineShowCompletedOnce = function () {
        this.node.off(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_LINE_SHOW_COMPLETED_ONCE);
    };
    SymbolBoardBase.prototype.notifyPrizeCellSettleCompletedOnce = function () {
        this.node.emit(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE);
    };
    SymbolBoardBase.prototype.onCellRewardSettledOnce = function (listener, target) {
        this.node.on(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE, listener, target);
    };
    SymbolBoardBase.prototype.offCellRewardSettledOnce = function (listener, target) {
        this.node.off(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE, listener, target);
    };
    SymbolBoardBase.prototype.clearCellRewardSettledOnce = function () {
        this.node.off(SymbolBoardEvent_1.SymbolBoardEvent.PRIZE_CELL_SETTLE_COMPLETED_ONCE);
    };
    //#endregion 中奖效果展示
    /**
     * 根据最终位置获取格子的坐标
     * @param position 位置
     */
    SymbolBoardBase.prototype.getCellByFinalPosition = function (position) {
        if (this._finalCellPosition[position]) {
            return this._finalCellPosition[position];
        }
        var columns = this._reels.length;
        if (columns === 0) {
            columns = this._holdWins.length;
        }
        var allPosition = -1;
        var cell = { x: 0, y: 0 };
        for (var x = 0; x < columns; x++) {
            var column = this.getColumn(x);
            var finalCellCount = column.cells.length - column.topExtraCells - column.bottomExtraCells;
            allPosition = allPosition + finalCellCount;
            if (allPosition >= position) {
                cell.x = x;
                cell.y = finalCellCount - (allPosition - position) - 1 + column.topExtraCells;
                this._finalCellPosition[position] = cell;
                break;
            }
        }
        return cell;
    };
    //#region 结果处理
    //#endregion
    //#region  流程控制
    SymbolBoardBase.prototype.onBeforeStartWaitingResults = function () {
        return true;
    };
    SymbolBoardBase.prototype.onBeforeStopWaitingResults = function () {
        return true;
    };
    //#endregion
    //#region 控制器操作
    SymbolBoardBase.prototype.setReelControllerProperty = function (reelIndex, controllerName, code) {
        var reel = this.getColumn(reelIndex);
        if (!reel) {
            cc.error("未找到列");
            return;
        }
        reel.setControllerProperty(controllerName, code);
    };
    SymbolBoardBase.prototype.setCellControllerProperty = function (reelIndex, cellIndex, controllerName, code) {
        if (typeof cellIndex === "number") {
            var reel = this.getColumn(reelIndex);
            if (!reel) {
                cc.error("未找到列");
                return;
            }
            reel.setCellControllerProperty(cellIndex, controllerName, code);
            return;
        }
        var cell = this.getCellByFinalPosition(reelIndex);
        this.setCellControllerProperty(cell.x, cell.y, cellIndex, controllerName);
    };
    SymbolBoardBase.prototype.setSymbolControllerProperty = function (reelIndex, cellIndex, controllerName, code) {
        if (typeof cellIndex === "number") {
            var reel = this.getColumn(reelIndex);
            if (!reel) {
                cc.error("未找到列");
                return;
            }
            reel.setSymbolControllerProperty(cellIndex, controllerName, code);
            return;
        }
        var cell = this.getCellByFinalPosition(reelIndex);
        this.setSymbolControllerProperty(cell.x, cell.y, cellIndex, controllerName);
    };
    //#endregion
    SymbolBoardBase.prototype.playSpineByConfig = function (reelIndex, cellIndex, configName, callback) {
        var reel = this.getColumn(reelIndex);
        reel.playSpineByConfig(cellIndex, configName, callback);
    };
    SymbolBoardBase.prototype.playSpineByConfigAndPosition = function (position, configName, callback) {
        var cell = this.getCellByFinalPosition(position);
        this.playSpineByConfig(cell.x, cell.y, configName, callback);
    };
    /**
     * 播放指定位置上的指定配置的spine动效，同时播放，任一播放结束就调用回调
     * @param positions 播放棋子位置列表：[5,9,10]
     * @param configName 配置名称
     * @param callback 回调
     */
    SymbolBoardBase.prototype.playSpineByConfigAndPositions = function (positions, configName, callback) {
        this.positionsShowCallback = callback;
        this.positionsShowCompletedOnce = false;
        for (var i = 0; i < positions.length; i++) {
            var cell = this.getCellByFinalPosition(positions[i]);
            this.playSpineByConfig(cell.x, cell.y, configName, this.positionShowCompletedOnce.bind(this));
        }
    };
    SymbolBoardBase.prototype.positionShowCompletedOnce = function () {
        if (!this.positionsShowCompletedOnce) {
            this.positionsShowCompletedOnce = true;
            if (this.positionsShowCallback) {
                this.positionsShowCallback();
            }
        }
    };
    Object.defineProperty(SymbolBoardBase.prototype, "freeModeShowConfigName", {
        /**
         * Gets free mode show config name
         * 播放进入免费游戏前需要播放的spine动画配置名称
         */
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBoardBase.prototype, "playEnterFreeModeShowDelay", {
        /**
         * Gets play enter free mode show delay
         * 进入免费游戏前需要播放的棋子spine动画延迟时间,单位：毫秒
         */
        get: function () {
            return 500;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Plays enter free mode show
     * 播放进入免费模式前的棋子动效
     * @param [callback] 回调
     * @returns true if enter free mode show
     */
    SymbolBoardBase.prototype.playEnterFreeModeShow = function (callback, code) {
        var _this = this;
        var events = this.getSymbolEvents();
        var scatterEvents = events.filter(function (e) {
            return e.events.find(function (ee) {
                return ee.code == SpinResultsEventCode_1.SpinResultsEventCode.Free ||
                    ee.code == SpinResultsEventCode_1.SpinResultsEventCode.OneMore ||
                    ee.code == SpinResultsEventCode_1.SpinResultsEventCode.Respin ||
                    ee.code == SpinResultsEventCode_1.SpinResultsEventCode.Bonus;
            });
        });
        if (code) {
            scatterEvents = events.filter(function (e) {
                return e.events.find(function (ee) { return ee.code == code; });
            });
        }
        if (!this.freeModeShowConfigName || !scatterEvents || scatterEvents.length == 0) {
            console.log("playEnterFreeModeShow return false");
            return false;
        }
        var positions = [];
        for (var i = 0; i < scatterEvents.length; i++) {
            positions.push(scatterEvents[i].position);
        }
        setTimeout(function () {
            _this.playSpineByConfigAndPositions(positions, _this.freeModeShowConfigName, callback);
        }, this.playEnterFreeModeShowDelay);
        console.log("playEnterFreeModeShow return true");
        return true;
    };
    SymbolBoardBase.prototype.doubleChessShow = function () {
        var columns = this._reels.length;
        if (columns === 0) {
            columns = this._holdWins.length;
        }
        for (var i = 0; i < columns; i++) {
            this.getColumn(i).doubleChessShow();
        }
    };
    SymbolBoardBase.className = "SymbolBoardBase";
    return SymbolBoardBase;
}(FguiFullScreenBase_1.default));
exports.default = SymbolBoardBase;
var SymbolEvent = /** @class */ (function () {
    function SymbolEvent(code, assets, position, events, wheel) {
        this._events = [];
        this._code = code;
        this._assets = assets;
        this._postion = position;
        this._events = events;
        if (!this._events) {
            this._events = [];
        }
        this._wheel = wheel;
    }
    Object.defineProperty(SymbolEvent.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolEvent.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolEvent.prototype, "position", {
        get: function () {
            return this._postion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolEvent.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolEvent.prototype, "wheel", {
        get: function () {
            return this._wheel;
        },
        enumerable: false,
        configurable: true
    });
    return SymbolEvent;
}());
exports.SymbolEvent = SymbolEvent;

cc._RF.pop();