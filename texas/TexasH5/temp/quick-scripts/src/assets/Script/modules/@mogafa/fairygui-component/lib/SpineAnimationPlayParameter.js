"use strict";
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