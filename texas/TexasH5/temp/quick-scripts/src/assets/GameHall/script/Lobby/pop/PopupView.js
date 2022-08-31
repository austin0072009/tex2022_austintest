"use strict";
cc._RF.push(module, '64f87TtsyZGgYByD8n92pIM', 'PopupView');
// GameHall/script/Lobby/pop/PopupView.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 公告弹窗
 */
var PopupView = /** @class */ (function (_super) {
    __extends(PopupView, _super);
    function PopupView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_close = null;
        _this.ui_title = null;
        _this.ui_content = null;
        _this.ui_gloader = null;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(PopupView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopupView.prototype, "componentName", {
        get: function () {
            return "pop";
        },
        enumerable: false,
        configurable: true
    });
    PopupView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_close.onClick(this.Hide, this);
        this.typeController = this.fguiComponent.getController("c1");
    };
    PopupView.prototype.OnLoadCompleted = function () {
        this.Show();
        this.initData();
    };
    PopupView.prototype.initData = function () {
        this.notice = LobbyViewCtr_1.default.instance.Model.notice;
        if (this.notice[this.index].PicUrl) {
            this.typeController.setSelectedIndex(1);
            UIUtil_1.UIUtil.loadImage(this.ui_gloader, this.notice[this.index].PicUrl);
        }
        else {
            this.typeController.setSelectedIndex(0);
            this.ui_title.text = this.notice[this.index].title;
            this.ui_content.text = this.notice[this.index].content;
        }
    };
    PopupView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('PopupView', "button");
        this.index += 1;
        if (this.index > this.notice.length - 1) {
            _super.prototype.Hide.call(this);
        }
        else {
            this.initData();
        }
    };
    return PopupView;
}(ViewBase_1.default));
exports.default = PopupView;

cc._RF.pop();