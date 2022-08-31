"use strict";
cc._RF.push(module, '10a27a/55NM9YAkNBO5dsfM', 'AboutUsView');
// GameHall/script/Lobby/settingpanel/AboutUsView.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
/**
 * @description 關於我們
 */
var AboutUsView = /** @class */ (function (_super) {
    __extends(AboutUsView, _super);
    function AboutUsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_setUsBreak = null;
        return _this;
    }
    Object.defineProperty(AboutUsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AboutUsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AboutUsView.prototype, "componentName", {
        get: function () {
            return "aboutUs";
        },
        enumerable: false,
        configurable: true
    });
    AboutUsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_setUsBreak.onClick(this.Hide, this);
        this.fguiComponent.sortingOrder = 9990;
    };
    AboutUsView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    AboutUsView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('AboutUsView', "button");
        _super.prototype.Hide.call(this);
    };
    AboutUsView.prototype.Show = function () {
        console.log("--- AboutUsView Show ---");
        _super.prototype.Show.call(this);
    };
    return AboutUsView;
}(ViewBase_1.default));
exports.default = AboutUsView;

cc._RF.pop();