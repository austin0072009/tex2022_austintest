
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/TexasSpine/TexasBigWinSpin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFRleGFzU3BpbmVcXFRleGFzQmlnV2luU3Bpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxR0FBZ0c7QUFDaEcseURBQW9EO0FBR3BELElBQU0sZ0JBQWdCLEdBQUc7SUFDckIsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QixLQUFLLEVBQUUsVUFBVTtDQUNwQixDQUFDO0FBRUY7SUFBNkMsbUNBQVc7SUFJcEQseUJBQVksSUFBYTtlQUNyQixrQkFBTSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUxELHNCQUFjLGdEQUFtQjthQUFqQztZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBS0QsaUNBQU8sR0FBUDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBZTtnQkFDOUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDL0M7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLHdCQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QjRDLHFCQUFXLEdBeUJ2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGluZUNvbW1vbiBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL1NwaW5lQ29tbW9uXCI7XG5pbXBvcnQgVGltZUluZm9NZ3JUZXggZnJvbSBcIi4uL1ZpZXcvVGltZUluZm9NZ3JUZXhcIjtcblxuXG5jb25zdCBmcmVlU3BpblJlc291cmNlID0ge1xuICAgIFBBVEg6IFwicmVzL1NwaW5lL2JpZ3dpbi9cIixcbiAgICBTSElORTogXCJza2VsZXRvblwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4YXNCaWdXaW5TcGluIGV4dGVuZHMgU3BpbmVDb21tb24ge1xuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0ZXhhc1wiO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHN1cGVyKG5vZGUsIFtmcmVlU3BpblJlc291cmNlLlBBVEggKyBmcmVlU3BpblJlc291cmNlLlNISU5FXSlcbiAgICB9XG5cbiAgICBiZ1N0YXJ0KCkge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbZnJlZVNwaW5SZXNvdXJjZS5TSElORV07XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigxLCBcInN0YXJ0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhdHJhY2tFbnRyeSAmJiB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09PSBcInN0YXJ0XCIgJiYgdHJhY2tFbnRyeS50cmFja0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tmcmVlU3BpblJlc291cmNlLlNISU5FXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5hZGRUaW1lck5vQ2FsbGJhY2sodGltZW91dCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG59Il19