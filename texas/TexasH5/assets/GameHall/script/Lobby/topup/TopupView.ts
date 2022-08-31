import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";

/**
 * @description 充值
 */
export default class TopupView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "topup";
    }
    /**金币 */
    private ui_gold: fgui.GTextField = null;
    private ui_btn_break: fgui.GButton = null;
    private ui_btn_addGold: fgui.GButton = null;
    private ui_playTree: fgui.GTree = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_playTree.collapseAll();
        // this.ui_playTree.on(fgui.Event.CLICK_ITEM, this.__clickNode, this);
        this.ui_playTree.treeNodeWillExpand = this.renderExpand.bind(this);
        this.ui_btn_break.onClick(this.Hide, this);
    }
    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('TopupView', "button");
        super.Hide();
    }
    private target: fgui.GTreeNode;
    public renderExpand(node: fgui.GTreeNode, expanded: boolean) {
        node._cell.getController('leaf').selectedIndex = expanded ? 1 : 0;
        if (this.target == node) {
            return;
        }
        if (this.target && this.target.expanded) {
            this.target.expanded = !this.target.expanded;
        }
        this.target = node;
    }

    public Show() {
        super.Show();
        AppConst.currentGameId = null;
        this.ui_gold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
    }

    __clickNode(itemObject: fgui.GObject) {
        //this.ui_playTree.collapseAll();
        console.log("--------------", itemObject.treeNode);
    }

}