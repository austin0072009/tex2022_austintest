"use strict";
cc._RF.push(module, '1a8f9J2BLlPhKj9/rA8/oCz', 'cs_base');
// Script/BaseFrame/cs_base.ts

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
exports.sc_commonnotice_n = exports.sc_freshgold_n = exports.sc_entertablenum = exports.cs_entertablenum = exports.RoomInfoSD = exports.sc_getgamelevel = exports.cs_getgamelevel = exports.sc_disconnect_n = exports.sc_exittable_n = exports.sc_warning_n = exports.sc_chat_n = exports.sc_chat = exports.cs_chat = exports.UserRemark = exports.WechatInfoSD = exports.CountInfoSD = exports.OtherUserInfoSD = exports.CommonPosValSD = exports.CommonPosValListSD = exports.PlayerInfoSD = exports.sc_base = exports.cs_base = void 0;
//客户端消息基类
var cs_base = /** @class */ (function () {
    function cs_base() {
        // 函数名
        this.fn = "";
        // constructor() {
        //     this.fn = this.constructor.name
        // }
    }
    return cs_base;
}());
exports.cs_base = cs_base;
var sc_base = /** @class */ (function () {
    function sc_base() {
        // 函数名
        this.fn = "";
        // constructor() {
        //     this.fn = this.constructor.name
        // }
    }
    return sc_base;
}());
exports.sc_base = sc_base;
var PlayerInfoSD = /** @class */ (function () {
    function PlayerInfoSD() {
    }
    return PlayerInfoSD;
}());
exports.PlayerInfoSD = PlayerInfoSD;
var CommonPosValListSD = /** @class */ (function () {
    function CommonPosValListSD() {
    }
    return CommonPosValListSD;
}());
exports.CommonPosValListSD = CommonPosValListSD;
var CommonPosValSD = /** @class */ (function () {
    function CommonPosValSD() {
    }
    return CommonPosValSD;
}());
exports.CommonPosValSD = CommonPosValSD;
var OtherUserInfoSD = /** @class */ (function () {
    function OtherUserInfoSD() {
    }
    return OtherUserInfoSD;
}());
exports.OtherUserInfoSD = OtherUserInfoSD;
var CountInfoSD = /** @class */ (function () {
    function CountInfoSD() {
    }
    return CountInfoSD;
}());
exports.CountInfoSD = CountInfoSD;
var WechatInfoSD = /** @class */ (function () {
    function WechatInfoSD() {
    }
    return WechatInfoSD;
}());
exports.WechatInfoSD = WechatInfoSD;
/// <summary>
/// 玩家备注
/// </summary> 
var UserRemark = /** @class */ (function () {
    function UserRemark() {
    }
    return UserRemark;
}());
exports.UserRemark = UserRemark;
/// <summary>
/// 聊天功能             只有在游戏中，的具体一桌才能发消息
/// </summary>
var cs_chat = /** @class */ (function (_super) {
    __extends(cs_chat, _super);
    function cs_chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_chat;
}(cs_base));
exports.cs_chat = cs_chat;
var sc_chat = /** @class */ (function (_super) {
    __extends(sc_chat, _super);
    function sc_chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_chat;
}(sc_base));
exports.sc_chat = sc_chat;
var sc_chat_n = /** @class */ (function (_super) {
    __extends(sc_chat_n, _super);
    function sc_chat_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_chat_n;
}(sc_base));
exports.sc_chat_n = sc_chat_n;
/// <summary>
/// 警告 同IP，或同位置，GPS计算
/// </summary> 
var sc_warning_n = /** @class */ (function (_super) {
    __extends(sc_warning_n, _super);
    function sc_warning_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_warning_n;
}(sc_base));
exports.sc_warning_n = sc_warning_n;
/// <summary>
/// 通知有人离开桌子了，可能是自己人离开，可能是被服务器规则T出
/// </summary>
var sc_exittable_n = /** @class */ (function (_super) {
    __extends(sc_exittable_n, _super);
    function sc_exittable_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_exittable_n;
}(sc_base));
exports.sc_exittable_n = sc_exittable_n;
/// <summary>
/// 游戏中掉线通知，
/// </summary>
var sc_disconnect_n = /** @class */ (function (_super) {
    __extends(sc_disconnect_n, _super);
    function sc_disconnect_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_disconnect_n;
}(sc_base));
exports.sc_disconnect_n = sc_disconnect_n;
var cs_getgamelevel = /** @class */ (function (_super) {
    __extends(cs_getgamelevel, _super);
    function cs_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelevel;
}(cs_base));
exports.cs_getgamelevel = cs_getgamelevel;
var sc_getgamelevel = /** @class */ (function (_super) {
    __extends(sc_getgamelevel, _super);
    function sc_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getgamelevel;
}(sc_base));
exports.sc_getgamelevel = sc_getgamelevel;
var RoomInfoSD = /** @class */ (function () {
    function RoomInfoSD() {
    }
    return RoomInfoSD;
}());
exports.RoomInfoSD = RoomInfoSD;
/// <summary>
/// 输入房号进入的玩家需再次申请  
/// </summary>
var cs_entertablenum = /** @class */ (function (_super) {
    __extends(cs_entertablenum, _super);
    function cs_entertablenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertablenum;
}(cs_base));
exports.cs_entertablenum = cs_entertablenum;
var sc_entertablenum = /** @class */ (function (_super) {
    __extends(sc_entertablenum, _super);
    function sc_entertablenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_entertablenum;
}(sc_base));
exports.sc_entertablenum = sc_entertablenum;
// 刷新
var sc_freshgold_n = /** @class */ (function (_super) {
    __extends(sc_freshgold_n, _super);
    function sc_freshgold_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_freshgold_n;
}(sc_base));
exports.sc_freshgold_n = sc_freshgold_n;
/// <summary>
/// 公共消息推送  没有具体讯息
/// </summary>
var sc_commonnotice_n = /** @class */ (function (_super) {
    __extends(sc_commonnotice_n, _super);
    function sc_commonnotice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_commonnotice_n;
}(sc_base));
exports.sc_commonnotice_n = sc_commonnotice_n;

cc._RF.pop();