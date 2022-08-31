
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/settingpanel/SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHNldHRpbmdwYW5lbFxcU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLDBFQUF5RTtBQUN6RSxrRUFBNkQ7QUFDN0Qsa0ZBQWlGO0FBQ2pGLDJGQUEwRjtBQUMxRixzRUFBcUU7QUFDckUsZ0RBQTJDO0FBQzNDLCtDQUE4QztBQUU5Qzs7R0FFRztBQUNIO0lBQXlDLCtCQUFRO0lBQWpEO1FBQUEscUVBK0hDO1FBcEhXLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFFbkMsd0JBQWtCLEdBQWlCLElBQUksQ0FBQztRQUN4Qyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLHdCQUFrQixHQUFpQixJQUFJLENBQUM7UUFFeEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQ3JDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7O0lBdUcvQyxDQUFDO0lBOUhHLHNCQUFjLDRDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsb0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHNDQUFhO2FBQTNCO1lBQ0ksT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFtQkQsMkNBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFFdkUsSUFBSSxJQUFJLEdBQUcsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFHLDJCQUFZLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUUxQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUNELHFDQUFlLEdBQWY7UUFDSSxJQUFJLEtBQUssR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFDRixHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUNiLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDYixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ1QsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNULE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELDBCQUFJLEdBQUo7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTyw4QkFBUSxHQUFoQjtRQUNJLElBQUksSUFBSSxHQUFHLDJCQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEMsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLDJCQUFZLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUNPLDhCQUFRLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsMkJBQVksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsMkJBQVksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBR0QsV0FBVztJQUNKLDZCQUFPLEdBQWQ7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyx1QkFBVSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsMkJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sd0NBQWtCLEdBQXpCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBQ00sdUNBQWlCLEdBQXhCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0RDthQUFNO1lBQ0gsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBQ00scUNBQWUsR0FBdEI7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ00scUNBQWUsR0FBdEI7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ00sc0NBQWdCLEdBQXZCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBR00sMEJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTCxrQkFBQztBQUFELENBL0hBLEFBK0hDLENBL0h3QyxrQkFBUSxHQStIaEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvV2ViU29ja2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbW1vbiB9IGZyb20gXCIuLi8uLi9HYW1lQ29tbW9uXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOioree9rlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwic2V0dGluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX3NldEJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX3JldHVybjogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXRMb2dpblB3ZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3NldFBsYXlQd2Q6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXRhYm91dG1lOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fc2V0eXM6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXRsYW5ndWFnZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXRtdXNpYzogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3NldFNvdW5kOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfc2V0X3ZlcjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlVGV4dDogZmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldEJyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9yZXR1cm4ub25DbGljayh0aGlzLnNpZ25vdXQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldExvZ2luUHdkLm9uQ2xpY2sodGhpcy5zaG93TW9kaWZ5TG9naW5Qd2QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldFBsYXlQd2Qub25DbGljayh0aGlzLnNob3dNb2RpZnlQbGF5UHdkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXRhYm91dG1lLm9uQ2xpY2sodGhpcy5zaG93QWJvdXRVc1ZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldHlzLm9uQ2xpY2sodGhpcy5zaG93UHJpdmFjeVZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldGxhbmd1YWdlLm9uQ2xpY2sodGhpcy5zaG93TGFuZ3VhZ2VWaWV3LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVRleHQgPSB0aGlzLnVpX2J0bl9zZXRsYW5ndWFnZS5nZXRDaGlsZChcIm43XCIpLmFzVGV4dEZpZWxkO1xyXG5cclxuICAgICAgICBsZXQgYm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0U291bmRTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXRtdXNpYy5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgbGV0IHNvdW5kQm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0RWZmZWN0U3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc2V0U291bmQuc2VsZWN0ZWQgPSBzb3VuZEJvb2w7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX3NldG11c2ljLm9uQ2xpY2sodGhpcy5zZXRNdXNpYywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc2V0U291bmQub25DbGljayh0aGlzLnNldFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9zZXRfdmVyLnRleHQgPSBCYXNlRnJhbWVOYXRpdmUuVkVSU0lPTjtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBBcHBDb25zdC5sYW5ndWFnZVR5cGU7XHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLnuYHpq5TkuK3mlodcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIueugOS9k+S4reaWh1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhbmd1YWdlVGV4dC50ZXh0ID0gc3RyO1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1NldHRpbmdWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRNdXNpYygpIHtcclxuICAgICAgICBsZXQgYm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0U291bmRTdGF0dXMoKTtcclxuICAgICAgICBsZXQgc3RyID0gYm9vbCA/IFwiY2xvc2VcIiA6IFwib3BlblwiO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uc2V0U291bmRTdGF0dXMoc3RyKTtcclxuICAgICAgICBBdWRpb01hbmFnZXIuVGV4YXNNdXNpY1N0YXR1cyA9ICFib29sO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRTb3VuZCgpIHtcclxuICAgICAgICBsZXQgYm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0RWZmZWN0U3RhdHVzKCk7XHJcbiAgICAgICAgbGV0IHN0ciA9IGJvb2wgPyBcImNsb3NlXCIgOiBcIm9wZW5cIjtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnNldEVmZmVjdFN0YXR1cyhzdHIpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5UZXhhc0VmZmVjdFN0YXR1cyA9ICFib29sO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirpgIDlh7rmuLjmiLIgICovXHJcbiAgICBwdWJsaWMgc2lnbm91dCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1NldHRpbmdWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5EaXNDb25uZWN0KCk7XHJcbiAgICAgICAgR2FtZUNvbW1vbi5pc0F1dG9Mb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd01vZGlmeUxvZ2luUHdkKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnU2V0dGluZ1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TW9kaWZ5TG9naW5Qd2RWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd01vZGlmeVBsYXlQd2QoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdTZXR0aW5nVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmIChMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNTZXRQYXlQYXNzd29yZCkge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TW9kaWZ5UGxheVB3ZFZpZXcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93U2V0UGF5UGFzc3dvcmRWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dBYm91dFVzVmlldygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1NldHRpbmdWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd0Fib3V0VXNWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2hvd1ByaXZhY3lWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnU2V0dGluZ1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93UHJpdmFjeVZpZXcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93TGFuZ3VhZ2VWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnU2V0dGluZ1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TGFuZ3VhZ2VWaWV3KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgIH1cclxuXHJcbn0iXX0=