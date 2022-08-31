"use strict";
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