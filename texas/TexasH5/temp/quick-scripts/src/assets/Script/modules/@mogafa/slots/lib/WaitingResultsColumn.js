"use strict";
cc._RF.push(module, '9c54c2CCUdBw4Ntgi4uCVRg', 'WaitingResultsColumn');
// Script/modules/@mogafa/slots/lib/WaitingResultsColumn.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FifoQueue_1 = require("./FifoQueue");
var WaitingResultsStep_1 = require("./WaitingResultsStep");
var WaitingResultsSpinStatus_1 = require("./WaitingResultsSpinStatus");
var SymbolBoardConst_1 = require("./SymbolBoard/SymbolBoardConst");
var NumberUtils_1 = require("../../utils/lib/NumberUtils");
var WaitingResultsColumn = /** @class */ (function () {
    function WaitingResultsColumn(maxCode, steps) {
        this._stopCodes = [];
        //private _canBeStart: boolean;
        this._steps = [];
        this._excludeCodes = [];
        this._stopped = false;
        this._maxCode = maxCode;
        this._cells = [];
        this._stopCodes = [];
        this._randomCodes = new FifoQueue_1.default();
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, maxCode));
        //this._canBeStart = false;
        this._theNextCode = this.randomCode;
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
        if (steps) {
            this._steps = steps;
            var step = steps.find(function (s) { return s.status == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal; });
            this._currentStep = step.step;
        }
    }
    Object.defineProperty(WaitingResultsColumn.prototype, "spinStatus", {
        get: function () {
            return this._spinStatus;
        },
        set: function (value) {
            if (value || value === 0) {
                var step = this._steps.find(function (s) { return s.status == value; });
                if (!step) {
                    step = this._steps.find(function (s) { return s.status == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal; });
                }
                this._currentStep = step.step;
                this._spinStatus = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "currentStep", {
        get: function () {
            return this._currentStep;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "theNextCode", {
        get: function () {
            return this._theNextCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "isHoldWin", {
        get: function () {
            return this._isHoldWin;
        },
        set: function (isHoldWin) {
            this._isHoldWin = isHoldWin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "cells", {
        get: function () {
            return this._cells;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "stopCodes", {
        get: function () {
            return this._stopCodes;
        },
        // public get canBeStart(): boolean {
        //     return this._canBeStart;
        // }
        // public set canBeStart(value: boolean) {
        //     this._canBeStart = value;
        // }
        set: function (value) {
            this._stopCodes = value;
            if (!this._stopCodes) {
                this._stopCodes = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "results", {
        set: function (value) {
            this._results = value;
            if (value) {
                this._stopCodes = value.codes;
                this._isHoldWin = value.isHoldWin;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsColumn.prototype, "randomCode", {
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
    Object.defineProperty(WaitingResultsColumn.prototype, "excludeCodes", {
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
            for (var i = 0; i < this._cells.length; i++) {
                this._cells[i].excludeCodes = this.excludeCodes;
            }
        },
        enumerable: false,
        configurable: true
    });
    WaitingResultsColumn.prototype.getStep = function (status) {
        var step = this._steps.find(function (s) { return s.status == status; });
        if (!step) {
            return null;
        }
        return step.step;
    };
    WaitingResultsColumn.prototype.addOrUpdateStep = function (status, step) {
        var oldStep = this._steps.find(function (s) { return s.status == status; });
        if (oldStep) {
            oldStep.step = step;
            return;
        }
        this._steps.push(new WaitingResultsStep_1.default(status, step));
    };
    WaitingResultsColumn.prototype.addCell = function (cell) {
        this.cells.push(cell);
    };
    WaitingResultsColumn.prototype.nextCode = function () {
        this._theNextCode = this.randomCode;
    };
    WaitingResultsColumn.prototype.pushStopCodes = function () {
        if (this._stopCodes && this._stopCodes.length > 0) {
            //console.log("pushStopCodes");
            this._randomCodes.clear();
            this.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
            for (var i = 0; i < this._stopCodes.length; i++) {
                this._randomCodes.enqueue(this._stopCodes[i] + SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET);
            }
            this._stopCodes = [];
        }
    };
    WaitingResultsColumn.prototype.pushStopCodesForCell = function (cellIndex) {
        if (this._stopCodes && this._stopCodes.length > 0) {
            var stopCodesLength = this._stopCodes.length;
            this.cells[cellIndex].pushStopCode(this._stopCodes[stopCodesLength - cellIndex - 1]);
        }
    };
    WaitingResultsColumn.prototype.reset = function () {
        this._isHoldWin = false;
        this._stopCodes = [];
        this._randomCodes.clear();
        this._randomCodes.enqueue(NumberUtils_1.default.random(0, this._maxCode, this._excludeCodes));
        this._theNextCode = this.randomCode;
        //this._canBeStart = false;
        this.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
        for (var i = 0; i < this._cells.length; i++) {
            this._cells[i].reset();
        }
    };
    return WaitingResultsColumn;
}());
exports.default = WaitingResultsColumn;

cc._RF.pop();