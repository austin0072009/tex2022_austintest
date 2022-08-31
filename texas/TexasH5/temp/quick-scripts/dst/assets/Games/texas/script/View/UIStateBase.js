
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/UIStateBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d3e9rMxslOvpLGnAHyx0Bl', 'UIStateBase');
// Games/texas/script/View/UIStateBase.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIStateBase = /** @class */ (function (_super) {
    __extends(UIStateBase, _super);
    function UIStateBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.StateToActive = false; //true:表示state<0时隐藏对象本身,false:自身不受state控制
        _this.state = 0;
        _this.preObj = null;
        _this.onLoadEnd = false;
        return _this;
    }
    Object.defineProperty(UIStateBase.prototype, "State", {
        get: function () {
            return this.state;
        },
        set: function (value) {
            this.SetState(value);
        },
        enumerable: false,
        configurable: true
    });
    UIStateBase.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    UIStateBase.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    UIStateBase.prototype.MyStartEx = function () {
        // super.AutoSetGoProperty();
        if (this.image == null) {
            if (this.node.name == "GLoader")
                this.image = this.fguiComponent.asLoader;
        }
        if (this.text == null) {
            if (this.node.name == "GTextField")
                this.text = this.fguiComponent.asTextField;
        }
        this.HideObjs();
        this.SetState(this.state);
    };
    UIStateBase.prototype.AutoSetGoProperty = function () { };
    UIStateBase.prototype.SetState = function (state) {
        this.state = state;
        if (this.StateToActive) {
            this.fguiComponent.visible = (state >= 0);
        }
        this.ShowObj(this.state);
        this.ShowSprite(state);
        this.ShowText(state);
    };
    UIStateBase.prototype.ShowSprite = function (state) {
        if (state < 0) {
            return;
        }
        if (this.sprites != null && this.sprites.length > state && this.image != null) {
            this.image.url = this.sprites[state];
        }
    };
    UIStateBase.prototype.ShowText = function (state) {
        if (state < 0) {
            return;
        }
        if (this.texts != null && this.texts.length > state && this.text != null) {
            this.text.text = this.texts[state];
        }
    };
    UIStateBase.prototype.HideObjs = function () {
        if (this.objs == null) {
            return;
        }
        for (var i = 0; i < this.objs.length; i++) {
            this.objs[i].visible = false;
        }
    };
    UIStateBase.prototype.ShowObj = function (state) {
        this.HidePreObj();
        if (state < 0) {
            return;
        } // state 小于 0 默认隐藏全部
        if (this.objs == null || this.objs.length <= state) {
            return;
        }
        this.objs[state].visible = true;
        this.preObj = this.objs[state];
    };
    UIStateBase.prototype.HidePreObj = function () {
        if (this.preObj != null) {
            this.preObj.visible = false;
        }
    };
    UIStateBase.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    UIStateBase.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    return UIStateBase;
}(ViewBase_1.default));
exports.default = UIStateBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFVJU3RhdGVCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUU3RDtJQUF5QywrQkFBUTtJQUFqRDtRQUFBLHFFQStGQztRQTlGVSxtQkFBYSxHQUFHLEtBQUssQ0FBQyxDQUFBLHlDQUF5QztRQUMvRCxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBYVQsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFHLEtBQUssQ0FBQzs7SUE4RTlCLENBQUM7SUE1Rkcsc0JBQVcsOEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQWFELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLDZCQUE2QjtRQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTO2dCQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUE7U0FBRTtRQUNyRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFF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O1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSwwQkFBSSxHQUFYO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0EvRkEsQUErRkMsQ0EvRndDLGtCQUFRLEdBK0ZoRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN0YXRlQmFzZSBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwdWJsaWMgU3RhdGVUb0FjdGl2ZSA9IGZhbHNlOy8vdHJ1ZTrooajnpLpzdGF0ZTww5pe26ZqQ6JeP5a+56LGh5pys6LqrLGZhbHNlOuiHqui6q+S4jeWPl3N0YXRl5o6n5Yi2XG4gICAgcHVibGljIHN0YXRlID0gMDtcbiAgICBwdWJsaWMgZ2V0IFN0YXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFN0YXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5TZXRTdGF0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGltYWdlOiBmZ3VpLkdMb2FkZXI7XG4gICAgcHVibGljIHRleHQ6IGZndWkuR1RleHRGaWVsZDtcbiAgICBwdWJsaWMgc3ByaXRlczogc3RyaW5nW107XG4gICAgcHVibGljIHRleHRzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgb2JqczogZmd1aS5HT2JqZWN0W107XG4gICAgcHJpdmF0ZSBwcmVPYmo6IGZndWkuR09iamVjdCA9IG51bGw7XG5cbiAgICBwcml2YXRlIG9uTG9hZEVuZCA9IGZhbHNlO1xuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5teXN0YXJ0KSB0aGlzLk15U3RhcnRFeCgpO1xuICAgIH1cblxuICAgIE15U3RhcnQoKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIC8vIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG4gICAgICAgIGlmICh0aGlzLmltYWdlID09IG51bGwpIHsgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiR0xvYWRlclwiKSB0aGlzLmltYWdlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmFzTG9hZGVyIH1cbiAgICAgICAgaWYgKHRoaXMudGV4dCA9PSBudWxsKSB7IGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIkdUZXh0RmllbGRcIikgdGhpcy50ZXh0ID0gdGhpcy5mZ3VpQ29tcG9uZW50LmFzVGV4dEZpZWxkOyB9XG4gICAgICAgIHRoaXMuSGlkZU9ianMoKTtcblxuICAgICAgICB0aGlzLlNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuXG5cblxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIHB1YmxpYyBTZXRTdGF0ZShzdGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuU3RhdGVUb0FjdGl2ZSkgeyB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IChzdGF0ZSA+PSAwKTsgfVxuICAgICAgICB0aGlzLlNob3dPYmoodGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMuU2hvd1Nwcml0ZShzdGF0ZSk7XG4gICAgICAgIHRoaXMuU2hvd1RleHQoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2hvd1Nwcml0ZShzdGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzdGF0ZSA8IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlcyAhPSBudWxsICYmIHRoaXMuc3ByaXRlcy5sZW5ndGggPiBzdGF0ZSAmJiB0aGlzLmltYWdlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudXJsID0gdGhpcy5zcHJpdGVzW3N0YXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgU2hvd1RleHQoc3RhdGU6IG51bWJlcikge1xuICAgICAgICBpZiAoc3RhdGUgPCAwKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy50ZXh0cyAhPSBudWxsICYmIHRoaXMudGV4dHMubGVuZ3RoID4gc3RhdGUgJiYgdGhpcy50ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0c1tzdGF0ZV07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgSGlkZU9ianMoKSB7XG4gICAgICAgIGlmICh0aGlzLm9ianMgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub2Jqc1tpXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIFNob3dPYmooc3RhdGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkhpZGVQcmVPYmooKTtcbiAgICAgICAgaWYgKHN0YXRlIDwgMCkgeyByZXR1cm47IH0gLy8gc3RhdGUg5bCP5LqOIDAg6buY6K6k6ZqQ6JeP5YWo6YOoXG4gICAgICAgIGlmICh0aGlzLm9ianMgPT0gbnVsbCB8fCB0aGlzLm9ianMubGVuZ3RoIDw9IHN0YXRlKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLm9ianNbc3RhdGVdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByZU9iaiA9IHRoaXMub2Jqc1tzdGF0ZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBIaWRlUHJlT2JqKCkge1xuICAgICAgICBpZiAodGhpcy5wcmVPYmogIT0gbnVsbCkgeyB0aGlzLnByZU9iai52aXNpYmxlID0gZmFsc2U7IH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSGlkZSgpIHtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufSJdfQ==