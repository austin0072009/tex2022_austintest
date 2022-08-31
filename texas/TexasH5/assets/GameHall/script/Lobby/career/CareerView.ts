import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { CountInfoSD } from "../../../../Script/BaseFrame/cs_base";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import LobbyViewCtr from "../LobbyViewCtr";
import { CompeteRemark, sc_compete_record } from "./CareerNetDataStruct";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { LanguageConfig } from "../LanguageConfig";

/*
 * @description 生涯
 */
export default class CareerView extends ViewBase {

    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "career";
    }
    private ui_btn_syBreak: fgui.GButton = null;

    /**雷达图 */
    private ui_radarImage: fgui.GGraph = null;
    /**总局数 */
    private ui_allNumInGame: fgui.GTextField = null;
    /**场均战绩 */
    private ui_changjunRecord: fgui.GTextField = null;
    /**大盲 百手 */
    private ui_damangOrBaishou: fgui.GTextField = null;
    /**总手数 */
    private ui_allShoushu: fgui.GTextField = null;
    /**场均带入 */
    private ui_changjunDairu: fgui.GTextField = null;
    /**主动入池率 */
    private ui_activeRuchi: fgui.GTextField = null;
    /**看牌 翻牌率 */
    private ui_seeCard: fgui.GTextField = null;
    /**C-BET */
    private ui_cbetRate: fgui.GTextField = null;
    /**激进度 */
    private ui_radical: fgui.GTextField = null;
    /**3 bet */
    private ui_bet3Rate: fgui.GTextField = null;
    /**加注入池率 */
    private ui_addBetRate: fgui.GTextField = null;
    /**牌普 */
    private ui_btn_paipu: fgui.GButton = null;

    /**战绩 item */
    private ui_zjCareerItemList: fgui.GList = null;

    private zjData: any[] = [];//战绩数据
    private zjSelectData: any = null;
    private DPData: any[] = [];//短牌数据
    private AOFData: any[] = [];//AOF数据

    /**赛事相关 */
    private ui_ssResoutList: fgui.GList = null;//赛事列表
    private ui_n93: fgui.GTextField = null;//比赛次数
    private ui_n95: fgui.GTextField = null;//钱圈数
    private ui_n94: fgui.GTextField = null;//总手数
    private ui_n96: fgui.GTextField = null;//决赛次数

    /**查找牌局 */
    private ui_btn_selectCard: fgui.GButton = null;
    private ui_selectPanel: fgui.GComponent = null;//输入弹框
    private ui_inputSelectID: fgui.GTextField = null;//talbeid
    private ui_btn_selectOK: fgui.GButton = null;
    private ui_btn_selectClose: fgui.GButton = null;
    private isSelct = false;//是否查询，查询数据需重新解析
    private bHistory = false;//是否显示详情

    /**短牌和AOF列表*/
    private ui_DPList: fgui.GList = null;
    private ui_AOFList: fgui.GList = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_syBreak.onClick(this.Hide, this);

        // let distances = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
        // this.ui_radarImage.drawRegularPolygon(1, cc.Color.RED, cc.color(153, 51, 51), 6, 90, distances);
        this.ui_radarImage.clearGraphics();
        this.ui_btn_paipu.onClick(this.showMyCardSpectrum, this);

        this.ui_zjCareerItemList.setVirtual();
        this.ui_zjCareerItemList.itemProvider = this.getListItemResource.bind(this);
        this.ui_zjCareerItemList.itemRenderer = this.renderListItem.bind(this);

        this.ui_DPList.itemProvider = this.getListItemResource.bind(this);
        this.ui_DPList.itemRenderer = this.renderListItem.bind(this);

        this.ui_AOFList.itemProvider = this.getListItemResource.bind(this);
        this.ui_AOFList.itemRenderer = this.renderListItem.bind(this);


        this.ui_ssResoutList.on(fgui.Event.CLICK_ITEM, this.clickSSList, this);
        this.ui_ssResoutList.itemRenderer = this.ssRenderListItem.bind(this);

        /**查找牌局相关 */
        this.ui_btn_selectCard.clearClick();
        this.ui_btn_selectCard.onClick(() => {
            AudioManager.Singleton.play('CareerView', "button");
            this.showSelectPanel(true);
        });
        this.ui_btn_selectClose.clearClick();
        this.ui_btn_selectClose.onClick(() => {
            AudioManager.Singleton.play('CareerView', "button");
            this.showSelectPanel(false);
        });
        this.ui_btn_selectOK.clearClick();
        this.ui_btn_selectOK.onClick(() => {
            AudioManager.Singleton.play('CareerView', "button");
            this.clickSelectCard();
        });
    }
    OnLoadCompleted() {
        this.Show();
    }
    Show() {
        //战绩
        this.isSelct = false;
        LobbyViewCtr.instance.cs_freshplayerInfoSD();
        super.Show();
        this.getTexasZJ();
        this.fguiComponent.getController("game").setSelectedIndex(2);

        //赛事列表
        this.ui_ssResoutList.numItems = 0;
        LobbyViewCtr.instance.cs_compete_record();

        //查找牌局限制等级
        this.ui_btn_selectCard.visible = LoginViewCtr.instance.Model.mPlayerModel.lv >= 19;

    }

    Hide() {
        AudioManager.Singleton.play('CareerView', "button");
        if (this.isSelct) {
            this.Show();
        } else {
            super.Hide();
        }

    }

    public showMyCardSpectrum() {
        LobbyViewCtr.instance.view.showMyCardSpectrumView();
    }

    //获取战绩数据
    public getTexasZJ(_talbeid: string = "", _bHistory: boolean = false) {
        let self = this;
        this.isSelct = false;
        this.bHistory = _bHistory;
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordLog";//BaseFrameNative.serverlistItem.apiAdress
        let params = {
            userid: AppConst.mPlayerModel.userid,
            tnum: "",
            gameid: 51
        }

        let selectTable: boolean = false;
        //查找牌局
        if (_talbeid != "") {
            selectTable = true;
            this.isSelct = !this.bHistory;
            url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordInfoLog";
            params = {
                userid: AppConst.mPlayerModel.userid,
                tnum: _talbeid,
                gameid: 51
            }
        }

        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log(url + " === ", res);
            if (res.code == 1) {
                if (res.data == null || res.data.length == 0) {
                    if (selectTable) {
                        CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11006));
                    } else {
                        CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11007));
                    }
                    return;
                }
                self.LoadTexasZJ(res.data);
            } else {
                CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11008));
            }
        }).catch((err) => {
            console.log("---err---", err)
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11008));
        })
    }

    public LoadTexasZJ(data: any) {
        if (data == null || data.length == 0) return;

        if (this.bHistory) {
            //显示History
            this.zjSelectData = data[0];
            var derailsData = {
                ulist: JSON.parse(this.zjSelectData.plist),
                tinfo: JSON.parse(this.zjSelectData.gameDetails),
                tnum: this.zjSelectData.roomNum,
                baserate: this.zjSelectData.bg,
                showCard: null
            };
            LobbyViewCtr.instance.view.showMyCardDerailsView(this.zjSelectData.roomNum + "", derailsData);
            // LobbyViewCtr.instance.view.showMyCardHistory("", derailsData);
        } else {
            this.DPData = [];
            this.AOFData = [];
            this.zjData = [];
            this.ui_zjCareerItemList.numItems = 0;
            this.ui_DPList.numItems = 0;
            this.ui_AOFList.numItems = 0;

            if (this.isSelct) {
                //查找列表
                this.zjSelectData = data[0];
                let bigEndList = JSON.parse(this.zjSelectData.bigEndList);
                let gainlist = bigEndList.gainlist;
                let plist = JSON.parse(this.zjSelectData.plist);

                let zj = new Zhanji();
                zj.tnum = this.zjSelectData.roomNum;
                zj.createTime = bigEndList.btime;
                zj.preG = this.zjSelectData.bg;
                zj.level = this.zjSelectData.bg;
                zj.pnum = plist.length;
                // zj.gametype = this.zjSelectData.gametype;
                for (var j = 0; j < gainlist.length; j++) {
                    if (gainlist[j].UserID == LoginViewCtr.instance.Model.mPlayerModel.userid) {
                        zj.gains = gainlist[j].gain + "";
                    }
                }

                if (this.fguiComponent.getController("game").selectedIndex == 3) {
                    //短牌
                    zj.gametype = 10;
                    this.DPData.push(zj);
                } else if (this.fguiComponent.getController("game").selectedIndex == 4) {
                    //AOF
                    zj.gametype = 20;
                    this.AOFData.push(zj);
                } else if (this.fguiComponent.getController("game").selectedIndex == 2) {
                    //普通
                    zj.gametype = 1;
                    this.zjData.push(zj);
                }
                this.ui_DPList.numItems = this.DPData.length * 2;
                this.ui_AOFList.numItems = this.AOFData.length * 2;
                this.ui_zjCareerItemList.numItems = this.zjData.length * 2;

            } else {
                //战绩列表
                for (var i = 0; i < data.length; i++) {
                    if (data[i].gametype == 10) {
                        //短牌
                        this.DPData.push(data[i]);
                    } else if (data[i].gametype == 20) {
                        //AOF
                        this.AOFData.push(data[i]);
                    } else {
                        //普通
                        this.zjData.push(data[i]);
                    }
                }

                this.DPData.reverse();
                this.AOFData.reverse();
                this.zjData.reverse();
                this.ui_DPList.numItems = this.DPData.length * 2;
                this.ui_AOFList.numItems = this.AOFData.length * 2;
                this.ui_zjCareerItemList.numItems = this.zjData.length * 2;
            }
        }

    }

    public getListItemResource(index: number) {
        if (index % 2 == 0) {
            return "ui://Lobby/zjTimeItem";
        }
        return "ui://Lobby/zjinfoItem";
    }

    public renderListItem(index: number, item: fgui.GObject) {
        let itemData = null;
        let go = <fgui.GButton>item;
        if (go.parent.name == "zjCareerItemList") {
            itemData = this.zjData[UIUtil.NumberToInt(index / 2)];
        } else if (go.parent.name == "DPList") {
            itemData = this.DPData[UIUtil.NumberToInt(index / 2)]
        } else if (go.parent.name == "AOFList") {
            itemData = this.AOFData[UIUtil.NumberToInt(index / 2)]
        }

        if (index % 2 == 0) {
            let createTime = itemData.createTime;
            createTime = createTime == null ? "" : createTime;
            go.getChild("n1").asTextField.text = createTime;
        } else {
            go.getChild("n5").asTextField.text = "德州扑克";
            go.getChild("n9").asTextField.text = itemData.tnum + "";

            let preG = itemData.preG
            preG = preG == null ? 0 : preG;
            let level = itemData.level
            level = level == null ? 0 : UIUtil.formatNumber100(level);
            go.getChild("n7").asTextField.text = `${level}/${level * 2}/${level * 4}(${preG})`;

            let pnum = itemData.pnum;
            pnum = pnum == null ? 9 : pnum;
            go.getChild("n10").asTextField.text = pnum + "";

            let gains = itemData.gains;
            gains = gains == null ? 0 : UIUtil.formatNumber100(gains);
            go.getChild("n12").asTextField.text = gains + "";

            if (gains > 0) {
                go.getController("color").setSelectedIndex(0);
            } else if (gains == 0) {
                go.getController("color").setSelectedIndex(1);
            } else if (gains < 0) {
                go.getController("color").setSelectedIndex(2);
            }

            if (level < 1) {
                go.getController("type").setSelectedIndex(0);
            } else if (level >= 1 && level < 10) {
                go.getController("type").setSelectedIndex(1);
            } else if (level >= 10 && level < 100) {
                go.getController("type").setSelectedIndex(2);
            } else {
                go.getController("type").setSelectedIndex(3);
            }

            //查找牌局绑定数据
            go.getChild("buttonZJ").asButton.clearClick();
            // if(this.isSelct)
            // {
            //     var derailsData = {
            //         ulist: JSON.parse(this.zjSelectData.plist),
            //         tinfo: JSON.parse(this.zjSelectData.gameDetails),
            //         tnum: this.zjSelectData.roomNum, 
            //         baserate: this.zjSelectData.bg, 
            //         showCard: null
            //     };
            //     go.getChild("buttonZJ").asButton.onClick(()=>{
            //         AudioManager.Singleton.play('CareerView', "button");
            //         LobbyViewCtr.instance.view.showMyCardDerailsView("",derailsData);
            //     });
            // }else{
            go.getChild("buttonZJ").asButton.onClick(() => {
                AudioManager.Singleton.play('CareerView', "button");
                this.getTexasZJ(itemData.tnum, true);
            });

            // }
        }

    }


    //基础数据
    public loadJCData() {
        if (AppConst.mPlayerModel.cinfo == null) return;
        let cinfo: CountInfoSD = AppConst.mPlayerModel.cinfo as CountInfoSD;
        let tablenum: number = cinfo.winc + cinfo.failc + cinfo.dc;
        /**总局数 */
        this.ui_allNumInGame.text = cinfo.tablenum + "";
        /**场均战绩 */
        this.ui_changjunRecord.text = cinfo.tablenum == 0 ? "0" : UIUtil.formatNumber100(cinfo.AveGains / cinfo.tablenum).toFixed(0);
        /**大盲 百手 */
        this.ui_damangOrBaishou.text = tablenum == 0 ? "0" : (cinfo.AveGains / tablenum).toFixed(0);
        /**总手数 */
        this.ui_allShoushu.text = tablenum + "";
        /**场均带入 */
        this.ui_changjunDairu.text = UIUtil.NumberToInt(cinfo.Aveinto / 100) + "";


        /**主动入池率 */
        let value1 = tablenum == 0 ? 0 : cinfo.drivingnum / tablenum;
        value1 = this.NumberLimit(value1);
        this.ui_activeRuchi.text = UIUtil.NumberToInt(value1 * 100) + "%";
        /**看牌 翻牌率 */
        let value2 = tablenum == 0 ? 0 : cinfo.fr / tablenum;
        value2 = this.NumberLimit(value2);
        this.ui_seeCard.text = UIUtil.NumberToInt(value2 * 100) + "%";
        /**C-BET */
        let value3 = tablenum == 0 ? 0 : cinfo.cbet3 / tablenum;
        value3 = this.NumberLimit(value3);
        this.ui_cbetRate.text = UIUtil.NumberToInt(value3 * 100) + "%";
        /**激进度 */
        let value4 = tablenum == 0 ? 0 : cinfo.FillingCount / tablenum / 4;
        value4 = this.NumberLimit(value4);
        this.ui_radical.text = UIUtil.NumberToInt(value4 * 100) + "%";
        /**3 bet */
        let value5 = tablenum == 0 ? 0 : cinfo.bet3 / tablenum;
        value5 = this.NumberLimit(value5);
        this.ui_bet3Rate.text = UIUtil.NumberToInt(value5 * 100) + "%";
        /**加注入池率 */
        let value6 = tablenum == 0 ? 0 : cinfo.addpoolnum / tablenum;
        value6 = this.NumberLimit(value6);
        this.ui_addBetRate.text = UIUtil.NumberToInt(value6 * 100) + "%";

        let distances = [value4, value5, value6, value1, value2, value3];
        // /**要求没有的时候要显示个最小的图形 所以每个都加了0.05 显示  */
        for (let i = 0; i < 6; i++) {
            distances[i] = distances[i] < 0.1 ? 0.1 : distances[i];
        }
        console.log(distances);
        this.ui_radarImage.drawRegularPolygon(1, cc.Color.RED, cc.color(153, 51, 51), 6, 90, distances);
    }

    private NumberLimit(num: number): number {
        if (num <= 0) return 0;
        if (num >= 1) return 1;
        return num
    }

    /**-----------赛事 --------------*/

    private ssDataList: CompeteRemark[] = []
    private ssSelectIndex: number = 0;
    //赛事列表
    public sc_compete_record(data: sc_compete_record) {
        this.ssDataList = [];

        this.ui_n95.text = data.WinCount + "";
        this.ui_n94.text = data.TotalRoundCount + "";
        this.ui_n96.text = data.FinalRoundCount + "";
        if (data.infos == null) {
            this.ui_n93.text = "0";
            this.ui_ssResoutList.numItems = 0;
        } else {
            this.ui_n93.text = data.infos.length + "";
            this.ssDataList = data.infos;
            this.ui_ssResoutList.numItems = data.infos.length;
        }

    }

    public ssRenderListItem(index: number, item: fgui.GObject) {
        let go = <fgui.GButton>item;
        /**赛事图片 */
        UIUtil.loadImage(go.getChild("n8").asLoader, this.ssDataList[index].pic);
        /**赛事名 */
        go.getChild("n2").asTextField.text = this.ssDataList[index].competename;
        /**赛事时间 */
        go.getChild("n4").asTextField.text = this.ssDataList[index].starttime;
        /**赛事赢取 */
        go.getChild("n7").asTextField.text = this.ssDataList[index].wingold + "";
        /**赛事排名 */
        go.getChild("n6").asTextField.text = this.ssDataList[index].rank + "";
        /**赛事id，不显示 */
        go.getChild("cid").asTextField.text = this.ssDataList[index].competeid + "";
    }

    /**賽事详情 */
    public clickSSList(item: fgui.GObject) {
        let go = <fgui.GButton>item;
        let competentId = go.getChild("cid").asTextField.text;
        LobbyViewCtr.instance.view.showmySsDerailsView(Number.parseInt(competentId));
    }


    /**查找牌局相关 */
    public showSelectPanel(isShow: boolean) {
        this.ui_selectPanel.visible = isShow;
    }
    public clickSelectCard() {
        let tid = this.ui_inputSelectID.text.trim();
        this.getTexasZJ(tid);
        this.showSelectPanel(false);
    }
}

class Zhanji {
    public createTime: string;
    public tnum: string;
    public preG: string;
    public level: string;
    public pnum: string;
    public gains: string;
    public gametype: number;
}