
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/activity/ActivityDetails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12059dPaI9NaY2/xlZw3xqA', 'ActivityDetails');
// GameHall/script/Lobby/activity/ActivityDetails.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 活动xiangqing
 */
var ActivityDetails = /** @class */ (function (_super) {
    __extends(ActivityDetails, _super);
    function ActivityDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_actbreak = null;
        _this.ui_actgold = null;
        _this.ui_btn_actaddGold = null;
        _this.ui_acImage = null;
        _this.ui_acTitle = null;
        _this.ui_acContent = null;
        _this.ui_acStartTime = null;
        _this.ui_acEndTime = null;
        _this.data = null;
        _this.onLoadEnd = false;
        return _this;
    }
    Object.defineProperty(ActivityDetails.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivityDetails.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivityDetails.prototype, "componentName", {
        get: function () {
            return "activityDetails";
        },
        enumerable: false,
        configurable: true
    });
    ActivityDetails.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    ActivityDetails.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    ActivityDetails.prototype.AutoSetGoProperty = function () { };
    ActivityDetails.prototype.MyStart = function (_data) {
        if (_data === void 0) { _data = null; }
        this.data = _data;
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    ActivityDetails.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.ui_btn_actbreak.onClick(this.HideView, this);
        this.ui_btn_actaddGold.onClick(this.showTopup, this);
        this.Show();
    };
    ActivityDetails.prototype.Show = function () {
        this.ui_actgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
        _super.prototype.Show.call(this);
        this.loadContent();
    };
    ActivityDetails.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    ActivityDetails.prototype.HideView = function () {
        AudioManager_1.AudioManager.Singleton.play('ActivityDetails', "button");
        this.Hide();
    };
    ActivityDetails.prototype.showTopup = function () {
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    ActivityDetails.prototype.loadContent = function () {
        if (this.data == null)
            return;
        //.acType == 1文字，2图片
        if (this.data.acType == 1) {
            this.fguiComponent.getController("acType").setSelectedIndex(0);
            this.ui_acTitle.text = this.data.acTitle;
            this.ui_acContent.text = this.data.acContent;
            this.ui_acStartTime.text = "開始時間：" + this.data.startTime;
            this.ui_acEndTime.text = "結束時間：" + this.data.endTime;
        }
        else {
            this.fguiComponent.getController("acType").setSelectedIndex(1);
            this.ui_acImage.url = "http://182.61.6.67:81" + this.data.picUrl;
        }
    };
    return ActivityDetails;
}(ViewBase_1.default));
exports.default = ActivityDetails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGFjdGl2aXR5XFxBY3Rpdml0eURldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBQzFGLGdEQUEyQztBQUMzQzs7R0FFRztBQUNIO0lBQTZDLG1DQUFRO0lBQXJEO1FBQUEscUVBc0ZDO1FBM0VXLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUNyQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUN2QyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBRXRDLFVBQUksR0FBRyxJQUFJLENBQUM7UUFRWCxlQUFTLEdBQUcsS0FBSyxDQUFDOztJQTBEOUIsQ0FBQztJQXJGRyxzQkFBYyxnREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHdDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywwQ0FBYTthQUEzQjtZQUNJLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFhRCwrQ0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUV2QyxDQUFDO0lBR0QseUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLDJDQUFpQixHQUF4QixjQUE2QixDQUFDO0lBRXZCLGlDQUFPLEdBQWQsVUFBZSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFlBQWlCO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLG1DQUFTLEdBQWhCO1FBQ0ksaUJBQU0saUJBQWlCLFdBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLDhCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1RSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxrQ0FBUSxHQUFmO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLHFDQUFXLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQzlCLG9CQUFvQjtRQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBRXhEO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUVwRTtJQUNMLENBQUM7SUFFTCxzQkFBQztBQUFELENBdEZBLEFBc0ZDLENBdEY0QyxrQkFBUSxHQXNGcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWwnO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0JztcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tICcuLi9Mb2JieVZpZXdDdHInO1xyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOa0u+WKqHhpYW5ncWluZ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHlEZXRhaWxzIGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImFjdGl2aXR5RGV0YWlsc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX2FjdGJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9hY3Rnb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fYWN0YWRkR29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWNJbWFnZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWNUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWNDb250ZW50OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9hY1N0YXJ0VGltZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWNFbmRUaW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBkYXRhID0gbnVsbDtcclxuXHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgTXlTdGFydChfZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IF9kYXRhO1xyXG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB0aGlzLk15U3RhcnRFeCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNeVN0YXJ0RXgoKSB7XHJcbiAgICAgICAgc3VwZXIuQXV0b1NldEdvUHJvcGVydHkoKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9hY3RicmVhay5vbkNsaWNrKHRoaXMuSGlkZVZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2FjdGFkZEdvbGQub25DbGljayh0aGlzLnNob3dUb3B1cCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgdGhpcy51aV9hY3Rnb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArICcnO1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLmxvYWRDb250ZW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBIaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGlkZVZpZXcoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdBY3Rpdml0eURldGFpbHMnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RvcHVwKCkge1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dUb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZENvbnRlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgLy8uYWNUeXBlID09IDHmloflrZfvvIwy5Zu+54mHXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5hY1R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcImFjVHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICB0aGlzLnVpX2FjVGl0bGUudGV4dCA9IHRoaXMuZGF0YS5hY1RpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLnVpX2FjQ29udGVudC50ZXh0ID0gdGhpcy5kYXRhLmFjQ29udGVudDtcclxuICAgICAgICAgICAgdGhpcy51aV9hY1N0YXJ0VGltZS50ZXh0ID0gXCLplovlp4vmmYLplpPvvJpcIiArIHRoaXMuZGF0YS5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYWNFbmRUaW1lLnRleHQgPSBcIue1kOadn+aZgumWk++8mlwiICsgdGhpcy5kYXRhLmVuZFRpbWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwiYWNUeXBlXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYWNJbWFnZS51cmwgPSBcImh0dHA6Ly8xODIuNjEuNi42Nzo4MVwiICsgdGhpcy5kYXRhLnBpY1VybDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==