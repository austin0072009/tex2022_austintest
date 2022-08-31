"use strict";
cc._RF.push(module, 'c389c+wKU1No6zs3sL9N5V8', 'createTableTexas');
// GameHall/script/Lobby/createTable/createTableTexas.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var LobbyNetData_1 = require("../LobbyNetData");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 创建德州房间
 */
var createTableTexas = /** @class */ (function (_super) {
    __extends(createTableTexas, _super);
    function createTableTexas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_back = null;
        _this.ui_btn_create = null;
        _this.ui_nameInput = null;
        _this.ui_startCount = null;
        _this.ui_roomCount = null;
        _this.ui_runTime = null;
        _this.ui_xiaomang = null;
        _this.ui_damang = null;
        _this.ui_qianzhu = null;
        _this.ui_minJoinInput = null;
        _this.ui_maxJoinInput = null;
        _this.ui_dizhuInput = null;
        _this.ui_gameModel = null;
        _this.ui_baoxian = null;
        _this.ui_AOF_Times = null;
        _this.ui_yanshikanpai = null;
        _this.ui_fPassword = null;
        _this.ui_limitIOS = null;
        _this.ui_limitDaiRu = null;
        _this.ui_gpsLimit = null;
        _this.ui_ipLimit = null;
        _this.startCount = ["2", "3", "4", "5", "6", "7", "8", "9"];
        _this.roomCount = ["2", "3", "4", "5", "6", "7", "8", "9"];
        _this.runTime = ["10", "30", "60", "120", "240", "360"];
        _this.xiaomang = ["0.1", "0.2", "0.5", "1", "2", "5", "10", "25", "50", "100", "200", "500"];
        _this.damang = ["0.2"];
        _this.qianzhu = ["小盲", "大盲", "staddle"];
        _this.gameModel = ["正常模式", "短牌", "Fold or All In"];
        _this.baoxian = ["是", "否"];
        _this.AOF_Times = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        _this.yanshikanpai = ["是", "否"];
        _this.limitIOS = ["是", "否"];
        _this.limitDaiRu = ["是", "否"];
        _this.limitGPS = ["是", "否"];
        _this.limitIP = ["是", "否"];
        return _this;
    }
    Object.defineProperty(createTableTexas.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(createTableTexas.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(createTableTexas.prototype, "componentName", {
        get: function () {
            return "createTable_texas";
        },
        enumerable: false,
        configurable: true
    });
    createTableTexas.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    createTableTexas.prototype.OnLoadCompleted = function () {
        this.addBtnCallback();
        this.Show();
    };
    createTableTexas.prototype.addBtnCallback = function () {
        var _this = this;
        this.ui_btn_back.onClick(function () {
            _this.Hide();
        });
        this.ui_btn_create.onClick(function () {
            var name = _this.ui_nameInput.text;
            // if (name == "") {
            //     CommonCtr.instance.view.ShowTipLabel("请输入房间名字");
            //     return;
            // } else {
            _this.cs_createtable_tex();
            // }
        });
        this.ui_xiaomang.node.on(fgui.Event.STATUS_CHANGED, function () {
            _this.ui_damang.items = [Number(_this.ui_xiaomang.text) * 2 + ""];
            _this.ui_damang.text = Number(_this.ui_xiaomang.text) * 2 + "";
            _this.ui_minJoinInput.text = Number(_this.ui_xiaomang.text) * 200 + "";
            _this.ui_maxJoinInput.text = Number(_this.ui_xiaomang.text) * 2000 + "";
            _this.ui_dizhuInput.text = _this.ui_xiaomang.text;
        });
    };
    createTableTexas.prototype.initDefaultData = function () {
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
    };
    createTableTexas.prototype.cs_createtable_tex = function () {
        var data = new LobbyNetData_1.cs_createtable_tex();
        data.gameid = 51;
        data._g = 0;
        data.numpertable = Number(this.ui_startCount.text);
        data.maxCount = 200;
        data.Duration = Number(this.ui_runTime.text);
        var xiaomangValue = Number(this.ui_xiaomang.text) * 100;
        data.into = xiaomangValue;
        data.baserate = xiaomangValue;
        var pregamble = xiaomangValue;
        if (this.ui_qianzhu.text == "大盲") {
            pregamble = pregamble * 2;
        }
        else if (this.ui_qianzhu.text == "staddle") {
            pregamble = pregamble * 4;
        }
        data.pregamble = pregamble;
        if (this.ui_gameModel.text == "正常模式") {
            data.gametype = 1;
        }
        else if (this.ui_gameModel.text == "保险模式") {
            data.gametype = 2;
        }
        else if (this.ui_gameModel.text == "短牌") {
            data.gametype = 10;
        }
        else if (this.ui_gameModel.text == "Fold or All In") {
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
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(data, this.sc_createtable_tex.bind(this));
    };
    createTableTexas.prototype.sc_createtable_tex = function (data) {
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("创建房间成功");
            LobbyViewCtr_1.default.instance.view.lobbyController.cs_gettablelist_tex();
            this.Hide();
        }
        else if (data.result == -4) {
            console.log("sc_createtable_bf diam is not enough...");
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("sc_createtable_bf diam is not enough...");
        }
        else {
            console.log("sc_createtable_bf error code:" + data.result);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("sc_createtable_bf error code:" + data.result);
        }
    };
    createTableTexas.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.initDefaultData();
    };
    createTableTexas.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    return createTableTexas;
}(ViewBase_1.default));
exports.default = createTableTexas;

cc._RF.pop();