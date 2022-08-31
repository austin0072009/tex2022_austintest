
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/FifoQueue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxGaWZvUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJLG1CQUFZLEtBQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsSUFBTztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFJLDRCQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBQ0osZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlmb1F1ZXVlPFQ+e1xuICAgIF9xdWV1ZTogVFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKHF1ZXVlPzogVFtdKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IHF1ZXVlIHx8IFtdO1xuICAgfVxuIFxuICAgZW5xdWV1ZShpdGVtOiBUKSB7XG4gICAgIHRoaXMuX3F1ZXVlLnB1c2goaXRlbSk7XG4gICB9XG4gXG4gICBkZXF1ZXVlKCk6IFQge1xuICAgICByZXR1cm4gdGhpcy5fcXVldWUuc2hpZnQoKTtcbiAgIH1cbiBcbiAgIGNsZWFyKCkge1xuICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgfVxuIFxuICAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XG4gICB9XG59Il19