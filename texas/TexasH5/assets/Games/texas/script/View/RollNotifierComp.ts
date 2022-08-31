import ViewBase from '../../../../Script/BaseFrame/ViewBase';
import F_TexasViewCtr from '../Contrl/F_TexasViewCtr';
export class RollNotifierComp extends ViewBase {
    public ui_danMuBg: fgui.GComponent = null;
    public ui_danMuTxt: fgui.GTextField = null;
    public ui_danButton: fgui.GButton = null;

    private mSpeed = 350.0;

    private mNormalQueue: string[] = [];
    private mIsPlaying: boolean;
    private bgScreenHalfWidth: number;

    private onLoadEnd: boolean = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    AutoSetGoProperty() { }

    MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    public MyStartEx() {
        if(this.ui_danMuBg == null) super.AutoSetGoProperty();
        this.mNormalQueue = [];
        this.mIsPlaying = false;
        this.bgScreenHalfWidth = cc.winSize.width;
        // this.ui_danMuTxt.isCSF = true;
        // gameObject.getOrAddComponent<CanvasGroup>().alpha = 1f;
    }

    public addNotify(content: string) {
        if (this.ui_danButton.visible)
            this.ui_danButton.visible = false;
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(content);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    }

    public addVoicsNotify(title: string, content: string, pos: number) {
        this.ui_danButton.clearClick();
        this.ui_danButton.onClick(() => {
            F_TexasViewCtr.instance.notifyPlayVoice(pos, content);
        });
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(title);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    }
    public DoMove() {
        this.ui_danMuBg.node.stopAllActions();
        this.mIsPlaying = true;
        let time = ((this.bgScreenHalfWidth + this.danmuBgHalfLength) * 2) / this.mSpeed;

        this.ui_danMuBg.node.runAction(cc.sequence(
            cc.moveTo(time, cc.v2(-(this.bgScreenHalfWidth + this.danmuBgHalfLength), this.ui_danMuBg.node.y)),
            cc.callFunc(() => {
                this.MoveEndCall();
            }),
        ))
    }

    public MoveEndCall() {
        if (this.fguiComponent == null) { return; }
        this.ui_danMuBg.node.stopAllActions();
        this.ResetOneText();
        let isHaveNext = this.CheckAndSetCurShowText();
        if (isHaveNext) {
            this.DoMove();
        }
    }

    private curShowStr: string;
    private danmuBgHalfLength: number;

    public CheckAndSetCurShowText(): boolean {
        if (this.curShowStr != null) { return true; }
        let str = this.mNormalQueue.length > 0 ? this.mNormalQueue.splice(this.mNormalQueue.length - 1, 1)[0] : null;
        this.curShowStr = str;

        if (this.curShowStr != null) {
            this.fguiComponent.visible = true;
            this.ui_danMuTxt.text = this.curShowStr;
            this.danmuBgHalfLength = this.ui_danMuBg.getChild("bg").width * 0.5;
            this.ui_danMuBg.x = (this.bgScreenHalfWidth + this.danmuBgHalfLength);
        }
        else {
            //没有新的用于显示的文本 则重置状态     
            this.ResetPlayRoll();
        }

        return this.curShowStr != null;
    }

    public ResetPlayRoll() {
        this.mIsPlaying = false;
        this.fguiComponent.visible = false;
    }

    public ResetOneText() {
        this.curShowStr = null;
    }

    private mImgScaleSpeed = 0.05;

    public Hide() {
        this.ResetPlayRoll();
        super.Hide();
    }

}
