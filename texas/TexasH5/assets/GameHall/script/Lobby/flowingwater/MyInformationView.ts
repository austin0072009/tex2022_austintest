import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { PlayerPrefs, UIUtil } from "../../../../Script/Common/UIUtil";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import { cs_getemaillist, cs_removeEmail, cs_setemailstate, EmailinfoSD, MailTypeEnum, sc_getemaillist, sc_removeEmail, sc_setemailstate } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 我的消息
 */
export default class MyInformationView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "information";
    }

    private ui_btn_waterBreak: fgui.GButton = null;
    private ui_EmailList: fgui.GList = null;
    private ui_emailDetails: fgui.GComponent = null;
    private ui_emailTitle: fgui.GTextField = null;
    private ui_emailContent: fgui.GTextField = null;
    private ui_emailFrom: fgui.GTextField = null;
    private ui_emailTime: fgui.GTextField = null;
    private ui_btnRemoveEmail: fgui.GButton = null;

    private emaillist: EmailinfoSD[] = [];
    private readCnt: number = 0;//已读数
    private readCntUn: number = 0;//未读数
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_waterBreak.onClick(this.Hide, this);
        this.ui_EmailList.itemProvider = this.getListItemResource.bind(this);
        this.ui_EmailList.itemRenderer = this.renderListItem.bind(this);
    }

    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('MyInformationView', "button");
        if (this.ui_emailDetails.visible) {
            this.ui_EmailList.visible = true;
            this.ui_emailDetails.visible = false;
            this.ui_btnRemoveEmail.visible = false;
            LobbyViewCtr.instance.cs_getemaillist(true);
        } else {
            // if (this.readCnt == this.readCntUn) {
            //     LobbyViewCtr.instance.view.setFlowingRead(false);
            // }
            // LobbyViewCtr.instance.cs_getemaillist(false);
            LobbyViewCtr.instance.view.meView.refreshMessageEmail();
            super.Hide();
        }
    }
    public Show() {
        super.Show();
        this.readCntUn = 0;
        this.readCnt = 0;
        this.ui_EmailList.removeChildrenToPool();
        this.emaillist = LobbyViewCtr.instance.Model.emailInfo.emaillist;
        this.ui_EmailList.numItems = this.emaillist.length * 2;
    }

    public getListItemResource(index: number) {
        if (index % 2 == 0) {
            return "ui://Lobby/zjTimeItem";
        }
        return "ui://Lobby/emailList";
    }

    public renderListItem(index: number, item: fgui.GObject) {
        let go = <fgui.GButton>item;
        if (index % 2 == 0) {
            let createTime = this.emaillist[UIUtil.NumberToInt(index / 2)]._time;
            createTime = createTime == null ? "" : createTime;
            go.getChild("n1").asTextField.text = createTime;
        } else {
            go.getChild("emailName").asTextField.text = this.emaillist[UIUtil.NumberToInt(index / 2)].title;
            let content = this.emaillist[UIUtil.NumberToInt(index / 2)].content;
            let conArr = content.split("\r\n");
            content = "";
            conArr.forEach(item => content += item);
            UIUtil.SetLimitTxt(go.getChild("emailIntro").asTextField, content, 60);
            go.getChild("emailIntro").asTextField.text += "...";
            go.getController("type").setSelectedIndex(this.emaillist[UIUtil.NumberToInt(index / 2)]._type - 1);
            let islook = false;
            // if(this.emaillist[UIUtil.NumberToInt(index / 2)]._type == MailTypeEnum.personal){
            //     islook = this.emaillist[UIUtil.NumberToInt(index / 2)].islook;
            // }
            // else{
            let userid = LoginViewCtr.instance.Model.mPlayerModel.userid;
            let tradeno = this.emaillist[UIUtil.NumberToInt(index / 2)].tradeno;
            let lookN = PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0);
            islook = lookN == 0 ? false : true;
            if (LobbyViewCtr.instance.view && !islook) {
                LobbyViewCtr.instance.view.setFlowingRead(true);
                this.readCntUn++;
            }
            // }
            go.getController("read").setSelectedIndex(islook ? 1 : 0);
            go.getChild("buttonOpen").asButton.clearClick();
            go.getChild("buttonOpen").asButton.onClick(() => {
                go.getController("read").setSelectedIndex(1);
                this.ShowEmaiContent(this.emaillist[UIUtil.NumberToInt(index / 2)]);
            });
        }
    }

    public ShowEmaiContent(data: EmailinfoSD) {
        console.log("ShowEmaiContent");
        this.ui_EmailList.visible = false;
        this.ui_emailDetails.visible = true;
        this.ui_btnRemoveEmail.visible = true;
        this.ui_emailTitle.text = data.title;
        this.ui_emailContent.text = data.content;
        this.ui_emailFrom.text = "——" + data.fromUserName;
        this.ui_emailTime.text = data._time;

        //个人邮件标记已读
        // if(data._type == MailTypeEnum.personal)
        // {
        //     let state = new cs_setemailstate();
        //     state.tradeNo = data.tradeno;
        //     state.fn ="cs_setemailstate";
        //     WebSocketManager.getInstance.SendJSON(state,this.sc_setemailstate.bind(this));
        // }else{
        //其他邮件标记已读
        let userid = LoginViewCtr.instance.Model.mPlayerModel.userid;
        let tradeno = data.tradeno;
        if (PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0) == 0) this.readCnt++;
        PlayerPrefs.SetInt("ISLOOK" + userid + "" + tradeno, 1);
        // }

        this.ui_btnRemoveEmail.clearClick();
        this.ui_btnRemoveEmail.onClick(() => {
            this.cs_removeEmail(data.tradeno, data.ToUserId);
        });
    }

    public sc_setemailstate(data: sc_setemailstate) {
        if (data.result == 1) {
            console.error("标记梯度成功！");
            return;
        }
        console.error("标记梯度失败！");
    }

    public cs_removeEmail(tradeNo: string, toUserId: number) {
        let remove = new cs_removeEmail();
        remove.tradeNo = tradeNo;
        remove.ToUserId = toUserId;
        remove.fn = "cs_removeEmail";
        WebSocketManager.getInstance.SendJSON(remove, this.sc_removeEmail.bind(this));
    }

    public sc_removeEmail(data: sc_removeEmail) {
        //-1 邮件不存在  -2系统邮件不可删除。默认保留7天
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("刪除成功！");
            this.Hide();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel("郵件不存在！");
        } else if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel("系統郵件不可刪除，默認保留7天！");
        }
    }
}