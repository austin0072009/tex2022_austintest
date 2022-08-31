
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Coin/Integral.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2c2dioaMFKtYpIYRBviOWq', 'Integral');
// Script/modules/@slotsmaster/ui-common/lib/Coin/Integral.ts

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
exports.Integral = void 0;
var FguiComponentBase_1 = require("../../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var Integral = /** @class */ (function (_super) {
    __extends(Integral, _super);
    function Integral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isCoinSpred = false;
        return _this;
    }
    Object.defineProperty(Integral.prototype, "packageResourceName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Integral.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Integral.prototype, "componentName", {
        get: function () {
            return "Integral";
        },
        enumerable: false,
        configurable: true
    });
    Integral.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._coinNode = this.fguiComponent.node;
    };
    /**
     * 金币飞行动画
     * @param startPos
     * @param endPos
     */
    Integral.prototype.coinFly = function (startPos, endPos) {
        var _this = this;
        this._isCoinSpred = false;
        this._coinNode.zIndex = 2000;
        this._coinNode.scale = 0.4;
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);
        var randomx1 = endPos.x - startPos.x;
        var randomx2 = startPos.x - endPos.x;
        var randomy1 = endPos.y - startPos.y;
        var randomy2 = startPos.y - endPos.y;
        var q1 = cc.v2(0, 0);
        var q2 = cc.v2(0, 0);
        var romx = cc.misc.lerp(-100, 100, Math.random());
        var romy = cc.misc.lerp(-100, 100, Math.random());
        if (romx > 0) {
            q1.x = startPos.x + romx + 100;
        }
        else {
            q1.x = startPos.x + romx - 100;
        }
        if (romy > 0) {
            q1.y = startPos.y + romy + 100;
        }
        else {
            q1.y = startPos.y + romy - 100;
        }
        if (endPos.x > startPos.x) {
            q2.x = q1.x + randomx1 * Math.random();
        }
        else {
            q2.x = q1.x - randomx2 * Math.random();
        }
        if (endPos.y > startPos.y) {
            q2.y = q1.y - randomy1 * Math.random();
        }
        else {
            q2.y = q1.y + randomy2 * Math.random();
        }
        this._coinNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1 / 30)));
        this._coinNode.runAction(cc.sequence(cc.bezierTo(1, [q1, q2, endPos]), cc.callFunc(function () {
            if (_this.fguiComponent.node.isValid) {
                _this.fguiComponent.node.destroy();
            }
        })));
    };
    return Integral;
}(FguiComponentBase_1.default));
exports.Integral = Integral;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxDb2luXFxJbnRlZ3JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0dBQTZGO0FBRzdGO0lBQThCLDRCQUFpQjtJQUEvQztRQUFBLHFFQStFQztRQW5FVyxrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUFtRTFDLENBQUM7SUE5RUcsc0JBQWMseUNBQW1CO2FBQWpDO1lBQ0ksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxpQ0FBVzthQUF6QjtZQUNJLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsbUNBQWE7YUFBM0I7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUtTLHdDQUFxQixHQUEvQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDBCQUFPLEdBQVAsVUFBUSxRQUFpQixFQUFFLE1BQWU7UUFBMUMsaUJBc0RDO1FBckRHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7U0FDbEM7YUFBTTtZQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7U0FDbEM7YUFBTTtZQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUM7YUFBTTtZQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDdkIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDMUM7YUFBTTtZQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDcEIsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNyQztRQUNMLENBQUMsQ0FBQyxDQUNMLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0EvRUEsQUErRUMsQ0EvRTZCLDJCQUFpQixHQStFOUM7QUEvRVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIEludGVncmFsIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkludGVncmFsXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29pbk5vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBfaXNDb2luU3ByZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLl9jb2luTm9kZSA9IHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHkeW4gemjnuihjOWKqOeUu1xuICAgICAqIEBwYXJhbSBzdGFydFBvc1xuICAgICAqIEBwYXJhbSBlbmRQb3NcbiAgICAgKi9cbiAgICBjb2luRmx5KHN0YXJ0UG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5faXNDb2luU3ByZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY29pbk5vZGUuekluZGV4ID0gMjAwMDtcbiAgICAgICAgdGhpcy5fY29pbk5vZGUuc2NhbGUgPSAwLjQ7XG4gICAgICAgIHRoaXMuX2NvaW5Ob2RlLnBvc2l0aW9uID0gY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgMCk7XG5cbiAgICAgICAgbGV0IHJhbmRvbXgxID0gZW5kUG9zLnggLSBzdGFydFBvcy54O1xuXG4gICAgICAgIGxldCByYW5kb214MiA9IHN0YXJ0UG9zLnggLSBlbmRQb3MueDtcblxuICAgICAgICBsZXQgcmFuZG9teTEgPSBlbmRQb3MueSAtIHN0YXJ0UG9zLnk7XG5cbiAgICAgICAgbGV0IHJhbmRvbXkyID0gc3RhcnRQb3MueSAtIGVuZFBvcy55O1xuXG4gICAgICAgIGxldCBxMSA9IGNjLnYyKDAsIDApO1xuICAgICAgICBsZXQgcTIgPSBjYy52MigwLCAwKTtcbiAgICAgICAgbGV0IHJvbXggPSBjYy5taXNjLmxlcnAoLTEwMCwgMTAwLCBNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICBsZXQgcm9teSA9IGNjLm1pc2MubGVycCgtMTAwLCAxMDAsIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIGlmIChyb214ID4gMCkge1xuICAgICAgICAgICAgcTEueCA9IHN0YXJ0UG9zLnggKyByb214ICsgMTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcTEueCA9IHN0YXJ0UG9zLnggKyByb214IC0gMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvbXkgPiAwKSB7XG4gICAgICAgICAgICBxMS55ID0gc3RhcnRQb3MueSArIHJvbXkgKyAxMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxMS55ID0gc3RhcnRQb3MueSArIHJvbXkgLSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kUG9zLnggPiBzdGFydFBvcy54KSB7XG4gICAgICAgICAgICBxMi54ID0gcTEueCArIHJhbmRvbXgxICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHEyLnggPSBxMS54IC0gcmFuZG9teDIgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFBvcy55ID4gc3RhcnRQb3MueSkge1xuICAgICAgICAgICAgcTIueSA9IHExLnkgLSByYW5kb215MSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxMi55ID0gcTEueSArIHJhbmRvbXkyICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb2luTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5mYWRlT3V0KDEgLyAzMCkpKTtcbiAgICAgICAgdGhpcy5fY29pbk5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuYmV6aWVyVG8oMSwgW3ExLCBxMiwgZW5kUG9zXSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=