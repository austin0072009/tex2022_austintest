"use strict";
cc._RF.push(module, '1c276OQS/xHW5OxCvHaWoL/', 'LevelUpSpine');
// Script/modules/@slotsmaster/ui-common/lib/LevelUp/LevelUpSpine.ts

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
/*
 * @Author: 田鑫
 * @Date: 2020-03-31 16:11:05
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-11 15:42:30
 * @Version: CocosCreator V2.2.2
 * @Description:
 */
var levelUpSpineResource = /** @class */ (function () {
    function levelUpSpineResource() {
    }
    levelUpSpineResource.PATH = "Games/Common/UI/popup_update/";
    levelUpSpineResource.UPDATE1 = "popup_update";
    return levelUpSpineResource;
}());
var LevelUpSpine = /** @class */ (function (_super) {
    __extends(LevelUpSpine, _super);
    function LevelUpSpine(node) {
        return _super.call(this, node, [levelUpSpineResource.PATH + levelUpSpineResource.UPDATE1]) || this;
    }
    LevelUpSpine.prototype.primary = function (maxBetUnlocked) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "primary_start", false);
        this.skeleton.addAnimation(0, "primary_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin1");
        }
        else {
            this.skeleton.setSkin("default");
        }
    };
    LevelUpSpine.prototype.dvanced = function (maxBetUnlocked) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "dvanced_start", false);
        this.skeleton.addAnimation(0, "dvanced_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin1");
        }
        else {
            this.skeleton.setSkin("default");
        }
    };
    LevelUpSpine.prototype.small = function (maxBetUnlocked) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "small_start", false);
        this.skeleton.addAnimation(0, "small_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin2");
        }
        else {
            this.skeleton.setSkin("default");
        }
    };
    LevelUpSpine.prototype.primaryClose = function () {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "primary_over", false);
    };
    LevelUpSpine.prototype.dvancedClose = function () {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "dvanced_over", false);
    };
    LevelUpSpine.prototype.smallClose = function () {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "small_over", false);
    };
    return LevelUpSpine;
}(SpineCommon_1.default));
exports.default = LevelUpSpine;

cc._RF.pop();