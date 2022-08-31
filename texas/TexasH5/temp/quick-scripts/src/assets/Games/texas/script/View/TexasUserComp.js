"use strict";
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