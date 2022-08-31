"use strict";
cc._RF.push(module, 'f8d9bv/WEVL0LiNZZSphbyz', 'NumberOfKindSpine');
// Script/modules/@slotsmaster/ui-common/lib/NumberOfKind/NumberOfKindSpine.ts

"use strict";
/*
 * @Author: 田鑫
 * @Date: 2020-05-14 14:59:34
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-11 15:42:00
 * @Version: CocosCreator V2.2.2
 * @Description: numberOfKind 连线SPINE
 */
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
var NumberOfKindSpineResources = /** @class */ (function () {
    function NumberOfKindSpineResources() {
    }
    NumberOfKindSpineResources.PATH = "Games/Common/UI/NumberOfKind/Spine/";
    NumberOfKindSpineResources.KINDUP = "spine_ui_function_5kind_up";
    NumberOfKindSpineResources.KINDDOWN = "spine_ui_function_5kind_down";
    return NumberOfKindSpineResources;
}());
var NumberOfKindSpine = /** @class */ (function (_super) {
    __extends(NumberOfKindSpine, _super);
    function NumberOfKindSpine(node) {
        return _super.call(this, node, [
            NumberOfKindSpineResources.PATH + NumberOfKindSpineResources.KINDUP,
            NumberOfKindSpineResources.PATH + NumberOfKindSpineResources.KINDDOWN,
        ]) || this;
    }
    /**
     * numberOfKind动画周期
     * @param kindNumber
     * @param holding 存在时间
     */
    NumberOfKindSpine.prototype.kindCycle = function (kindNumber, holding) {
        var _this = this;
        if (holding === void 0) { holding = 1.5; }
        this._skeleton.skeletonData = this._resources[NumberOfKindSpineResources.KINDUP];
        //* 播放ofKind连线音效
        SoundMgr_1.default.getInstance().playEffect("vo_" + kindNumber + "_of_kind");
        this.skeleton.setAnimation(0, kindNumber + "_finish", false);
        this.skeleton.addAnimation(0, kindNumber + "_breath", false);
        this.skeleton.setCompleteListener(function (trackEntry) {
            if (!!trackEntry && trackEntry.animation.name === kindNumber + "_breath") {
                _this.skeleton.addAnimation(0, kindNumber + "_over", false);
            }
        });
    };
    /**
     * numberOfKind背景动画周期
     * @param kindNumber
     * @param holding 存在时间
     */
    NumberOfKindSpine.prototype.kindCycleBg = function (kindNumber, holding) {
        var _this = this;
        if (holding === void 0) { holding = 1.5; }
        this._skeleton.skeletonData = this._resources[NumberOfKindSpineResources.KINDDOWN];
        this.skeleton.setAnimation(0, kindNumber + "_finish", false);
        this.skeleton.addAnimation(0, kindNumber + "_breath", false);
        this.skeleton.setCompleteListener(function (trackEntry) {
            if (!!trackEntry && trackEntry.animation.name === kindNumber + "_breath") {
                _this.skeleton.addAnimation(0, kindNumber + "_over", false);
            }
        });
    };
    /**
     * numberOfKind通用方法
     * @param kindNumber
     * @param holding
     */
    NumberOfKindSpine.prototype.numberOfKind = function (kindNumber, holding) {
        var _this = this;
        if (holding === void 0) { holding = 1.5; }
        this.skeleton.setAnimation(0, kindNumber + "_finish", false);
        this.skeleton.addAnimation(0, kindNumber + "_breath", true);
        this.scheduleOnce(function () {
            _this.skeleton.setCompleteListener(function (trackEntry) {
                if (!!trackEntry && trackEntry.animation.name === kindNumber + "_breath") {
                    _this.skeleton.addAnimation(0, kindNumber + "_over", false);
                }
            });
        }, holding);
    };
    return NumberOfKindSpine;
}(SpineCommon_1.default));
exports.default = NumberOfKindSpine;

cc._RF.pop();