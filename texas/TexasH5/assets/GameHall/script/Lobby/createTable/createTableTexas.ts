import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { cs_createtable_tex, sc_createtable_tex } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";


/**
 * @description 创建德州房间
 */
export default class createTableTexas extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "createTable_texas";
    }

    private ui_btn_back: fgui.GButton = null;
    private ui_btn_create: fgui.GButton = null;

    private ui_nameInput: fgui.GTextInput = null;
    private ui_startCount: fgui.GComboBox = null;
    private ui_roomCount: fgui.GComboBox = null;
    private ui_runTime: fgui.GComboBox = null;
    private ui_xiaomang: fgui.GComboBox = null;
    private ui_damang: fgui.GComboBox = null;
    private ui_qianzhu: fgui.GComboBox = null;
    private ui_minJoinInput: fgui.GTextInput = null;
    private ui_maxJoinInput: fgui.GTextInput = null;
    private ui_dizhuInput: fgui.GTextInput = null;
    private ui_gameModel: fgui.GComboBox = null;
    private ui_baoxian: fgui.GComboBox = null;
    private ui_AOF_Times: fgui.GComboBox = null;
    private ui_yanshikanpai: fgui.GComboBox = null;
    private ui_fPassword: fgui.GTextInput = null;
    private ui_limitIOS: fgui.GComboBox = null;
    private ui_limitDaiRu: fgui.GComboBox = null;
    private ui_gpsLimit: fgui.GComboBox = null;
    private ui_ipLimit: fgui.GComboBox = null;

    private startCount: string[] = ["2", "3", "4", "5", "6", "7", "8", "9"];
    private roomCount: string[] = ["2", "3", "4", "5", "6", "7", "8", "9"];
    private runTime: string[] = ["10", "30", "60", "120", "240", "360"];
    private xiaomang: string[] = ["0.1", "0.2", "0.5", "1", "2", "5", "10", "25", "50", "100", "200", "500"];
    private damang: string[] = ["0.2"];
    private qianzhu: string[] = ["小盲", "大盲", "staddle"];
    private gameModel: string[] = ["正常模式", "短牌", "Fold or All In"];
    private baoxian: string[] = ["是", "否"];
    private AOF_Times: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    private yanshikanpai: string[] = ["是", "否"];
    private limitIOS: string[] = ["是", "否"];
    private limitDaiRu: string[] = ["是", "否"];
    private limitGPS: string[] = ["是", "否"];
    private limitIP: string[] = ["是", "否"];

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
    }

    OnLoadCompleted() {
        this.addBtnCallback();
        this.Show();
    }

    public addBtnCallback() {
        this.ui_btn_back.onClick(() => {
            this.Hide();
        })
        this.ui_btn_create.onClick(() => {
            let name: string = this.ui_nameInput.text;
            // if (name == "") {
            //     CommonCtr.instance.view.ShowTipLabel("请输入房间名字");
            //     return;
            // } else {
            this.cs_createtable_tex();
            // }
        })
        this.ui_xiaomang.node.on(fgui.Event.STATUS_CHANGED, () => {
            this.ui_damang.items = [Number(this.ui_xiaomang.text) * 2 + ""];
            this.ui_damang.text = Number(this.ui_xiaomang.text) * 2 + "";
            this.ui_minJoinInput.text = Number(this.ui_xiaomang.text) * 200 + "";
            this.ui_maxJoinInput.text = Number(this.ui_xiaomang.text) * 2000 + "";
            this.ui_dizhuInput.text = this.ui_xiaomang.text;
        })
    }

    public initDefaultData() {
        this.ui_nameInput.text = "桌子001";

        this.ui_startCount.items = this.startCount;
        this.ui_startCount.text = this.startCount[0];

        this.ui_roomCount.items = this.roomCount;
        this.ui_startCount.text = this.roomCount[0];

        this.ui_runTime.items = this.runTime;
        this.ui_runTime.value = this.runTime[0];
        this.ui_runTime.text = this.runTime[0];

        this.ui_xiaomang.items = this.xiaomang;
        this.ui_xiaomang.text = this.xiaomang[1];

        this.ui_damang.items = [Number(this.ui_xiaomang.text) * 2 + ""];
        this.ui_damang.text = Number(this.ui_xiaomang.text) * 2 + "";

        this.ui_qianzhu.items = this.qianzhu;
        this.ui_qianzhu.text = this.qianzhu[0];

        this.ui_minJoinInput.text = Number(this.ui_xiaomang.text) * 200 + "";
        this.ui_maxJoinInput.text = Number(this.ui_xiaomang.text) * 2000 + "";
        this.ui_dizhuInput.text = this.ui_xiaomang.text;
        this.ui_fPassword.text = "";

        this.ui_gameModel.items = this.gameModel;
        this.ui_gameModel.text = this.gameModel[0];

        this.ui_baoxian.items = this.baoxian;
        this.ui_baoxian.text = this.baoxian[0];

        this.ui_AOF_Times.items = this.AOF_Times;
        this.ui_AOF_Times.text = this.AOF_Times[0];

        this.ui_yanshikanpai.items = this.yanshikanpai;
        this.ui_yanshikanpai.text = this.yanshikanpai[1];

        this.ui_limitIOS.items = this.limitIOS;
        this.ui_limitIOS.text = this.limitIOS[1];

        this.ui_limitDaiRu.items = this.limitDaiRu;
        this.ui_limitDaiRu.text = this.limitDaiRu[1];

        this.ui_gpsLimit.items = this.limitGPS;
        this.ui_gpsLimit.text = this.limitGPS[0];

        this.ui_ipLimit.items = this.limitIP;
        this.ui_ipLimit.text = this.limitIP[0];
    }

    public cs_createtable_tex() {
        let data: cs_createtable_tex = new cs_createtable_tex();
        data.gameid = 51;
        data._g = 0;
        data.numpertable = Number(this.ui_startCount.text);
        data.maxCount = 200;
        data.Duration = Number(this.ui_runTime.text);
        let xiaomangValue: number = Number(this.ui_xiaomang.text) * 100;
        data.into = xiaomangValue;
        data.baserate = xiaomangValue;
        let pregamble = xiaomangValue;
        if (this.ui_qianzhu.text == "大盲") {
            pregamble = pregamble * 2;
        } else if (this.ui_qianzhu.text == "staddle") {
            pregamble = pregamble * 4;
        }
        data.pregamble = pregamble;
        if (this.ui_gameModel.text == "正常模式") {
            data.gametype = 1;
        } else if (this.ui_gameModel.text == "保险模式") {
            data.gametype = 2;
        } else if (this.ui_gameModel.text == "短牌") {
            data.gametype = 10;
        } else if (this.ui_gameModel.text == "Fold or All In") {
            data.gametype = 20;
        }
        data.ins = this.ui_baoxian.text == "是" ? 1 : 0;
        data.AOF_Times = Number(this.ui_AOF_Times.text);
        data.roomid = 5101;
        data.password = this.ui_fPassword.text;
        data.openv = 0;
        data.delay = this.ui_yanshikanpai.text == "是" ? 1 : 0;
        data.showCard = 0;
        data.clubidx = 0;
        data.tname = this.ui_nameInput.text;
        data.Inflow = 0;
        data.numpertable = Number(this.ui_startCount.text);
        data.manNum = Number(this.ui_roomCount.text);
        data.intorate_min = Number(this.ui_minJoinInput.text);
        data.intorate_max = Number(this.ui_maxJoinInput.text);
        data.gps = this.ui_gpsLimit.text == "是" ? 1 : 0;
        data.ip = this.ui_ipLimit.text == "是" ? 1 : 0;
        data.cinto = this.ui_limitDaiRu.text == "是";
        data.ios = this.ui_limitIOS.text == "是";
        // data.allianceid = 0;
        // data.cinto = false;
        // data.clubidx = 0;
        // data.Duration = 30
        // data.into = 50;
        // data.intorate_min = 1;
        // data.intorate_max = 4;
        // data.maxCount = 6;
        // data.manNum = 9;
        // data.baserate = 100;
        // data.pregamble = 100;
        // data.gametype = 1;
        // data.numpertable = 2;
        // data.tname = this.ui_nameInput.text;
        // data._g = this.Model.gameid;
        // data.gameid = this.Model.gameid;
        // data.roomid = this.Model.tableid;
        // data.openplay = true;
        data.fn = "cs_createtable_tex";
        WebSocketManager.getInstance.SendJSON(data, this.sc_createtable_tex.bind(this));
    }

    public sc_createtable_tex(data: sc_createtable_tex) {
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("创建房间成功");
            LobbyViewCtr.instance.view.lobbyController.cs_gettablelist_tex();
            this.Hide();
        }
        else if (data.result == -4) {
            console.log("sc_createtable_bf diam is not enough...");
            CommonCtr.instance.view.ShowTipLabel("sc_createtable_bf diam is not enough...");
        }
        else {
            console.log("sc_createtable_bf error code:" + data.result);
            CommonCtr.instance.view.ShowTipLabel("sc_createtable_bf error code:" + data.result);
        }
    }

    public Show() {
        super.Show();
        this.initDefaultData();
    }

    public Hide() {
        super.Hide();
    }
}