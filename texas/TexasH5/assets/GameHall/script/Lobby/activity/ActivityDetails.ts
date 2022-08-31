import { AudioManager } from '../../../../Script/BaseFrame/AudioManager';
import ViewBase from '../../../../Script/BaseFrame/ViewBase';
import { UIUtil } from '../../../../Script/Common/UIUtil';
import { AppConst } from '../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst';
import LobbyViewCtr from '../LobbyViewCtr';
/**
 * @description 活动xiangqing
 */
export default class ActivityDetails extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "activityDetails";
    }

    private ui_btn_actbreak: fgui.GButton = null;
    private ui_actgold: fgui.GTextField = null;
    private ui_btn_actaddGold: fgui.GButton = null;
    private ui_acImage: fgui.GLoader = null;
    private ui_acTitle: fgui.GTextField = null;
    private ui_acContent: fgui.GTextField = null;
    private ui_acStartTime: fgui.GTextField = null;
    private ui_acEndTime: fgui.GTextField = null;

    public data = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;

    }

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    public AutoSetGoProperty() { }

    public MyStart(_data: any = null) {
        this.data = _data;
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    public MyStartEx() {
        super.AutoSetGoProperty();
        this.ui_btn_actbreak.onClick(this.HideView, this);
        this.ui_btn_actaddGold.onClick(this.showTopup, this);
        this.Show();
    }

    public Show() {
        this.ui_actgold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        super.Show();
        this.loadContent();

    }

    public Hide(): void {
        super.Hide();
    }

    public HideView() {
        AudioManager.Singleton.play('ActivityDetails', "button");
        this.Hide();
    }

    public showTopup() {
        LobbyViewCtr.instance.view.showTopup();
    }

    private loadContent() {
        if (this.data == null) return;
        //.acType == 1文字，2图片
        if (this.data.acType == 1) {
            this.fguiComponent.getController("acType").setSelectedIndex(0);
            this.ui_acTitle.text = this.data.acTitle;
            this.ui_acContent.text = this.data.acContent;
            this.ui_acStartTime.text = "開始時間：" + this.data.startTime;
            this.ui_acEndTime.text = "結束時間：" + this.data.endTime;

        } else {
            this.fguiComponent.getController("acType").setSelectedIndex(1);
            this.ui_acImage.url = "http://182.61.6.67:81" + this.data.picUrl;

        }
    }

}