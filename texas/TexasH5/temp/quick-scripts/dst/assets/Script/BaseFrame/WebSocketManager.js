
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/WebSocketManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFdlYlNvY2tldE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBMkU7QUFDM0Usd0VBQW1FO0FBQ25FLHNGQUFrRjtBQUNsRixnRkFBd0U7QUFDeEUsd0ZBQW9GO0FBQ3BGLG1GQUE4RTtBQUM5RSwyRUFBMEU7QUFDMUUsMEVBQTRFO0FBRTVFLHlDQUF3QztBQUV4QyxnRUFBK0Q7QUFDL0QsMENBQXlDO0FBRXpDO0lBV0k7UUFUUSxvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQVdqQyxVQUFLLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO1FBQzlCLG9CQUFlLEdBQWEsSUFBSSxDQUFDLENBQUMsU0FBUztRQUUzQyxVQUFLLEdBQW1CLElBQUksQ0FBQztRQUM3QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBUFYsQ0FBQztJQVV6QixzQkFBVywrQkFBVztRQUR0QixJQUFJO2FBQ0o7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEI7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBUzthQUFwQjtZQUNJLE9BQU8sc0JBQVksQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFHTSwrQkFBSSxHQUFYO1FBQUEsaUJBNEJDO1FBM0JHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFDbEQsTUFBTTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsVUFBQyxHQUFH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SUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixPQUFPO2FBQ1Y7U0FDSjthQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFJLG9CQUFvQjtZQUNuRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUFFO2dCQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsT0FBTzthQUNWO1NBQ0o7YUFDSTtZQUNELHFCQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO0lBRU0scUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHTCx1QkFBQztBQUFELENBdlRBLEFBdVRDLElBQUE7QUF2VFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2VudGVyIH0gZnJvbSBcIi4uL0NvbW1vbi9NYW5hZ2Vycy9Ob3RpZmljYXRpb25DZW50ZXJcIjtcbmltcG9ydCBOb3RpZmljYXRpb25OYW1lIGZyb20gXCIuLi9Db21tb24vTWFuYWdlcnMvTm90aWZpY2F0aW9uTmFtZVwiO1xuaW1wb3J0IHsgT3V0ZXJNZXNzYWdlIH0gZnJvbSAnLi4vbW9kdWxlcy9AbW9nYWZhL3V0aWxzL2xpYi9wcm90by9PdXRlck1lc3NhZ2UucGInO1xuaW1wb3J0IHsgcHJvdG8gfSBmcm9tIFwiLi4vbW9kdWxlcy9AbW9nYWZhL3V0aWxzL2xpYi9wcm90by9NZXNzYWdlSUQucGJcIjtcbmltcG9ydCB7IEhvdGZpeE1lc3NhZ2UgfSBmcm9tIFwiLi4vbW9kdWxlcy9AbW9nYWZhL3V0aWxzL2xpYi9wcm90by9Ib3RmaXhNZXNzYWdlLnBiXCI7XG5pbXBvcnQgV2ViU29ja2V0QXBpIGZyb20gXCIuLi9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL1dlYlNvY2tldEFwaVwiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0ICogYXMgQ2xpZW50TWVzc2FnZSBmcm9tIFwiLi4vbW9kdWxlcy9AbW9nYWZhL3V0aWxzL2xpYi9DbGllbnRNZXNzYWdlXCI7XG5pbXBvcnQgV2ViU29ja2V0IGZyb20gXCIuLi9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL1dlYlNvY2tldFwiO1xuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4vQ29tbW9uQ3RyXCI7XG5pbXBvcnQgeyBzY19sb2dpbiB9IGZyb20gXCIuLi9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL0NsaWVudE1lc3NhZ2VcIjtcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XG5pbXBvcnQgeyBNZ3JOYXRpdmUgfSBmcm9tIFwiLi4vTWdyTmF0aXZlXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogV2ViU29ja2V0TWFuYWdlcjsgLy/nsbvlnovkuLrov5nkuKrnsbtcbiAgICBwcml2YXRlIF9yZWNpZXZlQ2FsbEJLczogRnVuY3Rpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgcHVzaE1lc2FnZXNNYXA6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPjtcbiAgICBwcml2YXRlIF9wb3J0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaG9zdDogc3RyaW5nO1xuICAgIHB1YmxpYyBFbnRlclJvb21DYWxsYmFjazogRnVuY3Rpb247XG4gICAgcHVibGljIENTTG9naW5DYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBwcml2YXRlIHBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcHdkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHJpdmF0ZSBtc2dJRDogbnVtYmVyID0gLTk5OTsgLy8g5raI5oGvSURcbiAgICBwdWJsaWMgb2ZmbGluZUNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7IC8vIOi4ouS4i+e6v+eahOWbnuiwg1xuXG4gICAgcHVibGljIHRpbWVyOiBOb2RlSlMuVGltZW91dCA9IG51bGw7XG4gICAgcHVibGljIHRpbWU6IG51bWJlciA9IDIwO1xuICAgIHB1YmxpYyBUaW1lT3V0TGlzdDogc3RyaW5nW10gPSBbXTtcblxuICAgIC8v5Y2V5L6LXG4gICAgc3RhdGljIGdldCBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdlYlNvY2tldE1hbmFnZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuSW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgd2ViU29ja2V0KCk6IFdlYlNvY2tldCB7XG4gICAgICAgIHJldHVybiBXZWJTb2NrZXRBcGkuc29ja2V0O1xuICAgIH1cblxuXG4gICAgcHVibGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMucHVzaE1lc2FnZXNNYXAgPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb24+KCk7XG4gICAgICAgIC8v5o6o6YCB5raI5oGvXG4gICAgICAgIHRoaXMud2ViU29ja2V0LnNldEFjdG9yTWVzc2FnZUNhbGxiYWNrKChtc2cpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbnVsbFxuICAgICAgICAgICAgaWYgKG1zZy5JbmZvICYmIG1zZy5JbmZvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShtc2cuSW5mb1swXS5NZXNzYWdlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZuOlwiICsgZGF0YS5mbiArIFwiLT5cIiArIG1zZy5JbmZvWzBdLk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiJWNmbjpcIiArIGRhdGEuZm4gKyBcIi0+XCIgKyBtc2cuSW5mb1swXS5NZXNzYWdlLCAnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IFwiLTQ0NDQ0NFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSm5Y+35Zyo5YW25LuW5Zyw5pa555m75b2V77yM6K+36YCA5Ye66YeN5paw55m75b2V77yBXCIpO1xuICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0Ll9pc1RvcEFjY291bnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtaW5kU3RyID0gXCLotKblj7flnKjlhbbku5blnLDmlrnnmbvlvZXvvIzor7fpgIDlh7rph43mlrDnmbvlvZXvvIFcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFdlYlNvY2tldEFwaS5zb2NrZXQudG9wQWNjb3VudENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LnRvcEFjY291bnRDYWxsYmFjayhyZW1pbmRTdHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOWBnOatouW/g+i3s1xuICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LmNsZWFyVGltZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5riF56m65Zue6LCDIOaWreW8gOi/nuaOpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRpc0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29udGludW91c0luSUQoZGF0YS5fbXNnaWQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hNZXNhZ2VzTWFwLmhhcyhkYXRhLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hNZXNhZ2VzTWFwLmdldChkYXRhLmZuKShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBHYXRlU2VydmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgV2ViU29ja2V0QXBpLmdhdGVTZXJ2ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2F0ZVBvcnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBXZWJTb2NrZXRBcGkuZ2F0ZVBvcnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVjb25uZWN0KCkge1xuICAgICAgICB0aGlzLkNTTG9naW5DYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGxldCBwYXJhbXMgPVxuICAgICAgICB7XG4gICAgICAgICAgICBob3N0OiBXZWJTb2NrZXRBcGkuZ2F0ZVNlcnZlcixcbiAgICAgICAgICAgIHBvcnQ6IFdlYlNvY2tldEFwaS5nYXRlUG9ydCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLnJlY29ubmVjdENhbGxiYWNrLmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgV2ViU29ja2V0QXBpLnNvY2tldC5yZWNvbm5lY3QocGFyYW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRGlzQ29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLkuLvliqjmlq3lvIBzb2NrZXTov57mjqUgRGlzQ29ubmVjdCAhXCIpO1xuICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5fcmVjaWV2ZUNhbGxCS3MgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWNvbm5lY3RDYWxsYmFjaygpIHtcbiAgICAgICAgTm90aWZpY2F0aW9uQ2VudGVyLkluc3RhbmNlLmVtaXQoTm90aWZpY2F0aW9uTmFtZS5OZXRXb3JrX0V2ZW50LlNPQ0tFVF9DT05ORUNUX1NVQ19FVkVOVCk7XG4gICAgfVxuXG4gICAgLy/ms6jlhozmjqjpgIHmtojmga9cbiAgICBwdWJsaWMgUmVnaXN0Tm90aWZ5KG1zZ0ZuOiBzdHJpbmcsIGNhbGxiYWs6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnB1c2hNZXNhZ2VzTWFwID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hNZXNhZ2VzTWFwLnNldChtc2dGbiwgY2FsbGJhayk7XG4gICAgfVxuXG4gICAgLy/np7vpmaTmjqjpgIHmtojmga9cbiAgICBwdWJsaWMgVW5SZWdpc3ROb3RpZnkobXNnRm46IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wdXNoTWVzYWdlc01hcCA9PSBudWxsIHx8IHRoaXMucHVzaE1lc2FnZXNNYXAuc2l6ZSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHVzaE1lc2FnZXNNYXAuaGFzKG1zZ0ZuKSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoTWVzYWdlc01hcC5kZWxldGUobXNnRm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNlbmQoanNvbjogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IHJlcSA9IE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yUlBDUmVxdWVzdC5jcmVhdGUoKTtcbiAgICAgICAgcmVxLkFjdG9ySWQgPSBBcHBDb25zdC5Vbml0aWQ7XG4gICAgICAgIHJlcS5yZXF1ZXN0ID0ganNvbjtcbiAgICAgICAgdGhpcy5fcmVjaWV2ZUNhbGxCS3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMud2ViU29ja2V0LnJlcXVlc3QoXG4gICAgICAgICAgICBwcm90by5Nc2dJRC5DMlNTX0FjdG9yUlBDUmVxdWVzdCxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHRoaXMuT25lbnRlckFjdG9yUlBDUmVxdWVzdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5SZWNpZXZlRmFpbEJhY2suYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgU2VuZEpTT04ocGtnOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcmVxID0gT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JSUENSZXF1ZXN0LmNyZWF0ZSgpO1xuICAgICAgICByZXEuQWN0b3JJZCA9IEFwcENvbnN0LlVuaXRpZDtcbiAgICAgICAgcmVxLnJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeShwa2cpO1xuICAgICAgICB0aGlzLl9yZWNpZXZlQ2FsbEJLcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQucmVxdWVzdChcbiAgICAgICAgICAgIHByb3RvLk1zZ0lELkMyU1NfQWN0b3JSUENSZXF1ZXN0LFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgdGhpcy5PbmVudGVyQWN0b3JSUENSZXF1ZXN0LmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLlJlY2lldmVGYWlsQmFjay5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIFNlbmRKU09OVGltZU91dChwa2c6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIOaYvuekuui9rOWciFxuICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5zaG93TG9hZGluZygpO1xuICAgICAgICB0aGlzLlNlbmRKU09OKHBrZywgY2FsbGJhY2spO1xuICAgICAgICBsZXQgZm5MaXN0ID0gcGtnLmZuLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgdGhpcy5UaW1lT3V0TGlzdC5wdXNoKGZuTGlzdFsxXSk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLov57mjqXmnI3liqHlmajotoXml7bvvIzor7fph43or5XvvIFcIik7XG4gICAgICAgIH0sIHRoaXMudGltZSAqIDEwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgT25lbnRlckFjdG9yUlBDUmVxdWVzdChyZXQpIHtcbiAgICAgICAgLy8g5o6l5Y+X5Yiw5pWw5o2u77yM6YeN5paw5a6a5pe25pS25pWw5o2u6K6h5pe25ZmoXG4gICAgICAgIC8vIFdlYlNvY2tldEFwaS5zb2NrZXQucmVzZXRSZWNlaXZlTXNnVGltZXIoKTtcbiAgICAgICAgLy8gV2ViU29ja2V0QXBpLnNvY2tldC5yZXNldEhlYXJiZWF0VGltZXIoKTsgIC8vIOmHjee9ruW/g+i3s+WMheWPkemAgeWZqFxuICAgICAgICBpZiAocmV0ICYmIHJldC5yb3V0ZSA9PSBwcm90by5Nc2dJRC5DMlNTX0FjdG9yUlBDUmVxdWVzdCkge1xuICAgICAgICAgICAgaWYgKHJldC5NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1zZ1Jlc3VsdDogYW55ID0gSlNPTi5wYXJzZShyZXQuTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGltZU91dExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm5MaXN0ID0gbXNnUmVzdWx0LmZuLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZuTmFtZUxpc3Q6IHN0cmluZ1tdID0gWy4uLnRoaXMuVGltZU91dExpc3RdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5UaW1lT3V0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbk5hbWUgPSB0aGlzLlRpbWVPdXRMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbk5hbWUgPT0gZm5MaXN0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5OYW1lTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGltZU91dExpc3QgPSBbLi4uZm5OYW1lTGlzdF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlRpbWVPdXRMaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcpIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9yZWNpZXZlQ2FsbEJLcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSBjYWxsYmFjayhtc2dSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBSZWNpZXZlRmFpbEJhY2soKSB7XG5cbiAgICB9XG5cbiAgICAvLyDliKTmlq3mtojmga9JROaYr+WQpui/nue7rVxuICAgIHByaXZhdGUgaXNDb250aW51b3VzSW5JRChtc2dJRDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLm1zZ0lEID49IDAgJiYgbXNnSUQgLSAxICE9IHRoaXMubXNnSUQpIHtcbiAgICAgICAgICAgIC8vIOacieaOieWMhe+8jOmcgOimgeWIt+aWsFxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy53ZWJTb2NrZXQuX3JlZnJlc2hDYWxsYmFjaztcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1zZ0lEID0gbXNnSUQ7XG4gICAgfVxuXG4gICAgTG9naW5CeVBJRFBXRChwaWQ6IHN0cmluZywgcHdkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5waWQgPSBwaWQ7XG4gICAgICAgIHRoaXMucHdkID0gcHdkO1xuICAgICAgICB0aGlzLkxvZ2luX0MyUl9Mb2dpbigpO1xuICAgIH1cbiAgICAvLyNyZWdpb24gdGVzdCBjb2RlXG5cbiAgICBMb2dpbl9DMlJfTG9naW4oKTogdm9pZCB7XG4gICAgICAgIE1nck5hdGl2ZS5nZXRJbnN0YW5jZSgpLmdldERldmljZUdQUygpO1xuICAgICAgICB0aGlzLl9ob3N0ID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLnVybDtcbiAgICAgICAgdGhpcy5fcG9ydCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5wb3J0O1xuICAgICAgICBXZWJTb2NrZXRBcGkuZ2F0ZVNlcnZlciA9IHRoaXMuX2hvc3Q7XG4gICAgICAgIC8vIHRoaXMuX2hvc3QgPSBcIjEyOS4yMDQuMTA5LjIxOFwiO1xuICAgICAgICAvLyB0aGlzLl9ob3N0ID0gXCIxMDYuMTMuMjA3LjI0NlwiO1xuICAgICAgICAvLyB0aGlzLl9wb3J0ID0gXCIxMDAwMlwiO1xuICAgICAgICAvLyB0aGlzLl9ob3N0ID0gXCIxMDYuMTMuMjIyLjEzMFwiXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIExvZ2luUm9vbSBob3N0IDogXCIgKyB0aGlzLl9ob3N0ICsgXCIgdGhpcy5fcG9ydDpcIiArIHRoaXMuX3BvcnQpO1xuICAgICAgICBpZiAodGhpcy5fcG9ydCAmJiB0aGlzLl9ob3N0KSB7XG4gICAgICAgICAgICBsZXQgcmVxbG9naW4gPSBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpbi5jcmVhdGUoKTtcbiAgICAgICAgICAgIHJlcWxvZ2luLkFjY291bnQgPSB0aGlzLnBpZDtcbiAgICAgICAgICAgIHJlcWxvZ2luLlJwY0lkID0gMTtcbiAgICAgICAgICAgIHJlcWxvZ2luLlBhc3N3b3JkID0gdGhpcy5wd2Q7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMuX2hvc3QsXG4gICAgICAgICAgICAgICAgcG9ydDogdGhpcy5fcG9ydCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LnJlcXVlc3QocHJvdG8uTXNnSUQuQzJSX0xvZ2luLCByZXFsb2dpbiwgdGhpcy5Mb2dpbl9DMlJfTG9naW5fQmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVjb25uZWN0KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW5fQzJSX0xvZ2luX0JhY2socmV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tTG9naW5fQzJSX0xvZ2luX0JhY2stLS1cIiwgcmV0KTtcbiAgICAgICAgaWYgKHJldC5FcnJvciAmJiByZXQuRXJyb3IgPT0gXCIyMDAxMDJcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuQ1NMb2dpbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5DU0xvZ2luQ2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLnmbvlvZXlpLHotKXvvIzotKblj7fmiJblr4bnoIHplJnor69cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5EaXNDb25uZWN0KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5Mb2dpbkdhdGUocmV0KTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW5HYXRlKG1zZyk6IHZvaWQge1xuICAgICAgICBsZXQgc3RyID0gbXNnLkFkZHJlc3Muc3BsaXQoXCI6XCIsIDIpO1xuICAgICAgICB0aGlzLl9ob3N0ID0gc3RyWzBdO1xuICAgICAgICB0aGlzLl9wb3J0ID0gc3RyWzFdO1xuICAgICAgICBpZiAodGhpcy5fcG9ydCAmJiB0aGlzLl9ob3N0KSB7XG4gICAgICAgICAgICBsZXQgcmVxbG9naW4gPSBIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICByZXFsb2dpbi51c2VyaWQgPSBtc2cudXNlcmlkO1xuICAgICAgICAgICAgcmVxbG9naW4uS2V5ID0gbXNnLktleTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgaG9zdDogdGhpcy5faG9zdCxcbiAgICAgICAgICAgICAgICBwb3J0OiB0aGlzLl9wb3J0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVxdWVzdChwcm90by5Nc2dJRC5DMkdfTG9naW5HYXRlLCByZXFsb2dpbiwgdGhpcy5Mb2dpbkdhdGVfYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVjb25uZWN0KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW5HYXRlX2JhY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9wb3J0ICYmIHRoaXMuX2hvc3QpIHtcbiAgICAgICAgICAgIGxldCByZXFsb2dpbiA9IE91dGVyTWVzc2FnZS5DMkdfRW50ZXJNYXAuY3JlYXRlKCk7XG4gICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LnJlcXVlc3QocHJvdG8uTXNnSUQuQzJHX0VudGVyTWFwLCByZXFsb2dpbiwgdGhpcy5FbnRlck1hcF9CYWNrLmJpbmQodGhpcyksKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBFbnRlck1hcF9CYWNrKHJldCkge1xuICAgICAgICBsZXQgbG9naW4gPSBuZXcgQ2xpZW50TWVzc2FnZS5jc19sb2dpbigpO1xuICAgICAgICBsb2dpbi5mbiA9IFwiY3NfbG9naW5cIjtcbiAgICAgICAgbG9naW4uYWNjb3VudElkID0gQXBwQ29uc3QuQWNjb3VudDtcbiAgICAgICAgbGV0IGpzb25fbG9naW4gPSBKU09OLnN0cmluZ2lmeShsb2dpbik7XG4gICAgICAgIHRoaXMuU2VuZChqc29uX2xvZ2luLCB0aGlzLnNjX2xvZ2luLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG4gICAgcHVibGljIHNjX2xvZ2luKGRhdGE6IHNjX2xvZ2luKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tc2NfbG9naW4tLS1cIiwgZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBBcHBDb25zdC5BY2NvdW50ID0gZGF0YS51c2VyLnVzZXJpZDtcbiAgICAgICAgICAgIEFwcENvbnN0LmdhbWVJZCA9IGRhdGEuZ2FtZWlkO1xuICAgICAgICAgICAgQXBwQ29uc3QuY2lkeCA9IGRhdGEuY2lkeDtcbiAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbCA9IGRhdGEudXNlcjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuQ1NMb2dpbkNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkNTTG9naW5DYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLkNTTG9naW5DYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xMDA1KSB7ICAgLy9nbyB0byBjcmVhdG9yIDEwMDVcbiAgICAgICAgICAgIGlmICh0aGlzLkNTTG9naW5DYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5DU0xvZ2luQ2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5DU0xvZ2luQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLnmbvlvZXlpLHotKUgZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclRpbWVyKCkge1xuICAgICAgICB0aGlzLndlYlNvY2tldC5jbGVhclRpbWVyKCk7XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uXG59Il19