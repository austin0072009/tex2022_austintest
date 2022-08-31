"use strict";
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