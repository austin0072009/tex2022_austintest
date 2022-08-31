"use strict";
cc._RF.push(module, 'ddfb1ESckZLlq38Qd/UtysA', 'LanguageView');
// GameHall/script/Lobby/settingpanel/LanguageView.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var GameCommon_1 = require("../../GameCommon");
/**
 * @description 語言
 */
var LanguageView = /** @class */ (function (_super) {
    __extends(LanguageView, _super);
    function LanguageView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_closeLanguage = null;
        _this.ui_btn_confirmLanguage = null;
        _this.ui_btn_cancelLanguage = null;
        _this.ui_confirmsetLanguage = null;
        /**語言 */
        _this.ui_btn_ftzw = null;
        _this.ui_btn_jtzw = null;
        _this.ui_btn_yinyu = null;
        _this.ui_btn_ry = null;
        _this.ui_yuyanque = null;
        return _this;
    }
    Object.defineProperty(LanguageView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LanguageView.prototype, "componentName", {
        get: function () {
            return "setLanguage";
        },
        enumerable: false,
        configurable: true
    });
    LanguageView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_closeLanguage.onClick(this.Hide, this);
        this.ui_btn_cancelLanguage.onClick(this.canceLanguage, this);
        this.ui_btn_confirmLanguage.onClick(this.changedLanguage, this);
        this.languageController = this.fguiComponent.getController("type");
        this.languageController.onChanged(this.languageChanged, this);
    };
    LanguageView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    LanguageView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('LanguageView', "button");
        _super.prototype.Hide.call(this);
    };
    LanguageView.prototype.languageChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('LanguageView', "button");
        var index = this.languageController.selectedIndex;
        switch (AppConst_1.AppConst.languageType) {
            case 1:
                this.ui_yuyanque.setVar("1", this.ui_btn_ftzw.title).flushVars();
                break;
            case 2:
                this.ui_yuyanque.setVar("1", this.ui_btn_jtzw.title).flushVars();
                break;
            case 3:
                this.ui_yuyanque.setVar("1", this.ui_btn_yinyu.title).flushVars();
                break;
            case 4:
                this.ui_yuyanque.setVar("1", this.ui_btn_ry.title).flushVars();
                break;
        }
        switch (index) {
            case 0:
                break;
            case 1:
                this.ui_yuyanque.setVar("2", this.ui_btn_ftzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 2:
                this.ui_yuyanque.setVar("2", this.ui_btn_jtzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 3:
                this.ui_yuyanque.setVar("2", this.ui_btn_yinyu.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 4:
                this.ui_yuyanque.setVar("2", this.ui_btn_ry.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
        }
    };
    LanguageView.prototype.canceLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LanguageView', "button");
        this.ui_confirmsetLanguage.visible = false;
        this.languageController.selectedIndex = 0;
    };
    LanguageView.prototype.changedLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LanguageView', "button");
        var index = this.languageController.selectedIndex;
        this.ui_confirmsetLanguage.visible = false;
        if (AppConst_1.AppConst.languageType == index) { //切換相同的語言
            return;
        }
        if (index == 3 || index == 4) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("暫無相關語言");
            return;
        }
        AppConst_1.AppConst.languageType = index;
        cc.sys.localStorage.setItem("languageType", AppConst_1.AppConst.languageType + '');
        fgui.UIPackage.removePackage(this.packageName);
        // GameCommon.loadScene("gameHall", "lobby");
        this.signout();
    };
    /**退出游戲  */
    LanguageView.prototype.signout = function () {
        WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
        GameCommon_1.GameCommon.isAutoLogin = false;
        SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "login");
    };
    LanguageView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return LanguageView;
}(ViewBase_1.default));
exports.default = LanguageView;

cc._RF.pop();