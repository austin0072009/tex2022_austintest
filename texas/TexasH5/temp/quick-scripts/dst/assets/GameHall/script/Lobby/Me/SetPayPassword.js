
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Me/SetPayPassword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXE1lXFxTZXRQYXlQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsb0RBQW1EO0FBQ25ELGdEQUEyQztBQUUzQzs7R0FFRztBQUNIO0lBQTRDLGtDQUFRO0lBQXBEO1FBQUEscUVBbUVDO1FBeERXLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDOztJQW9EbEQsQ0FBQztJQWxFRyxzQkFBYywrQ0FBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHVDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx5Q0FBYTthQUEzQjtZQUNJLE9BQU8sZ0JBQWdCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFRRCw4Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkIsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQy9ELHFCQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTtZQUNyRixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6RSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFDckYsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUNuRCxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDcEYsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDbkYsT0FBTztTQUNWO1FBQ0Qsc0JBQVksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDSSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDbEYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsQ0FuRTJDLGtCQUFRLEdBbUVuRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb25maWcgfSBmcm9tIFwiLi4vTGFuZ3VhZ2VDb25maWdcIjtcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDorr7nva7mlK/ku5jlr4bnoIFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0UGF5UGFzc3dvcmQgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJTZXRQYXlQYXNzd29yZFwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgdWlfYnRuX3F4OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYnRuX3N1cmU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHVpX25ld1BheVB3ZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX25ld1BheVB3ZDI6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG5cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy51aV9idG5fcXgub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1NldFBheVBhc3N3b3JkJywgXCJidXR0b25cIik7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy51aV9idG5fc3VyZS5vbkNsaWNrKHRoaXMuc3VyZVNldFBhc3N3b3JkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnNvcnRpbmdPcmRlciA9IDk5OTk7XG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdXJlU2V0UGFzc3dvcmQoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnU2V0UGF5UGFzc3dvcmQnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHRoaXMudWlfbmV3UGF5UHdkLnRleHQgPT0gXCJcIiB8fCB0aGlzLnVpX25ld1BheVB3ZDIudGV4dCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMjAwMSkpOyAvL+ivt+i+k+WFpeWujOaVtOeahDbkvY3mlbDlr4bnoIFcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51aV9uZXdQYXlQd2QudGV4dC5sZW5ndGggPCA2IHx8IHRoaXMudWlfbmV3UGF5UHdkMi50ZXh0Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEyMDAxKSk7IC8v6K+36L6T5YWl5a6M5pW055qENuS9jeaVsOWvhueggVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVpX25ld1BheVB3ZC50ZXh0ICE9IHRoaXMudWlfbmV3UGF5UHdkMi50ZXh0KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMjAwMikpOyAvL+S4pOasoei+k+WFpeeahOWvhueggeS4jeS4gOiHtFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVUlVdGlsLmNoZWNrTnVtYmVyKHRoaXMudWlfbmV3UGF5UHdkLnRleHQpKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMjAwMykpOyAvL+i+k+WFpeeahOWvhueggeagvOW8j+S4jeWvuVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19jaGFuZ2VQYXNzd29yZF9iayh0aGlzLnVpX25ld1BheVB3ZC50ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3VjY2Vzc2Z1bGwoKSB7XG4gICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEyMDA0KSk7IC8v6K6+572u5pSv5LuY5a+G56CB5oiQ5YqfXG4gICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIH1cblxuICAgIFNob3coKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICAgICAgdGhpcy51aV9uZXdQYXlQd2QudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfbmV3UGF5UHdkMi50ZXh0ID0gXCJcIjtcbiAgICB9XG5cbiAgICBIaWRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5IaWRlKCk7XG4gICAgfVxufSJdfQ==