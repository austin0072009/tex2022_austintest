
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipConfirmAdressView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwQ29uZmlybUFkcmVzc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFDOUMsZ0RBQTJDO0FBRTNDOzs7R0FHRztBQUNIO0lBQWtELHdDQUFRO0lBQTFEO1FBQUEscUVBK0RDO1FBcERXLHlCQUFtQixHQUFpQixJQUFJLENBQUM7UUFDekMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLGNBQVEsR0FBb0IsSUFBSSxDQUFDO1FBQ2pDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUVuQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQiwwQkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBRTFDLDBCQUFvQixHQUFpQixJQUFJLENBQUM7O0lBMkN0RCxDQUFDO0lBOURHLHNCQUFjLHFEQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNkNBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLCtDQUFhO2FBQTNCO1lBQ0ksT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFZRCxvREFBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBELHNCQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELDhDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVk7SUFDTCw4Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxXQUFXO0lBQ0osK0NBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDekQsQ0FBQztJQUNNLDBDQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSwyQ0FBMkM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsMkNBQTJDO1FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFHLDZDQUE2QztJQUN0RixDQUFDO0lBQ0QsbUNBQUksR0FBSjtRQUNJLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sbUNBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTCwyQkFBQztBQUFELENBL0RBLEFBK0RDLENBL0RpRCxrQkFBUSxHQStEekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCBOYXRpdmVNZXRob2QgZnJvbSBcIi4uLy4uL05hdGl2ZU1ldGhvZFwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gdmlwIOeiuuiqjeaUtuiOt+WcsOWdgFxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcENvbmZpcm1BZHJlc3NWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkNvbmZpcm1BZHJlc3NcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZGRyZXNzQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3VzZXJOYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9waG9uZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYWRkcmVzczogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9xeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3FyOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fY2hhbmdlQWRkcmVzczogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2NvbmZpcm1hZGRyZXNzSW1nOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fYWRkcmVzc0JyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9xeC5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fY2hhbmdlQWRkcmVzcy5vbkNsaWNrKHRoaXMuc2hvd0V4aWRBZGRyZXNzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9xci5vbkNsaWNrKHRoaXMuc2hvd0NvbmZpcm1PcmRlciwgdGhpcyk7XHJcblxyXG4gICAgICAgIE5hdGl2ZU1ldGhvZC5zZXRVcmxCeUxhbmd1YWdlKHRoaXMudWlfY29uZmlybWFkZHJlc3NJbWcpO1xyXG4gICAgfVxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKui3s+i9iee3qOi8r+WcsOWdgCAqL1xyXG4gICAgcHVibGljIHNob3dFeGlkQWRkcmVzcygpIHtcclxuICAgICAgICB0aGlzLkhpZGUoKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93VmlwRXhpZEFkcmVzc1ZpZXcoKTtcclxuICAgIH1cclxuICAgIC8qKui3s+eiuuiqjeioguWWriAqL1xyXG4gICAgcHVibGljIHNob3dDb25maXJtT3JkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5IaWRlKCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1ZpcENvbmZpcm1PcmRlclZpZXcoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaG93QWRkcmVzcygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnZpcFNob3BwaW5nVmlldy5nZXRTZWxlY3RJbmZvKCk7XHJcbiAgICAgICAgbGV0IGluZm9BcnIgPSBkYXRhLmFkZHJlc3Muc3BsaXQoXCJ8XCIpO1xyXG4gICAgICAgIHRoaXMudWlfdXNlck5hbWUudGV4dCA9IGluZm9BcnJbMF07Ly8gICBzZXRWYXIoXCJwZXJcIiwgaW5mb0FyclswXSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgdGhpcy51aV9waG9uZS50ZXh0ID0gaW5mb0FyclsxXTsvL3NldFZhcihcInBob25lIFwiLCBpbmZvQXJyWzFdKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB0aGlzLnVpX2FkZHJlc3MudGV4dCA9IGluZm9BcnJbMl07ICAgLy8uc2V0VmFyKFwiYWRkcmVzc1wiLCBpbmZvQXJyWzJdKS5mbHVzaFZhcnMoKTtcclxuICAgIH1cclxuICAgIEhpZGUoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdWaXBDb25maXJtQWRyZXNzVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdygpIHtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgdGhpcy5zaG93QWRkcmVzcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=