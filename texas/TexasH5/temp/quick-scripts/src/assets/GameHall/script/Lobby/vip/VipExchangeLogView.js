"use strict";
cc._RF.push(module, 'fe8a1qost1A6IZVGtqfZ3rp', 'VipExchangeLogView');
// GameHall/script/Lobby/vip/VipExchangeLogView.ts

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
/**
 * @description vip 兑换记录
 *
 */
var VipExchangeLogView = /** @class */ (function (_super) {
    __extends(VipExchangeLogView, _super);
    function VipExchangeLogView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_exchangeBreak = null;
        _this.ui_exLogList = null;
        _this.ui_changeLog = null;
        /**記錄數據 */
        _this.orderListData = [];
        return _this;
    }
    Object.defineProperty(VipExchangeLogView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExchangeLogView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExchangeLogView.prototype, "componentName", {
        get: function () {
            return "ExchangeLog";
        },
        enumerable: false,
        configurable: true
    });
    VipExchangeLogView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_exchangeBreak.onClick(this.Hide, this);
        this.ui_exLogList.setVirtual();
        this.ui_exLogList.itemRenderer = this.itemRender.bind(this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_changeLog);
    };
    VipExchangeLogView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    VipExchangeLogView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipExchangeLogView', "button");
        _super.prototype.Hide.call(this);
    };
    VipExchangeLogView.prototype.itemRender = function (index, obj) {
        var com = obj;
        var name = com.getChild("name").asTextField;
        var order = com.getChild("order").asTextField;
        var time = com.getChild("time").asTextField;
        var souce = com.getChild("souce").asTextField;
        var state = com.getChild("state").asTextField;
        name.text = this.orderListData[index].itemName;
        order.setVar("order", this.orderListData[index].orderNum).flushVars();
        time.setVar("time", this.orderListData[index].creatDate).flushVars();
        souce.setVar("jf", this.orderListData[index].itemScores + '').flushVars();
        state.text = this.orderListData[index].status;
    };
    VipExchangeLogView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.getitemOrderLog();
    };
    VipExchangeLogView.prototype.getitemOrderLog = function () {
        var _this = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Getitemorderlog" + ("?userid=" + AppConst_1.AppConst.mPlayerModel.userid);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            cc.log("兑换记录----------", res);
            if (res.code == 1) {
                _this.orderListData = res.data.data;
                _this.ui_exLogList.numItems = _this.orderListData.length;
            }
        })
            .catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("獲取兌換記錄失敗");
        });
    };
    return VipExchangeLogView;
}(ViewBase_1.default));
exports.default = VipExchangeLogView;

cc._RF.pop();