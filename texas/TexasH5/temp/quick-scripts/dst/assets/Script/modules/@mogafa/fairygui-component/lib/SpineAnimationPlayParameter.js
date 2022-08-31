
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/SpineAnimationPlayParameter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13a6ajjfINJo4ZJ3mtMVm08', 'SpineAnimationPlayParameter');
// Script/modules/@mogafa/fairygui-component/lib/SpineAnimationPlayParameter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * spin动画播放参数
 */
var SpineAnimationPlayParameter = /** @class */ (function () {
    /**
     * 构造函数
     * @param name 动画名称
     * @param isLoop 是否循环
     */
    function SpineAnimationPlayParameter(name, isLoop) {
        this._animationName = name;
        this._isLoop = isLoop;
    }
    Object.defineProperty(SpineAnimationPlayParameter.prototype, "animationName", {
        /**
         * 获取动画名称
         */
        get: function () {
            return this._animationName;
        },
        /**
         * 设置动画名称
         */
        set: function (value) {
            this._animationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineAnimationPlayParameter.prototype, "isLoop", {
        /**
         * 获取是否循环播放
         */
        get: function () {
            return this._isLoop;
        },
        /**
         * 设置是否循环播放
         */
        set: function (value) {
            this._isLoop = value;
        },
        enumerable: false,
        configurable: true
    });
    return SpineAnimationPlayParameter;
}());
exports.default = SpineAnimationPlayParameter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcU3BpbmVBbmltYXRpb25QbGF5UGFyYW1ldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQVNJOzs7O09BSUc7SUFDSCxxQ0FBWSxJQUFZLEVBQUUsTUFBZTtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBSUQsc0JBQVcsc0RBQWE7UUFIeEI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUF5QixLQUFhO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQU5BO0lBVUQsc0JBQVcsK0NBQU07UUFIakI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFrQixLQUFjO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQU5BO0lBT0wsa0NBQUM7QUFBRCxDQTFDQSxBQTBDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzcGlu5Yqo55S75pKt5pS+5Y+C5pWwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5lQW5pbWF0aW9uUGxheVBhcmFtZXRlciB7XG4gICAgLyoqXG4gICAgICog5Yqo55S75ZCN56ewXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuW+queOr+aSreaUvlxuICAgICAqL1xuICAgIHByaXZhdGUgX2lzTG9vcDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmnoTpgKDlh73mlbBcbiAgICAgKiBAcGFyYW0gbmFtZSDliqjnlLvlkI3np7BcbiAgICAgKiBAcGFyYW0gaXNMb29wIOaYr+WQpuW+queOr1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbk5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9pc0xvb3AgPSBpc0xvb3A7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWKqOeUu+WQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uTmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5Yqo55S75ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIHNldCBhbmltYXRpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uTmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmmK/lkKblvqrnjq/mkq3mlL5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzTG9vcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9vcDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5piv5ZCm5b6q546v5pKt5pS+XG4gICAgICovXG4gICAgcHVibGljIHNldCBpc0xvb3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNMb29wID0gdmFsdWU7XG4gICAgfVxufSJdfQ==