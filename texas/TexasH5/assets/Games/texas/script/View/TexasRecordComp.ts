import { TableGainSD } from "../Model/TexasNetData";
import F_TexasViewCtr from '../Contrl/F_TexasViewCtr';
import { TexasLanguage } from "../Model/TexasLanguage";
import { PlayerInfoSD } from "../../../../Script/BaseFrame/cs_base";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { Texas } from "../Model/Texas";

export default class TexasRecordComp extends ViewBase {
    public ui_btnClose_Record: fgui.GButton = null;
    public ui_ListRecord: fgui.GList = null;

    public ui_lookPlayerCell: fgui.GComponent = null;
    public ui_ListLookPlayer: fgui.GList = null;

    public ui_txtLookTime: fgui.GTextField = null;

    public ui_TextTitle: fgui.GTextField = null;
    public ui_nameTitle: fgui.GTextField = null;
    public ui_takeGoldTitle: fgui.GTextField = null;
    public ui_turnScoreTitle: fgui.GTextField = null;
    public ui_TextPlayer: fgui.GTextField = null;
    public ui_cuopaiTxt: fgui.GTextField = null;
    public ui_txtJackpotPool: fgui.GTextField = null;

    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    AutoSetGoProperty() { }

    public MyStartEx() {
        super.AutoSetGoProperty();
        this.InitLanguage();
        this.Init();
        this.Show();
    }
    public InitLanguage() {
        this.ui_TextTitle.text = TexasLanguage.getLanguageById(1344);//实时战绩
        this.ui_nameTitle.text = TexasLanguage.getLanguageById(1385);//昵称
        this.ui_takeGoldTitle.text = TexasLanguage.getLanguageById(1345);//带入
        this.ui_turnScoreTitle.text = TexasLanguage.getLanguageById(1346);//积分
        this.ui_TextPlayer.text = TexasLanguage.getLanguageById(1347);//旁观玩家
        this.ui_cuopaiTxt.text = TexasLanguage.getLanguageById(1348);//搓牌
    }
    public Init() {
        this.InitEvents();
    }

    public InitEvents() {
        var self = this;
        this.ui_btnClose_Record.onClick(() => {
            if (self.node.getNumberOfRunningActions() > 0) return;
            this.Clear();
            self.node.runAction(cc.moveTo(0.2, cc.v2(-self.fguiWidth, 0)));//DoTweenEx.DOLocalMoveX(this.gameObject.transform, -this.gameObject.GetComponent<RectTransform>().sizeDelta.x, 0.5f);
        });
    }


    //打开界面
    // Show(cardList:number[])
    // {
    //     super.Show();
    // }

    private timer: Function = null;

    public UpdateData(_jackpot: number, _glist: TableGainSD[], _wlist: PlayerInfoSD[], insPool: number, goldout: number) {
        // this.ui_txtJackpotPool.visible = true;
        this.ui_txtJackpotPool.text = _jackpot >= 0 ? "+" + UIUtil.NumberToInt(_jackpot / 100) : "+0";
        let endTime = F_TexasViewCtr.instance.Model.endTime;


        this.ShowUserList(_wlist);
        _glist.sort((x1, x2) => { return x2.gain - x1.gain; });
        this.ShowRecordList(_glist, insPool, _wlist, goldout);

        if (!F_TexasViewCtr.instance.Model.isGamestart) {
            let countDown = endTime;
            this.ui_txtLookTime.visible = (countDown > 0);
            if (countDown <= 0) { return; }
            this.ui_txtLookTime.text = UIUtil.getStringTime(countDown);
        } else {
            this.UpdateLeftTime(endTime);// - UIUtil.NumberToInt(cc.director.getTotalTime()/1000));
        }
    }


    public ShowRecordList(tList: TableGainSD[], insNum: number, _wlist: PlayerInfoSD[], goldout: number) {

        if (tList == null || tList.length == 0) return;
        // UIUtil.HideChildren(this.ui_ListRecord);
        this.ui_ListRecord.removeChildrenToPool();
        var go: fgui.GComponent = null;
        if (F_TexasViewCtr.instance.Model.gametype == 2)//保险模式显示保险池
        {
            go = this.ui_ListRecord.addItemFromPool() as fgui.GComponent;
            go.setScale(1, 1);
            this.SetInsPoolCell(go, insNum, goldout);
        }
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListRecord.addItemFromPool() as fgui.GComponent;
            go.setScale(1, 1);
            this.SetRecordCellInfo(go, tList[i], _wlist, goldout);
        }
    }
    public SetInsPoolCell(inslCell: fgui.GComponent, insNum: number, goldout: number) {
        let txtName: fgui.GComponent = inslCell.getChild("txtName").asCom;
        let txtTakeGold: fgui.GComponent = inslCell.getChild("txtTakeGold").asCom;
        let txtTurnScore: fgui.GTextField = inslCell.getChild("txtTurnScore").asTextField;
        let insBg: fgui.GLoader = inslCell.getChild("InsImage").asLoader;
        let txtGoldout: fgui.GTextField = inslCell.getChild("txtGoldout").asTextField;
        inslCell.getChild("insNum").asTextField.visible = true;
        insBg.visible = true;
        txtName.visible = false;
        txtTakeGold.visible = false;
        txtTurnScore.color = new cc.Color(81, 174, 21);
        txtTurnScore.text = Texas.formatNumber100(insNum) + "";
        txtGoldout.text = goldout == null || goldout == 0 ? "" : "(" + goldout + ")";
        UIUtil.loadImage(insBg, "baoxianIcon", "Texas"); //Res.Singleton.SetImageSprite(insBg.GetComponent<Image>(), "whirl_history", "baoxianIcon");

    }
    public SetRecordCellInfo(scoreCell: fgui.GComponent, gainData: TableGainSD, _wlist: PlayerInfoSD[], goldout: number) {
        let txtName: fgui.GTextField = scoreCell.getChild("txtName").asTextField;
        let txtTakeGold: fgui.GTextField = scoreCell.getChild("txtTakeGold").asTextField;
        let txtTurnScore: fgui.GTextField = scoreCell.getChild("txtTurnScore").asTextField;
        let txtpcountScore: fgui.GTextField = scoreCell.getChild("txtpcountScore").asTextField;
        let txtGoldout: fgui.GTextField = scoreCell.getChild("txtGoldout").asTextField;
        let selfImage = scoreCell.getChild("selfImage");
        selfImage.visible = (gainData.UserID == F_TexasViewCtr.instance.Model.mPlayerModel.userid);

        let insBg: fgui.GComponent = scoreCell.getChild("InsImage").asCom;
        scoreCell.getChild("insNum").asTextField.visible = false;
        insBg.visible = false;
        txtName.visible = true;
        txtTakeGold.visible = true;
        txtpcountScore.visible = true;
        txtName.text = gainData.wechat.wName
        UIUtil.SetLimitTxt(txtName, gainData.wechat.wName, 6);
        txtTakeGold.text = Texas.formatNumber100(gainData.finto) + "";
        txtGoldout.text = goldout == null || goldout == 0 ? "" : "(" + goldout + ")";
        let positive: string = gainData.gain > 0 ? "+" : "";
        let colorStr: cc.Color = null;
        if (gainData.gain > 0) {
            colorStr = new cc.Color(187, 73, 73);
        }
        else if (gainData.gain == 0) {
            colorStr = new cc.Color(133, 133, 133);
        }
        else {
            colorStr = new cc.Color(60, 177, 124);
        }
        txtTurnScore.color = colorStr;
        txtTurnScore.text = `${positive}${Texas.formatNumber100(gainData.gain)}`;
        txtpcountScore.text = gainData.pcount.toString();
        //需要变灰 离桌的情况或者不在桌子上的玩家
        var temp: PlayerInfoSD = null;
        _wlist.forEach(item => {
            if (item.userid == gainData.UserID) temp = item;
        });//判断当前玩家是否是观众
        let color: cc.Color = gainData.offline == 1 || temp != null ? cc.Color.GRAY : cc.Color.WHITE;

        txtName.color = color;
        txtTakeGold.color = color;
        txtpcountScore.color = color;
    }

    public ShowUserList(tList: PlayerInfoSD[]) {
        if (tList == null || tList.length == 0) return;

        this.ui_ListLookPlayer.removeChildrenToPool();
        let go: fgui.GComponent = null;
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListLookPlayer.addItemFromPool() as fgui.GComponent;
            go.setScale(1, 1);
            this.SetUserCellInfo(go, tList[i]);
        }
    }


    public SetUserCellInfo(scoreCell: fgui.GComponent, gainData: PlayerInfoSD) {
        let headImage: fgui.GLoader = scoreCell.getChild("UserHead").asCom.getChild("headImage").asLoader;
        let txtName: fgui.GTextField = scoreCell.getChild("txtName").asTextField;
        let btn = scoreCell.getChild("button").asButton;
        UIUtil.SetLimitTxt(txtName, gainData._n, 6);
        UIUtil.loadImage(headImage, gainData.wechat.wicon)
        btn.clearClick();
        var self = this;
        btn.onClick(() => {
            this.Clear();
            self.node.runAction(cc.moveTo(0.2, cc.v2(-self.fguiWidth, 0)))// DoTweenEx.DOLocalMoveX(this.gameObject.transform, -this.gameObject.GetComponent<RectTransform>().sizeDelta.x, 0.5f);

            F_TexasViewCtr.instance.view.ShowUIUserInfo(gainData, -1);
        });
    }



    public UpdateLeftTime(leftTime: number) {
        if (!F_TexasViewCtr.instance.Model.isGamestart) return;
        let countDown = leftTime - 1;
        this.ui_txtLookTime.visible = (countDown > 0);
        if (countDown <= 0) { return; }

        this.ui_txtLookTime.text = UIUtil.getStringTime(countDown);
        let endTime = leftTime + cc.director.getTotalTime() / 1000;
        this.unschedule(this.timer);
        this.schedule(this.timer = () => {
            countDown = UIUtil.NumberToInt((endTime - cc.director.getTotalTime() / 1000));
            this.ui_txtLookTime.text = UIUtil.getStringTime(countDown);
            if (countDown <= 0) {
                F_TexasViewCtr.instance.cs_getgain_tex();//重新请求刷新

            }
        }, 1, countDown);
    }

    public Show() {
        super.Show();
        this.ui_btnClose_Record.visible = true;
    }


    public Hide() {
        super.Hide();
        this.Clear();

    }

    public OnDestroy() {
        this.Hide();
    }

    private Clear() {
        // this.ui_btnClose_Record.visible = false;
        this.unschedule(this.timer);
    }
}