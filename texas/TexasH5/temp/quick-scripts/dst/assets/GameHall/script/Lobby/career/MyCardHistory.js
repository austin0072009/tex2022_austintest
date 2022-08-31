
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/MyCardHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcTXlDYXJkSGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0Qsa0ZBQWlGO0FBQ2pGLDJEQUEwRDtBQUMxRCx5REFBd0Q7QUFDeEQsNkRBQXdJO0FBQ3hJLDJEQUF5RTtBQUN6RSx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVE7SUFBbkQ7UUFBQSxxRUF1dUJDO1FBN3RCVSxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBSVoseUJBQW1CLEdBQWlCLElBQUksQ0FBQztRQUN6QyxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyxvQkFBYyxHQUFlLElBQUksQ0FBQztRQUNsQywyQkFBcUIsR0FBb0IsSUFBSSxDQUFDO1FBQzlDLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBQ2xDLHdCQUFrQixHQUFvQixJQUFJLENBQUM7UUFDM0Msc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUN6Qyx5QkFBbUIsR0FBZSxJQUFJLENBQUM7UUFDdkMseUJBQW1CLEdBQWlCLElBQUksQ0FBQztRQUN4QyxrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRW5CLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBSXhDLHlCQUFtQixHQUFvQixJQUFJLENBQUM7UUFDNUMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBVXZDLGVBQVMsR0FBRyxLQUFLLENBQUM7O1FBd3JCMUIscUNBQXFDO1FBRXJDLElBQUk7SUFHUixDQUFDO0lBdHVCRyxzQkFBYyw4Q0FBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FB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Ly4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFdlYlNvY2tldE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9XZWJTb2NrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuLi8uLi9Mb2dpbi9Mb2dpblZpZXdDdHJcIjtcbmltcG9ydCB7IGNzX2dldHNjb2xsZWN0YnlpZF90ZXgsIFBJbmZvU0QsIHNjX2dldHNjb2xsZWN0YnlpZF90ZXgsIFRleEFjdGlvblNELCBUZXhUSW5mb1NELCBUZXhVc2VySW5mb1NEIH0gZnJvbSBcIi4vQ2FyZWVyTmV0RGF0YVN0cnVjdFwiO1xuaW1wb3J0IHsgTXlDYXJkVHVybkNlbGxDb21wLCBUdXJuVGl0bGVDb21wIH0gZnJvbSBcIi4vTXlDYXJkVHVybkNlbGxDb21wXCI7XG5pbXBvcnQgeyBUZXhhc0Jhc2UgfSBmcm9tIFwiLi9UZXhhc0Jhc2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2FyZEhpc3RvcnkgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJoaXN0b3J5UGFuZWxcIjtcbiAgICB9XG4gICAgcHVibGljIHRhYmxlSWQgPSAwO1xuICAgIHB1YmxpYyBkaTogbnVtYmVyO1xuICAgIHB1YmxpYyBzaG93Q2FyZDogbnVtYmVyO1xuXG4gICAgcHVibGljIHVpX2J0bkNsb3NlX2hpc3Rvcnk6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3BhaXB1OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9MaXN0Q29udGVudDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHVibGljIHVpX0hpc0luZm9UaXRsZVRleHRCZzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHVybkNvbnRlbnQ6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9TaG93RG93bkNvbnRlbnQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX1Nob3dEb3duVGl0bGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX1Nob3dEb3duSW5mb0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9zbGlkZXJTZWxlY3RQYWdlOiBmZ3VpLkdTbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgY3VyUGFnZUluZGV4ID0gLTE7XG4gICAgcHJpdmF0ZSBtYXhQYWdlQ291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdWlfYnRuUGFnZU5leHQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0blBhZ2VQcmU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dFBhZ2VJbmRleDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1c2VyczogUEluZm9TRFtdO1xuICAgIHB1YmxpYyBoaXN0b3J5TGlzdDogVGV4VEluZm9TRFtdO1xuICAgIHB1YmxpYyB1aV9IaXNJbmZvVGl0bGVUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9oaXN0b3J5R3JvdXA6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwdWJsaWMgZmlyc3RDYXJkczogbnVtYmVyW107XG4gICAgcHVibGljIGFmdGVyQ2FyZHM6IG51bWJlcltdO1xuICAgIHB1YmxpYyBzaG93Q2FyZHM6IG51bWJlcltdO1xuICAgIHB1YmxpYyBzZWxlY3RGaXZlQ2FyZHM6IG51bWJlcltdO1xuXG4gICAgcHJpdmF0ZSBjaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGRhdGE6IGFueTtcblxuICAgIHByaXZhdGUgb25Mb2FkRW5kID0gZmFsc2U7XG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIE15U3RhcnQoX2NpZDogc3RyaW5nLCBfZGF0YTogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmNpZCA9IF9jaWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IF9kYXRhO1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIHB1YmxpYyBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG5cbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgIH1cblxuXG4gICAgcHVibGljIEluaXRMYW5ndWFnZSgpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgSW5pdCgpIHtcbiAgICAgICAgdGhpcy5maXJzdENhcmRzID0gW107XG4gICAgICAgIHRoaXMuYWZ0ZXJDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLnNob3dDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuSW5pdEV2ZW50cygpO1xuICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy51aV9idG5DbG9zZV9oaXN0b3J5Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS5vbihmZ3VpLkV2ZW50LlNUQVRVU19DSEFOR0VELCAocHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcy52YWx1ZSA9PSAwKSByZXR1cm47Ly/miZPlvIDnmoTml7blgJnkvJrpu5jorqTlsIbmu5HliqjmnaHnmoTlgLzmu5HliLAw77yM6L+Z5pe25YCZ5Lya5YWI5Yi35paw5LiA5qyh56ys5LiA6aG155qE5pWw5o2u77yM54S25ZCO5YaN5Yi35paw5b2T5YmNbWF4cGFnZeeahOWAvFxuXG4gICAgICAgICAgICBsZXQgcGFnZUluZGV4ID0gVUlVdGlsLk51bWJlclRvSW50KHByb2dyZXNzLnZhbHVlKTsgLy90aGlzLkNsYW1wKFVJVXRpbC5OdW1iZXJUb0ludChNYXRoLnJvdW5kKHByb2dyZXNzLnZhbHVlICogdGhpcy5tYXhQYWdlQ291bnQpKSwgMSwgdGhpcy5tYXhQYWdlQ291bnQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9ncmVzczogXCIgKyBwcm9ncmVzcy52YWx1ZSArIFwiIGN1cnBhZ2U6XCIgKyB0aGlzLmN1clBhZ2VJbmRleCArXCIgLCBwYWdlSW5kZXg6XCIrcGFnZUluZGV4KTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggIT0gdGhpcy5jdXJQYWdlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEN1clBhZ2VJbmRleChwYWdlSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5QYWdlTmV4dC5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuUGFnZU5leHQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNldFNsaWRlclZhbHVlQnlJbmRleCh0aGlzLmN1clBhZ2VJbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5QYWdlUHJlLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5QYWdlUHJlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZXRTbGlkZXJWYWx1ZUJ5SW5kZXgodGhpcy5jdXJQYWdlSW5kZXggLSAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRTbGlkZXJWYWx1ZUJ5SW5kZXgocGFnZUluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJTZWxlY3RQYWdlLnZhbHVlID0gcGFnZUluZGV4OyAvL3RoaXMubWF4UGFnZUNvdW50ID4gMCA/IHBhZ2VJbmRleCAvIHRoaXMubWF4UGFnZUNvdW50IDogMDtcbiAgICAgICAgdGhpcy5TZXRDdXJQYWdlSW5kZXgocGFnZUluZGV4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhZ2VTZDogVGV4VEluZm9TRDtcblxuICAgIHByaXZhdGUgU2V0Q3VyUGFnZUluZGV4KHBhZ2VJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMuSGlkZSgpO1xuXG4gICAgICAgIGlmIChwYWdlSW5kZXggPiB0aGlzLm1heFBhZ2VDb3VudCB8fCBwYWdlSW5kZXggPD0gMCB8fCB0aGlzLmN1clBhZ2VJbmRleCA9PSBwYWdlSW5kZXggfHwgdGhpcy5tYXhQYWdlQ291bnQgPD0gMCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5jdXJQYWdlSW5kZXggPSBwYWdlSW5kZXg7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImN1clBhZ2VJbmRleDpcIiArIHRoaXMuY3VyUGFnZUluZGV4ICsgXCIgbWF4UGFnZUNvdW50OlwiICsgdGhpcy5tYXhQYWdlQ291bnQpO1xuXG4gICAgICAgIGxldCBlbmFibGVGaXJzdCA9IHBhZ2VJbmRleCA+IDEgJiYgdGhpcy5tYXhQYWdlQ291bnQgPiAxO1xuXG4gICAgICAgIHRoaXMuU2V0QnV0dG9uRW5hYmxlKHRoaXMudWlfYnRuUGFnZVByZSwgZW5hYmxlRmlyc3QpO1xuXG4gICAgICAgIGxldCBlbmFibGVMYXN0ID0gcGFnZUluZGV4IDwgdGhpcy5tYXhQYWdlQ291bnQgJiYgdGhpcy5tYXhQYWdlQ291bnQgPiAxO1xuXG4gICAgICAgIHRoaXMuU2V0QnV0dG9uRW5hYmxlKHRoaXMudWlfYnRuUGFnZU5leHQsIGVuYWJsZUxhc3QpO1xuXG4gICAgICAgIHRoaXMudWlfdHh0UGFnZUluZGV4LnRleHQgPSB0aGlzLmN1clBhZ2VJbmRleCArIFwiL1wiICsgdGhpcy5tYXhQYWdlQ291bnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHh0OlwiICsgdGhpcy51aV90eHRQYWdlSW5kZXgudGV4dCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2QgPSB0aGlzLmhpc3RvcnlMaXN0W3RoaXMuY3VyUGFnZUluZGV4IC0gMV07XG4gICAgICAgIC8vIGxldCBwb3NpdGl2ZSA9IHRoaXMucGFnZVNkLmogPj0gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInR4dEphY2twb3RQb29sID0gXCIgKyB0aGlzLnBhZ2VTZC5qKTtcblxuICAgICAgICB0aGlzLlNob3dIaXN0b3J5SW5mbyh0aGlzLnBhZ2VTZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRCdXR0b25FbmFibGUoYnRuOiBmZ3VpLkdCdXR0b24sIGlzRW5hYmxlOiBib29sZWFuLCBidG5Db2xvcjogY2MuQ29sb3IgPSBudWxsLCB0eHRDb2xvcjogY2MuQ29sb3IgPSBudWxsKSB7XG4gICAgICAgIGJ0bi5lbmFibGVkID0gaXNFbmFibGU7XG4gICAgICAgIGxldCBfaW1nOiBmZ3VpLkdJbWFnZSA9IGJ0bi5nZXRDaGlsZChcIkltYWdlXCIpLmFzSW1hZ2U7XG4gICAgICAgIGlmIChfaW1nID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gYnRuQ29sb3IgPT0gbnVsbCA/IGNjLkNvbG9yLldISVRFIDogYnRuQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG4uX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gYnRuLmdldENoaWxkKFwiVGV4dFwiKTtcbiAgICAgICAgICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hc1RleHRGaWVsZC5jb2xvciA9IHR4dENvbG9yID09IG51bGwgPyBjYy5Db2xvci5XSElURSA6IHR4dENvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hc1RleHRGaWVsZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIC8v5omT5byA55WM6Z2iXG4gICAgcHVibGljIFNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzdXBlci5TaG93KCk7XG4gICAgICAgIHRoaXMuSW5pdExhbmd1YWdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX2dldHNjb2xsZWN0YnlpZF90ZXggPSBuZXcgY3NfZ2V0c2NvbGxlY3RieWlkX3RleCgpO1xuICAgICAgICAgICAgX2dldGxpc3QuY2lkID0gdGhpcy5jaWQ7XG4gICAgICAgICAgICBfZ2V0bGlzdC5fZyA9IDUxO1xuICAgICAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2dldHNjb2xsZWN0YnlpZF90ZXhcIjtcbiAgICAgICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfZ2V0c2NvbGxlY3RieWlkX3RleC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlRGF0YSh0aGlzLmRhdGEudWxpc3QsIHRoaXMuZGF0YS50aW5mbywgdGhpcy5kYXRhLnRudW0sIHRoaXMuZGF0YS5iYXNlcmF0ZSwgdGhpcy5kYXRhLnNob3dDYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2NfZ2V0c2NvbGxlY3RieWlkX3RleChkYXRhOiBzY19nZXRzY29sbGVjdGJ5aWRfdGV4KSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCAhPSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6I635Y+W5pWw5o2u6ZSZ6K+v77yaXCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VcGRhdGVEYXRhX3NjKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBIaWRlKCkge1xuICAgICAgICBzdXBlci5IaWRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dIaXN0b3J5SW5mbyhkYXRhOiBUZXhUSW5mb1NEKSB7XG4gICAgICAgIHRoaXMudWlfTGlzdENvbnRlbnQudmlzaWJsZSA9IChkYXRhLnRJbmZvICE9IG51bGwgJiYgZGF0YS50SW5mby5sZW5ndGggPiAwKTtcbiAgICAgICAgdGhpcy5TaG93TGlzdChkYXRhLnRJbmZvLCBkYXRhLmlwb29sLCBkYXRhLm5nKTtcblxuICAgICAgICB0aGlzLnVpX0hpc0luZm9UaXRsZVRleHRCZy52aXNpYmxlID0gKGRhdGEudGxpc3QgIT0gbnVsbCAmJiBkYXRhLnRsaXN0Lmxlbmd0aCA+IDApO1xuICAgICAgICB0aGlzLnVpX3R1cm5Db250ZW50LnZpc2libGUgPSAodGhpcy51aV9IaXNJbmZvVGl0bGVUZXh0QmcudmlzaWJsZSk7XG4gICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LnZpc2libGUgPSAodGhpcy51aV9IaXNJbmZvVGl0bGVUZXh0QmcudmlzaWJsZSk7XG4gICAgICAgIC8vIHRoaXMuU2hvdygpO1xuICAgICAgICB0aGlzLlNob3dUdXJuSW5mbyhkYXRhLnRsaXN0LCBkYXRhLmlwb29sLCBkYXRhLnRJbmZvKTtcblxuXG4gICAgfVxuICAgIHB1YmxpYyBTaG93TGlzdCh0TGlzdDogVGV4VXNlckluZm9TRFtdLCBwb29sTnVtOiBudW1iZXIsIG5nOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV9MaXN0Q29udGVudC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICB0aGlzLnVpX0xpc3RDb250ZW50LmhlaWdodCA9IDA7XG4gICAgICAgIGlmICh0TGlzdCA9PSBudWxsIHx8IHRMaXN0Lmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBnbzogZmd1aS5HT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgbGV0IGlzU2hvdyA9IHRoaXMuaXNTaG93UGFpKHRMaXN0KTtcblxuICAgICAgICB0aGlzLnNob3dDYXJkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGdvID0gdGhpcy51aV9MaXN0Q29udGVudC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMudWlfTGlzdENvbnRlbnQuaGVpZ2h0ICs9IDE1NTtcbiAgICAgICAgICAgIC8vIGdvLnRyYW5zZm9ybS5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKS5zaXplRGVsdGEgPSBuZXcgVmVjdG9yMig4MjAsIDExMCk7XG4gICAgICAgICAgICB0aGlzLlNldFVzZXJDZWxsSW5mbyhnby5hc0NvbSwgdExpc3RbaV0sIGlzU2hvdywgbmcpO1xuICAgICAgICAgICAgdGhpcy5HZXRVc2VyU2hvd0NhcmQodExpc3RbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb29sTnVtICE9IDApIHtcbiAgICAgICAgICAgIGdvID0gdGhpcy51aV9MaXN0Q29udGVudC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMudWlfTGlzdENvbnRlbnQuaGVpZ2h0ICs9IDE1NTtcbiAgICAgICAgICAgIC8vIGdvLnRyYW5zZm9ybS5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKS5zaXplRGVsdGEgPSBuZXcgVmVjdG9yMig4MjAsIDgwKTtcbiAgICAgICAgICAgIGxldCBpbmZvUGFuZWw6IGZndWkuR0dyb3VwID0gZ28uYXNDb20uZ2V0Q2hpbGQoXCJoaXN0b3J5Q2VsbFBhbmVsXCIpLmFzR3JvdXA7XG4gICAgICAgICAgICBsZXQgaW5zUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IGdvLmFzQ29tLmdldENoaWxkKFwiaW5zUG9vbFBhbmVsXCIpLmFzQ29tO1xuICAgICAgICAgICAgaW5mb1BhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGluc1BhbmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGluc1RleHQ6IGZndWkuR1RleHRGaWVsZCA9IGluc1BhbmVsLmdldENoaWxkKFwiaW5zUG9vbE51bVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBpbnNUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gaW5zUGFuZWwuZ2V0Q2hpbGQoXCJpbnNQb29sdGV4dFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGluc1RpdGxlLnRleHQgPSBcIuS/nemZqeaxoO+8mlwiXG5cbiAgICAgICAgICAgIGxldCBpbnNwb3NpdGl2ZSA9IHBvb2xOdW0gPiAwID8gXCIrXCIgOiBcIlwiO1xuICAgICAgICAgICAgaW5zVGV4dC50ZXh0ID0gaW5zcG9zaXRpdmUgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHBvb2xOdW0pO1xuICAgICAgICAgICAgaW5zVGV4dC5jb2xvciA9IHBvb2xOdW0gPj0gMCA/IGNjLkNvbG9yLlJFRCA6IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09U2hvd0xpc3QgPT0gdWlfTGlzdENvbnRlbnQubnVtSXRlbXM6XCIgKyB0aGlzLnVpX0xpc3RDb250ZW50Lm51bUl0ZW1zICsgXCIsIHVpX0xpc3RDb250ZW50LmhlaWdodDpcIiArIHRoaXMudWlfTGlzdENvbnRlbnQuaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8g54q25oCBIOW8g+eJjDE7IOW8gOeJjDI7IOacquW8g+eJjOacquW8gOeJjDM7IOW8g+eJjOWJjeS4pOW8oOeJjOWPquaYvuekuuiDjOmdolxuICAgIHB1YmxpYyBTZXRVc2VyQ2VsbEluZm8oY2VsbEl0ZW06IGZndWkuR0NvbXBvbmVudCwgZ2FpbkRhdGE6IFRleFVzZXJJbmZvU0QsIGlzU2hvd1BhaTogYm9vbGVhbiwgbmc6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5mb1BhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImhpc3RvcnlDZWxsUGFuZWxcIikuYXNDb207XG4gICAgICAgIGxldCBpbnNQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJpbnNQb29sUGFuZWxcIikuYXNDb207XG4gICAgICAgIGluZm9QYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaW5zUGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgdXNlckluZm86IFBJbmZvU0QgPSB0aGlzLkdldFVzZXIoZ2FpbkRhdGEuaWQpO1xuICAgICAgICBpZiAodXNlckluZm8gPT0gbnVsbCkgY29uc29sZS5sb2coXCJ1c2VySW5mbyBpcyBudWxsICwgZ2FpbkRhdGEuaWQ9XCIgKyBnYWluRGF0YS5pZClcbiAgICAgICAgbGV0IHR4dE5hbWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0TmFtZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dEdhbWJsZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRHYW1ibGVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRHYWluOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dEdhaW5cIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRTcGVjaWFsQ2FyZDogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRTcGVjaWFsQ2FyZFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgdHh0U3BlY2lhbENhcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgc3RhdHVzYmc6IGZndWkuR0xvYWRlciA9IGNlbGxJdGVtLmdldENoaWxkKFwic3RhdHVzYmdcIikuYXNMb2FkZXI7XG4gICAgICAgIGxldCB0eHRTdGF0dXM6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0U3RhdHVzXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgdHh0SW5zdXJhbmNlOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dEluc3VyYW5jZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHBvc05hbWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0UG9zXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBwb3NOYW1lLnRleHQgPSBUZXhhc0Jhc2UuZ2V0UGxheWVyUG9zVHlwZShnYWluRGF0YS5wb3MsIHRoaXMucGFnZVNkLmJhbmtlcnBvcywgdGhpcy5wYWdlU2QudEluZm8pO1xuICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQodHh0TmFtZSwgdXNlckluZm8ud05hbWUsIDYpO1xuXG4gICAgICAgIHR4dEdhbWJsZS50ZXh0ID0gXCLkuIvms6g6IFwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChnYWluRGF0YS5nKTsvL+S4i+azqFxuICAgICAgICBsZXQgcG9zaXRpdmUgPSBnYWluRGF0YS53ZyA+IDAgPyBcIitcIiA6IFwiXCI7XG4gICAgICAgIHR4dEdhaW4udGV4dCA9IHBvc2l0aXZlICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChnYWluRGF0YS53Zyk7XG4gICAgICAgIHR4dEdhaW4uY29sb3IgPSBnYWluRGF0YS53ZyA+PSAwID8gY2MuQ29sb3IuUkVEIDogY2MuQ29sb3IuR1JFRU47IC8vQ29uc3QuQ29sb3JOdW1SZWQgOiBDb25zdC5Db2xvck51bUdyZWVuOyAgICAgIFxuXG4gICAgICAgIGxldCBpbnNwb3NpdGl2ZSA9IGdhaW5EYXRhLmlucyA+IDAgPyBcIitcIiA6IFwiXCI7XG4gICAgICAgIHR4dEluc3VyYW5jZS50ZXh0ID0gZ2FpbkRhdGEuaW5zID09IDAgPyBcIlwiIDogaW5zcG9zaXRpdmUgKyAoZ2FpbkRhdGEuaW5zIC8gMTAwKS50b0ZpeGVkKDMpLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgdHh0SW5zdXJhbmNlLmNvbG9yID0gZ2FpbkRhdGEuaW5zID49IDAgPyBjYy5Db2xvci5SRUQgOiBjYy5Db2xvci5HUkVFTjsgLy9Db25zdC5Db2xvck51bVJlZCA6IENvbnN0LkNvbG9yTnVtR3JlZW47ICAgICAgIFxuXG4gICAgICAgIHRoaXMuc2VsZWN0Rml2ZUNhcmRzID0gW107XG4gICAgICAgIGxldCBpc1FpUGFpID0gZ2FpbkRhdGEuZ3UgPT0gMTtcblxuICAgICAgICBsZXQgaXNEZWFsQ2FyZCA9IG5nID4gMTsvL+aYr+WQpuWIsOS6huacgOWQjuWIhueJjOmYtuautVxuICAgICAgICB0aGlzLkRlYWxDYXJkQnlEZWZhdWx0KGdhaW5EYXRhKTtcblxuXG4gICAgICAgIGlmICghaXNRaVBhaSAmJiBpc0RlYWxDYXJkKS8v5rKh5pyJ5byD54mM5LiU5pyJN+W8oOeJjOaXtu+8jOacgOWkp+eahOS6lOW8oOeJjOe7hOWQiOeahOexu+Wei1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+PSAyICYmIHRoaXMuYWZ0ZXJDYXJkcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgIHR4dFNwZWNpYWxDYXJkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0Rml2ZUNhcmRzID0gVGV4YXMuR2V0TWF4VHlwZUNhcmRzKFRleGFzLkdldEZpdmVGcm9tU2V2ZW4odGhpcy5maXJzdENhcmRzLCB0aGlzLmFmdGVyQ2FyZHMpKTtcbiAgICAgICAgICAgICAgICAvLyB0eHRTcGVjaWFsQ2FyZC50ZXh0ID0gVGV4YXMuR2V0VGV4YXNOYW1lKHRoaXMuc2VsZWN0Rml2ZUNhcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNXSElURSA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FyZEV5ZTogZmd1aS5HSW1hZ2UgPSBudWxsO1xuICAgICAgICBsZXQgY2FyZDogZmd1aS5HTG9hZGVyID0gbnVsbDtcblxuICAgICAgICAvL0RlYnVnRVguTG9nRShcImNvdW50O1wiICsgc2hvd0NhcmRDb3VudCArIFwiIGdhaW5kYXRhLnM6XCIgKyBnYWluRGF0YS5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspLy/pppbniYzmmL7npLpcbiAgICAgICAge1xuICAgICAgICAgICAgY2FyZEV5ZSA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZEV5ZVwiICsgKGkgKyAxKSkuYXNJbWFnZTtcbiAgICAgICAgICAgIGNhcmRFeWUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAxKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgY2FyZElkID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2FyZHMubGVuZ3RoID4gaSlcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSB0aGlzLmZpcnN0Q2FyZHNbaV07XG5cbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGlmICgoKGlzUWlQYWkgJiYgIWlzU2VsZikgfHwgKCFpc1FpUGFpICYmICFpc0RlYWxDYXJkICYmICFpc1NlbGYpKSAmJiB0aGlzLnNob3dDYXJkICE9IDEgJiYgIWlzU2hvd1BhaSkvL+S4jeaYr+iHquW3seeahOW8g+eJjOeOqeWutuS4jeaYvuekuummlueJjCzmnKrmr5TniYzkuZ/kuI3mmL7npLrliKvkurrnmoTpppbniYxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBjYXJkSWQgPSAwO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2coXCJ1c2VySW5mby53TmFtZTpcIiArIHVzZXJJbmZvLndOYW1lICsgXCIgY2FyZElkOiBcIiArIGkgKyBcIiA6XCIgKyBjYXJkSWQpO1xuICAgICAgICAgICAgLy8gY2FyZC51cmwgPSBcInVpOi8vTG9iYnkvMDAxXCI7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGNhcmQsIGNhcmRJZCA9PSAwID8gXCIwMDFfMVwiIDogY2FyZElkICsgXCJfMVwiLCBcIkxvYmJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUWlQYWkpLy/mnKrlvIPniYznu5PnrpfmnInniYzlnovnmoTml7blgJnmnKrpgInkuK3nmoTniYzlj5jngbAs5byD54mM5omA5pyJ54mM572u54GwXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpKSBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspLy/ns7vnu5/niYzmmL7npLpcbiAgICAgICAge1xuICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAzKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgY2FyZElkID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID4gaSlcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSB0aGlzLmFmdGVyQ2FyZHNbaV07XG5cblxuICAgICAgICAgICAgY2FyZC52aXNpYmxlID0gKGNhcmRJZCA+IDApO1xuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShjYXJkLCBjYXJkSWQgPT0gMCA/IFwiMDAxXCIgOiBjYXJkSWQgKyBcIl8xXCIsIFwiTG9iYnlcIik7XG5cbiAgICAgICAgICAgIGlmICghaXNRaVBhaSkvL+acquW8g+eJjOe7k+eul+acieeJjOWei+eahOaXtuWAmeacqumAieS4reeahOeJjOWPmOeBsCzlvIPniYzpppbniYznva7ngbBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+PSAyICYmIHRoaXMuYWZ0ZXJDYXJkcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gdGhpcy5pc1NlbGVjdENhcmQoY2FyZElkKSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkpIGlzV0hJVEUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvL+ayoeacieW8g+eJjO+8jOayoeacieeZveiJsueJjO+8jOWImeWFqOmDqOS4uueZvVxuICAgICAgICBpZiAoIWlzUWlQYWkgJiYgIWlzV0hJVEUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAxKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9zdGF0dXNiZy5nYW1lT2JqZWN0LlNldEFjdGl2ZShnYWluRGF0YS5zICE9IDMpO1xuICAgICAgICBzdGF0dXNiZy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGdhaW5EYXRhLmd1ICE9IDEgJiYgZ2FpbkRhdGEucyAhPSA1KSB7XG4gICAgICAgICAgICBzdGF0dXNiZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/lsI/kuo7nrYnkuo4xIOihqOekuuWPquaYvuekuuS4pOW8oOeJjOiDjCDlpoLmnpzmmK/oh6rlt7HopoHmmL7npLrkuKTlvKDmiYvniYzjgIIgMu+8jDPvvIzooajnpLrlr7nlupTnrKzkuInvvIznrKzlm5vova7lvIPniYwgNeihqOekuuWIhueJjFxuICAgICAgICB0eHRTdGF0dXMudGV4dCA9IHRoaXMuR2V0VXNlckFjdGlvblN0cmluZyhnYWluRGF0YS5zLCBnYWluRGF0YS5ndSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcklkOlwiICsgZ2FpbkRhdGEuaWQgKyBcIiBzOlwiICsgZ2FpbkRhdGEucyk7XG4gICAgfVxuICAgIHByaXZhdGUgdHVybkRpYzogTWFwPG51bWJlciwgVGV4QWN0aW9uU0RbXT47XG4gICAgcHVibGljIFNob3dUdXJuSW5mbyh0bGlzdDogVGV4QWN0aW9uU0RbXSwgcG9vbE51bTogbnVtYmVyLCB1TGlzdDogVGV4VXNlckluZm9TRFtdKSB7XG5cbiAgICAgICAgdGhpcy51aV90dXJuQ29udGVudC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICB0aGlzLnVpX3R1cm5Db250ZW50LmhlaWdodCA9IDA7XG5cbiAgICAgICAgbGV0IGggPSB0aGlzLnVpX1Nob3dEb3duQ29udGVudC5oZWlnaHQgLSB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QubnVtSXRlbXMgKiAxMTU7XG4gICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCA9IGggPCAxMjIgPyAxMjIgOiBoO1xuICAgICAgICB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcblxuICAgICAgICBpZiAodGxpc3QgPT0gbnVsbCB8fCB0bGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZ286IGZhaXJ5Z3VpLkdPYmplY3QgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy50dXJuRGljID09IG51bGwpXG4gICAgICAgICAgICB0aGlzLnR1cm5EaWMgPSBuZXcgTWFwPG51bWJlciwgVGV4QWN0aW9uU0RbXT4oKTtcbiAgICAgICAgdGhpcy50dXJuRGljLmNsZWFyKCk7XG4gICAgICAgIHRsaXN0LmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50dXJuRGljLmhhcyh0ZW1wLnR1cm4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVybkRpYy5nZXQodGVtcC50dXJuKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0OiBUZXhBY3Rpb25TRFtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuRGljLnNldCh0ZW1wLnR1cm4sIGxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuRGljLmdldCh0ZW1wLnR1cm4pLnB1c2godGVtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3Q6IFRleEFjdGlvblNEW10gPSBbXTtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godGVtcCk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuRGljLnNldCh0ZW1wLnR1cm4sIGxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHR1cm5UeXBlOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICB0aGlzLnR1cm5EaWMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgdHVyblR5cGUucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHVyblR5cGUuc29ydCgoWDEsIFgyKSA9PiBYMSAtIFgyKTtcbiAgICAgICAgbGV0IGxhc3RUb3RhbERpemh1ID0gMDtcbiAgICAgICAgbGV0IGN1clR1cm5EaXpodSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0dXJuVHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHR1cm4gPSB0dXJuVHlwZVtpXTtcbiAgICAgICAgICAgIGlmICh0dXJuID09IDUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBsZXQgYUxpc3Q6IFRleEFjdGlvblNEW10gPSB0aGlzLnR1cm5EaWMuZ2V0KHR1cm4pO1xuICAgICAgICAgICAgYUxpc3QuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgICAgICAgICBjdXJUdXJuRGl6aHUgKz0gdGVtcC5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgY3VyVmFsdWUgPSAwO1xuICAgICAgICAgICAgaWYgKHR1cm4gPT0gMSkge1xuICAgICAgICAgICAgICAgIGN1clR1cm5EaXpodSArPSAodUxpc3QubGVuZ3RoICogdGhpcy5kaSk7XG4gICAgICAgICAgICAgICAgY3VyVmFsdWUgPSBjdXJUdXJuRGl6aHU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3VyVmFsdWUgPSBsYXN0VG90YWxEaXpodTtcbiAgICAgICAgICAgIGxhc3RUb3RhbERpemh1ICs9IGN1clR1cm5EaXpodTtcblxuICAgICAgICAgICAgZ28gPSB0aGlzLnVpX3R1cm5Db250ZW50LmFkZEl0ZW1Gcm9tUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy51aV90dXJuQ29udGVudC5oZWlnaHQgKz0gMTIyO1xuICAgICAgICAgICAgbGV0IGNvbXA6IE15Q2FyZFR1cm5DZWxsQ29tcCA9IGdvLm5vZGUuZ2V0Q29tcG9uZW50KE15Q2FyZFR1cm5DZWxsQ29tcCk7XG4gICAgICAgICAgICBpZiAoY29tcCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcCA9IGdvLm5vZGUuYWRkQ29tcG9uZW50KE15Q2FyZFR1cm5DZWxsQ29tcCk7XG4gICAgICAgICAgICAgICAgY29tcC5mZ3VpQ29tcG9uZW50ID0gZ28uYXNDb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wLmhpc3RvcnlDb21wID0gdGhpcztcbiAgICAgICAgICAgIGNvbXAuTXlTdGFydChhTGlzdCwgdGhpcy51c2VycywgdGhpcy5hZnRlckNhcmRzLCB0dXJuLCBjdXJWYWx1ZSwgdGhpcy5wYWdlU2QuYmFua2VycG9zLCB0aGlzLnBhZ2VTZC50SW5mbyk7XG4gICAgICAgICAgICBjdXJUdXJuRGl6aHUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09U2hvd1R1cm5JbmZvID09IHVpX3R1cm5Db250ZW50Lm51bUl0ZW1zOlwiICsgdGhpcy51aV90dXJuQ29udGVudC5udW1JdGVtcyArIFwiLCB1aV90dXJuQ29udGVudC5oZWlnaHQ6XCIgKyB0aGlzLnVpX3R1cm5Db250ZW50LmhlaWdodCk7XG4gICAgICAgIHRoaXMuU2hvd1Nob3dEb3duSW5mbyhsYXN0VG90YWxEaXpodSwgcG9vbE51bSk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93U2hvd0Rvd25JbmZvKHRvdGFsRGl6aHU6IG51bWJlciwgcG9vbE51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzaG93RG93blBsYXllcnM6IFRleFVzZXJJbmZvU0RbXSA9IFtdXG4gICAgICAgIHRoaXMucGFnZVNkLnRJbmZvLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5ndSAhPSAxKSB7XG4gICAgICAgICAgICAgICAgc2hvd0Rvd25QbGF5ZXJzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX1Nob3dEb3duVGl0bGUudmlzaWJsZSA9IChzaG93RG93blBsYXllcnMgIT0gbnVsbCAmJiBzaG93RG93blBsYXllcnMubGVuZ3RoID4gMCk7XG4gICAgICAgIGlmIChzaG93RG93blBsYXllcnMgPT0gbnVsbCB8fCBzaG93RG93blBsYXllcnMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgbGV0IHRpdGxlQ29tcDogVHVyblRpdGxlQ29tcCA9IHRoaXMudWlfU2hvd0Rvd25UaXRsZS5ub2RlLmdldENvbXBvbmVudChUdXJuVGl0bGVDb21wKTtcbiAgICAgICAgaWYgKHRpdGxlQ29tcCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aXRsZUNvbXAgPSB0aGlzLnVpX1Nob3dEb3duVGl0bGUubm9kZS5hZGRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgICAgICB0aXRsZUNvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfU2hvd0Rvd25UaXRsZVxuICAgICAgICAgICAgdGhpcy51aV9TaG93RG93blRpdGxlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZUNvbXAuTXlTdGFydDIoc2hvd0Rvd25QbGF5ZXJzLmxlbmd0aCwgdGhpcy5zaG93Q2FyZHMubGVuZ3RoID4gMCA/IHRoaXMuc2hvd0NhcmRzIDogdGhpcy5hZnRlckNhcmRzLCA1LCB0b3RhbERpemh1KTtcbiAgICAgICAgbGV0IHBhaXB1Q29tcDogVHVyblRpdGxlQ29tcCA9IHRoaXMudWlfcGFpcHUubm9kZS5nZXRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgIGlmIChwYWlwdUNvbXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFpcHVDb21wID0gdGhpcy51aV9wYWlwdS5ub2RlLmFkZENvbXBvbmVudChUdXJuVGl0bGVDb21wKTtcbiAgICAgICAgICAgIHBhaXB1Q29tcC5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9wYWlwdVxuICAgICAgICAgICAgdGhpcy51aV9wYWlwdS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcGFpcHVDb21wLk15U3RhcnQyKHRoaXMucGFnZVNkLnRJbmZvLmxlbmd0aCwgdGhpcy5zaG93Q2FyZHMubGVuZ3RoID4gMCA/IHRoaXMuc2hvd0NhcmRzIDogdGhpcy5hZnRlckNhcmRzLCAtMSwgdG90YWxEaXpodSk7XG5cblxuICAgICAgICB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgdGhpcy51aV9TaG93RG93bkNvbnRlbnQuaGVpZ2h0ID0gMTIyO1xuXG4gICAgICAgIGxldCBnbzogZmd1aS5HT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaG93RG93blBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdvID0gdGhpcy51aV9TaG93RG93bkluZm9MaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy51aV9TaG93RG93bkNvbnRlbnQuaGVpZ2h0ICs9IDE1NTtcbiAgICAgICAgICAgIHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5oZWlnaHQgKz0gMTU1O1xuICAgICAgICAgICAgdGhpcy5TZXRTaG93RG93bkNlbGxJbmZvKGdvLmFzQ29tLCBzaG93RG93blBsYXllcnNbaV0sIHRoaXMucGFnZVNkLm5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9vbE51bSAhPSAwKSB7XG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCArPSAxNTU7XG4gICAgICAgICAgICB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QuaGVpZ2h0ICs9IDE1NTtcbiAgICAgICAgICAgIGxldCBzaG93RG93blBhbmVsID0gZ28uYXNDb20uZ2V0Q2hpbGQoXCJzaG93RG93blBhbmVsXCIpLmFzR3JvdXA7XG4gICAgICAgICAgICBsZXQgaW5zUGFuZWwgPSBnby5hc0NvbS5nZXRDaGlsZChcImluc1Bvb2xQYW5lbFwiKS5hc0NvbTtcbiAgICAgICAgICAgIHNob3dEb3duUGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaW5zUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaW5zVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gaW5zUGFuZWwuZ2V0Q2hpbGQoXCJpbnNQb29sTnVtXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IGluc1RpdGxlOiBmZ3VpLkdUZXh0RmllbGQgPSBpbnNQYW5lbC5nZXRDaGlsZChcImluc1Bvb2x0ZXh0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgaW5zVGl0bGUudGV4dCA9IFwi5L+d6Zmp5rGg77yaXCJcblxuICAgICAgICAgICAgbGV0IGluc3Bvc2l0aXZlID0gcG9vbE51bSA+IDAgPyBcIitcIiA6IFwiXCI7XG4gICAgICAgICAgICBpbnNUZXh0LnRleHQgPSBpbnNwb3NpdGl2ZSArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAocG9vbE51bSk7XG4gICAgICAgICAgICBpbnNUZXh0LmNvbG9yID0gcG9vbE51bSA+PSAwID8gbmV3IGNjLkNvbG9yKDE4NywgNzMsIDczKSA6IG5ldyBjYy5Db2xvcig3MSwgMTkwLCAxMzgpOyAvL0NvbnN0LkNvbG9yTnVtUmVkIDogQ29uc3QuQ29sb3JOdW1HcmVlbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PVNob3dTaG93RG93bkluZm8gPT0gdWlfU2hvd0Rvd25JbmZvTGlzdC5udW1JdGVtczpcIiArIHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5udW1JdGVtcyArIFwiLCB1aV9TaG93RG93bkNvbnRlbnQuaGVpZ2h0OlwiICsgdGhpcy51aV9TaG93RG93bkNvbnRlbnQuaGVpZ2h0KTtcbiAgICAgICAgLy8gTGF5b3V0UmVidWlsZGVyLkZvcmNlUmVidWlsZExheW91dEltbWVkaWF0ZSh1aV9TaG93RG93bkluZm9MaXN0LmdhbWVPYmplY3QuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkpO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0U2hvd0Rvd25DZWxsSW5mbyhjZWxsSXRlbTogZmd1aS5HQ29tcG9uZW50LCBnYWluRGF0YTogVGV4VXNlckluZm9TRCwgbmc6IG51bWJlcikge1xuICAgICAgICBpZiAoZ2FpbkRhdGEgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHNob3dEb3duUGFuZWw6IGZndWkuR0dyb3VwID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJzaG93RG93blBhbmVsXCIpLmFzR3JvdXA7XG4gICAgICAgIGxldCBpbnNQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJpbnNQb29sUGFuZWxcIikuYXNDb207XG4gICAgICAgIHNob3dEb3duUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGluc1BhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJJbmZvOiBQSW5mb1NEID0gdGhpcy5HZXRVc2VyKGdhaW5EYXRhLmlkKTtcbiAgICAgICAgbGV0IHR4dE5hbWU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0TmFtZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dEdhaW46IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0R2FpblwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dFNwZWNpYWxDYXJkOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dFNwZWNpYWxDYXJkXCIpLmFzVGV4dEZpZWxkXG4gICAgICAgIHR4dFNwZWNpYWxDYXJkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHR4dEluc3VyYW5jZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRJbnN1cmFuY2VcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCBwb3NOYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImN1clBvc05hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VyUG9zTmFtZSA9PSBcIiwgVGV4YXNCYXNlLmdldFBsYXllclBvc1R5cGUoZ2FpbkRhdGEucG9zLCB0aGlzLnBhZ2VTZC5iYW5rZXJwb3MsIHRoaXMucGFnZVNkLnRJbmZvKSk7XG4gICAgICAgIHBvc05hbWUudGV4dCA9IFRleGFzQmFzZS5nZXRQbGF5ZXJQb3NUeXBlKGdhaW5EYXRhLnBvcywgdGhpcy5wYWdlU2QuYmFua2VycG9zLCB0aGlzLnBhZ2VTZC50SW5mbyk7XG4gICAgICAgIFVJVXRpbC5TZXRMaW1pdFR4dCh0eHROYW1lLCB1c2VySW5mby53TmFtZSwgNik7XG4gICAgICAgIGxldCBwb3NpdGl2ZSA9IGdhaW5EYXRhLndnID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgdHh0R2Fpbi50ZXh0ID0gcG9zaXRpdmUgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGdhaW5EYXRhLndnKTtcbiAgICAgICAgdHh0R2Fpbi5jb2xvciA9IGdhaW5EYXRhLndnID49IDAgPyBuZXcgY2MuQ29sb3IoMTg3LCA3MywgNzMpIDogbmV3IGNjLkNvbG9yKDcxLCAxOTAsIDEzOCkvLyBDb25zdC5Db2xvck51bVJlZCA6IENvbnN0LkNvbG9yTnVtR3JlZW47XG5cbiAgICAgICAgbGV0IGluc3Bvc2l0aXZlID0gZ2FpbkRhdGEuaW5zID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgdHh0SW5zdXJhbmNlLnRleHQgPSBnYWluRGF0YS5pbnMgPT0gMCA/IFwiXCIgOiBpbnNwb3NpdGl2ZSArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZ2FpbkRhdGEuaW5zKTtcbiAgICAgICAgdHh0SW5zdXJhbmNlLmNvbG9yID0gZ2FpbkRhdGEuaW5zID49IDAgPyBuZXcgY2MuQ29sb3IoMTg3LCA3MywgNzMpIDogbmV3IGNjLkNvbG9yKDcxLCAxOTAsIDEzOCk7Ly8gQ29uc3QuQ29sb3JOdW1SZWQgOiBDb25zdC5Db2xvck51bUdyZWVuO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0Rml2ZUNhcmRzID0gW107XG4gICAgICAgIGxldCBpc1FpUGFpID0gZ2FpbkRhdGEuZ3UgPT0gMTtcbiAgICAgICAgbGV0IGlzRGVhbENhcmQgPSBuZyA+IDE7Ly/mmK/lkKbliLDkuobmnIDlkI7liIbniYzpmLbmrrVcbiAgICAgICAgdGhpcy5EZWFsQ2FyZEJ5RGVmYXVsdChnYWluRGF0YSk7XG5cbiAgICAgICAgaWYgKCFpc1FpUGFpICYmIGlzRGVhbENhcmQpLy/msqHmnInlvIPniYzkuJTmnIk35byg54mM5pe277yM5pyA5aSn55qE5LqU5byg54mM57uE5ZCI55qE57G75Z6LXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2FyZHMubGVuZ3RoID49IDIgJiYgdGhpcy5hZnRlckNhcmRzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAgICAgdHh0U3BlY2lhbENhcmQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RGaXZlQ2FyZHMgPSBUZXhhc0Jhc2UuR2V0TWF4VHlwZUNhcmRzKFRleGFzQmFzZS5HZXRGaXZlRnJvbVNldmVuKHRoaXMuZmlyc3RDYXJkcywgdGhpcy5hZnRlckNhcmRzKSk7XG4gICAgICAgICAgICAgICAgLy8gdHh0U3BlY2lhbENhcmQudGV4dCA9IFRleGFzQmFzZS5HZXRUZXhhc05hbWUodGhpcy5zZWxlY3RGaXZlQ2FyZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc1dISVRFID0gZmFsc2U7XG4gICAgICAgIGxldCBjYXJkOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgICAgICBsZXQgaXNTZWxmID0gZ2FpbkRhdGEuaWQgPT0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG5cbiAgICAgICAgLy9EZWJ1Z0VYLkxvZ0UoXCJjb3VudDtcIiArIHNob3dDYXJkQ291bnQgKyBcIiBnYWluZGF0YS5zOlwiICsgZ2FpbkRhdGEucyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKS8v6aaW54mM5pi+56S6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhcmQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImNhcmRcIiArIChpICsgMSkpLmFzTG9hZGVyO1xuICAgICAgICAgICAgbGV0IGNhcmRJZCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+IGkpXG4gICAgICAgICAgICAgICAgY2FyZElkID0gdGhpcy5maXJzdENhcmRzW2ldO1xuXG4gICAgICAgICAgICBjYXJkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChpc1FpUGFpICYmICFpc1NlbGYpIHx8ICghaXNRaVBhaSAmJiAhaXNEZWFsQ2FyZCkpLy/kuI3mmK/oh6rlt7HnmoTlvIPniYznjqnlrrbkuI3mmL7npLrpppbniYws5pyq5q+U54mM5Lmf5LiN5pi+56S65Yir5Lq655qE6aaW54mMXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FyZElkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRGVidWdFWC5Mb2dFKFwidXNlckluZm8ud05hbWU6XCIgKyB1c2VySW5mby53TmFtZSArIFwiIGNhcmRJZDogXCIgKyBpICsgXCIgOlwiICsgY2FyZElkKTtcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoY2FyZCwgY2FyZElkID09IDAgPyBcIjAwMVwiIDogY2FyZElkICsgXCJfMVwiLCBcIkxvYmJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUWlQYWkpLy/mnKrlvIPniYznu5PnrpfmnInniYzlnovnmoTml7blgJnmnKrpgInkuK3nmoTniYzlj5jngbAs5byD54mM5omA5pyJ54mM572u54GwXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpKSBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspLy/ns7vnu5/niYzmmL7npLpcbiAgICAgICAge1xuICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAzKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgY2FyZElkID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID4gaSlcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSB0aGlzLmFmdGVyQ2FyZHNbaV07XG5cbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IChjYXJkSWQgPiAwKTtcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoY2FyZCwgY2FyZElkID09IDAgPyBcIjAwMVwiIDogY2FyZElkICsgXCJfMVwiLCBcIkxvYmJ5XCIpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUWlQYWkpLy/mnKrlvIPniYznu5PnrpfmnInniYzlnovnmoTml7blgJnmnKrpgInkuK3nmoTniYzlj5jngbAs5byD54mM6aaW54mM572u54GwXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpKSBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+ayoeacieW8g+eJjO+8jOayoeacieeZveiJsueJjO+8jOWImeWFqOmDqOS4uueZvVxuICAgICAgICBpZiAoIWlzUWlQYWkgJiYgIWlzV0hJVEUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAxKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaXNTaG93UGFpKHVzZXJMaXN0OiBUZXhVc2VySW5mb1NEW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzU2hvdyA9IGZhbHNlO1xuXG4gICAgICAgIHVzZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zdCA9PSAxICYmIGl0ZW0uaWQgPT0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5mc2hvdyA9PSB0cnVlICYmIGl0ZW0uaWQgPT0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpc1Nob3c7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1Nob3dQYWlGb3JDYXJkSW5kZXgoY2FyZElkOiBudW1iZXIsIHNob3dDYXJkSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FyZElkID4gMCAmJiBzaG93Q2FyZElkICE9IG51bGwgJiYgc2hvd0NhcmRJZCAhPSBcIlwiICYmIHNob3dDYXJkSWQuaW5kZXhPZihjYXJkSWQudG9TdHJpbmcoKSkgPj0gMDtcbiAgICB9XG5cbiAgICAvLzEgOuWxleekuuengOeJjCAwOiDkuI3lsZXnpLpcbiAgICBwcml2YXRlIGlzU2hvd1BhaUZvckNhcmRJbmRleGRlbHRlKGluZGV4OiBudW1iZXIsIHNob3dDYXJkSWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc2lnbiA9IHNob3dDYXJkSWQgLyAoaW5kZXggPD0gMCA/IDEgOiAoaW5kZXggKiAxMCkpO1xuICAgICAgICByZXR1cm4gKHNpZ24gJSAxMCkgPT0gMTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgaXNGaXJzdENhcmQoY2FyZElkOiBudW1iZXIsIGZpcnN0TGlzdDogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpcnN0TGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaXJzdExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZElkID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTZWxlY3RDYXJkKGNhcmRJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBiID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEZpdmVDYXJkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkSWQgPT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBiID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBVcGRhdGVEYXRhX3NjKGRhdGE6IHNjX2dldHNjb2xsZWN0YnlpZF90ZXgpIHtcbiAgICAgICAgdGhpcy5VcGRhdGVEYXRhKGRhdGEudWxpc3QsIFtkYXRhLnRpbmZvXSwgZGF0YS50bnVtLCBkYXRhLmJhc2VyYXRlLCBkYXRhLnNob3dDYXJkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlRGF0YSh1bGlzdDogUEluZm9TRFtdLCB0dWxpc3Q6IFRleFRJbmZvU0RbXSwgdGFibGVJZDogbnVtYmVyLCBkaXpodTogbnVtYmVyLCBTaG93Q2FyZDogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy50YWJsZUlkID0gdGFibGVJZDtcbiAgICAgICAgdGhpcy5kaSA9IGRpemh1O1xuICAgICAgICB0aGlzLnNob3dDYXJkID0gU2hvd0NhcmQ7XG4gICAgICAgIHRoaXMudWlfdHh0UGFnZUluZGV4LnRleHQgPSAwICsgXCIvXCIgKyAwO1xuXG4gICAgICAgIHRoaXMudXNlcnMgPSB1bGlzdDtcbiAgICAgICAgdGhpcy5oaXN0b3J5TGlzdCA9IHR1bGlzdDtcbiAgICAgICAgdGhpcy5jdXJQYWdlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5tYXhQYWdlQ291bnQgPSB0aGlzLmhpc3RvcnlMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJTZWxlY3RQYWdlLnZpc2libGUgPSB0aGlzLm1heFBhZ2VDb3VudCA+IDE7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS5taW4gPSAxO1xuICAgICAgICB0aGlzLnVpX3NsaWRlclNlbGVjdFBhZ2UubWF4ID0gdGhpcy5tYXhQYWdlQ291bnQgPiAxID8gdGhpcy5tYXhQYWdlQ291bnQgOiAxMDA7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS52YWx1ZSA9IDE7XG4gICAgICAgIHRoaXMuU2V0U2xpZGVyVmFsdWVCeUluZGV4KDEpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgR2V0VXNlcihpZDogbnVtYmVyKTogUEluZm9TRCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZCh1c2VyID0+IHsgcmV0dXJuIHVzZXIudWlkID09IGlkIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgR2V0VXNlclNob3dDYXJkKGdhaW5EYXRhOiBUZXhVc2VySW5mb1NEKSB7XG4gICAgICAgIGlmIChnYWluRGF0YS5pZCA9PSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCAmJiBnYWluRGF0YS5vd25jICE9IG51bGwgJiYgZ2FpbkRhdGEub3duYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1ICYmIGkgPCBnYWluRGF0YS5vd25jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FyZHMucHVzaChnYWluRGF0YS5vd25jW2ldKTsvL+eOqeWutuafpeeci+S9meeJjOWQjueahOWFrOeJjFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIERlYWxDYXJkQnlEZWZhdWx0KGdhaW5EYXRhOiBUZXhVc2VySW5mb1NEKSB7XG4gICAgICAgIHRoaXMuZmlyc3RDYXJkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIgJiYgaSA8IGdhaW5EYXRhLnAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDYXJkcy5wdXNoKGdhaW5EYXRhLnBbaV0pOy8v6aaW54mMXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyQ2FyZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1ICYmIGkgPCB0aGlzLnBhZ2VTZC5jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQ2FyZHMucHVzaCh0aGlzLnBhZ2VTZC5jW2ldKTsvL+ezu+e7n+eJjFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nirbmgIEg5byD54mMMTsg5byA54mMMjsg5pyq5byD54mM5pyq5byA54mMMzsg5byD54mM5YmN5Lik5byg54mM5Y+q5pi+56S66IOM6Z2iXG4gICAgcHVibGljIEdldFVzZXJBY3Rpb25TdHJpbmcodHlwZTogbnVtYmVyLCBnaXZldXA6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGdpdmV1cCA9PSAxKSB7XG4gICAgICAgICAgICBzdHIgPSBcIuW8g+eJjFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBcIi0xXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBcIuW8gOeJjFwiXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHB1YmxpYyBDbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgbnVtID0gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZTtcbiAgICAgICAgbnVtID0gdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgSGlkZUNoaWxkcmVuKG5vZGU6Y2MuTm9kZSl7XG5cbiAgICAvLyB9XG5cblxufSJdfQ==