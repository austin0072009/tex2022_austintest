"use strict";
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