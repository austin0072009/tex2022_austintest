
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/FguiComponentBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a86e1QLP61Bgr52Il/S6GTe', 'FguiComponentBase');
// Script/modules/@mogafa/fairygui-component/lib/FguiComponentBase.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FguiWindow = void 0;
var EventReporter_1 = require("./analytics/EventReporter");
var IocContainer_1 = require("./IocContainer");
var EmptyLogEventReporter_1 = require("./analytics/EmptyLogEventReporter");
var AppConst_1 = require("../../../@slotsmaster/ui-common/lib/AppConst");
var ccclass = cc._decorator.ccclass;
var FguiComponentBase = /** @class */ (function (_super) {
    __extends(FguiComponentBase, _super);
    function FguiComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._children = [];
        _this._created = false;
        _this._allChildCreatedExecuted = false;
        _this._fguiComponentList = [];
        return _this;
        //#endregion
    }
    Object.defineProperty(FguiComponentBase.prototype, "needProcess", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (bool) {
            this._active = bool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "fguiComponentList", {
        get: function () {
            return this._fguiComponentList;
        },
        set: function (component) {
            this._fguiComponentList = component;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "fguiX", {
        get: function () {
            if (this._fguiComponent) {
                this._fguiX = this._fguiComponent.x;
            }
            return this._fguiX;
        },
        set: function (x) {
            if (x || x == 0) {
                if (this._fguiComponent) {
                    this._fguiComponent.x = x;
                }
                this._fguiX = x;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "fguiY", {
        get: function () {
            if (this._fguiComponent) {
                this._fguiY = this._fguiComponent.y;
            }
            return this._fguiY;
        },
        set: function (y) {
            if (y || y == 0) {
                if (this._fguiComponent) {
                    this._fguiComponent.y = y;
                }
                this._fguiY = y;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "fguiWidth", {
        get: function () {
            if (this._fguiComponent) {
                this._fguiWidth = this._fguiComponent.width;
            }
            return this._fguiWidth;
        },
        set: function (width) {
            if (width || width == 0) {
                if (this._fguiComponent) {
                    this._fguiComponent.width = width;
                }
                this._fguiWidth = width;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FguiComponentBase.prototype, "fguiHeight", {
        get: function () {
            if (this._fguiComponent) {
                this._fguiHeight = this._fguiComponent.height;
            }
            return this._fguiHeight;
        },
        set: function (height) {
            if (height || height == 0) {
                if (this._fguiComponent) {
                    this._fguiComponent.height = height;
                }
                this._fguiHeight = height;
            }
        },
        enumerable: false,
        configurable: true
    });
    FguiComponentBase.prototype.addChild = function (child) {
        if (child) {
            child._parent = this;
            var oldChild = this._children.find(function (c) { return c == child; });
            if (!oldChild) {
                this._children.push(child);
            }
            if (this.fguiComponent && child.fguiComponent) {
                this.fguiComponent.addChild(child.fguiComponent);
            }
        }
    };
    FguiComponentBase.prototype.addFguiComponent = function (type, changeSize) {
        if (changeSize === void 0) { changeSize = true; }
        this._expectLoads++;
        var component = this.node.addComponent(type);
        this.addChild(component);
        if (changeSize) {
            component.fguiHeight = this.fguiHeight;
            component.fguiWidth = this.fguiWidth;
        }
        var list = this.fguiComponentList;
        list.push(component);
        this.fguiComponentList = list;
        return component;
    };
    FguiComponentBase.prototype.onLoad = function () {
        var self = this;
        this._expectLoads = 0;
        this._currentLoads = 0;
        this._loadProcess = 0;
        if (this.needProcess) {
            this.schedule(this.loadProcessInternal, 0);
        }
        if (self.beforeLoadPackage(self.packageResourceName)) { //http://106.13.222.130:84/dlc/games_common/games_common
            var bundle = cc.assetManager.getBundle(self.packageResourceName);
            if (bundle) {
                fgui.UIPackage.loadPackage(bundle, self.packageName, self.createComponent.bind(self));
            }
            else {
                var resUrl = self.packageResourceName;
                if (!AppConst_1.AppConst.isEditor) {
                    resUrl = AppConst_1.AppConst.resUrl + self.packageResourceName;
                }
                cc.assetManager.loadBundle(resUrl, (function (err, bundle) {
                    fgui.UIPackage.loadPackage(bundle, self.packageName, self.createComponent.bind(self));
                }));
            }
        }
        else {
            self.createComponent();
        }
    };
    FguiComponentBase.prototype.beforeLoadPackage = function (pacakgeSourceName) {
        return !!pacakgeSourceName;
    };
    /**
     * Creates component
     * @returns component
     */
    FguiComponentBase.prototype.createComponent = function (error) {
        if (error) {
            cc.error("fairygui \u5305" + this.packageResourceName + "\u4E0D\u5B58\u5728 :" + error.message);
            return;
        }
        if (this.beforeCreateComponent(this.packageName, this.componentName)) {
            var obj = fgui.UIPackage.createObject(this.packageName, this.componentName);
            if (!obj) {
                cc.error("\u5305\u540D\uFF1A" + this.packageName + ",\u6216\u7EC4\u4EF6\u540D\uFF1A" + this.componentName + "\u4E0D\u5B58\u5728");
                return;
            }
            this.fguiComponent = obj.asCom;
            if (this.parent) {
                var child = this.parent.fguiComponent.getChildById(this.fguiComponent._id);
                if (!child) {
                    this.parent.addChild(this);
                }
            }
        }
        fgui.GRoot.inst.center();
        this.createChildComponents();
        this.checkAllChildCreated();
    };
    FguiComponentBase.prototype.beforeCreateComponent = function (packageName, componentName) {
        return !!packageName && !!componentName;
    };
    //createChildComponents()
    FguiComponentBase.prototype.createChildComponents = function () { };
    FguiComponentBase.prototype.checkAllChildCreated = function () {
        var notCreatedChild = this._children.find(function (c) { return c._created === false; });
        if (!notCreatedChild) {
            this._created = true;
            if (!this._allChildCreatedExecuted) {
                this.unschedule(this.loadProcessInternal);
                this.allChildCreated();
                this._allChildCreatedExecuted = true;
                if (this.allChildCreatedCallback) {
                    this.allChildCreatedCallback();
                }
            }
            if (this.parent) {
                this.parent.childCreatedInternal(this);
            }
        }
    };
    FguiComponentBase.prototype.childCreatedInternal = function (child) {
        this._currentLoads++;
        this.childCreated(child);
        this.checkAllChildCreated();
    };
    FguiComponentBase.prototype.childCreated = function (child) { };
    FguiComponentBase.prototype.allChildCreated = function () { };
    FguiComponentBase.prototype.onAllChildCreated = function (callback) {
        if (this._allChildCreatedExecuted) {
            if (callback) {
                callback();
            }
        }
        else {
            this.allChildCreatedCallback = callback;
        }
    };
    FguiComponentBase.prototype.loadProcessInternal = function () {
        var nextValue = Math.round(((this._currentLoads + 1) / this._expectLoads) * 100);
        var processValue = Math.round((this._currentLoads / this._expectLoads) * 100);
        if (processValue < this._loadProcess) {
            processValue = this._loadProcess;
        }
        else {
            processValue += 10;
        }
        if (processValue >= nextValue) {
            processValue -= 10;
        }
        if (processValue > this._loadProcess) {
            this._loadProcess = processValue;
        }
        if (this._loadProcess >= 100) {
            this._loadProcess = 99;
        }
        this.loadProcess(100, this._loadProcess, this._loadProcess);
    };
    FguiComponentBase.prototype.loadProcess = function (expectValue, currentValue, process) { };
    Object.defineProperty(FguiComponentBase.prototype, "fguiComponent", {
        get: function () {
            return this._fguiComponent;
        },
        set: function (value) {
            this._fguiComponent = value;
            if (value) {
                if (this._fguiX) {
                    this.fguiX = this._fguiX;
                }
                if (this._fguiY) {
                    this.fguiY = this._fguiY;
                }
                if (this._fguiWidth) {
                    this.fguiWidth = this._fguiWidth;
                }
                if (this._fguiHeight) {
                    this.fguiHeight = this._fguiHeight;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 根据名称获取子组件
     * @param name 属性名称,比如"a.b.c",其中a可以是fgui.GComponent
     */
    FguiComponentBase.prototype.getChildAdvance = function (name) {
        var names = name.split(".");
        var parent = this._fguiComponent;
        var child;
        var isFgui = true;
        for (var i = 0; i < names.length; i++) {
            var childName = names[i];
            if (isFgui) {
                var childObject = parent.getChild(childName);
                if (childObject) {
                    child = childObject.asCom;
                }
                else {
                    parent = parent.node;
                    isFgui = false;
                }
            }
            if (!isFgui) {
                child = parent.getChildByName(childName);
                if (!child) {
                    cc.error("\u5C5E\u6027" + childName + "\u4E0D\u5B58\u5728");
                    return null;
                }
            }
            parent = child;
        }
        return child;
    };
    FguiComponentBase.prototype.getCCChild = function (node, name) {
        var names = name.split(".");
        var child = node;
        for (var i = 0; i < names.length; i++) {
            var childName = names[i];
            child = child.getChildByName(childName);
            if (!child) {
                cc.error("cc\u7EC4\u4EF6\u4E0D\u5B58\u5728" + childName);
                return null;
            }
        }
        return child;
    };
    FguiComponentBase.prototype.getChild = function (name) {
        var names = name.split(".");
        var child = this._fguiComponent;
        for (var i = 0; i < names.length; i++) {
            var childName = names[i];
            var component = child.getChild(childName);
            if (!component) {
                cc.error("\u5C5E\u6027" + childName + "\u4E0D\u5B58\u5728");
                return null;
            }
            child = component.asCom;
        }
        return child;
    };
    FguiComponentBase.prototype.setControllerProperty = function (name, value) {
        if (!this._fguiComponent) {
            return;
        }
        var names = name.split(".");
        var propertyName = names[names.length - 1];
        var child = this._fguiComponent;
        if (names.length > 1) {
            var theNameWithoutPropertyName = name.replace("." + propertyName, "");
            child = this.getChild(theNameWithoutPropertyName);
            if (!child) {
                cc.error("\u5C5E\u6027" + name + "\u4E0D\u5B58\u5728");
            }
        }
        var controller = child.controllers.find(function (c) { return c.name == propertyName; });
        if (!controller) {
            cc.error("\u63A7\u5236\u5668" + propertyName + "\u4E0D\u5B58\u5728");
            return;
        }
        controller.selectedIndex = value;
    };
    FguiComponentBase.prototype.getControllerProperty = function (name) {
        if (!this._fguiComponent) {
            return null;
        }
        var names = name.split(".");
        var propertyName = names[names.length - 1];
        var child = this._fguiComponent;
        if (names.length > 1) {
            var theNameWithoutPropertyName = name.replace("." + propertyName, "");
            child = this.getChild(theNameWithoutPropertyName);
            if (!child) {
                cc.error("\u5C5E\u6027" + name + "\u4E0D\u5B58\u5728");
            }
        }
        var controller = child.controllers.find(function (c) { return c.name == propertyName; });
        if (!controller) {
            cc.error("\u63A7\u5236\u5668" + propertyName + "\u4E0D\u5B58\u5728");
            return;
        }
        return controller.selectedIndex;
    };
    FguiComponentBase.prototype.isSubclassOf = function (source, target) {
        if (!source || !target) {
            return false;
        }
        if (target.name == source.name) {
            return true;
        }
        var targetAny = target;
        targetAny = targetAny.$super;
        var result = false;
        while (targetAny) {
            result = targetAny.name == source.name;
            if (result) {
                break;
            }
            targetAny = targetAny.$super;
        }
        return result;
    };
    Object.defineProperty(FguiComponentBase.prototype, "logEventReporter", {
        get: function () {
            if (this._logEventReporter == null && IocContainer_1.default.container.isBound(EventReporter_1.EventReporterIocContainerName)) {
                this._logEventReporter = IocContainer_1.default.container.get(EventReporter_1.EventReporterIocContainerName);
            }
            if (this._logEventReporter == null) {
                return EmptyLogEventReporter_1.default.instance;
            }
            return this._logEventReporter;
        },
        enumerable: false,
        configurable: true
    });
    FguiComponentBase = __decorate([
        ccclass
    ], FguiComponentBase);
    return FguiComponentBase;
}(cc.Component));
exports.default = FguiComponentBase;
var FguiWindow = /** @class */ (function (_super) {
    __extends(FguiWindow, _super);
    function FguiWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FguiWindow.prototype.createChildComponents = function () {
        this.fguiComponent.makeFullScreen();
        this._window = new fgui.Window();
        this._window.contentPane = this.fguiComponent;
    };
    Object.defineProperty(FguiWindow.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    return FguiWindow;
}(FguiComponentBase));
exports.FguiWindow = FguiWindow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcRmd1aUNvbXBvbmVudEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJEQUF5RjtBQUN6RiwrQ0FBMEM7QUFDMUMsMkVBQXNFO0FBRXRFLHlFQUF3RTtBQUNoRSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF3RCxxQ0FBWTtJQUFwRTtRQUFBLHFFQXdZQztRQXBZVSxlQUFTLEdBQXdCLEVBQUUsQ0FBQztRQUNqQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTVCLDhCQUF3QixHQUFZLEtBQUssQ0FBQztRQWtCMUMsd0JBQWtCLEdBQXdCLEVBQUUsQ0FBQzs7UUE4V3JELFlBQVk7SUFDaEIsQ0FBQztJQTVYRyxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcscUNBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFVRCxzQkFBVyxxQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBa0IsSUFBYTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLGdEQUFpQjthQUE1QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUE2QixTQUE4QjtZQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsb0NBQUs7YUFBaEI7WUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JB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QztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFDRCxzQkFBSSw4QkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWd0MsaUJBQWlCLEdBVXpEO0FBVnFCLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRXZlbnRSZXBvcnRlciwgeyBFdmVudFJlcG9ydGVySW9jQ29udGFpbmVyTmFtZSB9IGZyb20gXCIuL2FuYWx5dGljcy9FdmVudFJlcG9ydGVyXCI7XG5pbXBvcnQgSW9jQ29udGFpbmVyIGZyb20gXCIuL0lvY0NvbnRhaW5lclwiO1xuaW1wb3J0IEVtcHR5TG9nRXZlbnRSZXBvcnRlciBmcm9tIFwiLi9hbmFseXRpY3MvRW1wdHlMb2dFdmVudFJlcG9ydGVyXCI7XG5pbXBvcnQgTWVzc2FnZUJhc2UgZnJvbSBcIi4vTWVzc2FnZUJhc2VcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGZ3VpQ29tcG9uZW50QmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nO1xuICAgIHB1YmxpYyBfY2hpbGRyZW46IEZndWlDb21wb25lbnRCYXNlW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9wYXJlbnQ6IEZndWlDb21wb25lbnRCYXNlO1xuICAgIHByaXZhdGUgX2FsbENoaWxkQ3JlYXRlZEV4ZWN1dGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZXhwZWN0TG9hZHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jdXJyZW50TG9hZHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2FkUHJvY2VzczogbnVtYmVyO1xuICAgIHByaXZhdGUgbG9hZFByb2Nlc3NUaW1lcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBnZXQgbmVlZFByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBwYXJlbnQoKTogRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICBwdWJsaWMgJG1lc3NhZ2U6IE1lc3NhZ2VCYXNlO1xuICAgIHByb3RlY3RlZCBfZmd1aUNvbXBvbmVudDogZmd1aS5HQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX2ZndWlYOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZmd1aVk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9mZ3VpV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9mZ3VpSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ZndWlDb21wb25lbnRMaXN0OiBGZ3VpQ29tcG9uZW50QmFzZVtdID0gW107XG5cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBhY3RpdmUoYm9vbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBib29sO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmd1aUNvbXBvbmVudExpc3QoKTogRmd1aUNvbXBvbmVudEJhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mZ3VpQ29tcG9uZW50TGlzdDtcbiAgICB9XG4gICAgcHVibGljIHNldCBmZ3VpQ29tcG9uZW50TGlzdChjb21wb25lbnQ6IEZndWlDb21wb25lbnRCYXNlW10pIHtcbiAgICAgICAgdGhpcy5fZmd1aUNvbXBvbmVudExpc3QgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmZ3VpWCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fZmd1aUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fZmd1aVggPSB0aGlzLl9mZ3VpQ29tcG9uZW50Lng7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZndWlYO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZndWlYKHg6IG51bWJlcikge1xuICAgICAgICBpZiAoeCB8fCB4ID09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmd1aUNvbXBvbmVudC54ID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2ZndWlYID0geDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZndWlZKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9mZ3VpWSA9IHRoaXMuX2ZndWlDb21wb25lbnQueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZmd1aVk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZmd1aVkoeTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh5IHx8IHkgPT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZndWlDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mZ3VpQ29tcG9uZW50LnkgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZmd1aVkgPSB5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZmd1aVdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9mZ3VpV2lkdGggPSB0aGlzLl9mZ3VpQ29tcG9uZW50LndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9mZ3VpV2lkdGg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZmd1aVdpZHRoKHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHdpZHRoIHx8IHdpZHRoID09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmd1aUNvbXBvbmVudC53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZmd1aVdpZHRoID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBmZ3VpSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9mZ3VpSGVpZ2h0ID0gdGhpcy5fZmd1aUNvbXBvbmVudC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZndWlIZWlnaHQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZmd1aUhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBpZiAoaGVpZ2h0IHx8IGhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmd1aUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZndWlDb21wb25lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZmd1aUhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWRkQ2hpbGQoY2hpbGQ6IEZndWlDb21wb25lbnRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBvbGRDaGlsZCA9IHRoaXMuX2NoaWxkcmVuLmZpbmQoKGMpID0+IGMgPT0gY2hpbGQpO1xuICAgICAgICAgICAgaWYgKCFvbGRDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmd1aUNvbXBvbmVudCAmJiBjaGlsZC5mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmFkZENoaWxkKGNoaWxkLmZndWlDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhZGRGZ3VpQ29tcG9uZW50PFQgZXh0ZW5kcyBGZ3VpQ29tcG9uZW50QmFzZT4odHlwZTogeyBuZXcoKTogVCB9LCBjaGFuZ2VTaXplOiBib29sZWFuID0gdHJ1ZSk6IFQge1xuICAgICAgICB0aGlzLl9leHBlY3RMb2FkcysrO1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudCh0eXBlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjb21wb25lbnQpO1xuICAgICAgICBpZiAoY2hhbmdlU2l6ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50LmZndWlIZWlnaHQgPSB0aGlzLmZndWlIZWlnaHQ7XG4gICAgICAgICAgICBjb21wb25lbnQuZmd1aVdpZHRoID0gdGhpcy5mZ3VpV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmZndWlDb21wb25lbnRMaXN0O1xuICAgICAgICBsaXN0LnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50TGlzdCA9IGxpc3Q7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9leHBlY3RMb2FkcyA9IDA7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMb2FkcyA9IDA7XG4gICAgICAgIHRoaXMuX2xvYWRQcm9jZXNzID0gMDtcbiAgICAgICAgaWYgKHRoaXMubmVlZFByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5sb2FkUHJvY2Vzc0ludGVybmFsLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmJlZm9yZUxvYWRQYWNrYWdlKHNlbGYucGFja2FnZVJlc291cmNlTmFtZSkpIHsvL2h0dHA6Ly8xMDYuMTMuMjIyLjEzMDo4NC9kbGMvZ2FtZXNfY29tbW9uL2dhbWVzX2NvbW1vblxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoc2VsZi5wYWNrYWdlUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIGlmIChidW5kbGUpIHtcbiAgICAgICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHNlbGYucGFja2FnZU5hbWUsIHNlbGYuY3JlYXRlQ29tcG9uZW50LmJpbmQoc2VsZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc1VybCA9IHNlbGYucGFja2FnZVJlc291cmNlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoIUFwcENvbnN0LmlzRWRpdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc1VybCA9IEFwcENvbnN0LnJlc1VybCArIHNlbGYucGFja2FnZVJlc291cmNlTmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShyZXNVcmwsICgoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmd1aS5VSVBhY2thZ2UubG9hZFBhY2thZ2UoYnVuZGxlLCBzZWxmLnBhY2thZ2VOYW1lLCBzZWxmLmNyZWF0ZUNvbXBvbmVudC5iaW5kKHNlbGYpKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBiZWZvcmVMb2FkUGFja2FnZShwYWNha2dlU291cmNlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXBhY2FrZ2VTb3VyY2VOYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgY29tcG9uZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoZXJyb3I/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgZmFpcnlndWkg5YyFJHt0aGlzLnBhY2thZ2VSZXNvdXJjZU5hbWV95LiN5a2Y5ZyoIDpgICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmVmb3JlQ3JlYXRlQ29tcG9uZW50KHRoaXMucGFja2FnZU5hbWUsIHRoaXMuY29tcG9uZW50TmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QodGhpcy5wYWNrYWdlTmFtZSwgdGhpcy5jb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWMheWQje+8miR7dGhpcy5wYWNrYWdlTmFtZX0s5oiW57uE5Lu25ZCN77yaJHt0aGlzLmNvbXBvbmVudE5hbWV95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50ID0gb2JqLmFzQ29tO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5wYXJlbnQuZmd1aUNvbXBvbmVudC5nZXRDaGlsZEJ5SWQodGhpcy5mZ3VpQ29tcG9uZW50Ll9pZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmNlbnRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmNoZWNrQWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBiZWZvcmVDcmVhdGVDb21wb25lbnQocGFja2FnZU5hbWU6IHN0cmluZywgY29tcG9uZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXBhY2thZ2VOYW1lICYmICEhY29tcG9uZW50TmFtZTtcbiAgICB9XG4gICAgLy9jcmVhdGVDaGlsZENvbXBvbmVudHMoKVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKTogdm9pZCB7IH1cblxuICAgIHByb3RlY3RlZCBjaGVja0FsbENoaWxkQ3JlYXRlZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5vdENyZWF0ZWRDaGlsZCA9IHRoaXMuX2NoaWxkcmVuLmZpbmQoKGMpID0+IGMuX2NyZWF0ZWQgPT09IGZhbHNlKTtcbiAgICAgICAgaWYgKCFub3RDcmVhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbGxDaGlsZENyZWF0ZWRFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmxvYWRQcm9jZXNzSW50ZXJuYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsQ2hpbGRDcmVhdGVkRXhlY3V0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbENoaWxkQ3JlYXRlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hpbGRDcmVhdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZENyZWF0ZWRJbnRlcm5hbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNoaWxkQ3JlYXRlZEludGVybmFsKGNoaWxkOiBGZ3VpQ29tcG9uZW50QmFzZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jdXJyZW50TG9hZHMrKztcbiAgICAgICAgdGhpcy5jaGlsZENyZWF0ZWQoY2hpbGQpO1xuICAgICAgICB0aGlzLmNoZWNrQWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjaGlsZENyZWF0ZWQoY2hpbGQ6IEZndWlDb21wb25lbnRCYXNlKTogdm9pZCB7IH1cbiAgICBwcm90ZWN0ZWQgYWxsQ2hpbGRDcmVhdGVkKCk6IHZvaWQgeyB9XG4gICAgcHJpdmF0ZSBhbGxDaGlsZENyZWF0ZWRDYWxsYmFjazogRnVuY3Rpb247XG4gICAgb25BbGxDaGlsZENyZWF0ZWQoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbGxDaGlsZENyZWF0ZWRFeGVjdXRlZCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hpbGRDcmVhdGVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGxvYWRQcm9jZXNzSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IE1hdGgucm91bmQoKCh0aGlzLl9jdXJyZW50TG9hZHMgKyAxKSAvIHRoaXMuX2V4cGVjdExvYWRzKSAqIDEwMCk7XG4gICAgICAgIGxldCBwcm9jZXNzVmFsdWUgPSBNYXRoLnJvdW5kKCh0aGlzLl9jdXJyZW50TG9hZHMgLyB0aGlzLl9leHBlY3RMb2FkcykgKiAxMDApO1xuICAgICAgICBpZiAocHJvY2Vzc1ZhbHVlIDwgdGhpcy5fbG9hZFByb2Nlc3MpIHtcbiAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHRoaXMuX2xvYWRQcm9jZXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlICs9IDEwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzVmFsdWUgPj0gbmV4dFZhbHVlKSB7XG4gICAgICAgICAgICBwcm9jZXNzVmFsdWUgLT0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA+IHRoaXMuX2xvYWRQcm9jZXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkUHJvY2VzcyA9IHByb2Nlc3NWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbG9hZFByb2Nlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkUHJvY2VzcyA9IDk5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFByb2Nlc3MoMTAwLCB0aGlzLl9sb2FkUHJvY2VzcywgdGhpcy5fbG9hZFByb2Nlc3MpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgbG9hZFByb2Nlc3MoZXhwZWN0VmFsdWU6IG51bWJlciwgY3VycmVudFZhbHVlOiBudW1iZXIsIHByb2Nlc3M6IG51bWJlcik6IHZvaWQgeyB9XG4gICAgcHVibGljIGdldCBmZ3VpQ29tcG9uZW50KCk6IGZndWkuR0NvbXBvbmVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mZ3VpQ29tcG9uZW50O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZndWlDb21wb25lbnQodmFsdWU6IGZndWkuR0NvbXBvbmVudCkge1xuICAgICAgICB0aGlzLl9mZ3VpQ29tcG9uZW50ID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZndWlYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ3VpWCA9IHRoaXMuX2ZndWlYO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZndWlZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ3VpWSA9IHRoaXMuX2ZndWlZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZndWlXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmd1aVdpZHRoID0gdGhpcy5fZmd1aVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZndWlIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZndWlIZWlnaHQgPSB0aGlzLl9mZ3VpSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOagueaNruWQjeensOiOt+WPluWtkOe7hOS7tlxuICAgICAqIEBwYXJhbSBuYW1lIOWxnuaAp+WQjeensCzmr5TlpoJcImEuYi5jXCIs5YW25LitYeWPr+S7peaYr2ZndWkuR0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDaGlsZEFkdmFuY2UobmFtZTogc3RyaW5nKTogZmd1aS5HQ29tcG9uZW50IHwgY2MuTm9kZSB7XG4gICAgICAgIGxldCBuYW1lcyA9IG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBsZXQgcGFyZW50OiBmZ3VpLkdDb21wb25lbnQgfCBjYy5Ob2RlID0gdGhpcy5fZmd1aUNvbXBvbmVudDtcbiAgICAgICAgbGV0IGNoaWxkOiBmZ3VpLkdDb21wb25lbnQgfCBjYy5Ob2RlO1xuICAgICAgICBsZXQgaXNGZ3VpOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkTmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgaWYgKGlzRmd1aSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gKChwYXJlbnQgYXMgYW55KSBhcyBmZ3VpLkdDb21wb25lbnQpLmdldENoaWxkKGNoaWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGRPYmplY3QuYXNDb207XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gKChwYXJlbnQgYXMgYW55KSBhcyBmZ3VpLkdDb21wb25lbnQpLm5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlzRmd1aSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNGZ3VpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSAoKHBhcmVudCBhcyBhbnkpIGFzIGNjLk5vZGUpLmdldENoaWxkQnlOYW1lKGNoaWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihg5bGe5oCnJHtjaGlsZE5hbWV95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgcHVibGljIGdldENDQ2hpbGQobm9kZTogY2MuTm9kZSwgbmFtZTogc3RyaW5nKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBuYW1lcyA9IG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQuZ2V0Q2hpbGRCeU5hbWUoY2hpbGROYW1lKTtcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgY2Pnu4Tku7bkuI3lrZjlnKgke2NoaWxkTmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRDaGlsZChuYW1lOiBzdHJpbmcpOiBmZ3VpLkdDb21wb25lbnQge1xuICAgICAgICBsZXQgbmFtZXMgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5fZmd1aUNvbXBvbmVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkTmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY2hpbGQuZ2V0Q2hpbGQoY2hpbGROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWxnuaApyR7Y2hpbGROYW1lfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGQgPSBjb21wb25lbnQuYXNDb207XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29udHJvbGxlclByb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuX2ZndWlDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZXMgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuX2ZndWlDb21wb25lbnQ7XG4gICAgICAgIGlmIChuYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCB0aGVOYW1lV2l0aG91dFByb3BlcnR5TmFtZSA9IG5hbWUucmVwbGFjZShcIi5cIiArIHByb3BlcnR5TmFtZSwgXCJcIik7XG4gICAgICAgICAgICBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQodGhlTmFtZVdpdGhvdXRQcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGDlsZ7mgKcke25hbWV95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGNoaWxkLmNvbnRyb2xsZXJzLmZpbmQoKGMpID0+IGMubmFtZSA9PSBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDmjqfliLblmagke3Byb3BlcnR5TmFtZX3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldENvbnRyb2xsZXJQcm9wZXJ0eShuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2ZndWlDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuYW1lcyA9IG5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBuYW1lc1tuYW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5fZmd1aUNvbXBvbmVudDtcbiAgICAgICAgaWYgKG5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZU5hbWVXaXRob3V0UHJvcGVydHlOYW1lID0gbmFtZS5yZXBsYWNlKFwiLlwiICsgcHJvcGVydHlOYW1lLCBcIlwiKTtcbiAgICAgICAgICAgIGNoaWxkID0gdGhpcy5nZXRDaGlsZCh0aGVOYW1lV2l0aG91dFByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOWxnuaApyR7bmFtZX3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gY2hpbGQuY29udHJvbGxlcnMuZmluZCgoYykgPT4gYy5uYW1lID09IHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGlmICghY29udHJvbGxlcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoYOaOp+WItuWZqCR7cHJvcGVydHlOYW1lfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHByb3RlY3RlZCBpc1N1YmNsYXNzT2Yoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghc291cmNlIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gc291cmNlLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXRBbnkgPSB0YXJnZXQgYXMgYW55O1xuICAgICAgICB0YXJnZXRBbnkgPSB0YXJnZXRBbnkuJHN1cGVyO1xuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICh0YXJnZXRBbnkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRhcmdldEFueS5uYW1lID09IHNvdXJjZS5uYW1lO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0QW55ID0gdGFyZ2V0QW55LiRzdXBlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyNyZWdpb24g5Z+L54K5XG4gICAgcHJpdmF0ZSBfbG9nRXZlbnRSZXBvcnRlcjogRXZlbnRSZXBvcnRlcjtcbiAgICBwcm90ZWN0ZWQgZ2V0IGxvZ0V2ZW50UmVwb3J0ZXIoKTogRXZlbnRSZXBvcnRlciB7XG4gICAgICAgIGlmICh0aGlzLl9sb2dFdmVudFJlcG9ydGVyID09IG51bGwgJiYgSW9jQ29udGFpbmVyLmNvbnRhaW5lci5pc0JvdW5kKEV2ZW50UmVwb3J0ZXJJb2NDb250YWluZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fbG9nRXZlbnRSZXBvcnRlciA9IElvY0NvbnRhaW5lci5jb250YWluZXIuZ2V0PEV2ZW50UmVwb3J0ZXI+KEV2ZW50UmVwb3J0ZXJJb2NDb250YWluZXJOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbG9nRXZlbnRSZXBvcnRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gRW1wdHlMb2dFdmVudFJlcG9ydGVyLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dFdmVudFJlcG9ydGVyO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZndWlXaW5kb3cgZXh0ZW5kcyBGZ3VpQ29tcG9uZW50QmFzZSB7XG4gICAgcHJpdmF0ZSBfd2luZG93OiBmZ3VpLldpbmRvdztcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubWFrZUZ1bGxTY3JlZW4oKTtcbiAgICAgICAgdGhpcy5fd2luZG93ID0gbmV3IGZndWkuV2luZG93KCk7XG4gICAgICAgIHRoaXMuX3dpbmRvdy5jb250ZW50UGFuZSA9IHRoaXMuZmd1aUNvbXBvbmVudDtcbiAgICB9XG4gICAgZ2V0IHdpbmRvdygpOiBmZ3VpLldpbmRvdyB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3c7XG4gICAgfVxufVxuIl19