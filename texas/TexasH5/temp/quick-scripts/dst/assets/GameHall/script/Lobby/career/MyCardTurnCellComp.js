
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/MyCardTurnCellComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79df7AbUZtP5I1QdqVoB4Gr', 'MyCardTurnCellComp');
// GameHall/script/Lobby/career/MyCardTurnCellComp.ts

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
exports.TurnTitleComp = exports.MyCardTurnCellComp = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var CareerNetDataStruct_1 = require("./CareerNetDataStruct");
var TexasBase_1 = require("./TexasBase");
var MyCardTurnCellComp = /** @class */ (function (_super) {
    __extends(MyCardTurnCellComp, _super);
    function MyCardTurnCellComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.historyComp = null;
        _this.ui_turnTitle = null;
        _this.ui_turnInfoList = null;
        _this._Cards = [];
        _this.onLoadEnd = false;
        return _this;
    }
    MyCardTurnCellComp.prototype.OnLoadCompleted = function () {
        // super.AutoSetGoProperty();
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    MyCardTurnCellComp.prototype.MyStart = function (infoData, plist, cards, turn, lastTotalDizhu, bPos, tInfo) {
        this.mystart = true;
        this.dataList = infoData;
        this.users = plist;
        this.bpos = bPos;
        this.tuInfo = tInfo;
        this._Cards = cards;
        this._turn = turn;
        this._lastTotalDizhu = lastTotalDizhu;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    MyCardTurnCellComp.prototype.AutoSetGoProperty = function () { };
    MyCardTurnCellComp.prototype.MyStartEx = function () {
        console.log("getChild : " + this.fguiComponent.name);
        this.ui_turnTitle = this.fguiComponent.getChild("turnTitle").asCom;
        this.ui_turnInfoList = this.fguiComponent.getChild("turnInfoList").asList;
        this.fguiHeight = 122;
        this.DisplayTurnInfo();
        this.DisplayTitle(this._Cards, this._turn, this._lastTotalDizhu);
    };
    MyCardTurnCellComp.prototype.DisplayTitle = function (cards, curTurn, dizhu) {
        var comp = this.ui_turnTitle.node.getComponent(TurnTitleComp);
        if (comp == null) {
            comp = this.ui_turnTitle.node.addComponent(TurnTitleComp);
            comp.fguiComponent = this.ui_turnTitle;
            comp.historyComp = this.historyComp;
            // this.ui_turnTitle.node.active = true;
        }
        comp.MyStart1(this.dataList, cards, curTurn, dizhu);
    };
    MyCardTurnCellComp.prototype.DisplayTurnInfo = function () {
        this.ui_turnInfoList.removeChildrenToPool();
        if (this.dataList == null || this.dataList.length == 0)
            return;
        var go = null;
        var folders = 0;
        this.addCounts = 0;
        this.fguiHeight = 122;
        for (var i = 0; i < this.dataList.length; i++) 
        // for (var i = 0; i < 10; i++)
        {
            var curData = this.dataList[i];
            var type = curData.at;
            //连续两个及其以上不显示玩家直接显示文本几个folds
            if (type == 5 && i < this.dataList.length - 1) {
                folders += 1;
                var nextData = this.dataList[i + 1];
                var nexttype = nextData.at;
                if (nexttype == CareerNetDataStruct_1.TexasTurnActionEnum.fold) {
                    continue;
                }
            }
            go = this.ui_turnInfoList.addItemFromPool();
            this.historyComp.ui_turnContent.height += 51 + 22;
            this.fguiHeight += 51 + 22;
            // this.historyComp.ui_historyGroup.node.height += 51+51+20;
            this.SetTurnCellInfo(go.asCom, curData, folders);
            folders = 0;
        }
        // console.log("======DisplayTurnInfo == ui_turnInfoList.numItems:"+ this.ui_turnInfoList.numItems+", ui_turnContent.height:"+this.historyComp.ui_turnContent.height );
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_turnInfoList.gameObject.GetComponent<RectTransform>());
        // LayoutRebuilder.ForceRebuildLayoutImmediate(gameObject.GetComponent<RectTransform>());
    };
    MyCardTurnCellComp.prototype.SetTurnCellInfo = function (cellItem, infoSD, folds) {
        if (folds === void 0) { folds = 0; }
        var infoPanel = cellItem.getChild("turnInfoCellPanel").asGroup;
        var foldPanel = cellItem.getChild("turnFlodTxt").asTextField;
        infoPanel.visible = (folds <= 1);
        foldPanel.visible = (folds >= 2);
        if (folds <= 1) {
            var posName = cellItem.getChild("curPosName").asTextField;
            var playerName = cellItem.getChild("txtName").asTextField;
            var handleBg = cellItem.getChild("handleBg").asLoader;
            var handleTitle = cellItem.getChild("handleTitle").asTextField;
            var handleValue = cellItem.getChild("handleValue").asTextField;
            var turnFlodTxt = cellItem.getChild("txtCurGamble").asTextField;
            var userInfo = this.GetUser(infoSD.id);
            UIUtil_1.UIUtil.SetLimitTxt(playerName, userInfo.wName, 6);
            handleValue.text = UIUtil_1.UIUtil.formatNumber100(infoSD.g) + "";
            posName.text = TexasBase_1.TexasBase.getPlayerPosType(infoSD.pos, this.bpos, this.tuInfo);
            turnFlodTxt.text = ""; //infoSD.turn == 1 ? UIUtil.formatNumber100(infoSD.jg) + "" : "P:" + UIUtil.formatNumber100(infoSD.jg);
            var type = infoSD.at;
            if (type == CareerNetDataStruct_1.TexasTurnActionEnum.B) {
                this.addCounts += 1;
            }
            this.SetHandleBytType(type, handleTitle, handleBg, infoSD.turn);
            posName.color = type == CareerNetDataStruct_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            playerName.color = type == CareerNetDataStruct_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            handleValue.color = type == CareerNetDataStruct_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            turnFlodTxt.color = type == CareerNetDataStruct_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
        }
        else {
            foldPanel.text = folds + "folds";
        }
    };
    MyCardTurnCellComp.prototype.SetHandleBytType = function (type, txt, img, curTurn) {
        var str = "";
        var imgStr = "hanlde_red";
        UIUtil_1.UIUtil.ImageGreyToggle(img, false);
        switch (type) {
            case CareerNetDataStruct_1.TexasTurnActionEnum.allin:
                imgStr = "hanlde_red";
                str = "A";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.B1:
                imgStr = "hanlde_red";
                str = "R";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.B1_2:
                imgStr = "hanlde_red";
                str = "B";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.B2_3:
                imgStr = "hanlde_red";
                str = "3B";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.bb:
                str = "BB";
                imgStr = "handlle_green";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.call:
                str = "C";
                imgStr = "handlle_green";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.Check:
                str = "X";
                imgStr = "handlle_green";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.fold:
                UIUtil_1.UIUtil.ImageGreyToggle(img, true);
                str = "F";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.sb:
                str = "SB";
                imgStr = "handlle_green";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.stradlle:
                imgStr = "hanlde_red";
                str = "S";
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.B:
                imgStr = "hanlde_red";
                if (curTurn == 1) {
                    str = (2 + this.addCounts) + "B";
                }
                else {
                    str = this.addCounts > 1 ? "R" : "B";
                }
                break;
            case CareerNetDataStruct_1.TexasTurnActionEnum.Ins:
                imgStr = "hanlde_red";
                str = "i";
                break;
        }
        txt.text = str;
        UIUtil_1.UIUtil.loadImage(img, imgStr, "Lobby");
    };
    MyCardTurnCellComp.prototype.GetUser = function (id) {
        if (this.users == null) {
            return null;
        }
        return this.users.find(function (user) { return user.uid == id; });
    };
    return MyCardTurnCellComp;
}(ViewBase_1.default));
exports.MyCardTurnCellComp = MyCardTurnCellComp;
var TurnTitleComp = /** @class */ (function (_super) {
    __extends(TurnTitleComp, _super);
    function TurnTitleComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.historyComp = null;
        _this.ui_turnName = null;
        _this.ui_turnCardsList = null;
        // public Transform ui_turnCardCell;
        _this.ui_playerCount = null;
        _this.ui_lastTurnGamble = null;
        _this.onLoadEnd = false;
        return _this;
    }
    TurnTitleComp.prototype.MyStart1 = function (dataList, cards, turn, lastDizhu) {
        this.mystart = true;
        this._dataList = dataList;
        this._cards = cards;
        this._turn = turn;
        this._lastDizhu = lastDizhu;
        if (this.onLoadEnd) {
            this.AutoSetGoPropertyEx();
            this.setData1(this._dataList, this._cards, this._turn, this._lastDizhu);
        }
    };
    TurnTitleComp.prototype.MyStart2 = function (playerNum, cards, turn, lastDizhu) {
        this.mystart = true;
        this._playerNum = playerNum;
        this._cards = cards;
        this._turn = turn;
        this._lastDizhu = lastDizhu;
        if (this.onLoadEnd) {
            this.AutoSetGoPropertyEx();
            this.setData2(this._playerNum, this._cards, this._turn, this._lastDizhu);
        }
    };
    TurnTitleComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.AutoSetGoPropertyEx();
            if (this._dataList) {
                this.setData1(this._dataList, this._cards, this._turn, this._lastDizhu);
            }
            else {
                this.setData2(this._playerNum, this._cards, this._turn, this._lastDizhu);
            }
        }
    };
    TurnTitleComp.prototype.AutoSetGoProperty = function () {
    };
    TurnTitleComp.prototype.AutoSetGoPropertyEx = function () {
        console.log("getChild : " + this.fguiComponent.name);
        this.ui_turnName = this.fguiComponent.getChild("turnName").asTextField;
        this.ui_turnCardsList = this.fguiComponent.getChild("turnCardsList").asList;
        this.ui_playerCount = this.fguiComponent.getChild("playerCount").asTextField;
        this.ui_lastTurnGamble = this.fguiComponent.getChild("lastTurnGamble").asTextField;
    };
    TurnTitleComp.prototype.setData1 = function (dataList, cards, turn, lastDizhu) {
        var newList = [];
        var list = "{";
        dataList.forEach(function (value) { list += value.id + ","; });
        console.log("去重前： " + list + " }");
        var obj = {};
        newList = dataList.reduce(function (item, next) {
            if (!obj[next.id]) {
                item.push(next);
                obj[next.id] = true;
            }
            return item;
        }, []);
        var list2 = "{";
        newList.forEach(function (value) { list2 += value.id + ","; });
        console.log("去重后：" + list2 + " }");
        this.DisplayTitle(newList.length, cards, turn, lastDizhu);
    };
    TurnTitleComp.prototype.setData2 = function (playerNum, cards, turn, lastDizhu) {
        this.DisplayTitle(playerNum, cards, turn, lastDizhu);
    };
    TurnTitleComp.prototype.DisplayTitle = function (playerNum, cards, turn, lastDizhu) {
        this.ui_turnName.text = this.getTurnName(turn);
        this.ui_playerCount.text = playerNum + "";
        this.ui_lastTurnGamble.text = UIUtil_1.UIUtil.formatNumber100(lastDizhu) + "";
        var go = null;
        this.ui_turnCardsList.removeChildrenToPool();
        if (cards == null || cards.length == 0)
            return;
        var cardsNum = this.displayCardsNum(turn, cards.length);
        for (var i = 0; i < cards.length && i < cardsNum; i++) {
            var cardId = cards[i];
            go = this.ui_turnCardsList.addItemFromPool();
            UIUtil_1.UIUtil.loadImage(go.asCom.getChild("turnCardCell").asLoader, cardId == 0 ? "001" : cardId + "_1", "Lobby");
        }
    };
    TurnTitleComp.prototype.displayCardsNum = function (turn, cards) {
        var cardsNum = 0;
        switch (turn) {
            case -1:
                cardsNum = 5;
                break;
            case 1:
                cardsNum = 0;
                break;
            case 2:
                cardsNum = 3;
                break;
            case 3:
                cardsNum = 4;
                break;
            case 4:
                cardsNum = 5;
                break;
            case 5:
                cardsNum = cards;
                break;
        }
        return cardsNum;
    };
    TurnTitleComp.prototype.getTurnName = function (turn) {
        var str = "";
        var type = turn;
        switch (type) {
            case CareerNetDataStruct_1.TexasTurnEnum.Init:
                str = "牌谱";
                break;
            case CareerNetDataStruct_1.TexasTurnEnum.Turn1_0:
                str = "Preflop";
                break;
            case CareerNetDataStruct_1.TexasTurnEnum.Turn2_3:
                str = "Flop";
                break;
            case CareerNetDataStruct_1.TexasTurnEnum.Turn3_4:
                str = "Turn";
                break;
            case CareerNetDataStruct_1.TexasTurnEnum.Turn4_5:
                str = "River";
                break;
            case CareerNetDataStruct_1.TexasTurnEnum.TrunCompare:
                str = "Showdown";
                break;
        }
        return str;
    };
    return TurnTitleComp;
}(ViewBase_1.default));
exports.TurnTitleComp = TurnTitleComp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcTXlDYXJkVHVybkNlbGxDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsMkRBQTBEO0FBQzFELDZEQUFnSDtBQUVoSCx5Q0FBd0M7QUFDeEM7SUFBd0Msc0NBQVE7SUFBaEQ7UUFBQSxxRUErTEM7UUE5TFUsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyxxQkFBZSxHQUFlLElBQUksQ0FBQztRQVFsQyxZQUFNLEdBQWEsRUFBRSxDQUFDO1FBR3RCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBZ0w5QixDQUFDO0lBL0tHLDRDQUFlLEdBQWY7UUFDSSw2QkFBNkI7UUFFN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLFFBQXVCLEVBQUUsS0FBZ0IsRUFBRSxLQUFlLEVBQUUsSUFBWSxFQUFFLGNBQXNCLEVBQUUsSUFBWSxFQUFFLEtBQXNCO1FBR2pKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUks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ZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsJztcbmltcG9ydCB7IFBJbmZvU0QsIFRleEFjdGlvblNELCBUZXhhc1R1cm5BY3Rpb25FbnVtLCBUZXhhc1R1cm5FbnVtLCBUZXhVc2VySW5mb1NEIH0gZnJvbSAnLi9DYXJlZXJOZXREYXRhU3RydWN0JztcbmltcG9ydCBNeUNhcmRIaXN0b3J5IGZyb20gJy4vTXlDYXJkSGlzdG9yeSc7XG5pbXBvcnQgeyBUZXhhc0Jhc2UgfSBmcm9tICcuL1RleGFzQmFzZSc7XG5leHBvcnQgY2xhc3MgTXlDYXJkVHVybkNlbGxDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyBoaXN0b3J5Q29tcDogTXlDYXJkSGlzdG9yeSA9IG51bGw7XG4gICAgcHVibGljIHVpX3R1cm5UaXRsZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90dXJuSW5mb0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyBUcmFuc2Zvcm0gdWlfdHVybkluZm9DZWxsO1xuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFRleEFjdGlvblNEW107XG4gICAgcHJpdmF0ZSB1c2VyczogUEluZm9TRFtdO1xuICAgIHByaXZhdGUgYWRkQ291bnRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBicG9zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0dUluZm86IFRleFVzZXJJbmZvU0RbXTtcblxuICAgIHByaXZhdGUgX0NhcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX3R1cm46IG51bWJlcjtcbiAgICBwcml2YXRlIF9sYXN0VG90YWxEaXpodTogbnVtYmVyO1xuICAgIHByaXZhdGUgb25Mb2FkRW5kID0gZmFsc2U7XG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICAvLyBzdXBlci5BdXRvU2V0R29Qcm9wZXJ0eSgpO1xuXG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTXlTdGFydChpbmZvRGF0YTogVGV4QWN0aW9uU0RbXSwgcGxpc3Q6IFBJbmZvU0RbXSwgY2FyZHM6IG51bWJlcltdLCB0dXJuOiBudW1iZXIsIGxhc3RUb3RhbERpemh1OiBudW1iZXIsIGJQb3M6IG51bWJlciwgdEluZm86IFRleFVzZXJJbmZvU0RbXSkge1xuXG5cbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGluZm9EYXRhO1xuICAgICAgICB0aGlzLnVzZXJzID0gcGxpc3Q7XG4gICAgICAgIHRoaXMuYnBvcyA9IGJQb3M7XG4gICAgICAgIHRoaXMudHVJbmZvID0gdEluZm87XG4gICAgICAgIHRoaXMuX0NhcmRzID0gY2FyZHM7XG4gICAgICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xuICAgICAgICB0aGlzLl9sYXN0VG90YWxEaXpodSA9IGxhc3RUb3RhbERpemh1O1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHRoaXMuTXlTdGFydEV4KCk7XG5cbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgTXlTdGFydEV4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldENoaWxkIDogXCIgKyB0aGlzLmZndWlDb21wb25lbnQubmFtZSk7XG4gICAgICAgIHRoaXMudWlfdHVyblRpdGxlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwidHVyblRpdGxlXCIpLmFzQ29tO1xuICAgICAgICB0aGlzLnVpX3R1cm5JbmZvTGlzdCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcInR1cm5JbmZvTGlzdFwiKS5hc0xpc3Q7XG4gICAgICAgIHRoaXMuZmd1aUhlaWdodCA9IDEyMjtcbiAgICAgICAgdGhpcy5EaXNwbGF5VHVybkluZm8oKTtcbiAgICAgICAgdGhpcy5EaXNwbGF5VGl0bGUodGhpcy5fQ2FyZHMsIHRoaXMuX3R1cm4sIHRoaXMuX2xhc3RUb3RhbERpemh1KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGlzcGxheVRpdGxlKGNhcmRzOiBudW1iZXJbXSwgY3VyVHVybjogbnVtYmVyLCBkaXpodTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb21wOiBUdXJuVGl0bGVDb21wID0gdGhpcy51aV90dXJuVGl0bGUubm9kZS5nZXRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgIGlmIChjb21wID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXAgPSB0aGlzLnVpX3R1cm5UaXRsZS5ub2RlLmFkZENvbXBvbmVudChUdXJuVGl0bGVDb21wKTtcbiAgICAgICAgICAgIGNvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfdHVyblRpdGxlO1xuICAgICAgICAgICAgY29tcC5oaXN0b3J5Q29tcCA9IHRoaXMuaGlzdG9yeUNvbXA7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3R1cm5UaXRsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29tcC5NeVN0YXJ0MSh0aGlzLmRhdGFMaXN0LCBjYXJkcywgY3VyVHVybiwgZGl6aHUpO1xuICAgIH1cbiAgICBwdWJsaWMgRGlzcGxheVR1cm5JbmZvKCkge1xuICAgICAgICB0aGlzLnVpX3R1cm5JbmZvTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFMaXN0ID09IG51bGwgfHwgdGhpcy5kYXRhTGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZ286IGZndWkuR09iamVjdCA9IG51bGw7XG4gICAgICAgIGxldCBmb2xkZXJzID0gMDtcbiAgICAgICAgdGhpcy5hZGRDb3VudHMgPSAwO1xuICAgICAgICB0aGlzLmZndWlIZWlnaHQgPSAxMjI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyRGF0YTogVGV4QWN0aW9uU0QgPSB0aGlzLmRhdGFMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHR5cGU6IG51bWJlciA9IGN1ckRhdGEuYXQ7XG4gICAgICAgICAgICAvL+i/nue7reS4pOS4quWPiuWFtuS7peS4iuS4jeaYvuekuueOqeWutuebtOaOpeaYvuekuuaWh+acrOWHoOS4qmZvbGRzXG4gICAgICAgICAgICBpZiAodHlwZSA9PSA1ICYmIGkgPCB0aGlzLmRhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb2xkZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgbGV0IG5leHREYXRhOiBUZXhBY3Rpb25TRCA9IHRoaXMuZGF0YUxpc3RbaSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0dHlwZTogbnVtYmVyID0gbmV4dERhdGEuYXQ7XG4gICAgICAgICAgICAgICAgaWYgKG5leHR0eXBlID09IFRleGFzVHVybkFjdGlvbkVudW0uZm9sZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfdHVybkluZm9MaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC51aV90dXJuQ29udGVudC5oZWlnaHQgKz0gNTEgKyAyMjtcbiAgICAgICAgICAgIHRoaXMuZmd1aUhlaWdodCArPSA1MSArIDIyO1xuICAgICAgICAgICAgLy8gdGhpcy5oaXN0b3J5Q29tcC51aV9oaXN0b3J5R3JvdXAubm9kZS5oZWlnaHQgKz0gNTErNTErMjA7XG4gICAgICAgICAgICB0aGlzLlNldFR1cm5DZWxsSW5mbyhnby5hc0NvbSwgY3VyRGF0YSwgZm9sZGVycyk7XG4gICAgICAgICAgICBmb2xkZXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PURpc3BsYXlUdXJuSW5mbyA9PSB1aV90dXJuSW5mb0xpc3QubnVtSXRlbXM6XCIrIHRoaXMudWlfdHVybkluZm9MaXN0Lm51bUl0ZW1zK1wiLCB1aV90dXJuQ29udGVudC5oZWlnaHQ6XCIrdGhpcy5oaXN0b3J5Q29tcC51aV90dXJuQ29udGVudC5oZWlnaHQgKTtcbiAgICAgICAgLy8gTGF5b3V0UmVidWlsZGVyLkZvcmNlUmVidWlsZExheW91dEltbWVkaWF0ZSh1aV90dXJuSW5mb0xpc3QuZ2FtZU9iamVjdC5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKSk7XG4gICAgICAgIC8vIExheW91dFJlYnVpbGRlci5Gb3JjZVJlYnVpbGRMYXlvdXRJbW1lZGlhdGUoZ2FtZU9iamVjdC5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKSk7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRUdXJuQ2VsbEluZm8oY2VsbEl0ZW06IGZndWkuR0NvbXBvbmVudCwgaW5mb1NEOiBUZXhBY3Rpb25TRCwgZm9sZHMgPSAwKSB7XG4gICAgICAgIGxldCBpbmZvUGFuZWw6IGZndWkuR0dyb3VwID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0dXJuSW5mb0NlbGxQYW5lbFwiKS5hc0dyb3VwO1xuICAgICAgICBsZXQgZm9sZFBhbmVsOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR1cm5GbG9kVHh0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBpbmZvUGFuZWwudmlzaWJsZSA9IChmb2xkcyA8PSAxKTtcbiAgICAgICAgZm9sZFBhbmVsLnZpc2libGUgPSAoZm9sZHMgPj0gMik7XG4gICAgICAgIGlmIChmb2xkcyA8PSAxKSB7XG4gICAgICAgICAgICBsZXQgcG9zTmFtZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJjdXJQb3NOYW1lXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IHBsYXllck5hbWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0TmFtZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBoYW5kbGVCZzogZmd1aS5HTG9hZGVyID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJoYW5kbGVCZ1wiKS5hc0xvYWRlcjtcbiAgICAgICAgICAgIGxldCBoYW5kbGVUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJoYW5kbGVUaXRsZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBoYW5kbGVWYWx1ZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJoYW5kbGVWYWx1ZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCB0dXJuRmxvZFR4dDogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRDdXJHYW1ibGVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBsZXQgdXNlckluZm86IFBJbmZvU0QgPSB0aGlzLkdldFVzZXIoaW5mb1NELmlkKTtcbiAgICAgICAgICAgIFVJVXRpbC5TZXRMaW1pdFR4dChwbGF5ZXJOYW1lLCB1c2VySW5mby53TmFtZSwgNik7XG4gICAgICAgICAgICBoYW5kbGVWYWx1ZS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChpbmZvU0QuZykgKyBcIlwiO1xuICAgICAgICAgICAgcG9zTmFtZS50ZXh0ID0gVGV4YXNCYXNlLmdldFBsYXllclBvc1R5cGUoaW5mb1NELnBvcywgdGhpcy5icG9zLCB0aGlzLnR1SW5mbyk7XG4gICAgICAgICAgICB0dXJuRmxvZFR4dC50ZXh0ID0gXCJcIjsvL2luZm9TRC50dXJuID09IDEgPyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGluZm9TRC5qZykgKyBcIlwiIDogXCJQOlwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChpbmZvU0QuamcpO1xuICAgICAgICAgICAgbGV0IHR5cGU6IFRleGFzVHVybkFjdGlvbkVudW0gPSBpbmZvU0QuYXQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09IFRleGFzVHVybkFjdGlvbkVudW0uQikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ291bnRzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldEhhbmRsZUJ5dFR5cGUodHlwZSwgaGFuZGxlVGl0bGUsIGhhbmRsZUJnLCBpbmZvU0QudHVybik7XG4gICAgICAgICAgICBwb3NOYW1lLmNvbG9yID0gdHlwZSA9PSBUZXhhc1R1cm5BY3Rpb25FbnVtLmZvbGQgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lLmNvbG9yID0gdHlwZSA9PSBUZXhhc1R1cm5BY3Rpb25FbnVtLmZvbGQgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBoYW5kbGVWYWx1ZS5jb2xvciA9IHR5cGUgPT0gVGV4YXNUdXJuQWN0aW9uRW51bS5mb2xkID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgdHVybkZsb2RUeHQuY29sb3IgPSB0eXBlID09IFRleGFzVHVybkFjdGlvbkVudW0uZm9sZCA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvbGRQYW5lbC50ZXh0ID0gZm9sZHMgKyBcImZvbGRzXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0SGFuZGxlQnl0VHlwZSh0eXBlOiBUZXhhc1R1cm5BY3Rpb25FbnVtLCB0eHQ6IGZndWkuR1RleHRGaWVsZCwgaW1nOiBmZ3VpLkdMb2FkZXIsIGN1clR1cm46IG51bWJlcikge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgbGV0IGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICBVSVV0aWwuSW1hZ2VHcmV5VG9nZ2xlKGltZywgZmFsc2UpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5hbGxpbjpcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmxkZV9yZWRcIjtcbiAgICAgICAgICAgICAgICBzdHIgPSBcIkFcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5CMTpcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmxkZV9yZWRcIjtcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5CMV8yOlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiQlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkIyXzM6XG4gICAgICAgICAgICAgICAgaW1nU3RyID0gXCJoYW5sZGVfcmVkXCI7XG4gICAgICAgICAgICAgICAgc3RyID0gXCIzQlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLmJiOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiQkJcIjtcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmRsbGVfZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5jYWxsOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiQ1wiO1xuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFuZGxsZV9ncmVlblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkNoZWNrOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiWFwiO1xuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFuZGxsZV9ncmVlblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLmZvbGQ6XG4gICAgICAgICAgICAgICAgVUlVdGlsLkltYWdlR3JleVRvZ2dsZShpbWcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiRlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLnNiOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiU0JcIjtcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmRsbGVfZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5zdHJhZGxsZTpcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmxkZV9yZWRcIjtcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuQWN0aW9uRW51bS5COlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIGlmIChjdXJUdXJuID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gKDIgKyB0aGlzLmFkZENvdW50cykgKyBcIkJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHRoaXMuYWRkQ291bnRzID4gMSA/IFwiUlwiIDogXCJCXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkluczpcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmxkZV9yZWRcIjtcbiAgICAgICAgICAgICAgICBzdHIgPSBcImlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0eHQudGV4dCA9IHN0cjtcbiAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShpbWcsIGltZ1N0ciwgXCJMb2JieVwiKVxuICAgIH1cbiAgICBwdWJsaWMgR2V0VXNlcihpZDogbnVtYmVyKTogUEluZm9TRCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZCh1c2VyID0+IHVzZXIudWlkID09IGlkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUdXJuVGl0bGVDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyBoaXN0b3J5Q29tcDogTXlDYXJkSGlzdG9yeSA9IG51bGw7XG4gICAgcHVibGljIHVpX3R1cm5OYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90dXJuQ2FyZHNMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgVHJhbnNmb3JtIHVpX3R1cm5DYXJkQ2VsbDtcbiAgICBwdWJsaWMgdWlfcGxheWVyQ291bnQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2xhc3RUdXJuR2FtYmxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZGF0YUxpc3Q6IFRleEFjdGlvblNEW107XG4gICAgcHJpdmF0ZSBfcGxheWVyTnVtOiBudW1iZXJcbiAgICBwcml2YXRlIF9jYXJkczogbnVtYmVyW11cbiAgICBwcml2YXRlIF90dXJuOiBudW1iZXJcbiAgICBwcml2YXRlIF9sYXN0RGl6aHU6IG51bWJlclxuXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgTXlTdGFydDEoZGF0YUxpc3Q6IFRleEFjdGlvblNEW10sIGNhcmRzOiBudW1iZXJbXSwgdHVybjogbnVtYmVyLCBsYXN0RGl6aHU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLl9jYXJkcyA9IGNhcmRzO1xuICAgICAgICB0aGlzLl90dXJuID0gdHVybjtcbiAgICAgICAgdGhpcy5fbGFzdERpemh1ID0gbGFzdERpemh1O1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuQXV0b1NldEdvUHJvcGVydHlFeCgpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhMSh0aGlzLl9kYXRhTGlzdCwgdGhpcy5fY2FyZHMsIHRoaXMuX3R1cm4sIHRoaXMuX2xhc3REaXpodSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTXlTdGFydDIocGxheWVyTnVtOiBudW1iZXIsIGNhcmRzOiBudW1iZXJbXSwgdHVybjogbnVtYmVyLCBsYXN0RGl6aHU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wbGF5ZXJOdW0gPSBwbGF5ZXJOdW07XG4gICAgICAgIHRoaXMuX2NhcmRzID0gY2FyZHM7XG4gICAgICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xuICAgICAgICB0aGlzLl9sYXN0RGl6aHUgPSBsYXN0RGl6aHU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkge1xuICAgICAgICAgICAgdGhpcy5BdXRvU2V0R29Qcm9wZXJ0eUV4KCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEyKHRoaXMuX3BsYXllck51bSwgdGhpcy5fY2FyZHMsIHRoaXMuX3R1cm4sIHRoaXMuX2xhc3REaXpodSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5BdXRvU2V0R29Qcm9wZXJ0eUV4KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGExKHRoaXMuX2RhdGFMaXN0LCB0aGlzLl9jYXJkcywgdGhpcy5fdHVybiwgdGhpcy5fbGFzdERpemh1KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhMih0aGlzLl9wbGF5ZXJOdW0sIHRoaXMuX2NhcmRzLCB0aGlzLl90dXJuLCB0aGlzLl9sYXN0RGl6aHUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7XG5cbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eUV4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldENoaWxkIDogXCIgKyB0aGlzLmZndWlDb21wb25lbnQubmFtZSk7XG4gICAgICAgIHRoaXMudWlfdHVybk5hbWUgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJ0dXJuTmFtZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgdGhpcy51aV90dXJuQ2FyZHNMaXN0ID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwidHVybkNhcmRzTGlzdFwiKS5hc0xpc3Q7XG4gICAgICAgIHRoaXMudWlfcGxheWVyQ291bnQgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJwbGF5ZXJDb3VudFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgdGhpcy51aV9sYXN0VHVybkdhbWJsZSA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcImxhc3RUdXJuR2FtYmxlXCIpLmFzVGV4dEZpZWxkO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNldERhdGExKGRhdGFMaXN0OiBUZXhBY3Rpb25TRFtdLCBjYXJkczogbnVtYmVyW10sIHR1cm46IG51bWJlciwgbGFzdERpemh1OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5ld0xpc3Q6IFRleEFjdGlvblNEW10gPSBbXTtcbiAgICAgICAgbGV0IGxpc3QgPSBcIntcIjtcbiAgICAgICAgZGF0YUxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHsgbGlzdCArPSB2YWx1ZS5pZCArIFwiLFwiIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Y676YeN5YmN77yaIFwiICsgbGlzdCArIFwiIH1cIilcbiAgICAgICAgY29uc3Qgb2JqOiB7IFtrZXk6IG51bWJlcl06IGJvb2xlYW47IH0gPSB7fTtcbiAgICAgICAgbmV3TGlzdCA9IGRhdGFMaXN0LnJlZHVjZTxUZXhBY3Rpb25TRFtdPigoaXRlbSwgbmV4dCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvYmpbbmV4dC5pZF0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnB1c2gobmV4dCk7XG4gICAgICAgICAgICAgICAgb2JqW25leHQuaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGxldCBsaXN0MiA9IFwie1wiO1xuICAgICAgICBuZXdMaXN0LmZvckVhY2goKHZhbHVlKSA9PiB7IGxpc3QyICs9IHZhbHVlLmlkICsgXCIsXCIgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCLljrvph43lkI7vvJpcIiArIGxpc3QyICsgXCIgfVwiKVxuICAgICAgICB0aGlzLkRpc3BsYXlUaXRsZShuZXdMaXN0Lmxlbmd0aCwgY2FyZHMsIHR1cm4sIGxhc3REaXpodSk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0RGF0YTIocGxheWVyTnVtOiBudW1iZXIsIGNhcmRzOiBudW1iZXJbXSwgdHVybjogbnVtYmVyLCBsYXN0RGl6aHU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkRpc3BsYXlUaXRsZShwbGF5ZXJOdW0sIGNhcmRzLCB0dXJuLCBsYXN0RGl6aHUpO1xuICAgIH1cbiAgICBwdWJsaWMgRGlzcGxheVRpdGxlKHBsYXllck51bTogbnVtYmVyLCBjYXJkczogbnVtYmVyW10sIHR1cm46IG51bWJlciwgbGFzdERpemh1OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV90dXJuTmFtZS50ZXh0ID0gdGhpcy5nZXRUdXJuTmFtZSh0dXJuKTtcbiAgICAgICAgdGhpcy51aV9wbGF5ZXJDb3VudC50ZXh0ID0gcGxheWVyTnVtICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV9sYXN0VHVybkdhbWJsZS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChsYXN0RGl6aHUpICsgXCJcIjtcbiAgICAgICAgbGV0IGdvOiBmZ3VpLkdPYmplY3QgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudWlfdHVybkNhcmRzTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICBpZiAoY2FyZHMgPT0gbnVsbCB8fCBjYXJkcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgY2FyZHNOdW0gPSB0aGlzLmRpc3BsYXlDYXJkc051bSh0dXJuLCBjYXJkcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aCAmJiBpIDwgY2FyZHNOdW07IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhcmRJZCA9IGNhcmRzW2ldO1xuICAgICAgICAgICAgZ28gPSB0aGlzLnVpX3R1cm5DYXJkc0xpc3QuYWRkSXRlbUZyb21Qb29sKCk7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGdvLmFzQ29tLmdldENoaWxkKFwidHVybkNhcmRDZWxsXCIpLmFzTG9hZGVyLCBjYXJkSWQgPT0gMCA/IFwiMDAxXCIgOiBjYXJkSWQgKyBcIl8xXCIsIFwiTG9iYnlcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGRpc3BsYXlDYXJkc051bSh0dXJuOiBudW1iZXIsIGNhcmRzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNhcmRzTnVtID0gMDtcbiAgICAgICAgc3dpdGNoICh0dXJuKSB7XG4gICAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgICAgIGNhcmRzTnVtID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjYXJkc051bSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FyZHNOdW0gPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNhcmRzTnVtID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXJkc051bSA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgY2FyZHNOdW0gPSBjYXJkcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FyZHNOdW07XG4gICAgfVxuXG4gICAgcHVibGljIGdldFR1cm5OYW1lKHR1cm46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBsZXQgdHlwZTogVGV4YXNUdXJuRW51bSA9IHR1cm47XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLkluaXQ6XG4gICAgICAgICAgICAgICAgc3RyID0gXCLniYzosLFcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlR1cm4xXzA6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJQcmVmbG9wXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uVHVybjJfMzpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIkZsb3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuM180OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiVHVyblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlR1cm40XzU6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJSaXZlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlRydW5Db21wYXJlOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiU2hvd2Rvd25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cblxuIl19