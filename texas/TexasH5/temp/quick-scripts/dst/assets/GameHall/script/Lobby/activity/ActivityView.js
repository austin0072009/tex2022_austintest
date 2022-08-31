
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/activity/ActivityView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8ec8RfjENAtIpF97eFoyfu', 'ActivityView');
// GameHall/script/Lobby/activity/ActivityView.ts

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
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 活动
 */
var ActivityView = /** @class */ (function (_super) {
    __extends(ActivityView, _super);
    function ActivityView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Activitylist = null;
        _this.ACListData = [];
        return _this;
    }
    ActivityView.prototype.onConstruct = function () {
        this.Activitylist = this.getChild("Activitylist").asList;
        this.Activitylist.itemRenderer = this.renderACList.bind(this);
    };
    ActivityView.prototype.onClickItem = function (data) {
        AudioManager_1.AudioManager.Singleton.play('ActivityView', "button");
        LobbyViewCtr_1.default.instance.view.showactivityDetails(data);
    };
    ActivityView.prototype.Show = function () {
        this.visible = true;
        this.getListData();
    };
    ActivityView.prototype.Hide = function () {
        this.visible = false;
    };
    ActivityView.prototype.getListData = function () {
        var _this = this;
        this.Activitylist.numItems = 0;
        var url = "http://182.61.6.67:82" + "/api/Game/ActivityList"; //BaseFrameNative.serverlistItem.apiAdress +
        var params = {
            pageindex: 0,
            pagesize: 0,
            userid: AppConst_1.AppConst.mPlayerModel.userid,
            datestring: "",
        };
        HttpHelpEx_1.default.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(function (res) {
            console.log("---ActivityList---", res);
            if (res.data != null) {
                _this.ACListData = res.data;
                _this.Activitylist.numItems = _this.ACListData.length;
                // acContent: "测试1111111111"
                // acTitle: "测试1"
                // acType: 1
                // backField: "0"
                // creatTime: "2021-11-08T15:33:55"
                // endTime: "2021-11-13T00:00:00"
                // gType: 0
                // height: 1400
                // id: 1
                // isDel: false
                // isEnble: true
                // picUrl: null
                // startTime: "2021-11-11T00:00:00"
                // theight: 150
                // title: "测试"
                // titleContent: "测试1"
                // titleUrl: "/fordlc/wechat/202111081533553071.png"
                // twidth: 1000
                // type: 0
                // userIds: null
                // webUrl: null
                // width: 1000
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("獲取活動數據失敗！");
            }
        }).catch(function (err) {
            console.log("---err---", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("獲取活動數據失敗！");
        });
    };
    ActivityView.prototype.renderACList = function (index, item) {
        var _this = this;
        var go = item;
        var itemData = this.ACListData[index];
        //acType = 1:文字，2圖片
        if (itemData.acType == 1) {
            go.getController("acType").setSelectedIndex(1);
            go.getChild("acImg").asLoader.url = "http://182.61.6.67:81" + itemData.titleUrl;
            go.getChild("acTitle").asTextField.text = itemData.title;
            go.getChild("acCountent").asTextField.text = itemData.titleContent;
            go.getChild("acStartTime").asTextField.text = "開始時間：" + itemData.startTime;
            go.getChild("acEndTime").asTextField.text = "結束時間：" + itemData.endTime;
        }
        else if (itemData.acType == 2) {
            go.getController("acType").setSelectedIndex(0);
            go.getChild("acCImg").asLoader.url = "http://182.61.6.67:81" + itemData.titleUrl;
        }
        go.clearClick();
        go.onClick(function () {
            _this.onClickItem(itemData);
        });
    };
    return ActivityView;
}(fgui.GComponent));
exports.default = ActivityView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGFjdGl2aXR5XFxBY3Rpdml0eVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUVuRSw0RUFBdUU7QUFFdkUsMkZBQTBGO0FBQzFGLGdEQUEyQztBQUMzQzs7R0FFRztBQUNIO0lBQTBDLGdDQUFlO0lBQXpEO1FBQUEscUVBOEZDO1FBN0ZXLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQVUsRUFBRSxDQUFDOztJQTJGbkMsQ0FBQztJQXpGYSxrQ0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDeEIsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNNLDJCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU8sa0NBQVcsR0FBbkI7UUFBQSxpQkFpREM7UUFoREcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElB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QyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDcEY7UUFDRCxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTlGQSxBQThGQyxDQTlGeUMsSUFBSSxDQUFDLFVBQVUsR0E4RnhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0cic7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmUnO1xyXG5pbXBvcnQgSHR0cEhlbHBFeCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXgnO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbCc7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3QnO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gJy4uL0xvYmJ5Vmlld0N0cic7XHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5rS75YqoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eVZpZXcgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBBY3Rpdml0eWxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgQUNMaXN0RGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5BY3Rpdml0eWxpc3QgPSB0aGlzLmdldENoaWxkKFwiQWN0aXZpdHlsaXN0XCIpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLkFjdGl2aXR5bGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckFDTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShkYXRhOiBhbnkpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0FjdGl2aXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dhY3Rpdml0eURldGFpbHMoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldExpc3REYXRhKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSGlkZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExpc3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMuQWN0aXZpdHlsaXN0Lm51bUl0ZW1zID0gMDtcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwOi8vMTgyLjYxLjYuNjc6ODJcIiArIFwiL2FwaS9HYW1lL0FjdGl2aXR5TGlzdFwiOy8vQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgcGFnZWluZGV4OiAwLFxyXG4gICAgICAgICAgICBwYWdlc2l6ZTogMCxcclxuICAgICAgICAgICAgdXNlcmlkOiBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkLFxyXG4gICAgICAgICAgICBkYXRlc3RyaW5nOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1BY3Rpdml0eUxpc3QtLS1cIiwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQUNMaXN0RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY3Rpdml0eWxpc3QubnVtSXRlbXMgPSB0aGlzLkFDTGlzdERhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNDb250ZW50OiBcIua1i+ivlTExMTExMTExMTFcIlxyXG4gICAgICAgICAgICAgICAgLy8gYWNUaXRsZTogXCLmtYvor5UxXCJcclxuICAgICAgICAgICAgICAgIC8vIGFjVHlwZTogMVxyXG4gICAgICAgICAgICAgICAgLy8gYmFja0ZpZWxkOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRUaW1lOiBcIjIwMjEtMTEtMDhUMTU6MzM6NTVcIlxyXG4gICAgICAgICAgICAgICAgLy8gZW5kVGltZTogXCIyMDIxLTExLTEzVDAwOjAwOjAwXCJcclxuICAgICAgICAgICAgICAgIC8vIGdUeXBlOiAwXHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDE0MDBcclxuICAgICAgICAgICAgICAgIC8vIGlkOiAxXHJcbiAgICAgICAgICAgICAgICAvLyBpc0RlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGlzRW5ibGU6IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHBpY1VybDogbnVsbFxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnRUaW1lOiBcIjIwMjEtMTEtMTFUMDA6MDA6MDBcIlxyXG4gICAgICAgICAgICAgICAgLy8gdGhlaWdodDogMTUwXHJcbiAgICAgICAgICAgICAgICAvLyB0aXRsZTogXCLmtYvor5VcIlxyXG4gICAgICAgICAgICAgICAgLy8gdGl0bGVDb250ZW50OiBcIua1i+ivlTFcIlxyXG4gICAgICAgICAgICAgICAgLy8gdGl0bGVVcmw6IFwiL2ZvcmRsYy93ZWNoYXQvMjAyMTExMDgxNTMzNTUzMDcxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvLyB0d2lkdGg6IDEwMDBcclxuICAgICAgICAgICAgICAgIC8vIHR5cGU6IDBcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZHM6IG51bGxcclxuICAgICAgICAgICAgICAgIC8vIHdlYlVybDogbnVsbFxyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIueNsuWPlua0u+WLleaVuOaTmuWkseaVl++8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1lcnItLS1cIiwgZXJyKVxyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLnjbLlj5bmtLvli5Xmlbjmk5rlpLHmlZfvvIFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckFDTGlzdChpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgZ28gPSA8Zmd1aS5HQnV0dG9uPml0ZW07XHJcbiAgICAgICAgbGV0IGl0ZW1EYXRhID0gdGhpcy5BQ0xpc3REYXRhW2luZGV4XTtcclxuICAgICAgICAvL2FjVHlwZSA9IDE65paH5a2X77yMMuWclueJh1xyXG4gICAgICAgIGlmIChpdGVtRGF0YS5hY1R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwiYWNUeXBlXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYWNJbWdcIikuYXNMb2FkZXIudXJsID0gXCJodHRwOi8vMTgyLjYxLjYuNjc6ODFcIiArIGl0ZW1EYXRhLnRpdGxlVXJsO1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcImFjVGl0bGVcIikuYXNUZXh0RmllbGQudGV4dCA9IGl0ZW1EYXRhLnRpdGxlO1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcImFjQ291bnRlbnRcIikuYXNUZXh0RmllbGQudGV4dCA9IGl0ZW1EYXRhLnRpdGxlQ29udGVudDtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJhY1N0YXJ0VGltZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLplovlp4vmmYLplpPvvJpcIiArIGl0ZW1EYXRhLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJhY0VuZFRpbWVcIikuYXNUZXh0RmllbGQudGV4dCA9IFwi57WQ5p2f5pmC6ZaT77yaXCIgKyBpdGVtRGF0YS5lbmRUaW1lO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbURhdGEuYWNUeXBlID09IDIpIHtcclxuICAgICAgICAgICAgZ28uZ2V0Q29udHJvbGxlcihcImFjVHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcImFjQ0ltZ1wiKS5hc0xvYWRlci51cmwgPSBcImh0dHA6Ly8xODIuNjEuNi42Nzo4MVwiICsgaXRlbURhdGEudGl0bGVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdvLmNsZWFyQ2xpY2soKTtcclxuICAgICAgICBnby5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrSXRlbShpdGVtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=