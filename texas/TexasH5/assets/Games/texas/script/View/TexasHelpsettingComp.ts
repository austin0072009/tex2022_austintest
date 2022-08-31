import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TexasLanguage } from "../Model/TexasLanguage";
import FuncSettingPanel from "./FuncSettingPanel";
import TexasUserComp, { UserConnectState } from "./TexasUserComp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TexasHelpsettingComp extends ViewBase {
    public ui_toolbar: fgui.GComponent = null;//设置
    public ui_liebiaoBtn: fgui.GButton = null;
    public ui_btntoolClose: fgui.GButton = null;
    public ui_btnOnlook: fgui.GButton = null;
    public ui_btnCardTip: fgui.GButton = null;
    public ui_btnSet: fgui.GButton = null;
    public ui_btnRecordScore: fgui.GButton = null;
    public ui_btnWaitSeat: fgui.GButton = null;
    public ui_btnExit: fgui.GButton = null;
    public ui_btnHelp: fgui.GButton = null;
    // public ui_btnInsTip:fgui.GButton = null;
    public ui_btnDismiss: fgui.GButton = null;
    public ui_btnJiesuan: fgui.GButton = null;
    public ui_btnDaichu: fgui.GButton = null;

    public ui_settingpanel: fgui.GComponent = null;
    public settingPanel: FuncSettingPanel;
    public ui_CardsIntroductionPanel: fgui.GComponent = null;//牌型提示面板
    public ui_cardTipPanel: fgui.GComponent = null;
    public ui_btn_close_Set: fgui.GButton = null;
    public ui_btnClose_card: fgui.GButton = null;
    public ui_btn_close_Ins: fgui.GButton = null;
    public ui_insTipPanel: fgui.GComponent = null;
    // public ScrollRect ui_insTipScrollView;

    // public ScrollRect ui_TexRuleView;


    public ui_onLookText: fgui.GTextField = null;
    public ui_cardTipText: fgui.GTextField = null;
    public ui_setText: fgui.GTextField = null;
    public ui_insTipText: fgui.GTextField = null;
    public ui_recordScoreText: fgui.GTextField = null;
    public ui_waitSeatText: fgui.GTextField = null;
    public ui_exitText: fgui.GTextField = null;
    public ui_dismissText: fgui.GTextField = null;
    public ui_addRobitTxt: fgui.GTextField = null;
    public ui_paixingTitle: fgui.GTextField = null;
    public ui_bupaiTitle1: fgui.GTextField = null;
    public ui_peilvTitle1: fgui.GTextField = null;
    public ui_bupaiTitle2: fgui.GTextField = null;
    public ui_peilvTitle2: fgui.GTextField = null;
    public ui_peilvTips: fgui.GTextField = null;
    public ui_insTipTitle: fgui.GTextField = null;
    public ui_jiesuanText: fgui.GTextField = null;
    public ui_insTipIcon: fgui.GLoader = null;
    public ui_outGoldText: fgui.GTextField = null;

    public ui_HelpBtn1: fgui.GButton = null;
    public ui_HelpBtn2: fgui.GButton = null;
    public ui_HelpBtn3: fgui.GButton = null;

    public paixingList: fgui.GTextField[];
    public insTipList: fgui.GTextField[];
    public totalTexRuleList: fgui.GTextField[];

    private isOpen = true;
    private settingType: number;
    private onLoadEnd = false;

    public btnHelpPos: cc.Vec3 = null;
    public btnDismissPos: cc.Vec3 = null;

    public isShowing: boolean = false;

    //<=0:默认设置界面,1:功能设置
    public MyStart(_settingType = 0) {
        this.mystart = true;
        this.settingType = _settingType;
        if (this.onLoadEnd) {
            this.MyStartEx();
        }
    }

    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.MyStartEx();
        }

    }
    MyStartEx() {
        if (this.ui_toolbar == null) {
            super.AutoSetGoProperty();
            this.addListener();
        }
        this.InitImage();
        this.InitLanguage();
        this.isOpen = false;
        this.initUI(this.settingType);
        // this.Hide();
        // this.btnHelpPos = cc.v3(this.ui_btnHelp.x, this.ui_btnHelp.y, 0);
        // this.btnDismissPos = cc.v3(this.ui_btnDismiss.x, this.ui_btnDismiss.y, 0);
        this.btnHelpPos = this.ui_btnHelp.node.position;
        this.btnDismissPos = this.ui_btnDismiss.node.position;
        this.UpdateView();
    }

    Show() {
        this.node.active = true;
        super.Show();
        this.UpdateView();
    }
    Hide() {
        super.Hide();
        this.node.active = false;
    }

    AutoSetGoProperty() {

    }

    public InitLanguage() {
        this.ui_onLookText.text = "站起围观"
        this.ui_cardTipText.text = "玩法说明"
        this.ui_setText.text = "游戏设置"
        // this.ui_insTipText.text = "保险说明"
        this.ui_recordScoreText.text = "补充记分"
        this.ui_waitSeatText.text = "申请留座"
        this.ui_exitText.text = "返回大厅"
        this.ui_dismissText.text = "解散牌局"
        this.ui_addRobitTxt.text = "加机器人"
        this.ui_paixingTitle.text = "牌型提示"
        this.ui_bupaiTitle1.text = "补牌"
        this.ui_peilvTitle1.text = "赔率"
        this.ui_bupaiTitle2.text = "补牌"
        this.ui_peilvTitle2.text = "赔率"
        this.ui_peilvTips.text = "以下为背保险赔率"
        this.ui_insTipTitle.text = "保险说明"
        this.ui_jiesuanText.text = "离桌结算"
        this.ui_outGoldText.text = "带出记分"

        this.totalTexRuleList = [];
        // this.totalTexRuleList.AddRange(this.ui_TexRuleView.GetComponentsInChildren<Text>());
        // this.totalTexRuleList =  this.totalTexRuleList.find(item => item.name.indexOf("texRule")>=0);
        for (var i = 0; i < this.totalTexRuleList.length; i++) {
            // this.totalTexRuleList[i].text = LanguageConfig.getLanguageById(1246 + i);//"德州规则"           
        }


        this.paixingList = [];
        // this.paixingList.AddRange(this.ui_cardTipPanel.GetComponentsInChildren<Text>());
        for (var i = 0; i < this.paixingList.length; i++) {
            // this.paixingList[i].text = LanguageConfig.getLanguageById(1315 + i);
        }

        this.insTipList = [];
        // this.insTipList.AddRange(this.ui_insTipScrollView.content.GetComponentsInChildren<Text>());
        for (var i = 0; i < this.insTipList.length && i < 17; i++) {
            // this.insTipList[i].text = LanguageConfig.getLanguageById(1325 + i);
        }
    }
    public InitImage() {
        this.ui_insTipIcon.url = "ui://Texas/baoxianshuoming_2x";// Res.Singleton.SetImageSprite(ui_insTipIcon, "whirl_gaming", "baoxianshuoming_2x" + ToolsEx.GetImageLanguageSuf());
    }
    public initUI(settingType: number) {
        this.ui_liebiaoBtn.visible = true;//(F_TexasViewCtr.instance.Model.openV > 0);
        this.ui_toolbar.visible = true;
        switch (settingType) {
            case 1:
                this.settingPanel = this.ui_settingpanel.node.getComponent(FuncSettingPanel);
                if (this.settingPanel == null) {
                    this.settingPanel = this.ui_settingpanel.node.addComponent(FuncSettingPanel);
                    this.settingPanel.fguiComponent = this.ui_settingpanel;
                    this.ui_settingpanel.node.active = true;
                }
                this.settingPanel.MyStart();
                break;
            default:
                // this.ui_settingpanel.node.getComponent(SettingPanel);
                break;
        }

        this.ui_settingpanel.visible = false;
        this.ui_btnDismiss.visible = (F_TexasViewCtr.instance.Model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid)
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btnClose_card.visible = this.isShowing;
    }

    public addListener() {
        this.ui_liebiaoBtn.clearClick();
        this.ui_liebiaoBtn.onClick(() => {
            this.openToolBar();
        });
        if (this.ui_btntoolClose != null) {
            this.ui_btntoolClose.clearClick();
            this.ui_btntoolClose.onClick(() => {
                if (this.isOpen) { this.openToolBar(); }
            });
        }

        this.ui_btnExit.clearClick();
        this.ui_btnExit.onClick(this.ExitTable);
        this.ui_btnDismiss.clearClick();
        this.ui_btnDismiss.onClick(this.DismissTable);
        // let isManager = LoginViewCtr.instance.Model.mPlayerModel._vlv == 20 || PlayerPrefs.GetString(Const.key_OpenV, string.Empty) == "1";
        // this.ui_btnHelp.visible = this.isManager;
        this.ui_btnHelp.onClick(() => {
            F_TexasViewCtr.instance.cs_enterrobot_tex();
        });

        this.ui_btnSet.onClick(() => {
            this.openToolBar();

            if (this.settingPanel != null) {
                this.settingPanel.Show();
            }

        });

        this.ui_btnCardTip.onClick(() => {
            this.openToolBar();
            this.ui_CardsIntroductionPanel.visible = true;
            this.ui_btnClose_card.visible = true;
            this.ui_CardsIntroductionPanel.node.runAction(cc.moveTo(0.2, cc.v2(0, this.ui_CardsIntroductionPanel.node.y)));
            this.isShowing = true;
        });

        this.ui_btnClose_card.onClick(() => {
            this.ui_btnClose_card.visible = false;
            this.isShowing = false;
            this.ui_CardsIntroductionPanel.node.runAction(cc.moveTo(0.2, cc.v2(-this.ui_CardsIntroductionPanel.width, this.ui_CardsIntroductionPanel.node.y)));// DoTweenEx.DOLocalMoveX(, -ui_CardsIntroductionPanel.sizeDelta.x, 0.5f);
        });
        this.ui_HelpBtn1.getController("isOn").setSelectedIndex(1);
        this.ui_HelpBtn1.onClick(() => {
            this.setHelpType(1);
            this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(0);
        });
        this.ui_HelpBtn2.onClick(() => {
            this.setHelpType(2);
            this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(1);
        });
        this.ui_HelpBtn3.onClick(() => {
            this.setHelpType(3);
            this.ui_CardsIntroductionPanel.getController("type").setSelectedIndex(2);
        });

        this.ui_btnRecordScore.onClick(() => {
            //补充记分
            if (this.isCanAddGold()) {
                this.openToolBar();
                F_TexasViewCtr.instance.view.ShowUIAddGoldPanel();
            }
        });

        this.ui_btnOnlook.onClick(() => {
            this.openToolBar();
            F_TexasViewCtr.instance.cs_situpkeep_tex(false);
        });

        this.ui_btnWaitSeat.onClick(() => {
            this.openToolBar();
            F_TexasViewCtr.instance.cs_situpkeep_tex(true);
        });

        this.ui_btnJiesuan.onClick(() => {
            this.openToolBar();

            F_TexasViewCtr.instance.view.tipView.ShowTip(TexasLanguage.getLanguageById(2277), () => {//确认离桌结算?
                F_TexasViewCtr.instance.cs_advancesettle_tex();
            },
                () => { });
        });

        // this.ui_btnInsTip.onClick(() =>
        // {
        //     this.openToolBar();
        //     this.ui_insTipPanel.visible = true;
        // });

        this.ui_btn_close_Ins.onClick(() => {
            this.ui_insTipPanel.visible = false;
        });

        this.ui_btnDaichu.onClick(() => {
            this.openToolBar();
            F_TexasViewCtr.instance.view.ShowUIOutGoldPanel();
        });

    }
    public openToolBar() {
        this.isOpen = !this.isOpen;
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btntoolClose.visible = this.isOpen;
        if (this.isOpen) this.UpdateView();
    }

    // 关闭界面
    public closeShowView() {
        this.isOpen = false;
        this.ui_toolbar.visible = this.isOpen;
        this.ui_btntoolClose.visible = this.isOpen;
        if (this.isOpen) this.UpdateView();
    }

    public ExitTable() {
        F_TexasViewCtr.instance.view.tipView.ShowTip(TexasLanguage.getLanguageById(1686), () => {
            F_TexasViewCtr.instance.cs_applyexittable_tex(null);
        },
            () => { });//是否离开游戏

    }


    public DismissTable() {
        F_TexasViewCtr.instance.view.tipView.ShowTip(TexasLanguage.getLanguageById(5005), () => {
            F_TexasViewCtr.instance.cs_dismisstable_tex(null);
        },
            () => { });//是否解散牌局 
    }

    public removeListener() {
        this.ui_liebiaoBtn.clearClick();
        this.ui_btnExit.clearClick();
        this.ui_btnHelp.clearClick();
        this.ui_btnSet.clearClick();
        this.ui_btnDismiss.clearClick();
        this.ui_btn_close_Set.clearClick();
    }

    public onDestroy() {
        this.removeListener();
    }

    public UpdateView() {
        this.UpdateStateRecordScore();
        this.UpdateStateWaitSeat();
        this.UpdateStateOnLook();
        this.UpdateStateJiesuan();
        this.UpdateStateDaichu();
        this.updateBtnShow();
    }

    // 更新按钮显示
    public updateBtnShow() {
        this.ui_btnHelp.visible = true;
        this.ui_btnDismiss.visible = true;
        let lv = AppConst.mPlayerModel.lv;
        console.log("lv ===== ", lv);
        if (lv == 19) { // 只有解散牌局按钮
            this.ui_btnHelp.visible = false;
            // this.ui_btnDismiss.setPosition(this.btnHelpPos.x, this.btnHelpPos.y);
            this.ui_btnDismiss.node.position = this.btnHelpPos;
        } else if (lv == 20) { // 解散牌局和加机器人按钮
            // this.ui_btnHelp.setPosition(this.btnHelpPos.x, this.btnHelpPos.y);
            // this.ui_btnDismiss.setPosition(this.btnDismissPos.x, this.btnDismissPos.y);
            this.ui_btnHelp.node.position = this.btnHelpPos;
            this.ui_btnDismiss.node.position = this.btnDismissPos;
        } else {
            this.ui_btnHelp.visible = false;
            this.ui_btnDismiss.visible = false;
        }
    }

    public isCanJiesuan(): boolean {
        return F_TexasViewCtr.instance.Model.IsSupper && !F_TexasViewCtr.instance.Model.IsSettle;
    }
    public UpdateStateJiesuan() {
        this.SetButtonEnable(this.ui_btnJiesuan, true)//this.isCanJiesuan());
    }
    //申请留座
    public UpdateStateWaitSeat() {
        this.SetButtonEnable(this.ui_btnWaitSeat, this.isCanSitup());
    }

    public UpdateStateRecordScore() {
        this.SetButtonEnable(this.ui_btnRecordScore, this.isCanAddGold());
    }

    //带出
    public UpdateStateDaichu() {
        this.SetButtonEnable(this.ui_btnDaichu, this.isCanOutGold());
    }

    private SetButtonEnable(btn: fgui.GButton, isEnable: boolean) {
        btn.enabled = isEnable;
        let _img: fgui.GLoader = btn._children[0].asLoader;
        if (_img == null) return;
        if (isEnable) {
            _img.color = cc.Color.WHITE;
        }
        else {
            _img.color = cc.Color.GRAY;
        }

        if (btn._children.length > 0) {
            let txt = btn._children[1];// UIGradient txt = btn.transform.GetComponentInChildren<UIGradient>();

            if (txt != null) {
                txt.enabled = isEnable;
            }
        }
    }

    private isCanAddGold(): boolean {
        return F_TexasViewCtr.instance.view.IsCanAddGold();
    }

    private isCanOutGold(): boolean {
        return F_TexasViewCtr.instance.view.IsCanOutGold();
    }

    private isCanTakeGold(): boolean {
        return !F_TexasViewCtr.instance.Model.isGaming && F_TexasViewCtr.instance.view._bftable.myUser.serverpos > 0 && F_TexasViewCtr.instance.view.IsSelfWatch() && F_TexasViewCtr.instance.view.IsSelfWaitToTakeIn(); /* && F_TexasViewCtr.instance.view.IsSelfWatch()*/;//游戏结束之后，也可以带入           
    }

    private isCanSitup(): boolean {
        if (F_TexasViewCtr.instance.view.IsSelfWatch() || F_TexasViewCtr.instance.view.IsSelfWaitToTakeIn()) {
            return false;
        }
        else {
            let myUser: TexasUserComp = F_TexasViewCtr.instance.view._bftable.myUser;
            return myUser.IsPlaying() && myUser.isGiveUp && myUser.userConnectState != UserConnectState.keepSeat;
        }
    }

    //站起围观
    public UpdateStateOnLook() {
        this.SetButtonEnable(this.ui_btnOnlook, this.isCanOnLook());
    }

    private isCanOnLook(): boolean {
        return true;
        // if (F_TexasViewCtr.instance.view._bftable.myUser.userConnectState == UserConnectState.keepSeat
        //     || (F_TexasViewCtr.instance.view._bftable.myUser.isGiveUp && !F_TexasViewCtr.instance.view.IsSelfWatch() && !F_TexasViewCtr.instance.view.IsSelfWaitToTakeIn()))
        // {
        //     return true;
        // }
        // else
        // {
        //     return false;
        // }
    }

    private setHelpType(type: number) {
        this.ui_HelpBtn1.getController("isOn").setSelectedIndex(0);
        this.ui_HelpBtn2.getController("isOn").setSelectedIndex(0);
        this.ui_HelpBtn3.getController("isOn").setSelectedIndex(0);
        switch (type) {
            case 1:
                this.ui_paixingTitle.text = TexasLanguage.getLanguageById(1211);//牌型提示
                this.ui_HelpBtn1.getController("isOn").setSelectedIndex(1);
                break;
            case 2:
                this.ui_paixingTitle.text = "基本玩法";
                this.ui_HelpBtn2.getController("isOn").setSelectedIndex(1);
                break;
            case 3:
                this.ui_paixingTitle.text = TexasLanguage.getLanguageById(1724);//保险说明
                this.ui_HelpBtn3.getController("isOn").setSelectedIndex(1);
                break;
        }



    }
}