
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Managers/NotificationName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4d891S+V1BdoiRxAsjoBpv', 'NotificationName');
// Script/Common/Managers/NotificationName.ts

"use strict";
/*
 * @Description: 全局事件枚举
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-03-31 10:27:35
 * @LastEditors: sin2021
 * @LastEditTime: 2020-05-09 13:30:09
 */
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationName = /** @class */ (function () {
    function NotificationName() {
    }
    NotificationName.AppUpdate = cc.Enum({
        APP_UPDATE_FINISHED: "app-update-finished",
        APP_UPDATE_SUCCESS: "app-Update-success",
    });
    NotificationName.AppEnterScene = cc.Enum({
        APP_ENTER_START: "app-enter-start",
    });
    NotificationName.NetWork_Event = cc.Enum({
        SOCKET_CONNECT_SUC_EVENT: "socket_connect_suc_event",
        SOcKET_TEST_FINISHED_EVENT: "socket_test_finished_event"
    });
    NotificationName.DATA_ROOM_ENTER = cc.Enum({
        DATA_ENTER: "dataOver",
    });
    return NotificationName;
}());
exports.default = NotificationName;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXE1hbmFnZXJzXFxOb3RpZmljYXRpb25OYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOztBQUVIO0lBQUE7SUFvQkEsQ0FBQztJQW5CUywwQkFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEIsbUJBQW1CLEVBQUUscUJBQXFCO1FBQzFDLGtCQUFrQixFQUFFLG9CQUFvQjtLQUMxQyxDQUFDLENBQUM7SUFFSSw4QkFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDNUIsZUFBZSxFQUFFLGlCQUFpQjtLQUNwQyxDQUFDLENBQUM7SUFFSSw4QkFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBRXhCO1FBQ0csd0JBQXdCLEVBQUUsMEJBQTBCO1FBQ3BELDBCQUEwQixFQUFFLDRCQUE0QjtLQUMxRCxDQUNILENBQUM7SUFDRSxnQ0FBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsVUFBVSxFQUFFLFVBQVU7S0FDeEIsQ0FBQyxDQUFDO0lBQ04sdUJBQUM7Q0FwQkQsQUFvQkMsSUFBQTtrQkFwQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IOWFqOWxgOS6i+S7tuaemuS4vlxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBBdXRvcjogc2luMjAyMVxuICogQERhdGU6IDIwMjAtMDMtMzEgMTA6Mjc6MzVcbiAqIEBMYXN0RWRpdG9yczogc2luMjAyMVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNS0wOSAxMzozMDowOVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbk5hbWUge1xuICAgc3RhdGljIEFwcFVwZGF0ZSA9IGNjLkVudW0oe1xuICAgICAgQVBQX1VQREFURV9GSU5JU0hFRDogXCJhcHAtdXBkYXRlLWZpbmlzaGVkXCIsLy/ng63mm7TmlrDlrozmiJBcbiAgICAgIEFQUF9VUERBVEVfU1VDQ0VTUzogXCJhcHAtVXBkYXRlLXN1Y2Nlc3NcIiwvL+eDreabtOaWsOaIkOWKn1xuICAgfSk7XG5cbiAgIHN0YXRpYyBBcHBFbnRlclNjZW5lID0gY2MuRW51bSh7XG4gICAgICBBUFBfRU5URVJfU1RBUlQ6IFwiYXBwLWVudGVyLXN0YXJ0XCIsLy/ov5vlhaVTdGFydFxuICAgfSk7XG5cbiAgIHN0YXRpYyBOZXRXb3JrX0V2ZW50ID0gY2MuRW51bVxuICAgICAgKFxuICAgICAgICAge1xuICAgICAgICAgICAgU09DS0VUX0NPTk5FQ1RfU1VDX0VWRU5UOiBcInNvY2tldF9jb25uZWN0X3N1Y19ldmVudFwiLFxuICAgICAgICAgICAgU09jS0VUX1RFU1RfRklOSVNIRURfRVZFTlQ6IFwic29ja2V0X3Rlc3RfZmluaXNoZWRfZXZlbnRcIlxuICAgICAgICAgfVxuICAgICAgKTtcbiAgIHN0YXRpYyBEQVRBX1JPT01fRU5URVIgPSBjYy5FbnVtKHtcbiAgICAgIERBVEFfRU5URVI6IFwiZGF0YU92ZXJcIixcbiAgIH0pO1xufVxuXG5cbiJdfQ==