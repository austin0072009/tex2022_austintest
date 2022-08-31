"use strict";
cc._RF.push(module, 'a2c2dioaMFKtYpIYRBviOWq', 'Integral');
// Script/modules/@slotsmaster/ui-common/lib/Coin/Integral.ts

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
exports.Integral = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var Integral = /** @class */ (function (_super) {
    __extends(Integral, _super);
    function Integral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isCoinSpred = false;
        return _this;
    }
    Object.defineProperty(Integral.prototype, "packageResourceName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Integral.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Integral.prototype, "componentName", {
        get: function () {
            return "Integral";
        },
        enumerable: false,
        configurable: true
    });
    Integral.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._coinNode = this.fguiComponent.node;
    };
    /**
     * 金币飞行动画
     * @param startPos
     * @param endPos
     */
    Integral.prototype.coinFly = function (startPos, endPos) {
        var _this = this;
        this._isCoinSpred = false;
        this._coinNode.zIndex = 2000;
        this._coinNode.scale = 0.4;
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);
        var randomx1 = endPos.x - startPos.x;
        var randomx2 = startPos.x - endPos.x;
        var randomy1 = endPos.y - startPos.y;
        var randomy2 = startPos.y - endPos.y;
        var q1 = cc.v2(0, 0);
        var q2 = cc.v2(0, 0);
        var romx = cc.misc.lerp(-100, 100, Math.random());
        var romy = cc.misc.lerp(-100, 100, Math.random());
        if (romx > 0) {
            q1.x = startPos.x + romx + 100;
        }
        else {
            q1.x = startPos.x + romx - 100;
        }
        if (romy > 0) {
            q1.y = startPos.y + romy + 100;
        }
        else {
            q1.y = startPos.y + romy - 100;
        }
        if (endPos.x > startPos.x) {
            q2.x = q1.x + randomx1 * Math.random();
        }
        else {
            q2.x = q1.x - randomx2 * Math.random();
        }
        if (endPos.y > startPos.y) {
            q2.y = q1.y - randomy1 * Math.random();
        }
        else {
            q2.y = q1.y + randomy2 * Math.random();
        }
        this._coinNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1 / 30)));
        this._coinNode.runAction(cc.sequence(cc.bezierTo(1, [q1, q2, endPos]), cc.callFunc(function () {
            if (_this.fguiComponent.node.isValid) {
                _this.fguiComponent.node.destroy();
            }
        })));
    };
    return Integral;
}(FguiComponentBase_1.default));
exports.Integral = Integral;

cc._RF.pop();