"use strict";
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