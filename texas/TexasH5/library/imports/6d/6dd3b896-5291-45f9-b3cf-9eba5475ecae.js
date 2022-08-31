"use strict";
cc._RF.push(module, '6dd3biWUpFF+bPPnrpUdeyu', 'WebSocketApi');
// Script/modules/@slotsmaster/ui-common/lib/WebSocketApi.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket_GetGameJackpot = exports.Socket_GetJuBaoPenFlipCoin = exports.Socket_GetJuBaoPenHand = exports.Socket_GetJackpot = exports.Socket_ExitRoom = exports.Socket_EnterRoom = exports.Socket_QueryEnter = void 0;
var WebSocket_1 = require("../../../@mogafa/utils/lib/WebSocket");
//* 建立websocket连接 验证access_token
exports.Socket_QueryEnter = "gate.gateHandler.queryEntry";
//* 进入房间
exports.Socket_EnterRoom = "gamePlatform.roomHandler.enterRoom";
//* 退出房间
exports.Socket_ExitRoom = "gamePlatform.roomHandler.leaveRoom";
//* 获取奖池
exports.Socket_GetJackpot = "gambling.gamblingHandler.getJackpot";
//* 聚宝盆获取新棋盘的手牌
exports.Socket_GetJuBaoPenHand = "jubaopen.jubaopenHandler.getHand";
//* 聚宝盆Jackpot翻金币
exports.Socket_GetJuBaoPenFlipCoin = "jubaopen.jubaopenHandler.flipCoin";
//* 获取奖池
exports.Socket_GetGameJackpot = "Handler.getJackpot";
var WebSocketApi = /** @class */ (function () {
    function WebSocketApi() {
    }
    Object.defineProperty(WebSocketApi, "socket", {
        get: function () {
            if (!this._socket) {
                this._socket = new WebSocket_1.default();
            }
            return this._socket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocketApi, "gateServer", {
        get: function () {
            return this._gateServer;
        },
        set: function (value) {
            this._gateServer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocketApi, "gatePort", {
        get: function () {
            return this._gatePort;
        },
        set: function (value) {
            this._gatePort = value;
        },
        enumerable: false,
        configurable: true
    });
    WebSocketApi.setHeartBeatCallback = function (func) {
        this.socket.setHeartBeatCallback(func);
    };
    WebSocketApi.setRefreshCallback = function (func) {
        this.socket.setRefreshCallback(func);
    };
    WebSocketApi._gateServer = "";
    WebSocketApi._gatePort = 10002;
    return WebSocketApi;
}());
exports.default = WebSocketApi;

cc._RF.pop();