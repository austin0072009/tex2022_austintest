import { CommonPosValSD } from "../../../../Script/BaseFrame/cs_base";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TexasLanguage } from "../Model/TexasLanguage";
import { sc_tjackpotLog, PotUserLog } from "../Model/TexasNetData";

export default class JackpotComp extends ViewBase {
    public ui_btnClose_jackpot: fgui.GButton = null;
    public ui_panels: fgui.GComponent = null;
    private logList: sc_tjackpotLog;

    // public ui_allJackpot:fgui.GComponent = null;
    public ui_rewardList: fgui.GList = null;
    public ui_curJackpot: fgui.GComponent = null;
    // public ui_txtTitleCurJackpot:fgui.GTextField = null;
    public ui_txtObtain: fgui.GTextField = null;
    public ui_scoreCell: fgui.GComponent = null;
    public ui_scoreList: fgui.GList = null;

    public ui_titleText: fgui.GTextField = null;
    public ui_jczlLabel: fgui.GTextField = null;
    public ui_jczlLabel_h: fgui.GTextField = null;
    public ui_jcLabel: fgui.GTextField = null;
    public ui_jcLabel_h: fgui.GTextField = null;
    public ui_jcjlLabel: fgui.GTextField = null;
    public ui_jcjlLabel_h: fgui.GTextField = null;
    public ui_shedingTitle: fgui.GTextField = null;
    public ui_type1Per: fgui.GTextField = null;
    public ui_type2Per: fgui.GTextField = null;
    public ui_type3Per: fgui.GTextField = null;
    public ui_txtDesc: fgui.GTextField = null;
    public ui_curJcjlTxt: fgui.GTextField = null;
    public ui_panel1: fgui.GComponent = null;
    public ui_panel2: fgui.GComponent = null;
    public ui_panel3: fgui.GComponent = null;

    public pageIndex = 0;
    /// <summary>
    /// 6个底皮对应的奖池 
    /// </summary>
    public base2pot: CommonPosValSD[];
    /// <summary>
    /// 最大赢家
    /// </summary>
    public max: PotUserLog;
    /// <summary>
    /// 最近日志
    /// </summary>
    public plog: PotUserLog[];
    private pageToggles: fgui.GButton[];
    /// <summary>
    /// 初始化
    /// </summary>
    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }
    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }
    AutoSetGoProperty() { }

    public MyStartEx() {
        super.AutoSetGoProperty();
        this.InitLanguage();
        this.Init();
        this.InitEvents();
        this.Show();
    }
    public InitLanguage() {
        // this.ui_titleText.text = "奖池";
        this.ui_jczlLabel.text = "奖池总览";
        this.ui_jczlLabel_h.text = "奖池总览";
        this.ui_jcLabel.text = "奖池";
        this.ui_jcLabel_h.text = "奖池";
        this.ui_jcjlLabel.text = "奖池记录";
        this.ui_jcjlLabel_h.text = "奖池记录";
        this.ui_shedingTitle.text = "各级别奖池奖励设定";
        this.ui_type1Per.text = "获奖比例";
        this.ui_type2Per.text = "获奖比例";
        this.ui_type3Per.text = "获奖比例";
        this.ui_txtDesc.text = "计入数额默认为1大盲(1大盲封顶)";
        this.ui_curJcjlTxt.text = "当前奖池奖励记录";
    }
    public Init() {
        this.ui_scoreCell.visible = false;
        this.base2pot = [];
        this.plog = [];
        this.pageToggles = [];
    }

    private InitEvents() {
        for (var i = 1; i < 4; i++) {
            let t = this.getChild("btntype" + i).asButton;
            if (t != null) {
                this.pageToggles.push(t);
                let tempIndex = i;
                t.onClick(() => {
                    this.SetGroupIsOn(t, !this.GetGroupIsOn(t));
                    this.SetToggle(t, this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) {
                        this.SelectPage(tempIndex);
                    }
                    else {

                    }
                }, false);
                this.SetGroupIsOn(t, i == 0);
                this.SetToggle(t, this.GetGroupIsOn(t));
            }
        }

        this.ui_btnClose_jackpot.onClick(() => {
            this.Hide();
        });
    }

    public SetToggle(t: fgui.GButton, isOn: boolean) {

    }

    private userPos = 0;

    public Show() {
        this.node.active = true;
        super.Show();
        this.TogglePage(0);
    }

    public Hide() {
        super.Hide();
        this.logList = null;
        this.base2pot = [];
        this.plog = [];
        this.max = null;
        this.node.active = false;
    }
    public TogglePage(pageIndex: number) {
        this.SetGroupIsOn(this.pageToggles[pageIndex], true);
    }
    public SelectPage(pageIndex: number) {
        this.pageIndex = pageIndex;
        for (var i = 1; i < 4; i++) {
            let panel: fgui.GComponent = this.getChild("panel" + i);
            panel.visible = (i == pageIndex);
        }

        this.UpdatePage(pageIndex);
    }

    public UpdatePage(pageIndex: number) {
        if (pageIndex == 1) {
            this.UpdateAllJackpot();
        }
        else if (pageIndex == 2) {
            this.UpdateCurJackpot();
        }
        else {
            this.UpdateScorePanel();
        }
    }

    public GetAllJackpot(): number {
        let allJackpot = 0;
        if (this.base2pot != null) {
            this.base2pot.forEach(item => {
                allJackpot += UIUtil.NumberToInt(item.val);
            });
        }

        return allJackpot;
    }

    public GetJackpot(dipi: number): number {
        let value = 0;
        if (this.base2pot != null) {
            this.base2pot.forEach(item => {
                if (item.pos == dipi) {
                    value = UIUtil.NumberToInt(item.val);
                }
            });
        }
        return value;
    }

    public UpdateAllJackpot() {
        this.SetJackpot(this.ui_panel1, this.GetAllJackpot());
        this.ui_rewardList.removeChildrenToPool();
        if (this.base2pot == null) { return; }

        for (var i = 0; i < this.base2pot.length; i++) {
            let cell = this.ui_rewardList.addItemFromPool().asCom;
            let txt = cell.getChild("Text").asTextField;
            let txtMango = cell.getChild("txtMango").asTextField;
            txt.text = UIUtil.formatNumber100(this.base2pot[i].pos) + (F_TexasViewCtr.instance.Model.gameid == 52 ? "皮" : "/" + UIUtil.formatNumber100(this.base2pot[i].pos * 2));//皮
            // this.SetJackpot(cell, UIUtil.NumberToInt(this.base2pot[i].val));
            txtMango.text = UIUtil.NumberToInt(this.base2pot[i].val / 100) + "";
        }
    }

    public UpdateCurJackpot() {
        let model = F_TexasViewCtr.instance.Model;
        // this.ui_txtTitleCurJackpot.text ="底池"+ (model.brate / 100) +"奖池总金额";
        this.SetJackpot(this.ui_panel2, this.GetJackpot(model.brate));

    }

    public UpdateScorePanel() {
        if (this.max != null && this.max._n != null) {
            this.ui_txtObtain.text = this.max._n;
            this.SetScoreCell(this.ui_scoreCell, this.max);
        }


        if (this.plog != null) {
            this.ui_scoreList.removeChildrenToPool();
            let go: fgui.GObject = null;
            for (var i = 0; i < 10 && i < this.plog.length; i++) {
                go = this.ui_scoreList.addItemFromPool();
                this.SetScoreCell(go.asCom, this.plog[i]);
            }
        }

    }

    public SetScoreCell(cell: fgui.GComponent, sd: PotUserLog) {
        cell.visible = true;
        let txtName = cell.getChild("txtName").asTextField;
        let txtType = cell.getChild("txtType").asTextField;
        let txtScore = cell.getChild("txtScore").asTextField;
        let txtTime = cell.getChild("txtTime").asTextField;
        txtName.text = sd._n;
        txtType.text = sd._jt == 1 ? TexasLanguage.getLanguageById(1315) : (sd._jt == 2 ? TexasLanguage.getLanguageById(1316) : TexasLanguage.getLanguageById(1317));//皇家同花顺 同花顺 四条

        txtTime.text = sd._time;
        txtScore.text = UIUtil.formatNumber100(sd._gold) + "";
    }

    //设置奖池
    public SetJackpot(jackpotGroup: fgui.GObject, mongoOfTable: number) {
        mongoOfTable = UIUtil.NumberToInt(mongoOfTable / 100);
        let strNum = mongoOfTable.toString();
        let txt = null;
        for (var i = 1; i <= 8; i++) {
            txt = jackpotGroup.asCom.getChild("txtMango" + i).asTextField;
            let num = (strNum.length - i) >= 0 ? strNum.charAt(strNum.length - i) : "0";
            txt.text = num == null || num == "" ? "0" : num;

        }
    }

    public UpdateLogData(data: sc_tjackpotLog) {
    }

    public UpdateJackpotData(_base2pot: CommonPosValSD[]) //, _max:PotUserLog, _plog:PotUserLog[]
    {
        this.base2pot = _base2pot;
        // this.max = _max;
        // this.plog = _plog;
        this.HttpGetMaxAndPlog();
    }

    HttpGetMaxAndPlog() {
        let self = this;
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetJackpotLog";
        let params = {
            gameid: 51
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log("---GetAgentReceivelog---", res);
            if (res.code == 1) {
                this.max = JSON.parse(res.data.max) as PotUserLog;
                this.plog = JSON.parse(res.data.plog) as PotUserLog[];
                this.pageIndex = this.pageIndex == 0 ? 1 : this.pageIndex;
                this.UpdatePage(this.pageIndex);
            } else {
                F_TexasViewCtr.instance.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180032));//获取数据失败
            }
        }).catch((err) => {
            console.log("---err---", err)
            F_TexasViewCtr.instance.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180032));//获取数据失败
        })
    }

    private SetGroupIsOn(obj: fgui.GObject, isOn: boolean) {
        for (var i = 0; i < this.pageToggles.length; i++) {
            let t = this.pageToggles[i];
            if (t != null) {
                t.asCom.getController("isOn").setSelectedIndex(0);
            }
        }
        obj.asCom.getController("isOn").setSelectedIndex(isOn ? 1 : 0);
    }

    private GetGroupIsOn(button: fgui.GObject): boolean {
        let isOn = button.asCom.getController("isOn").selectedIndex;
        if (isOn == null) {
            button.asCom.getController("isOn").setSelectedIndex(0);
            isOn = 0;
        }
        return isOn == 0 ? false : true;
    }

}