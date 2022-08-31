
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/TopBar/TopBarBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxUb3BCYXJcXFRvcEJhckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EseUZBQW9GO0FBR3BGO0lBQWlELDhCQUFrQjtJQUFuRTs7SUF3QkEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsQ0F4QmdELDRCQUFrQixHQXdCbEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmltcG9ydCBTcGluUmVzdWx0c1VwZ3JhZGUgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzVXBncmFkZVwiO1xuaW1wb3J0IEZndWlGdWxsU2NyZWVuQmFzZSBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9GZ3VpRnVsbFNjcmVlbkJhc2VcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUb3BCYXJCYXNlIGV4dGVuZHMgRmd1aUZ1bGxTY3JlZW5CYXNlIHtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGNvaW5zKCk6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0IGNvaW5zKHZhbHVlOiBudW1iZXIpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgaW50ZWdyYWwoKTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXQgaW50ZWdyYWwodmFsdWU6IG51bWJlcik7XG4gICAgcHVibGljIGFic3RyYWN0IGdldCBsZXZlbCgpOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IHNldCBsZXZlbCh2YWx1ZTogbnVtYmVyKTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IGN1cnJlbnRFeHAoKTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXQgY3VycmVudEV4cCh2YWx1ZTogbnVtYmVyKTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IHRvdGFsRXhwKCk6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0IHRvdGFsRXhwKHZhbHVlOiBudW1iZXIpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgY29pbk5hbWUoKTogc3RyaW5nO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQgaW50ZWdyYWxOYW1lKCk6IHN0cmluZztcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0SW5pdExldmVsKGxldmVsOiBudW1iZXIsIGN1cnJlbnRFeHA6IG51bWJlciwgdG90YWxFeHA6IG51bWJlcik6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZUxldmVsKFxuICAgICAgICBsZXZlbDogbnVtYmVyLFxuICAgICAgICBjdXJyZW50RXhwOiBudW1iZXIsXG4gICAgICAgIHRvdGFsRXhwOiBudW1iZXIsXG4gICAgICAgIHVwZ3JhZGVWYWx1ZTogU3BpblJlc3VsdHNVcGdyYWRlLFxuICAgICAgICBjYWxsYmFjaz86IEZ1bmN0aW9uXG4gICAgKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0VXNlckNvaW5zKHVzZXJDb2luczogbnVtYmVyLCBjaGFuZ2VUaW1lPzogbnVtYmVyKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0VXNlckludGVncmFsKHVzZXJJbnRlZ3JhbDogbnVtYmVyLCBjaGFuZ2VUaW1lPzogbnVtYmVyKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2FuY2VsQ29pbkluY3JlYXNlQW5pbWUoKTogdm9pZDtcbn1cbiJdfQ==