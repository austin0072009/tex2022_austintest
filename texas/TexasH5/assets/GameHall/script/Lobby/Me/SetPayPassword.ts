import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { LanguageConfig } from "../LanguageConfig";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 设置支付密码
 */
export default class SetPayPassword extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "SetPayPassword";
    }

    private ui_btn_qx: fgui.GButton = null;
    private ui_btn_sure: fgui.GButton = null;

    private ui_newPayPwd: fgui.GTextInput = null;
    private ui_newPayPwd2: fgui.GTextInput = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
    }

    OnLoadCompleted() {
        this.ui_btn_qx.onClick(() => {
            AudioManager.Singleton.play('SetPayPassword', "button");
            this.Hide();
        })
        this.ui_btn_sure.onClick(this.sureSetPassword, this);
        this.fguiComponent.sortingOrder = 9999;
        this.Show();
    }

    public sureSetPassword() {
        AudioManager.Singleton.play('SetPayPassword', "button");
        if (this.ui_newPayPwd.text == "" || this.ui_newPayPwd2.text == "") {
            CommonCtr.instance.ShowTipLabel(LanguageConfig.getLanguageById(12001)); //请输入完整的6位数密码
            return;
        }
        if (this.ui_newPayPwd.text.length < 6 || this.ui_newPayPwd2.text.length < 6) {
            CommonCtr.instance.ShowTipLabel(LanguageConfig.getLanguageById(12001)); //请输入完整的6位数密码
            return;
        }
        if (this.ui_newPayPwd.text != this.ui_newPayPwd2.text) {
            CommonCtr.instance.ShowTipLabel(LanguageConfig.getLanguageById(12002)); //两次输入的密码不一致
            return;
        }
        if (!UIUtil.checkNumber(this.ui_newPayPwd.text)) {
            CommonCtr.instance.ShowTipLabel(LanguageConfig.getLanguageById(12003)); //输入的密码格式不对
            return;
        }
        LobbyViewCtr.instance.cs_changePassword_bk(this.ui_newPayPwd.text);
    }

    public setSuccessfull() {
        CommonCtr.instance.ShowTipLabel(LanguageConfig.getLanguageById(12004)); //设置支付密码成功
        this.Hide();
    }

    Show(): void {
        super.Show();
        this.ui_newPayPwd.text = "";
        this.ui_newPayPwd2.text = "";
    }

    Hide(): void {
        super.Hide();
    }
}