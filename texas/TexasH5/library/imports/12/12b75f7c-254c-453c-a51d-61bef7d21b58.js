"use strict";
cc._RF.push(module, '12b7598JUxFPKUdYb730htY', 'BankcardDerails');
// GameHall/script/Lobby/topup/BankcardDerails.ts

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
/**银行卡充值详情 */
var BankcardDerails = /** @class */ (function (_super) {
    __extends(BankcardDerails, _super);
    function BankcardDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankcardDerails.prototype.onConstruct = function () {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    };
    BankcardDerails.prototype.next = function () {
        console.log("123213213123123");
    };
    return BankcardDerails;
}(fgui.GComponent));
exports.default = BankcardDerails;

cc._RF.pop();