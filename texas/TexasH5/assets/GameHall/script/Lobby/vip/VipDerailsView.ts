import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 详情
 * 
 */
export default class VipDerailsView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "vipDerails";
    }

    private ui_btn_derailsBreak: fgui.GButton = null;
    /**积分 */
    private ui_integral1: fgui.GTextField = null;
    private ui_integral2: fgui.GTextField = null;
    private ui_integral3: fgui.GTextField = null;
    private ui_integral4: fgui.GTextField = null;
    private ui_integral5: fgui.GTextField = null;
    private ui_integral6: fgui.GTextField = null;
    private ui_integral7: fgui.GTextField = null;
    private ui_integral8: fgui.GTextField = null;
    private ui_integral9: fgui.GTextField = null;

    /**
     * 免費提款次數
     */
    private ui_free1: fgui.GTextField = null;
    private ui_free2: fgui.GTextField = null;
    private ui_free3: fgui.GTextField = null;
    private ui_free4: fgui.GTextField = null;
    private ui_free5: fgui.GTextField = null;
    private ui_free6: fgui.GTextField = null;
    private ui_free7: fgui.GTextField = null;
    private ui_free8: fgui.GTextField = null;
    private ui_free9: fgui.GTextField = null;

    /**單筆提現金額 */
    private ui_onetx1: fgui.GTextField = null;
    private ui_onetx2: fgui.GTextField = null;
    private ui_onetx3: fgui.GTextField = null;
    private ui_onetx4: fgui.GTextField = null;
    private ui_onetx5: fgui.GTextField = null;
    private ui_onetx6: fgui.GTextField = null;
    private ui_onetx7: fgui.GTextField = null;
    private ui_onetx8: fgui.GTextField = null;
    private ui_onetx9: fgui.GTextField = null;

    /**晉級禮金 */
    private ui_jjgold1: fgui.GTextField = null;
    private ui_jjgold2: fgui.GTextField = null;
    private ui_jjgold3: fgui.GTextField = null;
    private ui_jjgold4: fgui.GTextField = null;
    private ui_jjgold5: fgui.GTextField = null;
    private ui_jjgold6: fgui.GTextField = null;
    private ui_jjgold7: fgui.GTextField = null;
    private ui_jjgold8: fgui.GTextField = null;
    private ui_jjgold9: fgui.GTextField = null;

    /**每月禮金 */
    private ui_mygold1: fgui.GTextField = null;
    private ui_mygold2: fgui.GTextField = null;
    private ui_mygold3: fgui.GTextField = null;
    private ui_mygold4: fgui.GTextField = null;
    private ui_mygold5: fgui.GTextField = null;
    private ui_mygold6: fgui.GTextField = null;
    private ui_mygold7: fgui.GTextField = null;
    private ui_mygold8: fgui.GTextField = null;
    private ui_mygold9: fgui.GTextField = null;


    private ui_viplevelimage: fgui.GLoader = null;
    private ui_viptk: fgui.GLoader = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_derailsBreak.onClick(this.Hide, this);
        NativeMethod.setUrlByLanguage(this.ui_viplevelimage);
        NativeMethod.setUrlByLanguage(this.ui_viptk);
    }
    OnLoadCompleted() {
        this.handleData();
        this.Show();
    }

    public handleData() {
        let vipConfig = LobbyViewCtr.instance.Model.vipConfig;
        if (!vipConfig || vipConfig.UpExps.length <= 0) {
            return;
        }
        for (let i = 0; i < 10; i++) {
            if (i == 0) {
                continue;
            }
            this["ui_integral" + i].text = vipConfig.UpExps[i] + '';
            this["ui_free" + i].text = vipConfig.FreeWithdrawTimes[i] + '';
            this["ui_onetx" + i].text = vipConfig.WithdrawLimit[i] + '';
            this["ui_jjgold" + i].text = vipConfig.UpReward[i] + '';
            this["ui_mygold" + i].text = vipConfig.MonthReward[i] + '';
        }

    }

    Hide() {
        AudioManager.Singleton.play('VipDerailsView', "button");
        super.Hide();
    }

    public Show() {
        super.Show();
    }


}