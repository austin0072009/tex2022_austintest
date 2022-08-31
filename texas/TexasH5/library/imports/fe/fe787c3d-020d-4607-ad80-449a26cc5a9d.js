"use strict";
cc._RF.push(module, 'fe787w9Ag1GB62ARJomzFqd', 'FifoQueue');
// Script/modules/@mogafa/slots/lib/FifoQueue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FifoQueue = /** @class */ (function () {
    function FifoQueue(queue) {
        this._queue = queue || [];
    }
    FifoQueue.prototype.enqueue = function (item) {
        this._queue.push(item);
    };
    FifoQueue.prototype.dequeue = function () {
        return this._queue.shift();
    };
    FifoQueue.prototype.clear = function () {
        this._queue = [];
    };
    Object.defineProperty(FifoQueue.prototype, "count", {
        get: function () {
            return this._queue.length;
        },
        enumerable: false,
        configurable: true
    });
    return FifoQueue;
}());
exports.default = FifoQueue;

cc._RF.pop();