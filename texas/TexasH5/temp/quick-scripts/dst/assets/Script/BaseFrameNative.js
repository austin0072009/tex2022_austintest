
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrameNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da9009fvvZB0b7MePGuWC93', 'BaseFrameNative');
// Script/BaseFrameNative.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFrameNative = void 0;
var BaseFrameNative = /** @class */ (function () {
    function BaseFrameNative() {
    }
    BaseFrameNative.isNeedUpdate = false; // 这个值很重要，发包和热更新的时候一定改为true
    BaseFrameNative.VERSION = "1.0.0"; //游戏版本号
    //serverList
    BaseFrameNative.defaultServerList = {};
    BaseFrameNative.serverList = {};
    BaseFrameNative.isOpenUpdate = true;
    BaseFrameNative.serverlistItem = null;
    BaseFrameNative.serverlistID = "201";
    // 是否重新打开APP
    BaseFrameNative.isOpenApp = false;
    // 是否在大厅中
    BaseFrameNative.isInHall = false;
    // 是否和服务器连接中
    BaseFrameNative.isConnect = false;
    // broadnotice 跑马灯消息
    BaseFrameNative.broadnotice = [];
    // 当前运行的游戏场景类
    BaseFrameNative.nowGameView = null;
    return BaseFrameNative;
}());
exports.BaseFrameNative = BaseFrameNative;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVOYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW1CQSxDQUFDO0lBbEJVLDRCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsMkJBQTJCO0lBQzFELHVCQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsT0FBTztJQUNqQyxZQUFZO0lBQ0wsaUNBQWlCLEdBQVEsRUFBRSxDQUFDO0lBQzVCLDBCQUFVLEdBQVEsRUFBRSxDQUFDO0lBQ3JCLDRCQUFZLEdBQVksSUFBSSxDQUFDO0lBQzdCLDhCQUFjLEdBQVEsSUFBSSxDQUFDO0lBQzNCLDRCQUFZLEdBQVcsS0FBSyxDQUFDO0lBQ3BDLFlBQVk7SUFDTCx5QkFBUyxHQUFZLEtBQUssQ0FBQztJQUNsQyxTQUFTO0lBQ0Ysd0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDakMsWUFBWTtJQUNMLHlCQUFTLEdBQVksS0FBSyxDQUFDO0lBQ2xDLG9CQUFvQjtJQUNiLDJCQUFXLEdBQVUsRUFBRSxDQUFDO0lBQy9CLGFBQWE7SUFDTiwyQkFBVyxHQUFRLElBQUksQ0FBQztJQUNuQyxzQkFBQztDQW5CRCxBQW1CQyxJQUFBO0FBbkJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VGcmFtZU5hdGl2ZSB7XG4gICAgc3RhdGljIGlzTmVlZFVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlOyAvLyDov5nkuKrlgLzlvojph43opoHvvIzlj5HljIXlkozng63mm7TmlrDnmoTml7blgJnkuIDlrprmlLnkuLp0cnVlXG4gICAgc3RhdGljIFZFUlNJT04gPSBcIjEuMC4wXCI7IC8v5ri45oiP54mI5pys5Y+3XG4gICAgLy9zZXJ2ZXJMaXN0XG4gICAgc3RhdGljIGRlZmF1bHRTZXJ2ZXJMaXN0OiBhbnkgPSB7fTtcbiAgICBzdGF0aWMgc2VydmVyTGlzdDogYW55ID0ge307XG4gICAgc3RhdGljIGlzT3BlblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgc3RhdGljIHNlcnZlcmxpc3RJdGVtOiBhbnkgPSBudWxsO1xuICAgIHN0YXRpYyBzZXJ2ZXJsaXN0SUQ6IHN0cmluZyA9IFwiMjAxXCI7XG4gICAgLy8g5piv5ZCm6YeN5paw5omT5byAQVBQXG4gICAgc3RhdGljIGlzT3BlbkFwcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIOaYr+WQpuWcqOWkp+WOheS4rVxuICAgIHN0YXRpYyBpc0luSGFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIOaYr+WQpuWSjOacjeWKoeWZqOi/nuaOpeS4rVxuICAgIHN0YXRpYyBpc0Nvbm5lY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBicm9hZG5vdGljZSDot5Hpqaznga/mtojmga9cbiAgICBzdGF0aWMgYnJvYWRub3RpY2U6IGFueVtdID0gW107XG4gICAgLy8g5b2T5YmN6L+Q6KGM55qE5ri45oiP5Zy65pmv57G7XG4gICAgc3RhdGljIG5vd0dhbWVWaWV3OiBhbnkgPSBudWxsO1xufSJdfQ==