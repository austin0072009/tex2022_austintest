
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchRewardTypeOne.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f03eI4RZlLppwyi3FiI7SL', 'MatchRewardTypeOne');
// GameHall/script/Lobby/match/MatchRewardTypeOne.ts

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
 * @description 賽事奖励信息 1   item
 */
var MatchRewardTypeOne = /** @class */ (function (_super) {
    __extends(MatchRewardTypeOne, _super);
    function MatchRewardTypeOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchRewardTypeOne.prototype.onConstruct = function () {
        this.ranking = this.getChild("ranking").asTextField;
        this.proportion = this.getChild("proportion").asTextField;
        this.bonus = this.getChild("bonus").asTextField;
        this.typeController = this.getController("c1");
        this.ranking._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.proportion._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.bonus._label.cacheMode = cc.Label.CacheMode.CHAR;
    };
    /**设置数据 */
    MatchRewardTypeOne.prototype.setData = function (index, data, jack) {
        if (index < 3) {
            this.typeController.setSelectedIndex(index + 1);
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
        this.ranking.text = (index + 1) + '';
        this.proportion.text = ((data[0].num / jack) * 100).toFixed(2) + '%';
        this.bonus.text = data[0].num + '';
    };
    return MatchRewardTypeOne;
}(fgui.GButton));
exports.default = MatchRewardTypeOne;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaFJld2FyZFR5cGVPbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQUFnRCxzQ0FBWTtJQUE1RDs7SUFpQ0EsQ0FBQztJQXZCYSx3Q0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztJQUMxRCxDQUFDO0lBQ0QsVUFBVTtJQUNILG9DQUFPLEdBQWQsVUFBZSxLQUFhLEVBQUUsSUFBSSxFQUFFLElBQVk7UUFDNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBR0wseUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDK0MsSUFBSSxDQUFDLE9BQU8sR0FpQzNEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDos73kuovlpZblirHkv6Hmga8gMSAgIGl0ZW1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoUmV3YXJkVHlwZU9uZSBleHRlbmRzIGZndWkuR0J1dHRvbiB7XHJcbiAgICAvKirlkI3mrKEgKi9cclxuICAgIHByaXZhdGUgcmFua2luZzogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq5q+U5L6LICovXHJcbiAgICBwcml2YXRlIHByb3BvcnRpb246IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKuWlluaxoOWllumHkSAqL1xyXG4gICAgcHJpdmF0ZSBib251czogZmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIHByaXZhdGUgdHlwZUNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5raW5nID0gdGhpcy5nZXRDaGlsZChcInJhbmtpbmdcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gdGhpcy5nZXRDaGlsZChcInByb3BvcnRpb25cIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5ib251cyA9IHRoaXMuZ2V0Q2hpbGQoXCJib251c1wiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcblxyXG4gICAgICAgIHRoaXMucmFua2luZy5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLmJvbnVzLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgIH1cclxuICAgIC8qKuiuvue9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIHNldERhdGEoaW5kZXg6IG51bWJlciwgZGF0YSwgamFjazogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoaW5kZXggKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmFua2luZy50ZXh0ID0gKGluZGV4ICsgMSkgKyAnJztcclxuICAgICAgICB0aGlzLnByb3BvcnRpb24udGV4dCA9ICgoZGF0YVswXS5udW0gLyBqYWNrKSAqIDEwMCkudG9GaXhlZCgyKSArICclJztcclxuICAgICAgICB0aGlzLmJvbnVzLnRleHQgPSBkYXRhWzBdLm51bSArICcnO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=