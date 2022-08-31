
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/F_TexasView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.Action = false; //该我操作
        _this.ui_tablecenter = null;
        _this.ui_cachePanel = null;
        _this.ui_texasfightview = null;
        _this.ui_voiceChat = null;
        _this.ui_BtnMessage = null;
        // public ui_btnYuYin:fgui.GButton = null; //麦克风
        //// public Transform ui_linepanel; // 排队界面
        //// public WaitLineComp linePanel;
        //// public Toggle ui_btnAuto; //自动跟注 
        _this.ui_chippoolroot = null; //筹码根节点 
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
        _this.ui_txtRoomNameMid = null; //EmojiText; //房间名
        _this.ui_txtClubName = null; //EmojiText//俱乐部名
        _this.ui_txtRoom = null; //房间号
        _this.ui_txtBase = null; //底注
        _this.ui_txtNexBas = null; //下一盲注
        _this.ui_txtNexTime = null; //下一盲注倒计时
        _this.ui_txtAll = null; //总注
        _this.ui_lasttxtAll = null; //上一轮总注
        _this.ui_Password = null;
        _this.ui_inputPass = null; //输入房间密码
        _this.ui_imgMatchRank = null; //排名背景
        _this.ui_txtMatchRank = null; //排名
        _this.ui_txtRound = null; //回合
        _this.ui_txtAdd = null; //跟注
        _this.ui_txtMoney = null; //
        _this.ui_txtName = null; // 
        _this.ui_UserManager = null;
        _this.ui_bgDeskTip = null;
        _this.ui_txtDeskTip = null;
        _this.ui_HelpSettingPanel = null; //帮助面板 
        _this.ui_balencePanel = null;
        _this.balenceComp = null;
        /////public Button ui_btnChat;
        _this.ui_chatPanel = null;
        _this.chatComp = null;
        _this.ui_rollNotifyPanel = null;
        _this.ui_runtimeRecord = null; //实时战绩界面
        _this.ui_btnClose_Record = null; //关闭实时战绩按钮
        _this.ui_btnRecord = null; //打开实时战绩界面
        _this.recordComp = null;
        _this.ui_btnRefresh = null;
        _this.ui_btnGPS = null;
        _this.ui_historyPanel = null; //牌局回顾
        _this.ui_btnHistory = null; //打开牌局回顾界面
        // public ui_btnCollect: fgui.GButton = null;
        _this.historyComp = null;
        _this.ui_userInfoPanel = null; //玩家信息界面
        _this.ui_waitPanel = null; //不满4人 等待界面
        _this.ui_txtFireTime = null; //倒计时
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
        _this.ui_user1 = null; // 本机用户
        _this.ui_user2 = null;
        _this.ui_user3 = null;
        _this.ui_user4 = null;
        _this.ui_user5 = null;
        _this.ui_user6 = null;
        _this.ui_user7 = null;
        _this.ui_user8 = null;
        _this.ui_user9 = null;
        _this.ui_imgGray = null; //template gray 
        _this.ui_BtnAddLimit = null; //有限加注 
        _this.ui_CommonCards = null; //公牌
        _this.ui_curTexastype = null; //当前牌型
        _this.ui_txtcurtexastype = null;
        _this._CommonCardImageList = [];
        //操作辅助功能
        _this.ui_btnAutoQiPai = null; //自动看牌
        _this.ui_txtAutoQiPai = null;
        _this.ui_btnAutoFollow = null; //自动跟注
        _this.ui_txtAutoFollow = null;
        _this.isAutoQiPai = false; //
        _this.isAutoFollow = false; //
        _this.ui_btnAdd = null; //加注
        _this.ui_btn15add = null; //加注 
        _this.ui_btn14add = null; //加注 
        _this.ui_btn13add = null; //加注 
        _this.ui_btn12add = null; //加注 
        _this.ui_btn1add = null; //加注 
        _this.ui_btnallinadd = null; //加注 
        _this.ui_sliderAdd = null; //进度条
        _this.ui_txtNums = null;
        _this.ui_bar_v2 = null; //滑竿伸缩部分
        ////public Text ui_txtaddDynamic;
        _this.ui_btns = null;
        _this.ui_btnFollow = null; //跟注
        _this.ui_txtfollowDynamic = null;
        _this.ui_btnZheZhao = null; //下注遮罩
        _this.ui_delayAdd = null;
        _this.ui_StatusManager = null;
        _this.ui_btnLeftCards = null;
        _this.ui_btnShowPai = null;
        _this.ui_BtnAddpanel = null; //加注面面板 
        _this.ui_btnXiu = null; //丢/休
        _this.ui_btnqipai = null; //弃牌  
        _this.ui_btnBackTable = null; //回桌
        //保险相关
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
        _this.ui_btnBupaiAllCard = null; //补牌全选
        _this.ui_btnMixBaoxian = null; //最大保额
        _this.ui_btnMaxBaoxian = null; //最小保额
        _this.ui_InsCntDown = null; //延迟时间
        _this.ui_InsDelayGold = null; //延迟金币
        _this.ui_insDelayAdd = null; //保险延迟
        // public ui_btnInsAll:fgui.GButton = null;//全部池
        _this.ui_btnInsZhu = null; //主池
        _this.ui_btnInsFen = null; //分池
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
        _this.ui_btnBaoxianCommit = null; //确认投保
        _this.ui_txtOutsCnt = null;
        _this.ui_ImgEmojGiftTemplete = null;
        _this.ui_txtCurTime = null;
        _this.ui_txtWifi = null;
        _this.ui_txtProgress = null;
        _this.ui_nearUserPanel = null; //附近玩家  
        _this.ui_tiantianxuan = null;
        _this.ui_tableInfogroup = null;
        //// public Transform ui_leftCardsPanel; //查看剩余牌
        //---********* 带入金币
        _this.ui_keyboardPanel = null;
        _this.isHaveAddGold = false;
        _this.isShowAddGoldPanel = true;
        _this.ui_takeGoldPanel = null; //带入金币的窗口
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
        _this.isKeep = 0; //是否留座
        _this.password = "";
        _this.lastGambleGold = 0;
        _this.isfirst = false; //自己是否第一个操作
        _this.ismyturn = false; //自己操作的时候已经设置过手牌
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
        //带出记分相关
        _this.ui_outGoldPanel = null;
        _this.ui_btn_close_outGold = null;
        _this.ui_sliderOutGold = null;
        _this.ui_outGold_num = null;
        _this.ui_btnOutGold = null;
        _this.ui_myGold_num = null;
        _this.ui_btnRefreshGold = null;
        // public broadcast: BroadcastView;
        _this.sendCardAni = [];
        _this.isCanExeTexMas = false; //可以开始执行消息队列
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
        _this._isCanOutGold = false; //正在带出中
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
        _this.bupaiPanelObjList = []; //保存补牌列表，用于全选
        _this.InsComCards = [];
        //比赛数据
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
        // 游戏从后台返回前端显示的监听
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.on(cc.game.EVENT_SHOW, this.gameEventShow.bind(this));
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_HIDE, this.gameEventHide.bind(this));
        this.Init();
        F_TexasViewCtr_1.default.instance.RegistNotify();
    };
    F_TexasView.prototype.gameEventShow = function () {
        var _this = this;
        // 没有断开连接 重新获取最新数据刷新桌面
        console.log("---gameEventShow---");
        cc.game.resume();
        this.isCanUpdate = false;
        setTimeout(function () {
            _this.sendReconnect();
        }, 500);
    };
    //发起重连
    F_TexasView.prototype.sendReconnect = function () {
        this.commonView.showLoading();
        ReconnectManager_1.ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this));
    };
    // 连接成功回调
    F_TexasView.prototype.connectSuccess = function () {
        var _this = this;
        this.commonView.showLoading();
        this.scheduleOnce(function () {
            _this.cs_entertablenum_tex();
        }, 1);
    };
    // 连接失败回调
    F_TexasView.prototype.connectFail = function (tipStr) {
        var _this = this;
        this.commonView.ShowTip(tipStr, function () {
            _this.sendReconnect();
        });
    };
    F_TexasView.prototype.gameEventHide = function () {
        console.log("---gameEventHide---");
        // 如果在投保界面 直接放弃
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
        F_TexasView_1._dicInsRate.set(14, 1.6); //后面的为背保险赔率
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
            "  底注:" + UIUtil_1.UIUtil.formatNumber100(this.model.brate);
        this.UpdateJackpot(0, 0);
        this.UpdateLastJpot(0);
        this.dichi = 0;
        this.ui_txtAll.text = "0";
        this.ui_lasttxtAll.text = "0";
        this.curSelectSClub = null;
        this.ui_txtAdd.text = TexasLanguage_1.TexasLanguage.getLanguageById(1410) + ":0"; //跟注
        this.ui_txtMoney.text = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold) + "";
        this.ui_txtName.text = F_TexasViewCtr_1.default.instance.Model.mPlayerModel._n;
        this.ui_txtRound.text = TexasLanguage_1.TexasLanguage.getLanguageById(1411) + ":0"; //回合
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
        }, remainTime - 1); //游戏时间已到，本局游戏结束后将自动解散
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
            user.ResetPlayingDataAndUI(); //开始下注表示,新局开启,要先重置数据和UI
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
    /// 重置玩家
    /// </summary>
    F_TexasView.prototype.RetsetPlayer = function () {
        this._bftable.userList.forEach(function (data) {
            data.ResetUserCompUI();
        });
        this.Action = false;
    };
    /// <summary>
    /// 根据玩家pos获取玩家位置
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
    /// 注册UI事件
    /// </summary>
    F_TexasView.prototype.RegistEvent = function () {
        var _this = this;
        this.ShowActionBtns(false);
        if (this.model.gametype == 20)
            this.moveN1toN2(this.ui_btnallinadd.node, this.ui_btnAutoFollow.node);
        //敲
        this.ui_btnallinadd.onClick(function () {
            _this.ui_BtnAddLimit.visible = false;
            _this.ui_sliderAdd.visible = false;
            _this.GambleAllIn();
        });
        //休
        this.ui_btnXiu.onClick(function () {
            _this.GambleXiu();
        });
        //跟注,底注跟
        this.ui_btnFollow.clearClick();
        this.ui_btnFollow.onClick(function () {
            _this.GambleMultiple(1);
        });
        //大       
        this.ui_btn1add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(2);
        }); //1倍加注  
        this.ui_btn12add.onClick(function () {
            var type = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
            if (type == 9) //Allin
                _this.GambleAllIn();
            else
                _this.GambleMultiple(3);
        }); //2倍加注      
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
                    _this.tipView.ShowTipLabel("加注金额不能为0");
                    return;
                }
                if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length >= 3) {
                    var minGamble = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
                    if (_this.curAddGold < minGamble * 2) {
                        _this.tipView.ShowTipLabel("下注金额需大于" + minGamble * 2);
                        return;
                    }
                }
                else {
                    var minGamble = UIUtil_1.UIUtil.formatNumber100(F_TexasViewCtr_1.default.instance.Model.turnGamble);
                    if (_this.curAddGold < minGamble) {
                        _this.tipView.ShowTipLabel("下注金额需大于" + minGamble);
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
                    //敲/大
                    if (gambleGold == _this.ui_sliderAdd.max)
                        _this.GambleAllIn();
                    else
                        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gambleGold * 100, true);
                }, function () { }); //确认加注{0}
            }
            else {
                _this.ui_sliderAdd.visible = false;
                _this.ui_BtnAddLimit.visible = false;
                _this.Wait();
                //敲/大
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
        // 丢/弃牌 
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
        //自动丢/休
        this.ui_btnAutoQiPai.onClick(function () {
            _this.SetAutoQiPai(!_this.isAutoQiPai);
            _this.SetAutoGamble(false);
        });
        this.ui_btnAutoFollow.onClick(function () {
            _this.SetAutoGamble(!_this.isAutoFollow);
            _this.SetAutoQiPai(false);
        });
        //回桌
        this.ui_btnBackTable.onClick(function () {
            //回桌，默认是自己的serverpos
            if (_this._bftable.myUser.serverpos > 0) {
                _this.CheckAutoSitDown(_this._bftable.myUser.serverpos);
            }
            _this.CheckBtnBackTableState();
        });
        this.ui_btnLeftCards.onClick(function () {
            if (_this.isCanSeeLeftCards) {
                var cost = _this.ui_btnLeftCards.getChild("Text").asTextField.text;
                if (AppConst_1.AppConst.mPlayerModel.gold < Number(cost)) {
                    CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //金币不足
                    return;
                }
                F_TexasViewCtr_1.default.instance.cs_seerestcard_tex();
            }
            _this.ShowUILeftCards(false, false);
        });
        this.ui_btnShowPai.onClick(function () {
            if (_this.isCanXiuPai) {
                if (AppConst_1.AppConst.mPlayerModel.gold < _this.model.brate * 10) {
                    CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //金币不足
                    return;
                }
                F_TexasViewCtr_1.default.instance.cs_forceshowcard_tex();
            }
            _this.ShowUILeftCards(false, false);
        });
        //#region 保险相关
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
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2212)); //投保额不能为0
                return;
            }
            _this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2217) + (_this.tempInsAddGold / 100), function () {
                _this.Wait();
                F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
                _this.ui_funcBtns.visible = true;
            }, function () { }); //确认投保{0}
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
            console.log("拉杆值：" + UIUtil_1.UIUtil.NumberToInt(slider.value));
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(slider.value));
            if (_this.tempInsAddGold <= 0) {
                _this.ui_fenchiTip.text = ""; //请选择分池
                return;
            }
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
        });
        //this.ui_sliderInsAdd.on(fgui.Event.TOUCH_END, (slider) => {
        this.ui_btnBaoxianCommit.onClick(function () {
            if (_this.tempInsAddGold <= 0) {
                _this.ui_fenchiTip.text = ""; //请选择分池
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2212)); //投保额不能为0
                return;
            }
            if (UIUtil_1.PlayerPrefs.GetInt("key_lagan_value", 0) == 1) {
                CommonCtr_1.CommonCtr.instance.ShowTipCallback(TexasLanguage_1.TexasLanguage.getLanguageById(2217) + (_this.tempInsAddGold / 100), function () {
                    _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
                    _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
                    _this.ui_BtnInsurancePanel.visible = false;
                    F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
                }, function () { }); //确认投保{0}
            }
            else {
                _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
                _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
                _this.ui_BtnInsurancePanel.visible = false;
                F_TexasViewCtr_1.default.instance.cs_insurance_tex(F_TexasViewCtr_1.default.instance.Model._posServer, _this.zhuInsAddGold, _this.fenInsAddGold, _this.bupaiList.length <= 0 ? null : _this.bupaiList);
            }
        });
        //#endregion
        this.ui_delayAdd.onClick(function () {
            if (AppConst_1.AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr_1.default.instance.Model.delayCount == -1 ? 0 : UIUtil_1.UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr_1.default.instance.Model.delayCount)))) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //金币不足
            }
            else {
                _this.cs_delay_tex();
            }
        });
        this.ui_insDelayAdd.onClick(function () {
            if (AppConst_1.AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr_1.default.instance.Model.delayCount == -1 ? 0 : UIUtil_1.UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr_1.default.instance.Model.delayCount)))) {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //金币不足
            }
            else
                _this.cs_delay_tex();
        });
        this.ui_sliderTakeGold.on(fgui.Event.STATUS_CHANGED, function (slider) {
            var num = (UIUtil_1.UIUtil.NumberToInt(slider.value) + 1) * _this.minTakeGold;
            //AOF模式最后一个倍数不按照minTakeGold的倍数
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
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2219)); //请选择一个俱乐部
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
                //CommonCtr.instance.ShowTip("带入 数据 错误:curTakeGold" + curTakeGold + " max:" + maxTakeGold);
            }
        });
        this.ui_btnRechargeGold.onClick(function () {
            //充值
        });
        this.ui_btn_close_takeGold.onClick(function () {
            if (_this._bftable.myUser != null && _this._bftable.myUser.IsWaitToTakeIn()) {
                F_TexasViewCtr_1.default.instance.cs_sitdownwaitup_tex(); //占座的时候不带入直接变为旁观
            }
            _this.HideUITakeGoldPanel();
        });
        this.ui_BtnMessage.onClick(function () {
            _this.ShowUIChatPanel(true);
        });
        this.ui_btnRecord.onClick(function () {
            console.log("ui_runtimeRecord动作 == " + _this.ui_historyPanel.node.getNumberOfRunningActions());
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
            console.log("ui_historyPanel动作 == " + _this.ui_historyPanel.node.getNumberOfRunningActions());
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
            CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1583)); //线路切换成功
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
        this.ui_GiveUpConfirm.getChild("tipCloseText").text = TexasLanguage_1.TexasLanguage.getLanguageById(1395); //弃牌
        this.ui_GiveUpConfirm.onClick(function () {
            _this.ShowConfirmHandlePanel(false);
            F_TexasViewCtr_1.default.instance.cs_giveup_tex(F_TexasViewCtr_1.default.instance.Model._posServer);
            _this.openBtnZhezao();
        });
        this.ui_CheckConfirm.getChild("tipOKText").text = TexasLanguage_1.TexasLanguage.getLanguageById(1297); //让牌
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
        //补牌全选
        this.ui_btnBupaiAllCard.onClick(function () {
            _this.selectBupaiAll();
            _this.showCurInsAdd(_this.tempInsAddGold);
        });
        this.ui_btnMixBaoxian.onClick(function () {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            _this.ui_sliderInsAdd.value = _this.ui_sliderInsAdd.min;
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(_this.ui_sliderInsAdd.min));
            // if (this.tempInsAddGold <= 0) {
            // this.ui_fenchiTip.text = "";//请选择分池
            //     return;
            // }
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
        });
        this.ui_btnMaxBaoxian.onClick(function () {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            _this.ui_sliderInsAdd.value = _this.ui_sliderInsAdd.max;
            _this.showCurInsAdd(UIUtil_1.UIUtil.NumberToInt(_this.ui_sliderInsAdd.max));
            _this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(_this.zhuInsAddGold + _this.fenInsAddGold) + "";
            _this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
        });
        this.ui_sliderOutGold.on(fgui.Event.STATUS_CHANGED, function (slider) {
            var num = UIUtil_1.UIUtil.NumberToInt(slider.value);
            _this.ui_outGold_num.text = num + "";
            var curGold = UIUtil_1.UIUtil.formatNumber100(_this.model.tableLockGold);
        }, this);
        //发送带出消息
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
        //重新刷新时间,为了保持跟其他玩家分牌倒计时一致，同时使用通知来更新时间    
        this._bftable.userList.forEach(function (tempUser) {
            if (tempUser == null || tempUser.player == null)
                return true;
            //每新的一回合,还原玩家,大,敲等操作状态
            if (tempUser.player.userid == data.UserID) {
                if (data._msgid <= 0 && tempUser.self) //isReBack()
                 {
                    //如果是自己回合，要显示服务器自己回合时间
                    tempUser.showDelay(_this.model.lefttime);
                }
                else
                    tempUser.showDelay(data.time);
                if (tempUser.self) //如果是自己要刷新次数
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
        this.ui_txtAutoFollow.text = isAuto ? TexasLanguage_1.TexasLanguage.getLanguageById(1393) : TexasLanguage_1.TexasLanguage.getLanguageById(2233); //取消 自动//n看牌
    };
    F_TexasView.prototype.SetAutoQiPai = function (isAuto) {
        this.isAutoQiPai = isAuto;
        this.ui_txtAutoQiPai.text = isAuto ? TexasLanguage_1.TexasLanguage.getLanguageById(1393) : TexasLanguage_1.TexasLanguage.getLanguageById(1294); //取消 自动\n让/丢
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
            winer.ShowCard(_shoupai.vallist); //结算需要所有人能看到手牌了
        });
    };
    /// <summary>
    /// 查看余牌后显示所有的公牌
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
        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //查看剩余公牌    
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
            if (this.showCardIndex == 5) { //5张牌都发完了
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
            this.ShowSelfMaxCards(); //没有公牌只有手牌的时候也要展示牌型                       
        }
    };
    F_TexasView.prototype.showCommonAni = function () {
        var _this = this;
        if (F_TexasViewCtr_1.default.instance.Model._CommonCard.length < 3) {
            console.log("公牌数量错误 = " + F_TexasViewCtr_1.default.instance.Model._CommonCard.length);
            return;
        }
        if (this.isSending)
            return;
        if (this.showCardIndex < 3) {
            // 前三张还没发
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            this.scheduleOnce(function () {
                _this.ui_CommonCards.visible = true;
                _this.ShowCommonAniBy3();
            }, 0.2);
        }
        else if (this.showCardIndex == 3) {
            // 发第四张牌
            this.ShowCommonAniBy4_5(4);
        }
        else if (this.showCardIndex == 4) {
            // 发第五张
            this.ShowCommonAniBy4_5(5);
        }
        else {
            // 都发完了
        }
        // if (F_TexasViewCtr.instance.Model._CommonCard.length == 3) //前三张首牌动画
        // {
        //     if (this.show3cards) {
        //         return;
        //     }
        //     //发前三张公牌前，回收筹码
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
        //         //如果最后两张牌同时推送过来需要依次展示
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
        //         //如果同时推过来4张或者5张公牌的时候需要一次展示
        //         //console.log("ddddddddddddddddddddddddddd F_TexasViewCtr.instance.Model._CommonCard.Count ==== " + F_TexasViewCtr.instance.Model._CommonCard.Count);
        //         this.ShowCommonAniBy3(() => {
        //             this.ShowCommonAniBy45(1, 3);
        //         });
        //     }
        // }
    };
    /// <summary>
    /// 前三张动画.总时长1.5S
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
                        if (onComplete != null) //公牌未播完不赋值
                         {
                            onComplete();
                        }
                        // else//只播三张的时候，播完判断是否要播放第四五张牌
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
    /// 第四张第五张公牌动画
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
    /// 显示自己最大牌型，其他的牌变灰
    /// </summary>
    F_TexasView.prototype.ShowSelfMaxCards = function () {
        var _this = this;
        if (F_TexasViewCtr_1.default.instance.Model.delay == 1) {
            if (!this.ismyturn)
                return; //延时看牌时候发牌结束并且到过自己的回合才能显示牌型                
        }
        this.selectFiveCards = [];
        this.maxCards = [];
        this._bftable.userList.forEach(function (tempUser) {
            if (tempUser == null)
                return true;
            //自己弃牌回桌后仍在playing里面，所以需要判断是否离桌状态，离桌状态就不显示底牌和牌型&& F_TexasViewCtr.instance.Model.isGaming
            if (tempUser.self && !tempUser.IsWatch() && tempUser.IsPlaying() && !tempUser.IsKeep()) {
                console.log("this.model._ShouPai == ", _this.model._ShouPai);
                console.log("this.curCommondCards == ", _this.curCommondCards);
                _this.selectFiveCards = Texas_1.Texas.GetFiveFromSeven(_this.model._ShouPai, _this.curCommondCards, _this.model._ShouPai.length + _this.curCommondCards.length);
                console.log("selectFiveCards=" + _this.selectFiveCards);
                if (_this.selectFiveCards.length >= 2) //之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 
                 {
                    _this.maxCards = Texas_1.Texas.GetMaxTypeCards(_this.selectFiveCards);
                    tempUser.ShowMaxCards(_this.selectFiveCards, _this.maxCards);
                    _this.showCommonMaxCards(_this.maxCards);
                    _this.ui_curTexastype.visible = true;
                    var _type = Texas_1.Texas.GetTexasType(_this.selectFiveCards);
                    if (_this.selectFiveCards.length == 2) //两张手牌的时候牌型只显示高牌和一对
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
    /// 获取下一个空位
    /// </summary>
    /// <returns></returns>
    F_TexasView.prototype.GetNextEmptyPos = function () {
        return null;
    };
    /// <summary>
    /// 获取所有位置
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
        console.log("===是否自己回合==" + _isMine);
        if (_isMine) {
            console.log("IsCanHandleAction === ", this.IsCanHandleAction());
            if (this.IsCanHandleAction()) {
                if (this.isAutoQiPai) {
                    this.ShowActionBtns(false);
                    this.AutoQiPai();
                    this.SetAutoGamble(!this.isAutoQiPai); //自动让/丢一次后取消自动让/丢
                    this.SetAutoQiPai(false);
                }
                else if (this.isAutoFollow && this.GetFollowMinGamble() <= 0) //自动看牌
                 {
                    this.ShowActionBtns(false);
                    this.AutoGambleGold();
                    this.SetAutoGamble(!this.isAutoFollow); //自动跟牌一次后取消自动跟牌
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
                // if (isShowCard)//延时看牌的时候才显示自己的手牌，不是自己才是到自己回合能看到手牌
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
                //补丁 修改发完牌到自己操作的时候有操作面板但是没显示首牌bug
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
                console.log("自己是观众 不能处理打牌操作");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("自己是占座中 不能处理打牌操作");
            }
        }
        else {
            this.Wait(); //隐藏界面要先执行
            //自己在玩时,不是自己的回合时,应该显示辅助按钮
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
                //延时防止发牌未完成
                var timeout = setTimeout(function () {
                    _this.HandleInsuranceBtnsForSelfTurn();
                }, 1000);
                TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
                this.ShowDelay(true); //保险模式也要开启延时
            }
            if (this.IsSelfWatch()) {
                console.log("自己是观众 不能处理打牌操作");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("自己是占座中 不能处理打牌操作");
            }
        }
        else {
        }
    };
    F_TexasView.prototype.ShowDelay = function (isShow) {
        this.ui_delayAdd.visible = (isShow && F_TexasViewCtr_1.default.instance.Model.delayCount < 5); //延时功能不限制次数,现在修改为单局上限是5次
        this.ui_insDelayAdd.visible = (isShow && F_TexasViewCtr_1.default.instance.Model.delayCount < 5); //延时功能不限制次数,现在修改为单局上限是5次
        if (isShow) {
            var delayCost = this.ui_delayAdd.getChild("Text").asTextField;
            var expend = this.getDelayExpend();
            // console.log("expend === ", expend);
            // delayCost.text = F_TexasViewCtr.instance.Model.delayCount == -1 ? TexasLanguage.getLanguageById(2181) : (20.0 * (UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr.instance.Model.delayCount)))).toString();//-1时候是第一次延时免费
            delayCost.text = expend;
            this.ui_InsDelayGold.text = delayCost.text;
            this.ui_InsCntDown.text = "+15s";
        }
    };
    // 计算延时消耗
    F_TexasView.prototype.getDelayExpend = function () {
        var expend = 0;
        var count = F_TexasViewCtr_1.default.instance.Model.delayCount;
        if (count == -1) {
            return TexasLanguage_1.TexasLanguage.getLanguageById(2181);
        }
        console.log("this.model.brate == ", this.model.brate);
        var brate = UIUtil_1.UIUtil.formatNumber100(this.model.brate);
        if (brate < 1) { //微
            expend = 20;
        }
        else if (brate == 1 || brate == 2 || brate == 5) { //小
            expend = 200;
        }
        else if (brate == 10 || brate == 25 || brate == 50) { //中
            expend = 500;
        }
        else if (brate == 100 || brate == 200 || brate == 500) { //大
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
    //自己操作显示倒计时
    F_TexasView.prototype.ShowClock = function (cdTime, totalTime, isShowText, formatTime) {
        var _this = this;
        if (cdTime === void 0) { cdTime = 15; }
        if (totalTime === void 0) { totalTime = 15; }
        if (isShowText === void 0) { isShowText = true; }
        if (formatTime === void 0) { formatTime = null; }
        if (this.model.isinsurance)
            formatTime = ""; //放弃
        else
            formatTime = TexasLanguage_1.TexasLanguage.getLanguageById(1395) + "\n"; //弃牌
        var cd = cdTime;
        this.endTime = UIUtil_1.UIUtil.NumberToInt(cc.director.getTotalTime() / 1000) + cdTime;
        this.ui_selfEndtimetips.fillAmount = cd / totalTime + 0.01;
        this.showUICountTimeText(isShowText, cd, formatTime);
        this.ui_selfEndtimetips.node.stopAllActions();
        this.ui_selfEndtimetips.node.stopAllActions();
        // this.ui_selfEndtimetips.DOFillAmount (0, cd).SetEase (Ease.Linear);
        if (cd > 5)
            AudioManager_1.AudioManager.Singleton.stopEffect("texas_timeout"); //如果倒计时>5秒取消5秒提示语音
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
            // 倒计时为5，播放警告
            if (cd == 5) {
                AudioManager_1.AudioManager.Singleton.play("", "texas_timeout");
            }
        }, 1, cd);
    };
    //展示倒计时
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
    // 发牌 
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
    //     if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) { return; } //当前没有在游戏玩家 
    //     //_myCards 为空 表示自己是观众，不会发手牌，但是，需要处理动画
    //     let count = 0;
    //     let _tempUserList: TexasUserComp[] = this._bftable.userList;
    //     for (var i = 0; i < F_TexasView._cardNum; i++) {
    //         let userIndex = 0;
    //         for (var j = 0; j < this.model.PlayingUsers.length; j++) {
    //             let playingUser: CommonPosValSD = this.model.PlayingUsers[j];
    //             if (playingUser.val <= 0)
    //                 continue; //玩家下注值小于等于0
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
        } //当前没有在游戏玩家 
        //_myCards 为空 表示自己是观众，不会发手牌，但是，需要处理动画
        var count = 0;
        for (var j = 0; j < this.model.PlayingUsers.length; j++) {
            var userIndex = 0;
            for (var i = 0; i < F_TexasView_1._cardNum; i++) {
                var playingUser = this.model.PlayingUsers[j];
                if (playingUser.val <= 0)
                    continue; //玩家下注值小于等于0
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
            } //已经发过的牌不会再发     
            this_3.curSendCardIndex = 2 + i; //2 表示 第三张牌
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
        } //当前没有在游戏玩家
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
    // 座位玩家弃牌 
    F_TexasView.prototype.GiveUp = function (pos) {
        if (this._bftable == null)
            return;
        var user = this._bftable.GetUserByPos(pos);
        if (user == null)
            return;
    };
    // #region
    /// <summary>
    /// 下注请求返回
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_gamble_tex = function (data) {
    };
    /// <summary>
    /// 购买保险返回
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_insurance_tex = function (data) {
        if (this.insTimerCB) {
            this.unschedule(this.insTimerCB);
            this.ui_BtnInsurancePanel.visible = false;
        }
    };
    /// <summary>
    /// 弃牌请求返回
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_giveup_tex = function (data) {
        this.hideUIAllBtns();
    };
    /// <summary>
    /// 游戏开始了
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
            _this.model.SetUserData_isW_pos(_gamble.pos, _gamble.val > 0 ? 0 : 1); //强制设置
            _this.sc_tablestartgamble_tex_n(_gamble.pos, UIUtil_1.UIUtil.NumberToInt(_gamble.val), false, _bankerPos); //首注播放动画到玩家筹码
            lastJport += UIUtil_1.UIUtil.NumberToInt(_gamble.val);
        });
        //找出第一个操作的玩家是否是自己
        var firstdata = _pos2Bigsmall.reduce(function (i1, i2) { return i1.val < i2.val ? i1 : i2; });
        var firstUser = this._bftable.GetUserByUserId(firstdata.pos);
        if (firstUser != null && firstUser.self) {
            this.isfirst = true;
        }
        if (isReback) {
            this.moveMyGambleToTableGameble();
            F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
            this.UpdateLastJpot(lastJport); //牌局开始 上轮底池显示所有游戏玩家的首注总和
            this.UpdateJackpot(lastJport); //牌局开始 底池显示所有游戏玩家的首注总和
            this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
        }
        else { //首注播放筹码动画到奖池并更新桌面筹码信息
            this.scheduleOnce(function () {
                _this.moveMyGambleToTableGameble();
                F_TexasViewCtr_1.default.instance.RefreshUserCurGamble();
                _this.UpdateLastJpot(lastJport); //牌局开始 上轮底池显示所有游戏玩家的首注总和
                _this.UpdateJackpot(lastJport); //牌局开始 底池显示所有游戏玩家的首注总和
            }, 0.2);
            //首注动画展示完成后，展示大小盲押注到对应玩家筹码上
            this.scheduleOnce(function () {
                _this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
            }, this.moveToTableTime + 0.2);
        }
        //更新金币，前面的下注和stradlle下注不会更新金币
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
        // aof模式下下注之后金币不足直接首先是allin
        this.scheduleOnce(function () {
            for (var i = 0; i < _pos2Gamble.length; i++) {
                var gamble = _pos2Gamble[i];
                for (var index = 0; index < _pos2Gold.length; index++) {
                    var user = _pos2Gold[index];
                    if (user.pos == gamble.pos) {
                        if (user.val == 0 && gamble.val > 0) { // 直接allin
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
    /// 德州扑克首先要执行一次首注到奖池的动画后再显示大小盲和发牌
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
        this.UpdateJackpot(dxJport + lastjport); //大小盲押注后 底池显示所有游戏玩家的首注和大小盲总和
        //stradlle玩家要显示玩家状态为stradlle,两个玩家的时候没有stradlle
        if (_pos2Bigsmall.length > 2) {
            var stradlle = _pos2Bigsmall.reduce(function (i1, i2) { return i1.val > i2.val ? i1 : i2; });
            var stradlleUser = this._bftable.GetUserByUserId(stradlle.pos);
            if (stradlleUser != null) {
                stradlleUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.stradlle);
            }
        }
        //补抓头
        if (pos2strad != null) {
            for (var i = 0; i < pos2strad.length; i++) {
                var _tempUser = this._bftable.GetUserByUserId(pos2strad[i].pos);
                if (_tempUser != null) {
                    _tempUser.updateHandleStateText(TexasUserComp_1.TexasUserHandleState.strad);
                    _tempUser.GenerateChip_nbb(pos2strad[i].val, false, false);
                    console.error(_tempUser.player._n + "补抓头：" + pos2strad[i].val);
                }
            }
        }
        console.log("fapaiAfterFirstGambleAni _showCard === ", _showCard);
        this.FaPai_nb(_showCard, true);
        this.curSendCardIndex = 1;
    };
    /// <summary>
    /// 准备就绪
    /// </summary>
    F_TexasView.prototype.sc_ready_tex = function (data) {
        this.curSendCardIndex = 0;
    };
    F_TexasView.prototype.sc_ready_tex_n = function (data) {
    };
    // 游戏结束 
    F_TexasView.prototype.sc_end_tex_n = function (data) {
        var _this = this;
        //#region 结算显示
        data._pos2ShouPai.forEach(function (_shoupai) {
            var winer = _this._bftable.GetUserByUserId(_shoupai.pos);
            if (winer == null)
                return true;
            winer.ShowCard(_shoupai.vallist); //结算需要所有人能看到手牌了
        });
        data._pos2MaxPai.forEach(function (_shoupai) {
            var _tUser = _this._bftable.GetUserByUserId(_shoupai.pos);
            if (_tUser == null)
                return true;
            _tUser.ShowMaxCard(_shoupai.vallist); //结算需要所有人能看到手牌了
            _tUser.SetShowStateGray();
        });
        if ((data._pos2ShouPai == null || data._pos2ShouPai.length <= 0) && data.Showcard != null && data.Showcard.length > 0) //比牌就不展示秀牌
         {
            data.Showcard.forEach(function (_showpaiUser) {
                var _tUser = _this._bftable.GetUserByUserId(_showpaiUser.uid);
                if (_tUser == null || _tUser.self || _showpaiUser.cards == null || _showpaiUser.cards.length <= 0)
                    return true;
                _tUser.DisplayShowCard(_showpaiUser.cards); //展示秀牌
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
        //先处理数据,保证数据不出错，此处金币房处理金币，俱乐部币房处理俱乐部币
        if (this.model.clubid > 0 && this.model.IsSupper) {
            this.model.cgold = data.ugold; //坐下刷新玩家身上的俱乐部币
            // if (this.model.curSClub != null)//玩家坐下过刷新玩家桌子上的俱乐部币
            // ClubViewCtr.instance.UpdateClubInfocgold(this.model.curSClub.cid, data.ugold);
            // else
            //     console.log("club is null"); 
        }
        else {
            // LobbyViewCtr.instance.sc_freshgold_n(2, data.ugold); //处理用户身上的金币data.pos2gold里面自己的金币
        }
        data._pos2GoldWin.forEach(function (item) {
            if (item.val > 0) {
                var userComp = _this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("HandleTableAndUserData_end  userComp == null item.pos=" + item.pos);
                }
            }
        });
        //绑定最终金币
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
        //删除已经输完的玩家
        data._watchlist.forEach(function (_watch) {
            var _tUser = _this._bftable.GetUserByUserId(_watch.pos);
            if (_tUser == null)
                return true;
            if (_watch.val == 1) {
                if (_tUser.player != null) {
                    _this.model.SetUserData_isW(_tUser.player.userid, 1); //变为观众
                }
            }
        });
        //这里只处理数据
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
                    //不处理
                }
                else if (item.val > 0) {
                    if (_tUser.player != null) {
                        console.log("_keeplist ----- 这里只处理数据");
                        // 这里判断是否是重新带入再进来的
                        _this.model.SetUserData_isW(_tUser.player.userid, 1); //变为观众
                        _this.model.SetUserData_isK(_tUser.player.userid, UIUtil_1.UIUtil.NumberToInt(item.val - delayShowTime)); //客户端 强制设置为 留座状态                         
                        _tUser.update_UserInfo(_tUser.userInfo);
                    }
                    _tUser.SetUseConnectState(TexasUserComp_1.UserConnectState.keepSeat);
                }
                else { //这里只删除数据，动画完成账号处理移除
                    // this.model.RemovePlayerList(_tUser.player.userid);
                }
            });
        }
        this.UpdateJackpot(data._jackpot); // 更新桌面上的筹码
        this.UpdateLastJpot(data._jackpot); //最后的上轮底池就是总底池
        //重置id2kepp数据
        this.model.id2keep = [];
    };
    // 这里只处理离开数据
    F_TexasView.prototype.dealEndLeaveData = function (data) {
        var _this = this;
        //这里只处理数据
        if (data._keeplist != null) {
            data._keeplist.forEach(function (item) {
                var _tUser = _this._bftable.GetUserByUserId(item.pos);
                if (_tUser == null)
                    return true;
                if (item.val == 0) {
                }
                else if (item.val > 0) {
                }
                else { //这里只删除数据，动画完成账号处理移除
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
        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //查看剩余公牌    
        this.isCanXiuPai = data._pos2ShouPai.length < data._pos2GoldWin.length; //查看弃牌玩家的首牌(看到首牌的人数小于参与游戏的玩家的人数 就显示秀牌)
        this.ShowUILeftCards(this.isCanXiuPai, this.isCanSeeLeftCards);
        //是否满足开局条件
        this.ShowUIWaitPlayPanel();
    };
    F_TexasView.prototype.HandleTableAnimation_end = function (data) {
        this.setResultWinGold(data._pos2GoldWin); //展示头顶的输赢分数
        this.CheckShowBigWin(data._pos2Score); //展示bigwin
        this.moveMyGambleToTableGameble(data._pos2GoldWin); //移动筹码
        this.DelayMoveTableGambleToWiner(this.moveToTableTime + 0.1, data._pos2GoldWin); //移动筹码
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
                        user.ClearUser(); //清理自己的数据  
                    }
                    else {
                        var existUser = _this.model.GetUserInfo(user.player.userid);
                        if (existUser == null) {
                            _this.RemoveUser(user.player.userid);
                        }
                        else {
                            //留座的玩家，不能修改为等待状态
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
                //console.log("检查是否 显示开局带等待");
                if (_this._bftable) {
                    _this._bftable.userList.forEach(function (user) {
                        if (user.player == null) {
                            user.ClearUser(); //清理自己的数据  
                        }
                        else {
                            var existUser = _this.model.GetUserInfo(user.player.userid);
                            if (existUser == null) {
                                _this.RemoveUser(user.player.userid);
                            }
                            else {
                                //留座的玩家，不能修改为等待状态
                                if (user.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
                                    user.ResetPlayingUI(); //删除玩家桌子上的数据
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
    //#region 结算显示
    F_TexasView.prototype.sc_bigend_tex_n = function (data) {
        var _this = this;
        console.log("[Progress: --- big balence ] sc_bigend_whi_n ");
        if (this.model.competeid == 0) {
            this.isBigEnd = true;
            this.scheduleOnce(function () {
                // 把牌局回顾隐藏
                _this.historyComp.Hide();
                // 延迟显示结算
                _this.ShowUIBalencePanel(data.bigend, data.isnamger);
                //比赛未结束，更新房间信息
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
    //清理桌面上的玩家
    F_TexasView.prototype.ResetAllUsers = function () {
        this.model.SetMyServerPos(0);
        for (var i = 0; i < this._bftable.userList.length; i++) {
            this._bftable.userList[i].ClearUser();
        }
    };
    /// <summary>
    /// 有人进入这桌
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
        this.RemoveUser(user.py.userid); //先删除需要入座的，
        this.model.AddPlayerList(user);
        this.CheckRemainPlayer(id2keep);
        this.model.RemovePos2Apply(user.pos);
        if (aTime > 0) //带入申请中的玩家
         {
            var temp = new cs_base_1.CommonPosValSD();
            temp.val = aTime;
            temp.pos = user.pos;
            this.model.AddPos2ApplyList(temp);
        }
        this.update_UserInfo(user);
        this.CheckMoveToMyPos();
    };
    //已经离桌的玩家，留座时间到了之后不会通知更新，在入座的时候刷新
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
    //断线重连重复检测清楚玩家
    F_TexasView.prototype.UpdateRemoveUser = function (userId) {
        var user = null;
        if (this.removUserCallBack)
            this.unschedule(this.removUserCallBack);
        this.removUserCallBack = function () {
            // console.error("检测到要清楚玩家 1 ：" + userId);
            if (this._bftable)
                user = this._bftable.GetUserByUserId(userId);
            if (user !== null) {
                // console.error("检测到要清楚玩家 2 ：" + userId);
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
                //清理数据:不然不能回到桌子          
            }
            user.ClearUser(); //清理自己的数据  
        }
        this.CheckBtnBackTableState();
        //每次离座都检查是否满足开局条件
        if (!this.model.isGaming) {
            this.ShowUIWaitPlayPanel();
        }
        return this.model.RemovePlayerList(userId); //移除玩家         
    };
    F_TexasView.prototype.update_UserInfo = function (userInfo) {
        var _tempUser = this._bftable.GetUserByUserId(userInfo.py.userid);
        if (_tempUser != null) {
            _tempUser.ClearUser();
            _tempUser.update_UserInfo(userInfo);
            if (userInfo.py.userid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
                this.model.SetMyServerPos(userInfo.pos); //设置我的位置
            }
            this.CheckBtnBackTableState();
            this.ShowUIWaitPlayPanel();
        }
        else {
            //console.log("_bftable.userList.Count:" + _bftable.userList.Count);
        }
    };
    //初始底注,不修改状态,之添加数据
    F_TexasView.prototype.sc_tablestartgamble_tex_n = function (userId, _curGamble, _turnOver, _bankerPos, _allin) {
        if (_allin === void 0) { _allin = false; }
        var _tempUser = this._bftable.GetUserByUserId(userId);
        if (_tempUser == null) {
            return;
        }
        if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) {
            return;
        }
        //_tempUser.ResetPlayingDataAndUI (); //开始下注表示,新局开启,要先重置数据和UI
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
    /// 有人下注
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
        //自己操作返回后，关闭倒计时变为等待状态
        _tempUser.Wait();
        if (data._gamble == 0) { //休
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
                    tempUser.DealTurnChip(); //统一处理一轮的所有筹码动画 
                });
            });
        }
    };
    /// <summary>
    /// 有人弃牌了
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
    /// 有人购买了保险
    /// </summary>
    /// <param name="pos"></param>
    /// <param name="ins"></param>
    F_TexasView.prototype.sc_insurance_tex_n = function (pos, ins) {
        // console.error(pos + "==有人购买了保险 ins=" + ins);
        var _tempUser = this._bftable.GetUserByPos(pos);
        if (_tempUser == null)
            return;
        _tempUser.StopClock();
        _tempUser.updateInsStateText(ins);
    };
    // 有人掉线了 
    F_TexasView.prototype.sc_disconnect_n = function (data) {
        var player = this._bftable.GetUserByPos(data.pos);
        if (player != null) {
            player.DisconnetcOrReline(data.reconnect != 1);
        }
    };
    /// <summary>
    /// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_token_tex_n = function (data, turnChange, delayTime) {
        var _this = this;
        if (delayTime === void 0) { delayTime = 0; }
        //ui_txtAll.text = "总奖池:" + UIUtil.formatNumber( F_TexasViewCtr.instance.Model._jackpot);
        //UpdateJackpot();
        var delay = 0;
        if (F_TexasViewCtr_1.default.instance.Model.isTurnOver) {
            this.UpdateLastJpot(); //当前轮结束更新上轮底池等于总底池
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
            //每新的一回合,还原玩家,大,敲等操作状态
            if (turnChange) {
                tempUser.ResetUserHandleStateForTurn();
            }
            // console.log("===操作玩家：serverpos="+tempUser.serverpos +", pos="+pos);
            if (tempUser.serverpos == pos) {
                tempUser.Execute(turnChange, _this.model.lefttime, delayTime);
            }
            else {
                tempUser.Wait();
            }
            if (isReback && tempUser.self && tempUser.serverpos == pos && !tempUser.self) //如果是自己回合，要显示服务器自己回合时间isReBack()
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
    /// 保险token  用户可能有两个操作，选保额，或不保  
    /// </summary>
    /// <param name="data"></param>
    F_TexasView.prototype.sc_instoken_tex_n = function (pos, turnChange, isFirstTurn, _pos2Shoupai, _pos2win, potlist, ipos) {
        var _this = this;
        var delay = 0;
        if (F_TexasViewCtr_1.default.instance.Model.isTurnOver) {
            delay += 1;
        }
        TimeInfoMgrTex_1.default.instance.AddTimer(delay, function () {
            //先显示保险模式玩家的首牌
            _this._bftable.userList.forEach(function (tempUser) {
                if (tempUser.Empty)
                    return true;
                //显示保险模式玩家的首牌
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(function (tempPosShoupai) {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //保险时候需要所有玩家能看到保险玩家的首牌
                            tempUser.isIns = true;
                        }
                    });
                }
            });
            //展示公牌后，才提示购买保险
            var disCount = _this.model._CommonCard.length - _this.curCommondCards.length >= 0 ? _this.model._CommonCard.length - _this.curCommondCards.length : 0;
            var delayy = disCount <= 0 ? 0 : (disCount >= 3 ? 2 * (disCount - 3) + 1.5 : 2 * (disCount - 1) + 1);
            TimeInfoMgrTex_1.default.instance.AddTimer(delayy + 0.5, function () {
                _this._bftable.userList.forEach(function (tempUser) {
                    if (tempUser.Empty)
                        return true;
                    //每新的一回合,还原玩家,大,敲等操作状态
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
                            if (b == null) //购买保险玩家中不包含当前玩家，等待
                                tempUser.Wait();
                        }
                    }
                    //显示保险模式玩家的赢牌概率
                    if (_pos2win != null && _pos2win.length > 0) {
                        _pos2win.forEach(function (tempPos2win) {
                            if (tempUser.player.userid == tempPos2win.pos) {
                                tempUser.ShowInsWinPer_num(UIUtil_1.UIUtil.NumberToInt(tempPos2win.val)); //保险时候需要所有玩家能看到保险玩家的获胜比例
                            }
                        });
                    }
                });
            });
            _this.UpdateLastJpot();
            //展示手牌后再展示公牌
            TimeInfoMgrTex_1.default.instance.AddTimer(1, function () {
                _this.ShowCommonCards();
            });
            _this.showInsJackpot(potlist);
        });
    };
    /// <summary>
    /// 未开保险，玩家allin后先展示手牌再播放公牌,刷新分池
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
                //allin后显示玩家的首牌
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(function (tempPosShoupai) {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            console.log("保险时候需要所有玩家能看到保险玩家的首牌");
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //保险时候需要所有玩家能看到保险玩家的首牌
                        }
                    });
                }
            });
            _this.model.endDelay = true;
            //展示手牌后再展示公牌
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
    /// 当前玩家处理结束
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
    //ui_bgMango 左上角的总奖池
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
        //添加条件(可能限制条件 1. 观看者)
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
        //添加条件(可能限制条件)
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
                    //console.log("玩家不存在：" + tempItem.pos);
                }
                else {
                    if (tempItem.val > 0) {
                        tempUser.ShowUITopTip(tempItem.val > 0 ? "+" + UIUtil_1.UIUtil.formatNumber100(tempItem.val) : UIUtil_1.UIUtil.formatNumber100(tempItem.val) + "");
                    }
                    tempUser.ShowWinPer(UIUtil_1.UIUtil.NumberToInt(tempItem.val));
                    //结算的时候隐藏上方的操作状态和保险信息
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
    // #region 实时战绩界面,牌局回顾界面
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
    //     #region chip 动画相关
    F_TexasView.prototype.GenerateChipMove = function () {
        var obj = this.chipPool.GetCacheObject("ImgChipClone", this.ui_chippoolroot.asCom, "ImgChipTemplete");
        return obj;
    };
    /// <summary>
    /// 德州扑克首注直接被收到奖池动画
    /// </summary>
    /// <param name="firstGamble"></param>
    F_TexasView.prototype.moveFirstGambleToTabel = function (userId, _curGamble) {
        var userComp = this._bftable.GetUserByUserId(userId);
        if (userComp == null || userComp == null || userComp.player == null) {
            return;
        }
        userComp.ShowUIGamble(false); //动画执行的时候隐藏下注
        ////赢的玩家 是否不需要飞
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
            userComp.ShowUIGamble(false); //动画执行的时候隐藏下注
            ////赢的玩家 是否不需要飞
            if (userComp.curGamble > 0) //有筹码的玩家，筹码飞向奖池
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
        // this.ShowUIJackpot (false); //执行收钱的时候 隐藏桌面的总奖池
        var userComp = null;
        var count = 0;
        changeGold.forEach(function (item) {
            if (item.val > 0) { //赢家才飞动画
                count++;
                userComp = _this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("玩家不存在 " + item.pos);
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
        console.log("赢家开始 飞筹码, 赢家个数:" + count);
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
        console.log("筹码回调数量：" + this.onCmp.length);
        chip.Move(to, this.onCmp);
    };
    //     #endregion
    //     #region UI 展示相关 
    F_TexasView.prototype.ShowUIJackpot = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        this.ui_jackpotbg.visible = isShow;
        this.ui_lastjackpotbg.visible = isShow;
    };
    //1：初始设置： 2： 每回合设置： 3：结算设置： 4：中途恢复设置
    F_TexasView.prototype.UpdateJackpot = function (jackpot, mango) {
        if (jackpot === void 0) { jackpot = -1; }
        if (mango === void 0) { mango = -1; }
        this.dichi = jackpot > 0 ? jackpot : this.model._jpot;
        console.log("底池 : " + this.dichi);
        if (this.ui_txtAll)
            this.ui_txtAll.text = TexasLanguage_1.TexasLanguage.getLanguageById(1396) + " : " + UIUtil_1.UIUtil.formatNumber100ToK(this.dichi); //底池
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
        // 余额必须大于开局下注(等于都不行,服务器是这样判断的)
        if (this.model.tableLockGold > this.model.minStartGamble && this.model.tableLockGold > 0) {
            //存在锁定金币,且满足最小开始下注 则自动入座
            this.isKeep = this._bftable.myUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat ? 1 : 0;
            //自动带入传0   
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
        return this._bftable.myUser.serverpos > 0 && !this.isHaveAddGold && takeIn >= minBrate; //当前可带入大于等于最低带入
    };
    //是否可带出
    F_TexasView.prototype.IsCanOutGold = function () {
        if (this.model.gametype != 20 || this._isCanOutGold)
            return false; //只能AOF模式
        var curGold = this._bftable.myUser.player != null ? UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold) : 0;
        // let _gamble = this._bftable.myUser.allinGamble;
        console.log("this.model.room == ", this.model.room);
        if (this.model.room.AOF_Times == null)
            this.model.room.AOF_Times = 1;
        var maxBrate = UIUtil_1.UIUtil.NumberToInt((curGold - this.model.brate * 200 * this.model.room.AOF_Times) / 100); //* 2;//当前桌子余额 - 房间最小带入金额 * 最小带出倍数 - 自己下注 = 可带出金额
        console.error("brate=" + this.model.brate + ",带出：：" + curGold + "-" + (this.model.brate * 200 * this.model.room.AOF_Times) + ",可带出金币：" + maxBrate);
        if (maxBrate > 1) {
            this.ui_sliderOutGold.min = 1;
            this.ui_sliderOutGold.max = maxBrate;
            this.ui_sliderOutGold.value = 1;
            this.ui_outGold_num.text = "1";
            return true;
        }
        return false;
    };
    //带出后更新金币
    F_TexasView.prototype.OutAfterUpGold = function (userid, _money) {
        var user = this._bftable.GetUserByUserId(userid);
        if (user != null && user.self) {
            AppConst_1.AppConst.mPlayerModel.gold = _money;
            this.model.tableLockGold = _money;
            this.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180012)); //带出成功！
        }
        if (user != null)
            user.UpdateMoney(_money);
    };
    //带入金币
    F_TexasView.prototype.ShowUITakeGoldPanel = function (isShow, localpos, isShowTip, isRefresh) {
        var _this = this;
        if (isShow === void 0) { isShow = true; }
        if (localpos === void 0) { localpos = 0; }
        if (isShowTip === void 0) { isShowTip = false; }
        if (isRefresh === void 0) { isRefresh = false; }
        if (!isRefresh) {
            var u = this._bftable.GetUserByUserId(this.model.mPlayerModel.userid);
            // if (isShow && u != null && u.userInfo && u.IsPlaying()) return;
            //已经带入过 并且 余额足够，则带入0
            if (isShow && this.model.cgold != 0 && this.model.cgold != -1 && u && u.player && u.player.gold >= UIUtil_1.UIUtil.NumberToInt((this.model.brate * 200))) {
                F_TexasViewCtr_1.default.instance.cs_autoSitDown_tex(localpos, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
                return;
            }
            //stradlle  = 底分 * 4 ，  最低 =  stradlle + 底分
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
            this.ui_textGoldDesc.text = this.model.clubid > 0 && this.model.IsSupper ? TexasLanguage_1.TexasLanguage.getLanguageById(2204) : TexasLanguage_1.TexasLanguage.getLanguageById(1352); //已带入/总俱乐部币:   已带入/总金币:
            this.ui_txtHintDesc.text = TexasLanguage_1.TexasLanguage.getLanguageById(1397); //下一手开始为您带入记分
            this.isShowAddGoldPanel = false;
            this.posSit = localpos;
            this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage_1.TexasLanguage.getLanguageById(1398); //带入记分
            this.password = "";
            this.ui_inputPass.text = "";
            console.log("this.model.pas == ", this.model.pas);
            console.log("this.isKeep == ", this.isKeep);
            if (this.model.room != null && this.model.pas != "" && this.isKeep != 1) {
                console.log("打开密码界面");
                this.ui_Password.visible = true;
            }
            else {
                this.ui_Password.visible = false;
            }
            var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate);
            var maxBrate = UIUtil_1.UIUtil.NumberToInt(minBrate * 2);
            this.minTakeGold = this.model.intorate_min; //maxBrate * 100; //this.model.room != null ? this.model.room.lg * 100 : minBrate; //直接输入房间号，可能导致room为空，则显示为默认底皮的50倍。
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
            this.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1585)); //余额低于最小带入，请充值
        }
    };
    F_TexasView.prototype.AddGoldFail = function () {
        this.isHaveAddGold = false;
    };
    //带出记分
    F_TexasView.prototype.ShowUIOutGoldPanel = function () {
        this.ui_outGoldPanel.visible = true;
    };
    //补充金币
    F_TexasView.prototype.ShowUIAddGoldPanel = function () {
        var _this = this;
        this.isShowAddGoldPanel = true;
        if (this.isHaveAddGold) {
            return;
        }
        this.ui_takeGoldPanel.visible = true;
        this.ui_Password.visible = false;
        this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage_1.TexasLanguage.getLanguageById(1400); //补充记分
        this.ui_txtHintDesc.text = TexasLanguage_1.TexasLanguage.getLanguageById(1401); //游戏结束前只能补充一次且在下局才会生效
        // keyboardComp.Hide();
        var curGold = UIUtil_1.UIUtil.NumberToInt(this.model.tableLockGold);
        var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate); //小盲 = 底注
        // let maxLimitBrate = UIUtil.NumberToInt((this.model.brate * 200 * this.model.intorate_max));
        var maxBrate = minBrate * 2; //大盲 = 小盲 * 2 
        this.minTakeGold = this.model.intorate_min; //maxBrate * 100; //最小带入金额 = 大盲*100倍 
        // if (this.minTakeGold <= 0) { this.minTakeGold = minBrate; } //        
        if (this.model.clubid > 0 && this.model.IsSupper) {
            if (this.model.clubslist == null || this.model.clubslist.length <= 0
                || this.model.curSClub == null || this.model.clubslist.find(function (item) { return item.cid == _this.model.curSClub.cid; }) == null) {
                this.maxTakeGold = 0;
                this.ui_clubgold_num.text = "0";
                this.ShowTakeInInfo(false);
            }
        }
        this.maxTakeGold = this.model.intorate_max - curGold; //UIUtil.NumberToInt(maxBrate * 1000 - curGold) / 100 * 100; //最大补充 = 大盲*100*10 - 身上金币
        this.ShowTakeInInfo(true);
    };
    F_TexasView.prototype.UpdateTakeGoldUI = function (inputTakeGold) {
        var tempTakeGold = inputTakeGold;
        //取有效值
        if (this.minTakeGold > this.maxTakeGold) {
            tempTakeGold = UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold);
        }
        else {
            tempTakeGold = this.Clamp(inputTakeGold, 0, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold));
        }
        this.curTakeGold = this.minTakeGold > 0 ? (this.Clamp(tempTakeGold + 1, 0, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold)) / this.minTakeGold) * this.minTakeGold : tempTakeGold; //0; //加1 防止 slider 浮点数相乘造成的值少于minTakeGold
        this.SetTakeGoldUI(this.curTakeGold, this.minTakeGold, UIUtil_1.UIUtil.NumberToInt(this.maxTakeGold));
    };
    F_TexasView.prototype.SetTakeGoldUI = function (takeGold, minGold, maxGold) {
        if (!this.ui_takeGoldPanel.visible) {
            return;
        }
        console.log("带入金币 :" + takeGold + " max:" + maxGold);
        this.ui_txtTakeGoldPanel.text = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))) + "/" + UIUtil_1.UIUtil.NumberToInt((maxGold / 100));
        this.ui_takein_num.text = UIUtil_1.UIUtil.NumberToInt((takeGold / 100)) == 0 ? "回桌" : (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        this.ui_txtScore.text = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        var gold = (UIUtil_1.UIUtil.NumberToInt((takeGold / 100))).toString();
        var scale = gold.length >= 3 ? 2 / gold.length : 1;
        // this.ui_myGold_num.text = UIUtil.formatNumber100(AppConst.mPlayerModel.gold - takeGold) + "";
    };
    F_TexasView.prototype.ShowAddClubPanel = function () {
        var minBrate = UIUtil_1.UIUtil.NumberToInt(this.model.brate);
        var maxBrate = UIUtil_1.UIUtil.NumberToInt(minBrate * 2);
        var minApply = this.model.room != null ? this.model.room.lg : minBrate; //直接输入房间号，可能导致room为空，则显示为默认底皮的50倍。
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
        //不判断倒计时
        var isRealShow = !this.model.isGaming && readyCount < userCount;
        console.log("userCount:" + userCount);
        console.log("remainTime:" + remainTime + " isGaming:" + this.model.isGaming + " readyCount:" + readyCount); //--temp
        this.ui_waitPanel.visible = isRealShow;
        if (isRealShow) {
            // if (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.openplay && !this.model.isopen) {
            //     this.ui_txtStartDesc.text = TexasLanguage.getLanguageById(2264);//等待房主开启牌局
            // }
            // else {
            this.ui_txtStartDesc.text = "" + TexasLanguage_1.TexasLanguage.getLanguageById(180000) + userCount + TexasLanguage_1.TexasLanguage.getLanguageById(180001); //房间入座满{0}人自动开始游戏
            // }
            this.ui_txtStartDesc.visible = true;
            // 牌局已经开始过 并且人数大于2人的时候会自动开始  不需要显示
            if (!this.model.isShowPersonRemind && readyCount >= 2) {
                this.ui_txtStartDesc.visible = false;
            }
            else if (!this.model.isShowPersonRemind) {
                this.ui_txtStartDesc.text = "" + TexasLanguage_1.TexasLanguage.getLanguageById(180000) + 2 + TexasLanguage_1.TexasLanguage.getLanguageById(180001); //房间入座满{0}人自动开始游戏
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
        this.model.SetUserData_isW(userId, 1); //变为观众
        this.model.SetUserData_isK(userId, remainTime); //客户端 强制设置为 留座状态   
        this.SetUserForKeepSeat_n(userId); //客户端 强制设置为 留座状态 
    };
    F_TexasView.prototype.SetUserForKeepSeat_n = function (userId) {
        this.SetUserForKeepSeat_user(this._bftable.GetUserByUserId(userId));
    };
    //设置user为留座状态
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
    //当前局结束设置玩家的留座
    F_TexasView.prototype.TabeleEndSetKeep = function (user) {
        user.UpdateUserConnectState(TexasUserComp_1.UserConnectState.keepSeat);
        if (user.self) {
            this.hideUIAllBtns();
            this.CheckBtnBackTableState();
        }
    };
    //下注
    //倍数0： 休 ，1：跟， >=2 ：大
    F_TexasView.prototype.GambleMultiple = function (multiple) {
        //跟，大 之后是真正的下注值
        var gold = multiple == 0 ? 0 : this.GetDaGamble(multiple);
        if (gold <= 0) {
        }
        else {
            this.ui_sliderAdd.visible = false;
            this.ui_BtnAddLimit.visible = false;
        }
        //大/敲
        var addRate = multiple > 1 || this._bftable.myUser.player.gold <= gold;
        gold = Math.min(gold, UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold));
        this.Wait();
        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gold, addRate);
    };
    //休
    F_TexasView.prototype.GambleXiu = function () {
        this.GambleMultiple(0);
    };
    //敲 
    F_TexasView.prototype.GambleAllIn = function () {
        var gold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold);
        this.Wait();
        F_TexasViewCtr_1.default.instance.cs_gamble_tex(gold, true);
    };
    //(敲了的话 自己的金币为0)自己可以操作按钮的情况:1.自己在桌子上,且不能时观众,且 不能弃牌,且 没有敲
    F_TexasView.prototype.IsCanHandleAction = function () {
        if (!this.model.isGaming) {
            return false;
        } //游戏未开始
        if (this._bftable.myUser == null) {
            return false;
        }
        if (this._bftable.myUser.Empty) {
            return false;
        } //玩家不存在
        if (this._bftable.myUser.isGiveUp) {
            return false;
        } //已经弃牌        
        if (this._bftable.myUser.userConnectState == TexasUserComp_1.UserConnectState.keepSeat) {
            return false;
        }
        if (this.IsSelfWatch()) {
            return false;
        } //观战    
        if (this.IsSelfWaitToTakeIn()) {
            return false;
        } //观战   
        return true;
    };
    //显示玩家回合所有操作按钮
    F_TexasView.prototype.ShowActionBtns = function (isShow) {
        for (var i = 0; i < this.ui_btns._children.length; i++) {
            this.ui_btns._children[i].visible = isShow;
        }
    };
    //自己回合
    F_TexasView.prototype.HandleActionBtnsForSelfTurn = function (isNewTurn) {
        this.ShowActionBtns(false);
        this.ui_btnqipai.visible = true; //弃牌        
        //有条件限制的按钮
        this.ui_btnXiu.visible = this.model.gametype != 20 && ((isNewTurn && !this.model.firstTurnStart) || (this.model._mingamble <= 0 && this.model._emaxg <= 0)); //休
        //ui_btnFollow.gameObject.SetActive(!F_TexasViewCtr.instance.Model.showcard);
        var mingamble = this.GetFollowMinGamble();
        this.ui_btnFollow.visible = this.model.gametype != 20 && (this._bftable.myUser.player.gold > mingamble && !this.ui_btnXiu.visible); //跟,至少满足是上家的1倍,且跟休不能同时出现,等于时，直接敲 不显示跟。
        //ALLIN按钮筹码不足以跟注的时候才显示或者跟的時候筹码不够大的时候
        this.ui_btnallinadd.visible = this.model.gametype == 20 || (this._bftable.myUser.player.gold <= mingamble || (this._bftable.myUser.player.gold < this.GetDaGamble(this.GetMinDaGambleType()) && mingamble <= 0)); //ALLIN
        var followEndGamble = mingamble; //德州扑克不是跟到
        this.ui_txtfollowDynamic.text = followEndGamble <= 0 ? TexasLanguage_1.TexasLanguage.getLanguageById(1404) : UIUtil_1.UIUtil.formatNumber100ToK(followEndGamble) + "\n" + TexasLanguage_1.TexasLanguage.getLanguageById(1296); //straddle时候如果前面玩家不加注，则是跟注0，则显示看牌，如果前面有人加注则显示跟注
        console.log("minGamble:" + this.model._mingamble + " myGold:" + this._bftable.myUser.player.gold);
        var daMinGamble = 0;
        this.ShowActionAddGamble(true, daMinGamble); //大 :现在一直展示。满足条件才能点击
    };
    F_TexasView.prototype.getRateByCount = function (num) {
        var count = this.bupaiList.length > 0 ? this.bupaiList.length : num; //判断玩家是否自己选择了补牌
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
        if (this.GetInsSwitch() == 0) //当前牌桌保险提示关闭，直接放弃购买保险，不显示保险界面
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
        this.ui_fenchiTip.text = ""; //请选择分池
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
        this.buyInsType = zhuchi && fenchi ? 0 : zhuchi ? 1 : 2; //0既有分池又有主池 1只要主池 2只有分池
        //同时出发主池和分池时候，按钮变为全部保本和全部满池，并且值是ilist取,只有主池去list31 只有分池取list32
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
        this.ui_txtBaoben1.text = zhuchi && fenchi ? TexasLanguage_1.TexasLanguage.getLanguageById(2243) : TexasLanguage_1.TexasLanguage.getLanguageById(1302); //全部保本 保本
        this.ui_textManchi.text = UIUtil_1.UIUtil.formatNumber100(this.manchiZInsAddGold + this.manchiFInsAddGold) + "";
        console.error("设置满池=" + this.ui_textManchi.text);
        this.ui_textManchi1.text = zhuchi && fenchi ? TexasLanguage_1.TexasLanguage.getLanguageById(2242) : TexasLanguage_1.TexasLanguage.getLanguageById(1303); //全部满池 满池  
        // this.ui_jiangchiText.text = "全部";
        // this.ui_PoolNum.text = UIUtil.formatNumber100(this.model.curJiangchi31 + this.model.curJiangchi32) + "";
        // this.ui_sliderInsAdd.enabled = false;
        // this.ui_toubaoNum.text = this.ui_textManchi.text;
        // this.ui_peifuNum.text = UIUtil.formatNumber100((this.model.curJiangchi31 + this.model.curJiangchi32) / 31)+"";
        // this.ui_peilvNum.text = "31";
        this.ui_fenchiNumText.text = UIUtil_1.UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
        this.ui_fenchiTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(2237); //购买保险
        // 显示倒计时
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
        this.ui_jiangchiText.text = "主池";
        this.ui_PoolNum.text = UIUtil_1.UIUtil.formatNumber100(this.model.curJiangchi31) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length); //赔率
        this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + this.model.outs31.length; //补牌
    };
    F_TexasView.prototype.showFenchi = function () {
        this.ui_jiangchiText.text = "分池";
        this.ui_PoolNum.text = UIUtil_1.UIUtil.formatNumber100(this.model.curJiangchi32) + "";
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length); //赔率
        this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + this.model.outs32.length; //补牌
    };
    //保险手牌
    F_TexasView.prototype.ShowInsUserCardList = function () {
        this.ui_InsUserCardList.removeChildrenToPool();
        //获取最小下注玩家
        var minBetUser = null;
        if (this.insType == 2) {
            var tUsers = [];
            for (var i = 0; i <= 9; i++) {
                var user = this._bftable.GetUserByPos(i);
                if (user != null && user.userInfo != null && user.isIns) {
                    // console.error("添加allin玩家："+user.player._n+",下注="+user.allinGamble);
                    tUsers.push(user);
                }
            }
            tUsers.sort(function (a, b) {
                return a.allinGamble - b.allinGamble;
            });
            minBetUser = tUsers[0];
            // console.error("最小下注玩家："+minBetUser.player._n+",下注="+minBetUser.allinGamble);
        }
        for (var i = 0; i <= 9; i++) {
            var user = this._bftable.GetUserByPos(i);
            if (user != null && user.userInfo != null && user.isIns) {
                var card1 = "";
                var card2 = "";
                //分池去掉最小下注玩家
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
                //         // console.error("不显示");
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
    /// 1 表示主池 2表示分池
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
        this.ShowInsUserCardList(); //显示当前池的用户
        //最低投保不为0，不能放弃投保
        // this.ui_btngiveup.enabled = this.minInsAddGold == 0;
        // this.ui_btngiveup.grayed = this.minInsAddGold > 0;
        // console.error("设置拉杆Max="+this.ui_sliderInsAdd.max);
    };
    F_TexasView.prototype.showZhuchiInsAdd = function () {
        if (this.model.insList31 == null || this.model.insList31.length == 0)
            return;
        var playerGold = UIUtil_1.UIUtil.NumberToInt(this._bftable.myUser.player.gold + (this.model.clubid > 0 && this.model.IsSupper ? this.model.cgold : F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold));
        this.bupaiList = [];
        //转牌投保额不超过底池*0.25，河牌投保额不超过底池*0.5f
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
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length).toString(); //赔率
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
            //规则要求不单独选outs
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
        //转牌投保额不超过底池*0.25，河牌投保额不超过底池*0.5f
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
        this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length).toString(); //赔率
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
            //规则要求不单独outs
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
    //补牌全选
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
    //显示保险里的公牌
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
        //取有效值
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
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text; //赔付
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//支付
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length); //赔率
            this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs31.length); //补牌
        }
    };
    F_TexasView.prototype.showCurInsAddF = function () {
        this.ui_toubaoNum.text = UIUtil_1.UIUtil.formatNumber100(this.fenInsAddGold) + "";
        var peifu = (this.getRateByCount(this.model.outs32.length) * this.fenInsAddGold);
        this.ui_peifuNum.text = UIUtil_1.UIUtil.formatNumber100(peifu >= this.model.curJiangchi32 ? this.model.curJiangchi32 : peifu) + "";
        this.ui_peilvNum.text = this.getRateByCount(this.model.outs32.length) + "";
        if (this.fenInsAddGold > 0) {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text; //赔付
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//支付
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length); //赔率
            this.ui_BupaiText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs32.length); //补牌
        }
    };
    F_TexasView.prototype.showInsJackpot = function (potlist) {
        if (potlist != null && potlist.length > 0) {
            this.ui_insjackpotparant.visible = true;
            this.ui_insjackpotparant.removeChildrenToPool();
            for (var i = 0; i < potlist.length; ++i) {
                if (i == 0)
                    continue; //第一个是主池
                var temp = potlist[i];
                var _temppot = this.ui_insjackpotparant.addItemFromPool();
                var potTxt = _temppot.asCom.getChild("insjackpotTxt").asTextField;
                potTxt.text = UIUtil_1.UIUtil.formatNumber100ToK(temp);
                var potIdxTxt = _temppot.asCom.getChild("insjackpotIdx").asTextField;
                potIdxTxt.text = i.toString(); //边池
            }
        }
        else {
            this.ui_insjackpotparant.visible = false;
        }
    };
    //获取跟的最小值(注意不是跟到的值，跟到的值 需要加上已经下注的值)
    F_TexasView.prototype.GetFollowMinGamble = function () {
        return this.model._mingamble;
    };
    //（底池+本轮自身跟注所需要的计分）* 倍数 +上家投注数值--自身已投注数值  首个下注的玩家显示大盲的 2 3 4 倍
    //1:是跟的值 2:是公式*1/2 3:是公式*2/3 4:是公式*1
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
        type4 = type4 == 1 ? max : type4; //如果第四个加注按钮选择无则默认用最大的type去判断
        type5 = type5 == 1 ? max : type5; //如果第五个加注按钮选择无则默认用最大的type去判断
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
    //别人的回合
    F_TexasView.prototype.HandleActionBtnsForOtherTurn = function () {
        this.ShowActionBtns(false);
        if (this.IsCanHandleAction())
            this.ShowActionAuto(true);
    };
    //设置辅助操作按钮,非自己回合 ,且自己有操作权限,且自己没有敲的情况下(敲了的话 自己的金币为0)
    F_TexasView.prototype.ShowActionAuto = function (isShow) {
        this.ui_btnAutoQiPai.visible = isShow;
        this.ui_btnAutoFollow.visible = isShow;
    };
    //设置 大 操作按钮
    F_TexasView.prototype.ShowActionAddGamble = function (isShow, daEndGamble) {
        this.ui_btnAdd.visible = this.model.gametype != 20 && isShow;
        this.ui_BtnAddLimit.visible = this.model.gametype != 20 && (isShow);
        this.ui_BtnAddpanel.visible = this.model.gametype != 20 && (isShow);
        this.ui_sliderAdd.visible = false;
        if (isShow) {
            // 底池的金额倍数
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
            var mingamble = this.GetFollowMinGamble(); //滑动条最小有效值，如果是跟注值小于大盲则是:大盲-跟注;如果跟注<=0则是大盲值，如果跟注值>=大盲值则是跟注值的两倍
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
        return 1; //SystemInfo.batteryLevel;//电池
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
        //先更新数据
        this.UpdateRecoverData(table);
        //更新玩家信息
        this.sc_entertable_texas_n(playerList);
        // 更新庄家位子
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
        // 判断是否是第一回合
        var isOneRound = this.getIsOneRound(sd._pos2bigsmall, sd._pos2gamble);
        //更新玩家状态 下注
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
        //更新玩家身上的金币
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
                    // 补丁 重连之后如果还没轮到自己操作不显示手牌
                    var myuserid_1 = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid;
                    var isShowShouPai_1 = false;
                    if (table.delay == 1) { // 延时模式
                        console.error("table.delay == ", table.delay);
                        sd._pos2giveup.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // 已弃牌
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 11 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2look.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // 已看牌
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 22 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2allin.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val != 0) {
                                // 已操作
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai 33 == ", isShowShouPai_1);
                            }
                        });
                        sd._pos2gamble.forEach(function (item) {
                            if (item.pos == myuserid_1 && item.val > _this.model.brate) {
                                // 已下注
                                isShowShouPai_1 = true;
                                console.log("isShowShouPai xiazhu == ", isShowShouPai_1);
                            }
                        });
                        if (sd._opencard.length > 0) {
                            // 已发公牌
                            isShowShouPai_1 = true;
                            console.log("isShowShouPai 44444 == ", isShowShouPai_1);
                        }
                    }
                    else {
                        // 不是延时模式都要显示手牌
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
                //离桌退出回到房间不显示弃牌状态
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
        //断线重连，是否自己操作
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
        //比赛检测进入游戏前，有坐下消息
        if (LobbyViewCtr_1.default.instance.Model.TexSitdownData != null) {
            var sidDatas = LobbyViewCtr_1.default.instance.Model.TexSitdownData;
            for (var i = 0; i < sidDatas.length; i++) {
                F_TexasViewCtr_1.default.instance.sc_sitdown_tex_n(sidDatas[i]);
            }
            LobbyViewCtr_1.default.instance.Model.TexSitdownData = null;
        }
        //比赛模式请求更新数据
        var timeout = setTimeout(function () {
            F_TexasViewCtr_1.default.instance.cs_compete_table_info();
            _this.isCanExeTexMas = true;
        }, 1000);
        TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        //比赛模式更换背景
        if (this.model.competeid != 0) {
            UIUtil_1.UIUtil.loadImage(this.ui_zhuobubg, "matchBG1", "Texas");
        }
        // 是否显示保险
        if (table._recover.insdata) {
            table._recover.insdata.forEach(function (item) {
                F_TexasViewCtr_1.default.instance.sc_instoken_tex_n(item);
            });
        }
        // 是否显示暂停
        F_TexasViewCtr_1.default.instance.Model.openplay = table.openplay;
        if (table._recover._status != 3) { // 不在游戏中
            this.sc_openplay_tex_n();
        }
    };
    F_TexasView.prototype.getIsOneRound = function (_pos2bigsmall, _pos2gamble) {
        var result = false;
        if (_pos2bigsmall && _pos2bigsmall.length > 2) {
            var stradlle = _pos2bigsmall.reduce(function (i1, i2) { return i1.val > i2.val ? i1 : i2; });
            for (var index = 0; index < _pos2gamble.length; index++) {
                var data = _pos2gamble[index];
                // stradlle位置还没操作
                if (data.pos == stradlle.pos && data.val == stradlle.val) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    };
    F_TexasView.prototype.updateTableInfo = function () {
        var str0 = ""; //F_TexasViewCtr.instance.Model.MatchCode == null || F_TexasViewCtr.instance.Model.MatchCode == "" ? "" : + TexasLanguage.getLanguageById(1408) + ":" + F_TexasViewCtr.instance.Model.MatchCode + " ";//牌局 LanguageConfig.getLanguageById(1408)
        this.ui_txtBase.text = "" + str0 + TexasLanguage_1.TexasLanguage.getLanguageById(1409) + UIUtil_1.UIUtil.formatNumber100(this.model.brate) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.brate * 2) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.brate * 4) + "(" + UIUtil_1.UIUtil.formatNumber100(this.model.pregamble) + ")"; //盲注
        this.ui_txtBase.singleLine = true; //this.HorizontalWrapMode.Overflow;
        this.UpdateJackpot(0, 0);
        this.ui_txtAdd.text = TexasLanguage_1.TexasLanguage.getLanguageById(1410); //跟注
        this.ui_txtRound.text = TexasLanguage_1.TexasLanguage.getLanguageById(1411) + ":0"; //回合
        this.ui_txtRoom.text = ""; //TexasLanguage.getLanguageById(1180) + ":" + this.model.Room_tnumber;//房间号
        this.ui_txtRoomNameMid.text = ""; //TexasLanguage.getLanguageById(1743) + ":" + this.model.Room_name;//房间名字
        this.ui_txtClubName.visible = (this.model.intoCid > 0);
        this.ui_txtClubName.text = this.model.curSClub != null ? this.model.curSClub.cname : "";
        this.ui_txtPassword.text = ""; //"密码: "+  this.roomPassword;
        this.ui_txtPassword.visible = false; //(!this.roomPassword);
        this.ui_txtGameType.text = (this.model.gametype == 20 ? "AOF" : "") + (this.model.gametype == 10 ? "短牌" : "") + (this.model.ins == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1412) + "" : "") + (this.model.gps == 1 ? "GPS" : "") + (this.model.ip == 1 ? "IP" : "") + (this.model.delay == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1945) + "" : "") + (this.model.showCard == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1946) + "" : "") + (this.model.cinto ? TexasLanguage_1.TexasLanguage.getLanguageById(2193) + "" : "") + (this.model.Inflow > 0 ? TexasLanguage_1.TexasLanguage.getLanguageById(2229) + ":" + this.model.Inflow + "% " : "") + (this.model.ios ? TexasLanguage_1.TexasLanguage.getLanguageById(2230) : ""); //保险
        this.ui_txtGameType.visible = false; //(this.model.gametype == 20 || this.model.gametype == 10 || this.model.ins == 1 || this.model.gps == 1 || this.model.ip == 1 || this.model.delay == 1 || this.model.showCard == 1 || this.model.cinto || this.model.Inflow > 0);// || this.model.ios);
        var txtGameType = this.ui_txtGameType.text == "" ? "" : "(" + this.ui_txtGameType.text + ")";
        this.ui_txtRoom.text = TexasLanguage_1.TexasLanguage.getLanguageById(180033) + txtGameType + "-" + this.model.Room_tnumber; //德州扑克(模式)- roomid;
        //比赛
        this.ui_imgMatchRank.visible = false;
        this.ui_txtMatchRank.text = "";
        this.ui_txtMatchLv.text = "";
        this.ui_txtNexBas.text = "";
        this.ui_txtNexTime.text = "";
        if (this.model.competeid != 0) {
            this.ui_txtGameType.visible = true;
            this.ui_txtRoomNameMid.text = ""; //TexasLanguage.getLanguageById(180027) + ":" + this.model.matchName;//比赛名称
            this.ui_txtRoom.text = TexasLanguage_1.TexasLanguage.getLanguageById(180028) + ":" + this.model.competeid; //比赛编号 
            this.ui_txtGameType.text = TexasLanguage_1.TexasLanguage.getLanguageById(180023); //比赛模式
            this.ui_txtMatchLv.text = TexasLanguage_1.TexasLanguage.getLanguageById(180024) + ":" + this.model.level + "/" + this.model.max_level; //比赛等级
            this.ui_txtBase.text = TexasLanguage_1.TexasLanguage.getLanguageById(180025) + ":" + (UIUtil_1.UIUtil.formatNumber100(this.model.brate) + "/" + UIUtil_1.UIUtil.formatNumber100(this.model.bigblind)); //当前盲注
        }
    };
    F_TexasView.prototype.UpdateMatchData = function (data) {
        var _this = this;
        this.ui_txtGameType.text = TexasLanguage_1.TexasLanguage.getLanguageById(180023); //比赛模式
        this.ui_txtMatchLv.text = TexasLanguage_1.TexasLanguage.getLanguageById(180024) + ":" + data.level + "/" + data.max_level; //比赛等级
        this.ui_txtBase.text = TexasLanguage_1.TexasLanguage.getLanguageById(180025) + ":" + UIUtil_1.UIUtil.formatNumber100(data.baserate) + "/" + UIUtil_1.UIUtil.formatNumber100(data.into); //当前盲注
        this.ui_txtNexBas.text = "下一盲注:" + UIUtil_1.UIUtil.formatNumber100(data.next_baserate) + "/" + UIUtil_1.UIUtil.formatNumber100(data.next_into);
        var t = data.next_uplevel_time;
        if (t > 0) {
            if (this.uplevetimeFun != null && this.uplevetimeFun != 0)
                clearTimeout(this.uplevetimeFun);
            this.uplevetimeFun = setTimeout(function () {
                _this.ui_txtNexTime.text = TexasLanguage_1.TexasLanguage.getLanguageById(180026) + ":" + UIUtil_1.UIUtil.getStringTime(t); //涨盲时间
                t--;
            }, 1000, data.next_uplevel_time);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(this.uplevetimeFun);
        }
        else {
            this.ui_txtNexTime.text = "";
        }
    };
    //比赛排名
    F_TexasView.prototype.UpdateMatchRank = function (data) {
        var rank = 0;
        for (var i = 0; i < data.infos.length; i++) {
            if (data.infos[i].playerid == this.model.mPlayerModel.userid) {
                rank = data.infos[i].rank;
            }
        }
        this.ui_imgMatchRank.visible = true;
        this.ui_txtMatchRank.text = "第" + rank + "名";
    };
    //比赛结束
    F_TexasView.prototype.MacthEnd = function (data) {
        if (data.type == 0) {
            this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(180021), function () {
                LobbyViewCtr_1.default.instance.cs_signup(data.competeid);
            }, function () {
            }, TexasLanguage_1.TexasLanguage.getLanguageById(180022), TexasLanguage_1.TexasLanguage.getLanguageById(1393)); //复活,取消
        }
        else {
            var award = "";
            for (var i = 0; i < data.infos.length; i++) {
                award += data.infos[i].num + "" + data.infos[i].name + "\n";
            }
            //比赛是否结束
            this.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(180020) + data.rank + "名！" + TexasLanguage_1.TexasLanguage.getLanguageById(1126) + "：\n" + award + ""); //恭喜您获得第，奖励
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
            } //位置pos大于房间人数不刷新位置
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
    //1语音，2表情，3文本,4常用语 5.玩家对玩家送礼物 6.弹幕
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
                user.ShowChatSound(content); //如果是自己的不处理,客户端提前处理了的
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
                    // CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1586));//自己发送表情
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
            //自己发送表情
            if (isSelf && Texas_1.Texas.giftConfig[gifNode.name]["moveAnima"] != "_") {
                CommonCtr_1.CommonCtr.instance.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1586)); //自己发送表情
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
     * @param  自己的节点
     * @param  目标的节点
     */
    F_TexasView.prototype.flyGift = function (node, selfNode, targetNode) {
        var _this = this;
        var spineAni = node.getComponent(sp.Skeleton);
        console.log("node = " + node.name);
        console.log("moveAnima = " + Texas_1.Texas.giftConfig[node.name]["moveAnima"]);
        if (Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["moveAnima"], true);
            //设置起点坐标
            node.position = node.parent.convertToNodeSpaceAR(selfNode.parent.convertToWorldSpaceAR(selfNode.position));
            node.setPosition(node.position);
            //移动到目标坐标
            var targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(targetPosition.x, targetPosition.y)), cc.callFunc(function () {
                spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["playAnima"], false);
                //播放完成事件
                spineAni.setCompleteListener(function () {
                    spineAni.node.parent.removeChild(node);
                    //播放end动画
                    var gifNode = _this.userInfoComp.getCreateAnimationNode(node.name + "_end");
                    if (gifNode != null) {
                        _this.flyGift(gifNode, selfNode, targetNode);
                    }
                });
            })));
        }
        else if (Texas_1.Texas.giftConfig[node.name]["playAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            //设置为终点坐标
            var targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.position = targetPosition;
            spineAni.setAnimation(0, Texas_1.Texas.giftConfig[node.name]["playAnima"], false);
            spineAni.setCompleteListener(function () {
                spineAni.node.parent.removeChild(node);
            });
        }
        else if (Texas_1.Texas.giftConfig[node.name]["playAnima"] != "" && Texas_1.Texas.giftConfig[node.name]["moveAnima"] == "_") {
            //设置为终点坐标
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
        //刷新所有牌型
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
    //1是开 0是关
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
    // 把 node1移动到 node2的位置
    F_TexasView.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
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
                str = TexasLanguage_1.TexasLanguage.getLanguageById(2257); //无
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXEZfVGV4YXNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxzREFBNGxCO0FBQzVsQixpREFBd0Y7QUFDeEYsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUM5Qyx3Q0FBdUQ7QUFDdkQsbURBQThDO0FBRTlDLCtEQUEwRDtBQUMxRCwrQ0FBMEM7QUFDMUMscURBQWdEO0FBQ2hELHlDQUFvQztBQUNwQyxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLHNFQUFpRTtBQUNqRSx1REFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLHNEQUFpRDtBQUNqRCxvREFBK0M7QUFDL0MsaURBQTRDO0FBQzVDLHVEQUFzRDtBQUN0RCx3REFBdUQ7QUFDdkQsNEZBQTJGO0FBQzNGLGlFQUE0RDtBQUM1RCx1REFBc0Q7QUFFdEQsK0VBQTBFO0FBQzFFLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsZ0VBQXFKO0FBQ3JKLGtFQUE2RDtBQUM3RCwyREFBdUU7QUFDdkUsMkZBQTBGO0FBQzFGLGtGQUFpRjtBQUNqRixrRkFBaUY7QUFDakYsc0VBQXFFO0FBRS9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFRO0lBQWpEO1FBQUEscUVBNjlLQztRQTk4S0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVksS0FBSyxDQUFDLENBQUMsTUFBTTtRQUUvQixvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUNwQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsbUJBQWEs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QyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxhQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsYUFBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLGFBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxhQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsYUFBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLGFBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVc7UUFDakQsYUFBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLGFBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxhQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsYUFBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLGFBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxhQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFD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SSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekwsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDMUQsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksRUFBRSxHQUFHLGVBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQVcsQ0FBQyxNQUFN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LEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFD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Z0JBQ1osTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUNaLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDWixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ1osTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUNaLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDWCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNkLE1BQU07U0FDYjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLHVDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN4RSxDQUFDOztJQWpzS2EsdUJBQVcsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUF3M0Q1RCxvQkFBUSxHQUFXLENBQUMsQ0FBQztJQXBvRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFmUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNjlLL0I7SUFBRCxrQkFBQztDQTc5S0QsQUE2OUtDLENBNzlLd0Msa0JBQVEsR0E2OUtoRDtrQkE3OUtvQixXQUFXO0FBKzlLaEM7SUFBQTtJQUdBLENBQUM7SUFBRCxvQkFBQztBQUFELENBSEEsQUFHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gJy4uL0NvbnRybC9GX1RleGFzVmlld0N0cic7XG5pbXBvcnQgeyBCaWdFbmRJbmZvU0RfdGV4LCBjc19lbnRlcnRhYmxlbnVtX3RleCwgUEluZm9TRCwgc2NfYmlnZW5kX3RleF9uLCBzY19jaGF0bG9nLCBzY19jb21wZXRlX2F3YXJkX2luZm8sIHNjX2NvbXBldGVfdGFibGVfaW5mbywgc2NfZGVsYXlfdGV4LCBzY19kZWxheV90ZXhfbiwgc2NfZW5kX3RleF9uLCBzY19lbnRlcnRhYmxlbnVtX3RleCwgc2NfZ2FtYmxlX3RleCwgc2NfZ2FtYmxlX3RleF9uLCBzY19nZXRhbGxqYWNrcG90X3RleCwgc2NfZ2V0Z2Fpbl90ZXgsIHNjX2dldGdhbWVsZXZlbCwgc2NfZ2V0bm90aWNlX24sIHNjX2dpdmV1cF90ZXgsIHNjX2luc3VyYW5jZV90ZXgsIHNjX29wZW5wbGF5X3RleF9uLCBzY19yZWFkeV90ZXgsIHNjX3JlYWR5X3RleF9uLCBzY19yb29taGlzdG9yeV90ZXgsIHNjX3Nob3dteWNhcmRfdGV4LCBzY19zaG93bXljYXJkX3RleF9uLCBzY190YWJsZXN0YXJ0X3RleF9uLCBzY190aGlzdG9yeV90ZXgsIHNjX3RqYWNrcG90TG9nLCBzY190b2tlbl90ZXhfbiwgU3VwZXJDbHViLCBUYWJsZVJlY292ZXJUZXhhc1NELCBUZXhhc0NvbXBhcmVTRCwgVGV4VEluZm9TRCB9IGZyb20gJy4uL01vZGVsL1RleGFzTmV0RGF0YSc7XG5pbXBvcnQgVGV4YXNVc2VyQ29tcCwgeyBUZXhhc1VzZXJIYW5kbGVTdGF0ZSwgVXNlckNvbm5lY3RTdGF0ZSB9IGZyb20gXCIuL1RleGFzVXNlckNvbXBcIjtcbmltcG9ydCBUZXhhc1RhYmxlIGZyb20gXCIuL1RleGFzVGFibGVcIjtcbmltcG9ydCBDYXJkUmVkYmV0Q29tcCBmcm9tIFwiLi9DYXJkUmVkYmV0Q29tcFwiO1xuaW1wb3J0IHsgUG9rZXJUZXhhc1R5cGUsIFRleGFzIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzXCI7XG5pbXBvcnQgVGltZUluZm9NZ3JUZXggZnJvbSAnLi9UaW1lSW5mb01nclRleCc7XG5pbXBvcnQgeyBVSU1vdmVNb25vRmd1aSB9IGZyb20gJy4vVUlNb3ZlTW9ubyc7XG5pbXBvcnQgVGV4YXNIZWxwc2V0dGluZ0NvbXAgZnJvbSAnLi9UZXhhc0hlbHBzZXR0aW5nQ29tcCc7XG5pbXBvcnQgVXNlckluZm9Db21wIGZyb20gJy4vVXNlckluZm9Db21wJztcbmltcG9ydCBDaGlwUG9zaXRpb25UZXggZnJvbSAnLi9DaGlwUG9zaXRpb25UZXgnO1xuaW1wb3J0IENhY2hlUG9vbCBmcm9tICcuL0NhY2hlUG9vbCc7XG5pbXBvcnQgVGV4YXNSZWNvcmRDb21wIGZyb20gJy4vVGV4YXNSZWNvcmRDb21wJztcbmltcG9ydCBUZXhhc1RpcFZpZXcgZnJvbSAnLi9UZXhhc1RpcFZpZXcnO1xuaW1wb3J0IENvbW1vblZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25WaWV3JztcbmltcG9ydCBUZXhhc0hpc3RvcnlDb21wIGZyb20gJy4vVGV4YXNIaXN0b3J5Q29tcCc7XG5pbXBvcnQgSmFja3BvdENvbXAgZnJvbSAnLi9KYWNrcG90Q29tcCc7XG5pbXBvcnQgQmFsZW5jZUNvbXAgZnJvbSAnLi4vQmFsZW5jZS9CYWxlbmNlQ29tcCc7XG5pbXBvcnQgQmFsZW5jZUN0ciBmcm9tICcuLi9CYWxlbmNlL0JhbGVuY2VDdHInO1xuaW1wb3J0IFRleGFzQ2hhdENvbXAgZnJvbSAnLi9UZXhhc0NoYXRDb21wJztcbmltcG9ydCB7IFJvbGxOb3RpZmllckNvbXAgfSBmcm9tICcuL1JvbGxOb3RpZmllckNvbXAnO1xuaW1wb3J0IHsgVGV4YXNMYW5ndWFnZSB9IGZyb20gJy4uL01vZGVsL1RleGFzTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgQnJvYWRjYXN0VmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL0dhbWVIYWxsL3NjcmlwdC9Mb2JieS9Db21wb25lbnRzL0Jyb2FkY2FzdFZpZXcnO1xuaW1wb3J0IFRleGFzQmlnV2luU3BpbiBmcm9tICcuLi9UZXhhc1NwaW5lL1RleGFzQmlnV2luU3Bpbic7XG5pbXBvcnQgeyBUZXhRdWV1ZU1lc3NhZ2VzIH0gZnJvbSAnLi9UZXhRdWV1ZU1lc3NhZ2VzJztcbmltcG9ydCB7IHNjX2NvbXBldGVfcmFua19pbmZvIH0gZnJvbSAnLi4vLi4vLi4vLi4vR2FtZUhhbGwvc2NyaXB0L0xvYmJ5L0xvYmJ5TmV0RGF0YSc7XG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gJy4uLy4uLy4uLy4uL0dhbWVIYWxsL3NjcmlwdC9Mb2JieS9Mb2JieVZpZXdDdHInO1xuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXInO1xuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHInO1xuaW1wb3J0IHsgQ29tbW9uUG9zVmFsTGlzdFNELCBDb21tb25Qb3NWYWxTRCwgT3RoZXJVc2VySW5mb1NELCBzY19kaXNjb25uZWN0X24sIFBsYXllckluZm9TRCwgc2NfY2hhdF9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlJztcbmltcG9ydCBWaWV3QmFzZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcbmltcG9ydCB7IFVJVXRpbCwgUGxheWVyUHJlZnMgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbCc7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0JztcbmltcG9ydCB7IFdlYlNvY2tldE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXInO1xuaW1wb3J0IHsgUmVjb25uZWN0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvUmVjb25uZWN0TWFuYWdlcic7XG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZfVGV4YXNWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHByb3RlY3RlZCBnZXQgbmVlZFByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidGV4YXNcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyZXMvVGV4YXNcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlRleGFzXCI7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG9hZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc0NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgQWN0aW9uOiBib29sZWFuID0gZmFsc2U7IC8v6K+l5oiR5pON5L2cXG5cbiAgICBwdWJsaWMgdWlfdGFibGVjZW50ZXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NhY2hlUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3RleGFzZmlnaHR2aWV3OiBjYy5DYW52YXMgPSBudWxsO1xuICAgIHB1YmxpYyB1aV92b2ljZUNoYXQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX0J0bk1lc3NhZ2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2J0bll1WWluOmZndWkuR0J1dHRvbiA9IG51bGw7IC8v6bqm5YWL6aOOXG4gICAgLy8vLyBwdWJsaWMgVHJhbnNmb3JtIHVpX2xpbmVwYW5lbDsgLy8g5o6S6Zif55WM6Z2iXG4gICAgLy8vLyBwdWJsaWMgV2FpdExpbmVDb21wIGxpbmVQYW5lbDtcbiAgICAvLy8vIHB1YmxpYyBUb2dnbGUgdWlfYnRuQXV0bzsgLy/oh6rliqjot5/ms6ggXG4gICAgcHVibGljIHVpX2NoaXBwb29scm9vdDogZmd1aS5HTG9hZGVyID0gbnVsbDsgLy/nrbnnoIHmoLnoioLngrkgXG4gICAgcHVibGljIGNoaXBQb29sOiBDYWNoZVBvb2wgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qYWNrcG90YWxsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qYWNrcG90Ymc6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX2xhc3RqYWNrcG90Ymc6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX2dsb2JhbGluZm86IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2JnTWFuZ286IGZndWkuR0dyb3VwID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfamFja3BvdFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5NYW5nbzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgamFja3BvdENvbXA6IEphY2twb3RDb21wID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0TWF0Y2hMdjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0R2FtZVR5cGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dFBhc3N3b3JkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRSb29tTmFtZU1pZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL0Vtb2ppVGV4dDsgLy/miL/pl7TlkI1cbiAgICBwdWJsaWMgdWlfdHh0Q2x1Yk5hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly9FbW9qaVRleHQvL+S/seS5kOmDqOWQjVxuICAgIHB1YmxpYyB1aV90eHRSb29tOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOyAvL+aIv+mXtOWPt1xuICAgIHB1YmxpYyB1aV90eHRCYXNlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOyAvL+W6leazqFxuICAgIHB1YmxpYyB1aV90eHROZXhCYXM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/kuIvkuIDnm7Lms6hcbiAgICBwdWJsaWMgdWlfdHh0TmV4VGltZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+S4i+S4gOebsuazqOWAkuiuoeaXtlxuICAgIHB1YmxpYyB1aV90eHRBbGw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8v5oC75rOoXG4gICAgcHVibGljIHVpX2xhc3R0eHRBbGw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8v5LiK5LiA6L2u5oC75rOoXG4gICAgcHVibGljIHVpX1Bhc3N3b3JkOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnB1dFBhc3M6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7Ly/ovpPlhaXmiL/pl7Tlr4bnoIFcbiAgICBwdWJsaWMgdWlfaW1nTWF0Y2hSYW5rOiBmZ3VpLkdJbWFnZSA9IG51bGw7Ly/mjpLlkI3og4zmma9cbiAgICBwdWJsaWMgdWlfdHh0TWF0Y2hSYW5rOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v5o6S5ZCNXG5cbiAgICBwdWJsaWMgdWlfdHh0Um91bmQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8v5Zue5ZCIXG4gICAgcHVibGljIHVpX3R4dEFkZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsgLy/ot5/ms6hcbiAgICBwdWJsaWMgdWlfdHh0TW9uZXk6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8vXG4gICAgcHVibGljIHVpX3R4dE5hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8vIFxuICAgIHB1YmxpYyB1aV9Vc2VyTWFuYWdlcjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9iZ0Rlc2tUaXA6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dERlc2tUaXA6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX0hlbHBTZXR0aW5nUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5biu5Yqp6Z2i5p2/IFxuICAgIHB1YmxpYyB1aV9iYWxlbmNlUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIGJhbGVuY2VDb21wOiBCYWxlbmNlQ29tcCA9IG51bGw7XG5cbiAgICAvLy8vL3B1YmxpYyBCdXR0b24gdWlfYnRuQ2hhdDtcbiAgICBwdWJsaWMgdWlfY2hhdFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBjaGF0Q29tcDogVGV4YXNDaGF0Q29tcCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfcm9sbE5vdGlmeVBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyByb2xsTm95aWZpZXJDb21wOiBSb2xsTm90aWZpZXJDb21wO1xuXG4gICAgcHVibGljIHVpX3J1bnRpbWVSZWNvcmQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5a6e5pe25oiY57up55WM6Z2iXG4gICAgcHVibGljIHVpX2J0bkNsb3NlX1JlY29yZDogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/lhbPpl63lrp7ml7bmiJjnu6nmjInpkq5cbiAgICBwdWJsaWMgdWlfYnRuUmVjb3JkOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+aJk+W8gOWunuaXtuaImOe7qeeVjOmdolxuICAgIHB1YmxpYyByZWNvcmRDb21wOiBUZXhhc1JlY29yZENvbXAgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5SZWZyZXNoOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5HUFM6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfaGlzdG9yeVBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL+eJjOWxgOWbnumhvlxuICAgIHB1YmxpYyB1aV9idG5IaXN0b3J5OiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+aJk+W8gOeJjOWxgOWbnumhvueVjOmdolxuICAgIC8vIHB1YmxpYyB1aV9idG5Db2xsZWN0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyBoaXN0b3J5Q29tcDogVGV4YXNIaXN0b3J5Q29tcCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfdXNlckluZm9QYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/njqnlrrbkv6Hmga/nlYzpnaJcblxuICAgIHB1YmxpYyB1aV93YWl0UGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5LiN5ruhNOS6uiDnrYnlvoXnlYzpnaJcbiAgICBwdWJsaWMgdWlfdHh0RmlyZVRpbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8v5YCS6K6h5pe2XG4gICAgcHVibGljIHVpX3R4dFN0YXJ0RGVzYzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyBoZWxwU2V0dGluZ0NvbXA6IFRleGFzSGVscHNldHRpbmdDb21wID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfemh1b2J1Ymc6IGZndWkuR0xvYWRlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfYmdNYW5nb0w6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3ZlZGlvVHlwZUJnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV92ZWRpb19saW5lOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9sZWZ0Y2FyZHNpdGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3JpZ2h0Y2FyZHNpdGU6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2Rvd25jYXJkc2l0ZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdXBjYXJkc2l0ZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyBfY2hpcHBvb2xMaXN0OiBmZ3VpLkdDb21wb25lbnRbXTtcbiAgICBwdWJsaWMgQ2hpcFJlY29yZExpc3Q6IENoaXBQb3NpdGlvblRleFtdO1xuXG4gICAgcHVibGljIHVpX3VzZXIwOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyMTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy8g5pys5py655So5oi3XG4gICAgcHVibGljIHVpX3VzZXIyOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyMzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdXNlcjQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3VzZXI1OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyNjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdXNlcjc6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3VzZXI4OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyOTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9pbWdHcmF5OiBmZ3VpLkdMb2FkZXIgPSBudWxsOyAvL3RlbXBsYXRlIGdyYXkgXG4gICAgcHJpdmF0ZSBidG5hZGRzbGlkZXJub3c6IG51bWJlcjtcbiAgICBwdWJsaWMgdWlfQnRuQWRkTGltaXQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5pyJ6ZmQ5Yqg5rOoIFxuICAgIHB1YmxpYyB1aV9Db21tb25DYXJkczogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/lhazniYxcbiAgICBwdWJsaWMgdWlfY3VyVGV4YXN0eXBlOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL+W9k+WJjeeJjOWei1xuICAgIHB1YmxpYyB1aV90eHRjdXJ0ZXhhc3R5cGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIF9Db21tb25DYXJkSW1hZ2VMaXN0OiBDYXJkUmVkYmV0Q29tcFtdID0gW107XG5cbiAgICAvL+aTjeS9nOi+heWKqeWKn+iDvVxuICAgIHB1YmxpYyB1aV9idG5BdXRvUWlQYWk6IGZndWkuR0J1dHRvbiA9IG51bGw7IC8v6Ieq5Yqo55yL54mMXG4gICAgcHVibGljIHVpX3R4dEF1dG9RaVBhaTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuQXV0b0ZvbGxvdzogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/oh6rliqjot5/ms6hcbiAgICBwdWJsaWMgdWlfdHh0QXV0b0ZvbGxvdzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwcml2YXRlIGlzQXV0b1FpUGFpOiBib29sZWFuID0gZmFsc2U7IC8vXG4gICAgcHJpdmF0ZSBpc0F1dG9Gb2xsb3c6IGJvb2xlYW4gPSBmYWxzZTsgLy9cblxuICAgIHB1YmxpYyB1aV9idG5BZGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7IC8v5Yqg5rOoXG4gICAgcHVibGljIHVpX2J0bjE1YWRkOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+WKoOazqCBcbiAgICBwdWJsaWMgdWlfYnRuMTRhZGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7IC8v5Yqg5rOoIFxuICAgIHB1YmxpYyB1aV9idG4xM2FkZDogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/liqDms6ggXG4gICAgcHVibGljIHVpX2J0bjEyYWRkOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+WKoOazqCBcbiAgICBwdWJsaWMgdWlfYnRuMWFkZDogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/liqDms6ggXG4gICAgcHVibGljIHVpX2J0bmFsbGluYWRkOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+WKoOazqCBcbiAgICBwdWJsaWMgdWlfc2xpZGVyQWRkOiBmZ3VpLkdTbGlkZXIgPSBudWxsOy8v6L+b5bqm5p2hXG4gICAgcHVibGljIHVpX3R4dE51bXM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2Jhcl92MjogZmd1aS5HSW1hZ2UgPSBudWxsOy8v5ruR56u/5Ly457yp6YOo5YiGXG4gICAgLy8vL3B1YmxpYyBUZXh0IHVpX3R4dGFkZER5bmFtaWM7XG4gICAgcHVibGljIHVpX2J0bnM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bkZvbGxvdzogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/ot5/ms6hcbiAgICBwdWJsaWMgdWlfdHh0Zm9sbG93RHluYW1pYzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuWmhlWmhhbzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/kuIvms6jpga7nvalcbiAgICBwdWJsaWMgdWlfZGVsYXlBZGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX1N0YXR1c01hbmFnZXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfYnRuTGVmdENhcmRzOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5TaG93UGFpOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9CdG5BZGRwYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/liqDms6jpnaLpnaLmnb8gXG4gICAgcHVibGljIHVpX2J0blhpdTogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/kuKIv5LyRXG4gICAgcHVibGljIHVpX2J0bnFpcGFpOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+W8g+eJjCAgXG4gICAgcHVibGljIHVpX2J0bkJhY2tUYWJsZTogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/lm57moYxcblxuICAgIC8v5L+d6Zmp55u45YWzXG4gICAgcHVibGljIHVpX0J0bkluc3VyYW5jZVBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9mZW5jaGk6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bmdpdmV1cDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuQmFvYmVuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5NYW5jaGk6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2luc0dpdmVVcFRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2ZlbmNoaU51bVRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dEJhb2JlbjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0QmFvYmVuMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGV4dE1hbmNoaTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGV4dE1hbmNoaTE6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2luc1RpbWVUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnN1cmFuY2VJbmZvOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9Qb29sTnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9QZWlMdlRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX0J1cGFpVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfaW56aHVUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2luRmVuVHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnN1cmFuY2VJbmZvMzI6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX1Bvb2xOdW0zMjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfUGVpTHZUZXh0MzI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX0J1cGFpVGV4dDMyOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnN1cmFuY2VBZGRQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY2xvc2VJbnNBZGRQYW5lbDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdG91YmFvTnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9wZWlmdU51bTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGVpbHZOdW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3NsaWRlckluc0FkZDogZmd1aS5HU2xpZGVyID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfYmFvYmVuVGV4dDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnVwYWlQYW5lbDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2J1cGFpQ2VsbDpmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9jY2FyZHNQYW5lbDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2NjYXJkc0NlbGw6Zmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfSW5zVXNlckNhcmRMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuQnVwYWlBbGxDYXJkOiBmZ3VpLkdCdXR0b24gPSBudWxsOy8v6KGl54mM5YWo6YCJXG4gICAgcHVibGljIHVpX2J0bk1peEJhb3hpYW46IGZndWkuR0J1dHRvbiA9IG51bGw7Ly/mnIDlpKfkv53pop1cbiAgICBwdWJsaWMgdWlfYnRuTWF4QmFveGlhbjogZmd1aS5HQnV0dG9uID0gbnVsbDsvL+acgOWwj+S/neminVxuICAgIHB1YmxpYyB1aV9JbnNDbnREb3duOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v5bu26L+f5pe26Ze0XG4gICAgcHVibGljIHVpX0luc0RlbGF5R29sZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+W7tui/n+mHkeW4gVxuICAgIHB1YmxpYyB1aV9pbnNEZWxheUFkZDogZmd1aS5HQnV0dG9uID0gbnVsbDsvL+S/nemZqeW7tui/n1xuICAgIC8vIHB1YmxpYyB1aV9idG5JbnNBbGw6Zmd1aS5HQnV0dG9uID0gbnVsbDsvL+WFqOmDqOaxoFxuICAgIHB1YmxpYyB1aV9idG5JbnNaaHU6IGZndWkuR0J1dHRvbiA9IG51bGw7Ly/kuLvmsaBcbiAgICBwdWJsaWMgdWlfYnRuSW5zRmVuOiBmZ3VpLkdCdXR0b24gPSBudWxsOy8v5YiG5rGgXG4gICAgcHVibGljIHVpX2ppYW5nY2hpVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9qYWNrcG90cGFyYW50OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qYWNrcG90MTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfamFja3BvdDI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2phY2twb3QzOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qYWNrcG90NDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90eHRqYWNrcG90MTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0amFja3BvdDI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dGphY2twb3QzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRqYWNrcG90NDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9pbnNqYWNrcG90cGFyYW50OiBmZ3VpLkdMaXN0ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuQmFveGlhbkNvbW1pdDogZmd1aS5HQnV0dG9uID0gbnVsbDsvL+ehruiupOaKleS/nVxuICAgIHB1YmxpYyB1aV90eHRPdXRzQ250OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgcHJpdmF0ZSBfQ3VyYWRkdmFsdWU6IG51bWJlcjsgLy/lvZPliY3pgInmi6nnmoTliqDms6jlgLwgIFxuICAgIHB1YmxpYyBfYmZ0YWJsZTogVGV4YXNUYWJsZTtcbiAgICBwdWJsaWMgdWlfSW1nRW1vakdpZnRUZW1wbGV0ZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0Q3VyVGltZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0V2lmaTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0UHJvZ3Jlc3M6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX25lYXJVc2VyUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v6ZmE6L+R546p5a62ICBcbiAgICBwdWJsaWMgdWlfdGlhbnRpYW54dWFuOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90YWJsZUluZm9ncm91cDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvLy8vIHB1YmxpYyBUcmFuc2Zvcm0gdWlfbGVmdENhcmRzUGFuZWw7IC8v5p+l55yL5Ymp5L2Z54mMXG5cbiAgICAvLy0tLSoqKioqKioqKiDluKblhaXph5HluIFcbiAgICBwdWJsaWMgdWlfa2V5Ym9hcmRQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgaXNIYXZlQWRkR29sZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1Nob3dBZGRHb2xkUGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyB1aV90YWtlR29sZFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL+W4puWFpemHkeW4geeahOeql+WPo1xuICAgIHB1YmxpYyB1aV90eHRIaW50RGVzYzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2xpZGVyVGFrZUdvbGQ6IGZndWkuR1NsaWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dFNjb3JlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9zY29yZUltYWdlRm9udDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0VGFrZUdvbGRQYW5lbDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcmVmcmVzaENnb2xkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5UYWtlR29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRucmVjaGFyZ2VFeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuX2Nsb3NlX3Rha2VHb2xkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5SZWNoYXJnZUdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3Rha2Vpbl90eHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Rha2Vpbl9udW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Rha2Vpbl9taW5fdHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90YWtlaW5fbWF4X3R4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY2x1Yk5vdGljZV90eHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIFRvZ2dsZSB1aV9jbHViX1RvZ2dsZV9pdGVtOyBcbiAgICBwdWJsaWMgdWlfY2x1YmdvbGRfdGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY2x1YmdvbGRfbnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9hZGRDbHViR29sZF9idG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1clRha2VHb2xkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VyQWRkR29sZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGN1ckFwcGx5R29sZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1heFRha2VHb2xkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdXJTZWxlY3RTQ2x1YjogU3VwZXJDbHViO1xuICAgIHByaXZhdGUgZ2FtZWluZ1RpbWVyOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgdmVkaW9SYXdJbWFnZTogZmd1aS5HTG9hZGVyID0gbnVsbDsgLy9SYXdJbWFnZVxuXG4gICAgcHVibGljIHVpX3NlbGZFbmR0aW1ldGlwczogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2VsZkltYWdlRjogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2VsZkVuZHRpbWV0aXBzVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNLZWVwOiBudW1iZXIgPSAwOyAvL+aYr+WQpueVmeW6p1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBsYXN0R2FtYmxlR29sZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpY2hpOiBudW1iZXI7IC8v5bqV5rGgXG4gICAgcHJpdmF0ZSBlbmRUaW1lOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgaXNmaXJzdDogYm9vbGVhbiA9IGZhbHNlOy8v6Ieq5bex5piv5ZCm56ys5LiA5Liq5pON5L2cXG4gICAgcHVibGljIGlzbXl0dXJuOiBib29sZWFuID0gZmFsc2U7Ly/oh6rlt7Hmk43kvZznmoTml7blgJnlt7Lnu4/orr7nva7ov4fmiYvniYxcblxuICAgIHB1YmxpYyBzZWxlY3RGaXZlQ2FyZHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIG1heENhcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBjdXJDb21tb25kQ2FyZHM6IG51bWJlcltdID0gW107XG5cbiAgICBwdWJsaWMgc3RhdGljIF9kaWNJbnNSYXRlOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcblxuICAgIHB1YmxpYyB1aV92ZWRpb0NjYXJkVGlwOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRGaXJlRGVzYzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0U2hvd1BhaTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfeGl1VGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0QmFja1RhYmxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRMZWZ0Q2FyZHM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2ZlbmNoaVRpcDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY2xpY2tTZWxlY3RUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jbGlja1NlbGVjdFRleHQzMjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfbWF4VGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdG91YmFvVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGVpZnVUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9wZWlsdlRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2dvbmdwYWlUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9yZWZyZXNoVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfVGFrZUdvbGRUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9yZWNoYXJnZUV4VGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGV4dEdvbGREZXNjOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jaGF0aW5nVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90aWFudGlhbnh1YW5Qb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8vUmVjdFRyYW5zZm9ybVxuICAgIHB1YmxpYyB1aV90YWJsZUluZm9ncm91cFBvczogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy9SZWN0VHJhbnNmb3JtXG4gICAgcHVibGljIHVpX2phY2twb3RhbGxQb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8vUmVjdFRyYW5zZm9ybVxuICAgIHB1YmxpYyB1aV93YWl0UGFuZWxQb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8vUmVjdFRyYW5zZm9ybVxuICAgIHB1YmxpYyB1aV9jdXJUZXhhc3R5cGVQb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8vUmVjdFRyYW5zZm9ybVxuICAgIHB1YmxpYyB1aV9idG5zUG9zOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL1JlY3RUcmFuc2Zvcm1cbiAgICBwdWJsaWMgdWlfc2VsZkVuZHRpbWV0aXBzUG9zOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL1JlY3RUcmFuc2Zvcm1cblxuICAgIHB1YmxpYyB1aV9jb25maXJtSGFuZGxlUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NvbmZpcm1IYW5kbGViZzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY29uZmlybVRpdGxlX3R4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfbm9SZW1pbmRUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX0dpdmVVcENvbmZpcm1fdHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9DaGVja0NvbmZpcm1fdHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9ub1JlbWluZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfR2l2ZVVwQ29uZmlybTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfQ2hlY2tDb25maXJtOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgcHVibGljIHVpX25ld01zZ19idG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX25ld01zZ19UZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9uZXdBcHBseV9idG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX25ld0FwcGx5X1RleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfQ29uZmlybVN0YXJ0QnRuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9Db25maXJtU3RhcnRfVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9vcGVuVGlwOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRvcGVudGlwOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9iaWdXaW46IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIGJpZ3dpblNwaW46IFRleGFzQmlnV2luU3BpbjtcbiAgICBwcml2YXRlIGJpZ3dpbk5vZGU6IGNjLk5vZGU7XG4gICAgcHVibGljIHVpX2Z1bmNCdG5zOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX3BhdXNldmlldzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90aXBWaWV3OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB0aXBWaWV3OiBUZXhhc1RpcFZpZXc7XG4gICAgcHVibGljIGNvbW1vblZpZXc6IENvbW1vblZpZXc7XG4gICAgcHJpdmF0ZSBidXBhaUxpc3Q6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIHVzZXJJbmZvQ29tcDogVXNlckluZm9Db21wO1xuXG4gICAgLy/luKblh7rorrDliIbnm7jlhbNcbiAgICBwdWJsaWMgdWlfb3V0R29sZFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5fY2xvc2Vfb3V0R29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2xpZGVyT3V0R29sZDogZmd1aS5HU2xpZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfb3V0R29sZF9udW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bk91dEdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX215R29sZF9udW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0blJlZnJlc2hHb2xkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyBicm9hZGNhc3Q6IEJyb2FkY2FzdFZpZXc7XG5cbiAgICBwcml2YXRlIHNlbmRDYXJkQW5pOiBmZ3VpLkdDb21wb25lbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgaXNDYW5FeGVUZXhNYXM6IGJvb2xlYW4gPSBmYWxzZTsvL+WPr+S7peW8gOWni+aJp+ihjOa2iOaBr+mYn+WIl1xuXG4gICAgcHVibGljIGdldCBtb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgICAgIFRleGFzTGFuZ3VhZ2UuTG9hZExhbmd1YWdlQ29uZmlnKCk7XG4gICAgICAgIHN3aXRjaCAoQXBwQ29uc3QubGFuZ3VhZ2VUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBcIlRleGFzWldGVFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gXCJUZXhhc1pXSlRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBcIlRleGFzWldGVFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwidGV4YXNcIik7XG4gICAgICAgIGJ1bmRsZS5sb2FkKGAvcmVzL2xhbmd1YWdlLyR7ZmlsZW5hbWV9YCwgKGVyciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi6K+t6KiA5paH5Lu25Yqg6L295aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIGZndWkuYWRkTG9hZEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLnNldFN0cmluZ3NTb3VyY2UoZGF0YS50ZXh0KTtcbiAgICAgICAgICAgIGZndWkuYWRkTG9hZEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuY3JlYXRlKCk7XG4gICAgICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gZmd1aS5VSU9iamVjdEZhY3Rvcnkuc2V0RXh0ZW5zaW9uKFwidWk6Ly9UZXhhcy9Ccm9hZGNhc3RcIiwgQnJvYWRjYXN0KTtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UudmlldyA9IHRoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuZmd1aUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWxsQ2hpbGRDcmVhdGVkKCkge1xuICAgICAgICBzdXBlci5hbGxDaGlsZENyZWF0ZWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FuVXBkYXRlKSB7XG4gICAgICAgICAgICBpZiAoVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5pc0NhbkV4ZU5leHQoKSAmJiB0aGlzLmlzQ2FuRXhlVGV4TWFzKSB7XG4gICAgICAgICAgICAgICAgVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5FeGVOZXh0TWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIE92ZXJyaWRlIFxuICAgIHB1YmxpYyBPbkxvYWRDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzY2FsZVggPSBjYy53aW5TaXplLndpZHRoIC8gdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLnNldFNjYWxlKHNjYWxlWCwgMSk7XG5cbiAgICAgICAgLy8g5ri45oiP5LuO5ZCO5Y+w6L+U5Zue5YmN56uv5pi+56S655qE55uR5ZCsXG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfU0hPVyk7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCB0aGlzLmdhbWVFdmVudFNob3cuYmluZCh0aGlzKSk7XG4gICAgICAgIGNjLmdhbWUub2ZmKGNjLmdhbWUuRVZFTlRfSElERSk7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCB0aGlzLmdhbWVFdmVudEhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuXG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZ2lzdE5vdGlmeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnYW1lRXZlbnRTaG93KCkge1xuICAgICAgICAvLyDmsqHmnInmlq3lvIDov57mjqUg6YeN5paw6I635Y+W5pyA5paw5pWw5o2u5Yi35paw5qGM6Z2iXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tZ2FtZUV2ZW50U2hvdy0tLVwiKTtcbiAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcbiAgICAgICAgdGhpcy5pc0NhblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlY29ubmVjdCgpO1xuICAgICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgLy/lj5Hotbfph43ov55cbiAgICBwdWJsaWMgc2VuZFJlY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb21tb25WaWV3LnNob3dMb2FkaW5nKCk7XG4gICAgICAgIFJlY29ubmVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UucmVjb25uZWN0KHRoaXMuY29ubmVjdFN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5jb25uZWN0RmFpbC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyDov57mjqXmiJDlip/lm57osINcbiAgICBwdWJsaWMgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuY29tbW9uVmlldy5zaG93TG9hZGluZygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNzX2VudGVydGFibGVudW1fdGV4KCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIC8vIOi/nuaOpeWksei0peWbnuiwg1xuICAgIHB1YmxpYyBjb25uZWN0RmFpbCh0aXBTdHI6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbW1vblZpZXcuU2hvd1RpcCh0aXBTdHIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZUV2ZW50SGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1nYW1lRXZlbnRIaWRlLS0tXCIpO1xuICAgICAgICAvLyDlpoLmnpzlnKjmipXkv53nlYzpnaIg55u05o6l5pS+5byDXG4gICAgICAgIGlmICh0aGlzLnVpX0J0bkluc3VyYW5jZVBhbmVsLnZpc2libGUpIHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2luc3VyYW5jZV90ZXgoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3Bvc1NlcnZlciwgMCwgMCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2JmdGFibGUubXlVc2VyICE9IG51bGwgJiYgdGhpcy5fYmZ0YWJsZS5teVVzZXIuSXNXYWl0VG9UYWtlSW4oKSkge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfc2l0ZG93bndhaXR1cF90ZXgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdC5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHVzZXIudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICB9KVxuICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5yZW1vdmVUaW1lcigpO1xuICAgICAgICBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLnJlbW92ZUFsbE1lcygpO1xuICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNzX2VudGVydGFibGVudW1fdGV4KCkge1xuICAgICAgICBsZXQgZGF0YTogY3NfZW50ZXJ0YWJsZW51bV90ZXggPSBuZXcgY3NfZW50ZXJ0YWJsZW51bV90ZXgoKTtcbiAgICAgICAgZGF0YS50bnVtYmVyID0gQXBwQ29uc3Qucm9vbUlkO1xuICAgICAgICBkYXRhLl9nID0gQXBwQ29uc3QuY3VycmVudEdhbWVJZDtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3NfZW50ZXJ0YWJsZW51bV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpLCB0aGlzLnNjX2VudGVydGFibGVudW1fdGV4LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19lbnRlcnRhYmxlbnVtX3RleChkYXRhOiBzY19lbnRlcnRhYmxlbnVtX3RleCkge1xuICAgICAgICB0aGlzLmNvbW1vblZpZXcuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDYW5VcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5yZW1vdmVBbGxNZXMoKTtcbiAgICAgICAgICAgIEFwcENvbnN0LmVudGVyVGFibGVEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEubGV2ZWxpZCAmJiAoQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPSBkYXRhLmxldmVsaWQpO1xuICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDUxO1xuICAgICAgICAgICAgdGhpcy5Jbml0VUkoKTtcbiAgICAgICAgICAgIHRoaXMuSGFuZGxlVGFibGVSZWNvdmVyKHRoaXMubW9kZWwudGFibGUsIHRoaXMubW9kZWwucGFseWVybGlzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5FeGl0R2FtZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5TaG93KCk7XG4gICAgICAgIHRoaXMubG9hZFNvdW5kcygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIEJhc2VGcmFtZU5hdGl2ZS5ub3dHYW1lVmlldyA9IHRoaXM7XG5cbiAgICAgICAgRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMSwgMzEpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMiwgMTYpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMywgMTApO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoNCwgOCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCg1LCA2KTtcbiAgICAgICAgRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUuc2V0KDYsIDUpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoNywgNCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCg4LCAzLjUpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoOSwgMyk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCgxMCwgMi41KTtcbiAgICAgICAgRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUuc2V0KDExLCAyLjMpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMTIsIDIpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMTMsIDEuOCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCgxNCwgMS42KTsgLy/lkI7pnaLnmoTkuLrog4zkv53pmanotZTnjodcbiAgICAgICAgRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUuc2V0KDE1LCAxLjQpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMTYsIDEuMyk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCgxNywgMS4yKTtcbiAgICAgICAgRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUuc2V0KDE4LCAxLjEpO1xuICAgICAgICBGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5zZXQoMTksIDEuMCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Ll9kaWNJbnNSYXRlLnNldCgyMCwgMC44KTtcbiAgICAgICAgdGhpcy5VcGRhdGVDdXJUaW1lKCk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jdXJUaW1lVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUN1clRpbWUoKTtcbiAgICAgICAgfSwgNSk7XG4gICAgICAgIHRoaXMuX2JmdGFibGUgPSBuZXcgVGV4YXNUYWJsZSgpO1xuICAgICAgICB0aGlzLmluaXRNYW5hZ2VyKCk7XG5cbiAgICAgICAgdGhpcy5jaGlwUG9vbCA9IHRoaXMudWlfY2hpcHBvb2xyb290Lm5vZGUuYWRkQ29tcG9uZW50KENhY2hlUG9vbCk7XG4gICAgICAgIHRoaXMuY2hpcFBvb2wuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfY2hpcHBvb2xyb290LmFzQ29tO1xuICAgICAgICB0aGlzLnVpX2NoaXBwb29scm9vdC5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5Q29tcCA9IHRoaXMudWlfaGlzdG9yeVBhbmVsLm5vZGUuYWRkQ29tcG9uZW50KFRleGFzSGlzdG9yeUNvbXApO1xuICAgICAgICB0aGlzLmhpc3RvcnlDb21wLmZndWlDb21wb25lbnQgPSB0aGlzLnVpX2hpc3RvcnlQYW5lbDtcbiAgICAgICAgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGVscFNldHRpbmdDb21wID0gdGhpcy51aV9IZWxwU2V0dGluZ1BhbmVsLm5vZGUuYWRkQ29tcG9uZW50KFRleGFzSGVscHNldHRpbmdDb21wKTtcbiAgICAgICAgdGhpcy5oZWxwU2V0dGluZ0NvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfSGVscFNldHRpbmdQYW5lbDtcbiAgICAgICAgdGhpcy51aV9IZWxwU2V0dGluZ1BhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmJhbGVuY2VDb21wID0gdGhpcy51aV9iYWxlbmNlUGFuZWwubm9kZS5hZGRDb21wb25lbnQoQmFsZW5jZUNvbXApO1xuICAgICAgICB0aGlzLmJhbGVuY2VDb21wLmZndWlDb21wb25lbnQgPSB0aGlzLnVpX2JhbGVuY2VQYW5lbDtcbiAgICAgICAgdGhpcy51aV9iYWxlbmNlUGFuZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY2hhdENvbXAgPSB0aGlzLnVpX2NoYXRQYW5lbC5ub2RlLmFkZENvbXBvbmVudChUZXhhc0NoYXRDb21wKTtcbiAgICAgICAgdGhpcy5jaGF0Q29tcC5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9jaGF0UGFuZWw7XG4gICAgICAgIHRoaXMudWlfY2hhdFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmNvbW1vblZpZXcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQ29tbW9uVmlldyk7XG4gICAgICAgIHRoaXMudGlwVmlldyA9IHRoaXMudWlfdGlwVmlldy5ub2RlLmFkZENvbXBvbmVudChUZXhhc1RpcFZpZXcpXG4gICAgICAgIHRoaXMudGlwVmlldy5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV90aXBWaWV3O1xuICAgICAgICB0aGlzLnVpX3RpcFZpZXcubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucm9sbE5veWlmaWVyQ29tcCA9IHRoaXMudWlfcm9sbE5vdGlmeVBhbmVsLm5vZGUuYWRkQ29tcG9uZW50KFJvbGxOb3RpZmllckNvbXApO1xuICAgICAgICB0aGlzLnJvbGxOb3lpZmllckNvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfcm9sbE5vdGlmeVBhbmVsO1xuICAgICAgICB0aGlzLnVpX3JvbGxOb3RpZnlQYW5lbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy51c2VySW5mb0NvbXAgPSB0aGlzLnVpX3VzZXJJbmZvUGFuZWwubm9kZS5hZGRDb21wb25lbnQoVXNlckluZm9Db21wKTtcbiAgICAgICAgdGhpcy51c2VySW5mb0NvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfdXNlckluZm9QYW5lbDtcbiAgICAgICAgdGhpcy51c2VySW5mb0NvbXAubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWRkRmd1aUNvbXBvbmVudChCcm9hZGNhc3RWaWV3KS5mZ3VpWSA9IDE2MTtcblxuXG4gICAgICAgIHRoaXMuYmlnd2luTm9kZSA9IHRoaXMudWlfYmlnV2luLmdldENoaWxkKFwiYmd3aW5Ob2RlXCIpLm5vZGU7XG4gICAgICAgIHRoaXMuYmlnd2luU3BpbiA9IG5ldyBUZXhhc0JpZ1dpblNwaW4odGhpcy5iaWd3aW5Ob2RlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJpZ3dpblNwaW4pO1xuICAgICAgICB0aGlzLlJlZ2lzdEV2ZW50KCk7XG4gICAgICAgIHRoaXMuSW5pdFVJKCk7XG5cbiAgICAgICAgdGhpcy5SZWZyZXNoRGVza0ltYWdlKCk7XG4gICAgfVxuXG4gICAgSW5pdFVJKCkge1xuICAgICAgICBsZXQgZGF0YSA9IEFwcENvbnN0LmVudGVyVGFibGVEYXRhO1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5zY19lbnRlcnRhYmxlbnVtX3RleChkYXRhKTtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsID0gQXBwQ29uc3QubVBsYXllck1vZGVsO1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5yb29tID0gQXBwQ29uc3QuZW50ZXJUYWJsZURhdGE7XG4gICAgICAgIHRoaXMuc2hvd0NhcmRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2hvdzNjYXJkcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3c0Y2FyZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3c1Y2FyZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGVsLmN1ck1zZ0lkID0gMDtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3RGaXZlQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmN1ckNvbW1vbmRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmJ1cGFpTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLlJldHNldFBsYXllcigpO1xuICAgICAgICB0aGlzLkluaXRpU3RhdHVzKCk7XG4gICAgICAgIHRoaXMuaGlkZVVJQWxsQnRucygpO1xuICAgICAgICB0aGlzLnVpX3R4dFBhc3N3b3JkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90eHRHYW1lVHlwZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfdHh0QmFzZS50ZXh0ID0gKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLk1hdGNoQ29kZSA9PSBcIlwiID8gXCJcIiA6IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MDgpICsgXCI6XCIgKyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5NYXRjaENvZGUpICtcbiAgICAgICAgICAgIFwiICDlupXms6g6XCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMubW9kZWwuYnJhdGUpO1xuICAgICAgICB0aGlzLlVwZGF0ZUphY2twb3QoMCwgMCk7XG4gICAgICAgIHRoaXMuVXBkYXRlTGFzdEpwb3QoMCk7XG4gICAgICAgIHRoaXMuZGljaGkgPSAwO1xuICAgICAgICB0aGlzLnVpX3R4dEFsbC50ZXh0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMudWlfbGFzdHR4dEFsbC50ZXh0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuY3VyU2VsZWN0U0NsdWIgPSBudWxsO1xuICAgICAgICB0aGlzLnVpX3R4dEFkZC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQxMCkgKyBcIjowXCI7Ly/ot5/ms6hcbiAgICAgICAgdGhpcy51aV90eHRNb25leS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwuZ29sZCkgKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX3R4dE5hbWUudGV4dCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5fbjtcbiAgICAgICAgdGhpcy51aV90eHRSb3VuZC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQxMSkgKyBcIjowXCI7Ly/lm57lkIhcbiAgICAgICAgdGhpcy51aV90eHRSb29tLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMTgwKSArIFwiOiBcIiArIHRoaXMubW9kZWwuUm9vbV90bnVtYmVyO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYmxlSW5mbygpO1xuICAgICAgICB0aGlzLlNldE1hbmdvT2ZUYWJsZSh0aGlzLm1vZGVsLl9tYW5nb09mVGFibGUpO1xuICAgICAgICB0aGlzLnVpX2J0bkxlZnRDYXJkcy5nZXRDaGlsZChcIlRleHRcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuZ2V0TGVmdENhcmRDb3N0KCk7XG4gICAgICAgIHRoaXMuaGlzdG9yeUNvbXAuTXlTdGFydCh0cnVlKTtcbiAgICAgICAgdGhpcy5oZWxwU2V0dGluZ0NvbXAuTXlTdGFydCgxKTtcbiAgICAgICAgdGhpcy5oZWxwU2V0dGluZ0NvbXAuY2xvc2VTaG93VmlldygpO1xuICAgICAgICB0aGlzLmJhbGVuY2VDb21wLk15U3RhcnQoKTtcbiAgICAgICAgdGhpcy5jaGF0Q29tcC5NeVN0YXJ0KCk7XG4gICAgICAgIHRoaXMuU2hvd1VJQ2hhdFBhbmVsKGZhbHNlKTtcbiAgICAgICAgdGhpcy50aXBWaWV3Lk15U3RhcnQoKTtcbiAgICAgICAgdGhpcy5yb2xsTm95aWZpZXJDb21wLk15U3RhcnQoKTtcbiAgICAgICAgdGhpcy51c2VySW5mb0NvbXAuTXlTdGFydCgpO1xuICAgICAgICB0aGlzLnVpX3J1bnRpbWVSZWNvcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkhpZGVVSVRha2VHb2xkUGFuZWwoKTtcbiAgICAgICAgdGhpcy5TaG93VUlEZXNrVGlwKG51bGwpO1xuICAgICAgICB0aGlzLlVwZGF0ZUNvbmZpcm1TdGFydEJ0bigpO1xuICAgICAgICB0aGlzLlN0YXJ0R2FtaW5nVGltZXIodGhpcy5tb2RlbC5lbmRUaW1lKTsvLyAtIFVJVXRpbC5OdW1iZXJUb0ludChjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAvIDEwMDApKTtcbiAgICAgICAgdGhpcy5NZXNzYWdlUmVCYWNrKCk7XG4gICAgICAgIHRoaXMuVXBkYXRlVGFrZUluVGlwKCk7XG4gICAgICAgIHRoaXMuaXNDYW5FeGVUZXhNYXMgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgbG9hZFNvdW5kcygpIHtcbiAgICAgICAgbGV0IGFiYmYgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwidGV4YXNcIik7XG4gICAgICAgIGFiYmYubG9hZERpcihcInJlcy9Tb3VuZHNcIiwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uYWRkKGNsaXBzW2ldLm5hbWUsIGNsaXBzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheUJHTShcInRleGFzX2ZpZ2h0TXVzaWNcIik7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnNldFNvdW5kU3RhdHVzKEF1ZGlvTWFuYWdlci5UZXhhc011c2ljU3RhdHVzID8gXCJvcGVuXCIgOiBcImNsb3NlXCIpO1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zZXRFZmZlY3RTdGF0dXMoQXVkaW9NYW5hZ2VyLlRleGFzRWZmZWN0U3RhdHVzID8gXCJvcGVuXCIgOiBcImNsb3NlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQmlnRW5kID0gZmFsc2U7XG4gICAgcHVibGljIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gdGV4YXMgT25EZXN0cm95IC0tLVwiKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9TSE9XKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFKTtcbiAgICAgICAgdGhpcy5zaG93Q2FyZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pc0JpZ0VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RHYW1ibGVHb2xkID0gMDtcbiAgICAgICAgdGhpcy5pc0hhdmVBZGRHb2xkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpcFBvb2wuQ2xlYXJBbGxDYWNoZSgpO1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3ID0gbnVsbDtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5SZXNldCgpO1xuICAgICAgICB0aGlzLl9iZnRhYmxlID0gbmV3IFRleGFzVGFibGUoKTtcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3RvcEFsbFRpbWVyKCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkluaXQoKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zdG9wQkdNKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmxvYWRWZWRpb1RpbWUpO1xuICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5yZW1vdmVUaW1lcigpO1xuICAgICAgICBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLnJlbW92ZUFsbE1lcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbFRpbWVyKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5maXJlVGltZXIpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jdXJUaW1lVGltZXIpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5lbmRUaW1lcik7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVPdXRUaW1lcik7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhbWVpbmdUaW1lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTdGFydEdhbWluZ1RpbWVyKHJlbWFpblRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAocmVtYWluVGltZSA8PSAwKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYW1laW5nVGltZXIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmdhbWVpbmdUaW1lciA9ICgpID0+IHtcblxuICAgICAgICB9LCByZW1haW5UaW1lIC0gMSk7Ly/muLjmiI/ml7bpl7Tlt7LliLDvvIzmnKzlsYDmuLjmiI/nu5PmnZ/lkI7lsIboh6rliqjop6PmlaNcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVzZXRVSSgpIHtcbiAgICAgICAgdGhpcy5TZXRBdXRvUWlQYWkoZmFsc2UpO1xuICAgICAgICB0aGlzLlNldEF1dG9HYW1ibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLlNob3dVSUJhbGVuY2VQYW5lbChudWxsKTtcbiAgICAgICAgdGhpcy5SZXNldFVzZXJVSSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZXNldFVzZXJVSSgpIHtcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdC5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgPT0gbnVsbCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICAgICAgdXNlci5SZXNldFBsYXlpbmdEYXRhQW5kVUkoKTsgLy/lvIDlp4vkuIvms6jooajnpLos5paw5bGA5byA5ZCvLOimgeWFiOmHjee9ruaVsOaNruWSjFVJXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3VyVGltZVRpbWVyOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBsb2FkVmVkaW9UaW1lOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgdWlfdXNlclZlZGlvUG9zUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3M6IE1hcDxudW1iZXIsIGZndWkuR0NvbXBvbmVudD47XG5cbiAgICBwdWJsaWMgdWlfQ29tbW9uQ2FyZHNwb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX0NvbW1vbkNhcmRWZWRpb3Nwb3M6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjY19wb3M6IGZndWkuR0NvbXBvbmVudFtdO1xuXG4gICAgcHVibGljIGluaXRNYW5hZ2VyKCkgeyAvL+agueaNruacjeWKoeWZqOi/lOWbnueahCDnlKjmiLfkvY3nva7kv6Hmga/jgIJcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS5DbGVhcigpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5vcGVuViA+IDApXG4gICAgICAgICAgICB0aGlzLkluaXRWZWRpb1Bvc0xpc3QoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5Jbml0UG9zTGlzdCgpO1xuXG4gICAgICAgIHRoaXMuSW5pdFVzZXJJbmZvKHRoaXMudWlfdXNlcjAsIDApO1xuICAgICAgICB0aGlzLkluaXRVc2VySW5mbyh0aGlzLnVpX3VzZXIxLCAxKTtcbiAgICAgICAgdGhpcy5Jbml0VXNlckluZm8odGhpcy51aV91c2VyMiwgMik7XG4gICAgICAgIHRoaXMuSW5pdFVzZXJJbmZvKHRoaXMudWlfdXNlcjMsIDMpO1xuICAgICAgICB0aGlzLkluaXRVc2VySW5mbyh0aGlzLnVpX3VzZXI0LCA0KTtcbiAgICAgICAgdGhpcy5Jbml0VXNlckluZm8odGhpcy51aV91c2VyNSwgNSk7XG4gICAgICAgIHRoaXMuSW5pdFVzZXJJbmZvKHRoaXMudWlfdXNlcjYsIDYpO1xuICAgICAgICB0aGlzLkluaXRVc2VySW5mbyh0aGlzLnVpX3VzZXI3LCA3KTtcbiAgICAgICAgdGhpcy5Jbml0VXNlckluZm8odGhpcy51aV91c2VyOCwgOCk7XG4gICAgICAgIHRoaXMuSW5pdFVzZXJJbmZvKHRoaXMudWlfdXNlcjksIDksIHRoaXMuUmVzZXRQb3MuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5fYmZ0YWJsZS5Jbml0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbml0UG9zTGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zID09IG51bGwpXG4gICAgICAgICAgICB0aGlzLnBvcyA9IG5ldyBNYXA8bnVtYmVyLCBmZ3VpLkdDb21wb25lbnQ+KCk7XG4gICAgICAgIGlmICh0aGlzLmNjX3BvcyA9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5jY19wb3MgPSBbXTtcbiAgICAgICAgdGhpcy5wb3MuY2xlYXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYW5OdW1cIiwgdGhpcy5tb2RlbC5tYW5OdW0pO1xuICAgICAgICBsZXQgcG9zUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IHRoaXMudWlfVXNlck1hbmFnZXIuZ2V0Q2hpbGQoXCJ1c2VyUG9zUGFuZWxcIiArIHRoaXMubW9kZWwubWFuTnVtKS5hc0NvbTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NQYW5lbC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9zLnNldChpICsgMSwgcG9zUGFuZWwuX2NoaWxkcmVuW2ldLmFzQ29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2NfcG9zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aV9Db21tb25DYXJkc3Bvcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2NfcG9zLnB1c2godGhpcy51aV9Db21tb25DYXJkc3Bvcy5fY2hpbGRyZW5baV0uYXNDb20pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZW5kQ2FyZEFuaSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2FyZCA9IHRoaXMudWlfVXNlck1hbmFnZXIuZ2V0Q2hpbGQoXCJzZW5kQ2FyZFwiICsgaSkuYXNDb207XG4gICAgICAgICAgICB0aGlzLnNlbmRDYXJkQW5pLnB1c2goc2NhcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbml0VmVkaW9Qb3NMaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5wb3MgPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMucG9zID0gbmV3IE1hcDxudW1iZXIsIGZndWkuR0NvbXBvbmVudD4oKTtcbiAgICAgICAgaWYgKHRoaXMuY2NfcG9zID09IG51bGwpXG4gICAgICAgICAgICB0aGlzLmNjX3BvcyA9IFtdO1xuICAgICAgICB0aGlzLnBvcy5jbGVhcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlfdXNlclZlZGlvUG9zUGFuZWwuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcy5zZXQoaSArIDEsIHRoaXMudWlfdXNlclZlZGlvUG9zUGFuZWwuX2NoaWxkcmVuW2ldLmFzQ29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2NfcG9zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aV9Db21tb25DYXJkVmVkaW9zcG9zLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jY19wb3MucHVzaCh0aGlzLnVpX0NvbW1vbkNhcmRWZWRpb3Nwb3MuX2NoaWxkcmVuW2ldLmFzQ29tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgSW5pdFVzZXJJbmZvKF91c2VyVHM6IGZndWkuR0NvbXBvbmVudCwgbG9jYWxQb3M6IG51bWJlciwgY2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBsZXQgdXNlclRzOiBmZ3VpLkdDb21wb25lbnQgPSBfdXNlclRzO1xuICAgICAgICBsZXQgdXNlcjogVGV4YXNVc2VyQ29tcCA9IHVzZXJUcy5ub2RlLmdldENvbXBvbmVudChUZXhhc1VzZXJDb21wKTtcbiAgICAgICAgaWYgKHVzZXIgPT0gbnVsbCkgdXNlciA9IHVzZXJUcy5ub2RlLmFkZENvbXBvbmVudChUZXhhc1VzZXJDb21wKTtcbiAgICAgICAgdXNlci5mZ3VpQ29tcG9uZW50ID0gdXNlclRzO1xuICAgICAgICB1c2VyVHMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LnB1c2godXNlcik7XG4gICAgICAgIHVzZXIuTXlTdGFydChsb2NhbFBvcywgdGhpcy51aV90YWJsZWNlbnRlciwgY2FsbEJhY2spO1xuXG4gICAgfVxuXG4gICAgcHVibGljIEluaXRpU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzQmlnRW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNteXR1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9IZWxwU2V0dGluZ1BhbmVsLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoaXMudWlfYnRuWXVZaW4udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vIFZvaWNlQ2hhdE1vbm8gdm9pY2VIZWxwZXIgPSB1aV92b2ljZUNoYXQuZ2FtZU9iamVjdC5nZXRPckFkZENvbXBvbmVudDxWb2ljZUNoYXRNb25vPiAoKTtcbiAgICAgICAgLy8gdm9pY2VIZWxwZXIuTXlTdGFydCAoKTtcbiAgICAgICAgdGhpcy51aV9Db21tb25DYXJkcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDRcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICB0aGlzLnVpX2N1clRleGFzdHlwZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfQnRuQWRkTGltaXQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfQnRuQWRkcGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2phY2twb3RwYXJhbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2luc2phY2twb3RwYXJhbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1ckNvbW1vbmRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLlNob3dVSUphY2twb3QoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBNZXNzYWdlUmVCYWNrKCkge1xuICAgICAgICB0aGlzLnNjX2VudGVydGFibGVfdGV4YXNfbih0aGlzLm1vZGVsLnBhbHllcmxpc3QpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC50YWJsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLkhhbmRsZVRhYmxlUmVjb3Zlcih0aGlzLm1vZGVsLnRhYmxlLCB0aGlzLm1vZGVsLnBhbHllcmxpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDph43nva7njqnlrrZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgUmV0c2V0UGxheWVyKCkge1xuICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICBkYXRhLlJlc2V0VXNlckNvbXBVSSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5BY3Rpb24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOagueaNrueOqeWutnBvc+iOt+WPlueOqeWutuS9jee9rlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBHZXRMb2NhbFBvcyhwb3M6IG51bWJlcikge1xuICAgICAgICBsZXQgbXlwb3MgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyO1xuICAgICAgICByZXR1cm4gVGV4YXNUYWJsZS5HZXRMb2NhbFBvc0J5U2VydmVyUG9zKHBvcywgbXlwb3MsIHRoaXMubW9kZWwubWFuTnVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5CdG5aaGV6YW8oKSB7XG4gICAgICAgIHRoaXMudWlfYnRuWmhlWmhhby52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlfYnRuWmhlWmhhbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnVpX2J0blpoZVpoYW8udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9LCAxKVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5rOo5YaMVUnkuovku7ZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgUmVnaXN0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMuU2hvd0FjdGlvbkJ0bnMoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nYW1ldHlwZSA9PSAyMCkgdGhpcy5tb3ZlTjF0b04yKHRoaXMudWlfYnRuYWxsaW5hZGQubm9kZSwgdGhpcy51aV9idG5BdXRvRm9sbG93Lm5vZGUpO1xuICAgICAgICAvL+aVslxuICAgICAgICB0aGlzLnVpX2J0bmFsbGluYWRkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aV9CdG5BZGRMaW1pdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLkdhbWJsZUFsbEluKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+S8kVxuICAgICAgICB0aGlzLnVpX2J0blhpdS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuR2FtYmxlWGl1KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+i3n+azqCzlupXms6jot59cbiAgICAgICAgdGhpcy51aV9idG5Gb2xsb3cuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bkZvbGxvdy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuR2FtYmxlTXVsdGlwbGUoMSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+WkpyAgICAgICBcbiAgICAgICAgdGhpcy51aV9idG4xYWRkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBQbGF5ZXJQcmVmcy5HZXRJbnQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCArIFwiX2tleV9qaWF6aHVcIiArIDEsIDMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gOSkvL0FsbGluXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1ibGVBbGxJbigpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlTXVsdGlwbGUoMik7XG4gICAgICAgIH0pOyAvLzHlgI3liqDms6ggIFxuICAgICAgICB0aGlzLnVpX2J0bjEyYWRkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBQbGF5ZXJQcmVmcy5HZXRJbnQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCArIFwiX2tleV9qaWF6aHVcIiArIDIsIDUpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gOSkvL0FsbGluXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1ibGVBbGxJbigpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlTXVsdGlwbGUoMyk7XG4gICAgICAgIH0pOyAvLzLlgI3liqDms6ggICAgICBcbiAgICAgICAgdGhpcy51aV9idG4xM2FkZC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyAzLCA3KTtcbiAgICAgICAgICAgIGlmICh0eXBlID09IDkpLy9BbGxpblxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlQWxsSW4oKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWJsZU11bHRpcGxlKDQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG4xNGFkZC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyA0LCAxKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09IDkpLy9BbGxpblxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlQWxsSW4oKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWJsZU11bHRpcGxlKDUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG4xNWFkZC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyA1LCAxKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09IDkpLy9BbGxpblxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlQWxsSW4oKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWJsZU11bHRpcGxlKDYpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC5vbihmZ3VpLkV2ZW50LlNUQVRVU19DSEFOR0VELCAoc2xpZGVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgbXlnb2xkID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCk7XG4gICAgICAgICAgICBsZXQgY2hvb3NlVmFsdWUgPSBNYXRoLmNlaWwobXlnb2xkICogc2xpZGVyLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGxldCBtaW4gPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnR1cm5HYW1ibGUpO1xuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fZ2FtYmxlKSA+IG1pbikge1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9nYW1ibGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYmVpID0gTWF0aC5yb3VuZChjaG9vc2VWYWx1ZSAvIG1pbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJBZGRHb2xkID0gYmVpICogbWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckFkZEdvbGQgPSBjaG9vc2VWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckFkZEdvbGQgPiBteWdvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52YWx1ZSA9IHRoaXMuY3VyQWRkR29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2Jhcl92Mi5maWxsQW1vdW50ID0gc2xpZGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0TnVtcy50ZXh0ID0gXCJBTExJTlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52YWx1ZSA9IHRoaXMuY3VyQWRkR29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2Jhcl92Mi5maWxsQW1vdW50ID0gc2xpZGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0TnVtcy50ZXh0ID0gdGhpcy5jdXJBZGRHb2xkICsgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCAoc2xpZGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51aV90eHROdW1zLnRleHQgIT0gXCJBTExJTlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyQWRkR29sZCA8PSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnR1cm5HYW1ibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9CdG5BZGRMaW1pdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyQWRkR29sZCA8IHRoaXMubWluQWRkR29sZCB8fCB0aGlzLmN1ckFkZEdvbGQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi5Yqg5rOo6YeR6aKd5LiN6IO95Li6MFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbkdhbWJsZSA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudHVybkdhbWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1ckFkZEdvbGQgPCBtaW5HYW1ibGUgKiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi5LiL5rOo6YeR6aKd6ZyA5aSn5LqOXCIgKyBtaW5HYW1ibGUgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW5HYW1ibGUgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnR1cm5HYW1ibGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJBZGRHb2xkIDwgbWluR2FtYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi5LiL5rOo6YeR6aKd6ZyA5aSn5LqOXCIgKyBtaW5HYW1ibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZ2FtYmxlR29sZCA9IHRoaXMuY3VyQWRkR29sZDtcbiAgICAgICAgICAgIGlmIChQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfbGFnYW5fdmFsdWVcIiwgMCkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwVmlldy5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTYpICsgZ2FtYmxlR29sZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfQnRuQWRkTGltaXQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLldhaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy/mlbIv5aSnXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1ibGVHb2xkID09IHRoaXMudWlfc2xpZGVyQWRkLm1heClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlQWxsSW4oKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2FtYmxlX3RleChnYW1ibGVHb2xkICogMTAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7IH0pOy8v56Gu6K6k5Yqg5rOoezB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0J0bkFkZExpbWl0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLldhaXQoKTtcbiAgICAgICAgICAgICAgICAvL+aVsi/lpKdcbiAgICAgICAgICAgICAgICBpZiAoZ2FtYmxlR29sZCA9PSB0aGlzLnVpX3NsaWRlckFkZC5tYXgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlQWxsSW4oKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2dhbWJsZV90ZXgoZ2FtYmxlR29sZCAqIDEwMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuQWRkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2FtZXR5cGUgPT0gMjApIHJldHVybjtcbiAgICAgICAgICAgIGxldCBteWdvbGQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkKTtcbiAgICAgICAgICAgIGxldCBtaW4gPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnR1cm5HYW1ibGUpO1xuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5BZGRHb2xkID0gbWluICogMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5BZGRHb2xkID0gbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG15Z29sZCA8IHRoaXMubWluQWRkR29sZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluQWRkR29sZCA9IG15Z29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dE51bXMudGV4dCA9IFwiQUxMSU5cIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV90eHROdW1zLnRleHQgPSB0aGlzLm1pbkFkZEdvbGQgKyBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBNYXRoLmZsb29yKHRoaXMubWluQWRkR29sZCAqIDEwMCAvIG15Z29sZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBlcmNlbnQgPT09IFwiLCBwZXJjZW50KTtcbiAgICAgICAgICAgIHBlcmNlbnQgPSBwZXJjZW50ID49IDEwMCA/IDEwMCA6IHBlcmNlbnQ7XG4gICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC52YWx1ZSA9IHBlcmNlbnQ7XG4gICAgICAgICAgICB0aGlzLnVpX3NsaWRlckFkZC5taW4gPSAwO1xuICAgICAgICAgICAgdGhpcy51aV9zbGlkZXJBZGQubWF4ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy51aV9iYXJfdjIuZmlsbEFtb3VudCA9IHBlcmNlbnQ7XG5cbiAgICAgICAgICAgIC8vIHRoaXMubWluQWRkR29sZCA9IHRoaXMubW9kZWwuYnJhdGUgKiAyID4gbXlnb2xkID8gbXlnb2xkIDogdGhpcy5tb2RlbC5icmF0ZSAqIDI7XG4gICAgICAgICAgICAvLyB0aGlzLm1pbkFkZEdvbGQgPSBOdW1iZXIoKHRoaXMubWluQWRkR29sZCAvIDEwMCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3NsaWRlckFkZC52YWx1ZSA9IHRoaXMubWluQWRkR29sZDtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfdHh0TnVtcy50ZXh0ID0gdGhpcy5taW5BZGRHb2xkICsgXCJcIjtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfYmFyX3YyLmZpbGxBbW91bnQgPSB0aGlzLm1pbkFkZEdvbGQ7XG5cbiAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOS4oi/lvIPniYwgXG4gICAgICAgIHRoaXMudWlfYnRucWlwYWkub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJ0ZXhhc19xaXBhaVwiKTtcbiAgICAgICAgICAgIGxldCBpc0dpdmV1cCA9IFBsYXllclByZWZzLkdldEludChcImtleV9Db25maXJtR2l2ZVVwXCIsIDApO1xuICAgICAgICAgICAgaWYgKHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCkgPD0gMCAmJiBpc0dpdmV1cCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93Q29uZmlybUhhbmRsZVBhbmVsKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2l2ZXVwX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5CdG5aaGV6YW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8v6Ieq5Yqo5LiiL+S8kVxuICAgICAgICB0aGlzLnVpX2J0bkF1dG9RaVBhaS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2V0QXV0b1FpUGFpKCF0aGlzLmlzQXV0b1FpUGFpKTtcbiAgICAgICAgICAgIHRoaXMuU2V0QXV0b0dhbWJsZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2J0bkF1dG9Gb2xsb3cub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNldEF1dG9HYW1ibGUoIXRoaXMuaXNBdXRvRm9sbG93KTtcbiAgICAgICAgICAgIHRoaXMuU2V0QXV0b1FpUGFpKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5Zue5qGMXG4gICAgICAgIHRoaXMudWlfYnRuQmFja1RhYmxlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy/lm57moYzvvIzpu5jorqTmmK/oh6rlt7HnmoRzZXJ2ZXJwb3NcbiAgICAgICAgICAgIGlmICh0aGlzLl9iZnRhYmxlLm15VXNlci5zZXJ2ZXJwb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5DaGVja0F1dG9TaXREb3duKHRoaXMuX2JmdGFibGUubXlVc2VyLnNlcnZlcnBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkNoZWNrQnRuQmFja1RhYmxlU3RhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5MZWZ0Q2FyZHMub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NhblNlZUxlZnRDYXJkcykge1xuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gdGhpcy51aV9idG5MZWZ0Q2FyZHMuZ2V0Q2hpbGQoXCJUZXh0XCIpLmFzVGV4dEZpZWxkLnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkIDwgTnVtYmVyKGNvc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE2MDEpKTsvL+mHkeW4geS4jei2s1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3NlZXJlc3RjYXJkX3RleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TaG93VUlMZWZ0Q2FyZHMoZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5TaG93UGFpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDYW5YaXVQYWkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgPCB0aGlzLm1vZGVsLmJyYXRlICogMTApIHtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTYwMSkpOy8v6YeR5biB5LiN6LazXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZm9yY2VzaG93Y2FyZF90ZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2hvd1VJTGVmdENhcmRzKGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vI3JlZ2lvbiDkv53pmannm7jlhbNcbiAgICAgICAgdGhpcy51aV9idG5naXZldXAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLldhaXQoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2luc3VyYW5jZV90ZXgoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3Bvc1NlcnZlciwgMCwgMCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnVpX2Z1bmNCdG5zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5CYW9iZW4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLldhaXQoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2luc3VyYW5jZV90ZXgoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3Bvc1NlcnZlciwgdGhpcy5iYW9iZW5aSW5zQWRkR29sZCwgdGhpcy5iYW9iZW5GSW5zQWRkR29sZCwgdGhpcy5idXBhaUxpc3QubGVuZ3RoIDw9IDAgPyBudWxsIDogdGhpcy5idXBhaUxpc3QpO1xuICAgICAgICAgICAgdGhpcy51aV9mdW5jQnRucy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfYnRuTWFuY2hpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5XYWl0KCk7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19pbnN1cmFuY2VfdGV4KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9wb3NTZXJ2ZXIsIHRoaXMubWFuY2hpWkluc0FkZEdvbGQsIHRoaXMubWFuY2hpRkluc0FkZEdvbGQsIHRoaXMuYnVwYWlMaXN0Lmxlbmd0aCA8PSAwID8gbnVsbCA6IHRoaXMuYnVwYWlMaXN0KTtcbiAgICAgICAgICAgIHRoaXMudWlfZnVuY0J0bnMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2ZlbmNoaS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnpodUluc0FkZEdvbGQgPD0gMCAmJiB0aGlzLmZlbkluc0FkZEdvbGQgPD0gMCkge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTIpKTsvL+aKleS/nemineS4jeiDveS4ujBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGlwVmlldy5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTcpICsgKHRoaXMudGVtcEluc0FkZEdvbGQgLyAxMDApLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5XYWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2luc3VyYW5jZV90ZXgoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX3Bvc1NlcnZlciwgdGhpcy56aHVJbnNBZGRHb2xkLCB0aGlzLmZlbkluc0FkZEdvbGQsIHRoaXMuYnVwYWlMaXN0Lmxlbmd0aCA8PSAwID8gbnVsbCA6IHRoaXMuYnVwYWlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9mdW5jQnRucy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7Ly/noa7orqTmipXkv517MH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyB0aGlzLnVpX2J0bkluc0FsbC5vbkNsaWNrKCgpPT57XG4gICAgICAgIC8vICAgICB0aGlzLkhhbmRsZUluc3VyYW5jZUJ0bnNGb3JTZWxmVHVybigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy51aV9pbnN1cmFuY2VJbmZvLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy51aV9pbnN1cmFuY2VBZGRQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0luc0FkZEluZm8oMSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2luc3VyYW5jZUluZm8zMi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfaW5zdXJhbmNlQWRkUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dJbnNBZGRJbmZvKDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2Nsb3NlSW5zQWRkUGFuZWwub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2luc3VyYW5jZUFkZFBhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfZnVuY0J0bnMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX3NsaWRlckluc0FkZC5vbihmZ3VpLkV2ZW50LlNUQVRVU19DSEFOR0VELCAoc2xpZGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLieadhuWAvO+8mlwiICsgVUlVdGlsLk51bWJlclRvSW50KHNsaWRlci52YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VySW5zQWRkKFVJVXRpbC5OdW1iZXJUb0ludChzbGlkZXIudmFsdWUpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcEluc0FkZEdvbGQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfZmVuY2hpVGlwLnRleHQgPSBcIlwiOy8v6K+36YCJ5oup5YiG5rGgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51aV9mZW5jaGlOdW1UZXh0LnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuemh1SW5zQWRkR29sZCArIHRoaXMuZmVuSW5zQWRkR29sZCkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy51aV9mZW5jaGlUaXAudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMzcpOy8v6LSt5Lmw5L+d6ZmpXG4gICAgICAgIH0pO1xuICAgICAgICAvL3RoaXMudWlfc2xpZGVySW5zQWRkLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCAoc2xpZGVyKSA9PiB7XG4gICAgICAgIHRoaXMudWlfYnRuQmFveGlhbkNvbW1pdC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBJbnNBZGRHb2xkIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2ZlbmNoaVRpcC50ZXh0ID0gXCJcIjsvL+ivt+mAieaLqeWIhuaxoFxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTIpKTsvL+aKleS/nemineS4jeiDveS4ujBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2xhZ2FuX3ZhbHVlXCIsIDApID09IDEpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcENhbGxiYWNrKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTcpICsgKHRoaXMudGVtcEluc0FkZEdvbGQgLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2ZlbmNoaU51bVRleHQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy56aHVJbnNBZGRHb2xkICsgdGhpcy5mZW5JbnNBZGRHb2xkKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2ZlbmNoaVRpcC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjIzNyk7Ly/otK3kubDkv53pmalcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlfQnRuSW5zdXJhbmNlUGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfaW5zdXJhbmNlX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyLCB0aGlzLnpodUluc0FkZEdvbGQsIHRoaXMuZmVuSW5zQWRkR29sZCwgdGhpcy5idXBhaUxpc3QubGVuZ3RoIDw9IDAgPyBudWxsIDogdGhpcy5idXBhaUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IH0pOy8v56Gu6K6k5oqV5L+dezB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2ZlbmNoaU51bVRleHQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy56aHVJbnNBZGRHb2xkICsgdGhpcy5mZW5JbnNBZGRHb2xkKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9mZW5jaGlUaXAudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMzcpOy8v6LSt5Lmw5L+d6ZmpXG4gICAgICAgICAgICAgICAgdGhpcy51aV9CdG5JbnN1cmFuY2VQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfaW5zdXJhbmNlX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyLCB0aGlzLnpodUluc0FkZEdvbGQsIHRoaXMuZmVuSW5zQWRkR29sZCwgdGhpcy5idXBhaUxpc3QubGVuZ3RoIDw9IDAgPyBudWxsIDogdGhpcy5idXBhaUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgIHRoaXMudWlfZGVsYXlBZGQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgPCAyMDAwICogKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmRlbGF5Q291bnQgPT0gLTEgPyAwIDogVUlVdGlsLk51bWJlclRvSW50KE1hdGgucG93KDIsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmRlbGF5Q291bnQpKSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNjAxKSk7Ly/ph5HluIHkuI3otrNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jc19kZWxheV90ZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9pbnNEZWxheUFkZC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCA8IDIwMDAgKiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXlDb3VudCA9PSAtMSA/IDAgOiBVSVV0aWwuTnVtYmVyVG9JbnQoTWF0aC5wb3coMiwgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXlDb3VudCkpKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE2MDEpKTsvL+mHkeW4geS4jei2s1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY3NfZGVsYXlfdGV4KCk7XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICB0aGlzLnVpX3NsaWRlclRha2VHb2xkLm9uKGZndWkuRXZlbnQuU1RBVFVTX0NIQU5HRUQsIChzbGlkZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBudW0gPSAoVUlVdGlsLk51bWJlclRvSW50KHNsaWRlci52YWx1ZSkgKyAxKSAqIHRoaXMubWluVGFrZUdvbGQ7XG5cbiAgICAgICAgICAgIC8vQU9G5qih5byP5pyA5ZCO5LiA5Liq5YCN5pWw5LiN5oyJ54WnbWluVGFrZUdvbGTnmoTlgI3mlbBcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdhbWV0eXBlID09IDIwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlci52YWx1ZSA+PSB0aGlzLm1heFRha2VHb2xkIC0gdGhpcy5taW5UYWtlR29sZCAmJiBzbGlkZXIudmFsdWUgPD0gdGhpcy5tYXhUYWtlR29sZCkge1xuICAgICAgICAgICAgICAgICAgICBudW0gPSBzbGlkZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gKFVJVXRpbC5OdW1iZXJUb0ludChzbGlkZXIudmFsdWUgLyB0aGlzLm1pblRha2VHb2xkKSArIDEpICogdGhpcy5taW5UYWtlR29sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuVXBkYXRlVGFrZUdvbGRVSShudW0gPiB0aGlzLm1heFRha2VHb2xkID8gdGhpcy5tYXhUYWtlR29sZCA6IChudW0gPCB0aGlzLm1pblRha2VHb2xkID8gdGhpcy5taW5UYWtlR29sZCA6IG51bSkpO1xuXG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudWlfYnRucmVjaGFyZ2VFeC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlY2hhcmdlQ3RyLmluc3RhbmNlLk9wZW5XaW5kb3cgKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX3JlZnJlc2hDZ29sZC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1clNlbGVjdFNDbHViID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjE5KSk7Ly/or7fpgInmi6nkuIDkuKrkv7HkuZDpg6hcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19yZWZyZXNoYmFsYW5jZV9jbHViKHRoaXMuY3VyU2VsZWN0U0NsdWIgIT0gbnVsbCA/IHRoaXMuY3VyU2VsZWN0U0NsdWIuY2lkIDogMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2J0blRha2VHb2xkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJUYWtlR29sZCA+IDAgJiYgdGhpcy5jdXJUYWtlR29sZCA8PSB0aGlzLm1heFRha2VHb2xkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93QWRkR29sZFBhbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIYXZlQWRkR29sZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2FkZGdvbGRpbmdhbWVfdGV4KFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLmN1clRha2VHb2xkKSwgdGhpcy5tb2RlbC5jdXJTQ2x1YiAhPSBudWxsID8gdGhpcy5tb2RlbC5jdXJTQ2x1Yi5jaWQgOiAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLnVpX2lucHV0UGFzcy50ZXh0LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfc2l0ZG93bl90ZXgodGhpcy5wb3NTaXQsIFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLmN1clRha2VHb2xkKSwgdGhpcy5pc0tlZXAsIHRoaXMucGFzc3dvcmQsIHRoaXMuY3VyU2VsZWN0U0NsdWIgIT0gbnVsbCA/IHRoaXMuY3VyU2VsZWN0U0NsdWIuY2lkIDogMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuSGlkZVVJVGFrZUdvbGRQYW5lbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93VUlUYWtlR29sZFBhbmVsKHRydWUsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoXCLluKblhaUg5pWw5o2uIOmUmeivrzpjdXJUYWtlR29sZFwiICsgY3VyVGFrZUdvbGQgKyBcIiBtYXg6XCIgKyBtYXhUYWtlR29sZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuUmVjaGFyZ2VHb2xkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy/lhYXlgLxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5fY2xvc2VfdGFrZUdvbGQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmZ0YWJsZS5teVVzZXIgIT0gbnVsbCAmJiB0aGlzLl9iZnRhYmxlLm15VXNlci5Jc1dhaXRUb1Rha2VJbigpKSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfc2l0ZG93bndhaXR1cF90ZXgoKTsvL+WNoOW6p+eahOaXtuWAmeS4jeW4puWFpeebtOaOpeWPmOS4uuaXgeinglxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5IaWRlVUlUYWtlR29sZFBhbmVsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX0J0bk1lc3NhZ2Uub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNob3dVSUNoYXRQYW5lbCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfYnRuUmVjb3JkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1aV9ydW50aW1lUmVjb3Jk5Yqo5L2cID09IFwiICsgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5nZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCaWdFbmQgfHwgdGhpcy51aV9ydW50aW1lUmVjb3JkLm5vZGUuZ2V0TnVtYmVyT2ZSdW5uaW5nQWN0aW9ucygpID4gMCkgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0Z2Fpbl90ZXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZENvbXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkQ29tcCA9IHRoaXMudWlfcnVudGltZVJlY29yZC5ub2RlLmFkZENvbXBvbmVudChUZXhhc1JlY29yZENvbXApO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkQ29tcC5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9ydW50aW1lUmVjb3JkLmFzQ29tO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfcnVudGltZVJlY29yZC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRDb21wLk15U3RhcnQoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5yZWNvcmRDb21wLlNob3coKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmN1clRhYmxlT3ZlckNvdW50ID4gMCkgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNHYW1lc3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51aV9ydW50aW1lUmVjb3JkLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjIsIGNjLnYyKDAsIDApKSkgLy8gRG9Ud2VlbkV4LkRPTG9jYWxNb3ZlWCAodWlfcnVudGltZVJlY29yZCwgMCwgMC41Zik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuSGlzdG9yeS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidWlfaGlzdG9yeVBhbmVs5Yqo5L2cID09IFwiICsgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5nZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCaWdFbmQgfHwgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5nZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zKCkgPiAwKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC5TaG93KCk7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2J0bkNvbGxlY3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX2hpc3RvcnlQYW5lbC5ub2RlLnggPSAxMDgwO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiBjYy52MygwLCB0aGlzLnVpX2hpc3RvcnlQYW5lbC55LCAwKSB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfdGhpc3RvcnlfdGV4KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bk1hbmdvLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0YWxsamFja3BvdF90ZXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmphY2twb3RDb21wID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmphY2twb3RDb21wID0gdGhpcy51aV9qYWNrcG90UGFuZWwubm9kZS5hZGRDb21wb25lbnQoSmFja3BvdENvbXApO1xuICAgICAgICAgICAgICAgIHRoaXMuamFja3BvdENvbXAuZmd1aUNvbXBvbmVudCA9IHRoaXMudWlfamFja3BvdFBhbmVsO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfamFja3BvdFBhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmphY2twb3RDb21wLk15U3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qYWNrcG90Q29tcC5TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuUmVmcmVzaC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1ODMpKTsvL+e6v+i3r+WIh+aNouaIkOWKn1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0blJlZnJlc2hHb2xkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZnJlc2hwbGF5ZXJJbmZvU0QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5HUFMub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLm5lYXJVc2VyQ29tcC5TaG93IChudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9hZGRDbHViR29sZF9idG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLlNob3dBZGRDbHViUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfbm9SZW1pbmQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnVpX25vUmVtaW5kLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpbmRleCA9PSAwID8gMSA6IDA7XG4gICAgICAgICAgICB0aGlzLnVpX25vUmVtaW5kLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgodmFsdWUpO1xuICAgICAgICAgICAgUGxheWVyUHJlZnMuU2V0SW50KFwia2V5X0NvbmZpcm1HaXZlVXBcIiwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9HaXZlVXBDb25maXJtLmdldENoaWxkKFwidGlwQ2xvc2VUZXh0XCIpLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzk1KTsvL+W8g+eJjFxuICAgICAgICB0aGlzLnVpX0dpdmVVcENvbmZpcm0ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNob3dDb25maXJtSGFuZGxlUGFuZWwoZmFsc2UpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2l2ZXVwX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyKTtcbiAgICAgICAgICAgIHRoaXMub3BlbkJ0blpoZXphbygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9DaGVja0NvbmZpcm0uZ2V0Q2hpbGQoXCJ0aXBPS1RleHRcIikudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEyOTcpOy8v6K6p54mMXG4gICAgICAgIHRoaXMudWlfQ2hlY2tDb25maXJtLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TaG93Q29uZmlybUhhbmRsZVBhbmVsKGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2J0bkZvbGxvdy52aXNpYmxlKVxuICAgICAgICAgICAgICAgIHRoaXMuR2FtYmxlTXVsdGlwbGUoMSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1ibGVYaXUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfY29uZmlybUhhbmRsZWJnLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TaG93Q29uZmlybUhhbmRsZVBhbmVsKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v6KGl54mM5YWo6YCJXG4gICAgICAgIHRoaXMudWlfYnRuQnVwYWlBbGxDYXJkLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdXBhaUFsbCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VySW5zQWRkKHRoaXMudGVtcEluc0FkZEdvbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5NaXhCYW94aWFuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYodGhpcy51aV9zbGlkZXJJbnNBZGQuZW5hYmxlZCA9PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQudmFsdWUgPSB0aGlzLnVpX3NsaWRlckluc0FkZC5taW47XG4gICAgICAgICAgICB0aGlzLnNob3dDdXJJbnNBZGQoVUlVdGlsLk51bWJlclRvSW50KHRoaXMudWlfc2xpZGVySW5zQWRkLm1pbikpXG4gICAgICAgICAgICAvLyBpZiAodGhpcy50ZW1wSW5zQWRkR29sZCA8PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2ZlbmNoaVRpcC50ZXh0ID0gXCJcIjsvL+ivt+mAieaLqeWIhuaxoFxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMudWlfZmVuY2hpTnVtVGV4dC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLnpodUluc0FkZEdvbGQgKyB0aGlzLmZlbkluc0FkZEdvbGQpICsgXCJcIjtcbiAgICAgICAgICAgIHRoaXMudWlfZmVuY2hpVGlwLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjM3KTsvL+i0reS5sOS/nemZqVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5NYXhCYW94aWFuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYodGhpcy51aV9zbGlkZXJJbnNBZGQuZW5hYmxlZCA9PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQudmFsdWUgPSB0aGlzLnVpX3NsaWRlckluc0FkZC5tYXg7XG4gICAgICAgICAgICB0aGlzLnNob3dDdXJJbnNBZGQoVUlVdGlsLk51bWJlclRvSW50KHRoaXMudWlfc2xpZGVySW5zQWRkLm1heCkpXG5cbiAgICAgICAgICAgIHRoaXMudWlfZmVuY2hpTnVtVGV4dC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLnpodUluc0FkZEdvbGQgKyB0aGlzLmZlbkluc0FkZEdvbGQpICsgXCJcIjtcbiAgICAgICAgICAgIHRoaXMudWlfZmVuY2hpVGlwLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjM3KTsvL+i0reS5sOS/nemZqVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX3NsaWRlck91dEdvbGQub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgKHNsaWRlcikgPT4ge1xuICAgICAgICAgICAgbGV0IG51bSA9IFVJVXRpbC5OdW1iZXJUb0ludChzbGlkZXIudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51aV9vdXRHb2xkX251bS50ZXh0ID0gbnVtICsgXCJcIjtcbiAgICAgICAgICAgIGxldCBjdXJHb2xkID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLnRhYmxlTG9ja0dvbGQpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvL+WPkemAgeW4puWHuua2iOaBr1xuICAgICAgICB0aGlzLnVpX2J0bk91dEdvbGQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbnVtID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMudWlfc2xpZGVyT3V0R29sZC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVpX291dEdvbGRQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19nb2xkYmFja190ZXgobnVtICogMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2lzQ2FuT3V0R29sZCA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuX2Nsb3NlX291dEdvbGQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX291dEdvbGRQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93SGlzdG9yeSgpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC5TaG93KCk7XG4gICAgICAgIC8vIHRoaXMudWlfYnRuQ29sbGVjdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS54ID0gMTA4MDtcbiAgICAgICAgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBjYy52MigwLCB0aGlzLnVpX2hpc3RvcnlQYW5lbC55KSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfdGhpc3RvcnlfdGV4KCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dIaXN0b3J5X2JpZ2VuZCgpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC5TaG93KCk7XG4gICAgICAgIC8vIHRoaXMudWlfYnRuQ29sbGVjdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS54ID0gMTA4MDtcbiAgICAgICAgdGhpcy51aV9oaXN0b3J5UGFuZWwubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCBjYy52MigwLCB0aGlzLnVpX2hpc3RvcnlQYW5lbC55KSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfcm9vbWhpc3RvcnlfdGV4KCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dBbmNob3JDY2FyZHNUaXAoaXNTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudWlfdmVkaW9DY2FyZFRpcC52aXNpYmxlID0gaXNTaG93O1xuICAgIH1cblxuICAgIHByaXZhdGUgU2V0QnV0dG9uRW5hYmxlKGJ0bjogZmd1aS5HQnV0dG9uLCBpc0VuYWJsZTogYm9vbGVhbiwgYnRuQ29sb3I6IGNjLkNvbG9yID0gbnVsbCwgdHh0Q29sb3I6IGNjLkNvbG9yID0gbnVsbCkge1xuICAgICAgICBidG4uZW5hYmxlZCA9IGlzRW5hYmxlO1xuICAgICAgICBsZXQgX2ltZzogZmd1aS5HSW1hZ2UgPSBidG4uZ2V0Q2hpbGQoXCJJbWFnZVwiKS5hc0ltYWdlO1xuICAgICAgICBpZiAoX2ltZyA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gYnRuQ29sb3IgPT0gbnVsbCA/IGNjLkNvbG9yLldISVRFIDogYnRuQ29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG4uX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBidG4uX2NoaWxkcmVuWzFdLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmNvbG9yID0gdHh0Q29sb3IgPT0gbnVsbCA/IGNjLkNvbG9yLldISVRFIDogdHh0Q29sb3I7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNzX2RlbGF5X3RleCgpIHtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZGVsYXlfdGV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2RlbGF5X3RleChkYXRhOiBzY19kZWxheV90ZXgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzY19kZWxheV90ZXhfbihkYXRhOiBzY19kZWxheV90ZXhfbikge1xuICAgICAgICAvL+mHjeaWsOWIt+aWsOaXtumXtCzkuLrkuobkv53mjIHot5/lhbbku5bnjqnlrrbliIbniYzlgJLorqHml7bkuIDoh7TvvIzlkIzml7bkvb/nlKjpgJrnn6XmnaXmm7TmlrDml7bpl7QgICAgXG4gICAgICAgIHRoaXMuX2JmdGFibGUudXNlckxpc3QuZm9yRWFjaCh0ZW1wVXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcFVzZXIgPT0gbnVsbCB8fCB0ZW1wVXNlci5wbGF5ZXIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvL+avj+aWsOeahOS4gOWbnuWQiCzov5jljp/njqnlrrYs5aSnLOaVsuetieaTjeS9nOeKtuaAgVxuICAgICAgICAgICAgaWYgKHRlbXBVc2VyLnBsYXllci51c2VyaWQgPT0gZGF0YS5Vc2VySUQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5fbXNnaWQgPD0gMCAmJiB0ZW1wVXNlci5zZWxmKS8vaXNSZUJhY2soKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/oh6rlt7Hlm57lkIjvvIzopoHmmL7npLrmnI3liqHlmajoh6rlt7Hlm57lkIjml7bpl7RcbiAgICAgICAgICAgICAgICAgICAgdGVtcFVzZXIuc2hvd0RlbGF5KHRoaXMubW9kZWwubGVmdHRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRlbXBVc2VyLnNob3dEZWxheShkYXRhLnRpbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBVc2VyLnNlbGYpLy/lpoLmnpzmmK/oh6rlt7HopoHliLfmlrDmrKHmlbBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZGVsYXlUaW1lID0gZGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheUNvdW50ID0gZGF0YS5kZWxheXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvd0RlbGF5KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRBdXRvR2FtYmxlKGlzQXV0bzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzQXV0b0ZvbGxvdyA9IGlzQXV0bztcbiAgICAgICAgdGhpcy51aV90eHRBdXRvRm9sbG93LnRleHQgPSBpc0F1dG8gPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzkzKSA6IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMzMpOy8v5Y+W5raIIOiHquWKqC8vbueci+eJjFxuICAgIH1cblxuICAgIHByaXZhdGUgU2V0QXV0b1FpUGFpKGlzQXV0bzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzQXV0b1FpUGFpID0gaXNBdXRvO1xuICAgICAgICB0aGlzLnVpX3R4dEF1dG9RaVBhaS50ZXh0ID0gaXNBdXRvID8gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM5MykgOiBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMjk0KTsvL+WPlua2iCDoh6rliqhcXG7orqkv5LiiXG4gICAgfVxuXG4gICAgcHVibGljIEF1dG9HYW1ibGVHb2xkKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F1dG9Gb2xsb3cpIHtcbiAgICAgICAgICAgIHRoaXMuR2FtYmxlTXVsdGlwbGUoMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgQXV0b1FpUGFpKCkge1xuICAgICAgICBpZiAodGhpcy5pc0F1dG9RaVBhaSkge1xuICAgICAgICAgICAgbGV0IGlzQ2FuWGl1ID0gKHRoaXMubW9kZWwuX21pbmdhbWJsZSA8PSAwICYmIHRoaXMubW9kZWwuX2VtYXhnIDw9IDApO1xuICAgICAgICAgICAgaWYgKGlzQ2FuWGl1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1ibGVYaXUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZ2l2ZXVwX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBBdXRvR2FtYmxlKF9zZWxlY3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5BdXRvR2FtYmxlR29sZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhclRhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5jbHViaWQgPiAwICYmIHRoaXMubW9kZWwuSXNTdXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0TW9uZXkudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5tb2RlbC5jZ29sZCkgKyBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV90eHRNb25leS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwuZ29sZCkgKyBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX1N0YXR1c01hbmFnZXIuZ2V0Q29udHJvbGxlcihcImNvbW1vbmNhcmQ0XCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDVcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgdGhpcy51aV9jdXJUZXhhc3R5cGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2phY2twb3RwYXJhbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2luc2phY2twb3RwYXJhbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1ckNvbW1vbmRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0ID0gW107XG5cbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQgPSBbXTtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX09wZW5Db3VudCA9IDI7XG4gICAgICAgIHRoaXMuUmV0c2V0UGxheWVyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aV9jaGlwcG9vbHJvb3QuYXNDb20uX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2NoaXBwb29scm9vdC5hc0NvbS5fY2hpbGRyZW5baV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NoaXBwb29sTGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaXBwb29sTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGlwcG9vbExpc3RbaV0gIT0gbnVsbCkgdGhpcy5fY2hpcHBvb2xMaXN0W2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2hpcHBvb2xMaXN0ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWNoaSA9IDA7XG4gICAgICAgIHRoaXMudWlfdHh0QWxsLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVpX2xhc3R0eHRBbGwudGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLkNoaXBSZWNvcmRMaXN0ICE9IG51bGwpIHRoaXMuQ2hpcFJlY29yZExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd0NhcmRzRm9yY2Uob3RoZXJjYXJkOiBDb21tb25Qb3NWYWxMaXN0U0RbXSkge1xuICAgICAgICBvdGhlcmNhcmQuZm9yRWFjaChfc2hvdXBhaSA9PiB7XG4gICAgICAgICAgICBsZXQgd2luZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChfc2hvdXBhaS5wb3MpO1xuICAgICAgICAgICAgaWYgKHdpbmVyID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgd2luZXIuU2hvd0NhcmQoX3Nob3VwYWkudmFsbGlzdCk7IC8v57uT566X6ZyA6KaB5omA5pyJ5Lq66IO955yL5Yiw5omL54mM5LqGXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOafpeeci+S9meeJjOWQjuaYvuekuuaJgOacieeahOWFrOeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FyZFwiPjwvcGFyYW0+XG4gICAgcHVibGljIFNob3dSZXN0Q29tbW9uQ2FyZHMoY2FyZHM6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMubW9kZWwuY2xpY2tudW0gKz0gMTtcbiAgICAgICAgdGhpcy5jdXJDb21tb25kQ2FyZHMgPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0aGlzLmN1ckNvbW1vbmRDYXJkcywgY2FyZHMpO1xuICAgICAgICBpZiAodGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3RlbXBDYXJkID0gdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENoaWxkKFwiQ29tbW9uQ2FyZFwiICsgKGkgKyAxKSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBfdGVtcENhcmQubm9kZS5nZXRDb21wb25lbnQoQ2FyZFJlZGJldENvbXApO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZCA9IF90ZW1wQ2FyZC5ub2RlLmFkZENvbXBvbmVudChDYXJkUmVkYmV0Q29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuZmd1aUNvbXBvbmVudCA9IF90ZW1wQ2FyZC5hc0NvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FyZC5Jbml0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0LnB1c2goY2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uUmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uSGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubW92ZU4xdG9OMih0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLm5vZGUsIHRoaXMuY2NfcG9zW2ldLm5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5TZXRWYWwoY2FyZHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5TaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TaG93U2VsZk1heENhcmRzKCk7XG5cbiAgICAgICAgdGhpcy5pc0NhblNlZUxlZnRDYXJkcyA9IHRoaXMuX2JmdGFibGUubXlVc2VyLnNlcnZlcnBvcyA+IDAgJiYgdGhpcy5tb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPCA1OyAvL+afpeeci+WJqeS9meWFrOeJjCAgICBcbiAgICAgICAgbGV0IGlzU2hvdyA9IHRoaXMuX2JmdGFibGUubXlVc2VyLnNlcnZlcnBvcyA+IDAgJiYgIXRoaXMuSXNTZWxmV2F0Y2goKSAmJiAhdGhpcy5Jc1NlbGZXYWl0VG9UYWtlSW4oKTtcbiAgICAgICAgdGhpcy51aV9idG5MZWZ0Q2FyZHMuZ2V0Q2hpbGQoXCJUZXh0XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLmdldExlZnRDYXJkQ29zdCgpO1xuICAgICAgICB0aGlzLnVpX2J0bkxlZnRDYXJkcy52aXNpYmxlID0gKGlzU2hvdyAmJiB0aGlzLmlzQ2FuU2VlTGVmdENhcmRzKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzY2FsYXJBcnJheUVxdWFscyhhcnJheTEsIGFycmF5Mikge1xuICAgICAgICBsZXQgYiA9IGFycmF5MS5sZW5ndGggPT0gYXJyYXkyLmxlbmd0aFxuICAgICAgICBpZiAoYikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkxW2ldICE9IGFycmF5MltpXSkge1xuICAgICAgICAgICAgICAgICAgICBiID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0NhcmRJbmRleDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaXNTZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIFNob3dDb21tb25DYXJkcygpIHtcbiAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkICE9IG51bGwgJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGVtcENhcmQgPSB0aGlzLnVpX1N0YXR1c01hbmFnZXIuZ2V0Q2hpbGQoXCJDb21tb25DYXJkXCIgKyAoaSArIDEpKTsgLy91aV9Db21tb25DYXJkc1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IF90ZW1wQ2FyZC5ub2RlLmdldENvbXBvbmVudChDYXJkUmVkYmV0Q29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQgPSBfdGVtcENhcmQubm9kZS5hZGRDb21wb25lbnQoQ2FyZFJlZGJldENvbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5mZ3VpQ29tcG9uZW50ID0gX3RlbXBDYXJkLmFzQ29tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuSW5pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3QucHVzaChjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDYXJkSW5kZXggPT0gNSkgeyAvLzXlvKDniYzpg73lj5HlrozkuoZcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLlJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uSGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1ckNvbW1vbmRDYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVOMXRvTjIodGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5ub2RlLCB0aGlzLmNjX3Bvc1tpXS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5TZXRWYWwodGhpcy5jdXJDb21tb25kQ2FyZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLlNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93U2VsZk1heENhcmRzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1vbkFuaSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc2NhbGFyQXJyYXlFcXVhbHModGhpcy5jdXJDb21tb25kQ2FyZHMsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkKSkge1xuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uUmVzZXQoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5IaWRlKCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgdGhpcy51aV9Db21tb25DYXJkcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VyQ29tbW9uZENhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubW92ZU4xdG9OMih0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLm5vZGUsIHRoaXMuY2NfcG9zW2ldLm5vZGUpO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLlNldFZhbCh0aGlzLmN1ckNvbW1vbmRDYXJkc1tpXSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uU2hvdygpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICB0aGlzLlNob3dTZWxmTWF4Q2FyZHMoKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93Q29tbW9uQW5pKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX0NvbW1vbkNhcmRzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDRcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDVcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMudWlfY3VyVGV4YXN0eXBlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3VyQ29tbW9uZENhcmRzID0gW107XG4gICAgICAgICAgICB0aGlzLlNob3dTZWxmTWF4Q2FyZHMoKTsvL+ayoeacieWFrOeJjOWPquacieaJi+eJjOeahOaXtuWAmeS5n+imgeWxleekuueJjOWeiyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdzNjYXJkczogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvdzRjYXJkOiBib29sZWFuO1xuICAgIHB1YmxpYyBzaG93NWNhcmQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgc2hvd0NvbW1vbkFuaSgpIHtcbiAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWs54mM5pWw6YeP6ZSZ6K+vID0gXCIgKyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2VuZGluZykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zaG93Q2FyZEluZGV4IDwgMykge1xuICAgICAgICAgICAgLy8g5YmN5LiJ5byg6L+Y5rKh5Y+RXG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5SZWZyZXNoVXNlckN1ckdhbWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnkzKCk7XG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93Q2FyZEluZGV4ID09IDMpIHtcbiAgICAgICAgICAgIC8vIOWPkeesrOWbm+W8oOeJjFxuICAgICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnk0XzUoNCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93Q2FyZEluZGV4ID09IDQpIHtcbiAgICAgICAgICAgIC8vIOWPkeesrOS6lOW8oFxuICAgICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnk0XzUoNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDpg73lj5HlrozkuoZcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPT0gMykgLy/liY3kuInlvKDpppbniYzliqjnlLtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc2hvdzNjYXJkcykge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgLy/lj5HliY3kuInlvKDlhazniYzliY3vvIzlm57mlLbnrbnnoIFcbiAgICAgICAgLy8gICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV9Db21tb25DYXJkcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLlNob3dDb21tb25BbmlCeTMoKTtcbiAgICAgICAgLy8gICAgIH0sIDAuMilcblxuICAgICAgICAvLyB9IFxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICBsZXQgYW5pQ291bnQgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggLSB0aGlzLmN1ckNvbW1vbmRDYXJkcy5sZW5ndGg7XG4gICAgICAgIC8vICAgICBpZiAoYW5pQ291bnQgPD0gMikge1xuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLnNob3czY2FyZHMpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93NGNhcmQgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPT0gNDtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5zaG93NGNhcmQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93NWNhcmQgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPT0gNTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5zaG93NWNhcmQpXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgICAgICAvL+WmguaenOacgOWQjuS4pOW8oOeJjOWQjOaXtuaOqOmAgei/h+adpemcgOimgeS+neasoeWxleekulxuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCJzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzcyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5Db3VudCA9PT09IFwiICsgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQuQ291bnQpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBkZWxheVRpbWUgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggLSB0aGlzLmN1ckNvbW1vbmRDYXJkcy5sZW5ndGggPT0gMiA/IDIgOiAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuU2hvd0NvbW1vbkFuaUJ5NDUoMCwgZGVsYXlUaW1lKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudWlfQ29tbW9uQ2FyZHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2hvdzNjYXJkcykge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3c0Y2FyZCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA9PSA0O1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLnNob3c0Y2FyZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3c1Y2FyZCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA9PSA1O1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLnNob3c1Y2FyZClcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIC8v5aaC5p6c5ZCM5pe25o6o6L+H5p2lNOW8oOaIluiAhTXlvKDlhazniYznmoTml7blgJnpnIDopoHkuIDmrKHlsZXnpLpcbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLkNvdW50ID09PT0gXCIgKyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5Db3VudCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnkzKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnk0NSgxLCAzKTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YmN5LiJ5byg5Yqo55S7LuaAu+aXtumVvzEuNVNcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uQ29tcGxldGVcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBTaG93Q29tbW9uQW5pQnkzKG9uQ29tcGxldGU6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uUmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uSGlkZSgpO1xuICAgICAgICAgICAgaWYgKGkgKyAxID4gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoIHx8IGkgPiAyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEdvID0gdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5ub2RlO1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ2FyZDogQ2FyZFJlZGJldENvbXAgPSB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZU4xdG9OMih0ZW1wR28sIHRoaXMuY2NfcG9zWzBdLm5vZGUpOyAvL3RlbXBHby5wb3NpdGlvbiA9ICB0aGlzLmNjX3Bvc1swXS5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRlbXBHby5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHZhciBjYXJkVmFsdWUgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZFtpXTtcbiAgICAgICAgICAgICAgICB0ZW1wQ2FyZC5TaG93KCk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3czY2FyZHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2FyZC5TZXRWYWwoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBHby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQ2FyZC5UdXJub3ZlcihjYXJkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcENhcmQuU2V0VmFsKDApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMuY29udmVydE5vZGVTcGFjZUFSKHRlbXBHbywgdGhpcy5jY19wb3NbaV0ubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcEdvLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIGNjLnYyKHYueCwgdi55KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcENhcmQuVHVybm92ZXIoY2FyZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDYXJkLlNldFZhbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYyID0gdGhpcy5jb252ZXJ0Tm9kZVNwYWNlQVIodGVtcEdvLCB0aGlzLmNjX3Bvc1tpXS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wR28ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDYXJkLlNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgY2MudjIodjIueCwgdjIueSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDYXJkLlR1cm5vdmVyKGNhcmRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdzNjYXJkcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyQ29tbW9uZENhcmRzID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1ckNvbW1vbmRDYXJkcyA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlICE9IG51bGwpLy/lhazniYzmnKrmkq3lrozkuI3otYvlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZS8v5Y+q5pKt5LiJ5byg55qE5pe25YCZ77yM5pKt5a6M5Yik5pat5piv5ZCm6KaB5pKt5pS+56ys5Zub5LqU5byg54mMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5TaG93Q29tbW9uQW5pQnk0NSgxLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5TaG93U2VsZk1heENhcmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvd1NlbGZNYXhDYXJkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FyZEluZGV4ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21tb25BbmkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCAqIGkpO1xuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dDb21tb25BbmlCeTRfNShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd0NvbW1vbkFuaUJ5NF81ID09PSBcIiwgaW5kZXgpO1xuICAgICAgICBsZXQgaSA9IGluZGV4IC0gMTtcbiAgICAgICAgdmFyIGNhcmRWYWx1ZSA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkW2ldO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dDb21tb25BbmlCeTRfNSAgY2FyZFZhbHVlICA9PT0gXCIsIGNhcmRWYWx1ZSk7XG4gICAgICAgIGlmICghY2FyZFZhbHVlIHx8IGNhcmRWYWx1ZSA8PSAwKSByZXR1cm47XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgICAgIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0uSGlkZSgpO1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLlJlc2V0KCk7XG5cbiAgICAgICAgdmFyIHRlbXBHbyA9IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0ubm9kZTtcbiAgICAgICAgdmFyIHRlbXBDYXJkID0gdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXTtcbiAgICAgICAgdGVtcEdvLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubW92ZU4xdG9OMih0ZW1wR28sIHRoaXMuY2NfcG9zW2ldLm5vZGUpO1xuICAgICAgICB2YXIgdGVtcElkeCA9IGk7XG4gICAgICAgIHRoaXMuc2hvdzRjYXJkID0gaSA9PSAzO1xuICAgICAgICB0aGlzLnNob3c1Y2FyZCA9IGkgPT0gNDtcblxuICAgICAgICB0ZW1wR28uYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgdGVtcEdvLmFuY2hvclkgPSAwLjU7XG4gICAgICAgIHRlbXBHby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c0Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNFwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c0Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNFwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c1Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c1Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNVwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0ZW1wQ2FyZC5TaG93KCk7XG4gICAgICAgICAgICAgICAgdGVtcENhcmQuU2V0VmFsKDApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNrZXdUbygwLjE1LCAwLCAyMCksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRlbXBDYXJkLlNldFZhbChjYXJkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHRlbXBHby5za2V3WSA9IC0yMDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAxLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5za2V3VG8oMC4xNSwgMCwgMClcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVOMXRvTjIodGVtcEdvLCB0aGlzLmNjX3Bvc1t0ZW1wSWR4XS5ub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAodGVtcElkeCA9PSAzKSB0aGlzLnNob3c0Y2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wSWR4ID09IDQpIHRoaXMuc2hvdzVjYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJDb21tb25kQ2FyZHMgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZC5zbGljZSgwLCB0ZW1wSWR4ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93U2VsZk1heENhcmRzKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhcmRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tbW9uQW5pKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOesrOWbm+W8oOesrOS6lOW8oOWFrOeJjOWKqOeUu1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGVsYXlUaW1lXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgU2hvd0NvbW1vbkFuaUJ5NDUoZGVsYXlUaW1lNDogbnVtYmVyLCBkZWxheVRpbWU1OiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY3VyQ29tbW9uZENhcmRzLmxlbmd0aDsgaSA8IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJnZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zID1cIiArIHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0ubm9kZS5nZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zKCkpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV0ubm9kZS5nZXROdW1iZXJPZlJ1bm5pbmdBY3Rpb25zKCkgPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLlJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0W2ldLkhpZGUoKTtcbiAgICAgICAgICAgIGlmIChpICsgMSA+IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEdvID0gdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdFtpXS5ub2RlO1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ2FyZCA9IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3RbaV07XG4gICAgICAgICAgICAgICAgdGVtcENhcmQuU2hvdygpO1xuICAgICAgICAgICAgICAgIHRlbXBHby5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZU4xdG9OMih0ZW1wR28sIHRoaXMuY2NfcG9zW2ldLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRlbXBDYXJkLlNldFZhbCgwKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZFZhbHVlID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmRbaV07XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBJZHggPSBpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdzRjYXJkID0gaSA9PSAzO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvdzVjYXJkID0gaSA9PSA0O1xuXG4gICAgICAgICAgICAgICAgdGVtcEdvLmFuY2hvclggPSAwLjVcbiAgICAgICAgICAgICAgICB0ZW1wR28uYW5jaG9yWSA9IDAuNVxuICAgICAgICAgICAgICAgIHRlbXBHby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c0Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNFwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvdzRjYXJkKSB0aGlzLnVpX1N0YXR1c01hbmFnZXIuZ2V0Q29udHJvbGxlcihcImNvbW1vbmNhcmQ0XCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93NWNhcmQpIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDVcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3c1Y2FyZCkgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNVwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNrZXdUbygwLjE1LCAwLCAyMCksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDYXJkLlNldFZhbChjYXJkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEdvLnNrZXdZID0gLTIwO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2tld1RvKDAuMTUsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTjF0b04yKHRlbXBHbywgdGhpcy5jY19wb3NbdGVtcElkeF0ubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcElkeCA9PSAzKSB0aGlzLnNob3c0Y2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJZHggPT0gNCkgdGhpcy5zaG93NWNhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyQ29tbW9uZENhcmRzID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQuc2xpY2UoMCwgdGVtcElkeCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93U2VsZk1heENhcmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93NWNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlNob3dDb21tb25BbmlCeTQ1KDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0sIChpID09IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3QubGVuZ3RoIC0gMSA/IGRlbGF5VGltZTUgOiBkZWxheVRpbWU0KSAqIDEwMDApO1xuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmL7npLroh6rlt7HmnIDlpKfniYzlnovvvIzlhbbku5bnmoTniYzlj5jngbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBTaG93U2VsZk1heENhcmRzKCkge1xuICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXkgPT0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzbXl0dXJuKSByZXR1cm47Ly/lu7bml7bnnIvniYzml7blgJnlj5HniYznu5PmnZ/lubbkuJTliLDov4foh6rlt7HnmoTlm57lkIjmiY3og73mmL7npLrniYzlnosgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RGaXZlQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godGVtcFVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHRlbXBVc2VyID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy/oh6rlt7HlvIPniYzlm57moYzlkI7ku43lnKhwbGF5aW5n6YeM6Z2i77yM5omA5Lul6ZyA6KaB5Yik5pat5piv5ZCm56a75qGM54q25oCB77yM56a75qGM54q25oCB5bCx5LiN5pi+56S65bqV54mM5ZKM54mM5Z6LJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNHYW1pbmdcbiAgICAgICAgICAgIGlmICh0ZW1wVXNlci5zZWxmICYmICF0ZW1wVXNlci5Jc1dhdGNoKCkgJiYgdGVtcFVzZXIuSXNQbGF5aW5nKCkgJiYgIXRlbXBVc2VyLklzS2VlcCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1vZGVsLl9TaG91UGFpID09IFwiLCB0aGlzLm1vZGVsLl9TaG91UGFpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VyQ29tbW9uZENhcmRzID09IFwiLCB0aGlzLmN1ckNvbW1vbmRDYXJkcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGaXZlQ2FyZHMgPSBUZXhhcy5HZXRGaXZlRnJvbVNldmVuKHRoaXMubW9kZWwuX1Nob3VQYWksIHRoaXMuY3VyQ29tbW9uZENhcmRzLCB0aGlzLm1vZGVsLl9TaG91UGFpLmxlbmd0aCArIHRoaXMuY3VyQ29tbW9uZENhcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RGaXZlQ2FyZHM9XCIgKyB0aGlzLnNlbGVjdEZpdmVDYXJkcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Rml2ZUNhcmRzLmxlbmd0aCA+PSAyKS8v5LmL5YmN5pivNeW8oOaYvuekuueJjOWei++8jOeOsOWcqOaYr+WPkTLlvKDniYzlkI7lsLHopoHmmL7npLroh6rlt7HnmoTniYzlnosgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heENhcmRzID0gVGV4YXMuR2V0TWF4VHlwZUNhcmRzKHRoaXMuc2VsZWN0Rml2ZUNhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFVzZXIuU2hvd01heENhcmRzKHRoaXMuc2VsZWN0Rml2ZUNhcmRzLCB0aGlzLm1heENhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tbW9uTWF4Q2FyZHModGhpcy5tYXhDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfY3VyVGV4YXN0eXBlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3R5cGUgPSBUZXhhcy5HZXRUZXhhc1R5cGUodGhpcy5zZWxlY3RGaXZlQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RGaXZlQ2FyZHMubGVuZ3RoID09IDIpLy/kuKTlvKDmiYvniYznmoTml7blgJnniYzlnovlj6rmmL7npLrpq5jniYzlkozkuIDlr7lcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90eXBlID09IFBva2VyVGV4YXNUeXBlLkZpdmVfT05FX1BBSVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGN1cnRleGFzdHlwZS50ZXh0ID0gVGV4YXMuR2V0TmFtZUJ5VHlwZShfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGN1cnRleGFzdHlwZS50ZXh0ID0gVGV4YXMuR2V0TmFtZUJ5VHlwZShQb2tlclRleGFzVHlwZS5GaXZlX1NpbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGN1cnRleGFzdHlwZS50ZXh0ID0gVGV4YXMuR2V0TmFtZUJ5VHlwZShfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0NvbW1vbk1heENhcmRzKG1heENhcmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9Db21tb25DYXJkSW1hZ2VMaXN0LmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RGaXZlQ2FyZHMuaW5kZXhPZih0ZW1wLlZhbHVlKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRlbXAuU2V0Q29sb3JHYXJ5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wLlJlc2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcC5TaG93TWF4Q2FyZEJnKG1heENhcmRzLmluZGV4T2YodGVtcC5WYWx1ZSkgPj0gMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiOt+WPluS4i+S4gOS4quepuuS9jVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgR2V0TmV4dEVtcHR5UG9zKCk6IFRleGFzVXNlckNvbXAge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDojrflj5bmiYDmnInkvY3nva5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHVibGljIEdldEFsbFBvcygpOiBUZXhhc1VzZXJDb21wW10ge1xuICAgICAgICBsZXQgbGlzdDogVGV4YXNVc2VyQ29tcFtdID0gW107XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBwdWJsaWMgSXNTaG93TXlBY3Rpb24oaXNTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudWlfYnRucy52aXNpYmxlID0gaXNTaG93O1xuICAgICAgICB0aGlzLnVpX3NlbGZFbmR0aW1ldGlwcy52aXNpYmxlID0gKHRoaXMudWlfYnRucy52aXNpYmxlICYmIHRoaXMudWlfYnRucWlwYWkudmlzaWJsZSk7XG4gICAgICAgIHRoaXMuU2hvd0RlbGF5KHRoaXMudWlfc2VsZkVuZHRpbWV0aXBzLnZpc2libGUpO1xuICAgIH1cbiAgICBwdWJsaWMgTWluZUV4ZWN1dGUoX2lzTWluZTogYm9vbGVhbiwgdHVybkNoYW5nZTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PeaYr+WQpuiHquW3seWbnuWQiD09XCIgKyBfaXNNaW5lKVxuICAgICAgICBpZiAoX2lzTWluZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJc0NhbkhhbmRsZUFjdGlvbiA9PT0gXCIsIHRoaXMuSXNDYW5IYW5kbGVBY3Rpb24oKSlcbiAgICAgICAgICAgIGlmICh0aGlzLklzQ2FuSGFuZGxlQWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG9RaVBhaSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dBY3Rpb25CdG5zKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdXRvUWlQYWkoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEF1dG9HYW1ibGUoIXRoaXMuaXNBdXRvUWlQYWkpOy8v6Ieq5Yqo6K6pL+S4ouS4gOasoeWQjuWPlua2iOiHquWKqOiuqS/kuKJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRBdXRvUWlQYWkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzQXV0b0ZvbGxvdyAmJiB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpIDw9IDApIC8v6Ieq5Yqo55yL54mMXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dBY3Rpb25CdG5zKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdXRvR2FtYmxlR29sZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0QXV0b0dhbWJsZSghdGhpcy5pc0F1dG9Gb2xsb3cpOy8v6Ieq5Yqo6Lef54mM5LiA5qyh5ZCO5Y+W5raI6Ieq5Yqo6Lef54mMXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0QXV0b1FpUGFpKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0QXV0b0dhbWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0QXV0b1FpUGFpKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZnRhYmxlLm15VXNlci5TZXRMYXN0U2l0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5Q29tcCkgdGhpcy5oaXN0b3J5Q29tcC5IaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheShcIlwiLCBcImdhbWVfbXl0dXJuXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1vZGVsLmluc0xpc3QzMSA9IFwiLCB0aGlzLm1vZGVsLmluc0xpc3QzMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5tb2RlbC5pbnNMaXN0MzIgPSBcIiwgdGhpcy5tb2RlbC5pbnNMaXN0MzIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW9kZWwuaW5zTGlzdDMxICYmICF0aGlzLm1vZGVsLmluc0xpc3QzMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVBY3Rpb25CdG5zRm9yU2VsZlR1cm4odHVybkNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93RGVsYXkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxldCBpc1Nob3dDYXJkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMubW9kZWwuZGVsYXkgPT0gMSAmJiAhdGhpcy5pc215dHVybikge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmlzbXl0dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICBpc1Nob3dDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gaWYgKGlzU2hvd0NhcmQpLy/lu7bml7bnnIvniYznmoTml7blgJnmiY3mmL7npLroh6rlt7HnmoTmiYvniYzvvIzkuI3mmK/oh6rlt7HmiY3mmK/liLDoh6rlt7Hlm57lkIjog73nnIvliLDmiYvniYxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgbGV0IF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUudXNlckxpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0uc2VsZiA9PSB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIgIT0gbnVsbCAmJiBfdGVtcFVzZXIucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLl9TaG91UGFpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9wb2tlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RlbXBVc2VyLnNlbGYpIF9wb2tlciA9IHRoaXMubW9kZWwuX1Nob3VQYWlbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZDogQ2FyZFJlZGJldENvbXAgPSBfdGVtcFVzZXIuR2V0Q2FyZChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZCA9PSBudWxsKSB7IGNvbnNvbGUubG9nKFwiZmV0YWwgZXJyb3I6IFNlbmRDYXJkIGlzIG51bGxcIik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMjIyMjIyMjIyPT09PVwiLCBfcG9rZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RlbXBVc2VyLlNldENhcmRWYWxfcHViKGNhcmQsIF9wb2tlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLklzU2hvd015QWN0aW9uKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvL+ihpeS4gSDkv67mlLnlj5HlrozniYzliLDoh6rlt7Hmk43kvZznmoTml7blgJnmnInmk43kvZzpnaLmnb/kvYbmmK/msqHmmL7npLrpppbniYxidWdcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy51aV9idG5zLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUudXNlckxpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0uc2VsZiA9PSB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoX3RlbXBVc2VyICE9IG51bGwgJiYgX3RlbXBVc2VyLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kZWwuX1Nob3VQYWkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBfcG9rZXIgPSB0aGlzLm1vZGVsLl9TaG91UGFpW2ldO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBjYXJkOiBDYXJkUmVkYmV0Q29tcCA9IF90ZW1wVXNlci5HZXRDYXJkKGluZGV4KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoY2FyZCA9PSBudWxsKSB7IGNvbnNvbGUubG9nKFwiZmV0YWwgZXJyb3I6IFNlbmRDYXJkIGlzIG51bGxcIik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMzMzMzMzMzM9PT09XCIsIF9wb2tlcik7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgX3RlbXBVc2VyLlNldENhcmRWYWxfcHViKGNhcmQsIF9wb2tlcik7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLklzU2VsZldhdGNoKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiHquW3seaYr+inguS8lyDkuI3og73lpITnkIbmiZPniYzmk43kvZxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5Jc1NlbGZXYWl0VG9UYWtlSW4oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Ieq5bex5piv5Y2g5bqn5LitIOS4jeiDveWkhOeQhuaJk+eJjOaTjeS9nFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuV2FpdCgpOyAvL+makOiXj+eVjOmdouimgeWFiOaJp+ihjFxuICAgICAgICAgICAgLy/oh6rlt7HlnKjnjqnml7Ys5LiN5piv6Ieq5bex55qE5Zue5ZCI5pe2LOW6lOivpeaYvuekuui+heWKqeaMiemSrlxuICAgICAgICAgICAgaWYgKHRoaXMuSXNDYW5IYW5kbGVBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlQWN0aW9uQnRuc0Zvck90aGVyVHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIE1pbmVJbnN1cmFuY2VFeGVjdXRlKF9pc01pbmU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKF9pc01pbmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLklzQ2FuSGFuZGxlQWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZnRhYmxlLm15VXNlci5TZXRMYXN0U2l0ZSgpO1xuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheShcIlwiLCBcImdhbWVfbXl0dXJuXCIpO1xuICAgICAgICAgICAgICAgIC8v5bu25pe26Ziy5q2i5Y+R54mM5pyq5a6M5oiQXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGVJbnN1cmFuY2VCdG5zRm9yU2VsZlR1cm4oKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5hZGRUaW1lck5vQ2FsbGJhY2sodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93RGVsYXkodHJ1ZSk7Ly/kv53pmanmqKHlvI/kuZ/opoHlvIDlkK/lu7bml7ZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLklzU2VsZldhdGNoKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiHquW3seaYr+inguS8lyDkuI3og73lpITnkIbmiZPniYzmk43kvZxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5Jc1NlbGZXYWl0VG9UYWtlSW4oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Ieq5bex5piv5Y2g5bqn5LitIOS4jeiDveWkhOeQhuaJk+eJjOaTjeS9nFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dEZWxheShpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51aV9kZWxheUFkZC52aXNpYmxlID0gKGlzU2hvdyAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheUNvdW50IDwgNSk7Ly/lu7bml7blip/og73kuI3pmZDliLbmrKHmlbAs546w5Zyo5L+u5pS55Li65Y2V5bGA5LiK6ZmQ5pivNeasoVxuICAgICAgICB0aGlzLnVpX2luc0RlbGF5QWRkLnZpc2libGUgPSAoaXNTaG93ICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmRlbGF5Q291bnQgPCA1KTsvL+W7tuaXtuWKn+iDveS4jemZkOWItuasoeaVsCznjrDlnKjkv67mlLnkuLrljZXlsYDkuIrpmZDmmK815qyhXG4gICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgIGxldCBkZWxheUNvc3QgPSB0aGlzLnVpX2RlbGF5QWRkLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgIGxldCBleHBlbmQ6IHN0cmluZyA9IHRoaXMuZ2V0RGVsYXlFeHBlbmQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhwZW5kID09PSBcIiwgZXhwZW5kKTtcbiAgICAgICAgICAgIC8vIGRlbGF5Q29zdC50ZXh0ID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXlDb3VudCA9PSAtMSA/IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIxODEpIDogKDIwLjAgKiAoVUlVdGlsLk51bWJlclRvSW50KE1hdGgucG93KDIsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmRlbGF5Q291bnQpKSkpLnRvU3RyaW5nKCk7Ly8tMeaXtuWAmeaYr+esrOS4gOasoeW7tuaXtuWFjei0uVxuICAgICAgICAgICAgZGVsYXlDb3N0LnRleHQgPSBleHBlbmQ7XG4gICAgICAgICAgICB0aGlzLnVpX0luc0RlbGF5R29sZC50ZXh0ID0gZGVsYXlDb3N0LnRleHQ7XG4gICAgICAgICAgICB0aGlzLnVpX0luc0NudERvd24udGV4dCA9IFwiKzE1c1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6K6h566X5bu25pe25raI6ICXXG4gICAgcHVibGljIGdldERlbGF5RXhwZW5kKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBleHBlbmQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZGVsYXlDb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjE4MSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1vZGVsLmJyYXRlID09IFwiLCB0aGlzLm1vZGVsLmJyYXRlKTtcbiAgICAgICAgbGV0IGJyYXRlID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJyYXRlKTtcbiAgICAgICAgaWYgKGJyYXRlIDwgMSkgeyAvL+W+rlxuICAgICAgICAgICAgZXhwZW5kID0gMjA7XG4gICAgICAgIH0gZWxzZSBpZiAoYnJhdGUgPT0gMSB8fCBicmF0ZSA9PSAyIHx8IGJyYXRlID09IDUpIHsvL+Wwj1xuICAgICAgICAgICAgZXhwZW5kID0gMjAwO1xuICAgICAgICB9IGVsc2UgaWYgKGJyYXRlID09IDEwIHx8IGJyYXRlID09IDI1IHx8IGJyYXRlID09IDUwKSB7Ly/kuK1cbiAgICAgICAgICAgIGV4cGVuZCA9IDUwMDtcbiAgICAgICAgfSBlbHNlIGlmIChicmF0ZSA9PSAxMDAgfHwgYnJhdGUgPT0gMjAwIHx8IGJyYXRlID09IDUwMCkgey8v5aSnXG4gICAgICAgICAgICBleHBlbmQgPSAxMDAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBleHBlbmRTdHI6IHN0cmluZyA9IChVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGV4cGVuZCkgKiAoVUlVdGlsLk51bWJlclRvSW50KE1hdGgucG93KDIsIGNvdW50KSkpKS50b0ZpeGVkKDIpO1xuICAgICAgICByZXR1cm4gZXhwZW5kU3RyO1xuICAgIH1cblxuICAgIHB1YmxpYyBXYWl0KCkge1xuICAgICAgICB0aGlzLlNob3dEZWxheShmYWxzZSk7XG4gICAgICAgIHRoaXMuaGlkZVVJQWxsQnRucygpO1xuICAgIH1cbiAgICBwcml2YXRlIGhpZGVVSUFsbEJ0bnMoKSB7XG4gICAgICAgIHRoaXMuU2hvd0NvbmZpcm1IYW5kbGVQYW5lbChmYWxzZSk7XG4gICAgICAgIHRoaXMuU2hvd0FjdGlvbkJ0bnMoZmFsc2UpO1xuICAgICAgICB0aGlzLlN0b3BDbG9jaygpO1xuICAgICAgICBpZiAodGhpcy5Jc0NhbkhhbmRsZUFjdGlvbigpICYmICF0aGlzLm1vZGVsLmlzaW5zdXJhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLlNob3dBY3Rpb25BdXRvKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5DaGVja0J0bkJhY2tUYWJsZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuQWN0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgdGltZVVwSWQ6IGFueTtcbiAgICAvL+iHquW3seaTjeS9nOaYvuekuuWAkuiuoeaXtlxuICAgIHB1YmxpYyBTaG93Q2xvY2soY2RUaW1lID0gMTUsIHRvdGFsVGltZSA9IDE1LCBpc1Nob3dUZXh0ID0gdHJ1ZSwgZm9ybWF0VGltZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5pc2luc3VyYW5jZSlcbiAgICAgICAgICAgIGZvcm1hdFRpbWUgPSBcIlwiOy8v5pS+5byDXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZvcm1hdFRpbWUgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzk1KSArIFwiXFxuXCI7Ly/lvIPniYxcbiAgICAgICAgbGV0IGNkID0gY2RUaW1lO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBVSVV0aWwuTnVtYmVyVG9JbnQoY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwKSArIGNkVGltZTtcbiAgICAgICAgdGhpcy51aV9zZWxmRW5kdGltZXRpcHMuZmlsbEFtb3VudCA9IGNkIC8gdG90YWxUaW1lICsgMC4wMTtcbiAgICAgICAgdGhpcy5zaG93VUlDb3VudFRpbWVUZXh0KGlzU2hvd1RleHQsIGNkLCBmb3JtYXRUaW1lKTtcbiAgICAgICAgdGhpcy51aV9zZWxmRW5kdGltZXRpcHMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnVpX3NlbGZFbmR0aW1ldGlwcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIC8vIHRoaXMudWlfc2VsZkVuZHRpbWV0aXBzLkRPRmlsbEFtb3VudCAoMCwgY2QpLlNldEVhc2UgKEVhc2UuTGluZWFyKTtcbiAgICAgICAgaWYgKGNkID4gNSkgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zdG9wRWZmZWN0KFwidGV4YXNfdGltZW91dFwiKTsvL+WmguaenOWAkuiuoeaXtj4156eS5Y+W5raINeenkuaPkOekuuivremfs1xuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIGNkID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMuZW5kVGltZSAtIFVJVXRpbC5OdW1iZXJUb0ludChjYy5kaXJlY3Rvci5nZXRUb3RhbFRpbWUoKSAvIDEwMDApKTtcbiAgICAgICAgICAgIGlmIChpc1Nob3dUZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdFRpbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3NlbGZFbmR0aW1ldGlwc1RleHQudGV4dCA9IGNkICsgXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2VsZkVuZHRpbWV0aXBzVGV4dC50ZXh0ID0gZm9ybWF0VGltZSArIGNkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5YCS6K6h5pe25Li6Ne+8jOaSreaUvuitpuWRilxuICAgICAgICAgICAgaWYgKGNkID09IDUpIHtcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJ0ZXhhc190aW1lb3V0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDEsIGNkKVxuICAgIH1cbiAgICAvL+WxleekuuWAkuiuoeaXtlxuICAgIHByaXZhdGUgc2hvd1VJQ291bnRUaW1lVGV4dChpc1Nob3cgPSB0cnVlLCB0aW1lID0gMTUsIGZvcm1hdFRpbWUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudWlfc2VsZkVuZHRpbWV0aXBzLnZpc2libGUgPSAoaXNTaG93ICYmICgodGhpcy51aV9idG5zLnZpc2libGUgJiYgdGhpcy51aV9idG5xaXBhaS52aXNpYmxlKSB8fCB0aGlzLnVpX0J0bkluc3VyYW5jZVBhbmVsLnZpc2libGUpKTtcbiAgICAgICAgaWYgKGlzU2hvdyAmJiB0aW1lICE9IC05OTk5KSB7XG4gICAgICAgICAgICB0aGlzLnVpX3NlbGZFbmR0aW1ldGlwc1RleHQudGV4dCA9IGZvcm1hdFRpbWUgKyBcIlwiIC8vc3RyaW5nLkZvcm1hdCAoZm9ybWF0VGltZSwgdGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFN0b3BDbG9jayhpc0ZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5yZW1vdmVTb3VuZCh0aW1lVXBJZCk7XG4gICAgICAgIHRoaXMudWlfc2VsZkVuZHRpbWV0aXBzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgLy8gdGhpcy51aV9zZWxmRW5kdGltZXRpcHMudHJhbnNmb3JtLkRPS2lsbCAoKTtcbiAgICAgICAgdGhpcy5zaG93VUlDb3VudFRpbWVUZXh0KGZhbHNlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB0dXJuSW50ZXJ2YWw6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudEludGVydmFsOiBudW1iZXIgPSAwLjA1O1xuICAgIHByaXZhdGUgdXNlckludGVydmFsOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIF9jYXJkTnVtOiBudW1iZXIgPSAyO1xuXG4gICAgLy8g5Y+R54mMIFxuICAgIC8vIHB1YmxpYyBGYVBhaV9uKF9teUNhcmRzOiBudW1iZXJbXSkge1xuICAgIC8vICAgICBsZXQgX3RlbXBVc2VyTGlzdDogVGV4YXNVc2VyQ29tcFtdID0gdGhpcy5fYmZ0YWJsZS51c2VyTGlzdDtcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBGX1RleGFzVmlldy5fY2FyZE51bTsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgY2FlY2hjb3V0ID0gMDtcbiAgICAvLyAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX3RlbXBVc2VyTGlzdC5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSBfdGVtcFVzZXJMaXN0W2pdO1xuICAgIC8vICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIucGxheWVyID09IG51bGwpIGNvbnRpbnVlO1xuICAgIC8vICAgICAgICAgICAgIGNhZWNoY291dCsrO1xuICAgIC8vICAgICAgICAgICAgIGxldCBpbmRleCA9IGk7XG4gICAgLy8gICAgICAgICAgICAgbGV0IF9wb2tlciA9IDA7XG4gICAgLy8gICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5zZWxmKSBfcG9rZXIgPSBfbXlDYXJkc1tpXTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIF90ZW1wVXNlci5TZW5kQ2FyZChpbmRleCwgX3Bva2VyKTtcbiAgICAvLyAgICAgICAgICAgICB9LCBpICogMC4yICsgY2FlY2hjb3V0ICogMC4xKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyBwdWJsaWMgRmFQYWlfbmIoX215Q2FyZHM6IG51bWJlcltdLCBpc0FuaW06IGJvb2xlYW4pIHtcbiAgICAvLyAgICAgaWYgKCF0aGlzLm1vZGVsLmlzR2FtaW5nKSB7IHJldHVybjsgfVxuICAgIC8vICAgICBpZiAodGhpcy5tb2RlbC5QbGF5aW5nVXNlcnMgPT0gbnVsbCB8fCB0aGlzLm1vZGVsLlBsYXlpbmdVc2Vycy5sZW5ndGggPD0gMCkgeyByZXR1cm47IH0gLy/lvZPliY3msqHmnInlnKjmuLjmiI/njqnlrrYgXG4gICAgLy8gICAgIC8vX215Q2FyZHMg5Li656m6IOihqOekuuiHquW3seaYr+inguS8l++8jOS4jeS8muWPkeaJi+eJjO+8jOS9huaYr++8jOmcgOimgeWkhOeQhuWKqOeUu1xuICAgIC8vICAgICBsZXQgY291bnQgPSAwO1xuICAgIC8vICAgICBsZXQgX3RlbXBVc2VyTGlzdDogVGV4YXNVc2VyQ29tcFtdID0gdGhpcy5fYmZ0YWJsZS51c2VyTGlzdDtcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBGX1RleGFzVmlldy5fY2FyZE51bTsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgdXNlckluZGV4ID0gMDtcbiAgICAvLyAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5tb2RlbC5QbGF5aW5nVXNlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICAgICAgICBsZXQgcGxheWluZ1VzZXI6IENvbW1vblBvc1ZhbFNEID0gdGhpcy5tb2RlbC5QbGF5aW5nVXNlcnNbal07XG4gICAgLy8gICAgICAgICAgICAgaWYgKHBsYXlpbmdVc2VyLnZhbCA8PSAwKVxuICAgIC8vICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy/njqnlrrbkuIvms6jlgLzlsI/kuo7nrYnkuo4wXG4gICAgLy8gICAgICAgICAgICAgbGV0IF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHBsYXlpbmdVc2VyLnBvcyk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAoX3RlbXBVc2VyID09IG51bGwgfHwgX3RlbXBVc2VyLnBsYXllciA9PSBudWxsKSBjb250aW51ZTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoX3RlbXBVc2VyLmN1ckNhcmRJbmRleCA+PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgLy8gICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5Jc1dhdGNoKCkgfHwgX3RlbXBVc2VyLklzV2FpdFRvVGFrZUluKCkpIHsgY29udGludWU7IH1cbiAgICAvLyAgICAgICAgICAgICBpZiAoX3RlbXBVc2VyLnVzZXJDb25uZWN0U3RhdGUgPT0gVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdCkgeyBjb250aW51ZTsgfVxuICAgIC8vICAgICAgICAgICAgIHVzZXJJbmRleCsrO1xuICAgIC8vICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgLy8gICAgICAgICAgICAgbGV0IGluZGV4ID0gaTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgX3Bva2VyID0gMDtcbiAgICAvLyAgICAgICAgICAgICBpZiAoX3RlbXBVc2VyLnNlbGYgJiYgX215Q2FyZHMgIT0gbnVsbCAmJiBpIDwgX215Q2FyZHMubGVuZ3RoKSBfcG9rZXIgPSBfbXlDYXJkc1tpXTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgZGVsYXkgPSBpc0FuaW0gPyBjb3VudCAqIHRoaXMuY291bnRJbnRlcnZhbCArIHVzZXJJbmRleCAqIHRoaXMudXNlckludGVydmFsIDogMDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLlNlbmRVc2VyQ2FyZChfdGVtcFVzZXIsIGRlbGF5LCBpbmRleCwgX3Bva2VyLCBudWxsLCBmYWxzZSk7XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInBsYXlpbmdVc2VyLnBvcyA9IFwiKyBfdGVtcFVzZXIuc2VydmVycG9zKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNlbmRDYXJkQW5pW190ZW1wVXNlci5zZXJ2ZXJwb3NdLnZpc2libGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIC8vIHRoaXMudWlfVXNlck1hbmFnZXIuZ2V0Q29udHJvbGxlcihcInNlbmRDYXJkXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgLy8gICAgIC8vIHRoaXMudWlfVXNlck1hbmFnZXIuZ2V0Q29udHJvbGxlcihcInNlbmRDYXJkXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XG5cbiAgICAvLyAgICAgaWYgKGlzQW5pbSlcbiAgICAvLyAgICAgICAgIHRoaXMuUGxheVNlbmRDYXJkQXVkaW8oY291bnQpO1xuICAgIC8vIH1cbiAgICBwdWJsaWMgRmFQYWlfbmIoX215Q2FyZHM6IG51bWJlcltdLCBpc0FuaW06IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vZGVsLmlzR2FtaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy5tb2RlbC5QbGF5aW5nVXNlcnMgPT0gbnVsbCB8fCB0aGlzLm1vZGVsLlBsYXlpbmdVc2Vycy5sZW5ndGggPD0gMCkgeyByZXR1cm47IH0gLy/lvZPliY3msqHmnInlnKjmuLjmiI/njqnlrrYgXG4gICAgICAgIC8vX215Q2FyZHMg5Li656m6IOihqOekuuiHquW3seaYr+inguS8l++8jOS4jeS8muWPkeaJi+eJjO+8jOS9huaYr++8jOmcgOimgeWkhOeQhuWKqOeUu1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubW9kZWwuUGxheWluZ1VzZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdXNlckluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRl9UZXhhc1ZpZXcuX2NhcmROdW07IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBsYXlpbmdVc2VyOiBDb21tb25Qb3NWYWxTRCA9IHRoaXMubW9kZWwuUGxheWluZ1VzZXJzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5aW5nVXNlci52YWwgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8v546p5a625LiL5rOo5YC85bCP5LqO562J5LqOMFxuICAgICAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChwbGF5aW5nVXNlci5wb3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlciA9PSBudWxsIHx8IF90ZW1wVXNlci5wbGF5ZXIgPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5jdXJDYXJkSW5kZXggPj0gaSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIuSXNXYXRjaCgpIHx8IF90ZW1wVXNlci5Jc1dhaXRUb1Rha2VJbigpKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlci51c2VyQ29ubmVjdFN0YXRlID09IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICB1c2VySW5kZXgrKztcblxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgbGV0IF9wb2tlciA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5zZWxmICYmIF9teUNhcmRzICE9IG51bGwgJiYgaSA8IF9teUNhcmRzLmxlbmd0aCkgX3Bva2VyID0gX215Q2FyZHNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gaXNBbmltID8gdGhpcy5jb3VudEludGVydmFsICsgdGhpcy51c2VySW50ZXJ2YWwgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXMuU2VuZFVzZXJDYXJkKF90ZW1wVXNlciwgZGVsYXksIGluZGV4LCBfcG9rZXIsIG51bGwsIGZhbHNlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQW5pbSlcbiAgICAgICAgICAgIHRoaXMuUGxheVNlbmRDYXJkQXVkaW8oY291bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZW5kT3BlbkNhcmQoaXNBbmltOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLl9DdXJUdXJuQ291bnQgPCAyKSB7IHJldHVybjsgfVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kZWwuX0N1clR1cm5Db3VudCAtIDEgJiYgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKDIgKyBpIDw9IHRoaXMuY3VyU2VuZENhcmRJbmRleCkgeyBjb250aW51ZTsgfSAvL+W3sue7j+WPkei/h+eahOeJjOS4jeS8muWGjeWPkSAgICAgXG4gICAgICAgICAgICB0aGlzLmN1clNlbmRDYXJkSW5kZXggPSAyICsgaTsgLy8yIOihqOekuiDnrKzkuInlvKDniYxcblxuICAgICAgICAgICAgbGV0IHVzZXJJbmRleCA9IDA7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zMm9wZW5QYWkuZm9yRWFjaChwMmNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MocDJjYXJkLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHAyY2FyZCA9PSBudWxsIHx8IHVzZXIgPT0gbnVsbCB8fCB1c2VyLnBsYXllciA9PSBudWxsKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgaWYgKHAyY2FyZC52YWxsaXN0Lmxlbmd0aCA+IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRJbmRleCA9IDIgKyBpO1xuICAgICAgICAgICAgICAgICAgICB1c2VySW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGF5ID0gaXNBbmltID8gY291bnQgKiB0aGlzLmNvdW50SW50ZXJ2YWwgKyB1c2VySW5kZXggKiB0aGlzLnVzZXJJbnRlcnZhbCA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2VuZFVzZXJDYXJkKHVzZXIsIGRlbGF5LCBjYXJkSW5kZXgsIHAyY2FyZC52YWxsaXN0WzBdLCBwMmNhcmQudmFsbGlzdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1BsYXlTZW5kQ2FyZEF1ZGlvKGNvdW50KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjdXJTZW5kQ2FyZEluZGV4ID0gMDtcbiAgICBwdWJsaWMgU2VuZFVzZXJDYXJkKF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCwgZGVsYXk6IG51bWJlciwgY2FyZEluZGV4OiBudW1iZXIsIHBva2VyOiBudW1iZXIsIG9wZW5QYWk6IG51bWJlcltdLCBpc0F1ZGlvOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfdGVtcFVzZXIucGxheWVyID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKF90ZW1wVXNlci5jdXJDYXJkSW5kZXggPj0gY2FyZEluZGV4KSB7IHJldHVybjsgfVxuICAgICAgICBsZXQgX2NhcmRJbmRleCA9IGNhcmRJbmRleDtcbiAgICAgICAgbGV0IF9wb2tlciA9IHBva2VyO1xuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwiZ2FtZV9kZWFsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGVtcFVzZXIuU2VuZENhcmQoX2NhcmRJbmRleCwgX3Bva2VyLCB0cnVlLCBvcGVuUGFpKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90ZW1wVXNlci5TZW5kQ2FyZChfY2FyZEluZGV4LCBfcG9rZXIsIGZhbHNlLCBvcGVuUGFpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBGYVBhaU5vQW5pKF9teUNhcmRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNHYW1pbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLlBsYXlpbmdVc2VycyA9PSBudWxsIHx8IHRoaXMubW9kZWwuUGxheWluZ1VzZXJzLmxlbmd0aCA8PSAwKSB7IHJldHVybjsgfSAvL+W9k+WJjeayoeacieWcqOa4uOaIj+eOqeWutlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZfVGV4YXNWaWV3Ll9jYXJkTnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYWVjaGNvdXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdC5mb3JFYWNoKF90ZW1wVXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlciA9PSBudWxsIHx8IF90ZW1wVXNlci5wbGF5ZXIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5Jc1dhdGNoKCkgfHwgX3RlbXBVc2VyLklzV2FpdFRvVGFrZUluKCkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYWVjaGNvdXQrKztcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGxldCBfcG9rZXIgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIuc2VsZikgX3Bva2VyID0gX215Q2FyZHNbaV07XG4gICAgICAgICAgICAgICAgX3RlbXBVc2VyLlNlbmRDYXJkTm9BbmkoaW5kZXgsIF9wb2tlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOW6p+S9jeeOqeWutuW8g+eJjCBcbiAgICBwdWJsaWMgR2l2ZVVwKHBvczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9iZnRhYmxlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIHVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVBvcyhwb3MpO1xuICAgICAgICBpZiAodXNlciA9PSBudWxsKSByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gI3JlZ2lvblxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIvms6jor7fmsYLov5Tlm55cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBzY19nYW1ibGVfdGV4KGRhdGE6IHNjX2dhbWJsZV90ZXgpIHtcblxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi0reS5sOS/nemZqei/lOWbnlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGF0YVwiPjwvcGFyYW0+XG4gICAgcHVibGljIHNjX2luc3VyYW5jZV90ZXgoZGF0YTogc2NfaW5zdXJhbmNlX3RleCkge1xuICAgICAgICBpZiAodGhpcy5pbnNUaW1lckNCKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnNUaW1lckNCKTtcbiAgICAgICAgICAgIHRoaXMudWlfQnRuSW5zdXJhbmNlUGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byD54mM6K+35rGC6L+U5ZueXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfZ2l2ZXVwX3RleChkYXRhOiBzY19naXZldXBfdGV4KSB7XG4gICAgICAgIHRoaXMuaGlkZVVJQWxsQnRucygpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5ri45oiP5byA5aeL5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfdGFibGVzdGFydF90ZXhfbihfYmFua2VyUG9zOiBudW1iZXIsIF9zaG93Q2FyZDogbnVtYmVyW10sIF9wb3MyR2FtYmxlOiBDb21tb25Qb3NWYWxTRFtdLCBfcG9zMkdvbGQ6IENvbW1vblBvc1ZhbFNEW10sIF9wb3MyQmlnc21hbGw6IENvbW1vblBvc1ZhbFNEW10sIHJlbWFpblRpbWU6IG51bWJlciwgaXNSZWJhY2s6IGJvb2xlYW4sIHBvczJzdHJhZDogQ29tbW9uUG9zVmFsU0RbXSkge1xuICAgICAgICB0aGlzLl9pc0Nhbk91dEdvbGQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0hhdmVBZGRHb2xkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNmaXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzbXl0dXJuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGljaGkgPSAwO1xuICAgICAgICB0aGlzLnNob3dDYXJkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNob3czY2FyZHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93NGNhcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93NWNhcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJDb21tb25kQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy51aV9Db21tb25DYXJkcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDRcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICB0aGlzLlNob3dVSUxlZnRDYXJkcyhmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLlN0YXJ0R2FtaW5nVGltZXIocmVtYWluVGltZSk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmVuZFRpbWVyKTsgLy9UaW1lSW5mb01nci5pbnN0YW5jZS5TdG9wVGltZXIgKHRoaXMuZW5kVGltZXIpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lT3V0VGltZXIpOy8vVGltZUluZm9NZ3IuaW5zdGFuY2UuU3RvcFRpbWVyICgodGhpcy50aW1lT3V0VGltZXIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltQcm9ncmVzczogLS0tIHN0YXJ0IF0gc2NfdGFibGVzdGFydF90ZXhfbiAgXCIpO1xuICAgICAgICB0aGlzLm1vZGVsLlNldFJlbWFpblRpbWUocmVtYWluVGltZSk7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzR2FtZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5IaWRlVUlXYWl0UGxheVBhbmVsKCk7XG4gICAgICAgIC8vIHVpX2J0blN0YXJ0LmdhbWVPYmplY3QuU2V0QWN0aXZlIChmYWxzZSk7XG4gICAgICAgIHRoaXMuUmVzZXRVSSgpO1xuICAgICAgICB0aGlzLmhpZGVVSUFsbEJ0bnMoKTtcbiAgICAgICAgdGhpcy5TaG93VUlKYWNrcG90KCk7XG4gICAgICAgIHRoaXMuVXBkYXRlSmFja3BvdCgpO1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJnYW1lX2NoaXBzX3RvX3RhYmxlXCIpO1xuICAgICAgICB0aGlzLm1vZGVsLl9sYXN0anBvdCA9IDA7XG4gICAgICAgIGxldCBsYXN0SnBvcnQgPSAwO1xuICAgICAgICBfcG9zMkdhbWJsZS5mb3JFYWNoKF9nYW1ibGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5TZXRVc2VyRGF0YV9pc1dfcG9zKF9nYW1ibGUucG9zLCBfZ2FtYmxlLnZhbCA+IDAgPyAwIDogMSk7IC8v5by65Yi26K6+572uXG4gICAgICAgICAgICB0aGlzLnNjX3RhYmxlc3RhcnRnYW1ibGVfdGV4X24oX2dhbWJsZS5wb3MsIFVJVXRpbC5OdW1iZXJUb0ludChfZ2FtYmxlLnZhbCksIGZhbHNlLCBfYmFua2VyUG9zKTsgLy/pppbms6jmkq3mlL7liqjnlLvliLDnjqnlrrbnrbnnoIFcbiAgICAgICAgICAgIGxhc3RKcG9ydCArPSBVSVV0aWwuTnVtYmVyVG9JbnQoX2dhbWJsZS52YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+aJvuWHuuesrOS4gOS4quaTjeS9nOeahOeOqeWutuaYr+WQpuaYr+iHquW3sVxuICAgICAgICB2YXIgZmlyc3RkYXRhID0gX3BvczJCaWdzbWFsbC5yZWR1Y2UoKGkxLCBpMikgPT4gaTEudmFsIDwgaTIudmFsID8gaTEgOiBpMik7XG4gICAgICAgIGxldCBmaXJzdFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChmaXJzdGRhdGEucG9zKTtcbiAgICAgICAgaWYgKGZpcnN0VXNlciAhPSBudWxsICYmIGZpcnN0VXNlci5zZWxmKSB7XG4gICAgICAgICAgICB0aGlzLmlzZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUmViYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVNeUdhbWJsZVRvVGFibGVHYW1lYmxlKCk7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5SZWZyZXNoVXNlckN1ckdhbWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVMYXN0SnBvdChsYXN0SnBvcnQpOyAvL+eJjOWxgOW8gOWniyDkuIrova7lupXmsaDmmL7npLrmiYDmnInmuLjmiI/njqnlrrbnmoTpppbms6jmgLvlkoxcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlSmFja3BvdChsYXN0SnBvcnQpOyAvL+eJjOWxgOW8gOWniyDlupXmsaDmmL7npLrmiYDmnInmuLjmiI/njqnlrrbnmoTpppbms6jmgLvlkoxcbiAgICAgICAgICAgIHRoaXMuZmFwYWlBZnRlckZpcnN0R2FtYmxlQW5pKF9iYW5rZXJQb3MsIF9zaG93Q2FyZCwgX3BvczJHYW1ibGUsIF9wb3MyR29sZCwgX3BvczJCaWdzbWFsbCwgcmVtYWluVGltZSwgbGFzdEpwb3J0LCBwb3Myc3RyYWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAgIC8v6aaW5rOo5pKt5pS+562556CB5Yqo55S75Yiw5aWW5rGg5bm25pu05paw5qGM6Z2i562556CB5L+h5oGvXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlTXlHYW1ibGVUb1RhYmxlR2FtZWJsZSgpO1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVMYXN0SnBvdChsYXN0SnBvcnQpOyAvL+eJjOWxgOW8gOWniyDkuIrova7lupXmsaDmmL7npLrmiYDmnInmuLjmiI/njqnlrrbnmoTpppbms6jmgLvlkoxcbiAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZUphY2twb3QobGFzdEpwb3J0KTsgLy/niYzlsYDlvIDlp4sg5bqV5rGg5pi+56S65omA5pyJ5ri45oiP546p5a6255qE6aaW5rOo5oC75ZKMXG4gICAgICAgICAgICB9LCAwLjIpXG4gICAgICAgICAgICAvL+mmluazqOWKqOeUu+WxleekuuWujOaIkOWQju+8jOWxleekuuWkp+Wwj+ebsuaKvOazqOWIsOWvueW6lOeOqeWutuetueeggeS4ilxuXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mYXBhaUFmdGVyRmlyc3RHYW1ibGVBbmkoX2JhbmtlclBvcywgX3Nob3dDYXJkLCBfcG9zMkdhbWJsZSwgX3BvczJHb2xkLCBfcG9zMkJpZ3NtYWxsLCByZW1haW5UaW1lLCBsYXN0SnBvcnQsIHBvczJzdHJhZCk7XG4gICAgICAgICAgICB9LCB0aGlzLm1vdmVUb1RhYmxlVGltZSArIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICAvL+abtOaWsOmHkeW4ge+8jOWJjemdoueahOS4i+azqOWSjHN0cmFkbGxl5LiL5rOo5LiN5Lya5pu05paw6YeR5biBXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3BvczJHb2xkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdXNlcjogQ29tbW9uUG9zVmFsU0QgPSBfcG9zMkdvbGRbaV07XG4gICAgICAgICAgICBsZXQgX3RlbXBVc2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQodXNlci5wb3MpO1xuICAgICAgICAgICAgaWYgKF90ZW1wVXNlciA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90ZW1wVXNlci5VcGRhdGVNb25leShVSVV0aWwuTnVtYmVyVG9JbnQodXNlci52YWwpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5Jc1dhdGNoKCkgfHwgX3RlbXBVc2VyLklzV2FpdFRvVGFrZUluKCkpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgX3RlbXBVc2VyLlNob3dVSVJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgIF90ZW1wVXNlci5TaG93VUlXYXRjaChmYWxzZSk7XG4gICAgICAgICAgICBfdGVtcFVzZXIuU2hvd1VJV2lhdFRha2VJbihmYWxzZSk7XG4gICAgICAgICAgICBpZiAoX3RlbXBVc2VyLnNlcnZlcnBvcyA9PSBfYmFua2VyUG9zKSB7XG4gICAgICAgICAgICAgICAgX3RlbXBVc2VyLlNldEJhbmtlcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90ZW1wVXNlci5TZXRCYW5rZXIoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF90ZW1wVXNlci5zZWxmICYmIHRoaXMuX2JmdGFibGUubXlVc2VyICE9IG51bGwpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYW9m5qih5byP5LiL5LiL5rOo5LmL5ZCO6YeR5biB5LiN6Laz55u05o6l6aaW5YWI5pivYWxsaW5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcG9zMkdhbWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBnYW1ibGU6IENvbW1vblBvc1ZhbFNEID0gX3BvczJHYW1ibGVbaV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9wb3MyR29sZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBfcG9zMkdvbGRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5wb3MgPT0gZ2FtYmxlLnBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudmFsID09IDAgJiYgZ2FtYmxlLnZhbCA+IDApIHsgLy8g55u05o6lYWxsaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3RlbXBVc2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQodXNlci5wb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwidGV4YXNfcWlhb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RlbXBVc2VyLnVwZGF0ZUhhbmRsZVN0YXRlVGV4dChUZXhhc1VzZXJIYW5kbGVTdGF0ZS5hbGxpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b635bee5omR5YWL6aaW5YWI6KaB5omn6KGM5LiA5qyh6aaW5rOo5Yiw5aWW5rGg55qE5Yqo55S75ZCO5YaN5pi+56S65aSn5bCP55uy5ZKM5Y+R54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfYmFua2VyUG9zXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfc2hvd0NhcmRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9wb3MyR2FtYmxlXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfcG9zMkdvbGRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9wb3MyQmlnc21hbGxcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInJlbWFpblRpbWVcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBmYXBhaUFmdGVyRmlyc3RHYW1ibGVBbmkoX2JhbmtlclBvczogbnVtYmVyLCBfc2hvd0NhcmQ6IG51bWJlcltdLCBfcG9zMkdhbWJsZTogQ29tbW9uUG9zVmFsU0RbXSwgX3BvczJHb2xkOiBDb21tb25Qb3NWYWxTRFtdLCBfcG9zMkJpZ3NtYWxsOiBDb21tb25Qb3NWYWxTRFtdLCByZW1haW5UaW1lOiBudW1iZXIsIGxhc3RqcG9ydDogbnVtYmVyLCBwb3Myc3RyYWQ6IENvbW1vblBvc1ZhbFNEW10pIHtcbiAgICAgICAgbGV0IGR4SnBvcnQgPSAwO1xuICAgICAgICBfcG9zMkJpZ3NtYWxsLmZvckVhY2goX2JpZ3NtYWxsID0+IC8v5aSn5bCP55uy5oq85rOoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NfdGFibGVzdGFydGdhbWJsZV90ZXhfbihfYmlnc21hbGwucG9zLCBVSVV0aWwuTnVtYmVyVG9JbnQoX2JpZ3NtYWxsLnZhbCksIGZhbHNlLCBfYmFua2VyUG9zKTtcbiAgICAgICAgICAgIGR4SnBvcnQgKz0gVUlVdGlsLk51bWJlclRvSW50KF9iaWdzbWFsbC52YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5VcGRhdGVKYWNrcG90KGR4SnBvcnQgKyBsYXN0anBvcnQpOyAvL+Wkp+Wwj+ebsuaKvOazqOWQjiDlupXmsaDmmL7npLrmiYDmnInmuLjmiI/njqnlrrbnmoTpppbms6jlkozlpKflsI/nm7LmgLvlkoxcbiAgICAgICAgLy9zdHJhZGxsZeeOqeWutuimgeaYvuekuueOqeWutueKtuaAgeS4unN0cmFkbGxlLOS4pOS4queOqeWutueahOaXtuWAmeayoeaciXN0cmFkbGxlXG4gICAgICAgIGlmIChfcG9zMkJpZ3NtYWxsLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHZhciBzdHJhZGxsZSA9IF9wb3MyQmlnc21hbGwucmVkdWNlKChpMSwgaTIpID0+IGkxLnZhbCA+IGkyLnZhbCA/IGkxIDogaTIpO1xuICAgICAgICAgICAgbGV0IHN0cmFkbGxlVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHN0cmFkbGxlLnBvcyk7XG4gICAgICAgICAgICBpZiAoc3RyYWRsbGVVc2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHJhZGxsZVVzZXIudXBkYXRlSGFuZGxlU3RhdGVUZXh0KFRleGFzVXNlckhhbmRsZVN0YXRlLnN0cmFkbGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v6KGl5oqT5aS0XG4gICAgICAgIGlmIChwb3Myc3RyYWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3Myc3RyYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX3RlbXBVc2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQocG9zMnN0cmFkW2ldLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90ZW1wVXNlci51cGRhdGVIYW5kbGVTdGF0ZVRleHQoVGV4YXNVc2VySGFuZGxlU3RhdGUuc3RyYWQpO1xuICAgICAgICAgICAgICAgICAgICBfdGVtcFVzZXIuR2VuZXJhdGVDaGlwX25iYihwb3Myc3RyYWRbaV0udmFsLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKF90ZW1wVXNlci5wbGF5ZXIuX24gKyBcIuihpeaKk+WktO+8mlwiICsgcG9zMnN0cmFkW2ldLnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFwYWlBZnRlckZpcnN0R2FtYmxlQW5pIF9zaG93Q2FyZCA9PT0gXCIsIF9zaG93Q2FyZCk7XG4gICAgICAgIHRoaXMuRmFQYWlfbmIoX3Nob3dDYXJkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdXJTZW5kQ2FyZEluZGV4ID0gMTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWHhuWkh+Wwsee7qlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNjX3JlYWR5X3RleChkYXRhOiBzY19yZWFkeV90ZXgpIHtcbiAgICAgICAgdGhpcy5jdXJTZW5kQ2FyZEluZGV4ID0gMDtcbiAgICB9XG4gICAgcHVibGljIHNjX3JlYWR5X3RleF9uKGRhdGE6IHNjX3JlYWR5X3RleF9uKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ2FuU2VlTGVmdENhcmRzID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0NhblhpdVBhaSA9IGZhbHNlO1xuXG4gICAgLy8g5ri45oiP57uT5p2fIFxuICAgIHB1YmxpYyBzY19lbmRfdGV4X24oZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIC8vI3JlZ2lvbiDnu5PnrpfmmL7npLpcbiAgICAgICAgZGF0YS5fcG9zMlNob3VQYWkuZm9yRWFjaChfc2hvdXBhaSA9PiB7XG4gICAgICAgICAgICBsZXQgd2luZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChfc2hvdXBhaS5wb3MpO1xuICAgICAgICAgICAgaWYgKHdpbmVyID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgd2luZXIuU2hvd0NhcmQoX3Nob3VwYWkudmFsbGlzdCk7IC8v57uT566X6ZyA6KaB5omA5pyJ5Lq66IO955yL5Yiw5omL54mM5LqGXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLl9wb3MyTWF4UGFpLmZvckVhY2goX3Nob3VwYWkgPT4ge1xuICAgICAgICAgICAgbGV0IF90VXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKF9zaG91cGFpLnBvcyk7XG4gICAgICAgICAgICBpZiAoX3RVc2VyID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgX3RVc2VyLlNob3dNYXhDYXJkKF9zaG91cGFpLnZhbGxpc3QpOyAvL+e7k+eul+mcgOimgeaJgOacieS6uuiDveeci+WIsOaJi+eJjOS6hlxuICAgICAgICAgICAgX3RVc2VyLlNldFNob3dTdGF0ZUdyYXkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKChkYXRhLl9wb3MyU2hvdVBhaSA9PSBudWxsIHx8IGRhdGEuX3BvczJTaG91UGFpLmxlbmd0aCA8PSAwKSAmJiBkYXRhLlNob3djYXJkICE9IG51bGwgJiYgZGF0YS5TaG93Y2FyZC5sZW5ndGggPiAwKS8v5q+U54mM5bCx5LiN5bGV56S656eA54mMXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEuU2hvd2NhcmQuZm9yRWFjaChfc2hvd3BhaVVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBfdFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChfc2hvd3BhaVVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RVc2VyID09IG51bGwgfHwgX3RVc2VyLnNlbGYgfHwgX3Nob3dwYWlVc2VyLmNhcmRzID09IG51bGwgfHwgX3Nob3dwYWlVc2VyLmNhcmRzLmxlbmd0aCA8PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdFVzZXIuRGlzcGxheVNob3dDYXJkKF9zaG93cGFpVXNlci5jYXJkcyk7IC8v5bGV56S656eA54mMXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzbXl0dXJuID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1Byb2dyZXNzOiAtLS0gZ2FtZSBvdmVyIF0gc2NfZW5kX3doaV9uICA6XCIpO1xuICAgICAgICB0aGlzLkhhbmRsZVRhYmxlQW5kVXNlckRhdGFfZW5kKGRhdGEsIHRoaXMubW92ZVRvVGFibGVUaW1lICsgMC4xNSArIHRoaXMubW92ZVRvVXNlclRpbWUpO1xuICAgICAgICB0aGlzLkhhbmRsZVRhYmxlVUlfZW5kKGRhdGEpO1xuICAgICAgICB0aGlzLkhhbmRsZVRhYmxlQW5pbWF0aW9uX2VuZChkYXRhKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEhhbmRsZVRhYmxlQW5kVXNlckRhdGFfZW5kKGRhdGE6IHNjX2VuZF90ZXhfbiwgZGVsYXlTaG93VGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3VyU2VuZENhcmRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMubW9kZWwuU2V0TWluU3RhcnRHYW1ibGUoZGF0YS5saW1pdGdvbGQpO1xuICAgICAgICAvL+WFiOWkhOeQhuaVsOaNrizkv53or4HmlbDmja7kuI3lh7rplJnvvIzmraTlpITph5HluIHmiL/lpITnkIbph5HluIHvvIzkv7HkuZDpg6jluIHmiL/lpITnkIbkv7HkuZDpg6jluIFcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmNnb2xkID0gZGF0YS51Z29sZDsvL+WdkOS4i+WIt+aWsOeOqeWutui6q+S4iueahOS/seS5kOmDqOW4gVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubW9kZWwuY3VyU0NsdWIgIT0gbnVsbCkvL+eOqeWutuWdkOS4i+i/h+WIt+aWsOeOqeWutuahjOWtkOS4iueahOS/seS5kOmDqOW4gVxuICAgICAgICAgICAgLy8gQ2x1YlZpZXdDdHIuaW5zdGFuY2UuVXBkYXRlQ2x1YkluZm9jZ29sZCh0aGlzLm1vZGVsLmN1clNDbHViLmNpZCwgZGF0YS51Z29sZCk7XG4gICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjbHViIGlzIG51bGxcIik7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnNjX2ZyZXNoZ29sZF9uKDIsIGRhdGEudWdvbGQpOyAvL+WkhOeQhueUqOaIt+i6q+S4iueahOmHkeW4gWRhdGEucG9zMmdvbGTph4zpnaLoh6rlt7HnmoTph5HluIFcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuX3BvczJHb2xkV2luLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS52YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJDb21wOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoaXRlbS5wb3MpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyQ29tcCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxlVGFibGVBbmRVc2VyRGF0YV9lbmQgIHVzZXJDb21wID09IG51bGwgaXRlbS5wb3M9XCIgKyBpdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy/nu5HlrprmnIDnu4jph5HluIFcbiAgICAgICAgZGF0YS5fcG9zMkdvbGQuZm9yRWFjaChfdGVtcGdvbGQgPT4ge1xuICAgICAgICAgICAgbGV0IHA6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChfdGVtcGdvbGQucG9zKTtcbiAgICAgICAgICAgIGlmIChwID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcC5hbGxpbkdhbWJsZSA9IDA7XG4gICAgICAgICAgICBwLkdhbWVPdmVyKFVJVXRpbC5OdW1iZXJUb0ludChfdGVtcGdvbGQudmFsKSk7XG4gICAgICAgICAgICBpZiAocC5zZWxmKSB7IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLk15RW5kTW9uZXkgPSBVSVV0aWwuTnVtYmVyVG9JbnQoX3RlbXBnb2xkLnZhbCk7IHRoaXMubW9kZWwuU2V0TG9ja0dvbGQoVUlVdGlsLk51bWJlclRvSW50KF90ZW1wZ29sZC52YWwpKTsgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL+WIoOmZpOW3sue7j+i+k+WujOeahOeOqeWutlxuICAgICAgICBkYXRhLl93YXRjaGxpc3QuZm9yRWFjaChfd2F0Y2ggPT4ge1xuICAgICAgICAgICAgbGV0IF90VXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKF93YXRjaC5wb3MpO1xuICAgICAgICAgICAgaWYgKF90VXNlciA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChfd2F0Y2gudmFsID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RVc2VyLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuU2V0VXNlckRhdGFfaXNXKF90VXNlci5wbGF5ZXIudXNlcmlkLCAxKTsgLy/lj5jkuLrop4LkvJdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v6L+Z6YeM5Y+q5aSE55CG5pWw5o2uXG4gICAgICAgIGxldCBrZWVwbGlzdDogQ29tbW9uUG9zVmFsU0RbXSA9IGRhdGEuX2tlZXBsaXN0O1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5pZDJrZWVwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGtlZXBsaXN0ID0gdGhpcy5tb2RlbC5pZDJrZWVwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZWVwbGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBrZWVwbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBfdFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKF90VXNlciA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL+S4jeWkhOeQhlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdFVzZXIucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX2tlZXBsaXN0IC0tLS0tIOi/memHjOWPquWkhOeQhuaVsOaNrlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOWIpOaWreaYr+WQpuaYr+mHjeaWsOW4puWFpeWGjei/m+adpeeahFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5TZXRVc2VyRGF0YV9pc1coX3RVc2VyLnBsYXllci51c2VyaWQsIDEpOyAvL+WPmOS4uuinguS8l1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5TZXRVc2VyRGF0YV9pc0soX3RVc2VyLnBsYXllci51c2VyaWQsIFVJVXRpbC5OdW1iZXJUb0ludChpdGVtLnZhbCAtIGRlbGF5U2hvd1RpbWUpKTsgLy/lrqLmiLfnq68g5by65Yi26K6+572u5Li6IOeVmeW6p+eKtuaAgSAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIF90VXNlci51cGRhdGVfVXNlckluZm8oX3RVc2VyLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdFVzZXIuU2V0VXNlQ29ubmVjdFN0YXRlKFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8v6L+Z6YeM5Y+q5Yig6Zmk5pWw5o2u77yM5Yqo55S75a6M5oiQ6LSm5Y+35aSE55CG56e76ZmkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubW9kZWwuUmVtb3ZlUGxheWVyTGlzdChfdFVzZXIucGxheWVyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlVwZGF0ZUphY2twb3QoZGF0YS5famFja3BvdCk7IC8vIOabtOaWsOahjOmdouS4iueahOetueeggVxuICAgICAgICB0aGlzLlVwZGF0ZUxhc3RKcG90KGRhdGEuX2phY2twb3QpOyAvL+acgOWQjueahOS4iui9ruW6leaxoOWwseaYr+aAu+W6leaxoFxuICAgICAgICAvL+mHjee9rmlkMmtlcHDmlbDmja5cbiAgICAgICAgdGhpcy5tb2RlbC5pZDJrZWVwID0gW107XG4gICAgfVxuXG4gICAgLy8g6L+Z6YeM5Y+q5aSE55CG56a75byA5pWw5o2uXG4gICAgcHVibGljIGRlYWxFbmRMZWF2ZURhdGEoZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIC8v6L+Z6YeM5Y+q5aSE55CG5pWw5o2uXG4gICAgICAgIGlmIChkYXRhLl9rZWVwbGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhLl9rZWVwbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBfdFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKF90VXNlciA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy/ov5nph4zlj6rliKDpmaTmlbDmja7vvIzliqjnlLvlrozmiJDotKblj7flpITnkIbnp7vpmaRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInJlbW92ZSAtLS0gXCIsIF90VXNlci5wbGF5ZXIudXNlcmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5SZW1vdmVQbGF5ZXJMaXN0KF90VXNlci5wbGF5ZXIudXNlcmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgSGFuZGxlVGFibGVVSV9lbmQoZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIHRoaXMudWlfYnRucWlwYWkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2N1clRleGFzdHlwZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfamFja3BvdHBhcmFudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfaW5zamFja3BvdHBhcmFudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU2hvd0RlbGF5KGZhbHNlKTtcbiAgICAgICAgdGhpcy5TZXRBdXRvUWlQYWkoZmFsc2UpO1xuICAgICAgICB0aGlzLlNldEF1dG9HYW1ibGUoZmFsc2UpO1xuICAgICAgICB0aGlzLlNob3dBY3Rpb25CdG5zKGZhbHNlKTtcbiAgICAgICAgdGhpcy5oaWRlVUlBbGxCdG5zKCk7XG5cbiAgICAgICAgdGhpcy5pc0NhblNlZUxlZnRDYXJkcyA9IHRoaXMuX2JmdGFibGUubXlVc2VyLnNlcnZlcnBvcyA+IDAgJiYgdGhpcy5tb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggPCA1OyAvL+afpeeci+WJqeS9meWFrOeJjCAgICBcbiAgICAgICAgdGhpcy5pc0NhblhpdVBhaSA9IGRhdGEuX3BvczJTaG91UGFpLmxlbmd0aCA8IGRhdGEuX3BvczJHb2xkV2luLmxlbmd0aDsgLy/mn6XnnIvlvIPniYznjqnlrrbnmoTpppbniYwo55yL5Yiw6aaW54mM55qE5Lq65pWw5bCP5LqO5Y+C5LiO5ri45oiP55qE546p5a6255qE5Lq65pWwIOWwseaYvuekuuengOeJjClcbiAgICAgICAgdGhpcy5TaG93VUlMZWZ0Q2FyZHModGhpcy5pc0NhblhpdVBhaSwgdGhpcy5pc0NhblNlZUxlZnRDYXJkcyk7XG5cbiAgICAgICAgLy/mmK/lkKbmu6HotrPlvIDlsYDmnaHku7ZcbiAgICAgICAgdGhpcy5TaG93VUlXYWl0UGxheVBhbmVsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBIYW5kbGVUYWJsZUFuaW1hdGlvbl9lbmQoZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIHRoaXMuc2V0UmVzdWx0V2luR29sZChkYXRhLl9wb3MyR29sZFdpbik7IC8v5bGV56S65aS06aG255qE6L6T6LWi5YiG5pWwXG4gICAgICAgIHRoaXMuQ2hlY2tTaG93QmlnV2luKGRhdGEuX3BvczJTY29yZSk7IC8v5bGV56S6Ymlnd2luXG5cbiAgICAgICAgdGhpcy5tb3ZlTXlHYW1ibGVUb1RhYmxlR2FtZWJsZShkYXRhLl9wb3MyR29sZFdpbik7IC8v56e75Yqo562556CBXG4gICAgICAgIHRoaXMuRGVsYXlNb3ZlVGFibGVHYW1ibGVUb1dpbmVyKHRoaXMubW92ZVRvVGFibGVUaW1lICsgMC4xLCBkYXRhLl9wb3MyR29sZFdpbik7IC8v56e75Yqo562556CBXG4gICAgICAgIHRoaXMuZGVsYXlIYW5kbGVVc2VyVUlBZnRlckFuaW1hdGlvbih0aGlzLm1vdmVUb1RhYmxlVGltZSArIDAuMiArIHRoaXMubW92ZVRvVXNlclRpbWUsIGRhdGEpO1xuICAgICAgICB0aGlzLkhhbmRsZVRpbWVPdXRVc2VyVUkoMywgZGF0YSk7XG4gICAgfVxuICAgIHByaXZhdGUgQ2hlY2tTaG93QmlnV2luKF9wb3MyU2NvcmU6IFRleGFzQ29tcGFyZVNEW10pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcG9zMlNjb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFyZXNkID0gX3BvczJTY29yZVtpXTtcbiAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChjb21wYXJlc2QucG9zKTtcbiAgICAgICAgICAgIGlmIChfdGVtcFVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIuc2VsZikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZXNkLmJpZ3dpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvd0VmdEJpZ1dpbihjb21wYXJlc2QuYmlnd2luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZXNkLmNsYWltID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGVtcFVzZXIuZW5kU2hvd0luc0NsYWltKGNvbXBhcmVzZC5jbGFpbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZGVsYXlIYW5kbGVVc2VyVUlBZnRlckFuaW1hdGlvbihkZWxheVRpbWU6IG51bWJlciwgZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIHRoaXMuZW5kVGltZXIgPSBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5BZGRUaW1lcihkZWxheVRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb2RlbC5pc0dhbWluZyAmJiB0aGlzLl9iZnRhYmxlKS8vJiYgUm9vdE9iamVjdCAhPSBudWxsKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnBsYXllciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLkNsZWFyVXNlcigpOyAvL+a4heeQhuiHquW3seeahOaVsOaNriAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RVc2VyOiBPdGhlclVzZXJJbmZvU0QgPSB0aGlzLm1vZGVsLkdldFVzZXJJbmZvKHVzZXIucGxheWVyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RVc2VyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZVVzZXIodXNlci5wbGF5ZXIudXNlcmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlZnluqfnmoTnjqnlrrbvvIzkuI3og73kv67mlLnkuLrnrYnlvoXnirbmgIFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci51c2VyQ29ubmVjdFN0YXRlID09IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5UYWJlbGVFbmRTZXRLZWVwKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgSGFuZGxlVGltZU91dFVzZXJVSShkZWxheVRpbWU6IG51bWJlciwgZGF0YTogc2NfZW5kX3RleF9uKSB7XG4gICAgICAgIHRoaXMudGltZU91dFRpbWVyID0gVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuQWRkVGltZXIoZGVsYXlUaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNHYW1pbmcpLy8gJiYgUm9vdE9iamVjdCAhPSBudWxsKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVhZHlDb3VudCA9IHRoaXMubW9kZWwuR2V0UmVhZHlDb3VudCgpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLmo4Dmn6XmmK/lkKYg5pi+56S65byA5bGA5bim562J5b6FXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iZnRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JmdGFibGUudXNlckxpc3QuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnBsYXllciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5DbGVhclVzZXIoKTsgLy/muIXnkIboh6rlt7HnmoTmlbDmja4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RVc2VyOiBPdGhlclVzZXJJbmZvU0QgPSB0aGlzLm1vZGVsLkdldFVzZXJJbmZvKHVzZXIucGxheWVyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0VXNlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVtb3ZlVXNlcih1c2VyLnBsYXllci51c2VyaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlZnluqfnmoTnjqnlrrbvvIzkuI3og73kv67mlLnkuLrnrYnlvoXnirbmgIFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLlJlc2V0UGxheWluZ1VJKCk7Ly/liKDpmaTnjqnlrrbmoYzlrZDkuIrnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVGFiZWxlRW5kU2V0S2VlcCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuU2V0U3RhdGVVc2VyV2FpdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51aV9Db21tb25DYXJkcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9TdGF0dXNNYW5hZ2VyLmdldENvbnRyb2xsZXIoXCJjb21tb25jYXJkNFwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfU3RhdHVzTWFuYWdlci5nZXRDb250cm9sbGVyKFwiY29tbW9uY2FyZDVcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2N1clRleGFzdHlwZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJDb21tb25kQ2FyZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dVSUxlZnRDYXJkcyhmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuU2hvd1VJSmFja3BvdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vI3JlZ2lvbiDnu5PnrpfmmL7npLpcbiAgICBwdWJsaWMgc2NfYmlnZW5kX3RleF9uKGRhdGE6IHNjX2JpZ2VuZF90ZXhfbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltQcm9ncmVzczogLS0tIGJpZyBiYWxlbmNlIF0gc2NfYmlnZW5kX3doaV9uIFwiKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY29tcGV0ZWlkID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNCaWdFbmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOaKiueJjOWxgOWbnumhvumakOiXj1xuICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeUNvbXAuSGlkZSgpO1xuICAgICAgICAgICAgICAgIC8vIOW7tui/n+aYvuekuue7k+eul1xuICAgICAgICAgICAgICAgIHRoaXMuU2hvd1VJQmFsZW5jZVBhbmVsKGRhdGEuYmlnZW5kLCBkYXRhLmlzbmFtZ2VyKTtcbiAgICAgICAgICAgICAgICAvL+avlOi1m+acque7k+adn++8jOabtOaWsOaIv+mXtOS/oeaBr1xuICAgICAgICAgICAgfSwgNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2FuRXhlVGV4TWFzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RlbC50YWJsZSA9IEFwcENvbnN0LmVudGVyVGFibGVEYXRhO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubW9kZWwudGFibGVpZCA9IEFwcENvbnN0LmVudGVyVGFibGVEYXRhLnRhYmxlaWQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RlbC5sZXZlbGlkID0gQXBwQ29uc3QuZW50ZXJUYWJsZURhdGEubGV2ZWxpZDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vZGVsLnBhbHllcmxpc3QgPSBBcHBDb25zdC5lbnRlclRhYmxlRGF0YS5wYWx5ZXJsaXN0O1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnNjX2VudGVydGFibGVudW1fdGV4KEFwcENvbnN0LmVudGVyVGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZVRhYmxlUmVjb3ZlcihBcHBDb25zdC5lbnRlclRhYmxlRGF0YSwgQXBwQ29uc3QuZW50ZXJUYWJsZURhdGEucGFseWVybGlzdCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBlbmR0aXBpZDogRnVuY3Rpb24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyBzZXRFbmRUaXAodmFsdWU6IG51bWJlcikge1xuICAgIC8vICAgICBsZXQgc3RyOiBzdHJpbmcgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHZhbHVlKSArIFwiXCI7XG4gICAgLy8gICAgIGlmICh2YWx1ZSA+PSAwKSB7XG4gICAgLy8gICAgICAgICBzdHIgPSBcIltjb2xvcj0jMDBGRjAwXStcIiArIHN0ciArIFwiWy9jb2xvcl1cIjtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHN0ciA9IFwiW2NvbG9yPSMwMEZGMDBdXCIgKyBzdHIgKyBcIlsvY29sb3JdXCI7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBpZiAodGhpcy5lbmR0aXBpZCAhPSBudWxsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5lbmR0aXBpZCk7XG4gICAgLy8gICAgICAgICB0aGlzLmVuZHRpcGlkID0gbnVsbDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vICNlbmRyZWdpb24gXG4gICAgcHVibGljIHdpbkNob3VtYShfcG9zOiBudW1iZXIsIF9pbmRleDogbnVtYmVyLCBTY29yZTogbnVtYmVyLCBtYXhDYXJkOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAodGhpcy5fY2hpcHBvb2xMaXN0ID09IG51bGwgfHwgdGhpcy5fYmZ0YWJsZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVBvcyhfcG9zKTtcbiAgICAgICAgaWYgKF90ZW1wVXNlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBfdGVtcFVzZXIud2luQ2hvdW1hKHRoaXMuX2NoaXBwb29sTGlzdFtfaW5kZXhdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+a4heeQhuahjOmdouS4iueahOeOqeWutlxuICAgIHByaXZhdGUgUmVzZXRBbGxVc2VycygpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5TZXRNeVNlcnZlclBvcygwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0W2ldLkNsZWFyVXNlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyJ5Lq66L+b5YWl6L+Z5qGMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2NfZW50ZXJ0YWJsZV90ZXhhc19uKHBsYXllcmxpc3Q6IE90aGVyVXNlckluZm9TRFtdKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnBhbHllcmxpc3QgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJbUHJvZ3Jlc3M6IC0tLSBlbnRlciBSb29tIF0gc2NfZW50ZXJ0YWJsZV93aGlybF9uICBwbGF5ZXJDb3VudDpcIiArIHBsYXllcmxpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5SZXNldEFsbFVzZXJzKCk7XG4gICAgICAgIC8vIGxldCBwbGF5ZXJDb3VudCA9IHBsYXllcmxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLm1vZGVsLnBhbHllcmxpc3QuZm9yRWFjaChvdGhlcnVzZXJpbmZvID0+IHtcbiAgICAgICAgICAgIG90aGVydXNlcmluZm8uaXNLID0gb3RoZXJ1c2VyaW5mby5pc0sgPiAwID8gb3RoZXJ1c2VyaW5mby5pc0sgKyAxIDogMDtcbiAgICAgICAgICAgIGlmIChvdGhlcnVzZXJpbmZvLmlzVyA9PSAwIHx8IG90aGVydXNlcmluZm8uaXNLID4gMCB8fCBvdGhlcnVzZXJpbmZvLnBvcyA8IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfVXNlckluZm8ob3RoZXJ1c2VyaW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuQ2hlY2tNb3ZlVG9NeVBvcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVfVXNlckluZm9TaXREb3duKHVzZXI6IE90aGVyVXNlckluZm9TRCwgaWQya2VlcDogQ29tbW9uUG9zVmFsU0RbXSwgYVRpbWU6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwic2l0ZG93biAtLS0gXCIsIHVzZXIucHkuX24pO1xuICAgICAgICB0aGlzLm1vZGVsLmlkMmtlZXAgPSBpZDJrZWVwO1xuICAgICAgICB0aGlzLlJlbW92ZVVzZXIodXNlci5weS51c2VyaWQpOyAvL+WFiOWIoOmZpOmcgOimgeWFpeW6p+eahO+8jFxuICAgICAgICB0aGlzLm1vZGVsLkFkZFBsYXllckxpc3QodXNlcik7XG4gICAgICAgIHRoaXMuQ2hlY2tSZW1haW5QbGF5ZXIoaWQya2VlcCk7XG4gICAgICAgIHRoaXMubW9kZWwuUmVtb3ZlUG9zMkFwcGx5KHVzZXIucG9zKTtcbiAgICAgICAgaWYgKGFUaW1lID4gMCkvL+W4puWFpeeUs+ivt+S4reeahOeOqeWutlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdGVtcDogQ29tbW9uUG9zVmFsU0QgPSBuZXcgQ29tbW9uUG9zVmFsU0QoKTtcbiAgICAgICAgICAgIHRlbXAudmFsID0gYVRpbWU7XG4gICAgICAgICAgICB0ZW1wLnBvcyA9IHVzZXIucG9zO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5BZGRQb3MyQXBwbHlMaXN0KHRlbXApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlX1VzZXJJbmZvKHVzZXIpO1xuICAgICAgICB0aGlzLkNoZWNrTW92ZVRvTXlQb3MoKTtcbiAgICB9XG5cbiAgICAvL+W3sue7j+emu+ahjOeahOeOqeWutu+8jOeVmeW6p+aXtumXtOWIsOS6huS5i+WQjuS4jeS8mumAmuefpeabtOaWsO+8jOWcqOWFpeW6p+eahOaXtuWAmeWIt+aWsFxuICAgIHB1YmxpYyBDaGVja1JlbWFpblBsYXllcihpZDJrZWVwOiBDb21tb25Qb3NWYWxTRFtdKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2RlbC5wYWx5ZXJsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuSXNJbkRlc2sodGhpcy5tb2RlbC5wYWx5ZXJsaXN0W2ldLnB5LnVzZXJpZCwgaWQya2VlcCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlU3VjY2VzcyA9IHRoaXMuUmVtb3ZlVXNlcih0aGlzLm1vZGVsLnBhbHllcmxpc3RbaV0ucHkudXNlcmlkKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBJc0luRGVzayh1c2VySWQ6IG51bWJlciwgaWQya2VlcDogQ29tbW9uUG9zVmFsU0RbXSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgaXNJbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaWQya2VlcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZDJrZWVwLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucG9zID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBpc0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIklzSW5EZXNrPT09dXNlcklkPVwiICsgdXNlcklkICsgXCIsIGlkMmtlZXA9XCIgKyBpZDJrZWVwKTtcbiAgICAgICAgcmV0dXJuIGlzSW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdlVzZXJDYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIC8v5pat57q/6YeN6L+e6YeN5aSN5qOA5rWL5riF5qWa546p5a62XG4gICAgcHVibGljIFVwZGF0ZVJlbW92ZVVzZXIodXNlcklkOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHVzZXI6IFRleGFzVXNlckNvbXAgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5yZW1vdlVzZXJDYWxsQmFjaykgdGhpcy51bnNjaGVkdWxlKHRoaXMucmVtb3ZVc2VyQ2FsbEJhY2spO1xuICAgICAgICB0aGlzLnJlbW92VXNlckNhbGxCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIuajgOa1i+WIsOimgea4healmueOqeWutiAxIO+8mlwiICsgdXNlcklkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iZnRhYmxlKSB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQodXNlcklkKTtcbiAgICAgICAgICAgIGlmICh1c2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIuajgOa1i+WIsOimgea4healmueOqeWutiAyIO+8mlwiICsgdXNlcklkKTtcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZVVzZXIodXNlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMucmVtb3ZVc2VyQ2FsbEJhY2ssIDAuNSwgMjApO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZW1vdmVVc2VyKHVzZXJJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnJlbW92VXNlckNhbGxCYWNrKTtcbiAgICAgICAgaWYgKHRoaXMuX2JmdGFibGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBsZXQgdXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHVzZXJJZCk7XG4gICAgICAgIGlmICh1c2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh1c2VyLnNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVVSUFsbEJ0bnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2N1clRleGFzdHlwZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93T3BlblRpcChmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy/muIXnkIbmlbDmja465LiN54S25LiN6IO95Zue5Yiw5qGM5a2QICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlci5DbGVhclVzZXIoKTsgLy/muIXnkIboh6rlt7HnmoTmlbDmja4gIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuQ2hlY2tCdG5CYWNrVGFibGVTdGF0ZSgpO1xuICAgICAgICAvL+avj+asoeemu+W6p+mDveajgOafpeaYr+WQpua7oei2s+W8gOWxgOadoeS7tlxuICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNHYW1pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuU2hvd1VJV2FpdFBsYXlQYW5lbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLlJlbW92ZVBsYXllckxpc3QodXNlcklkKTsgLy/np7vpmaTnjqnlrrYgICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlX1VzZXJJbmZvKHVzZXJJbmZvOiBPdGhlclVzZXJJbmZvU0QpIHtcbiAgICAgICAgbGV0IF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHVzZXJJbmZvLnB5LnVzZXJpZCk7XG4gICAgICAgIGlmIChfdGVtcFVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3RlbXBVc2VyLkNsZWFyVXNlcigpO1xuICAgICAgICAgICAgX3RlbXBVc2VyLnVwZGF0ZV9Vc2VySW5mbyh1c2VySW5mbyk7XG4gICAgICAgICAgICBpZiAodXNlckluZm8ucHkudXNlcmlkID09IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLlNldE15U2VydmVyUG9zKHVzZXJJbmZvLnBvcyk7IC8v6K6+572u5oiR55qE5L2N572uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuQ2hlY2tCdG5CYWNrVGFibGVTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5TaG93VUlXYWl0UGxheVBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiX2JmdGFibGUudXNlckxpc3QuQ291bnQ6XCIgKyBfYmZ0YWJsZS51c2VyTGlzdC5Db3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WIneWni+W6leazqCzkuI3kv67mlLnnirbmgIEs5LmL5re75Yqg5pWw5o2uXG4gICAgcHVibGljIHNjX3RhYmxlc3RhcnRnYW1ibGVfdGV4X24odXNlcklkOiBudW1iZXIsIF9jdXJHYW1ibGU6IG51bWJlciwgX3R1cm5PdmVyOiBib29sZWFuLCBfYmFua2VyUG9zOiBudW1iZXIsIF9hbGxpbiA9IGZhbHNlKSB7XG4gICAgICAgIHZhciBfdGVtcFVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh1c2VySWQpO1xuICAgICAgICBpZiAoX3RlbXBVc2VyID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChfdGVtcFVzZXIuSXNXYXRjaCgpIHx8IF90ZW1wVXNlci5Jc1dhaXRUb1Rha2VJbigpKSB7IHJldHVybjsgfVxuICAgICAgICAvL190ZW1wVXNlci5SZXNldFBsYXlpbmdEYXRhQW5kVUkgKCk7IC8v5byA5aeL5LiL5rOo6KGo56S6LOaWsOWxgOW8gOWQryzopoHlhYjph43nva7mlbDmja7lkoxVSVxuICAgICAgICBfdGVtcFVzZXIuU2hvd1VJR2FtYmxlKHRydWUpO1xuICAgICAgICBpZiAoX2N1ckdhbWJsZSA+IDApIHtcbiAgICAgICAgICAgIF90ZW1wVXNlci5HZW5lcmF0ZUNoaXBOb1VwYXRlKF9jdXJHYW1ibGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGVtcFVzZXIuc2VydmVycG9zID09IF9iYW5rZXJQb3MpIHtcbiAgICAgICAgICAgIF90ZW1wVXNlci5TZXRCYW5rZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGVtcFVzZXIuU2V0QmFua2VyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBfdGVtcFVzZXIuR2FtYmxlTW9uZ28oMCk7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyJ5Lq65LiL5rOoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2NfZ2FtYmxlX3RleF9uKGRhdGE6IHNjX2dhbWJsZV90ZXhfbikge1xuICAgICAgICAvLyBwb3M6IG51bWJlciwgX2N1ckdhbWJsZTogbnVtYmVyLCBfdHVybk92ZXI6IGJvb2xlYW4sIF9hbGxpbiA9IGZhbHNlLCBhZGRSYXRlID0gZmFsc2VcbiAgICAgICAgLy8gZGF0YS5wb3MsIGRhdGEuX2dhbWJsZSwgZGF0YS5fdHVybk92ZXIsIGRhdGEuX2FsbGluLCBkYXRhLmFkZHJhdGVcbiAgICAgICAgdGhpcy5VcGRhdGVKYWNrcG90KCk7XG4gICAgICAgIGlmICghdGhpcy5fYmZ0YWJsZSkgcmV0dXJuO1xuICAgICAgICB2YXIgX3RlbXBVc2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MoZGF0YS5wb3MpO1xuICAgICAgICBpZiAoX3RlbXBVc2VyID09IG51bGwpIHJldHVybjtcblxuICAgICAgICAvL+iHquW3seaTjeS9nOi/lOWbnuWQju+8jOWFs+mXreWAkuiuoeaXtuWPmOS4uuetieW+heeKtuaAgVxuICAgICAgICBfdGVtcFVzZXIuV2FpdCgpO1xuXG4gICAgICAgIGlmIChkYXRhLl9nYW1ibGUgPT0gMCkgeyAvL+S8kVxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwiZ2FtZV9hY3Rpb25feGl1XCIpO1xuICAgICAgICAgICAgX3RlbXBVc2VyLnVwZGF0ZUhhbmRsZVN0YXRlVGV4dChUZXhhc1VzZXJIYW5kbGVTdGF0ZS54aXUpO1xuICAgICAgICAgICAgaWYgKGRhdGEuX3R1cm5PdmVyKSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuUmVmcmVzaFVzZXJDdXJHYW1ibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJnYW1lX2NoaXBzX3RvX3RhYmxlXCIpO1xuICAgICAgICBfdGVtcFVzZXIuR2VuZXJhdGVDaGlwX25iYihkYXRhLl9nYW1ibGUsIHRydWUsIGRhdGEuX3R1cm5PdmVyLCBkYXRhLnRnb2xkKTtcblxuICAgICAgICBpZiAoZGF0YS5fYWxsaW4pIHtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheShcIlwiLCBcInRleGFzX3FpYW9cIik7XG4gICAgICAgICAgICBfdGVtcFVzZXIudXBkYXRlSGFuZGxlU3RhdGVUZXh0KFRleGFzVXNlckhhbmRsZVN0YXRlLmFsbGluKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmFkZHJhdGUpIHtcbiAgICAgICAgICAgIF90ZW1wVXNlci51cGRhdGVIYW5kbGVTdGF0ZVRleHQoVGV4YXNVc2VySGFuZGxlU3RhdGUuZGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RlbXBVc2VyLnVwZGF0ZUhhbmRsZVN0YXRlVGV4dChUZXhhc1VzZXJIYW5kbGVTdGF0ZS5mb2xsb3cpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhZGRHb2xkID0gZGF0YS5fZ2FtYmxlIC0gdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuX0N1clR1cm5Db3VudCA9PSAyKSB7XG4gICAgICAgICAgICBpZiAoYWRkR29sZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RHYW1ibGVHb2xkID0gYWRkR29sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLl90dXJuT3Zlcikge1xuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuQWRkVGltZXIoMC42MTgsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godGVtcFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFVzZXIuRW1wdHkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5EZWFsVHVybkNoaXAoKTsgLy/nu5/kuIDlpITnkIbkuIDova7nmoTmiYDmnInnrbnnoIHliqjnlLsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pyJ5Lq65byD54mM5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfZ2l2ZXVwX3RleF9uKHBvczogbnVtYmVyLCB0dXJuT3ZlcjogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fYmZ0YWJsZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBfdGVtcFVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVBvcyhwb3MpO1xuICAgICAgICBpZiAoX3RlbXBVc2VyID09IG51bGwpIHJldHVybjtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwiZ2FtZV9hY3Rpb25fZGl1XCIpO1xuICAgICAgICBfdGVtcFVzZXIuU2hvd0dpdmVVcCgpO1xuICAgICAgICBfdGVtcFVzZXIudXBkYXRlSGFuZGxlU3RhdGVUZXh0KFRleGFzVXNlckhhbmRsZVN0YXRlLmdpdmVVcCk7XG4gICAgICAgIF90ZW1wVXNlci5TdG9wQ2xvY2soKTtcbiAgICAgICAgaWYgKF90ZW1wVXNlci5zZWxmKSB7XG4gICAgICAgICAgICB0aGlzLldhaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHVybk92ZXIpIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnInkurrotK3kubDkuobkv53pmalcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInBvc1wiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiaW5zXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfaW5zdXJhbmNlX3RleF9uKHBvczogbnVtYmVyLCBpbnM6IG51bWJlcikge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKHBvcyArIFwiPT3mnInkurrotK3kubDkuobkv53pmakgaW5zPVwiICsgaW5zKTtcbiAgICAgICAgdmFyIF90ZW1wVXNlciA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5UG9zKHBvcyk7XG4gICAgICAgIGlmIChfdGVtcFVzZXIgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBfdGVtcFVzZXIuU3RvcENsb2NrKCk7XG4gICAgICAgIF90ZW1wVXNlci51cGRhdGVJbnNTdGF0ZVRleHQoaW5zKTtcbiAgICB9XG5cbiAgICAvLyDmnInkurrmjonnur/kuoYgXG4gICAgcHVibGljIHNjX2Rpc2Nvbm5lY3RfbihkYXRhOiBzY19kaXNjb25uZWN0X24pIHtcbiAgICAgICAgbGV0IHBsYXllcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5UG9zKGRhdGEucG9zKTtcbiAgICAgICAgaWYgKHBsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgICBwbGF5ZXIuRGlzY29ubmV0Y09yUmVsaW5lKGRhdGEucmVjb25uZWN0ICE9IDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnp7vkuIDmrKF0b2tlbiAg55So5oi35Y+v6IO95pyJNOS4quaTjeS9nO+8jO+8jOeci+eJjO+8jOS4i+azqO+8jOaUvuW8g++8jCDmr5TniYzjgJDmnaHku7bpmZDliLbjgJEgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfdG9rZW5fdGV4X24oZGF0YTogc2NfdG9rZW5fdGV4X24sIHR1cm5DaGFuZ2U6IGJvb2xlYW4sIGRlbGF5VGltZTogbnVtYmVyID0gMCkge1xuICAgICAgICAvL3VpX3R4dEFsbC50ZXh0ID0gXCLmgLvlpZbmsaA6XCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyKCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5famFja3BvdCk7XG4gICAgICAgIC8vVXBkYXRlSmFja3BvdCgpO1xuICAgICAgICBsZXQgZGVsYXkgPSAwO1xuICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNUdXJuT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVMYXN0SnBvdCgpOyAvL+W9k+WJjei9rue7k+adn+abtOaWsOS4iui9ruW6leaxoOetieS6juaAu+W6leaxoFxuICAgICAgICAgICAgZGVsYXkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5fbXNnaWQgPD0gMCkvL2lzUmVCYWNrKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50b2tlbkFjdGlvbihkYXRhLnBvcywgdHVybkNoYW5nZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2tlbkFjdGlvbihkYXRhLnBvcywgdHVybkNoYW5nZSwgZmFsc2UsIGRlbGF5ICsgMSArIGRlbGF5VGltZSk7XG4gICAgICAgIH0sIGRlbGF5ICsgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2tlbkFjdGlvbihwb3M6IG51bWJlciwgdHVybkNoYW5nZTogYm9vbGVhbiwgaXNSZWJhY2sgPSBmYWxzZSwgZGVsYXlUaW1lOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMuX2JmdGFibGUudXNlckxpc3QuZm9yRWFjaCh0ZW1wVXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcFVzZXIuRW1wdHkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy/mr4/mlrDnmoTkuIDlm57lkIgs6L+Y5Y6f546p5a62LOWkpyzmlbLnrYnmk43kvZznirbmgIFcbiAgICAgICAgICAgIGlmICh0dXJuQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGVtcFVzZXIuUmVzZXRVc2VySGFuZGxlU3RhdGVGb3JUdXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PeaTjeS9nOeOqeWutu+8mnNlcnZlcnBvcz1cIit0ZW1wVXNlci5zZXJ2ZXJwb3MgK1wiLCBwb3M9XCIrcG9zKTtcbiAgICAgICAgICAgIGlmICh0ZW1wVXNlci5zZXJ2ZXJwb3MgPT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgdGVtcFVzZXIuRXhlY3V0ZSh0dXJuQ2hhbmdlLCB0aGlzLm1vZGVsLmxlZnR0aW1lLCBkZWxheVRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGVtcFVzZXIuV2FpdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNSZWJhY2sgJiYgdGVtcFVzZXIuc2VsZiAmJiB0ZW1wVXNlci5zZXJ2ZXJwb3MgPT0gcG9zICYmICF0ZW1wVXNlci5zZWxmKS8v5aaC5p6c5piv6Ieq5bex5Zue5ZCI77yM6KaB5pi+56S65pyN5Yqh5Zmo6Ieq5bex5Zue5ZCI5pe26Ze0aXNSZUJhY2soKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsYXlUaW1lID09PSBcIiwgZGVsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICB0ZW1wVXNlci5TaG93Q2xvY2sodGhpcy5tb2RlbC5sZWZ0dGltZSAtIGRlbGF5VGltZSwgdGhpcy5tb2RlbC5sZWZ0dGltZSAtIGRlbGF5VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuRGVhbEN1clBhbHllcih0dXJuQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5TaG93Q29tbW9uQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5TZW5kT3BlbkNhcmQodHJ1ZSk7XG4gICAgICAgIHRoaXMuRGVhbE11dGlsSmFja3BvdCgpO1xuICAgICAgICBpZiAodHVybkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5EZWFsVHVybkZhUGFpKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqXRva2VuICDnlKjmiLflj6/og73mnInkuKTkuKrmk43kvZzvvIzpgInkv53pop3vvIzmiJbkuI3kv50gIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGF0YVwiPjwvcGFyYW0+XG4gICAgcHVibGljIHNjX2luc3Rva2VuX3RleF9uKHBvczogbnVtYmVyLCB0dXJuQ2hhbmdlOiBib29sZWFuLCBpc0ZpcnN0VHVybjogYm9vbGVhbiwgX3BvczJTaG91cGFpOiBDb21tb25Qb3NWYWxMaXN0U0RbXSwgX3BvczJ3aW46IENvbW1vblBvc1ZhbFNEW10sIHBvdGxpc3Q6IG51bWJlcltdLCBpcG9zOiBDb21tb25Qb3NWYWxTRFtdKSB7XG4gICAgICAgIGxldCBkZWxheTogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlzVHVybk92ZXIpIHtcbiAgICAgICAgICAgIGRlbGF5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuQWRkVGltZXIoZGVsYXksICgpID0+IHtcbiAgICAgICAgICAgIC8v5YWI5pi+56S65L+d6Zmp5qih5byP546p5a6255qE6aaW54mMXG4gICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godGVtcFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wVXNlci5FbXB0eSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgLy/mmL7npLrkv53pmanmqKHlvI/njqnlrrbnmoTpppbniYxcbiAgICAgICAgICAgICAgICBpZiAoX3BvczJTaG91cGFpICE9IG51bGwgJiYgX3BvczJTaG91cGFpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3BvczJTaG91cGFpLmZvckVhY2godGVtcFBvc1Nob3VwYWkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBVc2VyLnBsYXllci51c2VyaWQgPT0gdGVtcFBvc1Nob3VwYWkucG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVzZXIuU2hvd0luc3VyYW5jZXJDYXJkKHRlbXBQb3NTaG91cGFpLnZhbGxpc3QpOyAvL+S/nemZqeaXtuWAmemcgOimgeaJgOacieeOqeWutuiDveeci+WIsOS/nemZqeeOqeWutueahOmmlueJjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVc2VyLmlzSW5zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL+WxleekuuWFrOeJjOWQju+8jOaJjeaPkOekuui0reS5sOS/nemZqVxuICAgICAgICAgICAgbGV0IGRpc0NvdW50ID0gdGhpcy5tb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggLSB0aGlzLmN1ckNvbW1vbmRDYXJkcy5sZW5ndGggPj0gMCA/IHRoaXMubW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoIC0gdGhpcy5jdXJDb21tb25kQ2FyZHMubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIGxldCBkZWxheXkgPSBkaXNDb3VudCA8PSAwID8gMCA6IChkaXNDb3VudCA+PSAzID8gMiAqIChkaXNDb3VudCAtIDMpICsgMS41IDogMiAqIChkaXNDb3VudCAtIDEpICsgMSk7XG4gICAgICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5BZGRUaW1lcihkZWxheXkgKyAwLjUsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godGVtcFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFVzZXIuRW1wdHkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvL+avj+aWsOeahOS4gOWbnuWQiCzov5jljp/njqnlrrYs5aSnLOaVsuetieaTjeS9nOeKtuaAgVxuICAgICAgICAgICAgICAgICAgICBpZiAodHVybkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVzZXIuUmVzZXRVc2VySGFuZGxlU3RhdGVGb3JUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBVc2VyLnNlcnZlcnBvcyA9PSBwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVc2VyLkluc3VyYW5jZUV4ZWN1dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpcG9zID09IG51bGwgfHwgaXBvcy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5XYWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGlwb3MuZmluZCh2YWx1ZSA9PiB7IHJldHVybiB2YWx1ZS5wb3MgPT0gdGVtcFVzZXIucGxheWVyLnVzZXJpZDsgfSk7IC8vc2VydmVycG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT0gbnVsbCkvL+i0reS5sOS/nemZqeeOqeWutuS4reS4jeWMheWQq+W9k+WJjeeOqeWutu+8jOetieW+hVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5XYWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL+aYvuekuuS/nemZqeaooeW8j+eOqeWutueahOi1oueJjOamgueOh1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3BvczJ3aW4gIT0gbnVsbCAmJiBfcG9zMndpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcG9zMndpbi5mb3JFYWNoKHRlbXBQb3Myd2luID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFVzZXIucGxheWVyLnVzZXJpZCA9PSB0ZW1wUG9zMndpbi5wb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVzZXIuU2hvd0luc1dpblBlcl9udW0oVUlVdGlsLk51bWJlclRvSW50KHRlbXBQb3Myd2luLnZhbCkpOyAvL+S/nemZqeaXtuWAmemcgOimgeaJgOacieeOqeWutuiDveeci+WIsOS/nemZqeeOqeWutueahOiOt+iDnOavlOS+i1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5VcGRhdGVMYXN0SnBvdCgpO1xuICAgICAgICAgICAgLy/lsZXnpLrmiYvniYzlkI7lho3lsZXnpLrlhazniYxcbiAgICAgICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLkFkZFRpbWVyKDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dDb21tb25DYXJkcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNob3dJbnNKYWNrcG90KHBvdGxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacquW8gOS/nemZqe+8jOeOqeWutmFsbGlu5ZCO5YWI5bGV56S65omL54mM5YaN5pKt5pS+5YWs54mMLOWIt+aWsOWIhuaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNjX0FsbGluX3RleF9uKF9wb3MyU2hvdXBhaTogQ29tbW9uUG9zVmFsTGlzdFNEW10sIHBvdGxpc3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBkZWxheSA9IDA7XG4gICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc1R1cm5PdmVyKSBkZWxheSArPSAxO1xuICAgICAgICB0aGlzLlVwZGF0ZUxhc3RKcG90KCk7XG4gICAgICAgIHRoaXMuc2hvd0luc0phY2twb3QocG90bGlzdCk7XG4gICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLkFkZFRpbWVyKGRlbGF5LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godGVtcFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wVXNlci5FbXB0eSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgLy9hbGxpbuWQjuaYvuekuueOqeWutueahOmmlueJjFxuICAgICAgICAgICAgICAgIGlmIChfcG9zMlNob3VwYWkgIT0gbnVsbCAmJiBfcG9zMlNob3VwYWkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfcG9zMlNob3VwYWkuZm9yRWFjaCh0ZW1wUG9zU2hvdXBhaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFVzZXIucGxheWVyLnVzZXJpZCA9PSB0ZW1wUG9zU2hvdXBhaS5wb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS/nemZqeaXtuWAmemcgOimgeaJgOacieeOqeWutuiDveeci+WIsOS/nemZqeeOqeWutueahOmmlueJjFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5TaG93SW5zdXJhbmNlckNhcmQodGVtcFBvc1Nob3VwYWkudmFsbGlzdCk7IC8v5L+d6Zmp5pe25YCZ6ZyA6KaB5omA5pyJ546p5a626IO955yL5Yiw5L+d6Zmp546p5a6255qE6aaW54mMXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5lbmREZWxheSA9IHRydWU7XG4gICAgICAgICAgICAvL+WxleekuuaJi+eJjOWQjuWGjeWxleekuuWFrOeJjFxuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuQWRkVGltZXIoMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuU2hvd0NvbW1vbkNhcmRzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgRGVhbE11dGlsSmFja3BvdCgpIHtcbiAgICAgICAgdGhpcy5zaG93SW5zSmFja3BvdChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wb3RsaXN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucG90bGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2phY2twb3RwYXJhbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzd2l0Y2ggKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvdGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QxLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90Mi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfamFja3BvdDMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3Q0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGphY2twb3QxLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvdGxpc3RbMV0pICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90Mi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfamFja3BvdDMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3Q0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGphY2twb3QxLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvdGxpc3RbMV0pICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90eHRqYWNrcG90Mi50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wb3RsaXN0WzJdKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfamFja3BvdDMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3Q0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3QzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGphY2twb3QxLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvdGxpc3RbMV0pICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90eHRqYWNrcG90Mi50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wb3RsaXN0WzJdKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0amFja3BvdDMudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucG90bGlzdFszXSkgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2phY2twb3Q0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90MS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90Mi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90My52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qYWNrcG90NC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90eHRqYWNrcG90MS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wb3RsaXN0WzFdKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0amFja3BvdDIudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucG90bGlzdFsyXSkgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R4dGphY2twb3QzLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvdGxpc3RbM10pICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90eHRqYWNrcG90NC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wb3RsaXN0WzRdKSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudWlfamFja3BvdHBhcmFudC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZENoaXBQb29sKGFjaG91bWE6IGZndWkuR0NvbXBvbmVudCkge1xuICAgICAgICBpZiAodGhpcy5fY2hpcHBvb2xMaXN0ID09IG51bGwpIHRoaXMuX2NoaXBwb29sTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9jaGlwcG9vbExpc3QucHVzaChhY2hvdW1hKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QUNoaXBQb3NpdGlvbihraW5kOiBzdHJpbmcsIF9zdWdnZXRwb3M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcbiAgICAgICAgaWYgKHRoaXMuQ2hpcFJlY29yZExpc3QgPT0gbnVsbCkgdGhpcy5DaGlwUmVjb3JkTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2hpcFJlY29yZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhMTogQ2hpcFBvc2l0aW9uVGV4ID0gdGhpcy5DaGlwUmVjb3JkTGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChkYXRhMS5raW5kID09IGtpbmQgJiYgZGF0YTEuY291bnQgPCAxMCkge1xuICAgICAgICAgICAgICAgIGRhdGExLmNvdW50Kys7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBkYXRhMS5iZWdpblYzLng7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSA5ICogKGRhdGExLmNvdW50IC0gMSkgKyBkYXRhMS5iZWdpblYzLnk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLnYyKHgsIHkpOyAvLyhWZWN0b3IzLnVwICogOSAqIChkYXRhMS5jb3VudCAtIDEpKSArIGRhdGExLmJlZ2luVjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgQ2hpcFBvc2l0aW9uVGV4KCk7XG4gICAgICAgIGRhdGEuY291bnQgPSAxO1xuICAgICAgICBkYXRhLmtpbmQgPSBraW5kO1xuICAgICAgICBsZXQgdjEgPSBjYy52MigodGhpcy5DaGlwUmVjb3JkTGlzdC5sZW5ndGggJSA1ICogNTAgLSA1MCksIDApO1xuICAgICAgICBsZXQgdjIgPSBjYy52MigwLCAtMSAqIChVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5DaGlwUmVjb3JkTGlzdC5sZW5ndGggLyA1KSAqIDUwKSk7XG4gICAgICAgIF9zdWdnZXRwb3MgPSBjYy52Mihfc3VnZ2V0cG9zLnggKyB2MS54LCBfc3VnZ2V0cG9zLnkgKyB2Mi55KTtcbiAgICAgICAgZGF0YS5iZWdpblYzID0gX3N1Z2dldHBvcztcbiAgICAgICAgdGhpcy5DaGlwUmVjb3JkTGlzdC5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YS5iZWdpblYzO1xuICAgIH1cblxuICAgIC8vICAgICAjZW5kcmVnaW9uIFxuICAgIC8vIOetueeggeWKqOeUu+Wbnuiwg++8jOmcgOimgeS4i+WutuWBmuWHuuWGs+etluS5i+WQjuWGjeWbnuiwg++8jOaJgOS7peimgee8k+WtmOS4gOasoSBcbiAgICBwdWJsaWMgY2hpcEFuaUNhbGxCYWNrTGlzdDogRnVuY3Rpb25bXTtcbiAgICBwdWJsaWMgY2FjaGVDaGlwQW5pQ2FsbEJhY2tMaXN0OiBGdW5jdGlvbltdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5b2T5YmN546p5a625aSE55CG57uT5p2fXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgRGVhbEN1clBhbHllcih0dXJuQ2hhbmdlOiBib29sZWFuLCBnYW1lb3ZlciA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChnYW1lb3Zlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hpcEFuaUNhbGxCYWNrTGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwQW5pQ2FsbEJhY2tMaXN0LmZpbmQoKGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwQW5pQ2FsbEJhY2tMaXN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlQ2hpcEFuaUNhbGxCYWNrTGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZUNoaXBBbmlDYWxsQmFja0xpc3QuZmluZCgoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQ2hpcEFuaUNhbGxCYWNrTGlzdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hpcEFuaUNhbGxCYWNrTGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoaXBBbmlDYWxsQmFja0xpc3QuZmluZCgoYSkgPT4ge1xuICAgICAgICAgICAgICAgIGEoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2hpcEFuaUNhbGxCYWNrTGlzdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVDaGlwQW5pQ2FsbEJhY2tMaXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpcEFuaUNhbGxCYWNrTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jYWNoZUNoaXBBbmlDYWxsQmFja0xpc3QuZmluZCgoYSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpcEFuaUNhbGxCYWNrTGlzdC5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jYWNoZUNoaXBBbmlDYWxsQmFja0xpc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0dXJuQ2hhbmdlICYmIHRoaXMuX2NoaXBwb29sTGlzdCAhPSBudWxsICYmIHRoaXMuX2NoaXBwb29sTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdXNlci5EZWFsVHVybkNoaXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vdWlfYmdNYW5nbyDlt6bkuIrop5LnmoTmgLvlpZbmsaBcbiAgICBwdWJsaWMgU2V0TWFuZ29PZlRhYmxlKF9tb25nb09mVGFibGU6IG51bWJlcikge1xuICAgICAgICBsZXQgbW9uZ29PZlRhYmxlID0gVUlVdGlsLk51bWJlclRvSW50KF9tb25nb09mVGFibGUgLyAxMDApO1xuICAgICAgICBsZXQgaW1nOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgICAgICBsZXQgc3RyTnVtID0gbW9uZ29PZlRhYmxlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLnVpX2dsb2JhbGluZm8gPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIGltZyA9IHRoaXMudWlfZ2xvYmFsaW5mby5nZXRDaGlsZChcInR4dE1hbmdvXCIgKyBpKS5hc1RleHRGaWVsZDtcblxuICAgICAgICAgICAgbGV0IG51bSA9IChzdHJOdW0ubGVuZ3RoIC0gaSkgPj0gMCA/IHN0ck51bS5jaGFyQXQoc3RyTnVtLmxlbmd0aCAtIGkpIDogXCIwXCI7XG4gICAgICAgICAgICBpbWcudGV4dCA9IG51bSA9PSBudWxsID8gXCIwXCIgOiBudW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFNldENhY2hlQ2hvdW1hQW5pKF9jYWxsOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldENlYWNoQ2hvdW1hQW5pXCIpO1xuICAgICAgICBpZiAodGhpcy5jYWNoZUNoaXBBbmlDYWxsQmFja0xpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUNoaXBBbmlDYWxsQmFja0xpc3QgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlQ2hpcEFuaUNhbGxCYWNrTGlzdC5wdXNoKF9jYWxsKTtcbiAgICB9XG4gICAgcHVibGljIEdldE9wZW5DYXJkcyhwb3M6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgdmFyIGxpc3Q6IG51bWJlcltdID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbC5fcG9zMm9wZW5QYWkuZm9yRWFjaChwMmNhcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHAyY2FyZC5wb3MgPT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgbGlzdCA9IHAyY2FyZC52YWxsaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGlzdDtcblxuICAgIH1cbiAgICBwdWJsaWMgU2hvd1VJQmFsZW5jZVBhbmVsKGRhdGE6IEJpZ0VuZEluZm9TRF90ZXgsIGlzbWFuYWdlciA9IHRydWUpIHtcbiAgICAgICAgLy8gaWYgKFJvb3RPYmplY3QgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgLy/mt7vliqDmnaHku7Yo5Y+v6IO96ZmQ5Yi25p2h5Lu2IDEuIOingueci+iAhSlcbiAgICAgICAgbGV0IGlzQ2FuU2hvdyA9IGRhdGEgIT0gbnVsbDtcbiAgICAgICAgaWYgKGlzQ2FuU2hvdykge1xuICAgICAgICAgICAgQmFsZW5jZUN0ci5pbnN0YW5jZS5Nb2RlbC5iciA9IGRhdGEuYnI7XG4gICAgICAgICAgICBCYWxlbmNlQ3RyLmluc3RhbmNlLk1vZGVsLmFsbGludG9nb2xkID0gZGF0YS5hbGxpbnRvZ29sZDtcbiAgICAgICAgICAgIEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwuYmVnaW50aW1lID0gZGF0YS5idGltZTtcbiAgICAgICAgICAgIEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwuZHVyYXRpb24gPSBkYXRhLmR1cjtcbiAgICAgICAgICAgIEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwuZW5kdGltZSA9IGRhdGEuZXRpbWU7XG4gICAgICAgICAgICBCYWxlbmNlQ3RyLmluc3RhbmNlLk1vZGVsLmdhaW5saXN0ID0gZGF0YS5nYWlubGlzdDtcbiAgICAgICAgICAgIEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwucGNvdW50ID0gZGF0YS5wYztcbiAgICAgICAgICAgIEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwudGF4ID0gZGF0YS50YXg7XG4gICAgICAgICAgICBCYWxlbmNlQ3RyLmluc3RhbmNlLk1vZGVsLkluc3VyVG90YWwgPSBkYXRhLkluc3VyVG90YWw7XG4gICAgICAgICAgICBCYWxlbmNlQ3RyLmluc3RhbmNlLk1vZGVsLmNsdWJXbCA9IGRhdGEuY2x1YldsO1xuICAgICAgICAgICAgQmFsZW5jZUN0ci5pbnN0YW5jZS5Nb2RlbC5jbHVuYmlucyA9IGRhdGEuY2x1bmJpbnM7XG4gICAgICAgICAgICBCYWxlbmNlQ3RyLmluc3RhbmNlLk1vZGVsLmlzbmFtZ2VyID0gaXNtYW5hZ2VyO1xuICAgICAgICAgICAgQmFsZW5jZUN0ci5pbnN0YW5jZS5Nb2RlbC5Jc1N1cHBlciA9IGRhdGEuSXNTdXBwZXI7XG4gICAgICAgICAgICB0aGlzLmJhbGVuY2VDb21wLk9wZW4oNTEsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLlJvb21fdG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhbGVuY2VDb21wLkhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgU2hvd1VJQ2hhdFBhbmVsKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICAvL+a3u+WKoOadoeS7tijlj6/og73pmZDliLbmnaHku7YpXG4gICAgICAgIGxldCBpc0NhblNob3cgPSBpc1Nob3c7XG4gICAgICAgIGlmIChpc0NhblNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdENvbXAuU2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGF0Q29tcC5IaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIERlYWxUdXJuRmFQYWkoKSB7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRSZXN1bHRXaW5Hb2xkKHdpbkdvbGQ6IENvbW1vblBvc1ZhbFNEW10pIHtcbiAgICAgICAgbGV0IHRlbXBJdGVtOiBDb21tb25Qb3NWYWxTRCA9IG51bGw7XG4gICAgICAgIGxldCB0ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2luR29sZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcEl0ZW0gPSB3aW5Hb2xkW2ldO1xuICAgICAgICAgICAgaWYgKHRlbXBJdGVtLnZhbCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGVtcFVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh0ZW1wSXRlbS5wb3MpO1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wVXNlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLnjqnlrrbkuI3lrZjlnKjvvJpcIiArIHRlbXBJdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJdGVtLnZhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVc2VyLlNob3dVSVRvcFRpcCh0ZW1wSXRlbS52YWwgPiAwID8gXCIrXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRlbXBJdGVtLnZhbCkgOiBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRlbXBJdGVtLnZhbCkgKyBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5TaG93V2luUGVyKFVJVXRpbC5OdW1iZXJUb0ludCh0ZW1wSXRlbS52YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICAvL+e7k+eul+eahOaXtuWAmemakOiXj+S4iuaWueeahOaTjeS9nOeKtuaAgeWSjOS/nemZqeS/oeaBr1xuICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci5TaG93VUlVc2VySGFuZGxlU3RhdGUoLTEpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wVXNlci51cGRhdGVJbnNTdGF0ZVRleHQoLTEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93VUlEZXNrVGlwKHRpcCA9IG51bGwsIGRlbGF5ID0gMSkge1xuICAgICAgICB0aGlzLnVpX2JnRGVza1RpcC52aXNpYmxlID0gKHRpcCAhPSBudWxsKTtcbiAgICAgICAgdGhpcy51aV90eHREZXNrVGlwLnZpc2libGUgPSAodGlwICE9IG51bGwpO1xuICAgICAgICBpZiAodGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0RGVza1RpcC50ZXh0ID0gdGlwO1xuICAgICAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudWlfdHh0RGVza1RpcC50cmFuc2Zvcm0uRE9Nb3ZlWiAoMSwgZGVsYXkpLk9uQ29tcGxldGUgKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvd1VJRGVza1RpcChudWxsKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc2NfdGphY2twb3RMb2coZGF0YTogc2NfdGphY2twb3RMb2cpIHtcbiAgICAgICAgaWYgKHRoaXMuamFja3BvdENvbXAgIT0gbnVsbCAmJiB0aGlzLmphY2twb3RDb21wLmZndWlDb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5qYWNrcG90Q29tcC5VcGRhdGVMb2dEYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzY19nZXRhbGxqYWNrcG90X3RleChkYXRhOiBzY19nZXRhbGxqYWNrcG90X3RleCkge1xuICAgICAgICBpZiAodGhpcy5qYWNrcG90Q29tcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAvLyB0aGlzLmphY2twb3RDb21wLlNob3coKTtcbiAgICAgICAgICAgIHRoaXMuamFja3BvdENvbXAuVXBkYXRlSmFja3BvdERhdGEoZGF0YS5fYmFzZTJwb3QpOy8vLCBkYXRhLl9tYXgsIGRhdGEucGxvZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI3JlZ2lvbiDlrp7ml7bmiJjnu6nnlYzpnaIs54mM5bGA5Zue6aG+55WM6Z2iXG4gICAgcHVibGljIFVwZGF0ZVJlY29yZFZpZXcoZGF0YTogc2NfZ2V0Z2Fpbl90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkQ29tcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjb3JkQ29tcCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRDb21wLlNob3coKTtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkQ29tcC5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5TZXRSZW1haW5UaW1lKGRhdGEubGVmdHRpbWUpO1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRDb21wLlVwZGF0ZURhdGEoZGF0YS5qYWNrcG90LCBkYXRhLmdsaXN0LCBkYXRhLndsaXN0LCBkYXRhLkluc3Bvb2wsIGRhdGEuZ29sZG91dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZUhpc3RvcnlWaWV3X2RhdGEoZGF0YTogc2NfdGhpc3RvcnlfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnlDb21wICE9IG51bGwgJiYgdGhpcy5oaXN0b3J5Q29tcC5mZ3VpQ29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUNvbXAuVXBkYXRlRGF0YV9zYyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgVXBkYXRlSGlzdG9yeVZpZXdfZGF0YTIoZGF0YTogc2Nfcm9vbWhpc3RvcnlfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnlDb21wICE9IG51bGwgJiYgdGhpcy5oaXN0b3J5Q29tcC5mZ3VpQ29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUNvbXAuVXBkYXRlRGF0YShkYXRhLnVsaXN0LCBkYXRhLnR1bGlzdCwgdGhpcy5tb2RlbC50YWJsZWlkLCB0aGlzLm1vZGVsLmJyYXRlLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUNvbXAudWlfYnRuQ29sbGVjdEhpc3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC51aV9idG5TaGFyZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZUhpc3RvcnlWaWV3X3B0bm4odWxpc3Q6IFBJbmZvU0RbXSwgdHVsaXN0OiBUZXhUSW5mb1NEW10sIGQ6IG51bWJlciwgU2hvd0NhcmQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5oaXN0b3J5Q29tcCAhPSBudWxsICYmIHRoaXMuaGlzdG9yeUNvbXAuZmd1aUNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlDb21wLlVwZGF0ZURhdGEodWxpc3QsIHR1bGlzdCwgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudGFibGVpZCwgZCwgU2hvd0NhcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVDb2xsZWN0RGF0YShzYXZhTnVtOiBudW1iZXIsIGluZm9JZDogc3RyaW5nLCBJc1NhdmE6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaGlzdG9yeUNvbXAgIT0gbnVsbCAmJiB0aGlzLmhpc3RvcnlDb21wLmZndWlDb21wb25lbnQudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5Q29tcC5VcGRhdGVDb2xsZWN0RGF0YShzYXZhTnVtLCBpbmZvSWQsIElzU2F2YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gICAgICNlbmRyZWdpb25cbiAgICAvLyAgICAgI3JlZ2lvbiBjaGlwIOWKqOeUu+ebuOWFs1xuXG4gICAgcHJpdmF0ZSBHZW5lcmF0ZUNoaXBNb3ZlKCk6IFVJTW92ZU1vbm9GZ3VpIHtcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuY2hpcFBvb2wuR2V0Q2FjaGVPYmplY3QoXCJJbWdDaGlwQ2xvbmVcIiwgdGhpcy51aV9jaGlwcG9vbHJvb3QuYXNDb20sIFwiSW1nQ2hpcFRlbXBsZXRlXCIpO1xuXG4gICAgICAgIHJldHVybiBvYmogYXMgVUlNb3ZlTW9ub0ZndWk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlVG9UYWJsZVRpbWUgPSAwLjU7XG4gICAgcHJpdmF0ZSBtb3ZlVG9Vc2VyVGltZSA9IDAuMjU7XG4gICAgcHJpdmF0ZSBlbmRUaW1lcjogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSB0aW1lT3V0VGltZXI6IEZ1bmN0aW9uO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvrflt57miZHlhYvpppbms6jnm7TmjqXooqvmlLbliLDlpZbmsaDliqjnlLtcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImZpcnN0R2FtYmxlXCI+PC9wYXJhbT5cbiAgICBwcml2YXRlIG1vdmVGaXJzdEdhbWJsZVRvVGFiZWwodXNlcklkOiBudW1iZXIsIF9jdXJHYW1ibGU6IG51bWJlcikge1xuICAgICAgICB2YXIgdXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh1c2VySWQpO1xuICAgICAgICBpZiAodXNlckNvbXAgPT0gbnVsbCB8fCB1c2VyQ29tcCA9PSBudWxsIHx8IHVzZXJDb21wLnBsYXllciA9PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHVzZXJDb21wLlNob3dVSUdhbWJsZShmYWxzZSk7IC8v5Yqo55S75omn6KGM55qE5pe25YCZ6ZqQ6JeP5LiL5rOoXG4gICAgICAgIC8vLy/otaLnmoTnjqnlrrYg5piv5ZCm5LiN6ZyA6KaB6aOeXG4gICAgICAgIGxldCBjaGlwTW92ZTogVUlNb3ZlTW9ub0ZndWkgPSB0aGlzLkdlbmVyYXRlQ2hpcE1vdmUoKTtcbiAgICAgICAgdGhpcy5Nb3ZlQ2hpcChjaGlwTW92ZSwgdXNlckNvbXAuZmd1aUNvbXBvbmVudCwgdGhpcy51aV9qYWNrcG90YmcuYXNDb20sIHRoaXMubW92ZVRvVGFibGVUaW1lKTtcbiAgICB9XG4gICAgcHVibGljIG1vdmVNeUdhbWJsZVRvVGFibGVHYW1lYmxlKGNoYW5nZUdvbGQ6IENvbW1vblBvc1ZhbFNEW10gPSBudWxsKSB7XG4gICAgICAgIHZhciBpc0hhdmVDaG91bWEgPSBmYWxzZTtcbiAgICAgICAgbGV0IF90ZW1wVXNlckxpc3Q6IFRleGFzVXNlckNvbXBbXSA9IHRoaXMuX2JmdGFibGUudXNlckxpc3Q7XG4gICAgICAgIF90ZW1wVXNlckxpc3QuZm9yRWFjaCh1c2VyQ29tcCA9PiB7XG4gICAgICAgICAgICBpZiAodXNlckNvbXAgPT0gbnVsbCB8fCB1c2VyQ29tcC5mZ3VpQ29tcG9uZW50ID09IG51bGwgfHwgdXNlckNvbXAucGxheWVyID09IG51bGwpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgICAgICAgdXNlckNvbXAuU2hvd1VJR2FtYmxlKGZhbHNlKTsgLy/liqjnlLvmiafooYznmoTml7blgJnpmpDol4/kuIvms6hcbiAgICAgICAgICAgIC8vLy/otaLnmoTnjqnlrrYg5piv5ZCm5LiN6ZyA6KaB6aOeXG4gICAgICAgICAgICBpZiAodXNlckNvbXAuY3VyR2FtYmxlID4gMCkgLy/mnInnrbnnoIHnmoTnjqnlrrbvvIznrbnnoIHpo57lkJHlpZbmsaBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpcE1vdmU6IFVJTW92ZU1vbm9GZ3VpID0gdGhpcy5HZW5lcmF0ZUNoaXBNb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlQ2hpcChjaGlwTW92ZSwgdXNlckNvbXAudWlfZ2FtYmxlQmcuYXNDb20sIHRoaXMudWlfamFja3BvdGJnLmFzQ29tLCB0aGlzLm1vdmVUb1RhYmxlVGltZSk7XG4gICAgICAgICAgICAgICAgaXNIYXZlQ2hvdW1hID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc0hhdmVDaG91bWEpIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheShcIlwiLCBcImdhbWVfY2hpcHNfdG9fdGFibGVcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBEZWxheU1vdmVUYWJsZUdhbWJsZVRvV2luZXIodGltZTogbnVtYmVyLCBjaGFuZ2VHb2xkOiBDb21tb25Qb3NWYWxTRFtdKSB7XG4gICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLkFkZFRpbWVyKHRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb2RlbC5pc0dhbWluZykvLyAmJiB0aGlzLlJvb3RPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUYWJsZUdhbWVibGVUb1dpbmVyKGNoYW5nZUdvbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmVUYWJsZUdhbWVibGVUb1dpbmVyKGNoYW5nZUdvbGQ6IENvbW1vblBvc1ZhbFNEW10pIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuUm9vdE9iamVjdCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICAvLyB0aGlzLlNob3dVSUphY2twb3QgKGZhbHNlKTsgLy/miafooYzmlLbpkrHnmoTml7blgJkg6ZqQ6JeP5qGM6Z2i55qE5oC75aWW5rGgXG4gICAgICAgIHZhciB1c2VyQ29tcDogVGV4YXNVc2VyQ29tcCA9IG51bGw7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGNoYW5nZUdvbGQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbCA+IDApIHsgLy/otaLlrrbmiY3po57liqjnlLtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIHVzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoaXRlbS5wb3MpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyQ29tcCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi546p5a625LiN5a2Y5ZyoIFwiICsgaXRlbS5wb3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlwTW92ZTogVUlNb3ZlTW9ub0ZndWkgPSB0aGlzLkdlbmVyYXRlQ2hpcE1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGNoaXBNb3ZlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVDaGlwKGNoaXBNb3ZlLCB0aGlzLnVpX2phY2twb3RiZy5hc0NvbSwgdXNlckNvbXAudWlfdHh0R29sZC5hc0NvbSwgdGhpcy5tb3ZlVG9Vc2VyVGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwiZ2FtZV9jaGlwc190b19wbGF5ZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIui1ouWutuW8gOWniyDpo57nrbnnoIEsIOi1ouWutuS4quaVsDpcIiArIGNvdW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ21wOiBGdW5jdGlvbltdID0gbnVsbDtcbiAgICBwcml2YXRlIE1vdmVDaGlwKGNoaXA6IFVJTW92ZU1vbm9GZ3VpLCBmcm9tOiBmZ3VpLkdDb21wb25lbnQsIHRvOiBmZ3VpLkdDb21wb25lbnQsIHRpbWU6IG51bWJlciwgY21wOiBGdW5jdGlvbiA9IG51bGwsIGVhc2VUeXBlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hpcC5mcm9tVHM9XCIgKyBjaGlwLmZyb21UcyArIFwiLCxmcm9tPVwiICsgZnJvbSk7XG4gICAgICAgIGNoaXAuU2hvdygpO1xuICAgICAgICBjaGlwLmZyb21UcyA9IGZyb207XG4gICAgICAgIGNoaXAuZml4ZWRUaW1lID0gdGltZTtcbiAgICAgICAgY2hpcC5pc1VzZVNwZWVkID0gZmFsc2U7XG4gICAgICAgIGNoaXAuZWFzZSA9IGVhc2VUeXBlO1xuICAgICAgICB2YXIgb2JqID0gY2hpcC5hc0NvbTtcbiAgICAgICAgaWYgKGNtcCAhPSBudWxsKSB0aGlzLm9uQ21wLnB1c2goY21wKTtcbiAgICAgICAgaWYgKHRoaXMub25DbXAgPT0gbnVsbCkgdGhpcy5vbkNtcCA9IFtdO1xuICAgICAgICB0aGlzLm9uQ21wLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb2JqLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5jaGlwUG9vbC5EZXN0cm95T2JqZWN0KG9iaik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuetueeggeWbnuiwg+aVsOmHj++8mlwiICsgdGhpcy5vbkNtcC5sZW5ndGgpXG4gICAgICAgIGNoaXAuTW92ZSh0bywgdGhpcy5vbkNtcCk7XG4gICAgfVxuICAgIC8vICAgICAjZW5kcmVnaW9uXG4gICAgLy8gICAgICNyZWdpb24gVUkg5bGV56S655u45YWzIFxuICAgIHB1YmxpYyBTaG93VUlKYWNrcG90KGlzU2hvdyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy51aV9qYWNrcG90YmcudmlzaWJsZSA9IGlzU2hvdztcbiAgICAgICAgdGhpcy51aV9sYXN0amFja3BvdGJnLnZpc2libGUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgLy8x77ya5Yid5aeL6K6+572u77yaIDLvvJog5q+P5Zue5ZCI6K6+572u77yaIDPvvJrnu5Pnrpforr7nva7vvJogNO+8muS4remAlOaBouWkjeiuvue9rlxuICAgIHB1YmxpYyBVcGRhdGVKYWNrcG90KGphY2twb3QgPSAtMSwgbWFuZ28gPSAtMSkge1xuICAgICAgICB0aGlzLmRpY2hpID0gamFja3BvdCA+IDAgPyBqYWNrcG90IDogdGhpcy5tb2RlbC5fanBvdDtcbiAgICAgICAgY29uc29sZS5sb2coXCLlupXmsaAgOiBcIiArIHRoaXMuZGljaGkpO1xuICAgICAgICBpZiAodGhpcy51aV90eHRBbGwpIHRoaXMudWlfdHh0QWxsLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzk2KSArIFwiIDogXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwVG9LKHRoaXMuZGljaGkpOy8v5bqV5rGgXG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVMYXN0SnBvdChsYXN0SnBvdCA9IC0xKSB7XG4gICAgICAgIHRoaXMudWlfbGFzdHR4dEFsbC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMFRvSyhsYXN0SnBvdCA+IDAgPyBsYXN0SnBvdCA6IHRoaXMubW9kZWwuX2xhc3RqcG90KSArIFwiXCI7XG4gICAgfVxuICAgIHB1YmxpYyBIaWRlVUlUYWtlR29sZFBhbmVsKCkge1xuICAgICAgICB0aGlzLlNob3dVSVRha2VHb2xkUGFuZWwoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDaGVja0F1dG9TaXREb3duKGxvY2FscG9zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3NTaXQgPSBsb2NhbHBvcztcbiAgICAgICAgLy8g5L2Z6aKd5b+F6aG75aSn5LqO5byA5bGA5LiL5rOoKOetieS6jumDveS4jeihjCzmnI3liqHlmajmmK/ov5nmoLfliKTmlq3nmoQpXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLnRhYmxlTG9ja0dvbGQgPiB0aGlzLm1vZGVsLm1pblN0YXJ0R2FtYmxlICYmIHRoaXMubW9kZWwudGFibGVMb2NrR29sZCA+IDApIHtcbiAgICAgICAgICAgIC8v5a2Y5Zyo6ZSB5a6a6YeR5biBLOS4lOa7oei2s+acgOWwj+W8gOWni+S4i+azqCDliJnoh6rliqjlhaXluqdcbiAgICAgICAgICAgIHRoaXMuaXNLZWVwID0gdGhpcy5fYmZ0YWJsZS5teVVzZXIudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0ID8gMSA6IDA7XG4gICAgICAgICAgICAvL+iHquWKqOW4puWFpeS8oDAgICBcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2F1dG9TaXREb3duX3RleCh0aGlzLnBvc1NpdCwgdGhpcy5tb2RlbC5jdXJTQ2x1YiAhPSBudWxsID8gdGhpcy5tb2RlbC5jdXJTQ2x1Yi5jaWQgOiAwLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNLZWVwID0gdGhpcy5fYmZ0YWJsZS5teVVzZXIudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0ID8gMSA6IDA7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19zaXRkb3dud2FpdF90ZXgodGhpcy5wb3NTaXQsIHRoaXMuaXNLZWVwKTtcbiAgICAgICAgICAgIC8vIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2F1dG9TaXREb3duX3RleCh0aGlzLnBvc1NpdCwgdGhpcy5tb2RlbC5jdXJTQ2x1YiAhPSBudWxsID8gdGhpcy5tb2RlbC5jdXJTQ2x1Yi5jaWQgOiAwLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBXYWl0VG9UYWtlSW4oKSB7XG4gICAgICAgIHRoaXMuU2hvd1VJVGFrZUdvbGRQYW5lbCh0cnVlLCB0aGlzLnBvc1NpdCwgdHJ1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBJc0NhbkFkZEdvbGQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBjdXJHb2xkID0gdGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyICE9IG51bGwgPyBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC50YWJsZUxvY2tHb2xkKSA6IDA7XG4gICAgICAgIGxldCBtaW5CcmF0ZSA9IHRoaXMubW9kZWwuaW50b3JhdGVfbWluOy8vVUlVdGlsLk51bWJlclRvSW50KHRoaXMubW9kZWwuYnJhdGUgKiAyMDApOyAvL1VJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1vZGVsLmJyYXRlICogMjAwICogdGhpcy5tb2RlbC5pbnRvcmF0ZV9taW4pO1xuICAgICAgICBsZXQgbWF4QnJhdGUgPSB0aGlzLm1vZGVsLmludG9yYXRlX21heDsvL1VJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1vZGVsLmJyYXRlICogMjAwMCk7IC8vVUlVdGlsLk51bWJlclRvSW50KHRoaXMubW9kZWwuYnJhdGUgKiAyMDAgKiB0aGlzLm1vZGVsLmludG9yYXRlX21heCk7XG4gICAgICAgIGxldCB0YWtlSW4gPSBjdXJHb2xkIDw9IG1heEJyYXRlID8gbWF4QnJhdGUgLSBjdXJHb2xkIDogMDtcbiAgICAgICAgdGhpcy51aV9teUdvbGRfbnVtLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArIFwiXCI7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZnRhYmxlLm15VXNlci5zZXJ2ZXJwb3MgPiAwICYmICF0aGlzLmlzSGF2ZUFkZEdvbGQgJiYgdGFrZUluID49IG1pbkJyYXRlOy8v5b2T5YmN5Y+v5bim5YWl5aSn5LqO562J5LqO5pyA5L2O5bim5YWlXG4gICAgfVxuXG4gICAgcHVibGljIF9pc0Nhbk91dEdvbGQ6IGJvb2xlYW4gPSBmYWxzZTsvL+ato+WcqOW4puWHuuS4rVxuICAgIC8v5piv5ZCm5Y+v5bim5Ye6XG4gICAgcHVibGljIElzQ2FuT3V0R29sZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2FtZXR5cGUgIT0gMjAgfHwgdGhpcy5faXNDYW5PdXRHb2xkKSByZXR1cm4gZmFsc2U7Ly/lj6rog71BT0bmqKHlvI9cbiAgICAgICAgbGV0IGN1ckdvbGQgPSB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIgIT0gbnVsbCA/IFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCkgOiAwO1xuICAgICAgICAvLyBsZXQgX2dhbWJsZSA9IHRoaXMuX2JmdGFibGUubXlVc2VyLmFsbGluR2FtYmxlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMubW9kZWwucm9vbSA9PSBcIiwgdGhpcy5tb2RlbC5yb29tKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwucm9vbS5BT0ZfVGltZXMgPT0gbnVsbCkgdGhpcy5tb2RlbC5yb29tLkFPRl9UaW1lcyA9IDE7XG5cbiAgICAgICAgbGV0IG1heEJyYXRlID0gVUlVdGlsLk51bWJlclRvSW50KChjdXJHb2xkIC0gdGhpcy5tb2RlbC5icmF0ZSAqIDIwMCAqIHRoaXMubW9kZWwucm9vbS5BT0ZfVGltZXMpIC8gMTAwKTsgLy8qIDI7Ly/lvZPliY3moYzlrZDkvZnpop0gLSDmiL/pl7TmnIDlsI/luKblhaXph5Hpop0gKiDmnIDlsI/luKblh7rlgI3mlbAgLSDoh6rlt7HkuIvms6ggPSDlj6/luKblh7rph5Hpop1cbiAgICAgICAgY29uc29sZS5lcnJvcihcImJyYXRlPVwiICsgdGhpcy5tb2RlbC5icmF0ZSArIFwiLOW4puWHuu+8mu+8mlwiICsgY3VyR29sZCArIFwiLVwiICsgKHRoaXMubW9kZWwuYnJhdGUgKiAyMDAgKiB0aGlzLm1vZGVsLnJvb20uQU9GX1RpbWVzKSArIFwiLOWPr+W4puWHuumHkeW4ge+8mlwiICsgbWF4QnJhdGUpO1xuICAgICAgICBpZiAobWF4QnJhdGUgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnVpX3NsaWRlck91dEdvbGQubWluID0gMTtcbiAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyT3V0R29sZC5tYXggPSBtYXhCcmF0ZTtcbiAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyT3V0R29sZC52YWx1ZSA9IDE7XG4gICAgICAgICAgICB0aGlzLnVpX291dEdvbGRfbnVtLnRleHQgPSBcIjFcIjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL+W4puWHuuWQjuabtOaWsOmHkeW4gVxuICAgIHB1YmxpYyBPdXRBZnRlclVwR29sZCh1c2VyaWQ6IG51bWJlciwgX21vbmV5OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh1c2VyaWQpO1xuICAgICAgICBpZiAodXNlciAhPSBudWxsICYmIHVzZXIuc2VsZikge1xuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgPSBfbW9uZXk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhYmxlTG9ja0dvbGQgPSBfbW9uZXk7XG4gICAgICAgICAgICB0aGlzLnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAxMikpLy/luKblh7rmiJDlip/vvIFcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyICE9IG51bGwpIHVzZXIuVXBkYXRlTW9uZXkoX21vbmV5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zU2l0ID0gMDtcbiAgICBwcml2YXRlIG1pblRha2VHb2xkID0gMDtcbiAgICAvL+W4puWFpemHkeW4gVxuICAgIHB1YmxpYyBTaG93VUlUYWtlR29sZFBhbmVsKGlzU2hvdyA9IHRydWUsIGxvY2FscG9zID0gMCwgaXNTaG93VGlwID0gZmFsc2UsIGlzUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghaXNSZWZyZXNoKSB7XG4gICAgICAgICAgICBsZXQgdSA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHRoaXMubW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCk7XG4gICAgICAgICAgICAvLyBpZiAoaXNTaG93ICYmIHUgIT0gbnVsbCAmJiB1LnVzZXJJbmZvICYmIHUuSXNQbGF5aW5nKCkpIHJldHVybjtcbiAgICAgICAgICAgIC8v5bey57uP5bim5YWl6L+HIOW5tuS4lCDkvZnpop3otrPlpJ/vvIzliJnluKblhaUwXG4gICAgICAgICAgICBpZiAoaXNTaG93ICYmIHRoaXMubW9kZWwuY2dvbGQgIT0gMCAmJiB0aGlzLm1vZGVsLmNnb2xkICE9IC0xICYmIHUgJiYgdS5wbGF5ZXIgJiYgdS5wbGF5ZXIuZ29sZCA+PSBVSVV0aWwuTnVtYmVyVG9JbnQoKHRoaXMubW9kZWwuYnJhdGUgKiAyMDApKSkge1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2F1dG9TaXREb3duX3RleChsb2NhbHBvcywgdGhpcy5tb2RlbC5jdXJTQ2x1YiAhPSBudWxsID8gdGhpcy5tb2RlbC5jdXJTQ2x1Yi5jaWQgOiAwLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RyYWRsbGUgID0g5bqV5YiGICogNCDvvIwgIOacgOS9jiA9ICBzdHJhZGxsZSArIOW6leWIhlxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwudGFibGVMb2NrR29sZCA+IHRoaXMubW9kZWwuYnJhdGUgKiA1ICYmIHRoaXMubW9kZWwudGFibGVMb2NrR29sZCA+IDAgJiYgaXNTaG93KSB7XG4gICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfc2l0ZG93bl90ZXgobG9jYWxwb3MsIDAsIHRoaXMuaXNLZWVwLCB0aGlzLnBhc3N3b3JkLCB0aGlzLmN1clNlbGVjdFNDbHViICE9IG51bGwgPyB0aGlzLmN1clNlbGVjdFNDbHViLmNpZCA6IDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudWlfdGFrZUdvbGRQYW5lbC52aXNpYmxlID0gaXNTaG93O1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NTaXQgIT0gMCkgbG9jYWxwb3MgPSB0aGlzLnBvc1NpdDtcbiAgICAgICAgICAgIC8vIHRoaXMuY3VyU2VsZWN0U0NsdWIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51aV90ZXh0R29sZERlc2MudGV4dCA9IHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyID8gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjIwNCkgOiBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzUyKTsvL+W3suW4puWFpS/mgLvkv7HkuZDpg6jluIE6ICAg5bey5bim5YWlL+aAu+mHkeW4gTpcbiAgICAgICAgICAgIHRoaXMudWlfdHh0SGludERlc2MudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzOTcpOy8v5LiL5LiA5omL5byA5aeL5Li65oKo5bim5YWl6K6w5YiGXG4gICAgICAgICAgICB0aGlzLmlzU2hvd0FkZEdvbGRQYW5lbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3NTaXQgPSBsb2NhbHBvcztcbiAgICAgICAgICAgIHRoaXMudWlfdGFrZUdvbGRQYW5lbC5nZXRDaGlsZChcInR4dFRpdGxlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzk4KTsvL+W4puWFpeiusOWIhlxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVpX2lucHV0UGFzcy50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5tb2RlbC5wYXMgPT0gXCIsIHRoaXMubW9kZWwucGFzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pc0tlZXAgPT0gXCIsIHRoaXMuaXNLZWVwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLnJvb20gIT0gbnVsbCAmJiB0aGlzLm1vZGVsLnBhcyAhPSBcIlwiICYmIHRoaXMuaXNLZWVwICE9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOWvhueggeeVjOmdolwiKVxuICAgICAgICAgICAgICAgIHRoaXMudWlfUGFzc3dvcmQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfUGFzc3dvcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWluQnJhdGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC5icmF0ZSk7XG4gICAgICAgICAgICBsZXQgbWF4QnJhdGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQobWluQnJhdGUgKiAyKTtcbiAgICAgICAgICAgIHRoaXMubWluVGFrZUdvbGQgPSB0aGlzLm1vZGVsLmludG9yYXRlX21pbjsvL21heEJyYXRlICogMTAwOyAvL3RoaXMubW9kZWwucm9vbSAhPSBudWxsID8gdGhpcy5tb2RlbC5yb29tLmxnICogMTAwIDogbWluQnJhdGU7IC8v55u05o6l6L6T5YWl5oi/6Ze05Y+377yM5Y+v6IO95a+86Ie0cm9vbeS4uuepuu+8jOWImeaYvuekuuS4uum7mOiupOW6leearueahDUw5YCN44CCXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibGltaXQ6XCIgKyAobW9kZWwucm9vbSAhPSBudWxsID8gbW9kZWwucm9vbS5sb3dsaW1pdC5Ub1N0cmluZygpIDogXCIgbnVsbFwiKSk7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5taW5UYWtlR29sZCA8PSAwKSB7IHRoaXMubWluVGFrZUdvbGQgPSBtaW5CcmF0ZTsgfSAvL1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5jZ29sZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9jbHViZ29sZF9udW0udGV4dCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmNsdWJzbGlzdCA9PSBudWxsIHx8IHRoaXMubW9kZWwuY2x1YnNsaXN0Lmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLm1vZGVsLmN1clNDbHViICE9IG51bGwgJiYgdGhpcy5tb2RlbC5jbHVic2xpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0uY2lkID09IHRoaXMubW9kZWwuY3VyU0NsdWIuY2lkIH0pID09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VyU2VsZWN0U0NsdWIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFRha2VHb2xkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9jbHViZ29sZF9udW0udGV4dCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dUYWtlSW5JbmZvKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhUYWtlR29sZCA9IHRoaXMubW9kZWwuY2dvbGQgPiBtYXhCcmF0ZSA/IG1heEJyYXRlIDogdGhpcy5tb2RlbC5jZ29sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVpX2NsdWJUb2dnbGVHcm91cC5nYW1lT2JqZWN0LlNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhUYWtlR29sZCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5nb2xkID4gbWF4QnJhdGUgPyBtYXhCcmF0ZSA6IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5nb2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1nb2xkID0gVUlVdGlsLk51bWJlclRvSW50KEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkIC8gMTAwKSAqIDEwMDtcbiAgICAgICAgICAgIHRoaXMubWF4VGFrZUdvbGQgPSB0aGlzLm1vZGVsLmludG9yYXRlX21heCA+IG1nb2xkID8gbWdvbGQgOiB0aGlzLm1vZGVsLmludG9yYXRlX21heDsvL21heEJyYXRlICogMTAwMDtcbiAgICAgICAgICAgIHRoaXMuU2hvd1Rha2VJbkluZm8oaXNTaG93VGlwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyVGFrZUdvbGQudmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dUYWtlSW5JbmZvKGlzU2hvd1RpcCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuVXBkYXRlVGFrZUdvbGRVSSh0aGlzLm1pblRha2VHb2xkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaW4gOlwiICsgdGhpcy5taW5UYWtlR29sZCArIFwiIG1heDpcIiArIHRoaXMubWF4VGFrZUdvbGQgKyBcIiBjdXI6XCIgKyB0aGlzLmN1clRha2VHb2xkKTtcbiAgICAgICAgLy8gdGhpcy51aV9zbGlkZXJUYWtlR29sZC5taW4gPSAwOy8vdGhpcy5taW5UYWtlR29sZDtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJUYWtlR29sZC5tYXggPSBVSVV0aWwuTnVtYmVyVG9JbnQoKHRoaXMubWF4VGFrZUdvbGQgLSB0aGlzLm1pblRha2VHb2xkKSAvIHRoaXMubWluVGFrZUdvbGQpO1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5nYW1ldHlwZSA9PSAyMCkgdGhpcy51aV9zbGlkZXJUYWtlR29sZC5tYXggPSB0aGlzLm1heFRha2VHb2xkO1xuICAgICAgICB0aGlzLnVpX3NsaWRlclRha2VHb2xkLmVuYWJsZWQgPSB0aGlzLm1pblRha2VHb2xkIDw9IHRoaXMubWF4VGFrZUdvbGQ7XG5cbiAgICAgICAgdGhpcy51aV9zbGlkZXJUYWtlR29sZC52YWx1ZSA9IDA7Ly8gdGhpcy5tYXhUYWtlR29sZCA9PSAwID8gMCA6IHRoaXMuY3VyVGFrZUdvbGQgLyB0aGlzLm1heFRha2VHb2xkO1xuICAgICAgICB0aGlzLnVpX3R4dFNjb3JlLmNvbG9yID0gdGhpcy5taW5UYWtlR29sZCA8PSB0aGlzLm1heFRha2VHb2xkID8gY2MuQ29sb3IuV0hJVEUgOiBjYy5Db2xvci5SRUQ7XG4gICAgICAgIHRoaXMudWlfdHh0U2NvcmUudGV4dCA9IFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1pblRha2VHb2xkIC8gMTAwKSArIFwiXCI7XG4gICAgICAgIGxldCBnb2xkID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMubWluVGFrZUdvbGQgLyAxMDApICsgXCJcIjtcbiAgICAgICAgbGV0IHNjYWxlID0gZ29sZC5sZW5ndGggPj0gMyA/IDIgLyBnb2xkLmxlbmd0aCA6IDE7XG4gICAgICAgIC8vIHRoaXMubnVtSW1hZ2VGb250LnNldFR4dChnb2xkLCBcIk5fXCIsIFwic2NvcmVOdW1cIiwgc2NhbGUpO1xuICAgICAgICBpZiAodGhpcy5jdXJUYWtlR29sZCA8PSAwICYmIGlzU2hvd1RpcCkge1xuICAgICAgICAgICAgdGhpcy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg1KSk7Ly/kvZnpop3kvY7kuo7mnIDlsI/luKblhaXvvIzor7flhYXlgLxcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgQWRkR29sZEZhaWwoKSB7XG4gICAgICAgIHRoaXMuaXNIYXZlQWRkR29sZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8v5bim5Ye66K6w5YiGXG4gICAgcHVibGljIFNob3dVSU91dEdvbGRQYW5lbCgpIHtcbiAgICAgICAgdGhpcy51aV9vdXRHb2xkUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy/ooaXlhYXph5HluIFcbiAgICBwdWJsaWMgU2hvd1VJQWRkR29sZFBhbmVsKCkge1xuICAgICAgICB0aGlzLmlzU2hvd0FkZEdvbGRQYW5lbCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzSGF2ZUFkZEdvbGQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMudWlfdGFrZUdvbGRQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9QYXNzd29yZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfdGFrZUdvbGRQYW5lbC5nZXRDaGlsZChcInR4dFRpdGxlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDAwKTsvL+ihpeWFheiusOWIhlxuICAgICAgICB0aGlzLnVpX3R4dEhpbnREZXNjLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDAxKTsvL+a4uOaIj+e7k+adn+WJjeWPquiDveihpeWFheS4gOasoeS4lOWcqOS4i+WxgOaJjeS8mueUn+aViFxuICAgICAgICAvLyBrZXlib2FyZENvbXAuSGlkZSgpO1xuICAgICAgICBsZXQgY3VyR29sZCA9IFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1vZGVsLnRhYmxlTG9ja0dvbGQpO1xuICAgICAgICBsZXQgbWluQnJhdGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC5icmF0ZSk7Ly/lsI/nm7IgPSDlupXms6hcbiAgICAgICAgLy8gbGV0IG1heExpbWl0QnJhdGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQoKHRoaXMubW9kZWwuYnJhdGUgKiAyMDAgKiB0aGlzLm1vZGVsLmludG9yYXRlX21heCkpO1xuICAgICAgICBsZXQgbWF4QnJhdGUgPSBtaW5CcmF0ZSAqIDI7Ly/lpKfnm7IgPSDlsI/nm7IgKiAyIFxuICAgICAgICB0aGlzLm1pblRha2VHb2xkID0gdGhpcy5tb2RlbC5pbnRvcmF0ZV9taW47Ly9tYXhCcmF0ZSAqIDEwMDsgLy/mnIDlsI/luKblhaXph5Hpop0gPSDlpKfnm7IqMTAw5YCNIFxuICAgICAgICAvLyBpZiAodGhpcy5taW5UYWtlR29sZCA8PSAwKSB7IHRoaXMubWluVGFrZUdvbGQgPSBtaW5CcmF0ZTsgfSAvLyAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmNsdWJpZCA+IDAgJiYgdGhpcy5tb2RlbC5Jc1N1cHBlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuY2x1YnNsaXN0ID09IG51bGwgfHwgdGhpcy5tb2RlbC5jbHVic2xpc3QubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICB8fCB0aGlzLm1vZGVsLmN1clNDbHViID09IG51bGwgfHwgdGhpcy5tb2RlbC5jbHVic2xpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0uY2lkID09IHRoaXMubW9kZWwuY3VyU0NsdWIuY2lkIH0pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFRha2VHb2xkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2NsdWJnb2xkX251bS50ZXh0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93VGFrZUluSW5mbyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhUYWtlR29sZCA9IHRoaXMubW9kZWwuaW50b3JhdGVfbWF4IC0gY3VyR29sZDsvL1VJVXRpbC5OdW1iZXJUb0ludChtYXhCcmF0ZSAqIDEwMDAgLSBjdXJHb2xkKSAvIDEwMCAqIDEwMDsgLy/mnIDlpKfooaXlhYUgPSDlpKfnm7IqMTAwKjEwIC0g6Lqr5LiK6YeR5biBXG4gICAgICAgIHRoaXMuU2hvd1Rha2VJbkluZm8odHJ1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVUYWtlR29sZFVJKGlucHV0VGFrZUdvbGQ6IG51bWJlcikge1xuICAgICAgICBsZXQgdGVtcFRha2VHb2xkID0gaW5wdXRUYWtlR29sZDtcbiAgICAgICAgLy/lj5bmnInmlYjlgLxcbiAgICAgICAgaWYgKHRoaXMubWluVGFrZUdvbGQgPiB0aGlzLm1heFRha2VHb2xkKSB7XG4gICAgICAgICAgICB0ZW1wVGFrZUdvbGQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tYXhUYWtlR29sZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wVGFrZUdvbGQgPSB0aGlzLkNsYW1wKGlucHV0VGFrZUdvbGQsIDAsIFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1heFRha2VHb2xkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1clRha2VHb2xkID0gdGhpcy5taW5UYWtlR29sZCA+IDAgPyAodGhpcy5DbGFtcCh0ZW1wVGFrZUdvbGQgKyAxLCAwLCBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tYXhUYWtlR29sZCkpIC8gdGhpcy5taW5UYWtlR29sZCkgKiB0aGlzLm1pblRha2VHb2xkIDogdGVtcFRha2VHb2xkOy8vMDsgLy/liqAxIOmYsuatoiBzbGlkZXIg5rWu54K55pWw55u45LmY6YCg5oiQ55qE5YC85bCR5LqObWluVGFrZUdvbGRcbiAgICAgICAgdGhpcy5TZXRUYWtlR29sZFVJKHRoaXMuY3VyVGFrZUdvbGQsIHRoaXMubWluVGFrZUdvbGQsIFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1heFRha2VHb2xkKSk7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRUYWtlR29sZFVJKHRha2VHb2xkOiBudW1iZXIsIG1pbkdvbGQ6IG51bWJlciwgbWF4R29sZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy51aV90YWtlR29sZFBhbmVsLnZpc2libGUpIHsgcmV0dXJuOyB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bim5YWl6YeR5biBIDpcIiArIHRha2VHb2xkICsgXCIgbWF4OlwiICsgbWF4R29sZCk7XG4gICAgICAgIHRoaXMudWlfdHh0VGFrZUdvbGRQYW5lbC50ZXh0ID0gKFVJVXRpbC5OdW1iZXJUb0ludCgodGFrZUdvbGQgLyAxMDApKSkgKyBcIi9cIiArIFVJVXRpbC5OdW1iZXJUb0ludCgobWF4R29sZCAvIDEwMCkpO1xuICAgICAgICB0aGlzLnVpX3Rha2Vpbl9udW0udGV4dCA9IFVJVXRpbC5OdW1iZXJUb0ludCgodGFrZUdvbGQgLyAxMDApKSA9PSAwID8gXCLlm57moYxcIiA6IChVSVV0aWwuTnVtYmVyVG9JbnQoKHRha2VHb2xkIC8gMTAwKSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudWlfdHh0U2NvcmUudGV4dCA9IChVSVV0aWwuTnVtYmVyVG9JbnQoKHRha2VHb2xkIC8gMTAwKSkpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBnb2xkID0gKFVJVXRpbC5OdW1iZXJUb0ludCgodGFrZUdvbGQgLyAxMDApKSkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHNjYWxlID0gZ29sZC5sZW5ndGggPj0gMyA/IDIgLyBnb2xkLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgLy8gdGhpcy51aV9teUdvbGRfbnVtLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkIC0gdGFrZUdvbGQpICsgXCJcIjtcbiAgICB9XG4gICAgcHVibGljIFNob3dBZGRDbHViUGFuZWwoKSB7XG4gICAgICAgIGxldCBtaW5CcmF0ZSA9IFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1vZGVsLmJyYXRlKTtcbiAgICAgICAgbGV0IG1heEJyYXRlID0gVUlVdGlsLk51bWJlclRvSW50KG1pbkJyYXRlICogMik7XG5cbiAgICAgICAgbGV0IG1pbkFwcGx5ID0gdGhpcy5tb2RlbC5yb29tICE9IG51bGwgPyB0aGlzLm1vZGVsLnJvb20ubGcgOiBtaW5CcmF0ZTsgLy/nm7TmjqXovpPlhaXmiL/pl7Tlj7fvvIzlj6/og73lr7zoh7Ryb29t5Li656m677yM5YiZ5pi+56S65Li66buY6K6k5bqV55qu55qENTDlgI3jgIJcbiAgICAgICAgaWYgKG1pbkFwcGx5IDw9IDApIHsgbWluQXBwbHkgPSBtaW5CcmF0ZTsgfVxuICAgICAgICBsZXQgbWF4QXBwbHkgPSBtYXhCcmF0ZTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlbC5jbHVic2xpc3QgPT0gbnVsbCB8fCB0aGlzLm1vZGVsLmNsdWJzbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgbWF4QXBwbHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5TaG93QXBwbHlJbmZvKG1pbkFwcGx5LCBtYXhBcHBseSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TaG93QXBwbHlJbmZvKG1pbkFwcGx5LCBtYXhBcHBseSk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93QXBwbHlJbmZvKG1pbkFwcGx5OiBudW1iZXIsIG1heEFwcGx5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5VcGRhdGVBcHBseUdvbGRVSShtaW5BcHBseSk7XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVBcHBseUdvbGRVSShpbnB1dFRha2VHb2xkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5TZXRBcHBseUdvbGRVSSh0aGlzLmN1ckFwcGx5R29sZCk7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRBcHBseUdvbGRVSSh0YWtlR29sZDogbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy51aV9hcHBseWNvbnRlbnQudmlzaWJsZSkgeyByZXR1cm47IH1cbiAgICAgICAgLy8gdGhpcy51aV9hcHBseW51bV90eHQudGV4dCA9IChVSVV0aWwuTnVtYmVyVG9JbnQoKHRha2VHb2xkIC8gMTAwKSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtaW5BZGRHb2xkID0gMDtcbiAgICBwcml2YXRlIG1heEFkZEdvbGQgPSAwO1xuICAgIHB1YmxpYyBTZXRDdXJHYW1ibGVBZGRHb2xkKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRlbXBBZGRHb2xkID0gdGhpcy5taW5BZGRHb2xkICogTWF0aC5jZWlsKHZhbHVlIC8gdGhpcy5taW5BZGRHb2xkKTtcbiAgICAgICAgdGVtcEFkZEdvbGQgPSBOdW1iZXIodGVtcEFkZEdvbGQudG9GaXhlZCgyKSk7XG4gICAgICAgIGxldCBtaW5hZGQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9jdXJHYW1ibGVMaW1pdE1pbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVtcEFkZEdvbGQgPT0gXCIsIHRlbXBBZGRHb2xkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1pbmFkZCA9PSBcIiwgbWluYWRkKTtcbiAgICAgICAgLy8gaWYgKHRlbXBBZGRHb2xkIDwgbWluYWRkKSB7XG4gICAgICAgIC8vICAgICB0ZW1wQWRkR29sZCA9IG1pbmFkZDtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGVtcEFkZEdvbGQgPiB0aGlzLm1heEFkZEdvbGQpIHtcbiAgICAgICAgICAgIHRlbXBBZGRHb2xkID0gdGhpcy5tYXhBZGRHb2xkO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxsID0gdGVtcEFkZEdvbGQgLyB0aGlzLm1heEFkZEdvbGQ7XG4gICAgICAgIHRoaXMudWlfYmFyX3YyLmZpbGxBbW91bnQgPSBmaWxsO1xuICAgICAgICBpZiAodGVtcEFkZEdvbGQgPj0gdGhpcy5tYXhBZGRHb2xkKSB7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dE51bXMudGV4dCA9IFwiQUxMSU5cIjtcbiAgICAgICAgICAgIHRoaXMuY3VyQWRkR29sZCA9IHRlbXBBZGRHb2xkO1xuICAgICAgICAgICAgdGhpcy51aV9iYXJfdjIuZmlsbEFtb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1ckFkZEdvbGQgPSB0ZW1wQWRkR29sZDtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0TnVtcy50ZXh0ID0gdGhpcy5jdXJBZGRHb2xkICsgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgR2V0QWRkQmFzZShhZGROdW06IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBhZGRCYXNlID0gMTtcbiAgICAgICAgaWYgKGFkZE51bSA8IDEwKSBhZGRCYXNlID0gMjtcbiAgICAgICAgZWxzZSBpZiAoYWRkTnVtID49IDEwICYmIGFkZE51bSA8IDEwMCkgYWRkQmFzZSA9IDU7XG4gICAgICAgIGVsc2UgaWYgKGFkZE51bSA+PSAxMDAgJiYgYWRkTnVtIDwgMTAwMCkgYWRkQmFzZSA9IDEwO1xuICAgICAgICBlbHNlIGlmIChhZGROdW0gPj0gMTAwMCAmJiBhZGROdW0gPCAxMDAwMCkgYWRkQmFzZSA9IDEwMDtcbiAgICAgICAgZWxzZSBhZGRCYXNlID0gMTAwMDtcbiAgICAgICAgcmV0dXJuIGFkZEJhc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBHZXRTbGlkZXJNYXhWYWx1ZShnb2xkOiBudW1iZXIsIGlzUmVtYWluZGVyOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1heCA9IDA7XG4gICAgICAgIGxldCByb3VuZCA9IDA7XG4gICAgICAgIGxldCByZW1haW4gPSAwO1xuICAgICAgICBpZiAoZ29sZCA8PSAxMCkge1xuICAgICAgICAgICAgcm91bmQgPSBnb2xkIC8gMjtcbiAgICAgICAgICAgIHJlbWFpbiA9IGdvbGQgJSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdvbGQgPiAxMCAmJiBnb2xkIDw9IDEwMCkge1xuICAgICAgICAgICAgcm91bmQgPSAoZ29sZCAtIDEwKSAvIDUgKyA1O1xuICAgICAgICAgICAgcmVtYWluID0gZ29sZCAlIDU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ29sZCA+IDEwMCAmJiBnb2xkIDw9IDEwMDApIHtcbiAgICAgICAgICAgIHJvdW5kID0gKGdvbGQgLSAxMDApIC8gMTAgKyA1ICsgMTg7XG4gICAgICAgICAgICByZW1haW4gPSBnb2xkICUgMTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ29sZCA+IDEwMDAgJiYgZ29sZCA8PSAxMDAwMCkge1xuICAgICAgICAgICAgcm91bmQgPSAoZ29sZCAtIDEwMDApIC8gMTAwICsgNSArIDE4ICsgOTA7XG4gICAgICAgICAgICByZW1haW4gPSBnb2xkICUgMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcm91bmQgPSAoZ29sZCAtIDEwMDAwKSAvIDEwMDAgKyA1ICsgMTggKyA5MCArIDkwO1xuICAgICAgICAgICAgcmVtYWluID0gZ29sZCAlIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgbWF4ID0gcm91bmQgKyAocmVtYWluID4gMCAmJiBpc1JlbWFpbmRlciA/IDEgOiAwKTtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG5cbiAgICBwcml2YXRlIEdldEN1cnJlbnRHb2xkQnlTbGlkZXIoc2xpZGVyVmFsdWU6IG51bWJlcikge1xuICAgICAgICBsZXQgY3VyR29sZCA9IDA7XG4gICAgICAgIGlmIChzbGlkZXJWYWx1ZSA+PSB0aGlzLnVpX3NsaWRlckFkZC5tYXgpIHJldHVybiB0aGlzLm1heEFkZEdvbGQ7XG4gICAgICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1KSB7XG4gICAgICAgICAgICBjdXJHb2xkID0gMiAqIHNsaWRlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNsaWRlclZhbHVlID4gNSAmJiBzbGlkZXJWYWx1ZSA8PSAyMykge1xuICAgICAgICAgICAgY3VyR29sZCA9IChzbGlkZXJWYWx1ZSAtIDUpICogNSArIDEwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNsaWRlclZhbHVlID4gMjMgJiYgc2xpZGVyVmFsdWUgPD0gMTEzKSB7XG4gICAgICAgICAgICBjdXJHb2xkID0gKHNsaWRlclZhbHVlIC0gMjMpICogMTAgKyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2xpZGVyVmFsdWUgPiAxMTMgJiYgc2xpZGVyVmFsdWUgPD0gMjAzKSB7XG4gICAgICAgICAgICBjdXJHb2xkID0gKHNsaWRlclZhbHVlIC0gMTEzKSAqIDEwMCArIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJHb2xkID0gKHNsaWRlclZhbHVlIC0gMjAzKSAqIDEwMDAgKyAxMDAwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VyR29sZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd1VJVXNlckluZm8ocGxheWVyOiBQbGF5ZXJJbmZvU0QsIHNlcnZlclBvczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5mb0NvbXAuc2hvdyhwbGF5ZXIsIHNlcnZlclBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLnVzZXJJbmZvQ29tcC5IaWRlKCk7XG4gICAgICAgICAgICAvLyB0aGlzLlNob3dVSVRha2VHb2xkUGFuZWwodHJ1ZSwgc2VydmVyUG9zKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZVVzZXJJbmZvKHBsYXllcjogUGxheWVySW5mb1NELCBzZXJ2ZXJQb3M6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy51c2VySW5mb0NvbXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5mb0NvbXAudXBkYXRlSW5mbyhwbGF5ZXIsIHNlcnZlclBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvQ29tcC5IaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIEhpZGVVSVdhaXRQbGF5UGFuZWwoKSB7XG4gICAgICAgIHRoaXMudWlfd2FpdFBhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZmlyZVRpbWVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlyZVRpbWVyOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgU2hvd1VJV2FpdFBsYXlQYW5lbCgpIHtcbiAgICAgICAgbGV0IHVzZXJDb3VudDogbnVtYmVyID0gdGhpcy5tb2RlbC5HZXRNaW5QbGF5ZXJDb3VudCgpO1xuICAgICAgICBsZXQgcmVhZHlDb3VudDogbnVtYmVyID0gdGhpcy5tb2RlbC5HZXRSZWFkeUNvdW50KCk7XG4gICAgICAgIGxldCByZW1haW5UaW1lOiBudW1iZXIgPSB0aGlzLm1vZGVsLmVuZFRpbWU7Ly8gLSBVSVV0aWwuTnVtYmVyVG9JbnQoY2MuZGlyZWN0b3IuZ2V0VG90YWxUaW1lKCkgLyAxMDAwKTtcbiAgICAgICAgLy/kuI3liKTmlq3lgJLorqHml7ZcbiAgICAgICAgbGV0IGlzUmVhbFNob3c6IGJvb2xlYW4gPSAhdGhpcy5tb2RlbC5pc0dhbWluZyAmJiByZWFkeUNvdW50IDwgdXNlckNvdW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXJDb3VudDpcIiArIHVzZXJDb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtYWluVGltZTpcIiArIHJlbWFpblRpbWUgKyBcIiBpc0dhbWluZzpcIiArIHRoaXMubW9kZWwuaXNHYW1pbmcgKyBcIiByZWFkeUNvdW50OlwiICsgcmVhZHlDb3VudCk7IC8vLS10ZW1wXG4gICAgICAgIHRoaXMudWlfd2FpdFBhbmVsLnZpc2libGUgPSBpc1JlYWxTaG93O1xuICAgICAgICBpZiAoaXNSZWFsU2hvdykge1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMubW9kZWwub3dubmVyaWQgPT0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCAmJiB0aGlzLm1vZGVsLm9wZW5wbGF5ICYmICF0aGlzLm1vZGVsLmlzb3Blbikge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMudWlfdHh0U3RhcnREZXNjLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjY0KTsvL+etieW+heaIv+S4u+W8gOWQr+eJjOWxgFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dFN0YXJ0RGVzYy50ZXh0ID0gYCR7VGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDAwKX0ke3VzZXJDb3VudH0ke1RleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAwMSl9YDsvL+aIv+mXtOWFpeW6p+a7oXswfeS6uuiHquWKqOW8gOWni+a4uOaIj1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy51aV90eHRTdGFydERlc2MudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDniYzlsYDlt7Lnu4/lvIDlp4vov4cg5bm25LiU5Lq65pWw5aSn5LqOMuS6uueahOaXtuWAmeS8muiHquWKqOW8gOWniyAg5LiN6ZyA6KaB5pi+56S6XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNTaG93UGVyc29uUmVtaW5kICYmIHJlYWR5Q291bnQgPj0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfdHh0U3RhcnREZXNjLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubW9kZWwuaXNTaG93UGVyc29uUmVtaW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV90eHRTdGFydERlc2MudGV4dCA9IGAke1RleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAwMCl9JHsyfSR7VGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDAxKX1gOy8v5oi/6Ze05YWl5bqn5ruhezB95Lq66Ieq5Yqo5byA5aeL5ri45oiPXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNob3dVSUphY2twb3QoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG4gICAgcHVibGljIElzU2VsZldhdGNoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5Jc1Bvc1dhdGNoKHRoaXMubW9kZWwuX3Bvc1NlcnZlcik7XG4gICAgfVxuICAgIHB1YmxpYyBJc1NlbGZXYWl0VG9UYWtlSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLklzUG9zV2FpdFRvVGFrZUluKHRoaXMubW9kZWwuX3Bvc1NlcnZlcik7XG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVVc2VyU3RhdGUodXNlcklkOiBudW1iZXIsIGtlZXBUaW1lOiBudW1iZXIsIGdvbGQ6IG51bWJlcikge1xuICAgICAgICBpZiAoa2VlcFRpbWUgPD0gMCkgeyByZXR1cm47IH1cbiAgICAgICAgbGV0IHVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh1c2VySWQpO1xuICAgICAgICBpZiAodXNlciAhPSBudWxsICYmIGdvbGQgPj0gMCkge1xuICAgICAgICAgICAgdXNlci5VcGRhdGVNb25leShnb2xkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNldFVzZXJGb3JLZWVwU2VhdF9ubih1c2VySWQsIGtlZXBUaW1lKTtcbiAgICB9XG4gICAgcHVibGljIFNldFVzZXJGb3JLZWVwU2VhdF9ubih1c2VySWQ6IG51bWJlciwgcmVtYWluVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChyZW1haW5UaW1lIDw9IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMubW9kZWwuU2V0VXNlckRhdGFfaXNXKHVzZXJJZCwgMSk7IC8v5Y+Y5Li66KeC5LyXXG4gICAgICAgIHRoaXMubW9kZWwuU2V0VXNlckRhdGFfaXNLKHVzZXJJZCwgcmVtYWluVGltZSk7IC8v5a6i5oi356uvIOW8uuWItuiuvue9ruS4uiDnlZnluqfnirbmgIEgICBcbiAgICAgICAgdGhpcy5TZXRVc2VyRm9yS2VlcFNlYXRfbih1c2VySWQpOyAvL+WuouaIt+erryDlvLrliLborr7nva7kuLog55WZ5bqn54q25oCBIFxuICAgIH1cbiAgICBwdWJsaWMgU2V0VXNlckZvcktlZXBTZWF0X24odXNlcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5TZXRVc2VyRm9yS2VlcFNlYXRfdXNlcih0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZCh1c2VySWQpKTtcbiAgICB9XG4gICAgLy/orr7nva51c2Vy5Li655WZ5bqn54q25oCBXG4gICAgcHVibGljIFNldFVzZXJGb3JLZWVwU2VhdF91c2VyKHVzZXI6IFRleGFzVXNlckNvbXApIHtcbiAgICAgICAgaWYgKHVzZXIgPT0gbnVsbCB8fCB1c2VyLnBsYXllciA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICBsZXQgaW5mbzogT3RoZXJVc2VySW5mb1NEID0gdGhpcy5tb2RlbC5HZXRVc2VySW5mbyh1c2VyLnBsYXllci51c2VyaWQpO1xuICAgICAgICBpZiAoaW5mbyAhPSBudWxsKSB7XG4gICAgICAgICAgICB1c2VyLnVwZGF0ZV9Vc2VySW5mbyhpbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlci5zZWxmKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVVSUFsbEJ0bnMoKTtcbiAgICAgICAgICAgIHRoaXMuQ2hlY2tCdG5CYWNrVGFibGVTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy51aV9jdXJUZXhhc3R5cGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v5b2T5YmN5bGA57uT5p2f6K6+572u546p5a6255qE55WZ5bqnXG4gICAgcHVibGljIFRhYmVsZUVuZFNldEtlZXAodXNlcjogVGV4YXNVc2VyQ29tcCkge1xuICAgICAgICB1c2VyLlVwZGF0ZVVzZXJDb25uZWN0U3RhdGUoVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdCk7XG4gICAgICAgIGlmICh1c2VyLnNlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVVJQWxsQnRucygpO1xuICAgICAgICAgICAgdGhpcy5DaGVja0J0bkJhY2tUYWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/kuIvms6hcbiAgICAvL+WAjeaVsDDvvJog5LyRIO+8jDHvvJrot5/vvIwgPj0yIO+8muWkp1xuICAgIHB1YmxpYyBHYW1ibGVNdWx0aXBsZShtdWx0aXBsZTogbnVtYmVyKSB7XG4gICAgICAgIC8v6Lef77yM5aSnIOS5i+WQjuaYr+ecn+ato+eahOS4i+azqOWAvFxuICAgICAgICBsZXQgZ29sZCA9IG11bHRpcGxlID09IDAgPyAwIDogdGhpcy5HZXREYUdhbWJsZShtdWx0aXBsZSk7XG4gICAgICAgIGlmIChnb2xkIDw9IDApIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9zbGlkZXJBZGQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51aV9CdG5BZGRMaW1pdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/lpKcv5pWyXG4gICAgICAgIGxldCBhZGRSYXRlID0gbXVsdGlwbGUgPiAxIHx8IHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkIDw9IGdvbGQ7XG4gICAgICAgIGdvbGQgPSBNYXRoLm1pbihnb2xkLCBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQpKTtcbiAgICAgICAgdGhpcy5XYWl0KCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2dhbWJsZV90ZXgoZ29sZCwgYWRkUmF0ZSk7XG4gICAgfVxuICAgIC8v5LyRXG4gICAgcHVibGljIEdhbWJsZVhpdSgpIHtcbiAgICAgICAgdGhpcy5HYW1ibGVNdWx0aXBsZSgwKTtcbiAgICB9XG5cbiAgICAvL+aVsiBcbiAgICBwdWJsaWMgR2FtYmxlQWxsSW4oKSB7XG4gICAgICAgIGxldCBnb2xkID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkKTtcbiAgICAgICAgdGhpcy5XYWl0KCk7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2dhbWJsZV90ZXgoZ29sZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8o5pWy5LqG55qE6K+dIOiHquW3seeahOmHkeW4geS4ujAp6Ieq5bex5Y+v5Lul5pON5L2c5oyJ6ZKu55qE5oOF5Ya1OjEu6Ieq5bex5Zyo5qGM5a2Q5LiKLOS4lOS4jeiDveaXtuinguS8lyzkuJQg5LiN6IO95byD54mMLOS4lCDmsqHmnInmlbJcbiAgICBwcml2YXRlIElzQ2FuSGFuZGxlQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWwuaXNHYW1pbmcpIHsgcmV0dXJuIGZhbHNlOyB9IC8v5ri45oiP5pyq5byA5aeLXG4gICAgICAgIGlmICh0aGlzLl9iZnRhYmxlLm15VXNlciA9PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAodGhpcy5fYmZ0YWJsZS5teVVzZXIuRW1wdHkpIHsgcmV0dXJuIGZhbHNlOyB9IC8v546p5a625LiN5a2Y5ZyoXG4gICAgICAgIGlmICh0aGlzLl9iZnRhYmxlLm15VXNlci5pc0dpdmVVcCkgeyByZXR1cm4gZmFsc2U7IH0gLy/lt7Lnu4/lvIPniYwgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fYmZ0YWJsZS5teVVzZXIudXNlckNvbm5lY3RTdGF0ZSA9PSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAodGhpcy5Jc1NlbGZXYXRjaCgpKSB7IHJldHVybiBmYWxzZTsgfSAvL+inguaImCAgICBcbiAgICAgICAgaWYgKHRoaXMuSXNTZWxmV2FpdFRvVGFrZUluKCkpIHsgcmV0dXJuIGZhbHNlOyB9IC8v6KeC5oiYICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvL+aYvuekuueOqeWutuWbnuWQiOaJgOacieaTjeS9nOaMiemSrlxuICAgIHB1YmxpYyBTaG93QWN0aW9uQnRucyhpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnVpX2J0bnMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bnMuX2NoaWxkcmVuW2ldLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/oh6rlt7Hlm57lkIhcbiAgICBwcml2YXRlIEhhbmRsZUFjdGlvbkJ0bnNGb3JTZWxmVHVybihpc05ld1R1cm46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5TaG93QWN0aW9uQnRucyhmYWxzZSk7XG4gICAgICAgIHRoaXMudWlfYnRucWlwYWkudmlzaWJsZSA9IHRydWU7IC8v5byD54mMICAgICAgICBcbiAgICAgICAgLy/mnInmnaHku7bpmZDliLbnmoTmjInpkq5cbiAgICAgICAgdGhpcy51aV9idG5YaXUudmlzaWJsZSA9IHRoaXMubW9kZWwuZ2FtZXR5cGUgIT0gMjAgJiYgKChpc05ld1R1cm4gJiYgIXRoaXMubW9kZWwuZmlyc3RUdXJuU3RhcnQpIHx8ICh0aGlzLm1vZGVsLl9taW5nYW1ibGUgPD0gMCAmJiB0aGlzLm1vZGVsLl9lbWF4ZyA8PSAwKSk7IC8v5LyRXG4gICAgICAgIC8vdWlfYnRuRm9sbG93LmdhbWVPYmplY3QuU2V0QWN0aXZlKCFGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5zaG93Y2FyZCk7XG4gICAgICAgIGxldCBtaW5nYW1ibGUgPSB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICB0aGlzLnVpX2J0bkZvbGxvdy52aXNpYmxlID0gdGhpcy5tb2RlbC5nYW1ldHlwZSAhPSAyMCAmJiAodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQgPiBtaW5nYW1ibGUgJiYgIXRoaXMudWlfYnRuWGl1LnZpc2libGUpOyAvL+i3nyzoh7PlsJHmu6HotrPmmK/kuIrlrrbnmoQx5YCNLOS4lOi3n+S8keS4jeiDveWQjOaXtuWHuueOsCznrYnkuo7ml7bvvIznm7TmjqXmlbIg5LiN5pi+56S66Lef44CCXG4gICAgICAgIC8vQUxMSU7mjInpkq7nrbnnoIHkuI3otrPku6Xot5/ms6jnmoTml7blgJnmiY3mmL7npLrmiJbogIXot5/nmoTmmYLlgJnnrbnnoIHkuI3lpJ/lpKfnmoTml7blgJlcbiAgICAgICAgdGhpcy51aV9idG5hbGxpbmFkZC52aXNpYmxlID0gdGhpcy5tb2RlbC5nYW1ldHlwZSA9PSAyMCB8fCAodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQgPD0gbWluZ2FtYmxlIHx8ICh0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA8IHRoaXMuR2V0RGFHYW1ibGUodGhpcy5HZXRNaW5EYUdhbWJsZVR5cGUoKSkgJiYgbWluZ2FtYmxlIDw9IDApKTsgLy9BTExJTlxuXG4gICAgICAgIGxldCBmb2xsb3dFbmRHYW1ibGUgPSBtaW5nYW1ibGU7IC8v5b635bee5omR5YWL5LiN5piv6Lef5YiwXG4gICAgICAgIHRoaXMudWlfdHh0Zm9sbG93RHluYW1pYy50ZXh0ID0gZm9sbG93RW5kR2FtYmxlIDw9IDAgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDA0KSA6IFVJVXRpbC5mb3JtYXROdW1iZXIxMDBUb0soZm9sbG93RW5kR2FtYmxlKSArIFwiXFxuXCIgKyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMjk2KTsgLy9zdHJhZGRsZeaXtuWAmeWmguaenOWJjemdoueOqeWutuS4jeWKoOazqO+8jOWImeaYr+i3n+azqDDvvIzliJnmmL7npLrnnIvniYzvvIzlpoLmnpzliY3pnaLmnInkurrliqDms6jliJnmmL7npLrot5/ms6hcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1pbkdhbWJsZTpcIiArIHRoaXMubW9kZWwuX21pbmdhbWJsZSArIFwiIG15R29sZDpcIiArIHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkKTtcblxuICAgICAgICBsZXQgZGFNaW5HYW1ibGUgPSAwO1xuICAgICAgICB0aGlzLlNob3dBY3Rpb25BZGRHYW1ibGUodHJ1ZSwgZGFNaW5HYW1ibGUpOyAvL+WkpyA6546w5Zyo5LiA55u05bGV56S644CC5ruh6Laz5p2h5Lu25omN6IO954K55Ye7XG4gICAgfVxuXG4gICAgLy/oh6rlt7Hkv53pmanlm57lkIhcbiAgICBwcml2YXRlIGJ1eUluc1R5cGU6IG51bWJlcjsvLzDlhajpg6jkv53mnKzlhajpg6jmu6HmsaAgMeWPquacieS4u+axoOS4u+axoOeahOS/neacrOa7oeaxoCAy5Y+q5pyJ5YiG5rGg5YiG5rGg55qE5L+d5pys5ruh5rGgICAgIFxuICAgIHByaXZhdGUgbWF4SW5zQWRkR29sZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1pbkluc0FkZEdvbGQgPSAwO1xuICAgIC8vcHJpdmF0ZSBpbnQgbWFuY2hpR29sZCA9IDA7XG4gICAgLy9wcml2YXRlIGludCBiYW9iZW5JbnNBZGRHb2xkID0gMDtcbiAgICBwcml2YXRlIG1hbmNoaUZJbnNBZGRHb2xkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYmFvYmVuRkluc0FkZEdvbGQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBtYW5jaGlaSW5zQWRkR29sZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGJhb2JlblpJbnNBZGRHb2xkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaW5zVHlwZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGdldFJhdGVCeUNvdW50KG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5idXBhaUxpc3QubGVuZ3RoID4gMCA/IHRoaXMuYnVwYWlMaXN0Lmxlbmd0aCA6IG51bTsvL+WIpOaWreeOqeWutuaYr+WQpuiHquW3semAieaLqeS6huihpeeJjFxuICAgICAgICBpZiAoY291bnQgPCAxKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKGNvdW50ID4gMjApIGNvdW50ID0gMjA7XG4gICAgICAgIGlmIChGX1RleGFzVmlldy5fZGljSW5zUmF0ZS5oYXMoY291bnQpKSByZXR1cm4gRl9UZXhhc1ZpZXcuX2RpY0luc1JhdGUuZ2V0KGNvdW50KTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaW5zZGVsYXlUaW1lOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpbnNUaW1lckNCOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBIYW5kbGVJbnN1cmFuY2VCdG5zRm9yU2VsZlR1cm4oKSB7XG4gICAgICAgIGlmICh0aGlzLkdldEluc1N3aXRjaCgpID09IDApLy/lvZPliY3niYzmoYzkv53pmanmj5DnpLrlhbPpl63vvIznm7TmjqXmlL7lvIPotK3kubDkv53pmanvvIzkuI3mmL7npLrkv53pmannlYzpnaJcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5XYWl0KCk7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19pbnN1cmFuY2VfdGV4KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9wb3NTZXJ2ZXIsIDAsIDAsIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudWlfQnRuSW5zdXJhbmNlUGFuZWwudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy51aV9CdG5JbnN1cmFuY2VQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfQnRuSW5zdXJhbmNlUGFuZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLmFkZFRpbWVyTm9DYWxsYmFjayh0aW1lb3V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuU2hvd0FjdGlvbkJ0bnMoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy51aV9CdG5JbnN1cmFuY2VQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRlbXBJbnNBZGRHb2xkID0gMDtcbiAgICAgICAgdGhpcy56aHVJbnNBZGRHb2xkID0gMDtcbiAgICAgICAgdGhpcy5mZW5JbnNBZGRHb2xkID0gMDtcbiAgICAgICAgdGhpcy51aV9mZW5jaGlOdW1UZXh0LnRleHQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnVpX3R4dE91dHNDbnQudGV4dCA9IFwiMFwiO1xuXG4gICAgICAgIC8vIHRoaXMudWlfZnVuY0J0bnMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2luc3VyYW5jZUFkZFBhbmVsLnZpc2libGUgPSB0cnVlOy8vIGZhbHNlO1xuXG4gICAgICAgIHRoaXMudWlfZmVuY2hpVGlwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVpX2ZlbmNoaVRpcC50ZXh0ID0gXCJcIjsvL+ivt+mAieaLqeWIhuaxoFxuXG4gICAgICAgIGxldCB6aHVjaGkgPSB0aGlzLm1vZGVsLmluc0xpc3QzMSAhPSBudWxsICYmIHRoaXMubW9kZWwuaW5zTGlzdDMxLmxlbmd0aCA+IDAgJiYgdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxID4gMDtcbiAgICAgICAgbGV0IGZlbmNoaSA9IHRoaXMubW9kZWwuaW5zTGlzdDMyICE9IG51bGwgJiYgdGhpcy5tb2RlbC5pbnNMaXN0MzIubGVuZ3RoID4gMCAmJiB0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzIgPiAwO1xuXG4gICAgICAgIC8vIHRoaXMudWlfYnRuSW5zQWxsLmVuYWJsZWQgPSB6aHVjaGkgfHwgZmVuY2hpO1xuICAgICAgICB0aGlzLnVpX2luc3VyYW5jZUluZm8uZW5hYmxlZCA9IHpodWNoaTtcbiAgICAgICAgdGhpcy51aV9pbnN1cmFuY2VJbmZvMzIuZW5hYmxlZCA9IGZlbmNoaTtcblxuICAgICAgICAvLyB0aGlzLnVpX2J0bkluc0FsbC5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KHpodWNoaSB8fCBmZW5jaGkgPyAxIDogMCk7XG4gICAgICAgIHRoaXMudWlfaW5zdXJhbmNlSW5mby5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KHpodWNoaSA/IDEgOiAwKTtcbiAgICAgICAgdGhpcy51aV9pbnN1cmFuY2VJbmZvMzIuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChmZW5jaGkgPyAxIDogMCk7XG5cbiAgICAgICAgdGhpcy5zaG93SW5zQ29tQ2FyZChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fQ29tbW9uQ2FyZCk7XG4gICAgICAgIHRoaXMudWlfYnVwYWlQYW5lbC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuXG4gICAgICAgIHRoaXMuYnV5SW5zVHlwZSA9IHpodWNoaSAmJiBmZW5jaGkgPyAwIDogemh1Y2hpID8gMSA6IDI7Ly8w5pei5pyJ5YiG5rGg5Y+I5pyJ5Li75rGgIDHlj6ropoHkuLvmsaAgMuWPquacieWIhuaxoFxuICAgICAgICAvL+WQjOaXtuWHuuWPkeS4u+axoOWSjOWIhuaxoOaXtuWAme+8jOaMiemSruWPmOS4uuWFqOmDqOS/neacrOWSjOWFqOmDqOa7oeaxoO+8jOW5tuS4lOWAvOaYr2lsaXN05Y+WLOWPquacieS4u+axoOWOu2xpc3QzMSDlj6rmnInliIbmsaDlj5ZsaXN0MzJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJ1eUluc1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmNoaVpJbnNBZGRHb2xkID0gdGhpcy5tb2RlbC5pbnNMaXN0MzFbMl07XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5jaGlGSW5zQWRkR29sZCA9IHRoaXMubW9kZWwuaW5zTGlzdDMyWzJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFvYmVuWkluc0FkZEdvbGQgPSB0aGlzLm1vZGVsLmluc0xpc3QzMVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhb2JlbkZJbnNBZGRHb2xkID0gdGhpcy5tb2RlbC5pbnNMaXN0MzJbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5zQWRkSW5mbygxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmNoaVpJbnNBZGRHb2xkID0gdGhpcy5tb2RlbC5pbnNMaXN0MzFbMl07XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5jaGlGSW5zQWRkR29sZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5iYW9iZW5aSW5zQWRkR29sZCA9IHRoaXMubW9kZWwuaW5zTGlzdDMxWzFdO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFvYmVuRkluc0FkZEdvbGQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luc0FkZEluZm8oMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5jaGlaSW5zQWRkR29sZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5jaGlGSW5zQWRkR29sZCA9IHRoaXMubW9kZWwuaW5zTGlzdDMyWzJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFvYmVuWkluc0FkZEdvbGQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFvYmVuRkluc0FkZEdvbGQgPSB0aGlzLm1vZGVsLmluc0xpc3QzMlsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnNBZGRJbmZvKDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51aV90eHRCYW9iZW4udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5iYW9iZW5aSW5zQWRkR29sZCArIHRoaXMuYmFvYmVuRkluc0FkZEdvbGQpICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV90eHRCYW9iZW4xLnRleHQgPSB6aHVjaGkgJiYgZmVuY2hpID8gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjI0MykgOiBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzAyKTsvL+WFqOmDqOS/neacrCDkv53mnKxcbiAgICAgICAgdGhpcy51aV90ZXh0TWFuY2hpLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMubWFuY2hpWkluc0FkZEdvbGQgKyB0aGlzLm1hbmNoaUZJbnNBZGRHb2xkKSArIFwiXCI7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLorr7nva7mu6HmsaA9XCIgKyB0aGlzLnVpX3RleHRNYW5jaGkudGV4dCk7XG4gICAgICAgIHRoaXMudWlfdGV4dE1hbmNoaTEudGV4dCA9IHpodWNoaSAmJiBmZW5jaGkgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjQyKSA6IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMDMpOy8v5YWo6YOo5ruh5rGgIOa7oeaxoCAgXG4gICAgICAgIC8vIHRoaXMudWlfamlhbmdjaGlUZXh0LnRleHQgPSBcIuWFqOmDqFwiO1xuICAgICAgICAvLyB0aGlzLnVpX1Bvb2xOdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxICsgdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMyKSArIFwiXCI7XG5cbiAgICAgICAgLy8gdGhpcy51aV9zbGlkZXJJbnNBZGQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnVpX3RvdWJhb051bS50ZXh0ID0gdGhpcy51aV90ZXh0TWFuY2hpLnRleHQ7XG4gICAgICAgIC8vIHRoaXMudWlfcGVpZnVOdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoKHRoaXMubW9kZWwuY3VySmlhbmdjaGkzMSArIHRoaXMubW9kZWwuY3VySmlhbmdjaGkzMikgLyAzMSkrXCJcIjtcbiAgICAgICAgLy8gdGhpcy51aV9wZWlsdk51bS50ZXh0ID0gXCIzMVwiO1xuXG4gICAgICAgIHRoaXMudWlfZmVuY2hpTnVtVGV4dC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLnpodUluc0FkZEdvbGQgKyB0aGlzLmZlbkluc0FkZEdvbGQpICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV9mZW5jaGlUaXAudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMzcpOy8v6LSt5Lmw5L+d6ZmpXG5cbiAgICAgICAgLy8g5pi+56S65YCS6K6h5pe2XG4gICAgICAgIHRoaXMuaW5zZGVsYXlUaW1lID0gdGhpcy5tb2RlbC5sZWZ0dGltZTtcbiAgICAgICAgdGhpcy51aV9pbnNUaW1lVGV4dC50ZXh0ID0gdGhpcy5pbnNkZWxheVRpbWUgKyBcIlNcIjtcbiAgICAgICAgdGhpcy51aV9pbnNUaW1lVGV4dC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaW5zVGltZXJDQikge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW5zVGltZXJDQik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnNUaW1lckNCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pbnNkZWxheVRpbWUgLT0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc2RlbGF5VGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnNUaW1lckNCKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmluc1RpbWVyQ0IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX0J0bkluc3VyYW5jZVBhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfaW5zdXJhbmNlX3RleChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyLCAwLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51aV9pbnNUaW1lVGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51aV9pbnNUaW1lVGV4dC50ZXh0ID0gdGhpcy5pbnNkZWxheVRpbWUgKyBcIlNcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW5zVGltZXJDQiwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93Wmh1Y2hpKCkge1xuICAgICAgICB0aGlzLnVpX2ppYW5nY2hpVGV4dC50ZXh0ID0gXCLkuLvmsaBcIjtcbiAgICAgICAgdGhpcy51aV9Qb29sTnVtLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMubW9kZWwuY3VySmlhbmdjaGkzMSkgKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX1BlaUx2VGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM0MSkgKyBcIiBcIiArIHRoaXMuZ2V0UmF0ZUJ5Q291bnQodGhpcy5tb2RlbC5vdXRzMzEubGVuZ3RoKTsvL+i1lOeOh1xuICAgICAgICB0aGlzLnVpX0J1cGFpVGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM0MikgKyBcIiBcIiArIHRoaXMubW9kZWwub3V0czMxLmxlbmd0aDsvL+ihpeeJjFxuICAgIH1cbiAgICBwcml2YXRlIHNob3dGZW5jaGkoKSB7XG4gICAgICAgIHRoaXMudWlfamlhbmdjaGlUZXh0LnRleHQgPSBcIuWIhuaxoFwiO1xuICAgICAgICB0aGlzLnVpX1Bvb2xOdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMyKSArIFwiXCI7XG4gICAgICAgIHRoaXMudWlfUGVpTHZUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzQxKSArIFwiIFwiICsgdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGgpOy8v6LWU546HXG4gICAgICAgIHRoaXMudWlfQnVwYWlUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzQyKSArIFwiIFwiICsgdGhpcy5tb2RlbC5vdXRzMzIubGVuZ3RoOy8v6KGl54mMXG4gICAgfVxuXG5cbiAgICAvL+S/nemZqeaJi+eJjFxuICAgIHByaXZhdGUgU2hvd0luc1VzZXJDYXJkTGlzdCgpIHtcbiAgICAgICAgdGhpcy51aV9JbnNVc2VyQ2FyZExpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcblxuICAgICAgICAvL+iOt+WPluacgOWwj+S4i+azqOeOqeWutlxuICAgICAgICBsZXQgbWluQmV0VXNlcjogVGV4YXNVc2VyQ29tcCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zVHlwZSA9PSAyKSB7XG4gICAgICAgICAgICBsZXQgdFVzZXJzOiBUZXhhc1VzZXJDb21wW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MoaSk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCAmJiB1c2VyLnVzZXJJbmZvICE9IG51bGwgJiYgdXNlci5pc0lucykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwi5re75YqgYWxsaW7njqnlrrbvvJpcIit1c2VyLnBsYXllci5fbitcIizkuIvms6g9XCIrdXNlci5hbGxpbkdhbWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRVc2Vycy5wdXNoKHVzZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRVc2Vycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuYWxsaW5HYW1ibGUgLSBiLmFsbGluR2FtYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtaW5CZXRVc2VyID0gdFVzZXJzWzBdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIuacgOWwj+S4i+azqOeOqeWutu+8mlwiK21pbkJldFVzZXIucGxheWVyLl9uK1wiLOS4i+azqD1cIittaW5CZXRVc2VyLmFsbGluR2FtYmxlKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MoaSk7XG4gICAgICAgICAgICBpZiAodXNlciAhPSBudWxsICYmIHVzZXIudXNlckluZm8gIT0gbnVsbCAmJiB1c2VyLmlzSW5zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmQxID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZDIgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgLy/liIbmsaDljrvmjonmnIDlsI/kuIvms6jnjqnlrrZcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnNUeXBlID09IDIgJiYgbWluQmV0VXNlci5wbGF5ZXIudXNlcmlkID09IHVzZXIucGxheWVyLnVzZXJpZCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgaXBvczogQ29tbW9uUG9zVmFsU0QgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5tb2RlbC5pbnNJcG9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLm1vZGVsLmluc0lwb3Nbal0ucG9zID09IHVzZXIucGxheWVyLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXBvcyA9IHRoaXMubW9kZWwuaW5zSXBvc1tqXTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGlwb3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaXBvcy52YWwgIT0gMCAmJiBpcG9zLnZhbCAhPSB0aGlzLmluc1R5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCLkuI3mmL7npLpcIik7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLnVpX0luc1VzZXJDYXJkTGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcbiAgICAgICAgICAgICAgICBvYmouZ2V0Q2hpbGQoXCJ1c2VyTmFtZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdXNlci51c2VySW5mby5weS5fbjtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5zZXJ2ZXJwb3MgPT0gdGhpcy5tb2RlbC5fcG9zU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRDaGlsZChcInRvdWJhb2luZ1wiKS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdldENoaWxkKFwib3V0c0NudFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FyZDEgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fU2hvdVBhaSA9PSBudWxsIHx8IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9TaG91UGFpWzBdID09IG51bGwgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fU2hvdVBhaVswXSArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjYXJkMiA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9TaG91UGFpID09IG51bGwgfHwgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX1Nob3VQYWlbMV0gPT0gbnVsbCA/IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSA6IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9TaG91UGFpWzFdICsgXCJfXCIgKyBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdldENoaWxkKFwidG91YmFvaW5nXCIpLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdldENoaWxkKFwib3V0c0NudFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FyZDEgPSB1c2VyLm9wZW5DYXJkcyA9PSBudWxsIHx8IHVzZXIub3BlbkNhcmRzWzBdID09IG51bGwgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiB1c2VyLm9wZW5DYXJkc1swXSArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjYXJkMiA9IHVzZXIub3BlbkNhcmRzID09IG51bGwgfHwgdXNlci5vcGVuQ2FyZHNbMV0gPT0gbnVsbCA/IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSA6IHVzZXIub3BlbkNhcmRzWzFdICsgXCJfXCIgKyBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2Uob2JqLmdldENoaWxkKFwidXNlckNhcmQxXCIpLmFzTG9hZGVyLCBjYXJkMSwgXCJUZXhhc1wiKTtcbiAgICAgICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKG9iai5nZXRDaGlsZChcInVzZXJDYXJkMlwiKS5hc0xvYWRlciwgY2FyZDIsIFwiVGV4YXNcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBidXBhaVBhbmVsT2JqTGlzdDogQnVwYWlQYW5lbE9ialtdID0gW107Ly/kv53lrZjooaXniYzliJfooajvvIznlKjkuo7lhajpgIlcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMSDooajnpLrkuLvmsaAgMuihqOekuuWIhuaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidHlwZVwiPjwvcGFyYW0+XG4gICAgcHJpdmF0ZSBzaG93SW5zQWRkSW5mbyh0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy51aV9zbGlkZXJJbnNBZGQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5zVHlwZSA9IHR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1podWNoaUluc0FkZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1podWNoaSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZlbmNoaUluc0FkZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZlbmNoaSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU2hvd0luc1VzZXJDYXJkTGlzdCgpOy8v5pi+56S65b2T5YmN5rGg55qE55So5oi3XG4gICAgICAgIC8v5pyA5L2O5oqV5L+d5LiN5Li6MO+8jOS4jeiDveaUvuW8g+aKleS/nVxuICAgICAgICAvLyB0aGlzLnVpX2J0bmdpdmV1cC5lbmFibGVkID0gdGhpcy5taW5JbnNBZGRHb2xkID09IDA7XG4gICAgICAgIC8vIHRoaXMudWlfYnRuZ2l2ZXVwLmdyYXllZCA9IHRoaXMubWluSW5zQWRkR29sZCA+IDA7XG5cbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIuiuvue9ruaLieadhk1heD1cIit0aGlzLnVpX3NsaWRlckluc0FkZC5tYXgpO1xuICAgIH1cbiAgICBwcml2YXRlIHNob3daaHVjaGlJbnNBZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmluc0xpc3QzMSA9PSBudWxsIHx8IHRoaXMubW9kZWwuaW5zTGlzdDMxLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBwbGF5ZXJHb2xkID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkICsgKHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyID8gdGhpcy5tb2RlbC5jZ29sZCA6IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5nb2xkKSk7XG4gICAgICAgIHRoaXMuYnVwYWlMaXN0ID0gW107XG4gICAgICAgIC8v6L2s54mM5oqV5L+d6aKd5LiN6LaF6L+H5bqV5rGgKjAuMjXvvIzmsrPniYzmipXkv53pop3kuI3otoXov4flupXmsaAqMC41ZlxuICAgICAgICBsZXQgcmF0ZSA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA9PSAzID8gMC4yNSA6IDAuNTtcbiAgICAgICAgbGV0IG1heEdvbGQgPSBNYXRoLm1pbihwbGF5ZXJHb2xkLCBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5kaWNoaSAqIHJhdGUpKTtcblxuICAgICAgICB0aGlzLm1heEluc0FkZEdvbGQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxIC8gdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMS5sZW5ndGgpKTsgLy9tYXhHb2xkID49IHRoaXMubW9kZWwuaW5zTGlzdDMxWzJdID8gdGhpcy5tb2RlbC5pbnNMaXN0MzFbMl0gOiBtYXhHb2xkO1xuICAgICAgICB0aGlzLm1pbkluc0FkZEdvbGQgPSBtYXhHb2xkID49IHRoaXMubW9kZWwuaW5zTGlzdDMxWzBdID8gdGhpcy5tb2RlbC5pbnNMaXN0MzFbMF0gOiBtYXhHb2xkO1xuXG4gICAgICAgIHRoaXMuemh1SW5zQWRkR29sZCA9IHRoaXMuemh1SW5zQWRkR29sZCA9PSBudWxsIHx8IHRoaXMuemh1SW5zQWRkR29sZCA9PSAwID8gdGhpcy5taW5JbnNBZGRHb2xkIDogdGhpcy56aHVJbnNBZGRHb2xkO1xuICAgICAgICB0aGlzLnVpX3NsaWRlckluc0FkZC5taW4gPSB0aGlzLm1pbkluc0FkZEdvbGQ7XG4gICAgICAgIHRoaXMudWlfc2xpZGVySW5zQWRkLm1heCA9IHRoaXMubWFuY2hpWkluc0FkZEdvbGQgKyB0aGlzLm1hbmNoaUZJbnNBZGRHb2xkOy8vdGhpcy5tYXhJbnNBZGRHb2xkO1xuICAgICAgICB0aGlzLnVpX3NsaWRlckluc0FkZC52YWx1ZSA9IHRoaXMuemh1SW5zQWRkR29sZDtcbiAgICAgICAgdGhpcy50ZW1wSW5zQWRkR29sZCA9IHRoaXMuemh1SW5zQWRkR29sZDtcbiAgICAgICAgdGhpcy5zaG93Q3VySW5zQWRkKHRoaXMuemh1SW5zQWRkR29sZCk7XG5cblxuICAgICAgICB0aGlzLnVpX3RvdWJhb051bS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLnpodUluc0FkZEdvbGQpICsgXCJcIjtcbiAgICAgICAgbGV0IHBlaWZ1ID0gKHRoaXMuZ2V0UmF0ZUJ5Q291bnQodGhpcy5tb2RlbC5vdXRzMzEubGVuZ3RoKSAqIHRoaXMuemh1SW5zQWRkR29sZClcbiAgICAgICAgdGhpcy51aV9wZWlmdU51bS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChwZWlmdSA+PSB0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzEgPyB0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzEgOiBwZWlmdSkgKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX1BlaUx2VGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM0MSkgKyBcIiBcIiArIHRoaXMuZ2V0UmF0ZUJ5Q291bnQodGhpcy5tb2RlbC5vdXRzMzEubGVuZ3RoKS50b1N0cmluZygpOy8v6LWU546HXG5cblxuICAgICAgICAvLyB0aGlzLnVpX2Jhb2JlblRleHQudmlzaWJsZSA9ICh0aGlzLm1pbkluc0FkZEdvbGQgPD0gdGhpcy5tb2RlbC5pbnNMaXN0MzFbMV0pO1xuICAgICAgICBpZiAodGhpcy5taW5JbnNBZGRHb2xkIDw9IHRoaXMubW9kZWwuaW5zTGlzdDMxWzFdKSB7XG4gICAgICAgICAgICBsZXQgcmF0ZTIgPSAodGhpcy5tb2RlbC5pbnNMaXN0MzFbMV0gLSB0aGlzLm1pbkluc0FkZEdvbGQpIC8gKHRoaXMubWF4SW5zQWRkR29sZCAtIHRoaXMubWluSW5zQWRkR29sZCA+IDAgPyB0aGlzLm1heEluc0FkZEdvbGQgLSB0aGlzLm1pbkluc0FkZEdvbGQgOiAxKTtcbiAgICAgICAgICAgIC8vIGxldCBhYSA9IHRoaXMudWlfYmFvYmVuVGV4dC5wYXJlbnQuR2V0Q29tcG9uZW50PFJlY3RUcmFuc2Zvcm0+KCkuc2l6ZURlbHRhLnkgKiByYXRlMjtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfYmFvYmVuVGV4dC5ub2RlLnBvc2l0aW9uID0gY2MudjMoNDkuMiwgYWEsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXBhaVBhbmVsT2JqTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnVpX3R4dE91dHNDbnQudGV4dCA9IHRoaXMubW9kZWwub3V0czMxLmxlbmd0aCArIFwiXCI7XG4gICAgICAgIHRoaXMudWlfYnVwYWlQYW5lbC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kZWwub3V0czMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IHRoaXMubW9kZWwub3V0czMxW2ldO1xuICAgICAgICAgICAgdmFyIF90ZW1wQ2FyZCA9IHRoaXMudWlfYnVwYWlQYW5lbC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcbiAgICAgICAgICAgIGxldCB0b2dnbGU6IGZndWkuR0J1dHRvbiA9IF90ZW1wQ2FyZC5nZXRDaGlsZChcIkJ1dHRvblwiKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIGxldCBjaGVja21hcms6IGZndWkuR0xvYWRlciA9IF90ZW1wQ2FyZC5nZXRDaGlsZChcIkNoZWNrbWFya1wiKS5hc0xvYWRlcjtcbiAgICAgICAgICAgIHRvZ2dsZS5jbGVhckNsaWNrKCk7XG4gICAgICAgICAgICBjaGVja21hcmsudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInRoaXMubW9kZWwuaW5PcmRlciA9IFwiICsgdGhpcy5tb2RlbC5pbk9yZGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZS5lbmFibGVkID0gdGhpcy5tb2RlbC5pbk9yZGVyID09IDA7XG4gICAgICAgICAgICAvL+inhOWImeimgeaxguS4jeWNleeLrOmAiW91dHNcbiAgICAgICAgICAgIC8vIHRvZ2dsZS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjaGVja21hcmsudmlzaWJsZSA9ICFjaGVja21hcmsudmlzaWJsZTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoY2hlY2ttYXJrLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5idXBhaUxpc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYnVwYWlMaXN0LnNwbGljZSh0aGlzLmJ1cGFpTGlzdC5pbmRleE9mKHRlbXApLCAxKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1heEluc0FkZEdvbGQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxIC8gdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMS5sZW5ndGgpKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnVpX3NsaWRlckluc0FkZC5tYXggPSB0aGlzLm1hbmNoaVpJbnNBZGRHb2xkICsgdGhpcy5tYW5jaGlGSW5zQWRkR29sZDsvL3RoaXMubWF4SW5zQWRkR29sZDtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnpodUluc0FkZEdvbGQgPSB0aGlzLm1pbkluc0FkZEdvbGQ7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQudmFsdWUgPSB0aGlzLnpodUluc0FkZEdvbGQ7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93Q3VySW5zQWRkKHRoaXMuemh1SW5zQWRkR29sZCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShfdGVtcENhcmQuZ2V0Q2hpbGQoXCJ2YWxcIikuYXNMb2FkZXIsICh0ZW1wID09IDAgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiB0ZW1wICsgXCJfXCIgKyBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgMSkpLCBcIlRleGFzXCIpXG4gICAgICAgICAgICBsZXQgYnVwYWlPYmogPSBuZXcgQnVwYWlQYW5lbE9iaigpO1xuICAgICAgICAgICAgYnVwYWlPYmoubnVtID0gdGVtcDtcbiAgICAgICAgICAgIGJ1cGFpT2JqLmNvbSA9IF90ZW1wQ2FyZDtcbiAgICAgICAgICAgIHRoaXMuYnVwYWlQYW5lbE9iakxpc3QucHVzaChidXBhaU9iaik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnVpX2NjYXJkc1BhbmVsLnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgLy8gICAgIGxldCB0ZW1wID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuX0NvbW1vbkNhcmRbaV07XG4gICAgICAgIC8vICAgICBsZXQgX3RlbXBDYXJkID0gdGhpcy51aV9idXBhaVBhbmVsLmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tO1xuICAgICAgICAvLyAgICAgX3RlbXBDYXJkLmdldENoaWxkKFwidmFsXCIpLmFzTG9hZGVyLnVybCA9IFwidWk6Ly9UZXhhcy9cIiArICh0ZW1wID09IDAgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiB0ZW1wKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwcml2YXRlIHNob3dGZW5jaGlJbnNBZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmluc0xpc3QzMiA9PSBudWxsIHx8IHRoaXMubW9kZWwuaW5zTGlzdDMyLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgIGxldCBwbGF5ZXJHb2xkID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkICsgKHRoaXMubW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLm1vZGVsLklzU3VwcGVyID8gdGhpcy5tb2RlbC5jZ29sZCA6IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5nb2xkKSk7XG4gICAgICAgIHRoaXMuYnVwYWlMaXN0ID0gW107XG4gICAgICAgIC8v6L2s54mM5oqV5L+d6aKd5LiN6LaF6L+H5bqV5rGgKjAuMjXvvIzmsrPniYzmipXkv53pop3kuI3otoXov4flupXmsaAqMC41ZlxuICAgICAgICBsZXQgcmF0ZSA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aCA9PSAzID8gMC4yNSA6IDAuNTtcbiAgICAgICAgbGV0IG1heEdvbGQgPSBNYXRoLm1pbihwbGF5ZXJHb2xkLCBVSVV0aWwuTnVtYmVyVG9JbnQoKHRoaXMuZGljaGkgKiByYXRlKSkpO1xuXG4gICAgICAgIHRoaXMubWF4SW5zQWRkR29sZCA9IFVJVXRpbC5OdW1iZXJUb0ludCh0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzIgLyB0aGlzLmdldFJhdGVCeUNvdW50KHRoaXMubW9kZWwub3V0czMyLmxlbmd0aCkpOy8vbWF4R29sZCA+PSB0aGlzLm1vZGVsLmluc0xpc3QzMlsyXSA/IHRoaXMubW9kZWwuaW5zTGlzdDMyWzJdIDogbWF4R29sZDsgXG4gICAgICAgIHRoaXMubWluSW5zQWRkR29sZCA9IG1heEdvbGQgPj0gdGhpcy5tb2RlbC5pbnNMaXN0MzJbMF0gPyB0aGlzLm1vZGVsLmluc0xpc3QzMlswXSA6IG1heEdvbGQ7XG5cbiAgICAgICAgdGhpcy5mZW5JbnNBZGRHb2xkID0gdGhpcy5mZW5JbnNBZGRHb2xkID09IG51bGwgfHwgdGhpcy5mZW5JbnNBZGRHb2xkID09IDAgPyB0aGlzLm1pbkluc0FkZEdvbGQgOiB0aGlzLmZlbkluc0FkZEdvbGQ7XG4gICAgICAgIHRoaXMudWlfc2xpZGVySW5zQWRkLm1pbiA9IHRoaXMubWluSW5zQWRkR29sZDtcbiAgICAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQubWF4ID0gdGhpcy5tYW5jaGlaSW5zQWRkR29sZCArIHRoaXMubWFuY2hpRkluc0FkZEdvbGQ7Ly90aGlzLm1heEluc0FkZEdvbGQ7XG4gICAgICAgIHRoaXMudWlfc2xpZGVySW5zQWRkLnZhbHVlID0gdGhpcy5mZW5JbnNBZGRHb2xkO1xuICAgICAgICB0aGlzLnRlbXBJbnNBZGRHb2xkID0gdGhpcy5mZW5JbnNBZGRHb2xkO1xuICAgICAgICB0aGlzLnNob3dDdXJJbnNBZGQodGhpcy5mZW5JbnNBZGRHb2xkKTtcblxuXG4gICAgICAgIHRoaXMudWlfdG91YmFvTnVtLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuZmVuSW5zQWRkR29sZCkgKyBcIlwiO1xuICAgICAgICBsZXQgcGVpZnUgPSAodGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGgpICogdGhpcy5mZW5JbnNBZGRHb2xkKTtcbiAgICAgICAgdGhpcy51aV9wZWlmdU51bS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChwZWlmdSA+PSB0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzIgPyB0aGlzLm1vZGVsLmN1ckppYW5nY2hpMzIgOiBwZWlmdSkgKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX1BlaUx2VGV4dC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTM0MSkgKyBcIiBcIiArIHRoaXMuZ2V0UmF0ZUJ5Q291bnQodGhpcy5tb2RlbC5vdXRzMzIubGVuZ3RoKS50b1N0cmluZygpOy8v6LWU546HXG5cbiAgICAgICAgLy8gdGhpcy51aV9iYW9iZW5UZXh0LnZpc2libGUgPSAodGhpcy5taW5JbnNBZGRHb2xkIDw9IHRoaXMubW9kZWwuaW5zTGlzdDMyWzFdKTtcbiAgICAgICAgaWYgKHRoaXMubWluSW5zQWRkR29sZCA8PSB0aGlzLm1vZGVsLmluc0xpc3QzMlsxXSkge1xuICAgICAgICAgICAgbGV0IHJhdGUyID0gKHRoaXMubW9kZWwuaW5zTGlzdDMyWzFdIC0gdGhpcy5taW5JbnNBZGRHb2xkKSAvICh0aGlzLm1heEluc0FkZEdvbGQgLSB0aGlzLm1pbkluc0FkZEdvbGQgPiAwID8gdGhpcy5tYXhJbnNBZGRHb2xkIC0gdGhpcy5taW5JbnNBZGRHb2xkIDogMSk7XG4gICAgICAgICAgICAvLyBsZXQgYWEgPSB0aGlzLnVpX2Jhb2JlblRleHQucGFyZW50LkdldENvbXBvbmVudDxSZWN0VHJhbnNmb3JtPigpLnNpemVEZWx0YS55ICogcmF0ZTI7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2Jhb2JlblRleHQudHJhbnNmb3JtLmxvY2FsUG9zaXRpb24gPSBuZXcgVmVjdG9yMyg0OS4yZiwgYWEsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVwYWlQYW5lbE9iakxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy51aV90eHRPdXRzQ250LnRleHQgPSB0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGggKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX2J1cGFpUGFuZWwucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSB0aGlzLm1vZGVsLm91dHMzMltpXTtcbiAgICAgICAgICAgIGxldCBfdGVtcENhcmQgPSB0aGlzLnVpX2J1cGFpUGFuZWwuYWRkSXRlbUZyb21Qb29sKCkuYXNDb207XG4gICAgICAgICAgICBsZXQgdG9nZ2xlOiBmZ3VpLkdCdXR0b24gPSBfdGVtcENhcmQuZ2V0Q2hpbGQoXCJCdXR0b25cIikuYXNCdXR0b247XG4gICAgICAgICAgICBsZXQgY2hlY2ttYXJrOiBmZ3VpLkdMb2FkZXIgPSBfdGVtcENhcmQuZ2V0Q2hpbGQoXCJDaGVja21hcmtcIikuYXNMb2FkZXI7XG4gICAgICAgICAgICB0b2dnbGUuY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJ0aGlzLm1vZGVsLmluT3JkZXIgPSBcIiArIHRoaXMubW9kZWwuaW5PcmRlcik7XG4gICAgICAgICAgICB0b2dnbGUuZW5hYmxlZCA9IHRoaXMubW9kZWwuaW5PcmRlciA9PSAwO1xuICAgICAgICAgICAgLy/op4TliJnopoHmsYLkuI3ljZXni6xvdXRzXG4gICAgICAgICAgICAvLyB0b2dnbGUub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY2hlY2ttYXJrLnZpc2libGUgPSAhY2hlY2ttYXJrLnZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGNoZWNrbWFyay52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYnVwYWlMaXN0LnB1c2godGVtcCk7XG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYnVwYWlMaXN0LnNwbGljZSh0aGlzLmJ1cGFpTGlzdC5pbmRleE9mKHRlbXApLCAxKTtcblxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1heEluc0FkZEdvbGQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMyIC8gdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMS5sZW5ndGgpKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnVpX3NsaWRlckluc0FkZC5tYXggPSB0aGlzLm1hbmNoaVpJbnNBZGRHb2xkICsgdGhpcy5tYW5jaGlGSW5zQWRkR29sZDsvL3RoaXMubWF4SW5zQWRkR29sZDtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmZlbkluc0FkZEdvbGQgPSB0aGlzLm1pbkluc0FkZEdvbGQ7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy51aV9zbGlkZXJJbnNBZGQudmFsdWUgPSB0aGlzLmZlbkluc0FkZEdvbGQ7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zaG93Q3VySW5zQWRkKHRoaXMuZmVuSW5zQWRkR29sZCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShfdGVtcENhcmQuZ2V0Q2hpbGQoXCJ2YWxcIikuYXNMb2FkZXIsICh0ZW1wID09IDAgPyBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZU5hbWUgOiB0ZW1wICsgXCJfXCIgKyBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgMSkpLCBcIlRleGFzXCIpO1xuICAgICAgICAgICAgbGV0IGJ1cGFpT2JqID0gbmV3IEJ1cGFpUGFuZWxPYmooKTtcbiAgICAgICAgICAgIGJ1cGFpT2JqLm51bSA9IHRlbXA7XG4gICAgICAgICAgICBidXBhaU9iai5jb20gPSBfdGVtcENhcmQ7XG4gICAgICAgICAgICB0aGlzLmJ1cGFpUGFuZWxPYmpMaXN0LnB1c2goYnVwYWlPYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy51aV9jY2FyZHNQYW5lbC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIC8vICAgICB2YXIgdGVtcCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9Db21tb25DYXJkW2ldO1xuICAgICAgICAvLyAgICAgdmFyIF90ZW1wQ2FyZCA9IHRoaXMudWlfYnVwYWlQYW5lbC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcbiAgICAgICAgLy8gICAgIF90ZW1wQ2FyZC5nZXRDaGlsZChcInZhbFwiKS5hc0xvYWRlci51cmwgPSBcInVpOi8vVGV4YXMvXCIgKyAodGVtcCA9PSAwID8gQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lIDogdGVtcCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvL+ihpeeJjOWFqOmAiVxuICAgIHByaXZhdGUgc2VsZWN0QnVwYWlBbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmluT3JkZXIgPiAwKSByZXR1cm47XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudWlfYnRuQnVwYWlBbGxDYXJkLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGxldCBpc29uID0gaW5kZXggPT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgaXNvbiA9ICFpc29uO1xuICAgICAgICB0aGlzLmJ1cGFpTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnVwYWlQYW5lbE9iakxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGVja21hcms6IGZndWkuR0xvYWRlciA9IHRoaXMuYnVwYWlQYW5lbE9iakxpc3RbaV0uY29tLmdldENoaWxkKFwiQ2hlY2ttYXJrXCIpLmFzTG9hZGVyO1xuICAgICAgICAgICAgY2hlY2ttYXJrLnZpc2libGUgPSBpc29uO1xuICAgICAgICAgICAgaWYgKGlzb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1cGFpTGlzdC5wdXNoKHRoaXMuYnVwYWlQYW5lbE9iakxpc3RbaV0ubnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVwYWlMaXN0LnNwbGljZSh0aGlzLmJ1cGFpTGlzdC5pbmRleE9mKHRoaXMuYnVwYWlQYW5lbE9iakxpc3RbaV0ubnVtKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9idG5CdXBhaUFsbENhcmQuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChpc29uID8gMSA6IDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgSW5zQ29tQ2FyZHM6IGZndWkuR0xvYWRlcltdID0gW107XG4gICAgLy/mmL7npLrkv53pmanph4znmoTlhazniYxcbiAgICBwcml2YXRlIHNob3dJbnNDb21DYXJkKGNhcmRzOiBudW1iZXJbXSkge1xuICAgICAgICBpZiAodGhpcy5JbnNDb21DYXJkcyA9PSBudWxsKSB0aGlzLkluc0NvbUNhcmRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5JbnNDb21DYXJkc1tpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSB0aGlzLnVpX0J0bkluc3VyYW5jZVBhbmVsLmdldENoaWxkKFwiY29tQ2FyZFwiICsgKGkgKyAxKSkuYXNMb2FkZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5JbnNDb21DYXJkc1tpXSA9IGNhcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkluc0NvbUNhcmRzW2ldLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FyZHNbaV0gIT0gbnVsbCAmJiBjYXJkc1tpXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZSh0aGlzLkluc0NvbUNhcmRzW2ldLCBjYXJkc1tpXSArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpLCBcIlRleGFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuSW5zQ29tQ2FyZHNbaV0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy5JbnNDb21DYXJkc1tpXSwgQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lLCBcIlRleGFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuSW5zQ29tQ2FyZHNbaV0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZW1wSW5zQWRkR29sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgemh1SW5zQWRkR29sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgZmVuSW5zQWRkR29sZDogbnVtYmVyO1xuICAgIHByaXZhdGUgc2hvd0N1ckluc0FkZCh2YWx1ZTogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy50ZW1wSW5zQWRkR29sZCA9IHZhbHVlO1xuICAgICAgICAvL+WPluacieaViOWAvFxuICAgICAgICB0aGlzLnRlbXBJbnNBZGRHb2xkID0gdGhpcy5DbGFtcCh0aGlzLnRlbXBJbnNBZGRHb2xkLCAwLCB0aGlzLm1heEluc0FkZEdvbGQpO1xuICAgICAgICBpZiAodGhpcy5pbnNUeXBlID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuZmVuSW5zQWRkR29sZCA9IHRoaXMudGVtcEluc0FkZEdvbGQ7XG4gICAgICAgICAgICB0aGlzLnNob3dDdXJJbnNBZGRGKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpodUluc0FkZEdvbGQgPSB0aGlzLnRlbXBJbnNBZGRHb2xkO1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VySW5zQWRkWigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93Q3VySW5zQWRkWigpIHtcbiAgICAgICAgdGhpcy51aV90b3ViYW9OdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy56aHVJbnNBZGRHb2xkKSArIFwiXCI7XG4gICAgICAgIGxldCBwZWlmdSA9ICh0aGlzLmdldFJhdGVCeUNvdW50KHRoaXMubW9kZWwub3V0czMxLmxlbmd0aCkgKiB0aGlzLnpodUluc0FkZEdvbGQpXG4gICAgICAgIHRoaXMudWlfcGVpZnVOdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAocGVpZnUgPj0gdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxID8gdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMxIDogcGVpZnUpICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV9wZWlsdk51bS50ZXh0ID0gdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMS5sZW5ndGgpICsgXCJcIjtcblxuICAgICAgICBpZiAodGhpcy56aHVJbnNBZGRHb2xkID4gMCkge1xuICAgICAgICAgICAgdGhpcy51aV9QZWlMdlRleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MDUpICsgXCIgXCIgKyB0aGlzLnVpX3BlaWZ1TnVtLnRleHQ7Ly/otZTku5hcbiAgICAgICAgICAgIC8vIHRoaXMudWlfQnVwYWlUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDA2KSArIFwiIFwiICsgdGhpcy51aV90b3ViYW9OdW0udGV4dDsvL+aUr+S7mFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9QZWlMdlRleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzNDEpICsgXCIgXCIgKyB0aGlzLmdldFJhdGVCeUNvdW50KHRoaXMubW9kZWwub3V0czMxLmxlbmd0aCk7Ly/otZTnjodcbiAgICAgICAgICAgIHRoaXMudWlfQnVwYWlUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzQyKSArIFwiIFwiICsgKHRoaXMuYnVwYWlMaXN0Lmxlbmd0aCA+IDAgPyB0aGlzLmJ1cGFpTGlzdC5sZW5ndGggOiB0aGlzLm1vZGVsLm91dHMzMS5sZW5ndGgpOy8v6KGl54mMXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93Q3VySW5zQWRkRigpIHtcbiAgICAgICAgdGhpcy51aV90b3ViYW9OdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5mZW5JbnNBZGRHb2xkKSArIFwiXCI7XG4gICAgICAgIGxldCBwZWlmdSA9ICh0aGlzLmdldFJhdGVCeUNvdW50KHRoaXMubW9kZWwub3V0czMyLmxlbmd0aCkgKiB0aGlzLmZlbkluc0FkZEdvbGQpXG4gICAgICAgIHRoaXMudWlfcGVpZnVOdW0udGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAocGVpZnUgPj0gdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMyID8gdGhpcy5tb2RlbC5jdXJKaWFuZ2NoaTMyIDogcGVpZnUpICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV9wZWlsdk51bS50ZXh0ID0gdGhpcy5nZXRSYXRlQnlDb3VudCh0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGgpICsgXCJcIjtcblxuICAgICAgICBpZiAodGhpcy5mZW5JbnNBZGRHb2xkID4gMCkge1xuICAgICAgICAgICAgdGhpcy51aV9QZWlMdlRleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MDUpICsgXCIgXCIgKyB0aGlzLnVpX3BlaWZ1TnVtLnRleHQ7Ly/otZTku5hcbiAgICAgICAgICAgIC8vIHRoaXMudWlfQnVwYWlUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDA2KSArIFwiIFwiICsgdGhpcy51aV90b3ViYW9OdW0udGV4dDsvL+aUr+S7mFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9QZWlMdlRleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzNDEpICsgXCIgXCIgKyB0aGlzLmdldFJhdGVCeUNvdW50KHRoaXMubW9kZWwub3V0czMyLmxlbmd0aCk7Ly/otZTnjodcbiAgICAgICAgICAgIHRoaXMudWlfQnVwYWlUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzQyKSArIFwiIFwiICsgKHRoaXMuYnVwYWlMaXN0Lmxlbmd0aCA+IDAgPyB0aGlzLmJ1cGFpTGlzdC5sZW5ndGggOiB0aGlzLm1vZGVsLm91dHMzMi5sZW5ndGgpOy8v6KGl54mMXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dJbnNKYWNrcG90KHBvdGxpc3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChwb3RsaXN0ICE9IG51bGwgJiYgcG90bGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2luc2phY2twb3RwYXJhbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX2luc2phY2twb3RwYXJhbnQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG90bGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIGNvbnRpbnVlOy8v56ys5LiA5Liq5piv5Li75rGgXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwb3RsaXN0W2ldO1xuICAgICAgICAgICAgICAgIHZhciBfdGVtcHBvdCA9IHRoaXMudWlfaW5zamFja3BvdHBhcmFudC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgICAgICBsZXQgcG90VHh0ID0gX3RlbXBwb3QuYXNDb20uZ2V0Q2hpbGQoXCJpbnNqYWNrcG90VHh0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgICAgIHBvdFR4dC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMFRvSyh0ZW1wKTtcbiAgICAgICAgICAgICAgICBsZXQgcG90SWR4VHh0ID0gX3RlbXBwb3QuYXNDb20uZ2V0Q2hpbGQoXCJpbnNqYWNrcG90SWR4XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgICAgIHBvdElkeFR4dC50ZXh0ID0gaS50b1N0cmluZygpOy8v6L655rGgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX2luc2phY2twb3RwYXJhbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v6I635Y+W6Lef55qE5pyA5bCP5YC8KOazqOaEj+S4jeaYr+i3n+WIsOeahOWAvO+8jOi3n+WIsOeahOWAvCDpnIDopoHliqDkuIrlt7Lnu4/kuIvms6jnmoTlgLwpXG4gICAgcHJpdmF0ZSBHZXRGb2xsb3dNaW5HYW1ibGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuX21pbmdhbWJsZTtcbiAgICB9XG5cbiAgICAvL++8iOW6leaxoCvmnKzova7oh6rouqvot5/ms6jmiYDpnIDopoHnmoTorqHliIbvvIkqIOWAjeaVsCAr5LiK5a625oqV5rOo5pWw5YC8LS3oh6rouqvlt7LmipXms6jmlbDlgLwgIOmmluS4quS4i+azqOeahOeOqeWutuaYvuekuuWkp+ebsueahCAyIDMgNCDlgI1cbiAgICAvLzE65piv6Lef55qE5YC8IDI65piv5YWs5byPKjEvMiAzOuaYr+WFrOW8jyoyLzMgNDrmmK/lhazlvI8qMVxuICAgIHByaXZhdGUgR2V0RGFHYW1ibGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgZGFHYW1ibGUgPSB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICBsZXQgdHlwZSA9IDA7XG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9IHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdHlwZSA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgMSwgMyk7XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSB0aGlzLm1vZGVsLmZpcnN0VHVyblN0YXJ0ID8gdGhpcy5tb2RlbC5icmF0ZSAqIDQgKiAyIDogdGhpcy5HZXREYUdhbWJsZUJ5QWRkVHlwZSh0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0eXBlID0gUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyAyLCA1KTtcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9IHRoaXMubW9kZWwuZmlyc3RUdXJuU3RhcnQgPyB0aGlzLm1vZGVsLmJyYXRlICogNCAqIDMgOiB0aGlzLkdldERhR2FtYmxlQnlBZGRUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHR5cGUgPSBQbGF5ZXJQcmVmcy5HZXRJbnQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCArIFwiX2tleV9qaWF6aHVcIiArIDMsIDcpO1xuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gdGhpcy5tb2RlbC5maXJzdFR1cm5TdGFydCA/IHRoaXMubW9kZWwuYnJhdGUgKiA0ICogNCA6IHRoaXMuR2V0RGFHYW1ibGVCeUFkZFR5cGUodHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdHlwZSA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgNCwgMSk7XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSB0aGlzLkdldERhR2FtYmxlQnlBZGRUeXBlMih0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0eXBlID0gUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyA1LCAxKTtcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9IHRoaXMuR2V0RGFHYW1ibGVCeUFkZFR5cGUyKHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYUdhbWJsZTtcbiAgICB9XG4gICAgcHVibGljIEdldERhR2FtYmxlQnlBZGRUeXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBkYUdhbWJsZSA9IHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxIC8gNCkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxIC8gMykgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxIC8gMikgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAzIC8gNSkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAyIC8gMykgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAzIC8gNCkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gVUlVdGlsLk51bWJlclRvSW50KCh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxKSArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQoKHRoaXMuZGljaGkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpKSAqIDMgLyAyKSArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQpOy8vQWxsaW5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA8IDkgJiYgdHlwZSA+PSAxICYmIGRhR2FtYmxlID4gMTAwKSB7XG4gICAgICAgICAgICBkYUdhbWJsZSA9IFVJVXRpbC5OdW1iZXJUb0ludChkYUdhbWJsZSAvIDEwMCk7XG4gICAgICAgICAgICByZXR1cm4gZGFHYW1ibGUgKiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGFHYW1ibGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEdldERhR2FtYmxlQnlBZGRUeXBlMih0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgZGFHYW1ibGUgPSB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSAodGhpcy5kaWNoaSArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCkpICogMSAvIDQgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gKHRoaXMuZGljaGkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpKSAqIDEgLyAzICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9ICh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxIC8gMiArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSAodGhpcy5kaWNoaSArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCkpICogMiAvIDMgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGRhR2FtYmxlID0gKHRoaXMuZGljaGkgKyB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpKSAqIDMgLyA0ICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9ICh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAxICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBkYUdhbWJsZSA9ICh0aGlzLmRpY2hpICsgdGhpcy5HZXRGb2xsb3dNaW5HYW1ibGUoKSkgKiAzIC8gMiArIHRoaXMuR2V0Rm9sbG93TWluR2FtYmxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZGFHYW1ibGUgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQpOy8vQWxsaW5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA8IDkgJiYgdHlwZSA+PSAyKSB7XG4gICAgICAgICAgICBkYUdhbWJsZSA9IGRhR2FtYmxlIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIGRhR2FtYmxlICogMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhR2FtYmxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBHZXRNaW5EYUdhbWJsZVR5cGUoKTogbnVtYmVyLy/ojrflj5bliLDmnIDlsI/liqDms6jnmoTmjInpkq5cbiAgICB7XG4gICAgICAgIGxldCB0eXBlMSA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgMSwgMyk7XG4gICAgICAgIGxldCB0eXBlMiA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgMiwgNSk7XG4gICAgICAgIGxldCB0eXBlMyA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgMywgNyk7XG4gICAgICAgIGxldCB0eXBlNCA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgNCwgMSk7XG4gICAgICAgIGxldCB0eXBlNSA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgNSwgMSk7XG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heCh0eXBlMSwgdHlwZTIsIHR5cGUzKTtcbiAgICAgICAgdHlwZTQgPSB0eXBlNCA9PSAxID8gbWF4IDogdHlwZTQ7Ly/lpoLmnpznrKzlm5vkuKrliqDms6jmjInpkq7pgInmi6nml6DliJnpu5jorqTnlKjmnIDlpKfnmoR0eXBl5Y675Yik5patXG4gICAgICAgIHR5cGU1ID0gdHlwZTUgPT0gMSA/IG1heCA6IHR5cGU1Oy8v5aaC5p6c56ys5LqU5Liq5Yqg5rOo5oyJ6ZKu6YCJ5oup5peg5YiZ6buY6K6k55So5pyA5aSn55qEdHlwZeWOu+WIpOaWrVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4odHlwZTEsIHR5cGUyLCB0eXBlMywgdHlwZTQsIHR5cGU1KTtcbiAgICAgICAgaWYgKHR5cGUxID09IG1pbikgcmV0dXJuIDI7XG4gICAgICAgIGVsc2UgaWYgKHR5cGUyID09IG1pbikgcmV0dXJuIDM7XG4gICAgICAgIGVsc2UgaWYgKHR5cGUzID09IG1pbikgcmV0dXJuIDQ7XG4gICAgICAgIGVsc2UgaWYgKHR5cGU0ID09IG1pbikgcmV0dXJuIDU7XG4gICAgICAgIGVsc2UgcmV0dXJuIDY7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBHZXREYUdhbWJsZUJhc2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuX2N1ck1heEdhbWJsZTtcbiAgICB9XG4gICAgLy/liKvkurrnmoTlm57lkIhcbiAgICBwcml2YXRlIEhhbmRsZUFjdGlvbkJ0bnNGb3JPdGhlclR1cm4oKSB7XG4gICAgICAgIHRoaXMuU2hvd0FjdGlvbkJ0bnMoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5Jc0NhbkhhbmRsZUFjdGlvbigpKSB0aGlzLlNob3dBY3Rpb25BdXRvKHRydWUpO1xuICAgIH1cbiAgICAvL+iuvue9rui+heWKqeaTjeS9nOaMiemSrizpnZ7oh6rlt7Hlm57lkIggLOS4lOiHquW3seacieaTjeS9nOadg+mZkCzkuJToh6rlt7HmsqHmnInmlbLnmoTmg4XlhrXkuIso5pWy5LqG55qE6K+dIOiHquW3seeahOmHkeW4geS4ujApXG4gICAgcHVibGljIFNob3dBY3Rpb25BdXRvKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVpX2J0bkF1dG9RaVBhaS52aXNpYmxlID0gaXNTaG93O1xuICAgICAgICB0aGlzLnVpX2J0bkF1dG9Gb2xsb3cudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG4gICAgLy/orr7nva4g5aSnIOaTjeS9nOaMiemSrlxuICAgIHB1YmxpYyBTaG93QWN0aW9uQWRkR2FtYmxlKGlzU2hvdzogYm9vbGVhbiwgZGFFbmRHYW1ibGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX2J0bkFkZC52aXNpYmxlID0gdGhpcy5tb2RlbC5nYW1ldHlwZSAhPSAyMCAmJiBpc1Nob3c7XG4gICAgICAgIHRoaXMudWlfQnRuQWRkTGltaXQudmlzaWJsZSA9IHRoaXMubW9kZWwuZ2FtZXR5cGUgIT0gMjAgJiYgKGlzU2hvdyk7XG4gICAgICAgIHRoaXMudWlfQnRuQWRkcGFuZWwudmlzaWJsZSA9IHRoaXMubW9kZWwuZ2FtZXR5cGUgIT0gMjAgJiYgKGlzU2hvdyk7XG4gICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgICAgLy8g5bqV5rGg55qE6YeR6aKd5YCN5pWwXG4gICAgICAgICAgICB0aGlzLnVpX2J0bjFhZGQuZ2V0Q2hpbGQoXCJUZXh0XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLm1vZGVsLmZpcnN0VHVyblN0YXJ0ID8gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJyYXRlICogNCAqIDIpICsgXCJcIiA6IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5HZXREYUdhbWJsZSgyKSkgKyBcIlwiO1xuICAgICAgICAgICAgaWYgKHRoaXMudWlfYnRuMWFkZC5nZXRDaGlsZChcIlRleHRcIikuYXNUZXh0RmllbGQudGV4dCA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMubW9kZWwuYnJhdGUgKiA0ICogMik7XG4gICAgICAgICAgICAgICAgbGV0IG51ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLkdldERhR2FtYmxlKDIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudWlfYnRuMTJhZGQuZ2V0Q2hpbGQoXCJUZXh0XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLm1vZGVsLmZpcnN0VHVyblN0YXJ0ID8gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJyYXRlICogNCAqIDMpICsgXCJcIiA6IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5HZXREYUdhbWJsZSgzKSkgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy51aV9idG4xM2FkZC5nZXRDaGlsZChcIlRleHRcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMubW9kZWwuZmlyc3RUdXJuU3RhcnQgPyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMubW9kZWwuYnJhdGUgKiA0ICogNCkgKyBcIlwiIDogVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLkdldERhR2FtYmxlKDQpKSArIFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bjE0YWRkLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLkdldERhR2FtYmxlKDUpKSArIFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bjE1YWRkLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLkdldERhR2FtYmxlKDYpKSArIFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bjFhZGQuZ2V0Q2hpbGQoXCJhZGRUeXBlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLm1vZGVsLmZpcnN0VHVyblN0YXJ0ID8gXCIyWFwiIDogdGhpcy5HZXRKaWF6aHVUeXBlKFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgMSwgMykpO1xuICAgICAgICAgICAgdGhpcy51aV9idG4xMmFkZC5nZXRDaGlsZChcImFkZFR5cGVcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMubW9kZWwuZmlyc3RUdXJuU3RhcnQgPyBcIjNYXCIgOiB0aGlzLkdldEppYXpodVR5cGUoUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyAyLCA1KSk7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bjEzYWRkLmdldENoaWxkKFwiYWRkVHlwZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5tb2RlbC5maXJzdFR1cm5TdGFydCA/IFwiNFhcIiA6IHRoaXMuR2V0Smlhemh1VHlwZShQbGF5ZXJQcmVmcy5HZXRJbnQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCArIFwiX2tleV9qaWF6aHVcIiArIDMsIDcpKTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuMTRhZGQuZ2V0Q2hpbGQoXCJhZGRUeXBlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLkdldEppYXpodVR5cGUyKFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgNCwgMSkpO1xuICAgICAgICAgICAgdGhpcy51aV9idG4xNWFkZC5nZXRDaGlsZChcImFkZFR5cGVcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuR2V0Smlhemh1VHlwZTIoUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyA1LCAxKSk7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bjE0YWRkLnZpc2libGUgPSAoUGxheWVyUHJlZnMuR2V0SW50KEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQgKyBcIl9rZXlfamlhemh1XCIgKyA0LCAxKSA+IDEgJiYgIXRoaXMubW9kZWwuZmlyc3RUdXJuU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy51aV9idG4xNWFkZC52aXNpYmxlID0gKFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgNSwgMSkgPiAxICYmICF0aGlzLm1vZGVsLmZpcnN0VHVyblN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMudWlfc2xpZGVyQWRkLm1pbiA9IDA7XG4gICAgICAgICAgICB0aGlzLm1heEFkZEdvbGQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodGhpcy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLmdvbGQgLyAxMDApO1xuXG5cbiAgICAgICAgICAgIGxldCBtaW5nYW1ibGUgPSB0aGlzLkdldEZvbGxvd01pbkdhbWJsZSgpOy8v5ruR5Yqo5p2h5pyA5bCP5pyJ5pWI5YC877yM5aaC5p6c5piv6Lef5rOo5YC85bCP5LqO5aSn55uy5YiZ5pivOuWkp+ebsi3ot5/ms6g75aaC5p6c6Lef5rOoPD0w5YiZ5piv5aSn55uy5YC877yM5aaC5p6c6Lef5rOo5YC8Pj3lpKfnm7LlgLzliJnmmK/ot5/ms6jlgLznmoTkuKTlgI1cbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2J0blhpdS52aXNpYmxlKVxuICAgICAgICAgICAgICAgIHRoaXMubWluQWRkR29sZCA9IHRoaXMubW9kZWwuYnJhdGUgKiAyO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbmdhbWJsZSA8PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbkFkZEdvbGQgPSB0aGlzLm1vZGVsLmJyYXRlICogMjtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmdhbWJsZSA8IHRoaXMubW9kZWwuYnJhdGUgKiAyKSB0aGlzLm1pbkFkZEdvbGQgPSB0aGlzLm1vZGVsLmJyYXRlICogNCAtIG1pbmdhbWJsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLm1pbkFkZEdvbGQgPSBtaW5nYW1ibGUgKiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMubWluQWRkR29sZCA9IHRoaXMuX2JmdGFibGUubXlVc2VyLnBsYXllci5nb2xkID49IHRoaXMubWluQWRkR29sZCA/IHRoaXMubWluQWRkR29sZCAvIDEwMCA6IHRoaXMubWF4QWRkR29sZDtcbiAgICAgICAgICAgIGxldCBteWdvbGQgPSB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZDtcbiAgICAgICAgICAgIHRoaXMubWluQWRkR29sZCA9IHRoaXMubW9kZWwuYnJhdGUgKiAyID4gbXlnb2xkID8gbXlnb2xkIDogdGhpcy5tb2RlbC5icmF0ZSAqIDI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMubWluQWRkR29sZCA9IDEgPT09IFwiLCB0aGlzLm1pbkFkZEdvbGQpO1xuICAgICAgICAgICAgdGhpcy5taW5BZGRHb2xkID0gTnVtYmVyKHRoaXMubWluQWRkR29sZC50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5taW5BZGRHb2xkID0gMiA9PT0gXCIsIHRoaXMubWluQWRkR29sZCk7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3NsaWRlckFkZC5tYXggPSB0aGlzLm1heEFkZEdvbGQ7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3NsaWRlckFkZC52YWx1ZSA9IHRoaXMubWluQWRkR29sZDtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0TnVtcy50ZXh0ID0gdGhpcy5taW5BZGRHb2xkICsgXCJcIjtcbiAgICAgICAgICAgIHRoaXMudWlfYmFyX3YyLmZpbGxBbW91bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5TZXRCdXR0b25FbmFibGUodGhpcy51aV9idG4xYWRkLCB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA+PSB0aGlzLkdldERhR2FtYmxlKDIpLCBjYy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0bjEyYWRkLCB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA+PSB0aGlzLkdldERhR2FtYmxlKDMpLCBjYy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0bjEzYWRkLCB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA+PSB0aGlzLkdldERhR2FtYmxlKDQpLCBjYy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0bjE0YWRkLCB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA+PSB0aGlzLkdldERhR2FtYmxlKDUpLCBjYy5Db2xvci5XSElURSk7XG4gICAgICAgICAgICB0aGlzLlNldEJ1dHRvbkVuYWJsZSh0aGlzLnVpX2J0bjE1YWRkLCB0aGlzLl9iZnRhYmxlLm15VXNlci5wbGF5ZXIuZ29sZCA+PSB0aGlzLkdldERhR2FtYmxlKDYpLCBjYy5Db2xvci5XSElURSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlQ3VyVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfdHh0Q3VyVGltZSA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnVpX3R4dEN1clRpbWUudGV4dCA9IChuZXcgRGF0ZSgpLmdldEhvdXJzKCkpICsgXCI6XCIgKyAobmV3IERhdGUoKS5nZXRNaW51dGVzKCkpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3M6IG51bWJlciA9IHRoaXMuR2V0QmF0dGVyeUxldmVsKCk7XG4gICAgICAgIC8vIHRoaXMudWlfc2xpZGVyUG93ZXIudmFsdWUgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51aV90eHRQcm9ncmVzcy50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHByb2dyZXNzICogMTAwKSArIFwiJVwiO1xuICAgIH1cbiAgICBHZXRCYXR0ZXJ5TGV2ZWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDE7Ly9TeXN0ZW1JbmZvLmJhdHRlcnlMZXZlbDsvL+eUteaxoFxuICAgIH1cblxuICAgIHByaXZhdGUgSGFuZGxlWXVZaW5TdGF0ZSgpIHtcbiAgICAgICAgLy8gdGhpcy51aV9idG5ZdVlpbi5lbmFibGVkID0gIUlzU2VsZldhdGNoKCkgJiYgIUlzU2VsZldhaXRUb1Rha2VJbigpOyA7XG4gICAgfVxuICAgIHB1YmxpYyBIYW5kbGVUYWJsZVJlY292ZXIodGFibGU6IHNjX2VudGVydGFibGVudW1fdGV4LCBwbGF5ZXJMaXN0OiBPdGhlclVzZXJJbmZvU0RbXSkge1xuICAgICAgICBpZiAodGFibGUgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgLy8gdGhpcy5pc0NhbkV4ZVRleE1hcyA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Q6IFRhYmxlUmVjb3ZlclRleGFzU0QgPSB0YWJsZS5fcmVjb3ZlcjtcbiAgICAgICAgLy/lhYjmm7TmlrDmlbDmja5cbiAgICAgICAgdGhpcy5VcGRhdGVSZWNvdmVyRGF0YSh0YWJsZSk7XG5cbiAgICAgICAgLy/mm7TmlrDnjqnlrrbkv6Hmga9cbiAgICAgICAgdGhpcy5zY19lbnRlcnRhYmxlX3RleGFzX24ocGxheWVyTGlzdCk7XG5cbiAgICAgICAgLy8g5pu05paw5bqE5a625L2N5a2QXG4gICAgICAgIHBsYXllckxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnB5LnVzZXJpZCk7XG4gICAgICAgICAgICBpZiAoX3RlbXBVc2VyKSB7XG4gICAgICAgICAgICAgICAgX3RlbXBVc2VyLlNldEJhbmtlcihpdGVtLnBvcyA9PSB0YWJsZS5fcmVjb3Zlci5iYW5rcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy5tb2RlbC5fU2hvdVBhaSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoXCJzaG91UGFpOlwiICsgdGhpcy5tb2RlbC5fU2hvdVBhaS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLl9TaG91UGFpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgSSA6IFwiICsgKGkgKyAxKSArIFwiIGlkOlwiICsgdGhpcy5tb2RlbC5fU2hvdVBhaVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbmdhbWJsZTogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgdGhpcy5GYVBhaU5vQW5pKHRoaXMubW9kZWwuX1Nob3VQYWkpO1xuXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+esrOS4gOWbnuWQiFxuICAgICAgICBsZXQgaXNPbmVSb3VuZDogYm9vbGVhbiA9IHRoaXMuZ2V0SXNPbmVSb3VuZChzZC5fcG9zMmJpZ3NtYWxsLCBzZC5fcG9zMmdhbWJsZSk7XG4gICAgICAgIC8v5pu05paw546p5a6254q25oCBIOS4i+azqFxuICAgICAgICBzZC5fcG9zMmdhbWJsZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnBvcyk7XG4gICAgICAgICAgICBpZiAodXNlciAhPSBudWxsICYmICF1c2VyLklzV2F0Y2goKSAmJiAhdXNlci5Jc1dhaXRUb1Rha2VJbigpICYmIHVzZXIudXNlckNvbm5lY3RTdGF0ZSAhPSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT25lUm91bmQgJiYgc2QuX3BvczJiaWdzbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNBY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNkLl9wb3MyYmlnc21hbGwubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gc2QuX3BvczJiaWdzbWFsbFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wb3MgPT0gaXRlbS5wb3MgJiYgZWxlbWVudC52YWwgPiBpdGVtLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFVzZXJTdGF0ZShpdGVtLnBvcywgaXNBY3Rpb24gPyBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5mb2xsb3cgOiBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5pbnZhbGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWwgPiB0aGlzLm1vZGVsLmJyYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFVzZXJTdGF0ZShpdGVtLnBvcywgVGV4YXNVc2VySGFuZGxlU3RhdGUuZGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRVc2VyU3RhdGUoaXRlbS5wb3MsIFRleGFzVXNlckhhbmRsZVN0YXRlLmZvbGxvdyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFVzZXJTdGF0ZShpdGVtLnBvcywgVGV4YXNVc2VySGFuZGxlU3RhdGUuaW52YWxpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VyLkdlbmVyYXRlQ2hpcF9uYmIoVUlVdGlsLk51bWJlclRvSW50KGl0ZW0udmFsKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtaW5nYW1ibGUucHVzaChpdGVtLnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v5pu05paw546p5a626Lqr5LiK55qE6YeR5biBXG4gICAgICAgIHNkLl9wb3MyZ29sZC5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgbGV0IF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHVzZXIucG9zKTtcbiAgICAgICAgICAgIGlmIChfdGVtcFVzZXIgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGlmIChfdGVtcFVzZXIucGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdGVtcFVzZXIuVXBkYXRlTW9uZXkoVUlVdGlsLk51bWJlclRvSW50KHVzZXIudmFsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGlmIChzZC5zaG91cGFpICE9IG51bGwgJiYgc2Quc2hvdXBhaS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHRoaXMuX2JmdGFibGUubXlVc2VyO1xuICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICghdXNlci5Jc1dhdGNoKCkgJiYgIXVzZXIuSXNXYWl0VG9UYWtlSW4oKSAmJiB1c2VyLnVzZXJDb25uZWN0U3RhdGUgIT0gVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IE1hdGgubWF4KGNvdW50LCBzZC5zaG91cGFpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlci5TaG93Rmlyc3RDYXJkKHNkLnNob3VwYWkpID09IFwiLCBzZC5zaG91cGFpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5fU2hvdVBhaSA9IHNkLnNob3VwYWk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6KGl5LiBIOmHjei/nuS5i+WQjuWmguaenOi/mOayoei9ruWIsOiHquW3seaTjeS9nOS4jeaYvuekuuaJi+eJjFxuICAgICAgICAgICAgICAgICAgICBsZXQgbXl1c2VyaWQgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNTaG93U2hvdVBhaTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUuZGVsYXkgPT0gMSkgeyAvLyDlu7bml7bmqKHlvI9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0YWJsZS5kZWxheSA9PSBcIiwgdGFibGUuZGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QuX3BvczJnaXZldXAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wb3MgPT0gbXl1c2VyaWQgJiYgaXRlbS52YWwgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7LlvIPniYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93U2hvdVBhaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNTaG93U2hvdVBhaSAxMSA9PSBcIiwgaXNTaG93U2hvdVBhaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZC5fcG9zMmxvb2suZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wb3MgPT0gbXl1c2VyaWQgJiYgaXRlbS52YWwgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7LnnIvniYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93U2hvdVBhaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNTaG93U2hvdVBhaSAyMiA9PSBcIiwgaXNTaG93U2hvdVBhaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZC5fcG9zMmFsbGluLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucG9zID09IG15dXNlcmlkICYmIGl0ZW0udmFsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bey5pON5L2cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2hvd1Nob3VQYWkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzU2hvd1Nob3VQYWkgMzMgPT0gXCIsIGlzU2hvd1Nob3VQYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2QuX3BvczJnYW1ibGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wb3MgPT0gbXl1c2VyaWQgJiYgaXRlbS52YWwgPiB0aGlzLm1vZGVsLmJyYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3suS4i+azqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dTaG91UGFpID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc1Nob3dTaG91UGFpIHhpYXpodSA9PSBcIiwgaXNTaG93U2hvdVBhaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2QuX29wZW5jYXJkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7Llj5HlhazniYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dTaG91UGFpID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzU2hvd1Nob3VQYWkgNDQ0NDQgPT0gXCIsIGlzU2hvd1Nob3VQYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LiN5piv5bu25pe25qih5byP6YO96KaB5pi+56S65omL54mMXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Nob3dTaG91UGFpID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzU2hvd1Nob3VQYWkgPT0gXCIsIGlzU2hvd1Nob3VQYWkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaG93U2hvdVBhaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5TaG93Rmlyc3RDYXJkKHNkLnNob3VwYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5VcGRhdGVQb3Moc2Quc2hvdXBhaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLlNob3dGaXJzdENhcmQoWzAsIDBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuVXBkYXRlUG9zKFswLCAwXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tb2RlbC5pc0dhbWluZykge1xuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNlbmRDYXJkSW5kZXggPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTZW5kQ2FyZEluZGV4ID0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2VuZENhcmRJbmRleCA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2QuX3BvczJsb29rLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS52YWwgPT0gMSkge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoaXRlbS5wb3MpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyICE9IG51bGwgJiYgIXVzZXIuSXNXYXRjaCgpICYmICF1c2VyLklzV2FpdFRvVGFrZUluKCkgJiYgdXNlci51c2VyQ29ubmVjdFN0YXRlICE9IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRVc2VyU3RhdGUoaXRlbS5wb3MsIFRleGFzVXNlckhhbmRsZVN0YXRlLnhpdSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNkLl9wb3MyYWxsaW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCAmJiAhdXNlci5Jc1dhdGNoKCkgJiYgIXVzZXIuSXNXYWl0VG9UYWtlSW4oKSAmJiB1c2VyLnVzZXJDb25uZWN0U3RhdGUgIT0gVXNlckNvbm5lY3RTdGF0ZS5rZWVwU2VhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFVzZXJTdGF0ZShpdGVtLnBvcywgVGV4YXNVc2VySGFuZGxlU3RhdGUuYWxsaW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2QuX3BvczJnaXZldXAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSB0aGlzLl9iZnRhYmxlLkdldFVzZXJCeVVzZXJJZChpdGVtLnBvcyk7XG4gICAgICAgICAgICAgICAgLy/nprvmoYzpgIDlh7rlm57liLDmiL/pl7TkuI3mmL7npLrlvIPniYznirbmgIFcbiAgICAgICAgICAgICAgICBpZiAodXNlciAhPSBudWxsICYmICF1c2VyLklzV2F0Y2goKSAmJiAhdXNlci5Jc1dhaXRUb1Rha2VJbigpICYmIHVzZXIudXNlckNvbm5lY3RTdGF0ZSAhPSBVc2VyQ29ubmVjdFN0YXRlLmtlZXBTZWF0ICYmIHVzZXIuc2VydmVycG9zICE9IHNkLmN0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFVzZXJTdGF0ZShpdGVtLnBvcywgVGV4YXNVc2VySGFuZGxlU3RhdGUuZ2l2ZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc09uZVJvdW5kKSB7XG4gICAgICAgICAgICBpZiAoc2QuX3BvczJiaWdzbWFsbCAmJiBzZC5fcG9zMmJpZ3NtYWxsLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyYWRsbGUgPSBzZC5fcG9zMmJpZ3NtYWxsLnJlZHVjZSgoaTEsIGkyKSA9PiBpMS52YWwgPiBpMi52YWwgPyBpMSA6IGkyKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RyYWRsbGVVc2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoc3RyYWRsbGUucG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyYWRsbGVVc2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyYWRsbGVVc2VyLnVwZGF0ZUhhbmRsZVN0YXRlVGV4dChUZXhhc1VzZXJIYW5kbGVTdGF0ZS5zdHJhZGxsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVKYWNrcG90KCk7XG4gICAgICAgIHRoaXMuVXBkYXRlTGFzdEpwb3QoKTtcbiAgICAgICAgdGhpcy5TaG93VUlKYWNrcG90KHRoaXMubW9kZWwuaXNHYW1pbmcpO1xuICAgICAgICB0aGlzLlNob3dVSVdhaXRQbGF5UGFuZWwoKTtcbiAgICAgICAgdGhpcy5TaG93Q29tbW9uQ2FyZHMoKTtcblxuICAgICAgICAvL+aWree6v+mHjei/nu+8jOaYr+WQpuiHquW3seaTjeS9nFxuICAgICAgICBpZiAoc2QuY3Rva2VuID09IHRoaXMubW9kZWwuX3Bvc1NlcnZlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuX21pbmdhbWJsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWluZ2FtYmxlLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuX21pbmdhbWJsZSA9IG1pbmdhbWJsZVswXSAtIG1pbmdhbWJsZVttaW5nYW1ibGUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vZGVsLmxlZnR0aW1lID0gc2QubHQ7XG4gICAgICAgICAgICB0aGlzLnRva2VuQWN0aW9uKHNkLmN0b2tlbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5sZWZ0dGltZSA9IDE1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5sZWZ0dGltZSA9IHNkLmx0O1xuICAgICAgICAgICAgdGhpcy50b2tlbkFjdGlvbihzZC5jdG9rZW4sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwubGVmdHRpbWUgPSAxNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q+U6LWb5qOA5rWL6L+b5YWl5ri45oiP5YmN77yM5pyJ5Z2Q5LiL5raI5oGvXG4gICAgICAgIGlmIChMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuVGV4U2l0ZG93bkRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHNpZERhdGFzID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLlRleFNpdGRvd25EYXRhO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWREYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnNjX3NpdGRvd25fdGV4X24oc2lkRGF0YXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLlRleFNpdGRvd25EYXRhID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q+U6LWb5qih5byP6K+35rGC5pu05paw5pWw5o2uXG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19jb21wZXRlX3RhYmxlX2luZm8oKTtcbiAgICAgICAgICAgIHRoaXMuaXNDYW5FeGVUZXhNYXMgPSB0cnVlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVvdXQpO1xuXG4gICAgICAgIC8v5q+U6LWb5qih5byP5pu05o2i6IOM5pmvXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmNvbXBldGVpZCAhPSAwKSB7XG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfemh1b2J1YmcsIFwibWF0Y2hCRzFcIiwgXCJUZXhhc1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmmK/lkKbmmL7npLrkv53pmalcbiAgICAgICAgaWYgKHRhYmxlLl9yZWNvdmVyLmluc2RhdGEpIHtcbiAgICAgICAgICAgIHRhYmxlLl9yZWNvdmVyLmluc2RhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5zY19pbnN0b2tlbl90ZXhfbihpdGVtKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g5piv5ZCm5pi+56S65pqC5YGcXG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm9wZW5wbGF5ID0gdGFibGUub3BlbnBsYXk7XG4gICAgICAgIGlmICh0YWJsZS5fcmVjb3Zlci5fc3RhdHVzICE9IDMpIHsgLy8g5LiN5Zyo5ri45oiP5LitXG4gICAgICAgICAgICB0aGlzLnNjX29wZW5wbGF5X3RleF9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXNPbmVSb3VuZChfcG9zMmJpZ3NtYWxsOiBDb21tb25Qb3NWYWxTRFtdLCBfcG9zMmdhbWJsZTogQ29tbW9uUG9zVmFsU0RbXSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGlmIChfcG9zMmJpZ3NtYWxsICYmIF9wb3MyYmlnc21hbGwubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdmFyIHN0cmFkbGxlID0gX3BvczJiaWdzbWFsbC5yZWR1Y2UoKGkxLCBpMikgPT4gaTEudmFsID4gaTIudmFsID8gaTEgOiBpMik7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX3BvczJnYW1ibGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBfcG9zMmdhbWJsZVtpbmRleF07XG4gICAgICAgICAgICAgICAgLy8gc3RyYWRsbGXkvY3nva7ov5jmsqHmk43kvZxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb3MgPT0gc3RyYWRsbGUucG9zICYmIGRhdGEudmFsID09IHN0cmFkbGxlLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGFibGVJbmZvKCkge1xuICAgICAgICBsZXQgc3RyMDogc3RyaW5nID0gXCJcIjsvL0ZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLk1hdGNoQ29kZSA9PSBudWxsIHx8IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLk1hdGNoQ29kZSA9PSBcIlwiID8gXCJcIiA6ICsgVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQwOCkgKyBcIjpcIiArIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLk1hdGNoQ29kZSArIFwiIFwiOy8v54mM5bGAIExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxNDA4KVxuICAgICAgICB0aGlzLnVpX3R4dEJhc2UudGV4dCA9IGAke3N0cjB9JHtUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDA5KX0ke1VJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5tb2RlbC5icmF0ZSl9LyR7VUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJyYXRlICogMil9LyR7VUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJyYXRlICogNCl9KCR7VUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLnByZWdhbWJsZSl9KWA7IC8v55uy5rOoXG4gICAgICAgIHRoaXMudWlfdHh0QmFzZS5zaW5nbGVMaW5lID0gdHJ1ZTsgLy90aGlzLkhvcml6b250YWxXcmFwTW9kZS5PdmVyZmxvdztcbiAgICAgICAgdGhpcy5VcGRhdGVKYWNrcG90KDAsIDApO1xuICAgICAgICB0aGlzLnVpX3R4dEFkZC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQxMCk7Ly/ot5/ms6hcbiAgICAgICAgdGhpcy51aV90eHRSb3VuZC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQxMSkgKyBcIjowXCI7Ly/lm57lkIhcbiAgICAgICAgdGhpcy51aV90eHRSb29tLnRleHQgPSBcIlwiOy8vVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTE4MCkgKyBcIjpcIiArIHRoaXMubW9kZWwuUm9vbV90bnVtYmVyOy8v5oi/6Ze05Y+3XG4gICAgICAgIHRoaXMudWlfdHh0Um9vbU5hbWVNaWQudGV4dCA9IFwiXCI7Ly9UZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNzQzKSArIFwiOlwiICsgdGhpcy5tb2RlbC5Sb29tX25hbWU7Ly/miL/pl7TlkI3lrZdcbiAgICAgICAgdGhpcy51aV90eHRDbHViTmFtZS52aXNpYmxlID0gKHRoaXMubW9kZWwuaW50b0NpZCA+IDApO1xuICAgICAgICB0aGlzLnVpX3R4dENsdWJOYW1lLnRleHQgPSB0aGlzLm1vZGVsLmN1clNDbHViICE9IG51bGwgPyB0aGlzLm1vZGVsLmN1clNDbHViLmNuYW1lIDogXCJcIjtcbiAgICAgICAgdGhpcy51aV90eHRQYXNzd29yZC50ZXh0ID0gXCJcIjsvL1wi5a+G56CBOiBcIisgIHRoaXMucm9vbVBhc3N3b3JkO1xuICAgICAgICB0aGlzLnVpX3R4dFBhc3N3b3JkLnZpc2libGUgPSBmYWxzZTsvLyghdGhpcy5yb29tUGFzc3dvcmQpO1xuICAgICAgICB0aGlzLnVpX3R4dEdhbWVUeXBlLnRleHQgPSAodGhpcy5tb2RlbC5nYW1ldHlwZSA9PSAyMCA/IFwiQU9GXCIgOiBcIlwiKSArICh0aGlzLm1vZGVsLmdhbWV0eXBlID09IDEwID8gXCLnn63niYxcIiA6IFwiXCIpICsgKHRoaXMubW9kZWwuaW5zID09IDEgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDEyKSArIFwiXCIgOiBcIlwiKSArICh0aGlzLm1vZGVsLmdwcyA9PSAxID8gXCJHUFNcIiA6IFwiXCIpICsgKHRoaXMubW9kZWwuaXAgPT0gMSA/IFwiSVBcIiA6IFwiXCIpICsgKHRoaXMubW9kZWwuZGVsYXkgPT0gMSA/IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE5NDUpICsgXCJcIiA6IFwiXCIpICsgKHRoaXMubW9kZWwuc2hvd0NhcmQgPT0gMSA/IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE5NDYpICsgXCJcIiA6IFwiXCIpICsgKHRoaXMubW9kZWwuY2ludG8gPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMTkzKSArIFwiXCIgOiBcIlwiKSArICh0aGlzLm1vZGVsLkluZmxvdyA+IDAgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjI5KSArIFwiOlwiICsgdGhpcy5tb2RlbC5JbmZsb3cgKyBcIiUgXCIgOiBcIlwiKSArICh0aGlzLm1vZGVsLmlvcyA/IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMzApIDogXCJcIik7Ly/kv53pmalcbiAgICAgICAgdGhpcy51aV90eHRHYW1lVHlwZS52aXNpYmxlID0gZmFsc2U7Ly8odGhpcy5tb2RlbC5nYW1ldHlwZSA9PSAyMCB8fCB0aGlzLm1vZGVsLmdhbWV0eXBlID09IDEwIHx8IHRoaXMubW9kZWwuaW5zID09IDEgfHwgdGhpcy5tb2RlbC5ncHMgPT0gMSB8fCB0aGlzLm1vZGVsLmlwID09IDEgfHwgdGhpcy5tb2RlbC5kZWxheSA9PSAxIHx8IHRoaXMubW9kZWwuc2hvd0NhcmQgPT0gMSB8fCB0aGlzLm1vZGVsLmNpbnRvIHx8IHRoaXMubW9kZWwuSW5mbG93ID4gMCk7Ly8gfHwgdGhpcy5tb2RlbC5pb3MpO1xuICAgICAgICBsZXQgdHh0R2FtZVR5cGUgPSB0aGlzLnVpX3R4dEdhbWVUeXBlLnRleHQgPT0gXCJcIiA/IFwiXCIgOiBcIihcIiArIHRoaXMudWlfdHh0R2FtZVR5cGUudGV4dCArIFwiKVwiO1xuICAgICAgICB0aGlzLnVpX3R4dFJvb20udGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAzMykgKyB0eHRHYW1lVHlwZSArIFwiLVwiICsgdGhpcy5tb2RlbC5Sb29tX3RudW1iZXI7Ly/lvrflt57miZHlhYso5qih5byPKS0gcm9vbWlkO1xuXG4gICAgICAgIC8v5q+U6LWbXG4gICAgICAgIHRoaXMudWlfaW1nTWF0Y2hSYW5rLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV90eHRNYXRjaFJhbmsudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfdHh0TWF0Y2hMdi50ZXh0ID0gXCJcIjtcbiAgICAgICAgdGhpcy51aV90eHROZXhCYXMudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfdHh0TmV4VGltZS50ZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuY29tcGV0ZWlkICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0R2FtZVR5cGUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dFJvb21OYW1lTWlkLnRleHQgPSBcIlwiOy8vVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDI3KSArIFwiOlwiICsgdGhpcy5tb2RlbC5tYXRjaE5hbWU7Ly/mr5TotZvlkI3np7BcbiAgICAgICAgICAgIHRoaXMudWlfdHh0Um9vbS50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDI4KSArIFwiOlwiICsgdGhpcy5tb2RlbC5jb21wZXRlaWQ7Ly/mr5TotZvnvJblj7cgXG4gICAgICAgICAgICB0aGlzLnVpX3R4dEdhbWVUeXBlLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMjMpOy8v5q+U6LWb5qih5byPXG4gICAgICAgICAgICB0aGlzLnVpX3R4dE1hdGNoTHYudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAyNCkgKyBcIjpcIiArIHRoaXMubW9kZWwubGV2ZWwgKyBcIi9cIiArIHRoaXMubW9kZWwubWF4X2xldmVsOy8v5q+U6LWb562J57qnXG4gICAgICAgICAgICB0aGlzLnVpX3R4dEJhc2UudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAyNSkgKyBcIjpcIiArIGAke1VJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5tb2RlbC5icmF0ZSl9LyR7VUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0aGlzLm1vZGVsLmJpZ2JsaW5kKX1gOy8v5b2T5YmN55uy5rOoXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+avlOi1m+aVsOaNrlxuICAgIHByaXZhdGUgdXBsZXZldGltZUZ1biA9IG51bGw7XG4gICAgcHVibGljIFVwZGF0ZU1hdGNoRGF0YShkYXRhOiBzY19jb21wZXRlX3RhYmxlX2luZm8pIHtcbiAgICAgICAgdGhpcy51aV90eHRHYW1lVHlwZS50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDIzKTsvL+avlOi1m+aooeW8j1xuICAgICAgICB0aGlzLnVpX3R4dE1hdGNoTHYudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAyNCkgKyBcIjpcIiArIGRhdGEubGV2ZWwgKyBcIi9cIiArIGRhdGEubWF4X2xldmVsOy8v5q+U6LWb562J57qnXG4gICAgICAgIHRoaXMudWlfdHh0QmFzZS50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDI1KSArIFwiOlwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLmJhc2VyYXRlKSArIFwiL1wiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLmludG8pOy8v5b2T5YmN55uy5rOoXG4gICAgICAgIHRoaXMudWlfdHh0TmV4QmFzLnRleHQgPSBcIuS4i+S4gOebsuazqDpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZGF0YS5uZXh0X2Jhc2VyYXRlKSArIFwiL1wiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLm5leHRfaW50byk7XG4gICAgICAgIGxldCB0ID0gZGF0YS5uZXh0X3VwbGV2ZWxfdGltZTtcbiAgICAgICAgaWYgKHQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cGxldmV0aW1lRnVuICE9IG51bGwgJiYgdGhpcy51cGxldmV0aW1lRnVuICE9IDApIGNsZWFyVGltZW91dCh0aGlzLnVwbGV2ZXRpbWVGdW4pO1xuICAgICAgICAgICAgdGhpcy51cGxldmV0aW1lRnVuID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV90eHROZXhUaW1lLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMjYpICsgXCI6XCIgKyBVSVV0aWwuZ2V0U3RyaW5nVGltZSh0KTsvL+a2qOebsuaXtumXtFxuICAgICAgICAgICAgICAgIHQtLTtcbiAgICAgICAgICAgIH0sIDEwMDAsIGRhdGEubmV4dF91cGxldmVsX3RpbWUpO1xuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRoaXMudXBsZXZldGltZUZ1bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dE5leFRpbWUudGV4dCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL+avlOi1m+aOkuWQjVxuICAgIHB1YmxpYyBVcGRhdGVNYXRjaFJhbmsoZGF0YTogc2NfY29tcGV0ZV9yYW5rX2luZm8pIHtcbiAgICAgICAgbGV0IHJhbmsgPSAwXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5pbmZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGEuaW5mb3NbaV0ucGxheWVyaWQgPT0gdGhpcy5tb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgcmFuayA9IGRhdGEuaW5mb3NbaV0ucmFuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX2ltZ01hdGNoUmFuay52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV90eHRNYXRjaFJhbmsudGV4dCA9IFwi56ysXCIgKyByYW5rICsgXCLlkI1cIjtcbiAgICB9XG4gICAgLy/mr5TotZvnu5PmnZ9cbiAgICBwdWJsaWMgTWFjdGhFbmQoZGF0YTogc2NfY29tcGV0ZV9hd2FyZF9pbmZvKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy50aXBWaWV3LlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDIxKSwgKCkgPT4geyAvL+W+iOmBl+aGvu+8jOaCqOiiq+a3mOaxsOS6hu+8geaYr+WQpuWkjea0u++8n1xuICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19zaWdudXAoZGF0YS5jb21wZXRlaWQpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICB9LCBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMjIpLCBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzkzKSk7Ly/lpI3mtLss5Y+W5raIXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhd2FyZCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuaW5mb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhd2FyZCArPSBkYXRhLmluZm9zW2ldLm51bSArIFwiXCIgKyBkYXRhLmluZm9zW2ldLm5hbWUgKyBcIlxcblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+avlOi1m+aYr+WQpue7k+adn1xuICAgICAgICAgICAgdGhpcy50aXBWaWV3LlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDIwKSArIGRhdGEucmFuayArIFwi5ZCN77yBXCIgKyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMTI2KSArIFwi77yaXFxuXCIgKyBhd2FyZCArIFwiXCIpOyAvL+aBreWWnOaCqOiOt+W+l+esrO+8jOWlluWKsVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJvb21QYXNzd29yZDogc3RyaW5nO1xuICAgIHB1YmxpYyBVcGRhdGVSZWNvdmVyRGF0YSh0YWJsZTogc2NfZW50ZXJ0YWJsZW51bV90ZXgpIHtcbiAgICAgICAgdGhpcy5pc0hhdmVBZGRHb2xkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCaWdFbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlbC5pc0dhbWluZyA9IHRhYmxlLl9yZWNvdmVyLl9zdGF0dXMgPT0gMztcbiAgICAgICAgdGhpcy5tb2RlbC5fanBvdCA9IHRhYmxlLmdwb3Q7XG4gICAgICAgIHRoaXMubW9kZWwuX2xhc3RqcG90ID0gdGFibGUubHBvdDtcbiAgICAgICAgdGhpcy5tb2RlbC5jbGlja251bSA9IHRhYmxlLmNsaWNrbnVtO1xuICAgICAgICB0aGlzLm1vZGVsLl9TaG91UGFpID0gdGFibGUuX3JlY292ZXIuc2hvdXBhaTtcbiAgICAgICAgdGhpcy5yb29tUGFzc3dvcmQgPSB0YWJsZS5wYXM7XG4gICAgICAgIHRoaXMubGFzdEdhbWJsZUdvbGQgPSAwO1xuICAgICAgICB0aGlzLmN1clNlbmRDYXJkSW5kZXggPSB0aGlzLm1vZGVsLmlzR2FtaW5nID8gMSA6IDA7XG4gICAgICAgIHRoaXMubW9kZWwuUGxheWluZ1VzZXJzID0gdGFibGUuX3JlY292ZXIuX3BvczJnYW1ibGU7XG4gICAgICAgIHRoaXMubW9kZWwuU2V0TG9ja0dvbGQodGFibGUubG9ja2dvbGQpO1xuICAgICAgICB0aGlzLm1vZGVsLlNldE1pblN0YXJ0R2FtYmxlKHRhYmxlLmxpbWl0Z29sZCk7XG4gICAgICAgIHRoaXMubW9kZWwuX0NvbW1vbkNhcmQgPSB0YWJsZS5fcmVjb3Zlci5fb3BlbmNhcmQ7XG4gICAgICAgIHRoaXMubW9kZWwuY3VyVGFibGVPdmVyQ291bnQgPSB0YWJsZS5fY3VyVGFibGVPdmVyQ291bnQ7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRVc2VyU3RhdGUodXNlcklkOiBudW1iZXIsIHN0YXRlOiBUZXhhc1VzZXJIYW5kbGVTdGF0ZSkge1xuICAgICAgICBsZXQgdXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKHVzZXJJZCk7XG4gICAgICAgIGlmICh1c2VyID09IG51bGwgfHwgdXNlci5wbGF5ZXIgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKCF1c2VyLklzV2F0Y2goKSAmJiAhdXNlci5Jc1dhaXRUb1Rha2VJbigpICYmIHRoaXMubW9kZWwuaXNHYW1pbmcpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PSBUZXhhc1VzZXJIYW5kbGVTdGF0ZS5naXZlVXApIHtcbiAgICAgICAgICAgICAgICB1c2VyLlVwZGF0ZUdpdmVVcFN0YXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXIudXBkYXRlSGFuZGxlU3RhdGVUZXh0KHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgQ2hlY2tNb3ZlVG9NeVBvcygpIHtcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubG9jYWxwb3MgPD0gMCB8fCBpdGVtLmxvY2FscG9zID4gdGhpcy5tb2RlbC5tYW5OdW0pIHsgcmV0dXJuIHRydWU7IH0vL+S9jee9rnBvc+Wkp+S6juaIv+mXtOS6uuaVsOS4jeWIt+aWsOS9jee9rlxuICAgICAgICAgICAgbGV0IHZlYzNJbmRleCA9IHRoaXMuR2V0TG9jYWxQb3NCeVNlcnZlclBvcyhpdGVtLmxvY2FscG9zKTtcbiAgICAgICAgICAgIGxldCBwb3NUcyA9IHRoaXMucG9zLmdldCh2ZWMzSW5kZXgpO1xuICAgICAgICAgICAgLy8gaXRlbS5yZWN0VHJhbnNmb3JtLmFuY2hvck1heCA9IHBvc1RzLmFuY2hvck1heDtcbiAgICAgICAgICAgIC8vIGl0ZW0ucmVjdFRyYW5zZm9ybS5hbmNob3JNaW4gPSBwb3NUcy5hbmNob3JNaW47XG4gICAgICAgICAgICB0aGlzLm1vdmVOMXRvTjIoaXRlbS5ub2RlLCBwb3NUcy5ub2RlKTtcbiAgICAgICAgICAgIGl0ZW0uU2V0UG9zSW5WaWV3KHZlYzNJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgUmVzZXRQb3MoKSB7XG4gICAgICAgIHRoaXMuUmVmcmVzaENhcmRJbWFnZSgpO1xuICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5sb2NhbHBvcyA8PSAwKSB7IHJldHVybiB0cnVlIH1cbiAgICAgICAgICAgIGxldCB2ZWMzSW5kZXggPSB0aGlzLkdldExvY2FsUG9zQnlTZXJ2ZXJQb3MoaXRlbS5sb2NhbHBvcyk7XG4gICAgICAgICAgICBsZXQgcG9zVHMgPSB0aGlzLnBvcy5nZXQodmVjM0luZGV4KTtcbiAgICAgICAgICAgIC8vIGl0ZW0ucmVjdFRyYW5zZm9ybS5hbmNob3JNYXggPSBwb3NUcy5hbmNob3JNYXg7XG4gICAgICAgICAgICAvLyBpdGVtLnJlY3RUcmFuc2Zvcm0uYW5jaG9yTWluID0gcG9zVHMuYW5jaG9yTWluO1xuICAgICAgICAgICAgdGhpcy5tb3ZlTjF0b04yKGl0ZW0ubm9kZSwgcG9zVHMubm9kZSk7XG4gICAgICAgICAgICBpdGVtLlNldFBvc0luVmlldyh2ZWMzSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIEdldExvY2FsUG9zQnlTZXJ2ZXJQb3Moc2VydmVyUG9zOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JmdGFibGUuR2V0TG9jYWxQb3Moc2VydmVyUG9zKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2NoYXRsb2coZGF0YTogc2NfY2hhdGxvZykge1xuICAgICAgICAvLyB0aGlzLmNoYXRDb21wLnNob3dMb2cgKGRhdGEpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfY2hhdF9uKGRhdGE6IHNjX2NoYXRfbikge1xuICAgICAgICBpZiAodGhpcy5fYmZ0YWJsZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MoZGF0YS5wb3MpO1xuICAgICAgICBpZiAoZGF0YS5rZWVwID4gMCAmJiB1c2VyICE9IG51bGwgJiYgdXNlci5wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVVc2VyU3RhdGUodXNlci5wbGF5ZXIudXNlcmlkLCBkYXRhLmtlZXAsIC0xKTtcbiAgICAgICAgICAgIHRoaXMuU2V0VXNlckZvcktlZXBTZWF0X25uKHVzZXIucGxheWVyLnVzZXJpZCwgZGF0YS5rZWVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjaGF0IHVzZXIgaXMgbnVsbDpcIiArIGRhdGEucG9zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkhhbmRsZUNoYXQoZGF0YS5wb3MsIGRhdGEudHlwZSwgZGF0YS5jb250ZW50LCBkYXRhLnRwb3MpO1xuICAgICAgICB1c2VyLlVwZGF0ZU1vbmV5KGRhdGEuZ29sZCk7XG4gICAgfVxuICAgIC8vMeivremfs++8jDLooajmg4XvvIwz5paH5pysLDTluLjnlKjor60gNS7njqnlrrblr7nnjqnlrrbpgIHnpLzniakgNi7lvLnluZVcbiAgICBwdWJsaWMgSGFuZGxlQ2hhdChwb3M6IG51bWJlciwgdHlwZTogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcsIHRvUG9zID0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JmdGFibGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBsZXQgdXNlciA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5UG9zKHBvcyk7XG4gICAgICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhdCB1c2VyIGlzIG51bGw6XCIgKyBwb3MpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXIuUGxheUNoYXRWb2ljZShwb3MsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHVzZXIuU2hvd0Vtb2ooY29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdXNlci5TaG93Q2hhdFNvdW5kKGNvbnRlbnQpOyAvL+WmguaenOaYr+iHquW3seeahOS4jeWkhOeQhizlrqLmiLfnq6/mj5DliY3lpITnkIbkuobnmoRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBsZXQgdG9Vc2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3ModG9Qb3MpO1xuICAgICAgICAgICAgICAgIGlmICh0b1VzZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0b1VzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodG9Qb3MgIT0gdXNlci5zZXJ2ZXJwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93R2lmdE1vdmUodXNlci5sb2NhbHBvcyA8PSAwID8gdGhpcy51aV9idG5SZWNvcmQuYXNDb20gOiB1c2VyLnVpX2ltZ0Vtb2ouYXNDb20sIHRvVXNlci51aV9pbWdFbW9qLmFzQ29tLCBjb250ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93R2lmdE1vdmUodXNlci5sb2NhbHBvcyA8PSAwID8gdGhpcy51aV9idG5SZWNvcmQuYXNDb20gOiB1c2VyLnVpX2ltZ0Vtb2ouYXNDb20sIHRvVXNlci51aV9pbWdFbW9qLmFzQ29tLCBjb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU4NikpOy8v6Ieq5bex5Y+R6YCB6KGo5oOFXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGxldCBub3RpZnlTdHIgPSB1c2VyLnBsYXllci5fbiArIFwiOlwiICsgY29udGVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGxOb3lpZmllckNvbXAuYWRkTm90aWZ5KG5vdGlmeVN0cik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93Vm9pY2UocG9zOiBudW1iZXIsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICBsZXQgdXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMuX2JmdGFibGUuR2V0VXNlckJ5UG9zKHBvcyk7XG4gICAgICAgIGlmICh1c2VyID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhdCB1c2VyIGlzIG51bGw6XCIgKyBwb3MpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGF0T3BlbiA9IFBsYXllclByZWZzLkdldEludChcImtleV9jaGF0X3ZhbHVlXCIsIDEpO1xuICAgICAgICBpZiAoY2hhdE9wZW4gPT0gMSlcbiAgICAgICAgICAgIHVzZXIuUGxheUNoYXRWb2ljZShwb3MsIGNvbnRlbnQpO1xuICAgIH1cbiAgICBwcml2YXRlIFNob3dHaWZ0KHRvOiBmZ3VpLkdDb21wb25lbnQsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAodG8gPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgLy8gdGhpcy5TaG93RWZ0R2lmdCAodG8sIGNvbnRlbnQpO1xuICAgIH1cbiAgICBwcml2YXRlIFNob3dHaWZ0TW92ZShmcm9tOiBmZ3VpLkdDb21wb25lbnQsIHRvOiBmZ3VpLkdDb21wb25lbnQsIGNvbnRlbnQ6IHN0cmluZywgaXNTZWxmOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChmcm9tID09IG51bGwgfHwgdG8gPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgICBsZXQgZ2lmTm9kZSA9IHRoaXMudXNlckluZm9Db21wLmdldENyZWF0ZUFuaW1hdGlvbk5vZGUoY29udGVudCk7XG4gICAgICAgIGlmIChnaWZOb2RlKSB7XG4gICAgICAgICAgICAvL+iHquW3seWPkemAgeihqOaDhVxuICAgICAgICAgICAgaWYgKGlzU2VsZiAmJiBUZXhhcy5naWZ0Q29uZmlnW2dpZk5vZGUubmFtZV1bXCJtb3ZlQW5pbWFcIl0gIT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg2KSk7Ly/oh6rlt7Hlj5HpgIHooajmg4VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWZOb2RlLnNldFNjYWxlKDEuMSwgMS4xKTtcbiAgICAgICAgICAgIHRoaXMuZmx5R2lmdChnaWZOb2RlLCBmcm9tLm5vZGUsIHRvLm5vZGUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldEdpZnQgZXJyb3IgY29udGVudDpcIiArIGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtICDoh6rlt7HnmoToioLngrlcbiAgICAgKiBAcGFyYW0gIOebruagh+eahOiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBmbHlHaWZ0KG5vZGU6IGNjLk5vZGUsIHNlbGZOb2RlOiBjYy5Ob2RlLCB0YXJnZXROb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBzcGluZUFuaSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJub2RlID0gXCIgKyBub2RlLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmVBbmltYSA9IFwiICsgVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wibW92ZUFuaW1hXCJdKTtcblxuICAgICAgICBpZiAoVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wibW92ZUFuaW1hXCJdICE9IFwiXCIgJiYgVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wibW92ZUFuaW1hXCJdICE9IFwiX1wiKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgc3BpbmVBbmkuc2V0QW5pbWF0aW9uKDAsIFRleGFzLmdpZnRDb25maWdbbm9kZS5uYW1lXVtcIm1vdmVBbmltYVwiXSwgdHJ1ZSk7XG4gICAgICAgICAgICAvL+iuvue9rui1t+eCueWdkOagh1xuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHNlbGZOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoc2VsZk5vZGUucG9zaXRpb24pKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIC8v56e75Yqo5Yiw55uu5qCH5Z2Q5qCHXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXROb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0Tm9kZS5wb3NpdGlvbikpO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuNSwgY2MudjIodGFyZ2V0UG9zaXRpb24ueCwgdGFyZ2V0UG9zaXRpb24ueSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BpbmVBbmkuc2V0QW5pbWF0aW9uKDAsIFRleGFzLmdpZnRDb25maWdbbm9kZS5uYW1lXVtcInBsYXlBbmltYVwiXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8v5pKt5pS+5a6M5oiQ5LqL5Lu2XG4gICAgICAgICAgICAgICAgc3BpbmVBbmkuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNwaW5lQW5pLm5vZGUucGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAvL+aSreaUvmVuZOWKqOeUu1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2lmTm9kZSA9IHRoaXMudXNlckluZm9Db21wLmdldENyZWF0ZUFuaW1hdGlvbk5vZGUobm9kZS5uYW1lICsgXCJfZW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lmTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZseUdpZnQoZ2lmTm9kZSwgc2VsZk5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFRleGFzLmdpZnRDb25maWdbbm9kZS5uYW1lXVtcInBsYXlBbmltYVwiXSAhPSBcIlwiICYmIFRleGFzLmdpZnRDb25maWdbbm9kZS5uYW1lXVtcIm1vdmVBbmltYVwiXSAhPSBcIl9cIikge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIC8v6K6+572u5Li657uI54K55Z2Q5qCHXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXROb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGFyZ2V0Tm9kZS5wb3NpdGlvbikpO1xuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuXG4gICAgICAgICAgICBzcGluZUFuaS5zZXRBbmltYXRpb24oMCwgVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wicGxheUFuaW1hXCJdLCBmYWxzZSk7XG4gICAgICAgICAgICBzcGluZUFuaS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzcGluZUFuaS5ub2RlLnBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wicGxheUFuaW1hXCJdICE9IFwiXCIgJiYgVGV4YXMuZ2lmdENvbmZpZ1tub2RlLm5hbWVdW1wibW92ZUFuaW1hXCJdID09IFwiX1wiKSB7XG4gICAgICAgICAgICAvL+iuvue9ruS4uue7iOeCueWdkOagh1xuICAgICAgICAgICAgc2VsZk5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoc2VsZk5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzZWxmTm9kZS5wb3NpdGlvbikpO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgc3BpbmVBbmkuc2V0QW5pbWF0aW9uKDAsIFRleGFzLmdpZnRDb25maWdbbm9kZS5uYW1lXVtcInBsYXlBbmltYVwiXSwgZmFsc2UpO1xuICAgICAgICAgICAgc3BpbmVBbmkuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BpbmVBbmkubm9kZS5wYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTaG93RWZ0QmlnV2luKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51aV9iaWdXaW4udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMudWlfYmlnV2luLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC5hc01vZ2FmYU51bWJlckZpZWxkKCkuUGxheSgwLCBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHNjb3JlKSwgMik7XG4gICAgICAgIHRoaXMudWlfYmlnV2luLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHNjb3JlIC8gMTAwKSArIFwiXCI7XG4gICAgICAgIHRoaXMuYmlnd2luU3Bpbi5iZ1N0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlfYmlnV2luLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYmlnd2luU3Bpbi5vbkRlc3Ryb3koKTtcbiAgICAgICAgfSwgNSk7XG5cbiAgICB9XG4gICAgcHVibGljIElzRGlzcGxheUNoYXQoKSB7XG4gICAgICAgIC8vIHRoaXMudWlfYnRuWXVZaW4udmlzaWJsZSA9IChQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2hhdF92YWx1ZVwiLCAxKSA9PSAxKTtcbiAgICB9XG4gICAgcHVibGljIFJlZnJlc2hEZXNrSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmNvbXBldGVpZCAhPSAwKSByZXR1cm47XG4gICAgICAgIGxldCBkZXNrQmdJbmRleCA9IFBsYXllclByZWZzLkdldEludChcImtleV9kZXNrQmdfaW5kZXhcIiwgMyk7XG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy51aV96aHVvYnViZywgXCJ3aGlybHBvcnRiZ1wiICsgZGVza0JnSW5kZXgsIFwiVGV4YXNcIilcbiAgICB9XG4gICAgcHVibGljIFJlZnJlc2hDYXJkSW1hZ2UoKSB7XG4gICAgICAgIGxldCBjYXJkQmdJbmRleCA9IFBsYXllclByZWZzLkdldEludChcImtleV9jYXJkQmdfaW5kZXhcIiwgMyk7XG4gICAgICAgIENhcmRSZWRiZXRDb21wLlNldENhcmRJbWFnZVR5cGUoY2FyZEJnSW5kZXgpO1xuICAgICAgICAvL+WIt+aWsOaJgOacieeJjOWei1xuICAgICAgICB0aGlzLl9iZnRhYmxlLnVzZXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLlVwZGF0ZUFsbENhcmRCZ0ltYWdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgUmVmcmVzaENvbW1vbkNhcmRzKCkge1xuICAgICAgICBpZiAodGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdCA9PSBudWxsIHx8IHRoaXMuX0NvbW1vbkNhcmRJbWFnZUxpc3QubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5fQ29tbW9uQ2FyZEltYWdlTGlzdC5mb3JFYWNoKHRlbXAgPT4ge1xuICAgICAgICAgICAgdGVtcC5VcGRhdGVDYXJkSW1hZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBSZWZyZXNoVXNlckN1ckdhbWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYmZ0YWJsZS51c2VyTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5yZXNldEN1ckdhbWJsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIENoZWNrQnRuQmFja1RhYmxlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudWlfYnRuQmFja1RhYmxlLnZpc2libGUgPSAodGhpcy5fYmZ0YWJsZS5teVVzZXIuc2VydmVycG9zID4gMCAmJiB0aGlzLl9iZnRhYmxlLm15VXNlci5Jc0tlZXAoKSk7XG5cbiAgICB9XG4gICAgcHVibGljIFNob3dVSUxlZnRDYXJkcyhpc1Nob3dTaG93UGFpOiBib29sZWFuLCBpc1Nob3dMZWZ0Q2FyZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaXNTaG93OiBib29sZWFuID0gdGhpcy5fYmZ0YWJsZS5teVVzZXIuc2VydmVycG9zID4gMCAmJiAhdGhpcy5Jc1NlbGZXYXRjaCgpICYmICF0aGlzLklzU2VsZldhaXRUb1Rha2VJbigpO1xuICAgICAgICB0aGlzLnVpX2J0blNob3dQYWkudmlzaWJsZSA9IChpc1Nob3cgJiYgaXNTaG93U2hvd1BhaSk7XG4gICAgICAgIHRoaXMudWlfYnRuTGVmdENhcmRzLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5nZXRMZWZ0Q2FyZENvc3QoKTtcbiAgICAgICAgdGhpcy51aV9idG5MZWZ0Q2FyZHMudmlzaWJsZSA9IChpc1Nob3cgJiYgaXNTaG93TGVmdENhcmQpO1xuICAgICAgICBpZiAoaXNTaG93ICYmIGlzU2hvd1Nob3dQYWkpIHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuU2hvd1BhaS5nZXRDaGlsZChcIlRleHRcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuZ2V0U2hvd1BhaUNvc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTaG93UGFpQ29zdCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY29zdDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgY29zdCA9ICh0aGlzLm1vZGVsLmJyYXRlIC8gMTAwICogMiAqIE1hdGgucG93KDIsIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmZzaG93bnVtKSkudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRTaG93UGFpQ29zdCBjb3N0ID09IFwiLCBjb3N0KTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBjb3N0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMZWZ0Q2FyZENvc3QoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNvc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIC8vIGxldCBjbGlja251bTogbnVtYmVyID0gdGhpcy5tb2RlbC5jbGlja251bSA+IDIgPyAyIDogdGhpcy5tb2RlbC5jbGlja251bTtcbiAgICAgICAgLy8gY29zdCA9ICh0aGlzLm1vZGVsLmJyYXRlIC8gMTAwMCAqIChjbGlja251bSArIDEpKS50b0ZpeGVkKDIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldExlZnRDYXJkQ29zdCBjb3N0ID09IFwiLCBjb3N0KTtcbiAgICAgICAgY29zdCA9ICh0aGlzLm1vZGVsLmJyYXRlIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBjb3N0O1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93WGl1UGFpKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhLnBvczJjYXJkcyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wb3MyY2FyZHMuZm9yZWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoaXRlbS5wb3MpO1xuICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCAmJiAhdGhpcy5tb2RlbC5pc0dhbWluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmdmZ2ZnZmdmZ2ZnZiB2YWx1ZT0gXCIsIGl0ZW0udmFsbGlzdCk7XG4gICAgICAgICAgICAgICAgdXNlci5TaG93Rmlyc3RDYXJkKGl0ZW0udmFsbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgU2hvd015Q2FyZChkYXRhOiBzY19zaG93bXljYXJkX3RleF9uKSB7XG4gICAgICAgIGxldCB1c2VyOiBUZXhhc1VzZXJDb21wID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoZGF0YS5Vc2VySUQpO1xuICAgICAgICBpZiAodXNlciAhPSBudWxsKSB7XG4gICAgICAgICAgICB1c2VyLlNob3dDYXJkQXQoZGF0YS5jYXJkUG9zLCBkYXRhLmNhcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93TXlDYXJkU3RhdHVzKGRhdGE6IHNjX3Nob3dteWNhcmRfdGV4KSB7XG4gICAgICAgIGxldCB1c2VyID0gdGhpcy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCk7XG4gICAgICAgIGlmICh1c2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHVzZXIuU2hvd0NhcmRTdGF0dXNBdChkYXRhLmNwb3MsIGRhdGEudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFNob3dSb3RhdGVDYXJkcyhsaXN0Q29udGVudDogZmd1aS5HQ29tcG9uZW50LCBjYXJkczogbnVtYmVyW10pIHtcbiAgICAgICAgVUlVdGlsLkhpZGVDaGlsZHJlbihsaXN0Q29udGVudCk7XG4gICAgICAgIGxldCBtaW5Db3VudCA9IE1hdGgubWluKGxpc3RDb250ZW50Ll9jaGlsZHJlbi5sZW5ndGgsIGNhcmRzLmxlbmd0aCwgMik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWluQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5TaG93Um90YXRlQ2FyZChsaXN0Q29udGVudC5fY2hpbGRyZW5baV0uYXNDb20sIGNhcmRzW2ldLCBpICogMC4zNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFNob3dSb3RhdGVDYXJkKHRzOiBmZ3VpLkdDb21wb25lbnQsIHZhbHVlOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpIHtcbiAgICAgICAgdHMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGxldCBjYXJkMDogZmd1aS5HQ29tcG9uZW50ID0gdHMuX2NoaWxkcmVuLmxlbmd0aCA+PSAxID8gdHMuX2NoaWxkcmVuWzBdLmFzQ29tIDogbnVsbDtcbiAgICAgICAgbGV0IGNhcmQxOiBmZ3VpLkdMb2FkZXIgPSB0cy5fY2hpbGRyZW4ubGVuZ3RoID4gMSA/IHRzLl9jaGlsZHJlblsxXS5hc0xvYWRlciA6IG51bGw7XG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoY2FyZDAuYXNMb2FkZXIsIENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSwgXCJUZXhhc1wiKVxuICAgICAgICBVSVV0aWwubG9hZEltYWdlKGNhcmQxLmFzTG9hZGVyLCB2YWx1ZSArIFwiX1wiICsgUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpLCBcIlRleGFzXCIpXG5cbiAgICAgICAgdHMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBjYXJkMC52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoY2FyZDEgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2FyZDEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhcmQxLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JYID0gMC41XG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMC41XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIC8vIGNjLmRlbGF5VGltZShkZWxheSksXG4gICAgICAgICAgICAvLyBjYy5yb3RhdGUzRFRvKGRlbGF5LDApLFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNrZXdUbygwLjIsIDAsIDIwKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZDAubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYXJkMC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZDEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjYXJkMS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5za2V3WSA9IC0yMDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNrZXdUbygwLjIsIDAsIDApXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICB0cy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH1cbiAgICBwcml2YXRlIHNlbmRBdWRpb1RpbWVyOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHVibGljIFBsYXlTZW5kQ2FyZEF1ZGlvKGNvdW50OiBudW1iZXIsIGludGVydmFsID0gMC4wNTIpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2VuZEF1ZGlvVGltZXIpXG5cbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2VuZEF1ZGlvVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnN0b3BFZmZlY3QoXCJnYW1lX2RlYWxcIik7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoXCJcIiwgXCJnYW1lX2RlYWxcIik7XG4gICAgICAgIH0sIGludGVydmFsKVxuXG4gICAgfVxuICAgIHB1YmxpYyBVcGRhdGVUYWtlSW5UaXAoKSB7XG4gICAgICAgIHRoaXMudWlfbmV3TXNnX2J0bi52aXNpYmxlID0gKHRoaXMubW9kZWwub3dubmVyaWQgPT0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCAmJiB0aGlzLm1vZGVsLmNpbnRvICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnRhYmxlQXBwbHkgPiAwKTtcbiAgICB9XG4gICAgcHVibGljIFNob3dPcGVuVGlwKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVpX29wZW5UaXAudmlzaWJsZSA9IChpc1Nob3cgJiYgdGhpcy5tb2RlbC5kZWxheSA9PSAxKTtcbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZUNvbmZpcm1TdGFydEJ0bigpIHtcbiAgICAgICAgdGhpcy5TaG93VUlXYWl0UGxheVBhbmVsKCk7XG4gICAgICAgIC8vIHRoaXMudWlfQ29uZmlybVN0YXJ0QnRuLnZpc2libGUgPSAodGhpcy5tb2RlbC5vd25uZXJpZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICYmIHRoaXMubW9kZWwub3BlbnBsYXkgJiYgIXRoaXMubW9kZWwuaXNvcGVuKTtcbiAgICB9XG4gICAgcHVibGljIFJlZnJlc2hUYWtlSW5QYW5lbCgpIHtcblxuICAgIH1cbiAgICAvLzHmmK/lvIAgMOaYr+WFs1xuICAgIHByaXZhdGUgR2V0SW5zU3dpdGNoKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBzdyA9IDE7XG4gICAgICAgIGxldCBpbnNUaXBTdHIgPSBQbGF5ZXJQcmVmcy5HZXRTdHJpbmcoXCJrZXlfaW5zVGlwX3ZhbHVlXCIsIFwiXCIpO1xuICAgICAgICBpZiAoaW5zVGlwU3RyICE9IG51bGwgJiYgaW5zVGlwU3RyICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBpbnNBcnI6IHN0cmluZ1tdID0gaW5zVGlwU3RyLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgICBpbnNBcnIuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVJbmZvQXJyOiBzdHJpbmdbXSA9IHRlbXAuc3BsaXQoJysnKTtcbiAgICAgICAgICAgICAgICBpZiAodGFibGVJbmZvQXJyLmxlbmd0aCA8IDIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLlJvb21fdG51bWJlciA9PSB0YWJsZUluZm9BcnJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3cgPSBOdW1iZXIucGFyc2VJbnQodGFibGVJbmZvQXJyWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3c7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93Q29uZmlybUhhbmRsZVBhbmVsKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVpX2NvbmZpcm1IYW5kbGVQYW5lbC52aXNpYmxlID0gaXNTaG93O1xuICAgIH1cblxuICAgIHB1YmxpYyBDbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgbnVtID0gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZTtcbiAgICAgICAgbnVtID0gdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICAvLyDmioogbm9kZTHnp7vliqjliLAgbm9kZTLnmoTkvY3nva5cbiAgICBwdWJsaWMgbW92ZU4xdG9OMihub2RlMTogY2MuTm9kZSwgbm9kZTI6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxuICAgIC8vIOiOt+WPluaKiiBub2RlMeenu+WKqOWIsCBub2RlMuS9jee9ruWQjueahOWdkOagh1xuICAgIHB1YmxpYyBjb252ZXJ0Tm9kZVNwYWNlQVIobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxuXG4gICAgcHVibGljIEdldEppYXpodVR5cGUodHlwZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiMS80XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgc3RyID0gXCIxLzNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjEvMlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiMy81XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgc3RyID0gXCIyLzNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjMvNFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiMVhcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjEuNVhcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIkFsbGluXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHVibGljIEdldEppYXpodVR5cGUyKHR5cGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBzdHIgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjU3KTsvL+aXoFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiMS80XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc3RyID0gXCIxLzNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjEvMlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiMi8zXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgc3RyID0gXCIzLzRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIjFYXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgc3RyID0gXCIxLjVYXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJBbGxpblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX29wZW5wbGF5X3RleF9uKCkge1xuICAgICAgICB0aGlzLnVpX3BhdXNldmlldy52aXNpYmxlID0gIUZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm9wZW5wbGF5O1xuICAgIH1cbn1cblxuY2xhc3MgQnVwYWlQYW5lbE9iaiB7XG4gICAgbnVtOiBudW1iZXI7XG4gICAgY29tOiBmZ3VpLkdDb21wb25lbnQ7XG59Il19