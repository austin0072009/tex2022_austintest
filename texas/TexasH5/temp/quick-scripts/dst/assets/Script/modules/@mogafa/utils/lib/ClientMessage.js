
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/ClientMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxDbGllbnRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBc0U7QUFFdEUsU0FBUztBQUNUO0lBT0k7UUFOQSxNQUFNO1FBQ0MsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQU1uQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO0lBQ25DLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRCxlQUFlO0FBQ2YsY0FBYztBQUNkO0lBQW1DLGlDQUFPO0lBQTFDOztJQVdBLENBQUM7SUFBRCxvQkFBQztBQUFELENBWEEsQUFXQyxDQVhrQyxPQUFPLEdBV3pDO0FBWFksc0NBQWE7QUFhMUIsTUFBTTtBQUNOO0lBQThCLDRCQUFPO0lBQXJDOztJQVFBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjZCLE9BQU8sR0FRcEM7QUFSWSw0QkFBUTtBQVNyQixhQUFhO0FBQ2IsUUFBUTtBQUNSLGVBQWU7QUFDZjtJQUE4Qiw0QkFBTztJQUFyQzs7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBSkEsQUFJQyxDQUo2QixpQkFBTyxHQUlwQztBQUpZLDRCQUFRO0FBS3JCLFFBQVE7QUFDUjtJQUEwQyx3Q0FBTztJQUFqRDs7SUFDQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQURBLEFBQ0MsQ0FEeUMsT0FBTyxHQUNoRDtBQURZLG9EQUFvQjtBQUdqQyxRQUFRO0FBQ1I7SUFBb0Msa0NBQU87SUFBM0M7O0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm1DLE9BQU8sR0FFMUM7QUFGWSx3Q0FBYztBQUczQixrQkFBa0I7QUFDbEI7SUFBcUMsbUNBQU87SUFBNUM7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FG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SUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSnVDLE9BQU8sR0FJOUM7QUFKWSxnREFBa0I7QUFNL0I7SUFBMEMsd0NBQU87SUFBakQ7O0lBSUEsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSnlDLE9BQU8sR0FJaEQ7QUFKWSxvREFBb0I7QUFNakM7SUFBNEMsMENBQU87SUFBbkQ7O0lBR0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSDJDLE9BQU8sR0FHbEQ7QUFIWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJJbmZvU0QsIHNjX2Jhc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQmFzZUZyYW1lL2NzX2Jhc2VcIjtcblxuLy/lrqLmiLfnq6/mtojmga/ln7rnsbtcbmNsYXNzIGNzX2Jhc2Uge1xuICAgIC8vIOWHveaVsOWQjVxuICAgIHB1YmxpYyBmbjogc3RyaW5nID0gXCJcIjtcbiAgICAvLyDlj6/og73kuLow77yM5ri45oiP55qE5Y2P6K6u5L2/55So5a+55bqU5ri45oiPSURcbiAgICBwdWJsaWMgX2c6IG51bWJlcjtcbiAgICAvLyDlrqLmnI3nq6/opoHnmoTlgLwg5LiN5YGa5Lu75L2V5aSE55CG55u05o6l6L+U5Zue5Y67XG4gICAgcHVibGljIGNjOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZm4gPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59XG5cbi8vLyDliJvlu7rop5LoibLnmoTnvZHnu5zmlbDmja7nu5PmnoRcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfY3JlYXRlMTAwNSBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBSZXRhaWxJRDogc3RyaW5nOy8vIFxuICAgIHB1YmxpYyBQaWQ6IHN0cmluZzsvLyBcbiAgICBwdWJsaWMgTW9iaWxlVHlwZTogbnVtYmVyOy8vICBcbiAgICBwdWJsaWMgQ2xpZW50QXBwVmVyc2lvbjogc3RyaW5nOy8vICBcbiAgICBwdWJsaWMgR2FtZUlEOiBudW1iZXI7Ly8gXG4gICAgcHVibGljIFNlcnZlcklEOiBzdHJpbmc7Ly8gICBcbiAgICBwdWJsaWMgX1NleDogbnVtYmVyO1xuICAgIHB1YmxpYyBOaWNrTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBBY3RpdmVDb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIEhlYWRJRDogc3RyaW5nO1xufVxuXG4vLy8g55m75b2VXG5leHBvcnQgY2xhc3MgY3NfbG9naW4gZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gICAgcHVibGljIGxhdDogbnVtYmVyO1xuICAgIHB1YmxpYyBmbG9hdDogbnVtYmVyO1xuICAgIC8vIOeUqOaIt21hY+WcsOWdgFxuICAgIHB1YmxpYyBkZXZpY2VJRDogc3RyaW5nO1xuICAgIC8vIOacuuWZqOexu+Wei++8iDHvvJog5a6J5Y2T77ybMu+8mklPU++8iVxuICAgIHB1YmxpYyBkZXZpY2VUeXBlOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g55m75b2V6L+U5ZueXG4vLy8gPC9zdW1tYXJ5PiBcbmV4cG9ydCBjbGFzcyBzY19sb2dpbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdXNlcjogUGxheWVySW5mb1NEO1xuICAgIHB1YmxpYyBjaWR4OiBudW1iZXI7XG59XG4vL+iOt+WPlueOqeWutuS/oeaBr1xuZXhwb3J0IGNsYXNzIGNzX2ZyZXNocGxheWVySW5mb1NEIGV4dGVuZHMgY3NfYmFzZSB7XG59XG5cbi8v6I635Y+W5ri45oiP5YiX6KGoXG5leHBvcnQgY2xhc3MgY3NfZ2V0Z2FtZWxpc3QgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG59XG4vL+iOt+WPlua4uOaIj+WIl+ihqCAgIOS5n+aYr+aIv+mXtOWIl+ihqCBcbmV4cG9ydCBjbGFzcyBjc19nZXRnYW1lbGV2ZWwgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG59XG4vLyDov5vlhaXmiL/pl7TvvIzlm5vkuKrmuLjmiI/otbDlkIzmoLfnmoTmjqXlj6NcbmV4cG9ydCBjbGFzcyBjc19lbnRlcnJvb20gZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICAvLyDmuLjmiI/mqKHlvI/vvIwx5oi/5Y2h5qih5byP77yMMumHkeW4geaooeW8j1xuICAgIHB1YmxpYyBnYW1lbW9kZWw6IG51bWJlcjtcbiAgICAvLyDmuLjmiI/nsbvlnovvvIxcbiAgICBwdWJsaWMgZ2FtZXR5cGU6IG51bWJlcjtcbiAgICBwdWJsaWMgbnVtcGVydGFibGU6IG51bWJlcjtcbiAgICAvLyDova7mtYHmiqLluoQgICAgICAgIFR1cm5TZWxlY3Q9MSxcbiAgICAvLyDpmo/mnLrmiqLluoQgICAgICAgIFJhbmRvbVNlbGVjdCA9IDIsXG4gICAgLy8g5Zu65a6a6L2u5bqEICAgICAgICBUdXJuID0gMyxcbiAgICAvLyDova7luoTvvIzlj6/mlL7lvIMgICAgVHVybkdpdmVVcCA9IDQsIFxuICAgIHB1YmxpYyByYW5rZXJ0eXBlOiBudW1iZXI7XG4gICAgLy8g5raI6ICX5LiA5byg5oi/5Y2h77yM6L+Y5piv5Lik5bygXG4gICAgcHVibGljIHJvb21jYXJkOiBudW1iZXI7XG4gICAgLy8g5b2T5YmN6ZmQ5Yi255qE5bGA5pWw77yM5Y2H5bqE5piv5bqE5pWw44CCXG4gICAgcHVibGljIHRhYmxlQ291bnQ6IG51bWJlcjtcbiAgICAvLyDmnIDkvY7nmoTlupXms6hcbiAgICBwdWJsaWMgYmFzZXJhdGU6IG51bWJlcjtcbiAgICAvLyDpmZDlrprlgLzlnKhsZXZlbOS4rV9taW4gfl9tYXjkuYvpl7TnmoRcbiAgICBwdWJsaWMgX2xpbWl0OiBudW1iZXI7XG59XG4vLyDlj5bmtojmjpLpmJ9cbmV4cG9ydCBjbGFzcyBjc19jYW5jZWxvcmRlciBleHRlbmRzIGNzX2Jhc2Uge1xufVxuLy8g6L6T5YWl5oi/5Y+36L+b5YWl5oi/6Ze0XG5leHBvcnQgY2xhc3MgY3NfZW50ZXJyb29tdGFibGUgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVudW06IG51bWJlcjtcbn1cbi8vIOmAgOWHuuaIv+mXtO+8jOWbm+S4qua4uOaIj+i1sOWQjOagt+eahOaOpeWPo1xuZXhwb3J0IGNsYXNzIGNzX2V4aXRyb29tIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG59XG4vLyDor7fmsYLnprvlvIDmoYzlrZDvvIznlLPor7fop6PmlaPmuLjmiI9cbmV4cG9ydCBjbGFzcyBjc19hcHBseWV4aXR0YWJsZSBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8g55Sz6K+35L2N572uXG4gICAgcHVibGljIHBvczogbnVtYmVyO1xufVxuLy8g5aSE55CG6K+35rGC56a75byA5qGM5a2Q77yMICDlpITnkIbliKvkurrnmoTnlLPor7fop6PmlaPvvIzlj6/lkIzmhI/kuI7kuI3lkIzmhI9cbmV4cG9ydCBjbGFzcyBjc19kZWFsZXhpdHRhYmxlIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLyAx77yM6KGo56S65ZCM5oSP6Kej5pWj44CCIDDvvIzooajnpLrkuI3lkIzmhI9cbiAgICBwdWJsaWMgYWdyZWU6IG51bWJlcjtcbn1cbi8vIOaWree6v+WQjuWxheS4iui/m+WFpeaIv+mXtCBcbmV4cG9ydCBjbGFzcyBjc19yZWVudGVycm9vbSBleHRlbmRzIGNzX2Jhc2Uge1xuXG59XG5cbi8vIOS4i+azqCAgMeasoVxuZXhwb3J0IGNsYXNzIGNzX2dhbWJsZW9uZV9zbG90eiBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLyDkuIvms6jliIbmlbBcbiAgICBwdWJsaWMgZ2FtYmxlOiBudW1iZXI7XG4gICAgLy8g6LSt5Lmw57q/5p2h5pWw6YePXG4gICAgcHVibGljIGxpbmVDb3VudDogbnVtYmVyO1xufVxuXG4vLyDkuIvms6ggIDHmrKFcbmV4cG9ydCBjbGFzcyBjc19nYW1ibGVvbmVfc2xvdGYgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8g5LiL5rOo5YiG5pWwXG4gICAgcHVibGljIGdhbWJsZTogbnVtYmVyO1xuICAgIC8vIOi0reS5sOe6v+adoeaVsOmHj1xuICAgIHB1YmxpYyBsaW5lQ291bnQ6IG51bWJlcjtcbn1cblxuLy8g5LiL5rOoICAx5qyhXG5leHBvcnQgY2xhc3MgY3NfZ2FtYmxlb25lX3Nsb3RiYSBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLyDkuIvms6jliIbmlbBcbiAgICBwdWJsaWMgZ2FtYmxlOiBudW1iZXI7XG4gICAgLy8g6LSt5Lmw57q/5p2h5pWw6YePXG4gICAgcHVibGljIGxpbmVDb3VudDogbnVtYmVyO1xufVxuXG4vLyDkuIvms6ggIDHmrKFcbmV4cG9ydCBjbGFzcyBjc19nYW1ibGVvbmVfc2xvdG5sIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vIOS4i+azqOWIhuaVsFxuICAgIHB1YmxpYyBnYW1ibGU6IG51bWJlcjtcbiAgICAvLyDotK3kubDnur/mnaHmlbDph49cbiAgICBwdWJsaWMgbGluZUNvdW50OiBudW1iZXI7XG59XG4vLyDkuIvms6ggIDHmrKFcbmV4cG9ydCBjbGFzcyBjc19nYW1ibGVvbmVfc2xvdG5qIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vIOS4i+azqOWIhuaVsFxuICAgIHB1YmxpYyBnYW1ibGU6IG51bWJlcjtcbiAgICAvLyDotK3kubDnur/mnaHmlbDph49cbiAgICBwdWJsaWMgbGluZUNvdW50OiBudW1iZXI7XG59XG5cbi8vIOS4i+azqCAgMeasoVxuZXhwb3J0IGNsYXNzIGNzX2dhbWJsZW9uZV9zbG90bWEgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8g5LiL5rOo5YiG5pWwXG4gICAgcHVibGljIGdhbWJsZTogbnVtYmVyO1xuICAgIC8vIOi0reS5sOe6v+adoeaVsOmHj1xuICAgIHB1YmxpYyBsaW5lQ291bnQ6IG51bWJlcjtcbn1cblxuLy8g5LiL5rOoICAx5qyhXG5leHBvcnQgY2xhc3MgY3NfZ2FtYmxlb25lX3Nsb3Rsb2wgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8g5LiL5rOo5YiG5pWwXG4gICAgcHVibGljIGdhbWJsZTogbnVtYmVyO1xuICAgIC8vIOi0reS5sOe6v+adoeaVsOmHj1xuICAgIHB1YmxpYyBsaW5lQ291bnQ6IG51bWJlcjtcbn1cblxuLy8g5LiL5rOoICAx5qyhXG5leHBvcnQgY2xhc3MgY3NfZ2FtYmxlb25lX3Nsb3RidWxsIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vIOS4i+azqOWIhuaVsFxuICAgIHB1YmxpYyBnYW1ibGU6IG51bWJlcjtcbiAgICAvLyDotK3kubDnur/mnaHmlbDph49cbiAgICBwdWJsaWMgbGluZUNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBjc19nYW1ibGVvbmVfc2xvdHNoeiBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLyDkuIvms6jliIbmlbBcbiAgICBwdWJsaWMgZ2FtYmxlOiBudW1iZXI7XG4gICAgLy8g6LSt5Lmw57q/5p2h5pWw6YePXG4gICAgcHVibGljIGxpbmVDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgY3Nfcmlza2JpYmVpX3Nsb3RzaHogZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGJldDEyMzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgY3Nfcmlza21hcnJ5X3Nsb3RzaHogZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG59XG5cbi8vIOivt+axguWcqOe6v+WIl+ihqFxuZXhwb3J0IGNsYXNzIGNzX2dldG9ubGluZV9zbG90eiBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgQ291bnQ6IG51bWJlcjtcbn1cblxuLy8g6K+35rGC5Liq5Lq65LiL5rOo6K6w5b2VXG5leHBvcnQgY2xhc3MgY3NfZ2V0aGlzdG9yeWdhbWJsZV9zbG90eiBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgQ291bnQ6IG51bWJlcjtcbn1cblxuLy8gbWFycnlcbmV4cG9ydCBjbGFzcyBjc19yaXNrbWFycnlfc2xvdHogZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgY3Nfcmlza21hcnJ5X3Nsb3RmIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xufVxuLy8g6L6T5YWl5oi/5Y+36L+b5YWl55qE546p5a626ZyA5YaN5qyh55Sz6K+3IOihpeS4gVxuZXhwb3J0IGNsYXNzIGNzX2VudGVydGFibGVfc2xvdHogZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIGNzX2VudGVydGFibGVfc2xvdGYgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIGNzX2VudGVydGFibGVfc2xvdGJhIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIGNzX2VudGVydGFibGVfc2xvdGJ1bGwgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIGNzX3NwZWNpYWxfY2FyZF9zbG90eiBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc3BlY2lhbF9jYXJkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBjc19lbnRlcnRhYmxlX3Nsb3QgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBnYW1laWQ6IG51bWJlcjtcbiAgICBsZXZlbGlkOiBudW1iZXI7XG4gICAgdGFibGVpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgY3NfQm9udXNHYW1lX3Nsb3Rsb2wgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBsZXZlbGlkOiBudW1iZXI7XG4gICAgdGFibGVpZDogbnVtYmVyO1xuICAgIHNlbGVjdEluZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBjc19mcmVlc2VsZWN0X3Nsb3RoeXJ6IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHRhYmxlaWQ6IG51bWJlcjtcbn1cblxuXG5cblxuIl19