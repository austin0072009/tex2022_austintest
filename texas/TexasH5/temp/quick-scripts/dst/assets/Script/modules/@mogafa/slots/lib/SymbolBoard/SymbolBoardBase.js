
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBoardBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcU3ltYm9sQm9hcmRCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUVsQyw2Q0FBd0M7QUFHeEMsdURBQXNEO0FBQ3RELGlEQUE0QztBQUk1QyxvRUFBK0Q7QUFDL0Qsc0RBQXFEO0FBRXJELHlEQUF3RDtBQUN4RCx3RUFBdUU7QUFHdkUseUZBQW9GO0FBRXBGLDhEQUF5RDtBQUV6RCxtRkFBa0Y7QUFJbEYsNkVBQXVFO0FBQ3ZFLHFGQUFvRjtBQUdwRixzQkFBc0I7QUFDdEI7SUFJSSx5QkFBWSxRQUFnQixFQUFFLGFBQXFCO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxzQkFBVyxxQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDBDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsMENBQWE7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFDTSxzQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBQ0Q7SUFLSSx1QkFBWSxNQUF5QixFQUFFLGFBQXFCO1FBSnBELGFB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QjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDhCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZWxCYXNlIGZyb20gXCIuL1JlZWxCYXNlXCI7XG5pbXBvcnQgTWFza0Jhc2UgZnJvbSBcIi4uL01hc2tCYXNlXCI7XG5pbXBvcnQgSG9sZFdpbkJhc2UgZnJvbSBcIi4vSG9sZFdpbkJhc2VcIjtcbmltcG9ydCBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneSBmcm9tIFwiLi4vSVdhaXRpbmdSZXN1bHRzU3RyYXRlZ3lcIjtcbmltcG9ydCBTeW1ib2xCb2FyZCBmcm9tIFwiLi9TeW1ib2xCb2FyZFwiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRFdmVudCB9IGZyb20gXCIuL1N5bWJvbEJvYXJkRXZlbnRcIjtcbmltcG9ydCBSZXBsYWNlU3ltYm9sIGZyb20gXCIuL1JlcGxhY2VTeW1ib2xcIjtcbmltcG9ydCBJUHJpemVTaG93U3RyYXRlZ3kgZnJvbSBcIi4uL0lQcml6ZVNob3dTdHJhdGVneVwiO1xuaW1wb3J0IElQcml6ZVNob3dTeW1ib2xCb2FyZCBmcm9tIFwiLi4vSVByaXplU2hvd1N5bWJvbEJvYXJkXCI7XG5cbmltcG9ydCBTbG90R2FtZVN0YWdlQmFzZSBmcm9tIFwiLi4vR2FtZVN0YWdlL1Nsb3RHYW1lU3RhZ2VCYXNlXCI7XG5pbXBvcnQgeyBQcml6ZVNob3dTdGF0dXMgfSBmcm9tIFwiLi4vUHJpemVTaG93U3RhdHVzXCI7XG5pbXBvcnQgeyBNb2dhZmFTbG90cyB9IGZyb20gXCIuLi9Nb2dhZmFTbG90c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZFN0YXR1c1wiO1xuaW1wb3J0IHsgU2xvdEdhbWVTdGFnZVN0YXR1cyB9IGZyb20gXCIuLi9HYW1lU3RhZ2UvU2xvdEdhbWVTdGFnZVN0YXR1c1wiO1xuaW1wb3J0IE51bWJlck9mS2luZEJhc2UgZnJvbSBcIi4uL0NvbW1vbi9OdW1iZXJPZktpbmRCYXNlXCI7XG5pbXBvcnQgeyBJUmVzaWxpZW5jZU1vdmUgfSBmcm9tIFwiLi4vSVJlc2lsaWVuY2VNb3ZlXCI7XG5pbXBvcnQgRmd1aUZ1bGxTY3JlZW5CYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlGdWxsU2NyZWVuQmFzZVwiO1xuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5pbXBvcnQgTnVtYmVyVXRpbHMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xpYi9OdW1iZXJVdGlsc1wiO1xuaW1wb3J0IFNwaW5SZXN1bHRzU2xvdCBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNTbG90XCI7XG5pbXBvcnQgeyBTcGluUmVzdWx0c0dhbWVNb2RlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZU1vZGVcIjtcbmltcG9ydCBTcGluUmVzdWx0c0V2ZW50IGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0V2ZW50XCI7XG5pbXBvcnQgU3BpblJlc3VsdHNTeW1ib2wgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzU3ltYm9sXCI7XG5pbXBvcnQgU3BpblJlc3VsdHNXaGVlbCBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNXaGVlbFwiO1xuaW1wb3J0IFNwaW5SZXN1bHRDb25zdCBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNDb25zdFwiO1xuaW1wb3J0IHsgU3BpblJlc3VsdHNFdmVudENvZGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNFdmVudENvZGVcIjtcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5cbi8vI3JlZ2lvbiBwcml6ZXNob3fnm7jlhbPnsbtcbmNsYXNzIFByaXplU2hvd1N5bWJvbCB7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIF9maW5pc2hlZFRpbWVzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZXhwZWN0ZWRUaW1lczogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBudW1iZXIsIGV4cGVjdGVkVGltZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9leHBlY3RlZFRpbWVzID0gZXhwZWN0ZWRUaW1lcztcbiAgICAgICAgdGhpcy5fZmluaXNoZWRUaW1lcyA9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGV4cGVjdGVkVGltZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGVjdGVkVGltZXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZmluaXNoZWRUaW1lcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluaXNoZWRUaW1lcztcbiAgICB9XG4gICAgcHVibGljIGZpbmlzaGVkT25jZSgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5fZmluaXNoZWRUaW1lcysrO1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluaXNoZWRUaW1lcyA+PSB0aGlzLl9leHBlY3RlZFRpbWVzO1xuICAgIH1cbn1cbmNsYXNzIFByaXplU2hvd0xpbmUge1xuICAgIHByaXZhdGUgX3N5bWJvbHM6IFByaXplU2hvd1N5bWJvbFtdID0gW107XG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbmlzaGVkVGltZXM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9leHBlY3RlZFRpbWVzOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3Ioc3ltYm9sOiBQcml6ZVNob3dTeW1ib2xbXSwgZXhwZWN0ZWRUaW1lczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMuX2V4cGVjdGVkVGltZXMgPSBleHBlY3RlZFRpbWVzO1xuICAgICAgICB0aGlzLl9maW5pc2hlZFRpbWVzID0gMDtcbiAgICAgICAgaWYgKCF0aGlzLl9zeW1ib2xzKSB7XG4gICAgICAgICAgICB0aGlzLl9zeW1ib2xzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9zaXRpb25zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5fc3ltYm9sc1tpXTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9ucy5wdXNoKHN5bWJvbC5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzeW1ib2woKTogUHJpemVTaG93U3ltYm9sW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ltYm9scztcbiAgICB9XG4gICAgcHVibGljIGdldCBwb3NpdGlvbnMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25zO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGV4cGVjdGVkVGltZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGVjdGVkVGltZXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZmluaXNoZWRUaW1lcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluaXNoZWRUaW1lcztcbiAgICB9XG4gICAgcHVibGljIGZpbmlzaGVkT25jZSgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5fZmluaXNoZWRUaW1lcysrO1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluaXNoZWRUaW1lcyA+PSB0aGlzLl9leHBlY3RlZFRpbWVzO1xuICAgIH1cbn1cbmNsYXNzIFByaXplU2hvd0NlbGxSZXdhcmQge1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3ltYm9sQ29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Fzc2V0czogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IG51bWJlciwgc3ltYm9sQ29kZTogbnVtYmVyLCBhc3NldHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9zeW1ib2xDb2RlID0gc3ltYm9sQ29kZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3ltYm9sQ29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ltYm9sQ29kZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhc3NldHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cztcbiAgICB9XG4gICAgcHVibGljIGZpbmlzaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cbn1cbmNsYXNzIFByaXplU2hvdyB7XG4gICAgcHJpdmF0ZSBfbGluZXM6IFByaXplU2hvd0xpbmVbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NoaXBBc3NldHM6IFByaXplU2hvd0NlbGxSZXdhcmRbXSA9IFtdO1xuICAgIHByaXZhdGUgX2phY2twb3RBc3NldHM6IFByaXplU2hvd0NlbGxSZXdhcmRbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IobGluZXM6IFByaXplU2hvd0xpbmVbXSwgY2hpcEFzc2V0czogUHJpemVTaG93Q2VsbFJld2FyZFtdLCBqYWNrcG90QXNzZXRzOiBQcml6ZVNob3dDZWxsUmV3YXJkW10pIHtcbiAgICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcbiAgICAgICAgaWYgKCF0aGlzLl9saW5lcykge1xuICAgICAgICAgICAgdGhpcy5fbGluZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGlwQXNzZXRzID0gY2hpcEFzc2V0cztcbiAgICAgICAgaWYgKCF0aGlzLl9jaGlwQXNzZXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlwQXNzZXRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5famFja3BvdEFzc2V0cyA9IGphY2twb3RBc3NldHM7XG4gICAgICAgIGlmICghdGhpcy5famFja3BvdEFzc2V0cykge1xuICAgICAgICAgICAgdGhpcy5famFja3BvdEFzc2V0cyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsaW5lcygpOiBQcml6ZVNob3dMaW5lW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjaGlwQXNzZXRzKCk6IFByaXplU2hvd0NlbGxSZXdhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlwQXNzZXRzO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGphY2twb3RBc3NldHMoKTogUHJpemVTaG93Q2VsbFJld2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2phY2twb3RBc3NldHM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRBbGxTeW1ib2xzKCk6IFByaXplU2hvd1N5bWJvbFtdIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sczogUHJpemVTaG93U3ltYm9sW10gPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLl9saW5lcyB8fCB0aGlzLl9saW5lcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuX2xpbmVzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5lLnN5bWJvbC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dTeW1ib2wgPSBsaW5lLnN5bWJvbFtqXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBzeW1ib2xzLmZpbmQoKGMpID0+IGMucG9zaXRpb24gPT0gc2hvd1N5bWJvbC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKCFzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHNob3dTeW1ib2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICB9XG59XG4vLyNlbmRyZWdpb25cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN5bWJvbEJvYXJkQmFzZSBleHRlbmRzIEZndWlGdWxsU2NyZWVuQmFzZVxuICAgIGltcGxlbWVudHMgU3ltYm9sQm9hcmQsIElQcml6ZVNob3dTeW1ib2xCb2FyZCwgTW9nYWZhU2xvdHMge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlN5bWJvbEJvYXJkQmFzZVwiO1xuICAgIHB1YmxpYyBsaW5lSW5kZXggPSAwXG4gICAgLyoqXG4gICAgICog5YWz5Y2h57yW56CBXG4gICAgICovXG4gICAgcHJpdmF0ZSAkc3RhZ2VDb2RlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogb2ZLaW5k6L+e57q/5by55qGGXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9mS2luZDogTnVtYmVyT2ZLaW5kQmFzZTtcbiAgICAvKipcbiAgICAgKiBvZktpbmTov57nur/mlbDlrZdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9vZktpbmROdW1iZXI6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgc3RhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdGFnZUNvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoee8lueggVxuICAgICAqL1xuICAgIHNldCBzdGFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldCBzdGFnZUNvZGVcIilcbiAgICAgICAgdGhpcy4kc3RhZ2VDb2RlID0gdmFsdWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcmVlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZWxzW2ldLnN0YWdlQ29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faG9sZFdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2hvbGRXaW5zW2ldLnN0YWdlQ29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSAkZGVmYXVsdFNsb3Q6IFNwaW5SZXN1bHRzU2xvdDtcbiAgICBnZXQgZGVmYXVsdFNsb3QoKTogU3BpblJlc3VsdHNTbG90IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGRlZmF1bHRTbG90O1xuICAgIH1cbiAgICBzZXQgZGVmYXVsdFNsb3QodmFsOiBTcGluUmVzdWx0c1Nsb3QpIHtcbiAgICAgICAgdGhpcy4kZGVmYXVsdFNsb3QgPSB2YWw7XG4gICAgICAgIGxldCBjb2RlczogbnVtYmVyW11bXSA9IHRoaXMuJGRlZmF1bHRTbG90LmNvbHVtbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2VsbHNcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTEuY29kZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYXNzZXRzOiBudW1iZXJbXVtdID0gdGhpcy4kZGVmYXVsdFNsb3QuY29sdW1ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jZWxsc1xuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0xKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMS5hc3NldHM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zZXRGaW5hbFJlc3VsdHNJbW1lZGlhdGVseShpLCBjb2Rlc1tpXSwgYXNzZXRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXR1cyAgb2Ygc3ltYm9sIGJhc2VcbiAgICAgKiDmo4vlrZDnirbmgIFcbiAgICAgKi9cbiAgICBwdWJsaWMgJHN0YXR1czogU3ltYm9sQm9hcmRTdGF0dXM7XG4gICAgZ2V0IHN0YXR1cygpOiBTeW1ib2xCb2FyZFN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdGF0dXM7XG4gICAgfVxuICAgIHNldCBzdGF0dXModmFsdWU6IFN5bWJvbEJvYXJkU3RhdHVzKSB7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCJTeW1ib2xCb2FyZFN0YXR1cz09PXN0YXR1cz09XCIsIHZhbHVlKVxuICAgICAgICB0aGlzLiRzdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZWVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcmVlbHNbaV0uYm9hcmRTdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2hvbGRXaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9ob2xkV2luc1tpXS5ib2FyZFN0YXR1cyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PSBTeW1ib2xCb2FyZFN0YXR1cy5TdG9wcGVkIHx8IHZhbHVlID09IFN5bWJvbEJvYXJkU3RhdHVzLlJlcGxhY2luZykge1xuICAgICAgICAgICAgaWYgKHRoaXMubmVlZFByb2Nlc3NFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5SZXBsYWNpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlTW9ja0NvZGVzSW50ZXJuYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNNYXRjaGVkTGluZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5Qcml6ZVNob3dpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByaXplU2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAodGhpcy5oYXNDaGlwQ2VsbFJld2FyZHMgfHwgdGhpcy5oYXNKYWNrcG90Q2VsbFJld2FyZHMpICYmXG4gICAgICAgICAgICAgICAgU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuZ2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4gJiZcbiAgICAgICAgICAgICAgICBTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5uZXh0R2FtZU1vZGUgIT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW5cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlNldHRsaW5nO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcml6ZVNldHRsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT0gU3ltYm9sQm9hcmRTdGF0dXMuUHJpemVTaG93aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNNYXRjaGVkTGluZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5Qcml6ZVNob3dpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFByaXplU2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAodGhpcy5oYXNDaGlwQ2VsbFJld2FyZHMgfHwgdGhpcy5oYXNKYWNrcG90Q2VsbFJld2FyZHMpICYmXG4gICAgICAgICAgICAgICAgU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuZ2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4gJiZcbiAgICAgICAgICAgICAgICBTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5uZXh0R2FtZU1vZGUgIT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW5cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlNldHRsaW5nO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcml6ZVNldHRsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT0gU3ltYm9sQm9hcmRTdGF0dXMuU2V0dGxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoaXBDZWxsUmV3YXJkcyB8fCB0aGlzLmhhc0phY2twb3RDZWxsUmV3YXJkcykge1xuICAgICAgICAgICAgICAgIGlmIChTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5nYW1lTW9kZSA9PSBTcGluUmVzdWx0c0dhbWVNb2RlLk5vcm1hbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UHJpemVTZXR0bGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlJlYWR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRzdGF0dXMgPT0gU3ltYm9sQm9hcmRTdGF0dXMuUmVhZHkpIHtcbiAgICAgICAgICAgIC8vdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU3RhdHVzQ2hhbmdlZCgpXG4gICAgICAgIC8vIHRoaXMuZ2FtZVN0YWdlLnJlY2VpdmVTeW1ib2xCb2FyZFN0YXR1c0NoYW5nZWQodGhpcy5faW5kZXgsIHRoaXMuJHN0YXR1cyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBTdGF0dXNDaGFuZ2VkKCkgeyB9XG4gICAgY2FuQmVOZXh0U3RhdHVzKGdhbWVTdGFnZVN0YXR1czogU2xvdEdhbWVTdGFnZVN0YXR1cyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgeWVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgc3dpdGNoIChnYW1lU3RhZ2VTdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeTpcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5SZXF1ZXN0aW5nU2VydmVyOlxuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLldhaXRpbmdTZXJ2ZXJSZXN1bHRzOlxuICAgICAgICAgICAgICAgIHllcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlNlcnZlclJlc3VsdHNSZWNlaXZlZDogLy/kuIvkuIDnirbmgIHkuLpyZXBsYWNpbmdcbiAgICAgICAgICAgICAgICB5ZXMgPSB0aGlzLnN0YXR1cyA+IFN5bWJvbEJvYXJkU3RhdHVzLlNwaW5uaW5nIHx8IHRoaXMuc3RhdHVzID09IFN5bWJvbEJvYXJkU3RhdHVzLlJlYWR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1NwaW5uaW5nOlxuICAgICAgICAgICAgICAgIHllcyA9IHRoaXMuc3RhdHVzID4gU3ltYm9sQm9hcmRTdGF0dXMuU3RvcHBlZCB8fCB0aGlzLnN0YXR1cyA9PSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNSZXBsYWNpbmc6IC8v5LiL5LiA54q25oCB5Li6cHJpemVzaG93aW5nXG4gICAgICAgICAgICAgICAgeWVzID0gdGhpcy5zdGF0dXMgPiBTeW1ib2xCb2FyZFN0YXR1cy5SZXBsYWNpbmcgfHwgdGhpcy5zdGF0dXMgPT0gU3ltYm9sQm9hcmRTdGF0dXMuUmVhZHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUHJpemVTaG93aW5nOiAvL+S4i+S4gOeKtuaAgeS4unNldHRpbmdcbiAgICAgICAgICAgICAgICB5ZXMgPSB0aGlzLnN0YXR1cyA+IFN5bWJvbEJvYXJkU3RhdHVzLlByaXplU2hvd2luZyB8fCB0aGlzLnN0YXR1cyA9PSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNTZXR0bGluZzpcbiAgICAgICAgICAgICAgICB5ZXMgPSB0aGlzLnN0YXR1cyA9PSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmnIDlpKfmo4vlrZDnvJbnoIFcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IG1heENvZGUoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuiHquWumuS5ieaji+WtkOabv+aNoua1geeoi1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGFzQ3VzdG9tUmVwbGFjZUNvZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L2s5Yqo5pe26ZyA6KaB5o6S6Zmk55qE5qOL5a2Q77yM5YW25Lita2V55Li6Z2FtZU1vZGVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIOavlOWmguacieS6m+a4uOaIj+WcqGZyZWVzcGlu5Lit5LiN5YWB6K645YaN5qyh6Kem5Y+RZnJlZXNwaW4sXG4gICAgICog6YKj5LmI5ZyoZnJlZXNwaW7ovazliqjkuK3lsLHpnIDopoHmjpLpmaRzY2F0dGVy5qOL5a2QXG4gICAgICogYGBgdHNcbiAgICAgKiBwcm90ZWN0ZSBnZXQgZXhjbHVkZVN5bWJvbHMoKTp7W2tleTpudW1iZXJdOm51bWJlcltdfXtcbiAgICAgKiAgICAgcmV0dXJuIHtTcGluUmVzdWx0c0dhbWVUeXBlLkZyZWVTcGluOltTeW1ib2xzLlNjYXR0ZXJdfTtcbiAgICAgKiB9XG4gICAgICogYGBgdHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGV4Y2x1ZGVDaGVzc2VzKCk6IHtcbiAgICAgICAgW2tleTogbnVtYmVyXTogbnVtYmVyW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNoaXAgc3ltYm9sIGNvZGVzXG4gICAgICog562556CB5qOL5a2Q57yW5Y+377yM5aaC5p6c5rKh5pyJ6L+U5Zue56m65pWw57uEXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBjaGlwU3ltYm9sQ29kZXMoKTogbnVtYmVyW107XG4gICAgLyoqXG4gICAgICogR2V0cyBqYWNrcG90IHN5bWJvbCBjb2Rlc1xuICAgICAqIGphY2twb3Tmo4vlrZDnvJblj7fvvIzlpoLmnpzmsqHmnInov5Tlm57nqbrmlbDnu4RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGphY2twb3RTeW1ib2xDb2RlcygpOiBudW1iZXJbXTtcbiAgICBmaW5hbENvZGVzOiBudW1iZXJbXVtdO1xuXG4gICAgLyoqXG4gICAgICog6L205YiX6KGoXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVlbHM6IFJlZWxCYXNlW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2hvbGRXaW5zOiBIb2xkV2luQmFzZVtdID0gW107XG4gICAgcHJvdGVjdGVkIF9tYXNrczogTWFza0Jhc2U7XG4gICAgcHJvdGVjdGVkIF9zbG90UmVzdWx0czogU3BpblJlc3VsdHNTbG90O1xuICAgIHByaXZhdGUgJHdhaXRpbmdSZXN1bHRzU3RyYXRlZ3k6IElXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5O1xuICAgIHByaXZhdGUgJGZhc3RXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5OiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneTtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblv6vpgJ/mqKHlvI9cbiAgICAgKi9cbiAgICBwcml2YXRlICRpc0Zhc3Q6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSAkc3ltYm9sUmVwbGFjZWQ6IFJlcGxhY2VTeW1ib2xbXSA9IFtdO1xuICAgIHByaXZhdGUgJGN1c3RvbVN5bWJvbFJlcGxhY2VkOiBSZXBsYWNlU3ltYm9sW10gPSBbXTtcbiAgICBwcml2YXRlIGN1c3RvbVJlcGxhY2VkQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgcmVwbGFjZUNvZGVzT25lQnlPbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uZUJ5T25lQ29kZXM6IHsgcG9zaXRpb246IG51bWJlcjsgY29kZTogbnVtYmVyIH1bXSA9IFtdO1xuICAgIHByaXZhdGUgb25lQnlPbmVQb2lzaXRpb246IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgX2luZGV4OiBudW1iZXI7XG4gICAgLy9wcml2YXRlIF9jYW5CZVNwaW5SZXF1ZXN0V2hlblByaXplU2hvdzogYm9vbGVhbjtcbiAgICBwcml2YXRlICRjaGlwQ2VsbFJld2FyZHM6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXIgfVtdID0gW107XG4gICAgcHJpdmF0ZSAkamFja3BvdENlbGxSZXdhcmRzOiB7IHBvc2l0aW9uOiBudW1iZXI7IHN5bWJvbENvZGU6IG51bWJlcjsgcmV3YXJkczogbnVtYmVyIH1bXSA9IFtdO1xuICAgIHByaXZhdGUgJHJlcGxhY2VDb2RlczogbnVtYmVyW11bXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogTmV4dCBnYW1lIG1vZGUgb2Ygc3ltYm9sIGJvYXJkIGJhc2VcbiAgICAgKiDkuIvkuIDlsYDmuLjmiI/mqKHlvI9cbiAgICAgKi9cbiAgICBwcml2YXRlIG5leHRHYW1lTW9kZTogU3BpblJlc3VsdHNHYW1lTW9kZTtcbiAgICAvKipcbiAgICAgKiDmnIDnu4jmoLzlrZDkvY3nva7mmKDlsIRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2ZpbmFsQ2VsbFBvc2l0aW9uOiB7XG4gICAgICAgIFtrZXk6IG51bWJlcl06IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgICB9ID0ge307XG4gICAgcHJvdGVjdGVkIF9wcml6ZVNob3c6IFByaXplU2hvdztcbiAgICBwcm90ZWN0ZWQgX3ByaXplU2hvd0NoZXNzZXM6IFByaXplU2hvd1N5bWJvbFtdID0gW107XG4gICAgcHJvdGVjdGVkIF9wcml6ZVNob3dTdHJhdGVneTogSVByaXplU2hvd1N0cmF0ZWd5O1xuICAgIHByb3RlY3RlZCBfcHJpemVTaG93U3RhdHVzOiBQcml6ZVNob3dTdGF0dXMgPSBQcml6ZVNob3dTdGF0dXMuUmVhZHk7XG4gICAgcHJpdmF0ZSBfbWF0Y2hlZExpbmVzOiBudW1iZXJbXVtdO1xuICAgIHByaXZhdGUgX2dhbWVTdGFnZTogVmlld0Jhc2U7XG4gICAgLy8jcmVnaW9uICDlsZ7mgKdcblxuICAgIGdldCBnYW1lU3RhZ2UoKTogVmlld0Jhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVN0YWdlO1xuICAgIH1cbiAgICBzZXQgZ2FtZVN0YWdlKHZhbHVlOiBWaWV3QmFzZSkge1xuICAgICAgICB0aGlzLl9nYW1lU3RhZ2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGFkZEZndWlDb21wb25lbnQ8VCBleHRlbmRzIEZndWlDb21wb25lbnRCYXNlPih0eXBlOiB7IG5ldygpOiBUIH0sIGNoYW5nZVNpemU6IGJvb2xlYW4gPSB0cnVlKTogVCB7XG4gICAgICAgIGxldCBjaGlsZCA9IHN1cGVyLmFkZEZndWlDb21wb25lbnQodHlwZSwgY2hhbmdlU2l6ZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUmVlbEJhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IDxSZWVsQmFzZT4oPGFueT5jaGlsZCk7XG4gICAgICAgICAgICBjb2x1bW4uaW5kZXggPSB0aGlzLl9yZWVscy5sZW5ndGg7XG4gICAgICAgICAgICBjb2x1bW4uc3RhZ2VDb2RlID0gdGhpcy5zdGFnZUNvZGU7XG4gICAgICAgICAgICBjb2x1bW4uc3ltYm9sQm9hcmQgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fcmVlbHMucHVzaChjb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhvbGRXaW5CYXNlKSB7XG4gICAgICAgICAgICBjb25zdCBob2xkV2luID0gPEhvbGRXaW5CYXNlPig8YW55PmNoaWxkKTtcbiAgICAgICAgICAgIGhvbGRXaW4uaW5kZXggPSB0aGlzLl9ob2xkV2lucy5sZW5ndGg7XG4gICAgICAgICAgICBob2xkV2luLnN0YWdlQ29kZSA9IHRoaXMuc3RhZ2VDb2RlO1xuICAgICAgICAgICAgaG9sZFdpbi5zeW1ib2xCb2FyZCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9ob2xkV2lucy5wdXNoKGhvbGRXaW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24gIHNwaW7nu5Pmnpzmk43kvZxcbiAgICAvKipcbiAgICAgKiDojrflj5ZzcGlu57uT5p6cXG4gICAgICovXG4gICAgcHVibGljIGdldCBzbG90UmVzdWx0cygpOiBTcGluUmVzdWx0c1Nsb3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2xvdFJlc3VsdHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rnNwaW7nu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNsb3RSZXN1bHRzKHZhbHVlOiBTcGluUmVzdWx0c1Nsb3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgc2xvdFJlc3VsdHNcIilcbiAgICAgICAgdGhpcy5fc2xvdFJlc3VsdHMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9vZktpbmROdW1iZXIgPSB2YWx1ZS5vZkFLaW5kO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdENvbHVtbiA9IHZhbHVlLmNvbHVtbnNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGkpO1xuICAgICAgICAgICAgICAgIGNvbHVtbi5maW5hbENvZGVzID0gT2JqZWN0LmFzc2lnbihbXSwgcmVzdWx0Q29sdW1uLmNvZGVzKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4ubW9ja0NvZGVzID0gT2JqZWN0LmFzc2lnbihbXSwgcmVzdWx0Q29sdW1uLnJlcGxhY2VDb2Rlcyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRDb2x1bW4ucmVwbGFjZUNvZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vY2tDb2RlID0gcmVzdWx0Q29sdW1uLnJlcGxhY2VDb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vY2tDb2RlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3ltYm9sUmVwbGFjZWQucHVzaChuZXcgUmVwbGFjZVN5bWJvbChpLCBqLCBtb2NrQ29kZS5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4oaSk7XG4gICAgICAgICAgICAgICAgcmVlbC5zcGluUmVzdWx0cyA9IHJlc3VsdENvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGNoaXBDZWxsUmV3YXJkcyA9IHRoaXMuZ2V0Q2hpcENlbGxSZXdhcmRzKCk7XG4gICAgICAgICAgICB0aGlzLiRqYWNrcG90Q2VsbFJld2FyZHMgPSB0aGlzLmdldEphY2twb3RDZWxsUmV3YXJkcygpO1xuICAgICAgICAgICAgdGhpcy4kcmVwbGFjZUNvZGVzID0gdmFsdWUucmVwbGFjZUNvZGVzOyAvL3RoaXMuZ2V0UmVwbGFjZUNvZGVzKCk7XG4gICAgICAgICAgICB0aGlzLm5leHRHYW1lTW9kZSA9IHZhbHVlLm5leHRHYW1lTW9kZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5leHRyYUNoZXNzZXMgJiYgdmFsdWUuZXh0cmFDaGVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFeHRyYUNoZXNzZXModmFsdWUuZXh0cmFDaGVzc2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS5ldmVudHMgJiYgdmFsdWUuZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFdmVudHModmFsdWUuZXZlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50cyA9IHRoaXMuZ2V0U3ltYm9sRXZlbnRzKCk7XG4gICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnRzICYmIHN5bWJvbEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3ltYm9sRXZlbnRzKHRoaXMuZ2V0U3ltYm9sRXZlbnRzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUuZW1pdChTeW1ib2xCb2FyZEV2ZW50LlJFU1VMVFNfUkVDRUlWRUQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG1hdGNoZWRMaW5lcygpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgaWYgKHRoaXMuc2xvdFJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGNoZWRMaW5lcyA9IHRoaXMuc2xvdFJlc3VsdHMubWF0Y2hlZExpbmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fbWF0Y2hlZExpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXRjaGVkTGluZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRjaGVkTGluZXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzTWF0Y2hlZExpbmVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVkTGluZXMgJiYgdGhpcy5tYXRjaGVkTGluZXMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcHVibGljIGdldCByZXBsYWNlQ29kZXMoKTogbnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZXBsYWNlQ29kZXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzUmVwbGFjZUNvZGVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlQ29kZXMgJiYgdGhpcy5yZXBsYWNlQ29kZXMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcHVibGljIGdldCBoYXNDaGlwQ2VsbFJld2FyZHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLiRjaGlwQ2VsbFJld2FyZHMgJiYgdGhpcy4kY2hpcENlbGxSZXdhcmRzLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGFzSmFja3BvdENlbGxSZXdhcmRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kamFja3BvdENlbGxSZXdhcmRzICYmIHRoaXMuJGphY2twb3RDZWxsUmV3YXJkcy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlpITnkIbpop3lpJbmo4vlrZDvvIzlvZPmlLbliLDmnI3liqHlmajov5Tlm57nu5PmnpzlsLHkvJrosIPnlKjvvIxcbiAgICAgKiDmlLbliLDlkI7lsLHlvIDlp4vlpITnkIbpop3lpJbmo4vlrZDvvIjmr5TlpoLmtbfnm5flvIDlp4vpo57ol4/lrp3lm77vvIlcbiAgICAgKiDmnInkupvmuLjmiI/ov5nkupvmo4vlrZDmmK/ooajnpLrml6DmlYjnmoTmo4vlrZDvvIjmr5TlpoLnhornjKvmjonokL3liLDmo4vnm5jlpJbpnaLnmoTmo4vlrZDvvIlcbiAgICAgKiDmjonokL3lnKjmo4vnm5jlhoXnmoTpop3lpJbmo4vlrZDmmK/lnKjmo4vnm5jnmoTmo4vlrZDph4zpnaLlrprkuYnnmoRcbiAgICAgKiBAcGFyYW0gZXh0cmFDaGVzc2VzIOmineWkluaji+WtkO+8jOaji+WtkOeahOWumuS5ieingeWQhOWFs+WNoeaVsOaNrue7k+aehOivtOaYjlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwcm9jZXNzRXh0cmFDaGVzc2VzKGV4dHJhQ2hlc3NlczogU3BpblJlc3VsdHNTeW1ib2xbXSk6IHZvaWQgeyB9XG4gICAgLyoqXG4gICAgICog5aSE55CG5LqL5Lu277yM5b2T5pS25Yiw5pyN5Yqh5Zmo6L+U5Zue57uT5p6c5pe26LCD55SoXG4gICAgICog77yI5q+U5aaC6YeO54mb5Yay5Yi65LqL5Lu277yJXG4gICAgICogQHBhcmFtIGV2ZW50cyDkuovku7bliJfooajvvIzkuovku7bnmoTlrprkuYnop4HlkITlhbPljaHmlbDmja7nu5PmnoTor7TmmI5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcHJvY2Vzc0V2ZW50cyhldmVudHM6IFNwaW5SZXN1bHRzRXZlbnRbXSk6IHZvaWQgeyB9XG4gICAgLyoqXG4gICAgICog5aSE55CG5qOL5a2Q5LqL5Lu2XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRzIOaji+WtkOS6i+S7tuWIl+ihqO+8jOS6i+S7tueahOWumuS5ieingeWQhOWFs+WNoeaVsOaNrue7k+aehOivtOaYjlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwcm9jZXNzU3ltYm9sRXZlbnRzKGV2ZW50czogU3ltYm9sRXZlbnRbXSk6IHZvaWQgeyB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG5lZWRQcm9jZXNzRXZlbnRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5oYXNSZXBsYWNlQ29kZXMgfHxcbiAgICAgICAgICAgIHRoaXMuZ2V0U3ltYm9sRXZlbnRzKCkubGVuZ3RoID4gMCB8fFxuICAgICAgICAgICAgKHRoaXMuZ2V0V2VlbHMoKSAmJiB0aGlzLmdldFdlZWxzKCkubGVuZ3RoID4gMCkgfHxcbiAgICAgICAgICAgICh0aGlzLnNsb3RSZXN1bHRzLmV4dHJhQ2hlc3NlcyAmJiB0aGlzLnNsb3RSZXN1bHRzLmV4dHJhQ2hlc3Nlcy5sZW5ndGggPiAwKSB8fFxuICAgICAgICAgICAgKHRoaXMuc2xvdFJlc3VsdHMuZXZlbnRzICYmIHRoaXMuc2xvdFJlc3VsdHMuZXZlbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6i+S7tlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRFdmVudHMoKTogU3BpblJlc3VsdHNFdmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xvdFJlc3VsdHMuZXZlbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bpop3lpJbmo4vlrZBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RXh0cmFDaGVzc2VzKCk6IFNwaW5SZXN1bHRzU3ltYm9sW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zbG90UmVzdWx0cy5leHRyYUNoZXNzZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlui9rOebmO+8jOavlOWmgueGiueMq+eahOi9rOebmFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRXZWVscygpOiBTcGluUmVzdWx0c1doZWVsW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zbG90UmVzdWx0cy53aGVlbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluabv+aNouaji+WtkOWIl+ihqFxuICAgICAqXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlcGxhY2VDb2RlcygpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xvdFJlc3VsdHMucmVwbGFjZUNvZGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmo4vlrZDkuovku7ZcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U3ltYm9sRXZlbnRzKCk6IFN5bWJvbEV2ZW50W10ge1xuICAgICAgICBjb25zdCBldmVudHM6IFN5bWJvbEV2ZW50W10gPSBbXTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNsb3RSZXN1bHRzLmNvbHVtbnMubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgcmVlbCA9IHRoaXMuc2xvdFJlc3VsdHMuY29sdW1uc1tjb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcmVlbC5jZWxscy5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlZWwuY2VsbHNbcm93XTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5ldmVudHMgJiYgY2VsbC5ldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVzaChuZXcgU3ltYm9sRXZlbnQoY2VsbC5jb2RlLCBjZWxsLmFzc2V0cywgcG9zaXRpb24sIGNlbGwuZXZlbnRzLCBjZWxsLndoZWVsKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W562556CB5qOL5a2Q5aWW5YqxXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldENoaXBDZWxsUmV3YXJkcygpOiB7IHBvc2l0aW9uOiBudW1iZXI7IHN5bWJvbENvZGU6IG51bWJlcjsgcmV3YXJkczogbnVtYmVyIH1bXSB7XG4gICAgICAgIGNvbnN0IHJld2FyZHM6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXIgfVtdID0gW107XG4gICAgICAgIGxldCBwb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zbG90UmVzdWx0cy5jb2x1bW5zLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLnNsb3RSZXN1bHRzLmNvbHVtbnNbY29sXTtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJlZWwuY2VsbHMubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByZWVsLmNlbGxzW3Jvd107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlwQ29kZShjZWxsLmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJld2FyZHMucHVzaCh7IHBvc2l0aW9uOiBwb3NpdGlvbiwgc3ltYm9sQ29kZTogY2VsbC5jb2RlLCByZXdhcmRzOiBjZWxsLmFzc2V0cyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV3YXJkcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+WanDmo4vlrZDlpZblirFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0SmFja3BvdENlbGxSZXdhcmRzKCk6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXIgfVtdIHtcbiAgICAgICAgY29uc3QgcmV3YXJkczogeyBwb3NpdGlvbjogbnVtYmVyOyBzeW1ib2xDb2RlOiBudW1iZXI7IHJld2FyZHM6IG51bWJlciB9W10gPSBbXTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNsb3RSZXN1bHRzLmNvbHVtbnMubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgcmVlbCA9IHRoaXMuc2xvdFJlc3VsdHMuY29sdW1uc1tjb2xdO1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcmVlbC5jZWxscy5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlZWwuY2VsbHNbcm93XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0phY2twb3RDb2RlKGNlbGwuY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkcy5wdXNoKHsgcG9zaXRpb246IHBvc2l0aW9uLCBzeW1ib2xDb2RlOiBjZWxsLmNvZGUsIHJld2FyZHM6IGNlbGwuYXNzZXRzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXdhcmRzO1xuICAgIH1cbiAgICBwcml2YXRlIGlzQ2hpcENvZGUoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaXBTeW1ib2xDb2Rlcy5pbmRleE9mKGNvZGUpICE9PSAtMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0phY2twb3RDb2RlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5qYWNrcG90U3ltYm9sQ29kZXMuaW5kZXhPZihjb2RlKSAhPT0gLTE7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIOi9rOWKqOebuOWFs1xuICAgIHJlZWxTdGFydFJlc2lsaWVuY2VDb25maWcoY29sdW1uSW5kZXg6IG51bWJlciwgdXA6IElSZXNpbGllbmNlTW92ZSwgZG93bjogSVJlc2lsaWVuY2VNb3ZlKTogdm9pZCB7XG4gICAgICAgIGxldCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgICAgIGNvbHVtbi5zZXRSZWVsU3RhcnRSZXNpbGllbmNlKHVwLCBkb3duKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWVsRW5kUmVzaWxpZW5jZUNvbmZpZyhjb2x1bW5JbmRleDogbnVtYmVyLCBkb3duOiBJUmVzaWxpZW5jZU1vdmUsIHVwOiBJUmVzaWxpZW5jZU1vdmUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICAgICAgY29sdW1uLnNldFJlZWxFbmRSZXNpbGllbmNlKGRvd24sIHVwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb2x1bW5Nb3ZlWShjb2x1bW5JbmRleDogbnVtYmVyLCBzdGVwOiBudW1iZXIsIGNvZGU/OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyZW50ID0gKHRoaXMucGFyZW50IGFzIHVua25vd24pIGFzIFNsb3RHYW1lU3RhZ2VCYXNlO1xuICAgICAgICByZXR1cm4gY29sdW1uLm1vdmVZKHN0ZXAsIGNvZGUpO1xuICAgIH1cbiAgICBjZWxsTW92ZVkoY29sdW1uSW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgY29kZT86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbi5jZWxsTW92ZVkoY2VsbEluZGV4LCBzdGVwLCBjb2RlKTtcbiAgICB9XG4gICAgcmVjZWl2ZUNlbGxTdG9wcGVkKHJlZWxJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5lbWl0KFN5bWJvbEJvYXJkRXZlbnQuQ0VMTF9TVE9QUEVELCByZWVsSW5kZXgsIGNlbGxJbmRleCk7XG4gICAgfVxuICAgIHJlY2VpdmVSZWVsU3RvcHBlZChyZWVsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgYWxsU3RvcHBlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIGxldCByZWVsQ291bnQgPSB0aGlzLl9yZWVscy5sZW5ndGg7XG4gICAgICAgIGlmIChyZWVsQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlZWxDb3VudCA9IHRoaXMuX2hvbGRXaW5zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4oaSk7XG4gICAgICAgICAgICAvL2lmICghcmVlbC5tb3ZlRW5kKSB7XG4gICAgICAgICAgICBpZiAocmVlbC5zdGF0dXMgIT0gU3ltYm9sQm9hcmRTdGF0dXMuU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGFsbFN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5lbWl0KFN5bWJvbEJvYXJkRXZlbnQuQ09MVU1OX1NUT1BQRUQsIHJlZWxJbmRleCk7XG4gICAgICAgIGlmIChhbGxTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQ2hlc3Nib2FyZFN0b3BwZWQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gU3ltYm9sQm9hcmRTdGF0dXMuU3RvcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyNlbmRyZWdpb24g6L2s5Yqo55u45YWzXG5cbiAgICAvLyNyZWdpb24g5qOL5a2Q5pu/5o2iXG4gICAgcHJvdGVjdGVkIGdldCBzeW1ib2xSZXBsYWNlZCgpOiBSZXBsYWNlU3ltYm9sW10ge1xuICAgICAgICBpZiAodGhpcy5oYXNDdXN0b21SZXBsYWNlQ29kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGN1c3RvbVN5bWJvbFJlcGxhY2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRzeW1ib2xSZXBsYWNlZDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBzeW1ib2xSZXBsYWNlZCh2YWx1ZTogUmVwbGFjZVN5bWJvbFtdKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0N1c3RvbVJlcGxhY2VDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLiRjdXN0b21TeW1ib2xSZXBsYWNlZCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kc3ltYm9sUmVwbGFjZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlcGxhY2VNb2NrQ29kZXNJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tUmVwbGFjZUNvZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5lZWRQcm9jZXNzRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlTW9ja0NvZGVzKHRoaXMucmVwbGFjZUNvZGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlNb2NrQ29kZXNSZXBsYWNlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ29kZXNPbmVCeU9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IG51bWJlciA9IHRoaXMuX3JlZWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuX2hvbGRXaW5zLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oaSk7XG4gICAgICAgICAgICAgICAgY29sdW1uLnJlcGxhY2VNb2NrQ29kZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabv+aNouaji+WtkOaWueazle+8jOWFs+WNoeWPr+S7pemHjeWGmVxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXBsYWNlTW9ja0NvZGVzKHJlcGxhY2VDb2RlczogbnVtYmVyW11bXSk6IHZvaWQgeyB9XG4gICAgLyoqXG4gICAgICog5pu/5o2i5oyH5a6a55qE5qOL5a2QXG4gICAgICogQHJlbWFya1xuICAgICAqIOaJgOacieaji+WtkOabv+aNouWujOaIkOWQju+8jOmcgOimgeiwg+eUqG5vdGlmeU1vY2tDb2Rlc1JlcGxhY2VkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZXMg6ZyA6KaB5pu/5o2i55qE5qOL5a2Q5YiX6KGo77yM5LiN6ZyA6KaB5pu/5o2i55qE5L2N572u5aGrLTFcbiAgICAgKiBAcGFyYW0gcmVwbGFjZWRDYWxsYmFjayDmm7/mjaLlrozmiJDlkI7lm57osINcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVwbGFjZUN1c3RvbU1vY2tlQ29kZXMoY29kZXM6IG51bWJlcltdLCByZXBsYWNlZENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFjb2RlcyB8fCBjb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBsYWNlQ29kZXNPbmVCeU9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1c3RvbVJlcGxhY2VkQ2FsbGJhY2sgPSByZXBsYWNlZENhbGxiYWNrO1xuICAgICAgICB0aGlzLnN5bWJvbFJlcGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBjb2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2RlICE9PSBTcGluUmVzdWx0Q29uc3QuTk9fTU9DS19DT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbEJ5RmluYWxQb3NpdGlvbihpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbFJlcGxhY2VkLnB1c2gobmV3IFJlcGxhY2VTeW1ib2woY2VsbC54LCBjZWxsLnksIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zeW1ib2xSZXBsYWNlZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IGNvZGVzW2ldO1xuICAgICAgICAgICAgaWYgKGNvZGUgIT09IFNwaW5SZXN1bHRDb25zdC5OT19NT0NLX0NPREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKGkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLmdldENvbHVtbihjZWxsLngpO1xuICAgICAgICAgICAgICAgIHJlZWwucmVwbGFjZU1vY2tDb2RlcyhjZWxsLnksIGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS4gOS4quaOpeS4gOS4quabv+aNouaji+WtkFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGVzIOabv+aNouaji+WtkOWIl+ihqO+8jOS4jemcgOimgeabv+aNoueahOS9jee9ruWhq1NwaW5SZXN1bHRDb25zdC5OT19NT0NLX0NPREVcbiAgICAgKiBAcGFyYW0gaXNSYW5kb20g5piv5ZCm6ZqP5py65pu/5o2iXG4gICAgICogQHBhcmFtIHJlcGxhY2VkQ2FsbGJhY2sg5pu/5o2i5a6M5oiQ5ZCO55qE5Zue6LCDXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGN1c3RvbVJlcGxhY2VDb2Rlc09uZUJ5T25lKFxuICAgICAgICBjb2RlczogbnVtYmVyW10sXG4gICAgICAgIGlzUmFuZG9tOiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgcmVwbGFjZWRDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmICghY29kZXMgfHwgY29kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VzdG9tUmVwbGFjZWRDYWxsYmFjayA9IHJlcGxhY2VkQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMucmVwbGFjZUNvZGVzT25lQnlPbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN5bWJvbFJlcGxhY2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBjb2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChjb2RlICE9PSBTcGluUmVzdWx0Q29uc3QuTk9fTU9DS19DT0RFKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbEJ5RmluYWxQb3NpdGlvbihpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbFJlcGxhY2VkLnB1c2gobmV3IFJlcGxhY2VTeW1ib2woY2VsbC54LCBjZWxsLnksIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zeW1ib2xSZXBsYWNlZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbmVCeU9uZVBvaXNpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMub25lQnlPbmVDb2RlcyA9IFtdO1xuICAgICAgICBpZiAoaXNSYW5kb20pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZUJ5T25lQ29kZXMucHVzaCh7IHBvc2l0aW9uOiBpLCBjb2RlOiBjb2Rlc1tpXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU51bWJlcnM6IG51bWJlcltdID0gW107XG4gICAgICAgICAgICB3aGlsZSAocmFuZG9tTnVtYmVycy5sZW5ndGggPCBjb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXIgPSBOdW1iZXJVdGlscy5yYW5kb20oMCwgY29kZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbU51bWJlcnMuaW5kZXhPZihudW1iZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21OdW1iZXJzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJhbmRvbU51bWJlcnNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVCeU9uZUNvZGVzLnB1c2goeyBwb3NpdGlvbjogcG9zaXRpb24sIGNvZGU6IGNvZGVzW3Bvc2l0aW9uXSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2VOZXh0Q29kZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlcGxhY2VOZXh0Q29kZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub25lQnlPbmVQb2lzaXRpb24gPj0gdGhpcy5vbmVCeU9uZUNvZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0FsbENvZGVzUmVwbGFjZWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0Q29kZSA9IHRoaXMub25lQnlPbmVDb2Rlc1t0aGlzLm9uZUJ5T25lUG9pc2l0aW9uXTtcbiAgICAgICAgdGhpcy5vbmVCeU9uZVBvaXNpdGlvbisrO1xuICAgICAgICBpZiAobmV4dENvZGUuY29kZSAhPT0gU3BpblJlc3VsdENvbnN0Lk5PX01PQ0tfQ09ERSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbEJ5RmluYWxQb3NpdGlvbihuZXh0Q29kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4oY2VsbC54KTtcbiAgICAgICAgICAgIHJlZWwucmVwbGFjZU1vY2tDb2RlcyhjZWxsLnksIG5leHRDb2RlLmNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlTmV4dENvZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrQWxsQ29kZXNSZXBsYWNlZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1vY2tDaGVzcyA9IHRoaXMuc3ltYm9sUmVwbGFjZWQuZmluZCgoYykgPT4gYy5yZXBsYWNlZCA9PT0gZmFsc2UpO1xuICAgICAgICBpZiAoIW1vY2tDaGVzcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tUmVwbGFjZUNvZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXN0b21SZXBsYWNlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tUmVwbGFjZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlNb2NrQ29kZXNSZXBsYWNlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZU1vY2tDb2Rlc1JlcGxhY2VkKHJlZWxJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcmVwbGFjZVN5bWJvbCA9IHRoaXMuc3ltYm9sUmVwbGFjZWQuZmluZCgoYykgPT4gYy5yZWVsID09IHJlZWxJbmRleCAmJiBjLmNlbGwgPT0gY2VsbEluZGV4KTtcbiAgICAgICAgaWYgKHJlcGxhY2VTeW1ib2wpIHtcbiAgICAgICAgICAgIHJlcGxhY2VTeW1ib2wucmVwbGFjZU9uY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXBsYWNlQ29kZXNPbmVCeU9uZSkge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlTmV4dENvZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxDb2Rlc1JlcGxhY2VkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG5vdGlmeU1vY2tDb2Rlc1JlcGxhY2VkKCkge1xuICAgICAgICB0aGlzLnN5bWJvbFJlcGxhY2VkID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU3ltYm9sQm9hcmRTdGF0dXMuUHJpemVTaG93aW5nO1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChTeW1ib2xCb2FyZEV2ZW50Lk1PQ0tfQ09ERV9SRVBMQUNFRCwgdGhpcy5faW5kZXgpO1xuICAgIH1cblxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgcHVibGljIGdldCB3YWl0aW5nUmVzdWx0c1N0cmF0ZWd5KCk6IElXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHdhaXRpbmdSZXN1bHRzU3RyYXRlZ3k7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgd2FpdGluZ1Jlc3VsdHNTdHJhdGVneSh3YWl0aW5nUmVzdWx0c1N0cmF0ZWd5OiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICB0aGlzLiR3YWl0aW5nUmVzdWx0c1N0cmF0ZWd5ID0gd2FpdGluZ1Jlc3VsdHNTdHJhdGVneTtcbiAgICB9XG4gICAgcHVibGljIGdldCBmYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSgpOiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRmYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneTtcbiAgICB9XG4gICAgcHVibGljIHNldCBmYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSh3YWl0aW5nUmVzdWx0c1N0cmF0ZWd5OiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICB0aGlzLiRmYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSA9IHdhaXRpbmdSZXN1bHRzU3RyYXRlZ3k7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNGYXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kaXNGYXN0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzRmFzdChpc0Zhc3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzICE9IFN5bWJvbEJvYXJkU3RhdHVzLlJlYWR5ICYmIHRoaXMuX3ByaXplU2hvd1N0YXR1cyAhPSBQcml6ZVNob3dTdGF0dXMuUmVhZHkpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDlj6rmnInlnKjlgZzmraLnirbmgIHmiY3og73kv67mlLlmYXN0YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kaXNGYXN0ID0gaXNGYXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5kZXggPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwcml6ZVNob3dTdGF0dXMoKTogUHJpemVTaG93U3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaXplU2hvd1N0YXR1cztcbiAgICB9XG4gICAgcHVibGljIHNldCBwcml6ZVNob3dTdGF0dXModmFsdWU6IFByaXplU2hvd1N0YXR1cykge1xuICAgICAgICB0aGlzLl9wcml6ZVNob3dTdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgbGV0IGNvbHVtbkNvdW50ID0gdGhpcy5fcmVlbHMubGVuZ3RoO1xuICAgICAgICBpZiAoY29sdW1uQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbHVtbkNvdW50ID0gdGhpcy5faG9sZFdpbnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9sZFdpbiA9IHRoaXMuZ2V0SG9sZFdpbihpKTtcbiAgICAgICAgICAgICAgICBob2xkV2luLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpKTtcbiAgICAgICAgICAgIGNvbHVtbi5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5fd2FpdGluZ1Jlc3VsdHNTdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1N0YXR1cy5SZWFkeTtcbiAgICAgICAgdGhpcy4kc3RhdHVzID0gU3ltYm9sQm9hcmRTdGF0dXMuUmVhZHk7XG4gICAgICAgIHRoaXMucHJpemVTaG93U3RhdHVzID0gUHJpemVTaG93U3RhdHVzLlJlYWR5O1xuICAgICAgICB0aGlzLnByaXplTGluZVNob3dGaXJzdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2xvdFJlc3VsdHMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy4kd2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICAgICAgdGhpcy4kd2FpdGluZ1Jlc3VsdHNTdHJhdGVneS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRmYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICAgICAgdGhpcy4kZmFzdFdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcHJpemVTaG93U3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByaXplU2hvd1N0cmF0ZWd5LnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NPZkFLaW5kKCk6IHZvaWQgeyB9XG5cbiAgICBwcml2YXRlIG9uQ2VsbFN0b3BwZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKTogdm9pZCB7IH1cbiAgICAvKipcbiAgICAgKiDmo4vnm5jovazliqjnu5PmnZ/lkI7osIPnlKgs5Y+vXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFmdGVyQ2hlc3Nib2FyZFN0b3BwZWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBwYXJlbnQgPSAodGhpcy5wYXJlbnQgYXMgdW5rbm93bikgYXMgU2xvdEdhbWVTdGFnZUJhc2U7XG4gICAgICAgIGxldCByZWVsQ291bnQgPSB0aGlzLl9yZWVscy5sZW5ndGg7XG4gICAgICAgIGlmIChyZWVsQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHJlZWxDb3VudCA9IHRoaXMuX2hvbGRXaW5zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4oaSk7XG4gICAgICAgICAgICByZWVsLm5vdGlmeVNob3dEb3VibGVBc3NldHMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4ZWN1dGVOdW1iZXJPZktpbmQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0QXNzZXRzQWZ0ZXJDaGVzc2JvYXJkU3RvcHBlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVlbHMubWFwKChyZWVsKSA9PiB7XG4gICAgICAgICAgICByZWVsLnNldEFzc2V0c0FmdGVyQ2hlc3Nib2FyZFN0b3BwZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5omn6KGMb2ZLaW5k5Yqo55S7XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGV4ZWN1dGVOdW1iZXJPZktpbmQoKSB7XG4gICAgICAgIC8vIHRoaXMub2ZLaW5kLmV4ZWN1dGVOdW1iZXJPZktpbmQodGhpcy5fb2ZLaW5kTnVtYmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlp4vnrYnlvoXnu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnRXYWl0aW5nUmVzdWx0cygpOiB2b2lkIHtcbiAgICAgICAgLy8gaWYgKFxuICAgICAgICAvLyAgICAgdGhpcy5fd2FpdGluZ1Jlc3VsdHNTdGF0dXMgIT0gV2FpdGluZ1Jlc3VsdHNTdGF0dXMuUmVhZHkgJiZcbiAgICAgICAgLy8gICAgIHRoaXMuX3dhaXRpbmdSZXN1bHRzU3RhdHVzICE9IFdhaXRpbmdSZXN1bHRzU3RhdHVzLlN0b3BwZWRcbiAgICAgICAgLy8gKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeSAmJiB0aGlzLnN0YXR1cyAhPSBTeW1ib2xCb2FyZFN0YXR1cy5TcGlubmluZykge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLlj6rmnInlnKjlgZzmraLnirbmgIHmiY3og73lvIDlp4tcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMud2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLmnKrorr7nva7ovazliqjnrZbnlaVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlNwaW5uaW5nO1xuICAgICAgICB0aGlzLnN5bWJvbEJvYXJkU3RhcnQoKTtcbiAgICAgICAgdGhpcy5iZWZvcmVTdGFydFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVDb2RlcyA9IHRoaXMuZXhjbHVkZUNoZXNzZXNbdGhpcy5uZXh0R2FtZU1vZGVdO1xuICAgICAgICBpZiAodGhpcy5pc0Zhc3QpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLmnKrorr7nva7lv6vpgJ/ovazliqjnrZbnlaXvvIzkvb/nlKjmma7pgJrovazliqjnrZbnlaVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5mYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneSA9IHRoaXMud2FpdGluZ1Jlc3VsdHNTdHJhdGVneTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmFzdFdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kuc3RhcnRXYWl0aW5nKGV4Y2x1ZGVDb2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdSZXN1bHRzU3RyYXRlZ3kuc3RhcnRXYWl0aW5nKGV4Y2x1ZGVDb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5qOL55uY5byA5aeL6Ieq5a6a5LmJ5LqL5Lu2XG4gICAgICovXG4gICAgcHVibGljIHN5bWJvbEJvYXJkU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIC8vKiDmkq3mlL7mo4vnm5jlvIDlp4vpn7PmlYhcbiAgICAgICAgLy8gU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwic3ltYm9sX2JvYXJkX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGJlZm9yZVN0YXJ0V2FpdGluZ1Jlc3VsdHMoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLl9yZWVscykge1xuICAgICAgICAgICAgY29sdW1uLmJlZm9yZVN0YXJ0V2FpdGluZ1Jlc3VsdHMoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBob2xkV2luIG9mIHRoaXMuX2hvbGRXaW5zKSB7XG4gICAgICAgICAgICBob2xkV2luLmJlZm9yZVN0YXJ0V2FpdGluZ1Jlc3VsdHMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlNwaW5uaW5nO1xuICAgIH1cbiAgICBiZWZvcmVTdG9wV2FpdGluZ1Jlc3VsdHMoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuc3RhdHVzID0gU3ltYm9sQm9hcmRTdGF0dXMuO1xuICAgICAgICAvLyBmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5fcmVlbHMpIHtcbiAgICAgICAgLy8gICAgIGNvbHVtbi5iZWZvcmVTdG9wV2FpdGluZ1Jlc3VsdHMoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IgKGxldCBob2xkV2luIG9mIHRoaXMuX2hvbGRXaW5zKSB7XG4gICAgICAgIC8vICAgICBob2xkV2luLmJlZm9yZVN0b3BXYWl0aW5nUmVzdWx0cygpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGNhblN0b3AoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgc3RvcFdhaXRpbmdSZXN1bHRzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgIT0gU3ltYm9sQm9hcmRTdGF0dXMuU3Bpbm5pbmcpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5Y+q5pyJ5Zyo562J5b6F54q25oCB5omN6IO95YGc5q2iXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhblN0b3AoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNGYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYXN0V2FpdGluZ1Jlc3VsdHNTdHJhdGVneS5zdG9wV2FpdGluZyh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0aW5nUmVzdWx0c1N0cmF0ZWd5LnN0b3BXYWl0aW5nKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SG9sZFdpbihjb2x1bW5JbmRleDogbnVtYmVyKTogSG9sZFdpbkJhc2Uge1xuICAgICAgICBpZiAoIXRoaXMuX2hvbGRXaW5zIHx8IHRoaXMuX2hvbGRXaW5zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGNvbHVtbkluZGV4ID49IHRoaXMuX2hvbGRXaW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYOe0ouW8lSR7Y29sdW1uSW5kZXh96LaF5Ye66IyD5Zu05LqGYCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faG9sZFdpbnNbY29sdW1uSW5kZXhdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uKGNvbHVtbkluZGV4OiBudW1iZXIpOiBSZWVsQmFzZSB7XG4gICAgICAgIGNvbnN0IGhvbGRXaW4gPSB0aGlzLmdldEhvbGRXaW4oY29sdW1uSW5kZXgpO1xuICAgICAgICBsZXQgY29sdW1uOiBSZWVsQmFzZSA9IG51bGw7XG4gICAgICAgIGlmIChob2xkV2luKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSBob2xkV2luLmNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+PSB0aGlzLl9yZWVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihg57Si5byVJHtjb2x1bW5JbmRleH3otoXlh7rojIPlm7TkuoZgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbHVtbiA9IHRoaXMuX3JlZWxzW2NvbHVtbkluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGdldENvbHVtbkV4dHJhQ2VsbENvdW50KGNvbHVtbkluZGV4OiBudW1iZXIpOiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oY29sdW1uSW5kZXgpO1xuICAgICAgICByZXR1cm4gY29sdW1uLmdldEV4dHJhQ2VsbENvdW50KCk7XG4gICAgfVxuICAgIGNvbHVtbkhvbGRXaW4oY29sdW1uSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBob2xkV2luID0gdGhpcy5nZXRIb2xkV2luKGNvbHVtbkluZGV4KTtcbiAgICAgICAgaWYgKCFob2xkV2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8qIOWcqOaJp+ihjOW9k+WJjei9tOeahGhvbGR3aW7ml7bvvIzpnIDopoHlhYjmiorkuYvliY3nmoRob2xkd2lu5pWI5p6c5riF6Zmk5o6JXG4gICAgICAgIGxldCBob2xkV2lucyA9IHRoaXMuX2hvbGRXaW5zLmZpbHRlcigoaCkgPT4gaC5pbmRleCA8IGNvbHVtbkluZGV4KTtcbiAgICAgICAgaG9sZFdpbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaXNIb2xkV2luKSB7XG4gICAgICAgICAgICAgICAgaXRlbS51bmhvbGRXaW4oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaG9sZFdpbi5ob2xkV2luKCk7XG4gICAgfVxuICAgIGNlbGxIb2xkV2luKHJlZWxJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4ocmVlbEluZGV4KTtcbiAgICAgICAgcmVlbC5jZWxsSG9sZFdpbihjZWxsSW5kZXgpO1xuICAgIH1cbiAgICB1bkNlbGxIb2xkV2luKHJlZWxJbmRleDogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWVsID0gdGhpcy5nZXRDb2x1bW4ocmVlbEluZGV4KTtcbiAgICAgICAgcmVlbC51bkNlbGxIb2xkV2luKGNlbGxJbmRleCk7XG4gICAgfVxuICAgIHNldEZpbmFsUmVzdWx0c0ltbWVkaWF0ZWx5KGNvbHVtbkluZGV4OiBudW1iZXIsIGNvZGVzOiBudW1iZXJbXSwgYXNzZXRzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uLnNldEZpbmFsUmVzdWx0c0ltbWVkaWF0ZWx5KGNvZGVzLCBhc3NldHMpO1xuICAgIH1cbiAgICBzZXRGaW5hbFJlc3VsdEltbWVkaWF0ZWx5KGNvbHVtbkluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oY29sdW1uSW5kZXgpO1xuICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbi5zZXRGaW5hbFJlc3VsdEltbWVkaWF0ZWx5KGNlbGxJbmRleCwgY29kZSk7XG4gICAgfVxuICAgIG9uUmVzdWx0c1JlY2VpdmVkKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9uKFN5bWJvbEJvYXJkRXZlbnQuUkVTVUxUU19SRUNFSVZFRCwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIG9mZlJlc3VsdHNSZWNlaXZlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vZmYoU3ltYm9sQm9hcmRFdmVudC5SRVNVTFRTX1JFQ0VJVkVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgY2xlYXJSZXN1bHRzUmVjZWl2ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9mZihTeW1ib2xCb2FyZEV2ZW50LlJFU1VMVFNfUkVDRUlWRUQpO1xuICAgIH1cbiAgICBvbkNlbGxSZXN1bHRTZXQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub24oU3ltYm9sQm9hcmRFdmVudC5DRUxMX1NUT1BQRUQsIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBvZmZDZWxsUmVzdWx0U2V0KGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9mZihTeW1ib2xCb2FyZEV2ZW50LkNFTExfU1RPUFBFRCwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIGNsZWFyQ2VsbFJlc3VsdFNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub2ZmKFN5bWJvbEJvYXJkRXZlbnQuQ0VMTF9TVE9QUEVEKTtcbiAgICB9XG4gICAgb25Db2x1bW5SZXN1bHRzU2V0KGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9uKFN5bWJvbEJvYXJkRXZlbnQuQ09MVU1OX1NUT1BQRUQsIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBvZmZDb2x1bW5SZXN1bHRzU2V0KGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9mZihTeW1ib2xCb2FyZEV2ZW50LkNPTFVNTl9TVE9QUEVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgY2xlYXJDb2x1bW5SZXN1bHRzU2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vZmYoU3ltYm9sQm9hcmRFdmVudC5DT0xVTU5fU1RPUFBFRCk7XG4gICAgfVxuICAgIG9uUmVzdWx0c1NldChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vbihTeW1ib2xCb2FyZEV2ZW50LkNIRVNTQk9BUkRfU1RPUFBFRCwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIG9mZlJlc3VsdHNTZXQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub2ZmKFN5bWJvbEJvYXJkRXZlbnQuQ0hFU1NCT0FSRF9TVE9QUEVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgY2xlYXJSZXN1bHRzU2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vZmYoU3ltYm9sQm9hcmRFdmVudC5DSEVTU0JPQVJEX1NUT1BQRUQpO1xuICAgIH1cblxuICAgIC8vI3JlZ2lvbiDkuK3lpZbmlYjmnpzlsZXnpLpcbiAgICBwdWJsaWMgZ2V0IGNoaXBDZWxsUmV3YXJkcygpOiB7IHBvc2l0aW9uOiBudW1iZXI7IHN5bWJvbENvZGU6IG51bWJlcjsgcmV3YXJkczogbnVtYmVyIH1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRjaGlwQ2VsbFJld2FyZHM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY2hpcENlbGxSZXdhcmRzKHZhbHVlOiB7IHBvc2l0aW9uOiBudW1iZXI7IHN5bWJvbENvZGU6IG51bWJlcjsgcmV3YXJkczogbnVtYmVyIH1bXSkge1xuICAgICAgICB0aGlzLiRjaGlwQ2VsbFJld2FyZHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBqYWNrcG90Q2VsbFJld2FyZHMoKTogeyBwb3NpdGlvbjogbnVtYmVyOyBzeW1ib2xDb2RlOiBudW1iZXI7IHJld2FyZHM6IG51bWJlciB9W10ge1xuICAgICAgICByZXR1cm4gdGhpcy4kamFja3BvdENlbGxSZXdhcmRzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYmVmb3JlUHJpemVTaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByaXplU2hvd1N0YXR1cyA9IFByaXplU2hvd1N0YXR1cy5TaG93aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiA144CBNuOAgTfov57lsZXnpLpcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1iZXIg55u45ZCM5qOL5a2Q5pWwXG4gICAgICovXG4gICAgb2ZBS2luZFNob3cobnVtYmVyOiBudW1iZXIpOiB2b2lkIHsgfVxuICAgIC8qKlxuICAgICAqIOS4reWllui/nue6v+WxleekulxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmVzIOmcgOimgeWxleekuuS4reWlluaViOaenOeahOe6v+WIl+ihqFxuICAgICAqIEBwYXJhbSB0aW1lcyDpnIDopoHlsZXnpLrnmoTmrKHmlbDvvIww6KGo56S65LiA55u05bGV56S6XG4gICAgICovXG4gICAgcHJpemVMaW5lU2hvdyhsaW5lczogbnVtYmVyW11bXSwgdGltZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwcml6ZVNob3cgPSB0aGlzLmNvbnZlcnQyUHJpemVMaW5lU2hvdyhsaW5lcywgdGltZXMpO1xuICAgICAgICB0aGlzLl9wcml6ZVNob3dDaGVzc2VzID0gcHJpemVTaG93LmdldEFsbFN5bWJvbHMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wcml6ZVNob3dDaGVzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX3ByaXplU2hvd0NoZXNzZXNbaV0ucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgY2VsbFBvaW50ID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGNlbGxQb2ludC54KTtcbiAgICAgICAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWIlyR7Y2VsbFBvaW50Lnh95pyq5om+5YiwYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sdW1uLnByaXplU2hvdyhwb3NpdGlvbiwgY2VsbFBvaW50LnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY29udmVydDJQcml6ZUxpbmVTaG93KGxpbmVzOiBudW1iZXJbXVtdLCB0aW1lczogbnVtYmVyKTogUHJpemVTaG93IHtcbiAgICAgICAgY29uc3QgcHJpemVMaW5lczogUHJpemVTaG93TGluZVtdID0gW107XG4gICAgICAgIGNvbnN0IGNoaXBBc3NldHM6IFByaXplU2hvd0NlbGxSZXdhcmRbXSA9IFtdO1xuICAgICAgICBjb25zdCBqYWNrcG90UmV3YXJkczogUHJpemVTaG93Q2VsbFJld2FyZFtdID0gW107XG4gICAgICAgIGlmIChsaW5lcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVzc2VzOiBQcml6ZVNob3dTeW1ib2xbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVzc2VzLnB1c2gobmV3IFByaXplU2hvd1N5bWJvbChsaW5lc1tpXVtqXSwgdGltZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcml6ZUxpbmVzLnB1c2gobmV3IFByaXplU2hvd0xpbmUoY2hlc3NlcywgdGltZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJpemVTaG93ID0gbmV3IFByaXplU2hvdyhwcml6ZUxpbmVzLCBjaGlwQXNzZXRzLCBqYWNrcG90UmV3YXJkcyk7XG4gICAgICAgIHJldHVybiBwcml6ZVNob3c7XG4gICAgfVxuICAgIHByaXZhdGUgX3ByaXplTGluZVNob3dGaXJzdDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIGdldCBwcml6ZUxpbmVTaG93Rmlyc3QoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcml6ZUxpbmVTaG93Rmlyc3Q7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXQgcHJpemVMaW5lU2hvd0ZpcnN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdGhpcy5zdGF0dXMgIT0gU3ltYm9sQm9hcmRTdGF0dXMuUHJpemVTaG93aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9wcml6ZUxpbmVTaG93Rmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcml6ZUxpbmVTaG93Rmlyc3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmVjZWl2ZVByaXplU2hvd0NvbXBsZXRlZChwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBjaGVzcyA9IHRoaXMuX3ByaXplU2hvd0NoZXNzZXMuZmluZCgoYykgPT4gYy5wb3NpdGlvbiA9PSBwb3NpdGlvbik7XG4gICAgICAgIGlmIChjaGVzcykge1xuICAgICAgICAgICAgY2hlc3MuZmluaXNoZWRPbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsbENvbXBsZXRlZE9uY2UgPSB0aGlzLmNoZWNrQWxsQ2hlc3Nlc1ByaXplU2hvd0NvbXBsZXRlZCgpO1xuICAgICAgICBpZiAoYWxsQ29tcGxldGVkT25jZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJpemVMaW5lU2hvd0ZpcnN0ICYmIHRoaXMuc3RhdHVzID49IFN5bWJvbEJvYXJkU3RhdHVzLlN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlNldHRsaW5nO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpemVMaW5lU2hvd0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByaXplTGluZVNob3dDb21wbGV0ZWRPbmNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlc3MuZmluaXNoZWRUaW1lcyA8IGNoZXNzLmV4cGVjdGVkVGltZXMpIHtcbiAgICAgICAgICAgIC8v5bGV56S65qyh5pWw5LiN5aSf57un57ut5bGV56S6XG4gICAgICAgICAgICBsZXQgY2VsbFBvaW50ID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29sdW1uKGNlbGxQb2ludC54KS5wcml6ZVNob3cocG9zaXRpb24sIGNlbGxQb2ludC55KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNlaXZlQWxsQ2VsbFJld2FyZHNTZXR0bGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlJlYWR5O1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSAodGhpcy5wYXJlbnQgYXMgdW5rbm93bikgYXMgU2xvdEdhbWVTdGFnZUJhc2U7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlY2VpdmVQcml6ZVNob3dDb21wbGV0ZWQodGhpcy5faW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY2hlY2tBbGxDaGVzc2VzUHJpemVTaG93Q29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgY2hlc3MgPSB0aGlzLl9wcml6ZVNob3dDaGVzc2VzLmZpbmQoKGMpID0+IGMuZmluaXNoZWRUaW1lcyA8IGMuZXhwZWN0ZWRUaW1lcyk7XG4gICAgICAgIHJldHVybiAhY2hlc3M7XG4gICAgfVxuICAgIC8vISDkv67mlLnmiJBwcm90ZWN0ZWTlsZ7mgKfvvIzmmK/kuLrkuoblrZDnsbvph43ovb3mraTmlrnms5XvvIxcbiAgICAvLyEg6I635Y+W5pKt5pS+6L+e57q/55qE55Sf5ZG95ZGo5pyf77yM54S25ZCO5Zyo5q2k55Sf5ZG95ZGo5pyf5Lit5pKt5pS+6Z+z5pWIXG4gICAgcHJvdGVjdGVkIHN0YXJ0UHJpemVTaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJlZm9yZVByaXplU2hvdygpO1xuICAgICAgICB0aGlzLl9wcml6ZVNob3dTdHJhdGVneS5zdGFydFNob3coKTtcbiAgICAgICAgLy8qIOaji+ebmOinpuWPkeW6lemDqOagj+iuvue9rndpbuahhumHkeW4geS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcIkJPVFRPTV9CQVJfU0VUX1dJTl9DT0lOU1wiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHN0YXJ0UHJpemVTZXR0bGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmVmb3JlUHJpemVTaG93KCk7XG4gICAgICAgIHRoaXMuX3ByaXplU2hvd1N0cmF0ZWd5LnN0YXJ0U2V0dGxlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHN5bWJvbENvZGVcbiAgICAgKiBAcGFyYW0gYXNzZXRzXG4gICAgICovXG4gICAgcHJpemVDaGlwQ2VsbFNldHRsZShwb3NpdGlvbjogbnVtYmVyLCBzeW1ib2xDb2RlOiBudW1iZXIsIGFzc2V0czogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vdG9kbyDnrbnnoIHnu5PnrpdcbiAgICAgICAgY29uc29sZS5sb2coXCLnrbnnoIHnu5Pnrpfov4fnqItcIik7XG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IHJlZWwgPSB0aGlzLmdldENvbHVtbihjZWxsLngpO1xuICAgICAgICByZWVsLnByaXplQ2hpcENlbGxTZXR0bGUocG9zaXRpb24sIHN5bWJvbENvZGUsIGFzc2V0cywgdGhpcy5wcml6ZUNoaXBDZWxsU2V0dGxlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOetueeggeaji+WtkOe7k+eul+WujOavleWQjueahOWbnuiwg1xuICAgICAqL1xuICAgIHByaXplQ2hpcENlbGxTZXR0bGVDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlQcml6ZUNlbGxTZXR0bGVDb21wbGV0ZWRPbmNlKCk7XG4gICAgfVxuICAgIHByaXplSmFja3BvdENlbGxTZXR0bGUocG9zaXRpb246IG51bWJlciwgc3ltYm9sQ29kZTogbnVtYmVyLCBhc3NldHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvL1xuICAgICAgICBjb25zb2xlLmxvZyhcImphY2twb3TlvLnnqpflsZXnpLpcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcml6ZUNlbGxTZXR0bGVDb21wbGV0ZWRPbmNlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBwcml2YXRlIG5vdGlmeVByaXplTGluZVNob3dDb21wbGV0ZWRPbmNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChTeW1ib2xCb2FyZEV2ZW50LlBSSVpFX0xJTkVfU0hPV19DT01QTEVURURfT05DRSk7XG4gICAgfVxuICAgIG9uUHJpemVMaW5lU2hvd0NvbXBsZXRlZE9uY2UobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFN5bWJvbEJvYXJkRXZlbnQuUFJJWkVfTElORV9TSE9XX0NPTVBMRVRFRF9PTkNFLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgb2ZmUHJpemVMaW5lU2hvd0NvbXBsZXRlZE9uY2UobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTeW1ib2xCb2FyZEV2ZW50LlBSSVpFX0xJTkVfU0hPV19DT01QTEVURURfT05DRSwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIGNsZWFyUHJpemVMaW5lU2hvd0NvbXBsZXRlZE9uY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoU3ltYm9sQm9hcmRFdmVudC5QUklaRV9MSU5FX1NIT1dfQ09NUExFVEVEX09OQ0UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBub3RpZnlQcml6ZUNlbGxTZXR0bGVDb21wbGV0ZWRPbmNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChTeW1ib2xCb2FyZEV2ZW50LlBSSVpFX0NFTExfU0VUVExFX0NPTVBMRVRFRF9PTkNFKTtcbiAgICB9XG4gICAgb25DZWxsUmV3YXJkU2V0dGxlZE9uY2UobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFN5bWJvbEJvYXJkRXZlbnQuUFJJWkVfQ0VMTF9TRVRUTEVfQ09NUExFVEVEX09OQ0UsIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBvZmZDZWxsUmV3YXJkU2V0dGxlZE9uY2UobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTeW1ib2xCb2FyZEV2ZW50LlBSSVpFX0NFTExfU0VUVExFX0NPTVBMRVRFRF9PTkNFLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgY2xlYXJDZWxsUmV3YXJkU2V0dGxlZE9uY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoU3ltYm9sQm9hcmRFdmVudC5QUklaRV9DRUxMX1NFVFRMRV9DT01QTEVURURfT05DRSk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvbiDkuK3lpZbmlYjmnpzlsZXnpLpcbiAgICAvKipcbiAgICAgKiDmoLnmja7mnIDnu4jkvY3nva7ojrflj5bmoLzlrZDnmoTlnZDmoIdcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24g5L2N572uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldENlbGxCeUZpbmFsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgICAgIGlmICh0aGlzLl9maW5hbENlbGxQb3NpdGlvbltwb3NpdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maW5hbENlbGxQb3NpdGlvbltwb3NpdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLl9yZWVscy5sZW5ndGg7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSAwKSB7XG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5faG9sZFdpbnMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbGxQb3NpdGlvbjogbnVtYmVyID0gLTE7XG4gICAgICAgIGxldCBjZWxsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5zOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKHgpO1xuICAgICAgICAgICAgY29uc3QgZmluYWxDZWxsQ291bnQgPSBjb2x1bW4uY2VsbHMubGVuZ3RoIC0gY29sdW1uLnRvcEV4dHJhQ2VsbHMgLSBjb2x1bW4uYm90dG9tRXh0cmFDZWxscztcbiAgICAgICAgICAgIGFsbFBvc2l0aW9uID0gYWxsUG9zaXRpb24gKyBmaW5hbENlbGxDb3VudDtcbiAgICAgICAgICAgIGlmIChhbGxQb3NpdGlvbiA+PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNlbGwueCA9IHg7XG4gICAgICAgICAgICAgICAgY2VsbC55ID0gZmluYWxDZWxsQ291bnQgLSAoYWxsUG9zaXRpb24gLSBwb3NpdGlvbikgLSAxICsgY29sdW1uLnRvcEV4dHJhQ2VsbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluYWxDZWxsUG9zaXRpb25bcG9zaXRpb25dID0gY2VsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24g57uT5p6c5aSE55CGXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiAg5rWB56iL5o6n5Yi2XG4gICAgb25CZWZvcmVTdGFydFdhaXRpbmdSZXN1bHRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25CZWZvcmVTdG9wV2FpdGluZ1Jlc3VsdHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbiAgICAvLyNyZWdpb24g5o6n5Yi25Zmo5pON5L2cXG4gICAgcHVibGljIHNldFJlZWxDb250cm9sbGVyUHJvcGVydHkocmVlbEluZGV4OiBudW1iZXIsIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcmVlbCA9IHRoaXMuZ2V0Q29sdW1uKHJlZWxJbmRleCk7XG4gICAgICAgIGlmICghcmVlbCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLmnKrmib7liLDliJdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVlbC5zZXRDb250cm9sbGVyUHJvcGVydHkoY29udHJvbGxlck5hbWUsIGNvZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7moLzlrZDnmoTmjqfliLblmajlgLxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiDkvY3nva5cbiAgICAgKiBAcGFyYW0gY29udHJvbGxlck5hbWUg5o6n5Yi25Zmo5ZCN56ewXG4gICAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAgICovXG4gICAgcHVibGljIHNldENlbGxDb250cm9sbGVyUHJvcGVydHkocG9zaXRpb246IG51bWJlciwgY29udHJvbGxlck5hbWU6IHN0cmluZywgY29kZTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiDorr7nva7moLzlrZDnmoTmjqfliLblmajlgLxcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWVsSW5kZXgg5YiX57Si5byVXG4gICAgICogQHBhcmFtIGNlbGxJbmRleCDljZXlhYPmoLzntKLlvJVcbiAgICAgKiBAcGFyYW0gY29udHJvbGxlck5hbWUg5o6n5Yi25Zmo5ZCN56ewXG4gICAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAgICovXG4gICAgcHVibGljIHNldENlbGxDb250cm9sbGVyUHJvcGVydHkocmVlbEluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyLCBjb250cm9sbGVyTmFtZTogc3RyaW5nLCBjb2RlOiBudW1iZXIpOiB2b2lkO1xuICAgIHB1YmxpYyBzZXRDZWxsQ29udHJvbGxlclByb3BlcnR5KFxuICAgICAgICByZWVsSW5kZXg6IG51bWJlcixcbiAgICAgICAgY2VsbEluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICAgIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgICAgIGNvZGU/OiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjZWxsSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGxldCByZWVsID0gdGhpcy5nZXRDb2x1bW4ocmVlbEluZGV4KTtcbiAgICAgICAgICAgIGlmICghcmVlbCkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5pyq5om+5Yiw5YiXXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZWwuc2V0Q2VsbENvbnRyb2xsZXJQcm9wZXJ0eShjZWxsSW5kZXggYXMgbnVtYmVyLCBjb250cm9sbGVyTmFtZSBhcyBzdHJpbmcsIGNvZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGxCeUZpbmFsUG9zaXRpb24ocmVlbEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRDZWxsQ29udHJvbGxlclByb3BlcnR5KGNlbGwueCwgY2VsbC55LCBjZWxsSW5kZXgsIGNvbnRyb2xsZXJOYW1lIGFzIG51bWJlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruagvOWtkOeahOaOp+WItuWZqOWAvFxuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIOS9jee9rlxuICAgICAqIEBwYXJhbSBjb250cm9sbGVyTmFtZSDmjqfliLblmajlkI3np7BcbiAgICAgKiBAcGFyYW0gY29kZSDku6PnoIFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3ltYm9sQ29udHJvbGxlclByb3BlcnR5KHBvc2l0aW9uOiBudW1iZXIsIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGNvZGU6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog6K6+572u5qOL5a2Q55qE5o6n5Yi25Zmo5YC8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVlbEluZGV4IOWIl+e0ouW8lVxuICAgICAqIEBwYXJhbSBjZWxsSW5kZXgg5Y2V5YWD5qC857Si5byVXG4gICAgICogQHBhcmFtIGNvbnRyb2xsZXJOYW1lIOaOp+WItuWZqOWQjeensFxuICAgICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTeW1ib2xDb250cm9sbGVyUHJvcGVydHkoXG4gICAgICAgIHJlZWxJbmRleDogbnVtYmVyLFxuICAgICAgICBjZWxsSW5kZXg6IG51bWJlcixcbiAgICAgICAgY29udHJvbGxlck5hbWU6IHN0cmluZyxcbiAgICAgICAgY29kZTogbnVtYmVyXG4gICAgKTogdm9pZDtcbiAgICBwdWJsaWMgc2V0U3ltYm9sQ29udHJvbGxlclByb3BlcnR5KFxuICAgICAgICByZWVsSW5kZXg6IG51bWJlcixcbiAgICAgICAgY2VsbEluZGV4OiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICAgIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgICAgIGNvZGU/OiBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjZWxsSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGxldCByZWVsID0gdGhpcy5nZXRDb2x1bW4ocmVlbEluZGV4KTtcbiAgICAgICAgICAgIGlmICghcmVlbCkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5pyq5om+5Yiw5YiXXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZWwuc2V0U3ltYm9sQ29udHJvbGxlclByb3BlcnR5KGNlbGxJbmRleCBhcyBudW1iZXIsIGNvbnRyb2xsZXJOYW1lIGFzIHN0cmluZywgY29kZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbEJ5RmluYWxQb3NpdGlvbihyZWVsSW5kZXgpO1xuICAgICAgICB0aGlzLnNldFN5bWJvbENvbnRyb2xsZXJQcm9wZXJ0eShjZWxsLngsIGNlbGwueSwgY2VsbEluZGV4LCBjb250cm9sbGVyTmFtZSBhcyBudW1iZXIpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbiAgICBwdWJsaWMgcGxheVNwaW5lQnlDb25maWcocmVlbEluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyLCBjb25maWdOYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVlbCA9IHRoaXMuZ2V0Q29sdW1uKHJlZWxJbmRleCk7XG4gICAgICAgIHJlZWwucGxheVNwaW5lQnlDb25maWcoY2VsbEluZGV4LCBjb25maWdOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHB1YmxpYyBwbGF5U3BpbmVCeUNvbmZpZ0FuZFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIsIGNvbmZpZ05hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5wbGF5U3BpbmVCeUNvbmZpZyhjZWxsLngsIGNlbGwueSwgY29uZmlnTmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBwcml2YXRlIHBvc2l0aW9uc1Nob3dDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgcG9zaXRpb25zU2hvd0NvbXBsZXRlZE9uY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiDmkq3mlL7mjIflrprkvY3nva7kuIrnmoTmjIflrprphY3nva7nmoRzcGluZeWKqOaViO+8jOWQjOaXtuaSreaUvu+8jOS7u+S4gOaSreaUvue7k+adn+Wwseiwg+eUqOWbnuiwg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbnMg5pKt5pS+5qOL5a2Q5L2N572u5YiX6KGo77yaWzUsOSwxMF1cbiAgICAgKiBAcGFyYW0gY29uZmlnTmFtZSDphY3nva7lkI3np7BcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHBsYXlTcGluZUJ5Q29uZmlnQW5kUG9zaXRpb25zKHBvc2l0aW9uczogbnVtYmVyW10sIGNvbmZpZ05hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1Nob3dDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1Nob3dDb21wbGV0ZWRPbmNlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsQnlGaW5hbFBvc2l0aW9uKHBvc2l0aW9uc1tpXSk7XG4gICAgICAgICAgICB0aGlzLnBsYXlTcGluZUJ5Q29uZmlnKGNlbGwueCwgY2VsbC55LCBjb25maWdOYW1lLCB0aGlzLnBvc2l0aW9uU2hvd0NvbXBsZXRlZE9uY2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBwb3NpdGlvblNob3dDb21wbGV0ZWRPbmNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucG9zaXRpb25zU2hvd0NvbXBsZXRlZE9uY2UpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25zU2hvd0NvbXBsZXRlZE9uY2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25zU2hvd0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNTaG93Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGZyZWUgbW9kZSBzaG93IGNvbmZpZyBuYW1lXG4gICAgICog5pKt5pS+6L+b5YWl5YWN6LS55ri45oiP5YmN6ZyA6KaB5pKt5pS+55qEc3BpbmXliqjnlLvphY3nva7lkI3np7BcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGZyZWVNb2RlU2hvd0NvbmZpZ05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgcGxheSBlbnRlciBmcmVlIG1vZGUgc2hvdyBkZWxheVxuICAgICAqIOi/m+WFpeWFjei0uea4uOaIj+WJjemcgOimgeaSreaUvueahOaji+WtkHNwaW5l5Yqo55S75bu26L+f5pe26Ze0LOWNleS9je+8muavq+enklxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgcGxheUVudGVyRnJlZU1vZGVTaG93RGVsYXkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDUwMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGxheXMgZW50ZXIgZnJlZSBtb2RlIHNob3dcbiAgICAgKiDmkq3mlL7ov5vlhaXlhY3otLnmqKHlvI/liY3nmoTmo4vlrZDliqjmlYhcbiAgICAgKiBAcGFyYW0gW2NhbGxiYWNrXSDlm57osINcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGVudGVyIGZyZWUgbW9kZSBzaG93XG4gICAgICovXG4gICAgcHVibGljIHBsYXlFbnRlckZyZWVNb2RlU2hvdyhjYWxsYmFjaz86IEZ1bmN0aW9uLCBjb2RlPzogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZ2V0U3ltYm9sRXZlbnRzKCk7XG4gICAgICAgIGxldCBzY2F0dGVyRXZlbnRzID0gZXZlbnRzLmZpbHRlcigoZSkgPT5cbiAgICAgICAgICAgIGUuZXZlbnRzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGVlKSA9PlxuICAgICAgICAgICAgICAgICAgICBlZS5jb2RlID09IFNwaW5SZXN1bHRzRXZlbnRDb2RlLkZyZWUgfHxcbiAgICAgICAgICAgICAgICAgICAgZWUuY29kZSA9PSBTcGluUmVzdWx0c0V2ZW50Q29kZS5PbmVNb3JlIHx8XG4gICAgICAgICAgICAgICAgICAgIGVlLmNvZGUgPT0gU3BpblJlc3VsdHNFdmVudENvZGUuUmVzcGluIHx8XG4gICAgICAgICAgICAgICAgICAgIGVlLmNvZGUgPT0gU3BpblJlc3VsdHNFdmVudENvZGUuQm9udXNcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgICAgc2NhdHRlckV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoKGUpID0+XG4gICAgICAgICAgICAgICAgZS5ldmVudHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKGVlKSA9PiBlZS5jb2RlID09IGNvZGVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5mcmVlTW9kZVNob3dDb25maWdOYW1lIHx8ICFzY2F0dGVyRXZlbnRzIHx8IHNjYXR0ZXJFdmVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheUVudGVyRnJlZU1vZGVTaG93IHJldHVybiBmYWxzZVwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2F0dGVyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChzY2F0dGVyRXZlbnRzW2ldLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheVNwaW5lQnlDb25maWdBbmRQb3NpdGlvbnMocG9zaXRpb25zLCB0aGlzLmZyZWVNb2RlU2hvd0NvbmZpZ05hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSwgdGhpcy5wbGF5RW50ZXJGcmVlTW9kZVNob3dEZWxheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheUVudGVyRnJlZU1vZGVTaG93IHJldHVybiB0cnVlXCIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkb3VibGVDaGVzc1Nob3coKTogdm9pZCB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5fcmVlbHMubGVuZ3RoO1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gMCkge1xuICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuX2hvbGRXaW5zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nZXRDb2x1bW4oaSkuZG91YmxlQ2hlc3NTaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTeW1ib2xFdmVudCB7XG4gICAgcHJpdmF0ZSBfY29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2Fzc2V0czogbnVtYmVyO1xuICAgIHByaXZhdGUgX3Bvc3Rpb246IG51bWJlcjtcbiAgICBwcml2YXRlIF9ldmVudHM6IFNwaW5SZXN1bHRzRXZlbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgX3doZWVsOiBTcGluUmVzdWx0c1doZWVsO1xuICAgIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlciwgYXNzZXRzOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIsIGV2ZW50czogU3BpblJlc3VsdHNFdmVudFtdLCB3aGVlbDogU3BpblJlc3VsdHNXaGVlbCkge1xuICAgICAgICB0aGlzLl9jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5fYXNzZXRzID0gYXNzZXRzO1xuICAgICAgICB0aGlzLl9wb3N0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3doZWVsID0gd2hlZWw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhc3NldHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cztcbiAgICB9XG4gICAgcHVibGljIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdGlvbjtcbiAgICB9XG4gICAgcHVibGljIGdldCBldmVudHMoKTogU3BpblJlc3VsdHNFdmVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgICB9XG4gICAgcHVibGljIGdldCB3aGVlbCgpOiBTcGluUmVzdWx0c1doZWVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZWVsO1xuICAgIH1cbn1cbiJdfQ==