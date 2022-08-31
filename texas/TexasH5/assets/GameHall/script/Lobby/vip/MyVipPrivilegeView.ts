import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 特權
 * 
 */
export default class MyVipPrivilegeView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "vipwin";
    }

    private ui_btn_viptqBreak: fgui.GButton = null;
    private ui_btn_service1: fgui.GButton = null;

    private ui_btn_vipshop: fgui.GButton = null;
    private ui_vipLevel: fgui.GTextField = null;
    private ui_userName: fgui.GTextField = null;
    /**经验 */
    private ui_Experience: fgui.GTextField = null;
    /**积分 */
    private ui_Integral: fgui.GTextField = null;
    /**vip詳情 */
    private ui_btn_vipderails: fgui.GButton = null;
    /**頭像 */
    private headLoader: fgui.GLoader;

    private levelController: fgui.Controller;
    /**头像框 */
    private ui_headframe: fgui.GLoader = null;

    /**晋级礼金 */
    public ui_btn_jiniji: fgui.GButton = null;
    /**每月礼金 */
    public ui_btn_mylj: fgui.GButton = null;
    /**每日免费提现次数 */
    private ui_freeTxGold: fgui.GTextField = null;
    /**单笔提现金额 */
    private ui_oneTxGold: fgui.GTextField = null;
    /**晋级礼金 */
    private ui_PromotionGold: fgui.GTextField = null;
    /**每月礼金 */
    private ui_monthlyGold: fgui.GTextField = null;
    /**vip折扣 */
    private ui_discount: fgui.GTextField = null;


    private ui_viptq: fgui.GLoader = null;
    private ui_dqvipzx: fgui.GLoader = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_viptqBreak.onClick(this.Hide, this);
        this.ui_btn_service1.onClick(() => {
            UIUtil.kefuFunction(LobbyViewCtr.instance.view.openWebsite.bind(LobbyViewCtr.instance.view));
        })
        this.headLoader = this.getChild("head.n0").asLoader;
        this.levelController = this.fguiComponent.getController("level");

        this.ui_btn_vipshop.onClick(this.showShoppingView, this);
        this.ui_btn_vipderails.onClick(this.showVipderailsView, this);

        this.ui_btn_jiniji.onClick(this.receiveJinji, this);
        this.ui_btn_mylj.onClick(this.receiveMylj, this);

        NativeMethod.setUrlByLanguage(this.ui_viptq);
        NativeMethod.setUrlByLanguage(this.ui_dqvipzx);
    }


    OnLoadCompleted() {
        this.Show();
    }

    public setData() {
        let play = AppConst.mPlayerModel;
        this.ui_userName.text = play._n;
        UIUtil.loadImage(this.headLoader, play.wechat.wicon);
        if (AppConst.mPlayerModel["headFrame"]) {
            UIUtil.loadImage(this.ui_headframe, AppConst.mPlayerModel["headFrame"]);
        }
    }

    /**获取的 vip 信息 */
    public handleData() {
        let model = LobbyViewCtr.instance.Model;
        LobbyViewCtr.instance.view.GetLev(model.vipInfo.currExp);
        let lv = model.vipLevel;
        this.ui_vipLevel.setVar("level", lv + '').flushVars();
        this.levelController.setSelectedIndex(lv);

        this.ui_Experience.setVar("exp", model.vipInfo.currExp + '').flushVars();
        this.ui_Integral.setVar("inter", model.vipInfo.currScore + '').flushVars();
        if (model.vipInfo.UpAwardStatus == 0) {
            this.ui_btn_jiniji.getController("color").setSelectedIndex(1);
            this.ui_btn_jiniji.enabled = true;
        } else {
            this.ui_btn_jiniji.getController("color").setSelectedIndex(0);
            this.ui_btn_jiniji.enabled = false;
        }
        if (model.vipInfo.MonthAwardStatus == 0) {
            this.ui_btn_mylj.getController("color").setSelectedIndex(1);
            this.ui_btn_mylj.enabled = true;
        } else {
            this.ui_btn_mylj.getController("color").setSelectedIndex(0);
            this.ui_btn_mylj.enabled = false;
        }
    }

    public setbtnjiniji() {
        this.ui_btn_jiniji.enabled = false;
        this.ui_btn_jiniji.getController("color").setSelectedIndex(0);
    }
    public setbtnmylj() {
        this.ui_btn_mylj.enabled = false;
        this.ui_btn_mylj.getController("color").setSelectedIndex(0);
    }

    /**领取晋级 */
    public receiveJinji() {
        LobbyViewCtr.instance.cs_receiveupaward();
    }
    /**领取每月 */
    public receiveMylj() {
        LobbyViewCtr.instance.cs_receivemonthaward();
    }

    /**根據配置顯示 vip 數據 */
    public handleDataByConfig() {
        let vipConfig = LobbyViewCtr.instance.Model.vipConfig;
        let lv = LobbyViewCtr.instance.Model.vipLevel;

        this.ui_freeTxGold.text = vipConfig.FreeWithdrawTimes[lv] + '';
        this.ui_oneTxGold.text = vipConfig.WithdrawLimit[lv] + '';
        this.ui_PromotionGold.text = vipConfig.UpReward[lv] + '';
        this.ui_monthlyGold.text = vipConfig.MonthReward[lv] + '';

        if (vipConfig.Discount[lv] == 0) {
            this.ui_discount.setVar("zk", '无').flushVars();
            this.ui_discount.setVar("z", '').flushVars();
        } else {
            this.ui_discount.setVar("zk", vipConfig.Discount[lv] + '').flushVars();
            this.ui_discount.setVar("z", '折').flushVars();
        }

    }




    Hide() {
        AudioManager.Singleton.play('MyVipPrivilegeView', "button");
        super.Hide();
    }

    public showShoppingView() {
        LobbyViewCtr.instance.view.showVipShoppingView();
    }
    public showVipderailsView() {
        LobbyViewCtr.instance.view.showVipDerailsView();
    }

    public Show() {
        super.Show();
        this.setData();
        this.handleData();
        this.handleDataByConfig();
    }
}