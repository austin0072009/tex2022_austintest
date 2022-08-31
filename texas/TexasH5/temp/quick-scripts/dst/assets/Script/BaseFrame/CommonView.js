
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/CommonView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bacfdwEvZEGZb1pBOA0zdy', 'CommonView');
// Script/BaseFrame/CommonView.ts

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
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var NotificationCenter_1 = require("../Common/Managers/NotificationCenter");
var NotificationName_1 = require("../Common/Managers/NotificationName");
var CommonCtr_1 = require("./CommonCtr");
var ReconnectManager_1 = require("./ReconnectManager");
var SceneManager_1 = require("./SceneManager");
var ViewBase_1 = require("./ViewBase");
var WebSocketManager_1 = require("./WebSocketManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonView = /** @class */ (function (_super) {
    __extends(CommonView, _super);
    function CommonView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_message = null;
        _this.ui_message2 = null;
        _this.ui_btnOK = null;
        _this.ui_btnOKClick = null;
        _this.ui_btnClose = null;
        _this._funOK = null;
        _this._funClose = null;
        _this.ui_loading = null;
        _this.messages = [];
        _this.isOpend = false;
        return _this;
    }
    Object.defineProperty(CommonView.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonView.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonView.prototype, "componentName", {
        get: function () {
            return "TipView";
        },
        enumerable: false,
        configurable: true
    });
    CommonView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        fgui.GRoot.inst.addChild(this.fguiComponent);
        this.fguiComponent.sortingOrder = 10000;
        CommonCtr_1.CommonCtr.instance.view = this;
        this.fguiComponent.visible = false;
        this.moveAnimation = this.fguiComponent.getTransition("t1");
        WebSocketManager_1.WebSocketManager.getInstance.webSocket.setHeartBeatCallback(this.backLogin.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.webSocket.setTopAccountCallback(this.topAccountTip.bind(this));
        NotificationCenter_1.NotificationCenter.Instance.on(NotificationName_1.default.NetWork_Event.SOCKET_CONNECT_SUC_EVENT, this.reconnectGameCallBack.bind(this));
    };
    CommonView.prototype.OnLoadCompleted = function () {
        var scaleX = cc.winSize.width / this.fguiComponent.node.width;
        this.fguiComponent.node.setScale(scaleX, 1);
    };
    CommonView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.moveAnimation.dispose();
        CommonCtr_1.CommonCtr.instance.view = null;
        NotificationCenter_1.NotificationCenter.Instance.off(NotificationName_1.default.NetWork_Event.SOCKET_CONNECT_SUC_EVENT);
    };
    CommonView.prototype.ShowTipLabel = function (mes) {
        // this.messages.push(mes);
        // if (!this.isOpend) {
        //     this.tipMessage();
        // }
        console.log("---ShowTipLabel---", mes);
        this.setControllerProperty("type", 1);
        this.Show();
        this.ui_message2.visible = false;
        // 这里只能复制node 复制ui_message2在浏览器没问题 在真机模拟器上设置位置无效
        // 这里复制完node 用的是cocos的语法
        var node = cc.instantiate(this.ui_message2.node);
        node.parent = this.ui_message2.node.parent;
        node.position = this.ui_message2.node.position;
        node.getComponent(cc.Label).string = mes;
        node.active = true;
        cc.tween(node)
            .parallel(cc.tween().by(1.5, { position: cc.v3(0, 400, 0) }), cc.tween().to(1.5, { opacity: 128 }))
            .call(function () {
            node.removeFromParent(true);
        })
            .start();
    };
    CommonView.prototype.tipMessage = function () {
        var _this = this;
        var mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.Hide();
            return;
        }
        this.setControllerProperty("type", 1);
        this.Show();
        this.isOpend = true;
        this.ui_message2.text = mess;
        this.moveAnimation.play(function () {
            _this.ui_message2.text = '';
            _this.tipMessage();
        }, 1);
    };
    CommonView.prototype.ShowTip = function (mes, funok, funclose) {
        var _this = this;
        this.ui_btnOK.clearClick();
        this.ui_btnOKClick.clearClick();
        this.ui_btnClose.clearClick();
        this.setControllerProperty("type", 0);
        this.ui_message.text = mes;
        this._funOK = funok;
        this._funClose = funclose;
        if (this._funOK) {
            this.ui_btnOKClick.onClick(function () {
                _this.Hide();
                _this._funOK();
            });
            this.ui_btnOK.onClick(function () {
                _this.Hide();
                _this._funOK();
            });
        }
        else {
            this.ui_btnOK.onClick(function () {
                _this.Hide();
            });
        }
        if (this._funClose) {
            this.ui_btnClose.onClick(function () {
                _this.Hide();
                _this._funClose();
            });
            this.ui_btnOK.visible = false;
            this.ui_btnOKClick.visible = true;
            this.ui_btnClose.visible = true;
        }
        else {
            this.ui_btnOK.visible = true;
            this.ui_btnOKClick.visible = false;
            this.ui_btnClose.visible = false;
        }
        this.Show();
    };
    // 显示菊花loading
    CommonView.prototype.showLoading = function () {
        this.setControllerProperty("type", 2);
        cc.tween(this.ui_loading.node)
            .by(1, { angle: -360 })
            .repeatForever()
            .start();
        this.Show();
    };
    CommonView.prototype.hideLoading = function () {
        this.Hide();
    };
    CommonView.prototype.Hide = function () {
        this.ui_btnOK.clearClick();
        this.ui_btnOKClick.clearClick();
        this.ui_btnClose.clearClick();
        _super.prototype.Hide.call(this);
    };
    //断线超时，返回登录页
    CommonView.prototype.backLogin = function (tipString) {
        var _this = this;
        if (tipString === void 0) { tipString = "与服务器断开连接，请重新登录！"; }
        this.setControllerProperty("type", 0);
        if (BaseFrameNative_1.BaseFrameNative.isInHall) {
            tipString = "与服务器断开连接，请重新连接！";
            // LobbyViewCtr.instance.view.gameEventShow();
            // return;
        }
        this.ui_btnOK.onClick(function () {
            _this.Hide();
            if (BaseFrameNative_1.BaseFrameNative.isInHall) {
                _this.gameEventShow();
            }
            else {
                // SceneManager.Singleton.loadScene("gameHall", "login");
                tipString = "与服务器断开连接，请重新连接！";
                if (BaseFrameNative_1.BaseFrameNative.nowGameView) {
                    BaseFrameNative_1.BaseFrameNative.nowGameView.sendReconnect();
                }
            }
        });
        this.ui_message.text = tipString;
        this.ui_btnOK.visible = true;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    };
    CommonView.prototype.topAccountTip = function (tipString) {
        var _this = this;
        this.setControllerProperty("type", 0);
        this.ui_btnOK.onClick(function () {
            _this.Hide();
            SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "login");
        });
        this.ui_message.text = tipString;
        this.ui_btnOK.visible = true;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    };
    CommonView.prototype.gameEventShow = function () {
        ReconnectManager_1.ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this), false);
    };
    CommonView.prototype.connectSuccess = function () {
        console.log("--- connectSuccess ---");
    };
    CommonView.prototype.connectFail = function () {
        this.backLogin();
    };
    CommonView.prototype.gameEventHide = function () {
        console.log("--- gameEventHide ---");
        cc.game.pause();
    };
    // 游戏有更新
    CommonView.prototype.subGamesHaveUpdate = function (tipStr, callback) {
        this.ShowTip(tipStr, function () {
            callback();
        });
        // callback();
    };
    CommonView.prototype.ShowTipTest = function (mes, funok, funclose) {
        this.setControllerProperty("type", 0);
        this.ui_message.text = mes;
        this._funOK = funok;
        this._funClose = funclose;
        this.ui_btnOK.visible = false;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    };
    // 显示下载百分比
    CommonView.prototype.showDownloadPercent = function (per) {
        var _this = this;
        this.ShowTip(per, function () {
            _this.Hide();
        });
    };
    // 显示下载百分比
    CommonView.prototype.showDownloadCompelete = function (tipString) {
        var _this = this;
        this.ShowTip(tipString, function () {
            _this.Hide();
        });
    };
    CommonView.prototype.reconnectGameCallBack = function () {
        console.log("---reconnectGameCallBack---");
        SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "login");
    };
    CommonView = __decorate([
        ccclass
    ], CommonView);
    return CommonView;
}(ViewBase_1.default));
exports.default = CommonView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXENvbW1vblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0VBQStEO0FBQy9ELDRFQUEyRTtBQUMzRSx3RUFBbUU7QUFDbkUseUNBQXdDO0FBQ3hDLHVEQUFzRDtBQUN0RCwrQ0FBOEM7QUFDOUMsdUNBQWtDO0FBQ2xDLHVEQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBUTtJQUFoRDtRQUFBLHFFQStQQztRQXhPVSxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFFaEMsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQTBDL0IsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixhQUFPLEdBQVksS0FBSyxDQUFDOztJQW9MckMsQ0FBQztJQTlQRyxzQkFBYywyQ0FBbUI7YUFBakM7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLG1DQUFXO2FBQXpCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxxQ0FBYTthQUEzQjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsMENBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFB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QUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVTtJQUNILHdDQUFtQixHQUExQixVQUEyQixHQUFXO1FBQXRDLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZCxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVTtJQUNILDBDQUFxQixHQUE1QixVQUE2QixTQUFpQjtRQUE5QyxpQkFJQztRQUhHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQ0FBcUIsR0FBNUI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsMkJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBOVBnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBK1A5QjtJQUFELGlCQUFDO0NBL1BELEFBK1BDLENBL1B1QyxrQkFBUSxHQStQL0M7a0JBL1BvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vLi4vR2FtZUhhbGwvc2NyaXB0L0xvYmJ5L0xvYmJ5Vmlld0N0clwiO1xuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNlbnRlciB9IGZyb20gXCIuLi9Db21tb24vTWFuYWdlcnMvTm90aWZpY2F0aW9uQ2VudGVyXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uTmFtZSBmcm9tIFwiLi4vQ29tbW9uL01hbmFnZXJzL05vdGlmaWNhdGlvbk5hbWVcIjtcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuL0NvbW1vbkN0clwiO1xuaW1wb3J0IHsgUmVjb25uZWN0TWFuYWdlciB9IGZyb20gXCIuL1JlY29ubmVjdE1hbmFnZXJcIjtcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gXCIuL1NjZW5lTWFuYWdlclwiO1xuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyIH0gZnJvbSBcIi4vV2ViU29ja2V0TWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2FtZUNvbW1vblwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNvbW1vblwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiVGlwVmlld1wiO1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmZndWlDb21wb25lbnQpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc29ydGluZ09yZGVyID0gMTAwMDA7XG4gICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3ID0gdGhpcztcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlQW5pbWF0aW9uID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MVwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS53ZWJTb2NrZXQuc2V0SGVhcnRCZWF0Q2FsbGJhY2sodGhpcy5iYWNrTG9naW4uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2Uud2ViU29ja2V0LnNldFRvcEFjY291bnRDYWxsYmFjayh0aGlzLnRvcEFjY291bnRUaXAuYmluZCh0aGlzKSk7XG4gICAgICAgIE5vdGlmaWNhdGlvbkNlbnRlci5JbnN0YW5jZS5vbihOb3RpZmljYXRpb25OYW1lLk5ldFdvcmtfRXZlbnQuU09DS0VUX0NPTk5FQ1RfU1VDX0VWRU5ULCB0aGlzLnJlY29ubmVjdEdhbWVDYWxsQmFjay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdWlfbWVzc2FnZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfbWVzc2FnZTI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bk9LOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5PS0NsaWNrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5DbG9zZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2Z1bk9LOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZnVuQ2xvc2U6IEZ1bmN0aW9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlfbG9hZGluZzogZmd1aS5HSW1hZ2UgPSBudWxsO1xuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICBsZXQgc2NhbGVYID0gY2Mud2luU2l6ZS53aWR0aCAvIHRoaXMuZmd1aUNvbXBvbmVudC5ub2RlLndpZHRoO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5zZXRTY2FsZShzY2FsZVgsIDEpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIHRoaXMubW92ZUFuaW1hdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3ID0gbnVsbDtcbiAgICAgICAgTm90aWZpY2F0aW9uQ2VudGVyLkluc3RhbmNlLm9mZihOb3RpZmljYXRpb25OYW1lLk5ldFdvcmtfRXZlbnQuU09DS0VUX0NPTk5FQ1RfU1VDX0VWRU5UKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd1RpcExhYmVsKG1lczogc3RyaW5nKSB7XG4gICAgICAgIC8vIHRoaXMubWVzc2FnZXMucHVzaChtZXMpO1xuICAgICAgICAvLyBpZiAoIXRoaXMuaXNPcGVuZCkge1xuICAgICAgICAvLyAgICAgdGhpcy50aXBNZXNzYWdlKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc29sZS5sb2coXCItLS1TaG93VGlwTGFiZWwtLS1cIiwgbWVzKTtcbiAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDEpO1xuICAgICAgICB0aGlzLlNob3coKTtcblxuICAgICAgICB0aGlzLnVpX21lc3NhZ2UyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLy8g6L+Z6YeM5Y+q6IO95aSN5Yi2bm9kZSDlpI3liLZ1aV9tZXNzYWdlMuWcqOa1j+iniOWZqOayoemXrumimCDlnKjnnJ/mnLrmqKHmi5/lmajkuIrorr7nva7kvY3nva7ml6DmlYhcbiAgICAgICAgLy8g6L+Z6YeM5aSN5Yi25a6Mbm9kZSDnlKjnmoTmmK9jb2Nvc+eahOivreazlVxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudWlfbWVzc2FnZTIubm9kZSk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy51aV9tZXNzYWdlMi5ub2RlLnBhcmVudDtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMudWlfbWVzc2FnZTIubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1lcztcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMS41LCB7IHBvc2l0aW9uOiBjYy52MygwLCA0MDAsIDApIH0pLFxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMS41LCB7IG9wYWNpdHk6IDEyOCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBpc09wZW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBtb3ZlQW5pbWF0aW9uOiBmZ3VpLlRyYW5zaXRpb247XG4gICAgcHJpdmF0ZSB0aXBNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbWVzcyA9IHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKCFtZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAxKTtcbiAgICAgICAgdGhpcy5TaG93KCk7XG4gICAgICAgIHRoaXMuaXNPcGVuZCA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfbWVzc2FnZTIudGV4dCA9IG1lc3M7XG4gICAgICAgIHRoaXMubW92ZUFuaW1hdGlvbi5wbGF5KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlfbWVzc2FnZTIudGV4dCA9ICcnO1xuICAgICAgICAgICAgdGhpcy50aXBNZXNzYWdlKCk7XG4gICAgICAgIH0sIDEpXG4gICAgfVxuXG4gICAgcHVibGljIFNob3dUaXAobWVzOiBzdHJpbmcsIGZ1bm9rPzogRnVuY3Rpb24sIGZ1bmNsb3NlPzogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy51aV9idG5PSy5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuT0tDbGljay5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2UuY2xlYXJDbGljaygpO1xuXG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAwKVxuICAgICAgICB0aGlzLnVpX21lc3NhZ2UudGV4dCA9IG1lcztcbiAgICAgICAgdGhpcy5fZnVuT0sgPSBmdW5vaztcbiAgICAgICAgdGhpcy5fZnVuQ2xvc2UgPSBmdW5jbG9zZTtcblxuICAgICAgICBpZiAodGhpcy5fZnVuT0spIHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuT0tDbGljay5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mdW5PSygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudWlfYnRuT0sub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVuT0soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9idG5PSy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2Z1bkNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkNsb3NlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bkNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy51aV9idG5PSy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bk9LQ2xpY2sudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkNsb3NlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9idG5PSy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuT0tDbGljay52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkNsb3NlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNob3coKTtcbiAgICB9XG5cbiAgICAvLyDmmL7npLroj4roirFsb2FkaW5nXG4gICAgcHVibGljIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMudWlfbG9hZGluZy5ub2RlKVxuICAgICAgICAgICAgLmJ5KDEsIHsgYW5nbGU6IC0zNjAgfSlcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgfVxuXG4gICAgSGlkZSgpIHtcbiAgICAgICAgdGhpcy51aV9idG5PSy5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuT0tDbGljay5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2UuY2xlYXJDbGljaygpO1xuICAgICAgICBzdXBlci5IaWRlKCk7XG4gICAgfVxuXG4gICAgLy/mlq3nur/otoXml7bvvIzov5Tlm57nmbvlvZXpobVcbiAgICBwdWJsaWMgYmFja0xvZ2luKHRpcFN0cmluZzogc3RyaW5nID0gXCLkuI7mnI3liqHlmajmlq3lvIDov57mjqXvvIzor7fph43mlrDnmbvlvZXvvIFcIikge1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMClcbiAgICAgICAgaWYgKEJhc2VGcmFtZU5hdGl2ZS5pc0luSGFsbCkge1xuICAgICAgICAgICAgdGlwU3RyaW5nID0gXCLkuI7mnI3liqHlmajmlq3lvIDov57mjqXvvIzor7fph43mlrDov57mjqXvvIFcIjtcbiAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LmdhbWVFdmVudFNob3coKTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX2J0bk9LLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICBpZiAoQmFzZUZyYW1lTmF0aXZlLmlzSW5IYWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRXZlbnRTaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcbiAgICAgICAgICAgICAgICB0aXBTdHJpbmcgPSBcIuS4juacjeWKoeWZqOaWreW8gOi/nuaOpe+8jOivt+mHjeaWsOi/nuaOpe+8gVwiO1xuICAgICAgICAgICAgICAgIGlmIChCYXNlRnJhbWVOYXRpdmUubm93R2FtZVZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgQmFzZUZyYW1lTmF0aXZlLm5vd0dhbWVWaWV3LnNlbmRSZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX21lc3NhZ2UudGV4dCA9IHRpcFN0cmluZztcblxuICAgICAgICB0aGlzLnVpX2J0bk9LLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVpX2J0bk9LQ2xpY2sudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvcEFjY291bnRUaXAodGlwU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDApXG4gICAgICAgIHRoaXMudWlfYnRuT0sub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfbWVzc2FnZS50ZXh0ID0gdGlwU3RyaW5nO1xuXG4gICAgICAgIHRoaXMudWlfYnRuT0sudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfYnRuT0tDbGljay52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlNob3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZUV2ZW50U2hvdygpIHtcbiAgICAgICAgUmVjb25uZWN0TWFuYWdlci5nZXRJbnN0YW5jZS5yZWNvbm5lY3QodGhpcy5jb25uZWN0U3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLmNvbm5lY3RGYWlsLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdFN1Y2Nlc3MoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIGNvbm5lY3RTdWNjZXNzIC0tLVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdEZhaWwoKSB7XG4gICAgICAgIHRoaXMuYmFja0xvZ2luKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdhbWVFdmVudEhpZGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIGdhbWVFdmVudEhpZGUgLS0tXCIpO1xuICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLy8g5ri45oiP5pyJ5pu05pawXG4gICAgcHVibGljIHN1YkdhbWVzSGF2ZVVwZGF0ZSh0aXBTdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuU2hvd1RpcCh0aXBTdHIsICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93VGlwVGVzdChtZXM6IHN0cmluZywgZnVub2s/OiBGdW5jdGlvbiwgZnVuY2xvc2U/OiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMClcbiAgICAgICAgdGhpcy51aV9tZXNzYWdlLnRleHQgPSBtZXM7XG4gICAgICAgIHRoaXMuX2Z1bk9LID0gZnVub2s7XG4gICAgICAgIHRoaXMuX2Z1bkNsb3NlID0gZnVuY2xvc2U7XG5cbiAgICAgICAgdGhpcy51aV9idG5PSy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfYnRuT0tDbGljay52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlNob3coKTtcbiAgICB9XG5cbiAgICAvLyDmmL7npLrkuIvovb3nmb7liIbmr5RcbiAgICBwdWJsaWMgc2hvd0Rvd25sb2FkUGVyY2VudChwZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLlNob3dUaXAocGVyLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5pi+56S65LiL6L2955m+5YiG5q+UXG4gICAgcHVibGljIHNob3dEb3dubG9hZENvbXBlbGV0ZSh0aXBTdHJpbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLlNob3dUaXAodGlwU3RyaW5nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlY29ubmVjdEdhbWVDYWxsQmFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1yZWNvbm5lY3RHYW1lQ2FsbEJhY2stLS1cIik7XG4gICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcbiAgICB9XG59Il19