
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/modifyLoginPwd/ModifyLoginPwdView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1vZGlmeUxvZ2luUHdkXFxNb2RpZnlMb2dpblB3ZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSwwRUFBeUU7QUFDekUsa0VBQTZEO0FBQzdELGtGQUFpRjtBQUNqRiw0RUFBdUU7QUFDdkUsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUdyRTs7R0FFRztBQUNIO0lBQWdELHNDQUFRO0lBQXhEO1FBQUEscUVBd0dDO1FBN0ZXLDZCQUF1QixHQUFpQixJQUFJLENBQUM7UUFDN0MsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQWNuQyxVQUFJLEdBQVksS0FBSyxDQUFDOztJQTJFbEMsQ0FBQztJQXZHRyxzQkFBYyxtREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDJDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw2Q0FBYTthQUEzQjtZQUNJLE9BQU8sZ0JBQWdCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFRRCxrREFBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FB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QUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakMscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFHRCw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQ0FBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0F4R0EsQUF3R0MsQ0F4RytDLGtCQUFRLEdBd0d2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvV2ViU29ja2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgSHR0cEhlbHBFeCBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9NYW5hZ2Vycy9IdHRwSGVscEV4XCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCB7IEdhbWVDb21tb24gfSBmcm9tIFwiLi4vLi4vR2FtZUNvbW1vblwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDkv67mlLnnmbvpjITlr4bnorxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmeUxvZ2luUHdkVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJtb2RpZnlMb2dpblB3ZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX21vZGlmeWxvZ2luQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX29sZFB3ZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfbmV3UHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9uZXdQd2QxOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fbW9kaWZ5OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX21vZGlmeWxvZ2luQnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl9tb2RpZnkub25DbGljayh0aGlzLmNoYW5nZWRMb2dpblB3ZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01vZGlmeUxvZ2luUHdkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VkTG9naW5Qd2QoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNb2RpZnlMb2dpblB3ZFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgb2xkcHdkID0gdGhpcy51aV9vbGRQd2QudGV4dDtcclxuICAgICAgICBsZXQgbmV3UHdkID0gdGhpcy51aV9uZXdQd2QudGV4dDtcclxuICAgICAgICBsZXQgbmV3UHdkMiA9IHRoaXMudWlfbmV3UHdkMS50ZXh0O1xyXG5cclxuICAgICAgICBpZiAoIW9sZHB3ZCB8fCAhbmV3UHdkIHx8ICFuZXdQd2QyKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuivt+ajgOafpeaYr+WQpuWhq+WGmeWujOaVtFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3UHdkICE9IG5ld1B3ZDIpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5Lik5qyh6L6T5YWl55qE5paw5a+G56CB5LiN5LiA6Ie0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwd2QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpbl9wd2RcIik7XHJcbiAgICAgICAgaWYgKG9sZHB3ZCAhPSBwd2QpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6L6T5YWl55qE5pen5a+G56CB5LiN5q2j56GuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvbGRwd2QgPT0gbmV3UHdkKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuaWsOWvhueggeS4juaXp+WvhueggeS4gOagt1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAobmV3UHdkLmxlbmd0aCAhPSA2KSB7XHJcbiAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuaWsOWvhueggeeahOagvOW8j+S4jeato+ehrlwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbmV3cGFzc3dvcmQ6IG5ld1B3ZCxcclxuICAgICAgICAgICAgdXNlcmlkOiBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9DaGFuZ2VQV0RcIjtcclxuICAgICAgICBpZiAodGhpcy5mbGFnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3Quc2hvd01vZGFsV2FpdCgpO1xyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtc1xyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmNsb3NlTW9kYWxXYWl0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuS/ruaUueaIkOWKn++8jOiri+mHjeaWsOeZu+mZuO+8gVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5EaXNDb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5L+u5pS55a+G56CB5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==