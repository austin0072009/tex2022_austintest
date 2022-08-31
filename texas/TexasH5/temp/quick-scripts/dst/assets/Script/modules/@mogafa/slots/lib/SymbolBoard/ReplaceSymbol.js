
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/ReplaceSymbol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a4c1b0RMdKBq9PCi8d8XLD', 'ReplaceSymbol');
// Script/modules/@mogafa/slots/lib/SymbolBoard/ReplaceSymbol.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReplaceSymbol = /** @class */ (function () {
    function ReplaceSymbol(reel, cell, count) {
        this.$replaced = false;
        this.$reel = reel;
        this.$cell = cell;
        this.$count = count;
        this.$replaced = false;
    }
    Object.defineProperty(ReplaceSymbol.prototype, "reel", {
        get: function () {
            return this.$reel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReplaceSymbol.prototype, "cell", {
        get: function () {
            return this.$cell;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReplaceSymbol.prototype, "count", {
        get: function () {
            return this.$count;
        },
        enumerable: false,
        configurable: true
    });
    ReplaceSymbol.prototype.replaceOnce = function () {
        this.$count--;
        if (this.$count < 0) {
            this.$count == 0;
        }
        this.$replaced = this.$count === 0;
    };
    Object.defineProperty(ReplaceSymbol.prototype, "replaced", {
        get: function () {
            return this.$replaced;
        },
        enumerable: false,
        configurable: true
    });
    return ReplaceSymbol;
}());
exports.default = ReplaceSymbol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcUmVwbGFjZVN5bWJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBS0ksdUJBQVksSUFBWSxFQUFFLElBQVksRUFBRSxLQUFhO1FBRDdDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELHNCQUFXLCtCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywrQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsZ0NBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTSxtQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxzQkFBVyxtQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VTeW1ib2wge1xuICAgIHByaXZhdGUgJHJlZWw6IG51bWJlcjtcbiAgICBwcml2YXRlICRjZWxsOiBudW1iZXI7XG4gICAgcHJpdmF0ZSAkY291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlICRyZXBsYWNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHJlZWw6IG51bWJlciwgY2VsbDogbnVtYmVyLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuJHJlZWwgPSByZWVsO1xuICAgICAgICB0aGlzLiRjZWxsID0gY2VsbDtcbiAgICAgICAgdGhpcy4kY291bnQgPSBjb3VudDtcbiAgICAgICAgdGhpcy4kcmVwbGFjZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGdldCByZWVsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWVsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNlbGwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNlbGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNvdW50O1xuICAgIH1cbiAgICBwdWJsaWMgcmVwbGFjZU9uY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuJGNvdW50LS07XG4gICAgICAgIGlmICh0aGlzLiRjb3VudCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuJGNvdW50ID09IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kcmVwbGFjZWQgPSB0aGlzLiRjb3VudCA9PT0gMDtcbiAgICB9XG4gICAgcHVibGljIGdldCByZXBsYWNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlcGxhY2VkO1xuICAgIH1cbn1cbiJdfQ==