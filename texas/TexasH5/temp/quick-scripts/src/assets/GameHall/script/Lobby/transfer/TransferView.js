"use strict";
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