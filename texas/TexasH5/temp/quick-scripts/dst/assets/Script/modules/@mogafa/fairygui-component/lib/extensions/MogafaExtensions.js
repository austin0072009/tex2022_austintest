
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/extensions/MogafaExtensions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcZXh0ZW5zaW9uc1xcTW9nYWZhRXh0ZW5zaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFFeEQ7SUFBQTtJQU1BLENBQUM7SUFMaUIscUJBQUksR0FBbEI7UUFDSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQWlCLENBQUMsbUJBQW1CLEdBQUc7WUFDbEQsT0FBTyxJQUFJLHFDQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZ2FmYU51bWJlckZpZWxkIH0gZnJvbSBcIi4vTW9nYWZhTnVtYmVyRmllbGRcIjtcblxuZXhwb3J0IGNsYXNzIE1vZ2FmYUV4dGVuc2lvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgKGZndWkuR09iamVjdC5wcm90b3R5cGUgYXMgYW55KS5hc01vZ2FmYU51bWJlckZpZWxkID0gZnVuY3Rpb24gKCk6IE1vZ2FmYU51bWJlckZpZWxkIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9nYWZhTnVtYmVyRmllbGQodGhpcy5hc1RleHRGaWVsZCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19