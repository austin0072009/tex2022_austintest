
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Managers/NotificationCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXE1hbmFnZXJzXFxOb3RpZmljYXRpb25DZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNIO0lBQUE7UUFDWSxnQkFBVyxHQUFtQixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQWtDL0QsQ0FBQztJQS9CRyxzQkFBa0IsOEJBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQzthQUM1QztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSSwrQkFBRSxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQWMsRUFBRSxNQUFZO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBVTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGdDQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsUUFBbUIsRUFBRSxNQUFZO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQS9CYywyQkFBUSxHQUF1QixJQUFJLENBQUM7SUFnQ3ZELHlCQUFDO0NBbkNELEFBbUNDLElBQUE7QUFuQ1ksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjogQ29jb3NDcmVhdG9yJ3MgZ2xvYmFsIEV2ZW50L01lc3NhZ2UgQ2VudGVyLlxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBBdXRvcjogc2luMjAyMVxuICogQERhdGU6IDIwMjAtMDMtMzEgMTE6MDU6MjRcbiAqIEBMYXN0RWRpdG9yczogc2luMjAyMVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wMy0zMSAxMTo0NDowMlxuICovXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ2VudGVyIHtcbiAgICBwcml2YXRlIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE5vdGlmaWNhdGlvbkNlbnRlciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogTm90aWZpY2F0aW9uQ2VudGVyIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb25DZW50ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBub3RpZmljYXRpb25cbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAgICovXG4gICAgcHVibGljIG9uKG5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBhbnksIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9uKG5hbWUsIGNhbGxiYWNrLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICovXG4gICAgcHVibGljIGVtaXQobmFtZTogc3RyaW5nLCBhcmcxPzogYW55KSB7XG4gICAgICAgIHRoaXMuZXZlbnRUYXJnZXQuZW1pdChuYW1lLCBhcmcxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgbGlzdGVuXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICovXG4gICAgcHVibGljIG9mZihuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0Lm9mZihuYW1lLCBjYWxsYmFjaywgdGFyZ2V0KTtcbiAgICB9XG59XG4iXX0=