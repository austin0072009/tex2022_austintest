"use strict";
cc._RF.push(module, 'ae1e2lU+yNP8aqlKOwYK9zg', 'ModifyPlayPwdView');
// GameHall/script/Lobby/modifyPlayPwd/ModifyPlayPwdView.ts

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
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var GameCommon_1 = require("../../GameCommon");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 修改支付密碼
 */
var ModifyPlayPwdView = /** @class */ (function (_super) {
    __extends(ModifyPlayPwdView, _super);
    function ModifyPlayPwdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_modifyplayBreak = null;
        _this.ui_btn_wjpwd = null;
        _this.ui_ForgetPlaypwd = null;
        _this.ui_btn_forgetplaybreak = null;
        _this.ui_emailForgetNum = null;
        _this.ui_oldplaypwd = null;
        _this.ui_newplaypwd = null;
        _this.ui_newplaypwd2 = null;
        /**修改 */
        _this.ui_btn_modify = null;
        _this.ui_btnEmailGetPwd = null;
        _this.ui_btnPhoneGetPwd = null;
        _this.ui_controllerC1 = null;
        /**取消 */
        _this.ui_btn_forgetqx = null;
        _this.ui_btn_forgetConfirm = null;
        _this.ui_newPayPwd = null;
        _this.ui_newPayPwd2 = null;
        _this.ui_regPhoneAreacode = null;
        _this.ui_btnCode = null;
        _this.ui_phoneAccount = null;
        _this.ui_phoneRegCode = null;
        _this.findType = "phone";
        return _this;
    }
    Object.defineProperty(ModifyPlayPwdView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyPlayPwdView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyPlayPwdView.prototype, "componentName", {
        get: function () {
            return "modifyPlayPwd";
        },
        enumerable: false,
        configurable: true
    });
    ModifyPlayPwdView.prototype.createChildComponents = function () {
        var _this = this;
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_modifyplayBreak.onClick(this.Hide, this);
        this.ui_btn_wjpwd.onClick(this.showForgetPlay, this);
        this.ui_btn_forgetplaybreak.onClick(this.hideForgetPlay, this);
        this.ui_btn_modify.onClick(this.changePwd, this);
        this.ui_btn_forgetqx.onClick(this.hideForgetPlay, this);
        this.ui_btn_forgetConfirm.onClick(this.sendChangedPwd, this);
        this.ui_btnCode.onClick(this.sendPhoneCode, this);
        this.ui_btnEmailGetPwd.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
            _this.ui_controllerC1.setSelectedIndex(1);
            _this.findType = "email";
        });
        this.ui_btnPhoneGetPwd.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
            _this.ui_controllerC1.setSelectedIndex(0);
            _this.findType = "phone";
        });
    };
    ModifyPlayPwdView.prototype.OnLoadCompleted = function () {
        this.ui_controllerC1 = this.ui_ForgetPlaypwd.getController("c1");
        this.Show();
    };
    ModifyPlayPwdView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        _super.prototype.Hide.call(this);
    };
    ModifyPlayPwdView.prototype.changePwd = function () {
        AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        var oldPwd = this.ui_oldplaypwd.text;
        var newPwd = this.ui_newplaypwd.text;
        var newPwd2 = this.ui_newplaypwd2.text;
        if (!oldPwd || !newPwd || !newPwd2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (newPwd != newPwd2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        if (newPwd.length != 6) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("输入的新密码格式不正确");
            return;
        }
        LobbyViewCtr_1.default.instance.cs_changePassword_appbk(oldPwd, newPwd, true);
    };
    /**忘记密码里的修改密码 */
    ModifyPlayPwdView.prototype.sendChangedPwd = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        if (this.findType == "phone") {
            if (!this.ui_phoneAccount.text || !this.ui_phoneRegCode.text) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
                return;
            }
        }
        else if (this.findType == "email") {
            if (!this.ui_emailForgetNum.text || !this.ui_phoneRegCode.text) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
                return;
            }
        }
        if (!this.ui_newPayPwd.text || !this.ui_newPayPwd2.text) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (this.ui_newPayPwd.text != this.ui_newPayPwd2.text) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        if (this.ui_newPayPwd.text.length != 6) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("输入的新密码格式不正确");
            return;
        }
        // LobbyViewCtr.instance.cs_changePassword_appbk(this.ui_loginPwd.text, this.ui_newPayPwd.text, true);
        var phone = this.ui_phoneAccount.text;
        if (this.findType == "email") {
            phone = this.ui_emailForgetNum.text;
        }
        // 修改为http
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UpdateUserPayPWD"
            + ("?userid=" + AppConst_1.AppConst.mPlayerModel.userid + "&newpassword=" + this.ui_newPayPwd.text + "&code=" + this.ui_phoneRegCode.text + "&phone=" + phone);
        HttpHelpEx_1.default.instance.get(url).then(function (res) {
            console.log("---GetContactInfo---", res);
            if (res.code == 1) {
                _this.hideForgetPlay();
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("找回支付密码成功！");
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(res.message);
            }
        }).catch(function (err) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("找回支付密码失败！");
        });
    };
    // 发送验证码
    ModifyPlayPwdView.prototype.sendPhoneCode = function (event) {
        var _this = this;
        if (this.findType == "email") {
            this.sendEmailCode(event);
            return;
        }
        console.log("------------", event.target.$gobj);
        var but = event.target.$gobj;
        var controller = but.getController("type");
        but.enabled = false;
        var phone = this.ui_phoneAccount.text;
        var state = "2";
        var isphone = this.isPhone(phone);
        if (!isphone) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("手機號碼不正確,請重新輸入!");
            but.enabled = true;
            return;
        }
        var areaCode = this.ui_regPhoneAreacode.text;
        console.log("areaCode == ", areaCode);
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/SendSMS";
        var params = {
            mobile: phone,
            smstype: state,
            region: areaCode,
            UserId: AppConst_1.AppConst.mPlayerModel.userid
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                var textCode_1 = but.getChild("code").asTextField;
                var code_1 = 60;
                textCode_1.text = 60 + '';
                _this.schedule(function () {
                    code_1--;
                    textCode_1.text = code_1 + '';
                    if (code_1 == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            }
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
        });
    };
    // 发送验证码
    ModifyPlayPwdView.prototype.sendEmailCode = function (event) {
        var _this = this;
        console.log("------------", event.target.$gobj);
        var but = event.target.$gobj;
        var controller = but.getController("type");
        but.enabled = false;
        var email = this.ui_emailForgetNum.text;
        var state = "2";
        var isemail = this.isEmail(email);
        if (!isemail) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("邮箱号不正確,請重新輸入!");
            but.enabled = true;
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Sendmail";
        var params = {
            email: email,
            smstype: state,
            UserId: AppConst_1.AppConst.mPlayerModel.userid
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                var textCode_2 = but.getChild("code").asTextField;
                var code_2 = 60;
                textCode_2.text = 60 + '';
                _this.schedule(function () {
                    code_2--;
                    textCode_2.text = code_2 + '';
                    if (code_2 == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            }
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
        });
    };
    /**手机验证 */
    ModifyPlayPwdView.prototype.isPhone = function (phone) {
        if (phone == "") {
            return false;
        }
        // 手机号码第一位是[1]开头，第二位[3,4,5,7,8]中的一位，第三位到第十一位则是[0-9]中的数字；
        //^1表示开头为1
        //[3|4|5|7|8] 表示3、4、5、7、8中的一位数值
        //[0-9]{9} 匹配包含0-9的数字
        var reg = /^1[3|4|5|7|8|9][0-9]{9}/;
        if (reg.test(phone)) {
            return true; //手机号码正确
        }
        return false;
    };
    /**判斷是否是郵箱 */
    ModifyPlayPwdView.prototype.isEmail = function (email) {
        if (email == "") {
            return false;
        }
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (reg.test(email)) {
            return true; //郵箱号码正确
        }
        return false;
    };
    ModifyPlayPwdView.prototype.showForgetPlay = function () {
        AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        this.ui_phoneAccount.text = "";
        this.ui_emailForgetNum.text = "";
        this.ui_oldplaypwd.text = '';
        this.ui_newplaypwd.text = '';
        this.ui_newplaypwd2.text = '';
        this.initAreaCodeList();
        this.ui_ForgetPlaypwd.visible = true;
    };
    ModifyPlayPwdView.prototype.hideForgetPlay = function () {
        AudioManager_1.AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        this.ui_ForgetPlaypwd.visible = false;
    };
    ModifyPlayPwdView.prototype.Show = function () {
        this.ui_phoneAccount.text = "";
        this.ui_emailForgetNum.text = "";
        this.ui_oldplaypwd.text = '';
        this.ui_newplaypwd.text = '';
        this.ui_newplaypwd2.text = '';
        this.initAreaCodeList();
        this.ui_controllerC1.setSelectedIndex(0);
        this.findType = "phone";
        _super.prototype.Show.call(this);
    };
    ModifyPlayPwdView.prototype.initAreaCodeList = function () {
        var areacodeList = [];
        var data = GameCommon_1.GameCommon.allSmsCode;
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            areacodeList[index] = "+" + element.prefix;
        }
        this.ui_regPhoneAreacode.items = areacodeList;
        this.ui_regPhoneAreacode.text = "+86";
    };
    return ModifyPlayPwdView;
}(ViewBase_1.default));
exports.default = ModifyPlayPwdView;

cc._RF.pop();