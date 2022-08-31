"use strict";
cc._RF.push(module, '784ae0gN1VALJo+Sj/p5c0F', 'TopBarBase');
// Script/modules/@mogafa/slots/lib/TopBar/TopBarBase.ts

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
var FguiFullScreenBase_1 = require("../../../fairygui-component/lib/FguiFullScreenBase");
var TopBarBase = /** @class */ (function (_super) {
    __extends(TopBarBase, _super);
    function TopBarBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TopBarBase;
}(FguiFullScreenBase_1.default));
exports.default = TopBarBase;

cc._RF.pop();