import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";

/**
 * @description 關於我們
 */
export default class AboutUsView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "aboutUs";
    }

    private ui_btn_setUsBreak: fgui.GButton = null;


    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_setUsBreak.onClick(this.Hide, this);
        this.fguiComponent.sortingOrder = 9990;

    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('AboutUsView', "button");
        super.Hide();
    }

    public Show() {
        console.log("--- AboutUsView Show ---");
        super.Show();
    }

}