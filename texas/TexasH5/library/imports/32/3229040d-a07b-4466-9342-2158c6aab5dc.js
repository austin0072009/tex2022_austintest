"use strict";
cc._RF.push(module, '32290QNoHtEZpNCIVjGqrXc', 'Broadcast');
// GameHall/script/Lobby/Components/Broadcast.ts

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
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
/**
 * @description 广播
 */
var Broadcast = /** @class */ (function (_super) {
    __extends(Broadcast, _super);
    function Broadcast() {
        var _this = _super.call(this) || this;
        _this.messages = [];
        /**是否正在广播 */
        _this.isOpend = false;
        _this.noticelist = [];
        _this.nowIndex = 0;
        return _this;
    }
    Broadcast.prototype.onConstruct = function () {
        this.textLabel = this.getChild("text").asRichTextField;
        this.bgImg = this.getChild("n2").asImage;
        this.node.opacity = 0;
    };
    Broadcast.prototype.clean = function () {
        this.messages = [];
    };
    Broadcast.prototype.initNotice = function (noticelist) {
        // for (let i = 0; i < noticelist.length; i++) {
        //     let now = Date.now();
        //     let startTime = new Date(noticelist[i].starttime).getTime();
        //     let endTime = new Date(noticelist[i].endtime).getTime();
        //     if ((now >= startTime && now <= endTime) || endTime < 0) {
        //         this.noticelist.push(noticelist[i]);
        //     }
        // }
        // if (this.noticelist.length <= 0) {
        //     return;
        // }
        // this.node.stopAllActions();
        this.isOpend = false;
        this.loopNotice();
    };
    Broadcast.prototype.addNotice = function (Notice) {
        this.noticelist.push(Notice);
    };
    Broadcast.prototype.loopNotice = function () {
        var _this = this;
        this.noticelist = BaseFrameNative_1.BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
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
            }
            else {
                _this.noticelist.splice(_this.nowIndex, 1);
            }
            if (_this.nowIndex > _this.noticelist.length - 1) {
                _this.nowIndex = 0;
                _this.loopNotice();
            }
            // this.loopNotice();
        })));
    };
    Broadcast.prototype.addMessage = function (str, lv) {
        if (lv) {
            this.messages.unshift(str);
        }
        else {
            this.messages.push(str);
        }
        if (!this.isOpend) {
            this.showBroadcast();
        }
    };
    Broadcast.prototype.showBroadcast = function () {
        var _this = this;
        var mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.node.opacity = 0;
            this.bgImg.visible = false;
            return;
        }
        this.bgImg.visible = true;
        this.isOpend = true;
        this.textLabel.text = mess;
        this.textLabel.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () { (_this.node.opacity != 255) && (_this.node.opacity = 255); }), cc.moveBy(10, cc.v2(-(this.textLabel.width + this.node.width), 0)), cc.callFunc(function () {
            _this.textLabel.text = '';
            _this.textLabel.node.x = _this.node.width;
            _this.isOpend = false;
            _this.loopNotice();
            _this.bgImg.visible = false;
            _this.node.opacity = 0;
        })));
    };
    Broadcast.prototype.onDestroy = function () {
        console.log("Broadcast onDestroy");
        this.textLabel.node.stopAllActions();
        this.node.stopAllActions();
    };
    return Broadcast;
}(fgui.GComponent));
exports.default = Broadcast;

cc._RF.pop();