
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipShoppingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b86dcz8lZhB26FHDLBOOrAo', 'VipShoppingView');
// GameHall/script/Lobby/vip/VipShoppingView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 商城
 *
 */
var VipShoppingView = /** @class */ (function (_super) {
    __extends(VipShoppingView, _super);
    function VipShoppingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_shoppingBreak = null;
        /**兑换记录 */
        _this.ui_btn_exchangLog = null;
        /**设置地址 */
        _this.ui_btn_setAddress = null;
        /**当前的积分 */
        _this.ui_nowNumTip = null;
        /**原价的积分 */
        _this.ui_nowintegral = null;
        /**当前折扣 */
        _this.ui_nowdiscount = null;
        /**下拉 */
        _this.ui_btn_goods = null;
        /**物品列表 */
        _this.ui_goodsList = null;
        _this.ui_btn_exchange = null;
        _this.ui_stips = null;
        _this.ui_btn_tipqx = null;
        _this.ui_btn_tipqr = null;
        /**积分 */
        _this.ui_integralNum = null;
        /**物品名 */
        _this.ui_goodsName = null;
        /**订单号 */
        _this.ui_orderNum = null;
        _this.goodsConfig = [];
        /**物品数据 */
        _this.goodsListData = [];
        _this.ui_vipshopping = null;
        return _this;
    }
    Object.defineProperty(VipShoppingView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipShoppingView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipShoppingView.prototype, "componentName", {
        get: function () {
            return "vipShopping";
        },
        enumerable: false,
        configurable: true
    });
    VipShoppingView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_shoppingBreak.onClick(this.Hide, this);
        this.ui_btn_exchangLog.onClick(this.showExchangeLog, this);
        this.ui_btn_setAddress.onClick(this.showSetAddress, this);
        this.ui_btn_exchange.onClick(this.exchangeGoods, this);
        this.ui_goodsList.setVirtual();
        this.ui_goodsList.itemRenderer = this.renderListItem.bind(this);
        this.ui_goodsList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.ui_btn_goods.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this.goodsListData = this.goodsConfig.slice(0);
        this.ui_goodsList.numItems = this.goodsListData.length;
        this.tipController = this.ui_stips.getController("c1");
        this.ui_btn_tipqx.onClick(this.colseTip, this);
        this.ui_btn_tipqr.onClick(this.qrExchange, this);
        // NativeMethod.setUrlByLanguage(this.ui_vipshopping["_contentItem"].name, this.ui_vipshopping);
    };
    VipShoppingView.prototype.OnLoadCompleted = function () {
        this.GetaddressInfo();
        this.Show();
    };
    VipShoppingView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        var name = item.getChild("name").asTextField; //物品名
        var discount = item.getChild("discount").asTextField; //折扣
        var oldSoucre = item.getChild("oldSoucre").asTextField; //原价
        var nowSoucre = item.getChild("nowSoucre").asTextField; // 现价
        if (this.discount == 0) {
            discount.visible = false;
        }
        else {
            discount.visible = true;
            discount.setVar("zk", this.discount + "折").flushVars();
        }
        oldSoucre.setVar("jf", this.goodsListData[index].integral + '').flushVars();
        var nowScore = this.goodsListData[index].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
        nowSoucre.setVar("zf", nowScore.toFixed(0)).flushVars();
        var goodsLoader = item.getChild("goodsLoader").asLoader; //商品的loader
        name.text = this.goodsListData[index].name;
        item.name = index + '';
        UIUtil_1.UIUtil.loadShopImage(goodsLoader, this.goodsListData[index].imgPic);
    };
    VipShoppingView.prototype.onClickItem = function (item) {
        this.selectGoods = item.name;
    };
    /**下拉状态改变 */
    VipShoppingView.prototype.onChanged = function () {
        this.ui_goodsList.selectNone();
        this.selectGoods = null;
        var index = this.ui_btn_goods.selectedIndex;
        this.goodsListData = [];
        cc.log("数据--------------", this.goodsConfig);
        if (index == 0) { //全部
            this.goodsListData = this.goodsConfig.slice(0);
        }
        else if (index == 1) { //游戏
            for (var i = 0; i < this.goodsConfig.length; i++) {
                if (this.goodsConfig[i].type == 0) {
                    this.goodsListData.push(this.goodsConfig[i]);
                }
            }
        }
        else if (index == 2) { //实物
            for (var i = 0; i < this.goodsConfig.length; i++) {
                if (this.goodsConfig[i].type == 1) {
                    this.goodsListData.push(this.goodsConfig[i]);
                }
            }
        }
        this.ui_goodsList.numItems = this.goodsListData.length;
    };
    VipShoppingView.prototype.showExchangeLog = function () {
        LobbyViewCtr_1.default.instance.view.showVipExchangeLogView();
    };
    VipShoppingView.prototype.showSetAddress = function () {
        LobbyViewCtr_1.default.instance.view.showVipExidAdressView();
    };
    VipShoppingView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipShoppingView', "button");
        _super.prototype.Hide.call(this);
    };
    VipShoppingView.prototype.handleData = function () {
        var model = LobbyViewCtr_1.default.instance.Model;
        this.ui_nowintegral.setVar("integral", model.vipInfo.currScore + '').flushVars();
        var vipConfig = model.vipConfig;
        var lv = model.vipLevel;
        this.discount = vipConfig.Discount[lv];
        if (this.discount == 0) {
            this.ui_nowdiscount.setVar("zk", '无').flushVars();
        }
        else {
            this.ui_nowdiscount.setVar("zk", this.discount + '折').flushVars();
        }
    };
    VipShoppingView.prototype.Show = function () {
        var _this = this;
        _super.prototype.Show.call(this);
        this.ui_goodsList.selectNone();
        this.selectGoods = null;
        this.handleData();
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetitemmanagerInfo";
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            cc.log("=================", res);
            if (res.code == 1) {
                _this.goodsConfig = res.data.data;
                _this.onChanged();
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取商品失败");
            }
        })
            .catch(function () {
            // CommonCtr.instance.ShowTipLabel("获取商品失败");
        });
    };
    VipShoppingView.prototype.colseTip = function () {
        this.ui_stips.visible = false;
    };
    VipShoppingView.prototype.qrExchange = function () {
        this.ui_stips.visible = false;
        if (this.tipController.selectedIndex == 0) {
            if (this.goodsListData[this.selectGoods].type == 0) { //游戲物品
                this.sendExchangeGoods();
            }
            else { //實物 要填寫地址
                if (this.address) {
                    //跳確認地址
                    LobbyViewCtr_1.default.instance.view.showVipConfirmAdressView();
                    //跳确认订单
                    // LobbyViewCtr.instance.view.showVipConfirmOrderView();
                }
                else {
                    //跳編輯地址
                    LobbyViewCtr_1.default.instance.view.showVipExidAdressView();
                }
            }
        }
    };
    VipShoppingView.prototype.setTipData = function () {
        var nowScore = this.goodsListData[this.selectGoods].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
        this.ui_nowNumTip.setVar("yj", nowScore.toFixed(0)).flushVars();
        this.ui_integralNum.setVar("jf", this.goodsListData[this.selectGoods].integral + '').flushVars();
        this.ui_goodsName.setVar("name", this.goodsListData[this.selectGoods].name).flushVars();
    };
    /**获取当前选择的物品信息 */
    VipShoppingView.prototype.getSelectInfo = function () {
        return { info: this.goodsListData[this.selectGoods], address: this.address };
    };
    /**兑换物品 */
    VipShoppingView.prototype.exchangeGoods = function () {
        if (this.selectGoods >= 0 && this.selectGoods != null) {
            var currScore = LobbyViewCtr_1.default.instance.Model.vipInfo.currScore;
            var nowScore = this.goodsListData[this.selectGoods].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
            nowScore = +nowScore.toFixed(0);
            console.log("currScore == ", currScore);
            console.log("nowScore == ", nowScore);
            if (currScore < nowScore) {
                this.tipController.setSelectedIndex(1);
                this.ui_stips.visible = true;
                return;
            }
            this.tipController.setSelectedIndex(0);
            this.setTipData();
            this.ui_stips.visible = true;
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請選擇兌換的物品");
        }
    };
    /**发送兑换 */
    VipShoppingView.prototype.sendExchangeGoods = function () {
        var _this = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Additemorderlog";
        var params = {
            UserId: AppConst_1.AppConst.mPlayerModel.userid,
            Viplevel: LobbyViewCtr_1.default.instance.Model.vipLevel,
            UserName: AppConst_1.AppConst.mPlayerModel._n,
            scores: LobbyViewCtr_1.default.instance.Model.vipInfo.currScore,
            ItemName: this.goodsListData[this.selectGoods].name,
            ItemScores: this.goodsListData[this.selectGoods].integral,
            Type: this.goodsListData[this.selectGoods].type,
            Address: this.address,
        };
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx_1.default.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(function (response) {
            cc.log("-----------兌換---", response);
            fgui.GRoot.inst.closeModalWait();
            if (response.code == 1) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(response.message);
                LobbyViewCtr_1.default.instance.Model.vipInfo.currScore -= _this.goodsListData[_this.selectGoods].integral * (_this.discount == 0 ? 1 : _this.discount / 10);
                var nowscore = LobbyViewCtr_1.default.instance.Model.vipInfo.currScore.toFixed(0);
                _this.ui_nowintegral.setVar("integral", nowscore).flushVars();
                if (LobbyViewCtr_1.default.instance.view.myVipPrivilegeView) {
                    LobbyViewCtr_1.default.instance.view.myVipPrivilegeView.handleData();
                }
                if (LobbyViewCtr_1.default.instance.view.vipConfirmOrderView) {
                    LobbyViewCtr_1.default.instance.view.vipConfirmOrderView.showTip(response.data[0]);
                }
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(response.message);
            }
        })
            .catch(function (err) {
            console.log("---catch---", err);
            fgui.GRoot.inst.closeModalWait();
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("兌換失敗");
        });
    };
    /**獲取收穫地址 */
    VipShoppingView.prototype.GetaddressInfo = function () {
        var _this = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetaddressInfo" + ("?userid=" + AppConst_1.AppConst.mPlayerModel.userid);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            cc.log("========收货地址==========", res);
            if (res.code == 1) {
                _this.addressInfo = res.data;
                if (res.data != "") {
                    _this.address = res.data.address;
                    LobbyViewCtr_1.default.instance.Model.vipAddress = res.data.address;
                }
            }
        })
            .catch(function () {
        });
    };
    return VipShoppingView;
}(ViewBase_1.default));
exports.default = VipShoppingView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwU2hvcHBpbmdWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsa0VBQTZEO0FBQzdELDRFQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUNyRSxnREFBMkM7QUFFM0M7OztHQUdHO0FBQ0g7SUFBNkMsbUNBQVE7SUFBckQ7UUFBQSxxRUF3VEM7UUE3U1csMEJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUNsRCxVQUFVO1FBQ0YsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUMvQyxVQUFVO1FBQ0YsdUJBQWlCLEdBQWlCLElBQUksQ0FBQztRQUMvQyxXQUFXO1FBQ0gsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQzdDLFdBQVc7UUFDSCxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDL0MsVUFBVTtRQUNGLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUMvQyxRQUFRO1FBQ0Esa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBQzVDLFVBQVU7UUFDRixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUVoQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFJckMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUMxQyxRQUFRO1FBQ0Esb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQy9DLFNBQVM7UUFDRCxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDN0MsU0FBUztRQUNELGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUlwQyxpQkFBVyxHQUF1RSxFQUFFLENBQUE7UUFFNUYsVUFBVTtRQUNGLG1CQUFhLEdBQXVFLEVBQUUsQ0FBQztRQVV2RixvQkFBYyxHQUFpQixJQUFJLENB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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiB2aXAg5ZWG5Z+OXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlwU2hvcHBpbmdWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInZpcFNob3BwaW5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fc2hvcHBpbmdCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIC8qKuWFkeaNouiusOW9lSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fZXhjaGFuZ0xvZzogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIC8qKuiuvue9ruWcsOWdgCAqL1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fc2V0QWRkcmVzczogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIC8qKuW9k+WJjeeahOenr+WIhiAqL1xyXG4gICAgcHJpdmF0ZSB1aV9ub3dOdW1UaXA6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirljp/ku7fnmoTnp6/liIYgKi9cclxuICAgIHByaXZhdGUgdWlfbm93aW50ZWdyYWw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirlvZPliY3mipjmiaMgKi9cclxuICAgIHByaXZhdGUgdWlfbm93ZGlzY291bnQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirkuIvmi4kgKi9cclxuICAgIHByaXZhdGUgdWlfYnRuX2dvb2RzOiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XHJcbiAgICAvKirnianlk4HliJfooaggKi9cclxuICAgIHByaXZhdGUgdWlfZ29vZHNMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9leGNoYW5nZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlfc3RpcHM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl90aXBxeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3RpcHFyOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq56ev5YiGICovXHJcbiAgICBwcml2YXRlIHVpX2ludGVncmFsTnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq54mp5ZOB5ZCNICovXHJcbiAgICBwcml2YXRlIHVpX2dvb2RzTmFtZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKuiuouWNleWPtyAqL1xyXG4gICAgcHJpdmF0ZSB1aV9vcmRlck51bTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRpcENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIGdvb2RzQ29uZmlnOiB7IG5hbWU6IHN0cmluZywgdHlwZTogbnVtYmVyLCBpbWdQaWM6IHN0cmluZywgaW50ZWdyYWw6IG51bWJlciB9W10gPSBbXVxyXG5cclxuICAgIC8qKueJqeWTgeaVsOaNriAqL1xyXG4gICAgcHJpdmF0ZSBnb29kc0xpc3REYXRhOiB7IG5hbWU6IHN0cmluZywgdHlwZTogbnVtYmVyLCBpbWdQaWM6IHN0cmluZywgaW50ZWdyYWw6IG51bWJlciB9W10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0R29vZHM7XHJcblxyXG4gICAgLyoq5pS26LSn5Zyw5Z2AICovXHJcbiAgICBwdWJsaWMgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGFkZHJlc3NJbmZvOiB7IGFkZHJlc3M6IHN0cmluZywgdXNlcklkOiBudW1iZXIsIGlkOiBudW1iZXIgfTtcclxuICAgIC8qKuW9k+WJjeaKmOaJoyAqL1xyXG4gICAgcHJpdmF0ZSBkaXNjb3VudDogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpX3ZpcHNob3BwaW5nOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc2hvcHBpbmdCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fZXhjaGFuZ0xvZy5vbkNsaWNrKHRoaXMuc2hvd0V4Y2hhbmdlTG9nLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXRBZGRyZXNzLm9uQ2xpY2sodGhpcy5zaG93U2V0QWRkcmVzcywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fZXhjaGFuZ2Uub25DbGljayh0aGlzLmV4Y2hhbmdlR29vZHMsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2dvb2RzTGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV9nb29kc0xpc3QuaXRlbVJlbmRlcmVyID0gdGhpcy5yZW5kZXJMaXN0SXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfZ29vZHNMaXN0Lm9uKGZndWkuRXZlbnQuQ0xJQ0tfSVRFTSwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX2dvb2RzLm9uKGZndWkuRXZlbnQuU1RBVFVTX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb29kc0xpc3REYXRhID0gdGhpcy5nb29kc0NvbmZpZy5zbGljZSgwKTtcclxuICAgICAgICB0aGlzLnVpX2dvb2RzTGlzdC5udW1JdGVtcyA9IHRoaXMuZ29vZHNMaXN0RGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMudGlwQ29udHJvbGxlciA9IHRoaXMudWlfc3RpcHMuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl90aXBxeC5vbkNsaWNrKHRoaXMuY29sc2VUaXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3RpcHFyLm9uQ2xpY2sodGhpcy5xckV4Y2hhbmdlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gTmF0aXZlTWV0aG9kLnNldFVybEJ5TGFuZ3VhZ2UodGhpcy51aV92aXBzaG9wcGluZ1tcIl9jb250ZW50SXRlbVwiXS5uYW1lLCB0aGlzLnVpX3ZpcHNob3BwaW5nKTtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLkdldGFkZHJlc3NJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxpc3RJdGVtKGluZGV4OiBudW1iZXIsIG9iajogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSA8Zmd1aS5HQnV0dG9uPm9iajtcclxuICAgICAgICBsZXQgbmFtZSA9IGl0ZW0uZ2V0Q2hpbGQoXCJuYW1lXCIpLmFzVGV4dEZpZWxkOyAgLy/nianlk4HlkI1cclxuICAgICAgICBsZXQgZGlzY291bnQgPSBpdGVtLmdldENoaWxkKFwiZGlzY291bnRcIikuYXNUZXh0RmllbGQ7IC8v5oqY5omjXHJcbiAgICAgICAgbGV0IG9sZFNvdWNyZSA9IGl0ZW0uZ2V0Q2hpbGQoXCJvbGRTb3VjcmVcIikuYXNUZXh0RmllbGQ7IC8v5Y6f5Lu3XHJcbiAgICAgICAgbGV0IG5vd1NvdWNyZSA9IGl0ZW0uZ2V0Q2hpbGQoXCJub3dTb3VjcmVcIikuYXNUZXh0RmllbGQ7ICAvLyDnjrDku7dcclxuICAgICAgICBpZiAodGhpcy5kaXNjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRpc2NvdW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNjb3VudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGlzY291bnQuc2V0VmFyKFwiemtcIiwgdGhpcy5kaXNjb3VudCArIFwi5oqYXCIpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbGRTb3VjcmUuc2V0VmFyKFwiamZcIiwgdGhpcy5nb29kc0xpc3REYXRhW2luZGV4XS5pbnRlZ3JhbCArICcnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICBsZXQgbm93U2NvcmUgPSB0aGlzLmdvb2RzTGlzdERhdGFbaW5kZXhdLmludGVncmFsICogKHRoaXMuZGlzY291bnQgPT0gMCA/IDEgOiB0aGlzLmRpc2NvdW50ICogMC4xKTtcclxuICAgICAgICBub3dTb3VjcmUuc2V0VmFyKFwiemZcIiwgbm93U2NvcmUudG9GaXhlZCgwKSkuZmx1c2hWYXJzKCk7XHJcblxyXG4gICAgICAgIGxldCBnb29kc0xvYWRlciA9IGl0ZW0uZ2V0Q2hpbGQoXCJnb29kc0xvYWRlclwiKS5hc0xvYWRlcjsvL+WVhuWTgeeahGxvYWRlclxyXG5cclxuICAgICAgICBuYW1lLnRleHQgPSB0aGlzLmdvb2RzTGlzdERhdGFbaW5kZXhdLm5hbWU7XHJcblxyXG4gICAgICAgIGl0ZW0ubmFtZSA9IGluZGV4ICsgJyc7XHJcbiAgICAgICAgVUlVdGlsLmxvYWRTaG9wSW1hZ2UoZ29vZHNMb2FkZXIsIHRoaXMuZ29vZHNMaXN0RGF0YVtpbmRleF0uaW1nUGljKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShpdGVtOiBmZ3VpLkdCdXR0b24pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEdvb2RzID0gaXRlbS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS4i+aLieeKtuaAgeaUueWPmCAqL1xyXG4gICAgcHVibGljIG9uQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLnVpX2dvb2RzTGlzdC5zZWxlY3ROb25lKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RHb29kcyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51aV9idG5fZ29vZHMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB0aGlzLmdvb2RzTGlzdERhdGEgPSBbXTtcclxuICAgICAgICBjYy5sb2coXCLmlbDmja4tLS0tLS0tLS0tLS0tLVwiLCB0aGlzLmdvb2RzQ29uZmlnKVxyXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7IC8v5YWo6YOoXHJcbiAgICAgICAgICAgIHRoaXMuZ29vZHNMaXN0RGF0YSA9IHRoaXMuZ29vZHNDb25maWcuc2xpY2UoMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7IC8v5ri45oiPXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nb29kc0NvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ29vZHNDb25maWdbaV0udHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb29kc0xpc3REYXRhLnB1c2godGhpcy5nb29kc0NvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHsvL+WunueJqVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ29vZHNDb25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvb2RzQ29uZmlnW2ldLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZHNMaXN0RGF0YS5wdXNoKHRoaXMuZ29vZHNDb25maWdbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWlfZ29vZHNMaXN0Lm51bUl0ZW1zID0gdGhpcy5nb29kc0xpc3REYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93RXhjaGFuZ2VMb2coKSB7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1ZpcEV4Y2hhbmdlTG9nVmlldygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dTZXRBZGRyZXNzKCkge1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dWaXBFeGlkQWRyZXNzVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIEhpZGUoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdWaXBTaG9wcGluZ1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVEYXRhKCkge1xyXG4gICAgICAgIGxldCBtb2RlbCA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbDtcclxuICAgICAgICB0aGlzLnVpX25vd2ludGVncmFsLnNldFZhcihcImludGVncmFsXCIsIG1vZGVsLnZpcEluZm8uY3VyclNjb3JlICsgJycpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIGxldCB2aXBDb25maWcgPSBtb2RlbC52aXBDb25maWc7XHJcbiAgICAgICAgbGV0IGx2ID0gbW9kZWwudmlwTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5kaXNjb3VudCA9IHZpcENvbmZpZy5EaXNjb3VudFtsdl07XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpX25vd2Rpc2NvdW50LnNldFZhcihcInprXCIsICfml6AnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVpX25vd2Rpc2NvdW50LnNldFZhcihcInprXCIsIHRoaXMuZGlzY291bnQgKyAn5oqYJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLnVpX2dvb2RzTGlzdC5zZWxlY3ROb25lKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RHb29kcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9HZXRpdGVtbWFuYWdlckluZm9cIjtcclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIj09PT09PT09PT09PT09PT09XCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29vZHNDb25maWcgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLojrflj5bllYblk4HlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6I635Y+W5ZWG5ZOB5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29sc2VUaXAoKSB7XHJcbiAgICAgICAgdGhpcy51aV9zdGlwcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHFyRXhjaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy51aV9zdGlwcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudGlwQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ29vZHNMaXN0RGF0YVt0aGlzLnNlbGVjdEdvb2RzXS50eXBlID09IDApIHsvL+a4uOaIsueJqeWTgVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRXhjaGFuZ2VHb29kcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvL+WvpueJqSDopoHloavlr6vlnLDlnYBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+i3s+eiuuiqjeWcsOWdgFxyXG4gICAgICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dWaXBDb25maXJtQWRyZXNzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6Lez56Gu6K6k6K6i5Y2VXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1ZpcENvbmZpcm1PcmRlclZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ot7Pnt6jovK/lnLDlnYBcclxuICAgICAgICAgICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93VmlwRXhpZEFkcmVzc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRpcERhdGEoKSB7XHJcbiAgICAgICAgbGV0IG5vd1Njb3JlID0gdGhpcy5nb29kc0xpc3REYXRhW3RoaXMuc2VsZWN0R29vZHNdLmludGVncmFsICogKHRoaXMuZGlzY291bnQgPT0gMCA/IDEgOiB0aGlzLmRpc2NvdW50ICogMC4xKTtcclxuICAgICAgICB0aGlzLnVpX25vd051bVRpcC5zZXRWYXIoXCJ5alwiLCBub3dTY29yZS50b0ZpeGVkKDApKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB0aGlzLnVpX2ludGVncmFsTnVtLnNldFZhcihcImpmXCIsIHRoaXMuZ29vZHNMaXN0RGF0YVt0aGlzLnNlbGVjdEdvb2RzXS5pbnRlZ3JhbCArICcnKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB0aGlzLnVpX2dvb2RzTmFtZS5zZXRWYXIoXCJuYW1lXCIsIHRoaXMuZ29vZHNMaXN0RGF0YVt0aGlzLnNlbGVjdEdvb2RzXS5uYW1lKS5mbHVzaFZhcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5blvZPliY3pgInmi6nnmoTnianlk4Hkv6Hmga8gKi9cclxuICAgIHB1YmxpYyBnZXRTZWxlY3RJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB7IGluZm86IHRoaXMuZ29vZHNMaXN0RGF0YVt0aGlzLnNlbGVjdEdvb2RzXSwgYWRkcmVzczogdGhpcy5hZGRyZXNzIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWR5o2i54mp5ZOBICovXHJcbiAgICBwdWJsaWMgZXhjaGFuZ2VHb29kcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RHb29kcyA+PSAwICYmIHRoaXMuc2VsZWN0R29vZHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgY3VyclNjb3JlID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnZpcEluZm8uY3VyclNjb3JlO1xyXG4gICAgICAgICAgICBsZXQgbm93U2NvcmUgPSB0aGlzLmdvb2RzTGlzdERhdGFbdGhpcy5zZWxlY3RHb29kc10uaW50ZWdyYWwgKiAodGhpcy5kaXNjb3VudCA9PSAwID8gMSA6IHRoaXMuZGlzY291bnQgKiAwLjEpO1xyXG4gICAgICAgICAgICBub3dTY29yZSA9ICtub3dTY29yZS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJTY29yZSA9PSBcIiwgY3VyclNjb3JlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3dTY29yZSA9PSBcIiwgbm93U2NvcmUpO1xyXG4gICAgICAgICAgICBpZiAoY3VyclNjb3JlIDwgbm93U2NvcmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGlwcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpcENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRUaXBEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfc3RpcHMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuiri+mBuOaTh+WFjOaPm+eahOeJqeWTgVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Y+R6YCB5YWR5o2iICovXHJcbiAgICBwdWJsaWMgc2VuZEV4Y2hhbmdlR29vZHMoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9BZGRpdGVtb3JkZXJsb2dcIjtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBVc2VySWQ6IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQsXHJcbiAgICAgICAgICAgIFZpcGxldmVsOiBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwTGV2ZWwsXHJcbiAgICAgICAgICAgIFVzZXJOYW1lOiBBcHBDb25zdC5tUGxheWVyTW9kZWwuX24sXHJcbiAgICAgICAgICAgIHNjb3JlczogTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnZpcEluZm8uY3VyclNjb3JlLFxyXG4gICAgICAgICAgICBJdGVtTmFtZTogdGhpcy5nb29kc0xpc3REYXRhW3RoaXMuc2VsZWN0R29vZHNdLm5hbWUsXHJcbiAgICAgICAgICAgIEl0ZW1TY29yZXM6IHRoaXMuZ29vZHNMaXN0RGF0YVt0aGlzLnNlbGVjdEdvb2RzXS5pbnRlZ3JhbCxcclxuICAgICAgICAgICAgVHlwZTogdGhpcy5nb29kc0xpc3REYXRhW3RoaXMuc2VsZWN0R29vZHNdLnR5cGUsXHJcbiAgICAgICAgICAgIEFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcclxuICAgICAgICB9XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnNob3dNb2RhbFdhaXQoKTtcclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS3lhYzmj5stLS1cIiwgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QuY2xvc2VNb2RhbFdhaXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb2RlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC52aXBJbmZvLmN1cnJTY29yZSAtPSB0aGlzLmdvb2RzTGlzdERhdGFbdGhpcy5zZWxlY3RHb29kc10uaW50ZWdyYWwgKiAodGhpcy5kaXNjb3VudCA9PSAwID8gMSA6IHRoaXMuZGlzY291bnQgLyAxMClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm93c2NvcmUgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwSW5mby5jdXJyU2NvcmUudG9GaXhlZCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX25vd2ludGVncmFsLnNldFZhcihcImludGVncmFsXCIsIG5vd3Njb3JlKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubXlWaXBQcml2aWxlZ2VWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3Lm15VmlwUHJpdmlsZWdlVmlldy5oYW5kbGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy52aXBDb25maXJtT3JkZXJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnZpcENvbmZpcm1PcmRlclZpZXcuc2hvd1RpcChyZXNwb25zZS5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1jYXRjaC0tLVwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmNsb3NlTW9kYWxXYWl0KCk7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5YWM5o+b5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKueNsuWPluaUtuepq+WcsOWdgCAqL1xyXG4gICAgcHVibGljIEdldGFkZHJlc3NJbmZvKCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvR2V0YWRkcmVzc0luZm9cIiArIGA/dXNlcmlkPSR7QXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZH1gO1xyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiPT09PT09PT3mlLbotKflnLDlnYA9PT09PT09PT09XCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc0luZm8gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSByZXMuZGF0YS5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwQWRkcmVzcyA9IHJlcy5kYXRhLmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59Il19