"use strict";
cc._RF.push(module, '1cdd2t4ZvJI3o201gLkIJ/e', 'VipConfirmAdressView');
// GameHall/script/Lobby/vip/VipConfirmAdressView.ts

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
 * @description vip 確認收获地址
 *
 */
var VipConfirmAdressView = /** @class */ (function (_super) {
    __extends(VipConfirmAdressView, _super);
    function VipConfirmAdressView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_addressBreak = null;
        _this.ui_userName = null;
        _this.ui_phone = null;
        _this.ui_address = null;
        _this.ui_btn_qx = null;
        _this.ui_btn_qr = null;
        _this.ui_btn_changeAddress = null;
        _this.ui_confirmaddressImg = null;
        return _this;
    }
    Object.defineProperty(VipConfirmAdressView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipConfirmAdressView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipConfirmAdressView.prototype, "componentName", {
        get: function () {
            return "ConfirmAdress";
        },
        enumerable: false,
        configurable: true
    });
    VipConfirmAdressView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_addressBreak.onClick(this.Hide, this);
        this.ui_btn_qx.onClick(this.Hide, this);
        this.ui_btn_changeAddress.onClick(this.showExidAddress, this);
        this.ui_btn_qr.onClick(this.showConfirmOrder, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_confirmaddressImg);
    };
    VipConfirmAdressView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    /**跳轉編輯地址 */
    VipConfirmAdressView.prototype.showExidAddress = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showVipExidAdressView();
    };
    /**跳確認訂單 */
    VipConfirmAdressView.prototype.showConfirmOrder = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showVipConfirmOrderView();
    };
    VipConfirmAdressView.prototype.showAddress = function () {
        var data = LobbyViewCtr_1.default.instance.view.vipShoppingView.getSelectInfo();
        var infoArr = data.address.split("|");
        this.ui_userName.text = infoArr[0]; //   setVar("per", infoArr[0]).flushVars();
        this.ui_phone.text = infoArr[1]; //setVar("phone ", infoArr[1]).flushVars();
        this.ui_address.text = infoArr[2]; //.setVar("address", infoArr[2]).flushVars();
    };
    VipConfirmAdressView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipConfirmAdressView', "button");
        _super.prototype.Hide.call(this);
    };
    VipConfirmAdressView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.showAddress();
    };
    return VipConfirmAdressView;
}(ViewBase_1.default));
exports.default = VipConfirmAdressView;

cc._RF.pop();