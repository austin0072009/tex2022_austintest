"use strict";
cc._RF.push(module, '98d0eBRDQVBxrQ9hgzb4nXh', 'MgrNative');
// Script/MgrNative.ts

"use strict";
/*
 * @Description:
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-27 11:18:54
 * @LastEditors: sin2021
 * @LastEditTime: 2020-09-02 15:46:54
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MgrNative = void 0;
var ANDROID_APITS = "org/cocos2dx/javascript/TSJavaBridge";
var IOS_APITS = "TSObjectCBridge";
var MgrNative = /** @class */ (function () {
    function MgrNative() {
    }
    MgrNative.getInstance = function () {
        if (!this.instance) {
            this.instance = new MgrNative();
        }
        return this.instance;
    };
    // 获取包版本号
    MgrNative.prototype.getAppVersion = function () {
        var version = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                version = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                version = jsb.reflection.callStaticMethod(IOS_APITS, "getAppVersion");
            }
        }
        return version;
    };
    MgrNative.prototype.getDeviceUUID = function () {
        return "111";
    };
    // 获取GPS
    MgrNative.prototype.getDeviceGPS = function () {
        var gps = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                // gps = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                gps = jsb.reflection.callStaticMethod(IOS_APITS, "getGPSLocation");
            }
        }
        console.log("getGPSLocation === ", gps);
        return gps;
    };
    // 获取GPS
    MgrNative.prototype.getDeviceIPAddresses = function () {
        var ip = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                // gps = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                ip = jsb.reflection.callStaticMethod(IOS_APITS, "getDeviceIpAddresses");
            }
        }
        console.log("getDeviceIpAddresses === ", ip);
        return ip;
    };
    return MgrNative;
}());
exports.MgrNative = MgrNative;

cc._RF.pop();