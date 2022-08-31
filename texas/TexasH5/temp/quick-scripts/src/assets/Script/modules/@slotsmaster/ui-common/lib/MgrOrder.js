"use strict";
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