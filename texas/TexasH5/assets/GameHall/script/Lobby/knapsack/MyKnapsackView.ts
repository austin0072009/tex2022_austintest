import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { PropInfo } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";
import { MyKnapsackItem } from "./MyKnapsackItem";

/**
 * @description 背包
 */
export default class MyKnapsackView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "knapsack";
    }

    private ui_btn_knspBreak: fgui.GButton = null;
    private ui_pkgList: fgui.GList = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_knspBreak.onClick(this.Hide, this);
        this.ui_pkgList.setVirtual();
        this.ui_pkgList.itemRenderer = this.renderListItem.bind(this);
        this.ui_pkgList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('MyKnapsackView', "button");
        super.Hide();
    }
    public _listData: PropInfo[] = [];
    public set listData(data) {
        this._listData = data;
        this.ui_pkgList.numItems = data.length;
    }
    public get listData() {
        return this._listData;
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <MyKnapsackItem>obj;
        item.setData(this.listData[index]);
    }
    public onClickItem(item: MyKnapsackItem) {
        AudioManager.Singleton.play('MyKnapsackView', "button");
        item.showDesc();
    }

    // public initBagPackData() {
    //     this.ui_pkgList.removeChildrenToPool();
    //     for (let index = 0; index < this.listData.length; index++) {
    //         const element = this.listData[index];
    //         let item = this.ui_pkgList.addItemFromPool().asCom as MyKnapsackItem;
    //         item.setData(element);
    //     }
    // }

    public Show() {
        super.Show();
        this.listData = LobbyViewCtr.instance.model.bagpackData;
        // this.initBagPackData();
    }
}