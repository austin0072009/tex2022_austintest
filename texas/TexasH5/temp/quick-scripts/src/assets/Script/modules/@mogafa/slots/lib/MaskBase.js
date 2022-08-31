"use strict";
cc._RF.push(module, '0be3cTZZPZMcLl7F7QLWecJ', 'MaskBase');
// Script/modules/@mogafa/slots/lib/MaskBase.ts

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
var FguiComponentBase_1 = require("../../fairygui-component/lib/FguiComponentBase");
var MaskBase = /** @class */ (function (_super) {
    __extends(MaskBase, _super);
    function MaskBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MaskBase.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskBase.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    return MaskBase;
}(FguiComponentBase_1.default));
exports.default = MaskBase;

cc._RF.pop();