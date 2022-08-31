
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasUserComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee00eOPNWZE6qqBZueAoZMN', 'TexasUserComp');
// Games/texas/script/View/TexasUserComp.ts

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
exports.UserConnectState = exports.TexasUserHandleState = void 0;
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var CardRedbetComp_1 = require("./CardRedbetComp");
var TexasNetData_1 = require("../Model/TexasNetData");
var TexasTable_1 = require("./TexasTable");
var Texas_1 = require("../Model/Texas");
var UIStatePos_1 = require("./UIStatePos");
var UIStateBase_1 = require("./UIStateBase");
var TexasChatComp_1 = require("./TexasChatComp");
var UIMoveMono_1 = require("./UIMoveMono");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var TexasAllinStart_1 = require("../TexasSpine/TexasAllinStart");
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// @ccclass
var TexasUserComp = /** @class */ (function (_super) {
    __extends(TexasUserComp, _super);
    function TexasUserComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // public ui_eftRoot:fgui.GComponent = null;
        // public ui_eft_rotate:fgui.GComponent = null;    
        _this.rectTransform = null; //RectTransform
        _this.ui_ImgFreeUser = null;
        _this.ui_ImgFreeUserBtn = null;
        _this.curCardIndex = -1;
        _this.tablecenter = null;
        _this.self = false; //是否是玩家自己
        _this.userConnectState = UserConnectState.free;
        _this.isWatch = false; //是否是观众
        _this.Lose = false; //是否输了
        _this.isGiveUp = false; //弃牌
        _this.Aciton = false; //是否轮到自己行动
        _this.handleState = TexasUserHandleState.invalid;
        _this.ui_lose = null; //比牌失败提示
        _this.ui_banker = null; //比牌失败提示
        _this.ui_ready = null; //准备
        _this.ui_headImage = null;
        _this.ui_VIPFrame = null; //vip头像框
        _this.ui_touxiang = null;
        _this.ui_touxiangBtn = null;
        _this.ui_nameText = null;
        _this.ui_statusbg = null;
        _this.ui_txtstatus = null;
        _this.ui_goldBg = null;
        _this.ui_txtGold = null;
        _this.ui_ImgChip = null;
        _this.ui_UserCards = null;
        _this.ui_cardNode = null;
        _this.ui_cardNode1 = null;
        _this.ui_cardNode2 = null;
        _this.ui_defaultCards = null;
        _this.ui_defaultCardsMove = null;
        _this.ui_pos = null; //筹码生成点
        _this.ui_endtimetips = null; //计时钟 
        _this.ui_ImageF = null;
        _this.ui_endtimetipsText = null; //计时
        _this.ui_gambleBg = null;
        _this.ui_gambleIcon = null;
        _this.ui_txtGamble = null; // 当前下注
        _this.isIns = false;
        _this.ui_txtgambletemp = null;
        _this.ui_texastype = null;
        _this.ui_texastype1 = null; //自己牌型
        _this.ui_texastype2 = null; //别人牌型
        _this.ui_txttexastype = null; //Texas的牌类型
        _this.ui_txttexastype1 = null;
        _this.ui_txttexastype2 = null;
        _this.ui_template = null;
        _this.MAXCD = 15;
        _this.cd = 15;
        _this.ui_userInfo = null;
        _this.ui_topTipBg = null; //头顶显示的通用提示文本
        _this.ui_txtTopTip = null;
        _this.ui_watchBg = null; // 观战
        _this.ui_waitBgImage = null;
        _this.ui_btnmicrophone = null;
        _this.ui_waitBg = null;
        _this.ui_txtWait = null;
        _this.ui_insBg = null;
        _this.ui_txtIns = null;
        _this.ui_insWinPerBg = null;
        _this.ui_winPerTxt = null;
        _this.ui_bgChat = null;
        _this.ui_txtChatSound = null;
        _this.ui_imgEmoj = null;
        _this.allinSpine = null;
        _this.ui_animAllin = null;
        _this.allinSpineKeep = null;
        _this.ui_allinImg = null;
        _this.ui_animAllinKeep = null;
        _this.ui_youwin = null;
        // public ui_txtWatch:fgui.GTextField = null;
        _this.ui_sitDownText = null;
        _this.ui_takeInApplyPanel = null;
        _this.ui_takeInApplyTxt = null;
        _this.defaultCardsMoveCards = [];
        _this.defaultCardsPosCards = [];
        _this.fillFun = null;
        _this.callBack = null;
        _this.onLoadEnd = false;
        _this.endTime = 0;
        _this.tempAudio = null;
        return _this;
    }
    Object.defineProperty(TexasUserComp.prototype, "Empty", {
        /// <summary>
        /// 该位置是否是空的
        /// </summary>
        get: function () { return this.player == null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TexasUserComp.prototype, "loginModel", {
        get: function () {
            return F_TexasViewCtr_1.default.instance.Model;
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// 初始化
    /// </summary>
    TexasUserComp.prototype.MyStart = function (_localpos, _tableCenter, _callBack) {
        this.mystart = true;
        this.localpos = _localpos;
        this.tablecenter = _tableCenter;
        this.callBack = _callBack;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    TexasUserComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    // private statusbgPos:UIStatePos;
    TexasUserComp.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.initCards();
        this.allinSpine = new TexasAllinStart_1.default(this.ui_animAllin.node);
        this.addChild(this.allinSpine);
        this.allinSpineKeep = new TexasAllinStart_1.TexasAllinKeep(this.ui_animAllinKeep.node);
        this.addChild(this.allinSpineKeep);
        this.bankerPos = this.ui_banker.node.addComponent(UIStatePos_1.default);
        this.bankerPos.fguiComponent = this.ui_banker.asCom;
        this.bankerPos.MyStart();
        this.cardNodePos = this.ui_cardNode.node.addComponent(UIStatePos_1.default);
        this.cardNodePos.fguiComponent = this.ui_cardNode.asCom;
        this.cardNodePos.MyStart();
        // this.insBgPos = this.ui_insBg.node.addComponent(UIStatePos);
        // this.insBgPos.fguiComponent = this.ui_insBg.asCom;
        // this.insBgPos.MyStart();
        // this.defaultCardsPos = this.ui_defaultCards.node.addComponent(UIStatePos);
        // this.defaultCardsPos.fguiComponent = this.ui_defaultCards.asCom;
        // this.defaultCardsPos.MyStart();
        this.gambleIconPos = this.ui_gambleIcon.node.addComponent(UIStatePos_1.default);
        this.gambleIconPos.fguiComponent = this.ui_gambleIcon.asCom;
        this.gambleIconPos.MyStart();
        // this.insWinPerBgPos = this.ui_insWinPerBg.node.addComponent(UIStatePos);
        // this.insWinPerBgPos.fguiComponent = this.ui_insWinPerBg.asCom;
        // this.insWinPerBgPos.MyStart();
        this.bgChatPos = this.ui_bgChat.node.addComponent(UIStatePos_1.default);
        this.bgChatPos.fguiComponent = this.ui_bgChat.asCom;
        this.bgChatPos.MyStart();
        // this.defaultCardsMovePos = this.ui_defaultCardsMove.node.addComponent(UIStatePos)
        // this.defaultCardsMovePos.fguiComponent = this.ui_defaultCardsMove.asCom;
        // this.defaultCardsMovePos.MyStart();
        this.gambleBgPos = this.ui_gambleBg.node.addComponent(UIStatePos_1.default);
        this.gambleBgPos.fguiComponent = this.ui_gambleBg.asCom;
        this.gambleBgPos.MyStart();
        this.txtGamblePos = this.ui_txtGamble.node.addComponent(UIStatePos_1.default);
        this.txtGamblePos.fguiComponent = this.ui_txtGamble.asCom;
        this.txtGamblePos.MyStart();
        // this.statusbgPos = this.ui_statusbg.node.addComponent(UIStatePos)
        // this.statusbgPos.fguiComponent = this.ui_statusbg.asCom;
        // this.statusbgPos.MyStart();
        this.ImgChipMove = this.ui_ImgChip.node.addComponent(UIMoveMono_1.UIMoveMono);
        this.ImgChipMove.fguiComponent = this.ui_ImgChip.asCom;
        // this.ImgChipMove.MyStart();
        // this.defaultCardsMove = this.ui_defaultCardsMove.node.addComponent(UIMoveMono);
        // this.defaultCardsMove.fguiComponent = this.ui_defaultCardsMove.asCom;
        // this.defaultCardsMove.MyStart();
        this.statusbgState = this.ui_statusbg.node.addComponent(UIStateBase_1.default);
        this.statusbgState.fguiComponent = this.ui_statusbg.asCom;
        this.ui_statusbg.node.active = true;
        this.statusbgState.MyStart();
        this.ui_banker.node.active = true;
        this.ui_cardNode.node.active = true;
        // this.ui_insBg.node.active = true;
        // this.ui_defaultCards.node.active = true;
        this.ui_gambleIcon.node.active = true;
        this.ui_insWinPerBg.node.active = true;
        this.ShowInsWinPer_bool(false);
        this.ui_bgChat.node.active = true;
        // this.ui_defaultCardsMove.node.active = true;
        // this.ui_gambleBg.node.active = true;
        // this.ui_ImgChip.node.active = true;
        this.ImgChipMove.Hide();
        this.bgChatPos.Hide();
        this.ui_defaultCardsMove.visible = false;
        this.InitImage();
        this.InitLanguage();
        this.rectTransform = this.fguiComponent; //.GetComponent<RectTransform> ();
        // this.defaultCardsMove.toTs = this.tablecenter;
        this.ui_defaultCards.visible = true;
        this.ui_gambleBg.node.getComponent(UIStatePos_1.default).StateToActive = false;
        // this.ui_insBg.node.getComponent(UIStatePos).StateToActive = false;
        // this.ui_insWinPerBg.node.getComponent(UIStatePos).StateToActive = false;
        // this.chatEmojPos = ui_imgEmoj.GetComponent<UIStatePos> ();
        // if (this.localpos == 1) this.self = true;
        this.ui_banker.node.getComponent(UIStatePos_1.default).Hide(); //false;
        this.ClearUser();
        this.ResetAllUI();
        this.InitEvents();
        this.SetPosInView(this.localpos);
        this.update_UserInfo(null);
        if (this.callBack != null)
            this.callBack();
        this.ui_txtgambletemp.text = "";
        this.ui_txttexastype.text = "";
        this.ui_texastype.visible = false;
        this.ui_template.visible = false;
        this.ui_gambleBg.visible = false;
    };
    TexasUserComp.prototype.AutoSetGoProperty = function () {
    };
    TexasUserComp.prototype.InitLanguage = function () {
        // this.ui_txtWatch.text = TexasLanguage.getLanguageById(1291);//观战
        this.ui_sitDownText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1292); //坐下
        this.ui_txtWait.text = TexasLanguage_1.TexasLanguage.getLanguageById(2188); //占座中
    };
    TexasUserComp.prototype.InitImage = function () {
        // this.ui_waitBgImage.url = "ui://texas/guanzhan_2x"+ToolsEx.GetImageLanguageSuf();
        // Res.Singleton.SetImageSprite(ui_watchBg.GetComponent<Image>(), "whirl_gaming", "guanzhan_2x" + ToolsEx.GetImageLanguageSuf());
    };
    TexasUserComp.prototype.InitEvents = function () {
        var _this = this;
        this.ui_ImgFreeUserBtn.clearClick();
        // this.ui_ImgFreeUserBtn.onClick(() => {
        //     let myPos = F_TexasViewCtr.instance.Model._posServer;
        //     // console.log("ui_ImgFreeUserBtn==========myPos:" + myPos);
        //     if (this.serverpos <= 0 && (myPos <= 0 || myPos > 10) && this.userConnectState != UserConnectState.keepSeat) {
        //         //留座的情况下不能点击其他座位
        //         F_TexasViewCtr.instance.view.CheckAutoSitDown(this.localpos);
        //     }
        // });
        this.ui_touxiangBtn.clearClick();
        this.ui_touxiangBtn.onClick(function () {
            var myPos = F_TexasViewCtr_1.default.instance.Model._posServer;
            if (_this.serverpos <= 0 && (myPos <= 0 || myPos > 10) && _this.userConnectState != UserConnectState.keepSeat) {
                //留座的情况下不能点击其他座位
                F_TexasViewCtr_1.default.instance.view.CheckAutoSitDown(_this.localpos);
            }
            else {
                F_TexasViewCtr_1.default.instance.view.ShowUIUserInfo(_this.player, _this.localpos);
            }
        });
    };
    TexasUserComp.prototype.initCards = function () {
        this.firstCards = [];
        this.afterCards = [];
        this.emojiSpNum = [2, 8, 9, 2, 2, 4, 5, 9, 5, 2, 2, 12, 4, 3, 4, 9, 3, 4, 4, 3];
        this.emojiSprite = [];
        this.curCardIndex = -1;
        this.ui_UserCards.visible = false;
        // this.ui_Cards.x = 0;
        this.cardList = [];
        this.cardList1 = [];
        this.cardList2 = [];
        this.defaultCards = [];
        var cardObj = null;
        var card;
        for (var i = 0; i < 2; ++i) {
            cardObj = this.ui_cardNode1.getChild("ucard" + (i + 1)).asCom;
            card = cardObj.node.getComponent(CardRedbetComp_1.default);
            if (card == null) {
                card = cardObj.node.addComponent(CardRedbetComp_1.default);
                card.fguiComponent = cardObj;
                cardObj.node.active = true;
            }
            card.Init(false);
            this.cardList1.push(card);
        }
        for (var i = 0; i < 2; ++i) {
            cardObj = this.ui_cardNode2.getChild("ucard" + (i + 1)).asCom;
            card = cardObj.node.getComponent(CardRedbetComp_1.default);
            if (card == null) {
                card = cardObj.node.addComponent(CardRedbetComp_1.default);
                card.fguiComponent = cardObj;
                cardObj.node.active = true;
            }
            card.Init(false);
            this.cardList2.push(card);
        }
        this.cardList = this.cardList1;
        this.ui_cardNode = this.ui_cardNode1;
        this.ui_texastype = this.ui_texastype1;
        this.ui_txttexastype = this.ui_txttexastype1;
        for (var i = 0; i < 2; i++) {
            cardObj = this.ui_defaultCards.getChild("defaultCard" + (i + 1)).asCom;
            card = cardObj.node.getComponent(CardRedbetComp_1.default);
            if (card == null) {
                card = cardObj.node.addComponent(CardRedbetComp_1.default);
                card.fguiComponent = cardObj;
                cardObj.node.active = true;
            }
            card.Init(false);
            card.Show();
            this.defaultCards.push(card);
        }
    };
    /// <summary>
    /// 玩家离开，隐藏玩家数据,清理数据并重置UI
    /// </summary>
    TexasUserComp.prototype.ClearUser = function () {
        this.ResetUserData();
        this.ui_statusbg.visible = false;
        this.ShowUIGamble(false);
        //重置UI
        this.UpdateUserConnectState(UserConnectState.free);
        this.StopClock();
        this.StopApplyClock();
    };
    TexasUserComp.prototype.RemoveCardListener = function () {
        if (this.cardList != null) {
            this.cardList.forEach(function (item) {
                item.getChild("CardButton").asButton.clearClick();
            });
        }
    };
    TexasUserComp.prototype.AddCardLisenter = function () {
        var _this = this;
        if (this.cardList == null) {
            return;
        }
        var _loop_1 = function () {
            var card = this_1.cardList[i];
            card.getChild("CardButton").asButton.clearClick();
            card.getChild("CardButton").asButton.onClick(function () {
                if (F_TexasViewCtr_1.default.instance.Model.isGaming && card.Value > 0 && _this.self) {
                    F_TexasViewCtr_1.default.instance.cs_showmycard_tex(card.Value, card._showType == 0 ? 1 : 0);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 2 && i < this.cardList.length; i++) {
            _loop_1();
        }
    };
    TexasUserComp.prototype.ResetUserData = function () {
        //清理数据   
        // if (this.self) {
        //     console.log ("清空自己的玩家数据 ");
        // }
        this.handleState = TexasUserHandleState.invalid;
        this.userInfo = null;
        if (this.player) {
            // console.error("pos:"+this.localpos + "清除玩家:" + this.player._n)
        }
        this.player = null;
        this.self = false;
        this.SetBanker(false);
        this.isGiveUp = false;
        //console.log(GiveUp + " give up " + GetPlayerName());
        this.ui_nameText.text = "";
        this.ui_goldBg.visible = false;
        this.serverpos = -1;
        this.openCards = null;
        this.firstCards = [];
        this.afterCards = [];
        this.ui_headImage.visible = false;
        this.ui_VIPFrame.visible = false;
        this.ShowInsWinPer_bool(false);
        this.showUIEftAllIn(false);
        UIUtil_1.UIUtil.loadImage(this.ui_headImage, "new_sitdown", "Texas");
    };
    TexasUserComp.prototype.GetPlayerName = function () {
        return this.player != null ? this.player._n : this.localpos.toString();
    };
    //每局开始的时候重置数据和UI
    TexasUserComp.prototype.ResetPlayingDataAndUI = function () {
        this.ResetPlayingData();
        this.ResetPlayingUI();
    };
    //重置每局的数据
    TexasUserComp.prototype.ResetPlayingData = function () {
        this.curCardIndex = -1;
        this.curGamble = 0;
        this.isIns = false;
        this.allinGamble = 0;
        this.isGiveUp = false;
        //console.log(GiveUp+"give up " + GetPlayerName());
        this.SetBanker(false);
        this.openCards = null;
        this.firstCards = [];
        this.afterCards = [];
    };
    TexasUserComp.prototype.ResetAllUI = function () {
        this.ResetPlayingUI();
        this.ShowUIWatch(false);
        this.ShowUIWiatTakeIn(false);
        if (F_TexasViewCtr_1.default.instance.Model.openV > 0) {
            // Res.Singleton.SetImageSprite(ui_goldBg, "whirl_gaming", "vedioGold_bg");
            this.ui_goldBg.setSize(130, 36); //.GetComponent<RectTransform>().sizeDelta = new Vector2(130, 36);
            // this.ui_goldBg.node.position = cc.v3(0, -75.1,0);
        }
    };
    //重置UI
    TexasUserComp.prototype.ResetPlayingUI = function () {
        //return;// 没有服务器时方便测试
        //隐藏所有玩家相关的可以重置的UI
        this.showUIBanker(false);
        this.showUICards(false);
        this.ui_UserCards.visible = true;
        this.showUIDisconnect(false);
        this.ShowUIGamble(false);
        this.showUILose(false);
        this.showUIMicro(false);
        this.ShowUIUserHandleState(-1);
        this.updateInsStateText(-1);
        this.ShowUIReady(false);
        this.ShowUITopTip(null);
        this.ShowUIWatch(this.IsWatch() && !this.IsKeep());
        this.ShowUIWiatTakeIn(this.IsWaitToTakeIn() && !this.IsKeep());
        this.showUIEftAllIn(false);
        this.showUIEftYouWin(false);
        this.StopUIEftRotate();
        this.ShowTexasType(false);
        this.RemoveCardListener();
        this.ShowInsWinPer_bool(false);
        this.ShowInsStaus(false);
    };
    TexasUserComp.prototype.GameOver = function (_money) {
        this.UpdateMoney(_money);
        this.StopClock();
    };
    TexasUserComp.prototype.UpdateMoney = function (_money) {
        if (_money === void 0) { _money = -999999; }
        if (this.player == null) {
            return;
        }
        this.player.gold = _money == -999999 ? this.player.gold : _money;
        //ui_txtGold.text = UIUtil.formatNumber(player.gold);
        this.SetRemainMoney(this.player.gold);
        //打个补丁
        if (this.self) {
            F_TexasViewCtr_1.default.instance.Model.MyEndMoney = UIUtil_1.UIUtil.NumberToInt(this.player.gold);
        }
        //更新可带出金币
        F_TexasViewCtr_1.default.instance.view.IsCanOutGold();
    };
    TexasUserComp.prototype.SetRemainMoney = function (remainMoney) {
        this.ui_goldBg.visible = true;
        this.ui_txtGold.text = Texas_1.Texas.formatNumber100(UIUtil_1.UIUtil.NumberToInt(remainMoney)) + "";
    };
    //下注 都是由服务器返回的每次下注的数字,需要客户端累加(德州扑克不累加)
    TexasUserComp.prototype.SetGamble = function (gambleMoney) {
        this.ui_txtGamble.text = UIUtil_1.UIUtil.formatNumber100ToK(gambleMoney) + "";
    };
    TexasUserComp.prototype.SetBanker = function (_isbanker) {
        this.isbanker = _isbanker;
        this.showUIBanker(_isbanker);
    };
    /// <summary>
    /// 更新玩家信息
    /// </summary>
    TexasUserComp.prototype.update_UserInfo = function (sd) {
        if (sd == null) {
            this.ui_ready.visible = false;
            this.player = null;
            this.ui_txtgambletemp.text = "";
            this.ui_txttexastype.text = "";
            this.ui_texastype.visible = false;
            this.ui_template.visible = false;
            this.self = false;
            this.ClearUser();
            return;
        }
        if (this.userInfo == null || this.userInfo.py.userid != sd.py.userid) {
            this.tempAudio = null;
        }
        this.ResetPlayingDataAndUI();
        this.userInfo = sd;
        this.player = sd.py;
        console.log("刷新用户信息" + this.fguiComponent.name);
        //判断是不是用户本人
        this.self = sd.py.userid == this.loginModel.mPlayerModel.userid;
        if (this.self) {
            console.log("设置自己的玩家数据 " + sd.pos);
            this.ui_cardNode = this.ui_cardNode1;
            this.ui_texastype = this.ui_texastype1;
            this.ui_txttexastype = this.ui_txttexastype1;
            this.cardList = this.cardList1;
            this.ui_cardNode1.visible = true;
        }
        else {
            // this.ui_texastype.visible = false;
            // this.ui_cardNode.visible = false;
            this.ui_cardNode = this.ui_cardNode2;
            this.ui_texastype = this.ui_texastype2;
            this.ui_txttexastype = this.ui_txttexastype2;
            this.cardList = this.cardList2;
            this.ui_cardNode2.visible = true;
        }
        this.serverpos = sd.pos;
        this.ui_goldBg.visible = true;
        this.ui_txtGold.text = Texas_1.Texas.formatNumber100(sd.py.gold) + "";
        var isDisConnect = sd.isDis == 1;
        this.showduanxian(isDisConnect);
        var isKeepSeat = sd.isK > 0; //留座 --FIXME
        var connectState = TexasUserComp.GetUserConnectState(this.serverpos, isKeepSeat, isDisConnect);
        this.UpdateUserConnectState(connectState);
        if (this.self && F_TexasViewCtr_1.default.instance.Model.mPlayerModel != null && F_TexasViewCtr_1.default.instance.Model.mPlayerModel.wechat != null) {
            UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, F_TexasViewCtr_1.default.instance.Model.mPlayerModel.wechat.wName, 6);
            // console.log("dddd1：" + F_TexasViewCtr.instance.Model.mPlayerModel.wechat.wicon);
            this.ui_headImage.visible = true;
            this.ui_VIPFrame.visible = true;
            UIUtil_1.UIUtil.loadImage(this.ui_headImage, F_TexasViewCtr_1.default.instance.Model.mPlayerModel.wechat.wicon);
            UIUtil_1.UIUtil.loadImage(this.ui_VIPFrame, "VIP" + F_TexasViewCtr_1.default.instance.Model.mPlayerModel._vlv, "Texas");
            console.error(F_TexasViewCtr_1.default.instance.Model.mPlayerModel._n + "VIP等级：" + F_TexasViewCtr_1.default.instance.Model.mPlayerModel._vlv);
        }
        else {
            if (this.player.uremark != null && this.player.uremark.remarkName != "") {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player.uremark.remarkName);
            }
            else {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, sd.py.wechat.wName, 6);
            }
            this.ui_headImage.visible = true;
            this.ui_VIPFrame.visible = true;
            console.error(this.player._n + "VIP等级：" + this.player._vlv);
            UIUtil_1.UIUtil.loadImage(this.ui_headImage, this.userInfo.py.wechat.wicon);
            UIUtil_1.UIUtil.loadImage(this.ui_VIPFrame, "VIP" + this.player._vlv, "Texas");
        }
        if (this.self && F_TexasViewCtr_1.default.instance.Model.CheckIsLose(this.player.gold)) {
            this.showLose();
        }
    };
    TexasUserComp.GetUserConnectState = function (serverPos, isKeepSeat, isDisConnect) {
        if (isKeepSeat === void 0) { isKeepSeat = false; }
        if (isDisConnect === void 0) { isDisConnect = false; }
        var connectState = UserConnectState.free;
        //isKeepSeat = false;//留座 --FIXME
        if (isKeepSeat) {
            connectState = UserConnectState.keepSeat;
        }
        else {
            if (isDisConnect) {
                connectState = UserConnectState.disconnect;
            }
            else {
                var isWatch = F_TexasViewCtr_1.default.instance.Model.IsPosWatch(serverPos);
                var isWaitTakeIn = F_TexasViewCtr_1.default.instance.Model.IsPosWaitToTakeIn(serverPos);
                if (isWatch) {
                    connectState = UserConnectState.watch;
                }
                else if (isWaitTakeIn) {
                    connectState = UserConnectState.waitTakeIn;
                }
                else {
                    connectState = UserConnectState.wait;
                }
                //console.log("isw atch:" + serverPos + "ddd:" + isWatch); --temp
            }
        }
        return connectState;
    };
    TexasUserComp.prototype.ResetUserCompUI = function () {
        this.ShowUIReady(false);
        this.ShowLose(false);
        this.Show();
        this.initCards();
    };
    TexasUserComp.prototype.showduanxian = function (b) {
        // //ui_disconnect.gameObject.SetActive (b);
    };
    TexasUserComp.prototype.showLose = function () {
        return;
        // ////if (!lose) return;
        this.ui_lose.visible = true;
        this.ui_ready.visible = false;
        this.ui_banker.visible = false;
    };
    TexasUserComp.prototype.Replace = function () {
        this.ResetUserCompUI();
        this.ResetPlayingUI();
        if (this.player != null) {
            UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player._n, 6);
        }
        this.ui_goldBg.visible = true;
        this.ui_txtGold.text = Texas_1.Texas.formatNumber100(this.player.gold) + "";
    };
    //显示公开的牌,初始从三张,和第四章开始
    TexasUserComp.prototype.ShowOpenCard = function (cards, cardIndex) {
        if (cardIndex === void 0) { cardIndex = 3; }
        if (cards == null) {
            return;
        }
        console.log("显示公开的牌,初始从三张,和第四章开始userPos:" + this.localpos + " cards:" + cards.length);
        this.ui_UserCards.visible = true;
        for (var i = 0; i < cards.length; i++) {
            if (i + 2 <= cardIndex) {
                this.SetCardVal(i + 2, cards[i]);
            }
        }
    };
    // public  SetCardHide (cardIndex:number) {
    //     let card:CardRedbetComp = this.cardList[cardIndex];
    //     card.ui_val.visible = false;
    // }
    TexasUserComp.prototype.SetCardVal = function (cardIndex, value) {
        var card = this.cardList[cardIndex];
        if (card)
            this.SetCardVal_pub(card, value);
    };
    TexasUserComp.prototype.SetCardVal_pub = function (card, value) {
        if (!this.isGiveUp) {
            card.ResetColor();
        }
        else {
            card.SetColorGary();
        }
        if (this.self) {
            F_TexasViewCtr_1.default.instance.ShowOpenTip(value <= 0);
        }
        card.SetVal(value);
        card.Show();
    };
    /// <summary>
    /// 保险模式开始显示不是自己的保险玩家的首牌
    /// </summary>
    /// <param name="cards"></param>
    TexasUserComp.prototype.ShowInsurancerCard = function (cards) {
        if (!this.self) {
            this.openCards = [];
            UIUtil_1.UIUtil.Concat(this.openCards, cards);
            this.ShowCard(cards);
        }
    };
    /// <summary>
    /// 显示扑克牌
    /// </summary>
    /// <param name="cards"></param>
    TexasUserComp.prototype.ShowCard = function (cards) {
        if (cards.length < this.cardList.length) {
            console.log("数据异常：" + cards.length + "," + this.cardList.length);
            return;
        }
        this.ui_UserCards.visible = true;
        for (var i = 0; i < this.cardList.length; i++) {
            this.cardList[i].visible = true;
            this.cardList[i].ResetColor();
            this.cardList[i].SetVal(cards[i]); // BindCard(cardList[i], cards[i], i);
        }
    };
    /// <summary>
    /// 显示保险玩家的获胜百分比,五张公牌的时候不显示，胜率小于0的时候不显示
    /// </summary>
    /// <param name="per"></param>
    TexasUserComp.prototype.ShowInsWinPer_num = function (per) {
        console.log("显示保险玩家的获胜百分比,五张公牌的时候不显示，胜率小于0的时候不显示");
        var isShow = per >= 0 && F_TexasViewCtr_1.default.instance.Model._CommonCard != null && F_TexasViewCtr_1.default.instance.Model._CommonCard.length != 5;
        this.ShowInsWinPer_bool(isShow);
        if (isShow)
            this.ui_winPerTxt.text = per + "%";
    };
    /// <summary>
    /// 显示胜率的时候，最后比牌根据玩家输赢显示100% 0%
    /// </summary>
    /// <param name="val"></param>
    TexasUserComp.prototype.ShowWinPer = function (val) {
        this.ui_winPerTxt.text = val > 0 ? 100 + "%" : 0 + "%";
    };
    /// <summary>
    /// 显示扑克牌
    /// </summary>
    /// <param name="cards"></param>
    TexasUserComp.prototype.ShowMaxCard = function (cards) {
        this.ShowTexasType(true);
        this.ui_texastype.visible = true;
        this.ui_txttexastype.text = TexasTable_1.default.GetNameByType(Texas_1.Texas.GetTexasType(cards));
        UIUtil_1.UIUtil.Concat(this._maxCard, cards);
        this.ui_UserCards.visible = true;
    };
    TexasUserComp.prototype.ShowTexasType = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_texastype.visible = isShow;
        if (isShow)
            console.log("==========this.ui_texastype = " + this.ui_texastype.node.position);
    };
    TexasUserComp.prototype.BindCard = function (card, poker, _curIndex, isSetPos) {
        if (isSetPos === void 0) { isSetPos = true; }
        card.Init(false);
        this.SetCardVal_pub(card, poker);
        card.Show();
        if (isSetPos) {
            card.ui_val.setScale(1, 1);
            // card.ui_val.setPosition(0,0);
        }
        if (this.self && F_TexasViewCtr_1.default.instance.Model._scards != null && F_TexasViewCtr_1.default.instance.Model._scards.length > 0) //显示自己牌的秀牌状态
         {
            F_TexasViewCtr_1.default.instance.Model._scards.forEach(function (temp) {
                if (temp.cpos == _curIndex)
                    card.ShowEye(true);
            });
        }
    };
    /// <summary>
    /// 显示弃牌
    /// </summary>
    TexasUserComp.prototype.ShowGiveUp = function () {
        this.ui_txtgambletemp.text = "";
        this.isGiveUp = true;
        if (this.self) {
            this.ui_defaultCardsMove.visible = false;
        }
        else {
            this.ui_defaultCardsMove.visible = true;
            for (var i = 0; i < 2; i++) {
                var card = this.defaultCardsMoveCards[i];
                if (!card) {
                    console.log("name = " + this.fguiComponent.name);
                    card = this.ui_defaultCardsMove.getChild("defaultCard1Move").asCom;
                }
                if (i == 1) {
                    card.visible = false;
                    break;
                }
                UIUtil_1.UIUtil.loadImage(card.getChild("val").asLoader, CardRedbetComp_1.default.cardTypeName, "Texas");
                card.node.position = cc.v3(0, 0, 0);
                var endV = this.convertNodeSpaceAR(card.node, this.tablecenter.node);
                var _self = this;
                card.node.runAction(cc.sequence(cc.moveTo(0.3, endV).easing(cc.easeQuadraticActionOut()), cc.callFunc(function () {
                    _self.ui_defaultCardsMove.visible = false;
                })));
            }
        }
        // this.defaultCardsMove.speed = 2;
        // this.defaultCardsMove.isFade = true;
        // this.defaultCardsMove.Move ();
        this.UpdateGiveUpState();
    };
    TexasUserComp.prototype.UpdateGiveUpState = function () {
        this.isGiveUp = true;
        for (var i = 0; i < this.cardList.length; i++) {
            this.cardList[i].SetColorGary();
        }
        for (var i = 0; i < this.defaultCards.length; i++) {
            this.defaultCards[i].Hide(); //弃牌后首牌隐藏
        }
        this.ui_headImage.color = cc.Color.GRAY;
        this.ui_touxiang.color = cc.Color.GRAY;
        this.ui_gambleIcon.color = cc.Color.GRAY;
        this.updateHandleStateText(TexasUserHandleState.giveUp);
        this.ShowInsStaus(false);
        this.ShowInsWinPer_bool(false);
    };
    TexasUserComp.prototype.showDelay = function (delayTime) {
        if (this.IsPlaying() && F_TexasViewCtr_1.default.instance.Model.isGaming && !this.isGiveUp) {
            if (delayTime > 5) {
                AudioManager_1.AudioManager.Singleton.stopEffect("texas_timeout");
            }
            this.ShowClock(delayTime, delayTime);
        }
    };
    /// <summary>
    /// 行动
    /// </summary>
    TexasUserComp.prototype.Execute = function (turnChange, cd, delayTime) {
        if (cd === void 0) { cd = 0; }
        if (delayTime === void 0) { delayTime = 0; }
        this.Aciton = true;
        if (this.self) {
            // let timer = setTimeout(() => {
            F_TexasViewCtr_1.default.instance.view.MineExecute(this.self, turnChange);
            // }, 500)
            // TimeInfoMgrTex.instance.addTimerNoCallback(timer);
        }
        else {
            F_TexasViewCtr_1.default.instance.view.MineExecute(this.self, turnChange);
        }
        if (this.player.uremark != null && this.player.uremark.remarkName != "") {
            UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player.uremark.remarkName);
        }
        else {
            if (this.player.wechat != null) {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player.wechat.wName);
            }
            else {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player._n);
            }
        }
        if (this.IsPlaying() && F_TexasViewCtr_1.default.instance.Model.isGaming && !this.isGiveUp) {
            console.log("Execute this.IsPlaying() && F_TexasViewCtr cd = ", cd);
            console.log("Execute this.IsPlaying() && F_TexasViewCtr delayTime = ", delayTime);
            cd -= delayTime;
            cd = Math.floor(cd);
            this.ShowClock(cd == 0 ? this.MAXCD - delayTime : cd, cd == 0 ? this.MAXCD - delayTime : cd);
        }
    };
    /// <summary>
    /// 保险行动
    /// </summary>
    /// <param name="turnChange"></param>
    /// <param name="isFirstTurn"></param>
    /// <param name="isInsurance"></param>
    TexasUserComp.prototype.InsuranceExecute = function () {
        console.log("保险行动");
        this.Aciton = true;
        F_TexasViewCtr_1.default.instance.view.MineInsuranceExecute(this.self);
        if (this.player.uremark != null && this.player.uremark.remarkName != "") {
            UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player.uremark.remarkName);
        }
        else {
            if (this.player.wechat != null) {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player.wechat.wName);
            }
            else {
                UIUtil_1.UIUtil.SetLimitTxt(this.ui_nameText, this.player._n);
            }
        }
        if (this.IsPlaying() && F_TexasViewCtr_1.default.instance.Model.isGaming && !this.isGiveUp) {
            this.ShowClock(F_TexasViewCtr_1.default.instance.Model.lefttime, F_TexasViewCtr_1.default.instance.Model.lefttime);
            if (!this.self) {
                this.ShowInsStaus(true);
                this.ui_txtIns.text = TexasLanguage_1.TexasLanguage.getLanguageById(1424); //购买中
            }
        }
    };
    //显示自己当前手的最大牌
    TexasUserComp.prototype.ShowMaxCards = function (selectCardsList, maxCards) {
        var _this = this;
        this.cardList.forEach(function (temp) {
            //弃牌玩家手牌始终置灰
            // console.log(this.isGiveUp + "显示自己当前手的最大牌:selectCardsList=" + selectCardsList + ",temp.Value=" + temp.Value);
            if (selectCardsList.indexOf(temp.Value) == -1 || _this.isGiveUp) {
                temp.SetColorGary();
            }
            else {
                temp.ResetColor();
            }
            temp.ShowMaxCardBg(maxCards.indexOf(temp.Value) >= 0);
        });
    };
    // private  HideChild (parent:fgui.GComponent) {
    //     for (var j = 0; j < parent._children.length; j++) {
    //         parent._children[j].visible = false;
    //     }
    // }
    TexasUserComp.prototype.GetCard = function (cardIndex) {
        //先变成背面      
        var card = null;
        if (cardIndex >= 2 || this.self) {
            if (cardIndex < this.cardList.length) {
                card = this.cardList[cardIndex];
            }
            else {
                console.log("cardIndex:" + cardIndex);
            }
        }
        else if (cardIndex < this.defaultCards.length && !this.self) {
            card = this.defaultCards[cardIndex];
        }
        else {
            console.log("发牌index不对：" + cardIndex);
        }
        return card;
    };
    /// <summary>
    /// 发牌
    /// </summary>
    TexasUserComp.prototype.SendCard = function (cardIndex, poker, isAnim, openPai) {
        var _this = this;
        if (isAnim === void 0) { isAnim = true; }
        if (openPai === void 0) { openPai = null; }
        this.openCards = [];
        UIUtil_1.UIUtil.Concat(this.openCards, openPai);
        var tempCardIndex = cardIndex;
        var card = this.GetCard(cardIndex);
        if (card == null) {
            console.log("fetal error: SendCard is null");
            return;
        }
        card.Show();
        if (this.curCardIndex == cardIndex) {
            return;
        }
        this.curCardIndex = cardIndex;
        card.SetVal(poker);
        this.UpdatePos(this.openCards);
        if (isAnim) {
            card.Reset(false);
            card.ui_val.node.active = true;
            this.moveN1toN2(card.ui_val.node, this.tablecenter.node);
            // card.ui_val.node.stopAllActions();
            var moveTime = 0.3;
            if (tempCardIndex > 1 || this.self) {
                card.ui_val.node.setScale(0.2, 0.2);
                card.ui_val.node.runAction(cc.scaleTo(moveTime, 1));
            }
            else {
                card.ui_val.node.setScale(1, 1);
            }
            card.ui_val.node.runAction(cc.sequence(cc.delayTime(0.01), cc.moveTo(moveTime, cc.v2(0, 0)).easing(cc.easeQuadraticActionOut()), cc.callFunc(function () {
                // console.log("this.self == {0}, tempCardIndex = {1}, delay = {2} ",this.self, tempCardIndex, F_TexasViewCtr.instance.Model.delay);
                if (_this.self && tempCardIndex == 1 && F_TexasViewCtr_1.default.instance.Model.delay == 1) {
                    console.log("ismyturn ====== " + F_TexasViewCtr_1.default.instance.view.ismyturn);
                    ////此处有个bug，就是第一张牌发完后，收到了token，再发第二张牌，这种情况第一张牌显示的牌背
                    ///所以在发完牌并且是自己操作的时候强制再一次把手牌展示
                    if (F_TexasViewCtr_1.default.instance.view.ismyturn) {
                        F_TexasViewCtr_1.default.instance.view.IsShowMyAction(true);
                        for (var i = 0; i < F_TexasViewCtr_1.default.instance.Model._ShouPai.length; i++) {
                            var index = i;
                            var _poker = F_TexasViewCtr_1.default.instance.Model._ShouPai[i];
                            _this.SendCardNoAni(index, _poker);
                        }
                    }
                }
                var isPoker = _this.self && !_this.isGiveUp && !F_TexasViewCtr_1.default.instance.view.ismyturn && F_TexasViewCtr_1.default.instance.Model.delay == 1;
                console.log("isPoker ==== ", isPoker);
                _this.BindCard(card, isPoker ? 0 : poker, cardIndex); //自己发牌结束并且没到自己的回合显示牌背
                _this.ShowOpenCard(openPai, tempCardIndex);
                if (_this.self && F_TexasViewCtr_1.default.instance.view.ismyturn && F_TexasViewCtr_1.default.instance.Model.delay == 1) //发牌结束的时候已经传了自己token，但是这是后token显示的是牌背并且不会显示最大牌型，所以这里要显示牌型
                 {
                    F_TexasViewCtr_1.default.instance.view.ShowSelfMaxCards();
                }
                if (_this.self) //当前牌发牌结束后，增加秀牌监听
                 {
                    card.getChild("CardButton").asButton.clearClick();
                    card.getChild("CardButton").asButton.onClick(function () {
                        console.log("当前牌发牌结束后，增加秀牌监听");
                        if (F_TexasViewCtr_1.default.instance.Model.isGaming && card.Value > 0 && _this.self) {
                            F_TexasViewCtr_1.default.instance.cs_showmycard_tex(card.Value, card._showType == 0 ? 1 : 0);
                        }
                    });
                }
                _this.defaultCards[0].Show();
                _this.defaultCards[1].Show();
            }), cc.delayTime(0.01), cc.callFunc(function () {
                card.Show();
            })));
        }
        else {
            //console.log(string.Format("ssssssss this.self == {0}, tempCardIndex = {1}, delay = {2} ", this.self, tempCardIndex, F_TexasViewCtr.instance.Model.delay));
            this.BindCard(card, poker, cardIndex);
            this.ShowOpenCard(openPai, tempCardIndex);
        }
    };
    TexasUserComp.prototype.UpdatePos = function (cards) {
        var width = this.cardList[0].fguiWidth; //gameObject.GetComponent<RectTransform> ().sizeDelta.x;
        var showCardCount = 0;
        this.cardList.forEach(function (item) {
            if (item.Value > 0) {
                showCardCount++;
            }
        });
    };
    TexasUserComp.prototype.SendCardNoAni = function (cardIndex, poker) {
        if (this.SendCardWithUpdateInfo(cardIndex, poker)) {
            // this.cardList[cardIndex].ui_val.setPosition(0,0);
        }
    };
    //返回更新card 是否成功.
    TexasUserComp.prototype.SendCardWithUpdateInfo = function (cardIndex, poker) {
        if (this.cardList[cardIndex] == null) {
            return false;
        }
        this.curCardIndex = cardIndex;
        this.ui_UserCards.visible = true;
        var card = this.cardList[cardIndex];
        this.BindCard(card, poker, cardIndex);
        card.ui_val.setScale(1, 1);
        if (this.self || cardIndex >= 2) {
            card.Show();
        }
        else {
            card.Hide();
        }
        if (cardIndex < this.defaultCards.length && !this.self) {
            this.defaultCards[cardIndex].Show(); // FIXME
        }
        return true;
    };
    /// <summary>
    /// 等待
    /// </summary>
    TexasUserComp.prototype.Wait = function () {
        this.Aciton = false;
        if (this.self) {
            F_TexasViewCtr_1.default.instance.view.Wait();
        }
        this.StopClock();
    };
    /// <summary>
    /// 显示计时器
    /// </summary>
    TexasUserComp.prototype.ShowClock = function (cdTime, totalTime, isShowText, formatTime, callback) {
        var _this = this;
        if (cdTime === void 0) { cdTime = 15; }
        if (totalTime === void 0) { totalTime = 15; }
        if (isShowText === void 0) { isShowText = true; }
        if (formatTime === void 0) { formatTime = null; }
        if (callback === void 0) { callback = null; }
        console.log("cdTime === ", cdTime);
        console.log("totalTime === ", totalTime);
        if (this.self && formatTime == "") {
            F_TexasViewCtr_1.default.instance.ShowSelfEndTime(cdTime, totalTime, isShowText);
            return;
        }
        var cd = cdTime;
        this.endTime = UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000 + cdTime);
        this.ui_ImageF.fillAmount = cd / totalTime + 0.01;
        this.showUICountTimeText(isShowText, cd, formatTime);
        this.unschedule(this.timerID);
        this.unschedule(this.fillFun); // this.ui_ImageF.node.stopAllActions ();
        var nodeCD = cd;
        var startCD = cd;
        this.schedule(this.fillFun = function () {
            if (nodeCD < 0)
                _this.unschedule(_this.fillFun);
            _this.ui_ImageF.fillAmount = (nodeCD / startCD);
            nodeCD -= 0.1;
        }, 0.1, cd * 10);
        this.schedule(this.timerID = function () {
            cd = UIUtil_1.UIUtil.NumberToInt((_this.endTime - UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000)));
            if (isShowText) {
                if (formatTime == null) {
                    _this.ui_endtimetipsText.text = cd + "";
                }
                else {
                    _this.ui_endtimetipsText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1425) + "\n" + cd; //string.Format (formatTime, cd);
                }
            }
            if (cd <= 0) {
                if (callback != null) {
                    callback();
                }
                _this.StopClock(true);
            }
            // 倒计时为5，播放警告
            if (_this.self && cd == 5) {
                AudioManager_1.AudioManager.Singleton.play("", "texas_timeout");
            }
        }, 1);
    };
    /// <summary>
    /// 停止计时器
    /// </summary>
    TexasUserComp.prototype.StopClock = function (isForce) {
        if (isForce === void 0) { isForce = false; }
        var canStopState = this.userConnectState != UserConnectState.disconnect && this.userConnectState != UserConnectState.keepSeat;
        if (canStopState || isForce) {
            if (this.self) {
                AudioManager_1.AudioManager.Singleton.stopEffect("texas_timeout");
                F_TexasViewCtr_1.default.instance.StopSelfEndTime();
            }
            this.unschedule(this.fillFun); // this.ui_ImageF.node.stopAllActions ();
            this.unschedule(this.timerID);
            this.showUICountTimeText(false);
        }
    };
    /// <summary>
    /// 显示申请计时器
    /// </summary>
    TexasUserComp.prototype.ShowApplyClock = function (cdTime, totalTime, isShowText, formatTime, callback) {
        var _this = this;
        if (cdTime === void 0) { cdTime = 15; }
        if (totalTime === void 0) { totalTime = 15; }
        if (isShowText === void 0) { isShowText = true; }
        if (formatTime === void 0) { formatTime = null; }
        if (callback === void 0) { callback = null; }
        var cd = cdTime;
        this.endTime = UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000 + cdTime);
        this.showUIApplyTimeText(isShowText, cd, formatTime);
        this.unschedule(this.timerID);
        this.ui_takeInApplyPanel.node.stopAllActions();
        this.schedule(this.timerID = function () {
            cd = UIUtil_1.UIUtil.NumberToInt((_this.endTime - UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000)));
            if (isShowText) {
                if (formatTime == null) {
                    _this.ui_takeInApplyTxt.text = cd + "";
                }
                else {
                    _this.ui_takeInApplyTxt.text = TexasLanguage_1.TexasLanguage.getLanguageById(180009) + cd + "s";
                }
            }
            if (cd <= 0) {
                if (callback != null) {
                    callback();
                }
                _this.StopApplyClock(true);
            }
        }, 1, cd);
    };
    /// <summary>
    /// 停止申请计时器
    /// </summary>
    TexasUserComp.prototype.StopApplyClock = function (isForce) {
        if (isForce === void 0) { isForce = false; }
        var canStopState = this.userConnectState != UserConnectState.disconnect && this.userConnectState != UserConnectState.waitTakeIn;
        if (canStopState || isForce) {
            this.ui_takeInApplyPanel.node.stopAllActions();
            this.unschedule(this.timerID);
            this.showUIApplyTimeText(false);
        }
    };
    /// <summary>
    /// 显示失败
    /// </summary>
    /// <param name="active"></param>
    TexasUserComp.prototype.ShowLose = function (active) {
        this.Lose = active;
        if (active)
            this.updateHandleStateText(TexasUserHandleState.lose);
        if (this.self) {
            return;
        }
        this.ui_lose.visible = active;
        if (active) {
            this.initCards();
            for (var i = 0; i < this.cardList.length; i++) {
                this.cardList[i].Hide();
            }
        }
    };
    TexasUserComp.prototype.GenerateChip_nnb = function (gambleGold, remainGold, isAnim) {
        if (isAnim === void 0) { isAnim = true; }
        this.ChipMove(gambleGold, isAnim);
        // //更新下注之后的钱    
        this.UpdateMoney(remainGold);
    };
    TexasUserComp.prototype.GenerateChipNoUpate = function (gambleGold, isAnim) {
        if (isAnim === void 0) { isAnim = true; }
        this.ChipMove(gambleGold, isAnim);
    };
    /// <summary>
    /// 生成筹码,
    /// </summary>
    TexasUserComp.prototype.GenerateChip_nbb = function (gambleGold, isAnim, isTurnOver, selfGold) {
        if (isAnim === void 0) { isAnim = true; }
        if (isTurnOver === void 0) { isTurnOver = false; }
        if (selfGold === void 0) { selfGold = -999; }
        this.ChipMove(gambleGold, isAnim, isTurnOver);
        //更新下注之后的钱
        if (this.player == null) {
            console.log("fetal error ... player can not be null: 减钱失败");
        }
        else {
            this.player.gold -= gambleGold;
            if (this.player.gold < 0) {
                console.log("gambleGold is more than player gold: gamble:" + gambleGold);
                this.player.gold = 0; // 显示负数的时候强制为0
            }
        }
        if (selfGold != -999) {
            this.player.gold = selfGold;
        }
        this.UpdateMoney();
    };
    TexasUserComp.prototype.GambleMongo = function (mongoGold) {
        if (this.player == null) {
            console.log("fetal error ... player can not be null: 减去初始芒果分失败");
        }
        else {
            this.player.gold -= mongoGold;
        }
        this.UpdateMoney();
    };
    TexasUserComp.prototype.ResetUserHandleStateForTurn = function () {
        if (this.handleState == TexasUserHandleState.allin || this.handleState == TexasUserHandleState.giveUp || this.handleState == TexasUserHandleState.strad) {
            //敲/休不处理/补抓头
        }
        else {
            this.ShowUIUserHandleState(-1);
            this.updateInsStateText(-1);
        }
    };
    /// <summary>
    /// 更新玩家状态 1是跟注 2是弃牌 3是比牌
    /// </summary>
    TexasUserComp.prototype.updateHandleStateText = function (state) {
        this.handleState = state;
        var statetext = "";
        this.ui_statusbg.getChild("bg1").visible = true;
        this.ui_statusbg.getChild("bg2").visible = false;
        this.ui_statusbg.getChild("bg3").visible = false;
        switch (state) {
            case TexasUserHandleState.follow:
                statetext = TexasLanguage_1.TexasLanguage.getLanguageById(1410); //跟注
                break;
            case TexasUserHandleState.giveUp:
                statetext = TexasLanguage_1.TexasLanguage.getLanguageById(1395); //弃牌
                this.ui_statusbg.getChild("bg1").visible = false;
                this.ui_statusbg.getChild("bg3").visible = true;
                break;
            case TexasUserHandleState.da:
                statetext = TexasLanguage_1.TexasLanguage.getLanguageById(1426); //加注
                break;
            case TexasUserHandleState.xiu:
                statetext = TexasLanguage_1.TexasLanguage.getLanguageById(1297); //让牌
                this.ui_statusbg.getChild("bg1").visible = false;
                this.ui_statusbg.getChild("bg2").visible = true;
                break;
            case TexasUserHandleState.lose:
                statetext = TexasLanguage_1.TexasLanguage.getLanguageById(1427); //比输
                this.ui_statusbg.getChild("bg1").visible = false;
                this.ui_statusbg.getChild("bg3").visible = true;
                break;
            case TexasUserHandleState.allin:
                statetext = "ALLIN";
                break;
            case TexasUserHandleState.stradlle:
                statetext = "stradlle";
                this.ui_statusbg.getChild("bg1").visible = false;
                this.ui_statusbg.getChild("bg3").visible = true;
                break;
            case TexasUserHandleState.strad:
                statetext = "补strad";
                break;
        }
        this.showUIEftAllIn(state == TexasUserHandleState.allin);
        this.ui_txtstatus.text = statetext;
        this.ShowUIUserHandleState(UIUtil_1.UIUtil.NumberToInt(state));
    };
    /// <summary>
    /// 更新玩家保险投保状态
    /// </summary>
    /// <param name="ins"></param>
    TexasUserComp.prototype.updateInsStateText = function (ins) {
        this.ShowInsStaus(ins >= 0);
        this.ui_txtIns.text = ins > 0 ? TexasLanguage_1.TexasLanguage.getLanguageById(1428) + " " + UIUtil_1.UIUtil.formatNumber100(ins) + "" : TexasLanguage_1.TexasLanguage.getLanguageById(1429); //投保  不投
        console.log("更新玩家保险投保状态:" + this.ui_txtIns.text);
    };
    TexasUserComp.prototype.endShowInsClaim = function (claim) {
        console.log("理赔 " + UIUtil_1.UIUtil.formatNumber100(claim));
        this.ShowInsStaus(claim > 0);
        this.ui_txtIns.text = TexasLanguage_1.TexasLanguage.getLanguageById(1430) + " " + UIUtil_1.UIUtil.formatNumber100(claim); //理赔
    };
    TexasUserComp.prototype.RealGenerateChip = function (money) {
        // if (this._Chip == null) {
        //     this._Chip = GameObject.Instantiate (this.ui_template.gameObject) as GameObject;
        //     this._Chip.transform.SetParent (F_TexasViewCtr.instance.view.ui_chippoolroot, false);
        //     this._Chip.transform.resetLocal ();
        //     this. _Chip.transform.localScale = Vector3.one * 0.5f;
        // }
        // this._Chip.gameObject.SetActive (true);
        // Vector3 endv3 = new Vector3 (0, UnityEngine.Random.Range (30, 50), UnityEngine.Random.Range (0, 100f));
        // endv3 = F_TexasViewCtr.instance.view.GetAChipPosition (money, endv3);
        // _Chip.transform.position = ui_template.position; // ui_pos.position;
        // Text _txtChip = ToolsEx.FindScriptInChilds<Text> (_Chip.gameObject, "txtchip");
        // _txtChip.text = "";
        // ////AudioManager.Singleton.play("", "glamble");
        // F_TexasViewCtr.instance.view.AddChipPool (_Chip.transform);
        // if (_chippool == null) _chippool = new List<Transform> ();
    };
    /// <summary>
    /// 当前回合结束重置curGamble
    /// </summary>
    TexasUserComp.prototype.resetCurGamble = function () {
        this.curGamble = 0;
        this.SetGamble(this.curGamble);
        this.ShowUIGamble(false); //当前回合结束的时候隐藏下注
    };
    //下注 执行动画
    TexasUserComp.prototype.ChipMove = function (gambleGold, isAnim, isTurnOver) {
        if (isTurnOver === void 0) { isTurnOver = false; }
        this.curGamble += gambleGold;
        this.allinGamble = this.curGamble;
        this.SetGamble(this.curGamble);
        this.ShowUIGamble(true); //生成筹码的时候显示下注
        this.ui_ImgChip.node.getComponent(UIMoveMono_1.UIMoveMono).fixedTime = 0.2;
        this.ui_ImgChip.node.getComponent(UIMoveMono_1.UIMoveMono).isUseSpeed = false;
        if (isAnim) {
            // this.ImgChipMove.Show();
            this.ui_ImgChip.node.getComponent(UIMoveMono_1.UIMoveMono).Move(null, function () {
                if (isTurnOver) {
                    F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
                }
            });
        }
    };
    TexasUserComp.prototype.DealTurnChip = function () {
        var _this = this;
        var endv3 = cc.v2(0, this.getRandomNumInt(30, 50)); //, UnityEngine.Random.Range (0, 100f));
        if (this._Chip != null) {
            this._Chip.node.runAction(cc.sequence(cc.moveTo(0.5, endv3), cc.callFunc(function () {
                _this._Chip.visible = false; //Texas暂时不显示 
            })));
        }
        this.ui_template.visible = false;
    };
    TexasUserComp.prototype.SetShowStateGray = function () {
        if (!this.self)
            return;
        if (this._maxCard != null) {
            var _nomaxcard = [];
            UIUtil_1.UIUtil.Concat(_nomaxcard, this._maxCard);
            for (var i = 0; i < this.cardList.length; i++) {
                this.cardList[i].SetShowState(_nomaxcard);
            }
        }
    };
    /// <summary>
    /// 获取筹码，显示最大牌型
    /// </summary>
    /// <param name="_chiptf"></param>
    TexasUserComp.prototype.winChouma = function (_chiptf) {
        var obv3 = this.ui_pos.node.position;
        _chiptf.node.runAction(cc.sequence(cc.moveTo(1, this.convertNodeSpaceAR(_chiptf.node, this.ui_pos.node)), cc.callFunc(function () {
            _chiptf.visible = true;
        }, this)));
    };
    /// <summary>
    /// 玩家离开，隐藏玩家数据
    /// </summary>
    TexasUserComp.prototype.Clear = function () {
        this.initCards();
        for (var i = 0; i < this.cardList.length; i++) {
            this.cardList[i].ResetColor();
            this.cardList[i].Hide();
            this.cardList[i].Clear();
        }
        this.Hide();
        this.ui_goldBg.visible = false;
        this.ui_txtGold.text = "";
        this.ui_txtstatus.text = "";
        this.ui_txtgambletemp.text = "";
        this.ui_texastype.visible = false;
        this.ui_txttexastype.text = "";
        this.isGiveUp = false;
        this.StopClock();
        this.StopApplyClock();
        this._maxCard = [];
        this.ui_defaultCardsMove.visible = false;
        this.ui_defaultCards.visible = false;
    };
    /// <summary>
    /// 掉线或者重连
    /// </summary>
    TexasUserComp.prototype.DisconnetcOrReline = function (isdiconnet) {
    };
    TexasUserComp.prototype.SetLastSite = function () {
        // this.transform.SetAsLastSibling ();
    };
    TexasUserComp.prototype.ShowCardAt = function (index, card) {
        this.SetCardVal(index, card);
        var item = (index >= 0 && this.cardList.length > index) ? this.cardList[index] : null;
        if (item != null && card > 0 && this.self) {
            item.ShowEye(true);
        }
        this.UpdatePos(null);
    };
    TexasUserComp.prototype.DisplayShowCard = function (cards) {
        for (var i = 0; i < this.cardList.length; i++) {
            // let comp: CardRedbetComp = this.cardList[i];
            var temp = cards.find(function (item) { return item.cpos == i; });
            if (temp != null)
                this.ShowCardAt(i, temp.card);
            else
                this.ShowCardAt(i, 0);
        }
    };
    TexasUserComp.prototype.ShowCardStatusAt = function (index, type) {
        var item = (index >= 0 && this.cardList.length > index) ? this.cardList[index] : null;
        if (item != null) {
            item.ShowEye(type == 1);
            if (F_TexasViewCtr_1.default.instance.Model._scards == null || F_TexasViewCtr_1.default.instance.Model._scards.length <= 0) {
                F_TexasViewCtr_1.default.instance.Model._scards = [];
                if (type == 1) {
                    var temp = new TexasNetData_1.Cards();
                    temp.cpos = index;
                    F_TexasViewCtr_1.default.instance.Model._scards.push(temp);
                }
            }
            else {
                var removeIndex = -1;
                var temp = F_TexasViewCtr_1.default.instance.Model._scards.find(function (item1, key) {
                    if (item1.cpos == index) {
                        removeIndex = key;
                        return true;
                    }
                    return false;
                });
                if (temp != null && type == 0)
                    F_TexasViewCtr_1.default.instance.Model._scards.splice(removeIndex, 1);
                else if (temp == null && type == 1) {
                    temp = new TexasNetData_1.Cards();
                    temp.cpos = index;
                    F_TexasViewCtr_1.default.instance.Model._scards.push(temp);
                }
            }
        }
        this.UpdatePos(null);
    };
    TexasUserComp.prototype.ShowFirstCard = function (shoupai) {
        if (shoupai == null) {
            return;
        }
        this.ShowCards(shoupai);
    };
    TexasUserComp.prototype.ShowCards = function (allCards) {
        if (allCards == null) {
            return;
        }
        var card = null;
        for (var i = 0; i < allCards.length && i < this.cardList.length; i++) {
            card = this.cardList[i];
            this.SetCardVal_pub(card, allCards[i]);
        }
        this.UpdatePos(allCards);
    };
    /// <summary>
    /// 设置位置为空，可能为预留状态 
    /// </summary>
    TexasUserComp.prototype.SetPosNull = function () {
        if (this.fguiComponent == null) {
            return;
        }
        ;
        if (!F_TexasViewCtr_1.default.instance.view)
            return;
        if (this.player != null) {
            F_TexasViewCtr_1.default.instance.view.RemoveUser(this.player.userid);
        }
        this.UpdateUserConnectState(UserConnectState.free);
        F_TexasViewCtr_1.default.instance.view.CheckBtnBackTableState(); //位置为空时
    };
    TexasUserComp.prototype.ResetState = function () {
        this.ShowUIWatch(false);
        this.ShowUIWiatTakeIn(false);
        this.showUIMicro(false);
        this.ShowUIUserHandleState(-1);
        this.updateInsStateText(-1);
    };
    TexasUserComp.prototype.SetUseConnectState = function (userConnectState) {
        this.userConnectState = userConnectState;
    };
    // <summary>
    // 更新玩家状态 0:没有玩家 1: 留座位显示正常的玩家头像,以及其他数据 2.断线 3.正常游戏 (除1 之外其他都在玩家里面)
    // </summary>
    // <param name="userConnectState"></param>    
    TexasUserComp.prototype.UpdateUserConnectState = function (userConnectState) {
        var _this = this;
        this.SetUseConnectState(userConnectState);
        console.log(" hui UpdateUserConnectState :" + userConnectState);
        UIUtil_1.UIUtil.ImageGreyToggle(this.ui_headImage, false);
        switch (userConnectState) {
            case UserConnectState.free:
                this.ResetUserData();
                break;
            case UserConnectState.keepSeat:
                //留座 显示倒计时，显示名称，显示金币，头像变灰
                //留座不显示特效转
                // console.error("留座不显示特效转==="+((this.userInfo != null) ? (this.userInfo.isK <= 178 ? this.userInfo.isK + 2 : this.userInfo.isK) : 180));
                this.ShowClock((this.userInfo != null) ? (this.userInfo.isK <= 178 ? this.userInfo.isK + 2 : this.userInfo.isK) : 180, 180, true, "留座\n", function () {
                    _this.SetPosNull();
                }); //留座
                UIUtil_1.UIUtil.ImageGreyToggle(this.ui_headImage, true);
                break;
            case UserConnectState.disconnect:
                break;
            case UserConnectState.play:
                break;
            case UserConnectState.watch:
                break;
            case UserConnectState.wait:
                this.ResetPlayingUI();
                break;
            default:
                break;
        }
        //设置总的状态
        this.ui_ImgFreeUser.visible = (userConnectState == 0);
        this.ui_ImgFreeUserBtn.visible = (userConnectState == 0);
        this.ui_userInfo.visible = (userConnectState != 0); //FIXME: 还原
        if (userConnectState == UserConnectState.free) {
            this.showUICards(false);
            this.ShowTexasType(false);
        }
        this.ShowUIWatch(userConnectState == UserConnectState.watch);
        this.ShowUIWiatTakeIn(userConnectState == UserConnectState.waitTakeIn);
        this.showUIMicro(false);
    };
    //#region 所有状态的展示与隐藏 : 默认一直显示的对象没有showUI 操作 : showUI中操作下层对象的显示操作,不能使用showUI,请使用其他方法名称
    //是否显示玩家信息
    TexasUserComp.prototype.showUIUserRoot = function (isShow) {
        this.ui_userInfo.visible = isShow;
    };
    //展示准备状态
    TexasUserComp.prototype.ShowUIReady = function (isShow) {
        this.ui_ready.visible = isShow;
    };
    //隐藏所有卡牌信息,这个方法只隐藏,显示必须要具体的数据,写成show 只是为了调用方便查找
    TexasUserComp.prototype.showUICards = function (isShow) {
        for (var i = 0; i < this.cardList.length; i++) {
            this.cardList[i].Reset();
        }
        for (var i = 0; i < this.defaultCards.length; i++) {
            this.defaultCards[i].Reset();
        }
        if (this.self)
            F_TexasViewCtr_1.default.instance.ShowOpenTip(false); //如果是自己还要隐藏防伙提示
        this.ui_headImage.color = cc.Color.WHITE;
        this.ui_touxiang.color = cc.Color.WHITE;
        this.ui_gambleIcon.color = cc.Color.WHITE;
    };
    //展示头顶上面的提示信息:包括1.最后的金币结算 2....
    TexasUserComp.prototype.ShowUITopTip = function (tip) {
        this.ui_topTipBg.visible = (tip != null);
        if (tip != null) {
            this.ui_txtTopTip.text = tip;
            this.showUIEftRotate(30);
            if (this.self)
                this.showUIEftYouWin(true);
        }
        else {
            this.StopUIEftRotate();
        }
    };
    //展示观战
    TexasUserComp.prototype.ShowUIWatch = function (isWatch) {
        if (isWatch === void 0) { isWatch = true; }
        if (this.self) {
            console.log("wantch:" + isWatch);
        }
        if (!this.userInfo)
            isWatch = false;
        this.ui_watchBg.visible = isWatch;
    };
    TexasUserComp.prototype.ShowUIWiatTakeIn = function (isWaitTakeIn) {
        var _this = this;
        if (isWaitTakeIn === void 0) { isWaitTakeIn = true; }
        if (this.self) {
            console.log("isWaitTakeIn:" + isWaitTakeIn);
        }
        var pos2Apply = this.userInfo != null && F_TexasViewCtr_1.default.instance.Model.pos2apply != null ? F_TexasViewCtr_1.default.instance.Model.pos2apply.find(function (item) { return item.pos == _this.userInfo.pos; }) : null;
        if (pos2Apply != null) //带入申请的，自己要显示倒计时面板，房主看见其他玩家要显示申请中倒计时状态
         {
            if (this.self) //自己显示倒计时面板
             {
                if (isWaitTakeIn)
                    this.ShowApplyClock(UIUtil_1.UIUtil.NumberToInt(pos2Apply.val), UIUtil_1.UIUtil.NumberToInt(pos2Apply.val), true, TexasLanguage_1.TexasLanguage.getLanguageById(180009), function () {
                        _this.SetPosNull();
                    });
                this.ui_txtWait.text = TexasLanguage_1.TexasLanguage.getLanguageById(2202); //申请中
                this.ui_waitBg.visible = isWaitTakeIn;
            }
            else if (F_TexasViewCtr_1.default.instance.Model.ownnerid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) //房主显示申请中
             {
                if (isWaitTakeIn)
                    this.ShowClock(UIUtil_1.UIUtil.NumberToInt(pos2Apply.val), UIUtil_1.UIUtil.NumberToInt(pos2Apply.val), true, null, function () {
                        _this.SetPosNull();
                    });
                this.ui_txtWait.text = TexasLanguage_1.TexasLanguage.getLanguageById(2202); //申请中
                this.ui_waitBg.visible = isWaitTakeIn;
            }
            else {
                this.ui_txtWait.text = TexasLanguage_1.TexasLanguage.getLanguageById(2188); //占座中
                this.ui_waitBg.visible = isWaitTakeIn;
            }
        }
        else {
            this.ui_txtWait.text = TexasLanguage_1.TexasLanguage.getLanguageById(2188); //占座中
            this.ui_waitBg.visible = false; //isWaitTakeIn;
        }
    };
    //展示麦克风
    TexasUserComp.prototype.showUIMicro = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_btnmicrophone.visible = isShow;
    };
    //展示 "庄"
    TexasUserComp.prototype.showUIBanker = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.bankerPos.fguiComponent.visible = isShow;
    };
    //玩家打牌的状态:跟,大,敲等等 (头顶上方UI,要注意与头顶的 tip 信息文本的互斥) -1:表示隐藏
    TexasUserComp.prototype.ShowUIUserHandleState = function (state) {
        if (state === void 0) { state = -1; }
        if (state == -1) {
            if (this.isGiveUp) {
                //console.log("ShowUIUserHandleState hideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + GetPlayerName());
            }
        }
        this.ui_statusbg.visible = state >= 0;
        this.ui_statusbg.node.getComponent(UIStateBase_1.default).SetState(state);
    };
    //是否展示下注
    TexasUserComp.prototype.ShowUIGamble = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_gambleBg.visible = isShow;
    };
    //是否展示断线
    TexasUserComp.prototype.showUIDisconnect = function (isShow) {
    };
    //展示倒计时
    TexasUserComp.prototype.showUICountTimeText = function (isShow, time, formatTime) {
        if (isShow === void 0) { isShow = true; }
        if (time === void 0) { time = 15; }
        if (formatTime === void 0) { formatTime = null; }
        this.ui_endtimetips.visible = isShow;
        if (isShow && time != -9999) {
            if (formatTime == null) {
                this.ui_endtimetipsText.text = time + "";
            }
            else {
                this.ui_endtimetipsText.text = TexasLanguage_1.TexasLanguage.getLanguageById(180009) + "\n" + time; //"请等待;
            }
        }
    };
    TexasUserComp.prototype.showUIApplyTimeText = function (isShow, time, formatTime) {
        if (isShow === void 0) { isShow = true; }
        if (time === void 0) { time = 180; }
        if (formatTime === void 0) { formatTime = null; }
        this.ui_takeInApplyPanel.visible = isShow;
        if (isShow && time != -9999) {
            if (formatTime == null) {
                this.ui_takeInApplyTxt.text = time + "";
            }
            else {
                this.ui_takeInApplyTxt.text = TexasLanguage_1.TexasLanguage.getLanguageById(180009) + "\n" + time; //请等待;
            }
        }
    };
    /// <summary>
    /// 显示失败 ,不知道是啥 暂时屏蔽
    /// </summary>
    /// <param name="active"></param>
    TexasUserComp.prototype.showUILose = function (active) {
        return;
    };
    TexasUserComp.prototype.ShowInsWinPer_bool = function (isShow) {
        this.ui_insWinPerBg.visible = false;
    };
    TexasUserComp.prototype.ShowInsStaus = function (isShow) {
        this.ui_insBg.visible = isShow;
    };
    TexasUserComp.prototype.StopUIEftRotate = function () {
        this.showUIEftRotate(0);
    };
    TexasUserComp.prototype.showUIEftRotate = function (remainTime, totalTime) {
        if (totalTime === void 0) { totalTime = 30; }
        if (remainTime > totalTime) {
            totalTime = remainTime;
        }
        var angle = (totalTime - remainTime) / totalTime * 360.0;
        // this.ui_eft_rotate.node.stopAllActions ();
        if (remainTime <= 0) {
            // this.ui_eft_rotate.visible = false;
            this.ShowInsStaus(false);
        }
        else {
            // this.ui_eft_rotate.visible = true;
            // this.ui_eft_rotate.setLocalRotationZ (angle + 1);
            // this.ui_eft_rotate.DOLocalRotate (Vector3.forward * 360, remainTime, RotateMode.LocalAxisAdd).SetEase (Ease.Linear).OnComplete (() => {
            this.StopUIEftRotate();
            // });
        }
    };
    TexasUserComp.prototype.showUIEftYouWin = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_youwin.visible = isShow;
    };
    TexasUserComp.prototype.showUIEftAllIn = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_animAllin.visible = isShow;
        this.ui_allinImg.visible = false;
        this.ui_animAllinKeep.visible = false;
        if (isShow) {
            this.allinSpine.bgStart(this.showAnimAllinKeep.bind(this));
        }
    };
    TexasUserComp.prototype.showAnimAllinKeep = function () {
        this.ui_animAllin.visible = false;
        this.ui_allinImg.visible = true;
        this.ui_animAllinKeep.visible = true;
        this.allinSpineKeep.bgStart();
    };
    //#endregion
    TexasUserComp.prototype.OnDestroy = function () {
        this.ClearUser();
        if (this.ui_animAllin != null) {
            this.ui_animAllin.visible = false;
            this.ui_animAllinKeep.visible = false;
        }
        if (this.ui_youwin != null)
            this.ui_youwin.visible = false;
    };
    //是否是空座位
    TexasUserComp.prototype.IsFreeSeat = function () {
        return this.serverpos <= 0;
    };
    TexasUserComp.prototype.SetStateUserWait = function () {
        if (!this.IsFreeSeat()) {
            this.UpdateUserConnectState(UserConnectState.wait);
        }
    };
    TexasUserComp.prototype.IsWatch = function () {
        var isWatch = F_TexasViewCtr_1.default.instance.Model.IsPosWatch(this.serverpos);
        return isWatch;
    };
    TexasUserComp.prototype.IsWaitToTakeIn = function () {
        var isWaitTakeIn = F_TexasViewCtr_1.default.instance.Model.IsPosWaitToTakeIn(this.serverpos);
        return isWaitTakeIn;
    };
    TexasUserComp.prototype.IsKeep = function () {
        return this.userConnectState == UserConnectState.keepSeat || (this.userInfo != null && this.userInfo.isK > 0);
    };
    TexasUserComp.prototype.IsPlaying = function () {
        if (this.player != null) {
            return F_TexasViewCtr_1.default.instance.Model.IsInPlaying(this.player.userid);
        }
        else {
            return false;
        }
    };
    TexasUserComp.prototype.ShowEmoj = function (id) {
        // ui_imgEmoj.transform.DOKill ();
        // //chatEmojPos.gameObject.SetActive(true);
        // chatEmojPos.StateToActive = false;
        // chatEmojPos.SetState (GetPosState ());
        // emojiSprite.Clear ();
        // int index = 0;
        // int.TryParse (id, out index);
        // if (index >= 0 && index <= emojiSpNum.Count) {
        //     int num = emojiSpNum[index];
        //     for (int i = 0; i < num; i++) {
        //         UIAtlasManager.Singleton.SetSprite (ui_imgEmoj, "tex_emoji", "face" + (index + 1) + "_" + (i + 1));
        //         Sprite temp = UIAtlasManager.Singleton.getSpeite ("tex_emoji", "face" + (index + 1) + "_" + (i + 1));
        //         if (temp != null)
        //             emojiSprite.Add (temp);
        //     }
        //     if (emojiSprite.Count > 0) {
        //         ui_imgEmoj.sprite = emojiSprite[0];
        //         ui_imgEmoj.SetNativeSize ();
        //         ui_imgEmoj.gameObject.SetActive (true);
        //         ui_imgEmoj.transform.localScale =Vector3.one;
        //         UGUISpriteAnimation comp = ui_imgEmoj.gameObject.getOrAddComponent<UGUISpriteAnimation> ();
        //         comp.SpriteFrames = emojiSprite;
        //         comp.Play ();
        //         ui_imgEmoj.transform.DOMoveZ (1, 3.5f).OnComplete (() => {
        //             ui_imgEmoj.gameObject.SetActive (false);
        //             comp.Stop ();
        //             comp.SpriteFrames.Clear ();
        //         });
        //     }
        //}); ;
        // }
    };
    TexasUserComp.prototype.ShowChatSound = function (id) {
        var _this = this;
        var index = 0;
        index = Number.parseInt(id);
        this.bgChatPos.Show();
        var posState = this.GetPosState();
        this.ui_bgChat.node.getComponent(UIStatePos_1.default).SetState(posState);
        var scaleX = posState != 3 ? 1 : -1;
        this.ui_bgChat.scaleX = scaleX;
        this.ui_txtChatSound.scaleX = scaleX;
        this.ui_txtChatSound.align = scaleX == 1 ? cc.Label.HorizontalAlign.LEFT : cc.Label.HorizontalAlign.RIGHT; //alignment
        var chatOpen = cc.sys.localStorage.getItem("key_chat_value"); // PlayerPrefs.GetInt(Const.key_chat_value, 1);
        // if (chatOpen == 1)
        //     AudioManager.Singleton.play("", "say_" + id);
        if (TexasChatComp_1.default.languageList.length > index && index >= 0) {
            this.ui_txtChatSound.text = TexasChatComp_1.default.languageList[index];
        }
        this.ui_bgChat.node.stopAllActions();
        this.schedule(function () {
            _this.ui_bgChat.visible = false;
        }, 3);
    };
    //播放语音
    TexasUserComp.prototype.SetPlayBackAudio = function (content) {
        // byte[] voiceBytes = AudioClipConverter.StringToBytes(content);
        // tempAudio = AudioClipConverter.BytesToAudioClip(voiceBytes, -1);
    };
    TexasUserComp.prototype.PlayChatVoice = function (pos, content) {
        //收到消息转换播放
        // SetPlayBackAudio(content);
        // if (!F_TexasViewCtr.instance.Model.GetUserIsMute (player.userid)) {
        //     AudioManager.Singleton.playChatVoice (tempAudio, -1);
        // }
        // showUIMicro (true);
        // ui_btnmicrophone.DOKill ();
        // ui_btnmicrophone.transform.DOMoveZ (1, 3).OnComplete (() => {
        //     if (ui_btnmicrophone != null) {
        //         showUIMicro (false);
        //     }
        // });
    };
    TexasUserComp.prototype.GetPosState = function () {
        var mypos = F_TexasViewCtr_1.default.instance.Model._posServer;
        var posIndex = TexasTable_1.default.GetLocalPosByServerPos(this.localpos, mypos, F_TexasViewCtr_1.default.instance.Model.manNum);
        var posState = 0;
        switch (F_TexasViewCtr_1.default.instance.Model.manNum) {
            case 2:
                if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else { //上
                    posState = 0;
                }
                break;
            case 3:
                if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (posIndex == 3) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 4:
                if (posIndex == 3) { //上
                    posState = 0;
                }
                else if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (posIndex == 4) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 5:
                if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (4 <= posIndex && posIndex <= 5) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 6:
                if (posIndex == 4) { //上
                    posState = 0;
                }
                else if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (5 <= posIndex && posIndex <= 6) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 7:
                if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (5 <= posIndex && posIndex <= 7) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 8:
                if (posIndex == 5) { //上
                    posState = 0;
                }
                else if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (6 <= posIndex && posIndex <= 8) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
            case 9:
                if (posIndex == 6) { //上
                    posState = 0;
                }
                else if (posIndex == 1) { //下
                    if (this.self)
                        posState = 4;
                    else
                        posState = 1;
                }
                else if (7 <= posIndex && posIndex <= 9) { //左
                    posState = 2;
                }
                else { //右
                    posState = 3;
                }
                break;
        }
        return posState;
    };
    //设置显示的位置
    TexasUserComp.prototype.SetPosInView = function (vec3Index) {
        var posState = this.GetPosState();
        this.SetPosState(posState);
        var v = vec3Index == 1 && this.self ? 1.08 : 0.6;
        // this.ui_cardNode.node.position = cc.v3(v,v,0);// Vector3.one * (vec3Index == 1 && this.self ? 1.08f : 0.6f);
        if (posState == 3) { //[2, 3, 4, 5].indexOf(vec3Index) >= 0) {
            // 右边玩家
            this.ui_statusbg.node.position = cc.v3(-40, 22, 0);
            this.ui_gambleBg.node.position = cc.v3(-80, -26, 0);
            this.ui_statusbg.getChild("bg1").asImage.flip = fgui.FlipType.Horizontal;
            this.ui_statusbg.getChild("bg2").asImage.flip = fgui.FlipType.Horizontal;
            this.ui_statusbg.getChild("bg3").asImage.flip = fgui.FlipType.None;
        }
        else {
            //左边玩家
            this.ui_statusbg.node.position = cc.v3(220, 22, 0);
            this.ui_gambleBg.node.position = cc.v3(220, -26, 0);
            this.ui_statusbg.getChild("bg1").asImage.flip = fgui.FlipType.None;
            this.ui_statusbg.getChild("bg2").asImage.flip = fgui.FlipType.None;
            this.ui_statusbg.getChild("bg3").asImage.flip = fgui.FlipType.Horizontal;
        }
    };
    TexasUserComp.prototype.SetPosState = function (posState) {
        this.gambleBgPos.SetState(posState);
        // this.defaultCardsPos.SetState (posState);
        this.bankerPos.SetState(posState);
        // this.insBgPos.SetState (posState);
        // this.insWinPerBgPos.SetState (posState);
        this.gambleIconPos.SetState(posState);
        this.txtGamblePos.SetState(posState);
        // this.statusbgPos.SetState (posState);
        // this.defaultCardsMovePos.SetState (posState);
        this.cardNodePos.SetState(posState);
    };
    TexasUserComp.prototype.UpdateAllCardBgImage = function () {
        this.cardList.forEach(function (item) {
            item.UpdateCardImage();
        });
        this.defaultCards.forEach(function (item) {
            item.UpdateCardImage();
        });
        if (CardRedbetComp_1.default.cardTypeName == null)
            CardRedbetComp_1.default.cardTypeName = "003";
        for (var i = 1; i < 3; i++) {
            var card = this.ui_defaultCardsMove.getChild("defaultCard" + i + "Move").asCom;
            UIUtil_1.UIUtil.loadImage(card.getChild("val").asLoader, CardRedbetComp_1.default.cardTypeName, "Texas");
            this.defaultCardsMoveCards.push(card);
            // let card2 = this.ui_defaultCards.getChild (`defaultCard${i}`).asCom;
            // card2.getChild("val").asLoader.url = "ui://Texas/"+CardRedbetComp.cardTypeName;
            // this.defaultCardsPosCards.push(card2);
        }
    };
    //随机数
    TexasUserComp.prototype.getRandomNumInt = function (min, max) {
        var Range = max - min;
        var Rand = Math.random(); //获取[0-1）的随机数
        return (min + Math.round(Rand * Range)); //放大取整
    };
    // 把 node1移动到 node2的位置
    TexasUserComp.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
    TexasUserComp.prototype.convertNodeSpaceAR = function (node1, node2) {
        var v = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
        return cc.v2(v.x, v.y);
    };
    TexasUserComp.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    TexasUserComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    return TexasUserComp;
}(ViewBase_1.default));
exports.default = TexasUserComp;
var TexasUserHandleState;
(function (TexasUserHandleState) {
    TexasUserHandleState[TexasUserHandleState["invalid"] = -1] = "invalid";
    TexasUserHandleState[TexasUserHandleState["giveUp"] = 0] = "giveUp";
    TexasUserHandleState[TexasUserHandleState["follow"] = 1] = "follow";
    TexasUserHandleState[TexasUserHandleState["da"] = 2] = "da";
    TexasUserHandleState[TexasUserHandleState["allin"] = 3] = "allin";
    TexasUserHandleState[TexasUserHandleState["xiu"] = 4] = "xiu";
    TexasUserHandleState[TexasUserHandleState["stradlle"] = 5] = "stradlle";
    TexasUserHandleState[TexasUserHandleState["lose"] = 6] = "lose";
    TexasUserHandleState[TexasUserHandleState["strad"] = 7] = "strad";
})(TexasUserHandleState = exports.TexasUserHandleState || (exports.TexasUserHandleState = {}));
var UserConnectState;
(function (UserConnectState) {
    UserConnectState[UserConnectState["keepSeat"] = 0] = "keepSeat";
    UserConnectState[UserConnectState["free"] = 1] = "free";
    UserConnectState[UserConnectState["disconnect"] = 2] = "disconnect";
    UserConnectState[UserConnectState["play"] = 3] = "play";
    UserConnectState[UserConnectState["watch"] = 4] = "watch";
    UserConnectState[UserConnectState["wait"] = 5] = "wait";
    UserConnectState[UserConnectState["waitTakeIn"] = 6] = "waitTakeIn";
})(UserConnectState = exports.UserConnectState || (exports.UserConnectState = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzVXNlckNvbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxtREFBOEM7QUFDOUMsc0RBQThDO0FBQzlDLDJDQUFzQztBQUN0Qyx3Q0FBdUM7QUFDdkMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4QyxpREFBNEM7QUFDNUMsMkNBQTBDO0FBRTFDLHdEQUF1RDtBQUN2RCxpRUFBZ0Y7QUFDaEYsMEVBQXlFO0FBRXpFLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsV0FBVztBQUNYO0lBQTJDLGlDQUFRO0lBQW5EO1FBQUEscUVBNmdFQztRQTNnRUcsNENBQTRDO1FBQzVDLG1EQUFtRDtRQUM1QyxtQkFBYSxHQUFvQixJQUFJLENBQUMsQ0FBQyxlQUFlO1FBTXRELG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUN2Qyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBU3ZDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLFVBQUksR0FBWSxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBQ2hDLHNCQUFnQixHQUFxQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFM0QsYUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFDLE9BQU87UUFDakMsVUFBSSxHQUFZLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFDN0IsY0FBUSxHQUFZLEtBQUssQ0FBQyxDQUFDLElBQUk7UUFDL0IsWUFBTSxHQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVU7UUFDbkMsaUJBQVcsR0FBeUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBRWpFLGFBQU8sR0FBb0IsSUFBSSxDQUFD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Q0FBQztJQUNqQixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTCxvQkFBQztBQUFELENBN2dFQSxBQTZnRUMsQ0E3Z0UwQyxrQkFBUSxHQTZnRWxEOztBQUVELElBQVksb0JBVVg7QUFWRCxXQUFZLG9CQUFvQjtJQUM1QixzRUFBWSxDQUFBO0lBQ1osbUVBQVUsQ0FBQTtJQUNWLG1FQUFVLENBQUE7SUFDViwyREFBTSxDQUFBO0lBQ04saUVBQVMsQ0FBQTtJQUNULDZEQUFPLENBQUE7SUFDUCx1RUFBWSxDQUFBO0lBQ1osK0RBQVEsQ0FBQTtJQUNSLGlFQUFTLENBQUE7QUFDYixDQUFDLEVBVlcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFVL0I7QUFFRCxJQUFZLGdCQVNYO0FBVEQsV0FBWSxnQkFBZ0I7SUFDeEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixtRUFBYyxDQUFBO0lBQ2QsdURBQVEsQ0FBQTtJQUNSLHlEQUFTLENBQUE7SUFDVCx1REFBUSxDQUFBO0lBQ1IsbUVBQWMsQ0FBQTtBQUVsQixDQUFDLEVBVFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFTM0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRl9UZXhhc1ZpZXdDdHIgZnJvbSAnLi4vQ29udHJsL0ZfVGV4YXNWaWV3Q3RyJztcbmltcG9ydCBDYXJkUmVkYmV0Q29tcCBmcm9tIFwiLi9DYXJkUmVkYmV0Q29tcFwiO1xuaW1wb3J0IHsgQ2FyZHMgfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNOZXREYXRhXCI7XG5pbXBvcnQgVGV4YXNUYWJsZSBmcm9tIFwiLi9UZXhhc1RhYmxlXCI7XG5pbXBvcnQgeyBUZXhhcyB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc1wiO1xuaW1wb3J0IFVJU3RhdGVQb3MgZnJvbSAnLi9VSVN0YXRlUG9zJztcbmltcG9ydCBVSVN0YXRlQmFzZSBmcm9tICcuL1VJU3RhdGVCYXNlJztcbmltcG9ydCBUZXhhc0NoYXRDb21wIGZyb20gXCIuL1RleGFzQ2hhdENvbXBcIjtcbmltcG9ydCB7IFVJTW92ZU1vbm8gfSBmcm9tIFwiLi9VSU1vdmVNb25vXCI7XG5pbXBvcnQgeyBGX1RleGFzTW9kZWwgfSBmcm9tIFwiLi4vTW9kZWwvRl9UZXhhc01vZGVsXCI7XG5pbXBvcnQgeyBUZXhhc0xhbmd1YWdlIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTGFuZ3VhZ2VcIjtcbmltcG9ydCBUZXhhc0FsbGluU3RhcnQsIHsgVGV4YXNBbGxpbktlZXAgfSBmcm9tIFwiLi4vVGV4YXNTcGluZS9UZXhhc0FsbGluU3RhcnRcIjtcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyJztcbmltcG9ydCB7IFBsYXllckluZm9TRCwgT3RoZXJVc2VySW5mb1NELCBDb21tb25Qb3NWYWxTRCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvY3NfYmFzZSc7XG5pbXBvcnQgVmlld0Jhc2UgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZSc7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXhhc1VzZXJDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuXG4gICAgLy8gcHVibGljIHVpX2VmdFJvb3Q6Zmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfZWZ0X3JvdGF0ZTpmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAgICBcbiAgICBwdWJsaWMgcmVjdFRyYW5zZm9ybTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy9SZWN0VHJhbnNmb3JtXG4gICAgLy/mt7vliqDlupTnlKgs6Ziy5q2i5Y+N5aSN5Yib5bu6XG4gICAgcHVibGljIGZpcnN0Q2FyZHM6IG51bWJlcltdO1xuICAgIHB1YmxpYyBhZnRlckNhcmRzOiBudW1iZXJbXTtcbiAgICBwdWJsaWMgb3BlbkNhcmRzOiBudW1iZXJbXTtcblxuICAgIHB1YmxpYyB1aV9JbWdGcmVlVXNlcjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfSW1nRnJlZVVzZXJCdG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHBsYXllcjogUGxheWVySW5mb1NEO1xuICAgIHB1YmxpYyB1c2VySW5mbzogT3RoZXJVc2VySW5mb1NEO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6K+l5L2N572u5piv5ZCm5piv56m655qEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZ2V0IEVtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wbGF5ZXIgPT0gbnVsbDsgfVxuICAgIHB1YmxpYyBzZXJ2ZXJwb3M6IG51bWJlcjtcbiAgICBwdWJsaWMgbG9jYWxwb3M6IG51bWJlcjtcbiAgICBwdWJsaWMgY3VyQ2FyZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgdGFibGVjZW50ZXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHNlbGY6IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbmmK/njqnlrrboh6rlt7FcbiAgICBwdWJsaWMgdXNlckNvbm5lY3RTdGF0ZTogVXNlckNvbm5lY3RTdGF0ZSA9IFVzZXJDb25uZWN0U3RhdGUuZnJlZTtcblxuICAgIHB1YmxpYyBpc1dhdGNoOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm5piv6KeC5LyXXG4gICAgcHVibGljIExvc2U6IGJvb2xlYW4gPSBmYWxzZTsgLy/mmK/lkKbovpPkuoZcbiAgICBwdWJsaWMgaXNHaXZlVXA6IGJvb2xlYW4gPSBmYWxzZTsgLy/lvIPniYxcbiAgICBwdWJsaWMgQWNpdG9uOiBib29sZWFuID0gZmFsc2U7IC8v5piv5ZCm6L2u5Yiw6Ieq5bex6KGM5YqoXG4gICAgcHVibGljIGhhbmRsZVN0YXRlOiBUZXhhc1VzZXJIYW5kbGVTdGF0ZSA9IFRleGFzVXNlckhhbmRsZVN0YXRlLmludmFsaWQ7XG5cbiAgICBwdWJsaWMgdWlfbG9zZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/mr5TniYzlpLHotKXmj5DnpLpcbiAgICBwdWJsaWMgdWlfYmFua2VyOiBmZ3VpLkdMb2FkZXIgPSBudWxsOyAvL+avlOeJjOWksei0peaPkOekulxuICAgIHB1YmxpYyBpc2JhbmtlcjogYm9vbGVhbjsgLy/mmK/kuI3mmK/luoRcbiAgICBwdWJsaWMgdWlfcmVhZHk6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5YeG5aSHXG4gICAgcHVibGljIHVpX2hlYWRJbWFnZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfVklQRnJhbWU6IGZndWkuR0xvYWRlciA9IG51bGw7Ly92aXDlpLTlg4/moYZcbiAgICBwdWJsaWMgdWlfdG91eGlhbmc6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX3RvdXhpYW5nQnRuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9uYW1lVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc3RhdHVzYmc6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dHN0YXR1czogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfZ29sZEJnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRHb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9JbWdDaGlwOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9Vc2VyQ2FyZHM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NhcmROb2RlOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jYXJkTm9kZTE6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NhcmROb2RlMjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhcmRMaXN0OiBDYXJkUmVkYmV0Q29tcFtdO1xuICAgIHByaXZhdGUgY2FyZExpc3QxOiBDYXJkUmVkYmV0Q29tcFtdOy8v6Ieq5bexXG4gICAgcHJpdmF0ZSBjYXJkTGlzdDI6IENhcmRSZWRiZXRDb21wW107Ly/kuI3mmK/oh6rlt7FcbiAgICBwdWJsaWMgdWlfZGVmYXVsdENhcmRzOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9kZWZhdWx0Q2FyZHNNb3ZlOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgZGVmYXVsdENhcmRzOiBDYXJkUmVkYmV0Q29tcFtdO1xuICAgIHB1YmxpYyB1aV9wb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v562556CB55Sf5oiQ54K5XG4gICAgcHVibGljIHVpX2VuZHRpbWV0aXBzOiBmZ3VpLkdMb2FkZXIgPSBudWxsOyAvL+iuoeaXtumSnyBcbiAgICBwdWJsaWMgdWlfSW1hZ2VGOiBmZ3VpLkdJbWFnZSA9IG51bGw7XG4gICAgcHVibGljIHVpX2VuZHRpbWV0aXBzVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsgLy/orqHml7ZcbiAgICBwdWJsaWMgdWlfZ2FtYmxlQmc6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2dhbWJsZUljb246IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dEdhbWJsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsgLy8g5b2T5YmN5LiL5rOoXG4gICAgcHVibGljIGN1ckdhbWJsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhbGxpbkdhbWJsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBpc0luczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyB1aV90eHRnYW1ibGV0ZW1wOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90ZXhhc3R5cGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3RleGFzdHlwZTE6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7Ly/oh6rlt7HniYzlnotcbiAgICBwdWJsaWMgdWlfdGV4YXN0eXBlMjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsvL+WIq+S6uueJjOWei1xuICAgIHB1YmxpYyB1aV90eHR0ZXhhc3R5cGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8vVGV4YXPnmoTniYznsbvlnotcbiAgICBwdWJsaWMgdWlfdHh0dGV4YXN0eXBlMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0dGV4YXN0eXBlMjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGVtcGxhdGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lcklEOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIE1BWENEOiBudW1iZXIgPSAxNTtcbiAgICBwcml2YXRlIGNkOiBudW1iZXIgPSAxNTtcbiAgICBwdWJsaWMgX21heENhcmQ6IG51bWJlcltdO1xuICAgIHB1YmxpYyBfY2hpcHBvb2w6IGZndWkuR0NvbXBvbmVudFtdOyAvL+iHquW3seS4gOi9ruS4i+azqOa4heWNlVxuICAgIHB1YmxpYyB1aV91c2VySW5mbzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90b3BUaXBCZzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/lpLTpobbmmL7npLrnmoTpgJrnlKjmj5DnpLrmlofmnKxcbiAgICBwdWJsaWMgdWlfdHh0VG9wVGlwOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV93YXRjaEJnOiBmZ3VpLkdHcm91cCA9IG51bGw7IC8vIOinguaImFxuICAgIHB1YmxpYyB1aV93YWl0QmdJbWFnZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRubWljcm9waG9uZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfd2FpdEJnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRXYWl0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX2luc0JnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRJbnM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2luc1dpblBlckJnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV93aW5QZXJUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfYmdDaGF0OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRDaGF0U291bmQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfaW1nRW1vajogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgY2hhdEVtb2pQb3M6VUlTdGF0ZVBvcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgZW1vamlTcE51bTogbnVtYmVyW107XG4gICAgcHVibGljIGVtb2ppU3ByaXRlOiBjYy5TcHJpdGVbXTsgLy9MaXN0PFNwcml0ZT5cblxuICAgIHB1YmxpYyBhbGxpblNwaW5lOiBUZXhhc0FsbGluU3RhcnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9hbmltQWxsaW46IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIGFsbGluU3BpbmVLZWVwOiBUZXhhc0FsbGluS2VlcCA9IG51bGw7XG4gICAgcHVibGljIHVpX2FsbGluSW1nOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9hbmltQWxsaW5LZWVwOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV95b3V3aW46IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG5cbiAgICAvLyBwdWJsaWMgdWlfdHh0V2F0Y2g6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2l0RG93blRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfdGFrZUluQXBwbHlQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGFrZUluQXBwbHlUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGRlZmF1bHRDYXJkc01vdmVDYXJkczogZmd1aS5HQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcml2YXRlIGRlZmF1bHRDYXJkc1Bvc0NhcmRzOiBmZ3VpLkdDb21wb25lbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgZmlsbEZ1bjogRnVuY3Rpb24gPSBudWxsO1xuICAgIHB1YmxpYyBnZXQgbG9naW5Nb2RlbCgpOiBGX1RleGFzTW9kZWwge1xuICAgICAgICByZXR1cm4gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgb25Mb2FkRW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWIneWni+WMllxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIE15U3RhcnQoX2xvY2FscG9zOiBudW1iZXIsIF90YWJsZUNlbnRlcjogZmd1aS5HQ29tcG9uZW50LCBfY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIHRoaXMubG9jYWxwb3MgPSBfbG9jYWxwb3M7XG4gICAgICAgIHRoaXMudGFibGVjZW50ZXIgPSBfdGFibGVDZW50ZXI7XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBfY2FsbEJhY2s7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYmFua2VyUG9zOiBVSVN0YXRlUG9zO1xuICAgIHByaXZhdGUgY2FyZE5vZGVQb3M6IFVJU3RhdGVQb3M7XG4gICAgLy8gcHJpdmF0ZSBpbnNCZ1BvczpVSVN0YXRlUG9zO1xuICAgIC8vIHByaXZhdGUgZGVmYXVsdENhcmRzUG9zOlVJU3RhdGVQb3M7XG4gICAgcHJpdmF0ZSBnYW1ibGVJY29uUG9zOiBVSVN0YXRlUG9zO1xuICAgIC8vIHByaXZhdGUgaW5zV2luUGVyQmdQb3M6VUlTdGF0ZVBvcztcbiAgICBwcml2YXRlIGJnQ2hhdFBvczogVUlTdGF0ZVBvcztcbiAgICAvLyBwcml2YXRlIGRlZmF1bHRDYXJkc01vdmVQb3M6VUlTdGF0ZVBvcztcbiAgICBwcml2YXRlIEltZ0NoaXBNb3ZlOiBVSU1vdmVNb25vO1xuICAgIC8vIHByaXZhdGUgZGVmYXVsdENhcmRzTW92ZTpVSU1vdmVNb25vO1xuICAgIHByaXZhdGUgc3RhdHVzYmdTdGF0ZTogVUlTdGF0ZUJhc2U7XG4gICAgcHJpdmF0ZSBnYW1ibGVCZ1BvczogVUlTdGF0ZVBvcztcbiAgICBwcml2YXRlIHR4dEdhbWJsZVBvczogVUlTdGF0ZVBvcztcbiAgICAvLyBwcml2YXRlIHN0YXR1c2JnUG9zOlVJU3RhdGVQb3M7XG4gICAgcHJpdmF0ZSBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG5cbiAgICAgICAgdGhpcy5pbml0Q2FyZHMoKTtcblxuICAgICAgICB0aGlzLmFsbGluU3BpbmUgPSBuZXcgVGV4YXNBbGxpblN0YXJ0KHRoaXMudWlfYW5pbUFsbGluLm5vZGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYWxsaW5TcGluZSk7XG4gICAgICAgIHRoaXMuYWxsaW5TcGluZUtlZXAgPSBuZXcgVGV4YXNBbGxpbktlZXAodGhpcy51aV9hbmltQWxsaW5LZWVwLm5vZGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYWxsaW5TcGluZUtlZXApO1xuXG4gICAgICAgIHRoaXMuYmFua2VyUG9zID0gdGhpcy51aV9iYW5rZXIubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcyk7XG4gICAgICAgIHRoaXMuYmFua2VyUG9zLmZndWlDb21wb25lbnQgPSB0aGlzLnVpX2Jhbmtlci5hc0NvbTtcbiAgICAgICAgdGhpcy5iYW5rZXJQb3MuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMuY2FyZE5vZGVQb3MgPSB0aGlzLnVpX2NhcmROb2RlLm5vZGUuYWRkQ29tcG9uZW50KFVJU3RhdGVQb3MpO1xuICAgICAgICB0aGlzLmNhcmROb2RlUG9zLmZndWlDb21wb25lbnQgPSB0aGlzLnVpX2NhcmROb2RlLmFzQ29tO1xuICAgICAgICB0aGlzLmNhcmROb2RlUG9zLk15U3RhcnQoKTtcblxuICAgICAgICAvLyB0aGlzLmluc0JnUG9zID0gdGhpcy51aV9pbnNCZy5ub2RlLmFkZENvbXBvbmVudChVSVN0YXRlUG9zKTtcbiAgICAgICAgLy8gdGhpcy5pbnNCZ1Bvcy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9pbnNCZy5hc0NvbTtcbiAgICAgICAgLy8gdGhpcy5pbnNCZ1Bvcy5NeVN0YXJ0KCk7XG5cblxuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc1BvcyA9IHRoaXMudWlfZGVmYXVsdENhcmRzLm5vZGUuYWRkQ29tcG9uZW50KFVJU3RhdGVQb3MpO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc1Bvcy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9kZWZhdWx0Q2FyZHMuYXNDb207XG4gICAgICAgIC8vIHRoaXMuZGVmYXVsdENhcmRzUG9zLk15U3RhcnQoKTtcblxuICAgICAgICB0aGlzLmdhbWJsZUljb25Qb3MgPSB0aGlzLnVpX2dhbWJsZUljb24ubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcyk7XG4gICAgICAgIHRoaXMuZ2FtYmxlSWNvblBvcy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9nYW1ibGVJY29uLmFzQ29tO1xuICAgICAgICB0aGlzLmdhbWJsZUljb25Qb3MuTXlTdGFydCgpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5pbnNXaW5QZXJCZ1BvcyA9IHRoaXMudWlfaW5zV2luUGVyQmcubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcyk7XG4gICAgICAgIC8vIHRoaXMuaW5zV2luUGVyQmdQb3MuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfaW5zV2luUGVyQmcuYXNDb207XG4gICAgICAgIC8vIHRoaXMuaW5zV2luUGVyQmdQb3MuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMuYmdDaGF0UG9zID0gdGhpcy51aV9iZ0NoYXQubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcylcbiAgICAgICAgdGhpcy5iZ0NoYXRQb3MuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfYmdDaGF0LmFzQ29tO1xuICAgICAgICB0aGlzLmJnQ2hhdFBvcy5NeVN0YXJ0KCk7XG5cbiAgICAgICAgLy8gdGhpcy5kZWZhdWx0Q2FyZHNNb3ZlUG9zID0gdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLm5vZGUuYWRkQ29tcG9uZW50KFVJU3RhdGVQb3MpXG4gICAgICAgIC8vIHRoaXMuZGVmYXVsdENhcmRzTW92ZVBvcy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLmFzQ29tO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc01vdmVQb3MuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMuZ2FtYmxlQmdQb3MgPSB0aGlzLnVpX2dhbWJsZUJnLm5vZGUuYWRkQ29tcG9uZW50KFVJU3RhdGVQb3MpXG4gICAgICAgIHRoaXMuZ2FtYmxlQmdQb3MuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfZ2FtYmxlQmcuYXNDb207XG4gICAgICAgIHRoaXMuZ2FtYmxlQmdQb3MuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMudHh0R2FtYmxlUG9zID0gdGhpcy51aV90eHRHYW1ibGUubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcylcbiAgICAgICAgdGhpcy50eHRHYW1ibGVQb3MuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfdHh0R2FtYmxlLmFzQ29tO1xuICAgICAgICB0aGlzLnR4dEdhbWJsZVBvcy5NeVN0YXJ0KCk7XG5cbiAgICAgICAgLy8gdGhpcy5zdGF0dXNiZ1BvcyA9IHRoaXMudWlfc3RhdHVzYmcubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZVBvcylcbiAgICAgICAgLy8gdGhpcy5zdGF0dXNiZ1Bvcy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9zdGF0dXNiZy5hc0NvbTtcbiAgICAgICAgLy8gdGhpcy5zdGF0dXNiZ1Bvcy5NeVN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5JbWdDaGlwTW92ZSA9IHRoaXMudWlfSW1nQ2hpcC5ub2RlLmFkZENvbXBvbmVudChVSU1vdmVNb25vKTtcbiAgICAgICAgdGhpcy5JbWdDaGlwTW92ZS5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9JbWdDaGlwLmFzQ29tO1xuICAgICAgICAvLyB0aGlzLkltZ0NoaXBNb3ZlLk15U3RhcnQoKTtcblxuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc01vdmUgPSB0aGlzLnVpX2RlZmF1bHRDYXJkc01vdmUubm9kZS5hZGRDb21wb25lbnQoVUlNb3ZlTW9ubyk7XG4gICAgICAgIC8vIHRoaXMuZGVmYXVsdENhcmRzTW92ZS5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLmFzQ29tO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc01vdmUuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMuc3RhdHVzYmdTdGF0ZSA9IHRoaXMudWlfc3RhdHVzYmcubm9kZS5hZGRDb21wb25lbnQoVUlTdGF0ZUJhc2UpO1xuICAgICAgICB0aGlzLnN0YXR1c2JnU3RhdGUuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfc3RhdHVzYmcuYXNDb207XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXR1c2JnU3RhdGUuTXlTdGFydCgpO1xuXG4gICAgICAgIHRoaXMudWlfYmFua2VyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9jYXJkTm9kZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMudWlfaW5zQmcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLnVpX2RlZmF1bHRDYXJkcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfZ2FtYmxlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfaW5zV2luUGVyQmcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlNob3dJbnNXaW5QZXJfYm9vbChmYWxzZSk7XG4gICAgICAgIHRoaXMudWlfYmdDaGF0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy51aV9nYW1ibGVCZy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMudWlfSW1nQ2hpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuSW1nQ2hpcE1vdmUuSGlkZSgpO1xuICAgICAgICB0aGlzLmJnQ2hhdFBvcy5IaWRlKCk7XG4gICAgICAgIHRoaXMudWlfZGVmYXVsdENhcmRzTW92ZS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5Jbml0SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5Jbml0TGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5yZWN0VHJhbnNmb3JtID0gdGhpcy5mZ3VpQ29tcG9uZW50Oy8vLkdldENvbXBvbmVudDxSZWN0VHJhbnNmb3JtPiAoKTtcbiAgICAgICAgLy8gdGhpcy5kZWZhdWx0Q2FyZHNNb3ZlLnRvVHMgPSB0aGlzLnRhYmxlY2VudGVyO1xuICAgICAgICB0aGlzLnVpX2RlZmF1bHRDYXJkcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9nYW1ibGVCZy5ub2RlLmdldENvbXBvbmVudChVSVN0YXRlUG9zKS5TdGF0ZVRvQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMudWlfaW5zQmcubm9kZS5nZXRDb21wb25lbnQoVUlTdGF0ZVBvcykuU3RhdGVUb0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnVpX2luc1dpblBlckJnLm5vZGUuZ2V0Q29tcG9uZW50KFVJU3RhdGVQb3MpLlN0YXRlVG9BY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5jaGF0RW1valBvcyA9IHVpX2ltZ0Vtb2ouR2V0Q29tcG9uZW50PFVJU3RhdGVQb3M+ICgpO1xuICAgICAgICAvLyBpZiAodGhpcy5sb2NhbHBvcyA9PSAxKSB0aGlzLnNlbGYgPSB0cnVlO1xuICAgICAgICB0aGlzLnVpX2Jhbmtlci5ub2RlLmdldENvbXBvbmVudChVSVN0YXRlUG9zKS5IaWRlKCk7IC8vZmFsc2U7XG5cblxuICAgICAgICB0aGlzLkNsZWFyVXNlcigpO1xuICAgICAgICB0aGlzLlJlc2V0QWxsVUkoKTtcbiAgICAgICAgdGhpcy5Jbml0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuU2V0UG9zSW5WaWV3KHRoaXMubG9jYWxwb3MpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9Vc2VySW5mbyhudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5jYWxsQmFjayAhPSBudWxsKSB0aGlzLmNhbGxCYWNrKCk7XG5cbiAgICAgICAgdGhpcy51aV90eHRnYW1ibGV0ZW1wLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVpX3R4dHRleGFzdHlwZS50ZXh0ID0gXCJcIjtcbiAgICAgICAgdGhpcy51aV90ZXhhc3R5cGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3RlbXBsYXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9nYW1ibGVCZy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7XG5cbiAgICB9XG4gICAgcHVibGljIEluaXRMYW5ndWFnZSgpIHtcbiAgICAgICAgLy8gdGhpcy51aV90eHRXYXRjaC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTI5MSk7Ly/op4LmiJhcbiAgICAgICAgdGhpcy51aV9zaXREb3duVGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTI5Mik7Ly/lnZDkuItcbiAgICAgICAgdGhpcy51aV90eHRXYWl0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMTg4KTsvL+WNoOW6p+S4rVxuICAgIH1cbiAgICBwdWJsaWMgSW5pdEltYWdlKCkge1xuICAgICAgICAvLyB0aGlzLnVpX3dhaXRCZ0ltYWdlLnVybCA9IFwidWk6Ly90ZXhhcy9ndWFuemhhbl8yeFwiK1Rvb2xzRXguR2V0SW1hZ2VMYW5ndWFnZVN1ZigpO1xuICAgICAgICAvLyBSZXMuU2luZ2xldG9uLlNldEltYWdlU3ByaXRlKHVpX3dhdGNoQmcuR2V0Q29tcG9uZW50PEltYWdlPigpLCBcIndoaXJsX2dhbWluZ1wiLCBcImd1YW56aGFuXzJ4XCIgKyBUb29sc0V4LkdldEltYWdlTGFuZ3VhZ2VTdWYoKSk7XG4gICAgfVxuICAgIHByaXZhdGUgSW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy51aV9JbWdGcmVlVXNlckJ0bi5jbGVhckNsaWNrKCk7XG4gICAgICAgIC8vIHRoaXMudWlfSW1nRnJlZVVzZXJCdG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgbXlQb3MgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJ1aV9JbWdGcmVlVXNlckJ0bj09PT09PT09PT1teVBvczpcIiArIG15UG9zKTtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnNlcnZlcnBvcyA8PSAwICYmIChteVBvcyA8PSAwIHx8IG15UG9zID4gMTApICYmIHRoaXMudXNlckNvbm5lY3RTdGF0ZSAhPSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0KSB7XG4gICAgICAgIC8vICAgICAgICAgLy/nlZnluqfnmoTmg4XlhrXkuIvkuI3og73ngrnlh7vlhbbku5bluqfkvY1cbiAgICAgICAgLy8gICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LkNoZWNrQXV0b1NpdERvd24odGhpcy5sb2NhbHBvcyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLnVpX3RvdXhpYW5nQnRuLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV90b3V4aWFuZ0J0bi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBteVBvcyA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9wb3NTZXJ2ZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJwb3MgPD0gMCAmJiAobXlQb3MgPD0gMCB8fCBteVBvcyA+IDEwKSAmJiB0aGlzLnVzZXJDb25uZWN0U3RhdGUgIT0gVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdCkge1xuICAgICAgICAgICAgICAgIC8v55WZ5bqn55qE5oOF5Ya15LiL5LiN6IO954K55Ye75YW25LuW5bqn5L2NXG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5DaGVja0F1dG9TaXREb3duKHRoaXMubG9jYWxwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlNob3dVSVVzZXJJbmZvKHRoaXMucGxheWVyLCB0aGlzLmxvY2FscG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdENhcmRzKCkge1xuICAgICAgICB0aGlzLmZpcnN0Q2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZnRlckNhcmRzID0gW107XG4gICAgICAgIHRoaXMuZW1vamlTcE51bSA9IFsyLCA4LCA5LCAyLCAyLCA0LCA1LCA5LCA1LCAyLCAyLCAxMiwgNCwgMywgNCwgOSwgMywgNCwgNCwgM107XG4gICAgICAgIHRoaXMuZW1vamlTcHJpdGUgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJDYXJkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy51aV9Vc2VyQ2FyZHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnVpX0NhcmRzLnggPSAwO1xuICAgICAgICB0aGlzLmNhcmRMaXN0ID0gW107XG4gICAgICAgIHRoaXMuY2FyZExpc3QxID0gW107XG4gICAgICAgIHRoaXMuY2FyZExpc3QyID0gW107XG4gICAgICAgIHRoaXMuZGVmYXVsdENhcmRzID0gW107XG4gICAgICAgIGxldCBjYXJkT2JqOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyArK2kpIHtcbiAgICAgICAgICAgIGNhcmRPYmogPSB0aGlzLnVpX2NhcmROb2RlMS5nZXRDaGlsZChcInVjYXJkXCIgKyAoaSArIDEpKS5hc0NvbTtcbiAgICAgICAgICAgIGNhcmQgPSBjYXJkT2JqLm5vZGUuZ2V0Q29tcG9uZW50KENhcmRSZWRiZXRDb21wKTtcbiAgICAgICAgICAgIGlmIChjYXJkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYXJkID0gY2FyZE9iai5ub2RlLmFkZENvbXBvbmVudChDYXJkUmVkYmV0Q29tcCk7XG4gICAgICAgICAgICAgICAgY2FyZC5mZ3VpQ29tcG9uZW50ID0gY2FyZE9iajtcbiAgICAgICAgICAgICAgICBjYXJkT2JqLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuSW5pdChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmNhcmRMaXN0MS5wdXNoKGNhcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyArK2kpIHtcbiAgICAgICAgICAgIGNhcmRPYmogPSB0aGlzLnVpX2NhcmROb2RlMi5nZXRDaGlsZChcInVjYXJkXCIgKyAoaSArIDEpKS5hc0NvbTtcbiAgICAgICAgICAgIGNhcmQgPSBjYXJkT2JqLm5vZGUuZ2V0Q29tcG9uZW50KENhcmRSZWRiZXRDb21wKTtcbiAgICAgICAgICAgIGlmIChjYXJkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYXJkID0gY2FyZE9iai5ub2RlLmFkZENvbXBvbmVudChDYXJkUmVkYmV0Q29tcCk7XG4gICAgICAgICAgICAgICAgY2FyZC5mZ3VpQ29tcG9uZW50ID0gY2FyZE9iajtcbiAgICAgICAgICAgICAgICBjYXJkT2JqLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuSW5pdChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmNhcmRMaXN0Mi5wdXNoKGNhcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJkTGlzdCA9IHRoaXMuY2FyZExpc3QxO1xuICAgICAgICB0aGlzLnVpX2NhcmROb2RlID0gdGhpcy51aV9jYXJkTm9kZTE7XG4gICAgICAgIHRoaXMudWlfdGV4YXN0eXBlID0gdGhpcy51aV90ZXhhc3R5cGUxO1xuICAgICAgICB0aGlzLnVpX3R4dHRleGFzdHlwZSA9IHRoaXMudWlfdHh0dGV4YXN0eXBlMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgY2FyZE9iaiA9IHRoaXMudWlfZGVmYXVsdENhcmRzLmdldENoaWxkKFwiZGVmYXVsdENhcmRcIiArIChpICsgMSkpLmFzQ29tO1xuICAgICAgICAgICAgY2FyZCA9IGNhcmRPYmoubm9kZS5nZXRDb21wb25lbnQoQ2FyZFJlZGJldENvbXApO1xuICAgICAgICAgICAgaWYgKGNhcmQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhcmQgPSBjYXJkT2JqLm5vZGUuYWRkQ29tcG9uZW50KENhcmRSZWRiZXRDb21wKTtcbiAgICAgICAgICAgICAgICBjYXJkLmZndWlDb21wb25lbnQgPSBjYXJkT2JqO1xuICAgICAgICAgICAgICAgIGNhcmRPYmoubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC5Jbml0KGZhbHNlKTtcbiAgICAgICAgICAgIGNhcmQuU2hvdygpO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeOqeWutuemu+W8gO+8jOmakOiXj+eOqeWutuaVsOaNrizmuIXnkIbmlbDmja7lubbph43nva5VSVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIENsZWFyVXNlcigpIHtcbiAgICAgICAgdGhpcy5SZXNldFVzZXJEYXRhKCk7XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlNob3dVSUdhbWJsZShmYWxzZSk7XG4gICAgICAgIC8v6YeN572uVUlcbiAgICAgICAgdGhpcy5VcGRhdGVVc2VyQ29ubmVjdFN0YXRlKFVzZXJDb25uZWN0U3RhdGUuZnJlZSk7XG4gICAgICAgIHRoaXMuU3RvcENsb2NrKCk7XG4gICAgICAgIHRoaXMuU3RvcEFwcGx5Q2xvY2soKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBSZW1vdmVDYXJkTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhcmRMaXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiQ2FyZEJ1dHRvblwiKS5hc0J1dHRvbi5jbGVhckNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgQWRkQ2FyZExpc2VudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkTGlzdCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIgJiYgaSA8IHRoaXMuY2FyZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkOiBDYXJkUmVkYmV0Q29tcCA9IHRoaXMuY2FyZExpc3RbaV07XG4gICAgICAgICAgICBjYXJkLmdldENoaWxkKFwiQ2FyZEJ1dHRvblwiKS5hc0J1dHRvbi5jbGVhckNsaWNrKCk7XG4gICAgICAgICAgICBjYXJkLmdldENoaWxkKFwiQ2FyZEJ1dHRvblwiKS5hc0J1dHRvbi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNHYW1pbmcgJiYgY2FyZC5WYWx1ZSA+IDAgJiYgdGhpcy5zZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3Nob3dteWNhcmRfdGV4KGNhcmQuVmFsdWUsIGNhcmQuX3Nob3dUeXBlID09IDAgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBSZXNldFVzZXJEYXRhKCkge1xuICAgICAgICAvL+a4heeQhuaVsOaNriAgIFxuICAgICAgICAvLyBpZiAodGhpcy5zZWxmKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyAoXCLmuIXnqbroh6rlt7HnmoTnjqnlrrbmlbDmja4gXCIpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGUgPSBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5pbnZhbGlkO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwicG9zOlwiK3RoaXMubG9jYWxwb3MgKyBcIua4hemZpOeOqeWutjpcIiArIHRoaXMucGxheWVyLl9uKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNlbGYgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TZXRCYW5rZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLmlzR2l2ZVVwID0gZmFsc2U7XG4gICAgICAgIC8vY29uc29sZS5sb2coR2l2ZVVwICsgXCIgZ2l2ZSB1cCBcIiArIEdldFBsYXllck5hbWUoKSk7XG4gICAgICAgIHRoaXMudWlfbmFtZVRleHQudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfZ29sZEJnLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJwb3MgPSAtMTtcbiAgICAgICAgdGhpcy5vcGVuQ2FyZHMgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZnRlckNhcmRzID0gW107XG4gICAgICAgIHRoaXMudWlfaGVhZEltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9WSVBGcmFtZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU2hvd0luc1dpblBlcl9ib29sKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlFZnRBbGxJbihmYWxzZSk7XG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy51aV9oZWFkSW1hZ2UsIFwibmV3X3NpdGRvd25cIiwgXCJUZXhhc1wiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBHZXRQbGF5ZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllciAhPSBudWxsID8gdGhpcy5wbGF5ZXIuX24gOiB0aGlzLmxvY2FscG9zLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIC8v5q+P5bGA5byA5aeL55qE5pe25YCZ6YeN572u5pWw5o2u5ZKMVUlcbiAgICBwdWJsaWMgUmVzZXRQbGF5aW5nRGF0YUFuZFVJKCkge1xuICAgICAgICB0aGlzLlJlc2V0UGxheWluZ0RhdGEoKTtcbiAgICAgICAgdGhpcy5SZXNldFBsYXlpbmdVSSgpO1xuICAgIH1cbiAgICAvL+mHjee9ruavj+WxgOeahOaVsOaNrlxuICAgIHByaXZhdGUgUmVzZXRQbGF5aW5nRGF0YSgpIHtcbiAgICAgICAgdGhpcy5jdXJDYXJkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5jdXJHYW1ibGUgPSAwO1xuICAgICAgICB0aGlzLmlzSW5zID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxsaW5HYW1ibGUgPSAwO1xuICAgICAgICB0aGlzLmlzR2l2ZVVwID0gZmFsc2U7XG4gICAgICAgIC8vY29uc29sZS5sb2coR2l2ZVVwK1wiZ2l2ZSB1cCBcIiArIEdldFBsYXllck5hbWUoKSk7XG4gICAgICAgIHRoaXMuU2V0QmFua2VyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5vcGVuQ2FyZHMgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZnRlckNhcmRzID0gW107XG4gICAgfVxuICAgIHByaXZhdGUgUmVzZXRBbGxVSSgpIHtcbiAgICAgICAgdGhpcy5SZXNldFBsYXlpbmdVSSgpO1xuICAgICAgICB0aGlzLlNob3dVSVdhdGNoKGZhbHNlKTtcbiAgICAgICAgdGhpcy5TaG93VUlXaWF0VGFrZUluKGZhbHNlKTtcblxuICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwub3BlblYgPiAwKSB7XG4gICAgICAgICAgICAvLyBSZXMuU2luZ2xldG9uLlNldEltYWdlU3ByaXRlKHVpX2dvbGRCZywgXCJ3aGlybF9nYW1pbmdcIiwgXCJ2ZWRpb0dvbGRfYmdcIik7XG4gICAgICAgICAgICB0aGlzLnVpX2dvbGRCZy5zZXRTaXplKDEzMCwgMzYpOyAgLy8uR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkuc2l6ZURlbHRhID0gbmV3IFZlY3RvcjIoMTMwLCAzNik7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2dvbGRCZy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgLTc1LjEsMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ph43nva5VSVxuICAgIHB1YmxpYyBSZXNldFBsYXlpbmdVSSgpIHtcbiAgICAgICAgLy9yZXR1cm47Ly8g5rKh5pyJ5pyN5Yqh5Zmo5pe25pa55L6/5rWL6K+VXG4gICAgICAgIC8v6ZqQ6JeP5omA5pyJ546p5a6255u45YWz55qE5Y+v5Lul6YeN572u55qEVUlcbiAgICAgICAgdGhpcy5zaG93VUlCYW5rZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3dVSUNhcmRzKGZhbHNlKTtcbiAgICAgICAgdGhpcy51aV9Vc2VyQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1VJRGlzY29ubmVjdChmYWxzZSk7XG4gICAgICAgIHRoaXMuU2hvd1VJR2FtYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlMb3NlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlNaWNybyhmYWxzZSk7XG4gICAgICAgIHRoaXMuU2hvd1VJVXNlckhhbmRsZVN0YXRlKC0xKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbnNTdGF0ZVRleHQoLTEpO1xuICAgICAgICB0aGlzLlNob3dVSVJlYWR5KGZhbHNlKTtcbiAgICAgICAgdGhpcy5TaG93VUlUb3BUaXAobnVsbCk7XG5cbiAgICAgICAgdGhpcy5TaG93VUlXYXRjaCh0aGlzLklzV2F0Y2goKSAmJiAhdGhpcy5Jc0tlZXAoKSk7XG4gICAgICAgIHRoaXMuU2hvd1VJV2lhdFRha2VJbih0aGlzLklzV2FpdFRvVGFrZUluKCkgJiYgIXRoaXMuSXNLZWVwKCkpO1xuICAgICAgICB0aGlzLnNob3dVSUVmdEFsbEluKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93VUlFZnRZb3VXaW4oZmFsc2UpO1xuICAgICAgICB0aGlzLlN0b3BVSUVmdFJvdGF0ZSgpO1xuICAgICAgICB0aGlzLlNob3dUZXhhc1R5cGUoZmFsc2UpO1xuICAgICAgICB0aGlzLlJlbW92ZUNhcmRMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuU2hvd0luc1dpblBlcl9ib29sKGZhbHNlKTtcbiAgICAgICAgdGhpcy5TaG93SW5zU3RhdXMoZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgR2FtZU92ZXIoX21vbmV5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5VcGRhdGVNb25leShfbW9uZXkpO1xuICAgICAgICB0aGlzLlN0b3BDbG9jaygpO1xuICAgIH1cbiAgICBwdWJsaWMgVXBkYXRlTW9uZXkoX21vbmV5OiBudW1iZXIgPSAtOTk5OTk5KSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllciA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnBsYXllci5nb2xkID0gX21vbmV5ID09IC05OTk5OTkgPyB0aGlzLnBsYXllci5nb2xkIDogX21vbmV5O1xuICAgICAgICAvL3VpX3R4dEdvbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIocGxheWVyLmdvbGQpO1xuICAgICAgICB0aGlzLlNldFJlbWFpbk1vbmV5KHRoaXMucGxheWVyLmdvbGQpO1xuICAgICAgICAvL+aJk+S4quihpeS4gVxuICAgICAgICBpZiAodGhpcy5zZWxmKSB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5NeUVuZE1vbmV5ID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMucGxheWVyLmdvbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/mm7TmlrDlj6/luKblh7rph5HluIFcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5Jc0Nhbk91dEdvbGQoKTtcbiAgICB9XG4gICAgcHVibGljIFNldFJlbWFpbk1vbmV5KHJlbWFpbk1vbmV5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV9nb2xkQmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfdHh0R29sZC50ZXh0ID0gVGV4YXMuZm9ybWF0TnVtYmVyMTAwKFVJVXRpbC5OdW1iZXJUb0ludChyZW1haW5Nb25leSkpICsgXCJcIjtcbiAgICB9XG4gICAgLy/kuIvms6gg6YO95piv55Sx5pyN5Yqh5Zmo6L+U5Zue55qE5q+P5qyh5LiL5rOo55qE5pWw5a2XLOmcgOimgeWuouaIt+err+e0r+WKoCjlvrflt57miZHlhYvkuI3ntK/liqApXG4gICAgcHVibGljIFNldEdhbWJsZShnYW1ibGVNb25leTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudWlfdHh0R2FtYmxlLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwVG9LKGdhbWJsZU1vbmV5KSArIFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRCYW5rZXIoX2lzYmFua2VyOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNiYW5rZXIgPSBfaXNiYW5rZXI7XG4gICAgICAgIHRoaXMuc2hvd1VJQmFua2VyKF9pc2Jhbmtlcik7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmm7TmlrDnjqnlrrbkv6Hmga9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1cGRhdGVfVXNlckluZm8oc2Q6IE90aGVyVXNlckluZm9TRCkge1xuICAgICAgICBpZiAoc2QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51aV9yZWFkeS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dGdhbWJsZXRlbXAudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dHRleGFzdHlwZS50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudWlfdGV4YXN0eXBlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfdGVtcGxhdGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxmID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLkNsZWFyVXNlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVzZXJJbmZvID09IG51bGwgfHwgdGhpcy51c2VySW5mby5weS51c2VyaWQgIT0gc2QucHkudXNlcmlkKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBBdWRpbyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlJlc2V0UGxheWluZ0RhdGFBbmRVSSgpO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gc2Q7XG4gICAgICAgIHRoaXMucGxheWVyID0gc2QucHk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw55So5oi35L+h5oGvXCIgKyB0aGlzLmZndWlDb21wb25lbnQubmFtZSk7XG4gICAgICAgIC8v5Yik5pat5piv5LiN5piv55So5oi35pys5Lq6XG4gICAgICAgIHRoaXMuc2VsZiA9IHNkLnB5LnVzZXJpZCA9PSB0aGlzLmxvZ2luTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZDtcbiAgICAgICAgaWYgKHRoaXMuc2VsZikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7nva7oh6rlt7HnmoTnjqnlrrbmlbDmja4gXCIgKyBzZC5wb3MpO1xuICAgICAgICAgICAgdGhpcy51aV9jYXJkTm9kZSA9IHRoaXMudWlfY2FyZE5vZGUxO1xuICAgICAgICAgICAgdGhpcy51aV90ZXhhc3R5cGUgPSB0aGlzLnVpX3RleGFzdHlwZTE7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dHRleGFzdHlwZSA9IHRoaXMudWlfdHh0dGV4YXN0eXBlMTtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3QgPSB0aGlzLmNhcmRMaXN0MTtcbiAgICAgICAgICAgIHRoaXMudWlfY2FyZE5vZGUxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy51aV90ZXhhc3R5cGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy51aV9jYXJkTm9kZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX2NhcmROb2RlID0gdGhpcy51aV9jYXJkTm9kZTI7XG4gICAgICAgICAgICB0aGlzLnVpX3RleGFzdHlwZSA9IHRoaXMudWlfdGV4YXN0eXBlMjtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0dGV4YXN0eXBlID0gdGhpcy51aV90eHR0ZXhhc3R5cGUyO1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdCA9IHRoaXMuY2FyZExpc3QyO1xuICAgICAgICAgICAgdGhpcy51aV9jYXJkTm9kZTIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlcnZlcnBvcyA9IHNkLnBvcztcbiAgICAgICAgdGhpcy51aV9nb2xkQmcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfdHh0R29sZC50ZXh0ID0gVGV4YXMuZm9ybWF0TnVtYmVyMTAwKHNkLnB5LmdvbGQpICsgXCJcIjtcbiAgICAgICAgbGV0IGlzRGlzQ29ubmVjdCA9IHNkLmlzRGlzID09IDE7XG4gICAgICAgIHRoaXMuc2hvd2R1YW54aWFuKGlzRGlzQ29ubmVjdCk7XG5cbiAgICAgICAgbGV0IGlzS2VlcFNlYXQgPSBzZC5pc0sgPiAwOyAvL+eVmeW6pyAtLUZJWE1FXG4gICAgICAgIGxldCBjb25uZWN0U3RhdGU6IFVzZXJDb25uZWN0U3RhdGUgPSBUZXhhc1VzZXJDb21wLkdldFVzZXJDb25uZWN0U3RhdGUodGhpcy5zZXJ2ZXJwb3MsIGlzS2VlcFNlYXQsIGlzRGlzQ29ubmVjdCk7XG5cbiAgICAgICAgdGhpcy5VcGRhdGVVc2VyQ29ubmVjdFN0YXRlKGNvbm5lY3RTdGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZiAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwgIT0gbnVsbCAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwud2VjaGF0ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC53ZWNoYXQud05hbWUsIDYpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZGRkMe+8mlwiICsgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLndlY2hhdC53aWNvbik7XG4gICAgICAgICAgICB0aGlzLnVpX2hlYWRJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudWlfVklQRnJhbWUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfaGVhZEltYWdlLCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwud2VjaGF0LndpY29uKVxuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZSh0aGlzLnVpX1ZJUEZyYW1lLCBcIlZJUFwiICsgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLl92bHYsIFwiVGV4YXNcIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5fbiArIFwiVklQ562J57qn77yaXCIgKyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwuX3Zsdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIudXJlbWFyayAhPSBudWxsICYmIHRoaXMucGxheWVyLnVyZW1hcmsucmVtYXJrTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIHRoaXMucGxheWVyLnVyZW1hcmsucmVtYXJrTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQodGhpcy51aV9uYW1lVGV4dCwgc2QucHkud2VjaGF0LndOYW1lLCA2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudWlfaGVhZEltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51aV9WSVBGcmFtZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wbGF5ZXIuX24gKyBcIlZJUOetiee6p++8mlwiICsgdGhpcy5wbGF5ZXIuX3Zsdik7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfaGVhZEltYWdlLCB0aGlzLnVzZXJJbmZvLnB5LndlY2hhdC53aWNvbik7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfVklQRnJhbWUsIFwiVklQXCIgKyB0aGlzLnBsYXllci5fdmx2LCBcIlRleGFzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGYgJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuQ2hlY2tJc0xvc2UodGhpcy5wbGF5ZXIuZ29sZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEdldFVzZXJDb25uZWN0U3RhdGUoc2VydmVyUG9zOiBudW1iZXIsIGlzS2VlcFNlYXQ6IGJvb2xlYW4gPSBmYWxzZSwgaXNEaXNDb25uZWN0OiBib29sZWFuID0gZmFsc2UpOiBVc2VyQ29ubmVjdFN0YXRlIHtcbiAgICAgICAgbGV0IGNvbm5lY3RTdGF0ZTogVXNlckNvbm5lY3RTdGF0ZSA9IFVzZXJDb25uZWN0U3RhdGUuZnJlZTtcbiAgICAgICAgLy9pc0tlZXBTZWF0ID0gZmFsc2U7Ly/nlZnluqcgLS1GSVhNRVxuICAgICAgICBpZiAoaXNLZWVwU2VhdCkge1xuICAgICAgICAgICAgY29ubmVjdFN0YXRlID0gVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0Rpc0Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0U3RhdGUgPSBVc2VyQ29ubmVjdFN0YXRlLmRpc2Nvbm5lY3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpc1dhdGNoOiBib29sZWFuID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuSXNQb3NXYXRjaChzZXJ2ZXJQb3MpO1xuICAgICAgICAgICAgICAgIGxldCBpc1dhaXRUYWtlSW46IGJvb2xlYW4gPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc1Bvc1dhaXRUb1Rha2VJbihzZXJ2ZXJQb3MpO1xuICAgICAgICAgICAgICAgIGlmIChpc1dhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RTdGF0ZSA9IFVzZXJDb25uZWN0U3RhdGUud2F0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzV2FpdFRha2VJbikge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0U3RhdGUgPSBVc2VyQ29ubmVjdFN0YXRlLndhaXRUYWtlSW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0U3RhdGUgPSBVc2VyQ29ubmVjdFN0YXRlLndhaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpc3cgYXRjaDpcIiArIHNlcnZlclBvcyArIFwiZGRkOlwiICsgaXNXYXRjaCk7IC0tdGVtcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbm5lY3RTdGF0ZTtcbiAgICB9XG4gICAgcHVibGljIFJlc2V0VXNlckNvbXBVSSgpIHtcbiAgICAgICAgdGhpcy5TaG93VUlSZWFkeShmYWxzZSk7XG4gICAgICAgIHRoaXMuU2hvd0xvc2UoZmFsc2UpO1xuICAgICAgICB0aGlzLlNob3coKTtcbiAgICAgICAgdGhpcy5pbml0Q2FyZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd2R1YW54aWFuKGI6IGJvb2xlYW4pIHtcbiAgICAgICAgLy8gLy91aV9kaXNjb25uZWN0LmdhbWVPYmplY3QuU2V0QWN0aXZlIChiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0xvc2UoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gLy8vL2lmICghbG9zZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVpX2xvc2UudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfcmVhZHkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2Jhbmtlci52aXNpYmxlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgUmVwbGFjZSgpIHtcbiAgICAgICAgdGhpcy5SZXNldFVzZXJDb21wVUkoKTtcbiAgICAgICAgdGhpcy5SZXNldFBsYXlpbmdVSSgpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIHRoaXMucGxheWVyLl9uLCA2KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX2dvbGRCZy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV90eHRHb2xkLnRleHQgPSBUZXhhcy5mb3JtYXROdW1iZXIxMDAodGhpcy5wbGF5ZXIuZ29sZCkgKyBcIlwiO1xuICAgIH1cbiAgICAvL+aYvuekuuWFrOW8gOeahOeJjCzliJ3lp4vku47kuInlvKAs5ZKM56ys5Zub56ug5byA5aeLXG4gICAgcHVibGljIFNob3dPcGVuQ2FyZChjYXJkczogbnVtYmVyW10sIGNhcmRJbmRleDogbnVtYmVyID0gMykge1xuICAgICAgICBpZiAoY2FyZHMgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgY29uc29sZS5sb2coXCLmmL7npLrlhazlvIDnmoTniYws5Yid5aeL5LuO5LiJ5bygLOWSjOesrOWbm+eroOW8gOWni3VzZXJQb3M6XCIgKyB0aGlzLmxvY2FscG9zICsgXCIgY2FyZHM6XCIgKyBjYXJkcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnVpX1VzZXJDYXJkcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSArIDIgPD0gY2FyZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRDYXJkVmFsKGkgKyAyLCBjYXJkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcHVibGljICBTZXRDYXJkSGlkZSAoY2FyZEluZGV4Om51bWJlcikge1xuICAgIC8vICAgICBsZXQgY2FyZDpDYXJkUmVkYmV0Q29tcCA9IHRoaXMuY2FyZExpc3RbY2FyZEluZGV4XTtcbiAgICAvLyAgICAgY2FyZC51aV92YWwudmlzaWJsZSA9IGZhbHNlO1xuICAgIC8vIH1cblxuICAgIHByaXZhdGUgU2V0Q2FyZFZhbChjYXJkSW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXAgPSB0aGlzLmNhcmRMaXN0W2NhcmRJbmRleF07XG4gICAgICAgIGlmIChjYXJkKSB0aGlzLlNldENhcmRWYWxfcHViKGNhcmQsIHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIFNldENhcmRWYWxfcHViKGNhcmQ6IENhcmRSZWRiZXRDb21wLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dpdmVVcCkge1xuICAgICAgICAgICAgY2FyZC5SZXNldENvbG9yKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXJkLlNldENvbG9yR2FyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlNob3dPcGVuVGlwKHZhbHVlIDw9IDApO1xuICAgICAgICB9XG4gICAgICAgIGNhcmQuU2V0VmFsKHZhbHVlKTtcbiAgICAgICAgY2FyZC5TaG93KCk7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6Zmp5qih5byP5byA5aeL5pi+56S65LiN5piv6Ieq5bex55qE5L+d6Zmp546p5a6255qE6aaW54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJjYXJkc1wiPjwvcGFyYW0+XG4gICAgcHVibGljIFNob3dJbnN1cmFuY2VyQ2FyZChjYXJkczogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkNhcmRzID0gW107XG4gICAgICAgICAgICBVSVV0aWwuQ29uY2F0KHRoaXMub3BlbkNhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICB0aGlzLlNob3dDYXJkKGNhcmRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYvuekuuaJkeWFi+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FyZHNcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBTaG93Q2FyZChjYXJkczogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA8IHRoaXMuY2FyZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaVsOaNruW8guW4uO+8mlwiICsgY2FyZHMubGVuZ3RoICsgXCIsXCIgKyB0aGlzLmNhcmRMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9Vc2VyQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYXJkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdFtpXS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3RbaV0uUmVzZXRDb2xvcigpO1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdFtpXS5TZXRWYWwoY2FyZHNbaV0pOyAvLyBCaW5kQ2FyZChjYXJkTGlzdFtpXSwgY2FyZHNbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pi+56S65L+d6Zmp546p5a6255qE6I636IOc55m+5YiG5q+ULOS6lOW8oOWFrOeJjOeahOaXtuWAmeS4jeaYvuekuu+8jOiDnOeOh+Wwj+S6jjDnmoTml7blgJnkuI3mmL7npLpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInBlclwiPjwvcGFyYW0+XG4gICAgcHVibGljIFNob3dJbnNXaW5QZXJfbnVtKHBlcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pi+56S65L+d6Zmp546p5a6255qE6I636IOc55m+5YiG5q+ULOS6lOW8oOWFrOeJjOeahOaXtuWAmeS4jeaYvuekuu+8jOiDnOeOh+Wwj+S6jjDnmoTml7blgJnkuI3mmL7npLpcIilcbiAgICAgICAgbGV0IGlzU2hvdzogYm9vbGVhbiA9IHBlciA+PSAwICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkICE9IG51bGwgJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoICE9IDU7XG4gICAgICAgIHRoaXMuU2hvd0luc1dpblBlcl9ib29sKGlzU2hvdyk7XG4gICAgICAgIGlmIChpc1Nob3cpXG4gICAgICAgICAgICB0aGlzLnVpX3dpblBlclR4dC50ZXh0ID0gcGVyICsgXCIlXCI7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pi+56S66IOc546H55qE5pe25YCZ77yM5pyA5ZCO5q+U54mM5qC55o2u546p5a626L6T6LWi5pi+56S6MTAwJSAwJVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidmFsXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgU2hvd1dpblBlcih2YWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX3dpblBlclR4dC50ZXh0ID0gdmFsID4gMCA/IDEwMCArIFwiJVwiIDogMCArIFwiJVwiO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYvuekuuaJkeWFi+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FyZHNcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBTaG93TWF4Q2FyZChjYXJkczogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5TaG93VGV4YXNUeXBlKHRydWUpO1xuICAgICAgICB0aGlzLnVpX3RleGFzdHlwZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV90eHR0ZXhhc3R5cGUudGV4dCA9IFRleGFzVGFibGUuR2V0TmFtZUJ5VHlwZShUZXhhcy5HZXRUZXhhc1R5cGUoY2FyZHMpKTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0aGlzLl9tYXhDYXJkLCBjYXJkcyk7XG4gICAgICAgIHRoaXMudWlfVXNlckNhcmRzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2hvd1RleGFzVHlwZShpc1Nob3c6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMudWlfdGV4YXN0eXBlLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIGlmIChpc1Nob3cpIGNvbnNvbGUubG9nKFwiPT09PT09PT09PXRoaXMudWlfdGV4YXN0eXBlID0gXCIgKyB0aGlzLnVpX3RleGFzdHlwZS5ub2RlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEJpbmRDYXJkKGNhcmQ6IENhcmRSZWRiZXRDb21wLCBwb2tlcjogbnVtYmVyLCBfY3VySW5kZXg6IG51bWJlciwgaXNTZXRQb3MgPSB0cnVlKSB7XG4gICAgICAgIGNhcmQuSW5pdChmYWxzZSk7XG4gICAgICAgIHRoaXMuU2V0Q2FyZFZhbF9wdWIoY2FyZCwgcG9rZXIpO1xuICAgICAgICBjYXJkLlNob3coKTtcbiAgICAgICAgaWYgKGlzU2V0UG9zKSB7XG4gICAgICAgICAgICBjYXJkLnVpX3ZhbC5zZXRTY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIC8vIGNhcmQudWlfdmFsLnNldFBvc2l0aW9uKDAsMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxmICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9zY2FyZHMgIT0gbnVsbCAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fc2NhcmRzLmxlbmd0aCA+IDApLy/mmL7npLroh6rlt7HniYznmoTnp4DniYznirbmgIFcbiAgICAgICAge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3NjYXJkcy5mb3JFYWNoKHRlbXAgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wLmNwb3MgPT0gX2N1ckluZGV4KVxuICAgICAgICAgICAgICAgICAgICBjYXJkLlNob3dFeWUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pi+56S65byD54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgU2hvd0dpdmVVcCgpIHtcbiAgICAgICAgdGhpcy51aV90eHRnYW1ibGV0ZW1wLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLmlzR2l2ZVVwID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZikge1xuICAgICAgICAgICAgdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfZGVmYXVsdENhcmRzTW92ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmRlZmF1bHRDYXJkc01vdmVDYXJkc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYW1lID0gXCIgKyB0aGlzLmZndWlDb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQgPSB0aGlzLnVpX2RlZmF1bHRDYXJkc01vdmUuZ2V0Q2hpbGQoYGRlZmF1bHRDYXJkMU1vdmVgKS5hc0NvbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShjYXJkLmdldENoaWxkKFwidmFsXCIpLmFzTG9hZGVyLCBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUsIFwiVGV4YXNcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdmFyIGVuZFYgPSB0aGlzLmNvbnZlcnROb2RlU3BhY2VBUihjYXJkLm5vZGUsIHRoaXMudGFibGVjZW50ZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4zLCBlbmRWKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbk91dCgpKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYudWlfZGVmYXVsdENhcmRzTW92ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZGVmYXVsdENhcmRzTW92ZS5zcGVlZCA9IDI7XG4gICAgICAgIC8vIHRoaXMuZGVmYXVsdENhcmRzTW92ZS5pc0ZhZGUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc01vdmUuTW92ZSAoKTtcblxuXG5cbiAgICAgICAgdGhpcy5VcGRhdGVHaXZlVXBTdGF0ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgVXBkYXRlR2l2ZVVwU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNHaXZlVXAgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3RbaV0uU2V0Q29sb3JHYXJ5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdENhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkc1tpXS5IaWRlKCk7IC8v5byD54mM5ZCO6aaW54mM6ZqQ6JePXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9oZWFkSW1hZ2UuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICB0aGlzLnVpX3RvdXhpYW5nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgdGhpcy51aV9nYW1ibGVJY29uLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVTdGF0ZVRleHQoVGV4YXNVc2VySGFuZGxlU3RhdGUuZ2l2ZVVwKTtcblxuICAgICAgICB0aGlzLlNob3dJbnNTdGF1cyhmYWxzZSk7XG4gICAgICAgIHRoaXMuU2hvd0luc1dpblBlcl9ib29sKGZhbHNlKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzaG93RGVsYXkoZGVsYXlUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNQbGF5aW5nKCkgJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNHYW1pbmcgJiYgIXRoaXMuaXNHaXZlVXApIHtcbiAgICAgICAgICAgIGlmIChkZWxheVRpbWUgPiA1KSB7XG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zdG9wRWZmZWN0KFwidGV4YXNfdGltZW91dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2hvd0Nsb2NrKGRlbGF5VGltZSwgZGVsYXlUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOihjOWKqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEV4ZWN1dGUodHVybkNoYW5nZTogYm9vbGVhbiwgY2Q6IG51bWJlciA9IDAsIGRlbGF5VGltZTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLkFjaXRvbiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIC8vIGxldCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5NaW5lRXhlY3V0ZSh0aGlzLnNlbGYsIHR1cm5DaGFuZ2UpO1xuICAgICAgICAgICAgLy8gfSwgNTAwKVxuICAgICAgICAgICAgLy8gVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuTWluZUV4ZWN1dGUodGhpcy5zZWxmLCB0dXJuQ2hhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBsYXllci51cmVtYXJrICE9IG51bGwgJiYgdGhpcy5wbGF5ZXIudXJlbWFyay5yZW1hcmtOYW1lICE9IFwiXCIpIHtcbiAgICAgICAgICAgIFVJVXRpbC5TZXRMaW1pdFR4dCh0aGlzLnVpX25hbWVUZXh0LCB0aGlzLnBsYXllci51cmVtYXJrLnJlbWFya05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLndlY2hhdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIHRoaXMucGxheWVyLndlY2hhdC53TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQodGhpcy51aV9uYW1lVGV4dCwgdGhpcy5wbGF5ZXIuX24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLklzUGxheWluZygpICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzR2FtaW5nICYmICF0aGlzLmlzR2l2ZVVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGUgdGhpcy5Jc1BsYXlpbmcoKSAmJiBGX1RleGFzVmlld0N0ciBjZCA9IFwiLCBjZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4ZWN1dGUgdGhpcy5Jc1BsYXlpbmcoKSAmJiBGX1RleGFzVmlld0N0ciBkZWxheVRpbWUgPSBcIiwgZGVsYXlUaW1lKTtcbiAgICAgICAgICAgIGNkIC09IGRlbGF5VGltZTtcbiAgICAgICAgICAgIGNkID0gTWF0aC5mbG9vcihjZCk7XG4gICAgICAgICAgICB0aGlzLlNob3dDbG9jayhjZCA9PSAwID8gdGhpcy5NQVhDRCAtIGRlbGF5VGltZSA6IGNkLCBjZCA9PSAwID8gdGhpcy5NQVhDRCAtIGRlbGF5VGltZSA6IGNkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqeihjOWKqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidHVybkNoYW5nZVwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiaXNGaXJzdFR1cm5cIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImlzSW5zdXJhbmNlXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgSW5zdXJhbmNlRXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLkv53pmanooYzliqhcIik7XG4gICAgICAgIHRoaXMuQWNpdG9uID0gdHJ1ZTtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5NaW5lSW5zdXJhbmNlRXhlY3V0ZSh0aGlzLnNlbGYpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIudXJlbWFyayAhPSBudWxsICYmIHRoaXMucGxheWVyLnVyZW1hcmsucmVtYXJrTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBVSVV0aWwuU2V0TGltaXRUeHQodGhpcy51aV9uYW1lVGV4dCwgdGhpcy5wbGF5ZXIudXJlbWFyay5yZW1hcmtOYW1lKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLndlY2hhdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIHRoaXMucGxheWVyLndlY2hhdC53TmFtZSlcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KHRoaXMudWlfbmFtZVRleHQsIHRoaXMucGxheWVyLl9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5Jc1BsYXlpbmcoKSAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc0dhbWluZyAmJiAhdGhpcy5pc0dpdmVVcCkge1xuICAgICAgICAgICAgdGhpcy5TaG93Q2xvY2soRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubGVmdHRpbWUsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmxlZnR0aW1lKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93SW5zU3RhdXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51aV90eHRJbnMudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MjQpOy8v6LSt5Lmw5LitXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/mmL7npLroh6rlt7HlvZPliY3miYvnmoTmnIDlpKfniYxcbiAgICBwdWJsaWMgU2hvd01heENhcmRzKHNlbGVjdENhcmRzTGlzdDogbnVtYmVyW10sIG1heENhcmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLmNhcmRMaXN0LmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgICAgICAvL+W8g+eJjOeOqeWutuaJi+eJjOWni+e7iOe9rueBsFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc0dpdmVVcCArIFwi5pi+56S66Ieq5bex5b2T5YmN5omL55qE5pyA5aSn54mMOnNlbGVjdENhcmRzTGlzdD1cIiArIHNlbGVjdENhcmRzTGlzdCArIFwiLHRlbXAuVmFsdWU9XCIgKyB0ZW1wLlZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RDYXJkc0xpc3QuaW5kZXhPZih0ZW1wLlZhbHVlKSA9PSAtMSB8fCB0aGlzLmlzR2l2ZVVwKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5TZXRDb2xvckdhcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXAuUmVzZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wLlNob3dNYXhDYXJkQmcobWF4Q2FyZHMuaW5kZXhPZih0ZW1wLlZhbHVlKSA+PSAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHByaXZhdGUgIEhpZGVDaGlsZCAocGFyZW50OmZndWkuR0NvbXBvbmVudCkge1xuICAgIC8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcmVudC5fY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICAgIHBhcmVudC5fY2hpbGRyZW5bal0udmlzaWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIHB1YmxpYyBHZXRDYXJkKGNhcmRJbmRleDogbnVtYmVyKTogQ2FyZFJlZGJldENvbXAge1xuICAgICAgICAvL+WFiOWPmOaIkOiDjOmdoiAgICAgIFxuICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXAgPSBudWxsO1xuICAgICAgICBpZiAoY2FyZEluZGV4ID49IDIgfHwgdGhpcy5zZWxmKSB7XG4gICAgICAgICAgICBpZiAoY2FyZEluZGV4IDwgdGhpcy5jYXJkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYXJkID0gdGhpcy5jYXJkTGlzdFtjYXJkSW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcmRJbmRleDpcIiArIGNhcmRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZEluZGV4IDwgdGhpcy5kZWZhdWx0Q2FyZHMubGVuZ3RoICYmICF0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIGNhcmQgPSB0aGlzLmRlZmF1bHRDYXJkc1tjYXJkSW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj5HniYxpbmRleOS4jeWvue+8mlwiICsgY2FyZEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPkeeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFNlbmRDYXJkKGNhcmRJbmRleDogbnVtYmVyLCBwb2tlcjogbnVtYmVyLCBpc0FuaW0gPSB0cnVlLCBvcGVuUGFpOiBudW1iZXJbXSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcGVuQ2FyZHMgPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0aGlzLm9wZW5DYXJkcywgb3BlblBhaSk7XG4gICAgICAgIGxldCB0ZW1wQ2FyZEluZGV4ID0gY2FyZEluZGV4O1xuICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXAgPSB0aGlzLkdldENhcmQoY2FyZEluZGV4KTtcbiAgICAgICAgaWYgKGNhcmQgPT0gbnVsbCkgeyBjb25zb2xlLmxvZyhcImZldGFsIGVycm9yOiBTZW5kQ2FyZCBpcyBudWxsXCIpOyByZXR1cm47IH1cbiAgICAgICAgY2FyZC5TaG93KCk7XG4gICAgICAgIGlmICh0aGlzLmN1ckNhcmRJbmRleCA9PSBjYXJkSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1ckNhcmRJbmRleCA9IGNhcmRJbmRleDtcbiAgICAgICAgY2FyZC5TZXRWYWwocG9rZXIpO1xuICAgICAgICB0aGlzLlVwZGF0ZVBvcyh0aGlzLm9wZW5DYXJkcyk7XG4gICAgICAgIGlmIChpc0FuaW0pIHtcbiAgICAgICAgICAgIGNhcmQuUmVzZXQoZmFsc2UpO1xuXG4gICAgICAgICAgICBjYXJkLnVpX3ZhbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vdmVOMXRvTjIoY2FyZC51aV92YWwubm9kZSwgdGhpcy50YWJsZWNlbnRlci5ub2RlKTtcbiAgICAgICAgICAgIC8vIGNhcmQudWlfdmFsLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBtb3ZlVGltZSA9IDAuMztcblxuICAgICAgICAgICAgaWYgKHRlbXBDYXJkSW5kZXggPiAxIHx8IHRoaXMuc2VsZikge1xuICAgICAgICAgICAgICAgIGNhcmQudWlfdmFsLm5vZGUuc2V0U2NhbGUoMC4yLCAwLjIpO1xuICAgICAgICAgICAgICAgIGNhcmQudWlfdmFsLm5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8obW92ZVRpbWUsIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC51aV92YWwubm9kZS5zZXRTY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBjYXJkLnVpX3ZhbC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wMSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKG1vdmVUaW1lLCBjYy52MigwLCAwKSkuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2VsZiA9PSB7MH0sIHRlbXBDYXJkSW5kZXggPSB7MX0sIGRlbGF5ID0gezJ9IFwiLHRoaXMuc2VsZiwgdGVtcENhcmRJbmRleCwgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxmICYmIHRlbXBDYXJkSW5kZXggPT0gMSAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzbXl0dXJuID09PT09PSBcIiArIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuaXNteXR1cm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8vL+atpOWkhOacieS4qmJ1Z++8jOWwseaYr+esrOS4gOW8oOeJjOWPkeWujOWQju+8jOaUtuWIsOS6hnRva2Vu77yM5YaN5Y+R56ys5LqM5byg54mM77yM6L+Z56eN5oOF5Ya156ys5LiA5byg54mM5pi+56S655qE54mM6IOMXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy/miYDku6XlnKjlj5HlrozniYzlubbkuJTmmK/oh6rlt7Hmk43kvZznmoTml7blgJnlvLrliLblho3kuIDmrKHmiormiYvniYzlsZXnpLpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LmlzbXl0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5Jc1Nob3dNeUFjdGlvbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9TaG91UGFpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfcG9rZXIgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fU2hvdVBhaVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZW5kQ2FyZE5vQW5pKGluZGV4LCBfcG9rZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNQb2tlcjogYm9vbGVhbiA9IHRoaXMuc2VsZiAmJiAhdGhpcy5pc0dpdmVVcCAmJiAhRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5pc215dHVybiAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheSA9PSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzUG9rZXIgPT09PSBcIiwgaXNQb2tlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmluZENhcmQoY2FyZCwgaXNQb2tlciA/IDAgOiBwb2tlciwgY2FyZEluZGV4KTsvL+iHquW3seWPkeeJjOe7k+adn+W5tuS4lOayoeWIsOiHquW3seeahOWbnuWQiOaYvuekuueJjOiDjFxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dPcGVuQ2FyZChvcGVuUGFpLCB0ZW1wQ2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZiAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LmlzbXl0dXJuICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmRlbGF5ID09IDEpLy/lj5HniYznu5PmnZ/nmoTml7blgJnlt7Lnu4/kvKDkuoboh6rlt7F0b2tlbu+8jOS9huaYr+i/meaYr+WQjnRva2Vu5pi+56S655qE5piv54mM6IOM5bm25LiU5LiN5Lya5pi+56S65pyA5aSn54mM5Z6L77yM5omA5Lul6L+Z6YeM6KaB5pi+56S654mM5Z6LXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuU2hvd1NlbGZNYXhDYXJkcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGYpLy/lvZPliY3niYzlj5HniYznu5PmnZ/lkI7vvIzlop7liqDnp4DniYznm5HlkKxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5nZXRDaGlsZChcIkNhcmRCdXR0b25cIikuYXNCdXR0b24uY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5nZXRDaGlsZChcIkNhcmRCdXR0b25cIikuYXNCdXR0b24ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3niYzlj5HniYznu5PmnZ/lkI7vvIzlop7liqDnp4DniYznm5HlkKxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzR2FtaW5nICYmIGNhcmQuVmFsdWUgPiAwICYmIHRoaXMuc2VsZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19zaG93bXljYXJkX3RleChjYXJkLlZhbHVlLCBjYXJkLl9zaG93VHlwZSA9PSAwID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmRzWzBdLlNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZHNbMV0uU2hvdygpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuU2hvdygpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0cmluZy5Gb3JtYXQoXCJzc3Nzc3NzcyB0aGlzLnNlbGYgPT0gezB9LCB0ZW1wQ2FyZEluZGV4ID0gezF9LCBkZWxheSA9IHsyfSBcIiwgdGhpcy5zZWxmLCB0ZW1wQ2FyZEluZGV4LCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheSkpO1xuICAgICAgICAgICAgdGhpcy5CaW5kQ2FyZChjYXJkLCBwb2tlciwgY2FyZEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuU2hvd09wZW5DYXJkKG9wZW5QYWksIHRlbXBDYXJkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVQb3MoY2FyZHM6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuY2FyZExpc3RbMF0uZmd1aVdpZHRoOyAvL2dhbWVPYmplY3QuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+ICgpLnNpemVEZWx0YS54O1xuICAgICAgICBsZXQgc2hvd0NhcmRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2FyZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLlZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIHNob3dDYXJkQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBTZW5kQ2FyZE5vQW5pKGNhcmRJbmRleDogbnVtYmVyLCBwb2tlcjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLlNlbmRDYXJkV2l0aFVwZGF0ZUluZm8oY2FyZEluZGV4LCBwb2tlcikpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FyZExpc3RbY2FyZEluZGV4XS51aV92YWwuc2V0UG9zaXRpb24oMCwwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+i/lOWbnuabtOaWsGNhcmQg5piv5ZCm5oiQ5YqfLlxuICAgIHByaXZhdGUgU2VuZENhcmRXaXRoVXBkYXRlSW5mbyhjYXJkSW5kZXg6IG51bWJlciwgcG9rZXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYXJkTGlzdFtjYXJkSW5kZXhdID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHRoaXMuY3VyQ2FyZEluZGV4ID0gY2FyZEluZGV4O1xuICAgICAgICB0aGlzLnVpX1VzZXJDYXJkcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXAgPSB0aGlzLmNhcmRMaXN0W2NhcmRJbmRleF07XG4gICAgICAgIHRoaXMuQmluZENhcmQoY2FyZCwgcG9rZXIsIGNhcmRJbmRleCk7XG4gICAgICAgIGNhcmQudWlfdmFsLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICBpZiAodGhpcy5zZWxmIHx8IGNhcmRJbmRleCA+PSAyKSB7XG4gICAgICAgICAgICBjYXJkLlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhcmQuSGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcmRJbmRleCA8IHRoaXMuZGVmYXVsdENhcmRzLmxlbmd0aCAmJiAhdGhpcy5zZWxmKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkc1tjYXJkSW5kZXhdLlNob3coKTsgLy8gRklYTUVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOetieW+hVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFdhaXQoKSB7XG4gICAgICAgIHRoaXMuQWNpdG9uID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuV2FpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU3RvcENsb2NrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRUaW1lOiBudW1iZXIgPSAwO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pi+56S66K6h5pe25ZmoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgU2hvd0Nsb2NrKGNkVGltZTogbnVtYmVyID0gMTUsIHRvdGFsVGltZTogbnVtYmVyID0gMTUsIGlzU2hvd1RleHQgPSB0cnVlLCBmb3JtYXRUaW1lOiBzdHJpbmcgPSBudWxsLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2RUaW1lID09PSBcIiwgY2RUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b3RhbFRpbWUgPT09IFwiLCB0b3RhbFRpbWUpO1xuICAgICAgICBpZiAodGhpcy5zZWxmICYmIGZvcm1hdFRpbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuU2hvd1NlbGZFbmRUaW1lKGNkVGltZSwgdG90YWxUaW1lLCBpc1Nob3dUZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2QgPSBjZFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IFVJVXRpbC5OdW1iZXJUb0ludChjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAvIDEwMDAgKyBjZFRpbWUpO1xuXG4gICAgICAgIHRoaXMudWlfSW1hZ2VGLmZpbGxBbW91bnQgPSBjZCAvIHRvdGFsVGltZSArIDAuMDE7XG4gICAgICAgIHRoaXMuc2hvd1VJQ291bnRUaW1lVGV4dChpc1Nob3dUZXh0LCBjZCwgZm9ybWF0VGltZSk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVySUQpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5maWxsRnVuKTsvLyB0aGlzLnVpX0ltYWdlRi5ub2RlLnN0b3BBbGxBY3Rpb25zICgpO1xuICAgICAgICB2YXIgbm9kZUNEID0gY2Q7XG4gICAgICAgIHZhciBzdGFydENEID0gY2Q7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5maWxsRnVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGVDRCA8IDApIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbGxGdW4pO1xuICAgICAgICAgICAgdGhpcy51aV9JbWFnZUYuZmlsbEFtb3VudCA9IChub2RlQ0QgLyBzdGFydENEKTtcbiAgICAgICAgICAgIG5vZGVDRCAtPSAwLjE7XG4gICAgICAgIH0sIDAuMSwgY2QgKiAxMCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnRpbWVySUQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjZCA9IFVJVXRpbC5OdW1iZXJUb0ludCgodGhpcy5lbmRUaW1lIC0gVUlVdGlsLk51bWJlclRvSW50KGNjLmRpcmVjdG9yLmdldFRvdGFsVGltZSgpIC8gMTAwMCkpKTtcbiAgICAgICAgICAgIGlmIChpc1Nob3dUZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdFRpbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2VuZHRpbWV0aXBzVGV4dC50ZXh0ID0gY2QgKyBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfZW5kdGltZXRpcHNUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDI1KSArIFwiXFxuXCIgKyBjZDsgLy9zdHJpbmcuRm9ybWF0IChmb3JtYXRUaW1lLCBjZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2QgPD0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuU3RvcENsb2NrKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlgJLorqHml7bkuLo177yM5pKt5pS+6K2m5ZGKXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxmICYmIGNkID09IDUpIHtcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJ0ZXhhc190aW1lb3V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcblxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWBnOatouiuoeaXtuWZqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFN0b3BDbG9jayhpc0ZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGNhblN0b3BTdGF0ZTogYm9vbGVhbiA9IHRoaXMudXNlckNvbm5lY3RTdGF0ZSAhPSBVc2VyQ29ubmVjdFN0YXRlLmRpc2Nvbm5lY3QgJiYgdGhpcy51c2VyQ29ubmVjdFN0YXRlICE9IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQ7XG5cbiAgICAgICAgaWYgKGNhblN0b3BTdGF0ZSB8fCBpc0ZvcmNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxmKSB7XG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zdG9wRWZmZWN0KFwidGV4YXNfdGltZW91dFwiKTtcbiAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5TdG9wU2VsZkVuZFRpbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmZpbGxGdW4pOy8vIHRoaXMudWlfSW1hZ2VGLm5vZGUuc3RvcEFsbEFjdGlvbnMgKCk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcklEKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1VJQ291bnRUaW1lVGV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmL7npLrnlLPor7forqHml7blmahcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBTaG93QXBwbHlDbG9jayhjZFRpbWU6IG51bWJlciA9IDE1LCB0b3RhbFRpbWU6IG51bWJlciA9IDE1LCBpc1Nob3dUZXh0ID0gdHJ1ZSwgZm9ybWF0VGltZTogc3RyaW5nID0gbnVsbCwgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBsZXQgY2QgPSBjZFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IFVJVXRpbC5OdW1iZXJUb0ludChjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAvIDEwMDAgKyBjZFRpbWUpO1xuXG4gICAgICAgIHRoaXMuc2hvd1VJQXBwbHlUaW1lVGV4dChpc1Nob3dUZXh0LCBjZCwgZm9ybWF0VGltZSk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVySUQpO1xuICAgICAgICB0aGlzLnVpX3Rha2VJbkFwcGx5UGFuZWwubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXJJRCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNkID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmVuZFRpbWUgLSBVSVV0aWwuTnVtYmVyVG9JbnQoY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwKSkpO1xuICAgICAgICAgICAgaWYgKGlzU2hvd1RleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0VGltZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfdGFrZUluQXBwbHlUeHQudGV4dCA9IGNkICsgXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfdGFrZUluQXBwbHlUeHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAwOSkgKyBjZCArIFwic1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5TdG9wQXBwbHlDbG9jayh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSwgY2QpO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWBnOatoueUs+ivt+iuoeaXtuWZqFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFN0b3BBcHBseUNsb2NrKGlzRm9yY2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgY2FuU3RvcFN0YXRlID0gdGhpcy51c2VyQ29ubmVjdFN0YXRlICE9IFVzZXJDb25uZWN0U3RhdGUuZGlzY29ubmVjdCAmJiB0aGlzLnVzZXJDb25uZWN0U3RhdGUgIT0gVXNlckNvbm5lY3RTdGF0ZS53YWl0VGFrZUluO1xuXG4gICAgICAgIGlmIChjYW5TdG9wU3RhdGUgfHwgaXNGb3JjZSkge1xuICAgICAgICAgICAgdGhpcy51aV90YWtlSW5BcHBseVBhbmVsLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVySUQpO1xuICAgICAgICAgICAgdGhpcy5zaG93VUlBcHBseVRpbWVUZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYvuekuuWksei0pVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiYWN0aXZlXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgU2hvd0xvc2UoYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuTG9zZSA9IGFjdGl2ZTtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGFuZGxlU3RhdGVUZXh0KFRleGFzVXNlckhhbmRsZVN0YXRlLmxvc2UpO1xuICAgICAgICBpZiAodGhpcy5zZWxmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9sb3NlLnZpc2libGUgPSBhY3RpdmU7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdENhcmRzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaXN0W2ldLkhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgR2VuZXJhdGVDaGlwX25uYihnYW1ibGVHb2xkOiBudW1iZXIsIHJlbWFpbkdvbGQ6IG51bWJlciwgaXNBbmltID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLkNoaXBNb3ZlKGdhbWJsZUdvbGQsIGlzQW5pbSk7XG4gICAgICAgIC8vIC8v5pu05paw5LiL5rOo5LmL5ZCO55qE6ZKxICAgIFxuICAgICAgICB0aGlzLlVwZGF0ZU1vbmV5KHJlbWFpbkdvbGQpO1xuICAgIH1cbiAgICBwdWJsaWMgR2VuZXJhdGVDaGlwTm9VcGF0ZShnYW1ibGVHb2xkOiBudW1iZXIsIGlzQW5pbSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5DaGlwTW92ZShnYW1ibGVHb2xkLCBpc0FuaW0pO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUn+aIkOetueeggSxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBHZW5lcmF0ZUNoaXBfbmJiKGdhbWJsZUdvbGQ6IG51bWJlciwgaXNBbmltID0gdHJ1ZSwgaXNUdXJuT3ZlciA9IGZhbHNlLCBzZWxmR29sZDogbnVtYmVyID0gLTk5OSkge1xuICAgICAgICB0aGlzLkNoaXBNb3ZlKGdhbWJsZUdvbGQsIGlzQW5pbSwgaXNUdXJuT3Zlcik7XG4gICAgICAgIC8v5pu05paw5LiL5rOo5LmL5ZCO55qE6ZKxXG4gICAgICAgIGlmICh0aGlzLnBsYXllciA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGFsIGVycm9yIC4uLiBwbGF5ZXIgY2FuIG5vdCBiZSBudWxsOiDlh4/pkrHlpLHotKVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5nb2xkIC09IGdhbWJsZUdvbGQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ29sZCA8IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWJsZUdvbGQgaXMgbW9yZSB0aGFuIHBsYXllciBnb2xkOiBnYW1ibGU6XCIgKyBnYW1ibGVHb2xkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nb2xkID0gMDsgLy8g5pi+56S66LSf5pWw55qE5pe25YCZ5by65Yi25Li6MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmR29sZCAhPSAtOTk5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5nb2xkID0gc2VsZkdvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VcGRhdGVNb25leSgpO1xuICAgIH1cbiAgICBwdWJsaWMgR2FtYmxlTW9uZ28obW9uZ29Hb2xkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0YWwgZXJyb3IgLi4uIHBsYXllciBjYW4gbm90IGJlIG51bGw6IOWHj+WOu+WIneWni+iKkuaenOWIhuWksei0pVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmdvbGQgLT0gbW9uZ29Hb2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVNb25leSgpO1xuICAgIH1cbiAgICBwdWJsaWMgUmVzZXRVc2VySGFuZGxlU3RhdGVGb3JUdXJuKCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVTdGF0ZSA9PSBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5hbGxpbiB8fCB0aGlzLmhhbmRsZVN0YXRlID09IFRleGFzVXNlckhhbmRsZVN0YXRlLmdpdmVVcCB8fCB0aGlzLmhhbmRsZVN0YXRlID09IFRleGFzVXNlckhhbmRsZVN0YXRlLnN0cmFkKSB7XG4gICAgICAgICAgICAvL+aVsi/kvJHkuI3lpITnkIYv6KGl5oqT5aS0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlNob3dVSVVzZXJIYW5kbGVTdGF0ZSgtMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluc1N0YXRlVGV4dCgtMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmm7TmlrDnjqnlrrbnirbmgIEgMeaYr+i3n+azqCAy5piv5byD54mMIDPmmK/mr5TniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1cGRhdGVIYW5kbGVTdGF0ZVRleHQoc3RhdGU6IFRleGFzVXNlckhhbmRsZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgbGV0IHN0YXRldGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzFcIikudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzJcIikudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3N0YXR1c2JnLmdldENoaWxkKFwiYmczXCIpLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5mb2xsb3c6XG4gICAgICAgICAgICAgICAgc3RhdGV0ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQxMCk7Ly/ot5/ms6hcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNVc2VySGFuZGxlU3RhdGUuZ2l2ZVVwOlxuICAgICAgICAgICAgICAgIHN0YXRldGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzOTUpOy8v5byD54mMXG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnMVwiKS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnM1wiKS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNVc2VySGFuZGxlU3RhdGUuZGE6XG4gICAgICAgICAgICAgICAgc3RhdGV0ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQyNik7Ly/liqDms6hcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNVc2VySGFuZGxlU3RhdGUueGl1OlxuICAgICAgICAgICAgICAgIHN0YXRldGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEyOTcpOy8v6K6p54mMXG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnMVwiKS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnMlwiKS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNVc2VySGFuZGxlU3RhdGUubG9zZTpcbiAgICAgICAgICAgICAgICBzdGF0ZXRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDI3KTsvL+avlOi+k1xuICAgICAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzFcIikudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzNcIikudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVXNlckhhbmRsZVN0YXRlLmFsbGluOlxuICAgICAgICAgICAgICAgIHN0YXRldGV4dCA9IFwiQUxMSU5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4YXNVc2VySGFuZGxlU3RhdGUuc3RyYWRsbGU6XG4gICAgICAgICAgICAgICAgc3RhdGV0ZXh0ID0gXCJzdHJhZGxsZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzFcIikudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzNcIikudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleGFzVXNlckhhbmRsZVN0YXRlLnN0cmFkOlxuICAgICAgICAgICAgICAgIHN0YXRldGV4dCA9IFwi6KGlc3RyYWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd1VJRWZ0QWxsSW4oc3RhdGUgPT0gVGV4YXNVc2VySGFuZGxlU3RhdGUuYWxsaW4pO1xuICAgICAgICB0aGlzLnVpX3R4dHN0YXR1cy50ZXh0ID0gc3RhdGV0ZXh0O1xuICAgICAgICB0aGlzLlNob3dVSVVzZXJIYW5kbGVTdGF0ZShVSVV0aWwuTnVtYmVyVG9JbnQoc3RhdGUpKTtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmm7TmlrDnjqnlrrbkv53pmanmipXkv53nirbmgIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImluc1wiPjwvcGFyYW0+XG4gICAgcHVibGljIHVwZGF0ZUluc1N0YXRlVGV4dChpbnM6IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuU2hvd0luc1N0YXVzKGlucyA+PSAwKTtcbiAgICAgICAgdGhpcy51aV90eHRJbnMudGV4dCA9IGlucyA+IDAgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDI4KSArIFwiIFwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChpbnMpICsgXCJcIiA6IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MjkpOy8v5oqV5L+dICDkuI3mipVcbiAgICAgICAgY29uc29sZS5sb2coXCLmm7TmlrDnjqnlrrbkv53pmanmipXkv53nirbmgIE6XCIgKyB0aGlzLnVpX3R4dElucy50ZXh0KTtcbiAgICB9XG4gICAgcHVibGljIGVuZFNob3dJbnNDbGFpbShjbGFpbTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55CG6LWUIFwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChjbGFpbSkpO1xuICAgICAgICB0aGlzLlNob3dJbnNTdGF1cyhjbGFpbSA+IDApO1xuICAgICAgICB0aGlzLnVpX3R4dElucy50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQzMCkgKyBcIiBcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoY2xhaW0pOy8v55CG6LWUXG4gICAgfVxuICAgIHByaXZhdGUgX0NoaXA6IGZndWkuR0NvbXBvbmVudDsgLy9HYW1lT2JqZWN0XG4gICAgcHJpdmF0ZSBSZWFsR2VuZXJhdGVDaGlwKG1vbmV5OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuX0NoaXAgPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgdGhpcy5fQ2hpcCA9IEdhbWVPYmplY3QuSW5zdGFudGlhdGUgKHRoaXMudWlfdGVtcGxhdGUuZ2FtZU9iamVjdCkgYXMgR2FtZU9iamVjdDtcbiAgICAgICAgLy8gICAgIHRoaXMuX0NoaXAudHJhbnNmb3JtLlNldFBhcmVudCAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy51aV9jaGlwcG9vbHJvb3QsIGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuX0NoaXAudHJhbnNmb3JtLnJlc2V0TG9jYWwgKCk7XG4gICAgICAgIC8vICAgICB0aGlzLiBfQ2hpcC50cmFuc2Zvcm0ubG9jYWxTY2FsZSA9IFZlY3RvcjMub25lICogMC41ZjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLl9DaGlwLmdhbWVPYmplY3QuU2V0QWN0aXZlICh0cnVlKTtcbiAgICAgICAgLy8gVmVjdG9yMyBlbmR2MyA9IG5ldyBWZWN0b3IzICgwLCBVbml0eUVuZ2luZS5SYW5kb20uUmFuZ2UgKDMwLCA1MCksIFVuaXR5RW5naW5lLlJhbmRvbS5SYW5nZSAoMCwgMTAwZikpO1xuICAgICAgICAvLyBlbmR2MyA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuR2V0QUNoaXBQb3NpdGlvbiAobW9uZXksIGVuZHYzKTtcbiAgICAgICAgLy8gX0NoaXAudHJhbnNmb3JtLnBvc2l0aW9uID0gdWlfdGVtcGxhdGUucG9zaXRpb247IC8vIHVpX3Bvcy5wb3NpdGlvbjtcbiAgICAgICAgLy8gVGV4dCBfdHh0Q2hpcCA9IFRvb2xzRXguRmluZFNjcmlwdEluQ2hpbGRzPFRleHQ+IChfQ2hpcC5nYW1lT2JqZWN0LCBcInR4dGNoaXBcIik7XG4gICAgICAgIC8vIF90eHRDaGlwLnRleHQgPSBcIlwiO1xuICAgICAgICAvLyAvLy8vQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwiZ2xhbWJsZVwiKTtcbiAgICAgICAgLy8gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5BZGRDaGlwUG9vbCAoX0NoaXAudHJhbnNmb3JtKTtcbiAgICAgICAgLy8gaWYgKF9jaGlwcG9vbCA9PSBudWxsKSBfY2hpcHBvb2wgPSBuZXcgTGlzdDxUcmFuc2Zvcm0+ICgpO1xuXG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b2T5YmN5Zue5ZCI57uT5p2f6YeN572uY3VyR2FtYmxlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcmVzZXRDdXJHYW1ibGUoKSB7XG4gICAgICAgIHRoaXMuY3VyR2FtYmxlID0gMDtcbiAgICAgICAgdGhpcy5TZXRHYW1ibGUodGhpcy5jdXJHYW1ibGUpO1xuICAgICAgICB0aGlzLlNob3dVSUdhbWJsZShmYWxzZSk7IC8v5b2T5YmN5Zue5ZCI57uT5p2f55qE5pe25YCZ6ZqQ6JeP5LiL5rOoXG4gICAgfVxuICAgIC8v5LiL5rOoIOaJp+ihjOWKqOeUu1xuICAgIHByaXZhdGUgQ2hpcE1vdmUoZ2FtYmxlR29sZDogbnVtYmVyLCBpc0FuaW06IGJvb2xlYW4sIGlzVHVybk92ZXIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmN1ckdhbWJsZSArPSBnYW1ibGVHb2xkO1xuICAgICAgICB0aGlzLmFsbGluR2FtYmxlID0gdGhpcy5jdXJHYW1ibGU7XG4gICAgICAgIHRoaXMuU2V0R2FtYmxlKHRoaXMuY3VyR2FtYmxlKTtcbiAgICAgICAgdGhpcy5TaG93VUlHYW1ibGUodHJ1ZSk7IC8v55Sf5oiQ562556CB55qE5pe25YCZ5pi+56S65LiL5rOoXG5cbiAgICAgICAgdGhpcy51aV9JbWdDaGlwLm5vZGUuZ2V0Q29tcG9uZW50KFVJTW92ZU1vbm8pLmZpeGVkVGltZSA9IDAuMjtcbiAgICAgICAgdGhpcy51aV9JbWdDaGlwLm5vZGUuZ2V0Q29tcG9uZW50KFVJTW92ZU1vbm8pLmlzVXNlU3BlZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGlzQW5pbSkge1xuICAgICAgICAgICAgLy8gdGhpcy5JbWdDaGlwTW92ZS5TaG93KCk7XG4gICAgICAgICAgICB0aGlzLnVpX0ltZ0NoaXAubm9kZS5nZXRDb21wb25lbnQoVUlNb3ZlTW9ubykuTW92ZShudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVHVybk92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuUmVmcmVzaFVzZXJDdXJHYW1ibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHB1YmxpYyBEZWFsVHVybkNoaXAoKSB7XG4gICAgICAgIGxldCBlbmR2MyA9IGNjLnYyKDAsIHRoaXMuZ2V0UmFuZG9tTnVtSW50KDMwLCA1MCkpOy8vLCBVbml0eUVuZ2luZS5SYW5kb20uUmFuZ2UgKDAsIDEwMGYpKTtcblxuICAgICAgICBpZiAodGhpcy5fQ2hpcCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX0NoaXAubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgZW5kdjMpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fQ2hpcC52aXNpYmxlID0gZmFsc2U7IC8vVGV4YXPmmoLml7bkuI3mmL7npLogXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV90ZW1wbGF0ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFNob3dTdGF0ZUdyYXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxmKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLl9tYXhDYXJkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBfbm9tYXhjYXJkOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgICAgVUlVdGlsLkNvbmNhdChfbm9tYXhjYXJkLCB0aGlzLl9tYXhDYXJkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYXJkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZExpc3RbaV0uU2V0U2hvd1N0YXRlKF9ub21heGNhcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDojrflj5bnrbnnoIHvvIzmmL7npLrmnIDlpKfniYzlnotcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9jaGlwdGZcIj48L3BhcmFtPlxuICAgIHB1YmxpYyB3aW5DaG91bWEoX2NoaXB0ZjogZmd1aS5HQ29tcG9uZW50KSB7XG5cbiAgICAgICAgbGV0IG9idjMgPSB0aGlzLnVpX3Bvcy5ub2RlLnBvc2l0aW9uO1xuXG4gICAgICAgIF9jaGlwdGYubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgdGhpcy5jb252ZXJ0Tm9kZVNwYWNlQVIoX2NoaXB0Zi5ub2RlLCB0aGlzLnVpX3Bvcy5ub2RlKSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgX2NoaXB0Zi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a6256a75byA77yM6ZqQ6JeP546p5a625pWw5o2uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaW5pdENhcmRzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYXJkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkTGlzdFtpXS5SZXNldENvbG9yKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRMaXN0W2ldLkhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3RbaV0uQ2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgdGhpcy51aV9nb2xkQmcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3R4dEdvbGQudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfdHh0c3RhdHVzLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVpX3R4dGdhbWJsZXRlbXAudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfdGV4YXN0eXBlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90eHR0ZXhhc3R5cGUudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMuaXNHaXZlVXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdG9wQ2xvY2soKTtcbiAgICAgICAgdGhpcy5TdG9wQXBwbHlDbG9jaygpO1xuICAgICAgICB0aGlzLl9tYXhDYXJkID0gW107XG4gICAgICAgIHRoaXMudWlfZGVmYXVsdENhcmRzTW92ZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfZGVmYXVsdENhcmRzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaOiee6v+aIluiAhemHjei/nlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIERpc2Nvbm5ldGNPclJlbGluZShpc2RpY29ubmV0OiBib29sZWFuKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0TGFzdFNpdGUoKSB7XG4gICAgICAgIC8vIHRoaXMudHJhbnNmb3JtLlNldEFzTGFzdFNpYmxpbmcgKCk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93Q2FyZEF0KGluZGV4OiBudW1iZXIsIGNhcmQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLlNldENhcmRWYWwoaW5kZXgsIGNhcmQpO1xuICAgICAgICBsZXQgaXRlbTogQ2FyZFJlZGJldENvbXAgPSAoaW5kZXggPj0gMCAmJiB0aGlzLmNhcmRMaXN0Lmxlbmd0aCA+IGluZGV4KSA/IHRoaXMuY2FyZExpc3RbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgaWYgKGl0ZW0gIT0gbnVsbCAmJiBjYXJkID4gMCAmJiB0aGlzLnNlbGYpIHtcbiAgICAgICAgICAgIGl0ZW0uU2hvd0V5ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zKG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgRGlzcGxheVNob3dDYXJkKGNhcmRzOiBDYXJkc1tdKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYXJkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gbGV0IGNvbXA6IENhcmRSZWRiZXRDb21wID0gdGhpcy5jYXJkTGlzdFtpXTtcbiAgICAgICAgICAgIGxldCB0ZW1wOiBDYXJkcyA9IGNhcmRzLmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLmNwb3MgPT0gaTsgfSk7XG4gICAgICAgICAgICBpZiAodGVtcCAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMuU2hvd0NhcmRBdChpLCB0ZW1wLmNhcmQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuU2hvd0NhcmRBdChpLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgU2hvd0NhcmRTdGF0dXNBdChpbmRleDogbnVtYmVyLCB0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW06IENhcmRSZWRiZXRDb21wID0gKGluZGV4ID49IDAgJiYgdGhpcy5jYXJkTGlzdC5sZW5ndGggPiBpbmRleCkgPyB0aGlzLmNhcmRMaXN0W2luZGV4XSA6IG51bGw7XG4gICAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW0uU2hvd0V5ZSh0eXBlID09IDEpO1xuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9zY2FyZHMgPT0gbnVsbCB8fCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fc2NhcmRzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3NjYXJkcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBuZXcgQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5jcG9zID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9zY2FyZHMucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDogQ2FyZHMgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fc2NhcmRzLmZpbmQoKGl0ZW0xLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0xLmNwb3MgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wICE9IG51bGwgJiYgdHlwZSA9PSAwKSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fc2NhcmRzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcCA9PSBudWxsICYmIHR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gbmV3IENhcmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAuY3BvcyA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fc2NhcmRzLnB1c2godGVtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuVXBkYXRlUG9zKG51bGwpO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd0ZpcnN0Q2FyZChzaG91cGFpOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAoc2hvdXBhaSA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLlNob3dDYXJkcyhzaG91cGFpKTtcbiAgICB9XG4gICAgcHVibGljIFNob3dDYXJkcyhhbGxDYXJkczogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKGFsbENhcmRzID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBjYXJkOiBDYXJkUmVkYmV0Q29tcCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2FyZHMubGVuZ3RoICYmIGkgPCB0aGlzLmNhcmRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYXJkID0gdGhpcy5jYXJkTGlzdFtpXTtcbiAgICAgICAgICAgIHRoaXMuU2V0Q2FyZFZhbF9wdWIoY2FyZCwgYWxsQ2FyZHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVQb3MoYWxsQ2FyZHMpO1xuXG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6K6+572u5L2N572u5Li656m677yM5Y+v6IO95Li66aKE55WZ54q25oCBIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIFNldFBvc051bGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZndWlDb21wb25lbnQgPT0gbnVsbCkgeyByZXR1cm47IH07XG4gICAgICAgIGlmICghRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5SZW1vdmVVc2VyKHRoaXMucGxheWVyLnVzZXJpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlVwZGF0ZVVzZXJDb25uZWN0U3RhdGUoVXNlckNvbm5lY3RTdGF0ZS5mcmVlKTtcblxuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LkNoZWNrQnRuQmFja1RhYmxlU3RhdGUoKTsgLy/kvY3nva7kuLrnqbrml7ZcbiAgICB9XG4gICAgcHVibGljIFJlc2V0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuU2hvd1VJV2F0Y2goZmFsc2UpO1xuICAgICAgICB0aGlzLlNob3dVSVdpYXRUYWtlSW4oZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3dVSU1pY3JvKGZhbHNlKTtcbiAgICAgICAgdGhpcy5TaG93VUlVc2VySGFuZGxlU3RhdGUoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluc1N0YXRlVGV4dCgtMSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFVzZUNvbm5lY3RTdGF0ZSh1c2VyQ29ubmVjdFN0YXRlOiBVc2VyQ29ubmVjdFN0YXRlKSB7XG4gICAgICAgIHRoaXMudXNlckNvbm5lY3RTdGF0ZSA9IHVzZXJDb25uZWN0U3RhdGU7XG4gICAgfVxuICAgIC8vIDxzdW1tYXJ5PlxuICAgIC8vIOabtOaWsOeOqeWutueKtuaAgSAwOuayoeacieeOqeWutiAxOiDnlZnluqfkvY3mmL7npLrmraPluLjnmoTnjqnlrrblpLTlg48s5Lul5Y+K5YW25LuW5pWw5o2uIDIu5pat57q/IDMu5q2j5bi45ri45oiPICjpmaQxIOS5i+WkluWFtuS7lumDveWcqOeOqeWutumHjOmdoilcbiAgICAvLyA8L3N1bW1hcnk+XG4gICAgLy8gPHBhcmFtIG5hbWU9XCJ1c2VyQ29ubmVjdFN0YXRlXCI+PC9wYXJhbT4gICAgXG4gICAgcHVibGljIFVwZGF0ZVVzZXJDb25uZWN0U3RhdGUodXNlckNvbm5lY3RTdGF0ZTogVXNlckNvbm5lY3RTdGF0ZSkge1xuICAgICAgICB0aGlzLlNldFVzZUNvbm5lY3RTdGF0ZSh1c2VyQ29ubmVjdFN0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIgaHVpIFVwZGF0ZVVzZXJDb25uZWN0U3RhdGUgOlwiICsgdXNlckNvbm5lY3RTdGF0ZSk7XG4gICAgICAgIFVJVXRpbC5JbWFnZUdyZXlUb2dnbGUodGhpcy51aV9oZWFkSW1hZ2UsIGZhbHNlKTtcbiAgICAgICAgc3dpdGNoICh1c2VyQ29ubmVjdFN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFVzZXJDb25uZWN0U3RhdGUuZnJlZTpcbiAgICAgICAgICAgICAgICB0aGlzLlJlc2V0VXNlckRhdGEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdDpcbiAgICAgICAgICAgICAgICAvL+eVmeW6pyDmmL7npLrlgJLorqHml7bvvIzmmL7npLrlkI3np7DvvIzmmL7npLrph5HluIHvvIzlpLTlg4/lj5jngbBcblxuICAgICAgICAgICAgICAgIC8v55WZ5bqn5LiN5pi+56S654m55pWI6L2sXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIueVmeW6p+S4jeaYvuekuueJueaViOi9rD09PVwiKygodGhpcy51c2VySW5mbyAhPSBudWxsKSA/ICh0aGlzLnVzZXJJbmZvLmlzSyA8PSAxNzggPyB0aGlzLnVzZXJJbmZvLmlzSyArIDIgOiB0aGlzLnVzZXJJbmZvLmlzSykgOiAxODApKTtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dDbG9jaygodGhpcy51c2VySW5mbyAhPSBudWxsKSA/ICh0aGlzLnVzZXJJbmZvLmlzSyA8PSAxNzggPyB0aGlzLnVzZXJJbmZvLmlzSyArIDIgOiB0aGlzLnVzZXJJbmZvLmlzSykgOiAxODAsIDE4MCwgdHJ1ZSwgXCLnlZnluqdcXG5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFBvc051bGwoKTtcbiAgICAgICAgICAgICAgICB9KTsvL+eVmeW6p1xuICAgICAgICAgICAgICAgIFVJVXRpbC5JbWFnZUdyZXlUb2dnbGUodGhpcy51aV9oZWFkSW1hZ2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVc2VyQ29ubmVjdFN0YXRlLmRpc2Nvbm5lY3Q6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVzZXJDb25uZWN0U3RhdGUucGxheTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVXNlckNvbm5lY3RTdGF0ZS53YXRjaDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVXNlckNvbm5lY3RTdGF0ZS53YWl0OlxuICAgICAgICAgICAgICAgIHRoaXMuUmVzZXRQbGF5aW5nVUkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvL+iuvue9ruaAu+eahOeKtuaAgVxuICAgICAgICB0aGlzLnVpX0ltZ0ZyZWVVc2VyLnZpc2libGUgPSAodXNlckNvbm5lY3RTdGF0ZSA9PSAwKTtcbiAgICAgICAgdGhpcy51aV9JbWdGcmVlVXNlckJ0bi52aXNpYmxlID0gKHVzZXJDb25uZWN0U3RhdGUgPT0gMCk7XG4gICAgICAgIHRoaXMudWlfdXNlckluZm8udmlzaWJsZSA9ICh1c2VyQ29ubmVjdFN0YXRlICE9IDApOyAvL0ZJWE1FOiDov5jljp9cblxuICAgICAgICBpZiAodXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmZyZWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1VJQ2FyZHMoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5TaG93VGV4YXNUeXBlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNob3dVSVdhdGNoKHVzZXJDb25uZWN0U3RhdGUgPT0gVXNlckNvbm5lY3RTdGF0ZS53YXRjaCk7XG4gICAgICAgIHRoaXMuU2hvd1VJV2lhdFRha2VJbih1c2VyQ29ubmVjdFN0YXRlID09IFVzZXJDb25uZWN0U3RhdGUud2FpdFRha2VJbik7XG4gICAgICAgIHRoaXMuc2hvd1VJTWljcm8oZmFsc2UpO1xuICAgIH1cbiAgICAvLyNyZWdpb24g5omA5pyJ54q25oCB55qE5bGV56S65LiO6ZqQ6JePIDog6buY6K6k5LiA55u05pi+56S655qE5a+56LGh5rKh5pyJc2hvd1VJIOaTjeS9nCA6IHNob3dVSeS4reaTjeS9nOS4i+WxguWvueixoeeahOaYvuekuuaTjeS9nCzkuI3og73kvb/nlKhzaG93VUks6K+35L2/55So5YW25LuW5pa55rOV5ZCN56ewXG5cbiAgICAvL+aYr+WQpuaYvuekuueOqeWutuS/oeaBr1xuICAgIHByaXZhdGUgc2hvd1VJVXNlclJvb3QoaXNTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudWlfdXNlckluZm8udmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL+WxleekuuWHhuWkh+eKtuaAgVxuICAgIHB1YmxpYyBTaG93VUlSZWFkeShpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51aV9yZWFkeS52aXNpYmxlID0gaXNTaG93O1xuICAgIH1cblxuICAgIC8v6ZqQ6JeP5omA5pyJ5Y2h54mM5L+h5oGvLOi/meS4quaWueazleWPqumakOiXjyzmmL7npLrlv4XpobvopoHlhbfkvZPnmoTmlbDmja4s5YaZ5oiQc2hvdyDlj6rmmK/kuLrkuobosIPnlKjmlrnkvr/mn6Xmib5cbiAgICBwcml2YXRlIHNob3dVSUNhcmRzKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3RbaV0uUmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVmYXVsdENhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkc1tpXS5SZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGYpIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlNob3dPcGVuVGlwKGZhbHNlKTsvL+WmguaenOaYr+iHquW3sei/mOimgemakOiXj+mYsuS8meaPkOekulxuICAgICAgICB0aGlzLnVpX2hlYWRJbWFnZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLnVpX3RvdXhpYW5nLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMudWlfZ2FtYmxlSWNvbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIC8v5bGV56S65aS06aG25LiK6Z2i55qE5o+Q56S65L+h5oGvOuWMheaLrDEu5pyA5ZCO55qE6YeR5biB57uT566XIDIuLi4uXG4gICAgcHVibGljIFNob3dVSVRvcFRpcCh0aXA6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVpX3RvcFRpcEJnLnZpc2libGUgPSAodGlwICE9IG51bGwpO1xuICAgICAgICBpZiAodGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0VG9wVGlwLnRleHQgPSB0aXA7XG4gICAgICAgICAgICB0aGlzLnNob3dVSUVmdFJvdGF0ZSgzMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxmKSB0aGlzLnNob3dVSUVmdFlvdVdpbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuU3RvcFVJRWZ0Um90YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WxleekuuinguaImFxuICAgIHB1YmxpYyBTaG93VUlXYXRjaChpc1dhdGNoID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5zZWxmKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndhbnRjaDpcIiArIGlzV2F0Y2gpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy51c2VySW5mbykgaXNXYXRjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3dhdGNoQmcudmlzaWJsZSA9IGlzV2F0Y2g7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93VUlXaWF0VGFrZUluKGlzV2FpdFRha2VJbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc1dhaXRUYWtlSW46XCIgKyBpc1dhaXRUYWtlSW4pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3MyQXBwbHk6IENvbW1vblBvc1ZhbFNEID0gdGhpcy51c2VySW5mbyAhPSBudWxsICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvczJhcHBseSAhPSBudWxsID8gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucG9zMmFwcGx5LmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLnBvcyA9PSB0aGlzLnVzZXJJbmZvLnBvcyB9KSA6IG51bGw7XG4gICAgICAgIGlmIChwb3MyQXBwbHkgIT0gbnVsbCkvL+W4puWFpeeUs+ivt+eahO+8jOiHquW3seimgeaYvuekuuWAkuiuoeaXtumdouadv++8jOaIv+S4u+eci+ingeWFtuS7lueOqeWutuimgeaYvuekuueUs+ivt+S4reWAkuiuoeaXtueKtuaAgVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxmKS8v6Ieq5bex5pi+56S65YCS6K6h5pe26Z2i5p2/XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGlzV2FpdFRha2VJbikgdGhpcy5TaG93QXBwbHlDbG9jayhVSVV0aWwuTnVtYmVyVG9JbnQocG9zMkFwcGx5LnZhbCksIFVJVXRpbC5OdW1iZXJUb0ludChwb3MyQXBwbHkudmFsKSwgdHJ1ZSwgVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDA5KSwgKCkgPT4gey8vbuivt+etieW+hVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFBvc051bGwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dFdhaXQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMDIpOy8v55Sz6K+35LitXG4gICAgICAgICAgICAgICAgdGhpcy51aV93YWl0QmcudmlzaWJsZSA9IGlzV2FpdFRha2VJbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm93bm5lcmlkID09IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpLy/miL/kuLvmmL7npLrnlLPor7fkuK1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXYWl0VGFrZUluKSB0aGlzLlNob3dDbG9jayhVSVV0aWwuTnVtYmVyVG9JbnQocG9zMkFwcGx5LnZhbCksIFVJVXRpbC5OdW1iZXJUb0ludChwb3MyQXBwbHkudmFsKSwgdHJ1ZSwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFBvc051bGwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dFdhaXQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMDIpOy8v55Sz6K+35LitXG4gICAgICAgICAgICAgICAgdGhpcy51aV93YWl0QmcudmlzaWJsZSA9IGlzV2FpdFRha2VJbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0V2FpdC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjE4OCk7Ly/ljaDluqfkuK1cbiAgICAgICAgICAgICAgICB0aGlzLnVpX3dhaXRCZy52aXNpYmxlID0gaXNXYWl0VGFrZUluO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV90eHRXYWl0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMTg4KTsvL+WNoOW6p+S4rVxuICAgICAgICAgICAgdGhpcy51aV93YWl0QmcudmlzaWJsZSA9IGZhbHNlOyAvL2lzV2FpdFRha2VJbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+Wxleekuum6puWFi+mjjlxuICAgIHByaXZhdGUgc2hvd1VJTWljcm8oaXNTaG93ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnVpX2J0bm1pY3JvcGhvbmUudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL+WxleekuiBcIuW6hFwiXG4gICAgcHJpdmF0ZSBzaG93VUlCYW5rZXIoaXNTaG93ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmJhbmtlclBvcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgLy/njqnlrrbmiZPniYznmoTnirbmgIE66LefLOWkpyzmlbLnrYnnrYkgKOWktOmhtuS4iuaWuVVJLOimgeazqOaEj+S4juWktOmhtueahCB0aXAg5L+h5oGv5paH5pys55qE5LqS5palKSAtMTrooajnpLrpmpDol49cbiAgICBwdWJsaWMgU2hvd1VJVXNlckhhbmRsZVN0YXRlKHN0YXRlID0gLTEpIHtcbiAgICAgICAgaWYgKHN0YXRlID09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0dpdmVVcCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTaG93VUlVc2VySGFuZGxlU3RhdGUgaGlkZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZVwiICsgR2V0UGxheWVyTmFtZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcudmlzaWJsZSA9IHN0YXRlID49IDA7XG4gICAgICAgIHRoaXMudWlfc3RhdHVzYmcubm9kZS5nZXRDb21wb25lbnQoVUlTdGF0ZUJhc2UpLlNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICAvL+aYr+WQpuWxleekuuS4i+azqFxuICAgIHB1YmxpYyBTaG93VUlHYW1ibGUoaXNTaG93ID0gdHJ1ZSkge1xuXG4gICAgICAgIHRoaXMudWlfZ2FtYmxlQmcudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL+aYr+WQpuWxleekuuaWree6v1xuICAgIHByaXZhdGUgc2hvd1VJRGlzY29ubmVjdChpc1Nob3c6IGJvb2xlYW4pIHtcblxuICAgIH1cblxuICAgIC8v5bGV56S65YCS6K6h5pe2XG4gICAgcHJpdmF0ZSBzaG93VUlDb3VudFRpbWVUZXh0KGlzU2hvdyA9IHRydWUsIHRpbWUgPSAxNSwgZm9ybWF0VGltZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLnVpX2VuZHRpbWV0aXBzLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIGlmIChpc1Nob3cgJiYgdGltZSAhPSAtOTk5OSkge1xuICAgICAgICAgICAgaWYgKGZvcm1hdFRpbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfZW5kdGltZXRpcHNUZXh0LnRleHQgPSB0aW1lICsgXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9lbmR0aW1ldGlwc1RleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAwOSkgKyBcIlxcblwiICsgdGltZTsvL1wi6K+3562J5b6FO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93VUlBcHBseVRpbWVUZXh0KGlzU2hvdyA9IHRydWUsIHRpbWUgPSAxODAsIGZvcm1hdFRpbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51aV90YWtlSW5BcHBseVBhbmVsLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIGlmIChpc1Nob3cgJiYgdGltZSAhPSAtOTk5OSkge1xuICAgICAgICAgICAgaWYgKGZvcm1hdFRpbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfdGFrZUluQXBwbHlUeHQudGV4dCA9IHRpbWUgKyBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV90YWtlSW5BcHBseVR4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDA5KSArIFwiXFxuXCIgKyB0aW1lOy8v6K+3562J5b6FO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pi+56S65aSx6LSlICzkuI3nn6XpgZPmmK/llaUg5pqC5pe25bGP6JS9XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJhY3RpdmVcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBzaG93VUlMb3NlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHB1YmxpYyBTaG93SW5zV2luUGVyX2Jvb2woaXNTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudWlfaW5zV2luUGVyQmcudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd0luc1N0YXVzKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVpX2luc0JnLnZpc2libGUgPSBpc1Nob3c7XG4gICAgfVxuICAgIHByaXZhdGUgU3RvcFVJRWZ0Um90YXRlKCkge1xuICAgICAgICB0aGlzLnNob3dVSUVmdFJvdGF0ZSgwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1VJRWZ0Um90YXRlKHJlbWFpblRpbWU6IG51bWJlciwgdG90YWxUaW1lID0gMzApIHtcbiAgICAgICAgaWYgKHJlbWFpblRpbWUgPiB0b3RhbFRpbWUpIHsgdG90YWxUaW1lID0gcmVtYWluVGltZTsgfVxuICAgICAgICBsZXQgYW5nbGU6IG51bWJlciA9ICh0b3RhbFRpbWUgLSByZW1haW5UaW1lKSAvIHRvdGFsVGltZSAqIDM2MC4wO1xuICAgICAgICAvLyB0aGlzLnVpX2VmdF9yb3RhdGUubm9kZS5zdG9wQWxsQWN0aW9ucyAoKTtcbiAgICAgICAgaWYgKHJlbWFpblRpbWUgPD0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy51aV9lZnRfcm90YXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuU2hvd0luc1N0YXVzKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfZWZ0X3JvdGF0ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfZWZ0X3JvdGF0ZS5zZXRMb2NhbFJvdGF0aW9uWiAoYW5nbGUgKyAxKTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfZWZ0X3JvdGF0ZS5ET0xvY2FsUm90YXRlIChWZWN0b3IzLmZvcndhcmQgKiAzNjAsIHJlbWFpblRpbWUsIFJvdGF0ZU1vZGUuTG9jYWxBeGlzQWRkKS5TZXRFYXNlIChFYXNlLkxpbmVhcikuT25Db21wbGV0ZSAoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TdG9wVUlFZnRSb3RhdGUoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd1VJRWZ0WW91V2luKGlzU2hvdyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy51aV95b3V3aW4udmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG4gICAgcHVibGljIHNob3dVSUVmdEFsbEluKGlzU2hvdyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy51aV9hbmltQWxsaW4udmlzaWJsZSA9IGlzU2hvdztcbiAgICAgICAgdGhpcy51aV9hbGxpbkltZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfYW5pbUFsbGluS2VlcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsaW5TcGluZS5iZ1N0YXJ0KHRoaXMuc2hvd0FuaW1BbGxpbktlZXAuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dBbmltQWxsaW5LZWVwKCkge1xuICAgICAgICB0aGlzLnVpX2FuaW1BbGxpbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfYWxsaW5JbWcudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfYW5pbUFsbGluS2VlcC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGxpblNwaW5lS2VlcC5iZ1N0YXJ0KCk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuICAgIHB1YmxpYyBPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuQ2xlYXJVc2VyKCk7XG4gICAgICAgIGlmICh0aGlzLnVpX2FuaW1BbGxpbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2FuaW1BbGxpbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX2FuaW1BbGxpbktlZXAudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudWlfeW91d2luICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLnVpX3lvdXdpbi52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy/mmK/lkKbmmK/nqbrluqfkvY1cbiAgICBwdWJsaWMgSXNGcmVlU2VhdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVycG9zIDw9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRTdGF0ZVVzZXJXYWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuSXNGcmVlU2VhdCgpKSB7XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVVzZXJDb25uZWN0U3RhdGUoVXNlckNvbm5lY3RTdGF0ZS53YWl0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgSXNXYXRjaCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzV2F0Y2g6IGJvb2xlYW4gPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc1Bvc1dhdGNoKHRoaXMuc2VydmVycG9zKTtcbiAgICAgICAgcmV0dXJuIGlzV2F0Y2g7XG4gICAgfVxuICAgIHB1YmxpYyBJc1dhaXRUb1Rha2VJbigpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzV2FpdFRha2VJbjogYm9vbGVhbiA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLklzUG9zV2FpdFRvVGFrZUluKHRoaXMuc2VydmVycG9zKTtcbiAgICAgICAgcmV0dXJuIGlzV2FpdFRha2VJbjtcbiAgICB9XG4gICAgcHVibGljIElzS2VlcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0IHx8ICh0aGlzLnVzZXJJbmZvICE9IG51bGwgJiYgdGhpcy51c2VySW5mby5pc0sgPiAwKTtcbiAgICB9XG4gICAgcHVibGljIElzUGxheWluZygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc0luUGxheWluZyh0aGlzLnBsYXllci51c2VyaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93RW1vaihpZDogc3RyaW5nKSB7XG4gICAgICAgIC8vIHVpX2ltZ0Vtb2oudHJhbnNmb3JtLkRPS2lsbCAoKTtcbiAgICAgICAgLy8gLy9jaGF0RW1valBvcy5nYW1lT2JqZWN0LlNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgLy8gY2hhdEVtb2pQb3MuU3RhdGVUb0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjaGF0RW1valBvcy5TZXRTdGF0ZSAoR2V0UG9zU3RhdGUgKCkpO1xuXG4gICAgICAgIC8vIGVtb2ppU3ByaXRlLkNsZWFyICgpO1xuICAgICAgICAvLyBpbnQgaW5kZXggPSAwO1xuICAgICAgICAvLyBpbnQuVHJ5UGFyc2UgKGlkLCBvdXQgaW5kZXgpO1xuICAgICAgICAvLyBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSBlbW9qaVNwTnVtLkNvdW50KSB7XG4gICAgICAgIC8vICAgICBpbnQgbnVtID0gZW1vamlTcE51bVtpbmRleF07XG4gICAgICAgIC8vICAgICBmb3IgKGludCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgVUlBdGxhc01hbmFnZXIuU2luZ2xldG9uLlNldFNwcml0ZSAodWlfaW1nRW1vaiwgXCJ0ZXhfZW1vamlcIiwgXCJmYWNlXCIgKyAoaW5kZXggKyAxKSArIFwiX1wiICsgKGkgKyAxKSk7XG4gICAgICAgIC8vICAgICAgICAgU3ByaXRlIHRlbXAgPSBVSUF0bGFzTWFuYWdlci5TaW5nbGV0b24uZ2V0U3BlaXRlIChcInRleF9lbW9qaVwiLCBcImZhY2VcIiArIChpbmRleCArIDEpICsgXCJfXCIgKyAoaSArIDEpKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAodGVtcCAhPSBudWxsKVxuICAgICAgICAvLyAgICAgICAgICAgICBlbW9qaVNwcml0ZS5BZGQgKHRlbXApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKGVtb2ppU3ByaXRlLkNvdW50ID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIHVpX2ltZ0Vtb2ouc3ByaXRlID0gZW1vamlTcHJpdGVbMF07XG4gICAgICAgIC8vICAgICAgICAgdWlfaW1nRW1vai5TZXROYXRpdmVTaXplICgpO1xuICAgICAgICAvLyAgICAgICAgIHVpX2ltZ0Vtb2ouZ2FtZU9iamVjdC5TZXRBY3RpdmUgKHRydWUpO1xuICAgICAgICAvLyAgICAgICAgIHVpX2ltZ0Vtb2oudHJhbnNmb3JtLmxvY2FsU2NhbGUgPVZlY3RvcjMub25lO1xuICAgICAgICAvLyAgICAgICAgIFVHVUlTcHJpdGVBbmltYXRpb24gY29tcCA9IHVpX2ltZ0Vtb2ouZ2FtZU9iamVjdC5nZXRPckFkZENvbXBvbmVudDxVR1VJU3ByaXRlQW5pbWF0aW9uPiAoKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wLlNwcml0ZUZyYW1lcyA9IGVtb2ppU3ByaXRlO1xuICAgICAgICAvLyAgICAgICAgIGNvbXAuUGxheSAoKTtcbiAgICAgICAgLy8gICAgICAgICB1aV9pbWdFbW9qLnRyYW5zZm9ybS5ET01vdmVaICgxLCAzLjVmKS5PbkNvbXBsZXRlICgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHVpX2ltZ0Vtb2ouZ2FtZU9iamVjdC5TZXRBY3RpdmUgKGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29tcC5TdG9wICgpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb21wLlNwcml0ZUZyYW1lcy5DbGVhciAoKTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy99KTsgO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93Q2hhdFNvdW5kKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQoaWQpO1xuICAgICAgICB0aGlzLmJnQ2hhdFBvcy5TaG93KCk7XG5cbiAgICAgICAgbGV0IHBvc1N0YXRlID0gdGhpcy5HZXRQb3NTdGF0ZSgpO1xuICAgICAgICB0aGlzLnVpX2JnQ2hhdC5ub2RlLmdldENvbXBvbmVudChVSVN0YXRlUG9zKS5TZXRTdGF0ZShwb3NTdGF0ZSk7XG5cbiAgICAgICAgbGV0IHNjYWxlWCA9IHBvc1N0YXRlICE9IDMgPyAxIDogLTE7XG4gICAgICAgIHRoaXMudWlfYmdDaGF0LnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgdGhpcy51aV90eHRDaGF0U291bmQuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICB0aGlzLnVpX3R4dENoYXRTb3VuZC5hbGlnbiA9IHNjYWxlWCA9PSAxID8gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkxFRlQgOiBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uUklHSFQ7IC8vYWxpZ25tZW50XG4gICAgICAgIGxldCBjaGF0T3BlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImtleV9jaGF0X3ZhbHVlXCIpOy8vIFBsYXllclByZWZzLkdldEludChDb25zdC5rZXlfY2hhdF92YWx1ZSwgMSk7XG4gICAgICAgIC8vIGlmIChjaGF0T3BlbiA9PSAxKVxuICAgICAgICAvLyAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwic2F5X1wiICsgaWQpO1xuICAgICAgICBpZiAoVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QubGVuZ3RoID4gaW5kZXggJiYgaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy51aV90eHRDaGF0U291bmQudGV4dCA9IFRleGFzQ2hhdENvbXAubGFuZ3VhZ2VMaXN0W2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudWlfYmdDaGF0Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX2JnQ2hhdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0sIDMpO1xuICAgIH1cbiAgICBwdWJsaWMgdGVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIC8v5pKt5pS+6K+t6Z+zXG4gICAgcHVibGljIFNldFBsYXlCYWNrQXVkaW8oY29udGVudDogc3RyaW5nKSB7XG4gICAgICAgIC8vIGJ5dGVbXSB2b2ljZUJ5dGVzID0gQXVkaW9DbGlwQ29udmVydGVyLlN0cmluZ1RvQnl0ZXMoY29udGVudCk7XG4gICAgICAgIC8vIHRlbXBBdWRpbyA9IEF1ZGlvQ2xpcENvbnZlcnRlci5CeXRlc1RvQXVkaW9DbGlwKHZvaWNlQnl0ZXMsIC0xKTtcbiAgICB9XG4gICAgcHVibGljIFBsYXlDaGF0Vm9pY2UocG9zOiBudW1iZXIsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICAvL+aUtuWIsOa2iOaBr+i9rOaNouaSreaUvlxuICAgICAgICAvLyBTZXRQbGF5QmFja0F1ZGlvKGNvbnRlbnQpO1xuICAgICAgICAvLyBpZiAoIUZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkdldFVzZXJJc011dGUgKHBsYXllci51c2VyaWQpKSB7XG5cbiAgICAgICAgLy8gICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheUNoYXRWb2ljZSAodGVtcEF1ZGlvLCAtMSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBzaG93VUlNaWNybyAodHJ1ZSk7XG4gICAgICAgIC8vIHVpX2J0bm1pY3JvcGhvbmUuRE9LaWxsICgpO1xuICAgICAgICAvLyB1aV9idG5taWNyb3Bob25lLnRyYW5zZm9ybS5ET01vdmVaICgxLCAzKS5PbkNvbXBsZXRlICgoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAodWlfYnRubWljcm9waG9uZSAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAgc2hvd1VJTWljcm8gKGZhbHNlKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRQb3NTdGF0ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgbXlwb3MgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyO1xuICAgICAgICBsZXQgcG9zSW5kZXggPSBUZXhhc1RhYmxlLkdldExvY2FsUG9zQnlTZXJ2ZXJQb3ModGhpcy5sb2NhbHBvcywgbXlwb3MsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1hbk51bSk7XG4gICAgICAgIGxldCBwb3NTdGF0ZSA9IDA7XG4gICAgICAgIHN3aXRjaCAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubWFuTnVtKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHBvc0luZGV4ID09IDEpIHsgLy/kuItcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy/kuIpcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5kZXggPT0gMSkgeyAvL+S4i1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxmKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc0luZGV4ID09IDMpIHsgLy/lt6ZcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy/lj7NcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5kZXggPT0gMykgeyAvL+S4ilxuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc0luZGV4ID09IDEpIHsgLy/kuItcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3NJbmRleCA9PSA0KSB7IC8v5bemXG4gICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8v5Y+zXG4gICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKHBvc0luZGV4ID09IDEpIHsgLy/kuItcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICg0IDw9IHBvc0luZGV4ICYmIHBvc0luZGV4IDw9IDUpIHsgLy/lt6ZcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy/lj7NcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5kZXggPT0gNCkgeyAvL+S4ilxuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc0luZGV4ID09IDEpIHsgLy/kuItcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICg1IDw9IHBvc0luZGV4ICYmIHBvc0luZGV4IDw9IDYpIHsgLy/lt6ZcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgLy/lj7NcbiAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5kZXggPT0gMSkgeyAvL+S4i1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxmKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDUgPD0gcG9zSW5kZXggJiYgcG9zSW5kZXggPD0gNykgeyAvL+W3plxuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL+WPs1xuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmIChwb3NJbmRleCA9PSA1KSB7IC8v5LiKXG4gICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zSW5kZXggPT0gMSkgeyAvL+S4i1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxmKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDYgPD0gcG9zSW5kZXggJiYgcG9zSW5kZXggPD0gOCkgeyAvL+W3plxuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL+WPs1xuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGlmIChwb3NJbmRleCA9PSA2KSB7IC8v5LiKXG4gICAgICAgICAgICAgICAgICAgIHBvc1N0YXRlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zSW5kZXggPT0gMSkgeyAvL+S4i1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxmKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zU3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDcgPD0gcG9zSW5kZXggJiYgcG9zSW5kZXggPD0gOSkgeyAvL+W3plxuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL+WPs1xuICAgICAgICAgICAgICAgICAgICBwb3NTdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvc1N0YXRlO1xuICAgIH1cbiAgICAvL+iuvue9ruaYvuekuueahOS9jee9rlxuICAgIHB1YmxpYyBTZXRQb3NJblZpZXcodmVjM0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBvc1N0YXRlID0gdGhpcy5HZXRQb3NTdGF0ZSgpO1xuICAgICAgICB0aGlzLlNldFBvc1N0YXRlKHBvc1N0YXRlKTtcbiAgICAgICAgbGV0IHYgPSB2ZWMzSW5kZXggPT0gMSAmJiB0aGlzLnNlbGYgPyAxLjA4IDogMC42O1xuICAgICAgICAvLyB0aGlzLnVpX2NhcmROb2RlLm5vZGUucG9zaXRpb24gPSBjYy52Myh2LHYsMCk7Ly8gVmVjdG9yMy5vbmUgKiAodmVjM0luZGV4ID09IDEgJiYgdGhpcy5zZWxmID8gMS4wOGYgOiAwLjZmKTtcblxuICAgICAgICBpZiAocG9zU3RhdGUgPT0gMykgeyAvL1syLCAzLCA0LCA1XS5pbmRleE9mKHZlYzNJbmRleCkgPj0gMCkge1xuICAgICAgICAgICAgLy8g5Y+z6L65546p5a62XG4gICAgICAgICAgICB0aGlzLnVpX3N0YXR1c2JnLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDAsIDIyLCAwKTtcbiAgICAgICAgICAgIHRoaXMudWlfZ2FtYmxlQmcubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC04MCwgLTI2LCAwKTtcbiAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzFcIikuYXNJbWFnZS5mbGlwID0gZmd1aS5GbGlwVHlwZS5Ib3Jpem9udGFsO1xuICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnMlwiKS5hc0ltYWdlLmZsaXAgPSBmZ3VpLkZsaXBUeXBlLkhvcml6b250YWw7XG4gICAgICAgICAgICB0aGlzLnVpX3N0YXR1c2JnLmdldENoaWxkKFwiYmczXCIpLmFzSW1hZ2UuZmxpcCA9IGZndWkuRmxpcFR5cGUuTm9uZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5bem6L65546p5a62XG4gICAgICAgICAgICB0aGlzLnVpX3N0YXR1c2JnLm5vZGUucG9zaXRpb24gPSBjYy52MygyMjAsIDIyLCAwKTtcbiAgICAgICAgICAgIHRoaXMudWlfZ2FtYmxlQmcubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDIyMCwgLTI2LCAwKTtcbiAgICAgICAgICAgIHRoaXMudWlfc3RhdHVzYmcuZ2V0Q2hpbGQoXCJiZzFcIikuYXNJbWFnZS5mbGlwID0gZmd1aS5GbGlwVHlwZS5Ob25lO1xuICAgICAgICAgICAgdGhpcy51aV9zdGF0dXNiZy5nZXRDaGlsZChcImJnMlwiKS5hc0ltYWdlLmZsaXAgPSBmZ3VpLkZsaXBUeXBlLk5vbmU7XG4gICAgICAgICAgICB0aGlzLnVpX3N0YXR1c2JnLmdldENoaWxkKFwiYmczXCIpLmFzSW1hZ2UuZmxpcCA9IGZndWkuRmxpcFR5cGUuSG9yaXpvbnRhbDtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTZXRQb3NTdGF0ZShwb3NTdGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZ2FtYmxlQmdQb3MuU2V0U3RhdGUocG9zU3RhdGUpO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc1Bvcy5TZXRTdGF0ZSAocG9zU3RhdGUpO1xuICAgICAgICB0aGlzLmJhbmtlclBvcy5TZXRTdGF0ZShwb3NTdGF0ZSk7XG4gICAgICAgIC8vIHRoaXMuaW5zQmdQb3MuU2V0U3RhdGUgKHBvc1N0YXRlKTtcbiAgICAgICAgLy8gdGhpcy5pbnNXaW5QZXJCZ1Bvcy5TZXRTdGF0ZSAocG9zU3RhdGUpO1xuICAgICAgICB0aGlzLmdhbWJsZUljb25Qb3MuU2V0U3RhdGUocG9zU3RhdGUpO1xuICAgICAgICB0aGlzLnR4dEdhbWJsZVBvcy5TZXRTdGF0ZShwb3NTdGF0ZSk7XG5cbiAgICAgICAgLy8gdGhpcy5zdGF0dXNiZ1Bvcy5TZXRTdGF0ZSAocG9zU3RhdGUpO1xuICAgICAgICAvLyB0aGlzLmRlZmF1bHRDYXJkc01vdmVQb3MuU2V0U3RhdGUgKHBvc1N0YXRlKTtcbiAgICAgICAgdGhpcy5jYXJkTm9kZVBvcy5TZXRTdGF0ZShwb3NTdGF0ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVBbGxDYXJkQmdJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5VcGRhdGVDYXJkSW1hZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uVXBkYXRlQ2FyZEltYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgPT0gbnVsbCkgQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lID0gXCIwMDNcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy51aV9kZWZhdWx0Q2FyZHNNb3ZlLmdldENoaWxkKGBkZWZhdWx0Q2FyZCR7aX1Nb3ZlYCkuYXNDb207XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGNhcmQuZ2V0Q2hpbGQoXCJ2YWxcIikuYXNMb2FkZXIsIENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSwgXCJUZXhhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmRzTW92ZUNhcmRzLnB1c2goY2FyZCk7XG5cbiAgICAgICAgICAgIC8vIGxldCBjYXJkMiA9IHRoaXMudWlfZGVmYXVsdENhcmRzLmdldENoaWxkIChgZGVmYXVsdENhcmQke2l9YCkuYXNDb207XG4gICAgICAgICAgICAvLyBjYXJkMi5nZXRDaGlsZChcInZhbFwiKS5hc0xvYWRlci51cmwgPSBcInVpOi8vVGV4YXMvXCIrQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lO1xuICAgICAgICAgICAgLy8gdGhpcy5kZWZhdWx0Q2FyZHNQb3NDYXJkcy5wdXNoKGNhcmQyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6ZqP5py65pWwXG4gICAgZ2V0UmFuZG9tTnVtSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICB2YXIgUmFuZ2UgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTsgLy/ojrflj5ZbMC0x77yJ55qE6ZqP5py65pWwXG4gICAgICAgIHJldHVybiAobWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpKTsgLy/mlL7lpKflj5bmlbRcbiAgICB9XG5cbiAgICAvLyDmioogbm9kZTHnp7vliqjliLAgbm9kZTLnmoTkvY3nva5cbiAgICBwdWJsaWMgbW92ZU4xdG9OMihub2RlMTogY2MuTm9kZSwgbm9kZTI6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxuICAgIC8vIOiOt+WPluaKiiBub2RlMeenu+WKqOWIsCBub2RlMuS9jee9ruWQjueahOWdkOagh1xuICAgIHB1YmxpYyBjb252ZXJ0Tm9kZVNwYWNlQVIobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCB2ID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pKVxuICAgICAgICByZXR1cm4gY2MudjIodi54LCB2LnkpO1xuICAgIH1cblxuICAgIFNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzdXBlci5TaG93KCk7XG4gICAgfVxuXG4gICAgSGlkZSgpIHtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBUZXhhc1VzZXJIYW5kbGVTdGF0ZSB7XG4gICAgaW52YWxpZCA9IC0xLFxuICAgIGdpdmVVcCA9IDAsIC8v5LiiXG4gICAgZm9sbG93ID0gMSwgLy/ot58gICAgXG4gICAgZGEgPSAyLCAvL+WKoOazqFxuICAgIGFsbGluID0gMywgLy/mlbIgXG4gICAgeGl1ID0gNCwgLy/orqnniYwgXG4gICAgc3RyYWRsbGUgPSA1LCAvL3N0cmFkbGxlXG4gICAgbG9zZSA9IDYsIC8v6K6p6L6TICBcbiAgICBzdHJhZCA9IDcsLy/ooaXmipPlpLRcbn1cblxuZXhwb3J0IGVudW0gVXNlckNvbm5lY3RTdGF0ZSB7XG4gICAga2VlcFNlYXQgPSAwLFxuICAgIGZyZWUgPSAxLFxuICAgIGRpc2Nvbm5lY3QgPSAyLFxuICAgIHBsYXkgPSAzLFxuICAgIHdhdGNoID0gNCxcbiAgICB3YWl0ID0gNSxcbiAgICB3YWl0VGFrZUluID0gNixcblxufVxuIl19