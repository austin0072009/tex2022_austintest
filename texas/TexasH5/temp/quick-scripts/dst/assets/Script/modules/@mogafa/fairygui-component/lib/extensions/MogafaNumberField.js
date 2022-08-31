
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/extensions/MogafaNumberField.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcZXh0ZW5zaW9uc1xcTW9nYWZhTnVtYmVyRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUdqRDtJQUF1QyxxQ0FBWTtJQVUvQywyQkFBWSxTQUEwQjtRQUF0QyxZQUNJLGlCQUFPLFNBS1Y7UUFmTyxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBcUIsSUFBSSxDQUFDO1FBS3pDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUM3QyxDQUFDO0lBRWEsa0NBQWdCLEdBQTlCO1FBQ0ksaUJBQWlCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRWEsb0NBQWtCLEdBQWhDLFVBQWlDLFFBQW1CO1FBQ2hELGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsRUFBRTtZQUNWLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBQ00saUNBQUssR0FBWjtRQUNJLElBQUks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SmQ7OztXQUdHO2FBQ0gsVUFBZSxHQUFXO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQU0sQ0FBQzthQUN2RDtRQUNMLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsa0NBQUc7YUFBZCxVQUFlLEdBQVc7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsSUFBTSxDQUFDO2FBQ3ZEO1FBQ0wsQ0FBQzs7O09BQUE7SUF6R2EsNkJBQVcsR0FBd0IsRUFBRSxDQUFDO0lBMEd4RCx3QkFBQztDQWxIRCxBQWtIQyxDQWxIc0MsRUFBRSxDQUFDLFNBQVMsR0FrSGxEO0FBbEhZLDhDQUFpQjtBQW9IN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFpQixDQUFDLG1CQUFtQixHQUFHO0lBQ2xELE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbGliL1V0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1vZ2FmYU51bWJlckZpZWxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHJ1blRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBtYXhUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfbWluPzogbnVtYmVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9tYXg/OiBudW1iZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2d0ZXh0RmllbGQ/OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2VBcnI6IE1vZ2FmYU51bWJlckZpZWxkW10gPSBbXTtcbiAgICBwcml2YXRlIF9jYWxsYmFjazogRnVuY3Rpb247XG4gICAgY29uc3RydWN0b3IodGV4dEZpZWxkOiBmZ3VpLkdUZXh0RmllbGQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2NoZWR1bGVOdW1iZXIpO1xuICAgICAgICB0aGlzLl9ndGV4dEZpZWxkID0gdGV4dEZpZWxkO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2NoZWR1bGVOdW1iZXIsIDApO1xuICAgICAgICBNb2dhZmFOdW1iZXJGaWVsZC5pbnN0YW5jZUFyci5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJJbnN0YW5jZUFycigpOiB2b2lkIHtcbiAgICAgICAgTW9nYWZhTnVtYmVyRmllbGQuaW5zdGFuY2VBcnIgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZUFycihjYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIE1vZ2FmYU51bWJlckZpZWxkLmluc3RhbmNlQXJyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX21pbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX21heCA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNjaGVkdWxlTnVtYmVyKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBndGV4dEZpZWxkKCk6IGZndWkuR1RleHRGaWVsZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ndGV4dEZpZWxkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtaW4g6K6+572u5byA5aeL5YC8XG4gICAgICogQHBhcmFtIG1heCDorr7nva7nu4jngrnlgLxcbiAgICAgKiBAcGFyYW0gc3RlcCDml7bpl7RcbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHN0ZXA6IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2NoZWR1bGVOdW1iZXIsIDApO1xuICAgICAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgICAgIHRoaXMuX21heCA9IG1heDtcbiAgICAgICAgdGhpcy5tYXhUaW1lID0gc3RlcDtcbiAgICAgICAgdGhpcy5ydW5UaW1lID0gMDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjaGVkdWxlTnVtYmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnJ1blRpbWUgKz0gMC4wMTU7XG4gICAgICAgIGlmICghdGhpcy5tYXhUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX21heCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF4VGltZSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbWluICs9IDEwMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX21pbiA+PSB0aGlzLl9tYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW4gPSB0aGlzLl9tYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuX21pbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmFkaW8gPSB0aGlzLnJ1blRpbWUgLyB0aGlzLm1heFRpbWU7XG5cbiAgICAgICAgICAgIHJhZGlvID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmFkaW8pKTtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gY2MubWlzYy5sZXJwKHRoaXMuX21pbiwgdGhpcy5fbWF4LCByYWRpbyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWF4VGltZSAhPSAtMSAmJiB0aGlzLnJ1blRpbWUgPj0gdGhpcy5tYXhUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYW5jZWxQbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zY2hlZHVsZU51bWJlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5pc2goKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2d0ZXh0RmllbGQudGV4dCA9IFV0aWxzLmZvcm1hdE51bWJlclRvSW50KHZhbHVlLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva5cbiAgICAgKiBAcGFyYW0gbWluIOacgOWwj+WAvFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbWluKG1pbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21pbiA9IG1pbjtcbiAgICAgICAgaWYgKHRoaXMuX21heCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9ndGV4dEZpZWxkLnRleHQgPSBgJHt0aGlzLl9tYXh9LSR7dGhpcy5fbWlufWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNldCBtYXgobWF4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4ID0gbWF4O1xuICAgICAgICBpZiAodGhpcy5fbWluICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2d0ZXh0RmllbGQudGV4dCA9IGAke3RoaXMuX21pbn0tJHt0aGlzLl9tYXh9YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKGZndWkuR09iamVjdC5wcm90b3R5cGUgYXMgYW55KS5hc01vZ2FmYU51bWJlckZpZWxkID0gZnVuY3Rpb24gKCk6IE1vZ2FmYU51bWJlckZpZWxkIHtcbiAgICByZXR1cm4gbmV3IE1vZ2FmYU51bWJlckZpZWxkKHRoaXMuYXNUZXh0RmllbGQpO1xufTtcbiJdfQ==