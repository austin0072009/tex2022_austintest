import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { SceneManager } from "../../../../Script/BaseFrame/SceneManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import LobbyViewCtr from "../LobbyViewCtr";
import { GameCommon } from "../../GameCommon";

/**
 * @description 設置
 */
export default class SettingView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "setting";
    }

    private ui_btn_setBreak: fgui.GButton = null;

    private ui_btn_return: fgui.GButton = null;

    private ui_btn_setLoginPwd: fgui.GButton = null;
    private ui_btn_setPlayPwd: fgui.GButton = null;
    private ui_btn_setaboutme: fgui.GButton = null;
    private ui_btn_setys: fgui.GButton = null;
    private ui_btn_setlanguage: fgui.GButton = null;

    private ui_btn_setmusic: fgui.GButton = null;
    private ui_btn_setSound: fgui.GButton = null;

    private ui_set_ver: fgui.GTextField = null;

    private languageText: fgui.GTextField;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_setBreak.onClick(this.Hide, this);
        this.ui_btn_return.onClick(this.signout, this);
        this.ui_btn_setLoginPwd.onClick(this.showModifyLoginPwd, this);
        this.ui_btn_setPlayPwd.onClick(this.showModifyPlayPwd, this);
        this.ui_btn_setaboutme.onClick(this.showAboutUsView, this);
        this.ui_btn_setys.onClick(this.showPrivacyView, this);
        this.ui_btn_setlanguage.onClick(this.showLanguageView, this);

        this.languageText = this.ui_btn_setlanguage.getChild("n7").asTextField;

        let bool = AudioManager.Singleton.getSoundStatus();
        this.ui_btn_setmusic.selected = bool;
        let soundBool = AudioManager.Singleton.getEffectStatus();
        this.ui_btn_setSound.selected = soundBool;

        this.ui_btn_setmusic.onClick(this.setMusic, this);
        this.ui_btn_setSound.onClick(this.setSound, this);

        this.ui_set_ver.text = BaseFrameNative.VERSION;
    }
    OnLoadCompleted() {
        let index = AppConst.languageType;
        let str = '';
        switch (index) {
            case 1:
                str = "繁體中文";
                break;
            case 2:
                str = "简体中文";
                break;
            case 3:
                str = "";
                break;
            case 4:
                str = "";
                break;
        }
        this.languageText.text = str;
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('SettingView', "button");
        super.Hide();
    }
    private setMusic() {
        let bool = AudioManager.Singleton.getSoundStatus();
        let str = bool ? "close" : "open";
        AudioManager.Singleton.setSoundStatus(str);
        AudioManager.TexasMusicStatus = !bool;
    }
    private setSound() {
        let bool = AudioManager.Singleton.getEffectStatus();
        let str = bool ? "close" : "open";
        AudioManager.Singleton.setEffectStatus(str);
        AudioManager.TexasEffectStatus = !bool;
    }


    /**退出游戲  */
    public signout() {
        AudioManager.Singleton.play('SettingView', "button");
        WebSocketManager.getInstance.DisConnect();
        GameCommon.isAutoLogin = false;
        SceneManager.Singleton.loadScene("gameHall", "login");
    }

    public showModifyLoginPwd() {
        AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr.instance.view.showModifyLoginPwdView();
    }
    public showModifyPlayPwd() {
        AudioManager.Singleton.play('SettingView', "button");
        if (LobbyViewCtr.instance.Model.isSetPayPassword) {
            LobbyViewCtr.instance.view.showModifyPlayPwdView();
        } else {
            LobbyViewCtr.instance.view.showSetPayPasswordView();
        }
    }
    public showAboutUsView() {
        AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr.instance.view.showAboutUsView();
    }
    public showPrivacyView() {
        AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr.instance.view.showPrivacyView();
    }
    public showLanguageView() {
        AudioManager.Singleton.play('SettingView', "button");
        LobbyViewCtr.instance.view.showLanguageView();
    }


    public Show() {
        super.Show();
    }

}