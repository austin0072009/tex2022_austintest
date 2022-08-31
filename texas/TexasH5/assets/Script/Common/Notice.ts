import HttpApi, { Http_GetNotice } from "../modules/@slotsmaster/ui-common/lib/HttpApi";
import { Popup } from "../modules/@slotsmaster/ui-common/lib/Popup";

 
const NOTICE_TYPE = {
    //* 横向滚动条
    SCROLL_HORIZONAL: 0,
    //* 顶部跑马灯
    TOP_MARQUEE: 1,
};
export class Notice extends Popup {
    protected get basePanel(): string {
        return "";
    }
    protected get animNode(): cc.Node[] {
        throw new Error("Method not implemented.");
    }
    protected get buttonOKName(): string {
        return null;
    }
    protected get goldGrowName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get normalNumName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Notice";
    }
    get closeTime(): number {
        return -1;
    }
    get isRegisterNodeEvent(): boolean {
        return false;
    }

    private _msgComponent: fgui.GObject;
    private _msgInfoComponent: fgui.GComponent;
    private _msgText: fgui.GTextField;
    private _msgHead: fgui.GLoader;
    private _msgNoticeArr = [];

    private _windowMsgComponent: fgui.GObject;
    private _windowMsgName: fgui.GLabel;
    private _windowMsgData: fgui.GLabel;
    private _windowMsgHead: fgui.GLoader;
    private _windowMsgNoticeArr = [];

    private _deltaTime: number = 1;
    private _myMsgNotice = null;
    private _myWindowMsgNotice = null;

    allChildCreated() {
        super.allChildCreated();
        this.show();
    }
    protected createChildComponents() {
        super.createChildComponents();

        this._msgComponent = this.fguiComponent.getChild("noticeMsg");
        this._msgInfoComponent = this.getChild("noticeMsg.noticeMsgInfo").asCom;
        this._msgInfoComponent.x = 1920;
        this._msgText = this.getChild("noticeMsg.noticeMsgInfo.msg").asTextField;
        this._msgHead = this.getChild("noticeMsg.noticeMsgInfo.head").asLoader;

        this._windowMsgComponent = this.fguiComponent.getChild("noticeWindow");
        this._windowMsgComponent.y = -200;
        this._windowMsgName = this.getChild("noticeWindow.name").asLabel;
        this._windowMsgData = this.getChild("noticeWindow.price").asLabel;
        this._windowMsgHead = this.getChild("noticeWindow.head").asLoader;

        this._msgComponent.visible = false;
        this._windowMsgComponent.visible = false;
        this.fguiComponent.getController("isShowBg").setSelectedIndex(0);
    }
    private updateMsg() {
        let self = this;
        this.scheduleOnce(function () {
            self.showMsg();
        });
        // this.schedule(this.showMsg, 10, this._msgNoticeArr.length, 0);
    }
    actionDo(): void {
        this.fguiComponent.getController("isShowBg").setSelectedIndex(1);
        this._msgComponent.visible = true;
        this._msgText.text = this._msgNoticeArr[0].content;
        this._msgHead.url = this._msgNoticeArr[0].headImageUrl;
    }
    private showMsg(): void {
        let visibleSize = cc.view.getVisibleSize().width;
        this.fguiComponent.getController("isShowBg").setSelectedIndex(1);
        this._msgComponent.visible = true;
        this._msgText.text = this._msgNoticeArr[0].content;
        this._msgHead.url = this._msgNoticeArr[0].headImageUrl;
        let tweenWidth = -1920 / 2;
        let speed = (1920 - tweenWidth) / 250;
        let self = this;
        let finished = cc.callFunc(function () {
            self._msgText.text = "";
            self._msgHead.url = "";
            self._msgInfoComponent.node.x = 1920;
            self._msgInfoComponent.x = 1920;
            self._msgNoticeArr.shift();
            if (self._msgNoticeArr.length < 1) {
                self._msgComponent.visible = false;
                self.fguiComponent.getController("isShowBg").setSelectedIndex(0);
                //   self.unschedule(self.showMsg);
            } else {
                self.updateMsg();
            }
        }, this);
        let action = cc.sequence(cc.moveTo(speed, tweenWidth, this._msgInfoComponent.height / 2), finished);
        this._msgInfoComponent.node.runAction(action);
    }
    private showWindowMsg(): void {
        this._windowMsgComponent.visible = true;
        this._windowMsgName.text = this._windowMsgNoticeArr[0].name;
        this._windowMsgData.text = "$" + this._windowMsgNoticeArr[0].wonValue;
        this._windowMsgHead.url = this._windowMsgNoticeArr[0].headImageUrl;
        let tweenHeight = 200;
        let self = this;
        let finished = cc.callFunc(function () {
            self._windowMsgName.text = "";
            self._windowMsgData.text = "";
            self._windowMsgHead.url = "";
            self._windowMsgComponent.y = -200;
            self._windowMsgNoticeArr.shift();
            if (self._windowMsgNoticeArr.length < 1) {
                self._windowMsgComponent.visible = false;
                self.unschedule(self.showWindowMsg);
            }
        }, this);
        let delayAction = cc.delayTime(5); //   this._windowMsgNoticeArr[0].disappearCountdown;
        let moveAction = cc.moveBy(0.5, 0, -tweenHeight);
        let reserveMoveAction = cc.moveBy(0.5, 0, tweenHeight);
        let action = cc.sequence(moveAction, delayAction, reserveMoveAction, finished);
        this._windowMsgComponent.node.runAction(action);
    }
    private updateWindowMsg(): void {
        this.schedule(this.showWindowMsg, 9, this._windowMsgNoticeArr.length, 0);
    }
    update(dt): void {
        if (this._windowMsgNoticeArr.length > 0 || this._msgNoticeArr.length > 0) {
            this.setIndex();
        }
        this._deltaTime += dt;
        if (this._deltaTime >= 30) {
            this._deltaTime = 0;
            this.getNotice();
        }
    }
    private getNotice(): void {
        //获取跑马灯数据
        // this._noticeArr = msg;
        //申请房间成功
        HttpApi.http
            .get(HttpApi.server + Http_GetNotice, {})
            .then(
                (res: any) => {
                    if (res.code == 200) {
                        this.getMyNotice();
                        if (res.data.standardNotices.length > 0) {
                            this._msgNoticeArr = res.data.standardNotices;
                            this.unschedule(this.showMsg);
                            this.updateMsg();
                        }
                        if (res.data.popupNotices.length > 0) {
                            this._windowMsgNoticeArr = res.data.popupNotices;
                            this.unschedule(this.showWindowMsg);
                            this.updateWindowMsg();
                        }
                        if (this._myMsgNotice != null) {
                            this._msgNoticeArr.push(this._myMsgNotice);
                        }
                        if (this._myWindowMsgNotice != null) {
                            this._windowMsgNoticeArr.push(this._myWindowMsgNotice);
                        }
                    } else {
                    }
                },
                (err) => {}
            )
            .catch((err) => {});
    }
    private getMyNotice() {
        for (let index = 0; index < this._msgNoticeArr.length; index++) {
            if (this._msgNoticeArr[index].isMine) {
                this._myMsgNotice = this._msgNoticeArr[index];
                break;
            } else {
                this._myMsgNotice = null;
            }
        }
        for (let index = 0; index < this._windowMsgNoticeArr.length; index++) {
            if (this._windowMsgNoticeArr[index].isMine) {
                this._myWindowMsgNotice = this._windowMsgNoticeArr[index];
                break;
            } else {
                this._myWindowMsgNotice = null;
            }
        }
        this._msgNoticeArr = [];
        this._windowMsgNoticeArr = [];
    }

    public showNotice(type: number): void {
        this.getNotice();
        // switch (type) {
        //     case NOTICE_TYPE.SCROLL_HORIZONAL:
        //         this._msgComponent.visible = true;
        //         this._msgText.text = "scroll message";
        //         break;
        //     case NOTICE_TYPE.TOP_MARQUEE:
        //         this._windowMsgComponent.visible = true;
        //         this._windowMsgData.text = "$777";
        //         break;
        //     default:
        //         this._windowMsgComponent.visible = true;
        //         this._windowMsgData.text = "$777";
        //         break;
        // }
    }
}
