
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Ripple/RippleSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fed02PsVPRKUopnTMtbVyN9', 'RippleSpine');
// Script/modules/@slotsmaster/ui-common/lib/Ripple/RippleSpine.ts

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
var RippleSpineResources = /** @class */ (function () {
    function RippleSpineResources() {
    }
    RippleSpineResources.PATH = "GameHall/Spine/Ripple/";
    RippleSpineResources.RIPPLE = "spine_ui_guanghuan";
    return RippleSpineResources;
}());
var RippleSpine = /** @class */ (function (_super) {
    __extends(RippleSpine, _super);
    function RippleSpine(node) {
        return _super.call(this, node, [RippleSpineResources.PATH + RippleSpineResources.RIPPLE]) || this;
    }
    RippleSpine.prototype.ripple = function () {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.setAnimation(1, "finish", true);
    };
    RippleSpine.prototype.closeRipple = function () {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.clearTrack(1);
    };
    return RippleSpine;
}(SpineCommon_1.default));
exports.default = RippleSpine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxSaXBwbGVcXFJpcHBsZVNwaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUFpRjtBQU1qRjtJQUFBO0lBR0EsQ0FBQztJQUZpQix5QkFBSSxHQUFXLHdCQUF3QixDQUFDO0lBQ3hDLDJCQUFNLEdBQVcsb0JBQW9CLENBQUM7SUFDeEQsMkJBQUM7Q0FIRCxBQUdDLElBQUE7QUFFRDtJQUF5QywrQkFBVztJQUNoRCxxQkFBWSxJQUFhO2VBQ3JCLGtCQUFNLElBQUksRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0saUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxrQkFBQztBQUFELENBZEEsQUFjQyxDQWR3QyxxQkFBVyxHQWNuRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGluZUNvbW1vbiBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL1NwaW5lQ29tbW9uXCI7XG5cblxuXG5cblxuY2xhc3MgUmlwcGxlU3BpbmVSZXNvdXJjZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgUEFUSDogc3RyaW5nID0gXCJHYW1lSGFsbC9TcGluZS9SaXBwbGUvXCI7XG4gICAgcHVibGljIHN0YXRpYyBSSVBQTEU6IHN0cmluZyA9IFwic3BpbmVfdWlfZ3VhbmdodWFuXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpcHBsZVNwaW5lIGV4dGVuZHMgU3BpbmVDb21tb24ge1xuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgc3VwZXIobm9kZSwgW1JpcHBsZVNwaW5lUmVzb3VyY2VzLlBBVEggKyBSaXBwbGVTcGluZVJlc291cmNlcy5SSVBQTEVdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmlwcGxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbUmlwcGxlU3BpbmVSZXNvdXJjZXMuUklQUExFXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMSwgXCJmaW5pc2hcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlUmlwcGxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSB0aGlzLl9yZXNvdXJjZXNbUmlwcGxlU3BpbmVSZXNvdXJjZXMuUklQUExFXTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5jbGVhclRyYWNrKDEpO1xuICAgIH1cbn1cbiJdfQ==