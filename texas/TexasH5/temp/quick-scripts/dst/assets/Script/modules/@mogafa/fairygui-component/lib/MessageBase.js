
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/MessageBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b52cfrptN9PJ5d2zPqCt62D', 'MessageBase');
// Script/modules/@mogafa/fairygui-component/lib/MessageBase.ts

"use strict";
/*
 * @Author: 田鑫
 * @Date: 2020-07-31 13:37:25
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-05 13:49:18
 * @Version: CocosCreator V2.2.2
 * @Description: notice基类
 */
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
var MessageBase = /** @class */ (function (_super) {
    __extends(MessageBase, _super);
    function MessageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessageBase;
}(FguiComponentBase_1.default));
exports.default = MessageBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcTWVzc2FnZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7OztBQUVILHlEQUFvRDtBQUVwRDtJQUFrRCwrQkFBaUI7SUFBbkU7O0lBR0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSGlELDJCQUFpQixHQUdsRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiDnlLDpkatcbiAqIEBEYXRlOiAyMDIwLTA3LTMxIDEzOjM3OjI1XG4gKiBATGFzdEVkaXRvcnM6IOeUsOmRq1xuICogQExhc3RFZGl0VGltZTogMjAyMC0wOC0wNSAxMzo0OToxOFxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBEZXNjcmlwdGlvbjogbm90aWNl5Z+657G7XG4gKi9cblxuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuL0ZndWlDb21wb25lbnRCYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1lc3NhZ2VCYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzaG93TWFycXVlZSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzaG93VGlwcyhtZXNzYWdlOiBzdHJpbmcsIHR5cGU/OiBudW1iZXIpOiB2b2lkO1xufVxuIl19