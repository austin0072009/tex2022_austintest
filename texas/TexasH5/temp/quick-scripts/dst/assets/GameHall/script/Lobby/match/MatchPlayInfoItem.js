
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchPlayInfoItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd118965nsxE7o/yHnM19u38', 'MatchPlayInfoItem');
// GameHall/script/Lobby/match/MatchPlayInfoItem.ts

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
/**
 * @description 賽事玩家信息 item
 */
var MatchPlayInfoItem = /** @class */ (function (_super) {
    __extends(MatchPlayInfoItem, _super);
    function MatchPlayInfoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchPlayInfoItem.prototype.onConstruct = function () {
        this.playintegral = this.getChild("playintegral").asTextField;
        this.playName = this.getChild("playName").asTextField;
        this.playranking = this.getChild("playranking").asTextField;
        this.levelController = this.getController("c1");
    };
    /**设置数据 */
    MatchPlayInfoItem.prototype.setData = function (index, data) {
        if (index < 3) {
            this.levelController.setSelectedIndex(index + 1);
        }
        else {
            this.levelController.setSelectedIndex(0);
        }
        this.playranking.text = data.rank + '';
        this.playName.text = data.name;
        this.playintegral.text = data.score + '';
    };
    return MatchPlayInfoItem;
}(fgui.GButton));
exports.default = MatchPlayInfoItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaFBsYXlJbmZvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7R0FFRztBQUNIO0lBQStDLHFDQUFZO0lBQTNEOztJQTJCQSxDQUFDO0lBbkJhLHVDQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxVQUFVO0lBQ0gsbUNBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFjO1FBQ3hDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBR0wsd0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxDQTNCOEMsSUFBSSxDQUFDLE9BQU8sR0EyQjFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFua0luZm8gfSBmcm9tIFwiLi4vTG9iYnlOZXREYXRhXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOizveS6i+eOqeWutuS/oeaBryBpdGVtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaFBsYXlJbmZvSXRlbSBleHRlbmRzIGZndWkuR0J1dHRvbiB7XHJcbiAgICAvKirnjqnlrrbnmoTorqHliIYgKi9cclxuICAgIHByaXZhdGUgcGxheWludGVncmFsOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirnjqnlrrbnmoTmmLXnp7AgKi9cclxuICAgIHByaXZhdGUgcGxheU5hbWU6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKueOqeWutueahOaOkuWQjSAqL1xyXG4gICAgcHJpdmF0ZSBwbGF5cmFua2luZzogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgcHJpdmF0ZSBsZXZlbENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlpbnRlZ3JhbCA9IHRoaXMuZ2V0Q2hpbGQoXCJwbGF5aW50ZWdyYWxcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5wbGF5TmFtZSA9IHRoaXMuZ2V0Q2hpbGQoXCJwbGF5TmFtZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnBsYXlyYW5raW5nID0gdGhpcy5nZXRDaGlsZChcInBsYXlyYW5raW5nXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMubGV2ZWxDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICB9XHJcbiAgICAvKirorr7nva7mlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGluZGV4OiBudW1iZXIsIGRhdGE6IFJhbmtJbmZvKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KGluZGV4ICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5cmFua2luZy50ZXh0ID0gZGF0YS5yYW5rICsgJyc7XHJcbiAgICAgICAgdGhpcy5wbGF5TmFtZS50ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucGxheWludGVncmFsLnRleHQgPSBkYXRhLnNjb3JlICsgJyc7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==