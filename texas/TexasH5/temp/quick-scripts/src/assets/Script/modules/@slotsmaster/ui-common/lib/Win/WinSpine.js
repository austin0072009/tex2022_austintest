"use strict";
cc._RF.push(module, '74842W8KnNH4pf/kv6+jmwM', 'WinSpine');
// Script/modules/@slotsmaster/ui-common/lib/Win/WinSpine.ts

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
var SoundMgr_1 = require("../../../../@mogafa/utils/lib/SoundMgr");
var WinSpineResources = /** @class */ (function () {
    function WinSpineResources() {
    }
    WinSpineResources.PATH = "Games/Common/UI/Win/Spine/";
    WinSpineResources.BIGWIN = "spine_ui_function_bigwin_up";
    WinSpineResources.BIGWINBG = "spine_ui_function_bigwin_down";
    WinSpineResources.MEGAWIN = "spine_ui_function_megawin_up";
    WinSpineResources.MEGAWINBG = "spine_ui_function_megawin_down";
    WinSpineResources.SUPERWIN = "spine_ui_function_superwin_up";
    WinSpineResources.SUPERWINBG = "spine_ui_function_superwin_down";
    return WinSpineResources;
}());
var WinSpine = /** @class */ (function (_super) {
    __extends(WinSpine, _super);
    function WinSpine(node) {
        return _super.call(this, node, [
            WinSpineResources.PATH + WinSpineResources.BIGWIN,
            WinSpineResources.PATH + WinSpineResources.BIGWINBG,
            WinSpineResources.PATH + WinSpineResources.MEGAWIN,
            WinSpineResources.PATH + WinSpineResources.MEGAWINBG,
            WinSpineResources.PATH + WinSpineResources.SUPERWIN,
            WinSpineResources.PATH + WinSpineResources.SUPERWINBG,
        ]) || this;
    }
    WinSpine.prototype.bigWin = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWIN];
        SoundMgr_1.default.getInstance().playEffect("vo_big_win");
        this.skeleton.setAnimation(0, "big_start", false);
        this.skeleton.addAnimation(0, "big_breath", true);
    };
    WinSpine.prototype.megaWin = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWIN];
        SoundMgr_1.default.getInstance().playEffect("vo_maga_win");
        this.skeleton.setAnimation(0, "mega_start", false);
        this.skeleton.addAnimation(0, "mega_breath", true);
    };
    WinSpine.prototype.superWin = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWIN];
        SoundMgr_1.default.getInstance().playEffect("vo_super_win");
        this.skeleton.setAnimation(0, "super_start", false);
        this.skeleton.addAnimation(0, "super_breath", true);
    };
    WinSpine.prototype.bigWinBg = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWINBG];
        this.skeleton.setAnimation(0, "big_start", false);
        this.skeleton.addAnimation(0, "big_breath", true);
    };
    WinSpine.prototype.megaWinBg = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWINBG];
        this.skeleton.setAnimation(0, "mega_start", false);
        this.skeleton.addAnimation(0, "mega_breath", true);
    };
    WinSpine.prototype.superWinBg = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWINBG];
        this.skeleton.setAnimation(0, "super_start", false);
        this.skeleton.addAnimation(0, "super_breath", true);
    };
    WinSpine.prototype.bgWinHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWIN];
        this.skeleton.setAnimation(0, "big_over", false);
    };
    WinSpine.prototype.bgWinBgHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWINBG];
        this.skeleton.setAnimation(0, "big_over", false);
    };
    WinSpine.prototype.superWinHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWIN];
        this.skeleton.setAnimation(0, "super_over", false);
    };
    WinSpine.prototype.superWinBgHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWINBG];
        this.skeleton.setAnimation(0, "super_over", false);
    };
    WinSpine.prototype.megaWinHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWIN];
        this.skeleton.setAnimation(0, "mega_over", false);
    };
    WinSpine.prototype.megaWinBgHide = function () {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWINBG];
        this.skeleton.setAnimation(0, "mega_over", false);
    };
    return WinSpine;
}(SpineCommon_1.default));
exports.default = WinSpine;

cc._RF.pop();