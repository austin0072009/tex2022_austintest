
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQXNEO0FBQ3RELHdDQUFnRDtBQUNoRCx3REFBdUQ7QUFHakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzSkM7UUFySlUsY0FBUSxHQUFvQixFQUFFLENBQUM7UUFDdEMsYUFBYTtRQUNiLFFBQVE7UUFDUixjQUFjO1FBQ1Asa0JBQVksR0FBK0IsSUFBSSxHQUFHLEVBQXlCLENBQUM7O0lBaUp2RixDQUFDO21CQXRKb0IsVUFBVTtJQU0zQixzQkFBVyw4QkFBTTthQUFqQjtZQUNJLElBQUksUUFBUSxHQUFXLHdCQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztpQkFDSTtnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUE7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDOzs7T0FBQTtJQUNELGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLG1EQUFtRDtJQUM1Qyx5QkFBSSxHQUFYO1FB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RCxNQUFNO1lBQ1YsS0FBSyxzQkFBYyxDQUFDLHdCQUF3QjtnQkFDeEMsUUFBUSxHQUFHLDZCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsT0FBTztnQkFDdEQsTUFBTTtZQUNWLEtBQUssc0JBQWMsQ0FBQyxLQUFLO2dCQUNyQixRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNkLE1BQU07U0FDYjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7O0lBckpnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBc0o5QjtJQUFELGlCQUFDO0NBdEpELEFBc0pDLENBdEp1QyxFQUFFLENBQUMsU0FBUyxHQXNKbkQ7a0JBdEpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3RoZXJVc2VySW5mb1NEIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvY3NfYmFzZVwiO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gXCIuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHJcIjtcbmltcG9ydCB7IFBva2VyVGV4YXNUeXBlIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzXCI7XG5pbXBvcnQgeyBUZXhhc0xhbmd1YWdlIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTGFuZ3VhZ2VcIjtcbmltcG9ydCBUZXhhc1VzZXJDb21wIGZyb20gXCIuL1RleGFzVXNlckNvbXBcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleGFzVGFibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyB1c2VyTGlzdDogVGV4YXNVc2VyQ29tcFtdID0gW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vL+aYr+acrOWcsOS9jee9rlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9EaWNQb3MyVXNlcjogTWFwPG51bWJlciwgVGV4YXNVc2VyQ29tcD4gPSBuZXcgTWFwPG51bWJlciwgVGV4YXNVc2VyQ29tcD4oKTtcbiAgICBwdWJsaWMgZ2V0IG15VXNlcigpOiBUZXhhc1VzZXJDb21wIHtcbiAgICAgICAgbGV0IGxvY2FscG9zOiBudW1iZXIgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyO1xuICAgICAgICBpZiAodGhpcy5fRGljUG9zMlVzZXIuaGFzKGxvY2FscG9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0RpY1BvczJVc2VyLmdldChsb2NhbHBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxQb3M6XCIgKyBsb2NhbHBvcyk7XG4gICAgICAgICAgICB0aGlzLl9EaWNQb3MyVXNlci5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc0tleTpcIiArIGtleSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOinguS8l+aXtueUqOi/meS4quWvueixoSDlnZDkuIvlkI7moLnmja5Qb3Pku45fRGljUG9zMlVzZXLlj5ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vIHB1YmxpYyBteU1hbmFnZTpUZXhhc1VzZXJDb21wOy8v5Li656m66KGo56S65oiR5rKh5pyJ5YWl5bqnLOihqOekuuingueci+aooeW8j1xuICAgIHB1YmxpYyBJbml0KCkge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LmZvckVhY2goX3R1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMuX0RpY1BvczJVc2VyLnNldChfdHVzZXIubG9jYWxwb3MsIF90dXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLm15TWFuYWdlID0gbnVsbDsvLyBfRGljUG9zMlVzZXJbMV07XG4gICAgfVxuICAgIHB1YmxpYyBGb3JlYXNoQWxsRG8obWF0Y2g6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9EaWNQb3MyVXNlciA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuX0RpY1BvczJVc2VyLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIG1hdGNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRCYW5rZXJVc2VyQ29tcCgpOiBUZXhhc1VzZXJDb21wIHtcbiAgICAgICAgbGV0IHVzZXIgPSBudWxsXG4gICAgICAgIHRoaXMudXNlckxpc3QuZm9yRWFjaCh1c2VyQ29tID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyQ29tLnNlcnZlcnBvcyA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5CYW5rZXJQb3MpIHVzZXIgPSB1c2VyQ29tO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMudXNlckxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fRGljUG9zMlVzZXIgPSBuZXcgTWFwPG51bWJlciwgVGV4YXNVc2VyQ29tcD4oKTtcbiAgICB9XG5cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2H5bqE54mb54mb55qE5Y+R54mM5L2N572u56Gu5a6aICAgICDku47luoTlrrbnmoTkvY3nva7lvIDlp4vnrpdcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInN0cmRpY1wiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgR2V0Rmlyc3RQb3NGYVBhaShEaWNlMTogbnVtYmVyLCBEaWNlMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkJhbmtlclBvcztcbiAgICB9XG4gICAgcHVibGljIEdldFVzZXJCeUxvY2FsUG9zKGxvY2FscG9zOiBudW1iZXIpOiBUZXhhc1VzZXJDb21wIHtcbiAgICAgICAgbGV0IF90ZW1wdXNlcjogVGV4YXNVc2VyQ29tcCA9IG51bGw7XG4gICAgICAgIHRoaXMuRm9yZWFzaEFsbERvKChpKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fRGljUG9zMlVzZXIuZ2V0KGkpLmxvY2FscG9zID09IGxvY2FscG9zKSBfdGVtcHVzZXIgPSB0aGlzLl9EaWNQb3MyVXNlci5nZXQoaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX3RlbXB1c2VyID09IG51bGwpIGNvbnNvbGUubG9nKGxvY2FscG9zICsgXCI6bG9jYWxwb3MsIGZldGVsIGVycm9yIVwiKTtcbiAgICAgICAgcmV0dXJuIF90ZW1wdXNlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0VXNlckJ5VXNlcklkKHVzZXJJZDogbnVtYmVyKTogVGV4YXNVc2VyQ29tcCB7XG4gICAgICAgIGxldCB0dWM6IFRleGFzVXNlckNvbXAgPSBudWxsO1xuICAgICAgICB0aGlzLnVzZXJMaXN0LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci5wbGF5ZXIgIT0gbnVsbCAmJiB1c2VyLnBsYXllci51c2VyaWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgdHVjID0gdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR1YyAhPSBudWxsKSByZXR1cm4gdHVjO1xuXG4gICAgICAgIGxldCBzZDogT3RoZXJVc2VySW5mb1NEID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuR2V0VXNlckluZm8odXNlcklkKTtcbiAgICAgICAgaWYgKHNkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHR1YyA9IHRoaXMuR2V0VXNlckJ5UG9zKHNkLnBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL0RlYnVnLkxvZ0Vycm9yKFwi546p5a625LiN5a2Y5ZyoXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR1YztcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0VXNlckJ5UG9zKHBvczogbnVtYmVyKTogVGV4YXNVc2VyQ29tcCB7XG4gICAgICAgIGxldCB1c2VyOiBUZXhhc1VzZXJDb21wID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5mb3JFYWNoKHVzZXJDb20gPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJDb20ubG9jYWxwb3MgPT0gcG9zKSB1c2VyID0gdXNlckNvbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRMb2NhbFBvcyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBteXBvczogbnVtYmVyID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3Bvc1NlcnZlcjtcbiAgICAgICAgcmV0dXJuIFRleGFzVGFibGUuR2V0TG9jYWxQb3NCeVNlcnZlclBvcyhwb3MsIG15cG9zLCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tYW5OdW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEdldExvY2FsUG9zQnlTZXJ2ZXJQb3Moc2VydmVyUG9zOiBudW1iZXIsIG15U2VydmVyUG9zOiBudW1iZXIsIFBMQVlFUlNfTlVNOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICB2YXIgc2lkZSA9IC0xO1xuICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAoMCA8IG15U2VydmVyUG9zICYmIG15U2VydmVyUG9zIDw9IFBMQVlFUlNfTlVNKSA/IDEgLSBteVNlcnZlclBvcyA6IDA7XG5cbiAgICAgICAgc2lkZSA9ICgoc2VydmVyUG9zICsgb2Zmc2V0KSA+IDAgPyAoc2VydmVyUG9zICsgb2Zmc2V0KSA6IChzZXJ2ZXJQb3MgKyBvZmZzZXQgKyBQTEFZRVJTX05VTSkpO1xuICAgICAgICByZXR1cm4gc2lkZTsvL+i/lOWbnuivpeS9jee9riDmiJHku6zku44x5Y+35L2N5byA5aeLXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBHZXROYW1lQnlUeXBlKHR5cGU6IFBva2VyVGV4YXNUeXBlKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHR5cGVOYW1lID0gXCJcIjtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfU2luZ2xlOlxuICAgICAgICAgICAgICAgIHR5cGVOYW1lID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTMyNCk7Ly/pq5jniYxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9PTkVfUEFJUjpcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMjMpOy8v5LiA5a+5XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVFdPX1BBSVI6XG4gICAgICAgICAgICAgICAgdHlwZU5hbWUgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzIyKTsvL+S4pOWvuVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFOlxuICAgICAgICAgICAgICAgIHR5cGVOYW1lID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTMyMSk7Ly/kuInmnaFcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9TdHJhaWdodDpcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMjApOy8v6aG65a2QXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2g6XG4gICAgICAgICAgICAgICAgdHlwZU5hbWUgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzE5KTsvL+WQjOiKsVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFX1RXTzpcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMTgpOy8v6JGr6IqmXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfQm9tYjpcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMTcpOy8v5Zub5p2hXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2hfU3RyYWlnaHQ6XG4gICAgICAgICAgICAgICAgdHlwZU5hbWUgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzE2KTsvL+WQjOiKsemhulxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1JveWFsU3RyYWlnaHQ6XG4gICAgICAgICAgICAgICAgdHlwZU5hbWUgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzE1KTsvL+eah+WutuWQjOiKsemhulxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5FcnJvcjpcbiAgICAgICAgICAgICAgICB0eXBlTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xuICAgIH1cbn1cblxuXG4iXX0=