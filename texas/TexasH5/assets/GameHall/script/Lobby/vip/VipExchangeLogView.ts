import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import NativeMethod from "../../NativeMethod";

/**
 * @description vip 兑换记录
 * 
 */
export default class VipExchangeLogView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "ExchangeLog";
    }

    private ui_btn_exchangeBreak: fgui.GButton = null;
    private ui_exLogList: fgui.GList = null;
    private ui_changeLog: fgui.GLoader = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_exchangeBreak.onClick(this.Hide, this);

        this.ui_exLogList.setVirtual();
        this.ui_exLogList.itemRenderer = this.itemRender.bind(this);

        NativeMethod.setUrlByLanguage(this.ui_changeLog);
    }
    OnLoadCompleted() {
        this.Show();
    }

    Hide() {
        AudioManager.Singleton.play('VipExchangeLogView', "button");
        super.Hide();
    }

    public itemRender(index: number, obj: fgui.GObject) {
        let com = <fgui.GComponent>obj;
        let name = com.getChild("name").asTextField;
        let order = com.getChild("order").asTextField;
        let time = com.getChild("time").asTextField;
        let souce = com.getChild("souce").asTextField;
        let state = com.getChild("state").asTextField;

        name.text = this.orderListData[index].itemName;
        order.setVar("order", this.orderListData[index].orderNum).flushVars();
        time.setVar("time", this.orderListData[index].creatDate).flushVars();
        souce.setVar("jf", this.orderListData[index].itemScores + '').flushVars();
        state.text = this.orderListData[index].status;
    }

    public Show() {
        super.Show();
        this.getitemOrderLog();
    }

    /**記錄數據 */
    private orderListData: { itemName: string, orderNum: string, itemScores: number, status: string, creatDate: string }[] = [];

    public getitemOrderLog() {
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Getitemorderlog" + `?userid=${AppConst.mPlayerModel.userid}`;

        HttpHelpEx.instance.get(url)
            .then((res) => {
                cc.log("兑换记录----------", res);
                if (res.code == 1) {
                    this.orderListData = res.data.data;
                    this.ui_exLogList.numItems = this.orderListData.length;
                }
            })
            .catch(() => {
                CommonCtr.instance.ShowTipLabel("獲取兌換記錄失敗");
            })

    }


}