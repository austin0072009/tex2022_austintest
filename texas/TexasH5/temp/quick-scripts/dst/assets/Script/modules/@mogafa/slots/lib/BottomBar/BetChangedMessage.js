
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/BottomBar/BetChangedMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26eaa4My/JGO79UwmmQiVGy', 'BetChangedMessage');
// Script/modules/@mogafa/slots/lib/BottomBar/BetChangedMessage.ts

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
var BetChangedMessage = /** @class */ (function (_super) {
    __extends(BetChangedMessage, _super);
    function BetChangedMessage(bet, isMin, isMax) {
        var _this = _super.call(this, "betChanged", true) || this;
        _this._bet = 0;
        _this._isMin = true;
        _this._isMax = true;
        _this._bet = bet;
        _this._isMax = isMax;
        _this._isMin = isMin;
        return _this;
    }
    Object.defineProperty(BetChangedMessage.prototype, "bet", {
        get: function () {
            return this._bet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BetChangedMessage.prototype, "isMin", {
        get: function () {
            return this._isMin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BetChangedMessage.prototype, "isMax", {
        get: function () {
            return this._isMax;
        },
        enumerable: false,
        configurable: true
    });
    return BetChangedMessage;
}(cc.Event.EventCustom));
exports.default = BetChangedMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxCb3R0b21CYXJcXEJldENoYW5nZWRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQStDLHFDQUFvQjtJQUkvRCwyQkFBWSxHQUFXLEVBQUUsS0FBYyxFQUFFLEtBQWM7UUFBdkQsWUFDSSxrQkFBTSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBSTVCO1FBUk8sVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHM0IsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7O0lBQ3ZCLENBQUM7SUFDRCxzQkFBVyxrQ0FBRzthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsb0NBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxvQ0FBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNMLHdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsQ0FuQjhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQW1CbEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZXRDaGFuZ2VkTWVzc2FnZSBleHRlbmRzIGNjLkV2ZW50LkV2ZW50Q3VzdG9tIHtcbiAgICBwcml2YXRlIF9iZXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaXNNaW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2lzTWF4OiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3RvcihiZXQ6IG51bWJlciwgaXNNaW46IGJvb2xlYW4sIGlzTWF4OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKFwiYmV0Q2hhbmdlZFwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fYmV0ID0gYmV0O1xuICAgICAgICB0aGlzLl9pc01heCA9IGlzTWF4O1xuICAgICAgICB0aGlzLl9pc01pbiA9IGlzTWluXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYmV0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNNaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc01pbjtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc01heCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTWF4O1xuICAgIH1cbn0iXX0=