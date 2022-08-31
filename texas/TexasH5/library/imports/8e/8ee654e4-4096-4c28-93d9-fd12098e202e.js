"use strict";
cc._RF.push(module, '8ee65TkQJZMKJPZ/RIJjiAu', 'VipExidAdressView');
// GameHall/script/Lobby/vip/VipExidAdressView.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description vip 编辑收获地址
 *
 */
var VipExidAdressView = /** @class */ (function (_super) {
    __extends(VipExidAdressView, _super);
    function VipExidAdressView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_addressBreak = null;
        _this.ui_userName = null;
        _this.ui_phone = null;
        _this.ui_address = null;
        _this.ui_saveInfo = null;
        _this.ui_exidaddressImg = null;
        _this.ui_btn_address = null;
        _this.ui_addresslabel = null;
        return _this;
    }
    Object.defineProperty(VipExidAdressView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExidAdressView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExidAdressView.prototype, "componentName", {
        get: function () {
            return "exidAdress";
        },
        enumerable: false,
        configurable: true
    });
    VipExidAdressView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_addressBreak.onClick(this.Hide, this);
        this.ui_saveInfo.onClick(this.saveInfo, this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_exidaddressImg);
        this.ui_btn_address.onClick(this.setFocus, this);
        this.ui_address.node.opacity = 0;
        this.ui_address.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
    };
    VipExidAdressView.prototype.OnLoadCompleted = function () {
        this.oldLabel = this.ui_addresslabel.text;
        this.Show();
    };
    VipExidAdressView.prototype.setFocus = function () {
        this.ui_address.requestFocus();
    };
    VipExidAdressView.prototype.changedText = function () {
        this.ui_addresslabel.text = this.ui_address.text;
    };
    VipExidAdressView.prototype.saveInfo = function () {
        var _this = this;
        var userName = this.ui_userName.text;
        var phone = this.ui_phone.text;
        var address = this.ui_address.text;
        if (!userName || !phone || !address) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Additemorderaddress";
        var id = 0;
        if (LobbyViewCtr_1.default.instance.view.vipShoppingView.addressInfo) {
            id = LobbyViewCtr_1.default.instance.view.vipShoppingView.addressInfo.id;
        }
        var params = {
            id: id,
            UserId: AppConst_1.AppConst.mPlayerModel.userid + '',
            Address: userName + "|" + phone + "|" + address
        };
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx_1.default.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(function (res) {
            cc.log("---------设置----地址----", res);
            fgui.GRoot.inst.closeModalWait();
            if (res.code == 1) {
                LobbyViewCtr_1.default.instance.view.vipShoppingView.address = params.Address;
                LobbyViewCtr_1.default.instance.Model.vipAddress = params.Address;
                _this.Hide();
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("設置收貨地址成功");
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("設置收貨地址失敗");
            }
        })
            .catch(function () {
            fgui.GRoot.inst.closeModalWait();
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("設置收貨地址失敗");
        });
    };
    VipExidAdressView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipExidAdressView', "button");
        _super.prototype.Hide.call(this);
    };
    VipExidAdressView.prototype.Show = function () {
        this.ui_addresslabel.text = this.oldLabel;
        var address = LobbyViewCtr_1.default.instance.Model.vipAddress;
        if (address != "") {
            var list = address.split("|");
            if (list[0])
                this.ui_userName.text = list[0];
            if (list[1])
                this.ui_phone.text = list[1];
            if (list[2]) {
                this.ui_address.text = list[2];
                this.ui_addresslabel.text = list[2];
            }
        }
        _super.prototype.Show.call(this);
    };
    return VipExidAdressView;
}(ViewBase_1.default));
exports.default = VipExidAdressView;

cc._RF.pop();