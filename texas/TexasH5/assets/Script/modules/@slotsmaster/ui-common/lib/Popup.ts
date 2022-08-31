import { FguiWindow } from "../../../@mogafa/fairygui-component/lib/FguiComponentBase";
import SoundMgr from "../../../@mogafa/utils/lib/SoundMgr";

export abstract class Popup extends FguiWindow {
    private _normalNum: number[];
    private _goldNum: number[];
    private _closeTime: number = 3;
    private callback: Function;
    private _isHideComplete: boolean = false;
    private _isRegisterNodeEvent: boolean = true;
    protected _base: fgui.GComponent;
    protected abstract get animNode(): cc.Node[]; //需要渐变动画节点
    protected abstract get buttonOKName(): string; //点击按钮
    protected abstract get basePanel(): string; //点击按钮
    protected abstract get goldGrowName(): string[]; //金币文本
    protected abstract get normalNumName(): string[]; //other

    public get normalNum(): number[] {
        return this._normalNum;
    }
    public set normalNum(value: number[]) {
        if (value.length != this.normalNumName.length) cc.warn("other数据错误");
        this._normalNum = value;
        this.normalValue();
    }

    public set goldNum(value: number[]) {
        if (value.length != this.goldGrowName.length) cc.warn("gold数据错误");
        this._goldNum = value;
        this.goldValue();
    }

    public get goldNum(): number[] {
        return this._goldNum;
    }

    public set closeTime(value: number) {
        this._closeTime = value;
        this.openSchedule();
    }

    public get closeTime(): number {
        return this._closeTime;
    }
    public set isRegisterNodeEvent(value: boolean) {
        this._isRegisterNodeEvent = value;
    }
    public get isRegisterNodeEvent(): boolean {
        return this._isRegisterNodeEvent;
    }
    /**
     * 添加所有按钮的音效
     * @param fguiComponent
     */
    protected addAllButtonMusic(fguiComponent: fgui.GComponent): void {
        fguiComponent._children.map((item) => {
            if (item.node.name === "GButton") {
                item.on(fairygui.Event.TOUCH_END, this.onButtonClickMusic.bind(this));
            }
        });
    }
    /**
     * 按钮点击播放音效事件
     * 子类重载此方法给按钮绑定音乐
     */
    protected onButtonClickMusic(): void {
        SoundMgr.getInstance().playEffect("button");
    }
    protected createChildComponents() {
        super.createChildComponents();
        if (this.basePanel != "" && this.basePanel) {
            this._base = this.fguiComponent.getChild("base").asCom;
            this._base.node.setAnchorPoint(0.5, 0.5);
        }
        this.window.hide();
    }

    allChildCreated() {
        if (this.basePanel != "" && this.basePanel) {
            this.addAllButtonMusic(this._base);
        } else if (this.basePanel == "" || !this.basePanel) {
            this.addAllButtonMusic(this.fguiComponent);
        }
        super.allChildCreated();
        if (this.buttonOKName != "" && this.buttonOKName) {
            if (this.basePanel != "" && this.basePanel) {
                this._base.getChild(this.buttonOKName).onClick(this.hide.bind(this));
            } else if (this.basePanel == "" || !this.basePanel) {
                this.fguiComponent.getChild(this.buttonOKName).onClick(this.hide.bind(this));
            }
        }
    }
    public setIndex(): void {
        this.window.bringToFront();
    }
    public show(): void {
        this.resetBase();
        if (this.isRegisterNodeEvent) {
            this.fguiComponent.node.on("touchstart", () => { });
        }
        this.window.show();
        this.window.bringToFront();
        this.onPlayShowAni();
        this.openSchedule();
    }

    public hide(): void {
        this.unschedule(this.callback);
        this.onPlayHideAni();
        if (this._isHideComplete) {
            this._isHideComplete = false;
        } else {
            this.window.hide();
        }
        //! 关闭窗口时必须解除事件绑定，否则再次打开时绑定事件将不会生效
        if (this.isRegisterNodeEvent) this.fguiComponent.node.off("touchstart");
    }

    protected onPlayShowAni(): void {
        if (this.basePanel != "" && this.basePanel) {
            this._base.node.runAction(cc.scaleTo(0.2, 1, 1).easing(cc.easeIn(0.2)));
        }
    }

    protected onPlayHideAni(): void {
        if (this.basePanel != "" && this.basePanel) {
            let self = this;
            let callBack = cc.callFunc(function () {
                self._isHideComplete = true;
                self.window.hide();
            });
            this._base.node.runAction(cc.sequence(cc.scaleTo(0.2, 0, 0), callBack));
        }
    }
    private resetBase(): void {
        if (this.basePanel != "" && this.basePanel) {
            this._base.node.setScale(0.1, 0.1);
        }
    }
    private goldValue() {
        if (this.goldNum.length < 1 || this.goldGrowName.length < 1) return;
        if (this.goldNum.length != this.goldGrowName.length) cc.warn("金币数据错误");
        if (this.goldNum) {
            for (let i = 0; i < this.goldNum.length; i++) {
                if (this.goldNum[i] === 0) {
                    this.fguiComponent.getChild(this.goldGrowName[i]).asTextField.text = "0";
                } else {
                    this.fguiComponent
                        .getChild(this.goldGrowName[i])
                        .asTextField.asMogafaNumberField()
                        .play(0, this.goldNum[i], 3);
                }
            }
        }
    }

    private normalValue() {
        if (this.normalNumName.length != this.normalNum.length) cc.warn("other数据错误");
        if (this.normalNum) {
            for (let i = 0; i < this.normalNum.length; i++) {
                this.fguiComponent.getChild(this.normalNumName[i]).asTextField.text = String(this.normalNum[i]);
            }
        }
    }

    private openSchedule() {
        this.unschedule(this.callback);
        if (this.closeTime != -1) {
            this.callback = function () {
                this.hide();
            };
            this.scheduleOnce(this.callback, this._closeTime);
        }
    }
}
