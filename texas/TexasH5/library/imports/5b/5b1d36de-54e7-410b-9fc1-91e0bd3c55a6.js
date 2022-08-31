"use strict";
cc._RF.push(module, '5b1d3beVOdBC5/BkeC9PFWm', 'MySsDerailsView');
// GameHall/script/Lobby/career/MySsDerailsView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/*
 * @description 賽事详情
 */
var MySsDerailsView = /** @class */ (function (_super) {
    __extends(MySsDerailsView, _super);
    function MySsDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_ssplayDerailsBreak = null;
        _this.Competeid = 0;
        _this.ui_sstime = null; //赛事名
        _this.ui_ssbet = null; //赛事时间
        _this.ui_allNumInGamess = null; //获得金额
        _this.ui_changjunRecordss = null; //盈利局
        _this.ui_damangOrBaishouss = null; //参与人数
        _this.ui_allShoushuss = null; //总手数
        _this.ui_changjunDairuss = null; //投资回报率
        _this.ui_n130 = null; //玩家列表
        _this.rankingList = [];
        return _this;
    }
    Object.defineProperty(MySsDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MySsDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MySsDerailsView.prototype, "componentName", {
        get: function () {
            return "ssDerails";
        },
        enumerable: false,
        configurable: true
    });
    MySsDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_ssplayDerailsBreak.onClick(this.Hide, this);
    };
    MySsDerailsView.prototype.OnLoadCompleted = function () {
        this.Show();
        this.ui_n130.numItems = 0;
        this.ui_n130.itemRenderer = this.renderList.bind(this);
    };
    MySsDerailsView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        LobbyViewCtr_1.default.instance.cs_compete_record_detail(this.Competeid);
    };
    MySsDerailsView.prototype.sc_compete_record_detail = function (data) {
        this.ui_sstime.text = data.competename;
        this.ui_ssbet.text = data.starttime;
        data.prizes.forEach(function (item) {
            console.log("赛事奖品：" + item.name + "_" + item.num);
        });
        this.ui_allNumInGamess.text = data.prizes[0].num + "";
        this.ui_changjunRecordss.text = data.TableWinCount + "";
        this.ui_damangOrBaishouss.text = data.ranking.length + "";
        this.ui_allShoushuss.text = data.TotalRoundCount + "";
        this.ui_changjunDairuss.text = data.RateOfReturn + "%";
        this.rankingList = data.ranking;
        this.rankingList.sort(function (a, b) {
            return a.rank - b.rank;
        });
        this.ui_n130.numItems = data.ranking.length;
    };
    MySsDerailsView.prototype.renderList = function (index, item) {
        var go = item;
        go.getChild("n6").asTextField.text = this.rankingList[index].rank + "";
        UIUtil_1.UIUtil.loadImage(go.getChild("n7").asCom.getChild("n0").asLoader, this.rankingList[index].pic);
        go.getChild("n8").asTextField.text = this.rankingList[index].name;
        go.getChild("n5").asTextField.text = this.rankingList[index].prizes[0].num + "";
        go.getChild("n9").asTextField.text = (this.rankingList[index].proportion * 100) + "%";
    };
    return MySsDerailsView;
}(ViewBase_1.default));
exports.default = MySsDerailsView;

cc._RF.pop();