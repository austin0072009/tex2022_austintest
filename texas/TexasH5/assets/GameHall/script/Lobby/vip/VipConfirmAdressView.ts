import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 確認收获地址
 * 
 */
export default class VipConfirmAdressView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "ConfirmAdress";
    }

    private ui_btn_addressBreak: fgui.GButton = null;
    private ui_userName: fgui.GTextField = null;
    private ui_phone: fgui.GTextField = null;
    private ui_address: fgui.GTextField = null;

    private ui_btn_qx: fgui.GButton = null;
    private ui_btn_qr: fgui.GButton = null;
    private ui_btn_changeAddress: fgui.GButton = null;

    private ui_confirmaddressImg: fgui.GLoader = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_addressBreak.onClick(this.Hide, this);
        this.ui_btn_qx.onClick(this.Hide, this);
        this.ui_btn_changeAddress.onClick(this.showExidAddress, this);
        this.ui_btn_qr.onClick(this.showConfirmOrder, this);

        NativeMethod.setUrlByLanguage(this.ui_confirmaddressImg);
    }
    OnLoadCompleted() {
        this.Show();
    }

    /**跳轉編輯地址 */
    public showExidAddress() {
        this.Hide();
        LobbyViewCtr.instance.view.showVipExidAdressView();
    }
    /**跳確認訂單 */
    public showConfirmOrder() {
        this.Hide();
        LobbyViewCtr.instance.view.showVipConfirmOrderView();
    }
    public showAddress() {
        let data = LobbyViewCtr.instance.view.vipShoppingView.getSelectInfo();
        let infoArr = data.address.split("|");
        this.ui_userName.text = infoArr[0];//   setVar("per", infoArr[0]).flushVars();
        this.ui_phone.text = infoArr[1];//setVar("phone ", infoArr[1]).flushVars();
        this.ui_address.text = infoArr[2];   //.setVar("address", infoArr[2]).flushVars();
    }
    Hide() {
        AudioManager.Singleton.play('VipConfirmAdressView', "button");
        super.Hide();
    }

    public Show() {
        super.Show();
        this.showAddress();
    }


}