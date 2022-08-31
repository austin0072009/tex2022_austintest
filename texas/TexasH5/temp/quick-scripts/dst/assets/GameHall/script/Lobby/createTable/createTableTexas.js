
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/createTable/createTableTexas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNyZWF0ZVRhYmxlXFxjcmVhdGVUYWJsZVRleGFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0Qsa0ZBQWlGO0FBQ2pGLGdEQUF5RTtBQUN6RSxnREFBMkM7QUFHM0M7O0dBRUc7QUFDSDtJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQStOQztRQXBOVyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3BDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUNsQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFDakMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBQ2xDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUN4QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFDeEMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUNwQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFDbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3BDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUN2QyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUNyQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFH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QUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sNkNBQWtCLEdBQXpCLFVBQTBCLElBQXdCO1FBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDakUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ3ZELHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUNuRjthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0QscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkY7SUFDTCxDQUFDO0lBRU0sK0JBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSwrQkFBSSxHQUFYO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0EvTkEsQUErTkMsQ0EvTjZDLGtCQUFRLEdBK05yRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvV2ViU29ja2V0TWFuYWdlclwiO1xuaW1wb3J0IHsgY3NfY3JlYXRldGFibGVfdGV4LCBzY19jcmVhdGV0YWJsZV90ZXggfSBmcm9tIFwiLi4vTG9iYnlOZXREYXRhXCI7XG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDliJvlu7rlvrflt57miL/pl7RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlVGFibGVUZXhhcyBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImNyZWF0ZVRhYmxlX3RleGFzXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1aV9idG5fYmFjazogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9jcmVhdGU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHVpX25hbWVJbnB1dDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3N0YXJ0Q291bnQ6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Jvb21Db3VudDogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcnVuVGltZTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfeGlhb21hbmc6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2RhbWFuZzogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcWlhbnpodTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbWluSm9pbklucHV0OiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbWF4Sm9pbklucHV0OiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfZGl6aHVJbnB1dDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2dhbWVNb2RlbDogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYmFveGlhbjogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfQU9GX1RpbWVzOiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV95YW5zaGlrYW5wYWk6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2ZQYXNzd29yZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2xpbWl0SU9TOiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9saW1pdERhaVJ1OiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9ncHNMaW1pdDogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuICAgIHByaXZhdGUgdWlfaXBMaW1pdDogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGFydENvdW50OiBzdHJpbmdbXSA9IFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xuICAgIHByaXZhdGUgcm9vbUNvdW50OiBzdHJpbmdbXSA9IFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xuICAgIHByaXZhdGUgcnVuVGltZTogc3RyaW5nW10gPSBbXCIxMFwiLCBcIjMwXCIsIFwiNjBcIiwgXCIxMjBcIiwgXCIyNDBcIiwgXCIzNjBcIl07XG4gICAgcHJpdmF0ZSB4aWFvbWFuZzogc3RyaW5nW10gPSBbXCIwLjFcIiwgXCIwLjJcIiwgXCIwLjVcIiwgXCIxXCIsIFwiMlwiLCBcIjVcIiwgXCIxMFwiLCBcIjI1XCIsIFwiNTBcIiwgXCIxMDBcIiwgXCIyMDBcIiwgXCI1MDBcIl07XG4gICAgcHJpdmF0ZSBkYW1hbmc6IHN0cmluZ1tdID0gW1wiMC4yXCJdO1xuICAgIHByaXZhdGUgcWlhbnpodTogc3RyaW5nW10gPSBbXCLlsI/nm7JcIiwgXCLlpKfnm7JcIiwgXCJzdGFkZGxlXCJdO1xuICAgIHByaXZhdGUgZ2FtZU1vZGVsOiBzdHJpbmdbXSA9IFtcIuato+W4uOaooeW8j1wiLCBcIuefreeJjFwiLCBcIkZvbGQgb3IgQWxsIEluXCJdO1xuICAgIHByaXZhdGUgYmFveGlhbjogc3RyaW5nW10gPSBbXCLmmK9cIiwgXCLlkKZcIl07XG4gICAgcHJpdmF0ZSBBT0ZfVGltZXM6IHN0cmluZ1tdID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gICAgcHJpdmF0ZSB5YW5zaGlrYW5wYWk6IHN0cmluZ1tdID0gW1wi5pivXCIsIFwi5ZCmXCJdO1xuICAgIHByaXZhdGUgbGltaXRJT1M6IHN0cmluZ1tdID0gW1wi5pivXCIsIFwi5ZCmXCJdO1xuICAgIHByaXZhdGUgbGltaXREYWlSdTogc3RyaW5nW10gPSBbXCLmmK9cIiwgXCLlkKZcIl07XG4gICAgcHJpdmF0ZSBsaW1pdEdQUzogc3RyaW5nW10gPSBbXCLmmK9cIiwgXCLlkKZcIl07XG4gICAgcHJpdmF0ZSBsaW1pdElQOiBzdHJpbmdbXSA9IFtcIuaYr1wiLCBcIuWQplwiXTtcblxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmFkZEJ0bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRCdG5DYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy51aV9idG5fYmFjay5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnVpX2J0bl9jcmVhdGUub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZTogc3RyaW5nID0gdGhpcy51aV9uYW1lSW5wdXQudGV4dDtcbiAgICAgICAgICAgIC8vIGlmIChuYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLor7fovpPlhaXmiL/pl7TlkI3lrZdcIik7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3NfY3JlYXRldGFibGVfdGV4KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudWlfeGlhb21hbmcubm9kZS5vbihmZ3VpLkV2ZW50LlNUQVRVU19DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX2RhbWFuZy5pdGVtcyA9IFtOdW1iZXIodGhpcy51aV94aWFvbWFuZy50ZXh0KSAqIDIgKyBcIlwiXTtcbiAgICAgICAgICAgIHRoaXMudWlfZGFtYW5nLnRleHQgPSBOdW1iZXIodGhpcy51aV94aWFvbWFuZy50ZXh0KSAqIDIgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy51aV9taW5Kb2luSW5wdXQudGV4dCA9IE51bWJlcih0aGlzLnVpX3hpYW9tYW5nLnRleHQpICogMjAwICsgXCJcIjtcbiAgICAgICAgICAgIHRoaXMudWlfbWF4Sm9pbklucHV0LnRleHQgPSBOdW1iZXIodGhpcy51aV94aWFvbWFuZy50ZXh0KSAqIDIwMDAgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy51aV9kaXpodUlucHV0LnRleHQgPSB0aGlzLnVpX3hpYW9tYW5nLnRleHQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGluaXREZWZhdWx0RGF0YSgpIHtcbiAgICAgICAgdGhpcy51aV9uYW1lSW5wdXQudGV4dCA9IFwi5qGM5a2QMDAxXCI7XG5cbiAgICAgICAgdGhpcy51aV9zdGFydENvdW50Lml0ZW1zID0gdGhpcy5zdGFydENvdW50O1xuICAgICAgICB0aGlzLnVpX3N0YXJ0Q291bnQudGV4dCA9IHRoaXMuc3RhcnRDb3VudFswXTtcblxuICAgICAgICB0aGlzLnVpX3Jvb21Db3VudC5pdGVtcyA9IHRoaXMucm9vbUNvdW50O1xuICAgICAgICB0aGlzLnVpX3N0YXJ0Q291bnQudGV4dCA9IHRoaXMucm9vbUNvdW50WzBdO1xuXG4gICAgICAgIHRoaXMudWlfcnVuVGltZS5pdGVtcyA9IHRoaXMucnVuVGltZTtcbiAgICAgICAgdGhpcy51aV9ydW5UaW1lLnZhbHVlID0gdGhpcy5ydW5UaW1lWzBdO1xuICAgICAgICB0aGlzLnVpX3J1blRpbWUudGV4dCA9IHRoaXMucnVuVGltZVswXTtcblxuICAgICAgICB0aGlzLnVpX3hpYW9tYW5nLml0ZW1zID0gdGhpcy54aWFvbWFuZztcbiAgICAgICAgdGhpcy51aV94aWFvbWFuZy50ZXh0ID0gdGhpcy54aWFvbWFuZ1sxXTtcblxuICAgICAgICB0aGlzLnVpX2RhbWFuZy5pdGVtcyA9IFtOdW1iZXIodGhpcy51aV94aWFvbWFuZy50ZXh0KSAqIDIgKyBcIlwiXTtcbiAgICAgICAgdGhpcy51aV9kYW1hbmcudGV4dCA9IE51bWJlcih0aGlzLnVpX3hpYW9tYW5nLnRleHQpICogMiArIFwiXCI7XG5cbiAgICAgICAgdGhpcy51aV9xaWFuemh1Lml0ZW1zID0gdGhpcy5xaWFuemh1O1xuICAgICAgICB0aGlzLnVpX3FpYW56aHUudGV4dCA9IHRoaXMucWlhbnpodVswXTtcblxuICAgICAgICB0aGlzLnVpX21pbkpvaW5JbnB1dC50ZXh0ID0gTnVtYmVyKHRoaXMudWlfeGlhb21hbmcudGV4dCkgKiAyMDAgKyBcIlwiO1xuICAgICAgICB0aGlzLnVpX21heEpvaW5JbnB1dC50ZXh0ID0gTnVtYmVyKHRoaXMudWlfeGlhb21hbmcudGV4dCkgKiAyMDAwICsgXCJcIjtcbiAgICAgICAgdGhpcy51aV9kaXpodUlucHV0LnRleHQgPSB0aGlzLnVpX3hpYW9tYW5nLnRleHQ7XG4gICAgICAgIHRoaXMudWlfZlBhc3N3b3JkLnRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudWlfZ2FtZU1vZGVsLml0ZW1zID0gdGhpcy5nYW1lTW9kZWw7XG4gICAgICAgIHRoaXMudWlfZ2FtZU1vZGVsLnRleHQgPSB0aGlzLmdhbWVNb2RlbFswXTtcblxuICAgICAgICB0aGlzLnVpX2Jhb3hpYW4uaXRlbXMgPSB0aGlzLmJhb3hpYW47XG4gICAgICAgIHRoaXMudWlfYmFveGlhbi50ZXh0ID0gdGhpcy5iYW94aWFuWzBdO1xuXG4gICAgICAgIHRoaXMudWlfQU9GX1RpbWVzLml0ZW1zID0gdGhpcy5BT0ZfVGltZXM7XG4gICAgICAgIHRoaXMudWlfQU9GX1RpbWVzLnRleHQgPSB0aGlzLkFPRl9UaW1lc1swXTtcblxuICAgICAgICB0aGlzLnVpX3lhbnNoaWthbnBhaS5pdGVtcyA9IHRoaXMueWFuc2hpa2FucGFpO1xuICAgICAgICB0aGlzLnVpX3lhbnNoaWthbnBhaS50ZXh0ID0gdGhpcy55YW5zaGlrYW5wYWlbMV07XG5cbiAgICAgICAgdGhpcy51aV9saW1pdElPUy5pdGVtcyA9IHRoaXMubGltaXRJT1M7XG4gICAgICAgIHRoaXMudWlfbGltaXRJT1MudGV4dCA9IHRoaXMubGltaXRJT1NbMV07XG5cbiAgICAgICAgdGhpcy51aV9saW1pdERhaVJ1Lml0ZW1zID0gdGhpcy5saW1pdERhaVJ1O1xuICAgICAgICB0aGlzLnVpX2xpbWl0RGFpUnUudGV4dCA9IHRoaXMubGltaXREYWlSdVsxXTtcblxuICAgICAgICB0aGlzLnVpX2dwc0xpbWl0Lml0ZW1zID0gdGhpcy5saW1pdEdQUztcbiAgICAgICAgdGhpcy51aV9ncHNMaW1pdC50ZXh0ID0gdGhpcy5saW1pdEdQU1swXTtcblxuICAgICAgICB0aGlzLnVpX2lwTGltaXQuaXRlbXMgPSB0aGlzLmxpbWl0SVA7XG4gICAgICAgIHRoaXMudWlfaXBMaW1pdC50ZXh0ID0gdGhpcy5saW1pdElQWzBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjc19jcmVhdGV0YWJsZV90ZXgoKSB7XG4gICAgICAgIGxldCBkYXRhOiBjc19jcmVhdGV0YWJsZV90ZXggPSBuZXcgY3NfY3JlYXRldGFibGVfdGV4KCk7XG4gICAgICAgIGRhdGEuZ2FtZWlkID0gNTE7XG4gICAgICAgIGRhdGEuX2cgPSAwO1xuICAgICAgICBkYXRhLm51bXBlcnRhYmxlID0gTnVtYmVyKHRoaXMudWlfc3RhcnRDb3VudC50ZXh0KTtcbiAgICAgICAgZGF0YS5tYXhDb3VudCA9IDIwMDtcbiAgICAgICAgZGF0YS5EdXJhdGlvbiA9IE51bWJlcih0aGlzLnVpX3J1blRpbWUudGV4dCk7XG4gICAgICAgIGxldCB4aWFvbWFuZ1ZhbHVlOiBudW1iZXIgPSBOdW1iZXIodGhpcy51aV94aWFvbWFuZy50ZXh0KSAqIDEwMDtcbiAgICAgICAgZGF0YS5pbnRvID0geGlhb21hbmdWYWx1ZTtcbiAgICAgICAgZGF0YS5iYXNlcmF0ZSA9IHhpYW9tYW5nVmFsdWU7XG4gICAgICAgIGxldCBwcmVnYW1ibGUgPSB4aWFvbWFuZ1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy51aV9xaWFuemh1LnRleHQgPT0gXCLlpKfnm7JcIikge1xuICAgICAgICAgICAgcHJlZ2FtYmxlID0gcHJlZ2FtYmxlICogMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVpX3FpYW56aHUudGV4dCA9PSBcInN0YWRkbGVcIikge1xuICAgICAgICAgICAgcHJlZ2FtYmxlID0gcHJlZ2FtYmxlICogNDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnByZWdhbWJsZSA9IHByZWdhbWJsZTtcbiAgICAgICAgaWYgKHRoaXMudWlfZ2FtZU1vZGVsLnRleHQgPT0gXCLmraPluLjmqKHlvI9cIikge1xuICAgICAgICAgICAgZGF0YS5nYW1ldHlwZSA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51aV9nYW1lTW9kZWwudGV4dCA9PSBcIuS/nemZqeaooeW8j1wiKSB7XG4gICAgICAgICAgICBkYXRhLmdhbWV0eXBlID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVpX2dhbWVNb2RlbC50ZXh0ID09IFwi55+t54mMXCIpIHtcbiAgICAgICAgICAgIGRhdGEuZ2FtZXR5cGUgPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVpX2dhbWVNb2RlbC50ZXh0ID09IFwiRm9sZCBvciBBbGwgSW5cIikge1xuICAgICAgICAgICAgZGF0YS5nYW1ldHlwZSA9IDIwO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaW5zID0gdGhpcy51aV9iYW94aWFuLnRleHQgPT0gXCLmmK9cIiA/IDEgOiAwO1xuICAgICAgICBkYXRhLkFPRl9UaW1lcyA9IE51bWJlcih0aGlzLnVpX0FPRl9UaW1lcy50ZXh0KTtcbiAgICAgICAgZGF0YS5yb29taWQgPSA1MTAxO1xuICAgICAgICBkYXRhLnBhc3N3b3JkID0gdGhpcy51aV9mUGFzc3dvcmQudGV4dDtcbiAgICAgICAgZGF0YS5vcGVudiA9IDA7XG4gICAgICAgIGRhdGEuZGVsYXkgPSB0aGlzLnVpX3lhbnNoaWthbnBhaS50ZXh0ID09IFwi5pivXCIgPyAxIDogMDtcbiAgICAgICAgZGF0YS5zaG93Q2FyZCA9IDA7XG4gICAgICAgIGRhdGEuY2x1YmlkeCA9IDA7XG4gICAgICAgIGRhdGEudG5hbWUgPSB0aGlzLnVpX25hbWVJbnB1dC50ZXh0O1xuICAgICAgICBkYXRhLkluZmxvdyA9IDA7XG4gICAgICAgIGRhdGEubnVtcGVydGFibGUgPSBOdW1iZXIodGhpcy51aV9zdGFydENvdW50LnRleHQpO1xuICAgICAgICBkYXRhLm1hbk51bSA9IE51bWJlcih0aGlzLnVpX3Jvb21Db3VudC50ZXh0KTtcbiAgICAgICAgZGF0YS5pbnRvcmF0ZV9taW4gPSBOdW1iZXIodGhpcy51aV9taW5Kb2luSW5wdXQudGV4dCk7XG4gICAgICAgIGRhdGEuaW50b3JhdGVfbWF4ID0gTnVtYmVyKHRoaXMudWlfbWF4Sm9pbklucHV0LnRleHQpO1xuICAgICAgICBkYXRhLmdwcyA9IHRoaXMudWlfZ3BzTGltaXQudGV4dCA9PSBcIuaYr1wiID8gMSA6IDA7XG4gICAgICAgIGRhdGEuaXAgPSB0aGlzLnVpX2lwTGltaXQudGV4dCA9PSBcIuaYr1wiID8gMSA6IDA7XG4gICAgICAgIGRhdGEuY2ludG8gPSB0aGlzLnVpX2xpbWl0RGFpUnUudGV4dCA9PSBcIuaYr1wiO1xuICAgICAgICBkYXRhLmlvcyA9IHRoaXMudWlfbGltaXRJT1MudGV4dCA9PSBcIuaYr1wiO1xuICAgICAgICAvLyBkYXRhLmFsbGlhbmNlaWQgPSAwO1xuICAgICAgICAvLyBkYXRhLmNpbnRvID0gZmFsc2U7XG4gICAgICAgIC8vIGRhdGEuY2x1YmlkeCA9IDA7XG4gICAgICAgIC8vIGRhdGEuRHVyYXRpb24gPSAzMFxuICAgICAgICAvLyBkYXRhLmludG8gPSA1MDtcbiAgICAgICAgLy8gZGF0YS5pbnRvcmF0ZV9taW4gPSAxO1xuICAgICAgICAvLyBkYXRhLmludG9yYXRlX21heCA9IDQ7XG4gICAgICAgIC8vIGRhdGEubWF4Q291bnQgPSA2O1xuICAgICAgICAvLyBkYXRhLm1hbk51bSA9IDk7XG4gICAgICAgIC8vIGRhdGEuYmFzZXJhdGUgPSAxMDA7XG4gICAgICAgIC8vIGRhdGEucHJlZ2FtYmxlID0gMTAwO1xuICAgICAgICAvLyBkYXRhLmdhbWV0eXBlID0gMTtcbiAgICAgICAgLy8gZGF0YS5udW1wZXJ0YWJsZSA9IDI7XG4gICAgICAgIC8vIGRhdGEudG5hbWUgPSB0aGlzLnVpX25hbWVJbnB1dC50ZXh0O1xuICAgICAgICAvLyBkYXRhLl9nID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIC8vIGRhdGEuZ2FtZWlkID0gdGhpcy5Nb2RlbC5nYW1laWQ7XG4gICAgICAgIC8vIGRhdGEucm9vbWlkID0gdGhpcy5Nb2RlbC50YWJsZWlkO1xuICAgICAgICAvLyBkYXRhLm9wZW5wbGF5ID0gdHJ1ZTtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3NfY3JlYXRldGFibGVfdGV4XCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oZGF0YSwgdGhpcy5zY19jcmVhdGV0YWJsZV90ZXguYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2NyZWF0ZXRhYmxlX3RleChkYXRhOiBzY19jcmVhdGV0YWJsZV90ZXgpIHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuWIm+W7uuaIv+mXtOaIkOWKn1wiKTtcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LmxvYmJ5Q29udHJvbGxlci5jc19nZXR0YWJsZWxpc3RfdGV4KCk7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY19jcmVhdGV0YWJsZV9iZiBkaWFtIGlzIG5vdCBlbm91Z2guLi5cIik7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCJzY19jcmVhdGV0YWJsZV9iZiBkaWFtIGlzIG5vdCBlbm91Z2guLi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjX2NyZWF0ZXRhYmxlX2JmIGVycm9yIGNvZGU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCJzY19jcmVhdGV0YWJsZV9iZiBlcnJvciBjb2RlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNob3coKSB7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICAgICAgdGhpcy5pbml0RGVmYXVsdERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSGlkZSgpIHtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgIH1cbn0iXX0=