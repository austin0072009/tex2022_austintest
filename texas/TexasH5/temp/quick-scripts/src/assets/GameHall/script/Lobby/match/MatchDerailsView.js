"use strict";
cc._RF.push(module, '240b7Ft8hVHm68BF+l0TIHm', 'MatchDerailsView');
// GameHall/script/Lobby/match/MatchDerailsView.ts

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
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 賽事詳情
 */
var MatchDerailsView = /** @class */ (function (_super) {
    __extends(MatchDerailsView, _super);
    function MatchDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_matchDBreak = null;
        /**玩家信息列表 */
        _this.ui_playInfoList = null;
        /**参赛人数 */
        _this.ui_playcsnum = null;
        /**参赛人次 */
        _this.ui_playercsrc = null;
        /**盲注表 */
        _this.ui_blindsInfoList = null;
        _this.ui_ssInfo = null;
        _this.ui_wincom = null;
        /**最低參賽人數 */
        _this.ui_lowestPlayNum = null;
        /**報名人數 */
        _this.ui_enrollNum = null;
        /**牌桌人數 */
        _this.ui_deskPlayNum = null;
        /** 漲盲時間*/
        _this.ui_zmTime = null;
        /**復活次數 */
        _this.ui_reviveCount = null;
        /**報名費 */
        _this.ui_entryFee = null;
        /**當前獎池 */
        _this.ui_nowJackpot = null;
        /**初始籌碼 */
        _this.ui_initchip = null;
        /**延時報名 */
        _this.ui_delayed = null;
        /**保底奖池 */
        _this.ui_jackpot = null;
        /**报名时间 */
        _this.ui_year = null;
        _this.ui_enrollTime = null;
        _this.ui_times = null;
        _this.ui_state = null;
        /**报名按钮 */
        _this.ui_btn_bm = null;
        _this.ui_btn_ssbm = null;
        _this.ui_btn_stopbm = null;
        _this.ui_spendGold = null;
        /**奖励 */
        _this.ui_winjack1 = null;
        _this.ui_winper1 = null;
        _this.ui_winlist1 = null;
        _this.ui_showTip = null;
        _this.ui_tipqx = null;
        _this.ui_tipqr = null;
        /**盲注等级信息 */
        _this.levelinfos = [];
        /**赛事的玩家排名 */
        _this.matchRank = [];
        /**奖励数据 */
        _this.prizeListData = [];
        return _this;
    }
    Object.defineProperty(MatchDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatchDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatchDerailsView.prototype, "componentName", {
        get: function () {
            return "matchDerails";
        },
        enumerable: false,
        configurable: true
    });
    MatchDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_matchDBreak.onClick(this.Hide, this);
        this.typeController = this.fguiComponent.getController("type");
        this.typeController.onChanged(this.stateChanged, this);
        this.ui_blindsInfoList.setVirtual();
        this.ui_blindsInfoList.itemRenderer = this.renderListItem.bind(this);
        this.ui_playInfoList.setVirtual();
        this.ui_playInfoList.itemRenderer = this.renderListItemPlay.bind(this);
        this.ui_winlist1.setVirtual();
        this.ui_winlist1.itemRenderer = this.renderListItemWin.bind(this);
        /**輪播圖 */
        this.slideCom = this.ui_ssInfo.getChild("n54").asCom;
        this.slideList = this.slideCom.getChild("list").asList;
        this.indexController = this.slideCom.getController("index");
        this.slideList.setVirtualAndLoop();
        this.slideList.itemRenderer = this.itemRendererslide.bind(this);
        this.slideList.numItems = 4;
        this.ssinfoContro = this.ui_ssInfo.getController("bm");
        this.winType = this.ui_wincom.getController("type");
        this.ui_btn_bm.onClick(this.opentip, this);
        this.ui_btn_ssbm.onClick(this.opentip, this);
        this.ui_btn_stopbm.onClick(this.stopSignup, this);
        this.ui_tipqx.onClick(this.closeTip, this);
        this.ui_tipqr.onClick(this.sendSignup, this);
        this.ssinfoContro.setSelectedIndex(1);
    };
    MatchDerailsView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    /**状态改变 */
    MatchDerailsView.prototype.stateChanged = function () {
        // if (this.typeController.selectedIndex == 2) {
        //     this.getCompeteRank();
        // }
    };
    /**盲注 */
    MatchDerailsView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        item.setData(this.levelinfos[index]);
    };
    /**玩家 */
    MatchDerailsView.prototype.renderListItemPlay = function (index, obj) {
        var item = obj;
        item.setData(index, this.matchRank[index]);
    };
    /**赢得奖品 */
    MatchDerailsView.prototype.renderListItemWin = function (index, obj) {
        obj.setData(index, this.prizeListData[index], +this.ui_nowJackpot.text);
    };
    /**设置赛事的详情数据 */
    MatchDerailsView.prototype.initData = function () {
        var data = LobbyViewCtr_1.default.instance.view.matchView.selectItem.data;
        this.selectCompeteid = data.competeid;
        this.levelinfos = data.levelinfos;
        this.ui_blindsInfoList.numItems = this.levelinfos.length;
        this.ui_enrollNum.text = data.signupcount + "/" + data.maxcount;
        this.ui_lowestPlayNum.text = data.mincount + '';
        this.ui_deskPlayNum.text = data.tablemaxcount + '';
        this.ui_zmTime.setVar("s", data.leveluptime + '').flushVars();
        this.ui_reviveCount.text = data.rebirth + '';
        this.ui_nowJackpot.text = data.prizepool + '';
        this.ui_jackpot.text = "¥" + data.prizepool;
        this.ui_initchip.text = data.initscore + '';
        this.ui_delayed.text = data.signupdelay + '';
        this.ui_entryFee.text = data.free[0].name + "* " + data.free[0].num;
        this.ui_winjack1.setVar("jackpot", data.prizepool + '').flushVars();
        var str = data.StartTime.split(" ");
        this.ui_year.text = str[0].slice(str[0].indexOf("-") + 1);
        this.ui_enrollTime.text = str[1].slice(0, str[1].lastIndexOf(":"));
        this.ui_times.text = this.ui_year.text + " " + this.ui_enrollTime.text;
        this.ui_btn_bm.visible = !data.IsSignup;
        this.ssinfoContro.setSelectedIndex(data.IsSignup ? 1 : 0);
        this.ui_playcsnum.setVar("pnum", data.signupcount + '').flushVars();
        if (!data.cansignup) {
            if (Date.now() < new Date(data.SignupTime).getTime()) { //报名未开始
                this.ui_state.text = '報名未開始';
            }
            else {
                this.ui_state.text = '報名結束';
            }
        }
        else {
            this.ui_state.text = '報名中';
        }
        this.ui_btn_ssbm.enabled = !data.CompeteStart;
        this.ui_btn_stopbm.enabled = !data.CompeteStart;
        this.ui_btn_bm.enabled = !data.CompeteStart;
        this.handlePrize(data);
        this.getCompeteRank();
    };
    MatchDerailsView.prototype.updatePlayNum = function () {
        var data = LobbyViewCtr_1.default.instance.view.matchView.selectItem.data;
        this.ui_enrollNum.text = data.signupcount + "/" + data.maxcount;
        this.ssinfoContro.setSelectedIndex(data.IsSignup ? 1 : 0);
        this.ui_playcsnum.setVar("pnum", data.signupcount + '').flushVars();
    };
    /**处理奖励 */
    MatchDerailsView.prototype.handlePrize = function (data) {
        this.prizeListData = [];
        var Prize = data.prizes;
        for (var i = 0; i < Prize.length; i++) {
            if (Prize[i].endrank == 0) {
                this.prizeListData.push(Prize[i].prizes);
            }
            else {
                for (var j = i; j < Prize[i].endrank; j++) {
                    this.prizeListData.push(Prize[i].prizes);
                }
            }
        }
        if (this.prizeListData[0][0].isvalue) { //有百分比
            this.ui_winlist1.defaultItem = "ui://Lobby/ssWinItem";
            this.winType.setSelectedIndex(0);
        }
        else { //其他混合物品
            this.ui_winlist1.defaultItem = "ui://Lobby/ssWinItem1";
            this.winType.setSelectedIndex(1);
        }
        this.ui_winper1.setVar("pnum", this.prizeListData.length + '').flushVars();
        this.ui_winlist1.numItems = this.prizeListData.length;
        console.log("------------奖品------------", this.prizeListData);
    };
    /**獲取排名 */
    MatchDerailsView.prototype.getCompeteRank = function () {
        LobbyViewCtr_1.default.instance.cs_compete_rank_info(this.selectCompeteid);
    };
    /**设置玩家排名 */
    MatchDerailsView.prototype.handleRank = function () {
        var mathRank = LobbyViewCtr_1.default.instance.Model.matchRank;
        if (Object.keys(mathRank).length > 0 && (mathRank[this.selectCompeteid].length > 0)) {
            this.matchRank = mathRank[this.selectCompeteid];
        }
        else {
            this.matchRank = null;
        }
        if (this.matchRank) {
            this.ui_playInfoList.numItems = this.matchRank.length;
        }
        else {
            this.ui_playInfoList.numItems = 0;
        }
    };
    /**关闭提示 */
    MatchDerailsView.prototype.closeTip = function () {
        this.ui_showTip.visible = false;
    };
    MatchDerailsView.prototype.opentip = function () {
        this.ui_spendGold.text = this.ui_entryFee.text;
        this.ui_showTip.visible = true;
    };
    /**发送报名 */
    MatchDerailsView.prototype.sendSignup = function () {
        this.closeTip();
        LobbyViewCtr_1.default.instance.cs_signup(this.selectCompeteid);
    };
    /**退赛 */
    MatchDerailsView.prototype.stopSignup = function () {
        LobbyViewCtr_1.default.instance.cs_quit(this.selectCompeteid);
    };
    /**轮播图 */
    MatchDerailsView.prototype.itemRendererslide = function (index, obj) {
        this.indexController.setSelectedIndex(index);
    };
    MatchDerailsView.prototype.Show = function () {
        this.typeController.setSelectedIndex(0);
        _super.prototype.Show.call(this);
        this.initData();
        this.loopRoll();
        // this.timerId && clearInterval(this.timerId);
        // this.timerId = setInterval(() => {
        //     this.slideList.scrollPane.scrollRight(1, true);
        // }, 5000)
    };
    MatchDerailsView.prototype.loopRoll = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
            _this.slideList.scrollPane.scrollRight(1, true);
        }))));
    };
    MatchDerailsView.prototype.clean = function () {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    };
    MatchDerailsView.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        //clearInterval(this.timerId);
        this.node.stopAllActions();
    };
    MatchDerailsView.prototype.onDestroy = function () {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    };
    return MatchDerailsView;
}(ViewBase_1.default));
exports.default = MatchDerailsView;

cc._RF.pop();