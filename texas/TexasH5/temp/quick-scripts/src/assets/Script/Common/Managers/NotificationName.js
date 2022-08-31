"use strict";
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