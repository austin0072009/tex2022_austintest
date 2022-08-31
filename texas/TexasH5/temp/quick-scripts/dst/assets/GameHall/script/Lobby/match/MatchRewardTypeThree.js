
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchRewardTypeThree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d3e9Si3phFDqhZLt446Fhk', 'MatchRewardTypeThree');
// GameHall/script/Lobby/match/MatchRewardTypeThree.ts

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
 * @description 賽事奖励信息 3   item
 */
var MatchRewardTypeThree = /** @class */ (function (_super) {
    __extends(MatchRewardTypeThree, _super);
    function MatchRewardTypeThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchRewardTypeThree.prototype.onConstruct = function () {
        this.ranking = this.getChild("n6").asTextField;
        this.bonus = this.getChild("n5").asTextField;
        this.proportion = this.getChild("n4").asTextField;
        this.typeController = this.getController("c1");
    };
    /**设置数据 */
    MatchRewardTypeThree.prototype.setData = function (index, data, jack) {
        if (index < 3) {
            this.typeController.setSelectedIndex(index + 1);
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
        this.ranking.text = (index + 1) + '';
        if (data[0].IsValue) {
            this.proportion.text = '0';
            this.bonus.text = data[0].num + '';
        }
    };
    return MatchRewardTypeThree;
}(fgui.GButton));
exports.default = MatchRewardTypeThree;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaFJld2FyZFR5cGVUaHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNIO0lBQWtELHdDQUFZO0lBQTlEOztJQTZCQSxDQUFDO0lBckJhLDBDQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCxVQUFVO0lBQ0gsc0NBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFJLEVBQUMsSUFBWTtRQUMzQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUdMLDJCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsQ0E3QmlELElBQUksQ0FBQyxPQUFPLEdBNkI3RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6LO95LqL5aWW5Yqx5L+h5oGvIDMgICBpdGVtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaFJld2FyZFR5cGVUaHJlZSBleHRlbmRzIGZndWkuR0J1dHRvbiB7XHJcbiAgICAvKirlkI3mrKEgKi9cclxuICAgIHByaXZhdGUgcmFua2luZzogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq5q+U5L6LICovXHJcbiAgICBwcml2YXRlIHByb3BvcnRpb246IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKuWlluaxoOWllumHkSAqL1xyXG4gICAgcHJpdmF0ZSBib251czogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgcHJpdmF0ZSB0eXBlQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMucmFua2luZyA9IHRoaXMuZ2V0Q2hpbGQoXCJuNlwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmJvbnVzID0gdGhpcy5nZXRDaGlsZChcIm41XCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMucHJvcG9ydGlvbiA9IHRoaXMuZ2V0Q2hpbGQoXCJuNFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICB9XHJcbiAgICAvKirorr7nva7mlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGluZGV4OiBudW1iZXIsIGRhdGEsamFjazogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoaW5kZXggKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmFua2luZy50ZXh0ID0gKGluZGV4KzEpICsgJyc7XHJcbiAgICAgICAgaWYgKGRhdGFbMF0uSXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BvcnRpb24udGV4dCA9ICcwJztcclxuICAgICAgICAgICAgdGhpcy5ib251cy50ZXh0ID0gZGF0YVswXS5udW0gKyAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==