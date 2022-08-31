
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/knapsack/MyKnapsackItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b983GCkoNByYI6k9DNjMHR', 'MyKnapsackItem');
// GameHall/script/Lobby/knapsack/MyKnapsackItem.ts

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
exports.MyKnapsackItem = void 0;
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var MyKnapsackItem = /** @class */ (function (_super) {
    __extends(MyKnapsackItem, _super);
    function MyKnapsackItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyKnapsackItem.prototype.onConstruct = function () {
        this.typename = this.getChild("typename").asTextField;
        this.btn_exchange = this.getChild("btn_exchange").asButton;
        this.btn_use = this.getChild("btn_use").asButton;
        this.bgController = this.getController("bg");
        this.descGroup = this.getChild("n10").asGroup;
        this.descText = this.getChild("desc").asRichTextField;
        this.isUse = this.getController("isuse");
        this.btn_exchange.onClick(this.exchange, this);
        this.btn_use.onClick(this.useProp, this);
        this.iconLoader = this.getChild("iconLoader").asLoader;
    };
    MyKnapsackItem.prototype.setData = function (data) {
        console.log("data PropInfo == ", data);
        // if (data.PropName == "")
        this.PropType = data.PropType;
        this.count = data.PropCount;
        this.typename.text = data.PropName + "*" + data.PropCount;
        this.descText.text = data.Desc;
        this.isUse.setSelectedIndex(data.UseType);
        this.PropID = data.PropID;
        UIUtil_1.UIUtil.loadShopImage(this.iconLoader, data.ImgUrl);
        this.imgUrl = data.ImgUrl;
        switch (data.PropID) {
            case 10008:
                this.bgController.setSelectedIndex(0);
                break;
            case 10009:
                this.bgController.setSelectedIndex(2);
                break;
            case 10010:
                this.bgController.setSelectedIndex(3);
                break;
            default:
                this.bgController.setSelectedIndex(1);
                break;
        }
    };
    MyKnapsackItem.prototype.showDesc = function () {
        this.descGroup.visible = !this.descGroup.visible;
    };
    /**兑换 */
    MyKnapsackItem.prototype.exchange = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 0) {
            // LobbyViewCtr.instance.cs_useprop(this.PropID, this.count, true);
            LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, true);
        }
        else {
            LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, true);
        }
    };
    /**使用 */
    MyKnapsackItem.prototype.useProp = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 1) {
            if (AppConst_1.AppConst.mPlayerModel["headIcos"].indexOf(this.imgUrl) == -1) {
                AppConst_1.AppConst.mPlayerModel["headIcos"].push(this.imgUrl);
            }
        }
        LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, false);
    };
    return MyKnapsackItem;
}(fgui.GComponent));
exports.MyKnapsackItem = MyKnapsackItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGtuYXBzYWNrXFxNeUtuYXBzYWNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLDJEQUEwRDtBQUMxRCwyRkFBMEY7QUFFMUYsZ0RBQTJDO0FBRzNDO0lBQW9DLGtDQUFlO0lBQW5EOztJQWlGQSxDQUFDO0lBbEVhLG9DQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFD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QUNELHNCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxDQWpGbUMsSUFBSSxDQUFDLFVBQVUsR0FpRmxEO0FBakZZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBQcm9wSW5mbyB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE15S25hcHNhY2tJdGVtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgdHlwZW5hbWU6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIHByaXZhdGUgYnRuX2V4Y2hhbmdlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIGJ0bl91c2U6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgYmdDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIGRlc2NUZXh0OiBmZ3VpLkdSaWNoVGV4dEZpZWxkO1xyXG4gICAgcHJpdmF0ZSBkZXNjR3JvdXA6IGZndWkuR0dyb3VwO1xyXG4gICAgcHJpdmF0ZSBpc1VzZTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBQcm9wSUQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaW1nVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGljb25Mb2FkZXI6IGZndWkuR0xvYWRlcjtcclxuICAgIHByaXZhdGUgY291bnQ6IG51bWJlcjtcclxuICAgIC8qKiAwOumHkeW4gSAgMTrlpLTlg4/moYYgKi9cclxuICAgIHByaXZhdGUgUHJvcFR5cGU6IG51bWJlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlbmFtZSA9IHRoaXMuZ2V0Q2hpbGQoXCJ0eXBlbmFtZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmJ0bl9leGNoYW5nZSA9IHRoaXMuZ2V0Q2hpbGQoXCJidG5fZXhjaGFuZ2VcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5idG5fdXNlID0gdGhpcy5nZXRDaGlsZChcImJ0bl91c2VcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5iZ0NvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLmRlc2NHcm91cCA9IHRoaXMuZ2V0Q2hpbGQoXCJuMTBcIikuYXNHcm91cDtcclxuICAgICAgICB0aGlzLmRlc2NUZXh0ID0gdGhpcy5nZXRDaGlsZChcImRlc2NcIikuYXNSaWNoVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuaXNVc2UgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJpc3VzZVwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9leGNoYW5nZS5vbkNsaWNrKHRoaXMuZXhjaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3VzZS5vbkNsaWNrKHRoaXMudXNlUHJvcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pY29uTG9hZGVyID0gdGhpcy5nZXRDaGlsZChcImljb25Mb2FkZXJcIikuYXNMb2FkZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBQcm9wSW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBQcm9wSW5mbyA9PSBcIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gaWYgKGRhdGEuUHJvcE5hbWUgPT0gXCJcIilcclxuICAgICAgICB0aGlzLlByb3BUeXBlID0gZGF0YS5Qcm9wVHlwZTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gZGF0YS5Qcm9wQ291bnQ7XHJcbiAgICAgICAgdGhpcy50eXBlbmFtZS50ZXh0ID0gZGF0YS5Qcm9wTmFtZSArIFwiKlwiICsgZGF0YS5Qcm9wQ291bnQ7XHJcbiAgICAgICAgdGhpcy5kZXNjVGV4dC50ZXh0ID0gZGF0YS5EZXNjO1xyXG4gICAgICAgIHRoaXMuaXNVc2Uuc2V0U2VsZWN0ZWRJbmRleChkYXRhLlVzZVR5cGUpO1xyXG4gICAgICAgIHRoaXMuUHJvcElEID0gZGF0YS5Qcm9wSUQ7XHJcbiAgICAgICAgVUlVdGlsLmxvYWRTaG9wSW1hZ2UodGhpcy5pY29uTG9hZGVyLCBkYXRhLkltZ1VybCk7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBkYXRhLkltZ1VybDtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuUHJvcElEKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMDg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMDk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMTA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGVzYygpIHtcclxuICAgICAgICB0aGlzLmRlc2NHcm91cC52aXNpYmxlID0gIXRoaXMuZGVzY0dyb3VwLnZpc2libGU7XHJcbiAgICB9XHJcbiAgICAvKirlhZHmjaIgKi9cclxuICAgIHB1YmxpYyBleGNoYW5nZShldmVudDogZmd1aS5FdmVudCkge1xyXG4gICAgICAgIGV2ZW50LmJ1YmJsZXMgPSBmYWxzZTtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015S25hcHNhY2tJdGVtJywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuUHJvcFR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfdXNlcHJvcCh0aGlzLlByb3BJRCwgdGhpcy5jb3VudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc191c2Vwcm9wKHRoaXMuUHJvcElELCAxLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfdXNlcHJvcCh0aGlzLlByb3BJRCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoq5L2/55SoICovXHJcbiAgICBwdWJsaWMgdXNlUHJvcChldmVudDogZmd1aS5FdmVudCkge1xyXG4gICAgICAgIGV2ZW50LmJ1YmJsZXMgPSBmYWxzZTtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015S25hcHNhY2tJdGVtJywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuUHJvcFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAoQXBwQ29uc3QubVBsYXllck1vZGVsW1wiaGVhZEljb3NcIl0uaW5kZXhPZih0aGlzLmltZ1VybCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRJY29zXCJdLnB1c2godGhpcy5pbWdVcmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfdXNlcHJvcCh0aGlzLlByb3BJRCwgMSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==