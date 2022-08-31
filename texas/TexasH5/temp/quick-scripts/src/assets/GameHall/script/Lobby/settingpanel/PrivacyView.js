"use strict";
cc._RF.push(module, 'aab40MAAd1Or7jPXMfG9/YE', 'PrivacyView');
// GameHall/script/Lobby/settingpanel/PrivacyView.ts

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
 * @description 隱私政策
 */
var PrivacyView = /** @class */ (function (_super) {
    __extends(PrivacyView, _super);
    function PrivacyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_setprivacyBreak = null;
        return _this;
    }
    Object.defineProperty(PrivacyView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrivacyView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrivacyView.prototype, "componentName", {
        get: function () {
            return "Privacy";
        },
        enumerable: false,
        configurable: true
    });
    PrivacyView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_setprivacyBreak.onClick(this.Hide, this);
        // let label = this.getChild("n24").asCom.getChild("n24").asTextField;
        // label._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.fguiComponent.sortingOrder = 9990;
    };
    PrivacyView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    PrivacyView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('PrivacyView', "button");
        _super.prototype.Hide.call(this);
    };
    PrivacyView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return PrivacyView;
}(ViewBase_1.default));
exports.default = PrivacyView;

cc._RF.pop();