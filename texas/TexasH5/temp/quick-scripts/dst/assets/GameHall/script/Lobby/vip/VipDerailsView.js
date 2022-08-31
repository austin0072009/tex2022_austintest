
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipDerailsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cc31Q7fSdKfqUgMnwZ1cQQ', 'VipDerailsView');
// GameHall/script/Lobby/vip/VipDerailsView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 详情
 *
 */
var VipDerailsView = /** @class */ (function (_super) {
    __extends(VipDerailsView, _super);
    function VipDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_derailsBreak = null;
        /**积分 */
        _this.ui_integral1 = null;
        _this.ui_integral2 = null;
        _this.ui_integral3 = null;
        _this.ui_integral4 = null;
        _this.ui_integral5 = null;
        _this.ui_integral6 = null;
        _this.ui_integral7 = null;
        _this.ui_integral8 = null;
        _this.ui_integral9 = null;
        /**
         * 免費提款次數
         */
        _this.ui_free1 = null;
        _this.ui_free2 = null;
        _this.ui_free3 = null;
        _this.ui_free4 = null;
        _this.ui_free5 = null;
        _this.ui_free6 = null;
        _this.ui_free7 = null;
        _this.ui_free8 = null;
        _this.ui_free9 = null;
        /**單筆提現金額 */
        _this.ui_onetx1 = null;
        _this.ui_onetx2 = null;
        _this.ui_onetx3 = null;
        _this.ui_onetx4 = null;
        _this.ui_onetx5 = null;
        _this.ui_onetx6 = null;
        _this.ui_onetx7 = null;
        _this.ui_onetx8 = null;
        _this.ui_onetx9 = null;
        /**晉級禮金 */
        _this.ui_jjgold1 = null;
        _this.ui_jjgold2 = null;
        _this.ui_jjgold3 = null;
        _this.ui_jjgold4 = null;
        _this.ui_jjgold5 = null;
        _this.ui_jjgold6 = null;
        _this.ui_jjgold7 = null;
        _this.ui_jjgold8 = null;
        _this.ui_jjgold9 = null;
        /**每月禮金 */
        _this.ui_mygold1 = null;
        _this.ui_mygold2 = null;
        _this.ui_mygold3 = null;
        _this.ui_mygold4 = null;
        _this.ui_mygold5 = null;
        _this.ui_mygold6 = null;
        _this.ui_mygold7 = null;
        _this.ui_mygold8 = null;
        _this.ui_mygold9 = null;
        _this.ui_viplevelimage = null;
        _this.ui_viptk = null;
        return _this;
    }
    Object.defineProperty(VipDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipDerailsView.prototype, "componentName", {
        get: function () {
            return "vipDerails";
        },
        enumerable: false,
        configurable: true
    });
    VipDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_derailsBreak.onClick(this.Hide, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_viplevelimage);
        NativeMethod_1.default.setUrlByLanguage(this.ui_viptk);
    };
    VipDerailsView.prototype.OnLoadCompleted = function () {
        this.handleData();
        this.Show();
    };
    VipDerailsView.prototype.handleData = function () {
        var vipConfig = LobbyViewCtr_1.default.instance.Model.vipConfig;
        if (!vipConfig || vipConfig.UpExps.length <= 0) {
            return;
        }
        for (var i = 0; i < 10; i++) {
            if (i == 0) {
                continue;
            }
            this["ui_integral" + i].text = vipConfig.UpExps[i] + '';
            this["ui_free" + i].text = vipConfig.FreeWithdrawTimes[i] + '';
            this["ui_onetx" + i].text = vipConfig.WithdrawLimit[i] + '';
            this["ui_jjgold" + i].text = vipConfig.UpReward[i] + '';
            this["ui_mygold" + i].text = vipConfig.MonthReward[i] + '';
        }
    };
    VipDerailsView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipDerailsView', "button");
        _super.prototype.Hide.call(this);
    };
    VipDerailsView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return VipDerailsView;
}(ViewBase_1.default));
exports.default = VipDerailsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwRGVyYWlsc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFDOUMsZ0RBQTJDO0FBRTNDOzs7R0FHRztBQUNIO0lBQTRDLGtDQUFRO0lBQXBEO1FBQUEscUVBaUhDO1FBdEdXLHlCQUFtQixHQUFpQixJQUFJLENBQUM7UUFDakQsUUFBUTtRQUNBLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBRTdDOztXQUVHO1FBQ0ssY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFFekMsWUFBWTtRQUNKLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQ2xDLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQ2xDLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQ2xDLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FB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SSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzlEO0lBRUwsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0wscUJBQUM7QUFBRCxDQWpIQSxBQWlIQyxDQWpIMkMsa0JBQVEsR0FpSG5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgTmF0aXZlTWV0aG9kIGZyb20gXCIuLi8uLi9OYXRpdmVNZXRob2RcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIHZpcCDor6bmg4VcclxuICogXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXBEZXJhaWxzVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJ2aXBEZXJhaWxzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fZGVyYWlsc0JyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq56ev5YiGICovXHJcbiAgICBwcml2YXRlIHVpX2ludGVncmFsMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfaW50ZWdyYWwyOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9pbnRlZ3JhbDM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2ludGVncmFsNDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfaW50ZWdyYWw1OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9pbnRlZ3JhbDY6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2ludGVncmFsNzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfaW50ZWdyYWw4OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9pbnRlZ3JhbDk6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvmj5DmrL7mrKHmlbhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1aV9mcmVlMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZnJlZTI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2ZyZWUzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9mcmVlNDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZnJlZTU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2ZyZWU2OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9mcmVlNzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZnJlZTg6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2ZyZWU5OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8qKuWWruethuaPkOePvumHkemhjSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9vbmV0eDE6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX29uZXR4MjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfb25ldHgzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9vbmV0eDQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX29uZXR4NTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfb25ldHg2OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9vbmV0eDc6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX29uZXR4ODogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfb25ldHg5OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8qKuaZiee0muemrumHkSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQxOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQyOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ1OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ2OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ3OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ4OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9qamdvbGQ5OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8qKuavj+aciOemrumHkSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQxOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQyOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ1OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ2OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ3OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ4OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9teWdvbGQ5OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpX3ZpcGxldmVsaW1hZ2U6IGZndWkuR0xvYWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3ZpcHRrOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2RlcmFpbHNCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgTmF0aXZlTWV0aG9kLnNldFVybEJ5TGFuZ3VhZ2UodGhpcy51aV92aXBsZXZlbGltYWdlKTtcclxuICAgICAgICBOYXRpdmVNZXRob2Quc2V0VXJsQnlMYW5ndWFnZSh0aGlzLnVpX3ZpcHRrKTtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZURhdGEoKTtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRGF0YSgpIHtcclxuICAgICAgICBsZXQgdmlwQ29uZmlnID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnZpcENvbmZpZztcclxuICAgICAgICBpZiAoIXZpcENvbmZpZyB8fCB2aXBDb25maWcuVXBFeHBzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbXCJ1aV9pbnRlZ3JhbFwiICsgaV0udGV4dCA9IHZpcENvbmZpZy5VcEV4cHNbaV0gKyAnJztcclxuICAgICAgICAgICAgdGhpc1tcInVpX2ZyZWVcIiArIGldLnRleHQgPSB2aXBDb25maWcuRnJlZVdpdGhkcmF3VGltZXNbaV0gKyAnJztcclxuICAgICAgICAgICAgdGhpc1tcInVpX29uZXR4XCIgKyBpXS50ZXh0ID0gdmlwQ29uZmlnLldpdGhkcmF3TGltaXRbaV0gKyAnJztcclxuICAgICAgICAgICAgdGhpc1tcInVpX2pqZ29sZFwiICsgaV0udGV4dCA9IHZpcENvbmZpZy5VcFJld2FyZFtpXSArICcnO1xyXG4gICAgICAgICAgICB0aGlzW1widWlfbXlnb2xkXCIgKyBpXS50ZXh0ID0gdmlwQ29uZmlnLk1vbnRoUmV3YXJkW2ldICsgJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVmlwRGVyYWlsc1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=