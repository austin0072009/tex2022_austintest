"use strict";
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