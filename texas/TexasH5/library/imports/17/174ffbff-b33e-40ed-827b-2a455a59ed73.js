"use strict";
cc._RF.push(module, '174ffv/sz5A7YJ7KkVaWe1z', 'WaitingResultsCell');
// Script/modules/@mogafa/slots/lib/WaitingResultsCell.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FifoQueue_1 = require("./FifoQueue");
var WaitingResultsSpinStatus_1 = require("./WaitingResultsSpinStatus");
var SymbolBoardConst_1 = require("./SymbolBoard/SymbolBoardConst");
var NumberUtils_1 = require("../../utils/lib/NumberUtils");
var WaitingResultsCell = /** @class */ (function () {
    function WaitingResultsCell(maxCode) {
        this._excludeCodes = [];
        this._maxCode = maxCode;
        this._randomCodes = new FifoQueue_1.default();
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, maxCode));
        this._theNextCode = this.randomCode;
        this._isHoldWin = false;
        this._holdWinShowing = false;
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
    }
    Object.defineProperty(WaitingResultsCell.prototype, "maxCode", {
        get: function () {
            return this._maxCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "spinStatus", {
        get: function () {
            return this._spinStatus;
        },
        set: function (value) {
            this._spinStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "theNextCode", {
        get: function () {
            return this._theNextCode;
        },
        enumerable: false,
        configurable: true
    });
    WaitingResultsCell.prototype.nextCode = function () {
        this._theNextCode = this.randomCode;
    };
    Object.defineProperty(WaitingResultsCell.prototype, "randomCode", {
        get: function () {
            var code = this._randomCodes.dequeue();
            if (this._spinStatus != WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping) {
                this._randomCodes.enqueue(NumberUtils_1.default.random(0, this._maxCode, this._excludeCodes));
            }
            return code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "excludeCodes", {
        get: function () {
            return this._excludeCodes;
        },
        set: function (value) {
            var _this = this;
            this._excludeCodes = value;
            if (!this._excludeCodes) {
                this._excludeCodes = [];
            }
            if (this._excludeCodes.find(function (c) { return c == _this._theNextCode; }) != null) {
                this._theNextCode = this.randomCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "fixed", {
        get: function () {
            return this._fixed;
        },
        set: function (value) {
            this._fixed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "isHoldWin", {
        get: function () {
            return this._isHoldWin;
        },
        set: function (value) {
            this._isHoldWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "holdWinShowing", {
        get: function () {
            return this._holdWinShowing;
        },
        set: function (value) {
            this._holdWinShowing = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsCell.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingResultsCell.prototype.pushStopCode = function (code) {
        this._randomCodes.clear();
        this._randomCodes.enqueue(code + SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET);
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, this._maxCode, this._excludeCodes));
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
    };
    WaitingResultsCell.prototype.reset = function () {
        this._randomCodes.clear();
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, this.maxCode));
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, this._maxCode, this._excludeCodes));
        this.nextCode();
        this._theNextCode = this.randomCode;
        this.isHoldWin = false;
        this.holdWinShowing = false;
        this.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
    };
    return WaitingResultsCell;
}());
exports.default = WaitingResultsCell;

cc._RF.pop();