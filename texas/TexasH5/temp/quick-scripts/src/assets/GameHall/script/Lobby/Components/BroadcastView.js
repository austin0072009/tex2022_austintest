"use strict";
cc._RF.push(module, '79131WcwTRKgbollNVeWaUx', 'BroadcastView');
// GameHall/script/Lobby/Components/BroadcastView.ts

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
exports.BroadcastView = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var BroadcastViewCtr_1 = require("./BroadcastViewCtr");
var BroadcastView = /** @class */ (function (_super) {
    __extends(BroadcastView, _super);
    function BroadcastView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_textLabel = null;
        _this.messages = [];
        _this.noticelist = [];
        _this.nowIndex = 0;
        /**是否正在广播 */
        _this.isOpend = false;
        _this.delayTime = 0;
        return _this;
    }
    Object.defineProperty(BroadcastView.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BroadcastView.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BroadcastView.prototype, "componentName", {
        get: function () {
            return "Broadcast";
        },
        enumerable: false,
        configurable: true
    });
    BroadcastView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.node.opacity = 0;
        this.fguiComponent.sortingOrder = 9999;
        BroadcastViewCtr_1.BroadcastViewCtr.instance.view = this;
    };
    BroadcastView.prototype.OnLoadCompleted = function () {
        this.isOpend = false;
        this.loopNotice();
    };
    BroadcastView.prototype.addMessage = function (str, delayTime) {
        if (delayTime === void 0) { delayTime = 0; }
        if (this.messages.includes(str) || this.ui_textLabel.text == str) {
            console.log("Broadcast addMessage 已有");
            return;
        }
        this.messages.push(str);
        this.delayTime = delayTime;
        if (!this.isOpend) {
            this.showBroadcast();
        }
    };
    BroadcastView.prototype.loopNotice = function () {
        var _this = this;
        this.noticelist = BaseFrameNative_1.BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
        this.Show();
        this.content = this.noticelist[this.nowIndex].content;
        this.startTime = new Date(this.noticelist[this.nowIndex].starttime).getTime();
        this.endTime = new Date(this.noticelist[this.nowIndex].endtime).getTime();
        this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            if (_this.noticelist.length <= 0) {
                return;
            }
            var now = Date.now();
            _this.nowIndex += 1;
            if ((now >= _this.startTime && now <= _this.endTime) || _this.endTime < 0) {
                _this.addMessage(_this.content);
                // this.showBroadcast();
            }
            else {
                _this.noticelist.splice(_this.nowIndex, 1);
            }
            if (_this.nowIndex > _this.noticelist.length - 1) {
                _this.nowIndex = 0;
                _this.loopNotice();
            }
        })));
    };
    BroadcastView.prototype.showBroadcast = function () {
        var _this = this;
        var mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.fguiComponent.node.opacity = 0;
            return;
        }
        this.isOpend = true;
        this.ui_textLabel.text = mess;
        this.ui_textLabel.node.x = this.fguiComponent.width;
        this.ui_textLabel.node.runAction(cc.sequence(cc.delayTime(3 + this.delayTime), cc.callFunc(function () { (_this.fguiComponent.node.opacity != 255) && (_this.fguiComponent.node.opacity = 255); }), cc.moveBy(8, cc.v2(-(this.ui_textLabel.node.width + this.fguiComponent.width), 0)), cc.callFunc(function () {
            _this.ui_textLabel.text = '';
            _this.isOpend = false;
            _this.Hide();
            _this.loopNotice();
        })));
    };
    BroadcastView.prototype.onDestroy = function () {
        console.log("BroadcastView onDestroy");
        this.messages = [];
        this.ui_textLabel.node.stopAllActions();
    };
    return BroadcastView;
}(ViewBase_1.default));
exports.BroadcastView = BroadcastView;

cc._RF.pop();