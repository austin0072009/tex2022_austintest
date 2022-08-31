
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38140CuWJFFrKE/0hhxuDPI', 'Popup');
// Script/modules/@slotsmaster/ui-common/lib/Popup.ts

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
exports.Popup = void 0;
var FguiComponentBase_1 = require("../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var SoundMgr_1 = require("../../../@mogafa/utils/lib/SoundMgr");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._closeTime = 3;
        _this._isHideComplete = false;
        _this._isRegisterNodeEvent = true;
        return _this;
    }
    Object.defineProperty(Popup.prototype, "normalNum", {
        get: function () {
            return this._normalNum;
        },
        set: function (value) {
            if (value.length != this.normalNumName.length)
                cc.warn("other数据错误");
            this._normalNum = value;
            this.normalValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Popup.prototype, "goldNum", {
        get: function () {
            return this._goldNum;
        },
        set: function (value) {
            if (value.length != this.goldGrowName.length)
                cc.warn("gold数据错误");
            this._goldNum = value;
            this.goldValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Popup.prototype, "closeTime", {
        get: function () {
            return this._closeTime;
        },
        set: function (value) {
            this._closeTime = value;
            this.openSchedule();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Popup.prototype, "isRegisterNodeEvent", {
        get: function () {
            return this._isRegisterNodeEvent;
        },
        set: function (value) {
            this._isRegisterNodeEvent = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加所有按钮的音效
     * @param fguiComponent
     */
    Popup.prototype.addAllButtonMusic = function (fguiComponent) {
        var _this = this;
        fguiComponent._children.map(function (item) {
            if (item.node.name === "GButton") {
                item.on(fairygui.Event.TOUCH_END, _this.onButtonClickMusic.bind(_this));
            }
        });
    };
    /**
     * 按钮点击播放音效事件
     * 子类重载此方法给按钮绑定音乐
     */
    Popup.prototype.onButtonClickMusic = function () {
        SoundMgr_1.default.getInstance().playEffect("button");
    };
    Popup.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        if (this.basePanel != "" && this.basePanel) {
            this._base = this.fguiComponent.getChild("base").asCom;
            this._base.node.setAnchorPoint(0.5, 0.5);
        }
        this.window.hide();
    };
    Popup.prototype.allChildCreated = function () {
        if (this.basePanel != "" && this.basePanel) {
            this.addAllButtonMusic(this._base);
        }
        else if (this.basePanel == "" || !this.basePanel) {
            this.addAllButtonMusic(this.fguiComponent);
        }
        _super.prototype.allChildCreated.call(this);
        if (this.buttonOKName != "" && this.buttonOKName) {
            if (this.basePanel != "" && this.basePanel) {
                this._base.getChild(this.buttonOKName).onClick(this.hide.bind(this));
            }
            else if (this.basePanel == "" || !this.basePanel) {
                this.fguiComponent.getChild(this.buttonOKName).onClick(this.hide.bind(this));
            }
        }
    };
    Popup.prototype.setIndex = function () {
        this.window.bringToFront();
    };
    Popup.prototype.show = function () {
        this.resetBase();
        if (this.isRegisterNodeEvent) {
            this.fguiComponent.node.on("touchstart", function () { });
        }
        this.window.show();
        this.window.bringToFront();
        this.onPlayShowAni();
        this.openSchedule();
    };
    Popup.prototype.hide = function () {
        this.unschedule(this.callback);
        this.onPlayHideAni();
        if (this._isHideComplete) {
            this._isHideComplete = false;
        }
        else {
            this.window.hide();
        }
        //! 关闭窗口时必须解除事件绑定，否则再次打开时绑定事件将不会生效
        if (this.isRegisterNodeEvent)
            this.fguiComponent.node.off("touchstart");
    };
    Popup.prototype.onPlayShowAni = function () {
        if (this.basePanel != "" && this.basePanel) {
            this._base.node.runAction(cc.scaleTo(0.2, 1, 1).easing(cc.easeIn(0.2)));
        }
    };
    Popup.prototype.onPlayHideAni = function () {
        if (this.basePanel != "" && this.basePanel) {
            var self_1 = this;
            var callBack = cc.callFunc(function () {
                self_1._isHideComplete = true;
                self_1.window.hide();
            });
            this._base.node.runAction(cc.sequence(cc.scaleTo(0.2, 0, 0), callBack));
        }
    };
    Popup.prototype.resetBase = function () {
        if (this.basePanel != "" && this.basePanel) {
            this._base.node.setScale(0.1, 0.1);
        }
    };
    Popup.prototype.goldValue = function () {
        if (this.goldNum.length < 1 || this.goldGrowName.length < 1)
            return;
        if (this.goldNum.length != this.goldGrowName.length)
            cc.warn("金币数据错误");
        if (this.goldNum) {
            for (var i = 0; i < this.goldNum.length; i++) {
                if (this.goldNum[i] === 0) {
                    this.fguiComponent.getChild(this.goldGrowName[i]).asTextField.text = "0";
                }
                else {
                    this.fguiComponent
                        .getChild(this.goldGrowName[i])
                        .asTextField.asMogafaNumberField()
                        .play(0, this.goldNum[i], 3);
                }
            }
        }
    };
    Popup.prototype.normalValue = function () {
        if (this.normalNumName.length != this.normalNum.length)
            cc.warn("other数据错误");
        if (this.normalNum) {
            for (var i = 0; i < this.normalNum.length; i++) {
                this.fguiComponent.getChild(this.normalNumName[i]).asTextField.text = String(this.normalNum[i]);
            }
        }
    };
    Popup.prototype.openSchedule = function () {
        this.unschedule(this.callback);
        if (this.closeTime != -1) {
            this.callback = function () {
                this.hide();
            };
            this.scheduleOnce(this.callback, this._closeTime);
        }
    };
    return Popup;
}(FguiComponentBase_1.FguiWindow));
exports.Popup = Popup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxQb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0ZBQXVGO0FBQ3ZGLGdFQUEyRDtBQUUzRDtJQUFvQyx5QkFBVTtJQUE5QztRQUFBLHFFQTJLQztRQXhLVyxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7O0lBcUtqRCxDQUFDO0lBN0pHLHNCQUFXLDRCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFxQixLQUFlO1lBQ2hDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BTEE7SUFPRCxzQkFBVywwQkFBTzthQU1sQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBUkQsVUFBbUIsS0FBZTtZQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsNEJBQVM7YUFLcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQVBELFVBQXFC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QyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTNLQSxBQTJLQyxDQTNLbUMsOEJBQVUsR0EySzdDO0FBM0txQixzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZndWlXaW5kb3cgfSBmcm9tIFwiLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uLy4uLy4uL0Btb2dhZmEvdXRpbHMvbGliL1NvdW5kTWdyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb3B1cCBleHRlbmRzIEZndWlXaW5kb3cge1xuICAgIHByaXZhdGUgX25vcm1hbE51bTogbnVtYmVyW107XG4gICAgcHJpdmF0ZSBfZ29sZE51bTogbnVtYmVyW107XG4gICAgcHJpdmF0ZSBfY2xvc2VUaW1lOiBudW1iZXIgPSAzO1xuICAgIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX2lzSGlkZUNvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNSZWdpc3Rlck5vZGVFdmVudDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9iYXNlOiBmZ3VpLkdDb21wb25lbnQ7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBhbmltTm9kZSgpOiBjYy5Ob2RlW107IC8v6ZyA6KaB5riQ5Y+Y5Yqo55S76IqC54K5XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBidXR0b25PS05hbWUoKTogc3RyaW5nOyAvL+eCueWHu+aMiemSrlxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgYmFzZVBhbmVsKCk6IHN0cmluZzsgLy/ngrnlh7vmjInpkq5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGdvbGRHcm93TmFtZSgpOiBzdHJpbmdbXTsgLy/ph5HluIHmlofmnKxcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG5vcm1hbE51bU5hbWUoKTogc3RyaW5nW107IC8vb3RoZXJcblxuICAgIHB1YmxpYyBnZXQgbm9ybWFsTnVtKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbE51bTtcbiAgICB9XG4gICAgcHVibGljIHNldCBub3JtYWxOdW0odmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT0gdGhpcy5ub3JtYWxOdW1OYW1lLmxlbmd0aCkgY2Mud2FybihcIm90aGVy5pWw5o2u6ZSZ6K+vXCIpO1xuICAgICAgICB0aGlzLl9ub3JtYWxOdW0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5ub3JtYWxWYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZ29sZE51bSh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPSB0aGlzLmdvbGRHcm93TmFtZS5sZW5ndGgpIGNjLndhcm4oXCJnb2xk5pWw5o2u6ZSZ6K+vXCIpO1xuICAgICAgICB0aGlzLl9nb2xkTnVtID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZ29sZFZhbHVlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnb2xkTnVtKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dvbGROdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZVRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jbG9zZVRpbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vcGVuU2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNsb3NlVGltZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VUaW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzUmVnaXN0ZXJOb2RlRXZlbnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNSZWdpc3Rlck5vZGVFdmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzUmVnaXN0ZXJOb2RlRXZlbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1JlZ2lzdGVyTm9kZUV2ZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDmiYDmnInmjInpkq7nmoTpn7PmlYhcbiAgICAgKiBAcGFyYW0gZmd1aUNvbXBvbmVudFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRBbGxCdXR0b25NdXNpYyhmZ3VpQ29tcG9uZW50OiBmZ3VpLkdDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgZmd1aUNvbXBvbmVudC5fY2hpbGRyZW4ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5ub2RlLm5hbWUgPT09IFwiR0J1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5vbihmYWlyeWd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMub25CdXR0b25DbGlja011c2ljLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ6ZKu54K55Ye75pKt5pS+6Z+z5pWI5LqL5Lu2XG4gICAgICog5a2Q57G76YeN6L295q2k5pa55rOV57uZ5oyJ6ZKu57uR5a6a6Z+z5LmQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uQnV0dG9uQ2xpY2tNdXNpYygpOiB2b2lkIHtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwiYnV0dG9uXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVBhbmVsICE9IFwiXCIgJiYgdGhpcy5iYXNlUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2UgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJiYXNlXCIpLmFzQ29tO1xuICAgICAgICAgICAgdGhpcy5fYmFzZS5ub2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpbmRvdy5oaWRlKCk7XG4gICAgfVxuXG4gICAgYWxsQ2hpbGRDcmVhdGVkKCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlUGFuZWwgIT0gXCJcIiAmJiB0aGlzLmJhc2VQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBbGxCdXR0b25NdXNpYyh0aGlzLl9iYXNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhc2VQYW5lbCA9PSBcIlwiIHx8ICF0aGlzLmJhc2VQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5hZGRBbGxCdXR0b25NdXNpYyh0aGlzLmZndWlDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmFsbENoaWxkQ3JlYXRlZCgpO1xuICAgICAgICBpZiAodGhpcy5idXR0b25PS05hbWUgIT0gXCJcIiAmJiB0aGlzLmJ1dHRvbk9LTmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFzZVBhbmVsICE9IFwiXCIgJiYgdGhpcy5iYXNlUGFuZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlLmdldENoaWxkKHRoaXMuYnV0dG9uT0tOYW1lKS5vbkNsaWNrKHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXNlUGFuZWwgPT0gXCJcIiB8fCAhdGhpcy5iYXNlUGFuZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQodGhpcy5idXR0b25PS05hbWUpLm9uQ2xpY2sodGhpcy5oaWRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzZXRJbmRleCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5kb3cuYnJpbmdUb0Zyb250KCk7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0QmFzZSgpO1xuICAgICAgICBpZiAodGhpcy5pc1JlZ2lzdGVyTm9kZUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vbihcInRvdWNoc3RhcnRcIiwgKCkgPT4geyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpbmRvdy5zaG93KCk7XG4gICAgICAgIHRoaXMud2luZG93LmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICB0aGlzLm9uUGxheVNob3dBbmkoKTtcbiAgICAgICAgdGhpcy5vcGVuU2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY2FsbGJhY2spO1xuICAgICAgICB0aGlzLm9uUGxheUhpZGVBbmkoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzSGlkZUNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0hpZGVDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aW5kb3cuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vISDlhbPpl63nqpflj6Pml7blv4Xpobvop6PpmaTkuovku7bnu5HlrprvvIzlkKbliJnlho3mrKHmiZPlvIDml7bnu5Hlrprkuovku7blsIbkuI3kvJrnlJ/mlYhcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3Rlck5vZGVFdmVudCkgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub2ZmKFwidG91Y2hzdGFydFwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25QbGF5U2hvd0FuaSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVBhbmVsICE9IFwiXCIgJiYgdGhpcy5iYXNlUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2Uubm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIDEsIDEpLmVhc2luZyhjYy5lYXNlSW4oMC4yKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUGxheUhpZGVBbmkoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VQYW5lbCAhPSBcIlwiICYmIHRoaXMuYmFzZVBhbmVsKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgY2FsbEJhY2sgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5faXNIaWRlQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYud2luZG93LmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fYmFzZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMiwgMCwgMCksIGNhbGxCYWNrKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZXNldEJhc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VQYW5lbCAhPSBcIlwiICYmIHRoaXMuYmFzZVBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlLm5vZGUuc2V0U2NhbGUoMC4xLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ29sZFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5nb2xkTnVtLmxlbmd0aCA8IDEgfHwgdGhpcy5nb2xkR3Jvd05hbWUubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nb2xkTnVtLmxlbmd0aCAhPSB0aGlzLmdvbGRHcm93TmFtZS5sZW5ndGgpIGNjLndhcm4oXCLph5HluIHmlbDmja7plJnor69cIik7XG4gICAgICAgIGlmICh0aGlzLmdvbGROdW0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nb2xkTnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29sZE51bVtpXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQodGhpcy5nb2xkR3Jvd05hbWVbaV0pLmFzVGV4dEZpZWxkLnRleHQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZCh0aGlzLmdvbGRHcm93TmFtZVtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hc1RleHRGaWVsZC5hc01vZ2FmYU51bWJlckZpZWxkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbGF5KDAsIHRoaXMuZ29sZE51bVtpXSwgMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3JtYWxWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsTnVtTmFtZS5sZW5ndGggIT0gdGhpcy5ub3JtYWxOdW0ubGVuZ3RoKSBjYy53YXJuKFwib3RoZXLmlbDmja7plJnor69cIik7XG4gICAgICAgIGlmICh0aGlzLm5vcm1hbE51bSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbE51bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZCh0aGlzLm5vcm1hbE51bU5hbWVbaV0pLmFzVGV4dEZpZWxkLnRleHQgPSBTdHJpbmcodGhpcy5ub3JtYWxOdW1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuU2NoZWR1bGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VUaW1lICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2FsbGJhY2ssIHRoaXMuX2Nsb3NlVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=