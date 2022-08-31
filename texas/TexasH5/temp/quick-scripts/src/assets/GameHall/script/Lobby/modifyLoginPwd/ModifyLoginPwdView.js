"use strict";
cc._RF.push(module, 'b77d8MfcslDKrbhz/OpTByN', 'ModifyLoginPwdView');
// GameHall/script/Lobby/modifyLoginPwd/ModifyLoginPwdView.ts

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
var SceneManager_1 = require("../../../../Script/BaseFrame/SceneManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
/**
 * @description 修改登錄密碼
 */
var ModifyLoginPwdView = /** @class */ (function (_super) {
    __extends(ModifyLoginPwdView, _super);
    function ModifyLoginPwdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_modifyloginBreak = null;
        _this.ui_oldPwd = null;
        _this.ui_newPwd = null;
        _this.ui_newPwd1 = null;
        _this.ui_btn_modify = null;
        _this.flag = false;
        return _this;
    }
    Object.defineProperty(ModifyLoginPwdView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyLoginPwdView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyLoginPwdView.prototype, "componentName", {
        get: function () {
            return "modifyLoginPwd";
        },
        enumerable: false,
        configurable: true
    });
    ModifyLoginPwdView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_modifyloginBreak.onClick(this.Hide, this);
        this.ui_btn_modify.onClick(this.changedLoginPwd, this);
    };
    ModifyLoginPwdView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('ModifyLoginPwdView', "button");
        _super.prototype.Hide.call(this);
    };
    ModifyLoginPwdView.prototype.changedLoginPwd = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('ModifyLoginPwdView', "button");
        var oldpwd = this.ui_oldPwd.text;
        var newPwd = this.ui_newPwd.text;
        var newPwd2 = this.ui_newPwd1.text;
        if (!oldpwd || !newPwd || !newPwd2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (newPwd != newPwd2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        var pwd = cc.sys.localStorage.getItem("login_pwd");
        if (oldpwd != pwd) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("输入的旧密码不正确");
            return;
        }
        if (oldpwd == newPwd) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("新密码与旧密码一样");
            return;
        }
        // if (newPwd.length != 6) {
        //     CommonCtr.instance.view.ShowTipLabel("新密码的格式不正确");
        //     return;
        // }
        var params = {
            newpassword: newPwd,
            userid: AppConst_1.AppConst.mPlayerModel.userid,
        };
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/ChangePWD";
        if (this.flag) {
            return;
        }
        this.flag = true;
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx_1.default.instance.post(url, params
        // {
        //     headers: {
        //         "Content-Type": "application/json; charset=utf-8"
        //     }
        // }
        )
            .then(function (res) {
            fgui.GRoot.inst.closeModalWait();
            if (res.code == 0) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("修改成功，請重新登陸！");
                _this.schedule(function () {
                    WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
                    SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "login");
                }, 1);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(res.message);
            }
        })
            .catch(function () {
            fgui.GRoot.inst.closeModalWait();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("修改密码失败");
        });
    };
    ModifyLoginPwdView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    ModifyLoginPwdView.prototype.Show = function () {
        this.flag = false;
        _super.prototype.Show.call(this);
    };
    return ModifyLoginPwdView;
}(ViewBase_1.default));
exports.default = ModifyLoginPwdView;

cc._RF.pop();