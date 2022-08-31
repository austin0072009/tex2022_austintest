"use strict";
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