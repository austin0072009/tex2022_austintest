"use strict";
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
/**?????????????????? */
var TableRoomInfoTex = /** @class */ (function () {
    function TableRoomInfoTex() {
    }
    return TableRoomInfoTex;
}());
exports.TableRoomInfoTex = TableRoomInfoTex;
/**?????????????????? */
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
/**??????????????? */
var sc_getnotice_n = /** @class */ (function (_super) {
    __extends(sc_getnotice_n, _super);
    function sc_getnotice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getnotice_n;
}(cs_base_1.sc_base));
exports.sc_getnotice_n = sc_getnotice_n;
/**??????????????? */
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
//??????????????????
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
/**?????????????????? */
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
/**???????????? */
var cs_enterbank_bk = /** @class */ (function (_super) {
    __extends(cs_enterbank_bk, _super);
    function cs_enterbank_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_enterbank_bk;
}(cs_base_1.cs_base));
exports.cs_enterbank_bk = cs_enterbank_bk;
/**?????????????????? */
var sc_enterbank_bk = /** @class */ (function (_super) {
    __extends(sc_enterbank_bk, _super);
    function sc_enterbank_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_enterbank_bk;
}(cs_base_1.sc_base));
exports.sc_enterbank_bk = sc_enterbank_bk;
/**?????????????????? */
var banklog = /** @class */ (function () {
    function banklog() {
    }
    return banklog;
}());
exports.banklog = banklog;
/**?????? */
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
/**???????????? */
var cs_dealgoldtrade = /** @class */ (function (_super) {
    __extends(cs_dealgoldtrade, _super);
    function cs_dealgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_dealgoldtrade;
}(cs_base_1.cs_base));
exports.cs_dealgoldtrade = cs_dealgoldtrade;
/**
 * /// ??????????????????????????????
result 1:???????????????
2 ????????????????????????,
-1 ????????????????????????
-2?????????????????????
-3??????????????????????????????backgold???,
-4????????????????????????,-5???????????????
 */
var sc_dealgoldtrade = /** @class */ (function (_super) {
    __extends(sc_dealgoldtrade, _super);
    function sc_dealgoldtrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_dealgoldtrade;
}(cs_base_1.sc_base));
exports.sc_dealgoldtrade = sc_dealgoldtrade;
/**???????????????????????? */
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
/**?????????????????? */
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
/**?????? ??????*/
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
/**?????????????????? */
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
/**???????????????????????????????????? */
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
/**???????????????????????? */
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
/// ???????????????
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
/// ???????????????     -1?????????????????????
/// </summary>
var sc_changePassword_bk = /** @class */ (function (_super) {
    __extends(sc_changePassword_bk, _super);
    function sc_changePassword_bk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_changePassword_bk;
}(cs_base_1.sc_base));
exports.sc_changePassword_bk = sc_changePassword_bk;
/**??????VIP????????????*/
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
/**????????????VIP?????? */
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
/**?????????????????? */
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
/**?????????????????? */
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
/**?????????????????? */
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
/**???????????? */
var CompeteInfo = /** @class */ (function () {
    function CompeteInfo() {
    }
    return CompeteInfo;
}());
exports.CompeteInfo = CompeteInfo;
/**?????? */
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
/**?????????????????? */
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
/** ????????????*/
var sc_compete_rank_info = /** @class */ (function (_super) {
    __extends(sc_compete_rank_info, _super);
    function sc_compete_rank_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_rank_info;
}(cs_base_1.sc_base));
exports.sc_compete_rank_info = sc_compete_rank_info;
/**???????????????????????? */
var cs_compete_rank_info = /** @class */ (function (_super) {
    __extends(cs_compete_rank_info, _super);
    function cs_compete_rank_info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_rank_info;
}(cs_base_1.cs_base));
exports.cs_compete_rank_info = cs_compete_rank_info;
/**??????  */
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
/**???????????? */
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
/**?????? */
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
/// ???????????????????????????????????? //result 1:???????????????2 ????????????????????????,-1 ????????????????????????-2??????????????????-3??????????????????????????????backgold???,-4????????????????????????,-5???????????????
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
/// ?????????????????????????????????????????? ???????????? ??????????????? ????????????
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
/// ???????????????????????????
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
/// ????????????
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
/// ????????????
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
/// ????????????
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
/// -1????????????
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
/// ????????????
/// </summary>
var ExtendUser = /** @class */ (function () {
    function ExtendUser() {
    }
    return ExtendUser;
}());
exports.ExtendUser = ExtendUser;
/// <summary>
/// ???????????????
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
/// -1???????????????   -2?????????????????????
/// </summary>
var sc_receiveextendgold = /** @class */ (function (_super) {
    __extends(sc_receiveextendgold, _super);
    function sc_receiveextendgold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_receiveextendgold;
}(cs_base_1.sc_base));
exports.sc_receiveextendgold = sc_receiveextendgold;
// ??????????????????
/// <summary>
/// ????????????
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
/// ????????????
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
/// ????????????????????????
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
/// ??????????????????
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
    /// ??????
    /// </summary>
    MailTypeEnum[MailTypeEnum["Trading"] = 1] = "Trading";
    /// <summary>
    /// ??????
    /// </summary>
    MailTypeEnum[MailTypeEnum["System"] = 2] = "System";
    /// <summary>
    /// ??????
    /// </summary>
    MailTypeEnum[MailTypeEnum["personal"] = 3] = "personal";
    /// <summary>
    /// ??????
    /// </summary>
    MailTypeEnum[MailTypeEnum["Activity"] = 4] = "Activity";
})(MailTypeEnum = exports.MailTypeEnum || (exports.MailTypeEnum = {}));
/// <summary>
/// ?????????????????????????????????
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
/// ????????????
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
/// -1 ???????????????  -2???????????????????????????????????????7???
/// </summary>
var sc_removeEmail = /** @class */ (function (_super) {
    __extends(sc_removeEmail, _super);
    function sc_removeEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_removeEmail;
}(cs_base_1.sc_base));
exports.sc_removeEmail = sc_removeEmail;
/**?????? */
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
/// ?????????token  ???????????????????????????????????????????????????  
/// </summary>
var sc_instoken_tex_n = /** @class */ (function (_super) {
    __extends(sc_instoken_tex_n, _super);
    function sc_instoken_tex_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_instoken_tex_n;
}(cs_base_1.sc_base));
exports.sc_instoken_tex_n = sc_instoken_tex_n;
/**?????? */
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
/**?????????????????? */
var cs_entertable_TexBoy = /** @class */ (function (_super) {
    __extends(cs_entertable_TexBoy, _super);
    function cs_entertable_TexBoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertable_TexBoy;
}(cs_base_1.cs_base));
exports.cs_entertable_TexBoy = cs_entertable_TexBoy;

cc._RF.pop();