
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/WebSocketApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxXZWJTb2NrZXRBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQTZEO0FBRTdELGdDQUFnQztBQUNuQixRQUFBLGlCQUFpQixHQUFHLDZCQUE2QixDQUFDO0FBRS9ELFFBQVE7QUFDSyxRQUFBLGdCQUFnQixHQUFHLG9DQUFvQyxDQUFDO0FBRXJFLFFBQVE7QUFDSyxRQUFBLGVBQWUsR0FBRyxvQ0FBb0MsQ0FBQztBQUVwRSxRQUFRO0FBQ0ssUUFBQSxpQkFBaUIsR0FBRyxxQ0FBcUMsQ0FBQztBQUV2RSxlQUFlO0FBQ0YsUUFBQSxzQkFBc0IsR0FBRyxrQ0FBa0MsQ0FBQztBQUV6RSxpQkFBaUI7QUFDSixRQUFBLDBCQUEwQixHQUFHLG1DQUFtQyxDQUFDO0FBRTlFLFFBQVE7QUFDSyxRQUFBLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDO0FBRTFEO0lBQUE7SUE2QkEsQ0FBQztJQTNCRyxzQkFBa0Isc0JBQU07YUFBeEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBR0Qsc0JBQWtCLDBCQUFVO2FBRzVCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFMRCxVQUE2QixLQUFhO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQWtCLHdCQUFRO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUEyQixLQUFhO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBSWEsaUNBQW9CLEdBQWxDLFVBQW1DLElBQWM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ2EsK0JBQWtCLEdBQWhDLFVBQWlDLElBQWM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbkJjLHdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBT3pCLHNCQUFTLEdBQVcsS0FBSyxDQUFDO0lBYTdDLG1CQUFDO0NBN0JELEFBNkJDLElBQUE7a0JBN0JvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgV2ViU29ja2V0IGZyb20gXCIuLi8uLi8uLi9AbW9nYWZhL3V0aWxzL2xpYi9XZWJTb2NrZXRcIjtcblxuLy8qIOW7uueri3dlYnNvY2tldOi/nuaOpSDpqozor4FhY2Nlc3NfdG9rZW5cbmV4cG9ydCBjb25zdCBTb2NrZXRfUXVlcnlFbnRlciA9IFwiZ2F0ZS5nYXRlSGFuZGxlci5xdWVyeUVudHJ5XCI7XG5cbi8vKiDov5vlhaXmiL/pl7RcbmV4cG9ydCBjb25zdCBTb2NrZXRfRW50ZXJSb29tID0gXCJnYW1lUGxhdGZvcm0ucm9vbUhhbmRsZXIuZW50ZXJSb29tXCI7XG5cbi8vKiDpgIDlh7rmiL/pl7RcbmV4cG9ydCBjb25zdCBTb2NrZXRfRXhpdFJvb20gPSBcImdhbWVQbGF0Zm9ybS5yb29tSGFuZGxlci5sZWF2ZVJvb21cIjtcblxuLy8qIOiOt+WPluWlluaxoFxuZXhwb3J0IGNvbnN0IFNvY2tldF9HZXRKYWNrcG90ID0gXCJnYW1ibGluZy5nYW1ibGluZ0hhbmRsZXIuZ2V0SmFja3BvdFwiO1xuXG4vLyog6IGa5a6d55uG6I635Y+W5paw5qOL55uY55qE5omL54mMXG5leHBvcnQgY29uc3QgU29ja2V0X0dldEp1QmFvUGVuSGFuZCA9IFwianViYW9wZW4uanViYW9wZW5IYW5kbGVyLmdldEhhbmRcIjtcblxuLy8qIOiBmuWuneebhkphY2twb3Tnv7vph5HluIFcbmV4cG9ydCBjb25zdCBTb2NrZXRfR2V0SnVCYW9QZW5GbGlwQ29pbiA9IFwianViYW9wZW4uanViYW9wZW5IYW5kbGVyLmZsaXBDb2luXCI7XG5cbi8vKiDojrflj5blpZbmsaBcbmV4cG9ydCBjb25zdCBTb2NrZXRfR2V0R2FtZUphY2twb3QgPSBcIkhhbmRsZXIuZ2V0SmFja3BvdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTb2NrZXRBcGkge1xuICAgIHByaXZhdGUgc3RhdGljIF9zb2NrZXQ6IFdlYlNvY2tldDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzb2NrZXQoKTogV2ViU29ja2V0IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldCA9IG5ldyBXZWJTb2NrZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc29ja2V0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9nYXRlU2VydmVyOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGdhdGVTZXJ2ZXIodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9nYXRlU2VydmVyID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdhdGVTZXJ2ZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhdGVTZXJ2ZXI7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIF9nYXRlUG9ydDogbnVtYmVyID0gMTAwMDI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2F0ZVBvcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhdGVQb3J0O1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHNldCBnYXRlUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2dhdGVQb3J0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SGVhcnRCZWF0Q2FsbGJhY2soZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuc2V0SGVhcnRCZWF0Q2FsbGJhY2soZnVuYyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UmVmcmVzaENhbGxiYWNrKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuc29ja2V0LnNldFJlZnJlc2hDYWxsYmFjayhmdW5jKTtcbiAgICB9XG59XG4iXX0=