
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Model/TexasNetData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81bc0ElXvNGO6dufmIZny/I', 'TexasNetData');
// Games/texas/script/Model/TexasNetData.ts

"use strict";
//#region gettablist
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
exports.sc_bigend_tex_n = exports.sc_bigend_tex = exports.cs_bigend_tex = exports.sc_applyexittable_tex = exports.sc_dismisstable_tex = exports.cs_dismisstable_tex = exports.cs_applyexittable_tex = exports.TexasCompareSD = exports.Cards = exports.UserCards = exports.sc_end_tex_n = exports.sc_giveup_tex_n = exports.sc_giveup_tex = exports.cs_giveup_tex = exports.sc_gamble_tex_n = exports.sc_gamble_tex = exports.cs_gamble_tex = exports.sc_token_tex_n = exports.sc_tablestart_tex_n = exports.sc_ready_tex_n = exports.sc_ready_tex = exports.cs_ready_tex = exports.sc_entertable_tex_n = exports.sc_advancesettle_tex = exports.cs_advancesettle_tex = exports.sc_situpkeep_tex_n = exports.sc_situpkeep_tex = exports.cs_situpkeep_tex = exports.sc_sitdownwaitup_tex_n = exports.sc_sitdownwaitup_tex = exports.cs_sitdownwaitup_tex = exports.sc_sitdownwait_tex_n = exports.sc_sitdownwait_tex = exports.sc_refreshbalance_tex_n = exports.cs_sitdownwait_tex = exports.sc_sitdown_tex_n = exports.sc_sitdown_tex = exports.cs_sitdown_tex = exports.sc_freshplayerInfoSD = exports.cs_freshplayerInfoSD = exports.sc_createtable_tex = exports.cs_createtable_tex = exports.SuperClub = exports.TableRecoverTexasSD = exports.sc_entertablenum_tex = exports.cs_entertablenum_tex = exports.cinfo = exports.TableRoomInfoTex = exports.sc_gettablelist_tex = exports.cs_gettablelist_tex = void 0;
exports.sc_applysitdown_tex = exports.cs_applysitdown_tex = exports.sc_openplay_tex_n = exports.sc_openplay_tex = exports.cs_openplay_tex = exports.sc_forceshowcard_tex = exports.cs_forceshowcard_tex = exports.sc_seerestcard_tex = exports.cs_seerestcard_tex = exports.sc_refreshtableuser_n = exports.sc_userremark_tex = exports.cs_userremark_tex = exports.sc_tickuser_tex_n = exports.sc_tickuser_tex = exports.cs_tickuser_tex = exports.sc_delay_tex_n = exports.sc_delay_tex = exports.cs_delay_tex = exports.sc_instoken_tex_n = exports.sc_insurance_tex_n = exports.sc_insurance_tex = exports.cs_insurance_tex = exports.sc_showmycard_tex_n = exports.sc_showmycard_tex = exports.cs_showmycard_tex = exports.sc_addgoldingame_tex = exports.cs_addgoldingame_tex = exports.TableGainSD = exports.sc_getgain_tex = exports.cs_getgain_tex = exports.sc_alljackpot_tex_n = exports.PotUserLog = exports.sc_getalljackpot_tex = exports.cs_getalljackpot_tex = exports.PInfoSD = exports.sc_roomhistory_tex = exports.cs_roomhistory_tex = exports.sc_texascollect_tex = exports.cs_texascollect_tex = exports.TexActionSD = exports.TexUserInfoSD = exports.TexTInfoSD = exports.sc_thistory_tex = exports.cs_thistory_tex = exports.sc_enterrobot_tex = exports.cs_enterrobot_tex = exports.Insurinfo = exports.clubinfo = exports.TableClubLoseWin = exports.BigEndInfoSD_tex = void 0;
exports.cs_compete_table_info = exports.CompetePrizeInfoMessage = exports.sc_compete_award_info = exports.sc_compete_table_info = exports.sc_getnotice_n = exports.sc_goldback_tex_n = exports.sc_goldback_tex = exports.cs_goldback_tex = exports.ReportPra = exports.sc_gamereport_tex = exports.cs_gamereport_tex = exports.Barrage = exports.sc_chatlog = exports.cs_chatlog = exports.JackpotLogSD = exports.sc_tjackpotLog = exports.sc_getgamelevel = exports.cs_getgamelevel = exports.sc_one_exittable_n = exports.sc_applyexittable_tex_n = exports.sc_tokenvmaster_tex = exports.cs_tokenvmaster_tex = exports.sc_tokenvmaster_tex_n = exports.sc_refreshbalance_club = exports.cs_refreshbalance_club = exports.sc_agreeintogold_tex_n = exports.sc_agreeintogold_tex = exports.cs_agreeintogold_tex = exports.applyintogodlist = exports.sc_applyintogodlist_tex = exports.cs_applyintogodlist_tex = exports.sc_applysitdown_tex_n = void 0;
var cs_base_1 = require("../../../../Script/BaseFrame/cs_base");
/// <summary>
/// 获取自己创建的德州房间列表
/// </summary> 
var cs_gettablelist_tex = /** @class */ (function (_super) {
    __extends(cs_gettablelist_tex, _super);
    function cs_gettablelist_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gettablelist_tex;
}(cs_base_1.cs_base));
exports.cs_gettablelist_tex = cs_gettablelist_tex;
var sc_gettablelist_tex = /** @class */ (function (_super) {
    __extends(sc_gettablelist_tex, _super);
    function sc_gettablelist_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_gettablelist_tex;
}(cs_base_1.sc_base));
exports.sc_gettablelist_tex = sc_gettablelist_tex;
/// <summary>
/// 房卡德州房间信息
/// </summary>
var TableRoomInfoTex = /** @class */ (function () {
    function TableRoomInfoTex() {
    }
    return TableRoomInfoTex;
}());
exports.TableRoomInfoTex = TableRoomInfoTex;
var cinfo = /** @class */ (function () {
    function cinfo() {
    }
    return cinfo;
}());
exports.cinfo = cinfo;
//#endregion
/// <summary>
/// 输入房号进入指定桌子，尝试房卡模式通用
/// </summary>
var cs_entertablenum_tex = /** @class */ (function (_super) {
    __extends(cs_entertablenum_tex, _super);
    function cs_entertablenum_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertablenum_tex;
}(cs_base_1.cs_base));
exports.cs_entertablenum_tex = cs_entertablenum_tex;
/// <summary>
///  
/// </summary>
var sc_entertablenum_tex = /** @class */ (function (_super) {
    __extends(sc_entertablenum_tex, _super);
    function sc_entertablenum_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_entertablenum_tex;
}(cs_base_1.sc_base));
exports.sc_entertablenum_tex = sc_entertablenum_tex;
var TableRecoverTexasSD = /** @class */ (function () {
    function TableRecoverTexasSD() {
    }
    return TableRecoverTexasSD;
}());
exports.TableRecoverTexasSD = TableRecoverTexasSD;
var SuperClub = /** @class */ (function () {
    function SuperClub() {
    }
    return SuperClub;
}());
exports.SuperClub = SuperClub;
/// <summary>
/// 创建房间
/// </summary>
var cs_createtable_tex = /** @class */ (function (_super) {
    __extends(cs_createtable_tex, _super);
    function cs_createtable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_createtable_tex;
}(cs_base_1.cs_base));
exports.cs_createtable_tex = cs_createtable_tex;
/// <summary>
/// 创建房间
/// </summary>
var sc_createtable_tex = /** @class */ (function (_super) {
    __extends(sc_createtable_tex, _super);
    function sc_createtable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_createtable_tex;
}(cs_base_1.sc_base));
exports.sc_createtable_tex = sc_createtable_tex;
//获取玩家信息
var cs_freshplayerInfoSD = /** @class */ (function (_super) {
    __extends(cs_freshplayerInfoSD, _super);
    function cs_freshplayerInfoSD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_freshplayerInfoSD;
}(cs_base_1.cs_base));
exports.cs_freshplayerInfoSD = cs_freshplayerInfoSD;
var sc_freshplayerInfoSD = /** @class */ (function (_super) {
    __extends(sc_freshplayerInfoSD, _super);
    function sc_freshplayerInfoSD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_freshplayerInfoSD;
}(cs_base_1.sc_base));
exports.sc_freshplayerInfoSD = sc_freshplayerInfoSD;
/// <summary>
/// 申请坐下
/// </summary>
var cs_sitdown_tex = /** @class */ (function (_super) {
    __extends(cs_sitdown_tex, _super);
    function cs_sitdown_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_sitdown_tex;
}(cs_base_1.cs_base));
exports.cs_sitdown_tex = cs_sitdown_tex;
var sc_sitdown_tex = /** @class */ (function (_super) {
    __extends(sc_sitdown_tex, _super);
    function sc_sitdown_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdown_tex;
}(cs_base_1.sc_base));
exports.sc_sitdown_tex = sc_sitdown_tex;
/// <summary>
/// 通知所有人有人坐下了
/// </summary>
var sc_sitdown_tex_n = /** @class */ (function (_super) {
    __extends(sc_sitdown_tex_n, _super);
    function sc_sitdown_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdown_tex_n;
}(cs_base_1.sc_base));
exports.sc_sitdown_tex_n = sc_sitdown_tex_n;
/// <summary>
/// 申请坐下 不带入 显示等待 占位用 
/// </summary>
var cs_sitdownwait_tex = /** @class */ (function (_super) {
    __extends(cs_sitdownwait_tex, _super);
    function cs_sitdownwait_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_sitdownwait_tex;
}(cs_base_1.cs_base));
exports.cs_sitdownwait_tex = cs_sitdownwait_tex;
/// <summary>
/// 带入请求的时候玩家被同意后 刷新玩家余额
/// </summary>
var sc_refreshbalance_tex_n = /** @class */ (function (_super) {
    __extends(sc_refreshbalance_tex_n, _super);
    function sc_refreshbalance_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_refreshbalance_tex_n;
}(cs_base_1.sc_base));
exports.sc_refreshbalance_tex_n = sc_refreshbalance_tex_n;
var sc_sitdownwait_tex = /** @class */ (function (_super) {
    __extends(sc_sitdownwait_tex, _super);
    function sc_sitdownwait_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdownwait_tex;
}(cs_base_1.sc_base));
exports.sc_sitdownwait_tex = sc_sitdownwait_tex;
/// <summary>
/// 通知所有人有人坐下了 处理等待状态
/// </summary>
var sc_sitdownwait_tex_n = /** @class */ (function (_super) {
    __extends(sc_sitdownwait_tex_n, _super);
    function sc_sitdownwait_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdownwait_tex_n;
}(cs_base_1.sc_base));
exports.sc_sitdownwait_tex_n = sc_sitdownwait_tex_n;
/// <summary>
/// 申请坐下 不带入 退也等待 不占位 
/// </summary>
var cs_sitdownwaitup_tex = /** @class */ (function (_super) {
    __extends(cs_sitdownwaitup_tex, _super);
    function cs_sitdownwaitup_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_sitdownwaitup_tex;
}(cs_base_1.cs_base));
exports.cs_sitdownwaitup_tex = cs_sitdownwaitup_tex;
var sc_sitdownwaitup_tex = /** @class */ (function (_super) {
    __extends(sc_sitdownwaitup_tex, _super);
    function sc_sitdownwaitup_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdownwaitup_tex;
}(cs_base_1.sc_base));
exports.sc_sitdownwaitup_tex = sc_sitdownwaitup_tex;
/// <summary>
/// 通知所有人有人不占座了
/// </summary>
var sc_sitdownwaitup_tex_n = /** @class */ (function (_super) {
    __extends(sc_sitdownwaitup_tex_n, _super);
    function sc_sitdownwaitup_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sitdownwaitup_tex_n;
}(cs_base_1.sc_base));
exports.sc_sitdownwaitup_tex_n = sc_sitdownwaitup_tex_n;
/// <summary>
/// 申请留座 保留6分钟
/// </summary>
var cs_situpkeep_tex = /** @class */ (function (_super) {
    __extends(cs_situpkeep_tex, _super);
    function cs_situpkeep_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_situpkeep_tex;
}(cs_base_1.cs_base));
exports.cs_situpkeep_tex = cs_situpkeep_tex;
var sc_situpkeep_tex = /** @class */ (function (_super) {
    __extends(sc_situpkeep_tex, _super);
    function sc_situpkeep_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_situpkeep_tex;
}(cs_base_1.sc_base));
exports.sc_situpkeep_tex = sc_situpkeep_tex;
var sc_situpkeep_tex_n = /** @class */ (function (_super) {
    __extends(sc_situpkeep_tex_n, _super);
    function sc_situpkeep_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_situpkeep_tex_n;
}(cs_base_1.sc_base));
exports.sc_situpkeep_tex_n = sc_situpkeep_tex_n;
/// <summary>
/// 结算离桌 协议
/// </summary>
var cs_advancesettle_tex = /** @class */ (function (_super) {
    __extends(cs_advancesettle_tex, _super);
    function cs_advancesettle_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_advancesettle_tex;
}(cs_base_1.cs_base));
exports.cs_advancesettle_tex = cs_advancesettle_tex;
var sc_advancesettle_tex = /** @class */ (function (_super) {
    __extends(sc_advancesettle_tex, _super);
    function sc_advancesettle_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_advancesettle_tex;
}(cs_base_1.sc_base));
exports.sc_advancesettle_tex = sc_advancesettle_tex;
/// <summary>
/// 有人进入一桌，推送给这一桌内的所人的
/// </summary>
var sc_entertable_tex_n = /** @class */ (function (_super) {
    __extends(sc_entertable_tex_n, _super);
    function sc_entertable_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_entertable_tex_n;
}(cs_base_1.sc_base));
exports.sc_entertable_tex_n = sc_entertable_tex_n;
/// <summary>
/// 申请准备  
/// </summary>
var cs_ready_tex = /** @class */ (function (_super) {
    __extends(cs_ready_tex, _super);
    function cs_ready_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_ready_tex;
}(cs_base_1.cs_base));
exports.cs_ready_tex = cs_ready_tex;
var sc_ready_tex = /** @class */ (function (_super) {
    __extends(sc_ready_tex, _super);
    function sc_ready_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_ready_tex;
}(cs_base_1.sc_base));
exports.sc_ready_tex = sc_ready_tex;
/// <summary>
/// 通知所有人谁准备了
/// </summary>
var sc_ready_tex_n = /** @class */ (function (_super) {
    __extends(sc_ready_tex_n, _super);
    function sc_ready_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_ready_tex_n;
}(cs_base_1.sc_base));
exports.sc_ready_tex_n = sc_ready_tex_n;
/// <summary>
/// 进入房间后开始推送每人的牌  _n表示是服务器推送的
/// </summary>
var sc_tablestart_tex_n = /** @class */ (function (_super) {
    __extends(sc_tablestart_tex_n, _super);
    function sc_tablestart_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tablestart_tex_n;
}(cs_base_1.sc_base));
exports.sc_tablestart_tex_n = sc_tablestart_tex_n;
/// <summary>
/// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
/// </summary>
var sc_token_tex_n = /** @class */ (function (_super) {
    __extends(sc_token_tex_n, _super);
    function sc_token_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_token_tex_n;
}(cs_base_1.sc_base));
exports.sc_token_tex_n = sc_token_tex_n;
/// <summary>
/// 下注
/// </summary>
var cs_gamble_tex = /** @class */ (function (_super) {
    __extends(cs_gamble_tex, _super);
    function cs_gamble_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gamble_tex;
}(cs_base_1.cs_base));
exports.cs_gamble_tex = cs_gamble_tex;
var sc_gamble_tex = /** @class */ (function (_super) {
    __extends(sc_gamble_tex, _super);
    function sc_gamble_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_gamble_tex;
}(cs_base_1.sc_base));
exports.sc_gamble_tex = sc_gamble_tex;
/// <summary>
/// 通知所有人下注成功
/// </summary>
var sc_gamble_tex_n = /** @class */ (function (_super) {
    __extends(sc_gamble_tex_n, _super);
    function sc_gamble_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_gamble_tex_n;
}(cs_base_1.sc_base));
exports.sc_gamble_tex_n = sc_gamble_tex_n;
/// <summary>
/// 弃牌
/// </summary>
var cs_giveup_tex = /** @class */ (function (_super) {
    __extends(cs_giveup_tex, _super);
    function cs_giveup_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_giveup_tex;
}(cs_base_1.cs_base));
exports.cs_giveup_tex = cs_giveup_tex;
var sc_giveup_tex = /** @class */ (function (_super) {
    __extends(sc_giveup_tex, _super);
    function sc_giveup_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_giveup_tex;
}(cs_base_1.sc_base));
exports.sc_giveup_tex = sc_giveup_tex;
/// <summary>
/// 通知所有人，弃牌状态  
/// </summary>
var sc_giveup_tex_n = /** @class */ (function (_super) {
    __extends(sc_giveup_tex_n, _super);
    function sc_giveup_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_giveup_tex_n;
}(cs_base_1.sc_base));
exports.sc_giveup_tex_n = sc_giveup_tex_n;
/// <summary>
/// 结算 通知所有人
/// </summary>
var sc_end_tex_n = /** @class */ (function (_super) {
    __extends(sc_end_tex_n, _super);
    function sc_end_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_end_tex_n;
}(cs_base_1.sc_base));
exports.sc_end_tex_n = sc_end_tex_n;
/// <summary>
/// 秀牌的玩家
/// </summary> 
var UserCards = /** @class */ (function () {
    function UserCards() {
    }
    return UserCards;
}());
exports.UserCards = UserCards;
/// <summary>
/// 玩家秀牌的数据
/// </summary> 
var Cards = /** @class */ (function () {
    function Cards() {
    }
    return Cards;
}());
exports.Cards = Cards;
/// <summary>
/// 比牌过程的值，从大到小分钱，因为最大牌型可能没有分完的
/// </summary>
var TexasCompareSD = /** @class */ (function () {
    function TexasCompareSD() {
    }
    return TexasCompareSD;
}());
exports.TexasCompareSD = TexasCompareSD;
/// <summary>
/// 请求离开桌子，后面可以处理重新开始
/// </summary>
var cs_applyexittable_tex = /** @class */ (function (_super) {
    __extends(cs_applyexittable_tex, _super);
    function cs_applyexittable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_applyexittable_tex;
}(cs_base_1.cs_base));
exports.cs_applyexittable_tex = cs_applyexittable_tex;
/// <summary>
/// 解散桌子协议
/// </summary>
var cs_dismisstable_tex = /** @class */ (function (_super) {
    __extends(cs_dismisstable_tex, _super);
    function cs_dismisstable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_dismisstable_tex;
}(cs_base_1.cs_base));
exports.cs_dismisstable_tex = cs_dismisstable_tex;
var sc_dismisstable_tex = /** @class */ (function (_super) {
    __extends(sc_dismisstable_tex, _super);
    function sc_dismisstable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_dismisstable_tex;
}(cs_base_1.sc_base));
exports.sc_dismisstable_tex = sc_dismisstable_tex;
var sc_applyexittable_tex = /** @class */ (function (_super) {
    __extends(sc_applyexittable_tex, _super);
    function sc_applyexittable_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_applyexittable_tex;
}(cs_base_1.sc_base));
exports.sc_applyexittable_tex = sc_applyexittable_tex;
var cs_bigend_tex = /** @class */ (function (_super) {
    __extends(cs_bigend_tex, _super);
    function cs_bigend_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_bigend_tex;
}(cs_base_1.cs_base));
exports.cs_bigend_tex = cs_bigend_tex;
var sc_bigend_tex = /** @class */ (function (_super) {
    __extends(sc_bigend_tex, _super);
    function sc_bigend_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_bigend_tex;
}(cs_base_1.sc_base));
exports.sc_bigend_tex = sc_bigend_tex;
var sc_bigend_tex_n = /** @class */ (function (_super) {
    __extends(sc_bigend_tex_n, _super);
    function sc_bigend_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_bigend_tex_n;
}(cs_base_1.sc_base));
exports.sc_bigend_tex_n = sc_bigend_tex_n;
var BigEndInfoSD_tex = /** @class */ (function () {
    function BigEndInfoSD_tex() {
    }
    return BigEndInfoSD_tex;
}());
exports.BigEndInfoSD_tex = BigEndInfoSD_tex;
/// <summary>
/// 俱乐部输赢结构
/// </summary>
var TableClubLoseWin = /** @class */ (function () {
    function TableClubLoseWin() {
    }
    return TableClubLoseWin;
}());
exports.TableClubLoseWin = TableClubLoseWin;
/// <summary>
/// 保险日志
/// </summary>
var clubinfo = /** @class */ (function () {
    function clubinfo() {
    }
    return clubinfo;
}());
exports.clubinfo = clubinfo;
var Insurinfo = /** @class */ (function () {
    function Insurinfo() {
    }
    return Insurinfo;
}());
exports.Insurinfo = Insurinfo;
//#region 游戏内战绩
var cs_enterrobot_tex = /** @class */ (function (_super) {
    __extends(cs_enterrobot_tex, _super);
    function cs_enterrobot_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_enterrobot_tex;
}(cs_base_1.cs_base));
exports.cs_enterrobot_tex = cs_enterrobot_tex;
var sc_enterrobot_tex = /** @class */ (function (_super) {
    __extends(sc_enterrobot_tex, _super);
    function sc_enterrobot_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_enterrobot_tex;
}(cs_base_1.sc_base));
exports.sc_enterrobot_tex = sc_enterrobot_tex;
/// <summary>
/// 游戏内战绩
/// </summary>
var cs_thistory_tex = /** @class */ (function (_super) {
    __extends(cs_thistory_tex, _super);
    function cs_thistory_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_thistory_tex;
}(cs_base_1.cs_base));
exports.cs_thistory_tex = cs_thistory_tex;
var sc_thistory_tex = /** @class */ (function (_super) {
    __extends(sc_thistory_tex, _super);
    function sc_thistory_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_thistory_tex;
}(cs_base_1.sc_base));
exports.sc_thistory_tex = sc_thistory_tex;
var TexTInfoSD = /** @class */ (function () {
    function TexTInfoSD() {
    }
    return TexTInfoSD;
}());
exports.TexTInfoSD = TexTInfoSD;
var TexUserInfoSD = /** @class */ (function () {
    function TexUserInfoSD() {
    }
    return TexUserInfoSD;
}());
exports.TexUserInfoSD = TexUserInfoSD;
var TexActionSD = /** @class */ (function () {
    function TexActionSD() {
    }
    return TexActionSD;
}());
exports.TexActionSD = TexActionSD;
/// <summary>
/// 收藏单局牌协议
/// </summary>
var cs_texascollect_tex = /** @class */ (function (_super) {
    __extends(cs_texascollect_tex, _super);
    function cs_texascollect_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_texascollect_tex;
}(cs_base_1.cs_base));
exports.cs_texascollect_tex = cs_texascollect_tex;
var sc_texascollect_tex = /** @class */ (function (_super) {
    __extends(sc_texascollect_tex, _super);
    function sc_texascollect_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_texascollect_tex;
}(cs_base_1.sc_base));
exports.sc_texascollect_tex = sc_texascollect_tex;
/// <summary>
/// 游戏战绩详情
/// </summary>
var cs_roomhistory_tex = /** @class */ (function (_super) {
    __extends(cs_roomhistory_tex, _super);
    function cs_roomhistory_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_roomhistory_tex;
}(cs_base_1.cs_base));
exports.cs_roomhistory_tex = cs_roomhistory_tex;
var sc_roomhistory_tex = /** @class */ (function (_super) {
    __extends(sc_roomhistory_tex, _super);
    function sc_roomhistory_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_roomhistory_tex;
}(cs_base_1.sc_base));
exports.sc_roomhistory_tex = sc_roomhistory_tex;
/// <summary>
/// 简短用户信息
/// </summary>
var PInfoSD = /** @class */ (function () {
    function PInfoSD() {
    }
    return PInfoSD;
}());
exports.PInfoSD = PInfoSD;
/// <summary>
/// 请求奖池详情  包括 奖池记录
/// </summary>
var cs_getalljackpot_tex = /** @class */ (function (_super) {
    __extends(cs_getalljackpot_tex, _super);
    function cs_getalljackpot_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getalljackpot_tex;
}(cs_base_1.cs_base));
exports.cs_getalljackpot_tex = cs_getalljackpot_tex;
var sc_getalljackpot_tex = /** @class */ (function (_super) {
    __extends(sc_getalljackpot_tex, _super);
    function sc_getalljackpot_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getalljackpot_tex;
}(cs_base_1.sc_base));
exports.sc_getalljackpot_tex = sc_getalljackpot_tex;
var PotUserLog = /** @class */ (function () {
    function PotUserLog() {
    }
    return PotUserLog;
}());
exports.PotUserLog = PotUserLog;
/// <summary>
/// 通知更新总奖池
/// </summary>
var sc_alljackpot_tex_n = /** @class */ (function (_super) {
    __extends(sc_alljackpot_tex_n, _super);
    function sc_alljackpot_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_alljackpot_tex_n;
}(cs_base_1.sc_base));
exports.sc_alljackpot_tex_n = sc_alljackpot_tex_n;
/// <summary>
/// 游戏内战绩
/// </summary>
var cs_getgain_tex = /** @class */ (function (_super) {
    __extends(cs_getgain_tex, _super);
    function cs_getgain_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgain_tex;
}(cs_base_1.cs_base));
exports.cs_getgain_tex = cs_getgain_tex;
var sc_getgain_tex = /** @class */ (function (_super) {
    __extends(sc_getgain_tex, _super);
    function sc_getgain_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getgain_tex;
}(cs_base_1.sc_base));
exports.sc_getgain_tex = sc_getgain_tex;
var TableGainSD = /** @class */ (function () {
    function TableGainSD() {
    }
    return TableGainSD;
}());
exports.TableGainSD = TableGainSD;
/// <summary>
/// 游戏内加金币  游戏结束前只能补充一次且在下局才会生效
/// </summary>
var cs_addgoldingame_tex = /** @class */ (function (_super) {
    __extends(cs_addgoldingame_tex, _super);
    function cs_addgoldingame_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_addgoldingame_tex;
}(cs_base_1.cs_base));
exports.cs_addgoldingame_tex = cs_addgoldingame_tex;
var sc_addgoldingame_tex = /** @class */ (function (_super) {
    __extends(sc_addgoldingame_tex, _super);
    function sc_addgoldingame_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_addgoldingame_tex;
}(cs_base_1.sc_base));
exports.sc_addgoldingame_tex = sc_addgoldingame_tex;
/// <summary>
/// 申请秀自己的手牌
/// </summary>
var cs_showmycard_tex = /** @class */ (function (_super) {
    __extends(cs_showmycard_tex, _super);
    function cs_showmycard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_showmycard_tex;
}(cs_base_1.cs_base));
exports.cs_showmycard_tex = cs_showmycard_tex;
var sc_showmycard_tex = /** @class */ (function (_super) {
    __extends(sc_showmycard_tex, _super);
    function sc_showmycard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_showmycard_tex;
}(cs_base_1.sc_base));
exports.sc_showmycard_tex = sc_showmycard_tex;
var sc_showmycard_tex_n = /** @class */ (function (_super) {
    __extends(sc_showmycard_tex_n, _super);
    function sc_showmycard_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_showmycard_tex_n;
}(cs_base_1.sc_base));
exports.sc_showmycard_tex_n = sc_showmycard_tex_n;
/// <summary>
/// 保险模式
/// </summary>
var cs_insurance_tex = /** @class */ (function (_super) {
    __extends(cs_insurance_tex, _super);
    function cs_insurance_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_insurance_tex;
}(cs_base_1.cs_base));
exports.cs_insurance_tex = cs_insurance_tex;
var sc_insurance_tex = /** @class */ (function (_super) {
    __extends(sc_insurance_tex, _super);
    function sc_insurance_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_insurance_tex;
}(cs_base_1.sc_base));
exports.sc_insurance_tex = sc_insurance_tex;
/// <summary>
/// 通知所有人，购买保险  
/// </summary>
var sc_insurance_tex_n = /** @class */ (function (_super) {
    __extends(sc_insurance_tex_n, _super);
    function sc_insurance_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_insurance_tex_n;
}(cs_base_1.sc_base));
exports.sc_insurance_tex_n = sc_insurance_tex_n;
/// <summary>
/// 移一次token  用户可能有两个操作，选保额，或不保  
/// </summary>
var sc_instoken_tex_n = /** @class */ (function (_super) {
    __extends(sc_instoken_tex_n, _super);
    function sc_instoken_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_instoken_tex_n;
}(cs_base_1.sc_base));
exports.sc_instoken_tex_n = sc_instoken_tex_n;
//#endregion
//#region delay
/// <summary>
/// 分牌时申请延时
/// </summary>
var cs_delay_tex = /** @class */ (function (_super) {
    __extends(cs_delay_tex, _super);
    function cs_delay_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_delay_tex;
}(cs_base_1.cs_base));
exports.cs_delay_tex = cs_delay_tex;
var sc_delay_tex = /** @class */ (function (_super) {
    __extends(sc_delay_tex, _super);
    function sc_delay_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_delay_tex;
}(cs_base_1.sc_base));
exports.sc_delay_tex = sc_delay_tex;
/// <summary>
/// 通知所有人，有人申请了延时
/// </summary>
var sc_delay_tex_n = /** @class */ (function (_super) {
    __extends(sc_delay_tex_n, _super);
    function sc_delay_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_delay_tex_n;
}(cs_base_1.sc_base));
exports.sc_delay_tex_n = sc_delay_tex_n;
/// <summary>
/// 踢人  从桌子上,正在游戏中不能踢
/// </summary>
var cs_tickuser_tex = /** @class */ (function (_super) {
    __extends(cs_tickuser_tex, _super);
    function cs_tickuser_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_tickuser_tex;
}(cs_base_1.cs_base));
exports.cs_tickuser_tex = cs_tickuser_tex;
var sc_tickuser_tex = /** @class */ (function (_super) {
    __extends(sc_tickuser_tex, _super);
    function sc_tickuser_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tickuser_tex;
}(cs_base_1.sc_base));
exports.sc_tickuser_tex = sc_tickuser_tex;
var sc_tickuser_tex_n = /** @class */ (function (_super) {
    __extends(sc_tickuser_tex_n, _super);
    function sc_tickuser_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tickuser_tex_n;
}(cs_base_1.sc_base));
exports.sc_tickuser_tex_n = sc_tickuser_tex_n;
var cs_userremark_tex = /** @class */ (function (_super) {
    __extends(cs_userremark_tex, _super);
    function cs_userremark_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_userremark_tex;
}(cs_base_1.cs_base));
exports.cs_userremark_tex = cs_userremark_tex;
var sc_userremark_tex = /** @class */ (function (_super) {
    __extends(sc_userremark_tex, _super);
    function sc_userremark_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_userremark_tex;
}(cs_base_1.sc_base));
exports.sc_userremark_tex = sc_userremark_tex;
/// <summary>
/// 刷新桌子上单个玩家
/// </summary>
var sc_refreshtableuser_n = /** @class */ (function (_super) {
    __extends(sc_refreshtableuser_n, _super);
    function sc_refreshtableuser_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_refreshtableuser_n;
}(cs_base_1.sc_base));
exports.sc_refreshtableuser_n = sc_refreshtableuser_n;
/// <summary>
/// 查看公牌余牌
/// </summary>
var cs_seerestcard_tex = /** @class */ (function (_super) {
    __extends(cs_seerestcard_tex, _super);
    function cs_seerestcard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_seerestcard_tex;
}(cs_base_1.cs_base));
exports.cs_seerestcard_tex = cs_seerestcard_tex;
var sc_seerestcard_tex = /** @class */ (function (_super) {
    __extends(sc_seerestcard_tex, _super);
    function sc_seerestcard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_seerestcard_tex;
}(cs_base_1.sc_base));
exports.sc_seerestcard_tex = sc_seerestcard_tex;
/// <summary>
/// 强制秀牌
/// </summary>
var cs_forceshowcard_tex = /** @class */ (function (_super) {
    __extends(cs_forceshowcard_tex, _super);
    function cs_forceshowcard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_forceshowcard_tex;
}(cs_base_1.cs_base));
exports.cs_forceshowcard_tex = cs_forceshowcard_tex;
var sc_forceshowcard_tex = /** @class */ (function (_super) {
    __extends(sc_forceshowcard_tex, _super);
    function sc_forceshowcard_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_forceshowcard_tex;
}(cs_base_1.sc_base));
exports.sc_forceshowcard_tex = sc_forceshowcard_tex;
//#endregion
//#region 房主开局协议
/// <summary>
/// 
/// </summary>
var cs_openplay_tex = /** @class */ (function (_super) {
    __extends(cs_openplay_tex, _super);
    function cs_openplay_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_openplay_tex;
}(cs_base_1.cs_base));
exports.cs_openplay_tex = cs_openplay_tex;
var sc_openplay_tex = /** @class */ (function (_super) {
    __extends(sc_openplay_tex, _super);
    function sc_openplay_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_openplay_tex;
}(cs_base_1.sc_base));
exports.sc_openplay_tex = sc_openplay_tex;
var sc_openplay_tex_n = /** @class */ (function (_super) {
    __extends(sc_openplay_tex_n, _super);
    function sc_openplay_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_openplay_tex_n;
}(cs_base_1.sc_base));
exports.sc_openplay_tex_n = sc_openplay_tex_n;
//#endregion
//#region 玩家控制协议
/// <summary>
/// 申请带入金币  俱乐部币
/// </summary>
var cs_applysitdown_tex = /** @class */ (function (_super) {
    __extends(cs_applysitdown_tex, _super);
    function cs_applysitdown_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_applysitdown_tex;
}(cs_base_1.cs_base));
exports.cs_applysitdown_tex = cs_applysitdown_tex;
var sc_applysitdown_tex = /** @class */ (function (_super) {
    __extends(sc_applysitdown_tex, _super);
    function sc_applysitdown_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_applysitdown_tex;
}(cs_base_1.sc_base));
exports.sc_applysitdown_tex = sc_applysitdown_tex;
var sc_applysitdown_tex_n = /** @class */ (function (_super) {
    __extends(sc_applysitdown_tex_n, _super);
    function sc_applysitdown_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_applysitdown_tex_n;
}(cs_base_1.sc_base));
exports.sc_applysitdown_tex_n = sc_applysitdown_tex_n;
/// <summary>
/// 获得房主的申请列表
/// </summary>
var cs_applyintogodlist_tex = /** @class */ (function (_super) {
    __extends(cs_applyintogodlist_tex, _super);
    function cs_applyintogodlist_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_applyintogodlist_tex;
}(cs_base_1.cs_base));
exports.cs_applyintogodlist_tex = cs_applyintogodlist_tex;
var sc_applyintogodlist_tex = /** @class */ (function (_super) {
    __extends(sc_applyintogodlist_tex, _super);
    function sc_applyintogodlist_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_applyintogodlist_tex;
}(cs_base_1.sc_base));
exports.sc_applyintogodlist_tex = sc_applyintogodlist_tex;
var applyintogodlist = /** @class */ (function () {
    function applyintogodlist() {
    }
    return applyintogodlist;
}());
exports.applyintogodlist = applyintogodlist;
/// <summary>
/// 同意拒绝的协议
/// </summary>
var cs_agreeintogold_tex = /** @class */ (function (_super) {
    __extends(cs_agreeintogold_tex, _super);
    function cs_agreeintogold_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_agreeintogold_tex;
}(cs_base_1.cs_base));
exports.cs_agreeintogold_tex = cs_agreeintogold_tex;
var sc_agreeintogold_tex = /** @class */ (function (_super) {
    __extends(sc_agreeintogold_tex, _super);
    function sc_agreeintogold_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_agreeintogold_tex;
}(cs_base_1.sc_base));
exports.sc_agreeintogold_tex = sc_agreeintogold_tex;
var sc_agreeintogold_tex_n = /** @class */ (function (_super) {
    __extends(sc_agreeintogold_tex_n, _super);
    function sc_agreeintogold_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_agreeintogold_tex_n;
}(cs_base_1.sc_base));
exports.sc_agreeintogold_tex_n = sc_agreeintogold_tex_n;
/// <summary>
/// 刷新玩家余额
/// </summary>
var cs_refreshbalance_club = /** @class */ (function (_super) {
    __extends(cs_refreshbalance_club, _super);
    function cs_refreshbalance_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_refreshbalance_club;
}(cs_base_1.cs_base));
exports.cs_refreshbalance_club = cs_refreshbalance_club;
var sc_refreshbalance_club = /** @class */ (function (_super) {
    __extends(sc_refreshbalance_club, _super);
    function sc_refreshbalance_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_refreshbalance_club;
}(cs_base_1.sc_base));
exports.sc_refreshbalance_club = sc_refreshbalance_club;
//#endregion
//#region vmaster
/// <summary>
/// 通知主播需要开牌了  
/// </summary>
var sc_tokenvmaster_tex_n = /** @class */ (function (_super) {
    __extends(sc_tokenvmaster_tex_n, _super);
    function sc_tokenvmaster_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tokenvmaster_tex_n;
}(cs_base_1.sc_base));
exports.sc_tokenvmaster_tex_n = sc_tokenvmaster_tex_n;
/// <summary>
/// 主播收到通知后开牌了  仅主播用
/// </summary>
var cs_tokenvmaster_tex = /** @class */ (function (_super) {
    __extends(cs_tokenvmaster_tex, _super);
    function cs_tokenvmaster_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_tokenvmaster_tex;
}(cs_base_1.cs_base));
exports.cs_tokenvmaster_tex = cs_tokenvmaster_tex;
/// <summary>
///  主播收到通知后开牌了  仅主播用  
/// </summary>
var sc_tokenvmaster_tex = /** @class */ (function (_super) {
    __extends(sc_tokenvmaster_tex, _super);
    function sc_tokenvmaster_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tokenvmaster_tex;
}(cs_base_1.sc_base));
exports.sc_tokenvmaster_tex = sc_tokenvmaster_tex;
//#endregion
/// <summary>
/// 通知所有人申请离开桌子
/// </summary>
var sc_applyexittable_tex_n = /** @class */ (function (_super) {
    __extends(sc_applyexittable_tex_n, _super);
    function sc_applyexittable_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_applyexittable_tex_n;
}(cs_base_1.sc_base));
exports.sc_applyexittable_tex_n = sc_applyexittable_tex_n;
var sc_one_exittable_n = /** @class */ (function (_super) {
    __extends(sc_one_exittable_n, _super);
    function sc_one_exittable_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_one_exittable_n;
}(cs_base_1.sc_base));
exports.sc_one_exittable_n = sc_one_exittable_n;
var cs_getgamelevel = /** @class */ (function (_super) {
    __extends(cs_getgamelevel, _super);
    function cs_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelevel;
}(cs_base_1.cs_base));
exports.cs_getgamelevel = cs_getgamelevel;
var sc_getgamelevel = /** @class */ (function (_super) {
    __extends(sc_getgamelevel, _super);
    function sc_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getgamelevel;
}(cs_base_1.sc_base));
exports.sc_getgamelevel = sc_getgamelevel;
var sc_tjackpotLog = /** @class */ (function (_super) {
    __extends(sc_tjackpotLog, _super);
    function sc_tjackpotLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tjackpotLog;
}(cs_base_1.sc_base));
exports.sc_tjackpotLog = sc_tjackpotLog;
var JackpotLogSD = /** @class */ (function (_super) {
    __extends(JackpotLogSD, _super);
    function JackpotLogSD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JackpotLogSD;
}(cs_base_1.sc_base));
exports.JackpotLogSD = JackpotLogSD;
var cs_chatlog = /** @class */ (function (_super) {
    __extends(cs_chatlog, _super);
    function cs_chatlog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_chatlog;
}(cs_base_1.cs_base));
exports.cs_chatlog = cs_chatlog;
var sc_chatlog = /** @class */ (function (_super) {
    __extends(sc_chatlog, _super);
    function sc_chatlog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_chatlog;
}(cs_base_1.sc_base));
exports.sc_chatlog = sc_chatlog;
var Barrage = /** @class */ (function () {
    function Barrage() {
    }
    return Barrage;
}());
exports.Barrage = Barrage;
//举报
var cs_gamereport_tex = /** @class */ (function (_super) {
    __extends(cs_gamereport_tex, _super);
    function cs_gamereport_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_gamereport_tex;
}(cs_base_1.cs_base));
exports.cs_gamereport_tex = cs_gamereport_tex;
var sc_gamereport_tex = /** @class */ (function (_super) {
    __extends(sc_gamereport_tex, _super);
    function sc_gamereport_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_gamereport_tex;
}(cs_base_1.sc_base));
exports.sc_gamereport_tex = sc_gamereport_tex;
var ReportPra = /** @class */ (function () {
    function ReportPra() {
    }
    return ReportPra;
}());
exports.ReportPra = ReportPra;
var cs_goldback_tex = /** @class */ (function (_super) {
    __extends(cs_goldback_tex, _super);
    function cs_goldback_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_goldback_tex;
}(cs_base_1.cs_base));
exports.cs_goldback_tex = cs_goldback_tex;
var sc_goldback_tex = /** @class */ (function (_super) {
    __extends(sc_goldback_tex, _super);
    function sc_goldback_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_goldback_tex;
}(cs_base_1.sc_base));
exports.sc_goldback_tex = sc_goldback_tex;
var sc_goldback_tex_n = /** @class */ (function (_super) {
    __extends(sc_goldback_tex_n, _super);
    function sc_goldback_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_goldback_tex_n;
}(cs_base_1.sc_base));
exports.sc_goldback_tex_n = sc_goldback_tex_n;
var sc_getnotice_n = /** @class */ (function (_super) {
    __extends(sc_getnotice_n, _super);
    function sc_getnotice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getnotice_n;
}(cs_base_1.sc_base));
exports.sc_getnotice_n = sc_getnotice_n;
//比赛更新
var sc_compete_table_info = /** @class */ (function (_super) {
    __extends(sc_compete_table_info, _super);
    function sc_compete_table_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_table_info;
}(cs_base_1.sc_base));
exports.sc_compete_table_info = sc_compete_table_info;
/// <summary> 获奖信息 </summary>
var sc_compete_award_info = /** @class */ (function (_super) {
    __extends(sc_compete_award_info, _super);
    function sc_compete_award_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_award_info;
}(cs_base_1.sc_base));
exports.sc_compete_award_info = sc_compete_award_info;
var CompetePrizeInfoMessage = /** @class */ (function () {
    function CompetePrizeInfoMessage() {
    }
    return CompetePrizeInfoMessage;
}());
exports.CompetePrizeInfoMessage = CompetePrizeInfoMessage;
var cs_compete_table_info = /** @class */ (function (_super) {
    __extends(cs_compete_table_info, _super);
    function cs_compete_table_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_table_info;
}(cs_base_1.cs_base));
exports.cs_compete_table_info = cs_compete_table_info;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXE1vZGVsXFxUZXhhc05ldERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLGdFQUFpTDtBQUVqTCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtJQUF5Qyx1Q0FBTztJQUFoRDs7SUFFQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGd0MsaUJBQU8sR0FFL0M7QUFGWSxrREFBbUI7QUFJaEM7SUFBeUMsdUNBQU87SUFBaEQ7O0lBNEJBLENBQUM7SUFBRCwwQkFBQztBQUFELENBNUJBLEFBNEJDLENBNUJ3QyxpQkFBTyxHQTRCL0M7QUE1Qlksa0RBQW1CO0FBOEJoQyxhQUFhO0FBQ2IsWUFBWTtBQUNaLGNBQWM7QUFDZDtJQUFBO0lBK0dBLENBQUM7SUFBRCx1QkFBQztBQUFELENBL0dBLEFBK0dDLElBQUE7QUEvR1ksNENBQWdCO0FBZ0g3QjtJQUFBO0lBVUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHNCQUFLO0FBV2xCLFlBQVk7QUFFWixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZDtJQUEwQyx3Q0FBTztJQUFqRDs7SUFFQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGeUMsaUJBQU8sR0FFaEQ7QUFGWSxvREFBb0I7QUFHakMsYUFBYTtBQUNiLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBaU1BLENBQUM7SUFBRCwyQkFBQztBQUFELENBak1BLEFBaU1DLENBak15QyxpQkFBTyxHQWlNaEQ7QUFqTVksb0RBQW9CO0FBbU1qQztJQUFBO0lBNkRBLENBQUM7SUFBRCwwQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksa0RBQW1CO0FBOERoQztJQUFBO0lBZUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw4QkFBUztBQWdCdEIsYUFBYTtBQUNiLFFBQVE7QUFDUixjQUFjO0FBQ2Q7SUFBd0Msc0NBQU87SUFBL0M7O0lBNkZBLENBQUM7SUFBRCx5QkFBQztBQUFELENBN0ZBLEFBNkZDLENBN0Z1QyxpQkFBTyxHQTZGOUM7QUE3RlksZ0RBQWtCO0FBK0YvQixhQUFhO0FBQ2IsUUFBUTtBQUNSLGNBQWM7QUFDZDtJQUF3QyxzQ0FBTztJQUEvQzs7SUEyQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsQ0EzQnVDLGlCQUFPLEdBMkI5QztBQTNCWSxnREFBa0I7QUE2Qi9CLFFBQVE7QUFDUjtJQUEwQyx3Q0FBTztJQUFqRDs7SUFFQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGeUMsaUJBQU8sR0FFaEQ7QUFGWSxvREFBb0I7QUFJakM7SUFBMEMsd0NBQU87SUFBakQ7O0lBa0JBLENBQUM7SUFBRCwyQkFBQztBQUFELENBbEJBLEFBa0JDLENBbEJ5QyxpQkFBTyxHQWtCaEQ7QUFsQlksb0RBQW9CO0FBb0JqQyxhQUFhO0FBQ2IsUUFBUTtBQUNSLGNBQWM7QUFDZDtJQUFvQyxrQ0FBTztJQUEzQzs7SUFnQkEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQm1DLGlCQUFPLEdBZ0IxQztBQWhCWSx3Q0FBYztBQWlCM0I7SUFBb0Msa0NBQU87SUFBM0M7O0lBS0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTG1DLGlCQUFPLEdBSzFDO0FBTFksd0NBQWM7QUFPM0IsYUFBYTtBQUNiLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7SUFBc0Msb0NBQU87SUFBN0M7O0lBY0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZHFDLGlCQUFPLEdBYzVDO0FBZFksNENBQWdCO0FBZTdCLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsY0FBYztBQUNkO0lBQXdDLHNDQUFPO0lBQS9DOztJQVVBLENBQUM7SUFBRCx5QkFBQztBQUFELENBVkEsQUFVQyxDQVZ1QyxpQkFBTyxHQVU5QztBQVZZLGdEQUFrQjtBQVcvQixhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZDtJQUE2QywyQ0FBTztJQUFwRDs7SUFjQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQWRBLEFBY0MsQ0FkNEMsaUJBQU8sR0FjbkQ7QUFkWSwwREFBdUI7QUFlcEM7SUFBd0Msc0NBQU87SUFBL0M7O0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnVDLGlCQUFPLEdBRTlDO0FBRlksZ0RBQWtCO0FBSS9CLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsY0FBYztBQUNkO0lBQTBDLHdDQUFPO0lBQWpEOztJQWtCQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCeUMsaUJBQU8sR0FrQmhEO0FBbEJZLG9EQUFvQjtBQW1CakMsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBR0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSHlDLGlCQUFPLEdBR2hEO0FBSFksb0RBQW9CO0FBSWpDO0lBQTBDLHdDQUFPO0lBQWpEOztJQUVBLENBQUM7SUFBRCwyQkFBQztBQUFELENBRkEsQUFFQyxDQUZ5QyxpQkFBTyxHQUVoRDtBQUZZLG9EQUFvQjtBQUdqQyxhQUFhO0FBQ2IsZUFBZTtBQUNmLGNBQWM7QUFDZDtJQUE0QywwQ0FBTztJQUFuRDs7SUFjQSxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQWRBLEFBY0MsQ0FkMkMsaUJBQU8sR0FjbEQ7QUFkWSx3REFBc0I7QUFlbkMsYUFBYTtBQUNiLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7SUFBc0Msb0NBQU87SUFBN0M7O0lBT0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUHFDLGlCQUFPLEdBTzVDO0FBUFksNENBQWdCO0FBUTdCO0lBQXNDLG9DQUFPO0lBQTdDOztJQVNBLENBQUM7SUFBRCx1QkFBQztBQUFELENBVEEsQUFTQyxDQVRxQyxpQkFBTyxHQVM1QztBQVRZLDRDQUFnQjtBQVU3QjtJQUF3QyxzQ0FBTztJQUEvQzs7SUFPQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQdUMsaUJBQU8sR0FPOUM7QUFQWSxnREFBa0I7QUFRL0IsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBR0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSHlDLGlCQUFPLEdBR2hEO0FBSFksb0RBQW9CO0FBS2pDO0lBQTBDLHdDQUFPO0lBQWpEOztJQU1BLENBQUM7SUFBRCwyQkFBQztBQUFELENBTkEsQUFNQyxDQU55QyxpQkFBTyxHQU1oRDtBQU5ZLG9EQUFvQjtBQU9qQyxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZDtJQUF5Qyx1Q0FBTztJQUFoRDs7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUhBLEFBR0MsQ0FId0MsaUJBQU8sR0FHL0M7QUFIWSxrREFBbUI7QUFJaEMsYUFBYTtBQUNiLFVBQVU7QUFDVixjQUFjO0FBQ2Q7SUFBa0MsZ0NBQU87SUFBekM7O0lBSUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FKQSxBQUlDLENBSmlDLGlCQUFPLEdBSXhDO0FBSlksb0NBQVk7QUFLekI7SUFBa0MsZ0NBQU87SUFBekM7O0lBRUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmlDLGlCQUFPLEdBRXhDO0FBRlksb0NBQVk7QUFHekIsYUFBYTtBQUNiLGFBQWE7QUFDYixjQUFjO0FBQ2Q7SUFBb0Msa0NBQU87SUFBM0M7O0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm1DLGlCQUFPLEdBRTFDO0FBRlksd0NBQWM7QUFHM0IsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixjQUFjO0FBQ2Q7SUFBeUMsdUNBQU87SUFBaEQ7O0lBOEJBLENBQUM7SUFBRCwwQkFBQztBQUFELENBOUJBLEFBOEJDLENBOUJ3QyxpQkFBTyxHQThCL0M7QUE5Qlksa0RBQW1CO0FBZ0NoQyxhQUFhO0FBQ2IsNENBQTRDO0FBQzVDLGNBQWM7QUFDZDtJQUFvQyxrQ0FBTztJQUEzQzs7SUFrQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsQ0FsQ21DLGlCQUFPLEdBa0MxQztBQWxDWSx3Q0FBYztBQW9DM0IsYUFBYTtBQUNiLE1BQU07QUFDTixjQUFjO0FBQ2Q7SUFBbUMsaUNBQU87SUFBMUM7O0lBUUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FSQSxBQVFDLENBUmtDLGlCQUFPLEdBUXpDO0FBUlksc0NBQWE7QUFTMUI7SUFBbUMsaUNBQU87SUFBMUM7O0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmtDLGlCQUFPLEdBRXpDO0FBRlksc0NBQWE7QUFHMUIsYUFBYTtBQUNiLGFBQWE7QUFDYixjQUFjO0FBQ2Q7SUFBcUMsbUNBQU87SUFBNUM7O0lBcUJBLENBQUM7SUFBRCxzQkFBQztBQUFELENBckJBLEFBcUJDLENBckJvQyxpQkFBTyxHQXFCM0M7QUFyQlksMENBQWU7QUF1QjVCLGFBQWE7QUFDYixNQUFNO0FBQ04sY0FBYztBQUNkO0lBQW1DLGlDQUFPO0lBQTFDOztJQUlBLENBQUM7SUFBRCxvQkFBQztBQUFELENBSkEsQUFJQyxDQUprQyxpQkFBTyxHQUl6QztBQUpZLHNDQUFhO0FBSzFCO0lBQW1DLGlDQUFPO0lBQTFDOztJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBRkEsQUFFQyxDQUZrQyxpQkFBTyxHQUV6QztBQUZZLHNDQUFhO0FBRzFCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0lBQXFDLG1DQUFPO0lBQTVDOztJQU1BLENBQUM7SUFBRCxzQkFBQztBQUFELENBTkEsQUFNQyxDQU5vQyxpQkFBTyxHQU0zQztBQU5ZLDBDQUFlO0FBUTVCLGFBQWE7QUFDYixZQUFZO0FBQ1osY0FBYztBQUNkO0lBQWtDLGdDQUFPO0lBQXpDOztJQWtEQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQWxEQSxBQWtEQyxDQWxEaUMsaUJBQU8sR0FrRHhDO0FBbERZLG9DQUFZO0FBbUR6QixhQUFhO0FBQ2IsU0FBUztBQUNULGVBQWU7QUFDZjtJQUFBO0lBVUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw4QkFBUztBQVd0QixhQUFhO0FBQ2IsV0FBVztBQUNYLGVBQWU7QUFDZjtJQUFBO0lBVUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHNCQUFLO0FBV2xCLGFBQWE7QUFDYiwrQkFBK0I7QUFDL0IsY0FBYztBQUNkO0lBQUE7SUFtQkEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSx3Q0FBYztBQW9CM0IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2Q7SUFBMkMseUNBQU87SUFBbEQ7O0lBT0EsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUDBDLGlCQUFPLEdBT2pEO0FBUFksc0RBQXFCO0FBU2xDLGFBQWE7QUFDYixVQUFVO0FBQ1YsY0FBYztBQUNkO0lBQXlDLHVDQUFPO0lBQWhEOztJQVNBLENBQUM7SUFBRCwwQkFBQztBQUFELENBVEEsQUFTQyxDQVR3QyxpQkFBTyxHQVMvQztBQVRZLGtEQUFtQjtBQVdoQztJQUF5Qyx1Q0FBTztJQUFoRDs7SUFFQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGd0MsaUJBQU8sR0FFL0M7QUFGWSxrREFBbUI7QUFHaEM7SUFBMkMseUNBQU87SUFBbEQ7O0lBQXFELENBQUM7SUFBRCw0QkFBQztBQUFELENBQXJELEFBQXNELENBQVgsaUJBQU8sR0FBSTtBQUF6QyxzREFBcUI7QUFFbEM7SUFBbUMsaUNBQU87SUFBMUM7O0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FIQSxBQUdDLENBSGtDLGlCQUFPLEdBR3pDO0FBSFksc0NBQWE7QUFLMUI7SUFBbUMsaUNBQU87SUFBMUM7O0lBTUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FOQSxBQU1DLENBTmtDLGlCQUFPLEdBTXpDO0FBTlksc0NBQWE7QUFRMUI7SUFBcUMsbUNBQU87SUFBNUM7O0lBTUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTm9DLGlCQUFPLEdBTTNDO0FBTlksMENBQWU7QUFPNUI7SUFBQTtJQStDQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NZLDRDQUFnQjtBQWdEN0IsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2Q7SUFBQTtJQWNBLENBQUM7SUFBRCx1QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksNENBQWdCO0FBZ0I3QixhQUFhO0FBQ2IsUUFBUTtBQUNSLGNBQWM7QUFDZDtJQUFBO0lBSUEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDRCQUFRO0FBTXJCO0lBQUE7SUFjQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLDhCQUFTO0FBaUJ0QixlQUFlO0FBQ2Y7SUFBdUMscUNBQU87SUFBOUM7O0lBR0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSHNDLGlCQUFPLEdBRzdDO0FBSFksOENBQWlCO0FBSTlCO0lBQXVDLHFDQUFPO0lBQTlDOztJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBRkEsQUFFQyxDQUZzQyxpQkFBTyxHQUU3QztBQUZZLDhDQUFpQjtBQUk5QixhQUFhO0FBQ2IsU0FBUztBQUNULGNBQWM7QUFDZDtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFJQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKb0MsaUJBQU8sR0FJM0M7QUFKWSwwQ0FBZTtBQUs1QjtJQUFxQyxtQ0FBTztJQUE1Qzs7SUE4QkEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsQ0E5Qm9DLGlCQUFPLEdBOEIzQztBQTlCWSwwQ0FBZTtBQStCNUI7SUFBQTtJQTBDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBO0FBMUNZLGdDQUFVO0FBMkN2QjtJQUFBO0lBeURBLENBQUM7SUFBRCxvQkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksc0NBQWE7QUEwRDFCO0lBQUE7SUFpQ0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxrQ0FBVztBQWtDeEIsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2Q7SUFBeUMsdUNBQU87SUFBaEQ7O0lBaUJBLENBQUM7SUFBRCwwQkFBQztBQUFELENBakJBLEFBaUJDLENBakJ3QyxpQkFBTyxHQWlCL0M7QUFqQlksa0RBQW1CO0FBa0JoQztJQUF5Qyx1Q0FBTztJQUFoRDs7SUFlQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmd0MsaUJBQU8sR0FlL0M7QUFmWSxrREFBbUI7QUFnQmhDLGFBQWE7QUFDYixVQUFVO0FBQ1YsY0FBYztBQUNkO0lBQXdDLHNDQUFPO0lBQS9DOztJQUlBLENBQUM7SUFBRCx5QkFBQztBQUFELENBSkEsQUFJQyxDQUp1QyxpQkFBTyxHQUk5QztBQUpZLGdEQUFrQjtBQUsvQjtJQUF3QyxzQ0FBTztJQUEvQzs7SUFpQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQnVDLGlCQUFPLEdBaUI5QztBQWpCWSxnREFBa0I7QUFtQi9CLGFBQWE7QUFDYixVQUFVO0FBQ1YsY0FBYztBQUNkO0lBQUE7SUFhQSxDQUFDO0lBQUQsY0FBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksMEJBQU87QUFlcEIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBRUEsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnlDLGlCQUFPLEdBRWhEO0FBRlksb0RBQW9CO0FBSWpDO0lBQTBDLHdDQUFPO0lBQWpEOztJQWFBLENBQUM7SUFBRCwyQkFBQztBQUFELENBYkEsQUFhQyxDQWJ5QyxpQkFBTyxHQWFoRDtBQWJZLG9EQUFvQjtBQWVqQztJQUFBO0lBaUJBLENBQUM7SUFBRCxpQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksZ0NBQVU7QUFrQnZCLGFBQWE7QUFDYixXQUFXO0FBQ1gsY0FBYztBQUNkO0lBQXlDLHVDQUFPO0lBQWhEOztJQU1BLENBQUM7SUFBRCwwQkFBQztBQUFELENBTkEsQUFNQyxDQU53QyxpQkFBTyxHQU0vQztBQU5ZLGtEQUFtQjtBQU9oQyxhQUFhO0FBQ2IsU0FBUztBQUNULGNBQWM7QUFDZDtJQUFvQyxrQ0FBTztJQUEzQzs7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKbUMsaUJBQU8sR0FJMUM7QUFKWSx3Q0FBYztBQUszQjtJQUFvQyxrQ0FBTztJQUEzQzs7SUFxQkEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQm1DLGlCQUFPLEdBcUIxQztBQXJCWSx3Q0FBYztBQXVCM0I7SUFBQTtJQWlDQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLGtDQUFXO0FBa0N4QixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLGNBQWM7QUFDZDtJQUEwQyx3Q0FBTztJQUFqRDs7SUFRQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSeUMsaUJBQU8sR0FRaEQ7QUFSWSxvREFBb0I7QUFTakM7SUFBMEMsd0NBQU87SUFBakQ7O0lBS0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHlDLGlCQUFPLEdBS2hEO0FBTFksb0RBQW9CO0FBTWpDLGFBQWE7QUFDYixZQUFZO0FBQ1osY0FBYztBQUNkO0lBQXVDLHFDQUFPO0lBQTlDOztJQVFBLENBQUM7SUFBRCx3QkFBQztBQUFELENBUkEsQUFRQyxDQVJzQyxpQkFBTyxHQVE3QztBQVJZLDhDQUFpQjtBQVM5QjtJQUF1QyxxQ0FBTztJQUE5Qzs7SUFTQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUc0MsaUJBQU8sR0FTN0M7QUFUWSw4Q0FBaUI7QUFVOUI7SUFBeUMsdUNBQU87SUFBaEQ7O0lBT0EsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUHdDLGlCQUFPLEdBTy9DO0FBUFksa0RBQW1CO0FBUWhDLGFBQWE7QUFDYixRQUFRO0FBQ1IsY0FBYztBQUNkO0lBQXNDLG9DQUFPO0lBQTdDOztJQWdCQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCcUMsaUJBQU8sR0FnQjVDO0FBaEJZLDRDQUFnQjtBQWlCN0I7SUFBc0Msb0NBQU87SUFBN0M7O0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnFDLGlCQUFPLEdBRTVDO0FBRlksNENBQWdCO0FBRzdCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0lBQXdDLHNDQUFPO0lBQS9DOztJQU1BLENBQUM7SUFBRCx5QkFBQztBQUFELENBTkEsQUFNQyxDQU51QyxpQkFBTyxHQU05QztBQU5ZLGdEQUFrQjtBQU8vQixhQUFhO0FBQ2IsaUNBQWlDO0FBQ2pDLGNBQWM7QUFDZDtJQUF1QyxxQ0FBTztJQUE5Qzs7SUF3RUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsQ0F4RXNDLGlCQUFPLEdBd0U3QztBQXhFWSw4Q0FBaUI7QUF5RTlCLFlBQVk7QUFDWixlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2Q7SUFBa0MsZ0NBQU87SUFBekM7O0lBR0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FIQSxBQUdDLENBSGlDLGlCQUFPLEdBR3hDO0FBSFksb0NBQVk7QUFJekI7SUFBa0MsZ0NBQU87SUFBekM7O0lBRUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FGQSxBQUVDLENBRmlDLGlCQUFPLEdBRXhDO0FBRlksb0NBQVk7QUFHekIsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7SUFBb0Msa0NBQU87SUFBM0M7O0lBT0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUG1DLGlCQUFPLEdBTzFDO0FBUFksd0NBQWM7QUFRM0IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2Q7SUFBcUMsbUNBQU87SUFBNUM7O0lBV0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWG9DLGlCQUFPLEdBVzNDO0FBWFksMENBQWU7QUFZNUI7SUFBcUMsbUNBQU87SUFBNUM7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGlCQUFPLEdBRTNDO0FBRlksMENBQWU7QUFHNUI7SUFBdUMscUNBQU87SUFBOUM7O0lBYUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYnNDLGlCQUFPLEdBYTdDO0FBYlksOENBQWlCO0FBYzlCO0lBQXVDLHFDQUFPO0lBQTlDOztJQXFCQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxDQXJCc0MsaUJBQU8sR0FxQjdDO0FBckJZLDhDQUFpQjtBQXVCOUI7SUFBdUMscUNBQU87SUFBOUM7O0lBRUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnNDLGlCQUFPLEdBRTdDO0FBRlksOENBQWlCO0FBRzlCLGFBQWE7QUFDYixhQUFhO0FBQ2IsY0FBYztBQUNkO0lBQTJDLHlDQUFPO0lBQWxEOztJQUdBLENBQUM7SUFBRCw0QkFBQztBQUFELENBSEEsQUFHQyxDQUgwQyxpQkFBTyxHQUdqRDtBQUhZLHNEQUFxQjtBQUlsQyxhQUFhO0FBQ2IsVUFBVTtBQUNWLGNBQWM7QUFDZDtJQUF3QyxzQ0FBTztJQUEvQzs7SUFTQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUdUMsaUJBQU8sR0FTOUM7QUFUWSxnREFBa0I7QUFVL0I7SUFBd0Msc0NBQU87SUFBL0M7O0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRnVDLGlCQUFPLEdBRTlDO0FBRlksZ0RBQWtCO0FBRy9CLGFBQWE7QUFDYixRQUFRO0FBQ1IsY0FBYztBQUNkO0lBQTBDLHdDQUFPO0lBQWpEOztJQVNBLENBQUM7SUFBRCwyQkFBQztBQUFELENBVEEsQUFTQyxDQVR5QyxpQkFBTyxHQVNoRDtBQVRZLG9EQUFvQjtBQVVqQztJQUEwQyx3Q0FBTztJQUFqRDs7SUFNQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOeUMsaUJBQU8sR0FNaEQ7QUFOWSxvREFBb0I7QUFPakMsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsSUFBSTtBQUNKLGNBQWM7QUFDZDtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFPQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQb0MsaUJBQU8sR0FPM0M7QUFQWSwwQ0FBZTtBQVE1QjtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsaUJBQU8sR0FFM0M7QUFGWSwwQ0FBZTtBQUc1QjtJQUF1QyxxQ0FBTztJQUE5Qzs7SUFNQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOc0MsaUJBQU8sR0FNN0M7QUFOWSw4Q0FBaUI7QUFPOUIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZDtJQUF5Qyx1Q0FBTztJQUFoRDs7SUFrQkEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQndDLGlCQUFPLEdBa0IvQztBQWxCWSxrREFBbUI7QUFtQmhDO0lBQXlDLHVDQUFPO0lBQWhEOztJQUVBLENBQUM7SUFBRCwwQkFBQztBQUFELENBRkEsQUFFQyxDQUZ3QyxpQkFBTyxHQUUvQztBQUZZLGtEQUFtQjtBQUdoQztJQUEyQyx5Q0FBTztJQUFsRDs7SUFrQkEsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQjBDLGlCQUFPLEdBa0JqRDtBQWxCWSxzREFBcUI7QUFtQmxDLGFBQWE7QUFDYixhQUFhO0FBQ2IsY0FBYztBQUNkO0lBQTZDLDJDQUFPO0lBQXBEOztJQUVBLENBQUM7SUFBRCw4QkFBQztBQUFELENBRkEsQUFFQyxDQUY0QyxpQkFBTyxHQUVuRDtBQUZZLDBEQUF1QjtBQUdwQztJQUE2QywyQ0FBTztJQUFwRDs7SUFFQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNEMsaUJBQU8sR0FFbkQ7QUFGWSwwREFBdUI7QUFHcEM7SUFBQTtJQWtDQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLDRDQUFnQjtBQW1DN0IsYUFBYTtBQUNiLFdBQVc7QUFDWCxjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBY0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZHlDLGlCQUFPLEdBY2hEO0FBZFksb0RBQW9CO0FBZWpDO0lBQTBDLHdDQUFPO0lBQWpEOztJQUVBLENBQUM7SUFBRCwyQkFBQztBQUFELENBRkEsQUFFQyxDQUZ5QyxpQkFBTyxHQUVoRDtBQUZZLG9EQUFvQjtBQUdqQztJQUE0QywwQ0FBTztJQUFuRDs7SUFNQSxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOMkMsaUJBQU8sR0FNbEQ7QUFOWSx3REFBc0I7QUFPbkMsYUFBYTtBQUNiLFVBQVU7QUFDVixjQUFjO0FBQ2Q7SUFBNEMsMENBQU87SUFBbkQ7O0lBS0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTDJDLGlCQUFPLEdBS2xEO0FBTFksd0RBQXNCO0FBTW5DO0lBQTRDLDBDQUFPO0lBQW5EOztJQU9BLENBQUM7SUFBRCw2QkFBQztBQUFELENBUEEsQUFPQyxDQVAyQyxpQkFBTyxHQU9sRDtBQVBZLHdEQUFzQjtBQVFuQyxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixlQUFlO0FBQ2YsY0FBYztBQUNkO0lBQTJDLHlDQUFPO0lBQWxEOztJQUtBLENBQUM7SUFBRCw0QkFBQztBQUFELENBTEEsQUFLQyxDQUwwQyxpQkFBTyxHQUtqRDtBQUxZLHNEQUFxQjtBQU9sQyxhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZDtJQUF5Qyx1Q0FBTztJQUFoRDs7SUFPQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQd0MsaUJBQU8sR0FPL0M7QUFQWSxrREFBbUI7QUFRaEMsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2Q7SUFBeUMsdUNBQU87SUFBaEQ7O0lBRUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRndDLGlCQUFPLEdBRS9DO0FBRlksa0RBQW1CO0FBR2hDLFlBQVk7QUFFWixhQUFhO0FBQ2IsZUFBZTtBQUNmLGNBQWM7QUFDZDtJQUE2QywyQ0FBTztJQUFwRDs7SUFhQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQWJBLEFBYUMsQ0FiNEMsaUJBQU8sR0FhbkQ7QUFiWSwwREFBdUI7QUFlcEM7SUFBd0Msc0NBQU87SUFBL0M7O0lBTUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTnVDLGlCQUFPLEdBTTlDO0FBTlksZ0RBQWtCO0FBUS9CO0lBQXFDLG1DQUFPO0lBQTVDOztJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxDQUZvQyxpQkFBTyxHQUUzQztBQUZZLDBDQUFlO0FBSTVCO0lBQXFDLG1DQUFPO0lBQTVDOztJQUdBLENBQUM7SUFBRCxzQkFBQztBQUFELENBSEEsQUFHQyxDQUhvQyxpQkFBTyxHQUczQztBQUhZLDBDQUFlO0FBSTVCO0lBQW9DLGtDQUFPO0lBQTNDOztJQU1BLENBQUM7SUFBRCxxQkFBQztBQUFELENBTkEsQUFNQyxDQU5tQyxpQkFBTyxHQU0xQztBQU5ZLHdDQUFjO0FBUTNCO0lBQWtDLGdDQUFPO0lBQXpDOztJQWNBLENBQUM7SUFBRCxtQkFBQztBQUFELENBZEEsQUFjQyxDQWRpQyxpQkFBTyxHQWN4QztBQWRZLG9DQUFZO0FBZ0J6QjtJQUFnQyw4QkFBTztJQUF2Qzs7SUFLQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMK0IsaUJBQU8sR0FLdEM7QUFMWSxnQ0FBVTtBQU92QjtJQUFnQyw4QkFBTztJQUF2Qzs7SUFRQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSK0IsaUJBQU8sR0FRdEM7QUFSWSxnQ0FBVTtBQVd2QjtJQUFBO0lBWUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDBCQUFPO0FBY3BCLElBQUk7QUFDSjtJQUF1QyxxQ0FBTztJQUE5Qzs7SUFLQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMc0MsaUJBQU8sR0FLN0M7QUFMWSw4Q0FBaUI7QUFNOUI7SUFBdUMscUNBQU87SUFBOUM7O0lBTUEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTnNDLGlCQUFPLEdBTTdDO0FBTlksOENBQWlCO0FBTzlCO0lBQUE7SUFvQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSw4QkFBUztBQXNDdEI7SUFBcUMsbUNBQU87SUFBNUM7O0lBYUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYm9DLGlCQUFPLEdBYTNDO0FBYlksMENBQWU7QUFlNUI7SUFBcUMsbUNBQU87SUFBNUM7O0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRm9DLGlCQUFPLEdBRTNDO0FBRlksMENBQWU7QUFHNUI7SUFBdUMscUNBQU87SUFBOUM7O0lBZ0JBLENBQUM7SUFBRCx3QkFBQztBQUFELENBaEJBLEFBZ0JDLENBaEJzQyxpQkFBTyxHQWdCN0M7QUFoQlksOENBQWlCO0FBa0I5QjtJQUFvQyxrQ0FBTztJQUEzQzs7SUFXQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVhBLEFBV0MsQ0FYbUMsaUJBQU8sR0FXMUM7QUFYWSx3Q0FBYztBQWEzQixNQUFNO0FBQ047SUFBMkMseUNBQU87SUFBbEQ7O0lBbUJBLENBQUM7SUFBRCw0QkFBQztBQUFELENBbkJBLEFBbUJDLENBbkIwQyxpQkFBTyxHQW1CakQ7QUFuQlksc0RBQXFCO0FBcUJsQyw2QkFBNkI7QUFDN0I7SUFBMkMseUNBQU87SUFBbEQ7O0lBYUEsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYjBDLGlCQUFPLEdBYWpEO0FBYlksc0RBQXFCO0FBZWxDO0lBQUE7SUFLQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLDBEQUF1QjtBQU9wQztJQUEyQyx5Q0FBTztJQUFsRDs7SUFJQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKMEMsaUJBQU8sR0FJakQ7QUFKWSxzREFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4vLyNyZWdpb24gZ2V0dGFibGlzdFxuXG5pbXBvcnQgeyBjc19iYXNlLCBzY19iYXNlLCBPdGhlclVzZXJJbmZvU0QsIENvbW1vblBvc1ZhbFNELCBDb21tb25Qb3NWYWxMaXN0U0QsIFBsYXllckluZm9TRCwgV2VjaGF0SW5mb1NELCBSb29tSW5mb1NELCBVc2VyUmVtYXJrIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvY3NfYmFzZVwiO1xuXG4vLy8gPHN1bW1hcnk+XG4vLy8g6I635Y+W6Ieq5bex5Yib5bu655qE5b635bee5oi/6Ze05YiX6KGoXG4vLy8gPC9zdW1tYXJ5PiBcbmV4cG9ydCBjbGFzcyBjc19nZXR0YWJsZWxpc3RfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGNsdWJpZHg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIHNjX2dldHRhYmxlbGlzdF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5ri45oiP5bGA5pWw5YiX6KGoIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRjOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOavj+WxgOa2iOiAl+mHkeW4gVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGc6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2Q5YiX6KGoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGluZm86IFRhYmxlUm9vbUluZm9UZXhbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFgeiuuOacgOWkp+WIm+W7uuaIv+mXtOaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1heGNvdW50OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlt7LliJvlu7rmiL/pl7TmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjdXJjb3VudDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOoaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpZHg6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOaIv+WNoeW+t+W3nuaIv+mXtOS/oeaBr1xuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBUYWJsZVJvb21JbmZvVGV4IHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOa4uOaIj0lEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2lkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkurrmlbAgIOWHoOS6uuaIv+aYvuekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1hbk51bTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Zy65qyhSURcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsdmlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkElEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWIm+W7uuaXtumXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGN0aW1lOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaAu+WxgOaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1heEM6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bey546p5bGA5pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY0M6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oi/5Li7SURcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvaWQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2Q54q25oCBMOW3suWIm+W7uiAx5bey5byA5bGAIDLlt7Llroznu5MgM+W3suino+aVo1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXnmq5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBicmF0ZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5bGA5ZCO5Ymp5L2Z5pe26Ze0IOenklxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGx0aW1lOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrbmlbDph48gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcGNvdW50OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAgMeihqOekuiDoh6rlt7Hlj4LliqDov4fov5nlsYDmuLjmiI9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBoaXN0OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmuLjmiI/ml7bplb8zMCA2MCA5MFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGR1cjogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnIDkvY7luKblhaVHT0xEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGc6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuWvhueggeaIv1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlzcGFzOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOWwj+W8gOWxgOeOqeWutuaVsOmHj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1pblBDOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDluKblhaXlgI3mlbAwLjV+NFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGludG9yYXRlX21pbjogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRvcmF0ZV9tYXg6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWJjeazqCDlupXms6jnmoQgMueahE7mrKHmlrkgICAxIDIgNCA4IDE2IDIwIDQwXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIHByZUc6IG51bWJlcjtcblxuICAgIHB1YmxpYyBncHM6IG51bWJlcjtcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICAxLuato+W4uOaooeW8j++8jDIu5L+d6Zmp5qih5byP77yMIDMu5bu25pe255yL54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo5ZCN56ewXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1Yk5hbWU6IGNpbmZvW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbotoXnuqfogZTnm5/miL/pl7RcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBJc1N1cHBlcjogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaIv+mXtOWQjeensFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRuYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBBT0bmqKHlvI9cbiAgICAvLy8g5pyA5bCP5L+d55WZ6K6w5YiG5YCN5pWwXG4gICAgLy8vIOacgOWwj+W4puWFpeeahDHoh7MxMOWAjVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEFPRl9UaW1lczogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIGNpbmZvIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqOWQjeensFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNuOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWbvuagh1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xufVxuLy8jZW5kcmVnaW9uXG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDovpPlhaXmiL/lj7fov5vlhaXmjIflrprmoYzlrZDvvIzlsJ3or5XmiL/ljaHmqKHlvI/pgJrnlKhcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfZW50ZXJ0YWJsZW51bV90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgdG51bWJlcjogc3RyaW5nO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vICBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfZW50ZXJ0YWJsZW51bV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOa4uOaIj0lEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7TlkI3np7BcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bmFtZTogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2QSURcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWcuuasoUlEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXliIZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBicmF0ZTogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7Tlj7dcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bnVtOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWvhueggeaIvyDkuJTmmK/miL/kuLvmiY3kvJrmnInlgLzmmL7npLrlh7rmnaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwYXM6IHN0cmluZztcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q2k5qGM6Z2i55qE546p5pyJ5pWw5o2uIOaJgOacieW4plBPU+WAvCDmmK/ku44x5byA5aeL77yMIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBhbHllcmxpc3Q6IE90aGVyVXNlckluZm9TRFtdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliankvZnml7bpl7Qg56eSXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGVmdHM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOa4uOaIj+WGheW3puS4iuinkueahOWlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGphY2twb3Q6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4iuS4gOi9rueahOWlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxwb3Q6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4i+azqOeahOWlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdwb3Q6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkOeKtuaAgVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9yZWNvdmVyOiBUYWJsZVJlY292ZXJUZXhhc1NEO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5bGA6ZyA6KaB55qE5pyA5L2O6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGltaXRnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlt7LplIHlrprnmoTph5HluIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsb2NrZ29sZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bim5YWl5YCN5pWwMC41fjRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbnRvcmF0ZV9taW46IG51bWJlcjtcbiAgICBwdWJsaWMgaW50b3JhdGVfbWF4OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliY3ms6gg5bqV5rOo55qEIDLnmoRO5qyh5pa5ICAgMSAyIDQgOCAxNiAyMCA0MFxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBwcmVnYW1ibGU6IG51bWJlcjtcblxuICAgIHB1YmxpYyBncHM6IG51bWJlcjtcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpumZkOWItmlvc1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlvczogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaIv+S4u+WQjOaEj+W8gOWxgCBcbiAgICAvLy8g6buY6K6k6YO95Li6dHJ1ZVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9wZW5wbGF5OiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oi/5Li75piv5ZCm54K55LqG5byA5bGAXG4gICAgLy8vIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9wbGF5OiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6ZmQ5Yi25YWl5rGg546HXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSW5mbG93OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAgMS7mraPluLjmqKHlvI/vvIwyLuS/nemZqeaooeW8j++8jCAzLuW7tuaXtueci+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdhbWV0eXBlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlt7LnlLPor7fnmoTlu7bml7bmrKHmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBkZWxheXM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW8gOaIt+inhumikSB2aWRlczEyMzQ1IDDooajnpLrkuI3lvIDlkK9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvcGVudjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bu25pe255yL54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZGVsYXk6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW8uuWItuengOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNob3dDYXJkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbmjqfliLbluKblhaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjaW50bzogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW3suWtmOWcqGNsdWIgZ29sZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbotoXnuqfogZTnm5/miL/pl7RcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBJc1N1cHBlcjogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1YmlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/kuLtpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG93bm5lcmlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkurrmlbAgIOWHoOS6uuaIv+aYvuekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1hbk51bTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyA5bCP5byA5bGA546p5a625pWw6YePXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbWluUEM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWQjOi2hee6p+iBlOebn+eahOS/seS5kOmDqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsdWJzbGlzdDogU3VwZXJDbHViW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDotoXnuqfogZTnm58gIOeOqeWutuW4puWFpeS/seS5kOmDqOeahGlkICAgIOWIneWni+S4ujBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbnRvQ2lkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvLrliLbnnIvniYzmrKHmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBmc2hvd251bTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm57uT566X56a75qGMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSXNTZXR0bGU6IGJvb2xlYW47XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3kuIDlhbHlpJrlsJHlsYBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfY3VyVGFibGVPdmVyQ291bnQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDHlvIDlkK9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbnM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeCueWHu+eci+WFrOeJjOasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsaWNrbnVtOiBudW1iZXI7XG5cbiAgICAvLy/otZvkuovnm7jlhbNcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIEFPRuaooeW8j1xuICAgIC8vLyDmnIDlsI/kv53nlZnorrDliIblgI3mlbBcbiAgICAvLy8g5pyA5bCP5bim5YWl55qEMeiHszEw5YCNXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgQU9GX1RpbWVzOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDlvZPliY3nrYnnuqco5q+U6LWb5Zy65LiT55SoKSA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDmnIDlsI/nrYnnuqco5q+U6LWb5Zy65LiT55SoKSA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1pbl9sZXZlbDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5pyA5aSn562J57qnKOavlOi1m+WcuuS4k+eUqCkgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBtYXhfbGV2ZWw6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOavlOi1m+e8luWPtyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNvbXBldGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5q+U6LWb5ZCN56ewIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT4g5aSn55uyIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYmlnYmxpbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlUmVjb3ZlclRleGFzU0Qge1xuICAgIC8vLyA8c3VtbWFyeT4gXG4gICAgLy8vIOahjOWtkOWIneWni+WMliAgIEluaXRpID0gMSwgXG4gICAgLy8vIOacieS6uui/m+S6hu+8jOetieaJgOacieS6uuWHhuWkh++8jOezu+e7n+WPr+S7pei/m+ihjOWIhumFjSAgV2FpdGZvclJlYWR5ID0gMiwgXG4gICAgLy8vIOaJk+eJjOS4rSAgIFBsYXlpbmcgPSAzLCBcbiAgICAvLy8g5YmN572ucGxheWluZ+eKtuaAgSAgIFByZVBsYXlpbmcgPTQsXG4gICAgLy8vIGVuZD0gNVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9zdGF0dXM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuW8g+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyZ2l2ZXVwOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a62546w5Zyo6Lqr5LiK55qE6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJnb2xkOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5LyRXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJsb29rOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5pWyXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJhbGxpbjogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWvueW6lOeahOS4i+azqOWAvCAg5Y+v6IO95Li6MFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyZ2FtYmxlOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omA5pyJ5Lq655qE5YWs5byA5pi+56S677yMICAzfjXlvKBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfb3BlbmNhcmQ6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6Ieq5bey55qE5omL54mMIOWPr+iDveS4uuepulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNob3VwYWk6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y+q5pyJ5L2N572u55qE5Lq655Sz6K+35omN6IO955yL5YiwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJhcHBseTogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOihqOekuui9ruWIsOiwgeaTjeS9nOS6hjpwb3NcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjdG9rZW46IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k+WJjei9ruWIsHRva2Vu55qE5Lq6IOaTjeS9nOWJqeS9meaXtumXtOenklxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGx0OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpKflsI/nm7Lms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfcG9zMmJpZ3NtYWxsOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bqE5a625L2N572uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYmFua3BvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6Zmp5pWw5o2uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5zZGF0YTogc2NfaW5zdG9rZW5fdGV4X25bXTtcbn1cbmV4cG9ydCBjbGFzcyBTdXBlckNsdWIge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo5ZCN56ewXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY25hbWU6IHN0cmluZztcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOoaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjaWQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6Ieq5bex5Zyo6L+Z5Liq5L+x5LmQ6YOo55qE5L2Z6aKdXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1YmdvbGQ6IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDliJvlu7rmiL/pl7Rcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfY3JlYXRldGFibGVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmuLjmiI9JRFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a625Lq65pWwIOiHquWKqOW8gOWni+S6uuaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG51bXBlcnRhYmxlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkurrmlbAgIOWHoOS6uuaIv+aYvuekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1hbk51bTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oC75bGA5pWwIOaaguWumjIwMCDnm7jlvZPkuo7kuI3nlKhcbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgbWF4Q291bnQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJp+ihjOaXtumXtOWIhumSn+aVsCAzMCA2MCA5MCAxMjAgXG4gICAgLy8vIDwvc3VtbWFyeT4gIFxuICAgIHB1YmxpYyBEdXJhdGlvbjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyA5bCP5aSn55uyMTAw5YCNIOWunumZheW4puWFpemcgOimgeWGjSrluKblhaXlgI3mlbAgNTAgMTAwICAyMDAgNTAwIFxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBpbnRvOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDluKblhaXlgI3mlbAwLjV+NFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGludG9yYXRlX21pbjogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRvcmF0ZV9tYXg6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bqV5rOoIDEuMi41LjEwLjIwLjQwIOWwj+ebsuetieS6juW6leazqCDlpKfnm7LmmK/lsI/nm7LkuKTlgI0gc3RyYWRkbGXmmK/lpKfnm7LnmoTkuKTlgI3pgJ9cbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgYmFzZXJhdGU6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWJjeazqCDlupXms6jnmoQgMueahE7mrKHmlrkgICAxIDIgNCA4IDE2IDIwIDQwXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIHByZWdhbWJsZTogbnVtYmVyO1xuXG4gICAgcHVibGljIGdwczogbnVtYmVyO1xuICAgIHB1YmxpYyBpcDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIDEu5q2j5bi45qih5byP77yMMi7kv53pmanmqKHlvI/vvIwgMy7lu7bml7bnnIvniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnYW1ldHlwZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHJvb21pZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aW95Y+L5oi/55qE5a+G56CBIOWbuuWumuiuvue9ruaIkDTkvY3mlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5oi36KeG6aKRIHZpZGVzMTIzNDUgMOihqOekuuS4jeW8gOWQr1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9wZW52OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlu7bml7bnnIvniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBkZWxheTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2hvd0NhcmQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS7juWTquS4quS/seS5kOWIm+W7uueahCDlj6/ku6XkuLow6KGo56S6IOe6r+mHkeW4geaIv+mXtCDlj6rmnInovpPlhaXmiL/pl7Tlj7fov5vljrtcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjbHViaWR4OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7TlkI3np7BcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bmFtZTogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5o6n5Yi25bim5YWlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2ludG86IGJvb2xlYW47XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDogZTnm59pZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGFsbGlhbmNlaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpumZkOWItmlvc1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlvczogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOmZkOWItuWFpeaxoOeOh1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEluZmxvdzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oi/5Li75ZCM5oSP5byA5bGAIFxuICAgIC8vLyDpu5jorqTpg73kuLp0cnVlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgb3BlbnBsYXk6IGJvb2xlYW47XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDliJvlu7rmiL/pl7Rcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfY3JlYXRldGFibGVfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrbkurrmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwbGF5ZXJDb3VudDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBsZXZlbGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmoYzlrZDlj7dcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7Tlj7dcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bnVtYmVyOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliankvZnph5HluIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDoh6rlt7HliJvlu7rmiL/pl7TnmoTliJfooajmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0Y291bnQ6IG51bWJlcjtcbn1cblxuLy/ojrflj5bnjqnlrrbkv6Hmga9cbmV4cG9ydCBjbGFzcyBjc19mcmVzaHBsYXllckluZm9TRCBleHRlbmRzIGNzX2Jhc2Uge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBzY19mcmVzaHBsYXllckluZm9TRCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Luj55CGSURcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBBZ2VudElkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDku6PnkIblkI3np7BcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBBZ2VudE5hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUqOaIt+S/oeaBr1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVzZXI6IFBsYXllckluZm9TRDtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omA5pyJ5ri45oiP5aWW5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYWxsamFja3BvdDogbnVtYmVyO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g55Sz6K+35Z2Q5LiLXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3NpdGRvd25fdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgcHVibGljIHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aW95Y+L6ZyA6KaBIOeahOWvhueggVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBhczogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6buY6K6kMCDvvIzlm57moYznlKgxXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNrZWVwOiBudW1iZXI7XG4gICAgcHVibGljIGxhdDogbnVtYmVyO1xuICAgIHB1YmxpYyBsbmc6IG51bWJlcjtcbiAgICBwdWJsaWMgY2x1YmlkeDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIHNjX3NpdGRvd25fdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlKjmiLfouqvkuIrnmoTph5HluIHpnIDopoHlkIzmraXkuIDkuItcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1Z29sZDogbnVtYmVyO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g6YCa55+l5omA5pyJ5Lq65pyJ5Lq65Z2Q5LiL5LqGXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX3NpdGRvd25fdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm67moIfkvY3nva7mnInkurrov5vlhaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0cG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7TkuK3nmoTlhbbku5bkurpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyOiBPdGhlclVzZXJJbmZvU0Q7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlnKjlnZDkvY3kuIrnmoTlgJLorqHml7ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpZDJrZWVwOiBDb21tb25Qb3NWYWxTRFtdO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOeUs+ivt+WdkOS4iyDkuI3luKblhaUg5pi+56S6562J5b6FIOWNoOS9jeeUqCBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3Nfc2l0ZG93bndhaXRfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOm7mOiupDAg77yM5Zue5qGM55SoMVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlza2VlcDogbnVtYmVyO1xuICAgIHB1YmxpYyBsYXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbG5nOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g5bim5YWl6K+35rGC55qE5pe25YCZ546p5a626KKr5ZCM5oSP5ZCOIOWIt+aWsOeOqeWutuS9meminVxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19yZWZyZXNoYmFsYW5jZV90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a62SURcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS9meminVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW4puWFpeeahCDouqvkuIrnmoTkvZnpop1cbiAgICAvLy8g5YW25LuW6ZyA6KaB55qE5oOF5Ya15LiL5Lyg55qEMFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxvY2tnb2xkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2Nfc2l0ZG93bndhaXRfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOmAmuefpeaJgOacieS6uuacieS6uuWdkOS4i+S6hiDlpITnkIbnrYnlvoXnirbmgIFcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2Nfc2l0ZG93bndhaXRfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm67moIfkvY3nva7mnInkurrov5vlhaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0cG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7TkuK3nmoTlhbbku5bkurpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyOiBPdGhlclVzZXJJbmZvU0Q7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlnKjlnZDkvY3kuIrnmoTlgJLorqHml7ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpZDJrZWVwOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gYXBwbHkgdGltZSAxODDnp5LnmoTlgJLorqHml7bvvIzlpoLmnpzkupvnlKjmiLfov5jlpITnkIbnlLPor7fnirbmgIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBhdGltZTogbnVtYmVyO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOeUs+ivt+WdkOS4iyDkuI3luKblhaUg6YCA5Lmf562J5b6FIOS4jeWNoOS9jSBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3Nfc2l0ZG93bndhaXR1cF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2Nfc2l0ZG93bndhaXR1cF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcblxufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOmAmuefpeaJgOacieS6uuacieS6uuS4jeWNoOW6p+S6hlxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19zaXRkb3dud2FpdHVwX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55uu5qCH5L2N572u5pyJ5Lq66L+b5YWlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oi/6Ze05Lit55qE5YW25LuW5Lq6XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdXNlcjogT3RoZXJVc2VySW5mb1NEO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Zyo5Z2Q5L2N5LiK55qE5YCS6K6h5pe2XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaWQya2VlcDogQ29tbW9uUG9zVmFsU0RbXTtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDnlLPor7fnlZnluqcg5L+d55WZNuWIhumSn1xuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19zaXR1cGtlZXBfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gdHJ1ZSDooajnpLrnlZnluqcgIGZhbHNl6KGo56S656uZ6LW35Zu06KeCXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMga2VlcDogYm9vbGVhbjtcbn1cbmV4cG9ydCBjbGFzcyBzY19zaXR1cGtlZXBfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyB0cnVlIOihqOekuueVmeW6pyAgZmFsc2XooajnpLrnq5notbflm7Top4JcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBrZWVwOiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bey6ZSB5a6a55qE6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbG9ja2dvbGQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19zaXR1cGtlZXBfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpueVmeW6pyAgICDnmoTml7bpl7QgMOihqOekuuS4jemcgOimgeeVmeW6pyDmraPluLjlgLwxfjMwMOenkiAgLTHooajnpLrnq5notbflm7Top4JcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpc0s6IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDnu5PnrpfnprvmoYwg5Y2P6K6uXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2FkdmFuY2VzZXR0bGVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfYWR2YW5jZXNldHRsZV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpue7k+eul+emu+ahjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElzU2V0dGxlOiBib29sZWFuO1xuICAgIC8vLTEg5pyq5Y+C5LiO5ri45oiPIOS4jeiDvee7k+eulyAtMmFsbGlu54q25oCB5LiN6IO957uT566XICAgLTPkv53pmannirbmgIHkuI3og73nu5Pnrpdcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDmnInkurrov5vlhaXkuIDmoYzvvIzmjqjpgIHnu5nov5nkuIDmoYzlhoXnmoTmiYDkurrnmoRcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfZW50ZXJ0YWJsZV90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBwYWx5ZXJsaXN0OiBPdGhlclVzZXJJbmZvU0RbXTtcblxufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOeUs+ivt+WHhuWkhyAgXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3JlYWR5X3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2NfcmVhZHlfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDpgJrnn6XmiYDmnInkurrosIHlh4blpIfkuoZcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfcmVhZHlfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g6L+b5YWl5oi/6Ze05ZCO5byA5aeL5o6o6YCB5q+P5Lq655qE54mMICBfbuihqOekuuaYr+acjeWKoeWZqOaOqOmAgeeahFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY190YWJsZXN0YXJ0X3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDooajnpLrlk6rkuKrnmoTluoRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfYmFua2VyUG9zOiBudW1iZXI7XG4gICAgcHVibGljIF9wb3MyVXNlcklEOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIHB1YmxpYyBfcG9zMkdvbGQ6IENvbW1vblBvc1ZhbFNEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliJ3lp4vkuIvms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfcG9zMkdhbWJsZTogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWkp+Wwj+ebsuazqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyYmlnc21hbGw6IENvbW1vblBvc1ZhbFNEW107XG4gICAgcHVibGljIF9zaG93Q2FyZDogbnVtYmVyW107IC8v6ZyA6KaB5piO55qE54mM77yMIFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6KGo56S65q2k5qyh55qE5bGA5Y+3IOaXtumXtOagvOW8j+e8lueggVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIE1hdGNoQ29kZTogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Ymp5L2Z5pe26Ze0IOenklxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxlZnRzOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliJ3lp4vooaVzdHJhZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3Myc3RyYWQ6IENvbW1vblBvc1ZhbFNEW107XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDnp7vkuIDmrKF0b2tlbiAg55So5oi35Y+v6IO95pyJNOS4quaTjeS9nO+8jO+8jOeci+eJjO+8jOS4i+azqO+8jOaUvuW8g++8jCDmr5TniYzjgJDmnaHku7bpmZDliLbjgJEgXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX3Rva2VuX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3lpITnkIbnmoTku6TniYzmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aWW5rGg55qE6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2phY2twb3Q6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4u+axoOi+ueaxoOm7mOiupOesrOS4gOS4quS4uuS4u+axoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBvdGxpc3Q6IG51bWJlcltdO1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k+WJjei9ruW3suacieeahOacgOWkp+S4i+azqOWAvFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9lbWF4ZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWB6K645pep5bCP5LiL5rOo5YC8ICDkuLow5pe26KGo56S65Y+v5Lul6YCJ5oup55yL54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX21pbjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWB6K645pyA5aSn5Yqg5rOo5YC8IFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9tYXg6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOesrOWHoOi9rlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF90YzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWs54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX0NhcmRzOiBudW1iZXJbXTtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOS4i+azqFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19nYW1ibGVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBtb25leTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Yqg5LqG5YCN5rKh77yfXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYWRkcmF0ZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBjbGFzcyBzY19nYW1ibGVfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDpgJrnn6XmiYDmnInkurrkuIvms6jmiJDlip9cbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfZ2FtYmxlX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b2T5YmN55qE5LiL5rOoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2dhbWJsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBfYWxsaW46IGJvb2xlYW47XG4gICAgcHVibGljIGFkZHJhdGU6IGJvb2xlYW47XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4gOS4qui9rue7k+adn+eahOagh+ivhlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF90dXJuT3ZlcjogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIHBvcyDnmoTph5HluIHlgLxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0Z29sZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyA5ZCO55qE5aWW5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2phY2twb3Q6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOW8g+eJjFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19naXZldXBfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19naXZldXBfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIF9zaG91cGFpOiBudW1iZXJbXTtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDpgJrnn6XmiYDmnInkurrvvIzlvIPniYznirbmgIEgIFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19naXZldXBfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIDkuKrova7nu5PmnZ/nmoTmoIfor4ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfdHVybk92ZXI6IGJvb2xlYW47XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDnu5Pnrpcg6YCa55+l5omA5pyJ5Lq6XG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2VuZF90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55So5oi36Lqr5LiK55qE6YeR5biB6ZyA6KaB5ZCM5q2l5LiA5LiLXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdWdvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOWQjueahOWlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9qYWNrcG90OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlhazniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfQ2FyZHM6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJHb2xkOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6L+Z5bGA5omA5pyJ55qE6L6T6LWiIOmDveaYr+ato+aVsOmcgOimgeagueaNrldpblBPU+WkhOeQhlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyR29sZFdpbjogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8v6LWi5LqG55qE5Lq65YiG5aWW5rGg6L+H56iLXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3BvczJTY29yZTogVGV4YXNDb21wYXJlU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJgOacieS6uueahOaJi+eJjO+8jOW8g+eJjOeahOS6uuS4jeaYvuekuiBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfcG9zMlNob3VQYWk6IENvbW1vblBvc1ZhbExpc3RTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omA5pyJ5Lq655qE5pyA5aSn54mM77yM5byD54mM55qE5Lq65LiN5pi+56S6IFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyTWF4UGFpOiBDb21tb25Qb3NWYWxMaXN0U0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeOqeWutuWPmOaIkOinguS8l+eahOWIl+ihqO+8jFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF93YXRjaGxpc3Q6IENvbW1vblBvc1ZhbFNEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrbnlZnluqcg6ZyA6KaB5aSE55CG5oiQ56a75byA5L2N572u5pi+56S65L+d55WZMzAw56eS55qE5YCS6K6h5pe277yM5aaC5p6c5piv6Ieq5bex6L+Y5pyJ5LiA5Liq5Zue5qGM55qE5oyJ6ZKuXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2tlZXBsaXN0OiBDb21tb25Qb3NWYWxTRFtdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvIDlsYDpnIDopoHnmoTmnIDkvY7ph5HluIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsaW1pdGdvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFqOmDqOeOqeWutuengOeahOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFNob3djYXJkOiBVc2VyQ2FyZHNbXTtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDnp4DniYznmoTnjqnlrrZcbi8vLyA8L3N1bW1hcnk+IFxuZXhwb3J0IGNsYXNzIFVzZXJDYXJkcyB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrZpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVpZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjYXJkczogQ2FyZHNbXTtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDnjqnlrrbnp4DniYznmoTmlbDmja5cbi8vLyA8L3N1bW1hcnk+IFxuZXhwb3J0IGNsYXNzIENhcmRzIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJjGlkeFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNwb3M6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2FyZDogbnVtYmVyO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOavlOeJjOi/h+eoi+eahOWAvO+8jOS7juWkp+WIsOWwj+WIhumSse+8jOWboOS4uuacgOWkp+eJjOWei+WPr+iDveayoeacieWIhuWujOeahFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBUZXhhc0NvbXBhcmVTRCB7XG4gICAgcHVibGljIHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b2T5bGA55qE5LiL5rOo5YC877yM55So5LqO5YiG5Ymy5aWW5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2dvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k+WJjeeahOWlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9qYWNrcG90OiBudW1iZXI7XG4gICAgcHVibGljIFNjb3JlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAx6KGo56S66KaB5pi+56S6Ymlnd2luIOaYr+iHquW3seeahFBPU+aJjeaYvuekuiDlkIzml7bkvJrmuLjmiI/kurrlj5HlhazlkYog5oGt5ZacWFhY5Ye75Lit5py15py16I635b6XWFhY5aWW5rGgIOWlluaxoOS8mumAmuefpeabtOaWsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGJpZ3dpbjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55CG6LWU6aKd5bqmXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2xhaW06IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDor7fmsYLnprvlvIDmoYzlrZDvvIzlkI7pnaLlj6/ku6XlpITnkIbph43mlrDlvIDlp4tcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfYXBwbHlleGl0dGFibGVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55Sz6K+35L2N572uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDop6PmlaPmoYzlrZDljY/orq5cbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfZGlzbWlzc3RhYmxlX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2QaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBzY19kaXNtaXNzdGFibGVfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbmV4cG9ydCBjbGFzcyBzY19hcHBseWV4aXR0YWJsZV90ZXggZXh0ZW5kcyBzY19iYXNlIHsgfVxuXG5leHBvcnQgY2xhc3MgY3NfYmlnZW5kX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIHNjX2JpZ2VuZF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgYmlnZW5kOiBCaWdFbmRJbmZvU0RfdGV4O1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qCH6K+G5piv5ZCm566h55CG5ZGY5oiW6ICF5Yib5bu66ICFXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNuYW1nZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBzY19iaWdlbmRfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgYmlnZW5kOiBCaWdFbmRJbmZvU0RfdGV4O1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qCH6K+G5piv5ZCm566h55CG5ZGY5oiW6ICF5Yib5bu66ICFXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNuYW1nZXI6IGJvb2xlYW47XG59XG5leHBvcnQgY2xhc3MgQmlnRW5kSW5mb1NEX3RleCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAxLTNcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBicjogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5aeL5pe26Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYnRpbWU6IHN0cmluZztcbiAgICBwdWJsaWMgZXRpbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaMgee7reaXtumXtCDliIbpkp/mmL7npLrovazmjaLmiJAwLjVoIDFoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZHVyOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpZbmsaAg5Y+v6IO95Li66LSfIOacieS6uuWHu+S4reacteacteWPr+iDveS4uui0n1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRheDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pys5bGA5oC75omL5pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcGM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacrOWxgOaAu+W4puWFpVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGFsbGludG9nb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiYDmnInlj4LkuI7kurrlkZgg5bey5oyJ6LWi55qE5aSa5bCR6L+b6KGM5LqG5o6S5bqPICBNVlDjgJDotaLmnIDlpJrnmoTjgJEg5aSn6bG844CQ6L6T5pyA5aSa55qE44CRIOWcn+ixquOAkOW4puWFpeacgOWkmueahOOAkSDlnKjmraTmn6Xmib5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnYWlubGlzdDogVGFibGVHYWluU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqei0oeeMrlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEluc3VyVG90YWw6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqOi+k+i1oiAg6LaF57qn6IGU55uf5omN5pyJXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1YldsOiBUYWJsZUNsdWJMb3NlV2luW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqOS/nemZqei+k+i1olxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsdW5iaW5zOiBjbHViaW5mb1tdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm6LaF57qn6IGU55uf5oi/6Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSXNTdXBwZXI6IGJvb2xlYW47XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g5L+x5LmQ6YOo6L6T6LWi57uT5p6EXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIFRhYmxlQ2x1Ykxvc2VXaW4ge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo5ZCN56ewXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1Ym5hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1YmlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqOi+k+i1ou+8iOS/seS5kOmDqOW4ge+8iVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOS/nemZqeaXpeW/l1xuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjbHViaW5mbyB7XG4gICAgcHVibGljIGNsdWJuYW1lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgdXNlcmluZm9zOiBJbnN1cmluZm9bXTtcbn1cblxuZXhwb3J0IGNsYXNzIEluc3VyaW5mbyB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpLTlg49cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBoZWFkdXJsOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWnk+WQjVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqei+k+i1olxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcbn1cblxuXG4vLyNyZWdpb24g5ri45oiP5YaF5oiY57upXG5leHBvcnQgY2xhc3MgY3NfZW50ZXJyb2JvdF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2NfZW50ZXJyb2JvdF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcblxufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g5ri45oiP5YaF5oiY57upXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3RoaXN0b3J5X3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcblxufVxuZXhwb3J0IGNsYXNzIHNjX3RoaXN0b3J5X3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55So5oi35YiX6KGo5YyF5ous5omA5pyJ5Y+C5LiO6L+H5LqG5LiN5ZCr6KeC5LyXXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdWxpc3Q6IFBJbmZvU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOavj+WxgOeahOWOhuWPsuivpuaDhVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR1bGlzdDogVGV4VEluZm9TRFtdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7Tlj7dcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZUlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2hvd0NhcmQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW3sue7j+aUtuiXj+eahOWxgOaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNhdmFOdW06IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOWkp+aUtuiXj+aVsOmHj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1heFNudW06IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBUZXhUSW5mb1NEIHtcbiAgICAvL+aJi+aVsFxuICAgIHB1YmxpYyBoYW5kY291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbWF4cG9rZXI6IG51bWJlcltdO1xuICAgIHB1YmxpYyB3aW51c2VyOiBudW1iZXI7XG4gICAgcHVibGljIHdpbkdvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIGphY2twb3QgKy0g5Y+v6IO95aKe5Yqg5YeP6YCf5aaC5p6c5Y+R5LqG5aSn5aWW5Lmf5Lya5Li6LVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGo6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFrOeJjCBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjOiBudW1iZXJbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWNleWxgOWPguS4jua4uOaIj+aJgOacieeOqeWutuS/oeaBryDmiYvniYwg6IOc6LSfIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRJbmZvOiBUZXhVc2VySW5mb1NEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPlsYDor6bmg4XorrDlvZVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bGlzdDogVGV4QWN0aW9uU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqeaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlwb29sOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmsqHmnInlvIPniYznjqnlrrbkuKrmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBuZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2V5bGA5ZSv5LiAaWQgIOaUtuiXj+S9v+eUqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGluZm9JZDogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5pS26JeP5L+d5a2YXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSXNTYXZhOiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bqE5L2NXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYmFua2VycG9zOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgVGV4VXNlckluZm9TRCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBVc2VySUQgbGlzdCDku451bGlzdOiOt+WPllxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKblvLrliLZzaG9354mM77yIMDrooajnpLrmsqHmnInvvJsx77ya5by65Yi256eA54mM77yJXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc3Q6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YmN5Lik5byg54mMKOWIneWni+W6leeJjClcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwOiBudW1iZXJbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICBcbiAgICAvLy8g56ys5Yeg6L2u5byD55qE54mMICAg5bCP5LqO562J5LqOMSDooajnpLrlj6rmmL7npLrkuKTlvKDniYzog4wg5aaC5p6c5piv6Ieq5bex6KaB5pi+56S65Lik5byg5omL54mM44CCIDLvvIwz77yM6KGo56S65a+55bqU56ys5LiJ77yM56ys5Zub6L2u5byD54mMIDXooajnpLrliIbniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDoh6rlt7HnmoTkuIvms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBnaXZldXAgMSDooajnpLrlvIPniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBndTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oC76LWi55qE6YeR5biBIOWHj+WOu+eojuaUtlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdnOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv53pop1cbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgaW5zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlKjmiLflm77moIcg5qCH6K+GXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDov5nkuIDova7mmK/lkKblvLrliLbnp4DniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBmc2hvdzogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiHquW3seWvueW6lOeahOWFrOeJjOaVsOaNrlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG93bmM6IG51bWJlcltdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljZXlsYDnm67liY3mgLvmiYvmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBoY291bnQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2V5bGA55uu5YmN5oC75bim5YWlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdG90YWxpbnRvOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgVGV4QWN0aW9uU0Qge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6aG65bqPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gVXNlcklEIGxpc3Qg5LuOdWxpc3Tojrflj5ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlKjmiLflm77moIcg5qCH6K+GXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIGFjdGlvbiB0eXBlIHNi5bCP55uyIGJi5aSn55uyIHPvvJpzdHJhZGxsZSBjIGNhbGzot58gZiBmb2xk5byDIEEgYWxsaW4gIFjorqnniYwgIDNC5piv5aSn55qEMi8zICBC5pivMS8yIFxuICAgIC8vLyBSIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGF0OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIvms6jlgLwgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b2T5YmN6L2u5qyhKHBlcmZsb3DjgIFmbG9w44CBdHVybuOAgXNob3dkb3duKVxuICAgIC8vLyDkuZ/lsLHmmK9UZXhhc1R1cm5FbnVtIOWvueW6lOagh+ivhlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR1cm46IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOesrOS4gOi9ruihqOekuuW4puWFpeS9meminVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGpnOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g5pS26JeP5Y2V5bGA54mM5Y2P6K6uXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3RleGFzY29sbGVjdF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDAg6KGo56S65pS26JePICAgMeihqOekuuWIoOmZpCAgIOWIoOmZpOeahOaXtuWAmeWPqumcgOimgWluZm9JZOWPguaVsOS6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y+v6IO95Lya57uZ5q+P5LiA5bGA55qEaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbmZvSWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBzY190ZXhhc2NvbGxlY3RfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlt7Lnu4/mlLbol4/nmoTlsYDmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzYXZhTnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPr+iDveS8mue7meavj+S4gOWxgOeahGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5mb0lkOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuS/neWtmOaUtuiXj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElzU2F2YTogYm9vbGVhbjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDmuLjmiI/miJjnu6nor6bmg4Vcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3Nfcm9vbWhpc3RvcnlfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuXG59XG5leHBvcnQgY2xhc3Mgc2Nfcm9vbWhpc3RvcnlfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlKjmiLfliJfooajljIXmi6zmiYDmnInlj4LkuI7ov4fkuobkuI3lkKvop4LkvJdcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1bGlzdDogUEluZm9TRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+P5bGA55qE5Y6G5Y+y6K+m5oOFXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHVsaXN0OiBUZXhUSW5mb1NEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2hvd0NhcmQ6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOeugOefreeUqOaIt+S/oeaBr1xuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBQSW5mb1NEIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIHVzZXJpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aS05YOPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgd2ljb246IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWQjeensFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdOYW1lOiBzdHJpbmc7XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDor7fmsYLlpZbmsaDor6bmg4UgIOWMheaLrCDlpZbmsaDorrDlvZVcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfZ2V0YWxsamFja3BvdF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcblxufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0YWxsamFja3BvdF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDbkuKrlupXnmq7lr7nlupTnmoTlpZbmsaAgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2Jhc2UycG90OiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyA5aSn6LWi5a62XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLyBwdWJsaWMgX21heDogUG90VXNlckxvZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOi/keaXpeW/l1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8gcHVibGljIHBsb2c6IFBvdFVzZXJMb2dbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFBvdFVzZXJMb2cge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55So5oi35ZCNXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX246IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWlluaxoOexu+Wei1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9qdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2dvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaXtumXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF90aW1lOiBzdHJpbmc7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g6YCa55+l5pu05paw5oC75aWW5rGgXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2FsbGphY2twb3RfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgYWxsamFja3BvdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWo6YOo5ri45oiP5aWW5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2FtZWFsbGphY2s6IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDmuLjmiI/lhoXmiJjnu6lcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfZ2V0Z2Fpbl90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG5cbn1cbmV4cG9ydCBjbGFzcyBzY19nZXRnYWluX3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBqYWNrcG90OiBudW1iZXI7XG4gICAgcHVibGljIGdsaXN0OiBUYWJsZUdhaW5TRFtdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliankvZnml7bpl7Qg56eSXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGVmdHRpbWU6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaXgeinguS/oeaBr1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdsaXN0OiBQbGF5ZXJJbmZvU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi/meahjOS/nemZqeaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEluc3Bvb2w6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIEFPRiDluKblh7rntK/orqFcbiAgICAvLy8g5Li6MOWSjOWFtuS7luaooeW8j+mDveS4jeaYvuekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGRvdXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlR2FpblNEIHtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55So5oi35L+h5oGvXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIHdlY2hhdDogV2VjaGF0SW5mb1NEO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIFxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBVc2VySUQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Yid5aeL5bim5YWlXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIGZpbnRvOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaImOe7qSDmlLbnm4og5q2j6LSfXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIGdhaW46IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJi+aVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBjb3VudDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMeihqOekuuemu+e6v+eKtuaAgVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9mZmxpbmU6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aSn5LqOMOihqOekuui+k+Wutui/lOWIqe+8jOWwj+S6jjDooajnpLrpgIPot5Hmg6nnvZrvvIznrYnkuo4w5LiN5pi+56S6XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgb3RoZXJNb25leTogbnVtYmVyO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOa4uOaIj+WGheWKoOmHkeW4gSAg5ri45oiP57uT5p2f5YmN5Y+q6IO96KGl5YWF5LiA5qyh5LiU5Zyo5LiL5bGA5omN5Lya55Sf5pWIXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2FkZGdvbGRpbmdhbWVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6KGl5YWF55qEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xuICAgIHB1YmxpYyBjbHViaWR4OiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2NfYWRkZ29sZGluZ2FtZV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOihpeWFheeahCDnlKjkuo7lho3mrKHngrnlvIDml7bmmL7npLpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g55Sz6K+356eA6Ieq5bex55qE5omL54mMXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3Nob3dteWNhcmRfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBjYXJkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAw5Y+W5raIICAgIDHlsZXnpLpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2Nfc2hvd215Y2FyZF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDDlj5bmtoggICAgMeWxleekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJjOeahOS9jee9rlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNwb3M6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19zaG93bXljYXJkX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmoLnmja7nlKjmiLdJROaJvuWIsOWQjeWtl+aYvuekulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFVzZXJJRDogbnVtYmVyO1xuICAgIHB1YmxpYyBjYXJkUG9zOiBudW1iZXI7XG4gICAgcHVibGljIGNhcmQ6IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDkv53pmanmqKHlvI9cbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfaW5zdXJhbmNlX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv53pop0gMOihqOekuuS4jeS/neS4u+axoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGluczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omL6YCJ55qE6KGl54mMIG51bGzooajnpLrlhajpgIlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvdXRzOiBudW1iZXJbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICDkv53pop0gMOihqOekuuS4jeS/neWIhuaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGluczMyOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2NfaW5zdXJhbmNlX3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuXG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g6YCa55+l5omA5pyJ5Lq677yM6LSt5Lmw5L+d6ZmpICBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfaW5zdXJhbmNlX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHBvczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6aKdXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5zOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g56e75LiA5qyhdG9rZW4gIOeUqOaIt+WPr+iDveacieS4pOS4quaTjeS9nO+8jOmAieS/nemine+8jOaIluS4jeS/nSAgXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2luc3Rva2VuX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3lpITnkIbnmoTku6TniYzmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aWW5rGg55qE6YeR5biBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2phY2twb3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpJrkuKrkurrlkIzml7bkubDkv53pmanmmL7npLogXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXBvczogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOesrOWHoOi9rlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF90YzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWs54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX0NhcmRzOiBudW1iZXJbXTtcbiAgICAvLy8vLyA8c3VtbWFyeT5cbiAgICAvLy8vLyDlj6/pgInkv53pop3liJfooahcbiAgICAvLy8vLyA8L3N1bW1hcnk+XG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IF9pbGlzdDtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYvuekuuWPguS4jueahOS6uueahOaJi+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3MyU2hvdXBhaTogQ29tbW9uUG9zVmFsTGlzdFNEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmr4/kuKrkurrnmoTog5znjodcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfcG9zMndpbjogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8vLyA8c3VtbWFyeT5cbiAgICAvLy8vLyDooaXniYxcbiAgICAvLy8vLyA8L3N1bW1hcnk+XG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IG91dHM7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlj6/pgInkv53pop3liJfooahcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfaWxpc3QzMjogbnVtYmVyW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDooaXniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvdXRzMzI6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6LWU546HXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcmF0ZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bey6LSt5L+d6aKdXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcbiAgICAvLyA8c3VtbWFyeT5cbiAgICAvLy8g5aWW5rGg5YiX6KGoIOWPr+iDveS4gOS4qiDlj6/og73kuKTkuKog5pyA5aSaM+S4quS6uuS/nemZqSDnrKzkuInkuKrlpZbmsaDmsqHmhI/kuYlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwb3RsaXN0OiBudW1iZXJbXTtcbiAgICAvLy8vLyA8c3VtbWFyeT5cbiAgICAvLy8vLyBtaW5lIGluIGphY2twb3QgXG4gICAgLy8vLy8gPC9zdW1tYXJ5PlxuICAgIC8vcHVibGljIGludCBtcG90O1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gbWluZSBpbiBqYWNrcG90IFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1wb3QzMjogbnVtYmVyO1xuICAgIHB1YmxpYyBtcG90MzE6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOihpeeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG91dHMzMTogbnVtYmVyW107XG4gICAgcHVibGljIF9pbGlzdDMxOiBudW1iZXJbXTtcbn1cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIGRlbGF5XG4vLy8gPHN1bW1hcnk+XG4vLy8g5YiG54mM5pe255Sz6K+35bu25pe2XG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2RlbGF5X3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19kZWxheV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcblxufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOmAmuefpeaJgOacieS6uu+8jOacieS6uueUs+ivt+S6huW7tuaXtlxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19kZWxheV90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBVc2VySUQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGltZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qyh5pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZGVsYXlzOiBudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g6Lii5Lq6ICDku47moYzlrZDkuIos5q2j5Zyo5ri45oiP5Lit5LiN6IO96LiiXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3RpY2t1c2VyX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8v6KaB6Lii55qE5Lq655qEdXNlcmlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAx6KGo56S65by65Yi256uZ6LW377yMMuihqOekuuW8uuWItumAgOWHuuahjOWtkO+8jOi/meS4gOahjOeahOaXtumXtOWGhemDveS4jeiDveWGjeasoei/m+WFpVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY190aWNrdXNlcl90ZXggZXh0ZW5kcyBzY19iYXNlIHtcblxufVxuZXhwb3J0IGNsYXNzIHNjX3RpY2t1c2VyX3RleF9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/kuLtpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG93bmlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDooqvlvLrliLbnq5notbflvpfnjqnlrrZpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGtpY2t1aWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW3sue7j+mUgeWumueahOmHkeW4gVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxvY2tnb2xkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgY3NfdXNlcnJlbWFya190ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOimgeWkh+azqOeahOeOqeWutmlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDopoHlpIfms6jnmoTnjqnlrrblp5PlkI1cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBybmFtZTogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5rOV5aSH5rOoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcFJlbWFyazogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy/moYzlrZBpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkOetiee6p1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIHNjX3VzZXJyZW1hcmtfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDliLfmlrDmoYzlrZDkuIrljZXkuKrnjqnlrrZcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfcmVmcmVzaHRhYmxldXNlcl9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIHVzZXI6IE90aGVyVXNlckluZm9TRDtcbiAgICBwdWJsaWMgVXI6IFVzZXJSZW1hcms7XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g5p+l55yL5YWs54mM5L2Z54mMXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3NlZXJlc3RjYXJkX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2QaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2Nfc2VlcmVzdGNhcmRfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIGNhcmQ6IG51bWJlcltdO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOW8uuWItuengOeJjFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19mb3JjZXNob3djYXJkX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2QaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2NfZm9yY2VzaG93Y2FyZF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgb3RoZXJjYXJkOiBDb21tb25Qb3NWYWxMaXN0U0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW8uuWItueci+eJjOasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGZzaG93bnVtOiBudW1iZXI7XG59XG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiDmiL/kuLvlvIDlsYDljY/orq5cbi8vLyA8c3VtbWFyeT5cbi8vLyBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3Nfb3BlbnBsYXlfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmoYzlrZBpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3Mgc2Nfb3BlbnBsYXlfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbmV4cG9ydCBjbGFzcyBzY19vcGVucGxheV90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5bGA54q25oCBXG4gICAgLy8vIHRydWUgIOW8gOWQryAgIGZhbHNlICDmmoLlgZxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvcGVucGxheTogYm9vbGVhbjtcbn1cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIOeOqeWutuaOp+WItuWNj+iurlxuLy8vIDxzdW1tYXJ5PlxuLy8vIOeUs+ivt+W4puWFpemHkeW4gSAg5L+x5LmQ6YOo5biBXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2FwcGx5c2l0ZG93bl90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bim5YWl6YeR6aKdICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgcHVibGljIGNsdWJpZHg6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDDmma7pgJrnlLPor7cgICAx6KGl5YWF6K6h5YiG55Sz6K+3XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYXR5cGU6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19hcHBseXNpdGRvd25fdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8tMeaIv+mXtOS4jeWtmOWcqCAgIC0y5L2Z6aKd5LiN6LazICAgLTPmnInmnKrlpITnkIbor7fmsYJcbn1cbmV4cG9ydCBjbGFzcyBzY19hcHBseXNpdGRvd25fdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm67moIfkvY3nva7mnInkurrov5vlhaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0cG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/pl7TkuK3nmoTlhbbku5bkurpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyOiBPdGhlclVzZXJJbmZvU0Q7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlnKjlnZDkvY3kuIrnmoTlgJLorqHml7ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpZDJrZWVwOiBDb21tb25Qb3NWYWxTRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gYXBwbHkgdGltZSAxODDnp5LnmoTlgJLorqHml7bvvIzlpoLmnpzkupvnlKjmiLfov5jlpITnkIbnlLPor7fnirbmgIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBhdGltZTogbnVtYmVyO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOiOt+W+l+aIv+S4u+eahOeUs+ivt+WIl+ihqFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19hcHBseWludG9nb2RsaXN0X3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuXG59XG5leHBvcnQgY2xhc3Mgc2NfYXBwbHlpbnRvZ29kbGlzdF90ZXggZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgZGF0YTogYXBwbHlpbnRvZ29kbGlzdFtdO1xufVxuZXhwb3J0IGNsYXNzIGFwcGx5aW50b2dvZGxpc3Qge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55Sz6K+35Lq6aWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBVc2VySWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUs+ivt+S6ulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVuYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDluKblhaXph5Hpop1cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlhaXmsaDnjodcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbnRvcG9vbDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo5ZCN56ewXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1Ym5hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJjOahjOWQjVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRuYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmoYzlrZBpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm6LaF57qn6IGU55uf5oi/6Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSXNTdXBwZXI6IGJvb2xlYW47XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8g5ZCM5oSP5ouS57ud55qE5Y2P6K6uXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2FncmVlaW50b2dvbGRfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAx5ZCM5oSPICAgLTHmi5Lnu51cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlLPor7fkurppZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFVzZXJpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qGM5a2QaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19hZ3JlZWludG9nb2xkX3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLTHmiL/pl7TkuI3lrZjlnKggIFxufVxuZXhwb3J0IGNsYXNzIHNjX2FncmVlaW50b2dvbGRfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm67moIfkvY3nva7mnInkurog56a75byAXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHVzZXJpZDogbnVtYmVyO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOWIt+aWsOeOqeWutuS9meminVxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19yZWZyZXNoYmFsYW5jZV9jbHViIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv7HkuZDpg6hpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsdWJpZDogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIHNjX3JlZnJlc2hiYWxhbmNlX2NsdWIgZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/seS5kOmDqOS9meminVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcblxuICAgIC8vLTHkv7HkuZDpg6jkuI3lrZjlnKhcbn1cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHZtYXN0ZXJcbi8vLyA8c3VtbWFyeT5cbi8vLyDpgJrnn6XkuLvmkq3pnIDopoHlvIDniYzkuoYgIFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY190b2tlbnZtYXN0ZXJfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFrOeJjOaVsCAz6KGo56S65byA5byg77yMNOihqOekuiDlvIDnrKzlm5vlvKDvvIw16KGo56S6IOW8gOesrOS6lOW8oFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNDb3VudDogbnVtYmVyO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g5Li75pKt5pS25Yiw6YCa55+l5ZCO5byA54mM5LqGICDku4XkuLvmkq3nlKhcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfdG9rZW52bWFzdGVyX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XG4gICAgcHVibGljIHRhYmxlaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFrOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9DYXJkczogbnVtYmVyW107XG59XG4vLy8gPHN1bW1hcnk+XG4vLy8gIOS4u+aSreaUtuWIsOmAmuefpeWQjuW8gOeJjOS6hiAg5LuF5Li75pKt55SoICBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfdG9rZW52bWFzdGVyX3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuXG59XG4vLyNlbmRyZWdpb25cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOmAmuefpeaJgOacieS6uueUs+ivt+emu+W8gOahjOWtkFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19hcHBseWV4aXR0YWJsZV90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlrqLmiLflpITnkIYg5aaC5p6c5piv6Ieq5bex5bCx6YCA5Ye65Yiw5aSn5Y6FXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm55WZ5bqnICAgIOeahOaXtumXtCAw6KGo56S65LiN6ZyA6KaB55WZ5bqnIOato+W4uOWAvDF+MzAw56eSXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNLOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBzY19vbmVfZXhpdHRhYmxlX24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIHVzZXJpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc0s6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIGNzX2dldGdhbWVsZXZlbCBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIHNjX2dldGdhbWVsZXZlbCBleHRlbmRzIHNjX2Jhc2Uge1xuXG4gICAgcHVibGljIGxldmVsbGlzdDogUm9vbUluZm9TRFtdO1xufVxuZXhwb3J0IGNsYXNzIHNjX3RqYWNrcG90TG9nIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy/mnIDov5HnmoTkuIDooYzlpKnnmoforrDlvZVcbiAgICBwdWJsaWMgYmlnSmFja3BvdDogSmFja3BvdExvZ1NEO1xuXG4gICAgLy/mnIDov5ExMOihjOWlluaxoOiusOW9lVxuICAgIHB1YmxpYyBkYXRhOiBKYWNrcG90TG9nU0RbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEphY2twb3RMb2dTRCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyB3TmFtZTogc3RyaW5nO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpooblj5bph5Hpop1cbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpKflpZbnsbvlnovvvIgx77ya5aSp55qH77ybMu+8muacteeah++8mzPvvJrmnLXmnLXvvIlcbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgamFja3BvdFR5cGU6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjcmVhdGVUaW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBjc19jaGF0bG9nIGV4dGVuZHMgY3NfYmFzZSB7XG5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfY2hhdGxvZyBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIHB1YmxpYyB0YWJsZUlkOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by55bmV5pWw5o2uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZGF0YTogQmFycmFnZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBCYXJyYWdlIHtcbiAgICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPkeihqOaXtumXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHB0aW1lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29udGVudDogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMeaWh+acrCAgIDLor63pn7NcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG59XG5cbi8v5Li+5oqlXG5leHBvcnQgY2xhc3MgY3NfZ2FtZXJlcG9ydF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4vuaKpemcgOimgeeahOmHkeW4gVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19nYW1lcmVwb3J0X3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLTHkvZnpop3kuI3otrNcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJo+i0ueaIkOWKn+WQjueahOS4vuaKpeasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJlbnVtOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgUmVwb3J0UHJhIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW/heS8oFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEdhbWVJZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vL+W/heS8oCDlha3kvY3moYzlrZDlj7dcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0bnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJjOWxgOWbnumhvuS4vuaKpeeahOaXtuWAmSAg6ZyA6KaB5Lyg6YCS54mM5bGA55qE56ys5Yeg5bGAXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ19pbmZvOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8v5b+F5LygIOS4vuaKpeS6ulxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFVzZXJJZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDooqvkuL7miqXkurppZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFNfVXNlcklkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4vuaKpeeQhueUsVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJlYXNvbjogc3RyaW5nO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuL7miqXnsbvlnovvvJox44CBXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbm90aWNldHlwZTogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBjc19nb2xkYmFja190ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuXG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Zue5pKkaemHkeW4gVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcblxufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ29sZGJhY2tfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8gLTEg5oi/6Ze05LiN5a2Y5ZyoICAgLTLlj6/lm57mkqTnmoTph5Hpop3kuI3otrMgIC0z5LuF6ZmQQU9G5qih5byP5L2/55SoIC016KGo56S65LiN6IO96YeN5aSN55Sz6K+3XG59XG5leHBvcnQgY2xhc3Mgc2NfZ29sZGJhY2tfdGV4X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICAvLy0x6KGo56S65L2Z6aKd5LiN6LazXG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFVzZXJJZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlm57mkqTlkI7nmoTkvZnpop1cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlm57mkqTlkI7ouqvkuIrnmoTkvZnpop1cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1Z29sZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0bm90aWNlX24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgbm90aWNlbGlzdDogc3RyaW5nW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDHmuLjmiI/lhoXot5Hpqaznga/vvIjmr5TlpoLkuK3kuoblpKflpZbvvIlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5ri45oiPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG59XG5cbi8v5q+U6LWb5pu05pawXG5leHBvcnQgY2xhc3Mgc2NfY29tcGV0ZV90YWJsZV9pbmZvIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vLy8gPHN1bW1hcnk+IOW9k+WJjeetiee6pyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIC8vLy8vIDxzdW1tYXJ5PiDmnIDlsI/nrYnnuqcgPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgbWluX2xldmVsOiBudW1iZXI7XG4gICAgLy8vLy8gPHN1bW1hcnk+IOacgOWkp+etiee6pyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBtYXhfbGV2ZWw6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOW9k+WJjeW6leazqCA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBiYXNlcmF0ZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5b2T5YmN5pyA5bCP5aSn55uyMTAw5YCNIOWunumZheW4puWFpemcgOimgeWGjSrluKblhaXlgI3mlbAgNTAgMTAwICAyMDAgNTAwICA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBpbnRvOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDkuIvkuIDmoaPlupXms6ggMS4yLjUuMTAuMjAuNDAg5bCP55uy562J5LqO5bqV5rOoIOWkp+ebsuaYr+Wwj+ebsuS4pOWAjSBzdHJhZGRsZeaYr+Wkp+ebsueahOS4pOWAjemAnyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBuZXh0X2Jhc2VyYXRlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDkuIvkuIDmoaPliY3ms6gg5bqV5rOo55qEIDLnmoRO5qyh5pa5ICAgMSAyIDQgOCAxNiAyMCA0MCA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBuZXh0X3ByZWdhbWJsZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5LiL5LiA5qGj5pyA5bCP5aSn55uyMTAw5YCNIOWunumZheW4puWFpemcgOimgeWGjSrluKblhaXlgI3mlbAgNTAgMTAwICAyMDAgNTAwICA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBuZXh0X2ludG86IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOS4i+S4gOasoeWNh+e6p+aXtumXtCjnp5IpIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbmV4dF91cGxldmVsX3RpbWU6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PiDojrflpZbkv6Hmga8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2NvbXBldGVfYXdhcmRfaW5mbyBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT4g5raI5oGv57G75Z6LOjAu5reY5rGwLDEu6aKB5aWWIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5q+U6LWb57yW5Y+3IDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY29tcGV0ZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDmr5TotZvlkI3np7AgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PiDlvpflpZbnlKjmiLcgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOaOkuWQjSA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJhbms6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOWlluWTgSA8L3N1bW1hcnk+XG4gICAgcHVibGljIGluZm9zOiBDb21wZXRlUHJpemVJbmZvTWVzc2FnZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcGV0ZVByaXplSW5mb01lc3NhZ2Uge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG51bTogbnVtYmVyO1xuICAgIHB1YmxpYyBwaWM6IHN0cmluZztcbiAgICBwdWJsaWMgaXN2YWx1ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIGNzX2NvbXBldGVfdGFibGVfaW5mbyBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcbn0iXX0=