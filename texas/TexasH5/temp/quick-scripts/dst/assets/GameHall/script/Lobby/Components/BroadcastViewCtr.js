
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Components/BroadcastViewCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ec89qdry5GAZmtfEIhZCqK', 'BroadcastViewCtr');
// GameHall/script/Lobby/Components/BroadcastViewCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastViewCtr = void 0;
var BroadcastViewCtr = /** @class */ (function () {
    function BroadcastViewCtr() {
    }
    Object.defineProperty(BroadcastViewCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new BroadcastViewCtr();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    BroadcastViewCtr.prototype.addMessage = function (str, delayTime) {
        if (delayTime === void 0) { delayTime = 0; }
        this.view && this.view.addMessage(str, delayTime);
    };
    return BroadcastViewCtr;
}());
exports.BroadcastViewCtr = BroadcastViewCtr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbXBvbmVudHNcXEJyb2FkY2FzdFZpZXdDdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQWNBLENBQUM7SUFYRyxzQkFBa0IsNEJBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzthQUMxQztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVNLHFDQUFVLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxTQUFhO1FBQWIsMEJBQUEsRUFBQSxhQUFhO1FBQ3hDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTCx1QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvYWRjYXN0VmlldyB9IGZyb20gXCIuL0Jyb2FkY2FzdFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcm9hZGNhc3RWaWV3Q3RyIHtcclxuICAgIHB1YmxpYyB2aWV3OiBCcm9hZGNhc3RWaWV3O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ZpZXdDdHI6IEJyb2FkY2FzdFZpZXdDdHI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBCcm9hZGNhc3RWaWV3Q3RyIHtcclxuICAgICAgICBpZiAodGhpcy5fdmlld0N0ciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDdHIgPSBuZXcgQnJvYWRjYXN0Vmlld0N0cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0N0cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWVzc2FnZShzdHI6IHN0cmluZywgZGVsYXlUaW1lID0gMCkge1xyXG4gICAgICAgIHRoaXMudmlldyAmJiB0aGlzLnZpZXcuYWRkTWVzc2FnZShzdHIsIGRlbGF5VGltZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==