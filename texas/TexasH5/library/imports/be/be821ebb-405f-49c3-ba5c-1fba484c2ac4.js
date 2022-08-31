"use strict";
cc._RF.push(module, 'be82167QF9Jw7pcH7pITCrE', 'SetPayPassword');
// GameHall/script/Lobby/Me/SetPayPassword.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LanguageConfig_1 = require("../LanguageConfig");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 设置支付密码
 */
var SetPayPassword = /** @class */ (function (_super) {
    __extends(SetPayPassword, _super);
    function SetPayPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_qx = null;
        _this.ui_btn_sure = null;
        _this.ui_newPayPwd = null;
        _this.ui_newPayPwd2 = null;
        return _this;
    }
    Object.defineProperty(SetPayPassword.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetPayPassword.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetPayPassword.prototype, "componentName", {
        get: function () {
            return "SetPayPassword";
        },
        enumerable: false,
        configurable: true
    });
    SetPayPassword.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    SetPayPassword.prototype.OnLoadCompleted = function () {
        var _this = this;
        this.ui_btn_qx.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('SetPayPassword', "button");
            _this.Hide();
        });
        this.ui_btn_sure.onClick(this.sureSetPassword, this);
        this.fguiComponent.sortingOrder = 9999;
        this.Show();
    };
    SetPayPassword.prototype.sureSetPassword = function () {
        AudioManager_1.AudioManager.Singleton.play('SetPayPassword', "button");
        if (this.ui_newPayPwd.text == "" || this.ui_newPayPwd2.text == "") {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12001)); //请输入完整的6位数密码
            return;
        }
        if (this.ui_newPayPwd.text.length < 6 || this.ui_newPayPwd2.text.length < 6) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12001)); //请输入完整的6位数密码
            return;
        }
        if (this.ui_newPayPwd.text != this.ui_newPayPwd2.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12002)); //两次输入的密码不一致
            return;
        }
        if (!UIUtil_1.UIUtil.checkNumber(this.ui_newPayPwd.text)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12003)); //输入的密码格式不对
            return;
        }
        LobbyViewCtr_1.default.instance.cs_changePassword_bk(this.ui_newPayPwd.text);
    };
    SetPayPassword.prototype.setSuccessfull = function () {
        CommonCtr_1.CommonCtr.instance.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12004)); //设置支付密码成功
        this.Hide();
    };
    SetPayPassword.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.ui_newPayPwd.text = "";
        this.ui_newPayPwd2.text = "";
    };
    SetPayPassword.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    return SetPayPassword;
}(ViewBase_1.default));
exports.default = SetPayPassword;

cc._RF.pop();