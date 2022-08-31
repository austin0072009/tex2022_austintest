
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolSpineShowConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3219c7vtJ5LhojyU6NuRi/L', 'SymbolSpineShowConfig');
// Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolSpineShowConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var SymbolSpineShowConfig = /** @class */ (function () {
    /**
     * 构造函数
     *
     * @param code 棋子编码
     * @param spineName spine名称
     * @param spineComponentName spine组件名称
     * @param playParameters 动画播放参数
     * @param skin 皮肤，如果没有指定，使用默认皮肤
     * @param completeCount 播放次数，没有指定为1
     * @param scale 缩放，没有指定为1
     * @param premultipliedAlpha 贴图预乘，没有指定为false 默认为true
     */
    function SymbolSpineShowConfig(code, spineName, spineComponentName, playParameters, skin, completeCount, scale, premultipliedAlpha) {
        this._playParameters = [];
        this._completeCount = 1;
        this._scale = 1;
        this._premultipliedAlpha = true;
        this._code = code;
        this._spineName = spineName;
        this._spineComponentName = spineComponentName;
        this._playParameters = playParameters;
        this._completeCount = completeCount;
        this._scale = scale;
        this._premultipliedAlpha = premultipliedAlpha;
        if (!this._playParameters) {
            this._playParameters = [];
        }
        this._skin = skin;
        if (completeCount == null) {
            this._completeCount = 1;
        }
        if (scale == null) {
            this._scale = 1;
        }
        if (premultipliedAlpha == null) {
            this._premultipliedAlpha = true;
        }
    }
    Object.defineProperty(SymbolSpineShowConfig.prototype, "code", {
        /**
         * 获取棋子编码
         */
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "spineName", {
        /**
         * 获取spine名称
         */
        get: function () {
            return this._spineName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "spineComponentName", {
        /**
         * 获取spine组件名称
         */
        get: function () {
            return this._spineComponentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "playParameters", {
        /**
         * 获取动画播放参数
         */
        get: function () {
            return this._playParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "skin", {
        /**
         * 获取皮肤
         */
        get: function () {
            return this._skin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "completeCount", {
        /**
         * Gets complete count
         * 获取完成计数，当播放次数达到该数值是认为播放结束，
         * 为0表示不计数
         */
        get: function () {
            return this._completeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "scale", {
        /**
         * 获取缩放
         */
        get: function () {
            return this._scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineShowConfig.prototype, "premultipliedAlpha", {
        /**
         * 获取贴图预乘
         */
        get: function () {
            return this._premultipliedAlpha;
        },
        enumerable: false,
        configurable: true
    });
    return SymbolSpineShowConfig;
}());
exports.default = SymbolSpineShowConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcU3ltYm9sU3BpbmVTaG93Q29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0dBRUc7QUFDSDtJQVNJOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsK0JBQ0ksSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLGtCQUEwQixFQUMxQixjQUE2QyxFQUM3QyxJQUFhLEVBQ2IsYUFBc0IsRUFDdEIsS0FBYyxFQUNkLGtCQUE0QjtRQXhCeEIsb0JBQWUsR0FBa0MsRUFBRSxDQUFDO1FBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsd0JBQW1CLEdBQVksSUFBSSxDQUFDO1FBdUJ4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFBO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLGtCQUFrQixJQUFJLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUlELHNCQUFXLHVDQUFJO1FBSGY7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLDRDQUFTO1FBSHBCOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFJRCxzQkFBVyxxREFBa0I7UUFIN0I7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBSUQsc0JBQVcsaURBQWM7UUFIekI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUlELHNCQUFXLHVDQUFJO1FBSGY7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLGdEQUFhO1FBTHhCOzs7O1dBSUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLHdDQUFLO1FBSGhCOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxxREFBa0I7UUFIN0I7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ0wsNEJBQUM7QUFBRCxDQXZHQSxBQXVHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5lQW5pbWF0aW9uUGxheVBhcmFtZXRlciBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9TcGluZUFuaW1hdGlvblBsYXlQYXJhbWV0ZXJcIjtcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bWJvbFNwaW5lU2hvd0NvbmZpZyB7XG4gICAgcHJpdmF0ZSBfY29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NwaW5lTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NwaW5lQ29tcG9uZW50TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NraW46IHN0cmluZztcbiAgICBwcml2YXRlIF9wbGF5UGFyYW1ldGVyczogU3BpbmVBbmltYXRpb25QbGF5UGFyYW1ldGVyW10gPSBbXTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZUNvdW50OiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX3ByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqXG4gICAgICog5p6E6YCg5Ye95pWwXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZSDmo4vlrZDnvJbnoIFcbiAgICAgKiBAcGFyYW0gc3BpbmVOYW1lIHNwaW5l5ZCN56ewXG4gICAgICogQHBhcmFtIHNwaW5lQ29tcG9uZW50TmFtZSBzcGluZee7hOS7tuWQjeensFxuICAgICAqIEBwYXJhbSBwbGF5UGFyYW1ldGVycyDliqjnlLvmkq3mlL7lj4LmlbBcbiAgICAgKiBAcGFyYW0gc2tpbiDnmq7ogqTvvIzlpoLmnpzmsqHmnInmjIflrprvvIzkvb/nlKjpu5jorqTnmq7ogqRcbiAgICAgKiBAcGFyYW0gY29tcGxldGVDb3VudCDmkq3mlL7mrKHmlbDvvIzmsqHmnInmjIflrprkuLoxXG4gICAgICogQHBhcmFtIHNjYWxlIOe8qeaUvu+8jOayoeacieaMh+WumuS4ujFcbiAgICAgKiBAcGFyYW0gcHJlbXVsdGlwbGllZEFscGhhIOi0tOWbvumihOS5mO+8jOayoeacieaMh+WumuS4umZhbHNlIOm7mOiupOS4unRydWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY29kZTogbnVtYmVyLFxuICAgICAgICBzcGluZU5hbWU6IHN0cmluZyxcbiAgICAgICAgc3BpbmVDb21wb25lbnROYW1lOiBzdHJpbmcsXG4gICAgICAgIHBsYXlQYXJhbWV0ZXJzOiBTcGluZUFuaW1hdGlvblBsYXlQYXJhbWV0ZXJbXSxcbiAgICAgICAgc2tpbj86IHN0cmluZyxcbiAgICAgICAgY29tcGxldGVDb3VudD86IG51bWJlcixcbiAgICAgICAgc2NhbGU/OiBudW1iZXIsXG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYT86IGJvb2xlYW4sXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLl9zcGluZU5hbWUgPSBzcGluZU5hbWU7XG4gICAgICAgIHRoaXMuX3NwaW5lQ29tcG9uZW50TmFtZSA9IHNwaW5lQ29tcG9uZW50TmFtZTtcbiAgICAgICAgdGhpcy5fcGxheVBhcmFtZXRlcnMgPSBwbGF5UGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5fY29tcGxldGVDb3VudCA9IGNvbXBsZXRlQ291bnRcbiAgICAgICAgdGhpcy5fc2NhbGUgPSBzY2FsZVxuICAgICAgICB0aGlzLl9wcmVtdWx0aXBsaWVkQWxwaGEgPSBwcmVtdWx0aXBsaWVkQWxwaGFcbiAgICAgICAgaWYgKCF0aGlzLl9wbGF5UGFyYW1ldGVycykge1xuICAgICAgICAgICAgdGhpcy5fcGxheVBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9za2luID0gc2tpbjtcbiAgICAgICAgaWYgKGNvbXBsZXRlQ291bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVDb3VudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NjYWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlbXVsdGlwbGllZEFscGhhID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZW11bHRpcGxpZWRBbHBoYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5qOL5a2Q57yW56CBXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb2RlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5ZzcGluZeWQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3BpbmVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluZU5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlnNwaW5l57uE5Lu25ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIGdldCBzcGluZUNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5lQ29tcG9uZW50TmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5Yqo55S75pKt5pS+5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGdldCBwbGF5UGFyYW1ldGVycygpOiBTcGluZUFuaW1hdGlvblBsYXlQYXJhbWV0ZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5UGFyYW1ldGVycztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W55qu6IKkXG4gICAgICovXG4gICAgcHVibGljIGdldCBza2luKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9za2luO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbXBsZXRlIGNvdW50XG4gICAgICog6I635Y+W5a6M5oiQ6K6h5pWw77yM5b2T5pKt5pS+5qyh5pWw6L6+5Yiw6K+l5pWw5YC85piv6K6k5Li65pKt5pS+57uT5p2f77yMXG4gICAgICog5Li6MOihqOekuuS4jeiuoeaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29tcGxldGVDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVDb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W57yp5pS+XG4gICAgICovXG4gICAgcHVibGljIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6LS05Zu+6aKE5LmYXG4gICAgICovXG4gICAgcHVibGljIGdldCBwcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgfVxufVxuIl19