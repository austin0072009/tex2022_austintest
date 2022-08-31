
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/modifyPlayPwd/ModifyPlayPwdView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1vZGlmeVBsYXlQd2RcXE1vZGlmeVBsYXlQd2RWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsa0VBQTZEO0FBQzdELHNFQUFxRTtBQUNyRSw0RUFBdUU7QUFDdkUsMkZBQTBGO0FBQzFGLCtDQUE4QztBQUM5QyxnREFBMkM7QUFFM0M7O0dBRUc7QUFDSDtJQUErQyxxQ0FBUTtJQUF2RDtRQUFBLHFFQXFUQztRQTFTVyw0QkFBc0IsR0FBaUIsSUFBSSxDQUFDO1FBQzVDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ3pDLDRCQUFzQixHQUFpQixJQUFJLENBQUM7UUFFNUMsdUJBQWlCLEdBQW9CLElBQUksQ0FBQztRQUMxQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDdEMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUMvQyxRQUFRO1FBQ0EsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUV2QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFaEQsUUFBUTtRQUNBLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUNyQywwQkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFFdEMseUJBQW1CLEdBQW1CLElBQUksQ0FBQztRQUMzQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ3hDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV6QyxjQUFRLEdB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SUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FyVEEsQUFxVEMsQ0FyVDhDLGtCQUFRLEdBcVR0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgR2FtZUNvbW1vbiB9IGZyb20gXCIuLi8uLi9HYW1lQ29tbW9uXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDkv67mlLnmlK/ku5jlr4bnorxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmeVBsYXlQd2RWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIm1vZGlmeVBsYXlQd2RcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9tb2RpZnlwbGF5QnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl93anB3ZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfRm9yZ2V0UGxheXB3ZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2ZvcmdldHBsYXlicmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2VtYWlsRm9yZ2V0TnVtOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9vbGRwbGF5cHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9uZXdwbGF5cHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9uZXdwbGF5cHdkMjogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIC8qKuS/ruaUuSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fbW9kaWZ5OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5FbWFpbEdldFB3ZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuUGhvbmVHZXRQd2Q6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9jb250cm9sbGVyQzE6IGZndWkuQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgLyoq5Y+W5raIICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9mb3JnZXRxeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2ZvcmdldENvbmZpcm06IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX25ld1BheVB3ZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfbmV3UGF5UHdkMjogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX3JlZ1Bob25lQXJlYWNvZGU6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuQ29kZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfcGhvbmVBY2NvdW50OiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9waG9uZVJlZ0NvZGU6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGZpbmRUeXBlOiBzdHJpbmcgPSBcInBob25lXCI7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fbW9kaWZ5cGxheUJyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl93anB3ZC5vbkNsaWNrKHRoaXMuc2hvd0ZvcmdldFBsYXksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2ZvcmdldHBsYXlicmVhay5vbkNsaWNrKHRoaXMuaGlkZUZvcmdldFBsYXksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX21vZGlmeS5vbkNsaWNrKHRoaXMuY2hhbmdlUHdkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9idG5fZm9yZ2V0cXgub25DbGljayh0aGlzLmhpZGVGb3JnZXRQbGF5LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9mb3JnZXRDb25maXJtLm9uQ2xpY2sodGhpcy5zZW5kQ2hhbmdlZFB3ZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuQ29kZS5vbkNsaWNrKHRoaXMuc2VuZFBob25lQ29kZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuRW1haWxHZXRQd2Qub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTW9kaWZ5UGxheVB3ZFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy51aV9jb250cm9sbGVyQzEuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICAgICAgdGhpcy5maW5kVHlwZSA9IFwiZW1haWxcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVpX2J0blBob25lR2V0UHdkLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01vZGlmeVBsYXlQd2RWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMudWlfY29udHJvbGxlckMxLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFR5cGUgPSBcInBob25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMudWlfY29udHJvbGxlckMxID0gdGhpcy51aV9Gb3JnZXRQbGF5cHdkLmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01vZGlmeVBsYXlQd2RWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VQd2QoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNb2RpZnlQbGF5UHdkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBvbGRQd2QgPSB0aGlzLnVpX29sZHBsYXlwd2QudGV4dDtcclxuICAgICAgICBsZXQgbmV3UHdkID0gdGhpcy51aV9uZXdwbGF5cHdkLnRleHQ7XHJcbiAgICAgICAgbGV0IG5ld1B3ZDIgPSB0aGlzLnVpX25ld3BsYXlwd2QyLnRleHQ7XHJcbiAgICAgICAgaWYgKCFvbGRQd2QgfHwgIW5ld1B3ZCB8fCAhbmV3UHdkMikge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLor7fmo4Dmn6XmmK/lkKbloavlhpnlrozmlbRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1B3ZCAhPSBuZXdQd2QyKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuS4pOasoei+k+WFpeeahOaWsOWvhueggeS4jeS4gOiHtFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3UHdkLmxlbmd0aCAhPSA2KSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIui+k+WFpeeahOaWsOWvhueggeagvOW8j+S4jeato+ehrlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfY2hhbmdlUGFzc3dvcmRfYXBwYmsob2xkUHdkLCBuZXdQd2QsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlv5jorrDlr4bnoIHph4znmoTkv67mlLnlr4bnoIEgKi9cclxuICAgIHB1YmxpYyBzZW5kQ2hhbmdlZFB3ZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01vZGlmeVBsYXlQd2RWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluZFR5cGUgPT0gXCJwaG9uZVwiKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51aV9waG9uZUFjY291bnQudGV4dCB8fCAhdGhpcy51aV9waG9uZVJlZ0NvZGUudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6K+35qOA5p+l5piv5ZCm5aGr5YaZ5a6M5pW0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbmRUeXBlID09IFwiZW1haWxcIikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudWlfZW1haWxGb3JnZXROdW0udGV4dCB8fCAhdGhpcy51aV9waG9uZVJlZ0NvZGUudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6K+35qOA5p+l5piv5ZCm5aGr5YaZ5a6M5pW0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudWlfbmV3UGF5UHdkLnRleHQgfHwgIXRoaXMudWlfbmV3UGF5UHdkMi50ZXh0KSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuivt+ajgOafpeaYr+WQpuWhq+WGmeWujOaVtFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51aV9uZXdQYXlQd2QudGV4dCAhPSB0aGlzLnVpX25ld1BheVB3ZDIudGV4dCkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLkuKTmrKHovpPlhaXnmoTmlrDlr4bnoIHkuI3kuIDoh7RcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudWlfbmV3UGF5UHdkLnRleHQubGVuZ3RoICE9IDYpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6L6T5YWl55qE5paw5a+G56CB5qC85byP5LiN5q2j56GuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19jaGFuZ2VQYXNzd29yZF9hcHBiayh0aGlzLnVpX2xvZ2luUHdkLnRleHQsIHRoaXMudWlfbmV3UGF5UHdkLnRleHQsIHRydWUpO1xyXG4gICAgICAgIGxldCBwaG9uZSA9IHRoaXMudWlfcGhvbmVBY2NvdW50LnRleHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluZFR5cGUgPT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgICAgICAgIHBob25lID0gdGhpcy51aV9lbWFpbEZvcmdldE51bS50ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkv67mlLnkuLpodHRwXHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9VcGRhdGVVc2VyUGF5UFdEXCJcclxuICAgICAgICAgICAgKyBgP3VzZXJpZD0ke0FwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWR9Jm5ld3Bhc3N3b3JkPSR7dGhpcy51aV9uZXdQYXlQd2QudGV4dH0mY29kZT0ke3RoaXMudWlfcGhvbmVSZWdDb2RlLnRleHR9JnBob25lPSR7cGhvbmV9YDtcclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLmdldCh1cmwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLUdldENvbnRhY3RJbmZvLS0tXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVGb3JnZXRQbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLmib7lm57mlK/ku5jlr4bnoIHmiJDlip/vvIFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwocmVzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLmib7lm57mlK/ku5jlr4bnoIHlpLHotKXvvIFcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj5HpgIHpqozor4HnoIFcclxuICAgIHB1YmxpYyBzZW5kUGhvbmVDb2RlKGV2ZW50OiBmZ3VpLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluZFR5cGUgPT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEVtYWlsQ29kZShldmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1cIiwgZXZlbnQudGFyZ2V0LiRnb2JqKTtcclxuICAgICAgICBsZXQgYnV0ID0gPGZndWkuR0J1dHRvbj5ldmVudC50YXJnZXQuJGdvYmo7XHJcblxyXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gYnV0LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG4gICAgICAgIGJ1dC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBob25lOiBzdHJpbmcgPSB0aGlzLnVpX3Bob25lQWNjb3VudC50ZXh0O1xyXG4gICAgICAgIGxldCBzdGF0ZTogc3RyaW5nID0gXCIyXCI7XHJcbiAgICAgICAgbGV0IGlzcGhvbmUgPSB0aGlzLmlzUGhvbmUocGhvbmUpO1xyXG4gICAgICAgIGlmICghaXNwaG9uZSkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5omL5qmf6Jmf56K85LiN5q2j56K6LOiri+mHjeaWsOi8uOWFpSFcIik7XHJcbiAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXJlYUNvZGUgPSB0aGlzLnVpX3JlZ1Bob25lQXJlYWNvZGUudGV4dDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFyZWFDb2RlID09IFwiLCBhcmVhQ29kZSk7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9TZW5kU01TXCI7XHJcbiAgICAgICAgbGV0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgICBtb2JpbGU6IHBob25lLFxyXG4gICAgICAgICAgICBzbXN0eXBlOiBzdGF0ZSwgIC8vIDDms6jlhowx5om+5Zue5a+G56CBMuS6pOaYk+WvhueggTPph43nva7lr4bnoIFcclxuICAgICAgICAgICAgcmVnaW9uOiBhcmVhQ29kZSxcclxuICAgICAgICAgICAgVXNlcklkOiBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dENvZGUgPSBidXQuZ2V0Q2hpbGQoXCJjb2RlXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSA2MDtcclxuICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSA2MCArICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSBjb2RlICsgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxLCA1OSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6amX6K2J56K855m86YCB5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6amX6K2J56K855m86YCB5aSx5pWXXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+R6YCB6aqM6K+B56CBXHJcbiAgICBwdWJsaWMgc2VuZEVtYWlsQ29kZShldmVudDogZmd1aS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tXCIsIGV2ZW50LnRhcmdldC4kZ29iaik7XHJcbiAgICAgICAgbGV0IGJ1dCA9IDxmZ3VpLkdCdXR0b24+ZXZlbnQudGFyZ2V0LiRnb2JqO1xyXG5cclxuICAgICAgICBsZXQgY29udHJvbGxlciA9IGJ1dC5nZXRDb250cm9sbGVyKFwidHlwZVwiKTtcclxuICAgICAgICBidXQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBlbWFpbDogc3RyaW5nID0gdGhpcy51aV9lbWFpbEZvcmdldE51bS50ZXh0O1xyXG4gICAgICAgIGxldCBzdGF0ZTogc3RyaW5nID0gXCIyXCI7XHJcbiAgICAgICAgbGV0IGlzZW1haWwgPSB0aGlzLmlzRW1haWwoZW1haWwpO1xyXG4gICAgICAgIGlmICghaXNlbWFpbCkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6YKu566x5Y+35LiN5q2j56K6LOiri+mHjeaWsOi8uOWFpSFcIik7XHJcbiAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lL1NlbmRtYWlsXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHNtc3R5cGU6IHN0YXRlLCAvLzDms6jlhowx5om+5Zue5a+G56CBMuS6pOaYk+WvhueggTPph43nva7lr4bnoIFcclxuICAgICAgICAgICAgVXNlcklkOiBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dENvZGUgPSBidXQuZ2V0Q2hpbGQoXCJjb2RlXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSA2MDtcclxuICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSA2MCArICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSBjb2RlICsgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxLCA1OSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6amX6K2J56K855m86YCB5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6amX6K2J56K855m86YCB5aSx5pWXXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuaJi+acuumqjOivgSAqL1xyXG4gICAgcHVibGljIGlzUGhvbmUocGhvbmU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChwaG9uZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5omL5py65Y+356CB56ys5LiA5L2N5pivWzFd5byA5aS077yM56ys5LqM5L2NWzMsNCw1LDcsOF3kuK3nmoTkuIDkvY3vvIznrKzkuInkvY3liLDnrKzljYHkuIDkvY3liJnmmK9bMC05XeS4reeahOaVsOWtl++8m1xyXG4gICAgICAgIC8vXjHooajnpLrlvIDlpLTkuLoxXHJcbiAgICAgICAgLy9bM3w0fDV8N3w4XSDooajnpLoz44CBNOOAgTXjgIE344CBOOS4reeahOS4gOS9jeaVsOWAvFxyXG4gICAgICAgIC8vWzAtOV17OX0g5Yy56YWN5YyF5ZCrMC0555qE5pWw5a2XXHJcbiAgICAgICAgbGV0IHJlZyA9IC9eMVszfDR8NXw3fDh8OV1bMC05XXs5fS87XHJcbiAgICAgICAgaWYgKHJlZy50ZXN0KHBob25lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL+aJi+acuuWPt+eggeato+ehrlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pa35piv5ZCm5piv6YO1566xICovXHJcbiAgICBwdWJsaWMgaXNFbWFpbChlbWFpbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGVtYWlsID09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVnID0gL15bYS16QS1aMC05Xy1dK0BbYS16QS1aMC05Xy1dKyhcXC5bYS16QS1aMC05Xy1dKykrJC87XHJcbiAgICAgICAgaWYgKHJlZy50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL+mDteeuseWPt+eggeato+ehrlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dGb3JnZXRQbGF5KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTW9kaWZ5UGxheVB3ZFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnVpX3Bob25lQWNjb3VudC50ZXh0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVpX2VtYWlsRm9yZ2V0TnVtLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudWlfb2xkcGxheXB3ZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy51aV9uZXdwbGF5cHdkLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLnVpX25ld3BsYXlwd2QyLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRBcmVhQ29kZUxpc3QoKTtcclxuICAgICAgICB0aGlzLnVpX0ZvcmdldFBsYXlwd2QudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGlkZUZvcmdldFBsYXkoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNb2RpZnlQbGF5UHdkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMudWlfRm9yZ2V0UGxheXB3ZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgdGhpcy51aV9waG9uZUFjY291bnQudGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51aV9lbWFpbEZvcmdldE51bS50ZXh0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVpX29sZHBsYXlwd2QudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMudWlfbmV3cGxheXB3ZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy51aV9uZXdwbGF5cHdkMi50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbml0QXJlYUNvZGVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy51aV9jb250cm9sbGVyQzEuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICB0aGlzLmZpbmRUeXBlID0gXCJwaG9uZVwiO1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdEFyZWFDb2RlTGlzdCgpIHtcclxuICAgICAgICBsZXQgYXJlYWNvZGVMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhID0gR2FtZUNvbW1vbi5hbGxTbXNDb2RlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgIGFyZWFjb2RlTGlzdFtpbmRleF0gPSBcIitcIiArIGVsZW1lbnQucHJlZml4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51aV9yZWdQaG9uZUFyZWFjb2RlLml0ZW1zID0gYXJlYWNvZGVMaXN0O1xyXG4gICAgICAgIHRoaXMudWlfcmVnUGhvbmVBcmVhY29kZS50ZXh0ID0gXCIrODZcIjtcclxuICAgIH1cclxuXHJcbn0iXX0=