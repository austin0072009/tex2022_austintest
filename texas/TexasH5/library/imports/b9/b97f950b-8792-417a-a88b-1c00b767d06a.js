"use strict";
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
 * ??????timer
 */
var Message_1 = require("./Message");
var MessageID_pb_1 = require("./proto/MessageID.pb");
var HotfixMessage_pb_1 = require("./proto/HotfixMessage.pb");
var OuterMessage_pb_1 = require("./proto/OuterMessage.pb");
var WebSocket = /** @class */ (function () {
    function WebSocket() {
        //* pinus
        this._pinus = window.pinus;
        //* ???????????????
        this._gatePort = null;
        //* ????????????
        this._gateHost = null;
        //* ????????????
        this._reConnect = false;
        //* ????????????
        this._connectCount = 0;
        //* ??????????????????
        this._connectMaxCount = 3;
        //* ??????timer
        this._requestTimer = {};
        this._isInit = false;
        this._isTopAccount = false;
        this._isManualBreak = false; // ?????????????????????
        this._reconnectCount = 0;
        this._refreshCallback = null; // ??????????????????????????????
        this._keepAliveTimer = null; // ???????????????
        this._receiveMsgTimer = null; // ?????????????????????
        this._reconnectTimer = null; // ???????????????
        this._heartTime = 10000; // ????????????
        this._receiveTime = 20000; // ???????????????????????????
        // this.init();
    }
    /**
     * ?????????pinus
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
        this.clearTimer(); // ??????????????????
        // ????????????????????????
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
            //     console.log("???????????????");
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
                cc.log("??????????????????????????????");
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
                    //console.error(`???????????????${route}, ????????????${ret.code}, ???????????????${ret.message}`);
                    if (failCallback) {
                        failCallback();
                    }
                }
            }
        });
        //* ????????? ???????????????????????????
        if (timeOutCallback) {
            timeOutDelay = timeOutDelay || 10000;
            timeOutIndex = this.addRequestTimeout(timeout, timeOutDelay);
        }
    };
    /**
     * ??????pinus??????
     * @param route ????????????
     * @param msg ????????????
     * @param successCallback ????????????
     * @param timeOutCallback ????????????
     * @param timeOutDelay ??????????????????
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
     * ????????????
     * @param timeOutIndex
     */
    WebSocket.prototype.removeRequestTimeout = function (timeOutIndex) {
        clearTimeout(timeOutIndex);
        delete this._requestTimer[timeOutIndex];
    };
    /**
     * ????????????
     * @param timeoutCallback
     * @param timeDelay
     */
    WebSocket.prototype.addRequestTimeout = function (timeoutCallback, timeDelay) {
        var timeOutIndex = setTimeout(timeoutCallback, timeDelay);
        this._requestTimer[timeOutIndex] = timeOutIndex;
        return timeOutIndex;
    };
    /**
     * ??????????????????
     * @param host
     * @param port
     */
    WebSocket.prototype.setGateConnection = function (host, port) {
        this._gatePort = port;
        this._gateHost = host;
    };
    /**
     * ?????????????????????????????????????????????
     * @param params ??????host???port?????????
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
    //????????????socket??????
    WebSocket.prototype.getConnectState = function () {
        return this._isInit;
    };
    /**
     * ????????????
     */
    WebSocket.prototype.connect = function () {
        this.connectGate(this._gateHost, this._gatePort);
    };
    /**
     * ????????????
     */
    WebSocket.prototype.disconnect = function () {
        console.log("???????????? disconnect");
        this._isManualBreak = true;
        this._isInit = false;
        this._pinus.disconnect();
        this.clearTimer();
    };
    /**
     * ?????????????????????????????????????????????????????????
     * @param host
     * @param port
     * @param options
     */
    WebSocket.prototype.connectGate = function (host, port) {
        if (!host || !port) {
            console.error("?????????????????????????????????");
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
    // ??????????????????????????????
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
    /********************** ??????????????????????????? *********************/
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
    //???????????????
    WebSocket.prototype.Heartbeat_Back = function () {
        console.log("Heartbeat_Back");
        // ????????????????????????????????????????????????
        this.resetReceiveMsgTimer();
        // ????????????????????????
        this.resetHearbeatTimer();
    };
    return WebSocket;
}());
exports.default = WebSocket;

cc._RF.pop();