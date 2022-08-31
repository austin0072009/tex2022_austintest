import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { notice } from "../LobbyNetData";
import { BroadcastViewCtr } from "./BroadcastViewCtr";

export class BroadcastView extends ViewBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Broadcast";
    }
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.node.opacity = 0;
        this.fguiComponent.sortingOrder = 9999;
        BroadcastViewCtr.instance.view = this;
    }

    OnLoadCompleted() {
        this.isOpend = false;
        this.loopNotice();
    }

    private ui_textLabel: fgui.GRichTextField = null;

    public messages: string[] = [];
    private noticelist: notice[] = [];
    /**开始的时间 */
    private startTime: number;
    /**结束的时间 */
    private endTime: number;
    /**公告的内容 */
    private content: string;
    private nowIndex: number = 0;

    /**是否正在广播 */
    private isOpend: boolean = false;
    private delayTime: number = 0;

    public addMessage(str: string, delayTime = 0) {
        if (this.messages.includes(str) || this.ui_textLabel.text == str) {
            console.log("Broadcast addMessage 已有");
            return;
        }
        this.messages.push(str);
        this.delayTime = delayTime;
        if (!this.isOpend) {
            this.showBroadcast();
        }
    }

    public loopNotice() {
        this.noticelist = BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
        this.Show();
        this.content = this.noticelist[this.nowIndex].content;
        this.startTime = new Date(this.noticelist[this.nowIndex].starttime).getTime();
        this.endTime = new Date(this.noticelist[this.nowIndex].endtime).getTime();

        this.node.runAction(
            cc.sequence(
                cc.delayTime(3),
                cc.callFunc(() => {
                    if (this.noticelist.length <= 0) {
                        return;
                    }
                    let now = Date.now();
                    this.nowIndex += 1;
                    if ((now >= this.startTime && now <= this.endTime) || this.endTime < 0) {
                        this.addMessage(this.content);
                        // this.showBroadcast();
                    } else {
                        this.noticelist.splice(this.nowIndex, 1);
                    }
                    if (this.nowIndex > this.noticelist.length - 1) {
                        this.nowIndex = 0;
                        this.loopNotice();
                    }
                })))
    }

    private showBroadcast() {
        let mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.fguiComponent.node.opacity = 0;
            return;
        }
        this.isOpend = true;
        this.ui_textLabel.text = mess;
        this.ui_textLabel.node.x = this.fguiComponent.width;
        this.ui_textLabel.node.runAction(
            cc.sequence(
                cc.delayTime(3 + this.delayTime),
                cc.callFunc(() => { (this.fguiComponent.node.opacity != 255) && (this.fguiComponent.node.opacity = 255) }),
                cc.moveBy(8, cc.v2(-(this.ui_textLabel.node.width + this.fguiComponent.width), 0)),
                cc.callFunc(() => {
                    this.ui_textLabel.text = '';
                    this.isOpend = false;
                    this.Hide();
                    this.loopNotice();
                }))
        )
    }

    onDestroy() {
        console.log("BroadcastView onDestroy");
        this.messages = [];
        this.ui_textLabel.node.stopAllActions();
    }
}