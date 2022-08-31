"use strict";
cc._RF.push(module, 'b3f0enJwU9ARLYh0d2/7m+Q', 'MogafaExtensions');
// Script/modules/@mogafa/fairygui-component/lib/extensions/MogafaExtensions.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MogafaExtensions = void 0;
var MogafaNumberField_1 = require("./MogafaNumberField");
var MogafaExtensions = /** @class */ (function () {
    function MogafaExtensions() {
    }
    MogafaExtensions.init = function () {
        fgui.GObject.prototype.asMogafaNumberField = function () {
            return new MogafaNumberField_1.MogafaNumberField(this.asTextField);
        };
    };
    return MogafaExtensions;
}());
exports.MogafaExtensions = MogafaExtensions;

cc._RF.pop();