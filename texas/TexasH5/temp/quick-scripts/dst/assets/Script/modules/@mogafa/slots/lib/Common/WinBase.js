
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/Common/WinBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '912c53hJfNJIb5o2DXu76hI', 'WinBase');
// Script/modules/@mogafa/slots/lib/Common/WinBase.ts

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
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var WinBase = /** @class */ (function (_super) {
    __extends(WinBase, _super);
    function WinBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WinBase;
}(FguiComponentBase_1.default));
exports.default = WinBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxDb21tb25cXFdpbkJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsdUZBQWtGO0FBR2xGO0lBQThDLDJCQUFpQjtJQUEvRDs7SUFTQSxDQUFDO0lBQUQsY0FBQztBQUFELENBVEEsQUFTQyxDQVQ2QywyQkFBaUIsR0FTOUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgU3BpblJlc3VsdHNHYW1lV2hlZWwgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZVdoZWVsXCI7XG5pbXBvcnQgRmd1aUNvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvRmd1aUNvbXBvbmVudEJhc2VcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBXaW5CYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwb3BVcFdpbihcbiAgICAgICAgd2luVHlwZTogbnVtYmVyLFxuICAgICAgICBjb2luOiBudW1iZXIsXG4gICAgICAgIGNvdW50ZG93bjogbnVtYmVyLFxuICAgICAgICBnYW1lV2hlZWw/OiBTcGluUmVzdWx0c0dhbWVXaGVlbCxcbiAgICAgICAgY2FsbGJhY2s/OiBGdW5jdGlvblxuICAgICk6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IG9uQWRCdXR0b25DbGljayhsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkO1xufVxuIl19