import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TableGainSD, clubinfo, Insurinfo } from "../Model/TexasNetData";
import BalenceCtr, { BalenceModel } from "./BalenceCtr";



export default class BalenceComp extends ViewBase {
    public ui_txtRoomName: fgui.GTextField = null;
    public ui_txtGameDate: fgui.GTextField = null;
    // public ui_txtGameTime:fgui.GTextField = null;
    public ui_userInfo1: fgui.GComponent = null;
    public ui_userInfo2: fgui.GComponent = null;
    public ui_userInfo3: fgui.GComponent = null;

    public ui_txtDipi: fgui.GTextField = null;
    // public ui_txtJackpot:fgui.GTextField = null;
    public ui_txtActionCount: fgui.GTextField = null;
    public ui_txtTotalGold: fgui.GTextField = null;

    public ui_ListContent: fgui.GList = null;

    public ui_shareBtn: fgui.GButton = null;
    public ui_btnExit: fgui.GButton = null;
    public ui_huiguBtn: fgui.GButton = null;
    public ui_huiguBtnText: fgui.GTextField = null;

    public ui_baoxiancell: fgui.GComponent = null;

    public ui_allShoushuTitle: fgui.GTextField = null;
    public ui_takeInTitle: fgui.GTextField = null;
    public ui_zhanjuTitle: fgui.GTextField = null;
    public ui_rankTitle: fgui.GTextField = null;
    public ui_userTitle: fgui.GTextField = null;
    public ui_shoushuTitle: fgui.GTextField = null;
    public ui_zhanjiTitle: fgui.GTextField = null;
    public ui_clubBtn: fgui.GButton = null;
    public ui_clubBtnText: fgui.GTextField = null;

    public ui_InsuranceDetailed: fgui.GComponent = null;
    public ui_InsuranceDetailedScroll: fgui.GList = null;
    public ui_clubcell: fgui.GComponent = null;
    public ui_userCell: fgui.GComponent = null;
    public ui_btnExit_i: fgui.GButton = null;
    public ui_zhanjuTitle_i: fgui.GTextField = null;

    public ui_btnExit_c: fgui.GButton = null;
    public ui_clubDetailed: fgui.GComponent = null;
    public ui_clubDetailedScroll: fgui.GList = null;
    public ui_zhanjuTitle_c: fgui.GTextField = null;


    public get _model(): BalenceModel {
        return BalenceCtr.instance.Model;
    }

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    public MyStartEx() {
        BalenceCtr.instance.view = this;//????????????view???????????????        
        this.Init();
        this.InitEvents();
        this.Hide();
    }
    public InitLanguage() {
        //????????????????????????
        this.ui_allShoushuTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "?????????:");
        this.ui_takeInTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "?????????: ");
        this.ui_zhanjuTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "????????????");
        this.ui_rankTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "??????");
        this.ui_userTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "??????");
        this.ui_shoushuTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "??????");
        this.ui_zhanjiTitle.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "??????");
        this.ui_baoxiancell.getChild("Text").asTextField.text = "??????";
        this.ui_zhanjuTitle_i.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "????????????");
        this.ui_zhanjuTitle_c.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "???????????????");
        this.ui_clubBtnText.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "???????????????");
        this.ui_huiguBtnText.text = UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "????????????");

    }

    public InitImage() {

    }
    public Init() {
        this.ui_baoxiancell = this.ui_ListContent.addItem("ui://Texas/baoxiancell").asCom;

    }

    public InitEvents() {
        this.ui_shareBtn.clearClick();
        this.ui_shareBtn.onClick(() => {
            this.TakeShotAndShare();
        });

        this.ui_btnExit.clearClick();
        this.ui_btnExit.onClick(() => {
            // this.Hide();
            F_TexasViewCtr.instance.cs_applyexittable_tex(null);

        });

        this.ui_huiguBtn.clearClick();
        this.ui_huiguBtn.onClick(() => {
            F_TexasViewCtr.instance.ShowHistory_bigend();

        });

        this.ui_baoxiancell.clearClick();
        this.ui_baoxiancell.getChild("Button").onClick(() => {

            this.ShowInsuranceDetailed();
        });

        this.ui_clubBtn.clearClick();
        this.ui_clubBtn.onClick(() => {

            this.ShowClubDetailed();
        });

        this.ui_btnExit_i.clearClick();
        this.ui_btnExit_i.onClick(() => {
            this.ui_InsuranceDetailedScroll.removeChildrenToPool();
            this.ui_InsuranceDetailed.visible = false;
        });

        this.ui_btnExit_c.clearClick();
        this.ui_btnExit_c.onClick(() => {
            this.ui_clubDetailedScroll.removeChildrenToPool();
            this.ui_clubDetailed.visible = false;
        });
    }

    private strDipi = "?????? ";
    private strJackpot = "??????: ";
    private strActionCount = "???????????????:";
    private strTotalGold = "???????????????:";
    private strRoomName = "?????????:????????????-";

    private strId = "ID: ";
    private strTake = "??????: ";
    private strShouShu = "??????: ";
    private strScore = "??????: ";

    private isTexas: boolean;
    public Open(gameId: number, roomNum: string) {
        this.Show();
        this.InitImage();
        this.InitLanguage();
        this.isTexas = gameId == 51;
        this.strRoomName = "?????????:" + this.isTexas ? "??????" : "??????" + "-";//????????? ??????:??????
        this.ui_txtRoomName.text = (this.strRoomName + this._model.br + "-" + roomNum);
        this.ui_txtGameDate.text = (this._model.begintime + " ---- " + this._model.endtime);
        // this.ui_txtGameTime.text = (this._model.duration <= 30 ? "0.5h" : "1h");

        let positive = this._model.tax > 0 ? "+" : "";
        // this.ui_txtJackpot.text = positive + UIUtil.NumberToInt(this._model.tax / 100);
        this.ui_txtActionCount.text = "" + this._model.pcount;
        this.ui_txtTotalGold.text = "" + UIUtil.NumberToInt(this._model.allintogold / 100);

        this.SetUserInfo(this.ui_userInfo1, this.GetUserInfoByType(this._model.gainlist, 1), 0);//??????
        this.SetUserInfo(this.ui_userInfo2, this.GetUserInfoByType(this._model.gainlist, 2), 1);
        this.SetUserInfo(this.ui_userInfo3, this.GetUserInfoByType(this._model.gainlist, 3), 2);//??????
        this.ui_baoxiancell.getChild("txtScore").asTextField.text = UIUtil.formatNumber100(this._model.InsurTotal) + "";
        this.ShowList(this._model.gainlist);

        this.ui_clubBtn.visible = true;
        this.ui_baoxiancell.getChild("Button").visible = true;
        if (!this._model.isnamger) {
            this.ui_clubBtn.visible = false;
            this.ui_baoxiancell.getChild("Text").text = "??????";
            this.ui_baoxiancell.getChild("Button").visible = false;
        }
        this.ui_InsuranceDetailedScroll.visible = true;
    }

    public Hide() {
        super.Hide();
        this.node.active = false;
    }

    public Show() {
        this.node.active = true;
        super.Show();
    }

    //1: ?????? 2: MVP 3 : ??????
    public GetUserInfoByType(tList: TableGainSD[], type: number): TableGainSD {
        if (tList == null) { return null; }

        let result: TableGainSD = null;
        tList.forEach(item => {

            if (type == 1) {
                if (result == null || result.finto < item.finto) {
                    result = item;
                }
            }
            else if (type == 2) {
                if (result == null || result.gain < item.gain) {
                    result = item;
                }
            }
            else {
                if (result == null || result.gain > item.gain) {
                    result = item;
                }
            }
        });

        return result;
    }


    public SetUserInfo(user: fgui.GComponent, userInfo: TableGainSD, turnTitle: number) {
        user.visible = (userInfo != null);
        if (userInfo == null) return;
        let nameTxt = user.getChild("nameText").asTextField;
        let headImage = user.getChild("UserHead").asCom.getChild("headImage").asLoader;

        UIUtil.SetLimitTxt(nameTxt, userInfo.wechat.wName, 6);

        UIUtil.loadImage(headImage, userInfo.wechat.wicon);
        user.getController("type").setSelectedIndex(turnTitle);

    }

    public ShowList(tList: TableGainSD[]) {
        this.ui_ListContent.removeChildrenToPool();
        this.ui_baoxiancell.visible = (tList != null && tList.length > 0);
        if (tList == null || tList.length == 0) return;
        tList.sort((info1, info2) => info2.gain - info1.gain);
        let go = null;
        let testGold = this._model.allintogold;

        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListContent.addItemFromPool("ui://Texas/scoreCell2").asCom;
            this.SetCellInfo(go, tList[i], i + 1);
            testGold += tList[i].gain;
        }

        if (testGold != 0) {
            //DebugEX.LogC("????????????????????????" + testGold);
        }
    }


    public SetCellInfo(scoreCell: fgui.GComponent, gainData: TableGainSD, rankId: number) {
        let headImage = scoreCell.getChild("UserHead").asCom.getChild("headImage").asLoader;
        let txtRank = scoreCell.getChild("txtRank").asTextField;
        let txtUserName = scoreCell.getChild("txtUserName").asTextField;
        let txtUserId = scoreCell.getChild("txtUserId").asTextField;
        let txtUserGold = scoreCell.getChild("txtUserGold").asTextField;
        let txtActionCount = scoreCell.getChild("txtActionCount").asTextField;
        let txtScore = scoreCell.getChild("txtScore").asTextField;
        let txtRunAway = scoreCell.getChild("txtRunAway").asTextField;

        txtRunAway.visible = (gainData.otherMoney != 0);
        if (gainData.otherMoney > 0) {

            txtRunAway.text = "????????????:" + (gainData.otherMoney / 100.0).toFixed(2);//????????????
        }
        else {
            txtRunAway.text = "????????????:" + (gainData.otherMoney / 100.0).toFixed(2);//????????????
        }


        UIUtil.loadImage(headImage, gainData.wechat.wicon);
        scoreCell.getController("top").setSelectedIndex(rankId > 3 ? 0 : rankId);
        txtRank.text = rankId + "";
        txtUserName.text = gainData.wechat.wName;
        txtUserId.text = "ID:  " + gainData.UserID;
        txtUserGold.text = "??????:  " + UIUtil.formatNumber100(gainData.finto);
        txtActionCount.text = gainData.pcount + "";

        let positive = gainData.gain > 0 ? "+" : "";
        txtScore.text = positive + (BalenceCtr.instance.Model.IsSupper ? UIUtil.formatNumber100(gainData.gain) : UIUtil.formatNumber100(gainData.gain));
        txtScore.color = gainData.gain >= 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
    }

    public TakeShotAndShare() {
        // let filename = "Screenshot-" + System.DateTime.Now.ToString("MMddHHmmss");
        // ScreenshotManager.SaveScreenshot(filename, "ScreenshotApp", "jpg");
        // TimeInfoMgr.instance.AddTimer(1.5F, () =>
        // {
        //     if (gameObject.activeSelf)
        //     {
        //         string path = "";
        //         if (Application.platform == RuntimePlatform.Android)
        //         {
        //             path = "/sdcard/Pictures/Screenshots/" + filename + ".jpg";
        //         }
        //         else
        //         {
        //             path = Application.persistentDataPath + "/" + filename + ".jpg";
        //         }
        //         ShareSdkManager.Singleton.ShareTableBigEnd(path);
        //     }
        // });
    }

    private ShowInsuranceDetailed() {
        this.ui_InsuranceDetailed.visible = true;
        this.ui_clubcell.visible = false;
        this.ui_userCell.visible = false;
        if (this._model.clunbins == null || this._model.clunbins.length == 0) return;
        this.ui_InsuranceDetailedScroll.removeChildrenToPool();
        let index = 1;
        for (var i = 0; i < this._model.clunbins.length; ++i) {
            let temp: clubinfo = this._model.clunbins[i];
            let go: fgui.GComponent = this.ui_InsuranceDetailedScroll.addItem("ui://Texas/clubcell").asCom;
            ++index;

            let clubtxt = go.getChild("txtScore").asTextField;
            clubtxt.text = temp.clubname;

            for (var j = 0; j < temp.userinfos.length; ++j) {
                let userData: Insurinfo = temp.userinfos[j];
                let userGo: fgui.GComponent = this.ui_InsuranceDetailedScroll.addItem("ui://Texas/userCell").asCom;
                ++index;

                let head = userGo.getChild("UserHead").asCom.getChild("headImage").asLoader;
                let winTxt = userGo.getChild("txtScore").asTextField;
                let userNametxt = userGo.getChild("txtUserName").asTextField;
                head.visible = false;

                UIUtil.loadImage(head, userData.headurl);

                userNametxt.text = userData.name;

                let positive = userData.gold > 0 ? "+" : "";
                winTxt.text = positive + UIUtil.formatNumber100(userData.gold);
                winTxt.color = userData.gold > 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
            }
        }
    }

    private ShowClubDetailed() {
        this.ui_clubDetailed.visible = true;
        if (this._model.clubWl == null || this._model.clubWl.length == 0) return;
        this.ui_clubDetailedScroll.removeChildrenToPool();
        for (var i = 0; i < this._model.clubWl.length; ++i) {
            let go = this.ui_clubDetailedScroll.addItemFromPool().asCom;
            let clubtxt = go.getChild("txtclubName").asTextField;
            let wintxt = go.getChild("txtScore").asTextField;

            clubtxt.text = this._model.clubWl[i].clubname;
            wintxt.text = this._model.clubWl[i].gold + "";

            let positive = this._model.clubWl[i].gold > 0 ? "+" : "";
            wintxt.text = positive + (BalenceCtr.instance.Model.IsSupper ? UIUtil.formatNumber100(this._model.clubWl[i].gold) : UIUtil.formatNumber100(this._model.clubWl[i].gold));
            wintxt.color = this._model.clubWl[i].gold >= 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
        }
    }
}