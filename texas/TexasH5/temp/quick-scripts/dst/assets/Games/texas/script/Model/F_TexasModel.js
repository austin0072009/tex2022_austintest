
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Model/F_TexasModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91b59TFwalA/7V+J+CLeATv', 'F_TexasModel');
// Games/texas/script/Model/F_TexasModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.F_TexasModel = void 0;
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../../../../GameHall/script/Lobby/LobbyViewCtr");
var F_TexasModel = /** @class */ (function () {
    function F_TexasModel() {
        this._pos2Gold = [];
        this.tableApply = 0;
        this.minStartGamble = 0; //开始的最低下注
        this.tableLockGold = 0; //当前桌子锁定的金币
        this.curTableOverCount = 0; //一共玩了多少局
        this.isGamestart = false; //是否可以倒计时
        this.jubaoType = 0; //举报类型，0:玩家，1:牌局
        this.curMsgId = 0;
        /// <summary>
        /// 人数  最低多少人开启游戏
        /// </summary>
        this.minPC = 0;
        this.pas = "";
        this.isShowPersonRemind = true;
        /// <summary>
        /// 当前允许下注的最小值 为0表示可以看牌
        /// </summary>
        this._curGambleLimitMin = 0; //当前单次下注值
        this._curMaxGamble = 0; //封顶下注
        this._CurTurnCount = 0; //当前轮数
        this.firstTurnStart = false; //当前是否是第一个操作
        this._gamble = 0;
        this.turnGamble = 0; // 当前轮的最大下注allin除外
        this.MatchCode = ""; //牌局号
        /// <summary>
        /// 房主同意开局 
        /// 默认都为true
        /// </summary>
        this.openplay = true;
        this.isLastStepStart = false;
        this.muteUsers = new Map();
        this.id2keep = [];
    }
    Object.defineProperty(F_TexasModel.prototype, "showcard", {
        /// <summary>
        /// 每一轮只有一只看牌机会
        /// </summary>
        get: function () {
            return this._curGambleLimitMin == 0;
        },
        enumerable: false,
        configurable: true
    });
    F_TexasModel.prototype.F_TexasModel = function () {
        this._CommonCard = [];
        this._ShouPai = [];
        this._pos2openPai = [];
        this.Reset();
    };
    F_TexasModel.prototype.Init = function () {
        this._CommonCard = [];
        this._ShouPai = [];
        this._pos2openPai = [];
        this.palyerlist = [];
        this.Reset();
    };
    F_TexasModel.prototype.SetbaseDataId = function (gid, tid, lvid) {
        this.gameid = gid;
        this.tableid = tid;
        this.levelid = lvid;
        this.SetTalbeInfo(tid, lvid);
    };
    F_TexasModel.prototype.SetTalbeInfo = function (tid, lvid) {
        var _this = this;
        this.tableid = tid;
        this.levelid = lvid;
        if (LobbyViewCtr_1.default.instance.Model.tableList == null) {
            return null;
        }
        LobbyViewCtr_1.default.instance.Model.tableList.forEach(function (item) {
            if (item.tid == _this.tableid && item.lvid == _this.levelid) {
                _this.room = item;
            }
        });
    };
    F_TexasModel.prototype.RemovePlayerList = function (userID) {
        var _this = this;
        var b = false;
        if (this.palyerlist == null)
            return b;
        this.palyerlist.forEach(function (_ousd, key) {
            if (_ousd.py.userid == userID) {
                _this.palyerlist.splice(key, 1);
                if (userID == _this.mPlayerModel.userid) {
                    _this.SetMyServerPos(0);
                }
                b = true;
            }
        });
        console.log("this.palyerlist === ", this.palyerlist);
        return b;
    };
    F_TexasModel.prototype.RemovePos2Apply = function (pos) {
        var _this = this;
        var b = false;
        if (this.pos2apply == null)
            return false;
        this.pos2apply.forEach(function (_ousd, key) {
            if (_ousd.pos == pos) {
                _this.pos2apply.splice(key, 1);
                b = true;
            }
        });
        return b;
    };
    F_TexasModel.prototype.GetUserInfo = function (userId) {
        var user = null;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(function (_ousd) {
                if (_ousd.py.userid == userId) {
                    user = _ousd;
                }
            });
        }
        return user;
    };
    F_TexasModel.prototype.GetUserInfoByPos = function (pos) {
        var user = null;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(function (_ousd) {
                if (_ousd.pos == pos) {
                    user = _ousd;
                }
            });
        }
        return user;
    };
    F_TexasModel.prototype.SetUserData_isW_pos = function (userId, isW) {
        var user = this.GetUserInfo(userId);
        if (user != null) {
            user.isW = isW;
        }
    };
    F_TexasModel.prototype.SetUserData_isW = function (userId, isW) {
        this.SetUserData_nnn(userId, 1, isW);
    };
    F_TexasModel.prototype.SetUserData_isK = function (userId, keepTime) {
        this.SetUserData_nnn(userId, 2, keepTime);
    };
    //统一修改数据 枚举方便调用
    // public SetUserData (userId:number, key:UserInfoKey, value:number) {
    //     this.SetUserData_nnn (userId, UIUtil.NumberToInt(key), value);
    // }
    //统一修改数据 1.key:isW(观众状态) 2. key:isK 留座状态 3.
    F_TexasModel.prototype.SetUserData_nnn = function (userId, key, value) {
        var user = this.GetUserInfo(userId);
        if (user != null) {
            switch (key) {
                case 1:
                    user.isW = value;
                    break;
                case 2:
                    user.isK = value;
                    break;
                default:
                    break;
            }
        }
    };
    F_TexasModel.prototype.GetReadyCount = function () {
        var count = 0;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(function (item) {
                if (item.isW != 1 && item.isW != 2 && item.isK <= 0) {
                    count++;
                }
            });
        }
        return count;
    };
    F_TexasModel.prototype.GetMinPlayerCount = function () {
        return this.minPC;
    };
    F_TexasModel.prototype.AddPlayerList = function (user) {
        for (var i = 0; i < this.palyerlist.length; i++) {
            var _ousd = this.palyerlist[i];
            if (_ousd.py.userid == user.py.userid) {
                this.palyerlist.splice(i, 1);
            }
        }
        this.palyerlist.push(user);
        console.log(this.palyerlist);
    };
    F_TexasModel.prototype.AddPos2ApplyList = function (user) {
        for (var i = 0; i < this.pos2apply.length; i++) {
            var _ousd = this.pos2apply[i];
            if (_ousd.pos == user.pos) {
                this.pos2apply.splice(i, 1);
            }
        }
        this.pos2apply.push(user);
    };
    /// <summary>
    /// 清理数据准备下一次游戏
    /// </summary>
    F_TexasModel.prototype.Reset = function () {
        this.SetMinStartGamble(0);
        this.SetLockGold(0);
        this.room = null;
        this.levelid = 0;
        this.tableid = 0;
        this.SetMyServerPos(0);
        this.palyerlist = null;
        this.MatchCode = "";
        this._posServer = 0;
        //_curRoomInfo = null;
        this.isline = false;
        this._CurTurnCount = 0;
        this.isGaming = false;
        this.isselfontable = false;
        this._curMaxGamble = 0;
        this._pos2openPai = [];
        console.log("清空手牌 个数:");
        this.isselfontable = false;
        this._curGambleLimitMin = 0;
        this._CommonCard = [];
        this._jackpot = 0;
        if (this._ShouPai != null) {
            this._ShouPai = [];
        }
        this._jpot = 0;
        this._lastjpot = 0;
        this.isTurnOver = false;
        this.isinsurance = false;
    };
    F_TexasModel.prototype.GetSelfServerCards = function () {
        var _this = this;
        var allCards = [];
        if (this._ShouPai == null || this._ShouPai.length <= 0) {
            console.log("展示分牌: 手牌不能为空");
            return allCards;
        }
        UIUtil_1.UIUtil.Concat(allCards, this._ShouPai);
        if (this._pos2openPai == null || this._pos2openPai.length <= 0) {
            console.log("展示分牌: 公开牌玩家为空");
        }
        this._pos2openPai.forEach(function (item) {
            if (item.pos == _this._posServer) {
                UIUtil_1.UIUtil.Concat(allCards, item.vallist);
            }
        });
        return allCards;
    };
    //判断某个位置是不是观众
    F_TexasModel.prototype.IsPosWatch = function (serverPos) {
        var isWatch = true;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(function (item) {
                if (item.pos == serverPos) {
                    // console.log("pos:item.isW" + item.isW);
                    isWatch = item.isW == 1;
                }
            });
        }
        //游戏未开始，不能是观众状态 .(游戏中才能显示观众状态)    
        return isWatch;
    };
    /// <summary>
    /// 占座等待中
    /// </summary>
    /// <param name="serverPos"></param>
    /// <returns></returns>
    F_TexasModel.prototype.IsPosWaitToTakeIn = function (serverPos) {
        var isWait = true;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(function (item) {
                if (item.pos == serverPos) {
                    // console.log("pos:22222222" + item.isW);
                    isWait = item.isW == 2;
                }
            });
        }
        //占座中
        return isWait;
    };
    //玩家是否在正在游戏中
    F_TexasModel.prototype.IsInPlaying = function (userId) {
        var isPlaying = false;
        if (this.PlayingUsers != null) {
            this.PlayingUsers.forEach(function (item) {
                if (item.pos == userId) {
                    isPlaying = true;
                }
            });
        }
        return isPlaying;
    };
    F_TexasModel.prototype.SetMyServerPos = function (pos) {
        this._posServer = pos;
        // console.log("设置 My serverPos:" + pos);
    };
    F_TexasModel.prototype.EnableMuteUser = function (userId, isMute) {
        this.muteUsers.set(userId, isMute);
    };
    F_TexasModel.prototype.GetUserIsMute = function (userId) {
        var isMute = false;
        if (this.muteUsers != null && this.muteUsers.has(userId)) {
            isMute = this.muteUsers.get(userId);
        }
        return isMute;
    };
    F_TexasModel.prototype.SetCurSClub = function (sclubId) {
        if (sclubId > 0 && this.clubslist != null)
            this.curSClub = this.clubslist.find(function (item) { return item.cid == sclubId; });
        else
            this.curSClub = null;
    };
    F_TexasModel.prototype.SetRemainTime = function (remainTime) {
        this.endTime = remainTime; //UIUtil.NumberToInt(cc.director.getTotalTime()/1000 + remainTime);
    };
    F_TexasModel.prototype.SetLockGold = function (lockGold) {
        this.tableLockGold = lockGold;
    };
    F_TexasModel.prototype.SetMinStartGamble = function (minGold) {
        this.minStartGamble = minGold;
    };
    F_TexasModel.prototype.CheckHasMe = function (lists) {
        var _this = this;
        var hasme = false;
        lists.find(function (a) {
            if (a.py.userid == _this.mPlayerModel.userid) {
                hasme = true;
                return true;
            }
            return false;
        });
        return hasme;
    };
    /// <summary>
    /// 检查是不是输了
    /// </summary>
    F_TexasModel.prototype.CheckIsLose = function (gold) {
        // if (LobbyViewCtr.instance.Model.LastEnterRoomData == null) return false;
        var data = this.gamelevel;
        if (data != null && gold < data._min) {
            return true;
        }
        return false;
    };
    return F_TexasModel;
}());
exports.F_TexasModel = F_TexasModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXE1vZGVsXFxGX1RleGFzTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQTBEO0FBQzFELCtFQUEwRTtBQUsxRTtJQUFBO1FBV1csY0FBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNyQyxrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVc7UUFDdEMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUEsU0FBUztRQUN2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFBLFNBQVM7UUFDN0IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBLGdCQUFnQjtRQUU5QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBVzVCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNQLFVBQUssR0FBVyxDQUFDLENBQUM7UUFNbEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQTZCakIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBc0MxQyxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDUCx1QkFBa0IsR0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUNqQyxrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUMsQ0FBQSxZQUFZO1FBUTVDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZUFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQWlCMUMsY0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUs7UUFlNUIsYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNQLGFBQVEsR0FBWSxJQUFJLENBQUM7UUE0QnpCLG9CQUFlLEdB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Q00sa0NBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNNLHdDQUFpQixHQUF4QixVQUF5QixPQUFlO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFDTyxpQ0FBVSxHQUFsQixVQUFtQixLQUF3QjtRQUEzQyxpQkFZQztRQVhHLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixLQUFLLENBQUMsSUFBSSxDQUNOLFVBQUEsQ0FBQztZQUNHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FDSixDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdELGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNQLGtDQUFXLEdBQWxCLFVBQW1CLElBQVk7UUFDM0IsMkVBQTJFO1FBQzNFLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBSUwsbUJBQUM7QUFBRCxDQXpnQkEsQUF5Z0JDLElBQUE7QUF6Z0JZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uUG9zVmFsU0QsIFBsYXllckluZm9TRCwgT3RoZXJVc2VySW5mb1NELCBDb21tb25Qb3NWYWxMaXN0U0QsIFJvb21JbmZvU0QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uLy4uLy4uLy4uL0dhbWVIYWxsL3NjcmlwdC9Mb2JieS9Mb2JieVZpZXdDdHJcIjtcbmltcG9ydCB7IFRhYmxlUm9vbUluZm9UZXgsIFN1cGVyQ2x1YiwgQ2FyZHMsIHNjX2VudGVydGFibGVudW1fdGV4LCBUYWJsZVJlY292ZXJUZXhhc1NEIH0gZnJvbSBcIi4vVGV4YXNOZXREYXRhXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgRl9UZXhhc01vZGVsIHtcbiAgICAvL+avlOi1m+ebuOWFs1xuICAgIHB1YmxpYyBBT0ZfVGltZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgbWluX2xldmVsOiBudW1iZXI7XG4gICAgcHVibGljIG1heF9sZXZlbDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb21wZXRlaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbWF0Y2hOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGJpZ2JsaW5kOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgX3RhYmxlUGxheWVyTGlzdDogc3RyaW5nO1xuICAgIHB1YmxpYyBfcG9zMkdvbGQ6IENvbW1vblBvc1ZhbFNEW10gPSBbXTtcbiAgICBwdWJsaWMgbVBsYXllck1vZGVsOiBQbGF5ZXJJbmZvU0Q7XG4gICAgcHVibGljIHRhYmxlQXBwbHkgPSAwO1xuICAgIHB1YmxpYyBtaW5TdGFydEdhbWJsZTogbnVtYmVyID0gMDsgLy/lvIDlp4vnmoTmnIDkvY7kuIvms6hcbiAgICBwdWJsaWMgdGFibGVMb2NrR29sZDogbnVtYmVyID0gMDsgLy/lvZPliY3moYzlrZDplIHlrprnmoTph5HluIFcbiAgICBwdWJsaWMgY3VyVGFibGVPdmVyQ291bnQ6IG51bWJlciA9IDA7Ly/kuIDlhbHnjqnkuoblpJrlsJHlsYBcbiAgICBwdWJsaWMgaXNHYW1lc3RhcnQgPSBmYWxzZTsvL+aYr+WQpuWPr+S7peWAkuiuoeaXtlxuICAgIHB1YmxpYyBqdWJhb1R5cGUgPSAwOy8v5Li+5oql57G75Z6L77yMMDrnjqnlrrbvvIwxOueJjOWxgFxuXG4gICAgcHVibGljIGN1ck1zZ0lkOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgcHVibGljIHJvb206IFRhYmxlUm9vbUluZm9UZXg7XG4gICAgcHVibGljIFJvb21fdG51bWJlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBSb29tX25hbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS6uuaVsCAg5Yeg5Lq65oi/5pi+56S6XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbWFuTnVtOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkurrmlbAgIOacgOS9juWkmuWwkeS6uuW8gOWQr+a4uOaIj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1pblBDOiBudW1iZXIgPSAwO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMeW8gOWQr1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGluczogbnVtYmVyO1xuICAgIHB1YmxpYyBvcGVuVjogbnVtYmVyO1xuICAgIHB1YmxpYyBwYXM6IHN0cmluZyA9IFwiXCI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmraTmoYzpnaLnmoTnjqnmnInmlbDmja4g5omA5pyJ5bimUE9T5YC8IOaYr+S7jjHlvIDlp4vvvIwgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcGFseWVybGlzdDogT3RoZXJVc2VySW5mb1NEW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlj6rmnInkvY3nva7nmoTkurrnlLPor7fmiY3og73nnIvliLBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwb3MyYXBwbHk6IENvbW1vblBvc1ZhbFNEW107XG4gICAgcHVibGljIE15RW5kTW9uZXk7IC8v6K6w5b2V5oiR5Ymp5L2Z55qE6ZKx77yM55So5LqO57uT5p2f55qE5pe25YCZ5Yik5pat5piv5ZCm6ZyA6KaB5by55Ye65Yqg6ZKx55WM6Z2iXG4gICAgcHVibGljIF9Db21tb25DYXJkOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgX09wZW5Db3VudDtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omA5pyJ5Lq655qE5YWs5byA5pi+56S65omL54mM77yM5byD54mM55qE5Lq65LiN5pi+56S6IFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9wb3Myb3BlblBhaTogQ29tbW9uUG9zVmFsTGlzdFNEW107XG4gICAgcHVibGljIF9TaG91UGFpOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgQmFua2VyUG9zOiBudW1iZXI7XG4gICAgcHVibGljIF9wb3NTZXJ2ZXI6IG51bWJlcjsgLy/miJHlnKjmnI3liqHlmajnmoTkvY3nva5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuato+WcqOaOkumYn1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlzbGluZTogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaOkumYn+S6uuaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9ubGluZW51bWJlcjtcbiAgICBwdWJsaWMgaXNHYW1pbmc6IGJvb2xlYW47IC8v54mM5bGA5piv5ZCm57uT5p2fXG4gICAgcHVibGljIGlzU2hvd1BlcnNvblJlbWluZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGlzc2VsZm9udGFibGU6IGJvb2xlYW47IC8v6Ieq5bex5piv5ZCm5Zyo5qGM5a2Q5LiK5q+U54mM5aSx6LSl77yM5pS+5byD6YO95Y+v5Lul56a75byA77yM6L+Z6YeM6KaB6YCa55+l5pyN5Yqh5Zmo5Y+R6YCB6YCA5Ye65raI5oGvXG4gICAgcHVibGljIGRlbGF5Q291bnQ6IG51bWJlcjsgLy/lu7bov5/mrKHmlbBcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeCueWHu+eci+WFrOeJjOasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsaWNrbnVtOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvLrliLbnnIvniYzmrKHmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBmc2hvd251bTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bey5a2Y5ZyoY2x1YiBnb2xkXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2dvbGQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpui2hee6p+iBlOebn+aIv+mXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElzU3VwcGVyOiBib29sZWFuO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm57uT566X56a75qGMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgSXNTZXR0bGU6IGJvb2xlYW47XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv7HkuZDpg6hpZFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsdWJpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5oi/5Li7aWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvd25uZXJpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+P5LiA6L2u5Y+q5pyJ5LiA5Y+q55yL54mM5py65LyaXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2V0IHNob3djYXJkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VyR2FtYmxlTGltaXRNaW4gPT0gMDtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW9k+WJjeWFgeiuuOS4i+azqOeahOacgOWwj+WAvCDkuLow6KGo56S65Y+v5Lul55yL54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX2N1ckdhbWJsZUxpbWl0TWluOiBudW1iZXIgPSAwOyAvL+W9k+WJjeWNleasoeS4i+azqOWAvFxuICAgIHB1YmxpYyBfY3VyTWF4R2FtYmxlOiBudW1iZXIgPSAwOyAvL+WwgemhtuS4i+azqFxuICAgIHB1YmxpYyBfQ3VyVHVybkNvdW50OiBudW1iZXIgPSAwOyAvL+W9k+WJjei9ruaVsFxuICAgIHB1YmxpYyBmaXJzdFR1cm5TdGFydDogYm9vbGVhbiA9IGZhbHNlOy8v5b2T5YmN5piv5ZCm5piv56ys5LiA5Liq5pON5L2cXG4gICAgcHVibGljIF9qYWNrcG90OiBudW1iZXI7IC8v5b2T5YmN55qE5aWW5rGg5pWwXG4gICAgcHVibGljIF9qcG90OiBudW1iZXI7IC8v5b2T5YmN55qE5bqV55quXG4gICAgcHVibGljIF9sYXN0anBvdDogbnVtYmVyOyAvL+S4iuS4gOi9rueahOW6leearizlj6rmnInov5vlhaXmiL/pl7TmnI3liqHlmajkvKDlgLzvvIzmuLjmiI/kuK3pg73mmK/lrqLmiLfnq6/oh6rlt7HlpITnkIZcbiAgICBwdWJsaWMgX21hbmdvT2ZUYWJsZTogbnVtYmVyOyAvL+W9k+WJjeWlluaxoFxuICAgIHB1YmxpYyBfbWluZ2FtYmxlOiBudW1iZXI7IC8v5b2T5YmN55qE5YWB6K6455qE5pyA5bCP5LiL5rOoIEFsbGlu6Zmk5aSWXG4gICAgcHVibGljIF9lbWF4ZzogbnVtYmVyO1xuICAgIHB1YmxpYyBlbmREZWxheTogYm9vbGVhbjtcbiAgICBwdWJsaWMgX2dhbWJsZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdHVybkdhbWJsZTogbnVtYmVyID0gMDsgLy8g5b2T5YmN6L2u55qE5pyA5aSn5LiL5rOoYWxsaW7pmaTlpJZcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWQjOi2hee6p+iBlOebn+eahOS/seS5kOmDqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGNsdWJzbGlzdDogU3VwZXJDbHViW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvZPliY3pgInkuK3nmoTliqDlhaXotoXnuqfogZTnm5/nmoTkv7HkuZDpg6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjdXJTQ2x1YjogU3VwZXJDbHViO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6LaF57qn6IGU55ufICDnjqnlrrbluKblhaXkv7HkuZDpg6jnmoRpZCAgICDliJ3lp4vkuLowXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaW50b0NpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Li75rGg6L655rGg6buY6K6k56ys5LiA5Liq5Li65Li75rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcG90bGlzdDogbnVtYmVyW107XG4gICAgcHVibGljIE1hdGNoQ29kZSA9IFwiXCI7IC8v54mM5bGA5Y+3XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDoh6rlt7HnmoTnp4DniYzpm4blkIhcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfc2NhcmRzOiBDYXJkc1tdO1xuICAgIHB1YmxpYyBicmF0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRvcmF0ZV9taW46IG51bWJlcjtcbiAgICBwdWJsaWMgaW50b3JhdGVfbWF4OiBudW1iZXI7XG4gICAgcHVibGljIHByZWdhbWJsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBncHM6IG51bWJlcjtcbiAgICBwdWJsaWMgaXA6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWmguaenOacieiHquW3seeahOaTjeS9nOabtOaWsOacgOaWsOeahOWAkuiuoeaXtlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGxlZnR0aW1lOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/kuLvlkIzmhI/lvIDlsYAgXG4gICAgLy8vIOm7mOiupOmDveS4unRydWVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBvcGVucGxheTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiL/kuLvlkIzmhI/lvIDlsYDlvIDlhbPmiZPlvIDlkI7vvIzlvZPliY3miL/pl7TmiL/kuLvmmK/lkKblt7Lnu4/ngrnlvIDlvIDlkK/niYzlsYDnirbmgIFcbiAgICAvLy8g6buY6K6k6YO95Li6dHJ1ZVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlzb3BlbjogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpumZkOWItmlvc1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlvczogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOmZkOWItuWFpeaxoOeOh1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEluZmxvdzogbnVtYmVyO1xuICAgIHB1YmxpYyBnYW1ldHlwZTogbnVtYmVyO1xuICAgIHB1YmxpYyBkZWxheTogbnVtYmVyO1xuICAgIHB1YmxpYyBzaG93Q2FyZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5o6n5Yi25bim5YWlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2ludG86IGJvb2xlYW47XG4gICAgLy9wdWJsaWMgaW50IGJtYW5nbztcbiAgICBwdWJsaWMgdGFibGU6IHNjX2VudGVydGFibGVudW1fdGV4O1xuICAgIHB1YmxpYyByZWNvdmVyOiBUYWJsZVJlY292ZXJUZXhhc1NEO1xuICAgIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgaXNUdXJuT3ZlcjogYm9vbGVhbjsgLy/lvZPliY3miYvnu5PmnZ9cblxuICAgIHB1YmxpYyBpc0xhc3RTdGVwU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBtdXRlVXNlcnM6IE1hcDxudW1iZXIsIGJvb2xlYW4+ID0gbmV3IE1hcDxudW1iZXIsIGJvb2xlYW4+KCk7XG5cbiAgICBwdWJsaWMgUGxheWluZ1VzZXJzOiBDb21tb25Qb3NWYWxTRFtdOyAvL+W9k+WJjeWxgOato+WcqOeOqeeahOeOqeWutlxuICAgIHB1YmxpYyBCaWdTbWFsbFBsYXlpbmdVc2VyOiBDb21tb25Qb3NWYWxTRFtdOyAvL+W9k+WJjeWxgOWkp+Wwj+ebsueOqeWutlxuXG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IGluc0xpc3Q7IC8v5Y+v6YCJ5L+d6aKd5YiX6KGoXG4gICAgLy9wdWJsaWMgTGlzdDxpbnQ+IG91dHM7IC8v6KGl54mMXG4gICAgLy8vL3B1YmxpYyBkb3VibGUgcmF0ZTsgLy/otZTnjodcbiAgICAvL3B1YmxpYyBpbnQgY3VySmlhbmdjaGk7IC8v5b2T5YmN6Ieq5bex55qE5aWW5rGgXG4gICAgcHVibGljIGluc0xpc3QzMjogbnVtYmVyW107IC8v5Y+v6YCJ5L+d6aKd5YiX6KGoXG4gICAgcHVibGljIG91dHMzMjogbnVtYmVyW107IC8v6KGl54mMXG4gICAgcHVibGljIHJhdGUzMjogbnVtYmVyOyAvL+i1lOeOh1xuICAgIHB1YmxpYyBjdXJKaWFuZ2NoaTMyOiBudW1iZXI7IC8v5b2T5YmN6Ieq5bex55qE5aWW5rGg5YiG5rGgXG4gICAgcHVibGljIGN1ckppYW5nY2hpMzE6IG51bWJlcjsvL+W9k+WJjeiHquW3seeahOWlluaxoOS4u+axoFxuICAgIHB1YmxpYyBpbnNMaXN0MzE6IG51bWJlcltdO1xuICAgIHB1YmxpYyBvdXRzMzE6IG51bWJlcltdOyAvL+ihpeeJjFxuICAgIHB1YmxpYyBpbk9yZGVyOiBudW1iZXI7Ly/lt7LmipXkv51cbiAgICBwdWJsaWMgaW5zSXBvczogQ29tbW9uUG9zVmFsU0RbXTsvL3ZhbDow5Y+v6LSt5Lmw5Li75rGg5ZKM5YiG5rGg77yMMeS4u+axoO+8jDLliIbmsaDvvJtcblxuICAgIHB1YmxpYyBpZDJrZWVwOiBDb21tb25Qb3NWYWxTRFtdID0gW107XG4gICAgcHVibGljIGlzaW5zdXJhbmNlOiBib29sZWFuOyAvL+aYr+WQpuato+WcqOS/nemZqeaooeW8j1xuICAgIHB1YmxpYyBGX1RleGFzTW9kZWwoKSB7XG4gICAgICAgIHRoaXMuX0NvbW1vbkNhcmQgPSBbXTtcbiAgICAgICAgdGhpcy5fU2hvdVBhaSA9IFtdO1xuICAgICAgICB0aGlzLl9wb3Myb3BlblBhaSA9IFtdO1xuICAgICAgICB0aGlzLlJlc2V0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBJbml0KCkge1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkID0gW107XG4gICAgICAgIHRoaXMuX1Nob3VQYWkgPSBbXTtcbiAgICAgICAgdGhpcy5fcG9zMm9wZW5QYWkgPSBbXTtcbiAgICAgICAgdGhpcy5wYWx5ZXJsaXN0ID0gW107XG4gICAgICAgIHRoaXMuUmVzZXQoKTtcbiAgICB9XG4gICAgcHVibGljIFNldGJhc2VEYXRhSWQoZ2lkOiBudW1iZXIsIHRpZDogbnVtYmVyLCBsdmlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nYW1laWQgPSBnaWQ7XG4gICAgICAgIHRoaXMudGFibGVpZCA9IHRpZDtcbiAgICAgICAgdGhpcy5sZXZlbGlkID0gbHZpZDtcbiAgICAgICAgdGhpcy5TZXRUYWxiZUluZm8odGlkLCBsdmlkKTtcbiAgICB9XG4gICAgcHVibGljIFNldFRhbGJlSW5mbyh0aWQ6IG51bWJlciwgbHZpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGFibGVpZCA9IHRpZDtcbiAgICAgICAgdGhpcy5sZXZlbGlkID0gbHZpZDtcbiAgICAgICAgaWYgKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC50YWJsZUxpc3QgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudGFibGVMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS50aWQgPT0gdGhpcy50YWJsZWlkICYmIGl0ZW0ubHZpZCA9PSB0aGlzLmxldmVsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb20gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVtb3ZlUGxheWVyTGlzdCh1c2VySUQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYiA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wYWx5ZXJsaXN0ID09IG51bGwpIHJldHVybiBiO1xuICAgICAgICB0aGlzLnBhbHllcmxpc3QuZm9yRWFjaCgoX291c2QsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKF9vdXNkLnB5LnVzZXJpZCA9PSB1c2VySUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbHllcmxpc3Quc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJRCA9PSB0aGlzLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRNeVNlcnZlclBvcygwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5wYWx5ZXJsaXN0ID09PSBcIiwgdGhpcy5wYWx5ZXJsaXN0KTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHB1YmxpYyBSZW1vdmVQb3MyQXBwbHkocG9zOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucG9zMmFwcGx5ID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3MyYXBwbHkuZm9yRWFjaCgoX291c2QsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKF9vdXNkLnBvcyA9PSBwb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvczJhcHBseS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRVc2VySW5mbyh1c2VySWQ6IG51bWJlcik6IE90aGVyVXNlckluZm9TRCB7XG4gICAgICAgIGxldCB1c2VyOiBPdGhlclVzZXJJbmZvU0QgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wYWx5ZXJsaXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFseWVybGlzdC5mb3JFYWNoKF9vdXNkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX291c2QucHkudXNlcmlkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyID0gX291c2Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gICAgcHVibGljIEdldFVzZXJJbmZvQnlQb3MocG9zOiBudW1iZXIpOiBPdGhlclVzZXJJbmZvU0Qge1xuICAgICAgICBsZXQgdXNlcjogT3RoZXJVc2VySW5mb1NEID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucGFseWVybGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhbHllcmxpc3QuZm9yRWFjaChfb3VzZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9vdXNkLnBvcyA9PSBwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9vdXNkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0VXNlckRhdGFfaXNXX3Bvcyh1c2VySWQ6IG51bWJlciwgaXNXOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVzZXI6IE90aGVyVXNlckluZm9TRCA9IHRoaXMuR2V0VXNlckluZm8odXNlcklkKTtcbiAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdXNlci5pc1cgPSBpc1c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFNldFVzZXJEYXRhX2lzVyh1c2VySWQ6IG51bWJlciwgaXNXOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5TZXRVc2VyRGF0YV9ubm4odXNlcklkLCAxLCBpc1cpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRVc2VyRGF0YV9pc0sodXNlcklkOiBudW1iZXIsIGtlZXBUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5TZXRVc2VyRGF0YV9ubm4odXNlcklkLCAyLCBrZWVwVGltZSk7XG4gICAgfVxuXG4gICAgLy/nu5/kuIDkv67mlLnmlbDmja4g5p6a5Li+5pa55L6/6LCD55SoXG4gICAgLy8gcHVibGljIFNldFVzZXJEYXRhICh1c2VySWQ6bnVtYmVyLCBrZXk6VXNlckluZm9LZXksIHZhbHVlOm51bWJlcikge1xuICAgIC8vICAgICB0aGlzLlNldFVzZXJEYXRhX25ubiAodXNlcklkLCBVSVV0aWwuTnVtYmVyVG9JbnQoa2V5KSwgdmFsdWUpO1xuICAgIC8vIH1cblxuICAgIC8v57uf5LiA5L+u5pS55pWw5o2uIDEua2V5OmlzVyjop4LkvJfnirbmgIEpIDIuIGtleTppc0sg55WZ5bqn54q25oCBIDMuXG4gICAgcHVibGljIFNldFVzZXJEYXRhX25ubih1c2VySWQ6IG51bWJlciwga2V5OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVzZXI6IE90aGVyVXNlckluZm9TRCA9IHRoaXMuR2V0VXNlckluZm8odXNlcklkKTtcbiAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuaXNXID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pc0sgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEdldFJlYWR5Q291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgaWYgKHRoaXMucGFseWVybGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhbHllcmxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc1cgIT0gMSAmJiBpdGVtLmlzVyAhPSAyICYmIGl0ZW0uaXNLIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0TWluUGxheWVyQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluUEM7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZFBsYXllckxpc3QodXNlcjogT3RoZXJVc2VySW5mb1NEKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWx5ZXJsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgX291c2QgPSB0aGlzLnBhbHllcmxpc3RbaV07XG4gICAgICAgICAgICBpZiAoX291c2QucHkudXNlcmlkID09IHVzZXIucHkudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWx5ZXJsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbHllcmxpc3QucHVzaCh1c2VyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYWx5ZXJsaXN0KTtcbiAgICB9XG4gICAgcHVibGljIEFkZFBvczJBcHBseUxpc3QodXNlcjogQ29tbW9uUG9zVmFsU0QpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvczJhcHBseS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIF9vdXNkID0gdGhpcy5wb3MyYXBwbHlbaV07XG4gICAgICAgICAgICBpZiAoX291c2QucG9zID09IHVzZXIucG9zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MyYXBwbHkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zMmFwcGx5LnB1c2godXNlcik7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5riF55CG5pWw5o2u5YeG5aSH5LiL5LiA5qyh5ri45oiPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuU2V0TWluU3RhcnRHYW1ibGUoMCk7XG4gICAgICAgIHRoaXMuU2V0TG9ja0dvbGQoMCk7XG4gICAgICAgIHRoaXMucm9vbSA9IG51bGw7XG4gICAgICAgIHRoaXMubGV2ZWxpZCA9IDA7XG4gICAgICAgIHRoaXMudGFibGVpZCA9IDA7XG4gICAgICAgIHRoaXMuU2V0TXlTZXJ2ZXJQb3MoMCk7XG4gICAgICAgIHRoaXMucGFseWVybGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuTWF0Y2hDb2RlID0gXCJcIjtcbiAgICAgICAgdGhpcy5fcG9zU2VydmVyID0gMDtcbiAgICAgICAgLy9fY3VyUm9vbUluZm8gPSBudWxsO1xuICAgICAgICB0aGlzLmlzbGluZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9DdXJUdXJuQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmlzR2FtaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNzZWxmb250YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jdXJNYXhHYW1ibGUgPSAwO1xuICAgICAgICB0aGlzLl9wb3Myb3BlblBhaSA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIua4heepuuaJi+eJjCDkuKrmlbA6XCIpO1xuICAgICAgICB0aGlzLmlzc2VsZm9udGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY3VyR2FtYmxlTGltaXRNaW4gPSAwO1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkID0gW107XG4gICAgICAgIHRoaXMuX2phY2twb3QgPSAwO1xuICAgICAgICBpZiAodGhpcy5fU2hvdVBhaSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9TaG91UGFpID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fanBvdCA9IDA7XG4gICAgICAgIHRoaXMuX2xhc3RqcG90ID0gMDtcbiAgICAgICAgdGhpcy5pc1R1cm5PdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNpbnN1cmFuY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIEdldFNlbGZTZXJ2ZXJDYXJkcygpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBhbGxDYXJkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuX1Nob3VQYWkgPT0gbnVsbCB8fCB0aGlzLl9TaG91UGFpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekuuWIhueJjDog5omL54mM5LiN6IO95Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbENhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgVUlVdGlsLkNvbmNhdChhbGxDYXJkcywgdGhpcy5fU2hvdVBhaSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3BvczJvcGVuUGFpID09IG51bGwgfHwgdGhpcy5fcG9zMm9wZW5QYWkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bGV56S65YiG54mMOiDlhazlvIDniYznjqnlrrbkuLrnqbpcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9zMm9wZW5QYWkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBvcyA9PSB0aGlzLl9wb3NTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBVSVV0aWwuQ29uY2F0KGFsbENhcmRzLCBpdGVtLnZhbGxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWxsQ2FyZHM7XG5cbiAgICB9XG4gICAgLy/liKTmlq3mn5DkuKrkvY3nva7mmK/kuI3mmK/op4LkvJdcbiAgICBwdWJsaWMgSXNQb3NXYXRjaChzZXJ2ZXJQb3M6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaXNXYXRjaCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnBhbHllcmxpc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYWx5ZXJsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucG9zID09IHNlcnZlclBvcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBvczppdGVtLmlzV1wiICsgaXRlbS5pc1cpO1xuICAgICAgICAgICAgICAgICAgICBpc1dhdGNoID0gaXRlbS5pc1cgPT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5ri45oiP5pyq5byA5aeL77yM5LiN6IO95piv6KeC5LyX54q25oCBIC4o5ri45oiP5Lit5omN6IO95pi+56S66KeC5LyX54q25oCBKSAgICBcbiAgICAgICAgcmV0dXJuIGlzV2F0Y2g7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y2g5bqn562J5b6F5LitXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJzZXJ2ZXJQb3NcIj48L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHVibGljIElzUG9zV2FpdFRvVGFrZUluKHNlcnZlclBvczogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc1dhaXQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5wYWx5ZXJsaXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFseWVybGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnBvcyA9PSBzZXJ2ZXJQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3M6MjIyMjIyMjJcIiArIGl0ZW0uaXNXKTtcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0ID0gaXRlbS5pc1cgPT0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Y2g5bqn5LitXG4gICAgICAgIHJldHVybiBpc1dhaXQ7XG4gICAgfVxuICAgIC8v546p5a625piv5ZCm5Zyo5q2j5Zyo5ri45oiP5LitXG4gICAgcHVibGljIElzSW5QbGF5aW5nKHVzZXJJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuUGxheWluZ1VzZXJzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuUGxheWluZ1VzZXJzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucG9zID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBpc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1BsYXlpbmc7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRNeVNlcnZlclBvcyhwb3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3NTZXJ2ZXIgPSBwb3M7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6K6+572uIE15IHNlcnZlclBvczpcIiArIHBvcyk7XG4gICAgfVxuICAgIHB1YmxpYyBFbmFibGVNdXRlVXNlcih1c2VySWQ6IG51bWJlciwgaXNNdXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubXV0ZVVzZXJzLnNldCh1c2VySWQsIGlzTXV0ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRVc2VySXNNdXRlKHVzZXJJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc011dGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMubXV0ZVVzZXJzICE9IG51bGwgJiYgdGhpcy5tdXRlVXNlcnMuaGFzKHVzZXJJZCkpIHtcblxuICAgICAgICAgICAgaXNNdXRlID0gdGhpcy5tdXRlVXNlcnMuZ2V0KHVzZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNNdXRlO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0Q3VyU0NsdWIoc2NsdWJJZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzY2x1YklkID4gMCAmJiB0aGlzLmNsdWJzbGlzdCAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jdXJTQ2x1YiA9IHRoaXMuY2x1YnNsaXN0LmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLmNpZCA9PSBzY2x1YklkIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmN1clNDbHViID0gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIFNldFJlbWFpblRpbWUocmVtYWluVGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHJlbWFpblRpbWU7Ly9VSVV0aWwuTnVtYmVyVG9JbnQoY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkvMTAwMCArIHJlbWFpblRpbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0TG9ja0dvbGQobG9ja0dvbGQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRhYmxlTG9ja0dvbGQgPSBsb2NrR29sZDtcbiAgICB9XG4gICAgcHVibGljIFNldE1pblN0YXJ0R2FtYmxlKG1pbkdvbGQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pblN0YXJ0R2FtYmxlID0gbWluR29sZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBDaGVja0hhc01lKGxpc3RzOiBPdGhlclVzZXJJbmZvU0RbXSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaGFzbWUgPSBmYWxzZTtcbiAgICAgICAgbGlzdHMuZmluZChcbiAgICAgICAgICAgIGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnB5LnVzZXJpZCA9PSB0aGlzLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaGFzbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdhbWVsZXZlbDogUm9vbUluZm9TRDtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOajgOafpeaYr+S4jeaYr+i+k+S6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIENoZWNrSXNMb3NlKGdvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkxhc3RFbnRlclJvb21EYXRhID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IGRhdGE6IFJvb21JbmZvU0QgPSB0aGlzLmdhbWVsZXZlbDtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCAmJiBnb2xkIDwgZGF0YS5fbWluKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cblxufVxuIl19