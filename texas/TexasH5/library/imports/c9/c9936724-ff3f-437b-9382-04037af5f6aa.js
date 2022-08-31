"use strict";
cc._RF.push(module, 'c9936ck/z9De5OCBAN69faq', 'ZfbDerails');
// GameHall/script/Lobby/topup/ZfbDerails.ts

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
/**支付宝充值详情 */
var ZfbDerails = /** @class */ (function (_super) {
    __extends(ZfbDerails, _super);
    function ZfbDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZfbDerails.prototype.onConstruct = function () {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.typeController = this.getController("type");
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    };
    ZfbDerails.prototype.next = function () {
        console.log("123213213123123");
        var type = this.typeController.selectedIndex;
        if (type == 0) {
            return;
        }
        var num = this.numController.selectedIndex;
        var inputNum = this.numInput.text;
    };
    return ZfbDerails;
}(fgui.GComponent));
exports.default = ZfbDerails;

cc._RF.pop();