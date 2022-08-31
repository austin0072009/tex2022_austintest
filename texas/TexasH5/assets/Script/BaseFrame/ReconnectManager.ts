import { WebSocketManager } from "../../Script/BaseFrame/WebSocketManager";
import { BaseFrameNative } from "../../Script/BaseFrameNative";
import { HotfixMessage } from "../../Script/modules/@mogafa/utils/lib/proto/HotfixMessage.pb";
import { proto } from "../../Script/modules/@mogafa/utils/lib/proto/MessageID.pb";
import { OuterMessage } from "../../Script/modules/@mogafa/utils/lib/proto/OuterMessage.pb";
import WebSocketApi from "../../Script/modules/@slotsmaster/ui-common/lib/WebSocketApi";
import * as ClientMessage from "../../Script/modules/@mogafa/utils/lib/ClientMessage";
import { AppConst } from "../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { sc_login } from "../../Script/modules/@mogafa/utils/lib/ClientMessage";
import { SceneManager } from "../../Script/BaseFrame/SceneManager";
import { ToolsEx } from "../../Script/Common/ToolsEx";

export class ReconnectManager {
    private static instance: ReconnectManager;

    static get getInstance() {
        if (!this.instance) {
            this.instance = new ReconnectManager();
        }
        return this.instance;
    }

    public _host: string = "";
    public _port: string = "";

    public callBackOK: Function = null;
    public callBackFail: Function = null;
    public time: number = 15;
    public timer: NodeJS.Timeout = null;
    public isNeedBackHall: boolean = true;

    // 重连
    public reconnect(callbackok: Function, callbackfail: Function, isNeedBackHall: boolean = true) {
        this.callBackOK = callbackok;
        this.callBackFail = callbackfail;
        this.isNeedBackHall = isNeedBackHall;
        this.startReconnect();
    }

    public startReconnect() {
        console.log("this.getNetWorkStatus() == ", this.getNetWorkStatus());
        if (this.getNetWorkStatus()) {
            let websocketstatus: boolean = WebSocketApi.socket.getConnectState();
            console.log("websocketstatus == ", websocketstatus);
            if (websocketstatus) {
                if (this.callBackOK) {
                    this.callBackOK();
                }
            } else {
                this.connectLogin();
            }
        } else {
            // CommonCtr.instance.view.ShowTip("请检查设备网络是否打开", () => {
            //     this.reconnect(callbackok);
            // });
            if (this.callBackFail) {
                this.callBackFail("请检查设备网络是否打开");
            }
        }
    }

    public connectLogin() {
        this.timer = setTimeout(() => {
            if (this.callBackFail) {
                this.callBackFail("连接服务器超时，请重试！");
            }
        }, this.time * 1000);
        this.login();
    }

    // 发起登录
    public login() {
        this._host = BaseFrameNative.serverlistItem.url;
        this._port = BaseFrameNative.serverlistItem.port;
        let pid = cc.sys.localStorage.getItem("login_pid");
        let pwd = cc.sys.localStorage.getItem("login_pwd");
        console.log("this._host === ", this._host);
        console.log("this._port === ", this._port);
        console.log("pid === ", pid);
        console.log("pwd === ", pwd);
        if (this._host && this._port && pid && pwd) {
            let reqlogin = HotfixMessage.C2R_Login.create();
            reqlogin.Account = pid;
            reqlogin.RpcId = 1;
            reqlogin.Password = ToolsEx.Singleton.EncryptionPWD(pwd);
            let params = {
                host: this._host,
                port: this._port,
                callback: () => {
                    WebSocketApi.socket.request(
                        proto.MsgID.C2R_Login,
                        reqlogin,
                        this.Login_C2R_Login_Back.bind(this));
                },
            };
            WebSocketApi.socket.reconnect(params);
        }
    }

    public Login_C2R_Login_Back(ret) {
        console.log("---ReconnectManager Login_C2R_Login_Back---", ret);
        WebSocketManager.getInstance.DisConnect();
        if (ret.Error && ret.Error == "200102") {
            if (this.callBackFail) {
                this.callBackFail("连接失败，账号或密码错误");
            }
            return;
        }
        setTimeout(() => {
            this.LoginGate(ret);
        }, 200);
    }

    public LoginGate(msg) {
        let str = msg.Address.split(":", 2);
        this._host = str[0];
        this._port = str[1];
        if (this._port && this._host) {
            let reqlogin = HotfixMessage.C2G_LoginGate.create();
            reqlogin.userid = msg.userid;
            reqlogin.Key = msg.Key;
            let params =
            {
                host: this._host,
                port: this._port,
                callback: () => {
                    WebSocketApi.socket.request(proto.MsgID.C2G_LoginGate, reqlogin, this.LoginGate_back.bind(this));
                },
            };
            WebSocketApi.socket.reconnect(params);
        }
    }

    public LoginGate_back(): void {
        if (this._port && this._host) {
            let reqlogin = OuterMessage.C2G_EnterMap.create();
            WebSocketApi.socket.request(proto.MsgID.C2G_EnterMap, reqlogin, this.EnterMap_Back.bind(this),);
        }
    }

    public EnterMap_Back(ret) {
        let login = new ClientMessage.cs_login();
        login.fn = "cs_login";
        login.accountId = AppConst.Account;
        let json_login = JSON.stringify(login);
        WebSocketManager.getInstance.Send(json_login, this.sc_login.bind(this));
    }

    public sc_login(data: sc_login) {
        console.log("---sc_login---", data);
        if (data.result == 1) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            AppConst.Account = data.user.userid;
            AppConst.gameId = data.gameid;
            AppConst.cidx = data.cidx;
            AppConst.mPlayerModel = data.user;
            if (data.user.state > 0 || !this.isNeedBackHall) {
                AppConst.mPlayerModel.state = 0;
                // 需要重连 调用重连回调
                if (this.callBackOK) {
                    this.callBackOK();
                    this.callBackOK = null;
                }
            } else {
                // 不需要重连返回大厅
                if (this.isNeedBackHall) {
                    SceneManager.Singleton.loadScene("gameHall", "lobby");
                }
            }
        }
    }

    // 获取网络连接状态 false无网  true有网
    public getNetWorkStatus(): boolean {
        let net = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取网络状态 */
            let methodSignature = "()Ljava/lang/String;";
            let method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
        } else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        let netArr = net.split("_");
        if (netArr[0] == "-1") {
            return false;
        }
        return true;
    }
}