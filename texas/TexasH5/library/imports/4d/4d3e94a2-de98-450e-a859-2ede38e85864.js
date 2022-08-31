"use strict";
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