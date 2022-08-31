import SoundMgr from "../modules/@mogafa/utils/lib/SoundMgr";
import { Utils } from "../modules/@mogafa/utils/lib/Utils";
import { Popup } from "../modules/@slotsmaster/ui-common/lib/Popup";


export default abstract class PayTable extends Popup {
    private _view: fgui.GComponent;
    private _json: [];
    private _curBet: number = 0;
    public set curBet(value: number) {
        this._curBet = value;
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
    protected get payTableListName(): string {
        return "list";
    }
    protected get backToGameButtonName(): string {
        return "backToGame";
    }
    protected get openRightPageButtonName(): string {
        return "openRightPage";
    }
    protected get openLeftPageButtonName(): string {
        return "openLeftPage";
    }
    protected get showPayTableEvent(): string {
        return "showPayTable";
    }
    public get closeTime(): number {
        return -1;
    }
    protected payTableLista: fgui.GGroup;
    protected payTableList: fgui.GList;
    protected backToGameButton: fgui.GButton;
    protected openRightPageButton: fgui.GButton;
    protected openLeftPageButton: fgui.GButton;

    private _curIndex: number;

    protected createChildComponents() {
        super.createChildComponents();
        this._view = this.fguiComponent;
        this.node.on(this.showPayTableEvent, this.show, this);
        if (this.payTableListName) {
            this.payTableList = this.getChild(this.payTableListName).asList;
            this._curIndex = this.payTableList.getFirstChildInView();
        }
        if (this.backToGameButtonName) {
            this.backToGameButton = this.getChild(this.backToGameButtonName).asButton;
            this.backToGameButton.onClick(this.onBackToGameClick.bind(this));
        }
        if (this.openRightPageButtonName) {
            this.openRightPageButton = this.getChild(this.openRightPageButtonName).asButton;
            this.openRightPageButton.onClick(this.onOpenLeftPageClick.bind(this));
        }
        if (this.openLeftPageButtonName) {
            this.openLeftPageButton = this.getChild(this.openLeftPageButtonName).asButton;
            this.openLeftPageButton.onClick(this.onOpenRightPageClick.bind(this));
        }
    }

    public onBackToGameClick(listener: Function, target?: any): void {
        SoundMgr.getInstance().playEffect("button");
        this.payTableList.scrollToView(0);
        this._curIndex = 0;
        super.hide();
    }
    public onOpenRightPageClick(listener: Function, target?: any): void {
        SoundMgr.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex--;
        if (this._curIndex >= 0) {
            this.jumpPointItem();
        }
    }
    public onOpenLeftPageClick(listener: Function, target?: any): void {
        SoundMgr.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex++;
        if (this._curIndex <= this.payTableList.numChildren) {
            this.jumpPointItem();
        }
    }
    private jumpPointItem(): void {
        this.payTableList.scrollToView(this._curIndex, true);
        this.payTableList.itemIndexToChildIndex(this._curIndex);
    }
    public setData(json: any, curBets: number) {
        if (!json) return;
        this._json = json;
        this._curBet = curBets;
        let payTableTable = json.config;
        for (let i = 0; i < this.payTableList.numItems; i++) {
            const element = this.payTableList._children[i].asCom;
            if (element.name == "payTable") {
                let payTableTableData = payTableTable.payTable;
                let labelGroup = element.getChild("payTableData").asCom;
                for (let j = 0; j < labelGroup.numChildren; j++) {
                    //* 根据棋子的编码对应paytable返回数据的下标
                    var index = parseInt(labelGroup._children[j].name);
                    var revKey = Object.keys(payTableTableData[index]).reverse();
                    let str = "";
                    for (let k = 0; k < revKey.length; k++) {
                        str =
                            str +
                            revKey[k] +
                            "=" +
                            Utils.numToCountingNnit(payTableTableData[index][revKey[k]] * curBets / payTableTable.linecount) +
                            "\n"; // cc.cdd.MgrUser.curBets
                    }
                    labelGroup._children[j].text = str;
                }
            }
            if (element.name == "scatterMap") {
                let scatterMap = payTableTable.scatterMap;
                if (scatterMap) {
                    let labelGroup1 = element.getChild("scatterMapData").asCom;
                    for (var a = 0; a < labelGroup1.numChildren; a++) {
                        var index = parseInt(labelGroup1._children[a].name);
                        let data2 = scatterMap[index];
                        labelGroup1._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jpMultipleMap") {
                let jpMultipleMap = payTableTable.jpMultipleMap;
                if (jpMultipleMap) {
                    let labelGroup2 = element.getChild("jpMultipleMapData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        let data2 = jpMultipleMap[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "zuesFeature") {
                let zuesFeature = payTableTable.zuesFeature;
                if (zuesFeature) {
                    let labelGroup2 = element.getChild("zuesFeatureData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        let data2 = zuesFeature[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jackpot") {
                let jackpotData = payTableTable.jackpotData;
                if (jackpotData) {
                    let labelGroup2 = element.getChild("jackpotData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        let data2 = jackpotData[a];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
        }
    }
    public setPayTable(): void { }
    show() {
        this.setData(this._json, this._curBet);
        super.show();
    }
}
