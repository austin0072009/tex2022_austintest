"use strict";
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