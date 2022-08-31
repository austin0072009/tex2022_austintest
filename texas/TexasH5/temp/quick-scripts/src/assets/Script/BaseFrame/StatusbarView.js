"use strict";
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