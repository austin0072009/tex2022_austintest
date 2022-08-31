"use strict";
cc._RF.push(module, 'adde3oTYIRADKnNSgb///oR', 'MyVipPrivilegeView');
// GameHall/script/Lobby/vip/MyVipPrivilegeView.ts

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
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 特權
 *
 */
var MyVipPrivilegeView = /** @class */ (function (_super) {
    __extends(MyVipPrivilegeView, _super);
    function MyVipPrivilegeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_viptqBreak = null;
        _this.ui_btn_service1 = null;
        _this.ui_btn_vipshop = null;
        _this.ui_vipLevel = null;
        _this.ui_userName = null;
        /**经验 */
        _this.ui_Experience = null;
        /**积分 */
        _this.ui_Integral = null;
        /**vip詳情 */
        _this.ui_btn_vipderails = null;
        /**头像框 */
        _this.ui_headframe = null;
        /**晋级礼金 */
        _this.ui_btn_jiniji = null;
        /**每月礼金 */
        _this.ui_btn_mylj = null;
        /**每日免费提现次数 */
        _this.ui_freeTxGold = null;
        /**单笔提现金额 */
        _this.ui_oneTxGold = null;
        /**晋级礼金 */
        _this.ui_PromotionGold = null;
        /**每月礼金 */
        _this.ui_monthlyGold = null;
        /**vip折扣 */
        _this.ui_discount = null;
        _this.ui_viptq = null;
        _this.ui_dqvipzx = null;
        return _this;
    }
    Object.defineProperty(MyVipPrivilegeView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyVipPrivilegeView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyVipPrivilegeView.prototype, "componentName", {
        get: function () {
            return "vipwin";
        },
        enumerable: false,
        configurable: true
    });
    MyVipPrivilegeView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_viptqBreak.onClick(this.Hide, this);
        this.ui_btn_service1.onClick(function () {
            UIUtil_1.UIUtil.kefuFunction(LobbyViewCtr_1.default.instance.view.openWebsite.bind(LobbyViewCtr_1.default.instance.view));
        });
        this.headLoader = this.getChild("head.n0").asLoader;
        this.levelController = this.fguiComponent.getController("level");
        this.ui_btn_vipshop.onClick(this.showShoppingView, this);
        this.ui_btn_vipderails.onClick(this.showVipderailsView, this);
        this.ui_btn_jiniji.onClick(this.receiveJinji, this);
        this.ui_btn_mylj.onClick(this.receiveMylj, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_viptq);
        NativeMethod_1.default.setUrlByLanguage(this.ui_dqvipzx);
    };
    MyVipPrivilegeView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    MyVipPrivilegeView.prototype.setData = function () {
        var play = AppConst_1.AppConst.mPlayerModel;
        this.ui_userName.text = play._n;
        UIUtil_1.UIUtil.loadImage(this.headLoader, play.wechat.wicon);
        if (AppConst_1.AppConst.mPlayerModel["headFrame"]) {
            UIUtil_1.UIUtil.loadImage(this.ui_headframe, AppConst_1.AppConst.mPlayerModel["headFrame"]);
        }
    };
    /**获取的 vip 信息 */
    MyVipPrivilegeView.prototype.handleData = function () {
        var model = LobbyViewCtr_1.default.instance.Model;
        LobbyViewCtr_1.default.instance.view.GetLev(model.vipInfo.currExp);
        var lv = model.vipLevel;
        this.ui_vipLevel.setVar("level", lv + '').flushVars();
        this.levelController.setSelectedIndex(lv);
        this.ui_Experience.setVar("exp", model.vipInfo.currExp + '').flushVars();
        this.ui_Integral.setVar("inter", model.vipInfo.currScore + '').flushVars();
        if (model.vipInfo.UpAwardStatus == 0) {
            this.ui_btn_jiniji.getController("color").setSelectedIndex(1);
            this.ui_btn_jiniji.enabled = true;
        }
        else {
            this.ui_btn_jiniji.getController("color").setSelectedIndex(0);
            this.ui_btn_jiniji.enabled = false;
        }
        if (model.vipInfo.MonthAwardStatus == 0) {
            this.ui_btn_mylj.getController("color").setSelectedIndex(1);
            this.ui_btn_mylj.enabled = true;
        }
        else {
            this.ui_btn_mylj.getController("color").setSelectedIndex(0);
            this.ui_btn_mylj.enabled = false;
        }
    };
    MyVipPrivilegeView.prototype.setbtnjiniji = function () {
        this.ui_btn_jiniji.enabled = false;
        this.ui_btn_jiniji.getController("color").setSelectedIndex(0);
    };
    MyVipPrivilegeView.prototype.setbtnmylj = function () {
        this.ui_btn_mylj.enabled = false;
        this.ui_btn_mylj.getController("color").setSelectedIndex(0);
    };
    /**领取晋级 */
    MyVipPrivilegeView.prototype.receiveJinji = function () {
        LobbyViewCtr_1.default.instance.cs_receiveupaward();
    };
    /**领取每月 */
    MyVipPrivilegeView.prototype.receiveMylj = function () {
        LobbyViewCtr_1.default.instance.cs_receivemonthaward();
    };
    /**根據配置顯示 vip 數據 */
    MyVipPrivilegeView.prototype.handleDataByConfig = function () {
        var vipConfig = LobbyViewCtr_1.default.instance.Model.vipConfig;
        var lv = LobbyViewCtr_1.default.instance.Model.vipLevel;
        this.ui_freeTxGold.text = vipConfig.FreeWithdrawTimes[lv] + '';
        this.ui_oneTxGold.text = vipConfig.WithdrawLimit[lv] + '';
        this.ui_PromotionGold.text = vipConfig.UpReward[lv] + '';
        this.ui_monthlyGold.text = vipConfig.MonthReward[lv] + '';
        if (vipConfig.Discount[lv] == 0) {
            this.ui_discount.setVar("zk", '无').flushVars();
            this.ui_discount.setVar("z", '').flushVars();
        }
        else {
            this.ui_discount.setVar("zk", vipConfig.Discount[lv] + '').flushVars();
            this.ui_discount.setVar("z", '折').flushVars();
        }
    };
    MyVipPrivilegeView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('MyVipPrivilegeView', "button");
        _super.prototype.Hide.call(this);
    };
    MyVipPrivilegeView.prototype.showShoppingView = function () {
        LobbyViewCtr_1.default.instance.view.showVipShoppingView();
    };
    MyVipPrivilegeView.prototype.showVipderailsView = function () {
        LobbyViewCtr_1.default.instance.view.showVipDerailsView();
    };
    MyVipPrivilegeView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.setData();
        this.handleData();
        this.handleDataByConfig();
    };
    return MyVipPrivilegeView;
}(ViewBase_1.default));
exports.default = MyVipPrivilegeView;

cc._RF.pop();