"use strict";
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