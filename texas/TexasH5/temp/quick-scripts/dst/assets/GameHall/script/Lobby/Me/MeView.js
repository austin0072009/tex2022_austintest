
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Me/MeView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXE1lXFxNZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSwyREFBdUU7QUFDdkUsMkZBQTBGO0FBQzFGLHlEQUF3RDtBQUN4RCxtREFBOEM7QUFFOUMsZ0RBQTJDO0FBRzNDO0lBQW9DLDBCQUFlO0lBQW5EO1FBQUEscUVBZ1dDO1FBL1VXLG1CQUFhLEdBQWlCLElBQUksQ0FBQzs7SUErVS9DLENBQUM7SUF0U2EsNEJBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztR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LFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sa0NBQWlCLEdBQXhCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLElBQUksR0FBVywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQWhXQSxBQWdXQyxDQWhXbUMsSUFBSSxDQUFDLFVBQVUsR0FnV2xEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJQcmVmcywgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuLi8uLi9Mb2dpbi9Mb2dpblZpZXdDdHJcIjtcclxuaW1wb3J0IE5hdGl2ZU1ldGhvZCBmcm9tIFwiLi4vLi4vTmF0aXZlTWV0aG9kXCI7XHJcbmltcG9ydCB7IHNjX2dldGVtYWlsbGlzdCB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVWaWV3IGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGdvbGQ6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKuWFheWAvCAqL1xyXG4gICAgcHJpdmF0ZSBidG5fY3o6IGZndWkuR0J1dHRvbjtcclxuICAgIC8qKui9rOi0piAqL1xyXG4gICAgcHJpdmF0ZSBidG5feno6IGZndWkuR0J1dHRvbjtcclxuICAgIC8qKuaPkOeOsCAqL1xyXG4gICAgcHJpdmF0ZSBidG5fdHg6IGZndWkuR0J1dHRvbjtcclxuICAgIC8qKuemj+WIqSAqL1xyXG4gICAgcHJpdmF0ZSBidG5fZmw6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgYnRuX2V5ZTogZmd1aS5HQnV0dG9uO1xyXG4gICAgLyoq6K6+572uICovXHJcbiAgICBwcml2YXRlIGJ0bl9zZXR0aW5nOiBmZ3VpLkdCdXR0b247XHJcbiAgICAvKirnpL7ljLogKi9cclxuICAgIHByaXZhdGUgYnRuX3NoZXF1OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBidG5fcmVkUGFja2V0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8qKmlkICovXHJcbiAgICBwcml2YXRlIHVzZXJpZDogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq5pi156ixICovXHJcbiAgICBwcml2YXRlIHVzZXJOYW1lOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKip2aXAgY29udHJvbGxlciAqL1xyXG4gICAgcHJpdmF0ZSBWaXBDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq6KSH6KO9aWTmjInpiJUgKi9cclxuICAgIHByaXZhdGUgYnRuX2NvcHlJZDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIC8qKue3qOi8ryAqL1xyXG4gICAgcHJpdmF0ZSBidG5fRXhpZDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgbWVWaXA6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvKirpoK3lg48gKi9cclxuICAgIHByaXZhdGUgaGVhZExvYWRlcjogZmd1aS5HTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBoZWFkOiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGJ0bl9zaGFyZTogZmd1aS5HQnV0dG9uO1xyXG4gICAgLyoq55Sf5ravICovXHJcbiAgICBwcml2YXRlIGJ0bl9teXNZOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBhbGxidG5Db206IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvKirog4zljIUgKi9cclxuICAgIHByaXZhdGUgYnRuX2JlaWJhbzogZmd1aS5HQnV0dG9uO1xyXG4gICAgLyoq5oCn5YilICovXHJcbiAgICBwcml2YXRlIGJ0bl9zZXg6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIGJ0bl9FZGl0TmFtZTogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgaGVhZEJvbGQ6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICBwcml2YXRlIGJ0bl9mbG93aW5nV2F0ZXI6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIGJ0bl92aXB4cTogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgd2FsbGV0QnRuOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMuYWxsYnRuQ29tID0gdGhpcy5nZXRDaGlsZChcImFsbGJ0blwiKS5hc0NvbTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkID0gdGhpcy5nZXRDaGlsZChcIm1lZ29sZFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmJ0bl9jeiA9IHRoaXMuZ2V0Q2hpbGQoXCJuNVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl96eiA9IHRoaXMuZ2V0Q2hpbGQoXCJuOFwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl90eCA9IHRoaXMuZ2V0Q2hpbGQoXCJuN1wiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9leWUgPSB0aGlzLmdldENoaWxkKFwibjZcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fc2V0dGluZyA9IHRoaXMuYWxsYnRuQ29tLmdldENoaWxkKFwibjE0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX3NoZXF1ID0gdGhpcy5hbGxidG5Db20uZ2V0Q2hpbGQoXCJuOVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9zaGFyZSA9IHRoaXMuYWxsYnRuQ29tLmdldENoaWxkKFwibjEyXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX215c1kgPSB0aGlzLmFsbGJ0bkNvbS5nZXRDaGlsZChcIm4xMFwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9iZWliYW8gPSB0aGlzLmFsbGJ0bkNvbS5nZXRDaGlsZChcImJ0bl9iZWliYW9cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fZmxvd2luZ1dhdGVyID0gdGhpcy5hbGxidG5Db20uZ2V0Q2hpbGQoXCJuMTFcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fcmVkUGFja2V0ID0gdGhpcy5nZXRDaGlsZChcImJ0bl9yZWRQYWNrZXRcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuYWxsYnRuQ29tLmdldENoaWxkKFwibjIyXCIpLmFzVGV4dEZpZWxkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLmFsbGJ0bkNvbS5nZXRDaGlsZChcIm4yM1wiKS5hc1RleHRGaWVsZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcbiAgICAgICAgdGhpcy5hbGxidG5Db20uZ2V0Q2hpbGQoXCJuMjRcIikuYXNUZXh0RmllbGQuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgICAgIHRoaXMuYWxsYnRuQ29tLmdldENoaWxkKFwibjI1XCIpLmFzVGV4dEZpZWxkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLmFsbGJ0bkNvbS5nZXRDaGlsZChcIm4yNlwiKS5hc1RleHRGaWVsZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcbiAgICAgICAgdGhpcy5hbGxidG5Db20uZ2V0Q2hpbGQoXCJuMjdcIikuYXNUZXh0RmllbGQuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG5cclxuICAgICAgICB0aGlzLndhbGxldEJ0biA9IHRoaXMuZ2V0Q2hpbGQoXCJ3YWxsZXRCdG5cIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX2ZsID0gdGhpcy5nZXRDaGlsZChcIm4xOVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9jei5vbkNsaWNrKHRoaXMuc2hvd1RvcHVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl96ei5vbkNsaWNrKHRoaXMuc2hvd1RyYW5zZmVyVmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5fdHgub25DbGljayh0aGlzLnNob3dXaXRoZHJhd2FsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl9mbC5vbkNsaWNrKHRoaXMuc2hvd1dlbGZhcmVWaWV3LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fZXllLm9uQ2xpY2sodGhpcy5oaWRlR29sZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMud2FsbGV0QnRuLm9uQ2xpY2sodGhpcy5zaG93V2FsbGV0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc2V0dGluZy5vbkNsaWNrKHRoaXMuc2hvd1NldHRpbmcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NoZXF1Lm9uQ2xpY2sodGhpcy5zaG93Q29tbXVuaXR5LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl9zaGFyZS5vbkNsaWNrKHRoaXMuc2hvd1NoYXJlVmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5fbXlzWS5vbkNsaWNrKHRoaXMuc2hvd0NhcmVlclZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX2JlaWJhby5vbkNsaWNrKHRoaXMuc2hvd0tuc3BzYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl9mbG93aW5nV2F0ZXIub25DbGljayh0aGlzLnNob3dGbG93aW5nd2F0ZXIsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm1lVmlwID0gdGhpcy5nZXRDaGlsZChcIm1ldmlwXCIpLmFzQ29tO1xyXG4gICAgICAgIHRoaXMuVmlwQ29udHJvbGxlciA9IHRoaXMubWVWaXAuZ2V0Q29udHJvbGxlcihcInZpcFwiKTtcclxuICAgICAgICB0aGlzLnVzZXJpZCA9IHRoaXMubWVWaXAuZ2V0Q2hpbGQoXCJpZFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy5tZVZpcC5nZXRDaGlsZChcIm5hbWVcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5idG5fY29weUlkID0gdGhpcy5tZVZpcC5nZXRDaGlsZChcImJ0bl9jb3B5aWRcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fY29weUlkLm9uQ2xpY2sodGhpcy5jb3B5SWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NleCA9IHRoaXMubWVWaXAuZ2V0Q2hpbGQoXCJzZXhcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fRWRpdE5hbWUgPSB0aGlzLm1lVmlwLmdldENoaWxkKFwiYnRuX0VkaXROYW1lXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX0VkaXROYW1lLm9uQ2xpY2sodGhpcy5zaG93RWRpdFBhbmVsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJ0bl92aXB4cSA9IHRoaXMubWVWaXAuZ2V0Q2hpbGQoXCJ2aXB4cVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl92aXB4cS5vbkNsaWNrKHRoaXMuc2hvd1ZpcFByaVZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3JlZFBhY2tldC5vbkNsaWNrKHRoaXMuc2hvd1JlZFBhY2tldFZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3JlZFBhY2tldC5ub2RlLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMuYnRuX3JlZFBhY2tldC5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC41LCAwLjQgKiAwLjk1KSwgY2Muc2NhbGVUbygwLjUsIDAuNCAqIDEuMDUpKSkpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLm1lVmlwLmdldENoaWxkKFwiaGVhZFwiKS5hc0NvbTtcclxuICAgICAgICB0aGlzLmhlYWRMb2FkZXIgPSB0aGlzLmhlYWQuZ2V0Q2hpbGQoXCJuMFwiKS5hc0xvYWRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkQm9sZCA9IHRoaXMubWVWaXAuZ2V0Q2hpbGQoXCJoZWFkRnJhbWVcIikuYXNMb2FkZXI7ICAgICAvLyB0aGlzLmhlYWQuZ2V0Q2hpbGQoXCJuNFwiKS5hc0xvYWRlcjtcclxuXHJcbiAgICB9XHJcbiAgICAvKiog5LiL6Z2i5Yqf6IO95oyJ6ZKu55qE5rqi5Ye65pe2ICA1NTAg5Li657uE5Lu26auYICovXHJcbiAgICBwdWJsaWMgY2hhbmdlZEJ0bkNvbShoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkeCA9IGhlaWdodCAtIHRoaXMuYWxsYnRuQ29tLnk7XHJcbiAgICAgICAgaWYgKGR4IDwgNTUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsYnRuQ29tLmhlaWdodCA9IGR4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq6aGv56S657eo6Lyv55WM6Z2iICovXHJcbiAgICBwdWJsaWMgc2hvd0VkaXRQYW5lbCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dNeWluZm9WaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBwbGF5ID0gQXBwQ29uc3QubVBsYXllck1vZGVsO1xyXG4gICAgICAgIC8vIHRoaXMuZ29sZC50ZXh0ID0gKHBsYXkuZ29sZCAvIDEwMCkgKyAnJztcclxuICAgICAgICB0aGlzLnVzZXJpZC5zZXRWYXIoXCJpZFwiLCBwbGF5LnVzZXJpZCArICcnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lLnRleHQgPSBwbGF5Ll9uO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy51c2VyTmFtZS53aWR0aCA+IDMwMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJ0bl9FZGl0TmFtZS54ID0gdGhpcy51c2VyTmFtZS54ICsgdGhpcy51c2VyTmFtZS53aWR0aCArIDcwO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5idG5fRWRpdE5hbWUueCA8IHRoaXMuYnRuX2NvcHlJZC54KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJ0bl9FZGl0TmFtZS54ID0gdGhpcy5idG5fY29weUlkLng7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5idG5fRWRpdE5hbWUueCA+IDgzOSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idG5fRWRpdE5hbWUueCA9IDgzOTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYnRuX0VkaXROYW1lLnggPSB0aGlzLmJ0bl9jb3B5SWQueDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHZpcGx2ID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnZpcExldmVsO1xyXG4gICAgICAgIGlmICh2aXBsdiA+IDkpIHtcclxuICAgICAgICAgICAgdmlwbHYgPSA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlZpcENvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IHZpcGx2O1xyXG4gICAgICAgIGxldCBzZXggPSBBcHBDb25zdC5tUGxheWVyTW9kZWwud2VjaGF0Ll9TO1xyXG4gICAgICAgIHRoaXMuYnRuX3NleC5zZWxlY3RlZCA9ICEhc2V4O1xyXG4gICAgICAgIHRoaXMuaGlkZUdvbGQoKTtcclxuXHJcbiAgICAgICAgLy8g5Yi35paw5raI5oGvXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoTWVzc2FnZUVtYWlsKCk7XHJcblxyXG4gICAgICAgIC8vIOmakOiXj1ZJUOWKn+iDvVxyXG4gICAgICAgIHRoaXMuYnRuX3ZpcHhxLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlZpcENvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIt+aWsOa2iOaBr1xyXG4gICAgcHVibGljIHJlZnJlc2hNZXNzYWdlRW1haWwoKSB7XHJcbiAgICAgICAgbGV0IGRhdGE6IHNjX2dldGVtYWlsbGlzdCA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5lbWFpbEluZm87XHJcbiAgICAgICAgbGV0IGhhdmVOb0xvb2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVtYWlsbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmVtYWlsbGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbWFpbCA9IGRhdGEuZW1haWxsaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyaWQgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZDtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFkZW5vID0gZW1haWwudHJhZGVubztcclxuICAgICAgICAgICAgICAgIGxldCBsb29rTiA9IFBsYXllclByZWZzLkdldEludChcIklTTE9PS1wiICsgdXNlcmlkICsgXCJcIiArIHRyYWRlbm8sIDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzbG9vayA9IGxvb2tOID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzbG9vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhdmVOb0xvb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNldEZsb3dpbmdSZWFkKGhhdmVOb0xvb2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuioree9rumgreWDjyAqL1xyXG4gICAgcHVibGljIHNldEhlYWQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMuaGVhZExvYWRlciwgdXJsKTtcclxuICAgICAgICB0aGlzLnNldEhlYWRGcmFtKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0SGVhZEZyYW0oKSB7XHJcbiAgICAgICAgaWYgKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRGcmFtZVwiXSkge1xyXG4gICAgICAgICAgICBVSVV0aWwubG9hZFNob3BJbWFnZSh0aGlzLmhlYWRCb2xkLCBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkRnJhbWVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlpI3liLYgaWQgKi9cclxuICAgIHByaXZhdGUgY29weUlkKCkge1xyXG4gICAgICAgIC8vICBpT1MgIENDX0pTQlxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGlkID0gQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCArICcnO1xyXG4gICAgICAgIGlmIChDQ19KU0IpIHtcclxuICAgICAgICAgICAgTmF0aXZlTWV0aG9kLmNvcHlUZXh0U3RyaW5nKGlkKTtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5aSN5Yi25oiQ5YqfXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBib29sID0gdGhpcy5jb21tYW5kQ29weShpZCk7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSBib29sID8gXCLlpI3liLbmiJDlip9cIiA6IFwi5aSN5Yi25aSx6LSlXCI7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlpI3liLYgKi9cclxuICAgIHB1YmxpYyBjb21tYW5kQ29weShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICBlbC52YWx1ZSA9IGlucHV0O1xyXG4gICAgICAgIC8vIFByZXZlbnQga2V5Ym9hcmQgZnJvbSBzaG93aW5nIG9uIG1vYmlsZVxyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgICAgLy9lbC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XHJcbiAgICAgICAgZWwuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7IC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxSYW5nZTogYW55ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgICAgIC8vIEV4cGxpY2l0IHNlbGVjdGlvbiB3b3JrYXJvdW5kIGZvciBpT1NcclxuICAgICAgICBlbC5zZWxlY3Rpb25TdGFydCA9IDA7XHJcbiAgICAgICAgZWwuc2VsZWN0aW9uRW5kID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3VjY2VzcyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFJhbmdlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKG9yaWdpbmFsUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VjY2VzcztcclxuICAgIH07XHJcblxyXG5cclxuICAgIHB1YmxpYyBoaWRlR29sZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5idG5fZXllLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBzdHIgPSB0aGlzLmdvbGQudGV4dDtcclxuICAgICAgICAgICAgLy8gbGV0IHRlbXAgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5nb2xkLnRleHQgPSAnKioqKionO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdvbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQpICsgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VG9wdXAoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNZVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93VG9wdXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93VHJhbnNmZXJWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pc1NldFBheVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dWZXJpZmljYXRpb25Qd2RWaWV3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1NldFBheVBhc3N3b3JkVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93V2l0aGRyYXdhbCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmIChMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNTZXRQYXlQYXNzd29yZCkge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93V2l0aGRyYXdhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dTZXRQYXlQYXNzd29yZFZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd1dlbGZhcmVWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1dlbGZhcmVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTZXR0aW5nKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1NldHRpbmdWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56S+5Yy6ICovXHJcbiAgICBwdWJsaWMgc2hvd0NvbW11bml0eSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmIChMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3djb21tdW5pdHlWaWV3KCk7XHJcbiAgICAgICAgICAgIC8vIOi3s+i9rOWIsOmmlumhtVxyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5qdW1wSG9tZVBhZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0YWdlbnRpbmZvKExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKirliIbkuqsgKi9cclxuICAgIHB1YmxpYyBzaG93U2hhcmVWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1NoYXJlVmlldygpO1xyXG4gICAgfVxyXG4gICAgLyoq6aGv56S66Yyi5YyF6KiY6YyEICovXHJcbiAgICBwdWJsaWMgc2hvd1dhbGxldCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dXYWxsZXRSZWNvcmRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDYXJlZXJWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTWVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd0NhcmVlclZpZXcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93S25zcHNhY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNZVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93a25hcHNhY2tWaWV3KCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2dldGJhY2twYWNrbGlzdCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dGbG93aW5nd2F0ZXIoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNZVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TXlJbmZvcm1hdGlvblZpZXcoKTtcclxuICAgICAgICAvLyB0aGlzLnNldEZsb3dpbmdSZWFkKGZhbHNlKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0ZW1haWxsaXN0KHRydWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEZsb3dpbmdSZWFkKGlzUmVhZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYnRuX2Zsb3dpbmdXYXRlci5nZXRDb250cm9sbGVyKFwicmVhZFwiKS5zZXRTZWxlY3RlZEluZGV4KGlzUmVhZCA/IDEgOiAwKTtcclxuICAgIH1cclxuICAgIC8qKnZpcCDnibnmrIogKi9cclxuICAgIHB1YmxpYyBzaG93VmlwUHJpVmlldygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dWaXBQcml2aWxlZ2VWaWV3KCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2dldHVzZXJ2aXBpbmZvKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93UmVkUGFja2V0VmlldygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01lVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBjaWR4OiBudW1iZXIgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeDtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZXh0ZW5kcmVkaW5mbyhjaWR4KTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iXX0=