import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 转账
 */
export default class TransferView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "transfer";
    }
    /**金币 */
    private ui_gold: fgui.GTextField = null;
    private ui_btn_break: fgui.GButton = null;
    private ui_btn_addGold: fgui.GButton = null;

    private ui_sendId: fgui.GTextInput = null;
    private ui_sendGold: fgui.GTextInput = null;
    private ui_btn_send: fgui.GButton = null;
    private ui_btn_Max: fgui.GButton = null;
    private ui_btn_checkName: fgui.GButton = null;
    private ui_slider: fgui.GSlider = null;

    private ui_correctID: fgui.GButton = null;

    private ui_transferTip: fgui.GComponent = null;

    private isClickName: boolean;
    private nickname: string;
    private ui_playId: fgui.GRichTextField = null;
    private ui_playname: fgui.GRichTextField = null;
    private ui_tipgold: fgui.GTextField = null;
    private ui_btn_tipqx: fgui.GButton = null;
    private ui_btn_tipqr: fgui.GButton = null;
    private userid: number;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_slider.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this.ui_btn_Max.onClick(this.toMax, this);
        this.ui_btn_send.onClick(this.send, this);
        this.ui_btn_checkName.onClick(this.checkName, this);
        this.ui_btn_addGold.onClick(this.toTopup, this);

        this.ui_btn_tipqx.onClick(this.hideTip, this);
        this.ui_btn_tipqr.onClick(this.sendgoldtrade, this);

        this.ui_sendGold.on(fgui.Event.TEXT_CHANGE, this.goldTextChange, this);
    }

    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('TransferView', "button");
        super.Hide();
    }
    public Show() {
        super.Show();
        cc.sys.localStorage.setItem("txverification_pwd", Date.now() + '');
        this.ui_btn_send.enabled = false;
        this.ui_correctID.visible = false;
        this.ui_sendId.text = '';
        this.ui_sendGold.text = '';
        let gold = UIUtil.formatNumber(AppConst.mPlayerModel.gold);
        this.updateGold();
        this.ui_slider.max = gold >= 10000 ? 10000 : gold;
        this.isClickName = false;

        // 初始化滑动条
        this.ui_slider.value = 0;
    }

    public onChanged() {
        let val = Math.floor(this.ui_slider.value);
        this.ui_slider.value = val;
        this.ui_sendGold.text = val + '';
        this.ui_btn_send.enabled = val > 0;
    }

    public toMax() {
        AudioManager.Singleton.play('TransferView', "button");
        let max = this.ui_slider.max;
        this.ui_slider.value = max;
        this.ui_sendGold.text = max + '';
        this.goldTextChange(null);
    }

    public goldTextChange(event) {
        let str = +this.ui_sendGold.text;
        this.ui_sendGold.text = str + '';
        if (this.ui_sendId.text.length > 0 && this.ui_sendGold.text.length > 0) {
            this.ui_btn_send.enabled = Number(this.ui_sendGold.text) > 0;
        }
    }

    /**赠送金币 */
    public send() {
        AudioManager.Singleton.play('TransferView', "button");
        let gold = +this.ui_sendGold.text;
        let userId = +this.ui_sendId.text;
        if (gold <= 0 || !userId) {
            CommonCtr.instance.ShowTipLabel("请检查输入参数");
            return;
        }
        if (UIUtil.formatNumber(AppConst.mPlayerModel.gold) < gold) {
            CommonCtr.instance.ShowTipLabel("金币不足");
            return;
        }
        if (gold > 10000) {
            CommonCtr.instance.ShowTipLabel("單次轉賬限額10000");
            return;
        }
        if (!this.isClickName) {
            CommonCtr.instance.ShowTipLabel("請先檢查接收人ID是否正確");
            return;
        }
        if (this.userid && this.userid != userId) {
            this.ui_correctID.visible = false;
            CommonCtr.instance.ShowTipLabel("請先檢測用户ID");
            return;
        }
        this.userid = userId;
        this.showTip();
    }

    public updateGold() {
        let gold = UIUtil.formatNumber(AppConst.mPlayerModel.gold);
        this.ui_gold.text = gold + '';
        this.ui_sendGold.text = "";
        this.ui_slider.max = gold > 10000 ? 10000 : gold;
        this.ui_transferTip.visible = false;
    }

    /**確認 */
    public showTip() {
        this.ui_transferTip.visible = true;
        let gold = +this.ui_sendGold.text;
        let userId = this.ui_sendId.text;
        this.ui_playId.setVar("id", userId).flushVars();
        this.ui_playname.setVar("name", this.nickname).flushVars();
        this.ui_tipgold.text = gold + '';
    }
    public hideTip() {
        AudioManager.Singleton.play('TransferView', "button");
        this.ui_transferTip.visible = false;
    }
    /**發送轉賬 */
    public sendgoldtrade() {
        AudioManager.Singleton.play('TransferView', "button");
        let gold = +this.ui_sendGold.text;
        let userId = +this.ui_sendId.text;
        gold = gold * 100;
        LobbyViewCtr.instance.cs_sendgoldtrade(userId, gold);
        this.ui_transferTip.visible = false;
    }

    /**發送再次驗證 */
    public sendDealgoldtrade() {
        let gold = +this.ui_sendGold.text;
        let userId = +this.ui_sendId.text;
        let pwd = LobbyViewCtr.instance.view.verificationPwdView.inputPwd;
        gold = gold * 100;
        LobbyViewCtr.instance.cs_dealgoldtrade(userId, gold, pwd);
    }



    /**检测用户名 */
    public checkName() {
        AudioManager.Singleton.play('TransferView', "button");
        let userId = +this.ui_sendId.text;
        if (!userId) {
            CommonCtr.instance.ShowTipLabel("请输入正确的ID");
            return;
        }
        if (isNaN(userId)) {
            CommonCtr.instance.ShowTipLabel("请输入正确的ID");
            return;
        }
        if (userId == AppConst.mPlayerModel.userid) {
            CommonCtr.instance.ShowTipLabel("请其他人的ID");
            return;
        }
        LobbyViewCtr.instance.cs_searchgoldornickname(userId);
    }

    public showCorrectGreen(bool: boolean, name?: string) {
        this.userid = +this.ui_sendId.text;
        if (bool) {
            this.isClickName = true;
        }
        name && (this.nickname = name);
        this.ui_correctID.visible = true;
        this.ui_correctID.selected = !bool;
        if (this.ui_sendGold.text.length > 0) {
            this.ui_btn_send.enabled = true;
        }
    }





    public toTopup() {
        this.Hide();
        LobbyViewCtr.instance.view.showTopup();
    }
}