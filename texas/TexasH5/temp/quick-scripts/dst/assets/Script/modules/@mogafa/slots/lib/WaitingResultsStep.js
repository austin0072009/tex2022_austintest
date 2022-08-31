
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/WaitingResultsStep.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92702PFqVFA7biFLc+b5mz+', 'WaitingResultsStep');
// Script/modules/@mogafa/slots/lib/WaitingResultsStep.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WaitingResultsStep = /** @class */ (function () {
    function WaitingResultsStep(status, step) {
        this._status = status;
        this._step = step;
    }
    Object.defineProperty(WaitingResultsStep.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingResultsStep.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: false,
        configurable: true
    });
    return WaitingResultsStep;
}());
exports.default = WaitingResultsStep;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxXYWl0aW5nUmVzdWx0c1N0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJLDRCQUFZLE1BQWMsRUFBRSxJQUFZO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxzQkFBVyxzQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLG9DQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQVk7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFJTCx5QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0aW5nUmVzdWx0c1N0ZXAge1xuICAgIHByaXZhdGUgX3N0YXR1czogbnVtYmVyO1xuICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXM6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3RhdHVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdGVwKHZhbHVlOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgICB9XG59Il19