"use strict";
cc._RF.push(module, 'a267cb5mmlJULa7GoPgpw/m', 'TexasGiftItem');
// Games/texas/script/View/TexasGiftItem.ts

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
var TexasGiftItem = /** @class */ (function (_super) {
    __extends(TexasGiftItem, _super);
    function TexasGiftItem() {
        return _super.call(this) || this;
    }
    // private loader: fgui.GLoader;
    TexasGiftItem.prototype.onConstruct = function () {
        // this.loader = this.getChild("loader").asLoader;
    };
    TexasGiftItem.prototype.showGift = function (prefad) {
        this.prefadAni = prefad;
        var sk = cc.instantiate(prefad);
        // this.loader.node.addChild(sk);
        // sk.setPosition(0, 0);
    };
    TexasGiftItem.prototype.createAnimationNode = function () {
        return cc.instantiate(this.prefadAni);
    };
    return TexasGiftItem;
}(fgui.GComponent));
exports.default = TexasGiftItem;

cc._RF.pop();