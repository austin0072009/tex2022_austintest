
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/settingpanel/LanguageView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHNldHRpbmdwYW5lbFxcTGFuZ3VhZ2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCxrRkFBaUY7QUFDakYsMkZBQTBGO0FBQzFGLCtDQUE4QztBQUU5Qzs7R0FFRztBQUNIO0lBQTBDLGdDQUFRO0lBQWxEO1FBQUEscUVBa0hDO1FBdkdXLDBCQUFvQixHQUFpQixJQUFJLENBQUM7UUFDMUMsNEJBQXNCLEdBQWlCLElBQUksQ0FBQztRQUM1QywyQkFBcUIsR0FBaUIsSUFBSSxDQUFDO1FBRTNDLDJCQUFxQixHQUFvQixJQUFJLENBQUM7UUFFdEQsUUFBUTtRQUNBLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUNqQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQXdCLElBQUksQ0FBQzs7SUE0RnBELENBQUM7SUFqSEcsc0JBQWMsNkNBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxxQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsdUNBQWE7YUFBM0I7WUFDSSxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQWVELDRDQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENB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RCxXQUFXO0lBQ0osOEJBQU8sR0FBZDtRQUNJLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyx1QkFBVSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsMkJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sMkJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTCxtQkFBQztBQUFELENBbEhBLEFBa0hDLENBbEh5QyxrQkFBUSxHQWtIakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1NjZW5lTWFuYWdlclwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgR2FtZUNvbW1vbiB9IGZyb20gXCIuLi8uLi9HYW1lQ29tbW9uXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOiqnuiogFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInNldExhbmd1YWdlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fY2xvc2VMYW5ndWFnZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2NvbmZpcm1MYW5ndWFnZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2NhbmNlbExhbmd1YWdlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZUNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgdWlfY29uZmlybXNldExhbmd1YWdlOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIC8qKuiqnuiogCAqL1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fZnR6dzogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2p0enc6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl95aW55dTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3J5OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV95dXlhbnF1ZTogZmd1aS5HUmljaFRleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fY2xvc2VMYW5ndWFnZS5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fY2FuY2VsTGFuZ3VhZ2Uub25DbGljayh0aGlzLmNhbmNlTGFuZ3VhZ2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2NvbmZpcm1MYW5ndWFnZS5vbkNsaWNrKHRoaXMuY2hhbmdlZExhbmd1YWdlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlQ29udHJvbGxlciA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKTtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlQ29udHJvbGxlci5vbkNoYW5nZWQodGhpcy5sYW5ndWFnZUNoYW5nZWQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xhbmd1YWdlVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsYW5ndWFnZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMYW5ndWFnZVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxhbmd1YWdlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIHN3aXRjaCAoQXBwQ29uc3QubGFuZ3VhZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfeXV5YW5xdWUuc2V0VmFyKFwiMVwiLCB0aGlzLnVpX2J0bl9mdHp3LnRpdGxlKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjFcIiwgdGhpcy51aV9idG5fanR6dy50aXRsZSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51aV95dXlhbnF1ZS5zZXRWYXIoXCIxXCIsIHRoaXMudWlfYnRuX3lpbnl1LnRpdGxlKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjFcIiwgdGhpcy51aV9idG5fcnkudGl0bGUpLmZsdXNoVmFycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjJcIiwgdGhpcy51aV9idG5fZnR6dy50aXRsZSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2NvbmZpcm1zZXRMYW5ndWFnZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjJcIiwgdGhpcy51aV9idG5fanR6dy50aXRsZSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2NvbmZpcm1zZXRMYW5ndWFnZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjJcIiwgdGhpcy51aV9idG5feWlueXUudGl0bGUpLmZsdXNoVmFycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aV9jb25maXJtc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51aV95dXlhbnF1ZS5zZXRWYXIoXCIyXCIsIHRoaXMudWlfYnRuX3J5LnRpdGxlKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfY29uZmlybXNldExhbmd1YWdlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZUxhbmd1YWdlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTGFuZ3VhZ2VWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy51aV9jb25maXJtc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoYW5nZWRMYW5ndWFnZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xhbmd1YWdlVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGFuZ3VhZ2VDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgdGhpcy51aV9jb25maXJtc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChBcHBDb25zdC5sYW5ndWFnZVR5cGUgPT0gaW5kZXgpIHsgLy/liIfmj5vnm7jlkIznmoToqp7oqIBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPT0gMyB8fCBpbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuaaq+eEoeebuOmXnOiqnuiogFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBDb25zdC5sYW5ndWFnZVR5cGUgPSBpbmRleDtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5ndWFnZVR5cGVcIiwgQXBwQ29uc3QubGFuZ3VhZ2VUeXBlICsgJycpO1xyXG4gICAgICAgIGZndWkuVUlQYWNrYWdlLnJlbW92ZVBhY2thZ2UodGhpcy5wYWNrYWdlTmFtZSk7XHJcbiAgICAgICAgLy8gR2FtZUNvbW1vbi5sb2FkU2NlbmUoXCJnYW1lSGFsbFwiLCBcImxvYmJ5XCIpO1xyXG4gICAgICAgIHRoaXMuc2lnbm91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumAgOWHuua4uOaIsiAgKi9cclxuICAgIHB1YmxpYyBzaWdub3V0KCkge1xyXG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuRGlzQ29ubmVjdCgpO1xyXG4gICAgICAgIEdhbWVDb21tb24uaXNBdXRvTG9naW4gPSBmYWxzZTtcclxuICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcImdhbWVIYWxsXCIsIFwibG9naW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==