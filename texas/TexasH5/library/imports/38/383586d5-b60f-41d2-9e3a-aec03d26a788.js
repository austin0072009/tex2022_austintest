"use strict";
cc._RF.push(module, '38358bVtg9B0p46rsA9JqeI', 'MatchView');
// GameHall/script/Lobby/match/MatchView.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 賽事
 */
var MatchView = /** @class */ (function (_super) {
    __extends(MatchView, _super);
    function MatchView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_matchgold = null;
        _this.ui_matchList = null;
        _this.ui_btn_matchaddGold = null;
        _this.ui_match_eyeBtn = null;
        _this.ui_matchJackpot0 = null;
        _this.ui_matchJackpot1 = null;
        _this.ui_matchJackpot2 = null;
        _this.ui_matchJackpot3 = null;
        _this.ui_matchJackpot4 = null;
        _this.ui_matchJackpot5 = null;
        _this.ui_matchJackpot6 = null;
        /**赛事列表数据 */
        _this.matchListData = [];
        /**奖池值 */
        _this.jackpotNum = 0;
        _this.jackpotNum2 = 0;
        /**增加的次数 */
        _this.addNum = 0;
        return _this;
    }
    Object.defineProperty(MatchView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatchView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatchView.prototype, "componentName", {
        get: function () {
            return "match";
        },
        enumerable: false,
        configurable: true
    });
    MatchView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_matchaddGold.onClick(this.showTopupView, this);
        this.ui_match_eyeBtn.onClick(this.hideGold, this);
        this.ui_matchList.setVirtual();
        this.ui_matchList.itemRenderer = this.renderListItem.bind(this);
        this.ui_matchList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.setJackpot(0);
    };
    MatchView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    /**隐藏金币 */
    MatchView.prototype.hideGold = function () {
        AudioManager_1.AudioManager.Singleton.play('MatchView', "button");
        if (this.ui_match_eyeBtn.selected) {
            this.ui_matchgold.text = '*****';
        }
        else {
            this.ui_matchgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + "";
            ;
        }
    };
    /**设置奖池 */
    MatchView.prototype.setJackpot = function (jack) {
        var temp = (jack + '').padStart(7, "0");
        for (var i = 0; i < temp.length; i++) {
            this["ui_matchJackpot" + i].text = temp[i];
        }
    };
    MatchView.prototype.renderListItem = function (index, obj) {
        obj.setData(this.matchListData[index]);
    };
    MatchView.prototype.handleMatchListData = function () {
        this.matchListData = LobbyViewCtr_1.default.instance.Model.matchData;
        this.ui_matchList.numItems = this.matchListData.length;
        var all = 0;
        /**获取奖池和 */
        for (var i = 0; i < this.matchListData.length; i++) {
            all += this.matchListData[i].prizepool;
        }
        this.jackpotNum = all;
        if (this.jackpotNum2 == 0) {
            this.jackpotNum2 = all;
        }
        if (all == 0) {
            return;
        }
        this.rollJackpot();
    };
    /**点击赛事显示详情 */
    MatchView.prototype.onClickItem = function (item) {
        this.selectItem = item;
        LobbyViewCtr_1.default.instance.view.showMatchDerailsView();
    };
    MatchView.prototype.rollJackpot = function () {
        var _this = this;
        clearTimeout(this.timerId);
        this.timerId = setTimeout(function () {
            var randomCont = Math.floor(Math.random() * 30 + 50);
            if (_this.addNum >= randomCont) {
                //减少
                _this.addNum = 0;
                var r = +(0.95 + (Math.random() * 7) / 100).toFixed(2);
                _this.jackpotNum = Math.floor(_this.jackpotNum * r);
                _this.jackpotNum2 = _this.jackpotNum;
                _this.setJackpot(_this.jackpotNum);
                _this.rollJackpot();
                return;
            }
            var randomN = Math.floor(Math.random() * 100 + 50);
            _this.jackpotNum2 += randomN;
            _this.setJackpot(_this.jackpotNum2);
            _this.addNum++;
            _this.rollJackpot();
        }, Math.floor(Math.random() * 3 + 1) * 1000);
    };
    /**显示充值 */
    MatchView.prototype.showTopupView = function () {
        AudioManager_1.AudioManager.Singleton.play('MatchView', "button");
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    MatchView.prototype.Show = function () {
        if (this.ui_match_eyeBtn.selected) {
            this.ui_matchgold.text = '*****';
        }
        else {
            this.ui_matchgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + "";
            ;
        }
        LobbyViewCtr_1.default.instance.cs_compete_list();
        _super.prototype.Show.call(this);
    };
    MatchView.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        clearTimeout(this.timerId);
    };
    MatchView.prototype.clean = function () {
        clearTimeout(this.timerId);
    };
    return MatchView;
}(ViewBase_1.default));
exports.default = MatchView;

cc._RF.pop();