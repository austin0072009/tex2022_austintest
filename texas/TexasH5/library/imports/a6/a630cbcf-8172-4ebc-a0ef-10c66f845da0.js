"use strict";
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