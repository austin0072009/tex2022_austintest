/**
 * 请求timer
 */
import Message from './Message';
import { proto } from "./proto/MessageID.pb";
import { HotfixMessage } from "./proto/HotfixMessage.pb";
import { OuterMessage } from "./proto/OuterMessage.pb";
import { ReconnectManager } from '../../../../BaseFrame/ReconnectManager';

interface IRequestTimer {
    [key: string]: any;
}

interface IConnectOptions {
    clientType: string;
    clientVersion?: string;
    successCallback?: () => {};
}

declare const window: any;

export default class WebSocket {
    //* pinus
    private _pinus: any = window.pinus;
    //* 大门端口号
    private _gatePort: string = null;
    //* 大门主机
    private _gateHost: string = null;
    //* 是否重连
    private _reConnect: boolean = false;
    //* 连接次数
    private _connectCount: number = 0;
    //* 最多连接次数
    private _connectMaxCount: number = 3;
    //* 请求timer
    private _requestTimer: IRequestTimer = {};
    private _isInit: boolean = false;
    private reconnectCallback: Function;
    private reconnectByAccount: Function;
    public disconnectCallback: Function;
    public topAccountCallback: Function;
    public _isTopAccount: boolean = false;
    private _isManualBreak: boolean = false; // 是否是手动断开
    private _reconnectCount: number = 0;
    public _refreshCallback: Function = null; // 掉帧之后请求最新数据

    protected _keepAliveTimer: any = null;                                  // 心跳定时器
    protected _receiveMsgTimer: any = null;                                 // 接收数据定时器
    protected _reconnectTimer: any = null;                                  // 重连定时器
    protected _heartTime: number = 10000;                                   // 心跳间隔
    protected _receiveTime: number = 20000;                               // 多久没收到数据断开

    constructor() {
        // this.init();
    }
    /**
     * 初始化pinus
     */
    private init(cb: string = "init") {
        console.log("websocket init:" + cb);
        this._pinus.off("heartbeat timeout");
        this._pinus.off("io-error");
        this._pinus.off("close");
        this._pinus.off("error");
        this._pinus.on("heartbeat timeout", (event) => { this.onHeartBet(event) });
        this._pinus.on("io-error", (event) => { this.onError(event) });
        this._pinus.on("close", (event) => { this.onClose(event) });
        this._pinus.on("error", (event) => { console.log(event); });
        this.createConnect();
    }

    // onHeartBet
    protected onHeartBet(event) {
        console.log("heartbeat timeout !");
    }

    // onError
    protected onError(event) {
        console.log("websocket onError !");
    }

    // onClose
    protected onClose(event) {
        console.log("websocket onClose !", event);
        if (this._pinus.WebSocket != event.currentTarget) {
            console.log("this._pinus.WebSocket != event.currentTarget");
            return;
        } else {
            console.log("this._pinus.WebSocket == event.currentTarget");
        }
        this._isInit = false;
        this.clearTimer(); // 清除心跳回调
        // 顶号或者主动断开
        if (this._isTopAccount || this._isManualBreak) {
            return;
        }
        this._reconnectCount += 1;
        console.log("this._reconnectCount == ", this._reconnectCount);
        if (this._reconnectCount >= this._connectMaxCount) {
            this._reconnectCount = 0;
            if (this.disconnectCallback) {
                this.disconnectCallback();
                this.disconnect();
            }
        } else {
            // this.disconnect();
            // ReconnectManager.getInstance.reconnect(() => {
            //     console.log("重连成功！");
            // }, () => {
            //     if (this.disconnectCallback) {
            //         this.disconnectCallback();
            //         this.disconnect();
            //     }
            // }, false)
            this._reconnectCount = 0;
            if (this.disconnectCallback) {
                this.disconnectCallback();
                this.disconnect();
            }
        }
    }

    public createConnect() {
        return new Promise<void>((resolve, reject) => {
            let params = {
                host: this._gateHost,
                port: this._gatePort,
                log: true,
            }
            this._pinus.init(params, (res) => {
                cc.log("初始化成功，建立连接");
                this._isTopAccount = false;
                this._isManualBreak = false;
                this._isInit = true;
                this._reconnectCount = 0;
                resolve();
                this.connect();
            }, this.encode.bind(this), this.decode.bind(this))
        });
    }

    private websocketRequest(
        route: any,
        msg: any,
        successCallback: Function,
        failCallback?: Function,
        timeOutCallback?: Function,
        timeOutDelay: number = 8000
    ) {
        let timeOutIndex: number = null;
        let isReply: boolean = false;
        let timeout = () => {
            if (!!isReply) return;
            if (!!timeOutCallback) timeOutCallback();
            console.error("request timeout:", route, msg);
        };

        //* clearTimeout
        let clear = () => {
            if (timeOutIndex != null) {
                this.removeRequestTimeout(timeOutIndex);
                timeOutIndex = null;
            }
        };
        this._pinus.request(route, msg, (ret: any) => {
            clear();
            isReply = true;
            if (!!successCallback) {
                if (ret && ret.RpcId > 0) {
                    successCallback(ret);
                } else {
                    //console.error(`路由地址：${route}, 错误码：${ret.code}, 错误信息：${ret.message}`);
                    if (failCallback) {
                        failCallback();
                    }
                }
            }
        });

        //* 有超时 回调才添加超时处理
        if (timeOutCallback) {
            timeOutDelay = timeOutDelay || 10000;
            timeOutIndex = this.addRequestTimeout(timeout, timeOutDelay);
        }
    }

    /**
     * 发起pinus请求
     * @param route 请求路由
     * @param msg 请求信息
     * @param successCallback 成功回调
     * @param timeOutCallback 超时回调
     * @param timeOutDelay 超时延时时间
     */
    public async request(
        route: any,
        msg: any,
        successCallback: Function,
        failCallback?: Function,
        timeOutCallback?: Function,
        timeOutDelay: number = 8000
    ) {
        if (!this._isInit) {
            // await this.init("await");
            // this.websocketRequest(route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay);
        } else {
            this.websocketRequest(route, msg, successCallback, failCallback, timeOutCallback, timeOutDelay);
        }
    }

    /**
     * 清除超时
     * @param timeOutIndex
     */
    private removeRequestTimeout(timeOutIndex: number) {
        clearTimeout(timeOutIndex);
        delete this._requestTimer[timeOutIndex];
    }

    /**
     * 添加超时
     * @param timeoutCallback
     * @param timeDelay
     */
    private addRequestTimeout(timeoutCallback: Function, timeDelay: number) {
        let timeOutIndex: number = setTimeout(timeoutCallback, timeDelay);
        this._requestTimer[timeOutIndex] = timeOutIndex;
        return timeOutIndex;
    }

    /**
     * 设置大门连接
     * @param host
     * @param port
     */
    private setGateConnection(host: string, port: string) {
        this._gatePort = port;
        this._gateHost = host;
    }

    /**
     * 重新连接服务器、切换服务器端口
     * @param params 新的host和port、回调
     */
    public reconnect(params?: any) {
        if (params) {
            this._gatePort = params.port;
            this._gateHost = params.host;
            this.reconnectCallback = params.callback;
        } else {
            this.reconnectCallback = null;
        }
        this.init();
    }

    //获取当前socket状态
    public getConnectState() {
        return this._isInit;
    }

    /**
     * 建立连接
     */
    private connect() {
        this.connectGate(this._gateHost, this._gatePort);
    }

    /**
     * 断开连接
     */
    public disconnect() {
        console.log("断开连接 disconnect");
        this._isManualBreak = true;
        this._isInit = false;
        this._pinus.disconnect();
        this.clearTimer();
    }

    /**
     * 绑定各类事件，心跳超时、返回错误等事件
     * @param host
     * @param port
     * @param options
     */
    private connectGate(host: string, port: string) {
        if (!host || !port) {
            console.error("主机地址或端口不能为空");
            return;
        }
        if (this.reconnectCallback) {
            this.reconnectCallback();
            this.reconnectCallback = null;
        }
        this.resetHearbeatTimer();
    }

    public setReconnectByAccount(func: Function) {
        console.log("setReconnectByAccount");
        this.reconnectByAccount = func;
    }

    public setHeartBeatCallback(func: Function) {
        this.disconnectCallback = func;
    }

    public setTopAccountCallback(func: Function) {
        this.topAccountCallback = func;
    }

    // 设置延迟游戏刷新回调
    public setRefreshCallback(func: Function) {
        this._refreshCallback = func;
    }

    public setActorMessageCallback(func: Function) {
        this._pinus.setActorMessageCallback(func);
    }

    public encode(msgId: number, msg: any): ArrayBuffer {
        let cls = msg.constructor;
        let buf = cls.encode(msg).finish();
        return Message.toBuffer(msgId, buf);
    }
    public decode(data: ArrayBuffer): any {
        let msg = Message.fromBuffer(data);
        let msgName = proto.MsgID[msg.msgid];

        let dsseee = HotfixMessage[msgName]
        if (dsseee) {
            return HotfixMessage[msgName].decode(msg.data);
        }
        dsseee = OuterMessage[msgName]
        if (dsseee) {
            return OuterMessage[msgName].decode(msg.data);
        }
        return null;
    }


    /********************** 心跳、超时相关处理 *********************/
    public resetReceiveMsgTimer() {
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
        }

        this._receiveMsgTimer = setTimeout(() => {
            console.warn("NetNode recvieMsgTimer close socket!");
            this.disconnect();
            if (this.disconnectCallback) {
                this.disconnectCallback();
            }
        }, this._receiveTime);
    }

    public resetHearbeatTimer() {
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
        }

        this._keepAliveTimer = setTimeout(() => {
            console.log("NetNode keepAliveTimer send Hearbeat");
            let heartbeat = OuterMessage.C2G_Heartbeat.create();
            this.request(proto.MsgID.C2G_Heartbeat, heartbeat, this.Heartbeat_Back.bind(this));
        }, this._heartTime);
    }

    public clearTimer() {
        if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
        }
        if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
        }
        if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
        }
    }

    //心跳包回复
    public Heartbeat_Back() {
        console.log("Heartbeat_Back");
        // 接受到数据，重新定时收数据计时器
        this.resetReceiveMsgTimer();
        // 重置心跳包发送器
        this.resetHearbeatTimer();
    }
}
