
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/NumberOfKind/NumberOfKindSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxOdW1iZXJPZktpbmRcXE51bWJlck9mS2luZFNwaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7Ozs7Ozs7Ozs7Ozs7QUFFSCxzRkFBaUY7QUFDakYsbUVBQThEO0FBSzlEO0lBQUE7SUFJQSxDQUFDO0lBSGlCLCtCQUFJLEdBQVcscUNBQXFDLENBQUM7SUFDckQsaUNBQU0sR0FBVyw0QkFBNEIsQ0FBQztJQUM5QyxtQ0FBUSxHQUFXLDhCQUE4QixDQUFDO0lBQ3BFLGlDQUFDO0NBSkQsQUFJQyxJQUFBO0FBRUQ7SUFBK0MscUNBQVc7SUFDdEQsMkJBQVksSUFBYTtlQUNyQixrQkFBTSxJQUFJLEVBQUU7WUFDUiwwQkFBMEIsQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsTUFBTTtZQUNuRSwwQkFBMEIsQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsUUFBUTtTQUN4RSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxxQ0FBUyxHQUFULFVBQVUsVUFBa0IsRUFBRSxPQUFxQjtRQUFuRCxpQkFXQztRQVg2Qix3QkFBQSxFQUFBLGFBQXFCO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsZ0JBQWdCO1FBQ2hCLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQU0sVUFBVSxhQUFVLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUssVUFBVSxZQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBQyxVQUFlO1lBQzlDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksS0FBUSxVQUFVLFlBQVMsRUFBRTtnQkFDdEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsVUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFXLEdBQVgsVUFBWSxVQUFrQixFQUFFLE9BQXFCO1FBQXJELGlCQVNDO1FBVCtCLHdCQUFBLEVBQUEsYUFBcUI7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUssVUFBVSxZQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBQyxVQUFlO1lBQzlDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksS0FBUSxVQUFVLFlBQVMsRUFBRTtnQkFDdEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsVUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdDQUFZLEdBQVosVUFBYSxVQUFrQixFQUFFLE9BQXFCO1FBQXRELGlCQVVDO1FBVmdDLHdCQUFBLEVBQUEsYUFBcUI7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBSyxVQUFVLFlBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFDLFVBQWU7Z0JBQzlDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksS0FBUSxVQUFVLFlBQVMsRUFBRTtvQkFDdEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFLLFVBQVUsVUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM5RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTCx3QkFBQztBQUFELENBMURBLEFBMERDLENBMUQ4QyxxQkFBVyxHQTBEekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjog55Sw6ZGrXG4gKiBARGF0ZTogMjAyMC0wNS0xNCAxNDo1OTozNFxuICogQExhc3RFZGl0b3JzOiDnlLDpkatcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDgtMTEgMTU6NDI6MDBcbiAqIEBWZXJzaW9uOiBDb2Nvc0NyZWF0b3IgVjIuMi4yXG4gKiBARGVzY3JpcHRpb246IG51bWJlck9mS2luZCDov57nur9TUElORVxuICovXG5cbmltcG9ydCBTcGluZUNvbW1vbiBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL1NwaW5lQ29tbW9uXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvdXRpbHMvbGliL1NvdW5kTWdyXCI7XG5cblxuXG5cbmNsYXNzIE51bWJlck9mS2luZFNwaW5lUmVzb3VyY2VzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBBVEg6IHN0cmluZyA9IFwiR2FtZXMvQ29tbW9uL1VJL051bWJlck9mS2luZC9TcGluZS9cIjtcbiAgICBwdWJsaWMgc3RhdGljIEtJTkRVUDogc3RyaW5nID0gXCJzcGluZV91aV9mdW5jdGlvbl81a2luZF91cFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgS0lORERPV046IHN0cmluZyA9IFwic3BpbmVfdWlfZnVuY3Rpb25fNWtpbmRfZG93blwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJPZktpbmRTcGluZSBleHRlbmRzIFNwaW5lQ29tbW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHN1cGVyKG5vZGUsIFtcbiAgICAgICAgICAgIE51bWJlck9mS2luZFNwaW5lUmVzb3VyY2VzLlBBVEggKyBOdW1iZXJPZktpbmRTcGluZVJlc291cmNlcy5LSU5EVVAsXG4gICAgICAgICAgICBOdW1iZXJPZktpbmRTcGluZVJlc291cmNlcy5QQVRIICsgTnVtYmVyT2ZLaW5kU3BpbmVSZXNvdXJjZXMuS0lORERPV04sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG51bWJlck9mS2luZOWKqOeUu+WRqOacn1xuICAgICAqIEBwYXJhbSBraW5kTnVtYmVyXG4gICAgICogQHBhcmFtIGhvbGRpbmcg5a2Y5Zyo5pe26Ze0XG4gICAgICovXG4gICAga2luZEN5Y2xlKGtpbmROdW1iZXI6IG51bWJlciwgaG9sZGluZzogbnVtYmVyID0gMS41KSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tOdW1iZXJPZktpbmRTcGluZVJlc291cmNlcy5LSU5EVVBdO1xuICAgICAgICAvLyog5pKt5pS+b2ZLaW5k6L+e57q/6Z+z5pWIXG4gICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdChgdm9fJHtraW5kTnVtYmVyfV9vZl9raW5kYCk7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIGAke2tpbmROdW1iZXJ9X2ZpbmlzaGAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgYCR7a2luZE51bWJlcn1fYnJlYXRoYCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdHJhY2tFbnRyeSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBgJHtraW5kTnVtYmVyfV9icmVhdGhgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgYCR7a2luZE51bWJlcn1fb3ZlcmAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbnVtYmVyT2ZLaW5k6IOM5pmv5Yqo55S75ZGo5pyfXG4gICAgICogQHBhcmFtIGtpbmROdW1iZXJcbiAgICAgKiBAcGFyYW0gaG9sZGluZyDlrZjlnKjml7bpl7RcbiAgICAgKi9cbiAgICBraW5kQ3ljbGVCZyhraW5kTnVtYmVyOiBudW1iZXIsIGhvbGRpbmc6IG51bWJlciA9IDEuNSkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbTnVtYmVyT2ZLaW5kU3BpbmVSZXNvdXJjZXMuS0lORERPV05dO1xuICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBgJHtraW5kTnVtYmVyfV9maW5pc2hgLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uYWRkQW5pbWF0aW9uKDAsIGAke2tpbmROdW1iZXJ9X2JyZWF0aGAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghIXRyYWNrRW50cnkgJiYgdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA9PT0gYCR7a2luZE51bWJlcn1fYnJlYXRoYCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uYWRkQW5pbWF0aW9uKDAsIGAke2tpbmROdW1iZXJ9X292ZXJgLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG51bWJlck9mS2luZOmAmueUqOaWueazlVxuICAgICAqIEBwYXJhbSBraW5kTnVtYmVyXG4gICAgICogQHBhcmFtIGhvbGRpbmdcbiAgICAgKi9cbiAgICBudW1iZXJPZktpbmQoa2luZE51bWJlcjogbnVtYmVyLCBob2xkaW5nOiBudW1iZXIgPSAxLjUpIHtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYCR7a2luZE51bWJlcn1fZmluaXNoYCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNrZWxldG9uLmFkZEFuaW1hdGlvbigwLCBgJHtraW5kTnVtYmVyfV9icmVhdGhgLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF0cmFja0VudHJ5ICYmIHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IGAke2tpbmROdW1iZXJ9X2JyZWF0aGApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5hZGRBbmltYXRpb24oMCwgYCR7a2luZE51bWJlcn1fb3ZlcmAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgaG9sZGluZyk7XG4gICAgfVxufVxuIl19