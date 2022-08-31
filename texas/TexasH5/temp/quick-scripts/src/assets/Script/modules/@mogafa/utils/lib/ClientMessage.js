"use strict";
cc._RF.push(module, 'cd2a25CynNLdqXUw3ZunQrp', 'ClientMessage');
// Script/modules/@mogafa/utils/lib/ClientMessage.ts

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
exports.cs_freeselect_slothyrz = exports.cs_BonusGame_slotlol = exports.cs_entertable_slot = exports.cs_special_card_slotz = exports.cs_entertable_slotbull = exports.cs_entertable_slotba = exports.cs_entertable_slotf = exports.cs_entertable_slotz = exports.cs_riskmarry_slotf = exports.cs_riskmarry_slotz = exports.cs_gethistorygamble_slotz = exports.cs_getonline_slotz = exports.cs_riskmarry_slotshz = exports.cs_riskbibei_slotshz = exports.cs_gambleone_slotshz = exports.cs_gambleone_slotbull = exports.cs_gambleone_slotlol = exports.cs_gambleone_slotma = exports.cs_gambleone_slotnj = exports.cs_gambleone_slotnl = exports.cs_gambleone_slotba = exports.cs_gambleone_slotf = exports.cs_gambleone_slotz = exports.cs_reenterroom = exports.cs_dealexittable = exports.cs_applyexittable = exports.cs_exitroom = exports.cs_enterroomtable = exports.cs_cancelorder = exports.cs_enterroom = exports.cs_getgamelevel = exports.cs_getgamelist = exports.cs_freshplayerInfoSD = exports.sc_login = exports.cs_login = exports.cs_create1005 = void 0;
var cs_base_1 = require("../../../../BaseFrame/cs_base");
//客户端消息基类
var cs_base = /** @class */ (function () {
    function cs_base() {
        // 函数名
        this.fn = "";
        this.fn = this.constructor.name;
    }
    return cs_base;
}());
/// 创建角色的网络数据结构
/// </summary>
var cs_create1005 = /** @class */ (function (_super) {
    __extends(cs_create1005, _super);
    function cs_create1005() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_create1005;
}(cs_base));
exports.cs_create1005 = cs_create1005;
/// 登录
var cs_login = /** @class */ (function (_super) {
    __extends(cs_login, _super);
    function cs_login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_login;
}(cs_base));
exports.cs_login = cs_login;
/// <summary>
/// 登录返回
/// </summary> 
var sc_login = /** @class */ (function (_super) {
    __extends(sc_login, _super);
    function sc_login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_login;
}(cs_base_1.sc_base));
exports.sc_login = sc_login;
//获取玩家信息
var cs_freshplayerInfoSD = /** @class */ (function (_super) {
    __extends(cs_freshplayerInfoSD, _super);
    function cs_freshplayerInfoSD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_freshplayerInfoSD;
}(cs_base));
exports.cs_freshplayerInfoSD = cs_freshplayerInfoSD;
//获取游戏列表
var cs_getgamelist = /** @class */ (function (_super) {
    __extends(cs_getgamelist, _super);
    function cs_getgamelist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelist;
}(cs_base));
exports.cs_getgamelist = cs_getgamelist;
//获取游戏列表   也是房间列表 
var cs_getgamelevel = /** @class */ (function (_super) {
    __extends(cs_getgamelevel, _super);
    function cs_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelevel;
}(cs_base));
exports.cs_getgamelevel = cs_getgamelevel;
// 进入房间，四个游戏走同样的接口
var cs_enterroom = /** @class */ (function (_super) {
    __extends(cs_enterroom, _super);
    function cs_enterroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_enterroom;
}(cs_base));
exports.cs_enterroom = cs_enterroom;
// 取消排队
var cs_cancelorder = /** @class */ (function (_super) {
    __extends(cs_cancelorder, _super);
    function cs_cancelorder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_cancelorder;
}(cs_base));
exports.cs_cancelorder = cs_cancelorder;
// 输入房号进入房间
var cs_enterroomtable = /** @class */ (function (_super) {
    __extends(cs_enterroomtable, _super);
    function cs_enterroomtable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_enterroomtable;
}(cs_base));
exports.cs_enterroomtable = cs_enterroomtable;
// 退出房间，四个游戏走同样的接口
var cs_exitroom = /** @class */ (function (_super) {
    __extends(cs_exitroom, _super);
    function cs_exitroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_exitroom;
}(cs_base));
exports.cs_exitroom = cs_exitroom;
// 请求离开桌子，申请解散游戏
var cs_applyexittable = /** @class */ (function (_super) {
    __extends(cs_applyexittable, _super);
    function cs_applyexittable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_applyexittable;
}(cs_base));
exports.cs_applyexittable = cs_applyexittable;
// 处理请求离开桌子，  处理别人的申请解散，可同意与不同意
var cs_dealexittable = /** @class */ (function (_super) {
    __extends(cs_dealexittable, _super);
    function cs_dealexittable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_dealexittable;
}(cs_base));
exports.cs_dealexittable = cs_dealexittable;
// 断线后居上进入房间 
var cs_reenterroom = /** @class */ (function (_super) {
    __extends(cs_reenterroom, _super);
    function cs_reenterroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_reenterroom;
}(cs_base));
exports.cs_reenterroom = cs_reenterroom;
// 下注  1次
var cs_gambleone_slotz = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotz, _super);
    function cs_gambleone_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotz;
}(cs_base));
exports.cs_gambleone_slotz = cs_gambleone_slotz;
// 下注  1次
var cs_gambleone_slotf = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotf, _super);
    function cs_gambleone_slotf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotf;
}(cs_base));
exports.cs_gambleone_slotf = cs_gambleone_slotf;
// 下注  1次
var cs_gambleone_slotba = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotba, _super);
    function cs_gambleone_slotba() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotba;
}(cs_base));
exports.cs_gambleone_slotba = cs_gambleone_slotba;
// 下注  1次
var cs_gambleone_slotnl = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotnl, _super);
    function cs_gambleone_slotnl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotnl;
}(cs_base));
exports.cs_gambleone_slotnl = cs_gambleone_slotnl;
// 下注  1次
var cs_gambleone_slotnj = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotnj, _super);
    function cs_gambleone_slotnj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotnj;
}(cs_base));
exports.cs_gambleone_slotnj = cs_gambleone_slotnj;
// 下注  1次
var cs_gambleone_slotma = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotma, _super);
    function cs_gambleone_slotma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotma;
}(cs_base));
exports.cs_gambleone_slotma = cs_gambleone_slotma;
// 下注  1次
var cs_gambleone_slotlol = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotlol, _super);
    function cs_gambleone_slotlol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotlol;
}(cs_base));
exports.cs_gambleone_slotlol = cs_gambleone_slotlol;
// 下注  1次
var cs_gambleone_slotbull = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotbull, _super);
    function cs_gambleone_slotbull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotbull;
}(cs_base));
exports.cs_gambleone_slotbull = cs_gambleone_slotbull;
var cs_gambleone_slotshz = /** @class */ (function (_super) {
    __extends(cs_gambleone_slotshz, _super);
    function cs_gambleone_slotshz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gambleone_slotshz;
}(cs_base));
exports.cs_gambleone_slotshz = cs_gambleone_slotshz;
var cs_riskbibei_slotshz = /** @class */ (function (_super) {
    __extends(cs_riskbibei_slotshz, _super);
    function cs_riskbibei_slotshz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_riskbibei_slotshz;
}(cs_base));
exports.cs_riskbibei_slotshz = cs_riskbibei_slotshz;
var cs_riskmarry_slotshz = /** @class */ (function (_super) {
    __extends(cs_riskmarry_slotshz, _super);
    function cs_riskmarry_slotshz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_riskmarry_slotshz;
}(cs_base));
exports.cs_riskmarry_slotshz = cs_riskmarry_slotshz;
// 请求在线列表
var cs_getonline_slotz = /** @class */ (function (_super) {
    __extends(cs_getonline_slotz, _super);
    function cs_getonline_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getonline_slotz;
}(cs_base));
exports.cs_getonline_slotz = cs_getonline_slotz;
// 请求个人下注记录
var cs_gethistorygamble_slotz = /** @class */ (function (_super) {
    __extends(cs_gethistorygamble_slotz, _super);
    function cs_gethistorygamble_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gethistorygamble_slotz;
}(cs_base));
exports.cs_gethistorygamble_slotz = cs_gethistorygamble_slotz;
// marry
var cs_riskmarry_slotz = /** @class */ (function (_super) {
    __extends(cs_riskmarry_slotz, _super);
    function cs_riskmarry_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_riskmarry_slotz;
}(cs_base));
exports.cs_riskmarry_slotz = cs_riskmarry_slotz;
var cs_riskmarry_slotf = /** @class */ (function (_super) {
    __extends(cs_riskmarry_slotf, _super);
    function cs_riskmarry_slotf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_riskmarry_slotf;
}(cs_base));
exports.cs_riskmarry_slotf = cs_riskmarry_slotf;
// 输入房号进入的玩家需再次申请 补丁
var cs_entertable_slotz = /** @class */ (function (_super) {
    __extends(cs_entertable_slotz, _super);
    function cs_entertable_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_slotz;
}(cs_base));
exports.cs_entertable_slotz = cs_entertable_slotz;
var cs_entertable_slotf = /** @class */ (function (_super) {
    __extends(cs_entertable_slotf, _super);
    function cs_entertable_slotf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_slotf;
}(cs_base));
exports.cs_entertable_slotf = cs_entertable_slotf;
var cs_entertable_slotba = /** @class */ (function (_super) {
    __extends(cs_entertable_slotba, _super);
    function cs_entertable_slotba() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_slotba;
}(cs_base));
exports.cs_entertable_slotba = cs_entertable_slotba;
var cs_entertable_slotbull = /** @class */ (function (_super) {
    __extends(cs_entertable_slotbull, _super);
    function cs_entertable_slotbull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_slotbull;
}(cs_base));
exports.cs_entertable_slotbull = cs_entertable_slotbull;
var cs_special_card_slotz = /** @class */ (function (_super) {
    __extends(cs_special_card_slotz, _super);
    function cs_special_card_slotz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_special_card_slotz;
}(cs_base));
exports.cs_special_card_slotz = cs_special_card_slotz;
var cs_entertable_slot = /** @class */ (function (_super) {
    __extends(cs_entertable_slot, _super);
    function cs_entertable_slot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_slot;
}(cs_base));
exports.cs_entertable_slot = cs_entertable_slot;
var cs_BonusGame_slotlol = /** @class */ (function (_super) {
    __extends(cs_BonusGame_slotlol, _super);
    function cs_BonusGame_slotlol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_BonusGame_slotlol;
}(cs_base));
exports.cs_BonusGame_slotlol = cs_BonusGame_slotlol;
var cs_freeselect_slothyrz = /** @class */ (function (_super) {
    __extends(cs_freeselect_slothyrz, _super);
    function cs_freeselect_slothyrz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_freeselect_slothyrz;
}(cs_base));
exports.cs_freeselect_slothyrz = cs_freeselect_slothyrz;

cc._RF.pop();