"use strict";
cc._RF.push(module, '9f4cdQvUwBHtIF7bMLsMFyD', 'IntervalEachColumn');
// Script/modules/@mogafa/slots/lib/IntervalEachColumn.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntervalEachColumn = /** @class */ (function () {
    function IntervalEachColumn(interval) {
        this._timer = null;
        this._interval = interval;
    }
    Object.defineProperty(IntervalEachColumn.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalEachColumn.prototype, "timer", {
        get: function () {
            return this._timer;
        },
        set: function (value) {
            this._timer = value;
        },
        enumerable: false,
        configurable: true
    });
    return IntervalEachColumn;
}());
exports.default = IntervalEachColumn;

cc._RF.pop();