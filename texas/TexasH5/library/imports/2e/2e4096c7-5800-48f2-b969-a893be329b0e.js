"use strict";
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