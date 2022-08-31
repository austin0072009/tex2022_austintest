"use strict";
cc._RF.push(module, 'dad31OgWB5PPab7gEjv9OBq', 'ReconnectManager');
// Script/BaseFrame/ReconnectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectManager = void 0;
var WebSocketManager_1 = require("../../Script/BaseFrame/WebSocketManager");
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var HotfixMessage_pb_1 = require("../../Script/modules/@mogafa/utils/lib/proto/HotfixMessage.pb");
var MessageID_pb_1 = require("../../Script/modules/@mogafa/utils/lib/proto/MessageID.pb");
var OuterMessage_pb_1 = require("../../Script/modules/@mogafa/utils/lib/proto/OuterMessage.pb");
var WebSocketApi_1 = require("../../Script/modules/@slotsmaster/ui-common/lib/WebSocketApi");
var ClientMessage = require("../../Script/modules/@mogafa/utils/lib/ClientMessage");
var AppConst_1 = require("../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var SceneManager_1 = require("../../Script/BaseFrame/SceneManager");
var ToolsEx_1 = require("../../Script/Common/ToolsEx");
var ReconnectManager = /** @class */ (function () {
    function ReconnectManager() {
        this._host = "";
        this._port = "";
        this.callBackOK = null;
        this.callBackFail = null;
        this.time = 15;
        this.timer = null;
        this.isNeedBackHall = true;
    }
    Object.defineProperty(ReconnectManager, "getInstance", {
        get: function () {
            if (!this.instance) {
                this.instance = new ReconnectManager();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    // 重连
    ReconnectManager.prototype.reconnect = function (callbackok, callbackfail, isNeedBackHall) {
        if (isNeedBackHall === void 0) { isNeedBackHall = true; }
        this.callBackOK = callbackok;
        this.callBackFail = callbackfail;
        this.isNeedBackHall = isNeedBackHall;
        this.startReconnect();
    };
    ReconnectManager.prototype.startReconnect = function () {
        console.log("this.getNetWorkStatus() == ", this.getNetWorkStatus());
        if (this.getNetWorkStatus()) {
            var websocketstatus = WebSocketApi_1.default.socket.getConnectState();
            console.log("websocketstatus == ", websocketstatus);
            if (websocketstatus) {
                if (this.callBackOK) {
                    this.callBackOK();
                }
            }
            else {
                this.connectLogin();
            }
        }
        else {
            // CommonCtr.instance.view.ShowTip("请检查设备网络是否打开", () => {
            //     this.reconnect(callbackok);
            // });
            if (this.callBackFail) {
                this.callBackFail("请检查设备网络是否打开");
            }
        }
    };
    ReconnectManager.prototype.connectLogin = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            if (_this.callBackFail) {
                _this.callBackFail("连接服务器超时，请重试！");
            }
        }, this.time * 1000);
        this.login();
    };
    // 发起登录
    ReconnectManager.prototype.login = function () {
        var _this = this;
        this._host = BaseFrameNative_1.BaseFrameNative.serverlistItem.url;
        this._port = BaseFrameNative_1.BaseFrameNative.serverlistItem.port;
        var pid = cc.sys.localStorage.getItem("login_pid");
        var pwd = cc.sys.localStorage.getItem("login_pwd");
        console.log("this._host === ", this._host);
        console.log("this._port === ", this._port);
        console.log("pid === ", pid);
        console.log("pwd === ", pwd);
        if (this._host && this._port && pid && pwd) {
            var reqlogin_1 = HotfixMessage_pb_1.HotfixMessage.C2R_Login.create();
            reqlogin_1.Account = pid;
            reqlogin_1.RpcId = 1;
            reqlogin_1.Password = ToolsEx_1.ToolsEx.Singleton.EncryptionPWD(pwd);
            var params = {
                host: this._host,
                port: this._port,
                callback: function () {
                    WebSocketApi_1.default.socket.request(MessageID_pb_1.proto.MsgID.C2R_Login, reqlogin_1, _this.Login_C2R_Login_Back.bind(_this));
                },
            };
            WebSocketApi_1.default.socket.reconnect(params);
        }
    };
    ReconnectManager.prototype.Login_C2R_Login_Back = function (ret) {
        var _this = this;
        console.log("---ReconnectManager Login_C2R_Login_Back---", ret);
        WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
        if (ret.Error && ret.Error == "200102") {
            if (this.callBackFail) {
                this.callBackFail("连接失败，账号或密码错误");
            }
            return;
        }
        setTimeout(function () {
            _this.LoginGate(ret);
        }, 200);
    };
    ReconnectManager.prototype.LoginGate = function (msg) {
        var _this = this;
        var str = msg.Address.split(":", 2);
        this._host = str[0];
        this._port = str[1];
        if (this._port && this._host) {
            var reqlogin_2 = HotfixMessage_pb_1.HotfixMessage.C2G_LoginGate.create();
            reqlogin_2.userid = msg.userid;
            reqlogin_2.Key = msg.Key;
            var params = {
                host: this._host,
                port: this._port,
                callback: function () {
                    WebSocketApi_1.default.socket.request(MessageID_pb_1.proto.MsgID.C2G_LoginGate, reqlogin_2, _this.LoginGate_back.bind(_this));
                },
            };
            WebSocketApi_1.default.socket.reconnect(params);
        }
    };
    ReconnectManager.prototype.LoginGate_back = function () {
        if (this._port && this._host) {
            var reqlogin = OuterMessage_pb_1.OuterMessage.C2G_EnterMap.create();
            WebSocketApi_1.default.socket.request(MessageID_pb_1.proto.MsgID.C2G_EnterMap, reqlogin, this.EnterMap_Back.bind(this));
        }
    };
    ReconnectManager.prototype.EnterMap_Back = function (ret) {
        var login = new ClientMessage.cs_login();
        login.fn = "cs_login";
        login.accountId = AppConst_1.AppConst.Account;
        var json_login = JSON.stringify(login);
        WebSocketManager_1.WebSocketManager.getInstance.Send(json_login, this.sc_login.bind(this));
    };
    ReconnectManager.prototype.sc_login = function (data) {
        console.log("---sc_login---", data);
        if (data.result == 1) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            AppConst_1.AppConst.Account = data.user.userid;
            AppConst_1.AppConst.gameId = data.gameid;
            AppConst_1.AppConst.cidx = data.cidx;
            AppConst_1.AppConst.mPlayerModel = data.user;
            if (data.user.state > 0 || !this.isNeedBackHall) {
                AppConst_1.AppConst.mPlayerModel.state = 0;
                // 需要重连 调用重连回调
                if (this.callBackOK) {
                    this.callBackOK();
                    this.callBackOK = null;
                }
            }
            else {
                // 不需要重连返回大厅
                if (this.isNeedBackHall) {
                    SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "lobby");
                }
            }
        }
    };
    // 获取网络连接状态 false无网  true有网
    ReconnectManager.prototype.getNetWorkStatus = function () {
        var net = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取网络状态 */
            var methodSignature = "()Ljava/lang/String;";
            var method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        var netArr = net.split("_");
        if (netArr[0] == "-1") {
            return false;
        }
        return true;
    };
    return ReconnectManager;
}());
exports.ReconnectManager = ReconnectManager;

cc._RF.pop();