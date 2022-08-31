
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Contrl/F_TexasViewCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXENvbnRybFxcRl9UZXhhc1ZpZXdDdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkUsZ0VBQXFIO0FBQ3JILDBFQUF5RTtBQUN6RSxrRkFBaUY7QUFDakYsNEVBQXVFO0FBQ3ZFLDRGQUErRjtBQUMvRiwyRkFBMEY7QUFFMUYsc0VBQXFFO0FBQ3JFLHNEQUFxRDtBQUNyRCx3REFBdUQ7QUFDdkQsc0RBQXN1RDtBQUl0dUQsNkRBQTREO0FBQzVELHlEQUFvRDtBQUVwRCxvQkFBb0I7QUFDcEI7SUFBQTtRQW1qQ1kseUJBQW9CLEdBQWEsSUFBSSxDQUFDO1FBcUJ0QywyQkFBc0IsR0FBYSxJQUFJLENBQUM7SUErMkJwRCxDQUFDO0lBbDdERyxzQkFBVywwQkFBUTthQUFuQjtZQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztnQkFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFTSxxQ0FBWSxHQUFuQjtRQUFBLGlCQW1EQztRQWxERyxTQUFTO1FBQ1Qs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SUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3QyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3QyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMzQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3QyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNyRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM3QyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FB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QUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFDTCxxQkFBQztBQUFELENBdjdEQSxBQXU3REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xuaW1wb3J0IHsgY3NfY2hhdCwgc2NfY2hhdCwgc2NfY2hhdF9uLCBzY19kaXNjb25uZWN0X24sIE90aGVyVXNlckluZm9TRCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL2NzX2Jhc2VcIjtcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1NjZW5lTWFuYWdlclwiO1xuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcbmltcG9ydCB7IGNzX2FwcGx5ZXhpdHRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0Btb2dhZmEvdXRpbHMvbGliL0NsaWVudE1lc3NhZ2VcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5pbXBvcnQgeyBzY19jb21wZXRlX3JhbmtfaW5mbyB9IGZyb20gXCIuLi8uLi8uLi8uLi9HYW1lSGFsbC9zY3JpcHQvTG9iYnkvTG9iYnlOZXREYXRhXCI7XG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xuaW1wb3J0IHsgRl9UZXhhc01vZGVsIH0gZnJvbSBcIi4uL01vZGVsL0ZfVGV4YXNNb2RlbFwiO1xuaW1wb3J0IHsgVGV4YXNMYW5ndWFnZSB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc0xhbmd1YWdlXCI7XG5pbXBvcnQgeyBzY19lbnRlcnRhYmxlbnVtX3RleCwgY3NfZ2V0Z2FtZWxldmVsLCBzY19nZXRnYW1lbGV2ZWwsIGNzX2NoYXRsb2csIHNjX2NoYXRsb2csIHNjX3JlYWR5X3RleF9uLCBzY190YWJsZXN0YXJ0X3RleF9uLCBzY190b2tlbl90ZXhfbiwgc2NfaW5zdG9rZW5fdGV4X24sIHNjX2dhbWJsZV90ZXhfbiwgc2NfZ2l2ZXVwX3RleF9uLCBzY19lbmRfdGV4X24sIHNjX2JpZ2VuZF90ZXhfbiwgY3Nfc2l0ZG93bl90ZXgsIHNjX3NpdGRvd25fdGV4LCBzY19zaXRkb3duX3RleF9uLCBjc19zaXRkb3dud2FpdF90ZXgsIHNjX3NpdGRvd253YWl0X3RleCwgc2NfcmVmcmVzaGJhbGFuY2VfdGV4X24sIHNjX2FncmVlaW50b2dvbGRfdGV4X24sIGNzX2FkZGdvbGRpbmdhbWVfdGV4LCBzY19hZGRnb2xkaW5nYW1lX3RleCwgY3NfcmVmcmVzaGJhbGFuY2VfY2x1Yiwgc2NfcmVmcmVzaGJhbGFuY2VfY2x1YiwgY3NfcmVhZHlfdGV4LCBzY19yZWFkeV90ZXgsIGNzX2dhbWJsZV90ZXgsIHNjX2dhbWJsZV90ZXgsIGNzX2dpdmV1cF90ZXgsIHNjX2dpdmV1cF90ZXgsIGNzX2luc3VyYW5jZV90ZXgsIHNjX2luc3VyYW5jZV90ZXgsIHNjX2luc3VyYW5jZV90ZXhfbiwgY3NfZGlzbWlzc3RhYmxlX3RleCwgc2NfZGlzbWlzc3RhYmxlX3RleCwgY3NfYXBwbHlleGl0dGFibGVfdGV4LCBzY19hcHBseWV4aXR0YWJsZV90ZXgsIGNzX3NpdHVwa2VlcF90ZXgsIHNjX3NpdHVwa2VlcF90ZXgsIGNzX2FkdmFuY2VzZXR0bGVfdGV4LCBzY19hZHZhbmNlc2V0dGxlX3RleCwgc2NfYXBwbHlleGl0dGFibGVfdGV4X24sIHNjX29uZV9leGl0dGFibGVfbiwgc2Nfc2l0dXBrZWVwX3RleF9uLCBjc19lbnRlcnJvYm90X3RleCwgc2NfZW50ZXJyb2JvdF90ZXgsIGNzX3RoaXN0b3J5X3RleCwgc2NfdGhpc3RvcnlfdGV4LCBjc19yb29taGlzdG9yeV90ZXgsIHNjX3Jvb21oaXN0b3J5X3RleCwgUEluZm9TRCwgVGV4VEluZm9TRCwgY3NfdGV4YXNjb2xsZWN0X3RleCwgc2NfdGV4YXNjb2xsZWN0X3RleCwgY3NfZ2V0Z2Fpbl90ZXgsIHNjX2dldGdhaW5fdGV4LCBjc19zaG93bXljYXJkX3RleCwgc2Nfc2hvd215Y2FyZF90ZXgsIHNjX3Nob3dteWNhcmRfdGV4X24sIGNzX2RlbGF5X3RleCwgc2NfZGVsYXlfdGV4LCBzY19kZWxheV90ZXhfbiwgY3NfdGlja3VzZXJfdGV4LCBzY190aWNrdXNlcl90ZXgsIHNjX3RpY2t1c2VyX3RleF9uLCBjc191c2VycmVtYXJrX3RleCwgc2NfdXNlcnJlbWFya190ZXgsIHNjX3JlZnJlc2h0YWJsZXVzZXJfbiwgY3NfZ2V0YWxsamFja3BvdF90ZXgsIHNjX2dldGFsbGphY2twb3RfdGV4LCBzY19hbGxqYWNrcG90X3RleF9uLCBjc19zZWVyZXN0Y2FyZF90ZXgsIHNjX3NlZXJlc3RjYXJkX3RleCwgY3NfZm9yY2VzaG93Y2FyZF90ZXgsIHNjX2ZvcmNlc2hvd2NhcmRfdGV4LCBjc19nb2xkYmFja190ZXgsIHNjX2dvbGRiYWNrX3RleCwgc2NfZ29sZGJhY2tfdGV4X24sIGNzX2NvbXBldGVfdGFibGVfaW5mbywgc2NfY29tcGV0ZV90YWJsZV9pbmZvLCBzY19jb21wZXRlX2F3YXJkX2luZm8sIGNzX2dhbWVyZXBvcnRfdGV4LCBzY19nYW1lcmVwb3J0X3RleCwgc2Nfc2l0ZG93bndhaXRfdGV4X24sIGNzX3NpdGRvd253YWl0dXBfdGV4LCBzY19zaXRkb3dud2FpdHVwX3RleCwgc2Nfc2l0ZG93bndhaXR1cF90ZXhfbiwgc2Nfb3BlbnBsYXlfdGV4X24sIHNjX2dldG5vdGljZV9uLCBjc19mcmVzaHBsYXllckluZm9TRCwgc2NfZnJlc2hwbGF5ZXJJbmZvU0QgfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNOZXREYXRhXCI7XG5pbXBvcnQgQ2FyZFJlZGJldENvbXAgZnJvbSBcIi4uL1ZpZXcvQ2FyZFJlZGJldENvbXBcIjtcbmltcG9ydCBGX1RleGFzVmlldyBmcm9tIFwiLi4vVmlldy9GX1RleGFzVmlld1wiO1xuaW1wb3J0IFRleGFzVXNlckNvbXAgZnJvbSBcIi4uL1ZpZXcvVGV4YXNVc2VyQ29tcFwiO1xuaW1wb3J0IHsgVGV4UXVldWVNZXNzYWdlcyB9IGZyb20gXCIuLi9WaWV3L1RleFF1ZXVlTWVzc2FnZXNcIjtcbmltcG9ydCBUaW1lSW5mb01nclRleCBmcm9tIFwiLi4vVmlldy9UaW1lSW5mb01nclRleFwiO1xuXG4vLyNhdXRvYWRkbmFtZXNwYWNlI1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRl9UZXhhc1ZpZXdDdHIge1xuICAgIHB1YmxpYyB2aWV3OiBGX1RleGFzVmlld1xuICAgIHByaXZhdGUgc3RhdGljIF92aWV3Q3RyOiBGX1RleGFzVmlld0N0cjtcblxuICAgIHByaXZhdGUgX21vZGVsOiBGX1RleGFzTW9kZWw7XG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBGX1RleGFzVmlld0N0ciB7XG4gICAgICAgIGlmICh0aGlzLl92aWV3Q3RyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDdHIgPSBuZXcgRl9UZXhhc1ZpZXdDdHIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0N0cjtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQgTW9kZWwoKTogRl9UZXhhc01vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbmV3IEZfVGV4YXNNb2RlbCgpO1xuXG4gICAgICAgICAgICB0aGlzLk1vZGVsLmdhbWVpZCA9IDUxO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5sZXZlbGlkID0gNTExO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwuSW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVnaXN0Tm90aWZ5KCkge1xuICAgICAgICAvL+a3u+WKoOWIsOmYn+WIl+WkhOeQhlxuICAgICAgICBjb25zb2xlLmxvZyhcIkZfVGV4YXNWaWV3Q3RyICBSZWdpc3ROb3RpZnlcIik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLms6jlhozmtojmga/kuovku7ZcIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bl90ZXhfblwiLCAoZGF0YSkgPT4geyB0aGlzLkFkZFRleE1lc3NhZ2VzKGRhdGEsIFwic2Nfc2l0ZG93bl90ZXhfblwiLCB0aGlzLnNjX3NpdGRvd25fdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdGFibGVzdGFydF90ZXhfblwiLCAoZGF0YSkgPT4geyB0aGlzLkFkZFRleE1lc3NhZ2VzKGRhdGEsIFwic2NfdGFibGVzdGFydF90ZXhfblwiLCB0aGlzLnNjX3RhYmxlc3RhcnRfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdG9rZW5fdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX3Rva2VuX3RleF9uXCIsIHRoaXMuc2NfdG9rZW5fdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfaW5zdG9rZW5fdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX2luc3Rva2VuX3RleF9uXCIsIHRoaXMuc2NfaW5zdG9rZW5fdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZ2l2ZXVwX3RleF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19naXZldXBfdGV4X25cIiwgdGhpcy5zY19naXZldXBfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZW5kX3RleF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19lbmRfdGV4X25cIiwgdGhpcy5zY19lbmRfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfYmlnZW5kX3RleF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19iaWdlbmRfdGV4X25cIiwgdGhpcy5zY19iaWdlbmRfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfaW5zdXJhbmNlX3RleF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19pbnN1cmFuY2VfdGV4X25cIiwgdGhpcy5zY19pbnN1cmFuY2VfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfYXBwbHlleGl0dGFibGVfdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX2FwcGx5ZXhpdHRhYmxlX3RleF9uXCIsIHRoaXMuc2NfYXBwbHlleGl0dGFibGVfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0dXBrZWVwX3RleF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19zaXR1cGtlZXBfdGV4X25cIiwgdGhpcy5zY19zaXR1cGtlZXBfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfY2hhdF9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19jaGF0X25cIiwgdGhpcy5zY19jaGF0X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdGlja3VzZXJfdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX3RpY2t1c2VyX3RleF9uXCIsIHRoaXMuc2NfdGlja3VzZXJfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfcmVmcmVzaHRhYmxldXNlcl9uXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19yZWZyZXNodGFibGV1c2VyX25cIiwgdGhpcy5zY19yZWZyZXNodGFibGV1c2VyX24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfY29tcGV0ZV90YWJsZV9pbmZvXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19jb21wZXRlX3RhYmxlX2luZm9cIiwgdGhpcy5zY19jb21wZXRlX3RhYmxlX2luZm8uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfY29tcGV0ZV9hd2FyZF9pbmZvXCIsIChkYXRhKSA9PiB7IHRoaXMuQWRkVGV4TWVzc2FnZXMoZGF0YSwgXCJzY19jb21wZXRlX2F3YXJkX2luZm9cIiwgdGhpcy5zY19jb21wZXRlX2F3YXJkX2luZm8uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfY29tcGV0ZV9yYW5rX2luZm9cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX2NvbXBldGVfcmFua19pbmZvXCIsIHRoaXMuc2NfY29tcGV0ZV9yYW5rX2luZm8uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bndhaXRfdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX3NpdGRvd253YWl0X3RleF9uXCIsIHRoaXMuc2Nfc2l0ZG93bndhaXRfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bndhaXR1cF90ZXhfblwiLCAoZGF0YSkgPT4geyB0aGlzLkFkZFRleE1lc3NhZ2VzKGRhdGEsIFwic2Nfc2l0ZG93bndhaXR1cF90ZXhfblwiLCB0aGlzLnNjX3NpdGRvd253YWl0dXBfdGV4X24uYmluZCh0aGlzKSkgfSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZ29sZGJhY2tfdGV4X25cIiwgKGRhdGEpID0+IHsgdGhpcy5BZGRUZXhNZXNzYWdlcyhkYXRhLCBcInNjX2dvbGRiYWNrX3RleF9uXCIsIHRoaXMuc2NfZ29sZGJhY2tfdGV4X24uYmluZCh0aGlzKSkgfSk7XG5cblxuXG4gICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdGFibGVzdGFydF90ZXhfblwiLCB0aGlzLnNjX3RhYmxlc3RhcnRfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdG9rZW5fdGV4X25cIiwgdGhpcy5zY190b2tlbl90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19yZWFkeV90ZXhfblwiLCB0aGlzLnNjX3JlYWR5X3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2luc3Rva2VuX3RleF9uXCIsIHRoaXMuc2NfaW5zdG9rZW5fdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZ2FtYmxlX3RleF9uXCIsIHRoaXMuc2NfZ2FtYmxlX3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2dpdmV1cF90ZXhfblwiLCB0aGlzLnNjX2dpdmV1cF90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19lbmRfdGV4X25cIiwgdGhpcy5zY19lbmRfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfYmlnZW5kX3RleF9uXCIsIHRoaXMuc2NfYmlnZW5kX3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2Rpc2Nvbm5lY3RfblwiLCB0aGlzLnNjX2Rpc2Nvbm5lY3Rfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19zaXRkb3duX3RleF9uXCIsIHRoaXMuc2Nfc2l0ZG93bl90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19yZWZyZXNoYmFsYW5jZV90ZXhfblwiLCB0aGlzLnNjX3JlZnJlc2hiYWxhbmNlX3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2FncmVlaW50b2dvbGRfdGV4X25cIiwgdGhpcy5zY19hZ3JlZWludG9nb2xkX3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2luc3VyYW5jZV90ZXhfblwiLCB0aGlzLnNjX2luc3VyYW5jZV90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19hcHBseWV4aXR0YWJsZV90ZXhfblwiLCB0aGlzLnNjX2FwcGx5ZXhpdHRhYmxlX3RleF9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX29uZV9leGl0dGFibGVfblwiLCB0aGlzLnNjX29uZV9leGl0dGFibGVfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19zaXR1cGtlZXBfdGV4X25cIiwgdGhpcy5zY19zaXR1cGtlZXBfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfc2hvd215Y2FyZF90ZXhfblwiLCB0aGlzLnNjX3Nob3dteWNhcmRfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZGVsYXlfdGV4X25cIiwgdGhpcy5zY19kZWxheV90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19jaGF0X25cIiwgdGhpcy5zY19jaGF0X24uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfdGlja3VzZXJfdGV4X25cIiwgdGhpcy5zY190aWNrdXNlcl90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19yZWZyZXNodGFibGV1c2VyX25cIiwgdGhpcy5zY19yZWZyZXNodGFibGV1c2VyX24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfYWxsamFja3BvdF90ZXhfblwiLCB0aGlzLnNjX2FsbGphY2twb3RfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZnJlc2hnb2xkX25cIiwgdGhpcy5zY19mcmVzaGdvbGRfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19nZXRub3RpY2VfblwiLCB0aGlzLnNjX2dldG5vdGljZV9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX29wZW5wbGF5X3RleF9uXCIsIHRoaXMuc2Nfb3BlbnBsYXlfdGV4X24uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIFVuUmVnaXN0Tm90aWZ5KCkge1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bl90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX3RhYmxlc3RhcnRfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY190b2tlbl90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2luc3Rva2VuX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfZ2l2ZXVwX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfZW5kX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfYmlnZW5kX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfaW5zdXJhbmNlX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfYXBwbHlleGl0dGFibGVfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19zaXR1cGtlZXBfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19jaGF0X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY190aWNrdXNlcl90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX3JlZnJlc2h0YWJsZXVzZXJfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2NvbXBldGVfdGFibGVfaW5mb1wiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2NvbXBldGVfYXdhcmRfaW5mb1wiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2NvbXBldGVfcmFua19pbmZvXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bndhaXRfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19zaXRkb3dud2FpdHVwX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfZ29sZGJhY2tfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19yZWFkeV90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2dhbWJsZV90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2Rpc2Nvbm5lY3RfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX3JlZnJlc2hiYWxhbmNlX3RleF9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfYWdyZWVpbnRvZ29sZF90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX29uZV9leGl0dGFibGVfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX3Nob3dteWNhcmRfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19kZWxheV90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2FsbGphY2twb3RfdGV4X25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19vcGVucGxheV90ZXhfblwiKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgQ3JlYXRlVGFibGVDYWxsQmFjazpGdW5jdGlvbj1udWxsO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy/liJvlu7rmiL/pl7QgICBcbiAgICAvLy8gPC9zdW1tYXJ5PiAgIFxuICAgIC8vIHB1YmxpYyBjc19jcmVhdGV0YWJsZV90ZXgoKVxuICAgIC8vIHsgXG4gICAgLy8gICAgICBjb25zb2xlLmxvZyhcImNzX2NyZWF0ZXRhYmxlX3RjLi4uXCIpO1xuICAgIC8vICAgICBsZXQgZGF0YTpjc19jcmVhdGV0YWJsZV90ZXggPSBuZXcgY3NfY3JlYXRldGFibGVfdGV4KCk7IFxuICAgIC8vICAgICBkYXRhLmFsbGlhbmNlaWQgPSAwOyBcbiAgICAvLyAgICAgZGF0YS5jaW50byA9IGZhbHNlO1xuICAgIC8vICAgICBkYXRhLmNsdWJpZHggPSAwO1xuICAgIC8vICAgICBkYXRhLkR1cmF0aW9uID0gMzBcbiAgICAvLyAgICAgZGF0YS5pbnRvID0gNTA7XG4gICAgLy8gICAgIGRhdGEuaW50b3JhdGVfbWluPSAxO1xuICAgIC8vICAgICBkYXRhLmludG9yYXRlX21heCA9IDQ7XG4gICAgLy8gICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmludG9yYXRlX21pbiA9IGRhdGEuaW50b3JhdGVfbWluO1xuICAgIC8vICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pbnRvcmF0ZV9tYXggPSBkYXRhLmludG9yYXRlX21heDtcbiAgICAvLyAgICAgZGF0YS5tYXhDb3VudCA9IDY7XG4gICAgLy8gICAgIGRhdGEubWFuTnVtID0gOTtcbiAgICAvLyAgICAgdGhpcy5Nb2RlbC5tYW5OdW0gPSBkYXRhLm1hbk51bTtcbiAgICAvLyAgICAgZGF0YS5iYXNlcmF0ZSA9IDEwMDsgXG4gICAgLy8gICAgIGRhdGEucHJlZ2FtYmxlID0gMTAwO1xuICAgIC8vICAgICBkYXRhLmdhbWV0eXBlID0gMTtcbiAgICAvLyAgICAgZGF0YS5udW1wZXJ0YWJsZSA9IDI7XG4gICAgLy8gICAgIGRhdGEudG5hbWU9IFwidGVzdEFBQVwiO1xuICAgIC8vICAgICBkYXRhLl9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgLy8gICAgIGRhdGEuZ2FtZWlkID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgLy8gICAgIGRhdGEucm9vbWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgIC8vICAgICBkYXRhLm9wZW5wbGF5ID0gdHJ1ZTtcbiAgICAvLyAgICAgZGF0YS5mbiA9IFwiY3NfY3JlYXRldGFibGVfdGV4XCI7IFxuICAgIC8vICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKGRhdGEsdGhpcy5zY19jcmVhdGV0YWJsZV90ZXguYmluZCh0aGlzKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIHNjX2NyZWF0ZXRhYmxlX3RleCggZGF0YTpzY19jcmVhdGV0YWJsZV90ZXgpXG4gICAgLy8ge1xuICAgIC8vICAgICAvL2lmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgIC8vICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJzY19jcmVhdGV0YWJsZV9iZiBzdWNjZXNzLi4uXCIpO1xuICAgIC8vICAgICAgICAgdGhpcy5Nb2RlbC5sZXZlbGlkID0gZGF0YS5sZXZlbGlkO1xuICAgIC8vICAgICAgICAgdGhpcy5Nb2RlbC50YWJsZWlkID0gZGF0YS50YWJsZWlkO1xuXG4gICAgLy8gICAgICAgICBpZih0aGlzLkNyZWF0ZVRhYmxlQ2FsbEJhY2spIHRoaXMuQ3JlYXRlVGFibGVDYWxsQmFjayhkYXRhLnRudW1iZXIpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTQpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2NfY3JlYXRldGFibGVfYmYgZGlhbSBpcyBub3QgZW5vdWdoLi4uXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2NfY3JlYXRldGFibGVfYmYgZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0ICk7IFxuICAgIC8vICAgICB9IFxuICAgIC8vIH1cblxuICAgIHB1YmxpYyBBZGRUZXhNZXNzYWdlcyhkYXRhOiBhbnksIGZ1bk5hbWU6IHN0cmluZyA9IG51bGwsIGZ1bjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuQWRkVGV4TWVzKGZ1bk5hbWUsIGRhdGEsIGZ1bik7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2VudGVydGFibGVudW1fdGV4KGRhdGE6IHNjX2VudGVydGFibGVudW1fdGV4KSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5TZXRiYXNlRGF0YUlkKGRhdGEuZ2FtZWlkLCBkYXRhLnRhYmxlaWQsIGRhdGEubGV2ZWxpZCk7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Sb29tX3RudW1iZXIgPSBkYXRhLnRudW07XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Sb29tX25hbWUgPSBkYXRhLnRuYW1lO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubWFuTnVtID0gZGF0YS5tYW5OdW07XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5taW5QQyA9IGRhdGEubWluUEM7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5vcGVuViA9IGRhdGEub3BlbnY7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5icmF0ZSA9IGRhdGEuYnJhdGU7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC50dXJuR2FtYmxlID0gZGF0YS5icmF0ZTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNsaWNrbnVtID0gZGF0YS5jbGlja251bTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9tYW5nb09mVGFibGUgPSBkYXRhLmphY2twb3Q7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pbnRvcmF0ZV9taW4gPSBkYXRhLmludG9yYXRlX21pbiAqIDEwMDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmludG9yYXRlX21heCA9IGRhdGEuaW50b3JhdGVfbWF4ICogMTAwO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwi5pyA5bCP5bim5YWl77yaXCIrRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaW50b3JhdGVfbWluKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCLmnIDlpKfluKblhaXvvJpcIitGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5pbnRvcmF0ZV9tYXgpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucGFzID0gZGF0YS5wYXM7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5wcmVnYW1ibGUgPSBkYXRhLnByZWdhbWJsZTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdwcyA9IGRhdGEuZ3BzO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXAgPSBkYXRhLmlwO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwub3BlbnBsYXkgPSBkYXRhLm9wZW5wbGF5O1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaXNvcGVuID0gZGF0YS5vcGxheTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkluZmxvdyA9IGRhdGEuSW5mbG93O1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuaW9zID0gZGF0YS5pb3M7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheSA9IGRhdGEuZGVsYXk7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5zaG93Q2FyZCA9IGRhdGEuc2hvd0NhcmQ7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaW50byA9IGRhdGEuY2ludG87XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1ldHlwZSA9IGRhdGEuZ2FtZXR5cGU7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5kZWxheUNvdW50ID0gZGF0YS5kZWxheXM7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc1N1cHBlciA9IGRhdGEuSXNTdXBwZXI7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Jc1NldHRsZSA9IGRhdGEuSXNTZXR0bGU7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jbHVic2xpc3QgPSBkYXRhLmNsdWJzbGlzdDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmludG9DaWQgPSBkYXRhLmludG9DaWQ7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5mc2hvd251bSA9IGRhdGEuZnNob3dudW07XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jbHViaWQgPSBkYXRhLmNsdWJpZDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm93bm5lcmlkID0gZGF0YS5vd25uZXJpZDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNnb2xkID0gZGF0YS5jZ29sZDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmlucyA9IGRhdGEuaW5zO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuQU9GX1RpbWVzID0gZGF0YS5BT0ZfVGltZXM7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5sZXZlbCA9IGRhdGEubGV2ZWw7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5taW5fbGV2ZWwgPSBkYXRhLm1pbl9sZXZlbDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1heF9sZXZlbCA9IGRhdGEubWF4X2xldmVsO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY29tcGV0ZWlkID0gZGF0YS5jb21wZXRlaWQ7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tYXRjaE5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5iaWdibGluZCA9IGRhdGEuYmlnYmxpbmQ7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5TZXRDdXJTQ2x1YihkYXRhLmludG9DaWQpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuU2V0UmVtYWluVGltZShkYXRhLmxlZnRzKTtcblxuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudGFibGUgPSBkYXRhO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucGFseWVybGlzdCA9IGRhdGEucGFseWVybGlzdDtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnBvczJhcHBseSA9IGRhdGEuX3JlY292ZXIuX3BvczJhcHBseTtcblxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gLTEwMDAxKSBjb25zb2xlLmxvZyhcIuaIv+mXtOaJvuS4jeWIsOaIluiAheW3sua7oeWRmCFcIik7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwuc3RhdGUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/ojrflj5blnLrmrKFcbiAgICBwdWJsaWMgY3NfZ2V0Z2FtZWxldmVsKCkge1xuICAgICAgICBsZXQgZGF0YTogY3NfZ2V0Z2FtZWxldmVsID0gbmV3IGNzX2dldGdhbWVsZXZlbCgpO1xuICAgICAgICBkYXRhLmdhbWVpZCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3NfZ2V0Z2FtZWxldmVsXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5zY19nZXRnYW1lbGV2ZWwuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19nZXRnYW1lbGV2ZWwoZGF0YTogc2NfZ2V0Z2FtZWxldmVsKSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMlwiICsgQXBwQ29uc3QuY3VycmVudGxldmVsaWQpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZ2FtZWxldmVsID0gZGF0YS5sZXZlbGxpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID09IGl0ZW0uaWQgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOWPkemAgea2iOaBr1xuICAgIHB1YmxpYyBjc19jaGF0KHR5cGU6IG51bWJlciwgdHBvczogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcsIF9uZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkYXRhOiBjc19jaGF0ID0gbmV3IGNzX2NoYXQoKTtcbiAgICAgICAgZGF0YS5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBkYXRhLnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIGRhdGEudHlwZSA9IHR5cGU7XG4gICAgICAgIGRhdGEudHBvcyA9IHRwb3M7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEubmdvbGQgPSBfbmdvbGQ7XG4gICAgICAgIGRhdGEuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3NfY2hhdFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKGRhdGEsIHRoaXMuc2NfY2hhdC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfY2hhdChkYXRhOiBzY19jaGF0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLXNjX2NoYXQtLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTUyNykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2NoYXRfbihkYXRhOiBzY19jaGF0X24pIHtcbiAgICAgICAgLy8gaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIC8vIC8vRGVidWcuTG9nRXJyb3IoXCLogYrlpKnmjqjpgIFcIik7XG4gICAgICAgIC8vIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcuc2NfY2hhdF9uKGRhdGEpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi6YeR5biB5LiN6LazXCIpOy8v6YeR5biB5LiN6LazXG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tc2NfY2hhdF9uLS0tLVwiLCBkYXRhKTtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1MjYpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcuc2NfY2hhdF9uKGRhdGEpO1xuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvLnluZXorrDlvZVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInRhYmxlaWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInJvb21pZFwiPjwvcGFyYW0+XG4gICAgcHVibGljIGNzX2NoYXRsb2coKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdCA9IG5ldyBjc19jaGF0bG9nKCk7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmdhbWVpZCA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfY2hhdGxvZ1wiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2NoYXRsb2cuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvLnluZXorrDlvZXov5Tlm55cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBzY19jaGF0bG9nKGRhdGE6IHNjX2NoYXRsb2cpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NfY2hhdGxvZyhkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX2NoYXRsb2cgZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YCa55+l6L+Z5qGM5pyJ5Lq65YeG5aSH5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfcmVhZHlfdGV4X24oZGF0YTogc2NfcmVhZHlfdGV4X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NfcmVhZHlfdGV4X24oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19yZWFkeV90ZXhfbiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YCa55+l5byA5aeL5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfdGFibGVzdGFydF90ZXhfbihkYXRhOiBzY190YWJsZXN0YXJ0X3RleF9uKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc0dhbWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmlzU2hvd1BlcnNvblJlbWluZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc3NlbGZvbnRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX1Nob3VQYWkgPSBkYXRhLl9zaG93Q2FyZDtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX2N1ckdhbWJsZUxpbWl0TWluID0gdGhpcy5Nb2RlbC5nYW1lbGV2ZWwuYmFzZXJhdGU7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLk1hdGNoQ29kZSA9IGRhdGEuTWF0Y2hDb2RlO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5QbGF5aW5nVXNlcnMgPSBkYXRhLl9wb3MyR2FtYmxlO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5CaWdTbWFsbFBsYXlpbmdVc2VyID0gZGF0YS5fcG9zMmJpZ3NtYWxsO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc1R1cm5PdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmlzaW5zdXJhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmRlbGF5Q291bnQgPSB0aGlzLk1vZGVsLmRlbGF5Q291bnQgPT0gLTEgPyAtMSA6IDA7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLnR1cm5HYW1ibGUgPSB0aGlzLk1vZGVsLmJyYXRlO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fanBvdCA9IDA7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLl9nYW1ibGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbnNMaXN0MzEgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbnNMaXN0MzIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50ID0gMDsgLy/mr4/kuIDlsI/lsYDnu5PmnZ/kuobvvIzorrDlvZXlvZPliY3nmoR0dXJu5Li6MFxuICAgICAgICAgICAgdGhpcy5Nb2RlbC5lbmREZWxheSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc0xhc3RTdGVwU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX3RhYmxlc3RhcnRfdGV4X24oZGF0YS5fYmFua2VyUG9zLCBkYXRhLl9zaG93Q2FyZCwgZGF0YS5fcG9zMkdhbWJsZSwgZGF0YS5fcG9zMkdvbGQsIGRhdGEuX3BvczJiaWdzbWFsbCwgZGF0YS5sZWZ0cywgZGF0YS5fbXNnaWQgPD0gMCwgZGF0YS5fcG9zMnN0cmFkKTtcbiAgICAgICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX3RhYmxlc3RhcnRfdGV4X24gZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g56e75LiA5qyhdG9rZW4gIOeUqOaIt+WPr+iDveaciTTkuKrmk43kvZzvvIzvvIznnIvniYzvvIzkuIvms6jvvIzmlL7lvIPvvIwg5q+U54mM44CQ5p2h5Lu26ZmQ5Yi244CRIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGF0YVwiPjwvcGFyYW0+XG4gICAgcHVibGljIHNjX3Rva2VuX3RleF9uKGRhdGE6IHNjX3Rva2VuX3RleF9uKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LlNob3dBbmNob3JDY2FyZHNUaXAoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fY3VyR2FtYmxlTGltaXRNaW4gPSBkYXRhLl9taW47XG4gICAgICAgICAgICB0aGlzLk1vZGVsLl9jdXJNYXhHYW1ibGUgPSBkYXRhLl9tYXg7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLl9qcG90ID0gZGF0YS5famFja3BvdDtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX21pbmdhbWJsZSA9IGRhdGEuX21pbjtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX2VtYXhnID0gZGF0YS5fZW1heGc7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLnBvdGxpc3QgPSBkYXRhLnBvdGxpc3Q7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLl9Db21tb25DYXJkID0gZGF0YS5fQ2FyZHM7XG4gICAgICAgICAgICBsZXQgX3R1cm5DaGFuZ2U6IGJvb2xlYW4gPSAodGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50ICE9IGRhdGEuX3RjKTsgLy8gJiYgTW9kZWwuX0N1clR1cm5Db3VudD49MDtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuZmlyc3RUdXJuU3RhcnQgPSB0aGlzLk1vZGVsLl9DdXJUdXJuQ291bnQgIT0gZGF0YS5fdGMgJiYgdGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50IDw9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLk1vZGVsLl9DdXJUdXJuQ291bnQgKyBcIixcIiArIGRhdGEuX3RjICsgXCIgdHVybkNoYW5nZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIiArIF90dXJuQ2hhbmdlKTtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX0N1clR1cm5Db3VudCA9IGRhdGEuX3RjO1xuICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwuaXNUdXJuT3Zlcikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvdGxpc3QgPT0gbnVsbCB8fCBkYXRhLnBvdGxpc3QubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBwb2xpc3QgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLl9sYXN0anBvdCA9IGRhdGEucG90bGlzdCA9PSBudWxsIHx8IGRhdGEucG90bGlzdC5sZW5ndGggPD0gMCA/IDAgOiBkYXRhLnBvdGxpc3RbMF07XG4gICAgICAgICAgICAgICAgLy9Nb2RlbC5fbGFzdGpwb3QgPSBkYXRhLl9qYWNrcG90O3NjX3Rva2VuX3RleF9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuTW9kZWwuaXNMYXN0U3RlcFN0YXJ0ID09PSBcIiwgdGhpcy5Nb2RlbC5pc0xhc3RTdGVwU3RhcnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwuaXNMYXN0U3RlcFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc0xhc3RTdGVwU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBUaW1lSW5mb01nclRleC5pbnN0YW5jZS5BZGRUaW1lcigwLjUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlu7bov5/miafooYwgc2NfdG9rZW5fdGV4X25cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zY190b2tlbl90ZXhfbihkYXRhLCBfdHVybkNoYW5nZSwgMC41KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNjX3Rva2VuX3RleF9uKGRhdGEsIF90dXJuQ2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX3Rva2VuX3RleF9uIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g56e75LiA5qyhdG9rZW4gIOeUqOaIt+WPr+iDveacieS4pOS4quaTjeS9nO+8jOmAieS/nemine+8jOaIluS4jeS/nSBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBzY19pbnN0b2tlbl90ZXhfbihkYXRhOiBzY19pbnN0b2tlbl90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5TaG93QW5jaG9yQ2NhcmRzVGlwKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX2pwb3QgPSBkYXRhLl9qYWNrcG90O1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fQ29tbW9uQ2FyZCA9IGRhdGEuX0NhcmRzO1xuICAgICAgICAgICAgbGV0IF90dXJuQ2hhbmdlOiBib29sZWFuID0gKHRoaXMuTW9kZWwuX0N1clR1cm5Db3VudCAhPSBkYXRhLl90Yyk7IC8vICYmIE1vZGVsLl9DdXJUdXJuQ291bnQ+PTA7XG4gICAgICAgICAgICBsZXQgX2ZpcnN0VHVyblN0YXJ0OiBib29sZWFuID0gdGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50ICE9IGRhdGEuX3RjICYmIHRoaXMuTW9kZWwuX0N1clR1cm5Db3VudCA8PSAwO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50ID0gZGF0YS5fdGM7XG4gICAgICAgICAgICAvL19pbGlzdOS4uuepuuaIluiAhWNvdW50PTDml7blgJnkuI3otbDkv53pmanmqKHlvI/vvIznu5HlrprlhazniYxcbiAgICAgICAgICAgIGlmICgoZGF0YS5faWxpc3QzMSAhPSBudWxsICYmIGRhdGEuX2lsaXN0MzEubGVuZ3RoID49IDMpIHx8IChkYXRhLl9pbGlzdDMyICE9IG51bGwgJiYgZGF0YS5faWxpc3QzMi5sZW5ndGggPj0gMykpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb3MgPT0gdGhpcy5Nb2RlbC5fcG9zU2VydmVyKS8v5Y+q5pyJ6Ieq5bex6LSt5Lmw5L+d6Zmp55qE5pe25YCZ5omN5Yi35paw5pWw5o2uXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmlzaW5zdXJhbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbnNMaXN0MzIgPSBkYXRhLl9pbGlzdDMyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLm91dHMzMiA9IGRhdGEub3V0czMyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmN1ckppYW5nY2hpMzIgPSBkYXRhLm1wb3QzMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbnNMaXN0MzEgPSBkYXRhLl9pbGlzdDMxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLm91dHMzMSA9IGRhdGEub3V0czMxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmN1ckppYW5nY2hpMzEgPSBkYXRhLm1wb3QzMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbk9yZGVyID0gZGF0YS5vcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pbnNJcG9zID0gZGF0YS5pcG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wb3RsaXN0ID09IG51bGwgfHwgZGF0YS5wb3RsaXN0Lmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgcG9saXN0IGlzIG51bGxcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5fbGFzdGpwb3QgPSBkYXRhLnBvdGxpc3QgPT0gbnVsbCB8fCBkYXRhLnBvdGxpc3QubGVuZ3RoIDw9IDAgPyAwIDogZGF0YS5wb3RsaXN0WzBdO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zY19pbnN0b2tlbl90ZXhfbihkYXRhLnBvcywgX3R1cm5DaGFuZ2UsIF9maXJzdFR1cm5TdGFydCwgZGF0YS5fcG9zMlNob3VwYWksIGRhdGEuX3BvczJ3aW4sIGRhdGEucG90bGlzdCwgZGF0YS5pcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvdGxpc3QgPT0gbnVsbCB8fCBkYXRhLnBvdGxpc3QubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBwb2xpc3QgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLl9sYXN0anBvdCA9IGRhdGEucG90bGlzdCA9PSBudWxsIHx8IGRhdGEucG90bGlzdC5sZW5ndGggPD0gMCA/IDAgOiBkYXRhLnBvdGxpc3RbMF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2NfQWxsaW5fdGV4X24oZGF0YS5fcG9zMlNob3VwYWksIGRhdGEucG90bGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19pbnN0b2tlbl90ZXhfbiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacieS6uuS4i+azqOS6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGF0YVwiPjwvcGFyYW0+XG4gICAgcHVibGljIHNjX2dhbWJsZV90ZXhfbihkYXRhOiBzY19nYW1ibGVfdGV4X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmlzVHVybk92ZXIgPSBkYXRhLl90dXJuT3ZlcjtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX2pwb3QgPSBkYXRhLl9qYWNrcG90O1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fZ2FtYmxlID0gZGF0YS5fZ2FtYmxlO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX2dhbWJsZV90ZXhfbihkYXRhKTtcbiAgICAgICAgICAgIGlmICghZGF0YS5fYWxsaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLnR1cm5HYW1ibGUgPSBkYXRhLl9nYW1ibGUgPiB0aGlzLk1vZGVsLnR1cm5HYW1ibGUgPyBkYXRhLl9nYW1ibGUgOiB0aGlzLk1vZGVsLnR1cm5HYW1ibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19nYW1ibGVfdGV4X24gZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PiBcbiAgICAvLy8gIOacieS6uuW8g+eJjOS6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG5cbiAgICBwdWJsaWMgc2NfZ2l2ZXVwX3RleF9uKGRhdGE6IHNjX2dpdmV1cF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvcyA9PSB0aGlzLk1vZGVsLl9wb3NTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmlzc2VsZm9udGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5zY19naXZldXBfdGV4X24oZGF0YS5wb3MsIGRhdGEuX3R1cm5PdmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX2dpdmV1cF90ZXhfbiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+IFxuICAgIC8vLyAg6YCa55+l57uT5p2f5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2NfZW5kX3RleF9uKGRhdGE6IHNjX2VuZF90ZXhfbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLXNjX2VuZF90ZXhfbi0tLVwiLCBkYXRhKTtcbiAgICAgICAgdGhpcy5Nb2RlbC5pZDJrZWVwID0gW107XG4gICAgICAgIHRoaXMuTW9kZWwuaXNHYW1pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5Nb2RlbC5pc1R1cm5PdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuTW9kZWwuaXNpbnN1cmFuY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5Nb2RlbC5pc3NlbGZvbnRhYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLk1vZGVsLl9zY2FyZHMgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuX3NjYXJkcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuUGxheWluZ1VzZXJzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuQmlnU21hbGxQbGF5aW5nVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmluc0xpc3QzMSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmluc0xpc3QzMiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLl9DdXJUdXJuQ291bnQgPSAwOyAvL+avj+S4gOWwj+WxgOe7k+adn+S6hu+8jOiusOW9leW9k+WJjeeahHR1cm7kuLowXG4gICAgICAgICAgICB0aGlzLk1vZGVsLmVuZERlbGF5ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3Ll9iZnRhYmxlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBfdGVtcFVzZXIgPSB0aGlzLnZpZXcuX2JmdGFibGUudXNlckxpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0uc2VsZiA9PSB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKF90ZW1wVXNlciAhPSBudWxsICYmIF90ZW1wVXNlci5wbGF5ZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIF90ZW1wVXNlci51c2VySW5mbyAhPSBudWxsICYmIF90ZW1wVXNlci51c2VySW5mby5pc1cgIT0gMSAmJiBfdGVtcFVzZXIudXNlckluZm8uaXNXICE9IDJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLk1vZGVsLl9TaG91UGFpICE9IG51bGwpLy/oh6rlt7Hov5jlnKjmoYzlrZDkuIrlubbkuJTkuI3mmK/op4LkvJfmiJbljaDluqflsLHlvLrliLbmiZPlvIDoh6rlt7HnmoTmiYvniYxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuTW9kZWwuX1Nob3VQYWkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9wb2tlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIuc2VsZikgX3Bva2VyID0gdGhpcy5Nb2RlbC5fU2hvdVBhaVtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQ6IENhcmRSZWRiZXRDb21wID0gX3RlbXBVc2VyLkdldENhcmQoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZCA9PSBudWxsKSB7IGNvbnNvbGUubG9nKFwiZmV0YWwgZXJyb3I6IFNlbmRDYXJkIGlzIG51bGxcIik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBfdGVtcFVzZXIuU2V0Q2FyZFZhbF9wdWIoY2FyZCwgX3Bva2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WFiOWkhOeQhueOqeWutuemu+W8gOaVsOaNrlxuICAgICAgICAgICAgdGhpcy52aWV3LmRlYWxFbmRMZWF2ZURhdGEoZGF0YSk7XG4gICAgICAgICAgICAvL+WmguaenOWcqOWxleekuuWFrOeJjCzlhazniYzliqjnlLvkuYvlkI7lsZXnpLrnu5PnrpdcbiAgICAgICAgICAgIGxldCBkaXNDb3VudDogbnVtYmVyID0gdGhpcy5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggLSB0aGlzLnZpZXcuY3VyQ29tbW9uZENhcmRzLmxlbmd0aCA+PSAwID8gdGhpcy5Nb2RlbC5fQ29tbW9uQ2FyZC5sZW5ndGggLSB0aGlzLnZpZXcuY3VyQ29tbW9uZENhcmRzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICBsZXQgZGVsYXl5OiBudW1iZXIgPSBkaXNDb3VudCA8PSAwID8gMSA6ICgoZGlzQ291bnQgPj0gMyA/IDIgKiAoZGlzQ291bnQgLSAzKSArIDEuNSA6IDIgKiAoZGlzQ291bnQgLSAxKSArIDEpICsgMik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwi5Ymp5LiL5Y+R54mM5pWw77yaXCIrIHRoaXMuTW9kZWwuX0NvbW1vbkNhcmQubGVuZ3RoICtcIi1cIit0aGlzLnZpZXcuY3VyQ29tbW9uZENhcmRzLmxlbmd0aCtcIj1cIitkaXNDb3VudCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwi57uT5p2f5bu26L+f77yaXCIrZGVsYXl5KTtcbiAgICAgICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLkFkZFRpbWVyKGRlbGF5eSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLk1vZGVsLmlzR2FtaW5nKSByZXR1cm47Ly/kuIvlsYDlvIDlp4vlvZPliY3lsYDnmoTliqjnlLvov5jmsqHmiafooYzlroxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3ICE9IG51bGwgJiYgIXRoaXMudmlldy5faXNEZXN0b3J5KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2NfZW5kX3RleF9uKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuUGxheWluZ1VzZXJzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLkJpZ1NtYWxsUGxheWluZ1VzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuaW5zTGlzdDMxID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmluc0xpc3QzMiA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5fQ3VyVHVybkNvdW50ID0gMDsgLy/mr4/kuIDlsI/lsYDnu5PmnZ/kuobvvIzorrDlvZXlvZPliY3nmoR0dXJu5Li6MFxuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuZW5kRGVsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICAgICAgdGhpcy52aWV3LnNjX29wZW5wbGF5X3RleF9uKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpKfnu5Pnrpcg5pi+56S65ZCO6YCA5Ye65ri45oiPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgc2NfYmlnZW5kX3RleF9uKGRhdGE6IHNjX2JpZ2VuZF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5Nb2RlbC5pc1Nob3dQZXJzb25SZW1pbmQgPSB0cnVlO1xuICAgICAgICBpZiAoZGF0YS5iaWdlbmQuZ2Fpbmxpc3QgPT0gbnVsbCB8fCBkYXRhLmJpZ2VuZC5nYWlubGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5SZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy5zY19iaWdlbmRfdGV4X24oZGF0YSk7XG4gICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacieS6uuaOiee6v+S6hlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiZGF0YVwiPjwvcGFyYW0+XG4gICAgcHVibGljIHNjX2Rpc2Nvbm5lY3RfbihkYXRhOiBzY19kaXNjb25uZWN0X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5zY19kaXNjb25uZWN0X24oZGF0YSk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIFRleGFz5a6i5oi356uv6K+35rGCXG4gICAgcHVibGljIGNzX2F1dG9TaXREb3duX3RleChwb3M6IG51bWJlciwgY2x1YklkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBvcyA+IHRoaXMuTW9kZWwubWFuTnVtIHx8IHBvcyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDMwKSk7Ly/or6XkvY3nva7kuI3og73lnZDkuItcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzX3NpdGRvd25fdGV4KHBvcywgMCwgMSwgcGFzc3dvcmQsIGNsdWJJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX3NpdGRvd253YWl0dXBfdGV4X24oZGF0YTogc2Nfc2l0ZG93bndhaXR1cF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5SZW1vdmVVc2VyKGRhdGEudXNlci5weS51c2VyaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19zaXRkb3dud2FpdHVwX3RleF9uIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW4puWFpemHkeW4geeUs+ivt+WdkOS4i1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwibGV2ZWxpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidGFibGVpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicG9zXCI+5pyN5Yqh5Zmo55qEcG9zPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJnb2xkXCI+5bim5YWl6YeR5biBPC9wYXJhbT5cbiAgICBwdWJsaWMgY3Nfc2l0ZG93bl90ZXgocG9zOiBudW1iZXIsIGdvbGQ6IG51bWJlciwgaXNLZWVwOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmcsIGNsdWJpZHg6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiPT09PT095bim5YWl6YeR5biB55Sz6K+35Z2Q5LiLXCIpO1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX3NpdGRvd25fdGV4ID0gbmV3IGNzX3NpdGRvd25fdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LnBvcyA9IHBvcztcbiAgICAgICAgX2dldGxpc3QuZ29sZCA9IGdvbGQ7XG4gICAgICAgIF9nZXRsaXN0LmNsdWJpZHggPSBjbHViaWR4O1xuICAgICAgICBfZ2V0bGlzdC5pc2tlZXAgPSBpc0tlZXA7XG4gICAgICAgIF9nZXRsaXN0LnBhcyA9IFwiXCI7XG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBudWxsICYmIHBhc3N3b3JkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIF9nZXRsaXN0LnBhcyA9IHBhc3N3b3JkO1xuICAgICAgICB9XG4gICAgICAgIC8vIF9nZXRsaXN0LmxhdCA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwubG9jLmxhdDtcbiAgICAgICAgLy8gX2dldGxpc3QubG5nID0gQ29tbW9uX1NlY0N0ci5pbnN0YW5jZS5Nb2RlbC5sb2MubG5nO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3Nfc2l0ZG93bl90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19zaXRkb3duX3RleC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nfc2l0ZG93bl90ZXgoZGF0YTogc2Nfc2l0ZG93bl90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Nb2RlbC5jbHViaWQgPiAwICYmIHRoaXMuTW9kZWwuSXNTdXBwZXIpLy/kv7HkuZDpg6jluIHmiL/liLfmlrDkv7HkuZDpg6jluIFcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLk1vZGVsLmNnb2xkID0gZGF0YS51Z29sZDsvL+WdkOS4i+WIt+aWsOeOqeWutui6q+S4iueahOS/seS5kOmDqOW4gVxuICAgICAgICAgICAgICAgIC8vIHRoaXMudmlldy5VcGRhdGVTdXBlckNsdWIoKTtcbiAgICAgICAgICAgICAgICAvLyBDbHViVmlld0N0ci5pbnN0YW5jZS5VcGRhdGVDbHViSW5mb2Nnb2xkKHRoaXMuTW9kZWwuY3VyU0NsdWIuY2lkLCBkYXRhLnVnb2xkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19mcmVzaHBsYXllckluZm9TRCgpOyAvL+abtOaWsOeUqOaIt+mHkeW4gVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9Mb2JieVZpZXdDdHIuaW5zdGFuY2Uuc2NfZnJlc2hnb2xkX24oMiwgZGF0YS51Z29sZCk7ICAvL+WPquaYr+W4puWFpe+8jOS4jeWHj+WwkeeUqOaIt+i6q+S4iueahOmHkeW4ge+8jOS4jeabtOaWsCBcbiAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkID0gZGF0YS51Z29sZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1ODcpKTsvL+mHkeW4geW4puWFpeS4jeWcqOiMg+WbtOWGhVxuICAgICAgICAgICAgdGhpcy5Nb2RlbC5jZ29sZCA9IDA7XG4gICAgICAgICAgICB0aGlzLnZpZXcuU2hvd1VJVGFrZUdvbGRQYW5lbCh0cnVlLCAwLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg4KSk7Ly/msqHmnInlj6/nlKjnmoTnqbrkvY3lhaXluqdcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMykge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1ODkpKTsvL+aIv+mXtOW3suino+aVo1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC00KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5MCkpOy8v6K+l5L2N572u5bey57uP6KKr5Y2g55So77yM6K+36YCJ5oup5YW25LuW56m65L2NXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMTg1KSk7Ly/muLjmiI/njqnlrrbkurrmlbDlt7Lovr7orr7nva7kuIrpmZDkurrmlbDkuoZcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1OTEpKTsvL+Wvhueggei+k+WFpemUmeivr1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xMCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMTgpKTsvL+S4jeiDvemAieaLqeWFtuS7luS/seS5kOmDqFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNTgpKTsvL+S9oOWcqOivpeS/seS5kOmDqOW3sue7j+iiq+WGu+e7k1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xMikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyODQpKTsvL+S/seS5kOmDqOS6pOaUtuS4rVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xNSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1OTMpKTsvL+acgOWQjjXliIbpkp/kuI3og73lnZDkuItcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjczKSk7Ly/lt7Lnu5PnrpfvvIzkuI3lj6/lhaXluqdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOTkpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTk0KSk7Ly/ph5HluIHotoXov4fmnIDlpKfluKblhaVcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOTgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTcwKSk7Ly/lt7Lmo4DmtYvmiYvmnLrlrprkvY3kuo7lnKjluqfnjqnlrrbpmYTov5HvvIzor7fliY3lvoDlhbbku5bmiL/pl7TmuLjmiI9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOTcpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjMyKSk7Ly/lhaXmsaDnjofkuI3mu6HotrPlhaXluqfmnaHku7ZcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOTUpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkzKSk7Ly/mnIDlkI415YiG6ZKf5LiN6IO95Z2Q5LiLXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoZGF0YS5yZXN1bHQgKyBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Z2Q5LiL5aSx6LSl6LCD55So56uZ6LW3XG4gICAgICAgIHRoaXMuY3Nfc2l0ZG93bndhaXR1cF90ZXgoKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzY19zaXRkb3duX3RleF9uKGRhdGE6IHNjX3NpdGRvd25fdGV4X24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1zY19zaXRkb3duX3RleF9uLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVfVXNlckluZm9TaXREb3duKGRhdGEudXNlciwgZGF0YS5pZDJrZWVwLCAwKTtcbiAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLnZpZXcuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKGRhdGEudXNlci5weS51c2VyaWQpO1xuICAgICAgICAgICAgaWYgKF90ZW1wVXNlciAhPSBudWxsICYmIF90ZW1wVXNlci5zZWxmKS8v6Ieq5bex5Z2Q5LiL6ZyA6KaB5ZCn5bim5YWl55qE6YeR5biB6ZSB5a6a5Zyo5qGM5LiKXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8g6buY6K6k5byA5ZCv55qEIOS4jemcgOimgeaPkOekuuS6hlxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLk1vZGVsLm9wZW5wbGF5ICYmICF0aGlzLk1vZGVsLmlzb3BlbikvL+WmguaenOaYr+aIv+S4u+W8gOWQr+a4uOaIj+aIv+mXtO+8jOmcgOimgeaPkOekuueOqeWutumcgOimgeetieW+heaIv+S4u+W8gOWQr+aIv+mXtFxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNjQpKTsvL+etieW+heaIv+S4u+W8gOWQr+eJjOWxgFxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLlNldExvY2tHb2xkKE1hdGguZmxvb3IoZGF0YS51c2VyLnB5LmdvbGQpKTsvL+W4puWFpeeahOmHkeW4ge+8jOmUgeWumuWcqOeJjOahjFxuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwubVBsYXllck1vZGVsID0gZGF0YS51c2VyLnB5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTE1KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDEwKSk7Ly/mraTnirbmgIHkuI3og73mjaLluqdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtOTUpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkzKSk7Ly/mnIDlkI415YiG6ZKf5LiN6IO95Z2Q5LiLXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDExKSk7Ly/lnZDkuIvlpLHotKVcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnlLPor7flnZDkuIsg5LiN5bim5YWlIOaYvuekuuetieW+hSDljaDkvY3nlKggXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJwb3NcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImlza2VlcFwiPjwvcGFyYW0+XG4gICAgcHVibGljIGNzX3NpdGRvd253YWl0X3RleChwb3M6IG51bWJlciwgaXNrZWVwOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19zaXRkb3dud2FpdF90ZXggPSBuZXcgY3Nfc2l0ZG93bndhaXRfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LnBvcyA9IHBvcztcbiAgICAgICAgX2dldGxpc3QuaXNrZWVwID0gaXNrZWVwO1xuICAgICAgICAvLyBfZ2V0bGlzdC5sYXQgPSBDb21tb25fU2VjQ3RyLmluc3RhbmNlLk1vZGVsLmxvYy5sYXQ7XG4gICAgICAgIC8vIF9nZXRsaXN0LmxuZyA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwubG9jLmxuZztcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX3NpdGRvd253YWl0X3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3NpdGRvd253YWl0X3RleC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nfc2l0ZG93bndhaXRfdGV4KGRhdGE6IHNjX3NpdGRvd253YWl0X3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5XYWl0VG9UYWtlSW4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIumcgOimgeWkhOeQhumAu+i+kemZkOWItlwiKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg3KSk7Ly/ph5HluIHluKblhaXkuI3lnKjojIPlm7TlhoVcbiAgICAgICAgICAgIHRoaXMudmlldy5TaG93VUlUYWtlR29sZFBhbmVsKHRydWUsIDAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIumcgOimgeWkhOeQhumAu+i+kemZkOWItlwiKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg4KSk7Ly/msqHmnInlj6/nlKjnmoTnqbrkvY3lhaXluqdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMykge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIumcgOimgeWkhOeQhumAu+i+kemZkOWItlwiKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg5KSk7Ly/miL/pl7Tlt7Lop6PmlaNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1OTApKTsvL+ivpeS9jee9ruW3sue7j+iiq+WNoOeUqO+8jOivt+mAieaLqeWFtuS7luepuuS9jVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC04KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjE4NSkpOy8v5ri45oiP546p5a625Lq65pWw5bey6L6+6K6+572u5LiK6ZmQ5Lq65pWw5LqGXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTkpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkxKSk7Ly/lr4bnoIHovpPlhaXplJnor69cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTApIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkyKSk7Ly/pnIDopoHph43mlrDluKblhaVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTUpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkzKSk7Ly/mnIDlkI415YiG6ZKf5LiN6IO95Z2Q5LiLXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTE4KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjI3MykpOy8v5bey57uT566X77yM5LiN5Y+v5YWl5bqnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk5KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5NCkpOy8v6YeR5biB6LaF6L+H5pyA5aSn5bim5YWlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk4KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU3MCkpOy8v5bey5qOA5rWL5omL5py65a6a5L2N5LqO5Zyo5bqn546p5a626ZmE6L+R77yM6K+35YmN5b6A5YW25LuW5oi/6Ze05ri45oiPXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk3KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjIzMikpOy8v5YWl5rGg546H5LiN5ruh6Laz5YWl5bqn5p2h5Lu2XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk1KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5MykpOy8v5pyA5ZCONeWIhumSn+S4jeiDveWdkOS4i1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2Nfc2l0ZG93bndhaXRfdGV4IGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+WdkOS4i+Wksei0peiwg+eUqOermei1t1xuICAgICAgICB0aGlzLmNzX3NpdGRvd253YWl0dXBfdGV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX3JlZnJlc2hiYWxhbmNlX3RleF9uKGRhdGE6IHNjX3JlZnJlc2hiYWxhbmNlX3RleF9uKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwuY2x1YmlkID4gMCAmJiB0aGlzLk1vZGVsLklzU3VwcGVyKS8v5L+x5LmQ6YOo5biB5oi/5Yi35paw5L+x5LmQ6YOo5biBXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5jZ29sZCA9IE1hdGguZmxvb3IoZGF0YS5nb2xkKTsvL+WdkOS4i+WIt+aWsOeOqeWutui6q+S4iueahOS/seS5kOmDqOW4gSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHRoaXMudmlldy5VcGRhdGVTdXBlckNsdWIoKTtcbiAgICAgICAgICAgICAgICAvLyBDbHViVmlld0N0ci5pbnN0YW5jZS5VcGRhdGVDbHViSW5mb2Nnb2xkKHRoaXMuTW9kZWwuY3VyU0NsdWIuY2lkLCBkYXRhLmdvbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2ZyZXNocGxheWVySW5mb1NEKCk7IC8v5pu05paw55So5oi36YeR5biBXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5sb2NrZ29sZCA+IDApLy/njqnlrrbnq5notbfml7blgJnvvIzluKblhaXooqvlkIzmhI/vvIzliLfmlrDplIHlrprph5Hpop1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLlNldExvY2tHb2xkKE1hdGguZmxvb3IoZGF0YS5sb2NrZ29sZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfcmVmcmVzaGJhbGFuY2VfdGV4X24gZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzY19zaXRkb3dud2FpdF90ZXhfbihkYXRhOiBzY19zaXRkb3dud2FpdF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlX1VzZXJJbmZvU2l0RG93bihkYXRhLnVzZXIsIGRhdGEuaWQya2VlcCwgZGF0YS5hdGltZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGRhdGEudXNlci5weS51c2VyaWQgPT0gQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCAmJiBkYXRhLmF0aW1lIDw9IDApLy/lvZPliY3ljaDluqfkuI3mmK/luKblhaXor7fmsYLnmoTml7blgJnopoHlvLnlh7rluKblhaXpnaLmnb9cbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy52aWV3LldhaXRUb1Rha2VJbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2Nfc2l0ZG93bndhaXRfdGV4X24gZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjc19zaXRkb3dud2FpdHVwX3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0ID0gbmV3IGNzX3NpdGRvd253YWl0dXBfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19zaXRkb3dud2FpdHVwX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3NpdGRvd253YWl0dXBfdGV4LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19zaXRkb3dud2FpdHVwX3RleChkYXRhOiBzY19zaXRkb3dud2FpdHVwX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcblxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC00KSB7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoNTAzNCkpOy8v5bey57uP56a75qGMXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19zaXRkb3dud2FpdHVwX3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2FncmVlaW50b2dvbGRfdGV4X24oZGF0YTogc2NfYWdyZWVpbnRvZ29sZF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5SZW1vdmVVc2VyKGRhdGEudHVzZXJpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19hZ3JlZWludG9nb2xkX3RleF9uIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBjc19hZGRnb2xkaW5nYW1lX3RleChnb2xkOiBudW1iZXIsIGNsdWJpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX2FkZGdvbGRpbmdhbWVfdGV4ID0gbmV3IGNzX2FkZGdvbGRpbmdhbWVfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmdvbGQgPSBnb2xkO1xuICAgICAgICBfZ2V0bGlzdC5jbHViaWR4ID0gY2x1YmlkeDtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2FkZGdvbGRpbmdhbWVfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfYWRkZ29sZGluZ2FtZV90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2NfYWRkZ29sZGluZ2FtZV90ZXgoZGF0YTogc2NfYWRkZ29sZGluZ2FtZV90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICAvLyBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZnJlc2hwbGF5ZXJJbmZvU0QgKCk7IC8v5Yi35paw55So5oi36YeR5biBXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5BZGRHb2xkRmFpbCgpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1OTUpKTsvL+S9memineS9juS6juacgOS9juihpeWFhe+8jOivt+WFheWAvFxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5TaG93VUlBZGRHb2xkUGFuZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5NikpOy8v5Y+q6IO96KGl5YWF5LiA5qyhXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC05OSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTk3KSk7Ly/ooaXlhYXorrDliIbotoXov4fkuIrpmZBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyMjUpKTsvL+ihpeWFheeahOS/seS5kOmDqOW/hemhu+aYr+W4puWFpeeahOS/seS5kOmDqFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19hZGRnb2xkaW5nYW1lX3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNzX3JlZnJlc2hiYWxhbmNlX2NsdWIoY2x1YmlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19yZWZyZXNoYmFsYW5jZV9jbHViID0gbmV3IGNzX3JlZnJlc2hiYWxhbmNlX2NsdWIoKTtcbiAgICAgICAgX2dldGxpc3QuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgX2dldGxpc3QuY2x1YmlkID0gY2x1YmlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfcmVmcmVzaGJhbGFuY2VfY2x1YlwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3JlZnJlc2hiYWxhbmNlX2NsdWIuYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX3JlZnJlc2hiYWxhbmNlX2NsdWIoZGF0YTogc2NfcmVmcmVzaGJhbGFuY2VfY2x1Yikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuY2dvbGQgPSBNYXRoLmZsb29yKGRhdGEuZ29sZCk7Ly/liLfmlrDnjqnlrrbouqvkuIrnmoTkv7HkuZDpg6jluIFcbiAgICAgICAgICAgIHRoaXMudmlldy5SZWZyZXNoVGFrZUluUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE5ODkpKTsvL+S/seS5kOmDqOS4jeWtmOWcqFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfcmVmcmVzaGJhbGFuY2VfY2x1YiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yi35paw55So5oi35L+h5oGvXG4gICAgcHVibGljIGNzX2ZyZXNocGxheWVySW5mb1NEKCkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2ZyZXNocGxheWVySW5mb1NEKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfZnJlc2hwbGF5ZXJJbmZvU0RcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZnJlc2hwbGF5ZXJJbmZvU0QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19mcmVzaHBsYXllckluZm9TRChkYXRhOiBzY19mcmVzaHBsYXllckluZm9TRCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMzYpKTsvL+mHkeW4geWIt+aWsOaIkOWKn1xuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgPSBkYXRhLnVzZXIuZ29sZDtcbiAgICAgICAgICAgIHRoaXMudmlldy5Jc0NhbkFkZEdvbGQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuaXNTaG93QWRkR29sZFBhbmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LlNob3dVSUFkZEdvbGRQYW5lbCgpOyAvLyDooaXlhYXorqHliIZcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LlNob3dVSVRha2VHb2xkUGFuZWwodHJ1ZSwgMCwgdHJ1ZSwgdHJ1ZSk7IC8vIOW4puWFpeiuoeWIhlxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWHhuWkh1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiX2dhbWVpZFwiPua4uOaIj0lEPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJsZXZlbGlkXCI+IDwvcGFyYW0+XG4gICAgcHVibGljIGNzX3JlYWR5X3RleChsZXZlbGlkOiBudW1iZXIsIHRhYmxlaWQ6IG51bWJlciwgcG9zOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19yZWFkeV90ZXggPSBuZXcgY3NfcmVhZHlfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSBsZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGFibGVpZDtcbiAgICAgICAgX2dldGxpc3QucG9zID0gcG9zO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfcmVhZHlfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfcmVhZHlfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19yZWFkeV90ZXgoZGF0YTogc2NfcmVhZHlfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX3JlYWR5X3RleChkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX3JlYWR5X3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIvms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImxldmVsaWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInRhYmxlaWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIm1vbmV5XCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJhZGRyYXRlXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgY3NfZ2FtYmxlX3RleChtb25leTogbnVtYmVyLCBhZGRyYXRlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfZ2FtYmxlX3RleCA9IG5ldyBjc19nYW1ibGVfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0Lm1vbmV5ID0gbW9uZXk7XG4gICAgICAgIF9nZXRsaXN0LmFkZHJhdGUgPSBhZGRyYXRlO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfZ2FtYmxlX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2dhbWJsZV90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2dhbWJsZV90ZXgoZGF0YTogc2NfZ2FtYmxlX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5zY19nYW1ibGVfdGV4KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKGRhdGEucmVzdWx0ICsgXCIgc2NfZ2FtYmxlX3RleCBlcnJvciBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW8g+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwibGV2ZWxpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidGFibGVpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicG9zXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgY3NfZ2l2ZXVwX3RleChwb3M6IG51bWJlcikge1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX2dpdmV1cF90ZXggPSBuZXcgY3NfZ2l2ZXVwX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5wb3MgPSBwb3M7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19naXZldXBfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfZ2l2ZXVwX3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfZ2l2ZXVwX3RleChkYXRhOiBzY19naXZldXBfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX2dpdmV1cF90ZXgoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoZGF0YS5yZXN1bHQgKyBcIiBnaXZldXAgZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv53pmanmqKHlvI8g6YCJ5oup57uT5p2f6K+35rGCXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJsZXZlbGlkXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0YWJsZWlkXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJwb3NcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImluc1wiPjwvcGFyYW0+XG4gICAgcHVibGljIGNzX2luc3VyYW5jZV90ZXgocG9zOiBudW1iZXIsIGluczogbnVtYmVyLCBpbnMzMjogbnVtYmVyLCBvdXRzOiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX2luc3VyYW5jZV90ZXggPSBuZXcgY3NfaW5zdXJhbmNlX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5wb3MgPSBwb3M7XG4gICAgICAgIF9nZXRsaXN0LmlucyA9IGlucztcbiAgICAgICAgX2dldGxpc3Qub3V0cyA9IG91dHM7XG4gICAgICAgIF9nZXRsaXN0LmluczMyID0gaW5zMzI7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocG9zICsgXCI9PeaKleS/neS4u+axoO+8mlwiICsgaW5zICsgXCIs5oqV5L+d5YiG5rGg77yaXCIgKyBpbnMzMiArIFwiLOaKleS/nW91dHPvvJogXCIgKyBvdXRzKTtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2luc3VyYW5jZV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19pbnN1cmFuY2VfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19pbnN1cmFuY2VfdGV4KGRhdGE6IHNjX2luc3VyYW5jZV90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NfaW5zdXJhbmNlX3RleChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1MTApKTsvL+i0reS5sOi2heaXtlxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0zKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTUxMSkpOy8v5oqV5L+d6aKd5LiN5q2j56GuXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTEyKSk7Ly/ph5HluIHkuI3lpJ9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChkYXRhLnJlc3VsdCArIFwiXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YCa55+l5omA5pyJ5Lq677yM6LSt5Lmw5L+d6ZmpICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBzY19pbnN1cmFuY2VfdGV4X24oZGF0YTogc2NfaW5zdXJhbmNlX3RleF9uKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX2luc3VyYW5jZV90ZXhfbihkYXRhLnBvcywgZGF0YS5pbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKGRhdGEucmVzdWx0ICsgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gICDop6PmlaPmuLjmiI9cblxuICAgIHB1YmxpYyBjc19kaXNtaXNzdGFibGVfdGV4KF9jYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuTW9kZWwubGV2ZWxpZCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNzX2FwcGx5ZXhpdHRhYmxlX3RleC4uTW9kZWwubGV2ZWxpZCA9PSAwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfZGlzbWlzc3RhYmxlX3RleCA9IG5ldyBjc19kaXNtaXNzdGFibGVfdGV4KCk7XG4gICAgICAgIHRoaXMuZGlzbWlzc3RhYmxlQ2FsbEJhY2sgPSBfY2FsbGJhY2s7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19kaXNtaXNzdGFibGVfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfZGlzbWlzc3RhYmxlX3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc21pc3N0YWJsZUNhbGxCYWNrOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBwdWJsaWMgc2NfZGlzbWlzc3RhYmxlX3RleChkYXRhOiBzY19kaXNtaXNzdGFibGVfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwuaXNHYW1pbmcpIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjcwKSk7Ly/mraTlsYDnu5PmnZ/lkI7miL/pl7TlsIboh6rliqjop6PmlaNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1MTMpKTsvL+a4uOaIj+S4reS4jeiDvemAgOWHuua4uOaIj++8gVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoNTAwNCkpOy8v5LiN5piv5oi/5Li7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBFeGl0VGFibGUoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnZpZXcgIT0gbnVsbCAmJiB0aGlzLnZpZXcuUm9vdE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcuaGVscFNldHRpbmdDb21wLkV4aXRUYWJsZSAoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwcml2YXRlIGFwcGx5ZXhpdHRhYmxlQ2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwdWJsaWMgY3NfYXBwbHlleGl0dGFibGVfdGV4KF9jYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuTW9kZWwubGV2ZWxpZCA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNzX2FwcGx5ZXhpdHRhYmxlX3RleC4uTW9kZWwubGV2ZWxpZCA9PSAwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfYXBwbHlleGl0dGFibGVfdGV4ID0gbmV3IGNzX2FwcGx5ZXhpdHRhYmxlX3RleCgpO1xuICAgICAgICB0aGlzLmFwcGx5ZXhpdHRhYmxlQ2FsbEJhY2sgPSBfY2FsbGJhY2s7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LnBvcyA9IHRoaXMuTW9kZWwuX3Bvc1NlcnZlcjtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2FwcGx5ZXhpdHRhYmxlX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2FwcGx5ZXhpdHRhYmxlLmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuXG4gICAgfVxuICAgIHB1YmxpYyBzY19hcHBseWV4aXR0YWJsZShkYXRhOiBzY19hcHBseWV4aXR0YWJsZV90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLlJlc2V0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBseWV4aXR0YWJsZUNhbGxCYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5ZXhpdHRhYmxlQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLmlzR2FtaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5pc3NlbGZvbnRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuRXhpdEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1MTMpKTsvL+a4uOaIj+S4reS4jeiDvemAgOWHuua4uOaIj++8gVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjI1MSkpOy8vYWxsaW7nirbmgIHkuIvkuI3og73nq5notbfmiJbogIXpgIDlh7pcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX2FwcGx5ZXhpdHRhYmxlX3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEFwcGx5RXhpdCgpIHsgLy/lj6rmnInkuIvkuIDmrKHlh4blpIfnlYzpnaLmiY3og73pgIDlh7pcbiAgICAgICAgaWYgKHRoaXMuTW9kZWwucGFseWVybGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jc19hcHBseWV4aXR0YWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1MTMpKTsvL+a4uOaIj+S4reS4jeiDvemAgOWHuua4uOaIj++8gVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6Kej5pWj5ri45oiPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY3NfYXBwbHlleGl0dGFibGUoKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfYXBwbHlleGl0dGFibGUgPSBuZXcgY3NfYXBwbHlleGl0dGFibGUoKTtcbiAgICAgICAgX2dldGxpc3QuZ2FtZWlkID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LnBvcyA9IHRoaXMuTW9kZWwuX3Bvc1NlcnZlcjtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2FwcGx5ZXhpdHRhYmxlXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfYXBwbHlleGl0dGFibGVfdGV4LmJpbmQodGhpcykpOy8vKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19hcHBseWV4aXR0YWJsZV90ZXgoZGF0YTogc2NfYXBwbHlleGl0dGFibGVfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfYXBwbHlleGl0dGFibGVfdGV4IGVycm9yIGNkb2U6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeUs+ivt+eVmeW6pyDkv53nlZk25YiG6ZKfXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY3Nfc2l0dXBrZWVwX3RleChpc0tlZXA6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19zaXR1cGtlZXBfdGV4ID0gbmV3IGNzX3NpdHVwa2VlcF90ZXgoKTtcbiAgICAgICAgX2dldGxpc3Qua2VlcCA9IGlzS2VlcDtcbiAgICAgICAgX2dldGxpc3QudGFibGVpZCA9IHRoaXMuTW9kZWwudGFibGVpZDtcbiAgICAgICAgX2dldGxpc3QubGV2ZWxpZCA9IHRoaXMuTW9kZWwubGV2ZWxpZDtcbiAgICAgICAgX2dldGxpc3QuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX3NpdHVwa2VlcF90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19zaXR1cGtlZXBfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2Nfc2l0dXBrZWVwX3RleChkYXRhOiBzY19zaXR1cGtlZXBfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5TZXRMb2NrR29sZChkYXRhLmxvY2tnb2xkKTtcbiAgICAgICAgICAgIC8v56uZ6LW35Zu06KeC6KaB5Yig6Zmk5pWw5o2uXG4gICAgICAgICAgICBpZiAoIWRhdGEua2VlcCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuX2JmdGFibGUubXlVc2VyLnBsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuU2V0VXNlckRhdGFfaXNXKHRoaXMudmlldy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLnVzZXJpZCwgMSk7IC8v5Y+Y5Li66KeC5LyXXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5SZW1vdmVVc2VyKHRoaXMudmlldy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNTApKTsvL+eUs+ivt+eVmeW6p+aIkOWKn1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjI1MSkpOy8vYWxsaW7nirbmgIHkuIvkuI3og73nq5notbfmiJbogIXpgIDlh7pcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMykge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNTQpKTsvL+S/nemZqeeKtuaAgeS4i+S4jeiDveermei1t1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGEua2VlcCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTk4KSk7Ly/nlLPor7fnlZnluqflpLHotKVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTk5KSk7Ly/nq5notbflm7Top4LlpLHotKUgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOe7k+eul+emu+ahjCDljY/orq5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBjc19hZHZhbmNlc2V0dGxlX3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19hZHZhbmNlc2V0dGxlX3RleCA9IG5ldyBjc19hZHZhbmNlc2V0dGxlX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfYWR2YW5jZXNldHRsZV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19hZHZhbmNlc2V0dGxlX3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfYWR2YW5jZXNldHRsZV90ZXgoZGF0YTogc2NfYWR2YW5jZXNldHRsZV90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLklzU2V0dGxlID0gZGF0YS5Jc1NldHRsZTtcbiAgICAgICAgICAgIHRoaXMudmlldy5oZWxwU2V0dGluZ0NvbXAuVXBkYXRlU3RhdGVKaWVzdWFuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjc0KSk7Ly/mnKrlj4LkuI7muLjmiI/kuI3og73nu5PnrpdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNzUpKTsvL2FsbGlu54q25oCB5LiN6IO957uT566XXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTMpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMjc2KSk7Ly/kv53pmannirbmgIHkuI3og73nu5PnrpdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNzgpKTsvL+W3sue7j+emu+ahjOe7k+eul1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfYWR2YW5jZXNldHRsZV90ZXggZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YCa55+l6L+Z5qGM5pyJ5Lq6IOeUs+ivt+ino+aVo+a4uOaIjyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzY19hcHBseWV4aXR0YWJsZV90ZXhfbihkYXRhOiBzY19hcHBseWV4aXR0YWJsZV90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHsgLy/lpoLmnpwg5piv6Ieq5bex5LiN55So5aSE55CGXG4gICAgICAgICAgICBpZiAoZGF0YS5wb3MgPT0gdGhpcy5Nb2RlbC5fcG9zU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7Ly/mm7TmlrDotbDmjonnmoTkurrkvY3nva4gXG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5SZW1vdmVQbGF5ZXJMaXN0KGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2NfZW50ZXJ0YWJsZV90ZXhhc19uKHRoaXMuTW9kZWwucGFseWVybGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6YCA5Ye65oi/6Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgc2Nfb25lX2V4aXR0YWJsZV9uKGRhdGE6IHNjX29uZV9leGl0dGFibGVfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIC8vIGlmIChkYXRhLnBvcyA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5wb3MgPT0gdGhpcy5Nb2RlbC5fcG9zU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuQWRkVGltZXIoMC4xLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRXhpdEdhbWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8v5pu05paw6LWw5o6J55qE5Lq65L2N572uIFxuICAgICAgICAgICAgICAgIGxldCB1c2VyOiBPdGhlclVzZXJJbmZvU0QgPSB0aGlzLk1vZGVsLkdldFVzZXJJbmZvKGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pc0sgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v55WZ5bqnXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlzSyA9IGRhdGEuaXNLO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0vvvJpcIiArIHVzZXIuaXNLKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5TZXRVc2VyRm9yS2VlcFNlYXRfbihkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjX29uZV9leGl0dGFibGVfbiA6IOmcgOimgeemu+W8gOaIv+mXtOeahOS6uuWRmOS4jeWtmOWcqCB1c2VySWQ6XCIgKyBkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuaXNLID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy/kuI3lpITnkIZcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+ecn+ato+emu+W8gOaIv+mXtO+8jOWIoOmZpOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuVXBkYXRlUmVtb3ZlVXNlcihkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi55yf5q2j56a75byA5oi/6Ze077yM5Yig6Zmk5pWw5o2uXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZXcuUmVtb3ZlVXNlcihkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDE1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKGRhdGEucG9zID09IDMpIHsgICAvL+ermei1t+WbtOinglxuICAgICAgICAgICAgLy8gICAgIGxldCB1c2VyOiBPdGhlclVzZXJJbmZvU0QgPSB0aGlzLk1vZGVsLkdldFVzZXJJbmZvKGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoZGF0YS5pc0sgPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmICh1c2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8v55WZ5bqnXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB1c2VyLmlzSyA9IGRhdGEuaXNLO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy52aWV3LlNldFVzZXJGb3JLZWVwU2VhdF9uKGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nfb25lX2V4aXR0YWJsZV9uIDog6ZyA6KaB56a75byA5oi/6Ze055qE5Lq65ZGY5LiN5a2Y5ZyoIHVzZXJJZDpcIiArIGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoZGF0YS5pc0sgPT0gMCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAvL+S4jeWkhOeQhlxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy/nnJ/mraPnprvlvIDmiL/pl7TvvIzliKDpmaTmlbDmja5cbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy52aWV3LlJlbW92ZVVzZXIoZGF0YS51c2VyaWQpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTE0KSk7Ly/pgIDlh7rmiL/pl7TlpLHotKXvvIzpnZ7ms5XnmoTmk43kvZxcbiAgICAgICAgfVxuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2Nfc2l0dXBrZWVwX3RleF9uKGRhdGE6IHNjX3NpdHVwa2VlcF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIC8v56uZ6LW35Zu06KeCXG4gICAgICAgICAgICBsZXQgdXNlcjogT3RoZXJVc2VySW5mb1NEID0gdGhpcy5Nb2RlbC5HZXRVc2VySW5mbyhkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pc0sgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL+eVmeW6p1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmlzSyA9IGRhdGEuaXNLO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuU2V0VXNlckZvcktlZXBTZWF0X24oZGF0YS51c2VyaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nfb25lX2V4aXR0YWJsZV9uIDog6ZyA6KaB56a75byA5oi/6Ze055qE5Lq65ZGY5LiN5a2Y5ZyoIHVzZXJJZDpcIiArIGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuU2V0VXNlckRhdGFfaXNXKGRhdGEudXNlcmlkLCAxKTsgLy/lj5jkuLrop4LkvJdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlldy5fYmZ0YWJsZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGVtcFVzZXI6IFRleGFzVXNlckNvbXAgPSB0aGlzLnZpZXcuX2JmdGFibGUuR2V0VXNlckJ5VXNlcklkKGRhdGEudXNlcmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90ZW1wVXNlciAhPSBudWxsICYmIF90ZW1wVXNlci5zZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iHquW3seWNoOW6p+aXtuWAmeiiq+W8uuWItuermei1t+imgeWFs+mXreW4puWFpemdouadv1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LkhpZGVVSVRha2VHb2xkUGFuZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuUmVtb3ZlVXNlcihkYXRhLnVzZXJpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2Nfc2l0dXBrZWVwX3RleF9uIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gIOmdnua4uOaIj+mAu+i+keWKn+iDvSBcbiAgICBwdWJsaWMgbm90aWZ5UGxheVZvaWNlKHBvczogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyAhPSBudWxsKS8vICYmIHRoaXMudmlldy5Sb290T2JqZWN0ICE9IG51bGwpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuU2hvd1ZvaWNlKHBvcywgY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZVVzZXJTdGF0ZSh1c2VySWQ6IG51bWJlciwga2VlcFRpbWU6IG51bWJlciwgZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgIT0gbnVsbCkvLyAmJiB0aGlzLnZpZXcuUm9vdE9iamVjdCAhPSBudWxsKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aWV3LlVwZGF0ZVVzZXJTdGF0ZSh1c2VySWQsIGtlZXBUaW1lLCBnb2xkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgU2hvd1NlbGZFbmRUaW1lKGNkVGltZSA9IDE1LCB0b3RhbFRpbWUgPSAxNSwgaXNTaG93VGV4dCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyAhPSBudWxsKS8vICYmIHRoaXMudmlldy5Sb290T2JqZWN0ICE9IG51bGwpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuU2hvd0Nsb2NrKGNkVGltZSwgdG90YWxUaW1lLCBpc1Nob3dUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgU3RvcFNlbGZFbmRUaW1lKCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ICE9IG51bGwpLy8gJiYgdGhpcy52aWV3LlJvb3RPYmplY3QgIT0gbnVsbCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5TdG9wQ2xvY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeJjOWxgOWbnumhvlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwibGV2ZWxpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidGFibGVpZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicG9zXCI+PC9wYXJhbT5cbiAgICBwdWJsaWMgY3NfZW50ZXJyb2JvdF90ZXgoKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfZW50ZXJyb2JvdF90ZXggPSBuZXcgY3NfZW50ZXJyb2JvdF90ZXgoKTtcbiAgICAgICAgX2dldGxpc3QuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgX2dldGxpc3QubGV2ZWxpZCA9IHRoaXMuTW9kZWwubGV2ZWxpZDtcbiAgICAgICAgX2dldGxpc3QudGFibGVpZCA9IHRoaXMuTW9kZWwudGFibGVpZDtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2VudGVycm9ib3RfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfZW50ZXJyb2JvdF90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgLy8g54mM5bGA5Zue6aG+57uT5p6cXG5cbiAgICBwdWJsaWMgc2NfZW50ZXJyb2JvdF90ZXgoZGF0YTogc2NfZW50ZXJyb2JvdF90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG5cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1ODcpKTsvL+mHkeW4geW4puWFpeS4jeWcqOiMg+WbtOWGhVxuICAgICAgICAgICAgLy90aGlzLnZpZXcuU2hvd1VJVGFrZUdvbGRQYW5lbCh0cnVlLCAwLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTg4KSk7Ly/msqHmnInlj6/nlKjnmoTnqbrkvY3lhaXluqdcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMykge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE1ODkpKTsvL+aIv+mXtOW3suino+aVo1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC00KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5MCkpOy8v6K+l5L2N572u5bey57uP6KKr5Y2g55So77yM6K+36YCJ5oup5YW25LuW56m65L2NXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTkpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkxKSk7Ly/lr4bnoIHovpPlhaXplJnor69cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTApIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkyKSk7Ly/pnIDopoHph43mlrDluKblhaVcbiAgICAgICAgICAgIC8v6ZyA6KaB6YeN5paw5bim5YWl77yM5omT5byA6YeR5biB5bim5YWl6Z2i5p2/IHRoaXMudmlldy5TaG93VUlUYWtlR29sZFBhbmVsKHRydWUsIHRoaXMudmlldy5wb3NTaXQsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTUpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNTkzKSk7Ly/mnIDlkI415YiG6ZKf5LiN6IO95Z2Q5LiLXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk5KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU5NCkpOy8v6YeR5biB6LaF6L+H5pyA5aSn5bim5YWlXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk4KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU3MCkpOy8v5bey5qOA5rWL5omL5py65a6a5L2N5LqO5Zyo5bqn546p5a626ZmE6L+R77yM6K+35YmN5b6A5YW25LuW5oi/6Ze05ri45oiPXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19lbnRlcnJvYm90X3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDniYzlsYDlm57pob5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImxldmVsaWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInRhYmxlaWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInBvc1wiPjwvcGFyYW0+XG4gICAgcHVibGljIGNzX3RoaXN0b3J5X3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc190aGlzdG9yeV90ZXggPSBuZXcgY3NfdGhpc3RvcnlfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc190aGlzdG9yeV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY190aGlzdG9yeV90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgLy8g54mM5bGA5Zue6aG+57uT5p6cIFxuICAgIHB1YmxpYyBzY190aGlzdG9yeV90ZXgoZGF0YTogc2NfdGhpc3RvcnlfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLniYzlsYDlm57pob7nu5PmnpxcIik7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlVwZGF0ZUhpc3RvcnlWaWV3X2RhdGEoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY190aGlzdG9yeV90ZXggZXJyb3IgY29kZTpcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v54mM5bGA5Zue6aG+77yM5aSn57uT566X5ZCOXG4gICAgcHVibGljIGNzX3Jvb21oaXN0b3J5X3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19yb29taGlzdG9yeV90ZXggPSBuZXcgY3Nfcm9vbWhpc3RvcnlfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19yb29taGlzdG9yeV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19yb29taGlzdG9yeV90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX3Jvb21oaXN0b3J5X3RleChkYXRhOiBzY19yb29taGlzdG9yeV90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlVwZGF0ZUhpc3RvcnlWaWV3X2RhdGEyKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfdGhpc3RvcnlfdGV4IGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd0hpc3RvcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlNob3dIaXN0b3J5KCk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93SGlzdG9yeV9iaWdlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlNob3dIaXN0b3J5X2JpZ2VuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgVXBkYXRlSGlzdG9yeVZpZXcodWxpc3Q6IFBJbmZvU0RbXSwgTHR1bGlzdDogVGV4VEluZm9TRFtdLCBkOiBudW1iZXIsIFNob3dDYXJkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5VcGRhdGVIaXN0b3J5Vmlld19wdG5uKHVsaXN0LCBMdHVsaXN0LCBkLCBTaG93Q2FyZCk7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pS26JeP5Y2V5bGA54mM5Y2P6K6uXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY3NfdGV4YXNjb2xsZWN0X3RleCh0eXBlOiBudW1iZXIsIGluZm9JZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfdGV4YXNjb2xsZWN0X3RleCA9IG5ldyBjc190ZXhhc2NvbGxlY3RfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LnR5cGUgPSB0eXBlO1xuICAgICAgICBfZ2V0bGlzdC5pbmZvSWQgPSBpbmZvSWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc190ZXhhc2NvbGxlY3RfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfdGV4YXNjb2xsZWN0X3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfdGV4YXNjb2xsZWN0X3RleChkYXRhOiBzY190ZXhhc2NvbGxlY3RfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgLy8gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2dleW15dGV4YXNjb2xsZWN0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LlVwZGF0ZUNvbGxlY3REYXRhKGRhdGEuc2F2YU51bSwgZGF0YS5pbmZvSWQsIGRhdGEuSXNTYXZhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIxODMpKTsvL+aUtuiXj+WIsOi+vuS4iumZkFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfdGV4YXNjb2xsZWN0X3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5oiY57up55Sz6K+3IFxuICAgIHB1YmxpYyBjc19nZXRnYWluX3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19nZXRnYWluX3RleCA9IG5ldyBjc19nZXRnYWluX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfZ2V0Z2Fpbl90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19nZXRnYWluX3RleC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyDmiJjnu6nov5Tlm57nu5PmnpwgXG4gICAgcHVibGljIHNjX2dldGdhaW5fdGV4KGRhdGE6IHNjX2dldGdhaW5fdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIua4uOaIj+WGheivt+axguaImOe7qeS/oeaBr+i/lOWbnlwiKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuVXBkYXRlUmVjb3JkVmlldyhkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcImNzX2dldGdhaW5fdGV4IGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3Nfc2hvd215Y2FyZF90ZXgoY2FyZFBvczogbnVtYmVyLCB0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19zaG93bXljYXJkX3RleCA9IG5ldyBjc19zaG93bXljYXJkX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5jYXJkID0gY2FyZFBvcztcbiAgICAgICAgX2dldGxpc3QudHlwZSA9IHR5cGU7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19zaG93bXljYXJkX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3Nob3dteWNhcmRfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19zaG93bXljYXJkX3RleChkYXRhOiBzY19zaG93bXljYXJkX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIC8v5bGV56S66Ieq5bex55qE54mM56eA54mM54q25oCBXG4gICAgICAgICAgICB0aGlzLnZpZXcuU2hvd015Q2FyZFN0YXR1cyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzY19zaG93bXljYXJkX3RleF9uKGRhdGE6IHNjX3Nob3dteWNhcmRfdGV4X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG5cbiAgICB9XG5cbiAgICAvLyDnlLPor7fliIbniYzlu7bov58gXG4gICAgcHVibGljIGNzX2RlbGF5X3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19kZWxheV90ZXggPSBuZXcgY3NfZGVsYXlfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19kZWxheV90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19kZWxheV90ZXguYmluZCh0aGlzKSk7Ly8oKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzY19kZWxheV90ZXgoZGF0YTogc2NfZGVsYXlfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjX2RlbGF5X3RleChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDUwNTApKTsvL+i2heWHujXmrKHlu7bov59cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE2MDEpKTsvL+mHkeW4geS4jei2s1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE2MDApKTsvL+eUs+ivt+W7tui/n+Wksei0pVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2NfZGVsYXlfdGV4X24oZGF0YTogc2NfZGVsYXlfdGV4X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5zY19kZWxheV90ZXhfbihkYXRhKTtcblxuICAgIH1cblxuXG4gICAgLy8gcHVibGljIHNjX2NoYXRsb2cgKGRhdGE6c2NfY2hhdGxvZykge1xuICAgIC8vIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgIC8vIHRoaXMudmlldy5zY19jaGF0bG9nIChkYXRhKTtcbiAgICAvLyB9XG4gICAgcHVibGljIGNzX3RqYWNrcG90TG9nKCkge1xuICAgICAgICAvLyBsZXQgX2dldGxpc3Q6Y3NfdGphY2twb3RMb2cgPSBuZXcgY3NfdGphY2twb3RMb2cgKCk7XG4gICAgICAgIC8vIF9nZXRsaXN0LmdhbWVJZCA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICAvLyBfZ2V0bGlzdC5yb29tSWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIC8vIF9nZXRsaXN0LmZuID0gXCJjc190amFja3BvdExvZ1wiO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgc2NfdGphY2twb3RMb2cgKGRhdGE6c2NfdGphY2twb3RMb2cpIHtcbiAgICAvLyBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgIC8vICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAvLyAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIuWlluaxoOiusOW9leS/oeaBr+i/lOWbnlwiKTtcbiAgICAvLyAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5zY190amFja3BvdExvZyAoZGF0YSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsIChTdHJGaXhlZFNlcnZlclJlc3VsdC5HZXRTdHJpbmcgKGRhdGEucmVzdWx0KSk7XG4gICAgLy8gfSBcbiAgICAvLyB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi4ouS6uiAg5LuO5qGM5a2Q5LiKLOato+WcqOa4uOaIj+S4reS4jeiDvei4olxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBjc190aWNrdXNlcl90ZXgodWlkOiBudW1iZXIsIHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX3RpY2t1c2VyX3RleCA9IG5ldyBjc190aWNrdXNlcl90ZXgoKTtcbiAgICAgICAgX2dldGxpc3QuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgX2dldGxpc3QubGV2ZWxpZCA9IHRoaXMuTW9kZWwubGV2ZWxpZDtcbiAgICAgICAgX2dldGxpc3QudGFibGVpZCA9IHRoaXMuTW9kZWwudGFibGVpZDtcbiAgICAgICAgX2dldGxpc3QudWlkID0gdWlkO1xuICAgICAgICBfZ2V0bGlzdC50eXBlID0gdHlwZTtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX3RpY2t1c2VyX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3RpY2t1c2VyX3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfdGlja3VzZXJfdGV4KGRhdGE6IHNjX3RpY2t1c2VyX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjA4NCkpOy8v5pON5L2c5LiN5oiQ5YqfXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfdGlja3VzZXJfdGV4X24oZGF0YTogc2NfdGlja3VzZXJfdGV4X24pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3Ll9iZnRhYmxlLm15VXNlciAhPSBudWxsICYmIHRoaXMudmlldy5fYmZ0YWJsZS5teVVzZXIucGxheWVyICE9IG51bGwgJiYgZGF0YS5raWNrdWlkID09IHRoaXMudmlldy5fYmZ0YWJsZS5teVVzZXIucGxheWVyLnVzZXJpZCkvL+iiq+W8uuWItuermei1t+eahOeOqeWutuaYr+iHquW3seWIt+aWsOiiq+mUgeWumueahOmHkeW4gVxuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwuU2V0TG9ja0dvbGQoZGF0YS5sb2NrZ29sZCk7XG4gICAgICAgICAgICAvL+ermei1t+WbtOinguimgeWIoOmZpOaVsOaNrlxuICAgICAgICAgICAgbGV0IF90ZW1wVXNlcjogVGV4YXNVc2VyQ29tcCA9IHRoaXMudmlldy5fYmZ0YWJsZS5HZXRVc2VyQnlVc2VySWQoZGF0YS5raWNrdWlkKTtcbiAgICAgICAgICAgIGlmIChfdGVtcFVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFVzZXIuc2VsZikvL+iHquW3seWNoOW6p+aXtuWAmeiiq+W8uuWItuermei1t+imgeWFs+mXreW4puWFpemdouadv1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuSGlkZVVJVGFrZUdvbGRQYW5lbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5SZW1vdmVVc2VyKGRhdGEua2lja3VpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjc191c2VycmVtYXJrX3RleCh1aWQ6IG51bWJlciwgcm5hbWU6IHN0cmluZywgcFJlbWFyazogc3RyaW5nKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3NfdXNlcnJlbWFya190ZXggPSBuZXcgY3NfdXNlcnJlbWFya190ZXgoKTtcbiAgICAgICAgX2dldGxpc3QuX2cgPSB0aGlzLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgX2dldGxpc3QubGV2ZWxpZCA9IHRoaXMuTW9kZWwubGV2ZWxpZDtcbiAgICAgICAgX2dldGxpc3QudGFibGVpZCA9IHRoaXMuTW9kZWwudGFibGVpZDtcbiAgICAgICAgX2dldGxpc3Qucm5hbWUgPSBybmFtZTtcbiAgICAgICAgX2dldGxpc3QucFJlbWFyayA9IHBSZW1hcms7XG4gICAgICAgIF9nZXRsaXN0LnVpZCA9IHVpZDtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX3VzZXJyZW1hcmtfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfdXNlcnJlbWFya190ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX3VzZXJyZW1hcmtfdGV4KGRhdGE6IHNjX3VzZXJyZW1hcmtfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi5aSH5rOo5oiQ5YqfXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjA4NCkpOy8v5pON5L2c5LiN5oiQ5YqfXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfcmVmcmVzaHRhYmxldXNlcl9uKGRhdGE6IHNjX3JlZnJlc2h0YWJsZXVzZXJfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLlVyKSBkYXRhLnVzZXIucHkudXJlbWFyayA9IGRhdGEuVXI7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLkFkZFBsYXllckxpc3QoZGF0YS51c2VyKTtcbiAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVfVXNlckluZm8oZGF0YS51c2VyKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5VcGRhdGVVc2VySW5mbyhkYXRhLnVzZXIucHksIGRhdGEudXNlci5wb3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRleFF1ZXVlTWVzc2FnZXMuaW5zdGFuY2UuUmVtb3ZlRmlyc3RNZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVmcmVzaERlc2tCZ0FuZENhcmRCZygpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5SZWZyZXNoQ2FyZEltYWdlKCk7XG4gICAgICAgIHRoaXMudmlldy5SZWZyZXNoQ29tbW9uQ2FyZHMoKTtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIDova7lkI7mm7TmlrDmoYzpnaLkuIrnrbnnoIFcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBSZWZyZXNoVXNlckN1ckdhbWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMubW92ZU15R2FtYmxlVG9UYWJsZUdhbWVibGUoKTsgLy/mnInnrbnnoIHnp7vliqjnrbnnoIHliLDlpZbmsaBcbiAgICAgICAgdGhpcy52aWV3LlJlZnJlc2hVc2VyQ3VyR2FtYmxlKCk7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5LiA6L2u57uT5p2f5ZCO56e75Yqo562556CB5Yiw5aWW5rGgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbW92ZU15R2FtYmxlVG9UYWJsZUdhbWVibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcubW92ZU15R2FtYmxlVG9UYWJsZUdhbWVibGUoKTtcbiAgICB9XG5cbiAgICAvLyAg6I635Y+W5aWW5rGg5LiO6K+m5oOFIFxuICAgIHB1YmxpYyBjc19nZXRhbGxqYWNrcG90X3RleCgpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19nZXRhbGxqYWNrcG90X3RleCA9IG5ldyBjc19nZXRhbGxqYWNrcG90X3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfZ2V0YWxsamFja3BvdF90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19nZXRhbGxqYWNrcG90X3RleC5iaW5kKHRoaXMpKTsvLyAoKSA9PiB7IHJldHVybiB0cnVlOyB9KTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiOt+WPluWlluaxoOS4juivpuaDhSDov5Tlm55cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImRhdGFcIj48L3BhcmFtPlxuXG4gICAgcHVibGljIHNjX2dldGFsbGphY2twb3RfdGV4KGRhdGE6IHNjX2dldGFsbGphY2twb3RfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIuiOt+WPluWlluaxoOS4juivpuaDhei/lOWbnue7k+aenFwiKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5zY19nZXRhbGxqYWNrcG90X3RleChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX2dldGFsbGphY2twb3RfdGV4IGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5ri45oiP5YaF5oC75aWW5rGg5o6o6YCBXG4gICAgcHVibGljIHNjX2FsbGphY2twb3RfdGV4X24oZGF0YTogc2NfYWxsamFja3BvdF90ZXhfbikge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIC8vRGVidWcuTG9nRXJyb3IoXCLmuLjmiI/lhoXmgLvlpZbmsaDmjqjpgIE6XCIgKyBkYXRhLmFsbGphY2twb3QpO1xuICAgICAgICAgICAgdGhpcy52aWV3LlNldE1hbmdvT2ZUYWJsZShNYXRoLmZsb29yKGRhdGEuYWxsamFja3BvdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2NfYWxsamFja3BvdF90ZXhfbiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gICBcblxuICAgIHB1YmxpYyBjc19zZWVyZXN0Y2FyZF90ZXgoKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdDogY3Nfc2VlcmVzdGNhcmRfdGV4ID0gbmV3IGNzX3NlZXJlc3RjYXJkX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IHRoaXMuTW9kZWwuZ2FtZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3Nfc2VlcmVzdGNhcmRfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2Nfc2VlcmVzdGNhcmRfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cblxuICAgIC8vIOafpeeci+WFrOeJjOS9meeJjCDov5Tlm54gIFxuICAgIHB1YmxpYyBzY19zZWVyZXN0Y2FyZF90ZXgoZGF0YTogc2Nfc2VlcmVzdGNhcmRfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5fQ29tbW9uQ2FyZCA9IGRhdGEuY2FyZDtcbiAgICAgICAgICAgIHRoaXMudmlldy5TaG93UmVzdENvbW1vbkNhcmRzKGRhdGEuY2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNjAxKSk7Ly/pkrvnn7PkuI3otrNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIyNDQpKTsvL+aWsOeJjOWxgOW3sue7j+W8gOWni1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwic2Nfc2VlcmVzdGNhcmRfdGV4IGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNzX2ZvcmNlc2hvd2NhcmRfdGV4KCkge1xuICAgICAgICBsZXQgX2dldGxpc3Q6IGNzX2ZvcmNlc2hvd2NhcmRfdGV4ID0gbmV3IGNzX2ZvcmNlc2hvd2NhcmRfdGV4KCk7XG4gICAgICAgIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XG4gICAgICAgIF9nZXRsaXN0LnRhYmxlaWQgPSB0aGlzLk1vZGVsLnRhYmxlaWQ7XG4gICAgICAgIF9nZXRsaXN0Ll9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIF9nZXRsaXN0LmZuID0gXCJjc19mb3JjZXNob3djYXJkX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2ZvcmNlc2hvd2NhcmRfdGV4LmJpbmQodGhpcykpOy8vICgpID0+IHsgcmV0dXJuIHRydWU7IH0pO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5by65Yi256eA54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cblxuICAgIHB1YmxpYyBzY19mb3JjZXNob3djYXJkX3RleChkYXRhOiBzY19mb3JjZXNob3djYXJkX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwuZnNob3dudW0gPSBkYXRhLmZzaG93bnVtO1xuICAgICAgICAgICAgdGhpcy52aWV3LlNob3dDYXJkc0ZvcmNlKGRhdGEub3RoZXJjYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE2MDEpKTsvL+mSu+efs+S4jei2s1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMjI0NCkpOy8v5paw54mM5bGA5bey57uP5byA5aeLXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCJzY19mb3JjZXNob3djYXJkX3RleCBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNzX2dvbGRiYWNrX3RleChnb2xkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IF9nZXRsaXN0ID0gbmV3IGNzX2dvbGRiYWNrX3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IDUxO1xuICAgICAgICBfZ2V0bGlzdC5sZXZlbGlkID0gdGhpcy5Nb2RlbC5sZXZlbGlkO1xuICAgICAgICBfZ2V0bGlzdC50YWJsZWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICBfZ2V0bGlzdC5nb2xkID0gZ29sZDtcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX2dvbGRiYWNrX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2dvbGRiYWNrX3RleC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfZ29sZGJhY2tfdGV4KGRhdGE6IHNjX2dvbGRiYWNrX3RleCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgyMDEwKSkvL+eUs+ivt+aIkOWKn1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTU0NCkpOy8v5oi/6Ze05LiN5a2Y5ZyoXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMTMpKTsvL+WPr+WbnuaSpOeahOmHkemineS4jei2s1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0zKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDE0KSk7Ly/ku4XpmZBBT0bmqKHlvI/kvb/nlKhcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAzMSkpOy8v5LiN6IO96YeN5aSN55Sz6K+3IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2dvbGRiYWNrX3RleF9uKGRhdGE6IHNjX2dvbGRiYWNrX3RleF9uKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcuX2lzQ2FuT3V0R29sZCA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3Lk91dEFmdGVyVXBHb2xkKGRhdGEuVXNlcklkLCBkYXRhLmdvbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDEzKSk7Ly/lj6/lm57mkqTnmoTph5Hpop3kuI3otrNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChcInNjX2dvbGRiYWNrX3RleF9uIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHB1YmxpYyBzY19mcmVzaGdvbGRfbihkYXRhKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIH1cblxuICAgIC8v6LeR6ams54Gv5YWs5ZGKXG4gICAgLy8gcHVibGljIHNjX2dldG5vdGljZV9uKGRhdGE6IHNjX2dldG5vdGljZV9uKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCkgcmV0dXJuO1xuICAgIC8vICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgIC8vICAgICAgICAgZGF0YS5ub3RpY2VsaXN0LmZvckVhY2goKG5vdGljZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMudmlldy5icm9hZGNhc3QuYWRkTWVzc2FnZShub3RpY2UpO1xuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8v6K+35rGC5pu05paw5q+U6LWb5pWw5o2uXG4gICAgcHVibGljIGNzX2NvbXBldGVfdGFibGVfaW5mbygpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuivt+axguabtOaWsOavlOi1m+aVsOaNrlwiICsgdGhpcy5Nb2RlbC5jb21wZXRlaWQpO1xuICAgICAgICBpZiAodGhpcy5Nb2RlbC5jb21wZXRlaWQgPT0gMCkgcmV0dXJuO1xuICAgICAgICBsZXQgX2dldGxpc3QgPSBuZXcgY3NfY29tcGV0ZV90YWJsZV9pbmZvKCk7XG4gICAgICAgIF9nZXRsaXN0LmNvbXBldGVpZCA9IHRoaXMuTW9kZWwuY29tcGV0ZWlkO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfY29tcGV0ZV90YWJsZV9pbmZvXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oX2dldGxpc3QsIHRoaXMuc2NfY29tcGV0ZV90YWJsZV9pbmZvLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICAvL+avlOi1m+abtOaWsOaVsOaNrlxuICAgIHB1YmxpYyBzY19jb21wZXRlX3RhYmxlX2luZm8oZGF0YTogc2NfY29tcGV0ZV90YWJsZV9pbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcuVXBkYXRlTWF0Y2hEYXRhKGRhdGEpO1xuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuICAgIC8v5q+U6LWb5o6S5ZCNXG4gICAgcHVibGljIHNjX2NvbXBldGVfcmFua19pbmZvKGRhdGE6IHNjX2NvbXBldGVfcmFua19pbmZvKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcuVXBkYXRlTWF0Y2hSYW5rKGRhdGEpO1xuICAgICAgICAvLyBUZXhRdWV1ZU1lc3NhZ2VzLmluc3RhbmNlLlJlbW92ZUZpcnN0TWVzKCk7XG4gICAgfVxuICAgIC8v5q+U6LWb57uT5p2fXG4gICAgcHVibGljIHNjX2NvbXBldGVfYXdhcmRfaW5mbyhkYXRhOiBzY19jb21wZXRlX2F3YXJkX2luZm8pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5NYWN0aEVuZChkYXRhKTtcbiAgICAgICAgLy8gVGV4UXVldWVNZXNzYWdlcy5pbnN0YW5jZS5SZW1vdmVGaXJzdE1lcygpO1xuICAgIH1cblxuICAgIC8vI2VuZHJlZ2lvblxuICAgIHB1YmxpYyBVcGRhdGVUYWtlSW5UaXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcuVXBkYXRlVGFrZUluVGlwKCk7XG4gICAgfVxuICAgIHB1YmxpYyBTaG93T3BlblRpcChpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMudmlldy5TaG93T3BlblRpcChpc1Nob3cpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWxvYWREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5Nb2RlbC5jdXJNc2dJZCA9IDA7XG4gICAgICAgIHRoaXMudmlldy5Jbml0KCk7XG4gICAgfVxuXG5cbiAgICAvKirkuL7miqXmiaPotLkqL1xuICAgIHB1YmxpYyBjc19nYW1lcmVwb3J0X3RleChfZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBfZ2V0bGlzdCA9IG5ldyBjc19nYW1lcmVwb3J0X3RleCgpO1xuICAgICAgICBfZ2V0bGlzdC5fZyA9IDUxO1xuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfZ2FtZXJlcG9ydF90ZXhcIjtcbiAgICAgICAgX2dldGxpc3QuZ29sZCA9IF9nb2xkO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2dhbWVyZXBvcnRfdGV4LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfZ2FtZXJlcG9ydF90ZXgoZGF0YTogc2NfZ2FtZXJlcG9ydF90ZXgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZW51bSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMTgpKTsvL+S4vuaKpeasoeaVsOW3sueUqOWujFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5yZWNvdW50ID0gZGF0YS5yZW51bTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy/kuL7miqXor7fmsYJcbiAgICBwdWJsaWMgUG9zdFJlcG9ydFByYShjdXJQYWdlSW5kZXg6IG51bWJlciwgc3VzZXJpZDogc3RyaW5nLCBfcmVhc29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIF9nb2xkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGN1clBhZ2VJbmRleCA8PSAwICYmIHN1c2VyaWQgPT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMTUpKTsvL+S4vuaKpeWksei0pSFcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lbG9nL1N1Ym1pdFJlcG9ydEluZm9cIjtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIEdhbWVJZDogNTEsXG4gICAgICAgICAgICB0bnVtOiB0aGlzLk1vZGVsLnRhYmxlaWQsXG4gICAgICAgICAgICBnX2luZm86IGN1clBhZ2VJbmRleCxcbiAgICAgICAgICAgIFVzZXJJZDogdGhpcy5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkLFxuICAgICAgICAgICAgU19Vc2VySWQ6IHN1c2VyaWQsXG4gICAgICAgICAgICByZWFzb246IF9yZWFzb24sXG4gICAgICAgICAgICBub3RpY2V0eXBlOiB0aXRsZSxcbiAgICAgICAgfVxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1TdWJtaXRSZXBvcnRJbmZvLS0tXCIsIHJlcyk7XG4gICAgICAgICAgICAvL21vcmVDbnQg77ya5Li+5oql5aSa5Lq66Ziy5q2i5aSa5qyh5omj6LS5XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5jb21tb25WaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMTYpKTsvL+S4vuaKpeaIkOWKnyFcbiAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwucmVjb3VudCA9IHJlcy5kYXRhLnJlbnVtO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3NfZ2FtZXJlcG9ydF90ZXgoX2dvbGQpOyDkuI3opoHov5nkuKrljY/orq7kuoZcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNvZGUgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTUyMikpOyAvLyDkvZnpop3kuI3otrNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAxNSkgKyBcIu+8mlwiICsgcmVzLmNvZGUpOy8v5Li+5oql5aSx6LSlIVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWVyci0tLVwiLCBlcnIpXG4gICAgICAgICAgICB0aGlzLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDE1KSk7IC8v5Li+5oql5aSx6LSlIVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBFeGl0R2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIumAgOWHuua4uOaIj1wiKTtcbiAgICAgICAgbGV0IHNjZW5lTmFtZTogc3RyaW5nID0gXCJsb2JieVwiO1xuICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcImdhbWVIYWxsXCIsIHNjZW5lTmFtZSk7XG4gICAgICAgIC8vIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgYWJiZiA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJ0ZXhhc1wiKTtcbiAgICAgICAgLy8gICAgIGFiYmYucmVsZWFzZUFsbCgpO1xuICAgICAgICAvLyAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbW92ZUJ1bmRsZShhYmJmKTtcbiAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICAgIC8vIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLmFkZFRpbWVyTm9DYWxsYmFjayh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyDmuLjmiI/mmoLlgZzmiJblvIDlkK9cbiAgICBwdWJsaWMgc2Nfb3BlbnBsYXlfdGV4X24oZGF0YTogc2Nfb3BlbnBsYXlfdGV4X24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY19vcGVucGxheV90ZXhfbiA9PT09IFwiLCBkYXRhKTtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnZpZXcuc2Nfb3BlbnBsYXlfdGV4X24oZGF0YS5vcGVucGxheSk7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLm9wZW5wbGF5ID0gZGF0YS5vcGVucGxheTtcbiAgICAgICAgICAgIHRoaXMudmlldy5zY19vcGVucGxheV90ZXhfbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19