"use strict";
cc._RF.push(module, 'f802fffaj5Cnp1W7ZYZPfjf', 'TexasHistoryComp');
// Games/texas/script/View/TexasHistoryComp.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var Texas_1 = require("../Model/Texas");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var CardRedbetComp_1 = require("./CardRedbetComp");
var TurnCellComp_1 = require("./TurnCellComp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasHistoryComp = /** @class */ (function (_super) {
    __extends(TexasHistoryComp, _super);
    function TexasHistoryComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tableId = 0;
        _this.ui_btnShare = null;
        _this.ui_btnCollectHist = null;
        _this.ui_collectNumText = null;
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
        _this.ui_btnPageLast = null;
        _this.ui_btnPageFirst = null;
        _this.ui_btnPageNext = null;
        _this.ui_btnPagePre = null;
        _this.ui_txtPageIndex = null;
        _this.ui_texTextTitle = null;
        _this.ui_HisInfoTitleText = null;
        _this.ui_historyGroup = null;
        _this.ui_btnJubao = null; //举报
        _this.ui_jubaoUsersPanel = null; //举报玩家界面
        _this.ui_btn_jubaoClose = null;
        _this.ui_listJubaoUsers = null;
        _this.ui_btn_jubaoOK = null;
        _this.ui_inputJubao = null; //举报原因
        _this.ui_txtJackpotPool = null;
        _this.isGaming = true;
        _this.jubaoUsers = []; //举报玩家
        _this.onLoadEnd = false;
        return _this;
        // public HideChildren(node:cc.Node){
        // }
    }
    TexasHistoryComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    TexasHistoryComp.prototype.MyStart = function (isGaming) {
        this.mystart = true;
        this.isGaming = isGaming;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    TexasHistoryComp.prototype.AutoSetGoProperty = function () { };
    TexasHistoryComp.prototype.MyStartEx = function () {
        if (this.ui_btnShare == null) {
            _super.prototype.AutoSetGoProperty.call(this);
            this.InitEvents();
        }
        if (this.isGaming) {
            if (this.node.parent.name.indexOf("history") >= 0) {
                this.node.parent.active = true;
            }
        }
        this.ui_btnShare.visible = this.isGaming;
        this.Init();
        this.Hide();
    };
    TexasHistoryComp.prototype.InitLanguage = function () {
        this.ui_texTextTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1141); //牌局回顾
        this.ui_HisInfoTitleText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1145); //详细过程
    };
    TexasHistoryComp.prototype.Init = function () {
        this.firstCards = [];
        this.afterCards = [];
        this.showCards = [];
        this.selectFiveCards = [];
        // this.ui_btnClose_history.visible = false;
        this.ui_txtPageIndex.text = 0 + "/" + 0;
        this.Hide();
    };
    TexasHistoryComp.prototype.InitEvents = function () {
        var _this = this;
        if (this.isGaming) {
            this.ui_btnClose_history.onClick(function () {
                if (_this.node.getNumberOfRunningActions() > 0)
                    return;
                // this.ui_btnClose_history.visible = false;
                _this.node.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(1080, _this.node.y)), cc.callFunc(function () {
                    _this.Hide();
                })));
            });
        }
        else {
            this.ui_btnClose_history.onClick(function () {
                // this.ui_btnClose_history.visible = false;
                _this.Hide();
            });
        }
        this.ui_sliderSelectPage.on(fgui.Event.STATUS_CHANGED, function (progress) {
            if (progress.value == 0)
                return; //打开的时候会默认将滑动条的值滑到0，这时候会先刷新一次第一页的数据，然后再刷新当前maxpage的值
            var pageIndex = UIUtil_1.UIUtil.NumberToInt(progress.value); //this.Clamp(UIUtil.NumberToInt(Math.round(progress.value * this.maxPageCount)), 1, this.maxPageCount);
            // console.log("progress: " + progress.value + " curpage:" + this.curPageIndex +" , pageIndex:"+pageIndex);
            if (pageIndex != _this.curPageIndex) {
                _this.SetCurPageIndex(pageIndex);
            }
        });
        this.ui_btnPageLast.onClick(function () {
            _this.SetSliderValueByIndex(_this.maxPageCount);
        });
        this.ui_btnPageFirst.onClick(function () {
            _this.SetSliderValueByIndex(1);
        });
        this.ui_btnPageNext.onClick(function () {
            _this.SetSliderValueByIndex(_this.curPageIndex + 1);
        });
        this.ui_btnPagePre.onClick(function () {
            _this.SetSliderValueByIndex(_this.curPageIndex - 1);
        });
        this.ui_btnShare.onClick(function () {
            console.log("share history room number");
            // ShareSdkManager.Singleton.ShareTableNumber(this.tableId);//FixMe
        });
        this.ui_btnCollectHist.onClick(function () {
            if (_this.historyList == null || _this.historyList.length <= 0 || _this.pageSd == null)
                return;
            F_TexasViewCtr_1.default.instance.cs_texascollect_tex(_this.pageSd.IsSava ? 1 : 0, _this.pageSd.infoId);
        });
        this.ui_btnJubao.onClick(function () {
            if (_this.users.length == 0)
                return;
            if (!_this.pageSd) {
                F_TexasViewCtr_1.default.instance.view.commonView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180035));
                return;
            }
            F_TexasViewCtr_1.default.instance.Model.jubaoType = 1;
            _this.ui_jubaoUsersPanel.visible = true;
            _this.LoadJubaoUsers();
        });
        this.ui_btn_jubaoClose.onClick(function () {
            _this.ui_jubaoUsersPanel.visible = false;
        });
        this.ui_btn_jubaoOK.onClick(function () {
            _this.PostReportPra();
        });
    };
    //加载举报玩家
    TexasHistoryComp.prototype.LoadJubaoUsers = function () {
        var _this = this;
        this.jubaoUsers = [];
        this.ui_listJubaoUsers.removeChildrenToPool();
        var isExist = false; //是否参与这局
        var user = null;
        var _loop_1 = function () {
            isExist = false;
            for (var j = 0; j < this_1.pageSd.tInfo.length; j++) {
                if (this_1.users[i].uid == this_1.pageSd.tInfo[j].id) {
                    isExist = true;
                    user = this_1.users[i];
                    break;
                }
            }
            if (isExist && user.uid != F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
                var go_1 = this_1.ui_listJubaoUsers.addItemFromPool();
                UIUtil_1.UIUtil.loadImage(go_1.getChild("headimg").asCom.getChild("headImage").asLoader, user.wicon);
                go_1.getChild("nickname").asTextField.text = user.wName;
                go_1.getController("isSelect").setSelectedIndex(0);
                go_1.getChild("button").asButton.clearClick();
                uid = 0;
                uid = user.uid;
                go_1.name = uid + "";
                go_1.getChild("button").asButton.clearClick();
                go_1.getChild("button").asButton.onClick(function () {
                    _this.selectJubaoUser(go_1);
                });
            }
        };
        var this_1 = this, uid;
        for (var i = 0; i < this.users.length; i++) {
            _loop_1();
        }
    };
    TexasHistoryComp.prototype.selectJubaoUser = function (go) {
        var isslect = go.getController("isSelect").selectedIndex;
        go.getController("isSelect").setSelectedIndex(isslect == 0 ? 1 : 0);
        if (isslect == 0 && this.jubaoUsers.indexOf(Number.parseInt(go.name)) < 0) {
            this.jubaoUsers.push(Number.parseInt(go.name));
        }
        else if (this.jubaoUsers.indexOf(Number.parseInt(go.name)) >= 0) {
            this.jubaoUsers.splice(this.jubaoUsers.indexOf(Number.parseInt(go.name)), 1);
        }
        // console.error("举报玩家：" + this.jubaoUsers);
    };
    TexasHistoryComp.prototype.PostReportPra = function () {
        // if (this.jubaoUsers.length == 0) {
        //     F_TexasViewCtr.instance.PostReportPra(this.curPageIndex, 0, this.ui_inputJubao.text, "", this.getJubaoGold());
        // } else {
        //     for (var i = 0; i < this.jubaoUsers.length; i++) {
        //         console.error("举报多人：index = " + (this.jubaoUsers.length - i - 1));
        //         F_TexasViewCtr.instance.PostReportPra(this.curPageIndex, this.jubaoUsers[i], this.ui_inputJubao.text, "", this.getJubaoGold(), (this.jubaoUsers.length - i - 1));
        //     }
        // }
        var _this = this;
        console.log("举报玩家 this.jubaoUsers ：", this.jubaoUsers.length);
        if (this.jubaoUsers.length <= 0) {
            F_TexasViewCtr_1.default.instance.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180034));
        }
        else {
            this.ui_jubaoUsersPanel.visible = false;
            F_TexasViewCtr_1.default.instance.view.tipView.ShowTip("您将" + TexasLanguage_1.TexasLanguage.getLanguageById(2092) + this.getJubaoGold() + TexasLanguage_1.TexasLanguage.getLanguageById(180029) + ",是否" + TexasLanguage_1.TexasLanguage.getLanguageById(180019) + "？", function () {
                var userid_Str = "";
                for (var i = 0; i < _this.jubaoUsers.length; i++) {
                    if (_this.jubaoUsers.length - 1 == i) {
                        userid_Str = userid_Str + _this.jubaoUsers[i];
                    }
                    else {
                        userid_Str = userid_Str + _this.jubaoUsers[i] + ",";
                    }
                }
                console.log("举报玩家：", userid_Str);
                F_TexasViewCtr_1.default.instance.PostReportPra(_this.curPageIndex, userid_Str, _this.ui_inputJubao.text, "", _this.getJubaoGold());
            }, function () {
                _this.ui_jubaoUsersPanel.visible = true;
            }, TexasLanguage_1.TexasLanguage.getLanguageById(180019), TexasLanguage_1.TexasLanguage.getLanguageById(1393)); //"举报" ,取消 
        }
    };
    //举报次数
    TexasHistoryComp.prototype.getJubaoGold = function () {
        console.error("举报次数：" + F_TexasViewCtr_1.default.instance.Model.mPlayerModel.recount);
        var num = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.recount;
        var gold = 0;
        if (num == 0) {
            gold = 10;
        }
        else if (num == 1) {
            gold = 20;
        }
        else {
            gold = 40;
        }
        return gold;
    };
    TexasHistoryComp.prototype.SetSliderValueByIndex = function (pageIndex) {
        this.ui_sliderSelectPage.value = pageIndex; //this.maxPageCount > 0 ? pageIndex / this.maxPageCount : 0;
        this.SetCurPageIndex(pageIndex);
    };
    TexasHistoryComp.prototype.SetCurPageIndex = function (pageIndex) {
        // this.Hide();
        if (pageIndex > this.maxPageCount || pageIndex <= 0 || this.curPageIndex == pageIndex || this.maxPageCount <= 0) {
            return;
        }
        this.curPageIndex = pageIndex;
        // console.log("curPageIndex:" + this.curPageIndex + " maxPageCount:" + this.maxPageCount);
        var enableFirst = pageIndex > 1 && this.maxPageCount > 1;
        this.SetButtonEnable(this.ui_btnPageFirst, enableFirst);
        this.SetButtonEnable(this.ui_btnPagePre, enableFirst);
        var enableLast = pageIndex < this.maxPageCount && this.maxPageCount > 1;
        this.SetButtonEnable(this.ui_btnPageLast, enableLast);
        this.SetButtonEnable(this.ui_btnPageNext, enableLast);
        this.ui_txtPageIndex.text = this.curPageIndex + "/" + this.maxPageCount;
        console.log("txt:" + this.ui_txtPageIndex.text);
        this.pageSd = this.historyList[this.curPageIndex - 1];
        // let positive = this.pageSd.j >= 0 ? "+" : "";
        // console.error("txtJackpotPool = " + this.pageSd.j);
        this.ui_txtJackpotPool.text = Texas_1.Texas.formatNumber100(this.pageSd.j) + "";
        this.ui_txtJackpotPool.visible = true;
        this.ShowHistoryInfo(this.pageSd);
    };
    TexasHistoryComp.prototype.SetButtonEnable = function (btn, isEnable, btnColor, txtColor) {
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
    TexasHistoryComp.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.InitLanguage();
        this.ui_btnClose_history.visible = true;
    };
    TexasHistoryComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    TexasHistoryComp.prototype.ShowHistoryInfo = function (data) {
        this.ui_ListContent.visible = (data.tInfo != null && data.tInfo.length > 0);
        this.ShowList(data.tInfo, data.ipool, data.ng);
        // LayoutRebuilder.ForceRebuildLayoutImmediate(this.ui_ListContent.gameObject.GetComponent<RectTransform>());
        this.ui_HisInfoTitleTextBg.visible = (data.tlist != null && data.tlist.length > 0);
        this.ui_turnContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        this.ui_ShowDownContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        this.Show();
        this.ShowTurnInfo(data.tlist, data.ipool, data.tInfo);
        //Debug.LogError("牌局详情结果       +++++" + data.tlist.Count);        
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_turnContent.gameObject.GetComponent<RectTransform>());
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_ShowDownContent.gameObject.GetComponent<RectTransform>());
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_HistoryContent.gameObject.GetComponent<RectTransform>());
        // console.log("牌局详情结果       +++++" + data.IsSava);
        this.ui_btnCollectHist.getController("isOn").setSelectedIndex(data.IsSava ? 1 : 0);
        // UIUtil.loadImage(this.ui_btnCollectHist.getChild("Image").asLoader, data.IsSava ? "collect_s" : "collect", "Texas");
    };
    TexasHistoryComp.prototype.ShowList = function (tList, poolNum, ng) {
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
            insTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1144); //保险池：
            var inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + Texas_1.Texas.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? cc.Color.RED : cc.Color.GREEN;
        }
        console.log("======ShowList == ui_ListContent.numItems:" + this.ui_ListContent.numItems + ", ui_ListContent.height:" + this.ui_ListContent.height);
    };
    // 状态 弃牌1; 开牌2; 未弃牌未开牌3; 弃牌前两张牌只显示背面
    TexasHistoryComp.prototype.SetUserCellInfo = function (cellItem, gainData, isShowPai, ng) {
        var infoPanel = cellItem.getChild("historyCellPanel").asCom;
        var insPanel = cellItem.getChild("insPoolPanel").asCom;
        infoPanel.visible = true;
        insPanel.visible = false;
        var userInfo = this.GetUser(gainData.id);
        if (userInfo == null)
            console.log("userInfo is null , gainData.id=" + gainData.id);
        var headImage = cellItem.getChild("UserHead").asCom.getChild("headImage").asLoader;
        var txtName = cellItem.getChild("txtName").asTextField;
        var txtGamble = cellItem.getChild("txtGamble").asTextField;
        var txtGain = cellItem.getChild("txtGain").asTextField;
        var txtSpecialCard = cellItem.getChild("txtSpecialCard").asTextField;
        txtSpecialCard.visible = false;
        var statusbg = cellItem.getChild("statusbg").asLoader;
        var txtStatus = cellItem.getChild("txtStatus").asTextField;
        var txtInsurance = cellItem.getChild("txtInsurance").asTextField;
        var posName = cellItem.getChild("txtPos").asTextField;
        posName.text = Texas_1.Texas.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil_1.UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);
        UIUtil_1.UIUtil.loadImage(headImage, userInfo.wicon);
        txtGamble.text = TexasLanguage_1.TexasLanguage.getLanguageById(1423) + ": " + Texas_1.Texas.formatNumber100(gainData.g); //下注
        var positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + Texas_1.Texas.formatNumber100(gainData.wg);
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
                this.selectFiveCards = Texas_1.Texas.GetMaxTypeCards(Texas_1.Texas.GetFiveFromSeven(this.firstCards, this.afterCards));
                txtSpecialCard.text = Texas_1.Texas.GetTexasName(this.selectFiveCards);
            }
        }
        var isWHITE = false;
        var cardEye = null;
        var card = null;
        var isSelf = gainData.id == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid;
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
            if (((isQiPai && !isSelf) || (!isQiPai && !isDealCard && !isSelf)) && this.showCard != 1 && !isShowPai) //不是自己的弃牌玩家不显示首牌,未比牌也不显示别人的首牌
             {
                cardId = 0;
            }
            //Debug.Log("userInfo.wName:" + userInfo.wName + " cardId: " + i + " :" + cardId);
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? CardRedbetComp_1.default.cardTypeName : cardId + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
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
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? CardRedbetComp_1.default.cardTypeName : cardId + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
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
    TexasHistoryComp.prototype.ShowTurnInfo = function (tlist, poolNum, uList) {
        var _this = this;
        // ToolsEx.HideChildren(ui_turnContent);
        // ToolsEx.HideChildren(ui_ShowDownInfoList);
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
            if (turn == UIUtil_1.UIUtil.NumberToInt(Texas_1.TexasTurnEnum.TrunCompare))
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
            var comp = go.node.getComponent(TurnCellComp_1.TurnCellComp);
            if (comp == null) {
                comp = go.node.addComponent(TurnCellComp_1.TurnCellComp);
                comp.fguiComponent = go.asCom;
            }
            comp.historyComp = this;
            comp.MyStart(aList, this.users, this.afterCards, turn, curValue, this.pageSd.bankerpos, this.pageSd.tInfo);
            curTurnDizhu = 0;
        }
        console.log("======ShowTurnInfo == ui_turnContent.numItems:" + this.ui_turnContent.numItems + ", ui_turnContent.height:" + this.ui_turnContent.height);
        this.ShowShowDownInfo(lastTotalDizhu, poolNum);
    };
    TexasHistoryComp.prototype.ShowShowDownInfo = function (totalDizhu, poolNum) {
        var showDownPlayers = [];
        this.pageSd.tInfo.forEach(function (item) {
            if (item.gu != 1) {
                showDownPlayers.push(item);
            }
        });
        this.ui_ShowDownTitle.visible = (showDownPlayers != null && showDownPlayers.length > 0);
        if (showDownPlayers == null || showDownPlayers.length == 0)
            return;
        var titleComp = this.ui_ShowDownTitle.node.getComponent(TurnCellComp_1.TurnTitleComp);
        if (titleComp == null) {
            titleComp = this.ui_ShowDownTitle.node.addComponent(TurnCellComp_1.TurnTitleComp);
            titleComp.fguiComponent = this.ui_ShowDownTitle;
            this.ui_ShowDownTitle.node.active = true;
        }
        titleComp.MyStart2(showDownPlayers.length, this.showCards.length > 0 ? this.showCards : this.afterCards, 5, totalDizhu);
        var paipuComp = this.ui_paipu.node.getComponent(TurnCellComp_1.TurnTitleComp);
        if (paipuComp == null) {
            paipuComp = this.ui_paipu.node.addComponent(TurnCellComp_1.TurnTitleComp);
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
            insTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1144); //保险池：
            var inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + Texas_1.Texas.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); //Const.ColorNumRed : Const.ColorNumGreen;
        }
        console.log("======ShowShowDownInfo == ui_ShowDownInfoList.numItems:" + this.ui_ShowDownInfoList.numItems + ", ui_ShowDownContent.height:" + this.ui_ShowDownContent.height);
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_ShowDownInfoList.gameObject.GetComponent<RectTransform>());
    };
    TexasHistoryComp.prototype.SetShowDownCellInfo = function (cellItem, gainData, ng) {
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
        posName.text = Texas_1.Texas.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil_1.UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);
        var positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + Texas_1.Texas.formatNumber100(gainData.wg);
        txtGain.color = gainData.wg >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); // Const.ColorNumRed : Const.ColorNumGreen;
        var inspositive = gainData.ins > 0 ? "+" : "";
        txtInsurance.text = gainData.ins == 0 ? "" : inspositive + Texas_1.Texas.formatNumber100(gainData.ins);
        txtInsurance.color = gainData.ins >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); // Const.ColorNumRed : Const.ColorNumGreen;
        this.selectFiveCards = [];
        var isQiPai = gainData.gu == 1;
        var isDealCard = ng > 1; //是否到了最后分牌阶段
        this.DealCardByDefault(gainData);
        if (!isQiPai && isDealCard) //没有弃牌且有7张牌时，最大的五张牌组合的类型
         {
            if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                txtSpecialCard.visible = true;
                this.selectFiveCards = Texas_1.Texas.GetMaxTypeCards(Texas_1.Texas.GetFiveFromSeven(this.firstCards, this.afterCards));
                txtSpecialCard.text = Texas_1.Texas.GetTexasName(this.selectFiveCards);
            }
        }
        var isWHITE = false;
        var card = null;
        var isSelf = gainData.id == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid;
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
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? CardRedbetComp_1.default.cardTypeName : cardId + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
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
            UIUtil_1.UIUtil.loadImage(card, cardId == 0 ? CardRedbetComp_1.default.cardTypeName : cardId + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
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
    TexasHistoryComp.prototype.isShowPai = function (userList) {
        var isShow = false;
        userList.forEach(function (item) {
            if (item.st == 1 && item.id == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }
            if (item.fshow == true && item.id == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }
        });
        return isShow;
    };
    TexasHistoryComp.prototype.isShowPaiForCardIndex = function (cardId, showCardId) {
        return cardId > 0 && showCardId != null && showCardId != "" && showCardId.indexOf(cardId.toString()) >= 0;
    };
    //1 :展示秀牌 0: 不展示
    TexasHistoryComp.prototype.isShowPaiForCardIndexdelte = function (index, showCardId) {
        var sign = showCardId / (index <= 0 ? 1 : (index * 10));
        return (sign % 10) == 1;
    };
    TexasHistoryComp.prototype.isFirstCard = function (cardId, firstList) {
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
    TexasHistoryComp.prototype.isSelectCard = function (cardId) {
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
    TexasHistoryComp.prototype.GetShowCardCount = function (type) {
        var count = 0;
        switch (type) {
            case Texas_1.TexasTurnEnum.Init:
                count = 0;
                break;
            case Texas_1.TexasTurnEnum.Turn1_0:
                count = 2;
                break;
            case Texas_1.TexasTurnEnum.Turn2_3:
                count = 5;
                break;
            case Texas_1.TexasTurnEnum.Turn3_4:
                count = 6;
                break;
            case Texas_1.TexasTurnEnum.Turn4_5:
                count = 7;
                break;
            case Texas_1.TexasTurnEnum.TrunCompare:
                count = 7;
                break;
            default:
                break;
        }
        return count;
    };
    TexasHistoryComp.prototype.UpdateData_sc = function (data) {
        this.UpdateData(data.ulist, data.tulist, data.tableId, data.bg, data.showCard, data.savaNum, data.maxSnum);
    };
    TexasHistoryComp.prototype.UpdateData = function (ulist, tulist, tableId, dizhu, ShowCard, collectNum, collectMax) {
        if (collectNum === void 0) { collectNum = 0; }
        if (collectMax === void 0) { collectMax = 0; }
        // UIUtil.loadImage(this.ui_btnCollectHist.getChild("Image").asLoader, "collect", "Texas");
        this.ui_btnCollectHist.getController("isOn").setSelectedIndex(0);
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
        this.maxCollect = collectMax;
        this.SetSliderValueByIndex(this.maxPageCount);
        this.ui_collectNumText.text = collectNum + "/" + collectMax;
        //    if(this.maxPageCount > 0) this.SetCurPageIndex(1);
    };
    TexasHistoryComp.prototype.UpdateCollectData = function (savaNum, infoId, IsSava) {
        var temp = this.historyList.find(function (item) { return item.infoId == infoId; });
        temp.IsSava = IsSava;
        this.ui_collectNumText.text = savaNum + "/" + this.maxCollect;
        this.ui_btnCollectHist.getController("isOn").setSelectedIndex(IsSava ? 1 : 0);
        // UIUtil.loadImage(this.ui_btnCollectHist.getChild("Image").asLoader, IsSava ? "collect_s" : "collect", "Texas");
    };
    TexasHistoryComp.prototype.UpdateLobbyData = function (ulist, tulist, d, ShowCard) {
        this.UpdateData(ulist, tulist, 0, d, ShowCard);
    };
    // private void Clear()
    // {
    // }
    TexasHistoryComp.prototype.GetUser = function (id) {
        if (this.users == null) {
            return null;
        }
        return this.users.find(function (user) { return user.uid == id; });
    };
    TexasHistoryComp.prototype.GetUserShowCard = function (gainData) {
        if (gainData.id == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid && gainData.ownc != null && gainData.ownc.length > 0) {
            this.showCards = [];
            for (var i = 0; i < 5 && i < gainData.ownc.length; i++) {
                this.showCards.push(gainData.ownc[i]); //玩家查看余牌后的公牌
            }
        }
    };
    TexasHistoryComp.prototype.DealCardByDefault = function (gainData) {
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
    TexasHistoryComp.prototype.GetUserActionString = function (type, giveup) {
        var str = "";
        if (giveup == 1) {
            str = TexasLanguage_1.TexasLanguage.getLanguageById(1395); //弃牌
        }
        else {
            switch (type) {
                case Texas_1.TexasTurnEnum.Init:
                    str = "-1";
                    break;
                case Texas_1.TexasTurnEnum.Turn1_0:
                    break;
                case Texas_1.TexasTurnEnum.Turn2_3:
                    break;
                case Texas_1.TexasTurnEnum.Turn3_4:
                    break;
                case Texas_1.TexasTurnEnum.Turn4_5:
                    break;
                case Texas_1.TexasTurnEnum.TrunCompare:
                    str = TexasLanguage_1.TexasLanguage.getLanguageById(1389); //开牌
                    break;
                default:
                    str = "default";
                    break;
            }
        }
        return str;
    };
    TexasHistoryComp.prototype.Clamp = function (value, min, max) {
        var num = 0;
        num = value < min ? min : value;
        num = value > max ? max : value;
        return num;
    };
    TexasHistoryComp = __decorate([
        ccclass
    ], TexasHistoryComp);
    return TexasHistoryComp;
}(ViewBase_1.default));
exports.default = TexasHistoryComp;

cc._RF.pop();