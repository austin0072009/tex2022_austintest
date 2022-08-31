"use strict";
cc._RF.push(module, '97a089l4uhOaajnxTX7r/Kr', 'MeView');
// GameHall/script/Lobby/Me/MeView.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var MeView = /** @class */ (function (_super) {
    __extends(MeView, _super);
    function MeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_redPacket = null;
        return _this;
    }
    MeView.prototype.onConstruct = function () {
        this.allbtnCom = this.getChild("allbtn").asCom;
        this.gold = this.getChild("megold").asTextField;
        this.btn_cz = this.getChild("n5").asButton;
        this.btn_zz = this.getChild("n8").asButton;
        this.btn_tx = this.getChild("n7").asButton;
        this.btn_eye = this.getChild("n6").asButton;
        this.btn_setting = this.allbtnCom.getChild("n14").asButton;
        this.btn_shequ = this.allbtnCom.getChild("n9").asButton;
        this.btn_share = this.allbtnCom.getChild("n12").asButton;
        this.btn_mysY = this.allbtnCom.getChild("n10").asButton;
        this.btn_beibao = this.allbtnCom.getChild("btn_beibao").asButton;
        this.btn_flowingWater = this.allbtnCom.getChild("n11").asButton;
        this.btn_redPacket = this.getChild("btn_redPacket").asButton;
        this.allbtnCom.getChild("n22").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n23").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n24").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n25").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n26").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n27").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.walletBtn = this.getChild("walletBtn").asButton;
        this.btn_fl = this.getChild("n19").asButton;
        this.btn_cz.onClick(this.showTopup, this);
        this.btn_zz.onClick(this.showTransferView, this);
        this.btn_tx.onClick(this.showWithdrawal, this);
        this.btn_fl.onClick(this.showWelfareView, this);
        this.btn_eye.onClick(this.hideGold, this);
        this.walletBtn.onClick(this.showWallet, this);
        this.btn_setting.onClick(this.showSetting, this);
        this.btn_shequ.onClick(this.showCommunity, this);
        this.btn_share.onClick(this.showShareView, this);
        this.btn_mysY.onClick(this.showCareerView, this);
        this.btn_beibao.onClick(this.showKnspsack, this);
        this.btn_flowingWater.onClick(this.showFlowingwater, this);
        this.meVip = this.getChild("mevip").asCom;
        this.VipController = this.meVip.getController("vip");
        this.userid = this.meVip.getChild("id").asTextField;
        this.userName = this.meVip.getChild("name").asTextField;
        this.btn_copyId = this.meVip.getChild("btn_copyid").asButton;
        this.btn_copyId.onClick(this.copyId, this);
        this.btn_sex = this.meVip.getChild("sex").asButton;
        this.btn_EditName = this.meVip.getChild("btn_EditName").asButton;
        this.btn_EditName.onClick(this.showEditPanel, this);
        this.btn_vipxq = this.meVip.getChild("vipxq").asButton;
        this.btn_vipxq.onClick(this.showVipPriView, this);
        this.btn_redPacket.onClick(this.showRedPacketView, this);
        this.btn_redPacket.node.scale = 0.4;
        this.btn_redPacket.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 0.4 * 0.95), cc.scaleTo(0.5, 0.4 * 1.05))));
        this.head = this.meVip.getChild("head").asCom;
        this.headLoader = this.head.getChild("n0").asLoader;
        this.headBold = this.meVip.getChild("headFrame").asLoader; // this.head.getChild("n4").asLoader;
    };
    /** 下面功能按钮的溢出时  550 为组件高 */
    MeView.prototype.changedBtnCom = function (height) {
        var dx = height - this.allbtnCom.y;
        if (dx < 550) {
            this.allbtnCom.height = dx;
        }
    };
    /**顯示編輯界面 */
    MeView.prototype.showEditPanel = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showMyinfoView();
    };
    MeView.prototype.initData = function () {
        var play = AppConst_1.AppConst.mPlayerModel;
        // this.gold.text = (play.gold / 100) + '';
        this.userid.setVar("id", play.userid + '').flushVars();
        this.userName.text = play._n;
        // if (this.userName.width > 300) {
        //     this.btn_EditName.x = this.userName.x + this.userName.width + 70;
        //     if (this.btn_EditName.x < this.btn_copyId.x) {
        //         this.btn_EditName.x = this.btn_copyId.x;
        //     } else if (this.btn_EditName.x > 839) {
        //         this.btn_EditName.x = 839;
        //     }
        // } else {
        //     this.btn_EditName.x = this.btn_copyId.x;
        // }
        var viplv = LobbyViewCtr_1.default.instance.Model.vipLevel;
        if (viplv > 9) {
            viplv = 9;
        }
        this.VipController.selectedIndex = viplv;
        var sex = AppConst_1.AppConst.mPlayerModel.wechat._S;
        this.btn_sex.selected = !!sex;
        this.hideGold();
        // 刷新消息
        this.refreshMessageEmail();
        // 隐藏VIP功能
        this.btn_vipxq.visible = false;
        this.VipController.selectedIndex = 10;
    };
    // 刷新消息
    MeView.prototype.refreshMessageEmail = function () {
        var data = LobbyViewCtr_1.default.instance.Model.emailInfo;
        var haveNoLook = false;
        if (data && data.emaillist.length > 0) {
            for (var index = 0; index < data.emaillist.length; index++) {
                var email = data.emaillist[index];
                var userid = LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid;
                var tradeno = email.tradeno;
                var lookN = UIUtil_1.PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0);
                var islook = lookN == 0 ? false : true;
                if (!islook) {
                    haveNoLook = true;
                    break;
                }
            }
        }
        LobbyViewCtr_1.default.instance.view.setFlowingRead(haveNoLook);
    };
    /**設置頭像 */
    MeView.prototype.setHead = function (url) {
        UIUtil_1.UIUtil.loadImage(this.headLoader, url);
        this.setHeadFram();
    };
    MeView.prototype.setHeadFram = function () {
        if (AppConst_1.AppConst.mPlayerModel["headFrame"]) {
            UIUtil_1.UIUtil.loadShopImage(this.headBold, AppConst_1.AppConst.mPlayerModel["headFrame"]);
        }
    };
    /**复制 id */
    MeView.prototype.copyId = function () {
        //  iOS  CC_JSB
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        var id = AppConst_1.AppConst.mPlayerModel.userid + '';
        if (CC_JSB) {
            NativeMethod_1.default.copyTextString(id);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("复制成功");
        }
        else {
            var bool = this.commandCopy(id);
            var str = bool ? "复制成功" : "复制失败";
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(str);
        }
    };
    /**复制 */
    MeView.prototype.commandCopy = function (input) {
        var el = document.createElement('textarea');
        el.value = input;
        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');
        //el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        var selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) { }
        document.body.removeChild(el);
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return success;
    };
    ;
    MeView.prototype.hideGold = function () {
        if (this.btn_eye.selected) {
            // let str = this.gold.text;
            // let temp = '';
            this.gold.text = '*****';
        }
        else {
            this.gold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
        }
    };
    MeView.prototype.showTopup = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    MeView.prototype.showTransferView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        if (LobbyViewCtr_1.default.instance.Model.isSetPayPassword) {
            LobbyViewCtr_1.default.instance.view.showVerificationPwdView();
        }
        else {
            LobbyViewCtr_1.default.instance.view.showSetPayPasswordView();
        }
    };
    MeView.prototype.showWithdrawal = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        if (LobbyViewCtr_1.default.instance.Model.isSetPayPassword) {
            LobbyViewCtr_1.default.instance.view.showWithdrawal();
        }
        else {
            LobbyViewCtr_1.default.instance.view.showSetPayPasswordView();
        }
    };
    MeView.prototype.showWelfareView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showWelfareView();
    };
    MeView.prototype.showSetting = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showSettingView();
    };
    /**社区 */
    MeView.prototype.showCommunity = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        if (LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0) {
            // LobbyViewCtr.instance.view.showcommunityView();
            // 跳转到首页
            LobbyViewCtr_1.default.instance.view.jumpHomePage();
        }
        else {
            LobbyViewCtr_1.default.instance.cs_getagentinfo(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        }
    };
    /**分享 */
    MeView.prototype.showShareView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showShareView();
    };
    /**顯示錢包記錄 */
    MeView.prototype.showWallet = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showWalletRecordView();
    };
    MeView.prototype.showCareerView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr_1.default.instance.view.showCareerView();
    };
    MeView.prototype.showKnspsack = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showknapsackView();
        LobbyViewCtr_1.default.instance.cs_getbackpacklist();
    };
    MeView.prototype.showFlowingwater = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showMyInformationView();
        // this.setFlowingRead(false);
        LobbyViewCtr_1.default.instance.cs_getemaillist(true);
    };
    MeView.prototype.setFlowingRead = function (isRead) {
        this.btn_flowingWater.getController("read").setSelectedIndex(isRead ? 1 : 0);
    };
    /**vip 特權 */
    MeView.prototype.showVipPriView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showVipPrivilegeView();
        LobbyViewCtr_1.default.instance.cs_getuservipinfo(true);
    };
    MeView.prototype.showRedPacketView = function () {
        AudioManager_1.AudioManager.Singleton.play('MeView', "button");
        var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr_1.default.instance.cs_extendredinfo(cidx);
    };
    MeView.prototype.Show = function () {
        this.initData();
        this.visible = true;
    };
    MeView.prototype.Hide = function () {
        this.visible = false;
    };
    return MeView;
}(fgui.GComponent));
exports.default = MeView;

cc._RF.pop();