"use strict";
cc._RF.push(module, 'ac900TgCdFG8pjt59+yNojt', 'Notice');
// Script/Common/Notice.ts

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
exports.Notice = void 0;
var HttpApi_1 = require("../modules/@slotsmaster/ui-common/lib/HttpApi");
var Popup_1 = require("../modules/@slotsmaster/ui-common/lib/Popup");
var NOTICE_TYPE = {
    //* 横向滚动条
    SCROLL_HORIZONAL: 0,
    //* 顶部跑马灯
    TOP_MARQUEE: 1,
};
var Notice = /** @class */ (function (_super) {
    __extends(Notice, _super);
    function Notice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._msgNoticeArr = [];
        _this._windowMsgNoticeArr = [];
        _this._deltaTime = 1;
        _this._myMsgNotice = null;
        _this._myWindowMsgNotice = null;
        return _this;
    }
    Object.defineProperty(Notice.prototype, "basePanel", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "buttonOKName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "componentName", {
        get: function () {
            return "Notice";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notice.prototype, "isRegisterNodeEvent", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Notice.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        this.show();
    };
    Notice.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._msgComponent = this.fguiComponent.getChild("noticeMsg");
        this._msgInfoComponent = this.getChild("noticeMsg.noticeMsgInfo").asCom;
        this._msgInfoComponent.x = 1920;
        this._msgText = this.getChild("noticeMsg.noticeMsgInfo.msg").asTextField;
        this._msgHead = this.getChild("noticeMsg.noticeMsgInfo.head").asLoader;
        this._windowMsgComponent = this.fguiComponent.getChild("noticeWindow");
        this._windowMsgComponent.y = -200;
        this._windowMsgName = this.getChild("noticeWindow.name").asLabel;
        this._windowMsgData = this.getChild("noticeWindow.price").asLabel;
        this._windowMsgHead = this.getChild("noticeWindow.head").asLoader;
        this._msgComponent.visible = false;
        this._windowMsgComponent.visible = false;
        this.fguiComponent.getController("isShowBg").setSelectedIndex(0);
    };
    Notice.prototype.updateMsg = function () {
        var self = this;
        this.scheduleOnce(function () {
            self.showMsg();
        });
        // this.schedule(this.showMsg, 10, this._msgNoticeArr.length, 0);
    };
    Notice.prototype.actionDo = function () {
        this.fguiComponent.getController("isShowBg").setSelectedIndex(1);
        this._msgComponent.visible = true;
        this._msgText.text = this._msgNoticeArr[0].content;
        this._msgHead.url = this._msgNoticeArr[0].headImageUrl;
    };
    Notice.prototype.showMsg = function () {
        var visibleSize = cc.view.getVisibleSize().width;
        this.fguiComponent.getController("isShowBg").setSelectedIndex(1);
        this._msgComponent.visible = true;
        this._msgText.text = this._msgNoticeArr[0].content;
        this._msgHead.url = this._msgNoticeArr[0].headImageUrl;
        var tweenWidth = -1920 / 2;
        var speed = (1920 - tweenWidth) / 250;
        var self = this;
        var finished = cc.callFunc(function () {
            self._msgText.text = "";
            self._msgHead.url = "";
            self._msgInfoComponent.node.x = 1920;
            self._msgInfoComponent.x = 1920;
            self._msgNoticeArr.shift();
            if (self._msgNoticeArr.length < 1) {
                self._msgComponent.visible = false;
                self.fguiComponent.getController("isShowBg").setSelectedIndex(0);
                //   self.unschedule(self.showMsg);
            }
            else {
                self.updateMsg();
            }
        }, this);
        var action = cc.sequence(cc.moveTo(speed, tweenWidth, this._msgInfoComponent.height / 2), finished);
        this._msgInfoComponent.node.runAction(action);
    };
    Notice.prototype.showWindowMsg = function () {
        this._windowMsgComponent.visible = true;
        this._windowMsgName.text = this._windowMsgNoticeArr[0].name;
        this._windowMsgData.text = "$" + this._windowMsgNoticeArr[0].wonValue;
        this._windowMsgHead.url = this._windowMsgNoticeArr[0].headImageUrl;
        var tweenHeight = 200;
        var self = this;
        var finished = cc.callFunc(function () {
            self._windowMsgName.text = "";
            self._windowMsgData.text = "";
            self._windowMsgHead.url = "";
            self._windowMsgComponent.y = -200;
            self._windowMsgNoticeArr.shift();
            if (self._windowMsgNoticeArr.length < 1) {
                self._windowMsgComponent.visible = false;
                self.unschedule(self.showWindowMsg);
            }
        }, this);
        var delayAction = cc.delayTime(5); //   this._windowMsgNoticeArr[0].disappearCountdown;
        var moveAction = cc.moveBy(0.5, 0, -tweenHeight);
        var reserveMoveAction = cc.moveBy(0.5, 0, tweenHeight);
        var action = cc.sequence(moveAction, delayAction, reserveMoveAction, finished);
        this._windowMsgComponent.node.runAction(action);
    };
    Notice.prototype.updateWindowMsg = function () {
        this.schedule(this.showWindowMsg, 9, this._windowMsgNoticeArr.length, 0);
    };
    Notice.prototype.update = function (dt) {
        if (this._windowMsgNoticeArr.length > 0 || this._msgNoticeArr.length > 0) {
            this.setIndex();
        }
        this._deltaTime += dt;
        if (this._deltaTime >= 30) {
            this._deltaTime = 0;
            this.getNotice();
        }
    };
    Notice.prototype.getNotice = function () {
        var _this = this;
        //获取跑马灯数据
        // this._noticeArr = msg;
        //申请房间成功
        HttpApi_1.default.http
            .get(HttpApi_1.default.server + HttpApi_1.Http_GetNotice, {})
            .then(function (res) {
            if (res.code == 200) {
                _this.getMyNotice();
                if (res.data.standardNotices.length > 0) {
                    _this._msgNoticeArr = res.data.standardNotices;
                    _this.unschedule(_this.showMsg);
                    _this.updateMsg();
                }
                if (res.data.popupNotices.length > 0) {
                    _this._windowMsgNoticeArr = res.data.popupNotices;
                    _this.unschedule(_this.showWindowMsg);
                    _this.updateWindowMsg();
                }
                if (_this._myMsgNotice != null) {
                    _this._msgNoticeArr.push(_this._myMsgNotice);
                }
                if (_this._myWindowMsgNotice != null) {
                    _this._windowMsgNoticeArr.push(_this._myWindowMsgNotice);
                }
            }
            else {
            }
        }, function (err) { })
            .catch(function (err) { });
    };
    Notice.prototype.getMyNotice = function () {
        for (var index = 0; index < this._msgNoticeArr.length; index++) {
            if (this._msgNoticeArr[index].isMine) {
                this._myMsgNotice = this._msgNoticeArr[index];
                break;
            }
            else {
                this._myMsgNotice = null;
            }
        }
        for (var index = 0; index < this._windowMsgNoticeArr.length; index++) {
            if (this._windowMsgNoticeArr[index].isMine) {
                this._myWindowMsgNotice = this._windowMsgNoticeArr[index];
                break;
            }
            else {
                this._myWindowMsgNotice = null;
            }
        }
        this._msgNoticeArr = [];
        this._windowMsgNoticeArr = [];
    };
    Notice.prototype.showNotice = function (type) {
        this.getNotice();
        // switch (type) {
        //     case NOTICE_TYPE.SCROLL_HORIZONAL:
        //         this._msgComponent.visible = true;
        //         this._msgText.text = "scroll message";
        //         break;
        //     case NOTICE_TYPE.TOP_MARQUEE:
        //         this._windowMsgComponent.visible = true;
        //         this._windowMsgData.text = "$777";
        //         break;
        //     default:
        //         this._windowMsgComponent.visible = true;
        //         this._windowMsgData.text = "$777";
        //         break;
        // }
    };
    return Notice;
}(Popup_1.Popup));
exports.Notice = Notice;

cc._RF.pop();