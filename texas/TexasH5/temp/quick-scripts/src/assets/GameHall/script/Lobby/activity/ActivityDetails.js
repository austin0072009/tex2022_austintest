"use strict";
cc._RF.push(module, '12059dPaI9NaY2/xlZw3xqA', 'ActivityDetails');
// GameHall/script/Lobby/activity/ActivityDetails.ts

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
 * @description 活动xiangqing
 */
var ActivityDetails = /** @class */ (function (_super) {
    __extends(ActivityDetails, _super);
    function ActivityDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_actbreak = null;
        _this.ui_actgold = null;
        _this.ui_btn_actaddGold = null;
        _this.ui_acImage = null;
        _this.ui_acTitle = null;
        _this.ui_acContent = null;
        _this.ui_acStartTime = null;
        _this.ui_acEndTime = null;
        _this.data = null;
        _this.onLoadEnd = false;
        return _this;
    }
    Object.defineProperty(ActivityDetails.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivityDetails.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActivityDetails.prototype, "componentName", {
        get: function () {
            return "activityDetails";
        },
        enumerable: false,
        configurable: true
    });
    ActivityDetails.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    ActivityDetails.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    ActivityDetails.prototype.AutoSetGoProperty = function () { };
    ActivityDetails.prototype.MyStart = function (_data) {
        if (_data === void 0) { _data = null; }
        this.data = _data;
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    ActivityDetails.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.ui_btn_actbreak.onClick(this.HideView, this);
        this.ui_btn_actaddGold.onClick(this.showTopup, this);
        this.Show();
    };
    ActivityDetails.prototype.Show = function () {
        this.ui_actgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
        _super.prototype.Show.call(this);
        this.loadContent();
    };
    ActivityDetails.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    ActivityDetails.prototype.HideView = function () {
        AudioManager_1.AudioManager.Singleton.play('ActivityDetails', "button");
        this.Hide();
    };
    ActivityDetails.prototype.showTopup = function () {
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    ActivityDetails.prototype.loadContent = function () {
        if (this.data == null)
            return;
        //.acType == 1文字，2图片
        if (this.data.acType == 1) {
            this.fguiComponent.getController("acType").setSelectedIndex(0);
            this.ui_acTitle.text = this.data.acTitle;
            this.ui_acContent.text = this.data.acContent;
            this.ui_acStartTime.text = "開始時間：" + this.data.startTime;
            this.ui_acEndTime.text = "結束時間：" + this.data.endTime;
        }
        else {
            this.fguiComponent.getController("acType").setSelectedIndex(1);
            this.ui_acImage.url = "http://182.61.6.67:81" + this.data.picUrl;
        }
    };
    return ActivityDetails;
}(ViewBase_1.default));
exports.default = ActivityDetails;

cc._RF.pop();