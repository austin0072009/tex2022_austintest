import LobbyViewCtr from "../../GameHall/script/Lobby/LobbyViewCtr";
import { BaseFrameNative } from "../../Script/BaseFrameNative";
import { NotificationCenter } from "../Common/Managers/NotificationCenter";
import NotificationName from "../Common/Managers/NotificationName";
import { CommonCtr } from "./CommonCtr";
import { ReconnectManager } from "./ReconnectManager";
import { SceneManager } from "./SceneManager";
import ViewBase from "./ViewBase";
import { WebSocketManager } from "./WebSocketManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CommonView extends ViewBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "TipView";
    }

    createChildComponents() {
        super.createChildComponents();
        fgui.GRoot.inst.addChild(this.fguiComponent);
        this.fguiComponent.sortingOrder = 10000;
        CommonCtr.instance.view = this;
        this.fguiComponent.visible = false;
        this.moveAnimation = this.fguiComponent.getTransition("t1");
        WebSocketManager.getInstance.webSocket.setHeartBeatCallback(this.backLogin.bind(this));
        WebSocketManager.getInstance.webSocket.setTopAccountCallback(this.topAccountTip.bind(this));
        NotificationCenter.Instance.on(NotificationName.NetWork_Event.SOCKET_CONNECT_SUC_EVENT, this.reconnectGameCallBack.bind(this));
    }

    public ui_message: fgui.GTextField = null;
    public ui_message2: fgui.GTextField = null;
    public ui_btnOK: fgui.GButton = null;
    public ui_btnOKClick: fgui.GButton = null;
    public ui_btnClose: fgui.GButton = null;

    private _funOK: Function = null;
    private _funClose: Function = null;

    private ui_loading: fgui.GImage = null;

    OnLoadCompleted() {
        let scaleX = cc.winSize.width / this.fguiComponent.node.width;
        this.fguiComponent.node.setScale(scaleX, 1);
    }

    onDestroy() {
        super.onDestroy();
        this.moveAnimation.dispose();
        CommonCtr.instance.view = null;
        NotificationCenter.Instance.off(NotificationName.NetWork_Event.SOCKET_CONNECT_SUC_EVENT);
    }

    public ShowTipLabel(mes: string) {
        // this.messages.push(mes);
        // if (!this.isOpend) {
        //     this.tipMessage();
        // }
        console.log("---ShowTipLabel---", mes);
        this.setControllerProperty("type", 1);
        this.Show();

        this.ui_message2.visible = false;
        // 这里只能复制node 复制ui_message2在浏览器没问题 在真机模拟器上设置位置无效
        // 这里复制完node 用的是cocos的语法
        let node: cc.Node = cc.instantiate(this.ui_message2.node);
        node.parent = this.ui_message2.node.parent;
        node.position = this.ui_message2.node.position;
        node.getComponent(cc.Label).string = mes;
        node.active = true;
        cc.tween(node)
            .parallel(
                cc.tween().by(1.5, { position: cc.v3(0, 400, 0) }),
                cc.tween().to(1.5, { opacity: 128 })
            )
            .call(() => {
                node.removeFromParent(true);
            })
            .start()
    }

    private messages: string[] = [];
    private isOpend: boolean = false;
    private moveAnimation: fgui.Transition;
    private tipMessage() {
        let mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.Hide();
            return;
        }
        this.setControllerProperty("type", 1);
        this.Show();
        this.isOpend = true;
        this.ui_message2.text = mess;
        this.moveAnimation.play(() => {
            this.ui_message2.text = '';
            this.tipMessage();
        }, 1)
    }

    public ShowTip(mes: string, funok?: Function, funclose?: Function) {
        this.ui_btnOK.clearClick();
        this.ui_btnOKClick.clearClick();
        this.ui_btnClose.clearClick();

        this.setControllerProperty("type", 0)
        this.ui_message.text = mes;
        this._funOK = funok;
        this._funClose = funclose;

        if (this._funOK) {
            this.ui_btnOKClick.onClick(() => {
                this.Hide();
                this._funOK();
            });

            this.ui_btnOK.onClick(() => {
                this.Hide();
                this._funOK();
            });
        } else {
            this.ui_btnOK.onClick(() => {
                this.Hide();
            });
        }

        if (this._funClose) {
            this.ui_btnClose.onClick(() => {
                this.Hide();
                this._funClose();
            });

            this.ui_btnOK.visible = false;
            this.ui_btnOKClick.visible = true;
            this.ui_btnClose.visible = true;
        } else {
            this.ui_btnOK.visible = true;
            this.ui_btnOKClick.visible = false;
            this.ui_btnClose.visible = false;
        }
        this.Show();
    }

    // 显示菊花loading
    public showLoading() {
        this.setControllerProperty("type", 2);
        cc.tween(this.ui_loading.node)
            .by(1, { angle: -360 })
            .repeatForever()
            .start()
        this.Show();
    }

    public hideLoading() {
        this.Hide();
    }

    Hide() {
        this.ui_btnOK.clearClick();
        this.ui_btnOKClick.clearClick();
        this.ui_btnClose.clearClick();
        super.Hide();
    }

    //断线超时，返回登录页
    public backLogin(tipString: string = "与服务器断开连接，请重新登录！") {
        this.setControllerProperty("type", 0)
        if (BaseFrameNative.isInHall) {
            tipString = "与服务器断开连接，请重新连接！";
            // LobbyViewCtr.instance.view.gameEventShow();
            // return;
        }
        this.ui_btnOK.onClick(() => {
            this.Hide();
            if (BaseFrameNative.isInHall) {
                this.gameEventShow();
            } else {
                // SceneManager.Singleton.loadScene("gameHall", "login");
                tipString = "与服务器断开连接，请重新连接！";
                if (BaseFrameNative.nowGameView) {
                    BaseFrameNative.nowGameView.sendReconnect();
                }
            }
        });
        this.ui_message.text = tipString;

        this.ui_btnOK.visible = true;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    }

    public topAccountTip(tipString: string) {
        this.setControllerProperty("type", 0)
        this.ui_btnOK.onClick(() => {
            this.Hide();
            SceneManager.Singleton.loadScene("gameHall", "login");
        });
        this.ui_message.text = tipString;

        this.ui_btnOK.visible = true;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    }

    public gameEventShow() {
        ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this), false);
    }

    public connectSuccess() {
        console.log("--- connectSuccess ---");
    }

    public connectFail() {
        this.backLogin();
    }

    public gameEventHide() {
        console.log("--- gameEventHide ---");
        cc.game.pause();
    }

    // 游戏有更新
    public subGamesHaveUpdate(tipStr: string, callback: Function) {
        this.ShowTip(tipStr, () => {
            callback();
        });
        // callback();
    }

    public ShowTipTest(mes: string, funok?: Function, funclose?: Function) {
        this.setControllerProperty("type", 0)
        this.ui_message.text = mes;
        this._funOK = funok;
        this._funClose = funclose;

        this.ui_btnOK.visible = false;
        this.ui_btnOKClick.visible = false;
        this.ui_btnClose.visible = false;
        this.Show();
    }

    // 显示下载百分比
    public showDownloadPercent(per: string) {
        this.ShowTip(per, () => {
            this.Hide();
        });
    }

    // 显示下载百分比
    public showDownloadCompelete(tipString: string) {
        this.ShowTip(tipString, () => {
            this.Hide();
        });
    }

    public reconnectGameCallBack() {
        console.log("---reconnectGameCallBack---");
        SceneManager.Singleton.loadScene("gameHall", "login");
    }
}