"use strict";
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