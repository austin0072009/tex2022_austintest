import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import LobbyViewCtr from "../LobbyViewCtr";
import CardInfoItem from "./CardInfoItem";
import { cs_geymytexascollect_tex, sc_geymytexascollect_tex, TexasCollectList, cs_texascollect_tex, sc_texascollect_tex } from "./CareerNetDataStruct";

/*
 * @description 我的牌普
 */
export default class MyCardSpectrumView extends ViewBase {

    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "myCardSpectrum";
    }
    private ui_btn_mycardSpBreak: fgui.GButton = null;
    /**取消 */
    private ui_btn_myCardQx: fgui.GButton = null;
    /**删除 */
    private ui_btn_myCardDelect: fgui.GButton = null;
    private ui_cardItemList: fgui.GList = null;
    public ui_n119: fgui.GButton = null;

    private texasCollectList: TexasCollectList[] = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_mycardSpBreak.onClick(this.Hide, this);
        this.ui_cardItemList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.ui_btn_myCardDelect.onClick(this.delectCardItem, this);
        this.ui_btn_myCardQx.onClick(this.qxCardItem, this);

        this.ui_cardItemList.itemRenderer = this.renderListItem.bind(this);
    }
    OnLoadCompleted() {
        this.Show();

        this.ui_n119.onClick(() => {
            this.setControllerProperty("edit", 1)
            this.ui_n119.visible = false;
            this.setCardIsEdit();
        });
    }

    Show() {
        this.allItem = [];
        super.Show();
        let _getlist: cs_geymytexascollect_tex = new cs_geymytexascollect_tex();
        _getlist._g = 51;
        _getlist.fn = "cs_geymytexascollect_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_geymytexascollect_tex.bind(this));
    }

    public sc_geymytexascollect_tex(data: sc_geymytexascollect_tex) {
        this.texasCollectList = data.data;
        this.ui_cardItemList.numItems = this.texasCollectList.length;
    }

    private delItem: CardInfoItem[] = [];
    private allItem: CardInfoItem[] = [];
    public onClickItem(item: CardInfoItem) {
        console.log("-------", item);
        if (item.isDelect) {
            this.delItem.push(item);
            return;
        }
        console.error("cid=" + item.dataInfo.cid);
        LobbyViewCtr.instance.view.showMyCardHistory(item.dataInfo.cid);
    }

    public delectCardItem() {
        this.delItem.forEach((item) => {
            this.ui_cardItemList.removeChild(item);
            this.cs_texascollect_tex(item.dataInfo.infoId);
        });

        this.setControllerProperty("edit", 0);
        this.ui_n119.visible = true;
        this.setCardIsEdit();
    }

    public qxCardItem() {
        this.delItem.forEach((item) => {
            item.setTypeCon(0);
        });
        this.delItem = [];
        this.setControllerProperty("edit", 0);
        this.ui_n119.visible = true;
        this.setCardIsEdit();
    }

    public setCardIsEdit() {
        this.allItem.forEach((item) => {
            item.setEditCon(this.getControllerProperty("edit"));
        });
    }

    public renderListItem(index: number, item: fgui.GObject) {
        let card: CardInfoItem = item as CardInfoItem;
        let cardata: number[] = UIUtil.Concat(this.texasCollectList[index].OwnSpair, this.texasCollectList[index].compoker);
        card.setData(cardata, this.texasCollectList[index].OwnWin);
        card.dataInfo = this.texasCollectList[index];
        this.allItem.push(card);
    }

    public cs_texascollect_tex(infoId: string) {
        let _getlist: cs_texascollect_tex = new cs_texascollect_tex();
        _getlist._g = 51;
        // _getlist.levelid = this.Model.levelid;
        // _getlist.tableid = this.Model.tableid;
        _getlist.type = 1;
        _getlist.infoId = infoId;
        _getlist.fn = "cs_texascollect_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_texascollect_tex.bind(this));// () => { return true; });
    }

    public sc_texascollect_tex(data: sc_texascollect_tex) {
        if (data.result == 1) {
            console.log("删除成功！");
        }
    }
}