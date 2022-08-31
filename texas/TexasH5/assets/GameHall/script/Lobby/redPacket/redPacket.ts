import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import { sc_extendredinfo } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 推广红包
 */
export default class redPacket extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "redPacketLayer";
    }

    private ui_btn_break: fgui.GButton = null;
    private ui_introduceNode: fgui.GComponent = null;
    private ui_redpacketList: fgui.GList = null;
    private ui_receivegold: fgui.GTextField = null;
    private ui_noreceivegold: fgui.GTextField = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
    }

    allChildCreated() {
        super.allChildCreated();
    }

    OnLoadCompleted() {
        this.ui_btn_break.onClick(() => {
            AudioManager.Singleton.play('redPacket', "button");
            this.Hide();
        })

        this.Show();
    }

    public Show() {
        super.Show();
        this.initData();
    }

    public Hide() {
        super.Hide();
    }

    // 初始化
    public initData() {
        // 初始化介绍
        this.initIntroduce();
        // 初始化列表数据
        this.initListData();
    }

    public initListData() {
        this.ui_redpacketList.removeChildrenToPool();
        let reddata: sc_extendredinfo = LobbyViewCtr.instance.Model.redpacketData;
        let list = reddata.calist;
        console.log("sc_extendredinfo === ", reddata);
        // 设置显示已领取未领取
        this.ui_receivegold.text = "已领取：" + UIUtil.formatNumber100(reddata.receivegold);
        this.ui_noreceivegold.text = "未领取：" + UIUtil.formatNumber100(reddata.NoReceiveGold);
        list.sort((a, b) => {
            return a.IsReceive - b.IsReceive;
        })
        for (let index = 0; index < list.length; index++) {
            let item = this.ui_redpacketList.addItemFromPool().asCom;
            let data = list[index];
            item.getChild("nickname").asTextField.text = data.name + "";
            item.getChild("userid").asTextField.text = data.UserID + "";
            item.getChild("goldnum").asTextField.text = UIUtil.formatNumber100(reddata.gold) + "";
            let isCanLQ: boolean = false;
            let percent: number = Math.floor(data.income * 100 / reddata.agentTarget);
            percent = percent > 100 ? 100 : percent;
            item.getChild("percent").asTextField.text = percent + "%";//UIUtil.formatNumber100(data.income) + "/" + UIUtil.formatNumber100(reddata.agentTarget);
            let progressBar: fgui.GProgressBar = item.getChild("progressBar").asProgress;
            progressBar.value = percent;
            isCanLQ = data.income >= reddata.agentTarget;
            let btn_lq: fgui.GButton = item.getChild("btn_lingqu").asButton;
            item.getChild("statusText").asTextField.visible = data.IsReceive != 0;
            if (data.IsReceive == 0) {
                if (isCanLQ) {
                    btn_lq.clearClick();
                    btn_lq.onClick(() => {
                        this.sendReceiveGold(data.UserID);
                    })
                    btn_lq.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 0.3 * 0.9), cc.scaleTo(0.5, 0.3 * 1.1))));
                } else {
                    btn_lq.node.stopAllActions();
                    btn_lq.scaleX = 0.3;
                    btn_lq.scaleY = 0.3;
                    btn_lq.enabled = false;
                }
            } else {
                btn_lq.clearClick();
                btn_lq.visible = false;
            }

        }
    }

    public initIntroduce() {
        let reddata: sc_extendredinfo = LobbyViewCtr.instance.Model.redpacketData;
        let des = reddata.des;
        let desText: fgui.GTextField = this.ui_introduceNode.getChild("introduceText").asTextField;
        desText.text = des;
    }

    public sendReceiveGold(userid: number) {
        AudioManager.Singleton.play('redPacket', "button");
        let cidx: number = LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr.instance.cs_receiveextendgold(cidx, userid);
    }

    // 领取成功
    public receiveSuccess() {
        CommonCtr.instance.view.ShowTipLabel("領取成功");
        let cidx: number = LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr.instance.cs_extendredinfo(cidx);
    }
}