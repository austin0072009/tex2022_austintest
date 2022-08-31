
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Win/WinSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxXaW5cXFdpblNwaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHNGQUFpRjtBQUNqRixtRUFBOEQ7QUFFOUQ7SUFBQTtJQVFBLENBQUM7SUFQaUIsc0JBQUksR0FBVyw0QkFBNEIsQ0FBQztJQUM1Qyx3QkFBTSxHQUFXLDZCQUE2QixDQUFDO0lBQy9DLDBCQUFRLEdBQVcsK0JBQStCLENBQUM7SUFDbkQseUJBQU8sR0FBVyw4QkFBOEIsQ0FBQztJQUNqRCwyQkFBUyxHQUFXLGdDQUFnQyxDQUFDO0lBQ3JELDBCQUFRLEdBQVcsK0JBQStCLENBQUM7SUFDbkQsNEJBQVUsR0FBVyxpQ0FBaUMsQ0FBQztJQUN6RSx3QkFBQztDQVJELEFBUUMsSUFBQTtBQUNEO0lBQXNDLDRCQUFXO0lBQzdDLGtCQUFZLElBQWE7ZUFDckIsa0JBQU0sSUFBSSxFQUFFO1lBQ1IsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLE1BQU07WUFDakQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFFBQVE7WUFDbkQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLE9BQU87WUFDbEQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFNBQVM7WUFDcEQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFFBQVE7WUFDbkQsaUJBQWlCLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVU7U0FDeEQsQ0FBQztJQUNOLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxrQkFBUSxDQUFDLFdBQVcsRUFBRSxD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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgU3BpbmVDb21tb24gZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvZmFpcnlndWktY29tcG9uZW50L2xpYi9TcGluZUNvbW1vblwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi8uLi8uLi8uLi9AbW9nYWZhL3V0aWxzL2xpYi9Tb3VuZE1nclwiO1xuXG5jbGFzcyBXaW5TcGluZVJlc291cmNlcyB7XG4gICAgcHVibGljIHN0YXRpYyBQQVRIOiBzdHJpbmcgPSBcIkdhbWVzL0NvbW1vbi9VSS9XaW4vU3BpbmUvXCI7XG4gICAgcHVibGljIHN0YXRpYyBCSUdXSU46IHN0cmluZyA9IFwic3BpbmVfdWlfZnVuY3Rpb25fYmlnd2luX3VwXCI7XG4gICAgcHVibGljIHN0YXRpYyBCSUdXSU5CRzogc3RyaW5nID0gXCJzcGluZV91aV9mdW5jdGlvbl9iaWd3aW5fZG93blwiO1xuICAgIHB1YmxpYyBzdGF0aWMgTUVHQVdJTjogc3RyaW5nID0gXCJzcGluZV91aV9mdW5jdGlvbl9tZWdhd2luX3VwXCI7XG4gICAgcHVibGljIHN0YXRpYyBNRUdBV0lOQkc6IHN0cmluZyA9IFwic3BpbmVfdWlfZnVuY3Rpb25fbWVnYXdpbl9kb3duXCI7XG4gICAgcHVibGljIHN0YXRpYyBTVVBFUldJTjogc3RyaW5nID0gXCJzcGluZV91aV9mdW5jdGlvbl9zdXBlcndpbl91cFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgU1VQRVJXSU5CRzogc3RyaW5nID0gXCJzcGluZV91aV9mdW5jdGlvbl9zdXBlcndpbl9kb3duXCI7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5TcGluZSBleHRlbmRzIFNwaW5lQ29tbW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHN1cGVyKG5vZGUsIFtcbiAgICAgICAgICAgIFdpblNwaW5lUmVzb3VyY2VzLlBBVEggKyBXaW5TcGluZVJlc291cmNlcy5CSUdXSU4sXG4gICAgICAgICAgICBXaW5TcGluZVJlc291cmNlcy5QQVRIICsgV2luU3BpbmVSZXNvdXJjZXMuQklHV0lOQkcsXG4gICAgICAgICAgICBXaW5TcGluZVJlc291cmNlcy5QQVRIICsgV2luU3BpbmVSZXNvdXJjZXMuTUVHQVdJTixcbiAgICAgICAgICAgIFdpblNwaW5lUmVzb3VyY2VzLlBBVEggKyBXaW5TcGluZVJlc291cmNlcy5NRUdBV0lOQkcsXG4gICAgICAgICAgICBXaW5TcGluZVJlc291cmNlcy5QQVRIICsgV2luU3BpbmVSZXNvdXJjZXMuU1VQRVJXSU4sXG4gICAgICAgICAgICBXaW5TcGluZVJlc291cmNlcy5QQVRIICsgV2luU3BpbmVSZXNvdXJjZXMuU1VQRVJXSU5CRyxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmlnV2luKCkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbV2luU3BpbmVSZXNvdXJjZXMuQklHV0lOXTtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwidm9fYmlnX3dpblwiKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJiaWdfc3RhcnRcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNrZWxldG9uLmFkZEFuaW1hdGlvbigwLCBcImJpZ19icmVhdGhcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbWVnYVdpbigpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLk1FR0FXSU5dO1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJ2b19tYWdhX3dpblwiKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJtZWdhX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgXCJtZWdhX2JyZWF0aFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzdXBlcldpbigpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLlNVUEVSV0lOXTtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwidm9fc3VwZXJfd2luXCIpO1xuICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcInN1cGVyX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgXCJzdXBlcl9icmVhdGhcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYmlnV2luQmcoKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tXaW5TcGluZVJlc291cmNlcy5CSUdXSU5CR107XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYmlnX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgXCJiaWdfYnJlYXRoXCIsIHRydWUpO1xuICAgIH1cblxuICAgIG1lZ2FXaW5CZygpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLk1FR0FXSU5CR107XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwibWVnYV9zdGFydFwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uYWRkQW5pbWF0aW9uKDAsIFwibWVnYV9icmVhdGhcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc3VwZXJXaW5CZygpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLlNVUEVSV0lOQkddO1xuICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcInN1cGVyX3N0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgXCJzdXBlcl9icmVhdGhcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGJnV2luSGlkZSgpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLkJJR1dJTl07XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiYmlnX292ZXJcIiwgZmFsc2UpO1xuICAgIH1cbiAgICBiZ1dpbkJnSGlkZSgpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLkJJR1dJTkJHXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJiaWdfb3ZlclwiLCBmYWxzZSk7XG4gICAgfVxuICAgIHN1cGVyV2luSGlkZSgpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1dpblNwaW5lUmVzb3VyY2VzLlNVUEVSV0lOXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJzdXBlcl9vdmVyXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgc3VwZXJXaW5CZ0hpZGUoKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tXaW5TcGluZVJlc291cmNlcy5TVVBFUldJTkJHXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJzdXBlcl9vdmVyXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgbWVnYVdpbkhpZGUoKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tXaW5TcGluZVJlc291cmNlcy5NRUdBV0lOXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJtZWdhX292ZXJcIiwgZmFsc2UpO1xuICAgIH1cbiAgICBtZWdhV2luQmdIaWRlKCkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbV2luU3BpbmVSZXNvdXJjZXMuTUVHQVdJTkJHXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJtZWdhX292ZXJcIiwgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==