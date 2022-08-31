import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { cs_chat, sc_chat, sc_chat_n, sc_disconnect_n, OtherUserInfoSD } from "../../../../Script/BaseFrame/cs_base";
import { SceneManager } from "../../../../Script/BaseFrame/SceneManager";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { cs_applyexittable } from "../../../../Script/modules/@mogafa/utils/lib/ClientMessage";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { sc_compete_rank_info } from "../../../../GameHall/script/Lobby/LobbyNetData";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { F_TexasModel } from "../Model/F_TexasModel";
import { TexasLanguage } from "../Model/TexasLanguage";
import { sc_entertablenum_tex, cs_getgamelevel, sc_getgamelevel, cs_chatlog, sc_chatlog, sc_ready_tex_n, sc_tablestart_tex_n, sc_token_tex_n, sc_instoken_tex_n, sc_gamble_tex_n, sc_giveup_tex_n, sc_end_tex_n, sc_bigend_tex_n, cs_sitdown_tex, sc_sitdown_tex, sc_sitdown_tex_n, cs_sitdownwait_tex, sc_sitdownwait_tex, sc_refreshbalance_tex_n, sc_agreeintogold_tex_n, cs_addgoldingame_tex, sc_addgoldingame_tex, cs_refreshbalance_club, sc_refreshbalance_club, cs_ready_tex, sc_ready_tex, cs_gamble_tex, sc_gamble_tex, cs_giveup_tex, sc_giveup_tex, cs_insurance_tex, sc_insurance_tex, sc_insurance_tex_n, cs_dismisstable_tex, sc_dismisstable_tex, cs_applyexittable_tex, sc_applyexittable_tex, cs_situpkeep_tex, sc_situpkeep_tex, cs_advancesettle_tex, sc_advancesettle_tex, sc_applyexittable_tex_n, sc_one_exittable_n, sc_situpkeep_tex_n, cs_enterrobot_tex, sc_enterrobot_tex, cs_thistory_tex, sc_thistory_tex, cs_roomhistory_tex, sc_roomhistory_tex, PInfoSD, TexTInfoSD, cs_texascollect_tex, sc_texascollect_tex, cs_getgain_tex, sc_getgain_tex, cs_showmycard_tex, sc_showmycard_tex, sc_showmycard_tex_n, cs_delay_tex, sc_delay_tex, sc_delay_tex_n, cs_tickuser_tex, sc_tickuser_tex, sc_tickuser_tex_n, cs_userremark_tex, sc_userremark_tex, sc_refreshtableuser_n, cs_getalljackpot_tex, sc_getalljackpot_tex, sc_alljackpot_tex_n, cs_seerestcard_tex, sc_seerestcard_tex, cs_forceshowcard_tex, sc_forceshowcard_tex, cs_goldback_tex, sc_goldback_tex, sc_goldback_tex_n, cs_compete_table_info, sc_compete_table_info, sc_compete_award_info, cs_gamereport_tex, sc_gamereport_tex, sc_sitdownwait_tex_n, cs_sitdownwaitup_tex, sc_sitdownwaitup_tex, sc_sitdownwaitup_tex_n, sc_openplay_tex_n, sc_getnotice_n, cs_freshplayerInfoSD, sc_freshplayerInfoSD } from "../Model/TexasNetData";
import CardRedbetComp from "../View/CardRedbetComp";
import F_TexasView from "../View/F_TexasView";
import TexasUserComp from "../View/TexasUserComp";
import { TexQueueMessages } from "../View/TexQueueMessages";
import TimeInfoMgrTex from "../View/TimeInfoMgrTex";

//#autoaddnamespace#
export default class F_TexasViewCtr {
    public view: F_TexasView
    private static _viewCtr: F_TexasViewCtr;

    private _model: F_TexasModel;
    static get instance(): F_TexasViewCtr {
        if (this._viewCtr == null) {
            this._viewCtr = new F_TexasViewCtr();
        }
        return this._viewCtr;
    }


    public get Model(): F_TexasModel {
        if (this._model == null) {
            this._model = new F_TexasModel();

            this.Model.gameid = 51;
            this.Model.levelid = 511;
            this._model.Init();
        }
        return this._model;
    }

    public RegistNotify() {
        //添加到队列处理
        console.log("F_TexasViewCtr  RegistNotify");
        console.error("注册消息事件");
        WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", (data) => { this.AddTexMessages(data, "sc_sitdown_tex_n", this.sc_sitdown_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_tablestart_tex_n", (data) => { this.AddTexMessages(data, "sc_tablestart_tex_n", this.sc_tablestart_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_token_tex_n", (data) => { this.AddTexMessages(data, "sc_token_tex_n", this.sc_token_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_instoken_tex_n", (data) => { this.AddTexMessages(data, "sc_instoken_tex_n", this.sc_instoken_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_giveup_tex_n", (data) => { this.AddTexMessages(data, "sc_giveup_tex_n", this.sc_giveup_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_end_tex_n", (data) => { this.AddTexMessages(data, "sc_end_tex_n", this.sc_end_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_bigend_tex_n", (data) => { this.AddTexMessages(data, "sc_bigend_tex_n", this.sc_bigend_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_insurance_tex_n", (data) => { this.AddTexMessages(data, "sc_insurance_tex_n", this.sc_insurance_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_applyexittable_tex_n", (data) => { this.AddTexMessages(data, "sc_applyexittable_tex_n", this.sc_applyexittable_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_situpkeep_tex_n", (data) => { this.AddTexMessages(data, "sc_situpkeep_tex_n", this.sc_situpkeep_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_chat_n", (data) => { this.AddTexMessages(data, "sc_chat_n", this.sc_chat_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_tickuser_tex_n", (data) => { this.AddTexMessages(data, "sc_tickuser_tex_n", this.sc_tickuser_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_refreshtableuser_n", (data) => { this.AddTexMessages(data, "sc_refreshtableuser_n", this.sc_refreshtableuser_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_compete_table_info", (data) => { this.AddTexMessages(data, "sc_compete_table_info", this.sc_compete_table_info.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_compete_award_info", (data) => { this.AddTexMessages(data, "sc_compete_award_info", this.sc_compete_award_info.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_compete_rank_info", (data) => { this.AddTexMessages(data, "sc_compete_rank_info", this.sc_compete_rank_info.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_sitdownwait_tex_n", (data) => { this.AddTexMessages(data, "sc_sitdownwait_tex_n", this.sc_sitdownwait_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_sitdownwaitup_tex_n", (data) => { this.AddTexMessages(data, "sc_sitdownwaitup_tex_n", this.sc_sitdownwaitup_tex_n.bind(this)) });
        WebSocketManager.getInstance.RegistNotify("sc_goldback_tex_n", (data) => { this.AddTexMessages(data, "sc_goldback_tex_n", this.sc_goldback_tex_n.bind(this)) });



        // WebSocketManager.getInstance.RegistNotify("sc_tablestart_tex_n", this.sc_tablestart_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_token_tex_n", this.sc_token_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_ready_tex_n", this.sc_ready_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_instoken_tex_n", this.sc_instoken_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_gamble_tex_n", this.sc_gamble_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_giveup_tex_n", this.sc_giveup_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_end_tex_n", this.sc_end_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_bigend_tex_n", this.sc_bigend_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_disconnect_n", this.sc_disconnect_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", this.sc_sitdown_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_refreshbalance_tex_n", this.sc_refreshbalance_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_agreeintogold_tex_n", this.sc_agreeintogold_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_insurance_tex_n", this.sc_insurance_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_applyexittable_tex_n", this.sc_applyexittable_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_one_exittable_n", this.sc_one_exittable_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_situpkeep_tex_n", this.sc_situpkeep_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_showmycard_tex_n", this.sc_showmycard_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_delay_tex_n", this.sc_delay_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_chat_n", this.sc_chat_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_tickuser_tex_n", this.sc_tickuser_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_refreshtableuser_n", this.sc_refreshtableuser_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_alljackpot_tex_n", this.sc_alljackpot_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_freshgold_n", this.sc_freshgold_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_getnotice_n", this.sc_getnotice_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_openplay_tex_n", this.sc_openplay_tex_n.bind(this));
    }

    public UnRegistNotify() {
        WebSocketManager.getInstance.UnRegistNotify("sc_sitdown_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_tablestart_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_token_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_instoken_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_giveup_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_end_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_bigend_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_insurance_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_applyexittable_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_situpkeep_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_chat_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_tickuser_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_refreshtableuser_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_compete_table_info");
        WebSocketManager.getInstance.UnRegistNotify("sc_compete_award_info");
        WebSocketManager.getInstance.UnRegistNotify("sc_compete_rank_info");
        WebSocketManager.getInstance.UnRegistNotify("sc_sitdownwait_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_sitdownwaitup_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_goldback_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_ready_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_gamble_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_disconnect_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_refreshbalance_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_agreeintogold_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_one_exittable_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_showmycard_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_delay_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_alljackpot_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_openplay_tex_n");
    }

    // public CreateTableCallBack:Function=null;
    /// <summary>
    ///创建房间   
    /// </summary>   
    // public cs_createtable_tex()
    // { 
    //      console.log("cs_createtable_tc...");
    //     let data:cs_createtable_tex = new cs_createtable_tex(); 
    //     data.allianceid = 0; 
    //     data.cinto = false;
    //     data.clubidx = 0;
    //     data.Duration = 30
    //     data.into = 50;
    //     data.intorate_min= 1;
    //     data.intorate_max = 4;
    //     F_TexasViewCtr.instance.Model.intorate_min = data.intorate_min;
    //     F_TexasViewCtr.instance.Model.intorate_max = data.intorate_max;
    //     data.maxCount = 6;
    //     data.manNum = 9;
    //     this.Model.manNum = data.manNum;
    //     data.baserate = 100; 
    //     data.pregamble = 100;
    //     data.gametype = 1;
    //     data.numpertable = 2;
    //     data.tname= "testAAA";
    //     data._g = this.Model.gameid;
    //     data.gameid = this.Model.gameid;
    //     data.roomid = this.Model.tableid;
    //     data.openplay = true;
    //     data.fn = "cs_createtable_tex"; 
    //     WebSocketManager.getInstance.SendJSON(data,this.sc_createtable_tex.bind(this));
    // }

    // public sc_createtable_tex( data:sc_createtable_tex)
    // {
    //     //if (this.view == null || this.view._isDestory) return;
    //     if (data.result == 1)
    //     {
    //         console.log("sc_createtable_bf success...");
    //         this.Model.levelid = data.levelid;
    //         this.Model.tableid = data.tableid;

    //         if(this.CreateTableCallBack) this.CreateTableCallBack(data.tnumber)
    //     }
    //     else if (data.result == -4)
    //     {
    //         console.log("sc_createtable_bf diam is not enough...");
    //     }
    //     else 
    //     {
    //         console.log("sc_createtable_bf error code:" + data.result ); 
    //     } 
    // }

    public AddTexMessages(data: any, funName: string = null, fun: Function = null) {
        TexQueueMessages.instance.AddTexMes(funName, data, fun);
    }

    public sc_entertablenum_tex(data: sc_entertablenum_tex) {
        if (data.result == 1) {
            F_TexasViewCtr.instance.Model.SetbaseDataId(data.gameid, data.tableid, data.levelid);
            F_TexasViewCtr.instance.Model.Room_tnumber = data.tnum;
            F_TexasViewCtr.instance.Model.Room_name = data.tname;
            F_TexasViewCtr.instance.Model.manNum = data.manNum;
            F_TexasViewCtr.instance.Model.minPC = data.minPC;
            F_TexasViewCtr.instance.Model.openV = data.openv;
            F_TexasViewCtr.instance.Model.brate = data.brate;
            F_TexasViewCtr.instance.Model.turnGamble = data.brate;
            F_TexasViewCtr.instance.Model.clicknum = data.clicknum;
            F_TexasViewCtr.instance.Model._mangoOfTable = data.jackpot;
            F_TexasViewCtr.instance.Model.intorate_min = data.intorate_min * 100;
            F_TexasViewCtr.instance.Model.intorate_max = data.intorate_max * 100;

            // console.error("最小带入："+F_TexasViewCtr.instance.Model.intorate_min);
            // console.error("最大带入："+F_TexasViewCtr.instance.Model.intorate_max);
            F_TexasViewCtr.instance.Model.pas = data.pas;
            F_TexasViewCtr.instance.Model.pregamble = data.pregamble;
            F_TexasViewCtr.instance.Model.gps = data.gps;
            F_TexasViewCtr.instance.Model.ip = data.ip;
            F_TexasViewCtr.instance.Model.openplay = data.openplay;
            F_TexasViewCtr.instance.Model.isopen = data.oplay;
            F_TexasViewCtr.instance.Model.Inflow = data.Inflow;
            F_TexasViewCtr.instance.Model.ios = data.ios;
            F_TexasViewCtr.instance.Model.delay = data.delay;
            F_TexasViewCtr.instance.Model.showCard = data.showCard;
            F_TexasViewCtr.instance.Model.cinto = data.cinto;
            F_TexasViewCtr.instance.Model.gametype = data.gametype;
            F_TexasViewCtr.instance.Model.delayCount = data.delays;
            F_TexasViewCtr.instance.Model.IsSupper = data.IsSupper;
            F_TexasViewCtr.instance.Model.IsSettle = data.IsSettle;
            F_TexasViewCtr.instance.Model.clubslist = data.clubslist;
            F_TexasViewCtr.instance.Model.intoCid = data.intoCid;
            F_TexasViewCtr.instance.Model.fshownum = data.fshownum;
            F_TexasViewCtr.instance.Model.clubid = data.clubid;
            F_TexasViewCtr.instance.Model.ownnerid = data.ownnerid;
            F_TexasViewCtr.instance.Model.cgold = data.cgold;
            F_TexasViewCtr.instance.Model.ins = data.ins;
            F_TexasViewCtr.instance.Model.AOF_Times = data.AOF_Times;
            F_TexasViewCtr.instance.Model.level = data.level;
            F_TexasViewCtr.instance.Model.min_level = data.min_level;
            F_TexasViewCtr.instance.Model.max_level = data.max_level;
            F_TexasViewCtr.instance.Model.competeid = data.competeid;
            F_TexasViewCtr.instance.Model.matchName = data.name;
            F_TexasViewCtr.instance.Model.bigblind = data.bigblind;
            F_TexasViewCtr.instance.Model.SetCurSClub(data.intoCid);
            F_TexasViewCtr.instance.Model.SetRemainTime(data.lefts);

            F_TexasViewCtr.instance.Model.table = data;
            F_TexasViewCtr.instance.Model.palyerlist = data.palyerlist;
            F_TexasViewCtr.instance.Model.pos2apply = data._recover._pos2apply;


        }
        else {
            if (data.result == -10001) console.log("房间找不到或者已满员!");
            F_TexasViewCtr.instance.Model.mPlayerModel.state = 0;
        }
    }

    //获取场次
    public cs_getgamelevel() {
        let data: cs_getgamelevel = new cs_getgamelevel();
        data.gameid = F_TexasViewCtr.instance.Model.gameid;
        data.fn = "cs_getgamelevel";
        WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_getgamelevel.bind(this));
    }
    public sc_getgamelevel(data: sc_getgamelevel) {
        if (data.result == 1) {
            console.log("AppConst.currentlevelid = 2" + AppConst.currentlevelid);
            F_TexasViewCtr.instance.Model.gamelevel = data.levellist.find(item => { return AppConst.currentlevelid == item.id });
        }

    }

    // 发送消息
    public cs_chat(type: number, tpos: number, content: string, _ngold: number) {
        let data: cs_chat = new cs_chat();
        data.levelid = this.Model.levelid;
        data.tableid = this.Model.tableid;
        data.type = type;
        data.tpos = tpos;
        data.content = content;
        data.ngold = _ngold;
        data._g = this.Model.gameid;
        data.fn = "cs_chat";
        WebSocketManager.getInstance.SendJSON(data, this.sc_chat.bind(this));
    }

    public sc_chat(data: sc_chat) {
        console.log("----sc_chat----", data);
        if (this.view == null || this.view._isDestory) return;
        if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel(TexasLanguage.getLanguageById(1527));
        }
    }

    public sc_chat_n(data: sc_chat_n) {
        // if (this.view == null || this.view._isDestory) return;
        // //Debug.LogError("聊天推送");
        // if (data.result == 1) {
        //     this.view.sc_chat_n(data);
        // } else {
        //     this.view.tipView.ShowTipLabel("金币不足");//金币不足
        // }
        console.log("----sc_chat_n----", data);
        if (this.view == null || this.view._isDestory) return;
        if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel(TexasLanguage.getLanguageById(1526));
            return;
        }
        this.view.sc_chat_n(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 弹幕记录
    /// </summary>
    /// <param name="tableid"></param>
    /// <param name="roomid"></param>
    public cs_chatlog() {
        let _getlist = new cs_chatlog();
        _getlist.tableid = this.Model.tableid;
        _getlist.gameid = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_chatlog";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_chatlog.bind(this));
    }

    /// <summary>
    /// 弹幕记录返回
    /// </summary>
    /// <param name="data"></param>
    public sc_chatlog(data: sc_chatlog) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_chatlog(data);
        } else {
            this.view.tipView.ShowTipLabel("sc_chatlog error code:" + data.result);
        }
    }

    /// <summary>
    /// 通知这桌有人准备了
    /// </summary>
    /// <param name="data"></param>
    public sc_ready_tex_n(data: sc_ready_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_ready_tex_n(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_ready_tex_n error code:" + data.result);
        }
    }
    /// <summary>
    /// 通知开始了
    /// </summary>
    /// <param name="data"></param>
    public sc_tablestart_tex_n(data: sc_tablestart_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.isGaming = true;
            this.Model.isShowPersonRemind = false;
            this.Model.isselfontable = true;
            this.Model._ShouPai = data._showCard;
            this.Model._curGambleLimitMin = this.Model.gamelevel.baserate;
            this.Model.MatchCode = data.MatchCode;
            this.Model.PlayingUsers = data._pos2Gamble;
            this.Model.BigSmallPlayingUser = data._pos2bigsmall;
            this.Model.isTurnOver = false;
            this.Model.isinsurance = false;
            this.Model.delayCount = this.Model.delayCount == -1 ? -1 : 0;
            this.Model.turnGamble = this.Model.brate;
            this.Model._jpot = 0;
            this.Model._gamble = 0;
            this.Model.insList31 = null;
            this.Model.insList32 = null;
            this.Model._CurTurnCount = 0; //每一小局结束了，记录当前的turn为0
            this.Model.endDelay = false;
            this.Model.isLastStepStart = true;
            this.view.sc_tablestart_tex_n(data._bankerPos, data._showCard, data._pos2Gamble, data._pos2Gold, data._pos2bigsmall, data.lefts, data._msgid <= 0, data._pos2strad);
            // TexQueueMessages.instance.RemoveFirstMes();
        }
        else {
            this.view.tipView.ShowTipLabel("sc_tablestart_tex_n error code:" + data.result);
        }
    }

    /// <summary>
    /// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
    /// </summary>
    /// <param name="data"></param>
    public sc_token_tex_n(data: sc_token_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.ShowAnchorCcardsTip(false);
            this.Model._curGambleLimitMin = data._min;
            this.Model._curMaxGamble = data._max;
            this.Model._jpot = data._jackpot;
            this.Model._mingamble = data._min;
            this.Model._emaxg = data._emaxg;
            this.Model.potlist = data.potlist;
            this.Model._CommonCard = data._Cards;
            let _turnChange: boolean = (this.Model._CurTurnCount != data._tc); // && Model._CurTurnCount>=0;
            this.Model.firstTurnStart = this.Model._CurTurnCount != data._tc && this.Model._CurTurnCount <= 0;
            console.log(this.Model._CurTurnCount + "," + data._tc + " turnChange........................." + _turnChange);
            this.Model._CurTurnCount = data._tc;
            if (this.Model.isTurnOver) {
                if (data.potlist == null || data.potlist.length <= 0)
                    console.log("data polist is null");
                this.Model._lastjpot = data.potlist == null || data.potlist.length <= 0 ? 0 : data.potlist[0];
                //Model._lastjpot = data._jackpot;sc_token_tex_n
            }
            console.log("this.Model.isLastStepStart === ", this.Model.isLastStepStart);
            if (this.Model.isLastStepStart) {
                this.Model.isLastStepStart = false;
                TimeInfoMgrTex.instance.AddTimer(0.5, () => {
                    console.log("延迟执行 sc_token_tex_n");
                    this.view.sc_token_tex_n(data, _turnChange, 0.5);
                });
            } else {
                this.view.sc_token_tex_n(data, _turnChange);
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_token_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 移一次token  用户可能有两个操作，选保额，或不保 
    /// </summary>
    /// <param name="data"></param>
    public sc_instoken_tex_n(data: sc_instoken_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.ShowAnchorCcardsTip(false);
            this.Model._jpot = data._jackpot;
            this.Model._CommonCard = data._Cards;
            let _turnChange: boolean = (this.Model._CurTurnCount != data._tc); // && Model._CurTurnCount>=0;
            let _firstTurnStart: boolean = this.Model._CurTurnCount != data._tc && this.Model._CurTurnCount <= 0;
            this.Model._CurTurnCount = data._tc;
            //_ilist为空或者count=0时候不走保险模式，绑定公牌
            if ((data._ilist31 != null && data._ilist31.length >= 3) || (data._ilist32 != null && data._ilist32.length >= 3)) {
                if (data.pos == this.Model._posServer)//只有自己购买保险的时候才刷新数据
                {
                    this.Model.isinsurance = true;
                    this.Model.insList32 = data._ilist32;
                    this.Model.outs32 = data.outs32;
                    this.Model.curJiangchi32 = data.mpot32;
                    this.Model.insList31 = data._ilist31;
                    this.Model.outs31 = data.outs31;
                    this.Model.curJiangchi31 = data.mpot31;
                    this.Model.inOrder = data.order;
                    this.Model.insIpos = data.ipos;
                }
                if (data.potlist == null || data.potlist.length <= 0)
                    console.log("data polist is null");
                this.Model._lastjpot = data.potlist == null || data.potlist.length <= 0 ? 0 : data.potlist[0];
                this.view.sc_instoken_tex_n(data.pos, _turnChange, _firstTurnStart, data._pos2Shoupai, data._pos2win, data.potlist, data.ipos);
            }
            else {
                if (data.potlist == null || data.potlist.length <= 0)
                    console.log("data polist is null");
                this.Model._lastjpot = data.potlist == null || data.potlist.length <= 0 ? 0 : data.potlist[0];

                this.view.sc_Allin_tex_n(data._pos2Shoupai, data.potlist);
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_instoken_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 有人下注了
    /// </summary>
    /// <param name="data"></param>
    public sc_gamble_tex_n(data: sc_gamble_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.isTurnOver = data._turnOver;
            this.Model._jpot = data._jackpot;
            this.Model._gamble = data._gamble;
            this.view.sc_gamble_tex_n(data);
            if (!data._allin) {
                this.Model.turnGamble = data._gamble > this.Model.turnGamble ? data._gamble : this.Model.turnGamble;
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_gamble_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary> 
    ///  有人弃牌了
    /// </summary>

    public sc_giveup_tex_n(data: sc_giveup_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (data.pos == this.Model._posServer) {
                this.Model.isselfontable = false;
            }
            this.view.sc_giveup_tex_n(data.pos, data._turnOver);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_giveup_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary> 
    ///  通知结束了
    /// </summary>
    public sc_end_tex_n(data: sc_end_tex_n) {
        console.log("---sc_end_tex_n---", data);
        this.Model.id2keep = [];
        this.Model.isGaming = false;
        this.Model.isTurnOver = false;
        this.Model.isinsurance = false;
        this.Model.isselfontable = false;
        if (this.Model._scards != null)
            this.Model._scards = [];
        if (this.view == null || this.view._isDestory) {
            this.Model.PlayingUsers = null;
            this.Model.BigSmallPlayingUser = null;
            this.Model.insList31 = null;
            this.Model.insList32 = null;
            this.Model._CurTurnCount = 0; //每一小局结束了，记录当前的turn为0
            this.Model.endDelay = false;
        } else {
            if (this.view._bftable == null) return;
            var _tempUser = this.view._bftable.userList.find(item => { return item.self == true });
            if (_tempUser != null && _tempUser.player != null &&
                _tempUser.userInfo != null && _tempUser.userInfo.isW != 1 && _tempUser.userInfo.isW != 2
                && this.Model._ShouPai != null)//自己还在桌子上并且不是观众或占座就强制打开自己的手牌
            {
                for (var i = 0; i < this.Model._ShouPai.length; i++) {
                    let index = i;
                    let _poker = 0;
                    if (_tempUser.self) _poker = this.Model._ShouPai[i];
                    let card: CardRedbetComp = _tempUser.GetCard(index);
                    if (card == null) { console.log("fetal error: SendCard is null"); return; }
                    _tempUser.SetCardVal_pub(card, _poker);
                }
            }
            //先处理玩家离开数据
            this.view.dealEndLeaveData(data);
            //如果在展示公牌,公牌动画之后展示结算
            let disCount: number = this.Model._CommonCard.length - this.view.curCommondCards.length >= 0 ? this.Model._CommonCard.length - this.view.curCommondCards.length : 0;
            let delayy: number = disCount <= 0 ? 1 : ((disCount >= 3 ? 2 * (disCount - 3) + 1.5 : 2 * (disCount - 1) + 1) + 2);
            // console.error("剩下发牌数："+ this.Model._CommonCard.length +"-"+this.view.curCommondCards.length+"="+disCount);
            // console.error("结束延迟："+delayy);
            TimeInfoMgrTex.instance.AddTimer(delayy, () => {
                if (this.Model.isGaming) return;//下局开始当前局的动画还没执行完
                if (this.view != null && !this.view._isDestory)
                    this.view.sc_end_tex_n(data);
                this.Model.PlayingUsers = null;
                this.Model.BigSmallPlayingUser = null;
                this.Model.insList31 = null;
                this.Model.insList32 = null;
                this.Model._CurTurnCount = 0; //每一小局结束了，记录当前的turn为0
                this.Model.endDelay = false;
            });
        }
        // TexQueueMessages.instance.RemoveFirstMes();
        this.view.sc_openplay_tex_n();
    }

    /// <summary>
    /// 大结算 显示后退出游戏
    /// </summary>
    /// <param name="data"></param>
    public sc_bigend_tex_n(data: sc_bigend_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        this.Model.isShowPersonRemind = true;
        if (data.bigend.gainlist == null || data.bigend.gainlist.length == 0) {
            this.Model.Reset();
            this.ExitGame();
            return;
        }
        this.view.sc_bigend_tex_n(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 有人掉线了
    /// </summary>
    /// <param name="data"></param>
    public sc_disconnect_n(data: sc_disconnect_n) {
        if (this.view == null || this.view._isDestory) return;
        this.view.sc_disconnect_n(data);
    }
    //#endregion

    //#region Texas客户端请求
    public cs_autoSitDown_tex(pos: number, clubId: number, password: string) {
        if (pos > this.Model.manNum || pos == 0) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180030));//该位置不能坐下
            return;
        }
        this.cs_sitdown_tex(pos, 0, 1, password, clubId);
    }

    public sc_sitdownwaitup_tex_n(data: sc_sitdownwaitup_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.RemoveUser(data.user.py.userid);
        }

        else {
            this.view.tipView.ShowTipLabel("sc_sitdownwaitup_tex_n error code:" + data.result);
        }
    }

    /// <summary>
    /// 带入金币申请坐下
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos">服务器的pos</param>
    /// <param name="gold">带入金币</param>
    public cs_sitdown_tex(pos: number, gold: number, isKeep: number, password: string, clubidx: number) {
        console.error("======带入金币申请坐下");
        let _getlist: cs_sitdown_tex = new cs_sitdown_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.gold = gold;
        _getlist.clubidx = clubidx;
        _getlist.iskeep = isKeep;
        _getlist.pas = "";
        if (password != null && password != "") {
            _getlist.pas = password;
        }
        // _getlist.lat = Common_SecCtr.instance.Model.loc.lat;
        // _getlist.lng = Common_SecCtr.instance.Model.loc.lng;
        _getlist.fn = "cs_sitdown_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdown_tex.bind(this));
    }

    public sc_sitdown_tex(data: sc_sitdown_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (this.Model.clubid > 0 && this.Model.IsSupper)//俱乐部币房刷新俱乐部币
            {
                // this.Model.cgold = data.ugold;//坐下刷新玩家身上的俱乐部币
                // this.view.UpdateSuperClub();
                // ClubViewCtr.instance.UpdateClubInfocgold(this.Model.curSClub.cid, data.ugold);
            }
            else {
                // LobbyViewCtr.instance.cs_freshplayerInfoSD(); //更新用户金币
            }
            //LobbyViewCtr.instance.sc_freshgold_n(2, data.ugold);  //只是带入，不减少用户身上的金币，不更新 
            AppConst.mPlayerModel.gold = data.ugold;
            return;
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1587));//金币带入不在范围内
            this.Model.cgold = 0;
            this.view.ShowUITakeGoldPanel(true, 0, false);
        } else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1588));//没有可用的空位入座
        } else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1589));//房间已解散
        } else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1590));//该位置已经被占用，请选择其他空位
        } else if (data.result == -8) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2185));//游戏玩家人数已达设置上限人数了
        } else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1591));//密码输入错误
        } else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2218));//不能选择其他俱乐部
        }
        else if (data.result == -11) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2258));//你在该俱乐部已经被冻结
        }
        else if (data.result == -12) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2284));//俱乐部交收中
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        }
        else if (data.result == -18) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2273));//已结算，不可入座
        }
        else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1594));//金币超过最大带入
        } else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1570));//已检测手机定位于在座玩家附近，请前往其他房间游戏
        }
        else if (data.result == -97) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2232));//入池率不满足入座条件
        } else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }

        //坐下失败调用站起
        this.cs_sitdownwaitup_tex();
    }


    public sc_sitdown_tex_n(data: sc_sitdown_tex_n) {
        console.log("---sc_sitdown_tex_n---", data);
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.update_UserInfoSitDown(data.user, data.id2keep, 0);
            let _tempUser: TexasUserComp = this.view._bftable.GetUserByUserId(data.user.py.userid);
            if (_tempUser != null && _tempUser.self)//自己坐下需要吧带入的金币锁定在桌上
            {
                // 默认开启的 不需要提示了
                // if (this.Model.openplay && !this.Model.isopen)//如果是房主开启游戏房间，需要提示玩家需要等待房主开启房间
                // {
                //     this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2264));//等待房主开启牌局
                // }
                this.Model.SetLockGold(Math.floor(data.user.py.gold));//带入的金币，锁定在牌桌
                this.Model.mPlayerModel = data.user.py;
            }

        } else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180010));//此状态不能换座
        }
        else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180011));//坐下失败
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 申请坐下 不带入 显示等待 占位用 
    /// </summary>
    /// <param name="pos"></param>
    /// <param name="iskeep"></param>
    public cs_sitdownwait_tex(pos: number, iskeep: number) {
        let _getlist: cs_sitdownwait_tex = new cs_sitdownwait_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.iskeep = iskeep;
        // _getlist.lat = Common_SecCtr.instance.Model.loc.lat;
        // _getlist.lng = Common_SecCtr.instance.Model.loc.lng;
        _getlist.fn = "cs_sitdownwait_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdownwait_tex.bind(this));
    }

    public sc_sitdownwait_tex(data: sc_sitdownwait_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.WaitToTakeIn();
            return;
        }
        else if (data.result == -1) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1587));//金币带入不在范围内
            this.view.ShowUITakeGoldPanel(true, 0, false);
        }
        else if (data.result == -2) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1588));//没有可用的空位入座
        }
        else if (data.result == -3) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1589));//房间已解散
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1590));//该位置已经被占用，请选择其他空位
        }
        else if (data.result == -8) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2185));//游戏玩家人数已达设置上限人数了
        }
        else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1591));//密码输入错误
        }
        else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1592));//需要重新带入
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        }
        else if (data.result == -18) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2273));//已结算，不可入座
        }
        else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1594));//金币超过最大带入
        }
        else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1570));//已检测手机定位于在座玩家附近，请前往其他房间游戏
        }
        else if (data.result == -97) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2232));//入池率不满足入座条件
        } else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel("sc_sitdownwait_tex error code:" + data.result);
        }

        //坐下失败调用站起
        this.cs_sitdownwaitup_tex();
    }

    public sc_refreshbalance_tex_n(data: sc_refreshbalance_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (this.Model.clubid > 0 && this.Model.IsSupper)//俱乐部币房刷新俱乐部币
            {
                this.Model.cgold = Math.floor(data.gold);//坐下刷新玩家身上的俱乐部币               
                // this.view.UpdateSuperClub();
                // ClubViewCtr.instance.UpdateClubInfocgold(this.Model.curSClub.cid, data.gold);
            }
            else {
                // LobbyViewCtr.instance.cs_freshplayerInfoSD(); //更新用户金币
            }
            if (data.lockgold > 0)//玩家站起时候，带入被同意，刷新锁定金额
            {
                this.Model.SetLockGold(Math.floor(data.lockgold));
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_refreshbalance_tex_n error code:" + data.result);
        }
    }

    public sc_sitdownwait_tex_n(data: sc_sitdownwait_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (data != null) {
                this.view.update_UserInfoSitDown(data.user, data.id2keep, data.atime);
                // if (data.user.py.userid == AppConst.mPlayerModel.userid && data.atime <= 0)//当前占座不是带入请求的时候要弹出带入面板
                //     this.view.WaitToTakeIn();
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_sitdownwait_tex_n error code:" + data.result);
        }
    }

    public cs_sitdownwaitup_tex() {
        let _getlist = new cs_sitdownwaitup_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_sitdownwaitup_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdownwaitup_tex.bind(this));
    }

    public sc_sitdownwaitup_tex(data: sc_sitdownwaitup_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {

        }
        // else if (data.result == -4) {
        //     this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(5034));//已经离桌
        // }
        // else {
        //     this.view.tipView.ShowTipLabel("sc_sitdownwaitup_tex error code:" + data.result);
        // }
    }

    public sc_agreeintogold_tex_n(data: sc_agreeintogold_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.RemoveUser(data.tuserid);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_agreeintogold_tex_n error code:" + data.result);
        }
    }


    public cs_addgoldingame_tex(gold: number, clubidx: number) {
        let _getlist: cs_addgoldingame_tex = new cs_addgoldingame_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.gold = gold;
        _getlist.clubidx = clubidx;
        _getlist.fn = "cs_addgoldingame_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_addgoldingame_tex.bind(this));// () => { return true; });
    }


    public sc_addgoldingame_tex(data: sc_addgoldingame_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            // LobbyViewCtr.instance.cs_freshplayerInfoSD (); //刷新用户金币

        }
        else {
            this.view.AddGoldFail();
            if (data.result == -1) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1595));//余额低于最低补充，请充值
                this.view.ShowUIAddGoldPanel();
            } else if (data.result == -2) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1596));//只能补充一次
            } else if (data.result == -99) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1597));//补充记分超过上限
            } else if (data.result == -10) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2225));//补充的俱乐部必须是带入的俱乐部
            } else {
                this.view.tipView.ShowTipLabel("sc_addgoldingame_tex error code:" + data.result);
            }
        }
    }

    public cs_refreshbalance_club(clubid: number) {
        let _getlist: cs_refreshbalance_club = new cs_refreshbalance_club();
        _getlist._g = this.Model.gameid;
        _getlist.clubid = clubid;
        _getlist.fn = "cs_refreshbalance_club";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_refreshbalance_club.bind(this));// () => { return true; });
    }

    public sc_refreshbalance_club(data: sc_refreshbalance_club) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.cgold = Math.floor(data.gold);//刷新玩家身上的俱乐部币
            this.view.RefreshTakeInPanel();
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1989));//俱乐部不存在
        }
        else {
            this.view.tipView.ShowTipLabel("sc_refreshbalance_club error code:" + data.result);
        }
    }

    // 刷新用户信息
    public cs_freshplayerInfoSD() {
        let pkg = new cs_freshplayerInfoSD();
        pkg.fn = "cs_freshplayerInfoSD";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_freshplayerInfoSD.bind(this));
    }
    public sc_freshplayerInfoSD(data: sc_freshplayerInfoSD) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180036));//金币刷新成功
            AppConst.mPlayerModel.gold = data.user.gold;
            this.view.IsCanAddGold();
            if (this.view.isShowAddGoldPanel) {
                this.view.ShowUIAddGoldPanel(); // 补充计分
            } else {
                this.view.ShowUITakeGoldPanel(true, 0, true, true); // 带入计分
            }
        } else {

        }
    }

    /// <summary>
    /// 准备
    /// </summary>
    /// <param name="_gameid">游戏ID</param>
    /// <param name="levelid"> </param>
    public cs_ready_tex(levelid: number, tableid: number, pos: number) {
        let _getlist: cs_ready_tex = new cs_ready_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = levelid;
        _getlist.tableid = tableid;
        _getlist.pos = pos;
        _getlist.fn = "cs_ready_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_ready_tex.bind(this));// () => { return true; });
    }

    public sc_ready_tex(data: sc_ready_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_ready_tex(data);
        } else {
            this.view.tipView.ShowTipLabel("sc_ready_tex error code:" + data.result);
        }
    }

    /// <summary>
    /// 下注
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="money"></param>
    /// <param name="addrate"></param>
    public cs_gamble_tex(money: number, addrate: boolean) {
        let _getlist: cs_gamble_tex = new cs_gamble_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.money = money;
        _getlist.addrate = addrate;
        _getlist.fn = "cs_gamble_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_gamble_tex.bind(this));// () => { return true; });
    }

    public sc_gamble_tex(data: sc_gamble_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_gamble_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + " sc_gamble_tex error ");
        }
    }

    /// <summary>
    /// 弃牌
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    public cs_giveup_tex(pos: number) {
        let _getlist: cs_giveup_tex = new cs_giveup_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.fn = "cs_giveup_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_giveup_tex.bind(this));// () => { return true; });
    }

    public sc_giveup_tex(data: sc_giveup_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_giveup_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + " giveup error");
        }
    }
    /// <summary>
    /// 保险模式 选择结束请求
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    /// <param name="ins"></param>
    public cs_insurance_tex(pos: number, ins: number, ins32: number, outs: number[]) {
        let _getlist: cs_insurance_tex = new cs_insurance_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.ins = ins;
        _getlist.outs = outs;
        _getlist.ins32 = ins32;
        console.error(pos + "==投保主池：" + ins + ",投保分池：" + ins32 + ",投保outs： " + outs);
        _getlist.fn = "cs_insurance_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_insurance_tex.bind(this));// () => { return true; });
    }

    public sc_insurance_tex(data: sc_insurance_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_insurance_tex(data);
        } else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1510));//购买超时
        } else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1511));//投保额不正确
        } else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1512));//金币不够
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }
    }
    /// <summary>
    /// 通知所有人，购买保险  
    /// </summary>
    /// <param name="data"></param>
    public sc_insurance_tex_n(data: sc_insurance_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_insurance_tex_n(data.pos, data.ins);
        } else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }
    // #endregion

    //#region   解散游戏

    public cs_dismisstable_tex(_callback: Function) {
        if (this.Model.levelid == 0) {
            console.log("cs_applyexittable_tex..Model.levelid == 0");
            return;
        }
        let _getlist: cs_dismisstable_tex = new cs_dismisstable_tex();
        this.dismisstableCallBack = _callback;
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_dismisstable_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_dismisstable_tex.bind(this));// () => { return true; });
    }

    private dismisstableCallBack: Function = null;

    public sc_dismisstable_tex(data: sc_dismisstable_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (this.Model.isGaming) this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2270));//此局结束后房间将自动解散
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1513));//游戏中不能退出游戏！
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(5004));//不是房主
        }
    }


    public ExitTable() {
        // if (this.view != null && this.view.RootObject != null) {
        //     this.view.helpSettingComp.ExitTable ();
        // }
    }
    private applyexittableCallBack: Function = null;
    public cs_applyexittable_tex(_callback: Function) {
        if (this.Model.levelid == 0) {
            console.log("cs_applyexittable_tex..Model.levelid == 0");
            return;
        }
        let _getlist: cs_applyexittable_tex = new cs_applyexittable_tex();
        this.applyexittableCallBack = _callback;
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = this.Model._posServer;
        _getlist.fn = "cs_applyexittable_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_applyexittable.bind(this));// () => { return true; });

    }
    public sc_applyexittable(data: sc_applyexittable_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.Reset();
            if (this.applyexittableCallBack != null) {
                this.applyexittableCallBack();
                this.Model.isGaming = false;
                this.Model.isselfontable = false;
            } else {
                this.ExitGame();
            }
        } else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1513));//游戏中不能退出游戏！
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2251));//allin状态下不能站起或者退出
        }
        else {
            this.view.tipView.ShowTipLabel("sc_applyexittable_tex error code:" + data.result);
        }
    }

    public ApplyExit() { //只有下一次准备界面才能退出
        if (this.Model.palyerlist.length == 1) {
            this.cs_applyexittable();
        } else {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1513));//游戏中不能退出游戏！
        }
    }
    /// <summary>
    /// 解散游戏
    /// </summary>
    public cs_applyexittable() {
        let _getlist: cs_applyexittable = new cs_applyexittable();
        _getlist.gameid = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.pos = this.Model._posServer;
        _getlist.fn = "cs_applyexittable";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_applyexittable_tex.bind(this));//() => { return true; });
    }
    public sc_applyexittable_tex(data: sc_applyexittable_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.ExitGame();
        } else {
            this.view.tipView.ShowTipLabel("sc_applyexittable_tex error cdoe:" + data.result);
        }
    }

    /// <summary>
    /// 申请留座 保留6分钟
    /// </summary>
    public cs_situpkeep_tex(isKeep: boolean) {
        let _getlist: cs_situpkeep_tex = new cs_situpkeep_tex();
        _getlist.keep = isKeep;
        _getlist.tableid = this.Model.tableid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_situpkeep_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_situpkeep_tex.bind(this));// () => { return true; });
    }
    public sc_situpkeep_tex(data: sc_situpkeep_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.SetLockGold(data.lockgold);
            //站起围观要删除数据
            if (!data.keep) {
                if (this.view._bftable.myUser.player != null) {
                    this.Model.SetUserData_isW(this.view._bftable.myUser.player.userid, 1); //变为观众
                    this.view.RemoveUser(this.view._bftable.myUser.player.userid);
                }
            }
            else {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2250));//申请留座成功
            }
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2251));//allin状态下不能站起或者退出
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2254));//保险状态下不能站起
        }
        else {
            if (data.keep) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1598));//申请留座失败
            }
            else {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1599));//站起围观失败 
            }
        }
    }

    /// <summary>
    /// 结算离桌 协议
    /// </summary>
    /// <param name="data"></param>
    public cs_advancesettle_tex() {
        let _getlist: cs_advancesettle_tex = new cs_advancesettle_tex();
        _getlist.tableid = this.Model.tableid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_advancesettle_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_advancesettle_tex.bind(this));// () => { return true; });
    }

    public sc_advancesettle_tex(data: sc_advancesettle_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.IsSettle = data.IsSettle;
            this.view.helpSettingComp.UpdateStateJiesuan();
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2274));//未参与游戏不能结算
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2275));//allin状态不能结算
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2276));//保险状态不能结算
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2278));//已经离桌结算
        }
        else {
            this.view.tipView.ShowTipLabel("sc_advancesettle_tex error code:" + data.result);
        }
    }

    /// <summary>
    /// 通知这桌有人 申请解散游戏 
    /// </summary>
    public sc_applyexittable_tex_n(data: sc_applyexittable_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) { //如果 是自己不用处理
            if (data.pos == this.Model._posServer) {
                this.ExitGame();
            }
            else {//更新走掉的人位置 
                this.Model.RemovePlayerList(data.userid);
                this.view.sc_entertable_texas_n(this.Model.palyerlist);
            }
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    /// <summary>
    /// 退出房间
    /// </summary>
    public sc_one_exittable_n(data: sc_one_exittable_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            // if (data.pos == 0) {
            if (data.pos == this.Model._posServer) {
                TimeInfoMgrTex.instance.AddTimer(0.1, () => {
                    this.ExitGame();
                });
            } else { //更新走掉的人位置 
                let user: OtherUserInfoSD = this.Model.GetUserInfo(data.userid);
                if (data.isK > 0) {
                    if (user != null) {
                        //留座
                        user.isK = data.isK;
                        console.log("isK：" + user.isK);
                        this.view.SetUserForKeepSeat_n(data.userid);
                    } else {
                        console.log("sc_one_exittable_n : 需要离开房间的人员不存在 userId:" + data.userid);
                    }
                } else if (data.isK == 0) {
                    //不处理
                } else {
                    //真正离开房间，删除数据
                    this.view.UpdateRemoveUser(data.userid);
                    // setTimeout(() => {
                    console.error("真正离开房间，删除数据");
                    // this.view.RemoveUser(data.userid);
                    // }, 1500);
                }
            }
            // }
            // else if (data.pos == 3) {   //站起围观
            //     let user: OtherUserInfoSD = this.Model.GetUserInfo(data.userid);
            //     if (data.isK > 0) {
            //         if (user != null) {
            //             //留座
            //             user.isK = data.isK;
            //             this.view.SetUserForKeepSeat_n(data.userid);
            //         }
            //         else {
            //             console.log("sc_one_exittable_n : 需要离开房间的人员不存在 userId:" + data.userid);
            //         }
            //     } else if (data.isK == 0) {
            //         //不处理
            //     }
            //     else {
            //         //真正离开房间，删除数据
            //         this.view.RemoveUser(data.userid);
            //     }
            // }
        } else {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1514));//退出房间失败，非法的操作
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }


    public sc_situpkeep_tex_n(data: sc_situpkeep_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            //站起围观
            let user: OtherUserInfoSD = this.Model.GetUserInfo(data.userid);
            if (data.isK > 0) {
                if (user != null) {
                    //留座
                    user.isK = data.isK;
                    this.view.SetUserForKeepSeat_n(data.userid);
                } else {
                    console.log("sc_one_exittable_n : 需要离开房间的人员不存在 userId:" + data.userid);
                }
            }
            else {
                if (user != null) {
                    this.Model.SetUserData_isW(data.userid, 1); //变为观众
                    if (this.view._bftable == null) return;
                    let _tempUser: TexasUserComp = this.view._bftable.GetUserByUserId(data.userid);
                    if (_tempUser != null && _tempUser.self) {
                        //自己占座时候被强制站起要关闭带入面板
                        this.view.HideUITakeGoldPanel();
                    }
                    this.view.RemoveUser(data.userid);
                }
            }
        } else {
            this.view.tipView.ShowTipLabel("sc_situpkeep_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }
    // #endregion

    //#region  非游戏逻辑功能 
    public notifyPlayVoice(pos: number, content: string) {
        if (this.view != null)// && this.view.RootObject != null) 
        {
            this.view.ShowVoice(pos, content);
        }
    }
    public UpdateUserState(userId: number, keepTime: number, gold: number) {
        if (this.view != null)// && this.view.RootObject != null) 
        {
            this.view.UpdateUserState(userId, keepTime, gold);
        }
    }
    public ShowSelfEndTime(cdTime = 15, totalTime = 15, isShowText = true) {
        if (this.view != null)// && this.view.RootObject != null) 
        {
            this.view.ShowClock(cdTime, totalTime, isShowText);
        }
    }
    public StopSelfEndTime() {
        if (this.view != null)// && this.view.RootObject != null) 
        {
            this.view.StopClock();
        }
    }
    /// <summary>
    /// 牌局回顾
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    public cs_enterrobot_tex() {
        let _getlist: cs_enterrobot_tex = new cs_enterrobot_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_enterrobot_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_enterrobot_tex.bind(this));// () => { return true; });
    }

    // 牌局回顾结果

    public sc_enterrobot_tex(data: sc_enterrobot_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {

        } else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1587));//金币带入不在范围内
            //this.view.ShowUITakeGoldPanel(true, 0, false);
        } else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1588));//没有可用的空位入座
        } else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1589));//房间已解散
        } else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1590));//该位置已经被占用，请选择其他空位
        } else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1591));//密码输入错误
        } else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1592));//需要重新带入
            //需要重新带入，打开金币带入面板 this.view.ShowUITakeGoldPanel(true, this.view.posSit, false);
        } else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1593));//最后5分钟不能坐下
        } else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1594));//金币超过最大带入
        } else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1570));//已检测手机定位于在座玩家附近，请前往其他房间游戏
        } else {
            this.view.tipView.ShowTipLabel("sc_enterrobot_tex error code:" + data.result);
        }
    }

    /// <summary>
    /// 牌局回顾
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    public cs_thistory_tex() {
        let _getlist: cs_thistory_tex = new cs_thistory_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_thistory_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_thistory_tex.bind(this));// () => { return true; });
    }

    // 牌局回顾结果 
    public sc_thistory_tex(data: sc_thistory_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            console.log("牌局回顾结果");
            F_TexasViewCtr.instance.view.UpdateHistoryView_data(data);
        } else {
            this.view.tipView.ShowTipLabel("sc_thistory_tex error code:" + data.result);
        }
    }

    //牌局回顾，大结算后
    public cs_roomhistory_tex() {
        let _getlist: cs_roomhistory_tex = new cs_roomhistory_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_roomhistory_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_roomhistory_tex.bind(this));// () => { return true; });
    }

    public sc_roomhistory_tex(data: sc_roomhistory_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            F_TexasViewCtr.instance.view.UpdateHistoryView_data2(data);
        } else {
            this.view.tipView.ShowTipLabel("sc_thistory_tex error code:" + data.result);
        }
    }

    public ShowHistory() {
        if (this.view == null || this.view._isDestory) return;
        F_TexasViewCtr.instance.view.ShowHistory();
    }
    public ShowHistory_bigend() {
        if (this.view == null || this.view._isDestory) return;
        F_TexasViewCtr.instance.view.ShowHistory_bigend();
    }
    public UpdateHistoryView(ulist: PInfoSD[], Ltulist: TexTInfoSD[], d: number, ShowCard: number) {
        if (this.view == null || this.view._isDestory) return;
        this.view.UpdateHistoryView_ptnn(ulist, Ltulist, d, ShowCard);
    }
    /// <summary>
    /// 收藏单局牌协议
    /// </summary>
    public cs_texascollect_tex(type: number, infoId: string) {
        let _getlist: cs_texascollect_tex = new cs_texascollect_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.type = type;
        _getlist.infoId = infoId;
        _getlist.fn = "cs_texascollect_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_texascollect_tex.bind(this));// () => { return true; });
    }

    public sc_texascollect_tex(data: sc_texascollect_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (this.view == null || this.view._isDestory) {
                // LobbyViewCtr.instance.cs_geymytexascollect();
                return;
            }
            this.view.UpdateCollectData(data.savaNum, data.infoId, data.IsSava);
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2183));//收藏到达上限
        }
        else {
            this.view.tipView.ShowTipLabel("sc_texascollect_tex error code:" + data.result);
        }
    }

    // 战绩申请 
    public cs_getgain_tex() {
        let _getlist: cs_getgain_tex = new cs_getgain_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_getgain_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getgain_tex.bind(this));
    }

    // 战绩返回结果 
    public sc_getgain_tex(data: sc_getgain_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            //Debug.LogError("游戏内请求战绩信息返回");
            F_TexasViewCtr.instance.view.UpdateRecordView(data);
        } else {
            this.view.tipView.ShowTipLabel("cs_getgain_tex error code:" + data.result);
        }
    }

    public cs_showmycard_tex(cardPos: number, type: number) {
        let _getlist: cs_showmycard_tex = new cs_showmycard_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.card = cardPos;
        _getlist.type = type;
        _getlist.fn = "cs_showmycard_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_showmycard_tex.bind(this));// () => { return true; });
    }

    public sc_showmycard_tex(data: sc_showmycard_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            //展示自己的牌秀牌状态
            this.view.ShowMyCardStatus(data);
        }
    }

    public sc_showmycard_tex_n(data: sc_showmycard_tex_n) {
        if (this.view == null || this.view._isDestory) return;

    }

    // 申请分牌延迟 
    public cs_delay_tex() {
        let _getlist: cs_delay_tex = new cs_delay_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_delay_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_delay_tex.bind(this));//() => { return true; });
    }


    public sc_delay_tex(data: sc_delay_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.sc_delay_tex(data);
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(5050));//超出5次延迟
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1601));//金币不足
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1600));//申请延迟失败
        }
    }


    public sc_delay_tex_n(data: sc_delay_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        this.view.sc_delay_tex_n(data);

    }


    // public sc_chatlog (data:sc_chatlog) {
    // if (this.view == null || this.view._isDestory) return;
    // this.view.sc_chatlog (data);
    // }
    public cs_tjackpotLog() {
        // let _getlist:cs_tjackpotLog = new cs_tjackpotLog ();
        // _getlist.gameId = this.Model.gameid;
        // _getlist.roomId = this.Model.tableid;
        // _getlist.fn = "cs_tjackpotLog";
        // WebSocketManager.getInstance.SendJSON(_getlist, () => { return true; });
    }

    // public sc_tjackpotLog (data:sc_tjackpotLog) {
    // if (data.result == 1) {
    //     if (this.view == null || this.view._isDestory) return;
    //     //Debug.LogError("奖池记录信息返回");
    //     F_TexasViewCtr.instance.view.sc_tjackpotLog (data);
    // } else {
    //     this.view.tipView.ShowTipLabel (StrFixedServerResult.GetString (data.result));
    // } 
    // }

    /// <summary>
    /// 踢人  从桌子上,正在游戏中不能踢
    /// </summary> 
    public cs_tickuser_tex(uid: number, type: number) {
        let _getlist: cs_tickuser_tex = new cs_tickuser_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.uid = uid;
        _getlist.type = type;
        _getlist.fn = "cs_tickuser_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_tickuser_tex.bind(this));// () => { return true; });
    }

    public sc_tickuser_tex(data: sc_tickuser_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {

        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2084));//操作不成功
        }
    }

    public sc_tickuser_tex_n(data: sc_tickuser_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (this.view._bftable.myUser != null && this.view._bftable.myUser.player != null && data.kickuid == this.view._bftable.myUser.player.userid)//被强制站起的玩家是自己刷新被锁定的金币
                this.Model.SetLockGold(data.lockgold);
            //站起围观要删除数据
            let _tempUser: TexasUserComp = this.view._bftable.GetUserByUserId(data.kickuid);
            if (_tempUser != null) {
                if (_tempUser.self)//自己占座时候被强制站起要关闭带入面板
                    this.view.HideUITakeGoldPanel();
                this.view.RemoveUser(data.kickuid);
            }
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    public cs_userremark_tex(uid: number, rname: string, pRemark: string) {
        let _getlist: cs_userremark_tex = new cs_userremark_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.rname = rname;
        _getlist.pRemark = pRemark;
        _getlist.uid = uid;
        _getlist.fn = "cs_userremark_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_userremark_tex.bind(this));// () => { return true; });
    }

    public sc_userremark_tex(data: sc_userremark_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            // this.view.tipView.ShowTipLabel("备注成功");
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2084));//操作不成功
        }
    }

    public sc_refreshtableuser_n(data: sc_refreshtableuser_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (data.Ur) data.user.py.uremark = data.Ur;
            this.Model.AddPlayerList(data.user);
            this.view.update_UserInfo(data.user);
            this.view.UpdateUserInfo(data.user.py, data.user.pos);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    public RefreshDeskBgAndCardBg() {
        if (this.view == null || this.view._isDestory) return;
        this.view.RefreshCardImage();
        this.view.RefreshCommonCards();
    }
    /// <summary>
    /// 一轮后更新桌面上筹码
    /// </summary>
    public RefreshUserCurGamble() {
        if (this.view == null || this.view._isDestory) return;
        this.moveMyGambleToTableGameble(); //有筹码移动筹码到奖池
        this.view.RefreshUserCurGamble();
    }
    /// <summary>
    /// 一轮结束后移动筹码到奖池
    /// </summary>
    public moveMyGambleToTableGameble() {
        if (this.view == null || this.view._isDestory) return;
        this.view.moveMyGambleToTableGameble();
    }

    //  获取奖池与详情 
    public cs_getalljackpot_tex() {
        let _getlist: cs_getalljackpot_tex = new cs_getalljackpot_tex();
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_getalljackpot_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getalljackpot_tex.bind(this));// () => { return true; });
    }

    /// <summary>
    /// 获取奖池与详情 返回
    /// </summary>
    /// <param name="data"></param>

    public sc_getalljackpot_tex(data: sc_getalljackpot_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            //Debug.LogError("获取奖池与详情返回结果");
            this.view.sc_getalljackpot_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_getalljackpot_tex error code:" + data.result);
        }
    }
    // 游戏内总奖池推送
    public sc_alljackpot_tex_n(data: sc_alljackpot_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            //Debug.LogError("游戏内总奖池推送:" + data.alljackpot);
            this.view.SetMangoOfTable(Math.floor(data.alljackpot));
        } else {
            this.view.tipView.ShowTipLabel("sc_alljackpot_tex_n error code:" + data.result);
        }
    }

    //#endregion

    //#region   

    public cs_seerestcard_tex() {
        let _getlist: cs_seerestcard_tex = new cs_seerestcard_tex();
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_seerestcard_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_seerestcard_tex.bind(this));// () => { return true; });
    }

    // 查看公牌余牌 返回  
    public sc_seerestcard_tex(data: sc_seerestcard_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model._CommonCard = data.card;
            this.view.ShowRestCommonCards(data.card);
        }
        else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1601));//钻石不足
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2244));//新牌局已经开始
        }
        else {
            this.view.tipView.ShowTipLabel("sc_seerestcard_tex error code:" + data.result);
        }
    }
    public cs_forceshowcard_tex() {
        let _getlist: cs_forceshowcard_tex = new cs_forceshowcard_tex();
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_forceshowcard_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_forceshowcard_tex.bind(this));// () => { return true; });
    }

    /// <summary>
    /// 强制秀牌
    /// </summary>
    /// <param name="data"></param>

    public sc_forceshowcard_tex(data: sc_forceshowcard_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.Model.fshownum = data.fshownum;
            this.view.ShowCardsForce(data.othercard);
        }
        else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1601));//钻石不足
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2244));//新牌局已经开始
        }
        else {
            this.view.tipView.ShowTipLabel("sc_forceshowcard_tex error code:" + data.result);
        }
    }

    public cs_goldback_tex(gold: number) {
        let _getlist = new cs_goldback_tex();
        _getlist._g = 51;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.gold = gold;
        _getlist.fn = "cs_goldback_tex";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_goldback_tex.bind(this));
    }

    public sc_goldback_tex(data: sc_goldback_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2010))//申请成功
        } else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1544));//房间不存在
        } else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180013));//可回撤的金额不足
        } else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180014));//仅限AOF模式使用
        } else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180031));//不能重复申请 
        }
    }

    public sc_goldback_tex_n(data: sc_goldback_tex_n) {
        if (this.view == null || this.view._isDestory) return;
        this.view._isCanOutGold = false;
        if (data.result == 1) {
            this.view.OutAfterUpGold(data.UserId, data.gold);
        } else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180013));//可回撤的金额不足
        } else {
            this.view.tipView.ShowTipLabel("sc_goldback_tex_n error code:" + data.result);
        }
    }


    // public sc_freshgold_n(data) {
    //     console.log(data);
    // }

    //跑马灯公告
    // public sc_getnotice_n(data: sc_getnotice_n) {
    //     if (this.view == null) return;
    //     if (data.result == 1) {
    //         data.noticelist.forEach((notice) => {
    //             this.view.broadcast.addMessage(notice);
    //         })
    //     }
    // }

    //请求更新比赛数据
    public cs_compete_table_info() {
        console.error("请求更新比赛数据" + this.Model.competeid);
        if (this.Model.competeid == 0) return;
        let _getlist = new cs_compete_table_info();
        _getlist.competeid = this.Model.competeid;
        _getlist.fn = "cs_compete_table_info";
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_compete_table_info.bind(this));
    }
    //比赛更新数据
    public sc_compete_table_info(data: sc_compete_table_info) {
        if (this.view == null || this.view._isDestory) return;
        this.view.UpdateMatchData(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    }
    //比赛排名
    public sc_compete_rank_info(data: sc_compete_rank_info) {
        if (this.view == null || this.view._isDestory) return;
        this.view.UpdateMatchRank(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    }
    //比赛结束
    public sc_compete_award_info(data: sc_compete_award_info) {
        if (this.view == null || this.view._isDestory) return;
        this.view.MacthEnd(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    }

    //#endregion
    public UpdateTakeInTip() {
        if (this.view == null || this.view._isDestory) return;
        this.view.UpdateTakeInTip();
    }
    public ShowOpenTip(isShow: boolean) {
        if (this.view == null || this.view._isDestory) return;
        this.view.ShowOpenTip(isShow);
    }

    public ReloadData() {
        if (this.view == null || this.view._isDestory) return;
        this.Model.curMsgId = 0;
        this.view.Init();
    }


    /**举报扣费*/
    public cs_gamereport_tex(_gold: number) {
        let _getlist = new cs_gamereport_tex();
        _getlist._g = 51;
        _getlist.fn = "cs_gamereport_tex";
        _getlist.gold = _gold;
        WebSocketManager.getInstance.SendJSON(_getlist, this.sc_gamereport_tex.bind(this));
    }
    public sc_gamereport_tex(data: sc_gamereport_tex) {
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            if (data.renum == -1) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180018));//举报次数已用完
                return;
            }
            F_TexasViewCtr.instance.Model.mPlayerModel.recount = data.renum;
        }

    }

    //举报请求
    public PostReportPra(curPageIndex: number, suserid: string, _reason: string, title: string, _gold: number) {
        if (curPageIndex <= 0 && suserid == "0") {
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180015));//举报失败!
            return;
        }
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/SubmitReportInfo";
        let params = {
            GameId: 51,
            tnum: this.Model.tableid,
            g_info: curPageIndex,
            UserId: this.Model.mPlayerModel.userid,
            S_UserId: suserid,
            reason: _reason,
            noticetype: title,
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log("---SubmitReportInfo---", res);
            //moreCnt ：举报多人防止多次扣费
            if (res.code == 1) {
                this.view.commonView.ShowTipLabel(TexasLanguage.getLanguageById(180016));//举报成功!
                F_TexasViewCtr.instance.Model.mPlayerModel.recount = res.data.renum;
                // this.cs_gamereport_tex(_gold); 不要这个协议了
            } else if (res.code == -1) {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1522)); // 余额不足
            } else {
                this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180015) + "：" + res.code);//举报失败!
            }
        }).catch((err) => {
            console.log("---err---", err)
            this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180015)); //举报失败!
        })
    }

    public ExitGame() {
        console.error("退出游戏");
        let sceneName: string = "lobby";
        SceneManager.Singleton.loadScene("gameHall", sceneName);
        // let timeout = setTimeout(() => {
        //     let abbf = cc.assetManager.getBundle("texas");
        //     abbf.releaseAll();
        //     cc.assetManager.removeBundle(abbf);
        // }, 1000);
        // TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
    }

    // 游戏暂停或开启
    public sc_openplay_tex_n(data: sc_openplay_tex_n) {
        console.log("sc_openplay_tex_n ==== ", data);
        if (this.view == null || this.view._isDestory) return;
        if (data.result == 1) {
            // this.view.sc_openplay_tex_n(data.openplay);
            this.Model.openplay = data.openplay;
            this.view.sc_openplay_tex_n();
        }
    }
}
