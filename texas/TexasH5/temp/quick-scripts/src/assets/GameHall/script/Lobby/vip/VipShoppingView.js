"use strict";
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