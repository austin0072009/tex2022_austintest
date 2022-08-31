
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/FguiFullScreenBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcRmd1aUZ1bGxTY3JlZW5CYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUdwRDtJQUF5RCxzQ0FBaUI7SUFBMUU7O0lBS0EsQ0FBQztJQUphLGtEQUFxQixHQUEvQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMd0QsMkJBQWlCLEdBS3pFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuL0ZndWlDb21wb25lbnRCYXNlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRmd1aUZ1bGxTY3JlZW5CYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubWFrZUZ1bGxTY3JlZW4oKTtcbiAgICB9XG59XG4iXX0=