import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";

/**
 * @description 隱私政策
 */
export default class PrivacyView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "Privacy";
    }

    private ui_btn_setprivacyBreak: fgui.GButton = null;


    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_setprivacyBreak.onClick(this.Hide, this);
        // let label = this.getChild("n24").asCom.getChild("n24").asTextField;
        // label._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.fguiComponent.sortingOrder = 9990;
    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('PrivacyView', "button");
        super.Hide();
    }
    public Show() {
        super.Show();
    }

}