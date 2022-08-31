"use strict";
cc._RF.push(module, 'bad97unaStJy7bIJjn72V+E', 'ReelBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/ReelBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var CellBase_1 = require("./CellBase");
//import { fgui } from "fairygui";
var SymbolBoardEvent_1 = require("./SymbolBoardEvent");
var HoldWinBase_1 = require("./HoldWinBase");
var SymbolBoardStatus_1 = require("./SymbolBoardStatus");
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var NumberUtils_1 = require("../../../utils/lib/NumberUtils");
var ReelBase = /** @class */ (function (_super) {
    __extends(ReelBase, _super);
    function ReelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 启动回弹开始
         */
        _this._startUpResilience = null;
        /**
         * 启动回弹
         */
        _this._startDownResilience = null;
        /**
         * 结束回弹开始
         */
        _this._endDownResilience = null;
        /**
         * 结束回弹结束
         */
        _this._endUpResilience = null;
        /**
         * 能否结束回弹
         */
        _this._canEndResilience = true;
        _this._cells = [];
        _this._finalCodes = [];
        _this._finalFixeds = [];
        _this._finalFixedsReseted = false;
        _this._nextFixeds = [];
        _this._fixedUuids = [];
        _this._fixedPositions = [];
        _this._mustBeFixedCells = [];
        _this._mockCodes = [];
        _this.startResilienced = true;
        _this.stopResilienced = false;
        return _this;
    }
    Object.defineProperty(ReelBase.prototype, "stageCode", {
        /**
         * 获取关卡编码
         */
        get: function () {
            return this._stageCode;
        },
        /**
         * 设置关卡编码
         */
        set: function (value) {
            this._stageCode = value;
            for (var i = 0; i < this._cells.length; i++) {
                this._cells[i].stageCode = value;
            }
            for (var i = 0; i < this._mustBeFixedCells.length; i++) {
                this._mustBeFixedCells[i].stageCode = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "holdWin", {
        /**
         * 设置holdWin
         */
        get: function () {
            return this._holdWin;
        },
        /**
         * 获取holdWin
         */
        set: function (value) {
            this._holdWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "symbolBoard", {
        /**
         * 获取棋盘
         */
        get: function () {
            return this._symbolBoard;
        },
        /**
         * Sets symbol board
         * 设置棋盘
         */
        set: function (value) {
            this._symbolBoard = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "boardStatus", {
        get: function () {
            return this._boardStatus;
        },
        set: function (value) {
            this._boardStatus = value;
            for (var i = 0; i < this._cells.length; i++) {
                this._cells[i].boardStatus = value;
            }
            this.status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            for (var i = 0; i < this._cells.length; i++) {
                this._cells[i].status = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "canEndResilience", {
        get: function () {
            return this._canEndResilience;
        },
        /**
         * 能否结束回弹
         */
        set: function (value) {
            this._canEndResilience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "cells", {
        get: function () {
            return this._cells;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "mustBeFixedCells", {
        get: function () {
            return this._mustBeFixedCells;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "finalCodes", {
        // public get moveEnd(): boolean {
        //     return this._moveEnd;
        // }
        get: function () {
            return this._finalCodes;
        },
        set: function (value) {
            this._finalCodes = value;
            if (!this._finalCodes) {
                this._finalCodes = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "mockCodes", {
        get: function () {
            return this._mockCodes;
        },
        set: function (value) {
            this._mockCodes = value;
            if (!this._mockCodes) {
                this._mockCodes = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "topExtraCells", {
        /**
         * 用于转动的顶部多余的格子数
         */
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "bottomExtraCells", {
        /**
         * 用于转动的底部多余的格子数
         */
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReelBase.prototype, "spinResults", {
        set: function (value) {
            this.reelResults = value;
            this._nextFixeds = [];
            for (var i = 0; i < value.cells.length; i++) {
                var cell = this.cells[i + this.topExtraCells];
                cell.spinResult = value.cells[i];
                this._nextFixeds.push(value.cells[i].fixed);
                if (this.mustBeFixedCells && this.mustBeFixedCells.length > 0) {
                    this.mustBeFixedCells[i].spinResult = value.cells[i];
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ReelBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._mask = this.fguiComponent.mask;
        this.fguiComponent.setMask(null, false);
    };
    ReelBase.prototype.addFguiComponent = function (type, changeSize) {
        if (changeSize === void 0) { changeSize = true; }
        var child = _super.prototype.addFguiComponent.call(this, type, changeSize);
        if (child instanceof CellBase_1.default) {
            var cell = child;
            cell.stageCode = this.stageCode;
            cell.reel = this;
            this._cells.push(cell);
            cell.index = this._cells.length - 1;
            cell.mogafaId = cell.index.toString();
        }
        return child;
    };
    ReelBase.prototype.beforeStartWaitingResults = function () {
        this._moveEnd = false;
        //this.fguiComponent.setMask(this._mask, false);
    };
    ReelBase.prototype.beforeStopWaitingResults = function () { };
    ReelBase.prototype.afterStopWaitingResults = function () {
        //this.fguiComponent.setMask(null, false);
        var parent = this.parent;
        if (parent && parent instanceof HoldWinBase_1.default) {
            parent.unholdWin(this.index);
        }
    };
    ReelBase.prototype.replaceMockCodes = function (cellIndex, code) {
        if (cellIndex != null && code != null) {
            var cell = this.getCell(cellIndex);
            cell.replaceMockCodeInternal(code);
            return;
        }
        var finalIndex = 0;
        for (var i = 0; i < this.finalCodes.length; i++) {
            var cell = this.getFinalCell(i);
            if (cell) {
                cell.index = finalIndex;
                var finalCode = this._finalCodes[i];
                cell.finalCode = finalCode;
                cell.mockCodes = this.mockCodes[i];
                if (cell.mockCodes && cell.mockCodes.length > 0) {
                    cell.replaceMockCodeInternal();
                }
            }
        }
    };
    ReelBase.prototype.setReelStartResilience = function (up, down) {
        this._startUpResilience = up;
        this._startDownResilience = down;
    };
    ReelBase.prototype.setReelEndResilience = function (down, up) {
        this._endDownResilience = down;
        this._endUpResilience = up;
    };
    ReelBase.prototype.reelStartResilience = function () {
        var _this = this;
        this.startResilienced = false;
        this.sortCell();
        //todo 第一次启动回弹移动到末尾的第一个棋子未显示的原因是当前的code为undefined
        //todo 因此临时的给当前棋子随机赋一个值
        this.cells[0].code = NumberUtils_1.default.random(0, 11);
        this.cells[0].fguiY = this.cells[this.cells.length - 1].fguiY + this.cells[0].fguiHeight;
        var action = cc.sequence(cc.moveTo(this._startUpResilience.duration, this._startUpResilience.xPosition, this._startUpResilience.yPosition), cc.moveTo(this._startDownResilience.duration, this._startDownResilience.xPosition, this._startDownResilience.yPosition), cc.callFunc(function () {
            _this.startResilienced = true;
            _this.stopResilienced = false;
            _this.fguiComponent.setMask(_this._mask, false);
        }));
        this.holdWin.showMask();
        this.fguiComponent.node.runAction(action);
    };
    ReelBase.prototype.reelStopResilience = function () {
        var _this = this;
        this.sortCell();
        this.cells[0].fguiComponent.visible = true;
        if (!this.canEndResilience) {
            this.canEndResilience = true;
            return;
        }
        var action = cc.sequence(cc.moveTo(this._endDownResilience.duration, this._endDownResilience.xPosition, this._endDownResilience.yPosition), cc.moveTo(this._endUpResilience.duration, this._endUpResilience.xPosition, this._endUpResilience.yPosition), cc.callFunc(function () {
            if (_this._startUpResilience && _this._startDownResilience) {
                _this.startResilienced = false;
                _this.stopResilienced = true;
                // this.cells[0].fguiComponent.visible = false;
                _this.holdWin.hideMask();
            }
            else {
                _this.holdWin.showMask();
            }
        }));
        this.fguiComponent.node.runAction(action);
    };
    ReelBase.prototype.firstMove = function () {
        this._fixedUuids = [];
        this._fixedPositions = [];
        if (this._startUpResilience && this._startDownResilience) {
            this.reelStartResilience();
        }
        //* 设置一个布尔变量，每次spin时只让一个固定棋子触发效果
        //todo 目前暂时只有埃及这个关卡有这个需求，若要优化需要将转轴基类抽离的更纯粹
        //todo 只涉及最基本的spin，其余的特殊功能全部通过继承实现
        var respinFlag = true;
        for (var i = 0; i < this._cells.length; i++) {
            var cell = this._cells[i];
            cell.startMove();
            if (!cell.fguiComponent.visible) {
                cell.fguiComponent.visible = true;
            }
            if (this.mustBeFixedCells && this.mustBeFixedCells.length > 0 && i >= this.topExtraCells) {
                var fixedCell = this.mustBeFixedCells[i - this.topExtraCells];
                if (this._finalFixeds[i - this.topExtraCells]) {
                    fixedCell.code = cell.code;
                    if (respinFlag) {
                        fixedCell.fixedCellShow();
                    }
                    respinFlag = false;
                    fixedCell.fguiComponent.visible = true;
                }
                else {
                    fixedCell.fixedCellHide();
                    fixedCell.fguiComponent.visible = false;
                }
            }
        }
    };
    ReelBase.prototype.moveY = function (step, code) {
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
        var theTopCell = this._cells[0];
        var theBottomCell = this._cells[this._cells.length - 1];
        if (theBottomCell.isFinal) {
            if (theBottomCell.fguiY + step >= this.theFinalBottomCellY) {
                step = this.theFinalBottomCellY - theBottomCell.fguiY;
                this._moveEnd = true;
            }
        }
        for (var i = 0; i < this._cells.length; i++) {
            var cell = this._cells[i];
            cell.fguiY += step;
        }
        if (this._moveEnd) {
            theTopCell.fguiComponent.visible = false;
            this.status = SymbolBoardStatus_1.SymbolBoardStatus.Stopped;
            if (this._endDownResilience && this._endUpResilience) {
                this.reelStopResilience();
            }
            if (this._endDownResilience && this._endUpResilience && this.stopResilienced) {
                return false;
            }
            this.notifyReelStopped(this._index);
            this.status = SymbolBoardStatus_1.SymbolBoardStatus.Stopped;
            this.isFirstMove = true;
            this.fguiComponent.setMask(null, false);
            // this.holdWin.hideMask();
            this._finalFixeds = this._finalFixeds || [];
            for (var i = 0; i < this._nextFixeds.length; i++) {
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
        var useCode = false;
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
    };
    ReelBase.prototype.sortCell = function () {
        this._cells = this._cells.sort(function (c1, c2) {
            return c1.fguiY - c2.fguiY;
        });
        for (var i = 0; i < this._cells.length; i++) {
            this._cells[i].index = i;
        }
    };
    ReelBase.prototype.getCell = function (cellIndex) {
        if (cellIndex < 0 || cellIndex >= this._cells.length) {
            cc.error("\u7D22\u5F15" + cellIndex + "\u8D85\u51FA\u8303\u56F4");
            return null;
        }
        var cell = this._cells[cellIndex];
        var position = cellIndex - this.topExtraCells;
        if (position >= 0 && this._finalFixeds[position]) {
            var code_1 = cell.code;
            if (!this.notFixedCodes.find(function (c) { return c == code_1; })) {
                cell.fguiComponent.visible = false;
                cell = this.mustBeFixedCells[position];
                cell.code = code_1;
                cell.fguiComponent.visible = true;
            }
        }
        if (position >= 0 && this.reelResults) {
            cell.finalAssets = this.reelResults.cells[position].assets;
        }
        return cell;
    };
    Object.defineProperty(ReelBase.prototype, "notFixedCodes", {
        get: function () {
            return [];
        },
        enumerable: false,
        configurable: true
    });
    ReelBase.prototype.getFinalCell = function (cellIndex) {
        return this.getCell(cellIndex);
    };
    ReelBase.prototype.cellMoveY = function (cellIndex, step, code) {
        var cell = this.getCell(cellIndex);
        if (!cell) {
            return false;
        }
        return cell.moveY(step, code);
    };
    ReelBase.prototype.getExtraCellCount = function () {
        return { top: 1, bottom: 0 };
    };
    ReelBase.prototype.setFinalResultsImmediately = function (codes, assets) {
        if (!codes || codes.length == 0) {
            cc.warn("\u6700\u7EC8\u7ED3\u679C\u4E3A\u7A7A");
            return;
        }
        var finalResultsLength = codes.length;
        for (var i = 0; i < this._cells.length; i++) {
            if (i >= finalResultsLength) {
                break;
            }
            this._cells[i].code = codes[i];
            this._cells[i].finalAssets = assets[i];
            this._cells[i].initAssetShow();
        }
    };
    ReelBase.prototype.setFinalResultImmediately = function (cellIndex, code) {
        var cell = this.getCell(cellIndex);
        if (!cell) {
            return;
        }
        cell.code = code;
    };
    ReelBase.prototype.onColumnStopped = function (listener, target) {
        this.node.on(SymbolBoardEvent_1.SymbolBoardEvent.COLUMN_STOPPED, listener, target);
    };
    ReelBase.prototype.onBeforeColumnStopped = function (index) { };
    ReelBase.prototype.reset = function () {
        this.unscheduleAllCallbacks();
        for (var i = 0; i < this._cells.length; i++) {
            this._cells[i].reset();
        }
        if (!this._finalFixedsReseted) {
            this._finalFixeds = [];
            for (var i = 0; i < this._nextFixeds.length; i++) {
                this._finalFixeds.push(this._nextFixeds[i]);
            }
            this._finalFixedsReseted = true;
        }
        //this._finalCodes = [];
        this._nextFixeds = [];
        this._mockCodes = [];
        this._moveEnd = false;
        this.isFirstMove = true;
    };
    ReelBase.prototype.prizeShow = function (position, cellIndex) {
        var cell = this.getCell(cellIndex);
        cell.prizeShow(position);
    };
    ReelBase.prototype.receivePrizeShowCompleted = function (position) {
        var parentHoldWin = this.parent;
        if (parentHoldWin) {
            parentHoldWin.receivePrizeShowCompleted(position);
            return;
        }
        var parent = this.parent;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    };
    ReelBase.prototype.receiveMockCodeReplaced = function (columnIndex, cellIndex) {
        var parentHoldWin = this.parent;
        if (parentHoldWin) {
            parentHoldWin.receiveMockCodeReplaced(columnIndex, cellIndex);
            return;
        }
        var parent = this.parent;
        if (parent) {
            parent.receiveMockCodesReplaced(columnIndex, cellIndex);
        }
    };
    ReelBase.prototype.notifyReelStopped = function (columnIndex) {
        var parentHoldWin = this.parent;
        for (var i = 0; i < this.cells.length; i++) {
            var cell = this.getCell(i);
            cell.stopShow();
        }
        if (parentHoldWin) {
            parentHoldWin.receiveReelStopped(columnIndex);
            return;
        }
        var parent = this.parent;
        if (parent) {
            parent.receiveReelStopped(columnIndex);
        }
    };
    ReelBase.prototype.receiveCellStopped = function (cellIndex) {
        var allStopped = true;
        this.symbolBoard.receiveCellStopped(this.index, cellIndex);
        for (var i = 0; i < this._cells.length; i++) {
            var cell = this.getCell(i);
            if (!cell.moveEnd) {
                allStopped = false;
                break;
            }
        }
        if (!allStopped) {
            return;
        }
        //this._moveEnd = true;
        this.status = SymbolBoardStatus_1.SymbolBoardStatus.Stopped;
        var parent = this.parent;
        if (parent) {
            parent.receiveReelStopped(this.index);
        }
    };
    ReelBase.prototype.cellHoldWin = function (cellIndex) {
        var cell = this.getCell(cellIndex);
        cell.holdWin();
    };
    ReelBase.prototype.unCellHoldWin = function (cellIndex) {
        var cell = this.getCell(cellIndex);
        cell.unholdWin();
    };
    //#region 控制器操作
    ReelBase.prototype.setCellControllerProperty = function (cellIndex, controllerName, code) {
        var cell = this.getCell(cellIndex);
        cell.setControllerProperty(controllerName, code);
    };
    ReelBase.prototype.setSymbolControllerProperty = function (cellIndex, controllerName, code) {
        var cell = this.getCell(cellIndex);
        cell.setSymbolControllerProperty(controllerName, code);
    };
    //#endregion
    ReelBase.prototype.playSpineByConfig = function (cellIndex, configName, callback) {
        var cell = this.getCell(cellIndex);
        cell.playSpineByConfig(configName, callback);
    };
    ReelBase.prototype.checkAllChildCreated = function () {
        _super.prototype.checkAllChildCreated.call(this);
        while (this.cells.find(function (c) { return c.mustBeFixed; })) {
            var index = this.cells.findIndex(function (c) { return c.mustBeFixed; });
            if (index !== -1) {
                this.cells.splice(index, 1);
            }
        }
    };
    ReelBase.prototype.notifyPrizeCellSettleCompletedOnceCallback = function () { };
    ReelBase.prototype.prizeChipCellSettle = function (position, symbolCode, assets, callback) {
        var cell = this.getCell(position % this.cells.length);
        cell.prizeChipCellSettle(position, symbolCode, assets, callback);
    };
    ReelBase.prototype.notifyShowDoubleAssets = function () {
        for (var index = 0; index < this.cells.length; index++) {
            var cell = this.cells[index];
            cell.notifyShowDoubleAssets();
        }
    };
    ReelBase.prototype.doubleChessShow = function () {
        for (var index = 0; index < this.cells.length; index++) {
            var cell = this.cells[index];
            cell.doubleChessShow();
        }
    };
    ReelBase.prototype.setAssetsAfterChessboardStopped = function () {
        this.cells.map(function (cell) {
            cell.setAssetAfterChessboardStopped();
        });
    };
    return ReelBase;
}(FguiComponentBase_1.default));
exports.default = ReelBase;

cc._RF.pop();