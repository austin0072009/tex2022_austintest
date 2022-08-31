
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/WaitingResultsColumn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxXYWl0aW5nUmVzdWx0c0NvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUVwQywyREFBc0Q7QUFDdEQsdUVBQXNFO0FBQ3RFLG1FQUFrRTtBQUVsRSwyREFBc0Q7QUFJdEQ7SUFlSSw4QkFBWSxPQUFlLEVBQUUsS0FBMkI7UUFYaEQsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUdsQywrQkFBK0I7UUFDZCxXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUkzQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxtQkFBUyxFQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLG1EQUF3QixDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLG1EQUF3QixDQUFDLE1BQU0sRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxZQUFZLEdB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QUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7SUFDTSxvQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDcEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsbURBQXdCLENBQUMsTUFBTSxDQUFDO1FBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0EvSkEsQUErSkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWZvUXVldWUgZnJvbSBcIi4vRmlmb1F1ZXVlXCI7XG5pbXBvcnQgV2FpdGluZ1Jlc3VsdHNDZWxsIGZyb20gXCIuL1dhaXRpbmdSZXN1bHRzQ2VsbFwiO1xuaW1wb3J0IFdhaXRpbmdSZXN1bHRzU3RlcCBmcm9tIFwiLi9XYWl0aW5nUmVzdWx0c1N0ZXBcIjtcbmltcG9ydCB7IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cyB9IGZyb20gXCIuL1dhaXRpbmdSZXN1bHRzU3BpblN0YXR1c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRDb25zdCB9IGZyb20gXCIuL1N5bWJvbEJvYXJkL1N5bWJvbEJvYXJkQ29uc3RcIjtcblxuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9saWIvTnVtYmVyVXRpbHNcIjtcbmltcG9ydCBTcGluUmVzdWx0c0NvbHVtbiBmcm9tIFwiLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNDb2x1bW5cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0aW5nUmVzdWx0c0NvbHVtbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4Q29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lzSG9sZFdpbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZWxsczogV2FpdGluZ1Jlc3VsdHNDZWxsW107XG4gICAgcHJpdmF0ZSBfc3RvcENvZGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX3JhbmRvbUNvZGVzOiBGaWZvUXVldWU8bnVtYmVyPjtcbiAgICBwcml2YXRlIF9zcGluU3RhdHVzOiBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXM7XG4gICAgLy9wcml2YXRlIF9jYW5CZVN0YXJ0OiBib29sZWFuO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0ZXBzOiBXYWl0aW5nUmVzdWx0c1N0ZXBbXSA9IFtdO1xuICAgIHByaXZhdGUgX3RoZU5leHRDb2RlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudFN0ZXA6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yZXN1bHRzOiBTcGluUmVzdWx0c0NvbHVtbjtcbiAgICBwcml2YXRlIF9leGNsdWRlQ29kZXM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfc3RvcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RpbWVyOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobWF4Q29kZTogbnVtYmVyLCBzdGVwczogV2FpdGluZ1Jlc3VsdHNTdGVwW10pIHtcbiAgICAgICAgdGhpcy5fbWF4Q29kZSA9IG1heENvZGU7XG4gICAgICAgIHRoaXMuX2NlbGxzID0gW107XG4gICAgICAgIHRoaXMuX3N0b3BDb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl9yYW5kb21Db2RlcyA9IG5ldyBGaWZvUXVldWU8bnVtYmVyPigpO1xuICAgICAgICB0aGlzLl9yYW5kb21Db2Rlcy5lbnF1ZXVlKE51bWJlclV0aWxzLnJhbmRvbSgwLCBtYXhDb2RlKSk7XG4gICAgICAgIC8vdGhpcy5fY2FuQmVTdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90aGVOZXh0Q29kZSA9IHRoaXMucmFuZG9tQ29kZTtcbiAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ob3JtYWw7XG4gICAgICAgIGlmIChzdGVwcykge1xuICAgICAgICAgICAgdGhpcy5fc3RlcHMgPSBzdGVwcztcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwcy5maW5kKChzKSA9PiBzLnN0YXR1cyA9PSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGVwID0gc3RlcC5zdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3BpblN0YXR1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLl9zdGVwcy5maW5kKChzKSA9PiBzLnN0YXR1cyA9PSB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gdGhpcy5fc3RlcHMuZmluZCgocykgPT4gcy5zdGF0dXMgPT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RlcCA9IHN0ZXAuc3RlcDtcbiAgICAgICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNwaW5TdGF0dXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5TdGF0dXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50U3RlcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0ZXA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdGhlTmV4dENvZGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZU5leHRDb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzSG9sZFdpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG9sZFdpbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBpc0hvbGRXaW4oaXNIb2xkV2luOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzSG9sZFdpbiA9IGlzSG9sZFdpbjtcbiAgICB9XG4gICAgcHVibGljIGdldCB0aW1lcigpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZXI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNlbGxzKCk6IFdhaXRpbmdSZXN1bHRzQ2VsbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxzO1xuICAgIH1cbiAgICAvLyBwdWJsaWMgZ2V0IGNhbkJlU3RhcnQoKTogYm9vbGVhbiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9jYW5CZVN0YXJ0O1xuICAgIC8vIH1cbiAgICAvLyBwdWJsaWMgc2V0IGNhbkJlU3RhcnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgdGhpcy5fY2FuQmVTdGFydCA9IHZhbHVlO1xuICAgIC8vIH1cbiAgICBwdWJsaWMgc2V0IHN0b3BDb2Rlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fc3RvcENvZGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fc3RvcENvZGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wQ29kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0b3BDb2RlcygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wQ29kZXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcmVzdWx0cyh2YWx1ZTogU3BpblJlc3VsdHNDb2x1bW4pIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0cyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BDb2RlcyA9IHZhbHVlLmNvZGVzO1xuICAgICAgICAgICAgdGhpcy5faXNIb2xkV2luID0gdmFsdWUuaXNIb2xkV2luO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcmFuZG9tQ29kZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgY29kZSA9IHRoaXMuX3JhbmRvbUNvZGVzLmRlcXVldWUoKTtcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5TdGF0dXMgIT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yYW5kb21Db2Rlcy5lbnF1ZXVlKE51bWJlclV0aWxzLnJhbmRvbSgwLCB0aGlzLl9tYXhDb2RlLCB0aGlzLl9leGNsdWRlQ29kZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBleGNsdWRlQ29kZXMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhjbHVkZUNvZGVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGV4Y2x1ZGVDb2Rlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fZXhjbHVkZUNvZGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fZXhjbHVkZUNvZGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9leGNsdWRlQ29kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZXhjbHVkZUNvZGVzLmZpbmQoKGMpID0+IGMgPT0gdGhpcy5fdGhlTmV4dENvZGUpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RoZU5leHRDb2RlID0gdGhpcy5yYW5kb21Db2RlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzW2ldLmV4Y2x1ZGVDb2RlcyA9IHRoaXMuZXhjbHVkZUNvZGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXRTdGVwKHN0YXR1czogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuX3N0ZXBzLmZpbmQoKHMpID0+IHMuc3RhdHVzID09IHN0YXR1cyk7XG4gICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ZXAuc3RlcDtcbiAgICB9XG4gICAgcHVibGljIGFkZE9yVXBkYXRlU3RlcChzdGF0dXM6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9sZFN0ZXAgPSB0aGlzLl9zdGVwcy5maW5kKChzKSA9PiBzLnN0YXR1cyA9PSBzdGF0dXMpO1xuICAgICAgICBpZiAob2xkU3RlcCkge1xuICAgICAgICAgICAgb2xkU3RlcC5zdGVwID0gc3RlcDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGVwcy5wdXNoKG5ldyBXYWl0aW5nUmVzdWx0c1N0ZXAoc3RhdHVzLCBzdGVwKSk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRDZWxsKGNlbGw6IFdhaXRpbmdSZXN1bHRzQ2VsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNlbGxzLnB1c2goY2VsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBuZXh0Q29kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdGhlTmV4dENvZGUgPSB0aGlzLnJhbmRvbUNvZGU7XG4gICAgfVxuICAgIHB1YmxpYyBwdXNoU3RvcENvZGVzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RvcENvZGVzICYmIHRoaXMuX3N0b3BDb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHVzaFN0b3BDb2Rlc1wiKTtcbiAgICAgICAgICAgIHRoaXMuX3JhbmRvbUNvZGVzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3RvcHBpbmc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0b3BDb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmRvbUNvZGVzLmVucXVldWUodGhpcy5fc3RvcENvZGVzW2ldICsgU3ltYm9sQm9hcmRDb25zdC5GSU5BTF9DT0RFX09GRlNFVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdG9wQ29kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcHVzaFN0b3BDb2Rlc0ZvckNlbGwoY2VsbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3BDb2RlcyAmJiB0aGlzLl9zdG9wQ29kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3RvcENvZGVzTGVuZ3RoID0gdGhpcy5fc3RvcENvZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbY2VsbEluZGV4XS5wdXNoU3RvcENvZGUodGhpcy5fc3RvcENvZGVzW3N0b3BDb2Rlc0xlbmd0aCAtIGNlbGxJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzSG9sZFdpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdG9wQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuZW5xdWV1ZShOdW1iZXJVdGlscy5yYW5kb20oMCwgdGhpcy5fbWF4Q29kZSwgdGhpcy5fZXhjbHVkZUNvZGVzKSk7XG4gICAgICAgIHRoaXMuX3RoZU5leHRDb2RlID0gdGhpcy5yYW5kb21Db2RlO1xuICAgICAgICAvL3RoaXMuX2NhbkJlU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2VsbHNbaV0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==