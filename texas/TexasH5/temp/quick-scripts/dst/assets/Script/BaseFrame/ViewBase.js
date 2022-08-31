
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/ViewBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c815de8iB5JhYjTEhZo/Ysm', 'ViewBase');
// Script/BaseFrame/ViewBase.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var FguiComponentBase_1 = require("../modules/@mogafa/fairygui-component/lib/FguiComponentBase");
/**
 * 获取Class的所有可枚举属性
 * @param type
 */
function getPrototypes(clazz) {
    return Object.getOwnPropertyNames(clazz);
}
/**
 * 首字符包含ui_
 * @param str
 */
var propertyCondition = function (str) {
    return str.slice(0, 3) == "ui_" ? str.slice(3, str.length) : "";
};
/**
 * 内容转换器
 */
var ViewBase = /** @class */ (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mystart = false;
        _this._isDestory = false;
        return _this;
    }
    Object.defineProperty(ViewBase.prototype, "packageResourceName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBase.prototype, "packageName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewBase.prototype, "componentName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    ViewBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.AutoSetGoProperty();
        this._isDestory = false;
        if (this._parentComponent) {
            this._parentComponent.node.addChild(this.fguiComponent.node);
            this.fguiComponent._parent = this._parentComponent;
        }
    };
    ViewBase.prototype.OnLoadStart = function () {
        this._isDestory = false;
    };
    ViewBase.prototype.OnLoadCompleted = function () {
        console.log("--- ViewBase OnLoadCompleted ---");
    };
    ViewBase.prototype.onDestroy = function () {
        _super.prototype.destroy.call(this);
        this._isDestory = true;
    };
    ViewBase.prototype.Show = function () {
        this.node.active = true;
        if (this._fguiComponent) {
            this._fguiComponent.visible = true;
        }
    };
    ViewBase.prototype.Hide = function () {
        this._fguiComponent.visible = false;
        // this.node.active = false;
    };
    ViewBase.prototype.onEnable = function () {
    };
    ViewBase.prototype.onDisable = function () {
    };
    ViewBase.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        this.OnLoadCompleted();
    };
    ViewBase.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnLoadStart();
    };
    ViewBase.prototype.setParentComponent = function (parentComponent) {
        this._parentComponent = parentComponent;
    };
    ViewBase.prototype.AutoSetGoProperty = function () {
        var e_1, _a;
        // 判断是不是类
        var prototypes = getPrototypes(this);
        var childrenMap = new Map();
        childrenMap = this.FindChildren(this.fguiComponent);
        try {
            for (var prototypes_1 = __values(prototypes), prototypes_1_1 = prototypes_1.next(); !prototypes_1_1.done; prototypes_1_1 = prototypes_1.next()) {
                var Key = prototypes_1_1.value;
                var getKey = propertyCondition(Key);
                if (getKey == "")
                    continue;
                if (childrenMap.has(getKey)) {
                    this[Key] = childrenMap.get(getKey);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (prototypes_1_1 && !prototypes_1_1.done && (_a = prototypes_1.return)) _a.call(prototypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ViewBase.prototype.FindChildren = function (view) {
        var e_2, _a;
        var childrenMap = new Map();
        if (view._children == null)
            return childrenMap;
        try {
            for (var _b = __values(view._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                childrenMap.set(child._name, child);
                var temp = this.FindChildren(child);
                if (temp.size > 0) {
                    temp.forEach(function (value, key) {
                        childrenMap.set(key, value);
                    });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return childrenMap;
    };
    return ViewBase;
}(FguiComponentBase_1.default));
exports.default = ViewBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFZpZXdCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUdBQTRGO0FBRzVGOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUFJLEtBQVE7SUFDOUIsT0FBTyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVEOzs7R0FHRztBQUNILElBQU0saUJBQWlCLEdBQUcsVUFBVSxHQUFXO0lBQzNDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNIO0lBQXNDLDRCQUFpQjtJQUF2RDtRQUFBLHFFQXdHQztRQTdGVSxhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQTJGdkMsQ0FBQztJQXRHRyxzQkFBYyx5Q0FBbUI7YUFBakM7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsaUNBQVc7YUFBekI7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsbUNBQWE7YUFBM0I7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBS0Qsd0NBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJ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QUFHO3dCQUNwQixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUE7aUJBQ0w7YUFDSjs7Ozs7Ozs7O1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXhHQSxBQXdHQyxDQXhHcUMsMkJBQWlCLEdBd0d0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vbW9kdWxlcy9AbW9nYWZhL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvRmd1aUNvbXBvbmVudEJhc2VcIjtcblxuXG4vKipcbiAqIOiOt+WPlkNsYXNz55qE5omA5pyJ5Y+v5p6a5Li+5bGe5oCnXG4gKiBAcGFyYW0gdHlwZVxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGVzPFQ+KGNsYXp6OiBUKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNsYXp6KTtcbn1cblxuLyoqXG4gKiDpppblrZfnrKbljIXlkKt1aV9cbiAqIEBwYXJhbSBzdHJcbiAqL1xuY29uc3QgcHJvcGVydHlDb25kaXRpb24gPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIDMpID09IFwidWlfXCIgPyBzdHIuc2xpY2UoMywgc3RyLmxlbmd0aCkgOiBcIlwiO1xufTtcblxuLyoqXG4gKiDlhoXlrrnovazmjaLlmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0Jhc2UgZXh0ZW5kcyBGZ3VpQ29tcG9uZW50QmFzZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIG15c3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9wYXJlbnRDb21wb25lbnQ6IGZndWkuR0NvbXBvbmVudDtcbiAgICBwdWJsaWMgX2lzRGVzdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5BdXRvU2V0R29Qcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLl9pc0Rlc3RvcnkgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5fcGFyZW50Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRDb21wb25lbnQubm9kZS5hZGRDaGlsZCh0aGlzLmZndWlDb21wb25lbnQubm9kZSk7XG4gICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuX3BhcmVudCA9IHRoaXMuX3BhcmVudENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9uTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9pc0Rlc3RvcnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFZpZXdCYXNlIE9uTG9hZENvbXBsZXRlZCAtLS1cIik7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2lzRGVzdG9yeSA9IHRydWU7XG4gICAgfVxuXG4gICAgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgSGlkZSgpIHtcbiAgICAgICAgdGhpcy5fZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcblxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcblxuICAgIH1cblxuICAgIGFsbENoaWxkQ3JlYXRlZCgpIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgIHRoaXMuT25Mb2FkQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgdGhpcy5PbkxvYWRTdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYXJlbnRDb21wb25lbnQocGFyZW50Q29tcG9uZW50OiBmZ3VpLkdDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50Q29tcG9uZW50ID0gcGFyZW50Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBBdXRvU2V0R29Qcm9wZXJ0eSgpIHtcbiAgICAgICAgLy8g5Yik5pat5piv5LiN5piv57G7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZXMgPSBnZXRQcm90b3R5cGVzKHRoaXMpO1xuICAgICAgICBsZXQgY2hpbGRyZW5NYXA6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICAgICAgICBjaGlsZHJlbk1hcCA9IHRoaXMuRmluZENoaWxkcmVuKHRoaXMuZmd1aUNvbXBvbmVudClcblxuICAgICAgICBmb3IgKGNvbnN0IEtleSBvZiBwcm90b3R5cGVzKSB7XG4gICAgICAgICAgICBjb25zdCBnZXRLZXkgPSBwcm9wZXJ0eUNvbmRpdGlvbihLZXkpO1xuICAgICAgICAgICAgaWYgKGdldEtleSA9PSBcIlwiKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbk1hcC5oYXMoZ2V0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNbS2V5XSA9IGNoaWxkcmVuTWFwLmdldChnZXRLZXkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIEZpbmRDaGlsZHJlbih2aWV3OiBhbnkpOiBNYXA8c3RyaW5nLCBhbnk+IHtcbiAgICAgICAgbGV0IGNoaWxkcmVuTWFwOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICAgICAgaWYgKHZpZXcuX2NoaWxkcmVuID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5NYXA7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygdmlldy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuTWFwLnNldChjaGlsZC5fbmFtZSwgY2hpbGQpXG4gICAgICAgICAgICBsZXQgdGVtcDogTWFwPHN0cmluZywgYW55PiA9IHRoaXMuRmluZENoaWxkcmVuKGNoaWxkKVxuICAgICAgICAgICAgaWYgKHRlbXAuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZW1wLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5NYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRyZW5NYXA7XG4gICAgfVxufSJdfQ==