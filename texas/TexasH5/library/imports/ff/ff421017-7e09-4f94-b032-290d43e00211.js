"use strict";
cc._RF.push(module, 'ff421AXfglPlLAyKQ1D4AIR', 'Coin');
// Script/modules/@slotsmaster/ui-common/lib/Coin/Coin.ts

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
exports.Coin = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var CoinSpread_1 = require("./CoinSpread");
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //* 抛物线顶点最小y坐标
        _this.targetNodeMinY = -300;
        //* 抛物线顶点最大y坐标
        _this.targetNodeMaxY = 0;
        //* 金币最小速度
        _this.minspeed = 120;
        //* 金币最大速度
        _this.maxspeed = 200;
        _this._isCoinSpred = false;
        return _this;
    }
    Object.defineProperty(Coin.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coin.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coin.prototype, "componentName", {
        get: function () {
            return "Coin";
        },
        enumerable: false,
        configurable: true
    });
    Coin.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._coinSpread = new CoinSpread_1.default(this.fguiComponent.node);
        this._coinNode = this.fguiComponent.node;
    };
    Coin.prototype.update = function (dt) {
        if (this._isCoinSpred) {
            this._coinSpread.update(dt);
        }
    };
    Coin.prototype.onDestroy = function () {
        console.log("has been destroyed.");
    };
    /**
     * 金币飞行动画
     * @param startPos
     * @param endPos
     */
    Coin.prototype.coinFly = function (startPos, endPos) {
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
    Coin.prototype.coinFlyByCurve = function (coins, startPos, endPos) {
        var _this = this;
        if (coins % 2 !== 0) {
            if (this.fguiComponent.node.isValid) {
                this.fguiComponent.node.destroy();
            }
            return;
        }
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);
        var radius = (endPos.y - startPos.y) / 2;
        var distance = Math.abs(endPos.y - startPos.y);
        var peak1 = cc.v2(startPos.x + radius * Math.tan(((Math.PI * 2) / 360) * 30), distance * (1 / 4) + startPos.y);
        var trough1 = cc.v2(startPos.x, startPos.y + distance / 2);
        var bezierPeak1 = [startPos, peak1, trough1];
        var peak2 = cc.v2(startPos.x - radius * Math.tan(((Math.PI * 2) / 360) * 30), distance * (3 / 4) + startPos.y);
        var trough2 = endPos;
        var bezierPeak2 = [trough1, peak2, trough2];
        this._coinNode.runAction(cc.sequence(cc.bezierTo(0.5, bezierPeak1), cc.bezierTo(0.5, bezierPeak2), cc.callFunc(function () {
            if (_this.fguiComponent.node.isValid) {
                _this.fguiComponent.node.destroy();
            }
        })));
    };
    /**
     * 金币挥洒动画
     */
    Coin.prototype.coinSpread = function () {
        this._isCoinSpred = true;
        var startX = -300;
        var startY = 600;
        var endX = 800;
        var endY = 100;
        if (Math.random() * 100 > 65) {
            this._coinNode.zIndex = 100;
        }
        else {
            this._coinNode.zIndex = 10;
        }
        var startpos;
        if (Math.floor(Math.random() * 10) % 2 == 0) {
            this.leftTargetNode = cc.v2(cc.misc.lerp(-endX, -endY, Math.random()), cc.misc.lerp(this.targetNodeMinY, this.targetNodeMaxY, Math.random()));
            startpos = cc.v2(cc.misc.lerp(-startX, 0, Math.random()), -startY);
        }
        else {
            this.leftTargetNode = cc.v2(cc.misc.lerp(endY, endX, Math.random()), cc.misc.lerp(this.targetNodeMaxY, this.targetNodeMinY, Math.random()));
            startpos = cc.v2(cc.misc.lerp(0, startX, Math.random()), -startY);
        }
        var coinspeed = cc.misc.lerp(this.minspeed, this.maxspeed, Math.random());
        this._coinSpread.coinSpread(startpos, this.leftTargetNode, coinspeed, this.coinSpreadCallback.bind(this));
    };
    /**
     * 金币挥洒动画回调
     */
    Coin.prototype.coinSpreadCallback = function () {
        if (this.fguiComponent.node.isValid) {
            this.fguiComponent.node.destroy();
            this._isCoinSpred = false;
        }
    };
    /**
     * 底部栏getCoin金币收集动画
     * @param startPos
     * @param endPos
     * @param flyTime
     */
    Coin.prototype.getCoinCollect = function (startPos, endPos, flyTime) {
        var _this = this;
        if (flyTime === void 0) { flyTime = 1; }
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
            q1.x = startPos.x + romx + 160;
        }
        else {
            q1.x = startPos.x + romx - 100;
        }
        if (romy > 0) {
            q1.y = startPos.y + romy + 400;
        }
        else {
            q1.y = startPos.y + romy + 300;
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
        this._coinNode.runAction(cc.sequence(cc.delayTime(flyTime), cc.fadeOut(1 / 30)));
        this._coinNode.runAction(cc
            .sequence(cc.bezierTo(flyTime, [q1, q2, endPos]), cc.callFunc(function () {
            if (_this.fguiComponent.node.isValid) {
                _this.fguiComponent.node.destroy();
            }
        }))
            .easing(cc.easeOut(1)));
    };
    return Coin;
}(FguiComponentBase_1.default));
exports.Coin = Coin;

cc._RF.pop();