
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Login/LoginNetDataStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8f5bgTK+FJgal0251xfrpG', 'LoginNetDataStruct');
// GameHall/script/Login/LoginNetDataStruct.ts

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
exports.GameVersionPod = exports.IPDataResulta = exports.ServerPod = exports.ServerListPod = exports.sc_create1005 = exports.cs_create1005 = exports.sc_loginac = exports.cs_loginac = exports.sc_login = exports.cs_login = exports.sc_ping = exports.cs_ping = exports.sc_device = exports.cs_device = exports.sc_getexiste_openid = exports.cs_getexiste_openid = void 0;
var cs_base_1 = require("../../../Script/BaseFrame/cs_base");
var cs_getexiste_openid = /** @class */ (function (_super) {
    __extends(cs_getexiste_openid, _super);
    function cs_getexiste_openid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getexiste_openid;
}(cs_base_1.cs_base));
exports.cs_getexiste_openid = cs_getexiste_openid;
var sc_getexiste_openid = /** @class */ (function (_super) {
    __extends(sc_getexiste_openid, _super);
    function sc_getexiste_openid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getexiste_openid;
}(cs_base_1.sc_base));
exports.sc_getexiste_openid = sc_getexiste_openid;
var cs_device = /** @class */ (function (_super) {
    __extends(cs_device, _super);
    function cs_device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_device;
}(cs_base_1.cs_base));
exports.cs_device = cs_device;
var sc_device = /** @class */ (function (_super) {
    __extends(sc_device, _super);
    function sc_device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_device;
}(cs_base_1.sc_base));
exports.sc_device = sc_device;
var cs_ping = /** @class */ (function (_super) {
    __extends(cs_ping, _super);
    function cs_ping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_ping;
}(cs_base_1.cs_base));
exports.cs_ping = cs_ping;
var sc_ping = /** @class */ (function (_super) {
    __extends(sc_ping, _super);
    function sc_ping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_ping;
}(cs_base_1.sc_base));
exports.sc_ping = sc_ping;
/**登录 */
var cs_login = /** @class */ (function (_super) {
    __extends(cs_login, _super);
    function cs_login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_login;
}(cs_base_1.cs_base));
exports.cs_login = cs_login;
/** 登录返回*/
var sc_login = /** @class */ (function (_super) {
    __extends(sc_login, _super);
    function sc_login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_login;
}(cs_base_1.sc_base));
exports.sc_login = sc_login;
var cs_loginac = /** @class */ (function (_super) {
    __extends(cs_loginac, _super);
    function cs_loginac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_loginac;
}(cs_base_1.cs_base));
exports.cs_loginac = cs_loginac;
var sc_loginac = /** @class */ (function (_super) {
    __extends(sc_loginac, _super);
    function sc_loginac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_loginac;
}(cs_base_1.sc_base));
exports.sc_loginac = sc_loginac;
var cs_create1005 = /** @class */ (function (_super) {
    __extends(cs_create1005, _super);
    function cs_create1005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_create1005;
}(cs_base_1.cs_base));
exports.cs_create1005 = cs_create1005;
var sc_create1005 = /** @class */ (function (_super) {
    __extends(sc_create1005, _super);
    function sc_create1005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_create1005;
}(cs_base_1.sc_base));
exports.sc_create1005 = sc_create1005;
/** 服务器列表*/
var ServerListPod = /** @class */ (function () {
    function ServerListPod() {
        /**是否通过审核 */
        this.review = false;
        this.wechatsdk = false;
        /** 体验服id*/
        this.experience = 0; //203
    }
    // 资源Url
    ServerListPod.prototype.getResourceUrl = function () {
        if (this.ResServer == null || this.ResServer.length == 0)
            return "";
        return this.ResServer[0].url;
    };
    return ServerListPod;
}());
exports.ServerListPod = ServerListPod;
// 服务器列表结构
var ServerPod = /** @class */ (function () {
    function ServerPod() {
    }
    return ServerPod;
}());
exports.ServerPod = ServerPod;
var IPDataResulta = /** @class */ (function () {
    function IPDataResulta() {
    }
    return IPDataResulta;
}());
exports.IPDataResulta = IPDataResulta;
var GameVersionPod = /** @class */ (function () {
    function GameVersionPod() {
    }
    return GameVersionPod;
}());
exports.GameVersionPod = GameVersionPod;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9naW5cXExvZ2luTmV0RGF0YVN0cnVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQW1GO0FBSW5GO0lBQXlDLHVDQUFPO0lBQWhEOztJQUdBLENBQUM7SUFBRCwwQkFBQztBQUFELENBSEEsQUFHQyxDQUh3QyxpQkFBTyxHQUcvQztBQUhZLGtEQUFtQjtBQUtoQztJQUF5Qyx1Q0FBTztJQUFoRDs7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUhBLEFBR0MsQ0FId0MsaUJBQU8sR0FHL0M7QUFIWSxrREFBbUI7QUFNaEM7SUFBK0IsNkJBQU87SUFBdEM7O0lBV0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWDhCLGlCQUFPLEdBV3JDO0FBWFksOEJBQVM7QUFhdEI7SUFBK0IsNkJBQU87SUFBdEM7O0lBR0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSDhCLGlCQUFPLEdBR3JDO0FBSFksOEJBQVM7QUFNdEI7SUFBNkIsMkJBQU87SUFBcEM7O0lBRUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNEIsaUJBQU8sR0FFbkM7QUFGWSwwQkFBTztBQUdwQjtJQUE2QiwyQkFBTztJQUFwQzs7SUFFQSxDQUFDO0lBQUQsY0FBQztBQUFELENBRkEsQUFFQyxDQUY0QixpQkFBTyxHQUVuQztBQUZZLDBCQUFPO0FBSXBCLFFBQVE7QUFDUjtJQUE4Qiw0QkFBTztJQUFyQzs7SUFRQSxDQUFDO0lBQUQsZUFBQztBQUFELENBUkEsQUFRQyxDQVI2QixpQkFBTyxHQVFwQztBQVJZLDRCQUFRO0FBVXJCLFVBQVU7QUFDVjtJQUE4Qiw0QkFBTztJQUFyQzs7SUFVQSxDQUFDO0lBQUQsZUFBQztBQUFELENBVkEsQUFVQyxDQVY2QixpQkFBTyxHQVVwQztBQVZZLDRCQUFRO0FBWXJCO0lBQWdDLDhCQUFPO0lBQXZDOztJQWtDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDK0IsaUJBQU8sR0FrQ3RDO0FBbENZLGdDQUFVO0FBb0N2QjtJQUFnQyw4QkFBTztJQUF2Qzs7SUFZQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQVpBLEFBWUMsQ0FaK0IsaUJBQU8sR0FZdEM7QUFaWSxnQ0FBVTtBQWF2QjtJQUFtQyxpQ0FBTztJQUExQzs7SUFlQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fma0MsaUJBQU8sR0FlekM7QUFmWSxzQ0FBYTtBQWlCMUI7SUFBbUMsaUNBQU87SUFBMUM7O0lBQTZDLENBQUM7SUFBRCxvQkFBQztBQUFELENBQTdDLEFBQThDLENBQVgsaUJBQU8sR0FBSTtBQUFqQyxzQ0FBYTtBQUUxQixXQUFXO0FBQ1g7SUFBQTtRQVlJLFlBQVk7UUFDTCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDbEMsV0FBVztRQUNKLGVBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQSxLQUFLO0lBd0J2QyxDQUFDO0lBTkcsUUFBUTtJQUNELHNDQUFjLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLHNDQUFhO0FBeUMxQixVQUFVO0FBQ1Y7SUFBQTtJQWtCQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDhCQUFTO0FBbUJ0QjtJQUFBO0lBSUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxzQ0FBYTtBQUsxQjtJQUFBO0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzX2Jhc2UsIHNjX2Jhc2UsIFBsYXllckluZm9TRCB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL2NzX2Jhc2VcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBjc19nZXRleGlzdGVfb3BlbmlkIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIG9wZW5pZDogc3RyaW5nO1xuICAgIHB1YmxpYyBfaXN0cnVlV2VpWGluOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0ZXhpc3RlX29wZW5pZCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBfZXhpc3RlOiBib29sZWFuO1xuICAgIHB1YmxpYyBfcGlkOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIGNzX2RldmljZSBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBNb2JpbGVUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIEdhbWVJRDogbnVtYmVyO1xuICAgIHB1YmxpYyBSZXRhaWxJRDogc3RyaW5nO1xuICAgIHB1YmxpYyBDbGllbnRBcHBWZXJzaW9uO1xuICAgIHB1YmxpYyBEZXZpY2VJRDogc3RyaW5nO1xuICAgIHB1YmxpYyBTY3JlZW5YOiBudW1iZXI7XG4gICAgcHVibGljIFNjcmVlblk6IG51bWJlcjtcbiAgICBwdWJsaWMgU2VydmVySUQ6IG51bWJlcjtcbiAgICBwdWJsaWMgX29wZW5pZDogc3RyaW5nO1xuICAgIHB1YmxpYyBfdW5pb25pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZGV2aWNlIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHBhc3Nwb3J0aWQ6IHN0cmluZztcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgY3NfcGluZyBleHRlbmRzIGNzX2Jhc2Uge1xuXG59XG5leHBvcnQgY2xhc3Mgc2NfcGluZyBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBmcHM6IG51bWJlcjtcbn1cblxuLyoq55m75b2VICovXG5leHBvcnQgY2xhc3MgY3NfbG9naW4gZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gICAgcHVibGljIGxhdDogbnVtYmVyO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlcjtcbiAgICAvKirnlKjmiLdtYWPlnLDlnYAgKi9cbiAgICBwdWJsaWMgZGV2aWNlSUQ6IHN0cmluZztcbiAgICAvKirmnLrlmajnsbvlnovvvIgx77yaIOWuieWNk++8mzLvvJpJT1PvvIkgKi9cbiAgICBwdWJsaWMgZGV2aWNlVHlwZTogbnVtYmVyO1xufVxuXG4vKiog55m75b2V6L+U5ZueKi9cbmV4cG9ydCBjbGFzcyBzY19sb2dpbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcm9vbWlkOiBudW1iZXI7XG4gICAgcHVibGljIFVzZXJQYXNzd29yZDogc3RyaW5nO1xuICAgIHB1YmxpYyB1c2VyOiBQbGF5ZXJJbmZvU0Q7XG4gICAgcHVibGljIGNpZHg6IG51bWJlcjtcbiAgICAvKirmi6XmnInnmoTlpLTlg4/moYYgKi9cbiAgICBwdWJsaWMgaGVhZEljb3M6IHN0cmluZ1tdO1xuICAgIC8qKuW9k+WJjemAieaLqeeahOWktOWDj+ahhiAqL1xuICAgIHB1YmxpYyBoZWFkRnJhbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIGNzX2xvZ2luYWMgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgUGFzc3BvcnRJZDogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gVGhlIHBhc3N3b3JkLlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBUaGUgZGV2aWNlIEkuXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgRGV2aWNlSUQ6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k09QRU5JRFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJldGFpbFVzZXI6IHN0cmluZztcbiAgICBwdWJsaWMgU2NyZWVuWDogbnVtYmVyO1xuICAgIHB1YmxpYyBTY3JlZW5ZOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBUaGUgcmV0YWlsIEkuXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgUmV0YWlsSUQ6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIFRoZSB0eXBlIG9mIHRoZSB1c2VyLlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFVzZXJUeXBlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBUaGUgc2VydmVyIEkuXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgU2VydmVySUQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIFRoZSB0eXBlIG9mIHRoZSBnYW1lLlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEdhbWVUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIHdlY2hhdGVuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHdlY2hhdGhlYWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIHNjX2xvZ2luYWMgZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgU2Vzc2lvbklkOiBzdHJpbmc7XG4gICAgcHVibGljIFVzZXJJZDogbnVtYmVyO1xuICAgIHB1YmxpYyBVc2VyVHlwZTogbnVtYmVyO1xuICAgIHB1YmxpYyBMb2dpblRpbWU6IHN0cmluZztcbiAgICBwdWJsaWMgR3VpZGVJRDogbnVtYmVyO1xuICAgIHB1YmxpYyBQYXNzcG9ydElkOiBzdHJpbmc7XG4gICAgcHVibGljIHJlZnJlc2hfdG9rZW46IHN0cmluZztcbiAgICBwdWJsaWMgc2NvcGU6IHN0cmluZztcbiAgICBwdWJsaWMgcGhvbmU6IHN0cmluZztcbiAgICAvKirpgoDor7fnoIEgKi9cbiAgICBwdWJsaWMgYUNvZGU6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBjc19jcmVhdGUxMDA1IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIFJldGFpbElEOiBzdHJpbmc7XG4gICAgcHVibGljIFBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyBNb2JpbGVUeXBlOiBudW1iZXI7XG4gICAgcHVibGljIENsaWVudEFwcFZlcnNpb246IHN0cmluZztcbiAgICBwdWJsaWMgR2FtZUlEOiBudW1iZXI7XG4gICAgcHVibGljIFNlcnZlcklEOiBzdHJpbmc7XG4gICAgcHVibGljIF9TZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgTmlja05hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgSGVhZElEOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrZpcFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElQOiBzdHJpbmc7XG4gICAgLy9wdWJsaWMgc3RyaW5nIEFjdGl2ZUNvZGU7XG59XG5cbmV4cG9ydCBjbGFzcyBzY19jcmVhdGUxMDA1IGV4dGVuZHMgc2NfYmFzZSB7IH1cblxuLyoqIOacjeWKoeWZqOWIl+ihqCovXG5leHBvcnQgY2xhc3MgU2VydmVyTGlzdFBvZCB7XG4gICAgcHVibGljIGFwa3NpdGU6IHN0cmluZztcbiAgICBwdWJsaWMgaXBhc2l0ZTogc3RyaW5nO1xuICAgIC8vIGFwcOeJiOacrOWPt1xuICAgIHB1YmxpYyBBcHBWZXJzaW9uOiBzdHJpbmc7XG4gICAgcHVibGljIElwYVZlcnNpb246IHN0cmluZztcblxuICAgIC8vIOi1hOa6kOeJiOacrOWPt1xuICAgIHB1YmxpYyBSZXNWZXJzaW9uOiBudW1iZXI7XG4gICAgcHVibGljIElwYVJlc1ZlcnNpb246IG51bWJlcjtcbiAgICAvKiog5ZCO5Y+w5r+A5rS756CBKi9cbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG4gICAgLyoq5piv5ZCm6YCa6L+H5a6h5qC4ICovXG4gICAgcHVibGljIHJldmlldzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyB3ZWNoYXRzZGs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKiog5L2T6aqM5pyNaWQqL1xuICAgIHB1YmxpYyBleHBlcmllbmNlOiBudW1iZXIgPSAwOy8vMjAzXG4gICAgLyoq5piv5ZCm5Yqg5a+GIDHooajnpLrliqDlr4bov4cgKi9cbiAgICBwdWJsaWMgZW5jcnlwdDogc3RyaW5nO1xuICAgIC8qKuaYr+WQpuW8gOWQr+e9kemhteeZu+W9lemqjOivgSAx6KGo56S66KaB6K+35rGCIDDooajnpLrkuI3nlKjljrvor7fmsYIgKi9cbiAgICBwdWJsaWMgd2ViY2hlY2s6IHN0cmluZztcbiAgICAvKirmnI3liqHlmajliJfooaggKi9cbiAgICBwdWJsaWMgc2VydmVybGlzdDogU2VydmVyUG9kW107XG4gICAgLyoq6LWE5rqQ5pyN5Yqh5ZmoICovXG4gICAgcHVibGljIFJlc1NlcnZlcjogU2VydmVyUG9kW107XG4gICAgLyoqIOi1hOa6kOeJiOacrOS/oeaBryovXG4gICAgcHVibGljIGdhbWVyZXNsaXN0OiBHYW1lVmVyc2lvblBvZFtdO1xuICAgIC8qKueZu+mZhueZveWQjeWNlSAqL1xuICAgIHB1YmxpYyBUcnVzdExpc3Q6IHN0cmluZ1tdO1xuICAgIC8qKiDnmb3lkI3ljZXmtYvor5XniYjmnKzlj7cqL1xuICAgIHB1YmxpYyBUcnVlVmVyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc2VydmljZVVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBkb3dubG9hZHVybDogc3RyaW5nO1xuICAgIC8vIOi1hOa6kFVybFxuICAgIHB1YmxpYyBnZXRSZXNvdXJjZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5SZXNTZXJ2ZXIgPT0gbnVsbCB8fCB0aGlzLlJlc1NlcnZlci5sZW5ndGggPT0gMCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiB0aGlzLlJlc1NlcnZlclswXS51cmw7XG4gICAgfVxuICAgIHB1YmxpYyBob21lX3VybDogc3RyaW5nO1xufVxuLy8g5pyN5Yqh5Zmo5YiX6KGo57uT5p6EXG5leHBvcnQgY2xhc3MgU2VydmVyUG9kIHtcbiAgICBwdWJsaWMgaWR4OiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICAvKiogaXAg5oiW5Z+f5ZCNICovXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBwb3J0OiBudW1iZXI7XG4gICAgLyoqMCDmnKzlnLAgMSDmraPlvI/mnI0gMiDmtYvor5XmnI0gKi9cbiAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXI7XG4gICAgcHVibGljIG9wZW46IGJvb2xlYW47XG4gICAgcHVibGljIHJhbmRvbTogbnVtYmVyO1xuICAgIC8qKuWumOe9keWcsOWdgCAqL1xuICAgIHB1YmxpYyBob21lQWRyZXNzOiBzdHJpbmc7XG4gICAgLyoqYXBp5Zyw5Z2AICovXG4gICAgcHVibGljIGFwaUFkcmVzczogc3RyaW5nO1xuICAgIC8qKmFwaeWcsOWdgCAqL1xuICAgIHB1YmxpYyBhcGkyOiBzdHJpbmc7XG4gICAgLyoqMeWbveWGhSAw5Zu95aSWICovXG4gICAgcHVibGljIGludGVyc3RhdHVzOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgSVBEYXRhUmVzdWx0YSB7XG4gICAgcHVibGljIHJldDogc3RyaW5nXG4gICAgcHVibGljIGRhdGE6IHN0cmluZ1tdXG4gICAgcHVibGljIGlwOiBzdHJpbmdcbn1cbmV4cG9ydCBjbGFzcyBHYW1lVmVyc2lvblBvZCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHZlcnNpb246IG51bWJlcjtcbn1cblxuIl19