import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 确认订单
 * 
 */
export default class VipConfirmOrderView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "ConfirmOrder";
    }

    private ui_btn_orderBreak: fgui.GButton = null;

    private ui_user: fgui.GTextField = null;
    private ui_phone: fgui.GTextField = null;
    private ui_address: fgui.GTextField = null;
    private ui_goodsName: fgui.GTextField = null;
    private ui_goodsjf: fgui.GTextField = null;
    private ui_btn_qx: fgui.GButton = null;
    private ui_btn_qr: fgui.GButton = null;
    private ui_goodsLoader: fgui.GLoader = null;

    private ui_btn_tipqr: fgui.GButton = null;
    private ui_exgoodsName: fgui.GTextField = null;
    private ui_createTime: fgui.GTextField = null;
    private ui_orderNum: fgui.GTextField = null;
    private typeController: fgui.Controller;


    private ui_confirmOrderimg: fgui.GLoader = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_orderBreak.onClick(this.Hide, this);
        this.ui_btn_qx.onClick(this.Hide, this);
        this.ui_btn_qr.onClick(this.sendExchange, this);
        this.typeController = this.fguiComponent.getController("type");

        this.ui_btn_tipqr.onClick(this.Hide, this);

        NativeMethod.setUrlByLanguage(this.ui_confirmOrderimg);
    }

    OnLoadCompleted() {
        this.Show();
    }

    Hide() {
        AudioManager.Singleton.play('VipConfirmOrderView', "button");
        super.Hide();
    }


    public Show() {
        super.Show();
        this.typeController.setSelectedIndex(0);

        let data = LobbyViewCtr.instance.view.vipShoppingView.getSelectInfo();

        this.ui_goodsName.text = data.info.name;
        this.ui_goodsjf.setVar("sou", data.info.integral + '').flushVars();;
        UIUtil.loadImage(this.ui_goodsLoader, data.info.imgPic);
        let infoArr = data.address.split("|");
        this.ui_user.setVar("per", infoArr[0]).flushVars();
        this.ui_phone.setVar("phone ", infoArr[1]).flushVars();
        this.ui_address.setVar("address", infoArr[2]).flushVars();
    }

    public sendExchange() {
        LobbyViewCtr.instance.view.vipShoppingView.sendExchangeGoods();
    }

    public showTip(data) {
        this.typeController.setSelectedIndex(1);
        let date: string = data["creatDate"];
        date = date.slice(0, date.indexOf(".")).replace("T", " ")
        this.ui_orderNum.setVar("order", data["orderNum"]).flushVars();
        this.ui_createTime.setVar("time", date).flushVars();
        this.ui_exgoodsName.setVar("name", data["itemName"]).flushVars();
    }


}