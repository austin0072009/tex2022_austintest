"use strict";
cc._RF.push(module, '233276gyYdIQZaFcPg36pID', 'NumberOfKind');
// Script/modules/@slotsmaster/ui-common/lib/NumberOfKind/NumberOfKind.ts

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
exports.NumberOfKind = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var NumberOfKindSpine_1 = require("./NumberOfKindSpine");
var NumberOfKind = /** @class */ (function (_super) {
    __extends(NumberOfKind, _super);
    function NumberOfKind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberOfKind.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberOfKind.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumberOfKind.prototype, "componentName", {
        get: function () {
            return "NumberOfKind";
        },
        enumerable: false,
        configurable: true
    });
    NumberOfKind.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.makeFullScreen();
        this._numberOfKindNode = this.fguiComponent.getChild("numberOfKind").node;
        this._numberOfKindBgNode = this.fguiComponent.getChild("numberOfKindBg").node;
        this._numberOfKindSpine = new NumberOfKindSpine_1.default(this._numberOfKindNode);
        this._numberOfKindBgSpine = new NumberOfKindSpine_1.default(this._numberOfKindBgNode);
        this.addChild(this._numberOfKindSpine);
        this.addChild(this._numberOfKindBgSpine);
    };
    /**
     * 执行NUMBER OF KIND SPINE动画
     * @param kindNumber //* 类型数字 5 - 5 Of kind / 6 - 6 of kind
     */
    NumberOfKind.prototype.executeNumberOfKind = function (kindNumber) {
        if (kindNumber === 5 || kindNumber === 6) {
            this._numberOfKindBgSpine.kindCycleBg(kindNumber);
            this._numberOfKindSpine.kindCycle(kindNumber);
        }
    };
    return NumberOfKind;
}(FguiComponentBase_1.default));
exports.NumberOfKind = NumberOfKind;

cc._RF.pop();