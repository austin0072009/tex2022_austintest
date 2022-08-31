"use strict";
cc._RF.push(module, '55e92P5njBJGZgoJqNq0+4J', 'SettingView');
// GameHall/script/Lobby/settingpanel/SettingView.ts

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
var SceneManager_1 = require("../../../../Script/BaseFrame/SceneManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var GameCommon_1 = require("../../GameCommon");
/**
 * @description 設置
 */
var SettingView = /** @class */ (function (_super) {
    __extends(SettingView, _super);
    function SettingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_setBreak = null;
        _this.ui_btn_return = null;
        _this.ui_btn_setLoginPwd = null;
        _this.ui_btn_setPlayPwd = null;
        _this.ui_btn_setaboutme = null;
        _this.ui_btn_setys = null;
        _this.ui_btn_setlanguage = null;
        _this.ui_btn_setmusic = null;
        _this.ui_btn_setSound = null;
        _this.ui_set_ver = null;
        return _this;
    }
    Object.defineProperty(SettingView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SettingView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SettingView.prototype, "componentName", {
        get: function () {
            return "setting";
        },
        enumerable: false,
        configurable: true
    });
    SettingView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_setBreak.onClick(this.Hide, this);
        this.ui_btn_return.onClick(this.signout, this);
        this.ui_btn_setLoginPwd.onClick(this.showModifyLoginPwd, this);
        this.ui_btn_setPlayPwd.onClick(this.showModifyPlayPwd, this);
        this.ui_btn_setaboutme.onClick(this.showAboutUsView, this);
        this.ui_btn_setys.onClick(this.showPrivacyView, this);
        this.ui_btn_setlanguage.onClick(this.showLanguageView, this);
        this.languageText = this.ui_btn_setlanguage.getChild("n7").asTextField;
        var bool = AudioManager_1.AudioManager.Singleton.getSoundStatus();
        this.ui_btn_setmusic.selected = bool;
        var soundBool = AudioManager_1.AudioManager.Singleton.getEffectStatus();
        this.ui_btn_setSound.selected = soundBool;
        this.ui_btn_setmusic.onClick(this.setMusic, this);
        this.ui_btn_setSound.onClick(this.setSound, this);
        this.ui_set_ver.text = BaseFrameNative_1.BaseFrameNative.VERSION;
    };
    SettingView.prototype.OnLoadCompleted = function () {
        var index = AppConst_1.AppConst.languageType;
        var str = '';
        switch (index) {
            case 1:
                str = "繁體中文";
                break;
            case 2:
                str = "简体中文";
                break;
            case 3:
                str = "";
                break;
            case 4:
                str = "";
                break;
        }
        this.languageText.text = str;
        this.Show();
    };
    SettingView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        _super.prototype.Hide.call(this);
    };
    SettingView.prototype.setMusic = function () {
        var bool = AudioManager_1.AudioManager.Singleton.getSoundStatus();
        var str = bool ? "close" : "open";
        AudioManager_1.AudioManager.Singleton.setSoundStatus(str);
        AudioManager_1.AudioManager.TexasMusicStatus = !bool;
    };
    SettingView.prototype.setSound = function () {
        var bool = AudioManager_1.AudioManager.Singleton.getEffectStatus();
        var str = bool ? "close" : "open";
        AudioManager_1.AudioManager.Singleton.setEffectStatus(str);
        AudioManager_1.AudioManager.TexasEffectStatus = !bool;
    };
    /**退出游戲  */
    SettingView.prototype.signout = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
        GameCommon_1.GameCommon.isAutoLogin = false;
        SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "login");
    };
    SettingView.prototype.showModifyLoginPwd = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr_1.default.instance.view.showModifyLoginPwdView();
    };
    SettingView.prototype.showModifyPlayPwd = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        if (LobbyViewCtr_1.default.instance.Model.isSetPayPassword) {
            LobbyViewCtr_1.default.instance.view.showModifyPlayPwdView();
        }
        else {
            LobbyViewCtr_1.default.instance.view.showSetPayPasswordView();
        }
    };
    SettingView.prototype.showAboutUsView = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr_1.default.instance.view.showAboutUsView();
    };
    SettingView.prototype.showPrivacyView = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr_1.default.instance.view.showPrivacyView();
    };
    SettingView.prototype.showLanguageView = function () {
        AudioManager_1.AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr_1.default.instance.view.showLanguageView();
    };
    SettingView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return SettingView;
}(ViewBase_1.default));
exports.default = SettingView;

cc._RF.pop();