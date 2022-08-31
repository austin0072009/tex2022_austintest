"use strict";
cc._RF.push(module, '1ab06UcSqNFRo2CZlzLM8/V', 'TexasTable');
// Games/texas/script/View/TexasTable.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var Texas_1 = require("../Model/Texas");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasTable = /** @class */ (function (_super) {
    __extends(TexasTable, _super);
    function TexasTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userList = [];
        /// <summary>
        ///是本地位置
        /// </summary>
        _this._DicPos2User = new Map();
        return _this;
    }
    TexasTable_1 = TexasTable;
    Object.defineProperty(TexasTable.prototype, "myUser", {
        get: function () {
            var localpos = F_TexasViewCtr_1.default.instance.Model._posServer;
            if (this._DicPos2User.has(localpos)) {
                return this._DicPos2User.get(localpos);
            }
            else {
                console.log("localPos:" + localpos);
                this._DicPos2User.forEach(function (item, key) {
                    console.log("posKey:" + key);
                });
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// 观众时用这个对象 坐下后根据Pos从_DicPos2User取
    /// </summary>
    // public myManage:TexasUserComp;//为空表示我没有入座,表示观看模式
    TexasTable.prototype.Init = function () {
        var _this = this;
        this.userList.forEach(function (_tuser) {
            _this._DicPos2User.set(_tuser.localpos, _tuser);
        });
        // this.myManage = null;// _DicPos2User[1];
    };
    TexasTable.prototype.ForeashAllDo = function (match) {
        if (this._DicPos2User == null)
            return;
        if (match == null)
            return;
        this._DicPos2User.forEach(function (value, key) {
            match(key);
        });
    };
    TexasTable.prototype.GetBankerUserComp = function () {
        var user = null;
        this.userList.forEach(function (userCom) {
            if (userCom.serverpos == F_TexasViewCtr_1.default.instance.Model.BankerPos)
                user = userCom;
        });
        return null;
    };
    TexasTable.prototype.Clear = function () {
        this.userList = [];
        this._DicPos2User = new Map();
    };
    /// <summary>
    /// 升庄牛牛的发牌位置确定     从庄家的位置开始算
    /// </summary>
    /// <param name="strdic"></param>
    /// <returns></returns>
    TexasTable.prototype.GetFirstPosFaPai = function (Dice1, Dice2) {
        return F_TexasViewCtr_1.default.instance.Model.BankerPos;
    };
    TexasTable.prototype.GetUserByLocalPos = function (localpos) {
        var _this = this;
        var _tempuser = null;
        this.ForeashAllDo(function (i) {
            if (_this._DicPos2User.get(i).localpos == localpos)
                _tempuser = _this._DicPos2User.get(i);
        });
        if (_tempuser == null)
            console.log(localpos + ":localpos, fetel error!");
        return _tempuser;
    };
    TexasTable.prototype.GetUserByUserId = function (userId) {
        var tuc = null;
        this.userList.forEach(function (user) {
            if (user.player != null && user.player.userid == userId) {
                tuc = user;
            }
        });
        if (tuc != null)
            return tuc;
        var sd = F_TexasViewCtr_1.default.instance.Model.GetUserInfo(userId);
        if (sd != null) {
            tuc = this.GetUserByPos(sd.pos);
        }
        else {
            //Debug.LogError("玩家不存在");
        }
        return tuc;
    };
    TexasTable.prototype.GetUserByPos = function (pos) {
        var user = null;
        this.userList.forEach(function (userCom) {
            if (userCom.localpos == pos)
                user = userCom;
        });
        return user;
    };
    TexasTable.prototype.GetLocalPos = function (pos) {
        var mypos = F_TexasViewCtr_1.default.instance.Model._posServer;
        return TexasTable_1.GetLocalPosByServerPos(pos, mypos, F_TexasViewCtr_1.default.instance.Model.manNum);
    };
    TexasTable.GetLocalPosByServerPos = function (serverPos, myServerPos, PLAYERS_NUM) {
        var side = -1;
        var offset = (0 < myServerPos && myServerPos <= PLAYERS_NUM) ? 1 - myServerPos : 0;
        side = ((serverPos + offset) > 0 ? (serverPos + offset) : (serverPos + offset + PLAYERS_NUM));
        return side; //返回该位置 我们从1号位开始
    };
    TexasTable.GetNameByType = function (type) {
        var typeName = "";
        switch (type) {
            case Texas_1.PokerTexasType.Five_Single:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1324); //高牌
                break;
            case Texas_1.PokerTexasType.Five_ONE_PAIR:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1323); //一对
                break;
            case Texas_1.PokerTexasType.Five_TWO_PAIR:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1322); //两对
                break;
            case Texas_1.PokerTexasType.Five_THREE:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1321); //三条
                break;
            case Texas_1.PokerTexasType.Five_Straight:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1320); //顺子
                break;
            case Texas_1.PokerTexasType.Five_Flush:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1319); //同花
                break;
            case Texas_1.PokerTexasType.Five_THREE_TWO:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1318); //葫芦
                break;
            case Texas_1.PokerTexasType.Five_Bomb:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1317); //四条
                break;
            case Texas_1.PokerTexasType.Five_Flush_Straight:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1316); //同花顺
                break;
            case Texas_1.PokerTexasType.Five_Flush_RoyalStraight:
                typeName = TexasLanguage_1.TexasLanguage.getLanguageById(1315); //皇家同花顺
                break;
            case Texas_1.PokerTexasType.Error:
                typeName = "";
                break;
        }
        return typeName;
    };
    var TexasTable_1;
    TexasTable = TexasTable_1 = __decorate([
        ccclass
    ], TexasTable);
    return TexasTable;
}(cc.Component));
exports.default = TexasTable;

cc._RF.pop();