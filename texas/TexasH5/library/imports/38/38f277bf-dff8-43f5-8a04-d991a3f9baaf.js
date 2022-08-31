"use strict";
cc._RF.push(module, '38f27e/3/hD9YoE2ZGj+bqv', 'Loading');
// Script/modules/@slotsmaster/ui-common/lib/Loading/Loading.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var AppConst_1 = require("../AppConst");
var Popup_1 = require("../Popup");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineResources = "GameHall/Spine/loading/loading01";
        return _this;
    }
    Object.defineProperty(Loading.prototype, "basePanel", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "buttonOKName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "packageName", {
        get: function () {
            return "res/Loading";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "componentName", {
        get: function () {
            return "ShowLoading";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Loading.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.node.on(AppConst_1.AppConst.IsShowLoading, this.isShow, this);
    };
    Loading.prototype.doRotate = function () {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        // this.fguiComponent.getChild("JUHUA").node.runAction(cc.rotateBy(1, 360).repeatForever());
    };
    Loading.prototype.isShow = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        console.log("Loading--", isShow);
        if (isShow)
            this.show();
        else
            this.hide();
    };
    Loading.prototype.show = function () {
        _super.prototype.show.call(this);
        Utils_1.Utils.addSpine(this.spineResources, this.fguiComponent.getChild("spine").node, function (loadBg) {
            loadBg.setAnimation(0, "loading", true);
        });
        Utils_1.Utils.addSpine(this.spineResources, this.getChild("load.spine").node, function (load) {
            load.setAnimation(0, "slots", true);
        });
        // this.doRotate();
    };
    Loading.prototype.hide = function () {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        _super.prototype.hide.call(this);
    };
    Loading.prototype.onPlayShowAni = function () { };
    Loading.prototype.onPlayHideAni = function () { };
    return Loading;
}(Popup_1.Popup));
exports.Loading = Loading;

cc._RF.pop();