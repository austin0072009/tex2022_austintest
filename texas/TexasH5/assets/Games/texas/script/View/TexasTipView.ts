import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { TexasLanguage } from "../Model/TexasLanguage";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TexasTipView extends ViewBase {
    public ui_tipContent: fgui.GTextField = null;
    public ui_tipOK: fgui.GButton = null;
    public ui_tipOKClick: fgui.GButton = null;
    public ui_tipClose: fgui.GButton = null;
    public ui_tipOKClickText: fgui.GTextField = null;
    public ui_tipOKText: fgui.GTextField = null;
    public ui_tipCloseText: fgui.GTextField = null;
    public ui_tipLabel: fgui.GTextField = null;

    private _funOK: Function = null;
    private _funClose: Function = null;
    private okStartX = 0;

    private onLoadEnd = false;
    private messages: string[] = [];
    OnLoadCompleted() {
        this.onLoadEnd = true;

        if (this.mystart) this.MyStartEx();
    }

    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }


    private MyStartEx() {
        if (this.ui_tipContent == null) super.AutoSetGoProperty();
        this.okStartX = this.ui_tipOK.x;
        this.messages = [];
        // this.moveAnimation = this.fguiComponent.getTransition("t0");
        // this.moveAnimation.stop();
        this.Hide();
    }

    AutoSetGoProperty() { }


    public ShowTip(mes: string, funok?: Function, funclose?: Function, okText = TexasLanguage.getLanguageById(1432), closeText = TexasLanguage.getLanguageById(1393)) {
        this.setControllerProperty("type", 0);
        this.ui_tipContent.text = mes;
        this._funOK = funok;
        this._funClose = funclose;

        this.ui_tipOKClickText.text = okText;
        this.ui_tipOKText.text = okText;
        this.ui_tipCloseText.text = closeText;


        if (this._funOK) {
            this.ui_tipOKClick.onClick(() => {
                this._funOK();
                this.Hide();
            });

            this.ui_tipOK.onClick(() => {
                this._funOK();
                this.Hide();
            });
        } else {
            this.ui_tipOK.onClick(() => {
                this.Hide();
            });
        }

        if (this._funClose) {
            this.ui_tipClose.onClick(() => {
                this._funClose();
                this.Hide();
            });

            this.ui_tipOK.visible = false;
            this.ui_tipOKClick.visible = true;
            this.ui_tipClose.visible = true;
        } else {
            this.ui_tipOK.visible = true;
            this.ui_tipOKClick.visible = false;
            this.ui_tipClose.visible = false;
        }
        this.Show();
    }

    public ShowTipLabel(mes: string) {
        // this.messages.push(mes);
        // if (!this.isOpend) {
        //     this.tipMessage();
        // }
        console.log("---ShowTipLabel---", mes);
        this.setControllerProperty("type", 1);
        this.Show();

        this.ui_tipLabel.visible = false;
        let node: cc.Node = cc.instantiate(this.ui_tipLabel.node);
        node.parent = this.ui_tipLabel.node.parent;
        node.position = this.ui_tipLabel.node.position;
        node.getComponent(cc.Label).string = mes;
        node.active = true;
        node.opacity = 255;
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

    // private isOpend: boolean = false;
    // private moveAnimation: fgui.Transition;
    // private tipMessage() {
    //     let mess = this.messages.shift();
    //     if (!mess) {
    //         this.isOpend = false;
    //         this.Hide();
    //         return;
    //     }
    //     this.setControllerProperty("type", 1);
    //     this.Show();
    //     this.isOpend = true;
    //     this.ui_tipLabel.text = mess;
    //     this.moveAnimation.play(() => {
    //         this.ui_tipLabel.text = '';
    //         this.tipMessage();
    //     }, 1)
    // }


    Hide() {
        this.ui_tipOK.clearClick();
        this.ui_tipOKClick.clearClick();
        this.ui_tipClose.clearClick();
        super.Hide();
        this.node.active = false;
    }

    Show() {
        this.node.active = true;
        super.Show();
    }

    onDestroy() {
        // this.moveAnimation.stop();
    }
}