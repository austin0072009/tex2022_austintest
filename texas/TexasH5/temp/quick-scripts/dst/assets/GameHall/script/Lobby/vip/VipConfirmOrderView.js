
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipConfirmOrderView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwQ29uZmlybU9yZGVyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsa0VBQTZEO0FBQzdELDJEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMsZ0RBQTJDO0FBRTNDOzs7R0FHRztBQUNIO0lBQWlELHVDQUFRO0lBQXpEO1FBQUEscUVBa0ZDO1FBdkVXLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFFdkMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsY0FBUSxHQUFvQixJQUFJLENBQUM7UUFDakMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQ25DLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0Isb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUlwQyx3QkFBa0IsR0FBaUIsSUFBSSxDQUFDOztJQXFEcEQsQ0FBQztJQWpGRyxzQkFBYyxvREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDRDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw4Q0FBYTthQUEzQjtZQUNJLE9BQU8sY0FBYyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBcUJELG1EQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxD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QUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FsRkEsQUFrRkMsQ0FsRmdELGtCQUFRLEdBa0Z4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCBOYXRpdmVNZXRob2QgZnJvbSBcIi4uLy4uL05hdGl2ZU1ldGhvZFwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gdmlwIOehruiupOiuouWNlVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcENvbmZpcm1PcmRlclZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ29uZmlybU9yZGVyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fb3JkZXJCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX3VzZXI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3Bob25lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9hZGRyZXNzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9nb29kc05hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2dvb2RzamY6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9xeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3FyOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9nb29kc0xvYWRlcjogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl90aXBxcjogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZXhnb29kc05hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2NyZWF0ZVRpbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX29yZGVyTnVtOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0eXBlQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHVpX2NvbmZpcm1PcmRlcmltZzogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX29yZGVyQnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3F4Lm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9xci5vbkNsaWNrKHRoaXMuc2VuZEV4Y2hhbmdlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl90aXBxci5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIE5hdGl2ZU1ldGhvZC5zZXRVcmxCeUxhbmd1YWdlKHRoaXMudWlfY29uZmlybU9yZGVyaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1ZpcENvbmZpcm1PcmRlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcudmlwU2hvcHBpbmdWaWV3LmdldFNlbGVjdEluZm8oKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9nb29kc05hbWUudGV4dCA9IGRhdGEuaW5mby5uYW1lO1xyXG4gICAgICAgIHRoaXMudWlfZ29vZHNqZi5zZXRWYXIoXCJzb3VcIiwgZGF0YS5pbmZvLmludGVncmFsICsgJycpLmZsdXNoVmFycygpOztcclxuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfZ29vZHNMb2FkZXIsIGRhdGEuaW5mby5pbWdQaWMpO1xyXG4gICAgICAgIGxldCBpbmZvQXJyID0gZGF0YS5hZGRyZXNzLnNwbGl0KFwifFwiKTtcclxuICAgICAgICB0aGlzLnVpX3VzZXIuc2V0VmFyKFwicGVyXCIsIGluZm9BcnJbMF0pLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfcGhvbmUuc2V0VmFyKFwicGhvbmUgXCIsIGluZm9BcnJbMV0pLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfYWRkcmVzcy5zZXRWYXIoXCJhZGRyZXNzXCIsIGluZm9BcnJbMl0pLmZsdXNoVmFycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZW5kRXhjaGFuZ2UoKSB7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcudmlwU2hvcHBpbmdWaWV3LnNlbmRFeGNoYW5nZUdvb2RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUaXAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICBsZXQgZGF0ZTogc3RyaW5nID0gZGF0YVtcImNyZWF0RGF0ZVwiXTtcclxuICAgICAgICBkYXRlID0gZGF0ZS5zbGljZSgwLCBkYXRlLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiVFwiLCBcIiBcIilcclxuICAgICAgICB0aGlzLnVpX29yZGVyTnVtLnNldFZhcihcIm9yZGVyXCIsIGRhdGFbXCJvcmRlck51bVwiXSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgdGhpcy51aV9jcmVhdGVUaW1lLnNldFZhcihcInRpbWVcIiwgZGF0ZSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgdGhpcy51aV9leGdvb2RzTmFtZS5zZXRWYXIoXCJuYW1lXCIsIGRhdGFbXCJpdGVtTmFtZVwiXSkuZmx1c2hWYXJzKCk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==