"use strict";
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