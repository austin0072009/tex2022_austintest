
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/MyVipPrivilegeView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcTXlWaXBQcml2aWxlZ2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxrRUFBNkQ7QUFDN0QsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixtREFBOEM7QUFDOUMsZ0RBQTJDO0FBRTNDOzs7R0FHRztBQUNIO0lBQWdELHNDQUFRO0lBQXhEO1FBQUEscUVBdUtDO1FBNUpXLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDcEMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQzVDLFFBQVE7UUFDQSxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDOUMsUUFBUTtRQUNBLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUM1QyxXQUFXO1FBQ0gsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUsvQyxTQUFTO1FBQ0Qsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRTFDLFVBQVU7UUFDSCxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDMUMsVUFBVTtRQUNILGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUN4QyxjQUFjO1FBQ04sbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQzlDLFlBQVk7UUFDSixrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDN0MsVUFBVTtRQUNGLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDakQsVUFBVTtRQUNGLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUMvQyxXQUFXO1FBQ0gsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBR3BDLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBQzlCLGdCQUFVLEdBQWlCLElBQUksQ0FBQzs7SUF3SDVDLENBQUM7SUF0S0csc0JBQWMsbURBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywyQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNkNBQWE7YUFBM0I7WUFDSSxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQXVDRCxrREFBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDekIsZUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakQsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0Msc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdELDRDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9DQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hDLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEMsZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLG1CQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ1QsdUNBQVUsR0FBakI7UUFDSSxJQUFJLEtBQUssR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEMsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0UsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEM7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNuQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVNLHlDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDTSx1Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsVUFBVTtJQUNILHlDQUFZLEdBQW5CO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsVUFBVTtJQUNILHdDQUFXLEdBQWxCO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ1osK0NBQWtCLEdBQXpCO1FBQ0ksSUFBSSxTQUFTLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLEVBQUUsR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRTlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUxRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDaEQ7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqRDtJQUVMLENBQUM7SUFLRCxpQ0FBSSxHQUFKO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ00sK0NBQWtCLEdBQXpCO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLGlDQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQXZLQSxBQXVLQyxDQXZLK0Msa0JBQVEsR0F1S3ZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IE5hdGl2ZU1ldGhvZCBmcm9tIFwiLi4vLi4vTmF0aXZlTWV0aG9kXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiB2aXAg54m55qyKXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlWaXBQcml2aWxlZ2VWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInZpcHdpblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX3ZpcHRxQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXJ2aWNlMTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl92aXBzaG9wOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV92aXBMZXZlbDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfdXNlck5hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirnu4/pqowgKi9cclxuICAgIHByaXZhdGUgdWlfRXhwZXJpZW5jZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKuenr+WIhiAqL1xyXG4gICAgcHJpdmF0ZSB1aV9JbnRlZ3JhbDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKnZpcOips+aDhSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fdmlwZGVyYWlsczogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIC8qKumgreWDjyAqL1xyXG4gICAgcHJpdmF0ZSBoZWFkTG9hZGVyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBsZXZlbENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIC8qKuWktOWDj+ahhiAqL1xyXG4gICAgcHJpdmF0ZSB1aV9oZWFkZnJhbWU6IGZndWkuR0xvYWRlciA9IG51bGw7XHJcblxyXG4gICAgLyoq5pmL57qn56S86YeRICovXHJcbiAgICBwdWJsaWMgdWlfYnRuX2ppbmlqaTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIC8qKuavj+aciOekvOmHkSAqL1xyXG4gICAgcHVibGljIHVpX2J0bl9teWxqOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq5q+P5pel5YWN6LS55o+Q546w5qyh5pWwICovXHJcbiAgICBwcml2YXRlIHVpX2ZyZWVUeEdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirljZXnrJTmj5DnjrDph5Hpop0gKi9cclxuICAgIHByaXZhdGUgdWlfb25lVHhHb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5pmL57qn56S86YeRICovXHJcbiAgICBwcml2YXRlIHVpX1Byb21vdGlvbkdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirmr4/mnIjnpLzph5EgKi9cclxuICAgIHByaXZhdGUgdWlfbW9udGhseUdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKip2aXDmipjmiaMgKi9cclxuICAgIHByaXZhdGUgdWlfZGlzY291bnQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlfdmlwdHE6IGZndWkuR0xvYWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2Rxdmlweng6IGZndWkuR0xvYWRlciA9IG51bGw7XHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl92aXB0cUJyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXJ2aWNlMS5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgVUlVdGlsLmtlZnVGdW5jdGlvbihMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5vcGVuV2Vic2l0ZS5iaW5kKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3KSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmhlYWRMb2FkZXIgPSB0aGlzLmdldENoaWxkKFwiaGVhZC5uMFwiKS5hc0xvYWRlcjtcclxuICAgICAgICB0aGlzLmxldmVsQ29udHJvbGxlciA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwibGV2ZWxcIik7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX3ZpcHNob3Aub25DbGljayh0aGlzLnNob3dTaG9wcGluZ1ZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3ZpcGRlcmFpbHMub25DbGljayh0aGlzLnNob3dWaXBkZXJhaWxzVmlldywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX2ppbmlqaS5vbkNsaWNrKHRoaXMucmVjZWl2ZUppbmppLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teWxqLm9uQ2xpY2sodGhpcy5yZWNlaXZlTXlsaiwgdGhpcyk7XHJcblxyXG4gICAgICAgIE5hdGl2ZU1ldGhvZC5zZXRVcmxCeUxhbmd1YWdlKHRoaXMudWlfdmlwdHEpO1xyXG4gICAgICAgIE5hdGl2ZU1ldGhvZC5zZXRVcmxCeUxhbmd1YWdlKHRoaXMudWlfZHF2aXB6eCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcGxheSA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbDtcclxuICAgICAgICB0aGlzLnVpX3VzZXJOYW1lLnRleHQgPSBwbGF5Ll9uO1xyXG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy5oZWFkTG9hZGVyLCBwbGF5LndlY2hhdC53aWNvbik7XHJcbiAgICAgICAgaWYgKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRGcmFtZVwiXSkge1xyXG4gICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfaGVhZGZyYW1lLCBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkRnJhbWVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bnmoQgdmlwIOS/oeaBryAqL1xyXG4gICAgcHVibGljIGhhbmRsZURhdGEoKSB7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LkdldExldihtb2RlbC52aXBJbmZvLmN1cnJFeHApO1xyXG4gICAgICAgIGxldCBsdiA9IG1vZGVsLnZpcExldmVsO1xyXG4gICAgICAgIHRoaXMudWlfdmlwTGV2ZWwuc2V0VmFyKFwibGV2ZWxcIiwgbHYgKyAnJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleChsdik7XHJcblxyXG4gICAgICAgIHRoaXMudWlfRXhwZXJpZW5jZS5zZXRWYXIoXCJleHBcIiwgbW9kZWwudmlwSW5mby5jdXJyRXhwICsgJycpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfSW50ZWdyYWwuc2V0VmFyKFwiaW50ZXJcIiwgbW9kZWwudmlwSW5mby5jdXJyU2NvcmUgKyAnJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgaWYgKG1vZGVsLnZpcEluZm8uVXBBd2FyZFN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX2ppbmlqaS5nZXRDb250cm9sbGVyKFwiY29sb3JcIikuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICAgICAgdGhpcy51aV9idG5famluaWppLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX2ppbmlqaS5nZXRDb250cm9sbGVyKFwiY29sb3JcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgdGhpcy51aV9idG5famluaWppLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGVsLnZpcEluZm8uTW9udGhBd2FyZFN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX215bGouZ2V0Q29udHJvbGxlcihcImNvbG9yXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX215bGouZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aV9idG5fbXlsai5nZXRDb250cm9sbGVyKFwiY29sb3JcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgdGhpcy51aV9idG5fbXlsai5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRidG5qaW5pamkoKSB7XHJcbiAgICAgICAgdGhpcy51aV9idG5famluaWppLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9qaW5pamkuZ2V0Q29udHJvbGxlcihcImNvbG9yXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0YnRubXlsaigpIHtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teWxqLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teWxqLmdldENvbnRyb2xsZXIoXCJjb2xvclwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumihuWPluaZi+e6pyAqL1xyXG4gICAgcHVibGljIHJlY2VpdmVKaW5qaSgpIHtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfcmVjZWl2ZXVwYXdhcmQoKTtcclxuICAgIH1cclxuICAgIC8qKumihuWPluavj+aciCAqL1xyXG4gICAgcHVibGljIHJlY2VpdmVNeWxqKCkge1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19yZWNlaXZlbW9udGhhd2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuagueaTmumFjee9rumhr+ekuiB2aXAg5pW45pOaICovXHJcbiAgICBwdWJsaWMgaGFuZGxlRGF0YUJ5Q29uZmlnKCkge1xyXG4gICAgICAgIGxldCB2aXBDb25maWcgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwQ29uZmlnO1xyXG4gICAgICAgIGxldCBsdiA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC52aXBMZXZlbDtcclxuXHJcbiAgICAgICAgdGhpcy51aV9mcmVlVHhHb2xkLnRleHQgPSB2aXBDb25maWcuRnJlZVdpdGhkcmF3VGltZXNbbHZdICsgJyc7XHJcbiAgICAgICAgdGhpcy51aV9vbmVUeEdvbGQudGV4dCA9IHZpcENvbmZpZy5XaXRoZHJhd0xpbWl0W2x2XSArICcnO1xyXG4gICAgICAgIHRoaXMudWlfUHJvbW90aW9uR29sZC50ZXh0ID0gdmlwQ29uZmlnLlVwUmV3YXJkW2x2XSArICcnO1xyXG4gICAgICAgIHRoaXMudWlfbW9udGhseUdvbGQudGV4dCA9IHZpcENvbmZpZy5Nb250aFJld2FyZFtsdl0gKyAnJztcclxuXHJcbiAgICAgICAgaWYgKHZpcENvbmZpZy5EaXNjb3VudFtsdl0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpX2Rpc2NvdW50LnNldFZhcihcInprXCIsICfml6AnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy51aV9kaXNjb3VudC5zZXRWYXIoXCJ6XCIsICcnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVpX2Rpc2NvdW50LnNldFZhcihcInprXCIsIHZpcENvbmZpZy5EaXNjb3VudFtsdl0gKyAnJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfZGlzY291bnQuc2V0VmFyKFwielwiLCAn5oqYJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlWaXBQcml2aWxlZ2VWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2hvcHBpbmdWaWV3KCkge1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dWaXBTaG9wcGluZ1ZpZXcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93VmlwZGVyYWlsc1ZpZXcoKSB7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1ZpcERlcmFpbHNWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YUJ5Q29uZmlnKCk7XHJcbiAgICB9XHJcbn0iXX0=