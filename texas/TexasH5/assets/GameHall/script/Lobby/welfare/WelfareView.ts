import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import SlideShow from "../Components/SlideShow";
import { tasklist } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";
import WelfareQuestItem from "./WelfareQuestItem";

/**
 * @description 福利
 */
export default class WelfareView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "welfare";
    }

    private ui_btn_break: fgui.GButton = null;
    private ui_welfaregold: fgui.GTextField = null;
    private ui_btn_welfareaddGold: fgui.GButton = null;
    private ui_welfareList: fgui.GList = null;
    private typeController: fgui.Controller;
    private tasklist: tasklist[] = [];

    public slideShow: SlideShow;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.fguiComponent.sortingOrder = 9000;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_btn_welfareaddGold.onClick(this.showTopupView, this);
        this.typeController = this.fguiComponent.getController("type");
        this.typeController.onChanged(this.conChanged, this);

        this.slideShow = this.getChild("n14").asCom as SlideShow;

        this.ui_welfareList.setVirtual();
        this.ui_welfareList.itemRenderer = this.renderListItem.bind(this);

        this.ui_welfaregold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
    }
    OnLoadCompleted() {
        this.Show();
    }
    /**控制器状态改变 */
    public conChanged() {
        AudioManager.Singleton.play('WelfareView', "button");
        this.handleData();
    }
    Hide() {
        AudioManager.Singleton.play('WelfareView', "button");
        super.Hide();
    }
    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <WelfareQuestItem>obj;
        item.setData(this.tasklist[index]);
    }
    public handleData() {
        let task = LobbyViewCtr.instance.Model.tasklist;
        this.tasklist = [];
        if (this.typeController.selectedIndex == 0) { //超值
            for (let i = 0, len = task.length; i < len; i++) {
                if (task[i].type == 2) {
                    this.tasklist.push(task[i]);
                }
            }
        } else { //新手
            for (let i = 0, len = task.length; i < len; i++) {
                if (task[i].type == 1) {
                    this.tasklist.push(task[i]);
                }
            }
        }
        this.ui_welfareList.numItems = this.tasklist.length;
    }

    public Show() {
        this.ui_welfaregold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        LobbyViewCtr.instance.cs_tasklist();
        super.Show();
    }
    public showTopupView() {
        AudioManager.Singleton.play('WelfareView', "button");
        LobbyViewCtr.instance.view.showTopup();
    }

}