
import FguiComponentBase from "../../../@mogafa/fairygui-component/lib/FguiComponentBase";
import SpinResultsGameWheel from "../../../spin-result/SpinResultsGameWheel";

export default abstract class TurnTable extends FguiComponentBase {
    protected abstract get goldTurnLabel(): string[];
    protected abstract get goldTurnData(): string[];
    protected abstract get SpinButtonName(): string;
    protected abstract get CollectButtonName(): string;
    protected insideWheel: fgui.GComponent;
    protected turnSpin: fgui.GButton;
    protected ifRun: boolean = false;
    protected wheelFinishedCallback: Function;
    protected _gameWheel: SpinResultsGameWheel;

    protected time: number = 6;
    protected circle: number = 5;
    protected degree: number = 0; //结束目标点

    protected createChildComponents() {
        super.createChildComponents();
        this.addButtonEvent();
        //内部转盘
        this.insideWheel = this.fguiComponent.getChild("internalTurntable").asCom;
    }

    public onShow(callBack: Function, wheelData: SpinResultsGameWheel) {
        this.wheelFinishedCallback = callBack;
    }

    private addButtonEvent() {
        this.fguiComponent.getChild(this.SpinButtonName).asButton.onClick(this.onClickGetSpin, this);
        this.fguiComponent.getChild(this.CollectButtonName).asButton.onClick(this.onClickCollect, this);
    }

    protected get gameWheel() {
        return this._gameWheel;
    }

    protected set gameWheel(data) {
        this._gameWheel = data;
    }

    protected onClickGetSpin() {
        //this.StartSpin();
    }

    protected onClickCollect() {
        if (this.wheelFinishedCallback) {
            this.wheelFinishedCallback();
        }
        this.fguiComponent.visible = false;
    }

    protected StartSpin() {
        if (this.ifRun) return;
        this.ifRun = true;
        this.startTurn();
    }

    /**
     * 转盘数据
     * @param finalCodes 目标值
     * @param offset  偏差值
     */
    protected initData(finalCodes: string, offset: number = 0) {
        const dataArr: string[] = this.goldTurnData;
        if (dataArr.length != this.goldTurnLabel.length) {
            cc.error("转盘数据不一致");
        } else {
            //取目标值index
            this.insideWheel.node.angle = 0;
            let finalIndex: number = dataArr.indexOf(finalCodes);
            let angle: number = 360 / dataArr.length;
            if (finalIndex != -1) {
                this.degree = (dataArr.length - finalIndex) * angle + offset;
                for (let i = 0; i < this.goldTurnLabel.length; i++) {
                    this.insideWheel.getChild(this.goldTurnLabel[i]).asLabel.text = String(dataArr[i]);
                }
            } else {
                cc.error("查找结果数据失败");
            }
        }
    }

    protected startTurn() {
        let finished = cc.callFunc(function () {
            this.finished();
        }, this);

        let roActEas = cc
            .rotateTo(this.time, 360 * this.circle + this.degree + 11.25)
            .easing(cc.easeCubicActionInOut());
        let roActEas_stop = cc.rotateBy(0.5, 11.25).easing(cc.easeCircleActionIn());
        let action = cc.sequence(roActEas, roActEas_stop, finished); //停止状态 慢 - 快 - 慢
        this.insideWheel.node.runAction(action);
    }

    /**
     * 转盘结束回调(可用于显示结果之后后续步骤)
     */
    protected finished() {
        this.ifRun = false;
    }


    Show() {
        this.active = true;
        if (this._fguiComponent) {
            this._fguiComponent.visible = true;
        }
    }

    Hide() {
        this.active = false;
        this._fguiComponent.visible = false;
    }
}
