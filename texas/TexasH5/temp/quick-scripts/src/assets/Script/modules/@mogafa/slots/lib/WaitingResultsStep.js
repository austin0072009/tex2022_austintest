"use strict";
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