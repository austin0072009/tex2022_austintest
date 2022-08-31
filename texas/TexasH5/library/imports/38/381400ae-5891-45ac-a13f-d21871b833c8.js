"use strict";
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