
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Components/BroadcastView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79131WcwTRKgbollNVeWaUx', 'BroadcastView');
// GameHall/script/Lobby/Components/BroadcastView.ts

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
exports.BroadcastView = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var BroadcastViewCtr_1 = require("./BroadcastViewCtr");
var BroadcastView = /** @class */ (function (_super) {
    __extends(BroadcastView, _super);
    function BroadcastView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_textLabel = null;
        _this.messages = [];
        _this.noticelist = [];
        _this.nowIndex = 0;
        /**是否正在广播 */
        _this.isOpend = false;
        _this.delayTime = 0;
        return _this;
    }
    Object.defineProperty(BroadcastView.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BroadcastView.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BroadcastView.prototype, "componentName", {
        get: function () {
            return "Broadcast";
        },
        enumerable: false,
        configurable: true
    });
    BroadcastView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.node.opacity = 0;
        this.fguiComponent.sortingOrder = 9999;
        BroadcastViewCtr_1.BroadcastViewCtr.instance.view = this;
    };
    BroadcastView.prototype.OnLoadCompleted = function () {
        this.isOpend = false;
        this.loopNotice();
    };
    BroadcastView.prototype.addMessage = function (str, delayTime) {
        if (delayTime === void 0) { delayTime = 0; }
        if (this.messages.includes(str) || this.ui_textLabel.text == str) {
            console.log("Broadcast addMessage 已有");
            return;
        }
        this.messages.push(str);
        this.delayTime = delayTime;
        if (!this.isOpend) {
            this.showBroadcast();
        }
    };
    BroadcastView.prototype.loopNotice = function () {
        var _this = this;
        this.noticelist = BaseFrameNative_1.BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
        this.Show();
        this.content = this.noticelist[this.nowIndex].content;
        this.startTime = new Date(this.noticelist[this.nowIndex].starttime).getTime();
        this.endTime = new Date(this.noticelist[this.nowIndex].endtime).getTime();
        this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            if (_this.noticelist.length <= 0) {
                return;
            }
            var now = Date.now();
            _this.nowIndex += 1;
            if ((now >= _this.startTime && now <= _this.endTime) || _this.endTime < 0) {
                _this.addMessage(_this.content);
                // this.showBroadcast();
            }
            else {
                _this.noticelist.splice(_this.nowIndex, 1);
            }
            if (_this.nowIndex > _this.noticelist.length - 1) {
                _this.nowIndex = 0;
                _this.loopNotice();
            }
        })));
    };
    BroadcastView.prototype.showBroadcast = function () {
        var _this = this;
        var mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.fguiComponent.node.opacity = 0;
            return;
        }
        this.isOpend = true;
        this.ui_textLabel.text = mess;
        this.ui_textLabel.node.x = this.fguiComponent.width;
        this.ui_textLabel.node.runAction(cc.sequence(cc.delayTime(3 + this.delayTime), cc.callFunc(function () { (_this.fguiComponent.node.opacity != 255) && (_this.fguiComponent.node.opacity = 255); }), cc.moveBy(8, cc.v2(-(this.ui_textLabel.node.width + this.fguiComponent.width), 0)), cc.callFunc(function () {
            _this.ui_textLabel.text = '';
            _this.isOpend = false;
            _this.Hide();
            _this.loopNotice();
        })));
    };
    BroadcastView.prototype.onDestroy = function () {
        console.log("BroadcastView onDestroy");
        this.messages = [];
        this.ui_textLabel.node.stopAllActions();
    };
    return BroadcastView;
}(ViewBase_1.default));
exports.BroadcastView = BroadcastView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbXBvbmVudHNcXEJyb2FkY2FzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxzRUFBcUU7QUFFckUsdURBQXNEO0FBRXREO0lBQW1DLGlDQUFRO0lBQTNDO1FBQUEscUVBK0dDO1FBekZXLGtCQUFZLEdBQXdCLElBQUksQ0FBQztRQUUxQyxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBTzFCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFN0IsWUFBWTtRQUNKLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUEyRWxDLENBQUM7SUE5R0csc0JBQWMsOENBQW1CO2FBQWpDO1lBQ0ksT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxzQ0FBVzthQUF6QjtZQUNJLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsd0NBQWE7YUFBM0I7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELDZDQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDdkMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWtCTSxrQ0FBVSxHQUFq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LENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFDTCxvQkFBQztBQUFELENBL0dBLEFBK0dDLENBL0drQyxrQkFBUSxHQStHMUM7QUEvR1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcclxuaW1wb3J0IHsgbm90aWNlIH0gZnJvbSBcIi4uL0xvYmJ5TmV0RGF0YVwiO1xyXG5pbXBvcnQgeyBCcm9hZGNhc3RWaWV3Q3RyIH0gZnJvbSBcIi4vQnJvYWRjYXN0Vmlld0N0clwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJyb2FkY2FzdFZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJHYW1lQ29tbW9uXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ29tbW9uXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJCcm9hZGNhc3RcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc29ydGluZ09yZGVyID0gOTk5OTtcclxuICAgICAgICBCcm9hZGNhc3RWaWV3Q3RyLmluc3RhbmNlLnZpZXcgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLmlzT3BlbmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvb3BOb3RpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX3RleHRMYWJlbDogZmd1aS5HUmljaFRleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBub3RpY2VsaXN0OiBub3RpY2VbXSA9IFtdO1xyXG4gICAgLyoq5byA5aeL55qE5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgLyoq57uT5p2f55qE5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIGVuZFRpbWU6IG51bWJlcjtcclxuICAgIC8qKuWFrOWRiueahOWGheWuuSAqL1xyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG5vd0luZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuaYr+WQpuato+WcqOW5v+aSrSAqL1xyXG4gICAgcHJpdmF0ZSBpc09wZW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlbGF5VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgYWRkTWVzc2FnZShzdHI6IHN0cmluZywgZGVsYXlUaW1lID0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmluY2x1ZGVzKHN0cikgfHwgdGhpcy51aV90ZXh0TGFiZWwudGV4dCA9PSBzdHIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCcm9hZGNhc3QgYWRkTWVzc2FnZSDlt7LmnIlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHN0cik7XHJcbiAgICAgICAgdGhpcy5kZWxheVRpbWUgPSBkZWxheVRpbWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QnJvYWRjYXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb29wTm90aWNlKCkge1xyXG4gICAgICAgIHRoaXMubm90aWNlbGlzdCA9IEJhc2VGcmFtZU5hdGl2ZS5icm9hZG5vdGljZTtcclxuICAgICAgICBpZiAodGhpcy5ub3RpY2VsaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5ub3RpY2VsaXN0W3RoaXMubm93SW5kZXhdLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh0aGlzLm5vdGljZWxpc3RbdGhpcy5ub3dJbmRleF0uc3RhcnR0aW1lKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUodGhpcy5ub3RpY2VsaXN0W3RoaXMubm93SW5kZXhdLmVuZHRpbWUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm90aWNlbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKG5vdyA+PSB0aGlzLnN0YXJ0VGltZSAmJiBub3cgPD0gdGhpcy5lbmRUaW1lKSB8fCB0aGlzLmVuZFRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dCcm9hZGNhc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGljZWxpc3Quc3BsaWNlKHRoaXMubm93SW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub3dJbmRleCA+IHRoaXMubm90aWNlbGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm93SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvb3BOb3RpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93QnJvYWRjYXN0KCkge1xyXG4gICAgICAgIGxldCBtZXNzID0gdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgICAgIGlmICghbWVzcykge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc09wZW5kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVpX3RleHRMYWJlbC50ZXh0ID0gbWVzcztcclxuICAgICAgICB0aGlzLnVpX3RleHRMYWJlbC5ub2RlLnggPSB0aGlzLmZndWlDb21wb25lbnQud2lkdGg7XHJcbiAgICAgICAgdGhpcy51aV90ZXh0TGFiZWwubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMgKyB0aGlzLmRlbGF5VGltZSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7ICh0aGlzLmZndWlDb21wb25lbnQubm9kZS5vcGFjaXR5ICE9IDI1NSkgJiYgKHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLm9wYWNpdHkgPSAyNTUpIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZUJ5KDgsIGNjLnYyKC0odGhpcy51aV90ZXh0TGFiZWwubm9kZS53aWR0aCArIHRoaXMuZmd1aUNvbXBvbmVudC53aWR0aCksIDApKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3RleHRMYWJlbC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09wZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb29wTm90aWNlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnJvYWRjYXN0VmlldyBvbkRlc3Ryb3lcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudWlfdGV4dExhYmVsLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIH1cclxufSJdfQ==