
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Managers/MgrLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXE1hbmFnZXJzXFxNZ3JMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsOEVBQTZFO0FBQzdFLDRFQUEyRjtBQUMzRixJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFFaEM7SUFBQTtJQWtGQSxDQUFDO0lBaEZpQixvQkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUlEOztPQUVHO0lBQ0gsOEJBQVcsR0FBWCxVQUFZLGFBQXVCLEVBQUUsa0JBQTRCO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsTUFBTSxFQUFFLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQy9DLElBQUksRUFBRSxPQUFPO1lBQ2IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUscUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDbkQsUUFBUSxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkJBQVUsR0FBVjtRQUNJLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFrQixHQUFsQixVQUFtQixNQUFXO1FBQzFCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUVELElBQUk7SUFDSix3QkFBSyxHQUFMLFVBQU0sSUFBWTtJQUVsQixDQUFDO0lBRUQsV0FBVztJQUNYLHdDQUFxQixHQUFyQixVQUFzQixLQUFLO0lBRTNCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQUEsaUJBc0JDO1FBckJHLGlCQUFPLENBQUMsSUFBSTthQUNQLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sR0FBRyx3QkFBYyxFQUFFLEVBQUUsQ0FBQzthQUN4QyxJQUFJLENBQ0QsVUFBQyxHQUFRO1lBQ0wsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtnQkFDakIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxtQkFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM3QixtQkFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLG1CQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxtQkFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7UUFDTCxDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0EsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FDSjthQUNBLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsZUFBQztBQUFELENBbEZBLEFBa0ZDLElBQUE7QUFsRlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZ3JOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L01nck5hdGl2ZVwiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IEh0dHBBcGksIHsgSHR0cF9FbnRlckhhbGwgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9IdHRwQXBpXCI7XG5jb25zdCBJT1NfQVBJID0gXCJBcHBDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBNZ3JMb2dpbiB7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogTWdyTG9naW47XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBNZ3JMb2dpbiB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNZ3JMb2dpbigpO1xuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5zYXRuY2UgPSB0aGlzLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICBwcml2YXRlIF9jYWxsQmFja0Vycm9yOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIF9jYWxsQmFja0NhbmNlbExvYWQ6IEZ1bmN0aW9uO1xuXG4gICAgLyoqXG4gICAgICog5ri45a6i6K6+5aSH55m75b2VXG4gICAgICovXG4gICAgZGV2aWNlTG9naW4oY2FsbEJhY2tFcnJvcjogRnVuY3Rpb24sIGNhbGxCYWNrQ2FuY2VsTG9hZDogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fY2FsbEJhY2tFcnJvciA9IGNhbGxCYWNrRXJyb3I7XG4gICAgICAgIHRoaXMuX2NhbGxCYWNrQ2FuY2VsTG9hZCA9IGNhbGxCYWNrQ2FuY2VsTG9hZDtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICB0eXBlOiBcIkRldmljZVwiLFxuICAgICAgICAgICAgYXBwSWQ6IFwiV2luZG93c1wiLFxuICAgICAgICAgICAgdXNlcklkOiBNZ3JOYXRpdmUuZ2V0SW5zdGFuY2UoKS5nZXREZXZpY2VVVUlEKCksXG4gICAgICAgICAgICBuYW1lOiBcImd1ZXN0XCIsXG4gICAgICAgICAgICBoZWFkSW1hZ2VVcmw6IFwiXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgIG1vYmlsZTogXCJcIixcbiAgICAgICAgICAgIHVzZXJJZDI6IFwiXCIsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogXCJcIixcbiAgICAgICAgICAgIGRldmljZVV1aWQ6IE1nck5hdGl2ZS5nZXRJbnN0YW5jZSgpLmdldERldmljZVVVSUQoKSxcbiAgICAgICAgICAgIHBsYXRmb3JtOiBcIldpbmRvd3NcIixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2dpbihkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoi7nmnpznmbvlvZVcbiAgICAgKi9cbiAgICBhcHBsZUxvZ2luKCkge1xuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKElPU19BUEksIFwic2luZ0luQXBwbGVMb2dpbjp0aXRsZTpcIiwgXCJ0aHJlZVBhcnR5TG9naW5cIiwgXCJtZXNzYWdlXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiLueaenOWGhee9rueZu+W9lei/lOWbnuaVsOaNrlxuICAgICAqL1xuICAgIGFwcGxlTG9naW5CYWNrRGF0YShvYmplY3Q6IGFueSkge1xuICAgICAgICBsZXQgb2JyQXJyID0gb2JqZWN0LnNwbGl0KFwiO1wiKTtcblxuICAgIH1cblxuICAgIC8v55m75b2VXG4gICAgbG9naW4oZGF0YTogb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICAvL0lvc+WGhee9rueZu+W9leeKtuaAgVxuICAgIHNpbmdJbkFwcGxlTG9naW5TdGF0ZShzdGF0ZSkge1xuXG4gICAgfVxuXG4gICAgZW50ZXJHYW1lSGFsbCgpIHtcbiAgICAgICAgSHR0cEFwaS5odHRwXG4gICAgICAgICAgICAuZ2V0KEh0dHBBcGkuc2VydmVyICsgSHR0cF9FbnRlckhhbGwsIHt9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxCYWNrQ2FuY2VsTG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlckdhbWVIYWxsOjpcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29uc3QuaGFsbERhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvbnN0LmdhbWVMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb25zdC5nYW1lTGlzdCA9IHJlcy5kYXRhLmdhbWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29uc3QudXNlck1zZyA9IHJlcy5kYXRhLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxCYWNrRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxCYWNrRXJyb3IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==