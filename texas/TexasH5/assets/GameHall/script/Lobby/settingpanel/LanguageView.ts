import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { SceneManager } from "../../../../Script/BaseFrame/SceneManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { GameCommon } from "../../GameCommon";

/**
 * @description 語言
 */
export default class LanguageView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "setLanguage";
    }

    private ui_btn_closeLanguage: fgui.GButton = null;
    private ui_btn_confirmLanguage: fgui.GButton = null;
    private ui_btn_cancelLanguage: fgui.GButton = null;
    private languageController: fgui.Controller;
    private ui_confirmsetLanguage: fgui.GComponent = null;

    /**語言 */
    private ui_btn_ftzw: fgui.GButton = null;
    private ui_btn_jtzw: fgui.GButton = null;
    private ui_btn_yinyu: fgui.GButton = null;
    private ui_btn_ry: fgui.GButton = null;
    private ui_yuyanque: fgui.GRichTextField = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_closeLanguage.onClick(this.Hide, this);
        this.ui_btn_cancelLanguage.onClick(this.canceLanguage, this);
        this.ui_btn_confirmLanguage.onClick(this.changedLanguage, this);
        this.languageController = this.fguiComponent.getController("type");
        this.languageController.onChanged(this.languageChanged, this);
    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('LanguageView', "button");
        super.Hide();
    }
    public languageChanged() {
        AudioManager.Singleton.play('LanguageView', "button");
        let index = this.languageController.selectedIndex;
        switch (AppConst.languageType) {
            case 1:
                this.ui_yuyanque.setVar("1", this.ui_btn_ftzw.title).flushVars();
                break;
            case 2:
                this.ui_yuyanque.setVar("1", this.ui_btn_jtzw.title).flushVars();
                break;
            case 3:
                this.ui_yuyanque.setVar("1", this.ui_btn_yinyu.title).flushVars();
                break;
            case 4:
                this.ui_yuyanque.setVar("1", this.ui_btn_ry.title).flushVars();
                break;
        }

        switch (index) {
            case 0:
                break;
            case 1:
                this.ui_yuyanque.setVar("2", this.ui_btn_ftzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 2:
                this.ui_yuyanque.setVar("2", this.ui_btn_jtzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 3:
                this.ui_yuyanque.setVar("2", this.ui_btn_yinyu.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 4:
                this.ui_yuyanque.setVar("2", this.ui_btn_ry.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
        }
    }

    public canceLanguage() {
        AudioManager.Singleton.play('LanguageView', "button");
        this.ui_confirmsetLanguage.visible = false;
        this.languageController.selectedIndex = 0;
    }
    public changedLanguage() {
        AudioManager.Singleton.play('LanguageView', "button");
        let index = this.languageController.selectedIndex;
        this.ui_confirmsetLanguage.visible = false;
        if (AppConst.languageType == index) { //切換相同的語言
            return;
        }
        if (index == 3 || index == 4) {
            CommonCtr.instance.view.ShowTipLabel("暫無相關語言");
            return;
        }
        AppConst.languageType = index;
        cc.sys.localStorage.setItem("languageType", AppConst.languageType + '');
        fgui.UIPackage.removePackage(this.packageName);
        // GameCommon.loadScene("gameHall", "lobby");
        this.signout();
    }

    /**退出游戲  */
    public signout() {
        WebSocketManager.getInstance.DisConnect();
        GameCommon.isAutoLogin = false;
        SceneManager.Singleton.loadScene("gameHall", "login");
    }

    public Show() {
        super.Show();
    }

}