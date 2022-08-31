
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasHistoryComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzSGlzdG9yeUNvbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDJEQUF1RTtBQUN2RSwyREFBc0Q7QUFDdEQsd0NBQXNEO0FBQ3RELHdEQUF1RDtBQUV2RCxtREFBOEM7QUFDOUMsK0NBQTZEO0FBR3ZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFRO0lBQXREO1FBQUEscUVBNjZCQztRQTU2QlUsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUdaLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUNqQyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLHVCQUFpQixHQUFvQixJQUFJLENBQUM7UUFDMUMseUJBQW1CLEdBQWlCLElBQUksQ0FBQztRQUN6QyxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyxvQkFBYyxHQUFlLElBQUksQ0FBQztRQUNsQywyQkFBcUIsR0FBb0IsSUFBSSxDQUFDO1FBQzlDLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBQ2xDLHdCQUFrQixHQUFvQixJQUFJLENBQUM7UUFDM0Msc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUN6Qyx5QkFBbUIsR0FBZSxJQUFJLENBQUM7UUFDdkMseUJBQW1CLEdBQWlCLElBQUksQ0FBQztRQUN4QyxrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBS25CLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFDckMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMscUJBQWUsR0FBb0IsSUFBSSxD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LElBQUksQ0FBQyxDQUFDLENBQUEsSUFBSTtvQkFDOUMsTUFBTTtnQkFDVjtvQkFDSSxHQUFHLEdBQUcsU0FBUyxDQUFDO29CQUNoQixNQUFNO2FBQ2I7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGdDQUFLLEdBQVosVUFBYSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDaEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUF0NkJnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTY2QnBDO0lBQUQsdUJBQUM7Q0E3NkJELEFBNjZCQyxDQTc2QjZDLGtCQUFRLEdBNjZCckQ7a0JBNzZCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBVSVV0aWwsIFBsYXllclByZWZzIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWwnO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gJy4uL0NvbnRybC9GX1RleGFzVmlld0N0cic7XG5pbXBvcnQgeyBUZXhhcywgVGV4YXNUdXJuRW51bSB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc1wiO1xuaW1wb3J0IHsgVGV4YXNMYW5ndWFnZSB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc0xhbmd1YWdlXCI7XG5pbXBvcnQgeyBQSW5mb1NELCBUZXhUSW5mb1NELCBUZXhVc2VySW5mb1NELCBUZXhBY3Rpb25TRCwgc2NfdGhpc3RvcnlfdGV4IH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTmV0RGF0YVwiO1xuaW1wb3J0IENhcmRSZWRiZXRDb21wIGZyb20gXCIuL0NhcmRSZWRiZXRDb21wXCI7XG5pbXBvcnQgeyBUdXJuQ2VsbENvbXAsIFR1cm5UaXRsZUNvbXAgfSBmcm9tIFwiLi9UdXJuQ2VsbENvbXBcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4YXNIaXN0b3J5Q29tcCBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwdWJsaWMgdGFibGVJZCA9IDA7XG4gICAgcHVibGljIGRpOiBudW1iZXI7XG4gICAgcHVibGljIHNob3dDYXJkOiBudW1iZXI7XG4gICAgcHVibGljIHVpX2J0blNoYXJlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5Db2xsZWN0SGlzdDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY29sbGVjdE51bVRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bkNsb3NlX2hpc3Rvcnk6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3BhaXB1OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9MaXN0Q29udGVudDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHVibGljIHVpX0hpc0luZm9UaXRsZVRleHRCZzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHVybkNvbnRlbnQ6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9TaG93RG93bkNvbnRlbnQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX1Nob3dEb3duVGl0bGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX1Nob3dEb3duSW5mb0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9zbGlkZXJTZWxlY3RQYWdlOiBmZ3VpLkdTbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgY3VyUGFnZUluZGV4ID0gLTE7XG4gICAgcHJpdmF0ZSBtYXhQYWdlQ291bnQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyB1c2VyczogUEluZm9TRFtdO1xuICAgIHB1YmxpYyBoaXN0b3J5TGlzdDogVGV4VEluZm9TRFtdO1xuICAgIHB1YmxpYyB1aV9idG5QYWdlTGFzdDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuUGFnZUZpcnN0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5QYWdlTmV4dDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuUGFnZVByZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0UGFnZUluZGV4OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX3RleFRleHRUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfSGlzSW5mb1RpdGxlVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaGlzdG9yeUdyb3VwOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5KdWJhbzogZmd1aS5HQnV0dG9uID0gbnVsbDsvL+S4vuaKpVxuXG4gICAgcHVibGljIHVpX2p1YmFvVXNlcnNQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsvL+S4vuaKpeeOqeWutueVjOmdolxuICAgIHB1YmxpYyB1aV9idG5fanViYW9DbG9zZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfbGlzdEp1YmFvVXNlcnM6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5fanViYW9PSzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaW5wdXRKdWJhbzogZmd1aS5HVGV4dElucHV0ID0gbnVsbDsvL+S4vuaKpeWOn+WboFxuXG4gICAgcHVibGljIHVpX3R4dEphY2twb3RQb29sOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIGZpcnN0Q2FyZHM6IG51bWJlcltdO1xuICAgIHB1YmxpYyBhZnRlckNhcmRzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgc2hvd0NhcmRzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgc2VsZWN0Rml2ZUNhcmRzOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIGlzR2FtaW5nID0gdHJ1ZTtcbiAgICBwcml2YXRlIG1heENvbGxlY3Q6IG51bWJlcjtcbiAgICBwcml2YXRlIGp1YmFvVXNlcnM6IG51bWJlcltdID0gW107Ly/kuL7miqXnjqnlrrZcblxuICAgIHByaXZhdGUgb25Mb2FkRW5kID0gZmFsc2U7XG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIE15U3RhcnQoaXNHYW1pbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0dhbWluZyA9IGlzR2FtaW5nO1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIHB1YmxpYyBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIGlmICh0aGlzLnVpX2J0blNoYXJlID09IG51bGwpIHtcbiAgICAgICAgICAgIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG4gICAgICAgICAgICB0aGlzLkluaXRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0dhbWluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQubmFtZS5pbmRleE9mKFwiaGlzdG9yeVwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9idG5TaGFyZS52aXNpYmxlID0gdGhpcy5pc0dhbWluZztcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIH1cblxuXG4gICAgcHVibGljIEluaXRMYW5ndWFnZSgpIHtcbiAgICAgICAgdGhpcy51aV90ZXhUZXh0VGl0bGUudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDExNDEpOy8v54mM5bGA5Zue6aG+XG4gICAgICAgIHRoaXMudWlfSGlzSW5mb1RpdGxlVGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTE0NSk7Ly/or6bnu4bov4fnqItcbiAgICB9XG4gICAgcHVibGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuZmlyc3RDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmFmdGVyQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5zaG93Q2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RGaXZlQ2FyZHMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy51aV9idG5DbG9zZV9oaXN0b3J5LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90eHRQYWdlSW5kZXgudGV4dCA9IDAgKyBcIi9cIiArIDA7XG4gICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBJbml0RXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWluZykge1xuICAgICAgICAgICAgdGhpcy51aV9idG5DbG9zZV9oaXN0b3J5Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0TnVtYmVyT2ZSdW5uaW5nQWN0aW9ucygpID4gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlfYnRuQ2xvc2VfaGlzdG9yeS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgY2MudjIoMTA4MCwgdGhpcy5ub2RlLnkpKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuQ2xvc2VfaGlzdG9yeS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpX2J0bkNsb3NlX2hpc3RvcnkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS5vbihmZ3VpLkV2ZW50LlNUQVRVU19DSEFOR0VELCAocHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcy52YWx1ZSA9PSAwKSByZXR1cm47Ly/miZPlvIDnmoTml7blgJnkvJrpu5jorqTlsIbmu5HliqjmnaHnmoTlgLzmu5HliLAw77yM6L+Z5pe25YCZ5Lya5YWI5Yi35paw5LiA5qyh56ys5LiA6aG155qE5pWw5o2u77yM54S25ZCO5YaN5Yi35paw5b2T5YmNbWF4cGFnZeeahOWAvFxuXG4gICAgICAgICAgICBsZXQgcGFnZUluZGV4ID0gVUlVdGlsLk51bWJlclRvSW50KHByb2dyZXNzLnZhbHVlKTsgLy90aGlzLkNsYW1wKFVJVXRpbC5OdW1iZXJUb0ludChNYXRoLnJvdW5kKHByb2dyZXNzLnZhbHVlICogdGhpcy5tYXhQYWdlQ291bnQpKSwgMSwgdGhpcy5tYXhQYWdlQ291bnQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9ncmVzczogXCIgKyBwcm9ncmVzcy52YWx1ZSArIFwiIGN1cnBhZ2U6XCIgKyB0aGlzLmN1clBhZ2VJbmRleCArXCIgLCBwYWdlSW5kZXg6XCIrcGFnZUluZGV4KTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggIT0gdGhpcy5jdXJQYWdlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEN1clBhZ2VJbmRleChwYWdlSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0blBhZ2VMYXN0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZXRTbGlkZXJWYWx1ZUJ5SW5kZXgodGhpcy5tYXhQYWdlQ291bnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0blBhZ2VGaXJzdC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2V0U2xpZGVyVmFsdWVCeUluZGV4KDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0blBhZ2VOZXh0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZXRTbGlkZXJWYWx1ZUJ5SW5kZXgodGhpcy5jdXJQYWdlSW5kZXggKyAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5QYWdlUHJlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZXRTbGlkZXJWYWx1ZUJ5SW5kZXgodGhpcy5jdXJQYWdlSW5kZXggLSAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5TaGFyZS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hhcmUgaGlzdG9yeSByb29tIG51bWJlclwiKTtcblxuICAgICAgICAgICAgLy8gU2hhcmVTZGtNYW5hZ2VyLlNpbmdsZXRvbi5TaGFyZVRhYmxlTnVtYmVyKHRoaXMudGFibGVJZCk7Ly9GaXhNZVxuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2J0bkNvbGxlY3RIaXN0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeUxpc3QgPT0gbnVsbCB8fCB0aGlzLmhpc3RvcnlMaXN0Lmxlbmd0aCA8PSAwIHx8IHRoaXMucGFnZVNkID09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3RleGFzY29sbGVjdF90ZXgodGhpcy5wYWdlU2QuSXNTYXZhID8gMSA6IDAsIHRoaXMucGFnZVNkLmluZm9JZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuSnViYW8ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2Vycy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhZ2VTZCkge1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuY29tbW9uVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDM1KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuanViYW9UeXBlID0gMTtcbiAgICAgICAgICAgIHRoaXMudWlfanViYW9Vc2Vyc1BhbmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Mb2FkSnViYW9Vc2VycygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5fanViYW9DbG9zZS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlfanViYW9Vc2Vyc1BhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5fanViYW9PSy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUG9zdFJlcG9ydFByYSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL+WKoOi9veS4vuaKpeeOqeWutlxuICAgIHB1YmxpYyBMb2FkSnViYW9Vc2VycygpIHtcbiAgICAgICAgdGhpcy5qdWJhb1VzZXJzID0gW107XG4gICAgICAgIHRoaXMudWlfbGlzdEp1YmFvVXNlcnMucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgbGV0IGlzRXhpc3QgPSBmYWxzZTsvL+aYr+WQpuWPguS4jui/meWxgFxuICAgICAgICB2YXIgdXNlcjogUEluZm9TRCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXNFeGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnBhZ2VTZC50SW5mby5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJzW2ldLnVpZCA9PSB0aGlzLnBhZ2VTZC50SW5mb1tqXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpc0V4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHRoaXMudXNlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRXhpc3QgJiYgdXNlci51aWQgIT0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgIGxldCBnbyA9IDxmZ3VpLkdDb21wb25lbnQ+dGhpcy51aV9saXN0SnViYW9Vc2Vycy5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGdvLmdldENoaWxkKFwiaGVhZGltZ1wiKS5hc0NvbS5nZXRDaGlsZChcImhlYWRJbWFnZVwiKS5hc0xvYWRlciwgdXNlci53aWNvbik7XG4gICAgICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuaWNrbmFtZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdXNlci53TmFtZTtcbiAgICAgICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwiaXNTZWxlY3RcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICBnby5nZXRDaGlsZChcImJ1dHRvblwiKS5hc0J1dHRvbi5jbGVhckNsaWNrKCk7XG4gICAgICAgICAgICAgICAgdmFyIHVpZCA9IDA7XG4gICAgICAgICAgICAgICAgdWlkID0gdXNlci51aWQ7XG4gICAgICAgICAgICAgICAgZ28ubmFtZSA9IHVpZCArIFwiXCI7XG4gICAgICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJidXR0b25cIikuYXNCdXR0b24uY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYnV0dG9uXCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEp1YmFvVXNlcihnbyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0SnViYW9Vc2VyKGdvOiBmZ3VpLkdDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGlzc2xlY3QgPSBnby5nZXRDb250cm9sbGVyKFwiaXNTZWxlY3RcIikuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgZ28uZ2V0Q29udHJvbGxlcihcImlzU2VsZWN0XCIpLnNldFNlbGVjdGVkSW5kZXgoaXNzbGVjdCA9PSAwID8gMSA6IDApO1xuXG4gICAgICAgIGlmIChpc3NsZWN0ID09IDAgJiYgdGhpcy5qdWJhb1VzZXJzLmluZGV4T2YoTnVtYmVyLnBhcnNlSW50KGdvLm5hbWUpKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuanViYW9Vc2Vycy5wdXNoKE51bWJlci5wYXJzZUludChnby5uYW1lKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5qdWJhb1VzZXJzLmluZGV4T2YoTnVtYmVyLnBhcnNlSW50KGdvLm5hbWUpKSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1YmFvVXNlcnMuc3BsaWNlKHRoaXMuanViYW9Vc2Vycy5pbmRleE9mKE51bWJlci5wYXJzZUludChnby5uYW1lKSksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIuS4vuaKpeeOqeWutu+8mlwiICsgdGhpcy5qdWJhb1VzZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUG9zdFJlcG9ydFByYSgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuanViYW9Vc2Vycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuUG9zdFJlcG9ydFByYSh0aGlzLmN1clBhZ2VJbmRleCwgMCwgdGhpcy51aV9pbnB1dEp1YmFvLnRleHQsIFwiXCIsIHRoaXMuZ2V0SnViYW9Hb2xkKCkpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmp1YmFvVXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwi5Li+5oql5aSa5Lq677yaaW5kZXggPSBcIiArICh0aGlzLmp1YmFvVXNlcnMubGVuZ3RoIC0gaSAtIDEpKTtcbiAgICAgICAgLy8gICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Qb3N0UmVwb3J0UHJhKHRoaXMuY3VyUGFnZUluZGV4LCB0aGlzLmp1YmFvVXNlcnNbaV0sIHRoaXMudWlfaW5wdXRKdWJhby50ZXh0LCBcIlwiLCB0aGlzLmdldEp1YmFvR29sZCgpLCAodGhpcy5qdWJhb1VzZXJzLmxlbmd0aCAtIGkgLSAxKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIuS4vuaKpeeOqeWutiB0aGlzLmp1YmFvVXNlcnMg77yaXCIsIHRoaXMuanViYW9Vc2Vycy5sZW5ndGgpO1xuICAgICAgICBpZiAodGhpcy5qdWJhb1VzZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAzNCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9qdWJhb1VzZXJzUGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy50aXBWaWV3LlNob3dUaXAoXCLmgqjlsIZcIiArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIwOTIpICsgdGhpcy5nZXRKdWJhb0dvbGQoKSArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAyOSkgKyBcIizmmK/lkKZcIiArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAxOSkgKyBcIu+8n1wiLCAoKSA9PiB7Ly/mtojogJcs6YeR5biBLuS4vuaKpVxuICAgICAgICAgICAgICAgIGxldCB1c2VyaWRfU3RyOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5qdWJhb1VzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmp1YmFvVXNlcnMubGVuZ3RoIC0gMSA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyaWRfU3RyID0gdXNlcmlkX1N0ciArIHRoaXMuanViYW9Vc2Vyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpZF9TdHIgPSB1c2VyaWRfU3RyICsgdGhpcy5qdWJhb1VzZXJzW2ldICsgXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuL7miqXnjqnlrrbvvJpcIiwgdXNlcmlkX1N0cik7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuUG9zdFJlcG9ydFByYSh0aGlzLmN1clBhZ2VJbmRleCwgdXNlcmlkX1N0ciwgdGhpcy51aV9pbnB1dEp1YmFvLnRleHQsIFwiXCIsIHRoaXMuZ2V0SnViYW9Hb2xkKCkpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfanViYW9Vc2Vyc1BhbmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSwgVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDE5KSwgVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM5MykpOy8vXCLkuL7miqVcIiAs5Y+W5raIIFxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5Li+5oql5qyh5pWwXG4gICAgcHVibGljIGdldEp1YmFvR29sZCgpOiBudW1iZXIge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi5Li+5oql5qyh5pWw77yaXCIgKyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwucmVjb3VudCk7XG4gICAgICAgIGxldCBudW0gPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwucmVjb3VudDtcbiAgICAgICAgbGV0IGdvbGQgPSAwO1xuICAgICAgICBpZiAobnVtID09IDApIHtcbiAgICAgICAgICAgIGdvbGQgPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPT0gMSkge1xuICAgICAgICAgICAgZ29sZCA9IDIwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ29sZCA9IDQwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnb2xkO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2V0U2xpZGVyVmFsdWVCeUluZGV4KHBhZ2VJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS52YWx1ZSA9IHBhZ2VJbmRleDsgLy90aGlzLm1heFBhZ2VDb3VudCA+IDAgPyBwYWdlSW5kZXggLyB0aGlzLm1heFBhZ2VDb3VudCA6IDA7XG4gICAgICAgIHRoaXMuU2V0Q3VyUGFnZUluZGV4KHBhZ2VJbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYWdlU2Q6IFRleFRJbmZvU0Q7XG5cbiAgICBwcml2YXRlIFNldEN1clBhZ2VJbmRleChwYWdlSW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzLkhpZGUoKTtcblxuICAgICAgICBpZiAocGFnZUluZGV4ID4gdGhpcy5tYXhQYWdlQ291bnQgfHwgcGFnZUluZGV4IDw9IDAgfHwgdGhpcy5jdXJQYWdlSW5kZXggPT0gcGFnZUluZGV4IHx8IHRoaXMubWF4UGFnZUNvdW50IDw9IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuY3VyUGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJQYWdlSW5kZXg6XCIgKyB0aGlzLmN1clBhZ2VJbmRleCArIFwiIG1heFBhZ2VDb3VudDpcIiArIHRoaXMubWF4UGFnZUNvdW50KTtcblxuICAgICAgICBsZXQgZW5hYmxlRmlyc3QgPSBwYWdlSW5kZXggPiAxICYmIHRoaXMubWF4UGFnZUNvdW50ID4gMTtcblxuICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0blBhZ2VGaXJzdCwgZW5hYmxlRmlyc3QpO1xuICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0blBhZ2VQcmUsIGVuYWJsZUZpcnN0KTtcblxuICAgICAgICBsZXQgZW5hYmxlTGFzdCA9IHBhZ2VJbmRleCA8IHRoaXMubWF4UGFnZUNvdW50ICYmIHRoaXMubWF4UGFnZUNvdW50ID4gMTtcbiAgICAgICAgdGhpcy5TZXRCdXR0b25FbmFibGUodGhpcy51aV9idG5QYWdlTGFzdCwgZW5hYmxlTGFzdCk7XG4gICAgICAgIHRoaXMuU2V0QnV0dG9uRW5hYmxlKHRoaXMudWlfYnRuUGFnZU5leHQsIGVuYWJsZUxhc3QpO1xuXG4gICAgICAgIHRoaXMudWlfdHh0UGFnZUluZGV4LnRleHQgPSB0aGlzLmN1clBhZ2VJbmRleCArIFwiL1wiICsgdGhpcy5tYXhQYWdlQ291bnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHh0OlwiICsgdGhpcy51aV90eHRQYWdlSW5kZXgudGV4dCk7XG5cbiAgICAgICAgdGhpcy5wYWdlU2QgPSB0aGlzLmhpc3RvcnlMaXN0W3RoaXMuY3VyUGFnZUluZGV4IC0gMV07XG4gICAgICAgIC8vIGxldCBwb3NpdGl2ZSA9IHRoaXMucGFnZVNkLmogPj0gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInR4dEphY2twb3RQb29sID0gXCIgKyB0aGlzLnBhZ2VTZC5qKTtcbiAgICAgICAgdGhpcy51aV90eHRKYWNrcG90UG9vbC50ZXh0ID0gVGV4YXMuZm9ybWF0TnVtYmVyMTAwKHRoaXMucGFnZVNkLmopICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV90eHRKYWNrcG90UG9vbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5TaG93SGlzdG9yeUluZm8odGhpcy5wYWdlU2QpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBTZXRCdXR0b25FbmFibGUoYnRuOiBmZ3VpLkdCdXR0b24sIGlzRW5hYmxlOiBib29sZWFuLCBidG5Db2xvcjogY2MuQ29sb3IgPSBudWxsLCB0eHRDb2xvcjogY2MuQ29sb3IgPSBudWxsKSB7XG4gICAgICAgIGJ0bi5lbmFibGVkID0gaXNFbmFibGU7XG4gICAgICAgIGxldCBfaW1nOiBmZ3VpLkdJbWFnZSA9IGJ0bi5nZXRDaGlsZChcIkltYWdlXCIpLmFzSW1hZ2U7XG4gICAgICAgIGlmIChfaW1nID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gYnRuQ29sb3IgPT0gbnVsbCA/IGNjLkNvbG9yLldISVRFIDogYnRuQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG4uX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gYnRuLmdldENoaWxkKFwiVGV4dFwiKTtcbiAgICAgICAgICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hc1RleHRGaWVsZC5jb2xvciA9IHR4dENvbG9yID09IG51bGwgPyBjYy5Db2xvci5XSElURSA6IHR4dENvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5hc1RleHRGaWVsZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIC8v5omT5byA55WM6Z2iXG4gICAgcHVibGljIFNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzdXBlci5TaG93KCk7XG4gICAgICAgIHRoaXMuSW5pdExhbmd1YWdlKCk7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2VfaGlzdG9yeS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSGlkZSgpIHtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dIaXN0b3J5SW5mbyhkYXRhOiBUZXhUSW5mb1NEKSB7XG4gICAgICAgIHRoaXMudWlfTGlzdENvbnRlbnQudmlzaWJsZSA9IChkYXRhLnRJbmZvICE9IG51bGwgJiYgZGF0YS50SW5mby5sZW5ndGggPiAwKTtcbiAgICAgICAgdGhpcy5TaG93TGlzdChkYXRhLnRJbmZvLCBkYXRhLmlwb29sLCBkYXRhLm5nKTtcbiAgICAgICAgLy8gTGF5b3V0UmVidWlsZGVyLkZvcmNlUmVidWlsZExheW91dEltbWVkaWF0ZSh0aGlzLnVpX0xpc3RDb250ZW50LmdhbWVPYmplY3QuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkpO1xuICAgICAgICB0aGlzLnVpX0hpc0luZm9UaXRsZVRleHRCZy52aXNpYmxlID0gKGRhdGEudGxpc3QgIT0gbnVsbCAmJiBkYXRhLnRsaXN0Lmxlbmd0aCA+IDApO1xuICAgICAgICB0aGlzLnVpX3R1cm5Db250ZW50LnZpc2libGUgPSAodGhpcy51aV9IaXNJbmZvVGl0bGVUZXh0QmcudmlzaWJsZSk7XG4gICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LnZpc2libGUgPSAodGhpcy51aV9IaXNJbmZvVGl0bGVUZXh0QmcudmlzaWJsZSk7XG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgICAgICB0aGlzLlNob3dUdXJuSW5mbyhkYXRhLnRsaXN0LCBkYXRhLmlwb29sLCBkYXRhLnRJbmZvKTtcbiAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIueJjOWxgOivpuaDhee7k+aenCAgICAgICArKysrK1wiICsgZGF0YS50bGlzdC5Db3VudCk7ICAgICAgICBcbiAgICAgICAgLy8gTGF5b3V0UmVidWlsZGVyLkZvcmNlUmVidWlsZExheW91dEltbWVkaWF0ZSh1aV90dXJuQ29udGVudC5nYW1lT2JqZWN0LkdldENvbXBvbmVudDxSZWN0VHJhbnNmb3JtPigpKTtcbiAgICAgICAgLy8gTGF5b3V0UmVidWlsZGVyLkZvcmNlUmVidWlsZExheW91dEltbWVkaWF0ZSh1aV9TaG93RG93bkNvbnRlbnQuZ2FtZU9iamVjdC5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKSk7XG4gICAgICAgIC8vIExheW91dFJlYnVpbGRlci5Gb3JjZVJlYnVpbGRMYXlvdXRJbW1lZGlhdGUodWlfSGlzdG9yeUNvbnRlbnQuZ2FtZU9iamVjdC5HZXRDb21wb25lbnQ8UmVjdFRyYW5zZm9ybT4oKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54mM5bGA6K+m5oOF57uT5p6cICAgICAgICsrKysrXCIgKyBkYXRhLklzU2F2YSk7XG4gICAgICAgIHRoaXMudWlfYnRuQ29sbGVjdEhpc3QuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChkYXRhLklzU2F2YSA/IDEgOiAwKTtcbiAgICAgICAgLy8gVUlVdGlsLmxvYWRJbWFnZSh0aGlzLnVpX2J0bkNvbGxlY3RIaXN0LmdldENoaWxkKFwiSW1hZ2VcIikuYXNMb2FkZXIsIGRhdGEuSXNTYXZhID8gXCJjb2xsZWN0X3NcIiA6IFwiY29sbGVjdFwiLCBcIlRleGFzXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd0xpc3QodExpc3Q6IFRleFVzZXJJbmZvU0RbXSwgcG9vbE51bTogbnVtYmVyLCBuZzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudWlfTGlzdENvbnRlbnQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgdGhpcy51aV9MaXN0Q29udGVudC5oZWlnaHQgPSAwO1xuICAgICAgICBpZiAodExpc3QgPT0gbnVsbCB8fCB0TGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZ286IGZndWkuR09iamVjdCA9IG51bGw7XG4gICAgICAgIGxldCBpc1Nob3cgPSB0aGlzLmlzU2hvd1BhaSh0TGlzdCk7XG5cbiAgICAgICAgdGhpcy5zaG93Q2FyZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0TGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfTGlzdENvbnRlbnQuYWRkSXRlbUZyb21Qb29sKCk7XG4gICAgICAgICAgICB0aGlzLnVpX0xpc3RDb250ZW50LmhlaWdodCArPSAxNTU7XG4gICAgICAgICAgICAvLyBnby50cmFuc2Zvcm0uR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkuc2l6ZURlbHRhID0gbmV3IFZlY3RvcjIoODIwLCAxMTApO1xuICAgICAgICAgICAgdGhpcy5TZXRVc2VyQ2VsbEluZm8oZ28uYXNDb20sIHRMaXN0W2ldLCBpc1Nob3csIG5nKTtcbiAgICAgICAgICAgIHRoaXMuR2V0VXNlclNob3dDYXJkKHRMaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9vbE51bSAhPSAwKSB7XG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfTGlzdENvbnRlbnQuYWRkSXRlbUZyb21Qb29sKCk7XG4gICAgICAgICAgICB0aGlzLnVpX0xpc3RDb250ZW50LmhlaWdodCArPSAxNTU7XG4gICAgICAgICAgICAvLyBnby50cmFuc2Zvcm0uR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkuc2l6ZURlbHRhID0gbmV3IFZlY3RvcjIoODIwLCA4MCk7XG4gICAgICAgICAgICBsZXQgaW5mb1BhbmVsOiBmZ3VpLkdHcm91cCA9IGdvLmFzQ29tLmdldENoaWxkKFwiaGlzdG9yeUNlbGxQYW5lbFwiKS5hc0dyb3VwO1xuICAgICAgICAgICAgbGV0IGluc1BhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBnby5hc0NvbS5nZXRDaGlsZChcImluc1Bvb2xQYW5lbFwiKS5hc0NvbTtcbiAgICAgICAgICAgIGluZm9QYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBpbnNQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpbnNUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBpbnNQYW5lbC5nZXRDaGlsZChcImluc1Bvb2xOdW1cIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBsZXQgaW5zVGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IGluc1BhbmVsLmdldENoaWxkKFwiaW5zUG9vbHRleHRcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICBpbnNUaXRsZS50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTE0NCk7Ly/kv53pmanmsaDvvJpcblxuICAgICAgICAgICAgbGV0IGluc3Bvc2l0aXZlID0gcG9vbE51bSA+IDAgPyBcIitcIiA6IFwiXCI7XG4gICAgICAgICAgICBpbnNUZXh0LnRleHQgPSBpbnNwb3NpdGl2ZSArIFRleGFzLmZvcm1hdE51bWJlcjEwMChwb29sTnVtKTtcbiAgICAgICAgICAgIGluc1RleHQuY29sb3IgPSBwb29sTnVtID49IDAgPyBjYy5Db2xvci5SRUQgOiBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PVNob3dMaXN0ID09IHVpX0xpc3RDb250ZW50Lm51bUl0ZW1zOlwiICsgdGhpcy51aV9MaXN0Q29udGVudC5udW1JdGVtcyArIFwiLCB1aV9MaXN0Q29udGVudC5oZWlnaHQ6XCIgKyB0aGlzLnVpX0xpc3RDb250ZW50LmhlaWdodCk7XG4gICAgfVxuICAgIC8vIOeKtuaAgSDlvIPniYwxOyDlvIDniYwyOyDmnKrlvIPniYzmnKrlvIDniYwzOyDlvIPniYzliY3kuKTlvKDniYzlj6rmmL7npLrog4zpnaJcbiAgICBwdWJsaWMgU2V0VXNlckNlbGxJbmZvKGNlbGxJdGVtOiBmZ3VpLkdDb21wb25lbnQsIGdhaW5EYXRhOiBUZXhVc2VySW5mb1NELCBpc1Nob3dQYWk6IGJvb2xlYW4sIG5nOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGluZm9QYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJoaXN0b3J5Q2VsbFBhbmVsXCIpLmFzQ29tO1xuICAgICAgICBsZXQgaW5zUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IGNlbGxJdGVtLmdldENoaWxkKFwiaW5zUG9vbFBhbmVsXCIpLmFzQ29tO1xuICAgICAgICBpbmZvUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGluc1BhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJJbmZvOiBQSW5mb1NEID0gdGhpcy5HZXRVc2VyKGdhaW5EYXRhLmlkKTtcbiAgICAgICAgaWYgKHVzZXJJbmZvID09IG51bGwpIGNvbnNvbGUubG9nKFwidXNlckluZm8gaXMgbnVsbCAsIGdhaW5EYXRhLmlkPVwiICsgZ2FpbkRhdGEuaWQpXG4gICAgICAgIGxldCBoZWFkSW1hZ2U6IGZndWkuR0xvYWRlciA9IGNlbGxJdGVtLmdldENoaWxkKFwiVXNlckhlYWRcIikuYXNDb20uZ2V0Q2hpbGQoXCJoZWFkSW1hZ2VcIikuYXNMb2FkZXI7XG4gICAgICAgIGxldCB0eHROYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dE5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRHYW1ibGU6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0R2FtYmxlXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgdHh0R2FpbjogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRHYWluXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgdHh0U3BlY2lhbENhcmQ6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0U3BlY2lhbENhcmRcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIHR4dFNwZWNpYWxDYXJkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN0YXR1c2JnOiBmZ3VpLkdMb2FkZXIgPSBjZWxsSXRlbS5nZXRDaGlsZChcInN0YXR1c2JnXCIpLmFzTG9hZGVyO1xuICAgICAgICBsZXQgdHh0U3RhdHVzOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dFN0YXR1c1wiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dEluc3VyYW5jZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRJbnN1cmFuY2VcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCBwb3NOYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dFBvc1wiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgcG9zTmFtZS50ZXh0ID0gVGV4YXMuZ2V0UGxheWVyUG9zVHlwZShnYWluRGF0YS5wb3MsIHRoaXMucGFnZVNkLmJhbmtlcnBvcywgdGhpcy5wYWdlU2QudEluZm8pO1xuICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQodHh0TmFtZSwgdXNlckluZm8ud05hbWUsIDYpO1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKGhlYWRJbWFnZSwgdXNlckluZm8ud2ljb24pO1xuICAgICAgICB0eHRHYW1ibGUudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MjMpICsgXCI6IFwiICsgVGV4YXMuZm9ybWF0TnVtYmVyMTAwKGdhaW5EYXRhLmcpOy8v5LiL5rOoXG4gICAgICAgIGxldCBwb3NpdGl2ZSA9IGdhaW5EYXRhLndnID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgdHh0R2Fpbi50ZXh0ID0gcG9zaXRpdmUgKyBUZXhhcy5mb3JtYXROdW1iZXIxMDAoZ2FpbkRhdGEud2cpO1xuICAgICAgICB0eHRHYWluLmNvbG9yID0gZ2FpbkRhdGEud2cgPj0gMCA/IGNjLkNvbG9yLlJFRCA6IGNjLkNvbG9yLkdSRUVOOyAvL0NvbnN0LkNvbG9yTnVtUmVkIDogQ29uc3QuQ29sb3JOdW1HcmVlbjsgICAgICBcblxuICAgICAgICBsZXQgaW5zcG9zaXRpdmUgPSBnYWluRGF0YS5pbnMgPiAwID8gXCIrXCIgOiBcIlwiO1xuICAgICAgICB0eHRJbnN1cmFuY2UudGV4dCA9IGdhaW5EYXRhLmlucyA9PSAwID8gXCJcIiA6IGluc3Bvc2l0aXZlICsgKGdhaW5EYXRhLmlucyAvIDEwMCkudG9GaXhlZCgzKS5zbGljZSgwLCAtMSk7XG4gICAgICAgIHR4dEluc3VyYW5jZS5jb2xvciA9IGdhaW5EYXRhLmlucyA+PSAwID8gY2MuQ29sb3IuUkVEIDogY2MuQ29sb3IuR1JFRU47IC8vQ29uc3QuQ29sb3JOdW1SZWQgOiBDb25zdC5Db2xvck51bUdyZWVuOyAgICAgICBcblxuICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcyA9IFtdO1xuICAgICAgICBsZXQgaXNRaVBhaSA9IGdhaW5EYXRhLmd1ID09IDE7XG5cbiAgICAgICAgbGV0IGlzRGVhbENhcmQgPSBuZyA+IDE7Ly/mmK/lkKbliLDkuobmnIDlkI7liIbniYzpmLbmrrVcbiAgICAgICAgdGhpcy5EZWFsQ2FyZEJ5RGVmYXVsdChnYWluRGF0YSk7XG5cblxuICAgICAgICBpZiAoIWlzUWlQYWkgJiYgaXNEZWFsQ2FyZCkvL+ayoeacieW8g+eJjOS4lOaciTflvKDniYzml7bvvIzmnIDlpKfnmoTkupTlvKDniYznu4TlkIjnmoTnsbvlnotcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICB0eHRTcGVjaWFsQ2FyZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcyA9IFRleGFzLkdldE1heFR5cGVDYXJkcyhUZXhhcy5HZXRGaXZlRnJvbVNldmVuKHRoaXMuZmlyc3RDYXJkcywgdGhpcy5hZnRlckNhcmRzKSk7XG4gICAgICAgICAgICAgICAgdHh0U3BlY2lhbENhcmQudGV4dCA9IFRleGFzLkdldFRleGFzTmFtZSh0aGlzLnNlbGVjdEZpdmVDYXJkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzV0hJVEUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNhcmRFeWU6IGZndWkuR0ltYWdlID0gbnVsbDtcbiAgICAgICAgbGV0IGNhcmQ6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgICAgIGxldCBpc1NlbGY6IGJvb2xlYW4gPSBnYWluRGF0YS5pZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkO1xuICAgICAgICAvL0RlYnVnRVguTG9nRShcImNvdW50O1wiICsgc2hvd0NhcmRDb3VudCArIFwiIGdhaW5kYXRhLnM6XCIgKyBnYWluRGF0YS5zKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspLy/pppbniYzmmL7npLpcbiAgICAgICAge1xuICAgICAgICAgICAgY2FyZEV5ZSA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZEV5ZVwiICsgKGkgKyAxKSkuYXNJbWFnZTtcbiAgICAgICAgICAgIGNhcmRFeWUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAxKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgY2FyZElkID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2FyZHMubGVuZ3RoID4gaSlcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSB0aGlzLmZpcnN0Q2FyZHNbaV07XG5cbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICgoKGlzUWlQYWkgJiYgIWlzU2VsZikgfHwgKCFpc1FpUGFpICYmICFpc0RlYWxDYXJkICYmICFpc1NlbGYpKSAmJiB0aGlzLnNob3dDYXJkICE9IDEgJiYgIWlzU2hvd1BhaSkvL+S4jeaYr+iHquW3seeahOW8g+eJjOeOqeWutuS4jeaYvuekuummlueJjCzmnKrmr5TniYzkuZ/kuI3mmL7npLrliKvkurrnmoTpppbniYxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2coXCJ1c2VySW5mby53TmFtZTpcIiArIHVzZXJJbmZvLndOYW1lICsgXCIgY2FyZElkOiBcIiArIGkgKyBcIiA6XCIgKyBjYXJkSWQpO1xuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShjYXJkLCBjYXJkSWQgPT0gMCA/IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSA6IGNhcmRJZCArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpLCBcIlRleGFzXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUWlQYWkpLy/mnKrlvIPniYznu5PnrpfmnInniYzlnovnmoTml7blgJnmnKrpgInkuK3nmoTniYzlj5jngbAs5byD54mM5omA5pyJ54mM572u54GwXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpKSBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspLy/ns7vnu5/niYzmmL7npLpcbiAgICAgICAge1xuICAgICAgICAgICAgY2FyZCA9IGNlbGxJdGVtLmdldENoaWxkKFwiY2FyZFwiICsgKGkgKyAzKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICBsZXQgY2FyZElkID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID4gaSlcbiAgICAgICAgICAgICAgICBjYXJkSWQgPSB0aGlzLmFmdGVyQ2FyZHNbaV07XG5cblxuICAgICAgICAgICAgY2FyZC52aXNpYmxlID0gKGNhcmRJZCA+IDApO1xuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShjYXJkLCBjYXJkSWQgPT0gMCA/IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSA6IGNhcmRJZCArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpLCBcIlRleGFzXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUWlQYWkpLy/mnKrlvIPniYznu5PnrpfmnInniYzlnovnmoTml7blgJnmnKrpgInkuK3nmoTniYzlj5jngbAs5byD54mM6aaW54mM572u54GwXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDYXJkcy5sZW5ndGggPj0gMiAmJiB0aGlzLmFmdGVyQ2FyZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpKSBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy/msqHmnInlvIPniYzvvIzmsqHmnInnmb3oibLniYzvvIzliJnlhajpg6jkuLrnmb1cbiAgICAgICAgaWYgKCFpc1FpUGFpICYmICFpc1dISVRFKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhcmQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImNhcmRcIiArIChpICsgMSkpLmFzTG9hZGVyO1xuICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vc3RhdHVzYmcuZ2FtZU9iamVjdC5TZXRBY3RpdmUoZ2FpbkRhdGEucyAhPSAzKTtcbiAgICAgICAgc3RhdHVzYmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChnYWluRGF0YS5ndSAhPSAxICYmIGdhaW5EYXRhLnMgIT0gNSkge1xuICAgICAgICAgICAgc3RhdHVzYmcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8v5bCP5LqO562J5LqOMSDooajnpLrlj6rmmL7npLrkuKTlvKDniYzog4wg5aaC5p6c5piv6Ieq5bex6KaB5pi+56S65Lik5byg5omL54mM44CCIDLvvIwz77yM6KGo56S65a+55bqU56ys5LiJ77yM56ys5Zub6L2u5byD54mMIDXooajnpLrliIbniYxcbiAgICAgICAgdHh0U3RhdHVzLnRleHQgPSB0aGlzLkdldFVzZXJBY3Rpb25TdHJpbmcoZ2FpbkRhdGEucywgZ2FpbkRhdGEuZ3UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXJJZDpcIiArIGdhaW5EYXRhLmlkICsgXCIgczpcIiArIGdhaW5EYXRhLnMpO1xuICAgIH1cbiAgICBwcml2YXRlIHR1cm5EaWM6IE1hcDxudW1iZXIsIFRleEFjdGlvblNEW10+O1xuICAgIHB1YmxpYyBTaG93VHVybkluZm8odGxpc3Q6IFRleEFjdGlvblNEW10sIHBvb2xOdW06IG51bWJlciwgdUxpc3Q6IFRleFVzZXJJbmZvU0RbXSkge1xuICAgICAgICAvLyBUb29sc0V4LkhpZGVDaGlsZHJlbih1aV90dXJuQ29udGVudCk7XG4gICAgICAgIC8vIFRvb2xzRXguSGlkZUNoaWxkcmVuKHVpX1Nob3dEb3duSW5mb0xpc3QpO1xuICAgICAgICB0aGlzLnVpX3R1cm5Db250ZW50LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIHRoaXMudWlfdHVybkNvbnRlbnQuaGVpZ2h0ID0gMDtcblxuICAgICAgICBsZXQgaCA9IHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCAtIHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5udW1JdGVtcyAqIDExNTtcbiAgICAgICAgdGhpcy51aV9TaG93RG93bkNvbnRlbnQuaGVpZ2h0ID0gaCA8IDEyMiA/IDEyMiA6IGg7XG4gICAgICAgIHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuXG4gICAgICAgIGlmICh0bGlzdCA9PSBudWxsIHx8IHRsaXN0Lmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBnbzogZmFpcnlndWkuR09iamVjdCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnR1cm5EaWMgPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMudHVybkRpYyA9IG5ldyBNYXA8bnVtYmVyLCBUZXhBY3Rpb25TRFtdPigpO1xuICAgICAgICB0aGlzLnR1cm5EaWMuY2xlYXIoKTtcbiAgICAgICAgdGxpc3QuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR1cm5EaWMuaGFzKHRlbXAudHVybikpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuRGljLmdldCh0ZW1wLnR1cm4pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3Q6IFRleEFjdGlvblNEW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5EaWMuc2V0KHRlbXAudHVybiwgbGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5EaWMuZ2V0KHRlbXAudHVybikucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdDogVGV4QWN0aW9uU0RbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5EaWMuc2V0KHRlbXAudHVybiwgbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdHVyblR5cGU6IG51bWJlcltdID0gW107XG4gICAgICAgIHRoaXMudHVybkRpYy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICB0dXJuVHlwZS5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0dXJuVHlwZS5zb3J0KChYMSwgWDIpID0+IFgxIC0gWDIpO1xuICAgICAgICBsZXQgbGFzdFRvdGFsRGl6aHUgPSAwO1xuICAgICAgICBsZXQgY3VyVHVybkRpemh1ID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR1cm5UeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdHVybiA9IHR1cm5UeXBlW2ldO1xuICAgICAgICAgICAgaWYgKHR1cm4gPT0gVUlVdGlsLk51bWJlclRvSW50KFRleGFzVHVybkVudW0uVHJ1bkNvbXBhcmUpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGFMaXN0OiBUZXhBY3Rpb25TRFtdID0gdGhpcy50dXJuRGljLmdldCh0dXJuKTtcbiAgICAgICAgICAgIGFMaXN0LmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgICAgICAgICAgY3VyVHVybkRpemh1ICs9IHRlbXAuZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGN1clZhbHVlID0gMDtcbiAgICAgICAgICAgIGlmICh0dXJuID09IDEpIHtcbiAgICAgICAgICAgICAgICBjdXJUdXJuRGl6aHUgKz0gKHVMaXN0Lmxlbmd0aCAqIHRoaXMuZGkpO1xuICAgICAgICAgICAgICAgIGN1clZhbHVlID0gY3VyVHVybkRpemh1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGN1clZhbHVlID0gbGFzdFRvdGFsRGl6aHU7XG4gICAgICAgICAgICBsYXN0VG90YWxEaXpodSArPSBjdXJUdXJuRGl6aHU7XG5cbiAgICAgICAgICAgIGdvID0gdGhpcy51aV90dXJuQ29udGVudC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMudWlfdHVybkNvbnRlbnQuaGVpZ2h0ICs9IDEyMjtcbiAgICAgICAgICAgIGxldCBjb21wOiBUdXJuQ2VsbENvbXAgPSBnby5ub2RlLmdldENvbXBvbmVudChUdXJuQ2VsbENvbXApO1xuICAgICAgICAgICAgaWYgKGNvbXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXAgPSBnby5ub2RlLmFkZENvbXBvbmVudChUdXJuQ2VsbENvbXApO1xuICAgICAgICAgICAgICAgIGNvbXAuZmd1aUNvbXBvbmVudCA9IGdvLmFzQ29tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcC5oaXN0b3J5Q29tcCA9IHRoaXM7XG4gICAgICAgICAgICBjb21wLk15U3RhcnQoYUxpc3QsIHRoaXMudXNlcnMsIHRoaXMuYWZ0ZXJDYXJkcywgdHVybiwgY3VyVmFsdWUsIHRoaXMucGFnZVNkLmJhbmtlcnBvcywgdGhpcy5wYWdlU2QudEluZm8pO1xuICAgICAgICAgICAgY3VyVHVybkRpemh1ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PVNob3dUdXJuSW5mbyA9PSB1aV90dXJuQ29udGVudC5udW1JdGVtczpcIiArIHRoaXMudWlfdHVybkNvbnRlbnQubnVtSXRlbXMgKyBcIiwgdWlfdHVybkNvbnRlbnQuaGVpZ2h0OlwiICsgdGhpcy51aV90dXJuQ29udGVudC5oZWlnaHQpO1xuICAgICAgICB0aGlzLlNob3dTaG93RG93bkluZm8obGFzdFRvdGFsRGl6aHUsIHBvb2xOdW0pO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd1Nob3dEb3duSW5mbyh0b3RhbERpemh1OiBudW1iZXIsIHBvb2xOdW06IG51bWJlcikge1xuICAgICAgICBsZXQgc2hvd0Rvd25QbGF5ZXJzOiBUZXhVc2VySW5mb1NEW10gPSBbXVxuICAgICAgICB0aGlzLnBhZ2VTZC50SW5mby5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ3UgIT0gMSkge1xuICAgICAgICAgICAgICAgIHNob3dEb3duUGxheWVycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9TaG93RG93blRpdGxlLnZpc2libGUgPSAoc2hvd0Rvd25QbGF5ZXJzICE9IG51bGwgJiYgc2hvd0Rvd25QbGF5ZXJzLmxlbmd0aCA+IDApO1xuICAgICAgICBpZiAoc2hvd0Rvd25QbGF5ZXJzID09IG51bGwgfHwgc2hvd0Rvd25QbGF5ZXJzLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIGxldCB0aXRsZUNvbXA6IFR1cm5UaXRsZUNvbXAgPSB0aGlzLnVpX1Nob3dEb3duVGl0bGUubm9kZS5nZXRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgIGlmICh0aXRsZUNvbXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGl0bGVDb21wID0gdGhpcy51aV9TaG93RG93blRpdGxlLm5vZGUuYWRkQ29tcG9uZW50KFR1cm5UaXRsZUNvbXApO1xuICAgICAgICAgICAgdGl0bGVDb21wLmZndWlDb21wb25lbnQgPSB0aGlzLnVpX1Nob3dEb3duVGl0bGVcbiAgICAgICAgICAgIHRoaXMudWlfU2hvd0Rvd25UaXRsZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVDb21wLk15U3RhcnQyKHNob3dEb3duUGxheWVycy5sZW5ndGgsIHRoaXMuc2hvd0NhcmRzLmxlbmd0aCA+IDAgPyB0aGlzLnNob3dDYXJkcyA6IHRoaXMuYWZ0ZXJDYXJkcywgNSwgdG90YWxEaXpodSk7XG4gICAgICAgIGxldCBwYWlwdUNvbXA6IFR1cm5UaXRsZUNvbXAgPSB0aGlzLnVpX3BhaXB1Lm5vZGUuZ2V0Q29tcG9uZW50KFR1cm5UaXRsZUNvbXApO1xuICAgICAgICBpZiAocGFpcHVDb21wID09IG51bGwpIHtcbiAgICAgICAgICAgIHBhaXB1Q29tcCA9IHRoaXMudWlfcGFpcHUubm9kZS5hZGRDb21wb25lbnQoVHVyblRpdGxlQ29tcCk7XG4gICAgICAgICAgICBwYWlwdUNvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfcGFpcHVcbiAgICAgICAgICAgIHRoaXMudWlfcGFpcHUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBhaXB1Q29tcC5NeVN0YXJ0Mih0aGlzLnBhZ2VTZC50SW5mby5sZW5ndGgsIHRoaXMuc2hvd0NhcmRzLmxlbmd0aCA+IDAgPyB0aGlzLnNob3dDYXJkcyA6IHRoaXMuYWZ0ZXJDYXJkcywgLTEsIHRvdGFsRGl6aHUpO1xuXG5cbiAgICAgICAgdGhpcy51aV9TaG93RG93bkluZm9MaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCA9IDEyMjtcblxuICAgICAgICBsZXQgZ286IGZndWkuR09iamVjdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hvd0Rvd25QbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfU2hvd0Rvd25JbmZvTGlzdC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCArPSAxNTU7XG4gICAgICAgICAgICB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QuaGVpZ2h0ICs9IDE1NTtcbiAgICAgICAgICAgIHRoaXMuU2V0U2hvd0Rvd25DZWxsSW5mbyhnby5hc0NvbSwgc2hvd0Rvd25QbGF5ZXJzW2ldLCB0aGlzLnBhZ2VTZC5uZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvb2xOdW0gIT0gMCkge1xuICAgICAgICAgICAgZ28gPSB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QuYWRkSXRlbUZyb21Qb29sKCk7XG4gICAgICAgICAgICB0aGlzLnVpX1Nob3dEb3duQ29udGVudC5oZWlnaHQgKz0gMTU1O1xuICAgICAgICAgICAgdGhpcy51aV9TaG93RG93bkluZm9MaXN0LmhlaWdodCArPSAxNTU7XG4gICAgICAgICAgICBsZXQgc2hvd0Rvd25QYW5lbCA9IGdvLmFzQ29tLmdldENoaWxkKFwic2hvd0Rvd25QYW5lbFwiKS5hc0dyb3VwO1xuICAgICAgICAgICAgbGV0IGluc1BhbmVsID0gZ28uYXNDb20uZ2V0Q2hpbGQoXCJpbnNQb29sUGFuZWxcIikuYXNDb207XG4gICAgICAgICAgICBzaG93RG93blBhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGluc1BhbmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGluc1RleHQ6IGZndWkuR1RleHRGaWVsZCA9IGluc1BhbmVsLmdldENoaWxkKFwiaW5zUG9vbE51bVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBpbnNUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gaW5zUGFuZWwuZ2V0Q2hpbGQoXCJpbnNQb29sdGV4dFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGluc1RpdGxlLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMTQ0KTsvL+S/nemZqeaxoO+8mlxuXG4gICAgICAgICAgICBsZXQgaW5zcG9zaXRpdmUgPSBwb29sTnVtID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgICAgIGluc1RleHQudGV4dCA9IGluc3Bvc2l0aXZlICsgVGV4YXMuZm9ybWF0TnVtYmVyMTAwKHBvb2xOdW0pO1xuICAgICAgICAgICAgaW5zVGV4dC5jb2xvciA9IHBvb2xOdW0gPj0gMCA/IG5ldyBjYy5Db2xvcigxODcsIDczLCA3MykgOiBuZXcgY2MuQ29sb3IoNzEsIDE5MCwgMTM4KTsgLy9Db25zdC5Db2xvck51bVJlZCA6IENvbnN0LkNvbG9yTnVtR3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT1TaG93U2hvd0Rvd25JbmZvID09IHVpX1Nob3dEb3duSW5mb0xpc3QubnVtSXRlbXM6XCIgKyB0aGlzLnVpX1Nob3dEb3duSW5mb0xpc3QubnVtSXRlbXMgKyBcIiwgdWlfU2hvd0Rvd25Db250ZW50LmhlaWdodDpcIiArIHRoaXMudWlfU2hvd0Rvd25Db250ZW50LmhlaWdodCk7XG4gICAgICAgIC8vIExheW91dFJlYnVpbGRlci5Gb3JjZVJlYnVpbGRMYXlvdXRJbW1lZGlhdGUodWlfU2hvd0Rvd25JbmZvTGlzdC5nYW1lT2JqZWN0LkdldENvbXBvbmVudDxSZWN0VHJhbnNmb3JtPigpKTtcbiAgICB9XG4gICAgcHVibGljIFNldFNob3dEb3duQ2VsbEluZm8oY2VsbEl0ZW06IGZndWkuR0NvbXBvbmVudCwgZ2FpbkRhdGE6IFRleFVzZXJJbmZvU0QsIG5nOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGdhaW5EYXRhID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBzaG93RG93blBhbmVsOiBmZ3VpLkdHcm91cCA9IGNlbGxJdGVtLmdldENoaWxkKFwic2hvd0Rvd25QYW5lbFwiKS5hc0dyb3VwO1xuICAgICAgICBsZXQgaW5zUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IGNlbGxJdGVtLmdldENoaWxkKFwiaW5zUG9vbFBhbmVsXCIpLmFzQ29tO1xuICAgICAgICBzaG93RG93blBhbmVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBpbnNQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCB1c2VySW5mbzogUEluZm9TRCA9IHRoaXMuR2V0VXNlcihnYWluRGF0YS5pZCk7XG4gICAgICAgIGxldCB0eHROYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dE5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRHYWluOiBmZ3VpLkdUZXh0RmllbGQgPSBjZWxsSXRlbS5nZXRDaGlsZChcInR4dEdhaW5cIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRTcGVjaWFsQ2FyZDogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJ0eHRTcGVjaWFsQ2FyZFwiKS5hc1RleHRGaWVsZFxuICAgICAgICB0eHRTcGVjaWFsQ2FyZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCB0eHRJbnN1cmFuY2U6IGZndWkuR1RleHRGaWVsZCA9IGNlbGxJdGVtLmdldENoaWxkKFwidHh0SW5zdXJhbmNlXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgcG9zTmFtZTogZmd1aS5HVGV4dEZpZWxkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJjdXJQb3NOYW1lXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBwb3NOYW1lLnRleHQgPSBUZXhhcy5nZXRQbGF5ZXJQb3NUeXBlKGdhaW5EYXRhLnBvcywgdGhpcy5wYWdlU2QuYmFua2VycG9zLCB0aGlzLnBhZ2VTZC50SW5mbyk7XG4gICAgICAgIFVJVXRpbC5TZXRMaW1pdFR4dCh0eHROYW1lLCB1c2VySW5mby53TmFtZSwgNik7XG4gICAgICAgIGxldCBwb3NpdGl2ZSA9IGdhaW5EYXRhLndnID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgdHh0R2Fpbi50ZXh0ID0gcG9zaXRpdmUgKyBUZXhhcy5mb3JtYXROdW1iZXIxMDAoZ2FpbkRhdGEud2cpO1xuICAgICAgICB0eHRHYWluLmNvbG9yID0gZ2FpbkRhdGEud2cgPj0gMCA/IG5ldyBjYy5Db2xvcigxODcsIDczLCA3MykgOiBuZXcgY2MuQ29sb3IoNzEsIDE5MCwgMTM4KS8vIENvbnN0LkNvbG9yTnVtUmVkIDogQ29uc3QuQ29sb3JOdW1HcmVlbjtcblxuICAgICAgICBsZXQgaW5zcG9zaXRpdmUgPSBnYWluRGF0YS5pbnMgPiAwID8gXCIrXCIgOiBcIlwiO1xuICAgICAgICB0eHRJbnN1cmFuY2UudGV4dCA9IGdhaW5EYXRhLmlucyA9PSAwID8gXCJcIiA6IGluc3Bvc2l0aXZlICsgVGV4YXMuZm9ybWF0TnVtYmVyMTAwKGdhaW5EYXRhLmlucyk7XG4gICAgICAgIHR4dEluc3VyYW5jZS5jb2xvciA9IGdhaW5EYXRhLmlucyA+PSAwID8gbmV3IGNjLkNvbG9yKDE4NywgNzMsIDczKSA6IG5ldyBjYy5Db2xvcig3MSwgMTkwLCAxMzgpOy8vIENvbnN0LkNvbG9yTnVtUmVkIDogQ29uc3QuQ29sb3JOdW1HcmVlbjtcblxuICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcyA9IFtdO1xuICAgICAgICBsZXQgaXNRaVBhaSA9IGdhaW5EYXRhLmd1ID09IDE7XG4gICAgICAgIGxldCBpc0RlYWxDYXJkID0gbmcgPiAxOy8v5piv5ZCm5Yiw5LqG5pyA5ZCO5YiG54mM6Zi25q61XG4gICAgICAgIHRoaXMuRGVhbENhcmRCeURlZmF1bHQoZ2FpbkRhdGEpO1xuXG4gICAgICAgIGlmICghaXNRaVBhaSAmJiBpc0RlYWxDYXJkKS8v5rKh5pyJ5byD54mM5LiU5pyJN+W8oOeJjOaXtu+8jOacgOWkp+eahOS6lOW8oOeJjOe7hOWQiOeahOexu+Wei1xuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+PSAyICYmIHRoaXMuYWZ0ZXJDYXJkcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgIHR4dFNwZWNpYWxDYXJkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Rml2ZUNhcmRzID0gVGV4YXMuR2V0TWF4VHlwZUNhcmRzKFRleGFzLkdldEZpdmVGcm9tU2V2ZW4odGhpcy5maXJzdENhcmRzLCB0aGlzLmFmdGVyQ2FyZHMpKTtcbiAgICAgICAgICAgICAgICB0eHRTcGVjaWFsQ2FyZC50ZXh0ID0gVGV4YXMuR2V0VGV4YXNOYW1lKHRoaXMuc2VsZWN0Rml2ZUNhcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNXSElURSA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FyZDogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGlzU2VsZiA9IGdhaW5EYXRhLmlkID09IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG5cbiAgICAgICAgLy9EZWJ1Z0VYLkxvZ0UoXCJjb3VudDtcIiArIHNob3dDYXJkQ291bnQgKyBcIiBnYWluZGF0YS5zOlwiICsgZ2FpbkRhdGEucyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKS8v6aaW54mM5pi+56S6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhcmQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImNhcmRcIiArIChpICsgMSkpLmFzTG9hZGVyO1xuICAgICAgICAgICAgbGV0IGNhcmRJZCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+IGkpXG4gICAgICAgICAgICAgICAgY2FyZElkID0gdGhpcy5maXJzdENhcmRzW2ldO1xuXG4gICAgICAgICAgICBjYXJkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChpc1FpUGFpICYmICFpc1NlbGYpIHx8ICghaXNRaVBhaSAmJiAhaXNEZWFsQ2FyZCkpLy/kuI3mmK/oh6rlt7HnmoTlvIPniYznjqnlrrbkuI3mmL7npLrpppbniYws5pyq5q+U54mM5Lmf5LiN5pi+56S65Yir5Lq655qE6aaW54mMXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FyZElkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRGVidWdFWC5Mb2dFKFwidXNlckluZm8ud05hbWU6XCIgKyB1c2VySW5mby53TmFtZSArIFwiIGNhcmRJZDogXCIgKyBpICsgXCIgOlwiICsgY2FyZElkKTtcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoY2FyZCwgY2FyZElkID09IDAgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiBjYXJkSWQgKyBcIl9cIiArIFBsYXllclByZWZzLkdldEludChcImtleV9jYXJkc19pbmRleFwiLCAxKSwgXCJUZXhhc1wiKTtcblxuICAgICAgICAgICAgaWYgKCFpc1FpUGFpKS8v5pyq5byD54mM57uT566X5pyJ54mM5Z6L55qE5pe25YCZ5pyq6YCJ5Lit55qE54mM5Y+Y54GwLOW8g+eJjOaJgOacieeJjOe9rueBsFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2FyZHMubGVuZ3RoID49IDIgJiYgdGhpcy5hZnRlckNhcmRzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSB0aGlzLmlzU2VsZWN0Q2FyZChjYXJkSWQpID8gY2MuQ29sb3IuV0hJVEUgOiBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdENhcmQoY2FyZElkKSkgaXNXSElURSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgIGlzV0hJVEUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKS8v57O757uf54mM5pi+56S6XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhcmQgPSBjZWxsSXRlbS5nZXRDaGlsZChcImNhcmRcIiArIChpICsgMykpLmFzTG9hZGVyO1xuICAgICAgICAgICAgbGV0IGNhcmRJZCA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5hZnRlckNhcmRzLmxlbmd0aCA+IGkpXG4gICAgICAgICAgICAgICAgY2FyZElkID0gdGhpcy5hZnRlckNhcmRzW2ldO1xuXG4gICAgICAgICAgICBjYXJkLnZpc2libGUgPSAoY2FyZElkID4gMCk7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGNhcmQsIGNhcmRJZCA9PSAwID8gQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lIDogY2FyZElkICsgXCJfXCIgKyBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgMSksIFwiVGV4YXNcIik7XG5cbiAgICAgICAgICAgIGlmICghaXNRaVBhaSkvL+acquW8g+eJjOe7k+eul+acieeJjOWei+eahOaXtuWAmeacqumAieS4reeahOeJjOWPmOeBsCzlvIPniYzpppbniYznva7ngbBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdENhcmRzLmxlbmd0aCA+PSAyICYmIHRoaXMuYWZ0ZXJDYXJkcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gdGhpcy5pc1NlbGVjdENhcmQoY2FyZElkKSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RDYXJkKGNhcmRJZCkpIGlzV0hJVEUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICBpc1dISVRFID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5rKh5pyJ5byD54mM77yM5rKh5pyJ55m96Imy54mM77yM5YiZ5YWo6YOo5Li655m9XG4gICAgICAgIGlmICghaXNRaVBhaSAmJiAhaXNXSElURSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYXJkID0gY2VsbEl0ZW0uZ2V0Q2hpbGQoXCJjYXJkXCIgKyAoaSArIDEpKS5hc0xvYWRlcjtcbiAgICAgICAgICAgICAgICBjYXJkLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc1Nob3dQYWkodXNlckxpc3Q6IFRleFVzZXJJbmZvU0RbXSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaXNTaG93ID0gZmFsc2U7XG5cbiAgICAgICAgdXNlckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnN0ID09IDEgJiYgaXRlbS5pZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uZnNob3cgPT0gdHJ1ZSAmJiBpdGVtLmlkID09IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpc1Nob3c7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1Nob3dQYWlGb3JDYXJkSW5kZXgoY2FyZElkOiBudW1iZXIsIHNob3dDYXJkSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FyZElkID4gMCAmJiBzaG93Q2FyZElkICE9IG51bGwgJiYgc2hvd0NhcmRJZCAhPSBcIlwiICYmIHNob3dDYXJkSWQuaW5kZXhPZihjYXJkSWQudG9TdHJpbmcoKSkgPj0gMDtcbiAgICB9XG5cbiAgICAvLzEgOuWxleekuuengOeJjCAwOiDkuI3lsZXnpLpcbiAgICBwcml2YXRlIGlzU2hvd1BhaUZvckNhcmRJbmRleGRlbHRlKGluZGV4OiBudW1iZXIsIHNob3dDYXJkSWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc2lnbiA9IHNob3dDYXJkSWQgLyAoaW5kZXggPD0gMCA/IDEgOiAoaW5kZXggKiAxMCkpO1xuICAgICAgICByZXR1cm4gKHNpZ24gJSAxMCkgPT0gMTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgaXNGaXJzdENhcmQoY2FyZElkOiBudW1iZXIsIGZpcnN0TGlzdDogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpcnN0TGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaXJzdExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZElkID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTZWxlY3RDYXJkKGNhcmRJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBiID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEZpdmVDYXJkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZpdmVDYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkSWQgPT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBiID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcHJpdmF0ZSBHZXRTaG93Q2FyZENvdW50KHR5cGU6IFRleGFzVHVybkVudW0pOiBudW1iZXIge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5Jbml0OlxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuMV8wOlxuICAgICAgICAgICAgICAgIGNvdW50ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuMl8zOlxuICAgICAgICAgICAgICAgIGNvdW50ID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuM180OlxuICAgICAgICAgICAgICAgIGNvdW50ID0gNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuNF81OlxuICAgICAgICAgICAgICAgIGNvdW50ID0gNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UcnVuQ29tcGFyZTpcbiAgICAgICAgICAgICAgICBjb3VudCA9IDc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVEYXRhX3NjKGRhdGE6IHNjX3RoaXN0b3J5X3RleCkge1xuICAgICAgICB0aGlzLlVwZGF0ZURhdGEoZGF0YS51bGlzdCwgZGF0YS50dWxpc3QsIGRhdGEudGFibGVJZCwgZGF0YS5iZywgZGF0YS5zaG93Q2FyZCwgZGF0YS5zYXZhTnVtLCBkYXRhLm1heFNudW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVEYXRhKHVsaXN0OiBQSW5mb1NEW10sIHR1bGlzdDogVGV4VEluZm9TRFtdLCB0YWJsZUlkOiBudW1iZXIsIGRpemh1OiBudW1iZXIsIFNob3dDYXJkOiBudW1iZXIsIGNvbGxlY3ROdW0gPSAwLCBjb2xsZWN0TWF4ID0gMCkge1xuICAgICAgICAvLyBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfYnRuQ29sbGVjdEhpc3QuZ2V0Q2hpbGQoXCJJbWFnZVwiKS5hc0xvYWRlciwgXCJjb2xsZWN0XCIsIFwiVGV4YXNcIik7XG4gICAgICAgIHRoaXMudWlfYnRuQ29sbGVjdEhpc3QuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgdGhpcy50YWJsZUlkID0gdGFibGVJZDtcbiAgICAgICAgdGhpcy5kaSA9IGRpemh1O1xuICAgICAgICB0aGlzLnNob3dDYXJkID0gU2hvd0NhcmQ7XG4gICAgICAgIHRoaXMudWlfdHh0UGFnZUluZGV4LnRleHQgPSAwICsgXCIvXCIgKyAwO1xuXG4gICAgICAgIHRoaXMudXNlcnMgPSB1bGlzdDtcbiAgICAgICAgdGhpcy5oaXN0b3J5TGlzdCA9IHR1bGlzdDtcbiAgICAgICAgdGhpcy5jdXJQYWdlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5tYXhQYWdlQ291bnQgPSB0aGlzLmhpc3RvcnlMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJTZWxlY3RQYWdlLnZpc2libGUgPSB0aGlzLm1heFBhZ2VDb3VudCA+IDE7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS5taW4gPSAxO1xuICAgICAgICB0aGlzLnVpX3NsaWRlclNlbGVjdFBhZ2UubWF4ID0gdGhpcy5tYXhQYWdlQ291bnQgPiAxID8gdGhpcy5tYXhQYWdlQ291bnQgOiAxMDA7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyU2VsZWN0UGFnZS52YWx1ZSA9IDE7XG4gICAgICAgIHRoaXMubWF4Q29sbGVjdCA9IGNvbGxlY3RNYXg7XG4gICAgICAgIHRoaXMuU2V0U2xpZGVyVmFsdWVCeUluZGV4KHRoaXMubWF4UGFnZUNvdW50KTtcbiAgICAgICAgdGhpcy51aV9jb2xsZWN0TnVtVGV4dC50ZXh0ID0gY29sbGVjdE51bSArIFwiL1wiICsgY29sbGVjdE1heDtcblxuICAgICAgICAvLyAgICBpZih0aGlzLm1heFBhZ2VDb3VudCA+IDApIHRoaXMuU2V0Q3VyUGFnZUluZGV4KDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVDb2xsZWN0RGF0YShzYXZhTnVtOiBudW1iZXIsIGluZm9JZDogc3RyaW5nLCBJc1NhdmE6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHRlbXA6IFRleFRJbmZvU0QgPSB0aGlzLmhpc3RvcnlMaXN0LmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLmluZm9JZCA9PSBpbmZvSWQgfSk7XG4gICAgICAgIHRlbXAuSXNTYXZhID0gSXNTYXZhO1xuICAgICAgICB0aGlzLnVpX2NvbGxlY3ROdW1UZXh0LnRleHQgPSBzYXZhTnVtICsgXCIvXCIgKyB0aGlzLm1heENvbGxlY3Q7XG4gICAgICAgIHRoaXMudWlfYnRuQ29sbGVjdEhpc3QuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChJc1NhdmEgPyAxIDogMCk7XG4gICAgICAgIC8vIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy51aV9idG5Db2xsZWN0SGlzdC5nZXRDaGlsZChcIkltYWdlXCIpLmFzTG9hZGVyLCBJc1NhdmEgPyBcImNvbGxlY3Rfc1wiIDogXCJjb2xsZWN0XCIsIFwiVGV4YXNcIik7XG5cbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZUxvYmJ5RGF0YSh1bGlzdDogUEluZm9TRFtdLCB0dWxpc3Q6IFRleFRJbmZvU0RbXSwgZDogbnVtYmVyLCBTaG93Q2FyZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuVXBkYXRlRGF0YSh1bGlzdCwgdHVsaXN0LCAwLCBkLCBTaG93Q2FyZCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSB2b2lkIENsZWFyKClcbiAgICAvLyB7XG5cbiAgICAvLyB9XG5cbiAgICBwdWJsaWMgR2V0VXNlcihpZDogbnVtYmVyKTogUEluZm9TRCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJzID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZCh1c2VyID0+IHsgcmV0dXJuIHVzZXIudWlkID09IGlkIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgR2V0VXNlclNob3dDYXJkKGdhaW5EYXRhOiBUZXhVc2VySW5mb1NEKSB7XG4gICAgICAgIGlmIChnYWluRGF0YS5pZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICYmIGdhaW5EYXRhLm93bmMgIT0gbnVsbCAmJiBnYWluRGF0YS5vd25jLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUgJiYgaSA8IGdhaW5EYXRhLm93bmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYXJkcy5wdXNoKGdhaW5EYXRhLm93bmNbaV0pOy8v546p5a625p+l55yL5L2Z54mM5ZCO55qE5YWs54mMXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgRGVhbENhcmRCeURlZmF1bHQoZ2FpbkRhdGE6IFRleFVzZXJJbmZvU0QpIHtcbiAgICAgICAgdGhpcy5maXJzdENhcmRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMiAmJiBpIDwgZ2FpbkRhdGEucC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5maXJzdENhcmRzLnB1c2goZ2FpbkRhdGEucFtpXSk7Ly/pppbniYxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWZ0ZXJDYXJkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUgJiYgaSA8IHRoaXMucGFnZVNkLmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJDYXJkcy5wdXNoKHRoaXMucGFnZVNkLmNbaV0pOy8v57O757uf54mMXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+eKtuaAgSDlvIPniYwxOyDlvIDniYwyOyDmnKrlvIPniYzmnKrlvIDniYwzOyDlvIPniYzliY3kuKTlvKDniYzlj6rmmL7npLrog4zpnaJcbiAgICBwdWJsaWMgR2V0VXNlckFjdGlvblN0cmluZyh0eXBlOiBUZXhhc1R1cm5FbnVtLCBnaXZldXA6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGdpdmV1cCA9PSAxKSB7XG4gICAgICAgICAgICBzdHIgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzk1KTsvL+W8g+eJjFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLkluaXQ6XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IFwiLTFcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlR1cm4xXzA6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UdXJuMl8zOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFRleGFzVHVybkVudW0uVHVybjNfNDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUZXhhc1R1cm5FbnVtLlR1cm40XzU6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVGV4YXNUdXJuRW51bS5UcnVuQ29tcGFyZTpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM4OSk7Ly/lvIDniYxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcHVibGljIENsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBudW0gPSAwO1xuICAgICAgICBudW0gPSB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlO1xuICAgICAgICBudW0gPSB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBIaWRlQ2hpbGRyZW4obm9kZTpjYy5Ob2RlKXtcblxuICAgIC8vIH1cblxuXG59Il19