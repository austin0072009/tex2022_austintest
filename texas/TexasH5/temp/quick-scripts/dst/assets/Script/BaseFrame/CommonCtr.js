
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/CommonCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58a3fXOcAVFeJy8sF+PHa4J', 'CommonCtr');
// Script/BaseFrame/CommonCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModel = exports.CommonCtr = void 0;
var CommonCtr = /** @class */ (function () {
    function CommonCtr() {
    }
    Object.defineProperty(CommonCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new CommonCtr();
                //初始注册这个Ctrl里面的服务器推送方法 
                this._viewCtr.RegistNotify();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCtr.prototype, "Model", {
        get: function () {
            if (this._model == null) {
                this._model = new CommonModel();
                this._model.Init();
            }
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    CommonCtr.prototype.RegistNotify = function () {
    };
    Object.defineProperty(CommonCtr.prototype, "IsDestory", {
        /**判断此View是否已经释放  */
        get: function () {
            if (this.view == null || this.view._isDestory)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    CommonCtr.prototype.ShowTip = function (msg) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory)
            return;
        //UI还同有实例化之前 就调用了
        this.view.ShowTip(msg);
    };
    CommonCtr.prototype.ShowTipLabelMove = function (msg, move) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    };
    /**文字上飘 */
    CommonCtr.prototype.ShowTipLabel = function (msg) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    };
    CommonCtr.prototype.ShowTipCallback = function (mes, funok, funclose) {
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTip(mes, funok, funclose);
    };
    CommonCtr.prototype.ShowLoad_Circle = function (_show) {
        console.log(" show circle and no input .");
    };
    return CommonCtr;
}());
exports.CommonCtr = CommonCtr;
var CommonModel = /** @class */ (function () {
    function CommonModel() {
    }
    CommonModel.prototype.Init = function () { };
    CommonModel.prototype.setServerList = function (para1, p2) {
        console.error("setServerList undeal.");
    };
    return CommonModel;
}());
exports.CommonModel = CommonModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXENvbW1vbkN0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBbUVBLENBQUM7SUEvREcsc0JBQWtCLHFCQUFRO2FBQTFCO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUNoQyx1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw0QkFBSzthQUFoQjtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVNLGdDQUFZLEdBQW5CO0lBQ0EsQ0FBQztJQUdELHNCQUFXLGdDQUFTO1FBRHBCLG9CQUFvQjthQUNwQjtZQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBQ00sMkJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ3RELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0NBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxJQUFhO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxpQkFBaUI7WUFDbkYsT0FBTyxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1lBQzNGLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO0lBQ0gsZ0NBQVksR0FBbkIsVUFBb0IsR0FBVztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsaUJBQWlCO1lBQ25GLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQztZQUMzRixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sbUNBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEtBQWdCLEVBQUUsUUFBbUI7UUFDckUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFLGlCQUFpQjtZQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDLDJFQUEyRSxDQUFDLENBQUM7WUFDM0YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sbUNBQWUsR0FBdEIsVUFBdUIsS0FBYztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsSUFBQTtBQW5FWSw4QkFBUztBQXFFdEI7SUFBQTtJQVFBLENBQUM7SUFMVSwwQkFBSSxHQUFYLGNBQXNCLENBQUM7SUFDaEIsbUNBQWEsR0FBcEIsVUFBcUIsS0FBVSxFQUFFLEVBQU87UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTCxrQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgQ29tbW9uVmlldyBmcm9tIFwiLi9Db21tb25WaWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb25DdHIge1xuICAgIHB1YmxpYyB2aWV3OiBDb21tb25WaWV3XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ZpZXdDdHI6IENvbW1vbkN0cjtcbiAgICBwcml2YXRlIF9tb2RlbDogQ29tbW9uTW9kZWw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQ29tbW9uQ3RyIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdDdHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdmlld0N0ciA9IG5ldyBDb21tb25DdHIoKTtcbiAgICAgICAgICAgIC8v5Yid5aeL5rOo5YaM6L+Z5LiqQ3RybOmHjOmdoueahOacjeWKoeWZqOaOqOmAgeaWueazlSBcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDdHIuUmVnaXN0Tm90aWZ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdDdHI7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0IE1vZGVsKCk6IENvbW1vbk1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbmV3IENvbW1vbk1vZGVsKCk7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWdpc3ROb3RpZnkoKSB7XG4gICAgfVxuXG4gICAgLyoq5Yik5pat5q2kVmlld+aYr+WQpuW3sue7j+mHiuaUviAgKi9cbiAgICBwdWJsaWMgZ2V0IElzRGVzdG9yeSgpOiBCb29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd1RpcChtc2c6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlwiICsgbXNnKTtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIC8vVUnov5jlkIzmnInlrp7kvovljJbkuYvliY0g5bCx6LCD55So5LqGXG4gICAgICAgIHRoaXMudmlldy5TaG93VGlwKG1zZyk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dUaXBMYWJlbE1vdmUobXNnOiBzdHJpbmcsIG1vdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJcIiArIG1zZyk7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSB8fCB0aGlzLnZpZXcgPT0gbnVsbCkgeyAvL1VJ6L+Y5ZCM5pyJ5a6e5L6L5YyW5LmL5YmNIOWwseiwg+eUqOS6hlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi4uLnVpX3NpbmdsZV9tVGlwUGFuZWxMYWJlbCBpcyBudWxsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi5TaG93U2luZ2xlTGFiZWxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LlNob3dUaXBMYWJlbChtc2cpO1xuICAgIH1cblxuICAgIC8qKuaWh+Wtl+S4iumjmCAqL1xuICAgIHB1YmxpYyBTaG93VGlwTGFiZWwobXNnOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJcIiArIG1zZyk7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSB8fCB0aGlzLnZpZXcgPT0gbnVsbCkgeyAvL1VJ6L+Y5ZCM5pyJ5a6e5L6L5YyW5LmL5YmNIOWwseiwg+eUqOS6hlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi4uLnVpX3NpbmdsZV9tVGlwUGFuZWxMYWJlbCBpcyBudWxsIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi5TaG93U2luZ2xlTGFiZWxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LlNob3dUaXBMYWJlbChtc2cpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93VGlwQ2FsbGJhY2sobWVzOiBzdHJpbmcsIGZ1bm9rPzogRnVuY3Rpb24sIGZ1bmNsb3NlPzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5IHx8IHRoaXMudmlldyA9PSBudWxsKSB7IC8vVUnov5jlkIzmnInlrp7kvovljJbkuYvliY0g5bCx6LCD55So5LqGXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLi4udWlfc2luZ2xlX21UaXBQYW5lbExhYmVsIGlzIG51bGwgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlNob3dTaW5nbGVMYWJlbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcuU2hvd1RpcChtZXMsIGZ1bm9rLCBmdW5jbG9zZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dMb2FkX0NpcmNsZShfc2hvdzogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBzaG93IGNpcmNsZSBhbmQgbm8gaW5wdXQgLlwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tb25Nb2RlbCB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgX2N1cklQXG4gICAgcHVibGljIEluaXQoKTogdm9pZCB7IH1cbiAgICBwdWJsaWMgc2V0U2VydmVyTGlzdChwYXJhMTogYW55LCBwMjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzZXRTZXJ2ZXJMaXN0IHVuZGVhbC5cIik7XG4gICAgfVxuXG59Il19