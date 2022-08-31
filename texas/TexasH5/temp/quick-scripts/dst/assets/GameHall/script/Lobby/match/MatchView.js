
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBRTFGLGdEQUEyQztBQUczQzs7R0FFRztBQUNIO0lBQXVDLDZCQUFRO0lBQS9DO1FBQUEscUVBK0lDO1FBcElXLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFlLElBQUksQ0FBQztRQUNoQyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3pDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ3pDLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDekMsc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUN6QyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ3pDLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDekMsc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUN6QyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBcUNqRCxZQUFZO1FBQ0wsbUJBQWEsR0FBa0IsRUFBRSxDQUFDO1FBaUN6QyxTQUFTO1FBQ0QsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsV0FBVztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBOEMvQixDQUFDO0lBOUlHLHNCQUFjLDBDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsa0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLG9DQUFhO2FBQTNCO1lBQ0ksT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFjRCx5Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVTtJQUNILDRCQUFRLEdBQWY7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDbEY7SUFDTCxDQUFDO0lBRUQsVUFBVTtJQUNILDhCQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFFTSxrQ0FBYyxHQUFyQixVQUFzQixLQUFhLEVBQUUsR0FBaUI7UUFDdEMsR0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlNLHVDQUFtQixHQUExQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUl2RCxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBVztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFLRCxjQUFjO0lBQ1AsK0JBQVcsR0FBbEIsVUFBbUIsSUFBZTtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBUU0sK0JBQVcsR0FBbEI7UUFBQSxpQkFxQkM7UUFwQkcsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxLQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtnQkFDM0IsSUFBSTtnQkFDSixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE9BQU87YUFDVjtZQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsVUFBVTtJQUNILGlDQUFhLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNNLHdCQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNwQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsZUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQSxDQUFDO1NBQ2xGO1FBQ0Qsc0JBQVksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLHdCQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTCxnQkFBQztBQUFELENBL0lBLEFBK0lDLENBL0lzQyxrQkFBUSxHQStJOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBDb21wZXRlSW5mbyB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcbmltcG9ydCBNYXRjaEl0ZW0gZnJvbSBcIi4vTWF0Y2hJdGVtXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOizveS6i1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIm1hdGNoXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9tYXRjaGdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9tYXRjaGFkZEdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoX2V5ZUJ0bjogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDA6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDE6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX21hdGNoSmFja3BvdDY6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9tYXRjaGFkZEdvbGQub25DbGljayh0aGlzLnNob3dUb3B1cFZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfbWF0Y2hfZXllQnRuLm9uQ2xpY2sodGhpcy5oaWRlR29sZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9tYXRjaExpc3Quc2V0VmlydHVhbCgpO1xyXG4gICAgICAgIHRoaXMudWlfbWF0Y2hMaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEl0ZW0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX21hdGNoTGlzdC5vbihmZ3VpLkV2ZW50LkNMSUNLX0lURU0sIHRoaXMub25DbGlja0l0ZW0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0SmFja3BvdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZqQ6JeP6YeR5biBICovXHJcbiAgICBwdWJsaWMgaGlkZUdvbGQoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNYXRjaFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBpZiAodGhpcy51aV9tYXRjaF9leWVCdG4uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51aV9tYXRjaGdvbGQudGV4dCA9ICcqKioqKic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aV9tYXRjaGdvbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQpICsgXCJcIjs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruWlluaxoCAqL1xyXG4gICAgcHVibGljIHNldEphY2twb3QoamFjazogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSAoamFjayArICcnKS5wYWRTdGFydCg3LCBcIjBcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXNbXCJ1aV9tYXRjaEphY2twb3RcIiArIGldLnRleHQgPSB0ZW1wW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyTGlzdEl0ZW0oaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICAoPE1hdGNoSXRlbT5vYmopLnNldERhdGEodGhpcy5tYXRjaExpc3REYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgICAvKirotZvkuovliJfooajmlbDmja4gKi9cclxuICAgIHB1YmxpYyBtYXRjaExpc3REYXRhOiBDb21wZXRlSW5mb1tdID0gW107XHJcblxyXG4gICAgcHVibGljIGhhbmRsZU1hdGNoTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tYXRjaExpc3REYXRhID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1hdGNoRGF0YTtcclxuICAgICAgICB0aGlzLnVpX21hdGNoTGlzdC5udW1JdGVtcyA9IHRoaXMubWF0Y2hMaXN0RGF0YS5sZW5ndGg7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGFsbDogbnVtYmVyID0gMDtcclxuICAgICAgICAvKirojrflj5blpZbmsaDlkowgKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0Y2hMaXN0RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbGwgKz0gdGhpcy5tYXRjaExpc3REYXRhW2ldLnByaXplcG9vbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5qYWNrcG90TnVtID0gYWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmphY2twb3ROdW0yID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5qYWNrcG90TnVtMiA9IGFsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFsbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb2xsSmFja3BvdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjemAieaLqeeahOi1m+S6iyAqL1xyXG4gICAgcHVibGljIHNlbGVjdEl0ZW06IE1hdGNoSXRlbTtcclxuXHJcbiAgICAvKirngrnlh7votZvkuovmmL7npLror6bmg4UgKi9cclxuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShpdGVtOiBNYXRjaEl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dNYXRjaERlcmFpbHNWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lcklkO1xyXG4gICAgLyoq5aWW5rGg5YC8ICovXHJcbiAgICBwcml2YXRlIGphY2twb3ROdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGphY2twb3ROdW0yOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5aKe5Yqg55qE5qyh5pWwICovXHJcbiAgICBwcml2YXRlIGFkZE51bTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByb2xsSmFja3BvdCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCArIDUwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkTnVtID49IHJhbmRvbUNvbnQpIHtcclxuICAgICAgICAgICAgICAgIC8v5YeP5bCRXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9ICsoMC45NSArIChNYXRoLnJhbmRvbSgpICogNykgLyAxMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmphY2twb3ROdW0gPSBNYXRoLmZsb29yKHRoaXMuamFja3BvdE51bSAqIHIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qYWNrcG90TnVtMiA9IHRoaXMuamFja3BvdE51bTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SmFja3BvdCh0aGlzLmphY2twb3ROdW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb2xsSmFja3BvdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByYW5kb21OID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgNTApO1xyXG4gICAgICAgICAgICB0aGlzLmphY2twb3ROdW0yICs9IHJhbmRvbU47XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SmFja3BvdCh0aGlzLmphY2twb3ROdW0yKTtcclxuICAgICAgICAgICAgdGhpcy5hZGROdW0rKztcclxuICAgICAgICAgICAgdGhpcy5yb2xsSmFja3BvdCgpO1xyXG5cclxuICAgICAgICB9LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzICsgMSkgKiAxMDAwKVxyXG4gICAgfVxyXG4gICAgLyoq5pi+56S65YWF5YC8ICovXHJcbiAgICBwdWJsaWMgc2hvd1RvcHVwVmlldygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ01hdGNoVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dUb3B1cCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudWlfbWF0Y2hfZXllQnRuLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfbWF0Y2hnb2xkLnRleHQgPSAnKioqKionO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfbWF0Y2hnb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArIFwiXCI7O1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfY29tcGV0ZV9saXN0KCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEhpZGUoKSB7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcclxuICAgIH1cclxuXHJcbn0iXX0=