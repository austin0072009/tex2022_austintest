"use strict";
cc._RF.push(module, '29ee22cno1HorlNkfCxbU4y', 'F_TexasView');
// Games/texas/script/View/F_TexasView.ts

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
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasNetData_1 = require("../Model/TexasNetData");
var TexasUserComp_1 = require("./TexasUserComp");
var TexasTable_1 = require("./TexasTable");
var CardRedbetComp_1 = require("./CardRedbetComp");
var Texas_1 = require("../Model/Texas");
var TimeInfoMgrTex_1 = require("./TimeInfoMgrTex");
var TexasHelpsettingComp_1 = require("./TexasHelpsettingComp");
var UserInfoComp_1 = require("./UserInfoComp");
var ChipPositionTex_1 = require("./ChipPositionTex");
var CachePool_1 = require("./CachePool");
var TexasRecordComp_1 = require("./TexasRecordComp");
var TexasTipView_1 = require("./TexasTipView");
var CommonView_1 = require("../../../../Script/BaseFrame/CommonView");
var TexasHistoryComp_1 = require("./TexasHistoryComp");
var JackpotComp_1 = require("./JackpotComp");
var BalenceComp_1 = require("../Balence/BalenceComp");
var BalenceCtr_1 = require("../Balence/BalenceCtr");
var TexasChatComp_1 = require("./TexasChatComp");
var RollNotifierComp_1 = require("./RollNotifierComp");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var BroadcastView_1 = require("../../../../GameHall/script/Lobby/Components/BroadcastView");
var TexasBigWinSpin_1 = require("../TexasSpine/TexasBigWinSpin");
var TexQueueMessages_1 = require("./TexQueueMessages");
var LobbyViewCtr_1 = require("../../../../GameHall/script/Lobby/LobbyViewCtr");
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var cs_base_1 = require("../../../../Script/BaseFrame/cs_base");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var ReconnectManager_1 = require("../../../../Script/BaseFrame/ReconnectManager");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var F_TexasView = /** @class */ (function (_super) {
    __extends(F_TexasView, _super);
    function F_TexasView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadNode = null;
        _this.isCanUpdate = true;
        _this.Action = false; //????????????
        _this.ui_tablecenter = null;
        _this.ui_cachePanel = null;
        _this.ui_texasfightview = null;
        _this.ui_voiceChat = null;
        _this.ui_BtnMessage = null;
        // public ui_btnYuYin:fgui.GButton = null; //?????????
        //// public Transform ui_linepanel; // ????????????
        //// public WaitLineComp linePanel;
        //// public Toggle ui_btnAuto; //???????????? 
        _this.ui_chippoolroot = null; //??????????????? 
        _this.chipPool = null;
        _this.ui_jackpotall = null;
        _this.ui_jackpotbg = null;
        _this.ui_lastjackpotbg = null;
        _this.ui_globalinfo = null;
        _this.ui_bgMango = null;
        _this.ui_jackpotPanel = null;
        _this.ui_btnMango = null;
        _this.jackpotComp = null;
        _this.ui_txtMatchLv = null;
        _this.ui_txtGameType = null;
        _this.ui_txtPassword = null;
        _this.ui_txtRoomNameMid = null; //EmojiText; //?????????
        _this.ui_txtClubName = null; //EmojiText//????????????
        _this.ui_txtRoom = null; //?????????
        _this.ui_txtBase = null; //??????
        _this.ui_txtNexBas = null; //????????????
        _this.ui_txtNexTime = null; //?????????????????????
        _this.ui_txtAll = null; //??????
        _this.ui_lasttxtAll = null; //???????????????
        _this.ui_Password = null;
        _this.ui_inputPass = null; //??????????????????
        _this.ui_imgMatchRank = null; //????????????
        _this.ui_txtMatchRank = null; //??????
        _this.ui_txtRound = null; //??????
        _this.ui_txtAdd = null; //??????
        _this.ui_txtMoney = null; //
        _this.ui_txtName = null; // 
        _this.ui_UserManager = null;
        _this.ui_bgDeskTip = null;
        _this.ui_txtDeskTip = null;
        _this.ui_HelpSettingPanel = null; //???????????? 
        _this.ui_balencePanel = null;
        _this.balenceComp = null;
        /////public Button ui_btnChat;
        _this.ui_chatPanel = null;
        _this.chatComp = null;
        _this.ui_rollNotifyPanel = null;
        _this.ui_runtimeRecord = null; //??????????????????
        _this.ui_btnClose_Record = null; //????????????????????????
        _this.ui_btnRecord = null; //????????????????????????
        _this.recordComp = null;
        _this.ui_btnRefresh = null;
        _this.ui_btnGPS = null;
        _this.ui_historyPanel = null; //????????????
        _this.ui_btnHistory = null; //????????????????????????
        // public ui_btnCollect: fgui.GButton = null;
        _this.historyComp = null;
        _this.ui_userInfoPanel = null; //??????????????????
        _this.ui_waitPanel = null; //??????4??? ????????????
        _this.ui_txtFireTime = null; //?????????
        _this.ui_txtStartDesc = null;
        _this.helpSettingComp = null;
        _this.ui_zhuobubg = null;
        _this.ui_bgMangoL = null;
        _this.ui_vedioTypeBg = null;
        _this.ui_vedio_line = null;
        _this.ui_leftcardsite = null;
        _this.ui_rightcardsite = null;
        _this.ui_downcardsite = null;
        _this.ui_upcardsite = null;
        _this.ui_user0 = null;
        _this.ui_user1 = null; // ????????????
        _this.ui_user2 = null;
        _this.ui_user3 = null;
        _this.ui_user4 = null;
        _this.ui_user5 = null;
        _this.ui_user6 = null;
        _this.ui_user7 = null;
        _this.ui_user8 = null;
        _this.ui_user9 = null;
        _this.ui_imgGray = null; //template gray 
        _this.ui_BtnAddLimit = null; //???????????? 
        _this.ui_CommonCards = null; //??????
        _this.ui_curTexastype = null; //????????????
        _this.ui_txtcurtexastype = null;
        _this._CommonCardImageList = [];
        //??????????????????
        _this.ui_btnAutoQiPai = null; //????????????
        _this.ui_txtAutoQiPai = null;
        _this.ui_btnAutoFollow = null; //????????????
        _this.ui_txtAutoFollow = null;
        _this.isAutoQiPai = false; //
        _this.isAutoFollow = false; //
        _this.ui_btnAdd = null; //??????
        _this.ui_btn15add = null; //?????? 
        _this.ui_btn14add = null; //?????? 
        _this.ui_btn13add = null; //?????? 
        _this.ui_btn12add = null; //?????? 
        _this.ui_btn1add = null; //?????? 
        _this.ui_btnallinadd = null; //?????? 
        _this.ui_sliderAdd = null; //?????????
        _this.ui_txtNums = null;
        _this.ui_bar_v2 = null; //??????????????????
        ////public Text ui_txtaddDynamic;
        _this.ui_btns = null;
        _this.ui_btnFollow = null; //??????
        _this.ui_txtfollowDynamic = null;
        _this.ui_btnZheZhao = null; //????????????
        _this.ui_delayAdd = null;
        _this.ui_StatusManager = null;
        _this.ui_btnLeftCards = null;
        _this.ui_btnShowPai = null;
        _this.ui_BtnAddpanel = null; //??????????????? 
        _this.ui_btnXiu = null; //???/???
        _this.ui_btnqipai = null; //??????  
        _this.ui_btnBackTable = null; //??????
        //????????????
        _this.ui_BtnInsurancePanel = null;
        _this.ui_fenchi = null;
        _this.ui_btngiveup = null;
        _this.ui_btnBaoben = null;
        _this.ui_btnManchi = null;
        _this.ui_insGiveUpText = null;
        _this.ui_fenchiNumText = null;
        _this.ui_txtBaoben = null;
        _this.ui_txtBaoben1 = null;
        _this.ui_textManchi = null;
        _this.ui_textManchi1 = null;
        _this.ui_insTimeText = null;
        _this.ui_insuranceInfo = null;
        _this.ui_PoolNum = null;
        _this.ui_PeiLvText = null;
        _this.ui_BupaiText = null;
        // public ui_inzhuTxt: fgui.GTextField = null;
        // public ui_inFenTxt: fgui.GTextField = null;
        _this.ui_insuranceInfo32 = null;
        // public ui_PoolNum32: fgui.GTextField = null;
        // public ui_PeiLvText32: fgui.GTextField = null;
        // public ui_BupaiText32: fgui.GTextField = null;
        _this.ui_insuranceAddPanel = null;
        _this.ui_closeInsAddPanel = null;
        _this.ui_toubaoNum = null;
        _this.ui_peifuNum = null;
        _this.ui_peilvNum = null;
        _this.ui_sliderInsAdd = null;
        // public ui_baobenText: fgui.GComponent = null;
        _this.ui_bupaiPanel = null;
        // public ui_bupaiCell:fgui.GComponent = null;
        // public ui_ccardsPanel: fgui.GList = null;
        // public ui_ccardsCell:fgui.GComponent = null;
        _this.ui_InsUserCardList = null;
        _this.ui_btnBupaiAllCard = null; //????????????
        _this.ui_btnMixBaoxian = null; //????????????
        _this.ui_btnMaxBaoxian = null; //????????????
        _this.ui_InsCntDown = null; //????????????
        _this.ui_InsDelayGold = null; //????????????
        _this.ui_insDelayAdd = null; //????????????
        // public ui_btnInsAll:fgui.GButton = null;//?????????
        _this.ui_btnInsZhu = null; //??????
        _this.ui_btnInsFen = null; //??????
        _this.ui_jiangchiText = null;
        _this.ui_jackpotparant = null;
        _this.ui_jackpot1 = null;
        _this.ui_jackpot2 = null;
        _this.ui_jackpot3 = null;
        _this.ui_jackpot4 = null;
        _this.ui_txtjackpot1 = null;
        _this.ui_txtjackpot2 = null;
        _this.ui_txtjackpot3 = null;
        _this.ui_txtjackpot4 = null;
        _this.ui_insjackpotparant = null;
        _this.ui_btnBaoxianCommit = null; //????????????
        _this.ui_txtOutsCnt = null;
        _this.ui_ImgEmojGiftTemplete = null;
        _this.ui_txtCurTime = null;
        _this.ui_txtWifi = null;
        _this.ui_txtProgress = null;
        _this.ui_nearUserPanel = null; //????????????  
        _this.ui_tiantianxuan = null;
        _this.ui_tableInfogroup = null;
        //// public Transform ui_leftCardsPanel; //???????????????
        //---********* ????????????
        _this.ui_keyboardPanel = null;
        _this.isHaveAddGold = false;
        _this.isShowAddGoldPanel = true;
        _this.ui_takeGoldPanel = null; //?????????????????????
        _this.ui_txtHintDesc = null;
        _this.ui_sliderTakeGold = null;
        _this.ui_txtScore = null;
        _this.ui_scoreImageFont = null;
        _this.ui_txtTakeGoldPanel = null;
        _this.ui_refreshCgold = null;
        _this.ui_btnTakeGold = null;
        _this.ui_btnrechargeEx = null;
        _this.ui_btn_close_takeGold = null;
        _this.ui_btnRechargeGold = null;
        _this.ui_takein_txt = null;
        _this.ui_takein_num = null;
        _this.ui_takein_min_txt = null;
        _this.ui_takein_max_txt = null;
        _this.ui_clubNotice_txt = null;
        // public Toggle ui_club_Toggle_item; 
        _this.ui_clubgold_text = null;
        _this.ui_clubgold_num = null;
        _this.ui_addClubGold_btn = null;
        _this.curTakeGold = 0;
        _this.curAddGold = 0;
        _this.curApplyGold = 0;
        _this.vedioRawImage = null; //RawImage
        _this.ui_selfEndtimetips = null;
        _this.ui_selfImageF = null;
        _this.ui_selfEndtimetipsText = null;
        _this.isKeep = 0; //????????????
        _this.password = "";
        _this.lastGambleGold = 0;
        _this.isfirst = false; //???????????????????????????
        _this.ismyturn = false; //??????????????????????????????????????????
        _this.selectFiveCards = [];
        _this.maxCards = [];
        _this.curCommondCards = [];
        _this.ui_vedioCcardTip = null;
        _this.ui_txtFireDesc = null;
        _this.ui_txtShowPai = null;
        _this.ui_xiuText = null;
        _this.ui_txtBackTable = null;
        _this.ui_txtLeftCards = null;
        _this.ui_fenchiTip = null;
        _this.ui_clickSelectText = null;
        _this.ui_clickSelectText32 = null;
        // public ui_maxText: fgui.GTextField = null;
        _this.ui_toubaoText = null;
        _this.ui_peifuText = null;
        _this.ui_peilvText = null;
        _this.ui_gongpaiText = null;
        _this.ui_refreshText = null;
        _this.ui_TakeGoldText = null;
        _this.ui_rechargeExText = null;
        _this.ui_textGoldDesc = null;
        _this.ui_chatingText = null;
        _this.ui_tiantianxuanPos = null; //RectTransform
        _this.ui_tableInfogroupPos = null; //RectTransform
        _this.ui_jackpotallPos = null; //RectTransform
        _this.ui_waitPanelPos = null; //RectTransform
        _this.ui_curTexastypePos = null; //RectTransform
        _this.ui_btnsPos = null; //RectTransform
        _this.ui_selfEndtimetipsPos = null; //RectTransform
        _this.ui_confirmHandlePanel = null;
        _this.ui_confirmHandlebg = null;
        _this.ui_confirmTitle_txt = null;
        _this.ui_noRemindTxt = null;
        _this.ui_GiveUpConfirm_txt = null;
        _this.ui_CheckConfirm_txt = null;
        _this.ui_noRemind = null;
        _this.ui_GiveUpConfirm = null;
        _this.ui_CheckConfirm = null;
        _this.ui_newMsg_btn = null;
        _this.ui_newMsg_Text = null;
        _this.ui_newApply_btn = null;
        _this.ui_newApply_Text = null;
        _this.ui_ConfirmStartBtn = null;
        _this.ui_ConfirmStart_Text = null;
        _this.ui_openTip = null;
        _this.ui_txtopentip = null;
        _this.ui_bigWin = null;
        _this.ui_funcBtns = null;
        _this.ui_pauseview = null;
        _this.ui_tipView = null;
        _this.bupaiList = [];
        //??????????????????
        _this.ui_outGoldPanel = null;
        _this.ui_btn_close_outGold = null;
        _this.ui_sliderOutGold = null;
        _this.ui_outGold_num = null;
        _this.ui_btnOutGold = null;
        _this.ui_myGold_num = null;
        _this.ui_btnRefreshGold = null;
        // public broadcast: BroadcastView;
        _this.sendCardAni = [];
        _this.isCanExeTexMas = false; //??????????????????????????????
        _this.isBigEnd = false;
        _this.curTimeTimer = null;
        _this.ui_userVedioPosPanel = null;
        _this.ui_CommonCardspos = null;
        _this.ui_CommonCardVediospos = null;
        _this.showCardIndex = 0;
        _this.isSending = false;
        _this.turnInterval = 0;
        _this.countInterval = 0.05;
        _this.userInterval = 0;
        _this.curSendCardIndex = 0;
        _this.isCanSeeLeftCards = false;
        _this.isCanXiuPai = false;
        _this.removUserCallBack = null;
        _this.moveToTableTime = 0.5;
        _this.moveToUserTime = 0.25;
        _this.onCmp = null;
        _this._isCanOutGold = false; //???????????????
        _this.posSit = 0;
        _this.minTakeGold = 0;
        _this.minAddGold = 0;
        _this.maxAddGold = 0;
        _this.maxInsAddGold = 0;
        _this.minInsAddGold = 0;
        //private int manchiGold = 0;
        //private int baobenInsAddGold = 0;
        _this.manchiFInsAddGold = 0;
        _this.baobenFInsAddGold = 0;
        _this.manchiZInsAddGold = 0;
        _this.baobenZInsAddGold = 0;
        _this.insType = 0;
        _this.insdelayTime = 0;
        _this.insTimerCB = null;
        _this.bupaiPanelObjList = []; //?????????????????????????????????
        _this.InsComCards = [];
        //????????????
        _this.uplevetimeFun = null;
        _this.sendAudioTimer = null;
        return _this;
    }
    F_TexasView_1 = F_TexasView;
    Object.defineProperty(F_TexasView.prototype, "needProcess", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F_TexasView.prototype, "packageResourceName", {
        get: function () {
            return "texas";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F_TexasView.prototype, "packageName", {
        get: function () {
            return "res/Texas";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F_TexasView.prototype, "componentName", {
        get: function () {
            return "Texas";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F_TexasView.prototype, "model", {
        get: function () {
            return F_TexasViewCtr_1.default.instance.Model;
        },
        enumerable: false,
        configurable: true
    });
    F_TexasView.prototype.onLoad = function () {
        var _this = this;
        var filename;
        TexasLanguage_1.TexasLanguage.LoadLanguageConfig();
        switch (AppConst_1.AppConst.languageType) {
            case 1:
                filename = "TexasZWFT";
                break;
            case 2:
                filename = "TexasZWJT";
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                filename = "TexasZWFT";
                break;
        }
        var bundle = cc.assetManager.getBundle("texas");
        bundle.load("/res/language/" + filename, function (err, data) {
            if (err) {
                cc.log("????????????????????????");
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
        // fgui.UIObjectFactory.setExtension("ui://Texas/Broadcast", Broadcast);
        F_TexasViewCtr_1.default.instance.view = this;
    };
    F_TexasView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        fgui.GRoot.inst.addChild(this.fguiComponent);
        this.fguiComponent.visible = false;
    };
    F_TexasView.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
    };
    F_TexasView.prototype.update = function () {
        if (this.isCanUpdate) {
            if (TexQueueMessages_1.TexQueueMessages.instance.isCanExeNext() && this.isCanExeTexMas) {
                TexQueueMessages_1.TexQueueMessages.instance.ExeNextMes();
            }
        }
    };
    // #region Override 
    F_TexasView.prototype.OnLoadCompleted = function () {
        var scaleX = cc.winSize.width / this.fguiComponent.node.width;
        this.fguiComponent.node.setScale(scaleX, 1);
        // ??????????????????????????????????????????
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.on(cc.game.EVENT_SHOW, this.gameEventShow.bind(this));
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_HIDE, this.gameEventHide.bind(this));
        this.Init();
        F_TexasViewCtr_1.default.instance.RegistNotify();
    };
    F_TexasView.prototype.gameEventShow = function () {
        var _this = this;
        // ?????????????????? ????????????????????????????????????
        console.log("---gameEventShow---");
        cc.game.resume();
        this.isCanUpdate = false;
        setTimeout(function () {
            _this.sendReconnect();
        }, 500);
    };
    //????????????
    F_TexasView.prototype.sendReconnect = function () {
        this.commonView.showLoading();
        ReconnectManager_1.ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this));
    };
    // ??????????????????
    F_TexasView.prototype.connectSuccess = function () {
        var _this = this;
        this.commonView.showLoading();
        this.scheduleOnce(function () {
            _this.cs_entertablenum_tex();
        }, 1);
    };
    // ??????????????????
    F_TexasView.prototype.connectFail = function (tipStr) {
        var _this = this;
        this.commonView.ShowTip(tipStr, function () {
            _this.sendReconnect();
        });
    };
    F_TexasView.prototype.gameEventHide = function () {
        console.log("---gameEventHide---");
        // ????????????????????? ????????????
        if (this.ui_BtnInsurancePanel.visible) {
            F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, 0, 0, null);
        }
        if (this._bftable.myUser != null && this._bftable.myUser.IsWaitToTakeIn()) {
            F_TexasViewCtr_1.default.instance.cs_sitdownwaitup_tex();
        }
        this.unscheduleAllCallbacks();
        this._bftable.userList.forEach(function (user) {
            if (user)
                user.unscheduleAllCallbacks();
        });
        TimeInfoMgrTex_1.default.instance.removeTimer();
        TexQueueMessages_1.TexQueueMessages.instance.removeAllMes();
        cc.game.pause();
    };
    F_TexasView.prototype.cs_entertablenum_tex = function () {
        var data = new TexasNetData_1.cs_entertablenum_tex();
        data.tnumber = AppConst_1.AppConst.roomId;
        data._g = AppConst_1.AppConst.currentGameId;
        data.fn = "cs_entertablenum_tex";
        WebSocketManager_1.WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_entertablenum_tex.bind(this));
    };
    F_TexasView.prototype.sc_entertablenum_tex = function (data) {
        this.commonView.hideLoading();
        if (data.result == 1) {
            this.isCanUpdate = true;
            TexQueueMessages_1.TexQueueMessages.instance.removeAllMes();
            AppConst_1.AppConst.enterTableData = data;
            data.levelid && (AppConst_1.AppConst.currentlevelid = data.levelid);
            AppConst_1.AppConst.currentGameId = 51;
            this.InitUI();
            this.HandleTableRecover(this.model.table, this.model.palyerlist);
        }
        else {
            F_TexasViewCtr_1.default.instance.ExitGame();
        }
    };
    F_TexasView.prototype.Init = function () {
        var _this = this;
        this.Show();
        this.loadSounds();
        this.fguiComponent.visible = true;
        BaseFrameNative_1.BaseFrameNative.nowGameView = this;
        F_TexasView_1._dicInsRate = new Map();
        F_TexasView_1._dicInsRate.set(1, 31);
        F_TexasView_1._dicInsRate.set(2, 16);
        F_TexasView_1._dicInsRate.set(3, 10);
        F_TexasView_1._dicInsRate.set(4, 8);
        F_TexasView_1._dicInsRate.set(5, 6);
        F_TexasView_1._dicInsRate.set(6, 5);
        F_TexasView_1._dicInsRate.set(7, 4);
        F_TexasView_1._dicInsRate.set(8, 3.5);
        F_TexasView_1._dicInsRate.set(9, 3);
        F_TexasView_1._dicInsRate.set(10, 2.5);
        F_TexasView_1._dicInsRate.set(11, 2.3);
        F_TexasView_1._dicInsRate.set(12, 2);
        F_TexasView_1._dicInsRate.set(13, 1.8);
        F_TexasView_1._dicInsRate.set(14, 1.6); //???????????????????????????
        F_TexasView_1._dicInsRate.set(15, 1.4);
        F_TexasView_1._dicInsRate.set(16, 1.3);
        F_TexasView_1._dicInsRate.set(17, 1.2);
        F_TexasView_1._dicInsRate.set(18, 1.1);
        F_TexasView_1._dicInsRate.set(19, 1.0);
        F_TexasView_1._dicInsRate.set(20, 0.8);
        this.UpdateCurTime();
        this.scheduleOnce(this.curTimeTimer = function () {
            _this.UpdateCurTime();
        }, 5);
        this._bftable = new TexasTable_1.default();
        this.initManager();
        this.chipPool = this.ui_chippoolroot.node.addComponent(CachePool_1.default);
        this.chipPool.fguiComponent = this.ui_chippoolroot.asCom;
        this.ui_chippoolroot.node.active = true;
        this.historyComp = this.ui_historyPanel.node.addComponent(TexasHistoryComp_1.default);
        this.historyComp.fguiComponent = this.ui_historyPanel;
        this.ui_historyPanel.node.active = true;
        this.helpSettingComp = this.ui_HelpSettingPanel.node.addComponent(TexasHelpsettingComp_1.default);
        this.helpSettingComp.fguiComponent = this.ui_HelpSettingPanel;
        this.ui_HelpSettingPanel.node.active = true;
        this.balenceComp = this.ui_balencePanel.node.addComponent(BalenceComp_1.default);
        this.balenceComp.fguiComponent = this.ui_balencePanel;
        this.ui_balencePanel.node.active = true;
        this.chatComp = this.ui_chatPanel.node.addComponent(TexasChatComp_1.default);
        this.chatComp.fguiComponent = this.ui_chatPanel;
        this.ui_chatPanel.node.active = true;
        this.commonView = this.addFguiComponent(CommonView_1.default);
        this.tipView = this.ui_tipView.node.addComponent(TexasTipView_1.default);
        this.tipView.fguiComponent = this.ui_tipView;
        this.ui_tipView.node.active = true;
        this.rollNoyifierComp = this.ui_rollNotifyPanel.node.addComponent(RollNotifierComp_1.RollNotifierComp);
        this.rollNoyifierComp.fguiComponent = this.ui_rollNotifyPanel;
        this.ui_rollNotifyPanel.node.active = true;
        this.userInfoComp = this.ui_userInfoPanel.node.addComponent(UserInfoComp_1.default);
        this.userInfoComp.fguiComponent = this.ui_userInfoPanel;
        this.userInfoComp.node.active = true;
        this.addFguiComponent(BroadcastView_1.BroadcastView).fguiY = 161;
        this.bigwinNode = this.ui_bigWin.getChild("bgwinNode").node;
        this.bigwinSpin = new TexasBigWinSpin_1.default(this.bigwinNode);
        this.addChild(this.bigwinSpin);
        this.RegistEvent();
        this.InitUI();
        this.RefreshDeskImage();
    };
    F_TexasView.prototype.InitUI = function () {
        var data = AppConst_1.AppConst.enterTableData;
        F_TexasViewCtr_1.default.instance.sc_entertablenum_tex(data);
        F_TexasViewCtr_1.default.instance.Model.mPlayerModel = AppConst_1.AppConst.mPlayerModel;
        F_TexasViewCtr_1.default.instance.Model.room = AppConst_1.AppConst.enterTableData;
        this.showCardIndex = 0;
        this.show3cards = false;
        this.show4card = false;
        this.show5card = false;
        this.model.curMsgId = 0;
        this.endTime = 0;
        this.selectFiveCards = [];
        this.maxCards = [];
        this.curCommondCards = [];
        this.bupaiList = [];
        this.RetsetPlayer();
        this.InitiStatus();
        this.hideUIAllBtns();
        this.ui_txtPassword.visible = false;
        this.ui_txtGameType.visible = false;
        this.ui_txtBase.text = (F_TexasViewCtr_1.default.instance.Model.MatchCode == "" ? "" : TexasLanguage_1.TexasLanguage.getLanguageById(1408) + ":" + F_TexasViewCtr_1.default.instance.Model.MatchCode) +
            "  ??????:" + UIUtil_1.UIUtil.formatNumber100(this.model.brate);
        this.UpdateJackpot(0, 0);
        this.UpdateLastJpot(0);
        this.dichi = 0;
        this.ui_txtAll.text = "0";
        this.ui_lasttxtAll.text = "0";
        this.curSelectSClub = null;
        this.ui_txtAdd.text = TexasLanguage_1.TexasLanguage.getLanguageById(1410) + ":0"; //??????
        this.ui_txtMoney.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold) + "";
        this.ui_txtName.text = F_TexasViewCtr_1.default.instance.Model.mPlayerModel._n;
        this.ui_txtRound.text = TexasLanguage_1.TexasLanguage.getLanguageById(1411) + ":0"; //??????
        this.ui_txtRoom.text = TexasLanguage_1.TexasLanguage.getLanguageById(1180) + ": " + this.model.Room_tnumber;
        this.updateTableInfo();
        this.SetMangoOfTable(this.model._mangoOfTable);
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.historyComp.MyStart(true);
        this.helpSettingComp.MyStart(1);
        this.helpSettingComp.closeShowView();
        this.balenceComp.MyStart();
        this.chatComp.MyStart();
        this.ShowUIChatPanel(false);
        this.tipView.MyStart();
        this.rollNoyifierComp.MyStart();
        this.userInfoComp.MyStart();
        this.ui_runtimeRecord.visible = false;
        this.HideUITakeGoldPanel();
        this.ShowUIDeskTip(null);
        this.UpdateConfirmStartBtn();
        this.StartGamingTimer(this.model.endTime); // - UIUtil.NumberToInt(cc.director.getTotalTime() / 1000));
        this.MessageReBack();
        this.UpdateTakeInTip();
        this.isCanExeTexMas = true;
    };
    F_TexasView.prototype.loadSounds = function () {
        var abbf = cc.assetManager.getBundle("texas");
        abbf.loadDir("res/Sounds", cc.AudioClip, function (err, clips) {
            for (var i = 0; i < clips.length; i++) {
                AudioManager_1.AudioManager.Singleton.add(clips[i].name, clips[i]);
            }
            AudioManager_1.AudioManager.Singleton.playBGM("texas_fightMusic");
            AudioManager_1.AudioManager.Singleton.setSoundStatus(AudioManager_1.AudioManager.TexasMusicStatus ? "open" : "close");
            AudioManager_1.AudioManager.Singleton.setEffectStatus(AudioManager_1.AudioManager.TexasEffectStatus ? "open" : "close");
        });
    };
    F_TexasView.prototype.onDestroy = function () {
        console.log("--- texas OnDestroy ---");
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);
        this.showCardIndex = 0;
        this.isBigEnd = false;
        this.lastGambleGold = 0;
        this.isHaveAddGold = false;
        this.chipPool.ClearAllCache();
        F_TexasViewCtr_1.default.instance.view = null;
        F_TexasViewCtr_1.default.instance.UnRegistNotify();
        this.model.Reset();
        this._bftable = new TexasTable_1.default();
        this._bftable.userList = [];
        this._CommonCardImageList = [];
        this.stopAllTimer();
        F_TexasViewCtr_1.default.instance.Model.Init();
        AudioManager_1.AudioManager.Singleton.stopBGM();
        this.unschedule(this.loadVedioTime);
        TimeInfoMgrTex_1.default.instance.removeTimer();
        TexQueueMessages_1.TexQueueMessages.instance.removeAllMes();
    };
    F_TexasView.prototype.stopAllTimer = function () {
        this.unschedule(this.fireTimer);
        this.unschedule(this.curTimeTimer);
        this.unschedule(this.endTimer);
        this.unschedule(this.timeOutTimer);
        this.unschedule(this.gameingTimer);
    };
    F_TexasView.prototype.StartGamingTimer = function (remainTime) {
        if (remainTime <= 0) {
            return;
        }
        this.unschedule(this.gameingTimer);
        this.scheduleOnce(this.gameingTimer = function () {
        }, remainTime - 1); //?????????????????????????????????????????????????????????
    };
    F_TexasView.prototype.ResetUI = function () {
        this.SetAutoQiPai(false);
        this.SetAutoGamble(false);
        this.ShowUIBalencePanel(null);
        this.ResetUserUI();
    };
    F_TexasView.prototype.ResetUserUI = function () {
        this._bftable.userList.forEach(function (user) {
            if (user == null) {
                return true;
            }
            user.ResetPlayingDataAndUI(); //??????????????????,????????????,?????????????????????UI
        });
    };
    F_TexasView.prototype.initManager = function () {
        this._bftable.Clear();
        if (this.model.openV > 0)
            this.InitVedioPosList();
        else
            this.InitPosList();
        this.InitUserInfo(this.ui_user0, 0);
        this.InitUserInfo(this.ui_user1, 1);
        this.InitUserInfo(this.ui_user2, 2);
        this.InitUserInfo(this.ui_user3, 3);
        this.InitUserInfo(this.ui_user4, 4);
        this.InitUserInfo(this.ui_user5, 5);
        this.InitUserInfo(this.ui_user6, 6);
        this.InitUserInfo(this.ui_user7, 7);
        this.InitUserInfo(this.ui_user8, 8);
        this.InitUserInfo(this.ui_user9, 9, this.ResetPos.bind(this));
        this._bftable.Init();
    };
    F_TexasView.prototype.InitPosList = function () {
        if (this.pos == null)
            this.pos = new Map();
        if (this.cc_pos == null)
            this.cc_pos = [];
        this.pos.clear();
        console.log("manNum", this.model.manNum);
        var posPanel = this.ui_UserManager.getChild("userPosPanel" + this.model.manNum).asCom;
        for (var i_1 = 0; i_1 < posPanel._children.length; i_1++) {
            this.pos.set(i_1 + 1, posPanel._children[i_1].asCom);
        }
        this.cc_pos = [];
        for (var i_2 = 0; i_2 < this.ui_CommonCardspos._children.length; i_2++) {
            this.cc_pos.push(this.ui_CommonCardspos._children[i_2].asCom);
        }
        this.sendCardAni = [];
        for (var i = 1; i < 10; i++) {
            var scard = this.ui_UserManager.getChild("sendCard" + i).asCom;
            this.sendCardAni.push(scard);
        }
    };
    F_TexasView.prototype.InitVedioPosList = function () {
        if (this.pos == null)
            this.pos = new Map();
        if (this.cc_pos == null)
            this.cc_pos = [];
        this.pos.clear();
        for (var i = 0; i < this.ui_userVedioPosPanel._children.length; i++) {
            this.pos.set(i + 1, this.ui_userVedioPosPanel._children[i].asCom);
        }
        this.cc_pos = [];
        for (var i = 0; i < this.ui_CommonCardVediospos._children.length; i++) {
            this.cc_pos.push(this.ui_CommonCardVediospos._children[i].asCom);
        }
    };
    F_TexasView.prototype.InitUserInfo = function (_userTs, localPos, callBack) {
        if (callBack === void 0) { callBack = null; }
        var userTs = _userTs;
        var user = userTs.node.getComponent(TexasUserComp_1.default);
        if (user == null)
            user = userTs.node.addComponent(TexasUserComp_1.default);
        user.fguiComponent = userTs;
        userTs.node.active = true;
        this._bftable.userList.push(user);
        user.MyStart(localPos, this.ui_tablecenter, callBack);
    };
    F_TexasView.prototype.InitiStatus = function () {
        this.isBigEnd = false;
        this.ismyturn = false;
        this.ui_HelpSettingPanel.visible = true;
        // this.ui_btnYuYin.visible = true;
        // VoiceChatMono voiceHelper = ui_voiceChat.gameObject.getOrAddComponent<VoiceChatMono> ();
        // voiceHelper.MyStart ();
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ui_curTexastype.visible = false;
        this.ui_BtnAddLimit.visible = false;
        this.ui_sliderAdd.visible = false;
        this.ui_BtnAddpanel.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.curCommondCards = [];
        this.ShowUIJackpot(false);
    };
    F_TexasView.prototype.MessageReBack = function () {
        this.sc_entertable_texas_n(this.model.palyerlist);
        if (this.model.table != null) {
            this.HandleTableRecover(this.model.table, this.model.palyerlist);
        }
    };
    /// <summary>
    /// ????????????
    /// </summary>
    F_TexasView.prototype.RetsetPlayer = function () {
        this._bftable.userList.forEach(function (data) {
            data.ResetUserCompUI();
        });
        this.Action = false;
    };
    /// <summary>
    /// ????????????pos??????????????????
    /// </summary>
    F_TexasView.prototype.GetLocalPos = function (pos) {
        var mypos = F_TexasViewCtr_1.default.instance.Model._posServer;
        return TexasTable_1.default.GetLocalPosByServerPos(pos, mypos, this.model.manNum);
    };
    F_TexasView.prototype.openBtnZhezao = function () {
        var _this = this;
        this.ui_btnZheZhao.visible = true;
        this.scheduleOnce(function () {
            if (_this.ui_btnZheZhao == null)
                return;
            _this.ui_btnZheZhao.visible = false;
        }, 1);
    };
    /// <summary>
    /// ??????UI??????
    /// </summary>
    F_TexasView.prototype.RegistEvent = function () {
        var _this = this;
        this.ShowActionBtns(false);
        if (this.model.gametype == 20)
            this.moveN1toN2(this.ui_btnallinadd.node, this.ui_btnAutoFollow.node);
        //???
        this.ui_btnallinadd.onClick(function () {
            _this.ui_BtnAddLimit.visible = false;
            _this.ui_sliderAdd.visible = false;
            _this.GambleAllIn();
        });
        //???
        this.ui_btnXiu.onClick(function () {
            _this.GambleXiu();
        });
        //??????,?????????
        this.ui_btnFollow.clearClick();
        this.ui_btnFollow.onClick(function () {
            _this.GambleMultiple(1);
        });
        //???       
        this.ui_btn1add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(2);
        }); //1?????????  
        this.ui_btn12add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(3);
        }); //2?????????      
        this.ui_btn13add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(4);
        });
        this.ui_btn14add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(5);
        });
        this.ui_btn15add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(6);
        });
        this.ui_sliderAdd.on(fgui.Event.STATUS_CHANGED, function (slider) {
            var mygold = UIUtil_1.UIUtil.formatNumber100(_this._bftable.myUser.player.gold);
            var chooseValue = Math.ceil(mygold * slider.value / 100);
            var min = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
            if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length > 0) {
                if (UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model._gamble) > min) {
                    min = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model._gamble);
                }
                var bei = Math.round(chooseValue / min);
                _this.curAddGold = bei * min;
            }
            else {
                _this.curAddGold = chooseValue;
            }
            if (_this.curAddGold > mygold) {
                _this.ui_sliderAdd.value = _this.curAddGold;
                _this.ui_bar_v2.fillAmount = slider.value;
                _this.ui_txtNums.text = "ALLIN";
            }
            else {
                _this.ui_sliderAdd.value = _this.curAddGold;
                _this.ui_bar_v2.fillAmount = slider.value;
                _this.ui_txtNums.text = _this.curAddGold + "";
            }
        });
        this.ui_sliderAdd.on(fgui.Event.TOUCH_END, function (slider) {
            if (_this.ui_txtNums.text != "ALLIN") {
                if (_this.curAddGold <= UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble)) {
                    _this.ui_sliderAdd.visible = false;
                    _this.ui_BtnAddLimit.visible = false;
                    return;
                }
                if (_this.curAddGold < _this.minAddGold || _this.curAddGold <= 0) {
                    _this.tipView.ShowTipLabel("?????????????????????0");
                    return;
                }
                if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length >= 3) {
                    var minGamble = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
                    if (_this.curAddGold < minGamble * 2) {
                        _this.tipView.ShowTipLabel("?????????????????????" + minGamble * 2);
                        return;
                    }
                }
                else {
                    var minGamble = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
                    if (_this.curAddGold < minGamble) {
                        _this.tipView.ShowTipLabel("?????????????????????" + minGamble);
                        return;
                    }
                }
            }
            var gambleGold = _this.curAddGold;
            if (UIUtil_1.PlayerPrefs.GetInt("key_lagan_value", 0) == 1) {
                _this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2216) + gambleGold, function () {
                    _this.ui_sliderAdd.visible = false;
                    _this.ui_BtnAddLimit.visible = false;
                    _this.Wait();
                    //???/???
                    if (gambleGold == _this.ui_sliderAdd.max)
                        _this.GambleAllIn();
                    else
                        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gambleGold * 100, true);
                }, function () { }); //????????????{0}
            }
            else {
                _this.ui_sliderAdd.visible = false;
                _this.ui_BtnAddLimit.visible = false;
                _this.Wait();
                //???/???
                if (gambleGold == _this.ui_sliderAdd.max)
                    _this.GambleAllIn();
                else
                    F_TexasViewCtr_1.default.instance.cs_gamble_tex(gambleGold * 100, true);
            }
        });
        this.ui_btnAdd.onClick(function () {
            if (_this.model.gametype == 20)
                return;
            var mygold = UIUtil_1.UIUtil.formatNumber100(_this._bftable.myUser.player.gold);
            var min = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
            if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length >= 3) {
                _this.minAddGold = min * 2;
            }
            else {
                _this.minAddGold = min;
            }
            if (mygold < _this.minAddGold) {
                _this.minAddGold = mygold;
                _this.ui_txtNums.text = "ALLIN";
            }
            else {
                _this.ui_txtNums.text = _this.minAddGold + "";
            }
            var percent = Math.floor(_this.minAddGold * 100 / mygold);
            console.log("percent === ", percent);
            percent = percent >= 100 ? 100 : percent;
            _this.ui_sliderAdd.value = percent;
            _this.ui_sliderAdd.min = 0;
            _this.ui_sliderAdd.max = 100;
            _this.ui_bar_v2.fillAmount = percent;
            // this.minAddGold = this.model.brate * 2 > mygold ? mygold : this.model.brate * 2;
            // this.minAddGold = Number((this.minAddGold / 100).toFixed(2));
            // this.ui_sliderAdd.value = this.minAddGold;
            // this.ui_txtNums.text = this.minAddGold + "";
            // this.ui_bar_v2.fillAmount = this.minAddGold;
            _this.ui_sliderAdd.visible = true;
        });
        // ???/?????? 
        this.ui_btnqipai.onClick(function () {
            // AudioManager.Singleton.play("", "texas_qipai");
            var isGiveup = UIUtil_1.PlayerPrefs.GetInt("key_ConfirmGiveUp", 0);
            if (_this.GetFollowMinGamble() <= 0 && isGiveup == 0) {
                _this.ShowConfirmHandlePanel(true);
            }
            else {
                F_TexasViewCtr_1.default.instance.cs_giveup_tex(F_TexasViewCtr_1.default.instance.Model._posServer);
                _this.openBtnZhezao();
            }
        });
        //?????????/???
        this.ui_btnAutoQiPai.onClick(function () {
            _this.SetAutoQiPai(!_this.isAutoQiPai);
            _this.SetAutoGamble(false);
        });
        this.ui_btnAutoFollow.onClick(function () {
            _this.SetAutoGamble(!_this.isAutoFollow);
            _this.SetAutoQiPai(false);
        });
        //??????
        this.ui_btnBackTable.onClick(function () {
            //???????????????????????????serverpos
            if (_this._bftable.myUser.serverpos > 0) {
                _this.CheckAutoSitDown(_this._bftable.myUser.serverpos);
            }
            _this.CheckBtnBackTableState();
        });
        this.ui_btnLeftCards.onClick(function () {
            if (_this.isCanSeeLeftCards) {
                var cost = _this.ui_btnLeftCards.getChild("Text").asTextField.text;
                if (AppConst_1.AppConst.mPlayerModel.gold < Number(cost)) {
                    CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //????????????
                    return;
                }
                F_TexasViewCtr_1.default.instance.cs_seerestcard_tex();
            }
            _this.ShowUILeftCards(false, false);
        });
        this.ui_btnShowPai.onClick(function () {
            if (_this.isCanXiuPai) {
                if (AppConst_1.AppConst.mPlayerModel.gold < _this.model.brate * 10) {
                    CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //????????????
                    return;
                }
                F_TexasViewCtr_1.default.instance.cs_forceshowcard_tex();
            }
            _this.ShowUILeftCards(false, false);
        });
        //#region ????????????
        this.ui_btngiveup.onClick(function () {
            _this.Wait();
            F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, 0, 0, null);
            _this.ui_funcBtns.visible = true;
        });
        this.ui_btnBaoben.onClick(function () {
            _this.Wait();
            F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.baobenZInsAddGold, _this.baobenFInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
            _this.ui_funcBtns.visible = true;
        });
        this.ui_btnManchi.onClick(function () {
            _this.Wait();
            F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.manchiZInsAddGold, _this.manchiFInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
            _this.ui_funcBtns.visible = true;
        });
        this.ui_fenchi.onClick(function () {
            if (_this.zhuInsAddGold <= 0 && _this.fenInsAddGold <= 0) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2212)); //??????????????????0
                return;
            }
            _this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2217) + (_this.tempInsAddGold / 100), function () {
                _this.Wait();
                F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
                _this.ui_funcBtns.visible = true;
            }, function () { }); //????????????{0}
        });
        // this.ui_btnInsAll.onClick(()=>{
        //     this.HandleInsuranceBtnsForSelfTurn();
        // });
        this.ui_insuranceInfo.onClick(function () {
            // this.ui_insuranceAddPanel.visible = true;
            _this.showInsAddInfo(1);
        });
        this.ui_insuranceInfo32.onClick(function () {
            // this.ui_insuranceAddPanel.visible = true;
            _this.showInsAddInfo(2);
        });
        this.ui_closeInsAddPanel.onClick(function () {
            // this.ui_insuranceAddPanel.visible = false;
            // this.ui_funcBtns.visible = true;
        });
        this.ui_sliderInsAdd.on(fgui.Event.STATUS_CHANGED, function (slider) {
            console.log("????????????" + UIUtil_1.UIUtil.NumberToInt(slider.value));
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(slider.value));
            if (_this.tempInsAddGold <= 0) {
                _this.ui_fenchiTip.text = ""; //???????????????
                return;
            }
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
        });
        //this.ui_sliderInsAdd.on(fgui.Event.TOUCH_END, (slider) => {
        this.ui_btnBaoxianCommit.onClick(function () {
            if (_this.tempInsAddGold <= 0) {
                _this.ui_fenchiTip.text = ""; //???????????????
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2212)); //??????????????????0
                return;
            }
            if (UIUtil_1.PlayerPrefs.GetInt("key_lagan_value", 0) == 1) {
                CommonCtr_1.CommonCtr.instance.ShowTipCallback(TexasLanguage_1.TexasLanguage.getLanguageById(2217) + (_this.tempInsAddGold / 100), function () {
                    _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
                    _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
                    _this.ui_BtnInsurancePanel.visible = false;
                    F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
                }, function () { }); //????????????{0}
            }
            else {
                _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
                _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
                _this.ui_BtnInsurancePanel.visible = false;
                F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
            }
        });
        //#endregion
        this.ui_delayAdd.onClick(function () {
            if (AppConst_1.AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr_1.default.instance.Model.delayCount == -1 ? 0 : UIUtil_1.UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr_1.default.instance.Model.delayCount)))) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //????????????
            }
            else {
                _this.cs_delay_tex();
            }
        });
        this.ui_insDelayAdd.onClick(function () {
            if (AppConst_1.AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr_1.default.instance.Model.delayCount == -1 ? 0 : UIUtil_1.UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr_1.default.instance.Model.delayCount)))) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //????????????
            }
            else
                _this.cs_delay_tex();
        });
        this.ui_sliderTakeGold.on(fgui.Event.STATUS_CHANGED, function (slider) {
            var num = (UIUtil_1.UIUtil.NumberToInt(slider.value) + 1) * _this.minTakeGold;
            //AOF?????????????????????????????????minTakeGold?????????
            if (_this.model.gametype == 20) {
                if (slider.value >= _this.maxTakeGold - _this.minTakeGold && slider.value <= _this.maxTakeGold) {
                    num = slider.value;
                }
                else {
                    num = (UIUtil_1.UIUtil.NumberToInt(slider.value / _this.minTakeGold) + 1) * _this.minTakeGold;
                }
            }
            _this.UpdateTakeGoldUI(num > _this.maxTakeGold ? _this.maxTakeGold : (num < _this.minTakeGold ? _this.minTakeGold : num));
        }, this);
        this.ui_btnrechargeEx.onClick(function () {
            // RechargeCtr.instance.OpenWindow ();
        });
        this.ui_refreshCgold.onClick(function () {
            if (_this.curSelectSClub == null) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2219)); //????????????????????????
                return;
            }
            F_TexasViewCtr_1.default.instance.cs_refreshbalance_club(_this.curSelectSClub != null ? _this.curSelectSClub.cid : 0);
        });
        this.ui_btnTakeGold.onClick(function () {
            if (_this.model.clubid > 0 && _this.model.IsSupper) {
            }
            if (_this.curTakeGold > 0 && _this.curTakeGold <= _this.maxTakeGold) {
                if (_this.isShowAddGoldPanel) {
                    _this.isHaveAddGold = true;
                    F_TexasViewCtr_1.default.instance.cs_addgoldingame_tex(UIUtil_1.UIUtil.NumberToInt(_this.curTakeGold), _this.model.curSClub != null ? _this.model.curSClub.cid : 0);
                }
                else {
                    _this.password = _this.ui_inputPass.text.trim();
                    F_TexasViewCtr_1.default.instance.cs_sitdown_tex(_this.posSit, UIUtil_1.UIUtil.NumberToInt(_this.curTakeGold), _this.isKeep, _this.password, _this.curSelectSClub != null ? _this.curSelectSClub.cid : 0);
                }
                _this.HideUITakeGoldPanel();
            }
            else {
                _this.ShowUITakeGoldPanel(true, 0, true);
                //CommonCtr.instance.ShowTip("?????? ?????? ??????:curTakeGold" + curTakeGold + " max:" + maxTakeGold);
            }
        });
        this.ui_btnRechargeGold.onClick(function () {
            //??????
        });
        this.ui_btn_close_takeGold.onClick(function () {
            if (_this._bftable.myUser != null && _this._bftable.myUser.IsWaitToTakeIn()) {
                F_TexasViewCtr_1.default.instance.cs_sitdownwaitup_tex(); //??????????????????????????????????????????
            }
            _this.HideUITakeGoldPanel();
        });
        this.ui_BtnMessage.onClick(function () {
            _this.ShowUIChatPanel(true);
        });
        this.ui_btnRecord.onClick(function () {
            console.log("ui_runtimeRecord?????? == " + _this.ui_historyPanel.node.getNumberOfRunningActions());
            if (_this.isBigEnd || _this.ui_runtimeRecord.node.getNumberOfRunningActions() > 0) {
                return;
            }
            F_TexasViewCtr_1.default.instance.cs_getgain_tex();
            if (_this.recordComp == null) {
                _this.recordComp = _this.ui_runtimeRecord.node.addComponent(TexasRecordComp_1.default);
                _this.recordComp.fguiComponent = _this.ui_runtimeRecord.asCom;
                _this.ui_runtimeRecord.node.active = true;
                _this.recordComp.MyStart();
            }
            // this.recordComp.Show();
            if (_this.model.curTableOverCount > 0)
                F_TexasViewCtr_1.default.instance.Model.isGamestart = true;
            _this.ui_runtimeRecord.node.runAction(cc.moveTo(0.2, cc.v2(0, 0))); // DoTweenEx.DOLocalMoveX (ui_runtimeRecord, 0, 0.5f);
        });
        this.ui_btnHistory.onClick(function () {
            console.log("ui_historyPanel?????? == " + _this.ui_historyPanel.node.getNumberOfRunningActions());
            if (_this.isBigEnd || _this.ui_historyPanel.node.getNumberOfRunningActions() > 0) {
                return;
            }
            _this.historyComp.Show();
            // this.ui_btnCollect.visible = true;
            _this.ui_historyPanel.node.x = 1080;
            cc.tween(_this.ui_historyPanel.node)
                .to(0.2, { position: cc.v3(0, _this.ui_historyPanel.y, 0) })
                .call(function () {
                F_TexasViewCtr_1.default.instance.cs_thistory_tex();
            })
                .start();
        });
        this.ui_btnMango.onClick(function () {
            F_TexasViewCtr_1.default.instance.cs_getalljackpot_tex();
            if (_this.jackpotComp == null) {
                _this.jackpotComp = _this.ui_jackpotPanel.node.addComponent(JackpotComp_1.default);
                _this.jackpotComp.fguiComponent = _this.ui_jackpotPanel;
                _this.ui_jackpotPanel.node.active = true;
                _this.jackpotComp.MyStart();
            }
            else {
                _this.jackpotComp.Show();
            }
        });
        this.ui_btnRefresh.onClick(function () {
            CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1583)); //??????????????????
        });
        this.ui_btnRefreshGold.onClick(function () {
            F_TexasViewCtr_1.default.instance.cs_freshplayerInfoSD();
        });
        this.ui_btnGPS.onClick(function () {
            // this.nearUserComp.Show (null);
        });
        this.ui_addClubGold_btn.onClick(function () {
            // this.ShowAddClubPanel();
        });
        this.ui_noRemind.onClick(function () {
            var index = _this.ui_noRemind.getController("isOn").selectedIndex;
            var value = index == 0 ? 1 : 0;
            _this.ui_noRemind.getController("isOn").setSelectedIndex(value);
            UIUtil_1.PlayerPrefs.SetInt("key_ConfirmGiveUp", value);
        });
        this.ui_GiveUpConfirm.getChild("tipCloseText").text = TexasLanguage_1.TexasLanguage.getLanguageById(1395); //??????
        this.ui_GiveUpConfirm.onClick(function () {
            _this.ShowConfirmHandlePanel(false);
            F_TexasViewCtr_1.default.instance.cs_giveup_tex(F_TexasViewCtr_1.default.instance.Model._posServer);
            _this.openBtnZhezao();
        });
        this.ui_CheckConfirm.getChild("tipOKText").text = TexasLanguage_1.TexasLanguage.getLanguageById(1297); //??????
        this.ui_CheckConfirm.onClick(function () {
            _this.ShowConfirmHandlePanel(false);
            if (_this.ui_btnFollow.visible)
                _this.GambleMultiple(1);
            else
                _this.GambleXiu();
        });
        this.ui_confirmHandlebg.onClick(function () {
            _this.ShowConfirmHandlePanel(false);
        });
        //????????????
        this.ui_btnBupaiAllCard.onClick(function () {
            _this.selectBupaiAll();
            _this.showCurInsAdd(_this.tempInsAddGold);
        });
        this.ui_btnMixBaoxian.onClick(function () {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            _this.ui_sliderInsAdd.value = _this.ui_sliderInsAdd.min;
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(_this.ui_sliderInsAdd.min));
            // if (this.tempInsAddGold <= 0) {
            // this.ui_fenchiTip.text = "";//???????????????
            //     return;
            // }
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
        });
        this.ui_btnMaxBaoxian.onClick(function () {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            _this.ui_sliderInsAdd.value = _this.ui_sliderInsAdd.max;
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(_this.ui_sliderInsAdd.max));
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
        });
        this.ui_sliderOutGold.on(fgui.Event.STATUS_CHANGED, function (slider) {
            var num = UIUtil_1.UIUtil.NumberToInt(slider.value);
            _this.ui_outGold_num.text = num + "";
            var curGold = UIUtil_1.UIUtil.formatNumber100(_this.model.tableLockGold);
        }, this);
        //??????????????????
        this.ui_btnOutGold.onClick(function () {
            var num = UIUtil_1.UIUtil.NumberToInt(_this.ui_sliderOutGold.value);
            _this.ui_outGoldPanel.visible = false;
            F_TexasViewCtr_1.default.instance.cs_goldback_tex(num * 100);
            _this._isCanOutGold = true;
        });
        this.ui_btn_close_outGold.onClick(function () {
            _this.ui_outGoldPanel.visible = false;
        });
    };
    F_TexasView.prototype.ShowHistory = function () {
        this.historyComp.Show();
        // this.ui_btnCollect.visible = true;
        this.ui_historyPanel.node.x = 1080;
        this.ui_historyPanel.node.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, this.ui_historyPanel.y)), cc.callFunc(function () {
            F_TexasViewCtr_1.default.instance.cs_thistory_tex();
        })));
    };
    F_TexasView.prototype.ShowHistory_bigend = function () {
        this.historyComp.Show();
        // this.ui_btnCollect.visible = true;
        this.ui_historyPanel.node.x = 1080;
        this.ui_historyPanel.node.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, this.ui_historyPanel.y)), cc.callFunc(function () {
            F_TexasViewCtr_1.default.instance.cs_roomhistory_tex();
        })));
    };
    F_TexasView.prototype.ShowAnchorCcardsTip = function (isShow) {
        this.ui_vedioCcardTip.visible = isShow;
    };
    F_TexasView.prototype.SetButtonEnable = function (btn, isEnable, btnColor, txtColor) {
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
            var text = btn._children[1].asTextField;
            if (text != null) {
                if (isEnable) {
                    text.color = txtColor == null ? cc.Color.WHITE : txtColor;
                }
                else {
                    text.color = cc.Color.GRAY;
                }
            }
        }
    };
    F_TexasView.prototype.cs_delay_tex = function () {
        F_TexasViewCtr_1.default.instance.cs_delay_tex();
    };
    F_TexasView.prototype.sc_delay_tex = function (data) {
    };
    F_TexasView.prototype.sc_delay_tex_n = function (data) {
        var _this = this;
        //??????????????????,????????????????????????????????????????????????????????????????????????????????????    
        this._bftable.userList.forEach(function (tempUser) {
            if (tempUser == null || tempUser.player == null)
                return true;
            //??????????????????,????????????,???,??????????????????
            if (tempUser.player.userid == data.UserID) {
                if (data._msgid <= 0 && tempUser.self) //isReBack()
                 {
                    //????????????????????????????????????????????????????????????
                    tempUser.showDelay(_this.model.lefttime);
                }
                else
                    tempUser.showDelay(data.time);
                if (tempUser.self) //??????????????????????????????
                 {
                    _this.insdelayTime = data.time;
                    F_TexasViewCtr_1.default.instance.Model.delayCount = data.delays;
                    _this.ShowDelay(true);
                }
            }
        });
    };
    F_TexasView.prototype.SetAutoGamble = function (isAuto) {
        this.isAutoFollow = isAuto;
        this.ui_txtAutoFollow.text = isAuto ? TexasLanguage_1.TexasLanguage.getLanguageById(1393) : TexasLanguage_1.TexasLanguage.getLanguageById(2233); //?????? ??????//n??????
    };
    F_TexasView.prototype.SetAutoQiPai = function (isAuto) {
        this.isAutoQiPai = isAuto;
        this.ui_txtAutoQiPai.text = isAuto ? TexasLanguage_1.TexasLanguage.getLanguageById(1393) : TexasLanguage_1.TexasLanguage.getLanguageById(1294); //?????? ??????\n???/???
    };
    F_TexasView.prototype.AutoGambleGold = function () {
        if (this.isAutoFollow) {
            this.GambleMultiple(1);
        }
    };
    F_TexasView.prototype.AutoQiPai = function () {
        if (this.isAutoQiPai) {
            var isCanXiu = (this.model._mingamble <= 0 && this.model._emaxg <= 0);
            if (isCanXiu) {
                this.GambleXiu();
            }
            else {
                F_TexasViewCtr_1.default.instance.cs_giveup_tex(F_TexasViewCtr_1.default.instance.Model._posServer);
            }
        }
    };
    F_TexasView.prototype.AutoGamble = function (_select) {
        this.AutoGambleGold();
    };
    F_TexasView.prototype.ClearTable = function () {
        if (this.model.clubid > 0 && this.model.IsSupper) {
            this.ui_txtMoney.text = UIUtil_1.UIUtil.formatNumber100(this.model.cgold) + "";
        }
        else {
            this.ui_txtMoney.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold) + "";
        }
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ui_curTexastype.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.curCommondCards = [];
        this._CommonCardImageList = [];
        F_TexasViewCtr_1.default.instance.Model._CommonCard = [];
        F_TexasViewCtr_1.default.instance.Model._OpenCount = 2;
        this.RetsetPlayer();
        for (var i = 0; i < this.ui_chippoolroot.asCom._children.length; i++) {
            this.ui_chippoolroot.asCom._children[i].node.destroy();
        }
        if (this._chippoolList != null) {
            for (var i = 0; i < this._chippoolList.length; i++) {
                if (this._chippoolList[i] != null)
                    this._chippoolList[i].node.destroy();
            }
            this._chippoolList = [];
        }
        this.dichi = 0;
        this.ui_txtAll.text = "";
        this.ui_lasttxtAll.text = "";
        if (this.ChipRecordList != null)
            this.ChipRecordList = [];
    };
    F_TexasView.prototype.ShowCardsForce = function (othercard) {
        var _this = this;
        othercard.forEach(function (_shoupai) {
            var winer = _this._bftable.GetUserByUserId(_shoupai.pos);
            if (winer == null)
                return true;
            winer.ShowCard(_shoupai.vallist); //???????????????????????????????????????
        });
    };
    /// <summary>
    /// ????????????????????????????????????
    /// </summary>
    /// <param name="card"></param>
    F_TexasView.prototype.ShowRestCommonCards = function (cards) {
        this.model.clicknum += 1;
        this.curCommondCards = [];
        UIUtil_1.UIUtil.Concat(this.curCommondCards, cards);
        if (this._CommonCardImageList.length == 0) {
            this._CommonCardImageList = [];
            for (var i = 0; i < 5; ++i) {
                var _tempCard = this.ui_StatusManager.getChild("CommonCard" + (i + 1));
                var card = _tempCard.node.getComponent(CardRedbetComp_1.default);
                if (card == null) {
                    card = _tempCard.node.addComponent(CardRedbetComp_1.default);
                    card.fguiComponent = _tempCard.asCom;
                }
                card.Init(false);
                this._CommonCardImageList.push(card);
            }
        }
        for (var i = 0; i < 5; ++i) {
            this._CommonCardImageList[i].Reset();
            this._CommonCardImageList[i].Hide();
        }
        this.ui_CommonCards.visible = true;
        for (var i = 0; i < cards.length; i++) {
            this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
            this._CommonCardImageList[i].SetVal(cards[i]);
            this._CommonCardImageList[i].Show();
        }
        this.ShowSelfMaxCards();
        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //??????????????????    
        var isShow = this._bftable.myUser.serverpos > 0 && !this.IsSelfWatch() && !this.IsSelfWaitToTakeIn();
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.ui_btnLeftCards.visible = (isShow && this.isCanSeeLeftCards);
    };
    F_TexasView.prototype.scalarArrayEquals = function (array1, array2) {
        var b = array1.length == array2.length;
        if (b) {
            for (var i = 0; i < array1.length; i++) {
                if (array1[i] != array2[i]) {
                    b = false;
                    return b;
                }
            }
        }
        return b;
    };
    F_TexasView.prototype.ShowCommonCards = function () {
        if (F_TexasViewCtr_1.default.instance.Model._CommonCard != null && F_TexasViewCtr_1.default.instance.Model._CommonCard.length != 0) {
            if (this._CommonCardImageList.length == 0) {
                this._CommonCardImageList = [];
                for (var i = 0; i < 5; ++i) {
                    var _tempCard = this.ui_StatusManager.getChild("CommonCard" + (i + 1)); //ui_CommonCards
                    var card = _tempCard.node.getComponent(CardRedbetComp_1.default);
                    if (card == null) {
                        card = _tempCard.node.addComponent(CardRedbetComp_1.default);
                        card.fguiComponent = _tempCard.asCom;
                    }
                    card.Init(false);
                    this._CommonCardImageList.push(card);
                }
            }
            if (this.showCardIndex == 5) { //5??????????????????
                for (var i = 0; i < 5; ++i) {
                    this._CommonCardImageList[i].Reset();
                    this._CommonCardImageList[i].Hide();
                }
                this.ui_CommonCards.visible = true;
                for (var i = 0; i < this.curCommondCards.length; i++) {
                    this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
                    this._CommonCardImageList[i].SetVal(this.curCommondCards[i]);
                    this._CommonCardImageList[i].Show();
                }
                this.ShowSelfMaxCards();
            }
            else {
                this.showCommonAni();
            }
            // if (this.scalarArrayEquals(this.curCommondCards, F_TexasViewCtr.instance.Model._CommonCard)) {
            //     for (let i = 0; i < 5; ++i) {
            //         this._CommonCardImageList[i].Reset();
            //         this._CommonCardImageList[i].Hide();
            //     }
            //     this.ui_CommonCards.visible = true;
            //     for (let i = 0; i < this.curCommondCards.length; i++) {
            //         this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
            //         this._CommonCardImageList[i].SetVal(this.curCommondCards[i]);
            //         this._CommonCardImageList[i].Show();
            //     }
            //     this.ShowSelfMaxCards();
            // } else {
            //     this.showCommonAni();
            // }
        }
        else {
            this.ui_CommonCards.visible = false;
            this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
            this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
            this.ui_curTexastype.visible = false;
            this.curCommondCards = [];
            this.ShowSelfMaxCards(); //???????????????????????????????????????????????????                       
        }
    };
    F_TexasView.prototype.showCommonAni = function () {
        var _this = this;
        if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length < 3) {
            console.log("?????????????????? = " + F_TexasViewCtr_1.default.instance.Model._CommonCard.length);
            return;
        }
        if (this.isSending)
            return;
        if (this.showCardIndex < 3) {
            // ??????????????????
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            this.scheduleOnce(function () {
                _this.ui_CommonCards.visible = true;
                _this.ShowCommonAniBy3();
            }, 0.2);
        }
        else if (this.showCardIndex == 3) {
            // ???????????????
            this.ShowCommonAniBy4_5(4);
        }
        else if (this.showCardIndex == 4) {
            // ????????????
            this.ShowCommonAniBy4_5(5);
        }
        else {
            // ????????????
        }
        // if (F_TexasViewCtr.instance.Model._CommonCard.length == 3) //?????????????????????
        // {
        //     if (this.show3cards) {
        //         return;
        //     }
        //     //????????????????????????????????????
        //     F_TexasViewCtr.instance.RefreshUserCurGamble();
        //     this.scheduleOnce(() => {
        //         this.ui_CommonCards.visible = true;
        //         this.ShowCommonAniBy3();
        //     }, 0.2)
        // } 
        // else {
        //     this.ui_CommonCards.visible = true;
        //     let aniCount = F_TexasViewCtr.instance.Model._CommonCard.length - this.curCommondCards.length;
        //     if (aniCount <= 2) {
        //         if (this.show3cards) {
        //             this.show4card = F_TexasViewCtr.instance.Model._CommonCard.length == 4;
        //             return;
        //         }
        //         if (this.show4card) {
        //             this.show5card = F_TexasViewCtr.instance.Model._CommonCard.length == 5;
        //             return;
        //         }
        //         if (this.show5card)
        //             return;
        //         //?????????????????????????????????????????????????????????
        //         //console.log("ssssssssssssssssssss F_TexasViewCtr.instance.Model._CommonCard.Count ==== " + F_TexasViewCtr.instance.Model._CommonCard.Count);
        //         let delayTime = F_TexasViewCtr.instance.Model._CommonCard.length - this.curCommondCards.length == 2 ? 2 : 0;
        //         this.ShowCommonAniBy45(0, delayTime);
        //     }
        //     else {
        //         this.ui_CommonCards.visible = true;
        //         if (this.show3cards) {
        //             this.show4card = F_TexasViewCtr.instance.Model._CommonCard.length == 4;
        //             return;
        //         }
        //         if (this.show4card) {
        //             this.show5card = F_TexasViewCtr.instance.Model._CommonCard.length == 5;
        //             return;
        //         }
        //         if (this.show5card)
        //             return;
        //         //?????????????????????4?????????5????????????????????????????????????
        //         //console.log("ddddddddddddddddddddddddddd F_TexasViewCtr.instance.Model._CommonCard.Count ==== " + F_TexasViewCtr.instance.Model._CommonCard.Count);
        //         this.ShowCommonAniBy3(() => {
        //             this.ShowCommonAniBy45(1, 3);
        //         });
        //     }
        // }
    };
    /// <summary>
    /// ???????????????.?????????1.5S
    /// </summary>
    /// <param name="onComplete"></param>
    F_TexasView.prototype.ShowCommonAniBy3 = function (onComplete) {
        var _this = this;
        if (onComplete === void 0) { onComplete = null; }
        var _loop_1 = function (i) {
            this_1._CommonCardImageList[i].Reset();
            this_1._CommonCardImageList[i].Hide();
            if (i + 1 > F_TexasViewCtr_1.default.instance.Model._CommonCard.length || i > 2) {
                return "continue";
            }
            var timeout = setTimeout(function () {
                if (!_this._CommonCardImageList)
                    return;
                _this.isSending = true;
                var tempGo = _this._CommonCardImageList[i].node;
                var tempCard = _this._CommonCardImageList[i];
                _this.moveN1toN2(tempGo, _this.cc_pos[0].node); //tempGo.position =  this.cc_pos[0].node.position;
                tempGo.stopAllActions();
                var cardValue = F_TexasViewCtr_1.default.instance.Model._CommonCard[i];
                tempCard.Show();
                if (i == 0) {
                    _this.show3cards = true;
                    tempCard.SetVal(0);
                    tempGo.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
                        tempCard.Turnover(cardValue);
                    })));
                }
                else if (i == 1) {
                    tempCard.SetVal(0);
                    var v = _this.convertNodeSpaceAR(tempGo, _this.cc_pos[i].node);
                    tempGo.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(v.x, v.y)), cc.callFunc(function () {
                        tempCard.Turnover(cardValue);
                    })));
                }
                else {
                    tempCard.SetVal(0);
                    var v2 = _this.convertNodeSpaceAR(tempGo, _this.cc_pos[i].node);
                    tempGo.runAction(cc.sequence(cc.callFunc(function () {
                        tempCard.Show();
                    }), cc.moveTo(0.2, cc.v2(v2.x, v2.y)), cc.callFunc(function () {
                        tempCard.Turnover(cardValue);
                    }), cc.delayTime(0.5), cc.callFunc(function () {
                        _this.show3cards = false;
                        if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length > 3) {
                            _this.curCommondCards = F_TexasViewCtr_1.default.instance.Model._CommonCard.slice(0, 3);
                        }
                        else {
                            _this.curCommondCards = F_TexasViewCtr_1.default.instance.Model._CommonCard;
                        }
                        if (onComplete != null) //????????????????????????
                         {
                            onComplete();
                        }
                        // else//??????????????????????????????????????????????????????????????????
                        // {
                        //     if (F_TexasViewCtr.instance.Model._CommonCard.length > 3) {
                        //         this.ShowCommonAniBy45(1, 3);
                        //     }
                        // }
                        // if (F_TexasViewCtr.instance.Model._CommonCard.length == 3) {
                        //     this.ShowSelfMaxCards();
                        // }
                        _this.ShowSelfMaxCards();
                        _this.isSending = false;
                        _this.showCardIndex = 3;
                        _this.showCommonAni();
                    })));
                }
            }, 50 * i);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        };
        var this_1 = this;
        for (var i = 0; i < this._CommonCardImageList.length; i++) {
            _loop_1(i);
        }
    };
    F_TexasView.prototype.ShowCommonAniBy4_5 = function (index) {
        var _this = this;
        console.log("ShowCommonAniBy4_5 === ", index);
        var i = index - 1;
        var cardValue = F_TexasViewCtr_1.default.instance.Model._CommonCard[i];
        console.log("ShowCommonAniBy4_5  cardValue  === ", cardValue);
        if (!cardValue || cardValue <= 0)
            return;
        F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
        this._CommonCardImageList[i].Hide();
        this._CommonCardImageList[i].Reset();
        var tempGo = this._CommonCardImageList[i].node;
        var tempCard = this._CommonCardImageList[i];
        tempGo.stopAllActions();
        this.moveN1toN2(tempGo, this.cc_pos[i].node);
        var tempIdx = i;
        this.show4card = i == 3;
        this.show5card = i == 4;
        tempGo.anchorX = 0.5;
        tempGo.anchorY = 0.5;
        tempGo.runAction(cc.sequence(cc.callFunc(function () {
            _this.isSending = true;
            if (_this.show4card)
                _this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
            if (_this.show4card)
                _this.ui_StatusManager.getController("commoncard4").setSelectedIndex(1);
            if (_this.show5card)
                _this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
            if (_this.show5card)
                _this.ui_StatusManager.getController("commoncard5").setSelectedIndex(1);
        }), cc.delayTime(0.2), cc.callFunc(function () {
            tempCard.Show();
            tempCard.SetVal(0);
        }), cc.spawn(cc.scaleTo(0.15, 0, 1), cc.skewTo(0.15, 0, 20)), cc.callFunc(function () {
            tempCard.SetVal(cardValue);
            tempGo.skewY = -20;
        }), cc.spawn(cc.scaleTo(0.15, 1, 1), cc.skewTo(0.15, 0, 0)), cc.callFunc(function () {
            _this.moveN1toN2(tempGo, _this.cc_pos[tempIdx].node);
            if (tempIdx == 3)
                _this.show4card = false;
            if (tempIdx == 4)
                _this.show5card = false;
            _this.curCommondCards = F_TexasViewCtr_1.default.instance.Model._CommonCard.slice(0, tempIdx + 1);
            _this.ShowSelfMaxCards();
            _this.isSending = false;
            _this.showCardIndex = index;
        }), cc.delayTime(1), cc.callFunc(function () {
            _this.showCommonAni();
        })));
    };
    /// <summary>
    /// ??????????????????????????????
    /// </summary>
    /// <param name="delayTime"></param>
    F_TexasView.prototype.ShowCommonAniBy45 = function (delayTime4, delayTime5) {
        var _this = this;
        var _loop_2 = function (i) {
            // console.error("getNumberOfRunningActions =" + this._CommonCardImageList[i].node.getNumberOfRunningActions());
            // if (this._CommonCardImageList[i].node.getNumberOfRunningActions() > 0) {
            //     continue;
            // }
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            this_2._CommonCardImageList[i].Reset();
            this_2._CommonCardImageList[i].Hide();
            if (i + 1 > F_TexasViewCtr_1.default.instance.Model._CommonCard.length) {
                return "continue";
            }
            var timeout = setTimeout(function () {
                var tempGo = _this._CommonCardImageList[i].node;
                var tempCard = _this._CommonCardImageList[i];
                tempCard.Show();
                tempGo.stopAllActions();
                _this.moveN1toN2(tempGo, _this.cc_pos[i].node);
                tempCard.SetVal(0);
                var cardValue = F_TexasViewCtr_1.default.instance.Model._CommonCard[i];
                var tempIdx = i;
                _this.show4card = i == 3;
                _this.show5card = i == 4;
                tempGo.anchorX = 0.5;
                tempGo.anchorY = 0.5;
                tempGo.runAction(cc.sequence(cc.callFunc(function () {
                    if (_this.show4card)
                        _this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
                    if (_this.show4card)
                        _this.ui_StatusManager.getController("commoncard4").setSelectedIndex(1);
                    if (_this.show5card)
                        _this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
                    if (_this.show5card)
                        _this.ui_StatusManager.getController("commoncard5").setSelectedIndex(1);
                }), cc.delayTime(0.2), cc.spawn(cc.scaleTo(0.15, 0, 1), cc.skewTo(0.15, 0, 20)), cc.callFunc(function () {
                    tempCard.SetVal(cardValue);
                    tempGo.skewY = -20;
                }), cc.spawn(cc.scaleTo(0.15, 1, 1), cc.skewTo(0.15, 0, 0)), cc.callFunc(function () {
                    _this.moveN1toN2(tempGo, _this.cc_pos[tempIdx].node);
                    if (tempIdx == 3)
                        _this.show4card = false;
                    if (tempIdx == 4)
                        _this.show5card = false;
                    _this.curCommondCards = F_TexasViewCtr_1.default.instance.Model._CommonCard.slice(0, tempIdx + 1);
                    _this.ShowSelfMaxCards();
                    if (_this.show5card) {
                        // this.ShowCommonAniBy45(0, 1);
                    }
                })));
            }, (i == this_2._CommonCardImageList.length - 1 ? delayTime5 : delayTime4) * 1000);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        };
        var this_2 = this;
        for (var i = this.curCommondCards.length; i < this._CommonCardImageList.length; i++) {
            _loop_2(i);
        }
    };
    /// <summary>
    /// ?????????????????????????????????????????????
    /// </summary>
    F_TexasView.prototype.ShowSelfMaxCards = function () {
        var _this = this;
        if (F_TexasViewCtr_1.default.instance.Model.delay == 1) {
            if (!this.ismyturn)
                return; //???????????????????????????????????????????????????????????????????????????                
        }
        this.selectFiveCards = [];
        this.maxCards = [];
        this._bftable.userList.forEach(function (tempUser) {
            if (tempUser == null)
                return true;
            //???????????????????????????playing???????????????????????????????????????????????????????????????????????????????????????&& F_TexasViewCtr.instance.Model.isGaming
            if (tempUser.self && !tempUser.IsWatch() && tempUser.IsPlaying() && !tempUser.IsKeep()) {
                console.log("this.model._ShouPai == ", _this.model._ShouPai);
                console.log("this.curCommondCards == ", _this.curCommondCards);
                _this.selectFiveCards = Texas_1.Texas.GetFiveFromSeven(_this.model._ShouPai, _this.curCommondCards, _this.model._ShouPai.length + _this.curCommondCards.length);
                console.log("selectFiveCards=" + _this.selectFiveCards);
                if (_this.selectFiveCards.length >= 2) //?????????5??????????????????????????????2???????????????????????????????????? 
                 {
                    _this.maxCards = Texas_1.Texas.GetMaxTypeCards(_this.selectFiveCards);
                    tempUser.ShowMaxCards(_this.selectFiveCards, _this.maxCards);
                    _this.showCommonMaxCards(_this.maxCards);
                    _this.ui_curTexastype.visible = true;
                    var _type = Texas_1.Texas.GetTexasType(_this.selectFiveCards);
                    if (_this.selectFiveCards.length == 2) //???????????????????????????????????????????????????
                     {
                        if (_type == Texas_1.PokerTexasType.Five_ONE_PAIR) {
                            _this.ui_txtcurtexastype.text = Texas_1.Texas.GetNameByType(_type);
                        }
                        else {
                            _this.ui_txtcurtexastype.text = Texas_1.Texas.GetNameByType(Texas_1.PokerTexasType.Five_Single);
                        }
                    }
                    else {
                        _this.ui_txtcurtexastype.text = Texas_1.Texas.GetNameByType(_type);
                    }
                }
            }
        });
    };
    F_TexasView.prototype.showCommonMaxCards = function (maxCards) {
        var _this = this;
        this._CommonCardImageList.forEach(function (temp) {
            if (_this.selectFiveCards.indexOf(temp.Value) == -1) {
                temp.SetColorGary();
            }
            else {
                temp.ResetColor();
            }
            temp.ShowMaxCardBg(maxCards.indexOf(temp.Value) >= 0);
        });
    };
    /// <summary>
    /// ?????????????????????
    /// </summary>
    /// <returns></returns>
    F_TexasView.prototype.GetNextEmptyPos = function () {
        return null;
    };
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <returns></returns>
    F_TexasView.prototype.GetAllPos = function () {
        var list = [];
        return list;
    };
    F_TexasView.prototype.IsShowMyAction = function (isShow) {
        this.ui_btns.visible = isShow;
        this.ui_selfEndtimetips.visible = (this.ui_btns.visible && this.ui_btnqipai.visible);
        this.ShowDelay(this.ui_selfEndtimetips.visible);
    };
    F_TexasView.prototype.MineExecute = function (_isMine, turnChange) {
        console.log("===??????????????????==" + _isMine);
        if (_isMine) {
            console.log("IsCanHandleAction === ", this.IsCanHandleAction());
            if (this.IsCanHandleAction()) {
                if (this.isAutoQiPai) {
                    this.ShowActionBtns(false);
                    this.AutoQiPai();
                    this.SetAutoGamble(!this.isAutoQiPai); //?????????/???????????????????????????/???
                    this.SetAutoQiPai(false);
                }
                else if (this.isAutoFollow && this.GetFollowMinGamble() <= 0) //????????????
                 {
                    this.ShowActionBtns(false);
                    this.AutoGambleGold();
                    this.SetAutoGamble(!this.isAutoFollow); //???????????????????????????????????????
                    this.SetAutoQiPai(false);
                }
                else {
                    this.SetAutoGamble(false);
                    this.SetAutoQiPai(false);
                    this._bftable.myUser.SetLastSite();
                    if (this.historyComp)
                        this.historyComp.Hide();
                    AudioManager_1.AudioManager.Singleton.play("", "game_myturn", false);
                    console.log("this.model.insList31 = ", this.model.insList31);
                    console.log("this.model.insList32 = ", this.model.insList32);
                    if (!this.model.insList31 && !this.model.insList32) {
                        this.HandleActionBtnsForSelfTurn(turnChange);
                    }
                    this.ShowDelay(true);
                }
                // let isShowCard: boolean = false;
                // if (this.model.delay == 1 && !this.ismyturn) {
                //     this.ismyturn = true;
                // } else {
                //     isShowCard = true;
                // }
                // if (isShowCard)//????????????????????????????????????????????????????????????????????????????????????????????????
                // {
                var _tempUser = this._bftable.userList.find(function (item) { return item.self == true; });
                if (_tempUser != null && _tempUser.player != null) {
                    for (var i = 0; i < this.model._ShouPai.length; i++) {
                        var index = i;
                        var _poker = 0;
                        if (_tempUser.self)
                            _poker = this.model._ShouPai[i];
                        var card = _tempUser.GetCard(index);
                        if (card == null) {
                            console.log("fetal error: SendCard is null");
                            return;
                        }
                        console.log("2222222222====", _poker);
                        _tempUser.SetCardVal_pub(card, _poker);
                        this.IsShowMyAction(true);
                    }
                }
                // }
                //?????? ???????????????????????????????????????????????????????????????????????????bug
                // if (this.ui_btns.visible) {
                //     var _tempUser: TexasUserComp = this._bftable.userList.find(item => { return item.self == true });
                //     if (_tempUser != null && _tempUser.player != null) {
                //         for (var i = 0; i < this.model._ShouPai.length; i++) {
                //             let index = i;
                //             let _poker = this.model._ShouPai[i];
                //             let card: CardRedbetComp = _tempUser.GetCard(index);
                //             if (card == null) { console.log("fetal error: SendCard is null"); return; }
                //             console.log("33333333====", _poker);
                //             _tempUser.SetCardVal_pub(card, _poker);
                //         }
                //     }
                // }
            }
            if (this.IsSelfWatch()) {
                console.log("??????????????? ????????????????????????");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("?????????????????? ????????????????????????");
            }
        }
        else {
            this.Wait(); //????????????????????????
            //???????????????,????????????????????????,????????????????????????
            if (this.IsCanHandleAction()) {
                this.HandleActionBtnsForOtherTurn();
            }
        }
    };
    F_TexasView.prototype.MineInsuranceExecute = function (_isMine) {
        var _this = this;
        if (_isMine) {
            if (this.IsCanHandleAction()) {
                this._bftable.myUser.SetLastSite();
                AudioManager_1.AudioManager.Singleton.play("", "game_myturn");
                //???????????????????????????
                var timeout = setTimeout(function () {
                    _this.HandleInsuranceBtnsForSelfTurn();
                }, 1000);
                TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
                this.ShowDelay(true); //??????????????????????????????
            }
            if (this.IsSelfWatch()) {
                console.log("??????????????? ????????????????????????");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("?????????????????? ????????????????????????");
            }
        }
        else {
        }
    };
    F_TexasView.prototype.ShowDelay = function (isShow) {
        this.ui_delayAdd.visible = (isShow && F_TexasViewCtr_1.default.instance.Model.delayCount < 5); //???????????????????????????,??????????????????????????????5???
        this.ui_insDelayAdd.visible = (isShow && F_TexasViewCtr_1.default.instance.Model.delayCount < 5); //???????????????????????????,??????????????????????????????5???
        if (isShow) {
            var delayCost = this.ui_delayAdd.getChild("Text").asTextField;
            var expend = this.getDelayExpend();
            // console.log("expend === ", expend);
            // delayCost.text = F_TexasViewCtr.instance.Model.delayCount == -1 ? TexasLanguage.getLanguageById(2181) : (20.0 * (UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr.instance.Model.delayCount)))).toString();//-1??????????????????????????????
            delayCost.text = expend;
            this.ui_InsDelayGold.text = delayCost.text;
            this.ui_InsCntDown.text = "+15s";
        }
    };
    // ??????????????????
    F_TexasView.prototype.getDelayExpend = function () {
        var expend = 0;
        var count = F_TexasViewCtr_1.default.instance.Model.delayCount;
        if (count == -1) {
            return TexasLanguage_1.TexasLanguage.getLanguageById(2181);
        }
        console.log("this.model.brate == ", this.model.brate);
        var brate = UIUtil_1.UIUtil.formatNumber100(this.model.brate);
        if (brate < 1) { //???
            expend = 20;
        }
        else if (brate == 1 || brate == 2 || brate == 5) { //???
            expend = 200;
        }
        else if (brate == 10 || brate == 25 || brate == 50) { //???
            expend = 500;
        }
        else if (brate == 100 || brate == 200 || brate == 500) { //???
            expend = 1000;
        }
        var expendStr = (UIUtil_1.UIUtil.formatNumber100(expend) * (UIUtil_1.UIUtil.NumberToInt(Math.pow(2, count)))).toFixed(2);
        return expendStr;
    };
    F_TexasView.prototype.Wait = function () {
        this.ShowDelay(false);
        this.hideUIAllBtns();
    };
    F_TexasView.prototype.hideUIAllBtns = function () {
        this.ShowConfirmHandlePanel(false);
        this.ShowActionBtns(false);
        this.StopClock();
        if (this.IsCanHandleAction() && !this.model.isinsurance) {
            this.ShowActionAuto(true);
        }
        this.CheckBtnBackTableState();
        this.Action = false;
    };
    //???????????????????????????
    F_TexasView.prototype.ShowClock = function (cdTime, totalTime, isShowText, formatTime) {
        var _this = this;
        if (cdTime === void 0) { cdTime = 15; }
        if (totalTime === void 0) { totalTime = 15; }
        if (isShowText === void 0) { isShowText = true; }
        if (formatTime === void 0) { formatTime = null; }
        if (this.model.isinsurance)
            formatTime = ""; //??????
        else
            formatTime = TexasLanguage_1.TexasLanguage.getLanguageById(1395) + "\n"; //??????
        var cd = cdTime;
        this.endTime = UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000) + cdTime;
        this.ui_selfEndtimetips.fillAmount = cd / totalTime + 0.01;
        this.showUICountTimeText(isShowText, cd, formatTime);
        this.ui_selfEndtimetips.node.stopAllActions();
        this.ui_selfEndtimetips.node.stopAllActions();
        // this.ui_selfEndtimetips.DOFillAmount (0, cd).SetEase (Ease.Linear);
        if (cd > 5)
            AudioManager_1.AudioManager.Singleton.stopEffect("texas_timeout"); //???????????????>5?????????5???????????????
        this.schedule(function () {
            cd = UIUtil_1.UIUtil.NumberToInt(_this.endTime - UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000));
            if (isShowText) {
                if (formatTime == null) {
                    _this.ui_selfEndtimetipsText.text = cd + "";
                }
                else {
                    _this.ui_selfEndtimetipsText.text = formatTime + cd;
                }
            }
            // ????????????5???????????????
            if (cd == 5) {
                AudioManager_1.AudioManager.Singleton.play("", "texas_timeout");
            }
        }, 1, cd);
    };
    //???????????????
    F_TexasView.prototype.showUICountTimeText = function (isShow, time, formatTime) {
        if (isShow === void 0) { isShow = true; }
        if (time === void 0) { time = 15; }
        if (formatTime === void 0) { formatTime = null; }
        this.ui_selfEndtimetips.visible = (isShow && ((this.ui_btns.visible && this.ui_btnqipai.visible) || this.ui_BtnInsurancePanel.visible));
        if (isShow && time != -9999) {
            this.ui_selfEndtimetipsText.text = formatTime + ""; //string.Format (formatTime, time);
        }
    };
    F_TexasView.prototype.StopClock = function (isForce) {
        if (isForce === void 0) { isForce = false; }
        // AudioManager.Singleton.removeSound(timeUpId);
        this.ui_selfEndtimetips.node.stopAllActions();
        // this.ui_selfEndtimetips.transform.DOKill ();
        this.showUICountTimeText(false);
    };
    // ?????? 
    // public FaPai_n(_myCards: number[]) {
    //     let _tempUserList: TexasUserComp[] = this._bftable.userList;
    //     for (var i = 0; i < F_TexasView._cardNum; i++) {
    //         let caechcout = 0;
    //         for (var j = 0; j < _tempUserList.length; j++) {
    //             let _tempUser: TexasUserComp = _tempUserList[j];
    //             if (_tempUser.player == null) continue;
    //             caechcout++;
    //             let index = i;
    //             let _poker = 0;
    //             if (_tempUser.self) _poker = _myCards[i];
    //             this.scheduleOnce(() => {
    //                 _tempUser.SendCard(index, _poker);
    //             }, i * 0.2 + caechcout * 0.1);
    //         }
    //     }
    // }
    // public FaPai_nb(_myCards: number[], isAnim: boolean) {
    //     if (!this.model.isGaming) { return; }
    //     if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) { return; } //??????????????????????????? 
    //     //_myCards ?????? ?????????????????????????????????????????????????????????????????????
    //     let count = 0;
    //     let _tempUserList: TexasUserComp[] = this._bftable.userList;
    //     for (var i = 0; i < F_TexasView._cardNum; i++) {
    //         let userIndex = 0;
    //         for (var j = 0; j < this.model.PlayingUsers.length; j++) {
    //             let playingUser: CommonPosValSD = this.model.PlayingUsers[j];
    //             if (playingUser.val <= 0)
    //                 continue; //???????????????????????????0
    //             let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(playingUser.pos);
    //             if (_tempUser == null || _tempUser.player == null) continue;
    //             if (_tempUser.curCardIndex >= i) { continue; }
    //             if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) { continue; }
    //             if (_tempUser.userConnectState == UserConnectState.keepSeat) { continue; }
    //             userIndex++;
    //             count++;
    //             let index = i;
    //             let _poker = 0;
    //             if (_tempUser.self && _myCards != null && i < _myCards.length) _poker = _myCards[i];
    //             let delay = isAnim ? count * this.countInterval + userIndex * this.userInterval : 0;
    //             this.SendUserCard(_tempUser, delay, index, _poker, null, false);
    //             // console.error("playingUser.pos = "+ _tempUser.serverpos);
    //             // this.sendCardAni[_tempUser.serverpos].visible = false;
    //         }
    //     }
    //     // this.ui_UserManager.getController("sendCard").setSelectedIndex(0);
    //     // this.ui_UserManager.getController("sendCard").setSelectedIndex(1);
    //     if (isAnim)
    //         this.PlaySendCardAudio(count);
    // }
    F_TexasView.prototype.FaPai_nb = function (_myCards, isAnim) {
        if (!this.model.isGaming) {
            return;
        }
        if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) {
            return;
        } //??????????????????????????? 
        //_myCards ?????? ?????????????????????????????????????????????????????????????????????
        var count = 0;
        for (var j = 0; j < this.model.PlayingUsers.length; j++) {
            var userIndex = 0;
            for (var i = 0; i < F_TexasView_1._cardNum; i++) {
                var playingUser = this.model.PlayingUsers[j];
                if (playingUser.val <= 0)
                    continue; //???????????????????????????0
                var _tempUser = this._bftable.GetUserByUserId(playingUser.pos);
                if (_tempUser == null || _tempUser.player == null)
                    continue;
                if (_tempUser.curCardIndex >= i) {
                    continue;
                }
                if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) {
                    continue;
                }
                if (_tempUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
                    continue;
                }
                userIndex++;
                var index = i;
                var _poker = 0;
                if (_tempUser.self && _myCards != null && i < _myCards.length)
                    _poker = _myCards[i];
                var delay = isAnim ? this.countInterval + this.userInterval : 0;
                this.SendUserCard(_tempUser, delay, index, _poker, null, false);
            }
        }
        if (isAnim)
            this.PlaySendCardAudio(count);
    };
    F_TexasView.prototype.SendOpenCard = function (isAnim) {
        var _this = this;
        if (this.model._CurTurnCount < 2) {
            return;
        }
        var count = 0;
        var _loop_3 = function () {
            if (2 + i <= this_3.curSendCardIndex) {
                return "continue";
            } //??????????????????????????????     
            this_3.curSendCardIndex = 2 + i; //2 ?????? ????????????
            var userIndex = 0;
            F_TexasViewCtr_1.default.instance.Model._pos2openPai.forEach(function (p2card) {
                var user = _this._bftable.GetUserByPos(p2card.pos);
                if (p2card == null || user == null || user.player == null) {
                    return true;
                }
                if (p2card.vallist.length > i) {
                    var cardIndex = 2 + i;
                    userIndex++;
                    count++;
                    var delay = isAnim ? count * _this.countInterval + userIndex * _this.userInterval : 0;
                    _this.SendUserCard(user, delay, cardIndex, p2card.vallist[0], p2card.vallist, true);
                }
            });
        };
        var this_3 = this;
        for (var i = 0; i < this.model._CurTurnCount - 1 && i < 2; i++) {
            _loop_3();
        }
        //PlaySendCardAudio(count);
    };
    F_TexasView.prototype.SendUserCard = function (_tempUser, delay, cardIndex, poker, openPai, isAudio) {
        if (_tempUser.player == null)
            return;
        if (_tempUser.curCardIndex >= cardIndex) {
            return;
        }
        var _cardIndex = cardIndex;
        var _poker = poker;
        if (delay > 0) {
            this.scheduleOnce(function () {
                if (isAudio) {
                    AudioManager_1.AudioManager.Singleton.play("", "game_deal");
                }
                _tempUser.SendCard(_cardIndex, _poker, true, openPai);
            }, delay);
        }
        else {
            _tempUser.SendCard(_cardIndex, _poker, false, openPai);
        }
    };
    F_TexasView.prototype.FaPaiNoAni = function (_myCards) {
        if (!this.model.isGaming) {
            return;
        }
        if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) {
            return;
        } //???????????????????????????
        var _loop_4 = function () {
            var caechcout = 0;
            this_4._bftable.userList.forEach(function (_tempUser) {
                if (_tempUser == null || _tempUser.player == null)
                    return true;
                if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn())
                    return true;
                if (_tempUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat)
                    return true;
                caechcout++;
                var index = i;
                var _poker = 0;
                if (_tempUser.self)
                    _poker = _myCards[i];
                _tempUser.SendCardNoAni(index, _poker);
            });
        };
        var this_4 = this;
        for (var i = 0; i < F_TexasView_1._cardNum; i++) {
            _loop_4();
        }
    };
    // ?????????????????? 
    F_TexasView.prototype.GiveUp = function (pos) {
        if (this._bftable == null)
            return;
        var user = this._bftable.GetUserByPos(pos);
        if (user == null)
            return;
    };
    // #region
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_gamble_tex = function (data) {
    };
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_insurance_tex = function (data) {
        if (this.insTimerCB) {
            this.unschedule(this.insTimerCB);
            this.ui_BtnInsurancePanel.visible = false;
        }
    };
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_giveup_tex = function (data) {
        this.hideUIAllBtns();
    };
    /// <summary>
    /// ???????????????
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_tablestart_tex_n = function (_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, isReback, pos2strad) {
        var _this = this;
        this._isCanOutGold = false;
        this.isHaveAddGold = false;
        this.isfirst = false;
        this.ismyturn = false;
        this.dichi = 0;
        this.showCardIndex = 0;
        this.show3cards = false;
        this.show4card = false;
        this.show5card = false;
        this.curCommondCards = [];
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ShowUILeftCards(false, false);
        this.StartGamingTimer(remainTime);
        this.unschedule(this.endTimer); //TimeInfoMgr.instance.StopTimer (this.endTimer);
        this.unschedule(this.timeOutTimer); //TimeInfoMgr.instance.StopTimer ((this.timeOutTimer);
        // console.log("[Progress: --- start ] sc_tablestart_tex_n  ");
        this.model.SetRemainTime(remainTime);
        F_TexasViewCtr_1.default.instance.Model.isGamestart = true;
        this.HideUIWaitPlayPanel();
        // ui_btnStart.gameObject.SetActive (false);
        this.ResetUI();
        this.hideUIAllBtns();
        this.ShowUIJackpot();
        this.UpdateJackpot();
        AudioManager_1.AudioManager.Singleton.play("", "game_chips_to_table");
        this.model._lastjpot = 0;
        var lastJport = 0;
        _pos2Gamble.forEach(function (_gamble) {
            _this.model.SetUserData_isW_pos(_gamble.pos, _gamble.val > 0 ? 0 : 1); //????????????
            _this.sc_tablestartgamble_tex_n(_gamble.pos, UIUtil_1.UIUtil.NumberToInt(_gamble.val), false, _bankerPos); //?????????????????????????????????
            lastJport += UIUtil_1.UIUtil.NumberToInt(_gamble.val);
        });
        //?????????????????????????????????????????????
        var firstdata = _pos2Bigsmall.reduce(function (i1, i2) { return i1.val < i2.val ? i1 : i2; });
        var firstUser = this._bftable.GetUserByUserId(firstdata.pos);
        if (firstUser != null && firstUser.self) {
            this.isfirst = true;
        }
        if (isReback) {
            this.moveMyGambleToTableGameble();
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            this.UpdateLastJpot(lastJport); //???????????? ???????????????????????????????????????????????????
            this.UpdateJackpot(lastJport); //???????????? ?????????????????????????????????????????????
            this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
        }
        else { //????????????????????????????????????????????????????????????
            this.scheduleOnce(function () {
                _this.moveMyGambleToTableGameble();
                F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
                _this.UpdateLastJpot(lastJport); //???????????? ???????????????????????????????????????????????????
                _this.UpdateJackpot(lastJport); //???????????? ?????????????????????????????????????????????
            }, 0.2);
            //???????????????????????????????????????????????????????????????????????????
            this.scheduleOnce(function () {
                _this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
            }, this.moveToTableTime + 0.2);
        }
        //?????????????????????????????????stradlle????????????????????????
        for (var i = 0; i < _pos2Gold.length; i++) {
            var user = _pos2Gold[i];
            var _tempUser = this._bftable.GetUserByUserId(user.pos);
            if (_tempUser == null)
                continue;
            if (_tempUser.player != null) {
                _tempUser.UpdateMoney(UIUtil_1.UIUtil.NumberToInt(user.val));
            }
            if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) {
                continue;
            }
            _tempUser.ShowUIReady(false);
            _tempUser.ShowUIWatch(false);
            _tempUser.ShowUIWiatTakeIn(false);
            if (_tempUser.serverpos == _bankerPos) {
                _tempUser.SetBanker(true);
            }
            else {
                _tempUser.SetBanker(false);
            }
            if (_tempUser.self && this._bftable.myUser != null) {
            }
        }
        // aof????????????????????????????????????????????????allin
        this.scheduleOnce(function () {
            for (var i = 0; i < _pos2Gamble.length; i++) {
                var gamble = _pos2Gamble[i];
                for (var index = 0; index < _pos2Gold.length; index++) {
                    var user = _pos2Gold[index];
                    if (user.pos == gamble.pos) {
                        if (user.val == 0 && gamble.val > 0) { // ??????allin
                            var _tempUser = _this._bftable.GetUserByUserId(user.pos);
                            if (_tempUser) {
                                AudioManager_1.AudioManager.Singleton.play("", "texas_qiao");
                                _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.allin);
                            }
                        }
                    }
                }
            }
        }, 0.5);
    };
    /// <summary>
    /// ???????????????????????????????????????????????????????????????????????????????????????
    /// </summary>
    /// <param name="_bankerPos"></param>
    /// <param name="_showCard"></param>
    /// <param name="_pos2Gamble"></param>
    /// <param name="_pos2Gold"></param>
    /// <param name="_pos2Bigsmall"></param>
    /// <param name="remainTime"></param>
    F_TexasView.prototype.fapaiAfterFirstGambleAni = function (_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastjport, pos2strad) {
        var _this = this;
        var dxJport = 0;
        _pos2Bigsmall.forEach(function (_bigsmall) {
            _this.sc_tablestartgamble_tex_n(_bigsmall.pos, UIUtil_1.UIUtil.NumberToInt(_bigsmall.val), false, _bankerPos);
            dxJport += UIUtil_1.UIUtil.NumberToInt(_bigsmall.val);
        });
        this.UpdateJackpot(dxJport + lastjport); //?????????????????? ?????????????????????????????????????????????????????????
        //stradlle??????????????????????????????stradlle,???????????????????????????stradlle
        if (_pos2Bigsmall.length > 2) {
            var stradlle = _pos2Bigsmall.reduce(function (i1, i2) { return i1.val > i2.val ? i1 : i2; });
            var stradlleUser = this._bftable.GetUserByUserId(stradlle.pos);
            if (stradlleUser != null) {
                stradlleUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.stradlle);
            }
        }
        //?????????
        if (pos2strad != null) {
            for (var i = 0; i < pos2strad.length; i++) {
                var _tempUser = this._bftable.GetUserByUserId(pos2strad[i].pos);
                if (_tempUser != null) {
                    _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.strad);
                    _tempUser.GenerateChip_nbb(pos2strad[i].val, false, false);
                    console.error(_tempUser.player._n + "????????????" + pos2strad[i].val);
                }
            }
        }
        console.log("fapaiAfterFirstGambleAni _showCard === ", _showCard);
        this.FaPai_nb(_showCard, true);
        this.curSendCardIndex = 1;
    };
    /// <summary>
    /// ????????????
    /// </summary>
    F_TexasView.prototype.sc_ready_tex = function (data) {
        this.curSendCardIndex = 0;
    };
    F_TexasView.prototype.sc_ready_tex_n = function (data) {
    };
    // ???????????? 
    F_TexasView.prototype.sc_end_tex_n = function (data) {
        var _this = this;
        //#region ????????????
        data._pos2ShouPai.forEach(function (_shoupai) {
            var winer = _this._bftable.GetUserByUserId(_shoupai.pos);
            if (winer == null)
                return true;
            winer.ShowCard(_shoupai.vallist); //???????????????????????????????????????
        });
        data._pos2MaxPai.forEach(function (_shoupai) {
            var _tUser = _this._bftable.GetUserByUserId(_shoupai.pos);
            if (_tUser == null)
                return true;
            _tUser.ShowMaxCard(_shoupai.vallist); //???????????????????????????????????????
            _tUser.SetShowStateGray();
        });
        if ((data._pos2ShouPai == null || data._pos2ShouPai.length <= 0) && data.Showcard != null && data.Showcard.length > 0) //????????????????????????
         {
            data.Showcard.forEach(function (_showpaiUser) {
                var _tUser = _this._bftable.GetUserByUserId(_showpaiUser.uid);
                if (_tUser == null || _tUser.self || _showpaiUser.cards == null || _showpaiUser.cards.length <= 0)
                    return true;
                _tUser.DisplayShowCard(_showpaiUser.cards); //????????????
            });
        }
        this.ismyturn = false;
        console.log("[Progress: --- game over ] sc_end_whi_n  :");
        this.HandleTableAndUserData_end(data, this.moveToTableTime + 0.15 + this.moveToUserTime);
        this.HandleTableUI_end(data);
        this.HandleTableAnimation_end(data);
    };
    F_TexasView.prototype.HandleTableAndUserData_end = function (data, delayShowTime) {
        var _this = this;
        this.curSendCardIndex = 0;
        this.model.SetMinStartGamble(data.limitgold);
        //???????????????,???????????????????????????????????????????????????????????????????????????????????????
        if (this.model.clubid > 0 && this.model.IsSupper) {
            this.model.cgold = data.ugold; //???????????????????????????????????????
            // if (this.model.curSClub != null)//???????????????????????????????????????????????????
            // ClubViewCtr.instance.UpdateClubInfocgold(this.model.curSClub.cid, data.ugold);
            // else
            //     console.log("club is null"); 
        }
        else {
            // LobbyViewCtr.instance.sc_freshgold_n(2, data.ugold); //???????????????????????????data.pos2gold?????????????????????
        }
        data._pos2GoldWin.forEach(function (item) {
            if (item.val > 0) {
                var userComp = _this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("HandleTableAndUserData_end  userComp == null item.pos=" + item.pos);
                }
            }
        });
        //??????????????????
        data._pos2Gold.forEach(function (_tempgold) {
            var p = _this._bftable.GetUserByUserId(_tempgold.pos);
            if (p == null)
                return true;
            p.allinGamble = 0;
            p.GameOver(UIUtil_1.UIUtil.NumberToInt(_tempgold.val));
            if (p.self) {
                F_TexasViewCtr_1.default.instance.Model.MyEndMoney = UIUtil_1.UIUtil.NumberToInt(_tempgold.val);
                _this.model.SetLockGold(UIUtil_1.UIUtil.NumberToInt(_tempgold.val));
            }
        });
        //???????????????????????????
        data._watchlist.forEach(function (_watch) {
            var _tUser = _this._bftable.GetUserByUserId(_watch.pos);
            if (_tUser == null)
                return true;
            if (_watch.val == 1) {
                if (_tUser.player != null) {
                    _this.model.SetUserData_isW(_tUser.player.userid, 1); //????????????
                }
            }
        });
        //?????????????????????
        var keeplist = data._keeplist;
        if (this.model.id2keep.length > 0) {
            keeplist = this.model.id2keep;
        }
        if (keeplist != null) {
            keeplist.forEach(function (item) {
                var _tUser = _this._bftable.GetUserByUserId(item.pos);
                if (_tUser == null)
                    return true;
                if (item.val == 0) {
                    //?????????
                }
                else if (item.val > 0) {
                    if (_tUser.player != null) {
                        console.log("_keeplist ----- ?????????????????????");
                        // ?????????????????????????????????????????????
                        _this.model.SetUserData_isW(_tUser.player.userid, 1); //????????????
                        _this.model.SetUserData_isK(_tUser.player.userid, UIUtil_1.UIUtil.NumberToInt(item.val - delayShowTime)); //????????? ??????????????? ????????????                         
                        _tUser.update_UserInfo(_tUser.userInfo);
                    }
                    _tUser.SetUseConnectState(TexasUserComp_1.UserConnectState.keepSeat);
                }
                else { //??????????????????????????????????????????????????????
                    // this.model.RemovePlayerList(_tUser.player.userid);
                }
            });
        }
        this.UpdateJackpot(data._jackpot); // ????????????????????????
        this.UpdateLastJpot(data._jackpot); //????????????????????????????????????
        //??????id2kepp??????
        this.model.id2keep = [];
    };
    // ???????????????????????????
    F_TexasView.prototype.dealEndLeaveData = function (data) {
        var _this = this;
        //?????????????????????
        if (data._keeplist != null) {
            data._keeplist.forEach(function (item) {
                var _tUser = _this._bftable.GetUserByUserId(item.pos);
                if (_tUser == null)
                    return true;
                if (item.val == 0) {
                }
                else if (item.val > 0) {
                }
                else { //??????????????????????????????????????????????????????
                    // console.error("remove --- ", _tUser.player.userid);
                    _this.model.RemovePlayerList(_tUser.player.userid);
                }
            });
        }
    };
    F_TexasView.prototype.HandleTableUI_end = function (data) {
        this.ui_btnqipai.visible = false;
        this.ui_curTexastype.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.ShowDelay(false);
        this.SetAutoQiPai(false);
        this.SetAutoGamble(false);
        this.ShowActionBtns(false);
        this.hideUIAllBtns();
        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //??????????????????    
        this.isCanXiuPai = data._pos2ShouPai.length < data._pos2GoldWin.length; //???????????????????????????(????????????????????????????????????????????????????????? ???????????????)
        this.ShowUILeftCards(this.isCanXiuPai, this.isCanSeeLeftCards);
        //????????????????????????
        this.ShowUIWaitPlayPanel();
    };
    F_TexasView.prototype.HandleTableAnimation_end = function (data) {
        this.setResultWinGold(data._pos2GoldWin); //???????????????????????????
        this.CheckShowBigWin(data._pos2Score); //??????bigwin
        this.moveMyGambleToTableGameble(data._pos2GoldWin); //????????????
        this.DelayMoveTableGambleToWiner(this.moveToTableTime + 0.1, data._pos2GoldWin); //????????????
        this.delayHandleUserUIAfterAnimation(this.moveToTableTime + 0.2 + this.moveToUserTime, data);
        this.HandleTimeOutUserUI(3, data);
    };
    F_TexasView.prototype.CheckShowBigWin = function (_pos2Score) {
        for (var i = 0; i < _pos2Score.length; i++) {
            var comparesd = _pos2Score[i];
            var _tempUser = this._bftable.GetUserByUserId(comparesd.pos);
            if (_tempUser != null) {
                if (_tempUser.self) {
                    if (comparesd.bigwin > 0) {
                        this.ShowEftBigWin(comparesd.bigwin);
                    }
                }
                if (comparesd.claim > 0) {
                    _tempUser.endShowInsClaim(comparesd.claim);
                }
            }
        }
    };
    F_TexasView.prototype.delayHandleUserUIAfterAnimation = function (delayTime, data) {
        var _this = this;
        this.endTimer = TimeInfoMgrTex_1.default.instance.AddTimer(delayTime, function () {
            if (!_this.model.isGaming && _this._bftable) //&& RootObject != null) 
             {
                _this._bftable.userList.forEach(function (user) {
                    if (user.player == null) {
                        user.ClearUser(); //?????????????????????  
                    }
                    else {
                        var existUser = _this.model.GetUserInfo(user.player.userid);
                        if (existUser == null) {
                            _this.RemoveUser(user.player.userid);
                        }
                        else {
                            //?????????????????????????????????????????????
                            if (user.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
                                // this.TabeleEndSetKeep(user);
                            }
                        }
                    }
                });
            }
        });
    };
    F_TexasView.prototype.HandleTimeOutUserUI = function (delayTime, data) {
        var _this = this;
        this.timeOutTimer = TimeInfoMgrTex_1.default.instance.AddTimer(delayTime, function () {
            if (!_this.model.isGaming) // && RootObject != null) 
             {
                var readyCount = _this.model.GetReadyCount();
                //console.log("???????????? ?????????????????????");
                if (_this._bftable) {
                    _this._bftable.userList.forEach(function (user) {
                        if (user.player == null) {
                            user.ClearUser(); //?????????????????????  
                        }
                        else {
                            var existUser = _this.model.GetUserInfo(user.player.userid);
                            if (existUser == null) {
                                _this.RemoveUser(user.player.userid);
                            }
                            else {
                                //?????????????????????????????????????????????
                                if (user.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
                                    user.ResetPlayingUI(); //??????????????????????????????
                                    _this.TabeleEndSetKeep(user);
                                }
                                else {
                                    user.SetStateUserWait();
                                }
                            }
                        }
                    });
                }
                _this.ui_CommonCards.visible = false;
                _this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
                _this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
                _this.ui_curTexastype.visible = false;
                _this.curCommondCards = [];
                _this.ShowUILeftCards(false, false);
                _this.ShowUIJackpot(false);
            }
        });
    };
    //#region ????????????
    F_TexasView.prototype.sc_bigend_tex_n = function (data) {
        var _this = this;
        console.log("[Progress: --- big balence ] sc_bigend_whi_n ");
        if (this.model.competeid == 0) {
            this.isBigEnd = true;
            this.scheduleOnce(function () {
                // ?????????????????????
                _this.historyComp.Hide();
                // ??????????????????
                _this.ShowUIBalencePanel(data.bigend, data.isnamger);
                //????????????????????????????????????
            }, 5);
        }
        else {
            this.isCanExeTexMas = false;
            this.scheduleOnce(function () {
                // this.model.table = AppConst.enterTableData;
                // this.model.tableid = AppConst.enterTableData.tableid;
                // this.model.levelid = AppConst.enterTableData.levelid;
                // this.model.palyerlist = AppConst.enterTableData.palyerlist;
                F_TexasViewCtr_1.default.instance.sc_entertablenum_tex(AppConst_1.AppConst.enterTableData);
                _this.HandleTableRecover(AppConst_1.AppConst.enterTableData, AppConst_1.AppConst.enterTableData.palyerlist);
            }, 1);
        }
    };
    // public endtipid: Function = null;
    // public setEndTip(value: number) {
    //     let str: string = UIUtil.formatNumber100(value) + "";
    //     if (value >= 0) {
    //         str = "[color=#00FF00]+" + str + "[/color]";
    //     } else {
    //         str = "[color=#00FF00]" + str + "[/color]";
    //     }
    //     if (this.endtipid != null) {
    //         this.unschedule(this.endtipid);
    //         this.endtipid = null;
    //     }
    // }
    // #endregion 
    F_TexasView.prototype.winChouma = function (_pos, _index, Score, maxCard) {
        if (this._chippoolList == null || this._bftable == null)
            return;
        var _tempUser = this._bftable.GetUserByPos(_pos);
        if (_tempUser != null) {
            _tempUser.winChouma(this._chippoolList[_index]);
        }
    };
    //????????????????????????
    F_TexasView.prototype.ResetAllUsers = function () {
        this.model.SetMyServerPos(0);
        for (var i = 0; i < this._bftable.userList.length; i++) {
            this._bftable.userList[i].ClearUser();
        }
    };
    /// <summary>
    /// ??????????????????
    /// </summary>
    F_TexasView.prototype.sc_entertable_texas_n = function (playerlist) {
        var _this = this;
        if (this.model.palyerlist == null) {
            return;
        }
        // console.log("[Progress: --- enter Room ] sc_entertable_whirl_n  playerCount:" + playerlist.length);
        this.ResetAllUsers();
        // let playerCount = playerlist.length;
        this.model.palyerlist.forEach(function (otheruserinfo) {
            otheruserinfo.isK = otheruserinfo.isK > 0 ? otheruserinfo.isK + 1 : 0;
            if (otheruserinfo.isW == 0 || otheruserinfo.isK > 0 || otheruserinfo.pos < 10) {
                _this.update_UserInfo(otheruserinfo);
            }
        });
        this.CheckMoveToMyPos();
    };
    F_TexasView.prototype.update_UserInfoSitDown = function (user, id2keep, aTime) {
        console.error("sitdown --- ", user.py._n);
        this.model.id2keep = id2keep;
        this.RemoveUser(user.py.userid); //???????????????????????????
        this.model.AddPlayerList(user);
        this.CheckRemainPlayer(id2keep);
        this.model.RemovePos2Apply(user.pos);
        if (aTime > 0) //????????????????????????
         {
            var temp = new cs_base_1.CommonPosValSD();
            temp.val = aTime;
            temp.pos = user.pos;
            this.model.AddPos2ApplyList(temp);
        }
        this.update_UserInfo(user);
        this.CheckMoveToMyPos();
    };
    //?????????????????????????????????????????????????????????????????????????????????????????????
    F_TexasView.prototype.CheckRemainPlayer = function (id2keep) {
        for (var i = 0; i < this.model.palyerlist.length; i++) {
            if (!this.IsInDesk(this.model.palyerlist[i].py.userid, id2keep)) {
                var removeSuccess = this.RemoveUser(this.model.palyerlist[i].py.userid);
                if (removeSuccess) {
                    i--;
                }
            }
        }
    };
    F_TexasView.prototype.IsInDesk = function (userId, id2keep) {
        var isIn = false;
        if (id2keep != null) {
            id2keep.forEach(function (item) {
                if (item.pos == userId) {
                    isIn = true;
                }
            });
        }
        console.log("IsInDesk===userId=" + userId + ", id2keep=" + id2keep);
        return isIn;
    };
    //????????????????????????????????????
    F_TexasView.prototype.UpdateRemoveUser = function (userId) {
        var user = null;
        if (this.removUserCallBack)
            this.unschedule(this.removUserCallBack);
        this.removUserCallBack = function () {
            // console.error("???????????????????????? 1 ???" + userId);
            if (this._bftable)
                user = this._bftable.GetUserByUserId(userId);
            if (user !== null) {
                // console.error("???????????????????????? 2 ???" + userId);
                this.RemoveUser(userId);
            }
        };
        this.schedule(this.removUserCallBack, 0.5, 20);
    };
    F_TexasView.prototype.RemoveUser = function (userId) {
        this.unschedule(this.removUserCallBack);
        if (this._bftable == null)
            return;
        var user = this._bftable.GetUserByUserId(userId);
        if (user != null) {
            if (user.self) {
                this.hideUIAllBtns();
                this.ui_curTexastype.visible = false;
                this.ShowOpenTip(false);
                //????????????:????????????????????????          
            }
            user.ClearUser(); //?????????????????????  
        }
        this.CheckBtnBackTableState();
        //?????????????????????????????????????????????
        if (!this.model.isGaming) {
            this.ShowUIWaitPlayPanel();
        }
        return this.model.RemovePlayerList(userId); //????????????         
    };
    F_TexasView.prototype.update_UserInfo = function (userInfo) {
        var _tempUser = this._bftable.GetUserByUserId(userInfo.py.userid);
        if (_tempUser != null) {
            _tempUser.ClearUser();
            _tempUser.update_UserInfo(userInfo);
            if (userInfo.py.userid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
                this.model.SetMyServerPos(userInfo.pos); //??????????????????
            }
            this.CheckBtnBackTableState();
            this.ShowUIWaitPlayPanel();
        }
        else {
            //console.log("_bftable.userList.Count:" + _bftable.userList.Count);
        }
    };
    //????????????,???????????????,???????????????
    F_TexasView.prototype.sc_tablestartgamble_tex_n = function (userId, _curGamble, _turnOver, _bankerPos, _allin) {
        if (_allin === void 0) { _allin = false; }
        var _tempUser = this._bftable.GetUserByUserId(userId);
        if (_tempUser == null) {
            return;
        }
        if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) {
            return;
        }
        //_tempUser.ResetPlayingDataAndUI (); //??????????????????,????????????,?????????????????????UI
        _tempUser.ShowUIGamble(true);
        if (_curGamble > 0) {
            _tempUser.GenerateChipNoUpate(_curGamble);
        }
        if (_tempUser.serverpos == _bankerPos) {
            _tempUser.SetBanker(true);
        }
        else {
            _tempUser.SetBanker(false);
        }
        _tempUser.GambleMongo(0);
    };
    /// <summary>
    /// ????????????
    /// </summary>
    F_TexasView.prototype.sc_gamble_tex_n = function (data) {
        var _this = this;
        // pos: number, _curGamble: number, _turnOver: boolean, _allin = false, addRate = false
        // data.pos, data._gamble, data._turnOver, data._allin, data.addrate
        this.UpdateJackpot();
        if (!this._bftable)
            return;
        var _tempUser = this._bftable.GetUserByPos(data.pos);
        if (_tempUser == null)
            return;
        //?????????????????????????????????????????????????????????
        _tempUser.Wait();
        if (data._gamble == 0) { //???
            AudioManager_1.AudioManager.Singleton.play("", "game_action_xiu");
            _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.xiu);
            if (data._turnOver) {
                F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            }
            return;
        }
        AudioManager_1.AudioManager.Singleton.play("", "game_chips_to_table");
        _tempUser.GenerateChip_nbb(data._gamble, true, data._turnOver, data.tgold);
        if (data._allin) {
            AudioManager_1.AudioManager.Singleton.play("", "texas_qiao");
            _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.allin);
        }
        else if (data.addrate) {
            _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.da);
        }
        else {
            _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.follow);
        }
        var addGold = data._gamble - this.GetFollowMinGamble();
        if (this.model._CurTurnCount == 2) {
            if (addGold > 0) {
                this.lastGambleGold = addGold;
            }
        }
        if (data._turnOver) {
            TimeInfoMgrTex_1.default.instance.AddTimer(0.618, function () {
                _this._bftable.userList.forEach(function (tempUser) {
                    if (tempUser.Empty)
                        return true;
                    tempUser.DealTurnChip(); //??????????????????????????????????????? 
                });
            });
        }
    };
    /// <summary>
    /// ???????????????
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_giveup_tex_n = function (pos, turnOver) {
        if (this._bftable == null)
            return;
        var _tempUser = this._bftable.GetUserByPos(pos);
        if (_tempUser == null)
            return;
        AudioManager_1.AudioManager.Singleton.play("", "game_action_diu");
        _tempUser.ShowGiveUp();
        _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.giveUp);
        _tempUser.StopClock();
        if (_tempUser.self) {
            this.Wait();
        }
        if (turnOver)
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
    };
    /// <summary>
    /// ?????????????????????
    /// </summary>
    /// <param name="pos"></param>
    /// <param name="ins"></param>
    F_TexasView.prototype.sc_insurance_tex_n = function (pos, ins) {
        // console.error(pos + "==????????????????????? ins=" + ins);
        var _tempUser = this._bftable.GetUserByPos(pos);
        if (_tempUser == null)
            return;
        _tempUser.StopClock();
        _tempUser.updateInsStateText(ins);
    };
    // ??????????????? 
    F_TexasView.prototype.sc_disconnect_n = function (data) {
        var player = this._bftable.GetUserByPos(data.pos);
        if (player != null) {
            player.DisconnetcOrReline(data.reconnect != 1);
        }
    };
    /// <summary>
    /// ?????????token  ???????????????4?????????????????????????????????????????? ???????????????????????? 
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_token_tex_n = function (data, turnChange, delayTime) {
        var _this = this;
        if (delayTime === void 0) { delayTime = 0; }
        //ui_txtAll.text = "?????????:" + UIUtil.formatNumber( F_TexasViewCtr.instance.Model._jackpot);
        //UpdateJackpot();
        var delay = 0;
        if (F_TexasViewCtr_1.default.instance.Model.isTurnOver) {
            this.UpdateLastJpot(); //????????????????????????????????????????????????
            delay += 1;
        }
        if (data._msgid <= 0) //isReBack()
         {
            this.tokenAction(data.pos, turnChange, true);
            return;
        }
        this.scheduleOnce(function () {
            _this.tokenAction(data.pos, turnChange, false, delay + 1 + delayTime);
        }, delay + 1);
    };
    F_TexasView.prototype.tokenAction = function (pos, turnChange, isReback, delayTime) {
        var _this = this;
        if (isReback === void 0) { isReback = false; }
        if (delayTime === void 0) { delayTime = 0; }
        this._bftable.userList.forEach(function (tempUser) {
            if (tempUser.Empty)
                return true;
            //??????????????????,????????????,???,??????????????????
            if (turnChange) {
                tempUser.ResetUserHandleStateForTurn();
            }
            // console.log("===???????????????serverpos="+tempUser.serverpos +", pos="+pos);
            if (tempUser.serverpos == pos) {
                tempUser.Execute(turnChange, _this.model.lefttime, delayTime);
            }
            else {
                tempUser.Wait();
            }
            if (isReback && tempUser.self && tempUser.serverpos == pos && !tempUser.self) //????????????????????????????????????????????????????????????isReBack()
             {
                console.log("delayTime === ", delayTime);
                tempUser.ShowClock(_this.model.lefttime - delayTime, _this.model.lefttime - delayTime);
            }
        });
        this.DealCurPalyer(turnChange);
        this.ShowCommonCards();
        this.SendOpenCard(true);
        this.DealMutilJackpot();
        if (turnChange) {
            this.DealTurnFaPai();
        }
    };
    /// <summary>
    /// ??????token  ???????????????????????????????????????????????????  
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_instoken_tex_n = function (pos, turnChange, isFirstTurn, _pos2Shoupai, _pos2win, potlist, ipos) {
        var _this = this;
        var delay = 0;
        if (F_TexasViewCtr_1.default.instance.Model.isTurnOver) {
            delay += 1;
        }
        TimeInfoMgrTex_1.default.instance.AddTimer(delay, function () {
            //????????????????????????????????????
            _this._bftable.userList.forEach(function (tempUser) {
                if (tempUser.Empty)
                    return true;
                //?????????????????????????????????
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(function (tempPosShoupai) {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //????????????????????????????????????????????????????????????
                            tempUser.isIns = true;
                        }
                    });
                }
            });
            //???????????????????????????????????????
            var disCount = _this.model._CommonCard.length - _this.curCommondCards.length >= 0 ? _this.model._CommonCard.length - _this.curCommondCards.length : 0;
            var delayy = disCount <= 0 ? 0 : (disCount >= 3 ? 2 * (disCount - 3) + 1.5 : 2 * (disCount - 1) + 1);
            TimeInfoMgrTex_1.default.instance.AddTimer(delayy + 0.5, function () {
                _this._bftable.userList.forEach(function (tempUser) {
                    if (tempUser.Empty)
                        return true;
                    //??????????????????,????????????,???,??????????????????
                    if (turnChange) {
                        tempUser.ResetUserHandleStateForTurn();
                    }
                    if (tempUser.serverpos == pos) {
                        tempUser.InsuranceExecute();
                    }
                    else {
                        if (ipos == null || ipos.length <= 0)
                            tempUser.Wait();
                        else {
                            var b = ipos.find(function (value) { return value.pos == tempUser.player.userid; }); //serverpos
                            if (b == null) //???????????????????????????????????????????????????
                                tempUser.Wait();
                        }
                    }
                    //???????????????????????????????????????
                    if (_pos2win != null && _pos2win.length > 0) {
                        _pos2win.forEach(function (tempPos2win) {
                            if (tempUser.player.userid == tempPos2win.pos) {
                                tempUser.ShowInsWinPer_num(UIUtil_1.UIUtil.NumberToInt(tempPos2win.val)); //??????????????????????????????????????????????????????????????????
                            }
                        });
                    }
                });
            });
            _this.UpdateLastJpot();
            //??????????????????????????????
            TimeInfoMgrTex_1.default.instance.AddTimer(1, function () {
                _this.ShowCommonCards();
            });
            _this.showInsJackpot(potlist);
        });
    };
    /// <summary>
    /// ?????????????????????allin?????????????????????????????????,????????????
    /// </summary>
    F_TexasView.prototype.sc_Allin_tex_n = function (_pos2Shoupai, potlist) {
        var _this = this;
        var delay = 0;
        if (F_TexasViewCtr_1.default.instance.Model.isTurnOver)
            delay += 1;
        this.UpdateLastJpot();
        this.showInsJackpot(potlist);
        TimeInfoMgrTex_1.default.instance.AddTimer(delay, function () {
            _this._bftable.userList.forEach(function (tempUser) {
                if (tempUser.Empty)
                    return true;
                //allin????????????????????????
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(function (tempPosShoupai) {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            console.log("????????????????????????????????????????????????????????????");
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //????????????????????????????????????????????????????????????
                        }
                    });
                }
            });
            _this.model.endDelay = true;
            //??????????????????????????????
            TimeInfoMgrTex_1.default.instance.AddTimer(1, function () {
                _this.ShowCommonCards();
            });
        });
    };
    F_TexasView.prototype.DealMutilJackpot = function () {
        this.showInsJackpot(F_TexasViewCtr_1.default.instance.Model.potlist);
        return;
        if (F_TexasViewCtr_1.default.instance.Model.potlist.length > 0) {
            this.ui_jackpotparant.visible = true;
            switch (F_TexasViewCtr_1.default.instance.Model.potlist.length) {
                case 1:
                    this.ui_jackpot1.visible = false;
                    this.ui_jackpot2.visible = false;
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 2:
                    this.ui_jackpot1.visible = true;
                    this.ui_txtjackpot1.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[1]) + "";
                    this.ui_jackpot2.visible = false;
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 3:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_txtjackpot1.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[2]) + "";
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 4:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_jackpot3.visible = true;
                    this.ui_txtjackpot1.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[2]) + "";
                    this.ui_txtjackpot3.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[3]) + "";
                    this.ui_jackpot4.visible = false;
                    break;
                default:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_jackpot3.visible = true;
                    this.ui_jackpot4.visible = true;
                    this.ui_txtjackpot1.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[2]) + "";
                    this.ui_txtjackpot3.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[3]) + "";
                    this.ui_txtjackpot4.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.potlist[4]) + "";
                    break;
            }
        }
        else
            this.ui_jackpotparant.visible = false;
    };
    F_TexasView.prototype.AddChipPool = function (achouma) {
        if (this._chippoolList == null)
            this._chippoolList = [];
        this._chippoolList.push(achouma);
    };
    F_TexasView.prototype.GetAChipPosition = function (kind, _suggetpos) {
        if (this.ChipRecordList == null)
            this.ChipRecordList = [];
        for (var i = 0; i < this.ChipRecordList.length; i++) {
            var data1 = this.ChipRecordList[i];
            if (data1.kind == kind && data1.count < 10) {
                data1.count++;
                var x = data1.beginV3.x;
                var y = 9 * (data1.count - 1) + data1.beginV3.y;
                return cc.v2(x, y); //(Vector3.up * 9 * (data1.count - 1)) + data1.beginV3;
            }
        }
        var data = new ChipPositionTex_1.default();
        data.count = 1;
        data.kind = kind;
        var v1 = cc.v2((this.ChipRecordList.length % 5 * 50 - 50), 0);
        var v2 = cc.v2(0, -1 * (UIUtil_1.UIUtil.NumberToInt(this.ChipRecordList.length / 5) * 50));
        _suggetpos = cc.v2(_suggetpos.x + v1.x, _suggetpos.y + v2.y);
        data.beginV3 = _suggetpos;
        this.ChipRecordList.push(data);
        return data.beginV3;
    };
    /// <summary>
    /// ????????????????????????
    /// </summary>
    F_TexasView.prototype.DealCurPalyer = function (turnChange, gameover) {
        var _this = this;
        if (gameover === void 0) { gameover = false; }
        if (gameover) {
            if (this.chipAniCallBackList != null) {
                this.chipAniCallBackList.find(function (a) {
                    a();
                    return false;
                });
                this.chipAniCallBackList = null;
            }
            if (this.cacheChipAniCallBackList != null) {
                this.cacheChipAniCallBackList.find(function (a) {
                    a();
                    return false;
                });
                this.cacheChipAniCallBackList = null;
            }
            return;
        }
        if (this.chipAniCallBackList != null) {
            this.chipAniCallBackList.find(function (a) {
                a();
                return false;
            });
            this.chipAniCallBackList = null;
        }
        if (this.cacheChipAniCallBackList != null) {
            this.chipAniCallBackList = [];
            this.cacheChipAniCallBackList.find(function (a) {
                _this.chipAniCallBackList.push(a);
                return false;
            });
            this.cacheChipAniCallBackList = null;
        }
        if (turnChange && this._chippoolList != null && this._chippoolList.length > 0) {
            this._bftable.userList.forEach(function (user) {
                user.DealTurnChip();
            });
        }
    };
    //ui_bgMango ?????????????????????
    F_TexasView.prototype.SetMangoOfTable = function (_mongoOfTable) {
        var mongoOfTable = UIUtil_1.UIUtil.NumberToInt(_mongoOfTable / 100);
        var img = null;
        var strNum = mongoOfTable.toString();
        if (this.ui_globalinfo == null)
            return;
        for (var i = 1; i <= 8; i++) {
            img = this.ui_globalinfo.getChild("txtMango" + i).asTextField;
            var num = (strNum.length - i) >= 0 ? strNum.charAt(strNum.length - i) : "0";
            img.text = num == null ? "0" : num;
        }
    };
    F_TexasView.prototype.SetCacheChoumaAni = function (_call) {
        console.log("SetCeachChoumaAni");
        if (this.cacheChipAniCallBackList == null) {
            this.cacheChipAniCallBackList = [];
        }
        this.cacheChipAniCallBackList.push(_call);
    };
    F_TexasView.prototype.GetOpenCards = function (pos) {
        var list = null;
        this.model._pos2openPai.forEach(function (p2card) {
            if (p2card.pos == pos) {
                list = p2card.vallist;
            }
        });
        return list;
    };
    F_TexasView.prototype.ShowUIBalencePanel = function (data, ismanager) {
        if (ismanager === void 0) { ismanager = true; }
        // if (RootObject == null) { return; }
        //????????????(?????????????????? 1. ?????????)
        var isCanShow = data != null;
        if (isCanShow) {
            BalenceCtr_1.default.instance.Model.br = data.br;
            BalenceCtr_1.default.instance.Model.allintogold = data.allintogold;
            BalenceCtr_1.default.instance.Model.begintime = data.btime;
            BalenceCtr_1.default.instance.Model.duration = data.dur;
            BalenceCtr_1.default.instance.Model.endtime = data.etime;
            BalenceCtr_1.default.instance.Model.gainlist = data.gainlist;
            BalenceCtr_1.default.instance.Model.pcount = data.pc;
            BalenceCtr_1.default.instance.Model.tax = data.tax;
            BalenceCtr_1.default.instance.Model.InsurTotal = data.InsurTotal;
            BalenceCtr_1.default.instance.Model.clubWl = data.clubWl;
            BalenceCtr_1.default.instance.Model.clunbins = data.clunbins;
            BalenceCtr_1.default.instance.Model.isnamger = ismanager;
            BalenceCtr_1.default.instance.Model.IsSupper = data.IsSupper;
            this.balenceComp.Open(51, F_TexasViewCtr_1.default.instance.Model.Room_tnumber);
        }
        else {
            this.balenceComp.Hide();
        }
    };
    F_TexasView.prototype.ShowUIChatPanel = function (isShow) {
        //????????????(??????????????????)
        var isCanShow = isShow;
        if (isCanShow) {
            this.chatComp.Show();
        }
        else {
            this.chatComp.Hide();
        }
    };
    F_TexasView.prototype.DealTurnFaPai = function () {
    };
    F_TexasView.prototype.setResultWinGold = function (winGold) {
        var tempItem = null;
        var tempUser = null;
        for (var i = 0; i < winGold.length; i++) {
            tempItem = winGold[i];
            if (tempItem.val != 0) {
                tempUser = this._bftable.GetUserByUserId(tempItem.pos);
                if (tempUser == null) {
                    //console.log("??????????????????" + tempItem.pos);
                }
                else {
                    if (tempItem.val > 0) {
                        tempUser.ShowUITopTip(tempItem.val > 0 ? "+" + UIUtil_1.UIUtil.formatNumber100(tempItem.val) : UIUtil_1.UIUtil.formatNumber100(tempItem.val) + "");
                    }
                    tempUser.ShowWinPer(UIUtil_1.UIUtil.NumberToInt(tempItem.val));
                    //?????????????????????????????????????????????????????????
                    tempUser.ShowUIUserHandleState(-1);
                    tempUser.updateInsStateText(-1);
                }
            }
        }
    };
    F_TexasView.prototype.ShowUIDeskTip = function (tip, delay) {
        var _this = this;
        if (tip === void 0) { tip = null; }
        if (delay === void 0) { delay = 1; }
        this.ui_bgDeskTip.visible = (tip != null);
        this.ui_txtDeskTip.visible = (tip != null);
        if (tip != null) {
            this.ui_txtDeskTip.text = tip;
            if (delay > 0) {
                // this.ui_txtDeskTip.transform.DOMoveZ (1, delay).OnComplete (() => {
                this.scheduleOnce(function () {
                    _this.ShowUIDeskTip(null);
                }, delay);
                // });
            }
        }
    };
    F_TexasView.prototype.sc_tjackpotLog = function (data) {
        if (this.jackpotComp != null && this.jackpotComp.fguiComponent.visible) {
            this.jackpotComp.UpdateLogData(data);
        }
    };
    F_TexasView.prototype.sc_getalljackpot_tex = function (data) {
        if (this.jackpotComp != null) {
            if (data == null)
                return;
            // this.jackpotComp.Show();
            this.jackpotComp.UpdateJackpotData(data._base2pot); //, data._max, data.plog);
        }
    };
    // #region ??????????????????,??????????????????
    F_TexasView.prototype.UpdateRecordView = function (data) {
        if (this.recordComp != null) {
            if (data == null)
                return;
            if (!this.recordComp)
                return;
            this.recordComp.Show();
            this.recordComp.fguiComponent.visible = true;
            this.model.SetRemainTime(data.lefttime);
            this.recordComp.UpdateData(data.jackpot, data.glist, data.wlist, data.Inspool, data.goldout);
        }
    };
    F_TexasView.prototype.UpdateHistoryView_data = function (data) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData_sc(data);
        }
    };
    F_TexasView.prototype.UpdateHistoryView_data2 = function (data) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData(data.ulist, data.tulist, this.model.tableid, this.model.brate, 0, 0, 0);
            this.historyComp.ui_btnCollectHist.visible = false;
            this.historyComp.ui_btnShare.visible = false;
        }
    };
    F_TexasView.prototype.UpdateHistoryView_ptnn = function (ulist, tulist, d, ShowCard) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData(ulist, tulist, F_TexasViewCtr_1.default.instance.Model.tableid, d, ShowCard);
        }
    };
    F_TexasView.prototype.UpdateCollectData = function (savaNum, infoId, IsSava) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateCollectData(savaNum, infoId, IsSava);
        }
    };
    //     #endregion
    //     #region chip ????????????
    F_TexasView.prototype.GenerateChipMove = function () {
        var obj = this.chipPool.GetCacheObject("ImgChipClone", this.ui_chippoolroot.asCom, "ImgChipTemplete");
        return obj;
    };
    /// <summary>
    /// ?????????????????????????????????????????????
    /// </summary>
    /// <param name="firstGamble"></param>
    F_TexasView.prototype.moveFirstGambleToTabel = function (userId, _curGamble) {
        var userComp = this._bftable.GetUserByUserId(userId);
        if (userComp == null || userComp == null || userComp.player == null) {
            return;
        }
        userComp.ShowUIGamble(false); //?????????????????????????????????
        ////???????????? ??????????????????
        var chipMove = this.GenerateChipMove();
        this.MoveChip(chipMove, userComp.fguiComponent, this.ui_jackpotbg.asCom, this.moveToTableTime);
    };
    F_TexasView.prototype.moveMyGambleToTableGameble = function (changeGold) {
        var _this = this;
        if (changeGold === void 0) { changeGold = null; }
        var isHaveChouma = false;
        var _tempUserList = this._bftable.userList;
        _tempUserList.forEach(function (userComp) {
            if (userComp == null || userComp.fguiComponent == null || userComp.player == null) {
                return true;
            }
            userComp.ShowUIGamble(false); //?????????????????????????????????
            ////???????????? ??????????????????
            if (userComp.curGamble > 0) //???????????????????????????????????????
             {
                var chipMove = _this.GenerateChipMove();
                _this.MoveChip(chipMove, userComp.ui_gambleBg.asCom, _this.ui_jackpotbg.asCom, _this.moveToTableTime);
                isHaveChouma = true;
            }
        });
        if (isHaveChouma)
            AudioManager_1.AudioManager.Singleton.play("", "game_chips_to_table");
    };
    F_TexasView.prototype.DelayMoveTableGambleToWiner = function (time, changeGold) {
        var _this = this;
        TimeInfoMgrTex_1.default.instance.AddTimer(time, function () {
            if (!_this.model.isGaming) // && this.RootObject != null)
                _this.moveTableGamebleToWiner(changeGold);
        });
    };
    F_TexasView.prototype.moveTableGamebleToWiner = function (changeGold) {
        var _this = this;
        // if (this.RootObject == null) { return; }
        // this.ShowUIJackpot (false); //????????????????????? ????????????????????????
        var userComp = null;
        var count = 0;
        changeGold.forEach(function (item) {
            if (item.val > 0) { //??????????????????
                count++;
                userComp = _this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("??????????????? " + item.pos);
                }
                else {
                    var chipMove = _this.GenerateChipMove();
                    var obj = chipMove;
                    _this.MoveChip(chipMove, _this.ui_jackpotbg.asCom, userComp.ui_txtGold.asCom, _this.moveToUserTime);
                }
            }
        });
        if (count > 0) {
            AudioManager_1.AudioManager.Singleton.play("", "game_chips_to_player");
        }
        console.log("???????????? ?????????, ????????????:" + count);
    };
    F_TexasView.prototype.MoveChip = function (chip, from, to, time, cmp, easeType) {
        var _this = this;
        if (cmp === void 0) { cmp = null; }
        if (easeType === void 0) { easeType = 1; }
        console.log("chip.fromTs=" + chip.fromTs + ",,from=" + from);
        chip.Show();
        chip.fromTs = from;
        chip.fixedTime = time;
        chip.isUseSpeed = false;
        chip.ease = easeType;
        var obj = chip.asCom;
        if (cmp != null)
            this.onCmp.push(cmp);
        if (this.onCmp == null)
            this.onCmp = [];
        this.onCmp.push(function () {
            obj.node.destroy();
            _this.chipPool.DestroyObject(obj);
        });
        console.log("?????????????????????" + this.onCmp.length);
        chip.Move(to, this.onCmp);
    };
    //     #endregion
    //     #region UI ???????????? 
    F_TexasView.prototype.ShowUIJackpot = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_jackpotbg.visible = isShow;
        this.ui_lastjackpotbg.visible = isShow;
    };
    //1?????????????????? 2??? ?????????????????? 3?????????????????? 4?????????????????????
    F_TexasView.prototype.UpdateJackpot = function (jackpot, mango) {
        if (jackpot === void 0) { jackpot = -1; }
        if (mango === void 0) { mango = -1; }
        this.dichi = jackpot > 0 ? jackpot : this.model._jpot;
        console.log("?????? : " + this.dichi);
        if (this.ui_txtAll)
            this.ui_txtAll.text = TexasLanguage_1.TexasLanguage.getLanguageById(1396) + " : " + UIUtil_1.UIUtil.formatNumber100ToK(this.dichi); //??????
    };
    F_TexasView.prototype.UpdateLastJpot = function (lastJpot) {
        if (lastJpot === void 0) { lastJpot = -1; }
        this.ui_lasttxtAll.text = UIUtil_1.UIUtil.formatNumber100ToK(lastJpot > 0 ? lastJpot : this.model._lastjpot) + "";
    };
    F_TexasView.prototype.HideUITakeGoldPanel = function () {
        this.ShowUITakeGoldPanel(false);
    };
    F_TexasView.prototype.CheckAutoSitDown = function (localpos) {
        this.posSit = localpos;
        // ??????????????????????????????(???????????????,???????????????????????????)
        if (this.model.tableLockGold > this.model.minStartGamble && this.model.tableLockGold > 0) {
            //??????????????????,??????????????????????????? ???????????????
            this.isKeep = this._bftable.myUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat ? 1 : 0;
            //???????????????0   
            F_TexasViewCtr_1.default.instance.cs_autoSitDown_tex(this.posSit, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
        }
        else {
            this.isKeep = this._bftable.myUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat ? 1 : 0;
            F_TexasViewCtr_1.default.instance.cs_sitdownwait_tex(this.posSit, this.isKeep);
            // F_TexasViewCtr.instance.cs_autoSitDown_tex(this.posSit, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
        }
    };
    F_TexasView.prototype.WaitToTakeIn = function () {
        this.ShowUITakeGoldPanel(true, this.posSit, true);
    };
    F_TexasView.prototype.IsCanAddGold = function () {
        var curGold = this._bftable.myUser.player != null ? UIUtil_1.UIUtil.NumberToInt(this.model.tableLockGold) : 0;
        var minBrate = this.model.intorate_min; //UIUtil.NumberToInt(this.model.brate * 200); //UIUtil.NumberToInt(this.model.brate * 200 * this.model.intorate_min);
        var maxBrate = this.model.intorate_max; //UIUtil.NumberToInt(this.model.brate * 2000); //UIUtil.NumberToInt(this.model.brate * 200 * this.model.intorate_max);
        var takeIn = curGold <= maxBrate ? maxBrate - curGold : 0;
        this.ui_myGold_num.text = UIUtil_1.UIUtil.formatNumber100(AppConst_1.AppConst.mPlayerModel.gold) + "";
        return this._bftable.myUser.serverpos > 0 && !this.isHaveAddGold && takeIn >= minBrate; //???????????????????????????????????????
    };
    //???????????????
    F_TexasView.prototype.IsCanOutGold = function () {
        if (this.model.gametype != 20 || this._isCanOutGold)
            return false; //??????AOF??????
        var curGold = this._bftable.myUser.player != null ? UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold) : 0;
        // let _gamble = this._bftable.myUser.allinGamble;
        console.log("this.model.room == ", this.model.room);
        if (this.model.room.AOF_Times == null)
            this.model.room.AOF_Times = 1;
        var maxBrate = UIUtil_1.UIUtil.NumberToInt((curGold - this.model.brate * 200 * this.model.room.AOF_Times) / 100); //* 2;//?????????????????? - ???????????????????????? * ?????????????????? - ???????????? = ???????????????
        console.error("brate=" + this.model.brate + ",????????????" + curGold + "-" + (this.model.brate * 200 * this.model.room.AOF_Times) + ",??????????????????" + maxBrate);
        if (maxBrate > 1) {
            this.ui_sliderOutGold.min = 1;
            this.ui_sliderOutGold.max = maxBrate;
            this.ui_sliderOutGold.value = 1;
            this.ui_outGold_num.text = "1";
            return true;
        }
        return false;
    };
    //?????????????????????
    F_TexasView.prototype.OutAfterUpGold = function (userid, _money) {
        var user = this._bftable.GetUserByUserId(userid);
        if (user != null && user.self) {
            AppConst_1.AppConst.mPlayerModel.gold = _money;
            this.model.tableLockGold = _money;
            this.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180012)); //???????????????
        }
        if (user != null)
            user.UpdateMoney(_money);
    };
    //????????????
    F_TexasView.prototype.ShowUITakeGoldPanel = function (isShow, localpos, isShowTip, isRefresh) {
        var _this = this;
        if (isShow === void 0) { isShow = true; }
        if (localpos === void 0) { localpos = 0; }
        if (isShowTip === void 0) { isShowTip = false; }
        if (isRefresh === void 0) { isRefresh = false; }
        if (!isRefresh) {
            var u = this._bftable.GetUserByUserId(this.model.mPlayerModel.userid);
            // if (isShow && u != null && u.userInfo && u.IsPlaying()) return;
            //??????????????? ?????? ????????????????????????0
            if (isShow && this.model.cgold != 0 && this.model.cgold != -1 && u && u.player && u.player.gold >= UIUtil_1.UIUtil.NumberToInt((this.model.brate * 200))) {
                F_TexasViewCtr_1.default.instance.cs_autoSitDown_tex(localpos, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
                return;
            }
            //stradlle  = ?????? * 4 ???  ?????? =  stradlle + ??????
            if (this.model.tableLockGold > this.model.brate * 5 && this.model.tableLockGold > 0 && isShow) {
                F_TexasViewCtr_1.default.instance.cs_sitdown_tex(localpos, 0, this.isKeep, this.password, this.curSelectSClub != null ? this.curSelectSClub.cid : 0);
                return;
            }
        }
        this.ui_takeGoldPanel.visible = isShow;
        if (isShow) {
            if (this.posSit != 0)
                localpos = this.posSit;
            // this.curSelectSClub = null;
            this.ui_textGoldDesc.text = this.model.clubid > 0 && this.model.IsSupper ? TexasLanguage_1.TexasLanguage.getLanguageById(2204) : TexasLanguage_1.TexasLanguage.getLanguageById(1352); //?????????/???????????????:   ?????????/?????????:
            this.ui_txtHintDesc.text = TexasLanguage_1.TexasLanguage.getLanguageById(1397); //?????????????????????????????????
            this.isShowAddGoldPanel = false;
            this.posSit = localpos;
            this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage_1.TexasLanguage.getLanguageById(1398); //????????????
            this.password = "";
            this.ui_inputPass.text = "";
            console.log("this.model.pas == ", this.model.pas);
            console.log("this.isKeep == ", this.isKeep);
            if (this.model.room != null && this.model.pas != "" && this.isKeep != 1) {
                console.log("??????????????????");
                this.ui_Password.visible = true;
            }
            else {
                this.ui_Password.visible = false;
            }
            var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate);
            var maxBrate = UIUtil_1.UIUtil.NumberToInt(minBrate * 2);
            this.minTakeGold = this.model.intorate_min; //maxBrate * 100; //this.model.room != null ? this.model.room.lg * 100 : minBrate; //????????????????????????????????????room????????????????????????????????????50??????
            //console.log("limit:" + (model.room != null ? model.room.lowlimit.ToString() : " null"));
            // if (this.minTakeGold <= 0) { this.minTakeGold = minBrate; } //
            if (this.model.clubid > 0 && this.model.IsSupper) {
                this.model.cgold = 0;
                this.ui_clubgold_num.text = "0";
                if (this.model.clubslist == null || this.model.clubslist.length <= 0
                    || (this.model.curSClub != null && this.model.clubslist.find(function (item) { return item.cid == _this.model.curSClub.cid; }) == null)) {
                    // this.curSelectSClub = null;
                    this.maxTakeGold = 0;
                    this.ui_clubgold_num.text = "0";
                    this.ShowTakeInInfo(false);
                }
                this.maxTakeGold = this.model.cgold > maxBrate ? maxBrate : this.model.cgold;
            }
            else {
                // ui_clubToggleGroup.gameObject.SetActive(false);
                this.maxTakeGold = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold > maxBrate ? maxBrate : F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold;
            }
            var mgold = UIUtil_1.UIUtil.NumberToInt(AppConst_1.AppConst.mPlayerModel.gold / 100) * 100;
            this.maxTakeGold = this.model.intorate_max > mgold ? mgold : this.model.intorate_max; //maxBrate * 1000;
            this.ShowTakeInInfo(isShowTip);
        }
        else {
            this.ui_sliderTakeGold.value = 0;
        }
    };
    F_TexasView.prototype.ShowTakeInInfo = function (isShowTip) {
        if (isShowTip === void 0) { isShowTip = false; }
        this.UpdateTakeGoldUI(this.minTakeGold);
        console.log("min :" + this.minTakeGold + " max:" + this.maxTakeGold + " cur:" + this.curTakeGold);
        // this.ui_sliderTakeGold.min = 0;//this.minTakeGold;
        this.ui_sliderTakeGold.max = UIUtil_1.UIUtil.NumberToInt((this.maxTakeGold - this.minTakeGold) / this.minTakeGold);
        if (this.model.gametype == 20)
            this.ui_sliderTakeGold.max = this.maxTakeGold;
        this.ui_sliderTakeGold.enabled = this.minTakeGold <= this.maxTakeGold;
        this.ui_sliderTakeGold.value = 0; // this.maxTakeGold == 0 ? 0 : this.curTakeGold / this.maxTakeGold;
        this.ui_txtScore.color = this.minTakeGold <= this.maxTakeGold ? cc.Color.WHITE : cc.Color.RED;
        this.ui_txtScore.text = UIUtil_1.UIUtil.NumberToInt(this.minTakeGold / 100) + "";
        var gold = UIUtil_1.UIUtil.NumberToInt(this.minTakeGold / 100) + "";
        var scale = gold.length >= 3 ? 2 / gold.length : 1;
        // this.numImageFont.setTxt(gold, "N_", "scoreNum", scale);
        if (this.curTakeGold <= 0 && isShowTip) {
            this.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1585)); //????????????????????????????????????
        }
    };
    F_TexasView.prototype.AddGoldFail = function () {
        this.isHaveAddGold = false;
    };
    //????????????
    F_TexasView.prototype.ShowUIOutGoldPanel = function () {
        this.ui_outGoldPanel.visible = true;
    };
    //????????????
    F_TexasView.prototype.ShowUIAddGoldPanel = function () {
        var _this = this;
        this.isShowAddGoldPanel = true;
        if (this.isHaveAddGold) {
            return;
        }
        this.ui_takeGoldPanel.visible = true;
        this.ui_Password.visible = false;
        this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage_1.TexasLanguage.getLanguageById(1400); //????????????
        this.ui_txtHintDesc.text = TexasLanguage_1.TexasLanguage.getLanguageById(1401); //?????????????????????????????????????????????????????????
        // keyboardComp.Hide();
        var curGold = UIUtil_1.UIUtil.NumberToInt(this.model.tableLockGold);
        var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate); //?????? = ??????
        // let maxLimitBrate = UIUtil.NumberToInt((this.model.brate * 200 * this.model.intorate_max));
        var maxBrate = minBrate * 2; //?????? = ?????? * 2 
        this.minTakeGold = this.model.intorate_min; //maxBrate * 100; //?????????????????? = ??????*100??? 
        // if (this.minTakeGold <= 0) { this.minTakeGold = minBrate; } //        
        if (this.model.clubid > 0 && this.model.IsSupper) {
            if (this.model.clubslist == null || this.model.clubslist.length <= 0
                || this.model.curSClub == null || this.model.clubslist.find(function (item) { return item.cid == _this.model.curSClub.cid; }) == null) {
                this.maxTakeGold = 0;
                this.ui_clubgold_num.text = "0";
                this.ShowTakeInInfo(false);
            }
        }
        this.maxTakeGold = this.model.intorate_max - curGold; //UIUtil.NumberToInt(maxBrate * 1000 - curGold) / 100 * 100; //???????????? = ??????*100*10 - ????????????
        this.ShowTakeInInfo(true);
    };
    F_TexasView.prototype.UpdateTakeGoldUI = function (inputTakeGold) {
        var tempTakeGold = inputTakeGold;
        //????????????
        if (this.minTakeGold > this.maxTakeGold) {
            tempTakeGold = UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold);
        }
        else {
            tempTakeGold = this.Clamp(inputTakeGold, 0, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold));
        }
        this.curTakeGold = this.minTakeGold > 0 ? (this.Clamp(tempTakeGold + 1, 0, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold)) / this.minTakeGold) * this.minTakeGold : tempTakeGold; //0; //???1 ?????? slider ?????????????????????????????????minTakeGold
        this.SetTakeGoldUI(this.curTakeGold, this.minTakeGold, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold));
    };
    F_TexasView.prototype.SetTakeGoldUI = function (takeGold, minGold, maxGold) {
        if (!this.ui_takeGoldPanel.visible) {
            return;
        }
        console.log("???????????? :" + takeGold + " max:" + maxGold);
        this.ui_txtTakeGoldPanel.text = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))) + "/" + UIUtil_1.UIUtil.NumberToInt((maxGold / 100));
        this.ui_takein_num.text = UIUtil_1.UIUtil.NumberToInt((takeGold / 100)) == 0 ? "??????" : (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        this.ui_txtScore.text = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        var gold = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        var scale = gold.length >= 3 ? 2 / gold.length : 1;
        // this.ui_myGold_num.text = UIUtil.formatNumber100(AppConst.mPlayerModel.gold - takeGold) + "";
    };
    F_TexasView.prototype.ShowAddClubPanel = function () {
        var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate);
        var maxBrate = UIUtil_1.UIUtil.NumberToInt(minBrate * 2);
        var minApply = this.model.room != null ? this.model.room.lg : minBrate; //????????????????????????????????????room????????????????????????????????????50??????
        if (minApply <= 0) {
            minApply = minBrate;
        }
        var maxApply = maxBrate;
        if (this.model.clubslist == null || this.model.clubslist.length <= 0) {
            maxApply = 0;
            this.ShowApplyInfo(minApply, maxApply);
        }
        this.ShowApplyInfo(minApply, maxApply);
    };
    F_TexasView.prototype.ShowApplyInfo = function (minApply, maxApply) {
        this.UpdateApplyGoldUI(minApply);
    };
    F_TexasView.prototype.UpdateApplyGoldUI = function (inputTakeGold) {
        this.SetApplyGoldUI(this.curApplyGold);
    };
    F_TexasView.prototype.SetApplyGoldUI = function (takeGold) {
        // if (!this.ui_applycontent.visible) { return; }
        // this.ui_applynum_txt.text = (UIUtil.NumberToInt((takeGold / 100))).toString();
    };
    F_TexasView.prototype.SetCurGambleAddGold = function (value) {
        var tempAddGold = this.minAddGold * Math.ceil(value / this.minAddGold);
        tempAddGold = Number(tempAddGold.toFixed(2));
        var minadd = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model._curGambleLimitMin);
        console.log("tempAddGold == ", tempAddGold);
        console.log("minadd == ", minadd);
        // if (tempAddGold < minadd) {
        //     tempAddGold = minadd;
        // }
        if (tempAddGold > this.maxAddGold) {
            tempAddGold = this.maxAddGold;
        }
        var fill = tempAddGold / this.maxAddGold;
        this.ui_bar_v2.fillAmount = fill;
        if (tempAddGold >= this.maxAddGold) {
            this.ui_txtNums.text = "ALLIN";
            this.curAddGold = tempAddGold;
            this.ui_bar_v2.fillAmount = 1;
        }
        else {
            this.curAddGold = tempAddGold;
            this.ui_txtNums.text = this.curAddGold + "";
        }
    };
    F_TexasView.prototype.GetAddBase = function (addNum) {
        var addBase = 1;
        if (addNum < 10)
            addBase = 2;
        else if (addNum >= 10 && addNum < 100)
            addBase = 5;
        else if (addNum >= 100 && addNum < 1000)
            addBase = 10;
        else if (addNum >= 1000 && addNum < 10000)
            addBase = 100;
        else
            addBase = 1000;
        return addBase;
    };
    F_TexasView.prototype.GetSliderMaxValue = function (gold, isRemainder) {
        var max = 0;
        var round = 0;
        var remain = 0;
        if (gold <= 10) {
            round = gold / 2;
            remain = gold % 2;
        }
        else if (gold > 10 && gold <= 100) {
            round = (gold - 10) / 5 + 5;
            remain = gold % 5;
        }
        else if (gold > 100 && gold <= 1000) {
            round = (gold - 100) / 10 + 5 + 18;
            remain = gold % 10;
        }
        else if (gold > 1000 && gold <= 10000) {
            round = (gold - 1000) / 100 + 5 + 18 + 90;
            remain = gold % 100;
        }
        else {
            round = (gold - 10000) / 1000 + 5 + 18 + 90 + 90;
            remain = gold % 1000;
        }
        max = round + (remain > 0 && isRemainder ? 1 : 0);
        return max;
    };
    F_TexasView.prototype.GetCurrentGoldBySlider = function (sliderValue) {
        var curGold = 0;
        if (sliderValue >= this.ui_sliderAdd.max)
            return this.maxAddGold;
        if (sliderValue <= 5) {
            curGold = 2 * sliderValue;
        }
        else if (sliderValue > 5 && sliderValue <= 23) {
            curGold = (sliderValue - 5) * 5 + 10;
        }
        else if (sliderValue > 23 && sliderValue <= 113) {
            curGold = (sliderValue - 23) * 10 + 100;
        }
        else if (sliderValue > 113 && sliderValue <= 203) {
            curGold = (sliderValue - 113) * 100 + 1000;
        }
        else {
            curGold = (sliderValue - 203) * 1000 + 10000;
        }
        return curGold;
    };
    F_TexasView.prototype.ShowUIUserInfo = function (player, serverPos) {
        if (player != null) {
            this.userInfoComp.show(player, serverPos);
        }
        else {
            // this.userInfoComp.Hide();
            // this.ShowUITakeGoldPanel(true, serverPos);
        }
    };
    F_TexasView.prototype.UpdateUserInfo = function (player, serverPos) {
        if (this.userInfoComp == null) {
            return;
        }
        if (player != null) {
            this.userInfoComp.updateInfo(player, serverPos);
        }
        else {
            this.userInfoComp.Hide();
        }
    };
    F_TexasView.prototype.HideUIWaitPlayPanel = function () {
        this.ui_waitPanel.visible = false;
        this.unschedule(this.fireTimer);
    };
    F_TexasView.prototype.ShowUIWaitPlayPanel = function () {
        var userCount = this.model.GetMinPlayerCount();
        var readyCount = this.model.GetReadyCount();
        var remainTime = this.model.endTime; // - UIUtil.NumberToInt(cc.director.getTotalTime() / 1000);
        //??????????????????
        var isRealShow = !this.model.isGaming && readyCount < userCount;
        console.log("userCount:" + userCount);
        console.log("remainTime:" + remainTime + " isGaming:" + this.model.isGaming + " readyCount:" + readyCount); //--temp
        this.ui_waitPanel.visible = isRealShow;
        if (isRealShow) {
            // if (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.openplay && !this.model.isopen) {
            //     this.ui_txtStartDesc.text = TexasLanguage.getLanguageById(2264);//????????????????????????
            // }
            // else {
            this.ui_txtStartDesc.text = "" + TexasLanguage_1.TexasLanguage.getLanguageById(180000) + userCount + TexasLanguage_1.TexasLanguage.getLanguageById(180001); //???????????????{0}?????????????????????
            // }
            this.ui_txtStartDesc.visible = true;
            // ????????????????????? ??????????????????2???????????????????????????  ???????????????
            if (!this.model.isShowPersonRemind && readyCount >= 2) {
                this.ui_txtStartDesc.visible = false;
            }
            else if (!this.model.isShowPersonRemind) {
                this.ui_txtStartDesc.text = "" + TexasLanguage_1.TexasLanguage.getLanguageById(180000) + 2 + TexasLanguage_1.TexasLanguage.getLanguageById(180001); //???????????????{0}?????????????????????
            }
            this.ShowUIJackpot(false);
        }
        else {
        }
    };
    // #endregion
    F_TexasView.prototype.IsSelfWatch = function () {
        return this.model.IsPosWatch(this.model._posServer);
    };
    F_TexasView.prototype.IsSelfWaitToTakeIn = function () {
        return this.model.IsPosWaitToTakeIn(this.model._posServer);
    };
    F_TexasView.prototype.UpdateUserState = function (userId, keepTime, gold) {
        if (keepTime <= 0) {
            return;
        }
        var user = this._bftable.GetUserByUserId(userId);
        if (user != null && gold >= 0) {
            user.UpdateMoney(gold);
        }
        this.SetUserForKeepSeat_nn(userId, keepTime);
    };
    F_TexasView.prototype.SetUserForKeepSeat_nn = function (userId, remainTime) {
        if (remainTime <= 0) {
            return;
        }
        this.model.SetUserData_isW(userId, 1); //????????????
        this.model.SetUserData_isK(userId, remainTime); //????????? ??????????????? ????????????   
        this.SetUserForKeepSeat_n(userId); //????????? ??????????????? ???????????? 
    };
    F_TexasView.prototype.SetUserForKeepSeat_n = function (userId) {
        this.SetUserForKeepSeat_user(this._bftable.GetUserByUserId(userId));
    };
    //??????user???????????????
    F_TexasView.prototype.SetUserForKeepSeat_user = function (user) {
        if (user == null || user.player == null) {
            return;
        }
        var info = this.model.GetUserInfo(user.player.userid);
        if (info != null) {
            user.update_UserInfo(info);
        }
        if (user.self) {
            this.hideUIAllBtns();
            this.CheckBtnBackTableState();
            this.ui_curTexastype.visible = false;
        }
    };
    //????????????????????????????????????
    F_TexasView.prototype.TabeleEndSetKeep = function (user) {
        user.UpdateUserConnectState(TexasUserComp_1.UserConnectState.keepSeat);
        if (user.self) {
            this.hideUIAllBtns();
            this.CheckBtnBackTableState();
        }
    };
    //??????
    //??????0??? ??? ???1????????? >=2 ??????
    F_TexasView.prototype.GambleMultiple = function (multiple) {
        //????????? ???????????????????????????
        var gold = multiple == 0 ? 0 : this.GetDaGamble(multiple);
        if (gold <= 0) {
        }
        else {
            this.ui_sliderAdd.visible = false;
            this.ui_BtnAddLimit.visible = false;
        }
        //???/???
        var addRate = multiple > 1 || this._bftable.myUser.player.gold <= gold;
        gold = Math.min(gold, UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold));
        this.Wait();
        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gold, addRate);
    };
    //???
    F_TexasView.prototype.GambleXiu = function () {
        this.GambleMultiple(0);
    };
    //??? 
    F_TexasView.prototype.GambleAllIn = function () {
        var gold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold);
        this.Wait();
        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gold, true);
    };
    //(???????????? ??????????????????0)?????????????????????????????????:1.??????????????????,??????????????????,??? ????????????,??? ?????????
    F_TexasView.prototype.IsCanHandleAction = function () {
        if (!this.model.isGaming) {
            return false;
        } //???????????????
        if (this._bftable.myUser == null) {
            return false;
        }
        if (this._bftable.myUser.Empty) {
            return false;
        } //???????????????
        if (this._bftable.myUser.isGiveUp) {
            return false;
        } //????????????        
        if (this._bftable.myUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
            return false;
        }
        if (this.IsSelfWatch()) {
            return false;
        } //??????    
        if (this.IsSelfWaitToTakeIn()) {
            return false;
        } //??????   
        return true;
    };
    //????????????????????????????????????
    F_TexasView.prototype.ShowActionBtns = function (isShow) {
        for (var i = 0; i < this.ui_btns._children.length; i++) {
            this.ui_btns._children[i].visible = isShow;
        }
    };
    //????????????
    F_TexasView.prototype.HandleActionBtnsForSelfTurn = function (isNewTurn) {
        this.ShowActionBtns(false);
        this.ui_btnqipai.visible = true; //??????        
        //????????????????????????
        this.ui_btnXiu.visible = this.model.gametype != 20 && ((isNewTurn && !this.model.firstTurnStart) || (this.model._mingamble <= 0 && this.model._emaxg <= 0)); //???
        //ui_btnFollow.gameObject.SetActive(!F_TexasViewCtr.instance.Model.showcard);
        var mingamble = this.GetFollowMinGamble();
        this.ui_btnFollow.visible = this.model.gametype != 20 && (this._bftable.myUser.player.gold > mingamble && !this.ui_btnXiu.visible); //???,????????????????????????1???,???????????????????????????,????????????????????? ???????????????
        //ALLIN???????????????????????????????????????????????????????????????????????????????????????
        this.ui_btnallinadd.visible = this.model.gametype == 20 || (this._bftable.myUser.player.gold <= mingamble || (this._bftable.myUser.player.gold < this.GetDaGamble(this.GetMinDaGambleType()) && mingamble <= 0)); //ALLIN
        var followEndGamble = mingamble; //????????????????????????
        this.ui_txtfollowDynamic.text = followEndGamble <= 0 ? TexasLanguage_1.TexasLanguage.getLanguageById(1404) : UIUtil_1.UIUtil.formatNumber100ToK(followEndGamble) + "\n" + TexasLanguage_1.TexasLanguage.getLanguageById(1296); //straddle????????????????????????????????????????????????0????????????????????????????????????????????????????????????
        console.log("minGamble:" + this.model._mingamble + " myGold:" + this._bftable.myUser.player.gold);
        var daMinGamble = 0;
        this.ShowActionAddGamble(true, daMinGamble); //??? :?????????????????????????????????????????????
    };
    F_TexasView.prototype.getRateByCount = function (num) {
        var count = this.bupaiList.length > 0 ? this.bupaiList.length : num; //???????????????????????????????????????
        if (count < 1)
            return 0;
        if (count > 20)
            count = 20;
        if (F_TexasView_1._dicInsRate.has(count))
            return F_TexasView_1._dicInsRate.get(count);
        return 0;
    };
    F_TexasView.prototype.HandleInsuranceBtnsForSelfTurn = function () {
        var _this = this;
        if (this.GetInsSwitch() == 0) //?????????????????????????????????????????????????????????????????????????????????
         {
            this.Wait();
            F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, 0, 0, null);
            return;
        }
        if (this.ui_BtnInsurancePanel.visible) {
            this.ui_BtnInsurancePanel.visible = false;
            var timeout = setTimeout(function () {
                _this.ui_BtnInsurancePanel.visible = true;
            }, 1000);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        }
        else {
            this.ShowActionBtns(false);
            this.ui_BtnInsurancePanel.visible = true;
        }
        this.tempInsAddGold = 0;
        this.zhuInsAddGold = 0;
        this.fenInsAddGold = 0;
        this.ui_fenchiNumText.text = "0";
        this.ui_sliderInsAdd.value = 0;
        this.ui_txtOutsCnt.text = "0";
        // this.ui_funcBtns.visible = false;
        this.ui_insuranceAddPanel.visible = true; // false;
        this.ui_fenchiTip.visible = true;
        this.ui_fenchiTip.text = ""; //???????????????
        var zhuchi = this.model.insList31 != null && this.model.insList31.length > 0 && this.model.curJiangchi31 > 0;
        var fenchi = this.model.insList32 != null && this.model.insList32.length > 0 && this.model.curJiangchi32 > 0;
        // this.ui_btnInsAll.enabled = zhuchi || fenchi;
        this.ui_insuranceInfo.enabled = zhuchi;
        this.ui_insuranceInfo32.enabled = fenchi;
        // this.ui_btnInsAll.getController("isOn").setSelectedIndex(zhuchi || fenchi ? 1 : 0);
        this.ui_insuranceInfo.getController("isOn").setSelectedIndex(zhuchi ? 1 : 0);
        this.ui_insuranceInfo32.getController("isOn").setSelectedIndex(fenchi ? 1 : 0);
        this.showInsComCard(F_TexasViewCtr_1.default.instance.Model._CommonCard);
        this.ui_bupaiPanel.removeChildrenToPool();
        this.buyInsType = zhuchi && fenchi ? 0 : zhuchi ? 1 : 2; //0???????????????????????? 1???????????? 2????????????
        //??????????????????????????????????????????????????????????????????????????????????????????ilist???,???????????????list31 ???????????????list32
        switch (this.buyInsType) {
            case 0:
                this.manchiZInsAddGold = this.model.insList31[2];
                this.manchiFInsAddGold = this.model.insList32[2];
                this.baobenZInsAddGold = this.model.insList31[1];
                this.baobenFInsAddGold = this.model.insList32[1];
                this.showInsAddInfo(1);
                break;
            case 1:
                this.manchiZInsAddGold = this.model.insList31[2];
                this.manchiFInsAddGold = 0;
                this.baobenZInsAddGold = this.model.insList31[1];
                this.baobenFInsAddGold = 0;
                this.showInsAddInfo(1);
                break;
            case 2:
                this.manchiZInsAddGold = 0;
                this.manchiFInsAddGold = this.model.insList32[2];
                this.baobenZInsAddGold = 0;
                this.baobenFInsAddGold = this.model.insList32[1];
                this.showInsAddInfo(2);
                break;
        }
        this.ui_txtBaoben.text = UIUtil_1.UIUtil.formatNumber100(this.baobenZInsAddGold + this.baobenFInsAddGold) + "";
        this.ui_txtBaoben1.text = zhuchi && fenchi ? TexasLanguage_1.TexasLanguage.getLanguageById(2243) : TexasLanguage_1.TexasLanguage.getLanguageById(1302); //???????????? ??????
        this.ui_textManchi.text = UIUtil_1.UIUtil.formatNumber100(this.manchiZInsAddGold + this.manchiFInsAddGold) + "";
        console.error("????????????=" + this.ui_textManchi.text);
        this.ui_textManchi1.text = zhuchi && fenchi ? TexasLanguage_1.TexasLanguage.getLanguageById(2242) : TexasLanguage_1.TexasLanguage.getLanguageById(1303); //???????????? ??????  
        // this.ui_jiangchiText.text = "??????";
        // this.ui_PoolNum.text = UIUtil.formatNumber100(this.model.curJiangchi31 + this.model.curJiangchi32) + "";
        // this.ui_sliderInsAdd.enabled = false;
        // this.ui_toubaoNum.text = this.ui_textManchi.text;
        // this.ui_peifuNum.text = UIUtil.formatNumber100((this.model.curJiangchi31 + this.model.curJiangchi32) / 31)+"";
        // this.ui_peilvNum.text = "31";
        this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
        this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //????????????
        // ???????????????
        this.insdelayTime = this.model.lefttime;
        this.ui_insTimeText.text = this.insdelayTime + "S";
        this.ui_insTimeText.visible = true;
        if (this.insTimerCB) {
            this.unschedule(this.insTimerCB);
        }
        this.insTimerCB = function () {
            this.insdelayTime -= 1;
            if (this.insdelayTime < 0) {
                if (this.insTimerCB) {
                    this.unschedule(this.insTimerCB);
                    this.ui_BtnInsurancePanel.visible = false;
                    F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, 0, 0, null);
                }
                this.ui_insTimeText.visible = false;
                return;
            }
            this.ui_insTimeText.text = this.insdelayTime + "S";
        };
        this.schedule(this.insTimerCB, 1);
    };
    F_TexasView.prototype.showZhuchi = function () {
        this.ui_jiangchiText.text = "??????";
        this.ui_PoolNum.text = UIUtil_1.UIUtil.formatNumber100(this.model.curJiangchi31) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length); //??????
        this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + this.model.outs31.length; //??????
    };
    F_TexasView.prototype.showFenchi = function () {
        this.ui_jiangchiText.text = "??????";
        this.ui_PoolNum.text = UIUtil_1.UIUtil.formatNumber100(this.model.curJiangchi32) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length); //??????
        this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + this.model.outs32.length; //??????
    };
    //????????????
    F_TexasView.prototype.ShowInsUserCardList = function () {
        this.ui_InsUserCardList.removeChildrenToPool();
        //????????????????????????
        var minBetUser = null;
        if (this.insType == 2) {
            var tUsers = [];
            for (var i = 0; i <= 9; i++) {
                var user = this._bftable.GetUserByPos(i);
                if (user != null && user.userInfo != null && user.isIns) {
                    // console.error("??????allin?????????"+user.player._n+",??????="+user.allinGamble);
                    tUsers.push(user);
                }
            }
            tUsers.sort(function (a, b) {
                return a.allinGamble - b.allinGamble;
            });
            minBetUser = tUsers[0];
            // console.error("?????????????????????"+minBetUser.player._n+",??????="+minBetUser.allinGamble);
        }
        for (var i = 0; i <= 9; i++) {
            var user = this._bftable.GetUserByPos(i);
            if (user != null && user.userInfo != null && user.isIns) {
                var card1 = "";
                var card2 = "";
                //??????????????????????????????
                if (this.insType == 2 && minBetUser.player.userid == user.player.userid)
                    continue;
                // let ipos: CommonPosValSD = null;
                // for (var j = 0; j < this.model.insIpos.length; j++) {
                //     if (this.model.insIpos[j].pos == user.player.userid) {
                //         ipos = this.model.insIpos[j];
                //         break;
                //     }
                // }
                // if (ipos != null) {
                //     if (ipos.val != 0 && ipos.val != this.insType) {
                //         // console.error("?????????");
                //         continue;
                //     }
                // } else {
                //     continue;
                // }
                var obj = this.ui_InsUserCardList.addItemFromPool().asCom;
                obj.getChild("userName").asTextField.text = user.userInfo.py._n;
                if (user.serverpos == this.model._posServer) {
                    obj.getChild("toubaoing").visible = true;
                    obj.getChild("outsCnt").asTextField.text = "";
                    card1 = F_TexasViewCtr_1.default.instance.Model._ShouPai == null || F_TexasViewCtr_1.default.instance.Model._ShouPai[0] == null ? CardRedbetComp_1.default.cardTypeName : F_TexasViewCtr_1.default.instance.Model._ShouPai[0] + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
                    card2 = F_TexasViewCtr_1.default.instance.Model._ShouPai == null || F_TexasViewCtr_1.default.instance.Model._ShouPai[1] == null ? CardRedbetComp_1.default.cardTypeName : F_TexasViewCtr_1.default.instance.Model._ShouPai[1] + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
                }
                else {
                    obj.getChild("toubaoing").visible = false;
                    obj.getChild("outsCnt").asTextField.text = "";
                    card1 = user.openCards == null || user.openCards[0] == null ? CardRedbetComp_1.default.cardTypeName : user.openCards[0] + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
                    card2 = user.openCards == null || user.openCards[1] == null ? CardRedbetComp_1.default.cardTypeName : user.openCards[1] + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
                }
                UIUtil_1.UIUtil.loadImage(obj.getChild("userCard1").asLoader, card1, "Texas");
                UIUtil_1.UIUtil.loadImage(obj.getChild("userCard2").asLoader, card2, "Texas");
            }
        }
    };
    /// <summary>
    /// 1 ???????????? 2????????????
    /// </summary>
    /// <param name="type"></param>
    F_TexasView.prototype.showInsAddInfo = function (type) {
        // this.ui_sliderInsAdd.enabled = true;
        this.insType = type;
        switch (type) {
            case 1:
                this.showZhuchiInsAdd();
                this.showZhuchi();
                break;
            case 2:
                this.showFenchiInsAdd();
                this.showFenchi();
                break;
        }
        this.ShowInsUserCardList(); //????????????????????????
        //??????????????????0?????????????????????
        // this.ui_btngiveup.enabled = this.minInsAddGold == 0;
        // this.ui_btngiveup.grayed = this.minInsAddGold > 0;
        // console.error("????????????Max="+this.ui_sliderInsAdd.max);
    };
    F_TexasView.prototype.showZhuchiInsAdd = function () {
        if (this.model.insList31 == null || this.model.insList31.length == 0)
            return;
        var playerGold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold + (this.model.clubid > 0 && this.model.IsSupper ? this.model.cgold : F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold));
        this.bupaiList = [];
        //??????????????????????????????*0.25?????????????????????????????????*0.5f
        var rate = F_TexasViewCtr_1.default.instance.Model._CommonCard.length == 3 ? 0.25 : 0.5;
        var maxGold = Math.min(playerGold, UIUtil_1.UIUtil.NumberToInt(this.dichi * rate));
        this.maxInsAddGold = UIUtil_1.UIUtil.NumberToInt(this.model.curJiangchi31 / this.getRateByCount(this.model.outs31.length)); //maxGold >= this.model.insList31[2] ? this.model.insList31[2] : maxGold;
        this.minInsAddGold = maxGold >= this.model.insList31[0] ? this.model.insList31[0] : maxGold;
        this.zhuInsAddGold = this.zhuInsAddGold == null || this.zhuInsAddGold == 0 ? this.minInsAddGold : this.zhuInsAddGold;
        this.ui_sliderInsAdd.min = this.minInsAddGold;
        this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold; //this.maxInsAddGold;
        this.ui_sliderInsAdd.value = this.zhuInsAddGold;
        this.tempInsAddGold = this.zhuInsAddGold;
        this.showCurInsAdd(this.zhuInsAddGold);
        this.ui_toubaoNum.text = UIUtil_1.UIUtil.formatNumber100(this.zhuInsAddGold) + "";
        var peifu = (this.getRateByCount(this.model.outs31.length) * this.zhuInsAddGold);
        this.ui_peifuNum.text = UIUtil_1.UIUtil.formatNumber100(peifu >= this.model.curJiangchi31 ? this.model.curJiangchi31 : peifu) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length).toString(); //??????
        // this.ui_baobenText.visible = (this.minInsAddGold <= this.model.insList31[1]);
        if (this.minInsAddGold <= this.model.insList31[1]) {
            var rate2 = (this.model.insList31[1] - this.minInsAddGold) / (this.maxInsAddGold - this.minInsAddGold > 0 ? this.maxInsAddGold - this.minInsAddGold : 1);
            // let aa = this.ui_baobenText.parent.GetComponent<RectTransform>().sizeDelta.y * rate2;
            // this.ui_baobenText.node.position = cc.v3(49.2, aa, 0);
        }
        this.bupaiPanelObjList = [];
        this.ui_txtOutsCnt.text = this.model.outs31.length + "";
        this.ui_bupaiPanel.removeChildrenToPool();
        for (var i = 0; i < this.model.outs31.length; i++) {
            var temp = this.model.outs31[i];
            var _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
            var toggle = _tempCard.getChild("Button").asButton;
            var checkmark = _tempCard.getChild("Checkmark").asLoader;
            toggle.clearClick();
            checkmark.visible = false;
            // console.error("this.model.inOrder = " + this.model.inOrder);
            toggle.enabled = this.model.inOrder == 0;
            //????????????????????????outs
            // toggle.onClick(() => {
            //     checkmark.visible = !checkmark.visible;
            //     if (checkmark.visible) {
            //         this.bupaiList.push(temp);
            //     }
            //     else {
            //         this.bupaiList.splice(this.bupaiList.indexOf(temp), 1);
            //     }
            //     this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi31 / this.getRateByCount(this.model.outs31.length));
            //     this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
            //     this.zhuInsAddGold = this.minInsAddGold;
            //     this.ui_sliderInsAdd.value = this.zhuInsAddGold;
            //     this.showCurInsAdd(this.zhuInsAddGold);
            // });
            UIUtil_1.UIUtil.loadImage(_tempCard.getChild("val").asLoader, (temp == 0 ? CardRedbetComp_1.default.cardTypeName : temp + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1)), "Texas");
            var bupaiObj = new BupaiPanelObj();
            bupaiObj.num = temp;
            bupaiObj.com = _tempCard;
            this.bupaiPanelObjList.push(bupaiObj);
        }
        // this.ui_ccardsPanel.removeChildrenToPool();
        // for (var i = 0; i < F_TexasViewCtr.instance.Model._CommonCard.length; ++i) {
        //     let temp = F_TexasViewCtr.instance.Model._CommonCard[i];
        //     let _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
        //     _tempCard.getChild("val").asLoader.url = "ui://Texas/" + (temp == 0 ? CardRedbetComp.cardTypeName : temp);
        // }
    };
    F_TexasView.prototype.showFenchiInsAdd = function () {
        if (this.model.insList32 == null || this.model.insList32.length == 0)
            return;
        var playerGold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold + (this.model.clubid > 0 && this.model.IsSupper ? this.model.cgold : F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold));
        this.bupaiList = [];
        //??????????????????????????????*0.25?????????????????????????????????*0.5f
        var rate = F_TexasViewCtr_1.default.instance.Model._CommonCard.length == 3 ? 0.25 : 0.5;
        var maxGold = Math.min(playerGold, UIUtil_1.UIUtil.NumberToInt((this.dichi * rate)));
        this.maxInsAddGold = UIUtil_1.UIUtil.NumberToInt(this.model.curJiangchi32 / this.getRateByCount(this.model.outs32.length)); //maxGold >= this.model.insList32[2] ? this.model.insList32[2] : maxGold; 
        this.minInsAddGold = maxGold >= this.model.insList32[0] ? this.model.insList32[0] : maxGold;
        this.fenInsAddGold = this.fenInsAddGold == null || this.fenInsAddGold == 0 ? this.minInsAddGold : this.fenInsAddGold;
        this.ui_sliderInsAdd.min = this.minInsAddGold;
        this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold; //this.maxInsAddGold;
        this.ui_sliderInsAdd.value = this.fenInsAddGold;
        this.tempInsAddGold = this.fenInsAddGold;
        this.showCurInsAdd(this.fenInsAddGold);
        this.ui_toubaoNum.text = UIUtil_1.UIUtil.formatNumber100(this.fenInsAddGold) + "";
        var peifu = (this.getRateByCount(this.model.outs32.length) * this.fenInsAddGold);
        this.ui_peifuNum.text = UIUtil_1.UIUtil.formatNumber100(peifu >= this.model.curJiangchi32 ? this.model.curJiangchi32 : peifu) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length).toString(); //??????
        // this.ui_baobenText.visible = (this.minInsAddGold <= this.model.insList32[1]);
        if (this.minInsAddGold <= this.model.insList32[1]) {
            var rate2 = (this.model.insList32[1] - this.minInsAddGold) / (this.maxInsAddGold - this.minInsAddGold > 0 ? this.maxInsAddGold - this.minInsAddGold : 1);
            // let aa = this.ui_baobenText.parent.GetComponent<RectTransform>().sizeDelta.y * rate2;
            // this.ui_baobenText.transform.localPosition = new Vector3(49.2f, aa, 0);
        }
        this.bupaiPanelObjList = [];
        this.ui_txtOutsCnt.text = this.model.outs32.length + "";
        this.ui_bupaiPanel.removeChildrenToPool();
        for (var i = 0; i < this.model.outs32.length; i++) {
            var temp = this.model.outs32[i];
            var _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
            var toggle = _tempCard.getChild("Button").asButton;
            var checkmark = _tempCard.getChild("Checkmark").asLoader;
            toggle.clearClick();
            checkmark.visible = false;
            // console.error("this.model.inOrder = " + this.model.inOrder);
            toggle.enabled = this.model.inOrder == 0;
            //?????????????????????outs
            // toggle.onClick(() => {
            //     checkmark.visible = !checkmark.visible;
            //     if (checkmark.visible) {
            //         this.bupaiList.push(temp);
            //     }
            //     else {
            //         this.bupaiList.splice(this.bupaiList.indexOf(temp), 1);
            //     }
            //     this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi32 / this.getRateByCount(this.model.outs31.length));
            //     this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
            //     this.fenInsAddGold = this.minInsAddGold;
            //     this.ui_sliderInsAdd.value = this.fenInsAddGold;
            //     this.showCurInsAdd(this.fenInsAddGold);
            // });
            UIUtil_1.UIUtil.loadImage(_tempCard.getChild("val").asLoader, (temp == 0 ? CardRedbetComp_1.default.cardTypeName : temp + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1)), "Texas");
            var bupaiObj = new BupaiPanelObj();
            bupaiObj.num = temp;
            bupaiObj.com = _tempCard;
            this.bupaiPanelObjList.push(bupaiObj);
        }
        // this.ui_ccardsPanel.removeChildrenToPool();
        // for (var i = 0; i < F_TexasViewCtr.instance.Model._CommonCard.length; ++i) {
        //     var temp = F_TexasViewCtr.instance.Model._CommonCard[i];
        //     var _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
        //     _tempCard.getChild("val").asLoader.url = "ui://Texas/" + (temp == 0 ? CardRedbetComp.cardTypeName : temp);
        // }
    };
    //????????????
    F_TexasView.prototype.selectBupaiAll = function () {
        if (this.model.inOrder > 0)
            return;
        var index = this.ui_btnBupaiAllCard.getController("isOn").selectedIndex;
        var ison = index == 0 ? false : true;
        ison = !ison;
        this.bupaiList = [];
        for (var i = 0; i < this.bupaiPanelObjList.length; i++) {
            var checkmark = this.bupaiPanelObjList[i].com.getChild("Checkmark").asLoader;
            checkmark.visible = ison;
            if (ison) {
                this.bupaiList.push(this.bupaiPanelObjList[i].num);
            }
            else {
                this.bupaiList.splice(this.bupaiList.indexOf(this.bupaiPanelObjList[i].num), 1);
            }
        }
        this.ui_btnBupaiAllCard.getController("isOn").setSelectedIndex(ison ? 1 : 0);
    };
    //????????????????????????
    F_TexasView.prototype.showInsComCard = function (cards) {
        if (this.InsComCards == null)
            this.InsComCards = [];
        for (var i = 0; i < 5; i++) {
            if (this.InsComCards[i] == null) {
                var card = this.ui_BtnInsurancePanel.getChild("comCard" + (i + 1)).asLoader;
                this.InsComCards[i] = card;
            }
            this.InsComCards[i].visible = false;
        }
        for (var i = 0; i <= cards.length; i++) {
            if (cards[i] != null && cards[i] != 0) {
                UIUtil_1.UIUtil.loadImage(this.InsComCards[i], cards[i] + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
                this.InsComCards[i].visible = true;
            }
            else {
                UIUtil_1.UIUtil.loadImage(this.InsComCards[i], CardRedbetComp_1.default.cardTypeName, "Texas");
                this.InsComCards[i].visible = false;
            }
        }
    };
    F_TexasView.prototype.showCurInsAdd = function (value) {
        this.tempInsAddGold = value;
        //????????????
        this.tempInsAddGold = this.Clamp(this.tempInsAddGold, 0, this.maxInsAddGold);
        if (this.insType == 2) {
            this.fenInsAddGold = this.tempInsAddGold;
            this.showCurInsAddF();
        }
        else {
            this.zhuInsAddGold = this.tempInsAddGold;
            this.showCurInsAddZ();
        }
    };
    F_TexasView.prototype.showCurInsAddZ = function () {
        this.ui_toubaoNum.text = UIUtil_1.UIUtil.formatNumber100(this.zhuInsAddGold) + "";
        var peifu = (this.getRateByCount(this.model.outs31.length) * this.zhuInsAddGold);
        this.ui_peifuNum.text = UIUtil_1.UIUtil.formatNumber100(peifu >= this.model.curJiangchi31 ? this.model.curJiangchi31 : peifu) + "";
        this.ui_peilvNum.text = this.getRateByCount(this.model.outs31.length) + "";
        if (this.zhuInsAddGold > 0) {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text; //??????
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//??????
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length); //??????
            this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs31.length); //??????
        }
    };
    F_TexasView.prototype.showCurInsAddF = function () {
        this.ui_toubaoNum.text = UIUtil_1.UIUtil.formatNumber100(this.fenInsAddGold) + "";
        var peifu = (this.getRateByCount(this.model.outs32.length) * this.fenInsAddGold);
        this.ui_peifuNum.text = UIUtil_1.UIUtil.formatNumber100(peifu >= this.model.curJiangchi32 ? this.model.curJiangchi32 : peifu) + "";
        this.ui_peilvNum.text = this.getRateByCount(this.model.outs32.length) + "";
        if (this.fenInsAddGold > 0) {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text; //??????
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//??????
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length); //??????
            this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs32.length); //??????
        }
    };
    F_TexasView.prototype.showInsJackpot = function (potlist) {
        if (potlist != null && potlist.length > 0) {
            this.ui_insjackpotparant.visible = true;
            this.ui_insjackpotparant.removeChildrenToPool();
            for (var i = 0; i < potlist.length; ++i) {
                if (i == 0)
                    continue; //??????????????????
                var temp = potlist[i];
                var _temppot = this.ui_insjackpotparant.addItemFromPool();
                var potTxt = _temppot.asCom.getChild("insjackpotTxt").asTextField;
                potTxt.text = UIUtil_1.UIUtil.formatNumber100ToK(temp);
                var potIdxTxt = _temppot.asCom.getChild("insjackpotIdx").asTextField;
                potIdxTxt.text = i.toString(); //??????
            }
        }
        else {
            this.ui_insjackpotparant.visible = false;
        }
    };
    //?????????????????????(??????????????????????????????????????? ??????????????????????????????)
    F_TexasView.prototype.GetFollowMinGamble = function () {
        return this.model._mingamble;
    };
    //?????????+???????????????????????????????????????* ?????? +??????????????????--?????????????????????  ???????????????????????????????????? 2 3 4 ???
    //1:???????????? 2:?????????*1/2 3:?????????*2/3 4:?????????*1
    F_TexasView.prototype.GetDaGamble = function (index) {
        var daGamble = this.GetFollowMinGamble();
        var type = 0;
        switch (index) {
            case 1:
                daGamble = this.GetFollowMinGamble();
                break;
            case 2:
                type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 2 : this.GetDaGambleByAddType(type);
                break;
            case 3:
                type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 3 : this.GetDaGambleByAddType(type);
                break;
            case 4:
                type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 4 : this.GetDaGambleByAddType(type);
                break;
            case 5:
                type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
                daGamble = this.GetDaGambleByAddType2(type);
                break;
            case 6:
                type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
                daGamble = this.GetDaGambleByAddType2(type);
                break;
        }
        return daGamble;
    };
    F_TexasView.prototype.GetDaGambleByAddType = function (type) {
        var daGamble = this.GetFollowMinGamble();
        switch (type) {
            case 1:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 4) + this.GetFollowMinGamble();
                break;
            case 2:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 3) + this.GetFollowMinGamble();
                break;
            case 3:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 2) + this.GetFollowMinGamble();
                break;
            case 4:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 5) + this.GetFollowMinGamble();
                break;
            case 5:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 2 / 3) + this.GetFollowMinGamble();
                break;
            case 6:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 4) + this.GetFollowMinGamble();
                break;
            case 7:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1) + this.GetFollowMinGamble();
                break;
            case 8:
                daGamble = UIUtil_1.UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 2) + this.GetFollowMinGamble();
                break;
            case 9:
                daGamble = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold); //Allin
                break;
        }
        if (type < 9 && type >= 1 && daGamble > 100) {
            daGamble = UIUtil_1.UIUtil.NumberToInt(daGamble / 100);
            return daGamble * 100;
        }
        else {
            return daGamble;
        }
    };
    F_TexasView.prototype.GetDaGambleByAddType2 = function (type) {
        var daGamble = this.GetFollowMinGamble();
        switch (type) {
            case 1:
                daGamble = 0;
                break;
            case 2:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 4 + this.GetFollowMinGamble();
                break;
            case 3:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 3 + this.GetFollowMinGamble();
                break;
            case 4:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 2 + this.GetFollowMinGamble();
                break;
            case 5:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 2 / 3 + this.GetFollowMinGamble();
                break;
            case 6:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 3 / 4 + this.GetFollowMinGamble();
                break;
            case 7:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 + this.GetFollowMinGamble();
                break;
            case 8:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 3 / 2 + this.GetFollowMinGamble();
                break;
            case 9:
                daGamble = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold); //Allin
                break;
        }
        if (type < 9 && type >= 2) {
            daGamble = daGamble / 100;
            return daGamble * 100;
        }
        else {
            return daGamble;
        }
    };
    F_TexasView.prototype.GetMinDaGambleType = function () {
        var type1 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
        var type2 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
        var type3 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
        var type4 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
        var type5 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
        var max = Math.max(type1, type2, type3);
        type4 = type4 == 1 ? max : type4; //?????????????????????????????????????????????????????????type?????????
        type5 = type5 == 1 ? max : type5; //?????????????????????????????????????????????????????????type?????????
        var min = Math.min(type1, type2, type3, type4, type5);
        if (type1 == min)
            return 2;
        else if (type2 == min)
            return 3;
        else if (type3 == min)
            return 4;
        else if (type4 == min)
            return 5;
        else
            return 6;
    };
    F_TexasView.prototype.GetDaGambleBase = function () {
        return this.model._curMaxGamble;
    };
    //???????????????
    F_TexasView.prototype.HandleActionBtnsForOtherTurn = function () {
        this.ShowActionBtns(false);
        if (this.IsCanHandleAction())
            this.ShowActionAuto(true);
    };
    //????????????????????????,??????????????? ,????????????????????????,??????????????????????????????(???????????? ??????????????????0)
    F_TexasView.prototype.ShowActionAuto = function (isShow) {
        this.ui_btnAutoQiPai.visible = isShow;
        this.ui_btnAutoFollow.visible = isShow;
    };
    //?????? ??? ????????????
    F_TexasView.prototype.ShowActionAddGamble = function (isShow, daEndGamble) {
        this.ui_btnAdd.visible = this.model.gametype != 20 && isShow;
        this.ui_BtnAddLimit.visible = this.model.gametype != 20 && (isShow);
        this.ui_BtnAddpanel.visible = this.model.gametype != 20 && (isShow);
        this.ui_sliderAdd.visible = false;
        if (isShow) {
            // ?????????????????????
            this.ui_btn1add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4 * 2) + "" : UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(2)) + "";
            if (this.ui_btn1add.getChild("Text").asTextField.text == "0") {
                var num = UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4 * 2);
                var nu = UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(2));
            }
            this.ui_btn12add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4 * 3) + "" : UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(3)) + "";
            this.ui_btn13add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4 * 4) + "" : UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(4)) + "";
            this.ui_btn14add.getChild("Text").asTextField.text = UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(5)) + "";
            this.ui_btn15add.getChild("Text").asTextField.text = UIUtil_1.UIUtil.formatNumber100(this.GetDaGamble(6)) + "";
            this.ui_btn1add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "2X" : this.GetJiazhuType(UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3));
            this.ui_btn12add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "3X" : this.GetJiazhuType(UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5));
            this.ui_btn13add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "4X" : this.GetJiazhuType(UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7));
            this.ui_btn14add.getChild("addType").asTextField.text = this.GetJiazhuType2(UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1));
            this.ui_btn15add.getChild("addType").asTextField.text = this.GetJiazhuType2(UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1));
            this.ui_btn14add.visible = (UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1) > 1 && !this.model.firstTurnStart);
            this.ui_btn15add.visible = (UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1) > 1 && !this.model.firstTurnStart);
            this.ui_sliderAdd.min = 0;
            this.maxAddGold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold / 100);
            var mingamble = this.GetFollowMinGamble(); //???????????????????????????????????????????????????????????????:??????-??????;????????????<=0?????????????????????????????????>=?????????????????????????????????
            if (this.ui_btnXiu.visible)
                this.minAddGold = this.model.brate * 2;
            else {
                if (mingamble <= 0)
                    this.minAddGold = this.model.brate * 2;
                else {
                    if (mingamble < this.model.brate * 2)
                        this.minAddGold = this.model.brate * 4 - mingamble;
                    else
                        this.minAddGold = mingamble * 2;
                }
            }
            // this.minAddGold = this._bftable.myUser.player.gold >= this.minAddGold ? this.minAddGold / 100 : this.maxAddGold;
            var mygold = this._bftable.myUser.player.gold;
            this.minAddGold = this.model.brate * 2 > mygold ? mygold : this.model.brate * 2;
            console.log("this.minAddGold = 1 === ", this.minAddGold);
            this.minAddGold = Number(this.minAddGold.toFixed(2));
            console.log("this.minAddGold = 2 === ", this.minAddGold);
            // this.ui_sliderAdd.max = this.maxAddGold;
            // this.ui_sliderAdd.value = this.minAddGold;
            this.ui_txtNums.text = this.minAddGold + "";
            this.ui_bar_v2.fillAmount = 0;
            this.SetButtonEnable(this.ui_btn1add, this._bftable.myUser.player.gold >= this.GetDaGamble(2), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn12add, this._bftable.myUser.player.gold >= this.GetDaGamble(3), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn13add, this._bftable.myUser.player.gold >= this.GetDaGamble(4), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn14add, this._bftable.myUser.player.gold >= this.GetDaGamble(5), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn15add, this._bftable.myUser.player.gold >= this.GetDaGamble(6), cc.Color.WHITE);
        }
    };
    F_TexasView.prototype.UpdateCurTime = function () {
        if (this.ui_txtCurTime == null) {
            return;
        }
        this.ui_txtCurTime.text = (new Date().getHours()) + ":" + (new Date().getMinutes());
        var progress = this.GetBatteryLevel();
        // this.ui_sliderPower.value = progress;
        this.ui_txtProgress.text = UIUtil_1.UIUtil.NumberToInt(progress * 100) + "%";
    };
    F_TexasView.prototype.GetBatteryLevel = function () {
        return 1; //SystemInfo.batteryLevel;//??????
    };
    F_TexasView.prototype.HandleYuYinState = function () {
        // this.ui_btnYuYin.enabled = !IsSelfWatch() && !IsSelfWaitToTakeIn(); ;
    };
    F_TexasView.prototype.HandleTableRecover = function (table, playerList) {
        var _this = this;
        if (table == null) {
            return;
        }
        // this.isCanExeTexMas = false;
        var sd = table._recover;
        //???????????????
        this.UpdateRecoverData(table);
        //??????????????????
        this.sc_entertable_texas_n(playerList);
        // ??????????????????
        playerList.forEach(function (item) {
            var _tempUser = _this._bftable.GetUserByUserId(item.py.userid);
            if (_tempUser) {
                _tempUser.SetBanker(item.pos == table._recover.bankpos);
            }
        });
        if (this.model._ShouPai != null) {
            // console.log ("shouPai:" + this.model._ShouPai.length);
            for (var i = 0; i < this.model._ShouPai.length; i++) {
                console.log(" I : " + (i + 1) + " id:" + this.model._ShouPai[i]);
            }
        }
        var mingamble = [];
        this.FaPaiNoAni(this.model._ShouPai);
        // ???????????????????????????
        var isOneRound = this.getIsOneRound(sd._pos2bigsmall, sd._pos2gamble);
        //?????????????????? ??????
        sd._pos2gamble.forEach(function (item) {
            var user = _this._bftable.GetUserByUserId(item.pos);
            if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != TexasUserComp_1.UserConnectState.keepSeat) {
                if (isOneRound && sd._pos2bigsmall) {
                    var isAction = false;
                    for (var index = 0; index < sd._pos2bigsmall.length; index++) {
                        var element = sd._pos2bigsmall[index];
                        if (element.pos == item.pos && element.val > item.val) {
                            isAction = true;
                            break;
                        }
                    }
                    _this.SetUserState(item.pos, isAction ? TexasUserComp_1.TexasUserHandleState.follow : TexasUserComp_1.TexasUserHandleState.invalid);
                }
                else {
                    if (item.val > _this.model.brate) {
                        _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.da);
                    }
                    else if (item.val > 0) {
                        _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.follow);
                    }
                    else {
                        _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.invalid);
                    }
                }
                if (item.val > 0) {
                    user.GenerateChip_nbb(UIUtil_1.UIUtil.NumberToInt(item.val), false);
                }
                mingamble.push(item.val);
            }
        });
        //???????????????????????????
        sd._pos2gold.forEach(function (user) {
            var _tempUser = _this._bftable.GetUserByUserId(user.pos);
            if (_tempUser == null)
                return true;
            if (_tempUser.player != null) {
                _tempUser.UpdateMoney(UIUtil_1.UIUtil.NumberToInt(user.val));
            }
        });
        var count = 0;
        if (sd.shoupai != null && sd.shoupai.length > 0) {
            var user = this._bftable.myUser;
            if (user != null) {
                if (!user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != TexasUserComp_1.UserConnectState.keepSeat) {
                    count = Math.max(count, sd.shoupai.length);
                    console.log("user.ShowFirstCard(sd.shoupai) == ", sd.shoupai);
                    this.model._ShouPai = sd.shoupai;
                    // ?????? ?????????????????????????????????????????????????????????
                    var myuserid_1 = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid;
                    var isShowShouPai_1 = false;
                    if (table.delay == 1) { // ????????????
                        console.error("table.delay == ", table.delay);
                        sd._pos2giveup.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // ?????????
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 11 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2look.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // ?????????
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 22 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2allin.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // ?????????
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 33 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2gamble.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val > _this.model.brate) {
                                // ?????????
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai xiazhu == ", isShowShouPai_1);
                            }
                        });
                        if (sd._opencard.length > 0) {
                            // ????????????
                            isShowShouPai_1 = true;
                            console.log("isShowShouPai 44444 == ", isShowShouPai_1);
                        }
                    }
                    else {
                        // ????????????????????????????????????
                        isShowShouPai_1 = true;
                    }
                    console.log("isShowShouPai == ", isShowShouPai_1);
                    if (isShowShouPai_1) {
                        user.ShowFirstCard(sd.shoupai);
                        user.UpdatePos(sd.shoupai);
                    }
                    else {
                        user.ShowFirstCard([0, 0]);
                        user.UpdatePos([0, 0]);
                    }
                }
            }
        }
        if (this.model.isGaming) {
            if (count == 0) {
                this.curSendCardIndex = 1;
            }
            else if (count == 1) {
                this.curSendCardIndex = 2;
            }
            else if (count == 2) {
                this.curSendCardIndex = 3;
            }
        }
        sd._pos2look.forEach(function (item) {
            if (item.val == 1) {
                var user = _this._bftable.GetUserByUserId(item.pos);
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != TexasUserComp_1.UserConnectState.keepSeat) {
                    _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.xiu);
                }
            }
        });
        sd._pos2allin.forEach(function (item) {
            if (item.val == 1) {
                var user = _this._bftable.GetUserByUserId(item.pos);
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != TexasUserComp_1.UserConnectState.keepSeat) {
                    _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.allin);
                }
            }
        });
        sd._pos2giveup.forEach(function (item) {
            if (item.val == 1) {
                var user = _this._bftable.GetUserByUserId(item.pos);
                //?????????????????????????????????????????????
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != TexasUserComp_1.UserConnectState.keepSeat && user.serverpos != sd.ctoken) {
                    _this.SetUserState(item.pos, TexasUserComp_1.TexasUserHandleState.giveUp);
                }
            }
        });
        if (isOneRound) {
            if (sd._pos2bigsmall && sd._pos2bigsmall.length > 2) {
                var stradlle = sd._pos2bigsmall.reduce(function (i1, i2) { return i1.val > i2.val ? i1 : i2; });
                var stradlleUser = this._bftable.GetUserByUserId(stradlle.pos);
                if (stradlleUser != null) {
                    stradlleUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.stradlle);
                }
            }
        }
        this.UpdateJackpot();
        this.UpdateLastJpot();
        this.ShowUIJackpot(this.model.isGaming);
        this.ShowUIWaitPlayPanel();
        this.ShowCommonCards();
        //?????????????????????????????????
        if (sd.ctoken == this.model._posServer) {
            if (this.model._mingamble == null) {
                mingamble.sort(function (a, b) {
                    return b - a;
                });
                this.model._mingamble = mingamble[0] - mingamble[mingamble.length - 1];
            }
            this.model.lefttime = sd.lt;
            this.tokenAction(sd.ctoken, false);
            this.model.lefttime = 15;
        }
        else {
            this.model.lefttime = sd.lt;
            this.tokenAction(sd.ctoken, false);
            this.model.lefttime = 15;
        }
        //?????????????????????????????????????????????
        if (LobbyViewCtr_1.default.instance.Model.TexSitdownData != null) {
            var sidDatas = LobbyViewCtr_1.default.instance.Model.TexSitdownData;
            for (var i = 0; i < sidDatas.length; i++) {
                F_TexasViewCtr_1.default.instance.sc_sitdown_tex_n(sidDatas[i]);
            }
            LobbyViewCtr_1.default.instance.Model.TexSitdownData = null;
        }
        //??????????????????????????????
        var timeout = setTimeout(function () {
            F_TexasViewCtr_1.default.instance.cs_compete_table_info();
            _this.isCanExeTexMas = true;
        }, 1000);
        TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        //????????????????????????
        if (this.model.competeid != 0) {
            UIUtil_1.UIUtil.loadImage(this.ui_zhuobubg, "matchBG1", "Texas");
        }
        // ??????????????????
        if (table._recover.insdata) {
            table._recover.insdata.forEach(function (item) {
                F_TexasViewCtr_1.default.instance.sc_instoken_tex_n(item);
            });
        }
        // ??????????????????
        F_TexasViewCtr_1.default.instance.Model.openplay = table.openplay;
        if (table._recover._status != 3) { // ???????????????
            this.sc_openplay_tex_n();
        }
    };
    F_TexasView.prototype.getIsOneRound = function (_pos2bigsmall, _pos2gamble) {
        var result = false;
        if (_pos2bigsmall && _pos2bigsmall.length > 2) {
            var stradlle = _pos2bigsmall.reduce(function (i1, i2) { return i1.val > i2.val ? i1 : i2; });
            for (var index = 0; index < _pos2gamble.length; index++) {
                var data = _pos2gamble[index];
                // stradlle??????????????????
                if (data.pos == stradlle.pos && data.val == stradlle.val) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    };
    F_TexasView.prototype.updateTableInfo = function () {
        var str0 = ""; //F_TexasViewCtr.instance.Model.MatchCode == null || F_TexasViewCtr.instance.Model.MatchCode == "" ? "" : + TexasLanguage.getLanguageById(1408) + ":" + F_TexasViewCtr.instance.Model.MatchCode + " ";//?????? LanguageConfig.getLanguageById(1408)
        this.ui_txtBase.text = "" + str0 + TexasLanguage_1.TexasLanguage.getLanguageById(1409) + UIUtil_1.UIUtil.formatNumber100(this.model.brate) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.brate * 2) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4) + "(" + UIUtil_1.UIUtil.formatNumber100(this.model.pregamble) + ")"; //??????
        this.ui_txtBase.singleLine = true; //this.HorizontalWrapMode.Overflow;
        this.UpdateJackpot(0, 0);
        this.ui_txtAdd.text = TexasLanguage_1.TexasLanguage.getLanguageById(1410); //??????
        this.ui_txtRound.text = TexasLanguage_1.TexasLanguage.getLanguageById(1411) + ":0"; //??????
        this.ui_txtRoom.text = ""; //TexasLanguage.getLanguageById(1180) + ":" + this.model.Room_tnumber;//?????????
        this.ui_txtRoomNameMid.text = ""; //TexasLanguage.getLanguageById(1743) + ":" + this.model.Room_name;//????????????
        this.ui_txtClubName.visible = (this.model.intoCid > 0);
        this.ui_txtClubName.text = this.model.curSClub != null ? this.model.curSClub.cname : "";
        this.ui_txtPassword.text = ""; //"??????: "+  this.roomPassword;
        this.ui_txtPassword.visible = false; //(!this.roomPassword);
        this.ui_txtGameType.text = (this.model.gametype == 20 ? "AOF" : "") + (this.model.gametype == 10 ? "??????" : "") + (this.model.ins == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1412) + "" : "") + (this.model.gps == 1 ? "GPS" : "") + (this.model.ip == 1 ? "IP" : "") + (this.model.delay == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1945) + "" : "") + (this.model.showCard == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1946) + "" : "") + (this.model.cinto ? TexasLanguage_1.TexasLanguage.getLanguageById(2193) + "" : "") + (this.model.Inflow > 0 ? TexasLanguage_1.TexasLanguage.getLanguageById(2229) + ":" + this.model.Inflow + "% " : "") + (this.model.ios ? TexasLanguage_1.TexasLanguage.getLanguageById(2230) : ""); //??????
        this.ui_txtGameType.visible = false; //(this.model.gametype == 20 || this.model.gametype == 10 || this.model.ins == 1 || this.model.gps == 1 || this.model.ip == 1 || this.model.delay == 1 || this.model.showCard == 1 || this.model.cinto || this.model.Inflow > 0);// || this.model.ios);
        var txtGameType = this.ui_txtGameType.text == "" ? "" : "(" + this.ui_txtGameType.text + ")";
        this.ui_txtRoom.text = TexasLanguage_1.TexasLanguage.getLanguageById(180033) + txtGameType + "-" + this.model.Room_tnumber; //????????????(??????)- roomid;
        //??????
        this.ui_imgMatchRank.visible = false;
        this.ui_txtMatchRank.text = "";
        this.ui_txtMatchLv.text = "";
        this.ui_txtNexBas.text = "";
        this.ui_txtNexTime.text = "";
        if (this.model.competeid != 0) {
            this.ui_txtGameType.visible = true;
            this.ui_txtRoomNameMid.text = ""; //TexasLanguage.getLanguageById(180027) + ":" + this.model.matchName;//????????????
            this.ui_txtRoom.text = TexasLanguage_1.TexasLanguage.getLanguageById(180028) + ":" + this.model.competeid; //???????????? 
            this.ui_txtGameType.text = TexasLanguage_1.TexasLanguage.getLanguageById(180023); //????????????
            this.ui_txtMatchLv.text = TexasLanguage_1.TexasLanguage.getLanguageById(180024) + ":" + this.model.level + "/" + this.model.max_level; //????????????
            this.ui_txtBase.text = TexasLanguage_1.TexasLanguage.getLanguageById(180025) + ":" + (UIUtil_1.UIUtil.formatNumber100(this.model.brate) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.bigblind)); //????????????
        }
    };
    F_TexasView.prototype.UpdateMatchData = function (data) {
        var _this = this;
        this.ui_txtGameType.text = TexasLanguage_1.TexasLanguage.getLanguageById(180023); //????????????
        this.ui_txtMatchLv.text = TexasLanguage_1.TexasLanguage.getLanguageById(180024) + ":" + data.level + "/" + data.max_level; //????????????
        this.ui_txtBase.text = TexasLanguage_1.TexasLanguage.getLanguageById(180025) + ":" + UIUtil_1.UIUtil.formatNumber100(data.baserate) + "/" + UIUtil_1.UIUtil.formatNumber100(data.into); //????????????
        this.ui_txtNexBas.text = "????????????:" + UIUtil_1.UIUtil.formatNumber100(data.next_baserate) + "/" + UIUtil_1.UIUtil.formatNumber100(data.next_into);
        var t = data.next_uplevel_time;
        if (t > 0) {
            if (this.uplevetimeFun != null && this.uplevetimeFun != 0)
                clearTimeout(this.uplevetimeFun);
            this.uplevetimeFun = setTimeout(function () {
                _this.ui_txtNexTime.text = TexasLanguage_1.TexasLanguage.getLanguageById(180026) + ":" + UIUtil_1.UIUtil.getStringTime(t); //????????????
                t--;
            }, 1000, data.next_uplevel_time);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(this.uplevetimeFun);
        }
        else {
            this.ui_txtNexTime.text = "";
        }
    };
    //????????????
    F_TexasView.prototype.UpdateMatchRank = function (data) {
        var rank = 0;
        for (var i = 0; i < data.infos.length; i++) {
            if (data.infos[i].playerid == this.model.mPlayerModel.userid) {
                rank = data.infos[i].rank;
            }
        }
        this.ui_imgMatchRank.visible = true;
        this.ui_txtMatchRank.text = "???" + rank + "???";
    };
    //????????????
    F_TexasView.prototype.MacthEnd = function (data) {
        if (data.type == 0) {
            this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(180021), function () {
                LobbyViewCtr_1.default.instance.cs_signup(data.competeid);
            }, function () {
            }, TexasLanguage_1.TexasLanguage.getLanguageById(180022), TexasLanguage_1.TexasLanguage.getLanguageById(1393)); //??????,??????
        }
        else {
            var award = "";
            for (var i = 0; i < data.infos.length; i++) {
                award += data.infos[i].num + "" + data.infos[i].name + "\n";
            }
            //??????????????????
            this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(180020) + data.rank + "??????" + TexasLanguage_1.TexasLanguage.getLanguageById(1126) + "???\n" + award + ""); //???????????????????????????
        }
    };
    F_TexasView.prototype.UpdateRecoverData = function (table) {
        this.isHaveAddGold = false;
        this.isBigEnd = false;
        this.model.isGaming = table._recover._status == 3;
        this.model._jpot = table.gpot;
        this.model._lastjpot = table.lpot;
        this.model.clicknum = table.clicknum;
        this.model._ShouPai = table._recover.shoupai;
        this.roomPassword = table.pas;
        this.lastGambleGold = 0;
        this.curSendCardIndex = this.model.isGaming ? 1 : 0;
        this.model.PlayingUsers = table._recover._pos2gamble;
        this.model.SetLockGold(table.lockgold);
        this.model.SetMinStartGamble(table.limitgold);
        this.model._CommonCard = table._recover._opencard;
        this.model.curTableOverCount = table._curTableOverCount;
    };
    F_TexasView.prototype.SetUserState = function (userId, state) {
        var user = this._bftable.GetUserByUserId(userId);
        if (user == null || user.player == null) {
            return;
        }
        if (!user.IsWatch() && !user.IsWaitToTakeIn() && this.model.isGaming) {
            if (state == TexasUserComp_1.TexasUserHandleState.giveUp) {
                user.UpdateGiveUpState();
            }
            else {
                user.updateHandleStateText(state);
            }
        }
    };
    F_TexasView.prototype.CheckMoveToMyPos = function () {
        var _this = this;
        this._bftable.userList.forEach(function (item) {
            if (item.localpos <= 0 || item.localpos > _this.model.manNum) {
                return true;
            } //??????pos?????????????????????????????????
            var vec3Index = _this.GetLocalPosByServerPos(item.localpos);
            var posTs = _this.pos.get(vec3Index);
            // item.rectTransform.anchorMax = posTs.anchorMax;
            // item.rectTransform.anchorMin = posTs.anchorMin;
            _this.moveN1toN2(item.node, posTs.node);
            item.SetPosInView(vec3Index);
        });
    };
    F_TexasView.prototype.ResetPos = function () {
        var _this = this;
        this.RefreshCardImage();
        this._bftable.userList.forEach(function (item) {
            if (item.localpos <= 0) {
                return true;
            }
            var vec3Index = _this.GetLocalPosByServerPos(item.localpos);
            var posTs = _this.pos.get(vec3Index);
            // item.rectTransform.anchorMax = posTs.anchorMax;
            // item.rectTransform.anchorMin = posTs.anchorMin;
            _this.moveN1toN2(item.node, posTs.node);
            item.SetPosInView(vec3Index);
        });
    };
    F_TexasView.prototype.GetLocalPosByServerPos = function (serverPos) {
        return this._bftable.GetLocalPos(serverPos);
    };
    F_TexasView.prototype.sc_chatlog = function (data) {
        // this.chatComp.showLog (data);
    };
    F_TexasView.prototype.sc_chat_n = function (data) {
        if (this._bftable == null)
            return;
        var user = this._bftable.GetUserByPos(data.pos);
        if (data.keep > 0 && user != null && user.player != null) {
            this.UpdateUserState(user.player.userid, data.keep, -1);
            this.SetUserForKeepSeat_nn(user.player.userid, data.keep);
        }
        if (user == null) {
            //console.log("chat user is null:" + data.pos);
            return;
        }
        this.HandleChat(data.pos, data.type, data.content, data.tpos);
        user.UpdateMoney(data.gold);
    };
    //1?????????2?????????3??????,4????????? 5.???????????????????????? 6.??????
    F_TexasView.prototype.HandleChat = function (pos, type, content, toPos) {
        if (toPos === void 0) { toPos = -1; }
        if (this._bftable == null)
            return;
        var user = this._bftable.GetUserByPos(pos);
        if (user == null) {
            console.log("chat user is null:" + pos);
            return;
        }
        switch (type) {
            case 1:
                user.PlayChatVoice(pos, content);
                break;
            case 2:
                user.ShowEmoj(content);
                break;
            case 3:
                break;
            case 4:
                user.ShowChatSound(content); //???????????????????????????,???????????????????????????
                break;
            case 5:
                var toUser = this._bftable.GetUserByPos(toPos);
                if (toUser == null) {
                    toUser = user;
                }
                if (toPos != user.serverpos) {
                    this.ShowGiftMove(user.localpos <= 0 ? this.ui_btnRecord.asCom : user.ui_imgEmoj.asCom, toUser.ui_imgEmoj.asCom, content, false);
                }
                else {
                    this.ShowGiftMove(user.localpos <= 0 ? this.ui_btnRecord.asCom : user.ui_imgEmoj.asCom, toUser.ui_imgEmoj.asCom, content, true);
                    // CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1586));//??????????????????
                }
                break;
            case 6:
                var notifyStr = user.player._n + ":" + content;
                this.rollNoyifierComp.addNotify(notifyStr);
                break;
            default:
                break;
        }
    };
    F_TexasView.prototype.ShowVoice = function (pos, content) {
        var user = this._bftable.GetUserByPos(pos);
        if (user == null) {
            console.log("chat user is null:" + pos);
            return;
        }
        var chatOpen = UIUtil_1.PlayerPrefs.GetInt("key_chat_value", 1);
        if (chatOpen == 1)
            user.PlayChatVoice(pos, content);
    };
    F_TexasView.prototype.ShowGift = function (to, content) {
        if (to == null) {
            return;
        }
        // this.ShowEftGift (to, content);
    };
    F_TexasView.prototype.ShowGiftMove = function (from, to, content, isSelf) {
        if (from == null || to == null) {
            return;
        }
        var gifNode = this.userInfoComp.getCreateAnimationNode(content);
        if (gifNode) {
            //??????????????????
            if (isSelf && Texas_1.Texas.giftConfig[gifNode.name]["moveAnima"] != "_") {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1586)); //??????????????????
                return;
            }
            gifNode.setScale(1.1, 1.1);
            this.flyGift(gifNode, from.node, to.node);
        }
        else {
            console.log("GetGift error content:" + content);
        }
    };
    /**
     * @description
     * @param  ???????????????
     * @param  ???????????????
     */
    F_TexasView.prototype.flyGift = function (node, selfNode, targetNode) {
        var _this = this;
        var spineAni = node.getComponent(sp.Skeleton);
        console.log("node = " + node.name);
        console.log("moveAnima = " + Texas_1.Texas.giftConfig[node.name]["moveAnima"]);
        if (Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["moveAnima"], true);
            //??????????????????
            node.position = node.parent.convertToNodeSpaceAR(selfNode.parent.convertToWorldSpaceAR(selfNode.position));
            node.setPosition(node.position);
            //?????????????????????
            var targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(targetPosition.x, targetPosition.y)), cc.callFunc(function () {
                spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["playAnima"], false);
                //??????????????????
                spineAni.setCompleteListener(function () {
                    spineAni.node.parent.removeChild(node);
                    //??????end??????
                    var gifNode = _this.userInfoComp.getCreateAnimationNode(node.name + "_end");
                    if (gifNode != null) {
                        _this.flyGift(gifNode, selfNode, targetNode);
                    }
                });
            })));
        }
        else if (Texas_1.Texas.giftConfig[node.name]["playAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            //?????????????????????
            var targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.position = targetPosition;
            spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["playAnima"], false);
            spineAni.setCompleteListener(function () {
                spineAni.node.parent.removeChild(node);
            });
        }
        else if (Texas_1.Texas.giftConfig[node.name]["playAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] == "_") {
            //?????????????????????
            selfNode.addChild(node);
            node.position = node.parent.convertToNodeSpaceAR(selfNode.parent.convertToWorldSpaceAR(selfNode.position));
            node.setPosition(node.position);
            node.setScale(0.5, 0.5);
            spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["playAnima"], false);
            spineAni.setCompleteListener(function () {
                spineAni.node.parent.removeChild(node);
            });
        }
    };
    F_TexasView.prototype.ShowEftBigWin = function (score) {
        var _this = this;
        this.ui_bigWin.visible = true;
        // this.ui_bigWin.getChild("Text").asTextField.asMogafaNumberField().Play(0, UIUtil.formatNumber100(score), 2);
        this.ui_bigWin.getChild("Text").asTextField.text = UIUtil_1.UIUtil.NumberToInt(score / 100) + "";
        this.bigwinSpin.bgStart();
        this.scheduleOnce(function () {
            _this.ui_bigWin.visible = false;
            _this.bigwinSpin.onDestroy();
        }, 5);
    };
    F_TexasView.prototype.IsDisplayChat = function () {
        // this.ui_btnYuYin.visible = (PlayerPrefs.GetInt("key_chat_value", 1) == 1);
    };
    F_TexasView.prototype.RefreshDeskImage = function () {
        if (this.model.competeid != 0)
            return;
        var deskBgIndex = UIUtil_1.PlayerPrefs.GetInt("key_deskBg_index", 3);
        UIUtil_1.UIUtil.loadImage(this.ui_zhuobubg, "whirlportbg" + deskBgIndex, "Texas");
    };
    F_TexasView.prototype.RefreshCardImage = function () {
        var cardBgIndex = UIUtil_1.PlayerPrefs.GetInt("key_cardBg_index", 3);
        CardRedbetComp_1.default.SetCardImageType(cardBgIndex);
        //??????????????????
        this._bftable.userList.forEach(function (item) {
            item.UpdateAllCardBgImage();
        });
    };
    F_TexasView.prototype.RefreshCommonCards = function () {
        if (this._CommonCardImageList == null || this._CommonCardImageList.length <= 0)
            return;
        this._CommonCardImageList.forEach(function (temp) {
            temp.UpdateCardImage();
        });
    };
    F_TexasView.prototype.RefreshUserCurGamble = function () {
        this._bftable.userList.forEach(function (item) {
            item.resetCurGamble();
        });
    };
    F_TexasView.prototype.CheckBtnBackTableState = function () {
        this.ui_btnBackTable.visible = (this._bftable.myUser.serverpos > 0 && this._bftable.myUser.IsKeep());
    };
    F_TexasView.prototype.ShowUILeftCards = function (isShowShowPai, isShowLeftCard) {
        var isShow = this._bftable.myUser.serverpos > 0 && !this.IsSelfWatch() && !this.IsSelfWaitToTakeIn();
        this.ui_btnShowPai.visible = (isShow && isShowShowPai);
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.ui_btnLeftCards.visible = (isShow && isShowLeftCard);
        if (isShow && isShowShowPai) {
            this.ui_btnShowPai.getChild("Text").asTextField.text = this.getShowPaiCost();
        }
    };
    F_TexasView.prototype.getShowPaiCost = function () {
        var cost = "";
        cost = (this.model.brate / 100 * 2 * Math.pow(2, F_TexasViewCtr_1.default.instance.Model.fshownum)).toFixed(2);
        console.log("getShowPaiCost cost == ", cost);
        return "" + cost;
    };
    F_TexasView.prototype.getLeftCardCost = function () {
        var cost = "";
        // let clicknum: number = this.model.clicknum > 2 ? 2 : this.model.clicknum;
        // cost = (this.model.brate / 1000 * (clicknum + 1)).toFixed(2);
        // console.log("getLeftCardCost cost == ", cost);
        cost = (this.model.brate / 1000).toFixed(2);
        return "" + cost;
    };
    F_TexasView.prototype.ShowXiuPai = function (data) {
        var _this = this;
        if (data == null || data.pos2cards == null) {
            return;
        }
        data.pos2cards.foreach(function (item) {
            var user = _this._bftable.GetUserByUserId(item.pos);
            if (user != null && !_this.model.isGaming) {
                console.log("fgfgfgfgfgfgf value= ", item.vallist);
                user.ShowFirstCard(item.vallist);
            }
        });
    };
    F_TexasView.prototype.ShowMyCard = function (data) {
        var user = this._bftable.GetUserByUserId(data.UserID);
        if (user != null) {
            user.ShowCardAt(data.cardPos, data.card);
        }
    };
    F_TexasView.prototype.ShowMyCardStatus = function (data) {
        var user = this._bftable.GetUserByUserId(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid);
        if (user != null) {
            user.ShowCardStatusAt(data.cpos, data.type);
        }
    };
    F_TexasView.prototype.ShowRotateCards = function (listContent, cards) {
        UIUtil_1.UIUtil.HideChildren(listContent);
        var minCount = Math.min(listContent._children.length, cards.length, 2);
        for (var i = 0; i < minCount; i++) {
            this.ShowRotateCard(listContent._children[i].asCom, cards[i], i * 0.35);
        }
    };
    F_TexasView.prototype.ShowRotateCard = function (ts, value, delay) {
        var _this = this;
        ts.visible = true;
        var card0 = ts._children.length >= 1 ? ts._children[0].asCom : null;
        var card1 = ts._children.length > 1 ? ts._children[1].asLoader : null;
        UIUtil_1.UIUtil.loadImage(card0.asLoader, CardRedbetComp_1.default.cardTypeName, "Texas");
        UIUtil_1.UIUtil.loadImage(card1.asLoader, value + "_" + UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
        ts.node.stopAllActions();
        card0.visible = true;
        if (card1 != null) {
            card1.node.active = false;
            card1.visible = false;
        }
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        var action = cc.sequence(
        // cc.delayTime(delay),
        // cc.rotate3DTo(delay,0),
        cc.spawn(cc.scaleTo(0.2, 0, 1), cc.skewTo(0.2, 0, 20)), cc.callFunc(function () {
            card0.node.active = false;
            card0.visible = false;
            if (card1 != null) {
                card1.node.active = true;
                card1.visible = false;
            }
            _this.node.skewY = -20;
        }), cc.spawn(cc.scaleTo(0.2, 1, 1), cc.skewTo(0.2, 0, 0)));
        ts.node.runAction(action);
    };
    F_TexasView.prototype.PlaySendCardAudio = function (count, interval) {
        if (interval === void 0) { interval = 0.052; }
        this.unschedule(this.sendAudioTimer);
        if (count < 0) {
            count = 0;
        }
        this.scheduleOnce(this.sendAudioTimer = function () {
            AudioManager_1.AudioManager.Singleton.stopEffect("game_deal");
            AudioManager_1.AudioManager.Singleton.play("", "game_deal");
        }, interval);
    };
    F_TexasView.prototype.UpdateTakeInTip = function () {
        this.ui_newMsg_btn.visible = (this.model.ownnerid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid && this.model.cinto && F_TexasViewCtr_1.default.instance.Model.tableApply > 0);
    };
    F_TexasView.prototype.ShowOpenTip = function (isShow) {
        this.ui_openTip.visible = (isShow && this.model.delay == 1);
    };
    F_TexasView.prototype.UpdateConfirmStartBtn = function () {
        this.ShowUIWaitPlayPanel();
        // this.ui_ConfirmStartBtn.visible = (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.openplay && !this.model.isopen);
    };
    F_TexasView.prototype.RefreshTakeInPanel = function () {
    };
    //1?????? 0??????
    F_TexasView.prototype.GetInsSwitch = function () {
        var _this = this;
        var sw = 1;
        var insTipStr = UIUtil_1.PlayerPrefs.GetString("key_insTip_value", "");
        if (insTipStr != null && insTipStr != "") {
            var insArr = insTipStr.split(';');
            insArr.forEach(function (temp) {
                var tableInfoArr = temp.split('+');
                if (tableInfoArr.length < 2)
                    return true;
                if (_this.model.Room_tnumber == tableInfoArr[0]) {
                    sw = Number.parseInt(tableInfoArr[1]);
                }
            });
        }
        return sw;
    };
    F_TexasView.prototype.ShowConfirmHandlePanel = function (isShow) {
        this.ui_confirmHandlePanel.visible = isShow;
    };
    F_TexasView.prototype.Clamp = function (value, min, max) {
        var num = 0;
        num = value < min ? min : value;
        num = value > max ? max : value;
        return num;
    };
    // ??? node1????????? node2?????????
    F_TexasView.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // ????????? node1????????? node2??????????????????
    F_TexasView.prototype.convertNodeSpaceAR = function (node1, node2) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    F_TexasView.prototype.GetJiazhuType = function (type) {
        var str = "";
        switch (type) {
            case 1:
                str = "1/4";
                break;
            case 2:
                str = "1/3";
                break;
            case 3:
                str = "1/2";
                break;
            case 4:
                str = "3/5";
                break;
            case 5:
                str = "2/3";
                break;
            case 6:
                str = "3/4";
                break;
            case 7:
                str = "1X";
                break;
            case 8:
                str = "1.5X";
                break;
            case 9:
                str = "Allin";
                break;
        }
        return str;
    };
    F_TexasView.prototype.GetJiazhuType2 = function (type) {
        var str = "";
        switch (type) {
            case 1:
                str = TexasLanguage_1.TexasLanguage.getLanguageById(2257); //???
                break;
            case 2:
                str = "1/4";
                break;
            case 3:
                str = "1/3";
                break;
            case 4:
                str = "1/2";
                break;
            case 5:
                str = "2/3";
                break;
            case 6:
                str = "3/4";
                break;
            case 7:
                str = "1X";
                break;
            case 8:
                str = "1.5X";
                break;
            case 9:
                str = "Allin";
                break;
        }
        return str;
    };
    F_TexasView.prototype.sc_openplay_tex_n = function () {
        this.ui_pauseview.visible = !F_TexasViewCtr_1.default.instance.Model.openplay;
    };
    var F_TexasView_1;
    F_TexasView._dicInsRate = new Map();
    F_TexasView._cardNum = 2;
    __decorate([
        property(cc.Node)
    ], F_TexasView.prototype, "loadNode", void 0);
    F_TexasView = F_TexasView_1 = __decorate([
        ccclass
    ], F_TexasView);
    return F_TexasView;
}(ViewBase_1.default));
exports.default = F_TexasView;
var BupaiPanelObj = /** @class */ (function () {
    function BupaiPanelObj() {
    }
    return BupaiPanelObj;
}());

cc._RF.pop();