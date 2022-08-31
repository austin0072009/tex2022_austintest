
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Components/Broadcast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32290QNoHtEZpNCIVjGqrXc', 'Broadcast');
// GameHall/script/Lobby/Components/Broadcast.ts

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
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
/**
 * @description 广播
 */
var Broadcast = /** @class */ (function (_super) {
    __extends(Broadcast, _super);
    function Broadcast() {
        var _this = _super.call(this) || this;
        _this.messages = [];
        /**是否正在广播 */
        _this.isOpend = false;
        _this.noticelist = [];
        _this.nowIndex = 0;
        return _this;
    }
    Broadcast.prototype.onConstruct = function () {
        this.textLabel = this.getChild("text").asRichTextField;
        this.bgImg = this.getChild("n2").asImage;
        this.node.opacity = 0;
    };
    Broadcast.prototype.clean = function () {
        this.messages = [];
    };
    Broadcast.prototype.initNotice = function (noticelist) {
        // for (let i = 0; i < noticelist.length; i++) {
        //     let now = Date.now();
        //     let startTime = new Date(noticelist[i].starttime).getTime();
        //     let endTime = new Date(noticelist[i].endtime).getTime();
        //     if ((now >= startTime && now <= endTime) || endTime < 0) {
        //         this.noticelist.push(noticelist[i]);
        //     }
        // }
        // if (this.noticelist.length <= 0) {
        //     return;
        // }
        // this.node.stopAllActions();
        this.isOpend = false;
        this.loopNotice();
    };
    Broadcast.prototype.addNotice = function (Notice) {
        this.noticelist.push(Notice);
    };
    Broadcast.prototype.loopNotice = function () {
        var _this = this;
        this.noticelist = BaseFrameNative_1.BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
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
            }
            else {
                _this.noticelist.splice(_this.nowIndex, 1);
            }
            if (_this.nowIndex > _this.noticelist.length - 1) {
                _this.nowIndex = 0;
                _this.loopNotice();
            }
            // this.loopNotice();
        })));
    };
    Broadcast.prototype.addMessage = function (str, lv) {
        if (lv) {
            this.messages.unshift(str);
        }
        else {
            this.messages.push(str);
        }
        if (!this.isOpend) {
            this.showBroadcast();
        }
    };
    Broadcast.prototype.showBroadcast = function () {
        var _this = this;
        var mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.node.opacity = 0;
            this.bgImg.visible = false;
            return;
        }
        this.bgImg.visible = true;
        this.isOpend = true;
        this.textLabel.text = mess;
        this.textLabel.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () { (_this.node.opacity != 255) && (_this.node.opacity = 255); }), cc.moveBy(10, cc.v2(-(this.textLabel.width + this.node.width), 0)), cc.callFunc(function () {
            _this.textLabel.text = '';
            _this.textLabel.node.x = _this.node.width;
            _this.isOpend = false;
            _this.loopNotice();
            _this.bgImg.visible = false;
            _this.node.opacity = 0;
        })));
    };
    Broadcast.prototype.onDestroy = function () {
        console.log("Broadcast onDestroy");
        this.textLabel.node.stopAllActions();
        this.node.stopAllActions();
    };
    return Broadcast;
}(fgui.GComponent));
exports.default = Broadcast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbXBvbmVudHNcXEJyb2FkY2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBcUU7QUFHckU7O0dBRUc7QUFDSDtJQUF1Qyw2QkFBZTtJQUNsRDtRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQVNNLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFFL0IsWUFBWTtRQUNKLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFZekIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7UUFFMUIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUExQjdCLENBQUM7SUFHUywrQkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQU1NLHlCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBYU0sOEJBQVUsR0FBakIsVUFBa0IsVUFBb0I7UUFDbEMsZ0RBQWdEO1FBQ2hELDRCQUE0QjtRQUM1QixtRUFBbUU7UUFDbkUsK0RBQStEO1FBQy9ELGlFQUFpRTtRQUNqRSwrQ0FBK0M7UUFDL0MsUUFBUTtRQUNSLElBQUk7UUFDSixxQ0FBcUM7UUFDckMsY0FBYztRQUNkLElBQUk7UUFDSiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTSw2QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUks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Q3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0E3SEEsQUE2SEMsQ0E3SHNDLElBQUksQ0FBQyxVQUFVLEdBNkhyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCB7IG5vdGljZSB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5bm/5pKtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm9hZGNhc3QgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJnSW1nOiBmZ3VpLkdJbWFnZTtcclxuICAgIHByaXZhdGUgdGV4dExhYmVsOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwgPSB0aGlzLmdldENoaWxkKFwidGV4dFwiKS5hc1JpY2hUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5iZ0ltZyA9IHRoaXMuZ2V0Q2hpbGQoXCJuMlwiKS5hc0ltYWdlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWVzc2FnZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLyoq5piv5ZCm5q2j5Zyo5bm/5pKtICovXHJcbiAgICBwcml2YXRlIGlzT3BlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL55qE5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgLyoq57uT5p2f55qE5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIGVuZFRpbWU6IG51bWJlcjtcclxuICAgIC8qKuWFrOWRiueahOWGheWuuSAqL1xyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBub3RpY2VsaXN0OiBub3RpY2VbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgbm93SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGluaXROb3RpY2Uobm90aWNlbGlzdDogbm90aWNlW10pIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGljZWxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZShub3RpY2VsaXN0W2ldLnN0YXJ0dGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIC8vICAgICBsZXQgZW5kVGltZSA9IG5ldyBEYXRlKG5vdGljZWxpc3RbaV0uZW5kdGltZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoKG5vdyA+PSBzdGFydFRpbWUgJiYgbm93IDw9IGVuZFRpbWUpIHx8IGVuZFRpbWUgPCAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vdGljZWxpc3QucHVzaChub3RpY2VsaXN0W2ldKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5ub3RpY2VsaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5pc09wZW5kID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb29wTm90aWNlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkTm90aWNlKE5vdGljZTogbm90aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ub3RpY2VsaXN0LnB1c2goTm90aWNlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb29wTm90aWNlKCkge1xyXG4gICAgICAgIHRoaXMubm90aWNlbGlzdCA9IEJhc2VGcmFtZU5hdGl2ZS5icm9hZG5vdGljZTtcclxuICAgICAgICBpZiAodGhpcy5ub3RpY2VsaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5ub3RpY2VsaXN0W3RoaXMubm93SW5kZXhdLmNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh0aGlzLm5vdGljZWxpc3RbdGhpcy5ub3dJbmRleF0uc3RhcnR0aW1lKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUodGhpcy5ub3RpY2VsaXN0W3RoaXMubm93SW5kZXhdLmVuZHRpbWUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm90aWNlbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKG5vdyA+PSB0aGlzLnN0YXJ0VGltZSAmJiBub3cgPD0gdGhpcy5lbmRUaW1lKSB8fCB0aGlzLmVuZFRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWVzc2FnZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWNlbGlzdC5zcGxpY2UodGhpcy5ub3dJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0luZGV4ID4gdGhpcy5ub3RpY2VsaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9vcE5vdGljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvb3BOb3RpY2UoKTtcclxuICAgICAgICAgICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWVzc2FnZShzdHI6IHN0cmluZywgbHY/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGx2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMudW5zaGlmdChzdHIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChzdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCcm9hZGNhc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93QnJvYWRjYXN0KCkge1xyXG4gICAgICAgIGxldCBtZXNzID0gdGhpcy5tZXNzYWdlcy5zaGlmdCgpO1xyXG4gICAgICAgIGlmICghbWVzcykge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJnSW1nLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJnSW1nLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwudGV4dCA9IG1lc3M7XHJcbiAgICAgICAgdGhpcy50ZXh0TGFiZWwubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4geyAodGhpcy5ub2RlLm9wYWNpdHkgIT0gMjU1KSAmJiAodGhpcy5ub2RlLm9wYWNpdHkgPSAyNTUpOyB9KSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgxMCwgY2MudjIoLSh0aGlzLnRleHRMYWJlbC53aWR0aCArIHRoaXMubm9kZS53aWR0aCksIDApKSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRMYWJlbC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0TGFiZWwubm9kZS54ID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9vcE5vdGljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdJbWcudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnJvYWRjYXN0IG9uRGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLnRleHRMYWJlbC5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9XHJcblxyXG59Il19