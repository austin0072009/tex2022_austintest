"use strict";
cc._RF.push(module, 'c2aa0YkYW5DQrELFbjeibKt', 'CareerNetDataStruct');
// GameHall/script/Lobby/career/CareerNetDataStruct.ts

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
exports.sc_roomhistory_tex = exports.cs_roomhistory_tex = exports.PrizeInfoMessage = exports.sc_compete_record_detail = exports.RankPrizeInfo = exports.cs_compete_record_detail = exports.sc_compete_record = exports.CompeteRemark = exports.cs_compete_record = exports.TexasTurnActionEnum = exports.TexasTurnEnum = exports.PInfoSD = exports.TexActionSD = exports.TexUserInfoSD = exports.TexTInfoSD = exports.sc_texascollect_tex = exports.cs_texascollect_tex = exports.sc_getscollectbyid_tex = exports.cs_getscollectbyid_tex = exports.TexasCollectList = exports.sc_geymytexascollect_tex = exports.cs_geymytexascollect_tex = void 0;
var cs_base_1 = require("../../../../Script/BaseFrame/cs_base");
/// <summary>
/// 得到我的牌局收藏
/// </summary>
var cs_geymytexascollect_tex = /** @class */ (function (_super) {
    __extends(cs_geymytexascollect_tex, _super);
    function cs_geymytexascollect_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_geymytexascollect_tex;
}(cs_base_1.cs_base));
exports.cs_geymytexascollect_tex = cs_geymytexascollect_tex;
var sc_geymytexascollect_tex = /** @class */ (function (_super) {
    __extends(sc_geymytexascollect_tex, _super);
    function sc_geymytexascollect_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_geymytexascollect_tex;
}(cs_base_1.sc_base));
exports.sc_geymytexascollect_tex = sc_geymytexascollect_tex;
var TexasCollectList = /** @class */ (function () {
    function TexasCollectList() {
    }
    return TexasCollectList;
}());
exports.TexasCollectList = TexasCollectList;
//牌局详情
var cs_getscollectbyid_tex = /** @class */ (function (_super) {
    __extends(cs_getscollectbyid_tex, _super);
    function cs_getscollectbyid_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getscollectbyid_tex;
}(cs_base_1.cs_base));
exports.cs_getscollectbyid_tex = cs_getscollectbyid_tex;
var sc_getscollectbyid_tex = /** @class */ (function (_super) {
    __extends(sc_getscollectbyid_tex, _super);
    function sc_getscollectbyid_tex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getscollectbyid_tex;
}(cs_base_1.sc_base));
exports.sc_getscollectbyid_tex = sc_getscollectbyid_tex;
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
/// 简短用户信息
/// </summary>
var PInfoSD = /** @class */ (function () {
    function PInfoSD() {
    }
    return PInfoSD;
}());
exports.PInfoSD = PInfoSD;
var TexasTurnEnum;
(function (TexasTurnEnum) {
    TexasTurnEnum[TexasTurnEnum["Init"] = -1] = "Init";
    /// <summary>
    /// 盲注阶段 手牌数为0--小盲当庄：自动压房间低分的一分 大盲注为小盲注的下家，自动压房间的最低分，从小盲注开始发牌，Token交给大盲注
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn1_0"] = 1] = "Turn1_0";
    /// <summary>
    /// 手牌数为2+3 公开牌为数为3  
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn2_3"] = 2] = "Turn2_3";
    /// <summary>
    /// 手牌数为2+4 公开牌为数为4  
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn3_4"] = 3] = "Turn3_4";
    /// <summary>
    /// 手牌数为2+5 公开牌为数为5 
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn4_5"] = 4] = "Turn4_5";
    /// <summary>
    /// 比牌状态了
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["TrunCompare"] = 5] = "TrunCompare";
})(TexasTurnEnum = exports.TexasTurnEnum || (exports.TexasTurnEnum = {}));
var TexasTurnActionEnum;
(function (TexasTurnActionEnum) {
    TexasTurnActionEnum[TexasTurnActionEnum["Init"] = -1] = "Init";
    /// <summary>
    /// 小盲
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["sb"] = 1] = "sb";
    /// <summary>
    /// 大盲
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["bb"] = 2] = "bb";
    /// <summary>
    /// stradlle
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["stradlle"] = 3] = "stradlle";
    /// <summary>
    /// 跟
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["call"] = 4] = "call";
    /// <summary>
    /// 弃牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["fold"] = 5] = "fold";
    /// <summary>
    /// allin
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["allin"] = 6] = "allin";
    /// <summary>
    /// 让牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["Check"] = 7] = "Check";
    /// <summary>
    /// 加注 2/3
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B2_3"] = 8] = "B2_3";
    /// <summary>
    /// 加注 1/2 
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B1_2"] = 9] = "B1_2";
    /// <summary>
    /// 加注 1
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B1"] = 10] = "B1";
    /// <summary>
    /// 全部加注操作
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B"] = 11] = "B";
    /// <summary>
    /// 比牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["showdonw"] = 15] = "showdonw";
    /// <summary>
    /// 保险类型 可能需要详细的保险流程
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["Ins"] = 20] = "Ins";
})(TexasTurnActionEnum = exports.TexasTurnActionEnum || (exports.TexasTurnActionEnum = {}));
///赛事
var cs_compete_record = /** @class */ (function (_super) {
    __extends(cs_compete_record, _super);
    function cs_compete_record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_record;
}(cs_base_1.cs_base));
exports.cs_compete_record = cs_compete_record;
/// <summary> 比赛简介 </summary>
var CompeteRemark = /** @class */ (function () {
    function CompeteRemark() {
    }
    return CompeteRemark;
}());
exports.CompeteRemark = CompeteRemark;
/// <summary> 玩家比赛统计 </summary>
var sc_compete_record = /** @class */ (function (_super) {
    __extends(sc_compete_record, _super);
    function sc_compete_record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_record;
}(cs_base_1.sc_base));
exports.sc_compete_record = sc_compete_record;
var cs_compete_record_detail = /** @class */ (function (_super) {
    __extends(cs_compete_record_detail, _super);
    function cs_compete_record_detail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_compete_record_detail;
}(cs_base_1.cs_base));
exports.cs_compete_record_detail = cs_compete_record_detail;
var RankPrizeInfo = /** @class */ (function () {
    function RankPrizeInfo() {
    }
    return RankPrizeInfo;
}());
exports.RankPrizeInfo = RankPrizeInfo;
/// <summary> 玩家比赛详情 </summary
var sc_compete_record_detail = /** @class */ (function (_super) {
    __extends(sc_compete_record_detail, _super);
    function sc_compete_record_detail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_compete_record_detail;
}(cs_base_1.sc_base));
exports.sc_compete_record_detail = sc_compete_record_detail;
var PrizeInfoMessage = /** @class */ (function () {
    function PrizeInfoMessage() {
    }
    return PrizeInfoMessage;
}());
exports.PrizeInfoMessage = PrizeInfoMessage;
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

cc._RF.pop();