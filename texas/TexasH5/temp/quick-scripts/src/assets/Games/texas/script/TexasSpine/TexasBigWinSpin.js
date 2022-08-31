"use strict";
cc._RF.push(module, '54994MexrRIap2tZkBWlo7T', 'TexasBigWinSpin');
// Games/texas/script/TexasSpine/TexasBigWinSpin.ts

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
var SpineCommon_1 = require("../../../../Script/modules/@mogafa/fairygui-component/lib/SpineCommon");
var TimeInfoMgrTex_1 = require("../View/TimeInfoMgrTex");
var freeSpinResource = {
    PATH: "res/Spine/bigwin/",
    SHINE: "skeleton",
};
var TexasBigWinSpin = /** @class */ (function (_super) {
    __extends(TexasBigWinSpin, _super);
    function TexasBigWinSpin(node) {
        return _super.call(this, node, [freeSpinResource.PATH + freeSpinResource.SHINE]) || this;
    }
    Object.defineProperty(TexasBigWinSpin.prototype, "packageResourceName", {
        get: function () {
            return "texas";
        },
        enumerable: false,
        configurable: true
    });
    TexasBigWinSpin.prototype.bgStart = function () {
        var _this = this;
        this._skeleton.skeletonData = this._resources[freeSpinResource.SHINE];
        var timeout = setTimeout(function () {
            _this.skeleton.setAnimation(1, "start", false);
            _this.skeleton.setCompleteListener(function (trackEntry) {
                if (!!trackEntry && trackEntry.animation.name === "start" && trackEntry.trackIndex === 1) {
                    _this._skeleton.skeletonData = _this._resources[freeSpinResource.SHINE];
                    _this.skeleton.setAnimation(0, "idle", true);
                }
            });
        }, 100);
        TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
    };
    TexasBigWinSpin.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    return TexasBigWinSpin;
}(SpineCommon_1.default));
exports.default = TexasBigWinSpin;

cc._RF.pop();