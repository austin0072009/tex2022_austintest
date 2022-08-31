"use strict";
cc._RF.push(module, '7aa1dSofglA0oMucxdmcdQY', 'BigWinSpread');
// Script/modules/@slotsmaster/ui-common/lib/Coin/BigWinSpread.ts

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
exports.BigWinSpread = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var BigWinSpread = /** @class */ (function (_super) {
    __extends(BigWinSpread, _super);
    function BigWinSpread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BigWinSpread.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BigWinSpread.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BigWinSpread.prototype, "componentName", {
        get: function () {
            return "BigWinCoin";
        },
        enumerable: false,
        configurable: true
    });
    BigWinSpread.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._windowWidth = fairygui.GRoot.inst.width;
        this._windowHeight = fairygui.GRoot.inst.height;
        this._coin = this.fguiComponent.node;
        this._coin.anchorX = 0.5;
        this._coin.anchorY = 0.5;
        this._coin.x = fairygui.GRoot.inst.width / 2;
        this._coin.y = -fairygui.GRoot.inst.height / 2;
        this._coin.scale = Math.random() + 0.4;
        this._coin.angle = Math.random() * 360;
        this._radius = this._windowWidth / 4;
        console.log("BigWinCoin  createChildComponents");
        this._startPosition = cc.v2(this._coin.x, this._coin.y);
        this._bezierTime = 2;
    };
    BigWinSpread.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
    };
    BigWinSpread.prototype.coinFlyByCurve = function (startPos, endPos, angle) {
        var _this = this;
        if (angle === void 0) { angle = 30; }
        this._coin.position = cc.v3(startPos.x, startPos.y, 0);
        this._coin.scale = 0.4;
        this._coin.angle = 360 * Math.random();
        var radius = ((Math.abs(endPos.y) / Math.cos((Math.PI * 2) / 360)) * angle) / 2;
        var trangleLen = radius * Math.sin((Math.PI * 2) / 360) * angle;
        var peak1 = cc.v2(startPos.x + trangleLen, startPos.y - startPos.y / 2);
        var trough1 = cc.v2(startPos.x - trangleLen * 2, startPos.y - startPos.y / 2);
        var peak2 = cc.v2(endPos.x - trangleLen * 2, endPos.y + startPos.y / 2);
        var bezierCurve = [peak1, peak2, endPos];
        this._coin.runAction(cc
            .sequence(cc.bezierTo(0.5, bezierCurve), cc.callFunc(function () {
            if (_this._coin.isValid) {
                _this._coin.destroy();
            }
        }))
            .easing(cc.easeInOut(1.2)));
    };
    BigWinSpread.prototype.degree30CoinsLeft = function () {
        var nodeLeftX = this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 10));
        var nodeLeftPosition = cc.v2(nodeLeftX, nodeY);
        var endLeftX = 300 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.degree30CoinsRight = function () {
        var nodeRightX = this._windowWidth / 2 + this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 10));
        var nodeRightPosition = cc.v2(nodeRightX, nodeY);
        var endRightX = this._windowWidth + 100 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.degree50CoinsLeft = function () {
        var nodeLeftX = this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (50 + Math.random() * 10));
        var nodeLeftPosition = cc.v2(nodeLeftX, nodeY);
        var endLeftX = 300 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.degree50CoinsRight = function () {
        var nodeRightX = this._windowWidth / 2 + this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (50 + Math.random() * 10));
        var nodeRightPosition = cc.v2(nodeRightX, nodeY);
        var endRightX = this._windowWidth + 100 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.degree70CoinsLeft = function () {
        var nodeLeftX = this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 5));
        var nodeLeftPosition = cc.v2(nodeLeftX, nodeY);
        var endLeftX = this._coin.x - 600 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.degree70CoinsRight = function () {
        var nodeRightX = this._windowWidth / 2 + this._radius;
        var nodeY = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 5));
        var nodeRightPosition = cc.v2(nodeRightX, nodeY);
        var endRightX = this._coin.x + 600 * Math.random();
        var endY = -fairygui.GRoot.inst.height;
        var endPosition = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.verticalCoinsLeft = function () {
        var nodeLeftX = this._windowWidth / 2 - (80 + Math.random() * 100);
        var nodeLeftPosition = cc.v2(nodeLeftX, this._windowHeight + (50 + Math.random() * 100));
        var endLeftX = this._windowWidth / 2 - (80 + Math.random() * 100);
        var endY = -fairygui.GRoot.inst.height;
        this.bezierArr = [this._startPosition, nodeLeftPosition, cc.v2(endLeftX, endY)];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.verticalCoinsRight = function () {
        var nodeRightX = this._windowWidth / 2 + (80 + Math.random() * 100);
        var nodeRightPosition = cc.v2(nodeRightX, this._windowHeight + (50 + Math.random() * 100));
        var endRightX = this._windowWidth / 2 + (80 + Math.random() * 100);
        var endY = -fairygui.GRoot.inst.height;
        this.bezierArr = [this._startPosition, nodeRightPosition, cc.v2(endRightX, endY)];
        this.bezier(this._bezierTime, this.bezierArr);
    };
    BigWinSpread.prototype.bezier = function (time, bezierArr) {
        var _this = this;
        this.fguiComponent.node.runAction(cc.sequence(cc.bezierTo(time, bezierArr), cc.callFunc(function () {
            if (_this.fguiComponent.node.isValid) {
                _this.fguiComponent.node.destroy();
            }
        })));
    };
    return BigWinSpread;
}(FguiComponentBase_1.default));
exports.BigWinSpread = BigWinSpread;

cc._RF.pop();