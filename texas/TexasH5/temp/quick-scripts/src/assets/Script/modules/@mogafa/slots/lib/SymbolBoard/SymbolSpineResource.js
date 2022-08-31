"use strict";
cc._RF.push(module, '0be06SpeRxFq5XbyyrwWPK7', 'SymbolSpineResource');
// Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolSpineResource.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SymbolSpineResource = /** @class */ (function () {
    /**
     * 棋子spine资源构造函数
     *
     * @param code 棋子编码
     * @param urls 棋子对应的spine资源列表
     */
    function SymbolSpineResource(code, urls) {
        this._code = code;
        this._urls = urls;
        this._resources = new Map();
    }
    Object.defineProperty(SymbolSpineResource.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineResource.prototype, "urls", {
        get: function () {
            return this._urls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolSpineResource.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    SymbolSpineResource.prototype.addResource = function (name, resource) {
        this._resources.set(name, resource);
    };
    return SymbolSpineResource;
}());
exports.default = SymbolSpineResource;

cc._RF.pop();