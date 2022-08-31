"use strict";
cc._RF.push(module, 'b01de2G5KRAcrocR5ri7odp', 'MgrLogin');
// Script/Common/Managers/MgrLogin.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MgrLogin = void 0;
var MgrNative_1 = require("../../../Script/MgrNative");
var AppConst_1 = require("../../modules/@slotsmaster/ui-common/lib/AppConst");
var HttpApi_1 = require("../../modules/@slotsmaster/ui-common/lib/HttpApi");
var IOS_API = "AppController";
var MgrLogin = /** @class */ (function () {
    function MgrLogin() {
    }
    MgrLogin.getInstance = function () {
        if (!this.instance) {
            this.instance = new MgrLogin();
            window.loginInsatnce = this.instance;
        }
        return this.instance;
    };
    /**
     * 游客设备登录
     */
    MgrLogin.prototype.deviceLogin = function (callBackError, callBackCancelLoad) {
        this._callBackError = callBackError;
        this._callBackCancelLoad = callBackCancelLoad;
        var data = {
            type: "Device",
            appId: "Windows",
            userId: MgrNative_1.MgrNative.getInstance().getDeviceUUID(),
            name: "guest",
            headImageUrl: "",
            email: "",
            mobile: "",
            userId2: "",
            accessToken: "",
            deviceUuid: MgrNative_1.MgrNative.getInstance().getDeviceUUID(),
            platform: "Windows",
        };
        this.login(data);
    };
    /**
     * 苹果登录
     */
    MgrLogin.prototype.appleLogin = function () {
        jsb.reflection.callStaticMethod(IOS_API, "singInAppleLogin:title:", "threePartyLogin", "message");
    };
    /**
     * 苹果内置登录返回数据
     */
    MgrLogin.prototype.appleLoginBackData = function (object) {
        var obrArr = object.split(";");
    };
    //登录
    MgrLogin.prototype.login = function (data) {
    };
    //Ios内置登录状态
    MgrLogin.prototype.singInAppleLoginState = function (state) {
    };
    MgrLogin.prototype.enterGameHall = function () {
        var _this = this;
        HttpApi_1.default.http
            .get(HttpApi_1.default.server + HttpApi_1.Http_EnterHall, {})
            .then(function (res) {
            if (res.code == 200) {
                _this._callBackCancelLoad();
                console.log("enterGameHall::", res.data);
                AppConst_1.AppConst.hallData = res.data;
                AppConst_1.AppConst.gameList = [];
                AppConst_1.AppConst.gameList = res.data.games;
                AppConst_1.AppConst.userMsg = res.data.user;
                cc.director.loadScene("Hall");
            }
        }, function (err) {
            _this._callBackError();
        })
            .catch(function (err) {
            _this._callBackError();
        });
    };
    return MgrLogin;
}());
exports.MgrLogin = MgrLogin;

cc._RF.pop();