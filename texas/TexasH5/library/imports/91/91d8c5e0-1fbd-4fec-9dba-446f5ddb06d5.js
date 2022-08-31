"use strict";
cc._RF.push(module, '91d8cXgH71P7J26RG9d2wbV', 'HoldWinBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/HoldWinBase.ts

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
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var HoldWinBase = /** @class */ (function (_super) {
    __extends(HoldWinBase, _super);
    function HoldWinBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHoldWin = false;
        return _this;
    }
    Object.defineProperty(HoldWinBase.prototype, "stageCode", {
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
            if (this._column) {
                this._column.stageCode = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "symbolBoard", {
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
            if (this._column) {
                this._column.symbolBoard = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "boardStatus", {
        get: function () {
            return this._boardStatus;
        },
        set: function (value) {
            this._boardStatus = value;
            if (this.column) {
                this.column.boardStatus = value;
            }
            this.status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            if (this.column) {
                this.column.status = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "column", {
        get: function () {
            return this._column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
            if (this._column) {
                this._column.index = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    HoldWinBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._mask = this.getChild("mask");
        this._column = this.addColumn();
        //this._column.fguiComponent.setMask(null, false);
        this._column.fguiX = 0;
        this._column.fguiY = 0;
        this._column.index = this.index;
        this._column.stageCode = this.stageCode;
        this._column.holdWin = this;
        this._column.symbolBoard = this.symbolBoard;
    };
    HoldWinBase.prototype.beforeStartWaitingResults = function () {
        if (this._column) {
            this._column.beforeStartWaitingResults();
        }
    };
    HoldWinBase.prototype.beforeStopWaitingResults = function () {
        if (this._column) {
            this._column.beforeStopWaitingResults();
        }
    };
    HoldWinBase.prototype.onColumnStopped = function (listener, target) {
        if (this._column) {
            this._column.onColumnStopped(listener, target);
        }
    };
    HoldWinBase.prototype.holdWin = function () {
        if (this._column) {
            this.setControllerProperty(this.holdWinControllerName, 1);
            var holdWin = this.fguiComponent.getChild(this.holdWinComponentName);
            if (holdWin) {
                this.holdWinShow();
                this.isHoldWin = true;
                this.fguiComponent.addChild(holdWin);
            }
        }
    };
    HoldWinBase.prototype.holdWinShow = function () { };
    HoldWinBase.prototype.unholdWin = function (index) {
        if (this.isHoldWin && index === this._index) {
            this.setControllerProperty(this.holdWinControllerName, 0);
            this.isHoldWin = false;
            this.holdWinEnd();
        }
    };
    HoldWinBase.prototype.holdWinEnd = function () { };
    HoldWinBase.prototype.receivePrizeShowCompleted = function (position) {
        var parent = this.parent;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    };
    HoldWinBase.prototype.receiveMockCodeReplaced = function (columnIndex, cellIndex) {
        var parent = this.parent;
        if (parent) {
            parent.receiveMockCodesReplaced(columnIndex, cellIndex);
        }
    };
    HoldWinBase.prototype.receiveReelStopped = function (columnIndex) {
        var parent = this.parent;
        if (parent) {
            parent.receiveReelStopped(columnIndex);
        }
    };
    HoldWinBase.prototype.reset = function () {
        this.isHoldWin = false;
    };
    HoldWinBase.prototype.showMask = function () {
        this.fguiComponent.setMask(this._mask, false);
    };
    HoldWinBase.prototype.hideMask = function () {
        this.fguiComponent.setMask(null, false);
    };
    return HoldWinBase;
}(FguiComponentBase_1.default));
exports.default = HoldWinBase;

cc._RF.pop();