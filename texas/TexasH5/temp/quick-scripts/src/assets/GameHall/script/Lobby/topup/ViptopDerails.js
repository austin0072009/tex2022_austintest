"use strict";
cc._RF.push(module, '1493eTmpnZNEJwJ7FX0kn0e', 'ViptopDerails');
// GameHall/script/Lobby/topup/ViptopDerails.ts

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
/**vip充值详情 */
var ViptopDerails = /** @class */ (function (_super) {
    __extends(ViptopDerails, _super);
    function ViptopDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViptopDerails.prototype.onConstruct = function () {
        this.btn_server1 = this.getChild("server1").asButton;
        this.btn_server2 = this.getChild("server2").asButton;
        this.btn_server1.onClick(this.jump1, this);
        this.btn_server2.onClick(this.jump2, this);
    };
    ViptopDerails.prototype.jump1 = function () {
    };
    ViptopDerails.prototype.jump2 = function () {
    };
    return ViptopDerails;
}(fgui.GComponent));
exports.default = ViptopDerails;

cc._RF.pop();