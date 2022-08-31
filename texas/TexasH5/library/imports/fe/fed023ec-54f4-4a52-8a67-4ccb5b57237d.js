"use strict";
cc._RF.push(module, 'fed02PsVPRKUopnTMtbVyN9', 'RippleSpine');
// Script/modules/@slotsmaster/ui-common/lib/Ripple/RippleSpine.ts

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
var SpineCommon_1 = require("../../../../@mogafa/fairygui-component/lib/SpineCommon");
var RippleSpineResources = /** @class */ (function () {
    function RippleSpineResources() {
    }
    RippleSpineResources.PATH = "GameHall/Spine/Ripple/";
    RippleSpineResources.RIPPLE = "spine_ui_guanghuan";
    return RippleSpineResources;
}());
var RippleSpine = /** @class */ (function (_super) {
    __extends(RippleSpine, _super);
    function RippleSpine(node) {
        return _super.call(this, node, [RippleSpineResources.PATH + RippleSpineResources.RIPPLE]) || this;
    }
    RippleSpine.prototype.ripple = function () {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.setAnimation(1, "finish", true);
    };
    RippleSpine.prototype.closeRipple = function () {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.clearTrack(1);
    };
    return RippleSpine;
}(SpineCommon_1.default));
exports.default = RippleSpine;

cc._RF.pop();