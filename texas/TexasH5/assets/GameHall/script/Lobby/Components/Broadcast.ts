import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { notice } from "../LobbyNetData";

/**
 * @description 广播
 */
export default class Broadcast extends fgui.GComponent {
    public constructor() {
        super();
    }
    private bgImg: fgui.GImage;
    private textLabel: fgui.GTextField;
    protected onConstruct(): void {
        this.textLabel = this.getChild("text").asRichTextField;
        this.bgImg = this.getChild("n2").asImage;
        this.node.opacity = 0;
    }

    public messages: string[] = [];

    /**是否正在广播 */
    private isOpend: boolean = false;
    public clean() {
        this.messages = [];
    }

    /**开始的时间 */
    private startTime: number;
    /**结束的时间 */
    private endTime: number;
    /**公告的内容 */
    private content: string;

    private noticelist: notice[] = [];

    private nowIndex: number = 0;

    public initNotice(noticelist: notice[]) {
        // for (let i = 0; i < noticelist.length; i++) {
        //     let now = Date.now();
        //     let startTime = new Date(noticelist[i].starttime).getTime();
        //     let endTime = new Date(noticelist[i].endtime).getTime();
        //     if ((now >= startTime && now <= endTime) || endTime < 0) {
        //         this.noticelist.push(noticelist[i]);
        //     }
        // }
        // if (this.noticelist.length <= 0) {
        //     return;
        // }
        // this.node.stopAllActions();
        this.isOpend = false;
        this.loopNotice();
    }
    public addNotice(Notice: notice) {
        this.noticelist.push(Notice);
    }
    public loopNotice() {
        this.noticelist = BaseFrameNative.broadnotice;
        if (this.noticelist.length <= 0) {
            return;
        }
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
                    } else {
                        this.noticelist.splice(this.nowIndex, 1);
                    }
                    if (this.nowIndex > this.noticelist.length - 1) {
                        this.nowIndex = 0;
                        this.loopNotice();
                    }
                    // this.loopNotice();
                })))
    }

    public addMessage(str: string, lv?: boolean) {
        if (lv) {
            this.messages.unshift(str);
        } else {
            this.messages.push(str);
        }
        if (!this.isOpend) {
            this.showBroadcast();
        }
    }

    private showBroadcast() {
        let mess = this.messages.shift();
        if (!mess) {
            this.isOpend = false;
            this.node.opacity = 0;
            this.bgImg.visible = false;
            return;
        }
        this.bgImg.visible = true;
        this.isOpend = true;
        this.textLabel.text = mess;
        this.textLabel.node.runAction(
            cc.sequence(
                cc.delayTime(3),
                cc.callFunc(() => { (this.node.opacity != 255) && (this.node.opacity = 255); }),
                cc.moveBy(10, cc.v2(-(this.textLabel.width + this.node.width), 0)),
                cc.callFunc(() => {
                    this.textLabel.text = '';
                    this.textLabel.node.x = this.node.width;
                    this.isOpend = false;
                    this.loopNotice();
                    this.bgImg.visible = false;
                    this.node.opacity = 0;
                }))
        );
    }

    onDestroy() {
        console.log("Broadcast onDestroy");
        this.textLabel.node.stopAllActions();
        this.node.stopAllActions();
    }

}