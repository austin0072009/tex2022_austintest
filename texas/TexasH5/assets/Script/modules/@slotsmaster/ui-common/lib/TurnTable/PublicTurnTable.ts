

import TurnTable from "../TurnTable";
import { MgrOrder } from "../MgrOrder";
import HttpApi, { Http_CreatForm, Http_GetVerifyPay } from "../HttpApi";
import { AppConst } from "../AppConst";
import { MogafaNumberField } from "../../../../@mogafa/fairygui-component/lib/extensions/MogafaNumberField";
import { Utils } from "../../../../@mogafa/utils/lib/Utils";
import SpinResultsGameWheel from "../../../../spin-result/SpinResultsGameWheel";


export class PublicTurnTable extends TurnTable {
    protected get SpinButtonName(): string {
        return "Spin";
    }
    protected get CollectButtonName(): string {
        return "Collect";
    }
    protected get goldTurnData(): string[] {
        return this.getWheelArray();
    }
    protected get goldTurnLabel(): string[] {
        let labelArr: string[] = [];
        for (let i = 1; i < 17; i++) {
            labelArr.push("label" + i);
        }
        return labelArr;
    }
    protected get packageResourceName(): string {
        return "Games/Common/UI/InGameTurntable/InGameTurntable";
    }
    protected get packageName(): string {
        return "InGameTurntable";
    }
    protected get componentName(): string {
        return "GameWheel";
    }
    private resulText: fgui.GTextField;
    private cmgpNumberField: MogafaNumberField;
    private resultValue: number = 3;
    private startValue: number = 10000;
    private usd: number = 0.95;
    private shineIndex: number = 1;
    private scheduleShine = this.turnTableShine;
    private productId: any;
    private productCode: any;
    private orderId: any;

    protected createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.fguiComponent.getChild("Close").asButton.onClick(this.turnTableEnd, this);
    }

    protected finished() {
        super.finished();
        this.fguiComponent.getController("type").selectedIndex = 1;
        this.fguiComponent.getController("state").selectedIndex = 1;
        this.unschedule(this.scheduleShine);
        this.fguiComponent.getChild("getGold").asLabel.text = "" + this.resultValue;
        let turnResult = this.fguiComponent.getChild("getMoreGold");
        let result = this.startValue * this.resultValue;
        this.cmgpNumberField = turnResult.asMogafaNumberField();
        this.cmgpNumberField.play(0, result, 2);
    }

    private setResulText(value: string) {
        if (value) {
            if (this.resulText) {
                this.resulText.text = Utils.formatNumberToInt(value) + " X";
            }
        }
    }

    private turnTableEnd() {
        if (this.wheelFinishedCallback) {
            this.wheelFinishedCallback();
        }
        this.fguiComponent.node.zIndex = 0;
        this.Hide();
    }

    public onShow(callBack: Function, wheelData: SpinResultsGameWheel) {
        super.onShow(callBack, wheelData);
        this.gameWheel = wheelData;
        this.fguiComponent.visible = true;
        this.fguiComponent.node.zIndex = 999;
        this.fguiComponent.getController("type").selectedIndex = 0;
        this.onWheelOpen();
        this.resulText = this.fguiComponent.getChild("Gold").asTextField;
        if (this.gameWheel) {
            this.startValue = this.gameWheel.winCoins;
            this.resultValue = this.gameWheel.wheel.finalValue.value;
            this.usd = this.gameWheel.productPrice;
        }
        this.fguiComponent.getChild("Spin").asCom.getChild("value").asLabel.text = "USD " + this.usd + " SPIN";
        this.fguiComponent.getChild("getMoreGold").asLabel.text = "";
        this.setResulText("" + this.startValue);
        this.initData("" + this.resultValue, 0);
    }

    protected startTurn() {
        super.startTurn();
        this.fguiComponent.getController("type").selectedIndex = 2;
        this.shineIndex = 1;
        this.schedule(this.scheduleShine, 0.1);
    }

    protected onClickGetSpin() {
        let data = {
            productCode: this.productCode,
            productId: this.productId,
            quantity: 1,
        };
        MgrOrder.getInstance().sendOrderToJava(data, this.buySuccess, this.buyFailed);
    }

    private buySuccess() {
        this.StartSpin();
    }

    private buyFailed() {
        //  UIMgr.getInstance().showTipView(this, 0, "Payment result", "Purchase failed");
    }

    private shineHide() {
        for (let i = 1; i < 16; i++) {
            this.fguiComponent.getChild("light_" + i).visible = false;
        }
    }

    private turnTableShine() {
        if (this.shineIndex < 16) {
            this.shineHide();
            this.fguiComponent.getChild("light_" + this.shineIndex).visible = true;
        }
        this.shineIndex++;
        if (this.shineIndex > 15) {
            this.shineIndex = 1;
        }
    }

    private getWheelArray() {
        if (this.gameWheel) {
            let wheelValues = this.gameWheel.wheel.values;
            let values = [];
            for (const i in wheelValues) {
                values.push("" + wheelValues[i].value);
            }
            return values;
        }
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    }

    private onWheelOpen() {
        let productId = this.gameWheel ? this._gameWheel.productId : "112358";
        HttpApi.http
            .post(
                HttpApi.server + Http_CreatForm + `?${`productId=${productId}&quantity=${1}`}`,
                {},
                {
                    headers: {
                        // 'Content-Type': "application/json",
                        Authorization: AppConst.accessToken,
                    },
                }
            )
            .then(
                (res: any) => {
                    console.log(res);
                    if (res.code == 200) {
                        this.productCode = res.data.productCode;
                        this.productId = res.data.productId;
                        this.orderId = res.data.orderId;
                    }
                },
                (err) => { }
            )
            .catch((err) => { });
    }
}
