
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/IntervalEachColumn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxJbnRlcnZhbEVhY2hDb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdJLDRCQUFZLFFBQWdCO1FBRnBCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFHMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUNELHNCQUFXLHdDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcscUNBQUs7YUFHaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUxELFVBQWlCLEtBQVU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJTCx5QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbEVhY2hDb2x1bW4ge1xuICAgIHByaXZhdGUgX3RpbWVyOiBudW1iZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2ludGVydmFsOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGltZXIodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRpbWVyKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lcjtcbiAgICB9XG59Il19