
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/WebSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b97f9ULh5JBeqiLHAC3Z9Bq', 'WebSocket');
// Script/modules/@mogafa/utils/lib/WebSocket.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 请求timer
 */
var Message_1 = require("./Message");
var MessageID_pb_1 = require("./proto/MessageID.pb");
var HotfixMessage_pb_1 = require("./proto/HotfixMessage.pb");
var OuterMessage_pb_1 = require("./proto/OuterMessage.pb");
var WebSocket = /** @class */ (function () {
    function WebSocket() {
        //* pinus
        this._pinus = window.pinus;
        //* 大门端口号
        this._gatePort = null;
        //* 大门主机
        this._gateHost = null;
        //* 是否重连
        this._reConnect = false;
        //* 连接次数
        this._connectCount = 0;
        //* 最多连接次数
        this._connectMaxCount = 3;
        //* 请求timer
        this._requestTimer = {};
        this._isInit = false;
        this._isTopAccount = false;
        this._isManualBreak = false; // 是否是手动断开
        this._reconnectCount = 0;
        this._refreshCallback = null; // 掉帧之后请求最新数据
        this._keepAliveTimer = null; // 心跳定时器
        this._receiveMsgTimer = null; // 接收数据定时器
        this._reconnectTimer = null; // 重连定时器
        this._heartTime = 10000; // 心跳间隔
        this._receiveTime = 20000; // 多久没收到数据断开
        // this.init();
    }
    /**
     * 初始化pinus
     */
    WebSocket.prototype.init = function (cb) {
        var _this = this;
        if (cb === void 0) { cb = "init"; }
        console.log("websocket init:" + cb);
        this._pinus.off("heartbeat timeout");
        this._pinus.off("io-error");
        this._pinus.off("close");
        this._pinus.off("error");
        this._pinus.on("heartbeat timeout", function (event) { _this.onHeartBet(event); });
        this._pinus.on("io-error", function (event) { _this.onError(event); });
        this._pinus.on("close", function (event) { _this.onClose(event); });
        this._pinus.on("error", function (event) { console.log(event); });
        this.createConnect();
    };
    // onHeartBet
    WebSocket.prototype.onHeartBet = function (event) {
        console.log("heartbeat timeout !");
    };
    // onError
    WebSocket.prototype.onError = function (event) {
        console.log("websocket onError !");
    };
    // onClose
    WebSocket.prototype.onClose = function (event) {
        console.log("websocket onClose !", event);
        if (this._pinus.WebSocket != event.currentTarget) {
            console.log("this._pinus.WebSocket != event.currentTarget");
            return;
        }
        else {
            console.log("this._pinus.WebSocket == event.currentTarget");
        }
        this._isInit = false;
        this.clearTimer(); // 清除心跳回调
        // 顶号或者主动断开
        if (this._isTopAccount || this._isManualBreak) {
            return;
        }
        this._reconnectCount += 1;
        console.log("this._reconnectCount == ", this._reconnectCount);
        if (this._reconnectCount >= this._connectMaxCount) {
            this._reconnectCount = 0;
            if (this.disconnectCallback) {
                this.disconnectCallback();
                this.disconnect();
            }
        }
        else {
            // this.disconnect();
            // ReconnectManager.getInstance.reconnect(() => {
            //     console.log("重连成功！");
            // }, () => {
            //     if (this.disconnectCallback) {
            //         this.disconnectCallback();
            //         this.disconnect();
            //     }
            // }, false)
            this._reconnectCount = 0;
            if (this.disconnectCallback) {
                this.disconnectCallback();
                this.disconnect();
            }
        }
    };
    WebSocket.prototype.createConnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = {
                host: _this._gateHost,
                port: _this._gatePort,
                log: true,
            };
            _this._pinus.init(params, function (res) {
                cc.log("初始化成功，建立连接");
                _this._isTopAccount = false;
                _this._isManualBreak = false;
                _this._isInit = true;
                _this._reconnectCount = 0;
                resolve();
                _this.connect();
            }, _this.encode.bind(_this), _this.decode.bind(_this));
        });
    };
    WebSocket.prototype.websocketRequest = function (route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay) {
        var _this = this;
        if (timeOutDelay === void 0) { timeOutDelay = 8000; }
        var timeOutIndex = null;
        var isReply = false;
        var timeout = function () {
            if (!!isReply)
                return;
            if (!!timeOutCallback)
                timeOutCallback();
            console.error("request timeout:", route, msg);
        };
        //* clearTimeout
        var clear = function () {
            if (timeOutIndex != null) {
                _this.removeRequestTimeout(timeOutIndex);
                timeOutIndex = null;
            }
        };
        this._pinus.request(route, msg, function (ret) {
            clear();
            isReply = true;
            if (!!successCallback) {
                if (ret && ret.RpcId > 0) {
                    successCallback(ret);
                }
                else {
                    //console.error(`路由地址：${route}, 错误码：${ret.code}, 错误信息：${ret.message}`);
                    if (failCallback) {
                        failCallback();
                    }
                }
            }
        });
        //* 有超时 回调才添加超时处理
        if (timeOutCallback) {
            timeOutDelay = timeOutDelay || 10000;
            timeOutIndex = this.addRequestTimeout(timeout, timeOutDelay);
        }
    };
    /**
     * 发起pinus请求
     * @param route 请求路由
     * @param msg 请求信息
     * @param successCallback 成功回调
     * @param timeOutCallback 超时回调
     * @param timeOutDelay 超时延时时间
     */
    WebSocket.prototype.request = function (route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay) {
        if (timeOutDelay === void 0) { timeOutDelay = 8000; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._isInit) {
                    // await this.init("await");
                    // this.websocketRequest(route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay);
                }
                else {
                    this.websocketRequest(route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 清除超时
     * @param timeOutIndex
     */
    WebSocket.prototype.removeRequestTimeout = function (timeOutIndex) {
        clearTimeout(timeOutIndex);
        delete this._requestTimer[timeOutIndex];
    };
    /**
     * 添加超时
     * @param timeoutCallback
     * @param timeDelay
     */
    WebSocket.prototype.addRequestTimeout = function (timeoutCallback, timeDelay) {
        var timeOutIndex = setTimeout(timeoutCallback, timeDelay);
        this._requestTimer[timeOutIndex] = timeOutIndex;
        return timeOutIndex;
    };
    /**
     * 设置大门连接
     * @param host
     * @param port
     */
    WebSocket.prototype.setGateConnection = function (host, port) {
        this._gatePort = port;
        this._gateHost = host;
    };
    /**
     * 重新连接服务器、切换服务器端口
     * @param params 新的host和port、回调
     */
    WebSocket.prototype.reconnect = function (params) {
        if (params) {
            this._gatePort = params.port;
            this._gateHost = params.host;
            this.reconnectCallback = params.callback;
        }
        else {
            this.reconnectCallback = null;
        }
        this.init();
    };
    //获取当前socket状态
    WebSocket.prototype.getConnectState = function () {
        return this._isInit;
    };
    /**
     * 建立连接
     */
    WebSocket.prototype.connect = function () {
        this.connectGate(this._gateHost, this._gatePort);
    };
    /**
     * 断开连接
     */
    WebSocket.prototype.disconnect = function () {
        console.log("断开连接 disconnect");
        this._isManualBreak = true;
        this._isInit = false;
        this._pinus.disconnect();
        this.clearTimer();
    };
    /**
     * 绑定各类事件，心跳超时、返回错误等事件
     * @param host
     * @param port
     * @param options
     */
    WebSocket.prototype.connectGate = function (host, port) {
        if (!host || !port) {
            console.error("主机地址或端口不能为空");
            return;
        }
        if (this.reconnectCallback) {
            this.reconnectCallback();
            this.reconnectCallback = null;
        }
        this.resetHearbeatTimer();
    };
    WebSocket.prototype.setReconnectByAccount = function (func) {
        console.log("setReconnectByAccount");
        this.reconnectByAccount = func;
    };
    WebSocket.prototype.setHeartBeatCallback = function (func) {
        this.disconnectCallback = func;
    };
    WebSocket.prototype.setTopAccountCallback = function (func) {
        this.topAccountCallback = func;
    };
    // 设置延迟游戏刷新回调
    WebSocket.prototype.setRefreshCallback = function (func) {
        this._refreshCallback = func;
    };
    WebSocket.prototype.setActorMessageCallback = function (func) {
        this._pinus.setActorMessageCallback(func);
    };
    WebSocket.prototype.encode = function (msgId, msg) {
        var cls = msg.constructor;
        var buf = cls.encode(msg).finish();
        return Message_1.default.toBuffer(msgId, buf);
    };
    WebSocket.prototype.decode = function (data) {
        var msg = Message_1.default.fromBuffer(data);
        var msgName = MessageID_pb_1.proto.MsgID[msg.msgid];
        var dsseee = HotfixMessage_pb_1.HotfixMessage[msgName];
        if (dsseee) {
            return HotfixMessage_pb_1.HotfixMessage[msgName].decode(msg.data);
        }
        dsseee = OuterMessage_pb_1.OuterMessage[msgName];
        if (dsseee) {
            return OuterMessage_pb_1.OuterMessage[msgName].decode(msg.data);
        }
        return null;
    };
    /********************** 心跳、超时相关处理 *********************/
    WebSocket.prototype.resetReceiveMsgTimer = function () {
        var _this = this;
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
        }
        this._receiveMsgTimer = setTimeout(function () {
            console.warn("NetNode recvieMsgTimer close socket!");
            _this.disconnect();
            if (_this.disconnectCallback) {
                _this.disconnectCallback();
            }
        }, this._receiveTime);
    };
    WebSocket.prototype.resetHearbeatTimer = function () {
        var _this = this;
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
        }
        this._keepAliveTimer = setTimeout(function () {
            console.log("NetNode keepAliveTimer send Hearbeat");
            var heartbeat = OuterMessage_pb_1.OuterMessage.C2G_Heartbeat.create();
            _this.request(MessageID_pb_1.proto.MsgID.C2G_Heartbeat, heartbeat, _this.Heartbeat_Back.bind(_this));
        }, this._heartTime);
    };
    WebSocket.prototype.clearTimer = function () {
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
        }
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
        }
        if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
        }
    };
    //心跳包回复
    WebSocket.prototype.Heartbeat_Back = function () {
        console.log("Heartbeat_Back");
        // 接受到数据，重新定时收数据计时器
        this.resetReceiveMsgTimer();
        // 重置心跳包发送器
        this.resetHearbeatTimer();
    };
    return WebSocket;
}());
exports.default = WebSocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxXZWJTb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFDQUFnQztBQUNoQyxxREFBNkM7QUFDN0MsNkRBQXlEO0FBQ3pELDJEQUF1RDtBQWV2RDtJQStCSTtRQTlCQSxTQUFTO1FBQ0QsV0FBTSxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbkMsU0FBUztRQUNELGNBQVMsR0FBVyxJQUFJLENBQUM7UUFDakMsUUFBUTtRQUNBLGNBQVMsR0FBVyxJQUFJLENBQUM7UUFDakMsUUFBUTtRQUNBLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDcEMsUUFBUTtRQUNBLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLFVBQVU7UUFDRixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDckMsV0FBVztRQUNILGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBSzFCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFjLEdBQVksS0FBSyxDQUFDLENBQUMsVUFBVTtRQUMzQyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM3QixxQkFBZ0IsR0FBYSxJQUFJLENBQUMsQ0FBQyxhQUFhO1FBRTdDLG9CQUFlLEdBQVEsSUFBSSxDQUFDLENBQWtDLFFBQVE7UUFDdEUscUJBQWdCLEdBQVEsSUFBSSxDQUFDLENBQWlDLFVBQVU7UUFDeEUsb0JBQWUsR0FBUSxJQUFJLENBQUMsQ0FBa0MsUUFBUTtRQUN0RSxlQUFVLEdBQVcsS0FBSyxDQUFDLENBQW1DLE9BQU87UUFDckUsaUJBQVksR0FBVyxLQUFLLENBQUMsQ0FBK0IsWUFBWTtRQUc5RSxlQUFlO0lBQ25CLENBQUM7SUFDRDs7T0FFRztJQUNLLHdCQUFJLEdBQVosVUFB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LEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtZQUMvQixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtZQUMvQixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDQSxrQ0FBYyxHQUFyQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsV0FBVztRQUNYLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTCxnQkFBQztBQUFELENBN1dBLEFBNldDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOivt+axgnRpbWVyXG4gKi9cbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgeyBwcm90byB9IGZyb20gXCIuL3Byb3RvL01lc3NhZ2VJRC5wYlwiO1xuaW1wb3J0IHsgSG90Zml4TWVzc2FnZSB9IGZyb20gXCIuL3Byb3RvL0hvdGZpeE1lc3NhZ2UucGJcIjtcbmltcG9ydCB7IE91dGVyTWVzc2FnZSB9IGZyb20gXCIuL3Byb3RvL091dGVyTWVzc2FnZS5wYlwiO1xuaW1wb3J0IHsgUmVjb25uZWN0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL0Jhc2VGcmFtZS9SZWNvbm5lY3RNYW5hZ2VyJztcblxuaW50ZXJmYWNlIElSZXF1ZXN0VGltZXIge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIElDb25uZWN0T3B0aW9ucyB7XG4gICAgY2xpZW50VHlwZTogc3RyaW5nO1xuICAgIGNsaWVudFZlcnNpb24/OiBzdHJpbmc7XG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogKCkgPT4ge307XG59XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYlNvY2tldCB7XG4gICAgLy8qIHBpbnVzXG4gICAgcHJpdmF0ZSBfcGludXM6IGFueSA9IHdpbmRvdy5waW51cztcbiAgICAvLyog5aSn6Zeo56uv5Y+j5Y+3XG4gICAgcHJpdmF0ZSBfZ2F0ZVBvcnQ6IHN0cmluZyA9IG51bGw7XG4gICAgLy8qIOWkp+mXqOS4u+aculxuICAgIHByaXZhdGUgX2dhdGVIb3N0OiBzdHJpbmcgPSBudWxsO1xuICAgIC8vKiDmmK/lkKbph43ov55cbiAgICBwcml2YXRlIF9yZUNvbm5lY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyog6L+e5o6l5qyh5pWwXG4gICAgcHJpdmF0ZSBfY29ubmVjdENvdW50OiBudW1iZXIgPSAwO1xuICAgIC8vKiDmnIDlpJrov57mjqXmrKHmlbBcbiAgICBwcml2YXRlIF9jb25uZWN0TWF4Q291bnQ6IG51bWJlciA9IDM7XG4gICAgLy8qIOivt+axgnRpbWVyXG4gICAgcHJpdmF0ZSBfcmVxdWVzdFRpbWVyOiBJUmVxdWVzdFRpbWVyID0ge307XG4gICAgcHJpdmF0ZSBfaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWNvbm5lY3RDYWxsYmFjazogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSByZWNvbm5lY3RCeUFjY291bnQ6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBkaXNjb25uZWN0Q2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyB0b3BBY2NvdW50Q2FsbGJhY2s6IEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBfaXNUb3BBY2NvdW50OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNNYW51YWxCcmVhazogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbmmK/miYvliqjmlq3lvIBcbiAgICBwcml2YXRlIF9yZWNvbm5lY3RDb3VudDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgX3JlZnJlc2hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsOyAvLyDmjonluKfkuYvlkI7or7fmsYLmnIDmlrDmlbDmja5cblxuICAgIHByb3RlY3RlZCBfa2VlcEFsaXZlVGltZXI6IGFueSA9IG51bGw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW/g+i3s+WumuaXtuWZqFxuICAgIHByb3RlY3RlZCBfcmVjZWl2ZU1zZ1RpbWVyOiBhbnkgPSBudWxsOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOpeaUtuaVsOaNruWumuaXtuWZqFxuICAgIHByb3RlY3RlZCBfcmVjb25uZWN0VGltZXI6IGFueSA9IG51bGw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjei/nuWumuaXtuWZqFxuICAgIHByb3RlY3RlZCBfaGVhcnRUaW1lOiBudW1iZXIgPSAxMDAwMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW/g+i3s+mXtOmalFxuICAgIHByb3RlY3RlZCBfcmVjZWl2ZVRpbWU6IG51bWJlciA9IDIwMDAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpJrkuYXmsqHmlLbliLDmlbDmja7mlq3lvIBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWcGludXNcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXQoY2I6IHN0cmluZyA9IFwiaW5pdFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IGluaXQ6XCIgKyBjYik7XG4gICAgICAgIHRoaXMuX3BpbnVzLm9mZihcImhlYXJ0YmVhdCB0aW1lb3V0XCIpO1xuICAgICAgICB0aGlzLl9waW51cy5vZmYoXCJpby1lcnJvclwiKTtcbiAgICAgICAgdGhpcy5fcGludXMub2ZmKFwiY2xvc2VcIik7XG4gICAgICAgIHRoaXMuX3BpbnVzLm9mZihcImVycm9yXCIpO1xuICAgICAgICB0aGlzLl9waW51cy5vbihcImhlYXJ0YmVhdCB0aW1lb3V0XCIsIChldmVudCkgPT4geyB0aGlzLm9uSGVhcnRCZXQoZXZlbnQpIH0pO1xuICAgICAgICB0aGlzLl9waW51cy5vbihcImlvLWVycm9yXCIsIChldmVudCkgPT4geyB0aGlzLm9uRXJyb3IoZXZlbnQpIH0pO1xuICAgICAgICB0aGlzLl9waW51cy5vbihcImNsb3NlXCIsIChldmVudCkgPT4geyB0aGlzLm9uQ2xvc2UoZXZlbnQpIH0pO1xuICAgICAgICB0aGlzLl9waW51cy5vbihcImVycm9yXCIsIChldmVudCkgPT4geyBjb25zb2xlLmxvZyhldmVudCk7IH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvLyBvbkhlYXJ0QmV0XG4gICAgcHJvdGVjdGVkIG9uSGVhcnRCZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWFydGJlYXQgdGltZW91dCAhXCIpO1xuICAgIH1cblxuICAgIC8vIG9uRXJyb3JcbiAgICBwcm90ZWN0ZWQgb25FcnJvcihldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBvbkVycm9yICFcIik7XG4gICAgfVxuXG4gICAgLy8gb25DbG9zZVxuICAgIHByb3RlY3RlZCBvbkNsb3NlKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2Vic29ja2V0IG9uQ2xvc2UgIVwiLCBldmVudCk7XG4gICAgICAgIGlmICh0aGlzLl9waW51cy5XZWJTb2NrZXQgIT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLl9waW51cy5XZWJTb2NrZXQgIT0gZXZlbnQuY3VycmVudFRhcmdldFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fcGludXMuV2ViU29ja2V0ID09IGV2ZW50LmN1cnJlbnRUYXJnZXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpOyAvLyDmuIXpmaTlv4Pot7Plm57osINcbiAgICAgICAgLy8g6aG25Y+35oiW6ICF5Li75Yqo5pat5byAXG4gICAgICAgIGlmICh0aGlzLl9pc1RvcEFjY291bnQgfHwgdGhpcy5faXNNYW51YWxCcmVhaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdENvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fcmVjb25uZWN0Q291bnQgPT0gXCIsIHRoaXMuX3JlY29ubmVjdENvdW50KTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdENvdW50ID49IHRoaXMuX2Nvbm5lY3RNYXhDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0Q291bnQgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzY29ubmVjdENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgLy8gUmVjb25uZWN0TWFuYWdlci5nZXRJbnN0YW5jZS5yZWNvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi6YeN6L+e5oiQ5Yqf77yBXCIpO1xuICAgICAgICAgICAgLy8gfSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmRpc2Nvbm5lY3RDYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDYWxsYmFjaygpO1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9LCBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdENvdW50ID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2Nvbm5lY3RDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgaG9zdDogdGhpcy5fZ2F0ZUhvc3QsXG4gICAgICAgICAgICAgICAgcG9ydDogdGhpcy5fZ2F0ZVBvcnQsXG4gICAgICAgICAgICAgICAgbG9nOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcGludXMuaW5pdChwYXJhbXMsIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliJ3lp4vljJbmiJDlip/vvIzlu7rnq4vov57mjqVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNUb3BBY2NvdW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNNYW51YWxCcmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzSW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0Q291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZW5jb2RlLmJpbmQodGhpcyksIHRoaXMuZGVjb2RlLmJpbmQodGhpcykpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2Vic29ja2V0UmVxdWVzdChcbiAgICAgICAgcm91dGU6IGFueSxcbiAgICAgICAgbXNnOiBhbnksXG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjazogRnVuY3Rpb24sXG4gICAgICAgIGZhaWxDYWxsYmFjaz86IEZ1bmN0aW9uLFxuICAgICAgICB0aW1lT3V0Q2FsbGJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgdGltZU91dERlbGF5OiBudW1iZXIgPSA4MDAwXG4gICAgKSB7XG4gICAgICAgIGxldCB0aW1lT3V0SW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgICAgIGxldCBpc1JlcGx5OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhaXNSZXBseSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCEhdGltZU91dENhbGxiYWNrKSB0aW1lT3V0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZXF1ZXN0IHRpbWVvdXQ6XCIsIHJvdXRlLCBtc2cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vKiBjbGVhclRpbWVvdXRcbiAgICAgICAgbGV0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbWVPdXRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZXF1ZXN0VGltZW91dCh0aW1lT3V0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRpbWVPdXRJbmRleCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BpbnVzLnJlcXVlc3Qocm91dGUsIG1zZywgKHJldDogYW55KSA9PiB7XG4gICAgICAgICAgICBjbGVhcigpO1xuICAgICAgICAgICAgaXNSZXBseSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoISFzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIHJldC5ScGNJZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGDot6/nlLHlnLDlnYDvvJoke3JvdXRlfSwg6ZSZ6K+v56CB77yaJHtyZXQuY29kZX0sIOmUmeivr+S/oeaBr++8miR7cmV0Lm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyog5pyJ6LaF5pe2IOWbnuiwg+aJjea3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICBpZiAodGltZU91dENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aW1lT3V0RGVsYXkgPSB0aW1lT3V0RGVsYXkgfHwgMTAwMDA7XG4gICAgICAgICAgICB0aW1lT3V0SW5kZXggPSB0aGlzLmFkZFJlcXVlc3RUaW1lb3V0KHRpbWVvdXQsIHRpbWVPdXREZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HotbdwaW51c+ivt+axglxuICAgICAqIEBwYXJhbSByb3V0ZSDor7fmsYLot6/nlLFcbiAgICAgKiBAcGFyYW0gbXNnIOivt+axguS/oeaBr1xuICAgICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sg5oiQ5Yqf5Zue6LCDXG4gICAgICogQHBhcmFtIHRpbWVPdXRDYWxsYmFjayDotoXml7blm57osINcbiAgICAgKiBAcGFyYW0gdGltZU91dERlbGF5IOi2heaXtuW7tuaXtuaXtumXtFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyByZXF1ZXN0KFxuICAgICAgICByb3V0ZTogYW55LFxuICAgICAgICBtc2c6IGFueSxcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrOiBGdW5jdGlvbixcbiAgICAgICAgZmFpbENhbGxiYWNrPzogRnVuY3Rpb24sXG4gICAgICAgIHRpbWVPdXRDYWxsYmFjaz86IEZ1bmN0aW9uLFxuICAgICAgICB0aW1lT3V0RGVsYXk6IG51bWJlciA9IDgwMDBcbiAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXQpIHtcbiAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuaW5pdChcImF3YWl0XCIpO1xuICAgICAgICAgICAgLy8gdGhpcy53ZWJzb2NrZXRSZXF1ZXN0KHJvdXRlLCBtc2csIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrLCB0aW1lT3V0Q2FsbGJhY2ssIHRpbWVPdXREZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndlYnNvY2tldFJlcXVlc3Qocm91dGUsIG1zZywgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2ssIHRpbWVPdXRDYWxsYmFjaywgdGltZU91dERlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4hemZpOi2heaXtlxuICAgICAqIEBwYXJhbSB0aW1lT3V0SW5kZXhcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbW92ZVJlcXVlc3RUaW1lb3V0KHRpbWVPdXRJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lT3V0SW5kZXgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fcmVxdWVzdFRpbWVyW3RpbWVPdXRJbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg6LaF5pe2XG4gICAgICogQHBhcmFtIHRpbWVvdXRDYWxsYmFja1xuICAgICAqIEBwYXJhbSB0aW1lRGVsYXlcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFJlcXVlc3RUaW1lb3V0KHRpbWVvdXRDYWxsYmFjazogRnVuY3Rpb24sIHRpbWVEZWxheTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0aW1lT3V0SW5kZXg6IG51bWJlciA9IHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCB0aW1lRGVsYXkpO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0VGltZXJbdGltZU91dEluZGV4XSA9IHRpbWVPdXRJbmRleDtcbiAgICAgICAgcmV0dXJuIHRpbWVPdXRJbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lpKfpl6jov57mjqVcbiAgICAgKiBAcGFyYW0gaG9zdFxuICAgICAqIEBwYXJhbSBwb3J0XG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRHYXRlQ29ubmVjdGlvbihob3N0OiBzdHJpbmcsIHBvcnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9nYXRlUG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMuX2dhdGVIb3N0ID0gaG9zdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43mlrDov57mjqXmnI3liqHlmajjgIHliIfmjaLmnI3liqHlmajnq6/lj6NcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOaWsOeahGhvc3Tlkoxwb3J044CB5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHJlY29ubmVjdChwYXJhbXM/OiBhbnkpIHtcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5fZ2F0ZVBvcnQgPSBwYXJhbXMucG9ydDtcbiAgICAgICAgICAgIHRoaXMuX2dhdGVIb3N0ID0gcGFyYW1zLmhvc3Q7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdENhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3RDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLy/ojrflj5blvZPliY1zb2NrZXTnirbmgIFcbiAgICBwdWJsaWMgZ2V0Q29ubmVjdFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbml0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW7uueri+i/nuaOpVxuICAgICAqL1xuICAgIHByaXZhdGUgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0R2F0ZSh0aGlzLl9nYXRlSG9zdCwgdGhpcy5fZ2F0ZVBvcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaWreW8gOi/nuaOpVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaWreW8gOi/nuaOpSBkaXNjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLl9pc01hbnVhbEJyZWFrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BpbnVzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5ZCE57G75LqL5Lu277yM5b+D6Lez6LaF5pe244CB6L+U5Zue6ZSZ6K+v562J5LqL5Lu2XG4gICAgICogQHBhcmFtIGhvc3RcbiAgICAgKiBAcGFyYW0gcG9ydFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb25uZWN0R2F0ZShob3N0OiBzdHJpbmcsIHBvcnQ6IHN0cmluZykge1xuICAgICAgICBpZiAoIWhvc3QgfHwgIXBvcnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuLvmnLrlnLDlnYDmiJbnq6/lj6PkuI3og73kuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVjb25uZWN0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRIZWFyYmVhdFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFJlY29ubmVjdEJ5QWNjb3VudChmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldFJlY29ubmVjdEJ5QWNjb3VudFwiKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RCeUFjY291bnQgPSBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIZWFydEJlYXRDYWxsYmFjayhmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RDYWxsYmFjayA9IGZ1bmM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFRvcEFjY291bnRDYWxsYmFjayhmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnRvcEFjY291bnRDYWxsYmFjayA9IGZ1bmM7XG4gICAgfVxuXG4gICAgLy8g6K6+572u5bu26L+f5ri45oiP5Yi35paw5Zue6LCDXG4gICAgcHVibGljIHNldFJlZnJlc2hDYWxsYmFjayhmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLl9yZWZyZXNoQ2FsbGJhY2sgPSBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBY3Rvck1lc3NhZ2VDYWxsYmFjayhmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLl9waW51cy5zZXRBY3Rvck1lc3NhZ2VDYWxsYmFjayhmdW5jKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5jb2RlKG1zZ0lkOiBudW1iZXIsIG1zZzogYW55KTogQXJyYXlCdWZmZXIge1xuICAgICAgICBsZXQgY2xzID0gbXNnLmNvbnN0cnVjdG9yO1xuICAgICAgICBsZXQgYnVmID0gY2xzLmVuY29kZShtc2cpLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gTWVzc2FnZS50b0J1ZmZlcihtc2dJZCwgYnVmKTtcbiAgICB9XG4gICAgcHVibGljIGRlY29kZShkYXRhOiBBcnJheUJ1ZmZlcik6IGFueSB7XG4gICAgICAgIGxldCBtc2cgPSBNZXNzYWdlLmZyb21CdWZmZXIoZGF0YSk7XG4gICAgICAgIGxldCBtc2dOYW1lID0gcHJvdG8uTXNnSURbbXNnLm1zZ2lkXTtcblxuICAgICAgICBsZXQgZHNzZWVlID0gSG90Zml4TWVzc2FnZVttc2dOYW1lXVxuICAgICAgICBpZiAoZHNzZWVlKSB7XG4gICAgICAgICAgICByZXR1cm4gSG90Zml4TWVzc2FnZVttc2dOYW1lXS5kZWNvZGUobXNnLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRzc2VlZSA9IE91dGVyTWVzc2FnZVttc2dOYW1lXVxuICAgICAgICBpZiAoZHNzZWVlKSB7XG4gICAgICAgICAgICByZXR1cm4gT3V0ZXJNZXNzYWdlW21zZ05hbWVdLmRlY29kZShtc2cuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKiDlv4Pot7PjgIHotoXml7bnm7jlhbPlpITnkIYgKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHB1YmxpYyByZXNldFJlY2VpdmVNc2dUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY2VpdmVNc2dUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlY2VpdmVNc2dUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZWNlaXZlTXNnVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5ldE5vZGUgcmVjdmllTXNnVGltZXIgY2xvc2Ugc29ja2V0IVwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzY29ubmVjdENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5fcmVjZWl2ZVRpbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEhlYXJiZWF0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9rZWVwQWxpdmVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2tlZXBBbGl2ZVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tlZXBBbGl2ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldE5vZGUga2VlcEFsaXZlVGltZXIgc2VuZCBIZWFyYmVhdFwiKTtcbiAgICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBPdXRlck1lc3NhZ2UuQzJHX0hlYXJ0YmVhdC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdChwcm90by5Nc2dJRC5DMkdfSGVhcnRiZWF0LCBoZWFydGJlYXQsIHRoaXMuSGVhcnRiZWF0X0JhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH0sIHRoaXMuX2hlYXJ0VGltZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyVGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNlaXZlTXNnVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWNlaXZlTXNnVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9rZWVwQWxpdmVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2tlZXBBbGl2ZVRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWNvbm5lY3RUaW1lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+W/g+i3s+WMheWbnuWkjVxuICAgIHB1YmxpYyBIZWFydGJlYXRfQmFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWFydGJlYXRfQmFja1wiKTtcbiAgICAgICAgLy8g5o6l5Y+X5Yiw5pWw5o2u77yM6YeN5paw5a6a5pe25pS25pWw5o2u6K6h5pe25ZmoXG4gICAgICAgIHRoaXMucmVzZXRSZWNlaXZlTXNnVGltZXIoKTtcbiAgICAgICAgLy8g6YeN572u5b+D6Lez5YyF5Y+R6YCB5ZmoXG4gICAgICAgIHRoaXMucmVzZXRIZWFyYmVhdFRpbWVyKCk7XG4gICAgfVxufVxuIl19