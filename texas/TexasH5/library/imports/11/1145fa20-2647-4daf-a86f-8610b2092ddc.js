"use strict";
cc._RF.push(module, '1145fogJkdNr6hvhhCyCS3c', 'ButtonLongTouch');
// Script/modules/@mogafa/fairygui-component/lib/ButtonLongTouch.ts

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
exports.ButtonLongTouch = void 0;
var FguiComponentBase_1 = require("./FguiComponentBase");
var doubleState;
(function (doubleState) {
    doubleState[doubleState["init"] = 1] = "init";
    doubleState[doubleState["awake"] = 2] = "awake";
    doubleState[doubleState["end"] = 3] = "end";
})(doubleState || (doubleState = {}));
;
var ButtonLongTouch = /** @class */ (function (_super) {
    __extends(ButtonLongTouch, _super);
    function ButtonLongTouch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //* 是否点击
        _this._isTouch = false;
        //* 点击时间
        _this._touchTime = 0;
        //* 双击间隔
        _this._doubleTime = 0;
        _this._doubleState = doubleState.init;
        return _this;
    }
    Object.defineProperty(ButtonLongTouch.prototype, "packageResourceName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonLongTouch.prototype, "packageName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonLongTouch.prototype, "componentName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    ButtonLongTouch.prototype.registerTouchLong = function (node) {
        this.node = node;
        node.on(cc.Node.EventType.TOUCH_START, this.startTouch.bind(this));
        node.on(cc.Node.EventType.TOUCH_END, this.endTouch.bind(this));
    };
    ButtonLongTouch.prototype.startTouch = function () {
        this._isTouch = true;
        this._touchTime = 0;
    };
    ButtonLongTouch.prototype.endTouch = function () {
        this._isTouch = false;
    };
    ButtonLongTouch.prototype.update = function (dt) {
        if (this._isTouch) {
            this._touchTime++;
            if (this._touchTime > 30) {
                this._isTouch = false;
                this.node.emit("touch-long");
                this._doubleTime = 0;
                this._touchTime = 0;
                return;
            }
            // if(this._doubleTime > 0 && this._doubleTime < 10)
            // {
            //     this._isTouch = false;
            //     this.node.emit("touch-double");
            //     this._doubleTime = 0;
            //     this._touchTime = 0;
            // }
        }
        else {
            if (this._touchTime > 0 && this._touchTime < 30) {
                // if (this._doubleTime < 10 )
                // {
                //    this._doubleTime++;
                // }
                // if( this._doubleTime >= 10)
                // {
                this.node.emit("touch-short");
                this._touchTime = 0;
                this._doubleTime = 0;
                //}
            }
        }
    };
    return ButtonLongTouch;
}(FguiComponentBase_1.default));
exports.ButtonLongTouch = ButtonLongTouch;

cc._RF.pop();