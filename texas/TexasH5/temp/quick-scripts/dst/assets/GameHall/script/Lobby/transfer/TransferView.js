
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/transfer/TransferView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bbaaMfxaBCFagCeslPRRkd', 'TransferView');
// GameHall/script/Lobby/transfer/TransferView.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 转账
 */
var TransferView = /** @class */ (function (_super) {
    __extends(TransferView, _super);
    function TransferView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**金币 */
        _this.ui_gold = null;
        _this.ui_btn_break = null;
        _this.ui_btn_addGold = null;
        _this.ui_sendId = null;
        _this.ui_sendGold = null;
        _this.ui_btn_send = null;
        _this.ui_btn_Max = null;
        _this.ui_btn_checkName = null;
        _this.ui_slider = null;
        _this.ui_correctID = null;
        _this.ui_transferTip = null;
        _this.ui_playId = null;
        _this.ui_playname = null;
        _this.ui_tipgold = null;
        _this.ui_btn_tipqx = null;
        _this.ui_btn_tipqr = null;
        return _this;
    }
    Object.defineProperty(TransferView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransferView.prototype, "componentName", {
        get: function () {
            return "transfer";
        },
        enumerable: false,
        configurable: true
    });
    TransferView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_slider.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this.ui_btn_Max.onClick(this.toMax, this);
        this.ui_btn_send.onClick(this.send, this);
        this.ui_btn_checkName.onClick(this.checkName, this);
        this.ui_btn_addGold.onClick(this.toTopup, this);
        this.ui_btn_tipqx.onClick(this.hideTip, this);
        this.ui_btn_tipqr.onClick(this.sendgoldtrade, this);
        this.ui_sendGold.on(fgui.Event.TEXT_CHANGE, this.goldTextChange, this);
    };
    TransferView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    TransferView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        _super.prototype.Hide.call(this);
    };
    TransferView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        cc.sys.localStorage.setItem("txverification_pwd", Date.now() + '');
        this.ui_btn_send.enabled = false;
        this.ui_correctID.visible = false;
        this.ui_sendId.text = '';
        this.ui_sendGold.text = '';
        var gold = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold);
        this.updateGold();
        this.ui_slider.max = gold >= 10000 ? 10000 : gold;
        this.isClickName = false;
        // 初始化滑动条
        this.ui_slider.value = 0;
    };
    TransferView.prototype.onChanged = function () {
        var val = Math.floor(this.ui_slider.value);
        this.ui_slider.value = val;
        this.ui_sendGold.text = val + '';
        this.ui_btn_send.enabled = val > 0;
    };
    TransferView.prototype.toMax = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        var max = this.ui_slider.max;
        this.ui_slider.value = max;
        this.ui_sendGold.text = max + '';
        this.goldTextChange(null);
    };
    TransferView.prototype.goldTextChange = function (event) {
        var str = +this.ui_sendGold.text;
        this.ui_sendGold.text = str + '';
        if (this.ui_sendId.text.length > 0 && this.ui_sendGold.text.length > 0) {
            this.ui_btn_send.enabled = Number(this.ui_sendGold.text) > 0;
        }
    };
    /**赠送金币 */
    TransferView.prototype.send = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        var gold = +this.ui_sendGold.text;
        var userId = +this.ui_sendId.text;
        if (gold <= 0 || !userId) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请检查输入参数");
            return;
        }
        if (UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) < gold) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("金币不足");
            return;
        }
        if (gold > 10000) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("單次轉賬限額10000");
            return;
        }
        if (!this.isClickName) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請先檢查接收人ID是否正確");
            return;
        }
        if (this.userid && this.userid != userId) {
            this.ui_correctID.visible = false;
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請先檢測用户ID");
            return;
        }
        this.userid = userId;
        this.showTip();
    };
    TransferView.prototype.updateGold = function () {
        var gold = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold);
        this.ui_gold.text = gold + '';
        this.ui_sendGold.text = "";
        this.ui_slider.max = gold > 10000 ? 10000 : gold;
        this.ui_transferTip.visible = false;
    };
    /**確認 */
    TransferView.prototype.showTip = function () {
        this.ui_transferTip.visible = true;
        var gold = +this.ui_sendGold.text;
        var userId = this.ui_sendId.text;
        this.ui_playId.setVar("id", userId).flushVars();
        this.ui_playname.setVar("name", this.nickname).flushVars();
        this.ui_tipgold.text = gold + '';
    };
    TransferView.prototype.hideTip = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        this.ui_transferTip.visible = false;
    };
    /**發送轉賬 */
    TransferView.prototype.sendgoldtrade = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        var gold = +this.ui_sendGold.text;
        var userId = +this.ui_sendId.text;
        gold = gold * 100;
        LobbyViewCtr_1.default.instance.cs_sendgoldtrade(userId, gold);
        this.ui_transferTip.visible = false;
    };
    /**發送再次驗證 */
    TransferView.prototype.sendDealgoldtrade = function () {
        var gold = +this.ui_sendGold.text;
        var userId = +this.ui_sendId.text;
        var pwd = LobbyViewCtr_1.default.instance.view.verificationPwdView.inputPwd;
        gold = gold * 100;
        LobbyViewCtr_1.default.instance.cs_dealgoldtrade(userId, gold, pwd);
    };
    /**检测用户名 */
    TransferView.prototype.checkName = function () {
        AudioManager_1.AudioManager.Singleton.play('TransferView', "button");
        var userId = +this.ui_sendId.text;
        if (!userId) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请输入正确的ID");
            return;
        }
        if (isNaN(userId)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请输入正确的ID");
            return;
        }
        if (userId == AppConst_1.AppConst.mPlayerModel.userid) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请其他人的ID");
            return;
        }
        LobbyViewCtr_1.default.instance.cs_searchgoldornickname(userId);
    };
    TransferView.prototype.showCorrectGreen = function (bool, name) {
        this.userid = +this.ui_sendId.text;
        if (bool) {
            this.isClickName = true;
        }
        name && (this.nickname = name);
        this.ui_correctID.visible = true;
        this.ui_correctID.selected = !bool;
        if (this.ui_sendGold.text.length > 0) {
            this.ui_btn_send.enabled = true;
        }
    };
    TransferView.prototype.toTopup = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    return TransferView;
}(ViewBase_1.default));
exports.default = TransferView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRyYW5zZmVyXFxUcmFuc2ZlclZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0QsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixnREFBMkM7QUFFM0M7O0dBRUc7QUFDSDtJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQWdOQztRQXRNRyxRQUFRO1FBQ0EsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxlQUFTLEdBQW9CLElBQUksQ0FBQztRQUNsQyxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDcEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBQ2pDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUNoQyxzQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFJdkMsZUFBUyxHQUF3QixJQUFJLENBQUM7UUFDdEMsaUJBQVcsR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDOztJQWdMOUMsQ0FBQztJQS9NRyxzQkFBYyw2Q0FBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHFDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx1Q0FBYTthQUEzQjtZQUNJLE9BQU8sVUFBVSxDQUFDO1FB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RTtZQUN4QyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsT0FBTztTQUNWO1FBQ0Qsc0JBQVksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHVDQUFnQixHQUF2QixVQUF3QixJQUFhLEVBQUUsSUFBYTtRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBTU0sOEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWhOQSxBQWdOQyxDQWhOeUMsa0JBQVEsR0FnTmpEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDovazotKZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZmVyVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJ0cmFuc2ZlclwiO1xyXG4gICAgfVxyXG4gICAgLyoq6YeR5biBICovXHJcbiAgICBwcml2YXRlIHVpX2dvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9icmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2FkZEdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9zZW5kSWQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3NlbmRHb2xkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fc2VuZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX01heDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2NoZWNrTmFtZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfc2xpZGVyOiBmZ3VpLkdTbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfY29ycmVjdElEOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfdHJhbnNmZXJUaXA6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0NsaWNrTmFtZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdWlfcGxheUlkOiBmZ3VpLkdSaWNoVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfcGxheW5hbWU6IGZndWkuR1JpY2hUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90aXBnb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fdGlwcXg6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl90aXBxcjogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdXNlcmlkOiBudW1iZXI7XHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9icmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9zbGlkZXIub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgdGhpcy5vbkNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX01heC5vbkNsaWNrKHRoaXMudG9NYXgsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NlbmQub25DbGljayh0aGlzLnNlbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2NoZWNrTmFtZS5vbkNsaWNrKHRoaXMuY2hlY2tOYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9hZGRHb2xkLm9uQ2xpY2sodGhpcy50b1RvcHVwLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9idG5fdGlwcXgub25DbGljayh0aGlzLmhpZGVUaXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3RpcHFyLm9uQ2xpY2sodGhpcy5zZW5kZ29sZHRyYWRlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9zZW5kR29sZC5vbihmZ3VpLkV2ZW50LlRFWFRfQ0hBTkdFLCB0aGlzLmdvbGRUZXh0Q2hhbmdlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInR4dmVyaWZpY2F0aW9uX3B3ZFwiLCBEYXRlLm5vdygpICsgJycpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NlbmQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfY29ycmVjdElELnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX3NlbmRJZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy51aV9zZW5kR29sZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgbGV0IGdvbGQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdvbGQoKTtcclxuICAgICAgICB0aGlzLnVpX3NsaWRlci5tYXggPSBnb2xkID49IDEwMDAwID8gMTAwMDAgOiBnb2xkO1xyXG4gICAgICAgIHRoaXMuaXNDbGlja05hbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5ruR5Yqo5p2hXHJcbiAgICAgICAgdGhpcy51aV9zbGlkZXIudmFsdWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IodGhpcy51aV9zbGlkZXIudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudWlfc2xpZGVyLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMudWlfc2VuZEdvbGQudGV4dCA9IHZhbCArICcnO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NlbmQuZW5hYmxlZCA9IHZhbCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvTWF4KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IG1heCA9IHRoaXMudWlfc2xpZGVyLm1heDtcclxuICAgICAgICB0aGlzLnVpX3NsaWRlci52YWx1ZSA9IG1heDtcclxuICAgICAgICB0aGlzLnVpX3NlbmRHb2xkLnRleHQgPSBtYXggKyAnJztcclxuICAgICAgICB0aGlzLmdvbGRUZXh0Q2hhbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb2xkVGV4dENoYW5nZShldmVudCkge1xyXG4gICAgICAgIGxldCBzdHIgPSArdGhpcy51aV9zZW5kR29sZC50ZXh0O1xyXG4gICAgICAgIHRoaXMudWlfc2VuZEdvbGQudGV4dCA9IHN0ciArICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnVpX3NlbmRJZC50ZXh0Lmxlbmd0aCA+IDAgJiYgdGhpcy51aV9zZW5kR29sZC50ZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy51aV9idG5fc2VuZC5lbmFibGVkID0gTnVtYmVyKHRoaXMudWlfc2VuZEdvbGQudGV4dCkgPiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirotaDpgIHph5HluIEgKi9cclxuICAgIHB1YmxpYyBzZW5kKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGdvbGQgPSArdGhpcy51aV9zZW5kR29sZC50ZXh0O1xyXG4gICAgICAgIGxldCB1c2VySWQgPSArdGhpcy51aV9zZW5kSWQudGV4dDtcclxuICAgICAgICBpZiAoZ29sZCA8PSAwIHx8ICF1c2VySWQpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuivt+ajgOafpei+k+WFpeWPguaVsFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCkgPCBnb2xkKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLph5HluIHkuI3otrNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdvbGQgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5Zau5qyh6L2J6LOs6ZmQ6aGNMTAwMDBcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2xpY2tOYW1lKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLoq4vlhYjmqqLmn6XmjqXmlLbkurpJROaYr+WQpuato+eiulwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51c2VyaWQgJiYgdGhpcy51c2VyaWQgIT0gdXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfY29ycmVjdElELnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuiri+WFiOaqoua4rOeUqOaIt0lEXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXNlcmlkID0gdXNlcklkO1xyXG4gICAgICAgIHRoaXMuc2hvd1RpcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVHb2xkKCkge1xyXG4gICAgICAgIGxldCBnb2xkID0gVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCk7XHJcbiAgICAgICAgdGhpcy51aV9nb2xkLnRleHQgPSBnb2xkICsgJyc7XHJcbiAgICAgICAgdGhpcy51aV9zZW5kR29sZC50ZXh0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVpX3NsaWRlci5tYXggPSBnb2xkID4gMTAwMDAgPyAxMDAwMCA6IGdvbGQ7XHJcbiAgICAgICAgdGhpcy51aV90cmFuc2ZlclRpcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56K66KqNICovXHJcbiAgICBwdWJsaWMgc2hvd1RpcCgpIHtcclxuICAgICAgICB0aGlzLnVpX3RyYW5zZmVyVGlwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBnb2xkID0gK3RoaXMudWlfc2VuZEdvbGQudGV4dDtcclxuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy51aV9zZW5kSWQudGV4dDtcclxuICAgICAgICB0aGlzLnVpX3BsYXlJZC5zZXRWYXIoXCJpZFwiLCB1c2VySWQpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMudWlfcGxheW5hbWUuc2V0VmFyKFwibmFtZVwiLCB0aGlzLm5pY2tuYW1lKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICB0aGlzLnVpX3RpcGdvbGQudGV4dCA9IGdvbGQgKyAnJztcclxuICAgIH1cclxuICAgIHB1YmxpYyBoaWRlVGlwKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy51aV90cmFuc2ZlclRpcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKirnmbzpgIHovYnos6wgKi9cclxuICAgIHB1YmxpYyBzZW5kZ29sZHRyYWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGdvbGQgPSArdGhpcy51aV9zZW5kR29sZC50ZXh0O1xyXG4gICAgICAgIGxldCB1c2VySWQgPSArdGhpcy51aV9zZW5kSWQudGV4dDtcclxuICAgICAgICBnb2xkID0gZ29sZCAqIDEwMDtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3Nfc2VuZGdvbGR0cmFkZSh1c2VySWQsIGdvbGQpO1xyXG4gICAgICAgIHRoaXMudWlfdHJhbnNmZXJUaXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueZvOmAgeWGjeasoempl+itiSAqL1xyXG4gICAgcHVibGljIHNlbmREZWFsZ29sZHRyYWRlKCkge1xyXG4gICAgICAgIGxldCBnb2xkID0gK3RoaXMudWlfc2VuZEdvbGQudGV4dDtcclxuICAgICAgICBsZXQgdXNlcklkID0gK3RoaXMudWlfc2VuZElkLnRleHQ7XHJcbiAgICAgICAgbGV0IHB3ZCA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnZlcmlmaWNhdGlvblB3ZFZpZXcuaW5wdXRQd2Q7XHJcbiAgICAgICAgZ29sZCA9IGdvbGQgKiAxMDA7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2RlYWxnb2xkdHJhZGUodXNlcklkLCBnb2xkLCBwd2QpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoq5qOA5rWL55So5oi35ZCNICovXHJcbiAgICBwdWJsaWMgY2hlY2tOYW1lKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVHJhbnNmZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9ICt0aGlzLnVpX3NlbmRJZC50ZXh0O1xyXG4gICAgICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLor7fovpPlhaXmraPnoa7nmoRJRFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4odXNlcklkKSkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6K+36L6T5YWl5q2j56Gu55qESURcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJJZCA9PSBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLor7flhbbku5bkurrnmoRJRFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3Nfc2VhcmNoZ29sZG9ybmlja25hbWUodXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0NvcnJlY3RHcmVlbihib29sOiBib29sZWFuLCBuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51c2VyaWQgPSArdGhpcy51aV9zZW5kSWQudGV4dDtcclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2tOYW1lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZSAmJiAodGhpcy5uaWNrbmFtZSA9IG5hbWUpO1xyXG4gICAgICAgIHRoaXMudWlfY29ycmVjdElELnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudWlfY29ycmVjdElELnNlbGVjdGVkID0gIWJvb2w7XHJcbiAgICAgICAgaWYgKHRoaXMudWlfc2VuZEdvbGQudGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX3NlbmQuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgdG9Ub3B1cCgpIHtcclxuICAgICAgICB0aGlzLkhpZGUoKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93VG9wdXAoKTtcclxuICAgIH1cclxufSJdfQ==