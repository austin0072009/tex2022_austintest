import { AudioManager } from '../../../../Script/BaseFrame/AudioManager';
import { CommonCtr } from '../../../../Script/BaseFrame/CommonCtr';
import ViewBase from '../../../../Script/BaseFrame/ViewBase';
import HttpHelpEx from '../../../../Script/Common/Managers/HttpHelpEx';
import { UIUtil } from '../../../../Script/Common/UIUtil';
import { BaseFrameNative } from '../../../../Script/BaseFrameNative';
import { LoginViewCtr } from '../../Login/LoginViewCtr';
/**
 * @description 基金记录
 */
export default class CExtractRecord extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "ExtractRecord";
    }

    private ui_btn_extractBreak: fgui.GButton = null;
    private ui_extractList: fgui.GList = null;
    private typeDown: fgui.GComboBox = null;

    private changeType: string[] = ["全部", "轉入", "轉出"];
    private selectChangType: string = "全部";
    private recordList: any = null;

    createChildComponents() {
        super.createChildComponents();
        this.ui_extractList.removeChildrenToPool();
        this.fguiComponent.sortingOrder = 9888;
    }

    OnLoadCompleted() {
        this.typeDown = this.fguiComponent.getChild("n49").asComboBox;
        this.typeDown.items = this.changeType;
        this.typeDown.text = this.changeType[0];
        this.typeDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);

        this.ui_btn_extractBreak.onClick(() => {
            AudioManager.Singleton.play('CExtractRecord', "button");
            this.Hide();
        })

        this.Show();
    }

    public Show() {
        super.Show();
        this.selectChangType = this.changeType[0];
        this.getExtractRecordDate();
    }

    public Hide() {
        super.Hide();
    }

    public onChanged() {
        AudioManager.Singleton.play('CExtractRecord', "button");
        this.selectChangType = this.changeType[this.typeDown.selectedIndex];
        this.initExtractRecordList(this.recordList);
    }

    public getExtractRecordDate() {
        let self = this;
        // let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog";
        // let params = {
        //     userid: LoginViewCtr.instance.Model.mPlayerModel.userid,
        //     clubid: LoginViewCtr.instance.Model.cidx
        // }
        // HttpHelpEx.instance.post(url, params).then((res) => {
        //     console.log("---GetFundlog---", res);
        //     if (res.code == 1) {
        //         self.initExtractRecordList(res.data);
        //     } else {
        //         CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        //     }
        // }).catch((err) => {
        //     console.log("---err---", err)
        //     CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        // })

        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog" + `?clubid=${LoginViewCtr.instance.Model.cidx}`;

        HttpHelpEx.instance.get(url)
            .then((res) => {
                console.log("---GetFundlog---", res);
                if (res.code == 1) {
                    self.recordList = res.data;
                    self.initExtractRecordList(res.data);
                } else {
                    CommonCtr.instance.view.ShowTipLabel("获取记录失败");
                }
            })
            .catch(() => {
                CommonCtr.instance.view.ShowTipLabel("获取记录失败");
            })
    }

    public initExtractRecordList(m_list: any) {
        this.ui_extractList.removeChildrenToPool();

        for (let index = 0; index < m_list.length; index++) {
            let data = m_list[index];
            if (this.selectChangType == this.changeType[1] && data.changeType == 1) {
                let item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[1]; //状态
            }
            if (this.selectChangType == this.changeType[2] && data.changeType != 1) {
                let item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[2]; //状态
            }
            if (this.selectChangType == this.changeType[0]) {
                let item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = data.changeType == 1 ? "轉入" : "轉出"; //状态
            }
        }
    }
}