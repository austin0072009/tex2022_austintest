"use strict";
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