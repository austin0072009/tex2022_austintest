"use strict";
cc._RF.push(module, '2cc31Q7fSdKfqUgMnwZ1cQQ', 'VipDerailsView');
// GameHall/script/Lobby/vip/VipDerailsView.ts

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
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 详情
 *
 */
var VipDerailsView = /** @class */ (function (_super) {
    __extends(VipDerailsView, _super);
    function VipDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_derailsBreak = null;
        /**积分 */
        _this.ui_integral1 = null;
        _this.ui_integral2 = null;
        _this.ui_integral3 = null;
        _this.ui_integral4 = null;
        _this.ui_integral5 = null;
        _this.ui_integral6 = null;
        _this.ui_integral7 = null;
        _this.ui_integral8 = null;
        _this.ui_integral9 = null;
        /**
         * 免費提款次數
         */
        _this.ui_free1 = null;
        _this.ui_free2 = null;
        _this.ui_free3 = null;
        _this.ui_free4 = null;
        _this.ui_free5 = null;
        _this.ui_free6 = null;
        _this.ui_free7 = null;
        _this.ui_free8 = null;
        _this.ui_free9 = null;
        /**單筆提現金額 */
        _this.ui_onetx1 = null;
        _this.ui_onetx2 = null;
        _this.ui_onetx3 = null;
        _this.ui_onetx4 = null;
        _this.ui_onetx5 = null;
        _this.ui_onetx6 = null;
        _this.ui_onetx7 = null;
        _this.ui_onetx8 = null;
        _this.ui_onetx9 = null;
        /**晉級禮金 */
        _this.ui_jjgold1 = null;
        _this.ui_jjgold2 = null;
        _this.ui_jjgold3 = null;
        _this.ui_jjgold4 = null;
        _this.ui_jjgold5 = null;
        _this.ui_jjgold6 = null;
        _this.ui_jjgold7 = null;
        _this.ui_jjgold8 = null;
        _this.ui_jjgold9 = null;
        /**每月禮金 */
        _this.ui_mygold1 = null;
        _this.ui_mygold2 = null;
        _this.ui_mygold3 = null;
        _this.ui_mygold4 = null;
        _this.ui_mygold5 = null;
        _this.ui_mygold6 = null;
        _this.ui_mygold7 = null;
        _this.ui_mygold8 = null;
        _this.ui_mygold9 = null;
        _this.ui_viplevelimage = null;
        _this.ui_viptk = null;
        return _this;
    }
    Object.defineProperty(VipDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipDerailsView.prototype, "componentName", {
        get: function () {
            return "vipDerails";
        },
        enumerable: false,
        configurable: true
    });
    VipDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_derailsBreak.onClick(this.Hide, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_viplevelimage);
        NativeMethod_1.default.setUrlByLanguage(this.ui_viptk);
    };
    VipDerailsView.prototype.OnLoadCompleted = function () {
        this.handleData();
        this.Show();
    };
    VipDerailsView.prototype.handleData = function () {
        var vipConfig = LobbyViewCtr_1.default.instance.Model.vipConfig;
        if (!vipConfig || vipConfig.UpExps.length <= 0) {
            return;
        }
        for (var i = 0; i < 10; i++) {
            if (i == 0) {
                continue;
            }
            this["ui_integral" + i].text = vipConfig.UpExps[i] + '';
            this["ui_free" + i].text = vipConfig.FreeWithdrawTimes[i] + '';
            this["ui_onetx" + i].text = vipConfig.WithdrawLimit[i] + '';
            this["ui_jjgold" + i].text = vipConfig.UpReward[i] + '';
            this["ui_mygold" + i].text = vipConfig.MonthReward[i] + '';
        }
    };
    VipDerailsView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipDerailsView', "button");
        _super.prototype.Hide.call(this);
    };
    VipDerailsView.prototype.Show = function () {
        _super.prototype.Show.call(this);
    };
    return VipDerailsView;
}(ViewBase_1.default));
exports.default = VipDerailsView;

cc._RF.pop();