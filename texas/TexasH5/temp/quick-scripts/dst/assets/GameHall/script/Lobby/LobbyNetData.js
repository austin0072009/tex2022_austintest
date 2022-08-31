
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/LobbyNetData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ae74Os9iJLdLO14foQU1xF', 'LobbyNetData');
// GameHall/script/Lobby/LobbyNetData.ts

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
exports.CompetePrizeInfo = exports.CompetePrize = exports.CompeteInfo = exports.sc_compete_list = exports.cs_compete_list = exports.sc_receivemonthaward = exports.cs_receivemonthaward = exports.sc_receiveupaward = exports.cs_receiveupaward = exports.sc_getuservipinfo = exports.cs_getuservipinfo = exports.vipConfig = exports.sc_getvipconfig = exports.cs_getvipconfig = exports.sc_changePassword_bk = exports.cs_changePassword_bk = exports.sc_bindalipaybank = exports.cs_bindalipaybank = exports.sc_mobilephonenum = exports.cs_mobilephonenum = exports.sc_award = exports.cs_award = exports.tasklist = exports.sc_tasklist = exports.cs_tasklist = exports.sc_useprop = exports.cs_useprop = exports.PropInfo = exports.sc_getbackpacklist = exports.cs_getbackpacklist = exports.sc_dealgoldtrade = exports.cs_dealgoldtrade = exports.sc_sendgoldtrade = exports.cs_sendgoldtrade = exports.banklog = exports.sc_enterbank_bk = exports.cs_enterbank_bk = exports.sc_changePassword_appbk = exports.cs_changePassword_appbk = exports.sc_freshplayerInfoSD = exports.cs_freshplayerInfoSD = exports.sc_personalinfo = exports.cs_personalinfo = exports.sc_notice_n = exports.sc_getnotice_n = exports.sc_searchgoldornickname = exports.cs_searchgoldornickname = exports.TableRoomInfoTex = exports.sc_gettablelist_tex = exports.cs_gettablelist_tex = void 0;
exports.cs_entertable_TexBoy = exports.SlotTableData = exports.sc_slotentertable = exports.cs_slotentertable = exports.sc_instoken_tex_n = exports.TableRecoverTexasSD = exports.SuperClub = exports.sc_entertablenum_tex = exports.cs_entertablenum_tex = exports.sc_removeEmail = exports.cs_removeEmail = exports.sc_setemailstate = exports.cs_setemailstate = exports.MailTypeEnum = exports.sc_pushevent_n = exports.EmailinfoSD = exports.sc_getemaillist = exports.cs_getemaillist = exports.sc_fundchange_club = exports.cs_fundchange_club = exports.sc_createtable_tex = exports.cs_createtable_tex = exports.sc_receiveextendgold = exports.cs_receiveextendgold = exports.ExtendUser = exports.sc_extendredinfo = exports.cs_extendredinfo = exports.sc_getcommision = exports.cs_getcommision = exports.sc_setagent_gm = exports.cs_setagent_gm = exports.sc_apply_club = exports.cs_apply_club = exports.ChildrenAgentListSD = exports.sc_getagentinfo = exports.cs_getagentinfo = exports.sc_dealgoldtrade_n = exports.sc_getnotice = exports.cs_getnotice = exports.sc_signup = exports.cs_signup = exports.sc_quit = exports.cs_quit = exports.cs_compete_rank_info = exports.sc_compete_rank_info = exports.RankInfo = exports.TexasLeveInfo = void 0;
var cs_base_1 = require("../../../Script/BaseFrame/cs_base");
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
/**房卡房间信息 */
var TableRoomInfoTex = /** @class */ (function () {
    function TableRoomInfoTex() {
    }
    return TableRoomInfoTex;
}());
exports.TableRoomInfoTex = TableRoomInfoTex;
/**获取用户金币 */
var cs_searchgoldornickname = /** @class */ (function (_super) {
    __extends(cs_searchgoldornickname, _super);
    function cs_searchgoldornickname() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_searchgoldornickname;
}(cs_base_1.cs_base));
exports.cs_searchgoldornickname = cs_searchgoldornickname;
var sc_searchgoldornickname = /** @class */ (function (_super) {
    __extends(sc_searchgoldornickname, _super);
    function sc_searchgoldornickname() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_searchgoldornickname;
}(cs_base_1.sc_base));
exports.sc_searchgoldornickname = sc_searchgoldornickname;
/**游戏跑马灯 */
var sc_getnotice_n = /** @class */ (function (_super) {
    __extends(sc_getnotice_n, _super);
    function sc_getnotice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getnotice_n;
}(cs_base_1.sc_base));
exports.sc_getnotice_n = sc_getnotice_n;
/**大厅跑马灯 */
var sc_notice_n = /** @class */ (function (_super) {
    __extends(sc_notice_n, _super);
    function sc_notice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_notice_n;
}(cs_base_1.sc_base));
exports.sc_notice_n = sc_notice_n;
var cs_personalinfo = /** @class */ (function (_super) {
    __extends(cs_personalinfo, _super);
    function cs_personalinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_personalinfo;
}(cs_base_1.cs_base));
exports.cs_personalinfo = cs_personalinfo;
var sc_personalinfo = /** @class */ (function (_super) {
    __extends(sc_personalinfo, _super);
    function sc_personalinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_personalinfo;
}(cs_base_1.sc_base));
exports.sc_personalinfo = sc_personalinfo;
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
/**設置支付密碼 */
var cs_changePassword_appbk = /** @class */ (function (_super) {
    __extends(cs_changePassword_appbk, _super);
    function cs_changePassword_appbk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_changePassword_appbk;
}(cs_base_1.cs_base));
exports.cs_changePassword_appbk = cs_changePassword_appbk;
var sc_changePassword_appbk = /** @class */ (function (_super) {
    __extends(sc_changePassword_appbk, _super);
    function sc_changePassword_appbk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_changePassword_appbk;
}(cs_base_1.sc_base));
exports.sc_changePassword_appbk = sc_changePassword_appbk;
/**进入银行 */
var cs_enterbank_bk = /** @class */ (function (_super) {
    __extends(cs_enterbank_bk, _super);
    function cs_enterbank_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_enterbank_bk;
}(cs_base_1.cs_base));
exports.cs_enterbank_bk = cs_enterbank_bk;
/**进入银行返回 */
var sc_enterbank_bk = /** @class */ (function (_super) {
    __extends(sc_enterbank_bk, _super);
    function sc_enterbank_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_enterbank_bk;
}(cs_base_1.sc_base));
exports.sc_enterbank_bk = sc_enterbank_bk;
/**银行操作记录 */
var banklog = /** @class */ (function () {
    function banklog() {
    }
    return banklog;
}());
exports.banklog = banklog;
/**转账 */
var cs_sendgoldtrade = /** @class */ (function (_super) {
    __extends(cs_sendgoldtrade, _super);
    function cs_sendgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_sendgoldtrade;
}(cs_base_1.cs_base));
exports.cs_sendgoldtrade = cs_sendgoldtrade;
var sc_sendgoldtrade = /** @class */ (function (_super) {
    __extends(sc_sendgoldtrade, _super);
    function sc_sendgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_sendgoldtrade;
}(cs_base_1.sc_base));
exports.sc_sendgoldtrade = sc_sendgoldtrade;
/**转账确认 */
var cs_dealgoldtrade = /** @class */ (function (_super) {
    __extends(cs_dealgoldtrade, _super);
    function cs_dealgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_dealgoldtrade;
}(cs_base_1.cs_base));
exports.cs_dealgoldtrade = cs_dealgoldtrade;
/**
 * /// 确认接收赠送金币返回
result 1:可以扣款，
2 余额不足不能扣款,
-1 用户账号不存在，
-2给自己赠送金，
-3账号异常（作弊号不能backgold）,
-4用户拒绝接收金币,-5用户不在线
 */
var sc_dealgoldtrade = /** @class */ (function (_super) {
    __extends(sc_dealgoldtrade, _super);
    function sc_dealgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_dealgoldtrade;
}(cs_base_1.sc_base));
exports.sc_dealgoldtrade = sc_dealgoldtrade;
/**获取背包道具列表 */
var cs_getbackpacklist = /** @class */ (function (_super) {
    __extends(cs_getbackpacklist, _super);
    function cs_getbackpacklist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getbackpacklist;
}(cs_base_1.cs_base));
exports.cs_getbackpacklist = cs_getbackpacklist;
var sc_getbackpacklist = /** @class */ (function (_super) {
    __extends(sc_getbackpacklist, _super);
    function sc_getbackpacklist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getbackpacklist;
}(cs_base_1.sc_base));
exports.sc_getbackpacklist = sc_getbackpacklist;
var PropInfo = /** @class */ (function () {
    function PropInfo() {
    }
    return PropInfo;
}());
exports.PropInfo = PropInfo;
/**使用兑换道具 */
var cs_useprop = /** @class */ (function (_super) {
    __extends(cs_useprop, _super);
    function cs_useprop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_useprop;
}(cs_base_1.cs_base));
exports.cs_useprop = cs_useprop;
var sc_useprop = /** @class */ (function (_super) {
    __extends(sc_useprop, _super);
    function sc_useprop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_useprop;
}(cs_base_1.sc_base));
exports.sc_useprop = sc_useprop;
/**任务 列表*/
var cs_tasklist = /** @class */ (function (_super) {
    __extends(cs_tasklist, _super);
    function cs_tasklist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_tasklist;
}(cs_base_1.cs_base));
exports.cs_tasklist = cs_tasklist;
var sc_tasklist = /** @class */ (function (_super) {
    __extends(sc_tasklist, _super);
    function sc_tasklist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_tasklist;
}(cs_base_1.sc_base));
exports.sc_tasklist = sc_tasklist;
var tasklist = /** @class */ (function () {
    function tasklist() {
    }
    return tasklist;
}());
exports.tasklist = tasklist;
/**领取任务奖励 */
var cs_award = /** @class */ (function (_super) {
    __extends(cs_award, _super);
    function cs_award() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_award;
}(cs_base_1.cs_base));
exports.cs_award = cs_award;
var sc_award = /** @class */ (function (_super) {
    __extends(sc_award, _super);
    function sc_award() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_award;
}(cs_base_1.sc_base));
exports.sc_award = sc_award;
/**获取绑定的银行卡和支付宝 */
var cs_mobilephonenum = /** @class */ (function (_super) {
    __extends(cs_mobilephonenum, _super);
    function cs_mobilephonenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_mobilephonenum;
}(cs_base_1.cs_base));
exports.cs_mobilephonenum = cs_mobilephonenum;
var sc_mobilephonenum = /** @class */ (function (_super) {
    __extends(sc_mobilephonenum, _super);
    function sc_mobilephonenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_mobilephonenum;
}(cs_base_1.sc_base));
exports.sc_mobilephonenum = sc_mobilephonenum;
/**绑定银行卡支付宝 */
var cs_bindalipaybank = /** @class */ (function (_super) {
    __extends(cs_bindalipaybank, _super);
    function cs_bindalipaybank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_bindalipaybank;
}(cs_base_1.cs_base));
exports.cs_bindalipaybank = cs_bindalipaybank;
var sc_bindalipaybank = /** @class */ (function (_super) {
    __extends(sc_bindalipaybank, _super);
    function sc_bindalipaybank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_bindalipaybank;
}(cs_base_1.sc_base));
exports.sc_bindalipaybank = sc_bindalipaybank;
/// <summary>
/// 初始化密码
/// </summary>
var cs_changePassword_bk = /** @class */ (function (_super) {
    __extends(cs_changePassword_bk, _super);
    function cs_changePassword_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_changePassword_bk;
}(cs_base_1.cs_base));
exports.cs_changePassword_bk = cs_changePassword_bk;
/// <summary>
/// 初始化密码     -1已经有初始密码
/// </summary>
var sc_changePassword_bk = /** @class */ (function (_super) {
    __extends(sc_changePassword_bk, _super);
    function sc_changePassword_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_changePassword_bk;
}(cs_base_1.sc_base));
exports.sc_changePassword_bk = sc_changePassword_bk;
/**获取VIP配置信息*/
var cs_getvipconfig = /** @class */ (function (_super) {
    __extends(cs_getvipconfig, _super);
    function cs_getvipconfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getvipconfig;
}(cs_base_1.cs_base));
exports.cs_getvipconfig = cs_getvipconfig;
var sc_getvipconfig = /** @class */ (function (_super) {
    __extends(sc_getvipconfig, _super);
    function sc_getvipconfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getvipconfig;
}(cs_base_1.sc_base));
exports.sc_getvipconfig = sc_getvipconfig;
var vipConfig = /** @class */ (function () {
    function vipConfig() {
    }
    return vipConfig;
}());
exports.vipConfig = vipConfig;
/**获取玩家VIP信息 */
var cs_getuservipinfo = /** @class */ (function (_super) {
    __extends(cs_getuservipinfo, _super);
    function cs_getuservipinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getuservipinfo;
}(cs_base_1.cs_base));
exports.cs_getuservipinfo = cs_getuservipinfo;
var sc_getuservipinfo = /** @class */ (function (_super) {
    __extends(sc_getuservipinfo, _super);
    function sc_getuservipinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getuservipinfo;
}(cs_base_1.sc_base));
exports.sc_getuservipinfo = sc_getuservipinfo;
/**领取晋级奖励 */
var cs_receiveupaward = /** @class */ (function (_super) {
    __extends(cs_receiveupaward, _super);
    function cs_receiveupaward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_receiveupaward;
}(cs_base_1.cs_base));
exports.cs_receiveupaward = cs_receiveupaward;
var sc_receiveupaward = /** @class */ (function (_super) {
    __extends(sc_receiveupaward, _super);
    function sc_receiveupaward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_receiveupaward;
}(cs_base_1.sc_base));
exports.sc_receiveupaward = sc_receiveupaward;
/**领取每月奖励 */
var cs_receivemonthaward = /** @class */ (function (_super) {
    __extends(cs_receivemonthaward, _super);
    function cs_receivemonthaward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_receivemonthaward;
}(cs_base_1.cs_base));
exports.cs_receivemonthaward = cs_receivemonthaward;
var sc_receivemonthaward = /** @class */ (function (_super) {
    __extends(sc_receivemonthaward, _super);
    function sc_receivemonthaward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_receivemonthaward;
}(cs_base_1.sc_base));
exports.sc_receivemonthaward = sc_receivemonthaward;
/**获取赛事列表 */
var cs_compete_list = /** @class */ (function (_super) {
    __extends(cs_compete_list, _super);
    function cs_compete_list() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_list;
}(cs_base_1.cs_base));
exports.cs_compete_list = cs_compete_list;
var sc_compete_list = /** @class */ (function (_super) {
    __extends(sc_compete_list, _super);
    function sc_compete_list() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_list;
}(cs_base_1.sc_base));
exports.sc_compete_list = sc_compete_list;
/**比赛信息 */
var CompeteInfo = /** @class */ (function () {
    function CompeteInfo() {
    }
    return CompeteInfo;
}());
exports.CompeteInfo = CompeteInfo;
/**奖励 */
var CompetePrize = /** @class */ (function () {
    function CompetePrize() {
    }
    return CompetePrize;
}());
exports.CompetePrize = CompetePrize;
var CompetePrizeInfo = /** @class */ (function () {
    function CompetePrizeInfo() {
    }
    return CompetePrizeInfo;
}());
exports.CompetePrizeInfo = CompetePrizeInfo;
/**盲注等级信息 */
var TexasLeveInfo = /** @class */ (function () {
    function TexasLeveInfo() {
    }
    return TexasLeveInfo;
}());
exports.TexasLeveInfo = TexasLeveInfo;
var RankInfo = /** @class */ (function () {
    function RankInfo() {
    }
    return RankInfo;
}());
exports.RankInfo = RankInfo;
/** 排名信息*/
var sc_compete_rank_info = /** @class */ (function (_super) {
    __extends(sc_compete_rank_info, _super);
    function sc_compete_rank_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_rank_info;
}(cs_base_1.sc_base));
exports.sc_compete_rank_info = sc_compete_rank_info;
/**获取赛事玩家排名 */
var cs_compete_rank_info = /** @class */ (function (_super) {
    __extends(cs_compete_rank_info, _super);
    function cs_compete_rank_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_rank_info;
}(cs_base_1.cs_base));
exports.cs_compete_rank_info = cs_compete_rank_info;
/**退赛  */
var cs_quit = /** @class */ (function (_super) {
    __extends(cs_quit, _super);
    function cs_quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_quit;
}(cs_base_1.cs_base));
exports.cs_quit = cs_quit;
var sc_quit = /** @class */ (function (_super) {
    __extends(sc_quit, _super);
    function sc_quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_quit;
}(cs_base_1.sc_base));
exports.sc_quit = sc_quit;
/**报名比赛 */
var cs_signup = /** @class */ (function (_super) {
    __extends(cs_signup, _super);
    function cs_signup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_signup;
}(cs_base_1.cs_base));
exports.cs_signup = cs_signup;
var sc_signup = /** @class */ (function (_super) {
    __extends(sc_signup, _super);
    function sc_signup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_signup;
}(cs_base_1.sc_base));
exports.sc_signup = sc_signup;
/**公告 */
var cs_getnotice = /** @class */ (function (_super) {
    __extends(cs_getnotice, _super);
    function cs_getnotice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getnotice;
}(cs_base_1.cs_base));
exports.cs_getnotice = cs_getnotice;
var sc_getnotice = /** @class */ (function (_super) {
    __extends(sc_getnotice, _super);
    function sc_getnotice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getnotice;
}(cs_base_1.sc_base));
exports.sc_getnotice = sc_getnotice;
/// <summary>
/// 确认接收赠送金币推送返回 //result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
/// </summary>
var sc_dealgoldtrade_n = /** @class */ (function (_super) {
    __extends(sc_dealgoldtrade_n, _super);
    function sc_dealgoldtrade_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_dealgoldtrade_n;
}(cs_base_1.sc_base));
exports.sc_dealgoldtrade_n = sc_dealgoldtrade_n;
/// <summary>
/// 获取代理基本信息，我的邀请码 下载地址 我的总佣金 历史佣金
/// </summary>
var cs_getagentinfo = /** @class */ (function (_super) {
    __extends(cs_getagentinfo, _super);
    function cs_getagentinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getagentinfo;
}(cs_base_1.cs_base));
exports.cs_getagentinfo = cs_getagentinfo;
var sc_getagentinfo = /** @class */ (function (_super) {
    __extends(sc_getagentinfo, _super);
    function sc_getagentinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getagentinfo;
}(cs_base_1.sc_base));
exports.sc_getagentinfo = sc_getagentinfo;
var ChildrenAgentListSD = /** @class */ (function () {
    function ChildrenAgentListSD() {
    }
    return ChildrenAgentListSD;
}());
exports.ChildrenAgentListSD = ChildrenAgentListSD;
/// <summary>
/// 申请加入指定俱乐部
/// </summary>
var cs_apply_club = /** @class */ (function (_super) {
    __extends(cs_apply_club, _super);
    function cs_apply_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_apply_club;
}(cs_base_1.cs_base));
exports.cs_apply_club = cs_apply_club;
var sc_apply_club = /** @class */ (function (_super) {
    __extends(sc_apply_club, _super);
    function sc_apply_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_apply_club;
}(cs_base_1.sc_base));
exports.sc_apply_club = sc_apply_club;
/// <summary>
/// 代理授权
/// </summary>
var cs_setagent_gm = /** @class */ (function (_super) {
    __extends(cs_setagent_gm, _super);
    function cs_setagent_gm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_setagent_gm;
}(cs_base_1.cs_base));
exports.cs_setagent_gm = cs_setagent_gm;
/// <summary>
/// 代理授权
/// </summary>
var sc_setagent_gm = /** @class */ (function (_super) {
    __extends(sc_setagent_gm, _super);
    function sc_setagent_gm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_setagent_gm;
}(cs_base_1.sc_base));
exports.sc_setagent_gm = sc_setagent_gm;
/// <summary>
/// 领取佣金
/// </summary>
var cs_getcommision = /** @class */ (function (_super) {
    __extends(cs_getcommision, _super);
    function cs_getcommision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getcommision;
}(cs_base_1.cs_base));
exports.cs_getcommision = cs_getcommision;
var sc_getcommision = /** @class */ (function (_super) {
    __extends(sc_getcommision, _super);
    function sc_getcommision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getcommision;
}(cs_base_1.sc_base));
exports.sc_getcommision = sc_getcommision;
var cs_extendredinfo = /** @class */ (function (_super) {
    __extends(cs_extendredinfo, _super);
    function cs_extendredinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_extendredinfo;
}(cs_base_1.cs_base));
exports.cs_extendredinfo = cs_extendredinfo;
/// <summary>
/// -1社区存在
/// </summary>
var sc_extendredinfo = /** @class */ (function (_super) {
    __extends(sc_extendredinfo, _super);
    function sc_extendredinfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_extendredinfo;
}(cs_base_1.sc_base));
exports.sc_extendredinfo = sc_extendredinfo;
/// <summary>
/// 推广玩家
/// </summary>
var ExtendUser = /** @class */ (function () {
    function ExtendUser() {
    }
    return ExtendUser;
}());
exports.ExtendUser = ExtendUser;
/// <summary>
/// 领取推广金
/// </summary>
var cs_receiveextendgold = /** @class */ (function (_super) {
    __extends(cs_receiveextendgold, _super);
    function cs_receiveextendgold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_receiveextendgold;
}(cs_base_1.cs_base));
exports.cs_receiveextendgold = cs_receiveextendgold;
/// <summary>
/// -1社区不存在   -2推广金余额不足
/// </summary>
var sc_receiveextendgold = /** @class */ (function (_super) {
    __extends(sc_receiveextendgold, _super);
    function sc_receiveextendgold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_receiveextendgold;
}(cs_base_1.sc_base));
exports.sc_receiveextendgold = sc_receiveextendgold;
// 创建德州房间
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
/// <summary>
/// 社区基金转入转出
/// </summary>
var cs_fundchange_club = /** @class */ (function (_super) {
    __extends(cs_fundchange_club, _super);
    function cs_fundchange_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_fundchange_club;
}(cs_base_1.cs_base));
exports.cs_fundchange_club = cs_fundchange_club;
var sc_fundchange_club = /** @class */ (function (_super) {
    __extends(sc_fundchange_club, _super);
    function sc_fundchange_club() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_fundchange_club;
}(cs_base_1.sc_base));
exports.sc_fundchange_club = sc_fundchange_club;
/// <summary>
/// 获取邮件列表
/// </summary>
var cs_getemaillist = /** @class */ (function (_super) {
    __extends(cs_getemaillist, _super);
    function cs_getemaillist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getemaillist;
}(cs_base_1.cs_base));
exports.cs_getemaillist = cs_getemaillist;
var sc_getemaillist = /** @class */ (function (_super) {
    __extends(sc_getemaillist, _super);
    function sc_getemaillist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getemaillist;
}(cs_base_1.sc_base));
exports.sc_getemaillist = sc_getemaillist;
var EmailinfoSD = /** @class */ (function () {
    function EmailinfoSD() {
    }
    return EmailinfoSD;
}());
exports.EmailinfoSD = EmailinfoSD;
var sc_pushevent_n = /** @class */ (function (_super) {
    __extends(sc_pushevent_n, _super);
    function sc_pushevent_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_pushevent_n;
}(cs_base_1.sc_base));
exports.sc_pushevent_n = sc_pushevent_n;
var MailTypeEnum;
(function (MailTypeEnum) {
    /// <summary>
    /// 交易
    /// </summary>
    MailTypeEnum[MailTypeEnum["Trading"] = 1] = "Trading";
    /// <summary>
    /// 系统
    /// </summary>
    MailTypeEnum[MailTypeEnum["System"] = 2] = "System";
    /// <summary>
    /// 个人
    /// </summary>
    MailTypeEnum[MailTypeEnum["personal"] = 3] = "personal";
    /// <summary>
    /// 活动
    /// </summary>
    MailTypeEnum[MailTypeEnum["Activity"] = 4] = "Activity";
})(MailTypeEnum = exports.MailTypeEnum || (exports.MailTypeEnum = {}));
/// <summary>
/// 设置个人邮件状态为已读
/// </summary>
var cs_setemailstate = /** @class */ (function (_super) {
    __extends(cs_setemailstate, _super);
    function cs_setemailstate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_setemailstate;
}(cs_base_1.cs_base));
exports.cs_setemailstate = cs_setemailstate;
var sc_setemailstate = /** @class */ (function (_super) {
    __extends(sc_setemailstate, _super);
    function sc_setemailstate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_setemailstate;
}(cs_base_1.sc_base));
exports.sc_setemailstate = sc_setemailstate;
/// <summary>
/// 删除邮件
/// </summary>
var cs_removeEmail = /** @class */ (function (_super) {
    __extends(cs_removeEmail, _super);
    function cs_removeEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_removeEmail;
}(cs_base_1.cs_base));
exports.cs_removeEmail = cs_removeEmail;
/// <summary>
/// -1 邮件不存在  -2系统邮件不可删除。默认保留7天
/// </summary>
var sc_removeEmail = /** @class */ (function (_super) {
    __extends(sc_removeEmail, _super);
    function sc_removeEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_removeEmail;
}(cs_base_1.sc_base));
exports.sc_removeEmail = sc_removeEmail;
/**德州 */
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
var SuperClub = /** @class */ (function () {
    function SuperClub() {
    }
    return SuperClub;
}());
exports.SuperClub = SuperClub;
var TableRecoverTexasSD = /** @class */ (function () {
    function TableRecoverTexasSD() {
    }
    return TableRecoverTexasSD;
}());
exports.TableRecoverTexasSD = TableRecoverTexasSD;
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
/**忍者 */
var cs_slotentertable = /** @class */ (function (_super) {
    __extends(cs_slotentertable, _super);
    function cs_slotentertable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_slotentertable;
}(cs_base_1.cs_base));
exports.cs_slotentertable = cs_slotentertable;
var sc_slotentertable = /** @class */ (function (_super) {
    __extends(sc_slotentertable, _super);
    function sc_slotentertable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_slotentertable;
}(cs_base_1.sc_base));
exports.sc_slotentertable = sc_slotentertable;
var SlotTableData = /** @class */ (function () {
    function SlotTableData() {
    }
    return SlotTableData;
}());
exports.SlotTableData = SlotTableData;
/**牛仔进入房间 */
var cs_entertable_TexBoy = /** @class */ (function (_super) {
    __extends(cs_entertable_TexBoy, _super);
    function cs_entertable_TexBoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_TexBoy;
}(cs_base_1.cs_base));
exports.cs_entertable_TexBoy = cs_entertable_TexBoy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXExvYmJ5TmV0RGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3STtBQUV4STtJQUF5Qyx1Q0FBTztJQUFoRDs7SUFFQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGd0MsaUJBQU8sR0FFL0M7QUFGWSxrREFBbUI7QUFHaEM7SUFBeUMsdUNBQU87SUFBaEQ7O0lBYUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FiQSxBQWFDLENBYndDLGlCQUFPLEdBYS9DO0FBYlksa0RBQW1CO0FBY2hDLFlBQVk7QUFDWjtJQUFBO0lBc0VBLENBQUM7SUFBRCx1QkFBQztBQUFELENBdEVBLEFBc0VDLElBQUE7QUF0RVksNENBQWdCO0FBd0U3QixZQUFZO0FBQ1o7SUFBNkMsMkNBQU87SUFBcEQ7O0lBRUEsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRjRDLGlCQUFPLEdBRW5EO0FBRlksMERBQXVCO0FBR3BDO0lBQTZDLDJDQUFPO0lBQXBEOztJQUdBLENBQUM7SUFBRCw4QkFBQztBQUFELENBSEEsQUFHQyxDQUg0QyxpQkFBTyxHQUduRDtBQUhZLDBEQUF1QjtBQUlwQyxXQUFXO0FBQ1g7SUFBb0Msa0NBQU87SUFBM0M7O0lBSUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSm1DLGlCQUFPLEdBSTFDO0FBSlksd0NBQWM7QUFLM0IsV0FBVztBQUNYO0lBQWlDLCtCQUFPO0lBQXhDOztJQUlBLENBQUM7SUFBRCxrQkFBQztBQUFELENBSkEsQUFJQyxDQUpnQyxpQkFBTyxHQUl2QztBQUpZLGtDQUFXO0FBa0J4QjtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFZQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0Fab0MsaUJBQU8sR0FZM0M7QUFaWSwwQ0FBZTtBQWM1QjtJQUFxQyxt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aEQ7QUFGWSxvREFBb0I7QUFJakMsYUFBYTtBQUNiLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7SUFBMEMsd0NBQU87SUFBakQ7O0lBNkxBLENBQUM7SUFBRCwyQkFBQztBQUFELENBN0xBLEFBNkxDLENBN0x5QyxpQkFBTyxHQTZMaEQ7QUE3TFksb0RBQW9CO0FBK0xqQztJQUFBO0lBZUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw4QkFBUztBQWlCdEI7SUFBQTtJQXlEQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBO0FBekRZLGtEQUFtQjtBQTJEaEMsYUFBYTtBQUNiLGlDQUFpQztBQUNqQyxjQUFjO0FBQ2Q7SUFBdUMscUNBQU87SUFBOUM7O0lBd0VBLENBQUM7SUFBRCx3QkFBQztBQUFELENBeEVBLEFBd0VDLENBeEVzQyxpQkFBTyxHQXdFN0M7QUF4RVksOENBQWlCO0FBMEU5QixRQUFRO0FBQ1I7SUFBdUMscUNBQU87SUFBOUM7O0lBR0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSHNDLGlCQUFPLEdBRzdDO0FBSFksOENBQWlCO0FBTTlCO0lBQXVDLHFDQUFPO0lBQTlDOztJQWNBLENBQUM7SUFBRCx3QkFBQztBQUFELENBZEEsQUFjQyxDQWRzQyxpQkFBTyxHQWM3QztBQWRZLDhDQUFpQjtBQWU5QjtJQUFBO0lBYUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxzQ0FBYTtBQWUxQixZQUFZO0FBQ1o7SUFBMEMsd0NBQU87SUFBakQ7O0lBS0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHlDLGlCQUFPLEdBS2hEO0FBTFksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uUG9zVmFsTGlzdFNELCBDb21tb25Qb3NWYWxTRCwgY3NfYmFzZSwgT3RoZXJVc2VySW5mb1NELCBQbGF5ZXJJbmZvU0QsIHNjX2Jhc2UgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgY3NfZ2V0dGFibGVsaXN0X3RleCBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIGNsdWJpZHg6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0dGFibGVsaXN0X3RleCBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgLyoq5ri45oiP5bGA5pWw5YiX6KGoICAqL1xyXG4gICAgcHVibGljIHRjOiBudW1iZXJbXTtcclxuICAgIC8qKiDmr4/lsYDmtojogJfph5HluIEqL1xyXG4gICAgcHVibGljIGc6IG51bWJlcjtcclxuICAgIC8qKuWFgeiuuOacgOWkp+WIm+W7uuaIv+mXtOaVsCAqL1xyXG4gICAgcHVibGljIG1heGNvdW50OiBudW1iZXI7XHJcbiAgICAvKirlt7LliJvlu7rmiL/pl7TmlbAgKi9cclxuICAgIHB1YmxpYyBjdXJjb3VudDogbnVtYmVyO1xyXG4gICAgLyoq5qGM5a2Q5YiX6KGoICovXHJcbiAgICBwdWJsaWMgdGluZm86IFRhYmxlUm9vbUluZm9UZXhbXTsgLy9UYWJsZVJvb21JbmZvVGV4XHJcbiAgICAvKiog5L+x5LmQ6YOoaWQqL1xyXG4gICAgcHVibGljIGlkeDogbnVtYmVyO1xyXG59XHJcbi8qKuaIv+WNoeaIv+mXtOS/oeaBryAqL1xyXG5leHBvcnQgY2xhc3MgVGFibGVSb29tSW5mb1RleCB7XHJcbiAgICAvKirmuLjmiI9JRCAqL1xyXG4gICAgcHVibGljIGdpZDogbnVtYmVyO1xyXG4gICAgLyoqIOWcuuasoUlEKi9cclxuICAgIHB1YmxpYyBsdmlkOiBudW1iZXI7XHJcbiAgICAvKirmoYzlrZBJRCAqL1xyXG4gICAgcHVibGljIHRpZDogbnVtYmVyO1xyXG4gICAgLyoq5Yib5bu65pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3RpbWU6IHN0cmluZztcclxuICAgIC8qKuaAu+WxgOaVsCAqL1xyXG4gICAgcHVibGljIG1heEM6IG51bWJlcjtcclxuICAgIC8qKuW3sueOqeWxgOaVsCAqL1xyXG4gICAgcHVibGljIGNDOiBudW1iZXI7XHJcbiAgICAvKirmiL/kuLtJRCAqL1xyXG4gICAgcHVibGljIG9pZDogbnVtYmVyO1xyXG4gICAgLyoqIOahjOWtkOeKtuaAgTDlt7LliJvlu7ogMeW3suW8gOWxgCAy5bey5a6M57uTIDPlt7Lop6PmlaMqL1xyXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XHJcbiAgICAvKiog5bqV5rOoKi9cclxuICAgIHB1YmxpYyBicmF0ZTogbnVtYmVyO1xyXG4gICAgLyoq5byA5bGA5ZCO5Ymp5L2Z5pe26Ze0IOenkiAqL1xyXG4gICAgcHVibGljIGx0aW1lOiBudW1iZXI7XHJcbiAgICAvKiog546p5a625pWw6YePKi9cclxuICAgIHB1YmxpYyBwY291bnQ6IG51bWJlcjtcclxuICAgIC8qKjHooajnpLog6Ieq5bex5Y+C5Yqg6L+H6L+Z5bGA5ri45oiPICovXHJcbiAgICBwdWJsaWMgaGlzdDogbnVtYmVyO1xyXG4gICAgLyoq5ri45oiP5pe26ZW/MzAgNjAgOTAgKi9cclxuICAgIHB1YmxpYyBkdXI6IG51bWJlcjtcclxuICAgIC8qKuacgOS9juW4puWFpUdPTEQgKi9cclxuICAgIHB1YmxpYyBsZzogbnVtYmVyO1xyXG4gICAgLyoqIOaYr+WQpuWvhueggeaIvyovXHJcbiAgICBwdWJsaWMgaXNwYXM6IG51bWJlcjtcclxuICAgIC8qKuacgOWwj+W8gOWxgOeOqeWutuaVsOmHjyAqL1xyXG4gICAgcHVibGljIG1pblBDOiBudW1iZXI7XHJcbiAgICAvKirluKblhaXlgI3mlbAwLjV+NCAqL1xyXG4gICAgcHVibGljIGludG9yYXRlX21pbjogbnVtYmVyO1xyXG4gICAgcHVibGljIGludG9yYXRlX21heDogbnVtYmVyO1xyXG4gICAgLyoq5YmN5rOoIOW6leazqOeahCAy55qETuasoeaWuSAgIDEgMiA0IDggMTYgMjAgNDAgKi9cclxuICAgIHB1YmxpYyBwcmVHOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ3BzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcclxuICAgIC8qKjEu5q2j5bi45qih5byP77yMMi7kv53pmanmqKHlvI/vvIwgMy7lu7bml7bnnIvniYwgKi9cclxuICAgIHB1YmxpYyB0OiBudW1iZXI7XHJcblxyXG4gICAgLyoq5L+x5LmQ6YOo5ZCN56ewICovXHJcbiAgICBwdWJsaWMgY2x1Yk5hbWU6IFtdOyAgLy9MaXN0PGNpbmZvPlxyXG4gICAgLyoq5oi/6Ze05ZCN56ewICovXHJcbiAgICBwdWJsaWMgdG5hbWU6IHN0cmluZztcclxuICAgIC8qKuaYr+WQpumZkOWItuWFpeaxoOeOhyAqL1xyXG4gICAgcHVibGljIEluZmxvdzogbnVtYmVyO1xyXG4gICAgLyoq5oi/6Ze05Lq65pWwICovXHJcbiAgICBwdWJsaWMgbWFuTnVtOiBudW1iZXI7XHJcbiAgICAvKirmmK/lkKbotoXnuqfogZTnm5/miL/pl7QgKi9cclxuICAgIHB1YmxpYyBJc1N1cHBlcjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpb3M6IGJvb2xlYW47XHJcbiAgICAvKirmiL/kuLvlkIzmhI/lvIDlsYAgIOm7mOiupOmDveS4unRydWUgKi9cclxuICAgIHB1YmxpYyBvcGVucGxheTogYm9vbGVhbjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBT0bmqKHlvI9cclxuICAgIC8vLyDmnIDlsI/kv53nlZnorrDliIblgI3mlbBcclxuICAgIC8vLyDmnIDlsI/luKblhaXnmoQx6IezMTDlgI1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgQU9GX1RpbWVzOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5piv5ZCm57uT566X56a75qGMXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIElzU2V0dGxlOiBib29sZWFuO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW3suWtmOWcqGdvbGRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2dvbGQ6IG51bWJlcjtcclxufVxyXG5cclxuLyoq6I635Y+W55So5oi36YeR5biBICovXHJcbmV4cG9ydCBjbGFzcyBjc19zZWFyY2hnb2xkb3JuaWNrbmFtZSBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIHVzZXJpZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBzY19zZWFyY2hnb2xkb3JuaWNrbmFtZSBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nO1xyXG59XHJcbi8qKua4uOaIj+i3kemprOeBryAqL1xyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0bm90aWNlX24gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBub3RpY2VsaXN0OiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xyXG59XHJcbi8qKuWkp+WOhei3kemprOeBryAqL1xyXG5leHBvcnQgY2xhc3Mgc2Nfbm90aWNlX24gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBub3RpY2U6IG5vdGljZTtcclxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG5vdGljZSB7XHJcbiAgICBIZWlnaHQ6IG51bWJlclxyXG4gICAgUGljVXJsOiBzdHJpbmdcclxuICAgIFdpZHRoOiBudW1iZXJcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG4gICAgZW5kdGltZTogc3RyaW5nXHJcbiAgICBpbnRlcnZhbDogbnVtYmVyXHJcbiAgICBtYXJxdWVlVHlwZTogbnVtYmVyXHJcbiAgICBzdGFydHRpbWU6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY3NfcGVyc29uYWxpbmZvIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgVXNlcklkOiBudW1iZXI7XHJcbiAgICAvKiog5aS05YOPIOW4puWQjue8gCovXHJcbiAgICBwdWJsaWMgSGVhZEljb246IHN0cmluZztcclxuICAgIC8qKuaYteensCAqL1xyXG4gICAgcHVibGljIG5pa2VuYW1lOiBzdHJpbmc7XHJcbiAgICAvKiox55S3ICAgMOWlsyAqL1xyXG4gICAgcHVibGljIHNleDogbnVtYmVyO1xyXG4gICAgLyoq57C95ZCNICovXHJcbiAgICBwdWJsaWMgRGVzYzogc3RyaW5nO1xyXG4gICAgLyoq5aS05YOP5qGGICovXHJcbiAgICBwdWJsaWMgSGVhZEZyYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBzY19wZXJzb25hbGluZm8gZXh0ZW5kcyBzY19iYXNlIHtcclxuXHJcbn1cclxuXHJcbi8v6I635Y+W546p5a625L+h5oGvXHJcbmV4cG9ydCBjbGFzcyBjc19mcmVzaHBsYXllckluZm9TRCBleHRlbmRzIGNzX2Jhc2Uge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHNjX2ZyZXNocGxheWVySW5mb1NEIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Luj55CGSURcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgQWdlbnRJZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS7o+eQhuWQjeensFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBBZ2VudE5hbWU6IHN0cmluZztcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnlKjmiLfkv6Hmga9cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdXNlcjogUGxheWVySW5mb1NEO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmiYDmnInmuLjmiI/lpZbmsaBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYWxsamFja3BvdDogbnVtYmVyO1xyXG59XHJcblxyXG4vKiroqK3nva7mlK/ku5jlr4bnorwgKi9cclxuZXhwb3J0IGNsYXNzIGNzX2NoYW5nZVBhc3N3b3JkX2FwcGJrIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICAvKirml6flr4bnoIEgKi9cclxuICAgIHB1YmxpYyBvbGRQYXNzV29yZDogc3RyaW5nO1xyXG4gICAgLyoqIOaWsOWvhueggSovXHJcbiAgICBwdWJsaWMgbmV3UGFzc1dvcmQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfY2hhbmdlUGFzc3dvcmRfYXBwYmsgZXh0ZW5kcyBzY19iYXNlIHtcclxuXHJcbn1cclxuLyoq6L+b5YWl6ZO26KGMICovXHJcbmV4cG9ydCBjbGFzcyBjc19lbnRlcmJhbmtfYmsgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIHB1YmxpYyBwd2Q6IHN0cmluZztcclxufVxyXG4vKirov5vlhaXpk7booYzov5Tlm54gKi9cclxuZXhwb3J0IGNsYXNzIHNjX2VudGVyYmFua19iayBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgLyoq55So5oi36YeR5biBICovXHJcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xyXG4gICAgLyoqIOmTtuihjOmHkeW4gSovXHJcbiAgICBwdWJsaWMgYmFua0dvbGQ6IG51bWJlcjtcclxuICAgIC8qKiDpk7booYzmk43kvZzorrDlvZUqL1xyXG4gICAgcHVibGljIGxvZzogYmFua2xvZ1tdO1xyXG59XHJcbi8qKumTtuihjOaTjeS9nOiusOW9lSAqL1xyXG5leHBvcnQgY2xhc3MgYmFua2xvZyB7XHJcbiAgICAvKiog5pON5L2c5pe26Ze0Ki9cclxuICAgIHB1YmxpYyBPcERhdGU6IHN0cmluZztcclxuICAgIC8qKiDmk43kvZznsbvlnosgMei9rOWFpemTtuihjCAyYmFja2dvbGQqL1xyXG4gICAgcHVibGljIE9wVHlwZTogbnVtYmVyO1xyXG4gICAgLyoq5pON5L2c6YeR6aKdICovXHJcbiAgICBwdWJsaWMgT3BDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG4vKirovazotKYgKi9cclxuZXhwb3J0IGNsYXNzIGNzX3NlbmRnb2xkdHJhZGUgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIC8qKuebruagh+eUqOaItyAqL1xyXG4gICAgcHVibGljIG9ianVzZXJpZDogbnVtYmVyO1xyXG4gICAgLyoq6YeR6aKdICovXHJcbiAgICBwdWJsaWMgR29sZDogbnVtYmVyO1xyXG4gICAgLyoqIHRydWXkuLrntKLopoHvvIxmYWxzZeS4uuWinumAgSovXHJcbiAgICBwdWJsaWMgSXNHZXQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBzY19zZW5kZ29sZHRyYWRlIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICAvKirnm67moIfnlKjmiLcgKi9cclxuICAgIHB1YmxpYyBvYmp1c2VyaWQ6IG51bWJlcjtcclxuICAgIC8qKuebruagh+eUqOaIt+aYteensCAqL1xyXG4gICAgcHVibGljIG9ianVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAvKirlvq7kv6HlpLTlg49JQ09OICovXHJcbiAgICBwdWJsaWMgb2JqdXNlcndpY29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKui9rOi0puehruiupCAqL1xyXG5leHBvcnQgY2xhc3MgY3NfZGVhbGdvbGR0cmFkZSBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgLyoq55uu5qCH55So5oi3ICovXHJcbiAgICBwdWJsaWMgb2JqdXNlcmlkOiBudW1iZXI7XHJcbiAgICAvKirkuqTmmJPph5HluIEgKi9cclxuICAgIHB1YmxpYyBHb2xkOiBudW1iZXI7XHJcbiAgICAvKirpk7booYzlr4bnoIEgKi9cclxuICAgIHB1YmxpYyBiYW5rUGFzc1dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIC8vLyDnoa7orqTmjqXmlLbotaDpgIHph5HluIHov5Tlm54gXHJcbnJlc3VsdCAxOuWPr+S7peaJo+asvu+8jFxyXG4yIOS9memineS4jei2s+S4jeiDveaJo+asvixcclxuLTEg55So5oi36LSm5Y+35LiN5a2Y5Zyo77yMXHJcbi0y57uZ6Ieq5bex6LWg6YCB6YeR77yMXHJcbi0z6LSm5Y+35byC5bi477yI5L2c5byK5Y+35LiN6IO9YmFja2dvbGTvvIksXHJcbi0055So5oi35ouS57ud5o6l5pS26YeR5biBLC0155So5oi35LiN5Zyo57q/XHJcbiAqL1xyXG5leHBvcnQgY2xhc3Mgc2NfZGVhbGdvbGR0cmFkZSBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgcHVibGljIE1zZzogc3RyaW5nO1xyXG59XHJcblxyXG4vKirojrflj5bog4zljIXpgZPlhbfliJfooaggKi9cclxuZXhwb3J0IGNsYXNzIGNzX2dldGJhY2twYWNrbGlzdCBleHRlbmRzIGNzX2Jhc2Uge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0YmFja3BhY2tsaXN0IGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgcHJvcHM6IFByb3BJbmZvW107XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb3BJbmZvIHtcclxuICAgIHB1YmxpYyBQcm9wSUQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBQcm9wTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqMDrph5HluIEgIDE65aS05YOPICAqL1xyXG4gICAgcHVibGljIFByb3BUeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIFByb3BDb3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIEltZ1VybDogc3RyaW5nO1xyXG4gICAgLyoqMDrlhZHmjaIgIDE65L2/55SoICAqL1xyXG4gICAgcHVibGljIFVzZVR5cGU6IG51bWJlclxyXG59XHJcbi8qKuS9v+eUqOWFkeaNoumBk+WFtyAqL1xyXG5leHBvcnQgY2xhc3MgY3NfdXNlcHJvcCBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIFByb3BJRDogbnVtYmVyO1xyXG4gICAgcHVibGljIFByb3BDb3VudDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBzY191c2Vwcm9wIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgUHJvcElEOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUHJvcENvdW50OiBudW1iZXI7XHJcbiAgICAvKirlhZHmjaLnmoTph5HluIEgKi9cclxuICAgIHB1YmxpYyBQcm9wR29sZDogbnVtYmVyO1xyXG4gICAgLyoq55So5oi36YeR5biBICovXHJcbiAgICBwdWJsaWMgVXNlckdvbGQ6IG51bWJlcjtcclxufVxyXG5cclxuLyoq5Lu75YqhIOWIl+ihqCovXHJcbmV4cG9ydCBjbGFzcyBjc190YXNrbGlzdCBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIHVzZXJJZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBzY190YXNrbGlzdCBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgcHVibGljIHRhc2tsaXN0OiB0YXNrbGlzdFtdO1xyXG59XHJcbmV4cG9ydCBjbGFzcyB0YXNrbGlzdCB7XHJcbiAgICAvKirlvZPliY3ku7vliqHlrozmiJDov5vluqYgICovXHJcbiAgICBwdWJsaWMgY3VycmVudDogbnVtYmVyO1xyXG4gICAgLyoq5piv5ZCm6aKG5aWWICovXHJcbiAgICBwdWJsaWMgaXNhd2FyZDogYm9vbGVhbjtcclxuICAgIC8qKuS7u+WKoeaYr+WQpuWujOaIkCAqL1xyXG4gICAgcHVibGljIGlzY29tcGxhdGU6IGJvb2xlYW47XHJcbiAgICAvKirku7vliqHlkI3np7AgICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgLyoq5Lu75Yqh5o+P6L+wICovXHJcbiAgICBwdWJsaWMgcmVtYXJrOiBzdHJpbmc7XHJcbiAgICAvKirku7vliqHnvJblj7cgKi9cclxuICAgIHB1YmxpYyB0YXNraWQ6IG51bWJlcjtcclxuICAgIC8qKuWujOaIkOS7u+WKoemcgOimgeeahOi/m+W6piAgKi9cclxuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xyXG4gICAgLyoq5aWW5YqxICovXHJcbiAgICBwdWJsaWMgcHJpemVzOiB7IG51bTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHBpYzogc3RyaW5nIH1bXTtcclxuICAgIC8qKuexu+WIqygxLuaWsOaJi+S7u+WKoe+8jDIu6LaF5YC85Lu75YqhKSAqL1xyXG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgcGljOiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG4vKirpooblj5bku7vliqHlpZblirEgKi9cclxuZXhwb3J0IGNsYXNzIGNzX2F3YXJkIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFza2lkOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNsYXNzIHNjX2F3YXJkIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICAvKirlpZblirEgKi9cclxuICAgIHB1YmxpYyBwcml6ZXM6IHsgbnVtOiBudW1iZXIsIG5hbWU6IHN0cmluZywgcGljOiBzdHJpbmcgfVtdO1xyXG59XHJcbi8qKuiOt+WPlue7keWumueahOmTtuihjOWNoeWSjOaUr+S7mOWunSAqL1xyXG5leHBvcnQgY2xhc3MgY3NfbW9iaWxlcGhvbmVudW0gZXh0ZW5kcyBjc19iYXNlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIHNjX21vYmlsZXBob25lbnVtIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgVXNlckNhcmQ6IHN0cmluZzsvL+WFheWAvOi0puaIt1xyXG4gICAgcHVibGljIHVOYW1lOiBzdHJpbmc7Ly/nnJ/mraPlp5PlkI1cclxuICAgIHB1YmxpYyBiSWQ6IHN0cmluZzsvL+mTtuihjOi0puWPty8vYmFua1xyXG4gICAgcHVibGljIGJQaG9uZTogc3RyaW5nOy8v6ZO26KGM5omL5py65Y+3XHJcbiAgICAvKirpk7booYzlkI3lrZcgKi9cclxuICAgIHB1YmxpYyBiYW5rOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYUlkOiBzdHJpbmc7Ly/mlK/ku5jlrp3otKblj7cvL2FsaXBheVxyXG4gICAgcHVibGljIGFQaG9uZTogc3RyaW5nOy8v5pSv5LuY5a6d5omL5py65Y+3XHJcbiAgICAvKirmmK/lkKborr7nva7ov4fkuqTmmJPlr4bnoIEgIDHmmK8gICAgICAw5ZCmICovXHJcbiAgICBwdWJsaWMgcHdkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYk5hbWU6IHN0cmluZzsgLy/mjIHljaHkurrlp5PlkI1cclxufVxyXG4vKirnu5Hlrprpk7booYzljaHmlK/ku5jlrp0gKi9cclxuZXhwb3J0IGNsYXNzIGNzX2JpbmRhbGlwYXliYW5rIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICAvKiox57uR5a6a5pSv5LuY5a6dICAgMue7keWumumTtuihjOWNoSAqL1xyXG4gICAgcHVibGljIHQ6IG51bWJlcjtcclxuICAgIC8qKiDnjqnlrrZpZCovXHJcbiAgICBwdWJsaWMgdWlkOiBudW1iZXI7XHJcbiAgICAvKirmlK/ku5jlrp3lp5PlkI0gIOaIliAg6ZO26KGM5Y2h5oyB5pyJ5Lq6ICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgLyoq5pSv5LuY5a6d6LSm5Y+3IOmTtuihjOWNoeWNoeWPtyAqL1xyXG4gICAgcHVibGljIGFjY291bnQ6IHN0cmluZztcclxuICAgIC8qKiDpk7booYzlkI3lrZcqL1xyXG4gICAgcHVibGljIGJhbms6IHN0cmluZztcclxuICAgIC8qKuWbveWutiAqL1xyXG4gICAgcHVibGljIGNvdW50cnk6IHN0cmluZztcclxuICAgIC8qKuW8gOaIt+aUr+ihjCAqL1xyXG4gICAgcHVibGljIGJyYW5jaDogc3RyaW5nO1xyXG4gICAgLyoq5Lqk5piT5a+G56CBICovXHJcbiAgICBwdWJsaWMgcHdkOiBzdHJpbmc7XHJcbiAgICAvKirlvIDmiLfooYzmiYDlnKjnnIHku70gKi9cclxuICAgIHB1YmxpYyBwcm92aW5jZTogU3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBzY19iaW5kYWxpcGF5YmFuayBleHRlbmRzIHNjX2Jhc2Uge1xyXG5cclxufVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g5Yid5aeL5YyW5a+G56CBXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBjbGFzcyBjc19jaGFuZ2VQYXNzd29yZF9iayBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaWsOWvhueggVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBuZXdQYXNzV29yZDogc3RyaW5nO1xyXG59XHJcblxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDliJ3lp4vljJblr4bnoIEgICAgIC0x5bey57uP5pyJ5Yid5aeL5a+G56CBXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBjbGFzcyBzY19jaGFuZ2VQYXNzd29yZF9iayBleHRlbmRzIHNjX2Jhc2Uge1xyXG59XHJcblxyXG4vKirojrflj5ZWSVDphY3nva7kv6Hmga8qL1xyXG5leHBvcnQgY2xhc3MgY3NfZ2V0dmlwY29uZmlnIGV4dGVuZHMgY3NfYmFzZSB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBzY19nZXR2aXBjb25maWcgZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBjb25maWc6IHZpcENvbmZpZztcclxufVxyXG5leHBvcnQgY2xhc3MgdmlwQ29uZmlnIHtcclxuICAgIC8qKuaKmOaJoyAqL1xyXG4gICAgcHVibGljIERpc2NvdW50OiBudW1iZXJbXTtcclxuICAgIC8qKuWFjeiyu+aPkOasvuasoeaVuCAqL1xyXG4gICAgcHVibGljIEZyZWVXaXRoZHJhd1RpbWVzOiBudW1iZXJbXTtcclxuICAgIC8qKuWNh+e6p+aJgOmcgOepjeWIhiAqL1xyXG4gICAgcHVibGljIFVwRXhwczogbnVtYmVyW107XHJcbiAgICAvKirllq7nrYbmj5Dnj77ph5HpoY0gKi9cclxuICAgIHB1YmxpYyBXaXRoZHJhd0xpbWl0OiBudW1iZXJbXTtcclxuICAgIC8qKuaZiee0muemrumHkSAqL1xyXG4gICAgcHVibGljIFVwUmV3YXJkOiBudW1iZXJbXTtcclxuICAgIC8qKuavj+aciOemrumHkSAqL1xyXG4gICAgcHVibGljIE1vbnRoUmV3YXJkOiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoq6I635Y+W546p5a62VklQ5L+h5oGvICovXHJcbmV4cG9ydCBjbGFzcyBjc19nZXR1c2VydmlwaW5mbyBleHRlbmRzIGNzX2Jhc2Uge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0dXNlcnZpcGluZm8gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIC8qKuW9k+WJjeenr+WIhiAqL1xyXG4gICAgcHVibGljIGN1cnJTY29yZTogbnVtYmVyO1xyXG4gICAgLyoq5b2T5YmN57uP6aqMICovXHJcbiAgICBwdWJsaWMgY3VyckV4cDogbnVtYmVyO1xyXG4gICAgLyoq5pmL57qn56S86YeR54q25oCBIDA65pyq6aKG5Y+WICAxOuW3sumihuWPliAgMjrkuI3lj6/pooblj5YgKi9cclxuICAgIHB1YmxpYyBVcEF3YXJkU3RhdHVzOiBudW1iZXI7XHJcbiAgICAvKirmr4/mnIjlpZblirHnirbmgIEgMDrmnKrpooblj5YgIDE65bey6aKG5Y+WICAyOuS4jeWPr+mihuWPliAqL1xyXG4gICAgcHVibGljIE1vbnRoQXdhcmRTdGF0dXM6IG51bWJlcjtcclxufVxyXG4vKirpooblj5bmmYvnuqflpZblirEgKi9cclxuZXhwb3J0IGNsYXNzIGNzX3JlY2VpdmV1cGF3YXJkIGV4dGVuZHMgY3NfYmFzZSB7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBzY19yZWNlaXZldXBhd2FyZCBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgLyoq6Ieq6Lqr6YeR5biBICovXHJcbiAgICBwdWJsaWMgTXlTY29yZTogbnVtYmVyO1xyXG4gICAgLyoq5aWW5Yqx56S86YeRICovXHJcbiAgICBwdWJsaWMgQXdhcmRTY29yZTogbnVtYmVyO1xyXG59XHJcbi8qKumihuWPluavj+aciOWlluWKsSAqL1xyXG5leHBvcnQgY2xhc3MgY3NfcmVjZWl2ZW1vbnRoYXdhcmQgZXh0ZW5kcyBjc19iYXNlIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIHNjX3JlY2VpdmVtb250aGF3YXJkIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICAvKiroh6rouqvph5HluIEgKi9cclxuICAgIHB1YmxpYyBNeVNjb3JlOiBudW1iZXI7XHJcbiAgICAvKirlpZblirHnpLzph5EgKi9cclxuICAgIHB1YmxpYyBBd2FyZFNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG4vKirojrflj5botZvkuovliJfooaggKi9cclxuZXhwb3J0IGNsYXNzIGNzX2NvbXBldGVfbGlzdCBleHRlbmRzIGNzX2Jhc2Uge1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfY29tcGV0ZV9saXN0IGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgY29tcGV0ZXM6IENvbXBldGVJbmZvW107XHJcbn1cclxuLyoq5q+U6LWb5L+h5oGvICovXHJcbmV4cG9ydCBjbGFzcyBDb21wZXRlSW5mbyB7XHJcbiAgICAvKirmr5TotZvnsbvlnosgKi9cclxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XHJcbiAgICAvKirmr5TotZvnvJblj7cgKi9cclxuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcclxuICAgIC8qKuW8gOi1m+aXtumXtCAqL1xyXG4gICAgcHVibGljIFN0YXJ0VGltZTogc3RyaW5nO1xyXG4gICAgLyoq5aCx5ZCN5byA5aeL5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgU2lnbnVwVGltZTogc3RyaW5nO1xyXG4gICAgLyoq6IO95ZCm5oql5ZCNICovXHJcbiAgICBwdWJsaWMgY2Fuc2lnbnVwOiBib29sZWFuO1xyXG4gICAgLyoq5piv5ZCm5Y+C5Yqg5LqG5q+U6LWbICovXHJcbiAgICBwdWJsaWMgSXNTaWdudXA6IGJvb2xlYW47XHJcbiAgICAvKirmr5TotZvmmK/lkKblvIDlp4sgKi9cclxuICAgIHB1YmxpYyBDb21wZXRlU3RhcnQ6IGJvb2xlYW47XHJcbiAgICAvKirmiqXlkI3otLkgKi9cclxuICAgIHB1YmxpYyBmcmVlOiB7IG5hbWU6IHN0cmluZywgbnVtOiBudW1iZXIsIHBpYzogc3RyaW5nIH1bXTtcclxuICAgIC8qKuWlluWKsSAqL1xyXG4gICAgcHVibGljIHByaXplczogQ29tcGV0ZVByaXplW107XHJcbiAgICAvKirlpZbmsaAgICovXHJcbiAgICBwdWJsaWMgcHJpemVwb29sOiBudW1iZXI7XHJcbiAgICAvKiog5pyA5aSn54mM5qGM5Lq65pWwKi9cclxuICAgIHB1YmxpYyB0YWJsZW1heGNvdW50OiBudW1iZXI7XHJcbiAgICAvKirljYfnuqfml7bpl7Qo5rao55uy5pe26Ze0KTog56eSICovXHJcbiAgICBwdWJsaWMgbGV2ZWx1cHRpbWU6IG51bWJlcjtcclxuICAgIC8qKuWkjea0u+asoeaVsCAqL1xyXG4gICAgcHVibGljIHJlYmlydGg6IG51bWJlcjtcclxuICAgIC8qKuebsuazqOetiee6p+S/oeaBryAgKi9cclxuICAgIHB1YmxpYyBsZXZlbGluZm9zOiBUZXhhc0xldmVJbmZvW107ICAvL0xpc3Q8VGV4YXNMZXZlSW5mbz4gXHJcbiAgICAvKirmiqXlkI3kurrmlbAgKi9cclxuICAgIHB1YmxpYyBzaWdudXBjb3VudDogbnVtYmVyO1xyXG4gICAgLyoq5pyA5L2O5Y+C6LWb5Lq65pWwICovXHJcbiAgICBwdWJsaWMgbWluY291bnQ6IG51bWJlcjtcclxuICAgIC8qKuacgOWkp+WPgui1m+S6uuaVsCAqL1xyXG4gICAgcHVibGljIG1heGNvdW50OiBudW1iZXI7XHJcbiAgICAvKirotZvkuovlkI3lrZcgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKirmiqXlkI3lu7bov5/ml7bpl7Qg56eSICovXHJcbiAgICBwdWJsaWMgc2lnbnVwZGVsYXk6IG51bWJlcjtcclxuICAgIC8qKuWIneWni+mHkeW4gSAqL1xyXG4gICAgcHVibGljIGluaXRzY29yZTogbnVtYmVyO1xyXG5cclxufVxyXG4vKirlpZblirEgKi9cclxuZXhwb3J0IGNsYXNzIENvbXBldGVQcml6ZSB7XHJcbiAgICAvKiog6LW35aeL5o6S5ZCNKi9cclxuICAgIHB1YmxpYyBzdGFyYW5rOiBudW1iZXI7XHJcbiAgICAvKirnu5PmnZ/mjpLlkI0gKi9cclxuICAgIHB1YmxpYyBlbmRyYW5rOiBudW1iZXI7XHJcbiAgICAvKirlpZblk4EgKi9cclxuICAgIHB1YmxpYyBwcml6ZXM6IENvbXBldGVQcml6ZUluZm9bXTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ29tcGV0ZVByaXplSW5mbyB7XHJcbiAgICAvKirlpZblk4HmlbDph48s5piv5ZCm5piv5YC857G75Z6LKHRydWUu5YC857G75Z6L77yMZmxhc2Uu5q+U5L6L57G75Z6LKSAqL1xyXG4gICAgcHVibGljIGlzdmFsdWU6IGJvb2xlYW47XHJcbiAgICAvKirlpZblk4Hnsbvlnoso6YGT5YW357yW5Y+3KSAqL1xyXG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcclxuICAgIC8qKuWlluWTgeaVsOmHjyAqL1xyXG4gICAgcHVibGljIG51bTogbnVtYmVyO1xyXG4gICAgLyoq5ZCN5a2XICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKirnm7Lms6jnrYnnuqfkv6Hmga8gKi9cclxuZXhwb3J0IGNsYXNzIFRleGFzTGV2ZUluZm8ge1xyXG4gICAgLyoq562J57qnICovXHJcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcclxuICAgIC8qKiDlupXms6go5bCP55uyKSAqL1xyXG4gICAgcHVibGljIGJhc2VnYW1ibGU6IG51bWJlcjtcclxuICAgIC8qKuWJjeazqCAqL1xyXG4gICAgcHVibGljIHByZWdhbWJsZTogbnVtYmVyO1xyXG4gICAgLyoq5aSn55uyICovXHJcbiAgICBwdWJsaWMgTWF4YmxpbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmtJbmZvIHtcclxuICAgIHB1YmxpYyBwbGF5ZXJpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwaWM6IHN0cmluZztcclxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHJhbms6IG51bWJlcjtcclxufVxyXG4vKiog5o6S5ZCN5L+h5oGvKi9cclxuZXhwb3J0IGNsYXNzIHNjX2NvbXBldGVfcmFua19pbmZvIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgY29tcGV0ZWlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaW5mb3M6IFJhbmtJbmZvW107XHJcbn1cclxuXHJcbi8qKuiOt+WPlui1m+S6i+eOqeWutuaOkuWQjSAqL1xyXG5leHBvcnQgY2xhc3MgY3NfY29tcGV0ZV9yYW5rX2luZm8gZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKirpgIDotZsgICovXHJcbmV4cG9ydCBjbGFzcyBjc19xdWl0IGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29tcGV0ZWlkOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNsYXNzIHNjX3F1aXQgZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuLyoq5oql5ZCN5q+U6LWbICovXHJcbmV4cG9ydCBjbGFzcyBjc19zaWdudXAgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY2xhc3Mgc2Nfc2lnbnVwIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbi8qKuWFrOWRiiAqL1xyXG5leHBvcnQgY2xhc3MgY3NfZ2V0bm90aWNlIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgX3Q6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0bm90aWNlIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgbm90aWNlbGlzdDogbm90aWNlW107XHJcbiAgICAvKirlm77niYflnLDlnYAgKi9cclxuICAgIHB1YmxpYyBQaWNVcmw6IHN0cmluZztcclxufVxyXG5cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOehruiupOaOpeaUtui1oOmAgemHkeW4geaOqOmAgei/lOWbniAvL3Jlc3VsdCAxOuWPr+S7peaJo+asvu+8jDIg5L2Z6aKd5LiN6Laz5LiN6IO95omj5qy+LC0xIOeUqOaIt+i0puWPt+S4jeWtmOWcqO+8jC0y57uZ6Ieq5bex6LWg6YCB77yMLTPotKblj7flvILluLjvvIjkvZzlvIrlj7fkuI3og71iYWNrZ29sZO+8iSwtNOeUqOaIt+aLkue7neaOpeaUtumHkeW4gSwtNeeUqOaIt+S4jeWcqOe6v1xyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3Mgc2NfZGVhbGdvbGR0cmFkZV9uIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgb2JqdXNlcmlkOiBudW1iZXI7ICAgICAgLy/lr7nmlrnnlKjmiLdcclxuICAgIHB1YmxpYyBvYmp1c2VybmFtZTogc3RyaW5nOyAgLy/lr7nmlrnnlKjmiLfmmLXnp7BcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuqTmmJPph5HluIFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgR29sZDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOiOt+WPluS7o+eQhuWfuuacrOS/oeaBr++8jOaIkeeahOmCgOivt+eggSDkuIvovb3lnLDlnYAg5oiR55qE5oC75L2j6YeRIOWOhuWPsuS9o+mHkVxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfZ2V0YWdlbnRpbmZvIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgaWR4OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNsYXNzIHNjX2dldGFnZW50aW5mbyBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOeItue6p+S7o+eQhklEXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBGVXNlcklEOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVXNlcklkOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS7o+eQhuiOt+W+l+W3sumihuWPlueahOWOhuWPskpCXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBHb2xkSGlzdG9yeUM6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDku6PnkIbojrflvpfnmoTmnKrpooblj5bnmoRKQiDlkKvlpZbmsaDmnaXmupBcclxuICAgIC8vLyA8L3N1bW1hcnk+IFxyXG4gICAgcHVibGljIEdvbGRDOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5LqM57u056CB6Lev5b6EXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBRUlBhdGg6IHN0cmluZztcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gICDoh6rlt7HnmoTpgoDor7fnoIFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgQ29kZTogc3RyaW5nO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmnIDov5HkuIDmrKHnmoTnu5Pnrpfml7bpl7QgXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBsYXN0ZGVhbHRpbWU6IHN0cmluZztcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5LiL57qn57uZ5oiR55qE5omA5pyJ5rWB5rC0ICAg5pys5ZGo5Lia57upXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNoaWxkd2F0ZXI6IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5LiL57qn57uZ5oiR55qE5omA5pyJ5rWB5rC0ICAg5pys5ZGo5L2j6YeRXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHdlZWtDb21taXNpb246IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Luj55CG5oC75Lq65pWwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGFnZW50Y291bnQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlvZPml6Xku6PnkIbkurrmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY3VyckFnZW50Q291bnQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuIDnuqfku6PnkIbkurrmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYWdlbnQxY291bnQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuIrnuqfnu5nmiJHliIbphY3nmoQwfjEwMCAw5LiN5pi+56S6XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHJhdGU6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlpKfkuo4x5bCx5piv5Luj55CGXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGlzYWdlbnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjYWxpc3Q6IENoaWxkcmVuQWdlbnRMaXN0U0RbXTtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5LuK5pel5L2j6YeRICAgMTIz57qn55qE6L+U5YipXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHRDb21taXNpb246IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDku4rml6XmtLvot4NcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdGFjdGl2ZTogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDku4rml6XmlrDlop5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdGFkZG51bTogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDntK/orqHkvaPph5FcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW5jb21lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbHY6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjbHVidXNlcmlkOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOekvuWMuuWlluWKseivtOaYjlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyByZXdhcmQ6IHN0cmluZztcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g56S+5Yy65ZCNXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsdWJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOiBlOebn+WQjVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBhbGxpZG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hpbGRyZW5BZ2VudExpc3RTRCB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5oiR55qE546p5a62IOS6jOe6pyDkuInnuqdcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgbHY6IG51bWJlcjtcclxuICAgIHB1YmxpYyBVc2VySUQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaAu+aJi+aVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwY291bnQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDku4rml6XotKHnjK5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdGluY29tZTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOe0r+iuoei0oeeMrlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbmNvbWU6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDms6jlhozml7bpl7RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcmVndGltZTogc3RyaW5nO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaYr+WQpuaYr+S7o+eQhuS6hlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpc2FnZW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOe7meS4i+S4gOe6p+eahOavlOS+iyAwfjEwMFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyByYXRlOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOeUs+ivt+WKoOWFpeaMh+WumuS/seS5kOmDqFxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfYXBwbHlfY2x1YiBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIGlkeDogbnVtYmVyO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAx56S+5Yy65rWB56iLICAgMOihqOekuuS/seS5kOmDqOa1geeoi1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBzY19hcHBseV9jbHViIGV4dGVuZHMgc2NfYmFzZSB7XHJcblxyXG59XHJcblxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDku6PnkIbmjojmnYNcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGNsYXNzIGNzX3NldGFnZW50X2dtIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgdXNlcklkOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOezu+e7n+e7meeahOacgOWkp+WIhumFjeavlOS+i1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzaG93cmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkv7HkuZDpg6hpZFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbHViaWQ6IG51bWJlcjtcclxufVxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDku6PnkIbmjojmnYNcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGNsYXNzIHNjX3NldGFnZW50X2dtIGV4dGVuZHMgc2NfYmFzZSB7XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOmihuWPluS9o+mHkVxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfZ2V0Y29tbWlzaW9uIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNsdWJpZDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBzY19nZXRjb21taXNpb24gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjc19leHRlbmRyZWRpbmZvIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g56S+5Yy6aWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaWR4OiBudW1iZXI7XHJcbn1cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8gLTHnpL7ljLrlrZjlnKhcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGNsYXNzIHNjX2V4dGVuZHJlZGluZm8gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlj43liKnntK/orqHnm67moIflgLxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYWdlbnRUYXJnZXQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDph5Hpop1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaAu+mihuWPlumHkeminVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyByZWNlaXZlZ29sZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOacqumihuWPlumHkeminVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBOb1JlY2VpdmVHb2xkOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5rS75Yqo5o+P6L+wXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGRlczogc3RyaW5nO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS4i+e6p+WSjOiHquW3seeahOaVsOaNrlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjYWxpc3Q6IEV4dGVuZFVzZXJbXTtcclxufVxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDmjqjlub/njqnlrrZcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZFVzZXIge1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOetiee6p1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBsdjogbnVtYmVyO1xyXG4gICAgcHVibGljIFVzZXJJRDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDntK/orqHlj43liKlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW5jb21lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgSXNSZWNlaXZlOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOmihuWPluaOqOW5v+mHkVxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfcmVjZWl2ZWV4dGVuZGdvbGQgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnpL7ljLppZFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpZHg6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnjqnlrrZpZCAg5Y+v6IO95piv6Ieq5bex55qEaWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XHJcbn1cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8gLTHnpL7ljLrkuI3lrZjlnKggICAtMuaOqOW5v+mHkeS9memineS4jei2s1xyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3Mgc2NfcmVjZWl2ZWV4dGVuZGdvbGQgZXh0ZW5kcyBzY19iYXNlIHtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8g5Yib5bu65b635bee5oi/6Ze0XHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOWIm+W7uuaIv+mXtFxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfY3JlYXRldGFibGVfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5ri45oiPSURcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g546p5a625Lq65pWwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIG51bXBlcnRhYmxlOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaAu+WxgOaVsCDmmoLlrpoyMDAg55u45b2T5LqO5LiN55SoXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBtYXhDb3VudDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaJp+ihjOaXtumXtOWIhumSn+aVsCAzMCA2MCA5MCAxMjAgXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiAgXHJcbiAgICBwdWJsaWMgRHVyYXRpb246IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmnIDlsI/lpKfnm7IxMDDlgI0g5a6e6ZmF5bim5YWl6ZyA6KaB5YaNKuW4puWFpeWAjeaVsCA1MCAxMDAgIDIwMCA1MDAgXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBpbnRvOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5bim5YWl5YCN5pWwMC41fjRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50b3JhdGVfbWluOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaW50b3JhdGVfbWF4OiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW6leazqCAxLjIuNS4xMC4yMC40MCDlsI/nm7LnrYnkuo7lupXms6gg5aSn55uy5piv5bCP55uy5Lik5YCNIHN0cmFkZGxl5piv5aSn55uy55qE5Lik5YCN6YCfXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBiYXNlcmF0ZTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWJjeazqCDlupXms6jnmoQgMueahE7mrKHmlrkgICAxIDIgNCA4IDE2IDIwIDQwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBwcmVnYW1ibGU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ3BzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAgMS7mraPluLjmqKHlvI/vvIwyLuS/nemZqeaooeW8j++8jCAzLuW7tuaXtueci+eJjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBnYW1ldHlwZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyByb29taWQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlpb3lj4vmiL/nmoTlr4bnoIEg5Zu65a6a6K6+572u5oiQNOS9jeaVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlvIDmiLfop4bpopEgdmlkZXMxMjM0NSAw6KGo56S65LiN5byA5ZCvXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIG9wZW52OiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW7tuaXtueci+eJjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBkZWxheTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW8uuWItuengOeJjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzaG93Q2FyZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS7juWTquS4quS/seS5kOWIm+W7uueahCDlj6/ku6XkuLow6KGo56S6IOe6r+mHkeW4geaIv+mXtCDlj6rmnInovpPlhaXmiL/pl7Tlj7fov5vljrtcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2x1YmlkeDogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmiL/pl7TlkI3np7BcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6ZmQ5Yi25YWl5rGg546HXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIEluZmxvdzogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkurrmlbAgIOWHoOS6uuaIv+aYvuekulxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBtYW5OdW06IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5piv5ZCm5o6n5Yi25bim5YWlICDpu5jorqRmYWxzZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjaW50bzogYm9vbGVhbjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6IGU55ufaWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYWxsaWFuY2VpZDogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmmK/lkKbpmZDliLZpb3NcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW9zOiBib29sZWFuO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmiL/kuLvlkIzmhI/lvIDlsYAgXHJcbiAgICAvLy8g6buY6K6k6YO95Li6dHJ1ZVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBvcGVucGxheTogYm9vbGVhbjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAx5byA5ZCvXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGluczogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIEFPRuaooeW8j1xyXG4gICAgLy8vIOacgOWwj+S/neeVmeiusOWIhuWAjeaVsFxyXG4gICAgLy8vIOacgOWwj+W4puWFpeeahDHoh7MxMOWAjVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBBT0ZfVGltZXM6IG51bWJlcjtcclxufVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g5Yib5bu65oi/6Ze0XHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBjbGFzcyBzY19jcmVhdGV0YWJsZV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnjqnlrrbkurrmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGxheWVyQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gbGV2ZWxpZFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBsZXZlbGlkOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOahjOWtkOWPt1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5oi/6Ze05Y+3XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHRudW1iZXI6IHN0cmluZztcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDliankvZnph5HluIFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDoh6rlt7HliJvlu7rmiL/pl7TnmoTliJfooajmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOekvuWMuuWfuumHkei9rOWFpei9rOWHulxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfZnVuZGNoYW5nZV9jbHViIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gMei9rOWFpSAgIDLovazlh7pcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnpL7ljLppZFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbHViaWQ6IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6L2s5YWl6L2s5Ye655qE6YeR6aKdXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGdvbGQ6IG51bWJlcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBzY19mdW5kY2hhbmdlX2NsdWIgZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIC8vLTHln7rph5HkuI3otrMgIC0y5L2Z6aKd5LiN6LazICAgLTPnpL7ljLrkuI3lrZjlnKhcclxufVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g6I635Y+W6YKu5Lu25YiX6KGoXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBjbGFzcyBjc19nZXRlbWFpbGxpc3QgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAw5Liq5Lq66YKu5Lu2LDHns7vnu5/pgq7ku7YgLDIg5rS75YqoXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGVtYWlsVHlwZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgc2NfZ2V0ZW1haWxsaXN0IGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgZW1haWxsaXN0OiBFbWFpbGluZm9TRFtdO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbWFpbGluZm9TRCB7XHJcbiAgICBwdWJsaWMgdHJhZGVubzogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29udGVudDogc3RyaW5nO1xyXG4gICAgcHVibGljIF90aW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgX3R5cGU6IE1haWxUeXBlRW51bTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuqTmmJPlhoXlrrnnirbmgIHvvIww5aSx6LSl77yMMeaIkOWKn1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfY3N0YXRlOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5piv5ZCm5bey5p+l55yLXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGlzbG9vazogYm9vbGVhbjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Y+R5Lu25Lq6SURcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZnJvbVVzZXJpZDogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlj5Hku7bkurrlkI3np7BcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZnJvbVVzZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaUtuS7tuS6uiAg5Y+v6IO95pivMFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBUb1VzZXJJZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgc2NfcHVzaGV2ZW50X24gZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIHB1YmxpYyBUeXBlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1haWxUeXBlRW51bSB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Lqk5piTXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgVHJhZGluZyA9IDEsXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g57O757ufXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgU3lzdGVtID0gMixcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuKrkurpcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwZXJzb25hbCA9IDMsXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5rS75YqoXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQWN0aXZpdHkgPSA0XHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOiuvue9ruS4quS6uumCruS7tueKtuaAgeS4uuW3suivu1xyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3Nfc2V0ZW1haWxzdGF0ZSBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIHRyYWRlTm86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHNjX3NldGVtYWlsc3RhdGUgZXh0ZW5kcyBzY19iYXNlIHtcclxuXHJcbn1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOWIoOmZpOmCruS7tlxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3MgY3NfcmVtb3ZlRW1haWwgZXh0ZW5kcyBjc19iYXNlIHtcclxuICAgIHB1YmxpYyB0cmFkZU5vOiBzdHJpbmc7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5pS25Lu25Lq6ICDlj6/og73mmK8wXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIFRvVXNlcklkOiBudW1iZXI7XHJcbn1cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8gLTEg6YKu5Lu25LiN5a2Y5ZyoICAtMuezu+e7n+mCruS7tuS4jeWPr+WIoOmZpOOAgum7mOiupOS/neeVmTflpKlcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGNsYXNzIHNjX3JlbW92ZUVtYWlsIGV4dGVuZHMgc2NfYmFzZSB7XHJcblxyXG59XHJcblxyXG5cclxuLyoq5b635beeICovXHJcbmV4cG9ydCBjbGFzcyBjc19lbnRlcnRhYmxlbnVtX3RleCBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIHRudW1iZXI6IHN0cmluZztcclxufVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8gIFxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgY2xhc3Mgc2NfZW50ZXJ0YWJsZW51bV90ZXggZXh0ZW5kcyBzY19iYXNlIHtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmuLjmiI9JRFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmiL/pl7TlkI3np7BcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgdG5hbWU6IHN0cmluZztcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmoYzlrZBJRFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWcuuasoUlEXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5bqV5YiGXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGJyYXRlOiBudW1iZXI7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaIv+mXtOWPt1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0bnVtOiBzdHJpbmc7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWvhueggeaIvyDkuJTmmK/miL/kuLvmiY3kvJrmnInlgLzmmL7npLrlh7rmnaVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFzOiBzdHJpbmc7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOatpOahjOmdoueahOeOqeacieaVsOaNriDmiYDmnInluKZQT1PlgLwg5piv5LuOMeW8gOWni++8jCBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcGFseWVybGlzdDogT3RoZXJVc2VySW5mb1NEW107XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWJqeS9meaXtumXtCDnp5JcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgbGVmdHM6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmuLjmiI/lhoXlt6bkuIrop5LnmoTlpZbmsaBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgamFja3BvdDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS4iuS4gOi9rueahOWlluaxoFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBscG90OiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5LiL5rOo55qE5aWW5rGgXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGdwb3Q6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmoYzlrZDnirbmgIFcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3JlY292ZXI6IFRhYmxlUmVjb3ZlclRleGFzU0Q7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5byA5bGA6ZyA6KaB55qE5pyA5L2O6YeR5biBXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGxpbWl0Z29sZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW3sumUgeWumueahOmHkeW4gVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBsb2NrZ29sZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW4puWFpeWAjeaVsDAuNX40XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGludG9yYXRlX21pbjogbnVtYmVyO1xyXG4gICAgcHVibGljIGludG9yYXRlX21heDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWJjeazqCDlupXms6jnmoQgMueahE7mrKHmlrkgICAxIDIgNCA4IDE2IDIwIDQwXHJcbiAgICAvLy8gPC9zdW1tYXJ5PiBcclxuICAgIHB1YmxpYyBwcmVnYW1ibGU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ3BzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmmK/lkKbpmZDliLZpb3NcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW9zOiBib29sZWFuO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaIv+S4u+WQjOaEj+W8gOWxgCBcclxuICAgIC8vLyDpu5jorqTpg73kuLp0cnVlXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIG9wZW5wbGF5OiBib29sZWFuO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaIv+S4u+aYr+WQpueCueS6huW8gOWxgFxyXG4gICAgLy8vIFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBvcGxheTogYm9vbGVhbjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDpmZDliLblhaXmsaDnjodcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgSW5mbG93OiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gIDEu5q2j5bi45qih5byP77yMMi7kv53pmanmqKHlvI/vvIwgMy7lu7bml7bnnIvniYxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZ2FtZXR5cGU6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlt7LnlLPor7fnmoTlu7bml7bmrKHmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgZGVsYXlzOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5byA5oi36KeG6aKRIHZpZGVzMTIzNDUgMOihqOekuuS4jeW8gOWQr1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBvcGVudjogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW7tuaXtueci+eJjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBkZWxheTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW8uuWItuengOeJjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBzaG93Q2FyZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaYr+WQpuaOp+WItuW4puWFpVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjaW50bzogYm9vbGVhbjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlt7LlrZjlnKhjbHViIGdvbGRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2dvbGQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmmK/lkKbotoXnuqfogZTnm5/miL/pl7RcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgSXNTdXBwZXI6IGJvb2xlYW47XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5L+x5LmQ6YOoaWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2x1YmlkOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5oi/5Li7aWRcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgb3dubmVyaWQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkurrmlbAgIOWHoOS6uuaIv+aYvuekulxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBtYW5OdW06IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmnIDlsI/lvIDlsYDnjqnlrrbmlbDph49cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgbWluUEM6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlkIzotoXnuqfogZTnm5/nmoTkv7HkuZDpg6hcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2x1YnNsaXN0OiBTdXBlckNsdWJbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDotoXnuqfogZTnm58gIOeOqeWutuW4puWFpeS/seS5kOmDqOeahGlkICAgIOWIneWni+S4ujBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW50b0NpZDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW8uuWItueci+eJjOasoeaVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBmc2hvd251bTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaYr+WQpue7k+eul+emu+ahjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBJc1NldHRsZTogYm9vbGVhbjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlvZPliY3kuIDlhbHlpJrlsJHlsYBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX2N1clRhYmxlT3ZlckNvdW50OiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gMeW8gOWQr1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBpbnM6IG51bWJlcjtcclxuXHJcbiAgICAvLy/otZvkuovnm7jlhbNcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBBT0bmqKHlvI9cclxuICAgIC8vLyDmnIDlsI/kv53nlZnorrDliIblgI3mlbBcclxuICAgIC8vLyDmnIDlsI/luKblhaXnmoQx6IezMTDlgI1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgQU9GX1RpbWVzOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+IOW9k+WJjeetiee6pyjmr5TotZvlnLrkuJPnlKgpIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PiDmnIDlsI/nrYnnuqco5q+U6LWb5Zy65LiT55SoKSA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgbWluX2xldmVsOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+IOacgOWkp+etiee6pyjmr5TotZvlnLrkuJPnlKgpIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBtYXhfbGV2ZWw6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT4g5q+U6LWb57yW5Y+3IDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT4g5q+U6LWb5ZCN56ewIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLy8gPHN1bW1hcnk+IOWkp+ebsiA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgYmlnYmxpbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cGVyQ2x1YiB7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5L+x5LmQ6YOo5ZCN56ewXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOS/seS5kOmDqGlkXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNpZDogbnVtYmVyO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDoh6rlt7HlnKjov5nkuKrkv7HkuZDpg6jnmoTkvZnpop1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2x1YmdvbGQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUmVjb3ZlclRleGFzU0Qge1xyXG4gICAgLy8vIDxzdW1tYXJ5PiBcclxuICAgIC8vLyDmoYzlrZDliJ3lp4vljJYgICBJbml0aSA9IDEsIFxyXG4gICAgLy8vIOacieS6uui/m+S6hu+8jOetieaJgOacieS6uuWHhuWkh++8jOezu+e7n+WPr+S7pei/m+ihjOWIhumFjSAgV2FpdGZvclJlYWR5ID0gMiwgXHJcbiAgICAvLy8g5omT54mM5LitICAgUGxheWluZyA9IDMsIFxyXG4gICAgLy8vIOWJjee9rnBsYXlpbmfnirbmgIEgICBQcmVQbGF5aW5nID00LFxyXG4gICAgLy8vIGVuZD0gNVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfc3RhdHVzOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5piv5ZCm5byD54mMXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIF9wb3MyZ2l2ZXVwOiBDb21tb25Qb3NWYWxTRFtdO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOeOqeWutueOsOWcqOi6q+S4iueahOmHkeW4gVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfcG9zMmdvbGQ6IENvbW1vblBvc1ZhbFNEW107XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5piv5ZCm5LyRXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIF9wb3MybG9vazogQ29tbW9uUG9zVmFsU0RbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmmK/lkKbmlbJcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3BvczJhbGxpbjogQ29tbW9uUG9zVmFsU0RbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlr7nlupTnmoTkuIvms6jlgLwgIOWPr+iDveS4ujBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3BvczJnYW1ibGU6IENvbW1vblBvc1ZhbFNEW107XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5omA5pyJ5Lq655qE5YWs5byA5pi+56S677yMICAzfjXlvKBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX29wZW5jYXJkOiBudW1iZXJbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDoh6rlt7LnmoTmiYvniYwg5Y+v6IO95Li656m6XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIHNob3VwYWk6IG51bWJlcltdO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWPquacieS9jee9rueahOS6uueUs+ivt+aJjeiDveeci+WIsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfcG9zMmFwcGx5OiBDb21tb25Qb3NWYWxTRFtdO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOihqOekuui9ruWIsOiwgeaTjeS9nOS6hjpwb3NcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY3Rva2VuOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5b2T5YmN6L2u5YiwdG9rZW7nmoTkurog5pON5L2c5Ymp5L2Z5pe26Ze056eSXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGx0OiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5bqE5a625L2N572uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGJhbmtwb3M6IG51bWJlcjtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkv53pmanmlbDmja5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaW5zZGF0YTogc2NfaW5zdG9rZW5fdGV4X25bXTtcclxufVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g56e75LiA5qyhdG9rZW4gIOeUqOaIt+WPr+iDveacieS4pOS4quaTjeS9nO+8jOmAieS/nemine+8jOaIluS4jeS/nSAgXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBjbGFzcyBzY19pbnN0b2tlbl90ZXhfbiBleHRlbmRzIHNjX2Jhc2Uge1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW9k+WJjeWkhOeQhueahOS7pOeJjOaVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfdDogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWlluaxoOeahOmHkeW4gVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBfamFja3BvdDogbnVtYmVyO1xyXG4gICAgcHVibGljIHBvczogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWkmuS4quS6uuWQjOaXtuS5sOS/nemZqeaYvuekuiBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgaXBvczogQ29tbW9uUG9zVmFsU0RbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDnrKzlh6Dova5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3RjOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5YWs54mMXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIF9DYXJkczogbnVtYmVyW107XHJcbiAgICAvLy8vLyA8c3VtbWFyeT5cclxuICAgIC8vLy8vIOWPr+mAieS/nemineWIl+ihqFxyXG4gICAgLy8vLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IF9pbGlzdDtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmmL7npLrlj4LkuI7nmoTkurrnmoTmiYvniYxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3BvczJTaG91cGFpOiBDb21tb25Qb3NWYWxMaXN0U0RbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmr4/kuKrkurrnmoTog5znjodcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgX3BvczJ3aW46IENvbW1vblBvc1ZhbFNEW107XHJcbiAgICAvLy8vLyA8c3VtbWFyeT5cclxuICAgIC8vLy8vIOihpeeJjFxyXG4gICAgLy8vLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IG91dHM7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Y+v6YCJ5L+d6aKd5YiX6KGoXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIF9pbGlzdDMyOiBudW1iZXJbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDooaXniYxcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgb3V0czMyOiBudW1iZXJbXTtcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDotZTnjodcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcmF0ZTogbnVtYmVyO1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW3sui0reS/neminVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyO1xyXG4gICAgLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5aWW5rGg5YiX6KGoIOWPr+iDveS4gOS4qiDlj6/og73kuKTkuKog5pyA5aSaM+S4quS6uuS/nemZqSDnrKzkuInkuKrlpZbmsaDmsqHmhI/kuYlcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgcG90bGlzdDogbnVtYmVyW107XHJcbiAgICAvLy8vLyA8c3VtbWFyeT5cclxuICAgIC8vLy8vIG1pbmUgaW4gamFja3BvdCBcclxuICAgIC8vLy8vIDwvc3VtbWFyeT5cclxuICAgIC8vcHVibGljIGludCBtcG90O1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIG1pbmUgaW4gamFja3BvdCBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgbXBvdDMyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbXBvdDMxOiBudW1iZXI7XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6KGl54mMXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIG91dHMzMTogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgX2lsaXN0MzE6IG51bWJlcltdO1xyXG59XHJcblxyXG4vKirlv43ogIUgKi9cclxuZXhwb3J0IGNsYXNzIGNzX3Nsb3RlbnRlcnRhYmxlIGV4dGVuZHMgY3NfYmFzZSB7XHJcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIHNjX3Nsb3RlbnRlcnRhYmxlIGV4dGVuZHMgc2NfYmFzZSB7XHJcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdhbWVtb2RlbDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdhbWV0eXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbnVtcGVydGFibGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyByYW5rZXJ0eXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcm9vbWNhcmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YWJsZUNvdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYmFzZXJhdGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfbGltaXQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYmV0U2NvcmVzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyB0YWJsZTogU2xvdFRhYmxlRGF0YTtcclxufVxyXG5leHBvcnQgY2xhc3MgU2xvdFRhYmxlRGF0YSB7XHJcbiAgICBwdWJsaWMgd2FpdGNvdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvdGFsTGluZUNvdW50OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVzdWx0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RhdGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBFbmR0aW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX3R5cGUyZ2FtZWJsZTogbnVtYmVyO1xyXG4gICAgcHVibGljIG1vbmV5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbEphY2tQb3RTY29yZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGJ1eUxpbmVDb3VudDogbnVtYmVyO1xyXG4gICAgcHVibGljIENvbnRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBvcGVubWFycnk6IG51bWJlcjtcclxufVxyXG5cclxuLyoq54mb5LuU6L+b5YWl5oi/6Ze0ICovXHJcbmV4cG9ydCBjbGFzcyBjc19lbnRlcnRhYmxlX1RleEJveSBleHRlbmRzIGNzX2Jhc2Uge1xyXG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX2xpbWl0OiBudW1iZXI7XHJcbn0iXX0=