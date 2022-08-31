"use strict";
cc._RF.push(module, '68b9dlwDfNN+LCnNzzJQlxj', 'GiftItem');
// Script/Common/GiftItem.ts

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
var GiftItem = /** @class */ (function (_super) {
    __extends(GiftItem, _super);
    function GiftItem() {
        return _super.call(this) || this;
    }
    GiftItem.prototype.onConstruct = function () {
        this.loader = this.getChild("loader").asLoader;
    };
    GiftItem.prototype.showGift = function (prefad) {
        this.prefadAni = prefad;
        var sk = cc.instantiate(prefad);
        this.loader.url = "ui://Common/" + prefad.name;
        // this.loader.node.addChild(sk);
        // sk.setPosition(0, 0);
    };
    GiftItem.prototype.createAnimationNode = function () {
        return cc.instantiate(this.prefadAni);
    };
    return GiftItem;
}(fgui.GComponent));
exports.default = GiftItem;

cc._RF.pop();