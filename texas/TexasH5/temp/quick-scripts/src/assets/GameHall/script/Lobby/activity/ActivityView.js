"use strict";
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