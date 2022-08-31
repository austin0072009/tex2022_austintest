
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipExidAdressView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwRXhpZEFkcmVzc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0QsNEVBQXVFO0FBQ3ZFLDJGQUEwRjtBQUMxRixzRUFBcUU7QUFDckUsbURBQThDO0FBQzlDLGdEQUEyQztBQUUzQzs7O0dBR0c7QUFDSDtJQUErQyxxQ0FBUTtJQUF2RDtRQUFBLHFFQThHQztRQW5HVyx5QkFBbUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3pDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFFdkMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLHFCQUFlLEdBQW9CLElBQUksQ0FBQzs7SUEwRnBELENBQUM7SUE3R0csc0JBQWMsa0RBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywwQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNENBQWE7YUFBM0I7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQWNELGlEQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxD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QUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDSjtRQUNELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFHTCx3QkFBQztBQUFELENBOUdBLEFBOEdDLENBOUc4QyxrQkFBUSxHQThHdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgSHR0cEhlbHBFeCBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9NYW5hZ2Vycy9IdHRwSGVscEV4XCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCBOYXRpdmVNZXRob2QgZnJvbSBcIi4uLy4uL05hdGl2ZU1ldGhvZFwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gdmlwIOe8lui+keaUtuiOt+WcsOWdgFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcEV4aWRBZHJlc3NWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImV4aWRBZHJlc3NcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZGRyZXNzQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3VzZXJOYW1lOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9waG9uZTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWRkcmVzczogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfc2F2ZUluZm86IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9leGlkYWRkcmVzc0ltZzogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZGRyZXNzOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9hZGRyZXNzbGFiZWw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG9sZExhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fYWRkcmVzc0JyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX3NhdmVJbmZvLm9uQ2xpY2sodGhpcy5zYXZlSW5mbywgdGhpcyk7XHJcbiAgICAgICAgTmF0aXZlTWV0aG9kLnNldFVybEJ5TGFuZ3VhZ2UodGhpcy51aV9leGlkYWRkcmVzc0ltZyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX2FkZHJlc3Mub25DbGljayh0aGlzLnNldEZvY3VzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2FkZHJlc3Mubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpX2FkZHJlc3Mub24oZmd1aS5FdmVudC5URVhUX0NIQU5HRSwgdGhpcy5jaGFuZ2VkVGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5vbGRMYWJlbCA9IHRoaXMudWlfYWRkcmVzc2xhYmVsLnRleHQ7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy51aV9hZGRyZXNzLnJlcXVlc3RGb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoYW5nZWRUZXh0KCkge1xyXG4gICAgICAgIHRoaXMudWlfYWRkcmVzc2xhYmVsLnRleHQgPSB0aGlzLnVpX2FkZHJlc3MudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUluZm8oKSB7XHJcbiAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy51aV91c2VyTmFtZS50ZXh0O1xyXG4gICAgICAgIGxldCBwaG9uZSA9IHRoaXMudWlfcGhvbmUudGV4dDtcclxuICAgICAgICBsZXQgYWRkcmVzcyA9IHRoaXMudWlfYWRkcmVzcy50ZXh0O1xyXG4gICAgICAgIGlmICghdXNlck5hbWUgfHwgIXBob25lIHx8ICFhZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLor7floavlhpnlrozmlbTnmoTkv6Hmga9cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9BZGRpdGVtb3JkZXJhZGRyZXNzXCI7XHJcbiAgICAgICAgbGV0IGlkID0gMDtcclxuICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcudmlwU2hvcHBpbmdWaWV3LmFkZHJlc3NJbmZvKSB7XHJcbiAgICAgICAgICAgIGlkID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcudmlwU2hvcHBpbmdWaWV3LmFkZHJlc3NJbmZvLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIFVzZXJJZDogQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCArICcnLFxyXG4gICAgICAgICAgICBBZGRyZXNzOiBgJHt1c2VyTmFtZX18JHtwaG9uZX18JHthZGRyZXNzfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnNob3dNb2RhbFdhaXQoKTtcclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLeiuvue9ri0tLS3lnLDlnYAtLS0tXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QuY2xvc2VNb2RhbFdhaXQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcudmlwU2hvcHBpbmdWaWV3LmFkZHJlc3MgPSBwYXJhbXMuQWRkcmVzcztcclxuICAgICAgICAgICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwQWRkcmVzcyA9IHBhcmFtcy5BZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLoqK3nva7mlLbosqjlnLDlnYDmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLoqK3nva7mlLbosqjlnLDlnYDlpLHmlZdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmNsb3NlTW9kYWxXYWl0KCk7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6Kit572u5pS26LKo5Zyw5Z2A5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVmlwRXhpZEFkcmVzc1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgdGhpcy51aV9hZGRyZXNzbGFiZWwudGV4dCA9IHRoaXMub2xkTGFiZWw7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwQWRkcmVzcztcclxuICAgICAgICBpZiAoYWRkcmVzcyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gYWRkcmVzcy5zcGxpdChcInxcIik7XHJcbiAgICAgICAgICAgIGlmIChsaXN0WzBdKSB0aGlzLnVpX3VzZXJOYW1lLnRleHQgPSBsaXN0WzBdO1xyXG4gICAgICAgICAgICBpZiAobGlzdFsxXSkgdGhpcy51aV9waG9uZS50ZXh0ID0gbGlzdFsxXTtcclxuICAgICAgICAgICAgaWYgKGxpc3RbMl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfYWRkcmVzcy50ZXh0ID0gbGlzdFsyXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfYWRkcmVzc2xhYmVsLnRleHQgPSBsaXN0WzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19