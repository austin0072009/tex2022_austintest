
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/ReelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcUmVlbEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyx1REFBc0Q7QUFDdEQsNkNBQXdDO0FBR3hDLHlEQUF3RDtBQUl4RCx1RkFBa0Y7QUFDbEYsOERBQXlEO0FBSXpEO0lBQStDLDRCQUFpQjtJQUFoRTtRQUFBLHFFQXVuQkM7UUExbUJHOztXQUVHO1FBQ0ssd0JBQWtCLEdBQW9CLElBQUksQ0FBQztRQUNuRDs7V0FFRztRQUNLLDBCQUFvQixHQUFvQixJQUFJLENBQUM7UUFDckQ7O1dBRUc7UUFDSyx3QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBQ25EOztXQUVHO1FBQ0ssc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUNqRDs7V0FFRztRQUNLLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQTBGaEMsWUFBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUM3QixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3Qix5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsdUJBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBK0s5QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBcVU3QyxDQUFDO0lBbmxCRyxzQkFBSSwrQkFBUztRQUhiOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBYyxLQUFhO1lBQ3ZC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QUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVNLGtEQUErQixHQUF0QztRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNoQixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F2bkJBLEFBdW5CQyxDQXZuQjhDLDJCQUFpQixHQXVuQi9EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGxCYXNlIGZyb20gXCIuL0NlbGxCYXNlXCI7XG4vL2ltcG9ydCB7IGZndWkgfSBmcm9tIFwiZmFpcnlndWlcIjtcbmltcG9ydCB7IFN5bWJvbEJvYXJkRXZlbnQgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZEV2ZW50XCI7XG5pbXBvcnQgSG9sZFdpbkJhc2UgZnJvbSBcIi4vSG9sZFdpbkJhc2VcIjtcbmltcG9ydCBTeW1ib2xCb2FyZEJhc2UgZnJvbSBcIi4vU3ltYm9sQm9hcmRCYXNlXCI7XG5pbXBvcnQgeyBNb2dhZmFTbG90cyB9IGZyb20gXCIuLi9Nb2dhZmFTbG90c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZFN0YXR1c1wiO1xuXG5pbXBvcnQgeyBJUmVzaWxpZW5jZU1vdmUgfSBmcm9tIFwiLi4vSVJlc2lsaWVuY2VNb3ZlXCI7XG5pbXBvcnQgU2xvdEdhbWVTdGFnZUJhc2UgZnJvbSBcIi4uL0dhbWVTdGFnZS9TbG90R2FtZVN0YWdlQmFzZVwiO1xuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5pbXBvcnQgTnVtYmVyVXRpbHMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xpYi9OdW1iZXJVdGlsc1wiO1xuaW1wb3J0IFNwaW5SZXN1bHRzQ29sdW1uIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0NvbHVtblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFJlZWxCYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2UgaW1wbGVtZW50cyBNb2dhZmFTbG90cyB7XG4gICAgLyoqXG4gICAgICog5YWz5Y2h57yW56CBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhZ2VDb2RlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5omA5bGeaG9sZFdpblxuICAgICAqL1xuICAgIHByaXZhdGUgX2hvbGRXaW46IEhvbGRXaW5CYXNlO1xuICAgIC8qKlxuICAgICAqIOaJgOWxnuaji+ebmFxuICAgICAqL1xuICAgIHByaXZhdGUgX3N5bWJvbEJvYXJkOiBTeW1ib2xCb2FyZEJhc2U7XG4gICAgLyoqXG4gICAgICog5ZCv5Yqo5Zue5by55byA5aeLXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhcnRVcFJlc2lsaWVuY2U6IElSZXNpbGllbmNlTW92ZSA9IG51bGw7XG4gICAgLyoqXG4gICAgICog5ZCv5Yqo5Zue5by5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhcnREb3duUmVzaWxpZW5jZTogSVJlc2lsaWVuY2VNb3ZlID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiDnu5PmnZ/lm57lvLnlvIDlp4tcbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbmREb3duUmVzaWxpZW5jZTogSVJlc2lsaWVuY2VNb3ZlID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiDnu5PmnZ/lm57lvLnnu5PmnZ9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbmRVcFJlc2lsaWVuY2U6IElSZXNpbGllbmNlTW92ZSA9IG51bGw7XG4gICAgLyoqXG4gICAgICog6IO95ZCm57uT5p2f5Zue5by5XG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2FuRW5kUmVzaWxpZW5jZTogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICog6I635Y+W5YWz5Y2h57yW56CBXG4gICAgICovXG4gICAgZ2V0IHN0YWdlQ29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2VDb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7lhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBzZXQgc3RhZ2VDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3RhZ2VDb2RlID0gdmFsdWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2VsbHNbaV0uc3RhZ2VDb2RlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tdXN0QmVGaXhlZENlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9tdXN0QmVGaXhlZENlbGxzW2ldLnN0YWdlQ29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rmhvbGRXaW5cbiAgICAgKi9cbiAgICBnZXQgaG9sZFdpbigpOiBIb2xkV2luQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob2xkV2luO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5Zob2xkV2luXG4gICAgICovXG4gICAgc2V0IGhvbGRXaW4odmFsdWU6IEhvbGRXaW5CYXNlKSB7XG4gICAgICAgIHRoaXMuX2hvbGRXaW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5qOL55uYXG4gICAgICovXG4gICAgZ2V0IHN5bWJvbEJvYXJkKCk6IFN5bWJvbEJvYXJkQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xCb2FyZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBzeW1ib2wgYm9hcmRcbiAgICAgKiDorr7nva7mo4vnm5hcbiAgICAgKi9cbiAgICBzZXQgc3ltYm9sQm9hcmQodmFsdWU6IFN5bWJvbEJvYXJkQmFzZSkge1xuICAgICAgICB0aGlzLl9zeW1ib2xCb2FyZCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCb2FyZCBzdGF0dXMgb2Ygc3ltYm9sIGJhc2VcbiAgICAgKiDmo4vnm5jnirbmgIFcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib2FyZFN0YXR1czogU3ltYm9sQm9hcmRTdGF0dXM7XG4gICAgZ2V0IGJvYXJkU3RhdHVzKCk6IFN5bWJvbEJvYXJkU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvYXJkU3RhdHVzO1xuICAgIH1cbiAgICBzZXQgYm9hcmRTdGF0dXModmFsdWU6IFN5bWJvbEJvYXJkU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX2JvYXJkU3RhdHVzID0gdmFsdWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLmJvYXJkU3RhdHVzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGF0dXMgIG9mIHN5bWJvbCBiYXNlXG4gICAgICog5qOL5a2Q54q25oCBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBTeW1ib2xCb2FyZFN0YXR1cztcbiAgICBnZXQgc3RhdHVzKCk6IFN5bWJvbEJvYXJkU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgc2V0IHN0YXR1cyh2YWx1ZTogU3ltYm9sQm9hcmRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiDveWQpue7k+adn+WbnuW8uVxuICAgICAqL1xuICAgIHNldCBjYW5FbmRSZXNpbGllbmNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2NhbkVuZFJlc2lsaWVuY2UgPSB2YWx1ZVxuICAgIH1cbiAgICBnZXQgY2FuRW5kUmVzaWxpZW5jZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkVuZFJlc2lsaWVuY2VcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBtYXhDb2RlKCk6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG1hc2tDb21wb25lbnROYW1lKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmnIDkuIvpnaLkuIDkuKrmoLzlrZDnmoRZ5Z2Q5qCH77yI5YyF5ZCr55So5LqO6L2s5Yqo55qE5aSa5L2Z55qE5qC85a2Q77yJXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCB0aGVGaW5hbEJvdHRvbUNlbGxZKCk6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2NlbGxzOiBDZWxsQmFzZVtdID0gW107XG4gICAgcHJvdGVjdGVkIF9maW5hbENvZGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbmFsRml4ZWRzOiBib29sZWFuW10gPSBbXTtcbiAgICBwcml2YXRlIF9maW5hbEZpeGVkc1Jlc2V0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9uZXh0Rml4ZWRzOiBib29sZWFuW10gPSBbXTtcbiAgICBwcml2YXRlIF9maXhlZFV1aWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpeGVkUG9zaXRpb25zOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX211c3RCZUZpeGVkQ2VsbHM6IENlbGxCYXNlW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX21vY2tDb2RlczogbnVtYmVyW11bXSA9IFtdO1xuICAgIHByaXZhdGUgX21hc2s6IGZndWkuR09iamVjdDtcbiAgICBwcml2YXRlIF9tb3ZlRW5kOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0TW92ZTogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgY2VsbHMoKTogQ2VsbEJhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxscztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBtdXN0QmVGaXhlZENlbGxzKCk6IENlbGxCYXNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXVzdEJlRml4ZWRDZWxscztcbiAgICB9XG4gICAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICAvLyBwdWJsaWMgZ2V0IG1vdmVFbmQoKTogYm9vbGVhbiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9tb3ZlRW5kO1xuICAgIC8vIH1cbiAgICBwdWJsaWMgZ2V0IGZpbmFsQ29kZXMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluYWxDb2RlcztcbiAgICB9XG4gICAgcHVibGljIHNldCBmaW5hbENvZGVzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9maW5hbENvZGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fZmluYWxDb2Rlcykge1xuICAgICAgICAgICAgdGhpcy5fZmluYWxDb2RlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbW9ja0NvZGVzKCk6IG51bWJlcltdW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9ja0NvZGVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1vY2tDb2Rlcyh2YWx1ZTogbnVtYmVyW11bXSkge1xuICAgICAgICB0aGlzLl9tb2NrQ29kZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9tb2NrQ29kZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX21vY2tDb2RlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeUqOS6jui9rOWKqOeahOmhtumDqOWkmuS9meeahOagvOWtkOaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdG9wRXh0cmFDZWxscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog55So5LqO6L2s5Yqo55qE5bqV6YOo5aSa5L2Z55qE5qC85a2Q5pWwXG4gICAgICovXG4gICAgcHVibGljIGdldCBib3R0b21FeHRyYUNlbGxzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBwcml2YXRlIHJlZWxSZXN1bHRzOiBTcGluUmVzdWx0c0NvbHVtbjtcbiAgICBwdWJsaWMgc2V0IHNwaW5SZXN1bHRzKHZhbHVlOiBTcGluUmVzdWx0c0NvbHVtbikge1xuICAgICAgICB0aGlzLnJlZWxSZXN1bHRzID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX25leHRGaXhlZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbHNbaSArIHRoaXMudG9wRXh0cmFDZWxsc107XG4gICAgICAgICAgICBjZWxsLnNwaW5SZXN1bHQgPSB2YWx1ZS5jZWxsc1tpXTtcbiAgICAgICAgICAgIHRoaXMuX25leHRGaXhlZHMucHVzaCh2YWx1ZS5jZWxsc1tpXS5maXhlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXN0QmVGaXhlZENlbGxzICYmIHRoaXMubXVzdEJlRml4ZWRDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXN0QmVGaXhlZENlbGxzW2ldLnNwaW5SZXN1bHQgPSB2YWx1ZS5jZWxsc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5fbWFzayA9IHRoaXMuZmd1aUNvbXBvbmVudC5tYXNrO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc2V0TWFzayhudWxsLCBmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRGZ3VpQ29tcG9uZW50PFQgZXh0ZW5kcyBGZ3VpQ29tcG9uZW50QmFzZT4odHlwZTogeyBuZXcoKTogVCB9LCBjaGFuZ2VTaXplOiBib29sZWFuID0gdHJ1ZSk6IFQge1xuICAgICAgICBsZXQgY2hpbGQgPSBzdXBlci5hZGRGZ3VpQ29tcG9uZW50KHR5cGUsIGNoYW5nZVNpemUpO1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBDZWxsQmFzZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IChjaGlsZCBhcyB1bmtub3duKSBhcyBDZWxsQmFzZTtcbiAgICAgICAgICAgIGNlbGwuc3RhZ2VDb2RlID0gdGhpcy5zdGFnZUNvZGU7XG4gICAgICAgICAgICBjZWxsLnJlZWwgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgIGNlbGwuaW5kZXggPSB0aGlzLl9jZWxscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY2VsbC5tb2dhZmFJZCA9IGNlbGwuaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHB1YmxpYyBiZWZvcmVTdGFydFdhaXRpbmdSZXN1bHRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tb3ZlRW5kID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5mZ3VpQ29tcG9uZW50LnNldE1hc2sodGhpcy5fbWFzaywgZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgYmVmb3JlU3RvcFdhaXRpbmdSZXN1bHRzKCk6IHZvaWQgeyB9XG4gICAgcHJvdGVjdGVkIGFmdGVyU3RvcFdhaXRpbmdSZXN1bHRzKCk6IHZvaWQge1xuICAgICAgICAvL3RoaXMuZmd1aUNvbXBvbmVudC5zZXRNYXNrKG51bGwsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50IGluc3RhbmNlb2YgSG9sZFdpbkJhc2UpIHtcbiAgICAgICAgICAgIDxIb2xkV2luQmFzZT4oPGFueT5wYXJlbnQudW5ob2xkV2luKHRoaXMuaW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVwbGFjZU1vY2tDb2RlcyhjZWxsSW5kZXg/OiBudW1iZXIsIGNvZGU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNlbGxJbmRleCAhPSBudWxsICYmIGNvZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjZWxsSW5kZXgpO1xuICAgICAgICAgICAgY2VsbC5yZXBsYWNlTW9ja0NvZGVJbnRlcm5hbChjb2RlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmluYWxJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maW5hbENvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0RmluYWxDZWxsKGkpO1xuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmluZGV4ID0gZmluYWxJbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxDb2RlID0gdGhpcy5fZmluYWxDb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBjZWxsLmZpbmFsQ29kZSA9IGZpbmFsQ29kZTtcbiAgICAgICAgICAgICAgICBjZWxsLm1vY2tDb2RlcyA9IHRoaXMubW9ja0NvZGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLm1vY2tDb2RlcyAmJiBjZWxsLm1vY2tDb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZU1vY2tDb2RlSW50ZXJuYWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UmVlbFN0YXJ0UmVzaWxpZW5jZSh1cDogSVJlc2lsaWVuY2VNb3ZlLCBkb3duOiBJUmVzaWxpZW5jZU1vdmUpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRVcFJlc2lsaWVuY2UgPSB1cDtcbiAgICAgICAgdGhpcy5fc3RhcnREb3duUmVzaWxpZW5jZSA9IGRvd247XG4gICAgfVxuICAgIHNldFJlZWxFbmRSZXNpbGllbmNlKGRvd246IElSZXNpbGllbmNlTW92ZSwgdXA6IElSZXNpbGllbmNlTW92ZSkge1xuICAgICAgICB0aGlzLl9lbmREb3duUmVzaWxpZW5jZSA9IGRvd247XG4gICAgICAgIHRoaXMuX2VuZFVwUmVzaWxpZW5jZSA9IHVwO1xuICAgIH1cbiAgICByZWVsU3RhcnRSZXNpbGllbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0UmVzaWxpZW5jZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb3J0Q2VsbCgpO1xuICAgICAgICAvL3RvZG8g56ys5LiA5qyh5ZCv5Yqo5Zue5by556e75Yqo5Yiw5pyr5bC+55qE56ys5LiA5Liq5qOL5a2Q5pyq5pi+56S655qE5Y6f5Zug5piv5b2T5YmN55qEY29kZeS4unVuZGVmaW5lZFxuICAgICAgICAvL3RvZG8g5Zug5q2k5Li05pe255qE57uZ5b2T5YmN5qOL5a2Q6ZqP5py66LWL5LiA5Liq5YC8XG4gICAgICAgIHRoaXMuY2VsbHNbMF0uY29kZSA9IE51bWJlclV0aWxzLnJhbmRvbSgwLCAxMSk7XG4gICAgICAgIHRoaXMuY2VsbHNbMF0uZmd1aVkgPSB0aGlzLmNlbGxzW3RoaXMuY2VsbHMubGVuZ3RoIC0gMV0uZmd1aVkgKyB0aGlzLmNlbGxzWzBdLmZndWlIZWlnaHQ7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLm1vdmVUbyhcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFVwUmVzaWxpZW5jZS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFVwUmVzaWxpZW5jZS54UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRVcFJlc2lsaWVuY2UueVBvc2l0aW9uXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2MubW92ZVRvKFxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0RG93blJlc2lsaWVuY2UuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnREb3duUmVzaWxpZW5jZS54UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnREb3duUmVzaWxpZW5jZS55UG9zaXRpb25cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFJlc2lsaWVuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BSZXNpbGllbmNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5zZXRNYXNrKHRoaXMuX21hc2ssIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaG9sZFdpbi5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICB9XG4gICAgcmVlbFN0b3BSZXNpbGllbmNlKCkge1xuICAgICAgICB0aGlzLnNvcnRDZWxsKCk7XG4gICAgICAgIHRoaXMuY2VsbHNbMF0uZmd1aUNvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkVuZFJlc2lsaWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuRW5kUmVzaWxpZW5jZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MubW92ZVRvKFxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZERvd25SZXNpbGllbmNlLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZERvd25SZXNpbGllbmNlLnhQb3NpdGlvbixcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmREb3duUmVzaWxpZW5jZS55UG9zaXRpb25cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5tb3ZlVG8odGhpcy5fZW5kVXBSZXNpbGllbmNlLmR1cmF0aW9uLCB0aGlzLl9lbmRVcFJlc2lsaWVuY2UueFBvc2l0aW9uLCB0aGlzLl9lbmRVcFJlc2lsaWVuY2UueVBvc2l0aW9uKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnRVcFJlc2lsaWVuY2UgJiYgdGhpcy5fc3RhcnREb3duUmVzaWxpZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UmVzaWxpZW5jZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wUmVzaWxpZW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNlbGxzWzBdLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGRXaW4uaGlkZU1hc2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGRXaW4uc2hvd01hc2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGFydFJlc2lsaWVuY2VkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHN0b3BSZXNpbGllbmNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgZmlyc3RNb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9maXhlZFV1aWRzID0gW107XG4gICAgICAgIHRoaXMuX2ZpeGVkUG9zaXRpb25zID0gW107XG4gICAgICAgIGlmICh0aGlzLl9zdGFydFVwUmVzaWxpZW5jZSAmJiB0aGlzLl9zdGFydERvd25SZXNpbGllbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZWxTdGFydFJlc2lsaWVuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyog6K6+572u5LiA5Liq5biD5bCU5Y+Y6YeP77yM5q+P5qyhc3BpbuaXtuWPquiuqeS4gOS4quWbuuWumuaji+WtkOinpuWPkeaViOaenFxuICAgICAgICAvL3RvZG8g55uu5YmN5pqC5pe25Y+q5pyJ5Z+D5Y+K6L+Z5Liq5YWz5Y2h5pyJ6L+Z5Liq6ZyA5rGC77yM6Iul6KaB5LyY5YyW6ZyA6KaB5bCG6L2s6L205Z+657G75oq956a755qE5pu057qv57K5XG4gICAgICAgIC8vdG9kbyDlj6rmtonlj4rmnIDln7rmnKznmoRzcGlu77yM5YW25L2Z55qE54m55q6K5Yqf6IO95YWo6YOo6YCa6L+H57un5om/5a6e546wXG4gICAgICAgIGxldCByZXNwaW5GbGFnOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuX2NlbGxzW2ldO1xuICAgICAgICAgICAgY2VsbC5zdGFydE1vdmUoKTtcbiAgICAgICAgICAgIGlmICghY2VsbC5mZ3VpQ29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tdXN0QmVGaXhlZENlbGxzICYmIHRoaXMubXVzdEJlRml4ZWRDZWxscy5sZW5ndGggPiAwICYmIGkgPj0gdGhpcy50b3BFeHRyYUNlbGxzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRDZWxsID0gdGhpcy5tdXN0QmVGaXhlZENlbGxzW2kgLSB0aGlzLnRvcEV4dHJhQ2VsbHNdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maW5hbEZpeGVkc1tpIC0gdGhpcy50b3BFeHRyYUNlbGxzXSkge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZENlbGwuY29kZSA9IGNlbGwuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BpbkZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkQ2VsbC5maXhlZENlbGxTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzcGluRmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmaXhlZENlbGwuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZENlbGwuZml4ZWRDZWxsSGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBmaXhlZENlbGwuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBtb3ZlWShzdGVwOiBudW1iZXIsIGNvZGU/OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdmVFbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0TW92ZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdE1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhcnRSZXNpbGllbmNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9sZFdpbi5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLnNvcnRDZWxsKCk7XG4gICAgICAgIGNvbnN0IHRoZVRvcENlbGwgPSB0aGlzLl9jZWxsc1swXTtcbiAgICAgICAgY29uc3QgdGhlQm90dG9tQ2VsbCA9IHRoaXMuX2NlbGxzW3RoaXMuX2NlbGxzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhlQm90dG9tQ2VsbC5pc0ZpbmFsKSB7XG4gICAgICAgICAgICBpZiAodGhlQm90dG9tQ2VsbC5mZ3VpWSArIHN0ZXAgPj0gdGhpcy50aGVGaW5hbEJvdHRvbUNlbGxZKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IHRoaXMudGhlRmluYWxCb3R0b21DZWxsWSAtIHRoZUJvdHRvbUNlbGwuZmd1aVk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUVuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuX2NlbGxzW2ldO1xuICAgICAgICAgICAgY2VsbC5mZ3VpWSArPSBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9tb3ZlRW5kKSB7XG4gICAgICAgICAgICB0aGVUb3BDZWxsLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5TdG9wcGVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VuZERvd25SZXNpbGllbmNlICYmIHRoaXMuX2VuZFVwUmVzaWxpZW5jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVlbFN0b3BSZXNpbGllbmNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmREb3duUmVzaWxpZW5jZSAmJiB0aGlzLl9lbmRVcFJlc2lsaWVuY2UgJiYgdGhpcy5zdG9wUmVzaWxpZW5jZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVJlZWxTdG9wcGVkKHRoaXMuX2luZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gU3ltYm9sQm9hcmRTdGF0dXMuU3RvcHBlZDtcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnNldE1hc2sobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5ob2xkV2luLmhpZGVNYXNrKCk7XG4gICAgICAgICAgICB0aGlzLl9maW5hbEZpeGVkcyA9IHRoaXMuX2ZpbmFsRml4ZWRzIHx8IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZXh0Rml4ZWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbmFsRml4ZWRzW2ldID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbEZpeGVkc1tpXSA9IHRoaXMuX25leHRGaXhlZHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMubmV4dEdhbWVNb2RlIDwgMSkge1xuICAgICAgICAgICAgLy8gICAgIC8vdG9kbyDmmoLml7bnlKjlu7bml7blpITnkIbvvIzlrozlloTlgZrms5XlupTor6XmmK/lnKhob2xkd2lu5Z+657G75Lit55qEcmVjZWl2ZVJlZWxTdG9wcGVk55qE5pa55rOV5p2l6Kem5Y+RXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5tdXN0QmVGaXhlZENlbGxzICYmIHRoaXMubXVzdEJlRml4ZWRDZWxscy5sZW5ndGggPiAwICYmIGkgPj0gdGhpcy50b3BFeHRyYUNlbGxzKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgZml4ZWRDZWxsID0gdGhpcy5tdXN0QmVGaXhlZENlbGxzW2kgLSB0aGlzLnRvcEV4dHJhQ2VsbHNdO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZpeGVkQ2VsbC5maXhlZENlbGxIaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5fZmluYWxGaXhlZHNSZXNldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFmdGVyU3RvcFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVzZUNvZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhlQm90dG9tQ2VsbC5mZ3VpWSA+PSB0aGlzLmZndWlIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGVCb3R0b21DZWxsLmZndWlZID0gdGhlVG9wQ2VsbC5mZ3VpWSAtIHRoZVRvcENlbGwuZmd1aUhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSB8fCBjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlQ29kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoZUJvdHRvbUNlbGwuY29kZSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwIDwgMCkge1xuICAgICAgICAgICAgaWYgKHRoZVRvcENlbGwuZmd1aVkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoZVRvcENlbGwuZmd1aVkgPSB0aGVCb3R0b21DZWxsLmZndWlZICsgdGhlQm90dG9tQ2VsbC5mZ3VpSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChjb2RlIHx8IGNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VDb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhlVG9wQ2VsbC5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZUNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydENlbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlQ29kZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzb3J0Q2VsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2VsbHMgPSB0aGlzLl9jZWxscy5zb3J0KChjMSwgYzIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjMS5mZ3VpWSAtIGMyLmZndWlZO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2VsbHNbaV0uaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsKGNlbGxJbmRleDogbnVtYmVyKTogQ2VsbEJhc2Uge1xuICAgICAgICBpZiAoY2VsbEluZGV4IDwgMCB8fCBjZWxsSW5kZXggPj0gdGhpcy5fY2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg57Si5byVJHtjZWxsSW5kZXh96LaF5Ye66IyD5Zu0YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuX2NlbGxzW2NlbGxJbmRleF07XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2VsbEluZGV4IC0gdGhpcy50b3BFeHRyYUNlbGxzO1xuICAgICAgICBpZiAocG9zaXRpb24gPj0gMCAmJiB0aGlzLl9maW5hbEZpeGVkc1twb3NpdGlvbl0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBjZWxsLmNvZGU7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm90Rml4ZWRDb2Rlcy5maW5kKChjKSA9PiBjID09IGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjZWxsID0gdGhpcy5tdXN0QmVGaXhlZENlbGxzW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICBjZWxsLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIGNlbGwuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gMCAmJiB0aGlzLnJlZWxSZXN1bHRzKSB7XG4gICAgICAgICAgICBjZWxsLmZpbmFsQXNzZXRzID0gdGhpcy5yZWVsUmVzdWx0cy5jZWxsc1twb3NpdGlvbl0uYXNzZXRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vdEZpeGVkQ29kZXMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRGaW5hbENlbGwoY2VsbEluZGV4OiBudW1iZXIpOiBDZWxsQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGwoY2VsbEluZGV4KTtcbiAgICB9XG4gICAgY2VsbE1vdmVZKGNlbGxJbmRleDogbnVtYmVyLCBzdGVwOiBudW1iZXIsIGNvZGU/OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjZWxsSW5kZXgpO1xuICAgICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbC5tb3ZlWShzdGVwLCBjb2RlKTtcbiAgICB9XG4gICAgZ2V0RXh0cmFDZWxsQ291bnQoKTogeyB0b3A6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfSB7XG4gICAgICAgIHJldHVybiB7IHRvcDogMSwgYm90dG9tOiAwIH07XG4gICAgfVxuICAgIHB1YmxpYyBzZXRGaW5hbFJlc3VsdHNJbW1lZGlhdGVseShjb2RlczogbnVtYmVyW10sIGFzc2V0czogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFjb2RlcyB8fCBjb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY2Mud2Fybihg5pyA57uI57uT5p6c5Li656m6YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluYWxSZXN1bHRzTGVuZ3RoID0gY29kZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBmaW5hbFJlc3VsdHNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLmNvZGUgPSBjb2Rlc1tpXTtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLmZpbmFsQXNzZXRzID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgdGhpcy5fY2VsbHNbaV0uaW5pdEFzc2V0U2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzZXRGaW5hbFJlc3VsdEltbWVkaWF0ZWx5KGNlbGxJbmRleDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjZWxsSW5kZXgpO1xuICAgICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjZWxsLmNvZGUgPSBjb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgb25Db2x1bW5TdG9wcGVkKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihTeW1ib2xCb2FyZEV2ZW50LkNPTFVNTl9TVE9QUEVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcHVibGljIG9uQmVmb3JlQ29sdW1uU3RvcHBlZChpbmRleDogbnVtYmVyKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9maW5hbEZpeGVkc1Jlc2V0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsRml4ZWRzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25leHRGaXhlZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbEZpeGVkcy5wdXNoKHRoaXMuX25leHRGaXhlZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZmluYWxGaXhlZHNSZXNldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuX2ZpbmFsQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbmV4dEZpeGVkcyA9IFtdO1xuICAgICAgICB0aGlzLl9tb2NrQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbW92ZUVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIHByaXplU2hvdyhwb3NpdGlvbjogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsKGNlbGxJbmRleCk7XG4gICAgICAgIGNlbGwucHJpemVTaG93KHBvc2l0aW9uKTtcbiAgICB9XG4gICAgcHVibGljIHJlY2VpdmVQcml6ZVNob3dDb21wbGV0ZWQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcGFyZW50SG9sZFdpbiA9ICh0aGlzLnBhcmVudCBhcyBhbnkpIGFzIEhvbGRXaW5CYXNlO1xuICAgICAgICBpZiAocGFyZW50SG9sZFdpbikge1xuICAgICAgICAgICAgcGFyZW50SG9sZFdpbi5yZWNlaXZlUHJpemVTaG93Q29tcGxldGVkKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyZW50ID0gKHRoaXMucGFyZW50IGFzIGFueSkgYXMgU3ltYm9sQm9hcmRCYXNlO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucmVjZWl2ZVByaXplU2hvd0NvbXBsZXRlZChwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlY2VpdmVNb2NrQ29kZVJlcGxhY2VkKGNvbHVtbkluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhcmVudEhvbGRXaW4gPSAodGhpcy5wYXJlbnQgYXMgdW5rbm93bikgYXMgSG9sZFdpbkJhc2U7XG4gICAgICAgIGlmIChwYXJlbnRIb2xkV2luKSB7XG4gICAgICAgICAgICBwYXJlbnRIb2xkV2luLnJlY2VpdmVNb2NrQ29kZVJlcGxhY2VkKGNvbHVtbkluZGV4LCBjZWxsSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLnBhcmVudCBhcyB1bmtub3duKSBhcyBTeW1ib2xCb2FyZEJhc2U7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZWNlaXZlTW9ja0NvZGVzUmVwbGFjZWQoY29sdW1uSW5kZXgsIGNlbGxJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5vdGlmeVJlZWxTdG9wcGVkKGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFyZW50SG9sZFdpbiA9ICh0aGlzLnBhcmVudCBhcyB1bmtub3duKSBhcyBIb2xkV2luQmFzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0Q2VsbChpKTtcbiAgICAgICAgICAgIGNlbGwuc3RvcFNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50SG9sZFdpbikge1xuICAgICAgICAgICAgcGFyZW50SG9sZFdpbi5yZWNlaXZlUmVlbFN0b3BwZWQoY29sdW1uSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLnBhcmVudCBhcyB1bmtub3duKSBhcyBTeW1ib2xCb2FyZEJhc2U7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZWNlaXZlUmVlbFN0b3BwZWQoY29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY2VpdmVDZWxsU3RvcHBlZChjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgYWxsU3RvcHBlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmQucmVjZWl2ZUNlbGxTdG9wcGVkKHRoaXMuaW5kZXgsIGNlbGxJbmRleCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoaSk7XG4gICAgICAgICAgICBpZiAoIWNlbGwubW92ZUVuZCkge1xuICAgICAgICAgICAgICAgIGFsbFN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbFN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuX21vdmVFbmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFN5bWJvbEJvYXJkU3RhdHVzLlN0b3BwZWQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLnBhcmVudCBhcyB1bmtub3duKSBhcyBTeW1ib2xCb2FyZEJhc2U7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZWNlaXZlUmVlbFN0b3BwZWQodGhpcy5pbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNlbGxIb2xkV2luKGNlbGxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoY2VsbEluZGV4KTtcbiAgICAgICAgY2VsbC5ob2xkV2luKCk7XG4gICAgfVxuICAgIHB1YmxpYyB1bkNlbGxIb2xkV2luKGNlbGxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoY2VsbEluZGV4KTtcbiAgICAgICAgY2VsbC51bmhvbGRXaW4oKTtcbiAgICB9XG4gICAgLy8jcmVnaW9uIOaOp+WItuWZqOaTjeS9nFxuICAgIHB1YmxpYyBzZXRDZWxsQ29udHJvbGxlclByb3BlcnR5KGNlbGxJbmRleDogbnVtYmVyLCBjb250cm9sbGVyTmFtZTogc3RyaW5nLCBjb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjZWxsSW5kZXgpO1xuICAgICAgICBjZWxsLnNldENvbnRyb2xsZXJQcm9wZXJ0eShjb250cm9sbGVyTmFtZSwgY29kZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTeW1ib2xDb250cm9sbGVyUHJvcGVydHkoY2VsbEluZGV4OiBudW1iZXIsIGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsKGNlbGxJbmRleCk7XG4gICAgICAgIGNlbGwuc2V0U3ltYm9sQ29udHJvbGxlclByb3BlcnR5KGNvbnRyb2xsZXJOYW1lLCBjb2RlKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG4gICAgcHVibGljIHBsYXlTcGluZUJ5Q29uZmlnKGNlbGxJbmRleDogbnVtYmVyLCBjb25maWdOYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjZWxsSW5kZXgpO1xuICAgICAgICBjZWxsLnBsYXlTcGluZUJ5Q29uZmlnKGNvbmZpZ05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNoZWNrQWxsQ2hpbGRDcmVhdGVkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5jaGVja0FsbENoaWxkQ3JlYXRlZCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5jZWxscy5maW5kKChjKSA9PiBjLm11c3RCZUZpeGVkKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jZWxscy5maW5kSW5kZXgoKGMpID0+IGMubXVzdEJlRml4ZWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnlQcml6ZUNlbGxTZXR0bGVDb21wbGV0ZWRPbmNlQ2FsbGJhY2soKSB7IH1cbiAgICBwcml6ZUNoaXBDZWxsU2V0dGxlKHBvc2l0aW9uOiBudW1iZXIsIHN5bWJvbENvZGU6IG51bWJlciwgYXNzZXRzOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuZ2V0Q2VsbChwb3NpdGlvbiAlIHRoaXMuY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgY2VsbC5wcml6ZUNoaXBDZWxsU2V0dGxlKHBvc2l0aW9uLCBzeW1ib2xDb2RlLCBhc3NldHMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgbm90aWZ5U2hvd0RvdWJsZUFzc2V0cygpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5jZWxsc1tpbmRleF07XG4gICAgICAgICAgICBjZWxsLm5vdGlmeVNob3dEb3VibGVBc3NldHMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3VibGVDaGVzc1Nob3coKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgY2VsbC5kb3VibGVDaGVzc1Nob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBc3NldHNBZnRlckNoZXNzYm9hcmRTdG9wcGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5zZXRBc3NldEFmdGVyQ2hlc3Nib2FyZFN0b3BwZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19