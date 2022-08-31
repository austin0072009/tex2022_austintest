
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/CareerNetDataStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcQ2FyZWVyTmV0RGF0YVN0cnVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQXdFO0FBRXhFLGFBQWE7QUFDYixZQUFZO0FBQ1osY0FBYztBQUNkO0lBQThDLDRDQUFPO0lBQXJEOztJQUVBLENBQUM7SUFBRCwrQkFBQztBQUFELENBRkEsQUFFQyxDQUY2QyxpQkFBTyxHQUVwRDtBQUZZLDREQUF3QjtBQUlyQztJQUE4Qyw0Q0FBTztJQUFyRDs7SUFFQSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNkMsaUJBQU8sR0FFcEQ7QUFGWSw0REFBd0I7QUFJckM7SUFBQTtJQXlFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxJQUFBO0FBekVZLDRDQUFnQjtBQTJFN0IsTUFBTTtBQUNOO0lBQTRDLDBDQUFPO0lBQW5EOztJQUtBLENBQUM7SUFBRCw2QkFBQztBQUFELENBTEEsQUFLQyxDQUwyQyxpQkFBTyxHQUtsRDtBQUxZLHdEQUFzQjtBQU9uQztJQUE0QywwQ0FBTztJQUFuRDs7SUF1Q0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsQ0F2QzJDLGlCQUFPLEdBdUNsRDtBQXZDWSx3REFBc0I7QUF5Q25DLGFBQWE7QUFDYixXQUFXO0FBQ1gsY0FBYztBQUNkO0lBQXlDLHVDQUFPO0lBQWhEOztJQWlCQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQWpCQSxBQWlCQyxDQWpCd0MsaUJBQU8sR0FpQi9DO0FBakJZLGtEQUFtQjtBQWtCaEM7SUFBeUMsdUNBQU87SUFBaEQ7O0lBZUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZndDLGlCQUFPLEdBZS9DO0FBZlksa0RBQW1CO0FBaUJoQztJQUFBO0lBMENBLENBQUM7SUFBRCxpQkFBQztBQUFELENBMUNB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QUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQjZDLGlCQUFPLEdBa0JwRDtBQWxCWSw0REFBd0I7QUFtQnJDO0lBQUE7SUFLSSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUxKLEFBS0ssSUFBQTtBQUxRLDRDQUFnQjtBQVE3QixhQUFhO0FBQ2IsVUFBVTtBQUNWLGNBQWM7QUFDZDtJQUF3QyxzQ0FBTztJQUEvQzs7SUFJQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKdUMsaUJBQU8sR0FJOUM7QUFKWSxnREFBa0I7QUFLL0I7SUFBd0Msc0NBQU87SUFBL0M7O0lBaUJBLENBQUM7SUFBRCx5QkFBQztBQUFELENBakJBLEFBaUJDLENBakJ1QyxpQkFBTyxHQWlCOUM7QUFqQlksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NfYmFzZSwgc2NfYmFzZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL2NzX2Jhc2VcIjtcblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOW+l+WIsOaIkeeahOeJjOWxgOaUtuiXj1xuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBjc19nZXlteXRleGFzY29sbGVjdF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcblxufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V5bXl0ZXhhc2NvbGxlY3RfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIGRhdGE6IFRleGFzQ29sbGVjdExpc3RbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFRleGFzQ29sbGVjdExpc3Qge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pS26JeP55qEaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjaWQ6IHN0cmluZztcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2V5bGA55qEaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbmZvSWQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBiYXNlcmF0ZTogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3lsYDmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnTnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaAu+WxgOaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRvdGFsbnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi1ouWutmlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgV2luVXNlcklkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi1ouWutuWnk+WQjVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdpbk5hbWU6IHN0cmluZztcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6LWi5Y+W6YeR6aKdXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgd2luR29sZDogbnVtYmVyO1xuXG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOafpeeci+asoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNlZU51bTogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmsqHmnInlvIPniYzkurrkuKrmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBOb0dpdmV1cE51bTogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnIDlpKfnu4TlkIjniYwgIFRleGFzUG9rZXJUeXBl5p6a5Li+XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbWF4UG9rZXI6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6Ieq5bex5Y+C5LiO5ri45oiPICDoh6rlt7HnmoTmiYvniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBPd25TcGFpcjogbnVtYmVyW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiHquW3seeahOi+k+i1olxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIE93bldpbjogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliY3ms6jlgLxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwcmVHOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFrOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNvbXBva2VyOiBudW1iZXJbXTtcbn1cblxuLy/niYzlsYDor6bmg4VcbmV4cG9ydCBjbGFzcyBjc19nZXRzY29sbGVjdGJ5aWRfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmlLbol4/nmoRpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0c2NvbGxlY3RieWlkX3RleCBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pS26JeP5pe26Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY1RpbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOafpeeci+asoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNudW06IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gNuS9jeaVsOahjOWPt1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRudW06IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2hvd0NhcmQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2V5bGAXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGluZm86IFRleFRJbmZvU0Q7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJgOacieeOqeWutlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVsaXN0OiBQSW5mb1NEW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW6leazqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGJhc2VyYXRlOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4gOWxgOacgOWkp+eahOetueeggVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1heFBvdDogbnVtYmVyO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g5pS26JeP5Y2V5bGA54mM5Y2P6K6uXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX3RleGFzY29sbGVjdF90ZXggZXh0ZW5kcyBjc19iYXNlIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDAg6KGo56S65pS26JePICAgMeihqOekuuWIoOmZpCAgIOWIoOmZpOeahOaXtuWAmeWPqumcgOimgWluZm9JZOWPguaVsOS6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHR5cGU6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOahjOWtkGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y+v6IO95Lya57uZ5q+P5LiA5bGA55qEaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpbmZvSWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBzY190ZXhhc2NvbGxlY3RfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlt7Lnu4/mlLbol4/nmoTlsYDmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzYXZhTnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPr+iDveS8mue7meavj+S4gOWxgOeahGlkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5mb0lkOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuS/neWtmOaUtuiXj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElzU2F2YTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRleFRJbmZvU0Qge1xuICAgIC8v5omL5pWwXG4gICAgcHVibGljIGhhbmRjb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhwb2tlcjogbnVtYmVyW107XG4gICAgcHVibGljIHdpbnVzZXI6IG51bWJlcjtcbiAgICBwdWJsaWMgd2luR29sZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gamFja3BvdCArLSDlj6/og73lop7liqDlh4/pgJ/lpoLmnpzlj5HkuoblpKflpZbkuZ/kvJrkuLotXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgajogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWs54mMIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGM6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2V5bGA5Y+C5LiO5ri45oiP5omA5pyJ546p5a625L+h5oGvIOaJi+eJjCDog5zotJ8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdEluZm86IFRleFVzZXJJbmZvU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k+WxgOivpuaDheiusOW9lVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRsaXN0OiBUZXhBY3Rpb25TRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6Zmp5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXBvb2w6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOayoeacieW8g+eJjOeOqeWutuS4quaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG5nOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljZXlsYDllK/kuIBpZCAg5pS26JeP5L2/55SoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5mb0lkOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbmlLbol4/kv53lrZhcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBJc1NhdmE6IGJvb2xlYW47XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDluoTkvY1cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiYW5rZXJwb3M6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBUZXhVc2VySW5mb1NEIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIFVzZXJJRCBsaXN0IOS7jnVsaXN06I635Y+WXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuW8uuWItnNob3fniYzvvIgwOuihqOekuuayoeacie+8mzHvvJrlvLrliLbnp4DniYzvvIlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzdDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliY3kuKTlvKDniYwo5Yid5aeL5bqV54mMKVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHA6IG51bWJlcltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIFxuICAgIC8vLyDnrKzlh6Dova7lvIPnmoTniYwgICDlsI/kuo7nrYnkuo4xIOihqOekuuWPquaYvuekuuS4pOW8oOeJjOiDjCDlpoLmnpzmmK/oh6rlt7HopoHmmL7npLrkuKTlvKDmiYvniYzjgIIgMu+8jDPvvIzooajnpLrlr7nlupTnrKzkuInvvIznrKzlm5vova7lvIPniYwgNeihqOekuuWIhueJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiHquW3seeahOS4i+azqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGc6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIGdpdmV1cCAxIOihqOekuuW8g+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGd1OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmgLvotaLnmoTph5HluIEg5YeP5Y6756iO5pS2XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgd2c6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/neminVxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBpbnM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUqOaIt+WbvuaghyDmoIfor4ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi/meS4gOi9ruaYr+WQpuW8uuWItuengOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGZzaG93OiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6Ieq5bex5a+55bqU55qE5YWs54mM5pWw5o2uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgb3duYzogbnVtYmVyW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWNleWxgOebruWJjeaAu+aJi+aVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGhjb3VudDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljZXlsYDnm67liY3mgLvluKblhaVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0b3RhbGludG86IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBUZXhBY3Rpb25TRCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpobrluo9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBVc2VySUQgbGlzdCDku451bGlzdOiOt+WPllxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUqOaIt+WbvuaghyDmoIfor4ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gYWN0aW9uIHR5cGUgc2LlsI/nm7IgYmLlpKfnm7Igc++8mnN0cmFkbGxlIGMgY2FsbOi3nyBmIGZvbGTlvIMgQSBhbGxpbiAgWOiuqeeJjCAgM0LmmK/lpKfnmoQyLzMgIELmmK8xLzIgXG4gICAgLy8vIFIgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYXQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4i+azqOWAvCBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3ova7mrKEocGVyZmxvcOOAgWZsb3DjgIF0dXJu44CBc2hvd2Rvd24pXG4gICAgLy8vIOS5n+WwseaYr1RleGFzVHVybkVudW0g5a+55bqU5qCH6K+GXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHVybjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g56ys5LiA6L2u6KGo56S65bim5YWl5L2Z6aKdXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgamc6IG51bWJlcjtcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDnroDnn63nlKjmiLfkv6Hmga9cbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgUEluZm9TRCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyB1c2VyaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1aWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWktOWDj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdpY29uOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlkI3np7BcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB3TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBUZXhhc1R1cm5FbnVtIHtcbiAgICBJbml0ID0gLTEsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm7Lms6jpmLbmrrUg5omL54mM5pWw5Li6MC0t5bCP55uy5b2T5bqE77ya6Ieq5Yqo5Y6L5oi/6Ze05L2O5YiG55qE5LiA5YiGIOWkp+ebsuazqOS4uuWwj+ebsuazqOeahOS4i+Wutu+8jOiHquWKqOWOi+aIv+mXtOeahOacgOS9juWIhu+8jOS7juWwj+ebsuazqOW8gOWni+WPkeeJjO+8jFRva2Vu5Lqk57uZ5aSn55uy5rOoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBUdXJuMV8wID0gMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJi+eJjOaVsOS4ujIrMyDlhazlvIDniYzkuLrmlbDkuLozICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFR1cm4yXzMgPSAyLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omL54mM5pWw5Li6Mis0IOWFrOW8gOeJjOS4uuaVsOS4ujQgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgVHVybjNfNCA9IDMsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiYvniYzmlbDkuLoyKzUg5YWs5byA54mM5Li65pWw5Li6NSBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFR1cm40XzUgPSA0LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+U54mM54q25oCB5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBUcnVuQ29tcGFyZSA9IDUsXG59XG5leHBvcnQgZW51bSBUZXhhc1R1cm5BY3Rpb25FbnVtIHtcbiAgICBJbml0ID0gLTEsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlsI/nm7JcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHNiID0gMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWkp+ebslxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgYmIgPSAyLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gc3RyYWRsbGVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHN0cmFkbGxlID0gMyxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi3n1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgY2FsbCA9IDQsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvIPniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIGZvbGQgPSA1LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gYWxsaW5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIGFsbGluID0gNixcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiuqeeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQ2hlY2sgPSA3LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Yqg5rOoIDIvM1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjJfMyA9IDgsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6ggMS8yIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjFfMiA9IDksXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6ggMVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjEgPSAxMCxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFqOmDqOWKoOazqOaTjeS9nFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQiA9IDExLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+U54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBzaG93ZG9udyA9IDE1LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6Zmp57G75Z6LIOWPr+iDvemcgOimgeivpue7hueahOS/nemZqea1geeoi1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgSW5zID0gMjAsXG59XG5cbi8vL+i1m+S6i1xuZXhwb3J0IGNsYXNzIGNzX2NvbXBldGVfcmVjb3JkIGV4dGVuZHMgY3NfYmFzZVxue1xuICAgIHB1YmxpYyB1c2VyaWQ6bnVtYmVyOy8v5LiN55So5LygXG59XG4vLy8gPHN1bW1hcnk+IOavlOi1m+eugOS7iyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgQ29tcGV0ZVJlbWFya1xue1xuICAgIHB1YmxpYyBjb21wZXRlaWQ6bnVtYmVyO1xuICAgIHB1YmxpYyBjb21wZXRlbmFtZTpzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PiDmr5TotZvlm77niYcgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwaWM6c3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT4g6I635b6X6YeR5biBIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgd2luZ29sZDpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDlvIDotZvml7bpl7QgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzdGFydHRpbWU6c3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT4g5o6S5ZCNIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcmFuazpudW1iZXI7XG59XG4vLy8gPHN1bW1hcnk+IOeOqeWutuavlOi1m+e7n+iuoSA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3Mgc2NfY29tcGV0ZV9yZWNvcmQgZXh0ZW5kcyBzY19iYXNlXG57XG4gICAgLy8vIDxzdW1tYXJ5PiDpkrHlnIjmlbAgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBXaW5Db3VudDpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDmgLvmiYvmlbAgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBUb3RhbFJvdW5kQ291bnQ6bnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5Yaz6LWb5qyh5pWwIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgRmluYWxSb3VuZENvdW50Om51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOavlOi1m+eugOS7iyjlj6/ojrflj5blj4LkuI7mr5TotZvmlbDph48pIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW5mb3M6Q29tcGV0ZVJlbWFya1tdO1xufVxuZXhwb3J0IGNsYXNzIGNzX2NvbXBldGVfcmVjb3JkX2RldGFpbCBleHRlbmRzIGNzX2Jhc2VcbntcbiAgICBwdWJsaWMgY29tcGV0ZWlkOm51bWJlcjtcbiAgICBwdWJsaWMgdXNlcmlkOm51bWJlcjsvL+S4jeeUqOS8oFxufVxuZXhwb3J0ICBjbGFzcyBSYW5rUHJpemVJbmZvXG57XG4gICAgLy8vIDxzdW1tYXJ5PiDnjqnlrrbnvJblj7cgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwbGF5ZXJpZDpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDnlKjmiLflkI0gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBuYW1lOnN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+IOWktOWDjyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBpYzpzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PiDlvZPliY3liIbmlbAgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzY29yZTpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDmjpLlkI0gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyByYW5rOm51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOaYr+WQpuiiq+a3mOaxsCA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlzb3V0ZWQ6Ym9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+IOavlOS+iyjkuIfliIbmr5QpIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcHJvcG9ydGlvbjpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDlpZblk4EgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwcml6ZXM6UHJpemVJbmZvTWVzc2FnZVtdO1xufVxuLy8vIDxzdW1tYXJ5PiDnjqnlrrbmr5TotZvor6bmg4UgPC9zdW1tYXJ5XG5leHBvcnQgY2xhc3Mgc2NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsIGV4dGVuZHMgc2NfYmFzZVxue1xuICAgIC8vcHVibGljIENvbXBldGVEZXRhaWwgZGV0YWlsaW5mbztcbiAgICBwdWJsaWMgY29tcGV0ZWlkOm51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOavlOi1m+WQjeensCA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNvbXBldGVuYW1lOnN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+IOeOqeWutuWcqOavlOi1m+S4reiOt+W+l+eahOWlluWTgSA8L3N1bW1hcnk+XG4gICAgcHVibGljIHByaXplczpQcml6ZUluZm9NZXNzYWdlW107XG4gICAgLy8vIDxzdW1tYXJ5PiDmjpLlkI0o5Y+v5LuO5Lit6I635Y+W546p5a625Lq65pWwKSA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJhbmtpbmc6UmFua1ByaXplSW5mb1tdO1xuICAgIC8vLyA8c3VtbWFyeT4g55uI5Yip5qGM5pWwIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgVGFibGVXaW5Db3VudDpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PiDmgLvmiYvmlbAgPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBUb3RhbFJvdW5kQ291bnQ6bnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT4g5Zue5oql546HIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgUmF0ZU9mUmV0dXJuOm51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+IOW8gOi1m+aXtumXtCA8L3N1bW1hcnk+XG4gICAgcHVibGljIHN0YXJ0dGltZTpzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgUHJpemVJbmZvTWVzc2FnZVxuICAgIHtcbiAgICAgICAgcHVibGljIG5hbWU6c3RyaW5nO1xuICAgICAgICBwdWJsaWMgbnVtOm51bWJlcjtcbiAgICAgICAgcHVibGljIHBpYzpzdHJpbmc7XG4gICAgfVxuXG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDmuLjmiI/miJjnu6nor6bmg4Vcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3Nfcm9vbWhpc3RvcnlfdGV4IGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuXG59XG5leHBvcnQgY2xhc3Mgc2Nfcm9vbWhpc3RvcnlfdGV4IGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlKjmiLfliJfooajljIXmi6zmiYDmnInlj4LkuI7ov4fkuobkuI3lkKvop4LkvJdcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1bGlzdDogUEluZm9TRFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+P5bGA55qE5Y6G5Y+y6K+m5oOFXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHVsaXN0OiBUZXhUSW5mb1NEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiZzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2hvd0NhcmQ6IG51bWJlcjtcbn1cbiJdfQ==