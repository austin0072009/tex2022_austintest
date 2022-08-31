"use strict";
cc._RF.push(module, '8829bkykLFKxJd5ZHHJwP6c', 'MyCardHistory');
// GameHall/script/Lobby/career/MyCardHistory.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var CareerNetDataStruct_1 = require("./CareerNetDataStruct");
var MyCardTurnCellComp_1 = require("./MyCardTurnCellComp");
var TexasBase_1 = require("./TexasBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MyCardHistory = /** @class */ (function (_super) {
    __extends(MyCardHistory, _super);
    function MyCardHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tableId = 0;
        _this.ui_btnClose_history = null;
        _this.ui_paipu = null;
        _this.ui_ListContent = null;
        _this.ui_HisInfoTitleTextBg = null;
        _this.ui_turnContent = null;
        _this.ui_ShowDownContent = null;
        _this.ui_ShowDownTitle = null;
        _this.ui_ShowDownInfoList = null;
        _this.ui_sliderSelectPage = null;
        _this.curPageIndex = -1;
        _this.ui_btnPageNext = null;
        _this.ui_btnPagePre = null;
        _this.ui_txtPageIndex = null;
        _this.ui_HisInfoTitleText = null;
        _this.ui_historyGroup = null;
        _this.onLoadEnd = false;
        return _this;
        // public HideChildren(node:cc.Node){
        // }
    }
    Object.defineProperty(MyCardHistory.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardHistory.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardHistory.prototype, "componentName", {
        get: function () {
            return "historyPanel";
        },
        enumerable: false,
        configurable: true
    });
    MyCardHistory.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    MyCardHistory.prototype.MyStart = function (_cid, _data) {
        if (_data === void 0) { _data = null; }
        this.cid = _cid;
        this.data = _data;
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    MyCardHistory.prototype.AutoSetGoProperty = function () { };
    MyCardHistory.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.Init();
        this.Show();
    };
    MyCardHistory.prototype.InitLanguage = function () {
    };
    MyCardHistory.prototype.Init = function () {
        this.firstCards = [];
        this.afterCards = [];
        this.showCards = [];
        this.selectFiveCards = [];
        this.InitEvents();
        this.Hide();
    };
    MyCardHistory.prototype.InitEvents = function () {
        var _this = this;
        this.ui_btnClose_history.onClick(function () {
            _this.Hide();
        });
        this.ui_sliderSelectPage.on(fgui.Event.STATUS_CHANGED, function (progress) {
            if (progress.value == 0)
                return; //打开的时候会默认将滑动条的值滑到0，这时候会先刷新一次第一页的数据，然后再刷新当前maxpage的值
            var pageIndex = UIUtil_1.UIUtil.NumberToInt(progress.value); //this.Clamp(UIUtil.NumberToInt(Math.round(progress.value * this.maxPageCount)), 1, this.maxPageCount);
            // console.log("progress: " + progress.value + " curpage:" + this.curPageIndex +" , pageIndex:"+pageIndex);
            if (pageIndex != _this.curPageIndex) {
                _this.SetCurPageIndex(pageIndex);
            }
        });
        this.ui_btnPageNext.clearClick();
        this.ui_btnPageNext.onClick(function () {
            _this.SetSliderValueByIndex(_this.curPageIndex + 1);
        });
        this.ui_btnPagePre.clearClick();
        this.ui_btnPagePre.onClick(function () {
            _this.SetSliderValueByIndex(_this.curPageIndex - 1);
        });
    };
    MyCardHistory.prototype.SetSliderValueByIndex = function (pageIndex) {
        this.ui_sliderSelectPage.value = pageIndex; //this.maxPageCount > 0 ? pageIndex / this.maxPageCount : 0;
        this.SetCurPageIndex(pageIndex);
    };
    MyCardHistory.prototype.SetCurPageIndex = function (pageIndex) {
        // this.Hide();
        if (pageIndex > this.maxPageCount || pageIndex <= 0 || this.curPageIndex == pageIndex || this.maxPageCount <= 0) {
            return;
        }
        this.curPageIndex = pageIndex;
        // console.log("curPageIndex:" + this.curPageIndex + " maxPageCount:" + this.maxPageCount);
        var enableFirst = pageIndex > 1 && this.maxPageCount > 1;
        this.SetButtonEnable(this.ui_btnPagePre, enableFirst);
        var enableLast = pageIndex < this.maxPageCount && this.maxPageCount > 1;
        this.SetButtonEnable(this.ui_btnPageNext, enableLast);
        this.ui_txtPageIndex.text = this.curPageIndex + "/" + this.maxPageCount;
        console.log("txt:" + this.ui_txtPageIndex.text);
        this.pageSd = this.historyList[this.curPageIndex - 1];
        // let positive = this.pageSd.j >= 0 ? "+" : "";
        // console.error("txtJackpotPool = " + this.pageSd.j);
        this.ShowHistoryInfo(this.pageSd);
    };
    MyCardHistory.prototype.SetButtonEnable = function (btn, isEnable, btnColor, txtColor) {
        if (btnColor === void 0) { btnColor = null; }
        if (txtColor === void 0) { txtColor = null; }
        btn.enabled = isEnable;
        var _img = btn.getChild("Image").asImage;
        if (_img == null)
            return;
        if (isEnable) {
            _img.color = btnColor == null ? cc.Color.WHITE : btnColor;
        }
        else {
            _img.color = cc.Color.GRAY;
        }
        if (btn._children.length > 0) {
            var text = btn.getChild("Text");
            if (text != null) {
                if (isEnable) {
                    text.asTextField.color = txtColor == null ? cc.Color.WHITE : txtColor;
                }
                else {
                    text.asTextField.color = cc.Color.GRAY;
                }
            }
        }
    };
    //打开界面
    MyCardHistory.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.InitLanguage();
        if (this.data == null) {
            var _getlist = new CareerNetDataStruct_1.cs_getscollectbyid_tex();
            _getlist.cid = this.cid;
            _getlist._g = 51;
            _getlist.fn = "cs_getscollectbyid_tex";
            WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getscollectbyid_tex.bind(this));
        }
        else {
            this.UpdateData(this.data.ulist, this.data.tinfo, this.data.tnum, this.data.baserate, this.data.showCard);
        }
    };
    MyCardHistory.prototype.sc_getscollectbyid_tex = function (data) {
        if (data.result != 1) {
            console.error("获取数据错误：" + data.result);
            return;
        }
        this.UpdateData_sc(data);
    };
    MyCardHistory.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    MyCardHistory.prototype.ShowHistoryInfo = function (data) {
        this.ui_ListContent.visible = (data.tInfo != null && data.tInfo.length > 0);
        this.ShowList(data.tInfo, data.ipool, data.ng);
        this.ui_HisInfoTitleTextBg.visible = (data.tlist != null && data.tlist.length > 0);
        this.ui_turnContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        this.ui_ShowDownContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        // this.Show();
        this.ShowTurnInfo(data.tlist, data.ipool, data.tInfo);
    };
    MyCardHistory.prototype.ShowList = function (tList, poolNum, ng) {
        this.ui_ListContent.removeChildrenToPool();
        this.ui_ListContent.height = 0;
        if (tList == null || tList.length == 0)
            return;
        var go = null;
        var isShow = this.isShowPai(tList);
        this.showCards = [];
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListContent.addItemFromPool();
            this.ui_ListContent.height += 155;
            // go.transform.GetComponent<RectTransform>().sizeDelta = new Vector2(820, 110);
            this.SetUserCellInfo(go.asCom, tList[i], isShow, ng);
            this.GetUserShowCard(tList[i]);
        }
        if (poolNum != 0) {
            go = this.ui_ListContent.addItemFromPool();
            this.ui_ListContent.height += 155;
            // go.transform.GetComponent<RectTransform>().sizeDelta = new Vector2(820, 80);
            var infoPanel = go.asCom.getChild("historyCellPanel").asGroup;
            var insPanel = go.asCom.getChild("insPoolPanel").asCom;
            infoPanel.visible = false;
            insPanel.visible = true;
            var insText = insPanel.getChild("insPoolNum").asTextField;
            var insTitle = insPanel.getChild("insPooltext").asTextField;
            insTitle.text = "保险池：";
            var inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + UIUtil_1.UIUtil.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? cc.Color.RED : cc.Color.GREEN;
        }
        console.log("======ShowList == ui_ListContent.numItems:" + this.ui_ListContent.numItems + ", ui_ListContent.height:" + this.ui_ListContent.height);
    };
    // 状态 弃牌1; 开牌2; 未弃牌未开牌3; 弃牌前两张牌只显示背面
    MyCardHistory.prototype.SetUserCellInfo = function (cellItem, gainData, isShowPai, ng) {
        var infoPanel = cellItem.getChild("historyCellPanel").asCom;
        var insPanel = cellItem.getChild("insPoolPanel").asCom;
        infoPanel.visible = true;
        insPanel.visible = false;
        var userInfo = this.GetUser(gainData.id);
        if (userInfo == null)
            console.log("userInfo is null , gainData.id=" + gainData.id);
        var txtName = cellItem.getChild("txtName").asTextField;
        var txtGamble = cellItem.getChild("txtGamble").asTextField;
        var txtGain = cellItem.getChild("txtGain").asTextField;
        var txtSpecialCard = cellItem.getChild("txtSpecialCard").asTextField;
        txtSpecialCard.visible = false;
        var statusbg = cellItem.getChild("statusbg").asLoader;
        var txtStatus = cellItem.getChild("txtStatus").asTextField;
        var txtInsurance = cellItem.getChild("txtInsurance").asTextField;
        var posName = cellItem.getChild("txtPos").asTextField;
        posName.text = TexasBase_1.TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil_1.UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);
        txtGamble.text = "下注: " + UIUtil_1.UIUtil.formatNumber100(gainData.g); //下注
        var positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + UIUtil_1.UIUtil.formatNumber100(gainData.wg);
        txtGain.color = gainData.wg >= 0 ? cc.Color.RED : cc.Color.GREEN; //Const.ColorNumRed : Const.ColorNumGreen;      
        var inspositive = gainData.ins > 0 ? "+" : "";
        txtInsurance.text = gainData.ins == 0 ? "" : inspositive + (gainData.ins / 100).toFixed(3).slice(0, -1);
        txtInsurance.color = gainData.ins >= 0 ? cc.Color.RED : cc.Color.GREEN; //Const.ColorNumRed : Const.ColorNumGreen;       
        this.selectFiveCards = [];
        var isQiPai = gainData.gu == 1;
        var isDealCard = ng > 1; //是否到了最后分牌阶段
        this.DealCardByDefault(gainData);
        if (!isQiPai && isDealCard) //没有弃牌且有7张牌时，最大的五张牌组合的类型
         {
            if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                txtSpecialCard.visible = true;
                // this.selectFiveCards = Texas.GetMaxTypeCards(Texas.GetFiveFromSeven(this.firstCards, this.afterCards));
                // txtSpecialCard.text = Texas.GetTexasName(this.selectFiveCards);
            }
        }
        var isWHITE = false;
        var cardEye = null;
        var card = null;
        //DebugEX.LogE("count;" + showCardCount + " gaindata.s:" + gainData.s);
        for (var i = 0; i < 2; i++) //首牌显示
         {
            cardEye = cellItem.getChild("cardEye" + (i + 1)).asImage;
            cardEye.visible = false;
            card = cellItem.getChild("card" + (i + 1)).asLoader;
            var cardId = 0;
            if (this.firstCards.length > i)
                cardId = this.firstCards[i];
            card.visible = true;
            // if (((isQiPai && !isSelf) || (!isQiPai && !isDealCard && !isSelf)) && this.showCard != 1 && !isShowPai)//不是自己的弃牌玩家不显示首牌,未比牌也不显示别人的首牌
            // {
            //     cardId = 0;
            // }
            //Debug.Log("userInfo.wName:" + userInfo.wName + " cardId: " + i + " :" + cardId);
            // card.url = "ui://Lobby/001";
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? "001_1" : cardId + "_1", "Lobby");
            if (!isQiPai) //未弃牌结算有牌型的时候未选中的牌变灰,弃牌所有牌置灰
             {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId))
                        isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        for (var i = 0; i < 5; i++) //系统牌显示
         {
            card = cellItem.getChild("card" + (i + 3)).asLoader;
            var cardId = 0;
            if (this.afterCards.length > i)
                cardId = this.afterCards[i];
            card.visible = (cardId > 0);
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");
            if (!isQiPai) //未弃牌结算有牌型的时候未选中的牌变灰,弃牌首牌置灰
             {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId))
                        isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        //没有弃牌，没有白色牌，则全部为白
        if (!isQiPai && !isWHITE) {
            for (var i = 0; i < 7; i++) {
                card = cellItem.getChild("card" + (i + 1)).asLoader;
                card.color = cc.Color.WHITE;
            }
        }
        //statusbg.gameObject.SetActive(gainData.s != 3);
        statusbg.visible = true;
        if (gainData.gu != 1 && gainData.s != 5) {
            statusbg.visible = false;
        }
        //小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        txtStatus.text = this.GetUserActionString(gainData.s, gainData.gu);
        console.log("userId:" + gainData.id + " s:" + gainData.s);
    };
    MyCardHistory.prototype.ShowTurnInfo = function (tlist, poolNum, uList) {
        var _this = this;
        this.ui_turnContent.removeChildrenToPool();
        this.ui_turnContent.height = 0;
        var h = this.ui_ShowDownContent.height - this.ui_ShowDownInfoList.numItems * 115;
        this.ui_ShowDownContent.height = h < 122 ? 122 : h;
        this.ui_ShowDownInfoList.removeChildrenToPool();
        if (tlist == null || tlist.length == 0)
            return;
        var go = null;
        if (this.turnDic == null)
            this.turnDic = new Map();
        this.turnDic.clear();
        tlist.forEach(function (temp) {
            if (_this.turnDic.has(temp.turn)) {
                if (_this.turnDic.get(temp.turn) == null) {
                    var list = [];
                    list.push(temp);
                    _this.turnDic.set(temp.turn, list);
                }
                else {
                    _this.turnDic.get(temp.turn).push(temp);
                }
            }
            else {
                var list = [];
                list.push(temp);
                _this.turnDic.set(temp.turn, list);
            }
        });
        var turnType = [];
        this.turnDic.forEach(function (value, key) {
            turnType.push(key);
        });
        turnType.sort(function (X1, X2) { return X1 - X2; });
        var lastTotalDizhu = 0;
        var curTurnDizhu = 0;
        for (var i = 0; i < turnType.length; i++) {
            var turn = turnType[i];
            if (turn == 5)
                continue;
            var aList = this.turnDic.get(turn);
            aList.forEach(function (temp) {
                curTurnDizhu += temp.g;
            });
            var curValue = 0;
            if (turn == 1) {
                curTurnDizhu += (uList.length * this.di);
                curValue = curTurnDizhu;
            }
            else
                curValue = lastTotalDizhu;
            lastTotalDizhu += curTurnDizhu;
            go = this.ui_turnContent.addItemFromPool();
            this.ui_turnContent.height += 122;
            var comp = go.node.getComponent(MyCardTurnCellComp_1.MyCardTurnCellComp);
            if (comp == null) {
                comp = go.node.addComponent(MyCardTurnCellComp_1.MyCardTurnCellComp);
                comp.fguiComponent = go.asCom;
            }
            comp.historyComp = this;
            comp.MyStart(aList, this.users, this.afterCards, turn, curValue, this.pageSd.bankerpos, this.pageSd.tInfo);
            curTurnDizhu = 0;
        }
        console.log("======ShowTurnInfo == ui_turnContent.numItems:" + this.ui_turnContent.numItems + ", ui_turnContent.height:" + this.ui_turnContent.height);
        this.ShowShowDownInfo(lastTotalDizhu, poolNum);
    };
    MyCardHistory.prototype.ShowShowDownInfo = function (totalDizhu, poolNum) {
        var showDownPlayers = [];
        this.pageSd.tInfo.forEach(function (item) {
            if (item.gu != 1) {
                showDownPlayers.push(item);
            }
        });
        this.ui_ShowDownTitle.visible = (showDownPlayers != null && showDownPlayers.length > 0);
        if (showDownPlayers == null || showDownPlayers.length == 0)
            return;
        var titleComp = this.ui_ShowDownTitle.node.getComponent(MyCardTurnCellComp_1.TurnTitleComp);
        if (titleComp == null) {
            titleComp = this.ui_ShowDownTitle.node.addComponent(MyCardTurnCellComp_1.TurnTitleComp);
            titleComp.fguiComponent = this.ui_ShowDownTitle;
            this.ui_ShowDownTitle.node.active = true;
        }
        titleComp.MyStart2(showDownPlayers.length, this.showCards.length > 0 ? this.showCards : this.afterCards, 5, totalDizhu);
        var paipuComp = this.ui_paipu.node.getComponent(MyCardTurnCellComp_1.TurnTitleComp);
        if (paipuComp == null) {
            paipuComp = this.ui_paipu.node.addComponent(MyCardTurnCellComp_1.TurnTitleComp);
            paipuComp.fguiComponent = this.ui_paipu;
            this.ui_paipu.node.active = true;
        }
        paipuComp.MyStart2(this.pageSd.tInfo.length, this.showCards.length > 0 ? this.showCards : this.afterCards, -1, totalDizhu);
        this.ui_ShowDownInfoList.removeChildrenToPool();
        this.ui_ShowDownContent.height = 122;
        var go = null;
        for (var i = 0; i < showDownPlayers.length; i++) {
            go = this.ui_ShowDownInfoList.addItemFromPool();
            this.ui_ShowDownContent.height += 155;
            this.ui_ShowDownInfoList.height += 155;
            this.SetShowDownCellInfo(go.asCom, showDownPlayers[i], this.pageSd.ng);
        }
        if (poolNum != 0) {
            go = this.ui_ShowDownInfoList.addItemFromPool();
            this.ui_ShowDownContent.height += 155;
            this.ui_ShowDownInfoList.height += 155;
            var showDownPanel = go.asCom.getChild("showDownPanel").asGroup;
            var insPanel = go.asCom.getChild("insPoolPanel").asCom;
            showDownPanel.visible = false;
            insPanel.visible = true;
            var insText = insPanel.getChild("insPoolNum").asTextField;
            var insTitle = insPanel.getChild("insPooltext").asTextField;
            insTitle.text = "保险池：";
            var inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + UIUtil_1.UIUtil.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); //Const.ColorNumRed : Const.ColorNumGreen;
        }
        console.log("======ShowShowDownInfo == ui_ShowDownInfoList.numItems:" + this.ui_ShowDownInfoList.numItems + ", ui_ShowDownContent.height:" + this.ui_ShowDownContent.height);
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_ShowDownInfoList.gameObject.GetComponent<RectTransform>());
    };
    MyCardHistory.prototype.SetShowDownCellInfo = function (cellItem, gainData, ng) {
        if (gainData == null)
            return;
        var showDownPanel = cellItem.getChild("showDownPanel").asGroup;
        var insPanel = cellItem.getChild("insPoolPanel").asCom;
        showDownPanel.visible = true;
        insPanel.visible = false;
        var userInfo = this.GetUser(gainData.id);
        var txtName = cellItem.getChild("txtName").asTextField;
        var txtGain = cellItem.getChild("txtGain").asTextField;
        var txtSpecialCard = cellItem.getChild("txtSpecialCard").asTextField;
        txtSpecialCard.visible = false;
        var txtInsurance = cellItem.getChild("txtInsurance").asTextField;
        var posName = cellItem.getChild("curPosName").asTextField;
        console.log("curPosName == ", TexasBase_1.TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo));
        posName.text = TexasBase_1.TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil_1.UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);
        var positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + UIUtil_1.UIUtil.formatNumber100(gainData.wg);
        txtGain.color = gainData.wg >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); // Const.ColorNumRed : Const.ColorNumGreen;
        var inspositive = gainData.ins > 0 ? "+" : "";
        txtInsurance.text = gainData.ins == 0 ? "" : inspositive + UIUtil_1.UIUtil.formatNumber100(gainData.ins);
        txtInsurance.color = gainData.ins >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); // Const.ColorNumRed : Const.ColorNumGreen;
        this.selectFiveCards = [];
        var isQiPai = gainData.gu == 1;
        var isDealCard = ng > 1; //是否到了最后分牌阶段
        this.DealCardByDefault(gainData);
        if (!isQiPai && isDealCard) //没有弃牌且有7张牌时，最大的五张牌组合的类型
         {
            if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                txtSpecialCard.visible = true;
                // this.selectFiveCards = TexasBase.GetMaxTypeCards(TexasBase.GetFiveFromSeven(this.firstCards, this.afterCards));
                // txtSpecialCard.text = TexasBase.GetTexasName(this.selectFiveCards);
            }
        }
        var isWHITE = false;
        var card = null;
        var isSelf = gainData.id == LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid;
        //DebugEX.LogE("count;" + showCardCount + " gaindata.s:" + gainData.s);
        for (var i = 0; i < 2; i++) //首牌显示
         {
            card = cellItem.getChild("card" + (i + 1)).asLoader;
            var cardId = 0;
            if (this.firstCards.length > i)
                cardId = this.firstCards[i];
            card.visible = true;
            if ((isQiPai && !isSelf) || (!isQiPai && !isDealCard)) //不是自己的弃牌玩家不显示首牌,未比牌也不显示别人的首牌
             {
                cardId = 0;
            }
            //DebugEX.LogE("userInfo.wName:" + userInfo.wName + " cardId: " + i + " :" + cardId);
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");
            if (!isQiPai) //未弃牌结算有牌型的时候未选中的牌变灰,弃牌所有牌置灰
             {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId))
                        isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        for (var i = 0; i < 5; i++) //系统牌显示
         {
            card = cellItem.getChild("card" + (i + 3)).asLoader;
            var cardId = 0;
            if (this.afterCards.length > i)
                cardId = this.afterCards[i];
            card.visible = (cardId > 0);
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");
            if (!isQiPai) //未弃牌结算有牌型的时候未选中的牌变灰,弃牌首牌置灰
             {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId))
                        isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        //没有弃牌，没有白色牌，则全部为白
        if (!isQiPai && !isWHITE) {
            for (var i = 0; i < 7; i++) {
                card = cellItem.getChild("card" + (i + 1)).asLoader;
                card.color = cc.Color.WHITE;
            }
        }
    };
    MyCardHistory.prototype.isShowPai = function (userList) {
        var isShow = false;
        userList.forEach(function (item) {
            if (item.st == 1 && item.id == LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }
            if (item.fshow == true && item.id == LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }
        });
        return isShow;
    };
    MyCardHistory.prototype.isShowPaiForCardIndex = function (cardId, showCardId) {
        return cardId > 0 && showCardId != null && showCardId != "" && showCardId.indexOf(cardId.toString()) >= 0;
    };
    //1 :展示秀牌 0: 不展示
    MyCardHistory.prototype.isShowPaiForCardIndexdelte = function (index, showCardId) {
        var sign = showCardId / (index <= 0 ? 1 : (index * 10));
        return (sign % 10) == 1;
    };
    MyCardHistory.prototype.isFirstCard = function (cardId, firstList) {
        var b = false;
        if (firstList != null) {
            firstList.forEach(function (item) {
                if (cardId == item) {
                    b = true;
                }
            });
        }
        return b;
    };
    MyCardHistory.prototype.isSelectCard = function (cardId) {
        var b = false;
        if (this.selectFiveCards != null) {
            this.selectFiveCards.forEach(function (item) {
                if (cardId == item) {
                    b = true;
                }
            });
        }
        return b;
    };
    MyCardHistory.prototype.UpdateData_sc = function (data) {
        this.UpdateData(data.ulist, [data.tinfo], data.tnum, data.baserate, data.showCard);
    };
    MyCardHistory.prototype.UpdateData = function (ulist, tulist, tableId, dizhu, ShowCard) {
        this.tableId = tableId;
        this.di = dizhu;
        this.showCard = ShowCard;
        this.ui_txtPageIndex.text = 0 + "/" + 0;
        this.users = ulist;
        this.historyList = tulist;
        this.curPageIndex = -1;
        this.maxPageCount = this.historyList.length;
        this.ui_sliderSelectPage.visible = this.maxPageCount > 1;
        this.ui_sliderSelectPage.min = 1;
        this.ui_sliderSelectPage.max = this.maxPageCount > 1 ? this.maxPageCount : 100;
        this.ui_sliderSelectPage.value = 1;
        this.SetSliderValueByIndex(1);
    };
    MyCardHistory.prototype.GetUser = function (id) {
        if (this.users == null) {
            return null;
        }
        return this.users.find(function (user) { return user.uid == id; });
    };
    MyCardHistory.prototype.GetUserShowCard = function (gainData) {
        if (gainData.id == LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid && gainData.ownc != null && gainData.ownc.length > 0) {
            this.showCards = [];
            for (var i = 0; i < 5 && i < gainData.ownc.length; i++) {
                this.showCards.push(gainData.ownc[i]); //玩家查看余牌后的公牌
            }
        }
    };
    MyCardHistory.prototype.DealCardByDefault = function (gainData) {
        this.firstCards = [];
        for (var i = 0; i < 2 && i < gainData.p.length; i++) {
            this.firstCards.push(gainData.p[i]); //首牌
        }
        this.afterCards = [];
        for (var i = 0; i < 5 && i < this.pageSd.c.length; i++) {
            this.afterCards.push(this.pageSd.c[i]); //系统牌
        }
    };
    //状态 弃牌1; 开牌2; 未弃牌未开牌3; 弃牌前两张牌只显示背面
    MyCardHistory.prototype.GetUserActionString = function (type, giveup) {
        var str = "";
        if (giveup == 1) {
            str = "弃牌";
        }
        else {
            switch (type) {
                case -1:
                    str = "-1";
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    str = "开牌";
                    break;
                default:
                    str = "default";
                    break;
            }
        }
        return str;
    };
    MyCardHistory.prototype.Clamp = function (value, min, max) {
        var num = 0;
        num = value < min ? min : value;
        num = value > max ? max : value;
        return num;
    };
    MyCardHistory = __decorate([
        ccclass
    ], MyCardHistory);
    return MyCardHistory;
}(ViewBase_1.default));
exports.default = MyCardHistory;

cc._RF.pop();