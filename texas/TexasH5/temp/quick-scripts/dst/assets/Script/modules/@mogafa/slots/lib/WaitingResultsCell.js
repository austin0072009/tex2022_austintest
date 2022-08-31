
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/WaitingResultsCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxXYWl0aW5nUmVzdWx0c0NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsdUVBQXNFO0FBQ3RFLG1FQUFrRTtBQUNsRSwyREFBc0Q7QUFFdEQ7SUFZSSw0QkFBWSxPQUFlO1FBTG5CLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBTWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxtQkFBUyxFQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsbURBQXdCLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMENBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBQ0QsVUFBZSxLQUErQjtZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FIQTtJQUlELHNCQUFJLDJDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDTSxxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJ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RSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsbURBQXdCLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFDTCx5QkFBQztBQUFELENBL0ZBLEFBK0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlmb1F1ZXVlIGZyb20gXCIuL0ZpZm9RdWV1ZVwiO1xuaW1wb3J0IHsgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzIH0gZnJvbSBcIi4vV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzXCI7XG5pbXBvcnQgeyBTeW1ib2xCb2FyZENvbnN0IH0gZnJvbSBcIi4vU3ltYm9sQm9hcmQvU3ltYm9sQm9hcmRDb25zdFwiO1xuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9saWIvTnVtYmVyVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FpdGluZ1Jlc3VsdHNDZWxsIHtcbiAgICBwcml2YXRlIF9tYXhDb2RlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RvcENvZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9maW5hbENvZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9yYW5kb21Db2RlczogRmlmb1F1ZXVlPG51bWJlcj47XG4gICAgcHJpdmF0ZSBfc3BpblN0YXR1czogV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzO1xuICAgIHByaXZhdGUgX3RoZU5leHRDb2RlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZXhjbHVkZUNvZGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpeGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzSG9sZFdpbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9ob2xkV2luU2hvd2luZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90aW1lcjogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1heENvZGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhDb2RlID0gbWF4Q29kZTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMgPSBuZXcgRmlmb1F1ZXVlPG51bWJlcj4oKTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuZW5xdWV1ZShOdW1iZXJVdGlscy5yYW5kb20oMCwgbWF4Q29kZSkpO1xuICAgICAgICB0aGlzLl90aGVOZXh0Q29kZSA9IHRoaXMucmFuZG9tQ29kZTtcbiAgICAgICAgdGhpcy5faXNIb2xkV2luID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hvbGRXaW5TaG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsO1xuICAgIH1cbiAgICBnZXQgbWF4Q29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4Q29kZTtcbiAgICB9XG4gICAgZ2V0IHNwaW5TdGF0dXMoKTogV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5TdGF0dXM7XG4gICAgfVxuICAgIHNldCBzcGluU3RhdHVzKHZhbHVlOiBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdGhlTmV4dENvZGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZU5leHRDb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgbmV4dENvZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RoZU5leHRDb2RlID0gdGhpcy5yYW5kb21Db2RlO1xuICAgIH1cbiAgICBnZXQgcmFuZG9tQ29kZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgY29kZSA9IHRoaXMuX3JhbmRvbUNvZGVzLmRlcXVldWUoKTtcbiAgICAgICAgaWYgKHRoaXMuX3NwaW5TdGF0dXMgIT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9yYW5kb21Db2Rlcy5lbnF1ZXVlKE51bWJlclV0aWxzLnJhbmRvbSgwLCB0aGlzLl9tYXhDb2RlLCB0aGlzLl9leGNsdWRlQ29kZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBleGNsdWRlQ29kZXMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhjbHVkZUNvZGVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGV4Y2x1ZGVDb2Rlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fZXhjbHVkZUNvZGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fZXhjbHVkZUNvZGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9leGNsdWRlQ29kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZXhjbHVkZUNvZGVzLmZpbmQoKGMpID0+IGMgPT0gdGhpcy5fdGhlTmV4dENvZGUpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RoZU5leHRDb2RlID0gdGhpcy5yYW5kb21Db2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBmaXhlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkO1xuICAgIH1cbiAgICBzZXQgZml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZml4ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGlzSG9sZFdpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG9sZFdpbjtcbiAgICB9XG4gICAgc2V0IGlzSG9sZFdpbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0hvbGRXaW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhvbGRXaW5TaG93aW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faG9sZFdpblNob3dpbmc7XG4gICAgfVxuICAgIHNldCBob2xkV2luU2hvd2luZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9ob2xkV2luU2hvd2luZyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdGltZXIoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVyO1xuICAgIH1cbiAgICBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgcHVzaFN0b3BDb2RlKGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9yYW5kb21Db2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9yYW5kb21Db2Rlcy5lbnF1ZXVlKGNvZGUgKyBTeW1ib2xCb2FyZENvbnN0LkZJTkFMX0NPREVfT0ZGU0VUKTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuZW5xdWV1ZShOdW1iZXJVdGlscy5yYW5kb20oMCwgdGhpcy5fbWF4Q29kZSwgdGhpcy5fZXhjbHVkZUNvZGVzKSk7XG4gICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3RvcHBpbmc7XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fcmFuZG9tQ29kZXMuZW5xdWV1ZShOdW1iZXJVdGlscy5yYW5kb20oMCwgdGhpcy5tYXhDb2RlKSk7XG4gICAgICAgIHRoaXMuX3JhbmRvbUNvZGVzLmVucXVldWUoTnVtYmVyVXRpbHMucmFuZG9tKDAsIHRoaXMuX21heENvZGUsIHRoaXMuX2V4Y2x1ZGVDb2RlcykpO1xuICAgICAgICB0aGlzLm5leHRDb2RlKCk7XG4gICAgICAgIHRoaXMuX3RoZU5leHRDb2RlID0gdGhpcy5yYW5kb21Db2RlO1xuICAgICAgICB0aGlzLmlzSG9sZFdpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvbGRXaW5TaG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ob3JtYWw7XG4gICAgfVxufVxuIl19