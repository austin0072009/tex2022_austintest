"use strict";
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