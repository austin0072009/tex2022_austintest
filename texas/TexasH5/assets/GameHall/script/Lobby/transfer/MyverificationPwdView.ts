import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 支付密码
 */
export default class MyverificationPwdView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "yzTxsqcom";
    }
    private ui_btn_yzzfbreak1: fgui.GButton = null;
    private ui_btn_yzquxiao: fgui.GButton = null;
    private ui_btn_vconfirm: fgui.GButton = null;

    private ui_btn_inputbg: fgui.GLoader = null;

    private ui_pwd0: fgui.GTextInput = null;
    private ui_pwd1: fgui.GTextInput = null;
    private ui_pwd2: fgui.GTextInput = null;
    private ui_pwd3: fgui.GTextInput = null;
    private ui_pwd4: fgui.GTextInput = null;
    private ui_pwd5: fgui.GTextInput = null;
    private ui_inputLabel: fgui.GTextInput = null;

    public inputPwd: string = '';

    private typeController: fgui.Controller;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_yzzfbreak1.onClick(this.HideView, this);
        this.ui_btn_yzquxiao.onClick(this.HideView, this);
        this.ui_btn_inputbg.onClick(this.setFocus, this);
        this.ui_inputLabel.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
        this.ui_inputLabel.node.opacity = 0;
        this.ui_btn_vconfirm.onClick(this.sendConfirm, this);
        this.typeController = this.fguiComponent.getController("c1");
    }

    OnLoadCompleted() {
        this.Show();
    }

    Hide() {
        super.Hide();
    }

    public HideView() {
        AudioManager.Singleton.play('MyverificationPwdView', "button");
        this.Hide();
    }

    /**确认验证密码 */
    public sendConfirm() {
        AudioManager.Singleton.play('MyverificationPwdView', "button");
        if (this.inputPwd.length != 6) {
            CommonCtr.instance.ShowTipLabel("密碼格式不正確");
            return;
        }
        // let contro = this.typeController.selectedIndex;
        // if (contro == 1) {
        //     LobbyViewCtr.instance.cs_changePassword_appbk('', this.inputPwd); //設置
        // } else { //驗證支付密碼
        LobbyViewCtr.instance.cs_enterbank_bk(this.inputPwd); //验证支付密码
        // }
    }

    /**设置支付密码成功 */
    public setPwdSucceed() {
        this.typeController.selectedIndex = 0;
        AppConst.mPlayerModel["UserPassword"] = this.inputPwd;
        this.clean();
        this.ui_inputLabel.requestFocus();
    }
    /**验证支付密码成功 */
    public verificationPwdSucceed() {
        this.Hide();
        LobbyViewCtr.instance.view.showTransferView();
    }


    public setFocus() {
        this.ui_inputLabel.requestFocus();
    }
    public changedText(event) {
        let text = this.ui_inputLabel.text;
        this.inputPwd = text;
        for (let i = 0; i < 6; i++) {
            if (i > text.length) {
                this["ui_pwd" + i].text = '';
            } else {
                this["ui_pwd" + i].text = text[i];
            }

        }
    }

    public Show() {
        // if (!LobbyViewCtr.instance.model.isSetPayPassword) {
        //     this.typeController.selectedIndex = 1;
        // } else {
        this.typeController.selectedIndex = 0;
        // }
        this.clean();
        super.Show();
    }

    public clean() {
        this.inputPwd = '';
        this.ui_inputLabel.text = '';
        for (let i = 0; i < 6; i++) {
            this["ui_pwd" + i].text = '';
        }
    }

    public toTopup() {
        this.Hide();
        LobbyViewCtr.instance.view.showTopup();
    }
}