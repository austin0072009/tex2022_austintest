
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasHelpsettingComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzSGVscHNldHRpbmdDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCwyRkFBMEY7QUFDMUYsMkRBQXNEO0FBQ3RELHdEQUF1RDtBQUN2RCx1REFBa0Q7QUFDbEQsaURBQWtFO0FBRTVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtELHdDQUFRO0lBQTFEO1FBQUEscUVBeWNDO1FBeGNVLGdCQUFVLEdBQW9CLElBQUksQ0FBQyxDQUFBLElBQUk7UUFDdkMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUNoQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDdkMsMkNBQTJDO1FBQ3BDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV4QywrQkFBeUIsR0FBb0IsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUMxRCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFDeEMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0QyxzQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFD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LENBQUMsQ0FBQztnQkFDM0QsTUFBTTtTQUNiO0lBSUwsQ0FBQztJQXhjZ0Isb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0F5Y3hDO0lBQUQsMkJBQUM7Q0F6Y0QsQUF5Y0MsQ0F6Y2lELGtCQUFRLEdBeWN6RDtrQkF6Y29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcbmltcG9ydCBGX1RleGFzVmlld0N0ciBmcm9tIFwiLi4vQ29udHJsL0ZfVGV4YXNWaWV3Q3RyXCI7XG5pbXBvcnQgeyBUZXhhc0xhbmd1YWdlIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTGFuZ3VhZ2VcIjtcbmltcG9ydCBGdW5jU2V0dGluZ1BhbmVsIGZyb20gXCIuL0Z1bmNTZXR0aW5nUGFuZWxcIjtcbmltcG9ydCBUZXhhc1VzZXJDb21wLCB7IFVzZXJDb25uZWN0U3RhdGUgfSBmcm9tIFwiLi9UZXhhc1VzZXJDb21wXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXhhc0hlbHBzZXR0aW5nQ29tcCBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwdWJsaWMgdWlfdG9vbGJhcjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsvL+iuvue9rlxuICAgIHB1YmxpYyB1aV9saWViaWFvQnRuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG50b29sQ2xvc2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bk9ubG9vazogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuQ2FyZFRpcDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuU2V0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5SZWNvcmRTY29yZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuV2FpdFNlYXQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bkV4aXQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bkhlbHA6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2J0bkluc1RpcDpmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5EaXNtaXNzOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5KaWVzdWFuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5EYWljaHU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfc2V0dGluZ3BhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzZXR0aW5nUGFuZWw6IEZ1bmNTZXR0aW5nUGFuZWw7XG4gICAgcHVibGljIHVpX0NhcmRzSW50cm9kdWN0aW9uUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7Ly/niYzlnovmj5DnpLrpnaLmnb9cbiAgICBwdWJsaWMgdWlfY2FyZFRpcFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5fY2xvc2VfU2V0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5DbG9zZV9jYXJkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5fY2xvc2VfSW5zOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnNUaXBQYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgU2Nyb2xsUmVjdCB1aV9pbnNUaXBTY3JvbGxWaWV3O1xuXG4gICAgLy8gcHVibGljIFNjcm9sbFJlY3QgdWlfVGV4UnVsZVZpZXc7XG5cblxuICAgIHB1YmxpYyB1aV9vbkxvb2tUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jYXJkVGlwVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfc2V0VGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaW5zVGlwVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcmVjb3JkU2NvcmVUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV93YWl0U2VhdFRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2V4aXRUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9kaXNtaXNzVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYWRkUm9iaXRUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3BhaXhpbmdUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnVwYWlUaXRsZTE6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3BlaWx2VGl0bGUxOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idXBhaVRpdGxlMjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGVpbHZUaXRsZTI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3BlaWx2VGlwczogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaW5zVGlwVGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2ppZXN1YW5UZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9pbnNUaXBJY29uOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9vdXRHb2xkVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9IZWxwQnRuMTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfSGVscEJ0bjI6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX0hlbHBCdG4zOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgcHVibGljIHBhaXhpbmdMaXN0OiBmZ3VpLkdUZXh0RmllbGRbXTtcbiAgICBwdWJsaWMgaW5zVGlwTGlzdDogZmd1aS5HVGV4dEZpZWxkW107XG4gICAgcHVibGljIHRvdGFsVGV4UnVsZUxpc3Q6IGZndWkuR1RleHRGaWVsZFtdO1xuXG4gICAgcHJpdmF0ZSBpc09wZW4gPSB0cnVlO1xuICAgIHByaXZhdGUgc2V0dGluZ1R5cGU6IG51bWJlcjtcbiAgICBwcml2YXRlIG9uTG9hZEVuZCA9IGZhbHNlO1xuXG4gICAgcHVibGljIGJ0bkhlbHBQb3M6IGNjLlZlYzMgPSBudWxsO1xuICAgIHB1YmxpYyBidG5EaXNtaXNzUG9zOiBjYy5WZWMzID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc1Nob3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vPD0wOum7mOiupOiuvue9rueVjOmdoiwxOuWKn+iDveiuvue9rlxuICAgIHB1YmxpYyBNeVN0YXJ0KF9zZXR0aW5nVHlwZSA9IDApIHtcbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nVHlwZSA9IF9zZXR0aW5nVHlwZTtcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB7XG4gICAgICAgICAgICB0aGlzLk15U3RhcnRFeCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIGlmICh0aGlzLnVpX3Rvb2xiYXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VwZXIuQXV0b1NldEdvUHJvcGVydHkoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkluaXRJbWFnZSgpO1xuICAgICAgICB0aGlzLkluaXRMYW5ndWFnZSgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRVSSh0aGlzLnNldHRpbmdUeXBlKTtcbiAgICAgICAgLy8gdGhpcy5IaWRlKCk7XG4gICAgICAgIC8vIHRoaXMuYnRuSGVscFBvcyA9IGNjLnYzKHRoaXMudWlfYnRuSGVscC54LCB0aGlzLnVpX2J0bkhlbHAueSwgMCk7XG4gICAgICAgIC8vIHRoaXMuYnRuRGlzbWlzc1BvcyA9IGNjLnYzKHRoaXMudWlfYnRuRGlzbWlzcy54LCB0aGlzLnVpX2J0bkRpc21pc3MueSwgMCk7XG4gICAgICAgIHRoaXMuYnRuSGVscFBvcyA9IHRoaXMudWlfYnRuSGVscC5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJ0bkRpc21pc3NQb3MgPSB0aGlzLnVpX2J0bkRpc21pc3Mubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5VcGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICAgICAgdGhpcy5VcGRhdGVWaWV3KCk7XG4gICAgfVxuICAgIEhpZGUoKSB7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEF1dG9TZXRHb1Byb3BlcnR5KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIEluaXRMYW5ndWFnZSgpIHtcbiAgICAgICAgdGhpcy51aV9vbkxvb2tUZXh0LnRleHQgPSBcIuermei1t+WbtOinglwiXG4gICAgICAgIHRoaXMudWlfY2FyZFRpcFRleHQudGV4dCA9IFwi546p5rOV6K+05piOXCJcbiAgICAgICAgdGhpcy51aV9zZXRUZXh0LnRleHQgPSBcIua4uOaIj+iuvue9rlwiXG4gICAgICAgIC8vIHRoaXMudWlfaW5zVGlwVGV4dC50ZXh0ID0gXCLkv53pmanor7TmmI5cIlxuICAgICAgICB0aGlzLnVpX3JlY29yZFNjb3JlVGV4dC50ZXh0ID0gXCLooaXlhYXorrDliIZcIlxuICAgICAgICB0aGlzLnVpX3dhaXRTZWF0VGV4dC50ZXh0ID0gXCLnlLPor7fnlZnluqdcIlxuICAgICAgICB0aGlzLnVpX2V4aXRUZXh0LnRleHQgPSBcIui/lOWbnuWkp+WOhVwiXG4gICAgICAgIHRoaXMudWlfZGlzbWlzc1RleHQudGV4dCA9IFwi6Kej5pWj54mM5bGAXCJcbiAgICAgICAgdGhpcy51aV9hZGRSb2JpdFR4dC50ZXh0ID0gXCLliqDmnLrlmajkurpcIlxuICAgICAgICB0aGlzLnVpX3BhaXhpbmdUaXRsZS50ZXh0ID0gXCLniYzlnovmj5DnpLpcIlxuICAgICAgICB0aGlzLnVpX2J1cGFpVGl0bGUxLnRleHQgPSBcIuihpeeJjFwiXG4gICAgICAgIHRoaXMudWlfcGVpbHZUaXRsZTEudGV4dCA9IFwi6LWU546HXCJcbiAgICAgICAgdGhpcy51aV9idXBhaVRpdGxlMi50ZXh0ID0gXCLooaXniYxcIlxuICAgICAgICB0aGlzLnVpX3BlaWx2VGl0bGUyLnRleHQgPSBcIui1lOeOh1wiXG4gICAgICAgIHRoaXMudWlfcGVpbHZUaXBzLnRleHQgPSBcIuS7peS4i+S4uuiDjOS/nemZqei1lOeOh1wiXG4gICAgICAgIHRoaXMudWlfaW5zVGlwVGl0bGUudGV4dCA9IFwi5L+d6Zmp6K+05piOXCJcbiAgICAgICAgdGhpcy51aV9qaWVzdWFuVGV4dC50ZXh0ID0gXCLnprvmoYznu5PnrpdcIlxuICAgICAgICB0aGlzLnVpX291dEdvbGRUZXh0LnRleHQgPSBcIuW4puWHuuiusOWIhlwiXG5cbiAgICAgICAgdGhpcy50b3RhbFRleFJ1bGVMaXN0ID0gW107XG4gICAgICAgIC8vIHRoaXMudG90YWxUZXhSdWxlTGlzdC5BZGRSYW5nZSh0aGlzLnVpX1RleFJ1bGVWaWV3LkdldENvbXBvbmVudHNJbkNoaWxkcmVuPFRleHQ+KCkpO1xuICAgICAgICAvLyB0aGlzLnRvdGFsVGV4UnVsZUxpc3QgPSAgdGhpcy50b3RhbFRleFJ1bGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUuaW5kZXhPZihcInRleFJ1bGVcIik+PTApO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudG90YWxUZXhSdWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gdGhpcy50b3RhbFRleFJ1bGVMaXN0W2ldLnRleHQgPSBMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTI0NiArIGkpOy8vXCLlvrflt57op4TliJlcIiAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucGFpeGluZ0xpc3QgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5wYWl4aW5nTGlzdC5BZGRSYW5nZSh0aGlzLnVpX2NhcmRUaXBQYW5lbC5HZXRDb21wb25lbnRzSW5DaGlsZHJlbjxUZXh0PigpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhaXhpbmdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnBhaXhpbmdMaXN0W2ldLnRleHQgPSBMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTMxNSArIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnNUaXBMaXN0ID0gW107XG4gICAgICAgIC8vIHRoaXMuaW5zVGlwTGlzdC5BZGRSYW5nZSh0aGlzLnVpX2luc1RpcFNjcm9sbFZpZXcuY29udGVudC5HZXRDb21wb25lbnRzSW5DaGlsZHJlbjxUZXh0PigpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmluc1RpcExpc3QubGVuZ3RoICYmIGkgPCAxNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmluc1RpcExpc3RbaV0udGV4dCA9IExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMzI1ICsgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEluaXRJbWFnZSgpIHtcbiAgICAgICAgdGhpcy51aV9pbnNUaXBJY29uLnVybCA9IFwidWk6Ly9UZXhhcy9iYW94aWFuc2h1b21pbmdfMnhcIjsvLyBSZXMuU2luZ2xldG9uLlNldEltYWdlU3ByaXRlKHVpX2luc1RpcEljb24sIFwid2hpcmxfZ2FtaW5nXCIsIFwiYmFveGlhbnNodW9taW5nXzJ4XCIgKyBUb29sc0V4LkdldEltYWdlTGFuZ3VhZ2VTdWYoKSk7XG4gICAgfVxuICAgIHB1YmxpYyBpbml0VUkoc2V0dGluZ1R5cGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX2xpZWJpYW9CdG4udmlzaWJsZSA9IHRydWU7Ly8oRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwub3BlblYgPiAwKTtcbiAgICAgICAgdGhpcy51aV90b29sYmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBzd2l0Y2ggKHNldHRpbmdUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nUGFuZWwgPSB0aGlzLnVpX3NldHRpbmdwYW5lbC5ub2RlLmdldENvbXBvbmVudChGdW5jU2V0dGluZ1BhbmVsKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5nUGFuZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdQYW5lbCA9IHRoaXMudWlfc2V0dGluZ3BhbmVsLm5vZGUuYWRkQ29tcG9uZW50KEZ1bmNTZXR0aW5nUGFuZWwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdQYW5lbC5mZ3VpQ29tcG9uZW50ID0gdGhpcy51aV9zZXR0aW5ncGFuZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2V0dGluZ3BhbmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nUGFuZWwuTXlTdGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVpX3NldHRpbmdwYW5lbC5ub2RlLmdldENvbXBvbmVudChTZXR0aW5nUGFuZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51aV9zZXR0aW5ncGFuZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3MudmlzaWJsZSA9IChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5vd25uZXJpZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKVxuICAgICAgICB0aGlzLnVpX3Rvb2xiYXIudmlzaWJsZSA9IHRoaXMuaXNPcGVuO1xuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2NhcmQudmlzaWJsZSA9IHRoaXMuaXNTaG93aW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51aV9saWViaWFvQnRuLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9saWViaWFvQnRuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuVG9vbEJhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMudWlfYnRudG9vbENsb3NlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRudG9vbENsb3NlLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRudG9vbENsb3NlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbikgeyB0aGlzLm9wZW5Ub29sQmFyKCk7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51aV9idG5FeGl0LmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5FeGl0Lm9uQ2xpY2sodGhpcy5FeGl0VGFibGUpO1xuICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3MuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3Mub25DbGljayh0aGlzLkRpc21pc3NUYWJsZSk7XG4gICAgICAgIC8vIGxldCBpc01hbmFnZXIgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLl92bHYgPT0gMjAgfHwgUGxheWVyUHJlZnMuR2V0U3RyaW5nKENvbnN0LmtleV9PcGVuViwgc3RyaW5nLkVtcHR5KSA9PSBcIjFcIjtcbiAgICAgICAgLy8gdGhpcy51aV9idG5IZWxwLnZpc2libGUgPSB0aGlzLmlzTWFuYWdlcjtcbiAgICAgICAgdGhpcy51aV9idG5IZWxwLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfZW50ZXJyb2JvdF90ZXgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5TZXQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Ub29sQmFyKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdQYW5lbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nUGFuZWwuU2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuQ2FyZFRpcC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblRvb2xCYXIoKTtcbiAgICAgICAgICAgIHRoaXMudWlfQ2FyZHNJbnRyb2R1Y3Rpb25QYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuQ2xvc2VfY2FyZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudWlfQ2FyZHNJbnRyb2R1Y3Rpb25QYW5lbC5ub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4yLCBjYy52MigwLCB0aGlzLnVpX0NhcmRzSW50cm9kdWN0aW9uUGFuZWwubm9kZS55KSkpO1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2NhcmQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2NhcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfQ2FyZHNJbnRyb2R1Y3Rpb25QYW5lbC5ub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4yLCBjYy52MigtdGhpcy51aV9DYXJkc0ludHJvZHVjdGlvblBhbmVsLndpZHRoLCB0aGlzLnVpX0NhcmRzSW50cm9kdWN0aW9uUGFuZWwubm9kZS55KSkpOy8vIERvVHdlZW5FeC5ET0xvY2FsTW92ZVgoLCAtdWlfQ2FyZHNJbnRyb2R1Y3Rpb25QYW5lbC5zaXplRGVsdGEueCwgMC41Zik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX0hlbHBCdG4xLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgIHRoaXMudWlfSGVscEJ0bjEub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEhlbHBUeXBlKDEpO1xuICAgICAgICAgICAgdGhpcy51aV9DYXJkc0ludHJvZHVjdGlvblBhbmVsLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX0hlbHBCdG4yLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRIZWxwVHlwZSgyKTtcbiAgICAgICAgICAgIHRoaXMudWlfQ2FyZHNJbnRyb2R1Y3Rpb25QYW5lbC5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9IZWxwQnRuMy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVscFR5cGUoMyk7XG4gICAgICAgICAgICB0aGlzLnVpX0NhcmRzSW50cm9kdWN0aW9uUGFuZWwuZ2V0Q29udHJvbGxlcihcInR5cGVcIikuc2V0U2VsZWN0ZWRJbmRleCgyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5SZWNvcmRTY29yZS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIC8v6KGl5YWF6K6w5YiGXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NhbkFkZEdvbGQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblRvb2xCYXIoKTtcbiAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlNob3dVSUFkZEdvbGRQYW5lbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bk9ubG9vay5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblRvb2xCYXIoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3NpdHVwa2VlcF90ZXgoZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bldhaXRTZWF0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuVG9vbEJhcigpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3Nfc2l0dXBrZWVwX3RleCh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5KaWVzdWFuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuVG9vbEJhcigpO1xuXG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LnRpcFZpZXcuU2hvd1RpcChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjc3KSwgKCkgPT4gey8v56Gu6K6k56a75qGM57uT566XP1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2FkdmFuY2VzZXR0bGVfdGV4KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHsgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMudWlfYnRuSW5zVGlwLm9uQ2xpY2soKCkgPT5cbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgdGhpcy5vcGVuVG9vbEJhcigpO1xuICAgICAgICAvLyAgICAgdGhpcy51aV9pbnNUaXBQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5fY2xvc2VfSW5zLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aV9pbnNUaXBQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuRGFpY2h1Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuVG9vbEJhcigpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5TaG93VUlPdXRHb2xkUGFuZWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHVibGljIG9wZW5Ub29sQmFyKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgdGhpcy51aV90b29sYmFyLnZpc2libGUgPSB0aGlzLmlzT3BlbjtcbiAgICAgICAgdGhpcy51aV9idG50b29sQ2xvc2UudmlzaWJsZSA9IHRoaXMuaXNPcGVuO1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHRoaXMuVXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIC8vIOWFs+mXreeVjOmdolxuICAgIHB1YmxpYyBjbG9zZVNob3dWaWV3KCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX3Rvb2xiYXIudmlzaWJsZSA9IHRoaXMuaXNPcGVuO1xuICAgICAgICB0aGlzLnVpX2J0bnRvb2xDbG9zZS52aXNpYmxlID0gdGhpcy5pc09wZW47XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbikgdGhpcy5VcGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIEV4aXRUYWJsZSgpIHtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy50aXBWaWV3LlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTY4NiksICgpID0+IHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2FwcGx5ZXhpdHRhYmxlX3RleChudWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHsgfSk7Ly/mmK/lkKbnprvlvIDmuLjmiI9cblxuICAgIH1cblxuXG4gICAgcHVibGljIERpc21pc3NUYWJsZSgpIHtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy50aXBWaWV3LlNob3dUaXAoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoNTAwNSksICgpID0+IHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2Rpc21pc3N0YWJsZV90ZXgobnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7IH0pOy8v5piv5ZCm6Kej5pWj54mM5bGAIFxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy51aV9saWViaWFvQnRuLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5FeGl0LmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5IZWxwLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5TZXQuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3MuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZV9TZXQuY2xlYXJDbGljaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlVmlldygpIHtcbiAgICAgICAgdGhpcy5VcGRhdGVTdGF0ZVJlY29yZFNjb3JlKCk7XG4gICAgICAgIHRoaXMuVXBkYXRlU3RhdGVXYWl0U2VhdCgpO1xuICAgICAgICB0aGlzLlVwZGF0ZVN0YXRlT25Mb29rKCk7XG4gICAgICAgIHRoaXMuVXBkYXRlU3RhdGVKaWVzdWFuKCk7XG4gICAgICAgIHRoaXMuVXBkYXRlU3RhdGVEYWljaHUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TaG93KCk7XG4gICAgfVxuXG4gICAgLy8g5pu05paw5oyJ6ZKu5pi+56S6XG4gICAgcHVibGljIHVwZGF0ZUJ0blNob3coKSB7XG4gICAgICAgIHRoaXMudWlfYnRuSGVscC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9idG5EaXNtaXNzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBsZXQgbHYgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwubHY7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibHYgPT09PT0gXCIsIGx2KTtcbiAgICAgICAgaWYgKGx2ID09IDE5KSB7IC8vIOWPquacieino+aVo+eJjOWxgOaMiemSrlxuICAgICAgICAgICAgdGhpcy51aV9idG5IZWxwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfYnRuRGlzbWlzcy5zZXRQb3NpdGlvbih0aGlzLmJ0bkhlbHBQb3MueCwgdGhpcy5idG5IZWxwUG9zLnkpO1xuICAgICAgICAgICAgdGhpcy51aV9idG5EaXNtaXNzLm5vZGUucG9zaXRpb24gPSB0aGlzLmJ0bkhlbHBQb3M7XG4gICAgICAgIH0gZWxzZSBpZiAobHYgPT0gMjApIHsgLy8g6Kej5pWj54mM5bGA5ZKM5Yqg5py65Zmo5Lq65oyJ6ZKuXG4gICAgICAgICAgICAvLyB0aGlzLnVpX2J0bkhlbHAuc2V0UG9zaXRpb24odGhpcy5idG5IZWxwUG9zLngsIHRoaXMuYnRuSGVscFBvcy55KTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfYnRuRGlzbWlzcy5zZXRQb3NpdGlvbih0aGlzLmJ0bkRpc21pc3NQb3MueCwgdGhpcy5idG5EaXNtaXNzUG9zLnkpO1xuICAgICAgICAgICAgdGhpcy51aV9idG5IZWxwLm5vZGUucG9zaXRpb24gPSB0aGlzLmJ0bkhlbHBQb3M7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3Mubm9kZS5wb3NpdGlvbiA9IHRoaXMuYnRuRGlzbWlzc1BvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuSGVscC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkRpc21pc3MudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzQ2FuSmllc3VhbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLklzU3VwcGVyICYmICFGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc1NldHRsZTtcbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZVN0YXRlSmllc3VhbigpIHtcbiAgICAgICAgdGhpcy5TZXRCdXR0b25FbmFibGUodGhpcy51aV9idG5KaWVzdWFuLCB0cnVlKS8vdGhpcy5pc0NhbkppZXN1YW4oKSk7XG4gICAgfVxuICAgIC8v55Sz6K+355WZ5bqnXG4gICAgcHVibGljIFVwZGF0ZVN0YXRlV2FpdFNlYXQoKSB7XG4gICAgICAgIHRoaXMuU2V0QnV0dG9uRW5hYmxlKHRoaXMudWlfYnRuV2FpdFNlYXQsIHRoaXMuaXNDYW5TaXR1cCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlU3RhdGVSZWNvcmRTY29yZSgpIHtcbiAgICAgICAgdGhpcy5TZXRCdXR0b25FbmFibGUodGhpcy51aV9idG5SZWNvcmRTY29yZSwgdGhpcy5pc0NhbkFkZEdvbGQoKSk7XG4gICAgfVxuXG4gICAgLy/luKblh7pcbiAgICBwdWJsaWMgVXBkYXRlU3RhdGVEYWljaHUoKSB7XG4gICAgICAgIHRoaXMuU2V0QnV0dG9uRW5hYmxlKHRoaXMudWlfYnRuRGFpY2h1LCB0aGlzLmlzQ2FuT3V0R29sZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFNldEJ1dHRvbkVuYWJsZShidG46IGZndWkuR0J1dHRvbiwgaXNFbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgYnRuLmVuYWJsZWQgPSBpc0VuYWJsZTtcbiAgICAgICAgbGV0IF9pbWc6IGZndWkuR0xvYWRlciA9IGJ0bi5fY2hpbGRyZW5bMF0uYXNMb2FkZXI7XG4gICAgICAgIGlmIChfaW1nID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKGlzRW5hYmxlKSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfaW1nLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG4uX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0eHQgPSBidG4uX2NoaWxkcmVuWzFdOy8vIFVJR3JhZGllbnQgdHh0ID0gYnRuLnRyYW5zZm9ybS5HZXRDb21wb25lbnRJbkNoaWxkcmVuPFVJR3JhZGllbnQ+KCk7XG5cbiAgICAgICAgICAgIGlmICh0eHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR4dC5lbmFibGVkID0gaXNFbmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ2FuQWRkR29sZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuSXNDYW5BZGRHb2xkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0Nhbk91dEdvbGQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LklzQ2FuT3V0R29sZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNDYW5UYWtlR29sZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc0dhbWluZyAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5zZXJ2ZXJwb3MgPiAwICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuSXNTZWxmV2F0Y2goKSAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LklzU2VsZldhaXRUb1Rha2VJbigpOyAvKiAmJiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LklzU2VsZldhdGNoKCkqLzsvL+a4uOaIj+e7k+adn+S5i+WQju+8jOS5n+WPr+S7peW4puWFpSAgICAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0NhblNpdHVwKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5Jc1NlbGZXYXRjaCgpIHx8IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuSXNTZWxmV2FpdFRvVGFrZUluKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBteVVzZXI6IFRleGFzVXNlckNvbXAgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlcjtcbiAgICAgICAgICAgIHJldHVybiBteVVzZXIuSXNQbGF5aW5nKCkgJiYgbXlVc2VyLmlzR2l2ZVVwICYmIG15VXNlci51c2VyQ29ubmVjdFN0YXRlICE9IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+ermei1t+WbtOinglxuICAgIHB1YmxpYyBVcGRhdGVTdGF0ZU9uTG9vaygpIHtcbiAgICAgICAgdGhpcy5TZXRCdXR0b25FbmFibGUodGhpcy51aV9idG5Pbmxvb2ssIHRoaXMuaXNDYW5Pbkxvb2soKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0Nhbk9uTG9vaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci51c2VyQ29ubmVjdFN0YXRlID09IFVzZXJDb25uZWN0U3RhdGUua2VlcFNlYXRcbiAgICAgICAgLy8gICAgIHx8IChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5pc0dpdmVVcCAmJiAhRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5Jc1NlbGZXYXRjaCgpICYmICFGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LklzU2VsZldhaXRUb1Rha2VJbigpKSlcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhlbHBUeXBlKHR5cGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX0hlbHBCdG4xLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgIHRoaXMudWlfSGVscEJ0bjIuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgdGhpcy51aV9IZWxwQnRuMy5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3BhaXhpbmdUaXRsZS50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTIxMSk7Ly/niYzlnovmj5DnpLpcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0hlbHBCdG4xLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy51aV9wYWl4aW5nVGl0bGUudGV4dCA9IFwi5Z+65pys546p5rOVXCI7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9IZWxwQnRuMi5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMudWlfcGFpeGluZ1RpdGxlLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNzI0KTsvL+S/nemZqeivtOaYjlxuICAgICAgICAgICAgICAgIHRoaXMudWlfSGVscEJ0bjMuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbn0iXX0=