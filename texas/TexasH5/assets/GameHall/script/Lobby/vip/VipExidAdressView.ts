import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 编辑收获地址
 * 
 */
export default class VipExidAdressView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "exidAdress";
    }

    private ui_btn_addressBreak: fgui.GButton = null;
    private ui_userName: fgui.GTextInput = null;
    private ui_phone: fgui.GTextInput = null;
    private ui_address: fgui.GTextInput = null;
    private ui_saveInfo: fgui.GButton = null;

    private ui_exidaddressImg: fgui.GLoader = null;

    private ui_btn_address: fgui.GButton = null;
    private ui_addresslabel: fgui.GTextField = null;
    private oldLabel: string;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_addressBreak.onClick(this.Hide, this);
        this.ui_saveInfo.onClick(this.saveInfo, this);
        NativeMethod.setUrlByLanguage(this.ui_exidaddressImg);

        this.ui_btn_address.onClick(this.setFocus, this);
        this.ui_address.node.opacity = 0;
        this.ui_address.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
    }
    OnLoadCompleted() {
        this.oldLabel = this.ui_addresslabel.text;
        this.Show();
    }
    public setFocus() {
        this.ui_address.requestFocus();
    }
    public changedText() {
        this.ui_addresslabel.text = this.ui_address.text;
    }

    public saveInfo() {
        let userName = this.ui_userName.text;
        let phone = this.ui_phone.text;
        let address = this.ui_address.text;
        if (!userName || !phone || !address) {
            CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Additemorderaddress";
        let id = 0;
        if (LobbyViewCtr.instance.view.vipShoppingView.addressInfo) {
            id = LobbyViewCtr.instance.view.vipShoppingView.addressInfo.id;
        }
        let params = {
            id: id,
            UserId: AppConst.mPlayerModel.userid + '',
            Address: `${userName}|${phone}|${address}`
        }
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then((res) => {
                cc.log("---------设置----地址----", res);
                fgui.GRoot.inst.closeModalWait();
                if (res.code == 1) {
                    LobbyViewCtr.instance.view.vipShoppingView.address = params.Address;
                    LobbyViewCtr.instance.Model.vipAddress = params.Address;
                    this.Hide();
                    CommonCtr.instance.ShowTipLabel("設置收貨地址成功");
                } else {
                    CommonCtr.instance.ShowTipLabel("設置收貨地址失敗");
                }

            })
            .catch(() => {
                fgui.GRoot.inst.closeModalWait();
                CommonCtr.instance.ShowTipLabel("設置收貨地址失敗");
            })

    }

    Hide() {
        AudioManager.Singleton.play('VipExidAdressView', "button");
        super.Hide();
    }

    public Show() {
        this.ui_addresslabel.text = this.oldLabel;
        let address = LobbyViewCtr.instance.Model.vipAddress;
        if (address != "") {
            let list = address.split("|");
            if (list[0]) this.ui_userName.text = list[0];
            if (list[1]) this.ui_phone.text = list[1];
            if (list[2]) {
                this.ui_address.text = list[2];
                this.ui_addresslabel.text = list[2];
            }
        }
        super.Show();
    }


}