
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/ButtonLongTouch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcQnV0dG9uTG9uZ1RvdWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx5REFBb0Q7QUFDcEQsSUFBSyxXQUlKO0FBSkQsV0FBSyxXQUFXO0lBQ1osNkNBQVEsQ0FBQTtJQUNSLCtDQUFTLENBQUE7SUFDVCwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUpJLFdBQVcsS0FBWCxXQUFXLFFBSWY7QUFBQSxDQUFDO0FBQ0Y7SUFBcUMsbUNBQWlCO0lBQXREO1FBQUEscUVBb0VDO1FBMURHLFFBQVE7UUFDQSxjQUFRLEdBQVksS0FBSyxDQUFDO1FBQ2xDLFFBQVE7UUFDQSxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUMvQixRQUFRO1FBQ0EsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBZ0IsV0FBVyxDQUFDLElBQUksQ0FBQzs7SUFvRHpELENBQUM7SUFuRUcsc0JBQWMsZ0RBQW1CO2FBQWpDO1lBQ0ksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx3Q0FBVzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsMENBQWE7YUFBM0I7WUFDSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQVNELDJDQUFpQixHQUFqQixVQUFrQixJQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxvREFBb0Q7WUFDcEQsSUFBSTtZQUNKLDZCQUE2QjtZQUM3QixzQ0FBc0M7WUFDdEMsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQixJQUFJO1NBQ1A7YUFDSTtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7Z0JBQzdDLDhCQUE4QjtnQkFDOUIsSUFBSTtnQkFDSix5QkFBeUI7Z0JBQ3pCLElBQUk7Z0JBQ0osOEJBQThCO2dCQUM5QixJQUFJO2dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUc7YUFFTjtTQUNKO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRW9DLDJCQUFpQixHQW9FckQ7QUFwRVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuL0ZndWlDb21wb25lbnRCYXNlXCI7XG5lbnVtIGRvdWJsZVN0YXRlIHtcbiAgICBpbml0ID0gMSxcbiAgICBhd2FrZSA9IDIsXG4gICAgZW5kID0gMyxcbn07XG5leHBvcnQgY2xhc3MgQnV0dG9uTG9uZ1RvdWNoIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyog5piv5ZCm54K55Ye7XG4gICAgcHJpdmF0ZSBfaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vKiDngrnlh7vml7bpl7RcbiAgICBwcml2YXRlIF90b3VjaFRpbWU6IG51bWJlciA9IDA7XG4gICAgLy8qIOWPjOWHu+mXtOmalFxuICAgIHByaXZhdGUgX2RvdWJsZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZG91YmxlU3RhdGU6IGRvdWJsZVN0YXRlID0gZG91YmxlU3RhdGUuaW5pdDtcblxuICAgIHJlZ2lzdGVyVG91Y2hMb25nKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdGFydFRvdWNoLmJpbmQodGhpcykpO1xuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbmRUb3VjaC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzdGFydFRvdWNoKCkge1xuICAgICAgICB0aGlzLl9pc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG91Y2hUaW1lID0gMDtcbiAgICB9XG5cbiAgICBlbmRUb3VjaCgpIHtcbiAgICAgICAgdGhpcy5faXNUb3VjaCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1RvdWNoKSB7XG4gICAgICAgICAgICB0aGlzLl90b3VjaFRpbWUrKztcbiAgICAgICAgICAgIGlmICh0aGlzLl90b3VjaFRpbWUgPiAzMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcInRvdWNoLWxvbmdcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZG91YmxlVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG91Y2hUaW1lID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmKHRoaXMuX2RvdWJsZVRpbWUgPiAwICYmIHRoaXMuX2RvdWJsZVRpbWUgPCAxMClcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9pc1RvdWNoID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmVtaXQoXCJ0b3VjaC1kb3VibGVcIik7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fZG91YmxlVGltZSA9IDA7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fdG91Y2hUaW1lID0gMDtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90b3VjaFRpbWUgPiAwICYmIHRoaXMuX3RvdWNoVGltZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2RvdWJsZVRpbWUgPCAxMCApXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuX2RvdWJsZVRpbWUrKztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gaWYoIHRoaXMuX2RvdWJsZVRpbWUgPj0gMTApXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwidG91Y2gtc2hvcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG91Y2hUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9kb3VibGVUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19