import CardInfoItem from "./CardInfoItem";
import { cs_getscollectbyid_tex, sc_getscollectbyid_tex } from "./CareerNetDataStruct";
import { TableGainSD, TexTInfoSD, PInfoSD } from '../../../../Games/texas/script/Model/TexasNetData';
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { LanguageConfig } from "../LanguageConfig";

/*
 * @description 牌局详情
 */
export default class MyCardDerailsView extends ViewBase {

    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "cardDerails";
    }
    public ui_btn_cardDerailsBreak: fgui.GButton = null;

    public ui_time: fgui.GTextField = null;//时间
    public ui_bet: fgui.GTextField = null;//盲
    public ui_n93: fgui.GTextField = null;//总手数
    public ui_n94: fgui.GTextField = null;//最大POT
    public ui_n95: fgui.GTextField = null;//总带入
    public ui_n96: fgui.GTextField = null;//保险池
    public ui_n98: fgui.GImage = null;
    public ui_n99: fgui.GImage = null;
    public ui_n100: fgui.GImage = null;
    public ui_n112: fgui.GComponent = null;//大鱼
    public ui_n113: fgui.GComponent = null;
    public ui_n114: fgui.GComponent = null;
    public ui_n102: fgui.GTextField = null;//昵称
    public ui_n103: fgui.GTextField = null;//昵称
    public ui_n104: fgui.GTextField = null;//昵称
    public ui_playList: fgui.GList = null;//列表  

    public cid: string = "";//收藏ID

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_cardDerailsBreak.onClick(this.Hide, this);
    }

    private isLoadend = false;
    OnLoadCompleted() {
        this.isLoadend = true;
        if (this.mystart) this.Show();
    }

    MyStart(_cid: string) {
        this.cid = _cid;
        this.mystart = true;
        if (this.isLoadend) this.Show();
    }

    Show() {
        super.Show();
        // let _getlist: cs_getscollectbyid_tex = new cs_getscollectbyid_tex();
        // _getlist.cid = this.cid;
        // console.log("_getlist.cid === ", _getlist.cid);
        // _getlist._g = 51;
        // _getlist.fn = "cs_getscollectbyid_tex";
        // WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getscollectbyid_tex.bind(this));
        this.getTableInfoByTid();
    }

    public getTableInfoByTid() {
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordInfoLog";
        let params = {
            userid: AppConst.mPlayerModel.userid,
            tnum: this.cid,
            gameid: 51
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log(url + " === ", res);
            if (res.code == 1) {
                this.initTableData(res.data[0]);
            } else {
                CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11008));
            }
        }).catch((err) => {
            console.log("---err---", err)
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11008));
        })
    }

    public initTableData(data: any) {
        console.log("bigEndList == ", JSON.parse(data.bigEndList));
        console.log("gameDetails == ", JSON.parse(data.gameDetails));
        console.log("plist == ", JSON.parse(data.plist));
        let bigEndList = JSON.parse(data.bigEndList);
        this.ui_time.text = bigEndList.btime;
        this.ui_bet.text = "大/小盲:" + (UIUtil.formatNumber100(data.bg) * 2) + "/" + UIUtil.formatNumber100(data.bg);
        this.ui_n93.text = bigEndList.pc + "";//总手数
        // this.ui_n94.text = data.maxPot + "";//最大POT
        // this.ui_n96.text = data.tinfo.ipool + "";//保险池
        this.ui_n95.text = UIUtil.formatNumber100(bigEndList.allintogold) + "";//总带入
        let gainlist = bigEndList.gainlist;
        gainlist.sort((a, b) => {
            return b.gain - a.gain;
        })
        console.log("gainlist == ", gainlist);
        let userID0 = gainlist[0] == null ? 0 : gainlist[0].UserID;
        let userID1 = gainlist[1] == null ? 0 : gainlist[1].UserID;
        let userID2 = gainlist[2] == null ? 0 : gainlist[2].UserID;
        this.ui_n112.visible = gainlist.length >= 1;
        this.ui_n113.visible = gainlist.length >= 2;
        this.ui_n114.visible = gainlist.length >= 3;
        this.ui_n98.visible = gainlist.length >= 1;
        this.ui_n99.visible = gainlist.length >= 2;
        this.ui_n100.visible = gainlist.length >= 3;
        this.ui_n102.visible = gainlist.length >= 1;
        this.ui_n103.visible = gainlist.length >= 2;
        this.ui_n104.visible = gainlist.length >= 3;
        this.setUserInfo(gainlist, userID0, this.ui_n112.getChild("n0").asLoader, this.ui_n102);
        this.setUserInfo(gainlist, userID1, this.ui_n113.getChild("n0").asLoader, this.ui_n103);
        this.setUserInfo(gainlist, userID2, this.ui_n114.getChild("n0").asLoader, this.ui_n104);

        this.ui_playList.removeChildrenToPool();
        for (var i = 0; i < gainlist.length; i++) {
            let go = this.ui_playList.addItemFromPool().asCom;
            this.setUserInfo(gainlist, gainlist[i].UserID, go.getChild("n5").asCom.getChild("n0").asLoader, go.getChild("n1").asTextField);
            go.getChild("n2").asTextField.text = "带入：" + UIUtil.formatNumber100(gainlist[i].finto) + "";
            go.getChild("n3").asTextField.text = "手数：" + gainlist[i].pcount + "";
            go.getChild("n4").asTextField.text = UIUtil.formatNumber100(gainlist[i].gain) + "";
        }
    }

    public sc_getscollectbyid_tex(data: sc_getscollectbyid_tex) {
        // if (data.result != 1) {
        //     console.error("获取数据错误：" + data.result);
        //     return;
        // }
        // let tInfo = data.tinfo.tInfo
        // this.ui_time.text = data.cTime;
        // this.ui_bet.text = "大/小盲:" + (data.baserate * 2) + "/" + data.baserate;
        // this.ui_n93.text = data.tinfo.handcount + "";//总手数
        // this.ui_n94.text = data.maxPot + "";//最大POT

        // this.ui_n96.text = data.tinfo.ipool + "";//保险池
        // let userID0 = tInfo[0] == null ? 0 : tInfo[0].id;
        // let userID1 = tInfo[1] == null ? 0 : tInfo[1].id;
        // let userID2 = tInfo[2] == null ? 0 : tInfo[2].id;
        // this.setUserInfo(data.ulist, userID0, this.ui_n112.getChild("n0").asLoader, this.ui_n102);
        // this.setUserInfo(data.ulist, userID1, this.ui_n113.getChild("n0").asLoader, this.ui_n103);
        // this.setUserInfo(data.ulist, userID2, this.ui_n114.getChild("n0").asLoader, this.ui_n104);
        // let totalinto = 0;
        // this.ui_playList.removeChildrenToPool();
        // for (var i = 0; i < tInfo.length; i++) {
        //     let go = this.ui_playList.addItemFromPool().asCom;
        //     this.setUserInfo(data.ulist, tInfo[i].id, go.getChild("n5").asCom.getChild("n0").asLoader, go.getChild("n1").asTextField);
        //     go.getChild("n2").asTextField.text = "带入：" + UIUtil.formatNumber100(tInfo[i].totalinto) + "";
        //     go.getChild("n3").asTextField.text = "手数：" + tInfo[i].hcount + "";
        //     go.getChild("n4").asTextField.text = tInfo[i].wg > 0 ? "+" + tInfo[i].wg : tInfo[i].wg + "";
        //     totalinto += tInfo[i].totalinto;
        // }
        // this.ui_n95.text = UIUtil.formatNumber100(totalinto) + "";//总带入
    }

    private setUserInfo(ulist: TableGainSD[], userid, headLoader: fgui.GLoader, txtName: fgui.GTextField) {
        for (var i = 0; i < ulist.length; i++) {
            if (userid == ulist[i].UserID) {
                UIUtil.loadImage(headLoader, ulist[i].wechat.wicon);
                txtName.text = ulist[i].wechat.wName;
                return;
            }
        }
    }
}