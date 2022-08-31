
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/MaskBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxNYXNrQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBK0U7QUFJL0U7SUFBK0MsNEJBQWlCO0lBQWhFOztJQWVBLENBQUM7SUFaRyxzQkFBVyx1QkFBQzthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFDRCxVQUFhLENBQVM7WUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyx1QkFBQzthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFDRCxVQUFhLENBQVM7WUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQzs7O09BSEE7SUFJTCxlQUFDO0FBQUQsQ0FmQSxBQWVDLENBZjhDLDJCQUFpQixHQWUvRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9GZ3VpQ29tcG9uZW50QmFzZVwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTWFza0Jhc2UgZXh0ZW5kcyBGZ3VpQ29tcG9uZW50QmFzZSB7XG4gICAgcHJpdmF0ZSBfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgeCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG4gICAgcHVibGljIHNldCB5KHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICB9XG59XG4iXX0=