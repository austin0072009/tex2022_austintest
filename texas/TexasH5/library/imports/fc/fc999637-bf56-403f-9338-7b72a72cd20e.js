"use strict";
cc._RF.push(module, 'fc999Y3v1ZAP5M4e3KnLNIO', 'MogafaNumberField');
// Script/modules/@mogafa/fairygui-component/lib/extensions/MogafaNumberField.ts

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
exports.MogafaNumberField = void 0;
var Utils_1 = require("../../../utils/lib/Utils");
var MogafaNumberField = /** @class */ (function (_super) {
    __extends(MogafaNumberField, _super);
    function MogafaNumberField(textField) {
        var _this = _super.call(this) || this;
        _this.runTime = 0;
        _this.maxTime = 0;
        _this.running = false;
        _this._min = null;
        _this._max = null;
        _this._gtextField = null;
        _this.unschedule(_this.scheduleNumber);
        _this._gtextField = textField;
        _this.schedule(_this.scheduleNumber, 0);
        MogafaNumberField.instanceArr.push(_this);
        return _this;
    }
    MogafaNumberField.clearInstanceArr = function () {
        MogafaNumberField.instanceArr = [];
    };
    MogafaNumberField.destroyInstanceArr = function (callback) {
        MogafaNumberField.instanceArr.map(function (item, index) {
            item.clear();
        });
        if (callback) {
            callback();
        }
    };
    MogafaNumberField.prototype.clear = function () {
        this._min = null;
        this._max = null;
        this.unschedule(this.scheduleNumber);
    };
    Object.defineProperty(MogafaNumberField.prototype, "gtextField", {
        get: function () {
            return this._gtextField;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param min 设置开始值
     * @param max 设置终点值
     * @param step 时间
     */
    MogafaNumberField.prototype.play = function (min, max, step, callback) {
        this.schedule(this.scheduleNumber, 0);
        this._min = min;
        this._max = max;
        this.maxTime = step;
        this.runTime = 0;
        this.running = true;
        this._callback = callback;
    };
    MogafaNumberField.prototype.scheduleNumber = function () {
        if (!this.running)
            return;
        this.runTime += 0.015;
        if (!this.maxTime) {
            this.setValue(this._max);
        }
        if (this.maxTime == -1) {
            this._min += 100;
            if (this._min >= this._max) {
                this._min = this._max;
            }
            this.setValue(this._min);
        }
        else {
            var radio = this.runTime / this.maxTime;
            radio = Math.max(0, Math.min(1, radio));
            var value = cc.misc.lerp(this._min, this._max, radio);
            if (value) {
                this.setValue(value);
            }
            if (this.maxTime != -1 && this.runTime >= this.maxTime) {
                this.running = false;
                this.finish();
            }
        }
    };
    MogafaNumberField.prototype.cancelPlay = function () {
        this.unschedule(this.scheduleNumber);
    };
    MogafaNumberField.prototype.finish = function () {
        if (this._callback) {
            this._callback();
        }
    };
    MogafaNumberField.prototype.setValue = function (value) {
        this._gtextField.text = Utils_1.Utils.formatNumberToInt(value, 0);
    };
    Object.defineProperty(MogafaNumberField.prototype, "min", {
        /**
         * 设置
         * @param min 最小值
         */
        set: function (min) {
            this._min = min;
            if (this._max != null) {
                this._gtextField.text = this._max + "-" + this._min;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MogafaNumberField.prototype, "max", {
        set: function (max) {
            this._max = max;
            if (this._min != null) {
                this._gtextField.text = this._min + "-" + this._max;
            }
        },
        enumerable: false,
        configurable: true
    });
    MogafaNumberField.instanceArr = [];
    return MogafaNumberField;
}(cc.Component));
exports.MogafaNumberField = MogafaNumberField;
fgui.GObject.prototype.asMogafaNumberField = function () {
    return new MogafaNumberField(this.asTextField);
};

cc._RF.pop();