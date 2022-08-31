import { NotificationCenter } from "../Common/Managers/NotificationCenter";
import NotificationName from "../Common/Managers/NotificationName";
import { OuterMessage } from '../modules/@mogafa/utils/lib/proto/OuterMessage.pb';
import { proto } from "../modules/@mogafa/utils/lib/proto/MessageID.pb";
import { HotfixMessage } from "../modules/@mogafa/utils/lib/proto/HotfixMessage.pb";
import WebSocketApi from "../modules/@slotsmaster/ui-common/lib/WebSocketApi";
import { AppConst } from "../modules/@slotsmaster/ui-common/lib/AppConst";
import * as ClientMessage from "../modules/@mogafa/utils/lib/ClientMessage";
import WebSocket from "../modules/@mogafa/utils/lib/WebSocket";
import { CommonCtr } from "./CommonCtr";
import { sc_login } from "../modules/@mogafa/utils/lib/ClientMessage";
import { BaseFrameNative } from "../../Script/BaseFrameNative";
import { MgrNative } from "../MgrNative";

export class WebSocketManager {
    private static instance: WebSocketManager; //类型为这个类
    private _recieveCallBKs: Function[] = [];
    private pushMesagesMap: Map<string, Function>;
    private _port: string;
    private _host: string;
    public EnterRoomCallback: Function;
    public CSLoginCallback: Function;

    private pid: string;
    private pwd: string;
    private constructor() { }

    private msgID: number = -999; // 消息ID
    public offlineCallback: Function = null; // 踢下线的回调

    public timer: NodeJS.Timeout = null;
    public time: number = 20;
    public TimeOutList: string[] = [];

    //单例
    static get getInstance() {
        if (!this.instance) {
            this.instance = new WebSocketManager();
            this.instance.Init();
        }
        return this.instance;
    }

    public get webSocket(): WebSocket {
        return WebSocketApi.socket;
    }


    public Init() {
        this.pushMesagesMap = new Map<string, Function>();
        //推送消息
        this.webSocket.setActorMessageCallback((msg) => {
            let data = null
            if (msg.Info && msg.Info.length > 0) {
                data = JSON.parse(msg.Info[0].Message)
                console.warn("fn:" + data.fn + "->" + msg.Info[0].Message);
                // console.log("%cfn:" + data.fn + "->" + msg.Info[0].Message, 'color:yellow');
                if (data.result == "-444444") {
                    console.log("账号在其他地方登录，请退出重新登录！");
                    WebSocketApi.socket._isTopAccount = true;
                    let remindStr = "账号在其他地方登录，请退出重新登录！";
                    if (WebSocketApi.socket.topAccountCallback) {
                        WebSocketApi.socket.topAccountCallback(remindStr);
                    }
                    // 停止心跳
                    WebSocketApi.socket.clearTimer();
                    // 清空回调 断开连接
                    this.DisConnect();
                    return;
                }
                this.isContinuousInID(data._msgid);
                if (this.pushMesagesMap.has(data.fn)) {
                    this.pushMesagesMap.get(data.fn)(data);
                }
            }
        });
    }

    public GateServer(value: string) {
        WebSocketApi.gateServer = value;
    }

    public GatePort(value: number) {
        WebSocketApi.gatePort = value;
    }

    public Reconnect() {
        this.CSLoginCallback = null;
        let params =
        {
            host: WebSocketApi.gateServer,
            port: WebSocketApi.gatePort,
            callback: this.reconnectCallback.bind(this)
        };
        WebSocketApi.socket.reconnect(params);
    }

    public DisConnect() {
        console.log("主动断开socket连接 DisConnect !");
        WebSocketApi.socket.disconnect();
        this._recieveCallBKs = [];
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    public reconnectCallback() {
        NotificationCenter.Instance.emit(NotificationName.NetWork_Event.SOCKET_CONNECT_SUC_EVENT);
    }

    //注册推送消息
    public RegistNotify(msgFn: string, callbak: Function) {
        if (this.pushMesagesMap == null) {
            return;
        }
        this.pushMesagesMap.set(msgFn, callbak);
    }

    //移除推送消息
    public UnRegistNotify(msgFn: string) {
        if (this.pushMesagesMap == null || this.pushMesagesMap.size == 0) {
            return;
        }
        if (this.pushMesagesMap.has(msgFn)) {
            this.pushMesagesMap.delete(msgFn);
        }
    }

    public Send(json: any, callback: Function): void {
        let req = OuterMessage.C2SS_ActorRPCRequest.create();
        req.ActorId = AppConst.Unitid;
        req.request = json;
        this._recieveCallBKs.push(callback);
        this.webSocket.request(
            proto.MsgID.C2SS_ActorRPCRequest,
            req,
            this.OnenterActorRPCRequest.bind(this),
            this.RecieveFailBack.bind(this)
        );
    }
    public SendJSON(pkg: any, callback: Function): void {
        let req = OuterMessage.C2SS_ActorRPCRequest.create();
        req.ActorId = AppConst.Unitid;
        req.request = JSON.stringify(pkg);
        this._recieveCallBKs.push(callback);
        this.webSocket.request(
            proto.MsgID.C2SS_ActorRPCRequest,
            req,
            this.OnenterActorRPCRequest.bind(this),
            this.RecieveFailBack.bind(this)
        );
    }

    public SendJSONTimeOut(pkg: any, callback: Function) {
        // 显示转圈
        CommonCtr.instance.view.showLoading();
        this.SendJSON(pkg, callback);
        let fnList = pkg.fn.split("_");
        this.TimeOutList.push(fnList[1]);
        this.timer = setTimeout(() => {
            CommonCtr.instance.view.hideLoading();
            CommonCtr.instance.view.ShowTipLabel("连接服务器超时，请重试！");
        }, this.time * 1000);
    }

    private OnenterActorRPCRequest(ret) {
        // 接受到数据，重新定时收数据计时器
        // WebSocketApi.socket.resetReceiveMsgTimer();
        // WebSocketApi.socket.resetHearbeatTimer();  // 重置心跳包发送器
        if (ret && ret.route == proto.MsgID.C2SS_ActorRPCRequest) {
            if (ret.Message) {
                let msgResult: any = JSON.parse(ret.Message);
                if (this.TimeOutList.length > 0) {
                    let fnList = msgResult.fn.split("_");
                    let fnNameList: string[] = [...this.TimeOutList];
                    for (let index = 0; index < this.TimeOutList.length; index++) {
                        let fnName = this.TimeOutList[index];
                        if (fnName == fnList[1]) {
                            fnNameList.splice(index, 1);
                            break;
                        }
                    }
                    this.TimeOutList = [...fnNameList];
                    if (this.TimeOutList.length <= 0) {
                        if (CommonCtr.instance.view) CommonCtr.instance.view.hideLoading();
                        if (this.timer) {
                            clearTimeout(this.timer);
                            this.timer = null;
                        }
                    }
                }
                var callback = this._recieveCallBKs.shift();
                if (callback != null) callback(msgResult);
            }
        }
    }

    private RecieveFailBack() {

    }

    // 判断消息ID是否连续
    private isContinuousInID(msgID: number) {
        if (this.msgID >= 0 && msgID - 1 != this.msgID) {
            // 有掉包，需要刷新
            let callback = this.webSocket._refreshCallback;
            if (callback) callback();
        }
        this.msgID = msgID;
    }

    LoginByPIDPWD(pid: string, pwd: string): void {
        this.pid = pid;
        this.pwd = pwd;
        this.Login_C2R_Login();
    }
    //#region test code

    Login_C2R_Login(): void {
        MgrNative.getInstance().getDeviceGPS();
        this._host = BaseFrameNative.serverlistItem.url;
        this._port = BaseFrameNative.serverlistItem.port;
        WebSocketApi.gateServer = this._host;
        // this._host = "129.204.109.218";
        // this._host = "106.13.207.246";
        // this._port = "10002";
        // this._host = "106.13.222.130"
        console.log(" LoginRoom host : " + this._host + " this._port:" + this._port);
        if (this._port && this._host) {
            let reqlogin = HotfixMessage.C2R_Login.create();
            reqlogin.Account = this.pid;
            reqlogin.RpcId = 1;
            reqlogin.Password = this.pwd;
            let params = {
                host: this._host,
                port: this._port,
                callback: () => {
                    WebSocketApi.socket.request(proto.MsgID.C2R_Login, reqlogin, this.Login_C2R_Login_Back.bind(this));
                },
            };
            WebSocketApi.socket.reconnect(params);
        }
    }

    public Login_C2R_Login_Back(ret) {
        console.log("---Login_C2R_Login_Back---", ret);
        if (ret.Error && ret.Error == "200102") {
            if (this.CSLoginCallback) {
                this.CSLoginCallback(null);
            }
            CommonCtr.instance.view.ShowTipLabel("登录失败，账号或密码错误");
            return;
        }
        this.DisConnect();
        setTimeout(() => {
            this.LoginGate(ret);
        }, 300);
    }

    public LoginGate(msg): void {
        let str = msg.Address.split(":", 2);
        this._host = str[0];
        this._port = str[1];
        if (this._port && this._host) {
            let reqlogin = HotfixMessage.C2G_LoginGate.create();
            reqlogin.userid = msg.userid;
            reqlogin.Key = msg.Key;
            let params = {
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
        this.Send(json_login, this.sc_login.bind(this));
    }


    public sc_login(data: sc_login) {
        console.log("---sc_login---", data);
        if (data.result == 1) {
            AppConst.Account = data.user.userid;
            AppConst.gameId = data.gameid;
            AppConst.cidx = data.cidx;
            AppConst.mPlayerModel = data.user;

            if (this.CSLoginCallback != null) {
                this.CSLoginCallback(data);
                this.CSLoginCallback = null;
                return;
            }
        }
        else if (data.result == -1005) {   //go to creator 1005
            if (this.CSLoginCallback != null) {
                this.CSLoginCallback(data);
                this.CSLoginCallback = null;
                return;
            }
        }
        else {
            CommonCtr.instance.ShowTipLabel("登录失败 error code:" + data.result);
        }
    }

    public clearTimer() {
        this.webSocket.clearTimer();
    }

    //#endregion
}