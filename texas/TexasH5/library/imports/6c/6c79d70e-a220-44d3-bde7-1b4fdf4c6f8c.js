"use strict";
cc._RF.push(module, '6c79dcOoiBE073nG0/fTG+M', 'VipConfirmOrderView');
// GameHall/script/Lobby/vip/VipConfirmOrderView.ts

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
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 确认订单
 *
 */
var VipConfirmOrderView = /** @class */ (function (_super) {
    __extends(VipConfirmOrderView, _super);
    function VipConfirmOrderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_orderBreak = null;
        _this.ui_user = null;
        _this.ui_phone = null;
        _this.ui_address = null;
        _this.ui_goodsName = null;
        _this.ui_goodsjf = null;
        _this.ui_btn_qx = null;
        _this.ui_btn_qr = null;
        _this.ui_goodsLoader = null;
        _this.ui_btn_tipqr = null;
        _this.ui_exgoodsName = null;
        _this.ui_createTime = null;
        _this.ui_orderNum = null;
        _this.ui_confirmOrderimg = null;
        return _this;
    }
    Object.defineProperty(VipConfirmOrderView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipConfirmOrderView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipConfirmOrderView.prototype, "componentName", {
        get: function () {
            return "ConfirmOrder";
        },
        enumerable: false,
        configurable: true
    });
    VipConfirmOrderView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_orderBreak.onClick(this.Hide, this);
        this.ui_btn_qx.onClick(this.Hide, this);
        this.ui_btn_qr.onClick(this.sendExchange, this);
        this.typeController = this.fguiComponent.getController("type");
        this.ui_btn_tipqr.onClick(this.Hide, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_confirmOrderimg);
    };
    VipConfirmOrderView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    VipConfirmOrderView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipConfirmOrderView', "button");
        _super.prototype.Hide.call(this);
    };
    VipConfirmOrderView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.typeController.setSelectedIndex(0);
        var data = LobbyViewCtr_1.default.instance.view.vipShoppingView.getSelectInfo();
        this.ui_goodsName.text = data.info.name;
        this.ui_goodsjf.setVar("sou", data.info.integral + '').flushVars();
        ;
        UIUtil_1.UIUtil.loadImage(this.ui_goodsLoader, data.info.imgPic);
        var infoArr = data.address.split("|");
        this.ui_user.setVar("per", infoArr[0]).flushVars();
        this.ui_phone.setVar("phone ", infoArr[1]).flushVars();
        this.ui_address.setVar("address", infoArr[2]).flushVars();
    };
    VipConfirmOrderView.prototype.sendExchange = function () {
        LobbyViewCtr_1.default.instance.view.vipShoppingView.sendExchangeGoods();
    };
    VipConfirmOrderView.prototype.showTip = function (data) {
        this.typeController.setSelectedIndex(1);
        var date = data["creatDate"];
        date = date.slice(0, date.indexOf(".")).replace("T", " ");
        this.ui_orderNum.setVar("order", data["orderNum"]).flushVars();
        this.ui_createTime.setVar("time", date).flushVars();
        this.ui_exgoodsName.setVar("name", data["itemName"]).flushVars();
    };
    return VipConfirmOrderView;
}(ViewBase_1.default));
exports.default = VipConfirmOrderView;

cc._RF.pop();