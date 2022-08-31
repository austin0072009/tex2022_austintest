"use strict";
cc._RF.push(module, 'ccd76MIk7JKdYilW06cd8Fo', 'F_TexasViewCtr');
// Games/texas/script/Contrl/F_TexasViewCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var cs_base_1 = require("../../../../Script/BaseFrame/cs_base");
var SceneManager_1 = require("../../../../Script/BaseFrame/SceneManager");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var ClientMessage_1 = require("../../../../Script/modules/@mogafa/utils/lib/ClientMessage");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var F_TexasModel_1 = require("../Model/F_TexasModel");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var TexasNetData_1 = require("../Model/TexasNetData");
var TexQueueMessages_1 = require("../View/TexQueueMessages");
var TimeInfoMgrTex_1 = require("../View/TimeInfoMgrTex");
//#autoaddnamespace#
var F_TexasViewCtr = /** @class */ (function () {
    function F_TexasViewCtr() {
        this.dismisstableCallBack = null;
        this.applyexittableCallBack = null;
    }
    Object.defineProperty(F_TexasViewCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new F_TexasViewCtr();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(F_TexasViewCtr.prototype, "Model", {
        get: function () {
            if (this._model == null) {
                this._model = new F_TexasModel_1.F_TexasModel();
                this.Model.gameid = 51;
                this.Model.levelid = 511;
                this._model.Init();
            }
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    F_TexasViewCtr.prototype.RegistNotify = function () {
        var _this = this;
        //添加到队列处理
        console.log("F_TexasViewCtr  RegistNotify");
        console.error("注册消息事件");
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", function (data) { _this.AddTexMessages(data, "sc_sitdown_tex_n", _this.sc_sitdown_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_tablestart_tex_n", function (data) { _this.AddTexMessages(data, "sc_tablestart_tex_n", _this.sc_tablestart_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_token_tex_n", function (data) { _this.AddTexMessages(data, "sc_token_tex_n", _this.sc_token_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_instoken_tex_n", function (data) { _this.AddTexMessages(data, "sc_instoken_tex_n", _this.sc_instoken_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_giveup_tex_n", function (data) { _this.AddTexMessages(data, "sc_giveup_tex_n", _this.sc_giveup_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_end_tex_n", function (data) { _this.AddTexMessages(data, "sc_end_tex_n", _this.sc_end_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_bigend_tex_n", function (data) { _this.AddTexMessages(data, "sc_bigend_tex_n", _this.sc_bigend_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_insurance_tex_n", function (data) { _this.AddTexMessages(data, "sc_insurance_tex_n", _this.sc_insurance_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_applyexittable_tex_n", function (data) { _this.AddTexMessages(data, "sc_applyexittable_tex_n", _this.sc_applyexittable_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_situpkeep_tex_n", function (data) { _this.AddTexMessages(data, "sc_situpkeep_tex_n", _this.sc_situpkeep_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_chat_n", function (data) { _this.AddTexMessages(data, "sc_chat_n", _this.sc_chat_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_tickuser_tex_n", function (data) { _this.AddTexMessages(data, "sc_tickuser_tex_n", _this.sc_tickuser_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_refreshtableuser_n", function (data) { _this.AddTexMessages(data, "sc_refreshtableuser_n", _this.sc_refreshtableuser_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_compete_table_info", function (data) { _this.AddTexMessages(data, "sc_compete_table_info", _this.sc_compete_table_info.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_compete_award_info", function (data) { _this.AddTexMessages(data, "sc_compete_award_info", _this.sc_compete_award_info.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_compete_rank_info", function (data) { _this.AddTexMessages(data, "sc_compete_rank_info", _this.sc_compete_rank_info.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_sitdownwait_tex_n", function (data) { _this.AddTexMessages(data, "sc_sitdownwait_tex_n", _this.sc_sitdownwait_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_sitdownwaitup_tex_n", function (data) { _this.AddTexMessages(data, "sc_sitdownwaitup_tex_n", _this.sc_sitdownwaitup_tex_n.bind(_this)); });
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_goldback_tex_n", function (data) { _this.AddTexMessages(data, "sc_goldback_tex_n", _this.sc_goldback_tex_n.bind(_this)); });
        // WebSocketManager.getInstance.RegistNotify("sc_tablestart_tex_n", this.sc_tablestart_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_token_tex_n", this.sc_token_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_ready_tex_n", this.sc_ready_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_instoken_tex_n", this.sc_instoken_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_gamble_tex_n", this.sc_gamble_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_giveup_tex_n", this.sc_giveup_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_end_tex_n", this.sc_end_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_bigend_tex_n", this.sc_bigend_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_disconnect_n", this.sc_disconnect_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", this.sc_sitdown_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_refreshbalance_tex_n", this.sc_refreshbalance_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_agreeintogold_tex_n", this.sc_agreeintogold_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_insurance_tex_n", this.sc_insurance_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_applyexittable_tex_n", this.sc_applyexittable_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_one_exittable_n", this.sc_one_exittable_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_situpkeep_tex_n", this.sc_situpkeep_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_showmycard_tex_n", this.sc_showmycard_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_delay_tex_n", this.sc_delay_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_chat_n", this.sc_chat_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_tickuser_tex_n", this.sc_tickuser_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_refreshtableuser_n", this.sc_refreshtableuser_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_alljackpot_tex_n", this.sc_alljackpot_tex_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_freshgold_n", this.sc_freshgold_n.bind(this));
        // WebSocketManager.getInstance.RegistNotify("sc_getnotice_n", this.sc_getnotice_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_openplay_tex_n", this.sc_openplay_tex_n.bind(this));
    };
    F_TexasViewCtr.prototype.UnRegistNotify = function () {
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_sitdown_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_tablestart_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_token_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_instoken_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_giveup_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_end_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_bigend_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_insurance_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_applyexittable_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_situpkeep_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_chat_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_tickuser_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_refreshtableuser_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_compete_table_info");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_compete_award_info");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_compete_rank_info");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_sitdownwait_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_sitdownwaitup_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_goldback_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_ready_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_gamble_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_disconnect_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_refreshbalance_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_agreeintogold_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_one_exittable_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_showmycard_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_delay_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_alljackpot_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_openplay_tex_n");
    };
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
    F_TexasViewCtr.prototype.AddTexMessages = function (data, funName, fun) {
        if (funName === void 0) { funName = null; }
        if (fun === void 0) { fun = null; }
        TexQueueMessages_1.TexQueueMessages.instance.AddTexMes(funName, data, fun);
    };
    F_TexasViewCtr.prototype.sc_entertablenum_tex = function (data) {
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
            if (data.result == -10001)
                console.log("房间找不到或者已满员!");
            F_TexasViewCtr.instance.Model.mPlayerModel.state = 0;
        }
    };
    //获取场次
    F_TexasViewCtr.prototype.cs_getgamelevel = function () {
        var data = new TexasNetData_1.cs_getgamelevel();
        data.gameid = F_TexasViewCtr.instance.Model.gameid;
        data.fn = "cs_getgamelevel";
        WebSocketManager_1.WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_getgamelevel.bind(this));
    };
    F_TexasViewCtr.prototype.sc_getgamelevel = function (data) {
        if (data.result == 1) {
            console.log("AppConst.currentlevelid = 2" + AppConst_1.AppConst.currentlevelid);
            F_TexasViewCtr.instance.Model.gamelevel = data.levellist.find(function (item) { return AppConst_1.AppConst.currentlevelid == item.id; });
        }
    };
    // 发送消息
    F_TexasViewCtr.prototype.cs_chat = function (type, tpos, content, _ngold) {
        var data = new cs_base_1.cs_chat();
        data.levelid = this.Model.levelid;
        data.tableid = this.Model.tableid;
        data.type = type;
        data.tpos = tpos;
        data.content = content;
        data.ngold = _ngold;
        data._g = this.Model.gameid;
        data.fn = "cs_chat";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(data, this.sc_chat.bind(this));
    };
    F_TexasViewCtr.prototype.sc_chat = function (data) {
        console.log("----sc_chat----", data);
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1527));
        }
    };
    F_TexasViewCtr.prototype.sc_chat_n = function (data) {
        // if (this.view == null || this.view._isDestory) return;
        // //Debug.LogError("聊天推送");
        // if (data.result == 1) {
        //     this.view.sc_chat_n(data);
        // } else {
        //     this.view.tipView.ShowTipLabel("金币不足");//金币不足
        // }
        console.log("----sc_chat_n----", data);
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1526));
            return;
        }
        this.view.sc_chat_n(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    /// <summary>
    /// 弹幕记录
    /// </summary>
    /// <param name="tableid"></param>
    /// <param name="roomid"></param>
    F_TexasViewCtr.prototype.cs_chatlog = function () {
        var _getlist = new TexasNetData_1.cs_chatlog();
        _getlist.tableid = this.Model.tableid;
        _getlist.gameid = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_chatlog";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_chatlog.bind(this));
    };
    /// <summary>
    /// 弹幕记录返回
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_chatlog = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_chatlog(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_chatlog error code:" + data.result);
        }
    };
    /// <summary>
    /// 通知这桌有人准备了
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_ready_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_ready_tex_n(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_ready_tex_n error code:" + data.result);
        }
    };
    /// <summary>
    /// 通知开始了
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_tablestart_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
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
    };
    /// <summary>
    /// 移一次token  用户可能有4个操作，，看牌，下注，放弃， 比牌【条件限制】 
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_token_tex_n = function (data) {
        var _this = this;
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.ShowAnchorCcardsTip(false);
            this.Model._curGambleLimitMin = data._min;
            this.Model._curMaxGamble = data._max;
            this.Model._jpot = data._jackpot;
            this.Model._mingamble = data._min;
            this.Model._emaxg = data._emaxg;
            this.Model.potlist = data.potlist;
            this.Model._CommonCard = data._Cards;
            var _turnChange_1 = (this.Model._CurTurnCount != data._tc); // && Model._CurTurnCount>=0;
            this.Model.firstTurnStart = this.Model._CurTurnCount != data._tc && this.Model._CurTurnCount <= 0;
            console.log(this.Model._CurTurnCount + "," + data._tc + " turnChange........................." + _turnChange_1);
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
                TimeInfoMgrTex_1.default.instance.AddTimer(0.5, function () {
                    console.log("延迟执行 sc_token_tex_n");
                    _this.view.sc_token_tex_n(data, _turnChange_1, 0.5);
                });
            }
            else {
                this.view.sc_token_tex_n(data, _turnChange_1);
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_token_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    /// <summary>
    /// 移一次token  用户可能有两个操作，选保额，或不保 
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_instoken_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.ShowAnchorCcardsTip(false);
            this.Model._jpot = data._jackpot;
            this.Model._CommonCard = data._Cards;
            var _turnChange = (this.Model._CurTurnCount != data._tc); // && Model._CurTurnCount>=0;
            var _firstTurnStart = this.Model._CurTurnCount != data._tc && this.Model._CurTurnCount <= 0;
            this.Model._CurTurnCount = data._tc;
            //_ilist为空或者count=0时候不走保险模式，绑定公牌
            if ((data._ilist31 != null && data._ilist31.length >= 3) || (data._ilist32 != null && data._ilist32.length >= 3)) {
                if (data.pos == this.Model._posServer) //只有自己购买保险的时候才刷新数据
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
    };
    /// <summary>
    /// 有人下注了
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_gamble_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
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
    };
    /// <summary> 
    ///  有人弃牌了
    /// </summary>
    F_TexasViewCtr.prototype.sc_giveup_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
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
    };
    /// <summary> 
    ///  通知结束了
    /// </summary>
    F_TexasViewCtr.prototype.sc_end_tex_n = function (data) {
        var _this = this;
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
        }
        else {
            if (this.view._bftable == null)
                return;
            var _tempUser = this.view._bftable.userList.find(function (item) { return item.self == true; });
            if (_tempUser != null && _tempUser.player != null &&
                _tempUser.userInfo != null && _tempUser.userInfo.isW != 1 && _tempUser.userInfo.isW != 2
                && this.Model._ShouPai != null) //自己还在桌子上并且不是观众或占座就强制打开自己的手牌
             {
                for (var i = 0; i < this.Model._ShouPai.length; i++) {
                    var index = i;
                    var _poker = 0;
                    if (_tempUser.self)
                        _poker = this.Model._ShouPai[i];
                    var card = _tempUser.GetCard(index);
                    if (card == null) {
                        console.log("fetal error: SendCard is null");
                        return;
                    }
                    _tempUser.SetCardVal_pub(card, _poker);
                }
            }
            //先处理玩家离开数据
            this.view.dealEndLeaveData(data);
            //如果在展示公牌,公牌动画之后展示结算
            var disCount = this.Model._CommonCard.length - this.view.curCommondCards.length >= 0 ? this.Model._CommonCard.length - this.view.curCommondCards.length : 0;
            var delayy = disCount <= 0 ? 1 : ((disCount >= 3 ? 2 * (disCount - 3) + 1.5 : 2 * (disCount - 1) + 1) + 2);
            // console.error("剩下发牌数："+ this.Model._CommonCard.length +"-"+this.view.curCommondCards.length+"="+disCount);
            // console.error("结束延迟："+delayy);
            TimeInfoMgrTex_1.default.instance.AddTimer(delayy, function () {
                if (_this.Model.isGaming)
                    return; //下局开始当前局的动画还没执行完
                if (_this.view != null && !_this.view._isDestory)
                    _this.view.sc_end_tex_n(data);
                _this.Model.PlayingUsers = null;
                _this.Model.BigSmallPlayingUser = null;
                _this.Model.insList31 = null;
                _this.Model.insList32 = null;
                _this.Model._CurTurnCount = 0; //每一小局结束了，记录当前的turn为0
                _this.Model.endDelay = false;
            });
        }
        // TexQueueMessages.instance.RemoveFirstMes();
        this.view.sc_openplay_tex_n();
    };
    /// <summary>
    /// 大结算 显示后退出游戏
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_bigend_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.Model.isShowPersonRemind = true;
        if (data.bigend.gainlist == null || data.bigend.gainlist.length == 0) {
            this.Model.Reset();
            this.ExitGame();
            return;
        }
        this.view.sc_bigend_tex_n(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    /// <summary>
    /// 有人掉线了
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_disconnect_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.sc_disconnect_n(data);
    };
    //#endregion
    //#region Texas客户端请求
    F_TexasViewCtr.prototype.cs_autoSitDown_tex = function (pos, clubId, password) {
        if (pos > this.Model.manNum || pos == 0) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180030)); //该位置不能坐下
            return;
        }
        this.cs_sitdown_tex(pos, 0, 1, password, clubId);
    };
    F_TexasViewCtr.prototype.sc_sitdownwaitup_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.RemoveUser(data.user.py.userid);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_sitdownwaitup_tex_n error code:" + data.result);
        }
    };
    /// <summary>
    /// 带入金币申请坐下
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos">服务器的pos</param>
    /// <param name="gold">带入金币</param>
    F_TexasViewCtr.prototype.cs_sitdown_tex = function (pos, gold, isKeep, password, clubidx) {
        console.error("======带入金币申请坐下");
        var _getlist = new TexasNetData_1.cs_sitdown_tex();
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
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdown_tex.bind(this));
    };
    F_TexasViewCtr.prototype.sc_sitdown_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (this.Model.clubid > 0 && this.Model.IsSupper) //俱乐部币房刷新俱乐部币
             {
                // this.Model.cgold = data.ugold;//坐下刷新玩家身上的俱乐部币
                // this.view.UpdateSuperClub();
                // ClubViewCtr.instance.UpdateClubInfocgold(this.Model.curSClub.cid, data.ugold);
            }
            else {
                // LobbyViewCtr.instance.cs_freshplayerInfoSD(); //更新用户金币
            }
            //LobbyViewCtr.instance.sc_freshgold_n(2, data.ugold);  //只是带入，不减少用户身上的金币，不更新 
            AppConst_1.AppConst.mPlayerModel.gold = data.ugold;
            return;
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1587)); //金币带入不在范围内
            this.Model.cgold = 0;
            this.view.ShowUITakeGoldPanel(true, 0, false);
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1588)); //没有可用的空位入座
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1589)); //房间已解散
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1590)); //该位置已经被占用，请选择其他空位
        }
        else if (data.result == -8) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2185)); //游戏玩家人数已达设置上限人数了
        }
        else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1591)); //密码输入错误
        }
        else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2218)); //不能选择其他俱乐部
        }
        else if (data.result == -11) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2258)); //你在该俱乐部已经被冻结
        }
        else if (data.result == -12) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2284)); //俱乐部交收中
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else if (data.result == -18) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2273)); //已结算，不可入座
        }
        else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1594)); //金币超过最大带入
        }
        else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1570)); //已检测手机定位于在座玩家附近，请前往其他房间游戏
        }
        else if (data.result == -97) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2232)); //入池率不满足入座条件
        }
        else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }
        //坐下失败调用站起
        this.cs_sitdownwaitup_tex();
    };
    F_TexasViewCtr.prototype.sc_sitdown_tex_n = function (data) {
        console.log("---sc_sitdown_tex_n---", data);
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.update_UserInfoSitDown(data.user, data.id2keep, 0);
            var _tempUser = this.view._bftable.GetUserByUserId(data.user.py.userid);
            if (_tempUser != null && _tempUser.self) //自己坐下需要吧带入的金币锁定在桌上
             {
                // 默认开启的 不需要提示了
                // if (this.Model.openplay && !this.Model.isopen)//如果是房主开启游戏房间，需要提示玩家需要等待房主开启房间
                // {
                //     this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(2264));//等待房主开启牌局
                // }
                this.Model.SetLockGold(Math.floor(data.user.py.gold)); //带入的金币，锁定在牌桌
                this.Model.mPlayerModel = data.user.py;
            }
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180010)); //此状态不能换座
        }
        else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180011)); //坐下失败
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    /// <summary>
    /// 申请坐下 不带入 显示等待 占位用 
    /// </summary>
    /// <param name="pos"></param>
    /// <param name="iskeep"></param>
    F_TexasViewCtr.prototype.cs_sitdownwait_tex = function (pos, iskeep) {
        var _getlist = new TexasNetData_1.cs_sitdownwait_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.iskeep = iskeep;
        // _getlist.lat = Common_SecCtr.instance.Model.loc.lat;
        // _getlist.lng = Common_SecCtr.instance.Model.loc.lng;
        _getlist.fn = "cs_sitdownwait_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdownwait_tex.bind(this));
    };
    F_TexasViewCtr.prototype.sc_sitdownwait_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.WaitToTakeIn();
            return;
        }
        else if (data.result == -1) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1587)); //金币带入不在范围内
            this.view.ShowUITakeGoldPanel(true, 0, false);
        }
        else if (data.result == -2) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1588)); //没有可用的空位入座
        }
        else if (data.result == -3) {
            //Debug.LogError("需要处理逻辑限制");
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1589)); //房间已解散
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1590)); //该位置已经被占用，请选择其他空位
        }
        else if (data.result == -8) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2185)); //游戏玩家人数已达设置上限人数了
        }
        else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1591)); //密码输入错误
        }
        else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1592)); //需要重新带入
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else if (data.result == -18) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2273)); //已结算，不可入座
        }
        else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1594)); //金币超过最大带入
        }
        else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1570)); //已检测手机定位于在座玩家附近，请前往其他房间游戏
        }
        else if (data.result == -97) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2232)); //入池率不满足入座条件
        }
        else if (data.result == -95) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else {
            this.view.tipView.ShowTipLabel("sc_sitdownwait_tex error code:" + data.result);
        }
        //坐下失败调用站起
        this.cs_sitdownwaitup_tex();
    };
    F_TexasViewCtr.prototype.sc_refreshbalance_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (this.Model.clubid > 0 && this.Model.IsSupper) //俱乐部币房刷新俱乐部币
             {
                this.Model.cgold = Math.floor(data.gold); //坐下刷新玩家身上的俱乐部币               
                // this.view.UpdateSuperClub();
                // ClubViewCtr.instance.UpdateClubInfocgold(this.Model.curSClub.cid, data.gold);
            }
            else {
                // LobbyViewCtr.instance.cs_freshplayerInfoSD(); //更新用户金币
            }
            if (data.lockgold > 0) //玩家站起时候，带入被同意，刷新锁定金额
             {
                this.Model.SetLockGold(Math.floor(data.lockgold));
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_refreshbalance_tex_n error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.sc_sitdownwait_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
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
    };
    F_TexasViewCtr.prototype.cs_sitdownwaitup_tex = function () {
        var _getlist = new TexasNetData_1.cs_sitdownwaitup_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_sitdownwaitup_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_sitdownwaitup_tex.bind(this));
    };
    F_TexasViewCtr.prototype.sc_sitdownwaitup_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
        }
        // else if (data.result == -4) {
        //     this.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(5034));//已经离桌
        // }
        // else {
        //     this.view.tipView.ShowTipLabel("sc_sitdownwaitup_tex error code:" + data.result);
        // }
    };
    F_TexasViewCtr.prototype.sc_agreeintogold_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.RemoveUser(data.tuserid);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_agreeintogold_tex_n error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.cs_addgoldingame_tex = function (gold, clubidx) {
        var _getlist = new TexasNetData_1.cs_addgoldingame_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.gold = gold;
        _getlist.clubidx = clubidx;
        _getlist.fn = "cs_addgoldingame_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_addgoldingame_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_addgoldingame_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            // LobbyViewCtr.instance.cs_freshplayerInfoSD (); //刷新用户金币
        }
        else {
            this.view.AddGoldFail();
            if (data.result == -1) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1595)); //余额低于最低补充，请充值
                this.view.ShowUIAddGoldPanel();
            }
            else if (data.result == -2) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1596)); //只能补充一次
            }
            else if (data.result == -99) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1597)); //补充记分超过上限
            }
            else if (data.result == -10) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2225)); //补充的俱乐部必须是带入的俱乐部
            }
            else {
                this.view.tipView.ShowTipLabel("sc_addgoldingame_tex error code:" + data.result);
            }
        }
    };
    F_TexasViewCtr.prototype.cs_refreshbalance_club = function (clubid) {
        var _getlist = new TexasNetData_1.cs_refreshbalance_club();
        _getlist._g = this.Model.gameid;
        _getlist.clubid = clubid;
        _getlist.fn = "cs_refreshbalance_club";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_refreshbalance_club.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_refreshbalance_club = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.Model.cgold = Math.floor(data.gold); //刷新玩家身上的俱乐部币
            this.view.RefreshTakeInPanel();
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1989)); //俱乐部不存在
        }
        else {
            this.view.tipView.ShowTipLabel("sc_refreshbalance_club error code:" + data.result);
        }
    };
    // 刷新用户信息
    F_TexasViewCtr.prototype.cs_freshplayerInfoSD = function () {
        var pkg = new TexasNetData_1.cs_freshplayerInfoSD();
        pkg.fn = "cs_freshplayerInfoSD";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_freshplayerInfoSD.bind(this));
    };
    F_TexasViewCtr.prototype.sc_freshplayerInfoSD = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180036)); //金币刷新成功
            AppConst_1.AppConst.mPlayerModel.gold = data.user.gold;
            this.view.IsCanAddGold();
            if (this.view.isShowAddGoldPanel) {
                this.view.ShowUIAddGoldPanel(); // 补充计分
            }
            else {
                this.view.ShowUITakeGoldPanel(true, 0, true, true); // 带入计分
            }
        }
        else {
        }
    };
    /// <summary>
    /// 准备
    /// </summary>
    /// <param name="_gameid">游戏ID</param>
    /// <param name="levelid"> </param>
    F_TexasViewCtr.prototype.cs_ready_tex = function (levelid, tableid, pos) {
        var _getlist = new TexasNetData_1.cs_ready_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = levelid;
        _getlist.tableid = tableid;
        _getlist.pos = pos;
        _getlist.fn = "cs_ready_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_ready_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_ready_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_ready_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_ready_tex error code:" + data.result);
        }
    };
    /// <summary>
    /// 下注
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="money"></param>
    /// <param name="addrate"></param>
    F_TexasViewCtr.prototype.cs_gamble_tex = function (money, addrate) {
        var _getlist = new TexasNetData_1.cs_gamble_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.money = money;
        _getlist.addrate = addrate;
        _getlist.fn = "cs_gamble_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_gamble_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_gamble_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_gamble_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + " sc_gamble_tex error ");
        }
    };
    /// <summary>
    /// 弃牌
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    F_TexasViewCtr.prototype.cs_giveup_tex = function (pos) {
        var _getlist = new TexasNetData_1.cs_giveup_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.fn = "cs_giveup_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_giveup_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_giveup_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_giveup_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + " giveup error");
        }
    };
    /// <summary>
    /// 保险模式 选择结束请求
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    /// <param name="ins"></param>
    F_TexasViewCtr.prototype.cs_insurance_tex = function (pos, ins, ins32, outs) {
        var _getlist = new TexasNetData_1.cs_insurance_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = pos;
        _getlist.ins = ins;
        _getlist.outs = outs;
        _getlist.ins32 = ins32;
        console.error(pos + "==投保主池：" + ins + ",投保分池：" + ins32 + ",投保outs： " + outs);
        _getlist.fn = "cs_insurance_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_insurance_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_insurance_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_insurance_tex(data);
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1510)); //购买超时
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1511)); //投保额不正确
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1512)); //金币不够
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }
    };
    /// <summary>
    /// 通知所有人，购买保险  
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_insurance_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_insurance_tex_n(data.pos, data.ins);
        }
        else {
            this.view.tipView.ShowTipLabel(data.result + "");
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    // #endregion
    //#region   解散游戏
    F_TexasViewCtr.prototype.cs_dismisstable_tex = function (_callback) {
        if (this.Model.levelid == 0) {
            console.log("cs_applyexittable_tex..Model.levelid == 0");
            return;
        }
        var _getlist = new TexasNetData_1.cs_dismisstable_tex();
        this.dismisstableCallBack = _callback;
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_dismisstable_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_dismisstable_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_dismisstable_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (this.Model.isGaming)
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2270)); //此局结束后房间将自动解散
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1513)); //游戏中不能退出游戏！
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(5004)); //不是房主
        }
    };
    F_TexasViewCtr.prototype.ExitTable = function () {
        // if (this.view != null && this.view.RootObject != null) {
        //     this.view.helpSettingComp.ExitTable ();
        // }
    };
    F_TexasViewCtr.prototype.cs_applyexittable_tex = function (_callback) {
        if (this.Model.levelid == 0) {
            console.log("cs_applyexittable_tex..Model.levelid == 0");
            return;
        }
        var _getlist = new TexasNetData_1.cs_applyexittable_tex();
        this.applyexittableCallBack = _callback;
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.pos = this.Model._posServer;
        _getlist.fn = "cs_applyexittable_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_applyexittable.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_applyexittable = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.Model.Reset();
            if (this.applyexittableCallBack != null) {
                this.applyexittableCallBack();
                this.Model.isGaming = false;
                this.Model.isselfontable = false;
            }
            else {
                this.ExitGame();
            }
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1513)); //游戏中不能退出游戏！
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2251)); //allin状态下不能站起或者退出
        }
        else {
            this.view.tipView.ShowTipLabel("sc_applyexittable_tex error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.ApplyExit = function () {
        if (this.Model.palyerlist.length == 1) {
            this.cs_applyexittable();
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1513)); //游戏中不能退出游戏！
        }
    };
    /// <summary>
    /// 解散游戏
    /// </summary>
    F_TexasViewCtr.prototype.cs_applyexittable = function () {
        var _getlist = new ClientMessage_1.cs_applyexittable();
        _getlist.gameid = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.pos = this.Model._posServer;
        _getlist.fn = "cs_applyexittable";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_applyexittable_tex.bind(this)); //() => { return true; });
    };
    F_TexasViewCtr.prototype.sc_applyexittable_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.ExitGame();
        }
        else {
            this.view.tipView.ShowTipLabel("sc_applyexittable_tex error cdoe:" + data.result);
        }
    };
    /// <summary>
    /// 申请留座 保留6分钟
    /// </summary>
    F_TexasViewCtr.prototype.cs_situpkeep_tex = function (isKeep) {
        var _getlist = new TexasNetData_1.cs_situpkeep_tex();
        _getlist.keep = isKeep;
        _getlist.tableid = this.Model.tableid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_situpkeep_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_situpkeep_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_situpkeep_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
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
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2250)); //申请留座成功
            }
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2251)); //allin状态下不能站起或者退出
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2254)); //保险状态下不能站起
        }
        else {
            if (data.keep) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1598)); //申请留座失败
            }
            else {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1599)); //站起围观失败 
            }
        }
    };
    /// <summary>
    /// 结算离桌 协议
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.cs_advancesettle_tex = function () {
        var _getlist = new TexasNetData_1.cs_advancesettle_tex();
        _getlist.tableid = this.Model.tableid;
        _getlist.levelid = this.Model.levelid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_advancesettle_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_advancesettle_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_advancesettle_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.Model.IsSettle = data.IsSettle;
            this.view.helpSettingComp.UpdateStateJiesuan();
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2274)); //未参与游戏不能结算
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2275)); //allin状态不能结算
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2276)); //保险状态不能结算
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2278)); //已经离桌结算
        }
        else {
            this.view.tipView.ShowTipLabel("sc_advancesettle_tex error code:" + data.result);
        }
    };
    /// <summary>
    /// 通知这桌有人 申请解散游戏 
    /// </summary>
    F_TexasViewCtr.prototype.sc_applyexittable_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) { //如果 是自己不用处理
            if (data.pos == this.Model._posServer) {
                this.ExitGame();
            }
            else { //更新走掉的人位置 
                this.Model.RemovePlayerList(data.userid);
                this.view.sc_entertable_texas_n(this.Model.palyerlist);
            }
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    /// <summary>
    /// 退出房间
    /// </summary>
    F_TexasViewCtr.prototype.sc_one_exittable_n = function (data) {
        var _this = this;
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            // if (data.pos == 0) {
            if (data.pos == this.Model._posServer) {
                TimeInfoMgrTex_1.default.instance.AddTimer(0.1, function () {
                    _this.ExitGame();
                });
            }
            else { //更新走掉的人位置 
                var user = this.Model.GetUserInfo(data.userid);
                if (data.isK > 0) {
                    if (user != null) {
                        //留座
                        user.isK = data.isK;
                        console.log("isK：" + user.isK);
                        this.view.SetUserForKeepSeat_n(data.userid);
                    }
                    else {
                        console.log("sc_one_exittable_n : 需要离开房间的人员不存在 userId:" + data.userid);
                    }
                }
                else if (data.isK == 0) {
                    //不处理
                }
                else {
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
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1514)); //退出房间失败，非法的操作
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    F_TexasViewCtr.prototype.sc_situpkeep_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            //站起围观
            var user = this.Model.GetUserInfo(data.userid);
            if (data.isK > 0) {
                if (user != null) {
                    //留座
                    user.isK = data.isK;
                    this.view.SetUserForKeepSeat_n(data.userid);
                }
                else {
                    console.log("sc_one_exittable_n : 需要离开房间的人员不存在 userId:" + data.userid);
                }
            }
            else {
                if (user != null) {
                    this.Model.SetUserData_isW(data.userid, 1); //变为观众
                    if (this.view._bftable == null)
                        return;
                    var _tempUser = this.view._bftable.GetUserByUserId(data.userid);
                    if (_tempUser != null && _tempUser.self) {
                        //自己占座时候被强制站起要关闭带入面板
                        this.view.HideUITakeGoldPanel();
                    }
                    this.view.RemoveUser(data.userid);
                }
            }
        }
        else {
            this.view.tipView.ShowTipLabel("sc_situpkeep_tex_n error code:" + data.result);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    // #endregion
    //#region  非游戏逻辑功能 
    F_TexasViewCtr.prototype.notifyPlayVoice = function (pos, content) {
        if (this.view != null) // && this.view.RootObject != null) 
         {
            this.view.ShowVoice(pos, content);
        }
    };
    F_TexasViewCtr.prototype.UpdateUserState = function (userId, keepTime, gold) {
        if (this.view != null) // && this.view.RootObject != null) 
         {
            this.view.UpdateUserState(userId, keepTime, gold);
        }
    };
    F_TexasViewCtr.prototype.ShowSelfEndTime = function (cdTime, totalTime, isShowText) {
        if (cdTime === void 0) { cdTime = 15; }
        if (totalTime === void 0) { totalTime = 15; }
        if (isShowText === void 0) { isShowText = true; }
        if (this.view != null) // && this.view.RootObject != null) 
         {
            this.view.ShowClock(cdTime, totalTime, isShowText);
        }
    };
    F_TexasViewCtr.prototype.StopSelfEndTime = function () {
        if (this.view != null) // && this.view.RootObject != null) 
         {
            this.view.StopClock();
        }
    };
    /// <summary>
    /// 牌局回顾
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    F_TexasViewCtr.prototype.cs_enterrobot_tex = function () {
        var _getlist = new TexasNetData_1.cs_enterrobot_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_enterrobot_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_enterrobot_tex.bind(this)); // () => { return true; });
    };
    // 牌局回顾结果
    F_TexasViewCtr.prototype.sc_enterrobot_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1587)); //金币带入不在范围内
            //this.view.ShowUITakeGoldPanel(true, 0, false);
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1588)); //没有可用的空位入座
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1589)); //房间已解散
        }
        else if (data.result == -4) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1590)); //该位置已经被占用，请选择其他空位
        }
        else if (data.result == -9) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1591)); //密码输入错误
        }
        else if (data.result == -10) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1592)); //需要重新带入
            //需要重新带入，打开金币带入面板 this.view.ShowUITakeGoldPanel(true, this.view.posSit, false);
        }
        else if (data.result == -15) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1593)); //最后5分钟不能坐下
        }
        else if (data.result == -99) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1594)); //金币超过最大带入
        }
        else if (data.result == -98) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1570)); //已检测手机定位于在座玩家附近，请前往其他房间游戏
        }
        else {
            this.view.tipView.ShowTipLabel("sc_enterrobot_tex error code:" + data.result);
        }
    };
    /// <summary>
    /// 牌局回顾
    /// </summary>
    /// <param name="levelid"></param>
    /// <param name="tableid"></param>
    /// <param name="pos"></param>
    F_TexasViewCtr.prototype.cs_thistory_tex = function () {
        var _getlist = new TexasNetData_1.cs_thistory_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_thistory_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_thistory_tex.bind(this)); // () => { return true; });
    };
    // 牌局回顾结果 
    F_TexasViewCtr.prototype.sc_thistory_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            console.log("牌局回顾结果");
            F_TexasViewCtr.instance.view.UpdateHistoryView_data(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_thistory_tex error code:" + data.result);
        }
    };
    //牌局回顾，大结算后
    F_TexasViewCtr.prototype.cs_roomhistory_tex = function () {
        var _getlist = new TexasNetData_1.cs_roomhistory_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_roomhistory_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_roomhistory_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_roomhistory_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            F_TexasViewCtr.instance.view.UpdateHistoryView_data2(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_thistory_tex error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.ShowHistory = function () {
        if (this.view == null || this.view._isDestory)
            return;
        F_TexasViewCtr.instance.view.ShowHistory();
    };
    F_TexasViewCtr.prototype.ShowHistory_bigend = function () {
        if (this.view == null || this.view._isDestory)
            return;
        F_TexasViewCtr.instance.view.ShowHistory_bigend();
    };
    F_TexasViewCtr.prototype.UpdateHistoryView = function (ulist, Ltulist, d, ShowCard) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.UpdateHistoryView_ptnn(ulist, Ltulist, d, ShowCard);
    };
    /// <summary>
    /// 收藏单局牌协议
    /// </summary>
    F_TexasViewCtr.prototype.cs_texascollect_tex = function (type, infoId) {
        var _getlist = new TexasNetData_1.cs_texascollect_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.type = type;
        _getlist.infoId = infoId;
        _getlist.fn = "cs_texascollect_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_texascollect_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_texascollect_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (this.view == null || this.view._isDestory) {
                // LobbyViewCtr.instance.cs_geymytexascollect();
                return;
            }
            this.view.UpdateCollectData(data.savaNum, data.infoId, data.IsSava);
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2183)); //收藏到达上限
        }
        else {
            this.view.tipView.ShowTipLabel("sc_texascollect_tex error code:" + data.result);
        }
    };
    // 战绩申请 
    F_TexasViewCtr.prototype.cs_getgain_tex = function () {
        var _getlist = new TexasNetData_1.cs_getgain_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_getgain_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getgain_tex.bind(this));
    };
    // 战绩返回结果 
    F_TexasViewCtr.prototype.sc_getgain_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            //Debug.LogError("游戏内请求战绩信息返回");
            F_TexasViewCtr.instance.view.UpdateRecordView(data);
        }
        else {
            this.view.tipView.ShowTipLabel("cs_getgain_tex error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.cs_showmycard_tex = function (cardPos, type) {
        var _getlist = new TexasNetData_1.cs_showmycard_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.card = cardPos;
        _getlist.type = type;
        _getlist.fn = "cs_showmycard_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_showmycard_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_showmycard_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            //展示自己的牌秀牌状态
            this.view.ShowMyCardStatus(data);
        }
    };
    F_TexasViewCtr.prototype.sc_showmycard_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
    };
    // 申请分牌延迟 
    F_TexasViewCtr.prototype.cs_delay_tex = function () {
        var _getlist = new TexasNetData_1.cs_delay_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.fn = "cs_delay_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_delay_tex.bind(this)); //() => { return true; });
    };
    F_TexasViewCtr.prototype.sc_delay_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.sc_delay_tex(data);
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(5050)); //超出5次延迟
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //金币不足
        }
        else {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1600)); //申请延迟失败
        }
    };
    F_TexasViewCtr.prototype.sc_delay_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.sc_delay_tex_n(data);
    };
    // public sc_chatlog (data:sc_chatlog) {
    // if (this.view == null || this.view._isDestory) return;
    // this.view.sc_chatlog (data);
    // }
    F_TexasViewCtr.prototype.cs_tjackpotLog = function () {
        // let _getlist:cs_tjackpotLog = new cs_tjackpotLog ();
        // _getlist.gameId = this.Model.gameid;
        // _getlist.roomId = this.Model.tableid;
        // _getlist.fn = "cs_tjackpotLog";
        // WebSocketManager.getInstance.SendJSON(_getlist, () => { return true; });
    };
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
    F_TexasViewCtr.prototype.cs_tickuser_tex = function (uid, type) {
        var _getlist = new TexasNetData_1.cs_tickuser_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.uid = uid;
        _getlist.type = type;
        _getlist.fn = "cs_tickuser_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_tickuser_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_tickuser_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2084)); //操作不成功
        }
    };
    F_TexasViewCtr.prototype.sc_tickuser_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (this.view._bftable.myUser != null && this.view._bftable.myUser.player != null && data.kickuid == this.view._bftable.myUser.player.userid) //被强制站起的玩家是自己刷新被锁定的金币
                this.Model.SetLockGold(data.lockgold);
            //站起围观要删除数据
            var _tempUser = this.view._bftable.GetUserByUserId(data.kickuid);
            if (_tempUser != null) {
                if (_tempUser.self) //自己占座时候被强制站起要关闭带入面板
                    this.view.HideUITakeGoldPanel();
                this.view.RemoveUser(data.kickuid);
            }
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    F_TexasViewCtr.prototype.cs_userremark_tex = function (uid, rname, pRemark) {
        var _getlist = new TexasNetData_1.cs_userremark_tex();
        _getlist._g = this.Model.gameid;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.rname = rname;
        _getlist.pRemark = pRemark;
        _getlist.uid = uid;
        _getlist.fn = "cs_userremark_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_userremark_tex.bind(this)); // () => { return true; });
    };
    F_TexasViewCtr.prototype.sc_userremark_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            // this.view.tipView.ShowTipLabel("备注成功");
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2084)); //操作不成功
        }
    };
    F_TexasViewCtr.prototype.sc_refreshtableuser_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (data.Ur)
                data.user.py.uremark = data.Ur;
            this.Model.AddPlayerList(data.user);
            this.view.update_UserInfo(data.user);
            this.view.UpdateUserInfo(data.user.py, data.user.pos);
        }
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    F_TexasViewCtr.prototype.RefreshDeskBgAndCardBg = function () {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.RefreshCardImage();
        this.view.RefreshCommonCards();
    };
    /// <summary>
    /// 一轮后更新桌面上筹码
    /// </summary>
    F_TexasViewCtr.prototype.RefreshUserCurGamble = function () {
        if (this.view == null || this.view._isDestory)
            return;
        this.moveMyGambleToTableGameble(); //有筹码移动筹码到奖池
        this.view.RefreshUserCurGamble();
    };
    /// <summary>
    /// 一轮结束后移动筹码到奖池
    /// </summary>
    F_TexasViewCtr.prototype.moveMyGambleToTableGameble = function () {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.moveMyGambleToTableGameble();
    };
    //  获取奖池与详情 
    F_TexasViewCtr.prototype.cs_getalljackpot_tex = function () {
        var _getlist = new TexasNetData_1.cs_getalljackpot_tex();
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_getalljackpot_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getalljackpot_tex.bind(this)); // () => { return true; });
    };
    /// <summary>
    /// 获取奖池与详情 返回
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_getalljackpot_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            //Debug.LogError("获取奖池与详情返回结果");
            this.view.sc_getalljackpot_tex(data);
        }
        else {
            this.view.tipView.ShowTipLabel("sc_getalljackpot_tex error code:" + data.result);
        }
    };
    // 游戏内总奖池推送
    F_TexasViewCtr.prototype.sc_alljackpot_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            //Debug.LogError("游戏内总奖池推送:" + data.alljackpot);
            this.view.SetMangoOfTable(Math.floor(data.alljackpot));
        }
        else {
            this.view.tipView.ShowTipLabel("sc_alljackpot_tex_n error code:" + data.result);
        }
    };
    //#endregion
    //#region   
    F_TexasViewCtr.prototype.cs_seerestcard_tex = function () {
        var _getlist = new TexasNetData_1.cs_seerestcard_tex();
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_seerestcard_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_seerestcard_tex.bind(this)); // () => { return true; });
    };
    // 查看公牌余牌 返回  
    F_TexasViewCtr.prototype.sc_seerestcard_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.Model._CommonCard = data.card;
            this.view.ShowRestCommonCards(data.card);
        }
        else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //钻石不足
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2244)); //新牌局已经开始
        }
        else {
            this.view.tipView.ShowTipLabel("sc_seerestcard_tex error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.cs_forceshowcard_tex = function () {
        var _getlist = new TexasNetData_1.cs_forceshowcard_tex();
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist._g = this.Model.gameid;
        _getlist.fn = "cs_forceshowcard_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_forceshowcard_tex.bind(this)); // () => { return true; });
    };
    /// <summary>
    /// 强制秀牌
    /// </summary>
    /// <param name="data"></param>
    F_TexasViewCtr.prototype.sc_forceshowcard_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.Model.fshownum = data.fshownum;
            this.view.ShowCardsForce(data.othercard);
        }
        else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //钻石不足
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2244)); //新牌局已经开始
        }
        else {
            this.view.tipView.ShowTipLabel("sc_forceshowcard_tex error code:" + data.result);
        }
    };
    F_TexasViewCtr.prototype.cs_goldback_tex = function (gold) {
        var _getlist = new TexasNetData_1.cs_goldback_tex();
        _getlist._g = 51;
        _getlist.levelid = this.Model.levelid;
        _getlist.tableid = this.Model.tableid;
        _getlist.gold = gold;
        _getlist.fn = "cs_goldback_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_goldback_tex.bind(this));
    };
    F_TexasViewCtr.prototype.sc_goldback_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2010)); //申请成功
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1544)); //房间不存在
        }
        else if (data.result == -2) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180013)); //可回撤的金额不足
        }
        else if (data.result == -3) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180014)); //仅限AOF模式使用
        }
        else if (data.result == -5) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180031)); //不能重复申请 
        }
    };
    F_TexasViewCtr.prototype.sc_goldback_tex_n = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view._isCanOutGold = false;
        if (data.result == 1) {
            this.view.OutAfterUpGold(data.UserId, data.gold);
        }
        else if (data.result == -1) {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180013)); //可回撤的金额不足
        }
        else {
            this.view.tipView.ShowTipLabel("sc_goldback_tex_n error code:" + data.result);
        }
    };
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
    F_TexasViewCtr.prototype.cs_compete_table_info = function () {
        console.error("请求更新比赛数据" + this.Model.competeid);
        if (this.Model.competeid == 0)
            return;
        var _getlist = new TexasNetData_1.cs_compete_table_info();
        _getlist.competeid = this.Model.competeid;
        _getlist.fn = "cs_compete_table_info";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_compete_table_info.bind(this));
    };
    //比赛更新数据
    F_TexasViewCtr.prototype.sc_compete_table_info = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.UpdateMatchData(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    //比赛排名
    F_TexasViewCtr.prototype.sc_compete_rank_info = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.UpdateMatchRank(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    //比赛结束
    F_TexasViewCtr.prototype.sc_compete_award_info = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.MacthEnd(data);
        // TexQueueMessages.instance.RemoveFirstMes();
    };
    //#endregion
    F_TexasViewCtr.prototype.UpdateTakeInTip = function () {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.UpdateTakeInTip();
    };
    F_TexasViewCtr.prototype.ShowOpenTip = function (isShow) {
        if (this.view == null || this.view._isDestory)
            return;
        this.view.ShowOpenTip(isShow);
    };
    F_TexasViewCtr.prototype.ReloadData = function () {
        if (this.view == null || this.view._isDestory)
            return;
        this.Model.curMsgId = 0;
        this.view.Init();
    };
    /**举报扣费*/
    F_TexasViewCtr.prototype.cs_gamereport_tex = function (_gold) {
        var _getlist = new TexasNetData_1.cs_gamereport_tex();
        _getlist._g = 51;
        _getlist.fn = "cs_gamereport_tex";
        _getlist.gold = _gold;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_gamereport_tex.bind(this));
    };
    F_TexasViewCtr.prototype.sc_gamereport_tex = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            if (data.renum == -1) {
                this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180018)); //举报次数已用完
                return;
            }
            F_TexasViewCtr.instance.Model.mPlayerModel.recount = data.renum;
        }
    };
    //举报请求
    F_TexasViewCtr.prototype.PostReportPra = function (curPageIndex, suserid, _reason, title, _gold) {
        var _this = this;
        if (curPageIndex <= 0 && suserid == "0") {
            this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180015)); //举报失败!
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/SubmitReportInfo";
        var params = {
            GameId: 51,
            tnum: this.Model.tableid,
            g_info: curPageIndex,
            UserId: this.Model.mPlayerModel.userid,
            S_UserId: suserid,
            reason: _reason,
            noticetype: title,
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log("---SubmitReportInfo---", res);
            //moreCnt ：举报多人防止多次扣费
            if (res.code == 1) {
                _this.view.commonView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180016)); //举报成功!
                F_TexasViewCtr.instance.Model.mPlayerModel.recount = res.data.renum;
                // this.cs_gamereport_tex(_gold); 不要这个协议了
            }
            else if (res.code == -1) {
                _this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1522)); // 余额不足
            }
            else {
                _this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180015) + "：" + res.code); //举报失败!
            }
        }).catch(function (err) {
            console.log("---err---", err);
            _this.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180015)); //举报失败!
        });
    };
    F_TexasViewCtr.prototype.ExitGame = function () {
        console.error("退出游戏");
        var sceneName = "lobby";
        SceneManager_1.SceneManager.Singleton.loadScene("gameHall", sceneName);
        // let timeout = setTimeout(() => {
        //     let abbf = cc.assetManager.getBundle("texas");
        //     abbf.releaseAll();
        //     cc.assetManager.removeBundle(abbf);
        // }, 1000);
        // TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
    };
    // 游戏暂停或开启
    F_TexasViewCtr.prototype.sc_openplay_tex_n = function (data) {
        console.log("sc_openplay_tex_n ==== ", data);
        if (this.view == null || this.view._isDestory)
            return;
        if (data.result == 1) {
            // this.view.sc_openplay_tex_n(data.openplay);
            this.Model.openplay = data.openplay;
            this.view.sc_openplay_tex_n();
        }
    };
    return F_TexasViewCtr;
}());
exports.default = F_TexasViewCtr;

cc._RF.pop();