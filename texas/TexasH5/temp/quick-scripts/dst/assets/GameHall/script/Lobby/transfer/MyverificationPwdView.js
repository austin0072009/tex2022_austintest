
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/transfer/MyverificationPwdView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3811BtxpVNl5o1Hpk52ri0', 'MyverificationPwdView');
// GameHall/script/Lobby/transfer/MyverificationPwdView.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 支付密码
 */
var MyverificationPwdView = /** @class */ (function (_super) {
    __extends(MyverificationPwdView, _super);
    function MyverificationPwdView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_yzzfbreak1 = null;
        _this.ui_btn_yzquxiao = null;
        _this.ui_btn_vconfirm = null;
        _this.ui_btn_inputbg = null;
        _this.ui_pwd0 = null;
        _this.ui_pwd1 = null;
        _this.ui_pwd2 = null;
        _this.ui_pwd3 = null;
        _this.ui_pwd4 = null;
        _this.ui_pwd5 = null;
        _this.ui_inputLabel = null;
        _this.inputPwd = '';
        return _this;
    }
    Object.defineProperty(MyverificationPwdView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyverificationPwdView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyverificationPwdView.prototype, "componentName", {
        get: function () {
            return "yzTxsqcom";
        },
        enumerable: false,
        configurable: true
    });
    MyverificationPwdView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_yzzfbreak1.onClick(this.HideView, this);
        this.ui_btn_yzquxiao.onClick(this.HideView, this);
        this.ui_btn_inputbg.onClick(this.setFocus, this);
        this.ui_inputLabel.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
        this.ui_inputLabel.node.opacity = 0;
        this.ui_btn_vconfirm.onClick(this.sendConfirm, this);
        this.typeController = this.fguiComponent.getController("c1");
    };
    MyverificationPwdView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    MyverificationPwdView.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    MyverificationPwdView.prototype.HideView = function () {
        AudioManager_1.AudioManager.Singleton.play('MyverificationPwdView', "button");
        this.Hide();
    };
    /**确认验证密码 */
    MyverificationPwdView.prototype.sendConfirm = function () {
        AudioManager_1.AudioManager.Singleton.play('MyverificationPwdView', "button");
        if (this.inputPwd.length != 6) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密碼格式不正確");
            return;
        }
        // let contro = this.typeController.selectedIndex;
        // if (contro == 1) {
        //     LobbyViewCtr.instance.cs_changePassword_appbk('', this.inputPwd); //設置
        // } else { //驗證支付密碼
        LobbyViewCtr_1.default.instance.cs_enterbank_bk(this.inputPwd); //验证支付密码
        // }
    };
    /**设置支付密码成功 */
    MyverificationPwdView.prototype.setPwdSucceed = function () {
        this.typeController.selectedIndex = 0;
        AppConst_1.AppConst.mPlayerModel["UserPassword"] = this.inputPwd;
        this.clean();
        this.ui_inputLabel.requestFocus();
    };
    /**验证支付密码成功 */
    MyverificationPwdView.prototype.verificationPwdSucceed = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTransferView();
    };
    MyverificationPwdView.prototype.setFocus = function () {
        this.ui_inputLabel.requestFocus();
    };
    MyverificationPwdView.prototype.changedText = function (event) {
        var text = this.ui_inputLabel.text;
        this.inputPwd = text;
        for (var i = 0; i < 6; i++) {
            if (i > text.length) {
                this["ui_pwd" + i].text = '';
            }
            else {
                this["ui_pwd" + i].text = text[i];
            }
        }
    };
    MyverificationPwdView.prototype.Show = function () {
        // if (!LobbyViewCtr.instance.model.isSetPayPassword) {
        //     this.typeController.selectedIndex = 1;
        // } else {
        this.typeController.selectedIndex = 0;
        // }
        this.clean();
        _super.prototype.Show.call(this);
    };
    MyverificationPwdView.prototype.clean = function () {
        this.inputPwd = '';
        this.ui_inputLabel.text = '';
        for (var i = 0; i < 6; i++) {
            this["ui_pwd" + i].text = '';
        }
    };
    MyverificationPwdView.prototype.toTopup = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    return MyverificationPwdView;
}(ViewBase_1.default));
exports.default = MyverificationPwdView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRyYW5zZmVyXFxNeXZlcmlmaWNhdGlvblB3ZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0QsMkZBQTBGO0FBQzFGLGdEQUEyQztBQUUzQzs7R0FFRztBQUNIO0lBQW1ELHlDQUFRO0lBQTNEO1FBQUEscUVBd0hDO1FBOUdXLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQ3JDLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFcEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBRXZDLGNBQVEsR0FBVyxFQUFFLENBQUM7O0lBZ0dqQyxDQUFDO0lBdkhHLHNCQUFjLHNEQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsOENBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGdEQUFhO2FBQTNCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFtQkQscURBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLHdDQUFRLEdBQWY7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxZQUFZO0lBQ0wsMkNBQVcsR0FBbEI7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0IscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLE9BQU87U0FDVjtRQUNELGtEQUFrRDtRQUNsRCxxQkFBcUI7UUFDckIsNkVBQTZFO1FBQzdFLG9CQUFvQjtRQUNwQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUM5RCxJQUFJO0lBQ1IsQ0FBQztJQUVELGNBQWM7SUFDUCw2Q0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN0QyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNELGNBQWM7SUFDUCxzREFBc0IsR0FBN0I7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBR00sd0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNNLDJDQUFXLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBRUo7SUFDTCxDQUFDO0lBRU0sb0NBQUksR0FBWDtRQUNJLHVEQUF1RDtRQUN2RCw2Q0FBNkM7UUFDN0MsV0FBVztRQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLHFDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRU0sdUNBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQXhIQSxBQXdIQyxDQXhIa0Qsa0JBQVEsR0F3SDFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOaUr+S7mOWvhueggVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXl2ZXJpZmljYXRpb25Qd2RWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInl6VHhzcWNvbVwiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1aV9idG5feXp6ZmJyZWFrMTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3l6cXV4aWFvOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fdmNvbmZpcm06IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5faW5wdXRiZzogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX3B3ZDA6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDE6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDI6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDM6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDU6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2lucHV0TGFiZWw6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlucHV0UHdkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5feXp6ZmJyZWFrMS5vbkNsaWNrKHRoaXMuSGlkZVZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3l6cXV4aWFvLm9uQ2xpY2sodGhpcy5IaWRlVmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5faW5wdXRiZy5vbkNsaWNrKHRoaXMuc2V0Rm9jdXMsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfaW5wdXRMYWJlbC5vbihmZ3VpLkV2ZW50LlRFWFRfQ0hBTkdFLCB0aGlzLmNoYW5nZWRUZXh0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2lucHV0TGFiZWwubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpX2J0bl92Y29uZmlybS5vbkNsaWNrKHRoaXMuc2VuZENvbmZpcm0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGlkZVZpZXcoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNeXZlcmlmaWNhdGlvblB3ZFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnoa7orqTpqozor4Hlr4bnoIEgKi9cclxuICAgIHB1YmxpYyBzZW5kQ29uZmlybSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015dmVyaWZpY2F0aW9uUHdkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0UHdkLmxlbmd0aCAhPSA2KSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLlr4bnorzmoLzlvI/kuI3mraPnorpcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGNvbnRybyA9IHRoaXMudHlwZUNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICAvLyBpZiAoY29udHJvID09IDEpIHtcclxuICAgICAgICAvLyAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2NoYW5nZVBhc3N3b3JkX2FwcGJrKCcnLCB0aGlzLmlucHV0UHdkKTsgLy/oqK3nva5cclxuICAgICAgICAvLyB9IGVsc2UgeyAvL+mpl+itieaUr+S7mOWvhueivFxyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19lbnRlcmJhbmtfYmsodGhpcy5pbnB1dFB3ZCk7IC8v6aqM6K+B5pSv5LuY5a+G56CBXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruaUr+S7mOWvhueggeaIkOWKnyAqL1xyXG4gICAgcHVibGljIHNldFB3ZFN1Y2NlZWQoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJVc2VyUGFzc3dvcmRcIl0gPSB0aGlzLmlucHV0UHdkO1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICB0aGlzLnVpX2lucHV0TGFiZWwucmVxdWVzdEZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICAvKirpqozor4HmlK/ku5jlr4bnoIHmiJDlip8gKi9cclxuICAgIHB1YmxpYyB2ZXJpZmljYXRpb25Qd2RTdWNjZWVkKCkge1xyXG4gICAgICAgIHRoaXMuSGlkZSgpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dUcmFuc2ZlclZpZXcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldEZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMudWlfaW5wdXRMYWJlbC5yZXF1ZXN0Rm9jdXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjaGFuZ2VkVGV4dChldmVudCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy51aV9pbnB1dExhYmVsLnRleHQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dFB3ZCA9IHRleHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tcInVpX3B3ZFwiICsgaV0udGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tcInVpX3B3ZFwiICsgaV0udGV4dCA9IHRleHRbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIC8vIGlmICghTG9iYnlWaWV3Q3RyLmluc3RhbmNlLm1vZGVsLmlzU2V0UGF5UGFzc3dvcmQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRQd2QgPSAnJztcclxuICAgICAgICB0aGlzLnVpX2lucHV0TGFiZWwudGV4dCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXNbXCJ1aV9wd2RcIiArIGldLnRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvVG9wdXAoKSB7XHJcbiAgICAgICAgdGhpcy5IaWRlKCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1RvcHVwKCk7XHJcbiAgICB9XHJcbn0iXX0=