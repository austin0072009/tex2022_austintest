
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/settingpanel/PrivacyView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aab40MAAd1Or7jPXMfG9/YE', 'PrivacyView');
// GameHall/script/Lobby/settingpanel/PrivacyView.ts

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
/**
 * @description 隱私政策
 */
var PrivacyView = /** @class */ (function (_super) {
    __extends(PrivacyView, _super);
    function PrivacyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_setprivacyBreak = null;
        return _this;
    }
    Object.defineProperty(PrivacyView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrivacyView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrivacyView.prototype, "componentName", {
        get: function () {
            return "Privacy";
        },
        enumerable: false,
        configurable: true
    });
    PrivacyView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_setprivacyBreak.onClick(this.Hide, this);
        // let label = this.getChild("n24").asCom.getChild("n24").asTextField;
        // label._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.fguiComponent.sortingOrder = 9990;
    };
    PrivacyView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    PrivacyView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('PrivacyView', "button");
        _super.prototype.Hide.call(this);
    };
    PrivacyView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return PrivacyView;
}(ViewBase_1.default));
exports.default = PrivacyView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHNldHRpbmdwYW5lbFxcUHJpdmFjeVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUU3RDs7R0FFRztBQUNIO0lBQXlDLCtCQUFRO0lBQWpEO1FBQUEscUVBaUNDO1FBdEJXLDRCQUFzQixHQUFpQixJQUFJLENBQUM7O0lBc0J4RCxDQUFDO0lBaENHLHNCQUFjLDRDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsb0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHNDQUFhO2FBQTNCO1lBQ0ksT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFLRCwyQ0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsc0VBQXNFO1FBQ3RFLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUNELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELDBCQUFJLEdBQUo7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSwwQkFBSSxHQUFYO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQ3dDLGtCQUFRLEdBaUNoRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6Zqx56eB5pS/562WXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5VmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJQcml2YWN5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fc2V0cHJpdmFjeUJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXRwcml2YWN5QnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG4gICAgICAgIC8vIGxldCBsYWJlbCA9IHRoaXMuZ2V0Q2hpbGQoXCJuMjRcIikuYXNDb20uZ2V0Q2hpbGQoXCJuMjRcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgLy8gbGFiZWwuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5zb3J0aW5nT3JkZXIgPSA5OTkwO1xyXG4gICAgfVxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1ByaXZhY3lWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==