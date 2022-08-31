"use strict";
cc._RF.push(module, 'd3811BtxpVNl5o1Hpk52ri0', 'MyverificationPwdView');
// GameHall/script/Lobby/transfer/MyverificationPwdView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 支付密码
 */
var MyverificationPwdView = /** @class */ (function (_super) {
    __extends(MyverificationPwdView, _super);
    function MyverificationPwdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_yzzfbreak1 = null;
        _this.ui_btn_yzquxiao = null;
        _this.ui_btn_vconfirm = null;
        _this.ui_btn_inputbg = null;
        _this.ui_pwd0 = null;
        _this.ui_pwd1 = null;
        _this.ui_pwd2 = null;
        _this.ui_pwd3 = null;
        _this.ui_pwd4 = null;
        _this.ui_pwd5 = null;
        _this.ui_inputLabel = null;
        _this.inputPwd = '';
        return _this;
    }
    Object.defineProperty(MyverificationPwdView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyverificationPwdView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyverificationPwdView.prototype, "componentName", {
        get: function () {
            return "yzTxsqcom";
        },
        enumerable: false,
        configurable: true
    });
    MyverificationPwdView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_yzzfbreak1.onClick(this.HideView, this);
        this.ui_btn_yzquxiao.onClick(this.HideView, this);
        this.ui_btn_inputbg.onClick(this.setFocus, this);
        this.ui_inputLabel.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
        this.ui_inputLabel.node.opacity = 0;
        this.ui_btn_vconfirm.onClick(this.sendConfirm, this);
        this.typeController = this.fguiComponent.getController("c1");
    };
    MyverificationPwdView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    MyverificationPwdView.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    MyverificationPwdView.prototype.HideView = function () {
        AudioManager_1.AudioManager.Singleton.play('MyverificationPwdView', "button");
        this.Hide();
    };
    /**确认验证密码 */
    MyverificationPwdView.prototype.sendConfirm = function () {
        AudioManager_1.AudioManager.Singleton.play('MyverificationPwdView', "button");
        if (this.inputPwd.length != 6) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密碼格式不正確");
            return;
        }
        // let contro = this.typeController.selectedIndex;
        // if (contro == 1) {
        //     LobbyViewCtr.instance.cs_changePassword_appbk('', this.inputPwd); //設置
        // } else { //驗證支付密碼
        LobbyViewCtr_1.default.instance.cs_enterbank_bk(this.inputPwd); //验证支付密码
        // }
    };
    /**设置支付密码成功 */
    MyverificationPwdView.prototype.setPwdSucceed = function () {
        this.typeController.selectedIndex = 0;
        AppConst_1.AppConst.mPlayerModel["UserPassword"] = this.inputPwd;
        this.clean();
        this.ui_inputLabel.requestFocus();
    };
    /**验证支付密码成功 */
    MyverificationPwdView.prototype.verificationPwdSucceed = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTransferView();
    };
    MyverificationPwdView.prototype.setFocus = function () {
        this.ui_inputLabel.requestFocus();
    };
    MyverificationPwdView.prototype.changedText = function (event) {
        var text = this.ui_inputLabel.text;
        this.inputPwd = text;
        for (var i = 0; i < 6; i++) {
            if (i > text.length) {
                this["ui_pwd" + i].text = '';
            }
            else {
                this["ui_pwd" + i].text = text[i];
            }
        }
    };
    MyverificationPwdView.prototype.Show = function () {
        // if (!LobbyViewCtr.instance.model.isSetPayPassword) {
        //     this.typeController.selectedIndex = 1;
        // } else {
        this.typeController.selectedIndex = 0;
        // }
        this.clean();
        _super.prototype.Show.call(this);
    };
    MyverificationPwdView.prototype.clean = function () {
        this.inputPwd = '';
        this.ui_inputLabel.text = '';
        for (var i = 0; i < 6; i++) {
            this["ui_pwd" + i].text = '';
        }
    };
    MyverificationPwdView.prototype.toTopup = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    return MyverificationPwdView;
}(ViewBase_1.default));
exports.default = MyverificationPwdView;

cc._RF.pop();