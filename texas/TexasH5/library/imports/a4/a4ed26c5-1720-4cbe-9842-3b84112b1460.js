"use strict";
cc._RF.push(module, 'a4ed2bFFyBMvphCO4QRKxRg', 'TexasHelpsettingComp');
// Games/texas/script/View/TexasHelpsettingComp.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var FuncSettingPanel_1 = require("./FuncSettingPanel");
var TexasUserComp_1 = require("./TexasUserComp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasHelpsettingComp = /** @class */ (function (_super) {
    __extends(TexasHelpsettingComp, _super);
    function TexasHelpsettingComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_toolbar = null; //设置
        _this.ui_liebiaoBtn = null;
        _this.ui_btntoolClose = null;
        _this.ui_btnOnlook = null;
        _this.ui_btnCardTip = null;
        _this.ui_btnSet = null;
        _this.ui_btnRecordScore = null;
        _this.ui_btnWaitSeat = null;
        _this.ui_btnExit = null;
        _this.ui_btnHelp = null;
        // public ui_btnInsTip:fgui.GButton = null;
        _this.ui_btnDismiss = null;
        _this.ui_btnJiesuan = null;
        _this.ui_btnDaichu = null;
        _this.ui_settingpanel = null;
        _this.ui_CardsIntroductionPanel = null; //牌型提示面板
        _this.ui_cardTipPanel = null;
        _this.ui_btn_close_Set = null;
        _this.ui_btnClose_card = null;
        _this.ui_btn_close_Ins = null;
        _this.ui_insTipPanel = null;
        // public ScrollRect ui_insTipScrollView;
        // public ScrollRect ui_TexRuleView;
        _this.ui_onLookText = null;
        _this.ui_cardTipText = null;
        _this.ui_setText = null;
        _this.ui_insTipText = null;
        _this.ui_recordScoreText = null;
        _this.ui_waitSeatText = null;
        _this.ui_exitText = null;
        _this.ui_dismissText = null;
        _this.ui_addRobitTxt = null;
        _this.ui_paixingTitle = null;
        _this.ui_bupaiTitle1 = null;
        _this.ui_peilvTitle1 = null;
        _this.ui_bupaiTitle2 = null;
        _this.ui_peilvTitle2 = null;
        _this.ui_peilvTips = null;
        _this.ui_insTipTitle = null;
        _this.ui_jiesuanText = null;
        _this.ui_insTipIcon = null;
        _this.ui_outGoldText = null;
        _this.ui_HelpBtn1 = null;
        _this.ui_HelpBtn2 = null;
        _this.ui_HelpBtn3 = null;
        _this.isOpen = true;
        _this.onLoadEnd = false;
        _this.btnHelpPos = null;
        _this.btnDismissPos = null;
        _this.isShowing = false;
        return _this;
    }
    //<=0:默认设置界面,1:功能设置
    TexasHelpsettingComp.prototype.MyStart = function (_settingType) {
        if (_settingType === void 0) { _settingType = 0; }
        this.mystart = true;
        this.settingType = _settingType;
        if (this.onLoadEnd) {
            this.MyStartEx();
        }
    };
    TexasHelpsettingComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.MyStartEx();
        }
    };
    TexasHelpsettingComp.prototype.MyStartEx = function () {
        if (this.ui_toolbar == null) {
            _super.prototype.AutoSetGoProperty.call(this);
            this.addListener();
        }
        this.InitImage();
        this.InitLanguage();
        this.isOpen = false;
        this.initUI(this.settingType);
        // this.Hide();
        // this.btnHelpPos = cc.v3(this.ui_btnHelp.x, this.ui_btnHelp.y, 0);
        // this.btnDismissPos = cc.v3(this.ui_btnDismiss.x, this.ui_btnDismiss.y, 0);
        this.btnHelpPos = this.ui_btnHelp.node.position;
        this.btnDismissPos = this.ui_btnDismiss.node.position;
        this.UpdateView();
    };
    TexasHelpsettingComp.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.UpdateView();
    };
    TexasHelpsettingComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    TexasHelpsettingComp.prototype.AutoSetGoProperty = function () {
    };
    TexasHelpsettingComp.prototype.InitLanguage = function () {
        this.ui_onLookText.text = "站起围观";
        this.ui_cardTipText.text = "玩法说明";
        this.ui_setText.text = "游戏设置";
        // this.ui_insTipText.text = "保险说明"
        this.ui_recordScoreText.text = "补充记分";
        this.ui_waitSeatText.text = "申请留座";
        this.ui_exitText.text = "返回大厅";
        this.ui_dismissText.text = "解散牌局";
        this.ui_addRobitTxt.text = "加机器人";
        this.ui_paixingTitle.text = "牌型提示";
        this.ui_bupaiTitle1.text = "补牌";
        this.ui_peilvTitle1.text = "赔率";
        this.ui_bupaiTitle2.text = "补牌";
        this.ui_peilvTitle2.text = "赔率";
        this.ui_peilvTips.text = "以下为背保险赔率";
        this.ui_insTipTitle.text = "保险说明";
        this.ui_jiesuanText.text = "离桌结算";
        this.ui_outGoldText.text = "带出记分";
        this.totalTexRuleList = [];
        // this.totalTexRuleList.AddRange(this.ui_TexRuleView.GetComponentsInChildren<Text>());
        // this.totalTexRuleList =  this.totalTexRuleList.find(item => item.name.indexOf("texRule")>=0);
        for (var i = 0; i < this.totalTexRuleList.length; i++) {
            // this.totalTexRuleList[i].text = LanguageConfig.getLanguageById(1246 + i);//"德州规则"           
        }
        this.paixingList = [];
        // this.paixingList.AddRange(this.ui_cardTipPanel.GetComponentsInChildren<Text>());
        for (var i = 0; i < this.paixingList.length; i++) {
            // this.paixingList[i].text = LanguageConfig.getLanguageById(1315 + i);
        }
        this.insTipList = [];
        // this.insTipList.AddRange(this.ui_insTipScrollView.content.GetComponentsInChildren<Text>());
        for (var i = 0; i < this.insTipList.length && i < 17; i++) {
            // this.insTipList[i].text = LanguageConfig.getLanguageById(1325 + i);
        }
    };
    TexasHelpsettingComp.prototype.InitImage = function () {
        this.ui_insTipIcon.url = "ui://Texas/baoxianshuoming_2x"; // Res.Singleton.SetImageSprite(ui_insTipIcon, "whirl_gaming", "baoxianshuoming_2x" + ToolsEx.GetImageLanguageSuf());
    };
    TexasHelpsettingComp.prototype.initUI = function (settingType) {
        this.ui_liebiaoBtn.visible = true; //(F_TexasViewCtr.instance.Model.openV > 0);
        this.ui_toolbar.visible = true;
        switch (settingType) {
            case 1:
                this.settingPanel = this.ui_settingpanel.node.getComponent(FuncSettingPanel_1.default);
                if (this.settingPanel == null) {
                    this.settingPanel = this.ui_settingpanel.node.addComponent(FuncSettingPanel_1.default);
                    this.settingPanel.fguiComponent = this.ui_settingpanel;
                    this.ui_settingpanel.node.active = true;
                }
                this.settingPanel.MyStart();
                break;
            default:
                // this.ui_settingpanel.node.getComponent(SettingPanel);
                break;
        }
        this.ui_settingpanel.visible = false;
        this.ui_btnDismiss.visible = (F_TexasViewCtr_1.default.instance.Model.ownnerid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid);
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btnClose_card.visible = this.isShowing;
    };
    TexasHelpsettingComp.prototype.addListener = function () {
        var _this = this;
        this.ui_liebiaoBtn.clearClick();
        this.ui_liebiaoBtn.onClick(function () {
            _this.openToolBar();
        });
        if (this.ui_btntoolClose != null) {
            this.ui_btntoolClose.clearClick();
            this.ui_btntoolClose.onClick(function () {
                if (_this.isOpen) {
                    _this.openToolBar();
                }
            });
        }
        this.ui_btnExit.clearClick();
        this.ui_btnExit.onClick(this.ExitTable);
        this.ui_btnDismiss.clearClick();
        this.ui_btnDismiss.onClick(this.DismissTable);
        // let isManager = LoginViewCtr.instance.Model.mPlayerModel._vlv == 20 || PlayerPrefs.GetString(Const.key_OpenV, string.Empty) == "1";
        // this.ui_btnHelp.visible = this.isManager;
        this.ui_btnHelp.onClick(function () {
            F_TexasViewCtr_1.default.instance.cs_enterrobot_tex();
        });
        this.ui_btnSet.onClick(function () {
            _this.openToolBar();
            if (_this.settingPanel != null) {
                _this.settingPanel.Show();
            }
        });
        this.ui_btnCardTip.onClick(function () {
            _this.openToolBar();
            _this.ui_CardsIntroductionPanel.visible = true;
            _this.ui_btnClose_card.visible = true;
            _this.ui_CardsIntroductionPanel.node.runAction(cc.moveTo(0.2, cc.v2(0, _this.ui_CardsIntroductionPanel.node.y)));
            _this.isShowing = true;
        });
        this.ui_btnClose_card.onClick(function () {
            _this.ui_btnClose_card.visible = false;
            _this.isShowing = false;
            _this.ui_CardsIntroductionPanel.node.runAction(cc.moveTo(0.2, cc.v2(-_this.ui_CardsIntroductionPanel.width, _this.ui_CardsIntroductionPanel.node.y))); // DoTweenEx.DOLocalMoveX(, -ui_CardsIntroductionPanel.sizeDelta.x, 0.5f);
        });
        this.ui_HelpBtn1.getController("isOn").setSelectedIndex(1);
        this.ui_HelpBtn1.onClick(function () {
            _this.setHelpType(1);
            _this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(0);
        });
        this.ui_HelpBtn2.onClick(function () {
            _this.setHelpType(2);
            _this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(1);
        });
        this.ui_HelpBtn3.onClick(function () {
            _this.setHelpType(3);
            _this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(2);
        });
        this.ui_btnRecordScore.onClick(function () {
            //补充记分
            if (_this.isCanAddGold()) {
                _this.openToolBar();
                F_TexasViewCtr_1.default.instance.view.ShowUIAddGoldPanel();
            }
        });
        this.ui_btnOnlook.onClick(function () {
            _this.openToolBar();
            F_TexasViewCtr_1.default.instance.cs_situpkeep_tex(false);
        });
        this.ui_btnWaitSeat.onClick(function () {
            _this.openToolBar();
            F_TexasViewCtr_1.default.instance.cs_situpkeep_tex(true);
        });
        this.ui_btnJiesuan.onClick(function () {
            _this.openToolBar();
            F_TexasViewCtr_1.default.instance.view.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(2277), function () {
                F_TexasViewCtr_1.default.instance.cs_advancesettle_tex();
            }, function () { });
        });
        // this.ui_btnInsTip.onClick(() =>
        // {
        //     this.openToolBar();
        //     this.ui_insTipPanel.visible = true;
        // });
        this.ui_btn_close_Ins.onClick(function () {
            _this.ui_insTipPanel.visible = false;
        });
        this.ui_btnDaichu.onClick(function () {
            _this.openToolBar();
            F_TexasViewCtr_1.default.instance.view.ShowUIOutGoldPanel();
        });
    };
    TexasHelpsettingComp.prototype.openToolBar = function () {
        this.isOpen = !this.isOpen;
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btntoolClose.visible = this.isOpen;
        if (this.isOpen)
            this.UpdateView();
    };
    // 关闭界面
    TexasHelpsettingComp.prototype.closeShowView = function () {
        this.isOpen = false;
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btntoolClose.visible = this.isOpen;
        if (this.isOpen)
            this.UpdateView();
    };
    TexasHelpsettingComp.prototype.ExitTable = function () {
        F_TexasViewCtr_1.default.instance.view.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(1686), function () {
            F_TexasViewCtr_1.default.instance.cs_applyexittable_tex(null);
        }, function () { }); //是否离开游戏
    };
    TexasHelpsettingComp.prototype.DismissTable = function () {
        F_TexasViewCtr_1.default.instance.view.tipView.ShowTip(TexasLanguage_1.TexasLanguage.getLanguageById(5005), function () {
            F_TexasViewCtr_1.default.instance.cs_dismisstable_tex(null);
        }, function () { }); //是否解散牌局 
    };
    TexasHelpsettingComp.prototype.removeListener = function () {
        this.ui_liebiaoBtn.clearClick();
        this.ui_btnExit.clearClick();
        this.ui_btnHelp.clearClick();
        this.ui_btnSet.clearClick();
        this.ui_btnDismiss.clearClick();
        this.ui_btn_close_Set.clearClick();
    };
    TexasHelpsettingComp.prototype.onDestroy = function () {
        this.removeListener();
    };
    TexasHelpsettingComp.prototype.UpdateView = function () {
        this.UpdateStateRecordScore();
        this.UpdateStateWaitSeat();
        this.UpdateStateOnLook();
        this.UpdateStateJiesuan();
        this.UpdateStateDaichu();
        this.updateBtnShow();
    };
    // 更新按钮显示
    TexasHelpsettingComp.prototype.updateBtnShow = function () {
        this.ui_btnHelp.visible = true;
        this.ui_btnDismiss.visible = true;
        var lv = AppConst_1.AppConst.mPlayerModel.lv;
        console.log("lv ===== ", lv);
        if (lv == 19) { // 只有解散牌局按钮
            this.ui_btnHelp.visible = false;
            // this.ui_btnDismiss.setPosition(this.btnHelpPos.x, this.btnHelpPos.y);
            this.ui_btnDismiss.node.position = this.btnHelpPos;
        }
        else if (lv == 20) { // 解散牌局和加机器人按钮
            // this.ui_btnHelp.setPosition(this.btnHelpPos.x, this.btnHelpPos.y);
            // this.ui_btnDismiss.setPosition(this.btnDismissPos.x, this.btnDismissPos.y);
            this.ui_btnHelp.node.position = this.btnHelpPos;
            this.ui_btnDismiss.node.position = this.btnDismissPos;
        }
        else {
            this.ui_btnHelp.visible = false;
            this.ui_btnDismiss.visible = false;
        }
    };
    TexasHelpsettingComp.prototype.isCanJiesuan = function () {
        return F_TexasViewCtr_1.default.instance.Model.IsSupper && !F_TexasViewCtr_1.default.instance.Model.IsSettle;
    };
    TexasHelpsettingComp.prototype.UpdateStateJiesuan = function () {
        this.SetButtonEnable(this.ui_btnJiesuan, true); //this.isCanJiesuan());
    };
    //申请留座
    TexasHelpsettingComp.prototype.UpdateStateWaitSeat = function () {
        this.SetButtonEnable(this.ui_btnWaitSeat, this.isCanSitup());
    };
    TexasHelpsettingComp.prototype.UpdateStateRecordScore = function () {
        this.SetButtonEnable(this.ui_btnRecordScore, this.isCanAddGold());
    };
    //带出
    TexasHelpsettingComp.prototype.UpdateStateDaichu = function () {
        this.SetButtonEnable(this.ui_btnDaichu, this.isCanOutGold());
    };
    TexasHelpsettingComp.prototype.SetButtonEnable = function (btn, isEnable) {
        btn.enabled = isEnable;
        var _img = btn._children[0].asLoader;
        if (_img == null)
            return;
        if (isEnable) {
            _img.color = cc.Color.WHITE;
        }
        else {
            _img.color = cc.Color.GRAY;
        }
        if (btn._children.length > 0) {
            var txt = btn._children[1]; // UIGradient txt = btn.transform.GetComponentInChildren<UIGradient>();
            if (txt != null) {
                txt.enabled = isEnable;
            }
        }
    };
    TexasHelpsettingComp.prototype.isCanAddGold = function () {
        return F_TexasViewCtr_1.default.instance.view.IsCanAddGold();
    };
    TexasHelpsettingComp.prototype.isCanOutGold = function () {
        return F_TexasViewCtr_1.default.instance.view.IsCanOutGold();
    };
    TexasHelpsettingComp.prototype.isCanTakeGold = function () {
        return !F_TexasViewCtr_1.default.instance.Model.isGaming && F_TexasViewCtr_1.default.instance.view._bftable.myUser.serverpos > 0 && F_TexasViewCtr_1.default.instance.view.IsSelfWatch() && F_TexasViewCtr_1.default.instance.view.IsSelfWaitToTakeIn(); /* && F_TexasViewCtr.instance.view.IsSelfWatch()*/
        ; //游戏结束之后，也可以带入           
    };
    TexasHelpsettingComp.prototype.isCanSitup = function () {
        if (F_TexasViewCtr_1.default.instance.view.IsSelfWatch() || F_TexasViewCtr_1.default.instance.view.IsSelfWaitToTakeIn()) {
            return false;
        }
        else {
            var myUser = F_TexasViewCtr_1.default.instance.view._bftable.myUser;
            return myUser.IsPlaying() && myUser.isGiveUp && myUser.userConnectState != TexasUserComp_1.UserConnectState.keepSeat;
        }
    };
    //站起围观
    TexasHelpsettingComp.prototype.UpdateStateOnLook = function () {
        this.SetButtonEnable(this.ui_btnOnlook, this.isCanOnLook());
    };
    TexasHelpsettingComp.prototype.isCanOnLook = function () {
        return true;
        // if (F_TexasViewCtr.instance.view._bftable.myUser.userConnectState == UserConnectState.keepSeat
        //     || (F_TexasViewCtr.instance.view._bftable.myUser.isGiveUp && !F_TexasViewCtr.instance.view.IsSelfWatch() && !F_TexasViewCtr.instance.view.IsSelfWaitToTakeIn()))
        // {
        //     return true;
        // }
        // else
        // {
        //     return false;
        // }
    };
    TexasHelpsettingComp.prototype.setHelpType = function (type) {
        this.ui_HelpBtn1.getController("isOn").setSelectedIndex(0);
        this.ui_HelpBtn2.getController("isOn").setSelectedIndex(0);
        this.ui_HelpBtn3.getController("isOn").setSelectedIndex(0);
        switch (type) {
            case 1:
                this.ui_paixingTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1211); //牌型提示
                this.ui_HelpBtn1.getController("isOn").setSelectedIndex(1);
                break;
            case 2:
                this.ui_paixingTitle.text = "基本玩法";
                this.ui_HelpBtn2.getController("isOn").setSelectedIndex(1);
                break;
            case 3:
                this.ui_paixingTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1724); //保险说明
                this.ui_HelpBtn3.getController("isOn").setSelectedIndex(1);
                break;
        }
    };
    TexasHelpsettingComp = __decorate([
        ccclass
    ], TexasHelpsettingComp);
    return TexasHelpsettingComp;
}(ViewBase_1.default));
exports.default = TexasHelpsettingComp;

cc._RF.pop();