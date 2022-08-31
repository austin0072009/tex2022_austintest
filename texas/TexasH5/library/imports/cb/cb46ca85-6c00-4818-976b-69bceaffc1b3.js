"use strict";
cc._RF.push(module, 'cb46cqFbABIGJdrabzq/8Gz', 'NotificationCenter');
// Script/Common/Managers/NotificationCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCenter = void 0;
/*
 * @Description: CocosCreator's global Event/Message Center.
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-03-31 11:05:24
 * @LastEditors: sin2021
 * @LastEditTime: 2020-03-31 11:44:02
 */
var NotificationCenter = /** @class */ (function () {
    function NotificationCenter() {
        this.eventTarget = new cc.EventTarget();
    }
    Object.defineProperty(NotificationCenter, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new NotificationCenter();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Listen to a notification
     * @param name
     * @param callback
     */
    NotificationCenter.prototype.on = function (name, callback, target) {
        this.eventTarget.on(name, callback, target);
    };
    /**
     * Dispatch a notification
     * @param name
     */
    NotificationCenter.prototype.emit = function (name, arg1) {
        this.eventTarget.emit(name, arg1);
    };
    /**
     * Cancel listen
     * @param name
     */
    NotificationCenter.prototype.off = function (name, callback, target) {
        this.eventTarget.off(name, callback, target);
    };
    NotificationCenter.instance = null;
    return NotificationCenter;
}());
exports.NotificationCenter = NotificationCenter;

cc._RF.pop();