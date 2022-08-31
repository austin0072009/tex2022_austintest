
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/LobbyView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e409bHWABI8rlpqJO+MpsO', 'LobbyView');
// GameHall/script/Lobby/LobbyView.ts

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
var AudioManager_1 = require("../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../Script/BaseFrame/CommonCtr");
var CommonView_1 = require("../../../Script/BaseFrame/CommonView");
var PublicMethods_1 = require("../../../Script/BaseFrame/PublicMethods");
var SceneManager_1 = require("../../../Script/BaseFrame/SceneManager");
var StatusbarView_1 = require("../../../Script/BaseFrame/StatusbarView");
var ViewBase_1 = require("../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../Script/BaseFrameNative");
var LoginViewCtr_1 = require("../Login/LoginViewCtr");
var NativeMethod_1 = require("../NativeMethod");
var ActivityDetails_1 = require("./activity/ActivityDetails");
var ActivityView_1 = require("./activity/ActivityView");
var CardInfoItem_1 = require("./career/CardInfoItem");
var CareerView_1 = require("./career/CareerView");
var MyCardDerailsView_1 = require("./career/MyCardDerailsView");
var MyCardHistory_1 = require("./career/MyCardHistory");
var MyCardSpectrumView_1 = require("./career/MyCardSpectrumView");
var MySsDerailsView_1 = require("./career/MySsDerailsView");
var CommunityView_1 = require("./Community/CommunityView");
var Broadcast_1 = require("./Components/Broadcast");
var RoomItem_1 = require("./Components/RoomItem");
var SlideShow_1 = require("./Components/SlideShow");
var createTableTexas_1 = require("./createTable/createTableTexas");
var EntertainmentView_1 = require("./entertainment/EntertainmentView");
var GameItemInEntertainment_1 = require("./entertainment/GameItemInEntertainment");
var FlowingWaterView_1 = require("./flowingwater/FlowingWaterView");
var MyInformationView_1 = require("./flowingwater/MyInformationView");
var WalletRecordView_1 = require("./flowingwater/WalletRecordView");
var MyKnapsackItem_1 = require("./knapsack/MyKnapsackItem");
var MyKnapsackView_1 = require("./knapsack/MyKnapsackView");
var LobbyViewCtr_1 = require("./LobbyViewCtr");
var MatchBlindsItem_1 = require("./match/MatchBlindsItem");
var MatchDerailsView_1 = require("./match/MatchDerailsView");
var MatchItem_1 = require("./match/MatchItem");
var MatchPlayInfoItem_1 = require("./match/MatchPlayInfoItem");
var MatchRewardTypeOne_1 = require("./match/MatchRewardTypeOne");
var MatchRewardTypeThree_1 = require("./match/MatchRewardTypeThree");
var MatchRewardTypeTwo_1 = require("./match/MatchRewardTypeTwo");
var MatchView_1 = require("./match/MatchView");
var MeView_1 = require("./Me/MeView");
var ModifyLoginPwdView_1 = require("./modifyLoginPwd/ModifyLoginPwdView");
var ModifyPlayPwdView_1 = require("./modifyPlayPwd/ModifyPlayPwdView");
var MyinfoView_1 = require("./myinfo/MyinfoView");
var PopupView_1 = require("./pop/PopupView");
var AboutUsView_1 = require("./settingpanel/AboutUsView");
var LanguageView_1 = require("./settingpanel/LanguageView");
var PrivacyView_1 = require("./settingpanel/PrivacyView");
var SettingView_1 = require("./settingpanel/SettingView");
var ShareView_1 = require("./share/ShareView");
var BankcardDerails_1 = require("./topup/BankcardDerails");
var TopupView_1 = require("./topup/TopupView");
var ViptopDerails_1 = require("./topup/ViptopDerails");
var VirtualDerails_1 = require("./topup/VirtualDerails");
var ZfbDerails_1 = require("./topup/ZfbDerails");
var MyverificationPwdView_1 = require("./transfer/MyverificationPwdView");
var TransferView_1 = require("./transfer/TransferView");
var MyVipPrivilegeView_1 = require("./vip/MyVipPrivilegeView");
var VipConfirmAdressView_1 = require("./vip/VipConfirmAdressView");
var VipConfirmOrderView_1 = require("./vip/VipConfirmOrderView");
var VipDerailsView_1 = require("./vip/VipDerailsView");
var VipExchangeLogView_1 = require("./vip/VipExchangeLogView");
var VipExidAdressView_1 = require("./vip/VipExidAdressView");
var VipShoppingView_1 = require("./vip/VipShoppingView");
var WelfareQuestItem_1 = require("./welfare/WelfareQuestItem");
var WelfareView_1 = require("./welfare/WelfareView");
var WithdrawalView_1 = require("./Withdrawal/WithdrawalView");
var redPacket_1 = require("./redPacket/redPacket");
var ReconnectManager_1 = require("../../../Script/BaseFrame/ReconnectManager");
var GameUpdateMgr_1 = require("../GameUpdateMgr");
var SetPayPassword_1 = require("./Me/SetPayPassword");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LobbyView = /** @class */ (function (_super) {
    __extends(LobbyView, _super);
    function LobbyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadNode = null;
        /**房间列表 */
        _this.ui_roomList = null;
        /**金币 */
        _this.ui_Hallgold = null;
        _this.ui_btn_serviveTop = null; // 客服
        _this.ui_vip = null;
        _this.ui_btn_hallAddGold = null;
        _this.ui_join_1 = null;
        _this.ui_btn_createTexas = null;
        _this.ui_btn_limitEmty = null;
        _this.input_joinCommunitty = null;
        _this.btn_joinCommunitty = null;
        _this.ui_bottomBar = null;
        _this.gettablelistCB = null;
        _this.isStartTimer = true;
        _this.isHallJoin = false;
        _this.isCanTouch = false;
        _this.ui_btn_breakw = null;
        _this.ui_updateLayer = null;
        _this.ui_loading = null;
        _this.ui_progressText = null;
        _this.ui_btn_eyes = null;
        _this.isLimitEmty = false;
        _this._isCanTouch = true;
        _this.entergid = 0;
        _this.entertid = 0;
        _this.enterlvid = 0;
        _this.room = [];
        return _this;
    }
    Object.defineProperty(LobbyView.prototype, "needProcess", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LobbyView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LobbyView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LobbyView.prototype, "componentName", {
        get: function () {
            return "Lobby";
        },
        enumerable: false,
        configurable: true
    });
    LobbyView.prototype.onLoad = function () {
        var _this = this;
        NativeMethod_1.default.changeOrientationH(false);
        var filename;
        switch (AppConst_1.AppConst.languageType) {
            case 1:
                filename = "hallZWFT";
                break;
            case 2:
                filename = "hallZWJT";
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                filename = "hallZWFT";
                break;
        }
        fgui.UIObjectFactory.setExtension("ui://Lobby/Slideshow", SlideShow_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/Broadcast", Broadcast_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/roomItem", RoomItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/me", MeView_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/zfbDerails", ZfbDerails_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/bankcardDerails", BankcardDerails_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/VirtualDerails", VirtualDerails_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/viptopDerails", ViptopDerails_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/entertainment", EntertainmentView_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/activity", ActivityView_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/gameItem", GameItemInEntertainment_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/cardInfoItem", CardInfoItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/matchItem", MatchItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/knapsackItem", MyKnapsackItem_1.MyKnapsackItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/questItem", WelfareQuestItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/mzTableItem", MatchBlindsItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/playInfoItem", MatchPlayInfoItem_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem", MatchRewardTypeOne_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem1", MatchRewardTypeTwo_1.default);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem2", MatchRewardTypeThree_1.default);
        fgui.UIConfig.globalModalWaiting = "ui://Lobby/GlobalModalWaiting";
        if (AppConst_1.AppConst.languageType == 1) {
            fgui.addLoadHandler();
            fgui.GRoot.create();
            _super.prototype.onLoad.call(this);
            return;
        }
        var bundle = cc.assetManager.getBundle("gameHall");
        bundle.load("/res/language/" + filename, function (err, data) {
            if (err) {
                cc.log("语言文件加载失败");
                fgui.addLoadHandler();
                fgui.GRoot.create();
                _super.prototype.onLoad.call(_this);
                return;
            }
            fgui.UIPackage.setStringsSource(data.text);
            fgui.addLoadHandler();
            fgui.GRoot.create();
            _super.prototype.onLoad.call(_this);
        });
    };
    LobbyView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        console.log("--- createChildComponents time ---", new Date().getTime());
        this.ui_updateLayer.visible = false;
        this.tipView = this.addFguiComponent(CommonView_1.default);
        this.tipView.node.zIndex = 200;
        var state = this.addFguiComponent(StatusbarView_1.default, false);
        state.fguiY = 10;
        state.node.zIndex = 300;
        // 预加载会导致加载太慢 放在加载时一起加
        // this.aboutUsView = this.addFguiComponent(AboutUsView);
        // this.privacyView = this.addFguiComponent(PrivacyView);
        // this.welfareView = this.addFguiComponent(WelfareView);
    };
    LobbyView.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        console.log("--- allChildCreated time ---", new Date().getTime());
    };
    LobbyView.prototype.OnLoadCompleted = function () {
        var _this = this;
        BaseFrameNative_1.BaseFrameNative.nowGameView = null;
        BaseFrameNative_1.BaseFrameNative.isInHall = true;
        LobbyViewCtr_1.default.instance.RegistNotify();
        console.log("--- OnLoadCompleted time ---", new Date().getTime());
        fgui.GRoot.inst.addChild(this.fguiComponent);
        // this.fguiComponent.makeFullScreen();
        PublicMethods_1.PublicMethods.screenFit(this.fguiComponent);
        this.lobbyController = LobbyViewCtr_1.default.instance;
        this.lobbyController.view = this;
        this.selectGameController = this.fguiComponent.getController("game");
        this.selectLimitController = this.fguiComponent.getController("limit");
        this.selectGameController.onChanged(this.selectGame, this);
        this.selectLimitController.onChanged(this.selectLimit, this);
        this.ui_roomList.setVirtual();
        this.ui_roomList.itemRenderer = this.renderListItem.bind(this);
        this.ui_roomList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.barController = this.ui_bottomBar.getController("bar");
        this.barController.onChanged(this.barStateChange, this);
        this.barController.setSelectedIndex(3);
        var barLoader = this.ui_bottomBar.getChild("n1").asButton.getChild("n2").asLoader;
        NativeMethod_1.default.setUrlByLanguage(barLoader);
        this.meView = this.getChild("me");
        this.slideShow = this.getChild("Slideshow");
        this.meView.changedBtnCom(this.meView.height);
        this.broadcast = this.getChild("Broadcast");
        this.broadcast.node.zIndex = cc.macro.MAX_ZINDEX;
        this.activityView = this.getChild("activity");
        this.entertainmentView = this.getChild("entertainment");
        this.ui_btn_hallAddGold.onClick(this.showTopup, this);
        this.ui_btn_eyes.onClick(this.hideGold, this);
        this.ui_btn_serviveTop.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
            UIUtil_1.UIUtil.kefuFunction(_this.openWebsite.bind(_this));
        }, this);
        this.roomGroup = this.getChild("n22").asGroup;
        this.ui_btn_limitEmty.onClick(this.limitEmtyCallback, this);
        // 注册加入社区按钮事件
        this.input_joinCommunitty = this.ui_join_1.getChild("inputCommNum").asTextInput;
        this.btn_joinCommunitty = this.ui_join_1.getChild("btn_joinCommunitty").asButton;
        this.btn_joinCommunitty.onClick(function () {
            if (_this.isCanTouch) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請不要頻繁點擊！");
                return;
            }
            _this.isCanTouch = true;
            var id = _this.input_joinCommunitty.text;
            if (id == "") {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入正確的社區號");
            }
            else {
                _this.isHallJoin = true;
                LobbyViewCtr_1.default.instance.cs_apply_club(Number(id), "");
            }
            _this.scheduleOnce(function () {
                _this.isCanTouch = false;
            }, 2);
        });
        // 获取VIP配置
        LobbyViewCtr_1.default.instance.cs_getvipconfig();
        // 获取邮件消息
        LobbyViewCtr_1.default.instance.cs_getemaillist();
        this.ui_btn_createTexas.onClick(this.showCreateTableTexas.bind(this));
        // this.ui_btn_createTexas.visible = BaseFrameNative.serverlistItem.status == 0;
        var lv = AppConst_1.AppConst.mPlayerModel.lv;
        var isShow = false;
        if (lv == 20 || BaseFrameNative_1.BaseFrameNative.serverlistItem.status == 0) {
            isShow = true;
        }
        this.ui_btn_createTexas.visible = isShow;
        var id = AppConst_1.AppConst.mPlayerModel.userid;
        var url = AppConst_1.AppConst.mPlayerModel.wechat.wicon; //头像
        this.meView.setHead(url);
        if (AppConst_1.AppConst.currentlevelid !== undefined) { //从游戏中返回再取获取最新的金币
            this.lobbyController.cs_searchgoldornickname(id); //获取金币
        }
        else {
            this.changedGold();
        }
        // 加载完毕 取消loading
        var script = this.loadNode.getComponent("LoadingScript");
        if (script) {
            script.loadCompelete();
        }
        this.loadNode.active = false;
        this.ui_btn_breakw.node.zIndex = cc.macro.MAX_ZINDEX;
        this.ui_btn_breakw.sortingOrder = 9997;
        this.ui_btn_breakw.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
            _this.closeWebView();
        }, this);
        this.isShowCommunity();
        console.log("LoginViewCtr.instance.Model.cidx == ", LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        if (LoginViewCtr_1.LoginViewCtr.instance.Model.cidx != 0) {
            LobbyViewCtr_1.default.instance.cs_getagentinfo_onlyData(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        }
        else {
            // 清空之前的缓存
            LobbyViewCtr_1.default.instance.Model.ageninfo = null;
        }
        LobbyViewCtr_1.default.instance.Model.isSetPayPassword = (AppConst_1.AppConst.mPlayerModel["UserPassword"] && AppConst_1.AppConst.mPlayerModel["UserPassword"] != "");
        this.lobbyController.cs_getnotice(1);
        this.lobbyController.cs_getnotice(4);
        this.intiWebView();
        window.closeWebView = this.closeWebView.bind(this);
        AudioManager_1.AudioManager.Singleton.playBGM("bgmusic");
        AudioManager_1.AudioManager.Singleton.setSoundStatus(AudioManager_1.AudioManager.TexasMusicStatus ? "open" : "close");
        AudioManager_1.AudioManager.Singleton.setEffectStatus(AudioManager_1.AudioManager.TexasEffectStatus ? "open" : "close");
        this.barStateChange(false); //显示到默认页面
        this.reconnection();
        // 重连逻辑
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.on(cc.game.EVENT_SHOW, this.gameEventShow.bind(this));
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_HIDE, this.gameEventHide.bind(this));
    };
    LobbyView.prototype.gameEventShow = function () {
        CommonCtr_1.CommonCtr.instance.view.Hide();
        cc.game.resume();
        ReconnectManager_1.ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this), false);
    };
    LobbyView.prototype.connectSuccess = function () {
        console.log("--- connectSuccess ---");
    };
    LobbyView.prototype.connectFail = function () {
        CommonCtr_1.CommonCtr.instance.view.backLogin();
    };
    LobbyView.prototype.gameEventHide = function () {
        console.log("--- gameEventHide ---");
        cc.game.pause();
    };
    LobbyView.prototype.intiWebView = function () {
        var node = this.getChild("webview").asLoader.node;
        this.webView = node.addComponent(cc.WebView);
        var webviewEventHandler = new cc.Component.EventHandler();
        webviewEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        webviewEventHandler.component = "LobbyView";
        webviewEventHandler.handler = "webViewEvent";
        //@ts-ignore
        this.webView.webviewEvents.push(webviewEventHandler);
        this.webView.node.active = false;
    };
    LobbyView.prototype.webViewEvent = function (sender, event, customEventData) {
        console.log("customEventData == ", customEventData);
        if (event === cc.WebView.EventType.LOADED) {
            console.log("-webView---loaded---finish!");
        }
        else if (event === cc.WebView.EventType.LOADING) {
            console.log("webView---loading");
        }
        else if (event === cc.WebView.EventType.ERROR) {
            console.log("webView---sender", JSON.stringify(sender));
            console.log("webView---event", event);
            // this.closeWebView();
        }
    };
    LobbyView.prototype.closeWebView = function () {
        cc.log("========closeWebView============");
        this.ui_btn_breakw.visible = false;
        this.webView.url = '';
        this.webView.node.active = false;
    };
    /**打開網頁 */
    LobbyView.prototype.openWebsite = function (url) {
        this.ui_btn_breakw.visible = true;
        this.webView.node.active = true;
        this.webView.url = url;
    };
    LobbyView.prototype.limitEmtyCallback = function () {
        AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
        this.isLimitEmty = !this.isLimitEmty;
        this.ui_btn_limitEmty.selected = this.isLimitEmty;
        this.handleRoomData();
    };
    LobbyView.prototype.GetLev = function (exp) {
        var vipConfig = LobbyViewCtr_1.default.instance.Model.vipConfig;
        var iLev = 0;
        var iLen = vipConfig.UpExps.length;
        var iTotalExp = 0;
        for (var i = 0; i < iLen; i++) {
            iTotalExp += vipConfig.UpExps[i];
            if (exp >= iTotalExp) {
                iLev = i;
            }
            else {
                break;
            }
            ;
        }
        LobbyViewCtr_1.default.instance.Model.vipLevel = iLev;
        this.ui_vip.setVar("vip", iLev + '').flushVars();
        if (this.meView)
            this.meView.initData();
        return iLev;
    };
    LobbyView.prototype.onDisable = function () {
        this.unscheduleAllCallbacks();
    };
    LobbyView.prototype.changedGold = function () {
        var gold = AppConst_1.AppConst.mPlayerModel.gold;
        if (this.ui_btn_eyes.selected) {
            this.ui_Hallgold.text = '*****';
        }
        else {
            this.ui_Hallgold.text = UIUtil_1.UIUtil.formatNumber(gold) + "";
            ;
        }
        this.entertainmentView && this.entertainmentView.changedGold();
    };
    /**斷綫重連 */
    LobbyView.prototype.reconnection = function () {
        var state = AppConst_1.AppConst.mPlayerModel.state;
        console.log("AppConst.mPlayerModel === ", AppConst_1.AppConst.mPlayerModel);
        console.log("AppConst.mPlayerModel.state === ", AppConst_1.AppConst.mPlayerModel.state);
        if (state > 0) { //需要重连
            AppConst_1.AppConst.mPlayerModel.state = 0;
            var gameId = AppConst_1.AppConst.currentGameId;
            console.log("断线重连中...", gameId);
            switch (gameId) {
                case 51: //德州
                    CommonCtr_1.CommonCtr.instance.ShowTipLabel("断线重连中...");
                    var tid = AppConst_1.AppConst.roomId;
                    this.entergid = gameId;
                    this.entertid = +tid;
                    this.enterlvid = AppConst_1.AppConst.currentlevelid;
                    this.checkUpdateGame();
                    break;
                default:
                    this.entertainmentView.checkUpdateGame(gameId);
                    break;
            }
        }
        else {
            var gameId = AppConst_1.AppConst.currentGameId;
            if (!gameId) {
                return;
            }
            if (gameId == -1) {
                this.showTopup();
                return;
            }
            if (gameId === 51) {
            }
            else {
                this.barController.selectedIndex = 5;
            }
        }
    };
    LobbyView.prototype.showCreateTableTexas = function () {
        if (this.createTableTexas) {
            this.createTableTexas.Show();
        }
        else {
            this.createTableTexas = this.addFguiComponent(createTableTexas_1.default);
        }
    };
    LobbyView.prototype.showTopup = function () {
        if (this.topupView) {
            this.topupView.Show();
        }
        else {
            this.topupView = this.addFguiComponent(TopupView_1.default);
            this.topupView.node.zIndex = 190;
        }
    };
    LobbyView.prototype.showTransferView = function () {
        if (this.transferView) {
            this.transferView.Show();
        }
        else {
            this.transferView = this.addFguiComponent(TransferView_1.default);
        }
    };
    LobbyView.prototype.showWithdrawal = function () {
        if (this.withdrawalView) {
            this.withdrawalView.Show();
        }
        else {
            this.withdrawalView = this.addFguiComponent(WithdrawalView_1.default);
        }
    };
    LobbyView.prototype.showWelfareView = function () {
        // this.meView.visible = false;
        //  this.barController.setSelectedIndex(0);
        if (this.welfareView) {
            this.welfareView.Show();
        }
        else {
            this.welfareView = this.addFguiComponent(WelfareView_1.default);
        }
    };
    LobbyView.prototype.showSettingView = function () {
        if (this.settingView) {
            this.settingView.Show();
        }
        else {
            this.settingView = this.addFguiComponent(SettingView_1.default);
        }
    };
    LobbyView.prototype.showModifyLoginPwdView = function () {
        if (this.modifyLoginPwdView) {
            this.modifyLoginPwdView.Show();
        }
        else {
            this.modifyLoginPwdView = this.addFguiComponent(ModifyLoginPwdView_1.default);
        }
    };
    LobbyView.prototype.showModifyPlayPwdView = function () {
        if (this.modifyPlayPwdView) {
            this.modifyPlayPwdView.Show();
        }
        else {
            this.modifyPlayPwdView = this.addFguiComponent(ModifyPlayPwdView_1.default);
        }
    };
    LobbyView.prototype.showcommunityView = function () {
        if (this.communityView) {
            this.communityView.Show();
        }
        else {
            this.communityView = this.addFguiComponent(CommunityView_1.default);
        }
    };
    LobbyView.prototype.showactivityDetails = function (data) {
        if (this.activityDetails) {
            this.activityDetails.MyStart(data);
        }
        else {
            this.activityDetails = this.addFguiComponent(ActivityDetails_1.default);
            this.activityDetails.MyStart(data);
        }
    };
    LobbyView.prototype.showShareView = function () {
        if (this.shareView) {
            this.shareView.Show();
        }
        else {
            this.shareView = this.addFguiComponent(ShareView_1.default);
        }
    };
    LobbyView.prototype.showCareerView = function () {
        if (this.careerView) {
            this.careerView.Show();
        }
        else {
            this.careerView = this.addFguiComponent(CareerView_1.default);
        }
    };
    LobbyView.prototype.showMyCardSpectrumView = function () {
        if (this.myCardSpectrumView) {
            this.myCardSpectrumView.Show();
        }
        else {
            this.myCardSpectrumView = this.addFguiComponent(MyCardSpectrumView_1.default);
        }
    };
    LobbyView.prototype.showMyCardDerailsView = function (_tid, data) {
        if (data === void 0) { data = null; }
        if (this.myCardDerailsView) {
            this.myCardDerailsView.MyStart(_tid);
        }
        else {
            this.myCardDerailsView = this.addFguiComponent(MyCardDerailsView_1.default);
            this.myCardDerailsView.MyStart(_tid);
        }
        // if (this.myCardHistory) {
        //     this.myCardHistory.MyStart(_cid, data);
        // } else {
        //     this.myCardHistory = this.addFguiComponent(MyCardHistory);
        //     this.myCardHistory.MyStart(_cid, data);
        // }
    };
    LobbyView.prototype.showMyCardHistory = function (_cid, data) {
        if (data === void 0) { data = null; }
        if (this.myCardHistory) {
            this.myCardHistory.MyStart(_cid, data);
        }
        else {
            this.myCardHistory = this.addFguiComponent(MyCardHistory_1.default);
            this.myCardHistory.MyStart(_cid, data);
        }
    };
    LobbyView.prototype.showknapsackView = function () {
        if (this.myKnapsackView) {
            this.myKnapsackView.Show();
        }
        else {
            this.myKnapsackView = this.addFguiComponent(MyKnapsackView_1.default);
        }
    };
    LobbyView.prototype.showMatchView = function () {
        if (this.matchView) {
            this.matchView.Show();
        }
        else {
            this.matchView = this.addFguiComponent(MatchView_1.default, false);
            this.matchView.fguiHeight = this.fguiHeight - 187;
        }
    };
    LobbyView.prototype.showMatchDerailsView = function () {
        if (this.matchDerailsView) {
            this.matchDerailsView.Show();
        }
        else {
            this.matchDerailsView = this.addFguiComponent(MatchDerailsView_1.default);
        }
    };
    LobbyView.prototype.showmySsDerailsView = function (cid) {
        if (this.mySsDerailsView) {
            this.mySsDerailsView.Competeid = cid;
            this.mySsDerailsView.Show();
        }
        else {
            this.mySsDerailsView.Competeid = cid;
            this.mySsDerailsView = this.addFguiComponent(MySsDerailsView_1.default);
        }
    };
    /**验证密码 */
    LobbyView.prototype.showVerificationPwdView = function () {
        if (this.verificationPwdView) {
            this.verificationPwdView.Show();
        }
        else {
            this.verificationPwdView = this.addFguiComponent(MyverificationPwdView_1.default);
        }
    };
    /**个人信息 */
    LobbyView.prototype.showMyinfoView = function () {
        if (this.myinfoView) {
            this.myinfoView.Show();
        }
        else {
            this.myinfoView = this.addFguiComponent(MyinfoView_1.default);
        }
    };
    /**流水 */
    LobbyView.prototype.showFlowingWaterView = function () {
        if (this.flowingWaterView) {
            this.flowingWaterView.Show();
        }
        else {
            this.flowingWaterView = this.addFguiComponent(FlowingWaterView_1.default);
        }
    };
    /**關於我們 */
    LobbyView.prototype.showAboutUsView = function () {
        if (this.aboutUsView) {
            this.aboutUsView.Show();
        }
        else {
            this.aboutUsView = this.addFguiComponent(AboutUsView_1.default);
        }
    };
    /**隱私 */
    LobbyView.prototype.showPrivacyView = function () {
        if (this.privacyView) {
            this.privacyView.Show();
        }
        else {
            this.privacyView = this.addFguiComponent(PrivacyView_1.default);
        }
    };
    /**语言设置 */
    LobbyView.prototype.showLanguageView = function () {
        if (this.languageView) {
            this.languageView.Show();
        }
        else {
            this.languageView = this.addFguiComponent(LanguageView_1.default);
        }
    };
    /**vip 特權 */
    LobbyView.prototype.showVipPrivilegeView = function () {
        if (this.myVipPrivilegeView) {
            this.myVipPrivilegeView.Show();
        }
        else {
            this.myVipPrivilegeView = this.addFguiComponent(MyVipPrivilegeView_1.default);
        }
    };
    LobbyView.prototype.showVipShoppingView = function () {
        if (this.vipShoppingView) {
            this.vipShoppingView.Show();
        }
        else {
            this.vipShoppingView = this.addFguiComponent(VipShoppingView_1.default);
        }
    };
    /**vip详情 */
    LobbyView.prototype.showVipDerailsView = function () {
        if (this.vipDerailsView) {
            this.vipDerailsView.Show();
        }
        else {
            this.vipDerailsView = this.addFguiComponent(VipDerailsView_1.default);
        }
    };
    LobbyView.prototype.showVipExchangeLogView = function () {
        if (this.vipExchangeLogView) {
            this.vipExchangeLogView.Show();
        }
        else {
            this.vipExchangeLogView = this.addFguiComponent(VipExchangeLogView_1.default);
        }
    };
    LobbyView.prototype.showVipExidAdressView = function () {
        if (this.vipExidAdressView) {
            this.vipExidAdressView.Show();
        }
        else {
            this.vipExidAdressView = this.addFguiComponent(VipExidAdressView_1.default);
        }
    };
    LobbyView.prototype.showVipConfirmOrderView = function () {
        if (this.vipConfirmOrderView) {
            this.vipConfirmOrderView.Show();
        }
        else {
            this.vipConfirmOrderView = this.addFguiComponent(VipConfirmOrderView_1.default);
        }
    };
    LobbyView.prototype.showVipConfirmAdressView = function () {
        if (this.vipConfirmAdressView) {
            this.vipConfirmAdressView.Show();
        }
        else {
            this.vipConfirmAdressView = this.addFguiComponent(VipConfirmAdressView_1.default);
        }
    };
    LobbyView.prototype.showPopupView = function () {
        if (this.popupView) {
            this.popupView.Show();
        }
        else {
            this.popupView = this.addFguiComponent(PopupView_1.default);
        }
    };
    /**我的消息 */
    LobbyView.prototype.showMyInformationView = function () {
        if (this.myInformationView) {
            this.myInformationView.Show();
        }
        else {
            this.myInformationView = this.addFguiComponent(MyInformationView_1.default);
        }
    };
    /**设置未读消息 */
    LobbyView.prototype.setFlowingRead = function (isRead) {
        if (this.meView) {
            this.meView.setFlowingRead(isRead);
        }
    };
    LobbyView.prototype.showWalletRecordView = function () {
        if (this.walletRecordView) {
            this.walletRecordView.Show();
        }
        else {
            this.walletRecordView = this.addFguiComponent(WalletRecordView_1.default);
        }
    };
    LobbyView.prototype.showRedPacketViewLayer = function () {
        if (this.redPacketView) {
            this.redPacketView.Show();
        }
        else {
            this.redPacketView = this.addFguiComponent(redPacket_1.default);
        }
    };
    LobbyView.prototype.showSetPayPasswordView = function () {
        if (this.setPayPassword) {
            this.setPayPassword.Show();
        }
        else {
            this.setPayPassword = this.addFguiComponent(SetPayPassword_1.default);
        }
    };
    /**隐藏金币 */
    LobbyView.prototype.hideGold = function () {
        if (this.ui_btn_eyes.selected) {
            this.ui_Hallgold.text = '*****';
        }
        else {
            this.ui_Hallgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + "";
            ;
        }
    };
    /**选择游戏 */
    LobbyView.prototype.selectGame = function () {
        AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
        // cc.log("--------当前选择的游戏-----", this.selectGameController.selectedIndex);
        this.handleRoomData();
    };
    LobbyView.prototype.selectGameByIndex = function () {
        var tableList = [];
        var selectIndex = this.selectGameController.selectedIndex;
        if (selectIndex == 0) {
            tableList = this.lobbyController.Model.tableList;
        }
        else if (selectIndex == 1) {
            var list = this.lobbyController.Model.tableList;
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].t != 10 && list[i].t != 20) {
                    tableList.push(list[i]);
                }
            }
        }
        else if (selectIndex == 2) { //AOF
            var list = this.lobbyController.Model.tableList;
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].t == 20) {
                    tableList.push(list[i]);
                }
            }
        }
        else if (selectIndex == 3) { //短牌
            var list = this.lobbyController.Model.tableList;
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].t == 10) {
                    tableList.push(list[i]);
                }
            }
        }
        return tableList;
    };
    /**选择的场次 */
    LobbyView.prototype.selectLimit = function () {
        AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
        // cc.log("--------当前选择的场次-----", event.selectedIndex);
        //1 以下微  1 2 5小   10 25 50 中  100 200 500大
        this.handleRoomData();
    };
    // 刷新VIP界面
    LobbyView.prototype.refreshMeView = function () {
        this.barController.setSelectedIndex(4);
        this.barStateChange(false);
    };
    // 跳转大厅
    LobbyView.prototype.jumpHomePage = function () {
        this.barController.setSelectedIndex(3);
        this.barStateChange(false);
    };
    /**bar 的狀態改變 */
    LobbyView.prototype.barStateChange = function (isPlaySound) {
        var _this = this;
        if (isPlaySound === void 0) { isPlaySound = true; }
        if (isPlaySound) {
            AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
        }
        this.meView && this.meView.Hide();
        this.activityView && this.activityView.Hide();
        this.entertainmentView && this.entertainmentView.Hide();
        this.matchView && this.matchView.Hide();
        this.ui_join_1.visible = false;
        this.unschedule(this.gettablelistCB); // 停止获取游戏德州列表
        LobbyViewCtr_1.default.instance.Model.isHomePage = false;
        this.ui_roomList.visible = false;
        if (this.barController.selectedIndex == 4) {
            this.meView.Show(); //我的
        }
        else if (this.barController.selectedIndex == 1) {
            this.roomGroup.visible = false;
            this.activityView.Show(); //活動
        }
        else if (this.barController.selectedIndex == 5) {
            this.entertainmentView.Show(); //娛樂城
            // this.isShowCommunity();
        }
        else if (this.barController.selectedIndex == 2) {
            this.showMatchView(); //賽事
        }
        else if (this.barController.selectedIndex == 3) { //首頁
            this.roomGroup.visible = true;
            this.meView.Hide();
            this.activityView.Hide();
            this.entertainmentView.Hide();
            this.matchView && this.matchView.Hide();
            this.isShowCommunity();
            this.ui_roomList.visible = !(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0);
            // 直接拉一次列表
            LobbyViewCtr_1.default.instance.Model.isHomePage = true;
            this.lobbyController.cs_gettablelist_tex();
            this.gettablelistCB = function () {
                //如果不在首页，就不刷新
                if (LobbyViewCtr_1.default.instance.Model.isHomePage) {
                    _this.lobbyController.cs_gettablelist_tex();
                }
            };
            this.schedule(this.gettablelistCB, 10);
        }
    };
    // 是否显示社区内容
    LobbyView.prototype.isShowCommunity = function () {
        // 显示加入社区 根据是否有社区号判断显示
        this.ui_roomList.visible = !(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0);
        this.ui_join_1.visible = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0;
    };
    LobbyView.prototype.joinSuccess = function () {
        this.ui_join_1.visible = false;
        this.barStateChange();
    };
    /**点击进入游戏 */
    LobbyView.prototype.onClickItem = function (item) {
        var _this = this;
        if (!this._isCanTouch)
            return;
        AudioManager_1.AudioManager.Singleton.play('LobbyView', "button");
        this._isCanTouch = false;
        this.entergid = item.gid;
        this.entertid = item.tid;
        this.enterlvid = item.lvid;
        this.checkUpdateGame();
        this.scheduleOnce(function () {
            _this._isCanTouch = true;
        }, 1);
    };
    LobbyView.prototype.checkUpdateGame = function () {
        if (cc.sys.isNative && BaseFrameNative_1.BaseFrameNative.isNeedUpdate) {
            var gameName = "";
            if (this.entergid == 51) {
                gameName = "texas";
                // 德州放在大厅里 不单独更新
                this.enterGame();
                return;
            }
            var commonView = CommonCtr_1.CommonCtr.instance.view;
            GameUpdateMgr_1.default.instance.checkUpdate(gameName, this.enterGame.bind(this), commonView, null, this.updateProgress.bind(this), this.updateFail.bind(this));
            cc.tween(this.ui_loading.node)
                .by(1, { angle: -360 })
                .repeatForever()
                .start();
        }
        else {
            this.enterGame();
        }
    };
    // 更新进度
    LobbyView.prototype.updateProgress = function (size, totleSize) {
        var _this = this;
        this.ui_updateLayer.visible = true;
        var progress = size / totleSize;
        if (isNaN(progress)) {
            progress = 0;
        }
        this.ui_progressText.text = Math.floor(progress * 100) + "%";
        if (progress >= 1) {
            this.ui_loading.node.stopAllActions();
            setTimeout(function () {
                _this.ui_updateLayer.visible = false;
                _this.enterGame();
            }, 200);
        }
    };
    // 更新失败
    LobbyView.prototype.updateFail = function () {
        this._isCanTouch = true;
        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("更新失败，请重试");
        this.ui_updateLayer.visible = false;
        this.ui_loading.node.stopAllActions();
    };
    // 进入游戏
    LobbyView.prototype.enterGame = function () {
        cc.log(this.entergid + " enter tnum:" + this.entertid);
        this._isCanTouch = true;
        AppConst_1.AppConst.roomId = "" + this.entertid;
        if (this.entergid == 51 && this.entertid != 0) {
            AppConst_1.AppConst.currentGameId = 51;
            AppConst_1.AppConst.currentlevelid = this.enterlvid;
            this.lobbyController.cs_entertablenum_tex(this.entertid + '', this.entergid);
        }
    };
    LobbyView.prototype.intoTexas = function () {
        AppConst_1.AppConst.mPlayerModel.state = 0;
        SceneManager_1.SceneManager.Singleton.loadScene("texas", "texas");
    };
    /**处理房间数据 */
    LobbyView.prototype.handleRoomData = function () {
        var roomList = this.selectGameByIndex();
        this.room = [];
        var live = this.selectLimitController.selectedIndex;
        var lastLive = this.selectLimitController.previsousIndex;
        // if (live == 0) {
        //     this.ui_btn_limitEmty.selected = false;
        // }
        for (var i = 0, len = roomList.length; i < len; i++) {
            var data = { name: '', tableId: '', time: 0, playNum: 0, limit: 0, maxPlayNum: 0, brate: 0, preG: 0, gid: 0, tid: 0, lvid: 0, t: 0, IsSettle: false, cgold: 0, ispas: 0 };
            data.name = ""; //roomList[i].tname; //游戏名字
            data.tableId = roomList[i].tid + ''; //tableid
            data.time = roomList[i].ltime; //时间
            data.playNum = roomList[i].pcount; //人数
            data.limit = roomList[i].lg; //最低带入
            data.maxPlayNum = roomList[i].manNum; //最多几个人
            data.brate = UIUtil_1.UIUtil.formatNumber100(roomList[i].brate); //底注
            data.preG = UIUtil_1.UIUtil.formatNumber100(roomList[i].preG); //前注
            data.gid = roomList[i].gid;
            data.tid = roomList[i].tid;
            data.lvid = roomList[i].lvid;
            data.t = roomList[i].t;
            data.IsSettle = roomList[i].IsSettle;
            data.cgold = roomList[i].cgold;
            data.ispas = roomList[i].ispas;
            if (this.ui_btn_limitEmty.selected) {
                if (roomList[i].pcount < roomList[i].manNum) {
                    if (live == 1 && data.brate < 1) { //微
                        this.room.push(data);
                    }
                    else if (live == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                        this.room.push(data);
                    }
                    else if (live == 3 && (data.brate == 10 || data.brate == 25 || data.brate == 50)) { //中
                        this.room.push(data);
                    }
                    else if (live == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                        this.room.push(data);
                        // } else if (live == 5 && (roomList[i].pcount < roomList[i].manNum)) {//空位
                        //     console.log("lastLive == ", lastLive);
                        //     if (lastLive == 1 && data.brate < 1) { //微
                        //         this.room.push(data);
                        //     } else if (lastLive == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                        //         this.room.push(data);
                        //     } else if (lastLive == 3 && (data.brate == 10 || data.brate == 20 || data.brate == 50)) { //中
                        //         this.room.push(data);
                        //     } else if (lastLive == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                        //         this.room.push(data);
                        //     } else if (lastLive == 0) {
                        //         this.room.push(data);
                        //     }
                    }
                    else if (live == 0) { //全部
                        this.room.push(data);
                    }
                }
            }
            else {
                if (live == 1 && data.brate < 1) { //微
                    this.room.push(data);
                }
                else if (live == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                    this.room.push(data);
                }
                else if (live == 3 && (data.brate == 10 || data.brate == 25 || data.brate == 50)) { //中
                    this.room.push(data);
                }
                else if (live == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                    this.room.push(data);
                    // } else if (live == 5 && (roomList[i].pcount < roomList[i].manNum)) {//空位
                    //     console.log("lastLive == ", lastLive);
                    //     if (lastLive == 1 && data.brate < 1) { //微
                    //         this.room.push(data);
                    //     } else if (lastLive == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                    //         this.room.push(data);
                    //     } else if (lastLive == 3 && (data.brate == 10 || data.brate == 20 || data.brate == 50)) { //中
                    //         this.room.push(data);
                    //     } else if (lastLive == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                    //         this.room.push(data);
                    //     } else if (lastLive == 0) {
                    //         this.room.push(data);
                    //     }
                }
                else if (live == 0) { //全部
                    this.room.push(data);
                }
            }
        }
        this.ui_roomList.numItems = this.room.length;
    };
    /**刷新房间数据 */
    LobbyView.prototype.renderListItem = function (index, obj) {
        obj.setData(this.room[index]);
    };
    LobbyView.prototype.onDestroy = function () {
        BaseFrameNative_1.BaseFrameNative.isInHall = false;
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);
        this.unscheduleAllCallbacks();
        this.slideShow && this.slideShow.clean();
        this.matchView && this.matchView.clean();
        this.matchDerailsView && this.matchDerailsView.clean();
        this.welfareView && this.welfareView.slideShow.clean();
        AudioManager_1.AudioManager.Singleton.stopBGM();
        fgui.UIPackage.removePackage("res/Lobby");
        this.node.destroyAllChildren();
        LobbyViewCtr_1.default.instance.view = null;
        LobbyViewCtr_1.default.instance.model = null;
        LobbyViewCtr_1.default.instance.UnRegistNotify();
        _super.prototype.onDestroy.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LobbyView.prototype, "loadNode", void 0);
    LobbyView = __decorate([
        ccclass
    ], LobbyView);
    return LobbyView;
}(ViewBase_1.default));
exports.default = LobbyView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXExvYmJ5Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyx1RUFBc0U7QUFDdkUsaUVBQWdFO0FBQ2hFLG1FQUE4RDtBQUM5RCx5RUFBd0U7QUFDeEUsdUVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRSwrREFBMEQ7QUFDMUQsd0RBQXVEO0FBQ3ZELHdGQUF1RjtBQUN2RixtRUFBa0U7QUFDbEUsc0RBQXFEO0FBQ3JELGdEQUEyQztBQUMzQyw4REFBeUQ7QUFDekQsd0RBQW1EO0FBQ25ELHNEQUFpRDtBQUNqRCxrREFBNkM7QUFDN0MsZ0VBQTJEO0FBQzNELHdEQUFtRDtBQUNuRCxrRUFBNkQ7QUFDN0QsNERBQXVEO0FBQ3ZELDJEQUFzRDtBQUN0RCxvREFBK0M7QUFDL0Msa0RBQTZDO0FBQzdDLG9EQUErQztBQUMvQyxtRUFBOEQ7QUFDOUQsdUVBQWtFO0FBQ2xFLG1GQUE4RTtBQUM5RSxvRUFBK0Q7QUFDL0Qsc0VBQWlFO0FBQ2pFLG9FQUErRDtBQUMvRCw0REFBMkQ7QUFDM0QsNERBQXVEO0FBRXZELCtDQUEwQztBQUMxQywyREFBc0Q7QUFDdEQsNkRBQXdEO0FBQ3hELCtDQUEwQztBQUMxQywrREFBMEQ7QUFDMUQsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSxpRUFBNEQ7QUFDNUQsK0NBQTBDO0FBQzFDLHNDQUFpQztBQUNqQywwRUFBcUU7QUFDckUsdUVBQWtFO0FBQ2xFLGtEQUE2QztBQUM3Qyw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCwwREFBcUQ7QUFDckQsMERBQXFEO0FBQ3JELCtDQUEwQztBQUMxQywyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQzFDLHVEQUFrRDtBQUNsRCx5REFBb0Q7QUFDcEQsaURBQTRDO0FBQzVDLDBFQUFxRTtBQUNyRSx3REFBbUQ7QUFDbkQsK0RBQTBEO0FB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Q0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0Isc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25DLHNCQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLGlCQUFNLFNBQVMsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUF6aENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFmUixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeWlDN0I7SUFBRCxnQkFBQztDQXppQ0QsQUF5aUNDLENBemlDc0Msa0JBQVEsR0F5aUM5QztrQkF6aUNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcbmltcG9ydCBDb21tb25WaWV3IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vblZpZXdcIjtcbmltcG9ydCB7IFB1YmxpY01ldGhvZHMgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9QdWJsaWNNZXRob2RzXCI7XG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCBTdGF0dXNiYXJWaWV3IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1N0YXR1c2JhclZpZXdcIjtcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuLi9Mb2dpbi9Mb2dpblZpZXdDdHJcIjtcbmltcG9ydCBOYXRpdmVNZXRob2QgZnJvbSBcIi4uL05hdGl2ZU1ldGhvZFwiO1xuaW1wb3J0IEFjdGl2aXR5RGV0YWlscyBmcm9tIFwiLi9hY3Rpdml0eS9BY3Rpdml0eURldGFpbHNcIjtcbmltcG9ydCBBY3Rpdml0eVZpZXcgZnJvbSBcIi4vYWN0aXZpdHkvQWN0aXZpdHlWaWV3XCI7XG5pbXBvcnQgQ2FyZEluZm9JdGVtIGZyb20gXCIuL2NhcmVlci9DYXJkSW5mb0l0ZW1cIjtcbmltcG9ydCBDYXJlZXJWaWV3IGZyb20gXCIuL2NhcmVlci9DYXJlZXJWaWV3XCI7XG5pbXBvcnQgTXlDYXJkRGVyYWlsc1ZpZXcgZnJvbSBcIi4vY2FyZWVyL015Q2FyZERlcmFpbHNWaWV3XCI7XG5pbXBvcnQgTXlDYXJkSGlzdG9yeSBmcm9tIFwiLi9jYXJlZXIvTXlDYXJkSGlzdG9yeVwiO1xuaW1wb3J0IE15Q2FyZFNwZWN0cnVtVmlldyBmcm9tIFwiLi9jYXJlZXIvTXlDYXJkU3BlY3RydW1WaWV3XCI7XG5pbXBvcnQgTXlTc0RlcmFpbHNWaWV3IGZyb20gXCIuL2NhcmVlci9NeVNzRGVyYWlsc1ZpZXdcIjtcbmltcG9ydCBDb21tdW5pdHlWaWV3IGZyb20gXCIuL0NvbW11bml0eS9Db21tdW5pdHlWaWV3XCI7XG5pbXBvcnQgQnJvYWRjYXN0IGZyb20gXCIuL0NvbXBvbmVudHMvQnJvYWRjYXN0XCI7XG5pbXBvcnQgUm9vbUl0ZW0gZnJvbSBcIi4vQ29tcG9uZW50cy9Sb29tSXRlbVwiO1xuaW1wb3J0IFNsaWRlU2hvdyBmcm9tIFwiLi9Db21wb25lbnRzL1NsaWRlU2hvd1wiO1xuaW1wb3J0IGNyZWF0ZVRhYmxlVGV4YXMgZnJvbSBcIi4vY3JlYXRlVGFibGUvY3JlYXRlVGFibGVUZXhhc1wiO1xuaW1wb3J0IEVudGVydGFpbm1lbnRWaWV3IGZyb20gXCIuL2VudGVydGFpbm1lbnQvRW50ZXJ0YWlubWVudFZpZXdcIjtcbmltcG9ydCBHYW1lSXRlbUluRW50ZXJ0YWlubWVudCBmcm9tIFwiLi9lbnRlcnRhaW5tZW50L0dhbWVJdGVtSW5FbnRlcnRhaW5tZW50XCI7XG5pbXBvcnQgRmxvd2luZ1dhdGVyVmlldyBmcm9tIFwiLi9mbG93aW5nd2F0ZXIvRmxvd2luZ1dhdGVyVmlld1wiO1xuaW1wb3J0IE15SW5mb3JtYXRpb25WaWV3IGZyb20gXCIuL2Zsb3dpbmd3YXRlci9NeUluZm9ybWF0aW9uVmlld1wiO1xuaW1wb3J0IFdhbGxldFJlY29yZFZpZXcgZnJvbSBcIi4vZmxvd2luZ3dhdGVyL1dhbGxldFJlY29yZFZpZXdcIjtcbmltcG9ydCB7IE15S25hcHNhY2tJdGVtIH0gZnJvbSBcIi4va25hcHNhY2svTXlLbmFwc2Fja0l0ZW1cIjtcbmltcG9ydCBNeUtuYXBzYWNrVmlldyBmcm9tIFwiLi9rbmFwc2Fjay9NeUtuYXBzYWNrVmlld1wiO1xuaW1wb3J0IHsgVGFibGVSb29tSW5mb1RleCB9IGZyb20gXCIuL0xvYmJ5TmV0RGF0YVwiO1xuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi9Mb2JieVZpZXdDdHJcIjtcbmltcG9ydCBNYXRjaEJsaW5kc0l0ZW0gZnJvbSBcIi4vbWF0Y2gvTWF0Y2hCbGluZHNJdGVtXCI7XG5pbXBvcnQgTWF0Y2hEZXJhaWxzVmlldyBmcm9tIFwiLi9tYXRjaC9NYXRjaERlcmFpbHNWaWV3XCI7XG5pbXBvcnQgTWF0Y2hJdGVtIGZyb20gXCIuL21hdGNoL01hdGNoSXRlbVwiO1xuaW1wb3J0IE1hdGNoUGxheUluZm9JdGVtIGZyb20gXCIuL21hdGNoL01hdGNoUGxheUluZm9JdGVtXCI7XG5pbXBvcnQgTWF0Y2hSZXdhcmRUeXBlT25lIGZyb20gXCIuL21hdGNoL01hdGNoUmV3YXJkVHlwZU9uZVwiO1xuaW1wb3J0IE1hdGNoUmV3YXJkVHlwZVRocmVlIGZyb20gXCIuL21hdGNoL01hdGNoUmV3YXJkVHlwZVRocmVlXCI7XG5pbXBvcnQgTWF0Y2hSZXdhcmRUeXBlVHdvIGZyb20gXCIuL21hdGNoL01hdGNoUmV3YXJkVHlwZVR3b1wiO1xuaW1wb3J0IE1hdGNoVmlldyBmcm9tIFwiLi9tYXRjaC9NYXRjaFZpZXdcIjtcbmltcG9ydCBNZVZpZXcgZnJvbSBcIi4vTWUvTWVWaWV3XCI7XG5pbXBvcnQgTW9kaWZ5TG9naW5Qd2RWaWV3IGZyb20gXCIuL21vZGlmeUxvZ2luUHdkL01vZGlmeUxvZ2luUHdkVmlld1wiO1xuaW1wb3J0IE1vZGlmeVBsYXlQd2RWaWV3IGZyb20gXCIuL21vZGlmeVBsYXlQd2QvTW9kaWZ5UGxheVB3ZFZpZXdcIjtcbmltcG9ydCBNeWluZm9WaWV3IGZyb20gXCIuL215aW5mby9NeWluZm9WaWV3XCI7XG5pbXBvcnQgUG9wdXBWaWV3IGZyb20gXCIuL3BvcC9Qb3B1cFZpZXdcIjtcbmltcG9ydCBBYm91dFVzVmlldyBmcm9tIFwiLi9zZXR0aW5ncGFuZWwvQWJvdXRVc1ZpZXdcIjtcbmltcG9ydCBMYW5ndWFnZVZpZXcgZnJvbSBcIi4vc2V0dGluZ3BhbmVsL0xhbmd1YWdlVmlld1wiO1xuaW1wb3J0IFByaXZhY3lWaWV3IGZyb20gXCIuL3NldHRpbmdwYW5lbC9Qcml2YWN5Vmlld1wiO1xuaW1wb3J0IFNldHRpbmdWaWV3IGZyb20gXCIuL3NldHRpbmdwYW5lbC9TZXR0aW5nVmlld1wiO1xuaW1wb3J0IFNoYXJlVmlldyBmcm9tIFwiLi9zaGFyZS9TaGFyZVZpZXdcIjtcbmltcG9ydCBCYW5rY2FyZERlcmFpbHMgZnJvbSBcIi4vdG9wdXAvQmFua2NhcmREZXJhaWxzXCI7XG5pbXBvcnQgVG9wdXBWaWV3IGZyb20gXCIuL3RvcHVwL1RvcHVwVmlld1wiO1xuaW1wb3J0IFZpcHRvcERlcmFpbHMgZnJvbSBcIi4vdG9wdXAvVmlwdG9wRGVyYWlsc1wiO1xuaW1wb3J0IFZpcnR1YWxEZXJhaWxzIGZyb20gXCIuL3RvcHVwL1ZpcnR1YWxEZXJhaWxzXCI7XG5pbXBvcnQgWmZiRGVyYWlscyBmcm9tIFwiLi90b3B1cC9aZmJEZXJhaWxzXCI7XG5pbXBvcnQgTXl2ZXJpZmljYXRpb25Qd2RWaWV3IGZyb20gXCIuL3RyYW5zZmVyL015dmVyaWZpY2F0aW9uUHdkVmlld1wiO1xuaW1wb3J0IFRyYW5zZmVyVmlldyBmcm9tIFwiLi90cmFuc2Zlci9UcmFuc2ZlclZpZXdcIjtcbmltcG9ydCBNeVZpcFByaXZpbGVnZVZpZXcgZnJvbSBcIi4vdmlwL015VmlwUHJpdmlsZWdlVmlld1wiO1xuaW1wb3J0IFZpcENvbmZpcm1BZHJlc3NWaWV3IGZyb20gXCIuL3ZpcC9WaXBDb25maXJtQWRyZXNzVmlld1wiO1xuaW1wb3J0IFZpcENvbmZpcm1PcmRlclZpZXcgZnJvbSBcIi4vdmlwL1ZpcENvbmZpcm1PcmRlclZpZXdcIjtcbmltcG9ydCBWaXBEZXJhaWxzVmlldyBmcm9tIFwiLi92aXAvVmlwRGVyYWlsc1ZpZXdcIjtcbmltcG9ydCBWaXBFeGNoYW5nZUxvZ1ZpZXcgZnJvbSBcIi4vdmlwL1ZpcEV4Y2hhbmdlTG9nVmlld1wiO1xuaW1wb3J0IFZpcEV4aWRBZHJlc3NWaWV3IGZyb20gXCIuL3ZpcC9WaXBFeGlkQWRyZXNzVmlld1wiO1xuaW1wb3J0IFZpcFNob3BwaW5nVmlldyBmcm9tIFwiLi92aXAvVmlwU2hvcHBpbmdWaWV3XCI7XG5pbXBvcnQgV2VsZmFyZVF1ZXN0SXRlbSBmcm9tIFwiLi93ZWxmYXJlL1dlbGZhcmVRdWVzdEl0ZW1cIjtcbmltcG9ydCBXZWxmYXJlVmlldyBmcm9tIFwiLi93ZWxmYXJlL1dlbGZhcmVWaWV3XCI7XG5pbXBvcnQgV2l0aGRyYXdhbFZpZXcgZnJvbSBcIi4vV2l0aGRyYXdhbC9XaXRoZHJhd2FsVmlld1wiO1xuaW1wb3J0IHJlZFBhY2tldCBmcm9tIFwiLi9yZWRQYWNrZXQvcmVkUGFja2V0XCI7XG5pbXBvcnQgeyBSZWNvbm5lY3RNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvUmVjb25uZWN0TWFuYWdlclwiO1xuaW1wb3J0IEdhbWVVcGRhdGVNZ3IgZnJvbSBcIi4uL0dhbWVVcGRhdGVNZ3JcIjtcbmltcG9ydCBTZXRQYXlQYXNzd29yZCBmcm9tIFwiLi9NZS9TZXRQYXlQYXNzd29yZFwiO1xuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2JieVZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJvdGVjdGVkIGdldCBuZWVkUHJvY2VzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiTG9iYnlcIjtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIE5hdGl2ZU1ldGhvZC5jaGFuZ2VPcmllbnRhdGlvbkgoZmFsc2UpO1xuICAgICAgICBsZXQgZmlsZW5hbWU6IHN0cmluZztcbiAgICAgICAgc3dpdGNoIChBcHBDb25zdC5sYW5ndWFnZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IFwiaGFsbFpXRlRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IFwiaGFsbFpXSlRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBcImhhbGxaV0ZUXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS9TbGlkZXNob3dcIiwgU2xpZGVTaG93KTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS9Ccm9hZGNhc3RcIiwgQnJvYWRjYXN0KTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS9yb29tSXRlbVwiLCBSb29tSXRlbSk7XG4gICAgICAgIGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihcInVpOi8vTG9iYnkvbWVcIiwgTWVWaWV3KTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS96ZmJEZXJhaWxzXCIsIFpmYkRlcmFpbHMpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L2JhbmtjYXJkRGVyYWlsc1wiLCBCYW5rY2FyZERlcmFpbHMpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L1ZpcnR1YWxEZXJhaWxzXCIsIFZpcnR1YWxEZXJhaWxzKTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS92aXB0b3BEZXJhaWxzXCIsIFZpcHRvcERlcmFpbHMpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L2VudGVydGFpbm1lbnRcIiwgRW50ZXJ0YWlubWVudFZpZXcpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L2FjdGl2aXR5XCIsIEFjdGl2aXR5Vmlldyk7XG4gICAgICAgIGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihcInVpOi8vTG9iYnkvZ2FtZUl0ZW1cIiwgR2FtZUl0ZW1JbkVudGVydGFpbm1lbnQpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L2NhcmRJbmZvSXRlbVwiLCBDYXJkSW5mb0l0ZW0pO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L21hdGNoSXRlbVwiLCBNYXRjaEl0ZW0pO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L2tuYXBzYWNrSXRlbVwiLCBNeUtuYXBzYWNrSXRlbSk7XG4gICAgICAgIGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihcInVpOi8vTG9iYnkvcXVlc3RJdGVtXCIsIFdlbGZhcmVRdWVzdEl0ZW0pO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL0xvYmJ5L216VGFibGVJdGVtXCIsIE1hdGNoQmxpbmRzSXRlbSk7XG4gICAgICAgIGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihcInVpOi8vTG9iYnkvcGxheUluZm9JdGVtXCIsIE1hdGNoUGxheUluZm9JdGVtKTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS9zc1dpbkl0ZW1cIiwgTWF0Y2hSZXdhcmRUeXBlT25lKTtcbiAgICAgICAgZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9Mb2JieS9zc1dpbkl0ZW0xXCIsIE1hdGNoUmV3YXJkVHlwZVR3byk7XG4gICAgICAgIGZndWkuVUlPYmplY3RGYWN0b3J5LnNldEV4dGVuc2lvbihcInVpOi8vTG9iYnkvc3NXaW5JdGVtMlwiLCBNYXRjaFJld2FyZFR5cGVUaHJlZSk7XG5cbiAgICAgICAgZmd1aS5VSUNvbmZpZy5nbG9iYWxNb2RhbFdhaXRpbmcgPSBcInVpOi8vTG9iYnkvR2xvYmFsTW9kYWxXYWl0aW5nXCI7XG4gICAgICAgIGlmIChBcHBDb25zdC5sYW5ndWFnZVR5cGUgPT0gMSkge1xuICAgICAgICAgICAgZmd1aS5hZGRMb2FkSGFuZGxlcigpO1xuICAgICAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiZ2FtZUhhbGxcIik7XG4gICAgICAgIGJ1bmRsZS5sb2FkKGAvcmVzL2xhbmd1YWdlLyR7ZmlsZW5hbWV9YCwgKGVyciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi6K+t6KiA5paH5Lu25Yqg6L295aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIGZndWkuYWRkTG9hZEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLnNldFN0cmluZ3NTb3VyY2UoZGF0YS50ZXh0KTtcbiAgICAgICAgICAgIGZndWkuYWRkTG9hZEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuY3JlYXRlKCk7XG4gICAgICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKirmuLjmiLLpgInmi6nnmoTmjqfliLblmaggKi9cbiAgICBwcml2YXRlIHNlbGVjdEdhbWVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XG4gICAgLyoq5Zy65qyh6YCJ5oup55qE5o6n5Yi25ZmoICovXG4gICAgcHJpdmF0ZSBzZWxlY3RMaW1pdENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcbiAgICAvKirmiL/pl7TliJfooaggKi9cbiAgICBwcml2YXRlIHVpX3Jvb21MaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcbiAgICAvKirph5HluIEgKi9cbiAgICBwcml2YXRlIHVpX0hhbGxnb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYnRuX3NlcnZpdmVUb3A6IGZndWkuR0J1dHRvbiA9IG51bGw7IC8vIOWuouacjVxuICAgIHByaXZhdGUgdWlfdmlwOiBmZ3VpLkdSaWNoVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9oYWxsQWRkR29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2pvaW5fMTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9jcmVhdGVUZXhhczogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9saW1pdEVtdHk6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlucHV0X2pvaW5Db21tdW5pdHR5OiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgYnRuX2pvaW5Db21tdW5pdHR5OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aXBWaWV3OiBDb21tb25WaWV3O1xuXG4gICAgcHJpdmF0ZSB1aV9ib3R0b21CYXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIGJhckNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcblxuICAgIHB1YmxpYyBtZVZpZXc6IE1lVmlldztcbiAgICBwdWJsaWMgdG9wdXBWaWV3OiBUb3B1cFZpZXc7XG4gICAgcHVibGljIHRyYW5zZmVyVmlldzogVHJhbnNmZXJWaWV3O1xuICAgIHB1YmxpYyB3aXRoZHJhd2FsVmlldzogV2l0aGRyYXdhbFZpZXc7XG4gICAgcHVibGljIHdlbGZhcmVWaWV3OiBXZWxmYXJlVmlldztcbiAgICBwdWJsaWMgc2V0dGluZ1ZpZXc6IFNldHRpbmdWaWV3O1xuICAgIHB1YmxpYyBtb2RpZnlMb2dpblB3ZFZpZXc6IE1vZGlmeUxvZ2luUHdkVmlldztcbiAgICBwdWJsaWMgbW9kaWZ5UGxheVB3ZFZpZXc6IE1vZGlmeVBsYXlQd2RWaWV3O1xuICAgIHB1YmxpYyBjb21tdW5pdHlWaWV3OiBDb21tdW5pdHlWaWV3OyAgLy/npL7ljYBcbiAgICBwdWJsaWMgYWN0aXZpdHlWaWV3OiBBY3Rpdml0eVZpZXc7ICAgICAgLy/mtLvli5VcbiAgICBwdWJsaWMgYWN0aXZpdHlEZXRhaWxzOiBBY3Rpdml0eURldGFpbHM7IC8v5rS75YuV6Kmz5oOFXG4gICAgcHVibGljIGVudGVydGFpbm1lbnRWaWV3OiBFbnRlcnRhaW5tZW50VmlldzsgLy/lqJvmqIJcbiAgICBwdWJsaWMgc2hhcmVWaWV3OiBTaGFyZVZpZXc7IC8v5YiG5LqrXG4gICAgcHVibGljIGNhcmVlclZpZXc6IENhcmVlclZpZXc7IC8v55Sf5ravXG4gICAgcHVibGljIG15Q2FyZFNwZWN0cnVtVmlldzogTXlDYXJkU3BlY3RydW1WaWV3OyAvL+aIkeeahOeJjOaZrlxuICAgIHB1YmxpYyBteUNhcmREZXJhaWxzVmlldzogTXlDYXJkRGVyYWlsc1ZpZXc7IC8v54mM5bGA6K+m5oOFXG4gICAgcHVibGljIG15Q2FyZEhpc3Rvcnk6IE15Q2FyZEhpc3Rvcnk7Ly/niYzlsYDlm57pob5cbiAgICBwdWJsaWMgbXlLbmFwc2Fja1ZpZXc6IE15S25hcHNhY2tWaWV3OyAvL+iDjOWMhVxuICAgIHB1YmxpYyBtYXRjaFZpZXc6IE1hdGNoVmlldzsgLy/os73kuotcbiAgICBwdWJsaWMgbWF0Y2hEZXJhaWxzVmlldzogTWF0Y2hEZXJhaWxzVmlldzsgLy/os73kuovoqbPmg4VcbiAgICBwdWJsaWMgbXlTc0RlcmFpbHNWaWV3OiBNeVNzRGVyYWlsc1ZpZXc7IC8v6LO95LqL6Kmz5oOFXG4gICAgcHVibGljIHZlcmlmaWNhdGlvblB3ZFZpZXc6IE15dmVyaWZpY2F0aW9uUHdkVmlldzsgLy/mlK/ku5jlr4bnoIFcbiAgICBwdWJsaWMgbXlpbmZvVmlldzogTXlpbmZvVmlldzsgLy/miJHnmoTlgIvkurrkv6Hmga9cbiAgICBwdWJsaWMgZmxvd2luZ1dhdGVyVmlldzogRmxvd2luZ1dhdGVyVmlldzsgLy/miJHnmoTlgIvkurrkv6Hmga9cbiAgICBwdWJsaWMgYWJvdXRVc1ZpZXc6IEFib3V0VXNWaWV3OyAvL+mXnOaWvOaIkeWAkVxuICAgIHB1YmxpYyBwcml2YWN5VmlldzogUHJpdmFjeVZpZXc7IC8v6Zqx56eB5pS/562WXG4gICAgcHVibGljIGxhbmd1YWdlVmlldzogTGFuZ3VhZ2VWaWV3OyAvL+iqnuiogFxuICAgIHB1YmxpYyBteVZpcFByaXZpbGVnZVZpZXc6IE15VmlwUHJpdmlsZWdlVmlldzsgLy9WSVDnibnmrIpcbiAgICBwdWJsaWMgdmlwU2hvcHBpbmdWaWV3OiBWaXBTaG9wcGluZ1ZpZXc7IC8vVklQ5ZWG5Z+OXG4gICAgcHVibGljIHZpcERlcmFpbHNWaWV3OiBWaXBEZXJhaWxzVmlldzsgLy9WSVDor6bmg4VcbiAgICBwdWJsaWMgdmlwRXhjaGFuZ2VMb2dWaWV3OiBWaXBFeGNoYW5nZUxvZ1ZpZXc7IC8vVklQ5YWR5o2i6K6w5b2VXG4gICAgcHVibGljIHZpcEV4aWRBZHJlc3NWaWV3OiBWaXBFeGlkQWRyZXNzVmlldzsgLy9WSVDlhZHmjaLnvJbovpHmlLbotKflnLDlnYBcbiAgICBwdWJsaWMgdmlwQ29uZmlybU9yZGVyVmlldzogVmlwQ29uZmlybU9yZGVyVmlldzsgLy9WSVDlhZHmjaLnoa7orqTorqLljZVcbiAgICBwdWJsaWMgdmlwQ29uZmlybUFkcmVzc1ZpZXc6IFZpcENvbmZpcm1BZHJlc3NWaWV3OyAvL1ZJUOehruiupOWcsOWdgFxuICAgIHB1YmxpYyBjcmVhdGVUYWJsZVRleGFzOiBjcmVhdGVUYWJsZVRleGFzO1xuICAgIHB1YmxpYyBwb3B1cFZpZXc6IFBvcHVwVmlldzsgLy/lhazlkYpcbiAgICBwdWJsaWMgbXlJbmZvcm1hdGlvblZpZXc6IE15SW5mb3JtYXRpb25WaWV3OyAvL+aIkeeahOa2iOaBr1xuICAgIHB1YmxpYyB3YWxsZXRSZWNvcmRWaWV3OiBXYWxsZXRSZWNvcmRWaWV3OyAvL+mMouWMheiomOmMhFxuICAgIHB1YmxpYyByZWRQYWNrZXRWaWV3OiByZWRQYWNrZXQ7XG4gICAgcHVibGljIHNldFBheVBhc3N3b3JkOiBTZXRQYXlQYXNzd29yZDtcblxuICAgIHByaXZhdGUgcm9vbUdyb3VwOiBmZ3VpLkdHcm91cDtcbiAgICBwdWJsaWMgbG9iYnlDb250cm9sbGVyOiBMb2JieVZpZXdDdHI7XG4gICAgcHVibGljIGJyb2FkY2FzdDogQnJvYWRjYXN0O1xuXG4gICAgcHJpdmF0ZSBnZXR0YWJsZWxpc3RDQjogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgaXNTdGFydFRpbWVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBpc0hhbGxKb2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNsaWRlU2hvdzogU2xpZGVTaG93O1xuICAgIHByaXZhdGUgdWlfYnRuX2JyZWFrdzogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlfdXBkYXRlTGF5ZXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9sb2FkaW5nOiBmZ3VpLkdJbWFnZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9wcm9ncmVzc1RleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fZXllczogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc0xpbWl0RW10eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gY3JlYXRlQ2hpbGRDb21wb25lbnRzIHRpbWUgLS0tXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblxuICAgICAgICB0aGlzLnVpX3VwZGF0ZUxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXBWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KENvbW1vblZpZXcpO1xuICAgICAgICB0aGlzLnRpcFZpZXcubm9kZS56SW5kZXggPSAyMDA7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChTdGF0dXNiYXJWaWV3LCBmYWxzZSk7XG4gICAgICAgIHN0YXRlLmZndWlZID0gMTA7XG4gICAgICAgIHN0YXRlLm5vZGUuekluZGV4ID0gMzAwO1xuXG4gICAgICAgIC8vIOmihOWKoOi9veS8muWvvOiHtOWKoOi9veWkquaFoiDmlL7lnKjliqDovb3ml7bkuIDotbfliqBcbiAgICAgICAgLy8gdGhpcy5hYm91dFVzVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChBYm91dFVzVmlldyk7XG4gICAgICAgIC8vIHRoaXMucHJpdmFjeVZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoUHJpdmFjeVZpZXcpO1xuICAgICAgICAvLyB0aGlzLndlbGZhcmVWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFdlbGZhcmVWaWV3KTtcbiAgICB9XG5cbiAgICBhbGxDaGlsZENyZWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmFsbENoaWxkQ3JlYXRlZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBhbGxDaGlsZENyZWF0ZWQgdGltZSAtLS1cIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgQmFzZUZyYW1lTmF0aXZlLm5vd0dhbWVWaWV3ID0gbnVsbDtcbiAgICAgICAgQmFzZUZyYW1lTmF0aXZlLmlzSW5IYWxsID0gdHJ1ZTtcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLlJlZ2lzdE5vdGlmeSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIE9uTG9hZENvbXBsZXRlZCB0aW1lIC0tLVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmZndWlDb21wb25lbnQpO1xuICAgICAgICAvLyB0aGlzLmZndWlDb21wb25lbnQubWFrZUZ1bGxTY3JlZW4oKTtcbiAgICAgICAgUHVibGljTWV0aG9kcy5zY3JlZW5GaXQodGhpcy5mZ3VpQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5sb2JieUNvbnRyb2xsZXIgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMubG9iYnlDb250cm9sbGVyLnZpZXcgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0R2FtZUNvbnRyb2xsZXIgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcImdhbWVcIik7XG4gICAgICAgIHRoaXMuc2VsZWN0TGltaXRDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJsaW1pdFwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3RHYW1lQ29udHJvbGxlci5vbkNoYW5nZWQodGhpcy5zZWxlY3RHYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RMaW1pdENvbnRyb2xsZXIub25DaGFuZ2VkKHRoaXMuc2VsZWN0TGltaXQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudWlfcm9vbUxpc3Quc2V0VmlydHVhbCgpO1xuICAgICAgICB0aGlzLnVpX3Jvb21MaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEl0ZW0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51aV9yb29tTGlzdC5vbihmZ3VpLkV2ZW50LkNMSUNLX0lURU0sIHRoaXMub25DbGlja0l0ZW0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmFyQ29udHJvbGxlciA9IHRoaXMudWlfYm90dG9tQmFyLmdldENvbnRyb2xsZXIoXCJiYXJcIik7XG4gICAgICAgIHRoaXMuYmFyQ29udHJvbGxlci5vbkNoYW5nZWQodGhpcy5iYXJTdGF0ZUNoYW5nZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYmFyQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDMpO1xuICAgICAgICBsZXQgYmFyTG9hZGVyID0gdGhpcy51aV9ib3R0b21CYXIuZ2V0Q2hpbGQoXCJuMVwiKS5hc0J1dHRvbi5nZXRDaGlsZChcIm4yXCIpLmFzTG9hZGVyO1xuICAgICAgICBOYXRpdmVNZXRob2Quc2V0VXJsQnlMYW5ndWFnZShiYXJMb2FkZXIpO1xuXG4gICAgICAgIHRoaXMubWVWaWV3ID0gdGhpcy5nZXRDaGlsZChcIm1lXCIpIGFzIHVua25vd24gYXMgTWVWaWV3O1xuICAgICAgICB0aGlzLnNsaWRlU2hvdyA9IHRoaXMuZ2V0Q2hpbGQoXCJTbGlkZXNob3dcIikgYXMgU2xpZGVTaG93O1xuICAgICAgICB0aGlzLm1lVmlldy5jaGFuZ2VkQnRuQ29tKHRoaXMubWVWaWV3LmhlaWdodCk7XG5cblxuICAgICAgICB0aGlzLmJyb2FkY2FzdCA9IHRoaXMuZ2V0Q2hpbGQoXCJCcm9hZGNhc3RcIikgYXMgQnJvYWRjYXN0O1xuICAgICAgICB0aGlzLmJyb2FkY2FzdC5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlWaWV3ID0gdGhpcy5nZXRDaGlsZChcImFjdGl2aXR5XCIpIGFzIHVua25vd24gYXMgQWN0aXZpdHlWaWV3O1xuICAgICAgICB0aGlzLmVudGVydGFpbm1lbnRWaWV3ID0gdGhpcy5nZXRDaGlsZChcImVudGVydGFpbm1lbnRcIikgYXMgdW5rbm93biBhcyBFbnRlcnRhaW5tZW50VmlldztcbiAgICAgICAgdGhpcy51aV9idG5faGFsbEFkZEdvbGQub25DbGljayh0aGlzLnNob3dUb3B1cCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfYnRuX2V5ZXMub25DbGljayh0aGlzLmhpZGVHb2xkLCB0aGlzKTtcbiAgICAgICAgdGhpcy51aV9idG5fc2Vydml2ZVRvcC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9iYnlWaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgICAgICBVSVV0aWwua2VmdUZ1bmN0aW9uKHRoaXMub3BlbldlYnNpdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLnJvb21Hcm91cCA9IHRoaXMuZ2V0Q2hpbGQoXCJuMjJcIikuYXNHcm91cDtcblxuICAgICAgICB0aGlzLnVpX2J0bl9saW1pdEVtdHkub25DbGljayh0aGlzLmxpbWl0RW10eUNhbGxiYWNrLCB0aGlzKTtcblxuICAgICAgICAvLyDms6jlhozliqDlhaXnpL7ljLrmjInpkq7kuovku7ZcbiAgICAgICAgdGhpcy5pbnB1dF9qb2luQ29tbXVuaXR0eSA9IHRoaXMudWlfam9pbl8xLmdldENoaWxkKFwiaW5wdXRDb21tTnVtXCIpLmFzVGV4dElucHV0O1xuICAgICAgICB0aGlzLmJ0bl9qb2luQ29tbXVuaXR0eSA9IHRoaXMudWlfam9pbl8xLmdldENoaWxkKFwiYnRuX2pvaW5Db21tdW5pdHR5XCIpLmFzQnV0dG9uO1xuICAgICAgICB0aGlzLmJ0bl9qb2luQ29tbXVuaXR0eS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2FuVG91Y2gpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLoq4vkuI3opoHpoLvnuYHpu57mk4rvvIFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0NhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuaW5wdXRfam9pbkNvbW11bml0dHkudGV4dDtcbiAgICAgICAgICAgIGlmIChpZCA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6KuL6Ly45YWl5q2j56K655qE56S+5Y2A6JmfXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSGFsbEpvaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19hcHBseV9jbHViKE51bWJlcihpZCksIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMilcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6I635Y+WVklQ6YWN572uXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19nZXR2aXBjb25maWcoKTtcbiAgICAgICAgLy8g6I635Y+W6YKu5Lu25raI5oGvXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19nZXRlbWFpbGxpc3QoKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9jcmVhdGVUZXhhcy5vbkNsaWNrKHRoaXMuc2hvd0NyZWF0ZVRhYmxlVGV4YXMuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRoaXMudWlfYnRuX2NyZWF0ZVRleGFzLnZpc2libGUgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uc3RhdHVzID09IDA7XG4gICAgICAgIGxldCBsdiA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5sdjtcbiAgICAgICAgbGV0IGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAobHYgPT0gMjAgfHwgQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLnN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICBpc1Nob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfYnRuX2NyZWF0ZVRleGFzLnZpc2libGUgPSBpc1Nob3c7XG5cbiAgICAgICAgbGV0IGlkID0gQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZDtcbiAgICAgICAgbGV0IHVybCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQud2ljb247IC8v5aS05YOPXG4gICAgICAgIHRoaXMubWVWaWV3LnNldEhlYWQodXJsKTtcbiAgICAgICAgaWYgKEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkICE9PSB1bmRlZmluZWQpIHsgLy/ku47muLjmiI/kuK3ov5Tlm57lho3lj5bojrflj5bmnIDmlrDnmoTph5HluIFcbiAgICAgICAgICAgIHRoaXMubG9iYnlDb250cm9sbGVyLmNzX3NlYXJjaGdvbGRvcm5pY2tuYW1lKGlkKTsvL+iOt+WPlumHkeW4gVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkR29sZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWKoOi9veWujOavlSDlj5bmtohsb2FkaW5nXG4gICAgICAgIGxldCBzY3JpcHQgPSB0aGlzLmxvYWROb2RlLmdldENvbXBvbmVudChcIkxvYWRpbmdTY3JpcHRcIik7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIHNjcmlwdC5sb2FkQ29tcGVsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkTm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9icmVha3cubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICB0aGlzLnVpX2J0bl9icmVha3cuc29ydGluZ09yZGVyID0gOTk5NztcbiAgICAgICAgdGhpcy51aV9idG5fYnJlYWt3Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2JieVZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VXZWJWaWV3KCk7XG4gICAgICAgIH0sIHRoaXMpXG5cbiAgICAgICAgdGhpcy5pc1Nob3dDb21tdW5pdHkoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeCA9PSBcIiwgTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHgpO1xuICAgICAgICBpZiAoTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHggIT0gMCkge1xuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2dldGFnZW50aW5mb19vbmx5RGF0YShMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmuIXnqbrkuYvliY3nmoTnvJPlrZhcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzU2V0UGF5UGFzc3dvcmQgPSAoQXBwQ29uc3QubVBsYXllck1vZGVsW1wiVXNlclBhc3N3b3JkXCJdICYmIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcIlVzZXJQYXNzd29yZFwiXSAhPSBcIlwiKTtcblxuICAgICAgICB0aGlzLmxvYmJ5Q29udHJvbGxlci5jc19nZXRub3RpY2UoMSk7XG4gICAgICAgIHRoaXMubG9iYnlDb250cm9sbGVyLmNzX2dldG5vdGljZSg0KTtcbiAgICAgICAgdGhpcy5pbnRpV2ViVmlldygpO1xuICAgICAgICB3aW5kb3cuY2xvc2VXZWJWaWV3ID0gdGhpcy5jbG9zZVdlYlZpZXcuYmluZCh0aGlzKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5QkdNKFwiYmdtdXNpY1wiKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zZXRTb3VuZFN0YXR1cyhBdWRpb01hbmFnZXIuVGV4YXNNdXNpY1N0YXR1cyA/IFwib3BlblwiIDogXCJjbG9zZVwiKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zZXRFZmZlY3RTdGF0dXMoQXVkaW9NYW5hZ2VyLlRleGFzRWZmZWN0U3RhdHVzID8gXCJvcGVuXCIgOiBcImNsb3NlXCIpO1xuICAgICAgICB0aGlzLmJhclN0YXRlQ2hhbmdlKGZhbHNlKTsgLy/mmL7npLrliLDpu5jorqTpobXpnaJcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb24oKTtcblxuICAgICAgICAvLyDph43ov57pgLvovpFcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9TSE9XKTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMuZ2FtZUV2ZW50U2hvdy5iaW5kKHRoaXMpKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFKTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMuZ2FtZUV2ZW50SGlkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZUV2ZW50U2hvdygpIHtcbiAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuSGlkZSgpO1xuICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICBSZWNvbm5lY3RNYW5hZ2VyLmdldEluc3RhbmNlLnJlY29ubmVjdCh0aGlzLmNvbm5lY3RTdWNjZXNzLmJpbmQodGhpcyksIHRoaXMuY29ubmVjdEZhaWwuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0U3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gY29ubmVjdFN1Y2Nlc3MgLS0tXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0RmFpbCgpIHtcbiAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuYmFja0xvZ2luKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdhbWVFdmVudEhpZGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIGdhbWVFdmVudEhpZGUgLS0tXCIpO1xuICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3ZWJWaWV3OiBjYy5XZWJWaWV3O1xuICAgIHB1YmxpYyBpbnRpV2ViVmlldygpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldENoaWxkKFwid2Vidmlld1wiKS5hc0xvYWRlci5ub2RlO1xuICAgICAgICB0aGlzLndlYlZpZXcgPSBub2RlLmFkZENvbXBvbmVudChjYy5XZWJWaWV3KTtcbiAgICAgICAgbGV0IHdlYnZpZXdFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICB3ZWJ2aWV3RXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcbiAgICAgICAgd2Vidmlld0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkxvYmJ5Vmlld1wiO1xuICAgICAgICB3ZWJ2aWV3RXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIndlYlZpZXdFdmVudFwiO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy53ZWJWaWV3LndlYnZpZXdFdmVudHMucHVzaCh3ZWJ2aWV3RXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyB3ZWJWaWV3RXZlbnQoc2VuZGVyLCBldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tRXZlbnREYXRhID09IFwiLCBjdXN0b21FdmVudERhdGEpO1xuICAgICAgICBpZiAoZXZlbnQgPT09IGNjLldlYlZpZXcuRXZlbnRUeXBlLkxPQURFRCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItd2ViVmlldy0tLWxvYWRlZC0tLWZpbmlzaCFcIilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gY2MuV2ViVmlldy5FdmVudFR5cGUuTE9BRElORykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tbG9hZGluZ1wiKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBjYy5XZWJWaWV3LkV2ZW50VHlwZS5FUlJPUikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tc2VuZGVyXCIsIEpTT04uc3RyaW5naWZ5KHNlbmRlcikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tZXZlbnRcIiwgZXZlbnQpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbG9zZVdlYlZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VXZWJWaWV3KCkge1xuICAgICAgICBjYy5sb2coXCI9PT09PT09PWNsb3NlV2ViVmlldz09PT09PT09PT09PVwiKTtcbiAgICAgICAgdGhpcy51aV9idG5fYnJlYWt3LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53ZWJWaWV3LnVybCA9ICcnO1xuICAgICAgICB0aGlzLndlYlZpZXcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoq5omT6ZaL57ay6aCBICovXG4gICAgcHVibGljIG9wZW5XZWJzaXRlKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudWlfYnRuX2JyZWFrdy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53ZWJWaWV3LnVybCA9IHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGltaXRFbXR5Q2FsbGJhY2soKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9iYnlWaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuaXNMaW1pdEVtdHkgPSAhdGhpcy5pc0xpbWl0RW10eTtcbiAgICAgICAgdGhpcy51aV9idG5fbGltaXRFbXR5LnNlbGVjdGVkID0gdGhpcy5pc0xpbWl0RW10eTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb29tRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRMZXYoZXhwOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHZpcENvbmZpZyA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC52aXBDb25maWc7XG4gICAgICAgIGxldCBpTGV2ID0gMDtcbiAgICAgICAgbGV0IGlMZW4gPSB2aXBDb25maWcuVXBFeHBzLmxlbmd0aDtcbiAgICAgICAgbGV0IGlUb3RhbEV4cCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaUxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpVG90YWxFeHAgKz0gdmlwQ29uZmlnLlVwRXhwc1tpXTtcbiAgICAgICAgICAgIGlmIChleHAgPj0gaVRvdGFsRXhwKSB7XG4gICAgICAgICAgICAgICAgaUxldiA9IGk7XG4gICAgICAgICAgICB9IGVsc2UgeyBicmVhayB9O1xuICAgICAgICB9XG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC52aXBMZXZlbCA9IGlMZXY7XG4gICAgICAgIHRoaXMudWlfdmlwLnNldFZhcihcInZpcFwiLCBpTGV2ICsgJycpLmZsdXNoVmFycygpO1xuICAgICAgICBpZiAodGhpcy5tZVZpZXcpIHRoaXMubWVWaWV3LmluaXREYXRhKCk7XG4gICAgICAgIHJldHVybiBpTGV2O1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZWRHb2xkKCkge1xuICAgICAgICBsZXQgZ29sZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkO1xuXG4gICAgICAgIGlmICh0aGlzLnVpX2J0bl9leWVzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVpX0hhbGxnb2xkLnRleHQgPSAnKioqKionO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9IYWxsZ29sZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcihnb2xkKSArIFwiXCI7O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbnRlcnRhaW5tZW50VmlldyAmJiB0aGlzLmVudGVydGFpbm1lbnRWaWV3LmNoYW5nZWRHb2xkKCk7XG4gICAgfVxuXG4gICAgLyoq5pa357ar6YeN6YCjICovXG4gICAgcHVibGljIHJlY29ubmVjdGlvbigpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFwcENvbnN0Lm1QbGF5ZXJNb2RlbCA9PT0gXCIsIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlID09PSBcIiwgQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlID4gMCkgeyAvL+mcgOimgemHjei/nlxuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlID0gMDtcbiAgICAgICAgICAgIGxldCBnYW1lSWQgPSBBcHBDb25zdC5jdXJyZW50R2FtZUlkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlq3nur/ph43ov57kuK0uLi5cIiwgZ2FtZUlkKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA1MTogLy/lvrflt55cbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuaWree6v+mHjei/nuS4rS4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpZCA9IEFwcENvbnN0LnJvb21JZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlcmdpZCA9IGdhbWVJZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRlcnRpZCA9ICt0aWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJsdmlkID0gQXBwQ29uc3QuY3VycmVudGxldmVsaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tVcGRhdGVHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJ0YWlubWVudFZpZXcuY2hlY2tVcGRhdGVHYW1lKGdhbWVJZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdhbWVJZCA9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQ7XG4gICAgICAgICAgICBpZiAoIWdhbWVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lSWQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb3B1cCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lSWQgPT09IDUxKSB7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93Q3JlYXRlVGFibGVUZXhhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlVGFibGVUZXhhcykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUYWJsZVRleGFzLlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFibGVUZXhhcyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChjcmVhdGVUYWJsZVRleGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1RvcHVwKCkge1xuICAgICAgICBpZiAodGhpcy50b3B1cFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMudG9wdXBWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9wdXBWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFRvcHVwVmlldyk7XG4gICAgICAgICAgICB0aGlzLnRvcHVwVmlldy5ub2RlLnpJbmRleCA9IDE5MDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1RyYW5zZmVyVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmZXJWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZmVyVmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZmVyVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChUcmFuc2ZlclZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93V2l0aGRyYXdhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMud2l0aGRyYXdhbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMud2l0aGRyYXdhbFZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aXRoZHJhd2FsVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChXaXRoZHJhd2FsVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dXZWxmYXJlVmlldygpIHtcbiAgICAgICAgLy8gdGhpcy5tZVZpZXcudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyAgdGhpcy5iYXJDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgIGlmICh0aGlzLndlbGZhcmVWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLndlbGZhcmVWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2VsZmFyZVZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoV2VsZmFyZVZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93U2V0dGluZ1ZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ1ZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoU2V0dGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93TW9kaWZ5TG9naW5Qd2RWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5tb2RpZnlMb2dpblB3ZFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubW9kaWZ5TG9naW5Qd2RWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kaWZ5TG9naW5Qd2RWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE1vZGlmeUxvZ2luUHdkVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd01vZGlmeVBsYXlQd2RWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5tb2RpZnlQbGF5UHdkVmlldykge1xuICAgICAgICAgICAgdGhpcy5tb2RpZnlQbGF5UHdkVmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGlmeVBsYXlQd2RWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE1vZGlmeVBsYXlQd2RWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd2NvbW11bml0eVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbW11bml0eVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbXVuaXR5Vmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbW11bml0eVZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQ29tbXVuaXR5Vmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dhY3Rpdml0eURldGFpbHMoZGF0YTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5RGV0YWlscykge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eURldGFpbHMuTXlTdGFydChkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlEZXRhaWxzID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KEFjdGl2aXR5RGV0YWlscyk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5RGV0YWlscy5NeVN0YXJ0KGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93U2hhcmVWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5zaGFyZVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hhcmVWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hhcmVWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFNoYXJlVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dDYXJlZXJWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5jYXJlZXJWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmNhcmVlclZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJlZXJWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KENhcmVlclZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dNeUNhcmRTcGVjdHJ1bVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLm15Q2FyZFNwZWN0cnVtVmlldykge1xuICAgICAgICAgICAgdGhpcy5teUNhcmRTcGVjdHJ1bVZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teUNhcmRTcGVjdHJ1bVZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoTXlDYXJkU3BlY3RydW1WaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd015Q2FyZERlcmFpbHNWaWV3KF90aWQ6IHN0cmluZywgZGF0YTogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5teUNhcmREZXJhaWxzVmlldykge1xuICAgICAgICAgICAgdGhpcy5teUNhcmREZXJhaWxzVmlldy5NeVN0YXJ0KF90aWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teUNhcmREZXJhaWxzVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChNeUNhcmREZXJhaWxzVmlldyk7XG4gICAgICAgICAgICB0aGlzLm15Q2FyZERlcmFpbHNWaWV3Lk15U3RhcnQoX3RpZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMubXlDYXJkSGlzdG9yeSkge1xuICAgICAgICAvLyAgICAgdGhpcy5teUNhcmRIaXN0b3J5Lk15U3RhcnQoX2NpZCwgZGF0YSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLm15Q2FyZEhpc3RvcnkgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoTXlDYXJkSGlzdG9yeSk7XG4gICAgICAgIC8vICAgICB0aGlzLm15Q2FyZEhpc3RvcnkuTXlTdGFydChfY2lkLCBkYXRhKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd015Q2FyZEhpc3RvcnkoX2NpZDogc3RyaW5nLCBkYXRhOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLm15Q2FyZEhpc3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMubXlDYXJkSGlzdG9yeS5NeVN0YXJ0KF9jaWQsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teUNhcmRIaXN0b3J5ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE15Q2FyZEhpc3RvcnkpO1xuICAgICAgICAgICAgdGhpcy5teUNhcmRIaXN0b3J5Lk15U3RhcnQoX2NpZCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3drbmFwc2Fja1ZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLm15S25hcHNhY2tWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLm15S25hcHNhY2tWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXlLbmFwc2Fja1ZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoTXlLbmFwc2Fja1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93TWF0Y2hWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5tYXRjaFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE1hdGNoVmlldywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5tYXRjaFZpZXcuZmd1aUhlaWdodCA9IHRoaXMuZmd1aUhlaWdodCAtIDE4NztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TWF0Y2hEZXJhaWxzVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hEZXJhaWxzVmlldykge1xuICAgICAgICAgICAgdGhpcy5tYXRjaERlcmFpbHNWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hEZXJhaWxzVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChNYXRjaERlcmFpbHNWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd215U3NEZXJhaWxzVmlldyhjaWQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5teVNzRGVyYWlsc1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubXlTc0RlcmFpbHNWaWV3LkNvbXBldGVpZCA9IGNpZDtcbiAgICAgICAgICAgIHRoaXMubXlTc0RlcmFpbHNWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubXlTc0RlcmFpbHNWaWV3LkNvbXBldGVpZCA9IGNpZDtcbiAgICAgICAgICAgIHRoaXMubXlTc0RlcmFpbHNWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE15U3NEZXJhaWxzVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq6aqM6K+B5a+G56CBICovXG4gICAgcHVibGljIHNob3dWZXJpZmljYXRpb25Qd2RWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy52ZXJpZmljYXRpb25Qd2RWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvblB3ZFZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXRpb25Qd2RWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE15dmVyaWZpY2F0aW9uUHdkVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5Liq5Lq65L+h5oGvICovXG4gICAgcHVibGljIHNob3dNeWluZm9WaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5teWluZm9WaWV3KSB7XG4gICAgICAgICAgICB0aGlzLm15aW5mb1ZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teWluZm9WaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KE15aW5mb1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKua1geawtCAqL1xuICAgIHB1YmxpYyBzaG93Rmxvd2luZ1dhdGVyVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuZmxvd2luZ1dhdGVyVmlldykge1xuICAgICAgICAgICAgdGhpcy5mbG93aW5nV2F0ZXJWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxvd2luZ1dhdGVyVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChGbG93aW5nV2F0ZXJWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirpl5zmlrzmiJHlgJEgKi9cbiAgICBwdWJsaWMgc2hvd0Fib3V0VXNWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5hYm91dFVzVmlldykge1xuICAgICAgICAgICAgdGhpcy5hYm91dFVzVmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0VXNWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KEFib3V0VXNWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirpmrHnp4EgKi9cbiAgICBwdWJsaWMgc2hvd1ByaXZhY3lWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5wcml2YWN5Vmlldykge1xuICAgICAgICAgICAgdGhpcy5wcml2YWN5Vmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByaXZhY3lWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFByaXZhY3lWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiror63oqIDorr7nva4gKi9cbiAgICBwdWJsaWMgc2hvd0xhbmd1YWdlVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlVmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChMYW5ndWFnZVZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKnZpcCDnibnmrIogKi9cbiAgICBwdWJsaWMgc2hvd1ZpcFByaXZpbGVnZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLm15VmlwUHJpdmlsZWdlVmlldykge1xuICAgICAgICAgICAgdGhpcy5teVZpcFByaXZpbGVnZVZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teVZpcFByaXZpbGVnZVZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoTXlWaXBQcml2aWxlZ2VWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1ZpcFNob3BwaW5nVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMudmlwU2hvcHBpbmdWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZpcFNob3BwaW5nVmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpcFNob3BwaW5nVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChWaXBTaG9wcGluZ1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKnZpcOivpuaDhSAqL1xuICAgIHB1YmxpYyBzaG93VmlwRGVyYWlsc1ZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcERlcmFpbHNWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZpcERlcmFpbHNWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlwRGVyYWlsc1ZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoVmlwRGVyYWlsc1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93VmlwRXhjaGFuZ2VMb2dWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy52aXBFeGNoYW5nZUxvZ1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMudmlwRXhjaGFuZ2VMb2dWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlwRXhjaGFuZ2VMb2dWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFZpcEV4Y2hhbmdlTG9nVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dWaXBFeGlkQWRyZXNzVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMudmlwRXhpZEFkcmVzc1ZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMudmlwRXhpZEFkcmVzc1ZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXBFeGlkQWRyZXNzVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChWaXBFeGlkQWRyZXNzVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dWaXBDb25maXJtT3JkZXJWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy52aXBDb25maXJtT3JkZXJWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZpcENvbmZpcm1PcmRlclZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXBDb25maXJtT3JkZXJWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFZpcENvbmZpcm1PcmRlclZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93VmlwQ29uZmlybUFkcmVzc1ZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpcENvbmZpcm1BZHJlc3NWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnZpcENvbmZpcm1BZHJlc3NWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlwQ29uZmlybUFkcmVzc1ZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoVmlwQ29uZmlybUFkcmVzc1ZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzaG93UG9wdXBWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3LlNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFBvcHVwVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5oiR55qE5raI5oGvICovXG4gICAgcHVibGljIHNob3dNeUluZm9ybWF0aW9uVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMubXlJbmZvcm1hdGlvblZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubXlJbmZvcm1hdGlvblZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5teUluZm9ybWF0aW9uVmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChNeUluZm9ybWF0aW9uVmlldyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq6K6+572u5pyq6K+75raI5oGvICovXG4gICAgcHVibGljIHNldEZsb3dpbmdSZWFkKGlzUmVhZDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5tZVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMubWVWaWV3LnNldEZsb3dpbmdSZWFkKGlzUmVhZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dXYWxsZXRSZWNvcmRWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy53YWxsZXRSZWNvcmRWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLndhbGxldFJlY29yZFZpZXcuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53YWxsZXRSZWNvcmRWaWV3ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFdhbGxldFJlY29yZFZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dSZWRQYWNrZXRWaWV3TGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZFBhY2tldFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMucmVkUGFja2V0Vmlldy5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZFBhY2tldFZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQocmVkUGFja2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2V0UGF5UGFzc3dvcmRWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5zZXRQYXlQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYXlQYXNzd29yZC5TaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFBheVBhc3N3b3JkID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KFNldFBheVBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKumakOiXj+mHkeW4gSAqL1xuICAgIHB1YmxpYyBoaWRlR29sZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfYnRuX2V5ZXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudWlfSGFsbGdvbGQudGV4dCA9ICcqKioqKic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX0hhbGxnb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArIFwiXCI7O1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICAvKirpgInmi6nmuLjmiI8gKi9cbiAgICBwdWJsaWMgc2VsZWN0R2FtZSgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2JieVZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS3lvZPliY3pgInmi6nnmoTmuLjmiI8tLS0tLVwiLCB0aGlzLnNlbGVjdEdhbWVDb250cm9sbGVyLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvb21EYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEdhbWVCeUluZGV4KCkge1xuICAgICAgICBsZXQgdGFibGVMaXN0OiBUYWJsZVJvb21JbmZvVGV4W10gPSBbXTtcbiAgICAgICAgbGV0IHNlbGVjdEluZGV4ID0gdGhpcy5zZWxlY3RHYW1lQ29udHJvbGxlci5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoc2VsZWN0SW5kZXggPT0gMCkge1xuICAgICAgICAgICAgdGFibGVMaXN0ID0gdGhpcy5sb2JieUNvbnRyb2xsZXIuTW9kZWwudGFibGVMaXN0O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdEluZGV4ID09IDEpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gdGhpcy5sb2JieUNvbnRyb2xsZXIuTW9kZWwudGFibGVMaXN0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS50ICE9IDEwICYmIGxpc3RbaV0udCAhPSAyMCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUxpc3QucHVzaChsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0SW5kZXggPT0gMikgeyAvL0FPRlxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmxvYmJ5Q29udHJvbGxlci5Nb2RlbC50YWJsZUxpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0W2ldLnQgPT0gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdEluZGV4ID09IDMpIHsvL+efreeJjFxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmxvYmJ5Q29udHJvbGxlci5Nb2RlbC50YWJsZUxpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0W2ldLnQgPT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJsZUxpc3Q7XG4gICAgfVxuXG4gICAgLyoq6YCJ5oup55qE5Zy65qyhICovXG4gICAgcHVibGljIHNlbGVjdExpbWl0KCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvYmJ5VmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLeW9k+WJjemAieaLqeeahOWcuuasoS0tLS0tXCIsIGV2ZW50LnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAvLzEg5Lul5LiL5b6uICAxIDIgNeWwjyAgIDEwIDI1IDUwIOS4rSAgMTAwIDIwMCA1MDDlpKdcbiAgICAgICAgdGhpcy5oYW5kbGVSb29tRGF0YSgpO1xuICAgIH1cblxuICAgIC8vIOWIt+aWsFZJUOeVjOmdolxuICAgIHB1YmxpYyByZWZyZXNoTWVWaWV3KCkge1xuICAgICAgICB0aGlzLmJhckNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCg0KTtcbiAgICAgICAgdGhpcy5iYXJTdGF0ZUNoYW5nZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8g6Lez6L2s5aSn5Y6FXG4gICAgcHVibGljIGp1bXBIb21lUGFnZSgpIHtcbiAgICAgICAgdGhpcy5iYXJDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMyk7XG4gICAgICAgIHRoaXMuYmFyU3RhdGVDaGFuZ2UoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKmJhciDnmoTni4DmhYvmlLnoroogKi9cbiAgICBwdWJsaWMgYmFyU3RhdGVDaGFuZ2UoaXNQbGF5U291bmQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChpc1BsYXlTb3VuZCkge1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2JieVZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lVmlldyAmJiB0aGlzLm1lVmlldy5IaWRlKCk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlWaWV3ICYmIHRoaXMuYWN0aXZpdHlWaWV3LkhpZGUoKTtcbiAgICAgICAgdGhpcy5lbnRlcnRhaW5tZW50VmlldyAmJiB0aGlzLmVudGVydGFpbm1lbnRWaWV3LkhpZGUoKTtcbiAgICAgICAgdGhpcy5tYXRjaFZpZXcgJiYgdGhpcy5tYXRjaFZpZXcuSGlkZSgpO1xuICAgICAgICB0aGlzLnVpX2pvaW5fMS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdldHRhYmxlbGlzdENCKTsgLy8g5YGc5q2i6I635Y+W5ri45oiP5b635bee5YiX6KGoXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc0hvbWVQYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfcm9vbUxpc3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5tZVZpZXcuU2hvdygpOy8v5oiR55qEXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5yb29tR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVZpZXcuU2hvdygpOy8v5rS75YuVXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gNSkge1xuICAgICAgICAgICAgdGhpcy5lbnRlcnRhaW5tZW50Vmlldy5TaG93KCk7Ly/lqJvmqILln45cbiAgICAgICAgICAgIC8vIHRoaXMuaXNTaG93Q29tbXVuaXR5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gMikge1xuICAgICAgICAgICAgdGhpcy5zaG93TWF0Y2hWaWV3KCk7IC8v6LO95LqLXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXJDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gMykgey8v6aaW6aCBXG4gICAgICAgICAgICB0aGlzLnJvb21Hcm91cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWVWaWV3LkhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlWaWV3LkhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJ0YWlubWVudFZpZXcuSGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5tYXRjaFZpZXcgJiYgdGhpcy5tYXRjaFZpZXcuSGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dDb21tdW5pdHkoKTtcbiAgICAgICAgICAgIHRoaXMudWlfcm9vbUxpc3QudmlzaWJsZSA9ICEoTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHggPT0gMCk7XG4gICAgICAgICAgICAvLyDnm7TmjqXmi4nkuIDmrKHliJfooahcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc0hvbWVQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9iYnlDb250cm9sbGVyLmNzX2dldHRhYmxlbGlzdF90ZXgoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0dGFibGVsaXN0Q0IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpzkuI3lnKjpppbpobXvvIzlsLHkuI3liLfmlrBcbiAgICAgICAgICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2JieUNvbnRyb2xsZXIuY3NfZ2V0dGFibGVsaXN0X3RleCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZXR0YWJsZWxpc3RDQiwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5piv5ZCm5pi+56S656S+5Yy65YaF5a65XG4gICAgcHVibGljIGlzU2hvd0NvbW11bml0eSgpIHtcbiAgICAgICAgLy8g5pi+56S65Yqg5YWl56S+5Yy6IOagueaNruaYr+WQpuacieekvuWMuuWPt+WIpOaWreaYvuekulxuICAgICAgICB0aGlzLnVpX3Jvb21MaXN0LnZpc2libGUgPSAhKExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4ID09IDApO1xuICAgICAgICB0aGlzLnVpX2pvaW5fMS52aXNpYmxlID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHggPT0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgam9pblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMudWlfam9pbl8xLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iYXJTdGF0ZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgZW50ZXJnaWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBlbnRlcnRpZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGVudGVybHZpZDogbnVtYmVyID0gMDtcblxuICAgIC8qKueCueWHu+i/m+WFpea4uOaIjyAqL1xuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShpdGVtOiBSb29tSXRlbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQ2FuVG91Y2gpIHJldHVybjtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2JieVZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5faXNDYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVudGVyZ2lkID0gaXRlbS5naWQ7XG4gICAgICAgIHRoaXMuZW50ZXJ0aWQgPSBpdGVtLnRpZDtcbiAgICAgICAgdGhpcy5lbnRlcmx2aWQgPSBpdGVtLmx2aWQ7XG4gICAgICAgIHRoaXMuY2hlY2tVcGRhdGVHYW1lKCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXNDYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIH0sIDEpXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVXBkYXRlR2FtZSgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBCYXNlRnJhbWVOYXRpdmUuaXNOZWVkVXBkYXRlKSB7XG4gICAgICAgICAgICBsZXQgZ2FtZU5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodGhpcy5lbnRlcmdpZCA9PSA1MSkge1xuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJ0ZXhhc1wiO1xuICAgICAgICAgICAgICAgIC8vIOW+t+W3nuaUvuWcqOWkp+WOhemHjCDkuI3ljZXni6zmm7TmlrBcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb21tb25WaWV3ID0gQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXc7XG4gICAgICAgICAgICBHYW1lVXBkYXRlTWdyLmluc3RhbmNlLmNoZWNrVXBkYXRlKGdhbWVOYW1lLCB0aGlzLmVudGVyR2FtZS5iaW5kKHRoaXMpLCBjb21tb25WaWV3LCBudWxsLCB0aGlzLnVwZGF0ZVByb2dyZXNzLmJpbmQodGhpcyksIHRoaXMudXBkYXRlRmFpbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudWlfbG9hZGluZy5ub2RlKVxuICAgICAgICAgICAgICAgIC5ieSgxLCB7IGFuZ2xlOiAtMzYwIH0pXG4gICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pu05paw6L+b5bqmXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzKHNpemU6IG51bWJlciwgdG90bGVTaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV91cGRhdGVMYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gc2l6ZSAvIHRvdGxlU2l6ZTtcbiAgICAgICAgaWYgKGlzTmFOKHByb2dyZXNzKSkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfcHJvZ3Jlc3NUZXh0LnRleHQgPSBgJHtNYXRoLmZsb29yKHByb2dyZXNzICogMTAwKX0lYDtcbiAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudWlfbG9hZGluZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3VwZGF0ZUxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyR2FtZSgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOabtOaWsOWksei0pVxuICAgIHB1YmxpYyB1cGRhdGVGYWlsKCkge1xuICAgICAgICB0aGlzLl9pc0NhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5pu05paw5aSx6LSl77yM6K+36YeN6K+VXCIpO1xuICAgICAgICB0aGlzLnVpX3VwZGF0ZUxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9sb2FkaW5nLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvLyDov5vlhaXmuLjmiI9cbiAgICBwdWJsaWMgZW50ZXJHYW1lKCkge1xuICAgICAgICBjYy5sb2codGhpcy5lbnRlcmdpZCArIFwiIGVudGVyIHRudW06XCIgKyB0aGlzLmVudGVydGlkKTtcbiAgICAgICAgdGhpcy5faXNDYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIEFwcENvbnN0LnJvb21JZCA9IFwiXCIgKyB0aGlzLmVudGVydGlkO1xuICAgICAgICBpZiAodGhpcy5lbnRlcmdpZCA9PSA1MSAmJiB0aGlzLmVudGVydGlkICE9IDApIHtcbiAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRHYW1lSWQgPSA1MTtcbiAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gdGhpcy5lbnRlcmx2aWQ7XG4gICAgICAgICAgICB0aGlzLmxvYmJ5Q29udHJvbGxlci5jc19lbnRlcnRhYmxlbnVtX3RleCh0aGlzLmVudGVydGlkICsgJycsIHRoaXMuZW50ZXJnaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGludG9UZXhhcygpIHtcbiAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlID0gMDtcbiAgICAgICAgU2NlbmVNYW5hZ2VyLlNpbmdsZXRvbi5sb2FkU2NlbmUoXCJ0ZXhhc1wiLCBcInRleGFzXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcm9vbToge1xuICAgICAgICBuYW1lOiBzdHJpbmcsIHRhYmxlSWQ6IHN0cmluZyxcbiAgICAgICAgdGltZTogbnVtYmVyLCBwbGF5TnVtOiBudW1iZXIsIGxpbWl0OiBudW1iZXIsXG4gICAgICAgIG1heFBsYXlOdW06IG51bWJlciwgYnJhdGU6IG51bWJlciwgcHJlRzogbnVtYmVyLCBnaWQ6IG51bWJlciwgdGlkOiBudW1iZXIsIGx2aWQ6IG51bWJlciwgdDogbnVtYmVyLFxuICAgICAgICBJc1NldHRsZTogYm9vbGVhbiwgY2dvbGQ6IG51bWJlciwgaXNwYXM6IG51bWJlclxuICAgIH1bXSA9IFtdO1xuXG4gICAgLyoq5aSE55CG5oi/6Ze05pWw5o2uICovXG4gICAgcHVibGljIGhhbmRsZVJvb21EYXRhKCkge1xuICAgICAgICBsZXQgcm9vbUxpc3QgPSB0aGlzLnNlbGVjdEdhbWVCeUluZGV4KCk7XG4gICAgICAgIHRoaXMucm9vbSA9IFtdO1xuICAgICAgICBsZXQgbGl2ZSA9IHRoaXMuc2VsZWN0TGltaXRDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGxldCBsYXN0TGl2ZSA9IHRoaXMuc2VsZWN0TGltaXRDb250cm9sbGVyLnByZXZpc291c0luZGV4O1xuICAgICAgICAvLyBpZiAobGl2ZSA9PSAwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnVpX2J0bl9saW1pdEVtdHkuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcm9vbUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0geyBuYW1lOiAnJywgdGFibGVJZDogJycsIHRpbWU6IDAsIHBsYXlOdW06IDAsIGxpbWl0OiAwLCBtYXhQbGF5TnVtOiAwLCBicmF0ZTogMCwgcHJlRzogMCwgZ2lkOiAwLCB0aWQ6IDAsIGx2aWQ6IDAsIHQ6IDAsIElzU2V0dGxlOiBmYWxzZSwgY2dvbGQ6IDAsIGlzcGFzOiAwIH07XG4gICAgICAgICAgICBkYXRhLm5hbWUgPSBcIlwiOy8vcm9vbUxpc3RbaV0udG5hbWU7IC8v5ri45oiP5ZCN5a2XXG4gICAgICAgICAgICBkYXRhLnRhYmxlSWQgPSByb29tTGlzdFtpXS50aWQgKyAnJzsgLy90YWJsZWlkXG4gICAgICAgICAgICBkYXRhLnRpbWUgPSByb29tTGlzdFtpXS5sdGltZTsgICAvL+aXtumXtFxuICAgICAgICAgICAgZGF0YS5wbGF5TnVtID0gcm9vbUxpc3RbaV0ucGNvdW50OyAvL+S6uuaVsFxuICAgICAgICAgICAgZGF0YS5saW1pdCA9IHJvb21MaXN0W2ldLmxnOyAgLy/mnIDkvY7luKblhaVcbiAgICAgICAgICAgIGRhdGEubWF4UGxheU51bSA9IHJvb21MaXN0W2ldLm1hbk51bTsgIC8v5pyA5aSa5Yeg5Liq5Lq6XG4gICAgICAgICAgICBkYXRhLmJyYXRlID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChyb29tTGlzdFtpXS5icmF0ZSk7ICAvL+W6leazqFxuICAgICAgICAgICAgZGF0YS5wcmVHID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChyb29tTGlzdFtpXS5wcmVHKTsgIC8v5YmN5rOoXG4gICAgICAgICAgICBkYXRhLmdpZCA9IHJvb21MaXN0W2ldLmdpZDtcbiAgICAgICAgICAgIGRhdGEudGlkID0gcm9vbUxpc3RbaV0udGlkO1xuICAgICAgICAgICAgZGF0YS5sdmlkID0gcm9vbUxpc3RbaV0ubHZpZDtcbiAgICAgICAgICAgIGRhdGEudCA9IHJvb21MaXN0W2ldLnQ7XG4gICAgICAgICAgICBkYXRhLklzU2V0dGxlID0gcm9vbUxpc3RbaV0uSXNTZXR0bGU7XG4gICAgICAgICAgICBkYXRhLmNnb2xkID0gcm9vbUxpc3RbaV0uY2dvbGQ7XG4gICAgICAgICAgICBkYXRhLmlzcGFzID0gcm9vbUxpc3RbaV0uaXNwYXM7XG4gICAgICAgICAgICBpZiAodGhpcy51aV9idG5fbGltaXRFbXR5LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21MaXN0W2ldLnBjb3VudCA8IHJvb21MaXN0W2ldLm1hbk51bSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGl2ZSA9PSAxICYmIGRhdGEuYnJhdGUgPCAxKSB7IC8v5b6uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDIgJiYgKGRhdGEuYnJhdGUgPT0gMSB8fCBkYXRhLmJyYXRlID09IDIgfHwgZGF0YS5icmF0ZSA9PSA1KSkgey8v5bCPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDMgJiYgKGRhdGEuYnJhdGUgPT0gMTAgfHwgZGF0YS5icmF0ZSA9PSAyNSB8fCBkYXRhLmJyYXRlID09IDUwKSkgey8v5LitXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDQgJiYgKGRhdGEuYnJhdGUgPT0gMTAwIHx8IGRhdGEuYnJhdGUgPT0gMjAwIHx8IGRhdGEuYnJhdGUgPT0gNTAwKSkgey8v5aSnXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAobGl2ZSA9PSA1ICYmIChyb29tTGlzdFtpXS5wY291bnQgPCByb29tTGlzdFtpXS5tYW5OdW0pKSB7Ly/nqbrkvY1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImxhc3RMaXZlID09IFwiLCBsYXN0TGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGxhc3RMaXZlID09IDEgJiYgZGF0YS5icmF0ZSA8IDEpIHsgLy/lvq5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSAyICYmIChkYXRhLmJyYXRlID09IDEgfHwgZGF0YS5icmF0ZSA9PSAyIHx8IGRhdGEuYnJhdGUgPT0gNSkpIHsgLy/lsI9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSAzICYmIChkYXRhLmJyYXRlID09IDEwIHx8IGRhdGEuYnJhdGUgPT0gMjAgfHwgZGF0YS5icmF0ZSA9PSA1MCkpIHsgLy/kuK1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSA0ICYmIChkYXRhLmJyYXRlID09IDEwMCB8fCBkYXRhLmJyYXRlID09IDIwMCB8fCBkYXRhLmJyYXRlID09IDUwMCkpIHsgLy/lpKdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDApIHsgLy/lhajpg6hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGl2ZSA9PSAxICYmIGRhdGEuYnJhdGUgPCAxKSB7IC8v5b6uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGl2ZSA9PSAyICYmIChkYXRhLmJyYXRlID09IDEgfHwgZGF0YS5icmF0ZSA9PSAyIHx8IGRhdGEuYnJhdGUgPT0gNSkpIHsvL+Wwj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpdmUgPT0gMyAmJiAoZGF0YS5icmF0ZSA9PSAxMCB8fCBkYXRhLmJyYXRlID09IDI1IHx8IGRhdGEuYnJhdGUgPT0gNTApKSB7Ly/kuK1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDQgJiYgKGRhdGEuYnJhdGUgPT0gMTAwIHx8IGRhdGEuYnJhdGUgPT0gMjAwIHx8IGRhdGEuYnJhdGUgPT0gNTAwKSkgey8v5aSnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGxpdmUgPT0gNSAmJiAocm9vbUxpc3RbaV0ucGNvdW50IDwgcm9vbUxpc3RbaV0ubWFuTnVtKSkgey8v56m65L2NXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImxhc3RMaXZlID09IFwiLCBsYXN0TGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAobGFzdExpdmUgPT0gMSAmJiBkYXRhLmJyYXRlIDwgMSkgeyAvL+W+rlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSAyICYmIChkYXRhLmJyYXRlID09IDEgfHwgZGF0YS5icmF0ZSA9PSAyIHx8IGRhdGEuYnJhdGUgPT0gNSkpIHsgLy/lsI9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnJvb20ucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAobGFzdExpdmUgPT0gMyAmJiAoZGF0YS5icmF0ZSA9PSAxMCB8fCBkYXRhLmJyYXRlID09IDIwIHx8IGRhdGEuYnJhdGUgPT0gNTApKSB7IC8v5LitXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGxhc3RMaXZlID09IDQgJiYgKGRhdGEuYnJhdGUgPT0gMTAwIHx8IGRhdGEuYnJhdGUgPT0gMjAwIHx8IGRhdGEuYnJhdGUgPT0gNTAwKSkgeyAvL+Wkp1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucm9vbS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChsYXN0TGl2ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaXZlID09IDApIHsgLy/lhajpg6hcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb29tLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfcm9vbUxpc3QubnVtSXRlbXMgPSB0aGlzLnJvb20ubGVuZ3RoO1xuICAgIH1cblxuXG5cbiAgICAvKirliLfmlrDmiL/pl7TmlbDmja4gKi9cbiAgICBwdWJsaWMgcmVuZGVyTGlzdEl0ZW0oaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcbiAgICAgICAgKDxSb29tSXRlbT5vYmopLnNldERhdGEodGhpcy5yb29tW2luZGV4XSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGVzdHJveSgpIHtcbiAgICAgICAgQmFzZUZyYW1lTmF0aXZlLmlzSW5IYWxsID0gZmFsc2U7XG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfSElERSk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLnNsaWRlU2hvdyAmJiB0aGlzLnNsaWRlU2hvdy5jbGVhbigpO1xuICAgICAgICB0aGlzLm1hdGNoVmlldyAmJiB0aGlzLm1hdGNoVmlldy5jbGVhbigpO1xuICAgICAgICB0aGlzLm1hdGNoRGVyYWlsc1ZpZXcgJiYgdGhpcy5tYXRjaERlcmFpbHNWaWV3LmNsZWFuKCk7XG4gICAgICAgIHRoaXMud2VsZmFyZVZpZXcgJiYgdGhpcy53ZWxmYXJlVmlldy5zbGlkZVNob3cuY2xlYW4oKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zdG9wQkdNKCk7XG4gICAgICAgIGZndWkuVUlQYWNrYWdlLnJlbW92ZVBhY2thZ2UoXCJyZXMvTG9iYnlcIik7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcgPSBudWxsO1xuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UubW9kZWwgPSBudWxsO1xuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgfVxufSJdfQ==