"use strict";
cc._RF.push(module, '704a0eQRU9E3oYPtUrLS2sU', 'WebSocketManager');
// Script/BaseFrame/WebSocketManager.ts

"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketManager = void 0;
var NotificationCenter_1 = require("../Common/Managers/NotificationCenter");
var NotificationName_1 = require("../Common/Managers/NotificationName");
var OuterMessage_pb_1 = require("../modules/@mogafa/utils/lib/proto/OuterMessage.pb");
var MessageID_pb_1 = require("../modules/@mogafa/utils/lib/proto/MessageID.pb");
var HotfixMessage_pb_1 = require("../modules/@mogafa/utils/lib/proto/HotfixMessage.pb");
var WebSocketApi_1 = require("../modules/@slotsmaster/ui-common/lib/WebSocketApi");
var AppConst_1 = require("../modules/@slotsmaster/ui-common/lib/AppConst");
var ClientMessage = require("../modules/@mogafa/utils/lib/ClientMessage");
var CommonCtr_1 = require("./CommonCtr");
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var MgrNative_1 = require("../MgrNative");
var WebSocketManager = /** @class */ (function () {
    function WebSocketManager() {
        this._recieveCallBKs = [];
        this.msgID = -999; // 消息ID
        this.offlineCallback = null; // 踢下线的回调
        this.timer = null;
        this.time = 20;
        this.TimeOutList = [];
    }
    Object.defineProperty(WebSocketManager, "getInstance", {
        //单例
        get: function () {
            if (!this.instance) {
                this.instance = new WebSocketManager();
                this.instance.Init();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocketManager.prototype, "webSocket", {
        get: function () {
            return WebSocketApi_1.default.socket;
        },
        enumerable: false,
        configurable: true
    });
    WebSocketManager.prototype.Init = function () {
        var _this = this;
        this.pushMesagesMap = new Map();
        //推送消息
        this.webSocket.setActorMessageCallback(function (msg) {
            var data = null;
            if (msg.Info && msg.Info.length > 0) {
                data = JSON.parse(msg.Info[0].Message);
                console.warn("fn:" + data.fn + "->" + msg.Info[0].Message);
                // console.log("%cfn:" + data.fn + "->" + msg.Info[0].Message, 'color:yellow');
                if (data.result == "-444444") {
                    console.log("账号在其他地方登录，请退出重新登录！");
                    WebSocketApi_1.default.socket._isTopAccount = true;
                    var remindStr = "账号在其他地方登录，请退出重新登录！";
                    if (WebSocketApi_1.default.socket.topAccountCallback) {
                        WebSocketApi_1.default.socket.topAccountCallback(remindStr);
                    }
                    // 停止心跳
                    WebSocketApi_1.default.socket.clearTimer();
                    // 清空回调 断开连接
                    _this.DisConnect();
                    return;
                }
                _this.isContinuousInID(data._msgid);
                if (_this.pushMesagesMap.has(data.fn)) {
                    _this.pushMesagesMap.get(data.fn)(data);
                }
            }
        });
    };
    WebSocketManager.prototype.GateServer = function (value) {
        WebSocketApi_1.default.gateServer = value;
    };
    WebSocketManager.prototype.GatePort = function (value) {
        WebSocketApi_1.default.gatePort = value;
    };
    WebSocketManager.prototype.Reconnect = function () {
        this.CSLoginCallback = null;
        var params = {
            host: WebSocketApi_1.default.gateServer,
            port: WebSocketApi_1.default.gatePort,
            callback: this.reconnectCallback.bind(this)
        };
        WebSocketApi_1.default.socket.reconnect(params);
    };
    WebSocketManager.prototype.DisConnect = function () {
        console.log("主动断开socket连接 DisConnect !");
        WebSocketApi_1.default.socket.disconnect();
        this._recieveCallBKs = [];
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    WebSocketManager.prototype.reconnectCallback = function () {
        NotificationCenter_1.NotificationCenter.Instance.emit(NotificationName_1.default.NetWork_Event.SOCKET_CONNECT_SUC_EVENT);
    };
    //注册推送消息
    WebSocketManager.prototype.RegistNotify = function (msgFn, callbak) {
        if (this.pushMesagesMap == null) {
            return;
        }
        this.pushMesagesMap.set(msgFn, callbak);
    };
    //移除推送消息
    WebSocketManager.prototype.UnRegistNotify = function (msgFn) {
        if (this.pushMesagesMap == null || this.pushMesagesMap.size == 0) {
            return;
        }
        if (this.pushMesagesMap.has(msgFn)) {
            this.pushMesagesMap.delete(msgFn);
        }
    };
    WebSocketManager.prototype.Send = function (json, callback) {
        var req = OuterMessage_pb_1.OuterMessage.C2SS_ActorRPCRequest.create();
        req.ActorId = AppConst_1.AppConst.Unitid;
        req.request = json;
        this._recieveCallBKs.push(callback);
        this.webSocket.request(MessageID_pb_1.proto.MsgID.C2SS_ActorRPCRequest, req, this.OnenterActorRPCRequest.bind(this), this.RecieveFailBack.bind(this));
    };
    WebSocketManager.prototype.SendJSON = function (pkg, callback) {
        var req = OuterMessage_pb_1.OuterMessage.C2SS_ActorRPCRequest.create();
        req.ActorId = AppConst_1.AppConst.Unitid;
        req.request = JSON.stringify(pkg);
        this._recieveCallBKs.push(callback);
        this.webSocket.request(MessageID_pb_1.proto.MsgID.C2SS_ActorRPCRequest, req, this.OnenterActorRPCRequest.bind(this), this.RecieveFailBack.bind(this));
    };
    WebSocketManager.prototype.SendJSONTimeOut = function (pkg, callback) {
        // 显示转圈
        CommonCtr_1.CommonCtr.instance.view.showLoading();
        this.SendJSON(pkg, callback);
        var fnList = pkg.fn.split("_");
        this.TimeOutList.push(fnList[1]);
        this.timer = setTimeout(function () {
            CommonCtr_1.CommonCtr.instance.view.hideLoading();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("连接服务器超时，请重试！");
        }, this.time * 1000);
    };
    WebSocketManager.prototype.OnenterActorRPCRequest = function (ret) {
        // 接受到数据，重新定时收数据计时器
        // WebSocketApi.socket.resetReceiveMsgTimer();
        // WebSocketApi.socket.resetHearbeatTimer();  // 重置心跳包发送器
        if (ret && ret.route == MessageID_pb_1.proto.MsgID.C2SS_ActorRPCRequest) {
            if (ret.Message) {
                var msgResult = JSON.parse(ret.Message);
                if (this.TimeOutList.length > 0) {
                    var fnList = msgResult.fn.split("_");
                    var fnNameList = __spread(this.TimeOutList);
                    for (var index = 0; index < this.TimeOutList.length; index++) {
                        var fnName = this.TimeOutList[index];
                        if (fnName == fnList[1]) {
                            fnNameList.splice(index, 1);
                            break;
                        }
                    }
                    this.TimeOutList = __spread(fnNameList);
                    if (this.TimeOutList.length <= 0) {
                        if (CommonCtr_1.CommonCtr.instance.view)
                            CommonCtr_1.CommonCtr.instance.view.hideLoading();
                        if (this.timer) {
                            clearTimeout(this.timer);
                            this.timer = null;
                        }
                    }
                }
                var callback = this._recieveCallBKs.shift();
                if (callback != null)
                    callback(msgResult);
            }
        }
    };
    WebSocketManager.prototype.RecieveFailBack = function () {
    };
    // 判断消息ID是否连续
    WebSocketManager.prototype.isContinuousInID = function (msgID) {
        if (this.msgID >= 0 && msgID - 1 != this.msgID) {
            // 有掉包，需要刷新
            var callback = this.webSocket._refreshCallback;
            if (callback)
                callback();
        }
        this.msgID = msgID;
    };
    WebSocketManager.prototype.LoginByPIDPWD = function (pid, pwd) {
        this.pid = pid;
        this.pwd = pwd;
        this.Login_C2R_Login();
    };
    //#region test code
    WebSocketManager.prototype.Login_C2R_Login = function () {
        var _this = this;
        MgrNative_1.MgrNative.getInstance().getDeviceGPS();
        this._host = BaseFrameNative_1.BaseFrameNative.serverlistItem.url;
        this._port = BaseFrameNative_1.BaseFrameNative.serverlistItem.port;
        WebSocketApi_1.default.gateServer = this._host;
        // this._host = "129.204.109.218";
        // this._host = "106.13.207.246";
        // this._port = "10002";
        // this._host = "106.13.222.130"
        console.log(" LoginRoom host : " + this._host + " this._port:" + this._port);
        if (this._port && this._host) {
            var reqlogin_1 = HotfixMessage_pb_1.HotfixMessage.C2R_Login.create();
            reqlogin_1.Account = this.pid;
            reqlogin_1.RpcId = 1;
            reqlogin_1.Password = this.pwd;
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
    WebSocketManager.prototype.Login_C2R_Login_Back = function (ret) {
        var _this = this;
        console.log("---Login_C2R_Login_Back---", ret);
        if (ret.Error && ret.Error == "200102") {
            if (this.CSLoginCallback) {
                this.CSLoginCallback(null);
            }
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("登录失败，账号或密码错误");
            return;
        }
        this.DisConnect();
        setTimeout(function () {
            _this.LoginGate(ret);
        }, 300);
    };
    WebSocketManager.prototype.LoginGate = function (msg) {
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
    WebSocketManager.prototype.LoginGate_back = function () {
        if (this._port && this._host) {
            var reqlogin = OuterMessage_pb_1.OuterMessage.C2G_EnterMap.create();
            WebSocketApi_1.default.socket.request(MessageID_pb_1.proto.MsgID.C2G_EnterMap, reqlogin, this.EnterMap_Back.bind(this));
        }
    };
    WebSocketManager.prototype.EnterMap_Back = function (ret) {
        var login = new ClientMessage.cs_login();
        login.fn = "cs_login";
        login.accountId = AppConst_1.AppConst.Account;
        var json_login = JSON.stringify(login);
        this.Send(json_login, this.sc_login.bind(this));
    };
    WebSocketManager.prototype.sc_login = function (data) {
        console.log("---sc_login---", data);
        if (data.result == 1) {
            AppConst_1.AppConst.Account = data.user.userid;
            AppConst_1.AppConst.gameId = data.gameid;
            AppConst_1.AppConst.cidx = data.cidx;
            AppConst_1.AppConst.mPlayerModel = data.user;
            if (this.CSLoginCallback != null) {
                this.CSLoginCallback(data);
                this.CSLoginCallback = null;
                return;
            }
        }
        else if (data.result == -1005) { //go to creator 1005
            if (this.CSLoginCallback != null) {
                this.CSLoginCallback(data);
                this.CSLoginCallback = null;
                return;
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("登录失败 error code:" + data.result);
        }
    };
    WebSocketManager.prototype.clearTimer = function () {
        this.webSocket.clearTimer();
    };
    return WebSocketManager;
}());
exports.WebSocketManager = WebSocketManager;

cc._RF.pop();