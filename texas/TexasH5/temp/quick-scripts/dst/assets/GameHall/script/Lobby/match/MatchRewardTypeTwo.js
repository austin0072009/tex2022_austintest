
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchRewardTypeTwo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bee3CTAEBLjaMS4ZCtPydC', 'MatchRewardTypeTwo');
// GameHall/script/Lobby/match/MatchRewardTypeTwo.ts

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
 * @description 賽事奖励信息 2  item
 */
var MatchRewardTypeTwo = /** @class */ (function (_super) {
    __extends(MatchRewardTypeTwo, _super);
    function MatchRewardTypeTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchRewardTypeTwo.prototype.onConstruct = function () {
        this.ranking = this.getChild("n6").asTextField;
        this.bonus = this.getChild("n5").asTextField;
        this.typeController = this.getController("c1");
        this.ranking._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.bonus._label.cacheMode = cc.Label.CacheMode.CHAR;
    };
    /**设置数据 */
    MatchRewardTypeTwo.prototype.setData = function (index, data, jack) {
        if (index < 3) {
            this.typeController.setSelectedIndex(index + 1);
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
        this.ranking.text = (index + 1) + '';
        this.bonus.text = data[0].num + '';
    };
    return MatchRewardTypeTwo;
}(fgui.GButton));
exports.default = MatchRewardTypeTwo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaFJld2FyZFR5cGVUd28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQUFnRCxzQ0FBWTtJQUE1RDs7SUEyQkEsQ0FBQztJQXBCYSx3Q0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFDRCxVQUFVO0lBQ0gsb0NBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFJLEVBQUUsSUFBWTtRQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBR0wseUJBQUM7QUFBRCxDQTNCQSxBQTJCQyxDQTNCK0MsSUFBSSxDQUFDLE9BQU8sR0EyQjNEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDos73kuovlpZblirHkv6Hmga8gMiAgaXRlbVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hSZXdhcmRUeXBlVHdvIGV4dGVuZHMgZmd1aS5HQnV0dG9uIHtcclxuICAgIC8qKuWQjeasoSAqL1xyXG4gICAgcHJpdmF0ZSByYW5raW5nOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirlpZbmsaDlpZbph5EgKi9cclxuICAgIHByaXZhdGUgYm9udXM6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIHByaXZhdGUgdHlwZUNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5raW5nID0gdGhpcy5nZXRDaGlsZChcIm42XCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuYm9udXMgPSB0aGlzLmdldENoaWxkKFwibjVcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlciA9IHRoaXMuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmtpbmcuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgICAgIHRoaXMuYm9udXMuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgfVxyXG4gICAgLyoq6K6+572u5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0RGF0YShpbmRleDogbnVtYmVyLCBkYXRhLCBqYWNrOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleChpbmRleCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5raW5nLnRleHQgPSAoaW5kZXggKyAxKSArICcnO1xyXG4gICAgICAgIHRoaXMuYm9udXMudGV4dCA9IGRhdGFbMF0ubnVtICsgJyc7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==