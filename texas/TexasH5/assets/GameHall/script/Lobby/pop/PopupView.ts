import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { notice } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 公告弹窗
 */
export default class PopupView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "pop";
    }

    private ui_btn_close: fgui.GButton = null;
    private ui_title: fgui.GTextField = null;
    private ui_content: fgui.GTextField = null;
    private ui_gloader: fgui.GLoader = null;
    private typeController: fgui.Controller;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_close.onClick(this.Hide, this);
        this.typeController = this.fguiComponent.getController("c1");
    }
    OnLoadCompleted() {
        this.Show();
        this.initData();
    }
    private index = 0;
    private notice: notice[];
    public initData() {
        this.notice = LobbyViewCtr.instance.Model.notice;
        if (this.notice[this.index].PicUrl) {
            this.typeController.setSelectedIndex(1);
            UIUtil.loadImage(this.ui_gloader, this.notice[this.index].PicUrl);
        } else {
            this.typeController.setSelectedIndex(0);
            this.ui_title.text = this.notice[this.index].title;
            this.ui_content.text = this.notice[this.index].content;
        }
    }

    Hide() {
        AudioManager.Singleton.play('PopupView', "button");
        this.index += 1;
        if (this.index > this.notice.length - 1) {
            super.Hide();
        } else {
            this.initData();
        }
    }
}