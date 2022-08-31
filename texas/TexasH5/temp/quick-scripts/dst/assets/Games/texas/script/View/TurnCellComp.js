
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TurnCellComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1587clAAEtPN7MVcSnDyPQ/', 'TurnCellComp');
// Games/texas/script/View/TurnCellComp.ts

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
exports.TurnTitleComp = exports.TurnCellComp = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var Texas_1 = require("../Model/Texas");
var CardRedbetComp_1 = require("./CardRedbetComp");
var TurnCellComp = /** @class */ (function (_super) {
    __extends(TurnCellComp, _super);
    function TurnCellComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.historyComp = null;
        _this.ui_turnTitle = null;
        _this.ui_turnInfoList = null;
        _this._Cards = [];
        _this.onLoadEnd = false;
        return _this;
    }
    TurnCellComp.prototype.OnLoadCompleted = function () {
        // super.AutoSetGoProperty();
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    TurnCellComp.prototype.MyStart = function (infoData, plist, cards, turn, lastTotalDizhu, bPos, tInfo) {
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
    TurnCellComp.prototype.AutoSetGoProperty = function () { };
    TurnCellComp.prototype.MyStartEx = function () {
        console.log("getChild : " + this.fguiComponent.name);
        this.ui_turnTitle = this.fguiComponent.getChild("turnTitle").asCom;
        this.ui_turnInfoList = this.fguiComponent.getChild("turnInfoList").asList;
        this.fguiHeight = 122;
        this.DisplayTurnInfo();
        this.DisplayTitle(this._Cards, this._turn, this._lastTotalDizhu);
    };
    TurnCellComp.prototype.DisplayTitle = function (cards, curTurn, dizhu) {
        var comp = this.ui_turnTitle.node.getComponent(TurnTitleComp);
        if (comp == null) {
            comp = this.ui_turnTitle.node.addComponent(TurnTitleComp);
            comp.fguiComponent = this.ui_turnTitle;
            comp.historyComp = this.historyComp;
            // this.ui_turnTitle.node.active = true;
        }
        comp.MyStart1(this.dataList, cards, curTurn, dizhu);
    };
    TurnCellComp.prototype.DisplayTurnInfo = function () {
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
            if (type == Texas_1.TexasTurnActionEnum.fold && i < this.dataList.length - 1) {
                folders += 1;
                var nextData = this.dataList[i + 1];
                var nexttype = nextData.at;
                if (nexttype == Texas_1.TexasTurnActionEnum.fold) {
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
    TurnCellComp.prototype.SetTurnCellInfo = function (cellItem, infoSD, folds) {
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
            handleValue.text = Texas_1.Texas.formatNumber100(infoSD.g) + "";
            posName.text = Texas_1.Texas.getPlayerPosType(infoSD.pos, this.bpos, this.tuInfo);
            turnFlodTxt.text = ""; //infoSD.turn == 1 ? UIUtil.formatNumber100(infoSD.jg) + "" : "P:" + UIUtil.formatNumber100(infoSD.jg);
            var type = infoSD.at;
            if (type == Texas_1.TexasTurnActionEnum.B) {
                this.addCounts += 1;
            }
            this.SetHandleBytType(type, handleTitle, handleBg, infoSD.turn);
            posName.color = type == Texas_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            playerName.color = type == Texas_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            handleValue.color = type == Texas_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            turnFlodTxt.color = type == Texas_1.TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
        }
        else {
            foldPanel.text = folds + "folds";
        }
    };
    TurnCellComp.prototype.SetHandleBytType = function (type, txt, img, curTurn) {
        var str = "";
        var imgStr = "hanlde_red";
        UIUtil_1.UIUtil.ImageGreyToggle(img, false);
        switch (type) {
            case Texas_1.TexasTurnActionEnum.allin:
                imgStr = "hanlde_red";
                str = "A";
                break;
            case Texas_1.TexasTurnActionEnum.B1:
                imgStr = "hanlde_red";
                str = "R";
                break;
            case Texas_1.TexasTurnActionEnum.B1_2:
                imgStr = "hanlde_red";
                str = "B";
                break;
            case Texas_1.TexasTurnActionEnum.B2_3:
                imgStr = "hanlde_red";
                str = "3B";
                break;
            case Texas_1.TexasTurnActionEnum.bb:
                str = "BB";
                imgStr = "handlle_green";
                break;
            case Texas_1.TexasTurnActionEnum.call:
                str = "C";
                imgStr = "handlle_green";
                break;
            case Texas_1.TexasTurnActionEnum.Check:
                str = "X";
                imgStr = "handlle_green";
                break;
            case Texas_1.TexasTurnActionEnum.fold:
                UIUtil_1.UIUtil.ImageGreyToggle(img, true);
                str = "F";
                break;
            case Texas_1.TexasTurnActionEnum.sb:
                str = "SB";
                imgStr = "handlle_green";
                break;
            case Texas_1.TexasTurnActionEnum.stradlle:
                imgStr = "hanlde_red";
                str = "S";
                break;
            case Texas_1.TexasTurnActionEnum.B:
                imgStr = "hanlde_red";
                if (curTurn == 1) {
                    str = (2 + this.addCounts) + "B";
                }
                else {
                    str = this.addCounts > 1 ? "R" : "B";
                }
                break;
            case Texas_1.TexasTurnActionEnum.Ins:
                imgStr = "hanlde_red";
                str = "i";
                break;
        }
        txt.text = str;
        UIUtil_1.UIUtil.loadImage(img, imgStr, "Texas");
    };
    TurnCellComp.prototype.GetUser = function (id) {
        if (this.users == null) {
            return null;
        }
        return this.users.find(function (user) { return user.uid == id; });
    };
    return TurnCellComp;
}(ViewBase_1.default));
exports.TurnCellComp = TurnCellComp;
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
        this.ui_lastTurnGamble.text = Texas_1.Texas.formatNumber100(lastDizhu) + "";
        var go = null;
        this.ui_turnCardsList.removeChildrenToPool();
        if (cards == null || cards.length == 0)
            return;
        var cardsNum = this.displayCardsNum(turn, cards.length);
        for (var i = 0; i < cards.length && i < cardsNum; i++) {
            var cardId = cards[i];
            go = this.ui_turnCardsList.addItemFromPool();
            UIUtil_1.UIUtil.loadImage(go.asCom.getChild("turnCardCell").asLoader, cardId == 0 ? CardRedbetComp_1.default.cardTypeName : cardId + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
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
            case Texas_1.TexasTurnEnum.Init:
                str = "牌谱";
                break;
            case Texas_1.TexasTurnEnum.Turn1_0:
                str = "Preflop";
                break;
            case Texas_1.TexasTurnEnum.Turn2_3:
                str = "Flop";
                break;
            case Texas_1.TexasTurnEnum.Turn3_4:
                str = "Turn";
                break;
            case Texas_1.TexasTurnEnum.Turn4_5:
                str = "River";
                break;
            case Texas_1.TexasTurnEnum.TrunCompare:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFR1cm5DZWxsQ29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDJEQUF1RTtBQUN2RSx3Q0FBMkU7QUFFM0UsbURBQThDO0FBSzlDO0lBQWtDLGdDQUFRO0lBQTFDO1FBQUEscUVBK0xDO1FBOUxVLGlCQUFXLEdBQXFCLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFFckMscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFRbEMsWUFBTSxHQUFhLEVBQUUsQ0FBQztRQUd0QixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQWdMOUIsQ0FBQztJQS9LRyxzQ0FBZSxHQUFmO1FBQ0ksNkJBQTZCO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxRQUF1QixFQUFFLEtBQWdCLEVBQUUsS0FBZSxFQUFFLElBQVksRUFBRSxjQUFzQixFQUFFLElBQVksRUFBRSxLQUFzQjtRQUdqSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxT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ImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgVUlVdGlsLCBQbGF5ZXJQcmVmcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xuaW1wb3J0IHsgVGV4YXNUdXJuQWN0aW9uRW51bSwgVGV4YXMsIFRleGFzVHVybkVudW0gfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNcIjtcbmltcG9ydCB7IFRleEFjdGlvblNELCBQSW5mb1NELCBUZXhVc2VySW5mb1NEIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTmV0RGF0YVwiO1xuaW1wb3J0IENhcmRSZWRiZXRDb21wIGZyb20gXCIuL0NhcmRSZWRiZXRDb21wXCI7XG5pbXBvcnQgVGV4YXNIaXN0b3J5Q29tcCBmcm9tIFwiLi9UZXhhc0hpc3RvcnlDb21wXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgVHVybkNlbGxDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyBoaXN0b3J5Q29tcDogVGV4YXNIaXN0b3J5Q29tcCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R1cm5UaXRsZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90dXJuSW5mb0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyBUcmFuc2Zvcm0gdWlfdHVybkluZm9DZWxsO1xuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFRleEFjdGlvblNEW107XG4gICAgcHJpdmF0ZSB1c2VyczogUEluZm9TRFtdO1xuICAgIHByaXZhdGUgYWRkQ291bnRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBicG9zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0dUluZm86IFRleFVzZXJJbmZvU0RbXTtcblxuICAgIHByaXZhdGUgX0NhcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX3R1cm46IG51bWJlcjtcbiAgICBwcml2YXRlIF9sYXN0VG90YWxEaXpodTogbnVtYmVyO1xuICAgIHByaXZhdGUgb25Mb2FkRW5kID0gZmFsc2U7XG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICAvLyBzdXBlci5BdXRvU2V0R29Qcm9wZXJ0eSgpO1xuXG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTXlTdGFydChpbmZvRGF0YTogVGV4QWN0aW9uU0RbXSwgcGxpc3Q6IFBJbmZvU0RbXSwgY2FyZHM6IG51bWJlcltdLCB0dXJuOiBudW1iZXIsIGxhc3RUb3RhbERpemh1OiBudW1iZXIsIGJQb3M6IG51bWJlciwgdEluZm86IFRleFVzZXJJbmZvU0RbXSkge1xuXG5cbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGluZm9EYXRhO1xuICAgICAgICB0aGlzLnVzZXJzID0gcGxpc3Q7XG4gICAgICAgIHRoaXMuYnBvcyA9IGJQb3M7XG4gICAgICAgIHRoaXMudHVJbmZvID0gdEluZm87XG4gICAgICAgIHRoaXMuX0NhcmRzID0gY2FyZHM7XG4gICAgICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xuICAgICAgICB0aGlzLl9sYXN0VG90YWxEaXpodSA9IGxhc3RUb3RhbERpemh1O1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHRoaXMuTXlTdGFydEV4KCk7XG5cbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgTXlTdGFydEV4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldENoaWxkIDogXCIgKyB0aGlzLmZndWlDb21wb25lbnQubmFtZSk7XG4gICAgICAgIHRoaXMudWlfdHVyblRpdGxlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwidHVyblRpdGxlXCIpLmFzQ29tO1xuICAgICAgICB0aGlzLnVpX3R1cm5JbmZvTGlzdCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcInR1cm5JbmZvTGlzdFwiKS5hc0xpc3Q7XG4gICAgICAgIHRoaXMuZmd1aUhlaWdodCA9IDEyMjtcbiAgICAgICAgdGhpcy5EaXNwbGF5VHVybkluZm8oKTtcbiAgICAgICAgdGhpcy5EaXNwbGF5VGl0bGUodGhpcy5fQ2FyZHMsIHRoaXMuX3R1cm4sIHRoaXMuX2xhc3RUb3RhbERpemh1KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGlzcGxheVRpdGxlKGNhcmRzOiBudW1iZXJbXSwgY3VyVHVybjogbnVtYmVyLCBkaXpodTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb21wOiBUdXJuVGl0bGVDb21wID0gdGhpcy51aV90dXJuVGl0bGUubm9kZS5nZXRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgIGlmIChjb21wID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXAgPSB0aGlzLnVpX3R1cm5UaXRsZS5ub2RlLmFkZENvbXBvbmVudChUdXJuVGl0bGVDb21wKTtcbiAgICAgICAgICAgIGNvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfdHVyblRpdGxlO1xuICAgICAgICAgICAgY29tcC5oaXN0b3J5Q29tcCA9IHRoaXMuaGlzdG9yeUNvbXA7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3R1cm5UaXRsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29tcC5NeVN0YXJ0MSh0aGlzLmRhdGFMaXN0LCBjYXJkcywgY3VyVHVybiwgZGl6aHUpO1xuICAgIH1cbiAgICBwdWJsaWMgRGlzcGxheVR1cm5JbmZvKCkge1xuICAgICAgICB0aGlzLnVpX3R1cm5JbmZvTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFMaXN0ID09IG51bGwgfHwgdGhpcy5kYXRhTGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZ286IGZndWkuR09iamVjdCA9IG51bGw7XG4gICAgICAgIGxldCBmb2xkZXJzID0gMDtcbiAgICAgICAgdGhpcy5hZGRDb3VudHMgPSAwO1xuICAgICAgICB0aGlzLmZndWlIZWlnaHQgPSAxMjI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyRGF0YTogVGV4QWN0aW9uU0QgPSB0aGlzLmRhdGFMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHR5cGU6IFRleGFzVHVybkFjdGlvbkVudW0gPSBjdXJEYXRhLmF0O1xuICAgICAgICAgICAgLy/ov57nu63kuKTkuKrlj4rlhbbku6XkuIrkuI3mmL7npLrnjqnlrrbnm7TmjqXmmL7npLrmlofmnKzlh6DkuKpmb2xkc1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gVGV4YXNUdXJuQWN0aW9uRW51bS5mb2xkICYmIGkgPCB0aGlzLmRhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb2xkZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgbGV0IG5leHREYXRhOiBUZXhBY3Rpb25TRCA9IHRoaXMuZGF0YUxpc3RbaSArIDFdO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0dHlwZTogVGV4YXNUdXJuQWN0aW9uRW51bSA9IG5leHREYXRhLmF0O1xuICAgICAgICAgICAgICAgIGlmIChuZXh0dHlwZSA9PSBUZXhhc1R1cm5BY3Rpb25FbnVtLmZvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ28gPSB0aGlzLnVpX3R1cm5JbmZvTGlzdC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUNvbXAudWlfdHVybkNvbnRlbnQuaGVpZ2h0ICs9IDUxICsgMjI7XG4gICAgICAgICAgICB0aGlzLmZndWlIZWlnaHQgKz0gNTEgKyAyMjtcbiAgICAgICAgICAgIC8vIHRoaXMuaGlzdG9yeUNvbXAudWlfaGlzdG9yeUdyb3VwLm5vZGUuaGVpZ2h0ICs9IDUxKzUxKzIwO1xuICAgICAgICAgICAgdGhpcy5TZXRUdXJuQ2VsbEluZm8oZ28uYXNDb20sIGN1ckRhdGEsIGZvbGRlcnMpO1xuICAgICAgICAgICAgZm9sZGVycyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT1EaXNwbGF5VHVybkluZm8gPT0gdWlfdHVybkluZm9MaXN0Lm51bUl0ZW1zOlwiKyB0aGlzLnVpX3R1cm5JbmZvTGlzdC5udW1JdGVtcytcIiwgdWlfdHVybkNvbnRlbnQuaGVpZ2h0OlwiK3RoaXMuaGlzdG9yeUNvbXAudWlfdHVybkNvbnRlbnQuaGVpZ2h0ICk7XG4gICAgICAgIC8vIExheW91dFJlYnVpbGRlci5Gb3JjZVJlYnVpbGRMYXlvdXRJbW1lZGlhdGUodWlfdHVybkluZm9MaXN0LmdhbWVPYmplY3QuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkpO1xuICAgICAgICAvLyBMYXlvdXRSZWJ1aWxkZXIuRm9yY2VSZWJ1aWxkTGF5b3V0SW1tZWRpYXRlKGdhbWVPYmplY3QuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkpO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0VHVybkNlbGxJbmZvKGNlbGxJdGVtOiBmZ3VpLkdDb21wb25lbnQsIGluZm9TRDogVGV4QWN0aW9uU0QsIGZvbGRzID0gMCkge1xuICAgICAgICBsZXQgaW5mb1BhbmVsOiBmZ3VpLkdHcm91cCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHVybkluZm9DZWxsUGFuZWxcIikuYXNHcm91cDtcbiAgICAgICAgbGV0IGZvbGRQYW5lbDogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0dXJuRmxvZFR4dFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgaW5mb1BhbmVsLnZpc2libGUgPSAoZm9sZHMgPD0gMSk7XG4gICAgICAgIGZvbGRQYW5lbC52aXNpYmxlID0gKGZvbGRzID49IDIpO1xuICAgICAgICBpZiAoZm9sZHMgPD0gMSkge1xuICAgICAgICAgICAgbGV0IHBvc05hbWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY3VyUG9zTmFtZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJOYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dE5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBsZXQgaGFuZGxlQmc6IGZndWkuR0xvYWRlciA9IGNlbGxJdGVtLmdldENoaWxkKFwiaGFuZGxlQmdcIikuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgaGFuZGxlVGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiaGFuZGxlVGl0bGVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBsZXQgaGFuZGxlVmFsdWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiaGFuZGxlVmFsdWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBsZXQgdHVybkZsb2RUeHQ6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0Q3VyR2FtYmxlXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IHVzZXJJbmZvOiBQSW5mb1NEID0gdGhpcy5HZXRVc2VyKGluZm9TRC5pZCk7XG4gICAgICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQocGxheWVyTmFtZSwgdXNlckluZm8ud05hbWUsIDYpO1xuICAgICAgICAgICAgaGFuZGxlVmFsdWUudGV4dCA9IFRleGFzLmZvcm1hdE51bWJlcjEwMChpbmZvU0QuZykgKyBcIlwiO1xuICAgICAgICAgICAgcG9zTmFtZS50ZXh0ID0gVGV4YXMuZ2V0UGxheWVyUG9zVHlwZShpbmZvU0QucG9zLCB0aGlzLmJwb3MsIHRoaXMudHVJbmZvKTtcbiAgICAgICAgICAgIHR1cm5GbG9kVHh0LnRleHQgPSBcIlwiOy8vaW5mb1NELnR1cm4gPT0gMSA/IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoaW5mb1NELmpnKSArIFwiXCIgOiBcIlA6XCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGluZm9TRC5qZyk7XG4gICAgICAgICAgICBsZXQgdHlwZTogVGV4YXNUdXJuQWN0aW9uRW51bSA9IGluZm9TRC5hdDtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gVGV4YXNUdXJuQWN0aW9uRW51bS5CKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb3VudHMgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2V0SGFuZGxlQnl0VHlwZSh0eXBlLCBoYW5kbGVUaXRsZSwgaGFuZGxlQmcsIGluZm9TRC50dXJuKTtcbiAgICAgICAgICAgIHBvc05hbWUuY29sb3IgPSB0eXBlID09IFRleGFzVHVybkFjdGlvbkVudW0uZm9sZCA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIHBsYXllck5hbWUuY29sb3IgPSB0eXBlID09IFRleGFzVHVybkFjdGlvbkVudW0uZm9sZCA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIGhhbmRsZVZhbHVlLmNvbG9yID0gdHlwZSA9PSBUZXhhc1R1cm5BY3Rpb25FbnVtLmZvbGQgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICB0dXJuRmxvZFR4dC5jb2xvciA9IHR5cGUgPT0gVGV4YXNUdXJuQWN0aW9uRW51bS5mb2xkID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9sZFBhbmVsLnRleHQgPSBmb2xkcyArIFwiZm9sZHNcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBTZXRIYW5kbGVCeXRUeXBlKHR5cGU6IFRleGFzVHVybkFjdGlvbkVudW0sIHR4dDogZmd1aS5HVGV4dEZpZWxkLCBpbWc6IGZndWkuR0xvYWRlciwgY3VyVHVybjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBsZXQgaW1nU3RyID0gXCJoYW5sZGVfcmVkXCI7XG4gICAgICAgIFVJVXRpbC5JbWFnZUdyZXlUb2dnbGUoaW1nLCBmYWxzZSk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLmFsbGluOlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiQVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkIxOlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiUlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkIxXzI6XG4gICAgICAgICAgICAgICAgaW1nU3RyID0gXCJoYW5sZGVfcmVkXCI7XG4gICAgICAgICAgICAgICAgc3RyID0gXCJCXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uQjJfMzpcbiAgICAgICAgICAgICAgICBpbWdTdHIgPSBcImhhbmxkZV9yZWRcIjtcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjNCXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uYmI6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJCQlwiO1xuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFuZGxsZV9ncmVlblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLmNhbGw6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJDXCI7XG4gICAgICAgICAgICAgICAgaW1nU3RyID0gXCJoYW5kbGxlX2dyZWVuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uQ2hlY2s6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJYXCI7XG4gICAgICAgICAgICAgICAgaW1nU3RyID0gXCJoYW5kbGxlX2dyZWVuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uZm9sZDpcbiAgICAgICAgICAgICAgICBVSVV0aWwuSW1hZ2VHcmV5VG9nZ2xlKGltZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3RyID0gXCJGXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uc2I6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJTQlwiO1xuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFuZGxsZV9ncmVlblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLnN0cmFkbGxlOlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiU1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5BY3Rpb25FbnVtLkI6XG4gICAgICAgICAgICAgICAgaW1nU3RyID0gXCJoYW5sZGVfcmVkXCI7XG4gICAgICAgICAgICAgICAgaWYgKGN1clR1cm4gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAoMiArIHRoaXMuYWRkQ291bnRzKSArIFwiQlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gdGhpcy5hZGRDb3VudHMgPiAxID8gXCJSXCIgOiBcIkJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkFjdGlvbkVudW0uSW5zOlxuICAgICAgICAgICAgICAgIGltZ1N0ciA9IFwiaGFubGRlX3JlZFwiO1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiaVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHR4dC50ZXh0ID0gc3RyO1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKGltZywgaW1nU3RyLCBcIlRleGFzXCIpXG4gICAgfVxuICAgIHB1YmxpYyBHZXRVc2VyKGlkOiBudW1iZXIpOiBQSW5mb1NEIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcnMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICByZXR1cm4gdGhpcy51c2Vycy5maW5kKHVzZXIgPT4gdXNlci51aWQgPT0gaWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR1cm5UaXRsZUNvbXAgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHVibGljIGhpc3RvcnlDb21wOiBUZXhhc0hpc3RvcnlDb21wID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHVybk5hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R1cm5DYXJkc0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyBUcmFuc2Zvcm0gdWlfdHVybkNhcmRDZWxsO1xuICAgIHB1YmxpYyB1aV9wbGF5ZXJDb3VudDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfbGFzdFR1cm5HYW1ibGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9kYXRhTGlzdDogVGV4QWN0aW9uU0RbXTtcbiAgICBwcml2YXRlIF9wbGF5ZXJOdW06IG51bWJlclxuICAgIHByaXZhdGUgX2NhcmRzOiBudW1iZXJbXVxuICAgIHByaXZhdGUgX3R1cm46IG51bWJlclxuICAgIHByaXZhdGUgX2xhc3REaXpodTogbnVtYmVyXG5cbiAgICBwcml2YXRlIG9uTG9hZEVuZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBNeVN0YXJ0MShkYXRhTGlzdDogVGV4QWN0aW9uU0RbXSwgY2FyZHM6IG51bWJlcltdLCB0dXJuOiBudW1iZXIsIGxhc3REaXpodTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gY2FyZHM7XG4gICAgICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xuICAgICAgICB0aGlzLl9sYXN0RGl6aHUgPSBsYXN0RGl6aHU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkge1xuICAgICAgICAgICAgdGhpcy5BdXRvU2V0R29Qcm9wZXJ0eUV4KCk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGExKHRoaXMuX2RhdGFMaXN0LCB0aGlzLl9jYXJkcywgdGhpcy5fdHVybiwgdGhpcy5fbGFzdERpemh1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBNeVN0YXJ0MihwbGF5ZXJOdW06IG51bWJlciwgY2FyZHM6IG51bWJlcltdLCB0dXJuOiBudW1iZXIsIGxhc3REaXpodTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BsYXllck51bSA9IHBsYXllck51bTtcbiAgICAgICAgdGhpcy5fY2FyZHMgPSBjYXJkcztcbiAgICAgICAgdGhpcy5fdHVybiA9IHR1cm47XG4gICAgICAgIHRoaXMuX2xhc3REaXpodSA9IGxhc3REaXpodTtcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLkF1dG9TZXRHb1Byb3BlcnR5RXgoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YTIodGhpcy5fcGxheWVyTnVtLCB0aGlzLl9jYXJkcywgdGhpcy5fdHVybiwgdGhpcy5fbGFzdERpemh1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5teXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLkF1dG9TZXRHb1Byb3BlcnR5RXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YTEodGhpcy5fZGF0YUxpc3QsIHRoaXMuX2NhcmRzLCB0aGlzLl90dXJuLCB0aGlzLl9sYXN0RGl6aHUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEyKHRoaXMuX3BsYXllck51bSwgdGhpcy5fY2FyZHMsIHRoaXMuX3R1cm4sIHRoaXMuX2xhc3REaXpodSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHtcblxuICAgIH1cblxuICAgIEF1dG9TZXRHb1Byb3BlcnR5RXgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0Q2hpbGQgOiBcIiArIHRoaXMuZmd1aUNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgdGhpcy51aV90dXJuTmFtZSA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcInR1cm5OYW1lXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICB0aGlzLnVpX3R1cm5DYXJkc0xpc3QgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJ0dXJuQ2FyZHNMaXN0XCIpLmFzTGlzdDtcbiAgICAgICAgdGhpcy51aV9wbGF5ZXJDb3VudCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcInBsYXllckNvdW50XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICB0aGlzLnVpX2xhc3RUdXJuR2FtYmxlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibGFzdFR1cm5HYW1ibGVcIikuYXNUZXh0RmllbGQ7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgc2V0RGF0YTEoZGF0YUxpc3Q6IFRleEFjdGlvblNEW10sIGNhcmRzOiBudW1iZXJbXSwgdHVybjogbnVtYmVyLCBsYXN0RGl6aHU6IG51bWJlcikge1xuICAgICAgICBsZXQgbmV3TGlzdDogVGV4QWN0aW9uU0RbXSA9IFtdO1xuICAgICAgICBsZXQgbGlzdCA9IFwie1wiO1xuICAgICAgICBkYXRhTGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4geyBsaXN0ICs9IHZhbHVlLmlkICsgXCIsXCIgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCLljrvph43liY3vvJogXCIgKyBsaXN0ICsgXCIgfVwiKVxuICAgICAgICBjb25zdCBvYmo6IHsgW2tleTogbnVtYmVyXTogYm9vbGVhbjsgfSA9IHt9O1xuICAgICAgICBuZXdMaXN0ID0gZGF0YUxpc3QucmVkdWNlPFRleEFjdGlvblNEW10+KChpdGVtLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9ialtuZXh0LmlkXSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICBvYmpbbmV4dC5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgbGV0IGxpc3QyID0gXCJ7XCI7XG4gICAgICAgIG5ld0xpc3QuZm9yRWFjaCgodmFsdWUpID0+IHsgbGlzdDIgKz0gdmFsdWUuaWQgKyBcIixcIiB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcIuWOu+mHjeWQju+8mlwiICsgbGlzdDIgKyBcIiB9XCIpXG4gICAgICAgIHRoaXMuRGlzcGxheVRpdGxlKG5ld0xpc3QubGVuZ3RoLCBjYXJkcywgdHVybiwgbGFzdERpemh1KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXREYXRhMihwbGF5ZXJOdW06IG51bWJlciwgY2FyZHM6IG51bWJlcltdLCB0dXJuOiBudW1iZXIsIGxhc3REaXpodTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuRGlzcGxheVRpdGxlKHBsYXllck51bSwgY2FyZHMsIHR1cm4sIGxhc3REaXpodSk7XG4gICAgfVxuICAgIHB1YmxpYyBEaXNwbGF5VGl0bGUocGxheWVyTnVtOiBudW1iZXIsIGNhcmRzOiBudW1iZXJbXSwgdHVybjogbnVtYmVyLCBsYXN0RGl6aHU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX3R1cm5OYW1lLnRleHQgPSB0aGlzLmdldFR1cm5OYW1lKHR1cm4pO1xuICAgICAgICB0aGlzLnVpX3BsYXllckNvdW50LnRleHQgPSBwbGF5ZXJOdW0gKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX2xhc3RUdXJuR2FtYmxlLnRleHQgPSBUZXhhcy5mb3JtYXROdW1iZXIxMDAobGFzdERpemh1KSArIFwiXCI7XG4gICAgICAgIGxldCBnbzogZmd1aS5HT2JqZWN0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLnVpX3R1cm5DYXJkc0xpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgaWYgKGNhcmRzID09IG51bGwgfHwgY2FyZHMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgbGV0IGNhcmRzTnVtID0gdGhpcy5kaXNwbGF5Q2FyZHNOdW0odHVybiwgY2FyZHMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGggJiYgaSA8IGNhcmRzTnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkSWQgPSBjYXJkc1tpXTtcbiAgICAgICAgICAgIGdvID0gdGhpcy51aV90dXJuQ2FyZHNMaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpO1xuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShnby5hc0NvbS5nZXRDaGlsZChcInR1cm5DYXJkQ2VsbFwiKS5hc0xvYWRlciwgY2FyZElkID09IDAgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiBjYXJkSWQgKyBcIl9cIiArIFBsYXllclByZWZzLkdldEludChcImtleV9jYXJkc19pbmRleFwiLCAxKSwgXCJUZXhhc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZGlzcGxheUNhcmRzTnVtKHR1cm46IG51bWJlciwgY2FyZHM6IG51bWJlcikge1xuICAgICAgICBsZXQgY2FyZHNOdW0gPSAwO1xuICAgICAgICBzd2l0Y2ggKHR1cm4pIHtcbiAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgY2FyZHNOdW0gPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNhcmRzTnVtID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYXJkc051bSA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY2FyZHNOdW0gPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNhcmRzTnVtID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYXJkc051bSA9IGNhcmRzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJkc051bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHVybk5hbWUodHVybjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGxldCB0eXBlOiBUZXhhc1R1cm5FbnVtID0gdHVybjtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uSW5pdDpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIueJjOiwsVwiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uVHVybjFfMDpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlByZWZsb3BcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuMl8zOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiRmxvcFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlR1cm4zXzQ6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJUdXJuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uVHVybjRfNTpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlJpdmVyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uVHJ1bkNvbXBhcmU6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJTaG93ZG93blwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufSJdfQ==