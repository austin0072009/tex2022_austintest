
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MgrNative.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZ3JOYXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7OztBQUVILElBQU0sYUFBYSxHQUFHLHNDQUFzQyxDQUFDO0FBQzdELElBQU0sU0FBUyxHQUFHLGlCQUFpQixDQUFDO0FBQ3BDO0lBQUE7SUFxREEsQ0FBQztJQW5EaUIscUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVM7SUFDRixpQ0FBYSxHQUFwQjtRQUNJLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzthQUNyRztpQkFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDekU7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSxpQ0FBYSxHQUFwQjtRQUNJLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO0lBQ0QsZ0NBQVksR0FBbkI7UUFDSSxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoQyxpR0FBaUc7YUFDcEc7aUJBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDdEU7U0FDSjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtJQUNELHdDQUFvQixHQUEzQjtRQUNJLElBQUksRUFBRSxHQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLGlHQUFpRzthQUNwRztpQkFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzthQUMzRTtTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxnQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQERlc2NyaXB0aW9uOlxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBBdXRvcjogc2luMjAyMVxuICogQERhdGU6IDIwMjAtMDQtMjcgMTE6MTg6NTRcbiAqIEBMYXN0RWRpdG9yczogc2luMjAyMVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wOS0wMiAxNTo0Njo1NFxuICovXG5cbmNvbnN0IEFORFJPSURfQVBJVFMgPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L1RTSmF2YUJyaWRnZVwiO1xuY29uc3QgSU9TX0FQSVRTID0gXCJUU09iamVjdENCcmlkZ2VcIjtcbmV4cG9ydCBjbGFzcyBNZ3JOYXRpdmUge1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U6IE1nck5hdGl2ZTtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IE1nck5hdGl2ZSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNZ3JOYXRpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyDojrflj5bljIXniYjmnKzlj7dcbiAgICBwdWJsaWMgZ2V0QXBwVmVyc2lvbigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdmVyc2lvbjogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKCFDQ19ERVYgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9BUElUUywgXCJnZXRBcHBWZXJzaW9uXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoSU9TX0FQSVRTLCBcImdldEFwcFZlcnNpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfVxuXG4gICAgcHVibGljIGdldERldmljZVVVSUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiMTExXCI7XG4gICAgfVxuXG4gICAgLy8g6I635Y+WR1BTXG4gICAgcHVibGljIGdldERldmljZUdQUygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZ3BzOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAoIUNDX0RFViAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgICAgICAvLyBncHMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKEFORFJPSURfQVBJVFMsIFwiZ2V0QXBwVmVyc2lvblwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgICAgIGdwcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoSU9TX0FQSVRTLCBcImdldEdQU0xvY2F0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0R1BTTG9jYXRpb24gPT09IFwiLCBncHMpO1xuICAgICAgICByZXR1cm4gZ3BzO1xuICAgIH1cblxuICAgIC8vIOiOt+WPlkdQU1xuICAgIHB1YmxpYyBnZXREZXZpY2VJUEFkZHJlc3NlcygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgaXA6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmICghQ0NfREVWICYmIGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgICAgIC8vIGdwcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoQU5EUk9JRF9BUElUUywgXCJnZXRBcHBWZXJzaW9uXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgaXAgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKElPU19BUElUUywgXCJnZXREZXZpY2VJcEFkZHJlc3Nlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImdldERldmljZUlwQWRkcmVzc2VzID09PSBcIiwgaXApO1xuICAgICAgICByZXR1cm4gaXA7XG4gICAgfVxufVxuIl19