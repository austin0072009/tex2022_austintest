
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/config/AppConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2751cQQJoVHurVpB9hoEv7n', 'AppConfig');
// Script/config/AppConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
/*
 * @Author: sin2021
 * @Date: 2020-06-16 18:25:49
 * @LastEditors: sin2021
 * @LastEditTime: 2020-06-30 16:20:53
 * @Version: CocosCreator V2.2.2
 * @Description:
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.httpConfig = {
        server: "http://192.168.2.16",
    };
    AppConfig.webSocketConfig = {
        server: "192.168.2.16",
        port: 10002,
    };
    AppConfig.homeUrl = "http://www.xhhfs.com/serverlist.json";
    AppConfig.version = "1.2.1";
    return AppConfig;
}());
exports.AppConfig = AppConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb25maWdcXEFwcENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0g7SUFBQTtJQVVBLENBQUM7SUFUVSxvQkFBVSxHQUFHO1FBQ2hCLE1BQU0sRUFBRSxxQkFBcUI7S0FDaEMsQ0FBQztJQUNLLHlCQUFlLEdBQUc7UUFDckIsTUFBTSxFQUFFLGNBQWM7UUFDdEIsSUFBSSxFQUFFLEtBQUs7S0FDZCxDQUFDO0lBQ0ssaUJBQU8sR0FBVyxzQ0FBc0MsQ0FBQztJQUN6RCxpQkFBTyxHQUFXLE9BQU8sQ0FBQztJQUNyQyxnQkFBQztDQVZELEFBVUMsSUFBQTtBQVZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHNpbjIwMjFcbiAqIEBEYXRlOiAyMDIwLTA2LTE2IDE4OjI1OjQ5XG4gKiBATGFzdEVkaXRvcnM6IHNpbjIwMjFcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMzAgMTY6MjA6NTNcbiAqIEBWZXJzaW9uOiBDb2Nvc0NyZWF0b3IgVjIuMi4yXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBDb25maWcge1xuICAgIHN0YXRpYyBodHRwQ29uZmlnID0ge1xuICAgICAgICBzZXJ2ZXI6IFwiaHR0cDovLzE5Mi4xNjguMi4xNlwiLFxuICAgIH07XG4gICAgc3RhdGljIHdlYlNvY2tldENvbmZpZyA9IHtcbiAgICAgICAgc2VydmVyOiBcIjE5Mi4xNjguMi4xNlwiLFxuICAgICAgICBwb3J0OiAxMDAwMixcbiAgICB9O1xuICAgIHN0YXRpYyBob21lVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cueGhoZnMuY29tL3NlcnZlcmxpc3QuanNvblwiO1xuICAgIHN0YXRpYyB2ZXJzaW9uOiBzdHJpbmcgPSBcIjEuMi4xXCI7XG59XG4iXX0=