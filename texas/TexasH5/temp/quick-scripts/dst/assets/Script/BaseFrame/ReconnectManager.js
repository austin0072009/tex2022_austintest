
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/ReconnectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFJlY29ubmVjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLGdFQUErRDtBQUMvRCxrR0FBOEY7QUFDOUYsMEZBQWtGO0FBQ2xGLGdHQUE0RjtBQUM1Riw2RkFBd0Y7QUFDeEYsb0ZBQXNGO0FBQ3RGLHFGQUFvRjtBQUVwRixvRUFBbUU7QUFDbkUsdURBQXNEO0FBRXREO0lBQUE7UUFVVyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsZUFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixpQkFBWSxHQUFhLElBQUksQ0FBQztRQUM5QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBbUIsSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQVksSUFBSSxDQUFDO0lBa0sxQyxDQUFDO0lBaExHLHNCQUFXLCtCQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBV0QsS0FBSztJQUNFLG9DQUFTLEdBQWhCLFVBQWlCLFVBQW9CLEVBQUUsWUFBc0IsRUFBRSxjQUE4QjtRQUE5QiwrQkFBQSxFQUFBLHFCQUE4QjtRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLHlDQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFB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QUFJLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztZQUMvQixHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDM0c7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3RELEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDOUU7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx1QkFBQztBQUFELENBbkxBLEFBbUxDLElBQUE7QUFuTFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XG5pbXBvcnQgeyBIb3RmaXhNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL3Byb3RvL0hvdGZpeE1lc3NhZ2UucGJcIjtcbmltcG9ydCB7IHByb3RvIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL3Byb3RvL01lc3NhZ2VJRC5wYlwiO1xuaW1wb3J0IHsgT3V0ZXJNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL3Byb3RvL091dGVyTWVzc2FnZS5wYlwiO1xuaW1wb3J0IFdlYlNvY2tldEFwaSBmcm9tIFwiLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvV2ViU29ja2V0QXBpXCI7XG5pbXBvcnQgKiBhcyBDbGllbnRNZXNzYWdlIGZyb20gXCIuLi8uLi9TY3JpcHQvbW9kdWxlcy9AbW9nYWZhL3V0aWxzL2xpYi9DbGllbnRNZXNzYWdlXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IHsgc2NfbG9naW4gfSBmcm9tIFwiLi4vLi4vU2NyaXB0L21vZHVsZXMvQG1vZ2FmYS91dGlscy9saWIvQ2xpZW50TWVzc2FnZVwiO1xuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvU2NlbmVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb29sc0V4IH0gZnJvbSBcIi4uLy4uL1NjcmlwdC9Db21tb24vVG9vbHNFeFwiO1xuXG5leHBvcnQgY2xhc3MgUmVjb25uZWN0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJlY29ubmVjdE1hbmFnZXI7XG5cbiAgICBzdGF0aWMgZ2V0IGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmVjb25uZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBfaG9zdDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgX3BvcnQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgY2FsbEJhY2tPSzogRnVuY3Rpb24gPSBudWxsO1xuICAgIHB1YmxpYyBjYWxsQmFja0ZhaWw6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwdWJsaWMgdGltZTogbnVtYmVyID0gMTU7XG4gICAgcHVibGljIHRpbWVyOiBOb2RlSlMuVGltZW91dCA9IG51bGw7XG4gICAgcHVibGljIGlzTmVlZEJhY2tIYWxsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8vIOmHjei/nlxuICAgIHB1YmxpYyByZWNvbm5lY3QoY2FsbGJhY2tvazogRnVuY3Rpb24sIGNhbGxiYWNrZmFpbDogRnVuY3Rpb24sIGlzTmVlZEJhY2tIYWxsOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNhbGxCYWNrT0sgPSBjYWxsYmFja29rO1xuICAgICAgICB0aGlzLmNhbGxCYWNrRmFpbCA9IGNhbGxiYWNrZmFpbDtcbiAgICAgICAgdGhpcy5pc05lZWRCYWNrSGFsbCA9IGlzTmVlZEJhY2tIYWxsO1xuICAgICAgICB0aGlzLnN0YXJ0UmVjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0UmVjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZ2V0TmV0V29ya1N0YXR1cygpID09IFwiLCB0aGlzLmdldE5ldFdvcmtTdGF0dXMoKSk7XG4gICAgICAgIGlmICh0aGlzLmdldE5ldFdvcmtTdGF0dXMoKSkge1xuICAgICAgICAgICAgbGV0IHdlYnNvY2tldHN0YXR1czogYm9vbGVhbiA9IFdlYlNvY2tldEFwaS5zb2NrZXQuZ2V0Q29ubmVjdFN0YXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldHN0YXR1cyA9PSBcIiwgd2Vic29ja2V0c3RhdHVzKTtcbiAgICAgICAgICAgIGlmICh3ZWJzb2NrZXRzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsQmFja09LKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2tPSygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0TG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXAoXCLor7fmo4Dmn6Xorr7lpIfnvZHnu5zmmK/lkKbmiZPlvIBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucmVjb25uZWN0KGNhbGxiYWNrb2spO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsQmFja0ZhaWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrRmFpbChcIuivt+ajgOafpeiuvuWkh+e9kee7nOaYr+WQpuaJk+W8gFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0TG9naW4oKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxCYWNrRmFpbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2tGYWlsKFwi6L+e5o6l5pyN5Yqh5Zmo6LaF5pe277yM6K+36YeN6K+V77yBXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnRpbWUgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1cblxuICAgIC8vIOWPkei1t+eZu+W9lVxuICAgIHB1YmxpYyBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5faG9zdCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS51cmw7XG4gICAgICAgIHRoaXMuX3BvcnQgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0ucG9ydDtcbiAgICAgICAgbGV0IHBpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luX3BpZFwiKTtcbiAgICAgICAgbGV0IHB3ZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luX3B3ZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLl9ob3N0ID09PSBcIiwgdGhpcy5faG9zdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fcG9ydCA9PT0gXCIsIHRoaXMuX3BvcnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBpZCA9PT0gXCIsIHBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHdkID09PSBcIiwgcHdkKTtcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QgJiYgdGhpcy5fcG9ydCAmJiBwaWQgJiYgcHdkKSB7XG4gICAgICAgICAgICBsZXQgcmVxbG9naW4gPSBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpbi5jcmVhdGUoKTtcbiAgICAgICAgICAgIHJlcWxvZ2luLkFjY291bnQgPSBwaWQ7XG4gICAgICAgICAgICByZXFsb2dpbi5ScGNJZCA9IDE7XG4gICAgICAgICAgICByZXFsb2dpbi5QYXNzd29yZCA9IFRvb2xzRXguU2luZ2xldG9uLkVuY3J5cHRpb25QV0QocHdkKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgaG9zdDogdGhpcy5faG9zdCxcbiAgICAgICAgICAgICAgICBwb3J0OiB0aGlzLl9wb3J0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvLk1zZ0lELkMyUl9Mb2dpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcWxvZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dpbl9DMlJfTG9naW5fQmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVjb25uZWN0KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW5fQzJSX0xvZ2luX0JhY2socmV0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tUmVjb25uZWN0TWFuYWdlciBMb2dpbl9DMlJfTG9naW5fQmFjay0tLVwiLCByZXQpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkRpc0Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHJldC5FcnJvciAmJiByZXQuRXJyb3IgPT0gXCIyMDAxMDJcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEJhY2tGYWlsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFja0ZhaWwoXCLov57mjqXlpLHotKXvvIzotKblj7fmiJblr4bnoIHplJnor69cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkxvZ2luR2F0ZShyZXQpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBMb2dpbkdhdGUobXNnKSB7XG4gICAgICAgIGxldCBzdHIgPSBtc2cuQWRkcmVzcy5zcGxpdChcIjpcIiwgMik7XG4gICAgICAgIHRoaXMuX2hvc3QgPSBzdHJbMF07XG4gICAgICAgIHRoaXMuX3BvcnQgPSBzdHJbMV07XG4gICAgICAgIGlmICh0aGlzLl9wb3J0ICYmIHRoaXMuX2hvc3QpIHtcbiAgICAgICAgICAgIGxldCByZXFsb2dpbiA9IEhvdGZpeE1lc3NhZ2UuQzJHX0xvZ2luR2F0ZS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHJlcWxvZ2luLnVzZXJpZCA9IG1zZy51c2VyaWQ7XG4gICAgICAgICAgICByZXFsb2dpbi5LZXkgPSBtc2cuS2V5O1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaG9zdDogdGhpcy5faG9zdCxcbiAgICAgICAgICAgICAgICBwb3J0OiB0aGlzLl9wb3J0LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVxdWVzdChwcm90by5Nc2dJRC5DMkdfTG9naW5HYXRlLCByZXFsb2dpbiwgdGhpcy5Mb2dpbkdhdGVfYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFdlYlNvY2tldEFwaS5zb2NrZXQucmVjb25uZWN0KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgTG9naW5HYXRlX2JhY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9wb3J0ICYmIHRoaXMuX2hvc3QpIHtcbiAgICAgICAgICAgIGxldCByZXFsb2dpbiA9IE91dGVyTWVzc2FnZS5DMkdfRW50ZXJNYXAuY3JlYXRlKCk7XG4gICAgICAgICAgICBXZWJTb2NrZXRBcGkuc29ja2V0LnJlcXVlc3QocHJvdG8uTXNnSUQuQzJHX0VudGVyTWFwLCByZXFsb2dpbiwgdGhpcy5FbnRlck1hcF9CYWNrLmJpbmQodGhpcyksKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBFbnRlck1hcF9CYWNrKHJldCkge1xuICAgICAgICBsZXQgbG9naW4gPSBuZXcgQ2xpZW50TWVzc2FnZS5jc19sb2dpbigpO1xuICAgICAgICBsb2dpbi5mbiA9IFwiY3NfbG9naW5cIjtcbiAgICAgICAgbG9naW4uYWNjb3VudElkID0gQXBwQ29uc3QuQWNjb3VudDtcbiAgICAgICAgbGV0IGpzb25fbG9naW4gPSBKU09OLnN0cmluZ2lmeShsb2dpbik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZChqc29uX2xvZ2luLCB0aGlzLnNjX2xvZ2luLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19sb2dpbihkYXRhOiBzY19sb2dpbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLXNjX2xvZ2luLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHBDb25zdC5BY2NvdW50ID0gZGF0YS51c2VyLnVzZXJpZDtcbiAgICAgICAgICAgIEFwcENvbnN0LmdhbWVJZCA9IGRhdGEuZ2FtZWlkO1xuICAgICAgICAgICAgQXBwQ29uc3QuY2lkeCA9IGRhdGEuY2lkeDtcbiAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbCA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIGlmIChkYXRhLnVzZXIuc3RhdGUgPiAwIHx8ICF0aGlzLmlzTmVlZEJhY2tIYWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlID0gMDtcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHph43ov54g6LCD55So6YeN6L+e5Zue6LCDXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEJhY2tPSykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrT0soKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFja09LID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS4jemcgOimgemHjei/nui/lOWbnuWkp+WOhVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTmVlZEJhY2tIYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2JieVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDojrflj5bnvZHnu5zov57mjqXnirbmgIEgZmFsc2Xml6DnvZEgIHRydWXmnInnvZFcbiAgICBwdWJsaWMgZ2V0TmV0V29ya1N0YXR1cygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG5ldCA9IFwiXCI7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAvKirojrflj5bnvZHnu5znirbmgIEgKi9cbiAgICAgICAgICAgIGxldCBtZXRob2RTaWduYXR1cmUgPSBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCI7XG4gICAgICAgICAgICBsZXQgbWV0aG9kMSA9IFwiZ2V0TmV0V29ya0luZm9cIjtcbiAgICAgICAgICAgIG5ldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9UU0phdmFCcmlkZ2VcIiwgbWV0aG9kMSwgbWV0aG9kU2lnbmF0dXJlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuaXNOYXRpdmUgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIG5ldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJUU09iamVjdENCcmlkZ2VcIiwgXCJnZXROZXR3b3JrVHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV0QXJyID0gbmV0LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgaWYgKG5ldEFyclswXSA9PSBcIi0xXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19