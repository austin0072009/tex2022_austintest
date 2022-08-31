
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/RollNotifierComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2697euZSUBEBb9sfdhUo3x0', 'RollNotifierComp');
// Games/texas/script/View/RollNotifierComp.ts

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
exports.RollNotifierComp = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var RollNotifierComp = /** @class */ (function (_super) {
    __extends(RollNotifierComp, _super);
    function RollNotifierComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_danMuBg = null;
        _this.ui_danMuTxt = null;
        _this.ui_danButton = null;
        _this.mSpeed = 350.0;
        _this.mNormalQueue = [];
        _this.onLoadEnd = false;
        _this.mImgScaleSpeed = 0.05;
        return _this;
    }
    RollNotifierComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    RollNotifierComp.prototype.AutoSetGoProperty = function () { };
    RollNotifierComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    RollNotifierComp.prototype.MyStartEx = function () {
        if (this.ui_danMuBg == null)
            _super.prototype.AutoSetGoProperty.call(this);
        this.mNormalQueue = [];
        this.mIsPlaying = false;
        this.bgScreenHalfWidth = cc.winSize.width;
        // this.ui_danMuTxt.isCSF = true;
        // gameObject.getOrAddComponent<CanvasGroup>().alpha = 1f;
    };
    RollNotifierComp.prototype.addNotify = function (content) {
        if (this.ui_danButton.visible)
            this.ui_danButton.visible = false;
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(content);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    };
    RollNotifierComp.prototype.addVoicsNotify = function (title, content, pos) {
        this.ui_danButton.clearClick();
        this.ui_danButton.onClick(function () {
            F_TexasViewCtr_1.default.instance.notifyPlayVoice(pos, content);
        });
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(title);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    };
    RollNotifierComp.prototype.DoMove = function () {
        var _this = this;
        this.ui_danMuBg.node.stopAllActions();
        this.mIsPlaying = true;
        var time = ((this.bgScreenHalfWidth + this.danmuBgHalfLength) * 2) / this.mSpeed;
        this.ui_danMuBg.node.runAction(cc.sequence(cc.moveTo(time, cc.v2(-(this.bgScreenHalfWidth + this.danmuBgHalfLength), this.ui_danMuBg.node.y)), cc.callFunc(function () {
            _this.MoveEndCall();
        })));
    };
    RollNotifierComp.prototype.MoveEndCall = function () {
        if (this.fguiComponent == null) {
            return;
        }
        this.ui_danMuBg.node.stopAllActions();
        this.ResetOneText();
        var isHaveNext = this.CheckAndSetCurShowText();
        if (isHaveNext) {
            this.DoMove();
        }
    };
    RollNotifierComp.prototype.CheckAndSetCurShowText = function () {
        if (this.curShowStr != null) {
            return true;
        }
        var str = this.mNormalQueue.length > 0 ? this.mNormalQueue.splice(this.mNormalQueue.length - 1, 1)[0] : null;
        this.curShowStr = str;
        if (this.curShowStr != null) {
            this.fguiComponent.visible = true;
            this.ui_danMuTxt.text = this.curShowStr;
            this.danmuBgHalfLength = this.ui_danMuBg.getChild("bg").width * 0.5;
            this.ui_danMuBg.x = (this.bgScreenHalfWidth + this.danmuBgHalfLength);
        }
        else {
            //没有新的用于显示的文本 则重置状态     
            this.ResetPlayRoll();
        }
        return this.curShowStr != null;
    };
    RollNotifierComp.prototype.ResetPlayRoll = function () {
        this.mIsPlaying = false;
        this.fguiComponent.visible = false;
    };
    RollNotifierComp.prototype.ResetOneText = function () {
        this.curShowStr = null;
    };
    RollNotifierComp.prototype.Hide = function () {
        this.ResetPlayRoll();
        _super.prototype.Hide.call(this);
    };
    return RollNotifierComp;
}(ViewBase_1.default));
exports.RollNotifierComp = RollNotifierComp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFJvbGxOb3RpZmllckNvbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCwyREFBc0Q7QUFDdEQ7SUFBc0Msb0NBQVE7SUFBOUM7UUFBQSxxRUFtSEM7UUFsSFUsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGtCQUFZLEdBQWEsRUFBRSxDQUFDO1FBSTVCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFpRzNCLG9CQUFjLEdBQUcsSUFBSSxDQUFDOztJQU9sQyxDQUFDO0lBdkdHLDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsY0FBc0IsQ0FBQztJQUV2QixrQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU0sb0NBQVMsR0FBaEI7UUFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSTtZQUFFLGlCQUFNLGlCQUFpQixXQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzFDLGlDQUFpQztRQUNqQywwREFB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LEdBQUcsR0FBRyxDQUFDO1FBRXRCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekU7YUFDSTtZQUNELHdCQUF3QjtZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFTSx3Q0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRU0sdUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBSU0sK0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQW5IQSxBQW1IQyxDQW5IcUMsa0JBQVEsR0FtSDdDO0FBbkhZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcbmltcG9ydCBGX1RleGFzVmlld0N0ciBmcm9tICcuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHInO1xuZXhwb3J0IGNsYXNzIFJvbGxOb3RpZmllckNvbXAgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHVibGljIHVpX2Rhbk11Qmc6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2Rhbk11VHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9kYW5CdXR0b246IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1TcGVlZCA9IDM1MC4wO1xuXG4gICAgcHJpdmF0ZSBtTm9ybWFsUXVldWU6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBtSXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHByaXZhdGUgYmdTY3JlZW5IYWxmV2lkdGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgb25Mb2FkRW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIE15U3RhcnQoKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTXlTdGFydEV4KCkge1xuICAgICAgICBpZih0aGlzLnVpX2Rhbk11QmcgPT0gbnVsbCkgc3VwZXIuQXV0b1NldEdvUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5tTm9ybWFsUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5tSXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmdTY3JlZW5IYWxmV2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICAvLyB0aGlzLnVpX2Rhbk11VHh0LmlzQ1NGID0gdHJ1ZTtcbiAgICAgICAgLy8gZ2FtZU9iamVjdC5nZXRPckFkZENvbXBvbmVudDxDYW52YXNHcm91cD4oKS5hbHBoYSA9IDFmO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGROb3RpZnkoY29udGVudDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnVpX2RhbkJ1dHRvbi52aXNpYmxlKVxuICAgICAgICAgICAgdGhpcy51aV9kYW5CdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubU5vcm1hbFF1ZXVlLnB1c2goY29udGVudCk7XG4gICAgICAgIGlmICghdGhpcy5tSXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLk1vdmVFbmRDYWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVm9pY3NOb3RpZnkodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBwb3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVpX2RhbkJ1dHRvbi5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfZGFuQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uubm90aWZ5UGxheVZvaWNlKHBvcywgY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubU5vcm1hbFF1ZXVlLnB1c2godGl0bGUpO1xuICAgICAgICBpZiAoIXRoaXMubUlzUGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5Nb3ZlRW5kQ2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBEb01vdmUoKSB7XG4gICAgICAgIHRoaXMudWlfZGFuTXVCZy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubUlzUGxheWluZyA9IHRydWU7XG4gICAgICAgIGxldCB0aW1lID0gKCh0aGlzLmJnU2NyZWVuSGFsZldpZHRoICsgdGhpcy5kYW5tdUJnSGFsZkxlbmd0aCkgKiAyKSAvIHRoaXMubVNwZWVkO1xuXG4gICAgICAgIHRoaXMudWlfZGFuTXVCZy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLm1vdmVUbyh0aW1lLCBjYy52MigtKHRoaXMuYmdTY3JlZW5IYWxmV2lkdGggKyB0aGlzLmRhbm11QmdIYWxmTGVuZ3RoKSwgdGhpcy51aV9kYW5NdUJnLm5vZGUueSkpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuTW92ZUVuZENhbGwoKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApKVxuICAgIH1cblxuICAgIHB1YmxpYyBNb3ZlRW5kQ2FsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmd1aUNvbXBvbmVudCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLnVpX2Rhbk11Qmcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLlJlc2V0T25lVGV4dCgpO1xuICAgICAgICBsZXQgaXNIYXZlTmV4dCA9IHRoaXMuQ2hlY2tBbmRTZXRDdXJTaG93VGV4dCgpO1xuICAgICAgICBpZiAoaXNIYXZlTmV4dCkge1xuICAgICAgICAgICAgdGhpcy5Eb01vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3VyU2hvd1N0cjogc3RyaW5nO1xuICAgIHByaXZhdGUgZGFubXVCZ0hhbGZMZW5ndGg6IG51bWJlcjtcblxuICAgIHB1YmxpYyBDaGVja0FuZFNldEN1clNob3dUZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jdXJTaG93U3RyICE9IG51bGwpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgbGV0IHN0ciA9IHRoaXMubU5vcm1hbFF1ZXVlLmxlbmd0aCA+IDAgPyB0aGlzLm1Ob3JtYWxRdWV1ZS5zcGxpY2UodGhpcy5tTm9ybWFsUXVldWUubGVuZ3RoIC0gMSwgMSlbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLmN1clNob3dTdHIgPSBzdHI7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VyU2hvd1N0ciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX2Rhbk11VHh0LnRleHQgPSB0aGlzLmN1clNob3dTdHI7XG4gICAgICAgICAgICB0aGlzLmRhbm11QmdIYWxmTGVuZ3RoID0gdGhpcy51aV9kYW5NdUJnLmdldENoaWxkKFwiYmdcIikud2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLnVpX2Rhbk11QmcueCA9ICh0aGlzLmJnU2NyZWVuSGFsZldpZHRoICsgdGhpcy5kYW5tdUJnSGFsZkxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL+ayoeacieaWsOeahOeUqOS6juaYvuekuueahOaWh+acrCDliJnph43nva7nirbmgIEgICAgIFxuICAgICAgICAgICAgdGhpcy5SZXNldFBsYXlSb2xsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJTaG93U3RyICE9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIFJlc2V0UGxheVJvbGwoKSB7XG4gICAgICAgIHRoaXMubUlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZXNldE9uZVRleHQoKSB7XG4gICAgICAgIHRoaXMuY3VyU2hvd1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtSW1nU2NhbGVTcGVlZCA9IDAuMDU7XG5cbiAgICBwdWJsaWMgSGlkZSgpIHtcbiAgICAgICAgdGhpcy5SZXNldFBsYXlSb2xsKCk7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==