import { AppConst } from "./AppConst";
import HttpApi, { Http_GetOrder } from "./HttpApi";

/*
 * @Description:
 * @Author: 张菊
 * @Date: 2020-05-14 14:21:05
 * @LastEditTime: 2020-05-14 18:14:47
 * @LastEditors: 张菊
 */
export class MgrOrder {
    private _getDataInfo = null;
    private _callbackSuccess: Function;
    private _callbackFail: Function;
    protected static instance: MgrOrder;
    public static getInstance(): MgrOrder {
        if (!this.instance) {
            this.instance = new MgrOrder();
        }
        return this.instance;
    }
    //服务器已请求订单
    createdOrderToJava(data: any) {
        if (data.orderId) {
            AppConst.orderId = data.orderId.toString();
            if (AppConst.platform == "iOS") {
                console.log("jhl jsToIos:", data);
                jsb.reflection.callStaticMethod("AppController", "Pay:chargeData:", data.orderId, data.productCode);
            } else if ((AppConst.platform = "Android")) {
                //  let productCode = Tools.changeToLowercase(data.productCode);
                //安卓支付
                console.log("jhl jsToAndroid:", data);
                jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "GooglePay",
                    "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
                    data.orderId,
                    data.productCode
                );
            }
            return true;
        } else {
            return false;
        }
    }
    async postData(url: string, bodyParams: any, callback: Function): Promise<any> {
        let result: any = await HttpApi.http.post(HttpApi.server + url, bodyParams, {
            headers: {
                Authorization: AppConst.accessToken,
            },
        });
        console.log("postDatapostData:", result);
        if (result.isSuccessful) {
            this._getDataInfo = result.data;
            callback();
        }
    }
    getOrderSuccessCallBack(): void {
        AppConst.orderId = "";
        //cc.cdd.MyApp.tip("創建訂單成功！");
        let self = MgrOrder.getInstance();
        AppConst.orderId = self._getDataInfo.orderId;
        if (self._getDataInfo.productCode) {
            if (AppConst.platform == "iOS") {
                console.log("jhl jsToIos:", self._getDataInfo);
                jsb.reflection.callStaticMethod(
                    "AppController",
                    "Pay:chargeData:",
                    self._getDataInfo.orderId,
                    self._getDataInfo.productCode
                );
            } else if (AppConst.platform == "Android") {
                //   let productCode = Tools.changeToLowercase(ret.data.productCode);
                //安卓支付
                console.log("jhl jsToAndroid:", self._getDataInfo);
                jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "GooglePay",
                    "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
                    self._getDataInfo.orderId,
                    self._getDataInfo.productCode
                );
            }
        }
    }

    sendOrderToJava(data: any, callbackSuccess: Function, callbackFail) {
        this._callbackSuccess = callbackSuccess;
        this._callbackFail = callbackFail;
        //  cc.cdd.MgrUser.orderData = data;
        if (this.createdOrderToJava(data)) return;
        var self = this;
        console.log(" sendOrderToJava___________", data);
        let url: string = Http_GetOrder;
        let bodyParams: any = {
            productId: data.productId,
            quantity: data.quantity,
        };
        if (cc.sys.os == cc.sys.OS_IOS) {
            localStorage.getItem("iosPay") != undefined &&
            localStorage.getItem("iosPay") != null &&
            AppConst.orderId != ""
                ? this.checkNoCannelPay()
                : this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        } else if (cc.sys.os == cc.sys.OS_ANDROID) {
            localStorage.getItem("AndroidPay") != undefined &&
            localStorage.getItem("AndroidPay") != null &&
            AppConst.orderId != ""
                ? this.checkNoCannelPay()
                : this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        } else {
            this.postData(url, bodyParams, this.getOrderSuccessCallBack);
        }
    }
    getPayDataSuccessCallBack(): void {
        let self = MgrOrder.getInstance();
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
        } else {
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
    }

    sendPayData(obj, data) {
        let payData;
        if (cc.sys.os == cc.sys.OS_IOS) {
            payData = AppConst.orderId + ";" + obj + ";" + "false";
            localStorage.setItem("iosPay", payData);
        } else if (cc.sys.os == cc.sys.OS_ANDROID) {
            payData = obj + "&" + "false";
            localStorage.setItem("AndroidPay", payData);
        }
        let url = Http_GetOrder;
        let bodyParams: any = {
            productId: data.productId,
            quantity: data.quantity,
        };
        this.postData(url, bodyParams, this.getPayDataSuccessCallBack);
    }

    checkNoCannelPay() {
        var arr;
        var newArr;
        if (cc.sys.os == cc.sys.OS_IOS) {
            arr = localStorage.getItem("iosPay");
            newArr = arr.split(";");
        } else if (cc.sys.os == cc.sys.OS_ANDROID) {
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
            } else if (cc.sys.os == cc.sys.OS_ANDROID) {
                var obj = newArr[0] + "&" + newArr[1] + "&" + newArr[2] + "&" + newArr[3];
                console.log("检测未完成订单：" + obj);
                this.AndroidGooglePay(obj, 1);
            }
        }
    }
    iosPayBack(obj: any, type = 0) {
        var obrArr = obj.split(";");
        console.log("Ios支付数据：" + obrArr);
        var curOrderId = "";
        type == 0 ? (curOrderId = AppConst.orderId) : (curOrderId = obrArr[2]);
        var data = {
            orderId: curOrderId,
            payType: "Apple",
            payment: obrArr[0],
            signature: "",
            transactionId: obrArr[1],
        };
        this.sendPayData(obj, data);
    }

    //谷歌安卓支付
    AndroidGooglePay(obj, type = 0) {
        console.log("Android支付数据：" + obj);
        var obrArr = obj.split("&");
        console.log("Android支付数据：" + obrArr);
        var curOrderId = "";
        type == 0 ? (curOrderId = AppConst.orderId) : (curOrderId = obrArr[0]);
        var data = {
            orderId: curOrderId,
            payType: "Google",
            payment: obrArr[1],
            transactionId: obrArr[2],
            signature: obrArr[3],
        };
        this.sendPayData(obj, data);
    }

    //检测订单校验情况
    checkPayState() {
        var arr;
        var newArr;
        if (cc.sys.os == cc.sys.OS_IOS) {
            arr = localStorage.getItem("iosPay");
            newArr = arr.split(";");
            if (newArr[newArr.length - 1] == "false" && newArr[0] == AppConst.orderId) {
                localStorage.removeItem("iosPay");
            }
        } else if (cc.sys.os == cc.sys.OS_ANDROID) {
            arr = localStorage.getItem("AndroidPay");
            newArr = arr.split("&");
            if (newArr[newArr.length - 1] == "false" && newArr[0] == AppConst.orderId) {
                localStorage.removeItem("AndroidPay");
            }
        }
        console.log("检测订单：", JSON.stringify(arr));
    }
}
