
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Notice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXE5vdGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdGO0FBQ3hGLHFFQUFvRTtBQUdwRSxJQUFNLFdBQVcsR0FBRztJQUNoQixTQUFTO0lBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixTQUFTO0lBQ1QsV0FBVyxFQUFFLENBQUM7Q0FDakIsQ0FBQztBQUNGO0lBQTRCLDBCQUFLO0lBQWpDO1FBQUEscUVBME5DO1FBdExXLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBTW5CLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQix3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBNEt0QyxDQUFDO0lBek5HLHNCQUFjLDZCQUFTO2FBQXZCO1lBQ0ksT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDRCQUFRO2FBQXRCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsZ0NBQVk7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGdDQUFZO2FBQTFCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsaUNBQWE7YUFBM0I7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx1Q0FBbUI7YUFBakM7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLCtCQUFXO2FBQXpCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFD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LElBQVk7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLGtCQUFrQjtRQUNsQix5Q0FBeUM7UUFDekMsNkNBQTZDO1FBQzdDLGlEQUFpRDtRQUNqRCxpQkFBaUI7UUFDakIsb0NBQW9DO1FBQ3BDLG1EQUFtRDtRQUNuRCw2Q0FBNkM7UUFDN0MsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtREFBbUQ7UUFDbkQsNkNBQTZDO1FBQzdDLGlCQUFpQjtRQUNqQixJQUFJO0lBQ1IsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQTFOQSxBQTBOQyxDQTFOMkIsYUFBSyxHQTBOaEM7QUExTlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHR0cEFwaSwgeyBIdHRwX0dldE5vdGljZSB9IGZyb20gXCIuLi9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0h0dHBBcGlcIjtcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvUG9wdXBcIjtcblxuIFxuY29uc3QgTk9USUNFX1RZUEUgPSB7XG4gICAgLy8qIOaoquWQkea7muWKqOadoVxuICAgIFNDUk9MTF9IT1JJWk9OQUw6IDAsXG4gICAgLy8qIOmhtumDqOi3kemprOeBr1xuICAgIFRPUF9NQVJRVUVFOiAxLFxufTtcbmV4cG9ydCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBQb3B1cCB7XG4gICAgcHJvdGVjdGVkIGdldCBiYXNlUGFuZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYW5pbU5vZGUoKTogY2MuTm9kZVtdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uT0tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGdvbGRHcm93TmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vcm1hbE51bU5hbWUoKTogc3RyaW5nW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdhbWVDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIk5vdGljZVwiO1xuICAgIH1cbiAgICBnZXQgY2xvc2VUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZ2V0IGlzUmVnaXN0ZXJOb2RlRXZlbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tc2dDb21wb25lbnQ6IGZndWkuR09iamVjdDtcbiAgICBwcml2YXRlIF9tc2dJbmZvQ29tcG9uZW50OiBmZ3VpLkdDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfbXNnVGV4dDogZmd1aS5HVGV4dEZpZWxkO1xuICAgIHByaXZhdGUgX21zZ0hlYWQ6IGZndWkuR0xvYWRlcjtcbiAgICBwcml2YXRlIF9tc2dOb3RpY2VBcnIgPSBbXTtcblxuICAgIHByaXZhdGUgX3dpbmRvd01zZ0NvbXBvbmVudDogZmd1aS5HT2JqZWN0O1xuICAgIHByaXZhdGUgX3dpbmRvd01zZ05hbWU6IGZndWkuR0xhYmVsO1xuICAgIHByaXZhdGUgX3dpbmRvd01zZ0RhdGE6IGZndWkuR0xhYmVsO1xuICAgIHByaXZhdGUgX3dpbmRvd01zZ0hlYWQ6IGZndWkuR0xvYWRlcjtcbiAgICBwcml2YXRlIF93aW5kb3dNc2dOb3RpY2VBcnIgPSBbXTtcblxuICAgIHByaXZhdGUgX2RlbHRhVGltZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9teU1zZ05vdGljZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbXlXaW5kb3dNc2dOb3RpY2UgPSBudWxsO1xuXG4gICAgYWxsQ2hpbGRDcmVhdGVkKCkge1xuICAgICAgICBzdXBlci5hbGxDaGlsZENyZWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuXG4gICAgICAgIHRoaXMuX21zZ0NvbXBvbmVudCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm5vdGljZU1zZ1wiKTtcbiAgICAgICAgdGhpcy5fbXNnSW5mb0NvbXBvbmVudCA9IHRoaXMuZ2V0Q2hpbGQoXCJub3RpY2VNc2cubm90aWNlTXNnSW5mb1wiKS5hc0NvbTtcbiAgICAgICAgdGhpcy5fbXNnSW5mb0NvbXBvbmVudC54ID0gMTkyMDtcbiAgICAgICAgdGhpcy5fbXNnVGV4dCA9IHRoaXMuZ2V0Q2hpbGQoXCJub3RpY2VNc2cubm90aWNlTXNnSW5mby5tc2dcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIHRoaXMuX21zZ0hlYWQgPSB0aGlzLmdldENoaWxkKFwibm90aWNlTXNnLm5vdGljZU1zZ0luZm8uaGVhZFwiKS5hc0xvYWRlcjtcblxuICAgICAgICB0aGlzLl93aW5kb3dNc2dDb21wb25lbnQgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJub3RpY2VXaW5kb3dcIik7XG4gICAgICAgIHRoaXMuX3dpbmRvd01zZ0NvbXBvbmVudC55ID0gLTIwMDtcbiAgICAgICAgdGhpcy5fd2luZG93TXNnTmFtZSA9IHRoaXMuZ2V0Q2hpbGQoXCJub3RpY2VXaW5kb3cubmFtZVwiKS5hc0xhYmVsO1xuICAgICAgICB0aGlzLl93aW5kb3dNc2dEYXRhID0gdGhpcy5nZXRDaGlsZChcIm5vdGljZVdpbmRvdy5wcmljZVwiKS5hc0xhYmVsO1xuICAgICAgICB0aGlzLl93aW5kb3dNc2dIZWFkID0gdGhpcy5nZXRDaGlsZChcIm5vdGljZVdpbmRvdy5oZWFkXCIpLmFzTG9hZGVyO1xuXG4gICAgICAgIHRoaXMuX21zZ0NvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3dpbmRvd01zZ0NvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwiaXNTaG93QmdcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVNc2coKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zaG93TXNnKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvd01zZywgMTAsIHRoaXMuX21zZ05vdGljZUFyci5sZW5ndGgsIDApO1xuICAgIH1cbiAgICBhY3Rpb25EbygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJpc1Nob3dCZ1wiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICB0aGlzLl9tc2dDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX21zZ1RleHQudGV4dCA9IHRoaXMuX21zZ05vdGljZUFyclswXS5jb250ZW50O1xuICAgICAgICB0aGlzLl9tc2dIZWFkLnVybCA9IHRoaXMuX21zZ05vdGljZUFyclswXS5oZWFkSW1hZ2VVcmw7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd01zZygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHZpc2libGVTaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcImlzU2hvd0JnXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgIHRoaXMuX21zZ0NvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbXNnVGV4dC50ZXh0ID0gdGhpcy5fbXNnTm90aWNlQXJyWzBdLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuX21zZ0hlYWQudXJsID0gdGhpcy5fbXNnTm90aWNlQXJyWzBdLmhlYWRJbWFnZVVybDtcbiAgICAgICAgbGV0IHR3ZWVuV2lkdGggPSAtMTkyMCAvIDI7XG4gICAgICAgIGxldCBzcGVlZCA9ICgxOTIwIC0gdHdlZW5XaWR0aCkgLyAyNTA7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fbXNnVGV4dC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHNlbGYuX21zZ0hlYWQudXJsID0gXCJcIjtcbiAgICAgICAgICAgIHNlbGYuX21zZ0luZm9Db21wb25lbnQubm9kZS54ID0gMTkyMDtcbiAgICAgICAgICAgIHNlbGYuX21zZ0luZm9Db21wb25lbnQueCA9IDE5MjA7XG4gICAgICAgICAgICBzZWxmLl9tc2dOb3RpY2VBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLl9tc2dOb3RpY2VBcnIubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX21zZ0NvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJpc1Nob3dCZ1wiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgICAgIC8vICAgc2VsZi51bnNjaGVkdWxlKHNlbGYuc2hvd01zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlTXNnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MubW92ZVRvKHNwZWVkLCB0d2VlbldpZHRoLCB0aGlzLl9tc2dJbmZvQ29tcG9uZW50LmhlaWdodCAvIDIpLCBmaW5pc2hlZCk7XG4gICAgICAgIHRoaXMuX21zZ0luZm9Db21wb25lbnQubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93V2luZG93TXNnKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl93aW5kb3dNc2dDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3dpbmRvd01zZ05hbWUudGV4dCA9IHRoaXMuX3dpbmRvd01zZ05vdGljZUFyclswXS5uYW1lO1xuICAgICAgICB0aGlzLl93aW5kb3dNc2dEYXRhLnRleHQgPSBcIiRcIiArIHRoaXMuX3dpbmRvd01zZ05vdGljZUFyclswXS53b25WYWx1ZTtcbiAgICAgICAgdGhpcy5fd2luZG93TXNnSGVhZC51cmwgPSB0aGlzLl93aW5kb3dNc2dOb3RpY2VBcnJbMF0uaGVhZEltYWdlVXJsO1xuICAgICAgICBsZXQgdHdlZW5IZWlnaHQgPSAyMDA7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fd2luZG93TXNnTmFtZS50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHNlbGYuX3dpbmRvd01zZ0RhdGEudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLl93aW5kb3dNc2dIZWFkLnVybCA9IFwiXCI7XG4gICAgICAgICAgICBzZWxmLl93aW5kb3dNc2dDb21wb25lbnQueSA9IC0yMDA7XG4gICAgICAgICAgICBzZWxmLl93aW5kb3dNc2dOb3RpY2VBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLl93aW5kb3dNc2dOb3RpY2VBcnIubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3dpbmRvd01zZ0NvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi51bnNjaGVkdWxlKHNlbGYuc2hvd1dpbmRvd01zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoNSk7IC8vICAgdGhpcy5fd2luZG93TXNnTm90aWNlQXJyWzBdLmRpc2FwcGVhckNvdW50ZG93bjtcbiAgICAgICAgbGV0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlQnkoMC41LCAwLCAtdHdlZW5IZWlnaHQpO1xuICAgICAgICBsZXQgcmVzZXJ2ZU1vdmVBY3Rpb24gPSBjYy5tb3ZlQnkoMC41LCAwLCB0d2VlbkhlaWdodCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShtb3ZlQWN0aW9uLCBkZWxheUFjdGlvbiwgcmVzZXJ2ZU1vdmVBY3Rpb24sIGZpbmlzaGVkKTtcbiAgICAgICAgdGhpcy5fd2luZG93TXNnQ29tcG9uZW50Lm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93TXNnKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvd1dpbmRvd01zZywgOSwgdGhpcy5fd2luZG93TXNnTm90aWNlQXJyLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fd2luZG93TXNnTm90aWNlQXJyLmxlbmd0aCA+IDAgfHwgdGhpcy5fbXNnTm90aWNlQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPj0gMzApIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmdldE5vdGljZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0Tm90aWNlKCk6IHZvaWQge1xuICAgICAgICAvL+iOt+WPlui3kemprOeBr+aVsOaNrlxuICAgICAgICAvLyB0aGlzLl9ub3RpY2VBcnIgPSBtc2c7XG4gICAgICAgIC8v55Sz6K+35oi/6Ze05oiQ5YqfXG4gICAgICAgIEh0dHBBcGkuaHR0cFxuICAgICAgICAgICAgLmdldChIdHRwQXBpLnNlcnZlciArIEh0dHBfR2V0Tm90aWNlLCB7fSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE15Tm90aWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhbmRhcmROb3RpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tc2dOb3RpY2VBcnIgPSByZXMuZGF0YS5zdGFuZGFyZE5vdGljZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvd01zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNc2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5wb3B1cE5vdGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd01zZ05vdGljZUFyciA9IHJlcy5kYXRhLnBvcHVwTm90aWNlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93V2luZG93TXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd01zZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX215TXNnTm90aWNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tc2dOb3RpY2VBcnIucHVzaCh0aGlzLl9teU1zZ05vdGljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbXlXaW5kb3dNc2dOb3RpY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd01zZ05vdGljZUFyci5wdXNoKHRoaXMuX215V2luZG93TXNnTm90aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge31cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TXlOb3RpY2UoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tc2dOb3RpY2VBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbXNnTm90aWNlQXJyW2luZGV4XS5pc01pbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9teU1zZ05vdGljZSA9IHRoaXMuX21zZ05vdGljZUFycltpbmRleF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX215TXNnTm90aWNlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fd2luZG93TXNnTm90aWNlQXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dpbmRvd01zZ05vdGljZUFycltpbmRleF0uaXNNaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbXlXaW5kb3dNc2dOb3RpY2UgPSB0aGlzLl93aW5kb3dNc2dOb3RpY2VBcnJbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9teVdpbmRvd01zZ05vdGljZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbXNnTm90aWNlQXJyID0gW107XG4gICAgICAgIHRoaXMuX3dpbmRvd01zZ05vdGljZUFyciA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93Tm90aWNlKHR5cGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmdldE5vdGljZSgpO1xuICAgICAgICAvLyBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgTk9USUNFX1RZUEUuU0NST0xMX0hPUklaT05BTDpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9tc2dDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fbXNnVGV4dC50ZXh0ID0gXCJzY3JvbGwgbWVzc2FnZVwiO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBOT1RJQ0VfVFlQRS5UT1BfTUFSUVVFRTpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl93aW5kb3dNc2dDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fd2luZG93TXNnRGF0YS50ZXh0ID0gXCIkNzc3XCI7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX3dpbmRvd01zZ0NvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl93aW5kb3dNc2dEYXRhLnRleHQgPSBcIiQ3NzdcIjtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbiJdfQ==