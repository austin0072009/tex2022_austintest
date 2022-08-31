
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/StatusbarView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8815e+ul3FIsJ6F3hRWOvX/', 'StatusbarView');
// Script/BaseFrame/StatusbarView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("./ViewBase");
/**状态栏信息 */
var StatusbarView = /** @class */ (function (_super) {
    __extends(StatusbarView, _super);
    function StatusbarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_time = null;
        /**电量 */
        _this.ui_battery = null;
        /**信号显示 */
        _this.signalController = null;
        /**强度 */
        _this.strengthController = null;
        return _this;
    }
    Object.defineProperty(StatusbarView.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatusbarView.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatusbarView.prototype, "componentName", {
        get: function () {
            return "statusbar";
        },
        enumerable: false,
        configurable: true
    });
    StatusbarView.prototype.createChildComponents = function () {
        var _this = this;
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.sortingOrder = 9999;
        this.signalController = this.fguiComponent.getController("signal");
        this.strengthController = this.fguiComponent.getController("strength");
        this.schedule(function () {
            _this.callNativeMethod();
            var date = new Date();
            var hous = date.getHours();
            var minutes = date.getMinutes();
            _this.ui_time.text = hous + ":" + (minutes < 10 ? "0" + minutes : minutes);
        }, 1);
    };
    StatusbarView.prototype.callNativeMethod = function () {
        var battery = "";
        var net = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取电池电量信息 */
            var method = "getBatteryStatusInfo";
            var methodSignature = "()Ljava/lang/String;";
            battery = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method, methodSignature);
            /**获取网络状态 */
            var method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            // UIDeviceBatteryStateUnknown,
            // UIDeviceBatteryStateUnplugged,   // on battery, discharging
            // UIDeviceBatteryStateCharging,    // plugged in, less than 100%
            // UIDeviceBatteryStateFull,        // plugged in, at 100%
            // 10_100_2  当前电量_总电量_电池状态
            battery = jsb.reflection.callStaticMethod("TSObjectCBridge", "GetBatteryLv");
            // 返回值 示例：1_1
            // 第一个值 网络类型 -1: 没有网络    1: 移动数据    2: WIFI
            // 第二个值 网络信号 0: None  1:poor  2:moderate  3:good  4:great
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        if (battery) {
            var batteryArr = battery.split("_");
            this.ui_battery.value = +batteryArr[0];
        }
        if (net) {
            var netArr = net.split("_");
            if (netArr[0] == "1") { //移动网络
                this.signalController.setSelectedIndex(0);
                this.strengthController.setSelectedIndex(4);
            }
            else if (netArr[0] == "2") { //wifi
                this.signalController.setSelectedIndex(1);
                this.strengthController.setSelectedIndex(+netArr[1]);
            }
        }
    };
    StatusbarView.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    StatusbarView.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    StatusbarView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    return StatusbarView;
}(ViewBase_1.default));
exports.default = StatusbarView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFN0YXR1c2JhclZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRWxDLFdBQVc7QUFDWDtJQUEyQyxpQ0FBUTtJQUFuRDtRQUFBLHFFQXFGQztRQTNFVyxhQUFPLEdBQW9CLElBQUksQ0FBQztRQUN4QyxRQUFRO1FBQ0EsZ0JBQVUsR0FBc0IsSUFBSSxDQUFDO1FBQzdDLFVBQVU7UUFDRixzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ2pELFFBQVE7UUFDQSx3QkFBa0IsR0FBb0IsSUFBSSxDQUFDOztJQXFFdkQsQ0FBQztJQXBGRyxzQkFBYyw4Q0FBbUI7YUFBakM7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHNDQUFXO2FBQXpCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx3Q0FBYTthQUEzQjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBU0QsNkNBQXFCLEdBQXJCO1FBQUEsaUJBWUM7UUFYRyxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQU0sSUFBSSxVQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzVFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbkQsY0FBYztZQUNkLElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDO1lBQ3BDLElBQUksZUFBZSxHQUFHLHNCQUFzQixDQUFDO1lBQzdDLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHNDQUFzQyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUUzRyxZQUFZO1lBQ1osSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7WUFDL0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsc0NBQXNDLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzNHO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUN0RCwrQkFBK0I7WUFDL0IsOERBQThEO1lBQzlELGlFQUFpRTtZQUNqRSwwREFBMEQ7WUFDMUQsMEJBQTBCO1lBQzFCLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzdFLGFBQWE7WUFDYiwyQ0FBMkM7WUFDM0MseURBQXlEO1lBQ3pELEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDOUU7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTTtnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTTtnQkFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RDtTQUNKO0lBQ0wsQ0FBQztJQUlELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsaUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxvQkFBQztBQUFELENBckZBLEFBcUZDLENBckYwQyxrQkFBUSxHQXFGbEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4vVmlld0Jhc2VcIjtcclxuXHJcbi8qKueKtuaAgeagj+S/oeaBryAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXNiYXJWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiR2FtZUNvbW1vblwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkNvbW1vblwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwic3RhdHVzYmFyXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVpX3RpbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirnlLXph48gKi9cclxuICAgIHByaXZhdGUgdWlfYmF0dGVyeTogZmd1aS5HUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgLyoq5L+h5Y+35pi+56S6ICovXHJcbiAgICBwcml2YXRlIHNpZ25hbENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAvKirlvLrluqYgKi9cclxuICAgIHByaXZhdGUgc3RyZW5ndGhDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc29ydGluZ09yZGVyID0gOTk5OTtcclxuICAgICAgICB0aGlzLnNpZ25hbENvbnRyb2xsZXIgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcInNpZ25hbFwiKTtcclxuICAgICAgICB0aGlzLnN0cmVuZ3RoQ29udHJvbGxlciA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwic3RyZW5ndGhcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbE5hdGl2ZU1ldGhvZCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBob3VzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICB0aGlzLnVpX3RpbWUudGV4dCA9IGAke2hvdXN9OiR7bWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlc31gO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxsTmF0aXZlTWV0aG9kKCkge1xyXG4gICAgICAgIGxldCBiYXR0ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBuZXQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgLyoq6I635Y+W55S15rGg55S16YeP5L+h5oGvICovXHJcbiAgICAgICAgICAgIGxldCBtZXRob2QgPSBcImdldEJhdHRlcnlTdGF0dXNJbmZvXCI7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2RTaWduYXR1cmUgPSBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCI7XHJcbiAgICAgICAgICAgIGJhdHRlcnkgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvVFNKYXZhQnJpZGdlXCIsIG1ldGhvZCwgbWV0aG9kU2lnbmF0dXJlKTtcclxuXHJcbiAgICAgICAgICAgIC8qKuiOt+WPlue9kee7nOeKtuaAgSAqL1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kMSA9IFwiZ2V0TmV0V29ya0luZm9cIjtcclxuICAgICAgICAgICAgbmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L1RTSmF2YUJyaWRnZVwiLCBtZXRob2QxLCBtZXRob2RTaWduYXR1cmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIC8vIFVJRGV2aWNlQmF0dGVyeVN0YXRlVW5rbm93bixcclxuICAgICAgICAgICAgLy8gVUlEZXZpY2VCYXR0ZXJ5U3RhdGVVbnBsdWdnZWQsICAgLy8gb24gYmF0dGVyeSwgZGlzY2hhcmdpbmdcclxuICAgICAgICAgICAgLy8gVUlEZXZpY2VCYXR0ZXJ5U3RhdGVDaGFyZ2luZywgICAgLy8gcGx1Z2dlZCBpbiwgbGVzcyB0aGFuIDEwMCVcclxuICAgICAgICAgICAgLy8gVUlEZXZpY2VCYXR0ZXJ5U3RhdGVGdWxsLCAgICAgICAgLy8gcGx1Z2dlZCBpbiwgYXQgMTAwJVxyXG4gICAgICAgICAgICAvLyAxMF8xMDBfMiAg5b2T5YmN55S16YePX+aAu+eUtemHj1/nlLXmsaDnirbmgIFcclxuICAgICAgICAgICAgYmF0dGVyeSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJUU09iamVjdENCcmlkZ2VcIiwgXCJHZXRCYXR0ZXJ5THZcIik7XHJcbiAgICAgICAgICAgIC8vIOi/lOWbnuWAvCDnpLrkvovvvJoxXzFcclxuICAgICAgICAgICAgLy8g56ys5LiA5Liq5YC8IOe9kee7nOexu+WeiyAtMTog5rKh5pyJ572R57ucICAgIDE6IOenu+WKqOaVsOaNriAgICAyOiBXSUZJXHJcbiAgICAgICAgICAgIC8vIOesrOS6jOS4quWAvCDnvZHnu5zkv6Hlj7cgMDogTm9uZSAgMTpwb29yICAyOm1vZGVyYXRlICAzOmdvb2QgIDQ6Z3JlYXRcclxuICAgICAgICAgICAgbmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlRTT2JqZWN0Q0JyaWRnZVwiLCBcImdldE5ldHdvcmtUeXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmF0dGVyeSkge1xyXG4gICAgICAgICAgICBsZXQgYmF0dGVyeUFyciA9IGJhdHRlcnkuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpX2JhdHRlcnkudmFsdWUgPSArYmF0dGVyeUFyclswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXQpIHtcclxuICAgICAgICAgICAgbGV0IG5ldEFyciA9IG5ldC5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgIGlmIChuZXRBcnJbMF0gPT0gXCIxXCIpIHsgLy/np7vliqjnvZHnu5xcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJlbmd0aENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCg0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXRBcnJbMF0gPT0gXCIyXCIpIHsgLy93aWZpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25hbENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZW5ndGhDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoK25ldEFyclsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG59Il19