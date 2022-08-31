"use strict";
cc._RF.push(module, 'a9a87Jo9k5AGKiBrRUq9szq', 'FguiFullScreenBase');
// Script/modules/@mogafa/fairygui-component/lib/FguiFullScreenBase.ts

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
var FguiComponentBase_1 = require("./FguiComponentBase");
var FguiFullScreenBase = /** @class */ (function (_super) {
    __extends(FguiFullScreenBase, _super);
    function FguiFullScreenBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FguiFullScreenBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.makeFullScreen();
    };
    return FguiFullScreenBase;
}(FguiComponentBase_1.default));
exports.default = FguiFullScreenBase;

cc._RF.pop();