"use strict";
cc._RF.push(module, 'c53022chRpE0bLrLTVcutUv', 'MatchBlindsItem');
// GameHall/script/Lobby/match/MatchBlindsItem.ts

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
 * @description 賽事盲注表信息 item
 */
var MatchBlindsItem = /** @class */ (function (_super) {
    __extends(MatchBlindsItem, _super);
    function MatchBlindsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchBlindsItem.prototype.onConstruct = function () {
        this.level = this.getChild("level").asTextField;
        this.small = this.getChild("small").asTextField;
        this.big = this.getChild("big").asTextField;
        this.ante = this.getChild("ante").asCom;
    };
    /**设置数据 */
    MatchBlindsItem.prototype.setData = function (data) {
        this.level.text = data.level + '';
        this.small.text = data.basegamble + '';
        this.big.text = data.Maxblind + '';
        this.ante.text = data.pregamble + '';
    };
    return MatchBlindsItem;
}(fgui.GButton));
exports.default = MatchBlindsItem;

cc._RF.pop();