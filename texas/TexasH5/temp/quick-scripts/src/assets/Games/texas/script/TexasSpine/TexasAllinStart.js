"use strict";
cc._RF.push(module, 'f819eXXTzZOuKyPJK8t8Xxn', 'TexasAllinStart');
// Games/texas/script/TexasSpine/TexasAllinStart.ts

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
exports.TexasAllinKeep = void 0;
var SpineCommon_1 = require("../../../../Script/modules/@mogafa/fairygui-component/lib/SpineCommon");
var TimeInfoMgrTex_1 = require("../View/TimeInfoMgrTex");
var TexasAllinStart = /** @class */ (function (_super) {
    __extends(TexasAllinStart, _super);
    function TexasAllinStart(node) {
        var _this = _super.call(this, node, ["res/Spine/allin_start/" + "skeleton"]) || this;
        _this.allinKeep = null;
        return _this;
    }
    Object.defineProperty(TexasAllinStart.prototype, "packageResourceName", {
        get: function () {
            return "texas";
        },
        enumerable: false,
        configurable: true
    });
    TexasAllinStart.prototype.bgStart = function (callBack) {
        var _this = this;
        this._skeleton.skeletonData = this._resources["skeleton"];
        var timeout = setTimeout(function () {
            _this.skeleton.setAnimation(1, "animation", false);
            _this.skeleton.setCompleteListener(function (trackEntry) {
                if (!!trackEntry && trackEntry.animation.name === "animation" && trackEntry.trackIndex === 1) {
                    callBack();
                }
            });
        }, 100);
        TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
    };
    TexasAllinStart.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        this.allinKeep.onDestroy();
    };
    return TexasAllinStart;
}(SpineCommon_1.default));
exports.default = TexasAllinStart;
var TexasAllinKeep = /** @class */ (function (_super) {
    __extends(TexasAllinKeep, _super);
    function TexasAllinKeep(node) {
        return _super.call(this, node, ["res/Spine/allin_keep/" + "skeleton"]) || this;
        // node.opacity = 1;
    }
    Object.defineProperty(TexasAllinKeep.prototype, "packageResourceName", {
        get: function () {
            return "texas";
        },
        enumerable: false,
        configurable: true
    });
    TexasAllinKeep.prototype.bgStart = function () {
        var _this = this;
        this._skeleton.skeletonData = this._resources["skeleton"];
        var timeout = setTimeout(function () {
            _this.skeleton.setAnimation(1, "animation", true);
        }, 100);
        TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
    };
    TexasAllinKeep.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    return TexasAllinKeep;
}(SpineCommon_1.default));
exports.TexasAllinKeep = TexasAllinKeep;

cc._RF.pop();