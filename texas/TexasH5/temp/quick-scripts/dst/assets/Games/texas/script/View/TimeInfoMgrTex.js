
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TimeInfoMgrTex.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a630cvPgXJOvKDvEMZvhF2g', 'TimeInfoMgrTex');
// Games/texas/script/View/TimeInfoMgrTex.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeInfoMgrTex = /** @class */ (function () {
    function TimeInfoMgrTex() {
        this.timer = [];
    }
    TimeInfoMgrTex_1 = TimeInfoMgrTex;
    Object.defineProperty(TimeInfoMgrTex, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new TimeInfoMgrTex_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    TimeInfoMgrTex.prototype.AddTimer = function (time, action) {
        var fun = null;
        var outtime = setTimeout(fun = function () {
            if (action != null) {
                action();
            }
        }, time * 1000);
        this.timer.push(outtime);
        return fun;
    };
    TimeInfoMgrTex.prototype.addTimerNoCallback = function (timer) {
        this.timer.push(timer);
    };
    TimeInfoMgrTex.prototype.removeTimer = function () {
        console.log("removeTimer");
        for (var index = 0; index < this.timer.length; index++) {
            var outtime = this.timer[index];
            console.log("removeTimer : ", outtime);
            if (outtime) {
                clearTimeout(outtime);
            }
        }
        this.timer = [];
    };
    var TimeInfoMgrTex_1;
    TimeInfoMgrTex = TimeInfoMgrTex_1 = __decorate([
        ccclass
    ], TimeInfoMgrTex);
    return TimeInfoMgrTex;
}());
exports.default = TimeInfoMgrTex;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRpbWVJbmZvTWdyVGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVZLFVBQUssR0FBVSxFQUFFLENBQUM7SUFtQzlCLENBQUM7dUJBckNvQixjQUFjO0lBRy9CLHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFjLEVBQUUsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLE1BQWdCO1FBQzFDLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQztRQUN6QixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHO1lBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEIsTUFBTSxFQUFFLENBQUM7YUFDWjtRQUNMLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLEtBQVU7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXZDLElBQUksT0FBTyxFQUFFO2dCQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFwQ2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxQ2xDO0lBQUQscUJBQUM7Q0FyQ0QsQUFxQ0MsSUFBQTtrQkFyQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUluZm9NZ3JUZXgge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGltZUluZm9NZ3JUZXg7XG4gICAgcHJpdmF0ZSB0aW1lcjogYW55W10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFRpbWVJbmZvTWdyVGV4IHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFRpbWVJbmZvTWdyVGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRUaW1lcih0aW1lOiBudW1iZXIsIGFjdGlvbjogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgICAgIHZhciBmdW46IEZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IG91dHRpbWUgPSBzZXRUaW1lb3V0KGZ1biA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lICogMTAwMCk7XG4gICAgICAgIHRoaXMudGltZXIucHVzaChvdXR0aW1lKTtcbiAgICAgICAgcmV0dXJuIGZ1bjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVyOiBhbnkpIHtcbiAgICAgICAgdGhpcy50aW1lci5wdXNoKHRpbWVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlVGltZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlVGltZXJcIik7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRpbWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG91dHRpbWUgPSB0aGlzLnRpbWVyW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlVGltZXIgOiBcIiwgb3V0dGltZSk7XG5cbiAgICAgICAgICAgIGlmIChvdXR0aW1lKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG91dHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXIgPSBbXTtcbiAgICB9XG59XG4iXX0=