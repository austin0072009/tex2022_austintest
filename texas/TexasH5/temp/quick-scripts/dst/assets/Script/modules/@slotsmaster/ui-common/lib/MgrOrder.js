
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/MgrOrder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4455cpO1JORJh2jI/5DuAx', 'MgrOrder');
// Script/modules/@slotsmaster/ui-common/lib/MgrOrder.ts

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
exports.MgrOrder = void 0;
var AppConst_1 = require("./AppConst");
var HttpApi_1 = require("./HttpApi");
/*
 * @Description:
 * @Author: 张菊
 * @Date: 2020-05-14 14:21:05
 * @LastEditTime: 2020-05-14 18:14:47
 * @LastEditors: 张菊
 */
var MgrOrder = /** @class */ (function () {
    function MgrOrder() {
        this._getDataInfo = null;
    }
    MgrOrder.getInstance = function () {
        if (!this.instance) {
            this.instance = new MgrOrder();
        }
        return this.instance;
    };
    //服务器已请求订单
    MgrOrder.prototype.createdOrderToJava = function (data) {
        if (data.orderId) {
            AppConst_1.AppConst.orderId = data.orderId.toString();
            if (AppConst_1.AppConst.platform == "iOS") {
                console.log("jhl jsToIos:", data);
                jsb.reflection.callStaticMethod("AppController", "Pay:chargeData:", data.orderId, data.productCode);
            }
            else if ((AppConst_1.AppConst.platform = "Android")) {
                //  let productCode = Tools.changeToLowercase(data.productCode);
                //安卓支付
                console.log("jhl jsToAndroid:", data);
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "GooglePay", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", data.orderId, data.productCode);
            }
            return true;
        }
        else {
            return false;
        }
    };
    MgrOrder.prototype.postData = function (url, bodyParams, callback) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpApi_1.default.http.post(HttpApi_1.default.server + url, bodyParams, {
                            headers: {
                                Authorization: AppConst_1.AppConst.accessToken,
                            },
                        })];
                    case 1:
                        result = _a.sent();
                        console.log("postDatapostData:", result);
                        if (result.isSuccessful) {
                            this._getDataInfo = result.data;
                            callback();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MgrOrder.prototype.getOrderSuccessCallBack = function () {
        AppConst_1.AppConst.orderId = "";
        //cc.cdd.MyApp.tip("創建訂單成功！");
        var self = MgrOrder.getInstance();
        AppConst_1.AppConst.orderId = self._getDataInfo.orderId;
        if (self._getDataInfo.productCode) {
            if (AppConst_1.AppConst.platform == "iOS") {
                console.log("jhl jsToIos:", self._getDataInfo);
                jsb.reflection.callStaticMethod("AppController", "Pay:chargeData:", self._getDataInfo.orderId, self._getDataInfo.productCode);
            }
            else if (AppConst_1.AppConst.platform == "Android") {
                //   let productCode = Tools.changeToLowercase(ret.data.productCode);
                //安卓支付
                console.log("jhl jsToAndroid:", self._getDataInfo);
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "GooglePay", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", self._getDataInfo.orderId, self._getDataInfo.productCode);
            }
        }
    };
    MgrOrder.prototype.sendOrderToJava = function (data, callbackSuccess, callbackFail) {
        this._callbackSuccess = callbackSuccess;
        this._callbackFail = callbackFail;
        //  cc.cdd.MgrUser.orderData = data;
        if (this.createdOrderToJava(data))
            return;
        var self = this;
        console.log(" sendOrderToJava___________", data);
        var url = HttpApi_1.Http_GetOrder;
        var bodyParams = {
            productId: data.productId,
            quantity: data.quantity,
        };
        if (cc.sys.os == cc.sys.OS_IOS) {
            localStorage.getItem("iosPay") != undefined &&
                localStorage.getItem("iosPay") != null &&
                AppConst_1.AppConst.orderId != ""
                ? this.checkNoCannelPay()
                : this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            localStorage.getItem("AndroidPay") != undefined &&
                localStorage.getItem("AndroidPay") != null &&
                AppConst_1.AppConst.orderId != ""
                ? this.checkNoCannelPay()
                : this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        }
        else {
            this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        }
    };
    MgrOrder.prototype.getPayDataSuccessCallBack = function () {
        var self = MgrOrder.getInstance();
        console.log("充值服务器返回数据：", JSON.stringify(self._getDataInfo));
        if (self._getDataInfo.verified == true) {
            console.log("充值服务器返回数据：", JSON.stringify(self._getDataInfo));
            self._callbackSuccess();
            // cc.cdd.MyApp.tip("充值成功");
            //   cc.cdd.MyApp.alert("THANK YOU", TipsConst.Recharge_Success, function() {}, 1, 3);
            // if (cc.cdd.MgrUser.getFirstCharge() == 1) {
            //     cc.cdd.MgrUser.setFirstCharge(0);
            //     cc.director.GlobalEvent.emit("hall_firstCharge");
            // }
            // self.paySuccessAllState();
            self.checkPayState();
        }
        else {
            self._callbackFail();
            //cc.cdd.MyApp.tip("验证失败");
            // cc.cdd.MyApp.alert(
            //     "SORRY",
            //     TipsConst.Recharge_Fail,
            //     function() {
            //         self.payFailAllState();
            //     },
            //     1,
            //     2,
            //     1
            // );
        }
        // } else {
        //     //cc.cdd.MyApp.warning("充值失敗");
        //     // cc.cdd.MyApp.alert(
        //     //     "SORRY",
        //     //     TipsConst.Recharge_Fail,
        //     //     function() {
        //     //         self.payFailAllState();
        //     //     },
        //     //     1,
        //     //     2,
        //     //     1
        //     // );
    };
    MgrOrder.prototype.sendPayData = function (obj, data) {
        var payData;
        if (cc.sys.os == cc.sys.OS_IOS) {
            payData = AppConst_1.AppConst.orderId + ";" + obj + ";" + "false";
            localStorage.setItem("iosPay", payData);
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            payData = obj + "&" + "false";
            localStorage.setItem("AndroidPay", payData);
        }
        var url = HttpApi_1.Http_GetOrder;
        var bodyParams = {
            productId: data.productId,
            quantity: data.quantity,
        };
        this.postData(url, bodyParams, this.getPayDataSuccessCallBack);
    };
    MgrOrder.prototype.checkNoCannelPay = function () {
        var arr;
        var newArr;
        if (cc.sys.os == cc.sys.OS_IOS) {
            arr = localStorage.getItem("iosPay");
            newArr = arr.split(";");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            arr = localStorage.getItem("AndroidPay");
            newArr = arr.split("&");
        }
        console.log("检测未完成订单1：", JSON.stringify(arr));
        //cc.cdd.MyApp.tip("檢測未完成訂單,繼續進行充值操作");
        console.log("检测未完成订单2：", JSON.stringify(newArr));
        console.log("检测未完成订单3：", newArr[newArr.length - 1]);
        if (newArr[newArr.length - 1] == "false") {
            if (cc.sys.os == cc.sys.OS_IOS) {
                var obj = newArr[1] + ";" + newArr[2] + ";" + newArr[0];
                console.log("检测未完成订单：" + obj);
                this.iosPayBack(obj, 1);
            }
            else if (cc.sys.os == cc.sys.OS_ANDROID) {
                var obj = newArr[0] + "&" + newArr[1] + "&" + newArr[2] + "&" + newArr[3];
                console.log("检测未完成订单：" + obj);
                this.AndroidGooglePay(obj, 1);
            }
        }
    };
    MgrOrder.prototype.iosPayBack = function (obj, type) {
        if (type === void 0) { type = 0; }
        var obrArr = obj.split(";");
        console.log("Ios支付数据：" + obrArr);
        var curOrderId = "";
        type == 0 ? (curOrderId = AppConst_1.AppConst.orderId) : (curOrderId = obrArr[2]);
        var data = {
            orderId: curOrderId,
            payType: "Apple",
            payment: obrArr[0],
            signature: "",
            transactionId: obrArr[1],
        };
        this.sendPayData(obj, data);
    };
    //谷歌安卓支付
    MgrOrder.prototype.AndroidGooglePay = function (obj, type) {
        if (type === void 0) { type = 0; }
        console.log("Android支付数据：" + obj);
        var obrArr = obj.split("&");
        console.log("Android支付数据：" + obrArr);
        var curOrderId = "";
        type == 0 ? (curOrderId = AppConst_1.AppConst.orderId) : (curOrderId = obrArr[0]);
        var data = {
            orderId: curOrderId,
            payType: "Google",
            payment: obrArr[1],
            transactionId: obrArr[2],
            signature: obrArr[3],
        };
        this.sendPayData(obj, data);
    };
    //检测订单校验情况
    MgrOrder.prototype.checkPayState = function () {
        var arr;
        var newArr;
        if (cc.sys.os == cc.sys.OS_IOS) {
            arr = localStorage.getItem("iosPay");
            newArr = arr.split(";");
            if (newArr[newArr.length - 1] == "false" && newArr[0] == AppConst_1.AppConst.orderId) {
                localStorage.removeItem("iosPay");
            }
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
            arr = localStorage.getItem("AndroidPay");
            newArr = arr.split("&");
            if (newArr[newArr.length - 1] == "false" && newArr[0] == AppConst_1.AppConst.orderId) {
                localStorage.removeItem("AndroidPay");
            }
        }
        console.log("检测订单：", JSON.stringify(arr));
    };
    return MgrOrder;
}());
exports.MgrOrder = MgrOrder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxNZ3JPcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMscUNBQW1EO0FBRW5EOzs7Ozs7R0FNRztBQUNIO0lBQUE7UUFDWSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQWdQaEMsQ0FBQztJQTVPaUIsb0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELFVBQVU7SUFDVixxQ0FBa0IsR0FBbEIsVUFBbUIsSUFBUztRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxtQkFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNDLElBQUksbUJBQVEsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDdkc7aUJBQU0sSUFBSSxDQUFDLG1CQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxFQUFFO2dCQUN4QyxnRUFBZ0U7Z0JBQ2hFLE1BQU07Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLFVBQVUsQ0FB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QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FqUEEsQUFpUEMsSUFBQTtBQWpQWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4vQXBwQ29uc3RcIjtcbmltcG9ydCBIdHRwQXBpLCB7IEh0dHBfR2V0T3JkZXIgfSBmcm9tIFwiLi9IdHRwQXBpXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246XG4gKiBAQXV0aG9yOiDlvKDoj4pcbiAqIEBEYXRlOiAyMDIwLTA1LTE0IDE0OjIxOjA1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA1LTE0IDE4OjE0OjQ3XG4gKiBATGFzdEVkaXRvcnM6IOW8oOiPilxuICovXG5leHBvcnQgY2xhc3MgTWdyT3JkZXIge1xuICAgIHByaXZhdGUgX2dldERhdGFJbmZvID0gbnVsbDtcbiAgICBwcml2YXRlIF9jYWxsYmFja1N1Y2Nlc3M6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX2NhbGxiYWNrRmFpbDogRnVuY3Rpb247XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogTWdyT3JkZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBNZ3JPcmRlciB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNZ3JPcmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICAvL+acjeWKoeWZqOW3suivt+axguiuouWNlVxuICAgIGNyZWF0ZWRPcmRlclRvSmF2YShkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgQXBwQ29uc3Qub3JkZXJJZCA9IGRhdGEub3JkZXJJZC50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKEFwcENvbnN0LnBsYXRmb3JtID09IFwiaU9TXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImpobCBqc1RvSW9zOlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiQXBwQ29udHJvbGxlclwiLCBcIlBheTpjaGFyZ2VEYXRhOlwiLCBkYXRhLm9yZGVySWQsIGRhdGEucHJvZHVjdENvZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoQXBwQ29uc3QucGxhdGZvcm0gPSBcIkFuZHJvaWRcIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgbGV0IHByb2R1Y3RDb2RlID0gVG9vbHMuY2hhbmdlVG9Mb3dlcmNhc2UoZGF0YS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICAgICAgLy/lronljZPmlK/ku5hcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImpobCBqc1RvQW5kcm9pZDpcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgICAgICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkdvb2dsZVBheVwiLFxuICAgICAgICAgICAgICAgICAgICBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7XCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEub3JkZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm9kdWN0Q29kZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgYm9keVBhcmFtczogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBhd2FpdCBIdHRwQXBpLmh0dHAucG9zdChIdHRwQXBpLnNlcnZlciArIHVybCwgYm9keVBhcmFtcywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEFwcENvbnN0LmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zdERhdGFwb3N0RGF0YTpcIiwgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2dldERhdGFJbmZvID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE9yZGVyU3VjY2Vzc0NhbGxCYWNrKCk6IHZvaWQge1xuICAgICAgICBBcHBDb25zdC5vcmRlcklkID0gXCJcIjtcbiAgICAgICAgLy9jYy5jZGQuTXlBcHAudGlwKFwi5Ym15bu66KiC5Zau5oiQ5Yqf77yBXCIpO1xuICAgICAgICBsZXQgc2VsZiA9IE1nck9yZGVyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIEFwcENvbnN0Lm9yZGVySWQgPSBzZWxmLl9nZXREYXRhSW5mby5vcmRlcklkO1xuICAgICAgICBpZiAoc2VsZi5fZ2V0RGF0YUluZm8ucHJvZHVjdENvZGUpIHtcbiAgICAgICAgICAgIGlmIChBcHBDb25zdC5wbGF0Zm9ybSA9PSBcImlPU1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJqaGwganNUb0lvczpcIiwgc2VsZi5fZ2V0RGF0YUluZm8pO1xuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgICAgICAgICAgICAgIFwiQXBwQ29udHJvbGxlclwiLFxuICAgICAgICAgICAgICAgICAgICBcIlBheTpjaGFyZ2VEYXRhOlwiLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9nZXREYXRhSW5mby5vcmRlcklkLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9nZXREYXRhSW5mby5wcm9kdWN0Q29kZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFwcENvbnN0LnBsYXRmb3JtID09IFwiQW5kcm9pZFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gICBsZXQgcHJvZHVjdENvZGUgPSBUb29scy5jaGFuZ2VUb0xvd2VyY2FzZShyZXQuZGF0YS5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICAgICAgLy/lronljZPmlK/ku5hcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImpobCBqc1RvQW5kcm9pZDpcIiwgc2VsZi5fZ2V0RGF0YUluZm8pO1xuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgICAgICAgICAgICAgIFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHb29nbGVQYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nO1wiLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9nZXREYXRhSW5mby5vcmRlcklkLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9nZXREYXRhSW5mby5wcm9kdWN0Q29kZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kT3JkZXJUb0phdmEoZGF0YTogYW55LCBjYWxsYmFja1N1Y2Nlc3M6IEZ1bmN0aW9uLCBjYWxsYmFja0ZhaWwpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tTdWNjZXNzID0gY2FsbGJhY2tTdWNjZXNzO1xuICAgICAgICB0aGlzLl9jYWxsYmFja0ZhaWwgPSBjYWxsYmFja0ZhaWw7XG4gICAgICAgIC8vICBjYy5jZGQuTWdyVXNlci5vcmRlckRhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5jcmVhdGVkT3JkZXJUb0phdmEoZGF0YSkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiBzZW5kT3JkZXJUb0phdmFfX19fX19fX19fX1wiLCBkYXRhKTtcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gSHR0cF9HZXRPcmRlcjtcbiAgICAgICAgbGV0IGJvZHlQYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RJZDogZGF0YS5wcm9kdWN0SWQsXG4gICAgICAgICAgICBxdWFudGl0eTogZGF0YS5xdWFudGl0eSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlvc1BheVwiKSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW9zUGF5XCIpICE9IG51bGwgJiZcbiAgICAgICAgICAgIEFwcENvbnN0Lm9yZGVySWQgIT0gXCJcIlxuICAgICAgICAgICAgICAgID8gdGhpcy5jaGVja05vQ2FubmVsUGF5KClcbiAgICAgICAgICAgICAgICA6IHRoaXMucG9zdERhdGEodXJsLCBib2R5UGFyYW1zLCB0aGlzLmdldE9yZGVyU3VjY2Vzc0NhbGxCYWNrKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQW5kcm9pZFBheVwiKSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQW5kcm9pZFBheVwiKSAhPSBudWxsICYmXG4gICAgICAgICAgICBBcHBDb25zdC5vcmRlcklkICE9IFwiXCJcbiAgICAgICAgICAgICAgICA/IHRoaXMuY2hlY2tOb0Nhbm5lbFBheSgpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnBvc3REYXRhKHVybCwgYm9keVBhcmFtcywgdGhpcy5nZXRPcmRlclN1Y2Nlc3NDYWxsQmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc3REYXRhKHVybCwgYm9keVBhcmFtcywgdGhpcy5nZXRPcmRlclN1Y2Nlc3NDYWxsQmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGF5RGF0YVN1Y2Nlc3NDYWxsQmFjaygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSBNZ3JPcmRlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWFheWAvOacjeWKoeWZqOi/lOWbnuaVsOaNru+8mlwiLCBKU09OLnN0cmluZ2lmeShzZWxmLl9nZXREYXRhSW5mbykpO1xuICAgICAgICBpZiAoc2VsZi5fZ2V0RGF0YUluZm8udmVyaWZpZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYXlgLzmnI3liqHlmajov5Tlm57mlbDmja7vvJpcIiwgSlNPTi5zdHJpbmdpZnkoc2VsZi5fZ2V0RGF0YUluZm8pKTtcbiAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrU3VjY2VzcygpO1xuXG4gICAgICAgICAgICAvLyBjYy5jZGQuTXlBcHAudGlwKFwi5YWF5YC85oiQ5YqfXCIpO1xuICAgICAgICAgICAgLy8gICBjYy5jZGQuTXlBcHAuYWxlcnQoXCJUSEFOSyBZT1VcIiwgVGlwc0NvbnN0LlJlY2hhcmdlX1N1Y2Nlc3MsIGZ1bmN0aW9uKCkge30sIDEsIDMpO1xuICAgICAgICAgICAgLy8gaWYgKGNjLmNkZC5NZ3JVc2VyLmdldEZpcnN0Q2hhcmdlKCkgPT0gMSkge1xuICAgICAgICAgICAgLy8gICAgIGNjLmNkZC5NZ3JVc2VyLnNldEZpcnN0Q2hhcmdlKDApO1xuICAgICAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLkdsb2JhbEV2ZW50LmVtaXQoXCJoYWxsX2ZpcnN0Q2hhcmdlXCIpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gc2VsZi5wYXlTdWNjZXNzQWxsU3RhdGUoKTtcbiAgICAgICAgICAgIHNlbGYuY2hlY2tQYXlTdGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tGYWlsKCk7XG4gICAgICAgICAgICAvL2NjLmNkZC5NeUFwcC50aXAoXCLpqozor4HlpLHotKVcIik7XG4gICAgICAgICAgICAvLyBjYy5jZGQuTXlBcHAuYWxlcnQoXG4gICAgICAgICAgICAvLyAgICAgXCJTT1JSWVwiLFxuICAgICAgICAgICAgLy8gICAgIFRpcHNDb25zdC5SZWNoYXJnZV9GYWlsLFxuICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLnBheUZhaWxBbGxTdGF0ZSgpO1xuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgMSxcbiAgICAgICAgICAgIC8vICAgICAyLFxuICAgICAgICAgICAgLy8gICAgIDFcbiAgICAgICAgICAgIC8vICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8vY2MuY2RkLk15QXBwLndhcm5pbmcoXCLlhYXlgLzlpLHmlZdcIik7XG4gICAgICAgIC8vICAgICAvLyBjYy5jZGQuTXlBcHAuYWxlcnQoXG4gICAgICAgIC8vICAgICAvLyAgICAgXCJTT1JSWVwiLFxuICAgICAgICAvLyAgICAgLy8gICAgIFRpcHNDb25zdC5SZWNoYXJnZV9GYWlsLFxuICAgICAgICAvLyAgICAgLy8gICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgLy8gICAgICAgICBzZWxmLnBheUZhaWxBbGxTdGF0ZSgpO1xuICAgICAgICAvLyAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICAvLyAgICAgMSxcbiAgICAgICAgLy8gICAgIC8vICAgICAyLFxuICAgICAgICAvLyAgICAgLy8gICAgIDFcbiAgICAgICAgLy8gICAgIC8vICk7XG4gICAgfVxuXG4gICAgc2VuZFBheURhdGEob2JqLCBkYXRhKSB7XG4gICAgICAgIGxldCBwYXlEYXRhO1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIHBheURhdGEgPSBBcHBDb25zdC5vcmRlcklkICsgXCI7XCIgKyBvYmogKyBcIjtcIiArIFwiZmFsc2VcIjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW9zUGF5XCIsIHBheURhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgcGF5RGF0YSA9IG9iaiArIFwiJlwiICsgXCJmYWxzZVwiO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBbmRyb2lkUGF5XCIsIHBheURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBIdHRwX0dldE9yZGVyO1xuICAgICAgICBsZXQgYm9keVBhcmFtczogYW55ID0ge1xuICAgICAgICAgICAgcHJvZHVjdElkOiBkYXRhLnByb2R1Y3RJZCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBvc3REYXRhKHVybCwgYm9keVBhcmFtcywgdGhpcy5nZXRQYXlEYXRhU3VjY2Vzc0NhbGxCYWNrKTtcbiAgICB9XG5cbiAgICBjaGVja05vQ2FubmVsUGF5KCkge1xuICAgICAgICB2YXIgYXJyO1xuICAgICAgICB2YXIgbmV3QXJyO1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgIGFyciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW9zUGF5XCIpO1xuICAgICAgICAgICAgbmV3QXJyID0gYXJyLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIGFyciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQW5kcm9pZFBheVwiKTtcbiAgICAgICAgICAgIG5ld0FyciA9IGFyci5zcGxpdChcIiZcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLmo4DmtYvmnKrlrozmiJDorqLljZUx77yaXCIsIEpTT04uc3RyaW5naWZ5KGFycikpO1xuICAgICAgICAvL2NjLmNkZC5NeUFwcC50aXAoXCLmqqLmuKzmnKrlrozmiJDoqILllq4s57m857qM6YCy6KGM5YWF5YC85pON5L2cXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1i+acquWujOaIkOiuouWNlTLvvJpcIiwgSlNPTi5zdHJpbmdpZnkobmV3QXJyKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5rWL5pyq5a6M5oiQ6K6i5Y2VM++8mlwiLCBuZXdBcnJbbmV3QXJyLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgaWYgKG5ld0FycltuZXdBcnIubGVuZ3RoIC0gMV0gPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gbmV3QXJyWzFdICsgXCI7XCIgKyBuZXdBcnJbMl0gKyBcIjtcIiArIG5ld0FyclswXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1i+acquWujOaIkOiuouWNle+8mlwiICsgb2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlvc1BheUJhY2sob2JqLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG5ld0FyclswXSArIFwiJlwiICsgbmV3QXJyWzFdICsgXCImXCIgKyBuZXdBcnJbMl0gKyBcIiZcIiArIG5ld0FyclszXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1i+acquWujOaIkOiuouWNle+8mlwiICsgb2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLkFuZHJvaWRHb29nbGVQYXkob2JqLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb3NQYXlCYWNrKG9iajogYW55LCB0eXBlID0gMCkge1xuICAgICAgICB2YXIgb2JyQXJyID0gb2JqLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJb3PmlK/ku5jmlbDmja7vvJpcIiArIG9ickFycik7XG4gICAgICAgIHZhciBjdXJPcmRlcklkID0gXCJcIjtcbiAgICAgICAgdHlwZSA9PSAwID8gKGN1ck9yZGVySWQgPSBBcHBDb25zdC5vcmRlcklkKSA6IChjdXJPcmRlcklkID0gb2JyQXJyWzJdKTtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICBvcmRlcklkOiBjdXJPcmRlcklkLFxuICAgICAgICAgICAgcGF5VHlwZTogXCJBcHBsZVwiLFxuICAgICAgICAgICAgcGF5bWVudDogb2JyQXJyWzBdLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiBcIlwiLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25JZDogb2JyQXJyWzFdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmRQYXlEYXRhKG9iaiwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy/osLfmrYzlronljZPmlK/ku5hcbiAgICBBbmRyb2lkR29vZ2xlUGF5KG9iaiwgdHlwZSA9IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmRyb2lk5pSv5LuY5pWw5o2u77yaXCIgKyBvYmopO1xuICAgICAgICB2YXIgb2JyQXJyID0gb2JqLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmRyb2lk5pSv5LuY5pWw5o2u77yaXCIgKyBvYnJBcnIpO1xuICAgICAgICB2YXIgY3VyT3JkZXJJZCA9IFwiXCI7XG4gICAgICAgIHR5cGUgPT0gMCA/IChjdXJPcmRlcklkID0gQXBwQ29uc3Qub3JkZXJJZCkgOiAoY3VyT3JkZXJJZCA9IG9ickFyclswXSk7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgb3JkZXJJZDogY3VyT3JkZXJJZCxcbiAgICAgICAgICAgIHBheVR5cGU6IFwiR29vZ2xlXCIsXG4gICAgICAgICAgICBwYXltZW50OiBvYnJBcnJbMV0sXG4gICAgICAgICAgICB0cmFuc2FjdGlvbklkOiBvYnJBcnJbMl0sXG4gICAgICAgICAgICBzaWduYXR1cmU6IG9ickFyclszXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZW5kUGF5RGF0YShvYmosIGRhdGEpO1xuICAgIH1cblxuICAgIC8v5qOA5rWL6K6i5Y2V5qCh6aqM5oOF5Ya1XG4gICAgY2hlY2tQYXlTdGF0ZSgpIHtcbiAgICAgICAgdmFyIGFycjtcbiAgICAgICAgdmFyIG5ld0FycjtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBhcnIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlvc1BheVwiKTtcbiAgICAgICAgICAgIG5ld0FyciA9IGFyci5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICBpZiAobmV3QXJyW25ld0Fyci5sZW5ndGggLSAxXSA9PSBcImZhbHNlXCIgJiYgbmV3QXJyWzBdID09IEFwcENvbnN0Lm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImlvc1BheVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIGFyciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQW5kcm9pZFBheVwiKTtcbiAgICAgICAgICAgIG5ld0FyciA9IGFyci5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBpZiAobmV3QXJyW25ld0Fyci5sZW5ndGggLSAxXSA9PSBcImZhbHNlXCIgJiYgbmV3QXJyWzBdID09IEFwcENvbnN0Lm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkFuZHJvaWRQYXlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLmo4DmtYvorqLljZXvvJpcIiwgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG4gICAgfVxufVxuIl19