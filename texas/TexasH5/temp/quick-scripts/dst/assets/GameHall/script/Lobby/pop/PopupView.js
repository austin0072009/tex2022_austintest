
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/pop/PopupView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64f87TtsyZGgYByD8n92pIM', 'PopupView');
// GameHall/script/Lobby/pop/PopupView.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 公告弹窗
 */
var PopupView = /** @class */ (function (_super) {
    __extends(PopupView, _super);
    function PopupView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_close = null;
        _this.ui_title = null;
        _this.ui_content = null;
        _this.ui_gloader = null;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(PopupView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupView.prototype, "componentName", {
        get: function () {
            return "pop";
        },
        enumerable: false,
        configurable: true
    });
    PopupView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_close.onClick(this.Hide, this);
        this.typeController = this.fguiComponent.getController("c1");
    };
    PopupView.prototype.OnLoadCompleted = function () {
        this.Show();
        this.initData();
    };
    PopupView.prototype.initData = function () {
        this.notice = LobbyViewCtr_1.default.instance.Model.notice;
        if (this.notice[this.index].PicUrl) {
            this.typeController.setSelectedIndex(1);
            UIUtil_1.UIUtil.loadImage(this.ui_gloader, this.notice[this.index].PicUrl);
        }
        else {
            this.typeController.setSelectedIndex(0);
            this.ui_title.text = this.notice[this.index].title;
            this.ui_content.text = this.notice[this.index].content;
        }
    };
    PopupView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('PopupView', "button");
        this.index += 1;
        if (this.index > this.notice.length - 1) {
            _super.prototype.Hide.call(this);
        }
        else {
            this.initData();
        }
    };
    return PopupView;
}(ViewBase_1.default));
exports.default = PopupView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHBvcFxcUG9wdXBWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxrRUFBNkQ7QUFDN0QsMkRBQTBEO0FBRTFELGdEQUEyQztBQUUzQzs7R0FFRztBQUNIO0lBQXVDLDZCQUFRO0lBQS9DO1FBQUEscUVBa0RDO1FBdkNXLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBYWhDLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBdUJ0QixDQUFDO0lBakRHLHNCQUFjLDBDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsa0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLG9DQUFhO2FBQTNCO1lBQ0ksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFRRCx5Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELG1DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUdNLDRCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGlCQUFNLElBQUksV0FBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWxEQSxBQWtEQyxDQWxEc0Msa0JBQVEsR0FrRDlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgbm90aWNlIH0gZnJvbSBcIi4uL0xvYmJ5TmV0RGF0YVwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5YWs5ZGK5by556qXXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicG9wXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fY2xvc2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3RpdGxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9jb250ZW50OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9nbG9hZGVyOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0eXBlQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2Nsb3NlLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcclxuICAgIHByaXZhdGUgbm90aWNlOiBub3RpY2VbXTtcclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLm5vdGljZSA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5ub3RpY2U7XHJcbiAgICAgICAgaWYgKHRoaXMubm90aWNlW3RoaXMuaW5kZXhdLlBpY1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy51aV9nbG9hZGVyLCB0aGlzLm5vdGljZVt0aGlzLmluZGV4XS5QaWNVcmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgdGhpcy51aV90aXRsZS50ZXh0ID0gdGhpcy5ub3RpY2VbdGhpcy5pbmRleF0udGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMudWlfY29udGVudC50ZXh0ID0gdGhpcy5ub3RpY2VbdGhpcy5pbmRleF0uY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1BvcHVwVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA+IHRoaXMubm90aWNlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=