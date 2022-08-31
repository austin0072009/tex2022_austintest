import { MgrNative } from "../../../Script/MgrNative";
import { AppConst } from "../../modules/@slotsmaster/ui-common/lib/AppConst";
import HttpApi, { Http_EnterHall } from "../../modules/@slotsmaster/ui-common/lib/HttpApi";
const IOS_API = "AppController";

export class MgrLogin {
    protected static instance: MgrLogin;
    public static getInstance(): MgrLogin {
        if (!this.instance) {
            this.instance = new MgrLogin();
            window.loginInsatnce = this.instance;
        }
        return this.instance;
    }
    private _callBackError: Function;
    private _callBackCancelLoad: Function;

    /**
     * 游客设备登录
     */
    deviceLogin(callBackError: Function, callBackCancelLoad: Function) {
        this._callBackError = callBackError;
        this._callBackCancelLoad = callBackCancelLoad;
        var data = {
            type: "Device",
            appId: "Windows",
            userId: MgrNative.getInstance().getDeviceUUID(),
            name: "guest",
            headImageUrl: "",
            email: "",
            mobile: "",
            userId2: "",
            accessToken: "",
            deviceUuid: MgrNative.getInstance().getDeviceUUID(),
            platform: "Windows",
        };
        this.login(data);
    }

    /**
     * 苹果登录
     */
    appleLogin() {
        jsb.reflection.callStaticMethod(IOS_API, "singInAppleLogin:title:", "threePartyLogin", "message");
    }

    /**
     * 苹果内置登录返回数据
     */
    appleLoginBackData(object: any) {
        let obrArr = object.split(";");

    }

    //登录
    login(data: object) {

    }

    //Ios内置登录状态
    singInAppleLoginState(state) {

    }

    enterGameHall() {
        HttpApi.http
            .get(HttpApi.server + Http_EnterHall, {})
            .then(
                (res: any) => {
                    if (res.code == 200) {
                        this._callBackCancelLoad();
                        console.log("enterGameHall::", res.data);
                        AppConst.hallData = res.data;
                        AppConst.gameList = [];
                        AppConst.gameList = res.data.games;
                        AppConst.userMsg = res.data.user;
                        cc.director.loadScene("Hall");
                    }
                },
                (err) => {
                    this._callBackError();
                }
            )
            .catch((err) => {
                this._callBackError();
            });
    }
}
