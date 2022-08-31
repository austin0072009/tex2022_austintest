"use strict";
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