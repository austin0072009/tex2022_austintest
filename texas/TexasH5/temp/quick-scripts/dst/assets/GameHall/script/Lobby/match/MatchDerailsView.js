
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchDerailsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaERlcmFpbHNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUU3RCxnREFBMkM7QUFNM0M7O0dBRUc7QUFDSDtJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQThVQztRQXBVVyx3QkFBa0IsR0FBaUIsSUFBSSxDQUFDO1FBSWhELFlBQVk7UUFDSixxQkFBZSxHQUFlLElBQUksQ0FBQztRQUMzQyxVQUFVO1FBQ0Ysa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQzdDLFVBQVU7UUFDRixtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFJOUMsU0FBUztRQUNELHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUdyQyxlQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyxlQUFTLEdBQW9CLElBQUksQ0FBQztRQUcxQyxZQUFZO1FBQ0osc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUNqRCxVQUFVO1FBQ0Ysa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQzdDLFVBQVU7UUFDRixvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDL0MsVUFBVTtRQUNGLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQzFDLFVBQVU7UUFDRixvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDL0MsU0FBUztRQUNELGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUM1QyxVQUFVO1FBQ0YsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQzlDLFVBQVU7UUFDRixpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDNUMsVUFBVTtRQUNGLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUMzQyxVQUFVO1FBQ0YsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQzNDLFVBQVU7UUFDRixhQUFPLEdBQW9CLElBQUksQ0FBQztRQUNoQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFFdEMsY0FB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Q0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFLLENBQUM7UUFHcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQU0sQ0FBQztR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SSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLCtDQUErQztRQUMvQyxxQ0FBcUM7UUFDckMsc0RBQXNEO1FBQ3RELFdBQVc7SUFDZixDQUFDO0lBRU0sbUNBQVEsR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsYUFBYSxDQUNaLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2YsQ0FBQTtJQUNMLENBQUM7SUFFRCxnQ0FBSyxHQUFMO1FBQ0ksK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELCtCQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxvQ0FBUyxHQUFUO1FBQ0ksK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0E5VUEsQUE4VUMsQ0E5VTZDLGtCQUFRLEdBOFVyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcclxuaW1wb3J0IHsgQ29tcGV0ZUluZm8sIFJhbmtJbmZvLCBUZXhhc0xldmVJbmZvIH0gZnJvbSAnLi4vTG9iYnlOZXREYXRhJztcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tICcuLi9Mb2JieVZpZXdDdHInO1xyXG5pbXBvcnQgTWF0Y2hCbGluZHNJdGVtIGZyb20gJy4vTWF0Y2hCbGluZHNJdGVtJztcclxuaW1wb3J0IE1hdGNoUGxheUluZm9JdGVtIGZyb20gJy4vTWF0Y2hQbGF5SW5mb0l0ZW0nO1xyXG5pbXBvcnQgTWF0Y2hSZXdhcmRUeXBlT25lIGZyb20gJy4vTWF0Y2hSZXdhcmRUeXBlT25lJztcclxuaW1wb3J0IE1hdGNoUmV3YXJkVHlwZVRocmVlIGZyb20gJy4vTWF0Y2hSZXdhcmRUeXBlVGhyZWUnO1xyXG5pbXBvcnQgTWF0Y2hSZXdhcmRUeXBlVHdvIGZyb20gJy4vTWF0Y2hSZXdhcmRUeXBlVHdvJztcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDos73kuovoqbPmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoRGVyYWlsc1ZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0Y2hEZXJhaWxzXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVpX2J0bl9tYXRjaERCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq546p5a625L+h5oGv5YiX6KGoICovXHJcbiAgICBwcml2YXRlIHVpX3BsYXlJbmZvTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICAvKirlj4LotZvkurrmlbAgKi9cclxuICAgIHByaXZhdGUgdWlfcGxheWNzbnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5Y+C6LWb5Lq65qyhICovXHJcbiAgICBwcml2YXRlIHVpX3BsYXllcmNzcmM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICAvKirnm7Lms6jooaggKi9cclxuICAgIHByaXZhdGUgdWlfYmxpbmRzSW5mb0xpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpX3NzSW5mbzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfd2luY29tOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvKirmnIDkvY7lj4Pos73kurrmlbggKi9cclxuICAgIHByaXZhdGUgdWlfbG93ZXN0UGxheU51bTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKuWgseWQjeS6uuaVuCAqL1xyXG4gICAgcHJpdmF0ZSB1aV9lbnJvbGxOdW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirniYzmoYzkurrmlbggKi9cclxuICAgIHByaXZhdGUgdWlfZGVza1BsYXlOdW06IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKiog5ryy55uy5pmC6ZaTKi9cclxuICAgIHByaXZhdGUgdWlfem1UaW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5b6p5rS75qyh5pW4ICovXHJcbiAgICBwcml2YXRlIHVpX3Jldml2ZUNvdW50OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5aCx5ZCN6LK7ICovXHJcbiAgICBwcml2YXRlIHVpX2VudHJ5RmVlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq55W25YmN542O5rGgICovXHJcbiAgICBwcml2YXRlIHVpX25vd0phY2twb3Q6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirliJ3lp4vnsYznorwgKi9cclxuICAgIHByaXZhdGUgdWlfaW5pdGNoaXA6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirlu7bmmYLloLHlkI0gKi9cclxuICAgIHByaXZhdGUgdWlfZGVsYXllZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKuS/neW6leWlluaxoCAqL1xyXG4gICAgcHJpdmF0ZSB1aV9qYWNrcG90OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5oql5ZCN5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIHVpX3llYXI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2Vucm9sbFRpbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV90aW1lczogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfc3RhdGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgLyoq5oql5ZCN5oyJ6ZKuICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9ibTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3NzYm06IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zdG9wYm06IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlfc3BlbmRHb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8qKuWlluWKsSAqL1xyXG4gICAgcHJpdmF0ZSB1aV93aW5qYWNrMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfd2lucGVyMTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfd2lubGlzdDE6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpX3Nob3dUaXA6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3RpcHF4OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90aXBxcjogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvKirova7mkq0gKi9cclxuICAgIHByaXZhdGUgc2xpZGVDb206IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgc2xpZGVMaXN0OiBmZ3VpLkdMaXN0O1xyXG4gICAgcHJpdmF0ZSBpbmRleENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgdGltZXJJZDtcclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX21hdGNoREJyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIub25DaGFuZ2VkKHRoaXMuc3RhdGVDaGFuZ2VkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9ibGluZHNJbmZvTGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV9ibGluZHNJbmZvTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfcGxheUluZm9MaXN0LnNldFZpcnR1YWwoKTtcclxuICAgICAgICB0aGlzLnVpX3BsYXlJbmZvTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtUGxheS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy51aV93aW5saXN0MS5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV93aW5saXN0MS5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtV2luLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAvKirovKrmkq3lnJYgKi9cclxuICAgICAgICB0aGlzLnNsaWRlQ29tID0gdGhpcy51aV9zc0luZm8uZ2V0Q2hpbGQoXCJuNTRcIikuYXNDb207XHJcbiAgICAgICAgdGhpcy5zbGlkZUxpc3QgPSB0aGlzLnNsaWRlQ29tLmdldENoaWxkKFwibGlzdFwiKS5hc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5pbmRleENvbnRyb2xsZXIgPSB0aGlzLnNsaWRlQ29tLmdldENvbnRyb2xsZXIoXCJpbmRleFwiKTtcclxuICAgICAgICB0aGlzLnNsaWRlTGlzdC5zZXRWaXJ0dWFsQW5kTG9vcCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVMaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMuaXRlbVJlbmRlcmVyc2xpZGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlTGlzdC5udW1JdGVtcyA9IDQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3NpbmZvQ29udHJvID0gdGhpcy51aV9zc0luZm8uZ2V0Q29udHJvbGxlcihcImJtXCIpO1xyXG4gICAgICAgIHRoaXMud2luVHlwZSA9IHRoaXMudWlfd2luY29tLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl9ibS5vbkNsaWNrKHRoaXMub3BlbnRpcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc3NibS5vbkNsaWNrKHRoaXMub3BlbnRpcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc3RvcGJtLm9uQ2xpY2sodGhpcy5zdG9wU2lnbnVwLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV90aXBxeC5vbkNsaWNrKHRoaXMuY2xvc2VUaXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfdGlwcXIub25DbGljayh0aGlzLnNlbmRTaWdudXAsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNzaW5mb0NvbnRyby5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgfVxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgLyoq54q25oCB5pS55Y+YICovXHJcbiAgICBwdWJsaWMgc3RhdGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnR5cGVDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gMikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdldENvbXBldGVSYW5rKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLyoq55uy5rOoICovXHJcbiAgICBwdWJsaWMgcmVuZGVyTGlzdEl0ZW0oaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IDxNYXRjaEJsaW5kc0l0ZW0+b2JqO1xyXG4gICAgICAgIGl0ZW0uc2V0RGF0YSh0aGlzLmxldmVsaW5mb3NbaW5kZXhdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnjqnlrrYgKi9cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbVBsYXkoaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IDxNYXRjaFBsYXlJbmZvSXRlbT5vYmo7XHJcbiAgICAgICAgaXRlbS5zZXREYXRhKGluZGV4LCB0aGlzLm1hdGNoUmFua1tpbmRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKui1ouW+l+WlluWTgSAqL1xyXG4gICAgcHVibGljIHJlbmRlckxpc3RJdGVtV2luKGluZGV4OiBudW1iZXIsIG9iajogTWF0Y2hSZXdhcmRUeXBlT25lIHwgTWF0Y2hSZXdhcmRUeXBlVHdvIHwgTWF0Y2hSZXdhcmRUeXBlVGhyZWUpIHtcclxuICAgICAgICBvYmouc2V0RGF0YShpbmRleCwgdGhpcy5wcml6ZUxpc3REYXRhW2luZGV4XSwgK3RoaXMudWlfbm93SmFja3BvdC50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnm7Lms6jnrYnnuqfkv6Hmga8gKi9cclxuICAgIHB1YmxpYyBsZXZlbGluZm9zOiBUZXhhc0xldmVJbmZvW10gPSBbXTtcclxuICAgIC8qKui1m+S6i+eahOeOqeWutuaOkuWQjSAqL1xyXG4gICAgcHVibGljIG1hdGNoUmFuazogUmFua0luZm9bXSA9IFtdO1xyXG5cclxuICAgIC8qKumAieaLqeafpeeci+eahOi1m+S6iyAqL1xyXG4gICAgcHVibGljIHNlbGVjdENvbXBldGVpZDogbnVtYmVyO1xyXG5cclxuICAgIC8qKui1m+S6i+ivpuaDheaOp+WItuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBzc2luZm9Db250cm86IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICAvKirlpZblirHnsbvlnovmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgd2luVHlwZTogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIC8qKuiuvue9rui1m+S6i+eahOivpuaDheaVsOaNriAqL1xyXG4gICAgcHVibGljIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubWF0Y2hWaWV3LnNlbGVjdEl0ZW0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RDb21wZXRlaWQgPSBkYXRhLmNvbXBldGVpZDtcclxuICAgICAgICB0aGlzLmxldmVsaW5mb3MgPSBkYXRhLmxldmVsaW5mb3M7XHJcbiAgICAgICAgdGhpcy51aV9ibGluZHNJbmZvTGlzdC5udW1JdGVtcyA9IHRoaXMubGV2ZWxpbmZvcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMudWlfZW5yb2xsTnVtLnRleHQgPSBgJHtkYXRhLnNpZ251cGNvdW50fS8ke2RhdGEubWF4Y291bnR9YDtcclxuICAgICAgICB0aGlzLnVpX2xvd2VzdFBsYXlOdW0udGV4dCA9IGRhdGEubWluY291bnQgKyAnJztcclxuICAgICAgICB0aGlzLnVpX2Rlc2tQbGF5TnVtLnRleHQgPSBkYXRhLnRhYmxlbWF4Y291bnQgKyAnJztcclxuXHJcbiAgICAgICAgdGhpcy51aV96bVRpbWUuc2V0VmFyKFwic1wiLCBkYXRhLmxldmVsdXB0aW1lICsgJycpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfcmV2aXZlQ291bnQudGV4dCA9IGRhdGEucmViaXJ0aCArICcnO1xyXG4gICAgICAgIHRoaXMudWlfbm93SmFja3BvdC50ZXh0ID0gZGF0YS5wcml6ZXBvb2wgKyAnJztcclxuICAgICAgICB0aGlzLnVpX2phY2twb3QudGV4dCA9IFwiwqVcIiArIGRhdGEucHJpemVwb29sO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2luaXRjaGlwLnRleHQgPSBkYXRhLmluaXRzY29yZSArICcnO1xyXG4gICAgICAgIHRoaXMudWlfZGVsYXllZC50ZXh0ID0gZGF0YS5zaWdudXBkZWxheSArICcnO1xyXG4gICAgICAgIHRoaXMudWlfZW50cnlGZWUudGV4dCA9IGAke2RhdGEuZnJlZVswXS5uYW1lfSogJHtkYXRhLmZyZWVbMF0ubnVtfWA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVpX3dpbmphY2sxLnNldFZhcihcImphY2twb3RcIiwgZGF0YS5wcml6ZXBvb2wgKyAnJykuZmx1c2hWYXJzKCk7XHJcblxyXG4gICAgICAgIGxldCBzdHIgPSBkYXRhLlN0YXJ0VGltZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdGhpcy51aV95ZWFyLnRleHQgPSBzdHJbMF0uc2xpY2Uoc3RyWzBdLmluZGV4T2YoXCItXCIpICsgMSk7XHJcbiAgICAgICAgdGhpcy51aV9lbnJvbGxUaW1lLnRleHQgPSBzdHJbMV0uc2xpY2UoMCwgc3RyWzFdLmxhc3RJbmRleE9mKFwiOlwiKSk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfdGltZXMudGV4dCA9IGAke3RoaXMudWlfeWVhci50ZXh0fSAke3RoaXMudWlfZW5yb2xsVGltZS50ZXh0fWA7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX2JtLnZpc2libGUgPSAhZGF0YS5Jc1NpZ251cDtcclxuICAgICAgICB0aGlzLnNzaW5mb0NvbnRyby5zZXRTZWxlY3RlZEluZGV4KGRhdGEuSXNTaWdudXAgPyAxIDogMCk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfcGxheWNzbnVtLnNldFZhcihcInBudW1cIiwgZGF0YS5zaWdudXBjb3VudCArICcnKS5mbHVzaFZhcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmNhbnNpZ251cCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSA8IG5ldyBEYXRlKGRhdGEuU2lnbnVwVGltZSkuZ2V0VGltZSgpKSB7IC8v5oql5ZCN5pyq5byA5aeLXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3N0YXRlLnRleHQgPSAn5aCx5ZCN5pyq6ZaL5aeLJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfc3RhdGUudGV4dCA9ICfloLHlkI3ntZDmnZ8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aV9zdGF0ZS50ZXh0ID0gJ+WgseWQjeS4rSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWlfYnRuX3NzYm0uZW5hYmxlZCA9ICFkYXRhLkNvbXBldGVTdGFydDtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zdG9wYm0uZW5hYmxlZCA9ICFkYXRhLkNvbXBldGVTdGFydDtcclxuICAgICAgICB0aGlzLnVpX2J0bl9ibS5lbmFibGVkID0gIWRhdGEuQ29tcGV0ZVN0YXJ0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcml6ZShkYXRhKTtcclxuICAgICAgICB0aGlzLmdldENvbXBldGVSYW5rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVBsYXlOdW0oKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5tYXRjaFZpZXcuc2VsZWN0SXRlbS5kYXRhO1xyXG4gICAgICAgIHRoaXMudWlfZW5yb2xsTnVtLnRleHQgPSBgJHtkYXRhLnNpZ251cGNvdW50fS8ke2RhdGEubWF4Y291bnR9YDtcclxuICAgICAgICB0aGlzLnNzaW5mb0NvbnRyby5zZXRTZWxlY3RlZEluZGV4KGRhdGEuSXNTaWdudXAgPyAxIDogMCk7XHJcbiAgICAgICAgdGhpcy51aV9wbGF5Y3NudW0uc2V0VmFyKFwicG51bVwiLCBkYXRhLnNpZ251cGNvdW50ICsgJycpLmZsdXNoVmFycygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlpZblirHmlbDmja4gKi9cclxuICAgIHByaXZhdGUgcHJpemVMaXN0RGF0YSA9IFtdO1xyXG5cclxuICAgIC8qKuWkhOeQhuWlluWKsSAqL1xyXG4gICAgcHVibGljIGhhbmRsZVByaXplKGRhdGE6IENvbXBldGVJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5wcml6ZUxpc3REYXRhID0gW107XHJcbiAgICAgICAgbGV0IFByaXplID0gZGF0YS5wcml6ZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcml6ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoUHJpemVbaV0uZW5kcmFuayA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaXplTGlzdERhdGEucHVzaChQcml6ZVtpXS5wcml6ZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBQcml6ZVtpXS5lbmRyYW5rOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaXplTGlzdERhdGEucHVzaChQcml6ZVtpXS5wcml6ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcml6ZUxpc3REYXRhWzBdWzBdLmlzdmFsdWUpIHsgLy/mnInnmb7liIbmr5RcclxuICAgICAgICAgICAgdGhpcy51aV93aW5saXN0MS5kZWZhdWx0SXRlbSA9IFwidWk6Ly9Mb2JieS9zc1dpbkl0ZW1cIjtcclxuICAgICAgICAgICAgdGhpcy53aW5UeXBlLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgfSBlbHNlIHsgIC8v5YW25LuW5re35ZCI54mp5ZOBXHJcbiAgICAgICAgICAgIHRoaXMudWlfd2lubGlzdDEuZGVmYXVsdEl0ZW0gPSBcInVpOi8vTG9iYnkvc3NXaW5JdGVtMVwiO1xyXG4gICAgICAgICAgICB0aGlzLndpblR5cGUuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpX3dpbnBlcjEuc2V0VmFyKFwicG51bVwiLCB0aGlzLnByaXplTGlzdERhdGEubGVuZ3RoICsgJycpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfd2lubGlzdDEubnVtSXRlbXMgPSB0aGlzLnByaXplTGlzdERhdGEubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0t5aWW5ZOBLS0tLS0tLS0tLS0tXCIsIHRoaXMucHJpemVMaXN0RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq542y5Y+W5o6S5ZCNICovXHJcbiAgICBwdWJsaWMgZ2V0Q29tcGV0ZVJhbmsoKSB7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2NvbXBldGVfcmFua19pbmZvKHRoaXMuc2VsZWN0Q29tcGV0ZWlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirorr7nva7njqnlrrbmjpLlkI0gKi9cclxuICAgIHB1YmxpYyBoYW5kbGVSYW5rKCkge1xyXG4gICAgICAgIGxldCBtYXRoUmFuayA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tYXRjaFJhbms7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hdGhSYW5rKS5sZW5ndGggPiAwICYmIChtYXRoUmFua1t0aGlzLnNlbGVjdENvbXBldGVpZF0ubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFJhbmsgPSBtYXRoUmFua1t0aGlzLnNlbGVjdENvbXBldGVpZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFJhbmsgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaFJhbmspIHtcclxuICAgICAgICAgICAgdGhpcy51aV9wbGF5SW5mb0xpc3QubnVtSXRlbXMgPSB0aGlzLm1hdGNoUmFuay5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aV9wbGF5SW5mb0xpc3QubnVtSXRlbXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq5YWz6Zet5o+Q56S6ICovXHJcbiAgICBwdWJsaWMgY2xvc2VUaXAoKSB7XHJcbiAgICAgICAgdGhpcy51aV9zaG93VGlwLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvcGVudGlwKCkge1xyXG4gICAgICAgIHRoaXMudWlfc3BlbmRHb2xkLnRleHQgPSB0aGlzLnVpX2VudHJ5RmVlLnRleHQ7XHJcbiAgICAgICAgdGhpcy51aV9zaG93VGlwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoq5Y+R6YCB5oql5ZCNICovXHJcbiAgICBwdWJsaWMgc2VuZFNpZ251cCgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlVGlwKCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX3NpZ251cCh0aGlzLnNlbGVjdENvbXBldGVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YCA6LWbICovXHJcbiAgICBwdWJsaWMgc3RvcFNpZ251cCgpIHtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfcXVpdCh0aGlzLnNlbGVjdENvbXBldGVpZCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKirova7mkq3lm74gKi9cclxuICAgIHB1YmxpYyBpdGVtUmVuZGVyZXJzbGlkZShpbmRleDogbnVtYmVyLCBvYmo6IGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXhDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMubG9vcFJvbGwoKTtcclxuICAgICAgICAvLyB0aGlzLnRpbWVySWQgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIC8vIHRoaXMudGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zbGlkZUxpc3Quc2Nyb2xsUGFuZS5zY3JvbGxSaWdodCgxLCB0cnVlKTtcclxuICAgICAgICAvLyB9LCA1MDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb29wUm9sbCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZUxpc3Quc2Nyb2xsUGFuZS5zY3JvbGxSaWdodCgxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIH1cclxuICAgIEhpZGUoKSB7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgICAgIC8vY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIH1cclxufSJdfQ==