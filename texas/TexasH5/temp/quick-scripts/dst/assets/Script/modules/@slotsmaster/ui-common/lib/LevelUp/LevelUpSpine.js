
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/LevelUp/LevelUpSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxMZXZlbFVwXFxMZXZlbFVwU3BpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0ZBQWlGO0FBRWpGOzs7Ozs7O0dBT0c7QUFDSDtJQUFBO0lBR0EsQ0FBQztJQUZpQix5QkFBSSxHQUFXLCtCQUErQixDQUFDO0lBQy9DLDRCQUFPLEdBQVcsY0FBYyxDQUFDO0lBQ25ELDJCQUFDO0NBSEQsQUFHQyxJQUFBO0FBQ0Q7SUFBMEMsZ0NBQVc7SUFDakQsc0JBQVksSUFBYTtlQUNyQixrQkFBTSxJQUFJLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxjQUFzQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksY0FBYyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTSw4QkFBTyxHQUFkLFVBQWUsY0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLGNBQWMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBQ00sNEJBQUssR0FBWixVQUFhLGNBQXNCO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksY0FBYyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDTSxtQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLGlDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxtQkFBQztBQUFELENBL0NBLEFBK0NDLENBL0N5QyxxQkFBVyxHQStDcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BpbmVDb21tb24gZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvZmFpcnlndWktY29tcG9uZW50L2xpYi9TcGluZUNvbW1vblwiO1xuXG4vKlxuICogQEF1dGhvcjog55Sw6ZGrXG4gKiBARGF0ZTogMjAyMC0wMy0zMSAxNjoxMTowNVxuICogQExhc3RFZGl0b3JzOiDnlLDpkatcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDgtMTEgMTU6NDI6MzBcbiAqIEBWZXJzaW9uOiBDb2Nvc0NyZWF0b3IgVjIuMi4yXG4gKiBARGVzY3JpcHRpb246XG4gKi9cbmNsYXNzIGxldmVsVXBTcGluZVJlc291cmNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFBBVEg6IHN0cmluZyA9IFwiR2FtZXMvQ29tbW9uL1VJL3BvcHVwX3VwZGF0ZS9cIjtcbiAgICBwdWJsaWMgc3RhdGljIFVQREFURTE6IHN0cmluZyA9IFwicG9wdXBfdXBkYXRlXCI7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFVwU3BpbmUgZXh0ZW5kcyBTcGluZUNvbW1vbiB7XG4gICAgY29uc3RydWN0b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBzdXBlcihub2RlLCBbbGV2ZWxVcFNwaW5lUmVzb3VyY2UuUEFUSCArIGxldmVsVXBTcGluZVJlc291cmNlLlVQREFURTFdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpbWFyeShtYXhCZXRVbmxvY2tlZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tsZXZlbFVwU3BpbmVSZXNvdXJjZS5VUERBVEUxXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJwcmltYXJ5X3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgXCJwcmltYXJ5X2JyZWF0aFwiLCB0cnVlKTtcbiAgICAgICAgaWYgKG1heEJldFVubG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldFNraW4oXCJza2luMVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0U2tpbihcImRlZmF1bHRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGR2YW5jZWQobWF4QmV0VW5sb2NrZWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbbGV2ZWxVcFNwaW5lUmVzb3VyY2UuVVBEQVRFMV07XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiZHZhbmNlZF9zdGFydFwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uYWRkQW5pbWF0aW9uKDAsIFwiZHZhbmNlZF9icmVhdGhcIiwgdHJ1ZSk7XG4gICAgICAgIGlmIChtYXhCZXRVbmxvY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRTa2luKFwic2tpbjFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldFNraW4oXCJkZWZhdWx0XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzbWFsbChtYXhCZXRVbmxvY2tlZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tsZXZlbFVwU3BpbmVSZXNvdXJjZS5VUERBVEUxXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJzbWFsbF9zdGFydFwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uYWRkQW5pbWF0aW9uKDAsIFwic21hbGxfYnJlYXRoXCIsIHRydWUpO1xuICAgICAgICBpZiAobWF4QmV0VW5sb2NrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0U2tpbihcInNraW4yXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRTa2luKFwiZGVmYXVsdFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcHJpbWFyeUNsb3NlKCkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbbGV2ZWxVcFNwaW5lUmVzb3VyY2UuVVBEQVRFMV07XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwicHJpbWFyeV9vdmVyXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGR2YW5jZWRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW2xldmVsVXBTcGluZVJlc291cmNlLlVQREFURTFdO1xuICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImR2YW5jZWRfb3ZlclwiLCBmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzbWFsbENsb3NlKCkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbbGV2ZWxVcFNwaW5lUmVzb3VyY2UuVVBEQVRFMV07XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwic21hbGxfb3ZlclwiLCBmYWxzZSk7XG4gICAgfVxufVxuIl19