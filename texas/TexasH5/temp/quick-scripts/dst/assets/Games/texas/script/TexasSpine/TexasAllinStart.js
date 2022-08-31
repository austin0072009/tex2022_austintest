
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/TexasSpine/TexasAllinStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFRleGFzU3BpbmVcXFRleGFzQWxsaW5TdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUdBQWdHO0FBQ2hHLHlEQUFvRDtBQUlwRDtJQUE2QyxtQ0FBVztJQUtwRCx5QkFBWSxJQUFhO1FBQXpCLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDLENBQUMsU0FFdkQ7UUFQTyxlQUFTLEdBQW1CLElBQUksQ0FBQzs7SUFPekMsQ0FBQztJQU5ELHNCQUFjLGdEQUFtQjthQUFqQztZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBTUQsaUNBQU8sR0FBUCxVQUFRLFFBQWtCO1FBQTFCLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBZTtnQkFDOUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxVQUFVLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDMUYsUUFBUSxFQUFFLENBQUM7aUJBQ2Q7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLHdCQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxDQTNCNEMscUJBQVcsR0EyQnZEOztBQUVEO0lBQW9DLGtDQUFXO0lBSTNDLHdCQUFZLElBQWE7ZUFDckIsa0JBQU0sSUFBSSxFQUFFLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDbkQsb0JBQW9CO0lBRXhCLENBQUM7SUFQRCxzQkFBYywrQ0FBbUI7YUFBakM7WUFDSSxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQU9ELGdDQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1Isd0JBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxDQXJCbUMscUJBQVcsR0FxQjlDO0FBckJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5lQ29tbW9uIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9AbW9nYWZhL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvU3BpbmVDb21tb25cIjtcbmltcG9ydCBUaW1lSW5mb01nclRleCBmcm9tIFwiLi4vVmlldy9UaW1lSW5mb01nclRleFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4YXNBbGxpblN0YXJ0IGV4dGVuZHMgU3BpbmVDb21tb24ge1xuICAgIHByaXZhdGUgYWxsaW5LZWVwOiBUZXhhc0FsbGluS2VlcCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRleGFzXCI7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgc3VwZXIobm9kZSwgW1wicmVzL1NwaW5lL2FsbGluX3N0YXJ0L1wiICsgXCJza2VsZXRvblwiXSlcblxuICAgIH1cblxuICAgIGJnU3RhcnQoY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuX3Jlc291cmNlc1tcInNrZWxldG9uXCJdO1xuICAgICAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMSwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF0cmFja0VudHJ5ICYmIHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgPT09IFwiYW5pbWF0aW9uXCIgJiYgdHJhY2tFbnRyeS50cmFja0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLmFkZFRpbWVyTm9DYWxsYmFjayh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLmFsbGluS2VlcC5vbkRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXhhc0FsbGluS2VlcCBleHRlbmRzIFNwaW5lQ29tbW9uIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidGV4YXNcIjtcbiAgICB9XG4gICAgY29uc3RydWN0b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBzdXBlcihub2RlLCBbXCJyZXMvU3BpbmUvYWxsaW5fa2VlcC9cIiArIFwic2tlbGV0b25cIl0pO1xuICAgICAgICAvLyBub2RlLm9wYWNpdHkgPSAxO1xuXG4gICAgfVxuXG4gICAgYmdTdGFydCgpIHtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2tlbGV0b25EYXRhID0gdGhpcy5fcmVzb3VyY2VzW1wic2tlbGV0b25cIl07XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigxLCBcImFuaW1hdGlvblwiLCB0cnVlKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVvdXQpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfVxufSJdfQ==