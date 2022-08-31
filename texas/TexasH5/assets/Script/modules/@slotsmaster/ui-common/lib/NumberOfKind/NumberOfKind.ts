
import FguiComponentBase from "../../../../@mogafa/fairygui-component/lib/FguiComponentBase";
import NumberOfKindSpine from "./NumberOfKindSpine";

export class NumberOfKind extends FguiComponentBase {
    private _numberOfKindNode: cc.Node;
    private _numberOfKindSpine: NumberOfKindSpine;
    private _numberOfKindBgNode: cc.Node;
    private _numberOfKindBgSpine: NumberOfKindSpine;

    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "NumberOfKind";
    }

    protected createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.makeFullScreen();
        this._numberOfKindNode = this.fguiComponent.getChild("numberOfKind").node;
        this._numberOfKindBgNode = this.fguiComponent.getChild("numberOfKindBg").node;
        this._numberOfKindSpine = new NumberOfKindSpine(this._numberOfKindNode);
        this._numberOfKindBgSpine = new NumberOfKindSpine(this._numberOfKindBgNode);
        this.addChild(this._numberOfKindSpine);
        this.addChild(this._numberOfKindBgSpine);
    }

    /**
     * 执行NUMBER OF KIND SPINE动画
     * @param kindNumber //* 类型数字 5 - 5 Of kind / 6 - 6 of kind
     */
    public executeNumberOfKind(kindNumber: number) {
        if (kindNumber === 5 || kindNumber === 6) {
            this._numberOfKindBgSpine.kindCycleBg(kindNumber);
            this._numberOfKindSpine.kindCycle(kindNumber);
        }
    }
}
