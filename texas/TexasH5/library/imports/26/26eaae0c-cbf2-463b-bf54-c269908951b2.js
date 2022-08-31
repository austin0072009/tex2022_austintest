"use strict";
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