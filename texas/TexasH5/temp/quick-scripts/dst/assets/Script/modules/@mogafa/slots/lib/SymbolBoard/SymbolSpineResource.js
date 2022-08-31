
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolSpineResource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcU3ltYm9sU3BpbmVSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUk7Ozs7O09BS0c7SUFDSCw2QkFBWSxJQUFZLEVBQUUsSUFBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBQ3pELENBQUM7SUFDRCxzQkFBVyxxQ0FBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcscUNBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDBDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ00seUNBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFFLFFBQXlCO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ltYm9sU3BpbmVSZXNvdXJjZSB7XG4gICAgcHJpdmF0ZSBfY29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3VybHM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgX3Jlc291cmNlczogTWFwPHN0cmluZywgc3AuU2tlbGV0b25EYXRhPjtcbiAgICAvKipcbiAgICAgKiDmo4vlrZBzcGluZei1hOa6kOaehOmAoOWHveaVsFxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGUg5qOL5a2Q57yW56CBXG4gICAgICogQHBhcmFtIHVybHMg5qOL5a2Q5a+55bqU55qEc3BpbmXotYTmupDliJfooahcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBudW1iZXIsIHVybHM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLl91cmxzID0gdXJscztcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VzID0gbmV3IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uRGF0YT4oKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjb2RlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHVybHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJscztcbiAgICB9XG4gICAgcHVibGljIGdldCByZXNvdXJjZXMoKTogTWFwPHN0cmluZywgc3AuU2tlbGV0b25EYXRhPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZXM7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRSZXNvdXJjZShuYW1lOiBzdHJpbmcsIHJlc291cmNlOiBzcC5Ta2VsZXRvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VzLnNldChuYW1lLCByZXNvdXJjZSk7XG4gICAgfVxufVxuIl19