"use strict";
cc._RF.push(module, '59f35Qa8oZH+r9qsdxGVnYi', 'Queue');
// Script/BaseFrame/Queue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        this.elements = new Array();
        this._size = capacity;
    }
    Queue.prototype.push = function (o) {
        if (o == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this._size != undefined && !isNaN(this._size)) {
            if (this.elements.length == this._size) {
                this.pop();
            }
        }
        this.elements.unshift(o);
        return true;
    };
    Queue.prototype.pop = function () {
        return this.elements.pop();
    };
    Queue.prototype.size = function () {
        return this.elements.length;
    };
    Queue.prototype.remove = function (value) {
        this.elements = this.elements.filter(function (item) { return item !== value; });
    };
    Queue.prototype.empty = function () {
        return this.size() == 0;
    };
    Queue.prototype.clear = function () {
        delete this.elements;
        this.elements = new Array();
    };
    return Queue;
}());
exports.Queue = Queue;

cc._RF.pop();